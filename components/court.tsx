'use client';
import {useReducer} from 'react';
import {motion,useReducedMotion} from 'framer-motion';
import {RotateCcw} from 'lucide-react';
import {COURT,courtReducer,initialCourtState,shotPoint} from '../lib/interactions.mjs';
const times=Array.from({length:41},(_,i)=>i/40);
const trajectory=times.map(shotPoint);
export function Court(){
  const [state,dispatch]=useReducer(courtReducer,initialCourtState);
  const reduce=useReducedMotion();
  return <div className="court-play refined-court" data-shooting={state.shooting}>
    <svg viewBox="0 0 600 400" className="court-scene" role="img" aria-label="Steph Curry inspired number 30 player shooting a basketball into the hoop">
      <defs>
        <linearGradient id="wood" x2="0" y2="1"><stop stopColor="#efd8b6"/><stop offset="1" stopColor="#d8ad7d"/></linearGradient>
        <linearGradient id="jersey" x2="1" y2="1"><stop stopColor="#3266ad"/><stop offset="1" stopColor="#153e77"/></linearGradient>
        <linearGradient id="skin" x2="1" y2="1"><stop stopColor="#c58e62"/><stop offset="1" stopColor="#9c633f"/></linearGradient>
        <radialGradient id="ball"><stop stopColor="#dc9853"/><stop offset="1" stopColor="#b66c30"/></radialGradient>
        <pattern id="planks" width="75" height="65" patternUnits="userSpaceOnUse"><path d="M0 0H75V65H0Z" fill="none" stroke="#ad794629"/><path d="M8 14H65M16 37H58M6 51H70" stroke="#fff1d81c"/></pattern>
      </defs>
      <rect width="600" height="400" fill="url(#wood)"/><rect width="600" height="400" fill="url(#planks)"/>
      <g stroke="#fff6df" strokeOpacity=".7" fill="none" strokeWidth="1.5"><rect x="20" y="20" width="560" height="360"/><path d="M580 215H443V360H580M580 80A215 215 0 0 0 365 295M365 295A215 215 0 0 0 383 380"/><ellipse cx="510" cy="287" rx="68" ry="72"/></g>
      <ellipse cx="142" cy="356" rx="75" ry="10" fill="#765537" opacity=".13"/>
      {/* Carefully drawn shooting posture, with bent knees and a relaxed follow-through. */}
      <g className="curry-player">
        <path d="M114 260Q98 280 99 306L75 338L94 344L124 309L137 280Z" fill="url(#skin)"/>
        <path d="M151 262L170 282L161 310L144 345L163 350L185 309Q193 288 180 275L171 253Z" fill="url(#skin)"/>
        <path d="M75 332L94 338L97 350L65 352Q55 349 60 344Z" fill="#f7f1e9" stroke="#d8bd91" strokeWidth="2"/><path d="M144 338L165 343L171 353L138 355Q129 352 133 348Z" fill="#f7f1e9" stroke="#d8bd91" strokeWidth="2"/>
        <path d="M61 347L95 345M135 350L168 348" fill="none" stroke="#3272b2" strokeWidth="3"/>
        <path d="M113 226L169 229L182 267L154 277L139 255L124 276L100 264Z" fill="#204b86"/><path d="M106 260L124 270M158 270L177 261" stroke="#ebbe57" strokeWidth="4"/>
        <path d="M118 171Q114 155 124 147L141 137L151 118L160 123L149 149L133 165L134 185Z" fill="url(#skin)"/>
        <path d="M153 173L167 149L164 112L170 87L179 89L177 115L184 151Q181 165 168 186Z" fill="url(#skin)"/>
        <path d="M166 114L170 89L176 81L179 85L176 97L182 91L186 93L180 104L178 119Z" fill="#c28b61"/>
        <path d="M150 119L157 105L163 97L168 99L164 108L160 126Z" fill="#c28b61"/>
        <path d="M127 167L139 171L153 165L164 176L170 228Q143 241 112 225L116 185Z" fill="url(#jersey)"/>
        <path d="M126 168Q138 183 153 167M118 179L121 223M161 180L164 225" fill="none" stroke="#e8be58" strokeWidth="3"/>
        <path d="M132 158L130 172Q142 181 150 168L145 153Z" fill="url(#skin)"/>
        <path d="M127 133Q125 114 139 111Q155 110 160 126L159 143Q154 161 141 161Q127 155 127 143Z" fill="url(#skin)"/>
        <path d="M127 133Q118 116 130 109Q149 98 159 115L161 130L155 126L150 118Q140 123 128 120Z" fill="#332b28"/>
        <path d="M134 145Q145 155 157 140L155 153Q148 164 139 158Z" fill="#49332b"/><path d="M140 149L149 149" stroke="#e4c29d" strokeWidth="1.3"/>
        <path d="M152 132L155 139L151 140M139 129L145 128" fill="none" stroke="#69432f" strokeWidth="1.3"/><circle cx="145" cy="133" r="1.4" fill="#2f2928"/>
        <text x="139" y="195" textAnchor="middle" fontFamily="Arial" fontWeight="700" fontSize="7" letterSpacing="1" fill="#e8c766">GOLDEN STATE</text>
        <circle cx="140" cy="212" r="14" fill="none" stroke="#d9b251" strokeWidth="1"/><text x="140" y="219" textAnchor="middle" fontFamily="Arial" fontWeight="700" fontSize="18" fill="#f0c75e">30</text>
      </g>
      <g className="backboard"><path d="M536 70V182" stroke="#84694e" strokeWidth="6" strokeLinecap="round"/><rect x="523" y="75" width="9" height="95" rx="3" fill="#f9f5e3" stroke="#b1987a" strokeWidth="2"/><path d="M525 113H532V146H525" fill="none" stroke="#bb8755" strokeWidth="2"/><path d="M490 142H528" stroke="#9f6540" strokeWidth="4"/></g>
      <motion.g className="basketball-svg" key={state.shots} initial={false} animate={state.shooting?{x:trajectory.map(p=>p.x),y:trajectory.map(p=>p.y),rotate:times.map(t=>t*300)}:{x:COURT.release.x,y:COURT.release.y,rotate:0}} transition={{duration:reduce?.08:1.25,times,ease:'linear'}} onAnimationComplete={()=>{if(state.shooting)dispatch({type:'finish'})}}>
        <circle r="12" fill="url(#ball)" stroke="#80502d" strokeWidth="1.2"/><path d="M-12 0H12M0-12V12M-8-9Q4 0-8 9M8-9Q-4 0 8 9" stroke="#84512e" strokeWidth=".9" fill="none"/>
      </motion.g>
      <motion.g className="net" animate={state.shooting?{rotate:[0,0,0,5,-4,0]}:{rotate:0}} style={{transformOrigin:'490px 142px'}} transition={{duration:reduce?.08:1.25,times:[0,.7,.8,.87,.94,1]}}><path d="M469 146L478 181H503L512 146M474 164H507M478 178L500 147M490 181L511 148M481 147L503 180M470 150L490 181" stroke="#fff8e9" strokeWidth="1.6" fill="none"/><ellipse cx="490" cy="142" rx="24" ry="5" fill="none" stroke="#a95832" strokeWidth="3.5"/></motion.g>
    </svg>
    <div className="court-score" aria-live="polite"><span>JUST FOR THE LOVE OF THE GAME</span><strong>{state.shots.toString().padStart(2,'0')}</strong><span>{state.shots===1?'BUCKET':'BUCKETS'}</span></div>
    <div className="court-actions"><button className="button basketball-button" onClick={()=>dispatch({type:'shoot'})} disabled={state.shooting}>{state.shooting?'Shot’s up…':state.shots?'One more shot?':'Take a shot'}<span aria-hidden="true">↗</span></button><button className="court-reset" onClick={()=>dispatch({type:'reset'})} disabled={state.shooting||state.shots===0} aria-label="Reset basketball score"><RotateCcw size={17}/></button></div>
  </div>;
}
