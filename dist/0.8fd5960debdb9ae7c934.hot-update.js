webpackHotUpdate(0,{19:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,c){function s(t){try{i(r.next(t))}catch(t){c(t)}}function u(t){try{i(r.throw(t))}catch(t){c(t)}}function i(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,u)}i((r=r.apply(t,e||[])).next())})},c=this&&this.__generator||function(t,e){var n,r,o,c,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function u(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return s.label++,{value:c[1],done:!1};case 5:s.label++,r=c[1],c=[0];continue;case 7:c=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){s=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){s.label=c[1];break}if(6===c[0]&&s.label<o[1]){s.label=o[1],o=c;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(c);break}o[2]&&s.ops.pop(),s.trys.pop();continue}c=e.call(t,s)}catch(t){c=[6,t],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),u=n(20),i=n(16),a=n(40),l=function(t){function e(e){var n=t.call(this,e)||this;return n.state={products:[]},n.fetchProducts=n.fetchProducts.bind(n),n}return r(e,t),e.prototype.fetchProducts=function(){return o(this,void 0,void 0,function(){var t,e;return c(this,function(n){switch(n.label){case 0:return i.accessTokenIsExpired()?[4,u.getAccessToken()]:[3,2];case 1:return t=n.sent(),console.log(t),i.persistAccessToken(t.access_token,t.expires),[3,3];case 2:console.log("there is already token in the storage"),n.label=3;case 3:return[4,a.getProducts()];case 4:return e=n.sent(),console.log(e),this.setState({products:e}),console.log(this.state),[2]}})})},e.prototype.componentDidMount=function(){this.fetchProducts()},e.prototype.render=function(){var t=this.state.products,e=t.map(function(t){s.createElement("li",{key:t.id}," ",t.name," ")});return console.log(t),s.createElement("div",null,s.createElement("h1",null,"products"),s.createElement("ul",null,!!t.length&&e))},e}(s.Component);e.App=l}});
//# sourceMappingURL=0.8fd5960debdb9ae7c934.hot-update.js.map