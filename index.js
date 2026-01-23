import{a as d,S as u,i as l}from"./assets/vendor-CNqCr-V-.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const f="54320927-5ca4d41cc3ecb718a2e32b522",m="https://pixabay.com/api/";async function h(r){return(await d.get(m,{params:{key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const p=document.querySelector(".gallery"),o=document.querySelector(".loader"),C=new u(".gallery a",{captionsData:"alt",captionDelay:250});function g(r){const a=r.map(t=>`
        <li class="image-wrapper">
          <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}" />
          </a>
          <div class="stats-panel">
            <div class="stat">
              <span class="stat-title">Likes</span>
              <span class="stat-number">${t.likes}</span>
            </div>
            <div class="stat">
              <span class="stat-title">Views</span>
              <span class="stat-number">${t.views}</span>
            </div>
            <div class="stat">
              <span class="stat-title">Comments</span>
              <span class="stat-number">${t.comments}</span>
            </div>
            <div class="stat">
              <span class="stat-title">Downloads</span>
              <span class="stat-number">${t.downloads}</span>
            </div>
          </div>
        </li>
    `).join("");p.innerHTML=a,C.refresh()}function L(){p.innerHTML=""}function y(){o.classList.remove("hidden"),o.textContent="Loading images, please wait..."}function w(){o.classList.add("hidden")}const v=document.querySelector(".form");v.addEventListener("submit",async r=>{r.preventDefault();const a=r.target.elements["search-text"].value.trim();if(!a){l.warning({message:"Please enter a search query!",position:"topRight"});return}L(),y(),await new Promise(t=>setTimeout(t,50));try{const t=await h(a);if(t.hits.length===0){c();return}g(t.hits)}catch{c()}finally{w()}});function c(){l.error({position:"topRight",backgroundColor:"#EF4040",timeout:3e3,close:!1,icon:"",message:`
      <div class="toast-content">
        <span class="toast-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_602_210)">
    <path d="M6.81 0.219C6.95056 0.0787966 7.14097 4.21785e-05 7.3395 0L16.6605 0C16.859 4.21785e-05 17.0494 0.0787966 17.19 0.219L23.781 6.81C23.9212 6.95056 24 7.14097 24 7.3395V16.6605C24 16.859 23.9212 17.0494 23.781 17.19L17.19 23.781C17.0494 23.9212 16.859 24 16.6605 24H7.3395C7.14097 24 6.95056 23.9212 6.81 23.781L0.219 17.19C0.0787966 17.0494 4.21785e-05 16.859 0 16.6605L0 7.3395C4.21785e-05 7.14097 0.0787966 6.95056 0.219 6.81L6.81 0.219ZM7.65 1.5L1.5 7.65V16.35L7.65 22.5H16.35L22.5 16.35V7.65L16.35 1.5H7.65Z" fill="#FAFAFB" />
    <path d="M6.969 6.969C7.03867 6.89916 7.12143 6.84374 7.21255 6.80593C7.30366 6.76812 7.40135 6.74866 7.5 6.74866C7.59865 6.74866 7.69633 6.76812 7.78745 6.80593C7.87857 6.84374 7.96133 6.89916 8.031 6.969L12 10.9395L15.969 6.969C16.0387 6.89927 16.1215 6.84395 16.2126 6.80622C16.3037 6.76848 16.4014 6.74905 16.5 6.74905C16.5986 6.74905 16.6963 6.76848 16.7874 6.80622C16.8785 6.84395 16.9613 6.89927 17.031 6.969C17.1007 7.03873 17.156 7.12152 17.1938 7.21263C17.2315 7.30374 17.2509 7.40139 17.2509 7.5C17.2509 7.59862 17.2315 7.69627 17.1938 7.78738C17.156 7.87849 17.1007 7.96127 17.031 8.031L13.0605 12L17.031 15.969C17.1007 16.0387 17.156 16.1215 17.1938 16.2126C17.2315 16.3037 17.2509 16.4014 17.2509 16.5C17.2509 16.5986 17.2315 16.6963 17.1938 16.7874C17.156 16.8785 17.1007 16.9613 17.031 17.031C16.9613 17.1007 16.8785 17.156 16.7874 17.1938C16.6963 17.2315 16.5986 17.2509 16.5 17.2509C16.4014 17.2509 16.3037 17.2315 16.2126 17.1938C16.1215 17.156 16.0387 17.1007 15.969 17.031L12 13.0605L8.031 17.031C7.96127 17.1007 7.87848 17.156 7.78737 17.1938C7.69626 17.2315 7.59861 17.2509 7.5 17.2509C7.40138 17.2509 7.30373 17.2315 7.21262 17.1938C7.12151 17.156 7.03873 17.1007 6.969 17.031C6.89927 16.9613 6.84395 16.8785 6.80621 16.7874C6.76847 16.6963 6.74905 16.5986 6.74905 16.5C6.74905 16.4014 6.76847 16.3037 6.80621 16.2126C6.84395 16.1215 6.89927 16.0387 6.969 15.969L10.9395 12L6.969 8.031C6.89915 7.96133 6.84374 7.87857 6.80593 7.78745C6.76812 7.69633 6.74866 7.59865 6.74866 7.5C6.74866 7.40135 6.76812 7.30367 6.80593 7.21255C6.84374 7.12143 6.89915 7.03867 6.969 6.969Z" fill="#FAFAFB" />
  </g>
  <defs>
    <clipPath id="clip0_602_210">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>
        </span>
        <span class="toast-text">
          Sorry, there are no images matching your search query.
        </span>
      </div>
    `})}
//# sourceMappingURL=index.js.map
