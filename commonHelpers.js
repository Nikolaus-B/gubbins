(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const d=document.querySelector(".open-btn"),u=document.querySelector(".nav-mobile-list"),n=document.querySelector(".back-drop"),a=document.querySelector(".close-btn"),s=document.querySelector(".modal-wrapper"),f=()=>{s.style.display="block",n.classList.add("active")},i=()=>{s.style.display="none",n.classList.remove("active")};d.addEventListener("click",f);a.addEventListener("click",i);u.addEventListener("click",i);
//# sourceMappingURL=commonHelpers.js.map
