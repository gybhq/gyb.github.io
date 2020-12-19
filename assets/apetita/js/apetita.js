(function($){
	"use strict";

	/**
	 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
	**/

	(function(a) {
		($.browser = $.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
	})(navigator.userAgent || navigator.vendor || window.opera);

	(function(a) {
		($.browser = $.browser || {}).ipad = /ipad/i.test(a);
	})(navigator.userAgent || navigator.vendor || window.opera);

	var mobile = $.browser.mobile;
	var ipad = $.browser.ipad;
	window.mobile = mobile;
	window.ipad = ipad;

	
})(jQuery);
;/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(a){function b(a){var b=a.length,d=c.type(a);return"function"===d||c.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return null!=a&&a==a.window},c.type=function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;g>f&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var f=a[c.expando]||(a[c.expando]=++c.uuid);return d[f]=d[f]||{},d[f][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&c.each(b,function(a,b){delete f[b]})},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);j>i;i++)if(null!=(f=arguments[i]))for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return null!=a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(){for(var a=this.offsetParent||document;a&&"html"===!a.nodeType.toLowerCase&&"static"===a.style.position;)a=a.offsetParent;return a||document}var b=this[0],a=a.apply(b),d=this.offset(),e=/^(?:body|html)$/i.test(a.nodeName)?{top:0,left:0}:c(a).offset();return d.top-=parseFloat(b.style.marginTop)||0,d.left-=parseFloat(b.style.marginLeft)||0,a.style&&(e.top+=parseFloat(a.style.borderTopWidth)||0,e.left+=parseFloat(a.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;p>e;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;t>b;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!=f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0==i?h:m(b,c,c+u)}function o(){y=!0,(a!=c||d!=e)&&l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;4>w;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):p.isArray(a)&&4===a.length?i.apply(null,a):!1,c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls));for(var f=0;c>f;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;u>s;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{if(v.Hooks.registered[B]){var G=v.Hooks.getRoot(B),H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]?v.Normalizations.registered[G]("extract",null,I[1]):I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;k>j;j++){var l=c[j].element;if(b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility)),f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&g(l)){g(l).isAnimating=!1,g(l).rootPropertyValueCache={};var n=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=g(l).transformCache[b];g(l).transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete g(l).transformCache[b])}),f.mobileHA&&(n=!0,delete g(l).transformCache.translate3d),n&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(o){setTimeout(function(){throw o},1)}h&&f.loop!==!0&&h(e),g(l)&&f.loop===!0&&!b&&(m.each(g(l).tweensContainer,function(a,b){/^rotate/.test(a)&&360===parseFloat(b.endValue)&&(b.endValue=0,b.startValue=360),/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var p=0,q=t.State.calls.length;q>p;p++)if(t.State.calls[p]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,8>=n&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=n)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>l&&Math.abs(h.v)>l))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var a in e){var g=c+e[a],h=a;v.Hooks.registered[g]=[c,h]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){9>=n||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&1>e&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var a=0;a<v.Lists.colors.length;a++)!function(){var b=v.Lists.colors[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return b;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=n||3!==f.split(" ").length||(f+=" 1"),f;case"inject":return 8>=n?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(8>=n?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){function e(){j&&v.setPropertyValue(a,"display","none")}var i=0;if(8>=n)i=m.css(a,c);else{var j=!1;if(/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(j=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a))),!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return e(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return e(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),i=9===n&&"filter"===c?o.getPropertyValue(c):o[c],(""===i||null===i)&&(i=a.style[c]),e()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(i=m(a).position()[c]+"px")}return i}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i))if(g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(p){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0]);return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){function b(b){return parseFloat(v.getPropertyValue(a,b))}var c="";if((n||t.State.isAndroid&&!t.State.isChrome)&&g(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a])})}else{var e,f;m.each(g(a).transformCache,function(b){return e=g(a).transformCache[b],"transformPerspective"===b?(f=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "))}),f&&(c="perspective"+f+" "+c)}v.setPropertyValue(a,"transform",c)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e=d;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return h?B.promise||null:i}function e(){function a(){function a(a,b){var c=d,e=d,g=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])||v.RegEx.isHex.test(a[1])?g=a[1]:(p.isString(a[1])&&!v.RegEx.isHex.test(a[1])||p.isArray(a[1]))&&(e=b?a[1]:j(a[1],h.duration),a[2]!==d&&(g=a[2]))):c=a,b||(e=e||h.easing),p.isFunction(c)&&(c=c.call(f,y,x)),p.isFunction(g)&&(g=g.call(f,y,x)),[c||0,e,g]}function l(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]}function n(){var a={myParent:f.parentNode||c.body,position:v.getPropertyValue(f,"position"),fontSize:v.getPropertyValue(f,"fontSize")},d=a.position===I.lastPosition&&a.myParent===I.lastParent,e=a.fontSize===I.lastFontSize;I.lastParent=a.myParent,I.lastPosition=a.position,I.lastFontSize=a.fontSize;var h=100,i={};if(e&&d)i.emToPx=I.lastEmToPx,i.percentToPxWidth=I.lastPercentToPxWidth,i.percentToPxHeight=I.lastPercentToPxHeight;else{var j=g(f).isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(j),a.myParent.appendChild(j),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(j,b,"hidden")}),t.CSS.setPropertyValue(j,"position",a.position),t.CSS.setPropertyValue(j,"fontSize",a.fontSize),t.CSS.setPropertyValue(j,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(j,b,h+"%")}),t.CSS.setPropertyValue(j,"paddingLeft",h+"em"),i.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(j,"width",null,!0))||1)/h,i.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(j,"height",null,!0))||1)/h,i.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(j,"paddingLeft"))||1)/h,a.myParent.removeChild(j)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),i.remToPx=I.remToPx,i.vwToPx=I.vwToPx,i.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),f),i}if(h.begin&&0===y)try{h.begin.call(o,o)}catch(r){setTimeout(function(){throw r},1)}if("scroll"===C){var u,w,z,A=/^x$/i.test(h.axis)?"Left":"Top",D=parseFloat(h.offset)||0;h.container?p.isWrapped(h.container)||p.isNode(h.container)?(h.container=h.container[0]||h.container,u=h.container["scroll"+A],z=u+m(f).position()[A.toLowerCase()]+D):h.container=null:(u=t.State.scrollAnchor[t.State["scrollProperty"+A]],w=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===A?"Top":"Left")]],z=m(f).offset()[A.toLowerCase()]+D),i={scroll:{rootPropertyValue:!1,startValue:u,currentValue:u,endValue:z,unitType:"",easing:h.easing,scrollData:{container:h.container,direction:A,alternateValue:w}},element:f},t.debug&&console.log("tweensContainer (scroll): ",i.scroll,f)}else if("reverse"===C){if(!g(f).tweensContainer)return void m.dequeue(f,h.queue);"none"===g(f).opts.display&&(g(f).opts.display="auto"),"hidden"===g(f).opts.visibility&&(g(f).opts.visibility="visible"),g(f).opts.loop=!1,g(f).opts.begin=null,g(f).opts.complete=null,s.easing||delete h.easing,s.duration||delete h.duration,h=m.extend({},g(f).opts,h);var E=m.extend(!0,{},g(f).tweensContainer);for(var F in E)if("element"!==F){var G=E[F].startValue;E[F].startValue=E[F].currentValue=E[F].endValue,E[F].endValue=G,p.isEmptyObject(s)||(E[F].easing=h.easing),t.debug&&console.log("reverse tweensContainer ("+F+"): "+JSON.stringify(E[F]),f)}i=E}else if("start"===C){var E;g(f).tweensContainer&&g(f).isAnimating===!0&&(E=g(f).tweensContainer),m.each(q,function(b,c){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(b)){var e=a(c,!0),f=e[0],g=e[1],h=e[2];if(v.RegEx.isHex.test(f)){for(var i=["Red","Green","Blue"],j=v.Values.hexToRgb(f),k=h?v.Values.hexToRgb(h):d,l=0;l<i.length;l++){var m=[j[l]];g&&m.push(g),k!==d&&m.push(k[l]),q[b+i[l]]=m}delete q[b]}}});for(var H in q){var K=a(q[H]),L=K[0],M=K[1],N=K[2];H=v.Names.camelCase(H);var O=v.Hooks.getRoot(H),P=!1;if(g(f).isSVG||"tween"===O||v.Names.prefixCheck(O)[1]!==!1||v.Normalizations.registered[O]!==d){(h.display!==d&&null!==h.display&&"none"!==h.display||h.visibility!==d&&"hidden"!==h.visibility)&&/opacity|filter/.test(H)&&!N&&0!==L&&(N=0),h._cacheValues&&E&&E[H]?(N===d&&(N=E[H].endValue+E[H].unitType),P=g(f).rootPropertyValueCache[O]):v.Hooks.registered[H]?N===d?(P=v.getPropertyValue(f,O),N=v.getPropertyValue(f,H,P)):P=v.Hooks.templates[O][1]:N===d&&(N=v.getPropertyValue(f,H));var Q,R,S,T=!1;if(Q=l(H,N),N=Q[0],S=Q[1],Q=l(H,L),L=Q[0].replace(/^([+-\/*])=/,function(a,b){return T=b,""}),R=Q[1],N=parseFloat(N)||0,L=parseFloat(L)||0,"%"===R&&(/^(fontSize|lineHeight)$/.test(H)?(L/=100,R="em"):/^scale/.test(H)?(L/=100,R=""):/(Red|Green|Blue)$/i.test(H)&&(L=L/100*255,R="")),/[\/*]/.test(T))R=S;else if(S!==R&&0!==N)if(0===L)R=S;else{e=e||n();var U=/margin|padding|left|right|width|text|word|letter/i.test(H)||/X$/.test(H)||"x"===H?"x":"y";switch(S){case"%":N*="x"===U?e.percentToPxWidth:e.percentToPxHeight;break;case"px":break;default:N*=e[S+"ToPx"]}switch(R){case"%":N*=1/("x"===U?e.percentToPxWidth:e.percentToPxHeight);break;case"px":break;default:N*=1/e[R+"ToPx"]}}switch(T){case"+":L=N+L;break;case"-":L=N-L;break;case"*":L=N*L;break;case"/":L=N/L}i[H]={rootPropertyValue:P,startValue:N,currentValue:N,endValue:L,unitType:R,easing:M},t.debug&&console.log("tweensContainer ("+H+"): "+JSON.stringify(i[H]),f)}else t.debug&&console.log("Skipping ["+O+"] due to a lack of browser support.")}i.element=f}i.element&&(v.Values.addClass(f,"velocity-animating"),J.push(i),""===h.queue&&(g(f).tweensContainer=i,g(f).opts=h),g(f).isAnimating=!0,y===x-1?(t.State.calls.push([J,o,h,null,B.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):y++)}var e,f=this,h=m.extend({},t.defaults,s),i={};switch(g(f)===d&&t.init(f),parseFloat(h.delay)&&h.queue!==!1&&m.queue(f,h.queue,function(a){t.velocityQueueEntryFlag=!0,g(f).delayTimer={setTimeout:setTimeout(a,parseFloat(h.delay)),next:a}}),h.duration.toString().toLowerCase()){case"fast":h.duration=200;break;case"normal":h.duration=r;break;case"slow":h.duration=600;break;default:h.duration=parseFloat(h.duration)||1}t.mock!==!1&&(t.mock===!0?h.duration=h.delay=1:(h.duration*=parseFloat(t.mock)||1,h.delay*=parseFloat(t.mock)||1)),h.easing=j(h.easing,h.duration),h.begin&&!p.isFunction(h.begin)&&(h.begin=null),h.progress&&!p.isFunction(h.progress)&&(h.progress=null),h.complete&&!p.isFunction(h.complete)&&(h.complete=null),h.display!==d&&null!==h.display&&(h.display=h.display.toString().toLowerCase(),"auto"===h.display&&(h.display=t.CSS.Values.getDisplayType(f))),h.visibility!==d&&null!==h.visibility&&(h.visibility=h.visibility.toString().toLowerCase()),h.mobileHA=h.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,h.queue===!1?h.delay?setTimeout(a,h.delay):a():m.queue(f,h.queue,function(b,c){return c===!0?(B.promise&&B.resolver(o),!0):(t.velocityQueueEntryFlag=!0,void a(b))}),""!==h.queue&&"fx"!==h.queue||"inprogress"===m.queue(f)[0]||m.dequeue(f)}var h,i,n,o,q,s,u=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(h=!1,n=0,o=this,i=this):(h=!0,n=1,o=u?arguments[0].elements||arguments[0].e:arguments[0]),o=f(o)){u?(q=arguments[0].properties||arguments[0].p,s=arguments[0].options||arguments[0].o):(q=arguments[n],s=arguments[n+1]);var x=o.length,y=0;if(!/^(stop|finish|finishAll)$/i.test(q)&&!m.isPlainObject(s)){var z=n+1;s={};for(var A=z;A<arguments.length;A++)p.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?p.isString(arguments[A])||p.isArray(arguments[A])?s.easing=arguments[A]:p.isFunction(arguments[A])&&(s.complete=arguments[A]):s.duration=arguments[A]}var B={promise:null,resolver:null,rejecter:null};h&&t.Promise&&(B.promise=new t.Promise(function(a,b){B.resolver=a,B.rejecter=b}));var C;switch(q){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"finish":case"finishAll":case"stop":m.each(o,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==q||s!==!0&&!p.isString(s)||(m.each(m.queue(b,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b()}),m.queue(b,p.isString(s)?s:"",[]))});var D=[];return m.each(t.State.calls,function(a,b){b&&m.each(b[1],function(c,e){var f=s===d?"":s;return f===!0||b[2].queue===f||s===d&&b[2].queue===!1?void m.each(o,function(c,d){d===e&&((s===!0||p.isString(s))&&(m.each(m.queue(d,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b(null,!0)
}),m.queue(d,p.isString(s)?s:"",[])),"stop"===q?(g(d)&&g(d).tweensContainer&&f!==!1&&m.each(g(d).tweensContainer,function(a,b){b.endValue=b.currentValue}),D.push(a)):("finish"===q||"finishAll"===q)&&(b[2].duration=1))}):!0})}),"stop"===q&&(m.each(D,function(a,b){l(b,!0)}),B.promise&&B.resolver(o)),a();default:if(!m.isPlainObject(q)||p.isEmptyObject(q)){if(p.isString(q)&&t.Redirects[q]){var E=m.extend({},s),F=E.duration,G=E.delay||0;return E.backwards===!0&&(o=m.extend(!0,[],o).reverse()),m.each(o,function(a,b){parseFloat(E.stagger)?E.delay=G+parseFloat(E.stagger)*a:p.isFunction(E.stagger)&&(E.delay=G+E.stagger.call(b,a,x)),E.drag&&(E.duration=parseFloat(F)||(/^(callout|transition)/.test(q)?1e3:r),E.duration=Math.max(E.duration*(E.backwards?1-a/x:(a+1)/x),.75*E.duration,200)),t.Redirects[q].call(b,b,E||{},a,x,o,B.promise?B:d)}),a()}var H="Velocity: First argument ("+q+") was not a property map, a known action, or a registered redirect. Aborting.";return B.promise?B.rejecter(new Error(H)):console.log(H),a()}C="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(o,function(a,b){p.isNode(b)&&e.call(b)});var K,E=m.extend({},t.defaults,s);if(E.loop=parseInt(E.loop),K=2*E.loop-1,E.loop)for(var L=0;K>L;L++){var M={delay:E.delay,progress:E.progress};L===K-1&&(M.display=E.display,M.visibility=E.visibility,M.complete=E.complete),w(o,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j={opacity:"In"===b?1:0},k=i.complete;i.complete=e!==f-1?i.begin=null:function(){k&&k.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,j,i)}}),t}(window.jQuery||window.Zepto||window,window,document)});
;/*!
 * Isotope PACKAGED v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.0
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  'use strict';
  /* globals define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
      factory( window, jQuery );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }

}( window, function factory( window, jQuery ) {
'use strict';

// ----- utils ----- //

var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
var console = window.console;
var logError = typeof console == 'undefined' ? function() {} :
  function( message ) {
    console.error( message );
  };

// ----- jQueryBridget ----- //

function jQueryBridget( namespace, PluginClass, $ ) {
  $ = $ || jQuery || window.jQuery;
  if ( !$ ) {
    return;
  }

  // add option method -> $().plugin('option', {...})
  if ( !PluginClass.prototype.option ) {
    // option setter
    PluginClass.prototype.option = function( opts ) {
      // bail out if not an object
      if ( !$.isPlainObject( opts ) ){
        return;
      }
      this.options = $.extend( true, this.options, opts );
    };
  }

  // make jQuery plugin
  $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
    if ( typeof arg0 == 'string' ) {
      // method call $().plugin( 'methodName', { options } )
      // shift arguments by 1
      var args = arraySlice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    // just $().plugin({ options })
    plainCall( this, arg0 );
    return this;
  };

  // $().plugin('methodName')
  function methodCall( $elems, methodName, args ) {
    var returnValue;
    var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

    $elems.each( function( i, elem ) {
      // get instance
      var instance = $.data( elem, namespace );
      if ( !instance ) {
        logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
          pluginMethodStr );
        return;
      }

      var method = instance[ methodName ];
      if ( !method || methodName.charAt(0) == '_' ) {
        logError( pluginMethodStr + ' is not a valid method' );
        return;
      }

      // apply method, get return value
      var value = method.apply( instance, args );
      // set return value if value is returned, use only first value
      returnValue = returnValue === undefined ? value : returnValue;
    });

    return returnValue !== undefined ? returnValue : $elems;
  }

  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var instance = $.data( elem, namespace );
      if ( instance ) {
        // set options & init
        instance.option( options );
        instance._init();
      } else {
        // initialize new instance
        instance = new PluginClass( elem, options );
        $.data( elem, namespace, instance );
      }
    });
  }

  updateJQuery( $ );

}

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
function updateJQuery( $ ) {
  if ( !$ || ( $ && $.bridget ) ) {
    return;
  }
  $.bridget = jQueryBridget;
}

updateJQuery( jQuery || window.jQuery );

// -----  ----- //

return jQueryBridget;

}));

/**
 * EvEmitter v1.0.3
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var i = 0;
  var listener = listeners[i];
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  while ( listener ) {
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
    // get next listener
    i += isOnce ? 0 : 1;
    listener = listeners[i];
  }

  return this;
};

return EvEmitter;

}));

/*!
 * getSize v2.0.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false, console: false */

( function( window, factory ) {
  'use strict';

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'get-size/get-size',[],function() {
      return factory();
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See http://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * WebKit measures the outer-width on style.width on border-box elems
   * IE & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );

  getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize( style.width ) == 200;
  body.removeChild( div );

}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});

/**
 * matchesSelector v2.0.1
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'desandro-matches-selector/matches-selector',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));

/**
 * Fizzy UI utils v2.0.2
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'fizzy-ui-utils/utils',[
      'desandro-matches-selector/matches-selector'
    ], function( matchesSelector ) {
      return factory( window, matchesSelector );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {



var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  var ary = [];
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( obj && typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0; i < obj.length; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    if ( timeout ) {
      clearTimeout( timeout );
    }
    var args = arguments;

    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold || 100 );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    callback();
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('layoutname')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));

/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/item',[
        'ev-emitter/ev-emitter',
        'get-size/get-size'
      ],
      factory
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      require('ev-emitter'),
      require('get-size')
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window.EvEmitter,
      window.getSize
    );
  }

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  // convert percent to pixels
  var layoutSize = this.layout.size;
  var x = xValue.indexOf('%') != -1 ?
    ( parseFloat( xValue ) / 100 ) * layoutSize.width : parseInt( xValue, 10 );
  var y = yValue.indexOf('%') != -1 ?
    ( parseFloat( yValue ) / 100 ) * layoutSize.height : parseInt( yValue, 10 );

  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var compareX = parseInt( x, 10 );
  var compareY = parseInt( y, 10 );
  var didNotMove = compareX === this.position.x && compareY === this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseInt( x, 10 );
  this.position.y = parseInt( y, 10 );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));

/*!
 * Outlayer v2.1.0
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/outlayer',[
        'ev-emitter/ev-emitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './item'
      ],
      function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));

/**
 * Isotope Item
**/

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope/js/item',[
        'outlayer/outlayer'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer')
    );
  } else {
    // browser global
    window.Isotope = window.Isotope || {};
    window.Isotope.Item = factory(
      window.Outlayer
    );
  }

}( window, function factory( Outlayer ) {
'use strict';

// -------------------------- Item -------------------------- //

// sub-class Outlayer Item
function Item() {
  Outlayer.Item.apply( this, arguments );
}

var proto = Item.prototype = Object.create( Outlayer.Item.prototype );

var _create = proto._create;
proto._create = function() {
  // assign id, used for original-order sorting
  this.id = this.layout.itemGUID++;
  _create.call( this );
  this.sortData = {};
};

proto.updateSortData = function() {
  if ( this.isIgnored ) {
    return;
  }
  // default sorters
  this.sortData.id = this.id;
  // for backward compatibility
  this.sortData['original-order'] = this.id;
  this.sortData.random = Math.random();
  // go thru getSortData obj and apply the sorters
  var getSortData = this.layout.options.getSortData;
  var sorters = this.layout._sorters;
  for ( var key in getSortData ) {
    var sorter = sorters[ key ];
    this.sortData[ key ] = sorter( this.element, this );
  }
};

var _destroy = proto.destroy;
proto.destroy = function() {
  // call super
  _destroy.apply( this, arguments );
  // reset display, #741
  this.css({
    display: ''
  });
};

return Item;

}));

/**
 * Isotope LayoutMode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope/js/layout-mode',[
        'get-size/get-size',
        'outlayer/outlayer'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('get-size'),
      require('outlayer')
    );
  } else {
    // browser global
    window.Isotope = window.Isotope || {};
    window.Isotope.LayoutMode = factory(
      window.getSize,
      window.Outlayer
    );
  }

}( window, function factory( getSize, Outlayer ) {
  'use strict';

  // layout mode class
  function LayoutMode( isotope ) {
    this.isotope = isotope;
    // link properties
    if ( isotope ) {
      this.options = isotope.options[ this.namespace ];
      this.element = isotope.element;
      this.items = isotope.filteredItems;
      this.size = isotope.size;
    }
  }

  var proto = LayoutMode.prototype;

  /**
   * some methods should just defer to default Outlayer method
   * and reference the Isotope instance as `this`
  **/
  var facadeMethods = [
    '_resetLayout',
    '_getItemLayoutPosition',
    '_manageStamp',
    '_getContainerSize',
    '_getElementOffset',
    'needsResizeLayout',
    '_getOption'
  ];

  facadeMethods.forEach( function( methodName ) {
    proto[ methodName ] = function() {
      return Outlayer.prototype[ methodName ].apply( this.isotope, arguments );
    };
  });

  // -----  ----- //

  // for horizontal layout modes, check vertical size
  proto.needsVerticalResizeLayout = function() {
    // don't trigger if size did not change
    var size = getSize( this.isotope.element );
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var hasSizes = this.isotope.size && size;
    return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
  };

  // ----- measurements ----- //

  proto._getMeasurement = function() {
    this.isotope._getMeasurement.apply( this, arguments );
  };

  proto.getColumnWidth = function() {
    this.getSegmentSize( 'column', 'Width' );
  };

  proto.getRowHeight = function() {
    this.getSegmentSize( 'row', 'Height' );
  };

  /**
   * get columnWidth or rowHeight
   * segment: 'column' or 'row'
   * size 'Width' or 'Height'
  **/
  proto.getSegmentSize = function( segment, size ) {
    var segmentName = segment + size;
    var outerSize = 'outer' + size;
    // columnWidth / outerWidth // rowHeight / outerHeight
    this._getMeasurement( segmentName, outerSize );
    // got rowHeight or columnWidth, we can chill
    if ( this[ segmentName ] ) {
      return;
    }
    // fall back to item of first element
    var firstItemSize = this.getFirstItemSize();
    this[ segmentName ] = firstItemSize && firstItemSize[ outerSize ] ||
      // or size of container
      this.isotope.size[ 'inner' + size ];
  };

  proto.getFirstItemSize = function() {
    var firstItem = this.isotope.filteredItems[0];
    return firstItem && firstItem.element && getSize( firstItem.element );
  };

  // ----- methods that should reference isotope ----- //

  proto.layout = function() {
    this.isotope.layout.apply( this.isotope, arguments );
  };

  proto.getSize = function() {
    this.isotope.getSize();
    this.size = this.isotope.size;
  };

  // -------------------------- create -------------------------- //

  LayoutMode.modes = {};

  LayoutMode.create = function( namespace, options ) {

    function Mode() {
      LayoutMode.apply( this, arguments );
    }

    Mode.prototype = Object.create( proto );
    Mode.prototype.constructor = Mode;

    // default options
    if ( options ) {
      Mode.options = options;
    }

    Mode.prototype.namespace = namespace;
    // register in Isotope
    LayoutMode.modes[ namespace ] = Mode;

    return Mode;
  };

  return LayoutMode;

}));

/*!
 * Masonry v4.1.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'masonry/masonry',[
        'outlayer/outlayer',
        'get-size/get-size'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size')
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize
    );
  }

}( window, function factory( Outlayer, getSize ) {



// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  Masonry.prototype._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
  };

  Masonry.prototype.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  Masonry.prototype.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  Masonry.prototype._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );

    var colGroup = this._getColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );
    var shortColIndex = colGroup.indexOf( minimumY );

    // position the brick
    var position = {
      x: this.columnWidth * shortColIndex,
      y: minimumY
    };

    // apply setHeight to necessary columns
    var setHeight = minimumY + item.size.outerHeight;
    var setSpan = this.cols + 1 - colGroup.length;
    for ( var i = 0; i < setSpan; i++ ) {
      this.colYs[ shortColIndex + i ] = setHeight;
    }

    return position;
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  Masonry.prototype._getColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      // make an array of colY values for that one group
      var groupColYs = this.colYs.slice( i, i + colSpan );
      // and get the max value of the array
      colGroup[i] = Math.max.apply( Math, groupColYs );
    }
    return colGroup;
  };

  Masonry.prototype._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  Masonry.prototype._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  Masonry.prototype._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  Masonry.prototype.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));

/*!
 * Masonry layout mode
 * sub-classes Masonry
 * http://masonry.desandro.com
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope/js/layout-modes/masonry',[
        '../layout-mode',
        'masonry/masonry'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode'),
      require('masonry-layout')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode,
      window.Masonry
    );
  }

}( window, function factory( LayoutMode, Masonry ) {
'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var MasonryMode = LayoutMode.create('masonry');

  var proto = MasonryMode.prototype;

  var keepModeMethods = {
    _getElementOffset: true,
    layout: true,
    _getMeasurement: true
  };

  // inherit Masonry prototype
  for ( var method in Masonry.prototype ) {
    // do not inherit mode methods
    if ( !keepModeMethods[ method ] ) {
      proto[ method ] = Masonry.prototype[ method ];
    }
  }

  var measureColumns = proto.measureColumns;
  proto.measureColumns = function() {
    // set items, used if measuring first item
    this.items = this.isotope.filteredItems;
    measureColumns.call( this );
  };

  // point to mode options for fitWidth
  var _getOption = proto._getOption;
  proto._getOption = function( option ) {
    if ( option == 'fitWidth' ) {
      return this.options.isFitWidth !== undefined ?
        this.options.isFitWidth : this.options.fitWidth;
    }
    return _getOption.apply( this.isotope, arguments );
  };

  return MasonryMode;

}));

/**
 * fitRows layout mode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope/js/layout-modes/fit-rows',[
        '../layout-mode'
      ],
      factory );
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( LayoutMode ) {
'use strict';

var FitRows = LayoutMode.create('fitRows');

var proto = FitRows.prototype;

proto._resetLayout = function() {
  this.x = 0;
  this.y = 0;
  this.maxY = 0;
  this._getMeasurement( 'gutter', 'outerWidth' );
};

proto._getItemLayoutPosition = function( item ) {
  item.getSize();

  var itemWidth = item.size.outerWidth + this.gutter;
  // if this element cannot fit in the current row
  var containerWidth = this.isotope.size.innerWidth + this.gutter;
  if ( this.x !== 0 && itemWidth + this.x > containerWidth ) {
    this.x = 0;
    this.y = this.maxY;
  }

  var position = {
    x: this.x,
    y: this.y
  };

  this.maxY = Math.max( this.maxY, this.y + item.size.outerHeight );
  this.x += itemWidth;

  return position;
};

proto._getContainerSize = function() {
  return { height: this.maxY };
};

return FitRows;

}));

/**
 * vertical layout mode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope/js/layout-modes/vertical',[
        '../layout-mode'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( LayoutMode ) {
'use strict';

var Vertical = LayoutMode.create( 'vertical', {
  horizontalAlignment: 0
});

var proto = Vertical.prototype;

proto._resetLayout = function() {
  this.y = 0;
};

proto._getItemLayoutPosition = function( item ) {
  item.getSize();
  var x = ( this.isotope.size.innerWidth - item.size.outerWidth ) *
    this.options.horizontalAlignment;
  var y = this.y;
  this.y += item.size.outerHeight;
  return { x: x, y: y };
};

proto._getContainerSize = function() {
  return { height: this.y };
};

return Vertical;

}));

/*!
 * Isotope v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        'outlayer/outlayer',
        'get-size/get-size',
        'desandro-matches-selector/matches-selector',
        'fizzy-ui-utils/utils',
        'isotope/js/item',
        'isotope/js/layout-mode',
        // include default layout modes
        'isotope/js/layout-modes/masonry',
        'isotope/js/layout-modes/fit-rows',
        'isotope/js/layout-modes/vertical'
      ],
      function( Outlayer, getSize, matchesSelector, utils, Item, LayoutMode ) {
        return factory( window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode );
      });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('outlayer'),
      require('get-size'),
      require('desandro-matches-selector'),
      require('fizzy-ui-utils'),
      require('isotope/js/item'),
      require('isotope/js/layout-mode'),
      // include default layout modes
      require('isotope/js/layout-modes/masonry'),
      require('isotope/js/layout-modes/fit-rows'),
      require('isotope/js/layout-modes/vertical')
    );
  } else {
    // browser global
    window.Isotope = factory(
      window,
      window.Outlayer,
      window.getSize,
      window.matchesSelector,
      window.fizzyUIUtils,
      window.Isotope.Item,
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( window, Outlayer, getSize, matchesSelector, utils,
  Item, LayoutMode ) {



// -------------------------- vars -------------------------- //

var jQuery = window.jQuery;

// -------------------------- helpers -------------------------- //

var trim = String.prototype.trim ?
  function( str ) {
    return str.trim();
  } :
  function( str ) {
    return str.replace( /^\s+|\s+$/g, '' );
  };

// -------------------------- isotopeDefinition -------------------------- //

  // create an Outlayer layout class
  var Isotope = Outlayer.create( 'isotope', {
    layoutMode: 'masonry',
    isJQueryFiltering: true,
    sortAscending: true
  });

  Isotope.Item = Item;
  Isotope.LayoutMode = LayoutMode;

  var proto = Isotope.prototype;

  proto._create = function() {
    this.itemGUID = 0;
    // functions that sort items
    this._sorters = {};
    this._getSorters();
    // call super
    Outlayer.prototype._create.call( this );

    // create layout modes
    this.modes = {};
    // start filteredItems with all items
    this.filteredItems = this.items;
    // keep of track of sortBys
    this.sortHistory = [ 'original-order' ];
    // create from registered layout modes
    for ( var name in LayoutMode.modes ) {
      this._initLayoutMode( name );
    }
  };

  proto.reloadItems = function() {
    // reset item ID counter
    this.itemGUID = 0;
    // call super
    Outlayer.prototype.reloadItems.call( this );
  };

  proto._itemize = function() {
    var items = Outlayer.prototype._itemize.apply( this, arguments );
    // assign ID for original-order
    for ( var i=0; i < items.length; i++ ) {
      var item = items[i];
      item.id = this.itemGUID++;
    }
    this._updateItemsSortData( items );
    return items;
  };


  // -------------------------- layout -------------------------- //

  proto._initLayoutMode = function( name ) {
    var Mode = LayoutMode.modes[ name ];
    // set mode options
    // HACK extend initial options, back-fill in default options
    var initialOpts = this.options[ name ] || {};
    this.options[ name ] = Mode.options ?
      utils.extend( Mode.options, initialOpts ) : initialOpts;
    // init layout mode instance
    this.modes[ name ] = new Mode( this );
  };


  proto.layout = function() {
    // if first time doing layout, do all magic
    if ( !this._isLayoutInited && this._getOption('initLayout') ) {
      this.arrange();
      return;
    }
    this._layout();
  };

  // private method to be used in layout() & magic()
  proto._layout = function() {
    // don't animate first layout
    var isInstant = this._getIsInstant();
    // layout flow
    this._resetLayout();
    this._manageStamps();
    this.layoutItems( this.filteredItems, isInstant );

    // flag for initalized
    this._isLayoutInited = true;
  };

  // filter + sort + layout
  proto.arrange = function( opts ) {
    // set any options pass
    this.option( opts );
    this._getIsInstant();
    // filter, sort, and layout

    // filter
    var filtered = this._filter( this.items );
    this.filteredItems = filtered.matches;

    this._bindArrangeComplete();

    if ( this._isInstant ) {
      this._noTransition( this._hideReveal, [ filtered ] );
    } else {
      this._hideReveal( filtered );
    }

    this._sort();
    this._layout();
  };
  // alias to _init for main plugin method
  proto._init = proto.arrange;

  proto._hideReveal = function( filtered ) {
    this.reveal( filtered.needReveal );
    this.hide( filtered.needHide );
  };

  // HACK
  // Don't animate/transition first layout
  // Or don't animate/transition other layouts
  proto._getIsInstant = function() {
    var isLayoutInstant = this._getOption('layoutInstant');
    var isInstant = isLayoutInstant !== undefined ? isLayoutInstant :
      !this._isLayoutInited;
    this._isInstant = isInstant;
    return isInstant;
  };

  // listen for layoutComplete, hideComplete and revealComplete
  // to trigger arrangeComplete
  proto._bindArrangeComplete = function() {
    // listen for 3 events to trigger arrangeComplete
    var isLayoutComplete, isHideComplete, isRevealComplete;
    var _this = this;
    function arrangeParallelCallback() {
      if ( isLayoutComplete && isHideComplete && isRevealComplete ) {
        _this.dispatchEvent( 'arrangeComplete', null, [ _this.filteredItems ] );
      }
    }
    this.once( 'layoutComplete', function() {
      isLayoutComplete = true;
      arrangeParallelCallback();
    });
    this.once( 'hideComplete', function() {
      isHideComplete = true;
      arrangeParallelCallback();
    });
    this.once( 'revealComplete', function() {
      isRevealComplete = true;
      arrangeParallelCallback();
    });
  };

  // -------------------------- filter -------------------------- //

  proto._filter = function( items ) {
    var filter = this.options.filter;
    filter = filter || '*';
    var matches = [];
    var hiddenMatched = [];
    var visibleUnmatched = [];

    var test = this._getFilterTest( filter );

    // test each item
    for ( var i=0; i < items.length; i++ ) {
      var item = items[i];
      if ( item.isIgnored ) {
        continue;
      }
      // add item to either matched or unmatched group
      var isMatched = test( item );
      // item.isFilterMatched = isMatched;
      // add to matches if its a match
      if ( isMatched ) {
        matches.push( item );
      }
      // add to additional group if item needs to be hidden or revealed
      if ( isMatched && item.isHidden ) {
        hiddenMatched.push( item );
      } else if ( !isMatched && !item.isHidden ) {
        visibleUnmatched.push( item );
      }
    }

    // return collections of items to be manipulated
    return {
      matches: matches,
      needReveal: hiddenMatched,
      needHide: visibleUnmatched
    };
  };

  // get a jQuery, function, or a matchesSelector test given the filter
  proto._getFilterTest = function( filter ) {
    if ( jQuery && this.options.isJQueryFiltering ) {
      // use jQuery
      return function( item ) {
        return jQuery( item.element ).is( filter );
      };
    }
    if ( typeof filter == 'function' ) {
      // use filter as function
      return function( item ) {
        return filter( item.element );
      };
    }
    // default, use filter as selector string
    return function( item ) {
      return matchesSelector( item.element, filter );
    };
  };

  // -------------------------- sorting -------------------------- //

  /**
   * @params {Array} elems
   * @public
   */
  proto.updateSortData = function( elems ) {
    // get items
    var items;
    if ( elems ) {
      elems = utils.makeArray( elems );
      items = this.getItems( elems );
    } else {
      // update all items if no elems provided
      items = this.items;
    }

    this._getSorters();
    this._updateItemsSortData( items );
  };

  proto._getSorters = function() {
    var getSortData = this.options.getSortData;
    for ( var key in getSortData ) {
      var sorter = getSortData[ key ];
      this._sorters[ key ] = mungeSorter( sorter );
    }
  };

  /**
   * @params {Array} items - of Isotope.Items
   * @private
   */
  proto._updateItemsSortData = function( items ) {
    // do not update if no items
    var len = items && items.length;

    for ( var i=0; len && i < len; i++ ) {
      var item = items[i];
      item.updateSortData();
    }
  };

  // ----- munge sorter ----- //

  // encapsulate this, as we just need mungeSorter
  // other functions in here are just for munging
  var mungeSorter = ( function() {
    // add a magic layer to sorters for convienent shorthands
    // `.foo-bar` will use the text of .foo-bar querySelector
    // `[foo-bar]` will use attribute
    // you can also add parser
    // `.foo-bar parseInt` will parse that as a number
    function mungeSorter( sorter ) {
      // if not a string, return function or whatever it is
      if ( typeof sorter != 'string' ) {
        return sorter;
      }
      // parse the sorter string
      var args = trim( sorter ).split(' ');
      var query = args[0];
      // check if query looks like [an-attribute]
      var attrMatch = query.match( /^\[(.+)\]$/ );
      var attr = attrMatch && attrMatch[1];
      var getValue = getValueGetter( attr, query );
      // use second argument as a parser
      var parser = Isotope.sortDataParsers[ args[1] ];
      // parse the value, if there was a parser
      sorter = parser ? function( elem ) {
        return elem && parser( getValue( elem ) );
      } :
      // otherwise just return value
      function( elem ) {
        return elem && getValue( elem );
      };

      return sorter;
    }

    // get an attribute getter, or get text of the querySelector
    function getValueGetter( attr, query ) {
      // if query looks like [foo-bar], get attribute
      if ( attr ) {
        return function getAttribute( elem ) {
          return elem.getAttribute( attr );
        };
      }

      // otherwise, assume its a querySelector, and get its text
      return function getChildText( elem ) {
        var child = elem.querySelector( query );
        return child && child.textContent;
      };
    }

    return mungeSorter;
  })();

  // parsers used in getSortData shortcut strings
  Isotope.sortDataParsers = {
    'parseInt': function( val ) {
      return parseInt( val, 10 );
    },
    'parseFloat': function( val ) {
      return parseFloat( val );
    }
  };

  // ----- sort method ----- //

  // sort filteredItem order
  proto._sort = function() {
    var sortByOpt = this.options.sortBy;
    if ( !sortByOpt ) {
      return;
    }
    // concat all sortBy and sortHistory
    var sortBys = [].concat.apply( sortByOpt, this.sortHistory );
    // sort magic
    var itemSorter = getItemSorter( sortBys, this.options.sortAscending );
    this.filteredItems.sort( itemSorter );
    // keep track of sortBy History
    if ( sortByOpt != this.sortHistory[0] ) {
      // add to front, oldest goes in last
      this.sortHistory.unshift( sortByOpt );
    }
  };

  // returns a function used for sorting
  function getItemSorter( sortBys, sortAsc ) {
    return function sorter( itemA, itemB ) {
      // cycle through all sortKeys
      for ( var i = 0; i < sortBys.length; i++ ) {
        var sortBy = sortBys[i];
        var a = itemA.sortData[ sortBy ];
        var b = itemB.sortData[ sortBy ];
        if ( a > b || a < b ) {
          // if sortAsc is an object, use the value given the sortBy key
          var isAscending = sortAsc[ sortBy ] !== undefined ? sortAsc[ sortBy ] : sortAsc;
          var direction = isAscending ? 1 : -1;
          return ( a > b ? 1 : -1 ) * direction;
        }
      }
      return 0;
    };
  }

  // -------------------------- methods -------------------------- //

  // get layout mode
  proto._mode = function() {
    var layoutMode = this.options.layoutMode;
    var mode = this.modes[ layoutMode ];
    if ( !mode ) {
      // TODO console.error
      throw new Error( 'No layout mode: ' + layoutMode );
    }
    // HACK sync mode's options
    // any options set after init for layout mode need to be synced
    mode.options = this.options[ layoutMode ];
    return mode;
  };

  proto._resetLayout = function() {
    // trigger original reset layout
    Outlayer.prototype._resetLayout.call( this );
    this._mode()._resetLayout();
  };

  proto._getItemLayoutPosition = function( item  ) {
    return this._mode()._getItemLayoutPosition( item );
  };

  proto._manageStamp = function( stamp ) {
    this._mode()._manageStamp( stamp );
  };

  proto._getContainerSize = function() {
    return this._mode()._getContainerSize();
  };

  proto.needsResizeLayout = function() {
    return this._mode().needsResizeLayout();
  };

  // -------------------------- adding & removing -------------------------- //

  // HEADS UP overwrites default Outlayer appended
  proto.appended = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    // filter, layout, reveal new items
    var filteredItems = this._filterRevealAdded( items );
    // add to filteredItems
    this.filteredItems = this.filteredItems.concat( filteredItems );
  };

  // HEADS UP overwrites default Outlayer prepended
  proto.prepended = function( elems ) {
    var items = this._itemize( elems );
    if ( !items.length ) {
      return;
    }
    // start new layout
    this._resetLayout();
    this._manageStamps();
    // filter, layout, reveal new items
    var filteredItems = this._filterRevealAdded( items );
    // layout previous items
    this.layoutItems( this.filteredItems );
    // add to items and filteredItems
    this.filteredItems = filteredItems.concat( this.filteredItems );
    this.items = items.concat( this.items );
  };

  proto._filterRevealAdded = function( items ) {
    var filtered = this._filter( items );
    this.hide( filtered.needHide );
    // reveal all new items
    this.reveal( filtered.matches );
    // layout new items, no transition
    this.layoutItems( filtered.matches, true );
    return filtered.matches;
  };

  /**
   * Filter, sort, and layout newly-appended item elements
   * @param {Array or NodeList or Element} elems
   */
  proto.insert = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    // append item elements
    var i, item;
    var len = items.length;
    for ( i=0; i < len; i++ ) {
      item = items[i];
      this.element.appendChild( item.element );
    }
    // filter new stuff
    var filteredInsertItems = this._filter( items ).matches;
    // set flag
    for ( i=0; i < len; i++ ) {
      items[i].isLayoutInstant = true;
    }
    this.arrange();
    // reset flag
    for ( i=0; i < len; i++ ) {
      delete items[i].isLayoutInstant;
    }
    this.reveal( filteredInsertItems );
  };

  var _remove = proto.remove;
  proto.remove = function( elems ) {
    elems = utils.makeArray( elems );
    var removeItems = this.getItems( elems );
    // do regular thing
    _remove.call( this, elems );
    // bail if no items to remove
    var len = removeItems && removeItems.length;
    // remove elems from filteredItems
    for ( var i=0; len && i < len; i++ ) {
      var item = removeItems[i];
      // remove item from collection
      utils.removeFrom( this.filteredItems, item );
    }
  };

  proto.shuffle = function() {
    // update random sortData
    for ( var i=0; i < this.items.length; i++ ) {
      var item = this.items[i];
      item.sortData.random = Math.random();
    }
    this.options.sortBy = 'random';
    this._sort();
    this._layout();
  };

  /**
   * trigger fn without transition
   * kind of hacky to have this in the first place
   * @param {Function} fn
   * @param {Array} args
   * @returns ret
   * @private
   */
  proto._noTransition = function( fn, args ) {
    // save transitionDuration before disabling
    var transitionDuration = this.options.transitionDuration;
    // disable transition
    this.options.transitionDuration = 0;
    // do it
    var returnValue = fn.apply( this, args );
    // re-enable transition for reveal
    this.options.transitionDuration = transitionDuration;
    return returnValue;
  };

  // ----- helper methods ----- //

  /**
   * getter method for getting filtered item elements
   * @returns {Array} elems - collection of item elements
   */
  proto.getFilteredItemElements = function() {
    return this.filteredItems.map( function( item ) {
      return item.element;
    });
  };

  // -----  ----- //

  return Isotope;

}));

/*!
 * masonryHorizontal layout mode for Isotope
 * v2.0.0
 * http://isotope.metafizzy.co/layout-modes/masonryhorizontal.html
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  'use strict';
  // universal module definition
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( [
        'get-size/get-size',
        'isotope/js/layout-mode'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('get-size'),
      require('isotope-layout/js/layout-mode')
    );
  } else {
    // browser global
    factory(
      window.getSize,
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( getSize, LayoutMode ) {
'use strict';

// -------------------------- definition -------------------------- //

  // create an Outlayer layout class
  var MasonryHorizontal = LayoutMode.create('masonryHorizontal');
  var proto = MasonryHorizontal.prototype;

  proto._resetLayout = function() {
    this.getRowHeight();
    this._getMeasurement( 'gutter', 'outerHeight' );

    this.rowHeight += this.gutter;
    // measure rows
    this.rows = Math.floor( ( this.isotope.size.innerHeight + this.gutter ) / this.rowHeight );
    this.rows = Math.max( this.rows, 1 );

    // reset row Xs
    var i = this.rows;
    this.rowXs = [];
    while (i--) {
      this.rowXs.push( 0 );
    }

    this.maxX = 0;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many rows does this brick span
    var remainder = item.size.outerHeight % this.rowHeight;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var rowSpan = Math[ mathMethod ]( item.size.outerHeight / this.rowHeight );
    rowSpan = Math.min( rowSpan, this.rows );

    var rowGroup = this._getRowGroup( rowSpan );
    // get the minimum X value from the rows
    var minimumX = Math.min.apply( Math, rowGroup );
    var shortRowIndex = rowGroup.indexOf( minimumX );

    // position the brick
    var position = {
      x: minimumX,
      y: this.rowHeight * shortRowIndex
    };

    // apply setHeight to necessary rows
    var setWidth = minimumX + item.size.outerWidth;
    var setSpan = this.rows + 1 - rowGroup.length;
    for ( var i = 0; i < setSpan; i++ ) {
      this.rowXs[ shortRowIndex + i ] = setWidth;
    }

    return position;
  };

  /**
   * @param {Number} rowSpan - number of rows the element spans
   * @returns {Array} rowGroup
   */
  proto._getRowGroup = function( rowSpan ) {
    if ( rowSpan < 2 ) {
      // if brick spans only one row, use all the row Xs
      return this.rowXs;
    }

    var rowGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.rows + 1 - rowSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      // make an array of rowX values for that one group
      var groupRowXs = this.rowXs.slice( i, i + rowSpan );
      // and get the max value of the array
      rowGroup[i] = Math.max.apply( Math, groupRowXs );
    }
    return rowGroup;
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this.isotope._getElementOffset( stamp );
    // get the rows that this stamp affects
    var firstY = this._getOption('originTop') ? offset.top : offset.bottom;
    var lastY = firstY + stampSize.outerHeight;
    var firstRow = Math.floor( firstY / this.rowHeight );
    firstRow = Math.max( 0, firstRow );
    var lastRow = Math.floor( lastY / this.rowHeight );
    lastRow = Math.min( this.rows - 1, lastRow );
    // set rowXs to outside edge of the stamp
    var stampMaxX = ( this._getOption('originLeft') ? offset.left : offset.right ) +
      stampSize.outerWidth;
    for ( var i = firstRow; i <= lastRow; i++ ) {
      this.rowXs[i] = Math.max( stampMaxX, this.rowXs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxX = Math.max.apply( Math, this.rowXs );

    return {
      width: this.maxX
    };
  };

  proto.needsResizeLayout = function() {
    return this.needsVerticalResizeLayout();
  };

  return MasonryHorizontal;

}));
;/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

/**
 * EvEmitter v1.0.3
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var i = 0;
  var listener = listeners[i];
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  while ( listener ) {
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
    // get next listener
    i += isOnce ? 0 : 1;
    listener = listeners[i];
  }

  return this;
};

return EvEmitter;

}));

/*!
 * imagesLoaded v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EvEmitter
    );
  }

})( window,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {



var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0; i < obj.length; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  if ( typeof elem == 'string' ) {
    elem = document.querySelectorAll( elem );
  }

  this.elements = makeArray( elem );
  this.options = extend( {}, this.options );

  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( function() {
    this.check();
  }.bind( this ));
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  return this.img.complete && this.img.naturalWidth !== undefined;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});

;/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.YTPlayer.src.js                                                                                                                  _
 _ last modified: 05/01/16 17.43                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2016. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/
var ytp = ytp || {};

function onYouTubeIframeAPIReady() {
	if( ytp.YTAPIReady ) return;
	ytp.YTAPIReady = true;
	jQuery( document ).trigger( "YTAPIReady" );
}

var getYTPVideoID = function( url ) {
	var videoID, playlistID;
	if( url.indexOf( "youtu.be" ) > 0 ) {
		videoID = url.substr( url.lastIndexOf( "/" ) + 1, url.length );
		playlistID = videoID.indexOf( "?list=" ) > 0 ? videoID.substr( videoID.lastIndexOf( "=" ), videoID.length ) : null;
		videoID = playlistID ? videoID.substr( 0, videoID.lastIndexOf( "?" ) ) : videoID;
	} else if( url.indexOf( "http" ) > -1 ) {
		//videoID = url.match( /([\/&]v\/([^&#]*))|([\\?&]v=([^&#]*))/ )[ 1 ];
		videoID = url.match( /[\\?&]v=([^&#]*)/ )[ 1 ];
		playlistID = url.indexOf( "list=" ) > 0 ? url.match( /[\\?&]list=([^&#]*)/ )[ 1 ] : null;
	} else {
		videoID = url.length > 15 ? null : url;
		playlistID = videoID ? null : url;
	}
	return {
		videoID: videoID,
		playlistID: playlistID
	};
};

( function( jQuery, ytp ) {

	jQuery.mbYTPlayer = {
		name: "jquery.mb.YTPlayer",
		version: "3.0.10",
		build: "6057",
		author: "Matteo Bicocchi",
		apiKey: "",
		defaults: {
			containment: "body",
			ratio: "auto", // "auto", "16/9", "4/3"
			videoURL: null,
			playlistURL: null,
			startAt: 0,
			stopAt: 0,
			autoPlay: true,
			vol: 50, // 1 to 100
			addRaster: false,
			mask: false,
			opacity: 1,
			quality: "default", //or “small”, “medium”, “large”, “hd720”, “hd1080”, “highres”
			mute: false,
			loop: true,
			showControls: true,
			showAnnotations: false,
			showYTLogo: true,
			stopMovieOnBlur: true,
			realfullscreen: true,
			mobileFallbackImage: null,
			gaTrack: true,
			optimizeDisplay: true,
			align: "center,center", // top,bottom,left,right
			onReady: function( player ) {}
		},
		/**
		 *  @fontface icons
		 *  */
		controls: {
			play: "P",
			pause: "p",
			mute: "M",
			unmute: "A",
			onlyYT: "O",
			showSite: "R",
			ytLogo: "Y"
		},
		controlBar: null,
		loading: null,
		locationProtocol: "https:",
		filters: {
			grayscale: {
				value: 0,
				unit: "%"
			},
			hue_rotate: {
				value: 0,
				unit: "deg"
			},
			invert: {
				value: 0,
				unit: "%"
			},
			opacity: {
				value: 0,
				unit: "%"
			},
			saturate: {
				value: 0,
				unit: "%"
			},
			sepia: {
				value: 0,
				unit: "%"
			},
			brightness: {
				value: 0,
				unit: "%"
			},
			contrast: {
				value: 0,
				unit: "%"
			},
			blur: {
				value: 0,
				unit: "px"
			}
		},
		/**
		 *
		 * @param options
		 * @returns [players]
		 */
		buildPlayer: function( options ) {
			return this.each( function() {
				var YTPlayer = this;
				var $YTPlayer = jQuery( YTPlayer );
				YTPlayer.loop = 0;
				YTPlayer.opt = {};
				YTPlayer.state = {};
				YTPlayer.filters = jQuery.mbYTPlayer.filters;
				YTPlayer.filtersEnabled = true;
				YTPlayer.id = YTPlayer.id || "YTP_" + new Date().getTime();
				$YTPlayer.addClass( "mb_YTPlayer" );
				var property = $YTPlayer.data( "property" ) && typeof $YTPlayer.data( "property" ) == "string" ? eval( '(' + $YTPlayer.data( "property" ) + ')' ) : $YTPlayer.data( "property" );
				if( typeof property != "undefined" && typeof property.vol != "undefined" ) property.vol = property.vol === 0 ? property.vol = 1 : property.vol;

				jQuery.extend( YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property );

				if( !YTPlayer.hasChanged ) {
					YTPlayer.defaultOpt = {};
					jQuery.extend( YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options );
				}

				if( YTPlayer.opt.loop == "true" )
					YTPlayer.opt.loop = 9999;

				YTPlayer.isRetina = ( window.retina || window.devicePixelRatio > 1 );
				var isIframe = function() {
					var isIfr = false;
					try {
						if( self.location.href != top.location.href ) isIfr = true;
					} catch( e ) {
						isIfr = true;
					}
					return isIfr;
				};
				YTPlayer.canGoFullScreen = !( jQuery.browser.msie || jQuery.browser.opera || isIframe() );
				if( !YTPlayer.canGoFullScreen ) YTPlayer.opt.realfullscreen = false;
				if( !$YTPlayer.attr( "id" ) ) $YTPlayer.attr( "id", "video_" + new Date().getTime() );
				var playerID = "mbYTP_" + YTPlayer.id;
				YTPlayer.isAlone = false;
				YTPlayer.hasFocus = true;
				YTPlayer.videoID = this.opt.videoURL ? getYTPVideoID( this.opt.videoURL ).videoID : $YTPlayer.attr( "href" ) ? getYTPVideoID( $YTPlayer.attr( "href" ) ).videoID : false;
				YTPlayer.playlistID = this.opt.videoURL ? getYTPVideoID( this.opt.videoURL ).playlistID : $YTPlayer.attr( "href" ) ? getYTPVideoID( $YTPlayer.attr( "href" ) ).playlistID : false;
				/*
				 YTPlayer.videoID = videoID;
				 YTPlayer.playlistID = playlistID;
				 */
				YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? '0' : '3';

				var playerVars = {
					'modestbranding': 1,
					'autoplay': 0,
					'controls': 0,
					'showinfo': 0,
					'rel': 0,
					'enablejsapi': 1,
					'version': 3,
					'playerapiid': playerID,
					'origin': '*',
					'allowfullscreen': true,
					'wmode': 'transparent',
					'iv_load_policy': YTPlayer.opt.showAnnotations
				};

				if( document.createElement( 'video' ).canPlayType ) jQuery.extend( playerVars, {
					'html5': 1
				} );
				if( jQuery.browser.msie && jQuery.browser.version < 9 ) this.opt.opacity = 1;

				YTPlayer.isSelf = YTPlayer.opt.containment == "self";
				YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = YTPlayer.opt.containment == "self" ? jQuery( this ) : jQuery( YTPlayer.opt.containment );
				YTPlayer.isBackground = YTPlayer.opt.containment.is( "body" );

				if( YTPlayer.isBackground && ytp.backgroundIsInited )
					return;

				var isPlayer = YTPlayer.opt.containment.is( jQuery( this ) );

				YTPlayer.canPlayOnMobile = isPlayer && jQuery( this ).children().length === 0;
				YTPlayer.isPlayer = false;

				if( !isPlayer ) {
					$YTPlayer.hide();
				} else {
					YTPlayer.isPlayer = true;
				}

				var overlay = jQuery( "<div/>" ).css( {
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%"
				} ).addClass( "YTPOverlay" );

				if( YTPlayer.isPlayer ) {
					overlay.on( "click", function() {
						$YTPlayer.YTPTogglePlay();
					} )
				}

				var wrapper = jQuery( "<div/>" ).addClass( "mbYTP_wrapper" ).attr( "id", "wrapper_" + playerID );
				wrapper.css( {
					position: "absolute",
					zIndex: 0,
					minWidth: "100%",
					minHeight: "100%",
					left: 0,
					top: 0,
					overflow: "hidden",
					opacity: 0
				} );

				var playerBox = jQuery( "<div/>" ).attr( "id", playerID ).addClass( "playerBox" );
				playerBox.css( {
					position: "absolute",
					zIndex: 0,
					width: "100%",
					height: "100%",
					top: 0,
					left: 0,
					overflow: "hidden"
				} );

				wrapper.append( playerBox );

				YTPlayer.opt.containment.children().not( "script, style" ).each( function() {
					if( jQuery( this ).css( "position" ) == "static" ) jQuery( this ).css( "position", "relative" );
				} );
				if( YTPlayer.isBackground ) {
					jQuery( "body" ).css( {
						boxSizing: "border-box"
					} );

					wrapper.css( {
						position: "fixed",
						top: 0,
						left: 0,
						zIndex: 0
					} );

					$YTPlayer.hide();

				} else if( YTPlayer.opt.containment.css( "position" ) == "static" )
					YTPlayer.opt.containment.css( {
						position: "relative"
					} );

				YTPlayer.opt.containment.prepend( wrapper );
				YTPlayer.wrapper = wrapper;

				playerBox.css( {
					opacity: 1
				} );

				if( !jQuery.browser.mobile ) {
					playerBox.after( overlay );
					YTPlayer.overlay = overlay;
				}

				if( !YTPlayer.isBackground ) {
					overlay.on( "mouseenter", function() {
						if( YTPlayer.controlBar.length )
							YTPlayer.controlBar.addClass( "visible" );
					} ).on( "mouseleave", function() {
						if( YTPlayer.controlBar.length )
							YTPlayer.controlBar.removeClass( "visible" );
					} );
				}

				if( !ytp.YTAPIReady ) {
					jQuery( "#YTAPI" ).remove();
					var tag = jQuery( "<script></script>" ).attr( {
						"src": jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
						"id": "YTAPI"
					} );
					jQuery( "head" ).prepend( tag );
				} else {
					setTimeout( function() {
						jQuery( document ).trigger( "YTAPIReady" );
					}, 100 )
				}

				if( jQuery.browser.mobile && !YTPlayer.canPlayOnMobile ) {

					if( YTPlayer.opt.mobileFallbackImage ) {
						YTPlayer.opt.containment.css( {
							backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
							backgroundPosition: "center center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat"
						} )
					};

					$YTPlayer.remove();
					jQuery( document ).trigger( "YTPUnavailable" );
					return;
				}

				jQuery( document ).on( "YTAPIReady", function() {
					if( ( YTPlayer.isBackground && ytp.backgroundIsInited ) || YTPlayer.isInit ) return;
					if( YTPlayer.isBackground ) {
						ytp.backgroundIsInited = true;
					}

					YTPlayer.opt.autoPlay = typeof YTPlayer.opt.autoPlay == "undefined" ? ( YTPlayer.isBackground ? true : false ) : YTPlayer.opt.autoPlay;
					YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100;
					jQuery.mbYTPlayer.getDataFromAPI( YTPlayer );
					jQuery( YTPlayer ).on( "YTPChanged", function() {

						if( YTPlayer.isInit )
							return;

						YTPlayer.isInit = true;

						//if is mobile && isPlayer fallback to the default YT player
						if( jQuery.browser.mobile && YTPlayer.canPlayOnMobile ) {
							// Try to adjust the player dimention
							if( YTPlayer.opt.containment.outerWidth() > jQuery( window ).width() ) {
								YTPlayer.opt.containment.css( {
									maxWidth: "100%"
								} );
								var h = YTPlayer.opt.containment.outerWidth() * .563;
								YTPlayer.opt.containment.css( {
									maxHeight: h
								} );
							}
							new YT.Player( playerID, {
								videoId: YTPlayer.videoID.toString(),
								width: '100%',
								height: h,
								playerVars: playerVars,
								events: {
									'onReady': function( event ) {
										YTPlayer.player = event.target;
										playerBox.css( {
											opacity: 1
										} );
										YTPlayer.wrapper.css( {
											opacity: 1
										} );
									}
								}
							} );
							return;
						}

						new YT.Player( playerID, {
							videoId: YTPlayer.videoID.toString(),
							playerVars: playerVars,
							events: {
								'onReady': function( event ) {
									YTPlayer.player = event.target;
									if( YTPlayer.isReady ) return;
									YTPlayer.isReady = YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ? false : true;
									YTPlayer.playerEl = YTPlayer.player.getIframe();

									jQuery( YTPlayer.playerEl ).unselectable();

									$YTPlayer.optimizeDisplay();
									jQuery( window ).off( "resize.YTP_" + YTPlayer.id ).on( "resize.YTP_" + YTPlayer.id, function() {
										$YTPlayer.optimizeDisplay();
									} );

									jQuery.mbYTPlayer.checkForState( YTPlayer );
								},
								/**
								 *
								 * @param event
								 *
								 * -1 (unstarted)
								 * 0 (ended)
								 * 1 (playing)
								 * 2 (paused)
								 * 3 (buffering)
								 * 5 (video cued).
								 *
								 *
								 */
								'onStateChange': function( event ) {
									if( typeof event.target.getPlayerState != "function" ) return;
									var state = event.target.getPlayerState();

									if( YTPlayer.preventTrigger ) {
										YTPlayer.preventTrigger = false;
										return
									}

									/*
									 if( YTPlayer.state == state )
									 return;
									 */

									YTPlayer.state = state;

									var eventType;
									switch( state ) {
										case -1: //----------------------------------------------- unstarted
											eventType = "YTPUnstarted";
											break;
										case 0: //------------------------------------------------ ended
											eventType = "YTPEnd";
											break;
										case 1: //------------------------------------------------ play
											eventType = "YTPPlay";
											if( YTPlayer.controlBar.length )
												YTPlayer.controlBar.find( ".mb_YTPPlaypause" ).html( jQuery.mbYTPlayer.controls.pause );
											if( typeof _gaq != "undefined" && eval( YTPlayer.opt.gaTrack ) ) _gaq.push( [ '_trackEvent', 'YTPlayer', 'Play', ( YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString() ) ] );
											if( typeof ga != "undefined" && eval( YTPlayer.opt.gaTrack ) ) ga( 'send', 'event', 'YTPlayer', 'play', ( YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString() ) );
											break;
										case 2: //------------------------------------------------ pause
											eventType = "YTPPause";
											if( YTPlayer.controlBar.length )
												YTPlayer.controlBar.find( ".mb_YTPPlaypause" ).html( jQuery.mbYTPlayer.controls.play );
											break;
										case 3: //------------------------------------------------ buffer
											YTPlayer.player.setPlaybackQuality( YTPlayer.opt.quality );
											eventType = "YTPBuffering";
											if( YTPlayer.controlBar.length )
												YTPlayer.controlBar.find( ".mb_YTPPlaypause" ).html( jQuery.mbYTPlayer.controls.play );
											break;
										case 5: //------------------------------------------------ cued
											eventType = "YTPCued";
											break;
										default:
											break;
									}

									// Trigger state events
									var YTPEvent = jQuery.Event( eventType );
									YTPEvent.time = YTPlayer.currentTime;
									if( YTPlayer.canTrigger ) jQuery( YTPlayer ).trigger( YTPEvent );
								},
								/**
								 *
								 * @param e
								 */
								'onPlaybackQualityChange': function( e ) {
									var quality = e.target.getPlaybackQuality();
									var YTPQualityChange = jQuery.Event( "YTPQualityChange" );
									YTPQualityChange.quality = quality;
									jQuery( YTPlayer ).trigger( YTPQualityChange );
								},
								/**
								 *
								 * @param err
								 */
								'onError': function( err ) {

									if( err.data == 150 ) {
										console.log( "Embedding this video is restricted by Youtube." );
										if( YTPlayer.isPlayList ) jQuery( YTPlayer ).playNext();
									}

									if( err.data == 2 && YTPlayer.isPlayList )
										jQuery( YTPlayer ).playNext();

									if( typeof YTPlayer.opt.onError == "function" )
										YTPlayer.opt.onError( $YTPlayer, err );
								}
							}
						} );
					} );
				} );

				$YTPlayer.off( "YTPTime.mask" );

				jQuery.mbYTPlayer.applyMask( YTPlayer );

			} );
		},
		/**
		 *
		 * @param YTPlayer
		 */
		getDataFromAPI: function( YTPlayer ) {
			YTPlayer.videoData = jQuery.mbStorage.get( "YTPlayer_data_" + YTPlayer.videoID );
			jQuery( YTPlayer ).off( "YTPData.YTPlayer" ).on( "YTPData.YTPlayer", function() {
				if( YTPlayer.hasData ) {

					if( YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ) {
						var bgndURL = YTPlayer.videoData.thumb_max || YTPlayer.videoData.thumb_high || YTPlayer.videoData.thumb_medium;
						YTPlayer.opt.containment.css( {
							background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center",
							backgroundSize: "cover"
						} );
						YTPlayer.opt.backgroundUrl = bgndURL;
					}
				}
			} );

			if( YTPlayer.videoData ) {

				setTimeout( function() {
					YTPlayer.opt.ratio = YTPlayer.opt.ratio == "auto" ? "16/9" : YTPlayer.opt.ratio;
					YTPlayer.dataReceived = true;
					jQuery( YTPlayer ).trigger( "YTPChanged" );
					var YTPData = jQuery.Event( "YTPData" );
					YTPData.prop = {};
					for( var x in YTPlayer.videoData ) YTPData.prop[ x ] = YTPlayer.videoData[ x ];
					jQuery( YTPlayer ).trigger( YTPData );
				}, 500 );

				YTPlayer.hasData = true;
			} else if( jQuery.mbYTPlayer.apiKey ) {
				// Get video info from API3 (needs api key)
				// snippet,player,contentDetails,statistics,status
				jQuery.getJSON( jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + YTPlayer.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function( data ) {
					YTPlayer.dataReceived = true;
					jQuery( YTPlayer ).trigger( "YTPChanged" );

					function parseYTPlayer_data( data ) {
						YTPlayer.videoData = {};
						YTPlayer.videoData.id = YTPlayer.videoID;
						YTPlayer.videoData.channelTitle = data.channelTitle;
						YTPlayer.videoData.title = data.title;
						YTPlayer.videoData.description = data.description.length < 400 ? data.description : data.description.substring( 0, 400 ) + " ...";
						YTPlayer.videoData.aspectratio = YTPlayer.opt.ratio == "auto" ? "16/9" : YTPlayer.opt.ratio;
						YTPlayer.opt.ratio = YTPlayer.videoData.aspectratio;
						YTPlayer.videoData.thumb_max = data.thumbnails.maxres ? data.thumbnails.maxres.url : null;
						YTPlayer.videoData.thumb_high = data.thumbnails.high ? data.thumbnails.high.url : null;
						YTPlayer.videoData.thumb_medium = data.thumbnails.medium ? data.thumbnails.medium.url : null;
						jQuery.mbStorage.set( "YTPlayer_data_" + YTPlayer.videoID, YTPlayer.videoData );
					}

					parseYTPlayer_data( data.items[ 0 ].snippet );
					YTPlayer.hasData = true;
					var YTPData = jQuery.Event( "YTPData" );
					YTPData.prop = {};
					for( var x in YTPlayer.videoData ) YTPData.prop[ x ] = YTPlayer.videoData[ x ];
					jQuery( YTPlayer ).trigger( YTPData );
				} );
			} else {
				setTimeout( function() {
					jQuery( YTPlayer ).trigger( "YTPChanged" );
				}, 50 );
				if( YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ) {
					var bgndURL = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + YTPlayer.videoID + "/hqdefault.jpg";
					YTPlayer.opt.containment.css( {
						background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center",
						backgroundSize: "cover"
					} );
					YTPlayer.opt.backgroundUrl = bgndURL;
				}
				YTPlayer.videoData = null;
				YTPlayer.opt.ratio = YTPlayer.opt.ratio == "auto" ? "16/9" : YTPlayer.opt.ratio;
			}
			if( YTPlayer.isPlayer && !YTPlayer.opt.autoPlay && !jQuery.browser.mobile ) {
				YTPlayer.loading = jQuery( "<div/>" ).addClass( "loading" ).html( "Loading" ).hide();
				jQuery( YTPlayer ).append( YTPlayer.loading );
				YTPlayer.loading.fadeIn();
			}
		},
		/**
		 *
		 */
		removeStoredData: function() {
			jQuery.mbStorage.remove();
		},
		/**
		 *
		 * @returns {*|YTPlayer.videoData}
		 */
		getVideoData: function() {
			var YTPlayer = this.get( 0 );
			return YTPlayer.videoData;
		},
		/**
		 *
		 * @returns {*|YTPlayer.videoID|boolean}
		 */
		getVideoID: function() {
			var YTPlayer = this.get( 0 );
			return YTPlayer.videoID || false;
		},
		/**
		 *
		 * @param quality
		 */
		setVideoQuality: function( quality ) {
			var YTPlayer = this.get( 0 );
			//if( !jQuery.browser.chrome )
			YTPlayer.player.setPlaybackQuality( quality );
		},
		/**
		 *
		 * @param videos
		 * @param shuffle
		 * @param callback
		 * @param loopList
		 * @returns {jQuery.mbYTPlayer}
		 */
		playlist: function( videos, shuffle, callback, loopList ) {
			var $YTPlayer = this;
			var YTPlayer = $YTPlayer.get( 0 );
			YTPlayer.isPlayList = true;
			if( shuffle ) videos = jQuery.shuffle( videos );
			if( !YTPlayer.videoID ) {
				YTPlayer.videos = videos;
				YTPlayer.videoCounter = 0;
				YTPlayer.videoLength = videos.length;
				jQuery( YTPlayer ).data( "property", videos[ 0 ] );
				jQuery( YTPlayer ).mb_YTPlayer();
			}
			if( typeof callback == "function" ) jQuery( YTPlayer ).one( "YTPChanged", function() {
				callback( YTPlayer );
			} );
			jQuery( YTPlayer ).on( "YTPEnd", function() {
				loopList = typeof loopList == "undefined" ? true : loopList;
				jQuery( YTPlayer ).playNext( loopList );
			} );
			return this;
		},
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
		playNext: function( loopList ) {
			var YTPlayer = this.get( 0 );

			if( YTPlayer.checkForStartAt ) {
				clearTimeout( YTPlayer.checkForStartAt );
				clearInterval( YTPlayer.getState );
			}

			YTPlayer.videoCounter++;
			if( YTPlayer.videoCounter >= YTPlayer.videoLength && loopList )
				YTPlayer.videoCounter = 0;

			if( YTPlayer.videoCounter < YTPlayer.videoLength )
				jQuery( YTPlayer ).changeMovie( YTPlayer.videos[ YTPlayer.videoCounter ] );
			else
				YTPlayer.videoCounter--;

			return this;
		},
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
		playPrev: function() {
			var YTPlayer = this.get( 0 );

			if( YTPlayer.checkForStartAt ) {
				clearInterval( YTPlayer.checkForStartAt );
				clearInterval( YTPlayer.getState );
			}

			YTPlayer.videoCounter--;
			if( YTPlayer.videoCounter < 0 ) YTPlayer.videoCounter = YTPlayer.videoLength - 1;
			jQuery( YTPlayer ).changeMovie( YTPlayer.videos[ YTPlayer.videoCounter ] );
			return this;
		},
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
		playIndex: function( idx ) {
			var YTPlayer = this.get( 0 );

			idx = idx - 1;

			if( YTPlayer.checkForStartAt ) {
				clearInterval( YTPlayer.checkForStartAt );
				clearInterval( YTPlayer.getState );
			}

			YTPlayer.videoCounter = idx;
			if( YTPlayer.videoCounter >= YTPlayer.videoLength - 1 )
				YTPlayer.videoCounter = YTPlayer.videoLength - 1;
			jQuery( YTPlayer ).changeMovie( YTPlayer.videos[ YTPlayer.videoCounter ] );
			return this;
		},
		/**
		 *
		 * @param opt
		 */
		changeMovie: function( opt ) {

			var $YTPlayer = this;
			var YTPlayer = $YTPlayer.get( 0 );
			YTPlayer.opt.startAt = 0;
			YTPlayer.opt.stopAt = 0;
			YTPlayer.opt.mask = false;
			YTPlayer.opt.mute = true;
			YTPlayer.hasData = false;
			YTPlayer.hasChanged = true;
			YTPlayer.player.loopTime = undefined;

			if( opt )
				jQuery.extend( YTPlayer.opt, opt ); //YTPlayer.defaultOpt,
			YTPlayer.videoID = getYTPVideoID( YTPlayer.opt.videoURL ).videoID;

			if( YTPlayer.opt.loop == "true" )
				YTPlayer.opt.loop = 9999;

			jQuery( YTPlayer.playerEl ).CSSAnimate( {
				opacity: 0
			}, 200, function() {

				var YTPChangeMovie = jQuery.Event( "YTPChangeMovie" );
				YTPChangeMovie.time = YTPlayer.currentTime;
				YTPChangeMovie.videoId = YTPlayer.videoID;
				jQuery( YTPlayer ).trigger( YTPChangeMovie );

				jQuery( YTPlayer ).YTPGetPlayer().cueVideoByUrl( encodeURI( jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + YTPlayer.videoID ), 1, YTPlayer.opt.quality );
				jQuery( YTPlayer ).optimizeDisplay();

				jQuery.mbYTPlayer.checkForState( YTPlayer );
				jQuery.mbYTPlayer.getDataFromAPI( YTPlayer );

			} );

			jQuery.mbYTPlayer.applyMask( YTPlayer );
		},
		/**
		 *
		 * @returns {player}
		 */
		getPlayer: function() {
			return jQuery( this ).get( 0 ).player;
		},

		playerDestroy: function() {
			var YTPlayer = this.get( 0 );
			ytp.YTAPIReady = true;
			ytp.backgroundIsInited = false;
			YTPlayer.isInit = false;
			YTPlayer.videoID = null;
			var playerBox = YTPlayer.wrapper;
			playerBox.remove();
			jQuery( "#controlBar_" + YTPlayer.id ).remove();
			clearInterval( YTPlayer.checkForStartAt );
			clearInterval( YTPlayer.getState );
			return this;
		},

		/**
		 *
		 * @param real
		 * @returns {jQuery.mbYTPlayer}
		 */
		fullscreen: function( real ) {
			var YTPlayer = this.get( 0 );
			if( typeof real == "undefined" ) real = YTPlayer.opt.realfullscreen;
			real = eval( real );
			var controls = jQuery( "#controlBar_" + YTPlayer.id );
			var fullScreenBtn = controls.find( ".mb_OnlyYT" );
			var videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
			//var videoWrapper = YTPlayer.wrapper;
			if( real ) {
				var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
				jQuery( document ).off( fullscreenchange ).on( fullscreenchange, function() {
					var isFullScreen = RunPrefixMethod( document, "IsFullScreen" ) || RunPrefixMethod( document, "FullScreen" );
					if( !isFullScreen ) {
						YTPlayer.isAlone = false;
						fullScreenBtn.html( jQuery.mbYTPlayer.controls.onlyYT );
						jQuery( YTPlayer ).YTPSetVideoQuality( YTPlayer.opt.quality );
						videoWrapper.removeClass( "YTPFullscreen" );
						videoWrapper.CSSAnimate( {
							opacity: YTPlayer.opt.opacity
						}, 500 );
						videoWrapper.css( {
							zIndex: 0
						} );
						if( YTPlayer.isBackground ) {
							jQuery( "body" ).after( controls );
						} else {
							YTPlayer.wrapper.before( controls );
						}
						jQuery( window ).resize();
						jQuery( YTPlayer ).trigger( "YTPFullScreenEnd" );
					} else {
						jQuery( YTPlayer ).YTPSetVideoQuality( "default" );
						jQuery( YTPlayer ).trigger( "YTPFullScreenStart" );
					}
				} );
			}
			if( !YTPlayer.isAlone ) {
				function hideMouse() {
					YTPlayer.overlay.css( {
						cursor: "none"
					} );
				}

				jQuery( document ).on( "mousemove.YTPlayer", function( e ) {
					YTPlayer.overlay.css( {
						cursor: "auto"
					} );
					clearTimeout( YTPlayer.hideCursor );
					if( !jQuery( e.target ).parents().is( ".mb_YTPBar" ) ) YTPlayer.hideCursor = setTimeout( hideMouse, 3000 );
				} );
				hideMouse();
				if( real ) {
					videoWrapper.css( {
						opacity: 0
					} );
					videoWrapper.addClass( "YTPFullscreen" );
					launchFullscreen( videoWrapper.get( 0 ) );
					setTimeout( function() {
						videoWrapper.CSSAnimate( {
							opacity: 1
						}, 1000 );
						YTPlayer.wrapper.append( controls );
						jQuery( YTPlayer ).optimizeDisplay();
						YTPlayer.player.seekTo( YTPlayer.player.getCurrentTime() + .1, true );
					}, 500 )
				} else videoWrapper.css( {
					zIndex: 10000
				} ).CSSAnimate( {
					opacity: 1
				}, 1000 );
				fullScreenBtn.html( jQuery.mbYTPlayer.controls.showSite );
				YTPlayer.isAlone = true;
			} else {
				jQuery( document ).off( "mousemove.YTPlayer" );
				clearTimeout( YTPlayer.hideCursor );
				YTPlayer.overlay.css( {
					cursor: "auto"
				} );
				if( real ) {
					cancelFullscreen();
				} else {
					videoWrapper.CSSAnimate( {
						opacity: YTPlayer.opt.opacity
					}, 500 );
					videoWrapper.css( {
						zIndex: 0
					} );
				}
				fullScreenBtn.html( jQuery.mbYTPlayer.controls.onlyYT );
				YTPlayer.isAlone = false;
			}

			function RunPrefixMethod( obj, method ) {
				var pfx = [ "webkit", "moz", "ms", "o", "" ];
				var p = 0,
					m, t;
				while( p < pfx.length && !obj[ m ] ) {
					m = method;
					if( pfx[ p ] == "" ) {
						m = m.substr( 0, 1 ).toLowerCase() + m.substr( 1 );
					}
					m = pfx[ p ] + m;
					t = typeof obj[ m ];
					if( t != "undefined" ) {
						pfx = [ pfx[ p ] ];
						return( t == "function" ? obj[ m ]() : obj[ m ] );
					}
					p++;
				}
			}

			function launchFullscreen( element ) {
				RunPrefixMethod( element, "RequestFullScreen" );
			}

			function cancelFullscreen() {
				if( RunPrefixMethod( document, "FullScreen" ) || RunPrefixMethod( document, "IsFullScreen" ) ) {
					RunPrefixMethod( document, "CancelFullScreen" );
				}
			}

			return this;
		},
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
		toggleLoops: function() {
			var YTPlayer = this.get( 0 );
			var data = YTPlayer.opt;
			if( data.loop == 1 ) {
				data.loop = 0;
			} else {
				if( data.startAt ) {
					YTPlayer.player.seekTo( data.startAt );
				} else {
					YTPlayer.player.playVideo();
				}
				data.loop = 1;
			}
			return this;
		},
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
		play: function() {
			var YTPlayer = this.get( 0 );
			if( !YTPlayer.isReady )
				return this;

			YTPlayer.player.playVideo();
			YTPlayer.wrapper.CSSAnimate( {
				opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
			}, 2000 );

			jQuery( YTPlayer.playerEl ).CSSAnimate( {
				opacity: 1
			}, 1000 );

			var controls = jQuery( "#controlBar_" + YTPlayer.id );
			var playBtn = controls.find( ".mb_YTPPlaypause" );
			playBtn.html( jQuery.mbYTPlayer.controls.pause );
			YTPlayer.state = 1;

			jQuery( YTPlayer ).css( "background-image", "none" );
			return this;
		},
		/**
		 *
		 * @param callback
		 * @returns {jQuery.mbYTPlayer}
		 */
		togglePlay: function( callback ) {
			var YTPlayer = this.get( 0 );
			if( YTPlayer.state == 1 )
				this.YTPPause();
			else
				this.YTPPlay();

			if( typeof callback == "function" )
				callback( YTPlayer.state );

			return this;
		},
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
		stop: function() {
			var YTPlayer = this.get( 0 );
			var controls = jQuery( "#controlBar_" + YTPlayer.id );
			var playBtn = controls.find( ".mb_YTPPlaypause" );
			playBtn.html( jQuery.mbYTPlayer.controls.play );
			YTPlayer.player.stopVideo();
			return this;
		},
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
		pause: function() {
			var YTPlayer = this.get( 0 );
			YTPlayer.player.pauseVideo();
			YTPlayer.state = 2;
			return this;
		},
		/**
		 *
		 * @param val
		 * @returns {jQuery.mbYTPlayer}
		 */
		seekTo: function( val ) {
			var YTPlayer = this.get( 0 );
			YTPlayer.player.seekTo( val, true );
			return this;
		},
		/**
		 *
		 * @param val
		 * @returns {jQuery.mbYTPlayer}
		 */
		setVolume: function( val ) {
			var YTPlayer = this.get( 0 );
			if( !val && !YTPlayer.opt.vol && YTPlayer.player.getVolume() == 0 ) jQuery( YTPlayer ).YTPUnmute();
			else if( ( !val && YTPlayer.player.getVolume() > 0 ) || ( val && YTPlayer.opt.vol == val ) ) {
				if( !YTPlayer.isMute ) jQuery( YTPlayer ).YTPMute();
				else jQuery( YTPlayer ).YTPUnmute();
			} else {
				YTPlayer.opt.vol = val;
				YTPlayer.player.setVolume( YTPlayer.opt.vol );
				if( YTPlayer.volumeBar && YTPlayer.volumeBar.length ) YTPlayer.volumeBar.updateSliderVal( val )
			}
			return this;
		},
		/**
		 *
		 * @returns {boolean}
		 */
		toggleVolume: function() {
			var YTPlayer = this.get( 0 );
			if( !YTPlayer ) return;
			if( YTPlayer.player.isMuted() ) {
				jQuery( YTPlayer ).YTPUnmute();
				return true;
			} else {
				jQuery( YTPlayer ).YTPMute();
				return false;
			}
		},
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
		mute: function() {
			var YTPlayer = this.get( 0 );
			if( YTPlayer.isMute ) return;
			YTPlayer.player.mute();
			YTPlayer.isMute = true;
			YTPlayer.player.setVolume( 0 );
			if( YTPlayer.volumeBar && YTPlayer.volumeBar.length && YTPlayer.volumeBar.width() > 10 ) {
				YTPlayer.volumeBar.updateSliderVal( 0 );
			}
			var controls = jQuery( "#controlBar_" + YTPlayer.id );
			var muteBtn = controls.find( ".mb_YTPMuteUnmute" );
			muteBtn.html( jQuery.mbYTPlayer.controls.unmute );
			jQuery( YTPlayer ).addClass( "isMuted" );
			if( YTPlayer.volumeBar && YTPlayer.volumeBar.length ) YTPlayer.volumeBar.addClass( "muted" );
			var YTPEvent = jQuery.Event( "YTPMuted" );
			YTPEvent.time = YTPlayer.currentTime;
			if( YTPlayer.canTrigger ) jQuery( YTPlayer ).trigger( YTPEvent );
			return this;
		},
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
		unmute: function() {
			var YTPlayer = this.get( 0 );
			if( !YTPlayer.isMute ) return;
			YTPlayer.player.unMute();
			YTPlayer.isMute = false;
			YTPlayer.player.setVolume( YTPlayer.opt.vol );
			if( YTPlayer.volumeBar && YTPlayer.volumeBar.length ) YTPlayer.volumeBar.updateSliderVal( YTPlayer.opt.vol > 10 ? YTPlayer.opt.vol : 10 );
			var controls = jQuery( "#controlBar_" + YTPlayer.id );
			var muteBtn = controls.find( ".mb_YTPMuteUnmute" );
			muteBtn.html( jQuery.mbYTPlayer.controls.mute );
			jQuery( YTPlayer ).removeClass( "isMuted" );
			if( YTPlayer.volumeBar && YTPlayer.volumeBar.length ) YTPlayer.volumeBar.removeClass( "muted" );
			var YTPEvent = jQuery.Event( "YTPUnmuted" );
			YTPEvent.time = YTPlayer.currentTime;
			if( YTPlayer.canTrigger ) jQuery( YTPlayer ).trigger( YTPEvent );
			return this;
		},
		/**
		 * FILTERS
		 *
		 *
		 * @param filter
		 * @param value
		 * @returns {jQuery.mbYTPlayer}
		 */
		applyFilter: function( filter, value ) {
			return this.each( function() {
				var YTPlayer = this;
				YTPlayer.filters[ filter ].value = value;
				if( YTPlayer.filtersEnabled )
					jQuery( YTPlayer ).YTPEnableFilters();
			} );
		},
		/**
		 *
		 * @param filters
		 * @returns {jQuery.mbYTPlayer}
		 */
		applyFilters: function( filters ) {
			return this.each( function() {
				var YTPlayer = this;
				if( !YTPlayer.isReady ) {
					jQuery( YTPlayer ).on( "YTPReady", function() {
						jQuery( YTPlayer ).YTPApplyFilters( filters );
					} );
					return;
				}

				for( var key in filters )
					jQuery( YTPlayer ).YTPApplyFilter( key, filters[ key ] );

				jQuery( YTPlayer ).trigger( "YTPFiltersApplied" );
			} );
		},
		/**
		 *
		 * @param filter
		 * @param value
		 * @returns {*}
		 */
		toggleFilter: function( filter, value ) {
			return this.each( function() {
				var YTPlayer = this;
				if( !YTPlayer.filters[ filter ].value ) YTPlayer.filters[ filter ].value = value;
				else YTPlayer.filters[ filter ].value = 0;
				if( YTPlayer.filtersEnabled ) jQuery( this ).YTPEnableFilters();
			} );
		},
		/**
		 *
		 * @param callback
		 * @returns {*}
		 */
		toggleFilters: function( callback ) {
			return this.each( function() {
				var YTPlayer = this;
				if( YTPlayer.filtersEnabled ) {
					jQuery( YTPlayer ).trigger( "YTPDisableFilters" );
					jQuery( YTPlayer ).YTPDisableFilters();
				} else {
					jQuery( YTPlayer ).YTPEnableFilters();
					jQuery( YTPlayer ).trigger( "YTPEnableFilters" );
				}
				if( typeof callback == "function" )
					callback( YTPlayer.filtersEnabled );
			} )
		},
		/**
		 *
		 * @returns {*}
		 */
		disableFilters: function() {
			return this.each( function() {
				var YTPlayer = this;
				var iframe = jQuery( YTPlayer.playerEl );
				iframe.css( "-webkit-filter", "" );
				iframe.css( "filter", "" );
				YTPlayer.filtersEnabled = false;
			} )
		},
		/**
		 *
		 * @returns {*}
		 */
		enableFilters: function() {
			return this.each( function() {
				var YTPlayer = this;
				var iframe = jQuery( YTPlayer.playerEl );
				var filterStyle = "";
				for( var key in YTPlayer.filters ) {
					if( YTPlayer.filters[ key ].value )
						filterStyle += key.replace( "_", "-" ) + "(" + YTPlayer.filters[ key ].value + YTPlayer.filters[ key ].unit + ") ";
				}
				iframe.css( "-webkit-filter", filterStyle );
				iframe.css( "filter", filterStyle );
				YTPlayer.filtersEnabled = true;
			} );
		},
		/**
		 *
		 * @param filter
		 * @param callback
		 * @returns {*}
		 */
		removeFilter: function( filter, callback ) {
			return this.each( function() {
				var YTPlayer = this;
				if( typeof filter == "function" ) {
					callback = filter;
					filter = null;
				}
				if( !filter )
					for( var key in YTPlayer.filters ) {
						jQuery( this ).YTPApplyFilter( key, 0 );
						if( typeof callback == "function" ) callback( key );
					} else {
						jQuery( this ).YTPApplyFilter( filter, 0 );
						if( typeof callback == "function" ) callback( filter );
					}
			} );

		},
		/**
		 *
		 * @returns {*}
		 */
		getFilters: function() {
			var YTPlayer = this.get( 0 );
			return YTPlayer.filters;
		},
		/**
		 * MASK
		 *
		 *
		 * @param mask
		 * @returns {jQuery.mbYTPlayer}
		 */
		addMask: function( mask ) {
			var YTPlayer = this.get( 0 );
			var overlay = YTPlayer.overlay;

			if( !mask ) {
				mask = YTPlayer.actualMask;
			}

			var tempImg = jQuery( "<img/>" ).attr( "src", mask ).on( "load", function() {

				overlay.CSSAnimate( {
					opacity: 0
				}, 500, function() {

					YTPlayer.hasMask = true;

					tempImg.remove();

					overlay.css( {
						backgroundImage: "url(" + mask + ")",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center center",
						backgroundSize: "cover"
					} );

					overlay.CSSAnimate( {
						opacity: 1
					}, 500 );

				} );

			} );

			return this;

		},
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
		removeMask: function() {
			var YTPlayer = this.get( 0 );
			var overlay = YTPlayer.overlay;
			overlay.CSSAnimate( {
				opacity: 0
			}, 500, function() {

				YTPlayer.hasMask = false;

				overlay.css( {
					backgroundImage: "",
					backgroundRepeat: "",
					backgroundPosition: "",
					backgroundSize: ""
				} );
				overlay.CSSAnimate( {
					opacity: 1
				}, 500 );

			} );

			return this;

		},
		/**
		 *
		 * @param YTPlayer
		 */
		applyMask: function( YTPlayer ) {
			var $YTPlayer = jQuery( YTPlayer );
			$YTPlayer.off( "YTPTime.mask" );

			if( YTPlayer.opt.mask ) {

				if( typeof YTPlayer.opt.mask == "string" ) {
					$YTPlayer.YTPAddMask( YTPlayer.opt.mask );

					YTPlayer.actualMask = YTPlayer.opt.mask;

				} else if( typeof YTPlayer.opt.mask == "object" ) {

					for( var time in YTPlayer.opt.mask ) {
						if( YTPlayer.opt.mask[ time ] )
							var img = jQuery( "<img/>" ).attr( "src", YTPlayer.opt.mask[ time ] );
					}

					if( YTPlayer.opt.mask[ 0 ] )
						$YTPlayer.YTPAddMask( YTPlayer.opt.mask[ 0 ] );

					$YTPlayer.on( "YTPTime.mask", function( e ) {
						for( var time in YTPlayer.opt.mask ) {
							if( e.time == time )
								if( !YTPlayer.opt.mask[ time ] ) {
									$YTPlayer.YTPRemoveMask();
								} else {

									$YTPlayer.YTPAddMask( YTPlayer.opt.mask[ time ] );
									YTPlayer.actualMask = YTPlayer.opt.mask[ time ];
								}

						}
					} );

				}


			}
		},
		/**
		 *
		 */
		toggleMask: function() {
			var YTPlayer = this.get( 0 );
			var $YTPlayer = $( YTPlayer );
			if( YTPlayer.hasMask )
				$YTPlayer.YTPRemoveMask();
			else
				$YTPlayer.YTPAddMask();

			return this;
		},
		/**
		 *
		 * @returns {{totalTime: number, currentTime: number}}
		 */
		manageProgress: function() {
			var YTPlayer = this.get( 0 );
			var controls = jQuery( "#controlBar_" + YTPlayer.id );
			var progressBar = controls.find( ".mb_YTPProgress" );
			var loadedBar = controls.find( ".mb_YTPLoaded" );
			var timeBar = controls.find( ".mb_YTPseekbar" );
			var totW = progressBar.outerWidth();
			var currentTime = Math.floor( YTPlayer.player.getCurrentTime() );
			var totalTime = Math.floor( YTPlayer.player.getDuration() );
			var timeW = ( currentTime * totW ) / totalTime;
			var startLeft = 0;
			var loadedW = YTPlayer.player.getVideoLoadedFraction() * 100;
			loadedBar.css( {
				left: startLeft,
				width: loadedW + "%"
			} );
			timeBar.css( {
				left: 0,
				width: timeW
			} );
			return {
				totalTime: totalTime,
				currentTime: currentTime
			};
		},
		/**
		 *
		 * @param YTPlayer
		 */
		buildControls: function( YTPlayer ) {
			var data = YTPlayer.opt;
			// @data.printUrl: is deprecated; use data.showYTLogo
			data.showYTLogo = data.showYTLogo || data.printUrl;

			if( jQuery( "#controlBar_" + YTPlayer.id ).length )
				return;
			YTPlayer.controlBar = jQuery( "<span/>" ).attr( "id", "controlBar_" + YTPlayer.id ).addClass( "mb_YTPBar" ).css( {
				whiteSpace: "noWrap",
				position: YTPlayer.isBackground ? "fixed" : "absolute",
				zIndex: YTPlayer.isBackground ? 10000 : 1000
			} ).hide();
			var buttonBar = jQuery( "<div/>" ).addClass( "buttonBar" );
			/* play/pause button*/
			var playpause = jQuery( "<span>" + jQuery.mbYTPlayer.controls.play + "</span>" ).addClass( "mb_YTPPlaypause ytpicon" ).click( function() {
				if( YTPlayer.player.getPlayerState() == 1 ) jQuery( YTPlayer ).YTPPause();
				else jQuery( YTPlayer ).YTPPlay();
			} );
			/* mute/unmute button*/
			var MuteUnmute = jQuery( "<span>" + jQuery.mbYTPlayer.controls.mute + "</span>" ).addClass( "mb_YTPMuteUnmute ytpicon" ).click( function() {
				if( YTPlayer.player.getVolume() == 0 ) {
					jQuery( YTPlayer ).YTPUnmute();
				} else {
					jQuery( YTPlayer ).YTPMute();
				}
			} );
			/* volume bar*/
			var volumeBar = jQuery( "<div/>" ).addClass( "mb_YTPVolumeBar" ).css( {
				display: "inline-block"
			} );
			YTPlayer.volumeBar = volumeBar;
			/* time elapsed */
			var idx = jQuery( "<span/>" ).addClass( "mb_YTPTime" );
			var vURL = data.videoURL ? data.videoURL : "";
			if( vURL.indexOf( "http" ) < 0 ) vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL;
			var movieUrl = jQuery( "<span/>" ).html( jQuery.mbYTPlayer.controls.ytLogo ).addClass( "mb_YTPUrl ytpicon" ).attr( "title", "view on YouTube" ).on( "click", function() {
				window.open( vURL, "viewOnYT" )
			} );
			var onlyVideo = jQuery( "<span/>" ).html( jQuery.mbYTPlayer.controls.onlyYT ).addClass( "mb_OnlyYT ytpicon" ).on( "click", function() {
				jQuery( YTPlayer ).YTPFullscreen( data.realfullscreen );
			} );
			var progressBar = jQuery( "<div/>" ).addClass( "mb_YTPProgress" ).css( "position", "absolute" ).click( function( e ) {
				timeBar.css( {
					width: ( e.clientX - timeBar.offset().left )
				} );
				YTPlayer.timeW = e.clientX - timeBar.offset().left;
				YTPlayer.controlBar.find( ".mb_YTPLoaded" ).css( {
					width: 0
				} );
				var totalTime = Math.floor( YTPlayer.player.getDuration() );
				YTPlayer.goto = ( timeBar.outerWidth() * totalTime ) / progressBar.outerWidth();
				YTPlayer.player.seekTo( parseFloat( YTPlayer.goto ), true );
				YTPlayer.controlBar.find( ".mb_YTPLoaded" ).css( {
					width: 0
				} );
			} );
			var loadedBar = jQuery( "<div/>" ).addClass( "mb_YTPLoaded" ).css( "position", "absolute" );
			var timeBar = jQuery( "<div/>" ).addClass( "mb_YTPseekbar" ).css( "position", "absolute" );
			progressBar.append( loadedBar ).append( timeBar );
			buttonBar.append( playpause ).append( MuteUnmute ).append( volumeBar ).append( idx );
			if( data.showYTLogo ) {
				buttonBar.append( movieUrl );
			}
			if( YTPlayer.isBackground || ( eval( YTPlayer.opt.realfullscreen ) && !YTPlayer.isBackground ) ) buttonBar.append( onlyVideo );
			YTPlayer.controlBar.append( buttonBar ).append( progressBar );
			if( !YTPlayer.isBackground ) {
				YTPlayer.controlBar.addClass( "inlinePlayer" );
				YTPlayer.wrapper.before( YTPlayer.controlBar );
			} else {
				jQuery( "body" ).after( YTPlayer.controlBar );
			}
			volumeBar.simpleSlider( {
				initialval: YTPlayer.opt.vol,
				scale: 100,
				orientation: "h",
				callback: function( el ) {
					if( el.value == 0 ) {
						jQuery( YTPlayer ).YTPMute();
					} else {
						jQuery( YTPlayer ).YTPUnmute();
					}
					YTPlayer.player.setVolume( el.value );
					if( !YTPlayer.isMute ) YTPlayer.opt.vol = el.value;
				}
			} );
		},
		/**
		 *
		 * @param YTPlayer
		 */
		checkForState: function( YTPlayer ) {
			var interval = YTPlayer.opt.showControls ? 100 : 400;
			clearInterval( YTPlayer.getState );
			//Checking if player has been removed from scene
			if( !jQuery.contains( document, YTPlayer ) ) {
				jQuery( YTPlayer ).YTPPlayerDestroy();
				clearInterval( YTPlayer.getState );
				clearInterval( YTPlayer.checkForStartAt );
				return;
			}

			jQuery.mbYTPlayer.checkForStart( YTPlayer );

			YTPlayer.getState = setInterval( function() {
				var prog = jQuery( YTPlayer ).YTPManageProgress();
				var $YTPlayer = jQuery( YTPlayer );
				var data = YTPlayer.opt;
				var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
				var stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
				stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0;
				if( YTPlayer.currentTime != prog.currentTime ) {

					var YTPEvent = jQuery.Event( "YTPTime" );
					YTPEvent.time = YTPlayer.currentTime;
					jQuery( YTPlayer ).trigger( YTPEvent );

				}
				YTPlayer.currentTime = prog.currentTime;
				YTPlayer.totalTime = YTPlayer.player.getDuration();
				if( YTPlayer.player.getVolume() == 0 ) $YTPlayer.addClass( "isMuted" );
				else $YTPlayer.removeClass( "isMuted" );

				if( YTPlayer.opt.showControls )
					if( prog.totalTime ) {
						YTPlayer.controlBar.find( ".mb_YTPTime" ).html( jQuery.mbYTPlayer.formatTime( prog.currentTime ) + " / " + jQuery.mbYTPlayer.formatTime( prog.totalTime ) );
					} else {
						YTPlayer.controlBar.find( ".mb_YTPTime" ).html( "-- : -- / -- : --" );
					}

				if( eval( YTPlayer.opt.stopMovieOnBlur ) ) {
					if( !document.hasFocus() ) {
						if( YTPlayer.state == 1 ) {
							YTPlayer.hasFocus = false;
							$YTPlayer.YTPPause();
						}
					} else if( document.hasFocus() && !YTPlayer.hasFocus && !( YTPlayer.state == -1 || YTPlayer.state == 0 ) ) {
						YTPlayer.hasFocus = true;
						$YTPlayer.YTPPlay();
					}
				}

				if( YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ) {
					YTPlayer.controlBar.addClass( "compact" );
					YTPlayer.isCompact = true;
					if( !YTPlayer.isMute && YTPlayer.volumeBar ) YTPlayer.volumeBar.updateSliderVal( YTPlayer.opt.vol );
				} else if( YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact ) {
					YTPlayer.controlBar.removeClass( "compact" );
					YTPlayer.isCompact = false;
					if( !YTPlayer.isMute && YTPlayer.volumeBar ) YTPlayer.volumeBar.updateSliderVal( YTPlayer.opt.vol );
				}
				if( YTPlayer.player.getPlayerState() == 1 && ( parseFloat( YTPlayer.player.getDuration() - 1.5 ) < YTPlayer.player.getCurrentTime() || ( stopAt > 0 && parseFloat( YTPlayer.player.getCurrentTime() ) > stopAt ) ) ) {
					if( YTPlayer.isEnded ) return;
					YTPlayer.isEnded = true;
					setTimeout( function() {
						YTPlayer.isEnded = false
					}, 1000 );

					if( YTPlayer.isPlayList ) {

						if( !data.loop || ( data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1 ) ) {

							YTPlayer.player.loopTime = undefined;
							clearInterval( YTPlayer.getState );
							var YTPEnd = jQuery.Event( "YTPEnd" );
							YTPEnd.time = YTPlayer.currentTime;
							jQuery( YTPlayer ).trigger( YTPEnd );
							//YTPlayer.state = 0;

							return;
						}

					} else if( !data.loop || ( data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1 ) ) {

						YTPlayer.player.loopTime = undefined;
						YTPlayer.preventTrigger = true;
						YTPlayer.state = 2;
						jQuery( YTPlayer ).YTPPause();

						YTPlayer.wrapper.CSSAnimate( {
							opacity: 0
						}, 500, function() {

							if( YTPlayer.controlBar.length )
								YTPlayer.controlBar.find( ".mb_YTPPlaypause" ).html( jQuery.mbYTPlayer.controls.play );

							var YTPEnd = jQuery.Event( "YTPEnd" );
							YTPEnd.time = YTPlayer.currentTime;
							jQuery( YTPlayer ).trigger( YTPEnd );

							YTPlayer.player.seekTo( startAt, true );
							if( !YTPlayer.isBackground ) {
								YTPlayer.opt.containment.css( {
									background: "rgba(0,0,0,0.5) url(" + YTPlayer.opt.backgroundUrl + ") center center",
									backgroundSize: "cover"
								} );
							}
						} );

						return;

					}

					YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1;
					startAt = startAt || 1;
					YTPlayer.preventTrigger = true;
					YTPlayer.state = 2;
					jQuery( YTPlayer ).YTPPause();
					YTPlayer.player.seekTo( startAt, true );
					$YTPlayer.YTPPlay();


				}
			}, interval );
		},
		/**
		 *
		 * @returns {string} time
		 */
		getTime: function() {
			var YTPlayer = this.get( 0 );
			return jQuery.mbYTPlayer.formatTime( YTPlayer.currentTime );
		},
		/**
		 *
		 * @returns {string} total time
		 */
		getTotalTime: function() {
			var YTPlayer = this.get( 0 );
			return jQuery.mbYTPlayer.formatTime( YTPlayer.totalTime );
		},
		/**
		 *
		 * @param YTPlayer
		 */
		checkForStart: function( YTPlayer ) {

			var $YTPlayer = jQuery( YTPlayer );

			//Checking if player has been removed from scene
			if( !jQuery.contains( document, YTPlayer ) ) {
				jQuery( YTPlayer ).YTPPlayerDestroy();
				return
			}

			/*
			 if( jQuery.browser.chrome )
			 YTPlayer.opt.quality = "default";
			 */

			YTPlayer.preventTrigger = true;
			YTPlayer.state = 2
			jQuery( YTPlayer ).YTPPause();

			jQuery( YTPlayer ).muteYTPVolume();
			jQuery( "#controlBar_" + YTPlayer.id ).remove();

			YTPlayer.controlBar = false;

			if( YTPlayer.opt.showControls )
				jQuery.mbYTPlayer.buildControls( YTPlayer );

			if( YTPlayer.opt.addRaster ) {

				var classN = YTPlayer.opt.addRaster == "dot" ? "raster-dot" : "raster";
				YTPlayer.overlay.addClass( YTPlayer.isRetina ? classN + " retina" : classN );

			} else {

				YTPlayer.overlay.removeClass( function( index, classNames ) {
					// change the list into an array
					var current_classes = classNames.split( " " ),
						// array of classes which are to be removed
						classes_to_remove = [];
					jQuery.each( current_classes, function( index, class_name ) {
						// if the classname begins with bg add it to the classes_to_remove array
						if( /raster.*/.test( class_name ) ) {
							classes_to_remove.push( class_name );
						}
					} );
					classes_to_remove.push( "retina" );
					// turn the array back into a string
					return classes_to_remove.join( " " );
				} )

			}

			var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
			YTPlayer.player.playVideo();
			YTPlayer.player.seekTo( startAt, true );

			YTPlayer.checkForStartAt = setInterval( function() {

				jQuery( YTPlayer ).YTPMute();

				var canPlayVideo = YTPlayer.player.getVideoLoadedFraction() >= startAt / YTPlayer.player.getDuration();

				if( YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo ) {

					//YTPlayer.player.playVideo();
					//console.timeEnd( "checkforStart" );

					clearInterval( YTPlayer.checkForStartAt );

					if( typeof YTPlayer.opt.onReady == "function" )
						YTPlayer.opt.onReady( YTPlayer );

					YTPlayer.isReady = true;
					var YTPready = jQuery.Event( "YTPReady" );
					YTPready.time = YTPlayer.currentTime;
					jQuery( YTPlayer ).trigger( YTPready );


					YTPlayer.preventTrigger = true;
					YTPlayer.state = 2;
					jQuery( YTPlayer ).YTPPause();

					if( !YTPlayer.opt.mute ) jQuery( YTPlayer ).YTPUnmute();
					YTPlayer.canTrigger = true;

					if( YTPlayer.opt.autoPlay ) {


						var YTPStart = jQuery.Event( "YTPStart" );
						YTPStart.time = YTPlayer.currentTime;
						jQuery( YTPlayer ).trigger( YTPStart );

						$YTPlayer.css( "background-image", "none" );
						jQuery( YTPlayer.playerEl ).CSSAnimate( {
							opacity: 1
						}, 1000 );

						$YTPlayer.YTPPlay();

						YTPlayer.wrapper.CSSAnimate( {
							opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
						}, 1000 );

						/* Fix for Safari freeze */
						if( jQuery.browser.safari ) {

							YTPlayer.safariPlay = setInterval( function() {

								if( YTPlayer.state != 1 )
									$YTPlayer.YTPPlay();
								else
									clearInterval( YTPlayer.safariPlay )
							}, 10 )
						}
						$YTPlayer.on( "YTPReady", function() {
							$YTPlayer.YTPPlay();
						} );

					} else {

						//$YTPlayer.YTPPause();
						YTPlayer.player.pauseVideo();
						if( !YTPlayer.isPlayer ) {
							jQuery( YTPlayer.playerEl ).CSSAnimate( {
								opacity: 1
							}, 500 );

							YTPlayer.wrapper.CSSAnimate( {
								opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
							}, 500 );
						}

						if( YTPlayer.controlBar.length )
							YTPlayer.controlBar.find( ".mb_YTPPlaypause" ).html( jQuery.mbYTPlayer.controls.play );

					}

					if( YTPlayer.isPlayer && !YTPlayer.opt.autoPlay && ( YTPlayer.loading && YTPlayer.loading.length ) ) {
						YTPlayer.loading.html( "Ready" );
						setTimeout( function() {
							YTPlayer.loading.fadeOut();
						}, 100 )
					}

					if( YTPlayer.controlBar && YTPlayer.controlBar.length )
						YTPlayer.controlBar.slideDown( 1000 );

				} else if( jQuery.browser.safari ) {
					YTPlayer.player.playVideo();
					if( startAt >= 0 ) YTPlayer.player.seekTo( startAt, true );
				}

			}, 1 );

		},
		/**
		 *
		 * @param align
		 */
		setAlign: function( align ) {
			var $YTplayer = this;

			$YTplayer.optimizeDisplay( align );
		},
		/**
		 *
		 * @param align
		 */
		getAlign: function() {
			var YTPlayer = this.get( 0 );
			return YTPlayer.opt.align;
		},
		/**
		 *
		 * @param s
		 * @returns {string}
		 */
		formatTime: function( s ) {
			var min = Math.floor( s / 60 );
			var sec = Math.floor( s - ( 60 * min ) );
			return( min <= 9 ? "0" + min : min ) + " : " + ( sec <= 9 ? "0" + sec : sec );
		}
	};

	/**
	 *
	 * @param align
	 * can be center, top, bottom, right, left; (default is center,center)
	 */
	jQuery.fn.optimizeDisplay = function( align ) {
		var YTPlayer = this.get( 0 );
		var playerBox = jQuery( YTPlayer.playerEl );
		var vid = {};

		YTPlayer.opt.align = align || YTPlayer.opt.align;

		YTPlayer.opt.align = typeof YTPlayer.opt.align != "undefined " ? YTPlayer.opt.align : "center,center";
		var YTPAlign = YTPlayer.opt.align.split( "," );

		//data.optimizeDisplay = YTPlayer.isPlayer ? false : data.optimizeDisplay;

		if( YTPlayer.opt.optimizeDisplay ) {
			var abundance = 100;
			var win = {};
			var el = YTPlayer.wrapper;

			win.width = el.outerWidth();
			win.height = el.outerHeight();

			vid.width = win.width + abundance;
			vid.height = YTPlayer.opt.ratio == "16/9" ? Math.ceil( vid.width * ( 9 / 16 ) ) : Math.ceil( vid.width * ( 3 / 4 ) );

			vid.marginTop = -( ( vid.height - win.height ) / 2 );
			vid.marginLeft = 0;

			var lowest = vid.height < win.height;

			if( lowest ) {

				vid.height = win.height + abundance;
				vid.width = YTPlayer.opt.ratio == "16/9" ? Math.floor( vid.height * ( 16 / 9 ) ) : Math.floor( vid.height * ( 4 / 3 ) );

				vid.marginTop = 0;
				vid.marginLeft = -( ( vid.width - win.width ) / 2 );

			}

			for( var a in YTPAlign ) {

				//var al = YTPAlign[ a ].trim();
				var al = YTPAlign[ a ].replace( / /g, "" );

				switch( al ) {

					case "top":
						vid.marginTop = lowest ? -( ( vid.height - win.height ) / 2 ) : 0;
						break;

					case "bottom":
						vid.marginTop = lowest ? 0 : -( vid.height - win.height );
						break;

					case "left":
						vid.marginLeft = 0;
						break;

					case "right":
						vid.marginLeft = lowest ? -( vid.width - win.width ) : 0;
						break;

					default:
						break;
				}

			}

		} else {
			vid.width = "100%";
			vid.height = "100%";
			vid.marginTop = 0;
			vid.marginLeft = 0;
		}

		playerBox.css( {
			width: vid.width,
			height: vid.height,
			marginTop: vid.marginTop,
			marginLeft: vid.marginLeft
		} );

	};
	/**
	 *
	 * @param arr
	 * @returns {Array|string|Blob|*}
	 *
	 */
	jQuery.shuffle = function( arr ) {
		var newArray = arr.slice();
		var len = newArray.length;
		var i = len;
		while( i-- ) {
			var p = parseInt( Math.random() * len );
			var t = newArray[ i ];
			newArray[ i ] = newArray[ p ];
			newArray[ p ] = t;
		}
		return newArray;
	};

	jQuery.fn.unselectable = function() {
		return this.each( function() {
			jQuery( this ).css( {
				"-moz-user-select": "none",
				"-webkit-user-select": "none",
				"user-select": "none"
			} ).attr( "unselectable", "on" );
		} );
	};


	/* Exposed public method */
	jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer;
	jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer;
	jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID;
	jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie;
	jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy;

	jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play;
	jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay;
	jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop;
	jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause;
	jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo;

	jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist;
	jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext;
	jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev;
	jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex;

	jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute;
	jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute;
	jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume;
	jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume;

	jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData;
	jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen;
	jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops;
	jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality;
	jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress;

	jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter;
	jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters;
	jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter;
	jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters;
	jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter;
	jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters;
	jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters;
	jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters;

	jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime;
	jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime;

	jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask;
	jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask;
	jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask;

	jQuery.fn.YTPSetAlign = jQuery.mbYTPlayer.setAlign;
	jQuery.fn.YTPGetAlign = jQuery.mbYTPlayer.getAlign;

	/**
	 *
	 * @deprecated
	 * todo: Above methods will be removed with version 3.5.0
	 *
	 **/
	jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer;
	jQuery.fn.playNext = jQuery.mbYTPlayer.playNext;
	jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev;
	jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie;
	jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID;
	jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer;
	jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy;
	jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen;
	jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls;
	jQuery.fn.playYTP = jQuery.mbYTPlayer.play;
	jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops;
	jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop;
	jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause;
	jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo;
	jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute;
	jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute;
	jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume;
	jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality;
	jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress;
	jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData;


} )( jQuery, ytp );
;
/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.CSSAnimate.min.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 26/03/14 21.40
 *  *****************************************************************************
 */

function uncamel(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function setUnit(e,t){return"string"!=typeof e||e.match(/^[\-0-9\.]+jQuery/)?""+e+t:e}function setFilter(e,t,r){var i=uncamel(t),n=jQuery.browser.mozilla?"":jQuery.CSS.sfx;e[n+"filter"]=e[n+"filter"]||"",r=setUnit(r>jQuery.CSS.filters[t].max?jQuery.CSS.filters[t].max:r,jQuery.CSS.filters[t].unit),e[n+"filter"]+=i+"("+r+") ",delete e[t]}jQuery.support.CSStransition=function(){var e=document.body||document.documentElement,t=e.style;return void 0!==t.transition||void 0!==t.WebkitTransition||void 0!==t.MozTransition||void 0!==t.MsTransition||void 0!==t.OTransition}(),jQuery.CSS={name:"mb.CSSAnimate",author:"Matteo Bicocchi",version:"2.0.0",transitionEnd:"transitionEnd",sfx:"",filters:{blur:{min:0,max:100,unit:"px"},brightness:{min:0,max:400,unit:"%"},contrast:{min:0,max:400,unit:"%"},grayscale:{min:0,max:100,unit:"%"},hueRotate:{min:0,max:360,unit:"deg"},invert:{min:0,max:100,unit:"%"},saturate:{min:0,max:400,unit:"%"},sepia:{min:0,max:100,unit:"%"}},normalizeCss:function(e){var t=jQuery.extend(!0,{},e);jQuery.browser.webkit||jQuery.browser.opera?jQuery.CSS.sfx="-webkit-":jQuery.browser.mozilla?jQuery.CSS.sfx="-moz-":jQuery.browser.msie&&(jQuery.CSS.sfx="-ms-");for(var r in t){"transform"===r&&(t[jQuery.CSS.sfx+"transform"]=t[r],delete t[r]),"transform-origin"===r&&(t[jQuery.CSS.sfx+"transform-origin"]=e[r],delete t[r]),"filter"!==r||jQuery.browser.mozilla||(t[jQuery.CSS.sfx+"filter"]=e[r],delete t[r]),"blur"===r&&setFilter(t,"blur",e[r]),"brightness"===r&&setFilter(t,"brightness",e[r]),"contrast"===r&&setFilter(t,"contrast",e[r]),"grayscale"===r&&setFilter(t,"grayscale",e[r]),"hueRotate"===r&&setFilter(t,"hueRotate",e[r]),"invert"===r&&setFilter(t,"invert",e[r]),"saturate"===r&&setFilter(t,"saturate",e[r]),"sepia"===r&&setFilter(t,"sepia",e[r]);var i="";"x"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" translateX("+setUnit(e[r],"px")+")",delete t[r]),"y"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" translateY("+setUnit(e[r],"px")+")",delete t[r]),"z"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" translateZ("+setUnit(e[r],"px")+")",delete t[r]),"rotate"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" rotate("+setUnit(e[r],"deg")+")",delete t[r]),"rotateX"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" rotateX("+setUnit(e[r],"deg")+")",delete t[r]),"rotateY"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" rotateY("+setUnit(e[r],"deg")+")",delete t[r]),"rotateZ"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" rotateZ("+setUnit(e[r],"deg")+")",delete t[r]),"scale"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" scale("+setUnit(e[r],"")+")",delete t[r]),"scaleX"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" scaleX("+setUnit(e[r],"")+")",delete t[r]),"scaleY"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" scaleY("+setUnit(e[r],"")+")",delete t[r]),"scaleZ"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" scaleZ("+setUnit(e[r],"")+")",delete t[r]),"skew"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" skew("+setUnit(e[r],"deg")+")",delete t[r]),"skewX"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" skewX("+setUnit(e[r],"deg")+")",delete t[r]),"skewY"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" skewY("+setUnit(e[r],"deg")+")",delete t[r]),"perspective"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" perspective("+setUnit(e[r],"px")+")",delete t[r])}return t},getProp:function(e){var t=[];for(var r in e)t.indexOf(r)<0&&t.push(uncamel(r));return t.join(",")},animate:function(e,t,r,i,n){return this.each(function(){function s(){u.called=!0,u.CSSAIsRunning=!1,a.off(jQuery.CSS.transitionEnd+"."+u.id),clearTimeout(u.timeout),a.css(jQuery.CSS.sfx+"transition",""),"function"==typeof n&&n.apply(u),"function"==typeof u.CSSqueue&&(u.CSSqueue(),u.CSSqueue=null)}var u=this,a=jQuery(this);u.id=u.id||"CSSA_"+(new Date).getTime();var o=o||{type:"noEvent"};if(u.CSSAIsRunning&&u.eventType==o.type&&!jQuery.browser.msie&&jQuery.browser.version<=9)return void(u.CSSqueue=function(){a.CSSAnimate(e,t,r,i,n)});if(u.CSSqueue=null,u.eventType=o.type,0!==a.length&&e){if(e=jQuery.normalizeCss(e),u.CSSAIsRunning=!0,"function"==typeof t&&(n=t,t=jQuery.fx.speeds._default),"function"==typeof r&&(i=r,r=0),"string"==typeof r&&(n=r,r=0),"function"==typeof i&&(n=i,i="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof t)for(var f in jQuery.fx.speeds){if(t==f){t=jQuery.fx.speeds[f];break}t=jQuery.fx.speeds._default}if(t||(t=jQuery.fx.speeds._default),"string"==typeof n&&(i=n,n=null),!jQuery.support.CSStransition){for(var c in e){if("transform"===c&&delete e[c],"filter"===c&&delete e[c],"transform-origin"===c&&delete e[c],"auto"===e[c]&&delete e[c],"x"===c){var S=e[c],l="left";e[l]=S,delete e[c]}if("y"===c){var S=e[c],l="top";e[l]=S,delete e[c]}("-ms-transform"===c||"-ms-filter"===c)&&delete e[c]}return void a.delay(r).animate(e,t,n)}var y={"default":"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};y[i]&&(i=y[i]),a.off(jQuery.CSS.transitionEnd+"."+u.id);var m=jQuery.CSS.getProp(e),d={};jQuery.extend(d,e),d[jQuery.CSS.sfx+"transition-property"]=m,d[jQuery.CSS.sfx+"transition-duration"]=t+"ms",d[jQuery.CSS.sfx+"transition-delay"]=r+"ms",d[jQuery.CSS.sfx+"transition-timing-function"]=i,setTimeout(function(){a.one(jQuery.CSS.transitionEnd+"."+u.id,s),a.css(d)},1),u.timeout=setTimeout(function(){return u.called||!n?(u.called=!1,void(u.CSSAIsRunning=!1)):(a.css(jQuery.CSS.sfx+"transition",""),n.apply(u),u.CSSAIsRunning=!1,void("function"==typeof u.CSSqueue&&(u.CSSqueue(),u.CSSqueue=null)))},t+r+10)}})}},jQuery.fn.CSSAnimate=jQuery.CSS.animate,jQuery.normalizeCss=jQuery.CSS.normalizeCss,jQuery.fn.css3=function(e){return this.each(function(){var t=jQuery(this),r=jQuery.normalizeCss(e);t.css(r)})};
;/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.browser.min.js                                                                                                                   _
 _ last modified: 07/06/16 22.34                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2016. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/

var nAgt=navigator.userAgent;if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.androidStock=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")||-1!=nAgt.indexOf("Edge")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):nAgt.indexOf("mozilla/5.0")>-1&&nAgt.indexOf("android ")>-1&&nAgt.indexOf("applewebkit")>-1&&!(nAgt.indexOf("chrome")>-1)?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&jQuery(window).width()>765,jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt);
;/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.simpleSlider.min.js                                                                                                              _
 _ last modified: 16/05/15 23.45                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2015. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/

var nAgt=navigator.userAgent;if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.androidStock=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")||-1!=nAgt.indexOf("Edge")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):nAgt.indexOf("mozilla/5.0")>-1&&nAgt.indexOf("android ")>-1&&nAgt.indexOf("applewebkit")>-1&&!(nAgt.indexOf("chrome")>-1)?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&jQuery(window).width()>765,jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt);

(function(b){b.simpleSlider={defaults:{initialval:0,scale:100,orientation:"h",readonly:!1,callback:!1},events:{start:b.browser.mobile?"touchstart":"mousedown",end:b.browser.mobile?"touchend":"mouseup",move:b.browser.mobile?"touchmove":"mousemove"},init:function(c){return this.each(function(){var a=this,d=b(a);d.addClass("simpleSlider");a.opt={};b.extend(a.opt,b.simpleSlider.defaults,c);b.extend(a.opt,d.data());var e="h"==a.opt.orientation?"horizontal":"vertical",e=b("<div/>").addClass("level").addClass(e);
	d.prepend(e);a.level=e;d.css({cursor:"default"});"auto"==a.opt.scale&&(a.opt.scale=b(a).outerWidth());d.updateSliderVal();a.opt.readonly||(d.on(b.simpleSlider.events.start,function(c){b.browser.mobile&&(c=c.changedTouches[0]);a.canSlide=!0;d.updateSliderVal(c);"h"==a.opt.orientation?d.css({cursor:"col-resize"}):d.css({cursor:"row-resize"});c.preventDefault();c.stopPropagation()}),b(document).on(b.simpleSlider.events.move,function(c){b.browser.mobile&&(c=c.changedTouches[0]);a.canSlide&&(b(document).css({cursor:"default"}),
			d.updateSliderVal(c),c.preventDefault(),c.stopPropagation())}).on(b.simpleSlider.events.end,function(){b(document).css({cursor:"auto"});a.canSlide=!1;d.css({cursor:"auto"})}))})},updateSliderVal:function(c){var a=this.get(0);if(a.opt){a.opt.initialval="number"==typeof a.opt.initialval?a.opt.initialval:a.opt.initialval(a);var d=b(a).outerWidth(),e=b(a).outerHeight();a.x="object"==typeof c?c.clientX+document.body.scrollLeft-this.offset().left:"number"==typeof c?c*d/a.opt.scale:a.opt.initialval*d/a.opt.scale;
	a.y="object"==typeof c?c.clientY+document.body.scrollTop-this.offset().top:"number"==typeof c?(a.opt.scale-a.opt.initialval-c)*e/a.opt.scale:a.opt.initialval*e/a.opt.scale;a.y=this.outerHeight()-a.y;a.scaleX=a.x*a.opt.scale/d;a.scaleY=a.y*a.opt.scale/e;a.outOfRangeX=a.scaleX>a.opt.scale?a.scaleX-a.opt.scale:0>a.scaleX?a.scaleX:0;a.outOfRangeY=a.scaleY>a.opt.scale?a.scaleY-a.opt.scale:0>a.scaleY?a.scaleY:0;a.outOfRange="h"==a.opt.orientation?a.outOfRangeX:a.outOfRangeY;a.value="undefined"!=typeof c?
					"h"==a.opt.orientation?a.x>=this.outerWidth()?a.opt.scale:0>=a.x?0:a.scaleX:a.y>=this.outerHeight()?a.opt.scale:0>=a.y?0:a.scaleY:"h"==a.opt.orientation?a.scaleX:a.scaleY;"h"==a.opt.orientation?a.level.width(Math.floor(100*a.x/d)+"%"):a.level.height(Math.floor(100*a.y/e));"function"==typeof a.opt.callback&&a.opt.callback(a)}}};b.fn.simpleSlider=b.simpleSlider.init;b.fn.updateSliderVal=b.simpleSlider.updateSliderVal})(jQuery);
;/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.storage.min.js                                                                                                                   _
 _ last modified: 24/05/15 16.08                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2015. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/

!function(a){a.mbCookie={set:function(a,b,c,d){b=JSON.stringify(b),c||(c=7),d=d?"; domain="+d:"";var f,e=new Date;e.setTime(e.getTime()+1e3*60*60*24*c),f="; expires="+e.toGMTString(),document.cookie=a+"="+b+f+"; path=/"+d},get:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return JSON.parse(e.substring(b.length,e.length))}return null},remove:function(b){a.mbCookie.set(b,"",-1)}},a.mbStorage={set:function(a,b){b=JSON.stringify(b),localStorage.setItem(a,b)},get:function(a){return localStorage[a]?JSON.parse(localStorage[a]):null},remove:function(a){a?localStorage.removeItem(a):localStorage.clear()}}}(jQuery);
;/*! Swipebox v1.4.4 | Constantin Saguin csag.co | MIT License | github.com/brutaldesign/swipebox */
!function(a,b,c,d){c.swipebox=function(e,f){var g,h,i={useCSS:!0,useSVG:!0,initialIndexOnArray:0,removeBarsOnMobile:!0,hideCloseButtonOnMobile:!1,hideBarsDelay:3e3,videoMaxWidth:1140,vimeoColor:"cccccc",beforeOpen:null,afterOpen:null,afterClose:null,afterMedia:null,nextSlide:null,prevSlide:null,loopAtEnd:!1,autoplayVideos:!1,queryStringData:{},toggleClassOnLoad:""},j=this,k=[],l=e.selector,m=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),n=null!==m||b.createTouch!==d||"ontouchstart"in a||"onmsgesturechange"in a||navigator.msMaxTouchPoints,o=!!b.createElementNS&&!!b.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,p=a.innerWidth?a.innerWidth:c(a).width(),q=a.innerHeight?a.innerHeight:c(a).height(),r=0,s='<div id="swipebox-overlay">					<div id="swipebox-container">						<div id="swipebox-slider"></div>						<div id="swipebox-top-bar">							<div id="swipebox-title"></div>						</div>						<div id="swipebox-bottom-bar">							<div id="swipebox-arrows">								<a id="swipebox-prev"></a>								<a id="swipebox-next"></a>							</div>						</div>						<a id="swipebox-close"></a>					</div>			</div>';j.settings={},c.swipebox.close=function(){g.closeSlide()},c.swipebox.extend=function(){return g},j.init=function(){j.settings=c.extend({},i,f),c.isArray(e)?(k=e,g.target=c(a),g.init(j.settings.initialIndexOnArray)):c(b).on("click",l,function(a){if("slide current"===a.target.parentNode.className)return!1;c.isArray(e)||(g.destroy(),h=c(l),g.actions()),k=[];var b,d,f;f||(d="data-rel",f=c(this).attr(d)),f||(d="rel",f=c(this).attr(d)),h=f&&""!==f&&"nofollow"!==f?c(l).filter("["+d+'="'+f+'"]'):c(l),h.each(function(){var a=null,b=null;c(this).attr("title")&&(a=c(this).attr("title")),c(this).attr("href")&&(b=c(this).attr("href")),k.push({href:b,title:a})}),b=h.index(c(this)),a.preventDefault(),a.stopPropagation(),g.target=c(a.target),g.init(b)})},g={init:function(a){j.settings.beforeOpen&&j.settings.beforeOpen(),this.target.trigger("swipebox-start"),c.swipebox.isOpen=!0,this.build(),this.openSlide(a),this.openMedia(a),this.preloadMedia(a+1),this.preloadMedia(a-1),j.settings.afterOpen&&j.settings.afterOpen(a)},build:function(){var a,b=this;c("body").append(s),o&&j.settings.useSVG===!0&&(a=c("#swipebox-close").css("background-image"),a=a.replace("png","svg"),c("#swipebox-prev, #swipebox-next, #swipebox-close").css({"background-image":a})),m&&j.settings.removeBarsOnMobile&&c("#swipebox-bottom-bar, #swipebox-top-bar").remove(),c.each(k,function(){c("#swipebox-slider").append('<div class="slide"></div>')}),b.setDim(),b.actions(),n&&b.gesture(),b.keyboard(),b.animBars(),b.resize()},setDim:function(){var b,d,e={};"onorientationchange"in a?a.addEventListener("orientationchange",function(){0===a.orientation?(b=p,d=q):(90===a.orientation||-90===a.orientation)&&(b=q,d=p)},!1):(b=a.innerWidth?a.innerWidth:c(a).width(),d=a.innerHeight?a.innerHeight:c(a).height()),e={width:b,height:d},c("#swipebox-overlay").css(e)},resize:function(){var b=this;c(a).resize(function(){b.setDim()}).resize()},supportTransition:function(){var a,c="transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");for(a=0;a<c.length;a++)if(b.createElement("div").style[c[a]]!==d)return c[a];return!1},doCssTrans:function(){return j.settings.useCSS&&this.supportTransition()?!0:void 0},gesture:function(){var a,b,d,e,f,g,h=this,i=!1,j=!1,l=10,m=50,n={},o={},q=c("#swipebox-top-bar, #swipebox-bottom-bar"),s=c("#swipebox-slider");q.addClass("visible-bars"),h.setTimeout(),c("body").bind("touchstart",function(h){return c(this).addClass("touching"),a=c("#swipebox-slider .slide").index(c("#swipebox-slider .slide.current")),o=h.originalEvent.targetTouches[0],n.pageX=h.originalEvent.targetTouches[0].pageX,n.pageY=h.originalEvent.targetTouches[0].pageY,c("#swipebox-slider").css({"-webkit-transform":"translate3d("+r+"%, 0, 0)",transform:"translate3d("+r+"%, 0, 0)"}),c(".touching").bind("touchmove",function(h){if(h.preventDefault(),h.stopPropagation(),o=h.originalEvent.targetTouches[0],!j&&(f=d,d=o.pageY-n.pageY,Math.abs(d)>=m||i)){var q=.75-Math.abs(d)/s.height();s.css({top:d+"px"}),s.css({opacity:q}),i=!0}e=b,b=o.pageX-n.pageX,g=100*b/p,!j&&!i&&Math.abs(b)>=l&&(c("#swipebox-slider").css({"-webkit-transition":"",transition:""}),j=!0),j&&(b>0?0===a?c("#swipebox-overlay").addClass("leftSpringTouch"):(c("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),c("#swipebox-slider").css({"-webkit-transform":"translate3d("+(r+g)+"%, 0, 0)",transform:"translate3d("+(r+g)+"%, 0, 0)"})):0>b&&(k.length===a+1?c("#swipebox-overlay").addClass("rightSpringTouch"):(c("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),c("#swipebox-slider").css({"-webkit-transform":"translate3d("+(r+g)+"%, 0, 0)",transform:"translate3d("+(r+g)+"%, 0, 0)"}))))}),!1}).bind("touchend",function(a){if(a.preventDefault(),a.stopPropagation(),c("#swipebox-slider").css({"-webkit-transition":"-webkit-transform 0.4s ease",transition:"transform 0.4s ease"}),d=o.pageY-n.pageY,b=o.pageX-n.pageX,g=100*b/p,i)if(i=!1,Math.abs(d)>=2*m&&Math.abs(d)>Math.abs(f)){var k=d>0?s.height():-s.height();s.animate({top:k+"px",opacity:0},300,function(){h.closeSlide()})}else s.animate({top:0,opacity:1},300);else j?(j=!1,b>=l&&b>=e?h.getPrev():-l>=b&&e>=b&&h.getNext()):q.hasClass("visible-bars")?(h.clearTimeout(),h.hideBars()):(h.showBars(),h.setTimeout());c("#swipebox-slider").css({"-webkit-transform":"translate3d("+r+"%, 0, 0)",transform:"translate3d("+r+"%, 0, 0)"}),c("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),c(".touching").off("touchmove").removeClass("touching")})},setTimeout:function(){if(j.settings.hideBarsDelay>0){var b=this;b.clearTimeout(),b.timeout=a.setTimeout(function(){b.hideBars()},j.settings.hideBarsDelay)}},clearTimeout:function(){a.clearTimeout(this.timeout),this.timeout=null},showBars:function(){var a=c("#swipebox-top-bar, #swipebox-bottom-bar");this.doCssTrans()?a.addClass("visible-bars"):(c("#swipebox-top-bar").animate({top:0},500),c("#swipebox-bottom-bar").animate({bottom:0},500),setTimeout(function(){a.addClass("visible-bars")},1e3))},hideBars:function(){var a=c("#swipebox-top-bar, #swipebox-bottom-bar");this.doCssTrans()?a.removeClass("visible-bars"):(c("#swipebox-top-bar").animate({top:"-50px"},500),c("#swipebox-bottom-bar").animate({bottom:"-50px"},500),setTimeout(function(){a.removeClass("visible-bars")},1e3))},animBars:function(){var a=this,b=c("#swipebox-top-bar, #swipebox-bottom-bar");b.addClass("visible-bars"),a.setTimeout(),c("#swipebox-slider").click(function(){b.hasClass("visible-bars")||(a.showBars(),a.setTimeout())}),c("#swipebox-bottom-bar").hover(function(){a.showBars(),b.addClass("visible-bars"),a.clearTimeout()},function(){j.settings.hideBarsDelay>0&&(b.removeClass("visible-bars"),a.setTimeout())})},keyboard:function(){var b=this;c(a).bind("keyup",function(a){a.preventDefault(),a.stopPropagation(),37===a.keyCode?b.getPrev():39===a.keyCode?b.getNext():27===a.keyCode&&b.closeSlide()})},actions:function(){var a=this,b="touchend click";k.length<2?(c("#swipebox-bottom-bar").hide(),d===k[1]&&c("#swipebox-top-bar").hide()):(c("#swipebox-prev").bind(b,function(b){b.preventDefault(),b.stopPropagation(),a.getPrev(),a.setTimeout()}),c("#swipebox-next").bind(b,function(b){b.preventDefault(),b.stopPropagation(),a.getNext(),a.setTimeout()})),c("#swipebox-close").bind(b,function(){a.closeSlide()})},setSlide:function(a,b){b=b||!1;var d=c("#swipebox-slider");r=100*-a,this.doCssTrans()?d.css({"-webkit-transform":"translate3d("+100*-a+"%, 0, 0)",transform:"translate3d("+100*-a+"%, 0, 0)"}):d.animate({left:100*-a+"%"}),c("#swipebox-slider .slide").removeClass("current"),c("#swipebox-slider .slide").eq(a).addClass("current"),this.setTitle(a),b&&d.fadeIn(),c("#swipebox-prev, #swipebox-next").removeClass("disabled"),0===a?c("#swipebox-prev").addClass("disabled"):a===k.length-1&&j.settings.loopAtEnd!==!0&&c("#swipebox-next").addClass("disabled")},openSlide:function(b){c("html").addClass("swipebox-html"),n?(c("html").addClass("swipebox-touch"),j.settings.hideCloseButtonOnMobile&&c("html").addClass("swipebox-no-close-button")):c("html").addClass("swipebox-no-touch"),c(a).trigger("resize"),this.setSlide(b,!0)},preloadMedia:function(a){var b=this,c=null;k[a]!==d&&(c=k[a].href),b.isVideo(c)?b.openMedia(a):setTimeout(function(){b.openMedia(a)},1e3)},openMedia:function(a){var b,e,f=this;return k[a]!==d&&(b=k[a].href),0>a||a>=k.length?!1:(e=c("#swipebox-slider .slide").eq(a),void(f.isVideo(b)?(e.html(f.getVideo(b)),j.settings.afterMedia&&j.settings.afterMedia(a)):(e.addClass("slide-loading"),f.loadMedia(b,function(){e.removeClass("slide-loading"),e.html(this),j.settings.afterMedia&&j.settings.afterMedia(a)}))))},setTitle:function(a){var b=null;c("#swipebox-title").empty(),k[a]!==d&&(b=k[a].title),b?(c("#swipebox-top-bar").show(),c("#swipebox-title").append(b)):c("#swipebox-top-bar").hide()},isVideo:function(a){if(a){if(a.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||a.match(/vimeo\.com\/([0-9]*)/)||a.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/))return!0;if(a.toLowerCase().indexOf("swipeboxvideo=1")>=0)return!0}},parseUri:function(a,d){var e=b.createElement("a"),f={};return e.href=decodeURIComponent(a),e.search&&(f=JSON.parse('{"'+e.search.toLowerCase().replace("?","").replace(/&/g,'","').replace(/=/g,'":"')+'"}')),c.isPlainObject(d)&&(f=c.extend(f,d,j.settings.queryStringData)),c.map(f,function(a,b){return a&&a>""?encodeURIComponent(b)+"="+encodeURIComponent(a):void 0}).join("&")},getVideo:function(a){var b="",c=a.match(/((?:www\.)?youtube\.com|(?:www\.)?youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/),d=a.match(/(?:www\.)?youtu\.be\/([a-zA-Z0-9\-_]+)/),e=a.match(/(?:www\.)?vimeo\.com\/([0-9]*)/),f="";return c||d?(d&&(c=d),f=g.parseUri(a,{autoplay:j.settings.autoplayVideos?"1":"0",v:""}),b='<iframe width="560" height="315" src="//'+c[1]+"/embed/"+c[2]+"?"+f+'" frameborder="0" allowfullscreen></iframe>'):e?(f=g.parseUri(a,{autoplay:j.settings.autoplayVideos?"1":"0",byline:"0",portrait:"0",color:j.settings.vimeoColor}),b='<iframe width="560" height="315"  src="//player.vimeo.com/video/'+e[1]+"?"+f+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'):b='<iframe width="560" height="315" src="'+a+'" frameborder="0" allowfullscreen></iframe>','<div class="swipebox-video-container" style="max-width:'+j.settings.videoMaxWidth+'px"><div class="swipebox-video">'+b+"</div></div>"},loadMedia:function(a,b){if(0===a.trim().indexOf("#"))b.call(c("<div>",{"class":"swipebox-inline-container"}).append(c(a).clone().toggleClass(j.settings.toggleClassOnLoad)));else if(!this.isVideo(a)){var d=c("<img>").on("load",function(){b.call(d)});d.attr("src",a)}},getNext:function(){var a,b=this,d=c("#swipebox-slider .slide").index(c("#swipebox-slider .slide.current"));d+1<k.length?(a=c("#swipebox-slider .slide").eq(d).contents().find("iframe").attr("src"),c("#swipebox-slider .slide").eq(d).contents().find("iframe").attr("src",a),d++,b.setSlide(d),b.preloadMedia(d+1),j.settings.nextSlide&&j.settings.nextSlide(d)):j.settings.loopAtEnd===!0?(a=c("#swipebox-slider .slide").eq(d).contents().find("iframe").attr("src"),c("#swipebox-slider .slide").eq(d).contents().find("iframe").attr("src",a),d=0,b.preloadMedia(d),b.setSlide(d),b.preloadMedia(d+1),j.settings.nextSlide&&j.settings.nextSlide(d)):(c("#swipebox-overlay").addClass("rightSpring"),setTimeout(function(){c("#swipebox-overlay").removeClass("rightSpring")},500))},getPrev:function(){var a,b=c("#swipebox-slider .slide").index(c("#swipebox-slider .slide.current"));b>0?(a=c("#swipebox-slider .slide").eq(b).contents().find("iframe").attr("src"),c("#swipebox-slider .slide").eq(b).contents().find("iframe").attr("src",a),b--,this.setSlide(b),this.preloadMedia(b-1),j.settings.prevSlide&&j.settings.prevSlide(b)):(c("#swipebox-overlay").addClass("leftSpring"),setTimeout(function(){c("#swipebox-overlay").removeClass("leftSpring")},500))},nextSlide:function(a){},prevSlide:function(a){},closeSlide:function(){c("html").removeClass("swipebox-html"),c("html").removeClass("swipebox-touch"),c(a).trigger("resize"),this.destroy()},destroy:function(){c(a).unbind("keyup"),c("body").unbind("touchstart"),c("body").unbind("touchmove"),c("body").unbind("touchend"),c("#swipebox-slider").unbind(),c("#swipebox-overlay").remove(),c.isArray(e)||e.removeData("_swipebox"),this.target&&this.target.trigger("swipebox-destroy"),c.swipebox.isOpen=!1,j.settings.afterClose&&j.settings.afterClose()}},j.init()},c.fn.swipebox=function(a){if(!c.data(this,"_swipebox")){var b=new c.swipebox(this,a);this.data("_swipebox",b)}return this.data("_swipebox")}}(window,document,jQuery);
;/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);
;
(function ($) {
    'use strict';

    var defaults = {
        slide:                   0,
        delay:                   5000,
        loop:                    true,
        preload:                 false,
        preloadImage:            false,
        preloadVideo:            false,
        timer:                   true,
        overlay:                 false,
        autoplay:                true,
        shuffle:                 false,
        cover:                   true,
        color:                   null,
        align:                   'center',
        valign:                  'center',
        firstTransition:         null,
        firstTransitionDuration: null,
        transition:              'fade',
        transitionDuration:      1000,
        transitionRegister:      [],
        animation:               null,
        animationDuration:       'auto',
        animationRegister:       [],
        init:  function () {},
        play:  function () {},
        pause: function () {},
        walk:  function () {},
        slides: [
            // {
            //  src:                null,
            //  color:              null,
            //  delay:              null,
            //  align:              null,
            //  valign:             null,
            //  transition:         null,
            //  transitionDuration: null,
            //  animation:          null,
            //  animationDuration:  null,
            //  cover:              true,
            //  video: {
            //      src: [],
            //      mute: true,
            //      loop: true
            // }
            // ...
        ]
    };

    var videoCache = {};

    var Vegas = function (elmt, options) {
        this.elmt         = elmt;
        this.settings     = $.extend({}, defaults, $.vegas.defaults, options);
        this.slide        = this.settings.slide;
        this.total        = this.settings.slides.length;
        this.noshow       = this.total < 2;
        this.paused       = !this.settings.autoplay || this.noshow;
        this.ended        = false;
        this.$elmt        = $(elmt);
        this.$timer       = null;
        this.$overlay     = null;
        this.$slide       = null;
        this.timeout      = null;
        this.first        = true;

        this.transitions = [
            'fade', 'fade2',
            'blur', 'blur2',
            'flash', 'flash2',
            'negative', 'negative2',
            'burn', 'burn2',
            'slideLeft', 'slideLeft2',
            'slideRight', 'slideRight2',
            'slideUp', 'slideUp2',
            'slideDown', 'slideDown2',
            'zoomIn', 'zoomIn2',
            'zoomOut', 'zoomOut2',
            'swirlLeft', 'swirlLeft2',
            'swirlRight', 'swirlRight2'
        ];

        this.animations = [
            'kenburns',
            'kenburnsLeft', 'kenburnsRight',
            'kenburnsUp', 'kenburnsUpLeft', 'kenburnsUpRight',
            'kenburnsDown', 'kenburnsDownLeft', 'kenburnsDownRight'
        ];

        if (this.settings.transitionRegister instanceof Array === false) {
            this.settings.transitionRegister = [ this.settings.transitionRegister ];
        }

        if (this.settings.animationRegister instanceof Array === false) {
            this.settings.animationRegister = [ this.settings.animationRegister ];
        }

        this.transitions = this.transitions.concat(this.settings.transitionRegister);
        this.animations  = this.animations.concat(this.settings.animationRegister);

        this.support = {
            objectFit:  'objectFit'  in document.body.style,
            transition: 'transition' in document.body.style || 'WebkitTransition' in document.body.style,
            video:      $.vegas.isVideoCompatible()
        };

        if (this.settings.shuffle === true) {
            this.shuffle();
        }

        this._init();
    };

    Vegas.prototype = {
        _init: function () {
            var $wrapper,
                $overlay,
                $timer,
                isBody  = this.elmt.tagName === 'BODY',
                timer   = this.settings.timer,
                overlay = this.settings.overlay,
                self    = this;

            // Preloading
            this._preload();

            // Wrapper with content
            if (!isBody) {
                this.$elmt.css('height', this.$elmt.css('height'));

                $wrapper = $('<div class="vegas-wrapper">')
                    .css('overflow', this.$elmt.css('overflow'))
                    .css('padding',  this.$elmt.css('padding'));

                // Some browsers don't compute padding shorthand
                if (!this.$elmt.css('padding')) {
                    $wrapper
                        .css('padding-top',    this.$elmt.css('padding-top'))
                        .css('padding-bottom', this.$elmt.css('padding-bottom'))
                        .css('padding-left',   this.$elmt.css('padding-left'))
                        .css('padding-right',  this.$elmt.css('padding-right'));
                }

                this.$elmt.clone(true).children().appendTo($wrapper);
                this.elmt.innerHTML = '';
            }

            // Timer
            if (timer && this.support.transition) {
                $timer = $('<div class="vegas-timer"><div class="vegas-timer-progress">');
                this.$timer = $timer;
                this.$elmt.prepend($timer);
            }

            // Overlay
            if (overlay) {
                $overlay = $('<div class="vegas-overlay">');

                if (typeof overlay === 'string') {
                    $overlay.css('background-image', 'url(' + overlay + ')');
                }

                this.$overlay = $overlay;
                this.$elmt.prepend($overlay);
            }

            // Container
            this.$elmt.addClass('vegas-container');

            if (!isBody) {
                this.$elmt.append($wrapper);
            }

            setTimeout(function () {
                self.trigger('init');
                self._goto(self.slide);

                if (self.settings.autoplay) {
                    self.trigger('play');
                }
            }, 1);
        },

        _preload: function () {
            var img, i;

            for (i = 0; i < this.settings.slides.length; i++) {
                if (this.settings.preload || this.settings.preloadImages) {
                    if (this.settings.slides[i].src) {
                        img = new Image();
                        img.src = this.settings.slides[i].src;
                    }
                }

                if (this.settings.preload || this.settings.preloadVideos) {
                    if (this.support.video && this.settings.slides[i].video) {
                        if (this.settings.slides[i].video instanceof Array) {
                            this._video(this.settings.slides[i].video);
                        } else {
                            this._video(this.settings.slides[i].video.src);
                        }
                    }
                }
            }
        },

        _random: function (array) {
            return array[Math.floor(Math.random() * array.length)];
        },

        _slideShow: function () {
            var self = this;

            if (this.total > 1 && !this.ended && !this.paused && !this.noshow) {
                this.timeout = setTimeout(function () {
                    self.next();
                }, this._options('delay'));
            }
        },

        _timer: function (state) {
            var self = this;

            clearTimeout(this.timeout);

            if (!this.$timer) {
                return;
            }

            this.$timer
                .removeClass('vegas-timer-running')
                    .find('div')
                        .css('transition-duration', '0ms');

            if (this.ended || this.paused || this.noshow) {
                return;
            }

            if (state) {
                setTimeout(function () {
                   self.$timer
                    .addClass('vegas-timer-running')
                        .find('div')
                            .css('transition-duration', self._options('delay') - 100 + 'ms');
                }, 100);
            }
        },

        _video: function (srcs) {
            var video,
                source,
                cacheKey = srcs.toString();

            if (videoCache[cacheKey]) {
                return videoCache[cacheKey];
            }

            if (srcs instanceof Array === false) {
                srcs = [ srcs ];
            }

            video = document.createElement('video');
            video.preload = true;

            srcs.forEach(function (src) {
                source = document.createElement('source');
                source.src = src;
                video.appendChild(source);
            });

            videoCache[cacheKey] = video;

            return video;
        },

        _fadeOutSound: function (video, duration) {
            var self   = this,
                delay  = duration / 10,
                volume = video.volume - 0.09;

            if (volume > 0) {
                video.volume = volume;

                setTimeout(function () {
                    self._fadeOutSound(video, duration);
                }, delay);
            } else {
                video.pause();
            }
        },

        _fadeInSound: function (video, duration) {
            var self   = this,
                delay  = duration / 10,
                volume = video.volume + 0.09;

            if (volume < 1) {
                video.volume = volume;

                setTimeout(function () {
                    self._fadeInSound(video, duration);
                }, delay);
            }
        },

        _options: function (key, i) {
            if (i === undefined) {
                i = this.slide;
            }

            if (this.settings.slides[i][key] !== undefined) {
                return this.settings.slides[i][key];
            }

            return this.settings[key];
        },

        _goto: function (nb) {
            if (typeof this.settings.slides[nb] === 'undefined') {
                nb = 0;
            }

            this.slide = nb;

            var $slide,
                $inner,
                $video,
                $slides       = this.$elmt.children('.vegas-slide'),
                src           = this.settings.slides[nb].src,
                videoSettings = this.settings.slides[nb].video,
                delay         = this._options('delay'),
                align         = this._options('align'),
                valign        = this._options('valign'),
                cover         = this._options('cover'),
                color         = this._options('color') || this.$elmt.css('background-color'),
                self          = this,
                total         = $slides.length,
                video,
                img;

            var transition         = this._options('transition'),
                transitionDuration = this._options('transitionDuration'),
                animation          = this._options('animation'),
                animationDuration  = this._options('animationDuration');

            if (this.settings.firstTransition && this.first) {
                transition = this.settings.firstTransition || transition;
            }

            if (this.settings.firstTransitionDuration && this.first) {
                transitionDuration = this.settings.firstTransitionDuration || transitionDuration;
            }

            if (this.first) {
                this.first = false;
            }

            if (cover !== 'repeat') {
                if (cover === true) {
                    cover = 'cover';
                } else if (cover === false) {
                    cover = 'contain';
                }
            }

            if (transition === 'random' || transition instanceof Array) {
                if (transition instanceof Array) {
                    transition = this._random(transition);
                } else {
                    transition = this._random(this.transitions);
                }
            }

            if (animation === 'random' || animation instanceof Array) {
                if (animation instanceof Array) {
                    animation = this._random(animation);
                } else {
                    animation = this._random(this.animations);
                }
            }

            if (transitionDuration === 'auto' || transitionDuration > delay) {
                transitionDuration = delay;
            }

            if (animationDuration === 'auto') {
                animationDuration = delay;
            }

            $slide = $('<div class="vegas-slide"></div>');

            if (this.support.transition && transition) {
                $slide.addClass('vegas-transition-' + transition);
            }

            // Video

            if (this.support.video && videoSettings) {
                if (videoSettings instanceof Array) {
                    video = this._video(videoSettings);
                } else {
                    video = this._video(videoSettings.src);
                }

                video.loop  = videoSettings.loop !== undefined ? videoSettings.loop : true;
                video.muted = videoSettings.mute !== undefined ? videoSettings.mute : true;

                if (video.muted === false) {
                    video.volume = 0;
                    this._fadeInSound(video, transitionDuration);
                } else {
                    video.pause();
                }

                $video = $(video)
                    .addClass('vegas-video')
                    .css('background-color', color);

                if (this.support.objectFit) {
                    $video
                        .css('object-position', align + ' ' + valign)
                        .css('object-fit', cover)
                        .css('width',  '100%')
                        .css('height', '100%');
                } else if (cover === 'contain') {
                    $video
                        .css('width',  '100%')
                        .css('height', '100%');
                }

                $slide.append($video);

            // Image

            } else {
                img = new Image();

                $inner = $('<div class="vegas-slide-inner"></div>')
                    .css('background-image',    'url("' + src + '")')
                    .css('background-color',    color)
                    .css('background-position', align + ' ' + valign);

                if (cover === 'repeat') {
                    $inner.css('background-repeat', 'repeat');
                } else {
                    $inner.css('background-size', cover);
                }

                if (this.support.transition && animation) {
                    $inner
                        .addClass('vegas-animation-' + animation)
                        .css('animation-duration',  animationDuration + 'ms');
                }

                $slide.append($inner);
            }

            if (!this.support.transition) {
                $slide.css('display', 'none');
            }

            if (total) {
                $slides.eq(total - 1).after($slide);
            } else {
                this.$elmt.prepend($slide);
            }

            $slides
                .css('transition', 'all 0ms')
                .each(function () {
                    this.className  = 'vegas-slide';

                    if (this.tagName === 'VIDEO') {
                        this.className += ' vegas-video';    
                    }

                    if (transition) {
                        this.className += ' vegas-transition-' + transition;
                        this.className += ' vegas-transition-' + transition + '-in';
                    }
                }
            );

            self._timer(false);

            function go () {
                self._timer(true);

                setTimeout(function () {
                    if (transition) {
                        if (self.support.transition) {
                            $slides
                                .css('transition', 'all ' + transitionDuration + 'ms')
                                .addClass('vegas-transition-' + transition + '-out');

                            $slides.each(function () {
                                var video = $slides.find('video').get(0);

                                if (video) {
                                    video.volume = 1;
                                    self._fadeOutSound(video, transitionDuration);
                                }
                            });

                            $slide
                                .css('transition', 'all ' + transitionDuration + 'ms')
                                .addClass('vegas-transition-' + transition + '-in');
                        } else {
                            $slide.fadeIn(transitionDuration);
                        }
                    }

                    for (var i = 0; i < $slides.length - 4; i++) {
                         $slides.eq(i).remove();
                    }

                    self.trigger('walk');
                    self._slideShow();
                }, 100);
            }
            if (video) {
                if (video.readyState === 4) {
                    video.currentTime = 0;
                }

                video.play();
                go();
            } else {
                img.src = src;

                if (img.complete) {
                    go();
                } else {
                    img.onload = go;
                }
            }
        },

        _end: function () {
            this.ended = true;
            this._timer(false);
            this.trigger('end');
        },

        shuffle: function () {
            var temp,
                rand;

            for (var i = this.total - 1; i > 0; i--) {
                rand = Math.floor(Math.random() * (i + 1));
                temp = this.settings.slides[i];

                this.settings.slides[i] = this.settings.slides[rand];
                this.settings.slides[rand] = temp;
            }
        },

        play: function () {
            if (this.paused) {
                this.paused = false;
                this.next();
                this.trigger('play');
            }
        },

        pause: function () {
            this._timer(false);
            this.paused = true;
            this.trigger('pause');
        },

        toggle: function () {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        },

        playing: function () {
            return !this.paused && !this.noshow;
        },

        current: function (advanced) {
            if (advanced) {
                return {
                    slide: this.slide,
                    data:  this.settings.slides[this.slide]
                };
            }
            return this.slide;
        },

        jump: function (nb) {
            if (nb < 0 || nb > this.total - 1 || nb === this.slide) {
                return;
            }

            this.slide = nb;
            this._goto(this.slide);
        },

        next: function () {
            this.slide++;

            if (this.slide >= this.total) {
                if (!this.settings.loop) {
                    return this._end();
                }

                this.slide = 0;
            }

            this._goto(this.slide);
        },

        previous: function () {
            this.slide--;

            if (this.slide < 0) {
                if (!this.settings.loop) {
                    this.slide++;
                    return;
                } else {
                    this.slide = this.total - 1;
                }
            }

            this._goto(this.slide);
        },

        trigger: function (fn) {
            var params = [];

            if (fn === 'init') {
                params = [ this.settings ];
            } else {
                params = [
                    this.slide,
                    this.settings.slides[this.slide]
                ];
            }

            this.$elmt.trigger('vegas' + fn, params);

            if (typeof this.settings[fn] === 'function') {
                this.settings[fn].apply(this.$elmt, params);
            }
        },

        options: function (key, value) {
            var oldSlides = this.settings.slides.slice();

            if (typeof key === 'object') {
                this.settings = $.extend({}, defaults, $.vegas.defaults, key);
            } else if (typeof key === 'string') {
                if (value === undefined) {
                    return this.settings[key];
                }
                this.settings[key] = value;
            } else {
                return this.settings;
            }

            // In case slides have changed
            if (this.settings.slides !== oldSlides) {
                this.total  = this.settings.slides.length;
                this.noshow = this.total < 2;
                this._preload();
            }
        },

        destroy: function () {
            clearTimeout(this.timeout);

            this.$elmt.removeClass('vegas-container');
            this.$elmt.find('> .vegas-slide').remove();
            this.$elmt.find('> .vegas-wrapper').clone(true).children().appendTo(this.$elmt);
            this.$elmt.find('> .vegas-wrapper').remove();

            if (this.settings.timer) {
                this.$timer.remove();
            }

            if (this.settings.overlay) {
                this.$overlay.remove();
            }

            this.elmt._vegas = null;
        }
    };

    $.fn.vegas = function(options) {
        var args = arguments,
            error = false,
            returns;

        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!this._vegas) {
                    this._vegas = new Vegas(this, options);
                }
            });
        } else if (typeof options === 'string') {
            this.each(function () {
                var instance = this._vegas;

                if (!instance) {
                    throw new Error('No Vegas applied to this element.');
                }

                if (typeof instance[options] === 'function' && options[0] !== '_') {
                    returns = instance[options].apply(instance, [].slice.call(args, 1));
                } else {
                    error = true;
                }
            });

            if (error) {
                throw new Error('No method "' + options + '" in Vegas.');
            }

            return returns !== undefined ? returns : this;
        }
    };

    $.vegas = {};
    $.vegas.defaults = defaults;

    $.vegas.isVideoCompatible = function () {
        return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent);
    };

})(window.jQuery || window.Zepto);
;(function($){
"use strict";

var homeHeaderHor = $('.home-nav .home-block header h1');

function setFontSize() {
	$('.header-hor').each(function(i, el){
		var $header = $(this).find('h1');
		if($header.parent().parent().hasClass('fixed-size')) {
			return ;
		}
		var $block = $(this).parents('.home-block');
		var fontSize = parseInt($header.css('fontSize'));
		var newFontSize = $header.width() / fontSize;
		newFontSize = ($block.width() - 60) / newFontSize;
		$header.css('fontSize', newFontSize);
	});

	$('.ver_left').each(function(i, el){
		var $header = $(this).find('h1');
		var $block = $(this).parents('.home-block');
		var fontSize = parseInt($header.css('fontSize'));

		var newFontSize = $header.width() / fontSize;
		newFontSize = ($block.height() - 60) / newFontSize;
		$header.parent().css('width', newFontSize);
		if($header.parent().parent().hasClass('fixed-size')) {
			return ;
		}
		$header.css('fontSize', newFontSize);
	});
}

function moveDownContent() {
	$('.hor_bottom').each(function(){
		var $headerBottom = $(this),
			headerHeight = $headerBottom.height(),
			containerHeight = $headerBottom.parent().height(),
			posTop = containerHeight - headerHeight;

			$headerBottom.css('top', posTop);
	});
	$('.hor_middle').each(function(){
		var $headerMiddle = $(this),
			headerHeight = $headerMiddle.height()/2;
			$headerMiddle.css('top', '50%');
			if(!$headerMiddle.hasClass('header-ver') && $headerMiddle.find('.logo').length === 0) {
				$headerMiddle.css('margin-top', -headerHeight);
			}
	});
}

function initHomeSlider() {
	var transition = $('.home-bg-slider').data('transition');
	var delay = $('.home-bg-slider').data('delay');
	var auto = $('.home-bg-slider').data('auto');
	var transitionDuration = $('.home-bg-slider').data('transitionDuration');

	var slides = [];
	$('.single-slide').each(function(){
		var slide = $(this).data('slide');
		slides.push({'src' : slide});
	});

	$('.home-slider-container' ).vegas({
		delay: delay,
		firstTransition: 'none',
		transition: transition,
		transitionDuration: transitionDuration,
		autoplay: auto,
		timer: false,
		slides: slides,
		walk: function (index, slideSettings) {
			if($('.home-bg-slider').hasClass('autoplay')) {
				$('.home-bg-slider .dot').removeClass('active');
				$('.home-bg-slider .dot:eq('+index+')').addClass('active');

			}
	    }
	});

	$('.home-bg-slider').on('click', '.dot', function(){
		$('.home-bg-slider .dot.active').removeClass('active');
		$('.home-slider-container').vegas('jump', $(this).index());
		$(this).addClass('active');
	});
}

function initHomeVideo() {
	$( '.swipebox-video' ).swipebox();
	$(".player").each(function(i, el) {
		var player = {};
		$(el).mb_YTPlayer();
		player.el = $(el);
		player.container = $(el).parents('.homepage');

		$(el).on('YTPReady', function(){
			if($('.home-video-controls').hasClass('show-pause')) {
				player.container.find(".home-video-controls .pause").velocity('fadeIn');
			} else {
				player.container.find(".home-video-controls .play").velocity('fadeIn');
			}
			
		});
		if (!window.mobile && !window.ipad) {
			player.container.find(".home-video-controls .pause").click(function() {
				player.el.pauseYTP();
				player.container.find(".home-video-controls .pause").velocity('fadeOut');
				player.container.find(".home-video-controls .play").velocity('fadeIn');
			});

			player.container.find(".home-video-controls .play").click(function() {
				player.el.playYTP();
				player.container.find(".home-video-controls .play").velocity('fadeOut');
				player.container.find(".home-video-controls .pause").velocity('fadeIn');
			});
			$('.home-mobile-video-control').addClass('hide-for-xlarge');
			$('.player').parent().addClass('show-for-xlarge');
		} else {
			player.container.find('.home-mobile-video-control').removeClass('hide-for-xlarge');
			$('.player').parent().hide();

		}
	});
}

function setBgMobileHome() {
	$('.homepage .home-mobile-bg .home-bg-img').height('');
	// if($(window).width() >= 640 && $(window).width() < 1200) {
	// 	var elHeight = 0;
	// 	$('.home-block').height('auto');
	// 	$('.home-block').each(function(){
	// 		var $that = $(this);
	// 		if($that.height() > elHeight) {
	// 			elHeight = $that.height();
	// 		}
	// 	});
	// 	$('.home-block').height(elHeight);
	// 	$('.homepage').each(function(){
	// 		var pageHeight = $(this).height();
	// 		$(this).find('.home-mobile-bg .home-bg-img').height(pageHeight);
	// 	});
	// } 
	// if($(window).width() < 640) {
	// 	$('.home-block').height('auto');
	// 	$('.homepage').each(function(){
	// 		var pageHeight = $(this).height();
	// 		$(this).find('.home-mobile-bg .home-bg-img').height(pageHeight);
	// 	});
	// }
	if($(window).width() >= 1200) {
		$('.home-block').height('');
	}
}

function showLightboxGalleryPost() {
	$('.gallery .gallery-item a').each(function(i, el){
		var $that = $(this);
		var hrefValue = el.href;
		if (/\.(jpg|png|gif|jpeg)$/.test(hrefValue)) {
			$that.addClass('swipebox');
		} 
	});
}

function fixHomeFooter() {
	$('.homepage').each(function(){
		var $that = $(this);
		if($that.outerHeight() < $(window).outerHeight()) {
			$('.home-footer').addClass('home-footer-fixed')
		} else {
			$('.home-footer').removeClass('home-footer-fixed');
		}
	});
	if($(window).outerWidth() < 1200) {
		$('.home-footer').addClass('mobile-home-footer');
	} else {
		$('.home-footer').removeClass('mobile-home-footer');
	}
}
$(document).ready(function(){
	$('.more-link').parent().addClass('clearfix');
})

$(window).on('load', function(){
	initHomeSlider();
	initHomeVideo();
	setBgMobileHome();
	moveDownContent();
	fixHomeFooter();
	showLightboxGalleryPost();
	$('.gallery .swipebox').swipebox({});
	$('#loading-mask').velocity({opacity: 0}, {display: 'none', duration: 400, complete: function(){
		$(window).trigger('ready-to-show');
	}});
	$('.page-numbers.current').on('click', function(e){
		e.preventDefault();
	});
	$('.home-separator-bottom').prependTo('.home-nav.home-content');

});


$(window).on('load', function(){
	if(window.fontLoaded === false) {
		$(window).on('fontLoaded', function(){
			if($(window).width() >= 1200) {
				setFontSize();
				moveDownContent();
			}
		});
	} else {
		if($(window).width() >= 1200) {
			setFontSize();
			moveDownContent();
		}
	}
});

$(window).on('resize', function(){
	if($(window).width() >= 1200) {
		setFontSize();
	}
	moveDownContent();
	setBgMobileHome();
	fixHomeFooter();
});

})(jQuery);

;(function($){
"use strict";

	if($('.gallery-container').length === 0) {
			return;
		}

	initGallery();
	$('.gallery-container .gallery-item').addClass('item-visible');

	function initGallery() {
		var $grid = $('.gallery-container');
		$grid.isotope({
			itemSelector: '.gallery-item',
			columnWidth: '.gallery-grid-sizer',
			percentPosition: true,
			hiddenStyle: {
				opacity: 0,
			},
			visibleStyle: {
				opacity: 1,
			}
		});

		$grid.imagesLoaded().done( function() {
			$('.gallery-container .gallery-item').addClass('item-visible');
			$grid.isotope('layout');
		});
	}
	var canClick = true;
	$('.gallery-content').on('click', '.gallery-load-more', function(e){
		e.preventDefault();
		if(canClick === false) {
			return;
		}
		canClick = false;
		var ready = false;
		
		var $that = $(this);
		var $parent = $that.parent();
		$parent.velocity({opacity: 0}, 400, function(){
			ready = true;
			$('.page-wrapper').trigger('galleryLoadMore');
		});
		$.get(this.href, function(response){
			if(ready === true) {
				$that.remove();
				insertContent(response);
			} else {
				$('.page-wrapper').on('galleryLoadMore', function(){
					$that.remove();
					insertContent(response);
				});
			}
		});
	});

	function insertContent(response) {
		var $grid = $('.gallery-container');
		var loadMore = $(response).find('.gallery-load-more-wrapper').html();
		response = $(response).find('.gallery-container').html();
		var $response = $(response);
		$grid.append($response);
		$('.page-wrapper').off('galleryLoadMore');

		$grid.imagesLoaded().done( function() {
			$grid.isotope('appended', $response);
			$('.gallery-container .gallery-item').not('.gallery-item-visible').addClass('item-visible');
			if(typeof loadMore === "undefined") {
				$('.gallery-load-more-wrapper').remove();
			} else {
				$('.gallery-load-more-wrapper').html(loadMore).velocity({opacity: 1});
			}
		});

	}

	$(document).ready(function(){
		initGallery();
		$('.apetita-gallery .swipebox').swipebox({

		});
	});

})(jQuery);
;(function($){
	'use strict';
	$(document).ready(function () {
		var menuImageUpdate = function( item_id, thumb_id ) {
			wp.media.post( 'set-menu-item-thumbnail', {
				json:         true,
				post_id:      item_id,
				thumbnail_id: thumb_id,
				_wpnonce:     menuImage.settings.nonce
			}).done( function( html ) {
				$('.menu-item-images', '#menu-item-' + item_id).html( html );
			});
		};

		$('#menu-to-edit')
			.on('click', '.menu-item .set-post-thumbnail', function (e) {
				e.preventDefault();
				e.stopPropagation();

				var item_id = $(this).parents('.field-image').siblings('input.menu-item-data-db-id').val(),
					uploader = wp.media({
						title: menuImage.l10n.uploaderTitle, // todo: translate
						button: { text: menuImage.l10n.uploaderButtonText },
						multiple: false
					}).on('select', function () {
						var attachment = uploader.state().get('selection').first().toJSON();
						menuImageUpdate( item_id, attachment.id);
					}).open();
			})
			.on('click', '.menu-item .remove-post-thumbnail', function (e) {
				e.preventDefault();
				e.stopPropagation();

				var item_id = $(this).parents('.field-image').siblings('input.menu-item-data-db-id').val();
				menuImageUpdate( item_id, -1);
			});
	});
})(jQuery);
  
;(function($){
"use strict";

function initMasonry() {
	var $grid = $('.menu-masonry-container');
	$grid.on( 'layoutComplete', function(event, laidOutItems) {
		$('.menu-masonry-container .column-left').removeClass('column-left');
		$('.menu-masonry-container .column-right').removeClass('column-right');
		$('.menu-masonry-container .grid-item').each(function(){
			var $that = $(this),
			offset = $that.offset(),
			containerOffset = $that.parent().offset();

			if(offset.left > containerOffset.left) {
				$that.addClass('column-right');
			} else {
				$that.addClass('column-left');
			}
		});
		$('.menu-masonry-container .column-left').last().css('border-bottom-style', 'none').prevAll('.column-left').css('border-bottom-style', 'solid');
		$('.menu-masonry-container .column-right').last().css('border-bottom-style', 'none').prevAll('.column-right').css('border-bottom-style', 'solid');
	});
	$grid.isotope({
		itemSelector: '.menu-category',
		columnWidth: '.grid-sizer',
		gutter: 0,
		percentPosition: true,

	});
	var filterFns = {
	  // show if number is greater than 50
	  numberGreaterThan50: function() {
	    var number = $(this).find('.number').text();
	    return parseInt( number, 10 ) > 50;
	  },
	  // show if name ends with -ium
	  ium: function() {
	    var name = $(this).find('.name').text();
	    return name.match( /ium$/ );
	  }
	};
	$('.menu-grid-filters').on( 'click', 'a', function(e) {
		e.preventDefault();
		var filterValue = $(this).parent().attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[ filterValue ] || filterValue;
		$grid.isotope({ filter: filterValue });
		if(filterValue !== '*') {
			$('.menu-masonry-container .menu-category').addClass('no-border');
		} else {
			$('.menu-masonry-container .menu-category').removeClass('no-border');
		}
		
	});
	$('.menu-grid-filters').each( function( i, buttonGroup ) {
	  var $buttonGroup = $(buttonGroup);
	  $buttonGroup.on( 'click', 'a', function(e) {
	  	e.preventDefault();
	    $buttonGroup.parent().find('.active').removeClass('active');
	    $(this).parent().addClass('active');
	  });
	});
}

function initMasonry2() {
	var $grid = $('.menu-masonry-container2');
	$grid.isotope({
		itemSelector: '.menu-category',
		columnWidth: '.grid-sizer',
		gutter: 0,
		percentPosition: true,

	});
	var filterFns = {
	  // show if number is greater than 50
	  numberGreaterThan50: function() {
	    var number = $(this).find('.number').text();
	    return parseInt( number, 10 ) > 50;
	  },
	  // show if name ends with -ium
	  ium: function() {
	    var name = $(this).find('.name').text();
	    return name.match( /ium$/ );
	  }
	};
	$('.menu-sidebar-filters').on( 'click', 'a', function(e) {
		e.preventDefault();
		var filterValue = $(this).parent().attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[ filterValue ] || filterValue;
		$grid.isotope({ filter: filterValue });
		if(filterValue === '*') {
			$('.menu-category').css('border-bottom-style', 'solid');
		} else {
			$('.menu-category').css('border-bottom-style', 'none');
		}
		
	});
	$('.menu-sidebar-filters').each( function( i, buttonGroup ) {
	  var $buttonGroup = $(buttonGroup);
	  $buttonGroup.on( 'click', 'a', function(e) {
	  	e.preventDefault();
	    $buttonGroup.parent().find('.active').removeClass('active');
	    $(this).parent().addClass('active');
	  });
	});
}

$(document).ready(function(){
	initMasonry();
	initMasonry2();
});

})(jQuery);

;(function($){
	'use strict';
	var navOverlay = false;
	$('.nav-more').on('click', 'a', function(e){
		e.preventDefault();
		$('body').removeClass('mobile-nav-active');
	
		$('.nav-overlay').velocity('fadeIn');
		$('.navigation-overlay').velocity('fadeIn');
		$('.transition-wrapper').addClass('blurred');
		
	});
	$('.mobile-nav-top').on('click', '.mobile-burger', function(){
		$('.mobile-overlay').velocity('fadeIn');
		$('.mobile-nav-overlay').velocity('fadeIn');
		$('.transition-wrapper').addClass('blurred');
		$('body').addClass('mobile-nav-active');
	});

	$('.nav-overlay').on('click', function(){
		$('.nav-overlay').velocity('fadeOut');
		$('.navigation-overlay').velocity('fadeOut');
		$('.transition-wrapper').removeClass('blurred');
		$('body').removeClass('mobile-nav-active');
	});
	$('.close-nav').on('click', 'a', function(e){
		e.preventDefault();
		$('.nav-overlay').velocity('fadeOut');
		$('.navigation-overlay').velocity('fadeOut');
		$('.transition-wrapper').removeClass('blurred');
		$('body').removeClass('mobile-nav-active');
	});
	$(document).ready(function(){
		bindOverlay();
	});

	function bindOverlay() {
		var easing = [0.645, 0.045, 0.355, 1];

		$('.navigation-overlay .menu-item-has-children > a').prepend('<span class="overlay-children-icon"><i class="">+</i></span> ');
		$('.navigation-overlay .dropdown').prepend('<li class="overlay-back"><a href="#">Back</a></li>');

		$('.navigation-overlay .menu-item-has-children > a').click(function(e){
			e.preventDefault();
			var $that = $(this);
	
			$that.parent().parent().find('> li > a').velocity({ translateX: -200, opacity: 0}, {display: 'none', easing: easing});
			$('.navigation-overlay .submenu-active').removeClass('submenu-active');
			$that.next('.dropdown').addClass('submenu-active');
			$that.next('.dropdown').find('> li > a').velocity({ translateX: [0, 200], opacity: 1}, {display: 'inline-block', easing: easing, complete: function(){
				$that.next('.dropdown').css('position', 'relative');
			}});
			var currentText = '';
			
			if($that.parent().parent().find('> li > a > .overlay-back-header').length > 0) {
				$that.parent().parent().find('> li > a > .overlay-back-header').each(function(){
					currentText += $(this).prop('outerHTML');
				});
			}
		});
		$('.navigation-overlay').on('click', '.overlay-back', function(e){
			e.preventDefault();
			var $that = $(this);
			$that.parent().css('position', 'absolute');
			$that.find('a').velocity({ translateX: 200, opacity: 0}, {display: 'none', easing: easing});
			$that.siblings().find('a').velocity({ translateX: 200, opacity: 0}, {display: 'none', easing: easing});

			$('.navigation-overlay .submenu-active').removeClass('submenu-active');
			$that.parent().parent().parent().addClass('submenu-active');

			$that.parent().parent().parent().find('> li > a').velocity({translateX : 0, opacity: 1}, {display: 'inline-block', easing: easing });
		});
	}
})(jQuery);
;(function($){
"use strict";

$(document).ready(function(){
	$('.rtb-booking-form fieldset label').each(function(){
		var $label = $(this);
		var labelText = $label.text();
		labelText = $.trim(labelText);
		$label.siblings().attr('placeholder', labelText);
	});
	$('.rtb-booking-form .rtb-select label').each(function(){
		var $label = $(this);
		var labelText = $label.text();
		labelText = $.trim(labelText);
		$label.siblings().prepend('<option selected value="">'+labelText+'</option>');
	});

	$('.rtb-booking-form .rtb-error').parents('.rtb-booking-form').parent().append('<div class="error-block"></div>');

	$('.rtb-booking-form .rtb-error').appendTo('.error-block');

});

})(jQuery);

;(function($) {
	'use strict';
	var sharer = {
		socials: {
			'facebook': 'https://www.facebook.com/sharer/sharer.php?u={url}',
			'twitter': 'https://www.twitter.com/share?text={title}',
			'google+': 'https://plus.google.com/share?url={url}',
			'tumblr': 'http://www.tumblr.com/share/link?url={url}&name={title}&description={desc}',
			'pinterest': 'https://pinterest.com/pin/create/bookmarklet/?media={img}&url={url}&is_video=0&description={title}',
		},
		init: function() {
			var that = this;
			$('body').on('click', 'a.social-share', function(e) {
				e.preventDefault();
				var winHeight = 300;
				var winWidth = 500;
				var winTop = (screen.height / 2) - (winHeight / 2);
				var winLeft = (screen.width / 2) - (winWidth / 2);
				window.open(this.href, this.title, 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
			});

			$('body').on('click', 'a.social-share-self', function(e) {
				e.preventDefault();
				var winHeight = 300;
				var winWidth = 500;
				var winTop = (screen.height / 2) - (winHeight / 2);
				var winLeft = (screen.width / 2) - (winWidth / 2);
				var url = window.location.href;
				var title = document.title;
				var desc = '';
				if($('meta[property="og:description"]').length > 0) {
					desc = $('meta[property="og:description"]').attr('content');
				}
				var img = '';
				if($('meta[property="og:image"]').length > 0) {
					img = $('meta[property="og:image"]').attr('content');
				}
				var social = $(this).data('social');

				social = that.socials[social].replace("{url}", encodeURI(url))
						.replace('{title}', title)
						.replace('{desc}', desc)
						.replace('{img}', img);
				window.open(social, this.title, 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
			});

		},
	};

	sharer.init();
})(jQuery);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb3dzZXIuanMiLCJqcXVlcnkudmVsb2NpdHkubWluLmpzIiwiaXNvdG9wZS5wa2dkLmpzIiwiaW1hZ2VzbG9hZGVkLnBrZ2QuanMiLCJqcXVlcnkubWIuWVRQbGF5ZXIuanMiLCJqcXVlcnkuc3dpcGVib3gubWluLmpzIiwianF1ZXJ5LmJhLXRocm90dGxlLWRlYm91bmNlLm1pbi5qcyIsInZlZ2FzLmpzIiwiYXBwLmpzIiwiZ2FsbGVyeS5qcyIsIm1lbnUtc2VsZWN0LWJsb2NrLmpzIiwibWVudS5qcyIsIm5hdi1vdmVybGF5LmpzIiwicmVzZXJ2YXRpb24uanMiLCJzaGFyZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0NyQkE7QUFDQTtBQUNBO0FBQ0E7Q0NIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQzVrSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0N0ZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQzFoRUE7QUFDQTtDQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0NodUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0NyT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0NwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0N6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0N4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwZXRpdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCl7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdC8qKlxuXHQgKiBqUXVlcnkuYnJvd3Nlci5tb2JpbGUgKGh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2VyLmNvbS8pXG5cdCoqL1xuXG5cdChmdW5jdGlvbihhKSB7XG5cdFx0KCQuYnJvd3NlciA9ICQuYnJvd3NlciB8fCB7fSkubW9iaWxlID0gLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKTtcblx0fSkobmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYSk7XG5cblx0KGZ1bmN0aW9uKGEpIHtcblx0XHQoJC5icm93c2VyID0gJC5icm93c2VyIHx8IHt9KS5pcGFkID0gL2lwYWQvaS50ZXN0KGEpO1xuXHR9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcblxuXHR2YXIgbW9iaWxlID0gJC5icm93c2VyLm1vYmlsZTtcblx0dmFyIGlwYWQgPSAkLmJyb3dzZXIuaXBhZDtcblx0d2luZG93Lm1vYmlsZSA9IG1vYmlsZTtcblx0d2luZG93LmlwYWQgPSBpcGFkO1xuXG5cdFxufSkoalF1ZXJ5KTsiLCIvKiEgVmVsb2NpdHlKUy5vcmcgKDEuMi4zKS4gKEMpIDIwMTQgSnVsaWFuIFNoYXBpcm8uIE1JVCBAbGljZW5zZTogZW4ud2lraXBlZGlhLm9yZy93aWtpL01JVF9MaWNlbnNlICovXG4vKiEgVmVsb2NpdHlKUy5vcmcgalF1ZXJ5IFNoaW0gKDEuMC4xKS4gKEMpIDIwMTQgVGhlIGpRdWVyeSBGb3VuZGF0aW9uLiBNSVQgQGxpY2Vuc2U6IGVuLndpa2lwZWRpYS5vcmcvd2lraS9NSVRfTGljZW5zZS4gKi9cbiFmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe3ZhciBiPWEubGVuZ3RoLGQ9Yy50eXBlKGEpO3JldHVyblwiZnVuY3Rpb25cIj09PWR8fGMuaXNXaW5kb3coYSk/ITE6MT09PWEubm9kZVR5cGUmJmI/ITA6XCJhcnJheVwiPT09ZHx8MD09PWJ8fFwibnVtYmVyXCI9PXR5cGVvZiBiJiZiPjAmJmItMSBpbiBhfWlmKCFhLmpRdWVyeSl7dmFyIGM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IGMuZm4uaW5pdChhLGIpfTtjLmlzV2luZG93PWZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT1hLndpbmRvd30sYy50eXBlPWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9lW2cuY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGMuaXNBcnJheT1BcnJheS5pc0FycmF5fHxmdW5jdGlvbihhKXtyZXR1cm5cImFycmF5XCI9PT1jLnR5cGUoYSl9LGMuaXNQbGFpbk9iamVjdD1mdW5jdGlvbihhKXt2YXIgYjtpZighYXx8XCJvYmplY3RcIiE9PWMudHlwZShhKXx8YS5ub2RlVHlwZXx8Yy5pc1dpbmRvdyhhKSlyZXR1cm4hMTt0cnl7aWYoYS5jb25zdHJ1Y3RvciYmIWYuY2FsbChhLFwiY29uc3RydWN0b3JcIikmJiFmLmNhbGwoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpKXJldHVybiExfWNhdGNoKGQpe3JldHVybiExfWZvcihiIGluIGEpO3JldHVybiB2b2lkIDA9PT1ifHxmLmNhbGwoYSxiKX0sYy5lYWNoPWZ1bmN0aW9uKGEsYyxkKXt2YXIgZSxmPTAsZz1hLmxlbmd0aCxoPWIoYSk7aWYoZCl7aWYoaClmb3IoO2c+ZiYmKGU9Yy5hcHBseShhW2ZdLGQpLGUhPT0hMSk7ZisrKTtlbHNlIGZvcihmIGluIGEpaWYoZT1jLmFwcGx5KGFbZl0sZCksZT09PSExKWJyZWFrfWVsc2UgaWYoaClmb3IoO2c+ZiYmKGU9Yy5jYWxsKGFbZl0sZixhW2ZdKSxlIT09ITEpO2YrKyk7ZWxzZSBmb3IoZiBpbiBhKWlmKGU9Yy5jYWxsKGFbZl0sZixhW2ZdKSxlPT09ITEpYnJlYWs7cmV0dXJuIGF9LGMuZGF0YT1mdW5jdGlvbihhLGIsZSl7aWYodm9pZCAwPT09ZSl7dmFyIGY9YVtjLmV4cGFuZG9dLGc9ZiYmZFtmXTtpZih2b2lkIDA9PT1iKXJldHVybiBnO2lmKGcmJmIgaW4gZylyZXR1cm4gZ1tiXX1lbHNlIGlmKHZvaWQgMCE9PWIpe3ZhciBmPWFbYy5leHBhbmRvXXx8KGFbYy5leHBhbmRvXT0rK2MudXVpZCk7cmV0dXJuIGRbZl09ZFtmXXx8e30sZFtmXVtiXT1lLGV9fSxjLnJlbW92ZURhdGE9ZnVuY3Rpb24oYSxiKXt2YXIgZT1hW2MuZXhwYW5kb10sZj1lJiZkW2VdO2YmJmMuZWFjaChiLGZ1bmN0aW9uKGEsYil7ZGVsZXRlIGZbYl19KX0sYy5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgYSxiLGQsZSxmLGcsaD1hcmd1bWVudHNbMF18fHt9LGk9MSxqPWFyZ3VtZW50cy5sZW5ndGgsaz0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBoJiYoaz1oLGg9YXJndW1lbnRzW2ldfHx7fSxpKyspLFwib2JqZWN0XCIhPXR5cGVvZiBoJiZcImZ1bmN0aW9uXCIhPT1jLnR5cGUoaCkmJihoPXt9KSxpPT09aiYmKGg9dGhpcyxpLS0pO2o+aTtpKyspaWYobnVsbCE9KGY9YXJndW1lbnRzW2ldKSlmb3IoZSBpbiBmKWE9aFtlXSxkPWZbZV0saCE9PWQmJihrJiZkJiYoYy5pc1BsYWluT2JqZWN0KGQpfHwoYj1jLmlzQXJyYXkoZCkpKT8oYj8oYj0hMSxnPWEmJmMuaXNBcnJheShhKT9hOltdKTpnPWEmJmMuaXNQbGFpbk9iamVjdChhKT9hOnt9LGhbZV09Yy5leHRlbmQoayxnLGQpKTp2b2lkIDAhPT1kJiYoaFtlXT1kKSk7cmV0dXJuIGh9LGMucXVldWU9ZnVuY3Rpb24oYSxkLGUpe2Z1bmN0aW9uIGYoYSxjKXt2YXIgZD1jfHxbXTtyZXR1cm4gbnVsbCE9YSYmKGIoT2JqZWN0KGEpKT8hZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9K2IubGVuZ3RoLGQ9MCxlPWEubGVuZ3RoO2M+ZDspYVtlKytdPWJbZCsrXTtpZihjIT09Yylmb3IoO3ZvaWQgMCE9PWJbZF07KWFbZSsrXT1iW2QrK107cmV0dXJuIGEubGVuZ3RoPWUsYX0oZCxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6W10ucHVzaC5jYWxsKGQsYSkpLGR9aWYoYSl7ZD0oZHx8XCJmeFwiKStcInF1ZXVlXCI7dmFyIGc9Yy5kYXRhKGEsZCk7cmV0dXJuIGU/KCFnfHxjLmlzQXJyYXkoZSk/Zz1jLmRhdGEoYSxkLGYoZSkpOmcucHVzaChlKSxnKTpnfHxbXX19LGMuZGVxdWV1ZT1mdW5jdGlvbihhLGIpe2MuZWFjaChhLm5vZGVUeXBlP1thXTphLGZ1bmN0aW9uKGEsZCl7Yj1ifHxcImZ4XCI7dmFyIGU9Yy5xdWV1ZShkLGIpLGY9ZS5zaGlmdCgpO1wiaW5wcm9ncmVzc1wiPT09ZiYmKGY9ZS5zaGlmdCgpKSxmJiYoXCJmeFwiPT09YiYmZS51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxmLmNhbGwoZCxmdW5jdGlvbigpe2MuZGVxdWV1ZShkLGIpfSkpfSl9LGMuZm49Yy5wcm90b3R5cGU9e2luaXQ6ZnVuY3Rpb24oYSl7aWYoYS5ub2RlVHlwZSlyZXR1cm4gdGhpc1swXT1hLHRoaXM7dGhyb3cgbmV3IEVycm9yKFwiTm90IGEgRE9NIG5vZGUuXCIpfSxvZmZzZXQ6ZnVuY3Rpb24oKXt2YXIgYj10aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdD90aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOnt0b3A6MCxsZWZ0OjB9O3JldHVybnt0b3A6Yi50b3ArKGEucGFnZVlPZmZzZXR8fGRvY3VtZW50LnNjcm9sbFRvcHx8MCktKGRvY3VtZW50LmNsaWVudFRvcHx8MCksbGVmdDpiLmxlZnQrKGEucGFnZVhPZmZzZXR8fGRvY3VtZW50LnNjcm9sbExlZnR8fDApLShkb2N1bWVudC5jbGllbnRMZWZ0fHwwKX19LHBvc2l0aW9uOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe2Zvcih2YXIgYT10aGlzLm9mZnNldFBhcmVudHx8ZG9jdW1lbnQ7YSYmXCJodG1sXCI9PT0hYS5ub2RlVHlwZS50b0xvd2VyQ2FzZSYmXCJzdGF0aWNcIj09PWEuc3R5bGUucG9zaXRpb247KWE9YS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGF8fGRvY3VtZW50fXZhciBiPXRoaXNbMF0sYT1hLmFwcGx5KGIpLGQ9dGhpcy5vZmZzZXQoKSxlPS9eKD86Ym9keXxodG1sKSQvaS50ZXN0KGEubm9kZU5hbWUpP3t0b3A6MCxsZWZ0OjB9OmMoYSkub2Zmc2V0KCk7cmV0dXJuIGQudG9wLT1wYXJzZUZsb2F0KGIuc3R5bGUubWFyZ2luVG9wKXx8MCxkLmxlZnQtPXBhcnNlRmxvYXQoYi5zdHlsZS5tYXJnaW5MZWZ0KXx8MCxhLnN0eWxlJiYoZS50b3ArPXBhcnNlRmxvYXQoYS5zdHlsZS5ib3JkZXJUb3BXaWR0aCl8fDAsZS5sZWZ0Kz1wYXJzZUZsb2F0KGEuc3R5bGUuYm9yZGVyTGVmdFdpZHRoKXx8MCkse3RvcDpkLnRvcC1lLnRvcCxsZWZ0OmQubGVmdC1lLmxlZnR9fX07dmFyIGQ9e307Yy5leHBhbmRvPVwidmVsb2NpdHlcIisobmV3IERhdGUpLmdldFRpbWUoKSxjLnV1aWQ9MDtmb3IodmFyIGU9e30sZj1lLmhhc093blByb3BlcnR5LGc9ZS50b1N0cmluZyxoPVwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKSxpPTA7aTxoLmxlbmd0aDtpKyspZVtcIltvYmplY3QgXCIraFtpXStcIl1cIl09aFtpXS50b0xvd2VyQ2FzZSgpO2MuZm4uaW5pdC5wcm90b3R5cGU9Yy5mbixhLlZlbG9jaXR5PXtVdGlsaXRpZXM6Y319fSh3aW5kb3cpLGZ1bmN0aW9uKGEpe1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShhKTphKCl9KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGEsYixjLGQpe2Z1bmN0aW9uIGUoYSl7Zm9yKHZhciBiPS0xLGM9YT9hLmxlbmd0aDowLGQ9W107KytiPGM7KXt2YXIgZT1hW2JdO2UmJmQucHVzaChlKX1yZXR1cm4gZH1mdW5jdGlvbiBmKGEpe3JldHVybiBwLmlzV3JhcHBlZChhKT9hPVtdLnNsaWNlLmNhbGwoYSk6cC5pc05vZGUoYSkmJihhPVthXSksYX1mdW5jdGlvbiBnKGEpe3ZhciBiPW0uZGF0YShhLFwidmVsb2NpdHlcIik7cmV0dXJuIG51bGw9PT1iP2Q6Yn1mdW5jdGlvbiBoKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gTWF0aC5yb3VuZChiKmEpKigxL2EpfX1mdW5jdGlvbiBpKGEsYyxkLGUpe2Z1bmN0aW9uIGYoYSxiKXtyZXR1cm4gMS0zKmIrMyphfWZ1bmN0aW9uIGcoYSxiKXtyZXR1cm4gMypiLTYqYX1mdW5jdGlvbiBoKGEpe3JldHVybiAzKmF9ZnVuY3Rpb24gaShhLGIsYyl7cmV0dXJuKChmKGIsYykqYStnKGIsYykpKmEraChiKSkqYX1mdW5jdGlvbiBqKGEsYixjKXtyZXR1cm4gMypmKGIsYykqYSphKzIqZyhiLGMpKmEraChiKX1mdW5jdGlvbiBrKGIsYyl7Zm9yKHZhciBlPTA7cD5lOysrZSl7dmFyIGY9aihjLGEsZCk7aWYoMD09PWYpcmV0dXJuIGM7dmFyIGc9aShjLGEsZCktYjtjLT1nL2Z9cmV0dXJuIGN9ZnVuY3Rpb24gbCgpe2Zvcih2YXIgYj0wO3Q+YjsrK2IpeFtiXT1pKGIqdSxhLGQpfWZ1bmN0aW9uIG0oYixjLGUpe3ZhciBmLGcsaD0wO2RvIGc9YysoZS1jKS8yLGY9aShnLGEsZCktYixmPjA/ZT1nOmM9Zzt3aGlsZShNYXRoLmFicyhmKT5yJiYrK2g8cyk7cmV0dXJuIGd9ZnVuY3Rpb24gbihiKXtmb3IodmFyIGM9MCxlPTEsZj10LTE7ZSE9ZiYmeFtlXTw9YjsrK2UpYys9dTstLWU7dmFyIGc9KGIteFtlXSkvKHhbZSsxXS14W2VdKSxoPWMrZyp1LGk9aihoLGEsZCk7cmV0dXJuIGk+PXE/ayhiLGgpOjA9PWk/aDptKGIsYyxjK3UpfWZ1bmN0aW9uIG8oKXt5PSEwLChhIT1jfHxkIT1lKSYmbCgpfXZhciBwPTQscT0uMDAxLHI9MWUtNyxzPTEwLHQ9MTEsdT0xLyh0LTEpLHY9XCJGbG9hdDMyQXJyYXlcImluIGI7aWYoNCE9PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuITE7Zm9yKHZhciB3PTA7ND53OysrdylpZihcIm51bWJlclwiIT10eXBlb2YgYXJndW1lbnRzW3ddfHxpc05hTihhcmd1bWVudHNbd10pfHwhaXNGaW5pdGUoYXJndW1lbnRzW3ddKSlyZXR1cm4hMTthPU1hdGgubWluKGEsMSksZD1NYXRoLm1pbihkLDEpLGE9TWF0aC5tYXgoYSwwKSxkPU1hdGgubWF4KGQsMCk7dmFyIHg9dj9uZXcgRmxvYXQzMkFycmF5KHQpOm5ldyBBcnJheSh0KSx5PSExLHo9ZnVuY3Rpb24oYil7cmV0dXJuIHl8fG8oKSxhPT09YyYmZD09PWU/YjowPT09Yj8wOjE9PT1iPzE6aShuKGIpLGMsZSl9O3ouZ2V0Q29udHJvbFBvaW50cz1mdW5jdGlvbigpe3JldHVyblt7eDphLHk6Y30se3g6ZCx5OmV9XX07dmFyIEE9XCJnZW5lcmF0ZUJlemllcihcIitbYSxjLGQsZV0rXCIpXCI7cmV0dXJuIHoudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gQX0sen1mdW5jdGlvbiBqKGEsYil7dmFyIGM9YTtyZXR1cm4gcC5pc1N0cmluZyhhKT90LkVhc2luZ3NbYV18fChjPSExKTpjPXAuaXNBcnJheShhKSYmMT09PWEubGVuZ3RoP2guYXBwbHkobnVsbCxhKTpwLmlzQXJyYXkoYSkmJjI9PT1hLmxlbmd0aD91LmFwcGx5KG51bGwsYS5jb25jYXQoW2JdKSk6cC5pc0FycmF5KGEpJiY0PT09YS5sZW5ndGg/aS5hcHBseShudWxsLGEpOiExLGM9PT0hMSYmKGM9dC5FYXNpbmdzW3QuZGVmYXVsdHMuZWFzaW5nXT90LmRlZmF1bHRzLmVhc2luZzpzKSxjfWZ1bmN0aW9uIGsoYSl7aWYoYSl7dmFyIGI9KG5ldyBEYXRlKS5nZXRUaW1lKCksYz10LlN0YXRlLmNhbGxzLmxlbmd0aDtjPjFlNCYmKHQuU3RhdGUuY2FsbHM9ZSh0LlN0YXRlLmNhbGxzKSk7Zm9yKHZhciBmPTA7Yz5mO2YrKylpZih0LlN0YXRlLmNhbGxzW2ZdKXt2YXIgaD10LlN0YXRlLmNhbGxzW2ZdLGk9aFswXSxqPWhbMl0sbj1oWzNdLG89ISFuLHE9bnVsbDtufHwobj10LlN0YXRlLmNhbGxzW2ZdWzNdPWItMTYpO2Zvcih2YXIgcj1NYXRoLm1pbigoYi1uKS9qLmR1cmF0aW9uLDEpLHM9MCx1PWkubGVuZ3RoO3U+cztzKyspe3ZhciB3PWlbc10seT13LmVsZW1lbnQ7aWYoZyh5KSl7dmFyIHo9ITE7aWYoai5kaXNwbGF5IT09ZCYmbnVsbCE9PWouZGlzcGxheSYmXCJub25lXCIhPT1qLmRpc3BsYXkpe2lmKFwiZmxleFwiPT09ai5kaXNwbGF5KXt2YXIgQT1bXCItd2Via2l0LWJveFwiLFwiLW1vei1ib3hcIixcIi1tcy1mbGV4Ym94XCIsXCItd2Via2l0LWZsZXhcIl07bS5lYWNoKEEsZnVuY3Rpb24oYSxiKXt2LnNldFByb3BlcnR5VmFsdWUoeSxcImRpc3BsYXlcIixiKX0pfXYuc2V0UHJvcGVydHlWYWx1ZSh5LFwiZGlzcGxheVwiLGouZGlzcGxheSl9ai52aXNpYmlsaXR5IT09ZCYmXCJoaWRkZW5cIiE9PWoudmlzaWJpbGl0eSYmdi5zZXRQcm9wZXJ0eVZhbHVlKHksXCJ2aXNpYmlsaXR5XCIsai52aXNpYmlsaXR5KTtmb3IodmFyIEIgaW4gdylpZihcImVsZW1lbnRcIiE9PUIpe3ZhciBDLEQ9d1tCXSxFPXAuaXNTdHJpbmcoRC5lYXNpbmcpP3QuRWFzaW5nc1tELmVhc2luZ106RC5lYXNpbmc7aWYoMT09PXIpQz1ELmVuZFZhbHVlO2Vsc2V7dmFyIEY9RC5lbmRWYWx1ZS1ELnN0YXJ0VmFsdWU7aWYoQz1ELnN0YXJ0VmFsdWUrRipFKHIsaixGKSwhbyYmQz09PUQuY3VycmVudFZhbHVlKWNvbnRpbnVlfWlmKEQuY3VycmVudFZhbHVlPUMsXCJ0d2VlblwiPT09QilxPUM7ZWxzZXtpZih2Lkhvb2tzLnJlZ2lzdGVyZWRbQl0pe3ZhciBHPXYuSG9va3MuZ2V0Um9vdChCKSxIPWcoeSkucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtHXTtIJiYoRC5yb290UHJvcGVydHlWYWx1ZT1IKX12YXIgST12LnNldFByb3BlcnR5VmFsdWUoeSxCLEQuY3VycmVudFZhbHVlKygwPT09cGFyc2VGbG9hdChDKT9cIlwiOkQudW5pdFR5cGUpLEQucm9vdFByb3BlcnR5VmFsdWUsRC5zY3JvbGxEYXRhKTt2Lkhvb2tzLnJlZ2lzdGVyZWRbQl0mJihnKHkpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbR109di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW0ddP3YuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtHXShcImV4dHJhY3RcIixudWxsLElbMV0pOklbMV0pLFwidHJhbnNmb3JtXCI9PT1JWzBdJiYoej0hMCl9fWoubW9iaWxlSEEmJmcoeSkudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2Q9PT1kJiYoZyh5KS50cmFuc2Zvcm1DYWNoZS50cmFuc2xhdGUzZD1cIigwcHgsIDBweCwgMHB4KVwiLHo9ITApLHomJnYuZmx1c2hUcmFuc2Zvcm1DYWNoZSh5KX19ai5kaXNwbGF5IT09ZCYmXCJub25lXCIhPT1qLmRpc3BsYXkmJih0LlN0YXRlLmNhbGxzW2ZdWzJdLmRpc3BsYXk9ITEpLGoudmlzaWJpbGl0eSE9PWQmJlwiaGlkZGVuXCIhPT1qLnZpc2liaWxpdHkmJih0LlN0YXRlLmNhbGxzW2ZdWzJdLnZpc2liaWxpdHk9ITEpLGoucHJvZ3Jlc3MmJmoucHJvZ3Jlc3MuY2FsbChoWzFdLGhbMV0scixNYXRoLm1heCgwLG4rai5kdXJhdGlvbi1iKSxuLHEpLDE9PT1yJiZsKGYpfX10LlN0YXRlLmlzVGlja2luZyYmeChrKX1mdW5jdGlvbiBsKGEsYil7aWYoIXQuU3RhdGUuY2FsbHNbYV0pcmV0dXJuITE7Zm9yKHZhciBjPXQuU3RhdGUuY2FsbHNbYV1bMF0sZT10LlN0YXRlLmNhbGxzW2FdWzFdLGY9dC5TdGF0ZS5jYWxsc1thXVsyXSxoPXQuU3RhdGUuY2FsbHNbYV1bNF0saT0hMSxqPTAsaz1jLmxlbmd0aDtrPmo7aisrKXt2YXIgbD1jW2pdLmVsZW1lbnQ7aWYoYnx8Zi5sb29wfHwoXCJub25lXCI9PT1mLmRpc3BsYXkmJnYuc2V0UHJvcGVydHlWYWx1ZShsLFwiZGlzcGxheVwiLGYuZGlzcGxheSksXCJoaWRkZW5cIj09PWYudmlzaWJpbGl0eSYmdi5zZXRQcm9wZXJ0eVZhbHVlKGwsXCJ2aXNpYmlsaXR5XCIsZi52aXNpYmlsaXR5KSksZi5sb29wIT09ITAmJihtLnF1ZXVlKGwpWzFdPT09ZHx8IS9cXC52ZWxvY2l0eVF1ZXVlRW50cnlGbGFnL2kudGVzdChtLnF1ZXVlKGwpWzFdKSkmJmcobCkpe2cobCkuaXNBbmltYXRpbmc9ITEsZyhsKS5yb290UHJvcGVydHlWYWx1ZUNhY2hlPXt9O3ZhciBuPSExO20uZWFjaCh2Lkxpc3RzLnRyYW5zZm9ybXMzRCxmdW5jdGlvbihhLGIpe3ZhciBjPS9ec2NhbGUvLnRlc3QoYik/MTowLGU9ZyhsKS50cmFuc2Zvcm1DYWNoZVtiXTtnKGwpLnRyYW5zZm9ybUNhY2hlW2JdIT09ZCYmbmV3IFJlZ0V4cChcIl5cXFxcKFwiK2MrXCJbXi5dXCIpLnRlc3QoZSkmJihuPSEwLGRlbGV0ZSBnKGwpLnRyYW5zZm9ybUNhY2hlW2JdKX0pLGYubW9iaWxlSEEmJihuPSEwLGRlbGV0ZSBnKGwpLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkKSxuJiZ2LmZsdXNoVHJhbnNmb3JtQ2FjaGUobCksdi5WYWx1ZXMucmVtb3ZlQ2xhc3MobCxcInZlbG9jaXR5LWFuaW1hdGluZ1wiKX1pZighYiYmZi5jb21wbGV0ZSYmIWYubG9vcCYmaj09PWstMSl0cnl7Zi5jb21wbGV0ZS5jYWxsKGUsZSl9Y2F0Y2gobyl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IG99LDEpfWgmJmYubG9vcCE9PSEwJiZoKGUpLGcobCkmJmYubG9vcD09PSEwJiYhYiYmKG0uZWFjaChnKGwpLnR3ZWVuc0NvbnRhaW5lcixmdW5jdGlvbihhLGIpey9ecm90YXRlLy50ZXN0KGEpJiYzNjA9PT1wYXJzZUZsb2F0KGIuZW5kVmFsdWUpJiYoYi5lbmRWYWx1ZT0wLGIuc3RhcnRWYWx1ZT0zNjApLC9eYmFja2dyb3VuZFBvc2l0aW9uLy50ZXN0KGEpJiYxMDA9PT1wYXJzZUZsb2F0KGIuZW5kVmFsdWUpJiZcIiVcIj09PWIudW5pdFR5cGUmJihiLmVuZFZhbHVlPTAsYi5zdGFydFZhbHVlPTEwMCl9KSx0KGwsXCJyZXZlcnNlXCIse2xvb3A6ITAsZGVsYXk6Zi5kZWxheX0pKSxmLnF1ZXVlIT09ITEmJm0uZGVxdWV1ZShsLGYucXVldWUpfXQuU3RhdGUuY2FsbHNbYV09ITE7Zm9yKHZhciBwPTAscT10LlN0YXRlLmNhbGxzLmxlbmd0aDtxPnA7cCsrKWlmKHQuU3RhdGUuY2FsbHNbcF0hPT0hMSl7aT0hMDticmVha31pPT09ITEmJih0LlN0YXRlLmlzVGlja2luZz0hMSxkZWxldGUgdC5TdGF0ZS5jYWxscyx0LlN0YXRlLmNhbGxzPVtdKX12YXIgbSxuPWZ1bmN0aW9uKCl7aWYoYy5kb2N1bWVudE1vZGUpcmV0dXJuIGMuZG9jdW1lbnRNb2RlO2Zvcih2YXIgYT03O2E+NDthLS0pe3ZhciBiPWMuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihiLmlubmVySFRNTD1cIjwhLS1baWYgSUUgXCIrYStcIl0+PHNwYW4+PC9zcGFuPjwhW2VuZGlmXS0tPlwiLGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzcGFuXCIpLmxlbmd0aClyZXR1cm4gYj1udWxsLGF9cmV0dXJuIGR9KCksbz1mdW5jdGlvbigpe3ZhciBhPTA7cmV0dXJuIGIud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxiLm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oYil7dmFyIGMsZD0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4gYz1NYXRoLm1heCgwLDE2LShkLWEpKSxhPWQrYyxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YihkK2MpfSxjKX19KCkscD17aXNTdHJpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGF9LGlzQXJyYXk6QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oYSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpfSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiW29iamVjdCBGdW5jdGlvbl1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKX0saXNOb2RlOmZ1bmN0aW9uKGEpe3JldHVybiBhJiZhLm5vZGVUeXBlfSxpc05vZGVMaXN0OmZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhJiYvXlxcW29iamVjdCAoSFRNTENvbGxlY3Rpb258Tm9kZUxpc3R8T2JqZWN0KVxcXSQvLnRlc3QoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpKSYmYS5sZW5ndGghPT1kJiYoMD09PWEubGVuZ3RofHxcIm9iamVjdFwiPT10eXBlb2YgYVswXSYmYVswXS5ub2RlVHlwZT4wKX0saXNXcmFwcGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhJiYoYS5qcXVlcnl8fGIuWmVwdG8mJmIuWmVwdG8uemVwdG8uaXNaKGEpKX0saXNTVkc6ZnVuY3Rpb24oYSl7cmV0dXJuIGIuU1ZHRWxlbWVudCYmYSBpbnN0YW5jZW9mIGIuU1ZHRWxlbWVudH0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXtmb3IodmFyIGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4hMH19LHE9ITE7aWYoYS5mbiYmYS5mbi5qcXVlcnk/KG09YSxxPSEwKTptPWIuVmVsb2NpdHkuVXRpbGl0aWVzLDg+PW4mJiFxKXRocm93IG5ldyBFcnJvcihcIlZlbG9jaXR5OiBJRTggYW5kIGJlbG93IHJlcXVpcmUgalF1ZXJ5IHRvIGJlIGxvYWRlZCBiZWZvcmUgVmVsb2NpdHkuXCIpO2lmKDc+PW4pcmV0dXJuIHZvaWQoalF1ZXJ5LmZuLnZlbG9jaXR5PWpRdWVyeS5mbi5hbmltYXRlKTt2YXIgcj00MDAscz1cInN3aW5nXCIsdD17U3RhdGU6e2lzTW9iaWxlOi9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxpc0FuZHJvaWQ6L0FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGlzR2luZ2VyYnJlYWQ6L0FuZHJvaWQgMlxcLjNcXC5bMy03XS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaXNDaHJvbWU6Yi5jaHJvbWUsaXNGaXJlZm94Oi9GaXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxwcmVmaXhFbGVtZW50OmMuY3JlYXRlRWxlbWVudChcImRpdlwiKSxwcmVmaXhNYXRjaGVzOnt9LHNjcm9sbEFuY2hvcjpudWxsLHNjcm9sbFByb3BlcnR5TGVmdDpudWxsLHNjcm9sbFByb3BlcnR5VG9wOm51bGwsaXNUaWNraW5nOiExLGNhbGxzOltdfSxDU1M6e30sVXRpbGl0aWVzOm0sUmVkaXJlY3RzOnt9LEVhc2luZ3M6e30sUHJvbWlzZTpiLlByb21pc2UsZGVmYXVsdHM6e3F1ZXVlOlwiXCIsZHVyYXRpb246cixlYXNpbmc6cyxiZWdpbjpkLGNvbXBsZXRlOmQscHJvZ3Jlc3M6ZCxkaXNwbGF5OmQsdmlzaWJpbGl0eTpkLGxvb3A6ITEsZGVsYXk6ITEsbW9iaWxlSEE6ITAsX2NhY2hlVmFsdWVzOiEwfSxpbml0OmZ1bmN0aW9uKGEpe20uZGF0YShhLFwidmVsb2NpdHlcIix7aXNTVkc6cC5pc1NWRyhhKSxpc0FuaW1hdGluZzohMSxjb21wdXRlZFN0eWxlOm51bGwsdHdlZW5zQ29udGFpbmVyOm51bGwscm9vdFByb3BlcnR5VmFsdWVDYWNoZTp7fSx0cmFuc2Zvcm1DYWNoZTp7fX0pfSxob29rOm51bGwsbW9jazohMSx2ZXJzaW9uOnttYWpvcjoxLG1pbm9yOjIscGF0Y2g6Mn0sZGVidWc6ITF9O2IucGFnZVlPZmZzZXQhPT1kPyh0LlN0YXRlLnNjcm9sbEFuY2hvcj1iLHQuU3RhdGUuc2Nyb2xsUHJvcGVydHlMZWZ0PVwicGFnZVhPZmZzZXRcIix0LlN0YXRlLnNjcm9sbFByb3BlcnR5VG9wPVwicGFnZVlPZmZzZXRcIik6KHQuU3RhdGUuc2Nyb2xsQW5jaG9yPWMuZG9jdW1lbnRFbGVtZW50fHxjLmJvZHkucGFyZW50Tm9kZXx8Yy5ib2R5LHQuU3RhdGUuc2Nyb2xsUHJvcGVydHlMZWZ0PVwic2Nyb2xsTGVmdFwiLHQuU3RhdGUuc2Nyb2xsUHJvcGVydHlUb3A9XCJzY3JvbGxUb3BcIik7dmFyIHU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEpe3JldHVybi1hLnRlbnNpb24qYS54LWEuZnJpY3Rpb24qYS52fWZ1bmN0aW9uIGIoYixjLGQpe3ZhciBlPXt4OmIueCtkLmR4KmMsdjpiLnYrZC5kdipjLHRlbnNpb246Yi50ZW5zaW9uLGZyaWN0aW9uOmIuZnJpY3Rpb259O3JldHVybntkeDplLnYsZHY6YShlKX19ZnVuY3Rpb24gYyhjLGQpe3ZhciBlPXtkeDpjLnYsZHY6YShjKX0sZj1iKGMsLjUqZCxlKSxnPWIoYywuNSpkLGYpLGg9YihjLGQsZyksaT0xLzYqKGUuZHgrMiooZi5keCtnLmR4KStoLmR4KSxqPTEvNiooZS5kdisyKihmLmR2K2cuZHYpK2guZHYpO3JldHVybiBjLng9Yy54K2kqZCxjLnY9Yy52K2oqZCxjfXJldHVybiBmdW5jdGlvbiBkKGEsYixlKXt2YXIgZixnLGgsaT17eDotMSx2OjAsdGVuc2lvbjpudWxsLGZyaWN0aW9uOm51bGx9LGo9WzBdLGs9MCxsPTFlLTQsbT0uMDE2O2ZvcihhPXBhcnNlRmxvYXQoYSl8fDUwMCxiPXBhcnNlRmxvYXQoYil8fDIwLGU9ZXx8bnVsbCxpLnRlbnNpb249YSxpLmZyaWN0aW9uPWIsZj1udWxsIT09ZSxmPyhrPWQoYSxiKSxnPWsvZSptKTpnPW07OylpZihoPWMoaHx8aSxnKSxqLnB1c2goMStoLngpLGsrPTE2LCEoTWF0aC5hYnMoaC54KT5sJiZNYXRoLmFicyhoLnYpPmwpKWJyZWFrO3JldHVybiBmP2Z1bmN0aW9uKGEpe3JldHVybiBqW2EqKGoubGVuZ3RoLTEpfDBdfTprfX0oKTt0LkVhc2luZ3M9e2xpbmVhcjpmdW5jdGlvbihhKXtyZXR1cm4gYX0sc3dpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuLjUtTWF0aC5jb3MoYSpNYXRoLlBJKS8yfSxzcHJpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuIDEtTWF0aC5jb3MoNC41KmEqTWF0aC5QSSkqTWF0aC5leHAoNiotYSl9fSxtLmVhY2goW1tcImVhc2VcIixbLjI1LC4xLC4yNSwxXV0sW1wiZWFzZS1pblwiLFsuNDIsMCwxLDFdXSxbXCJlYXNlLW91dFwiLFswLDAsLjU4LDFdXSxbXCJlYXNlLWluLW91dFwiLFsuNDIsMCwuNTgsMV1dLFtcImVhc2VJblNpbmVcIixbLjQ3LDAsLjc0NSwuNzE1XV0sW1wiZWFzZU91dFNpbmVcIixbLjM5LC41NzUsLjU2NSwxXV0sW1wiZWFzZUluT3V0U2luZVwiLFsuNDQ1LC4wNSwuNTUsLjk1XV0sW1wiZWFzZUluUXVhZFwiLFsuNTUsLjA4NSwuNjgsLjUzXV0sW1wiZWFzZU91dFF1YWRcIixbLjI1LC40NiwuNDUsLjk0XV0sW1wiZWFzZUluT3V0UXVhZFwiLFsuNDU1LC4wMywuNTE1LC45NTVdXSxbXCJlYXNlSW5DdWJpY1wiLFsuNTUsLjA1NSwuNjc1LC4xOV1dLFtcImVhc2VPdXRDdWJpY1wiLFsuMjE1LC42MSwuMzU1LDFdXSxbXCJlYXNlSW5PdXRDdWJpY1wiLFsuNjQ1LC4wNDUsLjM1NSwxXV0sW1wiZWFzZUluUXVhcnRcIixbLjg5NSwuMDMsLjY4NSwuMjJdXSxbXCJlYXNlT3V0UXVhcnRcIixbLjE2NSwuODQsLjQ0LDFdXSxbXCJlYXNlSW5PdXRRdWFydFwiLFsuNzcsMCwuMTc1LDFdXSxbXCJlYXNlSW5RdWludFwiLFsuNzU1LC4wNSwuODU1LC4wNl1dLFtcImVhc2VPdXRRdWludFwiLFsuMjMsMSwuMzIsMV1dLFtcImVhc2VJbk91dFF1aW50XCIsWy44NiwwLC4wNywxXV0sW1wiZWFzZUluRXhwb1wiLFsuOTUsLjA1LC43OTUsLjAzNV1dLFtcImVhc2VPdXRFeHBvXCIsWy4xOSwxLC4yMiwxXV0sW1wiZWFzZUluT3V0RXhwb1wiLFsxLDAsMCwxXV0sW1wiZWFzZUluQ2lyY1wiLFsuNiwuMDQsLjk4LC4zMzVdXSxbXCJlYXNlT3V0Q2lyY1wiLFsuMDc1LC44MiwuMTY1LDFdXSxbXCJlYXNlSW5PdXRDaXJjXCIsWy43ODUsLjEzNSwuMTUsLjg2XV1dLGZ1bmN0aW9uKGEsYil7dC5FYXNpbmdzW2JbMF1dPWkuYXBwbHkobnVsbCxiWzFdKX0pO3ZhciB2PXQuQ1NTPXtSZWdFeDp7aXNIZXg6L14jKFtBLWZcXGRdezN9KXsxLDJ9JC9pLHZhbHVlVW53cmFwOi9eW0Etel0rXFwoKC4qKVxcKSQvaSx3cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkOi9bMC05Ll0rIFswLTkuXSsgWzAtOS5dKyggWzAtOS5dKyk/Lyx2YWx1ZVNwbGl0Oi8oW0Etel0rXFwoLitcXCkpfCgoW0EtejAtOSMtLl0rPykoPz1cXHN8JCkpL2dpfSxMaXN0czp7Y29sb3JzOltcImZpbGxcIixcInN0cm9rZVwiLFwic3RvcENvbG9yXCIsXCJjb2xvclwiLFwiYmFja2dyb3VuZENvbG9yXCIsXCJib3JkZXJDb2xvclwiLFwiYm9yZGVyVG9wQ29sb3JcIixcImJvcmRlclJpZ2h0Q29sb3JcIixcImJvcmRlckJvdHRvbUNvbG9yXCIsXCJib3JkZXJMZWZ0Q29sb3JcIixcIm91dGxpbmVDb2xvclwiXSx0cmFuc2Zvcm1zQmFzZTpbXCJ0cmFuc2xhdGVYXCIsXCJ0cmFuc2xhdGVZXCIsXCJzY2FsZVwiLFwic2NhbGVYXCIsXCJzY2FsZVlcIixcInNrZXdYXCIsXCJza2V3WVwiLFwicm90YXRlWlwiXSx0cmFuc2Zvcm1zM0Q6W1widHJhbnNmb3JtUGVyc3BlY3RpdmVcIixcInRyYW5zbGF0ZVpcIixcInNjYWxlWlwiLFwicm90YXRlWFwiLFwicm90YXRlWVwiXX0sSG9va3M6e3RlbXBsYXRlczp7dGV4dFNoYWRvdzpbXCJDb2xvciBYIFkgQmx1clwiLFwiYmxhY2sgMHB4IDBweCAwcHhcIl0sYm94U2hhZG93OltcIkNvbG9yIFggWSBCbHVyIFNwcmVhZFwiLFwiYmxhY2sgMHB4IDBweCAwcHggMHB4XCJdLGNsaXA6W1wiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCIsXCIwcHggMHB4IDBweCAwcHhcIl0sYmFja2dyb3VuZFBvc2l0aW9uOltcIlggWVwiLFwiMCUgMCVcIl0sdHJhbnNmb3JtT3JpZ2luOltcIlggWSBaXCIsXCI1MCUgNTAlIDBweFwiXSxwZXJzcGVjdGl2ZU9yaWdpbjpbXCJYIFlcIixcIjUwJSA1MCVcIl19LHJlZ2lzdGVyZWQ6e30scmVnaXN0ZXI6ZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPHYuTGlzdHMuY29sb3JzLmxlbmd0aDthKyspe3ZhciBiPVwiY29sb3JcIj09PXYuTGlzdHMuY29sb3JzW2FdP1wiMCAwIDAgMVwiOlwiMjU1IDI1NSAyNTUgMVwiO3YuSG9va3MudGVtcGxhdGVzW3YuTGlzdHMuY29sb3JzW2FdXT1bXCJSZWQgR3JlZW4gQmx1ZSBBbHBoYVwiLGJdfXZhciBjLGQsZTtpZihuKWZvcihjIGluIHYuSG9va3MudGVtcGxhdGVzKXtkPXYuSG9va3MudGVtcGxhdGVzW2NdLGU9ZFswXS5zcGxpdChcIiBcIik7dmFyIGY9ZFsxXS5tYXRjaCh2LlJlZ0V4LnZhbHVlU3BsaXQpO1wiQ29sb3JcIj09PWVbMF0mJihlLnB1c2goZS5zaGlmdCgpKSxmLnB1c2goZi5zaGlmdCgpKSx2Lkhvb2tzLnRlbXBsYXRlc1tjXT1bZS5qb2luKFwiIFwiKSxmLmpvaW4oXCIgXCIpXSl9Zm9yKGMgaW4gdi5Ib29rcy50ZW1wbGF0ZXMpe2Q9di5Ib29rcy50ZW1wbGF0ZXNbY10sZT1kWzBdLnNwbGl0KFwiIFwiKTtmb3IodmFyIGEgaW4gZSl7dmFyIGc9YytlW2FdLGg9YTt2Lkhvb2tzLnJlZ2lzdGVyZWRbZ109W2MsaF19fX0sZ2V0Um9vdDpmdW5jdGlvbihhKXt2YXIgYj12Lkhvb2tzLnJlZ2lzdGVyZWRbYV07cmV0dXJuIGI/YlswXTphfSxjbGVhblJvb3RQcm9wZXJ0eVZhbHVlOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHYuUmVnRXgudmFsdWVVbndyYXAudGVzdChiKSYmKGI9Yi5tYXRjaCh2LlJlZ0V4LnZhbHVlVW53cmFwKVsxXSksdi5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUoYikmJihiPXYuSG9va3MudGVtcGxhdGVzW2FdWzFdKSxifSxleHRyYWN0VmFsdWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz12Lkhvb2tzLnJlZ2lzdGVyZWRbYV07aWYoYyl7dmFyIGQ9Y1swXSxlPWNbMV07cmV0dXJuIGI9di5Ib29rcy5jbGVhblJvb3RQcm9wZXJ0eVZhbHVlKGQsYiksYi50b1N0cmluZygpLm1hdGNoKHYuUmVnRXgudmFsdWVTcGxpdClbZV19cmV0dXJuIGJ9LGluamVjdFZhbHVlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD12Lkhvb2tzLnJlZ2lzdGVyZWRbYV07aWYoZCl7dmFyIGUsZixnPWRbMF0saD1kWzFdO3JldHVybiBjPXYuSG9va3MuY2xlYW5Sb290UHJvcGVydHlWYWx1ZShnLGMpLGU9Yy50b1N0cmluZygpLm1hdGNoKHYuUmVnRXgudmFsdWVTcGxpdCksZVtoXT1iLGY9ZS5qb2luKFwiIFwiKX1yZXR1cm4gY319LE5vcm1hbGl6YXRpb25zOntyZWdpc3RlcmVkOntjbGlwOmZ1bmN0aW9uKGEsYixjKXtzd2l0Y2goYSl7Y2FzZVwibmFtZVwiOnJldHVyblwiY2xpcFwiO2Nhc2VcImV4dHJhY3RcIjp2YXIgZDtyZXR1cm4gdi5SZWdFeC53cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkLnRlc3QoYyk/ZD1jOihkPWMudG9TdHJpbmcoKS5tYXRjaCh2LlJlZ0V4LnZhbHVlVW53cmFwKSxkPWQ/ZFsxXS5yZXBsYWNlKC8sKFxccyspPy9nLFwiIFwiKTpjKSxkO2Nhc2VcImluamVjdFwiOnJldHVyblwicmVjdChcIitjK1wiKVwifX0sYmx1cjpmdW5jdGlvbihhLGIsYyl7c3dpdGNoKGEpe2Nhc2VcIm5hbWVcIjpyZXR1cm4gdC5TdGF0ZS5pc0ZpcmVmb3g/XCJmaWx0ZXJcIjpcIi13ZWJraXQtZmlsdGVyXCI7Y2FzZVwiZXh0cmFjdFwiOnZhciBkPXBhcnNlRmxvYXQoYyk7aWYoIWQmJjAhPT1kKXt2YXIgZT1jLnRvU3RyaW5nKCkubWF0Y2goL2JsdXJcXCgoWzAtOV0rW0Etel0rKVxcKS9pKTtkPWU/ZVsxXTowfXJldHVybiBkO2Nhc2VcImluamVjdFwiOnJldHVybiBwYXJzZUZsb2F0KGMpP1wiYmx1cihcIitjK1wiKVwiOlwibm9uZVwifX0sb3BhY2l0eTpmdW5jdGlvbihhLGIsYyl7aWYoOD49bilzd2l0Y2goYSl7Y2FzZVwibmFtZVwiOnJldHVyblwiZmlsdGVyXCI7Y2FzZVwiZXh0cmFjdFwiOnZhciBkPWMudG9TdHJpbmcoKS5tYXRjaCgvYWxwaGFcXChvcGFjaXR5PSguKilcXCkvaSk7cmV0dXJuIGM9ZD9kWzFdLzEwMDoxO2Nhc2VcImluamVjdFwiOnJldHVybiBiLnN0eWxlLnpvb209MSxwYXJzZUZsb2F0KGMpPj0xP1wiXCI6XCJhbHBoYShvcGFjaXR5PVwiK3BhcnNlSW50KDEwMCpwYXJzZUZsb2F0KGMpLDEwKStcIilcIn1lbHNlIHN3aXRjaChhKXtjYXNlXCJuYW1lXCI6cmV0dXJuXCJvcGFjaXR5XCI7Y2FzZVwiZXh0cmFjdFwiOnJldHVybiBjO2Nhc2VcImluamVjdFwiOnJldHVybiBjfX19LHJlZ2lzdGVyOmZ1bmN0aW9uKCl7OT49bnx8dC5TdGF0ZS5pc0dpbmdlcmJyZWFkfHwodi5MaXN0cy50cmFuc2Zvcm1zQmFzZT12Lkxpc3RzLnRyYW5zZm9ybXNCYXNlLmNvbmNhdCh2Lkxpc3RzLnRyYW5zZm9ybXMzRCkpO2Zvcih2YXIgYT0wO2E8di5MaXN0cy50cmFuc2Zvcm1zQmFzZS5sZW5ndGg7YSsrKSFmdW5jdGlvbigpe3ZhciBiPXYuTGlzdHMudHJhbnNmb3Jtc0Jhc2VbYV07di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2JdPWZ1bmN0aW9uKGEsYyxlKXtzd2l0Y2goYSl7Y2FzZVwibmFtZVwiOnJldHVyblwidHJhbnNmb3JtXCI7Y2FzZVwiZXh0cmFjdFwiOnJldHVybiBnKGMpPT09ZHx8ZyhjKS50cmFuc2Zvcm1DYWNoZVtiXT09PWQ/L15zY2FsZS9pLnRlc3QoYik/MTowOmcoYykudHJhbnNmb3JtQ2FjaGVbYl0ucmVwbGFjZSgvWygpXS9nLFwiXCIpO2Nhc2VcImluamVjdFwiOnZhciBmPSExO3N3aXRjaChiLnN1YnN0cigwLGIubGVuZ3RoLTEpKXtjYXNlXCJ0cmFuc2xhdGVcIjpmPSEvKCV8cHh8ZW18cmVtfHZ3fHZofFxcZCkkL2kudGVzdChlKTticmVhaztjYXNlXCJzY2FsXCI6Y2FzZVwic2NhbGVcIjp0LlN0YXRlLmlzQW5kcm9pZCYmZyhjKS50cmFuc2Zvcm1DYWNoZVtiXT09PWQmJjE+ZSYmKGU9MSksZj0hLyhcXGQpJC9pLnRlc3QoZSk7YnJlYWs7Y2FzZVwic2tld1wiOmY9IS8oZGVnfFxcZCkkL2kudGVzdChlKTticmVhaztjYXNlXCJyb3RhdGVcIjpmPSEvKGRlZ3xcXGQpJC9pLnRlc3QoZSl9cmV0dXJuIGZ8fChnKGMpLnRyYW5zZm9ybUNhY2hlW2JdPVwiKFwiK2UrXCIpXCIpLGcoYykudHJhbnNmb3JtQ2FjaGVbYl19fX0oKTtmb3IodmFyIGE9MDthPHYuTGlzdHMuY29sb3JzLmxlbmd0aDthKyspIWZ1bmN0aW9uKCl7dmFyIGI9di5MaXN0cy5jb2xvcnNbYV07di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2JdPWZ1bmN0aW9uKGEsYyxlKXtzd2l0Y2goYSl7Y2FzZVwibmFtZVwiOnJldHVybiBiO2Nhc2VcImV4dHJhY3RcIjp2YXIgZjtpZih2LlJlZ0V4LndyYXBwZWRWYWx1ZUFscmVhZHlFeHRyYWN0ZWQudGVzdChlKSlmPWU7ZWxzZXt2YXIgZyxoPXtibGFjazpcInJnYigwLCAwLCAwKVwiLGJsdWU6XCJyZ2IoMCwgMCwgMjU1KVwiLGdyYXk6XCJyZ2IoMTI4LCAxMjgsIDEyOClcIixncmVlbjpcInJnYigwLCAxMjgsIDApXCIscmVkOlwicmdiKDI1NSwgMCwgMClcIix3aGl0ZTpcInJnYigyNTUsIDI1NSwgMjU1KVwifTsvXltBLXpdKyQvaS50ZXN0KGUpP2c9aFtlXSE9PWQ/aFtlXTpoLmJsYWNrOnYuUmVnRXguaXNIZXgudGVzdChlKT9nPVwicmdiKFwiK3YuVmFsdWVzLmhleFRvUmdiKGUpLmpvaW4oXCIgXCIpK1wiKVwiOi9ecmdiYT9cXCgvaS50ZXN0KGUpfHwoZz1oLmJsYWNrKSxmPShnfHxlKS50b1N0cmluZygpLm1hdGNoKHYuUmVnRXgudmFsdWVVbndyYXApWzFdLnJlcGxhY2UoLywoXFxzKyk/L2csXCIgXCIpfXJldHVybiA4Pj1ufHwzIT09Zi5zcGxpdChcIiBcIikubGVuZ3RofHwoZis9XCIgMVwiKSxmO2Nhc2VcImluamVjdFwiOnJldHVybiA4Pj1uPzQ9PT1lLnNwbGl0KFwiIFwiKS5sZW5ndGgmJihlPWUuc3BsaXQoL1xccysvKS5zbGljZSgwLDMpLmpvaW4oXCIgXCIpKTozPT09ZS5zcGxpdChcIiBcIikubGVuZ3RoJiYoZSs9XCIgMVwiKSwoOD49bj9cInJnYlwiOlwicmdiYVwiKStcIihcIitlLnJlcGxhY2UoL1xccysvZyxcIixcIikucmVwbGFjZSgvXFwuKFxcZCkrKD89LCkvZyxcIlwiKStcIilcIn19fSgpfX0sTmFtZXM6e2NhbWVsQ2FzZTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC8tKFxcdykvZyxmdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9KX0sU1ZHQXR0cmlidXRlOmZ1bmN0aW9uKGEpe3ZhciBiPVwid2lkdGh8aGVpZ2h0fHh8eXxjeHxjeXxyfHJ4fHJ5fHgxfHgyfHkxfHkyXCI7cmV0dXJuKG58fHQuU3RhdGUuaXNBbmRyb2lkJiYhdC5TdGF0ZS5pc0Nocm9tZSkmJihiKz1cInx0cmFuc2Zvcm1cIiksbmV3IFJlZ0V4cChcIl4oXCIrYitcIikkXCIsXCJpXCIpLnRlc3QoYSl9LHByZWZpeENoZWNrOmZ1bmN0aW9uKGEpe2lmKHQuU3RhdGUucHJlZml4TWF0Y2hlc1thXSlyZXR1cm5bdC5TdGF0ZS5wcmVmaXhNYXRjaGVzW2FdLCEwXTtmb3IodmFyIGI9W1wiXCIsXCJXZWJraXRcIixcIk1velwiLFwibXNcIixcIk9cIl0sYz0wLGQ9Yi5sZW5ndGg7ZD5jO2MrKyl7dmFyIGU7aWYoZT0wPT09Yz9hOmJbY10rYS5yZXBsYWNlKC9eXFx3LyxmdW5jdGlvbihhKXtyZXR1cm4gYS50b1VwcGVyQ2FzZSgpfSkscC5pc1N0cmluZyh0LlN0YXRlLnByZWZpeEVsZW1lbnQuc3R5bGVbZV0pKXJldHVybiB0LlN0YXRlLnByZWZpeE1hdGNoZXNbYV09ZSxbZSwhMF19cmV0dXJuW2EsITFdfX0sVmFsdWVzOntoZXhUb1JnYjpmdW5jdGlvbihhKXt2YXIgYixjPS9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2ksZD0vXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pO3JldHVybiBhPWEucmVwbGFjZShjLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBiK2IrYytjK2QrZH0pLGI9ZC5leGVjKGEpLGI/W3BhcnNlSW50KGJbMV0sMTYpLHBhcnNlSW50KGJbMl0sMTYpLHBhcnNlSW50KGJbM10sMTYpXTpbMCwwLDBdfSxpc0NTU051bGxWYWx1ZTpmdW5jdGlvbihhKXtyZXR1cm4gMD09YXx8L14obm9uZXxhdXRvfHRyYW5zcGFyZW50fChyZ2JhXFwoMCwgPzAsID8wLCA/MFxcKSkpJC9pLnRlc3QoYSl9LGdldFVuaXRUeXBlOmZ1bmN0aW9uKGEpe3JldHVybi9eKHJvdGF0ZXxza2V3KS9pLnRlc3QoYSk/XCJkZWdcIjovKF4oc2NhbGV8c2NhbGVYfHNjYWxlWXxzY2FsZVp8YWxwaGF8ZmxleEdyb3d8ZmxleEhlaWdodHx6SW5kZXh8Zm9udFdlaWdodCkkKXwoKG9wYWNpdHl8cmVkfGdyZWVufGJsdWV8YWxwaGEpJCkvaS50ZXN0KGEpP1wiXCI6XCJweFwifSxnZXREaXNwbGF5VHlwZTpmdW5jdGlvbihhKXt2YXIgYj1hJiZhLnRhZ05hbWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO3JldHVybi9eKGJ8YmlnfGl8c21hbGx8dHR8YWJicnxhY3JvbnltfGNpdGV8Y29kZXxkZm58ZW18a2JkfHN0cm9uZ3xzYW1wfHZhcnxhfGJkb3xicnxpbWd8bWFwfG9iamVjdHxxfHNjcmlwdHxzcGFufHN1YnxzdXB8YnV0dG9ufGlucHV0fGxhYmVsfHNlbGVjdHx0ZXh0YXJlYSkkL2kudGVzdChiKT9cImlubGluZVwiOi9eKGxpKSQvaS50ZXN0KGIpP1wibGlzdC1pdGVtXCI6L14odHIpJC9pLnRlc3QoYik/XCJ0YWJsZS1yb3dcIjovXih0YWJsZSkkL2kudGVzdChiKT9cInRhYmxlXCI6L14odGJvZHkpJC9pLnRlc3QoYik/XCJ0YWJsZS1yb3ctZ3JvdXBcIjpcImJsb2NrXCJ9LGFkZENsYXNzOmZ1bmN0aW9uKGEsYil7YS5jbGFzc0xpc3Q/YS5jbGFzc0xpc3QuYWRkKGIpOmEuY2xhc3NOYW1lKz0oYS5jbGFzc05hbWUubGVuZ3RoP1wiIFwiOlwiXCIpK2J9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEsYil7YS5jbGFzc0xpc3Q/YS5jbGFzc0xpc3QucmVtb3ZlKGIpOmEuY2xhc3NOYW1lPWEuY2xhc3NOYW1lLnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIrYi5zcGxpdChcIiBcIikuam9pbihcInxcIikrXCIoXFxcXHN8JClcIixcImdpXCIpLFwiIFwiKX19LGdldFByb3BlcnR5VmFsdWU6ZnVuY3Rpb24oYSxjLGUsZil7ZnVuY3Rpb24gaChhLGMpe2Z1bmN0aW9uIGUoKXtqJiZ2LnNldFByb3BlcnR5VmFsdWUoYSxcImRpc3BsYXlcIixcIm5vbmVcIil9dmFyIGk9MDtpZig4Pj1uKWk9bS5jc3MoYSxjKTtlbHNle3ZhciBqPSExO2lmKC9eKHdpZHRofGhlaWdodCkkLy50ZXN0KGMpJiYwPT09di5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJkaXNwbGF5XCIpJiYoaj0hMCx2LnNldFByb3BlcnR5VmFsdWUoYSxcImRpc3BsYXlcIix2LlZhbHVlcy5nZXREaXNwbGF5VHlwZShhKSkpLCFmKXtpZihcImhlaWdodFwiPT09YyYmXCJib3JkZXItYm94XCIhPT12LmdldFByb3BlcnR5VmFsdWUoYSxcImJveFNpemluZ1wiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpe3ZhciBrPWEub2Zmc2V0SGVpZ2h0LShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwiYm9yZGVyVG9wV2lkdGhcIikpfHwwKS0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxcImJvcmRlckJvdHRvbVdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJwYWRkaW5nVG9wXCIpKXx8MCktKHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJwYWRkaW5nQm90dG9tXCIpKXx8MCk7cmV0dXJuIGUoKSxrfWlmKFwid2lkdGhcIj09PWMmJlwiYm9yZGVyLWJveFwiIT09di5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJib3hTaXppbmdcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKXt2YXIgbD1hLm9mZnNldFdpZHRoLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwiYm9yZGVyTGVmdFdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJib3JkZXJSaWdodFdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJwYWRkaW5nTGVmdFwiKSl8fDApLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwicGFkZGluZ1JpZ2h0XCIpKXx8MCk7cmV0dXJuIGUoKSxsfX12YXIgbztvPWcoYSk9PT1kP2IuZ2V0Q29tcHV0ZWRTdHlsZShhLG51bGwpOmcoYSkuY29tcHV0ZWRTdHlsZT9nKGEpLmNvbXB1dGVkU3R5bGU6ZyhhKS5jb21wdXRlZFN0eWxlPWIuZ2V0Q29tcHV0ZWRTdHlsZShhLG51bGwpLFwiYm9yZGVyQ29sb3JcIj09PWMmJihjPVwiYm9yZGVyVG9wQ29sb3JcIiksaT05PT09biYmXCJmaWx0ZXJcIj09PWM/by5nZXRQcm9wZXJ0eVZhbHVlKGMpOm9bY10sKFwiXCI9PT1pfHxudWxsPT09aSkmJihpPWEuc3R5bGVbY10pLGUoKX1pZihcImF1dG9cIj09PWkmJi9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkL2kudGVzdChjKSl7dmFyIHA9aChhLFwicG9zaXRpb25cIik7KFwiZml4ZWRcIj09PXB8fFwiYWJzb2x1dGVcIj09PXAmJi90b3B8bGVmdC9pLnRlc3QoYykpJiYoaT1tKGEpLnBvc2l0aW9uKClbY10rXCJweFwiKX1yZXR1cm4gaX12YXIgaTtpZih2Lkhvb2tzLnJlZ2lzdGVyZWRbY10pe3ZhciBqPWMsaz12Lkhvb2tzLmdldFJvb3Qoaik7ZT09PWQmJihlPXYuZ2V0UHJvcGVydHlWYWx1ZShhLHYuTmFtZXMucHJlZml4Q2hlY2soaylbMF0pKSx2Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRba10mJihlPXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtrXShcImV4dHJhY3RcIixhLGUpKSxpPXYuSG9va3MuZXh0cmFjdFZhbHVlKGosZSl9ZWxzZSBpZih2Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10pe3ZhciBsLG87bD12Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10oXCJuYW1lXCIsYSksXCJ0cmFuc2Zvcm1cIiE9PWwmJihvPWgoYSx2Lk5hbWVzLnByZWZpeENoZWNrKGwpWzBdKSx2LlZhbHVlcy5pc0NTU051bGxWYWx1ZShvKSYmdi5Ib29rcy50ZW1wbGF0ZXNbY10mJihvPXYuSG9va3MudGVtcGxhdGVzW2NdWzFdKSksaT12Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10oXCJleHRyYWN0XCIsYSxvKX1pZighL15bXFxkLV0vLnRlc3QoaSkpaWYoZyhhKSYmZyhhKS5pc1NWRyYmdi5OYW1lcy5TVkdBdHRyaWJ1dGUoYykpaWYoL14oaGVpZ2h0fHdpZHRoKSQvaS50ZXN0KGMpKXRyeXtpPWEuZ2V0QkJveCgpW2NdfWNhdGNoKHApe2k9MH1lbHNlIGk9YS5nZXRBdHRyaWJ1dGUoYyk7ZWxzZSBpPWgoYSx2Lk5hbWVzLnByZWZpeENoZWNrKGMpWzBdKTtyZXR1cm4gdi5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUoaSkmJihpPTApLHQuZGVidWc+PTImJmNvbnNvbGUubG9nKFwiR2V0IFwiK2MrXCI6IFwiK2kpLGl9LHNldFByb3BlcnR5VmFsdWU6ZnVuY3Rpb24oYSxjLGQsZSxmKXt2YXIgaD1jO2lmKFwic2Nyb2xsXCI9PT1jKWYuY29udGFpbmVyP2YuY29udGFpbmVyW1wic2Nyb2xsXCIrZi5kaXJlY3Rpb25dPWQ6XCJMZWZ0XCI9PT1mLmRpcmVjdGlvbj9iLnNjcm9sbFRvKGQsZi5hbHRlcm5hdGVWYWx1ZSk6Yi5zY3JvbGxUbyhmLmFsdGVybmF0ZVZhbHVlLGQpO2Vsc2UgaWYodi5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdJiZcInRyYW5zZm9ybVwiPT09di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKFwibmFtZVwiLGEpKXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcImluamVjdFwiLGEsZCksaD1cInRyYW5zZm9ybVwiLGQ9ZyhhKS50cmFuc2Zvcm1DYWNoZVtjXTtlbHNle2lmKHYuSG9va3MucmVnaXN0ZXJlZFtjXSl7dmFyIGk9YyxqPXYuSG9va3MuZ2V0Um9vdChjKTtlPWV8fHYuZ2V0UHJvcGVydHlWYWx1ZShhLGopLGQ9di5Ib29rcy5pbmplY3RWYWx1ZShpLGQsZSksYz1qfWlmKHYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXSYmKGQ9di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKFwiaW5qZWN0XCIsYSxkKSxjPXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcIm5hbWVcIixhKSksaD12Lk5hbWVzLnByZWZpeENoZWNrKGMpWzBdLDg+PW4pdHJ5e2Euc3R5bGVbaF09ZH1jYXRjaChrKXt0LmRlYnVnJiZjb25zb2xlLmxvZyhcIkJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBbXCIrZCtcIl0gZm9yIFtcIitoK1wiXVwiKX1lbHNlIGcoYSkmJmcoYSkuaXNTVkcmJnYuTmFtZXMuU1ZHQXR0cmlidXRlKGMpP2Euc2V0QXR0cmlidXRlKGMsZCk6YS5zdHlsZVtoXT1kO3QuZGVidWc+PTImJmNvbnNvbGUubG9nKFwiU2V0IFwiK2MrXCIgKFwiK2grXCIpOiBcIitkKX1yZXR1cm5baCxkXX0sZmx1c2hUcmFuc2Zvcm1DYWNoZTpmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGIpe3JldHVybiBwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLGIpKX12YXIgYz1cIlwiO2lmKChufHx0LlN0YXRlLmlzQW5kcm9pZCYmIXQuU3RhdGUuaXNDaHJvbWUpJiZnKGEpLmlzU1ZHKXt2YXIgZD17dHJhbnNsYXRlOltiKFwidHJhbnNsYXRlWFwiKSxiKFwidHJhbnNsYXRlWVwiKV0sc2tld1g6W2IoXCJza2V3WFwiKV0sc2tld1k6W2IoXCJza2V3WVwiKV0sc2NhbGU6MSE9PWIoXCJzY2FsZVwiKT9bYihcInNjYWxlXCIpLGIoXCJzY2FsZVwiKV06W2IoXCJzY2FsZVhcIiksYihcInNjYWxlWVwiKV0scm90YXRlOltiKFwicm90YXRlWlwiKSwwLDBdfTttLmVhY2goZyhhKS50cmFuc2Zvcm1DYWNoZSxmdW5jdGlvbihhKXsvXnRyYW5zbGF0ZS9pLnRlc3QoYSk/YT1cInRyYW5zbGF0ZVwiOi9ec2NhbGUvaS50ZXN0KGEpP2E9XCJzY2FsZVwiOi9ecm90YXRlL2kudGVzdChhKSYmKGE9XCJyb3RhdGVcIiksZFthXSYmKGMrPWErXCIoXCIrZFthXS5qb2luKFwiIFwiKStcIikgXCIsZGVsZXRlIGRbYV0pfSl9ZWxzZXt2YXIgZSxmO20uZWFjaChnKGEpLnRyYW5zZm9ybUNhY2hlLGZ1bmN0aW9uKGIpe3JldHVybiBlPWcoYSkudHJhbnNmb3JtQ2FjaGVbYl0sXCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiPT09Yj8oZj1lLCEwKTooOT09PW4mJlwicm90YXRlWlwiPT09YiYmKGI9XCJyb3RhdGVcIiksdm9pZChjKz1iK2UrXCIgXCIpKX0pLGYmJihjPVwicGVyc3BlY3RpdmVcIitmK1wiIFwiK2MpfXYuc2V0UHJvcGVydHlWYWx1ZShhLFwidHJhbnNmb3JtXCIsYyl9fTt2Lkhvb2tzLnJlZ2lzdGVyKCksdi5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcigpLHQuaG9vaz1mdW5jdGlvbihhLGIsYyl7dmFyIGU9ZDtyZXR1cm4gYT1mKGEpLG0uZWFjaChhLGZ1bmN0aW9uKGEsZil7aWYoZyhmKT09PWQmJnQuaW5pdChmKSxjPT09ZCllPT09ZCYmKGU9dC5DU1MuZ2V0UHJvcGVydHlWYWx1ZShmLGIpKTtlbHNle3ZhciBoPXQuQ1NTLnNldFByb3BlcnR5VmFsdWUoZixiLGMpO1widHJhbnNmb3JtXCI9PT1oWzBdJiZ0LkNTUy5mbHVzaFRyYW5zZm9ybUNhY2hlKGYpLGU9aH19KSxlfTt2YXIgdz1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtyZXR1cm4gaD9CLnByb21pc2V8fG51bGw6aX1mdW5jdGlvbiBlKCl7ZnVuY3Rpb24gYSgpe2Z1bmN0aW9uIGEoYSxiKXt2YXIgYz1kLGU9ZCxnPWQ7cmV0dXJuIHAuaXNBcnJheShhKT8oYz1hWzBdLCFwLmlzQXJyYXkoYVsxXSkmJi9eW1xcZC1dLy50ZXN0KGFbMV0pfHxwLmlzRnVuY3Rpb24oYVsxXSl8fHYuUmVnRXguaXNIZXgudGVzdChhWzFdKT9nPWFbMV06KHAuaXNTdHJpbmcoYVsxXSkmJiF2LlJlZ0V4LmlzSGV4LnRlc3QoYVsxXSl8fHAuaXNBcnJheShhWzFdKSkmJihlPWI/YVsxXTpqKGFbMV0saC5kdXJhdGlvbiksYVsyXSE9PWQmJihnPWFbMl0pKSk6Yz1hLGJ8fChlPWV8fGguZWFzaW5nKSxwLmlzRnVuY3Rpb24oYykmJihjPWMuY2FsbChmLHkseCkpLHAuaXNGdW5jdGlvbihnKSYmKGc9Zy5jYWxsKGYseSx4KSksW2N8fDAsZSxnXX1mdW5jdGlvbiBsKGEsYil7dmFyIGMsZDtyZXR1cm4gZD0oYnx8XCIwXCIpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bJUEtel0rJC8sZnVuY3Rpb24oYSl7cmV0dXJuIGM9YSxcIlwifSksY3x8KGM9di5WYWx1ZXMuZ2V0VW5pdFR5cGUoYSkpLFtkLGNdfWZ1bmN0aW9uIG4oKXt2YXIgYT17bXlQYXJlbnQ6Zi5wYXJlbnROb2RlfHxjLmJvZHkscG9zaXRpb246di5nZXRQcm9wZXJ0eVZhbHVlKGYsXCJwb3NpdGlvblwiKSxmb250U2l6ZTp2LmdldFByb3BlcnR5VmFsdWUoZixcImZvbnRTaXplXCIpfSxkPWEucG9zaXRpb249PT1JLmxhc3RQb3NpdGlvbiYmYS5teVBhcmVudD09PUkubGFzdFBhcmVudCxlPWEuZm9udFNpemU9PT1JLmxhc3RGb250U2l6ZTtJLmxhc3RQYXJlbnQ9YS5teVBhcmVudCxJLmxhc3RQb3NpdGlvbj1hLnBvc2l0aW9uLEkubGFzdEZvbnRTaXplPWEuZm9udFNpemU7dmFyIGg9MTAwLGk9e307aWYoZSYmZClpLmVtVG9QeD1JLmxhc3RFbVRvUHgsaS5wZXJjZW50VG9QeFdpZHRoPUkubGFzdFBlcmNlbnRUb1B4V2lkdGgsaS5wZXJjZW50VG9QeEhlaWdodD1JLmxhc3RQZXJjZW50VG9QeEhlaWdodDtlbHNle3ZhciBqPWcoZikuaXNTVkc/Yy5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwicmVjdFwiKTpjLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5pbml0KGopLGEubXlQYXJlbnQuYXBwZW5kQ2hpbGQoaiksbS5lYWNoKFtcIm92ZXJmbG93XCIsXCJvdmVyZmxvd1hcIixcIm92ZXJmbG93WVwiXSxmdW5jdGlvbihhLGIpe3QuQ1NTLnNldFByb3BlcnR5VmFsdWUoaixiLFwiaGlkZGVuXCIpfSksdC5DU1Muc2V0UHJvcGVydHlWYWx1ZShqLFwicG9zaXRpb25cIixhLnBvc2l0aW9uKSx0LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGosXCJmb250U2l6ZVwiLGEuZm9udFNpemUpLHQuQ1NTLnNldFByb3BlcnR5VmFsdWUoaixcImJveFNpemluZ1wiLFwiY29udGVudC1ib3hcIiksbS5lYWNoKFtcIm1pbldpZHRoXCIsXCJtYXhXaWR0aFwiLFwid2lkdGhcIixcIm1pbkhlaWdodFwiLFwibWF4SGVpZ2h0XCIsXCJoZWlnaHRcIl0sZnVuY3Rpb24oYSxiKXt0LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGosYixoK1wiJVwiKX0pLHQuQ1NTLnNldFByb3BlcnR5VmFsdWUoaixcInBhZGRpbmdMZWZ0XCIsaCtcImVtXCIpLGkucGVyY2VudFRvUHhXaWR0aD1JLmxhc3RQZXJjZW50VG9QeFdpZHRoPShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShqLFwid2lkdGhcIixudWxsLCEwKSl8fDEpL2gsaS5wZXJjZW50VG9QeEhlaWdodD1JLmxhc3RQZXJjZW50VG9QeEhlaWdodD0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoaixcImhlaWdodFwiLG51bGwsITApKXx8MSkvaCxpLmVtVG9QeD1JLmxhc3RFbVRvUHg9KHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGosXCJwYWRkaW5nTGVmdFwiKSl8fDEpL2gsYS5teVBhcmVudC5yZW1vdmVDaGlsZChqKX1yZXR1cm4gbnVsbD09PUkucmVtVG9QeCYmKEkucmVtVG9QeD1wYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShjLmJvZHksXCJmb250U2l6ZVwiKSl8fDE2KSxudWxsPT09SS52d1RvUHgmJihJLnZ3VG9QeD1wYXJzZUZsb2F0KGIuaW5uZXJXaWR0aCkvMTAwLEkudmhUb1B4PXBhcnNlRmxvYXQoYi5pbm5lckhlaWdodCkvMTAwKSxpLnJlbVRvUHg9SS5yZW1Ub1B4LGkudndUb1B4PUkudndUb1B4LGkudmhUb1B4PUkudmhUb1B4LHQuZGVidWc+PTEmJmNvbnNvbGUubG9nKFwiVW5pdCByYXRpb3M6IFwiK0pTT04uc3RyaW5naWZ5KGkpLGYpLGl9aWYoaC5iZWdpbiYmMD09PXkpdHJ5e2guYmVnaW4uY2FsbChvLG8pfWNhdGNoKHIpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyByfSwxKX1pZihcInNjcm9sbFwiPT09Qyl7dmFyIHUsdyx6LEE9L154JC9pLnRlc3QoaC5heGlzKT9cIkxlZnRcIjpcIlRvcFwiLEQ9cGFyc2VGbG9hdChoLm9mZnNldCl8fDA7aC5jb250YWluZXI/cC5pc1dyYXBwZWQoaC5jb250YWluZXIpfHxwLmlzTm9kZShoLmNvbnRhaW5lcik/KGguY29udGFpbmVyPWguY29udGFpbmVyWzBdfHxoLmNvbnRhaW5lcix1PWguY29udGFpbmVyW1wic2Nyb2xsXCIrQV0sej11K20oZikucG9zaXRpb24oKVtBLnRvTG93ZXJDYXNlKCldK0QpOmguY29udGFpbmVyPW51bGw6KHU9dC5TdGF0ZS5zY3JvbGxBbmNob3JbdC5TdGF0ZVtcInNjcm9sbFByb3BlcnR5XCIrQV1dLHc9dC5TdGF0ZS5zY3JvbGxBbmNob3JbdC5TdGF0ZVtcInNjcm9sbFByb3BlcnR5XCIrKFwiTGVmdFwiPT09QT9cIlRvcFwiOlwiTGVmdFwiKV1dLHo9bShmKS5vZmZzZXQoKVtBLnRvTG93ZXJDYXNlKCldK0QpLGk9e3Njcm9sbDp7cm9vdFByb3BlcnR5VmFsdWU6ITEsc3RhcnRWYWx1ZTp1LGN1cnJlbnRWYWx1ZTp1LGVuZFZhbHVlOnosdW5pdFR5cGU6XCJcIixlYXNpbmc6aC5lYXNpbmcsc2Nyb2xsRGF0YTp7Y29udGFpbmVyOmguY29udGFpbmVyLGRpcmVjdGlvbjpBLGFsdGVybmF0ZVZhbHVlOnd9fSxlbGVtZW50OmZ9LHQuZGVidWcmJmNvbnNvbGUubG9nKFwidHdlZW5zQ29udGFpbmVyIChzY3JvbGwpOiBcIixpLnNjcm9sbCxmKX1lbHNlIGlmKFwicmV2ZXJzZVwiPT09Qyl7aWYoIWcoZikudHdlZW5zQ29udGFpbmVyKXJldHVybiB2b2lkIG0uZGVxdWV1ZShmLGgucXVldWUpO1wibm9uZVwiPT09ZyhmKS5vcHRzLmRpc3BsYXkmJihnKGYpLm9wdHMuZGlzcGxheT1cImF1dG9cIiksXCJoaWRkZW5cIj09PWcoZikub3B0cy52aXNpYmlsaXR5JiYoZyhmKS5vcHRzLnZpc2liaWxpdHk9XCJ2aXNpYmxlXCIpLGcoZikub3B0cy5sb29wPSExLGcoZikub3B0cy5iZWdpbj1udWxsLGcoZikub3B0cy5jb21wbGV0ZT1udWxsLHMuZWFzaW5nfHxkZWxldGUgaC5lYXNpbmcscy5kdXJhdGlvbnx8ZGVsZXRlIGguZHVyYXRpb24saD1tLmV4dGVuZCh7fSxnKGYpLm9wdHMsaCk7dmFyIEU9bS5leHRlbmQoITAse30sZyhmKS50d2VlbnNDb250YWluZXIpO2Zvcih2YXIgRiBpbiBFKWlmKFwiZWxlbWVudFwiIT09Ril7dmFyIEc9RVtGXS5zdGFydFZhbHVlO0VbRl0uc3RhcnRWYWx1ZT1FW0ZdLmN1cnJlbnRWYWx1ZT1FW0ZdLmVuZFZhbHVlLEVbRl0uZW5kVmFsdWU9RyxwLmlzRW1wdHlPYmplY3Qocyl8fChFW0ZdLmVhc2luZz1oLmVhc2luZyksdC5kZWJ1ZyYmY29uc29sZS5sb2coXCJyZXZlcnNlIHR3ZWVuc0NvbnRhaW5lciAoXCIrRitcIik6IFwiK0pTT04uc3RyaW5naWZ5KEVbRl0pLGYpfWk9RX1lbHNlIGlmKFwic3RhcnRcIj09PUMpe3ZhciBFO2coZikudHdlZW5zQ29udGFpbmVyJiZnKGYpLmlzQW5pbWF0aW5nPT09ITAmJihFPWcoZikudHdlZW5zQ29udGFpbmVyKSxtLmVhY2gocSxmdW5jdGlvbihiLGMpe2lmKFJlZ0V4cChcIl5cIit2Lkxpc3RzLmNvbG9ycy5qb2luKFwiJHxeXCIpK1wiJFwiKS50ZXN0KGIpKXt2YXIgZT1hKGMsITApLGY9ZVswXSxnPWVbMV0saD1lWzJdO2lmKHYuUmVnRXguaXNIZXgudGVzdChmKSl7Zm9yKHZhciBpPVtcIlJlZFwiLFwiR3JlZW5cIixcIkJsdWVcIl0saj12LlZhbHVlcy5oZXhUb1JnYihmKSxrPWg/di5WYWx1ZXMuaGV4VG9SZ2IoaCk6ZCxsPTA7bDxpLmxlbmd0aDtsKyspe3ZhciBtPVtqW2xdXTtnJiZtLnB1c2goZyksayE9PWQmJm0ucHVzaChrW2xdKSxxW2IraVtsXV09bX1kZWxldGUgcVtiXX19fSk7Zm9yKHZhciBIIGluIHEpe3ZhciBLPWEocVtIXSksTD1LWzBdLE09S1sxXSxOPUtbMl07SD12Lk5hbWVzLmNhbWVsQ2FzZShIKTt2YXIgTz12Lkhvb2tzLmdldFJvb3QoSCksUD0hMTtpZihnKGYpLmlzU1ZHfHxcInR3ZWVuXCI9PT1PfHx2Lk5hbWVzLnByZWZpeENoZWNrKE8pWzFdIT09ITF8fHYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtPXSE9PWQpeyhoLmRpc3BsYXkhPT1kJiZudWxsIT09aC5kaXNwbGF5JiZcIm5vbmVcIiE9PWguZGlzcGxheXx8aC52aXNpYmlsaXR5IT09ZCYmXCJoaWRkZW5cIiE9PWgudmlzaWJpbGl0eSkmJi9vcGFjaXR5fGZpbHRlci8udGVzdChIKSYmIU4mJjAhPT1MJiYoTj0wKSxoLl9jYWNoZVZhbHVlcyYmRSYmRVtIXT8oTj09PWQmJihOPUVbSF0uZW5kVmFsdWUrRVtIXS51bml0VHlwZSksUD1nKGYpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbT10pOnYuSG9va3MucmVnaXN0ZXJlZFtIXT9OPT09ZD8oUD12LmdldFByb3BlcnR5VmFsdWUoZixPKSxOPXYuZ2V0UHJvcGVydHlWYWx1ZShmLEgsUCkpOlA9di5Ib29rcy50ZW1wbGF0ZXNbT11bMV06Tj09PWQmJihOPXYuZ2V0UHJvcGVydHlWYWx1ZShmLEgpKTt2YXIgUSxSLFMsVD0hMTtpZihRPWwoSCxOKSxOPVFbMF0sUz1RWzFdLFE9bChILEwpLEw9UVswXS5yZXBsYWNlKC9eKFsrLVxcLypdKT0vLGZ1bmN0aW9uKGEsYil7cmV0dXJuIFQ9YixcIlwifSksUj1RWzFdLE49cGFyc2VGbG9hdChOKXx8MCxMPXBhcnNlRmxvYXQoTCl8fDAsXCIlXCI9PT1SJiYoL14oZm9udFNpemV8bGluZUhlaWdodCkkLy50ZXN0KEgpPyhMLz0xMDAsUj1cImVtXCIpOi9ec2NhbGUvLnRlc3QoSCk/KEwvPTEwMCxSPVwiXCIpOi8oUmVkfEdyZWVufEJsdWUpJC9pLnRlc3QoSCkmJihMPUwvMTAwKjI1NSxSPVwiXCIpKSwvW1xcLypdLy50ZXN0KFQpKVI9UztlbHNlIGlmKFMhPT1SJiYwIT09TilpZigwPT09TClSPVM7ZWxzZXtlPWV8fG4oKTt2YXIgVT0vbWFyZ2lufHBhZGRpbmd8bGVmdHxyaWdodHx3aWR0aHx0ZXh0fHdvcmR8bGV0dGVyL2kudGVzdChIKXx8L1gkLy50ZXN0KEgpfHxcInhcIj09PUg/XCJ4XCI6XCJ5XCI7c3dpdGNoKFMpe2Nhc2VcIiVcIjpOKj1cInhcIj09PVU/ZS5wZXJjZW50VG9QeFdpZHRoOmUucGVyY2VudFRvUHhIZWlnaHQ7YnJlYWs7Y2FzZVwicHhcIjpicmVhaztkZWZhdWx0Ok4qPWVbUytcIlRvUHhcIl19c3dpdGNoKFIpe2Nhc2VcIiVcIjpOKj0xLyhcInhcIj09PVU/ZS5wZXJjZW50VG9QeFdpZHRoOmUucGVyY2VudFRvUHhIZWlnaHQpO2JyZWFrO2Nhc2VcInB4XCI6YnJlYWs7ZGVmYXVsdDpOKj0xL2VbUitcIlRvUHhcIl19fXN3aXRjaChUKXtjYXNlXCIrXCI6TD1OK0w7YnJlYWs7Y2FzZVwiLVwiOkw9Ti1MO2JyZWFrO2Nhc2VcIipcIjpMPU4qTDticmVhaztjYXNlXCIvXCI6TD1OL0x9aVtIXT17cm9vdFByb3BlcnR5VmFsdWU6UCxzdGFydFZhbHVlOk4sY3VycmVudFZhbHVlOk4sZW5kVmFsdWU6TCx1bml0VHlwZTpSLGVhc2luZzpNfSx0LmRlYnVnJiZjb25zb2xlLmxvZyhcInR3ZWVuc0NvbnRhaW5lciAoXCIrSCtcIik6IFwiK0pTT04uc3RyaW5naWZ5KGlbSF0pLGYpfWVsc2UgdC5kZWJ1ZyYmY29uc29sZS5sb2coXCJTa2lwcGluZyBbXCIrTytcIl0gZHVlIHRvIGEgbGFjayBvZiBicm93c2VyIHN1cHBvcnQuXCIpfWkuZWxlbWVudD1mfWkuZWxlbWVudCYmKHYuVmFsdWVzLmFkZENsYXNzKGYsXCJ2ZWxvY2l0eS1hbmltYXRpbmdcIiksSi5wdXNoKGkpLFwiXCI9PT1oLnF1ZXVlJiYoZyhmKS50d2VlbnNDb250YWluZXI9aSxnKGYpLm9wdHM9aCksZyhmKS5pc0FuaW1hdGluZz0hMCx5PT09eC0xPyh0LlN0YXRlLmNhbGxzLnB1c2goW0osbyxoLG51bGwsQi5yZXNvbHZlcl0pLHQuU3RhdGUuaXNUaWNraW5nPT09ITEmJih0LlN0YXRlLmlzVGlja2luZz0hMCxrKCkpKTp5KyspfXZhciBlLGY9dGhpcyxoPW0uZXh0ZW5kKHt9LHQuZGVmYXVsdHMscyksaT17fTtzd2l0Y2goZyhmKT09PWQmJnQuaW5pdChmKSxwYXJzZUZsb2F0KGguZGVsYXkpJiZoLnF1ZXVlIT09ITEmJm0ucXVldWUoZixoLnF1ZXVlLGZ1bmN0aW9uKGEpe3QudmVsb2NpdHlRdWV1ZUVudHJ5RmxhZz0hMCxnKGYpLmRlbGF5VGltZXI9e3NldFRpbWVvdXQ6c2V0VGltZW91dChhLHBhcnNlRmxvYXQoaC5kZWxheSkpLG5leHQ6YX19KSxoLmR1cmF0aW9uLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSl7Y2FzZVwiZmFzdFwiOmguZHVyYXRpb249MjAwO2JyZWFrO2Nhc2VcIm5vcm1hbFwiOmguZHVyYXRpb249cjticmVhaztjYXNlXCJzbG93XCI6aC5kdXJhdGlvbj02MDA7YnJlYWs7ZGVmYXVsdDpoLmR1cmF0aW9uPXBhcnNlRmxvYXQoaC5kdXJhdGlvbil8fDF9dC5tb2NrIT09ITEmJih0Lm1vY2s9PT0hMD9oLmR1cmF0aW9uPWguZGVsYXk9MTooaC5kdXJhdGlvbio9cGFyc2VGbG9hdCh0Lm1vY2spfHwxLGguZGVsYXkqPXBhcnNlRmxvYXQodC5tb2NrKXx8MSkpLGguZWFzaW5nPWooaC5lYXNpbmcsaC5kdXJhdGlvbiksaC5iZWdpbiYmIXAuaXNGdW5jdGlvbihoLmJlZ2luKSYmKGguYmVnaW49bnVsbCksaC5wcm9ncmVzcyYmIXAuaXNGdW5jdGlvbihoLnByb2dyZXNzKSYmKGgucHJvZ3Jlc3M9bnVsbCksaC5jb21wbGV0ZSYmIXAuaXNGdW5jdGlvbihoLmNvbXBsZXRlKSYmKGguY29tcGxldGU9bnVsbCksaC5kaXNwbGF5IT09ZCYmbnVsbCE9PWguZGlzcGxheSYmKGguZGlzcGxheT1oLmRpc3BsYXkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLFwiYXV0b1wiPT09aC5kaXNwbGF5JiYoaC5kaXNwbGF5PXQuQ1NTLlZhbHVlcy5nZXREaXNwbGF5VHlwZShmKSkpLGgudmlzaWJpbGl0eSE9PWQmJm51bGwhPT1oLnZpc2liaWxpdHkmJihoLnZpc2liaWxpdHk9aC52aXNpYmlsaXR5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSksaC5tb2JpbGVIQT1oLm1vYmlsZUhBJiZ0LlN0YXRlLmlzTW9iaWxlJiYhdC5TdGF0ZS5pc0dpbmdlcmJyZWFkLGgucXVldWU9PT0hMT9oLmRlbGF5P3NldFRpbWVvdXQoYSxoLmRlbGF5KTphKCk6bS5xdWV1ZShmLGgucXVldWUsZnVuY3Rpb24oYixjKXtyZXR1cm4gYz09PSEwPyhCLnByb21pc2UmJkIucmVzb2x2ZXIobyksITApOih0LnZlbG9jaXR5UXVldWVFbnRyeUZsYWc9ITAsdm9pZCBhKGIpKX0pLFwiXCIhPT1oLnF1ZXVlJiZcImZ4XCIhPT1oLnF1ZXVlfHxcImlucHJvZ3Jlc3NcIj09PW0ucXVldWUoZilbMF18fG0uZGVxdWV1ZShmKX12YXIgaCxpLG4sbyxxLHMsdT1hcmd1bWVudHNbMF0mJihhcmd1bWVudHNbMF0ucHx8bS5pc1BsYWluT2JqZWN0KGFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzKSYmIWFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzLm5hbWVzfHxwLmlzU3RyaW5nKGFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzKSk7aWYocC5pc1dyYXBwZWQodGhpcyk/KGg9ITEsbj0wLG89dGhpcyxpPXRoaXMpOihoPSEwLG49MSxvPXU/YXJndW1lbnRzWzBdLmVsZW1lbnRzfHxhcmd1bWVudHNbMF0uZTphcmd1bWVudHNbMF0pLG89ZihvKSl7dT8ocT1hcmd1bWVudHNbMF0ucHJvcGVydGllc3x8YXJndW1lbnRzWzBdLnAscz1hcmd1bWVudHNbMF0ub3B0aW9uc3x8YXJndW1lbnRzWzBdLm8pOihxPWFyZ3VtZW50c1tuXSxzPWFyZ3VtZW50c1tuKzFdKTt2YXIgeD1vLmxlbmd0aCx5PTA7aWYoIS9eKHN0b3B8ZmluaXNofGZpbmlzaEFsbCkkL2kudGVzdChxKSYmIW0uaXNQbGFpbk9iamVjdChzKSl7dmFyIHo9bisxO3M9e307Zm9yKHZhciBBPXo7QTxhcmd1bWVudHMubGVuZ3RoO0ErKylwLmlzQXJyYXkoYXJndW1lbnRzW0FdKXx8IS9eKGZhc3R8bm9ybWFsfHNsb3cpJC9pLnRlc3QoYXJndW1lbnRzW0FdKSYmIS9eXFxkLy50ZXN0KGFyZ3VtZW50c1tBXSk/cC5pc1N0cmluZyhhcmd1bWVudHNbQV0pfHxwLmlzQXJyYXkoYXJndW1lbnRzW0FdKT9zLmVhc2luZz1hcmd1bWVudHNbQV06cC5pc0Z1bmN0aW9uKGFyZ3VtZW50c1tBXSkmJihzLmNvbXBsZXRlPWFyZ3VtZW50c1tBXSk6cy5kdXJhdGlvbj1hcmd1bWVudHNbQV19dmFyIEI9e3Byb21pc2U6bnVsbCxyZXNvbHZlcjpudWxsLHJlamVjdGVyOm51bGx9O2gmJnQuUHJvbWlzZSYmKEIucHJvbWlzZT1uZXcgdC5Qcm9taXNlKGZ1bmN0aW9uKGEsYil7Qi5yZXNvbHZlcj1hLEIucmVqZWN0ZXI9Yn0pKTt2YXIgQztzd2l0Y2gocSl7Y2FzZVwic2Nyb2xsXCI6Qz1cInNjcm9sbFwiO2JyZWFrO2Nhc2VcInJldmVyc2VcIjpDPVwicmV2ZXJzZVwiO2JyZWFrO2Nhc2VcImZpbmlzaFwiOmNhc2VcImZpbmlzaEFsbFwiOmNhc2VcInN0b3BcIjptLmVhY2gobyxmdW5jdGlvbihhLGIpe2coYikmJmcoYikuZGVsYXlUaW1lciYmKGNsZWFyVGltZW91dChnKGIpLmRlbGF5VGltZXIuc2V0VGltZW91dCksZyhiKS5kZWxheVRpbWVyLm5leHQmJmcoYikuZGVsYXlUaW1lci5uZXh0KCksZGVsZXRlIGcoYikuZGVsYXlUaW1lciksXCJmaW5pc2hBbGxcIiE9PXF8fHMhPT0hMCYmIXAuaXNTdHJpbmcocyl8fChtLmVhY2gobS5xdWV1ZShiLHAuaXNTdHJpbmcocyk/czpcIlwiKSxmdW5jdGlvbihhLGIpe3AuaXNGdW5jdGlvbihiKSYmYigpfSksbS5xdWV1ZShiLHAuaXNTdHJpbmcocyk/czpcIlwiLFtdKSl9KTt2YXIgRD1bXTtyZXR1cm4gbS5lYWNoKHQuU3RhdGUuY2FsbHMsZnVuY3Rpb24oYSxiKXtiJiZtLmVhY2goYlsxXSxmdW5jdGlvbihjLGUpe3ZhciBmPXM9PT1kP1wiXCI6cztyZXR1cm4gZj09PSEwfHxiWzJdLnF1ZXVlPT09Znx8cz09PWQmJmJbMl0ucXVldWU9PT0hMT92b2lkIG0uZWFjaChvLGZ1bmN0aW9uKGMsZCl7ZD09PWUmJigocz09PSEwfHxwLmlzU3RyaW5nKHMpKSYmKG0uZWFjaChtLnF1ZXVlKGQscC5pc1N0cmluZyhzKT9zOlwiXCIpLGZ1bmN0aW9uKGEsYil7cC5pc0Z1bmN0aW9uKGIpJiZiKG51bGwsITApXG59KSxtLnF1ZXVlKGQscC5pc1N0cmluZyhzKT9zOlwiXCIsW10pKSxcInN0b3BcIj09PXE/KGcoZCkmJmcoZCkudHdlZW5zQ29udGFpbmVyJiZmIT09ITEmJm0uZWFjaChnKGQpLnR3ZWVuc0NvbnRhaW5lcixmdW5jdGlvbihhLGIpe2IuZW5kVmFsdWU9Yi5jdXJyZW50VmFsdWV9KSxELnB1c2goYSkpOihcImZpbmlzaFwiPT09cXx8XCJmaW5pc2hBbGxcIj09PXEpJiYoYlsyXS5kdXJhdGlvbj0xKSl9KTohMH0pfSksXCJzdG9wXCI9PT1xJiYobS5lYWNoKEQsZnVuY3Rpb24oYSxiKXtsKGIsITApfSksQi5wcm9taXNlJiZCLnJlc29sdmVyKG8pKSxhKCk7ZGVmYXVsdDppZighbS5pc1BsYWluT2JqZWN0KHEpfHxwLmlzRW1wdHlPYmplY3QocSkpe2lmKHAuaXNTdHJpbmcocSkmJnQuUmVkaXJlY3RzW3FdKXt2YXIgRT1tLmV4dGVuZCh7fSxzKSxGPUUuZHVyYXRpb24sRz1FLmRlbGF5fHwwO3JldHVybiBFLmJhY2t3YXJkcz09PSEwJiYobz1tLmV4dGVuZCghMCxbXSxvKS5yZXZlcnNlKCkpLG0uZWFjaChvLGZ1bmN0aW9uKGEsYil7cGFyc2VGbG9hdChFLnN0YWdnZXIpP0UuZGVsYXk9RytwYXJzZUZsb2F0KEUuc3RhZ2dlcikqYTpwLmlzRnVuY3Rpb24oRS5zdGFnZ2VyKSYmKEUuZGVsYXk9RytFLnN0YWdnZXIuY2FsbChiLGEseCkpLEUuZHJhZyYmKEUuZHVyYXRpb249cGFyc2VGbG9hdChGKXx8KC9eKGNhbGxvdXR8dHJhbnNpdGlvbikvLnRlc3QocSk/MWUzOnIpLEUuZHVyYXRpb249TWF0aC5tYXgoRS5kdXJhdGlvbiooRS5iYWNrd2FyZHM/MS1hL3g6KGErMSkveCksLjc1KkUuZHVyYXRpb24sMjAwKSksdC5SZWRpcmVjdHNbcV0uY2FsbChiLGIsRXx8e30sYSx4LG8sQi5wcm9taXNlP0I6ZCl9KSxhKCl9dmFyIEg9XCJWZWxvY2l0eTogRmlyc3QgYXJndW1lbnQgKFwiK3ErXCIpIHdhcyBub3QgYSBwcm9wZXJ0eSBtYXAsIGEga25vd24gYWN0aW9uLCBvciBhIHJlZ2lzdGVyZWQgcmVkaXJlY3QuIEFib3J0aW5nLlwiO3JldHVybiBCLnByb21pc2U/Qi5yZWplY3RlcihuZXcgRXJyb3IoSCkpOmNvbnNvbGUubG9nKEgpLGEoKX1DPVwic3RhcnRcIn12YXIgST17bGFzdFBhcmVudDpudWxsLGxhc3RQb3NpdGlvbjpudWxsLGxhc3RGb250U2l6ZTpudWxsLGxhc3RQZXJjZW50VG9QeFdpZHRoOm51bGwsbGFzdFBlcmNlbnRUb1B4SGVpZ2h0Om51bGwsbGFzdEVtVG9QeDpudWxsLHJlbVRvUHg6bnVsbCx2d1RvUHg6bnVsbCx2aFRvUHg6bnVsbH0sSj1bXTttLmVhY2gobyxmdW5jdGlvbihhLGIpe3AuaXNOb2RlKGIpJiZlLmNhbGwoYil9KTt2YXIgSyxFPW0uZXh0ZW5kKHt9LHQuZGVmYXVsdHMscyk7aWYoRS5sb29wPXBhcnNlSW50KEUubG9vcCksSz0yKkUubG9vcC0xLEUubG9vcClmb3IodmFyIEw9MDtLPkw7TCsrKXt2YXIgTT17ZGVsYXk6RS5kZWxheSxwcm9ncmVzczpFLnByb2dyZXNzfTtMPT09Sy0xJiYoTS5kaXNwbGF5PUUuZGlzcGxheSxNLnZpc2liaWxpdHk9RS52aXNpYmlsaXR5LE0uY29tcGxldGU9RS5jb21wbGV0ZSksdyhvLFwicmV2ZXJzZVwiLE0pfXJldHVybiBhKCl9fTt0PW0uZXh0ZW5kKHcsdCksdC5hbmltYXRlPXc7dmFyIHg9Yi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fG87cmV0dXJuIHQuU3RhdGUuaXNNb2JpbGV8fGMuaGlkZGVuPT09ZHx8Yy5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLGZ1bmN0aW9uKCl7Yy5oaWRkZW4/KHg9ZnVuY3Rpb24oYSl7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXthKCEwKX0sMTYpfSxrKCkpOng9Yi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fG99KSxhLlZlbG9jaXR5PXQsYSE9PWImJihhLmZuLnZlbG9jaXR5PXcsYS5mbi52ZWxvY2l0eS5kZWZhdWx0cz10LmRlZmF1bHRzKSxtLmVhY2goW1wiRG93blwiLFwiVXBcIl0sZnVuY3Rpb24oYSxiKXt0LlJlZGlyZWN0c1tcInNsaWRlXCIrYl09ZnVuY3Rpb24oYSxjLGUsZixnLGgpe3ZhciBpPW0uZXh0ZW5kKHt9LGMpLGo9aS5iZWdpbixrPWkuY29tcGxldGUsbD17aGVpZ2h0OlwiXCIsbWFyZ2luVG9wOlwiXCIsbWFyZ2luQm90dG9tOlwiXCIscGFkZGluZ1RvcDpcIlwiLHBhZGRpbmdCb3R0b206XCJcIn0sbj17fTtpLmRpc3BsYXk9PT1kJiYoaS5kaXNwbGF5PVwiRG93blwiPT09Yj9cImlubGluZVwiPT09dC5DU1MuVmFsdWVzLmdldERpc3BsYXlUeXBlKGEpP1wiaW5saW5lLWJsb2NrXCI6XCJibG9ja1wiOlwibm9uZVwiKSxpLmJlZ2luPWZ1bmN0aW9uKCl7aiYmai5jYWxsKGcsZyk7Zm9yKHZhciBjIGluIGwpe25bY109YS5zdHlsZVtjXTt2YXIgZD10LkNTUy5nZXRQcm9wZXJ0eVZhbHVlKGEsYyk7bFtjXT1cIkRvd25cIj09PWI/W2QsMF06WzAsZF19bi5vdmVyZmxvdz1hLnN0eWxlLm92ZXJmbG93LGEuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIn0saS5jb21wbGV0ZT1mdW5jdGlvbigpe2Zvcih2YXIgYiBpbiBuKWEuc3R5bGVbYl09bltiXTtrJiZrLmNhbGwoZyxnKSxoJiZoLnJlc29sdmVyKGcpfSx0KGEsbCxpKX19KSxtLmVhY2goW1wiSW5cIixcIk91dFwiXSxmdW5jdGlvbihhLGIpe3QuUmVkaXJlY3RzW1wiZmFkZVwiK2JdPWZ1bmN0aW9uKGEsYyxlLGYsZyxoKXt2YXIgaT1tLmV4dGVuZCh7fSxjKSxqPXtvcGFjaXR5OlwiSW5cIj09PWI/MTowfSxrPWkuY29tcGxldGU7aS5jb21wbGV0ZT1lIT09Zi0xP2kuYmVnaW49bnVsbDpmdW5jdGlvbigpe2smJmsuY2FsbChnLGcpLGgmJmgucmVzb2x2ZXIoZyl9LGkuZGlzcGxheT09PWQmJihpLmRpc3BsYXk9XCJJblwiPT09Yj9cImF1dG9cIjpcIm5vbmVcIiksdCh0aGlzLGosaSl9fSksdH0od2luZG93LmpRdWVyeXx8d2luZG93LlplcHRvfHx3aW5kb3csd2luZG93LGRvY3VtZW50KX0pOyIsIi8qIVxuICogSXNvdG9wZSBQQUNLQUdFRCB2My4wLjFcbiAqXG4gKiBMaWNlbnNlZCBHUEx2MyBmb3Igb3BlbiBzb3VyY2UgdXNlXG4gKiBvciBJc290b3BlIENvbW1lcmNpYWwgTGljZW5zZSBmb3IgY29tbWVyY2lhbCB1c2VcbiAqXG4gKiBodHRwOi8vaXNvdG9wZS5tZXRhZml6enkuY29cbiAqIENvcHlyaWdodCAyMDE2IE1ldGFmaXp6eVxuICovXG5cbi8qKlxuICogQnJpZGdldCBtYWtlcyBqUXVlcnkgd2lkZ2V0c1xuICogdjIuMC4wXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qIGpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAndXNlIHN0cmljdCc7XG4gIC8qIGdsb2JhbHMgZGVmaW5lOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSwgcmVxdWlyZTogZmFsc2UgKi9cblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggJ2pxdWVyeS1icmlkZ2V0L2pxdWVyeS1icmlkZ2V0JyxbICdqcXVlcnknIF0sIGZ1bmN0aW9uKCBqUXVlcnkgKSB7XG4gICAgICBmYWN0b3J5KCB3aW5kb3csIGpRdWVyeSApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnanF1ZXJ5JylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LmpRdWVyeUJyaWRnZXQgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LmpRdWVyeVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIGpRdWVyeSApIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0gdXRpbHMgLS0tLS0gLy9cblxudmFyIGFycmF5U2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbi8vIGhlbHBlciBmdW5jdGlvbiBmb3IgbG9nZ2luZyBlcnJvcnNcbi8vICQuZXJyb3IgYnJlYWtzIGpRdWVyeSBjaGFpbmluZ1xudmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcbnZhciBsb2dFcnJvciA9IHR5cGVvZiBjb25zb2xlID09ICd1bmRlZmluZWQnID8gZnVuY3Rpb24oKSB7fSA6XG4gIGZ1bmN0aW9uKCBtZXNzYWdlICkge1xuICAgIGNvbnNvbGUuZXJyb3IoIG1lc3NhZ2UgKTtcbiAgfTtcblxuLy8gLS0tLS0galF1ZXJ5QnJpZGdldCAtLS0tLSAvL1xuXG5mdW5jdGlvbiBqUXVlcnlCcmlkZ2V0KCBuYW1lc3BhY2UsIFBsdWdpbkNsYXNzLCAkICkge1xuICAkID0gJCB8fCBqUXVlcnkgfHwgd2luZG93LmpRdWVyeTtcbiAgaWYgKCAhJCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBhZGQgb3B0aW9uIG1ldGhvZCAtPiAkKCkucGx1Z2luKCdvcHRpb24nLCB7Li4ufSlcbiAgaWYgKCAhUGx1Z2luQ2xhc3MucHJvdG90eXBlLm9wdGlvbiApIHtcbiAgICAvLyBvcHRpb24gc2V0dGVyXG4gICAgUGx1Z2luQ2xhc3MucHJvdG90eXBlLm9wdGlvbiA9IGZ1bmN0aW9uKCBvcHRzICkge1xuICAgICAgLy8gYmFpbCBvdXQgaWYgbm90IGFuIG9iamVjdFxuICAgICAgaWYgKCAhJC5pc1BsYWluT2JqZWN0KCBvcHRzICkgKXtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoIHRydWUsIHRoaXMub3B0aW9ucywgb3B0cyApO1xuICAgIH07XG4gIH1cblxuICAvLyBtYWtlIGpRdWVyeSBwbHVnaW5cbiAgJC5mblsgbmFtZXNwYWNlIF0gPSBmdW5jdGlvbiggYXJnMCAvKiwgYXJnMSAqLyApIHtcbiAgICBpZiAoIHR5cGVvZiBhcmcwID09ICdzdHJpbmcnICkge1xuICAgICAgLy8gbWV0aG9kIGNhbGwgJCgpLnBsdWdpbiggJ21ldGhvZE5hbWUnLCB7IG9wdGlvbnMgfSApXG4gICAgICAvLyBzaGlmdCBhcmd1bWVudHMgYnkgMVxuICAgICAgdmFyIGFyZ3MgPSBhcnJheVNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApO1xuICAgICAgcmV0dXJuIG1ldGhvZENhbGwoIHRoaXMsIGFyZzAsIGFyZ3MgKTtcbiAgICB9XG4gICAgLy8ganVzdCAkKCkucGx1Z2luKHsgb3B0aW9ucyB9KVxuICAgIHBsYWluQ2FsbCggdGhpcywgYXJnMCApO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vICQoKS5wbHVnaW4oJ21ldGhvZE5hbWUnKVxuICBmdW5jdGlvbiBtZXRob2RDYWxsKCAkZWxlbXMsIG1ldGhvZE5hbWUsIGFyZ3MgKSB7XG4gICAgdmFyIHJldHVyblZhbHVlO1xuICAgIHZhciBwbHVnaW5NZXRob2RTdHIgPSAnJCgpLicgKyBuYW1lc3BhY2UgKyAnKFwiJyArIG1ldGhvZE5hbWUgKyAnXCIpJztcblxuICAgICRlbGVtcy5lYWNoKCBmdW5jdGlvbiggaSwgZWxlbSApIHtcbiAgICAgIC8vIGdldCBpbnN0YW5jZVxuICAgICAgdmFyIGluc3RhbmNlID0gJC5kYXRhKCBlbGVtLCBuYW1lc3BhY2UgKTtcbiAgICAgIGlmICggIWluc3RhbmNlICkge1xuICAgICAgICBsb2dFcnJvciggbmFtZXNwYWNlICsgJyBub3QgaW5pdGlhbGl6ZWQuIENhbm5vdCBjYWxsIG1ldGhvZHMsIGkuZS4gJyArXG4gICAgICAgICAgcGx1Z2luTWV0aG9kU3RyICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG1ldGhvZCA9IGluc3RhbmNlWyBtZXRob2ROYW1lIF07XG4gICAgICBpZiAoICFtZXRob2QgfHwgbWV0aG9kTmFtZS5jaGFyQXQoMCkgPT0gJ18nICkge1xuICAgICAgICBsb2dFcnJvciggcGx1Z2luTWV0aG9kU3RyICsgJyBpcyBub3QgYSB2YWxpZCBtZXRob2QnICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXBwbHkgbWV0aG9kLCBnZXQgcmV0dXJuIHZhbHVlXG4gICAgICB2YXIgdmFsdWUgPSBtZXRob2QuYXBwbHkoIGluc3RhbmNlLCBhcmdzICk7XG4gICAgICAvLyBzZXQgcmV0dXJuIHZhbHVlIGlmIHZhbHVlIGlzIHJldHVybmVkLCB1c2Ugb25seSBmaXJzdCB2YWx1ZVxuICAgICAgcmV0dXJuVmFsdWUgPSByZXR1cm5WYWx1ZSA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiByZXR1cm5WYWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXR1cm5WYWx1ZSAhPT0gdW5kZWZpbmVkID8gcmV0dXJuVmFsdWUgOiAkZWxlbXM7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFpbkNhbGwoICRlbGVtcywgb3B0aW9ucyApIHtcbiAgICAkZWxlbXMuZWFjaCggZnVuY3Rpb24oIGksIGVsZW0gKSB7XG4gICAgICB2YXIgaW5zdGFuY2UgPSAkLmRhdGEoIGVsZW0sIG5hbWVzcGFjZSApO1xuICAgICAgaWYgKCBpbnN0YW5jZSApIHtcbiAgICAgICAgLy8gc2V0IG9wdGlvbnMgJiBpbml0XG4gICAgICAgIGluc3RhbmNlLm9wdGlvbiggb3B0aW9ucyApO1xuICAgICAgICBpbnN0YW5jZS5faW5pdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBuZXcgaW5zdGFuY2VcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgUGx1Z2luQ2xhc3MoIGVsZW0sIG9wdGlvbnMgKTtcbiAgICAgICAgJC5kYXRhKCBlbGVtLCBuYW1lc3BhY2UsIGluc3RhbmNlICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVKUXVlcnkoICQgKTtcblxufVxuXG4vLyAtLS0tLSB1cGRhdGVKUXVlcnkgLS0tLS0gLy9cblxuLy8gc2V0ICQuYnJpZGdldCBmb3IgdjEgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbmZ1bmN0aW9uIHVwZGF0ZUpRdWVyeSggJCApIHtcbiAgaWYgKCAhJCB8fCAoICQgJiYgJC5icmlkZ2V0ICkgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gICQuYnJpZGdldCA9IGpRdWVyeUJyaWRnZXQ7XG59XG5cbnVwZGF0ZUpRdWVyeSggalF1ZXJ5IHx8IHdpbmRvdy5qUXVlcnkgKTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbnJldHVybiBqUXVlcnlCcmlkZ2V0O1xuXG59KSk7XG5cbi8qKlxuICogRXZFbWl0dGVyIHYxLjAuM1xuICogTGlsJyBldmVudCBlbWl0dGVyXG4gKiBNSVQgTGljZW5zZVxuICovXG5cbi8qIGpzaGludCB1bnVzZWQ6IHRydWUsIHVuZGVmOiB0cnVlLCBzdHJpY3Q6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggZ2xvYmFsLCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgd2luZG93ICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EIC0gUmVxdWlyZUpTXG4gICAgZGVmaW5lKCAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJyxmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlMgLSBCcm93c2VyaWZ5LCBXZWJwYWNrXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgZ2xvYmFsLkV2RW1pdHRlciA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KCB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24oKSB7XG5cblxuXG5mdW5jdGlvbiBFdkVtaXR0ZXIoKSB7fVxuXG52YXIgcHJvdG8gPSBFdkVtaXR0ZXIucHJvdG90eXBlO1xuXG5wcm90by5vbiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBzZXQgZXZlbnRzIGhhc2hcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgLy8gc2V0IGxpc3RlbmVycyBhcnJheVxuICB2YXIgbGlzdGVuZXJzID0gZXZlbnRzWyBldmVudE5hbWUgXSA9IGV2ZW50c1sgZXZlbnROYW1lIF0gfHwgW107XG4gIC8vIG9ubHkgYWRkIG9uY2VcbiAgaWYgKCBsaXN0ZW5lcnMuaW5kZXhPZiggbGlzdGVuZXIgKSA9PSAtMSApIHtcbiAgICBsaXN0ZW5lcnMucHVzaCggbGlzdGVuZXIgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub25jZSA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhZGQgZXZlbnRcbiAgdGhpcy5vbiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAvLyBzZXQgb25jZSBmbGFnXG4gIC8vIHNldCBvbmNlRXZlbnRzIGhhc2hcbiAgdmFyIG9uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyB8fCB7fTtcbiAgLy8gc2V0IG9uY2VMaXN0ZW5lcnMgb2JqZWN0XG4gIHZhciBvbmNlTGlzdGVuZXJzID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSB8fCB7fTtcbiAgLy8gc2V0IGZsYWdcbiAgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXSA9IHRydWU7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vZmYgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKCBsaXN0ZW5lciApO1xuICBpZiAoIGluZGV4ICE9IC0xICkge1xuICAgIGxpc3RlbmVycy5zcGxpY2UoIGluZGV4LCAxICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmVtaXRFdmVudCA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGFyZ3MgKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgaSA9IDA7XG4gIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgYXJncyA9IGFyZ3MgfHwgW107XG4gIC8vIG9uY2Ugc3R1ZmZcbiAgdmFyIG9uY2VMaXN0ZW5lcnMgPSB0aGlzLl9vbmNlRXZlbnRzICYmIHRoaXMuX29uY2VFdmVudHNbIGV2ZW50TmFtZSBdO1xuXG4gIHdoaWxlICggbGlzdGVuZXIgKSB7XG4gICAgdmFyIGlzT25jZSA9IG9uY2VMaXN0ZW5lcnMgJiYgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICBpZiAoIGlzT25jZSApIHtcbiAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lclxuICAgICAgLy8gcmVtb3ZlIGJlZm9yZSB0cmlnZ2VyIHRvIHByZXZlbnQgcmVjdXJzaW9uXG4gICAgICB0aGlzLm9mZiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAgICAgLy8gdW5zZXQgb25jZSBmbGFnXG4gICAgICBkZWxldGUgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICB9XG4gICAgLy8gdHJpZ2dlciBsaXN0ZW5lclxuICAgIGxpc3RlbmVyLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gICAgLy8gZ2V0IG5leHQgbGlzdGVuZXJcbiAgICBpICs9IGlzT25jZSA/IDAgOiAxO1xuICAgIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5yZXR1cm4gRXZFbWl0dGVyO1xuXG59KSk7XG5cbi8qIVxuICogZ2V0U2l6ZSB2Mi4wLjJcbiAqIG1lYXN1cmUgc2l6ZSBvZiBlbGVtZW50c1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUgKi9cbi8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIG1vZHVsZTogZmFsc2UsIGNvbnNvbGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCAnZ2V0LXNpemUvZ2V0LXNpemUnLFtdLGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LmdldFNpemUgPSBmYWN0b3J5KCk7XG4gIH1cblxufSkoIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBnZXQgYSBudW1iZXIgZnJvbSBhIHN0cmluZywgbm90IGEgcGVyY2VudGFnZVxuZnVuY3Rpb24gZ2V0U3R5bGVTaXplKCB2YWx1ZSApIHtcbiAgdmFyIG51bSA9IHBhcnNlRmxvYXQoIHZhbHVlICk7XG4gIC8vIG5vdCBhIHBlcmNlbnQgbGlrZSAnMTAwJScsIGFuZCBhIG51bWJlclxuICB2YXIgaXNWYWxpZCA9IHZhbHVlLmluZGV4T2YoJyUnKSA9PSAtMSAmJiAhaXNOYU4oIG51bSApO1xuICByZXR1cm4gaXNWYWxpZCAmJiBudW07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgbG9nRXJyb3IgPSB0eXBlb2YgY29uc29sZSA9PSAndW5kZWZpbmVkJyA/IG5vb3AgOlxuICBmdW5jdGlvbiggbWVzc2FnZSApIHtcbiAgICBjb25zb2xlLmVycm9yKCBtZXNzYWdlICk7XG4gIH07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1lYXN1cmVtZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgbWVhc3VyZW1lbnRzID0gW1xuICAncGFkZGluZ0xlZnQnLFxuICAncGFkZGluZ1JpZ2h0JyxcbiAgJ3BhZGRpbmdUb3AnLFxuICAncGFkZGluZ0JvdHRvbScsXG4gICdtYXJnaW5MZWZ0JyxcbiAgJ21hcmdpblJpZ2h0JyxcbiAgJ21hcmdpblRvcCcsXG4gICdtYXJnaW5Cb3R0b20nLFxuICAnYm9yZGVyTGVmdFdpZHRoJyxcbiAgJ2JvcmRlclJpZ2h0V2lkdGgnLFxuICAnYm9yZGVyVG9wV2lkdGgnLFxuICAnYm9yZGVyQm90dG9tV2lkdGgnXG5dO1xuXG52YXIgbWVhc3VyZW1lbnRzTGVuZ3RoID0gbWVhc3VyZW1lbnRzLmxlbmd0aDtcblxuZnVuY3Rpb24gZ2V0WmVyb1NpemUoKSB7XG4gIHZhciBzaXplID0ge1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBpbm5lcldpZHRoOiAwLFxuICAgIGlubmVySGVpZ2h0OiAwLFxuICAgIG91dGVyV2lkdGg6IDAsXG4gICAgb3V0ZXJIZWlnaHQ6IDBcbiAgfTtcbiAgZm9yICggdmFyIGk9MDsgaSA8IG1lYXN1cmVtZW50c0xlbmd0aDsgaSsrICkge1xuICAgIHZhciBtZWFzdXJlbWVudCA9IG1lYXN1cmVtZW50c1tpXTtcbiAgICBzaXplWyBtZWFzdXJlbWVudCBdID0gMDtcbiAgfVxuICByZXR1cm4gc2l6ZTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2V0U3R5bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBnZXRTdHlsZSwgZ2V0IHN0eWxlIG9mIGVsZW1lbnQsIGNoZWNrIGZvciBGaXJlZm94IGJ1Z1xuICogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gKi9cbmZ1bmN0aW9uIGdldFN0eWxlKCBlbGVtICkge1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKCBlbGVtICk7XG4gIGlmICggIXN0eWxlICkge1xuICAgIGxvZ0Vycm9yKCAnU3R5bGUgcmV0dXJuZWQgJyArIHN0eWxlICtcbiAgICAgICcuIEFyZSB5b3UgcnVubmluZyB0aGlzIGNvZGUgaW4gYSBoaWRkZW4gaWZyYW1lIG9uIEZpcmVmb3g/ICcgK1xuICAgICAgJ1NlZSBodHRwOi8vYml0Lmx5L2dldHNpemVidWcxJyApO1xuICB9XG4gIHJldHVybiBzdHlsZTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2V0dXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIGlzU2V0dXAgPSBmYWxzZTtcblxudmFyIGlzQm94U2l6ZU91dGVyO1xuXG4vKipcbiAqIHNldHVwXG4gKiBjaGVjayBpc0JveFNpemVyT3V0ZXJcbiAqIGRvIG9uIGZpcnN0IGdldFNpemUoKSByYXRoZXIgdGhhbiBvbiBwYWdlIGxvYWQgZm9yIEZpcmVmb3ggYnVnXG4gKi9cbmZ1bmN0aW9uIHNldHVwKCkge1xuICAvLyBzZXR1cCBvbmNlXG4gIGlmICggaXNTZXR1cCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaXNTZXR1cCA9IHRydWU7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYm94IHNpemluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIC8qKlxuICAgKiBXZWJLaXQgbWVhc3VyZXMgdGhlIG91dGVyLXdpZHRoIG9uIHN0eWxlLndpZHRoIG9uIGJvcmRlci1ib3ggZWxlbXNcbiAgICogSUUgJiBGaXJlZm94PDI5IG1lYXN1cmVzIHRoZSBpbm5lci13aWR0aFxuICAgKi9cbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuc3R5bGUud2lkdGggPSAnMjAwcHgnO1xuICBkaXYuc3R5bGUucGFkZGluZyA9ICcxcHggMnB4IDNweCA0cHgnO1xuICBkaXYuc3R5bGUuYm9yZGVyU3R5bGUgPSAnc29saWQnO1xuICBkaXYuc3R5bGUuYm9yZGVyV2lkdGggPSAnMXB4IDJweCAzcHggNHB4JztcbiAgZGl2LnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcblxuICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBib2R5LmFwcGVuZENoaWxkKCBkaXYgKTtcbiAgdmFyIHN0eWxlID0gZ2V0U3R5bGUoIGRpdiApO1xuXG4gIGdldFNpemUuaXNCb3hTaXplT3V0ZXIgPSBpc0JveFNpemVPdXRlciA9IGdldFN0eWxlU2l6ZSggc3R5bGUud2lkdGggKSA9PSAyMDA7XG4gIGJvZHkucmVtb3ZlQ2hpbGQoIGRpdiApO1xuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdldFNpemUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gZ2V0U2l6ZSggZWxlbSApIHtcbiAgc2V0dXAoKTtcblxuICAvLyB1c2UgcXVlcnlTZWxldG9yIGlmIGVsZW0gaXMgc3RyaW5nXG4gIGlmICggdHlwZW9mIGVsZW0gPT0gJ3N0cmluZycgKSB7XG4gICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGVsZW0gKTtcbiAgfVxuXG4gIC8vIGRvIG5vdCBwcm9jZWVkIG9uIG5vbi1vYmplY3RzXG4gIGlmICggIWVsZW0gfHwgdHlwZW9mIGVsZW0gIT0gJ29iamVjdCcgfHwgIWVsZW0ubm9kZVR5cGUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gZ2V0U3R5bGUoIGVsZW0gKTtcblxuICAvLyBpZiBoaWRkZW4sIGV2ZXJ5dGhpbmcgaXMgMFxuICBpZiAoIHN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnICkge1xuICAgIHJldHVybiBnZXRaZXJvU2l6ZSgpO1xuICB9XG5cbiAgdmFyIHNpemUgPSB7fTtcbiAgc2l6ZS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gIHNpemUuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG5cbiAgdmFyIGlzQm9yZGVyQm94ID0gc2l6ZS5pc0JvcmRlckJveCA9IHN0eWxlLmJveFNpemluZyA9PSAnYm9yZGVyLWJveCc7XG5cbiAgLy8gZ2V0IGFsbCBtZWFzdXJlbWVudHNcbiAgZm9yICggdmFyIGk9MDsgaSA8IG1lYXN1cmVtZW50c0xlbmd0aDsgaSsrICkge1xuICAgIHZhciBtZWFzdXJlbWVudCA9IG1lYXN1cmVtZW50c1tpXTtcbiAgICB2YXIgdmFsdWUgPSBzdHlsZVsgbWVhc3VyZW1lbnQgXTtcbiAgICB2YXIgbnVtID0gcGFyc2VGbG9hdCggdmFsdWUgKTtcbiAgICAvLyBhbnkgJ2F1dG8nLCAnbWVkaXVtJyB2YWx1ZSB3aWxsIGJlIDBcbiAgICBzaXplWyBtZWFzdXJlbWVudCBdID0gIWlzTmFOKCBudW0gKSA/IG51bSA6IDA7XG4gIH1cblxuICB2YXIgcGFkZGluZ1dpZHRoID0gc2l6ZS5wYWRkaW5nTGVmdCArIHNpemUucGFkZGluZ1JpZ2h0O1xuICB2YXIgcGFkZGluZ0hlaWdodCA9IHNpemUucGFkZGluZ1RvcCArIHNpemUucGFkZGluZ0JvdHRvbTtcbiAgdmFyIG1hcmdpbldpZHRoID0gc2l6ZS5tYXJnaW5MZWZ0ICsgc2l6ZS5tYXJnaW5SaWdodDtcbiAgdmFyIG1hcmdpbkhlaWdodCA9IHNpemUubWFyZ2luVG9wICsgc2l6ZS5tYXJnaW5Cb3R0b207XG4gIHZhciBib3JkZXJXaWR0aCA9IHNpemUuYm9yZGVyTGVmdFdpZHRoICsgc2l6ZS5ib3JkZXJSaWdodFdpZHRoO1xuICB2YXIgYm9yZGVySGVpZ2h0ID0gc2l6ZS5ib3JkZXJUb3BXaWR0aCArIHNpemUuYm9yZGVyQm90dG9tV2lkdGg7XG5cbiAgdmFyIGlzQm9yZGVyQm94U2l6ZU91dGVyID0gaXNCb3JkZXJCb3ggJiYgaXNCb3hTaXplT3V0ZXI7XG5cbiAgLy8gb3ZlcndyaXRlIHdpZHRoIGFuZCBoZWlnaHQgaWYgd2UgY2FuIGdldCBpdCBmcm9tIHN0eWxlXG4gIHZhciBzdHlsZVdpZHRoID0gZ2V0U3R5bGVTaXplKCBzdHlsZS53aWR0aCApO1xuICBpZiAoIHN0eWxlV2lkdGggIT09IGZhbHNlICkge1xuICAgIHNpemUud2lkdGggPSBzdHlsZVdpZHRoICtcbiAgICAgIC8vIGFkZCBwYWRkaW5nIGFuZCBib3JkZXIgdW5sZXNzIGl0J3MgYWxyZWFkeSBpbmNsdWRpbmcgaXRcbiAgICAgICggaXNCb3JkZXJCb3hTaXplT3V0ZXIgPyAwIDogcGFkZGluZ1dpZHRoICsgYm9yZGVyV2lkdGggKTtcbiAgfVxuXG4gIHZhciBzdHlsZUhlaWdodCA9IGdldFN0eWxlU2l6ZSggc3R5bGUuaGVpZ2h0ICk7XG4gIGlmICggc3R5bGVIZWlnaHQgIT09IGZhbHNlICkge1xuICAgIHNpemUuaGVpZ2h0ID0gc3R5bGVIZWlnaHQgK1xuICAgICAgLy8gYWRkIHBhZGRpbmcgYW5kIGJvcmRlciB1bmxlc3MgaXQncyBhbHJlYWR5IGluY2x1ZGluZyBpdFxuICAgICAgKCBpc0JvcmRlckJveFNpemVPdXRlciA/IDAgOiBwYWRkaW5nSGVpZ2h0ICsgYm9yZGVySGVpZ2h0ICk7XG4gIH1cblxuICBzaXplLmlubmVyV2lkdGggPSBzaXplLndpZHRoIC0gKCBwYWRkaW5nV2lkdGggKyBib3JkZXJXaWR0aCApO1xuICBzaXplLmlubmVySGVpZ2h0ID0gc2l6ZS5oZWlnaHQgLSAoIHBhZGRpbmdIZWlnaHQgKyBib3JkZXJIZWlnaHQgKTtcblxuICBzaXplLm91dGVyV2lkdGggPSBzaXplLndpZHRoICsgbWFyZ2luV2lkdGg7XG4gIHNpemUub3V0ZXJIZWlnaHQgPSBzaXplLmhlaWdodCArIG1hcmdpbkhlaWdodDtcblxuICByZXR1cm4gc2l6ZTtcbn1cblxucmV0dXJuIGdldFNpemU7XG5cbn0pO1xuXG4vKipcbiAqIG1hdGNoZXNTZWxlY3RvciB2Mi4wLjFcbiAqIG1hdGNoZXNTZWxlY3RvciggZWxlbWVudCwgJy5zZWxlY3RvcicgKVxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCAnZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yJyxmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5tYXRjaGVzU2VsZWN0b3IgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIG1hdGNoZXNNZXRob2QgPSAoIGZ1bmN0aW9uKCkge1xuICAgIHZhciBFbGVtUHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZTtcbiAgICAvLyBjaGVjayBmb3IgdGhlIHN0YW5kYXJkIG1ldGhvZCBuYW1lIGZpcnN0XG4gICAgaWYgKCBFbGVtUHJvdG8ubWF0Y2hlcyApIHtcbiAgICAgIHJldHVybiAnbWF0Y2hlcyc7XG4gICAgfVxuICAgIC8vIGNoZWNrIHVuLXByZWZpeGVkXG4gICAgaWYgKCBFbGVtUHJvdG8ubWF0Y2hlc1NlbGVjdG9yICkge1xuICAgICAgcmV0dXJuICdtYXRjaGVzU2VsZWN0b3InO1xuICAgIH1cbiAgICAvLyBjaGVjayB2ZW5kb3IgcHJlZml4ZXNcbiAgICB2YXIgcHJlZml4ZXMgPSBbICd3ZWJraXQnLCAnbW96JywgJ21zJywgJ28nIF07XG5cbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgICB2YXIgbWV0aG9kID0gcHJlZml4ICsgJ01hdGNoZXNTZWxlY3Rvcic7XG4gICAgICBpZiAoIEVsZW1Qcm90b1sgbWV0aG9kIF0gKSB7XG4gICAgICAgIHJldHVybiBtZXRob2Q7XG4gICAgICB9XG4gICAgfVxuICB9KSgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBtYXRjaGVzU2VsZWN0b3IoIGVsZW0sIHNlbGVjdG9yICkge1xuICAgIHJldHVybiBlbGVtWyBtYXRjaGVzTWV0aG9kIF0oIHNlbGVjdG9yICk7XG4gIH07XG5cbn0pKTtcblxuLyoqXG4gKiBGaXp6eSBVSSB1dGlscyB2Mi4wLjJcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgdW5kZWY6IHRydWUsIHVudXNlZDogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qanNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG5cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoICdmaXp6eS11aS11dGlscy91dGlscycsW1xuICAgICAgJ2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3IvbWF0Y2hlcy1zZWxlY3RvcidcbiAgICBdLCBmdW5jdGlvbiggbWF0Y2hlc1NlbGVjdG9yICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgbWF0Y2hlc1NlbGVjdG9yICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LmZpenp5VUlVdGlscyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cubWF0Y2hlc1NlbGVjdG9yXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgbWF0Y2hlc1NlbGVjdG9yICkge1xuXG5cblxudmFyIHV0aWxzID0ge307XG5cbi8vIC0tLS0tIGV4dGVuZCAtLS0tLSAvL1xuXG4vLyBleHRlbmRzIG9iamVjdHNcbnV0aWxzLmV4dGVuZCA9IGZ1bmN0aW9uKCBhLCBiICkge1xuICBmb3IgKCB2YXIgcHJvcCBpbiBiICkge1xuICAgIGFbIHByb3AgXSA9IGJbIHByb3AgXTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cbi8vIC0tLS0tIG1vZHVsbyAtLS0tLSAvL1xuXG51dGlscy5tb2R1bG8gPSBmdW5jdGlvbiggbnVtLCBkaXYgKSB7XG4gIHJldHVybiAoICggbnVtICUgZGl2ICkgKyBkaXYgKSAlIGRpdjtcbn07XG5cbi8vIC0tLS0tIG1ha2VBcnJheSAtLS0tLSAvL1xuXG4vLyB0dXJuIGVsZW1lbnQgb3Igbm9kZUxpc3QgaW50byBhbiBhcnJheVxudXRpbHMubWFrZUFycmF5ID0gZnVuY3Rpb24oIG9iaiApIHtcbiAgdmFyIGFyeSA9IFtdO1xuICBpZiAoIEFycmF5LmlzQXJyYXkoIG9iaiApICkge1xuICAgIC8vIHVzZSBvYmplY3QgaWYgYWxyZWFkeSBhbiBhcnJheVxuICAgIGFyeSA9IG9iajtcbiAgfSBlbHNlIGlmICggb2JqICYmIHR5cGVvZiBvYmoubGVuZ3RoID09ICdudW1iZXInICkge1xuICAgIC8vIGNvbnZlcnQgbm9kZUxpc3QgdG8gYXJyYXlcbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgb2JqLmxlbmd0aDsgaSsrICkge1xuICAgICAgYXJ5LnB1c2goIG9ialtpXSApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBhcnJheSBvZiBzaW5nbGUgaW5kZXhcbiAgICBhcnkucHVzaCggb2JqICk7XG4gIH1cbiAgcmV0dXJuIGFyeTtcbn07XG5cbi8vIC0tLS0tIHJlbW92ZUZyb20gLS0tLS0gLy9cblxudXRpbHMucmVtb3ZlRnJvbSA9IGZ1bmN0aW9uKCBhcnksIG9iaiApIHtcbiAgdmFyIGluZGV4ID0gYXJ5LmluZGV4T2YoIG9iaiApO1xuICBpZiAoIGluZGV4ICE9IC0xICkge1xuICAgIGFyeS5zcGxpY2UoIGluZGV4LCAxICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGdldFBhcmVudCAtLS0tLSAvL1xuXG51dGlscy5nZXRQYXJlbnQgPSBmdW5jdGlvbiggZWxlbSwgc2VsZWN0b3IgKSB7XG4gIHdoaWxlICggZWxlbSAhPSBkb2N1bWVudC5ib2R5ICkge1xuICAgIGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgaWYgKCBtYXRjaGVzU2VsZWN0b3IoIGVsZW0sIHNlbGVjdG9yICkgKSB7XG4gICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIC0tLS0tIGdldFF1ZXJ5RWxlbWVudCAtLS0tLSAvL1xuXG4vLyB1c2UgZWxlbWVudCBhcyBzZWxlY3RvciBzdHJpbmdcbnV0aWxzLmdldFF1ZXJ5RWxlbWVudCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBlbGVtICk7XG4gIH1cbiAgcmV0dXJuIGVsZW07XG59O1xuXG4vLyAtLS0tLSBoYW5kbGVFdmVudCAtLS0tLSAvL1xuXG4vLyBlbmFibGUgLm9udHlwZSB0byB0cmlnZ2VyIGZyb20gLmFkZEV2ZW50TGlzdGVuZXIoIGVsZW0sICd0eXBlJyApXG51dGlscy5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIG1ldGhvZCA9ICdvbicgKyBldmVudC50eXBlO1xuICBpZiAoIHRoaXNbIG1ldGhvZCBdICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCBldmVudCApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBmaWx0ZXJGaW5kRWxlbWVudHMgLS0tLS0gLy9cblxudXRpbHMuZmlsdGVyRmluZEVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zLCBzZWxlY3RvciApIHtcbiAgLy8gbWFrZSBhcnJheSBvZiBlbGVtc1xuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgdmFyIGZmRWxlbXMgPSBbXTtcblxuICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAvLyBjaGVjayB0aGF0IGVsZW0gaXMgYW4gYWN0dWFsIGVsZW1lbnRcbiAgICBpZiAoICEoIGVsZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCApICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBhZGQgZWxlbSBpZiBubyBzZWxlY3RvclxuICAgIGlmICggIXNlbGVjdG9yICkge1xuICAgICAgZmZFbGVtcy5wdXNoKCBlbGVtICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGZpbHRlciAmIGZpbmQgaXRlbXMgaWYgd2UgaGF2ZSBhIHNlbGVjdG9yXG4gICAgLy8gZmlsdGVyXG4gICAgaWYgKCBtYXRjaGVzU2VsZWN0b3IoIGVsZW0sIHNlbGVjdG9yICkgKSB7XG4gICAgICBmZkVsZW1zLnB1c2goIGVsZW0gKTtcbiAgICB9XG4gICAgLy8gZmluZCBjaGlsZHJlblxuICAgIHZhciBjaGlsZEVsZW1zID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApO1xuICAgIC8vIGNvbmNhdCBjaGlsZEVsZW1zIHRvIGZpbHRlckZvdW5kIGFycmF5XG4gICAgZm9yICggdmFyIGk9MDsgaSA8IGNoaWxkRWxlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICBmZkVsZW1zLnB1c2goIGNoaWxkRWxlbXNbaV0gKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmZkVsZW1zO1xufTtcblxuLy8gLS0tLS0gZGVib3VuY2VNZXRob2QgLS0tLS0gLy9cblxudXRpbHMuZGVib3VuY2VNZXRob2QgPSBmdW5jdGlvbiggX2NsYXNzLCBtZXRob2ROYW1lLCB0aHJlc2hvbGQgKSB7XG4gIC8vIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgbWV0aG9kID0gX2NsYXNzLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdO1xuICB2YXIgdGltZW91dE5hbWUgPSBtZXRob2ROYW1lICsgJ1RpbWVvdXQnO1xuXG4gIF9jbGFzcy5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0aW1lb3V0ID0gdGhpc1sgdGltZW91dE5hbWUgXTtcbiAgICBpZiAoIHRpbWVvdXQgKSB7XG4gICAgICBjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXNbIHRpbWVvdXROYW1lIF0gPSBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgIG1ldGhvZC5hcHBseSggX3RoaXMsIGFyZ3MgKTtcbiAgICAgIGRlbGV0ZSBfdGhpc1sgdGltZW91dE5hbWUgXTtcbiAgICB9LCB0aHJlc2hvbGQgfHwgMTAwICk7XG4gIH07XG59O1xuXG4vLyAtLS0tLSBkb2NSZWFkeSAtLS0tLSAvL1xuXG51dGlscy5kb2NSZWFkeSA9IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcbiAgdmFyIHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuICBpZiAoIHJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJyB8fCByZWFkeVN0YXRlID09ICdpbnRlcmFjdGl2ZScgKSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIGNhbGxiYWNrICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGh0bWxJbml0IC0tLS0tIC8vXG5cbi8vIGh0dHA6Ly9qYW1lc3JvYmVydHMubmFtZS9ibG9nLzIwMTAvMDIvMjIvc3RyaW5nLWZ1bmN0aW9ucy1mb3ItamF2YXNjcmlwdC10cmltLXRvLWNhbWVsLWNhc2UtdG8tZGFzaGVkLWFuZC10by11bmRlcnNjb3JlL1xudXRpbHMudG9EYXNoZWQgPSBmdW5jdGlvbiggc3RyICkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC8oLikoW0EtWl0pL2csIGZ1bmN0aW9uKCBtYXRjaCwgJDEsICQyICkge1xuICAgIHJldHVybiAkMSArICctJyArICQyO1xuICB9KS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcbi8qKlxuICogYWxsb3cgdXNlciB0byBpbml0aWFsaXplIGNsYXNzZXMgdmlhIFtkYXRhLW5hbWVzcGFjZV0gb3IgLmpzLW5hbWVzcGFjZSBjbGFzc1xuICogaHRtbEluaXQoIFdpZGdldCwgJ3dpZGdldE5hbWUnIClcbiAqIG9wdGlvbnMgYXJlIHBhcnNlZCBmcm9tIGRhdGEtbmFtZXNwYWNlLW9wdGlvbnNcbiAqL1xudXRpbHMuaHRtbEluaXQgPSBmdW5jdGlvbiggV2lkZ2V0Q2xhc3MsIG5hbWVzcGFjZSApIHtcbiAgdXRpbHMuZG9jUmVhZHkoIGZ1bmN0aW9uKCkge1xuICAgIHZhciBkYXNoZWROYW1lc3BhY2UgPSB1dGlscy50b0Rhc2hlZCggbmFtZXNwYWNlICk7XG4gICAgdmFyIGRhdGFBdHRyID0gJ2RhdGEtJyArIGRhc2hlZE5hbWVzcGFjZTtcbiAgICB2YXIgZGF0YUF0dHJFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICdbJyArIGRhdGFBdHRyICsgJ10nICk7XG4gICAgdmFyIGpzRGFzaEVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5qcy0nICsgZGFzaGVkTmFtZXNwYWNlICk7XG4gICAgdmFyIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBkYXRhQXR0ckVsZW1zIClcbiAgICAgIC5jb25jYXQoIHV0aWxzLm1ha2VBcnJheSgganNEYXNoRWxlbXMgKSApO1xuICAgIHZhciBkYXRhT3B0aW9uc0F0dHIgPSBkYXRhQXR0ciArICctb3B0aW9ucyc7XG4gICAgdmFyIGpRdWVyeSA9IHdpbmRvdy5qUXVlcnk7XG5cbiAgICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgIHZhciBhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoIGRhdGFBdHRyICkgfHxcbiAgICAgICAgZWxlbS5nZXRBdHRyaWJ1dGUoIGRhdGFPcHRpb25zQXR0ciApO1xuICAgICAgdmFyIG9wdGlvbnM7XG4gICAgICB0cnkge1xuICAgICAgICBvcHRpb25zID0gYXR0ciAmJiBKU09OLnBhcnNlKCBhdHRyICk7XG4gICAgICB9IGNhdGNoICggZXJyb3IgKSB7XG4gICAgICAgIC8vIGxvZyBlcnJvciwgZG8gbm90IGluaXRpYWxpemVcbiAgICAgICAgaWYgKCBjb25zb2xlICkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoICdFcnJvciBwYXJzaW5nICcgKyBkYXRhQXR0ciArICcgb24gJyArIGVsZW0uY2xhc3NOYW1lICtcbiAgICAgICAgICAnOiAnICsgZXJyb3IgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpbml0aWFsaXplXG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgV2lkZ2V0Q2xhc3MoIGVsZW0sIG9wdGlvbnMgKTtcbiAgICAgIC8vIG1ha2UgYXZhaWxhYmxlIHZpYSAkKCkuZGF0YSgnbGF5b3V0bmFtZScpXG4gICAgICBpZiAoIGpRdWVyeSApIHtcbiAgICAgICAgalF1ZXJ5LmRhdGEoIGVsZW0sIG5hbWVzcGFjZSwgaW5zdGFuY2UgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9KTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gdXRpbHM7XG5cbn0pKTtcblxuLyoqXG4gKiBPdXRsYXllciBJdGVtXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggJ291dGxheWVyL2l0ZW0nLFtcbiAgICAgICAgJ2V2LWVtaXR0ZXIvZXYtZW1pdHRlcicsXG4gICAgICAgICdnZXQtc2l6ZS9nZXQtc2l6ZSdcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5XG4gICAgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KUyAtIEJyb3dzZXJpZnksIFdlYnBhY2tcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCdldi1lbWl0dGVyJyksXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5PdXRsYXllciA9IHt9O1xuICAgIHdpbmRvdy5PdXRsYXllci5JdGVtID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdy5FdkVtaXR0ZXIsXG4gICAgICB3aW5kb3cuZ2V0U2l6ZVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBFdkVtaXR0ZXIsIGdldFNpemUgKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tIGhlbHBlcnMgLS0tLS0gLy9cblxuZnVuY3Rpb24gaXNFbXB0eU9iaiggb2JqICkge1xuICBmb3IgKCB2YXIgcHJvcCBpbiBvYmogKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByb3AgPSBudWxsO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ1NTMyBzdXBwb3J0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblxudmFyIGRvY0VsZW1TdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxudmFyIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IHR5cGVvZiBkb2NFbGVtU3R5bGUudHJhbnNpdGlvbiA9PSAnc3RyaW5nJyA/XG4gICd0cmFuc2l0aW9uJyA6ICdXZWJraXRUcmFuc2l0aW9uJztcbnZhciB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IHR5cGVvZiBkb2NFbGVtU3R5bGUudHJhbnNmb3JtID09ICdzdHJpbmcnID9cbiAgJ3RyYW5zZm9ybScgOiAnV2Via2l0VHJhbnNmb3JtJztcblxudmFyIHRyYW5zaXRpb25FbmRFdmVudCA9IHtcbiAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCdcbn1bIHRyYW5zaXRpb25Qcm9wZXJ0eSBdO1xuXG4vLyBjYWNoZSBhbGwgdmVuZG9yIHByb3BlcnRpZXMgdGhhdCBjb3VsZCBoYXZlIHZlbmRvciBwcmVmaXhcbnZhciB2ZW5kb3JQcm9wZXJ0aWVzID0ge1xuICB0cmFuc2Zvcm06IHRyYW5zZm9ybVByb3BlcnR5LFxuICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uUHJvcGVydHksXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogdHJhbnNpdGlvblByb3BlcnR5ICsgJ0R1cmF0aW9uJyxcbiAgdHJhbnNpdGlvblByb3BlcnR5OiB0cmFuc2l0aW9uUHJvcGVydHkgKyAnUHJvcGVydHknLFxuICB0cmFuc2l0aW9uRGVsYXk6IHRyYW5zaXRpb25Qcm9wZXJ0eSArICdEZWxheSdcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEl0ZW0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gSXRlbSggZWxlbWVudCwgbGF5b3V0ICkge1xuICBpZiAoICFlbGVtZW50ICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIC8vIHBhcmVudCBsYXlvdXQgY2xhc3MsIGkuZS4gTWFzb25yeSwgSXNvdG9wZSwgb3IgUGFja2VyeVxuICB0aGlzLmxheW91dCA9IGxheW91dDtcbiAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICB0aGlzLl9jcmVhdGUoKTtcbn1cblxuLy8gaW5oZXJpdCBFdkVtaXR0ZXJcbnZhciBwcm90byA9IEl0ZW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRXZFbWl0dGVyLnByb3RvdHlwZSApO1xucHJvdG8uY29uc3RydWN0b3IgPSBJdGVtO1xuXG5wcm90by5fY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIHRyYW5zaXRpb24gb2JqZWN0c1xuICB0aGlzLl90cmFuc24gPSB7XG4gICAgaW5nUHJvcGVydGllczoge30sXG4gICAgY2xlYW46IHt9LFxuICAgIG9uRW5kOiB7fVxuICB9O1xuXG4gIHRoaXMuY3NzKHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICB9KTtcbn07XG5cbi8vIHRyaWdnZXIgc3BlY2lmaWVkIGhhbmRsZXIgZm9yIGV2ZW50IHR5cGVcbnByb3RvLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB2YXIgbWV0aG9kID0gJ29uJyArIGV2ZW50LnR5cGU7XG4gIGlmICggdGhpc1sgbWV0aG9kIF0gKSB7XG4gICAgdGhpc1sgbWV0aG9kIF0oIGV2ZW50ICk7XG4gIH1cbn07XG5cbnByb3RvLmdldFNpemUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zaXplID0gZ2V0U2l6ZSggdGhpcy5lbGVtZW50ICk7XG59O1xuXG4vKipcbiAqIGFwcGx5IENTUyBzdHlsZXMgdG8gZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IHN0eWxlXG4gKi9cbnByb3RvLmNzcyA9IGZ1bmN0aW9uKCBzdHlsZSApIHtcbiAgdmFyIGVsZW1TdHlsZSA9IHRoaXMuZWxlbWVudC5zdHlsZTtcblxuICBmb3IgKCB2YXIgcHJvcCBpbiBzdHlsZSApIHtcbiAgICAvLyB1c2UgdmVuZG9yIHByb3BlcnR5IGlmIGF2YWlsYWJsZVxuICAgIHZhciBzdXBwb3J0ZWRQcm9wID0gdmVuZG9yUHJvcGVydGllc1sgcHJvcCBdIHx8IHByb3A7XG4gICAgZWxlbVN0eWxlWyBzdXBwb3J0ZWRQcm9wIF0gPSBzdHlsZVsgcHJvcCBdO1xuICB9XG59O1xuXG4gLy8gbWVhc3VyZSBwb3NpdGlvbiwgYW5kIHNldHMgaXRcbnByb3RvLmdldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoIHRoaXMuZWxlbWVudCApO1xuICB2YXIgaXNPcmlnaW5MZWZ0ID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luTGVmdCcpO1xuICB2YXIgaXNPcmlnaW5Ub3AgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5Ub3AnKTtcbiAgdmFyIHhWYWx1ZSA9IHN0eWxlWyBpc09yaWdpbkxlZnQgPyAnbGVmdCcgOiAncmlnaHQnIF07XG4gIHZhciB5VmFsdWUgPSBzdHlsZVsgaXNPcmlnaW5Ub3AgPyAndG9wJyA6ICdib3R0b20nIF07XG4gIC8vIGNvbnZlcnQgcGVyY2VudCB0byBwaXhlbHNcbiAgdmFyIGxheW91dFNpemUgPSB0aGlzLmxheW91dC5zaXplO1xuICB2YXIgeCA9IHhWYWx1ZS5pbmRleE9mKCclJykgIT0gLTEgP1xuICAgICggcGFyc2VGbG9hdCggeFZhbHVlICkgLyAxMDAgKSAqIGxheW91dFNpemUud2lkdGggOiBwYXJzZUludCggeFZhbHVlLCAxMCApO1xuICB2YXIgeSA9IHlWYWx1ZS5pbmRleE9mKCclJykgIT0gLTEgP1xuICAgICggcGFyc2VGbG9hdCggeVZhbHVlICkgLyAxMDAgKSAqIGxheW91dFNpemUuaGVpZ2h0IDogcGFyc2VJbnQoIHlWYWx1ZSwgMTAgKTtcblxuICAvLyBjbGVhbiB1cCAnYXV0bycgb3Igb3RoZXIgbm9uLWludGVnZXIgdmFsdWVzXG4gIHggPSBpc05hTiggeCApID8gMCA6IHg7XG4gIHkgPSBpc05hTiggeSApID8gMCA6IHk7XG4gIC8vIHJlbW92ZSBwYWRkaW5nIGZyb20gbWVhc3VyZW1lbnRcbiAgeCAtPSBpc09yaWdpbkxlZnQgPyBsYXlvdXRTaXplLnBhZGRpbmdMZWZ0IDogbGF5b3V0U2l6ZS5wYWRkaW5nUmlnaHQ7XG4gIHkgLT0gaXNPcmlnaW5Ub3AgPyBsYXlvdXRTaXplLnBhZGRpbmdUb3AgOiBsYXlvdXRTaXplLnBhZGRpbmdCb3R0b207XG5cbiAgdGhpcy5wb3NpdGlvbi54ID0geDtcbiAgdGhpcy5wb3NpdGlvbi55ID0geTtcbn07XG5cbi8vIHNldCBzZXR0bGVkIHBvc2l0aW9uLCBhcHBseSBwYWRkaW5nXG5wcm90by5sYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbGF5b3V0U2l6ZSA9IHRoaXMubGF5b3V0LnNpemU7XG4gIHZhciBzdHlsZSA9IHt9O1xuICB2YXIgaXNPcmlnaW5MZWZ0ID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luTGVmdCcpO1xuICB2YXIgaXNPcmlnaW5Ub3AgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5Ub3AnKTtcblxuICAvLyB4XG4gIHZhciB4UGFkZGluZyA9IGlzT3JpZ2luTGVmdCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcbiAgdmFyIHhQcm9wZXJ0eSA9IGlzT3JpZ2luTGVmdCA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gIHZhciB4UmVzZXRQcm9wZXJ0eSA9IGlzT3JpZ2luTGVmdCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cbiAgdmFyIHggPSB0aGlzLnBvc2l0aW9uLnggKyBsYXlvdXRTaXplWyB4UGFkZGluZyBdO1xuICAvLyBzZXQgaW4gcGVyY2VudGFnZSBvciBwaXhlbHNcbiAgc3R5bGVbIHhQcm9wZXJ0eSBdID0gdGhpcy5nZXRYVmFsdWUoIHggKTtcbiAgLy8gcmVzZXQgb3RoZXIgcHJvcGVydHlcbiAgc3R5bGVbIHhSZXNldFByb3BlcnR5IF0gPSAnJztcblxuICAvLyB5XG4gIHZhciB5UGFkZGluZyA9IGlzT3JpZ2luVG9wID8gJ3BhZGRpbmdUb3AnIDogJ3BhZGRpbmdCb3R0b20nO1xuICB2YXIgeVByb3BlcnR5ID0gaXNPcmlnaW5Ub3AgPyAndG9wJyA6ICdib3R0b20nO1xuICB2YXIgeVJlc2V0UHJvcGVydHkgPSBpc09yaWdpblRvcCA/ICdib3R0b20nIDogJ3RvcCc7XG5cbiAgdmFyIHkgPSB0aGlzLnBvc2l0aW9uLnkgKyBsYXlvdXRTaXplWyB5UGFkZGluZyBdO1xuICAvLyBzZXQgaW4gcGVyY2VudGFnZSBvciBwaXhlbHNcbiAgc3R5bGVbIHlQcm9wZXJ0eSBdID0gdGhpcy5nZXRZVmFsdWUoIHkgKTtcbiAgLy8gcmVzZXQgb3RoZXIgcHJvcGVydHlcbiAgc3R5bGVbIHlSZXNldFByb3BlcnR5IF0gPSAnJztcblxuICB0aGlzLmNzcyggc3R5bGUgKTtcbiAgdGhpcy5lbWl0RXZlbnQoICdsYXlvdXQnLCBbIHRoaXMgXSApO1xufTtcblxucHJvdG8uZ2V0WFZhbHVlID0gZnVuY3Rpb24oIHggKSB7XG4gIHZhciBpc0hvcml6b250YWwgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdob3Jpem9udGFsJyk7XG4gIHJldHVybiB0aGlzLmxheW91dC5vcHRpb25zLnBlcmNlbnRQb3NpdGlvbiAmJiAhaXNIb3Jpem9udGFsID9cbiAgICAoICggeCAvIHRoaXMubGF5b3V0LnNpemUud2lkdGggKSAqIDEwMCApICsgJyUnIDogeCArICdweCc7XG59O1xuXG5wcm90by5nZXRZVmFsdWUgPSBmdW5jdGlvbiggeSApIHtcbiAgdmFyIGlzSG9yaXpvbnRhbCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ2hvcml6b250YWwnKTtcbiAgcmV0dXJuIHRoaXMubGF5b3V0Lm9wdGlvbnMucGVyY2VudFBvc2l0aW9uICYmIGlzSG9yaXpvbnRhbCA/XG4gICAgKCAoIHkgLyB0aGlzLmxheW91dC5zaXplLmhlaWdodCApICogMTAwICkgKyAnJScgOiB5ICsgJ3B4Jztcbn07XG5cbnByb3RvLl90cmFuc2l0aW9uVG8gPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgdGhpcy5nZXRQb3NpdGlvbigpO1xuICAvLyBnZXQgY3VycmVudCB4ICYgeSBmcm9tIHRvcC9sZWZ0XG4gIHZhciBjdXJYID0gdGhpcy5wb3NpdGlvbi54O1xuICB2YXIgY3VyWSA9IHRoaXMucG9zaXRpb24ueTtcblxuICB2YXIgY29tcGFyZVggPSBwYXJzZUludCggeCwgMTAgKTtcbiAgdmFyIGNvbXBhcmVZID0gcGFyc2VJbnQoIHksIDEwICk7XG4gIHZhciBkaWROb3RNb3ZlID0gY29tcGFyZVggPT09IHRoaXMucG9zaXRpb24ueCAmJiBjb21wYXJlWSA9PT0gdGhpcy5wb3NpdGlvbi55O1xuXG4gIC8vIHNhdmUgZW5kIHBvc2l0aW9uXG4gIHRoaXMuc2V0UG9zaXRpb24oIHgsIHkgKTtcblxuICAvLyBpZiBkaWQgbm90IG1vdmUgYW5kIG5vdCB0cmFuc2l0aW9uaW5nLCBqdXN0IGdvIHRvIGxheW91dFxuICBpZiAoIGRpZE5vdE1vdmUgJiYgIXRoaXMuaXNUcmFuc2l0aW9uaW5nICkge1xuICAgIHRoaXMubGF5b3V0UG9zaXRpb24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdHJhbnNYID0geCAtIGN1clg7XG4gIHZhciB0cmFuc1kgPSB5IC0gY3VyWTtcbiAgdmFyIHRyYW5zaXRpb25TdHlsZSA9IHt9O1xuICB0cmFuc2l0aW9uU3R5bGUudHJhbnNmb3JtID0gdGhpcy5nZXRUcmFuc2xhdGUoIHRyYW5zWCwgdHJhbnNZICk7XG5cbiAgdGhpcy50cmFuc2l0aW9uKHtcbiAgICB0bzogdHJhbnNpdGlvblN0eWxlLFxuICAgIG9uVHJhbnNpdGlvbkVuZDoge1xuICAgICAgdHJhbnNmb3JtOiB0aGlzLmxheW91dFBvc2l0aW9uXG4gICAgfSxcbiAgICBpc0NsZWFuaW5nOiB0cnVlXG4gIH0pO1xufTtcblxucHJvdG8uZ2V0VHJhbnNsYXRlID0gZnVuY3Rpb24oIHgsIHkgKSB7XG4gIC8vIGZsaXAgY29vcmlkaW5hdGVzIGlmIG9yaWdpbiBvbiByaWdodCBvciBib3R0b21cbiAgdmFyIGlzT3JpZ2luTGVmdCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpbkxlZnQnKTtcbiAgdmFyIGlzT3JpZ2luVG9wID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luVG9wJyk7XG4gIHggPSBpc09yaWdpbkxlZnQgPyB4IDogLXg7XG4gIHkgPSBpc09yaWdpblRvcCA/IHkgOiAteTtcbiAgcmV0dXJuICd0cmFuc2xhdGUzZCgnICsgeCArICdweCwgJyArIHkgKyAncHgsIDApJztcbn07XG5cbi8vIG5vbiB0cmFuc2l0aW9uICsgdHJhbnNmb3JtIHN1cHBvcnRcbnByb3RvLmdvVG8gPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgdGhpcy5zZXRQb3NpdGlvbiggeCwgeSApO1xuICB0aGlzLmxheW91dFBvc2l0aW9uKCk7XG59O1xuXG5wcm90by5tb3ZlVG8gPSBwcm90by5fdHJhbnNpdGlvblRvO1xuXG5wcm90by5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICB0aGlzLnBvc2l0aW9uLnggPSBwYXJzZUludCggeCwgMTAgKTtcbiAgdGhpcy5wb3NpdGlvbi55ID0gcGFyc2VJbnQoIHksIDEwICk7XG59O1xuXG4vLyAtLS0tLSB0cmFuc2l0aW9uIC0tLS0tIC8vXG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IHN0eWxlIC0gQ1NTXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvblRyYW5zaXRpb25FbmRcbiAqL1xuXG4vLyBub24gdHJhbnNpdGlvbiwganVzdCB0cmlnZ2VyIGNhbGxiYWNrXG5wcm90by5fbm9uVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCBhcmdzICkge1xuICB0aGlzLmNzcyggYXJncy50byApO1xuICBpZiAoIGFyZ3MuaXNDbGVhbmluZyApIHtcbiAgICB0aGlzLl9yZW1vdmVTdHlsZXMoIGFyZ3MudG8gKTtcbiAgfVxuICBmb3IgKCB2YXIgcHJvcCBpbiBhcmdzLm9uVHJhbnNpdGlvbkVuZCApIHtcbiAgICBhcmdzLm9uVHJhbnNpdGlvbkVuZFsgcHJvcCBdLmNhbGwoIHRoaXMgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBwcm9wZXIgdHJhbnNpdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGFyZ3MgLSBhcmd1bWVudHNcbiAqICAgQHBhcmFtIHtPYmplY3R9IHRvIC0gc3R5bGUgdG8gdHJhbnNpdGlvbiB0b1xuICogICBAcGFyYW0ge09iamVjdH0gZnJvbSAtIHN0eWxlIHRvIHN0YXJ0IHRyYW5zaXRpb24gZnJvbVxuICogICBAcGFyYW0ge0Jvb2xlYW59IGlzQ2xlYW5pbmcgLSByZW1vdmVzIHRyYW5zaXRpb24gc3R5bGVzIGFmdGVyIHRyYW5zaXRpb25cbiAqICAgQHBhcmFtIHtGdW5jdGlvbn0gb25UcmFuc2l0aW9uRW5kIC0gY2FsbGJhY2tcbiAqL1xucHJvdG8udHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCBhcmdzICkge1xuICAvLyByZWRpcmVjdCB0byBub25UcmFuc2l0aW9uIGlmIG5vIHRyYW5zaXRpb24gZHVyYXRpb25cbiAgaWYgKCAhcGFyc2VGbG9hdCggdGhpcy5sYXlvdXQub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb24gKSApIHtcbiAgICB0aGlzLl9ub25UcmFuc2l0aW9uKCBhcmdzICk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF90cmFuc2l0aW9uID0gdGhpcy5fdHJhbnNuO1xuICAvLyBrZWVwIHRyYWNrIG9mIG9uVHJhbnNpdGlvbkVuZCBjYWxsYmFjayBieSBjc3MgcHJvcGVydHlcbiAgZm9yICggdmFyIHByb3AgaW4gYXJncy5vblRyYW5zaXRpb25FbmQgKSB7XG4gICAgX3RyYW5zaXRpb24ub25FbmRbIHByb3AgXSA9IGFyZ3Mub25UcmFuc2l0aW9uRW5kWyBwcm9wIF07XG4gIH1cbiAgLy8ga2VlcCB0cmFjayBvZiBwcm9wZXJ0aWVzIHRoYXQgYXJlIHRyYW5zaXRpb25pbmdcbiAgZm9yICggcHJvcCBpbiBhcmdzLnRvICkge1xuICAgIF90cmFuc2l0aW9uLmluZ1Byb3BlcnRpZXNbIHByb3AgXSA9IHRydWU7XG4gICAgLy8ga2VlcCB0cmFjayBvZiBwcm9wZXJ0aWVzIHRvIGNsZWFuIHVwIHdoZW4gdHJhbnNpdGlvbiBpcyBkb25lXG4gICAgaWYgKCBhcmdzLmlzQ2xlYW5pbmcgKSB7XG4gICAgICBfdHJhbnNpdGlvbi5jbGVhblsgcHJvcCBdID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBzZXQgZnJvbSBzdHlsZXNcbiAgaWYgKCBhcmdzLmZyb20gKSB7XG4gICAgdGhpcy5jc3MoIGFyZ3MuZnJvbSApO1xuICAgIC8vIGZvcmNlIHJlZHJhdy4gaHR0cDovL2Jsb2cuYWxleG1hY2Nhdy5jb20vY3NzLXRyYW5zaXRpb25zXG4gICAgdmFyIGggPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIC8vIGhhY2sgZm9yIEpTSGludCB0byBodXNoIGFib3V0IHVudXNlZCB2YXJcbiAgICBoID0gbnVsbDtcbiAgfVxuICAvLyBlbmFibGUgdHJhbnNpdGlvblxuICB0aGlzLmVuYWJsZVRyYW5zaXRpb24oIGFyZ3MudG8gKTtcbiAgLy8gc2V0IHN0eWxlcyB0aGF0IGFyZSB0cmFuc2l0aW9uaW5nXG4gIHRoaXMuY3NzKCBhcmdzLnRvICk7XG5cbiAgdGhpcy5pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuXG59O1xuXG4vLyBkYXNoIGJlZm9yZSBhbGwgY2FwIGxldHRlcnMsIGluY2x1ZGluZyBmaXJzdCBmb3Jcbi8vIFdlYmtpdFRyYW5zZm9ybSA9PiAtd2Via2l0LXRyYW5zZm9ybVxuZnVuY3Rpb24gdG9EYXNoZWRBbGwoIHN0ciApIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKCAvKFtBLVpdKS9nLCBmdW5jdGlvbiggJDEgKSB7XG4gICAgcmV0dXJuICctJyArICQxLnRvTG93ZXJDYXNlKCk7XG4gIH0pO1xufVxuXG52YXIgdHJhbnNpdGlvblByb3BzID0gJ29wYWNpdHksJyArIHRvRGFzaGVkQWxsKCB0cmFuc2Zvcm1Qcm9wZXJ0eSApO1xuXG5wcm90by5lbmFibGVUcmFuc2l0aW9uID0gZnVuY3Rpb24oLyogc3R5bGUgKi8pIHtcbiAgLy8gSEFDSyBjaGFuZ2luZyB0cmFuc2l0aW9uUHJvcGVydHkgZHVyaW5nIGEgdHJhbnNpdGlvblxuICAvLyB3aWxsIGNhdXNlIHRyYW5zaXRpb24gdG8ganVtcFxuICBpZiAoIHRoaXMuaXNUcmFuc2l0aW9uaW5nICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIG1ha2UgYHRyYW5zaXRpb246IGZvbywgYmFyLCBiYXpgIGZyb20gc3R5bGUgb2JqZWN0XG4gIC8vIEhBQ0sgdW4tY29tbWVudCB0aGlzIHdoZW4gZW5hYmxlVHJhbnNpdGlvbiBjYW4gd29ya1xuICAvLyB3aGlsZSBhIHRyYW5zaXRpb24gaXMgaGFwcGVuaW5nXG4gIC8vIHZhciB0cmFuc2l0aW9uVmFsdWVzID0gW107XG4gIC8vIGZvciAoIHZhciBwcm9wIGluIHN0eWxlICkge1xuICAvLyAgIC8vIGRhc2gtaWZ5IGNhbWVsQ2FzZWQgcHJvcGVydGllcyBsaWtlIFdlYmtpdFRyYW5zaXRpb25cbiAgLy8gICBwcm9wID0gdmVuZG9yUHJvcGVydGllc1sgcHJvcCBdIHx8IHByb3A7XG4gIC8vICAgdHJhbnNpdGlvblZhbHVlcy5wdXNoKCB0b0Rhc2hlZEFsbCggcHJvcCApICk7XG4gIC8vIH1cbiAgLy8gbXVuZ2UgbnVtYmVyIHRvIG1pbGxpc2Vjb25kLCB0byBtYXRjaCBzdGFnZ2VyXG4gIHZhciBkdXJhdGlvbiA9IHRoaXMubGF5b3V0Lm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uO1xuICBkdXJhdGlvbiA9IHR5cGVvZiBkdXJhdGlvbiA9PSAnbnVtYmVyJyA/IGR1cmF0aW9uICsgJ21zJyA6IGR1cmF0aW9uO1xuICAvLyBlbmFibGUgdHJhbnNpdGlvbiBzdHlsZXNcbiAgdGhpcy5jc3Moe1xuICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogdHJhbnNpdGlvblByb3BzLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogZHVyYXRpb24sXG4gICAgdHJhbnNpdGlvbkRlbGF5OiB0aGlzLnN0YWdnZXJEZWxheSB8fCAwXG4gIH0pO1xuICAvLyBsaXN0ZW4gZm9yIHRyYW5zaXRpb24gZW5kIGV2ZW50XG4gIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCB0cmFuc2l0aW9uRW5kRXZlbnQsIHRoaXMsIGZhbHNlICk7XG59O1xuXG4vLyAtLS0tLSBldmVudHMgLS0tLS0gLy9cblxucHJvdG8ub253ZWJraXRUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLm9udHJhbnNpdGlvbmVuZCggZXZlbnQgKTtcbn07XG5cbnByb3RvLm9ub3RyYW5zaXRpb25lbmQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMub250cmFuc2l0aW9uZW5kKCBldmVudCApO1xufTtcblxuLy8gcHJvcGVydGllcyB0aGF0IEkgbXVuZ2UgdG8gbWFrZSBteSBsaWZlIGVhc2llclxudmFyIGRhc2hlZFZlbmRvclByb3BlcnRpZXMgPSB7XG4gICctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2Zvcm0nXG59O1xuXG5wcm90by5vbnRyYW5zaXRpb25lbmQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIC8vIGRpc3JlZ2FyZCBidWJibGVkIGV2ZW50cyBmcm9tIGNoaWxkcmVuXG4gIGlmICggZXZlbnQudGFyZ2V0ICE9PSB0aGlzLmVsZW1lbnQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBfdHJhbnNpdGlvbiA9IHRoaXMuX3RyYW5zbjtcbiAgLy8gZ2V0IHByb3BlcnR5IG5hbWUgb2YgdHJhbnNpdGlvbmVkIHByb3BlcnR5LCBjb252ZXJ0IHRvIHByZWZpeC1mcmVlXG4gIHZhciBwcm9wZXJ0eU5hbWUgPSBkYXNoZWRWZW5kb3JQcm9wZXJ0aWVzWyBldmVudC5wcm9wZXJ0eU5hbWUgXSB8fCBldmVudC5wcm9wZXJ0eU5hbWU7XG5cbiAgLy8gcmVtb3ZlIHByb3BlcnR5IHRoYXQgaGFzIGNvbXBsZXRlZCB0cmFuc2l0aW9uaW5nXG4gIGRlbGV0ZSBfdHJhbnNpdGlvbi5pbmdQcm9wZXJ0aWVzWyBwcm9wZXJ0eU5hbWUgXTtcbiAgLy8gY2hlY2sgaWYgYW55IHByb3BlcnRpZXMgYXJlIHN0aWxsIHRyYW5zaXRpb25pbmdcbiAgaWYgKCBpc0VtcHR5T2JqKCBfdHJhbnNpdGlvbi5pbmdQcm9wZXJ0aWVzICkgKSB7XG4gICAgLy8gYWxsIHByb3BlcnRpZXMgaGF2ZSBjb21wbGV0ZWQgdHJhbnNpdGlvbmluZ1xuICAgIHRoaXMuZGlzYWJsZVRyYW5zaXRpb24oKTtcbiAgfVxuICAvLyBjbGVhbiBzdHlsZVxuICBpZiAoIHByb3BlcnR5TmFtZSBpbiBfdHJhbnNpdGlvbi5jbGVhbiApIHtcbiAgICAvLyBjbGVhbiB1cCBzdHlsZVxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVsgZXZlbnQucHJvcGVydHlOYW1lIF0gPSAnJztcbiAgICBkZWxldGUgX3RyYW5zaXRpb24uY2xlYW5bIHByb3BlcnR5TmFtZSBdO1xuICB9XG4gIC8vIHRyaWdnZXIgb25UcmFuc2l0aW9uRW5kIGNhbGxiYWNrXG4gIGlmICggcHJvcGVydHlOYW1lIGluIF90cmFuc2l0aW9uLm9uRW5kICkge1xuICAgIHZhciBvblRyYW5zaXRpb25FbmQgPSBfdHJhbnNpdGlvbi5vbkVuZFsgcHJvcGVydHlOYW1lIF07XG4gICAgb25UcmFuc2l0aW9uRW5kLmNhbGwoIHRoaXMgKTtcbiAgICBkZWxldGUgX3RyYW5zaXRpb24ub25FbmRbIHByb3BlcnR5TmFtZSBdO1xuICB9XG5cbiAgdGhpcy5lbWl0RXZlbnQoICd0cmFuc2l0aW9uRW5kJywgWyB0aGlzIF0gKTtcbn07XG5cbnByb3RvLmRpc2FibGVUcmFuc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmVtb3ZlVHJhbnNpdGlvblN0eWxlcygpO1xuICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggdHJhbnNpdGlvbkVuZEV2ZW50LCB0aGlzLCBmYWxzZSApO1xuICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xufTtcblxuLyoqXG4gKiByZW1vdmVzIHN0eWxlIHByb3BlcnR5IGZyb20gZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IHN0eWxlXG4qKi9cbnByb3RvLl9yZW1vdmVTdHlsZXMgPSBmdW5jdGlvbiggc3R5bGUgKSB7XG4gIC8vIGNsZWFuIHVwIHRyYW5zaXRpb24gc3R5bGVzXG4gIHZhciBjbGVhblN0eWxlID0ge307XG4gIGZvciAoIHZhciBwcm9wIGluIHN0eWxlICkge1xuICAgIGNsZWFuU3R5bGVbIHByb3AgXSA9ICcnO1xuICB9XG4gIHRoaXMuY3NzKCBjbGVhblN0eWxlICk7XG59O1xuXG52YXIgY2xlYW5UcmFuc2l0aW9uU3R5bGUgPSB7XG4gIHRyYW5zaXRpb25Qcm9wZXJ0eTogJycsXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogJycsXG4gIHRyYW5zaXRpb25EZWxheTogJydcbn07XG5cbnByb3RvLnJlbW92ZVRyYW5zaXRpb25TdHlsZXMgPSBmdW5jdGlvbigpIHtcbiAgLy8gcmVtb3ZlIHRyYW5zaXRpb25cbiAgdGhpcy5jc3MoIGNsZWFuVHJhbnNpdGlvblN0eWxlICk7XG59O1xuXG4vLyAtLS0tLSBzdGFnZ2VyIC0tLS0tIC8vXG5cbnByb3RvLnN0YWdnZXIgPSBmdW5jdGlvbiggZGVsYXkgKSB7XG4gIGRlbGF5ID0gaXNOYU4oIGRlbGF5ICkgPyAwIDogZGVsYXk7XG4gIHRoaXMuc3RhZ2dlckRlbGF5ID0gZGVsYXkgKyAnbXMnO1xufTtcblxuLy8gLS0tLS0gc2hvdy9oaWRlL3JlbW92ZSAtLS0tLSAvL1xuXG4vLyByZW1vdmUgZWxlbWVudCBmcm9tIERPTVxucHJvdG8ucmVtb3ZlRWxlbSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdGhpcy5lbGVtZW50ICk7XG4gIC8vIHJlbW92ZSBkaXNwbGF5OiBub25lXG4gIHRoaXMuY3NzKHsgZGlzcGxheTogJycgfSk7XG4gIHRoaXMuZW1pdEV2ZW50KCAncmVtb3ZlJywgWyB0aGlzIF0gKTtcbn07XG5cbnByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBqdXN0IHJlbW92ZSBlbGVtZW50IGlmIG5vIHRyYW5zaXRpb24gc3VwcG9ydCBvciBubyB0cmFuc2l0aW9uXG4gIGlmICggIXRyYW5zaXRpb25Qcm9wZXJ0eSB8fCAhcGFyc2VGbG9hdCggdGhpcy5sYXlvdXQub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb24gKSApIHtcbiAgICB0aGlzLnJlbW92ZUVsZW0oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBzdGFydCB0cmFuc2l0aW9uXG4gIHRoaXMub25jZSggJ3RyYW5zaXRpb25FbmQnLCBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUVsZW0oKTtcbiAgfSk7XG4gIHRoaXMuaGlkZSgpO1xufTtcblxucHJvdG8ucmV2ZWFsID0gZnVuY3Rpb24oKSB7XG4gIGRlbGV0ZSB0aGlzLmlzSGlkZGVuO1xuICAvLyByZW1vdmUgZGlzcGxheTogbm9uZVxuICB0aGlzLmNzcyh7IGRpc3BsYXk6ICcnIH0pO1xuXG4gIHZhciBvcHRpb25zID0gdGhpcy5sYXlvdXQub3B0aW9ucztcblxuICB2YXIgb25UcmFuc2l0aW9uRW5kID0ge307XG4gIHZhciB0cmFuc2l0aW9uRW5kUHJvcGVydHkgPSB0aGlzLmdldEhpZGVSZXZlYWxUcmFuc2l0aW9uRW5kUHJvcGVydHkoJ3Zpc2libGVTdHlsZScpO1xuICBvblRyYW5zaXRpb25FbmRbIHRyYW5zaXRpb25FbmRQcm9wZXJ0eSBdID0gdGhpcy5vblJldmVhbFRyYW5zaXRpb25FbmQ7XG5cbiAgdGhpcy50cmFuc2l0aW9uKHtcbiAgICBmcm9tOiBvcHRpb25zLmhpZGRlblN0eWxlLFxuICAgIHRvOiBvcHRpb25zLnZpc2libGVTdHlsZSxcbiAgICBpc0NsZWFuaW5nOiB0cnVlLFxuICAgIG9uVHJhbnNpdGlvbkVuZDogb25UcmFuc2l0aW9uRW5kXG4gIH0pO1xufTtcblxucHJvdG8ub25SZXZlYWxUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNoZWNrIGlmIHN0aWxsIHZpc2libGVcbiAgLy8gZHVyaW5nIHRyYW5zaXRpb24sIGl0ZW0gbWF5IGhhdmUgYmVlbiBoaWRkZW5cbiAgaWYgKCAhdGhpcy5pc0hpZGRlbiApIHtcbiAgICB0aGlzLmVtaXRFdmVudCgncmV2ZWFsJyk7XG4gIH1cbn07XG5cbi8qKlxuICogZ2V0IHN0eWxlIHByb3BlcnR5IHVzZSBmb3IgaGlkZS9yZXZlYWwgdHJhbnNpdGlvbiBlbmRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHlsZVByb3BlcnR5IC0gaGlkZGVuU3R5bGUvdmlzaWJsZVN0eWxlXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5wcm90by5nZXRIaWRlUmV2ZWFsVHJhbnNpdGlvbkVuZFByb3BlcnR5ID0gZnVuY3Rpb24oIHN0eWxlUHJvcGVydHkgKSB7XG4gIHZhciBvcHRpb25TdHlsZSA9IHRoaXMubGF5b3V0Lm9wdGlvbnNbIHN0eWxlUHJvcGVydHkgXTtcbiAgLy8gdXNlIG9wYWNpdHlcbiAgaWYgKCBvcHRpb25TdHlsZS5vcGFjaXR5ICkge1xuICAgIHJldHVybiAnb3BhY2l0eSc7XG4gIH1cbiAgLy8gZ2V0IGZpcnN0IHByb3BlcnR5XG4gIGZvciAoIHZhciBwcm9wIGluIG9wdGlvblN0eWxlICkge1xuICAgIHJldHVybiBwcm9wO1xuICB9XG59O1xuXG5wcm90by5oaWRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIHNldCBmbGFnXG4gIHRoaXMuaXNIaWRkZW4gPSB0cnVlO1xuICAvLyByZW1vdmUgZGlzcGxheTogbm9uZVxuICB0aGlzLmNzcyh7IGRpc3BsYXk6ICcnIH0pO1xuXG4gIHZhciBvcHRpb25zID0gdGhpcy5sYXlvdXQub3B0aW9ucztcblxuICB2YXIgb25UcmFuc2l0aW9uRW5kID0ge307XG4gIHZhciB0cmFuc2l0aW9uRW5kUHJvcGVydHkgPSB0aGlzLmdldEhpZGVSZXZlYWxUcmFuc2l0aW9uRW5kUHJvcGVydHkoJ2hpZGRlblN0eWxlJyk7XG4gIG9uVHJhbnNpdGlvbkVuZFsgdHJhbnNpdGlvbkVuZFByb3BlcnR5IF0gPSB0aGlzLm9uSGlkZVRyYW5zaXRpb25FbmQ7XG5cbiAgdGhpcy50cmFuc2l0aW9uKHtcbiAgICBmcm9tOiBvcHRpb25zLnZpc2libGVTdHlsZSxcbiAgICB0bzogb3B0aW9ucy5oaWRkZW5TdHlsZSxcbiAgICAvLyBrZWVwIGhpZGRlbiBzdHVmZiBoaWRkZW5cbiAgICBpc0NsZWFuaW5nOiB0cnVlLFxuICAgIG9uVHJhbnNpdGlvbkVuZDogb25UcmFuc2l0aW9uRW5kXG4gIH0pO1xufTtcblxucHJvdG8ub25IaWRlVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uKCkge1xuICAvLyBjaGVjayBpZiBzdGlsbCBoaWRkZW5cbiAgLy8gZHVyaW5nIHRyYW5zaXRpb24sIGl0ZW0gbWF5IGhhdmUgYmVlbiB1bi1oaWRkZW5cbiAgaWYgKCB0aGlzLmlzSGlkZGVuICkge1xuICAgIHRoaXMuY3NzKHsgZGlzcGxheTogJ25vbmUnIH0pO1xuICAgIHRoaXMuZW1pdEV2ZW50KCdoaWRlJyk7XG4gIH1cbn07XG5cbnByb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jc3Moe1xuICAgIHBvc2l0aW9uOiAnJyxcbiAgICBsZWZ0OiAnJyxcbiAgICByaWdodDogJycsXG4gICAgdG9wOiAnJyxcbiAgICBib3R0b206ICcnLFxuICAgIHRyYW5zaXRpb246ICcnLFxuICAgIHRyYW5zZm9ybTogJydcbiAgfSk7XG59O1xuXG5yZXR1cm4gSXRlbTtcblxufSkpO1xuXG4vKiFcbiAqIE91dGxheWVyIHYyLjEuMFxuICogdGhlIGJyYWlucyBhbmQgZ3V0cyBvZiBhIGxheW91dCBsaWJyYXJ5XG4gKiBNSVQgbGljZW5zZVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggJ291dGxheWVyL291dGxheWVyJyxbXG4gICAgICAgICdldi1lbWl0dGVyL2V2LWVtaXR0ZXInLFxuICAgICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnLFxuICAgICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnLFxuICAgICAgICAnLi9pdGVtJ1xuICAgICAgXSxcbiAgICAgIGZ1bmN0aW9uKCBFdkVtaXR0ZXIsIGdldFNpemUsIHV0aWxzLCBJdGVtICkge1xuICAgICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIsIGdldFNpemUsIHV0aWxzLCBJdGVtKTtcbiAgICAgIH1cbiAgICApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJ2V2LWVtaXR0ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJyksXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICAgcmVxdWlyZSgnLi9pdGVtJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lk91dGxheWVyID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5FdkVtaXR0ZXIsXG4gICAgICB3aW5kb3cuZ2V0U2l6ZSxcbiAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgICB3aW5kb3cuT3V0bGF5ZXIuSXRlbVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciwgZ2V0U2l6ZSwgdXRpbHMsIEl0ZW0gKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tIHZhcnMgLS0tLS0gLy9cblxudmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcbnZhciBqUXVlcnkgPSB3aW5kb3cualF1ZXJ5O1xudmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBPdXRsYXllciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBnbG9iYWxseSB1bmlxdWUgaWRlbnRpZmllcnNcbnZhciBHVUlEID0gMDtcbi8vIGludGVybmFsIHN0b3JlIG9mIGFsbCBPdXRsYXllciBpbnRhbmNlc1xudmFyIGluc3RhbmNlcyA9IHt9O1xuXG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50LCBTdHJpbmd9IGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gT3V0bGF5ZXIoIGVsZW1lbnQsIG9wdGlvbnMgKSB7XG4gIHZhciBxdWVyeUVsZW1lbnQgPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIGVsZW1lbnQgKTtcbiAgaWYgKCAhcXVlcnlFbGVtZW50ICkge1xuICAgIGlmICggY29uc29sZSApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoICdCYWQgZWxlbWVudCBmb3IgJyArIHRoaXMuY29uc3RydWN0b3IubmFtZXNwYWNlICtcbiAgICAgICAgJzogJyArICggcXVlcnlFbGVtZW50IHx8IGVsZW1lbnQgKSApO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5lbGVtZW50ID0gcXVlcnlFbGVtZW50O1xuICAvLyBhZGQgalF1ZXJ5XG4gIGlmICggalF1ZXJ5ICkge1xuICAgIHRoaXMuJGVsZW1lbnQgPSBqUXVlcnkoIHRoaXMuZWxlbWVudCApO1xuICB9XG5cbiAgLy8gb3B0aW9uc1xuICB0aGlzLm9wdGlvbnMgPSB1dGlscy5leHRlbmQoIHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRzICk7XG4gIHRoaXMub3B0aW9uKCBvcHRpb25zICk7XG5cbiAgLy8gYWRkIGlkIGZvciBPdXRsYXllci5nZXRGcm9tRWxlbWVudFxuICB2YXIgaWQgPSArK0dVSUQ7XG4gIHRoaXMuZWxlbWVudC5vdXRsYXllckdVSUQgPSBpZDsgLy8gZXhwYW5kb1xuICBpbnN0YW5jZXNbIGlkIF0gPSB0aGlzOyAvLyBhc3NvY2lhdGUgdmlhIGlkXG5cbiAgLy8ga2ljayBpdCBvZmZcbiAgdGhpcy5fY3JlYXRlKCk7XG5cbiAgdmFyIGlzSW5pdExheW91dCA9IHRoaXMuX2dldE9wdGlvbignaW5pdExheW91dCcpO1xuICBpZiAoIGlzSW5pdExheW91dCApIHtcbiAgICB0aGlzLmxheW91dCgpO1xuICB9XG59XG5cbi8vIHNldHRpbmdzIGFyZSBmb3IgaW50ZXJuYWwgdXNlIG9ubHlcbk91dGxheWVyLm5hbWVzcGFjZSA9ICdvdXRsYXllcic7XG5PdXRsYXllci5JdGVtID0gSXRlbTtcblxuLy8gZGVmYXVsdCBvcHRpb25zXG5PdXRsYXllci5kZWZhdWx0cyA9IHtcbiAgY29udGFpbmVyU3R5bGU6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICBpbml0TGF5b3V0OiB0cnVlLFxuICBvcmlnaW5MZWZ0OiB0cnVlLFxuICBvcmlnaW5Ub3A6IHRydWUsXG4gIHJlc2l6ZTogdHJ1ZSxcbiAgcmVzaXplQ29udGFpbmVyOiB0cnVlLFxuICAvLyBpdGVtIG9wdGlvbnNcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMC40cycsXG4gIGhpZGRlblN0eWxlOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjAwMSknXG4gIH0sXG4gIHZpc2libGVTdHlsZToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gIH1cbn07XG5cbnZhciBwcm90byA9IE91dGxheWVyLnByb3RvdHlwZTtcbi8vIGluaGVyaXQgRXZFbWl0dGVyXG51dGlscy5leHRlbmQoIHByb3RvLCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5cbi8qKlxuICogc2V0IG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKi9cbnByb3RvLm9wdGlvbiA9IGZ1bmN0aW9uKCBvcHRzICkge1xuICB1dGlscy5leHRlbmQoIHRoaXMub3B0aW9ucywgb3B0cyApO1xufTtcblxuLyoqXG4gKiBnZXQgYmFja3dhcmRzIGNvbXBhdGlibGUgb3B0aW9uIHZhbHVlLCBjaGVjayBvbGQgbmFtZVxuICovXG5wcm90by5fZ2V0T3B0aW9uID0gZnVuY3Rpb24oIG9wdGlvbiApIHtcbiAgdmFyIG9sZE9wdGlvbiA9IHRoaXMuY29uc3RydWN0b3IuY29tcGF0T3B0aW9uc1sgb3B0aW9uIF07XG4gIHJldHVybiBvbGRPcHRpb24gJiYgdGhpcy5vcHRpb25zWyBvbGRPcHRpb24gXSAhPT0gdW5kZWZpbmVkID9cbiAgICB0aGlzLm9wdGlvbnNbIG9sZE9wdGlvbiBdIDogdGhpcy5vcHRpb25zWyBvcHRpb24gXTtcbn07XG5cbk91dGxheWVyLmNvbXBhdE9wdGlvbnMgPSB7XG4gIC8vIGN1cnJlbnROYW1lOiBvbGROYW1lXG4gIGluaXRMYXlvdXQ6ICdpc0luaXRMYXlvdXQnLFxuICBob3Jpem9udGFsOiAnaXNIb3Jpem9udGFsJyxcbiAgbGF5b3V0SW5zdGFudDogJ2lzTGF5b3V0SW5zdGFudCcsXG4gIG9yaWdpbkxlZnQ6ICdpc09yaWdpbkxlZnQnLFxuICBvcmlnaW5Ub3A6ICdpc09yaWdpblRvcCcsXG4gIHJlc2l6ZTogJ2lzUmVzaXplQm91bmQnLFxuICByZXNpemVDb250YWluZXI6ICdpc1Jlc2l6aW5nQ29udGFpbmVyJ1xufTtcblxucHJvdG8uX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBnZXQgaXRlbXMgZnJvbSBjaGlsZHJlblxuICB0aGlzLnJlbG9hZEl0ZW1zKCk7XG4gIC8vIGVsZW1lbnRzIHRoYXQgYWZmZWN0IGxheW91dCwgYnV0IGFyZSBub3QgbGFpZCBvdXRcbiAgdGhpcy5zdGFtcHMgPSBbXTtcbiAgdGhpcy5zdGFtcCggdGhpcy5vcHRpb25zLnN0YW1wICk7XG4gIC8vIHNldCBjb250YWluZXIgc3R5bGVcbiAgdXRpbHMuZXh0ZW5kKCB0aGlzLmVsZW1lbnQuc3R5bGUsIHRoaXMub3B0aW9ucy5jb250YWluZXJTdHlsZSApO1xuXG4gIC8vIGJpbmQgcmVzaXplIG1ldGhvZFxuICB2YXIgY2FuQmluZFJlc2l6ZSA9IHRoaXMuX2dldE9wdGlvbigncmVzaXplJyk7XG4gIGlmICggY2FuQmluZFJlc2l6ZSApIHtcbiAgICB0aGlzLmJpbmRSZXNpemUoKTtcbiAgfVxufTtcblxuLy8gZ29lcyB0aHJvdWdoIGFsbCBjaGlsZHJlbiBhZ2FpbiBhbmQgZ2V0cyBicmlja3MgaW4gcHJvcGVyIG9yZGVyXG5wcm90by5yZWxvYWRJdGVtcyA9IGZ1bmN0aW9uKCkge1xuICAvLyBjb2xsZWN0aW9uIG9mIGl0ZW0gZWxlbWVudHNcbiAgdGhpcy5pdGVtcyA9IHRoaXMuX2l0ZW1pemUoIHRoaXMuZWxlbWVudC5jaGlsZHJlbiApO1xufTtcblxuXG4vKipcbiAqIHR1cm4gZWxlbWVudHMgaW50byBPdXRsYXllci5JdGVtcyB0byBiZSB1c2VkIGluIGxheW91dFxuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBIVE1MRWxlbWVudH0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBjb2xsZWN0aW9uIG9mIG5ldyBPdXRsYXllciBJdGVtc1xuICovXG5wcm90by5faXRlbWl6ZSA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcblxuICB2YXIgaXRlbUVsZW1zID0gdGhpcy5fZmlsdGVyRmluZEl0ZW1FbGVtZW50cyggZWxlbXMgKTtcbiAgdmFyIEl0ZW0gPSB0aGlzLmNvbnN0cnVjdG9yLkl0ZW07XG5cbiAgLy8gY3JlYXRlIG5ldyBPdXRsYXllciBJdGVtcyBmb3IgY29sbGVjdGlvblxuICB2YXIgaXRlbXMgPSBbXTtcbiAgZm9yICggdmFyIGk9MDsgaSA8IGl0ZW1FbGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgZWxlbSA9IGl0ZW1FbGVtc1tpXTtcbiAgICB2YXIgaXRlbSA9IG5ldyBJdGVtKCBlbGVtLCB0aGlzICk7XG4gICAgaXRlbXMucHVzaCggaXRlbSApO1xuICB9XG5cbiAgcmV0dXJuIGl0ZW1zO1xufTtcblxuLyoqXG4gKiBnZXQgaXRlbSBlbGVtZW50cyB0byBiZSB1c2VkIGluIGxheW91dFxuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBIVE1MRWxlbWVudH0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBpdGVtIGVsZW1lbnRzXG4gKi9cbnByb3RvLl9maWx0ZXJGaW5kSXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICByZXR1cm4gdXRpbHMuZmlsdGVyRmluZEVsZW1lbnRzKCBlbGVtcywgdGhpcy5vcHRpb25zLml0ZW1TZWxlY3RvciApO1xufTtcblxuLyoqXG4gKiBnZXR0ZXIgbWV0aG9kIGZvciBnZXR0aW5nIGl0ZW0gZWxlbWVudHNcbiAqIEByZXR1cm5zIHtBcnJheX0gZWxlbXMgLSBjb2xsZWN0aW9uIG9mIGl0ZW0gZWxlbWVudHNcbiAqL1xucHJvdG8uZ2V0SXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLml0ZW1zLm1hcCggZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgcmV0dXJuIGl0ZW0uZWxlbWVudDtcbiAgfSk7XG59O1xuXG4vLyAtLS0tLSBpbml0ICYgbGF5b3V0IC0tLS0tIC8vXG5cbi8qKlxuICogbGF5cyBvdXQgYWxsIGl0ZW1zXG4gKi9cbnByb3RvLmxheW91dCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9yZXNldExheW91dCgpO1xuICB0aGlzLl9tYW5hZ2VTdGFtcHMoKTtcblxuICAvLyBkb24ndCBhbmltYXRlIGZpcnN0IGxheW91dFxuICB2YXIgbGF5b3V0SW5zdGFudCA9IHRoaXMuX2dldE9wdGlvbignbGF5b3V0SW5zdGFudCcpO1xuICB2YXIgaXNJbnN0YW50ID0gbGF5b3V0SW5zdGFudCAhPT0gdW5kZWZpbmVkID9cbiAgICBsYXlvdXRJbnN0YW50IDogIXRoaXMuX2lzTGF5b3V0SW5pdGVkO1xuICB0aGlzLmxheW91dEl0ZW1zKCB0aGlzLml0ZW1zLCBpc0luc3RhbnQgKTtcblxuICAvLyBmbGFnIGZvciBpbml0YWxpemVkXG4gIHRoaXMuX2lzTGF5b3V0SW5pdGVkID0gdHJ1ZTtcbn07XG5cbi8vIF9pbml0IGlzIGFsaWFzIGZvciBsYXlvdXRcbnByb3RvLl9pbml0ID0gcHJvdG8ubGF5b3V0O1xuXG4vKipcbiAqIGxvZ2ljIGJlZm9yZSBhbnkgbmV3IGxheW91dFxuICovXG5wcm90by5fcmVzZXRMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nZXRTaXplKCk7XG59O1xuXG5cbnByb3RvLmdldFNpemUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zaXplID0gZ2V0U2l6ZSggdGhpcy5lbGVtZW50ICk7XG59O1xuXG4vKipcbiAqIGdldCBtZWFzdXJlbWVudCBmcm9tIG9wdGlvbiwgZm9yIGNvbHVtbldpZHRoLCByb3dIZWlnaHQsIGd1dHRlclxuICogaWYgb3B0aW9uIGlzIFN0cmluZyAtPiBnZXQgZWxlbWVudCBmcm9tIHNlbGVjdG9yIHN0cmluZywgJiBnZXQgc2l6ZSBvZiBlbGVtZW50XG4gKiBpZiBvcHRpb24gaXMgRWxlbWVudCAtPiBnZXQgc2l6ZSBvZiBlbGVtZW50XG4gKiBlbHNlIHVzZSBvcHRpb24gYXMgYSBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVhc3VyZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzaXplIC0gd2lkdGggb3IgaGVpZ2h0XG4gKiBAcHJpdmF0ZVxuICovXG5wcm90by5fZ2V0TWVhc3VyZW1lbnQgPSBmdW5jdGlvbiggbWVhc3VyZW1lbnQsIHNpemUgKSB7XG4gIHZhciBvcHRpb24gPSB0aGlzLm9wdGlvbnNbIG1lYXN1cmVtZW50IF07XG4gIHZhciBlbGVtO1xuICBpZiAoICFvcHRpb24gKSB7XG4gICAgLy8gZGVmYXVsdCB0byAwXG4gICAgdGhpc1sgbWVhc3VyZW1lbnQgXSA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG9wdGlvbiBhcyBhbiBlbGVtZW50XG4gICAgaWYgKCB0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnICkge1xuICAgICAgZWxlbSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCBvcHRpb24gKTtcbiAgICB9IGVsc2UgaWYgKCBvcHRpb24gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCApIHtcbiAgICAgIGVsZW0gPSBvcHRpb247XG4gICAgfVxuICAgIC8vIHVzZSBzaXplIG9mIGVsZW1lbnQsIGlmIGVsZW1lbnRcbiAgICB0aGlzWyBtZWFzdXJlbWVudCBdID0gZWxlbSA/IGdldFNpemUoIGVsZW0gKVsgc2l6ZSBdIDogb3B0aW9uO1xuICB9XG59O1xuXG4vKipcbiAqIGxheW91dCBhIGNvbGxlY3Rpb24gb2YgaXRlbSBlbGVtZW50c1xuICogQGFwaSBwdWJsaWNcbiAqL1xucHJvdG8ubGF5b3V0SXRlbXMgPSBmdW5jdGlvbiggaXRlbXMsIGlzSW5zdGFudCApIHtcbiAgaXRlbXMgPSB0aGlzLl9nZXRJdGVtc0ZvckxheW91dCggaXRlbXMgKTtcblxuICB0aGlzLl9sYXlvdXRJdGVtcyggaXRlbXMsIGlzSW5zdGFudCApO1xuXG4gIHRoaXMuX3Bvc3RMYXlvdXQoKTtcbn07XG5cbi8qKlxuICogZ2V0IHRoZSBpdGVtcyB0byBiZSBsYWlkIG91dFxuICogeW91IG1heSB3YW50IHRvIHNraXAgb3ZlciBzb21lIGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICogQHJldHVybnMge0FycmF5fSBpdGVtc1xuICovXG5wcm90by5fZ2V0SXRlbXNGb3JMYXlvdXQgPSBmdW5jdGlvbiggaXRlbXMgKSB7XG4gIHJldHVybiBpdGVtcy5maWx0ZXIoIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIHJldHVybiAhaXRlbS5pc0lnbm9yZWQ7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBsYXlvdXQgaXRlbXNcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzSW5zdGFudFxuICovXG5wcm90by5fbGF5b3V0SXRlbXMgPSBmdW5jdGlvbiggaXRlbXMsIGlzSW5zdGFudCApIHtcbiAgdGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyggJ2xheW91dCcsIGl0ZW1zICk7XG5cbiAgaWYgKCAhaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCApIHtcbiAgICAvLyBubyBpdGVtcywgZW1pdCBldmVudCB3aXRoIGVtcHR5IGFycmF5XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHF1ZXVlID0gW107XG5cbiAgaXRlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgLy8gZ2V0IHgveSBvYmplY3QgZnJvbSBtZXRob2RcbiAgICB2YXIgcG9zaXRpb24gPSB0aGlzLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24oIGl0ZW0gKTtcbiAgICAvLyBlbnF1ZXVlXG4gICAgcG9zaXRpb24uaXRlbSA9IGl0ZW07XG4gICAgcG9zaXRpb24uaXNJbnN0YW50ID0gaXNJbnN0YW50IHx8IGl0ZW0uaXNMYXlvdXRJbnN0YW50O1xuICAgIHF1ZXVlLnB1c2goIHBvc2l0aW9uICk7XG4gIH0sIHRoaXMgKTtcblxuICB0aGlzLl9wcm9jZXNzTGF5b3V0UXVldWUoIHF1ZXVlICk7XG59O1xuXG4vKipcbiAqIGdldCBpdGVtIGxheW91dCBwb3NpdGlvblxuICogQHBhcmFtIHtPdXRsYXllci5JdGVtfSBpdGVtXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB4IGFuZCB5IHBvc2l0aW9uXG4gKi9cbnByb3RvLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24gPSBmdW5jdGlvbiggLyogaXRlbSAqLyApIHtcbiAgcmV0dXJuIHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcbn07XG5cbi8qKlxuICogaXRlcmF0ZSBvdmVyIGFycmF5IGFuZCBwb3NpdGlvbiBlYWNoIGl0ZW1cbiAqIFJlYXNvbiBiZWluZyAtIHNlcGFyYXRpbmcgdGhpcyBsb2dpYyBwcmV2ZW50cyAnbGF5b3V0IGludmFsaWRhdGlvbidcbiAqIHRoeCBAcGF1bF9pcmlzaFxuICogQHBhcmFtIHtBcnJheX0gcXVldWVcbiAqL1xucHJvdG8uX3Byb2Nlc3NMYXlvdXRRdWV1ZSA9IGZ1bmN0aW9uKCBxdWV1ZSApIHtcbiAgdGhpcy51cGRhdGVTdGFnZ2VyKCk7XG4gIHF1ZXVlLmZvckVhY2goIGZ1bmN0aW9uKCBvYmosIGkgKSB7XG4gICAgdGhpcy5fcG9zaXRpb25JdGVtKCBvYmouaXRlbSwgb2JqLngsIG9iai55LCBvYmouaXNJbnN0YW50LCBpICk7XG4gIH0sIHRoaXMgKTtcbn07XG5cbi8vIHNldCBzdGFnZ2VyIGZyb20gb3B0aW9uIGluIG1pbGxpc2Vjb25kcyBudW1iZXJcbnByb3RvLnVwZGF0ZVN0YWdnZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN0YWdnZXIgPSB0aGlzLm9wdGlvbnMuc3RhZ2dlcjtcbiAgaWYgKCBzdGFnZ2VyID09PSBudWxsIHx8IHN0YWdnZXIgPT09IHVuZGVmaW5lZCApIHtcbiAgICB0aGlzLnN0YWdnZXIgPSAwO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnN0YWdnZXIgPSBnZXRNaWxsaXNlY29uZHMoIHN0YWdnZXIgKTtcbiAgcmV0dXJuIHRoaXMuc3RhZ2dlcjtcbn07XG5cbi8qKlxuICogU2V0cyBwb3NpdGlvbiBvZiBpdGVtIGluIERPTVxuICogQHBhcmFtIHtPdXRsYXllci5JdGVtfSBpdGVtXG4gKiBAcGFyYW0ge051bWJlcn0geCAtIGhvcml6b250YWwgcG9zaXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSB5IC0gdmVydGljYWwgcG9zaXRpb25cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNJbnN0YW50IC0gZGlzYWJsZXMgdHJhbnNpdGlvbnNcbiAqL1xucHJvdG8uX3Bvc2l0aW9uSXRlbSA9IGZ1bmN0aW9uKCBpdGVtLCB4LCB5LCBpc0luc3RhbnQsIGkgKSB7XG4gIGlmICggaXNJbnN0YW50ICkge1xuICAgIC8vIGlmIG5vdCB0cmFuc2l0aW9uLCBqdXN0IHNldCBDU1NcbiAgICBpdGVtLmdvVG8oIHgsIHkgKTtcbiAgfSBlbHNlIHtcbiAgICBpdGVtLnN0YWdnZXIoIGkgKiB0aGlzLnN0YWdnZXIgKTtcbiAgICBpdGVtLm1vdmVUbyggeCwgeSApO1xuICB9XG59O1xuXG4vKipcbiAqIEFueSBsb2dpYyB5b3Ugd2FudCB0byBkbyBhZnRlciBlYWNoIGxheW91dCxcbiAqIGkuZS4gc2l6ZSB0aGUgY29udGFpbmVyXG4gKi9cbnByb3RvLl9wb3N0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmVzaXplQ29udGFpbmVyKCk7XG59O1xuXG5wcm90by5yZXNpemVDb250YWluZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGlzUmVzaXppbmdDb250YWluZXIgPSB0aGlzLl9nZXRPcHRpb24oJ3Jlc2l6ZUNvbnRhaW5lcicpO1xuICBpZiAoICFpc1Jlc2l6aW5nQ29udGFpbmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgc2l6ZSA9IHRoaXMuX2dldENvbnRhaW5lclNpemUoKTtcbiAgaWYgKCBzaXplICkge1xuICAgIHRoaXMuX3NldENvbnRhaW5lck1lYXN1cmUoIHNpemUud2lkdGgsIHRydWUgKTtcbiAgICB0aGlzLl9zZXRDb250YWluZXJNZWFzdXJlKCBzaXplLmhlaWdodCwgZmFsc2UgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXRzIHdpZHRoIG9yIGhlaWdodCBvZiBjb250YWluZXIgaWYgcmV0dXJuZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IHNpemVcbiAqICAgQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gKiAgIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcbiAqL1xucHJvdG8uX2dldENvbnRhaW5lclNpemUgPSBub29wO1xuXG4vKipcbiAqIEBwYXJhbSB7TnVtYmVyfSBtZWFzdXJlIC0gc2l6ZSBvZiB3aWR0aCBvciBoZWlnaHRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNXaWR0aFxuICovXG5wcm90by5fc2V0Q29udGFpbmVyTWVhc3VyZSA9IGZ1bmN0aW9uKCBtZWFzdXJlLCBpc1dpZHRoICkge1xuICBpZiAoIG1lYXN1cmUgPT09IHVuZGVmaW5lZCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZWxlbVNpemUgPSB0aGlzLnNpemU7XG4gIC8vIGFkZCBwYWRkaW5nIGFuZCBib3JkZXIgd2lkdGggaWYgYm9yZGVyIGJveFxuICBpZiAoIGVsZW1TaXplLmlzQm9yZGVyQm94ICkge1xuICAgIG1lYXN1cmUgKz0gaXNXaWR0aCA/IGVsZW1TaXplLnBhZGRpbmdMZWZ0ICsgZWxlbVNpemUucGFkZGluZ1JpZ2h0ICtcbiAgICAgIGVsZW1TaXplLmJvcmRlckxlZnRXaWR0aCArIGVsZW1TaXplLmJvcmRlclJpZ2h0V2lkdGggOlxuICAgICAgZWxlbVNpemUucGFkZGluZ0JvdHRvbSArIGVsZW1TaXplLnBhZGRpbmdUb3AgK1xuICAgICAgZWxlbVNpemUuYm9yZGVyVG9wV2lkdGggKyBlbGVtU2l6ZS5ib3JkZXJCb3R0b21XaWR0aDtcbiAgfVxuXG4gIG1lYXN1cmUgPSBNYXRoLm1heCggbWVhc3VyZSwgMCApO1xuICB0aGlzLmVsZW1lbnQuc3R5bGVbIGlzV2lkdGggPyAnd2lkdGgnIDogJ2hlaWdodCcgXSA9IG1lYXN1cmUgKyAncHgnO1xufTtcblxuLyoqXG4gKiBlbWl0IGV2ZW50Q29tcGxldGUgb24gYSBjb2xsZWN0aW9uIG9mIGl0ZW1zIGV2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICogQHBhcmFtIHtBcnJheX0gaXRlbXMgLSBPdXRsYXllci5JdGVtc1xuICovXG5wcm90by5fZW1pdENvbXBsZXRlT25JdGVtcyA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGl0ZW1zICkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICBmdW5jdGlvbiBvbkNvbXBsZXRlKCkge1xuICAgIF90aGlzLmRpc3BhdGNoRXZlbnQoIGV2ZW50TmFtZSArICdDb21wbGV0ZScsIG51bGwsIFsgaXRlbXMgXSApO1xuICB9XG5cbiAgdmFyIGNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICBpZiAoICFpdGVtcyB8fCAhY291bnQgKSB7XG4gICAgb25Db21wbGV0ZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBkb25lQ291bnQgPSAwO1xuICBmdW5jdGlvbiB0aWNrKCkge1xuICAgIGRvbmVDb3VudCsrO1xuICAgIGlmICggZG9uZUNvdW50ID09IGNvdW50ICkge1xuICAgICAgb25Db21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJpbmQgY2FsbGJhY2tcbiAgaXRlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgaXRlbS5vbmNlKCBldmVudE5hbWUsIHRpY2sgKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIGVtaXRzIGV2ZW50cyB2aWEgRXZFbWl0dGVyIGFuZCBqUXVlcnkgZXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAtIG5hbWUgb2YgZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gb3JpZ2luYWwgZXZlbnRcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgLSBleHRyYSBhcmd1bWVudHNcbiAqL1xucHJvdG8uZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKCB0eXBlLCBldmVudCwgYXJncyApIHtcbiAgLy8gYWRkIG9yaWdpbmFsIGV2ZW50IHRvIGFyZ3VtZW50c1xuICB2YXIgZW1pdEFyZ3MgPSBldmVudCA/IFsgZXZlbnQgXS5jb25jYXQoIGFyZ3MgKSA6IGFyZ3M7XG4gIHRoaXMuZW1pdEV2ZW50KCB0eXBlLCBlbWl0QXJncyApO1xuXG4gIGlmICggalF1ZXJ5ICkge1xuICAgIC8vIHNldCB0aGlzLiRlbGVtZW50XG4gICAgdGhpcy4kZWxlbWVudCA9IHRoaXMuJGVsZW1lbnQgfHwgalF1ZXJ5KCB0aGlzLmVsZW1lbnQgKTtcbiAgICBpZiAoIGV2ZW50ICkge1xuICAgICAgLy8gY3JlYXRlIGpRdWVyeSBldmVudFxuICAgICAgdmFyICRldmVudCA9IGpRdWVyeS5FdmVudCggZXZlbnQgKTtcbiAgICAgICRldmVudC50eXBlID0gdHlwZTtcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlciggJGV2ZW50LCBhcmdzICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGp1c3QgdHJpZ2dlciB3aXRoIHR5cGUgaWYgbm8gZXZlbnQgYXZhaWxhYmxlXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoIHR5cGUsIGFyZ3MgKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGlnbm9yZSAmIHN0YW1wcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cbi8qKlxuICoga2VlcCBpdGVtIGluIGNvbGxlY3Rpb24sIGJ1dCBkbyBub3QgbGF5IGl0IG91dFxuICogaWdub3JlZCBpdGVtcyBkbyBub3QgZ2V0IHNraXBwZWQgaW4gbGF5b3V0XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqL1xucHJvdG8uaWdub3JlID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIHZhciBpdGVtID0gdGhpcy5nZXRJdGVtKCBlbGVtICk7XG4gIGlmICggaXRlbSApIHtcbiAgICBpdGVtLmlzSWdub3JlZCA9IHRydWU7XG4gIH1cbn07XG5cbi8qKlxuICogcmV0dXJuIGl0ZW0gdG8gbGF5b3V0IGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICovXG5wcm90by51bmlnbm9yZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbSggZWxlbSApO1xuICBpZiAoIGl0ZW0gKSB7XG4gICAgZGVsZXRlIGl0ZW0uaXNJZ25vcmVkO1xuICB9XG59O1xuXG4vKipcbiAqIGFkZHMgZWxlbWVudHMgdG8gc3RhbXBzXG4gKiBAcGFyYW0ge05vZGVMaXN0LCBBcnJheSwgRWxlbWVudCwgb3IgU3RyaW5nfSBlbGVtc1xuICovXG5wcm90by5zdGFtcCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgZWxlbXMgPSB0aGlzLl9maW5kKCBlbGVtcyApO1xuICBpZiAoICFlbGVtcyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnN0YW1wcyA9IHRoaXMuc3RhbXBzLmNvbmNhdCggZWxlbXMgKTtcbiAgLy8gaWdub3JlXG4gIGVsZW1zLmZvckVhY2goIHRoaXMuaWdub3JlLCB0aGlzICk7XG59O1xuXG4vKipcbiAqIHJlbW92ZXMgZWxlbWVudHMgdG8gc3RhbXBzXG4gKiBAcGFyYW0ge05vZGVMaXN0LCBBcnJheSwgb3IgRWxlbWVudH0gZWxlbXNcbiAqL1xucHJvdG8udW5zdGFtcCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgZWxlbXMgPSB0aGlzLl9maW5kKCBlbGVtcyApO1xuICBpZiAoICFlbGVtcyApe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgIC8vIGZpbHRlciBvdXQgcmVtb3ZlZCBzdGFtcCBlbGVtZW50c1xuICAgIHV0aWxzLnJlbW92ZUZyb20oIHRoaXMuc3RhbXBzLCBlbGVtICk7XG4gICAgdGhpcy51bmlnbm9yZSggZWxlbSApO1xuICB9LCB0aGlzICk7XG59O1xuXG4vKipcbiAqIGZpbmRzIGNoaWxkIGVsZW1lbnRzXG4gKiBAcGFyYW0ge05vZGVMaXN0LCBBcnJheSwgRWxlbWVudCwgb3IgU3RyaW5nfSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBlbGVtc1xuICovXG5wcm90by5fZmluZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgaWYgKCAhZWxlbXMgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGlmIHN0cmluZywgdXNlIGFyZ3VtZW50IGFzIHNlbGVjdG9yIHN0cmluZ1xuICBpZiAoIHR5cGVvZiBlbGVtcyA9PSAnc3RyaW5nJyApIHtcbiAgICBlbGVtcyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCBlbGVtcyApO1xuICB9XG4gIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuICByZXR1cm4gZWxlbXM7XG59O1xuXG5wcm90by5fbWFuYWdlU3RhbXBzID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMuc3RhbXBzIHx8ICF0aGlzLnN0YW1wcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5fZ2V0Qm91bmRpbmdSZWN0KCk7XG5cbiAgdGhpcy5zdGFtcHMuZm9yRWFjaCggdGhpcy5fbWFuYWdlU3RhbXAsIHRoaXMgKTtcbn07XG5cbi8vIHVwZGF0ZSBib3VuZGluZ0xlZnQgLyBUb3BcbnByb3RvLl9nZXRCb3VuZGluZ1JlY3QgPSBmdW5jdGlvbigpIHtcbiAgLy8gZ2V0IGJvdW5kaW5nIHJlY3QgZm9yIGNvbnRhaW5lciBlbGVtZW50XG4gIHZhciBib3VuZGluZ1JlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzaXplID0gdGhpcy5zaXplO1xuICB0aGlzLl9ib3VuZGluZ1JlY3QgPSB7XG4gICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgKyBzaXplLnBhZGRpbmdMZWZ0ICsgc2l6ZS5ib3JkZXJMZWZ0V2lkdGgsXG4gICAgdG9wOiBib3VuZGluZ1JlY3QudG9wICsgc2l6ZS5wYWRkaW5nVG9wICsgc2l6ZS5ib3JkZXJUb3BXaWR0aCxcbiAgICByaWdodDogYm91bmRpbmdSZWN0LnJpZ2h0IC0gKCBzaXplLnBhZGRpbmdSaWdodCArIHNpemUuYm9yZGVyUmlnaHRXaWR0aCApLFxuICAgIGJvdHRvbTogYm91bmRpbmdSZWN0LmJvdHRvbSAtICggc2l6ZS5wYWRkaW5nQm90dG9tICsgc2l6ZS5ib3JkZXJCb3R0b21XaWR0aCApXG4gIH07XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3RhbXBcbioqL1xucHJvdG8uX21hbmFnZVN0YW1wID0gbm9vcDtcblxuLyoqXG4gKiBnZXQgeC95IHBvc2l0aW9uIG9mIGVsZW1lbnQgcmVsYXRpdmUgdG8gY29udGFpbmVyIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICogQHJldHVybnMge09iamVjdH0gb2Zmc2V0IC0gaGFzIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbVxuICovXG5wcm90by5fZ2V0RWxlbWVudE9mZnNldCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB2YXIgYm91bmRpbmdSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHRoaXNSZWN0ID0gdGhpcy5fYm91bmRpbmdSZWN0O1xuICB2YXIgc2l6ZSA9IGdldFNpemUoIGVsZW0gKTtcbiAgdmFyIG9mZnNldCA9IHtcbiAgICBsZWZ0OiBib3VuZGluZ1JlY3QubGVmdCAtIHRoaXNSZWN0LmxlZnQgLSBzaXplLm1hcmdpbkxlZnQsXG4gICAgdG9wOiBib3VuZGluZ1JlY3QudG9wIC0gdGhpc1JlY3QudG9wIC0gc2l6ZS5tYXJnaW5Ub3AsXG4gICAgcmlnaHQ6IHRoaXNSZWN0LnJpZ2h0IC0gYm91bmRpbmdSZWN0LnJpZ2h0IC0gc2l6ZS5tYXJnaW5SaWdodCxcbiAgICBib3R0b206IHRoaXNSZWN0LmJvdHRvbSAtIGJvdW5kaW5nUmVjdC5ib3R0b20gLSBzaXplLm1hcmdpbkJvdHRvbVxuICB9O1xuICByZXR1cm4gb2Zmc2V0O1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmVzaXplIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGVuYWJsZSBldmVudCBoYW5kbGVycyBmb3IgbGlzdGVuZXJzXG4vLyBpLmUuIHJlc2l6ZSAtPiBvbnJlc2l6ZVxucHJvdG8uaGFuZGxlRXZlbnQgPSB1dGlscy5oYW5kbGVFdmVudDtcblxuLyoqXG4gKiBCaW5kIGxheW91dCB0byB3aW5kb3cgcmVzaXppbmdcbiAqL1xucHJvdG8uYmluZFJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMgKTtcbiAgdGhpcy5pc1Jlc2l6ZUJvdW5kID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogVW5iaW5kIGxheW91dCB0byB3aW5kb3cgcmVzaXppbmdcbiAqL1xucHJvdG8udW5iaW5kUmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJywgdGhpcyApO1xuICB0aGlzLmlzUmVzaXplQm91bmQgPSBmYWxzZTtcbn07XG5cbnByb3RvLm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmVzaXplKCk7XG59O1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCggT3V0bGF5ZXIsICdvbnJlc2l6ZScsIDEwMCApO1xuXG5wcm90by5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgLy8gZG9uJ3QgdHJpZ2dlciBpZiBzaXplIGRpZCBub3QgY2hhbmdlXG4gIC8vIG9yIGlmIHJlc2l6ZSB3YXMgdW5ib3VuZC4gU2VlICM5XG4gIGlmICggIXRoaXMuaXNSZXNpemVCb3VuZCB8fCAhdGhpcy5uZWVkc1Jlc2l6ZUxheW91dCgpICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMubGF5b3V0KCk7XG59O1xuXG4vKipcbiAqIGNoZWNrIGlmIGxheW91dCBpcyBuZWVkZWQgcG9zdCBsYXlvdXRcbiAqIEByZXR1cm5zIEJvb2xlYW5cbiAqL1xucHJvdG8ubmVlZHNSZXNpemVMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbiAgLy8gY2hlY2sgdGhhdCB0aGlzLnNpemUgYW5kIHNpemUgYXJlIHRoZXJlXG4gIC8vIElFOCB0cmlnZ2VycyByZXNpemUgb24gYm9keSBzaXplIGNoYW5nZSwgc28gdGhleSBtaWdodCBub3QgYmVcbiAgdmFyIGhhc1NpemVzID0gdGhpcy5zaXplICYmIHNpemU7XG4gIHJldHVybiBoYXNTaXplcyAmJiBzaXplLmlubmVyV2lkdGggIT09IHRoaXMuc2l6ZS5pbm5lcldpZHRoO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWV0aG9kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGFkZCBpdGVtcyB0byBPdXRsYXllciBpbnN0YW5jZVxuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBFbGVtZW50fSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBpdGVtcyAtIE91dGxheWVyLkl0ZW1zXG4qKi9cbnByb3RvLmFkZEl0ZW1zID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtaXplKCBlbGVtcyApO1xuICAvLyBhZGQgaXRlbXMgdG8gY29sbGVjdGlvblxuICBpZiAoIGl0ZW1zLmxlbmd0aCApIHtcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5jb25jYXQoIGl0ZW1zICk7XG4gIH1cbiAgcmV0dXJuIGl0ZW1zO1xufTtcblxuLyoqXG4gKiBMYXlvdXQgbmV3bHktYXBwZW5kZWQgaXRlbSBlbGVtZW50c1xuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBFbGVtZW50fSBlbGVtc1xuICovXG5wcm90by5hcHBlbmRlZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5hZGRJdGVtcyggZWxlbXMgKTtcbiAgaWYgKCAhaXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBsYXlvdXQgYW5kIHJldmVhbCBqdXN0IHRoZSBuZXcgaXRlbXNcbiAgdGhpcy5sYXlvdXRJdGVtcyggaXRlbXMsIHRydWUgKTtcbiAgdGhpcy5yZXZlYWwoIGl0ZW1zICk7XG59O1xuXG4vKipcbiAqIExheW91dCBwcmVwZW5kZWQgZWxlbWVudHNcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgRWxlbWVudH0gZWxlbXNcbiAqL1xucHJvdG8ucHJlcGVuZGVkID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtaXplKCBlbGVtcyApO1xuICBpZiAoICFpdGVtcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFkZCBpdGVtcyB0byBiZWdpbm5pbmcgb2YgY29sbGVjdGlvblxuICB2YXIgcHJldmlvdXNJdGVtcyA9IHRoaXMuaXRlbXMuc2xpY2UoMCk7XG4gIHRoaXMuaXRlbXMgPSBpdGVtcy5jb25jYXQoIHByZXZpb3VzSXRlbXMgKTtcbiAgLy8gc3RhcnQgbmV3IGxheW91dFxuICB0aGlzLl9yZXNldExheW91dCgpO1xuICB0aGlzLl9tYW5hZ2VTdGFtcHMoKTtcbiAgLy8gbGF5b3V0IG5ldyBzdHVmZiB3aXRob3V0IHRyYW5zaXRpb25cbiAgdGhpcy5sYXlvdXRJdGVtcyggaXRlbXMsIHRydWUgKTtcbiAgdGhpcy5yZXZlYWwoIGl0ZW1zICk7XG4gIC8vIGxheW91dCBwcmV2aW91cyBpdGVtc1xuICB0aGlzLmxheW91dEl0ZW1zKCBwcmV2aW91c0l0ZW1zICk7XG59O1xuXG4vKipcbiAqIHJldmVhbCBhIGNvbGxlY3Rpb24gb2YgaXRlbXNcbiAqIEBwYXJhbSB7QXJyYXkgb2YgT3V0bGF5ZXIuSXRlbXN9IGl0ZW1zXG4gKi9cbnByb3RvLnJldmVhbCA9IGZ1bmN0aW9uKCBpdGVtcyApIHtcbiAgdGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyggJ3JldmVhbCcsIGl0ZW1zICk7XG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBzdGFnZ2VyID0gdGhpcy51cGRhdGVTdGFnZ2VyKCk7XG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtLCBpICkge1xuICAgIGl0ZW0uc3RhZ2dlciggaSAqIHN0YWdnZXIgKTtcbiAgICBpdGVtLnJldmVhbCgpO1xuICB9KTtcbn07XG5cbi8qKlxuICogaGlkZSBhIGNvbGxlY3Rpb24gb2YgaXRlbXNcbiAqIEBwYXJhbSB7QXJyYXkgb2YgT3V0bGF5ZXIuSXRlbXN9IGl0ZW1zXG4gKi9cbnByb3RvLmhpZGUgPSBmdW5jdGlvbiggaXRlbXMgKSB7XG4gIHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoICdoaWRlJywgaXRlbXMgKTtcbiAgaWYgKCAhaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHN0YWdnZXIgPSB0aGlzLnVwZGF0ZVN0YWdnZXIoKTtcbiAgaXRlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGl0ZW0sIGkgKSB7XG4gICAgaXRlbS5zdGFnZ2VyKCBpICogc3RhZ2dlciApO1xuICAgIGl0ZW0uaGlkZSgpO1xuICB9KTtcbn07XG5cbi8qKlxuICogcmV2ZWFsIGl0ZW0gZWxlbWVudHNcbiAqIEBwYXJhbSB7QXJyYXl9LCB7RWxlbWVudH0sIHtOb2RlTGlzdH0gaXRlbXNcbiAqL1xucHJvdG8ucmV2ZWFsSXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCBlbGVtcyApO1xuICB0aGlzLnJldmVhbCggaXRlbXMgKTtcbn07XG5cbi8qKlxuICogaGlkZSBpdGVtIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5fSwge0VsZW1lbnR9LCB7Tm9kZUxpc3R9IGl0ZW1zXG4gKi9cbnByb3RvLmhpZGVJdGVtRWxlbWVudHMgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoIGVsZW1zICk7XG4gIHRoaXMuaGlkZSggaXRlbXMgKTtcbn07XG5cbi8qKlxuICogZ2V0IE91dGxheWVyLkl0ZW0sIGdpdmVuIGFuIEVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtPdXRsYXllci5JdGVtfSBpdGVtXG4gKi9cbnByb3RvLmdldEl0ZW0gPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgLy8gbG9vcCB0aHJvdWdoIGl0ZW1zIHRvIGdldCB0aGUgb25lIHRoYXQgbWF0Y2hlc1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuaXRlbXNbaV07XG4gICAgaWYgKCBpdGVtLmVsZW1lbnQgPT0gZWxlbSApIHtcbiAgICAgIC8vIHJldHVybiBpdGVtXG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogZ2V0IGNvbGxlY3Rpb24gb2YgT3V0bGF5ZXIuSXRlbXMsIGdpdmVuIEVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5fSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBpdGVtcyAtIE91dGxheWVyLkl0ZW1zXG4gKi9cbnByb3RvLmdldEl0ZW1zID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgdmFyIGl0ZW1zID0gW107XG4gIGVsZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgIHZhciBpdGVtID0gdGhpcy5nZXRJdGVtKCBlbGVtICk7XG4gICAgaWYgKCBpdGVtICkge1xuICAgICAgaXRlbXMucHVzaCggaXRlbSApO1xuICAgIH1cbiAgfSwgdGhpcyApO1xuXG4gIHJldHVybiBpdGVtcztcbn07XG5cbi8qKlxuICogcmVtb3ZlIGVsZW1lbnQocykgZnJvbSBpbnN0YW5jZSBhbmQgRE9NXG4gKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEVsZW1lbnR9IGVsZW1zXG4gKi9cbnByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIHJlbW92ZUl0ZW1zID0gdGhpcy5nZXRJdGVtcyggZWxlbXMgKTtcblxuICB0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKCAncmVtb3ZlJywgcmVtb3ZlSXRlbXMgKTtcblxuICAvLyBiYWlsIGlmIG5vIGl0ZW1zIHRvIHJlbW92ZVxuICBpZiAoICFyZW1vdmVJdGVtcyB8fCAhcmVtb3ZlSXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJlbW92ZUl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjb2xsZWN0aW9uXG4gICAgdXRpbHMucmVtb3ZlRnJvbSggdGhpcy5pdGVtcywgaXRlbSApO1xuICB9LCB0aGlzICk7XG59O1xuXG4vLyAtLS0tLSBkZXN0cm95IC0tLS0tIC8vXG5cbi8vIHJlbW92ZSBhbmQgZGlzYWJsZSBPdXRsYXllciBpbnN0YW5jZVxucHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAvLyBjbGVhbiB1cCBkeW5hbWljIHN0eWxlc1xuICB2YXIgc3R5bGUgPSB0aGlzLmVsZW1lbnQuc3R5bGU7XG4gIHN0eWxlLmhlaWdodCA9ICcnO1xuICBzdHlsZS5wb3NpdGlvbiA9ICcnO1xuICBzdHlsZS53aWR0aCA9ICcnO1xuICAvLyBkZXN0cm95IGl0ZW1zXG4gIHRoaXMuaXRlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgaXRlbS5kZXN0cm95KCk7XG4gIH0pO1xuXG4gIHRoaXMudW5iaW5kUmVzaXplKCk7XG5cbiAgdmFyIGlkID0gdGhpcy5lbGVtZW50Lm91dGxheWVyR1VJRDtcbiAgZGVsZXRlIGluc3RhbmNlc1sgaWQgXTsgLy8gcmVtb3ZlIHJlZmVyZW5jZSB0byBpbnN0YW5jZSBieSBpZFxuICBkZWxldGUgdGhpcy5lbGVtZW50Lm91dGxheWVyR1VJRDtcbiAgLy8gcmVtb3ZlIGRhdGEgZm9yIGpRdWVyeVxuICBpZiAoIGpRdWVyeSApIHtcbiAgICBqUXVlcnkucmVtb3ZlRGF0YSggdGhpcy5lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLm5hbWVzcGFjZSApO1xuICB9XG5cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRhdGEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBnZXQgT3V0bGF5ZXIgaW5zdGFuY2UgZnJvbSBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm5zIHtPdXRsYXllcn1cbiAqL1xuT3V0bGF5ZXIuZGF0YSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBlbGVtID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtICk7XG4gIHZhciBpZCA9IGVsZW0gJiYgZWxlbS5vdXRsYXllckdVSUQ7XG4gIHJldHVybiBpZCAmJiBpbnN0YW5jZXNbIGlkIF07XG59O1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNyZWF0ZSBPdXRsYXllciBjbGFzcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGNyZWF0ZSBhIGxheW91dCBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICovXG5PdXRsYXllci5jcmVhdGUgPSBmdW5jdGlvbiggbmFtZXNwYWNlLCBvcHRpb25zICkge1xuICAvLyBzdWItY2xhc3MgT3V0bGF5ZXJcbiAgdmFyIExheW91dCA9IHN1YmNsYXNzKCBPdXRsYXllciApO1xuICAvLyBhcHBseSBuZXcgb3B0aW9ucyBhbmQgY29tcGF0T3B0aW9uc1xuICBMYXlvdXQuZGVmYXVsdHMgPSB1dGlscy5leHRlbmQoIHt9LCBPdXRsYXllci5kZWZhdWx0cyApO1xuICB1dGlscy5leHRlbmQoIExheW91dC5kZWZhdWx0cywgb3B0aW9ucyApO1xuICBMYXlvdXQuY29tcGF0T3B0aW9ucyA9IHV0aWxzLmV4dGVuZCgge30sIE91dGxheWVyLmNvbXBhdE9wdGlvbnMgICk7XG5cbiAgTGF5b3V0Lm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcblxuICBMYXlvdXQuZGF0YSA9IE91dGxheWVyLmRhdGE7XG5cbiAgLy8gc3ViLWNsYXNzIEl0ZW1cbiAgTGF5b3V0Lkl0ZW0gPSBzdWJjbGFzcyggSXRlbSApO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRlY2xhcmF0aXZlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgdXRpbHMuaHRtbEluaXQoIExheW91dCwgbmFtZXNwYWNlICk7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0galF1ZXJ5IGJyaWRnZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIC8vIG1ha2UgaW50byBqUXVlcnkgcGx1Z2luXG4gIGlmICggalF1ZXJ5ICYmIGpRdWVyeS5icmlkZ2V0ICkge1xuICAgIGpRdWVyeS5icmlkZ2V0KCBuYW1lc3BhY2UsIExheW91dCApO1xuICB9XG5cbiAgcmV0dXJuIExheW91dDtcbn07XG5cbmZ1bmN0aW9uIHN1YmNsYXNzKCBQYXJlbnQgKSB7XG4gIGZ1bmN0aW9uIFN1YkNsYXNzKCkge1xuICAgIFBhcmVudC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gIH1cblxuICBTdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBQYXJlbnQucHJvdG90eXBlICk7XG4gIFN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN1YkNsYXNzO1xuXG4gIHJldHVybiBTdWJDbGFzcztcbn1cblxuLy8gLS0tLS0gaGVscGVycyAtLS0tLSAvL1xuXG4vLyBob3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGluIGVhY2ggdW5pdFxudmFyIG1zVW5pdHMgPSB7XG4gIG1zOiAxLFxuICBzOiAxMDAwXG59O1xuXG4vLyBtdW5nZSB0aW1lLWxpa2UgcGFyYW1ldGVyIGludG8gbWlsbGlzZWNvbmQgbnVtYmVyXG4vLyAnMC40cycgLT4gNDBcbmZ1bmN0aW9uIGdldE1pbGxpc2Vjb25kcyggdGltZSApIHtcbiAgaWYgKCB0eXBlb2YgdGltZSA9PSAnbnVtYmVyJyApIHtcbiAgICByZXR1cm4gdGltZTtcbiAgfVxuICB2YXIgbWF0Y2hlcyA9IHRpbWUubWF0Y2goIC8oXlxcZCpcXC4/XFxkKikoXFx3KikvICk7XG4gIHZhciBudW0gPSBtYXRjaGVzICYmIG1hdGNoZXNbMV07XG4gIHZhciB1bml0ID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzJdO1xuICBpZiAoICFudW0ubGVuZ3RoICkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIG51bSA9IHBhcnNlRmxvYXQoIG51bSApO1xuICB2YXIgbXVsdCA9IG1zVW5pdHNbIHVuaXQgXSB8fCAxO1xuICByZXR1cm4gbnVtICogbXVsdDtcbn1cblxuLy8gLS0tLS0gZmluIC0tLS0tIC8vXG5cbi8vIGJhY2sgaW4gZ2xvYmFsXG5PdXRsYXllci5JdGVtID0gSXRlbTtcblxucmV0dXJuIE91dGxheWVyO1xuXG59KSk7XG5cbi8qKlxuICogSXNvdG9wZSBJdGVtXG4qKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCAnaXNvdG9wZS9qcy9pdGVtJyxbXG4gICAgICAgICdvdXRsYXllci9vdXRsYXllcidcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCdvdXRsYXllcicpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5Jc290b3BlID0gd2luZG93Lklzb3RvcGUgfHwge307XG4gICAgd2luZG93Lklzb3RvcGUuSXRlbSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3cuT3V0bGF5ZXJcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggT3V0bGF5ZXIgKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEl0ZW0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gc3ViLWNsYXNzIE91dGxheWVyIEl0ZW1cbmZ1bmN0aW9uIEl0ZW0oKSB7XG4gIE91dGxheWVyLkl0ZW0uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xufVxuXG52YXIgcHJvdG8gPSBJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIE91dGxheWVyLkl0ZW0ucHJvdG90eXBlICk7XG5cbnZhciBfY3JlYXRlID0gcHJvdG8uX2NyZWF0ZTtcbnByb3RvLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gYXNzaWduIGlkLCB1c2VkIGZvciBvcmlnaW5hbC1vcmRlciBzb3J0aW5nXG4gIHRoaXMuaWQgPSB0aGlzLmxheW91dC5pdGVtR1VJRCsrO1xuICBfY3JlYXRlLmNhbGwoIHRoaXMgKTtcbiAgdGhpcy5zb3J0RGF0YSA9IHt9O1xufTtcblxucHJvdG8udXBkYXRlU29ydERhdGEgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLmlzSWdub3JlZCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gZGVmYXVsdCBzb3J0ZXJzXG4gIHRoaXMuc29ydERhdGEuaWQgPSB0aGlzLmlkO1xuICAvLyBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICB0aGlzLnNvcnREYXRhWydvcmlnaW5hbC1vcmRlciddID0gdGhpcy5pZDtcbiAgdGhpcy5zb3J0RGF0YS5yYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAvLyBnbyB0aHJ1IGdldFNvcnREYXRhIG9iaiBhbmQgYXBwbHkgdGhlIHNvcnRlcnNcbiAgdmFyIGdldFNvcnREYXRhID0gdGhpcy5sYXlvdXQub3B0aW9ucy5nZXRTb3J0RGF0YTtcbiAgdmFyIHNvcnRlcnMgPSB0aGlzLmxheW91dC5fc29ydGVycztcbiAgZm9yICggdmFyIGtleSBpbiBnZXRTb3J0RGF0YSApIHtcbiAgICB2YXIgc29ydGVyID0gc29ydGVyc1sga2V5IF07XG4gICAgdGhpcy5zb3J0RGF0YVsga2V5IF0gPSBzb3J0ZXIoIHRoaXMuZWxlbWVudCwgdGhpcyApO1xuICB9XG59O1xuXG52YXIgX2Rlc3Ryb3kgPSBwcm90by5kZXN0cm95O1xucHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAvLyBjYWxsIHN1cGVyXG4gIF9kZXN0cm95LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgLy8gcmVzZXQgZGlzcGxheSwgIzc0MVxuICB0aGlzLmNzcyh7XG4gICAgZGlzcGxheTogJydcbiAgfSk7XG59O1xuXG5yZXR1cm4gSXRlbTtcblxufSkpO1xuXG4vKipcbiAqIElzb3RvcGUgTGF5b3V0TW9kZVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggJ2lzb3RvcGUvanMvbGF5b3V0LW1vZGUnLFtcbiAgICAgICAgJ2dldC1zaXplL2dldC1zaXplJyxcbiAgICAgICAgJ291dGxheWVyL291dGxheWVyJ1xuICAgICAgXSxcbiAgICAgIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJyksXG4gICAgICByZXF1aXJlKCdvdXRsYXllcicpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5Jc290b3BlID0gd2luZG93Lklzb3RvcGUgfHwge307XG4gICAgd2luZG93Lklzb3RvcGUuTGF5b3V0TW9kZSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3cuZ2V0U2l6ZSxcbiAgICAgIHdpbmRvdy5PdXRsYXllclxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBnZXRTaXplLCBPdXRsYXllciApIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIGxheW91dCBtb2RlIGNsYXNzXG4gIGZ1bmN0aW9uIExheW91dE1vZGUoIGlzb3RvcGUgKSB7XG4gICAgdGhpcy5pc290b3BlID0gaXNvdG9wZTtcbiAgICAvLyBsaW5rIHByb3BlcnRpZXNcbiAgICBpZiAoIGlzb3RvcGUgKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBpc290b3BlLm9wdGlvbnNbIHRoaXMubmFtZXNwYWNlIF07XG4gICAgICB0aGlzLmVsZW1lbnQgPSBpc290b3BlLmVsZW1lbnQ7XG4gICAgICB0aGlzLml0ZW1zID0gaXNvdG9wZS5maWx0ZXJlZEl0ZW1zO1xuICAgICAgdGhpcy5zaXplID0gaXNvdG9wZS5zaXplO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm90byA9IExheW91dE1vZGUucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBzb21lIG1ldGhvZHMgc2hvdWxkIGp1c3QgZGVmZXIgdG8gZGVmYXVsdCBPdXRsYXllciBtZXRob2RcbiAgICogYW5kIHJlZmVyZW5jZSB0aGUgSXNvdG9wZSBpbnN0YW5jZSBhcyBgdGhpc2BcbiAgKiovXG4gIHZhciBmYWNhZGVNZXRob2RzID0gW1xuICAgICdfcmVzZXRMYXlvdXQnLFxuICAgICdfZ2V0SXRlbUxheW91dFBvc2l0aW9uJyxcbiAgICAnX21hbmFnZVN0YW1wJyxcbiAgICAnX2dldENvbnRhaW5lclNpemUnLFxuICAgICdfZ2V0RWxlbWVudE9mZnNldCcsXG4gICAgJ25lZWRzUmVzaXplTGF5b3V0JyxcbiAgICAnX2dldE9wdGlvbidcbiAgXTtcblxuICBmYWNhZGVNZXRob2RzLmZvckVhY2goIGZ1bmN0aW9uKCBtZXRob2ROYW1lICkge1xuICAgIHByb3RvWyBtZXRob2ROYW1lIF0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBPdXRsYXllci5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXS5hcHBseSggdGhpcy5pc290b3BlLCBhcmd1bWVudHMgKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyAtLS0tLSAgLS0tLS0gLy9cblxuICAvLyBmb3IgaG9yaXpvbnRhbCBsYXlvdXQgbW9kZXMsIGNoZWNrIHZlcnRpY2FsIHNpemVcbiAgcHJvdG8ubmVlZHNWZXJ0aWNhbFJlc2l6ZUxheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIGRvbid0IHRyaWdnZXIgaWYgc2l6ZSBkaWQgbm90IGNoYW5nZVxuICAgIHZhciBzaXplID0gZ2V0U2l6ZSggdGhpcy5pc290b3BlLmVsZW1lbnQgKTtcbiAgICAvLyBjaGVjayB0aGF0IHRoaXMuc2l6ZSBhbmQgc2l6ZSBhcmUgdGhlcmVcbiAgICAvLyBJRTggdHJpZ2dlcnMgcmVzaXplIG9uIGJvZHkgc2l6ZSBjaGFuZ2UsIHNvIHRoZXkgbWlnaHQgbm90IGJlXG4gICAgdmFyIGhhc1NpemVzID0gdGhpcy5pc290b3BlLnNpemUgJiYgc2l6ZTtcbiAgICByZXR1cm4gaGFzU2l6ZXMgJiYgc2l6ZS5pbm5lckhlaWdodCAhPSB0aGlzLmlzb3RvcGUuc2l6ZS5pbm5lckhlaWdodDtcbiAgfTtcblxuICAvLyAtLS0tLSBtZWFzdXJlbWVudHMgLS0tLS0gLy9cblxuICBwcm90by5fZ2V0TWVhc3VyZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlzb3RvcGUuX2dldE1lYXN1cmVtZW50LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgfTtcblxuICBwcm90by5nZXRDb2x1bW5XaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0U2VnbWVudFNpemUoICdjb2x1bW4nLCAnV2lkdGgnICk7XG4gIH07XG5cbiAgcHJvdG8uZ2V0Um93SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nZXRTZWdtZW50U2l6ZSggJ3JvdycsICdIZWlnaHQnICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGdldCBjb2x1bW5XaWR0aCBvciByb3dIZWlnaHRcbiAgICogc2VnbWVudDogJ2NvbHVtbicgb3IgJ3JvdydcbiAgICogc2l6ZSAnV2lkdGgnIG9yICdIZWlnaHQnXG4gICoqL1xuICBwcm90by5nZXRTZWdtZW50U2l6ZSA9IGZ1bmN0aW9uKCBzZWdtZW50LCBzaXplICkge1xuICAgIHZhciBzZWdtZW50TmFtZSA9IHNlZ21lbnQgKyBzaXplO1xuICAgIHZhciBvdXRlclNpemUgPSAnb3V0ZXInICsgc2l6ZTtcbiAgICAvLyBjb2x1bW5XaWR0aCAvIG91dGVyV2lkdGggLy8gcm93SGVpZ2h0IC8gb3V0ZXJIZWlnaHRcbiAgICB0aGlzLl9nZXRNZWFzdXJlbWVudCggc2VnbWVudE5hbWUsIG91dGVyU2l6ZSApO1xuICAgIC8vIGdvdCByb3dIZWlnaHQgb3IgY29sdW1uV2lkdGgsIHdlIGNhbiBjaGlsbFxuICAgIGlmICggdGhpc1sgc2VnbWVudE5hbWUgXSApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZmFsbCBiYWNrIHRvIGl0ZW0gb2YgZmlyc3QgZWxlbWVudFxuICAgIHZhciBmaXJzdEl0ZW1TaXplID0gdGhpcy5nZXRGaXJzdEl0ZW1TaXplKCk7XG4gICAgdGhpc1sgc2VnbWVudE5hbWUgXSA9IGZpcnN0SXRlbVNpemUgJiYgZmlyc3RJdGVtU2l6ZVsgb3V0ZXJTaXplIF0gfHxcbiAgICAgIC8vIG9yIHNpemUgb2YgY29udGFpbmVyXG4gICAgICB0aGlzLmlzb3RvcGUuc2l6ZVsgJ2lubmVyJyArIHNpemUgXTtcbiAgfTtcblxuICBwcm90by5nZXRGaXJzdEl0ZW1TaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZpcnN0SXRlbSA9IHRoaXMuaXNvdG9wZS5maWx0ZXJlZEl0ZW1zWzBdO1xuICAgIHJldHVybiBmaXJzdEl0ZW0gJiYgZmlyc3RJdGVtLmVsZW1lbnQgJiYgZ2V0U2l6ZSggZmlyc3RJdGVtLmVsZW1lbnQgKTtcbiAgfTtcblxuICAvLyAtLS0tLSBtZXRob2RzIHRoYXQgc2hvdWxkIHJlZmVyZW5jZSBpc290b3BlIC0tLS0tIC8vXG5cbiAgcHJvdG8ubGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pc290b3BlLmxheW91dC5hcHBseSggdGhpcy5pc290b3BlLCBhcmd1bWVudHMgKTtcbiAgfTtcblxuICBwcm90by5nZXRTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pc290b3BlLmdldFNpemUoKTtcbiAgICB0aGlzLnNpemUgPSB0aGlzLmlzb3RvcGUuc2l6ZTtcbiAgfTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjcmVhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICBMYXlvdXRNb2RlLm1vZGVzID0ge307XG5cbiAgTGF5b3V0TW9kZS5jcmVhdGUgPSBmdW5jdGlvbiggbmFtZXNwYWNlLCBvcHRpb25zICkge1xuXG4gICAgZnVuY3Rpb24gTW9kZSgpIHtcbiAgICAgIExheW91dE1vZGUuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgIH1cblxuICAgIE1vZGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggcHJvdG8gKTtcbiAgICBNb2RlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1vZGU7XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBpZiAoIG9wdGlvbnMgKSB7XG4gICAgICBNb2RlLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cblxuICAgIE1vZGUucHJvdG90eXBlLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICAvLyByZWdpc3RlciBpbiBJc290b3BlXG4gICAgTGF5b3V0TW9kZS5tb2Rlc1sgbmFtZXNwYWNlIF0gPSBNb2RlO1xuXG4gICAgcmV0dXJuIE1vZGU7XG4gIH07XG5cbiAgcmV0dXJuIExheW91dE1vZGU7XG5cbn0pKTtcblxuLyohXG4gKiBNYXNvbnJ5IHY0LjEuMFxuICogQ2FzY2FkaW5nIGdyaWQgbGF5b3V0IGxpYnJhcnlcbiAqIGh0dHA6Ly9tYXNvbnJ5LmRlc2FuZHJvLmNvbVxuICogTUlUIExpY2Vuc2VcbiAqIGJ5IERhdmlkIERlU2FuZHJvXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCAnbWFzb25yeS9tYXNvbnJ5JyxbXG4gICAgICAgICdvdXRsYXllci9vdXRsYXllcicsXG4gICAgICAgICdnZXQtc2l6ZS9nZXQtc2l6ZSdcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCdvdXRsYXllcicpLFxuICAgICAgcmVxdWlyZSgnZ2V0LXNpemUnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuTWFzb25yeSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3cuT3V0bGF5ZXIsXG4gICAgICB3aW5kb3cuZ2V0U2l6ZVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBPdXRsYXllciwgZ2V0U2l6ZSApIHtcblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hc29ucnlEZWZpbml0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLy8gY3JlYXRlIGFuIE91dGxheWVyIGxheW91dCBjbGFzc1xuICB2YXIgTWFzb25yeSA9IE91dGxheWVyLmNyZWF0ZSgnbWFzb25yeScpO1xuICAvLyBpc0ZpdFdpZHRoIC0+IGZpdFdpZHRoXG4gIE1hc29ucnkuY29tcGF0T3B0aW9ucy5maXRXaWR0aCA9ICdpc0ZpdFdpZHRoJztcblxuICBNYXNvbnJ5LnByb3RvdHlwZS5fcmVzZXRMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdldFNpemUoKTtcbiAgICB0aGlzLl9nZXRNZWFzdXJlbWVudCggJ2NvbHVtbldpZHRoJywgJ291dGVyV2lkdGgnICk7XG4gICAgdGhpcy5fZ2V0TWVhc3VyZW1lbnQoICdndXR0ZXInLCAnb3V0ZXJXaWR0aCcgKTtcbiAgICB0aGlzLm1lYXN1cmVDb2x1bW5zKCk7XG5cbiAgICAvLyByZXNldCBjb2x1bW4gWVxuICAgIHRoaXMuY29sWXMgPSBbXTtcbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5jb2xzOyBpKysgKSB7XG4gICAgICB0aGlzLmNvbFlzLnB1c2goIDAgKTtcbiAgICB9XG5cbiAgICB0aGlzLm1heFkgPSAwO1xuICB9O1xuXG4gIE1hc29ucnkucHJvdG90eXBlLm1lYXN1cmVDb2x1bW5zID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nZXRDb250YWluZXJXaWR0aCgpO1xuICAgIC8vIGlmIGNvbHVtbldpZHRoIGlzIDAsIGRlZmF1bHQgdG8gb3V0ZXJXaWR0aCBvZiBmaXJzdCBpdGVtXG4gICAgaWYgKCAhdGhpcy5jb2x1bW5XaWR0aCApIHtcbiAgICAgIHZhciBmaXJzdEl0ZW0gPSB0aGlzLml0ZW1zWzBdO1xuICAgICAgdmFyIGZpcnN0SXRlbUVsZW0gPSBmaXJzdEl0ZW0gJiYgZmlyc3RJdGVtLmVsZW1lbnQ7XG4gICAgICAvLyBjb2x1bW5XaWR0aCBmYWxsIGJhY2sgdG8gaXRlbSBvZiBmaXJzdCBlbGVtZW50XG4gICAgICB0aGlzLmNvbHVtbldpZHRoID0gZmlyc3RJdGVtRWxlbSAmJiBnZXRTaXplKCBmaXJzdEl0ZW1FbGVtICkub3V0ZXJXaWR0aCB8fFxuICAgICAgICAvLyBpZiBmaXJzdCBlbGVtIGhhcyBubyB3aWR0aCwgZGVmYXVsdCB0byBzaXplIG9mIGNvbnRhaW5lclxuICAgICAgICB0aGlzLmNvbnRhaW5lcldpZHRoO1xuICAgIH1cblxuICAgIHZhciBjb2x1bW5XaWR0aCA9IHRoaXMuY29sdW1uV2lkdGggKz0gdGhpcy5ndXR0ZXI7XG5cbiAgICAvLyBjYWxjdWxhdGUgY29sdW1uc1xuICAgIHZhciBjb250YWluZXJXaWR0aCA9IHRoaXMuY29udGFpbmVyV2lkdGggKyB0aGlzLmd1dHRlcjtcbiAgICB2YXIgY29scyA9IGNvbnRhaW5lcldpZHRoIC8gY29sdW1uV2lkdGg7XG4gICAgLy8gZml4IHJvdW5kaW5nIGVycm9ycywgdHlwaWNhbGx5IHdpdGggZ3V0dGVyc1xuICAgIHZhciBleGNlc3MgPSBjb2x1bW5XaWR0aCAtIGNvbnRhaW5lcldpZHRoICUgY29sdW1uV2lkdGg7XG4gICAgLy8gaWYgb3ZlcnNob290IGlzIGxlc3MgdGhhbiBhIHBpeGVsLCByb3VuZCB1cCwgb3RoZXJ3aXNlIGZsb29yIGl0XG4gICAgdmFyIG1hdGhNZXRob2QgPSBleGNlc3MgJiYgZXhjZXNzIDwgMSA/ICdyb3VuZCcgOiAnZmxvb3InO1xuICAgIGNvbHMgPSBNYXRoWyBtYXRoTWV0aG9kIF0oIGNvbHMgKTtcbiAgICB0aGlzLmNvbHMgPSBNYXRoLm1heCggY29scywgMSApO1xuICB9O1xuXG4gIE1hc29ucnkucHJvdG90eXBlLmdldENvbnRhaW5lcldpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gY29udGFpbmVyIGlzIHBhcmVudCBpZiBmaXQgd2lkdGhcbiAgICB2YXIgaXNGaXRXaWR0aCA9IHRoaXMuX2dldE9wdGlvbignZml0V2lkdGgnKTtcbiAgICB2YXIgY29udGFpbmVyID0gaXNGaXRXaWR0aCA/IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlIDogdGhpcy5lbGVtZW50O1xuICAgIC8vIGNoZWNrIHRoYXQgdGhpcy5zaXplIGFuZCBzaXplIGFyZSB0aGVyZVxuICAgIC8vIElFOCB0cmlnZ2VycyByZXNpemUgb24gYm9keSBzaXplIGNoYW5nZSwgc28gdGhleSBtaWdodCBub3QgYmVcbiAgICB2YXIgc2l6ZSA9IGdldFNpemUoIGNvbnRhaW5lciApO1xuICAgIHRoaXMuY29udGFpbmVyV2lkdGggPSBzaXplICYmIHNpemUuaW5uZXJXaWR0aDtcbiAgfTtcblxuICBNYXNvbnJ5LnByb3RvdHlwZS5fZ2V0SXRlbUxheW91dFBvc2l0aW9uID0gZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgaXRlbS5nZXRTaXplKCk7XG4gICAgLy8gaG93IG1hbnkgY29sdW1ucyBkb2VzIHRoaXMgYnJpY2sgc3BhblxuICAgIHZhciByZW1haW5kZXIgPSBpdGVtLnNpemUub3V0ZXJXaWR0aCAlIHRoaXMuY29sdW1uV2lkdGg7XG4gICAgdmFyIG1hdGhNZXRob2QgPSByZW1haW5kZXIgJiYgcmVtYWluZGVyIDwgMSA/ICdyb3VuZCcgOiAnY2VpbCc7XG4gICAgLy8gcm91bmQgaWYgb2ZmIGJ5IDEgcGl4ZWwsIG90aGVyd2lzZSB1c2UgY2VpbFxuICAgIHZhciBjb2xTcGFuID0gTWF0aFsgbWF0aE1ldGhvZCBdKCBpdGVtLnNpemUub3V0ZXJXaWR0aCAvIHRoaXMuY29sdW1uV2lkdGggKTtcbiAgICBjb2xTcGFuID0gTWF0aC5taW4oIGNvbFNwYW4sIHRoaXMuY29scyApO1xuXG4gICAgdmFyIGNvbEdyb3VwID0gdGhpcy5fZ2V0Q29sR3JvdXAoIGNvbFNwYW4gKTtcbiAgICAvLyBnZXQgdGhlIG1pbmltdW0gWSB2YWx1ZSBmcm9tIHRoZSBjb2x1bW5zXG4gICAgdmFyIG1pbmltdW1ZID0gTWF0aC5taW4uYXBwbHkoIE1hdGgsIGNvbEdyb3VwICk7XG4gICAgdmFyIHNob3J0Q29sSW5kZXggPSBjb2xHcm91cC5pbmRleE9mKCBtaW5pbXVtWSApO1xuXG4gICAgLy8gcG9zaXRpb24gdGhlIGJyaWNrXG4gICAgdmFyIHBvc2l0aW9uID0ge1xuICAgICAgeDogdGhpcy5jb2x1bW5XaWR0aCAqIHNob3J0Q29sSW5kZXgsXG4gICAgICB5OiBtaW5pbXVtWVxuICAgIH07XG5cbiAgICAvLyBhcHBseSBzZXRIZWlnaHQgdG8gbmVjZXNzYXJ5IGNvbHVtbnNcbiAgICB2YXIgc2V0SGVpZ2h0ID0gbWluaW11bVkgKyBpdGVtLnNpemUub3V0ZXJIZWlnaHQ7XG4gICAgdmFyIHNldFNwYW4gPSB0aGlzLmNvbHMgKyAxIC0gY29sR3JvdXAubGVuZ3RoO1xuICAgIGZvciAoIHZhciBpID0gMDsgaSA8IHNldFNwYW47IGkrKyApIHtcbiAgICAgIHRoaXMuY29sWXNbIHNob3J0Q29sSW5kZXggKyBpIF0gPSBzZXRIZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sU3BhbiAtIG51bWJlciBvZiBjb2x1bW5zIHRoZSBlbGVtZW50IHNwYW5zXG4gICAqIEByZXR1cm5zIHtBcnJheX0gY29sR3JvdXBcbiAgICovXG4gIE1hc29ucnkucHJvdG90eXBlLl9nZXRDb2xHcm91cCA9IGZ1bmN0aW9uKCBjb2xTcGFuICkge1xuICAgIGlmICggY29sU3BhbiA8IDIgKSB7XG4gICAgICAvLyBpZiBicmljayBzcGFucyBvbmx5IG9uZSBjb2x1bW4sIHVzZSBhbGwgdGhlIGNvbHVtbiBZc1xuICAgICAgcmV0dXJuIHRoaXMuY29sWXM7XG4gICAgfVxuXG4gICAgdmFyIGNvbEdyb3VwID0gW107XG4gICAgLy8gaG93IG1hbnkgZGlmZmVyZW50IHBsYWNlcyBjb3VsZCB0aGlzIGJyaWNrIGZpdCBob3Jpem9udGFsbHlcbiAgICB2YXIgZ3JvdXBDb3VudCA9IHRoaXMuY29scyArIDEgLSBjb2xTcGFuO1xuICAgIC8vIGZvciBlYWNoIGdyb3VwIHBvdGVudGlhbCBob3Jpem9udGFsIHBvc2l0aW9uXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgZ3JvdXBDb3VudDsgaSsrICkge1xuICAgICAgLy8gbWFrZSBhbiBhcnJheSBvZiBjb2xZIHZhbHVlcyBmb3IgdGhhdCBvbmUgZ3JvdXBcbiAgICAgIHZhciBncm91cENvbFlzID0gdGhpcy5jb2xZcy5zbGljZSggaSwgaSArIGNvbFNwYW4gKTtcbiAgICAgIC8vIGFuZCBnZXQgdGhlIG1heCB2YWx1ZSBvZiB0aGUgYXJyYXlcbiAgICAgIGNvbEdyb3VwW2ldID0gTWF0aC5tYXguYXBwbHkoIE1hdGgsIGdyb3VwQ29sWXMgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbEdyb3VwO1xuICB9O1xuXG4gIE1hc29ucnkucHJvdG90eXBlLl9tYW5hZ2VTdGFtcCA9IGZ1bmN0aW9uKCBzdGFtcCApIHtcbiAgICB2YXIgc3RhbXBTaXplID0gZ2V0U2l6ZSggc3RhbXAgKTtcbiAgICB2YXIgb2Zmc2V0ID0gdGhpcy5fZ2V0RWxlbWVudE9mZnNldCggc3RhbXAgKTtcbiAgICAvLyBnZXQgdGhlIGNvbHVtbnMgdGhhdCB0aGlzIHN0YW1wIGFmZmVjdHNcbiAgICB2YXIgaXNPcmlnaW5MZWZ0ID0gdGhpcy5fZ2V0T3B0aW9uKCdvcmlnaW5MZWZ0Jyk7XG4gICAgdmFyIGZpcnN0WCA9IGlzT3JpZ2luTGVmdCA/IG9mZnNldC5sZWZ0IDogb2Zmc2V0LnJpZ2h0O1xuICAgIHZhciBsYXN0WCA9IGZpcnN0WCArIHN0YW1wU2l6ZS5vdXRlcldpZHRoO1xuICAgIHZhciBmaXJzdENvbCA9IE1hdGguZmxvb3IoIGZpcnN0WCAvIHRoaXMuY29sdW1uV2lkdGggKTtcbiAgICBmaXJzdENvbCA9IE1hdGgubWF4KCAwLCBmaXJzdENvbCApO1xuICAgIHZhciBsYXN0Q29sID0gTWF0aC5mbG9vciggbGFzdFggLyB0aGlzLmNvbHVtbldpZHRoICk7XG4gICAgLy8gbGFzdENvbCBzaG91bGQgbm90IGdvIG92ZXIgaWYgbXVsdGlwbGUgb2YgY29sdW1uV2lkdGggIzQyNVxuICAgIGxhc3RDb2wgLT0gbGFzdFggJSB0aGlzLmNvbHVtbldpZHRoID8gMCA6IDE7XG4gICAgbGFzdENvbCA9IE1hdGgubWluKCB0aGlzLmNvbHMgLSAxLCBsYXN0Q29sICk7XG4gICAgLy8gc2V0IGNvbFlzIHRvIGJvdHRvbSBvZiB0aGUgc3RhbXBcblxuICAgIHZhciBpc09yaWdpblRvcCA9IHRoaXMuX2dldE9wdGlvbignb3JpZ2luVG9wJyk7XG4gICAgdmFyIHN0YW1wTWF4WSA9ICggaXNPcmlnaW5Ub3AgPyBvZmZzZXQudG9wIDogb2Zmc2V0LmJvdHRvbSApICtcbiAgICAgIHN0YW1wU2l6ZS5vdXRlckhlaWdodDtcbiAgICBmb3IgKCB2YXIgaSA9IGZpcnN0Q29sOyBpIDw9IGxhc3RDb2w7IGkrKyApIHtcbiAgICAgIHRoaXMuY29sWXNbaV0gPSBNYXRoLm1heCggc3RhbXBNYXhZLCB0aGlzLmNvbFlzW2ldICk7XG4gICAgfVxuICB9O1xuXG4gIE1hc29ucnkucHJvdG90eXBlLl9nZXRDb250YWluZXJTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tYXhZID0gTWF0aC5tYXguYXBwbHkoIE1hdGgsIHRoaXMuY29sWXMgKTtcbiAgICB2YXIgc2l6ZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5tYXhZXG4gICAgfTtcblxuICAgIGlmICggdGhpcy5fZ2V0T3B0aW9uKCdmaXRXaWR0aCcpICkge1xuICAgICAgc2l6ZS53aWR0aCA9IHRoaXMuX2dldENvbnRhaW5lckZpdFdpZHRoKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpemU7XG4gIH07XG5cbiAgTWFzb25yeS5wcm90b3R5cGUuX2dldENvbnRhaW5lckZpdFdpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHVudXNlZENvbHMgPSAwO1xuICAgIC8vIGNvdW50IHVudXNlZCBjb2x1bW5zXG4gICAgdmFyIGkgPSB0aGlzLmNvbHM7XG4gICAgd2hpbGUgKCAtLWkgKSB7XG4gICAgICBpZiAoIHRoaXMuY29sWXNbaV0gIT09IDAgKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdW51c2VkQ29scysrO1xuICAgIH1cbiAgICAvLyBmaXQgY29udGFpbmVyIHRvIGNvbHVtbnMgdGhhdCBoYXZlIGJlZW4gdXNlZFxuICAgIHJldHVybiAoIHRoaXMuY29scyAtIHVudXNlZENvbHMgKSAqIHRoaXMuY29sdW1uV2lkdGggLSB0aGlzLmd1dHRlcjtcbiAgfTtcblxuICBNYXNvbnJ5LnByb3RvdHlwZS5uZWVkc1Jlc2l6ZUxheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcmV2aW91c1dpZHRoID0gdGhpcy5jb250YWluZXJXaWR0aDtcbiAgICB0aGlzLmdldENvbnRhaW5lcldpZHRoKCk7XG4gICAgcmV0dXJuIHByZXZpb3VzV2lkdGggIT0gdGhpcy5jb250YWluZXJXaWR0aDtcbiAgfTtcblxuICByZXR1cm4gTWFzb25yeTtcblxufSkpO1xuXG4vKiFcbiAqIE1hc29ucnkgbGF5b3V0IG1vZGVcbiAqIHN1Yi1jbGFzc2VzIE1hc29ucnlcbiAqIGh0dHA6Ly9tYXNvbnJ5LmRlc2FuZHJvLmNvbVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggJ2lzb3RvcGUvanMvbGF5b3V0LW1vZGVzL21hc29ucnknLFtcbiAgICAgICAgJy4uL2xheW91dC1tb2RlJyxcbiAgICAgICAgJ21hc29ucnkvbWFzb25yeSdcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCcuLi9sYXlvdXQtbW9kZScpLFxuICAgICAgcmVxdWlyZSgnbWFzb25yeS1sYXlvdXQnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93Lklzb3RvcGUuTGF5b3V0TW9kZSxcbiAgICAgIHdpbmRvdy5NYXNvbnJ5XG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIExheW91dE1vZGUsIE1hc29ucnkgKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hc29ucnlEZWZpbml0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLy8gY3JlYXRlIGFuIE91dGxheWVyIGxheW91dCBjbGFzc1xuICB2YXIgTWFzb25yeU1vZGUgPSBMYXlvdXRNb2RlLmNyZWF0ZSgnbWFzb25yeScpO1xuXG4gIHZhciBwcm90byA9IE1hc29ucnlNb2RlLnByb3RvdHlwZTtcblxuICB2YXIga2VlcE1vZGVNZXRob2RzID0ge1xuICAgIF9nZXRFbGVtZW50T2Zmc2V0OiB0cnVlLFxuICAgIGxheW91dDogdHJ1ZSxcbiAgICBfZ2V0TWVhc3VyZW1lbnQ6IHRydWVcbiAgfTtcblxuICAvLyBpbmhlcml0IE1hc29ucnkgcHJvdG90eXBlXG4gIGZvciAoIHZhciBtZXRob2QgaW4gTWFzb25yeS5wcm90b3R5cGUgKSB7XG4gICAgLy8gZG8gbm90IGluaGVyaXQgbW9kZSBtZXRob2RzXG4gICAgaWYgKCAha2VlcE1vZGVNZXRob2RzWyBtZXRob2QgXSApIHtcbiAgICAgIHByb3RvWyBtZXRob2QgXSA9IE1hc29ucnkucHJvdG90eXBlWyBtZXRob2QgXTtcbiAgICB9XG4gIH1cblxuICB2YXIgbWVhc3VyZUNvbHVtbnMgPSBwcm90by5tZWFzdXJlQ29sdW1ucztcbiAgcHJvdG8ubWVhc3VyZUNvbHVtbnMgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBzZXQgaXRlbXMsIHVzZWQgaWYgbWVhc3VyaW5nIGZpcnN0IGl0ZW1cbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pc290b3BlLmZpbHRlcmVkSXRlbXM7XG4gICAgbWVhc3VyZUNvbHVtbnMuY2FsbCggdGhpcyApO1xuICB9O1xuXG4gIC8vIHBvaW50IHRvIG1vZGUgb3B0aW9ucyBmb3IgZml0V2lkdGhcbiAgdmFyIF9nZXRPcHRpb24gPSBwcm90by5fZ2V0T3B0aW9uO1xuICBwcm90by5fZ2V0T3B0aW9uID0gZnVuY3Rpb24oIG9wdGlvbiApIHtcbiAgICBpZiAoIG9wdGlvbiA9PSAnZml0V2lkdGgnICkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0ZpdFdpZHRoICE9PSB1bmRlZmluZWQgP1xuICAgICAgICB0aGlzLm9wdGlvbnMuaXNGaXRXaWR0aCA6IHRoaXMub3B0aW9ucy5maXRXaWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIF9nZXRPcHRpb24uYXBwbHkoIHRoaXMuaXNvdG9wZSwgYXJndW1lbnRzICk7XG4gIH07XG5cbiAgcmV0dXJuIE1hc29ucnlNb2RlO1xuXG59KSk7XG5cbi8qKlxuICogZml0Um93cyBsYXlvdXQgbW9kZVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggJ2lzb3RvcGUvanMvbGF5b3V0LW1vZGVzL2ZpdC1yb3dzJyxbXG4gICAgICAgICcuLi9sYXlvdXQtbW9kZSdcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnLi4vbGF5b3V0LW1vZGUnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93Lklzb3RvcGUuTGF5b3V0TW9kZVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBMYXlvdXRNb2RlICkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRml0Um93cyA9IExheW91dE1vZGUuY3JlYXRlKCdmaXRSb3dzJyk7XG5cbnZhciBwcm90byA9IEZpdFJvd3MucHJvdG90eXBlO1xuXG5wcm90by5fcmVzZXRMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy54ID0gMDtcbiAgdGhpcy55ID0gMDtcbiAgdGhpcy5tYXhZID0gMDtcbiAgdGhpcy5fZ2V0TWVhc3VyZW1lbnQoICdndXR0ZXInLCAnb3V0ZXJXaWR0aCcgKTtcbn07XG5cbnByb3RvLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24gPSBmdW5jdGlvbiggaXRlbSApIHtcbiAgaXRlbS5nZXRTaXplKCk7XG5cbiAgdmFyIGl0ZW1XaWR0aCA9IGl0ZW0uc2l6ZS5vdXRlcldpZHRoICsgdGhpcy5ndXR0ZXI7XG4gIC8vIGlmIHRoaXMgZWxlbWVudCBjYW5ub3QgZml0IGluIHRoZSBjdXJyZW50IHJvd1xuICB2YXIgY29udGFpbmVyV2lkdGggPSB0aGlzLmlzb3RvcGUuc2l6ZS5pbm5lcldpZHRoICsgdGhpcy5ndXR0ZXI7XG4gIGlmICggdGhpcy54ICE9PSAwICYmIGl0ZW1XaWR0aCArIHRoaXMueCA+IGNvbnRhaW5lcldpZHRoICkge1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gdGhpcy5tYXhZO1xuICB9XG5cbiAgdmFyIHBvc2l0aW9uID0ge1xuICAgIHg6IHRoaXMueCxcbiAgICB5OiB0aGlzLnlcbiAgfTtcblxuICB0aGlzLm1heFkgPSBNYXRoLm1heCggdGhpcy5tYXhZLCB0aGlzLnkgKyBpdGVtLnNpemUub3V0ZXJIZWlnaHQgKTtcbiAgdGhpcy54ICs9IGl0ZW1XaWR0aDtcblxuICByZXR1cm4gcG9zaXRpb247XG59O1xuXG5wcm90by5fZ2V0Q29udGFpbmVyU2l6ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4geyBoZWlnaHQ6IHRoaXMubWF4WSB9O1xufTtcblxucmV0dXJuIEZpdFJvd3M7XG5cbn0pKTtcblxuLyoqXG4gKiB2ZXJ0aWNhbCBsYXlvdXQgbW9kZVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggJ2lzb3RvcGUvanMvbGF5b3V0LW1vZGVzL3ZlcnRpY2FsJyxbXG4gICAgICAgICcuLi9sYXlvdXQtbW9kZSdcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCcuLi9sYXlvdXQtbW9kZScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICB3aW5kb3cuSXNvdG9wZS5MYXlvdXRNb2RlXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIExheW91dE1vZGUgKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBWZXJ0aWNhbCA9IExheW91dE1vZGUuY3JlYXRlKCAndmVydGljYWwnLCB7XG4gIGhvcml6b250YWxBbGlnbm1lbnQ6IDBcbn0pO1xuXG52YXIgcHJvdG8gPSBWZXJ0aWNhbC5wcm90b3R5cGU7XG5cbnByb3RvLl9yZXNldExheW91dCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnkgPSAwO1xufTtcblxucHJvdG8uX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCBpdGVtICkge1xuICBpdGVtLmdldFNpemUoKTtcbiAgdmFyIHggPSAoIHRoaXMuaXNvdG9wZS5zaXplLmlubmVyV2lkdGggLSBpdGVtLnNpemUub3V0ZXJXaWR0aCApICpcbiAgICB0aGlzLm9wdGlvbnMuaG9yaXpvbnRhbEFsaWdubWVudDtcbiAgdmFyIHkgPSB0aGlzLnk7XG4gIHRoaXMueSArPSBpdGVtLnNpemUub3V0ZXJIZWlnaHQ7XG4gIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcbn07XG5cbnByb3RvLl9nZXRDb250YWluZXJTaXplID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7IGhlaWdodDogdGhpcy55IH07XG59O1xuXG5yZXR1cm4gVmVydGljYWw7XG5cbn0pKTtcblxuLyohXG4gKiBJc290b3BlIHYzLjAuMVxuICpcbiAqIExpY2Vuc2VkIEdQTHYzIGZvciBvcGVuIHNvdXJjZSB1c2VcbiAqIG9yIElzb3RvcGUgQ29tbWVyY2lhbCBMaWNlbnNlIGZvciBjb21tZXJjaWFsIHVzZVxuICpcbiAqIGh0dHA6Ly9pc290b3BlLm1ldGFmaXp6eS5jb1xuICogQ29weXJpZ2h0IDIwMTYgTWV0YWZpenp5XG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICdvdXRsYXllci9vdXRsYXllcicsXG4gICAgICAgICdnZXQtc2l6ZS9nZXQtc2l6ZScsXG4gICAgICAgICdkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3InLFxuICAgICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnLFxuICAgICAgICAnaXNvdG9wZS9qcy9pdGVtJyxcbiAgICAgICAgJ2lzb3RvcGUvanMvbGF5b3V0LW1vZGUnLFxuICAgICAgICAvLyBpbmNsdWRlIGRlZmF1bHQgbGF5b3V0IG1vZGVzXG4gICAgICAgICdpc290b3BlL2pzL2xheW91dC1tb2Rlcy9tYXNvbnJ5JyxcbiAgICAgICAgJ2lzb3RvcGUvanMvbGF5b3V0LW1vZGVzL2ZpdC1yb3dzJyxcbiAgICAgICAgJ2lzb3RvcGUvanMvbGF5b3V0LW1vZGVzL3ZlcnRpY2FsJ1xuICAgICAgXSxcbiAgICAgIGZ1bmN0aW9uKCBPdXRsYXllciwgZ2V0U2l6ZSwgbWF0Y2hlc1NlbGVjdG9yLCB1dGlscywgSXRlbSwgTGF5b3V0TW9kZSApIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgT3V0bGF5ZXIsIGdldFNpemUsIG1hdGNoZXNTZWxlY3RvciwgdXRpbHMsIEl0ZW0sIExheW91dE1vZGUgKTtcbiAgICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnb3V0bGF5ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJyksXG4gICAgICByZXF1aXJlKCdkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yJyksXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICAgcmVxdWlyZSgnaXNvdG9wZS9qcy9pdGVtJyksXG4gICAgICByZXF1aXJlKCdpc290b3BlL2pzL2xheW91dC1tb2RlJyksXG4gICAgICAvLyBpbmNsdWRlIGRlZmF1bHQgbGF5b3V0IG1vZGVzXG4gICAgICByZXF1aXJlKCdpc290b3BlL2pzL2xheW91dC1tb2Rlcy9tYXNvbnJ5JyksXG4gICAgICByZXF1aXJlKCdpc290b3BlL2pzL2xheW91dC1tb2Rlcy9maXQtcm93cycpLFxuICAgICAgcmVxdWlyZSgnaXNvdG9wZS9qcy9sYXlvdXQtbW9kZXMvdmVydGljYWwnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuSXNvdG9wZSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuT3V0bGF5ZXIsXG4gICAgICB3aW5kb3cuZ2V0U2l6ZSxcbiAgICAgIHdpbmRvdy5tYXRjaGVzU2VsZWN0b3IsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICAgd2luZG93Lklzb3RvcGUuSXRlbSxcbiAgICAgIHdpbmRvdy5Jc290b3BlLkxheW91dE1vZGVcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBPdXRsYXllciwgZ2V0U2l6ZSwgbWF0Y2hlc1NlbGVjdG9yLCB1dGlscyxcbiAgSXRlbSwgTGF5b3V0TW9kZSApIHtcblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHZhcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIGpRdWVyeSA9IHdpbmRvdy5qUXVlcnk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIHRyaW0gPSBTdHJpbmcucHJvdG90eXBlLnRyaW0gP1xuICBmdW5jdGlvbiggc3RyICkge1xuICAgIHJldHVybiBzdHIudHJpbSgpO1xuICB9IDpcbiAgZnVuY3Rpb24oIHN0ciApIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoIC9eXFxzK3xcXHMrJC9nLCAnJyApO1xuICB9O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBpc290b3BlRGVmaW5pdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIC8vIGNyZWF0ZSBhbiBPdXRsYXllciBsYXlvdXQgY2xhc3NcbiAgdmFyIElzb3RvcGUgPSBPdXRsYXllci5jcmVhdGUoICdpc290b3BlJywge1xuICAgIGxheW91dE1vZGU6ICdtYXNvbnJ5JyxcbiAgICBpc0pRdWVyeUZpbHRlcmluZzogdHJ1ZSxcbiAgICBzb3J0QXNjZW5kaW5nOiB0cnVlXG4gIH0pO1xuXG4gIElzb3RvcGUuSXRlbSA9IEl0ZW07XG4gIElzb3RvcGUuTGF5b3V0TW9kZSA9IExheW91dE1vZGU7XG5cbiAgdmFyIHByb3RvID0gSXNvdG9wZS5wcm90b3R5cGU7XG5cbiAgcHJvdG8uX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXRlbUdVSUQgPSAwO1xuICAgIC8vIGZ1bmN0aW9ucyB0aGF0IHNvcnQgaXRlbXNcbiAgICB0aGlzLl9zb3J0ZXJzID0ge307XG4gICAgdGhpcy5fZ2V0U29ydGVycygpO1xuICAgIC8vIGNhbGwgc3VwZXJcbiAgICBPdXRsYXllci5wcm90b3R5cGUuX2NyZWF0ZS5jYWxsKCB0aGlzICk7XG5cbiAgICAvLyBjcmVhdGUgbGF5b3V0IG1vZGVzXG4gICAgdGhpcy5tb2RlcyA9IHt9O1xuICAgIC8vIHN0YXJ0IGZpbHRlcmVkSXRlbXMgd2l0aCBhbGwgaXRlbXNcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIC8vIGtlZXAgb2YgdHJhY2sgb2Ygc29ydEJ5c1xuICAgIHRoaXMuc29ydEhpc3RvcnkgPSBbICdvcmlnaW5hbC1vcmRlcicgXTtcbiAgICAvLyBjcmVhdGUgZnJvbSByZWdpc3RlcmVkIGxheW91dCBtb2Rlc1xuICAgIGZvciAoIHZhciBuYW1lIGluIExheW91dE1vZGUubW9kZXMgKSB7XG4gICAgICB0aGlzLl9pbml0TGF5b3V0TW9kZSggbmFtZSApO1xuICAgIH1cbiAgfTtcblxuICBwcm90by5yZWxvYWRJdGVtcyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHJlc2V0IGl0ZW0gSUQgY291bnRlclxuICAgIHRoaXMuaXRlbUdVSUQgPSAwO1xuICAgIC8vIGNhbGwgc3VwZXJcbiAgICBPdXRsYXllci5wcm90b3R5cGUucmVsb2FkSXRlbXMuY2FsbCggdGhpcyApO1xuICB9O1xuXG4gIHByb3RvLl9pdGVtaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gT3V0bGF5ZXIucHJvdG90eXBlLl9pdGVtaXplLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICAvLyBhc3NpZ24gSUQgZm9yIG9yaWdpbmFsLW9yZGVyXG4gICAgZm9yICggdmFyIGk9MDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrICkge1xuICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgIGl0ZW0uaWQgPSB0aGlzLml0ZW1HVUlEKys7XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZUl0ZW1zU29ydERhdGEoIGl0ZW1zICk7XG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9O1xuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbGF5b3V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgcHJvdG8uX2luaXRMYXlvdXRNb2RlID0gZnVuY3Rpb24oIG5hbWUgKSB7XG4gICAgdmFyIE1vZGUgPSBMYXlvdXRNb2RlLm1vZGVzWyBuYW1lIF07XG4gICAgLy8gc2V0IG1vZGUgb3B0aW9uc1xuICAgIC8vIEhBQ0sgZXh0ZW5kIGluaXRpYWwgb3B0aW9ucywgYmFjay1maWxsIGluIGRlZmF1bHQgb3B0aW9uc1xuICAgIHZhciBpbml0aWFsT3B0cyA9IHRoaXMub3B0aW9uc1sgbmFtZSBdIHx8IHt9O1xuICAgIHRoaXMub3B0aW9uc1sgbmFtZSBdID0gTW9kZS5vcHRpb25zID9cbiAgICAgIHV0aWxzLmV4dGVuZCggTW9kZS5vcHRpb25zLCBpbml0aWFsT3B0cyApIDogaW5pdGlhbE9wdHM7XG4gICAgLy8gaW5pdCBsYXlvdXQgbW9kZSBpbnN0YW5jZVxuICAgIHRoaXMubW9kZXNbIG5hbWUgXSA9IG5ldyBNb2RlKCB0aGlzICk7XG4gIH07XG5cblxuICBwcm90by5sYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBpZiBmaXJzdCB0aW1lIGRvaW5nIGxheW91dCwgZG8gYWxsIG1hZ2ljXG4gICAgaWYgKCAhdGhpcy5faXNMYXlvdXRJbml0ZWQgJiYgdGhpcy5fZ2V0T3B0aW9uKCdpbml0TGF5b3V0JykgKSB7XG4gICAgICB0aGlzLmFycmFuZ2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbGF5b3V0KCk7XG4gIH07XG5cbiAgLy8gcHJpdmF0ZSBtZXRob2QgdG8gYmUgdXNlZCBpbiBsYXlvdXQoKSAmIG1hZ2ljKClcbiAgcHJvdG8uX2xheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIGRvbid0IGFuaW1hdGUgZmlyc3QgbGF5b3V0XG4gICAgdmFyIGlzSW5zdGFudCA9IHRoaXMuX2dldElzSW5zdGFudCgpO1xuICAgIC8vIGxheW91dCBmbG93XG4gICAgdGhpcy5fcmVzZXRMYXlvdXQoKTtcbiAgICB0aGlzLl9tYW5hZ2VTdGFtcHMoKTtcbiAgICB0aGlzLmxheW91dEl0ZW1zKCB0aGlzLmZpbHRlcmVkSXRlbXMsIGlzSW5zdGFudCApO1xuXG4gICAgLy8gZmxhZyBmb3IgaW5pdGFsaXplZFxuICAgIHRoaXMuX2lzTGF5b3V0SW5pdGVkID0gdHJ1ZTtcbiAgfTtcblxuICAvLyBmaWx0ZXIgKyBzb3J0ICsgbGF5b3V0XG4gIHByb3RvLmFycmFuZ2UgPSBmdW5jdGlvbiggb3B0cyApIHtcbiAgICAvLyBzZXQgYW55IG9wdGlvbnMgcGFzc1xuICAgIHRoaXMub3B0aW9uKCBvcHRzICk7XG4gICAgdGhpcy5fZ2V0SXNJbnN0YW50KCk7XG4gICAgLy8gZmlsdGVyLCBzb3J0LCBhbmQgbGF5b3V0XG5cbiAgICAvLyBmaWx0ZXJcbiAgICB2YXIgZmlsdGVyZWQgPSB0aGlzLl9maWx0ZXIoIHRoaXMuaXRlbXMgKTtcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBmaWx0ZXJlZC5tYXRjaGVzO1xuXG4gICAgdGhpcy5fYmluZEFycmFuZ2VDb21wbGV0ZSgpO1xuXG4gICAgaWYgKCB0aGlzLl9pc0luc3RhbnQgKSB7XG4gICAgICB0aGlzLl9ub1RyYW5zaXRpb24oIHRoaXMuX2hpZGVSZXZlYWwsIFsgZmlsdGVyZWQgXSApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlUmV2ZWFsKCBmaWx0ZXJlZCApO1xuICAgIH1cblxuICAgIHRoaXMuX3NvcnQoKTtcbiAgICB0aGlzLl9sYXlvdXQoKTtcbiAgfTtcbiAgLy8gYWxpYXMgdG8gX2luaXQgZm9yIG1haW4gcGx1Z2luIG1ldGhvZFxuICBwcm90by5faW5pdCA9IHByb3RvLmFycmFuZ2U7XG5cbiAgcHJvdG8uX2hpZGVSZXZlYWwgPSBmdW5jdGlvbiggZmlsdGVyZWQgKSB7XG4gICAgdGhpcy5yZXZlYWwoIGZpbHRlcmVkLm5lZWRSZXZlYWwgKTtcbiAgICB0aGlzLmhpZGUoIGZpbHRlcmVkLm5lZWRIaWRlICk7XG4gIH07XG5cbiAgLy8gSEFDS1xuICAvLyBEb24ndCBhbmltYXRlL3RyYW5zaXRpb24gZmlyc3QgbGF5b3V0XG4gIC8vIE9yIGRvbid0IGFuaW1hdGUvdHJhbnNpdGlvbiBvdGhlciBsYXlvdXRzXG4gIHByb3RvLl9nZXRJc0luc3RhbnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXNMYXlvdXRJbnN0YW50ID0gdGhpcy5fZ2V0T3B0aW9uKCdsYXlvdXRJbnN0YW50Jyk7XG4gICAgdmFyIGlzSW5zdGFudCA9IGlzTGF5b3V0SW5zdGFudCAhPT0gdW5kZWZpbmVkID8gaXNMYXlvdXRJbnN0YW50IDpcbiAgICAgICF0aGlzLl9pc0xheW91dEluaXRlZDtcbiAgICB0aGlzLl9pc0luc3RhbnQgPSBpc0luc3RhbnQ7XG4gICAgcmV0dXJuIGlzSW5zdGFudDtcbiAgfTtcblxuICAvLyBsaXN0ZW4gZm9yIGxheW91dENvbXBsZXRlLCBoaWRlQ29tcGxldGUgYW5kIHJldmVhbENvbXBsZXRlXG4gIC8vIHRvIHRyaWdnZXIgYXJyYW5nZUNvbXBsZXRlXG4gIHByb3RvLl9iaW5kQXJyYW5nZUNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gbGlzdGVuIGZvciAzIGV2ZW50cyB0byB0cmlnZ2VyIGFycmFuZ2VDb21wbGV0ZVxuICAgIHZhciBpc0xheW91dENvbXBsZXRlLCBpc0hpZGVDb21wbGV0ZSwgaXNSZXZlYWxDb21wbGV0ZTtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGFycmFuZ2VQYXJhbGxlbENhbGxiYWNrKCkge1xuICAgICAgaWYgKCBpc0xheW91dENvbXBsZXRlICYmIGlzSGlkZUNvbXBsZXRlICYmIGlzUmV2ZWFsQ29tcGxldGUgKSB7XG4gICAgICAgIF90aGlzLmRpc3BhdGNoRXZlbnQoICdhcnJhbmdlQ29tcGxldGUnLCBudWxsLCBbIF90aGlzLmZpbHRlcmVkSXRlbXMgXSApO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9uY2UoICdsYXlvdXRDb21wbGV0ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgaXNMYXlvdXRDb21wbGV0ZSA9IHRydWU7XG4gICAgICBhcnJhbmdlUGFyYWxsZWxDYWxsYmFjaygpO1xuICAgIH0pO1xuICAgIHRoaXMub25jZSggJ2hpZGVDb21wbGV0ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgaXNIaWRlQ29tcGxldGUgPSB0cnVlO1xuICAgICAgYXJyYW5nZVBhcmFsbGVsQ2FsbGJhY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLm9uY2UoICdyZXZlYWxDb21wbGV0ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgaXNSZXZlYWxDb21wbGV0ZSA9IHRydWU7XG4gICAgICBhcnJhbmdlUGFyYWxsZWxDYWxsYmFjaygpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZpbHRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIHByb3RvLl9maWx0ZXIgPSBmdW5jdGlvbiggaXRlbXMgKSB7XG4gICAgdmFyIGZpbHRlciA9IHRoaXMub3B0aW9ucy5maWx0ZXI7XG4gICAgZmlsdGVyID0gZmlsdGVyIHx8ICcqJztcbiAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuICAgIHZhciBoaWRkZW5NYXRjaGVkID0gW107XG4gICAgdmFyIHZpc2libGVVbm1hdGNoZWQgPSBbXTtcblxuICAgIHZhciB0ZXN0ID0gdGhpcy5fZ2V0RmlsdGVyVGVzdCggZmlsdGVyICk7XG5cbiAgICAvLyB0ZXN0IGVhY2ggaXRlbVxuICAgIGZvciAoIHZhciBpPTA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XG4gICAgICBpZiAoIGl0ZW0uaXNJZ25vcmVkICkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIC8vIGFkZCBpdGVtIHRvIGVpdGhlciBtYXRjaGVkIG9yIHVubWF0Y2hlZCBncm91cFxuICAgICAgdmFyIGlzTWF0Y2hlZCA9IHRlc3QoIGl0ZW0gKTtcbiAgICAgIC8vIGl0ZW0uaXNGaWx0ZXJNYXRjaGVkID0gaXNNYXRjaGVkO1xuICAgICAgLy8gYWRkIHRvIG1hdGNoZXMgaWYgaXRzIGEgbWF0Y2hcbiAgICAgIGlmICggaXNNYXRjaGVkICkge1xuICAgICAgICBtYXRjaGVzLnB1c2goIGl0ZW0gKTtcbiAgICAgIH1cbiAgICAgIC8vIGFkZCB0byBhZGRpdGlvbmFsIGdyb3VwIGlmIGl0ZW0gbmVlZHMgdG8gYmUgaGlkZGVuIG9yIHJldmVhbGVkXG4gICAgICBpZiAoIGlzTWF0Y2hlZCAmJiBpdGVtLmlzSGlkZGVuICkge1xuICAgICAgICBoaWRkZW5NYXRjaGVkLnB1c2goIGl0ZW0gKTtcbiAgICAgIH0gZWxzZSBpZiAoICFpc01hdGNoZWQgJiYgIWl0ZW0uaXNIaWRkZW4gKSB7XG4gICAgICAgIHZpc2libGVVbm1hdGNoZWQucHVzaCggaXRlbSApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybiBjb2xsZWN0aW9ucyBvZiBpdGVtcyB0byBiZSBtYW5pcHVsYXRlZFxuICAgIHJldHVybiB7XG4gICAgICBtYXRjaGVzOiBtYXRjaGVzLFxuICAgICAgbmVlZFJldmVhbDogaGlkZGVuTWF0Y2hlZCxcbiAgICAgIG5lZWRIaWRlOiB2aXNpYmxlVW5tYXRjaGVkXG4gICAgfTtcbiAgfTtcblxuICAvLyBnZXQgYSBqUXVlcnksIGZ1bmN0aW9uLCBvciBhIG1hdGNoZXNTZWxlY3RvciB0ZXN0IGdpdmVuIHRoZSBmaWx0ZXJcbiAgcHJvdG8uX2dldEZpbHRlclRlc3QgPSBmdW5jdGlvbiggZmlsdGVyICkge1xuICAgIGlmICggalF1ZXJ5ICYmIHRoaXMub3B0aW9ucy5pc0pRdWVyeUZpbHRlcmluZyApIHtcbiAgICAgIC8vIHVzZSBqUXVlcnlcbiAgICAgIHJldHVybiBmdW5jdGlvbiggaXRlbSApIHtcbiAgICAgICAgcmV0dXJuIGpRdWVyeSggaXRlbS5lbGVtZW50ICkuaXMoIGZpbHRlciApO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCB0eXBlb2YgZmlsdGVyID09ICdmdW5jdGlvbicgKSB7XG4gICAgICAvLyB1c2UgZmlsdGVyIGFzIGZ1bmN0aW9uXG4gICAgICByZXR1cm4gZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgICAgIHJldHVybiBmaWx0ZXIoIGl0ZW0uZWxlbWVudCApO1xuICAgICAgfTtcbiAgICB9XG4gICAgLy8gZGVmYXVsdCwgdXNlIGZpbHRlciBhcyBzZWxlY3RvciBzdHJpbmdcbiAgICByZXR1cm4gZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlc1NlbGVjdG9yKCBpdGVtLmVsZW1lbnQsIGZpbHRlciApO1xuICAgIH07XG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc29ydGluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIC8qKlxuICAgKiBAcGFyYW1zIHtBcnJheX0gZWxlbXNcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcHJvdG8udXBkYXRlU29ydERhdGEgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gICAgLy8gZ2V0IGl0ZW1zXG4gICAgdmFyIGl0ZW1zO1xuICAgIGlmICggZWxlbXMgKSB7XG4gICAgICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgICAgIGl0ZW1zID0gdGhpcy5nZXRJdGVtcyggZWxlbXMgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdXBkYXRlIGFsbCBpdGVtcyBpZiBubyBlbGVtcyBwcm92aWRlZFxuICAgICAgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIHRoaXMuX2dldFNvcnRlcnMoKTtcbiAgICB0aGlzLl91cGRhdGVJdGVtc1NvcnREYXRhKCBpdGVtcyApO1xuICB9O1xuXG4gIHByb3RvLl9nZXRTb3J0ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGdldFNvcnREYXRhID0gdGhpcy5vcHRpb25zLmdldFNvcnREYXRhO1xuICAgIGZvciAoIHZhciBrZXkgaW4gZ2V0U29ydERhdGEgKSB7XG4gICAgICB2YXIgc29ydGVyID0gZ2V0U29ydERhdGFbIGtleSBdO1xuICAgICAgdGhpcy5fc29ydGVyc1sga2V5IF0gPSBtdW5nZVNvcnRlciggc29ydGVyICk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW1zIHtBcnJheX0gaXRlbXMgLSBvZiBJc290b3BlLkl0ZW1zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcm90by5fdXBkYXRlSXRlbXNTb3J0RGF0YSA9IGZ1bmN0aW9uKCBpdGVtcyApIHtcbiAgICAvLyBkbyBub3QgdXBkYXRlIGlmIG5vIGl0ZW1zXG4gICAgdmFyIGxlbiA9IGl0ZW1zICYmIGl0ZW1zLmxlbmd0aDtcblxuICAgIGZvciAoIHZhciBpPTA7IGxlbiAmJiBpIDwgbGVuOyBpKysgKSB7XG4gICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgaXRlbS51cGRhdGVTb3J0RGF0YSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyAtLS0tLSBtdW5nZSBzb3J0ZXIgLS0tLS0gLy9cblxuICAvLyBlbmNhcHN1bGF0ZSB0aGlzLCBhcyB3ZSBqdXN0IG5lZWQgbXVuZ2VTb3J0ZXJcbiAgLy8gb3RoZXIgZnVuY3Rpb25zIGluIGhlcmUgYXJlIGp1c3QgZm9yIG11bmdpbmdcbiAgdmFyIG11bmdlU29ydGVyID0gKCBmdW5jdGlvbigpIHtcbiAgICAvLyBhZGQgYSBtYWdpYyBsYXllciB0byBzb3J0ZXJzIGZvciBjb252aWVuZW50IHNob3J0aGFuZHNcbiAgICAvLyBgLmZvby1iYXJgIHdpbGwgdXNlIHRoZSB0ZXh0IG9mIC5mb28tYmFyIHF1ZXJ5U2VsZWN0b3JcbiAgICAvLyBgW2Zvby1iYXJdYCB3aWxsIHVzZSBhdHRyaWJ1dGVcbiAgICAvLyB5b3UgY2FuIGFsc28gYWRkIHBhcnNlclxuICAgIC8vIGAuZm9vLWJhciBwYXJzZUludGAgd2lsbCBwYXJzZSB0aGF0IGFzIGEgbnVtYmVyXG4gICAgZnVuY3Rpb24gbXVuZ2VTb3J0ZXIoIHNvcnRlciApIHtcbiAgICAgIC8vIGlmIG5vdCBhIHN0cmluZywgcmV0dXJuIGZ1bmN0aW9uIG9yIHdoYXRldmVyIGl0IGlzXG4gICAgICBpZiAoIHR5cGVvZiBzb3J0ZXIgIT0gJ3N0cmluZycgKSB7XG4gICAgICAgIHJldHVybiBzb3J0ZXI7XG4gICAgICB9XG4gICAgICAvLyBwYXJzZSB0aGUgc29ydGVyIHN0cmluZ1xuICAgICAgdmFyIGFyZ3MgPSB0cmltKCBzb3J0ZXIgKS5zcGxpdCgnICcpO1xuICAgICAgdmFyIHF1ZXJ5ID0gYXJnc1swXTtcbiAgICAgIC8vIGNoZWNrIGlmIHF1ZXJ5IGxvb2tzIGxpa2UgW2FuLWF0dHJpYnV0ZV1cbiAgICAgIHZhciBhdHRyTWF0Y2ggPSBxdWVyeS5tYXRjaCggL15cXFsoLispXFxdJC8gKTtcbiAgICAgIHZhciBhdHRyID0gYXR0ck1hdGNoICYmIGF0dHJNYXRjaFsxXTtcbiAgICAgIHZhciBnZXRWYWx1ZSA9IGdldFZhbHVlR2V0dGVyKCBhdHRyLCBxdWVyeSApO1xuICAgICAgLy8gdXNlIHNlY29uZCBhcmd1bWVudCBhcyBhIHBhcnNlclxuICAgICAgdmFyIHBhcnNlciA9IElzb3RvcGUuc29ydERhdGFQYXJzZXJzWyBhcmdzWzFdIF07XG4gICAgICAvLyBwYXJzZSB0aGUgdmFsdWUsIGlmIHRoZXJlIHdhcyBhIHBhcnNlclxuICAgICAgc29ydGVyID0gcGFyc2VyID8gZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgIHJldHVybiBlbGVtICYmIHBhcnNlciggZ2V0VmFsdWUoIGVsZW0gKSApO1xuICAgICAgfSA6XG4gICAgICAvLyBvdGhlcndpc2UganVzdCByZXR1cm4gdmFsdWVcbiAgICAgIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICByZXR1cm4gZWxlbSAmJiBnZXRWYWx1ZSggZWxlbSApO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHNvcnRlcjtcbiAgICB9XG5cbiAgICAvLyBnZXQgYW4gYXR0cmlidXRlIGdldHRlciwgb3IgZ2V0IHRleHQgb2YgdGhlIHF1ZXJ5U2VsZWN0b3JcbiAgICBmdW5jdGlvbiBnZXRWYWx1ZUdldHRlciggYXR0ciwgcXVlcnkgKSB7XG4gICAgICAvLyBpZiBxdWVyeSBsb29rcyBsaWtlIFtmb28tYmFyXSwgZ2V0IGF0dHJpYnV0ZVxuICAgICAgaWYgKCBhdHRyICkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZ2V0QXR0cmlidXRlKCBlbGVtICkge1xuICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSggYXR0ciApO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyBvdGhlcndpc2UsIGFzc3VtZSBpdHMgYSBxdWVyeVNlbGVjdG9yLCBhbmQgZ2V0IGl0cyB0ZXh0XG4gICAgICByZXR1cm4gZnVuY3Rpb24gZ2V0Q2hpbGRUZXh0KCBlbGVtICkge1xuICAgICAgICB2YXIgY2hpbGQgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoIHF1ZXJ5ICk7XG4gICAgICAgIHJldHVybiBjaGlsZCAmJiBjaGlsZC50ZXh0Q29udGVudDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG11bmdlU29ydGVyO1xuICB9KSgpO1xuXG4gIC8vIHBhcnNlcnMgdXNlZCBpbiBnZXRTb3J0RGF0YSBzaG9ydGN1dCBzdHJpbmdzXG4gIElzb3RvcGUuc29ydERhdGFQYXJzZXJzID0ge1xuICAgICdwYXJzZUludCc6IGZ1bmN0aW9uKCB2YWwgKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoIHZhbCwgMTAgKTtcbiAgICB9LFxuICAgICdwYXJzZUZsb2F0JzogZnVuY3Rpb24oIHZhbCApIHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KCB2YWwgKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gLS0tLS0gc29ydCBtZXRob2QgLS0tLS0gLy9cblxuICAvLyBzb3J0IGZpbHRlcmVkSXRlbSBvcmRlclxuICBwcm90by5fc29ydCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzb3J0QnlPcHQgPSB0aGlzLm9wdGlvbnMuc29ydEJ5O1xuICAgIGlmICggIXNvcnRCeU9wdCApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gY29uY2F0IGFsbCBzb3J0QnkgYW5kIHNvcnRIaXN0b3J5XG4gICAgdmFyIHNvcnRCeXMgPSBbXS5jb25jYXQuYXBwbHkoIHNvcnRCeU9wdCwgdGhpcy5zb3J0SGlzdG9yeSApO1xuICAgIC8vIHNvcnQgbWFnaWNcbiAgICB2YXIgaXRlbVNvcnRlciA9IGdldEl0ZW1Tb3J0ZXIoIHNvcnRCeXMsIHRoaXMub3B0aW9ucy5zb3J0QXNjZW5kaW5nICk7XG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zLnNvcnQoIGl0ZW1Tb3J0ZXIgKTtcbiAgICAvLyBrZWVwIHRyYWNrIG9mIHNvcnRCeSBIaXN0b3J5XG4gICAgaWYgKCBzb3J0QnlPcHQgIT0gdGhpcy5zb3J0SGlzdG9yeVswXSApIHtcbiAgICAgIC8vIGFkZCB0byBmcm9udCwgb2xkZXN0IGdvZXMgaW4gbGFzdFxuICAgICAgdGhpcy5zb3J0SGlzdG9yeS51bnNoaWZ0KCBzb3J0QnlPcHQgKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gcmV0dXJucyBhIGZ1bmN0aW9uIHVzZWQgZm9yIHNvcnRpbmdcbiAgZnVuY3Rpb24gZ2V0SXRlbVNvcnRlciggc29ydEJ5cywgc29ydEFzYyApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gc29ydGVyKCBpdGVtQSwgaXRlbUIgKSB7XG4gICAgICAvLyBjeWNsZSB0aHJvdWdoIGFsbCBzb3J0S2V5c1xuICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgc29ydEJ5cy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgdmFyIHNvcnRCeSA9IHNvcnRCeXNbaV07XG4gICAgICAgIHZhciBhID0gaXRlbUEuc29ydERhdGFbIHNvcnRCeSBdO1xuICAgICAgICB2YXIgYiA9IGl0ZW1CLnNvcnREYXRhWyBzb3J0QnkgXTtcbiAgICAgICAgaWYgKCBhID4gYiB8fCBhIDwgYiApIHtcbiAgICAgICAgICAvLyBpZiBzb3J0QXNjIGlzIGFuIG9iamVjdCwgdXNlIHRoZSB2YWx1ZSBnaXZlbiB0aGUgc29ydEJ5IGtleVxuICAgICAgICAgIHZhciBpc0FzY2VuZGluZyA9IHNvcnRBc2NbIHNvcnRCeSBdICE9PSB1bmRlZmluZWQgPyBzb3J0QXNjWyBzb3J0QnkgXSA6IHNvcnRBc2M7XG4gICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGlzQXNjZW5kaW5nID8gMSA6IC0xO1xuICAgICAgICAgIHJldHVybiAoIGEgPiBiID8gMSA6IC0xICkgKiBkaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtZXRob2RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLy8gZ2V0IGxheW91dCBtb2RlXG4gIHByb3RvLl9tb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxheW91dE1vZGUgPSB0aGlzLm9wdGlvbnMubGF5b3V0TW9kZTtcbiAgICB2YXIgbW9kZSA9IHRoaXMubW9kZXNbIGxheW91dE1vZGUgXTtcbiAgICBpZiAoICFtb2RlICkge1xuICAgICAgLy8gVE9ETyBjb25zb2xlLmVycm9yXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoICdObyBsYXlvdXQgbW9kZTogJyArIGxheW91dE1vZGUgKTtcbiAgICB9XG4gICAgLy8gSEFDSyBzeW5jIG1vZGUncyBvcHRpb25zXG4gICAgLy8gYW55IG9wdGlvbnMgc2V0IGFmdGVyIGluaXQgZm9yIGxheW91dCBtb2RlIG5lZWQgdG8gYmUgc3luY2VkXG4gICAgbW9kZS5vcHRpb25zID0gdGhpcy5vcHRpb25zWyBsYXlvdXRNb2RlIF07XG4gICAgcmV0dXJuIG1vZGU7XG4gIH07XG5cbiAgcHJvdG8uX3Jlc2V0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gdHJpZ2dlciBvcmlnaW5hbCByZXNldCBsYXlvdXRcbiAgICBPdXRsYXllci5wcm90b3R5cGUuX3Jlc2V0TGF5b3V0LmNhbGwoIHRoaXMgKTtcbiAgICB0aGlzLl9tb2RlKCkuX3Jlc2V0TGF5b3V0KCk7XG4gIH07XG5cbiAgcHJvdG8uX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCBpdGVtICApIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZSgpLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24oIGl0ZW0gKTtcbiAgfTtcblxuICBwcm90by5fbWFuYWdlU3RhbXAgPSBmdW5jdGlvbiggc3RhbXAgKSB7XG4gICAgdGhpcy5fbW9kZSgpLl9tYW5hZ2VTdGFtcCggc3RhbXAgKTtcbiAgfTtcblxuICBwcm90by5fZ2V0Q29udGFpbmVyU2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlKCkuX2dldENvbnRhaW5lclNpemUoKTtcbiAgfTtcblxuICBwcm90by5uZWVkc1Jlc2l6ZUxheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlKCkubmVlZHNSZXNpemVMYXlvdXQoKTtcbiAgfTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBhZGRpbmcgJiByZW1vdmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIC8vIEhFQURTIFVQIG92ZXJ3cml0ZXMgZGVmYXVsdCBPdXRsYXllciBhcHBlbmRlZFxuICBwcm90by5hcHBlbmRlZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgICB2YXIgaXRlbXMgPSB0aGlzLmFkZEl0ZW1zKCBlbGVtcyApO1xuICAgIGlmICggIWl0ZW1zLmxlbmd0aCApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZmlsdGVyLCBsYXlvdXQsIHJldmVhbCBuZXcgaXRlbXNcbiAgICB2YXIgZmlsdGVyZWRJdGVtcyA9IHRoaXMuX2ZpbHRlclJldmVhbEFkZGVkKCBpdGVtcyApO1xuICAgIC8vIGFkZCB0byBmaWx0ZXJlZEl0ZW1zXG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gdGhpcy5maWx0ZXJlZEl0ZW1zLmNvbmNhdCggZmlsdGVyZWRJdGVtcyApO1xuICB9O1xuXG4gIC8vIEhFQURTIFVQIG92ZXJ3cml0ZXMgZGVmYXVsdCBPdXRsYXllciBwcmVwZW5kZWRcbiAgcHJvdG8ucHJlcGVuZGVkID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICAgIHZhciBpdGVtcyA9IHRoaXMuX2l0ZW1pemUoIGVsZW1zICk7XG4gICAgaWYgKCAhaXRlbXMubGVuZ3RoICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBzdGFydCBuZXcgbGF5b3V0XG4gICAgdGhpcy5fcmVzZXRMYXlvdXQoKTtcbiAgICB0aGlzLl9tYW5hZ2VTdGFtcHMoKTtcbiAgICAvLyBmaWx0ZXIsIGxheW91dCwgcmV2ZWFsIG5ldyBpdGVtc1xuICAgIHZhciBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5fZmlsdGVyUmV2ZWFsQWRkZWQoIGl0ZW1zICk7XG4gICAgLy8gbGF5b3V0IHByZXZpb3VzIGl0ZW1zXG4gICAgdGhpcy5sYXlvdXRJdGVtcyggdGhpcy5maWx0ZXJlZEl0ZW1zICk7XG4gICAgLy8gYWRkIHRvIGl0ZW1zIGFuZCBmaWx0ZXJlZEl0ZW1zXG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gZmlsdGVyZWRJdGVtcy5jb25jYXQoIHRoaXMuZmlsdGVyZWRJdGVtcyApO1xuICAgIHRoaXMuaXRlbXMgPSBpdGVtcy5jb25jYXQoIHRoaXMuaXRlbXMgKTtcbiAgfTtcblxuICBwcm90by5fZmlsdGVyUmV2ZWFsQWRkZWQgPSBmdW5jdGlvbiggaXRlbXMgKSB7XG4gICAgdmFyIGZpbHRlcmVkID0gdGhpcy5fZmlsdGVyKCBpdGVtcyApO1xuICAgIHRoaXMuaGlkZSggZmlsdGVyZWQubmVlZEhpZGUgKTtcbiAgICAvLyByZXZlYWwgYWxsIG5ldyBpdGVtc1xuICAgIHRoaXMucmV2ZWFsKCBmaWx0ZXJlZC5tYXRjaGVzICk7XG4gICAgLy8gbGF5b3V0IG5ldyBpdGVtcywgbm8gdHJhbnNpdGlvblxuICAgIHRoaXMubGF5b3V0SXRlbXMoIGZpbHRlcmVkLm1hdGNoZXMsIHRydWUgKTtcbiAgICByZXR1cm4gZmlsdGVyZWQubWF0Y2hlcztcbiAgfTtcblxuICAvKipcbiAgICogRmlsdGVyLCBzb3J0LCBhbmQgbGF5b3V0IG5ld2x5LWFwcGVuZGVkIGl0ZW0gZWxlbWVudHNcbiAgICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBFbGVtZW50fSBlbGVtc1xuICAgKi9cbiAgcHJvdG8uaW5zZXJ0ID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICAgIHZhciBpdGVtcyA9IHRoaXMuYWRkSXRlbXMoIGVsZW1zICk7XG4gICAgaWYgKCAhaXRlbXMubGVuZ3RoICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBhcHBlbmQgaXRlbSBlbGVtZW50c1xuICAgIHZhciBpLCBpdGVtO1xuICAgIHZhciBsZW4gPSBpdGVtcy5sZW5ndGg7XG4gICAgZm9yICggaT0wOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBpdGVtID0gaXRlbXNbaV07XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoIGl0ZW0uZWxlbWVudCApO1xuICAgIH1cbiAgICAvLyBmaWx0ZXIgbmV3IHN0dWZmXG4gICAgdmFyIGZpbHRlcmVkSW5zZXJ0SXRlbXMgPSB0aGlzLl9maWx0ZXIoIGl0ZW1zICkubWF0Y2hlcztcbiAgICAvLyBzZXQgZmxhZ1xuICAgIGZvciAoIGk9MDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgaXRlbXNbaV0uaXNMYXlvdXRJbnN0YW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5hcnJhbmdlKCk7XG4gICAgLy8gcmVzZXQgZmxhZ1xuICAgIGZvciAoIGk9MDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgZGVsZXRlIGl0ZW1zW2ldLmlzTGF5b3V0SW5zdGFudDtcbiAgICB9XG4gICAgdGhpcy5yZXZlYWwoIGZpbHRlcmVkSW5zZXJ0SXRlbXMgKTtcbiAgfTtcblxuICB2YXIgX3JlbW92ZSA9IHByb3RvLnJlbW92ZTtcbiAgcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICAgIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuICAgIHZhciByZW1vdmVJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoIGVsZW1zICk7XG4gICAgLy8gZG8gcmVndWxhciB0aGluZ1xuICAgIF9yZW1vdmUuY2FsbCggdGhpcywgZWxlbXMgKTtcbiAgICAvLyBiYWlsIGlmIG5vIGl0ZW1zIHRvIHJlbW92ZVxuICAgIHZhciBsZW4gPSByZW1vdmVJdGVtcyAmJiByZW1vdmVJdGVtcy5sZW5ndGg7XG4gICAgLy8gcmVtb3ZlIGVsZW1zIGZyb20gZmlsdGVyZWRJdGVtc1xuICAgIGZvciAoIHZhciBpPTA7IGxlbiAmJiBpIDwgbGVuOyBpKysgKSB7XG4gICAgICB2YXIgaXRlbSA9IHJlbW92ZUl0ZW1zW2ldO1xuICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjb2xsZWN0aW9uXG4gICAgICB1dGlscy5yZW1vdmVGcm9tKCB0aGlzLmZpbHRlcmVkSXRlbXMsIGl0ZW0gKTtcbiAgICB9XG4gIH07XG5cbiAgcHJvdG8uc2h1ZmZsZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHVwZGF0ZSByYW5kb20gc29ydERhdGFcbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIHZhciBpdGVtID0gdGhpcy5pdGVtc1tpXTtcbiAgICAgIGl0ZW0uc29ydERhdGEucmFuZG9tID0gTWF0aC5yYW5kb20oKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLnNvcnRCeSA9ICdyYW5kb20nO1xuICAgIHRoaXMuX3NvcnQoKTtcbiAgICB0aGlzLl9sYXlvdXQoKTtcbiAgfTtcblxuICAvKipcbiAgICogdHJpZ2dlciBmbiB3aXRob3V0IHRyYW5zaXRpb25cbiAgICoga2luZCBvZiBoYWNreSB0byBoYXZlIHRoaXMgaW4gdGhlIGZpcnN0IHBsYWNlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFyZ3NcbiAgICogQHJldHVybnMgcmV0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcm90by5fbm9UcmFuc2l0aW9uID0gZnVuY3Rpb24oIGZuLCBhcmdzICkge1xuICAgIC8vIHNhdmUgdHJhbnNpdGlvbkR1cmF0aW9uIGJlZm9yZSBkaXNhYmxpbmdcbiAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gdGhpcy5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAvLyBkaXNhYmxlIHRyYW5zaXRpb25cbiAgICB0aGlzLm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uID0gMDtcbiAgICAvLyBkbyBpdFxuICAgIHZhciByZXR1cm5WYWx1ZSA9IGZuLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gICAgLy8gcmUtZW5hYmxlIHRyYW5zaXRpb24gZm9yIHJldmVhbFxuICAgIHRoaXMub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb247XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9O1xuXG4gIC8vIC0tLS0tIGhlbHBlciBtZXRob2RzIC0tLS0tIC8vXG5cbiAgLyoqXG4gICAqIGdldHRlciBtZXRob2QgZm9yIGdldHRpbmcgZmlsdGVyZWQgaXRlbSBlbGVtZW50c1xuICAgKiBAcmV0dXJucyB7QXJyYXl9IGVsZW1zIC0gY29sbGVjdGlvbiBvZiBpdGVtIGVsZW1lbnRzXG4gICAqL1xuICBwcm90by5nZXRGaWx0ZXJlZEl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZpbHRlcmVkSXRlbXMubWFwKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICAgIHJldHVybiBpdGVtLmVsZW1lbnQ7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gLS0tLS0gIC0tLS0tIC8vXG5cbiAgcmV0dXJuIElzb3RvcGU7XG5cbn0pKTtcblxuLyohXG4gKiBtYXNvbnJ5SG9yaXpvbnRhbCBsYXlvdXQgbW9kZSBmb3IgSXNvdG9wZVxuICogdjIuMC4wXG4gKiBodHRwOi8vaXNvdG9wZS5tZXRhZml6enkuY28vbGF5b3V0LW1vZGVzL21hc29ucnlob3Jpem9udGFsLmh0bWxcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAndXNlIHN0cmljdCc7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICAgJ2dldC1zaXplL2dldC1zaXplJyxcbiAgICAgICAgJ2lzb3RvcGUvanMvbGF5b3V0LW1vZGUnXG4gICAgICBdLFxuICAgICAgZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnZ2V0LXNpemUnKSxcbiAgICAgIHJlcXVpcmUoJ2lzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2RlJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgIHdpbmRvdy5nZXRTaXplLFxuICAgICAgd2luZG93Lklzb3RvcGUuTGF5b3V0TW9kZVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBnZXRTaXplLCBMYXlvdXRNb2RlICkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZWZpbml0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLy8gY3JlYXRlIGFuIE91dGxheWVyIGxheW91dCBjbGFzc1xuICB2YXIgTWFzb25yeUhvcml6b250YWwgPSBMYXlvdXRNb2RlLmNyZWF0ZSgnbWFzb25yeUhvcml6b250YWwnKTtcbiAgdmFyIHByb3RvID0gTWFzb25yeUhvcml6b250YWwucHJvdG90eXBlO1xuXG4gIHByb3RvLl9yZXNldExheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0Um93SGVpZ2h0KCk7XG4gICAgdGhpcy5fZ2V0TWVhc3VyZW1lbnQoICdndXR0ZXInLCAnb3V0ZXJIZWlnaHQnICk7XG5cbiAgICB0aGlzLnJvd0hlaWdodCArPSB0aGlzLmd1dHRlcjtcbiAgICAvLyBtZWFzdXJlIHJvd3NcbiAgICB0aGlzLnJvd3MgPSBNYXRoLmZsb29yKCAoIHRoaXMuaXNvdG9wZS5zaXplLmlubmVySGVpZ2h0ICsgdGhpcy5ndXR0ZXIgKSAvIHRoaXMucm93SGVpZ2h0ICk7XG4gICAgdGhpcy5yb3dzID0gTWF0aC5tYXgoIHRoaXMucm93cywgMSApO1xuXG4gICAgLy8gcmVzZXQgcm93IFhzXG4gICAgdmFyIGkgPSB0aGlzLnJvd3M7XG4gICAgdGhpcy5yb3dYcyA9IFtdO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMucm93WHMucHVzaCggMCApO1xuICAgIH1cblxuICAgIHRoaXMubWF4WCA9IDA7XG4gIH07XG5cbiAgcHJvdG8uX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0uZ2V0U2l6ZSgpO1xuICAgIC8vIGhvdyBtYW55IHJvd3MgZG9lcyB0aGlzIGJyaWNrIHNwYW5cbiAgICB2YXIgcmVtYWluZGVyID0gaXRlbS5zaXplLm91dGVySGVpZ2h0ICUgdGhpcy5yb3dIZWlnaHQ7XG4gICAgdmFyIG1hdGhNZXRob2QgPSByZW1haW5kZXIgJiYgcmVtYWluZGVyIDwgMSA/ICdyb3VuZCcgOiAnY2VpbCc7XG4gICAgLy8gcm91bmQgaWYgb2ZmIGJ5IDEgcGl4ZWwsIG90aGVyd2lzZSB1c2UgY2VpbFxuICAgIHZhciByb3dTcGFuID0gTWF0aFsgbWF0aE1ldGhvZCBdKCBpdGVtLnNpemUub3V0ZXJIZWlnaHQgLyB0aGlzLnJvd0hlaWdodCApO1xuICAgIHJvd1NwYW4gPSBNYXRoLm1pbiggcm93U3BhbiwgdGhpcy5yb3dzICk7XG5cbiAgICB2YXIgcm93R3JvdXAgPSB0aGlzLl9nZXRSb3dHcm91cCggcm93U3BhbiApO1xuICAgIC8vIGdldCB0aGUgbWluaW11bSBYIHZhbHVlIGZyb20gdGhlIHJvd3NcbiAgICB2YXIgbWluaW11bVggPSBNYXRoLm1pbi5hcHBseSggTWF0aCwgcm93R3JvdXAgKTtcbiAgICB2YXIgc2hvcnRSb3dJbmRleCA9IHJvd0dyb3VwLmluZGV4T2YoIG1pbmltdW1YICk7XG5cbiAgICAvLyBwb3NpdGlvbiB0aGUgYnJpY2tcbiAgICB2YXIgcG9zaXRpb24gPSB7XG4gICAgICB4OiBtaW5pbXVtWCxcbiAgICAgIHk6IHRoaXMucm93SGVpZ2h0ICogc2hvcnRSb3dJbmRleFxuICAgIH07XG5cbiAgICAvLyBhcHBseSBzZXRIZWlnaHQgdG8gbmVjZXNzYXJ5IHJvd3NcbiAgICB2YXIgc2V0V2lkdGggPSBtaW5pbXVtWCArIGl0ZW0uc2l6ZS5vdXRlcldpZHRoO1xuICAgIHZhciBzZXRTcGFuID0gdGhpcy5yb3dzICsgMSAtIHJvd0dyb3VwLmxlbmd0aDtcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBzZXRTcGFuOyBpKysgKSB7XG4gICAgICB0aGlzLnJvd1hzWyBzaG9ydFJvd0luZGV4ICsgaSBdID0gc2V0V2lkdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93U3BhbiAtIG51bWJlciBvZiByb3dzIHRoZSBlbGVtZW50IHNwYW5zXG4gICAqIEByZXR1cm5zIHtBcnJheX0gcm93R3JvdXBcbiAgICovXG4gIHByb3RvLl9nZXRSb3dHcm91cCA9IGZ1bmN0aW9uKCByb3dTcGFuICkge1xuICAgIGlmICggcm93U3BhbiA8IDIgKSB7XG4gICAgICAvLyBpZiBicmljayBzcGFucyBvbmx5IG9uZSByb3csIHVzZSBhbGwgdGhlIHJvdyBYc1xuICAgICAgcmV0dXJuIHRoaXMucm93WHM7XG4gICAgfVxuXG4gICAgdmFyIHJvd0dyb3VwID0gW107XG4gICAgLy8gaG93IG1hbnkgZGlmZmVyZW50IHBsYWNlcyBjb3VsZCB0aGlzIGJyaWNrIGZpdCBob3Jpem9udGFsbHlcbiAgICB2YXIgZ3JvdXBDb3VudCA9IHRoaXMucm93cyArIDEgLSByb3dTcGFuO1xuICAgIC8vIGZvciBlYWNoIGdyb3VwIHBvdGVudGlhbCBob3Jpem9udGFsIHBvc2l0aW9uXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgZ3JvdXBDb3VudDsgaSsrICkge1xuICAgICAgLy8gbWFrZSBhbiBhcnJheSBvZiByb3dYIHZhbHVlcyBmb3IgdGhhdCBvbmUgZ3JvdXBcbiAgICAgIHZhciBncm91cFJvd1hzID0gdGhpcy5yb3dYcy5zbGljZSggaSwgaSArIHJvd1NwYW4gKTtcbiAgICAgIC8vIGFuZCBnZXQgdGhlIG1heCB2YWx1ZSBvZiB0aGUgYXJyYXlcbiAgICAgIHJvd0dyb3VwW2ldID0gTWF0aC5tYXguYXBwbHkoIE1hdGgsIGdyb3VwUm93WHMgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJvd0dyb3VwO1xuICB9O1xuXG4gIHByb3RvLl9tYW5hZ2VTdGFtcCA9IGZ1bmN0aW9uKCBzdGFtcCApIHtcbiAgICB2YXIgc3RhbXBTaXplID0gZ2V0U2l6ZSggc3RhbXAgKTtcbiAgICB2YXIgb2Zmc2V0ID0gdGhpcy5pc290b3BlLl9nZXRFbGVtZW50T2Zmc2V0KCBzdGFtcCApO1xuICAgIC8vIGdldCB0aGUgcm93cyB0aGF0IHRoaXMgc3RhbXAgYWZmZWN0c1xuICAgIHZhciBmaXJzdFkgPSB0aGlzLl9nZXRPcHRpb24oJ29yaWdpblRvcCcpID8gb2Zmc2V0LnRvcCA6IG9mZnNldC5ib3R0b207XG4gICAgdmFyIGxhc3RZID0gZmlyc3RZICsgc3RhbXBTaXplLm91dGVySGVpZ2h0O1xuICAgIHZhciBmaXJzdFJvdyA9IE1hdGguZmxvb3IoIGZpcnN0WSAvIHRoaXMucm93SGVpZ2h0ICk7XG4gICAgZmlyc3RSb3cgPSBNYXRoLm1heCggMCwgZmlyc3RSb3cgKTtcbiAgICB2YXIgbGFzdFJvdyA9IE1hdGguZmxvb3IoIGxhc3RZIC8gdGhpcy5yb3dIZWlnaHQgKTtcbiAgICBsYXN0Um93ID0gTWF0aC5taW4oIHRoaXMucm93cyAtIDEsIGxhc3RSb3cgKTtcbiAgICAvLyBzZXQgcm93WHMgdG8gb3V0c2lkZSBlZGdlIG9mIHRoZSBzdGFtcFxuICAgIHZhciBzdGFtcE1heFggPSAoIHRoaXMuX2dldE9wdGlvbignb3JpZ2luTGVmdCcpID8gb2Zmc2V0LmxlZnQgOiBvZmZzZXQucmlnaHQgKSArXG4gICAgICBzdGFtcFNpemUub3V0ZXJXaWR0aDtcbiAgICBmb3IgKCB2YXIgaSA9IGZpcnN0Um93OyBpIDw9IGxhc3RSb3c7IGkrKyApIHtcbiAgICAgIHRoaXMucm93WHNbaV0gPSBNYXRoLm1heCggc3RhbXBNYXhYLCB0aGlzLnJvd1hzW2ldICk7XG4gICAgfVxuICB9O1xuXG4gIHByb3RvLl9nZXRDb250YWluZXJTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tYXhYID0gTWF0aC5tYXguYXBwbHkoIE1hdGgsIHRoaXMucm93WHMgKTtcblxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogdGhpcy5tYXhYXG4gICAgfTtcbiAgfTtcblxuICBwcm90by5uZWVkc1Jlc2l6ZUxheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5lZWRzVmVydGljYWxSZXNpemVMYXlvdXQoKTtcbiAgfTtcblxuICByZXR1cm4gTWFzb25yeUhvcml6b250YWw7XG5cbn0pKTsiLCIvKiFcbiAqIGltYWdlc0xvYWRlZCBQQUNLQUdFRCB2NC4xLjFcbiAqIEphdmFTY3JpcHQgaXMgYWxsIGxpa2UgXCJZb3UgaW1hZ2VzIGFyZSBkb25lIHlldCBvciB3aGF0P1wiXG4gKiBNSVQgTGljZW5zZVxuICovXG5cbi8qKlxuICogRXZFbWl0dGVyIHYxLjAuM1xuICogTGlsJyBldmVudCBlbWl0dGVyXG4gKiBNSVQgTGljZW5zZVxuICovXG5cbi8qIGpzaGludCB1bnVzZWQ6IHRydWUsIHVuZGVmOiB0cnVlLCBzdHJpY3Q6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggZ2xvYmFsLCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgd2luZG93ICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EIC0gUmVxdWlyZUpTXG4gICAgZGVmaW5lKCAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJyxmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlMgLSBCcm93c2VyaWZ5LCBXZWJwYWNrXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgZ2xvYmFsLkV2RW1pdHRlciA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KCB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24oKSB7XG5cblxuXG5mdW5jdGlvbiBFdkVtaXR0ZXIoKSB7fVxuXG52YXIgcHJvdG8gPSBFdkVtaXR0ZXIucHJvdG90eXBlO1xuXG5wcm90by5vbiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBzZXQgZXZlbnRzIGhhc2hcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgLy8gc2V0IGxpc3RlbmVycyBhcnJheVxuICB2YXIgbGlzdGVuZXJzID0gZXZlbnRzWyBldmVudE5hbWUgXSA9IGV2ZW50c1sgZXZlbnROYW1lIF0gfHwgW107XG4gIC8vIG9ubHkgYWRkIG9uY2VcbiAgaWYgKCBsaXN0ZW5lcnMuaW5kZXhPZiggbGlzdGVuZXIgKSA9PSAtMSApIHtcbiAgICBsaXN0ZW5lcnMucHVzaCggbGlzdGVuZXIgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub25jZSA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhZGQgZXZlbnRcbiAgdGhpcy5vbiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAvLyBzZXQgb25jZSBmbGFnXG4gIC8vIHNldCBvbmNlRXZlbnRzIGhhc2hcbiAgdmFyIG9uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyB8fCB7fTtcbiAgLy8gc2V0IG9uY2VMaXN0ZW5lcnMgb2JqZWN0XG4gIHZhciBvbmNlTGlzdGVuZXJzID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSB8fCB7fTtcbiAgLy8gc2V0IGZsYWdcbiAgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXSA9IHRydWU7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vZmYgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKCBsaXN0ZW5lciApO1xuICBpZiAoIGluZGV4ICE9IC0xICkge1xuICAgIGxpc3RlbmVycy5zcGxpY2UoIGluZGV4LCAxICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmVtaXRFdmVudCA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGFyZ3MgKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgaSA9IDA7XG4gIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgYXJncyA9IGFyZ3MgfHwgW107XG4gIC8vIG9uY2Ugc3R1ZmZcbiAgdmFyIG9uY2VMaXN0ZW5lcnMgPSB0aGlzLl9vbmNlRXZlbnRzICYmIHRoaXMuX29uY2VFdmVudHNbIGV2ZW50TmFtZSBdO1xuXG4gIHdoaWxlICggbGlzdGVuZXIgKSB7XG4gICAgdmFyIGlzT25jZSA9IG9uY2VMaXN0ZW5lcnMgJiYgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICBpZiAoIGlzT25jZSApIHtcbiAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lclxuICAgICAgLy8gcmVtb3ZlIGJlZm9yZSB0cmlnZ2VyIHRvIHByZXZlbnQgcmVjdXJzaW9uXG4gICAgICB0aGlzLm9mZiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAgICAgLy8gdW5zZXQgb25jZSBmbGFnXG4gICAgICBkZWxldGUgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICB9XG4gICAgLy8gdHJpZ2dlciBsaXN0ZW5lclxuICAgIGxpc3RlbmVyLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gICAgLy8gZ2V0IG5leHQgbGlzdGVuZXJcbiAgICBpICs9IGlzT25jZSA/IDAgOiAxO1xuICAgIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5yZXR1cm4gRXZFbWl0dGVyO1xuXG59KSk7XG5cbi8qIVxuICogaW1hZ2VzTG9hZGVkIHY0LjEuMVxuICogSmF2YVNjcmlwdCBpcyBhbGwgbGlrZSBcIllvdSBpbWFnZXMgYXJlIGRvbmUgeWV0IG9yIHdoYXQ/XCJcbiAqIE1JVCBMaWNlbnNlXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkgeyAndXNlIHN0cmljdCc7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuXG4gIC8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIG1vZHVsZTogZmFsc2UsIHJlcXVpcmU6IGZhbHNlICovXG5cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICdldi1lbWl0dGVyL2V2LWVtaXR0ZXInXG4gICAgXSwgZnVuY3Rpb24oIEV2RW1pdHRlciApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnZXYtZW1pdHRlcicpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5pbWFnZXNMb2FkZWQgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkV2RW1pdHRlclxuICAgICk7XG4gIH1cblxufSkoIHdpbmRvdyxcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIGZhY3RvcnkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIgKSB7XG5cblxuXG52YXIgJCA9IHdpbmRvdy5qUXVlcnk7XG52YXIgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGV4dGVuZCBvYmplY3RzXG5mdW5jdGlvbiBleHRlbmQoIGEsIGIgKSB7XG4gIGZvciAoIHZhciBwcm9wIGluIGIgKSB7XG4gICAgYVsgcHJvcCBdID0gYlsgcHJvcCBdO1xuICB9XG4gIHJldHVybiBhO1xufVxuXG4vLyB0dXJuIGVsZW1lbnQgb3Igbm9kZUxpc3QgaW50byBhbiBhcnJheVxuZnVuY3Rpb24gbWFrZUFycmF5KCBvYmogKSB7XG4gIHZhciBhcnkgPSBbXTtcbiAgaWYgKCBBcnJheS5pc0FycmF5KCBvYmogKSApIHtcbiAgICAvLyB1c2Ugb2JqZWN0IGlmIGFscmVhZHkgYW4gYXJyYXlcbiAgICBhcnkgPSBvYmo7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBvYmoubGVuZ3RoID09ICdudW1iZXInICkge1xuICAgIC8vIGNvbnZlcnQgbm9kZUxpc3QgdG8gYXJyYXlcbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgb2JqLmxlbmd0aDsgaSsrICkge1xuICAgICAgYXJ5LnB1c2goIG9ialtpXSApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBhcnJheSBvZiBzaW5nbGUgaW5kZXhcbiAgICBhcnkucHVzaCggb2JqICk7XG4gIH1cbiAgcmV0dXJuIGFyeTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaW1hZ2VzTG9hZGVkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheSwgRWxlbWVudCwgTm9kZUxpc3QsIFN0cmluZ30gZWxlbVxuICogQHBhcmFtIHtPYmplY3Qgb3IgRnVuY3Rpb259IG9wdGlvbnMgLSBpZiBmdW5jdGlvbiwgdXNlIGFzIGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkFsd2F5cyAtIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIEltYWdlc0xvYWRlZCggZWxlbSwgb3B0aW9ucywgb25BbHdheXMgKSB7XG4gIC8vIGNvZXJjZSBJbWFnZXNMb2FkZWQoKSB3aXRob3V0IG5ldywgdG8gYmUgbmV3IEltYWdlc0xvYWRlZCgpXG4gIGlmICggISggdGhpcyBpbnN0YW5jZW9mIEltYWdlc0xvYWRlZCApICkge1xuICAgIHJldHVybiBuZXcgSW1hZ2VzTG9hZGVkKCBlbGVtLCBvcHRpb25zLCBvbkFsd2F5cyApO1xuICB9XG4gIC8vIHVzZSBlbGVtIGFzIHNlbGVjdG9yIHN0cmluZ1xuICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xuICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBlbGVtICk7XG4gIH1cblxuICB0aGlzLmVsZW1lbnRzID0gbWFrZUFycmF5KCBlbGVtICk7XG4gIHRoaXMub3B0aW9ucyA9IGV4dGVuZCgge30sIHRoaXMub3B0aW9ucyApO1xuXG4gIGlmICggdHlwZW9mIG9wdGlvbnMgPT0gJ2Z1bmN0aW9uJyApIHtcbiAgICBvbkFsd2F5cyA9IG9wdGlvbnM7XG4gIH0gZWxzZSB7XG4gICAgZXh0ZW5kKCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKTtcbiAgfVxuXG4gIGlmICggb25BbHdheXMgKSB7XG4gICAgdGhpcy5vbiggJ2Fsd2F5cycsIG9uQWx3YXlzICk7XG4gIH1cblxuICB0aGlzLmdldEltYWdlcygpO1xuXG4gIGlmICggJCApIHtcbiAgICAvLyBhZGQgalF1ZXJ5IERlZmVycmVkIG9iamVjdFxuICAgIHRoaXMuanFEZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG4gIH1cblxuICAvLyBIQUNLIGNoZWNrIGFzeW5jIHRvIGFsbG93IHRpbWUgdG8gYmluZCBsaXN0ZW5lcnNcbiAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jaGVjaygpO1xuICB9LmJpbmQoIHRoaXMgKSk7XG59XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUub3B0aW9ucyA9IHt9O1xuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmdldEltYWdlcyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmltYWdlcyA9IFtdO1xuXG4gIC8vIGZpbHRlciAmIGZpbmQgaXRlbXMgaWYgd2UgaGF2ZSBhbiBpdGVtIHNlbGVjdG9yXG4gIHRoaXMuZWxlbWVudHMuZm9yRWFjaCggdGhpcy5hZGRFbGVtZW50SW1hZ2VzLCB0aGlzICk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudFxuICovXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmFkZEVsZW1lbnRJbWFnZXMgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgLy8gZmlsdGVyIHNpYmxpbmdzXG4gIGlmICggZWxlbS5ub2RlTmFtZSA9PSAnSU1HJyApIHtcbiAgICB0aGlzLmFkZEltYWdlKCBlbGVtICk7XG4gIH1cbiAgLy8gZ2V0IGJhY2tncm91bmQgaW1hZ2Ugb24gZWxlbWVudFxuICBpZiAoIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kID09PSB0cnVlICkge1xuICAgIHRoaXMuYWRkRWxlbWVudEJhY2tncm91bmRJbWFnZXMoIGVsZW0gKTtcbiAgfVxuXG4gIC8vIGZpbmQgY2hpbGRyZW5cbiAgLy8gbm8gbm9uLWVsZW1lbnQgbm9kZXMsICMxNDNcbiAgdmFyIG5vZGVUeXBlID0gZWxlbS5ub2RlVHlwZTtcbiAgaWYgKCAhbm9kZVR5cGUgfHwgIWVsZW1lbnROb2RlVHlwZXNbIG5vZGVUeXBlIF0gKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBjaGlsZEltZ3MgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xuICAvLyBjb25jYXQgY2hpbGRFbGVtcyB0byBmaWx0ZXJGb3VuZCBhcnJheVxuICBmb3IgKCB2YXIgaT0wOyBpIDwgY2hpbGRJbWdzLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBpbWcgPSBjaGlsZEltZ3NbaV07XG4gICAgdGhpcy5hZGRJbWFnZSggaW1nICk7XG4gIH1cblxuICAvLyBnZXQgY2hpbGQgYmFja2dyb3VuZCBpbWFnZXNcbiAgaWYgKCB0eXBlb2YgdGhpcy5vcHRpb25zLmJhY2tncm91bmQgPT0gJ3N0cmluZycgKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCApO1xuICAgIGZvciAoIGk9MDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrICkge1xuICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICB0aGlzLmFkZEVsZW1lbnRCYWNrZ3JvdW5kSW1hZ2VzKCBjaGlsZCApO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGVsZW1lbnROb2RlVHlwZXMgPSB7XG4gIDE6IHRydWUsXG4gIDk6IHRydWUsXG4gIDExOiB0cnVlXG59O1xuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmFkZEVsZW1lbnRCYWNrZ3JvdW5kSW1hZ2VzID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoIGVsZW0gKTtcbiAgaWYgKCAhc3R5bGUgKSB7XG4gICAgLy8gRmlyZWZveCByZXR1cm5zIG51bGwgaWYgaW4gYSBoaWRkZW4gaWZyYW1lIGh0dHBzOi8vYnVnemlsLmxhLzU0ODM5N1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBnZXQgdXJsIGluc2lkZSB1cmwoXCIuLi5cIilcbiAgdmFyIHJlVVJMID0gL3VybFxcKChbJ1wiXSk/KC4qPylcXDFcXCkvZ2k7XG4gIHZhciBtYXRjaGVzID0gcmVVUkwuZXhlYyggc3R5bGUuYmFja2dyb3VuZEltYWdlICk7XG4gIHdoaWxlICggbWF0Y2hlcyAhPT0gbnVsbCApIHtcbiAgICB2YXIgdXJsID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzJdO1xuICAgIGlmICggdXJsICkge1xuICAgICAgdGhpcy5hZGRCYWNrZ3JvdW5kKCB1cmwsIGVsZW0gKTtcbiAgICB9XG4gICAgbWF0Y2hlcyA9IHJlVVJMLmV4ZWMoIHN0eWxlLmJhY2tncm91bmRJbWFnZSApO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7SW1hZ2V9IGltZ1xuICovXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmFkZEltYWdlID0gZnVuY3Rpb24oIGltZyApIHtcbiAgdmFyIGxvYWRpbmdJbWFnZSA9IG5ldyBMb2FkaW5nSW1hZ2UoIGltZyApO1xuICB0aGlzLmltYWdlcy5wdXNoKCBsb2FkaW5nSW1hZ2UgKTtcbn07XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUuYWRkQmFja2dyb3VuZCA9IGZ1bmN0aW9uKCB1cmwsIGVsZW0gKSB7XG4gIHZhciBiYWNrZ3JvdW5kID0gbmV3IEJhY2tncm91bmQoIHVybCwgZWxlbSApO1xuICB0aGlzLmltYWdlcy5wdXNoKCBiYWNrZ3JvdW5kICk7XG59O1xuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG4gIHRoaXMucHJvZ3Jlc3NlZENvdW50ID0gMDtcbiAgdGhpcy5oYXNBbnlCcm9rZW4gPSBmYWxzZTtcbiAgLy8gY29tcGxldGUgaWYgbm8gaW1hZ2VzXG4gIGlmICggIXRoaXMuaW1hZ2VzLmxlbmd0aCApIHtcbiAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Qcm9ncmVzcyggaW1hZ2UsIGVsZW0sIG1lc3NhZ2UgKSB7XG4gICAgLy8gSEFDSyAtIENocm9tZSB0cmlnZ2VycyBldmVudCBiZWZvcmUgb2JqZWN0IHByb3BlcnRpZXMgaGF2ZSBjaGFuZ2VkLiAjODNcbiAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgIF90aGlzLnByb2dyZXNzKCBpbWFnZSwgZWxlbSwgbWVzc2FnZSApO1xuICAgIH0pO1xuICB9XG5cbiAgdGhpcy5pbWFnZXMuZm9yRWFjaCggZnVuY3Rpb24oIGxvYWRpbmdJbWFnZSApIHtcbiAgICBsb2FkaW5nSW1hZ2Uub25jZSggJ3Byb2dyZXNzJywgb25Qcm9ncmVzcyApO1xuICAgIGxvYWRpbmdJbWFnZS5jaGVjaygpO1xuICB9KTtcbn07XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUucHJvZ3Jlc3MgPSBmdW5jdGlvbiggaW1hZ2UsIGVsZW0sIG1lc3NhZ2UgKSB7XG4gIHRoaXMucHJvZ3Jlc3NlZENvdW50Kys7XG4gIHRoaXMuaGFzQW55QnJva2VuID0gdGhpcy5oYXNBbnlCcm9rZW4gfHwgIWltYWdlLmlzTG9hZGVkO1xuICAvLyBwcm9ncmVzcyBldmVudFxuICB0aGlzLmVtaXRFdmVudCggJ3Byb2dyZXNzJywgWyB0aGlzLCBpbWFnZSwgZWxlbSBdICk7XG4gIGlmICggdGhpcy5qcURlZmVycmVkICYmIHRoaXMuanFEZWZlcnJlZC5ub3RpZnkgKSB7XG4gICAgdGhpcy5qcURlZmVycmVkLm5vdGlmeSggdGhpcywgaW1hZ2UgKTtcbiAgfVxuICAvLyBjaGVjayBpZiBjb21wbGV0ZWRcbiAgaWYgKCB0aGlzLnByb2dyZXNzZWRDb3VudCA9PSB0aGlzLmltYWdlcy5sZW5ndGggKSB7XG4gICAgdGhpcy5jb21wbGV0ZSgpO1xuICB9XG5cbiAgaWYgKCB0aGlzLm9wdGlvbnMuZGVidWcgJiYgY29uc29sZSApIHtcbiAgICBjb25zb2xlLmxvZyggJ3Byb2dyZXNzOiAnICsgbWVzc2FnZSwgaW1hZ2UsIGVsZW0gKTtcbiAgfVxufTtcblxuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZXZlbnROYW1lID0gdGhpcy5oYXNBbnlCcm9rZW4gPyAnZmFpbCcgOiAnZG9uZSc7XG4gIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gIHRoaXMuZW1pdEV2ZW50KCBldmVudE5hbWUsIFsgdGhpcyBdICk7XG4gIHRoaXMuZW1pdEV2ZW50KCAnYWx3YXlzJywgWyB0aGlzIF0gKTtcbiAgaWYgKCB0aGlzLmpxRGVmZXJyZWQgKSB7XG4gICAgdmFyIGpxTWV0aG9kID0gdGhpcy5oYXNBbnlCcm9rZW4gPyAncmVqZWN0JyA6ICdyZXNvbHZlJztcbiAgICB0aGlzLmpxRGVmZXJyZWRbIGpxTWV0aG9kIF0oIHRoaXMgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIExvYWRpbmdJbWFnZSggaW1nICkge1xuICB0aGlzLmltZyA9IGltZztcbn1cblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEV2RW1pdHRlci5wcm90b3R5cGUgKTtcblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xuICAvLyBJZiBjb21wbGV0ZSBpcyB0cnVlIGFuZCBicm93c2VyIHN1cHBvcnRzIG5hdHVyYWwgc2l6ZXMsXG4gIC8vIHRyeSB0byBjaGVjayBmb3IgaW1hZ2Ugc3RhdHVzIG1hbnVhbGx5LlxuICB2YXIgaXNDb21wbGV0ZSA9IHRoaXMuZ2V0SXNJbWFnZUNvbXBsZXRlKCk7XG4gIGlmICggaXNDb21wbGV0ZSApIHtcbiAgICAvLyByZXBvcnQgYmFzZWQgb24gbmF0dXJhbFdpZHRoXG4gICAgdGhpcy5jb25maXJtKCB0aGlzLmltZy5uYXR1cmFsV2lkdGggIT09IDAsICduYXR1cmFsV2lkdGgnICk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gSWYgbm9uZSBvZiB0aGUgY2hlY2tzIGFib3ZlIG1hdGNoZWQsIHNpbXVsYXRlIGxvYWRpbmcgb24gZGV0YWNoZWQgZWxlbWVudC5cbiAgdGhpcy5wcm94eUltYWdlID0gbmV3IEltYWdlKCk7XG4gIHRoaXMucHJveHlJbWFnZS5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5wcm94eUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbiAgLy8gYmluZCB0byBpbWFnZSBhcyB3ZWxsIGZvciBGaXJlZm94LiAjMTkxXG4gIHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcyApO1xuICB0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKCAnZXJyb3InLCB0aGlzICk7XG4gIHRoaXMucHJveHlJbWFnZS5zcmMgPSB0aGlzLmltZy5zcmM7XG59O1xuXG5Mb2FkaW5nSW1hZ2UucHJvdG90eXBlLmdldElzSW1hZ2VDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5pbWcuY29tcGxldGUgJiYgdGhpcy5pbWcubmF0dXJhbFdpZHRoICE9PSB1bmRlZmluZWQ7XG59O1xuXG5Mb2FkaW5nSW1hZ2UucHJvdG90eXBlLmNvbmZpcm0gPSBmdW5jdGlvbiggaXNMb2FkZWQsIG1lc3NhZ2UgKSB7XG4gIHRoaXMuaXNMb2FkZWQgPSBpc0xvYWRlZDtcbiAgdGhpcy5lbWl0RXZlbnQoICdwcm9ncmVzcycsIFsgdGhpcywgdGhpcy5pbWcsIG1lc3NhZ2UgXSApO1xufTtcblxuLy8gLS0tLS0gZXZlbnRzIC0tLS0tIC8vXG5cbi8vIHRyaWdnZXIgc3BlY2lmaWVkIGhhbmRsZXIgZm9yIGV2ZW50IHR5cGVcbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgaWYgKCB0aGlzWyBtZXRob2QgXSApIHtcbiAgICB0aGlzWyBtZXRob2QgXSggZXZlbnQgKTtcbiAgfVxufTtcblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jb25maXJtKCB0cnVlLCAnb25sb2FkJyApO1xuICB0aGlzLnVuYmluZEV2ZW50cygpO1xufTtcblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY29uZmlybSggZmFsc2UsICdvbmVycm9yJyApO1xuICB0aGlzLnVuYmluZEV2ZW50cygpO1xufTtcblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS51bmJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wcm94eUltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcyApO1xuICB0aGlzLnByb3h5SW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xuICB0aGlzLmltZy5yZW1vdmVFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQmFja2dyb3VuZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBCYWNrZ3JvdW5kKCB1cmwsIGVsZW1lbnQgKSB7XG4gIHRoaXMudXJsID0gdXJsO1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xufVxuXG4vLyBpbmhlcml0IExvYWRpbmdJbWFnZSBwcm90b3R5cGVcbkJhY2tncm91bmQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggTG9hZGluZ0ltYWdlLnByb3RvdHlwZSApO1xuXG5CYWNrZ3JvdW5kLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xuICB0aGlzLmltZy5zcmMgPSB0aGlzLnVybDtcbiAgLy8gY2hlY2sgaWYgaW1hZ2UgaXMgYWxyZWFkeSBjb21wbGV0ZVxuICB2YXIgaXNDb21wbGV0ZSA9IHRoaXMuZ2V0SXNJbWFnZUNvbXBsZXRlKCk7XG4gIGlmICggaXNDb21wbGV0ZSApIHtcbiAgICB0aGlzLmNvbmZpcm0oIHRoaXMuaW1nLm5hdHVyYWxXaWR0aCAhPT0gMCwgJ25hdHVyYWxXaWR0aCcgKTtcbiAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICB9XG59O1xuXG5CYWNrZ3JvdW5kLnByb3RvdHlwZS51bmJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbn07XG5cbkJhY2tncm91bmQucHJvdG90eXBlLmNvbmZpcm0gPSBmdW5jdGlvbiggaXNMb2FkZWQsIG1lc3NhZ2UgKSB7XG4gIHRoaXMuaXNMb2FkZWQgPSBpc0xvYWRlZDtcbiAgdGhpcy5lbWl0RXZlbnQoICdwcm9ncmVzcycsIFsgdGhpcywgdGhpcy5lbGVtZW50LCBtZXNzYWdlIF0gKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGpRdWVyeSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5JbWFnZXNMb2FkZWQubWFrZUpRdWVyeVBsdWdpbiA9IGZ1bmN0aW9uKCBqUXVlcnkgKSB7XG4gIGpRdWVyeSA9IGpRdWVyeSB8fCB3aW5kb3cualF1ZXJ5O1xuICBpZiAoICFqUXVlcnkgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHNldCBsb2NhbCB2YXJpYWJsZVxuICAkID0galF1ZXJ5O1xuICAvLyAkKCkuaW1hZ2VzTG9hZGVkKClcbiAgJC5mbi5pbWFnZXNMb2FkZWQgPSBmdW5jdGlvbiggb3B0aW9ucywgY2FsbGJhY2sgKSB7XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IEltYWdlc0xvYWRlZCggdGhpcywgb3B0aW9ucywgY2FsbGJhY2sgKTtcbiAgICByZXR1cm4gaW5zdGFuY2UuanFEZWZlcnJlZC5wcm9taXNlKCAkKHRoaXMpICk7XG4gIH07XG59O1xuLy8gdHJ5IG1ha2luZyBwbHVnaW5cbkltYWdlc0xvYWRlZC5tYWtlSlF1ZXJ5UGx1Z2luKCk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gSW1hZ2VzTG9hZGVkO1xuXG59KTtcbiIsIi8qX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gXyBqcXVlcnkubWIuY29tcG9uZW50cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfIGZpbGU6IGpxdWVyeS5tYi5ZVFBsYXllci5zcmMuanMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyBsYXN0IG1vZGlmaWVkOiAwNS8wMS8xNiAxNy40MyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfIE9wZW4gTGFiIHMuci5sLiwgRmxvcmVuY2UgLSBJdGFseSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gZW1haWw6IG1hdHRlb0BvcGVuLWxhYi5jb20gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfIHNpdGU6IGh0dHA6Ly9wdXB1bnppLmNvbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyAgICAgICBodHRwOi8vb3Blbi1sYWIuY29tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gYmxvZzogaHR0cDovL3B1cHVuemkub3Blbi1sYWIuY29tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfIFEmQTogIGh0dHA6Ly9qcXVlcnkucHVwdW56aS5jb20gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gTGljZW5jZXM6IE1JVCwgR1BMICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfICAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyAgICBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLmh0bWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfIENvcHlyaWdodCAoYykgMjAwMS0yMDE2LiBNYXR0ZW8gQmljb2NjaGkgKFB1cHVuemkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cbnZhciB5dHAgPSB5dHAgfHwge307XG5cbmZ1bmN0aW9uIG9uWW91VHViZUlmcmFtZUFQSVJlYWR5KCkge1xuXHRpZiggeXRwLllUQVBJUmVhZHkgKSByZXR1cm47XG5cdHl0cC5ZVEFQSVJlYWR5ID0gdHJ1ZTtcblx0alF1ZXJ5KCBkb2N1bWVudCApLnRyaWdnZXIoIFwiWVRBUElSZWFkeVwiICk7XG59XG5cbnZhciBnZXRZVFBWaWRlb0lEID0gZnVuY3Rpb24oIHVybCApIHtcblx0dmFyIHZpZGVvSUQsIHBsYXlsaXN0SUQ7XG5cdGlmKCB1cmwuaW5kZXhPZiggXCJ5b3V0dS5iZVwiICkgPiAwICkge1xuXHRcdHZpZGVvSUQgPSB1cmwuc3Vic3RyKCB1cmwubGFzdEluZGV4T2YoIFwiL1wiICkgKyAxLCB1cmwubGVuZ3RoICk7XG5cdFx0cGxheWxpc3RJRCA9IHZpZGVvSUQuaW5kZXhPZiggXCI/bGlzdD1cIiApID4gMCA/IHZpZGVvSUQuc3Vic3RyKCB2aWRlb0lELmxhc3RJbmRleE9mKCBcIj1cIiApLCB2aWRlb0lELmxlbmd0aCApIDogbnVsbDtcblx0XHR2aWRlb0lEID0gcGxheWxpc3RJRCA/IHZpZGVvSUQuc3Vic3RyKCAwLCB2aWRlb0lELmxhc3RJbmRleE9mKCBcIj9cIiApICkgOiB2aWRlb0lEO1xuXHR9IGVsc2UgaWYoIHVybC5pbmRleE9mKCBcImh0dHBcIiApID4gLTEgKSB7XG5cdFx0Ly92aWRlb0lEID0gdXJsLm1hdGNoKCAvKFtcXC8mXXZcXC8oW14mI10qKSl8KFtcXFxcPyZddj0oW14mI10qKSkvIClbIDEgXTtcblx0XHR2aWRlb0lEID0gdXJsLm1hdGNoKCAvW1xcXFw/Jl12PShbXiYjXSopLyApWyAxIF07XG5cdFx0cGxheWxpc3RJRCA9IHVybC5pbmRleE9mKCBcImxpc3Q9XCIgKSA+IDAgPyB1cmwubWF0Y2goIC9bXFxcXD8mXWxpc3Q9KFteJiNdKikvIClbIDEgXSA6IG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0dmlkZW9JRCA9IHVybC5sZW5ndGggPiAxNSA/IG51bGwgOiB1cmw7XG5cdFx0cGxheWxpc3RJRCA9IHZpZGVvSUQgPyBudWxsIDogdXJsO1xuXHR9XG5cdHJldHVybiB7XG5cdFx0dmlkZW9JRDogdmlkZW9JRCxcblx0XHRwbGF5bGlzdElEOiBwbGF5bGlzdElEXG5cdH07XG59O1xuXG4oIGZ1bmN0aW9uKCBqUXVlcnksIHl0cCApIHtcblxuXHRqUXVlcnkubWJZVFBsYXllciA9IHtcblx0XHRuYW1lOiBcImpxdWVyeS5tYi5ZVFBsYXllclwiLFxuXHRcdHZlcnNpb246IFwiMy4wLjEwXCIsXG5cdFx0YnVpbGQ6IFwiNjA1N1wiLFxuXHRcdGF1dGhvcjogXCJNYXR0ZW8gQmljb2NjaGlcIixcblx0XHRhcGlLZXk6IFwiXCIsXG5cdFx0ZGVmYXVsdHM6IHtcblx0XHRcdGNvbnRhaW5tZW50OiBcImJvZHlcIixcblx0XHRcdHJhdGlvOiBcImF1dG9cIiwgLy8gXCJhdXRvXCIsIFwiMTYvOVwiLCBcIjQvM1wiXG5cdFx0XHR2aWRlb1VSTDogbnVsbCxcblx0XHRcdHBsYXlsaXN0VVJMOiBudWxsLFxuXHRcdFx0c3RhcnRBdDogMCxcblx0XHRcdHN0b3BBdDogMCxcblx0XHRcdGF1dG9QbGF5OiB0cnVlLFxuXHRcdFx0dm9sOiA1MCwgLy8gMSB0byAxMDBcblx0XHRcdGFkZFJhc3RlcjogZmFsc2UsXG5cdFx0XHRtYXNrOiBmYWxzZSxcblx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRxdWFsaXR5OiBcImRlZmF1bHRcIiwgLy9vciDigJxzbWFsbOKAnSwg4oCcbWVkaXVt4oCdLCDigJxsYXJnZeKAnSwg4oCcaGQ3MjDigJ0sIOKAnGhkMTA4MOKAnSwg4oCcaGlnaHJlc+KAnVxuXHRcdFx0bXV0ZTogZmFsc2UsXG5cdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0c2hvd0NvbnRyb2xzOiB0cnVlLFxuXHRcdFx0c2hvd0Fubm90YXRpb25zOiBmYWxzZSxcblx0XHRcdHNob3dZVExvZ286IHRydWUsXG5cdFx0XHRzdG9wTW92aWVPbkJsdXI6IHRydWUsXG5cdFx0XHRyZWFsZnVsbHNjcmVlbjogdHJ1ZSxcblx0XHRcdG1vYmlsZUZhbGxiYWNrSW1hZ2U6IG51bGwsXG5cdFx0XHRnYVRyYWNrOiB0cnVlLFxuXHRcdFx0b3B0aW1pemVEaXNwbGF5OiB0cnVlLFxuXHRcdFx0YWxpZ246IFwiY2VudGVyLGNlbnRlclwiLCAvLyB0b3AsYm90dG9tLGxlZnQscmlnaHRcblx0XHRcdG9uUmVhZHk6IGZ1bmN0aW9uKCBwbGF5ZXIgKSB7fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogIEBmb250ZmFjZSBpY29uc1xuXHRcdCAqICAqL1xuXHRcdGNvbnRyb2xzOiB7XG5cdFx0XHRwbGF5OiBcIlBcIixcblx0XHRcdHBhdXNlOiBcInBcIixcblx0XHRcdG11dGU6IFwiTVwiLFxuXHRcdFx0dW5tdXRlOiBcIkFcIixcblx0XHRcdG9ubHlZVDogXCJPXCIsXG5cdFx0XHRzaG93U2l0ZTogXCJSXCIsXG5cdFx0XHR5dExvZ286IFwiWVwiXG5cdFx0fSxcblx0XHRjb250cm9sQmFyOiBudWxsLFxuXHRcdGxvYWRpbmc6IG51bGwsXG5cdFx0bG9jYXRpb25Qcm90b2NvbDogXCJodHRwczpcIixcblx0XHRmaWx0ZXJzOiB7XG5cdFx0XHRncmF5c2NhbGU6IHtcblx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHRcdHVuaXQ6IFwiJVwiXG5cdFx0XHR9LFxuXHRcdFx0aHVlX3JvdGF0ZToge1xuXHRcdFx0XHR2YWx1ZTogMCxcblx0XHRcdFx0dW5pdDogXCJkZWdcIlxuXHRcdFx0fSxcblx0XHRcdGludmVydDoge1xuXHRcdFx0XHR2YWx1ZTogMCxcblx0XHRcdFx0dW5pdDogXCIlXCJcblx0XHRcdH0sXG5cdFx0XHRvcGFjaXR5OiB7XG5cdFx0XHRcdHZhbHVlOiAwLFxuXHRcdFx0XHR1bml0OiBcIiVcIlxuXHRcdFx0fSxcblx0XHRcdHNhdHVyYXRlOiB7XG5cdFx0XHRcdHZhbHVlOiAwLFxuXHRcdFx0XHR1bml0OiBcIiVcIlxuXHRcdFx0fSxcblx0XHRcdHNlcGlhOiB7XG5cdFx0XHRcdHZhbHVlOiAwLFxuXHRcdFx0XHR1bml0OiBcIiVcIlxuXHRcdFx0fSxcblx0XHRcdGJyaWdodG5lc3M6IHtcblx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHRcdHVuaXQ6IFwiJVwiXG5cdFx0XHR9LFxuXHRcdFx0Y29udHJhc3Q6IHtcblx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHRcdHVuaXQ6IFwiJVwiXG5cdFx0XHR9LFxuXHRcdFx0Ymx1cjoge1xuXHRcdFx0XHR2YWx1ZTogMCxcblx0XHRcdFx0dW5pdDogXCJweFwiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSBvcHRpb25zXG5cdFx0ICogQHJldHVybnMgW3BsYXllcnNdXG5cdFx0ICovXG5cdFx0YnVpbGRQbGF5ZXI6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBZVFBsYXllciA9IHRoaXM7XG5cdFx0XHRcdHZhciAkWVRQbGF5ZXIgPSBqUXVlcnkoIFlUUGxheWVyICk7XG5cdFx0XHRcdFlUUGxheWVyLmxvb3AgPSAwO1xuXHRcdFx0XHRZVFBsYXllci5vcHQgPSB7fTtcblx0XHRcdFx0WVRQbGF5ZXIuc3RhdGUgPSB7fTtcblx0XHRcdFx0WVRQbGF5ZXIuZmlsdGVycyA9IGpRdWVyeS5tYllUUGxheWVyLmZpbHRlcnM7XG5cdFx0XHRcdFlUUGxheWVyLmZpbHRlcnNFbmFibGVkID0gdHJ1ZTtcblx0XHRcdFx0WVRQbGF5ZXIuaWQgPSBZVFBsYXllci5pZCB8fCBcIllUUF9cIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdFx0XHQkWVRQbGF5ZXIuYWRkQ2xhc3MoIFwibWJfWVRQbGF5ZXJcIiApO1xuXHRcdFx0XHR2YXIgcHJvcGVydHkgPSAkWVRQbGF5ZXIuZGF0YSggXCJwcm9wZXJ0eVwiICkgJiYgdHlwZW9mICRZVFBsYXllci5kYXRhKCBcInByb3BlcnR5XCIgKSA9PSBcInN0cmluZ1wiID8gZXZhbCggJygnICsgJFlUUGxheWVyLmRhdGEoIFwicHJvcGVydHlcIiApICsgJyknICkgOiAkWVRQbGF5ZXIuZGF0YSggXCJwcm9wZXJ0eVwiICk7XG5cdFx0XHRcdGlmKCB0eXBlb2YgcHJvcGVydHkgIT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgcHJvcGVydHkudm9sICE9IFwidW5kZWZpbmVkXCIgKSBwcm9wZXJ0eS52b2wgPSBwcm9wZXJ0eS52b2wgPT09IDAgPyBwcm9wZXJ0eS52b2wgPSAxIDogcHJvcGVydHkudm9sO1xuXG5cdFx0XHRcdGpRdWVyeS5leHRlbmQoIFlUUGxheWVyLm9wdCwgalF1ZXJ5Lm1iWVRQbGF5ZXIuZGVmYXVsdHMsIG9wdGlvbnMsIHByb3BlcnR5ICk7XG5cblx0XHRcdFx0aWYoICFZVFBsYXllci5oYXNDaGFuZ2VkICkge1xuXHRcdFx0XHRcdFlUUGxheWVyLmRlZmF1bHRPcHQgPSB7fTtcblx0XHRcdFx0XHRqUXVlcnkuZXh0ZW5kKCBZVFBsYXllci5kZWZhdWx0T3B0LCBqUXVlcnkubWJZVFBsYXllci5kZWZhdWx0cywgb3B0aW9ucyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIFlUUGxheWVyLm9wdC5sb29wID09IFwidHJ1ZVwiIClcblx0XHRcdFx0XHRZVFBsYXllci5vcHQubG9vcCA9IDk5OTk7XG5cblx0XHRcdFx0WVRQbGF5ZXIuaXNSZXRpbmEgPSAoIHdpbmRvdy5yZXRpbmEgfHwgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxICk7XG5cdFx0XHRcdHZhciBpc0lmcmFtZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciBpc0lmciA9IGZhbHNlO1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRpZiggc2VsZi5sb2NhdGlvbi5ocmVmICE9IHRvcC5sb2NhdGlvbi5ocmVmICkgaXNJZnIgPSB0cnVlO1xuXHRcdFx0XHRcdH0gY2F0Y2goIGUgKSB7XG5cdFx0XHRcdFx0XHRpc0lmciA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBpc0lmcjtcblx0XHRcdFx0fTtcblx0XHRcdFx0WVRQbGF5ZXIuY2FuR29GdWxsU2NyZWVuID0gISggalF1ZXJ5LmJyb3dzZXIubXNpZSB8fCBqUXVlcnkuYnJvd3Nlci5vcGVyYSB8fCBpc0lmcmFtZSgpICk7XG5cdFx0XHRcdGlmKCAhWVRQbGF5ZXIuY2FuR29GdWxsU2NyZWVuICkgWVRQbGF5ZXIub3B0LnJlYWxmdWxsc2NyZWVuID0gZmFsc2U7XG5cdFx0XHRcdGlmKCAhJFlUUGxheWVyLmF0dHIoIFwiaWRcIiApICkgJFlUUGxheWVyLmF0dHIoIFwiaWRcIiwgXCJ2aWRlb19cIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICk7XG5cdFx0XHRcdHZhciBwbGF5ZXJJRCA9IFwibWJZVFBfXCIgKyBZVFBsYXllci5pZDtcblx0XHRcdFx0WVRQbGF5ZXIuaXNBbG9uZSA9IGZhbHNlO1xuXHRcdFx0XHRZVFBsYXllci5oYXNGb2N1cyA9IHRydWU7XG5cdFx0XHRcdFlUUGxheWVyLnZpZGVvSUQgPSB0aGlzLm9wdC52aWRlb1VSTCA/IGdldFlUUFZpZGVvSUQoIHRoaXMub3B0LnZpZGVvVVJMICkudmlkZW9JRCA6ICRZVFBsYXllci5hdHRyKCBcImhyZWZcIiApID8gZ2V0WVRQVmlkZW9JRCggJFlUUGxheWVyLmF0dHIoIFwiaHJlZlwiICkgKS52aWRlb0lEIDogZmFsc2U7XG5cdFx0XHRcdFlUUGxheWVyLnBsYXlsaXN0SUQgPSB0aGlzLm9wdC52aWRlb1VSTCA/IGdldFlUUFZpZGVvSUQoIHRoaXMub3B0LnZpZGVvVVJMICkucGxheWxpc3RJRCA6ICRZVFBsYXllci5hdHRyKCBcImhyZWZcIiApID8gZ2V0WVRQVmlkZW9JRCggJFlUUGxheWVyLmF0dHIoIFwiaHJlZlwiICkgKS5wbGF5bGlzdElEIDogZmFsc2U7XG5cdFx0XHRcdC8qXG5cdFx0XHRcdCBZVFBsYXllci52aWRlb0lEID0gdmlkZW9JRDtcblx0XHRcdFx0IFlUUGxheWVyLnBsYXlsaXN0SUQgPSBwbGF5bGlzdElEO1xuXHRcdFx0XHQgKi9cblx0XHRcdFx0WVRQbGF5ZXIub3B0LnNob3dBbm5vdGF0aW9ucyA9IFlUUGxheWVyLm9wdC5zaG93QW5ub3RhdGlvbnMgPyAnMCcgOiAnMyc7XG5cblx0XHRcdFx0dmFyIHBsYXllclZhcnMgPSB7XG5cdFx0XHRcdFx0J21vZGVzdGJyYW5kaW5nJzogMSxcblx0XHRcdFx0XHQnYXV0b3BsYXknOiAwLFxuXHRcdFx0XHRcdCdjb250cm9scyc6IDAsXG5cdFx0XHRcdFx0J3Nob3dpbmZvJzogMCxcblx0XHRcdFx0XHQncmVsJzogMCxcblx0XHRcdFx0XHQnZW5hYmxlanNhcGknOiAxLFxuXHRcdFx0XHRcdCd2ZXJzaW9uJzogMyxcblx0XHRcdFx0XHQncGxheWVyYXBpaWQnOiBwbGF5ZXJJRCxcblx0XHRcdFx0XHQnb3JpZ2luJzogJyonLFxuXHRcdFx0XHRcdCdhbGxvd2Z1bGxzY3JlZW4nOiB0cnVlLFxuXHRcdFx0XHRcdCd3bW9kZSc6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRcdFx0J2l2X2xvYWRfcG9saWN5JzogWVRQbGF5ZXIub3B0LnNob3dBbm5vdGF0aW9uc1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGlmKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndmlkZW8nICkuY2FuUGxheVR5cGUgKSBqUXVlcnkuZXh0ZW5kKCBwbGF5ZXJWYXJzLCB7XG5cdFx0XHRcdFx0J2h0bWw1JzogMVxuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdGlmKCBqUXVlcnkuYnJvd3Nlci5tc2llICYmIGpRdWVyeS5icm93c2VyLnZlcnNpb24gPCA5ICkgdGhpcy5vcHQub3BhY2l0eSA9IDE7XG5cblx0XHRcdFx0WVRQbGF5ZXIuaXNTZWxmID0gWVRQbGF5ZXIub3B0LmNvbnRhaW5tZW50ID09IFwic2VsZlwiO1xuXHRcdFx0XHRZVFBsYXllci5kZWZhdWx0T3B0LmNvbnRhaW5tZW50ID0gWVRQbGF5ZXIub3B0LmNvbnRhaW5tZW50ID0gWVRQbGF5ZXIub3B0LmNvbnRhaW5tZW50ID09IFwic2VsZlwiID8galF1ZXJ5KCB0aGlzICkgOiBqUXVlcnkoIFlUUGxheWVyLm9wdC5jb250YWlubWVudCApO1xuXHRcdFx0XHRZVFBsYXllci5pc0JhY2tncm91bmQgPSBZVFBsYXllci5vcHQuY29udGFpbm1lbnQuaXMoIFwiYm9keVwiICk7XG5cblx0XHRcdFx0aWYoIFlUUGxheWVyLmlzQmFja2dyb3VuZCAmJiB5dHAuYmFja2dyb3VuZElzSW5pdGVkIClcblx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0dmFyIGlzUGxheWVyID0gWVRQbGF5ZXIub3B0LmNvbnRhaW5tZW50LmlzKCBqUXVlcnkoIHRoaXMgKSApO1xuXG5cdFx0XHRcdFlUUGxheWVyLmNhblBsYXlPbk1vYmlsZSA9IGlzUGxheWVyICYmIGpRdWVyeSggdGhpcyApLmNoaWxkcmVuKCkubGVuZ3RoID09PSAwO1xuXHRcdFx0XHRZVFBsYXllci5pc1BsYXllciA9IGZhbHNlO1xuXG5cdFx0XHRcdGlmKCAhaXNQbGF5ZXIgKSB7XG5cdFx0XHRcdFx0JFlUUGxheWVyLmhpZGUoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRZVFBsYXllci5pc1BsYXllciA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgb3ZlcmxheSA9IGpRdWVyeSggXCI8ZGl2Lz5cIiApLmNzcygge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG5cdFx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdGhlaWdodDogXCIxMDAlXCJcblx0XHRcdFx0fSApLmFkZENsYXNzKCBcIllUUE92ZXJsYXlcIiApO1xuXG5cdFx0XHRcdGlmKCBZVFBsYXllci5pc1BsYXllciApIHtcblx0XHRcdFx0XHRvdmVybGF5Lm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JFlUUGxheWVyLllUUFRvZ2dsZVBsYXkoKTtcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciB3cmFwcGVyID0galF1ZXJ5KCBcIjxkaXYvPlwiICkuYWRkQ2xhc3MoIFwibWJZVFBfd3JhcHBlclwiICkuYXR0ciggXCJpZFwiLCBcIndyYXBwZXJfXCIgKyBwbGF5ZXJJRCApO1xuXHRcdFx0XHR3cmFwcGVyLmNzcygge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG5cdFx0XHRcdFx0ekluZGV4OiAwLFxuXHRcdFx0XHRcdG1pbldpZHRoOiBcIjEwMCVcIixcblx0XHRcdFx0XHRtaW5IZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRcdG92ZXJmbG93OiBcImhpZGRlblwiLFxuXHRcdFx0XHRcdG9wYWNpdHk6IDBcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdHZhciBwbGF5ZXJCb3ggPSBqUXVlcnkoIFwiPGRpdi8+XCIgKS5hdHRyKCBcImlkXCIsIHBsYXllcklEICkuYWRkQ2xhc3MoIFwicGxheWVyQm94XCIgKTtcblx0XHRcdFx0cGxheWVyQm94LmNzcygge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG5cdFx0XHRcdFx0ekluZGV4OiAwLFxuXHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdG92ZXJmbG93OiBcImhpZGRlblwiXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHR3cmFwcGVyLmFwcGVuZCggcGxheWVyQm94ICk7XG5cblx0XHRcdFx0WVRQbGF5ZXIub3B0LmNvbnRhaW5tZW50LmNoaWxkcmVuKCkubm90KCBcInNjcmlwdCwgc3R5bGVcIiApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS5jc3MoIFwicG9zaXRpb25cIiApID09IFwic3RhdGljXCIgKSBqUXVlcnkoIHRoaXMgKS5jc3MoIFwicG9zaXRpb25cIiwgXCJyZWxhdGl2ZVwiICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0aWYoIFlUUGxheWVyLmlzQmFja2dyb3VuZCApIHtcblx0XHRcdFx0XHRqUXVlcnkoIFwiYm9keVwiICkuY3NzKCB7XG5cdFx0XHRcdFx0XHRib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiXG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0d3JhcHBlci5jc3MoIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBcImZpeGVkXCIsXG5cdFx0XHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdFx0ekluZGV4OiAwXG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0JFlUUGxheWVyLmhpZGUoKTtcblxuXHRcdFx0XHR9IGVsc2UgaWYoIFlUUGxheWVyLm9wdC5jb250YWlubWVudC5jc3MoIFwicG9zaXRpb25cIiApID09IFwic3RhdGljXCIgKVxuXHRcdFx0XHRcdFlUUGxheWVyLm9wdC5jb250YWlubWVudC5jc3MoIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0WVRQbGF5ZXIub3B0LmNvbnRhaW5tZW50LnByZXBlbmQoIHdyYXBwZXIgKTtcblx0XHRcdFx0WVRQbGF5ZXIud3JhcHBlciA9IHdyYXBwZXI7XG5cblx0XHRcdFx0cGxheWVyQm94LmNzcygge1xuXHRcdFx0XHRcdG9wYWNpdHk6IDFcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdGlmKCAhalF1ZXJ5LmJyb3dzZXIubW9iaWxlICkge1xuXHRcdFx0XHRcdHBsYXllckJveC5hZnRlciggb3ZlcmxheSApO1xuXHRcdFx0XHRcdFlUUGxheWVyLm92ZXJsYXkgPSBvdmVybGF5O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoICFZVFBsYXllci5pc0JhY2tncm91bmQgKSB7XG5cdFx0XHRcdFx0b3ZlcmxheS5vbiggXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYoIFlUUGxheWVyLmNvbnRyb2xCYXIubGVuZ3RoIClcblx0XHRcdFx0XHRcdFx0WVRQbGF5ZXIuY29udHJvbEJhci5hZGRDbGFzcyggXCJ2aXNpYmxlXCIgKTtcblx0XHRcdFx0XHR9ICkub24oIFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmKCBZVFBsYXllci5jb250cm9sQmFyLmxlbmd0aCApXG5cdFx0XHRcdFx0XHRcdFlUUGxheWVyLmNvbnRyb2xCYXIucmVtb3ZlQ2xhc3MoIFwidmlzaWJsZVwiICk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoICF5dHAuWVRBUElSZWFkeSApIHtcblx0XHRcdFx0XHRqUXVlcnkoIFwiI1lUQVBJXCIgKS5yZW1vdmUoKTtcblx0XHRcdFx0XHR2YXIgdGFnID0galF1ZXJ5KCBcIjxzY3JpcHQ+PC9zY3JpcHQ+XCIgKS5hdHRyKCB7XG5cdFx0XHRcdFx0XHRcInNyY1wiOiBqUXVlcnkubWJZVFBsYXllci5sb2NhdGlvblByb3RvY29sICsgXCIvL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpP3Y9XCIgKyBqUXVlcnkubWJZVFBsYXllci52ZXJzaW9uLFxuXHRcdFx0XHRcdFx0XCJpZFwiOiBcIllUQVBJXCJcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0alF1ZXJ5KCBcImhlYWRcIiApLnByZXBlbmQoIHRhZyApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5KCBkb2N1bWVudCApLnRyaWdnZXIoIFwiWVRBUElSZWFkeVwiICk7XG5cdFx0XHRcdFx0fSwgMTAwIClcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCBqUXVlcnkuYnJvd3Nlci5tb2JpbGUgJiYgIVlUUGxheWVyLmNhblBsYXlPbk1vYmlsZSApIHtcblxuXHRcdFx0XHRcdGlmKCBZVFBsYXllci5vcHQubW9iaWxlRmFsbGJhY2tJbWFnZSApIHtcblx0XHRcdFx0XHRcdFlUUGxheWVyLm9wdC5jb250YWlubWVudC5jc3MoIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIFlUUGxheWVyLm9wdC5tb2JpbGVGYWxsYmFja0ltYWdlICsgXCIpXCIsXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCJcblx0XHRcdFx0XHRcdH0gKVxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHQkWVRQbGF5ZXIucmVtb3ZlKCk7XG5cdFx0XHRcdFx0alF1ZXJ5KCBkb2N1bWVudCApLnRyaWdnZXIoIFwiWVRQVW5hdmFpbGFibGVcIiApO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGpRdWVyeSggZG9jdW1lbnQgKS5vbiggXCJZVEFQSVJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKCAoIFlUUGxheWVyLmlzQmFja2dyb3VuZCAmJiB5dHAuYmFja2dyb3VuZElzSW5pdGVkICkgfHwgWVRQbGF5ZXIuaXNJbml0ICkgcmV0dXJuO1xuXHRcdFx0XHRcdGlmKCBZVFBsYXllci5pc0JhY2tncm91bmQgKSB7XG5cdFx0XHRcdFx0XHR5dHAuYmFja2dyb3VuZElzSW5pdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRZVFBsYXllci5vcHQuYXV0b1BsYXkgPSB0eXBlb2YgWVRQbGF5ZXIub3B0LmF1dG9QbGF5ID09IFwidW5kZWZpbmVkXCIgPyAoIFlUUGxheWVyLmlzQmFja2dyb3VuZCA/IHRydWUgOiBmYWxzZSApIDogWVRQbGF5ZXIub3B0LmF1dG9QbGF5O1xuXHRcdFx0XHRcdFlUUGxheWVyLm9wdC52b2wgPSBZVFBsYXllci5vcHQudm9sID8gWVRQbGF5ZXIub3B0LnZvbCA6IDEwMDtcblx0XHRcdFx0XHRqUXVlcnkubWJZVFBsYXllci5nZXREYXRhRnJvbUFQSSggWVRQbGF5ZXIgKTtcblx0XHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkub24oIFwiWVRQQ2hhbmdlZFwiLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdFx0aWYoIFlUUGxheWVyLmlzSW5pdCApXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdFx0WVRQbGF5ZXIuaXNJbml0ID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0Ly9pZiBpcyBtb2JpbGUgJiYgaXNQbGF5ZXIgZmFsbGJhY2sgdG8gdGhlIGRlZmF1bHQgWVQgcGxheWVyXG5cdFx0XHRcdFx0XHRpZiggalF1ZXJ5LmJyb3dzZXIubW9iaWxlICYmIFlUUGxheWVyLmNhblBsYXlPbk1vYmlsZSApIHtcblx0XHRcdFx0XHRcdFx0Ly8gVHJ5IHRvIGFkanVzdCB0aGUgcGxheWVyIGRpbWVudGlvblxuXHRcdFx0XHRcdFx0XHRpZiggWVRQbGF5ZXIub3B0LmNvbnRhaW5tZW50Lm91dGVyV2lkdGgoKSA+IGpRdWVyeSggd2luZG93ICkud2lkdGgoKSApIHtcblx0XHRcdFx0XHRcdFx0XHRZVFBsYXllci5vcHQuY29udGFpbm1lbnQuY3NzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtYXhXaWR0aDogXCIxMDAlXCJcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGggPSBZVFBsYXllci5vcHQuY29udGFpbm1lbnQub3V0ZXJXaWR0aCgpICogLjU2Mztcblx0XHRcdFx0XHRcdFx0XHRZVFBsYXllci5vcHQuY29udGFpbm1lbnQuY3NzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtYXhIZWlnaHQ6IGhcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0bmV3IFlULlBsYXllciggcGxheWVySUQsIHtcblx0XHRcdFx0XHRcdFx0XHR2aWRlb0lkOiBZVFBsYXllci52aWRlb0lELnRvU3RyaW5nKCksXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IGgsXG5cdFx0XHRcdFx0XHRcdFx0cGxheWVyVmFyczogcGxheWVyVmFycyxcblx0XHRcdFx0XHRcdFx0XHRldmVudHM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdCdvblJlYWR5JzogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRZVFBsYXllci5wbGF5ZXIgPSBldmVudC50YXJnZXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYXllckJveC5jc3MoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAxXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0WVRQbGF5ZXIud3JhcHBlci5jc3MoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAxXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRuZXcgWVQuUGxheWVyKCBwbGF5ZXJJRCwge1xuXHRcdFx0XHRcdFx0XHR2aWRlb0lkOiBZVFBsYXllci52aWRlb0lELnRvU3RyaW5nKCksXG5cdFx0XHRcdFx0XHRcdHBsYXllclZhcnM6IHBsYXllclZhcnMsXG5cdFx0XHRcdFx0XHRcdGV2ZW50czoge1xuXHRcdFx0XHRcdFx0XHRcdCdvblJlYWR5JzogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0WVRQbGF5ZXIucGxheWVyID0gZXZlbnQudGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoIFlUUGxheWVyLmlzUmVhZHkgKSByZXR1cm47XG5cdFx0XHRcdFx0XHRcdFx0XHRZVFBsYXllci5pc1JlYWR5ID0gWVRQbGF5ZXIuaXNQbGF5ZXIgJiYgIVlUUGxheWVyLm9wdC5hdXRvUGxheSA/IGZhbHNlIDogdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFlUUGxheWVyLnBsYXllckVsID0gWVRQbGF5ZXIucGxheWVyLmdldElmcmFtZSgpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyLnBsYXllckVsICkudW5zZWxlY3RhYmxlKCk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdCRZVFBsYXllci5vcHRpbWl6ZURpc3BsYXkoKTtcblx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggd2luZG93ICkub2ZmKCBcInJlc2l6ZS5ZVFBfXCIgKyBZVFBsYXllci5pZCApLm9uKCBcInJlc2l6ZS5ZVFBfXCIgKyBZVFBsYXllci5pZCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRZVFBsYXllci5vcHRpbWl6ZURpc3BsYXkoKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0alF1ZXJ5Lm1iWVRQbGF5ZXIuY2hlY2tGb3JTdGF0ZSggWVRQbGF5ZXIgKTtcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdC8qKlxuXHRcdFx0XHRcdFx0XHRcdCAqXG5cdFx0XHRcdFx0XHRcdFx0ICogQHBhcmFtIGV2ZW50XG5cdFx0XHRcdFx0XHRcdFx0ICpcblx0XHRcdFx0XHRcdFx0XHQgKiAtMSAodW5zdGFydGVkKVxuXHRcdFx0XHRcdFx0XHRcdCAqIDAgKGVuZGVkKVxuXHRcdFx0XHRcdFx0XHRcdCAqIDEgKHBsYXlpbmcpXG5cdFx0XHRcdFx0XHRcdFx0ICogMiAocGF1c2VkKVxuXHRcdFx0XHRcdFx0XHRcdCAqIDMgKGJ1ZmZlcmluZylcblx0XHRcdFx0XHRcdFx0XHQgKiA1ICh2aWRlbyBjdWVkKS5cblx0XHRcdFx0XHRcdFx0XHQgKlxuXHRcdFx0XHRcdFx0XHRcdCAqXG5cdFx0XHRcdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0XHRcdFx0J29uU3RhdGVDaGFuZ2UnOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiggdHlwZW9mIGV2ZW50LnRhcmdldC5nZXRQbGF5ZXJTdGF0ZSAhPSBcImZ1bmN0aW9uXCIgKSByZXR1cm47XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgc3RhdGUgPSBldmVudC50YXJnZXQuZ2V0UGxheWVyU3RhdGUoKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0aWYoIFlUUGxheWVyLnByZXZlbnRUcmlnZ2VyICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRZVFBsYXllci5wcmV2ZW50VHJpZ2dlciA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0Lypcblx0XHRcdFx0XHRcdFx0XHRcdCBpZiggWVRQbGF5ZXIuc3RhdGUgPT0gc3RhdGUgKVxuXHRcdFx0XHRcdFx0XHRcdFx0IHJldHVybjtcblx0XHRcdFx0XHRcdFx0XHRcdCAqL1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRZVFBsYXllci5zdGF0ZSA9IHN0YXRlO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgZXZlbnRUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdFx0c3dpdGNoKCBzdGF0ZSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAtMTogLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB1bnN0YXJ0ZWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudFR5cGUgPSBcIllUUFVuc3RhcnRlZFwiO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIDA6IC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGVuZGVkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnRUeXBlID0gXCJZVFBFbmRcIjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAxOiAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwbGF5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnRUeXBlID0gXCJZVFBQbGF5XCI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYoIFlUUGxheWVyLmNvbnRyb2xCYXIubGVuZ3RoIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFlUUGxheWVyLmNvbnRyb2xCYXIuZmluZCggXCIubWJfWVRQUGxheXBhdXNlXCIgKS5odG1sKCBqUXVlcnkubWJZVFBsYXllci5jb250cm9scy5wYXVzZSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgX2dhcSAhPSBcInVuZGVmaW5lZFwiICYmIGV2YWwoIFlUUGxheWVyLm9wdC5nYVRyYWNrICkgKSBfZ2FxLnB1c2goIFsgJ190cmFja0V2ZW50JywgJ1lUUGxheWVyJywgJ1BsYXknLCAoIFlUUGxheWVyLmhhc0RhdGEgPyBZVFBsYXllci52aWRlb0RhdGEudGl0bGUgOiBZVFBsYXllci52aWRlb0lELnRvU3RyaW5nKCkgKSBdICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYoIHR5cGVvZiBnYSAhPSBcInVuZGVmaW5lZFwiICYmIGV2YWwoIFlUUGxheWVyLm9wdC5nYVRyYWNrICkgKSBnYSggJ3NlbmQnLCAnZXZlbnQnLCAnWVRQbGF5ZXInLCAncGxheScsICggWVRQbGF5ZXIuaGFzRGF0YSA/IFlUUGxheWVyLnZpZGVvRGF0YS50aXRsZSA6IFlUUGxheWVyLnZpZGVvSUQudG9TdHJpbmcoKSApICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgMjogLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcGF1c2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudFR5cGUgPSBcIllUUFBhdXNlXCI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYoIFlUUGxheWVyLmNvbnRyb2xCYXIubGVuZ3RoIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFlUUGxheWVyLmNvbnRyb2xCYXIuZmluZCggXCIubWJfWVRQUGxheXBhdXNlXCIgKS5odG1sKCBqUXVlcnkubWJZVFBsYXllci5jb250cm9scy5wbGF5ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgMzogLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYnVmZmVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0WVRQbGF5ZXIucGxheWVyLnNldFBsYXliYWNrUXVhbGl0eSggWVRQbGF5ZXIub3B0LnF1YWxpdHkgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudFR5cGUgPSBcIllUUEJ1ZmZlcmluZ1wiO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmKCBZVFBsYXllci5jb250cm9sQmFyLmxlbmd0aCApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRZVFBsYXllci5jb250cm9sQmFyLmZpbmQoIFwiLm1iX1lUUFBsYXlwYXVzZVwiICkuaHRtbCggalF1ZXJ5Lm1iWVRQbGF5ZXIuY29udHJvbHMucGxheSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIDU6IC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGN1ZWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudFR5cGUgPSBcIllUUEN1ZWRcIjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gVHJpZ2dlciBzdGF0ZSBldmVudHNcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBZVFBFdmVudCA9IGpRdWVyeS5FdmVudCggZXZlbnRUeXBlICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRZVFBFdmVudC50aW1lID0gWVRQbGF5ZXIuY3VycmVudFRpbWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiggWVRQbGF5ZXIuY2FuVHJpZ2dlciApIGpRdWVyeSggWVRQbGF5ZXIgKS50cmlnZ2VyKCBZVFBFdmVudCApO1xuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0XHRcdFx0ICpcblx0XHRcdFx0XHRcdFx0XHQgKiBAcGFyYW0gZVxuXHRcdFx0XHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdFx0XHRcdCdvblBsYXliYWNrUXVhbGl0eUNoYW5nZSc6IGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHF1YWxpdHkgPSBlLnRhcmdldC5nZXRQbGF5YmFja1F1YWxpdHkoKTtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBZVFBRdWFsaXR5Q2hhbmdlID0galF1ZXJ5LkV2ZW50KCBcIllUUFF1YWxpdHlDaGFuZ2VcIiApO1xuXHRcdFx0XHRcdFx0XHRcdFx0WVRQUXVhbGl0eUNoYW5nZS5xdWFsaXR5ID0gcXVhbGl0eTtcblx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggWVRQbGF5ZXIgKS50cmlnZ2VyKCBZVFBRdWFsaXR5Q2hhbmdlICk7XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHQvKipcblx0XHRcdFx0XHRcdFx0XHQgKlxuXHRcdFx0XHRcdFx0XHRcdCAqIEBwYXJhbSBlcnJcblx0XHRcdFx0XHRcdFx0XHQgKi9cblx0XHRcdFx0XHRcdFx0XHQnb25FcnJvcic6IGZ1bmN0aW9uKCBlcnIgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmKCBlcnIuZGF0YSA9PSAxNTAgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCBcIkVtYmVkZGluZyB0aGlzIHZpZGVvIGlzIHJlc3RyaWN0ZWQgYnkgWW91dHViZS5cIiApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiggWVRQbGF5ZXIuaXNQbGF5TGlzdCApIGpRdWVyeSggWVRQbGF5ZXIgKS5wbGF5TmV4dCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiggZXJyLmRhdGEgPT0gMiAmJiBZVFBsYXllci5pc1BsYXlMaXN0IClcblx0XHRcdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCBZVFBsYXllciApLnBsYXlOZXh0KCk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgWVRQbGF5ZXIub3B0Lm9uRXJyb3IgPT0gXCJmdW5jdGlvblwiIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0WVRQbGF5ZXIub3B0Lm9uRXJyb3IoICRZVFBsYXllciwgZXJyICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0JFlUUGxheWVyLm9mZiggXCJZVFBUaW1lLm1hc2tcIiApO1xuXG5cdFx0XHRcdGpRdWVyeS5tYllUUGxheWVyLmFwcGx5TWFzayggWVRQbGF5ZXIgKTtcblxuXHRcdFx0fSApO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gWVRQbGF5ZXJcblx0XHQgKi9cblx0XHRnZXREYXRhRnJvbUFQSTogZnVuY3Rpb24oIFlUUGxheWVyICkge1xuXHRcdFx0WVRQbGF5ZXIudmlkZW9EYXRhID0galF1ZXJ5Lm1iU3RvcmFnZS5nZXQoIFwiWVRQbGF5ZXJfZGF0YV9cIiArIFlUUGxheWVyLnZpZGVvSUQgKTtcblx0XHRcdGpRdWVyeSggWVRQbGF5ZXIgKS5vZmYoIFwiWVRQRGF0YS5ZVFBsYXllclwiICkub24oIFwiWVRQRGF0YS5ZVFBsYXllclwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoIFlUUGxheWVyLmhhc0RhdGEgKSB7XG5cblx0XHRcdFx0XHRpZiggWVRQbGF5ZXIuaXNQbGF5ZXIgJiYgIVlUUGxheWVyLm9wdC5hdXRvUGxheSApIHtcblx0XHRcdFx0XHRcdHZhciBiZ25kVVJMID0gWVRQbGF5ZXIudmlkZW9EYXRhLnRodW1iX21heCB8fCBZVFBsYXllci52aWRlb0RhdGEudGh1bWJfaGlnaCB8fCBZVFBsYXllci52aWRlb0RhdGEudGh1bWJfbWVkaXVtO1xuXHRcdFx0XHRcdFx0WVRQbGF5ZXIub3B0LmNvbnRhaW5tZW50LmNzcygge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMC41KSB1cmwoXCIgKyBiZ25kVVJMICsgXCIpIGNlbnRlciBjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIlxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0WVRQbGF5ZXIub3B0LmJhY2tncm91bmRVcmwgPSBiZ25kVVJMO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHRpZiggWVRQbGF5ZXIudmlkZW9EYXRhICkge1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFlUUGxheWVyLm9wdC5yYXRpbyA9IFlUUGxheWVyLm9wdC5yYXRpbyA9PSBcImF1dG9cIiA/IFwiMTYvOVwiIDogWVRQbGF5ZXIub3B0LnJhdGlvO1xuXHRcdFx0XHRcdFlUUGxheWVyLmRhdGFSZWNlaXZlZCA9IHRydWU7XG5cdFx0XHRcdFx0alF1ZXJ5KCBZVFBsYXllciApLnRyaWdnZXIoIFwiWVRQQ2hhbmdlZFwiICk7XG5cdFx0XHRcdFx0dmFyIFlUUERhdGEgPSBqUXVlcnkuRXZlbnQoIFwiWVRQRGF0YVwiICk7XG5cdFx0XHRcdFx0WVRQRGF0YS5wcm9wID0ge307XG5cdFx0XHRcdFx0Zm9yKCB2YXIgeCBpbiBZVFBsYXllci52aWRlb0RhdGEgKSBZVFBEYXRhLnByb3BbIHggXSA9IFlUUGxheWVyLnZpZGVvRGF0YVsgeCBdO1xuXHRcdFx0XHRcdGpRdWVyeSggWVRQbGF5ZXIgKS50cmlnZ2VyKCBZVFBEYXRhICk7XG5cdFx0XHRcdH0sIDUwMCApO1xuXG5cdFx0XHRcdFlUUGxheWVyLmhhc0RhdGEgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmKCBqUXVlcnkubWJZVFBsYXllci5hcGlLZXkgKSB7XG5cdFx0XHRcdC8vIEdldCB2aWRlbyBpbmZvIGZyb20gQVBJMyAobmVlZHMgYXBpIGtleSlcblx0XHRcdFx0Ly8gc25pcHBldCxwbGF5ZXIsY29udGVudERldGFpbHMsc3RhdGlzdGljcyxzdGF0dXNcblx0XHRcdFx0alF1ZXJ5LmdldEpTT04oIGpRdWVyeS5tYllUUGxheWVyLmxvY2F0aW9uUHJvdG9jb2wgKyBcIi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvdmlkZW9zP2lkPVwiICsgWVRQbGF5ZXIudmlkZW9JRCArIFwiJmtleT1cIiArIGpRdWVyeS5tYllUUGxheWVyLmFwaUtleSArIFwiJnBhcnQ9c25pcHBldFwiLCBmdW5jdGlvbiggZGF0YSApIHtcblx0XHRcdFx0XHRZVFBsYXllci5kYXRhUmVjZWl2ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGpRdWVyeSggWVRQbGF5ZXIgKS50cmlnZ2VyKCBcIllUUENoYW5nZWRcIiApO1xuXG5cdFx0XHRcdFx0ZnVuY3Rpb24gcGFyc2VZVFBsYXllcl9kYXRhKCBkYXRhICkge1xuXHRcdFx0XHRcdFx0WVRQbGF5ZXIudmlkZW9EYXRhID0ge307XG5cdFx0XHRcdFx0XHRZVFBsYXllci52aWRlb0RhdGEuaWQgPSBZVFBsYXllci52aWRlb0lEO1xuXHRcdFx0XHRcdFx0WVRQbGF5ZXIudmlkZW9EYXRhLmNoYW5uZWxUaXRsZSA9IGRhdGEuY2hhbm5lbFRpdGxlO1xuXHRcdFx0XHRcdFx0WVRQbGF5ZXIudmlkZW9EYXRhLnRpdGxlID0gZGF0YS50aXRsZTtcblx0XHRcdFx0XHRcdFlUUGxheWVyLnZpZGVvRGF0YS5kZXNjcmlwdGlvbiA9IGRhdGEuZGVzY3JpcHRpb24ubGVuZ3RoIDwgNDAwID8gZGF0YS5kZXNjcmlwdGlvbiA6IGRhdGEuZGVzY3JpcHRpb24uc3Vic3RyaW5nKCAwLCA0MDAgKSArIFwiIC4uLlwiO1xuXHRcdFx0XHRcdFx0WVRQbGF5ZXIudmlkZW9EYXRhLmFzcGVjdHJhdGlvID0gWVRQbGF5ZXIub3B0LnJhdGlvID09IFwiYXV0b1wiID8gXCIxNi85XCIgOiBZVFBsYXllci5vcHQucmF0aW87XG5cdFx0XHRcdFx0XHRZVFBsYXllci5vcHQucmF0aW8gPSBZVFBsYXllci52aWRlb0RhdGEuYXNwZWN0cmF0aW87XG5cdFx0XHRcdFx0XHRZVFBsYXllci52aWRlb0RhdGEudGh1bWJfbWF4ID0gZGF0YS50aHVtYm5haWxzLm1heHJlcyA/IGRhdGEudGh1bWJuYWlscy5tYXhyZXMudXJsIDogbnVsbDtcblx0XHRcdFx0XHRcdFlUUGxheWVyLnZpZGVvRGF0YS50aHVtYl9oaWdoID0gZGF0YS50aHVtYm5haWxzLmhpZ2ggPyBkYXRhLnRodW1ibmFpbHMuaGlnaC51cmwgOiBudWxsO1xuXHRcdFx0XHRcdFx0WVRQbGF5ZXIudmlkZW9EYXRhLnRodW1iX21lZGl1bSA9IGRhdGEudGh1bWJuYWlscy5tZWRpdW0gPyBkYXRhLnRodW1ibmFpbHMubWVkaXVtLnVybCA6IG51bGw7XG5cdFx0XHRcdFx0XHRqUXVlcnkubWJTdG9yYWdlLnNldCggXCJZVFBsYXllcl9kYXRhX1wiICsgWVRQbGF5ZXIudmlkZW9JRCwgWVRQbGF5ZXIudmlkZW9EYXRhICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cGFyc2VZVFBsYXllcl9kYXRhKCBkYXRhLml0ZW1zWyAwIF0uc25pcHBldCApO1xuXHRcdFx0XHRcdFlUUGxheWVyLmhhc0RhdGEgPSB0cnVlO1xuXHRcdFx0XHRcdHZhciBZVFBEYXRhID0galF1ZXJ5LkV2ZW50KCBcIllUUERhdGFcIiApO1xuXHRcdFx0XHRcdFlUUERhdGEucHJvcCA9IHt9O1xuXHRcdFx0XHRcdGZvciggdmFyIHggaW4gWVRQbGF5ZXIudmlkZW9EYXRhICkgWVRQRGF0YS5wcm9wWyB4IF0gPSBZVFBsYXllci52aWRlb0RhdGFbIHggXTtcblx0XHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkudHJpZ2dlciggWVRQRGF0YSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkudHJpZ2dlciggXCJZVFBDaGFuZ2VkXCIgKTtcblx0XHRcdFx0fSwgNTAgKTtcblx0XHRcdFx0aWYoIFlUUGxheWVyLmlzUGxheWVyICYmICFZVFBsYXllci5vcHQuYXV0b1BsYXkgKSB7XG5cdFx0XHRcdFx0dmFyIGJnbmRVUkwgPSBqUXVlcnkubWJZVFBsYXllci5sb2NhdGlvblByb3RvY29sICsgXCIvL2kueXRpbWcuY29tL3ZpL1wiICsgWVRQbGF5ZXIudmlkZW9JRCArIFwiL2hxZGVmYXVsdC5qcGdcIjtcblx0XHRcdFx0XHRZVFBsYXllci5vcHQuY29udGFpbm1lbnQuY3NzKCB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMC41KSB1cmwoXCIgKyBiZ25kVVJMICsgXCIpIGNlbnRlciBjZW50ZXJcIixcblx0XHRcdFx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0WVRQbGF5ZXIub3B0LmJhY2tncm91bmRVcmwgPSBiZ25kVVJMO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFlUUGxheWVyLnZpZGVvRGF0YSA9IG51bGw7XG5cdFx0XHRcdFlUUGxheWVyLm9wdC5yYXRpbyA9IFlUUGxheWVyLm9wdC5yYXRpbyA9PSBcImF1dG9cIiA/IFwiMTYvOVwiIDogWVRQbGF5ZXIub3B0LnJhdGlvO1xuXHRcdFx0fVxuXHRcdFx0aWYoIFlUUGxheWVyLmlzUGxheWVyICYmICFZVFBsYXllci5vcHQuYXV0b1BsYXkgJiYgIWpRdWVyeS5icm93c2VyLm1vYmlsZSApIHtcblx0XHRcdFx0WVRQbGF5ZXIubG9hZGluZyA9IGpRdWVyeSggXCI8ZGl2Lz5cIiApLmFkZENsYXNzKCBcImxvYWRpbmdcIiApLmh0bWwoIFwiTG9hZGluZ1wiICkuaGlkZSgpO1xuXHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuYXBwZW5kKCBZVFBsYXllci5sb2FkaW5nICk7XG5cdFx0XHRcdFlUUGxheWVyLmxvYWRpbmcuZmFkZUluKCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqL1xuXHRcdHJlbW92ZVN0b3JlZERhdGE6IGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5Lm1iU3RvcmFnZS5yZW1vdmUoKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMgeyp8WVRQbGF5ZXIudmlkZW9EYXRhfVxuXHRcdCAqL1xuXHRcdGdldFZpZGVvRGF0YTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgWVRQbGF5ZXIgPSB0aGlzLmdldCggMCApO1xuXHRcdFx0cmV0dXJuIFlUUGxheWVyLnZpZGVvRGF0YTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMgeyp8WVRQbGF5ZXIudmlkZW9JRHxib29sZWFufVxuXHRcdCAqL1xuXHRcdGdldFZpZGVvSUQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIFlUUGxheWVyID0gdGhpcy5nZXQoIDAgKTtcblx0XHRcdHJldHVybiBZVFBsYXllci52aWRlb0lEIHx8IGZhbHNlO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gcXVhbGl0eVxuXHRcdCAqL1xuXHRcdHNldFZpZGVvUXVhbGl0eTogZnVuY3Rpb24oIHF1YWxpdHkgKSB7XG5cdFx0XHR2YXIgWVRQbGF5ZXIgPSB0aGlzLmdldCggMCApO1xuXHRcdFx0Ly9pZiggIWpRdWVyeS5icm93c2VyLmNocm9tZSApXG5cdFx0XHRZVFBsYXllci5wbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KCBxdWFsaXR5ICk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB2aWRlb3Ncblx0XHQgKiBAcGFyYW0gc2h1ZmZsZVxuXHRcdCAqIEBwYXJhbSBjYWxsYmFja1xuXHRcdCAqIEBwYXJhbSBsb29wTGlzdFxuXHRcdCAqIEByZXR1cm5zIHtqUXVlcnkubWJZVFBsYXllcn1cblx0XHQgKi9cblx0XHRwbGF5bGlzdDogZnVuY3Rpb24oIHZpZGVvcywgc2h1ZmZsZSwgY2FsbGJhY2ssIGxvb3BMaXN0ICkge1xuXHRcdFx0dmFyICRZVFBsYXllciA9IHRoaXM7XG5cdFx0XHR2YXIgWVRQbGF5ZXIgPSAkWVRQbGF5ZXIuZ2V0KCAwICk7XG5cdFx0XHRZVFBsYXllci5pc1BsYXlMaXN0ID0gdHJ1ZTtcblx0XHRcdGlmKCBzaHVmZmxlICkgdmlkZW9zID0galF1ZXJ5LnNodWZmbGUoIHZpZGVvcyApO1xuXHRcdFx0aWYoICFZVFBsYXllci52aWRlb0lEICkge1xuXHRcdFx0XHRZVFBsYXllci52aWRlb3MgPSB2aWRlb3M7XG5cdFx0XHRcdFlUUGxheWVyLnZpZGVvQ291bnRlciA9IDA7XG5cdFx0XHRcdFlUUGxheWVyLnZpZGVvTGVuZ3RoID0gdmlkZW9zLmxlbmd0aDtcblx0XHRcdFx0alF1ZXJ5KCBZVFBsYXllciApLmRhdGEoIFwicHJvcGVydHlcIiwgdmlkZW9zWyAwIF0gKTtcblx0XHRcdFx0alF1ZXJ5KCBZVFBsYXllciApLm1iX1lUUGxheWVyKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiggdHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIiApIGpRdWVyeSggWVRQbGF5ZXIgKS5vbmUoIFwiWVRQQ2hhbmdlZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y2FsbGJhY2soIFlUUGxheWVyICk7XG5cdFx0XHR9ICk7XG5cdFx0XHRqUXVlcnkoIFlUUGxheWVyICkub24oIFwiWVRQRW5kXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsb29wTGlzdCA9IHR5cGVvZiBsb29wTGlzdCA9PSBcInVuZGVmaW5lZFwiID8gdHJ1ZSA6IGxvb3BMaXN0O1xuXHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkucGxheU5leHQoIGxvb3BMaXN0ICk7XG5cdFx0XHR9ICk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge2pRdWVyeS5tYllUUGxheWVyfVxuXHRcdCAqL1xuXHRcdHBsYXlOZXh0OiBmdW5jdGlvbiggbG9vcExpc3QgKSB7XG5cdFx0XHR2YXIgWVRQbGF5ZXIgPSB0aGlzLmdldCggMCApO1xuXG5cdFx0XHRpZiggWVRQbGF5ZXIuY2hlY2tGb3JTdGFydEF0ICkge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQoIFlUUGxheWVyLmNoZWNrRm9yU3RhcnRBdCApO1xuXHRcdFx0XHRjbGVhckludGVydmFsKCBZVFBsYXllci5nZXRTdGF0ZSApO1xuXHRcdFx0fVxuXG5cdFx0XHRZVFBsYXllci52aWRlb0NvdW50ZXIrKztcblx0XHRcdGlmKCBZVFBsYXllci52aWRlb0NvdW50ZXIgPj0gWVRQbGF5ZXIudmlkZW9MZW5ndGggJiYgbG9vcExpc3QgKVxuXHRcdFx0XHRZVFBsYXllci52aWRlb0NvdW50ZXIgPSAwO1xuXG5cdFx0XHRpZiggWVRQbGF5ZXIudmlkZW9Db3VudGVyIDwgWVRQbGF5ZXIudmlkZW9MZW5ndGggKVxuXHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuY2hhbmdlTW92aWUoIFlUUGxheWVyLnZpZGVvc1sgWVRQbGF5ZXIudmlkZW9Db3VudGVyIF0gKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0WVRQbGF5ZXIudmlkZW9Db3VudGVyLS07XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7alF1ZXJ5Lm1iWVRQbGF5ZXJ9XG5cdFx0ICovXG5cdFx0cGxheVByZXY6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIFlUUGxheWVyID0gdGhpcy5nZXQoIDAgKTtcblxuXHRcdFx0aWYoIFlUUGxheWVyLmNoZWNrRm9yU3RhcnRBdCApIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCggWVRQbGF5ZXIuY2hlY2tGb3JTdGFydEF0ICk7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoIFlUUGxheWVyLmdldFN0YXRlICk7XG5cdFx0XHR9XG5cblx0XHRcdFlUUGxheWVyLnZpZGVvQ291bnRlci0tO1xuXHRcdFx0aWYoIFlUUGxheWVyLnZpZGVvQ291bnRlciA8IDAgKSBZVFBsYXllci52aWRlb0NvdW50ZXIgPSBZVFBsYXllci52aWRlb0xlbmd0aCAtIDE7XG5cdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuY2hhbmdlTW92aWUoIFlUUGxheWVyLnZpZGVvc1sgWVRQbGF5ZXIudmlkZW9Db3VudGVyIF0gKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7alF1ZXJ5Lm1iWVRQbGF5ZXJ9XG5cdFx0ICovXG5cdFx0cGxheUluZGV4OiBmdW5jdGlvbiggaWR4ICkge1xuXHRcdFx0dmFyIFlUUGxheWVyID0gdGhpcy5nZXQoIDAgKTtcblxuXHRcdFx0aWR4ID0gaWR4IC0gMTtcblxuXHRcdFx0aWYoIFlUUGxheWVyLmNoZWNrRm9yU3RhcnRBdCApIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCggWVRQbGF5ZXIuY2hlY2tGb3JTdGFydEF0ICk7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoIFlUUGxheWVyLmdldFN0YXRlICk7XG5cdFx0XHR9XG5cblx0XHRcdFlUUGxheWVyLnZpZGVvQ291bnRlciA9IGlkeDtcblx0XHRcdGlmKCBZVFBsYXllci52aWRlb0NvdW50ZXIgPj0gWVRQbGF5ZXIudmlkZW9MZW5ndGggLSAxIClcblx0XHRcdFx0WVRQbGF5ZXIudmlkZW9Db3VudGVyID0gWVRQbGF5ZXIudmlkZW9MZW5ndGggLSAxO1xuXHRcdFx0alF1ZXJ5KCBZVFBsYXllciApLmNoYW5nZU1vdmllKCBZVFBsYXllci52aWRlb3NbIFlUUGxheWVyLnZpZGVvQ291bnRlciBdICk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIG9wdFxuXHRcdCAqL1xuXHRcdGNoYW5nZU1vdmllOiBmdW5jdGlvbiggb3B0ICkge1xuXG5cdFx0XHR2YXIgJFlUUGxheWVyID0gdGhpcztcblx0XHRcdHZhciBZVFBsYXllciA9ICRZVFBsYXllci5nZXQoIDAgKTtcblx0XHRcdFlUUGxheWVyLm9wdC5zdGFydEF0ID0gMDtcblx0XHRcdFlUUGxheWVyLm9wdC5zdG9wQXQgPSAwO1xuXHRcdFx0WVRQbGF5ZXIub3B0Lm1hc2sgPSBmYWxzZTtcblx0XHRcdFlUUGxheWVyLm9wdC5tdXRlID0gdHJ1ZTtcblx0XHRcdFlUUGxheWVyLmhhc0RhdGEgPSBmYWxzZTtcblx0XHRcdFlUUGxheWVyLmhhc0NoYW5nZWQgPSB0cnVlO1xuXHRcdFx0WVRQbGF5ZXIucGxheWVyLmxvb3BUaW1lID0gdW5kZWZpbmVkO1xuXG5cdFx0XHRpZiggb3B0IClcblx0XHRcdFx0alF1ZXJ5LmV4dGVuZCggWVRQbGF5ZXIub3B0LCBvcHQgKTsgLy9ZVFBsYXllci5kZWZhdWx0T3B0LFxuXHRcdFx0WVRQbGF5ZXIudmlkZW9JRCA9IGdldFlUUFZpZGVvSUQoIFlUUGxheWVyLm9wdC52aWRlb1VSTCApLnZpZGVvSUQ7XG5cblx0XHRcdGlmKCBZVFBsYXllci5vcHQubG9vcCA9PSBcInRydWVcIiApXG5cdFx0XHRcdFlUUGxheWVyLm9wdC5sb29wID0gOTk5OTtcblxuXHRcdFx0alF1ZXJ5KCBZVFBsYXllci5wbGF5ZXJFbCApLkNTU0FuaW1hdGUoIHtcblx0XHRcdFx0b3BhY2l0eTogMFxuXHRcdFx0fSwgMjAwLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHR2YXIgWVRQQ2hhbmdlTW92aWUgPSBqUXVlcnkuRXZlbnQoIFwiWVRQQ2hhbmdlTW92aWVcIiApO1xuXHRcdFx0XHRZVFBDaGFuZ2VNb3ZpZS50aW1lID0gWVRQbGF5ZXIuY3VycmVudFRpbWU7XG5cdFx0XHRcdFlUUENoYW5nZU1vdmllLnZpZGVvSWQgPSBZVFBsYXllci52aWRlb0lEO1xuXHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkudHJpZ2dlciggWVRQQ2hhbmdlTW92aWUgKTtcblxuXHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuWVRQR2V0UGxheWVyKCkuY3VlVmlkZW9CeVVybCggZW5jb2RlVVJJKCBqUXVlcnkubWJZVFBsYXllci5sb2NhdGlvblByb3RvY29sICsgXCIvL3d3dy55b3V0dWJlLmNvbS92L1wiICsgWVRQbGF5ZXIudmlkZW9JRCApLCAxLCBZVFBsYXllci5vcHQucXVhbGl0eSApO1xuXHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkub3B0aW1pemVEaXNwbGF5KCk7XG5cblx0XHRcdFx0alF1ZXJ5Lm1iWVRQbGF5ZXIuY2hlY2tGb3JTdGF0ZSggWVRQbGF5ZXIgKTtcblx0XHRcdFx0alF1ZXJ5Lm1iWVRQbGF5ZXIuZ2V0RGF0YUZyb21BUEkoIFlUUGxheWVyICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdFx0alF1ZXJ5Lm1iWVRQbGF5ZXIuYXBwbHlNYXNrKCBZVFBsYXllciApO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7cGxheWVyfVxuXHRcdCAqL1xuXHRcdGdldFBsYXllcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5KCB0aGlzICkuZ2V0KCAwICkucGxheWVyO1xuXHRcdH0sXG5cblx0XHRwbGF5ZXJEZXN0cm95OiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBZVFBsYXllciA9IHRoaXMuZ2V0KCAwICk7XG5cdFx0XHR5dHAuWVRBUElSZWFkeSA9IHRydWU7XG5cdFx0XHR5dHAuYmFja2dyb3VuZElzSW5pdGVkID0gZmFsc2U7XG5cdFx0XHRZVFBsYXllci5pc0luaXQgPSBmYWxzZTtcblx0XHRcdFlUUGxheWVyLnZpZGVvSUQgPSBudWxsO1xuXHRcdFx0dmFyIHBsYXllckJveCA9IFlUUGxheWVyLndyYXBwZXI7XG5cdFx0XHRwbGF5ZXJCb3gucmVtb3ZlKCk7XG5cdFx0XHRqUXVlcnkoIFwiI2NvbnRyb2xCYXJfXCIgKyBZVFBsYXllci5pZCApLnJlbW92ZSgpO1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCggWVRQbGF5ZXIuY2hlY2tGb3JTdGFydEF0ICk7XG5cdFx0XHRjbGVhckludGVydmFsKCBZVFBsYXllci5nZXRTdGF0ZSApO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHJlYWxcblx0XHQgKiBAcmV0dXJucyB7alF1ZXJ5Lm1iWVRQbGF5ZXJ9XG5cdFx0ICovXG5cdFx0ZnVsbHNjcmVlbjogZnVuY3Rpb24oIHJlYWwgKSB7XG5cdFx0XHR2YXIgWVRQbGF5ZXIgPSB0aGlzLmdldCggMCApO1xuXHRcdFx0aWYoIHR5cGVvZiByZWFsID09IFwidW5kZWZpbmVkXCIgKSByZWFsID0gWVRQbGF5ZXIub3B0LnJlYWxmdWxsc2NyZWVuO1xuXHRcdFx0cmVhbCA9IGV2YWwoIHJlYWwgKTtcblx0XHRcdHZhciBjb250cm9scyA9IGpRdWVyeSggXCIjY29udHJvbEJhcl9cIiArIFlUUGxheWVyLmlkICk7XG5cdFx0XHR2YXIgZnVsbFNjcmVlbkJ0biA9IGNvbnRyb2xzLmZpbmQoIFwiLm1iX09ubHlZVFwiICk7XG5cdFx0XHR2YXIgdmlkZW9XcmFwcGVyID0gWVRQbGF5ZXIuaXNTZWxmID8gWVRQbGF5ZXIub3B0LmNvbnRhaW5tZW50IDogWVRQbGF5ZXIud3JhcHBlcjtcblx0XHRcdC8vdmFyIHZpZGVvV3JhcHBlciA9IFlUUGxheWVyLndyYXBwZXI7XG5cdFx0XHRpZiggcmVhbCApIHtcblx0XHRcdFx0dmFyIGZ1bGxzY3JlZW5jaGFuZ2UgPSBqUXVlcnkuYnJvd3Nlci5tb3ppbGxhID8gXCJtb3pmdWxsc2NyZWVuY2hhbmdlXCIgOiBqUXVlcnkuYnJvd3Nlci53ZWJraXQgPyBcIndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2VcIiA6IFwiZnVsbHNjcmVlbmNoYW5nZVwiO1xuXHRcdFx0XHRqUXVlcnkoIGRvY3VtZW50ICkub2ZmKCBmdWxsc2NyZWVuY2hhbmdlICkub24oIGZ1bGxzY3JlZW5jaGFuZ2UsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciBpc0Z1bGxTY3JlZW4gPSBSdW5QcmVmaXhNZXRob2QoIGRvY3VtZW50LCBcIklzRnVsbFNjcmVlblwiICkgfHwgUnVuUHJlZml4TWV0aG9kKCBkb2N1bWVudCwgXCJGdWxsU2NyZWVuXCIgKTtcblx0XHRcdFx0XHRpZiggIWlzRnVsbFNjcmVlbiApIHtcblx0XHRcdFx0XHRcdFlUUGxheWVyLmlzQWxvbmUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGZ1bGxTY3JlZW5CdG4uaHRtbCggalF1ZXJ5Lm1iWVRQbGF5ZXIuY29udHJvbHMub25seVlUICk7XG5cdFx0XHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuWVRQU2V0VmlkZW9RdWFsaXR5KCBZVFBsYXllci5vcHQucXVhbGl0eSApO1xuXHRcdFx0XHRcdFx0dmlkZW9XcmFwcGVyLnJlbW92ZUNsYXNzKCBcIllUUEZ1bGxzY3JlZW5cIiApO1xuXHRcdFx0XHRcdFx0dmlkZW9XcmFwcGVyLkNTU0FuaW1hdGUoIHtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogWVRQbGF5ZXIub3B0Lm9wYWNpdHlcblx0XHRcdFx0XHRcdH0sIDUwMCApO1xuXHRcdFx0XHRcdFx0dmlkZW9XcmFwcGVyLmNzcygge1xuXHRcdFx0XHRcdFx0XHR6SW5kZXg6IDBcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdGlmKCBZVFBsYXllci5pc0JhY2tncm91bmQgKSB7XG5cdFx0XHRcdFx0XHRcdGpRdWVyeSggXCJib2R5XCIgKS5hZnRlciggY29udHJvbHMgKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFlUUGxheWVyLndyYXBwZXIuYmVmb3JlKCBjb250cm9scyApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0alF1ZXJ5KCB3aW5kb3cgKS5yZXNpemUoKTtcblx0XHRcdFx0XHRcdGpRdWVyeSggWVRQbGF5ZXIgKS50cmlnZ2VyKCBcIllUUEZ1bGxTY3JlZW5FbmRcIiApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuWVRQU2V0VmlkZW9RdWFsaXR5KCBcImRlZmF1bHRcIiApO1xuXHRcdFx0XHRcdFx0alF1ZXJ5KCBZVFBsYXllciApLnRyaWdnZXIoIFwiWVRQRnVsbFNjcmVlblN0YXJ0XCIgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHRcdGlmKCAhWVRQbGF5ZXIuaXNBbG9uZSApIHtcblx0XHRcdFx0ZnVuY3Rpb24gaGlkZU1vdXNlKCkge1xuXHRcdFx0XHRcdFlUUGxheWVyLm92ZXJsYXkuY3NzKCB7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IFwibm9uZVwiXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0alF1ZXJ5KCBkb2N1bWVudCApLm9uKCBcIm1vdXNlbW92ZS5ZVFBsYXllclwiLCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0XHRZVFBsYXllci5vdmVybGF5LmNzcygge1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBcImF1dG9cIlxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQoIFlUUGxheWVyLmhpZGVDdXJzb3IgKTtcblx0XHRcdFx0XHRpZiggIWpRdWVyeSggZS50YXJnZXQgKS5wYXJlbnRzKCkuaXMoIFwiLm1iX1lUUEJhclwiICkgKSBZVFBsYXllci5oaWRlQ3Vyc29yID0gc2V0VGltZW91dCggaGlkZU1vdXNlLCAzMDAwICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0aGlkZU1vdXNlKCk7XG5cdFx0XHRcdGlmKCByZWFsICkge1xuXHRcdFx0XHRcdHZpZGVvV3JhcHBlci5jc3MoIHtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDBcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0dmlkZW9XcmFwcGVyLmFkZENsYXNzKCBcIllUUEZ1bGxzY3JlZW5cIiApO1xuXHRcdFx0XHRcdGxhdW5jaEZ1bGxzY3JlZW4oIHZpZGVvV3JhcHBlci5nZXQoIDAgKSApO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dmlkZW9XcmFwcGVyLkNTU0FuaW1hdGUoIHtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMVxuXHRcdFx0XHRcdFx0fSwgMTAwMCApO1xuXHRcdFx0XHRcdFx0WVRQbGF5ZXIud3JhcHBlci5hcHBlbmQoIGNvbnRyb2xzICk7XG5cdFx0XHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkub3B0aW1pemVEaXNwbGF5KCk7XG5cdFx0XHRcdFx0XHRZVFBsYXllci5wbGF5ZXIuc2Vla1RvKCBZVFBsYXllci5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSArIC4xLCB0cnVlICk7XG5cdFx0XHRcdFx0fSwgNTAwIClcblx0XHRcdFx0fSBlbHNlIHZpZGVvV3JhcHBlci5jc3MoIHtcblx0XHRcdFx0XHR6SW5kZXg6IDEwMDAwXG5cdFx0XHRcdH0gKS5DU1NBbmltYXRlKCB7XG5cdFx0XHRcdFx0b3BhY2l0eTogMVxuXHRcdFx0XHR9LCAxMDAwICk7XG5cdFx0XHRcdGZ1bGxTY3JlZW5CdG4uaHRtbCggalF1ZXJ5Lm1iWVRQbGF5ZXIuY29udHJvbHMuc2hvd1NpdGUgKTtcblx0XHRcdFx0WVRQbGF5ZXIuaXNBbG9uZSA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRqUXVlcnkoIGRvY3VtZW50ICkub2ZmKCBcIm1vdXNlbW92ZS5ZVFBsYXllclwiICk7XG5cdFx0XHRcdGNsZWFyVGltZW91dCggWVRQbGF5ZXIuaGlkZUN1cnNvciApO1xuXHRcdFx0XHRZVFBsYXllci5vdmVybGF5LmNzcygge1xuXHRcdFx0XHRcdGN1cnNvcjogXCJhdXRvXCJcblx0XHRcdFx0fSApO1xuXHRcdFx0XHRpZiggcmVhbCApIHtcblx0XHRcdFx0XHRjYW5jZWxGdWxsc2NyZWVuKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmlkZW9XcmFwcGVyLkNTU0FuaW1hdGUoIHtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IFlUUGxheWVyLm9wdC5vcGFjaXR5XG5cdFx0XHRcdFx0fSwgNTAwICk7XG5cdFx0XHRcdFx0dmlkZW9XcmFwcGVyLmNzcygge1xuXHRcdFx0XHRcdFx0ekluZGV4OiAwXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZ1bGxTY3JlZW5CdG4uaHRtbCggalF1ZXJ5Lm1iWVRQbGF5ZXIuY29udHJvbHMub25seVlUICk7XG5cdFx0XHRcdFlUUGxheWVyLmlzQWxvbmUgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gUnVuUHJlZml4TWV0aG9kKCBvYmosIG1ldGhvZCApIHtcblx0XHRcdFx0dmFyIHBmeCA9IFsgXCJ3ZWJraXRcIiwgXCJtb3pcIiwgXCJtc1wiLCBcIm9cIiwgXCJcIiBdO1xuXHRcdFx0XHR2YXIgcCA9IDAsXG5cdFx0XHRcdFx0bSwgdDtcblx0XHRcdFx0d2hpbGUoIHAgPCBwZngubGVuZ3RoICYmICFvYmpbIG0gXSApIHtcblx0XHRcdFx0XHRtID0gbWV0aG9kO1xuXHRcdFx0XHRcdGlmKCBwZnhbIHAgXSA9PSBcIlwiICkge1xuXHRcdFx0XHRcdFx0bSA9IG0uc3Vic3RyKCAwLCAxICkudG9Mb3dlckNhc2UoKSArIG0uc3Vic3RyKCAxICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG0gPSBwZnhbIHAgXSArIG07XG5cdFx0XHRcdFx0dCA9IHR5cGVvZiBvYmpbIG0gXTtcblx0XHRcdFx0XHRpZiggdCAhPSBcInVuZGVmaW5lZFwiICkge1xuXHRcdFx0XHRcdFx0cGZ4ID0gWyBwZnhbIHAgXSBdO1xuXHRcdFx0XHRcdFx0cmV0dXJuKCB0ID09IFwiZnVuY3Rpb25cIiA/IG9ialsgbSBdKCkgOiBvYmpbIG0gXSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gbGF1bmNoRnVsbHNjcmVlbiggZWxlbWVudCApIHtcblx0XHRcdFx0UnVuUHJlZml4TWV0aG9kKCBlbGVtZW50LCBcIlJlcXVlc3RGdWxsU2NyZWVuXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gY2FuY2VsRnVsbHNjcmVlbigpIHtcblx0XHRcdFx0aWYoIFJ1blByZWZpeE1ldGhvZCggZG9jdW1lbnQsIFwiRnVsbFNjcmVlblwiICkgfHwgUnVuUHJlZml4TWV0aG9kKCBkb2N1bWVudCwgXCJJc0Z1bGxTY3JlZW5cIiApICkge1xuXHRcdFx0XHRcdFJ1blByZWZpeE1ldGhvZCggZG9jdW1lbnQsIFwiQ2FuY2VsRnVsbFNjcmVlblwiICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtqUXVlcnkubWJZVFBsYXllcn1cblx0XHQgKi9cblx0XHR0b2dnbGVMb29wczogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgWVRQbGF5ZXIgPSB0aGlzLmdldCggMCApO1xuXHRcdFx0dmFyIGRhdGEgPSBZVFBsYXllci5vcHQ7XG5cdFx0XHRpZiggZGF0YS5sb29wID09IDEgKSB7XG5cdFx0XHRcdGRhdGEubG9vcCA9IDA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiggZGF0YS5zdGFydEF0ICkge1xuXHRcdFx0XHRcdFlUUGxheWVyLnBsYXllci5zZWVrVG8oIGRhdGEuc3RhcnRBdCApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFlUUGxheWVyLnBsYXllci5wbGF5VmlkZW8oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkYXRhLmxvb3AgPSAxO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtqUXVlcnkubWJZVFBsYXllcn1cblx0XHQgKi9cblx0XHRwbGF5OiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBZVFBsYXllciA9IHRoaXMuZ2V0KCAwICk7XG5cdFx0XHRpZiggIVlUUGxheWVyLmlzUmVhZHkgKVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdFx0WVRQbGF5ZXIucGxheWVyLnBsYXlWaWRlbygpO1xuXHRcdFx0WVRQbGF5ZXIud3JhcHBlci5DU1NBbmltYXRlKCB7XG5cdFx0XHRcdG9wYWNpdHk6IFlUUGxheWVyLmlzQWxvbmUgPyAxIDogWVRQbGF5ZXIub3B0Lm9wYWNpdHlcblx0XHRcdH0sIDIwMDAgKTtcblxuXHRcdFx0alF1ZXJ5KCBZVFBsYXllci5wbGF5ZXJFbCApLkNTU0FuaW1hdGUoIHtcblx0XHRcdFx0b3BhY2l0eTogMVxuXHRcdFx0fSwgMTAwMCApO1xuXG5cdFx0XHR2YXIgY29udHJvbHMgPSBqUXVlcnkoIFwiI2NvbnRyb2xCYXJfXCIgKyBZVFBsYXllci5pZCApO1xuXHRcdFx0dmFyIHBsYXlCdG4gPSBjb250cm9scy5maW5kKCBcIi5tYl9ZVFBQbGF5cGF1c2VcIiApO1xuXHRcdFx0cGxheUJ0bi5odG1sKCBqUXVlcnkubWJZVFBsYXllci5jb250cm9scy5wYXVzZSApO1xuXHRcdFx0WVRQbGF5ZXIuc3RhdGUgPSAxO1xuXG5cdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuY3NzKCBcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJub25lXCIgKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gY2FsbGJhY2tcblx0XHQgKiBAcmV0dXJucyB7alF1ZXJ5Lm1iWVRQbGF5ZXJ9XG5cdFx0ICovXG5cdFx0dG9nZ2xlUGxheTogZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuXHRcdFx0dmFyIFlUUGxheWVyID0gdGhpcy5nZXQoIDAgKTtcblx0XHRcdGlmKCBZVFBsYXllci5zdGF0ZSA9PSAxIClcblx0XHRcdFx0dGhpcy5ZVFBQYXVzZSgpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLllUUFBsYXkoKTtcblxuXHRcdFx0aWYoIHR5cGVvZiBjYWxsYmFjayA9PSBcImZ1bmN0aW9uXCIgKVxuXHRcdFx0XHRjYWxsYmFjayggWVRQbGF5ZXIuc3RhdGUgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtqUXVlcnkubWJZVFBsYXllcn1cblx0XHQgKi9cblx0XHRzdG9wOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBZVFBsYXllciA9IHRoaXMuZ2V0KCAwICk7XG5cdFx0XHR2YXIgY29udHJvbHMgPSBqUXVlcnkoIFwiI2NvbnRyb2xCYXJfXCIgKyBZVFBsYXllci5pZCApO1xuXHRcdFx0dmFyIHBsYXlCdG4gPSBjb250cm9scy5maW5kKCBcIi5tYl9ZVFBQbGF5cGF1c2VcIiApO1xuXHRcdFx0cGxheUJ0bi5odG1sKCBqUXVlcnkubWJZVFBsYXllci5jb250cm9scy5wbGF5ICk7XG5cdFx0XHRZVFBsYXllci5wbGF5ZXIuc3RvcFZpZGVvKCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge2pRdWVyeS5tYllUUGxheWVyfVxuXHRcdCAqL1xuXHRcdHBhdXNlOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBZVFBsYXllciA9IHRoaXMuZ2V0KCAwICk7XG5cdFx0XHRZVFBsYXllci5wbGF5ZXIucGF1c2VWaWRlbygpO1xuXHRcdFx0WVRQbGF5ZXIuc3RhdGUgPSAyO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB2YWxcblx0XHQgKiBAcmV0dXJucyB7alF1ZXJ5Lm1iWVRQbGF5ZXJ9XG5cdFx0ICovXG5cdFx0c2Vla1RvOiBmdW5jdGlvbiggdmFsICkge1xuXHRcdFx0dmFyIFlUUGxheWVyID0gdGhpcy5nZXQoIDAgKTtcblx0XHRcdFlUUGxheWVyLnBsYXllci5zZWVrVG8oIHZhbCwgdHJ1ZSApO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB2YWxcblx0XHQgKiBAcmV0dXJucyB7alF1ZXJ5Lm1iWVRQbGF5ZXJ9XG5cdFx0ICovXG5cdFx0c2V0Vm9sdW1lOiBmdW5jdGlvbiggdmFsICkge1xuXHRcdFx0dmFyIFlUUGxheWVyID0gdGhpcy5nZXQoIDAgKTtcblx0XHRcdGlmKCAhdmFsICYmICFZVFBsYXllci5vcHQudm9sICYmIFlUUGxheWVyLnBsYXllci5nZXRWb2x1bWUoKSA9PSAwICkgalF1ZXJ5KCBZVFBsYXllciApLllUUFVubXV0ZSgpO1xuXHRcdFx0ZWxzZSBpZiggKCAhdmFsICYmIFlUUGxheWVyLnBsYXllci5nZXRWb2x1bWUoKSA+IDAgKSB8fCAoIHZhbCAmJiBZVFBsYXllci5vcHQudm9sID09IHZhbCApICkge1xuXHRcdFx0XHRpZiggIVlUUGxheWVyLmlzTXV0ZSApIGpRdWVyeSggWVRQbGF5ZXIgKS5ZVFBNdXRlKCk7XG5cdFx0XHRcdGVsc2UgalF1ZXJ5KCBZVFBsYXllciApLllUUFVubXV0ZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0WVRQbGF5ZXIub3B0LnZvbCA9IHZhbDtcblx0XHRcdFx0WVRQbGF5ZXIucGxheWVyLnNldFZvbHVtZSggWVRQbGF5ZXIub3B0LnZvbCApO1xuXHRcdFx0XHRpZiggWVRQbGF5ZXIudm9sdW1lQmFyICYmIFlUUGxheWVyLnZvbHVtZUJhci5sZW5ndGggKSBZVFBsYXllci52b2x1bWVCYXIudXBkYXRlU2xpZGVyVmFsKCB2YWwgKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdHRvZ2dsZVZvbHVtZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgWVRQbGF5ZXIgPSB0aGlzLmdldCggMCApO1xuXHRcdFx0aWYoICFZVFBsYXllciApIHJldHVybjtcblx0XHRcdGlmKCBZVFBsYXllci5wbGF5ZXIuaXNNdXRlZCgpICkge1xuXHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuWVRQVW5tdXRlKCk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0alF1ZXJ5KCBZVFBsYXllciApLllUUE11dGUoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7alF1ZXJ5Lm1iWVRQbGF5ZXJ9XG5cdFx0ICovXG5cdFx0bXV0ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgWVRQbGF5ZXIgPSB0aGlzLmdldCggMCApO1xuXHRcdFx0aWYoIFlUUGxheWVyLmlzTXV0ZSApIHJldHVybjtcblx0XHRcdFlUUGxheWVyLnBsYXllci5tdXRlKCk7XG5cdFx0XHRZVFBsYXllci5pc011dGUgPSB0cnVlO1xuXHRcdFx0WVRQbGF5ZXIucGxheWVyLnNldFZvbHVtZSggMCApO1xuXHRcdFx0aWYoIFlUUGxheWVyLnZvbHVtZUJhciAmJiBZVFBsYXllci52b2x1bWVCYXIubGVuZ3RoICYmIFlUUGxheWVyLnZvbHVtZUJhci53aWR0aCgpID4gMTAgKSB7XG5cdFx0XHRcdFlUUGxheWVyLnZvbHVtZUJhci51cGRhdGVTbGlkZXJWYWwoIDAgKTtcblx0XHRcdH1cblx0XHRcdHZhciBjb250cm9scyA9IGpRdWVyeSggXCIjY29udHJvbEJhcl9cIiArIFlUUGxheWVyLmlkICk7XG5cdFx0XHR2YXIgbXV0ZUJ0biA9IGNvbnRyb2xzLmZpbmQoIFwiLm1iX1lUUE11dGVVbm11dGVcIiApO1xuXHRcdFx0bXV0ZUJ0bi5odG1sKCBqUXVlcnkubWJZVFBsYXllci5jb250cm9scy51bm11dGUgKTtcblx0XHRcdGpRdWVyeSggWVRQbGF5ZXIgKS5hZGRDbGFzcyggXCJpc011dGVkXCIgKTtcblx0XHRcdGlmKCBZVFBsYXllci52b2x1bWVCYXIgJiYgWVRQbGF5ZXIudm9sdW1lQmFyLmxlbmd0aCApIFlUUGxheWVyLnZvbHVtZUJhci5hZGRDbGFzcyggXCJtdXRlZFwiICk7XG5cdFx0XHR2YXIgWVRQRXZlbnQgPSBqUXVlcnkuRXZlbnQoIFwiWVRQTXV0ZWRcIiApO1xuXHRcdFx0WVRQRXZlbnQudGltZSA9IFlUUGxheWVyLmN1cnJlbnRUaW1lO1xuXHRcdFx0aWYoIFlUUGxheWVyLmNhblRyaWdnZXIgKSBqUXVlcnkoIFlUUGxheWVyICkudHJpZ2dlciggWVRQRXZlbnQgKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7alF1ZXJ5Lm1iWVRQbGF5ZXJ9XG5cdFx0ICovXG5cdFx0dW5tdXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBZVFBsYXllciA9IHRoaXMuZ2V0KCAwICk7XG5cdFx0XHRpZiggIVlUUGxheWVyLmlzTXV0ZSApIHJldHVybjtcblx0XHRcdFlUUGxheWVyLnBsYXllci51bk11dGUoKTtcblx0XHRcdFlUUGxheWVyLmlzTXV0ZSA9IGZhbHNlO1xuXHRcdFx0WVRQbGF5ZXIucGxheWVyLnNldFZvbHVtZSggWVRQbGF5ZXIub3B0LnZvbCApO1xuXHRcdFx0aWYoIFlUUGxheWVyLnZvbHVtZUJhciAmJiBZVFBsYXllci52b2x1bWVCYXIubGVuZ3RoICkgWVRQbGF5ZXIudm9sdW1lQmFyLnVwZGF0ZVNsaWRlclZhbCggWVRQbGF5ZXIub3B0LnZvbCA+IDEwID8gWVRQbGF5ZXIub3B0LnZvbCA6IDEwICk7XG5cdFx0XHR2YXIgY29udHJvbHMgPSBqUXVlcnkoIFwiI2NvbnRyb2xCYXJfXCIgKyBZVFBsYXllci5pZCApO1xuXHRcdFx0dmFyIG11dGVCdG4gPSBjb250cm9scy5maW5kKCBcIi5tYl9ZVFBNdXRlVW5tdXRlXCIgKTtcblx0XHRcdG11dGVCdG4uaHRtbCggalF1ZXJ5Lm1iWVRQbGF5ZXIuY29udHJvbHMubXV0ZSApO1xuXHRcdFx0alF1ZXJ5KCBZVFBsYXllciApLnJlbW92ZUNsYXNzKCBcImlzTXV0ZWRcIiApO1xuXHRcdFx0aWYoIFlUUGxheWVyLnZvbHVtZUJhciAmJiBZVFBsYXllci52b2x1bWVCYXIubGVuZ3RoICkgWVRQbGF5ZXIudm9sdW1lQmFyLnJlbW92ZUNsYXNzKCBcIm11dGVkXCIgKTtcblx0XHRcdHZhciBZVFBFdmVudCA9IGpRdWVyeS5FdmVudCggXCJZVFBVbm11dGVkXCIgKTtcblx0XHRcdFlUUEV2ZW50LnRpbWUgPSBZVFBsYXllci5jdXJyZW50VGltZTtcblx0XHRcdGlmKCBZVFBsYXllci5jYW5UcmlnZ2VyICkgalF1ZXJ5KCBZVFBsYXllciApLnRyaWdnZXIoIFlUUEV2ZW50ICk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEZJTFRFUlNcblx0XHQgKlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIGZpbHRlclxuXHRcdCAqIEBwYXJhbSB2YWx1ZVxuXHRcdCAqIEByZXR1cm5zIHtqUXVlcnkubWJZVFBsYXllcn1cblx0XHQgKi9cblx0XHRhcHBseUZpbHRlcjogZnVuY3Rpb24oIGZpbHRlciwgdmFsdWUgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIFlUUGxheWVyID0gdGhpcztcblx0XHRcdFx0WVRQbGF5ZXIuZmlsdGVyc1sgZmlsdGVyIF0udmFsdWUgPSB2YWx1ZTtcblx0XHRcdFx0aWYoIFlUUGxheWVyLmZpbHRlcnNFbmFibGVkIClcblx0XHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuWVRQRW5hYmxlRmlsdGVycygpO1xuXHRcdFx0fSApO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gZmlsdGVyc1xuXHRcdCAqIEByZXR1cm5zIHtqUXVlcnkubWJZVFBsYXllcn1cblx0XHQgKi9cblx0XHRhcHBseUZpbHRlcnM6IGZ1bmN0aW9uKCBmaWx0ZXJzICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBZVFBsYXllciA9IHRoaXM7XG5cdFx0XHRcdGlmKCAhWVRQbGF5ZXIuaXNSZWFkeSApIHtcblx0XHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkub24oIFwiWVRQUmVhZHlcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuWVRQQXBwbHlGaWx0ZXJzKCBmaWx0ZXJzICk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciggdmFyIGtleSBpbiBmaWx0ZXJzIClcblx0XHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuWVRQQXBwbHlGaWx0ZXIoIGtleSwgZmlsdGVyc1sga2V5IF0gKTtcblxuXHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkudHJpZ2dlciggXCJZVFBGaWx0ZXJzQXBwbGllZFwiICk7XG5cdFx0XHR9ICk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSBmaWx0ZXJcblx0XHQgKiBAcGFyYW0gdmFsdWVcblx0XHQgKiBAcmV0dXJucyB7Kn1cblx0XHQgKi9cblx0XHR0b2dnbGVGaWx0ZXI6IGZ1bmN0aW9uKCBmaWx0ZXIsIHZhbHVlICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBZVFBsYXllciA9IHRoaXM7XG5cdFx0XHRcdGlmKCAhWVRQbGF5ZXIuZmlsdGVyc1sgZmlsdGVyIF0udmFsdWUgKSBZVFBsYXllci5maWx0ZXJzWyBmaWx0ZXIgXS52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0XHRlbHNlIFlUUGxheWVyLmZpbHRlcnNbIGZpbHRlciBdLnZhbHVlID0gMDtcblx0XHRcdFx0aWYoIFlUUGxheWVyLmZpbHRlcnNFbmFibGVkICkgalF1ZXJ5KCB0aGlzICkuWVRQRW5hYmxlRmlsdGVycygpO1xuXHRcdFx0fSApO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gY2FsbGJhY2tcblx0XHQgKiBAcmV0dXJucyB7Kn1cblx0XHQgKi9cblx0XHR0b2dnbGVGaWx0ZXJzOiBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIFlUUGxheWVyID0gdGhpcztcblx0XHRcdFx0aWYoIFlUUGxheWVyLmZpbHRlcnNFbmFibGVkICkge1xuXHRcdFx0XHRcdGpRdWVyeSggWVRQbGF5ZXIgKS50cmlnZ2VyKCBcIllUUERpc2FibGVGaWx0ZXJzXCIgKTtcblx0XHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuWVRQRGlzYWJsZUZpbHRlcnMoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuWVRQRW5hYmxlRmlsdGVycygpO1xuXHRcdFx0XHRcdGpRdWVyeSggWVRQbGF5ZXIgKS50cmlnZ2VyKCBcIllUUEVuYWJsZUZpbHRlcnNcIiApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKCB0eXBlb2YgY2FsbGJhY2sgPT0gXCJmdW5jdGlvblwiIClcblx0XHRcdFx0XHRjYWxsYmFjayggWVRQbGF5ZXIuZmlsdGVyc0VuYWJsZWQgKTtcblx0XHRcdH0gKVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7Kn1cblx0XHQgKi9cblx0XHRkaXNhYmxlRmlsdGVyczogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIFlUUGxheWVyID0gdGhpcztcblx0XHRcdFx0dmFyIGlmcmFtZSA9IGpRdWVyeSggWVRQbGF5ZXIucGxheWVyRWwgKTtcblx0XHRcdFx0aWZyYW1lLmNzcyggXCItd2Via2l0LWZpbHRlclwiLCBcIlwiICk7XG5cdFx0XHRcdGlmcmFtZS5jc3MoIFwiZmlsdGVyXCIsIFwiXCIgKTtcblx0XHRcdFx0WVRQbGF5ZXIuZmlsdGVyc0VuYWJsZWQgPSBmYWxzZTtcblx0XHRcdH0gKVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7Kn1cblx0XHQgKi9cblx0XHRlbmFibGVGaWx0ZXJzOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgWVRQbGF5ZXIgPSB0aGlzO1xuXHRcdFx0XHR2YXIgaWZyYW1lID0galF1ZXJ5KCBZVFBsYXllci5wbGF5ZXJFbCApO1xuXHRcdFx0XHR2YXIgZmlsdGVyU3R5bGUgPSBcIlwiO1xuXHRcdFx0XHRmb3IoIHZhciBrZXkgaW4gWVRQbGF5ZXIuZmlsdGVycyApIHtcblx0XHRcdFx0XHRpZiggWVRQbGF5ZXIuZmlsdGVyc1sga2V5IF0udmFsdWUgKVxuXHRcdFx0XHRcdFx0ZmlsdGVyU3R5bGUgKz0ga2V5LnJlcGxhY2UoIFwiX1wiLCBcIi1cIiApICsgXCIoXCIgKyBZVFBsYXllci5maWx0ZXJzWyBrZXkgXS52YWx1ZSArIFlUUGxheWVyLmZpbHRlcnNbIGtleSBdLnVuaXQgKyBcIikgXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWZyYW1lLmNzcyggXCItd2Via2l0LWZpbHRlclwiLCBmaWx0ZXJTdHlsZSApO1xuXHRcdFx0XHRpZnJhbWUuY3NzKCBcImZpbHRlclwiLCBmaWx0ZXJTdHlsZSApO1xuXHRcdFx0XHRZVFBsYXllci5maWx0ZXJzRW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9ICk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSBmaWx0ZXJcblx0XHQgKiBAcGFyYW0gY2FsbGJhY2tcblx0XHQgKiBAcmV0dXJucyB7Kn1cblx0XHQgKi9cblx0XHRyZW1vdmVGaWx0ZXI6IGZ1bmN0aW9uKCBmaWx0ZXIsIGNhbGxiYWNrICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBZVFBsYXllciA9IHRoaXM7XG5cdFx0XHRcdGlmKCB0eXBlb2YgZmlsdGVyID09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHRjYWxsYmFjayA9IGZpbHRlcjtcblx0XHRcdFx0XHRmaWx0ZXIgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKCAhZmlsdGVyIClcblx0XHRcdFx0XHRmb3IoIHZhciBrZXkgaW4gWVRQbGF5ZXIuZmlsdGVycyApIHtcblx0XHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLllUUEFwcGx5RmlsdGVyKCBrZXksIDAgKTtcblx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgY2FsbGJhY2sgPT0gXCJmdW5jdGlvblwiICkgY2FsbGJhY2soIGtleSApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5ZVFBBcHBseUZpbHRlciggZmlsdGVyLCAwICk7XG5cdFx0XHRcdFx0XHRpZiggdHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIiApIGNhbGxiYWNrKCBmaWx0ZXIgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMgeyp9XG5cdFx0ICovXG5cdFx0Z2V0RmlsdGVyczogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgWVRQbGF5ZXIgPSB0aGlzLmdldCggMCApO1xuXHRcdFx0cmV0dXJuIFlUUGxheWVyLmZpbHRlcnM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBNQVNLXG5cdFx0ICpcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSBtYXNrXG5cdFx0ICogQHJldHVybnMge2pRdWVyeS5tYllUUGxheWVyfVxuXHRcdCAqL1xuXHRcdGFkZE1hc2s6IGZ1bmN0aW9uKCBtYXNrICkge1xuXHRcdFx0dmFyIFlUUGxheWVyID0gdGhpcy5nZXQoIDAgKTtcblx0XHRcdHZhciBvdmVybGF5ID0gWVRQbGF5ZXIub3ZlcmxheTtcblxuXHRcdFx0aWYoICFtYXNrICkge1xuXHRcdFx0XHRtYXNrID0gWVRQbGF5ZXIuYWN0dWFsTWFzaztcblx0XHRcdH1cblxuXHRcdFx0dmFyIHRlbXBJbWcgPSBqUXVlcnkoIFwiPGltZy8+XCIgKS5hdHRyKCBcInNyY1wiLCBtYXNrICkub24oIFwibG9hZFwiLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRvdmVybGF5LkNTU0FuaW1hdGUoIHtcblx0XHRcdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRcdH0sIDUwMCwgZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRZVFBsYXllci5oYXNNYXNrID0gdHJ1ZTtcblxuXHRcdFx0XHRcdHRlbXBJbWcucmVtb3ZlKCk7XG5cblx0XHRcdFx0XHRvdmVybGF5LmNzcygge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIG1hc2sgKyBcIilcIixcblx0XHRcdFx0XHRcdGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyIGNlbnRlclwiLFxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIlxuXHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdG92ZXJsYXkuQ1NTQW5pbWF0ZSgge1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMVxuXHRcdFx0XHRcdH0sIDUwMCApO1xuXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7alF1ZXJ5Lm1iWVRQbGF5ZXJ9XG5cdFx0ICovXG5cdFx0cmVtb3ZlTWFzazogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgWVRQbGF5ZXIgPSB0aGlzLmdldCggMCApO1xuXHRcdFx0dmFyIG92ZXJsYXkgPSBZVFBsYXllci5vdmVybGF5O1xuXHRcdFx0b3ZlcmxheS5DU1NBbmltYXRlKCB7XG5cdFx0XHRcdG9wYWNpdHk6IDBcblx0XHRcdH0sIDUwMCwgZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0WVRQbGF5ZXIuaGFzTWFzayA9IGZhbHNlO1xuXG5cdFx0XHRcdG92ZXJsYXkuY3NzKCB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBcIlwiLFxuXHRcdFx0XHRcdGJhY2tncm91bmRSZXBlYXQ6IFwiXCIsXG5cdFx0XHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBcIlwiLFxuXHRcdFx0XHRcdGJhY2tncm91bmRTaXplOiBcIlwiXG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0b3ZlcmxheS5DU1NBbmltYXRlKCB7XG5cdFx0XHRcdFx0b3BhY2l0eTogMVxuXHRcdFx0XHR9LCA1MDAgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gWVRQbGF5ZXJcblx0XHQgKi9cblx0XHRhcHBseU1hc2s6IGZ1bmN0aW9uKCBZVFBsYXllciApIHtcblx0XHRcdHZhciAkWVRQbGF5ZXIgPSBqUXVlcnkoIFlUUGxheWVyICk7XG5cdFx0XHQkWVRQbGF5ZXIub2ZmKCBcIllUUFRpbWUubWFza1wiICk7XG5cblx0XHRcdGlmKCBZVFBsYXllci5vcHQubWFzayApIHtcblxuXHRcdFx0XHRpZiggdHlwZW9mIFlUUGxheWVyLm9wdC5tYXNrID09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdFx0JFlUUGxheWVyLllUUEFkZE1hc2soIFlUUGxheWVyLm9wdC5tYXNrICk7XG5cblx0XHRcdFx0XHRZVFBsYXllci5hY3R1YWxNYXNrID0gWVRQbGF5ZXIub3B0Lm1hc2s7XG5cblx0XHRcdFx0fSBlbHNlIGlmKCB0eXBlb2YgWVRQbGF5ZXIub3B0Lm1hc2sgPT0gXCJvYmplY3RcIiApIHtcblxuXHRcdFx0XHRcdGZvciggdmFyIHRpbWUgaW4gWVRQbGF5ZXIub3B0Lm1hc2sgKSB7XG5cdFx0XHRcdFx0XHRpZiggWVRQbGF5ZXIub3B0Lm1hc2tbIHRpbWUgXSApXG5cdFx0XHRcdFx0XHRcdHZhciBpbWcgPSBqUXVlcnkoIFwiPGltZy8+XCIgKS5hdHRyKCBcInNyY1wiLCBZVFBsYXllci5vcHQubWFza1sgdGltZSBdICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYoIFlUUGxheWVyLm9wdC5tYXNrWyAwIF0gKVxuXHRcdFx0XHRcdFx0JFlUUGxheWVyLllUUEFkZE1hc2soIFlUUGxheWVyLm9wdC5tYXNrWyAwIF0gKTtcblxuXHRcdFx0XHRcdCRZVFBsYXllci5vbiggXCJZVFBUaW1lLm1hc2tcIiwgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdFx0XHRmb3IoIHZhciB0aW1lIGluIFlUUGxheWVyLm9wdC5tYXNrICkge1xuXHRcdFx0XHRcdFx0XHRpZiggZS50aW1lID09IHRpbWUgKVxuXHRcdFx0XHRcdFx0XHRcdGlmKCAhWVRQbGF5ZXIub3B0Lm1hc2tbIHRpbWUgXSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdCRZVFBsYXllci5ZVFBSZW1vdmVNYXNrKCk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0JFlUUGxheWVyLllUUEFkZE1hc2soIFlUUGxheWVyLm9wdC5tYXNrWyB0aW1lIF0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdFlUUGxheWVyLmFjdHVhbE1hc2sgPSBZVFBsYXllci5vcHQubWFza1sgdGltZSBdO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHR9XG5cblxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKi9cblx0XHR0b2dnbGVNYXNrOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBZVFBsYXllciA9IHRoaXMuZ2V0KCAwICk7XG5cdFx0XHR2YXIgJFlUUGxheWVyID0gJCggWVRQbGF5ZXIgKTtcblx0XHRcdGlmKCBZVFBsYXllci5oYXNNYXNrIClcblx0XHRcdFx0JFlUUGxheWVyLllUUFJlbW92ZU1hc2soKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0JFlUUGxheWVyLllUUEFkZE1hc2soKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHt7dG90YWxUaW1lOiBudW1iZXIsIGN1cnJlbnRUaW1lOiBudW1iZXJ9fVxuXHRcdCAqL1xuXHRcdG1hbmFnZVByb2dyZXNzOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBZVFBsYXllciA9IHRoaXMuZ2V0KCAwICk7XG5cdFx0XHR2YXIgY29udHJvbHMgPSBqUXVlcnkoIFwiI2NvbnRyb2xCYXJfXCIgKyBZVFBsYXllci5pZCApO1xuXHRcdFx0dmFyIHByb2dyZXNzQmFyID0gY29udHJvbHMuZmluZCggXCIubWJfWVRQUHJvZ3Jlc3NcIiApO1xuXHRcdFx0dmFyIGxvYWRlZEJhciA9IGNvbnRyb2xzLmZpbmQoIFwiLm1iX1lUUExvYWRlZFwiICk7XG5cdFx0XHR2YXIgdGltZUJhciA9IGNvbnRyb2xzLmZpbmQoIFwiLm1iX1lUUHNlZWtiYXJcIiApO1xuXHRcdFx0dmFyIHRvdFcgPSBwcm9ncmVzc0Jhci5vdXRlcldpZHRoKCk7XG5cdFx0XHR2YXIgY3VycmVudFRpbWUgPSBNYXRoLmZsb29yKCBZVFBsYXllci5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSApO1xuXHRcdFx0dmFyIHRvdGFsVGltZSA9IE1hdGguZmxvb3IoIFlUUGxheWVyLnBsYXllci5nZXREdXJhdGlvbigpICk7XG5cdFx0XHR2YXIgdGltZVcgPSAoIGN1cnJlbnRUaW1lICogdG90VyApIC8gdG90YWxUaW1lO1xuXHRcdFx0dmFyIHN0YXJ0TGVmdCA9IDA7XG5cdFx0XHR2YXIgbG9hZGVkVyA9IFlUUGxheWVyLnBsYXllci5nZXRWaWRlb0xvYWRlZEZyYWN0aW9uKCkgKiAxMDA7XG5cdFx0XHRsb2FkZWRCYXIuY3NzKCB7XG5cdFx0XHRcdGxlZnQ6IHN0YXJ0TGVmdCxcblx0XHRcdFx0d2lkdGg6IGxvYWRlZFcgKyBcIiVcIlxuXHRcdFx0fSApO1xuXHRcdFx0dGltZUJhci5jc3MoIHtcblx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0d2lkdGg6IHRpbWVXXG5cdFx0XHR9ICk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR0b3RhbFRpbWU6IHRvdGFsVGltZSxcblx0XHRcdFx0Y3VycmVudFRpbWU6IGN1cnJlbnRUaW1lXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gWVRQbGF5ZXJcblx0XHQgKi9cblx0XHRidWlsZENvbnRyb2xzOiBmdW5jdGlvbiggWVRQbGF5ZXIgKSB7XG5cdFx0XHR2YXIgZGF0YSA9IFlUUGxheWVyLm9wdDtcblx0XHRcdC8vIEBkYXRhLnByaW50VXJsOiBpcyBkZXByZWNhdGVkOyB1c2UgZGF0YS5zaG93WVRMb2dvXG5cdFx0XHRkYXRhLnNob3dZVExvZ28gPSBkYXRhLnNob3dZVExvZ28gfHwgZGF0YS5wcmludFVybDtcblxuXHRcdFx0aWYoIGpRdWVyeSggXCIjY29udHJvbEJhcl9cIiArIFlUUGxheWVyLmlkICkubGVuZ3RoIClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0WVRQbGF5ZXIuY29udHJvbEJhciA9IGpRdWVyeSggXCI8c3Bhbi8+XCIgKS5hdHRyKCBcImlkXCIsIFwiY29udHJvbEJhcl9cIiArIFlUUGxheWVyLmlkICkuYWRkQ2xhc3MoIFwibWJfWVRQQmFyXCIgKS5jc3MoIHtcblx0XHRcdFx0d2hpdGVTcGFjZTogXCJub1dyYXBcIixcblx0XHRcdFx0cG9zaXRpb246IFlUUGxheWVyLmlzQmFja2dyb3VuZCA/IFwiZml4ZWRcIiA6IFwiYWJzb2x1dGVcIixcblx0XHRcdFx0ekluZGV4OiBZVFBsYXllci5pc0JhY2tncm91bmQgPyAxMDAwMCA6IDEwMDBcblx0XHRcdH0gKS5oaWRlKCk7XG5cdFx0XHR2YXIgYnV0dG9uQmFyID0galF1ZXJ5KCBcIjxkaXYvPlwiICkuYWRkQ2xhc3MoIFwiYnV0dG9uQmFyXCIgKTtcblx0XHRcdC8qIHBsYXkvcGF1c2UgYnV0dG9uKi9cblx0XHRcdHZhciBwbGF5cGF1c2UgPSBqUXVlcnkoIFwiPHNwYW4+XCIgKyBqUXVlcnkubWJZVFBsYXllci5jb250cm9scy5wbGF5ICsgXCI8L3NwYW4+XCIgKS5hZGRDbGFzcyggXCJtYl9ZVFBQbGF5cGF1c2UgeXRwaWNvblwiICkuY2xpY2soIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiggWVRQbGF5ZXIucGxheWVyLmdldFBsYXllclN0YXRlKCkgPT0gMSApIGpRdWVyeSggWVRQbGF5ZXIgKS5ZVFBQYXVzZSgpO1xuXHRcdFx0XHRlbHNlIGpRdWVyeSggWVRQbGF5ZXIgKS5ZVFBQbGF5KCk7XG5cdFx0XHR9ICk7XG5cdFx0XHQvKiBtdXRlL3VubXV0ZSBidXR0b24qL1xuXHRcdFx0dmFyIE11dGVVbm11dGUgPSBqUXVlcnkoIFwiPHNwYW4+XCIgKyBqUXVlcnkubWJZVFBsYXllci5jb250cm9scy5tdXRlICsgXCI8L3NwYW4+XCIgKS5hZGRDbGFzcyggXCJtYl9ZVFBNdXRlVW5tdXRlIHl0cGljb25cIiApLmNsaWNrKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoIFlUUGxheWVyLnBsYXllci5nZXRWb2x1bWUoKSA9PSAwICkge1xuXHRcdFx0XHRcdGpRdWVyeSggWVRQbGF5ZXIgKS5ZVFBVbm11dGUoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuWVRQTXV0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0XHQvKiB2b2x1bWUgYmFyKi9cblx0XHRcdHZhciB2b2x1bWVCYXIgPSBqUXVlcnkoIFwiPGRpdi8+XCIgKS5hZGRDbGFzcyggXCJtYl9ZVFBWb2x1bWVCYXJcIiApLmNzcygge1xuXHRcdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiXG5cdFx0XHR9ICk7XG5cdFx0XHRZVFBsYXllci52b2x1bWVCYXIgPSB2b2x1bWVCYXI7XG5cdFx0XHQvKiB0aW1lIGVsYXBzZWQgKi9cblx0XHRcdHZhciBpZHggPSBqUXVlcnkoIFwiPHNwYW4vPlwiICkuYWRkQ2xhc3MoIFwibWJfWVRQVGltZVwiICk7XG5cdFx0XHR2YXIgdlVSTCA9IGRhdGEudmlkZW9VUkwgPyBkYXRhLnZpZGVvVVJMIDogXCJcIjtcblx0XHRcdGlmKCB2VVJMLmluZGV4T2YoIFwiaHR0cFwiICkgPCAwICkgdlVSTCA9IGpRdWVyeS5tYllUUGxheWVyLmxvY2F0aW9uUHJvdG9jb2wgKyBcIi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9XCIgKyBkYXRhLnZpZGVvVVJMO1xuXHRcdFx0dmFyIG1vdmllVXJsID0galF1ZXJ5KCBcIjxzcGFuLz5cIiApLmh0bWwoIGpRdWVyeS5tYllUUGxheWVyLmNvbnRyb2xzLnl0TG9nbyApLmFkZENsYXNzKCBcIm1iX1lUUFVybCB5dHBpY29uXCIgKS5hdHRyKCBcInRpdGxlXCIsIFwidmlldyBvbiBZb3VUdWJlXCIgKS5vbiggXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0d2luZG93Lm9wZW4oIHZVUkwsIFwidmlld09uWVRcIiApXG5cdFx0XHR9ICk7XG5cdFx0XHR2YXIgb25seVZpZGVvID0galF1ZXJ5KCBcIjxzcGFuLz5cIiApLmh0bWwoIGpRdWVyeS5tYllUUGxheWVyLmNvbnRyb2xzLm9ubHlZVCApLmFkZENsYXNzKCBcIm1iX09ubHlZVCB5dHBpY29uXCIgKS5vbiggXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5KCBZVFBsYXllciApLllUUEZ1bGxzY3JlZW4oIGRhdGEucmVhbGZ1bGxzY3JlZW4gKTtcblx0XHRcdH0gKTtcblx0XHRcdHZhciBwcm9ncmVzc0JhciA9IGpRdWVyeSggXCI8ZGl2Lz5cIiApLmFkZENsYXNzKCBcIm1iX1lUUFByb2dyZXNzXCIgKS5jc3MoIFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiICkuY2xpY2soIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHR0aW1lQmFyLmNzcygge1xuXHRcdFx0XHRcdHdpZHRoOiAoIGUuY2xpZW50WCAtIHRpbWVCYXIub2Zmc2V0KCkubGVmdCApXG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0WVRQbGF5ZXIudGltZVcgPSBlLmNsaWVudFggLSB0aW1lQmFyLm9mZnNldCgpLmxlZnQ7XG5cdFx0XHRcdFlUUGxheWVyLmNvbnRyb2xCYXIuZmluZCggXCIubWJfWVRQTG9hZGVkXCIgKS5jc3MoIHtcblx0XHRcdFx0XHR3aWR0aDogMFxuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdHZhciB0b3RhbFRpbWUgPSBNYXRoLmZsb29yKCBZVFBsYXllci5wbGF5ZXIuZ2V0RHVyYXRpb24oKSApO1xuXHRcdFx0XHRZVFBsYXllci5nb3RvID0gKCB0aW1lQmFyLm91dGVyV2lkdGgoKSAqIHRvdGFsVGltZSApIC8gcHJvZ3Jlc3NCYXIub3V0ZXJXaWR0aCgpO1xuXHRcdFx0XHRZVFBsYXllci5wbGF5ZXIuc2Vla1RvKCBwYXJzZUZsb2F0KCBZVFBsYXllci5nb3RvICksIHRydWUgKTtcblx0XHRcdFx0WVRQbGF5ZXIuY29udHJvbEJhci5maW5kKCBcIi5tYl9ZVFBMb2FkZWRcIiApLmNzcygge1xuXHRcdFx0XHRcdHdpZHRoOiAwXG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHRcdHZhciBsb2FkZWRCYXIgPSBqUXVlcnkoIFwiPGRpdi8+XCIgKS5hZGRDbGFzcyggXCJtYl9ZVFBMb2FkZWRcIiApLmNzcyggXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIgKTtcblx0XHRcdHZhciB0aW1lQmFyID0galF1ZXJ5KCBcIjxkaXYvPlwiICkuYWRkQ2xhc3MoIFwibWJfWVRQc2Vla2JhclwiICkuY3NzKCBcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIiApO1xuXHRcdFx0cHJvZ3Jlc3NCYXIuYXBwZW5kKCBsb2FkZWRCYXIgKS5hcHBlbmQoIHRpbWVCYXIgKTtcblx0XHRcdGJ1dHRvbkJhci5hcHBlbmQoIHBsYXlwYXVzZSApLmFwcGVuZCggTXV0ZVVubXV0ZSApLmFwcGVuZCggdm9sdW1lQmFyICkuYXBwZW5kKCBpZHggKTtcblx0XHRcdGlmKCBkYXRhLnNob3dZVExvZ28gKSB7XG5cdFx0XHRcdGJ1dHRvbkJhci5hcHBlbmQoIG1vdmllVXJsICk7XG5cdFx0XHR9XG5cdFx0XHRpZiggWVRQbGF5ZXIuaXNCYWNrZ3JvdW5kIHx8ICggZXZhbCggWVRQbGF5ZXIub3B0LnJlYWxmdWxsc2NyZWVuICkgJiYgIVlUUGxheWVyLmlzQmFja2dyb3VuZCApICkgYnV0dG9uQmFyLmFwcGVuZCggb25seVZpZGVvICk7XG5cdFx0XHRZVFBsYXllci5jb250cm9sQmFyLmFwcGVuZCggYnV0dG9uQmFyICkuYXBwZW5kKCBwcm9ncmVzc0JhciApO1xuXHRcdFx0aWYoICFZVFBsYXllci5pc0JhY2tncm91bmQgKSB7XG5cdFx0XHRcdFlUUGxheWVyLmNvbnRyb2xCYXIuYWRkQ2xhc3MoIFwiaW5saW5lUGxheWVyXCIgKTtcblx0XHRcdFx0WVRQbGF5ZXIud3JhcHBlci5iZWZvcmUoIFlUUGxheWVyLmNvbnRyb2xCYXIgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGpRdWVyeSggXCJib2R5XCIgKS5hZnRlciggWVRQbGF5ZXIuY29udHJvbEJhciApO1xuXHRcdFx0fVxuXHRcdFx0dm9sdW1lQmFyLnNpbXBsZVNsaWRlcigge1xuXHRcdFx0XHRpbml0aWFsdmFsOiBZVFBsYXllci5vcHQudm9sLFxuXHRcdFx0XHRzY2FsZTogMTAwLFxuXHRcdFx0XHRvcmllbnRhdGlvbjogXCJoXCIsXG5cdFx0XHRcdGNhbGxiYWNrOiBmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRcdFx0aWYoIGVsLnZhbHVlID09IDAgKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuWVRQTXV0ZSgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuWVRQVW5tdXRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFlUUGxheWVyLnBsYXllci5zZXRWb2x1bWUoIGVsLnZhbHVlICk7XG5cdFx0XHRcdFx0aWYoICFZVFBsYXllci5pc011dGUgKSBZVFBsYXllci5vcHQudm9sID0gZWwudmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIFlUUGxheWVyXG5cdFx0ICovXG5cdFx0Y2hlY2tGb3JTdGF0ZTogZnVuY3Rpb24oIFlUUGxheWVyICkge1xuXHRcdFx0dmFyIGludGVydmFsID0gWVRQbGF5ZXIub3B0LnNob3dDb250cm9scyA/IDEwMCA6IDQwMDtcblx0XHRcdGNsZWFySW50ZXJ2YWwoIFlUUGxheWVyLmdldFN0YXRlICk7XG5cdFx0XHQvL0NoZWNraW5nIGlmIHBsYXllciBoYXMgYmVlbiByZW1vdmVkIGZyb20gc2NlbmVcblx0XHRcdGlmKCAhalF1ZXJ5LmNvbnRhaW5zKCBkb2N1bWVudCwgWVRQbGF5ZXIgKSApIHtcblx0XHRcdFx0alF1ZXJ5KCBZVFBsYXllciApLllUUFBsYXllckRlc3Ryb3koKTtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCggWVRQbGF5ZXIuZ2V0U3RhdGUgKTtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCggWVRQbGF5ZXIuY2hlY2tGb3JTdGFydEF0ICk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0alF1ZXJ5Lm1iWVRQbGF5ZXIuY2hlY2tGb3JTdGFydCggWVRQbGF5ZXIgKTtcblxuXHRcdFx0WVRQbGF5ZXIuZ2V0U3RhdGUgPSBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBwcm9nID0galF1ZXJ5KCBZVFBsYXllciApLllUUE1hbmFnZVByb2dyZXNzKCk7XG5cdFx0XHRcdHZhciAkWVRQbGF5ZXIgPSBqUXVlcnkoIFlUUGxheWVyICk7XG5cdFx0XHRcdHZhciBkYXRhID0gWVRQbGF5ZXIub3B0O1xuXHRcdFx0XHR2YXIgc3RhcnRBdCA9IFlUUGxheWVyLm9wdC5zdGFydEF0ID8gWVRQbGF5ZXIub3B0LnN0YXJ0QXQgOiAxO1xuXHRcdFx0XHR2YXIgc3RvcEF0ID0gWVRQbGF5ZXIub3B0LnN0b3BBdCA+IFlUUGxheWVyLm9wdC5zdGFydEF0ID8gWVRQbGF5ZXIub3B0LnN0b3BBdCA6IDA7XG5cdFx0XHRcdHN0b3BBdCA9IHN0b3BBdCA8IFlUUGxheWVyLnBsYXllci5nZXREdXJhdGlvbigpID8gc3RvcEF0IDogMDtcblx0XHRcdFx0aWYoIFlUUGxheWVyLmN1cnJlbnRUaW1lICE9IHByb2cuY3VycmVudFRpbWUgKSB7XG5cblx0XHRcdFx0XHR2YXIgWVRQRXZlbnQgPSBqUXVlcnkuRXZlbnQoIFwiWVRQVGltZVwiICk7XG5cdFx0XHRcdFx0WVRQRXZlbnQudGltZSA9IFlUUGxheWVyLmN1cnJlbnRUaW1lO1xuXHRcdFx0XHRcdGpRdWVyeSggWVRQbGF5ZXIgKS50cmlnZ2VyKCBZVFBFdmVudCApO1xuXG5cdFx0XHRcdH1cblx0XHRcdFx0WVRQbGF5ZXIuY3VycmVudFRpbWUgPSBwcm9nLmN1cnJlbnRUaW1lO1xuXHRcdFx0XHRZVFBsYXllci50b3RhbFRpbWUgPSBZVFBsYXllci5wbGF5ZXIuZ2V0RHVyYXRpb24oKTtcblx0XHRcdFx0aWYoIFlUUGxheWVyLnBsYXllci5nZXRWb2x1bWUoKSA9PSAwICkgJFlUUGxheWVyLmFkZENsYXNzKCBcImlzTXV0ZWRcIiApO1xuXHRcdFx0XHRlbHNlICRZVFBsYXllci5yZW1vdmVDbGFzcyggXCJpc011dGVkXCIgKTtcblxuXHRcdFx0XHRpZiggWVRQbGF5ZXIub3B0LnNob3dDb250cm9scyApXG5cdFx0XHRcdFx0aWYoIHByb2cudG90YWxUaW1lICkge1xuXHRcdFx0XHRcdFx0WVRQbGF5ZXIuY29udHJvbEJhci5maW5kKCBcIi5tYl9ZVFBUaW1lXCIgKS5odG1sKCBqUXVlcnkubWJZVFBsYXllci5mb3JtYXRUaW1lKCBwcm9nLmN1cnJlbnRUaW1lICkgKyBcIiAvIFwiICsgalF1ZXJ5Lm1iWVRQbGF5ZXIuZm9ybWF0VGltZSggcHJvZy50b3RhbFRpbWUgKSApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRZVFBsYXllci5jb250cm9sQmFyLmZpbmQoIFwiLm1iX1lUUFRpbWVcIiApLmh0bWwoIFwiLS0gOiAtLSAvIC0tIDogLS1cIiApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRpZiggZXZhbCggWVRQbGF5ZXIub3B0LnN0b3BNb3ZpZU9uQmx1ciApICkge1xuXHRcdFx0XHRcdGlmKCAhZG9jdW1lbnQuaGFzRm9jdXMoKSApIHtcblx0XHRcdFx0XHRcdGlmKCBZVFBsYXllci5zdGF0ZSA9PSAxICkge1xuXHRcdFx0XHRcdFx0XHRZVFBsYXllci5oYXNGb2N1cyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHQkWVRQbGF5ZXIuWVRQUGF1c2UoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYoIGRvY3VtZW50Lmhhc0ZvY3VzKCkgJiYgIVlUUGxheWVyLmhhc0ZvY3VzICYmICEoIFlUUGxheWVyLnN0YXRlID09IC0xIHx8IFlUUGxheWVyLnN0YXRlID09IDAgKSApIHtcblx0XHRcdFx0XHRcdFlUUGxheWVyLmhhc0ZvY3VzID0gdHJ1ZTtcblx0XHRcdFx0XHRcdCRZVFBsYXllci5ZVFBQbGF5KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIFlUUGxheWVyLmNvbnRyb2xCYXIubGVuZ3RoICYmIFlUUGxheWVyLmNvbnRyb2xCYXIub3V0ZXJXaWR0aCgpIDw9IDQwMCAmJiAhWVRQbGF5ZXIuaXNDb21wYWN0ICkge1xuXHRcdFx0XHRcdFlUUGxheWVyLmNvbnRyb2xCYXIuYWRkQ2xhc3MoIFwiY29tcGFjdFwiICk7XG5cdFx0XHRcdFx0WVRQbGF5ZXIuaXNDb21wYWN0ID0gdHJ1ZTtcblx0XHRcdFx0XHRpZiggIVlUUGxheWVyLmlzTXV0ZSAmJiBZVFBsYXllci52b2x1bWVCYXIgKSBZVFBsYXllci52b2x1bWVCYXIudXBkYXRlU2xpZGVyVmFsKCBZVFBsYXllci5vcHQudm9sICk7XG5cdFx0XHRcdH0gZWxzZSBpZiggWVRQbGF5ZXIuY29udHJvbEJhci5sZW5ndGggJiYgWVRQbGF5ZXIuY29udHJvbEJhci5vdXRlcldpZHRoKCkgPiA0MDAgJiYgWVRQbGF5ZXIuaXNDb21wYWN0ICkge1xuXHRcdFx0XHRcdFlUUGxheWVyLmNvbnRyb2xCYXIucmVtb3ZlQ2xhc3MoIFwiY29tcGFjdFwiICk7XG5cdFx0XHRcdFx0WVRQbGF5ZXIuaXNDb21wYWN0ID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYoICFZVFBsYXllci5pc011dGUgJiYgWVRQbGF5ZXIudm9sdW1lQmFyICkgWVRQbGF5ZXIudm9sdW1lQmFyLnVwZGF0ZVNsaWRlclZhbCggWVRQbGF5ZXIub3B0LnZvbCApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKCBZVFBsYXllci5wbGF5ZXIuZ2V0UGxheWVyU3RhdGUoKSA9PSAxICYmICggcGFyc2VGbG9hdCggWVRQbGF5ZXIucGxheWVyLmdldER1cmF0aW9uKCkgLSAxLjUgKSA8IFlUUGxheWVyLnBsYXllci5nZXRDdXJyZW50VGltZSgpIHx8ICggc3RvcEF0ID4gMCAmJiBwYXJzZUZsb2F0KCBZVFBsYXllci5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSApID4gc3RvcEF0ICkgKSApIHtcblx0XHRcdFx0XHRpZiggWVRQbGF5ZXIuaXNFbmRlZCApIHJldHVybjtcblx0XHRcdFx0XHRZVFBsYXllci5pc0VuZGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFlUUGxheWVyLmlzRW5kZWQgPSBmYWxzZVxuXHRcdFx0XHRcdH0sIDEwMDAgKTtcblxuXHRcdFx0XHRcdGlmKCBZVFBsYXllci5pc1BsYXlMaXN0ICkge1xuXG5cdFx0XHRcdFx0XHRpZiggIWRhdGEubG9vcCB8fCAoIGRhdGEubG9vcCA+IDAgJiYgWVRQbGF5ZXIucGxheWVyLmxvb3BUaW1lID09PSBkYXRhLmxvb3AgLSAxICkgKSB7XG5cblx0XHRcdFx0XHRcdFx0WVRQbGF5ZXIucGxheWVyLmxvb3BUaW1lID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKCBZVFBsYXllci5nZXRTdGF0ZSApO1xuXHRcdFx0XHRcdFx0XHR2YXIgWVRQRW5kID0galF1ZXJ5LkV2ZW50KCBcIllUUEVuZFwiICk7XG5cdFx0XHRcdFx0XHRcdFlUUEVuZC50aW1lID0gWVRQbGF5ZXIuY3VycmVudFRpbWU7XG5cdFx0XHRcdFx0XHRcdGpRdWVyeSggWVRQbGF5ZXIgKS50cmlnZ2VyKCBZVFBFbmQgKTtcblx0XHRcdFx0XHRcdFx0Ly9ZVFBsYXllci5zdGF0ZSA9IDA7XG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fSBlbHNlIGlmKCAhZGF0YS5sb29wIHx8ICggZGF0YS5sb29wID4gMCAmJiBZVFBsYXllci5wbGF5ZXIubG9vcFRpbWUgPT09IGRhdGEubG9vcCAtIDEgKSApIHtcblxuXHRcdFx0XHRcdFx0WVRQbGF5ZXIucGxheWVyLmxvb3BUaW1lID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0WVRQbGF5ZXIucHJldmVudFRyaWdnZXIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0WVRQbGF5ZXIuc3RhdGUgPSAyO1xuXHRcdFx0XHRcdFx0alF1ZXJ5KCBZVFBsYXllciApLllUUFBhdXNlKCk7XG5cblx0XHRcdFx0XHRcdFlUUGxheWVyLndyYXBwZXIuQ1NTQW5pbWF0ZSgge1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRcdFx0XHR9LCA1MDAsIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHRcdGlmKCBZVFBsYXllci5jb250cm9sQmFyLmxlbmd0aCApXG5cdFx0XHRcdFx0XHRcdFx0WVRQbGF5ZXIuY29udHJvbEJhci5maW5kKCBcIi5tYl9ZVFBQbGF5cGF1c2VcIiApLmh0bWwoIGpRdWVyeS5tYllUUGxheWVyLmNvbnRyb2xzLnBsYXkgKTtcblxuXHRcdFx0XHRcdFx0XHR2YXIgWVRQRW5kID0galF1ZXJ5LkV2ZW50KCBcIllUUEVuZFwiICk7XG5cdFx0XHRcdFx0XHRcdFlUUEVuZC50aW1lID0gWVRQbGF5ZXIuY3VycmVudFRpbWU7XG5cdFx0XHRcdFx0XHRcdGpRdWVyeSggWVRQbGF5ZXIgKS50cmlnZ2VyKCBZVFBFbmQgKTtcblxuXHRcdFx0XHRcdFx0XHRZVFBsYXllci5wbGF5ZXIuc2Vla1RvKCBzdGFydEF0LCB0cnVlICk7XG5cdFx0XHRcdFx0XHRcdGlmKCAhWVRQbGF5ZXIuaXNCYWNrZ3JvdW5kICkge1xuXHRcdFx0XHRcdFx0XHRcdFlUUGxheWVyLm9wdC5jb250YWlubWVudC5jc3MoIHtcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwicmdiYSgwLDAsMCwwLjUpIHVybChcIiArIFlUUGxheWVyLm9wdC5iYWNrZ3JvdW5kVXJsICsgXCIpIGNlbnRlciBjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0WVRQbGF5ZXIucGxheWVyLmxvb3BUaW1lID0gWVRQbGF5ZXIucGxheWVyLmxvb3BUaW1lID8gKytZVFBsYXllci5wbGF5ZXIubG9vcFRpbWUgOiAxO1xuXHRcdFx0XHRcdHN0YXJ0QXQgPSBzdGFydEF0IHx8IDE7XG5cdFx0XHRcdFx0WVRQbGF5ZXIucHJldmVudFRyaWdnZXIgPSB0cnVlO1xuXHRcdFx0XHRcdFlUUGxheWVyLnN0YXRlID0gMjtcblx0XHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuWVRQUGF1c2UoKTtcblx0XHRcdFx0XHRZVFBsYXllci5wbGF5ZXIuc2Vla1RvKCBzdGFydEF0LCB0cnVlICk7XG5cdFx0XHRcdFx0JFlUUGxheWVyLllUUFBsYXkoKTtcblxuXG5cdFx0XHRcdH1cblx0XHRcdH0sIGludGVydmFsICk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IHRpbWVcblx0XHQgKi9cblx0XHRnZXRUaW1lOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBZVFBsYXllciA9IHRoaXMuZ2V0KCAwICk7XG5cdFx0XHRyZXR1cm4galF1ZXJ5Lm1iWVRQbGF5ZXIuZm9ybWF0VGltZSggWVRQbGF5ZXIuY3VycmVudFRpbWUgKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gdG90YWwgdGltZVxuXHRcdCAqL1xuXHRcdGdldFRvdGFsVGltZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgWVRQbGF5ZXIgPSB0aGlzLmdldCggMCApO1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5tYllUUGxheWVyLmZvcm1hdFRpbWUoIFlUUGxheWVyLnRvdGFsVGltZSApO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gWVRQbGF5ZXJcblx0XHQgKi9cblx0XHRjaGVja0ZvclN0YXJ0OiBmdW5jdGlvbiggWVRQbGF5ZXIgKSB7XG5cblx0XHRcdHZhciAkWVRQbGF5ZXIgPSBqUXVlcnkoIFlUUGxheWVyICk7XG5cblx0XHRcdC8vQ2hlY2tpbmcgaWYgcGxheWVyIGhhcyBiZWVuIHJlbW92ZWQgZnJvbSBzY2VuZVxuXHRcdFx0aWYoICFqUXVlcnkuY29udGFpbnMoIGRvY3VtZW50LCBZVFBsYXllciApICkge1xuXHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuWVRQUGxheWVyRGVzdHJveSgpO1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblxuXHRcdFx0Lypcblx0XHRcdCBpZiggalF1ZXJ5LmJyb3dzZXIuY2hyb21lIClcblx0XHRcdCBZVFBsYXllci5vcHQucXVhbGl0eSA9IFwiZGVmYXVsdFwiO1xuXHRcdFx0ICovXG5cblx0XHRcdFlUUGxheWVyLnByZXZlbnRUcmlnZ2VyID0gdHJ1ZTtcblx0XHRcdFlUUGxheWVyLnN0YXRlID0gMlxuXHRcdFx0alF1ZXJ5KCBZVFBsYXllciApLllUUFBhdXNlKCk7XG5cblx0XHRcdGpRdWVyeSggWVRQbGF5ZXIgKS5tdXRlWVRQVm9sdW1lKCk7XG5cdFx0XHRqUXVlcnkoIFwiI2NvbnRyb2xCYXJfXCIgKyBZVFBsYXllci5pZCApLnJlbW92ZSgpO1xuXG5cdFx0XHRZVFBsYXllci5jb250cm9sQmFyID0gZmFsc2U7XG5cblx0XHRcdGlmKCBZVFBsYXllci5vcHQuc2hvd0NvbnRyb2xzIClcblx0XHRcdFx0alF1ZXJ5Lm1iWVRQbGF5ZXIuYnVpbGRDb250cm9scyggWVRQbGF5ZXIgKTtcblxuXHRcdFx0aWYoIFlUUGxheWVyLm9wdC5hZGRSYXN0ZXIgKSB7XG5cblx0XHRcdFx0dmFyIGNsYXNzTiA9IFlUUGxheWVyLm9wdC5hZGRSYXN0ZXIgPT0gXCJkb3RcIiA/IFwicmFzdGVyLWRvdFwiIDogXCJyYXN0ZXJcIjtcblx0XHRcdFx0WVRQbGF5ZXIub3ZlcmxheS5hZGRDbGFzcyggWVRQbGF5ZXIuaXNSZXRpbmEgPyBjbGFzc04gKyBcIiByZXRpbmFcIiA6IGNsYXNzTiApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFlUUGxheWVyLm92ZXJsYXkucmVtb3ZlQ2xhc3MoIGZ1bmN0aW9uKCBpbmRleCwgY2xhc3NOYW1lcyApIHtcblx0XHRcdFx0XHQvLyBjaGFuZ2UgdGhlIGxpc3QgaW50byBhbiBhcnJheVxuXHRcdFx0XHRcdHZhciBjdXJyZW50X2NsYXNzZXMgPSBjbGFzc05hbWVzLnNwbGl0KCBcIiBcIiApLFxuXHRcdFx0XHRcdFx0Ly8gYXJyYXkgb2YgY2xhc3NlcyB3aGljaCBhcmUgdG8gYmUgcmVtb3ZlZFxuXHRcdFx0XHRcdFx0Y2xhc3Nlc190b19yZW1vdmUgPSBbXTtcblx0XHRcdFx0XHRqUXVlcnkuZWFjaCggY3VycmVudF9jbGFzc2VzLCBmdW5jdGlvbiggaW5kZXgsIGNsYXNzX25hbWUgKSB7XG5cdFx0XHRcdFx0XHQvLyBpZiB0aGUgY2xhc3NuYW1lIGJlZ2lucyB3aXRoIGJnIGFkZCBpdCB0byB0aGUgY2xhc3Nlc190b19yZW1vdmUgYXJyYXlcblx0XHRcdFx0XHRcdGlmKCAvcmFzdGVyLiovLnRlc3QoIGNsYXNzX25hbWUgKSApIHtcblx0XHRcdFx0XHRcdFx0Y2xhc3Nlc190b19yZW1vdmUucHVzaCggY2xhc3NfbmFtZSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRjbGFzc2VzX3RvX3JlbW92ZS5wdXNoKCBcInJldGluYVwiICk7XG5cdFx0XHRcdFx0Ly8gdHVybiB0aGUgYXJyYXkgYmFjayBpbnRvIGEgc3RyaW5nXG5cdFx0XHRcdFx0cmV0dXJuIGNsYXNzZXNfdG9fcmVtb3ZlLmpvaW4oIFwiIFwiICk7XG5cdFx0XHRcdH0gKVxuXG5cdFx0XHR9XG5cblx0XHRcdHZhciBzdGFydEF0ID0gWVRQbGF5ZXIub3B0LnN0YXJ0QXQgPyBZVFBsYXllci5vcHQuc3RhcnRBdCA6IDE7XG5cdFx0XHRZVFBsYXllci5wbGF5ZXIucGxheVZpZGVvKCk7XG5cdFx0XHRZVFBsYXllci5wbGF5ZXIuc2Vla1RvKCBzdGFydEF0LCB0cnVlICk7XG5cblx0XHRcdFlUUGxheWVyLmNoZWNrRm9yU3RhcnRBdCA9IHNldEludGVydmFsKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRqUXVlcnkoIFlUUGxheWVyICkuWVRQTXV0ZSgpO1xuXG5cdFx0XHRcdHZhciBjYW5QbGF5VmlkZW8gPSBZVFBsYXllci5wbGF5ZXIuZ2V0VmlkZW9Mb2FkZWRGcmFjdGlvbigpID49IHN0YXJ0QXQgLyBZVFBsYXllci5wbGF5ZXIuZ2V0RHVyYXRpb24oKTtcblxuXHRcdFx0XHRpZiggWVRQbGF5ZXIucGxheWVyLmdldER1cmF0aW9uKCkgPiAwICYmIFlUUGxheWVyLnBsYXllci5nZXRDdXJyZW50VGltZSgpID49IHN0YXJ0QXQgJiYgY2FuUGxheVZpZGVvICkge1xuXG5cdFx0XHRcdFx0Ly9ZVFBsYXllci5wbGF5ZXIucGxheVZpZGVvKCk7XG5cdFx0XHRcdFx0Ly9jb25zb2xlLnRpbWVFbmQoIFwiY2hlY2tmb3JTdGFydFwiICk7XG5cblx0XHRcdFx0XHRjbGVhckludGVydmFsKCBZVFBsYXllci5jaGVja0ZvclN0YXJ0QXQgKTtcblxuXHRcdFx0XHRcdGlmKCB0eXBlb2YgWVRQbGF5ZXIub3B0Lm9uUmVhZHkgPT0gXCJmdW5jdGlvblwiIClcblx0XHRcdFx0XHRcdFlUUGxheWVyLm9wdC5vblJlYWR5KCBZVFBsYXllciApO1xuXG5cdFx0XHRcdFx0WVRQbGF5ZXIuaXNSZWFkeSA9IHRydWU7XG5cdFx0XHRcdFx0dmFyIFlUUHJlYWR5ID0galF1ZXJ5LkV2ZW50KCBcIllUUFJlYWR5XCIgKTtcblx0XHRcdFx0XHRZVFByZWFkeS50aW1lID0gWVRQbGF5ZXIuY3VycmVudFRpbWU7XG5cdFx0XHRcdFx0alF1ZXJ5KCBZVFBsYXllciApLnRyaWdnZXIoIFlUUHJlYWR5ICk7XG5cblxuXHRcdFx0XHRcdFlUUGxheWVyLnByZXZlbnRUcmlnZ2VyID0gdHJ1ZTtcblx0XHRcdFx0XHRZVFBsYXllci5zdGF0ZSA9IDI7XG5cdFx0XHRcdFx0alF1ZXJ5KCBZVFBsYXllciApLllUUFBhdXNlKCk7XG5cblx0XHRcdFx0XHRpZiggIVlUUGxheWVyLm9wdC5tdXRlICkgalF1ZXJ5KCBZVFBsYXllciApLllUUFVubXV0ZSgpO1xuXHRcdFx0XHRcdFlUUGxheWVyLmNhblRyaWdnZXIgPSB0cnVlO1xuXG5cdFx0XHRcdFx0aWYoIFlUUGxheWVyLm9wdC5hdXRvUGxheSApIHtcblxuXG5cdFx0XHRcdFx0XHR2YXIgWVRQU3RhcnQgPSBqUXVlcnkuRXZlbnQoIFwiWVRQU3RhcnRcIiApO1xuXHRcdFx0XHRcdFx0WVRQU3RhcnQudGltZSA9IFlUUGxheWVyLmN1cnJlbnRUaW1lO1xuXHRcdFx0XHRcdFx0alF1ZXJ5KCBZVFBsYXllciApLnRyaWdnZXIoIFlUUFN0YXJ0ICk7XG5cblx0XHRcdFx0XHRcdCRZVFBsYXllci5jc3MoIFwiYmFja2dyb3VuZC1pbWFnZVwiLCBcIm5vbmVcIiApO1xuXHRcdFx0XHRcdFx0alF1ZXJ5KCBZVFBsYXllci5wbGF5ZXJFbCApLkNTU0FuaW1hdGUoIHtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMVxuXHRcdFx0XHRcdFx0fSwgMTAwMCApO1xuXG5cdFx0XHRcdFx0XHQkWVRQbGF5ZXIuWVRQUGxheSgpO1xuXG5cdFx0XHRcdFx0XHRZVFBsYXllci53cmFwcGVyLkNTU0FuaW1hdGUoIHtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogWVRQbGF5ZXIuaXNBbG9uZSA/IDEgOiBZVFBsYXllci5vcHQub3BhY2l0eVxuXHRcdFx0XHRcdFx0fSwgMTAwMCApO1xuXG5cdFx0XHRcdFx0XHQvKiBGaXggZm9yIFNhZmFyaSBmcmVlemUgKi9cblx0XHRcdFx0XHRcdGlmKCBqUXVlcnkuYnJvd3Nlci5zYWZhcmkgKSB7XG5cblx0XHRcdFx0XHRcdFx0WVRQbGF5ZXIuc2FmYXJpUGxheSA9IHNldEludGVydmFsKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdFx0XHRcdGlmKCBZVFBsYXllci5zdGF0ZSAhPSAxIClcblx0XHRcdFx0XHRcdFx0XHRcdCRZVFBsYXllci5ZVFBQbGF5KCk7XG5cdFx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCggWVRQbGF5ZXIuc2FmYXJpUGxheSApXG5cdFx0XHRcdFx0XHRcdH0sIDEwIClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCRZVFBsYXllci5vbiggXCJZVFBSZWFkeVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0JFlUUGxheWVyLllUUFBsYXkoKTtcblx0XHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdC8vJFlUUGxheWVyLllUUFBhdXNlKCk7XG5cdFx0XHRcdFx0XHRZVFBsYXllci5wbGF5ZXIucGF1c2VWaWRlbygpO1xuXHRcdFx0XHRcdFx0aWYoICFZVFBsYXllci5pc1BsYXllciApIHtcblx0XHRcdFx0XHRcdFx0alF1ZXJ5KCBZVFBsYXllci5wbGF5ZXJFbCApLkNTU0FuaW1hdGUoIHtcblx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAxXG5cdFx0XHRcdFx0XHRcdH0sIDUwMCApO1xuXG5cdFx0XHRcdFx0XHRcdFlUUGxheWVyLndyYXBwZXIuQ1NTQW5pbWF0ZSgge1xuXHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IFlUUGxheWVyLmlzQWxvbmUgPyAxIDogWVRQbGF5ZXIub3B0Lm9wYWNpdHlcblx0XHRcdFx0XHRcdFx0fSwgNTAwICk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmKCBZVFBsYXllci5jb250cm9sQmFyLmxlbmd0aCApXG5cdFx0XHRcdFx0XHRcdFlUUGxheWVyLmNvbnRyb2xCYXIuZmluZCggXCIubWJfWVRQUGxheXBhdXNlXCIgKS5odG1sKCBqUXVlcnkubWJZVFBsYXllci5jb250cm9scy5wbGF5ICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiggWVRQbGF5ZXIuaXNQbGF5ZXIgJiYgIVlUUGxheWVyLm9wdC5hdXRvUGxheSAmJiAoIFlUUGxheWVyLmxvYWRpbmcgJiYgWVRQbGF5ZXIubG9hZGluZy5sZW5ndGggKSApIHtcblx0XHRcdFx0XHRcdFlUUGxheWVyLmxvYWRpbmcuaHRtbCggXCJSZWFkeVwiICk7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0WVRQbGF5ZXIubG9hZGluZy5mYWRlT3V0KCk7XG5cdFx0XHRcdFx0XHR9LCAxMDAgKVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmKCBZVFBsYXllci5jb250cm9sQmFyICYmIFlUUGxheWVyLmNvbnRyb2xCYXIubGVuZ3RoIClcblx0XHRcdFx0XHRcdFlUUGxheWVyLmNvbnRyb2xCYXIuc2xpZGVEb3duKCAxMDAwICk7XG5cblx0XHRcdFx0fSBlbHNlIGlmKCBqUXVlcnkuYnJvd3Nlci5zYWZhcmkgKSB7XG5cdFx0XHRcdFx0WVRQbGF5ZXIucGxheWVyLnBsYXlWaWRlbygpO1xuXHRcdFx0XHRcdGlmKCBzdGFydEF0ID49IDAgKSBZVFBsYXllci5wbGF5ZXIuc2Vla1RvKCBzdGFydEF0LCB0cnVlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSwgMSApO1xuXG5cdFx0fSxcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSBhbGlnblxuXHRcdCAqL1xuXHRcdHNldEFsaWduOiBmdW5jdGlvbiggYWxpZ24gKSB7XG5cdFx0XHR2YXIgJFlUcGxheWVyID0gdGhpcztcblxuXHRcdFx0JFlUcGxheWVyLm9wdGltaXplRGlzcGxheSggYWxpZ24gKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIGFsaWduXG5cdFx0ICovXG5cdFx0Z2V0QWxpZ246IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIFlUUGxheWVyID0gdGhpcy5nZXQoIDAgKTtcblx0XHRcdHJldHVybiBZVFBsYXllci5vcHQuYWxpZ247XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSBzXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmb3JtYXRUaW1lOiBmdW5jdGlvbiggcyApIHtcblx0XHRcdHZhciBtaW4gPSBNYXRoLmZsb29yKCBzIC8gNjAgKTtcblx0XHRcdHZhciBzZWMgPSBNYXRoLmZsb29yKCBzIC0gKCA2MCAqIG1pbiApICk7XG5cdFx0XHRyZXR1cm4oIG1pbiA8PSA5ID8gXCIwXCIgKyBtaW4gOiBtaW4gKSArIFwiIDogXCIgKyAoIHNlYyA8PSA5ID8gXCIwXCIgKyBzZWMgOiBzZWMgKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSBhbGlnblxuXHQgKiBjYW4gYmUgY2VudGVyLCB0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnQ7IChkZWZhdWx0IGlzIGNlbnRlcixjZW50ZXIpXG5cdCAqL1xuXHRqUXVlcnkuZm4ub3B0aW1pemVEaXNwbGF5ID0gZnVuY3Rpb24oIGFsaWduICkge1xuXHRcdHZhciBZVFBsYXllciA9IHRoaXMuZ2V0KCAwICk7XG5cdFx0dmFyIHBsYXllckJveCA9IGpRdWVyeSggWVRQbGF5ZXIucGxheWVyRWwgKTtcblx0XHR2YXIgdmlkID0ge307XG5cblx0XHRZVFBsYXllci5vcHQuYWxpZ24gPSBhbGlnbiB8fCBZVFBsYXllci5vcHQuYWxpZ247XG5cblx0XHRZVFBsYXllci5vcHQuYWxpZ24gPSB0eXBlb2YgWVRQbGF5ZXIub3B0LmFsaWduICE9IFwidW5kZWZpbmVkIFwiID8gWVRQbGF5ZXIub3B0LmFsaWduIDogXCJjZW50ZXIsY2VudGVyXCI7XG5cdFx0dmFyIFlUUEFsaWduID0gWVRQbGF5ZXIub3B0LmFsaWduLnNwbGl0KCBcIixcIiApO1xuXG5cdFx0Ly9kYXRhLm9wdGltaXplRGlzcGxheSA9IFlUUGxheWVyLmlzUGxheWVyID8gZmFsc2UgOiBkYXRhLm9wdGltaXplRGlzcGxheTtcblxuXHRcdGlmKCBZVFBsYXllci5vcHQub3B0aW1pemVEaXNwbGF5ICkge1xuXHRcdFx0dmFyIGFidW5kYW5jZSA9IDEwMDtcblx0XHRcdHZhciB3aW4gPSB7fTtcblx0XHRcdHZhciBlbCA9IFlUUGxheWVyLndyYXBwZXI7XG5cblx0XHRcdHdpbi53aWR0aCA9IGVsLm91dGVyV2lkdGgoKTtcblx0XHRcdHdpbi5oZWlnaHQgPSBlbC5vdXRlckhlaWdodCgpO1xuXG5cdFx0XHR2aWQud2lkdGggPSB3aW4ud2lkdGggKyBhYnVuZGFuY2U7XG5cdFx0XHR2aWQuaGVpZ2h0ID0gWVRQbGF5ZXIub3B0LnJhdGlvID09IFwiMTYvOVwiID8gTWF0aC5jZWlsKCB2aWQud2lkdGggKiAoIDkgLyAxNiApICkgOiBNYXRoLmNlaWwoIHZpZC53aWR0aCAqICggMyAvIDQgKSApO1xuXG5cdFx0XHR2aWQubWFyZ2luVG9wID0gLSggKCB2aWQuaGVpZ2h0IC0gd2luLmhlaWdodCApIC8gMiApO1xuXHRcdFx0dmlkLm1hcmdpbkxlZnQgPSAwO1xuXG5cdFx0XHR2YXIgbG93ZXN0ID0gdmlkLmhlaWdodCA8IHdpbi5oZWlnaHQ7XG5cblx0XHRcdGlmKCBsb3dlc3QgKSB7XG5cblx0XHRcdFx0dmlkLmhlaWdodCA9IHdpbi5oZWlnaHQgKyBhYnVuZGFuY2U7XG5cdFx0XHRcdHZpZC53aWR0aCA9IFlUUGxheWVyLm9wdC5yYXRpbyA9PSBcIjE2LzlcIiA/IE1hdGguZmxvb3IoIHZpZC5oZWlnaHQgKiAoIDE2IC8gOSApICkgOiBNYXRoLmZsb29yKCB2aWQuaGVpZ2h0ICogKCA0IC8gMyApICk7XG5cblx0XHRcdFx0dmlkLm1hcmdpblRvcCA9IDA7XG5cdFx0XHRcdHZpZC5tYXJnaW5MZWZ0ID0gLSggKCB2aWQud2lkdGggLSB3aW4ud2lkdGggKSAvIDIgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRmb3IoIHZhciBhIGluIFlUUEFsaWduICkge1xuXG5cdFx0XHRcdC8vdmFyIGFsID0gWVRQQWxpZ25bIGEgXS50cmltKCk7XG5cdFx0XHRcdHZhciBhbCA9IFlUUEFsaWduWyBhIF0ucmVwbGFjZSggLyAvZywgXCJcIiApO1xuXG5cdFx0XHRcdHN3aXRjaCggYWwgKSB7XG5cblx0XHRcdFx0XHRjYXNlIFwidG9wXCI6XG5cdFx0XHRcdFx0XHR2aWQubWFyZ2luVG9wID0gbG93ZXN0ID8gLSggKCB2aWQuaGVpZ2h0IC0gd2luLmhlaWdodCApIC8gMiApIDogMDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBcImJvdHRvbVwiOlxuXHRcdFx0XHRcdFx0dmlkLm1hcmdpblRvcCA9IGxvd2VzdCA/IDAgOiAtKCB2aWQuaGVpZ2h0IC0gd2luLmhlaWdodCApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFwibGVmdFwiOlxuXHRcdFx0XHRcdFx0dmlkLm1hcmdpbkxlZnQgPSAwO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFwicmlnaHRcIjpcblx0XHRcdFx0XHRcdHZpZC5tYXJnaW5MZWZ0ID0gbG93ZXN0ID8gLSggdmlkLndpZHRoIC0gd2luLndpZHRoICkgOiAwO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZpZC53aWR0aCA9IFwiMTAwJVwiO1xuXHRcdFx0dmlkLmhlaWdodCA9IFwiMTAwJVwiO1xuXHRcdFx0dmlkLm1hcmdpblRvcCA9IDA7XG5cdFx0XHR2aWQubWFyZ2luTGVmdCA9IDA7XG5cdFx0fVxuXG5cdFx0cGxheWVyQm94LmNzcygge1xuXHRcdFx0d2lkdGg6IHZpZC53aWR0aCxcblx0XHRcdGhlaWdodDogdmlkLmhlaWdodCxcblx0XHRcdG1hcmdpblRvcDogdmlkLm1hcmdpblRvcCxcblx0XHRcdG1hcmdpbkxlZnQ6IHZpZC5tYXJnaW5MZWZ0XG5cdFx0fSApO1xuXG5cdH07XG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gYXJyXG5cdCAqIEByZXR1cm5zIHtBcnJheXxzdHJpbmd8QmxvYnwqfVxuXHQgKlxuXHQgKi9cblx0alF1ZXJ5LnNodWZmbGUgPSBmdW5jdGlvbiggYXJyICkge1xuXHRcdHZhciBuZXdBcnJheSA9IGFyci5zbGljZSgpO1xuXHRcdHZhciBsZW4gPSBuZXdBcnJheS5sZW5ndGg7XG5cdFx0dmFyIGkgPSBsZW47XG5cdFx0d2hpbGUoIGktLSApIHtcblx0XHRcdHZhciBwID0gcGFyc2VJbnQoIE1hdGgucmFuZG9tKCkgKiBsZW4gKTtcblx0XHRcdHZhciB0ID0gbmV3QXJyYXlbIGkgXTtcblx0XHRcdG5ld0FycmF5WyBpIF0gPSBuZXdBcnJheVsgcCBdO1xuXHRcdFx0bmV3QXJyYXlbIHAgXSA9IHQ7XG5cdFx0fVxuXHRcdHJldHVybiBuZXdBcnJheTtcblx0fTtcblxuXHRqUXVlcnkuZm4udW5zZWxlY3RhYmxlID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5jc3MoIHtcblx0XHRcdFx0XCItbW96LXVzZXItc2VsZWN0XCI6IFwibm9uZVwiLFxuXHRcdFx0XHRcIi13ZWJraXQtdXNlci1zZWxlY3RcIjogXCJub25lXCIsXG5cdFx0XHRcdFwidXNlci1zZWxlY3RcIjogXCJub25lXCJcblx0XHRcdH0gKS5hdHRyKCBcInVuc2VsZWN0YWJsZVwiLCBcIm9uXCIgKTtcblx0XHR9ICk7XG5cdH07XG5cblxuXHQvKiBFeHBvc2VkIHB1YmxpYyBtZXRob2QgKi9cblx0alF1ZXJ5LmZuLllUUGxheWVyID0galF1ZXJ5Lm1iWVRQbGF5ZXIuYnVpbGRQbGF5ZXI7XG5cdGpRdWVyeS5mbi5ZVFBHZXRQbGF5ZXIgPSBqUXVlcnkubWJZVFBsYXllci5nZXRQbGF5ZXI7XG5cdGpRdWVyeS5mbi5ZVFBHZXRWaWRlb0lEID0galF1ZXJ5Lm1iWVRQbGF5ZXIuZ2V0VmlkZW9JRDtcblx0alF1ZXJ5LmZuLllUUENoYW5nZU1vdmllID0galF1ZXJ5Lm1iWVRQbGF5ZXIuY2hhbmdlTW92aWU7XG5cdGpRdWVyeS5mbi5ZVFBQbGF5ZXJEZXN0cm95ID0galF1ZXJ5Lm1iWVRQbGF5ZXIucGxheWVyRGVzdHJveTtcblxuXHRqUXVlcnkuZm4uWVRQUGxheSA9IGpRdWVyeS5tYllUUGxheWVyLnBsYXk7XG5cdGpRdWVyeS5mbi5ZVFBUb2dnbGVQbGF5ID0galF1ZXJ5Lm1iWVRQbGF5ZXIudG9nZ2xlUGxheTtcblx0alF1ZXJ5LmZuLllUUFN0b3AgPSBqUXVlcnkubWJZVFBsYXllci5zdG9wO1xuXHRqUXVlcnkuZm4uWVRQUGF1c2UgPSBqUXVlcnkubWJZVFBsYXllci5wYXVzZTtcblx0alF1ZXJ5LmZuLllUUFNlZWtUbyA9IGpRdWVyeS5tYllUUGxheWVyLnNlZWtUbztcblxuXHRqUXVlcnkuZm4uWVRQbGF5bGlzdCA9IGpRdWVyeS5tYllUUGxheWVyLnBsYXlsaXN0O1xuXHRqUXVlcnkuZm4uWVRQUGxheU5leHQgPSBqUXVlcnkubWJZVFBsYXllci5wbGF5TmV4dDtcblx0alF1ZXJ5LmZuLllUUFBsYXlQcmV2ID0galF1ZXJ5Lm1iWVRQbGF5ZXIucGxheVByZXY7XG5cdGpRdWVyeS5mbi5ZVFBQbGF5SW5kZXggPSBqUXVlcnkubWJZVFBsYXllci5wbGF5SW5kZXg7XG5cblx0alF1ZXJ5LmZuLllUUE11dGUgPSBqUXVlcnkubWJZVFBsYXllci5tdXRlO1xuXHRqUXVlcnkuZm4uWVRQVW5tdXRlID0galF1ZXJ5Lm1iWVRQbGF5ZXIudW5tdXRlO1xuXHRqUXVlcnkuZm4uWVRQVG9nZ2xlVm9sdW1lID0galF1ZXJ5Lm1iWVRQbGF5ZXIudG9nZ2xlVm9sdW1lO1xuXHRqUXVlcnkuZm4uWVRQU2V0Vm9sdW1lID0galF1ZXJ5Lm1iWVRQbGF5ZXIuc2V0Vm9sdW1lO1xuXG5cdGpRdWVyeS5mbi5ZVFBHZXRWaWRlb0RhdGEgPSBqUXVlcnkubWJZVFBsYXllci5nZXRWaWRlb0RhdGE7XG5cdGpRdWVyeS5mbi5ZVFBGdWxsc2NyZWVuID0galF1ZXJ5Lm1iWVRQbGF5ZXIuZnVsbHNjcmVlbjtcblx0alF1ZXJ5LmZuLllUUFRvZ2dsZUxvb3BzID0galF1ZXJ5Lm1iWVRQbGF5ZXIudG9nZ2xlTG9vcHM7XG5cdGpRdWVyeS5mbi5ZVFBTZXRWaWRlb1F1YWxpdHkgPSBqUXVlcnkubWJZVFBsYXllci5zZXRWaWRlb1F1YWxpdHk7XG5cdGpRdWVyeS5mbi5ZVFBNYW5hZ2VQcm9ncmVzcyA9IGpRdWVyeS5tYllUUGxheWVyLm1hbmFnZVByb2dyZXNzO1xuXG5cdGpRdWVyeS5mbi5ZVFBBcHBseUZpbHRlciA9IGpRdWVyeS5tYllUUGxheWVyLmFwcGx5RmlsdGVyO1xuXHRqUXVlcnkuZm4uWVRQQXBwbHlGaWx0ZXJzID0galF1ZXJ5Lm1iWVRQbGF5ZXIuYXBwbHlGaWx0ZXJzO1xuXHRqUXVlcnkuZm4uWVRQVG9nZ2xlRmlsdGVyID0galF1ZXJ5Lm1iWVRQbGF5ZXIudG9nZ2xlRmlsdGVyO1xuXHRqUXVlcnkuZm4uWVRQVG9nZ2xlRmlsdGVycyA9IGpRdWVyeS5tYllUUGxheWVyLnRvZ2dsZUZpbHRlcnM7XG5cdGpRdWVyeS5mbi5ZVFBSZW1vdmVGaWx0ZXIgPSBqUXVlcnkubWJZVFBsYXllci5yZW1vdmVGaWx0ZXI7XG5cdGpRdWVyeS5mbi5ZVFBEaXNhYmxlRmlsdGVycyA9IGpRdWVyeS5tYllUUGxheWVyLmRpc2FibGVGaWx0ZXJzO1xuXHRqUXVlcnkuZm4uWVRQRW5hYmxlRmlsdGVycyA9IGpRdWVyeS5tYllUUGxheWVyLmVuYWJsZUZpbHRlcnM7XG5cdGpRdWVyeS5mbi5ZVFBHZXRGaWx0ZXJzID0galF1ZXJ5Lm1iWVRQbGF5ZXIuZ2V0RmlsdGVycztcblxuXHRqUXVlcnkuZm4uWVRQR2V0VGltZSA9IGpRdWVyeS5tYllUUGxheWVyLmdldFRpbWU7XG5cdGpRdWVyeS5mbi5ZVFBHZXRUb3RhbFRpbWUgPSBqUXVlcnkubWJZVFBsYXllci5nZXRUb3RhbFRpbWU7XG5cblx0alF1ZXJ5LmZuLllUUEFkZE1hc2sgPSBqUXVlcnkubWJZVFBsYXllci5hZGRNYXNrO1xuXHRqUXVlcnkuZm4uWVRQUmVtb3ZlTWFzayA9IGpRdWVyeS5tYllUUGxheWVyLnJlbW92ZU1hc2s7XG5cdGpRdWVyeS5mbi5ZVFBUb2dnbGVNYXNrID0galF1ZXJ5Lm1iWVRQbGF5ZXIudG9nZ2xlTWFzaztcblxuXHRqUXVlcnkuZm4uWVRQU2V0QWxpZ24gPSBqUXVlcnkubWJZVFBsYXllci5zZXRBbGlnbjtcblx0alF1ZXJ5LmZuLllUUEdldEFsaWduID0galF1ZXJ5Lm1iWVRQbGF5ZXIuZ2V0QWxpZ247XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqIHRvZG86IEFib3ZlIG1ldGhvZHMgd2lsbCBiZSByZW1vdmVkIHdpdGggdmVyc2lvbiAzLjUuMFxuXHQgKlxuXHQgKiovXG5cdGpRdWVyeS5mbi5tYl9ZVFBsYXllciA9IGpRdWVyeS5tYllUUGxheWVyLmJ1aWxkUGxheWVyO1xuXHRqUXVlcnkuZm4ucGxheU5leHQgPSBqUXVlcnkubWJZVFBsYXllci5wbGF5TmV4dDtcblx0alF1ZXJ5LmZuLnBsYXlQcmV2ID0galF1ZXJ5Lm1iWVRQbGF5ZXIucGxheVByZXY7XG5cdGpRdWVyeS5mbi5jaGFuZ2VNb3ZpZSA9IGpRdWVyeS5tYllUUGxheWVyLmNoYW5nZU1vdmllO1xuXHRqUXVlcnkuZm4uZ2V0VmlkZW9JRCA9IGpRdWVyeS5tYllUUGxheWVyLmdldFZpZGVvSUQ7XG5cdGpRdWVyeS5mbi5nZXRQbGF5ZXIgPSBqUXVlcnkubWJZVFBsYXllci5nZXRQbGF5ZXI7XG5cdGpRdWVyeS5mbi5wbGF5ZXJEZXN0cm95ID0galF1ZXJ5Lm1iWVRQbGF5ZXIucGxheWVyRGVzdHJveTtcblx0alF1ZXJ5LmZuLmZ1bGxzY3JlZW4gPSBqUXVlcnkubWJZVFBsYXllci5mdWxsc2NyZWVuO1xuXHRqUXVlcnkuZm4uYnVpbGRZVFBDb250cm9scyA9IGpRdWVyeS5tYllUUGxheWVyLmJ1aWxkQ29udHJvbHM7XG5cdGpRdWVyeS5mbi5wbGF5WVRQID0galF1ZXJ5Lm1iWVRQbGF5ZXIucGxheTtcblx0alF1ZXJ5LmZuLnRvZ2dsZUxvb3BzID0galF1ZXJ5Lm1iWVRQbGF5ZXIudG9nZ2xlTG9vcHM7XG5cdGpRdWVyeS5mbi5zdG9wWVRQID0galF1ZXJ5Lm1iWVRQbGF5ZXIuc3RvcDtcblx0alF1ZXJ5LmZuLnBhdXNlWVRQID0galF1ZXJ5Lm1iWVRQbGF5ZXIucGF1c2U7XG5cdGpRdWVyeS5mbi5zZWVrVG9ZVFAgPSBqUXVlcnkubWJZVFBsYXllci5zZWVrVG87XG5cdGpRdWVyeS5mbi5tdXRlWVRQVm9sdW1lID0galF1ZXJ5Lm1iWVRQbGF5ZXIubXV0ZTtcblx0alF1ZXJ5LmZuLnVubXV0ZVlUUFZvbHVtZSA9IGpRdWVyeS5tYllUUGxheWVyLnVubXV0ZTtcblx0alF1ZXJ5LmZuLnNldFlUUFZvbHVtZSA9IGpRdWVyeS5tYllUUGxheWVyLnNldFZvbHVtZTtcblx0alF1ZXJ5LmZuLnNldFZpZGVvUXVhbGl0eSA9IGpRdWVyeS5tYllUUGxheWVyLnNldFZpZGVvUXVhbGl0eTtcblx0alF1ZXJ5LmZuLm1hbmFnZVlUUFByb2dyZXNzID0galF1ZXJ5Lm1iWVRQbGF5ZXIubWFuYWdlUHJvZ3Jlc3M7XG5cdGpRdWVyeS5mbi5ZVFBHZXREYXRhRnJvbUZlZWQgPSBqUXVlcnkubWJZVFBsYXllci5nZXRWaWRlb0RhdGE7XG5cblxufSApKCBqUXVlcnksIHl0cCApO1xuO1xuLypcbiAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogIGpxdWVyeS5tYi5jb21wb25lbnRzXG4gKiAgZmlsZToganF1ZXJ5Lm1iLkNTU0FuaW1hdGUubWluLmpzXG4gKlxuICogIENvcHlyaWdodCAoYykgMjAwMS0yMDE0LiBNYXR0ZW8gQmljb2NjaGkgKFB1cHVuemkpO1xuICogIE9wZW4gbGFiIHNybCwgRmlyZW56ZSAtIEl0YWx5XG4gKiAgZW1haWw6IG1hdHRlb0BvcGVuLWxhYi5jb21cbiAqICBzaXRlOiBcdGh0dHA6Ly9wdXB1bnppLmNvbVxuICogIGJsb2c6XHRodHRwOi8vcHVwdW56aS5vcGVuLWxhYi5jb21cbiAqIFx0aHR0cDovL29wZW4tbGFiLmNvbVxuICpcbiAqICBMaWNlbmNlczogTUlULCBHUExcbiAqICBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICogIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwuaHRtbFxuICpcbiAqICBsYXN0IG1vZGlmaWVkOiAyNi8wMy8xNCAyMS40MFxuICogICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKi9cblxuZnVuY3Rpb24gdW5jYW1lbChlKXtyZXR1cm4gZS5yZXBsYWNlKC8oW0EtWl0pL2csZnVuY3Rpb24oZSl7cmV0dXJuXCItXCIrZS50b0xvd2VyQ2FzZSgpfSl9ZnVuY3Rpb24gc2V0VW5pdChlLHQpe3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBlfHxlLm1hdGNoKC9eW1xcLTAtOVxcLl0ralF1ZXJ5Lyk/XCJcIitlK3Q6ZX1mdW5jdGlvbiBzZXRGaWx0ZXIoZSx0LHIpe3ZhciBpPXVuY2FtZWwodCksbj1qUXVlcnkuYnJvd3Nlci5tb3ppbGxhP1wiXCI6alF1ZXJ5LkNTUy5zZng7ZVtuK1wiZmlsdGVyXCJdPWVbbitcImZpbHRlclwiXXx8XCJcIixyPXNldFVuaXQocj5qUXVlcnkuQ1NTLmZpbHRlcnNbdF0ubWF4P2pRdWVyeS5DU1MuZmlsdGVyc1t0XS5tYXg6cixqUXVlcnkuQ1NTLmZpbHRlcnNbdF0udW5pdCksZVtuK1wiZmlsdGVyXCJdKz1pK1wiKFwiK3IrXCIpIFwiLGRlbGV0ZSBlW3RdfWpRdWVyeS5zdXBwb3J0LkNTU3RyYW5zaXRpb249ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5ib2R5fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsdD1lLnN0eWxlO3JldHVybiB2b2lkIDAhPT10LnRyYW5zaXRpb258fHZvaWQgMCE9PXQuV2Via2l0VHJhbnNpdGlvbnx8dm9pZCAwIT09dC5Nb3pUcmFuc2l0aW9ufHx2b2lkIDAhPT10Lk1zVHJhbnNpdGlvbnx8dm9pZCAwIT09dC5PVHJhbnNpdGlvbn0oKSxqUXVlcnkuQ1NTPXtuYW1lOlwibWIuQ1NTQW5pbWF0ZVwiLGF1dGhvcjpcIk1hdHRlbyBCaWNvY2NoaVwiLHZlcnNpb246XCIyLjAuMFwiLHRyYW5zaXRpb25FbmQ6XCJ0cmFuc2l0aW9uRW5kXCIsc2Z4OlwiXCIsZmlsdGVyczp7Ymx1cjp7bWluOjAsbWF4OjEwMCx1bml0OlwicHhcIn0sYnJpZ2h0bmVzczp7bWluOjAsbWF4OjQwMCx1bml0OlwiJVwifSxjb250cmFzdDp7bWluOjAsbWF4OjQwMCx1bml0OlwiJVwifSxncmF5c2NhbGU6e21pbjowLG1heDoxMDAsdW5pdDpcIiVcIn0saHVlUm90YXRlOnttaW46MCxtYXg6MzYwLHVuaXQ6XCJkZWdcIn0saW52ZXJ0OnttaW46MCxtYXg6MTAwLHVuaXQ6XCIlXCJ9LHNhdHVyYXRlOnttaW46MCxtYXg6NDAwLHVuaXQ6XCIlXCJ9LHNlcGlhOnttaW46MCxtYXg6MTAwLHVuaXQ6XCIlXCJ9fSxub3JtYWxpemVDc3M6ZnVuY3Rpb24oZSl7dmFyIHQ9alF1ZXJ5LmV4dGVuZCghMCx7fSxlKTtqUXVlcnkuYnJvd3Nlci53ZWJraXR8fGpRdWVyeS5icm93c2VyLm9wZXJhP2pRdWVyeS5DU1Muc2Z4PVwiLXdlYmtpdC1cIjpqUXVlcnkuYnJvd3Nlci5tb3ppbGxhP2pRdWVyeS5DU1Muc2Z4PVwiLW1vei1cIjpqUXVlcnkuYnJvd3Nlci5tc2llJiYoalF1ZXJ5LkNTUy5zZng9XCItbXMtXCIpO2Zvcih2YXIgciBpbiB0KXtcInRyYW5zZm9ybVwiPT09ciYmKHRbalF1ZXJ5LkNTUy5zZngrXCJ0cmFuc2Zvcm1cIl09dFtyXSxkZWxldGUgdFtyXSksXCJ0cmFuc2Zvcm0tb3JpZ2luXCI9PT1yJiYodFtqUXVlcnkuQ1NTLnNmeCtcInRyYW5zZm9ybS1vcmlnaW5cIl09ZVtyXSxkZWxldGUgdFtyXSksXCJmaWx0ZXJcIiE9PXJ8fGpRdWVyeS5icm93c2VyLm1vemlsbGF8fCh0W2pRdWVyeS5DU1Muc2Z4K1wiZmlsdGVyXCJdPWVbcl0sZGVsZXRlIHRbcl0pLFwiYmx1clwiPT09ciYmc2V0RmlsdGVyKHQsXCJibHVyXCIsZVtyXSksXCJicmlnaHRuZXNzXCI9PT1yJiZzZXRGaWx0ZXIodCxcImJyaWdodG5lc3NcIixlW3JdKSxcImNvbnRyYXN0XCI9PT1yJiZzZXRGaWx0ZXIodCxcImNvbnRyYXN0XCIsZVtyXSksXCJncmF5c2NhbGVcIj09PXImJnNldEZpbHRlcih0LFwiZ3JheXNjYWxlXCIsZVtyXSksXCJodWVSb3RhdGVcIj09PXImJnNldEZpbHRlcih0LFwiaHVlUm90YXRlXCIsZVtyXSksXCJpbnZlcnRcIj09PXImJnNldEZpbHRlcih0LFwiaW52ZXJ0XCIsZVtyXSksXCJzYXR1cmF0ZVwiPT09ciYmc2V0RmlsdGVyKHQsXCJzYXR1cmF0ZVwiLGVbcl0pLFwic2VwaWFcIj09PXImJnNldEZpbHRlcih0LFwic2VwaWFcIixlW3JdKTt2YXIgaT1cIlwiO1wieFwiPT09ciYmKGk9alF1ZXJ5LkNTUy5zZngrXCJ0cmFuc2Zvcm1cIix0W2ldPXRbaV18fFwiXCIsdFtpXSs9XCIgdHJhbnNsYXRlWChcIitzZXRVbml0KGVbcl0sXCJweFwiKStcIilcIixkZWxldGUgdFtyXSksXCJ5XCI9PT1yJiYoaT1qUXVlcnkuQ1NTLnNmeCtcInRyYW5zZm9ybVwiLHRbaV09dFtpXXx8XCJcIix0W2ldKz1cIiB0cmFuc2xhdGVZKFwiK3NldFVuaXQoZVtyXSxcInB4XCIpK1wiKVwiLGRlbGV0ZSB0W3JdKSxcInpcIj09PXImJihpPWpRdWVyeS5DU1Muc2Z4K1widHJhbnNmb3JtXCIsdFtpXT10W2ldfHxcIlwiLHRbaV0rPVwiIHRyYW5zbGF0ZVooXCIrc2V0VW5pdChlW3JdLFwicHhcIikrXCIpXCIsZGVsZXRlIHRbcl0pLFwicm90YXRlXCI9PT1yJiYoaT1qUXVlcnkuQ1NTLnNmeCtcInRyYW5zZm9ybVwiLHRbaV09dFtpXXx8XCJcIix0W2ldKz1cIiByb3RhdGUoXCIrc2V0VW5pdChlW3JdLFwiZGVnXCIpK1wiKVwiLGRlbGV0ZSB0W3JdKSxcInJvdGF0ZVhcIj09PXImJihpPWpRdWVyeS5DU1Muc2Z4K1widHJhbnNmb3JtXCIsdFtpXT10W2ldfHxcIlwiLHRbaV0rPVwiIHJvdGF0ZVgoXCIrc2V0VW5pdChlW3JdLFwiZGVnXCIpK1wiKVwiLGRlbGV0ZSB0W3JdKSxcInJvdGF0ZVlcIj09PXImJihpPWpRdWVyeS5DU1Muc2Z4K1widHJhbnNmb3JtXCIsdFtpXT10W2ldfHxcIlwiLHRbaV0rPVwiIHJvdGF0ZVkoXCIrc2V0VW5pdChlW3JdLFwiZGVnXCIpK1wiKVwiLGRlbGV0ZSB0W3JdKSxcInJvdGF0ZVpcIj09PXImJihpPWpRdWVyeS5DU1Muc2Z4K1widHJhbnNmb3JtXCIsdFtpXT10W2ldfHxcIlwiLHRbaV0rPVwiIHJvdGF0ZVooXCIrc2V0VW5pdChlW3JdLFwiZGVnXCIpK1wiKVwiLGRlbGV0ZSB0W3JdKSxcInNjYWxlXCI9PT1yJiYoaT1qUXVlcnkuQ1NTLnNmeCtcInRyYW5zZm9ybVwiLHRbaV09dFtpXXx8XCJcIix0W2ldKz1cIiBzY2FsZShcIitzZXRVbml0KGVbcl0sXCJcIikrXCIpXCIsZGVsZXRlIHRbcl0pLFwic2NhbGVYXCI9PT1yJiYoaT1qUXVlcnkuQ1NTLnNmeCtcInRyYW5zZm9ybVwiLHRbaV09dFtpXXx8XCJcIix0W2ldKz1cIiBzY2FsZVgoXCIrc2V0VW5pdChlW3JdLFwiXCIpK1wiKVwiLGRlbGV0ZSB0W3JdKSxcInNjYWxlWVwiPT09ciYmKGk9alF1ZXJ5LkNTUy5zZngrXCJ0cmFuc2Zvcm1cIix0W2ldPXRbaV18fFwiXCIsdFtpXSs9XCIgc2NhbGVZKFwiK3NldFVuaXQoZVtyXSxcIlwiKStcIilcIixkZWxldGUgdFtyXSksXCJzY2FsZVpcIj09PXImJihpPWpRdWVyeS5DU1Muc2Z4K1widHJhbnNmb3JtXCIsdFtpXT10W2ldfHxcIlwiLHRbaV0rPVwiIHNjYWxlWihcIitzZXRVbml0KGVbcl0sXCJcIikrXCIpXCIsZGVsZXRlIHRbcl0pLFwic2tld1wiPT09ciYmKGk9alF1ZXJ5LkNTUy5zZngrXCJ0cmFuc2Zvcm1cIix0W2ldPXRbaV18fFwiXCIsdFtpXSs9XCIgc2tldyhcIitzZXRVbml0KGVbcl0sXCJkZWdcIikrXCIpXCIsZGVsZXRlIHRbcl0pLFwic2tld1hcIj09PXImJihpPWpRdWVyeS5DU1Muc2Z4K1widHJhbnNmb3JtXCIsdFtpXT10W2ldfHxcIlwiLHRbaV0rPVwiIHNrZXdYKFwiK3NldFVuaXQoZVtyXSxcImRlZ1wiKStcIilcIixkZWxldGUgdFtyXSksXCJza2V3WVwiPT09ciYmKGk9alF1ZXJ5LkNTUy5zZngrXCJ0cmFuc2Zvcm1cIix0W2ldPXRbaV18fFwiXCIsdFtpXSs9XCIgc2tld1koXCIrc2V0VW5pdChlW3JdLFwiZGVnXCIpK1wiKVwiLGRlbGV0ZSB0W3JdKSxcInBlcnNwZWN0aXZlXCI9PT1yJiYoaT1qUXVlcnkuQ1NTLnNmeCtcInRyYW5zZm9ybVwiLHRbaV09dFtpXXx8XCJcIix0W2ldKz1cIiBwZXJzcGVjdGl2ZShcIitzZXRVbml0KGVbcl0sXCJweFwiKStcIilcIixkZWxldGUgdFtyXSl9cmV0dXJuIHR9LGdldFByb3A6ZnVuY3Rpb24oZSl7dmFyIHQ9W107Zm9yKHZhciByIGluIGUpdC5pbmRleE9mKHIpPDAmJnQucHVzaCh1bmNhbWVsKHIpKTtyZXR1cm4gdC5qb2luKFwiLFwiKX0sYW5pbWF0ZTpmdW5jdGlvbihlLHQscixpLG4pe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtmdW5jdGlvbiBzKCl7dS5jYWxsZWQ9ITAsdS5DU1NBSXNSdW5uaW5nPSExLGEub2ZmKGpRdWVyeS5DU1MudHJhbnNpdGlvbkVuZCtcIi5cIit1LmlkKSxjbGVhclRpbWVvdXQodS50aW1lb3V0KSxhLmNzcyhqUXVlcnkuQ1NTLnNmeCtcInRyYW5zaXRpb25cIixcIlwiKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZuLmFwcGx5KHUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHUuQ1NTcXVldWUmJih1LkNTU3F1ZXVlKCksdS5DU1NxdWV1ZT1udWxsKX12YXIgdT10aGlzLGE9alF1ZXJ5KHRoaXMpO3UuaWQ9dS5pZHx8XCJDU1NBX1wiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpO3ZhciBvPW98fHt0eXBlOlwibm9FdmVudFwifTtpZih1LkNTU0FJc1J1bm5pbmcmJnUuZXZlbnRUeXBlPT1vLnR5cGUmJiFqUXVlcnkuYnJvd3Nlci5tc2llJiZqUXVlcnkuYnJvd3Nlci52ZXJzaW9uPD05KXJldHVybiB2b2lkKHUuQ1NTcXVldWU9ZnVuY3Rpb24oKXthLkNTU0FuaW1hdGUoZSx0LHIsaSxuKX0pO2lmKHUuQ1NTcXVldWU9bnVsbCx1LmV2ZW50VHlwZT1vLnR5cGUsMCE9PWEubGVuZ3RoJiZlKXtpZihlPWpRdWVyeS5ub3JtYWxpemVDc3MoZSksdS5DU1NBSXNSdW5uaW5nPSEwLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJihuPXQsdD1qUXVlcnkuZnguc3BlZWRzLl9kZWZhdWx0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiYoaT1yLHI9MCksXCJzdHJpbmdcIj09dHlwZW9mIHImJihuPXIscj0wKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYobj1pLGk9XCJjdWJpYy1iZXppZXIoMC42NSwwLjAzLDAuMzYsMC43MilcIiksXCJzdHJpbmdcIj09dHlwZW9mIHQpZm9yKHZhciBmIGluIGpRdWVyeS5meC5zcGVlZHMpe2lmKHQ9PWYpe3Q9alF1ZXJ5LmZ4LnNwZWVkc1tmXTticmVha310PWpRdWVyeS5meC5zcGVlZHMuX2RlZmF1bHR9aWYodHx8KHQ9alF1ZXJ5LmZ4LnNwZWVkcy5fZGVmYXVsdCksXCJzdHJpbmdcIj09dHlwZW9mIG4mJihpPW4sbj1udWxsKSwhalF1ZXJ5LnN1cHBvcnQuQ1NTdHJhbnNpdGlvbil7Zm9yKHZhciBjIGluIGUpe2lmKFwidHJhbnNmb3JtXCI9PT1jJiZkZWxldGUgZVtjXSxcImZpbHRlclwiPT09YyYmZGVsZXRlIGVbY10sXCJ0cmFuc2Zvcm0tb3JpZ2luXCI9PT1jJiZkZWxldGUgZVtjXSxcImF1dG9cIj09PWVbY10mJmRlbGV0ZSBlW2NdLFwieFwiPT09Yyl7dmFyIFM9ZVtjXSxsPVwibGVmdFwiO2VbbF09UyxkZWxldGUgZVtjXX1pZihcInlcIj09PWMpe3ZhciBTPWVbY10sbD1cInRvcFwiO2VbbF09UyxkZWxldGUgZVtjXX0oXCItbXMtdHJhbnNmb3JtXCI9PT1jfHxcIi1tcy1maWx0ZXJcIj09PWMpJiZkZWxldGUgZVtjXX1yZXR1cm4gdm9pZCBhLmRlbGF5KHIpLmFuaW1hdGUoZSx0LG4pfXZhciB5PXtcImRlZmF1bHRcIjpcImVhc2VcIixcImluXCI6XCJlYXNlLWluXCIsb3V0OlwiZWFzZS1vdXRcIixcImluLW91dFwiOlwiZWFzZS1pbi1vdXRcIixzbmFwOlwiY3ViaWMtYmV6aWVyKDAsMSwuNSwxKVwiLGVhc2VPdXRDdWJpYzpcImN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpXCIsZWFzZUluT3V0Q3ViaWM6XCJjdWJpYy1iZXppZXIoLjY0NSwuMDQ1LC4zNTUsMSlcIixlYXNlSW5DaXJjOlwiY3ViaWMtYmV6aWVyKC42LC4wNCwuOTgsLjMzNSlcIixlYXNlT3V0Q2lyYzpcImN1YmljLWJlemllciguMDc1LC44MiwuMTY1LDEpXCIsZWFzZUluT3V0Q2lyYzpcImN1YmljLWJlemllciguNzg1LC4xMzUsLjE1LC44NilcIixlYXNlSW5FeHBvOlwiY3ViaWMtYmV6aWVyKC45NSwuMDUsLjc5NSwuMDM1KVwiLGVhc2VPdXRFeHBvOlwiY3ViaWMtYmV6aWVyKC4xOSwxLC4yMiwxKVwiLGVhc2VJbk91dEV4cG86XCJjdWJpYy1iZXppZXIoMSwwLDAsMSlcIixlYXNlSW5RdWFkOlwiY3ViaWMtYmV6aWVyKC41NSwuMDg1LC42OCwuNTMpXCIsZWFzZU91dFF1YWQ6XCJjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KVwiLGVhc2VJbk91dFF1YWQ6XCJjdWJpYy1iZXppZXIoLjQ1NSwuMDMsLjUxNSwuOTU1KVwiLGVhc2VJblF1YXJ0OlwiY3ViaWMtYmV6aWVyKC44OTUsLjAzLC42ODUsLjIyKVwiLGVhc2VPdXRRdWFydDpcImN1YmljLWJlemllciguMTY1LC44NCwuNDQsMSlcIixlYXNlSW5PdXRRdWFydDpcImN1YmljLWJlemllciguNzcsMCwuMTc1LDEpXCIsZWFzZUluUXVpbnQ6XCJjdWJpYy1iZXppZXIoLjc1NSwuMDUsLjg1NSwuMDYpXCIsZWFzZU91dFF1aW50OlwiY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKVwiLGVhc2VJbk91dFF1aW50OlwiY3ViaWMtYmV6aWVyKC44NiwwLC4wNywxKVwiLGVhc2VJblNpbmU6XCJjdWJpYy1iZXppZXIoLjQ3LDAsLjc0NSwuNzE1KVwiLGVhc2VPdXRTaW5lOlwiY3ViaWMtYmV6aWVyKC4zOSwuNTc1LC41NjUsMSlcIixlYXNlSW5PdXRTaW5lOlwiY3ViaWMtYmV6aWVyKC40NDUsLjA1LC41NSwuOTUpXCIsZWFzZUluQmFjazpcImN1YmljLWJlemllciguNiwtLjI4LC43MzUsLjA0NSlcIixlYXNlT3V0QmFjazpcImN1YmljLWJlemllciguMTc1LCAuODg1LC4zMiwxLjI3NSlcIixlYXNlSW5PdXRCYWNrOlwiY3ViaWMtYmV6aWVyKC42OCwtLjU1LC4yNjUsMS41NSlcIn07eVtpXSYmKGk9eVtpXSksYS5vZmYoalF1ZXJ5LkNTUy50cmFuc2l0aW9uRW5kK1wiLlwiK3UuaWQpO3ZhciBtPWpRdWVyeS5DU1MuZ2V0UHJvcChlKSxkPXt9O2pRdWVyeS5leHRlbmQoZCxlKSxkW2pRdWVyeS5DU1Muc2Z4K1widHJhbnNpdGlvbi1wcm9wZXJ0eVwiXT1tLGRbalF1ZXJ5LkNTUy5zZngrXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCJdPXQrXCJtc1wiLGRbalF1ZXJ5LkNTUy5zZngrXCJ0cmFuc2l0aW9uLWRlbGF5XCJdPXIrXCJtc1wiLGRbalF1ZXJ5LkNTUy5zZngrXCJ0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblwiXT1pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXthLm9uZShqUXVlcnkuQ1NTLnRyYW5zaXRpb25FbmQrXCIuXCIrdS5pZCxzKSxhLmNzcyhkKX0sMSksdS50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gdS5jYWxsZWR8fCFuPyh1LmNhbGxlZD0hMSx2b2lkKHUuQ1NTQUlzUnVubmluZz0hMSkpOihhLmNzcyhqUXVlcnkuQ1NTLnNmeCtcInRyYW5zaXRpb25cIixcIlwiKSxuLmFwcGx5KHUpLHUuQ1NTQUlzUnVubmluZz0hMSx2b2lkKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUuQ1NTcXVldWUmJih1LkNTU3F1ZXVlKCksdS5DU1NxdWV1ZT1udWxsKSkpfSx0K3IrMTApfX0pfX0salF1ZXJ5LmZuLkNTU0FuaW1hdGU9alF1ZXJ5LkNTUy5hbmltYXRlLGpRdWVyeS5ub3JtYWxpemVDc3M9alF1ZXJ5LkNTUy5ub3JtYWxpemVDc3MsalF1ZXJ5LmZuLmNzczM9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PWpRdWVyeSh0aGlzKSxyPWpRdWVyeS5ub3JtYWxpemVDc3MoZSk7dC5jc3Mocil9KX07XG47LypfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiBfIGpxdWVyeS5tYi5jb21wb25lbnRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gZmlsZToganF1ZXJ5Lm1iLmJyb3dzZXIubWluLmpzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfIGxhc3QgbW9kaWZpZWQ6IDA3LzA2LzE2IDIyLjM0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gT3BlbiBMYWIgcy5yLmwuLCBGbG9yZW5jZSAtIEl0YWx5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyBlbWFpbDogbWF0dGVvQG9wZW4tbGFiLmNvbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gc2l0ZTogaHR0cDovL3B1cHVuemkuY29tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfICAgICAgIGh0dHA6Ly9vcGVuLWxhYi5jb20gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyBibG9nOiBodHRwOi8vcHVwdW56aS5vcGVuLWxhYi5jb20gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gUSZBOiAgaHR0cDovL2pxdWVyeS5wdXB1bnppLmNvbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyBMaWNlbmNlczogTUlULCBHUEwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gICAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfICAgIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwuaHRtbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gQ29weXJpZ2h0IChjKSAyMDAxLTIwMTYuIE1hdHRlbyBCaWNvY2NoaSAoUHVwdW56aSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xuXG52YXIgbkFndD1uYXZpZ2F0b3IudXNlckFnZW50O2lmKCFqUXVlcnkuYnJvd3Nlcil7alF1ZXJ5LmJyb3dzZXI9e30salF1ZXJ5LmJyb3dzZXIubW96aWxsYT0hMSxqUXVlcnkuYnJvd3Nlci53ZWJraXQ9ITEsalF1ZXJ5LmJyb3dzZXIub3BlcmE9ITEsalF1ZXJ5LmJyb3dzZXIuc2FmYXJpPSExLGpRdWVyeS5icm93c2VyLmNocm9tZT0hMSxqUXVlcnkuYnJvd3Nlci5hbmRyb2lkU3RvY2s9ITEsalF1ZXJ5LmJyb3dzZXIubXNpZT0hMSxqUXVlcnkuYnJvd3Nlci51YT1uQWd0LGpRdWVyeS5icm93c2VyLm5hbWU9bmF2aWdhdG9yLmFwcE5hbWUsalF1ZXJ5LmJyb3dzZXIuZnVsbFZlcnNpb249XCJcIitwYXJzZUZsb2F0KG5hdmlnYXRvci5hcHBWZXJzaW9uKSxqUXVlcnkuYnJvd3Nlci5tYWpvclZlcnNpb249cGFyc2VJbnQobmF2aWdhdG9yLmFwcFZlcnNpb24sMTApO3ZhciBuYW1lT2Zmc2V0LHZlck9mZnNldCxpeDtpZigtMSE9KHZlck9mZnNldD1uQWd0LmluZGV4T2YoXCJPcGVyYVwiKSkpalF1ZXJ5LmJyb3dzZXIub3BlcmE9ITAsalF1ZXJ5LmJyb3dzZXIubmFtZT1cIk9wZXJhXCIsalF1ZXJ5LmJyb3dzZXIuZnVsbFZlcnNpb249bkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0KzYpLC0xIT0odmVyT2Zmc2V0PW5BZ3QuaW5kZXhPZihcIlZlcnNpb25cIikpJiYoalF1ZXJ5LmJyb3dzZXIuZnVsbFZlcnNpb249bkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0KzgpKTtlbHNlIGlmKC0xIT0odmVyT2Zmc2V0PW5BZ3QuaW5kZXhPZihcIk9QUlwiKSkpalF1ZXJ5LmJyb3dzZXIub3BlcmE9ITAsalF1ZXJ5LmJyb3dzZXIubmFtZT1cIk9wZXJhXCIsalF1ZXJ5LmJyb3dzZXIuZnVsbFZlcnNpb249bkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0KzQpO2Vsc2UgaWYoLTEhPSh2ZXJPZmZzZXQ9bkFndC5pbmRleE9mKFwiTVNJRVwiKSkpalF1ZXJ5LmJyb3dzZXIubXNpZT0hMCxqUXVlcnkuYnJvd3Nlci5uYW1lPVwiTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyXCIsalF1ZXJ5LmJyb3dzZXIuZnVsbFZlcnNpb249bkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0KzUpO2Vsc2UgaWYoLTEhPW5BZ3QuaW5kZXhPZihcIlRyaWRlbnRcIil8fC0xIT1uQWd0LmluZGV4T2YoXCJFZGdlXCIpKXtqUXVlcnkuYnJvd3Nlci5tc2llPSEwLGpRdWVyeS5icm93c2VyLm5hbWU9XCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIjt2YXIgc3RhcnQ9bkFndC5pbmRleE9mKFwicnY6XCIpKzMsZW5kPXN0YXJ0KzQ7alF1ZXJ5LmJyb3dzZXIuZnVsbFZlcnNpb249bkFndC5zdWJzdHJpbmcoc3RhcnQsZW5kKX1lbHNlLTEhPSh2ZXJPZmZzZXQ9bkFndC5pbmRleE9mKFwiQ2hyb21lXCIpKT8oalF1ZXJ5LmJyb3dzZXIud2Via2l0PSEwLGpRdWVyeS5icm93c2VyLmNocm9tZT0hMCxqUXVlcnkuYnJvd3Nlci5uYW1lPVwiQ2hyb21lXCIsalF1ZXJ5LmJyb3dzZXIuZnVsbFZlcnNpb249bkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0KzcpKTpuQWd0LmluZGV4T2YoXCJtb3ppbGxhLzUuMFwiKT4tMSYmbkFndC5pbmRleE9mKFwiYW5kcm9pZCBcIik+LTEmJm5BZ3QuaW5kZXhPZihcImFwcGxld2Via2l0XCIpPi0xJiYhKG5BZ3QuaW5kZXhPZihcImNocm9tZVwiKT4tMSk/KHZlck9mZnNldD1uQWd0LmluZGV4T2YoXCJDaHJvbWVcIiksalF1ZXJ5LmJyb3dzZXIud2Via2l0PSEwLGpRdWVyeS5icm93c2VyLmFuZHJvaWRTdG9jaz0hMCxqUXVlcnkuYnJvd3Nlci5uYW1lPVwiYW5kcm9pZFN0b2NrXCIsalF1ZXJ5LmJyb3dzZXIuZnVsbFZlcnNpb249bkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0KzcpKTotMSE9KHZlck9mZnNldD1uQWd0LmluZGV4T2YoXCJTYWZhcmlcIikpPyhqUXVlcnkuYnJvd3Nlci53ZWJraXQ9ITAsalF1ZXJ5LmJyb3dzZXIuc2FmYXJpPSEwLGpRdWVyeS5icm93c2VyLm5hbWU9XCJTYWZhcmlcIixqUXVlcnkuYnJvd3Nlci5mdWxsVmVyc2lvbj1uQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQrNyksLTEhPSh2ZXJPZmZzZXQ9bkFndC5pbmRleE9mKFwiVmVyc2lvblwiKSkmJihqUXVlcnkuYnJvd3Nlci5mdWxsVmVyc2lvbj1uQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQrOCkpKTotMSE9KHZlck9mZnNldD1uQWd0LmluZGV4T2YoXCJBcHBsZVdlYmtpdFwiKSk/KGpRdWVyeS5icm93c2VyLndlYmtpdD0hMCxqUXVlcnkuYnJvd3Nlci5zYWZhcmk9ITAsalF1ZXJ5LmJyb3dzZXIubmFtZT1cIlNhZmFyaVwiLGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uPW5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCs3KSwtMSE9KHZlck9mZnNldD1uQWd0LmluZGV4T2YoXCJWZXJzaW9uXCIpKSYmKGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uPW5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCs4KSkpOi0xIT0odmVyT2Zmc2V0PW5BZ3QuaW5kZXhPZihcIkZpcmVmb3hcIikpPyhqUXVlcnkuYnJvd3Nlci5tb3ppbGxhPSEwLGpRdWVyeS5icm93c2VyLm5hbWU9XCJGaXJlZm94XCIsalF1ZXJ5LmJyb3dzZXIuZnVsbFZlcnNpb249bkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0KzgpKToobmFtZU9mZnNldD1uQWd0Lmxhc3RJbmRleE9mKFwiIFwiKSsxKTwodmVyT2Zmc2V0PW5BZ3QubGFzdEluZGV4T2YoXCIvXCIpKSYmKGpRdWVyeS5icm93c2VyLm5hbWU9bkFndC5zdWJzdHJpbmcobmFtZU9mZnNldCx2ZXJPZmZzZXQpLGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uPW5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCsxKSxqUXVlcnkuYnJvd3Nlci5uYW1lLnRvTG93ZXJDYXNlKCk9PWpRdWVyeS5icm93c2VyLm5hbWUudG9VcHBlckNhc2UoKSYmKGpRdWVyeS5icm93c2VyLm5hbWU9bmF2aWdhdG9yLmFwcE5hbWUpKTstMSE9KGl4PWpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uLmluZGV4T2YoXCI7XCIpKSYmKGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uPWpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uLnN1YnN0cmluZygwLGl4KSksLTEhPShpeD1qUXVlcnkuYnJvd3Nlci5mdWxsVmVyc2lvbi5pbmRleE9mKFwiIFwiKSkmJihqUXVlcnkuYnJvd3Nlci5mdWxsVmVyc2lvbj1qUXVlcnkuYnJvd3Nlci5mdWxsVmVyc2lvbi5zdWJzdHJpbmcoMCxpeCkpLGpRdWVyeS5icm93c2VyLm1ham9yVmVyc2lvbj1wYXJzZUludChcIlwiK2pRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uLDEwKSxpc05hTihqUXVlcnkuYnJvd3Nlci5tYWpvclZlcnNpb24pJiYoalF1ZXJ5LmJyb3dzZXIuZnVsbFZlcnNpb249XCJcIitwYXJzZUZsb2F0KG5hdmlnYXRvci5hcHBWZXJzaW9uKSxqUXVlcnkuYnJvd3Nlci5tYWpvclZlcnNpb249cGFyc2VJbnQobmF2aWdhdG9yLmFwcFZlcnNpb24sMTApKSxqUXVlcnkuYnJvd3Nlci52ZXJzaW9uPWpRdWVyeS5icm93c2VyLm1ham9yVmVyc2lvbn1qUXVlcnkuYnJvd3Nlci5hbmRyb2lkPS9BbmRyb2lkL2kudGVzdChuQWd0KSxqUXVlcnkuYnJvd3Nlci5ibGFja2JlcnJ5PS9CbGFja0JlcnJ5fEJCfFBsYXlCb29rL2kudGVzdChuQWd0KSxqUXVlcnkuYnJvd3Nlci5pb3M9L2lQaG9uZXxpUGFkfGlQb2R8d2ViT1MvaS50ZXN0KG5BZ3QpLGpRdWVyeS5icm93c2VyLm9wZXJhTW9iaWxlPS9PcGVyYSBNaW5pL2kudGVzdChuQWd0KSxqUXVlcnkuYnJvd3Nlci53aW5kb3dzTW9iaWxlPS9JRU1vYmlsZXxXaW5kb3dzIFBob25lL2kudGVzdChuQWd0KSxqUXVlcnkuYnJvd3Nlci5raW5kbGU9L0tpbmRsZXxTaWxrL2kudGVzdChuQWd0KSxqUXVlcnkuYnJvd3Nlci5tb2JpbGU9alF1ZXJ5LmJyb3dzZXIuYW5kcm9pZHx8alF1ZXJ5LmJyb3dzZXIuYmxhY2tiZXJyeXx8alF1ZXJ5LmJyb3dzZXIuaW9zfHxqUXVlcnkuYnJvd3Nlci53aW5kb3dzTW9iaWxlfHxqUXVlcnkuYnJvd3Nlci5vcGVyYU1vYmlsZXx8alF1ZXJ5LmJyb3dzZXIua2luZGxlLGpRdWVyeS5pc01vYmlsZT1qUXVlcnkuYnJvd3Nlci5tb2JpbGUsalF1ZXJ5LmlzVGFibGV0PWpRdWVyeS5icm93c2VyLm1vYmlsZSYmalF1ZXJ5KHdpbmRvdykud2lkdGgoKT43NjUsalF1ZXJ5LmlzQW5kcm9pZERlZmF1bHQ9alF1ZXJ5LmJyb3dzZXIuYW5kcm9pZCYmIS9jaHJvbWUvaS50ZXN0KG5BZ3QpO1xuOy8qX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gXyBqcXVlcnkubWIuY29tcG9uZW50cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfIGZpbGU6IGpxdWVyeS5tYi5zaW1wbGVTbGlkZXIubWluLmpzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyBsYXN0IG1vZGlmaWVkOiAxNi8wNS8xNSAyMy40NSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfIE9wZW4gTGFiIHMuci5sLiwgRmxvcmVuY2UgLSBJdGFseSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gZW1haWw6IG1hdHRlb0BvcGVuLWxhYi5jb20gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfIHNpdGU6IGh0dHA6Ly9wdXB1bnppLmNvbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyAgICAgICBodHRwOi8vb3Blbi1sYWIuY29tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gYmxvZzogaHR0cDovL3B1cHVuemkub3Blbi1sYWIuY29tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfIFEmQTogIGh0dHA6Ly9qcXVlcnkucHVwdW56aS5jb20gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gTGljZW5jZXM6IE1JVCwgR1BMICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfICAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyAgICBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLmh0bWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfIENvcHlyaWdodCAoYykgMjAwMS0yMDE1LiBNYXR0ZW8gQmljb2NjaGkgKFB1cHVuemkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cblxudmFyIG5BZ3Q9bmF2aWdhdG9yLnVzZXJBZ2VudDtpZighalF1ZXJ5LmJyb3dzZXIpe2pRdWVyeS5icm93c2VyPXt9LGpRdWVyeS5icm93c2VyLm1vemlsbGE9ITEsalF1ZXJ5LmJyb3dzZXIud2Via2l0PSExLGpRdWVyeS5icm93c2VyLm9wZXJhPSExLGpRdWVyeS5icm93c2VyLnNhZmFyaT0hMSxqUXVlcnkuYnJvd3Nlci5jaHJvbWU9ITEsalF1ZXJ5LmJyb3dzZXIuYW5kcm9pZFN0b2NrPSExLGpRdWVyeS5icm93c2VyLm1zaWU9ITEsalF1ZXJ5LmJyb3dzZXIudWE9bkFndCxqUXVlcnkuYnJvd3Nlci5uYW1lPW5hdmlnYXRvci5hcHBOYW1lLGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uPVwiXCIrcGFyc2VGbG9hdChuYXZpZ2F0b3IuYXBwVmVyc2lvbiksalF1ZXJ5LmJyb3dzZXIubWFqb3JWZXJzaW9uPXBhcnNlSW50KG5hdmlnYXRvci5hcHBWZXJzaW9uLDEwKTt2YXIgbmFtZU9mZnNldCx2ZXJPZmZzZXQsaXg7aWYoLTEhPSh2ZXJPZmZzZXQ9bkFndC5pbmRleE9mKFwiT3BlcmFcIikpKWpRdWVyeS5icm93c2VyLm9wZXJhPSEwLGpRdWVyeS5icm93c2VyLm5hbWU9XCJPcGVyYVwiLGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uPW5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCs2KSwtMSE9KHZlck9mZnNldD1uQWd0LmluZGV4T2YoXCJWZXJzaW9uXCIpKSYmKGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uPW5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCs4KSk7ZWxzZSBpZigtMSE9KHZlck9mZnNldD1uQWd0LmluZGV4T2YoXCJPUFJcIikpKWpRdWVyeS5icm93c2VyLm9wZXJhPSEwLGpRdWVyeS5icm93c2VyLm5hbWU9XCJPcGVyYVwiLGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uPW5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCs0KTtlbHNlIGlmKC0xIT0odmVyT2Zmc2V0PW5BZ3QuaW5kZXhPZihcIk1TSUVcIikpKWpRdWVyeS5icm93c2VyLm1zaWU9ITAsalF1ZXJ5LmJyb3dzZXIubmFtZT1cIk1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlclwiLGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uPW5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCs1KTtlbHNlIGlmKC0xIT1uQWd0LmluZGV4T2YoXCJUcmlkZW50XCIpfHwtMSE9bkFndC5pbmRleE9mKFwiRWRnZVwiKSl7alF1ZXJ5LmJyb3dzZXIubXNpZT0hMCxqUXVlcnkuYnJvd3Nlci5uYW1lPVwiTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyXCI7dmFyIHN0YXJ0PW5BZ3QuaW5kZXhPZihcInJ2OlwiKSszLGVuZD1zdGFydCs0O2pRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uPW5BZ3Quc3Vic3RyaW5nKHN0YXJ0LGVuZCl9ZWxzZS0xIT0odmVyT2Zmc2V0PW5BZ3QuaW5kZXhPZihcIkNocm9tZVwiKSk/KGpRdWVyeS5icm93c2VyLndlYmtpdD0hMCxqUXVlcnkuYnJvd3Nlci5jaHJvbWU9ITAsalF1ZXJ5LmJyb3dzZXIubmFtZT1cIkNocm9tZVwiLGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uPW5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCs3KSk6bkFndC5pbmRleE9mKFwibW96aWxsYS81LjBcIik+LTEmJm5BZ3QuaW5kZXhPZihcImFuZHJvaWQgXCIpPi0xJiZuQWd0LmluZGV4T2YoXCJhcHBsZXdlYmtpdFwiKT4tMSYmIShuQWd0LmluZGV4T2YoXCJjaHJvbWVcIik+LTEpPyh2ZXJPZmZzZXQ9bkFndC5pbmRleE9mKFwiQ2hyb21lXCIpLGpRdWVyeS5icm93c2VyLndlYmtpdD0hMCxqUXVlcnkuYnJvd3Nlci5hbmRyb2lkU3RvY2s9ITAsalF1ZXJ5LmJyb3dzZXIubmFtZT1cImFuZHJvaWRTdG9ja1wiLGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uPW5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCs3KSk6LTEhPSh2ZXJPZmZzZXQ9bkFndC5pbmRleE9mKFwiU2FmYXJpXCIpKT8oalF1ZXJ5LmJyb3dzZXIud2Via2l0PSEwLGpRdWVyeS5icm93c2VyLnNhZmFyaT0hMCxqUXVlcnkuYnJvd3Nlci5uYW1lPVwiU2FmYXJpXCIsalF1ZXJ5LmJyb3dzZXIuZnVsbFZlcnNpb249bkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0KzcpLC0xIT0odmVyT2Zmc2V0PW5BZ3QuaW5kZXhPZihcIlZlcnNpb25cIikpJiYoalF1ZXJ5LmJyb3dzZXIuZnVsbFZlcnNpb249bkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0KzgpKSk6LTEhPSh2ZXJPZmZzZXQ9bkFndC5pbmRleE9mKFwiQXBwbGVXZWJraXRcIikpPyhqUXVlcnkuYnJvd3Nlci53ZWJraXQ9ITAsalF1ZXJ5LmJyb3dzZXIuc2FmYXJpPSEwLGpRdWVyeS5icm93c2VyLm5hbWU9XCJTYWZhcmlcIixqUXVlcnkuYnJvd3Nlci5mdWxsVmVyc2lvbj1uQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQrNyksLTEhPSh2ZXJPZmZzZXQ9bkFndC5pbmRleE9mKFwiVmVyc2lvblwiKSkmJihqUXVlcnkuYnJvd3Nlci5mdWxsVmVyc2lvbj1uQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQrOCkpKTotMSE9KHZlck9mZnNldD1uQWd0LmluZGV4T2YoXCJGaXJlZm94XCIpKT8oalF1ZXJ5LmJyb3dzZXIubW96aWxsYT0hMCxqUXVlcnkuYnJvd3Nlci5uYW1lPVwiRmlyZWZveFwiLGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uPW5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCs4KSk6KG5hbWVPZmZzZXQ9bkFndC5sYXN0SW5kZXhPZihcIiBcIikrMSk8KHZlck9mZnNldD1uQWd0Lmxhc3RJbmRleE9mKFwiL1wiKSkmJihqUXVlcnkuYnJvd3Nlci5uYW1lPW5BZ3Quc3Vic3RyaW5nKG5hbWVPZmZzZXQsdmVyT2Zmc2V0KSxqUXVlcnkuYnJvd3Nlci5mdWxsVmVyc2lvbj1uQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQrMSksalF1ZXJ5LmJyb3dzZXIubmFtZS50b0xvd2VyQ2FzZSgpPT1qUXVlcnkuYnJvd3Nlci5uYW1lLnRvVXBwZXJDYXNlKCkmJihqUXVlcnkuYnJvd3Nlci5uYW1lPW5hdmlnYXRvci5hcHBOYW1lKSk7LTEhPShpeD1qUXVlcnkuYnJvd3Nlci5mdWxsVmVyc2lvbi5pbmRleE9mKFwiO1wiKSkmJihqUXVlcnkuYnJvd3Nlci5mdWxsVmVyc2lvbj1qUXVlcnkuYnJvd3Nlci5mdWxsVmVyc2lvbi5zdWJzdHJpbmcoMCxpeCkpLC0xIT0oaXg9alF1ZXJ5LmJyb3dzZXIuZnVsbFZlcnNpb24uaW5kZXhPZihcIiBcIikpJiYoalF1ZXJ5LmJyb3dzZXIuZnVsbFZlcnNpb249alF1ZXJ5LmJyb3dzZXIuZnVsbFZlcnNpb24uc3Vic3RyaW5nKDAsaXgpKSxqUXVlcnkuYnJvd3Nlci5tYWpvclZlcnNpb249cGFyc2VJbnQoXCJcIitqUXVlcnkuYnJvd3Nlci5mdWxsVmVyc2lvbiwxMCksaXNOYU4oalF1ZXJ5LmJyb3dzZXIubWFqb3JWZXJzaW9uKSYmKGpRdWVyeS5icm93c2VyLmZ1bGxWZXJzaW9uPVwiXCIrcGFyc2VGbG9hdChuYXZpZ2F0b3IuYXBwVmVyc2lvbiksalF1ZXJ5LmJyb3dzZXIubWFqb3JWZXJzaW9uPXBhcnNlSW50KG5hdmlnYXRvci5hcHBWZXJzaW9uLDEwKSksalF1ZXJ5LmJyb3dzZXIudmVyc2lvbj1qUXVlcnkuYnJvd3Nlci5tYWpvclZlcnNpb259alF1ZXJ5LmJyb3dzZXIuYW5kcm9pZD0vQW5kcm9pZC9pLnRlc3QobkFndCksalF1ZXJ5LmJyb3dzZXIuYmxhY2tiZXJyeT0vQmxhY2tCZXJyeXxCQnxQbGF5Qm9vay9pLnRlc3QobkFndCksalF1ZXJ5LmJyb3dzZXIuaW9zPS9pUGhvbmV8aVBhZHxpUG9kfHdlYk9TL2kudGVzdChuQWd0KSxqUXVlcnkuYnJvd3Nlci5vcGVyYU1vYmlsZT0vT3BlcmEgTWluaS9pLnRlc3QobkFndCksalF1ZXJ5LmJyb3dzZXIud2luZG93c01vYmlsZT0vSUVNb2JpbGV8V2luZG93cyBQaG9uZS9pLnRlc3QobkFndCksalF1ZXJ5LmJyb3dzZXIua2luZGxlPS9LaW5kbGV8U2lsay9pLnRlc3QobkFndCksalF1ZXJ5LmJyb3dzZXIubW9iaWxlPWpRdWVyeS5icm93c2VyLmFuZHJvaWR8fGpRdWVyeS5icm93c2VyLmJsYWNrYmVycnl8fGpRdWVyeS5icm93c2VyLmlvc3x8alF1ZXJ5LmJyb3dzZXIud2luZG93c01vYmlsZXx8alF1ZXJ5LmJyb3dzZXIub3BlcmFNb2JpbGV8fGpRdWVyeS5icm93c2VyLmtpbmRsZSxqUXVlcnkuaXNNb2JpbGU9alF1ZXJ5LmJyb3dzZXIubW9iaWxlLGpRdWVyeS5pc1RhYmxldD1qUXVlcnkuYnJvd3Nlci5tb2JpbGUmJmpRdWVyeSh3aW5kb3cpLndpZHRoKCk+NzY1LGpRdWVyeS5pc0FuZHJvaWREZWZhdWx0PWpRdWVyeS5icm93c2VyLmFuZHJvaWQmJiEvY2hyb21lL2kudGVzdChuQWd0KTtcblxuKGZ1bmN0aW9uKGIpe2Iuc2ltcGxlU2xpZGVyPXtkZWZhdWx0czp7aW5pdGlhbHZhbDowLHNjYWxlOjEwMCxvcmllbnRhdGlvbjpcImhcIixyZWFkb25seTohMSxjYWxsYmFjazohMX0sZXZlbnRzOntzdGFydDpiLmJyb3dzZXIubW9iaWxlP1widG91Y2hzdGFydFwiOlwibW91c2Vkb3duXCIsZW5kOmIuYnJvd3Nlci5tb2JpbGU/XCJ0b3VjaGVuZFwiOlwibW91c2V1cFwiLG1vdmU6Yi5icm93c2VyLm1vYmlsZT9cInRvdWNobW92ZVwiOlwibW91c2Vtb3ZlXCJ9LGluaXQ6ZnVuY3Rpb24oYyl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBhPXRoaXMsZD1iKGEpO2QuYWRkQ2xhc3MoXCJzaW1wbGVTbGlkZXJcIik7YS5vcHQ9e307Yi5leHRlbmQoYS5vcHQsYi5zaW1wbGVTbGlkZXIuZGVmYXVsdHMsYyk7Yi5leHRlbmQoYS5vcHQsZC5kYXRhKCkpO3ZhciBlPVwiaFwiPT1hLm9wdC5vcmllbnRhdGlvbj9cImhvcml6b250YWxcIjpcInZlcnRpY2FsXCIsZT1iKFwiPGRpdi8+XCIpLmFkZENsYXNzKFwibGV2ZWxcIikuYWRkQ2xhc3MoZSk7XG5cdGQucHJlcGVuZChlKTthLmxldmVsPWU7ZC5jc3Moe2N1cnNvcjpcImRlZmF1bHRcIn0pO1wiYXV0b1wiPT1hLm9wdC5zY2FsZSYmKGEub3B0LnNjYWxlPWIoYSkub3V0ZXJXaWR0aCgpKTtkLnVwZGF0ZVNsaWRlclZhbCgpO2Eub3B0LnJlYWRvbmx5fHwoZC5vbihiLnNpbXBsZVNsaWRlci5ldmVudHMuc3RhcnQsZnVuY3Rpb24oYyl7Yi5icm93c2VyLm1vYmlsZSYmKGM9Yy5jaGFuZ2VkVG91Y2hlc1swXSk7YS5jYW5TbGlkZT0hMDtkLnVwZGF0ZVNsaWRlclZhbChjKTtcImhcIj09YS5vcHQub3JpZW50YXRpb24/ZC5jc3Moe2N1cnNvcjpcImNvbC1yZXNpemVcIn0pOmQuY3NzKHtjdXJzb3I6XCJyb3ctcmVzaXplXCJ9KTtjLnByZXZlbnREZWZhdWx0KCk7Yy5zdG9wUHJvcGFnYXRpb24oKX0pLGIoZG9jdW1lbnQpLm9uKGIuc2ltcGxlU2xpZGVyLmV2ZW50cy5tb3ZlLGZ1bmN0aW9uKGMpe2IuYnJvd3Nlci5tb2JpbGUmJihjPWMuY2hhbmdlZFRvdWNoZXNbMF0pO2EuY2FuU2xpZGUmJihiKGRvY3VtZW50KS5jc3Moe2N1cnNvcjpcImRlZmF1bHRcIn0pLFxuXHRcdFx0ZC51cGRhdGVTbGlkZXJWYWwoYyksYy5wcmV2ZW50RGVmYXVsdCgpLGMuc3RvcFByb3BhZ2F0aW9uKCkpfSkub24oYi5zaW1wbGVTbGlkZXIuZXZlbnRzLmVuZCxmdW5jdGlvbigpe2IoZG9jdW1lbnQpLmNzcyh7Y3Vyc29yOlwiYXV0b1wifSk7YS5jYW5TbGlkZT0hMTtkLmNzcyh7Y3Vyc29yOlwiYXV0b1wifSl9KSl9KX0sdXBkYXRlU2xpZGVyVmFsOmZ1bmN0aW9uKGMpe3ZhciBhPXRoaXMuZ2V0KDApO2lmKGEub3B0KXthLm9wdC5pbml0aWFsdmFsPVwibnVtYmVyXCI9PXR5cGVvZiBhLm9wdC5pbml0aWFsdmFsP2Eub3B0LmluaXRpYWx2YWw6YS5vcHQuaW5pdGlhbHZhbChhKTt2YXIgZD1iKGEpLm91dGVyV2lkdGgoKSxlPWIoYSkub3V0ZXJIZWlnaHQoKTthLng9XCJvYmplY3RcIj09dHlwZW9mIGM/Yy5jbGllbnRYK2RvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdC10aGlzLm9mZnNldCgpLmxlZnQ6XCJudW1iZXJcIj09dHlwZW9mIGM/YypkL2Eub3B0LnNjYWxlOmEub3B0LmluaXRpYWx2YWwqZC9hLm9wdC5zY2FsZTtcblx0YS55PVwib2JqZWN0XCI9PXR5cGVvZiBjP2MuY2xpZW50WStkb2N1bWVudC5ib2R5LnNjcm9sbFRvcC10aGlzLm9mZnNldCgpLnRvcDpcIm51bWJlclwiPT10eXBlb2YgYz8oYS5vcHQuc2NhbGUtYS5vcHQuaW5pdGlhbHZhbC1jKSplL2Eub3B0LnNjYWxlOmEub3B0LmluaXRpYWx2YWwqZS9hLm9wdC5zY2FsZTthLnk9dGhpcy5vdXRlckhlaWdodCgpLWEueTthLnNjYWxlWD1hLngqYS5vcHQuc2NhbGUvZDthLnNjYWxlWT1hLnkqYS5vcHQuc2NhbGUvZTthLm91dE9mUmFuZ2VYPWEuc2NhbGVYPmEub3B0LnNjYWxlP2Euc2NhbGVYLWEub3B0LnNjYWxlOjA+YS5zY2FsZVg/YS5zY2FsZVg6MDthLm91dE9mUmFuZ2VZPWEuc2NhbGVZPmEub3B0LnNjYWxlP2Euc2NhbGVZLWEub3B0LnNjYWxlOjA+YS5zY2FsZVk/YS5zY2FsZVk6MDthLm91dE9mUmFuZ2U9XCJoXCI9PWEub3B0Lm9yaWVudGF0aW9uP2Eub3V0T2ZSYW5nZVg6YS5vdXRPZlJhbmdlWTthLnZhbHVlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBjP1xuXHRcdFx0XHRcdFwiaFwiPT1hLm9wdC5vcmllbnRhdGlvbj9hLng+PXRoaXMub3V0ZXJXaWR0aCgpP2Eub3B0LnNjYWxlOjA+PWEueD8wOmEuc2NhbGVYOmEueT49dGhpcy5vdXRlckhlaWdodCgpP2Eub3B0LnNjYWxlOjA+PWEueT8wOmEuc2NhbGVZOlwiaFwiPT1hLm9wdC5vcmllbnRhdGlvbj9hLnNjYWxlWDphLnNjYWxlWTtcImhcIj09YS5vcHQub3JpZW50YXRpb24/YS5sZXZlbC53aWR0aChNYXRoLmZsb29yKDEwMCphLngvZCkrXCIlXCIpOmEubGV2ZWwuaGVpZ2h0KE1hdGguZmxvb3IoMTAwKmEueS9lKSk7XCJmdW5jdGlvblwiPT10eXBlb2YgYS5vcHQuY2FsbGJhY2smJmEub3B0LmNhbGxiYWNrKGEpfX19O2IuZm4uc2ltcGxlU2xpZGVyPWIuc2ltcGxlU2xpZGVyLmluaXQ7Yi5mbi51cGRhdGVTbGlkZXJWYWw9Yi5zaW1wbGVTbGlkZXIudXBkYXRlU2xpZGVyVmFsfSkoalF1ZXJ5KTtcbjsvKl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuIF8ganF1ZXJ5Lm1iLmNvbXBvbmVudHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyBmaWxlOiBqcXVlcnkubWIuc3RvcmFnZS5taW4uanMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gbGFzdCBtb2RpZmllZDogMjQvMDUvMTUgMTYuMDggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyBPcGVuIExhYiBzLnIubC4sIEZsb3JlbmNlIC0gSXRhbHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfIGVtYWlsOiBtYXR0ZW9Ab3Blbi1sYWIuY29tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyBzaXRlOiBodHRwOi8vcHVwdW56aS5jb20gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gICAgICAgaHR0cDovL29wZW4tbGFiLmNvbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfIGJsb2c6IGh0dHA6Ly9wdXB1bnppLm9wZW4tbGFiLmNvbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyBRJkE6ICBodHRwOi8vanF1ZXJ5LnB1cHVuemkuY29tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfIExpY2VuY2VzOiBNSVQsIEdQTCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyAgICBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF8gICAgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC5odG1sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9cbiBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXG4gXyBDb3B5cmlnaHQgKGMpIDIwMDEtMjAxNS4gTWF0dGVvIEJpY29jY2hpIChQdXB1bnppKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1xuIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyovXG5cbiFmdW5jdGlvbihhKXthLm1iQ29va2llPXtzZXQ6ZnVuY3Rpb24oYSxiLGMsZCl7Yj1KU09OLnN0cmluZ2lmeShiKSxjfHwoYz03KSxkPWQ/XCI7IGRvbWFpbj1cIitkOlwiXCI7dmFyIGYsZT1uZXcgRGF0ZTtlLnNldFRpbWUoZS5nZXRUaW1lKCkrMWUzKjYwKjYwKjI0KmMpLGY9XCI7IGV4cGlyZXM9XCIrZS50b0dNVFN0cmluZygpLGRvY3VtZW50LmNvb2tpZT1hK1wiPVwiK2IrZitcIjsgcGF0aD0vXCIrZH0sZ2V0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1hK1wiPVwiLGM9ZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKSxkPTA7ZDxjLmxlbmd0aDtkKyspe2Zvcih2YXIgZT1jW2RdO1wiIFwiPT1lLmNoYXJBdCgwKTspZT1lLnN1YnN0cmluZygxLGUubGVuZ3RoKTtpZigwPT1lLmluZGV4T2YoYikpcmV0dXJuIEpTT04ucGFyc2UoZS5zdWJzdHJpbmcoYi5sZW5ndGgsZS5sZW5ndGgpKX1yZXR1cm4gbnVsbH0scmVtb3ZlOmZ1bmN0aW9uKGIpe2EubWJDb29raWUuc2V0KGIsXCJcIiwtMSl9fSxhLm1iU3RvcmFnZT17c2V0OmZ1bmN0aW9uKGEsYil7Yj1KU09OLnN0cmluZ2lmeShiKSxsb2NhbFN0b3JhZ2Uuc2V0SXRlbShhLGIpfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGxvY2FsU3RvcmFnZVthXT9KU09OLnBhcnNlKGxvY2FsU3RvcmFnZVthXSk6bnVsbH0scmVtb3ZlOmZ1bmN0aW9uKGEpe2E/bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYSk6bG9jYWxTdG9yYWdlLmNsZWFyKCl9fX0oalF1ZXJ5KTsiLCIvKiEgU3dpcGVib3ggdjEuNC40IHwgQ29uc3RhbnRpbiBTYWd1aW4gY3NhZy5jbyB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9icnV0YWxkZXNpZ24vc3dpcGVib3ggKi9cbiFmdW5jdGlvbihhLGIsYyxkKXtjLnN3aXBlYm94PWZ1bmN0aW9uKGUsZil7dmFyIGcsaCxpPXt1c2VDU1M6ITAsdXNlU1ZHOiEwLGluaXRpYWxJbmRleE9uQXJyYXk6MCxyZW1vdmVCYXJzT25Nb2JpbGU6ITAsaGlkZUNsb3NlQnV0dG9uT25Nb2JpbGU6ITEsaGlkZUJhcnNEZWxheTozZTMsdmlkZW9NYXhXaWR0aDoxMTQwLHZpbWVvQ29sb3I6XCJjY2NjY2NcIixiZWZvcmVPcGVuOm51bGwsYWZ0ZXJPcGVuOm51bGwsYWZ0ZXJDbG9zZTpudWxsLGFmdGVyTWVkaWE6bnVsbCxuZXh0U2xpZGU6bnVsbCxwcmV2U2xpZGU6bnVsbCxsb29wQXRFbmQ6ITEsYXV0b3BsYXlWaWRlb3M6ITEscXVlcnlTdHJpbmdEYXRhOnt9LHRvZ2dsZUNsYXNzT25Mb2FkOlwiXCJ9LGo9dGhpcyxrPVtdLGw9ZS5zZWxlY3RvcixtPW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGFkKXwoaVBob25lKXwoaVBvZCl8KEFuZHJvaWQpfChQbGF5Qm9vayl8KEJCMTApfChCbGFja0JlcnJ5KXwoT3BlcmEgTWluaSl8KElFTW9iaWxlKXwod2ViT1MpfChNZWVHbykvaSksbj1udWxsIT09bXx8Yi5jcmVhdGVUb3VjaCE9PWR8fFwib250b3VjaHN0YXJ0XCJpbiBhfHxcIm9ubXNnZXN0dXJlY2hhbmdlXCJpbiBhfHxuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyxvPSEhYi5jcmVhdGVFbGVtZW50TlMmJiEhYi5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwic3ZnXCIpLmNyZWF0ZVNWR1JlY3QscD1hLmlubmVyV2lkdGg/YS5pbm5lcldpZHRoOmMoYSkud2lkdGgoKSxxPWEuaW5uZXJIZWlnaHQ/YS5pbm5lckhlaWdodDpjKGEpLmhlaWdodCgpLHI9MCxzPSc8ZGl2IGlkPVwic3dpcGVib3gtb3ZlcmxheVwiPlx0XHRcdFx0XHQ8ZGl2IGlkPVwic3dpcGVib3gtY29udGFpbmVyXCI+XHRcdFx0XHRcdFx0PGRpdiBpZD1cInN3aXBlYm94LXNsaWRlclwiPjwvZGl2Plx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJzd2lwZWJveC10b3AtYmFyXCI+XHRcdFx0XHRcdFx0XHQ8ZGl2IGlkPVwic3dpcGVib3gtdGl0bGVcIj48L2Rpdj5cdFx0XHRcdFx0XHQ8L2Rpdj5cdFx0XHRcdFx0XHQ8ZGl2IGlkPVwic3dpcGVib3gtYm90dG9tLWJhclwiPlx0XHRcdFx0XHRcdFx0PGRpdiBpZD1cInN3aXBlYm94LWFycm93c1wiPlx0XHRcdFx0XHRcdFx0XHQ8YSBpZD1cInN3aXBlYm94LXByZXZcIj48L2E+XHRcdFx0XHRcdFx0XHRcdDxhIGlkPVwic3dpcGVib3gtbmV4dFwiPjwvYT5cdFx0XHRcdFx0XHRcdDwvZGl2Plx0XHRcdFx0XHRcdDwvZGl2Plx0XHRcdFx0XHRcdDxhIGlkPVwic3dpcGVib3gtY2xvc2VcIj48L2E+XHRcdFx0XHRcdDwvZGl2Plx0XHRcdDwvZGl2Pic7ai5zZXR0aW5ncz17fSxjLnN3aXBlYm94LmNsb3NlPWZ1bmN0aW9uKCl7Zy5jbG9zZVNsaWRlKCl9LGMuc3dpcGVib3guZXh0ZW5kPWZ1bmN0aW9uKCl7cmV0dXJuIGd9LGouaW5pdD1mdW5jdGlvbigpe2ouc2V0dGluZ3M9Yy5leHRlbmQoe30saSxmKSxjLmlzQXJyYXkoZSk/KGs9ZSxnLnRhcmdldD1jKGEpLGcuaW5pdChqLnNldHRpbmdzLmluaXRpYWxJbmRleE9uQXJyYXkpKTpjKGIpLm9uKFwiY2xpY2tcIixsLGZ1bmN0aW9uKGEpe2lmKFwic2xpZGUgY3VycmVudFwiPT09YS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUpcmV0dXJuITE7Yy5pc0FycmF5KGUpfHwoZy5kZXN0cm95KCksaD1jKGwpLGcuYWN0aW9ucygpKSxrPVtdO3ZhciBiLGQsZjtmfHwoZD1cImRhdGEtcmVsXCIsZj1jKHRoaXMpLmF0dHIoZCkpLGZ8fChkPVwicmVsXCIsZj1jKHRoaXMpLmF0dHIoZCkpLGg9ZiYmXCJcIiE9PWYmJlwibm9mb2xsb3dcIiE9PWY/YyhsKS5maWx0ZXIoXCJbXCIrZCsnPVwiJytmKydcIl0nKTpjKGwpLGguZWFjaChmdW5jdGlvbigpe3ZhciBhPW51bGwsYj1udWxsO2ModGhpcykuYXR0cihcInRpdGxlXCIpJiYoYT1jKHRoaXMpLmF0dHIoXCJ0aXRsZVwiKSksYyh0aGlzKS5hdHRyKFwiaHJlZlwiKSYmKGI9Yyh0aGlzKS5hdHRyKFwiaHJlZlwiKSksay5wdXNoKHtocmVmOmIsdGl0bGU6YX0pfSksYj1oLmluZGV4KGModGhpcykpLGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpLGcudGFyZ2V0PWMoYS50YXJnZXQpLGcuaW5pdChiKX0pfSxnPXtpbml0OmZ1bmN0aW9uKGEpe2ouc2V0dGluZ3MuYmVmb3JlT3BlbiYmai5zZXR0aW5ncy5iZWZvcmVPcGVuKCksdGhpcy50YXJnZXQudHJpZ2dlcihcInN3aXBlYm94LXN0YXJ0XCIpLGMuc3dpcGVib3guaXNPcGVuPSEwLHRoaXMuYnVpbGQoKSx0aGlzLm9wZW5TbGlkZShhKSx0aGlzLm9wZW5NZWRpYShhKSx0aGlzLnByZWxvYWRNZWRpYShhKzEpLHRoaXMucHJlbG9hZE1lZGlhKGEtMSksai5zZXR0aW5ncy5hZnRlck9wZW4mJmouc2V0dGluZ3MuYWZ0ZXJPcGVuKGEpfSxidWlsZDpmdW5jdGlvbigpe3ZhciBhLGI9dGhpcztjKFwiYm9keVwiKS5hcHBlbmQocyksbyYmai5zZXR0aW5ncy51c2VTVkc9PT0hMCYmKGE9YyhcIiNzd2lwZWJveC1jbG9zZVwiKS5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIpLGE9YS5yZXBsYWNlKFwicG5nXCIsXCJzdmdcIiksYyhcIiNzd2lwZWJveC1wcmV2LCAjc3dpcGVib3gtbmV4dCwgI3N3aXBlYm94LWNsb3NlXCIpLmNzcyh7XCJiYWNrZ3JvdW5kLWltYWdlXCI6YX0pKSxtJiZqLnNldHRpbmdzLnJlbW92ZUJhcnNPbk1vYmlsZSYmYyhcIiNzd2lwZWJveC1ib3R0b20tYmFyLCAjc3dpcGVib3gtdG9wLWJhclwiKS5yZW1vdmUoKSxjLmVhY2goayxmdW5jdGlvbigpe2MoXCIjc3dpcGVib3gtc2xpZGVyXCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInNsaWRlXCI+PC9kaXY+Jyl9KSxiLnNldERpbSgpLGIuYWN0aW9ucygpLG4mJmIuZ2VzdHVyZSgpLGIua2V5Ym9hcmQoKSxiLmFuaW1CYXJzKCksYi5yZXNpemUoKX0sc2V0RGltOmZ1bmN0aW9uKCl7dmFyIGIsZCxlPXt9O1wib25vcmllbnRhdGlvbmNoYW5nZVwiaW4gYT9hLmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLGZ1bmN0aW9uKCl7MD09PWEub3JpZW50YXRpb24/KGI9cCxkPXEpOig5MD09PWEub3JpZW50YXRpb258fC05MD09PWEub3JpZW50YXRpb24pJiYoYj1xLGQ9cCl9LCExKTooYj1hLmlubmVyV2lkdGg/YS5pbm5lcldpZHRoOmMoYSkud2lkdGgoKSxkPWEuaW5uZXJIZWlnaHQ/YS5pbm5lckhlaWdodDpjKGEpLmhlaWdodCgpKSxlPXt3aWR0aDpiLGhlaWdodDpkfSxjKFwiI3N3aXBlYm94LW92ZXJsYXlcIikuY3NzKGUpfSxyZXNpemU6ZnVuY3Rpb24oKXt2YXIgYj10aGlzO2MoYSkucmVzaXplKGZ1bmN0aW9uKCl7Yi5zZXREaW0oKX0pLnJlc2l6ZSgpfSxzdXBwb3J0VHJhbnNpdGlvbjpmdW5jdGlvbigpe3ZhciBhLGM9XCJ0cmFuc2l0aW9uIFdlYmtpdFRyYW5zaXRpb24gTW96VHJhbnNpdGlvbiBPVHJhbnNpdGlvbiBtc1RyYW5zaXRpb24gS2h0bWxUcmFuc2l0aW9uXCIuc3BsaXQoXCIgXCIpO2ZvcihhPTA7YTxjLmxlbmd0aDthKyspaWYoYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlW2NbYV1dIT09ZClyZXR1cm4gY1thXTtyZXR1cm4hMX0sZG9Dc3NUcmFuczpmdW5jdGlvbigpe3JldHVybiBqLnNldHRpbmdzLnVzZUNTUyYmdGhpcy5zdXBwb3J0VHJhbnNpdGlvbigpPyEwOnZvaWQgMH0sZ2VzdHVyZTpmdW5jdGlvbigpe3ZhciBhLGIsZCxlLGYsZyxoPXRoaXMsaT0hMSxqPSExLGw9MTAsbT01MCxuPXt9LG89e30scT1jKFwiI3N3aXBlYm94LXRvcC1iYXIsICNzd2lwZWJveC1ib3R0b20tYmFyXCIpLHM9YyhcIiNzd2lwZWJveC1zbGlkZXJcIik7cS5hZGRDbGFzcyhcInZpc2libGUtYmFyc1wiKSxoLnNldFRpbWVvdXQoKSxjKFwiYm9keVwiKS5iaW5kKFwidG91Y2hzdGFydFwiLGZ1bmN0aW9uKGgpe3JldHVybiBjKHRoaXMpLmFkZENsYXNzKFwidG91Y2hpbmdcIiksYT1jKFwiI3N3aXBlYm94LXNsaWRlciAuc2xpZGVcIikuaW5kZXgoYyhcIiNzd2lwZWJveC1zbGlkZXIgLnNsaWRlLmN1cnJlbnRcIikpLG89aC5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0sbi5wYWdlWD1oLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCxuLnBhZ2VZPWgub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZLGMoXCIjc3dpcGVib3gtc2xpZGVyXCIpLmNzcyh7XCItd2Via2l0LXRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoXCIrcitcIiUsIDAsIDApXCIsdHJhbnNmb3JtOlwidHJhbnNsYXRlM2QoXCIrcitcIiUsIDAsIDApXCJ9KSxjKFwiLnRvdWNoaW5nXCIpLmJpbmQoXCJ0b3VjaG1vdmVcIixmdW5jdGlvbihoKXtpZihoLnByZXZlbnREZWZhdWx0KCksaC5zdG9wUHJvcGFnYXRpb24oKSxvPWgub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLCFqJiYoZj1kLGQ9by5wYWdlWS1uLnBhZ2VZLE1hdGguYWJzKGQpPj1tfHxpKSl7dmFyIHE9Ljc1LU1hdGguYWJzKGQpL3MuaGVpZ2h0KCk7cy5jc3Moe3RvcDpkK1wicHhcIn0pLHMuY3NzKHtvcGFjaXR5OnF9KSxpPSEwfWU9YixiPW8ucGFnZVgtbi5wYWdlWCxnPTEwMCpiL3AsIWomJiFpJiZNYXRoLmFicyhiKT49bCYmKGMoXCIjc3dpcGVib3gtc2xpZGVyXCIpLmNzcyh7XCItd2Via2l0LXRyYW5zaXRpb25cIjpcIlwiLHRyYW5zaXRpb246XCJcIn0pLGo9ITApLGomJihiPjA/MD09PWE/YyhcIiNzd2lwZWJveC1vdmVybGF5XCIpLmFkZENsYXNzKFwibGVmdFNwcmluZ1RvdWNoXCIpOihjKFwiI3N3aXBlYm94LW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJsZWZ0U3ByaW5nVG91Y2hcIikucmVtb3ZlQ2xhc3MoXCJyaWdodFNwcmluZ1RvdWNoXCIpLGMoXCIjc3dpcGVib3gtc2xpZGVyXCIpLmNzcyh7XCItd2Via2l0LXRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoXCIrKHIrZykrXCIlLCAwLCAwKVwiLHRyYW5zZm9ybTpcInRyYW5zbGF0ZTNkKFwiKyhyK2cpK1wiJSwgMCwgMClcIn0pKTowPmImJihrLmxlbmd0aD09PWErMT9jKFwiI3N3aXBlYm94LW92ZXJsYXlcIikuYWRkQ2xhc3MoXCJyaWdodFNwcmluZ1RvdWNoXCIpOihjKFwiI3N3aXBlYm94LW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJsZWZ0U3ByaW5nVG91Y2hcIikucmVtb3ZlQ2xhc3MoXCJyaWdodFNwcmluZ1RvdWNoXCIpLGMoXCIjc3dpcGVib3gtc2xpZGVyXCIpLmNzcyh7XCItd2Via2l0LXRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoXCIrKHIrZykrXCIlLCAwLCAwKVwiLHRyYW5zZm9ybTpcInRyYW5zbGF0ZTNkKFwiKyhyK2cpK1wiJSwgMCwgMClcIn0pKSkpfSksITF9KS5iaW5kKFwidG91Y2hlbmRcIixmdW5jdGlvbihhKXtpZihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSxjKFwiI3N3aXBlYm94LXNsaWRlclwiKS5jc3Moe1wiLXdlYmtpdC10cmFuc2l0aW9uXCI6XCItd2Via2l0LXRyYW5zZm9ybSAwLjRzIGVhc2VcIix0cmFuc2l0aW9uOlwidHJhbnNmb3JtIDAuNHMgZWFzZVwifSksZD1vLnBhZ2VZLW4ucGFnZVksYj1vLnBhZ2VYLW4ucGFnZVgsZz0xMDAqYi9wLGkpaWYoaT0hMSxNYXRoLmFicyhkKT49MiptJiZNYXRoLmFicyhkKT5NYXRoLmFicyhmKSl7dmFyIGs9ZD4wP3MuaGVpZ2h0KCk6LXMuaGVpZ2h0KCk7cy5hbmltYXRlKHt0b3A6aytcInB4XCIsb3BhY2l0eTowfSwzMDAsZnVuY3Rpb24oKXtoLmNsb3NlU2xpZGUoKX0pfWVsc2Ugcy5hbmltYXRlKHt0b3A6MCxvcGFjaXR5OjF9LDMwMCk7ZWxzZSBqPyhqPSExLGI+PWwmJmI+PWU/aC5nZXRQcmV2KCk6LWw+PWImJmU+PWImJmguZ2V0TmV4dCgpKTpxLmhhc0NsYXNzKFwidmlzaWJsZS1iYXJzXCIpPyhoLmNsZWFyVGltZW91dCgpLGguaGlkZUJhcnMoKSk6KGguc2hvd0JhcnMoKSxoLnNldFRpbWVvdXQoKSk7YyhcIiNzd2lwZWJveC1zbGlkZXJcIikuY3NzKHtcIi13ZWJraXQtdHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZChcIityK1wiJSwgMCwgMClcIix0cmFuc2Zvcm06XCJ0cmFuc2xhdGUzZChcIityK1wiJSwgMCwgMClcIn0pLGMoXCIjc3dpcGVib3gtb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcImxlZnRTcHJpbmdUb3VjaFwiKS5yZW1vdmVDbGFzcyhcInJpZ2h0U3ByaW5nVG91Y2hcIiksYyhcIi50b3VjaGluZ1wiKS5vZmYoXCJ0b3VjaG1vdmVcIikucmVtb3ZlQ2xhc3MoXCJ0b3VjaGluZ1wiKX0pfSxzZXRUaW1lb3V0OmZ1bmN0aW9uKCl7aWYoai5zZXR0aW5ncy5oaWRlQmFyc0RlbGF5PjApe3ZhciBiPXRoaXM7Yi5jbGVhclRpbWVvdXQoKSxiLnRpbWVvdXQ9YS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yi5oaWRlQmFycygpfSxqLnNldHRpbmdzLmhpZGVCYXJzRGVsYXkpfX0sY2xlYXJUaW1lb3V0OmZ1bmN0aW9uKCl7YS5jbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KSx0aGlzLnRpbWVvdXQ9bnVsbH0sc2hvd0JhcnM6ZnVuY3Rpb24oKXt2YXIgYT1jKFwiI3N3aXBlYm94LXRvcC1iYXIsICNzd2lwZWJveC1ib3R0b20tYmFyXCIpO3RoaXMuZG9Dc3NUcmFucygpP2EuYWRkQ2xhc3MoXCJ2aXNpYmxlLWJhcnNcIik6KGMoXCIjc3dpcGVib3gtdG9wLWJhclwiKS5hbmltYXRlKHt0b3A6MH0sNTAwKSxjKFwiI3N3aXBlYm94LWJvdHRvbS1iYXJcIikuYW5pbWF0ZSh7Ym90dG9tOjB9LDUwMCksc2V0VGltZW91dChmdW5jdGlvbigpe2EuYWRkQ2xhc3MoXCJ2aXNpYmxlLWJhcnNcIil9LDFlMykpfSxoaWRlQmFyczpmdW5jdGlvbigpe3ZhciBhPWMoXCIjc3dpcGVib3gtdG9wLWJhciwgI3N3aXBlYm94LWJvdHRvbS1iYXJcIik7dGhpcy5kb0Nzc1RyYW5zKCk/YS5yZW1vdmVDbGFzcyhcInZpc2libGUtYmFyc1wiKTooYyhcIiNzd2lwZWJveC10b3AtYmFyXCIpLmFuaW1hdGUoe3RvcDpcIi01MHB4XCJ9LDUwMCksYyhcIiNzd2lwZWJveC1ib3R0b20tYmFyXCIpLmFuaW1hdGUoe2JvdHRvbTpcIi01MHB4XCJ9LDUwMCksc2V0VGltZW91dChmdW5jdGlvbigpe2EucmVtb3ZlQ2xhc3MoXCJ2aXNpYmxlLWJhcnNcIil9LDFlMykpfSxhbmltQmFyczpmdW5jdGlvbigpe3ZhciBhPXRoaXMsYj1jKFwiI3N3aXBlYm94LXRvcC1iYXIsICNzd2lwZWJveC1ib3R0b20tYmFyXCIpO2IuYWRkQ2xhc3MoXCJ2aXNpYmxlLWJhcnNcIiksYS5zZXRUaW1lb3V0KCksYyhcIiNzd2lwZWJveC1zbGlkZXJcIikuY2xpY2soZnVuY3Rpb24oKXtiLmhhc0NsYXNzKFwidmlzaWJsZS1iYXJzXCIpfHwoYS5zaG93QmFycygpLGEuc2V0VGltZW91dCgpKX0pLGMoXCIjc3dpcGVib3gtYm90dG9tLWJhclwiKS5ob3ZlcihmdW5jdGlvbigpe2Euc2hvd0JhcnMoKSxiLmFkZENsYXNzKFwidmlzaWJsZS1iYXJzXCIpLGEuY2xlYXJUaW1lb3V0KCl9LGZ1bmN0aW9uKCl7ai5zZXR0aW5ncy5oaWRlQmFyc0RlbGF5PjAmJihiLnJlbW92ZUNsYXNzKFwidmlzaWJsZS1iYXJzXCIpLGEuc2V0VGltZW91dCgpKX0pfSxrZXlib2FyZDpmdW5jdGlvbigpe3ZhciBiPXRoaXM7YyhhKS5iaW5kKFwia2V5dXBcIixmdW5jdGlvbihhKXthLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSwzNz09PWEua2V5Q29kZT9iLmdldFByZXYoKTozOT09PWEua2V5Q29kZT9iLmdldE5leHQoKToyNz09PWEua2V5Q29kZSYmYi5jbG9zZVNsaWRlKCl9KX0sYWN0aW9uczpmdW5jdGlvbigpe3ZhciBhPXRoaXMsYj1cInRvdWNoZW5kIGNsaWNrXCI7ay5sZW5ndGg8Mj8oYyhcIiNzd2lwZWJveC1ib3R0b20tYmFyXCIpLmhpZGUoKSxkPT09a1sxXSYmYyhcIiNzd2lwZWJveC10b3AtYmFyXCIpLmhpZGUoKSk6KGMoXCIjc3dpcGVib3gtcHJldlwiKS5iaW5kKGIsZnVuY3Rpb24oYil7Yi5wcmV2ZW50RGVmYXVsdCgpLGIuc3RvcFByb3BhZ2F0aW9uKCksYS5nZXRQcmV2KCksYS5zZXRUaW1lb3V0KCl9KSxjKFwiI3N3aXBlYm94LW5leHRcIikuYmluZChiLGZ1bmN0aW9uKGIpe2IucHJldmVudERlZmF1bHQoKSxiLnN0b3BQcm9wYWdhdGlvbigpLGEuZ2V0TmV4dCgpLGEuc2V0VGltZW91dCgpfSkpLGMoXCIjc3dpcGVib3gtY2xvc2VcIikuYmluZChiLGZ1bmN0aW9uKCl7YS5jbG9zZVNsaWRlKCl9KX0sc2V0U2xpZGU6ZnVuY3Rpb24oYSxiKXtiPWJ8fCExO3ZhciBkPWMoXCIjc3dpcGVib3gtc2xpZGVyXCIpO3I9MTAwKi1hLHRoaXMuZG9Dc3NUcmFucygpP2QuY3NzKHtcIi13ZWJraXQtdHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZChcIisxMDAqLWErXCIlLCAwLCAwKVwiLHRyYW5zZm9ybTpcInRyYW5zbGF0ZTNkKFwiKzEwMCotYStcIiUsIDAsIDApXCJ9KTpkLmFuaW1hdGUoe2xlZnQ6MTAwKi1hK1wiJVwifSksYyhcIiNzd2lwZWJveC1zbGlkZXIgLnNsaWRlXCIpLnJlbW92ZUNsYXNzKFwiY3VycmVudFwiKSxjKFwiI3N3aXBlYm94LXNsaWRlciAuc2xpZGVcIikuZXEoYSkuYWRkQ2xhc3MoXCJjdXJyZW50XCIpLHRoaXMuc2V0VGl0bGUoYSksYiYmZC5mYWRlSW4oKSxjKFwiI3N3aXBlYm94LXByZXYsICNzd2lwZWJveC1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIiksMD09PWE/YyhcIiNzd2lwZWJveC1wcmV2XCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik6YT09PWsubGVuZ3RoLTEmJmouc2V0dGluZ3MubG9vcEF0RW5kIT09ITAmJmMoXCIjc3dpcGVib3gtbmV4dFwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpfSxvcGVuU2xpZGU6ZnVuY3Rpb24oYil7YyhcImh0bWxcIikuYWRkQ2xhc3MoXCJzd2lwZWJveC1odG1sXCIpLG4/KGMoXCJodG1sXCIpLmFkZENsYXNzKFwic3dpcGVib3gtdG91Y2hcIiksai5zZXR0aW5ncy5oaWRlQ2xvc2VCdXR0b25Pbk1vYmlsZSYmYyhcImh0bWxcIikuYWRkQ2xhc3MoXCJzd2lwZWJveC1uby1jbG9zZS1idXR0b25cIikpOmMoXCJodG1sXCIpLmFkZENsYXNzKFwic3dpcGVib3gtbm8tdG91Y2hcIiksYyhhKS50cmlnZ2VyKFwicmVzaXplXCIpLHRoaXMuc2V0U2xpZGUoYiwhMCl9LHByZWxvYWRNZWRpYTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9bnVsbDtrW2FdIT09ZCYmKGM9a1thXS5ocmVmKSxiLmlzVmlkZW8oYyk/Yi5vcGVuTWVkaWEoYSk6c2V0VGltZW91dChmdW5jdGlvbigpe2Iub3Blbk1lZGlhKGEpfSwxZTMpfSxvcGVuTWVkaWE6ZnVuY3Rpb24oYSl7dmFyIGIsZSxmPXRoaXM7cmV0dXJuIGtbYV0hPT1kJiYoYj1rW2FdLmhyZWYpLDA+YXx8YT49ay5sZW5ndGg/ITE6KGU9YyhcIiNzd2lwZWJveC1zbGlkZXIgLnNsaWRlXCIpLmVxKGEpLHZvaWQoZi5pc1ZpZGVvKGIpPyhlLmh0bWwoZi5nZXRWaWRlbyhiKSksai5zZXR0aW5ncy5hZnRlck1lZGlhJiZqLnNldHRpbmdzLmFmdGVyTWVkaWEoYSkpOihlLmFkZENsYXNzKFwic2xpZGUtbG9hZGluZ1wiKSxmLmxvYWRNZWRpYShiLGZ1bmN0aW9uKCl7ZS5yZW1vdmVDbGFzcyhcInNsaWRlLWxvYWRpbmdcIiksZS5odG1sKHRoaXMpLGouc2V0dGluZ3MuYWZ0ZXJNZWRpYSYmai5zZXR0aW5ncy5hZnRlck1lZGlhKGEpfSkpKSl9LHNldFRpdGxlOmZ1bmN0aW9uKGEpe3ZhciBiPW51bGw7YyhcIiNzd2lwZWJveC10aXRsZVwiKS5lbXB0eSgpLGtbYV0hPT1kJiYoYj1rW2FdLnRpdGxlKSxiPyhjKFwiI3N3aXBlYm94LXRvcC1iYXJcIikuc2hvdygpLGMoXCIjc3dpcGVib3gtdGl0bGVcIikuYXBwZW5kKGIpKTpjKFwiI3N3aXBlYm94LXRvcC1iYXJcIikuaGlkZSgpfSxpc1ZpZGVvOmZ1bmN0aW9uKGEpe2lmKGEpe2lmKGEubWF0Y2goLyh5b3V0dWJlXFwuY29tfHlvdXR1YmUtbm9jb29raWVcXC5jb20pXFwvd2F0Y2hcXD92PShbYS16QS1aMC05XFwtX10rKS8pfHxhLm1hdGNoKC92aW1lb1xcLmNvbVxcLyhbMC05XSopLyl8fGEubWF0Y2goL3lvdXR1XFwuYmVcXC8oW2EtekEtWjAtOVxcLV9dKykvKSlyZXR1cm4hMDtpZihhLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcInN3aXBlYm94dmlkZW89MVwiKT49MClyZXR1cm4hMH19LHBhcnNlVXJpOmZ1bmN0aW9uKGEsZCl7dmFyIGU9Yi5jcmVhdGVFbGVtZW50KFwiYVwiKSxmPXt9O3JldHVybiBlLmhyZWY9ZGVjb2RlVVJJQ29tcG9uZW50KGEpLGUuc2VhcmNoJiYoZj1KU09OLnBhcnNlKCd7XCInK2Uuc2VhcmNoLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIj9cIixcIlwiKS5yZXBsYWNlKC8mL2csJ1wiLFwiJykucmVwbGFjZSgvPS9nLCdcIjpcIicpKydcIn0nKSksYy5pc1BsYWluT2JqZWN0KGQpJiYoZj1jLmV4dGVuZChmLGQsai5zZXR0aW5ncy5xdWVyeVN0cmluZ0RhdGEpKSxjLm1hcChmLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGEmJmE+XCJcIj9lbmNvZGVVUklDb21wb25lbnQoYikrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGEpOnZvaWQgMH0pLmpvaW4oXCImXCIpfSxnZXRWaWRlbzpmdW5jdGlvbihhKXt2YXIgYj1cIlwiLGM9YS5tYXRjaCgvKCg/Ond3d1xcLik/eW91dHViZVxcLmNvbXwoPzp3d3dcXC4pP3lvdXR1YmUtbm9jb29raWVcXC5jb20pXFwvd2F0Y2hcXD92PShbYS16QS1aMC05XFwtX10rKS8pLGQ9YS5tYXRjaCgvKD86d3d3XFwuKT95b3V0dVxcLmJlXFwvKFthLXpBLVowLTlcXC1fXSspLyksZT1hLm1hdGNoKC8oPzp3d3dcXC4pP3ZpbWVvXFwuY29tXFwvKFswLTldKikvKSxmPVwiXCI7cmV0dXJuIGN8fGQ/KGQmJihjPWQpLGY9Zy5wYXJzZVVyaShhLHthdXRvcGxheTpqLnNldHRpbmdzLmF1dG9wbGF5VmlkZW9zP1wiMVwiOlwiMFwiLHY6XCJcIn0pLGI9JzxpZnJhbWUgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCIvLycrY1sxXStcIi9lbWJlZC9cIitjWzJdK1wiP1wiK2YrJ1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nKTplPyhmPWcucGFyc2VVcmkoYSx7YXV0b3BsYXk6ai5zZXR0aW5ncy5hdXRvcGxheVZpZGVvcz9cIjFcIjpcIjBcIixieWxpbmU6XCIwXCIscG9ydHJhaXQ6XCIwXCIsY29sb3I6ai5zZXR0aW5ncy52aW1lb0NvbG9yfSksYj0nPGlmcmFtZSB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiICBzcmM9XCIvL3BsYXllci52aW1lby5jb20vdmlkZW8vJytlWzFdK1wiP1wiK2YrJ1wiIGZyYW1lYm9yZGVyPVwiMFwiIHdlYmtpdEFsbG93RnVsbFNjcmVlbiBtb3phbGxvd2Z1bGxzY3JlZW4gYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPicpOmI9JzxpZnJhbWUgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCInK2ErJ1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nLCc8ZGl2IGNsYXNzPVwic3dpcGVib3gtdmlkZW8tY29udGFpbmVyXCIgc3R5bGU9XCJtYXgtd2lkdGg6JytqLnNldHRpbmdzLnZpZGVvTWF4V2lkdGgrJ3B4XCI+PGRpdiBjbGFzcz1cInN3aXBlYm94LXZpZGVvXCI+JytiK1wiPC9kaXY+PC9kaXY+XCJ9LGxvYWRNZWRpYTpmdW5jdGlvbihhLGIpe2lmKDA9PT1hLnRyaW0oKS5pbmRleE9mKFwiI1wiKSliLmNhbGwoYyhcIjxkaXY+XCIse1wiY2xhc3NcIjpcInN3aXBlYm94LWlubGluZS1jb250YWluZXJcIn0pLmFwcGVuZChjKGEpLmNsb25lKCkudG9nZ2xlQ2xhc3Moai5zZXR0aW5ncy50b2dnbGVDbGFzc09uTG9hZCkpKTtlbHNlIGlmKCF0aGlzLmlzVmlkZW8oYSkpe3ZhciBkPWMoXCI8aW1nPlwiKS5vbihcImxvYWRcIixmdW5jdGlvbigpe2IuY2FsbChkKX0pO2QuYXR0cihcInNyY1wiLGEpfX0sZ2V0TmV4dDpmdW5jdGlvbigpe3ZhciBhLGI9dGhpcyxkPWMoXCIjc3dpcGVib3gtc2xpZGVyIC5zbGlkZVwiKS5pbmRleChjKFwiI3N3aXBlYm94LXNsaWRlciAuc2xpZGUuY3VycmVudFwiKSk7ZCsxPGsubGVuZ3RoPyhhPWMoXCIjc3dpcGVib3gtc2xpZGVyIC5zbGlkZVwiKS5lcShkKS5jb250ZW50cygpLmZpbmQoXCJpZnJhbWVcIikuYXR0cihcInNyY1wiKSxjKFwiI3N3aXBlYm94LXNsaWRlciAuc2xpZGVcIikuZXEoZCkuY29udGVudHMoKS5maW5kKFwiaWZyYW1lXCIpLmF0dHIoXCJzcmNcIixhKSxkKyssYi5zZXRTbGlkZShkKSxiLnByZWxvYWRNZWRpYShkKzEpLGouc2V0dGluZ3MubmV4dFNsaWRlJiZqLnNldHRpbmdzLm5leHRTbGlkZShkKSk6ai5zZXR0aW5ncy5sb29wQXRFbmQ9PT0hMD8oYT1jKFwiI3N3aXBlYm94LXNsaWRlciAuc2xpZGVcIikuZXEoZCkuY29udGVudHMoKS5maW5kKFwiaWZyYW1lXCIpLmF0dHIoXCJzcmNcIiksYyhcIiNzd2lwZWJveC1zbGlkZXIgLnNsaWRlXCIpLmVxKGQpLmNvbnRlbnRzKCkuZmluZChcImlmcmFtZVwiKS5hdHRyKFwic3JjXCIsYSksZD0wLGIucHJlbG9hZE1lZGlhKGQpLGIuc2V0U2xpZGUoZCksYi5wcmVsb2FkTWVkaWEoZCsxKSxqLnNldHRpbmdzLm5leHRTbGlkZSYmai5zZXR0aW5ncy5uZXh0U2xpZGUoZCkpOihjKFwiI3N3aXBlYm94LW92ZXJsYXlcIikuYWRkQ2xhc3MoXCJyaWdodFNwcmluZ1wiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YyhcIiNzd2lwZWJveC1vdmVybGF5XCIpLnJlbW92ZUNsYXNzKFwicmlnaHRTcHJpbmdcIil9LDUwMCkpfSxnZXRQcmV2OmZ1bmN0aW9uKCl7dmFyIGEsYj1jKFwiI3N3aXBlYm94LXNsaWRlciAuc2xpZGVcIikuaW5kZXgoYyhcIiNzd2lwZWJveC1zbGlkZXIgLnNsaWRlLmN1cnJlbnRcIikpO2I+MD8oYT1jKFwiI3N3aXBlYm94LXNsaWRlciAuc2xpZGVcIikuZXEoYikuY29udGVudHMoKS5maW5kKFwiaWZyYW1lXCIpLmF0dHIoXCJzcmNcIiksYyhcIiNzd2lwZWJveC1zbGlkZXIgLnNsaWRlXCIpLmVxKGIpLmNvbnRlbnRzKCkuZmluZChcImlmcmFtZVwiKS5hdHRyKFwic3JjXCIsYSksYi0tLHRoaXMuc2V0U2xpZGUoYiksdGhpcy5wcmVsb2FkTWVkaWEoYi0xKSxqLnNldHRpbmdzLnByZXZTbGlkZSYmai5zZXR0aW5ncy5wcmV2U2xpZGUoYikpOihjKFwiI3N3aXBlYm94LW92ZXJsYXlcIikuYWRkQ2xhc3MoXCJsZWZ0U3ByaW5nXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjKFwiI3N3aXBlYm94LW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJsZWZ0U3ByaW5nXCIpfSw1MDApKX0sbmV4dFNsaWRlOmZ1bmN0aW9uKGEpe30scHJldlNsaWRlOmZ1bmN0aW9uKGEpe30sY2xvc2VTbGlkZTpmdW5jdGlvbigpe2MoXCJodG1sXCIpLnJlbW92ZUNsYXNzKFwic3dpcGVib3gtaHRtbFwiKSxjKFwiaHRtbFwiKS5yZW1vdmVDbGFzcyhcInN3aXBlYm94LXRvdWNoXCIpLGMoYSkudHJpZ2dlcihcInJlc2l6ZVwiKSx0aGlzLmRlc3Ryb3koKX0sZGVzdHJveTpmdW5jdGlvbigpe2MoYSkudW5iaW5kKFwia2V5dXBcIiksYyhcImJvZHlcIikudW5iaW5kKFwidG91Y2hzdGFydFwiKSxjKFwiYm9keVwiKS51bmJpbmQoXCJ0b3VjaG1vdmVcIiksYyhcImJvZHlcIikudW5iaW5kKFwidG91Y2hlbmRcIiksYyhcIiNzd2lwZWJveC1zbGlkZXJcIikudW5iaW5kKCksYyhcIiNzd2lwZWJveC1vdmVybGF5XCIpLnJlbW92ZSgpLGMuaXNBcnJheShlKXx8ZS5yZW1vdmVEYXRhKFwiX3N3aXBlYm94XCIpLHRoaXMudGFyZ2V0JiZ0aGlzLnRhcmdldC50cmlnZ2VyKFwic3dpcGVib3gtZGVzdHJveVwiKSxjLnN3aXBlYm94LmlzT3Blbj0hMSxqLnNldHRpbmdzLmFmdGVyQ2xvc2UmJmouc2V0dGluZ3MuYWZ0ZXJDbG9zZSgpfX0sai5pbml0KCl9LGMuZm4uc3dpcGVib3g9ZnVuY3Rpb24oYSl7aWYoIWMuZGF0YSh0aGlzLFwiX3N3aXBlYm94XCIpKXt2YXIgYj1uZXcgYy5zd2lwZWJveCh0aGlzLGEpO3RoaXMuZGF0YShcIl9zd2lwZWJveFwiLGIpfXJldHVybiB0aGlzLmRhdGEoXCJfc3dpcGVib3hcIil9fSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTsiLCIvKlxuICogalF1ZXJ5IHRocm90dGxlIC8gZGVib3VuY2UgLSB2MS4xIC0gMy83LzIwMTBcbiAqIGh0dHA6Ly9iZW5hbG1hbi5jb20vcHJvamVjdHMvanF1ZXJ5LXRocm90dGxlLWRlYm91bmNlLXBsdWdpbi9cbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDEwIFwiQ293Ym95XCIgQmVuIEFsbWFuXG4gKiBEdWFsIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgYW5kIEdQTCBsaWNlbnNlcy5cbiAqIGh0dHA6Ly9iZW5hbG1hbi5jb20vYWJvdXQvbGljZW5zZS9cbiAqL1xuKGZ1bmN0aW9uKGIsYyl7dmFyICQ9Yi5qUXVlcnl8fGIuQ293Ym95fHwoYi5Db3dib3k9e30pLGE7JC50aHJvdHRsZT1hPWZ1bmN0aW9uKGUsZixqLGkpe3ZhciBoLGQ9MDtpZih0eXBlb2YgZiE9PVwiYm9vbGVhblwiKXtpPWo7aj1mO2Y9Y31mdW5jdGlvbiBnKCl7dmFyIG89dGhpcyxtPStuZXcgRGF0ZSgpLWQsbj1hcmd1bWVudHM7ZnVuY3Rpb24gbCgpe2Q9K25ldyBEYXRlKCk7ai5hcHBseShvLG4pfWZ1bmN0aW9uIGsoKXtoPWN9aWYoaSYmIWgpe2woKX1oJiZjbGVhclRpbWVvdXQoaCk7aWYoaT09PWMmJm0+ZSl7bCgpfWVsc2V7aWYoZiE9PXRydWUpe2g9c2V0VGltZW91dChpP2s6bCxpPT09Yz9lLW06ZSl9fX1pZigkLmd1aWQpe2cuZ3VpZD1qLmd1aWQ9ai5ndWlkfHwkLmd1aWQrK31yZXR1cm4gZ307JC5kZWJvdW5jZT1mdW5jdGlvbihkLGUsZil7cmV0dXJuIGY9PT1jP2EoZCxlLGZhbHNlKTphKGQsZixlIT09ZmFsc2UpfX0pKHRoaXMpOyIsIlxuKGZ1bmN0aW9uICgkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBzbGlkZTogICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgZGVsYXk6ICAgICAgICAgICAgICAgICAgIDUwMDAsXG4gICAgICAgIGxvb3A6ICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICBwcmVsb2FkOiAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgIHByZWxvYWRJbWFnZTogICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgcHJlbG9hZFZpZGVvOiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICB0aW1lcjogICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgb3ZlcmxheTogICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICBhdXRvcGxheTogICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgc2h1ZmZsZTogICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICBjb3ZlcjogICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgY29sb3I6ICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgIGFsaWduOiAgICAgICAgICAgICAgICAgICAnY2VudGVyJyxcbiAgICAgICAgdmFsaWduOiAgICAgICAgICAgICAgICAgICdjZW50ZXInLFxuICAgICAgICBmaXJzdFRyYW5zaXRpb246ICAgICAgICAgbnVsbCxcbiAgICAgICAgZmlyc3RUcmFuc2l0aW9uRHVyYXRpb246IG51bGwsXG4gICAgICAgIHRyYW5zaXRpb246ICAgICAgICAgICAgICAnZmFkZScsXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogICAgICAxMDAwLFxuICAgICAgICB0cmFuc2l0aW9uUmVnaXN0ZXI6ICAgICAgW10sXG4gICAgICAgIGFuaW1hdGlvbjogICAgICAgICAgICAgICBudWxsLFxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogICAgICAgJ2F1dG8nLFxuICAgICAgICBhbmltYXRpb25SZWdpc3RlcjogICAgICAgW10sXG4gICAgICAgIGluaXQ6ICBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgcGxheTogIGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBwYXVzZTogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIHdhbGs6ICBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgc2xpZGVzOiBbXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgc3JjOiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgLy8gIGNvbG9yOiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIC8vICBkZWxheTogICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAvLyAgYWxpZ246ICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgLy8gIHZhbGlnbjogICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIC8vICB0cmFuc2l0aW9uOiAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAvLyAgdHJhbnNpdGlvbkR1cmF0aW9uOiBudWxsLFxuICAgICAgICAgICAgLy8gIGFuaW1hdGlvbjogICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIC8vICBhbmltYXRpb25EdXJhdGlvbjogIG51bGwsXG4gICAgICAgICAgICAvLyAgY292ZXI6ICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgLy8gIHZpZGVvOiB7XG4gICAgICAgICAgICAvLyAgICAgIHNyYzogW10sXG4gICAgICAgICAgICAvLyAgICAgIG11dGU6IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgIGxvb3A6IHRydWVcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIC4uLlxuICAgICAgICBdXG4gICAgfTtcblxuICAgIHZhciB2aWRlb0NhY2hlID0ge307XG5cbiAgICB2YXIgVmVnYXMgPSBmdW5jdGlvbiAoZWxtdCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmVsbXQgICAgICAgICA9IGVsbXQ7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgICAgID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCAkLnZlZ2FzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zbGlkZSAgICAgICAgPSB0aGlzLnNldHRpbmdzLnNsaWRlO1xuICAgICAgICB0aGlzLnRvdGFsICAgICAgICA9IHRoaXMuc2V0dGluZ3Muc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5ub3Nob3cgICAgICAgPSB0aGlzLnRvdGFsIDwgMjtcbiAgICAgICAgdGhpcy5wYXVzZWQgICAgICAgPSAhdGhpcy5zZXR0aW5ncy5hdXRvcGxheSB8fCB0aGlzLm5vc2hvdztcbiAgICAgICAgdGhpcy5lbmRlZCAgICAgICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kZWxtdCAgICAgICAgPSAkKGVsbXQpO1xuICAgICAgICB0aGlzLiR0aW1lciAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy4kc2xpZGUgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLnRpbWVvdXQgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMuZmlyc3QgICAgICAgID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb25zID0gW1xuICAgICAgICAgICAgJ2ZhZGUnLCAnZmFkZTInLFxuICAgICAgICAgICAgJ2JsdXInLCAnYmx1cjInLFxuICAgICAgICAgICAgJ2ZsYXNoJywgJ2ZsYXNoMicsXG4gICAgICAgICAgICAnbmVnYXRpdmUnLCAnbmVnYXRpdmUyJyxcbiAgICAgICAgICAgICdidXJuJywgJ2J1cm4yJyxcbiAgICAgICAgICAgICdzbGlkZUxlZnQnLCAnc2xpZGVMZWZ0MicsXG4gICAgICAgICAgICAnc2xpZGVSaWdodCcsICdzbGlkZVJpZ2h0MicsXG4gICAgICAgICAgICAnc2xpZGVVcCcsICdzbGlkZVVwMicsXG4gICAgICAgICAgICAnc2xpZGVEb3duJywgJ3NsaWRlRG93bjInLFxuICAgICAgICAgICAgJ3pvb21JbicsICd6b29tSW4yJyxcbiAgICAgICAgICAgICd6b29tT3V0JywgJ3pvb21PdXQyJyxcbiAgICAgICAgICAgICdzd2lybExlZnQnLCAnc3dpcmxMZWZ0MicsXG4gICAgICAgICAgICAnc3dpcmxSaWdodCcsICdzd2lybFJpZ2h0MidcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXG4gICAgICAgICAgICAna2VuYnVybnMnLFxuICAgICAgICAgICAgJ2tlbmJ1cm5zTGVmdCcsICdrZW5idXJuc1JpZ2h0JyxcbiAgICAgICAgICAgICdrZW5idXJuc1VwJywgJ2tlbmJ1cm5zVXBMZWZ0JywgJ2tlbmJ1cm5zVXBSaWdodCcsXG4gICAgICAgICAgICAna2VuYnVybnNEb3duJywgJ2tlbmJ1cm5zRG93bkxlZnQnLCAna2VuYnVybnNEb3duUmlnaHQnXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudHJhbnNpdGlvblJlZ2lzdGVyIGluc3RhbmNlb2YgQXJyYXkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnRyYW5zaXRpb25SZWdpc3RlciA9IFsgdGhpcy5zZXR0aW5ncy50cmFuc2l0aW9uUmVnaXN0ZXIgXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmFuaW1hdGlvblJlZ2lzdGVyIGluc3RhbmNlb2YgQXJyYXkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmFuaW1hdGlvblJlZ2lzdGVyID0gWyB0aGlzLnNldHRpbmdzLmFuaW1hdGlvblJlZ2lzdGVyIF07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyYW5zaXRpb25zID0gdGhpcy50cmFuc2l0aW9ucy5jb25jYXQodGhpcy5zZXR0aW5ncy50cmFuc2l0aW9uUmVnaXN0ZXIpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgID0gdGhpcy5hbmltYXRpb25zLmNvbmNhdCh0aGlzLnNldHRpbmdzLmFuaW1hdGlvblJlZ2lzdGVyKTtcblxuICAgICAgICB0aGlzLnN1cHBvcnQgPSB7XG4gICAgICAgICAgICBvYmplY3RGaXQ6ICAnb2JqZWN0Rml0JyAgaW4gZG9jdW1lbnQuYm9keS5zdHlsZSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uJyBpbiBkb2N1bWVudC5ib2R5LnN0eWxlIHx8ICdXZWJraXRUcmFuc2l0aW9uJyBpbiBkb2N1bWVudC5ib2R5LnN0eWxlLFxuICAgICAgICAgICAgdmlkZW86ICAgICAgJC52ZWdhcy5pc1ZpZGVvQ29tcGF0aWJsZSgpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3Muc2h1ZmZsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zaHVmZmxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pbml0KCk7XG4gICAgfTtcblxuICAgIFZlZ2FzLnByb3RvdHlwZSA9IHtcbiAgICAgICAgX2luaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkd3JhcHBlcixcbiAgICAgICAgICAgICAgICAkb3ZlcmxheSxcbiAgICAgICAgICAgICAgICAkdGltZXIsXG4gICAgICAgICAgICAgICAgaXNCb2R5ICA9IHRoaXMuZWxtdC50YWdOYW1lID09PSAnQk9EWScsXG4gICAgICAgICAgICAgICAgdGltZXIgICA9IHRoaXMuc2V0dGluZ3MudGltZXIsXG4gICAgICAgICAgICAgICAgb3ZlcmxheSA9IHRoaXMuc2V0dGluZ3Mub3ZlcmxheSxcbiAgICAgICAgICAgICAgICBzZWxmICAgID0gdGhpcztcblxuICAgICAgICAgICAgLy8gUHJlbG9hZGluZ1xuICAgICAgICAgICAgdGhpcy5fcHJlbG9hZCgpO1xuXG4gICAgICAgICAgICAvLyBXcmFwcGVyIHdpdGggY29udGVudFxuICAgICAgICAgICAgaWYgKCFpc0JvZHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbG10LmNzcygnaGVpZ2h0JywgdGhpcy4kZWxtdC5jc3MoJ2hlaWdodCcpKTtcblxuICAgICAgICAgICAgICAgICR3cmFwcGVyID0gJCgnPGRpdiBjbGFzcz1cInZlZ2FzLXdyYXBwZXJcIj4nKVxuICAgICAgICAgICAgICAgICAgICAuY3NzKCdvdmVyZmxvdycsIHRoaXMuJGVsbXQuY3NzKCdvdmVyZmxvdycpKVxuICAgICAgICAgICAgICAgICAgICAuY3NzKCdwYWRkaW5nJywgIHRoaXMuJGVsbXQuY3NzKCdwYWRkaW5nJykpO1xuXG4gICAgICAgICAgICAgICAgLy8gU29tZSBicm93c2VycyBkb24ndCBjb21wdXRlIHBhZGRpbmcgc2hvcnRoYW5kXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLiRlbG10LmNzcygncGFkZGluZycpKSB7XG4gICAgICAgICAgICAgICAgICAgICR3cmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKCdwYWRkaW5nLXRvcCcsICAgIHRoaXMuJGVsbXQuY3NzKCdwYWRkaW5nLXRvcCcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcygncGFkZGluZy1ib3R0b20nLCB0aGlzLiRlbG10LmNzcygncGFkZGluZy1ib3R0b20nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoJ3BhZGRpbmctbGVmdCcsICAgdGhpcy4kZWxtdC5jc3MoJ3BhZGRpbmctbGVmdCcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcygncGFkZGluZy1yaWdodCcsICB0aGlzLiRlbG10LmNzcygncGFkZGluZy1yaWdodCcpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRlbG10LmNsb25lKHRydWUpLmNoaWxkcmVuKCkuYXBwZW5kVG8oJHdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxtdC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVGltZXJcbiAgICAgICAgICAgIGlmICh0aW1lciAmJiB0aGlzLnN1cHBvcnQudHJhbnNpdGlvbikge1xuICAgICAgICAgICAgICAgICR0aW1lciA9ICQoJzxkaXYgY2xhc3M9XCJ2ZWdhcy10aW1lclwiPjxkaXYgY2xhc3M9XCJ2ZWdhcy10aW1lci1wcm9ncmVzc1wiPicpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHRpbWVyID0gJHRpbWVyO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsbXQucHJlcGVuZCgkdGltZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPdmVybGF5XG4gICAgICAgICAgICBpZiAob3ZlcmxheSkge1xuICAgICAgICAgICAgICAgICRvdmVybGF5ID0gJCgnPGRpdiBjbGFzcz1cInZlZ2FzLW92ZXJsYXlcIj4nKTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3ZlcmxheSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgJG92ZXJsYXkuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybCgnICsgb3ZlcmxheSArICcpJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICRvdmVybGF5O1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsbXQucHJlcGVuZCgkb3ZlcmxheSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENvbnRhaW5lclxuICAgICAgICAgICAgdGhpcy4kZWxtdC5hZGRDbGFzcygndmVnYXMtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIGlmICghaXNCb2R5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxtdC5hcHBlbmQoJHdyYXBwZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRyaWdnZXIoJ2luaXQnKTtcbiAgICAgICAgICAgICAgICBzZWxmLl9nb3RvKHNlbGYuc2xpZGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2V0dGluZ3MuYXV0b3BsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKCdwbGF5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX3ByZWxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbWcsIGk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnNldHRpbmdzLnNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnByZWxvYWQgfHwgdGhpcy5zZXR0aW5ncy5wcmVsb2FkSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnNsaWRlc1tpXS5zcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IHRoaXMuc2V0dGluZ3Muc2xpZGVzW2ldLnNyYztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnByZWxvYWQgfHwgdGhpcy5zZXR0aW5ncy5wcmVsb2FkVmlkZW9zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1cHBvcnQudmlkZW8gJiYgdGhpcy5zZXR0aW5ncy5zbGlkZXNbaV0udmlkZW8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnNsaWRlc1tpXS52aWRlbyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmlkZW8odGhpcy5zZXR0aW5ncy5zbGlkZXNbaV0udmlkZW8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92aWRlbyh0aGlzLnNldHRpbmdzLnNsaWRlc1tpXS52aWRlby5zcmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIF9yYW5kb206IGZ1bmN0aW9uIChhcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCldO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9zbGlkZVNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHRoaXMudG90YWwgPiAxICYmICF0aGlzLmVuZGVkICYmICF0aGlzLnBhdXNlZCAmJiAhdGhpcy5ub3Nob3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5uZXh0KCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5fb3B0aW9ucygnZGVsYXknKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgX3RpbWVyOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy4kdGltZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJHRpbWVyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCd2ZWdhcy10aW1lci1ydW5uaW5nJylcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJywgJzBtcycpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5lbmRlZCB8fCB0aGlzLnBhdXNlZCB8fCB0aGlzLm5vc2hvdykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgc2VsZi4kdGltZXJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCd2ZWdhcy10aW1lci1ydW5uaW5nJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nLCBzZWxmLl9vcHRpb25zKCdkZWxheScpIC0gMTAwICsgJ21zJyk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBfdmlkZW86IGZ1bmN0aW9uIChzcmNzKSB7XG4gICAgICAgICAgICB2YXIgdmlkZW8sXG4gICAgICAgICAgICAgICAgc291cmNlLFxuICAgICAgICAgICAgICAgIGNhY2hlS2V5ID0gc3Jjcy50b1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAodmlkZW9DYWNoZVtjYWNoZUtleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlkZW9DYWNoZVtjYWNoZUtleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzcmNzIGluc3RhbmNlb2YgQXJyYXkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgc3JjcyA9IFsgc3JjcyBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgICAgICB2aWRlby5wcmVsb2FkID0gdHJ1ZTtcblxuICAgICAgICAgICAgc3Jjcy5mb3JFYWNoKGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcbiAgICAgICAgICAgICAgICBzb3VyY2Uuc3JjID0gc3JjO1xuICAgICAgICAgICAgICAgIHZpZGVvLmFwcGVuZENoaWxkKHNvdXJjZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmlkZW9DYWNoZVtjYWNoZUtleV0gPSB2aWRlbztcblxuICAgICAgICAgICAgcmV0dXJuIHZpZGVvO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9mYWRlT3V0U291bmQ6IGZ1bmN0aW9uICh2aWRlbywgZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGRlbGF5ICA9IGR1cmF0aW9uIC8gMTAsXG4gICAgICAgICAgICAgICAgdm9sdW1lID0gdmlkZW8udm9sdW1lIC0gMC4wOTtcblxuICAgICAgICAgICAgaWYgKHZvbHVtZSA+IDApIHtcbiAgICAgICAgICAgICAgICB2aWRlby52b2x1bWUgPSB2b2x1bWU7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fZmFkZU91dFNvdW5kKHZpZGVvLCBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIF9mYWRlSW5Tb3VuZDogZnVuY3Rpb24gKHZpZGVvLCBkdXJhdGlvbikge1xuICAgICAgICAgICAgdmFyIHNlbGYgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgZGVsYXkgID0gZHVyYXRpb24gLyAxMCxcbiAgICAgICAgICAgICAgICB2b2x1bWUgPSB2aWRlby52b2x1bWUgKyAwLjA5O1xuXG4gICAgICAgICAgICBpZiAodm9sdW1lIDwgMSkge1xuICAgICAgICAgICAgICAgIHZpZGVvLnZvbHVtZSA9IHZvbHVtZTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9mYWRlSW5Tb3VuZCh2aWRlbywgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBfb3B0aW9uczogZnVuY3Rpb24gKGtleSwgaSkge1xuICAgICAgICAgICAgaWYgKGkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGkgPSB0aGlzLnNsaWRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5zbGlkZXNbaV1ba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3Muc2xpZGVzW2ldW2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzW2tleV07XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2dvdG86IGZ1bmN0aW9uIChuYikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNldHRpbmdzLnNsaWRlc1tuYl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgbmIgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNsaWRlID0gbmI7XG5cbiAgICAgICAgICAgIHZhciAkc2xpZGUsXG4gICAgICAgICAgICAgICAgJGlubmVyLFxuICAgICAgICAgICAgICAgICR2aWRlbyxcbiAgICAgICAgICAgICAgICAkc2xpZGVzICAgICAgID0gdGhpcy4kZWxtdC5jaGlsZHJlbignLnZlZ2FzLXNsaWRlJyksXG4gICAgICAgICAgICAgICAgc3JjICAgICAgICAgICA9IHRoaXMuc2V0dGluZ3Muc2xpZGVzW25iXS5zcmMsXG4gICAgICAgICAgICAgICAgdmlkZW9TZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3Muc2xpZGVzW25iXS52aWRlbyxcbiAgICAgICAgICAgICAgICBkZWxheSAgICAgICAgID0gdGhpcy5fb3B0aW9ucygnZGVsYXknKSxcbiAgICAgICAgICAgICAgICBhbGlnbiAgICAgICAgID0gdGhpcy5fb3B0aW9ucygnYWxpZ24nKSxcbiAgICAgICAgICAgICAgICB2YWxpZ24gICAgICAgID0gdGhpcy5fb3B0aW9ucygndmFsaWduJyksXG4gICAgICAgICAgICAgICAgY292ZXIgICAgICAgICA9IHRoaXMuX29wdGlvbnMoJ2NvdmVyJyksXG4gICAgICAgICAgICAgICAgY29sb3IgICAgICAgICA9IHRoaXMuX29wdGlvbnMoJ2NvbG9yJykgfHwgdGhpcy4kZWxtdC5jc3MoJ2JhY2tncm91bmQtY29sb3InKSxcbiAgICAgICAgICAgICAgICBzZWxmICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB0b3RhbCAgICAgICAgID0gJHNsaWRlcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgdmlkZW8sXG4gICAgICAgICAgICAgICAgaW1nO1xuXG4gICAgICAgICAgICB2YXIgdHJhbnNpdGlvbiAgICAgICAgID0gdGhpcy5fb3B0aW9ucygndHJhbnNpdGlvbicpLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRoaXMuX29wdGlvbnMoJ3RyYW5zaXRpb25EdXJhdGlvbicpLFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbiAgICAgICAgICA9IHRoaXMuX29wdGlvbnMoJ2FuaW1hdGlvbicpLFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uICA9IHRoaXMuX29wdGlvbnMoJ2FuaW1hdGlvbkR1cmF0aW9uJyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmZpcnN0VHJhbnNpdGlvbiAmJiB0aGlzLmZpcnN0KSB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHRoaXMuc2V0dGluZ3MuZmlyc3RUcmFuc2l0aW9uIHx8IHRyYW5zaXRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmZpcnN0VHJhbnNpdGlvbkR1cmF0aW9uICYmIHRoaXMuZmlyc3QpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0aGlzLnNldHRpbmdzLmZpcnN0VHJhbnNpdGlvbkR1cmF0aW9uIHx8IHRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb3ZlciAhPT0gJ3JlcGVhdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoY292ZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY292ZXIgPSAnY292ZXInO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY292ZXIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdmVyID0gJ2NvbnRhaW4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRyYW5zaXRpb24gPT09ICdyYW5kb20nIHx8IHRyYW5zaXRpb24gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGlmICh0cmFuc2l0aW9uIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHRoaXMuX3JhbmRvbSh0cmFuc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uID0gdGhpcy5fcmFuZG9tKHRoaXMudHJhbnNpdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbiA9PT0gJ3JhbmRvbScgfHwgYW5pbWF0aW9uIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uID0gdGhpcy5fcmFuZG9tKGFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uID0gdGhpcy5fcmFuZG9tKHRoaXMuYW5pbWF0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHJhbnNpdGlvbkR1cmF0aW9uID09PSAnYXV0bycgfHwgdHJhbnNpdGlvbkR1cmF0aW9uID4gZGVsYXkpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSBkZWxheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkR1cmF0aW9uID09PSAnYXV0bycpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbiA9IGRlbGF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2xpZGUgPSAkKCc8ZGl2IGNsYXNzPVwidmVnYXMtc2xpZGVcIj48L2Rpdj4nKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3VwcG9ydC50cmFuc2l0aW9uICYmIHRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAkc2xpZGUuYWRkQ2xhc3MoJ3ZlZ2FzLXRyYW5zaXRpb24tJyArIHRyYW5zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBWaWRlb1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdXBwb3J0LnZpZGVvICYmIHZpZGVvU2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAodmlkZW9TZXR0aW5ncyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvID0gdGhpcy5fdmlkZW8odmlkZW9TZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8gPSB0aGlzLl92aWRlbyh2aWRlb1NldHRpbmdzLnNyYyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmlkZW8ubG9vcCAgPSB2aWRlb1NldHRpbmdzLmxvb3AgIT09IHVuZGVmaW5lZCA/IHZpZGVvU2V0dGluZ3MubG9vcCA6IHRydWU7XG4gICAgICAgICAgICAgICAgdmlkZW8ubXV0ZWQgPSB2aWRlb1NldHRpbmdzLm11dGUgIT09IHVuZGVmaW5lZCA/IHZpZGVvU2V0dGluZ3MubXV0ZSA6IHRydWU7XG5cbiAgICAgICAgICAgICAgICBpZiAodmlkZW8ubXV0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnZvbHVtZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZhZGVJblNvdW5kKHZpZGVvLCB0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHZpZGVvID0gJCh2aWRlbylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCd2ZWdhcy12aWRlbycpXG4gICAgICAgICAgICAgICAgICAgIC5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBjb2xvcik7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdXBwb3J0Lm9iamVjdEZpdCkge1xuICAgICAgICAgICAgICAgICAgICAkdmlkZW9cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoJ29iamVjdC1wb3NpdGlvbicsIGFsaWduICsgJyAnICsgdmFsaWduKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcygnb2JqZWN0LWZpdCcsIGNvdmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcygnd2lkdGgnLCAgJzEwMCUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcygnaGVpZ2h0JywgJzEwMCUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvdmVyID09PSAnY29udGFpbicpIHtcbiAgICAgICAgICAgICAgICAgICAgJHZpZGVvXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKCd3aWR0aCcsICAnMTAwJScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKCdoZWlnaHQnLCAnMTAwJScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRzbGlkZS5hcHBlbmQoJHZpZGVvKTtcblxuICAgICAgICAgICAgLy8gSW1hZ2VcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICAgICAgICAgICRpbm5lciA9ICQoJzxkaXYgY2xhc3M9XCJ2ZWdhcy1zbGlkZS1pbm5lclwiPjwvZGl2PicpXG4gICAgICAgICAgICAgICAgICAgIC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAgICAndXJsKFwiJyArIHNyYyArICdcIiknKVxuICAgICAgICAgICAgICAgICAgICAuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgICAgY29sb3IpXG4gICAgICAgICAgICAgICAgICAgIC5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24nLCBhbGlnbiArICcgJyArIHZhbGlnbik7XG5cbiAgICAgICAgICAgICAgICBpZiAoY292ZXIgPT09ICdyZXBlYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbm5lci5jc3MoJ2JhY2tncm91bmQtcmVwZWF0JywgJ3JlcGVhdCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRpbm5lci5jc3MoJ2JhY2tncm91bmQtc2l6ZScsIGNvdmVyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdXBwb3J0LnRyYW5zaXRpb24gJiYgYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCd2ZWdhcy1hbmltYXRpb24tJyArIGFuaW1hdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoJ2FuaW1hdGlvbi1kdXJhdGlvbicsICBhbmltYXRpb25EdXJhdGlvbiArICdtcycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRzbGlkZS5hcHBlbmQoJGlubmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLnN1cHBvcnQudHJhbnNpdGlvbikge1xuICAgICAgICAgICAgICAgICRzbGlkZS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG90YWwpIHtcbiAgICAgICAgICAgICAgICAkc2xpZGVzLmVxKHRvdGFsIC0gMSkuYWZ0ZXIoJHNsaWRlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxtdC5wcmVwZW5kKCRzbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzbGlkZXNcbiAgICAgICAgICAgICAgICAuY3NzKCd0cmFuc2l0aW9uJywgJ2FsbCAwbXMnKVxuICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc05hbWUgID0gJ3ZlZ2FzLXNsaWRlJztcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YWdOYW1lID09PSAnVklERU8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTmFtZSArPSAnIHZlZ2FzLXZpZGVvJzsgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc05hbWUgKz0gJyB2ZWdhcy10cmFuc2l0aW9uLScgKyB0cmFuc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc05hbWUgKz0gJyB2ZWdhcy10cmFuc2l0aW9uLScgKyB0cmFuc2l0aW9uICsgJy1pbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBzZWxmLl90aW1lcihmYWxzZSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdvICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl90aW1lcih0cnVlKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuc3VwcG9ydC50cmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3NzKCd0cmFuc2l0aW9uJywgJ2FsbCAnICsgdHJhbnNpdGlvbkR1cmF0aW9uICsgJ21zJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCd2ZWdhcy10cmFuc2l0aW9uLScgKyB0cmFuc2l0aW9uICsgJy1vdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzbGlkZXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2aWRlbyA9ICRzbGlkZXMuZmluZCgndmlkZW8nKS5nZXQoMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZpZGVvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlby52b2x1bWUgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fZmFkZU91dFNvdW5kKHZpZGVvLCB0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2xpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNzcygndHJhbnNpdGlvbicsICdhbGwgJyArIHRyYW5zaXRpb25EdXJhdGlvbiArICdtcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygndmVnYXMtdHJhbnNpdGlvbi0nICsgdHJhbnNpdGlvbiArICctaW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNsaWRlLmZhZGVJbih0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2xpZGVzLmxlbmd0aCAtIDQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICRzbGlkZXMuZXEoaSkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3dhbGsnKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fc2xpZGVTaG93KCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2aWRlbykge1xuICAgICAgICAgICAgICAgIGlmICh2aWRlby5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHNyYztcblxuICAgICAgICAgICAgICAgIGlmIChpbWcuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gZ287XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIF9lbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fdGltZXIoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdlbmQnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzaHVmZmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGVtcCxcbiAgICAgICAgICAgICAgICByYW5kO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50b3RhbCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICAgICAgdGVtcCA9IHRoaXMuc2V0dGluZ3Muc2xpZGVzW2ldO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5zbGlkZXNbaV0gPSB0aGlzLnNldHRpbmdzLnNsaWRlc1tyYW5kXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnNsaWRlc1tyYW5kXSA9IHRlbXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGxheTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3BsYXknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwYXVzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fdGltZXIoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdwYXVzZScpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvZ2dsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwbGF5aW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMucGF1c2VkICYmICF0aGlzLm5vc2hvdztcbiAgICAgICAgfSxcblxuICAgICAgICBjdXJyZW50OiBmdW5jdGlvbiAoYWR2YW5jZWQpIHtcbiAgICAgICAgICAgIGlmIChhZHZhbmNlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlOiB0aGlzLnNsaWRlLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiAgdGhpcy5zZXR0aW5ncy5zbGlkZXNbdGhpcy5zbGlkZV1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2xpZGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAganVtcDogZnVuY3Rpb24gKG5iKSB7XG4gICAgICAgICAgICBpZiAobmIgPCAwIHx8IG5iID4gdGhpcy50b3RhbCAtIDEgfHwgbmIgPT09IHRoaXMuc2xpZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2xpZGUgPSBuYjtcbiAgICAgICAgICAgIHRoaXMuX2dvdG8odGhpcy5zbGlkZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zbGlkZSsrO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZSA+PSB0aGlzLnRvdGFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2VuZCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGUgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9nb3RvKHRoaXMuc2xpZGUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHByZXZpb3VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlLS07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlIDwgMCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5sb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGUrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGUgPSB0aGlzLnRvdGFsIC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2dvdG8odGhpcy5zbGlkZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gW107XG5cbiAgICAgICAgICAgIGlmIChmbiA9PT0gJ2luaXQnKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zID0gWyB0aGlzLnNldHRpbmdzIF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5zbGlkZXNbdGhpcy5zbGlkZV1cbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRlbG10LnRyaWdnZXIoJ3ZlZ2FzJyArIGZuLCBwYXJhbXMpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2V0dGluZ3NbZm5dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1tmbl0uYXBwbHkodGhpcy4kZWxtdCwgcGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBvcHRpb25zOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIG9sZFNsaWRlcyA9IHRoaXMuc2V0dGluZ3Muc2xpZGVzLnNsaWNlKCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsICQudmVnYXMuZGVmYXVsdHMsIGtleSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3Nba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJbiBjYXNlIHNsaWRlcyBoYXZlIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnNsaWRlcyAhPT0gb2xkU2xpZGVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbCAgPSB0aGlzLnNldHRpbmdzLnNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3Nob3cgPSB0aGlzLnRvdGFsIDwgMjtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVsb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cbiAgICAgICAgICAgIHRoaXMuJGVsbXQucmVtb3ZlQ2xhc3MoJ3ZlZ2FzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgdGhpcy4kZWxtdC5maW5kKCc+IC52ZWdhcy1zbGlkZScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy4kZWxtdC5maW5kKCc+IC52ZWdhcy13cmFwcGVyJykuY2xvbmUodHJ1ZSkuY2hpbGRyZW4oKS5hcHBlbmRUbyh0aGlzLiRlbG10KTtcbiAgICAgICAgICAgIHRoaXMuJGVsbXQuZmluZCgnPiAudmVnYXMtd3JhcHBlcicpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy50aW1lcikge1xuICAgICAgICAgICAgICAgIHRoaXMuJHRpbWVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5vdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5lbG10Ll92ZWdhcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJC5mbi52ZWdhcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgICAgICBlcnJvciA9IGZhbHNlLFxuICAgICAgICAgICAgcmV0dXJucztcblxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl92ZWdhcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92ZWdhcyA9IG5ldyBWZWdhcyh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5fdmVnYXM7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gVmVnYXMgYXBwbGllZCB0byB0aGlzIGVsZW1lbnQuJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZVtvcHRpb25zXSA9PT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zWzBdICE9PSAnXycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJucyA9IGluc3RhbmNlW29wdGlvbnNdLmFwcGx5KGluc3RhbmNlLCBbXS5zbGljZS5jYWxsKGFyZ3MsIDEpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gbWV0aG9kIFwiJyArIG9wdGlvbnMgKyAnXCIgaW4gVmVnYXMuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXR1cm5zICE9PSB1bmRlZmluZWQgPyByZXR1cm5zIDogdGhpcztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkLnZlZ2FzID0ge307XG4gICAgJC52ZWdhcy5kZWZhdWx0cyA9IGRlZmF1bHRzO1xuXG4gICAgJC52ZWdhcy5pc1ZpZGVvQ29tcGF0aWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEvKEFuZHJvaWR8d2ViT1N8UGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8V2luZG93cyBQaG9uZSkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIH07XG5cbn0pKHdpbmRvdy5qUXVlcnkgfHwgd2luZG93LlplcHRvKTsiLCIoZnVuY3Rpb24oJCl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGhvbWVIZWFkZXJIb3IgPSAkKCcuaG9tZS1uYXYgLmhvbWUtYmxvY2sgaGVhZGVyIGgxJyk7XG5cbmZ1bmN0aW9uIHNldEZvbnRTaXplKCkge1xuXHQkKCcuaGVhZGVyLWhvcicpLmVhY2goZnVuY3Rpb24oaSwgZWwpe1xuXHRcdHZhciAkaGVhZGVyID0gJCh0aGlzKS5maW5kKCdoMScpO1xuXHRcdGlmKCRoZWFkZXIucGFyZW50KCkucGFyZW50KCkuaGFzQ2xhc3MoJ2ZpeGVkLXNpemUnKSkge1xuXHRcdFx0cmV0dXJuIDtcblx0XHR9XG5cdFx0dmFyICRibG9jayA9ICQodGhpcykucGFyZW50cygnLmhvbWUtYmxvY2snKTtcblx0XHR2YXIgZm9udFNpemUgPSBwYXJzZUludCgkaGVhZGVyLmNzcygnZm9udFNpemUnKSk7XG5cdFx0dmFyIG5ld0ZvbnRTaXplID0gJGhlYWRlci53aWR0aCgpIC8gZm9udFNpemU7XG5cdFx0bmV3Rm9udFNpemUgPSAoJGJsb2NrLndpZHRoKCkgLSA2MCkgLyBuZXdGb250U2l6ZTtcblx0XHQkaGVhZGVyLmNzcygnZm9udFNpemUnLCBuZXdGb250U2l6ZSk7XG5cdH0pO1xuXG5cdCQoJy52ZXJfbGVmdCcpLmVhY2goZnVuY3Rpb24oaSwgZWwpe1xuXHRcdHZhciAkaGVhZGVyID0gJCh0aGlzKS5maW5kKCdoMScpO1xuXHRcdHZhciAkYmxvY2sgPSAkKHRoaXMpLnBhcmVudHMoJy5ob21lLWJsb2NrJyk7XG5cdFx0dmFyIGZvbnRTaXplID0gcGFyc2VJbnQoJGhlYWRlci5jc3MoJ2ZvbnRTaXplJykpO1xuXG5cdFx0dmFyIG5ld0ZvbnRTaXplID0gJGhlYWRlci53aWR0aCgpIC8gZm9udFNpemU7XG5cdFx0bmV3Rm9udFNpemUgPSAoJGJsb2NrLmhlaWdodCgpIC0gNjApIC8gbmV3Rm9udFNpemU7XG5cdFx0JGhlYWRlci5wYXJlbnQoKS5jc3MoJ3dpZHRoJywgbmV3Rm9udFNpemUpO1xuXHRcdGlmKCRoZWFkZXIucGFyZW50KCkucGFyZW50KCkuaGFzQ2xhc3MoJ2ZpeGVkLXNpemUnKSkge1xuXHRcdFx0cmV0dXJuIDtcblx0XHR9XG5cdFx0JGhlYWRlci5jc3MoJ2ZvbnRTaXplJywgbmV3Rm9udFNpemUpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gbW92ZURvd25Db250ZW50KCkge1xuXHQkKCcuaG9yX2JvdHRvbScpLmVhY2goZnVuY3Rpb24oKXtcblx0XHR2YXIgJGhlYWRlckJvdHRvbSA9ICQodGhpcyksXG5cdFx0XHRoZWFkZXJIZWlnaHQgPSAkaGVhZGVyQm90dG9tLmhlaWdodCgpLFxuXHRcdFx0Y29udGFpbmVySGVpZ2h0ID0gJGhlYWRlckJvdHRvbS5wYXJlbnQoKS5oZWlnaHQoKSxcblx0XHRcdHBvc1RvcCA9IGNvbnRhaW5lckhlaWdodCAtIGhlYWRlckhlaWdodDtcblxuXHRcdFx0JGhlYWRlckJvdHRvbS5jc3MoJ3RvcCcsIHBvc1RvcCk7XG5cdH0pO1xuXHQkKCcuaG9yX21pZGRsZScpLmVhY2goZnVuY3Rpb24oKXtcblx0XHR2YXIgJGhlYWRlck1pZGRsZSA9ICQodGhpcyksXG5cdFx0XHRoZWFkZXJIZWlnaHQgPSAkaGVhZGVyTWlkZGxlLmhlaWdodCgpLzI7XG5cdFx0XHQkaGVhZGVyTWlkZGxlLmNzcygndG9wJywgJzUwJScpO1xuXHRcdFx0aWYoISRoZWFkZXJNaWRkbGUuaGFzQ2xhc3MoJ2hlYWRlci12ZXInKSAmJiAkaGVhZGVyTWlkZGxlLmZpbmQoJy5sb2dvJykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdCRoZWFkZXJNaWRkbGUuY3NzKCdtYXJnaW4tdG9wJywgLWhlYWRlckhlaWdodCk7XG5cdFx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBpbml0SG9tZVNsaWRlcigpIHtcblx0dmFyIHRyYW5zaXRpb24gPSAkKCcuaG9tZS1iZy1zbGlkZXInKS5kYXRhKCd0cmFuc2l0aW9uJyk7XG5cdHZhciBkZWxheSA9ICQoJy5ob21lLWJnLXNsaWRlcicpLmRhdGEoJ2RlbGF5Jyk7XG5cdHZhciBhdXRvID0gJCgnLmhvbWUtYmctc2xpZGVyJykuZGF0YSgnYXV0bycpO1xuXHR2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gJCgnLmhvbWUtYmctc2xpZGVyJykuZGF0YSgndHJhbnNpdGlvbkR1cmF0aW9uJyk7XG5cblx0dmFyIHNsaWRlcyA9IFtdO1xuXHQkKCcuc2luZ2xlLXNsaWRlJykuZWFjaChmdW5jdGlvbigpe1xuXHRcdHZhciBzbGlkZSA9ICQodGhpcykuZGF0YSgnc2xpZGUnKTtcblx0XHRzbGlkZXMucHVzaCh7J3NyYycgOiBzbGlkZX0pO1xuXHR9KTtcblxuXHQkKCcuaG9tZS1zbGlkZXItY29udGFpbmVyJyApLnZlZ2FzKHtcblx0XHRkZWxheTogZGVsYXksXG5cdFx0Zmlyc3RUcmFuc2l0aW9uOiAnbm9uZScsXG5cdFx0dHJhbnNpdGlvbjogdHJhbnNpdGlvbixcblx0XHR0cmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25EdXJhdGlvbixcblx0XHRhdXRvcGxheTogYXV0byxcblx0XHR0aW1lcjogZmFsc2UsXG5cdFx0c2xpZGVzOiBzbGlkZXMsXG5cdFx0d2FsazogZnVuY3Rpb24gKGluZGV4LCBzbGlkZVNldHRpbmdzKSB7XG5cdFx0XHRpZigkKCcuaG9tZS1iZy1zbGlkZXInKS5oYXNDbGFzcygnYXV0b3BsYXknKSkge1xuXHRcdFx0XHQkKCcuaG9tZS1iZy1zbGlkZXIgLmRvdCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0JCgnLmhvbWUtYmctc2xpZGVyIC5kb3Q6ZXEoJytpbmRleCsnKScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXHRcdFx0fVxuXHQgICAgfVxuXHR9KTtcblxuXHQkKCcuaG9tZS1iZy1zbGlkZXInKS5vbignY2xpY2snLCAnLmRvdCcsIGZ1bmN0aW9uKCl7XG5cdFx0JCgnLmhvbWUtYmctc2xpZGVyIC5kb3QuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdCQoJy5ob21lLXNsaWRlci1jb250YWluZXInKS52ZWdhcygnanVtcCcsICQodGhpcykuaW5kZXgoKSk7XG5cdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBpbml0SG9tZVZpZGVvKCkge1xuXHQkKCAnLnN3aXBlYm94LXZpZGVvJyApLnN3aXBlYm94KCk7XG5cdCQoXCIucGxheWVyXCIpLmVhY2goZnVuY3Rpb24oaSwgZWwpIHtcblx0XHR2YXIgcGxheWVyID0ge307XG5cdFx0JChlbCkubWJfWVRQbGF5ZXIoKTtcblx0XHRwbGF5ZXIuZWwgPSAkKGVsKTtcblx0XHRwbGF5ZXIuY29udGFpbmVyID0gJChlbCkucGFyZW50cygnLmhvbWVwYWdlJyk7XG5cblx0XHQkKGVsKS5vbignWVRQUmVhZHknLCBmdW5jdGlvbigpe1xuXHRcdFx0aWYoJCgnLmhvbWUtdmlkZW8tY29udHJvbHMnKS5oYXNDbGFzcygnc2hvdy1wYXVzZScpKSB7XG5cdFx0XHRcdHBsYXllci5jb250YWluZXIuZmluZChcIi5ob21lLXZpZGVvLWNvbnRyb2xzIC5wYXVzZVwiKS52ZWxvY2l0eSgnZmFkZUluJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwbGF5ZXIuY29udGFpbmVyLmZpbmQoXCIuaG9tZS12aWRlby1jb250cm9scyAucGxheVwiKS52ZWxvY2l0eSgnZmFkZUluJyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9KTtcblx0XHRpZiAoIXdpbmRvdy5tb2JpbGUgJiYgIXdpbmRvdy5pcGFkKSB7XG5cdFx0XHRwbGF5ZXIuY29udGFpbmVyLmZpbmQoXCIuaG9tZS12aWRlby1jb250cm9scyAucGF1c2VcIikuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHBsYXllci5lbC5wYXVzZVlUUCgpO1xuXHRcdFx0XHRwbGF5ZXIuY29udGFpbmVyLmZpbmQoXCIuaG9tZS12aWRlby1jb250cm9scyAucGF1c2VcIikudmVsb2NpdHkoJ2ZhZGVPdXQnKTtcblx0XHRcdFx0cGxheWVyLmNvbnRhaW5lci5maW5kKFwiLmhvbWUtdmlkZW8tY29udHJvbHMgLnBsYXlcIikudmVsb2NpdHkoJ2ZhZGVJbicpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHBsYXllci5jb250YWluZXIuZmluZChcIi5ob21lLXZpZGVvLWNvbnRyb2xzIC5wbGF5XCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRwbGF5ZXIuZWwucGxheVlUUCgpO1xuXHRcdFx0XHRwbGF5ZXIuY29udGFpbmVyLmZpbmQoXCIuaG9tZS12aWRlby1jb250cm9scyAucGxheVwiKS52ZWxvY2l0eSgnZmFkZU91dCcpO1xuXHRcdFx0XHRwbGF5ZXIuY29udGFpbmVyLmZpbmQoXCIuaG9tZS12aWRlby1jb250cm9scyAucGF1c2VcIikudmVsb2NpdHkoJ2ZhZGVJbicpO1xuXHRcdFx0fSk7XG5cdFx0XHQkKCcuaG9tZS1tb2JpbGUtdmlkZW8tY29udHJvbCcpLmFkZENsYXNzKCdoaWRlLWZvci14bGFyZ2UnKTtcblx0XHRcdCQoJy5wbGF5ZXInKS5wYXJlbnQoKS5hZGRDbGFzcygnc2hvdy1mb3IteGxhcmdlJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBsYXllci5jb250YWluZXIuZmluZCgnLmhvbWUtbW9iaWxlLXZpZGVvLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygnaGlkZS1mb3IteGxhcmdlJyk7XG5cdFx0XHQkKCcucGxheWVyJykucGFyZW50KCkuaGlkZSgpO1xuXG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gc2V0QmdNb2JpbGVIb21lKCkge1xuXHQkKCcuaG9tZXBhZ2UgLmhvbWUtbW9iaWxlLWJnIC5ob21lLWJnLWltZycpLmhlaWdodCgnJyk7XG5cdC8vIGlmKCQod2luZG93KS53aWR0aCgpID49IDY0MCAmJiAkKHdpbmRvdykud2lkdGgoKSA8IDEyMDApIHtcblx0Ly8gXHR2YXIgZWxIZWlnaHQgPSAwO1xuXHQvLyBcdCQoJy5ob21lLWJsb2NrJykuaGVpZ2h0KCdhdXRvJyk7XG5cdC8vIFx0JCgnLmhvbWUtYmxvY2snKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdC8vIFx0XHR2YXIgJHRoYXQgPSAkKHRoaXMpO1xuXHQvLyBcdFx0aWYoJHRoYXQuaGVpZ2h0KCkgPiBlbEhlaWdodCkge1xuXHQvLyBcdFx0XHRlbEhlaWdodCA9ICR0aGF0LmhlaWdodCgpO1xuXHQvLyBcdFx0fVxuXHQvLyBcdH0pO1xuXHQvLyBcdCQoJy5ob21lLWJsb2NrJykuaGVpZ2h0KGVsSGVpZ2h0KTtcblx0Ly8gXHQkKCcuaG9tZXBhZ2UnKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdC8vIFx0XHR2YXIgcGFnZUhlaWdodCA9ICQodGhpcykuaGVpZ2h0KCk7XG5cdC8vIFx0XHQkKHRoaXMpLmZpbmQoJy5ob21lLW1vYmlsZS1iZyAuaG9tZS1iZy1pbWcnKS5oZWlnaHQocGFnZUhlaWdodCk7XG5cdC8vIFx0fSk7XG5cdC8vIH0gXG5cdC8vIGlmKCQod2luZG93KS53aWR0aCgpIDwgNjQwKSB7XG5cdC8vIFx0JCgnLmhvbWUtYmxvY2snKS5oZWlnaHQoJ2F1dG8nKTtcblx0Ly8gXHQkKCcuaG9tZXBhZ2UnKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdC8vIFx0XHR2YXIgcGFnZUhlaWdodCA9ICQodGhpcykuaGVpZ2h0KCk7XG5cdC8vIFx0XHQkKHRoaXMpLmZpbmQoJy5ob21lLW1vYmlsZS1iZyAuaG9tZS1iZy1pbWcnKS5oZWlnaHQocGFnZUhlaWdodCk7XG5cdC8vIFx0fSk7XG5cdC8vIH1cblx0aWYoJCh3aW5kb3cpLndpZHRoKCkgPj0gMTIwMCkge1xuXHRcdCQoJy5ob21lLWJsb2NrJykuaGVpZ2h0KCcnKTtcblx0fVxufVxuXG5mdW5jdGlvbiBzaG93TGlnaHRib3hHYWxsZXJ5UG9zdCgpIHtcblx0JCgnLmdhbGxlcnkgLmdhbGxlcnktaXRlbSBhJykuZWFjaChmdW5jdGlvbihpLCBlbCl7XG5cdFx0dmFyICR0aGF0ID0gJCh0aGlzKTtcblx0XHR2YXIgaHJlZlZhbHVlID0gZWwuaHJlZjtcblx0XHRpZiAoL1xcLihqcGd8cG5nfGdpZnxqcGVnKSQvLnRlc3QoaHJlZlZhbHVlKSkge1xuXHRcdFx0JHRoYXQuYWRkQ2xhc3MoJ3N3aXBlYm94Jyk7XG5cdFx0fSBcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGZpeEhvbWVGb290ZXIoKSB7XG5cdCQoJy5ob21lcGFnZScpLmVhY2goZnVuY3Rpb24oKXtcblx0XHR2YXIgJHRoYXQgPSAkKHRoaXMpO1xuXHRcdGlmKCR0aGF0Lm91dGVySGVpZ2h0KCkgPCAkKHdpbmRvdykub3V0ZXJIZWlnaHQoKSkge1xuXHRcdFx0JCgnLmhvbWUtZm9vdGVyJykuYWRkQ2xhc3MoJ2hvbWUtZm9vdGVyLWZpeGVkJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnLmhvbWUtZm9vdGVyJykucmVtb3ZlQ2xhc3MoJ2hvbWUtZm9vdGVyLWZpeGVkJyk7XG5cdFx0fVxuXHR9KTtcblx0aWYoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA8IDEyMDApIHtcblx0XHQkKCcuaG9tZS1mb290ZXInKS5hZGRDbGFzcygnbW9iaWxlLWhvbWUtZm9vdGVyJyk7XG5cdH0gZWxzZSB7XG5cdFx0JCgnLmhvbWUtZm9vdGVyJykucmVtb3ZlQ2xhc3MoJ21vYmlsZS1ob21lLWZvb3RlcicpO1xuXHR9XG59XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHQkKCcubW9yZS1saW5rJykucGFyZW50KCkuYWRkQ2xhc3MoJ2NsZWFyZml4Jyk7XG59KVxuXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpe1xuXHRpbml0SG9tZVNsaWRlcigpO1xuXHRpbml0SG9tZVZpZGVvKCk7XG5cdHNldEJnTW9iaWxlSG9tZSgpO1xuXHRtb3ZlRG93bkNvbnRlbnQoKTtcblx0Zml4SG9tZUZvb3RlcigpO1xuXHRzaG93TGlnaHRib3hHYWxsZXJ5UG9zdCgpO1xuXHQkKCcuZ2FsbGVyeSAuc3dpcGVib3gnKS5zd2lwZWJveCh7fSk7XG5cdCQoJyNsb2FkaW5nLW1hc2snKS52ZWxvY2l0eSh7b3BhY2l0eTogMH0sIHtkaXNwbGF5OiAnbm9uZScsIGR1cmF0aW9uOiA0MDAsIGNvbXBsZXRlOiBmdW5jdGlvbigpe1xuXHRcdCQod2luZG93KS50cmlnZ2VyKCdyZWFkeS10by1zaG93Jyk7XG5cdH19KTtcblx0JCgnLnBhZ2UtbnVtYmVycy5jdXJyZW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9KTtcblx0JCgnLmhvbWUtc2VwYXJhdG9yLWJvdHRvbScpLnByZXBlbmRUbygnLmhvbWUtbmF2LmhvbWUtY29udGVudCcpO1xuXG59KTtcblxuXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpe1xuXHRpZih3aW5kb3cuZm9udExvYWRlZCA9PT0gZmFsc2UpIHtcblx0XHQkKHdpbmRvdykub24oJ2ZvbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xuXHRcdFx0aWYoJCh3aW5kb3cpLndpZHRoKCkgPj0gMTIwMCkge1xuXHRcdFx0XHRzZXRGb250U2l6ZSgpO1xuXHRcdFx0XHRtb3ZlRG93bkNvbnRlbnQoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRpZigkKHdpbmRvdykud2lkdGgoKSA+PSAxMjAwKSB7XG5cdFx0XHRzZXRGb250U2l6ZSgpO1xuXHRcdFx0bW92ZURvd25Db250ZW50KCk7XG5cdFx0fVxuXHR9XG59KTtcblxuJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpe1xuXHRpZigkKHdpbmRvdykud2lkdGgoKSA+PSAxMjAwKSB7XG5cdFx0c2V0Rm9udFNpemUoKTtcblx0fVxuXHRtb3ZlRG93bkNvbnRlbnQoKTtcblx0c2V0QmdNb2JpbGVIb21lKCk7XG5cdGZpeEhvbWVGb290ZXIoKTtcbn0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uKCQpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cblx0aWYoJCgnLmdhbGxlcnktY29udGFpbmVyJykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdGluaXRHYWxsZXJ5KCk7XG5cdCQoJy5nYWxsZXJ5LWNvbnRhaW5lciAuZ2FsbGVyeS1pdGVtJykuYWRkQ2xhc3MoJ2l0ZW0tdmlzaWJsZScpO1xuXG5cdGZ1bmN0aW9uIGluaXRHYWxsZXJ5KCkge1xuXHRcdHZhciAkZ3JpZCA9ICQoJy5nYWxsZXJ5LWNvbnRhaW5lcicpO1xuXHRcdCRncmlkLmlzb3RvcGUoe1xuXHRcdFx0aXRlbVNlbGVjdG9yOiAnLmdhbGxlcnktaXRlbScsXG5cdFx0XHRjb2x1bW5XaWR0aDogJy5nYWxsZXJ5LWdyaWQtc2l6ZXInLFxuXHRcdFx0cGVyY2VudFBvc2l0aW9uOiB0cnVlLFxuXHRcdFx0aGlkZGVuU3R5bGU6IHtcblx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdH0sXG5cdFx0XHR2aXNpYmxlU3R5bGU6IHtcblx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCRncmlkLmltYWdlc0xvYWRlZCgpLmRvbmUoIGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnLmdhbGxlcnktY29udGFpbmVyIC5nYWxsZXJ5LWl0ZW0nKS5hZGRDbGFzcygnaXRlbS12aXNpYmxlJyk7XG5cdFx0XHQkZ3JpZC5pc290b3BlKCdsYXlvdXQnKTtcblx0XHR9KTtcblx0fVxuXHR2YXIgY2FuQ2xpY2sgPSB0cnVlO1xuXHQkKCcuZ2FsbGVyeS1jb250ZW50Jykub24oJ2NsaWNrJywgJy5nYWxsZXJ5LWxvYWQtbW9yZScsIGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZihjYW5DbGljayA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y2FuQ2xpY2sgPSBmYWxzZTtcblx0XHR2YXIgcmVhZHkgPSBmYWxzZTtcblx0XHRcblx0XHR2YXIgJHRoYXQgPSAkKHRoaXMpO1xuXHRcdHZhciAkcGFyZW50ID0gJHRoYXQucGFyZW50KCk7XG5cdFx0JHBhcmVudC52ZWxvY2l0eSh7b3BhY2l0eTogMH0sIDQwMCwgZnVuY3Rpb24oKXtcblx0XHRcdHJlYWR5ID0gdHJ1ZTtcblx0XHRcdCQoJy5wYWdlLXdyYXBwZXInKS50cmlnZ2VyKCdnYWxsZXJ5TG9hZE1vcmUnKTtcblx0XHR9KTtcblx0XHQkLmdldCh0aGlzLmhyZWYsIGZ1bmN0aW9uKHJlc3BvbnNlKXtcblx0XHRcdGlmKHJlYWR5ID09PSB0cnVlKSB7XG5cdFx0XHRcdCR0aGF0LnJlbW92ZSgpO1xuXHRcdFx0XHRpbnNlcnRDb250ZW50KHJlc3BvbnNlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoJy5wYWdlLXdyYXBwZXInKS5vbignZ2FsbGVyeUxvYWRNb3JlJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHQkdGhhdC5yZW1vdmUoKTtcblx0XHRcdFx0XHRpbnNlcnRDb250ZW50KHJlc3BvbnNlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIGluc2VydENvbnRlbnQocmVzcG9uc2UpIHtcblx0XHR2YXIgJGdyaWQgPSAkKCcuZ2FsbGVyeS1jb250YWluZXInKTtcblx0XHR2YXIgbG9hZE1vcmUgPSAkKHJlc3BvbnNlKS5maW5kKCcuZ2FsbGVyeS1sb2FkLW1vcmUtd3JhcHBlcicpLmh0bWwoKTtcblx0XHRyZXNwb25zZSA9ICQocmVzcG9uc2UpLmZpbmQoJy5nYWxsZXJ5LWNvbnRhaW5lcicpLmh0bWwoKTtcblx0XHR2YXIgJHJlc3BvbnNlID0gJChyZXNwb25zZSk7XG5cdFx0JGdyaWQuYXBwZW5kKCRyZXNwb25zZSk7XG5cdFx0JCgnLnBhZ2Utd3JhcHBlcicpLm9mZignZ2FsbGVyeUxvYWRNb3JlJyk7XG5cblx0XHQkZ3JpZC5pbWFnZXNMb2FkZWQoKS5kb25lKCBmdW5jdGlvbigpIHtcblx0XHRcdCRncmlkLmlzb3RvcGUoJ2FwcGVuZGVkJywgJHJlc3BvbnNlKTtcblx0XHRcdCQoJy5nYWxsZXJ5LWNvbnRhaW5lciAuZ2FsbGVyeS1pdGVtJykubm90KCcuZ2FsbGVyeS1pdGVtLXZpc2libGUnKS5hZGRDbGFzcygnaXRlbS12aXNpYmxlJyk7XG5cdFx0XHRpZih0eXBlb2YgbG9hZE1vcmUgPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0JCgnLmdhbGxlcnktbG9hZC1tb3JlLXdyYXBwZXInKS5yZW1vdmUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoJy5nYWxsZXJ5LWxvYWQtbW9yZS13cmFwcGVyJykuaHRtbChsb2FkTW9yZSkudmVsb2NpdHkoe29wYWNpdHk6IDF9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHR9XG5cblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0XHRpbml0R2FsbGVyeSgpO1xuXHRcdCQoJy5hcGV0aXRhLWdhbGxlcnkgLnN3aXBlYm94Jykuc3dpcGVib3goe1xuXG5cdFx0fSk7XG5cdH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKXtcblx0J3VzZSBzdHJpY3QnO1xuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIG1lbnVJbWFnZVVwZGF0ZSA9IGZ1bmN0aW9uKCBpdGVtX2lkLCB0aHVtYl9pZCApIHtcblx0XHRcdHdwLm1lZGlhLnBvc3QoICdzZXQtbWVudS1pdGVtLXRodW1ibmFpbCcsIHtcblx0XHRcdFx0anNvbjogICAgICAgICB0cnVlLFxuXHRcdFx0XHRwb3N0X2lkOiAgICAgIGl0ZW1faWQsXG5cdFx0XHRcdHRodW1ibmFpbF9pZDogdGh1bWJfaWQsXG5cdFx0XHRcdF93cG5vbmNlOiAgICAgbWVudUltYWdlLnNldHRpbmdzLm5vbmNlXG5cdFx0XHR9KS5kb25lKCBmdW5jdGlvbiggaHRtbCApIHtcblx0XHRcdFx0JCgnLm1lbnUtaXRlbS1pbWFnZXMnLCAnI21lbnUtaXRlbS0nICsgaXRlbV9pZCkuaHRtbCggaHRtbCApO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdCQoJyNtZW51LXRvLWVkaXQnKVxuXHRcdFx0Lm9uKCdjbGljaycsICcubWVudS1pdGVtIC5zZXQtcG9zdC10aHVtYm5haWwnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdFx0dmFyIGl0ZW1faWQgPSAkKHRoaXMpLnBhcmVudHMoJy5maWVsZC1pbWFnZScpLnNpYmxpbmdzKCdpbnB1dC5tZW51LWl0ZW0tZGF0YS1kYi1pZCcpLnZhbCgpLFxuXHRcdFx0XHRcdHVwbG9hZGVyID0gd3AubWVkaWEoe1xuXHRcdFx0XHRcdFx0dGl0bGU6IG1lbnVJbWFnZS5sMTBuLnVwbG9hZGVyVGl0bGUsIC8vIHRvZG86IHRyYW5zbGF0ZVxuXHRcdFx0XHRcdFx0YnV0dG9uOiB7IHRleHQ6IG1lbnVJbWFnZS5sMTBuLnVwbG9hZGVyQnV0dG9uVGV4dCB9LFxuXHRcdFx0XHRcdFx0bXVsdGlwbGU6IGZhbHNlXG5cdFx0XHRcdFx0fSkub24oJ3NlbGVjdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHZhciBhdHRhY2htZW50ID0gdXBsb2FkZXIuc3RhdGUoKS5nZXQoJ3NlbGVjdGlvbicpLmZpcnN0KCkudG9KU09OKCk7XG5cdFx0XHRcdFx0XHRtZW51SW1hZ2VVcGRhdGUoIGl0ZW1faWQsIGF0dGFjaG1lbnQuaWQpO1xuXHRcdFx0XHRcdH0pLm9wZW4oKTtcblx0XHRcdH0pXG5cdFx0XHQub24oJ2NsaWNrJywgJy5tZW51LWl0ZW0gLnJlbW92ZS1wb3N0LXRodW1ibmFpbCcsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0XHR2YXIgaXRlbV9pZCA9ICQodGhpcykucGFyZW50cygnLmZpZWxkLWltYWdlJykuc2libGluZ3MoJ2lucHV0Lm1lbnUtaXRlbS1kYXRhLWRiLWlkJykudmFsKCk7XG5cdFx0XHRcdG1lbnVJbWFnZVVwZGF0ZSggaXRlbV9pZCwgLTEpO1xuXHRcdFx0fSk7XG5cdH0pO1xufSkoalF1ZXJ5KTtcbiAgIiwiKGZ1bmN0aW9uKCQpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGluaXRNYXNvbnJ5KCkge1xuXHR2YXIgJGdyaWQgPSAkKCcubWVudS1tYXNvbnJ5LWNvbnRhaW5lcicpO1xuXHQkZ3JpZC5vbiggJ2xheW91dENvbXBsZXRlJywgZnVuY3Rpb24oZXZlbnQsIGxhaWRPdXRJdGVtcykge1xuXHRcdCQoJy5tZW51LW1hc29ucnktY29udGFpbmVyIC5jb2x1bW4tbGVmdCcpLnJlbW92ZUNsYXNzKCdjb2x1bW4tbGVmdCcpO1xuXHRcdCQoJy5tZW51LW1hc29ucnktY29udGFpbmVyIC5jb2x1bW4tcmlnaHQnKS5yZW1vdmVDbGFzcygnY29sdW1uLXJpZ2h0Jyk7XG5cdFx0JCgnLm1lbnUtbWFzb25yeS1jb250YWluZXIgLmdyaWQtaXRlbScpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdHZhciAkdGhhdCA9ICQodGhpcyksXG5cdFx0XHRvZmZzZXQgPSAkdGhhdC5vZmZzZXQoKSxcblx0XHRcdGNvbnRhaW5lck9mZnNldCA9ICR0aGF0LnBhcmVudCgpLm9mZnNldCgpO1xuXG5cdFx0XHRpZihvZmZzZXQubGVmdCA+IGNvbnRhaW5lck9mZnNldC5sZWZ0KSB7XG5cdFx0XHRcdCR0aGF0LmFkZENsYXNzKCdjb2x1bW4tcmlnaHQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCR0aGF0LmFkZENsYXNzKCdjb2x1bW4tbGVmdCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdCQoJy5tZW51LW1hc29ucnktY29udGFpbmVyIC5jb2x1bW4tbGVmdCcpLmxhc3QoKS5jc3MoJ2JvcmRlci1ib3R0b20tc3R5bGUnLCAnbm9uZScpLnByZXZBbGwoJy5jb2x1bW4tbGVmdCcpLmNzcygnYm9yZGVyLWJvdHRvbS1zdHlsZScsICdzb2xpZCcpO1xuXHRcdCQoJy5tZW51LW1hc29ucnktY29udGFpbmVyIC5jb2x1bW4tcmlnaHQnKS5sYXN0KCkuY3NzKCdib3JkZXItYm90dG9tLXN0eWxlJywgJ25vbmUnKS5wcmV2QWxsKCcuY29sdW1uLXJpZ2h0JykuY3NzKCdib3JkZXItYm90dG9tLXN0eWxlJywgJ3NvbGlkJyk7XG5cdH0pO1xuXHQkZ3JpZC5pc290b3BlKHtcblx0XHRpdGVtU2VsZWN0b3I6ICcubWVudS1jYXRlZ29yeScsXG5cdFx0Y29sdW1uV2lkdGg6ICcuZ3JpZC1zaXplcicsXG5cdFx0Z3V0dGVyOiAwLFxuXHRcdHBlcmNlbnRQb3NpdGlvbjogdHJ1ZSxcblxuXHR9KTtcblx0dmFyIGZpbHRlckZucyA9IHtcblx0ICAvLyBzaG93IGlmIG51bWJlciBpcyBncmVhdGVyIHRoYW4gNTBcblx0ICBudW1iZXJHcmVhdGVyVGhhbjUwOiBmdW5jdGlvbigpIHtcblx0ICAgIHZhciBudW1iZXIgPSAkKHRoaXMpLmZpbmQoJy5udW1iZXInKS50ZXh0KCk7XG5cdCAgICByZXR1cm4gcGFyc2VJbnQoIG51bWJlciwgMTAgKSA+IDUwO1xuXHQgIH0sXG5cdCAgLy8gc2hvdyBpZiBuYW1lIGVuZHMgd2l0aCAtaXVtXG5cdCAgaXVtOiBmdW5jdGlvbigpIHtcblx0ICAgIHZhciBuYW1lID0gJCh0aGlzKS5maW5kKCcubmFtZScpLnRleHQoKTtcblx0ICAgIHJldHVybiBuYW1lLm1hdGNoKCAvaXVtJC8gKTtcblx0ICB9XG5cdH07XG5cdCQoJy5tZW51LWdyaWQtZmlsdGVycycpLm9uKCAnY2xpY2snLCAnYScsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyIGZpbHRlclZhbHVlID0gJCh0aGlzKS5wYXJlbnQoKS5hdHRyKCdkYXRhLWZpbHRlcicpO1xuXHRcdC8vIHVzZSBmaWx0ZXJGbiBpZiBtYXRjaGVzIHZhbHVlXG5cdFx0ZmlsdGVyVmFsdWUgPSBmaWx0ZXJGbnNbIGZpbHRlclZhbHVlIF0gfHwgZmlsdGVyVmFsdWU7XG5cdFx0JGdyaWQuaXNvdG9wZSh7IGZpbHRlcjogZmlsdGVyVmFsdWUgfSk7XG5cdFx0aWYoZmlsdGVyVmFsdWUgIT09ICcqJykge1xuXHRcdFx0JCgnLm1lbnUtbWFzb25yeS1jb250YWluZXIgLm1lbnUtY2F0ZWdvcnknKS5hZGRDbGFzcygnbm8tYm9yZGVyJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoJy5tZW51LW1hc29ucnktY29udGFpbmVyIC5tZW51LWNhdGVnb3J5JykucmVtb3ZlQ2xhc3MoJ25vLWJvcmRlcicpO1xuXHRcdH1cblx0XHRcblx0fSk7XG5cdCQoJy5tZW51LWdyaWQtZmlsdGVycycpLmVhY2goIGZ1bmN0aW9uKCBpLCBidXR0b25Hcm91cCApIHtcblx0ICB2YXIgJGJ1dHRvbkdyb3VwID0gJChidXR0b25Hcm91cCk7XG5cdCAgJGJ1dHRvbkdyb3VwLm9uKCAnY2xpY2snLCAnYScsIGZ1bmN0aW9uKGUpIHtcblx0ICBcdGUucHJldmVudERlZmF1bHQoKTtcblx0ICAgICRidXR0b25Hcm91cC5wYXJlbnQoKS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHQgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdCAgfSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBpbml0TWFzb25yeTIoKSB7XG5cdHZhciAkZ3JpZCA9ICQoJy5tZW51LW1hc29ucnktY29udGFpbmVyMicpO1xuXHQkZ3JpZC5pc290b3BlKHtcblx0XHRpdGVtU2VsZWN0b3I6ICcubWVudS1jYXRlZ29yeScsXG5cdFx0Y29sdW1uV2lkdGg6ICcuZ3JpZC1zaXplcicsXG5cdFx0Z3V0dGVyOiAwLFxuXHRcdHBlcmNlbnRQb3NpdGlvbjogdHJ1ZSxcblxuXHR9KTtcblx0dmFyIGZpbHRlckZucyA9IHtcblx0ICAvLyBzaG93IGlmIG51bWJlciBpcyBncmVhdGVyIHRoYW4gNTBcblx0ICBudW1iZXJHcmVhdGVyVGhhbjUwOiBmdW5jdGlvbigpIHtcblx0ICAgIHZhciBudW1iZXIgPSAkKHRoaXMpLmZpbmQoJy5udW1iZXInKS50ZXh0KCk7XG5cdCAgICByZXR1cm4gcGFyc2VJbnQoIG51bWJlciwgMTAgKSA+IDUwO1xuXHQgIH0sXG5cdCAgLy8gc2hvdyBpZiBuYW1lIGVuZHMgd2l0aCAtaXVtXG5cdCAgaXVtOiBmdW5jdGlvbigpIHtcblx0ICAgIHZhciBuYW1lID0gJCh0aGlzKS5maW5kKCcubmFtZScpLnRleHQoKTtcblx0ICAgIHJldHVybiBuYW1lLm1hdGNoKCAvaXVtJC8gKTtcblx0ICB9XG5cdH07XG5cdCQoJy5tZW51LXNpZGViYXItZmlsdGVycycpLm9uKCAnY2xpY2snLCAnYScsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyIGZpbHRlclZhbHVlID0gJCh0aGlzKS5wYXJlbnQoKS5hdHRyKCdkYXRhLWZpbHRlcicpO1xuXHRcdC8vIHVzZSBmaWx0ZXJGbiBpZiBtYXRjaGVzIHZhbHVlXG5cdFx0ZmlsdGVyVmFsdWUgPSBmaWx0ZXJGbnNbIGZpbHRlclZhbHVlIF0gfHwgZmlsdGVyVmFsdWU7XG5cdFx0JGdyaWQuaXNvdG9wZSh7IGZpbHRlcjogZmlsdGVyVmFsdWUgfSk7XG5cdFx0aWYoZmlsdGVyVmFsdWUgPT09ICcqJykge1xuXHRcdFx0JCgnLm1lbnUtY2F0ZWdvcnknKS5jc3MoJ2JvcmRlci1ib3R0b20tc3R5bGUnLCAnc29saWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnLm1lbnUtY2F0ZWdvcnknKS5jc3MoJ2JvcmRlci1ib3R0b20tc3R5bGUnLCAnbm9uZScpO1xuXHRcdH1cblx0XHRcblx0fSk7XG5cdCQoJy5tZW51LXNpZGViYXItZmlsdGVycycpLmVhY2goIGZ1bmN0aW9uKCBpLCBidXR0b25Hcm91cCApIHtcblx0ICB2YXIgJGJ1dHRvbkdyb3VwID0gJChidXR0b25Hcm91cCk7XG5cdCAgJGJ1dHRvbkdyb3VwLm9uKCAnY2xpY2snLCAnYScsIGZ1bmN0aW9uKGUpIHtcblx0ICBcdGUucHJldmVudERlZmF1bHQoKTtcblx0ICAgICRidXR0b25Hcm91cC5wYXJlbnQoKS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHQgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdCAgfSk7XG5cdH0pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHRpbml0TWFzb25yeSgpO1xuXHRpbml0TWFzb25yeTIoKTtcbn0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uKCQpe1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBuYXZPdmVybGF5ID0gZmFsc2U7XG5cdCQoJy5uYXYtbW9yZScpLm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24oZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9iaWxlLW5hdi1hY3RpdmUnKTtcblx0XG5cdFx0JCgnLm5hdi1vdmVybGF5JykudmVsb2NpdHkoJ2ZhZGVJbicpO1xuXHRcdCQoJy5uYXZpZ2F0aW9uLW92ZXJsYXknKS52ZWxvY2l0eSgnZmFkZUluJyk7XG5cdFx0JCgnLnRyYW5zaXRpb24td3JhcHBlcicpLmFkZENsYXNzKCdibHVycmVkJyk7XG5cdFx0XG5cdH0pO1xuXHQkKCcubW9iaWxlLW5hdi10b3AnKS5vbignY2xpY2snLCAnLm1vYmlsZS1idXJnZXInLCBmdW5jdGlvbigpe1xuXHRcdCQoJy5tb2JpbGUtb3ZlcmxheScpLnZlbG9jaXR5KCdmYWRlSW4nKTtcblx0XHQkKCcubW9iaWxlLW5hdi1vdmVybGF5JykudmVsb2NpdHkoJ2ZhZGVJbicpO1xuXHRcdCQoJy50cmFuc2l0aW9uLXdyYXBwZXInKS5hZGRDbGFzcygnYmx1cnJlZCcpO1xuXHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnbW9iaWxlLW5hdi1hY3RpdmUnKTtcblx0fSk7XG5cblx0JCgnLm5hdi1vdmVybGF5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHQkKCcubmF2LW92ZXJsYXknKS52ZWxvY2l0eSgnZmFkZU91dCcpO1xuXHRcdCQoJy5uYXZpZ2F0aW9uLW92ZXJsYXknKS52ZWxvY2l0eSgnZmFkZU91dCcpO1xuXHRcdCQoJy50cmFuc2l0aW9uLXdyYXBwZXInKS5yZW1vdmVDbGFzcygnYmx1cnJlZCcpO1xuXHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9iaWxlLW5hdi1hY3RpdmUnKTtcblx0fSk7XG5cdCQoJy5jbG9zZS1uYXYnKS5vbignY2xpY2snLCAnYScsIGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHQkKCcubmF2LW92ZXJsYXknKS52ZWxvY2l0eSgnZmFkZU91dCcpO1xuXHRcdCQoJy5uYXZpZ2F0aW9uLW92ZXJsYXknKS52ZWxvY2l0eSgnZmFkZU91dCcpO1xuXHRcdCQoJy50cmFuc2l0aW9uLXdyYXBwZXInKS5yZW1vdmVDbGFzcygnYmx1cnJlZCcpO1xuXHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9iaWxlLW5hdi1hY3RpdmUnKTtcblx0fSk7XG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdFx0YmluZE92ZXJsYXkoKTtcblx0fSk7XG5cblx0ZnVuY3Rpb24gYmluZE92ZXJsYXkoKSB7XG5cdFx0dmFyIGVhc2luZyA9IFswLjY0NSwgMC4wNDUsIDAuMzU1LCAxXTtcblxuXHRcdCQoJy5uYXZpZ2F0aW9uLW92ZXJsYXkgLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhJykucHJlcGVuZCgnPHNwYW4gY2xhc3M9XCJvdmVybGF5LWNoaWxkcmVuLWljb25cIj48aSBjbGFzcz1cIlwiPis8L2k+PC9zcGFuPiAnKTtcblx0XHQkKCcubmF2aWdhdGlvbi1vdmVybGF5IC5kcm9wZG93bicpLnByZXBlbmQoJzxsaSBjbGFzcz1cIm92ZXJsYXktYmFja1wiPjxhIGhyZWY9XCIjXCI+QmFjazwvYT48L2xpPicpO1xuXG5cdFx0JCgnLm5hdmlnYXRpb24tb3ZlcmxheSAubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEnKS5jbGljayhmdW5jdGlvbihlKXtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHZhciAkdGhhdCA9ICQodGhpcyk7XG5cdFxuXHRcdFx0JHRoYXQucGFyZW50KCkucGFyZW50KCkuZmluZCgnPiBsaSA+IGEnKS52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6IC0yMDAsIG9wYWNpdHk6IDB9LCB7ZGlzcGxheTogJ25vbmUnLCBlYXNpbmc6IGVhc2luZ30pO1xuXHRcdFx0JCgnLm5hdmlnYXRpb24tb3ZlcmxheSAuc3VibWVudS1hY3RpdmUnKS5yZW1vdmVDbGFzcygnc3VibWVudS1hY3RpdmUnKTtcblx0XHRcdCR0aGF0Lm5leHQoJy5kcm9wZG93bicpLmFkZENsYXNzKCdzdWJtZW51LWFjdGl2ZScpO1xuXHRcdFx0JHRoYXQubmV4dCgnLmRyb3Bkb3duJykuZmluZCgnPiBsaSA+IGEnKS52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6IFswLCAyMDBdLCBvcGFjaXR5OiAxfSwge2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBlYXNpbmc6IGVhc2luZywgY29tcGxldGU6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdCR0aGF0Lm5leHQoJy5kcm9wZG93bicpLmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcblx0XHRcdH19KTtcblx0XHRcdHZhciBjdXJyZW50VGV4dCA9ICcnO1xuXHRcdFx0XG5cdFx0XHRpZigkdGhhdC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCc+IGxpID4gYSA+IC5vdmVybGF5LWJhY2staGVhZGVyJykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQkdGhhdC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCc+IGxpID4gYSA+IC5vdmVybGF5LWJhY2staGVhZGVyJykuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGN1cnJlbnRUZXh0ICs9ICQodGhpcykucHJvcCgnb3V0ZXJIVE1MJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdCQoJy5uYXZpZ2F0aW9uLW92ZXJsYXknKS5vbignY2xpY2snLCAnLm92ZXJsYXktYmFjaycsIGZ1bmN0aW9uKGUpe1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dmFyICR0aGF0ID0gJCh0aGlzKTtcblx0XHRcdCR0aGF0LnBhcmVudCgpLmNzcygncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcblx0XHRcdCR0aGF0LmZpbmQoJ2EnKS52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6IDIwMCwgb3BhY2l0eTogMH0sIHtkaXNwbGF5OiAnbm9uZScsIGVhc2luZzogZWFzaW5nfSk7XG5cdFx0XHQkdGhhdC5zaWJsaW5ncygpLmZpbmQoJ2EnKS52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6IDIwMCwgb3BhY2l0eTogMH0sIHtkaXNwbGF5OiAnbm9uZScsIGVhc2luZzogZWFzaW5nfSk7XG5cblx0XHRcdCQoJy5uYXZpZ2F0aW9uLW92ZXJsYXkgLnN1Ym1lbnUtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ3N1Ym1lbnUtYWN0aXZlJyk7XG5cdFx0XHQkdGhhdC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5hZGRDbGFzcygnc3VibWVudS1hY3RpdmUnKTtcblxuXHRcdFx0JHRoYXQucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmluZCgnPiBsaSA+IGEnKS52ZWxvY2l0eSh7dHJhbnNsYXRlWCA6IDAsIG9wYWNpdHk6IDF9LCB7ZGlzcGxheTogJ2lubGluZS1ibG9jaycsIGVhc2luZzogZWFzaW5nIH0pO1xuXHRcdH0pO1xuXHR9XG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKXtcblwidXNlIHN0cmljdFwiO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHQkKCcucnRiLWJvb2tpbmctZm9ybSBmaWVsZHNldCBsYWJlbCcpLmVhY2goZnVuY3Rpb24oKXtcblx0XHR2YXIgJGxhYmVsID0gJCh0aGlzKTtcblx0XHR2YXIgbGFiZWxUZXh0ID0gJGxhYmVsLnRleHQoKTtcblx0XHRsYWJlbFRleHQgPSAkLnRyaW0obGFiZWxUZXh0KTtcblx0XHQkbGFiZWwuc2libGluZ3MoKS5hdHRyKCdwbGFjZWhvbGRlcicsIGxhYmVsVGV4dCk7XG5cdH0pO1xuXHQkKCcucnRiLWJvb2tpbmctZm9ybSAucnRiLXNlbGVjdCBsYWJlbCcpLmVhY2goZnVuY3Rpb24oKXtcblx0XHR2YXIgJGxhYmVsID0gJCh0aGlzKTtcblx0XHR2YXIgbGFiZWxUZXh0ID0gJGxhYmVsLnRleHQoKTtcblx0XHRsYWJlbFRleHQgPSAkLnRyaW0obGFiZWxUZXh0KTtcblx0XHQkbGFiZWwuc2libGluZ3MoKS5wcmVwZW5kKCc8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiXCI+JytsYWJlbFRleHQrJzwvb3B0aW9uPicpO1xuXHR9KTtcblxuXHQkKCcucnRiLWJvb2tpbmctZm9ybSAucnRiLWVycm9yJykucGFyZW50cygnLnJ0Yi1ib29raW5nLWZvcm0nKS5wYXJlbnQoKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJlcnJvci1ibG9ja1wiPjwvZGl2PicpO1xuXG5cdCQoJy5ydGItYm9va2luZy1mb3JtIC5ydGItZXJyb3InKS5hcHBlbmRUbygnLmVycm9yLWJsb2NrJyk7XG5cbn0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uKCQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgc2hhcmVyID0ge1xuXHRcdHNvY2lhbHM6IHtcblx0XHRcdCdmYWNlYm9vayc6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT17dXJsfScsXG5cdFx0XHQndHdpdHRlcic6ICdodHRwczovL3d3dy50d2l0dGVyLmNvbS9zaGFyZT90ZXh0PXt0aXRsZX0nLFxuXHRcdFx0J2dvb2dsZSsnOiAnaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vc2hhcmU/dXJsPXt1cmx9Jyxcblx0XHRcdCd0dW1ibHInOiAnaHR0cDovL3d3dy50dW1ibHIuY29tL3NoYXJlL2xpbms/dXJsPXt1cmx9Jm5hbWU9e3RpdGxlfSZkZXNjcmlwdGlvbj17ZGVzY30nLFxuXHRcdFx0J3BpbnRlcmVzdCc6ICdodHRwczovL3BpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9ib29rbWFya2xldC8/bWVkaWE9e2ltZ30mdXJsPXt1cmx9JmlzX3ZpZGVvPTAmZGVzY3JpcHRpb249e3RpdGxlfScsXG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdCQoJ2JvZHknKS5vbignY2xpY2snLCAnYS5zb2NpYWwtc2hhcmUnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dmFyIHdpbkhlaWdodCA9IDMwMDtcblx0XHRcdFx0dmFyIHdpbldpZHRoID0gNTAwO1xuXHRcdFx0XHR2YXIgd2luVG9wID0gKHNjcmVlbi5oZWlnaHQgLyAyKSAtICh3aW5IZWlnaHQgLyAyKTtcblx0XHRcdFx0dmFyIHdpbkxlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAod2luV2lkdGggLyAyKTtcblx0XHRcdFx0d2luZG93Lm9wZW4odGhpcy5ocmVmLCB0aGlzLnRpdGxlLCAndG9wPScgKyB3aW5Ub3AgKyAnLGxlZnQ9JyArIHdpbkxlZnQgKyAnLHRvb2xiYXI9MCxzdGF0dXM9MCx3aWR0aD0nICsgd2luV2lkdGggKyAnLGhlaWdodD0nICsgd2luSGVpZ2h0KTtcblx0XHRcdH0pO1xuXG5cdFx0XHQkKCdib2R5Jykub24oJ2NsaWNrJywgJ2Euc29jaWFsLXNoYXJlLXNlbGYnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dmFyIHdpbkhlaWdodCA9IDMwMDtcblx0XHRcdFx0dmFyIHdpbldpZHRoID0gNTAwO1xuXHRcdFx0XHR2YXIgd2luVG9wID0gKHNjcmVlbi5oZWlnaHQgLyAyKSAtICh3aW5IZWlnaHQgLyAyKTtcblx0XHRcdFx0dmFyIHdpbkxlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAod2luV2lkdGggLyAyKTtcblx0XHRcdFx0dmFyIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXHRcdFx0XHR2YXIgdGl0bGUgPSBkb2N1bWVudC50aXRsZTtcblx0XHRcdFx0dmFyIGRlc2MgPSAnJztcblx0XHRcdFx0aWYoJCgnbWV0YVtwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJdJykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGRlc2MgPSAkKCdtZXRhW3Byb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIl0nKS5hdHRyKCdjb250ZW50Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIGltZyA9ICcnO1xuXHRcdFx0XHRpZigkKCdtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2VcIl0nKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0aW1nID0gJCgnbWV0YVtwcm9wZXJ0eT1cIm9nOmltYWdlXCJdJykuYXR0cignY29udGVudCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBzb2NpYWwgPSAkKHRoaXMpLmRhdGEoJ3NvY2lhbCcpO1xuXG5cdFx0XHRcdHNvY2lhbCA9IHRoYXQuc29jaWFsc1tzb2NpYWxdLnJlcGxhY2UoXCJ7dXJsfVwiLCBlbmNvZGVVUkkodXJsKSlcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCd7dGl0bGV9JywgdGl0bGUpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSgne2Rlc2N9JywgZGVzYylcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCd7aW1nfScsIGltZyk7XG5cdFx0XHRcdHdpbmRvdy5vcGVuKHNvY2lhbCwgdGhpcy50aXRsZSwgJ3RvcD0nICsgd2luVG9wICsgJyxsZWZ0PScgKyB3aW5MZWZ0ICsgJyx0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9JyArIHdpbldpZHRoICsgJyxoZWlnaHQ9JyArIHdpbkhlaWdodCk7XG5cdFx0XHR9KTtcblxuXHRcdH0sXG5cdH07XG5cblx0c2hhcmVyLmluaXQoKTtcbn0pKGpRdWVyeSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
