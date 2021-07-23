var e=require("path"),t=require("minimist"),r=require("mustache"),n=require("util"),o=require("fs");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=i(t),c=i(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function y(e,t,r){return(y=s()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&f(o,r.prototype),o}).apply(null,arguments)}function m(e){var t="function"==typeof Map?new Map:void 0;return(m=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return y(e,arguments,p(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,e)})(e)}function h(e,t){h=function(e,t){return new i(e,void 0,t)};var r=m(RegExp),n=RegExp.prototype,o=new WeakMap;function i(e,t,n){var i=r.call(this,e,t);return o.set(i,n||o.get(e)),i}function u(e,t){var r=o.get(t);return Object.keys(r).reduce(function(t,n){return t[n]=e[r[n]],t},Object.create(null))}return l(i,r),i.prototype.exec=function(e){var t=n.exec.call(this,e);return t&&(t.groups=u(t,this)),t},i.prototype[Symbol.replace]=function(e,t){if("string"==typeof t){var r=o.get(this);return n[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,function(e,t){return"$"+r[t]}))}if("function"==typeof t){var i=this;return n[Symbol.replace].call(this,e,function(){var e=[];return e.push.apply(e,arguments),"object"!=typeof e[e.length-1]&&e.push(u(e,i)),t.apply(this,e)})}return n[Symbol.replace].call(this,e,t)},h.apply(this,arguments)}var v=["_","itemType","itemFolder","itemName","templatesRoot"],d=n.promisify(c.default.readFile),b=n.promisify(c.default.readdir),g=n.promisify(c.default.writeFile),j=n.promisify(c.default.mkdir);!function(){try{(function(t){var n=t.dictionaryOfReplacements,o=t.itemFolder,i=t.itemName,u=t.itemType,c=t.templatesRoot;try{var a=e.join(c,u);Promise.resolve(b(a)).then(function(t){var c=new RegExp("^"+u+"(.+)$","g"),l=t.map(function(e){return e.replace(c,i+"$1").replace(/\.mustache$/g,"")});j(o,{recursive:!0}),t.forEach(function(t,i){try{return Promise.resolve(d(e.join(a,t))).then(function(t){var u=r.render(t.toString(),n),c=e.join(o,l[i]);g(c,u)})}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}})((i=(o=u.default(process.argv.slice(2)))._[0],c=o.itemType,l=o.itemFolder,p=o.itemName,f=o.templatesRoot,s=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}(o,v),y=process.cwd(),null!=l||(l=e.join(y,"src/"+i)),null!=p||(p=null==(t=i.match(h(/\/?((?:(?!\/)[\s\S])+)$/,{itemName:1})))?void 0:t.groups.itemName),null!=f||(f=__dirname+"/../../templates/"),{itemFolder:l,itemName:p,itemType:c,templatesRoot:f,dictionaryOfReplacements:a({},s,(n={},n[c]=p,n))})),Promise.resolve()}catch(e){return Promise.reject(e)}var t,n,o,i,c,l,p,f,s,y}();
