import{aU as t,P as n,aL as r}from"./index-DKuwJ9Lq.js";var i=/\s/;var e=/^\s+/;function u(t){return t?t.slice(0,function(t){for(var n=t.length;n--&&i.test(t.charAt(n)););return n}(t)+1).replace(e,""):t}var o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt;function v(r){if("number"==typeof r)return r;if(t(r))return NaN;if(n(r)){var i="function"==typeof r.valueOf?r.valueOf():r;r=n(i)?i+"":i}if("string"!=typeof r)return 0===r?r:+r;r=u(r);var e=a.test(r);return e||f.test(r)?c(r.slice(2),e?2:8):o.test(r)?NaN:+r}var s=function(){return r.Date.now()},l=Math.max,d=Math.min;function m(t,r,i){var e,u,o,a,f,c,m=0,p=!1,h=!1,x=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function T(n){var r=e,i=u;return e=u=void 0,m=n,a=t.apply(i,r)}function y(t){var n=t-c;return void 0===c||n>=r||n<0||h&&t-m>=o}function g(){var t=s();if(y(t))return N(t);f=setTimeout(g,function(t){var n=r-(t-c);return h?d(n,o-(t-m)):n}(t))}function N(t){return f=void 0,x&&e?T(t):(e=u=void 0,a)}function w(){var t=s(),n=y(t);if(e=arguments,u=this,c=t,n){if(void 0===f)return function(t){return m=t,f=setTimeout(g,r),p?T(t):a}(c);if(h)return clearTimeout(f),f=setTimeout(g,r),T(c)}return void 0===f&&(f=setTimeout(g,r)),a}return r=v(r)||0,n(i)&&(p=!!i.leading,o=(h="maxWait"in i)?l(v(i.maxWait)||0,r):o,x="trailing"in i?!!i.trailing:x),w.cancel=function(){void 0!==f&&clearTimeout(f),m=0,e=c=u=f=void 0},w.flush=function(){return void 0===f?a:N(s())},w}export{m as d};
