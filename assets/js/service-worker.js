!function(){"use strict";function t(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var e,r,n=(e=function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return I()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var u=h(t,e,r);if("normal"===u.type){if(n=r.done?p:l,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",l="suspendedYield",v="executing",p="completed",d={};function y(){}function g(){}function m(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(O([])));L&&L!==r&&n.call(L,i)&&(w=L);var E=m.prototype=y.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:I}}function I(){return{value:e,done:!0}}return g.prototype=m,u(E,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},x(P.prototype),u(P.prototype,a,(function(){return this})),t.AsyncIterator=P,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new P(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(E),u(E,c,"Generator"),u(E,i,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},e(r={exports:{}},r.exports),r.exports),o=n;try{self["workbox:window:5.1.4"]&&_()}catch(t){}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:5.1.4"]&&_()}catch(t){}var c=function(){var t=this;this.promise=new Promise((function(e,r){t.resolve=e,t.reject=r}))};function u(t,e){var r=location.href;return new URL(t,r).href===new URL(e,r).href}var s=function(t,e){this.type=t,Object.assign(this,e)};function h(t,e,r){return r?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function f(){}var l=function(t){var e,r;function n(e,r){var n,o;return void 0===r&&(r={}),(n=t.call(this)||this).t={},n.i=0,n.o=new c,n.u=new c,n.s=new c,n.v=0,n.h=new Set,n.l=function(){var t=n.m,e=t.installing;n.i>0||!u(e.scriptURL,n.g)||performance.now()>n.v+6e4?(n.p=e,t.removeEventListener("updatefound",n.l)):(n.P=e,n.h.add(e),n.o.resolve(e)),++n.i,e.addEventListener("statechange",n.S)},n.S=function(t){var e=n.m,r=t.target,o=r.state,i=r===n.p,a=i?"external":"",c={sw:r,originalEvent:t};!i&&n.j&&(c.isUpdate=!0),n.dispatchEvent(new s(a+o,c)),"installed"===o?n.A=self.setTimeout((function(){"installed"===o&&e.waiting===r&&n.dispatchEvent(new s(a+"waiting",c))}),200):"activating"===o&&(clearTimeout(n.A),i||n.u.resolve(r))},n.O=function(t){var e=n.P;e===navigator.serviceWorker.controller&&(n.dispatchEvent(new s("controlling",{sw:e,originalEvent:t,isUpdate:n.j})),n.s.resolve(e))},n.U=(o=function(t){var e=t.data,r=t.source;return h(n.getSW(),(function(){n.h.has(r)&&n.dispatchEvent(new s("message",{data:e,sw:r,originalEvent:t}))}))},function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return Promise.resolve(o.apply(this,t))}catch(t){return Promise.reject(t)}}),n.g=e,n.t=r,navigator.serviceWorker.addEventListener("message",n.U),n}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var o,i=n.prototype;return i.register=function(t){var e=(void 0===t?{}:t).immediate,r=void 0!==e&&e;try{var n=this;return function(t,e){var r=t();return r&&r.then?r.then(e):e()}((function(){if(!r&&"complete"!==document.readyState)return v(new Promise((function(t){return window.addEventListener("load",t)})))}),(function(){return n.j=Boolean(navigator.serviceWorker.controller),n.I=n.M(),h(n.R(),(function(t){n.m=t,n.I&&(n.P=n.I,n.u.resolve(n.I),n.s.resolve(n.I),n.I.addEventListener("statechange",n.S,{once:!0}));var e=n.m.waiting;return e&&u(e.scriptURL,n.g)&&(n.P=e,Promise.resolve().then((function(){n.dispatchEvent(new s("waiting",{sw:e,wasWaitingBeforeRegister:!0}))})).then((function(){}))),n.P&&(n.o.resolve(n.P),n.h.add(n.P)),n.m.addEventListener("updatefound",n.l),navigator.serviceWorker.addEventListener("controllerchange",n.O,{once:!0}),n.m}))}))}catch(t){return Promise.reject(t)}},i.update=function(){try{return this.m?v(this.m.update()):void 0}catch(t){return Promise.reject(t)}},i.getSW=function(){try{return void 0!==this.P?this.P:this.o.promise}catch(t){return Promise.reject(t)}},i.messageSW=function(t){try{return h(this.getSW(),(function(e){return function(t,e){return new Promise((function(r){var n=new MessageChannel;n.port1.onmessage=function(t){r(t.data)},t.postMessage(e,[n.port2])}))}(e,t)}))}catch(t){return Promise.reject(t)}},i.M=function(){var t=navigator.serviceWorker.controller;return t&&u(t.scriptURL,this.g)?t:void 0},i.R=function(){try{var t=this;return function(t,e){try{var r=t()}catch(t){return e(t)}return r&&r.then?r.then(void 0,e):r}((function(){return h(navigator.serviceWorker.register(t.g,t.t),(function(e){return t.v=performance.now(),e}))}),(function(t){throw t}))}catch(t){return Promise.reject(t)}},(o=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&function(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(n.prototype,o),n}(function(){function t(){this.k=new Map}var e=t.prototype;return e.addEventListener=function(t,e){this.B(t).add(e)},e.removeEventListener=function(t,e){this.B(t).delete(e)},e.dispatchEvent=function(t){t.target=this;for(var e,r=a(this.B(t.type));!(e=r()).done;)(0,e.value)(t)},e.B=function(t){return this.k.has(t)||this.k.set(t,new Set),this.k.get(t)},t}());function v(t,e){if(!e)return t&&t.then?t.then(f):Promise.resolve()}if("serviceWorker"in navigator){var p=new l("/the-scientist-oath/service-worker.js",{scope:"/the-scientist-oath/"});!function(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=e.apply(r,n);function c(e){t(a,o,i,c,u,"next",e)}function u(e){t(a,o,i,c,u,"throw",e)}c(void 0)}))}}(o.mark((function t(){return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.register();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}}();
