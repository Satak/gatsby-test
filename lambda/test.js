!function(t,n){for(var e in n)t[e]=n[e]}(exports,function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n){function e(t,n){const e=JSON.stringify({msg:"Thanks for using the GET method"});console.log("GET handler"),n(null,{statusCode:200,body:e})}function r(t,n){let e,r;console.log("POST handler");try{const n=JSON.parse(t.body).name||"Unknown";e=200,r=JSON.stringify({msg:"Thanks for using the POST method "+n})}catch(t){e=400,r=JSON.stringify({msg:"Error, parsing post data"})}n(null,{statusCode:e,body:r})}n.handler=function(t,n,o){const u={GET:e,POST:r},i=t.httpMethod;u[i]?u[i](t,o):o(null,{statusCode:400,body:JSON.stringify({msg:`Error, ${i} method not implemented`})})}}]));