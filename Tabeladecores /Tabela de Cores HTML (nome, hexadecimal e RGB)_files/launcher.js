(function(){function m(a){return a&&a.search&&0<=a.search(".hotmart.com")&&0>window.location.href.search(".hotmart.com")}function p(a,b,c){c||(c=window.location.href);var e=c.split("#")[1]||"",d=c.split("#")[0].split("?")[1]||"";c=c.split("#")[0].split("?")[0];var h=new RegExp("("+a+"\x3d([^\x26]*))","gi"),g="undefined"!==typeof b&&null!==b;h.test(d)?d=g?d.replace(h,a+"\x3d"+b):d.replace(h,""):g&&(0<d.length&&(d+="\x26"),d+=a+"\x3d"+b);d&&(c+="?"+d);e&&(c+="#"+e);return c}function v(a,b){var c=
document.createElement("input");c.type="hidden";c.name=a;c.value=b;return c}function q(a){a=this.getAttribute("href");if(this instanceof HTMLAnchorElement&&m(a)){var f=b.generateHi();this.setAttribute("href",p("_hi",f,a))}}function r(a){var f=this.getAttribute("href");a.keyCode===s.DOM_VK_RETURN&&this instanceof HTMLAnchorElement&&m(f)&&(a=b.generateHi(),this.setAttribute("href",p("_hi",a,f)))}function t(a){if(a.target instanceof HTMLFormElement&&"get"===a.target.method&&m(a.target.action)&&!a.target._hi){var f=
b.generateHi();a.target.appendChild(v("_hi",f))}}if("undefined"==typeof s)var s={DOM_VK_RETURN:13};if("undefined"==typeof n){var n=function(a){this.query=a};n.prototype.get=function(a){return this.query.split("#")[0].replace("?","").split("\x26").filter(function(a){return!!a}).reduce(function(a,b){var e=b.split("\x3d"),d=e[1];a[e[0]]=d?decodeURIComponent(d.replace(/\+/g," ")):"";return a},{})[a]}}window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach);if(-1==
location.pathname.indexOf("/wp-admin/")){window.hotlobj||(window.hotlobj={});var b=window.hotlobj;b.getDomainToHotId||(b.getDomainToHotId=function(){var a=document.domain;return a&&a.search&&0<=a.search(".hotmart.com")?".hotmart.com":a});b.addEventListeners||(b.addEventListeners=function(){document.querySelectorAll("a[href]").forEach(function(a){a.removeEventListener("mousedown",q);a.removeEventListener("keydown",r);a.addEventListener("mousedown",q);a.addEventListener("keydown",r)});document.removeEventListener("submit",
t);document.addEventListener("submit",t)});b.getCookie||(b.getCookie=function(a){a+="\x3d";try{for(var b=document.cookie.split(";"),c=0;c<b.length;c++){var e="undefined"==typeof b[c].trim?b[c]:b[c].trim();if(0==e.indexOf(a))return ck=e.substring(a.length,e.length)}}catch(d){console.error(d.message)}return null});b.getUUID||(b.getUUID=function(){return Math.random().toString(36).substring(2)+(new Date).getTime().toString(36)});b.generateSid||(b.generateSid=function(){var a=(new Date).getTime();return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,
function(b){var c=(a+16*Math.random())%16|0;a=Math.floor(a/16);return("x"==b?c:c&3|8).toString(16)})});b.setCookie||(b.setCookie=function(a,b,c,e){var d=new Date;d.setTime(d.getTime()+6E4*c);c="expires\x3d"+d.toUTCString();try{document.cookie=a+"\x3d"+b+";"+c+";"+("domain\x3d"+e)+";path\x3d/;Secure;SameSite\x3dNone"}catch(h){idhotobj.util.log(h.message)}});b.getPageViewId||(b.getPageViewId=function(){b.pageViewId||(b.pageViewId="PV"+b.getUUID());return b.pageViewId});b.getTraceId||(b.getTraceId=function(){return"LT"+
b.getUUID()});b.getHotIdJson||(b.getHotIdJson=function(){var a=null;return a=(a=b.getCookie("hotid"))?"{"===a[0]?JSON.parse(a):JSON.parse(window.atob(a)):{}});b.getHotId||(b.getHotId=function(){var a=b.getHotIdJson();a.pageview_id=b.getPageViewId();a.trace_id=b.getTraceId();return window.btoa(JSON.stringify(a))});b.generateHi||(b.generateHi=function(){var a=b.getCookie("hotid");return a?a+"."+Date.now():null});b.setSid||(b.setSid=function(){var a=b.getHotIdJson();a.sid||(a.sid=b.generateSid(),b.setCookie("hotid",
window.btoa(JSON.stringify(a)),2592E4,b.getDomainToHotId()))});b.configHotId||(b.configHotId=function(){var a;a=(new n(window.location.search)).get("_hi");var f;/^((?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4}))\.\d+$/g.test(a)?(f=a.split(".")[1],f=Date.now()-f,f=0<f&&12E4>f):f=!1;a=f?a.split(".")[0]:void 0;a?b.setCookie("hotid",a,2592E4,b.getDomainToHotId()):b.setSid()});b.sendRequest||(b.sendRequest=function(a,f,c,e,d){var h;h=window.XMLHttpRequest?new XMLHttpRequest:
new ActiveXObject("Microsoft.XMLHTTP");var g=b.getHotId();g&&(e=0<e.length?"hotid\x3d"+g+"\x26"+e:"hotid\x3d"+g);"GET"==f&&(a=a+"?"+e,e="");d&&(h.onreadystatechange=d);h.open(f,a,c);h.setRequestHeader("Content-type","application/x-www-form-urlencoded");h.send(e)});if(!b.hotproxy){var g=(b.hotproxy=window.hot)?window.hot.q:void 0;window.hot=function(){b.hotproxy.apply(this,Array.prototype.slice.call(arguments));var a=window.hot.q,f="";if(a)for(var c=0,e=a.length;c<e;++c){var d=a[c];"hotmart_pixel_integration"==
d["0"]&&(f=d["1"],d["0"]="",d["1"]="")}0<f.length&&b.launcher(document.getElementsByTagName("script")[0],"https://api-pixel.hotmart.com/px.js","hotmart_pixel_integration\x3d"+encodeURIComponent(f))};window.hot.q=g}window.hot.getQueryStringParameters||(window.hot.getQueryStringParameters=function(a){var b=window.hot.q||[],b=b.filter(function(a){return"send"!==a["0"]});a&&(b=b.filter(a));a=b.reduce(function(a,b){b["0"]&&""!=b["0"]&&b["1"]&&""!=b["1"]&&(a[b["0"]]=encodeURIComponent(b["1"]));return a},{});var b="",
c;for(c in a)a.hasOwnProperty(c)&&(0<b.length&&(b+="\x26"),b+=c+"\x3d"+a[c]);return b});b.launcher||(b.launcher=function(a,b,c){var e=document.createElement("script"),d=window.hot.q;if(d)for(var g=0,k=d.length;g<k;++g){var l=d[g];"send"!=l["0"]&&0<l["0"].length&&(0<c.length&&(c+="\x26"),c=c+l["0"]+"\x3d"+encodeURIComponent(l["1"]))}0<=b.indexOf("id.js")&&document.referrer&&(0<c.length&&(c+="\x26"),c=c+"prev\x3d"+encodeURIComponent(document.referrer));0<c.length&&(b=b+"?"+c);e.src=b;e.async=1;a.parentNode.insertBefore(e,
a)});if(!b.loadModules){b.loadModules=function(){if(4==this.readyState&&200==this.status)for(var a=JSON.parse(this.responseText),f=document.getElementsByTagName("script")[0],c=0,e=a.length;c<e;c++)0>a[c].indexOf("px.js")&&b.launcher(f,a[c],"")};var g="locationHref\x3d"+encodeURIComponent(location.href),k=window.hot.getQueryStringParameters(function(a){return"account"===a["0"]});k&&(g+="\x26"+k);b.configHotId();b.addEventListeners();(new MutationObserver(function(){b.addEventListeners()})).observe(document,
{childList:!0,attributes:!0,subtree:!0});b.sendRequest("//launcher.hotmart.com/rest/v1/module/load-js","GET",!0,g,b.loadModules);if(window.hot.q&&window.hot.q.length)for(var g=window.hot.q,k=0,w=g.length;k<w;++k){var u=g[k];"hotmart_pixel_integration"==u["0"]&&window.hot.apply(this,Array.prototype.slice.call(u))}}}})();