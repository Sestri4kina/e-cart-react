webpackHotUpdate(0,{19:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,c){function u(t){try{s(r.next(t))}catch(t){c(t)}}function i(t){try{s(r.throw(t))}catch(t){c(t)}}function s(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,i)}s((r=r.apply(t,e||[])).next())})},c=this&&this.__generator||function(t,e){var n,r,o,c,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=e.call(t,u)}catch(t){c=[6,t],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}};Object.defineProperty(e,"__esModule",{value:!0});var u=n(1),i=n(20),s=n(16),a=n(40),l=n(41),p=function(t){function e(e){var n=t.call(this,e)||this;return n.state={products:[]},n}return r(e,t),e.prototype.fetchProducts=function(){return o(this,void 0,void 0,function(){var t,e;return c(this,function(n){switch(n.label){case 0:return s.accessTokenIsExpired()?[4,i.getAccessToken()]:[3,2];case 1:return t=n.sent(),console.log(t),s.persistAccessToken(t.access_token,t.expires),[3,3];case 2:console.log("there is already token in the storage"),n.label=3;case 3:return[4,a.getProducts()];case 4:return e=n.sent(),this.setState({products:e}),[2]}})})},e.prototype.componentDidMount=function(){this.fetchProducts()},e.prototype.render=function(){var t=this.state.products;return!!t.length&&u.createElement("div",null,u.createElement("h1",null,"products"),u.createElement(l.ProductList,{products:t}))},e}(u.Component);e.App=p},41:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n(42))}});
//# sourceMappingURL=0.4f9fb925555cd4e6ba6e.hot-update.js.map