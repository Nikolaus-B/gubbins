(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const u=document.querySelector(".open-btn"),a=document.querySelector(".nav-mobile-list"),s=document.querySelector(".back-drop"),f=document.querySelector(".close-btn"),n=document.querySelector(".modal-wrapper"),l=document.body,m=()=>{n.style.display="block",s.classList.add("active"),l.classList.add("lock")},i=()=>{n.style.display="none",s.classList.remove("active"),l.classList.remove("lock")};u.addEventListener("click",m);f.addEventListener("click",i);a.addEventListener("click",i);
//# sourceMappingURL=modal-b52df760.js.map
