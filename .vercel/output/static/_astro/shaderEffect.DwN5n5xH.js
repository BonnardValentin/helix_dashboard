function r(a){if(!a)return;let n;const e=()=>{const t=Date.now()*.001,i=t*10%360;a.style.background=`radial-gradient(circle at ${50+Math.sin(t)*10}% ${50+Math.cos(t)*10}%, 
                               hsl(${i}, 70%, 60%, 0.2), 
                               transparent 80%)`,n=requestAnimationFrame(e)};e(),window.addEventListener("unload",()=>{n&&cancelAnimationFrame(n)})}export{r as initShaderEffect};
