import{N as o,d as e,D as t,a7 as s,B as n,q as a,f as u,w as r,n as d}from"./vendor-DJ8gqV4u.js";import{P as l}from"./index-DFjnwy7q.js";import{i as c,u as i,o as m,B as p,h as y,f,a2 as v,g as b}from"./index-DKuwJ9Lq.js";import{t as x}from"./error-D_Dr4eZ1.js";import{a as M}from"./scroll-B4qvjNk2.js";const k=e=>{if(!e)return{onClick:o,onMousedown:o,onMouseup:o};let t=!1,s=!1;return{onClick:o=>{t&&s&&e(o),t=s=!1},onMousedown:o=>{t=o.target===o.currentTarget},onMouseup:o=>{s=o.target===o.currentTarget}}},g=c({mask:{type:Boolean,default:!0},customMaskEvent:Boolean,overlayClass:{type:m([String,Array,Object])},zIndex:{type:m([String,Number])}});const w=e({name:"ElOverlay",props:g,emits:{click:o=>o instanceof MouseEvent},setup(o,{slots:e,emit:a}){const u=i("overlay"),{onClick:r,onMousedown:d,onMouseup:c}=k(o.customMaskEvent?void 0:o=>{a("click",o)});return()=>o.mask?t("div",{class:[u.b(),o.overlayClass],style:{zIndex:o.zIndex},onClick:r,onMousedown:d,onMouseup:c},[n(e,"default")],l.STYLE|l.CLASS|l.PROPS,["onClick","onMouseup","onMousedown"]):s("div",{class:o.overlayClass,style:{zIndex:o.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[n(e,"default")])}}),h=(o,e={})=>{a(o)||x("[useLockscreen]","You need to pass a ref param to this function");const t=e.ns||i("popup"),s=u((()=>t.bm("parent","hidden")));if(!p||y(document.body,s.value))return;let n=0,l=!1,c="0";const m=()=>{setTimeout((()=>{"undefined"!=typeof document&&l&&document&&(document.body.style.width=c,b(document.body,s.value))}),200)};r(o,(o=>{if(!o)return void m();l=!y(document.body,s.value),l&&(c=document.body.style.width,f(document.body,s.value)),n=M(t.namespace.value);const e=document.documentElement.clientHeight<document.body.scrollHeight,a=v(document.body,"overflowY");n>0&&(e||"scroll"===a)&&l&&(document.body.style.width=`calc(100% - ${n}px)`)})),d((()=>m()))};export{w as E,k as a,h as u};
