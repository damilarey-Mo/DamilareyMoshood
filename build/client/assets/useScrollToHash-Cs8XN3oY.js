import{r as c,u as i,a as u}from"./components-BEVlEQcB.js";import{u as m}from"./heading-CcgLg--t.js";function v(){const e=c.useRef(),t=i(),s=u(),a=m();return c.useCallback((l,o)=>{const n=l.split("#")[1];document.getElementById(n).scrollIntoView({behavior:a?"auto":"smooth"});const r=()=>{clearTimeout(e.current),e.current=setTimeout(()=>{window.removeEventListener("scroll",r),window.location.pathname===t.pathname&&(o==null||o(),s(`${t.pathname}#${n}`,{scroll:!1}))},50)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r),clearTimeout(e.current)}},[s,a,t.pathname])}export{v as u};