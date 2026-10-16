import test from 'node:test';
import assert from 'node:assert/strict';
import {COURT,shotPoint,courtReducer,initialCourtState,targetReducer,initialTargetState} from '../lib/interactions.mjs';

test('basketball leaves the hand, reaches the center of the rim, and exits the net',()=>{
  assert.deepEqual(shotPoint(0),COURT.release);
  assert.deepEqual(shotPoint(.8),COURT.rim);
  assert.deepEqual(shotPoint(1),COURT.netExit);
});
test('basket and ball stay aligned on phone, tablet, and desktop',()=>{
  for(const width of [280,320,390,768,1280]){
    const scale=width/COURT.width;
    assert.equal(shotPoint(.8).x*scale,COURT.rim.x*scale);
    assert.equal(shotPoint(.8).y*scale,COURT.rim.y*scale);
  }
});
test('trajectory has a visible arc and no discontinuity at the rim',()=>{
  assert.ok(shotPoint(.4).y<COURT.release.y);
  assert.ok(shotPoint(.4).y>=12,'ball must remain inside the top of the viewBox');
  assert.ok(Math.abs(shotPoint(.800001).y-shotPoint(.799999).y)<.01);
});
test('out-of-range progress clamps; invalid inputs are rejected',()=>{
  assert.deepEqual(shotPoint(-100),COURT.release);
  assert.deepEqual(shotPoint(100),COURT.netExit);
  for(const value of [NaN,Infinity,-Infinity,undefined])assert.throws(()=>shotPoint(value),TypeError);
});
test('a normal shot scores exactly once when its animation finishes',()=>{
  const started=courtReducer(initialCourtState,{type:'shoot'});
  assert.deepEqual(started,{shots:0,shooting:true});
  const finished=courtReducer(started,{type:'finish'});
  assert.deepEqual(finished,{shots:1,shooting:false});
  assert.equal(courtReducer(finished,{type:'finish'}),finished);
});
test('rapid repeat clicks and resets cannot corrupt an in-flight shot',()=>{
  const started=courtReducer(initialCourtState,{type:'shoot'});
  assert.equal(courtReducer(started,{type:'shoot'}),started);
  assert.equal(courtReducer(started,{type:'reset'}),started);
  const finished=courtReducer(started,{type:'finish'});
  assert.deepEqual(courtReducer(finished,{type:'reset'}),initialCourtState);
});
test('star shooter reveals patent only after impact and can fire again',()=>{
  assert.equal(targetReducer(initialTargetState,{type:'hit'}),initialTargetState);
  const fired=targetReducer(initialTargetState,{type:'fire'});
  assert.equal(fired.revealed,false);
  assert.equal(targetReducer(fired,{type:'fire'}),fired);
  const hit=targetReducer(fired,{type:'hit'});
  assert.deepEqual(hit,{phase:'hit',shots:1,revealed:true});
  assert.deepEqual(targetReducer(hit,{type:'fire'}),{phase:'firing',shots:2,revealed:true});
});

test('Dalea branding uses the correct capitalization throughout the interface',async()=>{
  const {readFile,readdir}=await import('node:fs/promises');
  async function scan(dir){
    for(const entry of await readdir(dir,{withFileTypes:true})){
      const path=`${dir}/${entry.name}`;
      if(entry.isDirectory())await scan(path);
      else if(/\.tsx$/.test(entry.name))assert.ok(!(await readFile(path,'utf8')).includes('DaLea'),`Incorrect Dalea branding in ${path}`);
    }
  }
  await scan('app');await scan('components');
});
