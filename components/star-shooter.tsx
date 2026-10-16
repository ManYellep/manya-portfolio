'use client';
import {useReducer,useEffect} from 'react';
import {motion,useReducedMotion} from 'framer-motion';
import {ArrowUpRight} from 'lucide-react';
import {initialTargetState,targetReducer} from '../lib/interactions.mjs';
export function StarShooter(){
  const [state,dispatch]=useReducer(targetReducer,initialTargetState);
  const reduce=useReducedMotion();
  useEffect(()=>{if(state.phase!=='firing')return;const timer=window.setTimeout(()=>dispatch({type:'hit'}),reduce?60:680);return()=>window.clearTimeout(timer)},[state.phase,state.shots,reduce]);
  return <div className="star-shooter-panel"><button className="starfighter-control" onClick={()=>dispatch({type:'fire'})} disabled={state.phase==='firing'} aria-expanded={state.revealed} aria-controls="patent-link" aria-label="Fire starfighter at target to reveal patent">
    <svg viewBox="0 0 360 170" role="img" aria-label="A starfighter fires twin laser bolts at an orbiting target drone">
      <defs><linearGradient id="ship-metal" x2="1" y2="1"><stop stopColor="#d6d0e2"/><stop offset="1" stopColor="#716582"/></linearGradient><radialGradient id="impact"><stop stopColor="#fff4cb"/><stop offset=".4" stopColor="#e0a7fd"/><stop offset="1" stopColor="#b276ff" stopOpacity="0"/></radialGradient></defs>
      <g fill="#c3a7e0" opacity=".35"><circle cx="17" cy="17" r="1"/><circle cx="164" cy="32" r="1.2"/><circle cx="225" cy="137" r="1"/><circle cx="315" cy="28" r="1.3"/><circle cx="90" cy="142" r="1"/></g>
      <path d="M119 83H294" stroke="#bc99d82e" strokeDasharray="3 8"/>
      <motion.g animate={state.phase==='firing'?{x:[0,-5,0]}:{x:0}} transition={{duration:reduce?0:.25}}>
        <path d="M31 69L15 49L61 59L105 80L62 96L15 116L31 92Z" fill="url(#ship-metal)" stroke="#c0acd2" strokeWidth="1"/>
        <path d="M42 60L55 24L66 25L59 67M42 102L55 139L66 138L59 96" fill="#61536f" stroke="#b7a1cb" strokeWidth="1.3"/>
        <path d="M19 61L118 77L126 83L118 89L19 105L40 84Z" fill="url(#ship-metal)"/>
        <path d="M65 76L88 81L65 88L57 83Z" fill="#272339" stroke="#b79dc9" strokeWidth="1"/>
        <path d="M58 29H91M58 133H91" stroke="#bca9cd" strokeWidth="3" strokeLinecap="round"/>
        <path d="M24 77L8 83L24 89Z" fill="#cda1fa"/><path d="M15 80L1 83L15 86Z" fill="#eff0ff"/>
      </motion.g>
      <motion.g animate={{opacity:state.phase==='hit'?0:1,scale:state.phase==='hit'?.65:1}} style={{transformOrigin:'298px 83px'}} transition={{duration:reduce?0:.2}}>
        <path d="M272 57L266 83L272 109L281 103V63ZM323 57L329 83L323 109L314 103V63Z" fill="#655473" stroke="#ba9ad0" strokeWidth="1.5"/>
        <path d="M277 83H319" stroke="#d4bbe4" strokeWidth="3"/><circle cx="298" cy="83" r="16" fill="#292236" stroke="#d3b7e7" strokeWidth="1.5"/><circle cx="298" cy="83" r="7" fill="#86649d"/><path d="M298 62V55M298 111V104M277 83H268M319 83H328" stroke="#a07fba" strokeWidth="1"/>
      </motion.g>
      {state.phase==='firing'&&<motion.g key={state.shots} initial={{x:0,opacity:1}} animate={{x:[0,190,190],opacity:[1,1,0]}} transition={{duration:reduce?.05:.65,times:[0,.95,1],ease:'linear'}}><path d="M92 77H109M92 89H109" stroke="#e8c5ff" strokeWidth="3" strokeLinecap="round" style={{filter:'drop-shadow(0 0 5px #c67dff)'}}/></motion.g>}
      {state.phase==='hit'&&<motion.g key={`impact-${state.shots}`} initial={{opacity:1,scale:.3}} animate={{opacity:[1,1,0],scale:[.3,1.3,1.8]}} transition={{duration:reduce?.05:.55}} style={{transformOrigin:'298px 83px'}}><circle cx="298" cy="83" r="38" fill="url(#impact)"/><path d="M298 43V123M258 83H338M270 55L326 111M270 111L326 55" stroke="#ecd4ff" strokeWidth="1.5"/></motion.g>}
      <text x="15" y="160" fill="#9b83ad" fontFamily="monospace" fontSize="7" letterSpacing="1.5">FBX-01 / STARFIGHTER</text><text x="267" y="160" fill="#9b83ad" fontFamily="monospace" fontSize="7" letterSpacing="1">TARGET 01</text>
    </svg>
    <span className="starfighter-action">{state.phase==='firing'?'Lasers away…':state.revealed?'Fire again':'Fire to reveal the invention'}<span aria-hidden="true">↗</span></span>
  </button><div id="patent-link" aria-live="polite">{state.revealed&&<motion.a className="revealed-link" initial={{opacity:0,y:5}} animate={{opacity:1,y:0}} href="https://patents.google.com/patent/US12484645B1/en" target="_blank" rel="noreferrer">Patent unlocked · US12484645B1 <ArrowUpRight size={15}/></motion.a>}</div></div>
}
