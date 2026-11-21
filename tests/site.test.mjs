import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {AgentNetwork,validateNetwork} from '../runtime/kernel.js';
import {ActionRegistry} from '../runtime/actions.js';
import {runAgent} from '../runtime/runner.js';
import {TraceBus} from '../runtime/trace.js';
import {manifestAllowsPeer,selectPeerRouter} from '../runtime/engine.js';
import {services,draftRequest,registerActions} from '../site-actions.js';

const config=JSON.parse(await readFile(new URL('../northgate.network.json',import.meta.url)));
const manifest=JSON.parse(await readFile(new URL('../agent-manifest.json',import.meta.url)));
const network=new AgentNetwork(config,'northgate');
test('published JSON validates, has two agents and exact front agent',()=>{
  assert.deepEqual(validateNetwork(network).errors,[]);
  assert.equal(network.findFrontMan(),'concierge');
  assert.equal(network.specMap.size,2);
  assert.equal(network.classifyTool('trade_partner').kind,'link');
});
test('draft normal, empty and unsupported city cases',()=>{
  const args={service:'Leak repair',city:'Edmonton',symptoms:'Drip beneath sink',urgency:'Routine',window:'Tuesday afternoon'};
  assert.equal(draftRequest(args).status,'draft_only');
  assert.match(draftRequest(args).text,/Not sent/);
  assert.equal(draftRequest({}).ok,false);
  assert.equal(draftRequest({...args,city:'Calgary'}).ok,false);
  assert.equal(draftRequest({...args,symptoms:'x'.repeat(1001)}).ok,false);
});
test('real runner delegates internally and calls grounded local capability with scripted model',async()=>{
  const base='http://localhost:8080';
  const actions=new ActionRegistry();registerActions({register:d=>actions.register({base,network:'northgate'},d)});
  const steps=[{tool:'service_adviser',args:{request:'Do you serve St. Albert?'}},{tool:'website_read_services',args:{}},{text:'St. Albert is in the published service area.'},{text:'Yes, St. Albert is served. An inspection and written quote are required.'}];
  const seen=[];
  const llm={chat:async req=>{seen.push(req);const s=steps.shift();assert.ok(s,'unexpected model call');return {content:s.text||'',toolCalls:s.tool?[{id:`call-${seen.length}`,type:'function',function:{name:s.tool,arguments:JSON.stringify(s.args)}}]:[]};}};
  const result=await runAgent({network,manifest,actions,baseOrigin:base,displayOrigin:'localhost:8080',trace:new TraceBus(),isTop:true,frontMan:'concierge',history:[],llm},'concierge','Do you serve St. Albert?',null,[]);
  assert.match(result.text,/St. Albert/);assert.equal(steps.length,0);
  assert.ok(seen.some(req=>req.messages.some(m=>m.role==='tool'&&m.content.includes('Sherwood Park'))));
});
test('invalid network and denied origin fail closed; peers retain caller router',()=>{
  assert.ok(validateNetwork(new AgentNetwork({tools:[]},'bad')).errors.length);
  assert.equal(manifestAllowsPeer('https://denied.example/x',{peer_policy:{mode:'closed'},allowed_peers:[]}),false);
  assert.deepEqual(selectPeerRouter({baseUrl:'https://caller.example/v1',mock:false}),{baseUrl:'https://caller.example/v1',mock:false});
  assert.equal(services.pricing.includes('No fixed prices'),true);
});
