(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vendors~async-apps-coverpageconfig-socialicons~async-design-announcementbar~async-design-browser-ico~48de1117"],{"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/components/Form.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});var t=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/objectWithoutProperties.js");var n=x(t);var s=a("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/get-prototype-of.js");var o=x(s);var i=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/classCallCheck.js");var u=x(i);var l=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/createClass.js");var d=x(l);var c=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/possibleConstructorReturn.js");var f=x(c);var v=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/inherits.js");var p=x(v);var m=a("./src/main/webapp/universal/node_modules/prop-types/index.js");var b=x(m);var h=a("./src/main/webapp/universal/node_modules/react/index.js");var _=x(h);var j=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/components/Overlay.js");var y=x(j);var w=a("./src/main/webapp/universal/node_modules/lodash/pick.js");var g=x(w);var F=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/utils.js");function x(e){return e&&e.__esModule?e:{default:e}}var C=["isSaving","isLoading","isDirty","values","error","fieldErrors"];var k=function(e){(0,p.default)(r,e);function r(){(0,u.default)(this,r);return(0,f.default)(this,(r.__proto__||(0,o.default)(r)).apply(this,arguments))}(0,d.default)(r,[{key:"componentDidMount",value:function e(){var r=this.props,a=r.bindToActions,t=(0,n.default)(r,["bindToActions"]);a&&(this.unbindFromActions=a(t))}},{key:"componentWillUnmount",value:function e(){this.unbindFromActions&&this.unbindFromActions()}},{key:"componentDidUpdate",value:function e(r){var a=this.props,t=a.onChange,n=a.values,s=a.comparator;t&&!s(r.values,n)&&t(n)}},{key:"render",value:function e(){var r=this.props,a=r.isLoading,t=r.isSaving,n=r.bindField,s=r.className,o=r.overlayStyles,i=r.LoadingIndicator;var u=this.props.children;"function"===typeof u&&(u=u(n,(0,g.default)(this.props,C)));return _.default.createElement("div",{className:s,style:{position:"relative"}},!a&&u,t&&_.default.createElement(y.default,{style:o}),(a||t)&&i&&_.default.createElement(i,null))}}]);return r}(_.default.Component);k.propTypes={onChange:b.default.func,onUpdate:b.default.func,onReset:b.default.func,onLoaded:b.default.func,onSaved:b.default.func,onError:b.default.func,values:b.default.object,isLoading:b.default.bool,isSaving:b.default.bool,bindField:b.default.func.isRequired,bindToActions:b.default.func,comparator:b.default.func.isRequired,className:b.default.string,overlayStyles:b.default.object,LoadingIndicator:b.default.oneOfType([b.default.element,b.default.func])};k.defaultProps={comparator:F.compareShallow};r.default=k},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/components/Overlay.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});var t=a("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/assign.js");var n=l(t);var s=a("./src/main/webapp/universal/node_modules/prop-types/index.js");var o=l(s);var i=a("./src/main/webapp/universal/node_modules/react/index.js");var u=l(i);function l(e){return e&&e.__esModule?e:{default:e}}var d=function e(r){var a=r.style;a=(0,n.default)({},e.defaultProps.style,a);return u.default.createElement("div",{style:a})};d.propTypes={style:o.default.object};d.defaultProps={style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"inherit",opacity:.2}};r.default=d},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/components/Provider.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});var t=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/extends.js");var u=w(t);var n=a("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/get-prototype-of.js");var s=w(n);var o=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/classCallCheck.js");var i=w(o);var l=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/createClass.js");var d=w(l);var c=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/possibleConstructorReturn.js");var f=w(c);var v=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/inherits.js");var p=w(v);var m=a("./src/main/webapp/universal/node_modules/prop-types/index.js");var b=w(m);var h=a("./src/main/webapp/universal/node_modules/react/index.js");var _=w(h);var j=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/components/Form.js");var y=w(j);function w(e){return e&&e.__esModule?e:{default:e}}var g=function(e){(0,p.default)(t,e);function t(e,r){(0,i.default)(this,t);var a=(0,f.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e,r));a.state={};return a}(0,d.default)(t,[{key:"getChildContext",value:function e(){var r=this.props,a=r.store,t=r.actions,n=r.bindToActions,s=r.bindField;return{formStore:a,formActions:t,bindFormField:s,bindToFormActions:n,FormComponent:this.getFormComponent()}}},{key:"componentWillMount",value:function e(){this.updateState(this.props.store.getState());this.unlisten=this.props.store.listen(this.updateState.bind(this))}},{key:"componentWillUnmount",value:function e(){this.unlisten&&this.unlisten()}},{key:"updateState",value:function e(r){this.setState({isDirty:r.isDirty,isSaving:r.isSaving,isLoading:r.isLoading,values:r.values,error:r.error})}},{key:"getFormComponent",value:function e(){var r=this;if(!this.formComponent){var a=this.props,t=a.bindToActions,n=a.bindField,s=a.comparator;this.formComponent=function(e){return _.default.createElement(y.default,(0,u.default)({key:"form"},e,r.state,{bindField:n,bindToActions:t,comparator:s}))}}return this.formComponent}},{key:"render",value:function e(){var r=this.props,a=r.store,t=r.actions,n=r.bindField,s=r.bindToActions,o=r.Component,i=r.propsToPass;return _.default.createElement(o,(0,u.default)({},i,{Form:this.getFormComponent(),store:a,actions:t,bindField:n,bindToActions:s},this.state))}}]);return t}(_.default.Component);g.propTypes={store:b.default.object.isRequired,actions:b.default.object.isRequired,bindField:b.default.func.isRequired,bindToActions:b.default.func.isRequired,comparator:b.default.func,Component:b.default.oneOfType([b.default.func,b.default.element]).isRequired,propsToPass:b.default.object};g.childContextTypes={formStore:b.default.object,formActions:b.default.object,bindFormField:b.default.func,bindToFormActions:b.default.func,FormComponent:b.default.func};r.default=g},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/components/ProviderChildPropTypes.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});var t=a("./src/main/webapp/universal/node_modules/prop-types/index.js");var n=s(t);function s(e){return e&&e.__esModule?e:{default:e}}var o={isDirty:n.default.bool,isSaving:n.default.bool,isLoading:n.default.bool,values:n.default.object,error:n.default.object,store:n.default.object,actions:n.default.object,bindField:n.default.func,bindToActions:n.default.func,Form:n.default.func};r.default=o},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/createForm/createForm.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});var t=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/components/Form.js");var l=u(t);var n=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/createForm/createFormFlux.js");var d=u(n);var s=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/createForm/getBindFieldMethod.js");var c=u(s);var o=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/createForm/getBindToActionsMethod.js");var f=u(o);var i=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/createForm/getConnectedComponent.js");var v=u(i);function u(e){return e&&e.__esModule?e:{default:e}}var p=function e(r,a){var t=(0,d.default)(r,a),n=t.actions,s=t.store;var o=(0,c.default)(n,s);var i=(0,f.default)(n);var u=(0,v.default)(l.default,s,{bindField:o,bindToActions:i,comparator:a.comparator});return{actions:n,store:s,Form:u}};r.default=p},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/createForm/createFormFlux.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});var t=a("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/assign.js");var c=s(t);var n=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/flux/index.js");var f=s(n);var v=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/form/index.js");function s(e){return e&&e.__esModule?e:{default:e}}var o=function e(r,a){var t=a.actions,n=a.validators,s=a.defaultValues,o=a.comparator;var i=(0,v.getFieldsValidator)(n||{});var u=f.default.createActions(v.FormActions,r+"Actions",i,t);var l=f.default.createStore(v.FormStore,r+"Store",u,s,o);var d=(0,c.default)({},u,{save:function e(){for(var r=arguments.length,a=Array(r),t=0;t<r;t++)a[t]=arguments[t];return u.save.apply(u,[l.getVal()].concat(a))},reset:function e(){for(var r=arguments.length,a=Array(r),t=0;t<r;t++)a[t]=arguments[t];return u.reset.apply(u,[l.getState().cleanValues].concat(a))},validate:function e(){for(var r=arguments.length,a=Array(r),t=0;t<r;t++)a[t]=arguments[t];return u.validate.apply(u,[l.getVal()].concat(a))},validateField:function e(r){return u.validateField(l.getVal(),r)}});return{store:l,actions:d}};r.default=o},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/createForm/createFormProvider.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});var t=a("./src/main/webapp/universal/node_modules/react/index.js");var l=u(t);var n=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/components/Provider.js");var d=u(n);var s=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/createForm/createFormFlux.js");var c=u(s);var o=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/createForm/getBindFieldMethod.js");var f=u(o);var i=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/createForm/getBindToActionsMethod.js");var v=u(i);function u(e){return e&&e.__esModule?e:{default:e}}var p=function e(r,a,t){var n=(0,c.default)(r,a),s=n.actions,o=n.store;var i=(0,v.default)(s);var u=(0,f.default)(s,o);return function(e){return l.default.createElement(d.default,{actions:s,store:o,bindField:u,bindToActions:i,comparator:a.comparator,Component:t,propsToPass:e})}};r.default=p},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/createForm/getBindFieldMethod.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});var l=function e(r){return r};var t=function e(i,u){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;var r=arguments[2];if("function"!==typeof e){r=e;e=l}var a=u.getVal(t);void 0===a&&(a=r);var n=function e(r){var a;return i.update((a={},a[t]=r,a))};var s=u.getFieldError(t);var o=!!s;return e({value:a,onChange:n,errorMessage:s,hasErrors:o})}};r.default=t},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/createForm/getBindToActionsMethod.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});var t=a("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/keys.js");var o=s(t);var n=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/flux/index.js");var i=s(n);var u=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/utils.js");function s(e){return e&&e.__esModule?e:{default:e}}var l=function e(s){return function(n){var e=(0,o.default)(n).reduce(function(e,r){var a=s[r];a||0!==r.indexOf("on")||(a=s[(0,u.toUpperSnakeCase)(r).replace(/^ON_/,"")]);var t=a?i.default.addActionListener(a,n[r]):null;t&&e.push(t);return e},[]);return function(){return e.forEach(function(e){return e()})}}};r.default=l},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/createForm/getConnectedComponent.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});var t=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/extends.js");var s=h(t);var n=a("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/get-prototype-of.js");var o=h(n);var i=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/classCallCheck.js");var u=h(i);var l=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/createClass.js");var d=h(l);var c=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/possibleConstructorReturn.js");var f=h(c);var v=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/inherits.js");var p=h(v);var m=a("./src/main/webapp/universal/node_modules/react/index.js");var b=h(m);function h(e){return e&&e.__esModule?e:{default:e}}var _=function e(a,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var r=function(e){(0,p.default)(r,e);function r(){(0,u.default)(this,r);return(0,f.default)(this,(r.__proto__||(0,o.default)(r)).apply(this,arguments))}(0,d.default)(r,[{key:"componentWillMount",value:function e(){this.setState(t.getState())}},{key:"componentDidMount",value:function e(){var r=this;this.unlisten=t.listen(function(e){return r.setState(e)})}},{key:"componentWillUnmount",value:function e(){this.unlisten&&this.unlisten()}},{key:"render",value:function e(){return b.default.createElement(a,(0,s.default)({},this.state,n,this.props))}}]);return r}(b.default.Component);return r};r.default=_},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/createForm/index.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});r.createFormProvider=r.default=void 0;var t=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/createForm/createForm.js");var n=i(t);var s=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/createForm/createFormProvider.js");var o=i(s);function i(e){return e&&e.__esModule?e:{default:e}}r.default=n.default;r.createFormProvider=o.default},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/flux/ActionsBase.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});var t=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/extends.js");var n=p(t);var s=a("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/keys.js");var i=p(s);var o=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/classCallCheck.js");var u=p(o);var l=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/createClass.js");var d=p(l);var c=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/utils.js");var f=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/flux/flux.js");var v=p(f);function p(e){return e&&e.__esModule?e:{default:e}}var m=function e(r,a){return r+"."+a};var b=function e(r,a){return(a?(0,c.toUpperSnakeCase)(a):"FORM")+"_"+r};var h=function(){function t(e){var r=e.id,a=e.name;(0,u.default)(this,t);this.actions={};this.types={};this.id=r;this.name=a}(0,d.default)(t,[{key:"dispatch",value:function e(r,a){return v.default.dispatch(this.name,m(this.id,r),r,a)}},{key:"generateActions",value:function e(){var a=this;for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];t.forEach(function(e){var r=(0,c.toUpperSnakeCase)(e);a.types[r]={type:r,id:m(a.id,r)};a.actions[e]=function(e){a.dispatch(r,e);return{type:b(r,a.name),data:e}}})}},{key:"registerActions",value:function e(r){var o=this;(0,i.default)(r).forEach(function(e){var n=(0,c.toUpperSnakeCase)(e);var s=r[e];o.types[n]={type:n,id:m(o.id,n)};o.actions[e]=function(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];var t=s.apply(o,r);"function"===typeof t?t=t(function(e){return o.dispatch(n,e)}):void 0===t||(0,c.isPromise)(t)||o.dispatch(n,t);if((0,c.isPromise)(t)){t.type=b(n,o.name);return t}return{type:b(n,o.name),data:t}}})}},{key:"public",get:function e(){return(0,n.default)({},this.actions,this.types)}}]);return t}();r.default=h},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/flux/StoreBase.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});var t=a("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/assign.js");var n=b(t);var s=a("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/keys.js");var o=b(s);var i=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/extends.js");var u=b(i);var l=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/classCallCheck.js");var d=b(l);var c=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/createClass.js");var f=b(c);var v=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/utils.js");var p=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/flux/flux.js");var m=b(p);function b(e){return e&&e.__esModule?e:{default:e}}var h=function(){function e(){var r=this;(0,d.default)(this,e);this.listeners=[];this.state={};this.public={getState:function e(){return(0,u.default)({},r.state)},dispatch:function e(r){return r},listen:this.listen.bind(this),subscribe:this.listen.bind(this)}}(0,f.default)(e,[{key:"bindActions",value:function e(t){var n=this;(0,o.default)(t).forEach(function(e){var r=t[e];if("function"===typeof r)return;var a=n["on"+(0,v.toUpperCamelCase)(r.type)];a&&m.default.addActionListener(r,a.bind(n))})}},{key:"exportPublicMethods",value:function e(r){var a=this;(0,o.default)(r).forEach(function(e){a.public[e]=r[e].bind(a)})}},{key:"setState",value:function e(r){(0,n.default)(this.state,r);var a=this.public.getState();this.listeners.forEach(function(e){return e(a)})}},{key:"listen",value:function e(r){var a=this;this.listeners.push(r);return function(){return a.unlisten(r)}}},{key:"unlisten",value:function e(r){var a=this.listeners.indexOf(r);a>-1&&this.listeners.splice(a,1)}}]);return e}();r.default=h},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/flux/flux.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});var s={};var u=0;var o={dispatch:function e(r,a,t,n){false;s[a]&&s[a].forEach(function(e){return e(n)});return n},addActionListener:function e(r,a){var t=r.id;if("function"!==typeof a)return;var n=s[t];n=n||(s[t]=[]);n.push(a);return function(){return o.removeActionListener({id:t},a)}},removeActionListener:function e(r,a){var t=r.id;if(s[t]){var n=s[t].indexOf(a);if(n>-1){s[t].splice(n,1);0===s[t].length&&(s[t]=null)}}},createActions:function e(r,a){for(var t=arguments.length,n=Array(t>2?t-2:0),s=2;s<t;s++)n[s-2]=arguments[s];var o=u++;var i=new(Function.prototype.bind.apply(r,[null].concat([{id:o,name:a}],n)));return i.public},createStore:function e(r,a){for(var t=arguments.length,n=Array(t>2?t-2:0),s=2;s<t;s++)n[s-2]=arguments[s];var o=new(Function.prototype.bind.apply(r,[null].concat(n)));false;return o.public}};r.default=o},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/flux/index.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});var t=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/flux/flux.js");var n=s(t);function s(e){return e&&e.__esModule?e:{default:e}}r.default=n.default},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/form/FormActions.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});var t=a("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/assign.js");var s=j(t);var n=a("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/get-prototype-of.js");var o=j(n);var i=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/classCallCheck.js");var u=j(i);var l=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/createClass.js");var d=j(l);var c=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/possibleConstructorReturn.js");var f=j(c);var v=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/inherits.js");var p=j(v);var m=a("./src/main/webapp/universal/node_modules/babel-runtime/core-js/promise.js");var b=j(m);var h=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/flux/ActionsBase.js");var _=j(h);function j(e){return e&&e.__esModule?e:{default:e}}var y=function e(r){return new b.default(function(e){return e(r)})};var w=function(e){(0,p.default)(n,e);function n(e,r,a){(0,u.default)(this,n);var t=(0,f.default)(this,(n.__proto__||(0,o.default)(n)).call(this,e));t.fieldsValidator=r;t.actionResolvers=(0,s.default)({load:y,reset:y,save:y,validate:y},a);t.registerActions({load:t.load,reset:t.reset,save:t.save,validateField:t.validateField,validate:t.validate});t.generateActions("update","saved","loaded","error","clearError");return t}(0,d.default)(n,[{key:"load",value:function e(){var a=this;for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];return function(e){var r;e(t);return(r=a.actionResolvers).load.apply(r,t).then(a.actions.loaded,function(e){return b.default.reject(a.actions.error(e))})}}},{key:"save",value:function e(a){var t=this;for(var r=arguments.length,n=Array(r>1?r-1:0),s=1;s<r;s++)n[s-1]=arguments[s];return function(e){var r;e(a);return(r=t.actions).validate.apply(r,[a].concat(n)).then(function(){var e;return(e=t.actionResolvers).save.apply(e,[a].concat(n)).then(t.actions.saved,function(e){return b.default.reject(t.actions.error(e))})})}}},{key:"reset",value:function e(a){var t=this;for(var r=arguments.length,n=Array(r>1?r-1:0),s=1;s<r;s++)n[s-1]=arguments[s];return function(e){var r;e(a);return(r=t.actionResolvers).reset.apply(r,[a].concat(n))}}},{key:"validateField",value:function e(r,a){var t=void 0;if(a){var n=this.fieldsValidator.validateField(a,r[a],r);if(n){var s;t=(s={},s[a]=n,s)}}else t=this.fieldsValidator.validateFields(r);if(t)return b.default.reject(this.actions.error({fieldErrors:t}))}},{key:"validate",value:function e(r){var a,t=this;var n=this.fieldsValidator.validateFields(r);if(n)return b.default.reject(this.actions.error({fieldErrors:n}));for(var s=arguments.length,o=Array(s>1?s-1:0),i=1;i<s;i++)o[i-1]=arguments[i];return(a=this.actionResolvers).validate.apply(a,[r].concat(o)).catch(function(e){return b.default.reject(t.actions.error(e))})}}]);return n}(_.default);r.default=w},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/form/FormStore.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});var t=a("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/keys.js");var i=x(t);var n=a("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/get-prototype-of.js");var s=x(n);var o=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/classCallCheck.js");var u=x(o);var l=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/createClass.js");var d=x(l);var c=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/possibleConstructorReturn.js");var f=x(c);var v=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/inherits.js");var p=x(v);var m=a("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/assign.js");var b=x(m);var h=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/flux/StoreBase.js");var _=x(h);var j=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/utils.js");var y=a("./src/main/webapp/universal/node_modules/lodash/omit.js");var w=x(y);var g=a("./src/main/webapp/universal/node_modules/lodash/cloneDeep.js");var F=x(g);function x(e){return e&&e.__esModule?e:{default:e}}var C={cleanValues:null,error:null,fieldErrors:{},isDirty:false,isLoading:false,isSaving:false,values:null};var k=function e(r){return(0,b.default)({},C,{cleanValues:r,values:r})};var S=function(e){(0,p.default)(n,e);function n(e,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:j.compareShallow;(0,u.default)(this,n);var t=(0,f.default)(this,(n.__proto__||(0,s.default)(n)).call(this));t.compareValues=a;t.state=k(r?(0,F.default)(r):{});t.bindActions(e);t.exportPublicMethods({getFieldError:t.getFieldError,getVal:t.getVal,compareValues:a});return t}(0,d.default)(n,[{key:"onLoad",value:function e(){this.setState({isLoading:true})}},{key:"onLoaded",value:function e(r){this.setState({cleanValues:(0,j.mergeShallow)(this.state.cleanValues,r),isLoading:false,values:(0,j.mergeShallow)(this.state.values,r)})}},{key:"onReset",value:function e(){this.setState(k(this.state.cleanValues))}},{key:"onSave",value:function e(){this.setState({isSaving:true,error:null,fieldErrors:{}})}},{key:"onSaved",value:function e(r){var a=(0,j.mergeShallow)(this.state.values,r);this.setState(k(a))}},{key:"onUpdate",value:function e(r){var a=this.state,t=a.values,n=a.fieldErrors,s=a.cleanValues;var o=(0,j.mergeShallow)(t,r);this.setState({isDirty:!this.compareValues(s,o),values:o,fieldErrors:(0,w.default)(n,(0,i.default)(r))})}},{key:"onError",value:function e(r){var a=("string"===typeof r?r:r.message)||"Something went wrong.";var t=r.title||"Error";var n=(0,j.mergeShallow)(this.state.fieldErrors,r.fieldErrors);this.setState({isLoading:false,isSaving:false,error:r.fieldErrors?this.state.error:{message:a,title:t},fieldErrors:n})}},{key:"onClearError",value:function e(r){this.setState({error:null,fieldErrors:r?{}:this.state.fieldErrors})}},{key:"getVal",value:function e(r){if(r)return this.state.values[r];return this.state.values}},{key:"getFieldError",value:function e(r){if(r)return this.state.fieldErrors[r];return this.state.fieldErrors}}]);return n}(_.default);r.default=S},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/form/getFieldsValidator.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});var t=a("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/keys.js");var s=i(t);var n=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/typeof.js");var o=i(n);function i(e){return e&&e.__esModule?e:{default:e}}var u="Invalid input";var l=function e(r,a,t,n){"object"===("undefined"===typeof r?"undefined":(0,o.default)(r))&&r.fn&&(r=r.fn);try{if(false===r(a,t))return n||u}catch(e){return n||e.message||e.title||u}};var d=function e(r,a,t){var n=void 0;Array.isArray(r)?r.some(function(e){return!!(n=l(e,a,t,e.msg))}):n=l(r,a,t,r.msg);return n};var c=function e(t,n){var r=(0,s.default)(t).reduce(function(e,r){var a=d(t[r],n[r],n);a&&(e[r]=a);return e},{});if((0,s.default)(r).length>0)return r;return null};var f=function e(n){return{validateFields:function e(r){return c(n,r)},validateField:function e(r,a,t){return d(n[r],a,t)}}};r.default=f},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/form/index.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});r.getFieldsValidator=r.FormStore=r.FormActions=void 0;var t=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/form/FormActions.js");var n=l(t);var s=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/form/FormStore.js");var o=l(s);var i=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/form/getFieldsValidator.js");var u=l(i);function l(e){return e&&e.__esModule?e:{default:e}}r.FormActions=n.default;r.FormStore=o.default;r.getFieldsValidator=u.default},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/index.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});r.getNormalizer=r.mergeDeep=r.FormProviderChildPropTypes=r.createFormProvider=r.createForm=void 0;var t=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/createForm/index.js");var n=u(t);var s=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/components/ProviderChildPropTypes.js");var o=u(s);var i=a("./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/utils.js");function u(e){return e&&e.__esModule?e:{default:e}}r.default=n.default;r.createForm=n.default;r.createFormProvider=t.createFormProvider;r.FormProviderChildPropTypes=o.default;r.mergeDeep=i.mergeDeep;r.getNormalizer=i.getNormalizer},"./src/main/webapp/universal/node_modules/@sqs/flux-form/lib/utils.js":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:true});r.getNormalizer=r.compareShallow=r.mergeDeep=r.mergeShallow=r.toUpperSnakeCase=r.toUpperCamelCase=r.isPromise=void 0;var t=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/extends.js");var o=w(t);var n=a("./src/main/webapp/universal/node_modules/babel-runtime/helpers/objectWithoutProperties.js");var i=w(n);var s=a("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/keys.js");var u=w(s);var l=a("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/assign.js");var d=w(l);var c=a("./src/main/webapp/universal/node_modules/lodash/camelCase.js");var f=w(c);var v=a("./src/main/webapp/universal/node_modules/lodash/snakeCase.js");var p=w(v);var m=a("./src/main/webapp/universal/node_modules/lodash/cloneDeep.js");var b=w(m);var h=a("./src/main/webapp/universal/node_modules/lodash/mergeWith.js");var _=w(h);var j=a("./src/main/webapp/universal/node_modules/lodash/isPlainObject.js");var y=w(j);function w(e){return e&&e.__esModule?e:{default:e}}var g=function e(r){return r};var F=r.isPromise=function e(r){return window.Promise&&r instanceof window.Promise||r&&"function"===typeof r.then&&"function"===typeof r.catch};var x=r.toUpperCamelCase=function e(r){return(0,f.default)(r).replace(/^./,function(e){return e.toUpperCase()})};var C=r.toUpperSnakeCase=function e(r){return(0,p.default)(r).toUpperCase()};var k=r.mergeShallow=function e(r,a){return(0,_.default)((0,d.default)({},r),a,function(e,r){if(void 0!==r)return r;return e})};var S=r.mergeDeep=function a(e,r){return(0,_.default)((0,d.default)({},e),r,function(e,r){if(void 0===r){if((0,y.default)(e))return(0,b.default)(e);return e}if((0,y.default)(r)){if((0,y.default)(e))return a(e,r);return(0,b.default)(r)}return r})};var q=r.compareShallow=function e(r,a){var t=(0,u.default)(r);var n=(0,u.default)(a);return t.length===n.length&&!n.some(function(e){return a[e]!==r[e]})};var A=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g;return function(e){var r=e.value,a=e.onChange,t=(0,i.default)(e,["value","onChange"]);return(0,o.default)({value:n(r),onChange:function e(r){return a(s(r))}},t)}};r.getNormalizer=A},"./src/main/webapp/universal/node_modules/lodash/snakeCase.js":function(e,r,a){var t=a("./src/main/webapp/universal/node_modules/lodash/_createCompounder.js");var n=t(function(e,r,a){return e+(a?"_":"")+r.toLowerCase()});e.exports=n}}]);
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/vendors~async-apps-coverpageconfig-socialicons~async-design-announcementbar~async-design-browser-ico~48de1117-edb99802ca237c1b6fad1-min.en-US.js.map