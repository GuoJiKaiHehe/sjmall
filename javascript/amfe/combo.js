!function(a,b){function c(a){return setTimeout(a,h)}function d(a){clearTimeout(a)}function e(b){function c(){d=!0,g&&g.forEach(function(a){a&&a()})}var d=!1;Object.defineProperty(this,"isRequested",{get:function(){return d}});var f,g=[],h=!1;this.request=function(){if(!d){var e=arguments;return h=!1,f=i(function(){h||(b.apply(a,e),c())}),this}},this.cancel=function(){f&&(h=!0,j(f))},this.then=function(a){return d?a&&a():g.push(a),this},this.clone=function(){return new e(b)}}function f(a,c,d,f){"function"==typeof f&&(f={0:f});for(var g=a/h,i=1/g,j=[],k=Object.keys(f).map(function(a){return parseInt(a)}),l=0;g>l;l++){var m=k[0],n=i*l;if(null!=m&&100*n>=m){var o=f[""+m];o instanceof e||(o=new e(o)),j.push(o),k.shift()}else j.length&&j.push(j[j.length-1].clone())}var p;"string"==typeof c||c instanceof Array?b.cubicbezier?"string"==typeof c?b.cubicbezier[c]&&(p=b.cubicbezier[c]):c instanceof Array&&4===c.length&&(p=b.cubicbezier.apply(b.cubicbezier,c)):console.error("require lib.cubicbezier"):"function"==typeof c&&(p=c),p||console.error("unexcept timing function");var q,r=!1,s=0,t=0;this.play=function(){function a(){r=!1,u&&u()}function b(){var a=i*(t+1).toFixed(10);q=j[t],q.request(a.toFixed(10),c(a).toFixed(10)),q.then(function(){t++,e()})}function e(){r&&(t===j.length?a():b())}if(!r)return r=!0,s=setTimeout(function(){s=0,e()},!t&&d||0),this},this.stop=function(){return r?(r=!1,s&&(clearTimeout(s),s=0),q&&q.cancel(),this):void 0};var u;this.onend=function(a){u=a}}var g=60,h=1e3/g,i=window.requestAnimationFrame||window.msRequestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||c,j=window.cancelAnimationFrame||window.msCancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||d;(i===c||j===d)&&(i=c,j=d),b.animation=f,b.animation.Frame=e,b.animation.requestFrame=function(a){var b=new e(a);return b.request(),b}}(window,window.lib||(window.lib={}));!function(a,b){function c(a,b,c,d){function e(a){return(3*k*a+2*l)*a+m}function f(a){return((k*a+l)*a+m)*a}function g(a){return((n*a+o)*a+p)*a}function h(a){for(var b,c,d=a,g=0;8>g;g++){if(c=f(d)-a,Math.abs(c)<j)return d;if(b=e(d),Math.abs(b)<j)break;d-=c/b}var h=1,i=0;for(d=a;h>i;){if(c=f(d)-a,Math.abs(c)<j)return d;c>0?h=d:i=d,d=(h+i)/2}return d}function i(a){return g(h(a))}var j=1e-6,k=3*a-3*c+1,l=3*c-6*a,m=3*a,n=3*b-3*d+1,o=3*d-6*b,p=3*b;return i}b.cubicbezier=c,b.cubicbezier.liner=c(0,0,1,1),b.cubicbezier.ease=c(.25,.1,.25,1),b.cubicbezier.easeIn=c(.42,0,1,1),b.cubicbezier.easeOut=c(0,0,.58,1),b.cubicbezier.easeInOut=c(.42,0,.58,1)}(window,window.lib||(window.lib={}));!function(a,b){function c(a,b){return[[(a/3+(a+b)/3-a)/(b-a),(a*a/3+a*b*2/3-a*a)/(b*b-a*a)],[(b/3+(a+b)/3-a)/(b-a),(b*b/3+a*b*2/3-a*a)/(b*b-a*a)]]}function d(a){if(this.v=a.v||0,this.a=a.a||0,"undefined"!=typeof a.t&&(this.t=a.t),"undefined"!=typeof a.s&&(this.s=a.s),"undefined"==typeof this.t)if("undefined"==typeof this.s)this.t=-this.v/this.a;else{var b=(Math.sqrt(this.v*this.v+2*this.a*this.s)-this.v)/this.a,c=(-Math.sqrt(this.v*this.v+2*this.a*this.s)-this.v)/this.a;this.t=Math.min(b,c)}"undefined"==typeof this.s&&(this.s=this.a*this.t*this.t/2+this.v*this.t)}d.prototype.generateCubicBezier=function(){return c(this.v/this.a,this.t+this.v/this.a)},b.motion=d}(window,window.lib||(window.lib={}));!function(a){"use strict";function b(a,b){for(var c=a;c;){if(c.contains(b)||c==b)return c;c=c.parentNode}return null}function c(a,b,c){var d=i.createEvent("HTMLEvents");if(d.initEvent(b,!0,!0),"object"==typeof c)for(var e in c)d[e]=c[e];a.dispatchEvent(d)}function d(a,b,c,d,e,f,g,h){var i=Math.atan2(h-f,g-e)-Math.atan2(d-b,c-a),j=Math.sqrt((Math.pow(h-f,2)+Math.pow(g-e,2))/(Math.pow(d-b,2)+Math.pow(c-a,2))),k=[e-j*a*Math.cos(i)+j*b*Math.sin(i),f-j*b*Math.cos(i)-j*a*Math.sin(i)];return{rotate:i,scale:j,translate:k,matrix:[[j*Math.cos(i),-j*Math.sin(i),k[0]],[j*Math.sin(i),j*Math.cos(i),k[1]],[0,0,1]]}}function e(a){0===Object.keys(l).length&&(j.addEventListener("touchmove",f,!1),j.addEventListener("touchend",g,!1),j.addEventListener("touchcancel",h,!1));for(var d=0;d<a.changedTouches.length;d++){var e=a.changedTouches[d],i={};for(var m in e)i[m]=e[m];var n={startTouch:i,startTime:Date.now(),status:"tapping",element:a.srcElement||a.target,pressingHandler:setTimeout(function(b){return function(){"tapping"===n.status&&(n.status="pressing",c(b,"press",{touchEvent:a})),clearTimeout(n.pressingHandler),n.pressingHandler=null}}(a.srcElement||a.target),500)};l[e.identifier]=n}if(2==Object.keys(l).length){var o=[];for(var m in l)o.push(l[m].element);c(b(o[0],o[1]),"dualtouchstart",{touches:k.call(a.touches),touchEvent:a})}}function f(a){for(var e=0;e<a.changedTouches.length;e++){var f=a.changedTouches[e],g=l[f.identifier];if(!g)return;g.lastTouch||(g.lastTouch=g.startTouch),g.lastTime||(g.lastTime=g.startTime),g.velocityX||(g.velocityX=0),g.velocityY||(g.velocityY=0),g.duration||(g.duration=0);var h=Date.now()-g.lastTime,i=(f.clientX-g.lastTouch.clientX)/h,j=(f.clientY-g.lastTouch.clientY)/h,k=70;h>k&&(h=k),g.duration+h>k&&(g.duration=k-h),g.velocityX=(g.velocityX*g.duration+i*h)/(g.duration+h),g.velocityY=(g.velocityY*g.duration+j*h)/(g.duration+h),g.duration+=h,g.lastTouch={};for(var m in f)g.lastTouch[m]=f[m];g.lastTime=Date.now();var n=f.clientX-g.startTouch.clientX,o=f.clientY-g.startTouch.clientY,p=Math.sqrt(Math.pow(n,2)+Math.pow(o,2));("tapping"===g.status||"pressing"===g.status)&&p>10&&(g.status="panning",g.isVertical=!(Math.abs(n)>Math.abs(o)),c(g.element,"panstart",{touch:f,touchEvent:a,isVertical:g.isVertical}),c(g.element,(g.isVertical?"vertical":"horizontal")+"panstart",{touch:f,touchEvent:a})),"panning"===g.status&&(g.panTime=Date.now(),c(g.element,"pan",{displacementX:n,displacementY:o,touch:f,touchEvent:a,isVertical:g.isVertical}),g.isVertical?c(g.element,"verticalpan",{displacementY:o,touch:f,touchEvent:a}):c(g.element,"horizontalpan",{displacementX:n,touch:f,touchEvent:a}))}if(2==Object.keys(l).length){for(var q,r=[],s=[],t=[],e=0;e<a.touches.length;e++){var f=a.touches[e],g=l[f.identifier];r.push([g.startTouch.clientX,g.startTouch.clientY]),s.push([f.clientX,f.clientY])}for(var m in l)t.push(l[m].element);q=d(r[0][0],r[0][1],r[1][0],r[1][1],s[0][0],s[0][1],s[1][0],s[1][1]),c(b(t[0],t[1]),"dualtouch",{transform:q,touches:a.touches,touchEvent:a})}}function g(a){if(2==Object.keys(l).length){var d=[];for(var e in l)d.push(l[e].element);c(b(d[0],d[1]),"dualtouchend",{touches:k.call(a.touches),touchEvent:a})}for(var i=0;i<a.changedTouches.length;i++){var n=a.changedTouches[i],o=n.identifier,p=l[o];if(p){if(p.pressingHandler&&(clearTimeout(p.pressingHandler),p.pressingHandler=null),"tapping"===p.status&&(p.timestamp=Date.now(),c(p.element,"tap",{touch:n,touchEvent:a}),m&&p.timestamp-m.timestamp<300&&c(p.element,"doubletap",{touch:n,touchEvent:a}),m=p),"panning"===p.status){var q=Date.now(),r=q-p.startTime,s=((n.clientX-p.startTouch.clientX)/r,(n.clientY-p.startTouch.clientY)/r,n.clientX-p.startTouch.clientX),t=n.clientY-p.startTouch.clientY,u=Math.sqrt(p.velocityY*p.velocityY+p.velocityX*p.velocityX),v=u>.5&&q-p.lastTime<100,w={duration:r,isflick:v,velocityX:p.velocityX,velocityY:p.velocityY,displacementX:s,displacementY:t,touch:n,touchEvent:a,isVertical:p.isVertical};c(p.element,"panend",w),v&&(c(p.element,"flick",w),p.isVertical?c(p.element,"verticalflick",w):c(p.element,"horizontalflick",w))}"pressing"===p.status&&c(p.element,"pressend",{touch:n,touchEvent:a}),delete l[o]}}0===Object.keys(l).length&&(j.removeEventListener("touchmove",f,!1),j.removeEventListener("touchend",g,!1),j.removeEventListener("touchcancel",h,!1))}function h(a){if(2==Object.keys(l).length){var d=[];for(var e in l)d.push(l[e].element);c(b(d[0],d[1]),"dualtouchend",{touches:k.call(a.touches),touchEvent:a})}for(var i=0;i<a.changedTouches.length;i++){var m=a.changedTouches[i],n=m.identifier,o=l[n];o&&(o.pressingHandler&&(clearTimeout(o.pressingHandler),o.pressingHandler=null),"panning"===o.status&&c(o.element,"panend",{touch:m,touchEvent:a}),"pressing"===o.status&&c(o.element,"pressend",{touch:m,touchEvent:a}),delete l[n])}0===Object.keys(l).length&&(j.removeEventListener("touchmove",f,!1),j.removeEventListener("touchend",g,!1),j.removeEventListener("touchcancel",h,!1))}var i=a.document,j=i.documentElement,k=Array.prototype.slice,l={},m=null;j.addEventListener("touchstart",e,!1)}(window,window.lib||(window.lib={}));!function(a,b){function c(a,b){function c(){r||(r=!0,l=a.querySelector("canvas"),m=l.getContext("2d"),p=.13373158940994154,q=.06015722128359704);var b=l.getBoundingClientRect();(l.width!==b.width*s||l.height!==b.height*s)&&(l.width=b.width*s,l.height=b.height*s,n=b.width/2,o=n/15)}function d(){if("spin"===t){c();var a=0;lib.animation.requestFrame(function(){"spin"===t&&(m.clearRect(0,0,l.width,l.height),m.beginPath(),m.arc(n*s,n*s,(n-o)*s,-p-Math.PI/2-a,-p-Math.PI/2-100*q-a,!0),m.lineWidth=o*s,m.strokeStyle="#ff5000",m.stroke(),m.closePath(),a+=4*Math.PI/60,lib.animation.requestFrame(arguments.callee))})}}function g(a){"draw"===t&&(c(),a>100&&(a=100),m.clearRect(0,0,l.width*s,l.height*s),m.beginPath(),m.arc(n*s,n*s,(n-o)*s,-p-Math.PI/2,-p-Math.PI/2-q*a,!0),m.lineWidth=o*s,m.strokeStyle="#ff5000",m.stroke(),m.closePath())}function h(){var b=a.querySelector(".arrow");b.style.cssText="display: block"}function i(){var b=a.querySelector(".arrow");b.style[e+"Transform"]="scale(1)",b.style.opacity="1";var c=new lib.animation(400,lib.cubicbezier.easeIn,0,function(a,c){b.style[e+"Transform"]="scale("+(1-.5*c)+")",b.style.opacity=1-c+""});c.onend(function(){b.style.cssText="display:none"}),c.play()}var j=Date.now()+"-"+ ++f,k=document.createDocumentFragment();1!==arguments.length||arguments[0]instanceof HTMLElement||(b=arguments[0],a=null),a||(a=document.createElement("div"),k.appendChild(a)),b=b||{},a.setAttribute("data-ctrl-name","loading"),a.setAttribute("data-ctrl-id",j),a.innerHTML='<div><canvas></canvas><span class="arrow"></span></div><span class="text"></span>';var l,m,n,o,p,q,r=!1,s=2;Object.defineProperty(this,"bgcolor",{get:function(){return a.style.backgroundColor},set:function(b){if("string"!=typeof b)throw new Error("Non expected value");a.style.backgroundColor=b}}),Object.defineProperty(this,"text",{get:function(){return a.querySelector(".text").textContent},set:function(b){if("string"!=typeof b)throw new Error("Non expected value");var c=a.querySelector("div"),d=a.querySelector(".text");b?(a.style[e+"BoxPack"]="",c.style.marginLeft="",d.style.display="block",d.textContent=b):(a.style[e+"BoxPack"]="center",c.style.marginLeft="0",d.style.display="none",d.textContent="")}});var t="";Object.defineProperty(this,"mode",{get:function(){return t},set:function(a){if(!a&&"string"!=typeof a&&["draw","spin"].indexOf(a)<0)throw new Error("Non expected value");t=a,"spin"===t?(v&&i(),d()):"draw"===t&&(h(),g(0))}});var u=0;Object.defineProperty(this,"per",{get:function(){return u},set:function(a){if("draw"!==t)throw new Error('only work under "draw" mode');if(!a&&"number"!=typeof a&&0>a&&a>100)throw new Error("Non expected value");g(a)}});var v="";Object.defineProperty(this,"arrowDirection",{get:function(){return v},set:function(b){if(!b&&"string"!=typeof b&&["up","down",""].indexOf(b)<0)throw new Error("Non expected value");v=b,a.querySelector(".arrow").className="arrow "+b}}),this.remove=function(){a.parentNode&&a.parentNode.removeChild(a)},this.element=a,this.root=k}var d=a.navigator.userAgent.match(/IEMobile\/([\d\.]+)/),e=d?"ms":"webkit",f=0;b.loading=c}(window,window.ctrl||(window.ctrl={}));!function(){var a='[data-ctrl-name=loading]{width:100%;height:100%;display:-ms-flexbox;-ms-flex-align:center;-ms-flex-pack:center;display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;display:-moz-box;-moz-box-align:center;-moz-box-pack:center}[data-ctrl-name=loading] div{position:relative}[data-ctrl-name=loading] .arrow{display:none;position:absolute;left:0;top:0;width:100%;height:100%;background-position:center center;background-repeat:no-repeat;background-size:contain}[data-ctrl-name=loading] .arrow.down{display:block;background-image:url(http://gtms03.alicdn.com/tps/i3/TB180mKFVXXXXXtXVXXmqjTHFXX-60-60.png)}[data-ctrl-name=loading] .arrow.up{display:block;background-image:url(http://gtms04.alicdn.com/tps/i4/TB1ECWQFVXXXXaBXpXXmqjTHFXX-60-60.png)}[data-ctrl-name=loading] .text{display:block;color:#999;margin-left:.3rem}[data-dpr="1"] [data-ctrl-name=loading] div,[data-dpr="1"] [data-ctrl-name=loading] canvas{width:30px;height:30px}[data-dpr="2"] [data-ctrl-name=loading] div,[data-dpr="2"] [data-ctrl-name=loading] canvas{width:60px;height:60px}[data-dpr="3"] [data-ctrl-name=loading] div,[data-dpr="3"] [data-ctrl-name=loading] canvas{width:90px;height:90px}[data-dpr="1"] [data-ctrl-name=loading] .text{height:30px;line-height:30px;font-size:12px}[data-dpr="2"] [data-ctrl-name=loading] .text{height:60px;line-height:60px;font-size:24px}[data-dpr="3"] [data-ctrl-name=loading] .text{height:90px;line-height:90px;font-size:36px}',b=document.createElement("style");if(document.getElementsByTagName("head")[0].appendChild(b),b.styleSheet)b.styleSheet.disabled||(b.styleSheet.cssText=a);else try{b.innerHTML=a}catch(c){b.innerText=a}}();!function(a,b){function c(){b.scroll.outputDebugLog&&console.debug.apply(console,arguments)}function d(a){var b=a.getBoundingClientRect();if(!b){b={},b.width=a.offsetWidth,b.height=a.offsetHeight,b.left=a.offsetLeft,b.top=a.offsetTop;for(var c=a.offsetParent;c;)b.left+=c.offsetLeft,b.top+=c.offsetTop,c=c.offsetParent;b.right=b.left+b.width,b.bottom=b.top+b.height}return b}function e(a){return 0-a.options[a.axis+"PaddingTop"]}function f(a){var b=d(a.element),c=d(a.viewport),f=e(a);if("y"===a.axis)var g=0-b.height+c.height;else var g=0-b.width+c.width;return Math.min(g+a.options[a.axis+"PaddingBottom"],f)}function g(a,b){return b>a.minScrollOffset?b-a.minScrollOffset:b<a.maxScrollOffset?b-a.maxScrollOffset:void 0}function h(a,b){return b>a.minScrollOffset?b=a.minScrollOffset:b<a.maxScrollOffset&&(b=a.maxScrollOffset),b}function i(a,b,d){c(a.element.scrollId,b,d);var e=o.createEvent("HTMLEvents");if(e.initEvent(b,!1,!0),e.scrollObj=a,d)for(var f in d)e[f]=d[f];a.element.dispatchEvent(e),a.viewport.dispatchEvent(e)}function j(a){var b,c={x:0,y:0},d=getComputedStyle(a.element)[x+"Transform"];return"none"!==d&&(b=d.match(/^matrix3d\((?:[-\d.]+,\s*){12}([-\d.]+),\s*([-\d.]+)(?:,\s*[-\d.]+){2}\)/)||d.match(/^matrix\((?:[-\d.]+,\s*){4}([-\d.]+),\s*([-\d.]+)\)$/))&&(c.x=parseFloat(b[1])||0,c.y=parseFloat(b[2])||0),c}function k(a,b){return a=parseFloat(a),b=parseFloat(b),0!=a&&(a+="px"),0!=b&&(b+="px"),z?"translate3d("+a+", "+b+", 0)":"translate("+a+", "+b+")"}function l(a,b,c){a.element.style[x+"Transition"]=""===b&&""===c?"":w+"transform "+b+" "+c+" 0s"}function m(a,b){var c=0,d=0;"object"==typeof b?(c=b.x,d=b.y):"y"===a.axis?d=b:c=b,a.element.style[x+"Transform"]=k(c,d)}function n(a,k){function n(a){return F||L?(a.preventDefault(),a.stopPropagation(),!1):!0}function o(a){F||L||setTimeout(function(){var b=document.createEvent("HTMLEvents");b.initEvent("niceclick",!0,!0),a.target.dispatchEvent(b)},300)}function p(a,c){I=null,clearTimeout(J),J=setTimeout(function(){I&&(I=null,b.animation.requestFrame(a))},c||400),I=a}function s(a){if(!E.enabled)return!1;if("undefined"!=typeof a.isVertical){if(!("y"===E.axis&&a.isVertical||"x"===E.axis&&!a.isVertical))return!1;a.stopPropagation()}return!0}function v(a){if(s(a))if(L&&D(),k.useFrameAnimation)H&&H.stop(),H=null;else{var b=j(E);m(E,b),l(E,"",""),I=null,clearTimeout(J)}}function w(a){if(s(a)){var c=j(E)[E.axis],d=g(E,c);if(d){var e=h(E,c);if(k.useFrameAnimation){var f=e-c;H=new b.animation(400,b.cubicbezier.ease,0,function(a,b){var d=(c+f*b).toFixed(2);m(E,d),i(E,"scrolling")}),H.onend(D),H.play()}else{var n=e.toFixed(0);l(E,"0.4s","ease"),m(E,n),p(D,400),b.animation.requestFrame(function(){L&&E.enabled&&(i(E,"scrolling"),b.animation.requestFrame(arguments.callee))})}d>0?i(E,"y"===E.axis?"pulldownend":"pullrightend"):0>d&&i(E,"y"===E.axis?"pullupend":"pullleftend")}else L&&D()}}function y(a){s(a)&&(E.transformOffset=j(E),E.minScrollOffset=e(E),E.maxScrollOffset=f(E),K=2.5,N=!0,L=!0,M=!1,i(E,"scrollstart"),O=a["displacement"+E.axis.toUpperCase()])}function z(a){if(s(a)){var b=a["displacement"+E.axis.toUpperCase()];if(Math.abs(b-O)<5)return a.stopPropagation(),void 0;O=b;var c=E.transformOffset[E.axis]+b;c>E.minScrollOffset?(c=E.minScrollOffset+(c-E.minScrollOffset)/K,K*=1.003):c<E.maxScrollOffset&&(c=E.maxScrollOffset-(E.maxScrollOffset-c)/K,K*=1.003),K>4&&(K=4);var d=g(E,c);d&&(i(E,d>0?"y"===E.axis?"pulldown":"pullright":"y"===E.axis?"pullup":"pullleft",{boundaryOffset:Math.abs(d)}),E.options.noBounce&&(c=h(E,c))),m(E,c.toFixed(2)),i(E,"scrolling")}}function B(a){s(a)&&a.isflick&&C(a)}function C(a){N=!0;var d,e,f,h,n,o,q,r,s,u,v,w,x,y,z,A,B;h=j(E)[E.axis];var C=g(E,h);if(!C){d=a["velocity"+E.axis.toUpperCase()];var F=2,G=.0015;k.inertia&&t[k.inertia]&&(F=t[k.inertia][0],G=t[k.inertia][1]),d>F&&(d=F),-F>d&&(d=-F),e=G*(d/Math.abs(d)),o=new b.motion({v:d,a:-e}),f=o.t,n=h+o.s;var I=g(E,n);if(I){c("惯性计算超出了边缘",I),q=d,r=e,I>0?(u=E.minScrollOffset,w=1):(u=E.maxScrollOffset,w=-1),v=new b.motion({v:w*q,a:-w*r,s:Math.abs(u-h)}),s=v.t;var J=v.generateCubicBezier();x=q-r*s,y=.03*(x/Math.abs(x)),B=new b.motion({v:x,a:-y}),z=B.t,A=u+B.s;{B.generateCubicBezier()}if(k.noBounce)if(c("没有回弹效果"),h!==u)if(k.useFrameAnimation){var K=u-h,O=b.cubicbezier(J[0][0],J[0][1],J[1][0],J[1][1]);H=new b.animation(s.toFixed(0),O,0,function(a,b){var c=h+K*b;j(E,c.toFixed(2)),i(E,"scrolling",{afterFlick:!0})}),H.onend(D),H.play()}else{var P=u.toFixed(0);l(E,(s/1e3).toFixed(2)+"s","cubic-bezier("+J+")"),m(E,P),p(D,1e3*(s/1e3).toFixed(2))}else D();else if(h!==A)if(c("惯性滚动","s="+A.toFixed(0),"t="+((s+z)/1e3).toFixed(2)),k.useFrameAnimation){var K=A-h,O=b.cubicbezier.easeOut;H=new b.animation((s+z).toFixed(0),O,0,function(a,b){var c=h+K*b;m(E,c.toFixed(2)),i(E,"scrolling",{afterFlick:!0})}),H.onend(function(){if(E.enabled){var a=u-A,c=b.cubicbezier.ease;H=new b.animation(400,c,0,function(b,c){var d=A+a*c;m(E,d.toFixed(2)),i(E,"scrolling",{afterFlick:!0})}),H.onend(D),H.play()}}),H.play()}else{var P=A.toFixed(0);l(E,((s+z)/1e3).toFixed(2)+"s","ease-out"),m(E,P),p(function(){if(E.enabled)if(c("惯性回弹","s="+u.toFixed(0),"t=400"),A!==u){var a=u.toFixed(0);l(E,"0.4s","ease"),m(E,a),p(D,400)}else D()},1e3*((s+z)/1e3).toFixed(2))}else D()}else{c("惯性计算没有超出边缘");var Q=o.generateCubicBezier();if(k.useFrameAnimation){var K=n-h,O=b.cubicbezier(Q[0][0],Q[0][1],Q[1][0],Q[1][1]);H=new b.animation(f.toFixed(0),O,0,function(a,b){var c=(h+K*b).toFixed(2);m(E,c),i(E,"scrolling",{afterFlick:!0})}),H.onend(D),H.play()}else{var P=n.toFixed(0);l(E,(f/1e3).toFixed(2)+"s","cubic-bezier("+Q+")"),m(E,P),p(D,1e3*(f/1e3).toFixed(2))}}M=!0,k.useFrameAnimation||b.animation.requestFrame(function(){L&&M&&E.enabled&&(i(E,"scrolling",{afterFlick:!0}),b.animation.requestFrame(arguments.callee))})}}function D(){E.enabled&&(N=!1,setTimeout(function(){!N&&L&&(L=!1,M=!1,k.useFrameAnimation?(H&&H.stop(),H=null):l(E,"",""),i(E,"scrollend"))},50))}var E=this;if(k=k||{},k.noBounce=!!k.noBounce,k.padding=k.padding||{},k.isPrevent=null==k.isPrevent?!0:!!k.isPrevent,k.isFixScrollendClick=null==k.isFixScrollendClick?!0:!!k.isFixScrollendClick,k.padding?(k.yPaddingTop=-k.padding.top||0,k.yPaddingBottom=-k.padding.bottom||0,k.xPaddingTop=-k.padding.left||0,k.xPaddingBottom=-k.padding.right||0):(k.yPaddingTop=0,k.yPaddingBottom=0,k.xPaddingTop=0,k.xPaddingBottom=0),k.direction=k.direction||"y",k.inertia=k.inertia||"normal",this.options=k,E.axis=k.direction,this.element=a,this.viewport=a.parentNode,this.plugins={},this.element.scrollId=setTimeout(function(){q[E.element.scrollId+""]=E},1),this.viewport.addEventListener("touchstart",v,!1),this.viewport.addEventListener("touchend",w,!1),this.viewport.addEventListener("touchcancel",w,!1),this.viewport.addEventListener("panstart",y,!1),this.viewport.addEventListener("pan",z,!1),this.viewport.addEventListener("panend",B,!1),k.isPrevent&&(this.viewport.addEventListener("touchstart",function(){A=!0},!1),E.viewport.addEventListener("touchend",function(){A=!1},!1)),k.isFixScrollendClick){var F,G;this.viewport.addEventListener("scrolling",function(){F=!0,G&&clearTimeout(G),G=setTimeout(function(){F=!1},400)},!1),this.viewport.addEventListener("click",n,!1),this.viewport.addEventListener("tap",o,!1)}if(k.useFrameAnimation){var H;Object.defineProperty(this,"animation",{get:function(){return H}})}else{var I,J=0;a.addEventListener(u?"transitionend":x+"TransitionEnd",function(a){if(I){var c=I;I=null,clearTimeout(J),b.animation.requestFrame(function(){c(a)})}},!1)}var K,L,M,N;Object.defineProperty(this,"isScrolling",{get:function(){return!!L}});var O,P={init:function(){return this.enable(),this.refresh(),this.scrollTo(0),this},enable:function(){return this.enabled=!0,this},disable:function(){var a=this.element;return this.enabled=!1,this.options.useFrameAnimation?H&&H.stop():b.animation.requestFrame(function(){a.style[x+"Transform"]=getComputedStyle(a)[x+"Transform"]}),this},getScrollWidth:function(){return d(this.element).width},getScrollHeight:function(){return d(this.element).height},getScrollLeft:function(){return-j(this).x-this.options.xPaddingTop},getScrollTop:function(){return-j(this).y-this.options.yPaddingTop},getMaxScrollLeft:function(){return-E.maxScrollOffset-this.options.xPaddingTop},getMaxScrollTop:function(){return-E.maxScrollOffset-this.options.yPaddingTop},getBoundaryOffset:function(){return Math.abs(g(this,j(this)[this.axis])||0)},refresh:function(){var a=this.element,b="y"===this.axis,c=b?"height":"width";if(null!=this.options[c])a.style[c]=this.options[c]+"px";else if(this.options.useElementRect)a.style[c]="auto",a.style[c]=d(a)[c]+"px";else if(a.childElementCount>0){var g,h,k=a.firstElementChild,l=a.lastElementChild;if(document.createRange&&!this.options.ignoreOverflow&&(g=document.createRange(),g.selectNodeContents(a),h=d(g)),h)a.style[c]=h[c]+"px";else{for(;k&&0===d(k)[c]&&k.nextElementSibling;)k=k.nextElementSibling;for(;l&&l!==k&&0===d(l)[c]&&l.previousElementSibling;)l=l.previousElementSibling;a.style[c]=d(l)[b?"bottom":"right"]-d(k)[b?"top":"left"]+"px"}}return this.transformOffset=j(this),this.minScrollOffset=e(this),this.maxScrollOffset=f(this),this.scrollTo(-this.transformOffset[this.axis]-this.options[this.axis+"PaddingTop"]),i(this,"contentrefresh"),this},offset:function(a){var b=d(this.element),c=d(a);if("y"===this.axis){var e={top:c.top-b.top-this.options.yPaddingTop,left:c.left-b.left,right:b.right-c.right,width:c.width,height:c.height};e.bottom=e.top+e.height}else{var e={top:c.top-b.top,bottom:b.bottom-c.bottom,left:c.left-b.left-this.options.xPaddingTop,width:c.width,height:c.height};e.right=e.left+e.width}return e},getRect:function(a){var b=d(this.viewport),c=d(a);if("y"===this.axis){var e={top:c.top-b.top,left:c.left-b.left,right:b.right-c.right,width:c.width,height:c.height};e.bottom=e.top+e.height}else{var e={top:c.top-b.top,bottom:b.bottom-c.bottom,left:c.left-b.left,width:c.width,height:c.height};e.right=e.left+e.width}return e},isInView:function(a){var b=this.getRect(this.viewport),c=this.getRect(a);return"y"===this.axis?b.top<c.bottom&&b.bottom>c.top:b.left<c.right&&b.right>c.left},scrollTo:function(a,c){{var d=this;this.element}if(a=-a-this.options[this.axis+"PaddingTop"],a=h(this,a),L=!0,c===!0)if(this.options.useFrameAnimation){var e=j(d)[this.axis],f=a-e;H=new b.animation(400,b.cubicbezier.ease,0,function(a,b){var c=(e+f*b).toFixed(2);m(d,c),i(d,"scrolling")}),H.onend(D),H.play()}else l(d,"0.4s","ease"),m(d,a),p(D,400),b.animation.requestFrame(function(){L&&d.enabled&&(i(d,"scrolling"),b.animation.requestFrame(arguments.callee))});else this.options.useFrameAnimation||l(d,"",""),m(d,a),D();return this},scrollToElement:function(a,b){var c=this.offset(a);return c=c["y"===this.axis?"top":"left"],this.scrollTo(c,b)},getViewWidth:function(){return d(this.viewport).width},getViewHeight:function(){return d(this.viewport).height},addPulldownHandler:function(a){var b=this;return this.element.addEventListener("pulldownend",function(c){b.disable(),a.call(b,c,function(){b.scrollTo(0,!0),b.refresh(),b.enable()})},!1),this},addPullupHandler:function(a){var b=this;return this.element.addEventListener("pullupend",function(c){b.disable(),a.call(b,c,function(){b.scrollTo(b.getScrollHeight(),!0),b.refresh(),b.enable()})},!1),this},addScrollstartHandler:function(a){var b=this;return this.element.addEventListener("scrollstart",function(c){a.call(b,c)},!1),this},addScrollingHandler:function(a){var b=this;return this.element.addEventListener("scrolling",function(c){a.call(b,c)},!1),this},addScrollendHandler:function(a){var b=this;return this.element.addEventListener("scrollend",function(c){a.call(b,c)},!1),this},addContentrenfreshHandler:function(a){var b=this;this.element.addEventListener("contentrefresh",function(c){a.call(b,c)},!1)},addEventListener:function(a,b,c){var d=this;this.element.addEventListener(a,function(a){b.call(d,a)},!!c)},removeEventListener:function(a,b){var c=this;this.element.removeEventListener(a,function(a){b.call(c,a)})},enablePlugin:function(a,b){var c=r[a];return c&&!this.plugins[a]&&(this.plugins[a]=!0,b=b||{},c.call(this,a,b)),this}};for(var Q in P)this[Q]=P[Q];delete P}var o=a.document,p=a.navigator.userAgent,q={},r={},s=a.dpr||(a.navigator.userAgent.match(/iPhone|iPad|iPod/)?document.documentElement.clientWidth/a.screen.availWidth:1),t={normal:[2*s,.0015*s],slow:[1.5*s,.003*s],veryslow:[1.5*s,.005*s]},u=!!p.match(/Firefox/i),v=!!p.match(/IEMobile/i),w=u?"-moz-":v?"-ms-":"-webkit-",x=u?"Moz":v?"ms":"webkit",y=v?"MSCSSMatrix":"WebKitCSSMatrix",z=!!u||y in a&&"m11"in new a[y],A=!1;o.addEventListener("touchmove",function(a){return A?(a.preventDefault(),!1):!0},!1),b.scroll=function(a,c){if(1===arguments.length&&!(arguments[0]instanceof HTMLElement))if(c=arguments[0],c.scrollElement)a=c.scrollElement;else{if(!c.scrollWrap)throw new Error("no scroll element");a=c.scrollWrap.firstElementChild}if(!a.parentNode)throw new Error("wrong dom tree");if(c&&c.direction&&["x","y"].indexOf(c.direction)<0)throw new Error("wrong direction");var d;return d=c.downgrade===!0&&b.scroll.downgrade?b.scroll.downgrade(a,c):a.scrollId?q[a.scrollId]:new n(a,c)},b.scroll.plugin=function(a,b){return b?(a=a.split(","),a.forEach(function(a){r[a]=b}),void 0):r[a]}}(window,window.lib||(window.lib={}));