(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"Oc+t":function(e,t,r){r("+mth"),r("Tnio"),r("8n9q"),r("/Ybv"),r("3ezb"),r("k6+H"),r("Sh69"),r("qGHP"),r("OJi+"),r("xCht"),r("i23N"),r("yFTj");var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),o=new L(n||[]);return i._invoke=function(e,t,r){var n=p;return function(a,i){if(n===m)throw new Error("Generator is already running");if(n===h){if("throw"===a)throw i;return P()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var l=k(o,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var s=c(e,t,r);if("normal"===s.type){if(n=r.done?h:u,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=h,r.method="throw",r.arg=s.arg)}}}(e,r,o),i}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=s;var p="suspendedStart",u="suspendedYield",m="executing",h="completed",d={};function f(){}function g(){}function v(){}var y={};y[i]=function(){return this};var _=Object.getPrototypeOf,x=_&&_(_(O([])));x&&x!==r&&n.call(x,i)&&(y=x);var b=v.prototype=f.prototype=Object.create(y);function w(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function E(e){var t;this._invoke=function(r,a){function i(){return new Promise((function(t,i){!function t(r,a,i,o){var l=c(e[r],e,a);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==typeof p&&n.call(p,"__await")?Promise.resolve(p.__await).then((function(e){t("next",e,i,o)}),(function(e){t("throw",e,i,o)})):Promise.resolve(p).then((function(e){s.value=e,i(s)}),(function(e){return t("throw",e,i,o)}))}o(l.arg)}(r,a,t,i)}))}return t=t?t.then(i,i):i()}}function k(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=c(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function O(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:P}}function P(){return{value:t,done:!0}}return g.prototype=b.constructor=v,v.constructor=g,v[l]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(E.prototype),E.prototype[o]=function(){return this},e.AsyncIterator=E,e.async=function(t,r,n,a){var i=new E(s(t,r,n,a));return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(b),b[l]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return l.type="throw",l.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],l=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},PfDX:function(e,t,r){"use strict";r.r(t);var n=r("xR3+"),a=r.n(n),i=r("haoo"),o=r("qvps"),l=r("Nhd3"),s=r("782O"),c=r.n(s),p=r("Sy2o"),u=r("ap8l"),m=r("3fcH"),h=r("wPGR"),d=r("LM/2"),f=function(e){var t=e.title,r=void 0===t?"about":t,n=e.text,i=void 0===n?"":n;return a.a.createElement("div",null,a.a.createElement("h1",null,r),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:i}}))},g=(r("qGHP"),function(e){var t=e.className,r=e.name;e.level;return a.a.createElement("div",{className:t},a.a.createElement("label",{htmlFor:r+"-bar"},r),a.a.createElement("div",{id:r+"-bar",className:"skill__bar"},a.a.createElement("div",{className:"skill__level"})))});g.displaName="SkillBar";var v=Object(i.default)(g).withConfig({displayName:"skill-bar",componentId:"sc-1tv82hj-0"})(["width:100%;.skill__bar{width:100%;height:10px;background-color:lightgrey;padding:1px;}.skill__level{background-color:#25303B;width:","%;height:8px;}"],(function(e){return e.level||0})),y=Object(i.default)((function(e){var t=e.className,r=e.title,n=void 0===r?"Skills":r,i=e.skills,o=void 0===i?[]:i;return a.a.createElement("div",{className:t},a.a.createElement("h1",null,n),o.map((function(e){return a.a.createElement(v,{key:e.name,name:e.name,level:e.level})})))})).withConfig({displayName:"skills",componentId:"sc-11il9ac-0"})(["width:100%;"]);function _(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  .timeline__item div.inner {\n    width: 40%;\n    margin: 5px 0 0 0;\n  }\n\n  .timeline__item div.inner h2:after {\n    top: 20px;\n    left: unset;\n    right: -5px;\n  }\n  .timeline__item:nth-child(2n+2) div.inner h2:after {\n    left: -5px;\n  }\n\n  "]);return _=function(){return e},e}var x=Object(i.default)((function(e){var t=e.className;return a.a.createElement("div",{className:t},a.a.createElement("h1",null,"Experience"),c.a.jobs&&c.a.jobs.map((function(e){return a.a.createElement("article",{key:e.begin.month+e.begin.year,className:"timeline__item"},a.a.createElement("div",{className:"inner"},a.a.createElement("span",{className:"timeline__date"},a.a.createElement("span",{className:"timeline__month"},e.begin.month),a.a.createElement("span",{className:"timeline__year"},e.begin.year)),a.a.createElement("h2",{className:"timeline__title"},e.occupation," at ",e.company," ",a.a.createElement("br",null),a.a.createElement("small",{className:"timeline__title--small"},"(",e.duration||"present",")")),a.a.createElement("p",null,e.description)))})))})).withConfig({displayName:"timeline",componentId:"sc-1p0hdle-0"})(["position:relative;:before{content:'';display:block;position:absolute;left:50%;top:0;margin:70px 0 0 -1px;width:1px;height:calc(100% - 70px);background:#25303B;}.timeline__item{width:100%;margin:0 0 20px 0;position:relative;}.timeline__item:after{content:'';display:block;clear:both;}.timeline__item div.inner{width:100%;float:left;margin:85px 0 0 0;border-radius:6px;border:1px solid #25303B;}.timeline__date{display:block;width:60px;height:60px;padding:3px 5px;position:absolute;top:0;left:50%;margin:0 0 0 -30px;border-radius:100%;font-size:12px;font-weight:900;text-transform:uppercase;background:#25303B;color:#fff;box-shadow:0 0 0 7px #fff;}.timeline__date span{display:block;text-align:center;}.timeline__month{font-size:18px;padding-top:4px;}.timeline__year{font-size:10px;}.timeline__title{padding:15px;margin:0;color:#fff;font-size:20px;text-transform:uppercase;border-radius:3px 3px 0 0;position:relative;}.timeline__title:after{content:'';position:absolute;top:-5px;left:30%;width:10px;height:10px;transform:rotate(-45deg);}.timeline__item div.inner p{padding:15px;margin:0;font-size:14px;background:#fff;color:#656565;border-radius:0 0 6px 6px;}.timeline__item:nth-child(2n+2) div.inner{float:right;}.timeline__title{background:#25303B;}.timeline__title:after{background:#25303B;}.timeline__title--small{font-size:10px;}",""],(function(e){return Object(o.config)().media.sm(_())})),b=r("wEYB"),w=r.n(b),E=(r("Oc+t"),r("ynGj")),k=r.n(E),N=Object(i.default)((function(e){var t=e.className;return a.a.createElement("div",{className:t},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))})).withConfig({displayName:"loader",componentId:"c3nj0n-0"})(["display:inline-block;position:relative;width:64px;height:64px;margin:0 auto;div{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid #25303B;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:#25303B transparent transparent transparent;}div:nth-child(1){animation-delay:-0.45s;}div:nth-child(2){animation-delay:-0.3s;}div:nth-child(3){animation-delay:-0.15s;}@keyframes lds-ring{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"]);var j="https://api.github.com/users/"+c.a.githubUsername+"/repos?type=owner&sort=updated&per_page=5&page=1",L=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).state={repos:[],status:"loading"},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.componentDidMount=function(){var e;return w.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.awrap(k()(j));case 2:(e=t.sent).json&&e.json.length&&this.setState({repos:e.json,status:"ready"});case 4:case"end":return t.stop()}}),null,this)},i.render=function(){var e=this.state.status;return a.a.createElement("div",{className:this.props.className},a.a.createElement("h2",null,"Latest repositories on Github"),"loading"===e&&a.a.createElement("div",{className:"repositories__loader"},a.a.createElement(N,null)),"ready"===e&&this.state.repos&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"repositories__content"},this.state.repos.map((function(e){return a.a.createElement(a.a.Fragment,{key:e.name},a.a.createElement("div",{className:"repositories__repo"},a.a.createElement("a",{className:"repositories__repo-link",href:e.html_url},a.a.createElement("strong",null,e.name)),a.a.createElement("div",null,e.description),a.a.createElement("div",{className:"repositories__repo-date"},"Updated: ",new Date(e.updated_at).toUTCString()),a.a.createElement("div",{className:"repositories__repo-star"},"★ ",e.stargazers_count)),a.a.createElement("hr",null))})))))},n}(a.a.Component),O=Object(i.default)(L).withConfig({displayName:"repositories",componentId:"sc-8n2gji-0"})(["position:relative;.repositories__content{margin-bottom:40px;}.repositories__repo{position:relative;}.repositories__repo-link{text-decoration:none;color:#25303B;}.repositories__repo-date{color:#bbb;font-size:10px;}.repositories__repo-star{position:absolute;top:0;right:0;}.repositories__loader{display:flex;}hr{margin-top:16px;}"]);var P=i.default.hr.withConfig({displayName:"pages__Separator",componentId:"g1kolw-0"})(["margin-top:24px;margin-bottom:16px;"]),z=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){"UA-000000000-1"===c.a.googleAnalyticsId&&console.error("WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.");var e=c.a.siteTitle,t=c.a.keywords;return a.a.createElement(u.a,{location:this.props.location},a.a.createElement(h.a,{title:e,keywords:t}),a.a.createElement(m.a,{heroImg:c.a.siteCover,title:e}),a.a.createElement(d.a,{className:this.props.className},a.a.createElement(o.Container,{className:"page-content",fluid:!0},a.a.createElement(o.Row,null,a.a.createElement(o.Col,{xs:4,className:"avatar"},a.a.createElement("img",{className:"avatar__image",src:Object(p.withPrefix)(c.a.authorAvatar),alt:"user avatar"}),a.a.createElement("div",{className:"social"},c.a.social.github&&a.a.createElement("a",{className:"social-link github",href:c.a.social.github},a.a.createElement(l.b,{className:"social-icon",size:"32"})),c.a.social.linkedin&&a.a.createElement("a",{className:"social-link linkedin",href:c.a.social.linkedin},a.a.createElement(l.c,{className:"social-icon",size:"32"})),c.a.social.twitter&&a.a.createElement("a",{className:"social-link twitter",href:c.a.social.twitter},a.a.createElement(l.d,{className:"social-icon",size:"32"})),c.a.social.email&&a.a.createElement("a",{className:"social-link email",href:"mailto:"+c.a.social.email},a.a.createElement(l.a,{className:"social-icon",size:"32"}))))),a.a.createElement(o.Row,null,a.a.createElement(o.Col,{xs:4,sm:4},a.a.createElement(f,{title:"About",text:c.a.authorDescription})),a.a.createElement(o.Col,{xs:4,sm:4},a.a.createElement(y,{title:"Skills",skills:c.a.skills}))),a.a.createElement(P,null),a.a.createElement(x,null),a.a.createElement(P,null),a.a.createElement(O,null))))},n}(a.a.Component);t.default=Object(i.default)(z).withConfig({displayName:"pages",componentId:"g1kolw-1"})([".page-content{max-width:100%;margin-bottom:40px;}.avatar{align-items:center;margin-bottom:24px;flex-direction:column;}.avatar__image{box-shadow:3px 3px 15px 0px rgba(0,0,0,0.75);max-width:200px;border-radius:100px;margin:0 auto 24px;}.social{margin-top:12px;margin-bottom:12px;}.social-link{padding:8px;color:#555;}a.social-link.twitter:hover{color:#1da1f2;}a.social-link.github:hover{color:#24292e;}a.social-link.linkedin:hover{color:#0077B5;}a.social-link.email:hover{color:#c23a2b;}"])},wEYB:function(e,t,r){e.exports=r("Oc+t")},ynGj:function(e,t,r){"use strict";r("3ezb"),r("k6+H"),r("UQI+"),r("dlp1"),Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=function(e,t){return fetch(e,t).then((function(e){var t={};for(var r in e)"function"!=typeof e[r]&&(t[r]=e[r]);return e.status>=200&&e.status<300?new Promise((function(r,a){return e.json().then((function(e){return r(n({},t,{json:e}))}),(function(e){return a(n({},t,{error:e}))}))})):new Promise((function(r,a){return e.json().then((function(e){return a(n({},t,{json:e}))}),(function(e){return a(n({},t,{error:e}))}))}))}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a49704a14bd6e2a0ca63.js.map