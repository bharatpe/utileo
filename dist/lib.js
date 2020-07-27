module.exports=function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CurrencyUtils=e.GeoLocationUtils=e.URLUtils=e.History=e.CommonUtils=e.DateUtils=e.StorageUtils=void 0;var r=f(n(1)),o=f(n(2)),u=f(n(3)),a=f(n(4)),i=f(n(5)),c=f(n(6)),l=f(n(7));function f(t){return t&&t.__esModule?t:{default:t}}e.StorageUtils=r.default,e.DateUtils=o.default,e.CommonUtils=u.default,e.History=a.default,e.URLUtils=i.default,e.GeoLocationUtils=c.default,e.CurrencyUtils=l.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o={};e.default={get:function(t){var e=o[t]||window.localStorage.getItem(t);return function(e){try{return JSON.parse(e)}catch(t){return e}}(e)},set:function(e,n){"object"===(void 0===n?"undefined":r(n))&&(n=JSON.stringify(n));try{window.localStorage.setItem(e,n)}catch(t){o[e]=n}},has:function(t){return o.hasOwnProperty(t)||null!==window.localStorage.getItem(t)},remove:function(t){window.localStorage.removeItem(t),delete o[t]},removeAll:function(){o={},window.localStorage.clear()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={formatDate:function(t){return"[object Date]"===Object.prototype.toString.call(t)?{day:t.getDate(),month:t.getMonth(),year:t.getFullYear()}:t},getCurrentDate:function(){return new Date},getDateByDashFormat:function(t){if("[object Date]"!==Object.prototype.toString.call(t))return t;var e=new Date(t),n=(n=e.getDate())<10?"0"+n:n,r=e.getMonth()+1;return n+"-"+(r=r<10?"0"+r:r)+"-"+e.getFullYear()},getDateBySlashFormat:function(t){if("[object Date]"!==Object.prototype.toString.call(t))return t;var e=new Date(t),n=(n=e.getDate())<10?"0"+n:n,r=e.getMonth()+1;return n+"/"+(r=r<10?"0"+r:r)+"/"+e.getFullYear()},timestampToDate:function(t){return"number"==typeof t?new Date(t):t},getDateFromString:function(t){var e=t.split("/");return e.length<3?"Invalid date":new Date(e[1]+"/"+e[0]+"/"+e[2])}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function r(t){return Array.isArray(t)}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=/^[A-Za-z ]+$/,a=/^[0-9\b]+$/;e.default={validateName:function(t){return"string"==typeof t?u.test(t):t},validateOnlyNumber:function(t){return"string"==typeof t||"number"==typeof t?a.test(t):t},titleCase:function(t){return"string"==typeof t?t.toLowerCase().split(" ").map(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}).join(" "):t},camelize:function(t){return"string"==typeof t?t.replace(/-(\w)/g,function(t,e){return e?e.toUpperCase():""}):t},removeSpacesAndLowerCase:function(t){return"string"==typeof t?t.toLowerCase().replace(" ",""):t},replaceSpaceWithUnderscore:function(t){return"string"==typeof t?t&&t.replace(" ","_").toLowerCase():t},replaceSpecialCharsWithUnderscore:function(t){return"string"==typeof t?t&&t.replace(/[^A-Z0-9]+/gi,"_").toLowerCase():t},addKeyToObject:function(e){return e?Object.keys(e).map(function(t){return o({type:t},e[t])}):[]},getIndex:function(t,e){if("[object Object]"!==Object.prototype.toString.call(e))return"Not a valid needle(object)";if("[object Array]"!==Object.prototype.toString.call(t))return"Not a valid array";for(var n=-1,r=Object.keys(e)[0],o=e[r],u=0;u<t.length;u++)if(t[u][r]==o){n=u;break}return n},toNumber:function(t){return null!=t?Number(t):t},partition:function(t,e){return r(t)?[t.filter(function(t){return e(t)}),t.filter(function(t){return!e(t)})]:t},isArray:r,isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},isFunction:function(t){return"function"==typeof t}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(0,n(8).createHashHistory)();r.listen(function(t){window.scrollTo(0,0)}),e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={getURLParameter:function(t,e){if("string"!=typeof t||"string"!=typeof e)return"";t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(t);return n&&0<n.length?decodeURIComponent(n[1].replace(/\+/g," ")):""}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=(r=regeneratorRuntime.mark(function t(e){var n,r,o,u,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n={lat:0,long:0},navigator.geolocation)return t.next=4,navigator&&navigator.permissions?navigator.permissions.query({name:"geolocation"}):{state:"prompt"};t.next=21;break;case 4:r=t.sent,t.t0=r.state,t.next="granted"===t.t0||"prompt"===t.t0?8:"denied"===t.t0?16:19;break;case 8:return t.next=10,function(t){var e=[],r=null;void 0!==t&&(r=function(t,e){var n=0<arguments.length&&void 0!==t?t:1e4,r=1<arguments.length&&void 0!==e?e:{},o=null,u=new Promise(function(t,e){o=setTimeout(function(){t(i({status:"timeout",value:n},r)),console.error("timeout on fetch User Latitude and Longitude")},n)});return u.cancelTimeout=function(){clearTimeout(o)},u}(t,{latitude:null,longitude:null}),e.push(r));var n=new Promise(function(n,t){navigator.geolocation.getCurrentPosition(function(t){var e=t.coords;r&&r.cancelTimeout(),n({latitude:e.latitude.toFixed(2),longitude:e.longitude.toFixed(2)})},function(){r&&r.cancelTimeout(),n({latitude:null,longitude:null})})});return e.push(n),Promise.race(e)}(e);case 10:return o=t.sent,u=o.latitude,a=o.longitude,n.lat=u,n.long=a,t.abrupt("break",19);case 16:return n.lat=null,n.long=null,t.abrupt("break",19);case 19:t.next=22;break;case 21:console.log("geolocation not supported!!!!");case 22:return t.abrupt("return",n);case 23:case"end":return t.stop()}},t,this)}),o=function(){var i=r.apply(this,arguments);return new Promise(function(u,a){return function e(t,n){try{var r=i[t](n),o=r.value}catch(t){return void a(t)}if(!r.done)return Promise.resolve(o).then(function(t){e("next",t)},function(t){e("throw",t)});u(o)}("next")})},function(t){return o.apply(this,arguments)});e.default={getLatLong:u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={format:function(t,e){if("string"!=typeof t&&"number"!=typeof t)return t;if(e){var n=Number(Number(t).toFixed(2)).toString(),r=-1<n.indexOf(".")?n.replace(/(\d)(?=(\d{2})+\d\.)/g,"$1,"):null;if(null!==r)return r.slice(0,r.length)}var o=parseInt(t).toFixed(1).replace(/(\d)(?=(\d{2})+\d\.)/g,"$1,");return o.slice(0,o.length-2)},parse:function(t){return"string"==typeof t?parseInt(t.split(",").join("")):t},beforeAPIRequest:function(t){return"string"==typeof t?this.parse(t):t}};e.default=r},function(t,e,n){"use strict";function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.r(e),n.d(e,"Action",function(){return h}),n.d(e,"createBrowserHistory",function(){return o}),n.d(e,"createHashHistory",function(){return u}),n.d(e,"createMemoryHistory",function(){return a}),n.d(e,"createPath",function(){return O}),n.d(e,"parsePath",function(){return j});var h,r=h=h||{};r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE";var v=function(t){return t};function b(t){t.preventDefault(),t.returnValue=""}function m(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter(function(t){return t!==e})}},call:function(e){t.forEach(function(t){return t&&t(e)})}}}function w(){return Math.random().toString(36).substr(2,8)}function O(t){var e=t.pathname,n=t.search;return(void 0===e?"/":e)+(void 0===n?"":n)+(void 0===(t=t.hash)?"":t)}function j(t){var e,n={};return t&&(0<=(e=t.indexOf("#"))&&(n.hash=t.substr(e),t=t.substr(0,e)),0<=(e=t.indexOf("?"))&&(n.search=t.substr(e),t=t.substr(0,e)),t&&(n.pathname=t)),n}function o(t){function o(){var t=l.location,e=f.state||{};return[e.idx,v({pathname:t.pathname,search:t.search,hash:t.hash,state:e.usr||null,key:e.key||"default"})]}function a(t){return"string"==typeof t?t:O(t)}function i(t,e){return void 0===e&&(e=null),v(y({},n,{},"string"==typeof t?j(t):t,{state:e,key:w()}))}function c(t){e=t,t=o(),p=t[0],n=t[1],r.call({action:e,location:n})}function u(t){f.go(t)}void 0===t&&(t={});var l=void 0===(t=t.window)?document.defaultView:t,f=l.history,s=null;l.addEventListener("popstate",function(){var t,e,n,r;s?(d.call(s),s=null):(t=h.Pop,e=(r=o())[0],r=r[1],d.length?null==e||(n=p-e)&&(s={action:t,location:r,retry:function(){u(-1*n)}},u(n)):c(t))});var e=h.Pop,p=(t=o())[0],n=t[1],r=m(),d=m();return null==p&&(p=0,f.replaceState(y({},f.state,{idx:p}),"")),{get action(){return e},get location(){return n},createHref:a,push:function t(e,n){var r=h.Push,o=i(e,n);if(!d.length||(d.call({action:r,location:o,retry:function(){t(e,n)}}),0)){var o=(u=[{usr:o.state,key:o.key,idx:p+1},a(o)])[0],u=u[1];try{f.pushState(o,"",u)}catch(t){l.location.assign(u)}c(r)}},replace:function t(e,n){var r=h.Replace,o=i(e,n);d.length?d.call({action:r,location:o,retry:function(){t(e,n)}}):(o=[{usr:o.state,key:o.key,idx:p},a(o)],f.replaceState(o[0],"",o[1]),c(r))},go:u,back:function(){u(-1)},forward:function(){u(1)},listen:function(t){return r.push(t)},block:function(t){var e=d.push(t);return 1===d.length&&l.addEventListener("beforeunload",b),function(){e(),d.length||l.removeEventListener("beforeunload",b)}}}}function u(t){function o(){var t=(n=j(l.location.hash.substr(1))).pathname,e=n.search,n=n.hash,r=f.state||{};return[r.idx,v({pathname:void 0===t?"/":t,search:void 0===e?"":e,hash:void 0===n?"":n,state:r.usr||null,key:r.key||"default"})]}function e(){var t,e,n,r;s?(g.call(s),s=null):(t=h.Pop,e=(r=o())[0],r=r[1],g.length?null==e||(n=p-e)&&(s={action:t,location:r,retry:function(){u(-1*n)}},u(n)):c(t))}function a(t){var e=document.querySelector("base"),n="";return e&&e.getAttribute("href")&&(n=-1===(n=(e=l.location.href).indexOf("#"))?e:e.slice(0,n)),n+"#"+("string"==typeof t?t:O(t))}function i(t,e){return void 0===e&&(e=null),v(y({},r,{},"string"==typeof t?j(t):t,{state:e,key:w()}))}function c(t){n=t,t=o(),p=t[0],r=t[1],d.call({action:n,location:r})}function u(t){f.go(t)}void 0===t&&(t={});var l=void 0===(t=t.window)?document.defaultView:t,f=l.history,s=null;l.addEventListener("popstate",e),l.addEventListener("hashchange",function(){O(o()[1])!==O(r)&&e()});var n=h.Pop,p=(t=o())[0],r=t[1],d=m(),g=m();return null==p&&(p=0,f.replaceState(y({},f.state,{idx:p}),"")),{get action(){return n},get location(){return r},createHref:a,push:function t(e,n){var r=h.Push,o=i(e,n);if(!g.length||(g.call({action:r,location:o,retry:function(){t(e,n)}}),0)){var o=(u=[{usr:o.state,key:o.key,idx:p+1},a(o)])[0],u=u[1];try{f.pushState(o,"",u)}catch(t){l.location.assign(u)}c(r)}},replace:function t(e,n){var r=h.Replace,o=i(e,n);g.length?g.call({action:r,location:o,retry:function(){t(e,n)}}):(o=[{usr:o.state,key:o.key,idx:p},a(o)],f.replaceState(o[0],"",o[1]),c(r))},go:u,back:function(){u(-1)},forward:function(){u(1)},listen:function(t){return d.push(t)},block:function(t){var e=g.push(t);return 1===g.length&&l.addEventListener("beforeunload",b),function(){e(),g.length||l.removeEventListener("beforeunload",b)}}}}function a(t){function u(t,e){return void 0===e&&(e=null),v(y({},r,{},"string"==typeof t?j(t):t,{state:e,key:w()}))}function a(t,e,n){return!s.length||(s.call({action:t,location:e,retry:n}),0)}function i(t,e){n=t,r=e,f.call({action:n,location:r})}function o(t){var e=Math.min(Math.max(l+t,0),c.length-1),n=h.Pop,r=c[e];a(n,r,function(){o(t)})&&(l=e,i(n,r))}void 0===t&&(t={});var e=t;t=e.initialEntries,e=e.initialIndex;var c=(void 0===t?["/"]:t).map(function(t){return v(y({pathname:"/",search:"",hash:"",state:null,key:w()},"string"==typeof t?j(t):t))}),l=Math.min(Math.max(null==e?c.length-1:e,0),c.length-1),n=h.Pop,r=c[l],f=m(),s=m();return{get index(){return l},get action(){return n},get location(){return r},createHref:function(t){return"string"==typeof t?t:O(t)},push:function t(e,n){var r=h.Push,o=u(e,n);a(r,o,function(){t(e,n)})&&(l+=1,c.splice(l,c.length,o),i(r,o))},replace:function t(e,n){var r=h.Replace,o=u(e,n);a(r,o,function(){t(e,n)})&&i(r,c[l]=o)},go:o,back:function(){o(-1)},forward:function(){o(1)},listen:function(t){return f.push(t)},block:function(t){return s.push(t)}}}}]);