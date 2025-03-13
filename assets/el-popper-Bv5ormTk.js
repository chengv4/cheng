import{i as e,a as t,u as n,o,$ as r,aV as a,n as i,B as s,Z as l,x as u,L as p,w as f,aW as c,c as d,aX as v,v as g,aY as m,aZ as h}from"./index-BgOjnbBK.js";import{d as y,r as b,f as w,B as x,z as O,i as R,w as A,a6 as E,c as T,o as C,G as S,H as j,u as k,N as M,F as B,av as P,k as F,Q as L,au as D,am as _,D as I,a as H,M as $,O as W,E as q,C as z,s as N,g as U,y as V,j as K,a8 as Z,a9 as X,T as Y,K as G,l as J,aw as Q,J as ee}from"./vendor-DJ8gqV4u.js";import{c as te,f as ne,j as oe,u as re}from"./index-Dx3KmV6u.js";import{i as ae,E as ie,a as se,b as le}from"./index-6M53_-TE.js";function ue(e){return void 0===e}const pe=Symbol("popper"),fe=Symbol("popperContent"),ce=e({role:{type:String,values:["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],default:"tooltip"}}),de=y({name:"ElPopper",inheritAttrs:!1});var ve=t(y({...de,props:ce,setup(e,{expose:t}){const n=e,o={triggerRef:b(),popperInstanceRef:b(),contentRef:b(),referenceRef:b(),role:w((()=>n.role))};return t(o),O(pe,o),(e,t)=>x(e.$slots,"default")}}),[["__file","popper.vue"]]);const ge=e({arrowOffset:{type:Number,default:5}}),me=y({name:"ElPopperArrow",inheritAttrs:!1});var he=t(y({...me,props:ge,setup(e,{expose:t}){const o=e,r=n("popper"),{arrowOffset:a,arrowRef:i,arrowStyle:s}=R(fe,void 0);return A((()=>o.arrowOffset),(e=>{a.value=e})),E((()=>{i.value=void 0})),t({arrowRef:i}),(e,t)=>(C(),T("span",{ref_key:"arrowRef",ref:i,class:j(k(r).e("arrow")),style:S(k(s)),"data-popper-arrow":""},null,6))}}),[["__file","arrow.vue"]]);const ye=e({virtualRef:{type:o(Object)},virtualTriggering:Boolean,onMouseenter:{type:o(Function)},onMouseleave:{type:o(Function)},onClick:{type:o(Function)},onKeydown:{type:o(Function)},onFocus:{type:o(Function)},onBlur:{type:o(Function)},onContextmenu:{type:o(Function)},id:String,open:Boolean}),be=Symbol("elForwardRef"),we=y({name:"ElOnlyChild",setup(e,{slots:t,attrs:n}){var o;const r=R(be),a=(i=null!=(o=null==r?void 0:r.setForwardRef)?o:M,{mounted(e){i(e)},updated(e){i(e)},unmounted(){i(null)}});var i;return()=>{var e;const o=null==(e=t.default)?void 0:e.call(t,n);if(!o)return null;if(o.length>1)return null;const r=xe(o);return r?B(P(r,n),[[a]]):null}}});function xe(e){if(!e)return null;const t=e;for(const n of t){if(F(n))switch(n.type){case _:continue;case D:case"svg":return Oe(n);case L:return xe(n.children);default:return n}return Oe(n)}return null}function Oe(e){const t=n("only-child");return I("span",{class:t.e("content")},[e])}const Re=y({name:"ElPopperTrigger",inheritAttrs:!1});var Ae=t(y({...Re,props:ye,setup(e,{expose:t}){const n=e,{role:o,triggerRef:s}=R(pe,void 0);var l;l=s,O(be,{setForwardRef:e=>{l.value=e}});const u=w((()=>f.value?n.id:void 0)),p=w((()=>{if(o&&"tooltip"===o.value)return n.open&&n.id?n.id:void 0})),f=w((()=>{if(o&&"tooltip"!==o.value)return o.value})),c=w((()=>f.value?`${n.open}`:void 0));let d;const v=["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"];return H((()=>{A((()=>n.virtualRef),(e=>{e&&(s.value=a(e))}),{immediate:!0}),A(s,((e,t)=>{null==d||d(),d=void 0,r(e)&&(v.forEach((o=>{var r;const a=n[o];a&&(e.addEventListener(o.slice(2).toLowerCase(),a),null==(r=null==t?void 0:t.removeEventListener)||r.call(t,o.slice(2).toLowerCase(),a))})),ae(e)&&(d=A([u,p,f,c],(t=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(((n,o)=>{i(t[o])?e.removeAttribute(n):e.setAttribute(n,t[o])}))}),{immediate:!0}))),r(t)&&ae(t)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((e=>t.removeAttribute(e)))}),{immediate:!0})})),E((()=>{if(null==d||d(),d=void 0,s.value&&r(s.value)){const e=s.value;v.forEach((t=>{const o=n[t];o&&e.removeEventListener(t.slice(2).toLowerCase(),o)})),s.value=void 0}})),t({triggerRef:s}),(e,t)=>e.virtualTriggering?W("v-if",!0):(C(),$(k(we),z({key:0},e.$attrs,{"aria-controls":k(u),"aria-describedby":k(p),"aria-expanded":k(c),"aria-haspopup":k(f)}),{default:q((()=>[x(e.$slots,"default")])),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}}),[["__file","trigger.vue"]]),Ee="top",Te="bottom",Ce="right",Se="left",je="auto",ke=[Ee,Te,Ce,Se],Me="start",Be="end",Pe="viewport",Fe="popper",Le=ke.reduce((function(e,t){return e.concat([t+"-"+Me,t+"-"+Be])}),[]),De=[].concat(ke,[je]).reduce((function(e,t){return e.concat([t,t+"-"+Me,t+"-"+Be])}),[]),_e=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Ie(e){return e?(e.nodeName||"").toLowerCase():null}function He(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function $e(e){return e instanceof He(e).Element||e instanceof Element}function We(e){return e instanceof He(e).HTMLElement||e instanceof HTMLElement}function qe(e){return"undefined"!=typeof ShadowRoot&&(e instanceof He(e).ShadowRoot||e instanceof ShadowRoot)}var ze={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];!We(r)||!Ie(r)||(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});!We(o)||!Ie(o)||(Object.assign(o.style,a),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};function Ne(e){return e.split("-")[0]}var Ue=Math.max,Ve=Math.min,Ke=Math.round;function Ze(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(We(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(o=Ke(n.width)/i||1),a>0&&(r=Ke(n.height)/a||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function Xe(e){var t=Ze(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function Ye(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&qe(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Ge(e){return He(e).getComputedStyle(e)}function Je(e){return["table","td","th"].indexOf(Ie(e))>=0}function Qe(e){return(($e(e)?e.ownerDocument:e.document)||window.document).documentElement}function et(e){return"html"===Ie(e)?e:e.assignedSlot||e.parentNode||(qe(e)?e.host:null)||Qe(e)}function tt(e){return We(e)&&"fixed"!==Ge(e).position?e.offsetParent:null}function nt(e){for(var t=He(e),n=tt(e);n&&Je(n)&&"static"===Ge(n).position;)n=tt(n);return n&&("html"===Ie(n)||"body"===Ie(n)&&"static"===Ge(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&We(e)&&"fixed"===Ge(e).position)return null;var n=et(e);for(qe(n)&&(n=n.host);We(n)&&["html","body"].indexOf(Ie(n))<0;){var o=Ge(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}function ot(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function rt(e,t,n){return Ue(e,Ve(t,n))}function at(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function it(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var st={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,s=Ne(n.placement),l=ot(s),u=[Se,Ce].indexOf(s)>=0?"height":"width";if(a&&i){var p=function(e,t){return at("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:it(e,ke))}(r.padding,n),f=Xe(a),c="y"===l?Ee:Se,d="y"===l?Te:Ce,v=n.rects.reference[u]+n.rects.reference[l]-i[l]-n.rects.popper[u],g=i[l]-n.rects.reference[l],m=nt(a),h=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,y=v/2-g/2,b=p[c],w=h-f[u]-p[d],x=h/2-f[u]/2+y,O=rt(b,x,w),R=l;n.modifiersData[o]=((t={})[R]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"==typeof o&&!(o=t.elements.popper.querySelector(o))||!Ye(t.elements.popper,o)||(t.elements.arrow=o))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function lt(e){return e.split("-")[1]}var ut={top:"auto",right:"auto",bottom:"auto",left:"auto"};function pt(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,s=e.position,l=e.gpuAcceleration,u=e.adaptive,p=e.roundOffsets,f=e.isFixed,c=i.x,d=void 0===c?0:c,v=i.y,g=void 0===v?0:v,m="function"==typeof p?p({x:d,y:g}):{x:d,y:g};d=m.x,g=m.y;var h=i.hasOwnProperty("x"),y=i.hasOwnProperty("y"),b=Se,w=Ee,x=window;if(u){var O=nt(n),R="clientHeight",A="clientWidth";if(O===He(n)&&("static"!==Ge(O=Qe(n)).position&&"absolute"===s&&(R="scrollHeight",A="scrollWidth")),r===Ee||(r===Se||r===Ce)&&a===Be)w=Te,g-=(f&&O===x&&x.visualViewport?x.visualViewport.height:O[R])-o.height,g*=l?1:-1;if(r===Se||(r===Ee||r===Te)&&a===Be)b=Ce,d-=(f&&O===x&&x.visualViewport?x.visualViewport.width:O[A])-o.width,d*=l?1:-1}var E,T=Object.assign({position:s},u&&ut),C=!0===p?function(e){var t=e.x,n=e.y,o=window.devicePixelRatio||1;return{x:Ke(t*o)/o||0,y:Ke(n*o)/o||0}}({x:d,y:g}):{x:d,y:g};return d=C.x,g=C.y,l?Object.assign({},T,((E={})[w]=y?"0":"",E[b]=h?"0":"",E.transform=(x.devicePixelRatio||1)<=1?"translate("+d+"px, "+g+"px)":"translate3d("+d+"px, "+g+"px, 0)",E)):Object.assign({},T,((t={})[w]=y?g+"px":"",t[b]=h?d+"px":"",t.transform="",t))}var ft={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,a=n.adaptive,i=void 0===a||a,s=n.roundOffsets,l=void 0===s||s,u={placement:Ne(t.placement),variation:lt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,pt(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,pt(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},ct={passive:!0};var dt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=void 0===r||r,i=o.resize,s=void 0===i||i,l=He(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach((function(e){e.addEventListener("scroll",n.update,ct)})),s&&l.addEventListener("resize",n.update,ct),function(){a&&u.forEach((function(e){e.removeEventListener("scroll",n.update,ct)})),s&&l.removeEventListener("resize",n.update,ct)}},data:{}},vt={left:"right",right:"left",bottom:"top",top:"bottom"};function gt(e){return e.replace(/left|right|bottom|top/g,(function(e){return vt[e]}))}var mt={start:"end",end:"start"};function ht(e){return e.replace(/start|end/g,(function(e){return mt[e]}))}function yt(e){var t=He(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function bt(e){return Ze(Qe(e)).left+yt(e).scrollLeft}function wt(e){var t=Ge(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function xt(e){return["html","body","#document"].indexOf(Ie(e))>=0?e.ownerDocument.body:We(e)&&wt(e)?e:xt(et(e))}function Ot(e,t){var n;void 0===t&&(t=[]);var o=xt(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),a=He(o),i=r?[a].concat(a.visualViewport||[],wt(o)?o:[]):o,s=t.concat(i);return r?s:s.concat(Ot(et(i)))}function Rt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function At(e,t){return t===Pe?Rt(function(e){var t=He(e),n=Qe(e),o=t.visualViewport,r=n.clientWidth,a=n.clientHeight,i=0,s=0;return o&&(r=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=o.offsetLeft,s=o.offsetTop)),{width:r,height:a,x:i+bt(e),y:s}}(e)):$e(t)?function(e){var t=Ze(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):Rt(function(e){var t,n=Qe(e),o=yt(e),r=null==(t=e.ownerDocument)?void 0:t.body,a=Ue(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=Ue(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-o.scrollLeft+bt(e),l=-o.scrollTop;return"rtl"===Ge(r||n).direction&&(s+=Ue(n.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:s,y:l}}(Qe(e)))}function Et(e,t,n){var o="clippingParents"===t?function(e){var t=Ot(et(e)),n=["absolute","fixed"].indexOf(Ge(e).position)>=0&&We(e)?nt(e):e;return $e(n)?t.filter((function(e){return $e(e)&&Ye(e,n)&&"body"!==Ie(e)})):[]}(e):[].concat(t),r=[].concat(o,[n]),a=r[0],i=r.reduce((function(t,n){var o=At(e,n);return t.top=Ue(o.top,t.top),t.right=Ve(o.right,t.right),t.bottom=Ve(o.bottom,t.bottom),t.left=Ue(o.left,t.left),t}),At(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function Tt(e){var t,n=e.reference,o=e.element,r=e.placement,a=r?Ne(r):null,i=r?lt(r):null,s=n.x+n.width/2-o.width/2,l=n.y+n.height/2-o.height/2;switch(a){case Ee:t={x:s,y:n.y-o.height};break;case Te:t={x:s,y:n.y+n.height};break;case Ce:t={x:n.x+n.width,y:l};break;case Se:t={x:n.x-o.width,y:l};break;default:t={x:n.x,y:n.y}}var u=a?ot(a):null;if(null!=u){var p="y"===u?"height":"width";switch(i){case Me:t[u]=t[u]-(n[p]/2-o[p]/2);break;case Be:t[u]=t[u]+(n[p]/2-o[p]/2)}}return t}function Ct(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=void 0===o?e.placement:o,a=n.boundary,i=void 0===a?"clippingParents":a,s=n.rootBoundary,l=void 0===s?Pe:s,u=n.elementContext,p=void 0===u?Fe:u,f=n.altBoundary,c=void 0!==f&&f,d=n.padding,v=void 0===d?0:d,g=at("number"!=typeof v?v:it(v,ke)),m=p===Fe?"reference":Fe,h=e.rects.popper,y=e.elements[c?m:p],b=Et($e(y)?y:y.contextElement||Qe(e.elements.popper),i,l),w=Ze(e.elements.reference),x=Tt({reference:w,element:h,placement:r}),O=Rt(Object.assign({},h,x)),R=p===Fe?O:w,A={top:b.top-R.top+g.top,bottom:R.bottom-b.bottom+g.bottom,left:b.left-R.left+g.left,right:R.right-b.right+g.right},E=e.modifiersData.offset;if(p===Fe&&E){var T=E[r];Object.keys(A).forEach((function(e){var t=[Ce,Te].indexOf(e)>=0?1:-1,n=[Ee,Te].indexOf(e)>=0?"y":"x";A[e]+=T[n]*t}))}return A}var St={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,a=void 0===r||r,i=n.altAxis,s=void 0===i||i,l=n.fallbackPlacements,u=n.padding,p=n.boundary,f=n.rootBoundary,c=n.altBoundary,d=n.flipVariations,v=void 0===d||d,g=n.allowedAutoPlacements,m=t.options.placement,h=Ne(m),y=l||(h===m||!v?[gt(m)]:function(e){if(Ne(e)===je)return[];var t=gt(e);return[ht(e),t,ht(t)]}(m)),b=[m].concat(y).reduce((function(e,n){return e.concat(Ne(n)===je?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,a=n.rootBoundary,i=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,u=void 0===l?De:l,p=lt(o),f=p?s?Le:Le.filter((function(e){return lt(e)===p})):ke,c=f.filter((function(e){return u.indexOf(e)>=0}));0===c.length&&(c=f);var d=c.reduce((function(t,n){return t[n]=Ct(e,{placement:n,boundary:r,rootBoundary:a,padding:i})[Ne(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:p,rootBoundary:f,padding:u,flipVariations:v,allowedAutoPlacements:g}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,R=!0,A=b[0],E=0;E<b.length;E++){var T=b[E],C=Ne(T),S=lt(T)===Me,j=[Ee,Te].indexOf(C)>=0,k=j?"width":"height",M=Ct(t,{placement:T,boundary:p,rootBoundary:f,altBoundary:c,padding:u}),B=j?S?Ce:Se:S?Te:Ee;w[k]>x[k]&&(B=gt(B));var P=gt(B),F=[];if(a&&F.push(M[C]<=0),s&&F.push(M[B]<=0,M[P]<=0),F.every((function(e){return e}))){A=T,R=!1;break}O.set(T,F)}if(R)for(var L=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},D=v?3:1;D>0;D--){if("break"===L(D))break}t.placement!==A&&(t.modifiersData[o]._skip=!0,t.placement=A,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function jt(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function kt(e){return[Ee,Ce,Te,Se].some((function(t){return e[t]>=0}))}var Mt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=Ct(t,{elementContext:"reference"}),s=Ct(t,{altBoundary:!0}),l=jt(i,o),u=jt(s,r,a),p=kt(l),f=kt(u);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":f})}};var Bt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,a=void 0===r?[0,0]:r,i=De.reduce((function(e,n){return e[n]=function(e,t,n){var o=Ne(e),r=[Se,Ee].indexOf(o)>=0?-1:1,a="function"==typeof n?n(Object.assign({},t,{placement:e})):n,i=a[0],s=a[1];return i=i||0,s=(s||0)*r,[Se,Ce].indexOf(o)>=0?{x:s,y:i}:{x:i,y:s}}(n,t.rects,a),e}),{}),s=i[t.placement],l=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[o]=i}};var Pt={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Tt({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})},data:{}};var Ft={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,a=void 0===r||r,i=n.altAxis,s=void 0!==i&&i,l=n.boundary,u=n.rootBoundary,p=n.altBoundary,f=n.padding,c=n.tether,d=void 0===c||c,v=n.tetherOffset,g=void 0===v?0:v,m=Ct(t,{boundary:l,rootBoundary:u,padding:f,altBoundary:p}),h=Ne(t.placement),y=lt(t.placement),b=!y,w=ot(h),x=function(e){return"x"===e?"y":"x"}(w),O=t.modifiersData.popperOffsets,R=t.rects.reference,A=t.rects.popper,E="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,T="number"==typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),C=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,S={x:0,y:0};if(O){if(a){var j,k="y"===w?Ee:Se,M="y"===w?Te:Ce,B="y"===w?"height":"width",P=O[w],F=P+m[k],L=P-m[M],D=d?-A[B]/2:0,_=y===Me?R[B]:A[B],I=y===Me?-A[B]:-R[B],H=t.elements.arrow,$=d&&H?Xe(H):{width:0,height:0},W=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},q=W[k],z=W[M],N=rt(0,R[B],$[B]),U=b?R[B]/2-D-N-q-T.mainAxis:_-N-q-T.mainAxis,V=b?-R[B]/2+D+N+z+T.mainAxis:I+N+z+T.mainAxis,K=t.elements.arrow&&nt(t.elements.arrow),Z=K?"y"===w?K.clientTop||0:K.clientLeft||0:0,X=null!=(j=null==C?void 0:C[w])?j:0,Y=P+V-X,G=rt(d?Ve(F,P+U-X-Z):F,P,d?Ue(L,Y):L);O[w]=G,S[w]=G-P}if(s){var J,Q="x"===w?Ee:Se,ee="x"===w?Te:Ce,te=O[x],ne="y"===x?"height":"width",oe=te+m[Q],re=te-m[ee],ae=-1!==[Ee,Se].indexOf(h),ie=null!=(J=null==C?void 0:C[x])?J:0,se=ae?oe:te-R[ne]-A[ne]-ie+T.altAxis,le=ae?te+R[ne]+A[ne]-ie-T.altAxis:re,ue=d&&ae?function(e,t,n){var o=rt(e,t,n);return o>n?n:o}(se,te,le):rt(d?se:oe,te,d?le:re);O[x]=ue,S[x]=ue-te}t.modifiersData[o]=S}},requiresIfExists:["offset"]};function Lt(e,t,n){void 0===n&&(n=!1);var o=We(t),r=We(t)&&function(e){var t=e.getBoundingClientRect(),n=Ke(t.width)/e.offsetWidth||1,o=Ke(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),a=Qe(t),i=Ze(e,r),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(o||!o&&!n)&&(("body"!==Ie(t)||wt(a))&&(s=function(e){return e!==He(e)&&We(e)?function(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):yt(e)}(t)),We(t)?((l=Ze(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=bt(a))),{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function Dt(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}function _t(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var It={placement:"bottom",modifiers:[],strategy:"absolute"};function Ht(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function $t(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,a=void 0===r?It:r;return function(e,t,n){void 0===n&&(n=a);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},It,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},i=[],s=!1,l={state:r,setOptions:function(n){var s="function"==typeof n?n(r.options):n;u(),r.options=Object.assign({},a,r.options,s),r.scrollParents={reference:$e(e)?Ot(e):e.contextElement?Ot(e.contextElement):[],popper:Ot(t)};var p=function(e){var t=Dt(e);return _e.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,r.options.modifiers)));return r.orderedModifiers=p.filter((function(e){return e.enabled})),r.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,a=e.effect;if("function"==typeof a){var s=a({state:r,name:t,instance:l,options:o}),u=function(){};i.push(s||u)}})),l.update()},forceUpdate:function(){if(!s){var e=r.elements,t=e.reference,n=e.popper;if(Ht(t,n)){r.rects={reference:Lt(t,nt(n),"fixed"===r.options.strategy),popper:Xe(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<r.orderedModifiers.length;o++)if(!0!==r.reset){var a=r.orderedModifiers[o],i=a.fn,u=a.options,p=void 0===u?{}:u,f=a.name;"function"==typeof i&&(r=i({state:r,options:p,name:f,instance:l})||r)}else r.reset=!1,o=-1}}},update:_t((function(){return new Promise((function(e){l.forceUpdate(),e(r)}))})),destroy:function(){u(),s=!0}};if(!Ht(e,t))return l;function u(){i.forEach((function(e){return e()})),i=[]}return l.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}$t(),$t({defaultModifiers:[dt,Pt,ft,ze]});var Wt=$t({defaultModifiers:[dt,Pt,ft,ze,Bt,St,Ft,st,Mt]});const qt=e({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:o(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:De,default:"bottom"},popperOptions:{type:o(Object),default:()=>({})},strategy:{type:String,values:["fixed","absolute"],default:"absolute"}}),zt=e({...qt,id:String,style:{type:o([String,Array,Object])},className:{type:o([String,Array,Object])},effect:{type:o(String),default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:o([String,Array,Object])},popperStyle:{type:o([String,Array,Object])},referenceEl:{type:o(Object)},triggerTargetEl:{type:o(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},virtualTriggering:Boolean,zIndex:Number,...te(["ariaLabel"])}),Nt={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},Ut=(e,t=[])=>{const{placement:n,strategy:o,popperOptions:r}=e,a={placement:n,strategy:o,...r,modifiers:[...Vt(e),...t]};return function(e,t){t&&(e.modifiers=[...e.modifiers,...null!=t?t:[]])}(a,null==r?void 0:r.modifiers),a};function Vt(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:o}=e;return[{name:"offset",options:{offset:[0,null!=t?t:12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:o}},{name:"computeStyles",options:{gpuAcceleration:n}}]}const Kt=(e,t,n={})=>{const o={name:"updateState",enabled:!0,phase:"write",fn:({state:e})=>{const t=function(e){const t=Object.keys(e.elements),n=l(t.map((t=>[t,e.styles[t]||{}]))),o=l(t.map((t=>[t,e.attributes[t]])));return{styles:n,attributes:o}}(e);Object.assign(i.value,t)},requires:["computeStyles"]},r=w((()=>{const{onFirstUpdate:e,placement:t,strategy:r,modifiers:a}=k(n);return{onFirstUpdate:e,placement:t||"bottom",strategy:r||"absolute",modifiers:[...a||[],o,{name:"applyStyles",enabled:!1}]}})),a=N(),i=b({styles:{popper:{position:k(r).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=()=>{a.value&&(a.value.destroy(),a.value=void 0)};return A(r,(e=>{const t=k(a);t&&t.setOptions(e)}),{deep:!0}),A([e,t],(([e,t])=>{s(),e&&t&&(a.value=Wt(e,t,k(r)))})),E((()=>{s()})),{state:w((()=>{var e;return{...(null==(e=k(a))?void 0:e.state)||{}}})),styles:w((()=>k(i).styles)),attributes:w((()=>k(i).attributes)),update:()=>{var e;return null==(e=k(a))?void 0:e.update()},forceUpdate:()=>{var e;return null==(e=k(a))?void 0:e.forceUpdate()},instanceRef:w((()=>k(a)))}};const Zt=e=>{const{popperInstanceRef:t,contentRef:n,triggerRef:o,role:r}=R(pe,void 0),i=b(),l=b(),u=w((()=>({name:"eventListeners",enabled:!!e.visible}))),p=w((()=>{var e;const t=k(i),n=null!=(e=k(l))?e:0;return{name:"arrow",enabled:!ue(t),options:{element:t,padding:n}}})),f=w((()=>({onFirstUpdate:()=>{m()},...Ut(e,[k(p),k(u)])}))),c=w((()=>(e=>{if(s)return a(e)})(e.referenceEl)||k(o))),{attributes:d,state:v,styles:g,update:m,forceUpdate:h,instanceRef:y}=Kt(c,n,f);return A(y,(e=>t.value=e)),H((()=>{A((()=>{var e;return null==(e=k(c))?void 0:e.getBoundingClientRect()}),(()=>{m()}))})),{attributes:d,arrowRef:i,contentRef:n,instanceRef:y,state:v,styles:g,role:r,forceUpdate:h,update:m}},Xt=y({name:"ElPopperContent"});var Yt=t(y({...Xt,props:zt,emits:Nt,setup(e,{expose:t,emit:o}){const a=e,{focusStartRef:s,trapped:l,onFocusAfterReleased:f,onFocusAfterTrapped:c,onFocusInTrap:d,onFocusoutPrevented:v,onReleaseRequested:g}=((e,t)=>{const n=b(!1),o=b();return{focusStartRef:o,trapped:n,onFocusAfterReleased:e=>{var n;"pointer"!==(null==(n=e.detail)?void 0:n.focusReason)&&(o.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:t=>{e.visible&&!n.value&&(t.target&&(o.value=t.target),n.value=!0)},onFocusoutPrevented:t=>{e.trapping||("pointer"===t.detail.focusReason&&t.preventDefault(),n.value=!1)},onReleaseRequested:()=>{n.value=!1,t("close")}}})(a,o),{attributes:m,arrowRef:h,contentRef:y,styles:S,instanceRef:j,role:B,update:P}=Zt(a),{ariaModal:F,arrowStyle:L,contentAttrs:D,contentClass:_,contentStyle:$,updateZIndex:W}=((e,{attributes:t,styles:o,role:r})=>{const{nextZIndex:a}=u(),i=n("popper"),s=w((()=>k(t).popper)),l=b(p(e.zIndex)?e.zIndex:a()),f=w((()=>[i.b(),i.is("pure",e.pure),i.is(e.effect),e.popperClass])),c=w((()=>[{zIndex:k(l)},k(o).popper,e.popperStyle||{}]));return{ariaModal:w((()=>"dialog"===r.value?"false":void 0)),arrowStyle:w((()=>k(o).arrow||{})),contentAttrs:s,contentClass:f,contentStyle:c,contentZIndex:l,updateZIndex:()=>{l.value=p(e.zIndex)?e.zIndex:a()}}})(a,{styles:S,attributes:m,role:B}),N=R(ne,void 0),U=b();let V;O(fe,{arrowStyle:L,arrowRef:h,arrowOffset:U}),N&&O(ne,{...N,addInputId:M,removeInputId:M});const K=(e=!0)=>{P(),e&&W()},Z=()=>{K(!1),a.visible&&a.focusOnShow?l.value=!0:!1===a.visible&&(l.value=!1)};return H((()=>{A((()=>a.triggerTargetEl),((e,t)=>{null==V||V(),V=void 0;const n=k(e||y.value),o=k(t||y.value);r(n)&&(V=A([B,()=>a.ariaLabel,F,()=>a.id],(e=>{["role","aria-label","aria-modal","id"].forEach(((t,o)=>{i(e[o])?n.removeAttribute(t):n.setAttribute(t,e[o])}))}),{immediate:!0})),o!==n&&r(o)&&["role","aria-label","aria-modal","id"].forEach((e=>{o.removeAttribute(e)}))}),{immediate:!0}),A((()=>a.visible),Z,{immediate:!0})})),E((()=>{null==V||V(),V=void 0})),t({popperContentRef:y,popperInstanceRef:j,updatePopper:K,contentStyle:$}),(e,t)=>(C(),T("div",z({ref_key:"contentRef",ref:y},k(D),{style:k($),class:k(_),tabindex:"-1",onMouseenter:t=>e.$emit("mouseenter",t),onMouseleave:t=>e.$emit("mouseleave",t)}),[I(k(ie),{trapped:k(l),"trap-on-focus-in":!0,"focus-trap-el":k(y),"focus-start-el":k(s),onFocusAfterTrapped:k(c),onFocusAfterReleased:k(f),onFocusin:k(d),onFocusoutPrevented:k(v),onReleaseRequested:k(g)},{default:q((()=>[x(e.$slots,"default")])),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16,["onMouseenter","onMouseleave"]))}}),[["__file","content.vue"]]);const Gt=f(ve),Jt=Symbol("elTooltip");function Qt(){let e;const t=()=>window.clearTimeout(e);return c((()=>t())),{registerTimeout:(n,o)=>{t(),e=window.setTimeout(n,o)},cancelTimeout:t}}const en=e({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),tn=e({...en,...zt,appendTo:{type:o([String,Object])},content:{type:String,default:""},rawContent:Boolean,persistent:Boolean,visible:{type:o(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean,...te(["ariaLabel"])}),nn=e({...ye,disabled:Boolean,trigger:{type:o([String,Array]),default:"hover"},triggerKeys:{type:o(Array),default:()=>[d.enter,d.numpadEnter,d.space]}}),on=v({type:o(Boolean),default:null}),rn=v({type:o(Function)}),{useModelToggleProps:an,useModelToggleEmits:sn,useModelToggle:ln}=(e=>{const t=`update:${e}`,n=`onUpdate:${e}`,o=[t];return{useModelToggle:({indicator:o,toggleReason:r,shouldHideWhenRouteChanges:a,shouldProceed:i,onShow:l,onHide:u})=>{const p=U(),{emit:f}=p,c=p.props,d=w((()=>V(c[n]))),v=w((()=>null===c[e])),m=e=>{!0!==o.value&&(o.value=!0,r&&(r.value=e),V(l)&&l(e))},h=e=>{!1!==o.value&&(o.value=!1,r&&(r.value=e),V(u)&&u(e))},y=e=>{if(!0===c.disabled||V(i)&&!i())return;const n=d.value&&s;n&&f(t,!0),!v.value&&n||m(e)},b=e=>{if(!0===c.disabled||!s)return;const n=d.value&&s;n&&f(t,!1),!v.value&&n||h(e)},x=e=>{g(e)&&(c.disabled&&e?d.value&&f(t,!1):o.value!==e&&(e?m():h()))};return A((()=>c[e]),x),a&&void 0!==p.appContext.config.globalProperties.$route&&A((()=>({...p.proxy.$route})),(()=>{a.value&&o.value&&b()})),H((()=>{x(c[e])})),{hide:b,show:y,toggle:()=>{o.value?b():y()},hasUpdateHandler:d}},useModelToggleProps:{[e]:on,[n]:rn},useModelToggleEmits:o}})("visible"),un=e({...ce,...an,...tn,...nn,...ge,showArrow:{type:Boolean,default:!0}}),pn=[...sn,"before-show","before-hide","show","hide","open","close"],fn=(e,t,n)=>o=>{((e,t)=>K(e)?e.includes(t):e===t)(k(e),t)&&n(o)},cn=(e,t,{checkForDefaultPrevented:n=!0}={})=>o=>{const r=null==e?void 0:e(o);if(!1===n||!r)return null==t?void 0:t(o)},dn=y({name:"ElTooltipTrigger"});var vn=t(y({...dn,props:nn,setup(e,{expose:t}){const o=e,r=n("tooltip"),{controlled:a,id:i,open:s,onOpen:l,onClose:u,onToggle:p}=R(Jt,void 0),f=b(null),c=()=>{if(k(a)||o.disabled)return!0},d=Z(o,"trigger"),v=cn(c,fn(d,"hover",l)),g=cn(c,fn(d,"hover",u)),m=cn(c,fn(d,"click",(e=>{0===e.button&&p(e)}))),h=cn(c,fn(d,"focus",l)),y=cn(c,fn(d,"focus",u)),w=cn(c,fn(d,"contextmenu",(e=>{e.preventDefault(),p(e)}))),O=cn(c,(e=>{const{code:t}=e;o.triggerKeys.includes(t)&&(e.preventDefault(),p(e))}));return t({triggerRef:f}),(e,t)=>(C(),$(k(Ae),{id:k(i),"virtual-ref":e.virtualRef,open:k(s),"virtual-triggering":e.virtualTriggering,class:j(k(r).e("trigger")),onBlur:k(y),onClick:k(m),onContextmenu:k(w),onFocus:k(h),onMouseenter:k(v),onMouseleave:k(g),onKeydown:k(O)},{default:q((()=>[x(e.$slots,"default")])),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}}),[["__file","trigger.vue"]]);const gn=()=>{const e=m(),t=oe(),n=w((()=>`${e.value}-popper-container-${t.prefix}`)),o=w((()=>`#${n.value}`));return{id:n,selector:o}},mn=()=>{const{id:e,selector:t}=gn();return X((()=>{s&&(document.body.querySelector(t.value)||(e=>{const t=document.createElement("div");t.id=e,document.body.appendChild(t)})(e.value))})),{id:e,selector:t}},hn=y({name:"ElTooltipContent",inheritAttrs:!1});var yn=t(y({...hn,props:tn,setup(e,{expose:t}){const o=e,{selector:r}=gn(),a=n("tooltip"),i=b();let s;const{controlled:l,id:u,open:p,trigger:f,onClose:c,onOpen:d,onShow:v,onHide:g,onBeforeShow:m,onBeforeHide:y}=R(Jt,void 0),O=w((()=>o.transition||`${a.namespace.value}-fade-in-linear`)),T=w((()=>o.persistent));E((()=>{null==s||s()}));const S=w((()=>!!k(T)||k(p))),j=w((()=>!o.disabled&&k(p))),M=w((()=>o.appendTo||r.value)),P=w((()=>{var e;return null!=(e=o.style)?e:{}})),F=b(!0),L=()=>{g(),Z()&&le(document.body),F.value=!0},D=()=>{if(k(l))return!0},_=cn(D,(()=>{o.enterable&&"hover"===k(f)&&d()})),H=cn(D,(()=>{"hover"===k(f)&&c()})),N=()=>{var e,t;null==(t=null==(e=i.value)?void 0:e.updatePopper)||t.call(e),null==m||m()},U=()=>{null==y||y()},V=()=>{v(),s=h(w((()=>{var e;return null==(e=i.value)?void 0:e.popperContentRef})),(()=>{if(k(l))return;"hover"!==k(f)&&c()}))},K=()=>{o.virtualTriggering||c()},Z=e=>{var t;const n=null==(t=i.value)?void 0:t.popperContentRef,o=(null==e?void 0:e.relatedTarget)||document.activeElement;return null==n?void 0:n.contains(o)};return A((()=>k(p)),(e=>{e?F.value=!1:null==s||s()}),{flush:"post"}),A((()=>o.content),(()=>{var e,t;null==(t=null==(e=i.value)?void 0:e.updatePopper)||t.call(e)})),t({contentRef:i,isFocusInsideContent:Z}),(e,t)=>(C(),$(k(se),{disabled:!e.teleported,to:k(M)},{default:q((()=>[I(Y,{name:k(O),onAfterLeave:L,onBeforeEnter:N,onAfterEnter:V,onBeforeLeave:U},{default:q((()=>[k(S)?B((C(),$(k(Yt),z({key:0,id:k(u),ref_key:"contentRef",ref:i},e.$attrs,{"aria-label":e.ariaLabel,"aria-hidden":F.value,"boundaries-padding":e.boundariesPadding,"fallback-placements":e.fallbackPlacements,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,placement:e.placement,"popper-options":e.popperOptions,strategy:e.strategy,effect:e.effect,enterable:e.enterable,pure:e.pure,"popper-class":e.popperClass,"popper-style":[e.popperStyle,k(P)],"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,visible:k(j),"z-index":e.zIndex,onMouseenter:k(_),onMouseleave:k(H),onBlur:K,onClose:k(c)}),{default:q((()=>[x(e.$slots,"default")])),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[G,k(j)]]):W("v-if",!0)])),_:3},8,["name"])])),_:3},8,["disabled","to"]))}}),[["__file","content.vue"]]);const bn=y({name:"ElTooltip"});const wn=f(t(y({...bn,props:un,emits:pn,setup(e,{expose:t,emit:n}){const o=e;mn();const r=re(),a=b(),i=b(),s=()=>{var e;const t=k(a);t&&(null==(e=t.popperInstanceRef)||e.update())},l=b(!1),u=b(),{show:f,hide:c,hasUpdateHandler:d}=ln({indicator:l,toggleReason:u}),{onOpen:v,onClose:m}=(({showAfter:e,hideAfter:t,autoClose:n,open:o,close:r})=>{const{registerTimeout:a}=Qt(),{registerTimeout:i,cancelTimeout:s}=Qt();return{onOpen:t=>{a((()=>{o(t);const e=k(n);p(e)&&e>0&&i((()=>{r(t)}),e)}),k(e))},onClose:e=>{s(),a((()=>{r(e)}),k(t))}}})({showAfter:Z(o,"showAfter"),hideAfter:Z(o,"hideAfter"),autoClose:Z(o,"autoClose"),open:f,close:c}),h=w((()=>g(o.visible)&&!d.value));O(Jt,{controlled:h,id:r,open:J(l),trigger:Z(o,"trigger"),onOpen:e=>{v(e)},onClose:e=>{m(e)},onToggle:e=>{k(l)?m(e):v(e)},onShow:()=>{n("show",u.value)},onHide:()=>{n("hide",u.value)},onBeforeShow:()=>{n("before-show",u.value)},onBeforeHide:()=>{n("before-hide",u.value)},updatePopper:s}),A((()=>o.disabled),(e=>{e&&l.value&&(l.value=!1)}));return Q((()=>l.value&&c())),t({popperRef:a,contentRef:i,isFocusInsideContent:e=>{var t;return null==(t=i.value)?void 0:t.isFocusInsideContent(e)},updatePopper:s,onOpen:v,onClose:m,hide:c}),(e,t)=>(C(),$(k(Gt),{ref_key:"popperRef",ref:a,role:e.role},{default:q((()=>[I(vn,{disabled:e.disabled,trigger:e.trigger,"trigger-keys":e.triggerKeys,"virtual-ref":e.virtualRef,"virtual-triggering":e.virtualTriggering},{default:q((()=>[e.$slots.default?x(e.$slots,"default",{key:0}):W("v-if",!0)])),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),I(yn,{ref_key:"contentRef",ref:i,"aria-label":e.ariaLabel,"boundaries-padding":e.boundariesPadding,content:e.content,disabled:e.disabled,effect:e.effect,enterable:e.enterable,"fallback-placements":e.fallbackPlacements,"hide-after":e.hideAfter,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,persistent:e.persistent,"popper-class":e.popperClass,"popper-style":e.popperStyle,placement:e.placement,"popper-options":e.popperOptions,pure:e.pure,"raw-content":e.rawContent,"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,"show-after":e.showAfter,strategy:e.strategy,teleported:e.teleported,transition:e.transition,"virtual-triggering":e.virtualTriggering,"z-index":e.zIndex,"append-to":e.appendTo},{default:q((()=>[x(e.$slots,"content",{},(()=>[e.rawContent?(C(),T("span",{key:0,innerHTML:e.content},null,8,["innerHTML"])):(C(),T("span",{key:1},ee(e.content),1))])),e.showArrow?(C(),$(k(he),{key:0,"arrow-offset":e.arrowOffset},null,8,["arrow-offset"])):W("v-if",!0)])),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])])),_:3},8,["role"]))}}),[["__file","tooltip.vue"]]));export{wn as E,nn as a,De as b,ue as i,tn as u};
