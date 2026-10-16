export function Peacock(){return <svg className="peacock-art" viewBox="0 0 620 560" role="img" aria-label="Peacock with an ornate teal, violet, and gold feather fan">
  <defs><linearGradient id="feather" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#356f72"/><stop offset=".5" stopColor="#63958c"/><stop offset="1" stopColor="#a8b995"/></linearGradient><linearGradient id="peacock-body" x2="1" y2="1"><stop stopColor="#2d6778"/><stop offset=".6" stopColor="#284b68"/><stop offset="1" stopColor="#58486d"/></linearGradient><linearGradient id="wing" x2="1" y2="1"><stop stopColor="#83a69a"/><stop offset="1" stopColor="#3f7274"/></linearGradient></defs>
  <g opacity=".9">{Array.from({length:11},(_,i)=>{const angle=(i-5)*13;return <g key={i} transform={`rotate(${angle} 300 415)`}>
    <path d="M300 415C251 326 234 200 269 116Q300 48 331 116C366 200 349 326 300 415Z" fill="url(#feather)" stroke="#c5b388" strokeWidth="1.2"/>
    <path d="M300 405V101M300 367L271 290M300 345L330 265M300 313L260 226M300 286L339 199M300 261L263 181" stroke="#d6cd9c" strokeWidth="1" opacity=".55" fill="none"/>
    <path d="M300 113C254 140 254 205 300 235C346 205 346 140 300 113Z" fill="#a1b39a" stroke="#dec594" strokeWidth="2"/>
    <ellipse cx="300" cy="174" rx="24" ry="36" fill="#bb9a61"/>
    <ellipse cx="300" cy="174" rx="17" ry="26" fill="#35636e"/>
    <ellipse cx="300" cy="174" rx="10" ry="17" fill="#4b3b65"/>
    <ellipse cx="296" cy="169" rx="3" ry="7" fill="#d4c2a1" opacity=".8"/>
  </g>})}</g>
  <path d="M292 397Q329 354 350 319Q360 298 355 271Q350 240 370 232Q390 226 395 245Q399 263 382 275Q380 306 391 343Q404 385 379 418Q345 456 300 448Q266 446 259 427Q253 410 292 397Z" fill="url(#peacock-body)"/>
  <path d="M270 409Q313 373 361 384Q389 405 358 428Q319 451 275 431Z" fill="url(#wing)" stroke="#bdb789" strokeWidth="1.3"/>
  <path d="M285 414Q325 395 363 403M291 424Q326 408 357 412M310 433Q337 420 350 423" fill="none" stroke="#bcc29a" strokeWidth="1"/>
  <path d="M372 250Q379 246 386 250" stroke="#e6d5b2" strokeWidth="5" fill="none" strokeLinecap="round"/><circle cx="380" cy="248" r="2.5" fill="#253f4a"/>
  <path d="M392 251L410 258L392 261Z" fill="#bca372"/>
  <path d="M369 234L359 213M375 232L374 207M381 234L389 213" fill="none" stroke="#537877" strokeWidth="1.5"/>
  <g fill="#6a6282"><ellipse cx="358" cy="211" rx="4" ry="7" transform="rotate(-25 358 211)"/><ellipse cx="374" cy="205" rx="4" ry="7"/><ellipse cx="390" cy="211" rx="4" ry="7" transform="rotate(25 390 211)"/></g>
  <path d="M324 447L324 479L310 486M349 444L353 477L370 483" stroke="#9e865e" strokeWidth="2" fill="none" strokeLinecap="round"/>
  <path d="M291 490Q348 502 395 488" stroke="#c9b7a0" strokeWidth="1" fill="none"/>
  <g fill="#bba279" opacity=".7"><circle cx="146" cy="421" r="2"/><circle cx="464" cy="388" r="2"/><path d="M479 352l3 7 7 3-7 3-3 7-3-7-7-3 7-3Z"/></g>
</svg>}
