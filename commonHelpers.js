(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=document.querySelector(".open-btn");document.querySelector(".header-container");const s=document.querySelector(".back-drop"),d=document.querySelector(".close-btn"),n=document.body,u=()=>{s.classList.add("active"),n.classList.add("lock")},a=()=>{s.classList.remove("active"),n.classList.remove("lock")};l.addEventListener("click",u);d.addEventListener("click",a);
//# sourceMappingURL=commonHelpers.js.map
