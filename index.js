import{S as m,i as a}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function g(i){return i.map(({webformatURL:o,tags:t,largeImageURL:l,likes:e,views:r,comments:s,downloads:p})=>`<li class="li-item">
             <a class="gallery-link" href="${l}">
               <img class="gallery-img" src="${o}" alt="${t}" width="300">
             </a>
               <ul class="image-description">
               <li>
                 <h2 class="title">Likes</h2>
                 <p>${e}</p>
               </li>
               <li>
               <h2 class="title">Views</h2>
               <p>${r}</p>
               </li>
               <li>
                 <h2 class="title">Comments</h2>
                 <p>${s}</p>
               </li>
               <li>
                 <h2 class="title">Downloads</h2>
                 <p>${p}</p>
               </li>
               </ul>
       </li>`).join("")}let h=new m(".gallery .gallery-link",{captions:!0,captionsData:"alt",captionDelay:250});const f="47504793-d73e7cf3fd6e66d39d7291c94",c=document.querySelector(".gallery");function y(i){const o=new URLSearchParams({key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`https://pixabay.com/api/?key=${f}&q=${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{t.hits.length===0&&a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}),c.innerHTML="",console.log(t),c.insertAdjacentHTML("beforeend",g(t.hits)),h.refresh()}).catch(t=>{a.error({title:"Error",message:`An error occurred: ${t.message}`,position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"})}).finally(()=>{d()})}const n=document.querySelector(".form"),L=document.querySelector(".gallery");function u(){loader.style.display="block"}function d(){loader.style.display="none"}n.dataset.listenerAdded||(n.addEventListener("submit",i=>{i.preventDefault();const t=i.target.elements.search.value.trim();if(u(),t)u(),y(t);else{a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight",backgroundColor:"#f39c12",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}),L.innerHTML="",d();return}n.reset()}),n.dataset.listenerAdded=!0);
//# sourceMappingURL=index.js.map
