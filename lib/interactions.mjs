/** All court coordinates share one SVG viewBox, so ball and hoop scale together. */
export const COURT = Object.freeze({ width: 600, height: 400, release: {x:178,y:78}, rim: {x:490,y:142}, netExit: {x:490,y:195} });
export function shotPoint(progress) {
  if (!Number.isFinite(progress)) throw new TypeError('Shot progress must be finite');
  const t = Math.min(1, Math.max(0, progress));
  if (t <= .8) {
    const u=t/.8, v=1-u;
    return {x:v*v*COURT.release.x+2*v*u*333+u*u*COURT.rim.x,y:v*v*COURT.release.y+2*v*u*(-65)+u*u*COURT.rim.y};
  }
  return {x:COURT.rim.x,y:COURT.rim.y+(COURT.netExit.y-COURT.rim.y)*((t-.8)/.2)};
}
export const initialCourtState = Object.freeze({shots:0,shooting:false});
export function courtReducer(state,action) {
  if(action.type==='shoot') return state.shooting?state:{...state,shooting:true};
  if(action.type==='finish') return state.shooting?{shots:state.shots+1,shooting:false}:state;
  if(action.type==='reset') return state.shooting?state:{...initialCourtState};
  return state;
}
export const initialTargetState = Object.freeze({phase:'ready',shots:0,revealed:false});
export function targetReducer(state,action) {
  if(action.type==='fire') return state.phase==='firing'?state:{phase:'firing',shots:state.shots+1,revealed:state.revealed};
  if(action.type==='hit') return state.phase==='firing'?{...state,phase:'hit',revealed:true}:state;
  return state;
}
