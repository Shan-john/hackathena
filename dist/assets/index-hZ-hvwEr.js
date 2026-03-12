(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Rg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Fc={exports:{}},zo={},Oc={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function r0(){if(om)return pt;om=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function y(N,re,Ne){this.props=N,this.context=re,this.refs=E,this.updater=Ne||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,re){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,re,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=y.prototype;function L(N,re,Ne){this.props=N,this.context=re,this.refs=E,this.updater=Ne||S}var b=L.prototype=new v;b.constructor=L,M(b,y.prototype),b.isPureReactComponent=!0;var C=Array.isArray,W=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function V(N,re,Ne){var z,ee={},ge=null,he=null;if(re!=null)for(z in re.ref!==void 0&&(he=re.ref),re.key!==void 0&&(ge=""+re.key),re)W.call(re,z)&&!U.hasOwnProperty(z)&&(ee[z]=re[z]);var Re=arguments.length-2;if(Re===1)ee.children=Ne;else if(1<Re){for(var Pe=Array(Re),Ce=0;Ce<Re;Ce++)Pe[Ce]=arguments[Ce+2];ee.children=Pe}if(N&&N.defaultProps)for(z in Re=N.defaultProps,Re)ee[z]===void 0&&(ee[z]=Re[z]);return{$$typeof:s,type:N,key:ge,ref:he,props:ee,_owner:F.current}}function P(N,re){return{$$typeof:s,type:N.type,key:re,ref:N.ref,props:N.props,_owner:N._owner}}function A(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function k(N){var re={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ne){return re[Ne]})}var ie=/\/+/g;function q(N,re){return typeof N=="object"&&N!==null&&N.key!=null?k(""+N.key):re.toString(36)}function ue(N,re,Ne,z,ee){var ge=typeof N;(ge==="undefined"||ge==="boolean")&&(N=null);var he=!1;if(N===null)he=!0;else switch(ge){case"string":case"number":he=!0;break;case"object":switch(N.$$typeof){case s:case e:he=!0}}if(he)return he=N,ee=ee(he),N=z===""?"."+q(he,0):z,C(ee)?(Ne="",N!=null&&(Ne=N.replace(ie,"$&/")+"/"),ue(ee,re,Ne,"",function(Ce){return Ce})):ee!=null&&(A(ee)&&(ee=P(ee,Ne+(!ee.key||he&&he.key===ee.key?"":(""+ee.key).replace(ie,"$&/")+"/")+N)),re.push(ee)),1;if(he=0,z=z===""?".":z+":",C(N))for(var Re=0;Re<N.length;Re++){ge=N[Re];var Pe=z+q(ge,Re);he+=ue(ge,re,Ne,Pe,ee)}else if(Pe=x(N),typeof Pe=="function")for(N=Pe.call(N),Re=0;!(ge=N.next()).done;)ge=ge.value,Pe=z+q(ge,Re++),he+=ue(ge,re,Ne,Pe,ee);else if(ge==="object")throw re=String(N),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return he}function ce(N,re,Ne){if(N==null)return N;var z=[],ee=0;return ue(N,z,"","",function(ge){return re.call(Ne,ge,ee++)}),z}function oe(N){if(N._status===-1){var re=N._result;re=re(),re.then(function(Ne){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ne)},function(Ne){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ne)}),N._status===-1&&(N._status=0,N._result=re)}if(N._status===1)return N._result.default;throw N._result}var de={current:null},B={transition:null},fe={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:B,ReactCurrentOwner:F};function le(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:ce,forEach:function(N,re,Ne){ce(N,function(){re.apply(this,arguments)},Ne)},count:function(N){var re=0;return ce(N,function(){re++}),re},toArray:function(N){return ce(N,function(re){return re})||[]},only:function(N){if(!A(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},pt.Component=y,pt.Fragment=t,pt.Profiler=a,pt.PureComponent=L,pt.StrictMode=r,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,pt.act=le,pt.cloneElement=function(N,re,Ne){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var z=M({},N.props),ee=N.key,ge=N.ref,he=N._owner;if(re!=null){if(re.ref!==void 0&&(ge=re.ref,he=F.current),re.key!==void 0&&(ee=""+re.key),N.type&&N.type.defaultProps)var Re=N.type.defaultProps;for(Pe in re)W.call(re,Pe)&&!U.hasOwnProperty(Pe)&&(z[Pe]=re[Pe]===void 0&&Re!==void 0?Re[Pe]:re[Pe])}var Pe=arguments.length-2;if(Pe===1)z.children=Ne;else if(1<Pe){Re=Array(Pe);for(var Ce=0;Ce<Pe;Ce++)Re[Ce]=arguments[Ce+2];z.children=Re}return{$$typeof:s,type:N.type,key:ee,ref:ge,props:z,_owner:he}},pt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},pt.createElement=V,pt.createFactory=function(N){var re=V.bind(null,N);return re.type=N,re},pt.createRef=function(){return{current:null}},pt.forwardRef=function(N){return{$$typeof:f,render:N}},pt.isValidElement=A,pt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:oe}},pt.memo=function(N,re){return{$$typeof:p,type:N,compare:re===void 0?null:re}},pt.startTransition=function(N){var re=B.transition;B.transition={};try{N()}finally{B.transition=re}},pt.unstable_act=le,pt.useCallback=function(N,re){return de.current.useCallback(N,re)},pt.useContext=function(N){return de.current.useContext(N)},pt.useDebugValue=function(){},pt.useDeferredValue=function(N){return de.current.useDeferredValue(N)},pt.useEffect=function(N,re){return de.current.useEffect(N,re)},pt.useId=function(){return de.current.useId()},pt.useImperativeHandle=function(N,re,Ne){return de.current.useImperativeHandle(N,re,Ne)},pt.useInsertionEffect=function(N,re){return de.current.useInsertionEffect(N,re)},pt.useLayoutEffect=function(N,re){return de.current.useLayoutEffect(N,re)},pt.useMemo=function(N,re){return de.current.useMemo(N,re)},pt.useReducer=function(N,re,Ne){return de.current.useReducer(N,re,Ne)},pt.useRef=function(N){return de.current.useRef(N)},pt.useState=function(N){return de.current.useState(N)},pt.useSyncExternalStore=function(N,re,Ne){return de.current.useSyncExternalStore(N,re,Ne)},pt.useTransition=function(){return de.current.useTransition()},pt.version="18.3.1",pt}var am;function md(){return am||(am=1,Oc.exports=r0()),Oc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function s0(){if(lm)return zo;lm=1;var s=md(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var g,_={},x=null,S=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(_[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)_[g]===void 0&&(_[g]=h[g]);return{$$typeof:e,type:f,key:x,ref:S,props:_,_owner:a.current}}return zo.Fragment=t,zo.jsx=c,zo.jsxs=c,zo}var um;function o0(){return um||(um=1,Fc.exports=s0()),Fc.exports}var Se=o0(),Q=md();const a0=Rg(Q);var dl={},kc={exports:{}},bn={},Bc={exports:{}},zc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function l0(){return cm||(cm=1,(function(s){function e(B,fe){var le=B.length;B.push(fe);e:for(;0<le;){var N=le-1>>>1,re=B[N];if(0<a(re,fe))B[N]=fe,B[le]=re,le=N;else break e}}function t(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var fe=B[0],le=B.pop();if(le!==fe){B[0]=le;e:for(var N=0,re=B.length,Ne=re>>>1;N<Ne;){var z=2*(N+1)-1,ee=B[z],ge=z+1,he=B[ge];if(0>a(ee,le))ge<re&&0>a(he,ee)?(B[N]=he,B[ge]=le,N=ge):(B[N]=ee,B[z]=le,N=z);else if(ge<re&&0>a(he,le))B[N]=he,B[ge]=le,N=ge;else break e}}return fe}function a(B,fe){var le=B.sortIndex-fe.sortIndex;return le!==0?le:B.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,_=null,x=3,S=!1,M=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(B){for(var fe=t(p);fe!==null;){if(fe.callback===null)r(p);else if(fe.startTime<=B)r(p),fe.sortIndex=fe.expirationTime,e(h,fe);else break;fe=t(p)}}function C(B){if(E=!1,b(B),!M)if(t(h)!==null)M=!0,oe(W);else{var fe=t(p);fe!==null&&de(C,fe.startTime-B)}}function W(B,fe){M=!1,E&&(E=!1,v(V),V=-1),S=!0;var le=x;try{for(b(fe),_=t(h);_!==null&&(!(_.expirationTime>fe)||B&&!k());){var N=_.callback;if(typeof N=="function"){_.callback=null,x=_.priorityLevel;var re=N(_.expirationTime<=fe);fe=s.unstable_now(),typeof re=="function"?_.callback=re:_===t(h)&&r(h),b(fe)}else r(h);_=t(h)}if(_!==null)var Ne=!0;else{var z=t(p);z!==null&&de(C,z.startTime-fe),Ne=!1}return Ne}finally{_=null,x=le,S=!1}}var F=!1,U=null,V=-1,P=5,A=-1;function k(){return!(s.unstable_now()-A<P)}function ie(){if(U!==null){var B=s.unstable_now();A=B;var fe=!0;try{fe=U(!0,B)}finally{fe?q():(F=!1,U=null)}}else F=!1}var q;if(typeof L=="function")q=function(){L(ie)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,ce=ue.port2;ue.port1.onmessage=ie,q=function(){ce.postMessage(null)}}else q=function(){y(ie,0)};function oe(B){U=B,F||(F=!0,q())}function de(B,fe){V=y(function(){B(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,oe(W))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var fe=3;break;default:fe=x}var le=x;x=fe;try{return B()}finally{x=le}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,fe){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var le=x;x=B;try{return fe()}finally{x=le}},s.unstable_scheduleCallback=function(B,fe,le){var N=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?N+le:N):le=N,B){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=le+re,B={id:g++,callback:fe,priorityLevel:B,startTime:le,expirationTime:re,sortIndex:-1},le>N?(B.sortIndex=le,e(p,B),t(h)===null&&B===t(p)&&(E?(v(V),V=-1):E=!0,de(C,le-N))):(B.sortIndex=re,e(h,B),M||S||(M=!0,oe(W))),B},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(B){var fe=x;return function(){var le=x;x=fe;try{return B.apply(this,arguments)}finally{x=le}}}})(zc)),zc}var fm;function u0(){return fm||(fm=1,Bc.exports=l0()),Bc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function c0(){if(dm)return bn;dm=1;var s=md(),e=u0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function x(n){return h.call(_,n)?!0:h.call(g,n)?!1:p.test(n)?_[n]=!0:(g[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,o,u,d,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,L);y[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,L);y[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,L);y[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,d,u)&&(o=null),u||d===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),k=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),B=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var le=Object.assign,N;function re(n){if(N===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var Ne=!1;function z(n,i){if(!n||Ne)return"";Ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var u=te}Reflect.construct(n,[],i)}else{try{i.call()}catch(te){u=te}n.call(i.prototype)}else{try{throw Error()}catch(te){u=te}n()}}catch(te){if(te&&u&&typeof te.stack=="string"){for(var d=te.stack.split(`
`),m=u.stack.split(`
`),w=d.length-1,I=m.length-1;1<=w&&0<=I&&d[w]!==m[I];)I--;for(;1<=w&&0<=I;w--,I--)if(d[w]!==m[I]){if(w!==1||I!==1)do if(w--,I--,0>I||d[w]!==m[I]){var O=`
`+d[w].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=w&&0<=I);break}}}finally{Ne=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?re(n):""}function ee(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=z(n.type,!1),n;case 11:return n=z(n.type.render,!1),n;case 1:return n=z(n.type,!0),n;default:return""}}function ge(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case F:return"Portal";case P:return"Profiler";case V:return"StrictMode";case q:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case ie:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ce:return i=n.displayName||null,i!==null?i:ge(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return ge(n(i))}catch{}}return null}function he(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Pe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ce(n){var i=Pe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){u=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function _t(n){n._valueTracker||(n._valueTracker=Ce(n))}function at(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Pe(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function At(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function X(n,i){var o=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function en(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Re(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(n,i){i=i.checked,i!=null&&b(n,"checked",i,!1)}function lt(n,i){ct(n,i);var o=Re(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Et(n,i.type,o):i.hasOwnProperty("defaultValue")&&Et(n,i.type,Re(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ke(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Et(n,i,o){(i!=="number"||At(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ye=Array.isArray;function D(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Re(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ye(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Re(o)}}function ve(n,i){var o=Re(i.value),u=Re(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function xe(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var be,Oe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function dt(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function Je(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function et(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Je(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var ze=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function rt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Le=null,ae=null,me=null;function Ue(n){if(n=To(n)){if(typeof Le!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ra(i),Le(n.stateNode,n.type,i))}}function Ie(n){ae?me?me.push(n):me=[n]:ae=n}function st(){if(ae){var n=ae,i=me;if(me=ae=null,Ue(n),i)for(n=0;n<i.length;n++)Ue(i[n])}}function Ut(n,i){return n(i)}function Yt(){}var xt=!1;function En(n,i,o){if(xt)return n(i,o);xt=!0;try{return Ut(n,i,o)}finally{xt=!1,(ae!==null||me!==null)&&(Yt(),st())}}function vn(n,i){var o=n.stateNode;if(o===null)return null;var u=Ra(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var as=!1;if(f)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){as=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{as=!1}function Pi(n,i,o,u,d,m,w,I,O){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(ye){this.onError(ye)}}var bi=!1,Dr=null,Ir=!1,Qi=null,aa={onError:function(n){bi=!0,Dr=n}};function ls(n,i,o,u,d,m,w,I,O){bi=!1,Dr=null,Pi.apply(aa,arguments)}function la(n,i,o,u,d,m,w,I,O){if(ls.apply(this,arguments),bi){if(bi){var te=Dr;bi=!1,Dr=null}else throw Error(t(198));Ir||(Ir=!0,Qi=te)}}function gi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ua(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ca(n){if(gi(n)!==n)throw Error(t(188))}function ru(n){var i=n.alternate;if(!i){if(i=gi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return ca(d),n;if(m===u)return ca(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var w=!1,I=d.child;I;){if(I===o){w=!0,o=d,u=m;break}if(I===u){w=!0,u=d,o=m;break}I=I.sibling}if(!w){for(I=m.child;I;){if(I===o){w=!0,o=m,u=d;break}if(I===u){w=!0,u=m,o=d;break}I=I.sibling}if(!w)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function R(n){return n=ru(n),n!==null?j(n):null}function j(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=j(n);if(i!==null)return i;n=n.sibling}return null}var ne=e.unstable_scheduleCallback,se=e.unstable_cancelCallback,$=e.unstable_shouldYield,Ae=e.unstable_requestPaint,we=e.unstable_now,Xe=e.unstable_getCurrentPriorityLevel,Ve=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,je=e.unstable_LowPriority,vt=e.unstable_IdlePriority,Rt=null,gt=null;function un(n){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:wt,qe=Math.log,Jn=Math.LN2;function wt(n){return n>>>=0,n===0?32:31-(qe(n)/Jn|0)|0}var cn=64,ei=4194304;function qt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vi(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,w=o&268435455;if(w!==0){var I=w&~d;I!==0?u=qt(I):(m&=w,m!==0&&(u=qt(m)))}else w=o&~d,w!==0?u=qt(w):m!==0&&(u=qt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-ot(i),d=1<<o,u|=n[o],i&=~d;return u}function Lt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gn(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-ot(m),I=1<<w,O=d[w];O===-1?((I&o)===0||(I&u)!==0)&&(d[w]=Lt(I,i)):O<=i&&(n.expiredLanes|=I),m&=~I}}function Li(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function _n(){var n=cn;return cn<<=1,(cn&4194240)===0&&(cn=64),n}function Wn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function wn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ot(i),n[i]=o}function fa(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-ot(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function su(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-ot(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var Pt=0;function kd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Bd,ou,zd,Hd,Vd,au=!1,da=[],Ji=null,er=null,tr=null,lo=new Map,uo=new Map,nr=[],Av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gd(n,i){switch(n){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":lo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(i.pointerId)}}function co(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=To(i),i!==null&&ou(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Rv(n,i,o,u,d){switch(i){case"focusin":return Ji=co(Ji,n,i,o,u,d),!0;case"dragenter":return er=co(er,n,i,o,u,d),!0;case"mouseover":return tr=co(tr,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return lo.set(m,co(lo.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,uo.set(m,co(uo.get(m)||null,n,i,o,u,d)),!0}return!1}function Wd(n){var i=Ur(n.target);if(i!==null){var o=gi(i);if(o!==null){if(i=o.tag,i===13){if(i=ua(o),i!==null){n.blockedOn=i,Vd(n.priority,function(){zd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ha(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=uu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Ct=u,o.target.dispatchEvent(u),Ct=null}else return i=To(o),i!==null&&ou(i),n.blockedOn=o,!1;i.shift()}return!0}function Xd(n,i,o){ha(n)&&o.delete(i)}function Cv(){au=!1,Ji!==null&&ha(Ji)&&(Ji=null),er!==null&&ha(er)&&(er=null),tr!==null&&ha(tr)&&(tr=null),lo.forEach(Xd),uo.forEach(Xd)}function fo(n,i){n.blockedOn===i&&(n.blockedOn=null,au||(au=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Cv)))}function ho(n){function i(d){return fo(d,n)}if(0<da.length){fo(da[0],n);for(var o=1;o<da.length;o++){var u=da[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Ji!==null&&fo(Ji,n),er!==null&&fo(er,n),tr!==null&&fo(tr,n),lo.forEach(i),uo.forEach(i),o=0;o<nr.length;o++)u=nr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<nr.length&&(o=nr[0],o.blockedOn===null);)Wd(o),o.blockedOn===null&&nr.shift()}var us=C.ReactCurrentBatchConfig,pa=!0;function Pv(n,i,o,u){var d=Pt,m=us.transition;us.transition=null;try{Pt=1,lu(n,i,o,u)}finally{Pt=d,us.transition=m}}function bv(n,i,o,u){var d=Pt,m=us.transition;us.transition=null;try{Pt=4,lu(n,i,o,u)}finally{Pt=d,us.transition=m}}function lu(n,i,o,u){if(pa){var d=uu(n,i,o,u);if(d===null)Au(n,i,u,ma,o),Gd(n,u);else if(Rv(d,n,i,o,u))u.stopPropagation();else if(Gd(n,u),i&4&&-1<Av.indexOf(n)){for(;d!==null;){var m=To(d);if(m!==null&&Bd(m),m=uu(n,i,o,u),m===null&&Au(n,i,u,ma,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else Au(n,i,u,null,o)}}var ma=null;function uu(n,i,o,u){if(ma=null,n=G(u),n=Ur(n),n!==null)if(i=gi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ua(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ma=n,null}function jd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Ve:return 1;case tt:return 4;case it:case je:return 16;case vt:return 536870912;default:return 16}default:return 16}}var ir=null,cu=null,ga=null;function $d(){if(ga)return ga;var n,i=cu,o=i.length,u,d="value"in ir?ir.value:ir.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var w=o-n;for(u=1;u<=w&&i[o-u]===d[m-u];u++);return ga=d.slice(n,1<u?1-u:void 0)}function va(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function _a(){return!0}function Yd(){return!1}function Nn(n){function i(o,u,d,m,w){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(o=n[I],this[I]=o?o(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?_a:Yd,this.isPropagationStopped=Yd,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),i}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fu=Nn(cs),po=le({},cs,{view:0,detail:0}),Lv=Nn(po),du,hu,mo,xa=le({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==mo&&(mo&&n.type==="mousemove"?(du=n.screenX-mo.screenX,hu=n.screenY-mo.screenY):hu=du=0,mo=n),du)},movementY:function(n){return"movementY"in n?n.movementY:hu}}),qd=Nn(xa),Dv=le({},xa,{dataTransfer:0}),Iv=Nn(Dv),Uv=le({},po,{relatedTarget:0}),pu=Nn(Uv),Nv=le({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=Nn(Nv),Ov=le({},cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),kv=Nn(Ov),Bv=le({},cs,{data:0}),Kd=Nn(Bv),zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Vv[n])?!!i[n]:!1}function mu(){return Gv}var Wv=le({},po,{key:function(n){if(n.key){var i=zv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=va(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Hv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(n){return n.type==="keypress"?va(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?va(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Xv=Nn(Wv),jv=le({},xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zd=Nn(jv),$v=le({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),Yv=Nn($v),qv=le({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=Nn(qv),Zv=le({},xa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=Nn(Zv),Jv=[9,13,27,32],gu=f&&"CompositionEvent"in window,go=null;f&&"documentMode"in document&&(go=document.documentMode);var e_=f&&"TextEvent"in window&&!go,Qd=f&&(!gu||go&&8<go&&11>=go),Jd=" ",eh=!1;function th(n,i){switch(n){case"keyup":return Jv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fs=!1;function t_(n,i){switch(n){case"compositionend":return nh(i);case"keypress":return i.which!==32?null:(eh=!0,Jd);case"textInput":return n=i.data,n===Jd&&eh?null:n;default:return null}}function n_(n,i){if(fs)return n==="compositionend"||!gu&&th(n,i)?(n=$d(),ga=cu=ir=null,fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Qd&&i.locale!=="ko"?null:i.data;default:return null}}var i_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ih(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!i_[n.type]:i==="textarea"}function rh(n,i,o,u){Ie(u),i=wa(i,"onChange"),0<i.length&&(o=new fu("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var vo=null,_o=null;function r_(n){Mh(n,0)}function ya(n){var i=gs(n);if(at(i))return n}function s_(n,i){if(n==="change")return i}var sh=!1;if(f){var vu;if(f){var _u="oninput"in document;if(!_u){var oh=document.createElement("div");oh.setAttribute("oninput","return;"),_u=typeof oh.oninput=="function"}vu=_u}else vu=!1;sh=vu&&(!document.documentMode||9<document.documentMode)}function ah(){vo&&(vo.detachEvent("onpropertychange",lh),_o=vo=null)}function lh(n){if(n.propertyName==="value"&&ya(_o)){var i=[];rh(i,_o,n,G(n)),En(r_,i)}}function o_(n,i,o){n==="focusin"?(ah(),vo=i,_o=o,vo.attachEvent("onpropertychange",lh)):n==="focusout"&&ah()}function a_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ya(_o)}function l_(n,i){if(n==="click")return ya(i)}function u_(n,i){if(n==="input"||n==="change")return ya(i)}function c_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ti=typeof Object.is=="function"?Object.is:c_;function xo(n,i){if(ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!ti(n[d],i[d]))return!1}return!0}function uh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ch(n,i){var o=uh(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=uh(o)}}function fh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?fh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function dh(){for(var n=window,i=At();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=At(n.document)}return i}function xu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function f_(n){var i=dh(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&fh(o.ownerDocument.documentElement,o)){if(u!==null&&xu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=ch(o,m);var w=ch(o,u);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var d_=f&&"documentMode"in document&&11>=document.documentMode,ds=null,yu=null,yo=null,Su=!1;function hh(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Su||ds==null||ds!==At(u)||(u=ds,"selectionStart"in u&&xu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),yo&&xo(yo,u)||(yo=u,u=wa(yu,"onSelect"),0<u.length&&(i=new fu("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=ds)))}function Sa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var hs={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Mu={},ph={};f&&(ph=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Ma(n){if(Mu[n])return Mu[n];if(!hs[n])return n;var i=hs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in ph)return Mu[n]=i[o];return n}var mh=Ma("animationend"),gh=Ma("animationiteration"),vh=Ma("animationstart"),_h=Ma("transitionend"),xh=new Map,yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(n,i){xh.set(n,i),l(i,[n])}for(var Eu=0;Eu<yh.length;Eu++){var wu=yh[Eu],h_=wu.toLowerCase(),p_=wu[0].toUpperCase()+wu.slice(1);rr(h_,"on"+p_)}rr(mh,"onAnimationEnd"),rr(gh,"onAnimationIteration"),rr(vh,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(_h,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m_=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function Sh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,la(u,i,void 0,n),n.currentTarget=null}function Mh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var w=u.length-1;0<=w;w--){var I=u[w],O=I.instance,te=I.currentTarget;if(I=I.listener,O!==m&&d.isPropagationStopped())break e;Sh(d,I,te),m=O}else for(w=0;w<u.length;w++){if(I=u[w],O=I.instance,te=I.currentTarget,I=I.listener,O!==m&&d.isPropagationStopped())break e;Sh(d,I,te),m=O}}}if(Ir)throw n=Qi,Ir=!1,Qi=null,n}function Nt(n,i){var o=i[Du];o===void 0&&(o=i[Du]=new Set);var u=n+"__bubble";o.has(u)||(Eh(i,n,2,!1),o.add(u))}function Tu(n,i,o){var u=0;i&&(u|=4),Eh(o,n,u,i)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function Mo(n){if(!n[Ea]){n[Ea]=!0,r.forEach(function(o){o!=="selectionchange"&&(m_.has(o)||Tu(o,!1,n),Tu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ea]||(i[Ea]=!0,Tu("selectionchange",!1,i))}}function Eh(n,i,o,u){switch(jd(i)){case 1:var d=Pv;break;case 4:d=bv;break;default:d=lu}o=d.bind(null,i,o,n),d=void 0,!as||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Au(n,i,o,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var I=u.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(w===4)for(w=u.return;w!==null;){var O=w.tag;if((O===3||O===4)&&(O=w.stateNode.containerInfo,O===d||O.nodeType===8&&O.parentNode===d))return;w=w.return}for(;I!==null;){if(w=Ur(I),w===null)return;if(O=w.tag,O===5||O===6){u=m=w;continue e}I=I.parentNode}}u=u.return}En(function(){var te=m,ye=G(o),Me=[];e:{var _e=xh.get(n);if(_e!==void 0){var Fe=fu,He=n;switch(n){case"keypress":if(va(o)===0)break e;case"keydown":case"keyup":Fe=Xv;break;case"focusin":He="focus",Fe=pu;break;case"focusout":He="blur",Fe=pu;break;case"beforeblur":case"afterblur":Fe=pu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=Iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=Yv;break;case mh:case gh:case vh:Fe=Fv;break;case _h:Fe=Kv;break;case"scroll":Fe=Lv;break;case"wheel":Fe=Qv;break;case"copy":case"cut":case"paste":Fe=kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Zd}var Ge=(i&4)!==0,Xt=!Ge&&n==="scroll",Y=Ge?_e!==null?_e+"Capture":null:_e;Ge=[];for(var H=te,K;H!==null;){K=H;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,Y!==null&&(Te=vn(H,Y),Te!=null&&Ge.push(Eo(H,Te,K)))),Xt)break;H=H.return}0<Ge.length&&(_e=new Fe(_e,He,null,o,ye),Me.push({event:_e,listeners:Ge}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",_e&&o!==Ct&&(He=o.relatedTarget||o.fromElement)&&(Ur(He)||He[Di]))break e;if((Fe||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,Fe?(He=o.relatedTarget||o.toElement,Fe=te,He=He?Ur(He):null,He!==null&&(Xt=gi(He),He!==Xt||He.tag!==5&&He.tag!==6)&&(He=null)):(Fe=null,He=te),Fe!==He)){if(Ge=qd,Te="onMouseLeave",Y="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ge=Zd,Te="onPointerLeave",Y="onPointerEnter",H="pointer"),Xt=Fe==null?_e:gs(Fe),K=He==null?_e:gs(He),_e=new Ge(Te,H+"leave",Fe,o,ye),_e.target=Xt,_e.relatedTarget=K,Te=null,Ur(ye)===te&&(Ge=new Ge(Y,H+"enter",He,o,ye),Ge.target=K,Ge.relatedTarget=Xt,Te=Ge),Xt=Te,Fe&&He)t:{for(Ge=Fe,Y=He,H=0,K=Ge;K;K=ps(K))H++;for(K=0,Te=Y;Te;Te=ps(Te))K++;for(;0<H-K;)Ge=ps(Ge),H--;for(;0<K-H;)Y=ps(Y),K--;for(;H--;){if(Ge===Y||Y!==null&&Ge===Y.alternate)break t;Ge=ps(Ge),Y=ps(Y)}Ge=null}else Ge=null;Fe!==null&&wh(Me,_e,Fe,Ge,!1),He!==null&&Xt!==null&&wh(Me,Xt,He,Ge,!0)}}e:{if(_e=te?gs(te):window,Fe=_e.nodeName&&_e.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&_e.type==="file")var $e=s_;else if(ih(_e))if(sh)$e=u_;else{$e=a_;var Ze=o_}else(Fe=_e.nodeName)&&Fe.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&($e=l_);if($e&&($e=$e(n,te))){rh(Me,$e,o,ye);break e}Ze&&Ze(n,_e,te),n==="focusout"&&(Ze=_e._wrapperState)&&Ze.controlled&&_e.type==="number"&&Et(_e,"number",_e.value)}switch(Ze=te?gs(te):window,n){case"focusin":(ih(Ze)||Ze.contentEditable==="true")&&(ds=Ze,yu=te,yo=null);break;case"focusout":yo=yu=ds=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,hh(Me,o,ye);break;case"selectionchange":if(d_)break;case"keydown":case"keyup":hh(Me,o,ye)}var Qe;if(gu)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else fs?th(n,o)&&(nt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(Qd&&o.locale!=="ko"&&(fs||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&fs&&(Qe=$d()):(ir=ye,cu="value"in ir?ir.value:ir.textContent,fs=!0)),Ze=wa(te,nt),0<Ze.length&&(nt=new Kd(nt,n,null,o,ye),Me.push({event:nt,listeners:Ze}),Qe?nt.data=Qe:(Qe=nh(o),Qe!==null&&(nt.data=Qe)))),(Qe=e_?t_(n,o):n_(n,o))&&(te=wa(te,"onBeforeInput"),0<te.length&&(ye=new Kd("onBeforeInput","beforeinput",null,o,ye),Me.push({event:ye,listeners:te}),ye.data=Qe))}Mh(Me,i)})}function Eo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function wa(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=vn(n,o),m!=null&&u.unshift(Eo(n,m,d)),m=vn(n,i),m!=null&&u.push(Eo(n,m,d))),n=n.return}return u}function ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function wh(n,i,o,u,d){for(var m=i._reactName,w=[];o!==null&&o!==u;){var I=o,O=I.alternate,te=I.stateNode;if(O!==null&&O===u)break;I.tag===5&&te!==null&&(I=te,d?(O=vn(o,m),O!=null&&w.unshift(Eo(o,O,I))):d||(O=vn(o,m),O!=null&&w.push(Eo(o,O,I)))),o=o.return}w.length!==0&&n.push({event:i,listeners:w})}var g_=/\r\n?/g,v_=/\u0000|\uFFFD/g;function Th(n){return(typeof n=="string"?n:""+n).replace(g_,`
`).replace(v_,"")}function Ta(n,i,o){if(i=Th(i),Th(n)!==i&&o)throw Error(t(425))}function Aa(){}var Ru=null,Cu=null;function Pu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var bu=typeof setTimeout=="function"?setTimeout:void 0,__=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,x_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(n){return Ah.resolve(null).then(n).catch(y_)}:bu;function y_(n){setTimeout(function(){throw n})}function Lu(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),ho(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);ho(i)}function sr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Rh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ms=Math.random().toString(36).slice(2),_i="__reactFiber$"+ms,wo="__reactProps$"+ms,Di="__reactContainer$"+ms,Du="__reactEvents$"+ms,S_="__reactListeners$"+ms,M_="__reactHandles$"+ms;function Ur(n){var i=n[_i];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Di]||o[_i]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Rh(n);n!==null;){if(o=n[_i])return o;n=Rh(n)}return i}n=o,o=n.parentNode}return null}function To(n){return n=n[_i]||n[Di],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ra(n){return n[wo]||null}var Iu=[],vs=-1;function or(n){return{current:n}}function Ft(n){0>vs||(n.current=Iu[vs],Iu[vs]=null,vs--)}function Dt(n,i){vs++,Iu[vs]=n.current,n.current=i}var ar={},fn=or(ar),Tn=or(!1),Nr=ar;function _s(n,i){var o=n.type.contextTypes;if(!o)return ar;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function An(n){return n=n.childContextTypes,n!=null}function Ca(){Ft(Tn),Ft(fn)}function Ch(n,i,o){if(fn.current!==ar)throw Error(t(168));Dt(fn,i),Dt(Tn,o)}function Ph(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,he(n)||"Unknown",d));return le({},o,u)}function Pa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ar,Nr=fn.current,Dt(fn,n),Dt(Tn,Tn.current),!0}function bh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Ph(n,i,Nr),u.__reactInternalMemoizedMergedChildContext=n,Ft(Tn),Ft(fn),Dt(fn,n)):Ft(Tn),Dt(Tn,o)}var Ii=null,ba=!1,Uu=!1;function Lh(n){Ii===null?Ii=[n]:Ii.push(n)}function E_(n){ba=!0,Lh(n)}function lr(){if(!Uu&&Ii!==null){Uu=!0;var n=0,i=Pt;try{var o=Ii;for(Pt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ii=null,ba=!1}catch(d){throw Ii!==null&&(Ii=Ii.slice(n+1)),ne(Ve,lr),d}finally{Pt=i,Uu=!1}}return null}var xs=[],ys=0,La=null,Da=0,Xn=[],jn=0,Fr=null,Ui=1,Ni="";function Or(n,i){xs[ys++]=Da,xs[ys++]=La,La=n,Da=i}function Dh(n,i,o){Xn[jn++]=Ui,Xn[jn++]=Ni,Xn[jn++]=Fr,Fr=n;var u=Ui;n=Ni;var d=32-ot(u)-1;u&=~(1<<d),o+=1;var m=32-ot(i)+d;if(30<m){var w=d-d%5;m=(u&(1<<w)-1).toString(32),u>>=w,d-=w,Ui=1<<32-ot(i)+d|o<<d|u,Ni=m+n}else Ui=1<<m|o<<d|u,Ni=n}function Nu(n){n.return!==null&&(Or(n,1),Dh(n,1,0))}function Fu(n){for(;n===La;)La=xs[--ys],xs[ys]=null,Da=xs[--ys],xs[ys]=null;for(;n===Fr;)Fr=Xn[--jn],Xn[jn]=null,Ni=Xn[--jn],Xn[jn]=null,Ui=Xn[--jn],Xn[jn]=null}var Fn=null,On=null,Ot=!1,ni=null;function Ih(n,i){var o=Kn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Uh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Fn=n,On=sr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Fn=n,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Fr!==null?{id:Ui,overflow:Ni}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Kn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Fn=n,On=null,!0):!1;default:return!1}}function Ou(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ku(n){if(Ot){var i=On;if(i){var o=i;if(!Uh(n,i)){if(Ou(n))throw Error(t(418));i=sr(o.nextSibling);var u=Fn;i&&Uh(n,i)?Ih(u,o):(n.flags=n.flags&-4097|2,Ot=!1,Fn=n)}}else{if(Ou(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ot=!1,Fn=n}}}function Nh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Fn=n}function Ia(n){if(n!==Fn)return!1;if(!Ot)return Nh(n),Ot=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Pu(n.type,n.memoizedProps)),i&&(i=On)){if(Ou(n))throw Fh(),Error(t(418));for(;i;)Ih(n,i),i=sr(i.nextSibling)}if(Nh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){On=sr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}On=null}}else On=Fn?sr(n.stateNode.nextSibling):null;return!0}function Fh(){for(var n=On;n;)n=sr(n.nextSibling)}function Ss(){On=Fn=null,Ot=!1}function Bu(n){ni===null?ni=[n]:ni.push(n)}var w_=C.ReactCurrentBatchConfig;function Ao(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var I=d.refs;w===null?delete I[m]:I[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ua(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Oh(n){var i=n._init;return i(n._payload)}function kh(n){function i(Y,H){if(n){var K=Y.deletions;K===null?(Y.deletions=[H],Y.flags|=16):K.push(H)}}function o(Y,H){if(!n)return null;for(;H!==null;)i(Y,H),H=H.sibling;return null}function u(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function d(Y,H){return Y=gr(Y,H),Y.index=0,Y.sibling=null,Y}function m(Y,H,K){return Y.index=K,n?(K=Y.alternate,K!==null?(K=K.index,K<H?(Y.flags|=2,H):K):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function w(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function I(Y,H,K,Te){return H===null||H.tag!==6?(H=bc(K,Y.mode,Te),H.return=Y,H):(H=d(H,K),H.return=Y,H)}function O(Y,H,K,Te){var $e=K.type;return $e===U?ye(Y,H,K.props.children,Te,K.key):H!==null&&(H.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===oe&&Oh($e)===H.type)?(Te=d(H,K.props),Te.ref=Ao(Y,H,K),Te.return=Y,Te):(Te=rl(K.type,K.key,K.props,null,Y.mode,Te),Te.ref=Ao(Y,H,K),Te.return=Y,Te)}function te(Y,H,K,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=Lc(K,Y.mode,Te),H.return=Y,H):(H=d(H,K.children||[]),H.return=Y,H)}function ye(Y,H,K,Te,$e){return H===null||H.tag!==7?(H=Xr(K,Y.mode,Te,$e),H.return=Y,H):(H=d(H,K),H.return=Y,H)}function Me(Y,H,K){if(typeof H=="string"&&H!==""||typeof H=="number")return H=bc(""+H,Y.mode,K),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case W:return K=rl(H.type,H.key,H.props,null,Y.mode,K),K.ref=Ao(Y,null,H),K.return=Y,K;case F:return H=Lc(H,Y.mode,K),H.return=Y,H;case oe:var Te=H._init;return Me(Y,Te(H._payload),K)}if(Ye(H)||fe(H))return H=Xr(H,Y.mode,K,null),H.return=Y,H;Ua(Y,H)}return null}function _e(Y,H,K,Te){var $e=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return $e!==null?null:I(Y,H,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case W:return K.key===$e?O(Y,H,K,Te):null;case F:return K.key===$e?te(Y,H,K,Te):null;case oe:return $e=K._init,_e(Y,H,$e(K._payload),Te)}if(Ye(K)||fe(K))return $e!==null?null:ye(Y,H,K,Te,null);Ua(Y,K)}return null}function Fe(Y,H,K,Te,$e){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(K)||null,I(H,Y,""+Te,$e);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case W:return Y=Y.get(Te.key===null?K:Te.key)||null,O(H,Y,Te,$e);case F:return Y=Y.get(Te.key===null?K:Te.key)||null,te(H,Y,Te,$e);case oe:var Ze=Te._init;return Fe(Y,H,K,Ze(Te._payload),$e)}if(Ye(Te)||fe(Te))return Y=Y.get(K)||null,ye(H,Y,Te,$e,null);Ua(H,Te)}return null}function He(Y,H,K,Te){for(var $e=null,Ze=null,Qe=H,nt=H=0,rn=null;Qe!==null&&nt<K.length;nt++){Qe.index>nt?(rn=Qe,Qe=null):rn=Qe.sibling;var Tt=_e(Y,Qe,K[nt],Te);if(Tt===null){Qe===null&&(Qe=rn);break}n&&Qe&&Tt.alternate===null&&i(Y,Qe),H=m(Tt,H,nt),Ze===null?$e=Tt:Ze.sibling=Tt,Ze=Tt,Qe=rn}if(nt===K.length)return o(Y,Qe),Ot&&Or(Y,nt),$e;if(Qe===null){for(;nt<K.length;nt++)Qe=Me(Y,K[nt],Te),Qe!==null&&(H=m(Qe,H,nt),Ze===null?$e=Qe:Ze.sibling=Qe,Ze=Qe);return Ot&&Or(Y,nt),$e}for(Qe=u(Y,Qe);nt<K.length;nt++)rn=Fe(Qe,Y,nt,K[nt],Te),rn!==null&&(n&&rn.alternate!==null&&Qe.delete(rn.key===null?nt:rn.key),H=m(rn,H,nt),Ze===null?$e=rn:Ze.sibling=rn,Ze=rn);return n&&Qe.forEach(function(vr){return i(Y,vr)}),Ot&&Or(Y,nt),$e}function Ge(Y,H,K,Te){var $e=fe(K);if(typeof $e!="function")throw Error(t(150));if(K=$e.call(K),K==null)throw Error(t(151));for(var Ze=$e=null,Qe=H,nt=H=0,rn=null,Tt=K.next();Qe!==null&&!Tt.done;nt++,Tt=K.next()){Qe.index>nt?(rn=Qe,Qe=null):rn=Qe.sibling;var vr=_e(Y,Qe,Tt.value,Te);if(vr===null){Qe===null&&(Qe=rn);break}n&&Qe&&vr.alternate===null&&i(Y,Qe),H=m(vr,H,nt),Ze===null?$e=vr:Ze.sibling=vr,Ze=vr,Qe=rn}if(Tt.done)return o(Y,Qe),Ot&&Or(Y,nt),$e;if(Qe===null){for(;!Tt.done;nt++,Tt=K.next())Tt=Me(Y,Tt.value,Te),Tt!==null&&(H=m(Tt,H,nt),Ze===null?$e=Tt:Ze.sibling=Tt,Ze=Tt);return Ot&&Or(Y,nt),$e}for(Qe=u(Y,Qe);!Tt.done;nt++,Tt=K.next())Tt=Fe(Qe,Y,nt,Tt.value,Te),Tt!==null&&(n&&Tt.alternate!==null&&Qe.delete(Tt.key===null?nt:Tt.key),H=m(Tt,H,nt),Ze===null?$e=Tt:Ze.sibling=Tt,Ze=Tt);return n&&Qe.forEach(function(i0){return i(Y,i0)}),Ot&&Or(Y,nt),$e}function Xt(Y,H,K,Te){if(typeof K=="object"&&K!==null&&K.type===U&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case W:e:{for(var $e=K.key,Ze=H;Ze!==null;){if(Ze.key===$e){if($e=K.type,$e===U){if(Ze.tag===7){o(Y,Ze.sibling),H=d(Ze,K.props.children),H.return=Y,Y=H;break e}}else if(Ze.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===oe&&Oh($e)===Ze.type){o(Y,Ze.sibling),H=d(Ze,K.props),H.ref=Ao(Y,Ze,K),H.return=Y,Y=H;break e}o(Y,Ze);break}else i(Y,Ze);Ze=Ze.sibling}K.type===U?(H=Xr(K.props.children,Y.mode,Te,K.key),H.return=Y,Y=H):(Te=rl(K.type,K.key,K.props,null,Y.mode,Te),Te.ref=Ao(Y,H,K),Te.return=Y,Y=Te)}return w(Y);case F:e:{for(Ze=K.key;H!==null;){if(H.key===Ze)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){o(Y,H.sibling),H=d(H,K.children||[]),H.return=Y,Y=H;break e}else{o(Y,H);break}else i(Y,H);H=H.sibling}H=Lc(K,Y.mode,Te),H.return=Y,Y=H}return w(Y);case oe:return Ze=K._init,Xt(Y,H,Ze(K._payload),Te)}if(Ye(K))return He(Y,H,K,Te);if(fe(K))return Ge(Y,H,K,Te);Ua(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,H!==null&&H.tag===6?(o(Y,H.sibling),H=d(H,K),H.return=Y,Y=H):(o(Y,H),H=bc(K,Y.mode,Te),H.return=Y,Y=H),w(Y)):o(Y,H)}return Xt}var Ms=kh(!0),Bh=kh(!1),Na=or(null),Fa=null,Es=null,zu=null;function Hu(){zu=Es=Fa=null}function Vu(n){var i=Na.current;Ft(Na),n._currentValue=i}function Gu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function ws(n,i){Fa=n,zu=Es=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Rn=!0),n.firstContext=null)}function $n(n){var i=n._currentValue;if(zu!==n)if(n={context:n,memoizedValue:i,next:null},Es===null){if(Fa===null)throw Error(t(308));Es=n,Fa.dependencies={lanes:0,firstContext:n}}else Es=Es.next=n;return i}var kr=null;function Wu(n){kr===null?kr=[n]:kr.push(n)}function zh(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Wu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Fi(n,u)}function Fi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ur=!1;function Xu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Oi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function cr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(yt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Fi(n,o)}return d=u.interleaved,d===null?(i.next=i,Wu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Fi(n,o)}function Oa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,su(n,o)}}function Vh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=w:m=m.next=w,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function ka(n,i,o,u){var d=n.updateQueue;ur=!1;var m=d.firstBaseUpdate,w=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var O=I,te=O.next;O.next=null,w===null?m=te:w.next=te,w=O;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,I=ye.lastBaseUpdate,I!==w&&(I===null?ye.firstBaseUpdate=te:I.next=te,ye.lastBaseUpdate=O))}if(m!==null){var Me=d.baseState;w=0,ye=te=O=null,I=m;do{var _e=I.lane,Fe=I.eventTime;if((u&_e)===_e){ye!==null&&(ye=ye.next={eventTime:Fe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var He=n,Ge=I;switch(_e=i,Fe=o,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){Me=He.call(Fe,Me,_e);break e}Me=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,_e=typeof He=="function"?He.call(Fe,Me,_e):He,_e==null)break e;Me=le({},Me,_e);break e;case 2:ur=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,_e=d.effects,_e===null?d.effects=[I]:_e.push(I))}else Fe={eventTime:Fe,lane:_e,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ye===null?(te=ye=Fe,O=Me):ye=ye.next=Fe,w|=_e;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;_e=I,I=_e.next,_e.next=null,d.lastBaseUpdate=_e,d.shared.pending=null}}while(!0);if(ye===null&&(O=Me),d.baseState=O,d.firstBaseUpdate=te,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Hr|=w,n.lanes=w,n.memoizedState=Me}}function Gh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Ro={},xi=or(Ro),Co=or(Ro),Po=or(Ro);function Br(n){if(n===Ro)throw Error(t(174));return n}function ju(n,i){switch(Dt(Po,i),Dt(Co,n),Dt(xi,Ro),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=We(i,n)}Ft(xi),Dt(xi,i)}function Ts(){Ft(xi),Ft(Co),Ft(Po)}function Wh(n){Br(Po.current);var i=Br(xi.current),o=We(i,n.type);i!==o&&(Dt(Co,n),Dt(xi,o))}function $u(n){Co.current===n&&(Ft(xi),Ft(Co))}var kt=or(0);function Ba(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yu=[];function qu(){for(var n=0;n<Yu.length;n++)Yu[n]._workInProgressVersionPrimary=null;Yu.length=0}var za=C.ReactCurrentDispatcher,Ku=C.ReactCurrentBatchConfig,zr=0,Bt=null,Kt=null,tn=null,Ha=!1,bo=!1,Lo=0,T_=0;function dn(){throw Error(t(321))}function Zu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ti(n[o],i[o]))return!1;return!0}function Qu(n,i,o,u,d,m){if(zr=m,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,za.current=n===null||n.memoizedState===null?P_:b_,n=o(u,d),bo){m=0;do{if(bo=!1,Lo=0,25<=m)throw Error(t(301));m+=1,tn=Kt=null,i.updateQueue=null,za.current=L_,n=o(u,d)}while(bo)}if(za.current=Wa,i=Kt!==null&&Kt.next!==null,zr=0,tn=Kt=Bt=null,Ha=!1,i)throw Error(t(300));return n}function Ju(){var n=Lo!==0;return Lo=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Bt.memoizedState=tn=n:tn=tn.next=n,tn}function Yn(){if(Kt===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=Kt.next;var i=tn===null?Bt.memoizedState:tn.next;if(i!==null)tn=i,Kt=n;else{if(n===null)throw Error(t(310));Kt=n,n={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},tn===null?Bt.memoizedState=tn=n:tn=tn.next=n}return tn}function Do(n,i){return typeof i=="function"?i(n):i}function ec(n){var i=Yn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Kt,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var w=d.next;d.next=m.next,m.next=w}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var I=w=null,O=null,te=m;do{var ye=te.lane;if((zr&ye)===ye)O!==null&&(O=O.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),u=te.hasEagerState?te.eagerState:n(u,te.action);else{var Me={lane:ye,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};O===null?(I=O=Me,w=u):O=O.next=Me,Bt.lanes|=ye,Hr|=ye}te=te.next}while(te!==null&&te!==m);O===null?w=u:O.next=I,ti(u,i.memoizedState)||(Rn=!0),i.memoizedState=u,i.baseState=w,i.baseQueue=O,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Bt.lanes|=m,Hr|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function tc(n){var i=Yn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var w=d=d.next;do m=n(m,w.action),w=w.next;while(w!==d);ti(m,i.memoizedState)||(Rn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function Xh(){}function jh(n,i){var o=Bt,u=Yn(),d=i(),m=!ti(u.memoizedState,d);if(m&&(u.memoizedState=d,Rn=!0),u=u.queue,nc(qh.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,Io(9,Yh.bind(null,o,u,d,i),void 0,null),nn===null)throw Error(t(349));(zr&30)!==0||$h(o,i,d)}return d}function $h(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Yh(n,i,o,u){i.value=o,i.getSnapshot=u,Kh(i)&&Zh(n)}function qh(n,i,o){return o(function(){Kh(i)&&Zh(n)})}function Kh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ti(n,o)}catch{return!0}}function Zh(n){var i=Fi(n,1);i!==null&&oi(i,n,1,-1)}function Qh(n){var i=yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:n},i.queue=n,n=n.dispatch=C_.bind(null,Bt,n),[i.memoizedState,n]}function Io(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function Jh(){return Yn().memoizedState}function Va(n,i,o,u){var d=yi();Bt.flags|=n,d.memoizedState=Io(1|i,o,void 0,u===void 0?null:u)}function Ga(n,i,o,u){var d=Yn();u=u===void 0?null:u;var m=void 0;if(Kt!==null){var w=Kt.memoizedState;if(m=w.destroy,u!==null&&Zu(u,w.deps)){d.memoizedState=Io(i,o,m,u);return}}Bt.flags|=n,d.memoizedState=Io(1|i,o,m,u)}function ep(n,i){return Va(8390656,8,n,i)}function nc(n,i){return Ga(2048,8,n,i)}function tp(n,i){return Ga(4,2,n,i)}function np(n,i){return Ga(4,4,n,i)}function ip(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function rp(n,i,o){return o=o!=null?o.concat([n]):null,Ga(4,4,ip.bind(null,i,n),o)}function ic(){}function sp(n,i){var o=Yn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Zu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function op(n,i){var o=Yn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Zu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function ap(n,i,o){return(zr&21)===0?(n.baseState&&(n.baseState=!1,Rn=!0),n.memoizedState=o):(ti(o,i)||(o=_n(),Bt.lanes|=o,Hr|=o,n.baseState=!0),i)}function A_(n,i){var o=Pt;Pt=o!==0&&4>o?o:4,n(!0);var u=Ku.transition;Ku.transition={};try{n(!1),i()}finally{Pt=o,Ku.transition=u}}function lp(){return Yn().memoizedState}function R_(n,i,o){var u=pr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},up(n))cp(i,o);else if(o=zh(n,i,o,u),o!==null){var d=yn();oi(o,n,u,d),fp(o,i,u)}}function C_(n,i,o){var u=pr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(up(n))cp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,I=m(w,o);if(d.hasEagerState=!0,d.eagerState=I,ti(I,w)){var O=i.interleaved;O===null?(d.next=d,Wu(i)):(d.next=O.next,O.next=d),i.interleaved=d;return}}catch{}finally{}o=zh(n,i,d,u),o!==null&&(d=yn(),oi(o,n,u,d),fp(o,i,u))}}function up(n){var i=n.alternate;return n===Bt||i!==null&&i===Bt}function cp(n,i){bo=Ha=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function fp(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,su(n,o)}}var Wa={readContext:$n,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},P_={readContext:$n,useCallback:function(n,i){return yi().memoizedState=[n,i===void 0?null:i],n},useContext:$n,useEffect:ep,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Va(4194308,4,ip.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Va(4194308,4,n,i)},useInsertionEffect:function(n,i){return Va(4,2,n,i)},useMemo:function(n,i){var o=yi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=yi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=R_.bind(null,Bt,n),[u.memoizedState,n]},useRef:function(n){var i=yi();return n={current:n},i.memoizedState=n},useState:Qh,useDebugValue:ic,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=Qh(!1),i=n[0];return n=A_.bind(null,n[1]),yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Bt,d=yi();if(Ot){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),nn===null)throw Error(t(349));(zr&30)!==0||$h(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,ep(qh.bind(null,u,m,n),[n]),u.flags|=2048,Io(9,Yh.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=yi(),i=nn.identifierPrefix;if(Ot){var o=Ni,u=Ui;o=(u&~(1<<32-ot(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Lo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=T_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},b_={readContext:$n,useCallback:sp,useContext:$n,useEffect:nc,useImperativeHandle:rp,useInsertionEffect:tp,useLayoutEffect:np,useMemo:op,useReducer:ec,useRef:Jh,useState:function(){return ec(Do)},useDebugValue:ic,useDeferredValue:function(n){var i=Yn();return ap(i,Kt.memoizedState,n)},useTransition:function(){var n=ec(Do)[0],i=Yn().memoizedState;return[n,i]},useMutableSource:Xh,useSyncExternalStore:jh,useId:lp,unstable_isNewReconciler:!1},L_={readContext:$n,useCallback:sp,useContext:$n,useEffect:nc,useImperativeHandle:rp,useInsertionEffect:tp,useLayoutEffect:np,useMemo:op,useReducer:tc,useRef:Jh,useState:function(){return tc(Do)},useDebugValue:ic,useDeferredValue:function(n){var i=Yn();return Kt===null?i.memoizedState=n:ap(i,Kt.memoizedState,n)},useTransition:function(){var n=tc(Do)[0],i=Yn().memoizedState;return[n,i]},useMutableSource:Xh,useSyncExternalStore:jh,useId:lp,unstable_isNewReconciler:!1};function ii(n,i){if(n&&n.defaultProps){i=le({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function rc(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:le({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Xa={isMounted:function(n){return(n=n._reactInternals)?gi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=yn(),d=pr(n),m=Oi(u,d);m.payload=i,o!=null&&(m.callback=o),i=cr(n,m,d),i!==null&&(oi(i,n,d,u),Oa(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=yn(),d=pr(n),m=Oi(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=cr(n,m,d),i!==null&&(oi(i,n,d,u),Oa(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=yn(),u=pr(n),d=Oi(o,u);d.tag=2,i!=null&&(d.callback=i),i=cr(n,d,u),i!==null&&(oi(i,n,u,o),Oa(i,n,u))}};function dp(n,i,o,u,d,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,w):i.prototype&&i.prototype.isPureReactComponent?!xo(o,u)||!xo(d,m):!0}function hp(n,i,o){var u=!1,d=ar,m=i.contextType;return typeof m=="object"&&m!==null?m=$n(m):(d=An(i)?Nr:fn.current,u=i.contextTypes,m=(u=u!=null)?_s(n,d):ar),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xa,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function pp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Xa.enqueueReplaceState(i,i.state,null)}function sc(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Xu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=$n(m):(m=An(i)?Nr:fn.current,d.context=_s(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(rc(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Xa.enqueueReplaceState(d,d.state,null),ka(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function As(n,i){try{var o="",u=i;do o+=ee(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function oc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function ac(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var D_=typeof WeakMap=="function"?WeakMap:Map;function mp(n,i,o){o=Oi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Qa||(Qa=!0,Mc=u),ac(n,i)},o}function gp(n,i,o){o=Oi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){ac(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){ac(n,i),typeof u!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),o}function vp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new D_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=j_.bind(null,n,i,o),i.then(n,n))}function _p(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function xp(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Oi(-1,1),i.tag=2,cr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var I_=C.ReactCurrentOwner,Rn=!1;function xn(n,i,o,u){i.child=n===null?Bh(i,null,o,u):Ms(i,n.child,o,u)}function yp(n,i,o,u,d){o=o.render;var m=i.ref;return ws(i,d),u=Qu(n,i,o,u,m,d),o=Ju(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ki(n,i,d)):(Ot&&o&&Nu(i),i.flags|=1,xn(n,i,u,d),i.child)}function Sp(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!Pc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,Mp(n,i,m,u,d)):(n=rl(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var w=m.memoizedProps;if(o=o.compare,o=o!==null?o:xo,o(w,u)&&n.ref===i.ref)return ki(n,i,d)}return i.flags|=1,n=gr(m,u),n.ref=i.ref,n.return=i,i.child=n}function Mp(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(xo(m,u)&&n.ref===i.ref)if(Rn=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Rn=!0);else return i.lanes=n.lanes,ki(n,i,d)}return lc(n,i,o,u,d)}function Ep(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Cs,kn),kn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Dt(Cs,kn),kn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Dt(Cs,kn),kn|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,Dt(Cs,kn),kn|=u;return xn(n,i,d,o),i.child}function wp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function lc(n,i,o,u,d){var m=An(o)?Nr:fn.current;return m=_s(i,m),ws(i,d),o=Qu(n,i,o,u,m,d),u=Ju(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ki(n,i,d)):(Ot&&u&&Nu(i),i.flags|=1,xn(n,i,o,d),i.child)}function Tp(n,i,o,u,d){if(An(o)){var m=!0;Pa(i)}else m=!1;if(ws(i,d),i.stateNode===null)$a(n,i),hp(i,o,u),sc(i,o,u,d),u=!0;else if(n===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var O=w.context,te=o.contextType;typeof te=="object"&&te!==null?te=$n(te):(te=An(o)?Nr:fn.current,te=_s(i,te));var ye=o.getDerivedStateFromProps,Me=typeof ye=="function"||typeof w.getSnapshotBeforeUpdate=="function";Me||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==u||O!==te)&&pp(i,w,u,te),ur=!1;var _e=i.memoizedState;w.state=_e,ka(i,u,w,d),O=i.memoizedState,I!==u||_e!==O||Tn.current||ur?(typeof ye=="function"&&(rc(i,o,ye,u),O=i.memoizedState),(I=ur||dp(i,o,I,u,_e,O,te))?(Me||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=O),w.props=u,w.state=O,w.context=te,u=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{w=i.stateNode,Hh(n,i),I=i.memoizedProps,te=i.type===i.elementType?I:ii(i.type,I),w.props=te,Me=i.pendingProps,_e=w.context,O=o.contextType,typeof O=="object"&&O!==null?O=$n(O):(O=An(o)?Nr:fn.current,O=_s(i,O));var Fe=o.getDerivedStateFromProps;(ye=typeof Fe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==Me||_e!==O)&&pp(i,w,u,O),ur=!1,_e=i.memoizedState,w.state=_e,ka(i,u,w,d);var He=i.memoizedState;I!==Me||_e!==He||Tn.current||ur?(typeof Fe=="function"&&(rc(i,o,Fe,u),He=i.memoizedState),(te=ur||dp(i,o,te,u,_e,He,O)||!1)?(ye||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,He,O),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,He,O)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=He),w.props=u,w.state=He,w.context=O,u=te):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),u=!1)}return uc(n,i,o,u,m,d)}function uc(n,i,o,u,d,m){wp(n,i);var w=(i.flags&128)!==0;if(!u&&!w)return d&&bh(i,o,!1),ki(n,i,m);u=i.stateNode,I_.current=i;var I=w&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&w?(i.child=Ms(i,n.child,null,m),i.child=Ms(i,null,I,m)):xn(n,i,I,m),i.memoizedState=u.state,d&&bh(i,o,!0),i.child}function Ap(n){var i=n.stateNode;i.pendingContext?Ch(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ch(n,i.context,!1),ju(n,i.containerInfo)}function Rp(n,i,o,u,d){return Ss(),Bu(d),i.flags|=256,xn(n,i,o,u),i.child}var cc={dehydrated:null,treeContext:null,retryLane:0};function fc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Cp(n,i,o){var u=i.pendingProps,d=kt.current,m=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Dt(kt,d&1),n===null)return ku(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=u.children,n=u.fallback,m?(u=i.mode,m=i.child,w={mode:"hidden",children:w},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=sl(w,u,0,null),n=Xr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=fc(o),i.memoizedState=cc,n):dc(i,w));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return U_(n,i,w,u,I,d,o);if(m){m=u.fallback,w=i.mode,d=n.child,I=d.sibling;var O={mode:"hidden",children:u.children};return(w&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=O,i.deletions=null):(u=gr(d,O),u.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=gr(I,m):(m=Xr(m,w,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,w=n.child.memoizedState,w=w===null?fc(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~o,i.memoizedState=cc,u}return m=n.child,n=m.sibling,u=gr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function dc(n,i){return i=sl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ja(n,i,o,u){return u!==null&&Bu(u),Ms(i,n.child,null,o),n=dc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function U_(n,i,o,u,d,m,w){if(o)return i.flags&256?(i.flags&=-257,u=oc(Error(t(422))),ja(n,i,w,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=sl({mode:"visible",children:u.children},d,0,null),m=Xr(m,d,w,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&Ms(i,n.child,null,w),i.child.memoizedState=fc(w),i.memoizedState=cc,m);if((i.mode&1)===0)return ja(n,i,w,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var I=u.dgst;return u=I,m=Error(t(419)),u=oc(m,u,void 0),ja(n,i,w,u)}if(I=(w&n.childLanes)!==0,Rn||I){if(u=nn,u!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|w))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Fi(n,d),oi(u,n,d,-1))}return Cc(),u=oc(Error(t(421))),ja(n,i,w,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=$_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,On=sr(d.nextSibling),Fn=i,Ot=!0,ni=null,n!==null&&(Xn[jn++]=Ui,Xn[jn++]=Ni,Xn[jn++]=Fr,Ui=n.id,Ni=n.overflow,Fr=i),i=dc(i,u.children),i.flags|=4096,i)}function Pp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Gu(n.return,i,o)}function hc(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function bp(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(xn(n,i,u.children,o),u=kt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Pp(n,o,i);else if(n.tag===19)Pp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Dt(kt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Ba(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),hc(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Ba(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}hc(i,!0,o,null,m);break;case"together":hc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $a(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ki(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Hr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=gr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=gr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function N_(n,i,o){switch(i.tag){case 3:Ap(i),Ss();break;case 5:Wh(i);break;case 1:An(i.type)&&Pa(i);break;case 4:ju(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Dt(Na,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Dt(kt,kt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Cp(n,i,o):(Dt(kt,kt.current&1),n=ki(n,i,o),n!==null?n.sibling:null);Dt(kt,kt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return bp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Dt(kt,kt.current),u)break;return null;case 22:case 23:return i.lanes=0,Ep(n,i,o)}return ki(n,i,o)}var Lp,pc,Dp,Ip;Lp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},pc=function(){},Dp=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Br(xi.current);var m=null;switch(o){case"input":d=X(n,d),u=X(n,u),m=[];break;case"select":d=le({},d,{value:void 0}),u=le({},u,{value:void 0}),m=[];break;case"textarea":d=T(n,d),u=T(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Aa)}ht(o,u);var w;o=null;for(te in d)if(!u.hasOwnProperty(te)&&d.hasOwnProperty(te)&&d[te]!=null)if(te==="style"){var I=d[te];for(w in I)I.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?m||(m=[]):(m=m||[]).push(te,null));for(te in u){var O=u[te];if(I=d!=null?d[te]:void 0,u.hasOwnProperty(te)&&O!==I&&(O!=null||I!=null))if(te==="style")if(I){for(w in I)!I.hasOwnProperty(w)||O&&O.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in O)O.hasOwnProperty(w)&&I[w]!==O[w]&&(o||(o={}),o[w]=O[w])}else o||(m||(m=[]),m.push(te,o)),o=O;else te==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,I=I?I.__html:void 0,O!=null&&I!==O&&(m=m||[]).push(te,O)):te==="children"?typeof O!="string"&&typeof O!="number"||(m=m||[]).push(te,""+O):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(O!=null&&te==="onScroll"&&Nt("scroll",n),m||I===O||(m=[])):(m=m||[]).push(te,O))}o&&(m=m||[]).push("style",o);var te=m;(i.updateQueue=te)&&(i.flags|=4)}},Ip=function(n,i,o,u){o!==u&&(i.flags|=4)};function Uo(n,i){if(!Ot)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function hn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function F_(n,i,o){var u=i.pendingProps;switch(Fu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(i),null;case 1:return An(i.type)&&Ca(),hn(i),null;case 3:return u=i.stateNode,Ts(),Ft(Tn),Ft(fn),qu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ia(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ni!==null&&(Tc(ni),ni=null))),pc(n,i),hn(i),null;case 5:$u(i);var d=Br(Po.current);if(o=i.type,n!==null&&i.stateNode!=null)Dp(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return hn(i),null}if(n=Br(xi.current),Ia(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[_i]=i,u[wo]=m,n=(i.mode&1)!==0,o){case"dialog":Nt("cancel",u),Nt("close",u);break;case"iframe":case"object":case"embed":Nt("load",u);break;case"video":case"audio":for(d=0;d<So.length;d++)Nt(So[d],u);break;case"source":Nt("error",u);break;case"img":case"image":case"link":Nt("error",u),Nt("load",u);break;case"details":Nt("toggle",u);break;case"input":en(u,m),Nt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Nt("invalid",u);break;case"textarea":Z(u,m),Nt("invalid",u)}ht(o,m),d=null;for(var w in m)if(m.hasOwnProperty(w)){var I=m[w];w==="children"?typeof I=="string"?u.textContent!==I&&(m.suppressHydrationWarning!==!0&&Ta(u.textContent,I,n),d=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Ta(u.textContent,I,n),d=["children",""+I]):a.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Nt("scroll",u)}switch(o){case"input":_t(u),Ke(u,m,!0);break;case"textarea":_t(u),xe(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Aa)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(o,{is:u.is}):(n=w.createElement(o),o==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,o),n[_i]=i,n[wo]=u,Lp(n,i,!1,!1),i.stateNode=n;e:{switch(w=rt(o,u),o){case"dialog":Nt("cancel",n),Nt("close",n),d=u;break;case"iframe":case"object":case"embed":Nt("load",n),d=u;break;case"video":case"audio":for(d=0;d<So.length;d++)Nt(So[d],n);d=u;break;case"source":Nt("error",n),d=u;break;case"img":case"image":case"link":Nt("error",n),Nt("load",n),d=u;break;case"details":Nt("toggle",n),d=u;break;case"input":en(n,u),d=X(n,u),Nt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=le({},u,{value:void 0}),Nt("invalid",n);break;case"textarea":Z(n,u),d=T(n,u),Nt("invalid",n);break;default:d=u}ht(o,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var O=I[m];m==="style"?et(n,O):m==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Oe(n,O)):m==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&dt(n,O):typeof O=="number"&&dt(n,""+O):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?O!=null&&m==="onScroll"&&Nt("scroll",n):O!=null&&b(n,m,O,w))}switch(o){case"input":_t(n),Ke(n,u,!1);break;case"textarea":_t(n),xe(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Re(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?D(n,!!u.multiple,m,!1):u.defaultValue!=null&&D(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Aa)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return hn(i),null;case 6:if(n&&i.stateNode!=null)Ip(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Br(Po.current),Br(xi.current),Ia(i)){if(u=i.stateNode,o=i.memoizedProps,u[_i]=i,(m=u.nodeValue!==o)&&(n=Fn,n!==null))switch(n.tag){case 3:Ta(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ta(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[_i]=i,i.stateNode=u}return hn(i),null;case 13:if(Ft(kt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ot&&On!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Fh(),Ss(),i.flags|=98560,m=!1;else if(m=Ia(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[_i]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;hn(i),m=!1}else ni!==null&&(Tc(ni),ni=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(kt.current&1)!==0?Zt===0&&(Zt=3):Cc())),i.updateQueue!==null&&(i.flags|=4),hn(i),null);case 4:return Ts(),pc(n,i),n===null&&Mo(i.stateNode.containerInfo),hn(i),null;case 10:return Vu(i.type._context),hn(i),null;case 17:return An(i.type)&&Ca(),hn(i),null;case 19:if(Ft(kt),m=i.memoizedState,m===null)return hn(i),null;if(u=(i.flags&128)!==0,w=m.rendering,w===null)if(u)Uo(m,!1);else{if(Zt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Ba(n),w!==null){for(i.flags|=128,Uo(m,!1),u=w.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Dt(kt,kt.current&1|2),i.child}n=n.sibling}m.tail!==null&&we()>Ps&&(i.flags|=128,u=!0,Uo(m,!1),i.lanes=4194304)}else{if(!u)if(n=Ba(w),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Uo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Ot)return hn(i),null}else 2*we()-m.renderingStartTime>Ps&&o!==1073741824&&(i.flags|=128,u=!0,Uo(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(o=m.last,o!==null?o.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=we(),i.sibling=null,o=kt.current,Dt(kt,u?o&1|2:o&1),i):(hn(i),null);case 22:case 23:return Rc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(kn&1073741824)!==0&&(hn(i),i.subtreeFlags&6&&(i.flags|=8192)):hn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function O_(n,i){switch(Fu(i),i.tag){case 1:return An(i.type)&&Ca(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ts(),Ft(Tn),Ft(fn),qu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return $u(i),null;case 13:if(Ft(kt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ss()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ft(kt),null;case 4:return Ts(),null;case 10:return Vu(i.type._context),null;case 22:case 23:return Rc(),null;case 24:return null;default:return null}}var Ya=!1,pn=!1,k_=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Rs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Gt(n,i,u)}else o.current=null}function mc(n,i,o){try{o()}catch(u){Gt(n,i,u)}}var Up=!1;function B_(n,i){if(Ru=pa,n=dh(),xu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var w=0,I=-1,O=-1,te=0,ye=0,Me=n,_e=null;t:for(;;){for(var Fe;Me!==o||d!==0&&Me.nodeType!==3||(I=w+d),Me!==m||u!==0&&Me.nodeType!==3||(O=w+u),Me.nodeType===3&&(w+=Me.nodeValue.length),(Fe=Me.firstChild)!==null;)_e=Me,Me=Fe;for(;;){if(Me===n)break t;if(_e===o&&++te===d&&(I=w),_e===m&&++ye===u&&(O=w),(Fe=Me.nextSibling)!==null)break;Me=_e,_e=Me.parentNode}Me=Fe}o=I===-1||O===-1?null:{start:I,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(Cu={focusedElem:n,selectionRange:o},pa=!1,ke=i;ke!==null;)if(i=ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ke=n;else for(;ke!==null;){i=ke;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,Xt=He.memoizedState,Y=i.stateNode,H=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:ii(i.type,Ge),Xt);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Gt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,ke=n;break}ke=i.return}return He=Up,Up=!1,He}function No(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&mc(i,o,m)}d=d.next}while(d!==u)}}function qa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function gc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Np(n){var i=n.alternate;i!==null&&(n.alternate=null,Np(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[_i],delete i[wo],delete i[Du],delete i[S_],delete i[M_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Fp(n){return n.tag===5||n.tag===3||n.tag===4}function Op(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Fp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Aa));else if(u!==4&&(n=n.child,n!==null))for(vc(n,i,o),n=n.sibling;n!==null;)vc(n,i,o),n=n.sibling}function _c(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(_c(n,i,o),n=n.sibling;n!==null;)_c(n,i,o),n=n.sibling}var an=null,ri=!1;function fr(n,i,o){for(o=o.child;o!==null;)kp(n,i,o),o=o.sibling}function kp(n,i,o){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Rt,o)}catch{}switch(o.tag){case 5:pn||Rs(o,i);case 6:var u=an,d=ri;an=null,fr(n,i,o),an=u,ri=d,an!==null&&(ri?(n=an,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(ri?(n=an,o=o.stateNode,n.nodeType===8?Lu(n.parentNode,o):n.nodeType===1&&Lu(n,o),ho(n)):Lu(an,o.stateNode));break;case 4:u=an,d=ri,an=o.stateNode.containerInfo,ri=!0,fr(n,i,o),an=u,ri=d;break;case 0:case 11:case 14:case 15:if(!pn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&mc(o,i,w),d=d.next}while(d!==u)}fr(n,i,o);break;case 1:if(!pn&&(Rs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(I){Gt(o,i,I)}fr(n,i,o);break;case 21:fr(n,i,o);break;case 22:o.mode&1?(pn=(u=pn)||o.memoizedState!==null,fr(n,i,o),pn=u):fr(n,i,o);break;default:fr(n,i,o)}}function Bp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new k_),i.forEach(function(u){var d=Y_.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function si(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:an=I.stateNode,ri=!1;break e;case 3:an=I.stateNode.containerInfo,ri=!0;break e;case 4:an=I.stateNode.containerInfo,ri=!0;break e}I=I.return}if(an===null)throw Error(t(160));kp(m,w,d),an=null,ri=!1;var O=d.alternate;O!==null&&(O.return=null),d.return=null}catch(te){Gt(d,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)zp(i,n),i=i.sibling}function zp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(si(i,n),Si(n),u&4){try{No(3,n,n.return),qa(3,n)}catch(Ge){Gt(n,n.return,Ge)}try{No(5,n,n.return)}catch(Ge){Gt(n,n.return,Ge)}}break;case 1:si(i,n),Si(n),u&512&&o!==null&&Rs(o,o.return);break;case 5:if(si(i,n),Si(n),u&512&&o!==null&&Rs(o,o.return),n.flags&32){var d=n.stateNode;try{dt(d,"")}catch(Ge){Gt(n,n.return,Ge)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,w=o!==null?o.memoizedProps:m,I=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&ct(d,m),rt(I,w);var te=rt(I,m);for(w=0;w<O.length;w+=2){var ye=O[w],Me=O[w+1];ye==="style"?et(d,Me):ye==="dangerouslySetInnerHTML"?Oe(d,Me):ye==="children"?dt(d,Me):b(d,ye,Me,te)}switch(I){case"input":lt(d,m);break;case"textarea":ve(d,m);break;case"select":var _e=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Fe=m.value;Fe!=null?D(d,!!m.multiple,Fe,!1):_e!==!!m.multiple&&(m.defaultValue!=null?D(d,!!m.multiple,m.defaultValue,!0):D(d,!!m.multiple,m.multiple?[]:"",!1))}d[wo]=m}catch(Ge){Gt(n,n.return,Ge)}}break;case 6:if(si(i,n),Si(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ge){Gt(n,n.return,Ge)}}break;case 3:if(si(i,n),Si(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ho(i.containerInfo)}catch(Ge){Gt(n,n.return,Ge)}break;case 4:si(i,n),Si(n);break;case 13:si(i,n),Si(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Sc=we())),u&4&&Bp(n);break;case 22:if(ye=o!==null&&o.memoizedState!==null,n.mode&1?(pn=(te=pn)||ye,si(i,n),pn=te):si(i,n),Si(n),u&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!ye&&(n.mode&1)!==0)for(ke=n,ye=n.child;ye!==null;){for(Me=ke=ye;ke!==null;){switch(_e=ke,Fe=_e.child,_e.tag){case 0:case 11:case 14:case 15:No(4,_e,_e.return);break;case 1:Rs(_e,_e.return);var He=_e.stateNode;if(typeof He.componentWillUnmount=="function"){u=_e,o=_e.return;try{i=u,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ge){Gt(u,o,Ge)}}break;case 5:Rs(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Gp(Me);continue}}Fe!==null?(Fe.return=_e,ke=Fe):Gp(Me)}ye=ye.sibling}e:for(ye=null,Me=n;;){if(Me.tag===5){if(ye===null){ye=Me;try{d=Me.stateNode,te?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Me.stateNode,O=Me.memoizedProps.style,w=O!=null&&O.hasOwnProperty("display")?O.display:null,I.style.display=Je("display",w))}catch(Ge){Gt(n,n.return,Ge)}}}else if(Me.tag===6){if(ye===null)try{Me.stateNode.nodeValue=te?"":Me.memoizedProps}catch(Ge){Gt(n,n.return,Ge)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;ye===Me&&(ye=null),Me=Me.return}ye===Me&&(ye=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:si(i,n),Si(n),u&4&&Bp(n);break;case 21:break;default:si(i,n),Si(n)}}function Si(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Fp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(dt(d,""),u.flags&=-33);var m=Op(n);_c(n,m,d);break;case 3:case 4:var w=u.stateNode.containerInfo,I=Op(n);vc(n,I,w);break;default:throw Error(t(161))}}catch(O){Gt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function z_(n,i,o){ke=n,Hp(n)}function Hp(n,i,o){for(var u=(n.mode&1)!==0;ke!==null;){var d=ke,m=d.child;if(d.tag===22&&u){var w=d.memoizedState!==null||Ya;if(!w){var I=d.alternate,O=I!==null&&I.memoizedState!==null||pn;I=Ya;var te=pn;if(Ya=w,(pn=O)&&!te)for(ke=d;ke!==null;)w=ke,O=w.child,w.tag===22&&w.memoizedState!==null?Wp(d):O!==null?(O.return=w,ke=O):Wp(d);for(;m!==null;)ke=m,Hp(m),m=m.sibling;ke=d,Ya=I,pn=te}Vp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ke=m):Vp(n)}}function Vp(n){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:pn||qa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!pn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ii(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Gh(i,m,u);break;case 3:var w=i.updateQueue;if(w!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Gh(i,w,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var ye=te.memoizedState;if(ye!==null){var Me=ye.dehydrated;Me!==null&&ho(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}pn||i.flags&512&&gc(i)}catch(_e){Gt(i,i.return,_e)}}if(i===n){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Gp(n){for(;ke!==null;){var i=ke;if(i===n){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Wp(n){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{qa(4,i)}catch(O){Gt(i,o,O)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(O){Gt(i,d,O)}}var m=i.return;try{gc(i)}catch(O){Gt(i,m,O)}break;case 5:var w=i.return;try{gc(i)}catch(O){Gt(i,w,O)}}}catch(O){Gt(i,i.return,O)}if(i===n){ke=null;break}var I=i.sibling;if(I!==null){I.return=i.return,ke=I;break}ke=i.return}}var H_=Math.ceil,Ka=C.ReactCurrentDispatcher,xc=C.ReactCurrentOwner,qn=C.ReactCurrentBatchConfig,yt=0,nn=null,jt=null,ln=0,kn=0,Cs=or(0),Zt=0,Fo=null,Hr=0,Za=0,yc=0,Oo=null,Cn=null,Sc=0,Ps=1/0,Bi=null,Qa=!1,Mc=null,dr=null,Ja=!1,hr=null,el=0,ko=0,Ec=null,tl=-1,nl=0;function yn(){return(yt&6)!==0?we():tl!==-1?tl:tl=we()}function pr(n){return(n.mode&1)===0?1:(yt&2)!==0&&ln!==0?ln&-ln:w_.transition!==null?(nl===0&&(nl=_n()),nl):(n=Pt,n!==0||(n=window.event,n=n===void 0?16:jd(n.type)),n)}function oi(n,i,o,u){if(50<ko)throw ko=0,Ec=null,Error(t(185));wn(n,o,u),((yt&2)===0||n!==nn)&&(n===nn&&((yt&2)===0&&(Za|=o),Zt===4&&mr(n,ln)),Pn(n,u),o===1&&yt===0&&(i.mode&1)===0&&(Ps=we()+500,ba&&lr()))}function Pn(n,i){var o=n.callbackNode;Gn(n,i);var u=vi(n,n===nn?ln:0);if(u===0)o!==null&&se(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&se(o),i===1)n.tag===0?E_(jp.bind(null,n)):Lh(jp.bind(null,n)),x_(function(){(yt&6)===0&&lr()}),o=null;else{switch(kd(u)){case 1:o=Ve;break;case 4:o=tt;break;case 16:o=it;break;case 536870912:o=vt;break;default:o=it}o=em(o,Xp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Xp(n,i){if(tl=-1,nl=0,(yt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(bs()&&n.callbackNode!==o)return null;var u=vi(n,n===nn?ln:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=il(n,u);else{i=u;var d=yt;yt|=2;var m=Yp();(nn!==n||ln!==i)&&(Bi=null,Ps=we()+500,Gr(n,i));do try{W_();break}catch(I){$p(n,I)}while(!0);Hu(),Ka.current=m,yt=d,jt!==null?i=0:(nn=null,ln=0,i=Zt)}if(i!==0){if(i===2&&(d=Li(n),d!==0&&(u=d,i=wc(n,d))),i===1)throw o=Fo,Gr(n,0),mr(n,u),Pn(n,we()),o;if(i===6)mr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!V_(d)&&(i=il(n,u),i===2&&(m=Li(n),m!==0&&(u=m,i=wc(n,m))),i===1))throw o=Fo,Gr(n,0),mr(n,u),Pn(n,we()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Wr(n,Cn,Bi);break;case 3:if(mr(n,u),(u&130023424)===u&&(i=Sc+500-we(),10<i)){if(vi(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){yn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=bu(Wr.bind(null,n,Cn,Bi),i);break}Wr(n,Cn,Bi);break;case 4:if(mr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var w=31-ot(u);m=1<<w,w=i[w],w>d&&(d=w),u&=~m}if(u=d,u=we()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*H_(u/1960))-u,10<u){n.timeoutHandle=bu(Wr.bind(null,n,Cn,Bi),u);break}Wr(n,Cn,Bi);break;case 5:Wr(n,Cn,Bi);break;default:throw Error(t(329))}}}return Pn(n,we()),n.callbackNode===o?Xp.bind(null,n):null}function wc(n,i){var o=Oo;return n.current.memoizedState.isDehydrated&&(Gr(n,i).flags|=256),n=il(n,i),n!==2&&(i=Cn,Cn=o,i!==null&&Tc(i)),n}function Tc(n){Cn===null?Cn=n:Cn.push.apply(Cn,n)}function V_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!ti(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function mr(n,i){for(i&=~yc,i&=~Za,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ot(i),u=1<<o;n[o]=-1,i&=~u}}function jp(n){if((yt&6)!==0)throw Error(t(327));bs();var i=vi(n,0);if((i&1)===0)return Pn(n,we()),null;var o=il(n,i);if(n.tag!==0&&o===2){var u=Li(n);u!==0&&(i=u,o=wc(n,u))}if(o===1)throw o=Fo,Gr(n,0),mr(n,i),Pn(n,we()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Wr(n,Cn,Bi),Pn(n,we()),null}function Ac(n,i){var o=yt;yt|=1;try{return n(i)}finally{yt=o,yt===0&&(Ps=we()+500,ba&&lr())}}function Vr(n){hr!==null&&hr.tag===0&&(yt&6)===0&&bs();var i=yt;yt|=1;var o=qn.transition,u=Pt;try{if(qn.transition=null,Pt=1,n)return n()}finally{Pt=u,qn.transition=o,yt=i,(yt&6)===0&&lr()}}function Rc(){kn=Cs.current,Ft(Cs)}function Gr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,__(o)),jt!==null)for(o=jt.return;o!==null;){var u=o;switch(Fu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ca();break;case 3:Ts(),Ft(Tn),Ft(fn),qu();break;case 5:$u(u);break;case 4:Ts();break;case 13:Ft(kt);break;case 19:Ft(kt);break;case 10:Vu(u.type._context);break;case 22:case 23:Rc()}o=o.return}if(nn=n,jt=n=gr(n.current,null),ln=kn=i,Zt=0,Fo=null,yc=Za=Hr=0,Cn=Oo=null,kr!==null){for(i=0;i<kr.length;i++)if(o=kr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var w=m.next;m.next=d,u.next=w}o.pending=u}kr=null}return n}function $p(n,i){do{var o=jt;try{if(Hu(),za.current=Wa,Ha){for(var u=Bt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ha=!1}if(zr=0,tn=Kt=Bt=null,bo=!1,Lo=0,xc.current=null,o===null||o.return===null){Zt=1,Fo=i,jt=null;break}e:{var m=n,w=o.return,I=o,O=i;if(i=ln,I.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var te=O,ye=I,Me=ye.tag;if((ye.mode&1)===0&&(Me===0||Me===11||Me===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Fe=_p(w);if(Fe!==null){Fe.flags&=-257,xp(Fe,w,I,m,i),Fe.mode&1&&vp(m,te,i),i=Fe,O=te;var He=i.updateQueue;if(He===null){var Ge=new Set;Ge.add(O),i.updateQueue=Ge}else He.add(O);break e}else{if((i&1)===0){vp(m,te,i),Cc();break e}O=Error(t(426))}}else if(Ot&&I.mode&1){var Xt=_p(w);if(Xt!==null){(Xt.flags&65536)===0&&(Xt.flags|=256),xp(Xt,w,I,m,i),Bu(As(O,I));break e}}m=O=As(O,I),Zt!==4&&(Zt=2),Oo===null?Oo=[m]:Oo.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Y=mp(m,O,i);Vh(m,Y);break e;case 1:I=O;var H=m.type,K=m.stateNode;if((m.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(dr===null||!dr.has(K)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=gp(m,I,i);Vh(m,Te);break e}}m=m.return}while(m!==null)}Kp(o)}catch($e){i=$e,jt===o&&o!==null&&(jt=o=o.return);continue}break}while(!0)}function Yp(){var n=Ka.current;return Ka.current=Wa,n===null?Wa:n}function Cc(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),nn===null||(Hr&268435455)===0&&(Za&268435455)===0||mr(nn,ln)}function il(n,i){var o=yt;yt|=2;var u=Yp();(nn!==n||ln!==i)&&(Bi=null,Gr(n,i));do try{G_();break}catch(d){$p(n,d)}while(!0);if(Hu(),yt=o,Ka.current=u,jt!==null)throw Error(t(261));return nn=null,ln=0,Zt}function G_(){for(;jt!==null;)qp(jt)}function W_(){for(;jt!==null&&!$();)qp(jt)}function qp(n){var i=Jp(n.alternate,n,kn);n.memoizedProps=n.pendingProps,i===null?Kp(n):jt=i,xc.current=null}function Kp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=F_(o,i,kn),o!==null){jt=o;return}}else{if(o=O_(o,i),o!==null){o.flags&=32767,jt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Zt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=n}while(i!==null);Zt===0&&(Zt=5)}function Wr(n,i,o){var u=Pt,d=qn.transition;try{qn.transition=null,Pt=1,X_(n,i,o,u)}finally{qn.transition=d,Pt=u}return null}function X_(n,i,o,u){do bs();while(hr!==null);if((yt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(fa(n,m),n===nn&&(jt=nn=null,ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ja||(Ja=!0,em(it,function(){return bs(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=qn.transition,qn.transition=null;var w=Pt;Pt=1;var I=yt;yt|=4,xc.current=null,B_(n,o),zp(o,n),f_(Cu),pa=!!Ru,Cu=Ru=null,n.current=o,z_(o),Ae(),yt=I,Pt=w,qn.transition=m}else n.current=o;if(Ja&&(Ja=!1,hr=n,el=d),m=n.pendingLanes,m===0&&(dr=null),un(o.stateNode),Pn(n,we()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Qa)throw Qa=!1,n=Mc,Mc=null,n;return(el&1)!==0&&n.tag!==0&&bs(),m=n.pendingLanes,(m&1)!==0?n===Ec?ko++:(ko=0,Ec=n):ko=0,lr(),null}function bs(){if(hr!==null){var n=kd(el),i=qn.transition,o=Pt;try{if(qn.transition=null,Pt=16>n?16:n,hr===null)var u=!1;else{if(n=hr,hr=null,el=0,(yt&6)!==0)throw Error(t(331));var d=yt;for(yt|=4,ke=n.current;ke!==null;){var m=ke,w=m.child;if((ke.flags&16)!==0){var I=m.deletions;if(I!==null){for(var O=0;O<I.length;O++){var te=I[O];for(ke=te;ke!==null;){var ye=ke;switch(ye.tag){case 0:case 11:case 15:No(8,ye,m)}var Me=ye.child;if(Me!==null)Me.return=ye,ke=Me;else for(;ke!==null;){ye=ke;var _e=ye.sibling,Fe=ye.return;if(Np(ye),ye===te){ke=null;break}if(_e!==null){_e.return=Fe,ke=_e;break}ke=Fe}}}var He=m.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var Xt=Ge.sibling;Ge.sibling=null,Ge=Xt}while(Ge!==null)}}ke=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,ke=w;else e:for(;ke!==null;){if(m=ke,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:No(9,m,m.return)}var Y=m.sibling;if(Y!==null){Y.return=m.return,ke=Y;break e}ke=m.return}}var H=n.current;for(ke=H;ke!==null;){w=ke;var K=w.child;if((w.subtreeFlags&2064)!==0&&K!==null)K.return=w,ke=K;else e:for(w=H;ke!==null;){if(I=ke,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:qa(9,I)}}catch($e){Gt(I,I.return,$e)}if(I===w){ke=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,ke=Te;break e}ke=I.return}}if(yt=d,lr(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Rt,n)}catch{}u=!0}return u}finally{Pt=o,qn.transition=i}}return!1}function Zp(n,i,o){i=As(o,i),i=mp(n,i,1),n=cr(n,i,1),i=yn(),n!==null&&(wn(n,1,i),Pn(n,i))}function Gt(n,i,o){if(n.tag===3)Zp(n,n,o);else for(;i!==null;){if(i.tag===3){Zp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(dr===null||!dr.has(u))){n=As(o,n),n=gp(i,n,1),i=cr(i,n,1),n=yn(),i!==null&&(wn(i,1,n),Pn(i,n));break}}i=i.return}}function j_(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=yn(),n.pingedLanes|=n.suspendedLanes&o,nn===n&&(ln&o)===o&&(Zt===4||Zt===3&&(ln&130023424)===ln&&500>we()-Sc?Gr(n,0):yc|=o),Pn(n,i)}function Qp(n,i){i===0&&((n.mode&1)===0?i=1:(i=ei,ei<<=1,(ei&130023424)===0&&(ei=4194304)));var o=yn();n=Fi(n,i),n!==null&&(wn(n,i,o),Pn(n,o))}function $_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Qp(n,o)}function Y_(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Qp(n,o)}var Jp;Jp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Tn.current)Rn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Rn=!1,N_(n,i,o);Rn=(n.flags&131072)!==0}else Rn=!1,Ot&&(i.flags&1048576)!==0&&Dh(i,Da,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;$a(n,i),n=i.pendingProps;var d=_s(i,fn.current);ws(i,o),d=Qu(null,i,u,n,d,o);var m=Ju();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(u)?(m=!0,Pa(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Xu(i),d.updater=Xa,i.stateNode=d,d._reactInternals=i,sc(i,u,n,o),i=uc(null,i,u,!0,m,o)):(i.tag=0,Ot&&m&&Nu(i),xn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch($a(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=K_(u),n=ii(u,n),d){case 0:i=lc(null,i,u,n,o);break e;case 1:i=Tp(null,i,u,n,o);break e;case 11:i=yp(null,i,u,n,o);break e;case 14:i=Sp(null,i,u,ii(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),lc(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),Tp(n,i,u,d,o);case 3:e:{if(Ap(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,Hh(n,i),ka(i,u,null,o);var w=i.memoizedState;if(u=w.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=As(Error(t(423)),i),i=Rp(n,i,u,o,d);break e}else if(u!==d){d=As(Error(t(424)),i),i=Rp(n,i,u,o,d);break e}else for(On=sr(i.stateNode.containerInfo.firstChild),Fn=i,Ot=!0,ni=null,o=Bh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ss(),u===d){i=ki(n,i,o);break e}xn(n,i,u,o)}i=i.child}return i;case 5:return Wh(i),n===null&&ku(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,w=d.children,Pu(u,d)?w=null:m!==null&&Pu(u,m)&&(i.flags|=32),wp(n,i),xn(n,i,w,o),i.child;case 6:return n===null&&ku(i),null;case 13:return Cp(n,i,o);case 4:return ju(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ms(i,null,u,o):xn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),yp(n,i,u,d,o);case 7:return xn(n,i,i.pendingProps,o),i.child;case 8:return xn(n,i,i.pendingProps.children,o),i.child;case 12:return xn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,w=d.value,Dt(Na,u._currentValue),u._currentValue=w,m!==null)if(ti(m.value,w)){if(m.children===d.children&&!Tn.current){i=ki(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){w=m.child;for(var O=I.firstContext;O!==null;){if(O.context===u){if(m.tag===1){O=Oi(-1,o&-o),O.tag=2;var te=m.updateQueue;if(te!==null){te=te.shared;var ye=te.pending;ye===null?O.next=O:(O.next=ye.next,ye.next=O),te.pending=O}}m.lanes|=o,O=m.alternate,O!==null&&(O.lanes|=o),Gu(m.return,o,i),I.lanes|=o;break}O=O.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=o,I=w.alternate,I!==null&&(I.lanes|=o),Gu(w,o,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}xn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,ws(i,o),d=$n(d),u=u(d),i.flags|=1,xn(n,i,u,o),i.child;case 14:return u=i.type,d=ii(u,i.pendingProps),d=ii(u.type,d),Sp(n,i,u,d,o);case 15:return Mp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),$a(n,i),i.tag=1,An(u)?(n=!0,Pa(i)):n=!1,ws(i,o),hp(i,u,d),sc(i,u,d,o),uc(null,i,u,!0,n,o);case 19:return bp(n,i,o);case 22:return Ep(n,i,o)}throw Error(t(156,i.tag))};function em(n,i){return ne(n,i)}function q_(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(n,i,o,u){return new q_(n,i,o,u)}function Pc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function K_(n){if(typeof n=="function")return Pc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ie)return 11;if(n===ce)return 14}return 2}function gr(n,i){var o=n.alternate;return o===null?(o=Kn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function rl(n,i,o,u,d,m){var w=2;if(u=n,typeof n=="function")Pc(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case U:return Xr(o.children,d,m,i);case V:w=8,d|=8;break;case P:return n=Kn(12,o,i,d|2),n.elementType=P,n.lanes=m,n;case q:return n=Kn(13,o,i,d),n.elementType=q,n.lanes=m,n;case ue:return n=Kn(19,o,i,d),n.elementType=ue,n.lanes=m,n;case de:return sl(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:w=10;break e;case k:w=9;break e;case ie:w=11;break e;case ce:w=14;break e;case oe:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Kn(w,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Xr(n,i,o,u){return n=Kn(7,n,u,i),n.lanes=o,n}function sl(n,i,o,u){return n=Kn(22,n,u,i),n.elementType=de,n.lanes=o,n.stateNode={isHidden:!1},n}function bc(n,i,o){return n=Kn(6,n,null,i),n.lanes=o,n}function Lc(n,i,o){return i=Kn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Z_(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wn(0),this.expirationTimes=Wn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Dc(n,i,o,u,d,m,w,I,O){return n=new Z_(n,i,o,I,O),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Kn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xu(m),n}function Q_(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function tm(n){if(!n)return ar;n=n._reactInternals;e:{if(gi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(An(o))return Ph(n,o,i)}return i}function nm(n,i,o,u,d,m,w,I,O){return n=Dc(o,u,!0,n,d,m,w,I,O),n.context=tm(null),o=n.current,u=yn(),d=pr(o),m=Oi(u,d),m.callback=i??null,cr(o,m,d),n.current.lanes=d,wn(n,d,u),Pn(n,u),n}function ol(n,i,o,u){var d=i.current,m=yn(),w=pr(d);return o=tm(o),i.context===null?i.context=o:i.pendingContext=o,i=Oi(m,w),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=cr(d,i,w),n!==null&&(oi(n,d,w,m),Oa(n,d,w)),w}function al(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function im(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Ic(n,i){im(n,i),(n=n.alternate)&&im(n,i)}function J_(){return null}var rm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uc(n){this._internalRoot=n}ll.prototype.render=Uc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ol(n,i,null,null)},ll.prototype.unmount=Uc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Vr(function(){ol(null,n,null,null)}),i[Di]=null}};function ll(n){this._internalRoot=n}ll.prototype.unstable_scheduleHydration=function(n){if(n){var i=Hd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<nr.length&&i!==0&&i<nr[o].priority;o++);nr.splice(o,0,n),o===0&&Wd(n)}};function Nc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ul(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function sm(){}function e0(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var te=al(w);m.call(te)}}var w=nm(i,u,n,0,null,!1,!1,"",sm);return n._reactRootContainer=w,n[Di]=w.current,Mo(n.nodeType===8?n.parentNode:n),Vr(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var I=u;u=function(){var te=al(O);I.call(te)}}var O=Dc(n,0,!1,null,null,!1,!1,"",sm);return n._reactRootContainer=O,n[Di]=O.current,Mo(n.nodeType===8?n.parentNode:n),Vr(function(){ol(i,O,o,u)}),O}function cl(n,i,o,u,d){var m=o._reactRootContainer;if(m){var w=m;if(typeof d=="function"){var I=d;d=function(){var O=al(w);I.call(O)}}ol(i,w,n,d)}else w=e0(o,i,n,d,u);return al(w)}Bd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=qt(i.pendingLanes);o!==0&&(su(i,o|1),Pn(i,we()),(yt&6)===0&&(Ps=we()+500,lr()))}break;case 13:Vr(function(){var u=Fi(n,1);if(u!==null){var d=yn();oi(u,n,1,d)}}),Ic(n,1)}},ou=function(n){if(n.tag===13){var i=Fi(n,134217728);if(i!==null){var o=yn();oi(i,n,134217728,o)}Ic(n,134217728)}},zd=function(n){if(n.tag===13){var i=pr(n),o=Fi(n,i);if(o!==null){var u=yn();oi(o,n,i,u)}Ic(n,i)}},Hd=function(){return Pt},Vd=function(n,i){var o=Pt;try{return Pt=n,i()}finally{Pt=o}},Le=function(n,i,o){switch(i){case"input":if(lt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Ra(u);if(!d)throw Error(t(90));at(u),lt(u,d)}}}break;case"textarea":ve(n,o);break;case"select":i=o.value,i!=null&&D(n,!!o.multiple,i,!1)}},Ut=Ac,Yt=Vr;var t0={usingClientEntryPoint:!1,Events:[To,gs,Ra,Ie,st,Ac]},Bo={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},n0={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=R(n),n===null?null:n.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||J_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Rt=fl.inject(n0),gt=fl}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t0,bn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nc(i))throw Error(t(200));return Q_(n,i,null,o)},bn.createRoot=function(n,i){if(!Nc(n))throw Error(t(299));var o=!1,u="",d=rm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Dc(n,1,!1,null,null,o,!1,u,d),n[Di]=i.current,Mo(n.nodeType===8?n.parentNode:n),new Uc(i)},bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=R(i),n=n===null?null:n.stateNode,n},bn.flushSync=function(n){return Vr(n)},bn.hydrate=function(n,i,o){if(!ul(i))throw Error(t(200));return cl(null,n,i,!0,o)},bn.hydrateRoot=function(n,i,o){if(!Nc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",w=rm;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),i=nm(i,null,n,1,o??null,d,!1,m,w),n[Di]=i.current,Mo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ll(i)},bn.render=function(n,i,o){if(!ul(i))throw Error(t(200));return cl(null,n,i,!1,o)},bn.unmountComponentAtNode=function(n){if(!ul(n))throw Error(t(40));return n._reactRootContainer?(Vr(function(){cl(null,null,n,!1,function(){n._reactRootContainer=null,n[Di]=null})}),!0):!1},bn.unstable_batchedUpdates=Ac,bn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!ul(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return cl(n,i,o,!1,u)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var hm;function f0(){if(hm)return kc.exports;hm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),kc.exports=c0(),kc.exports}var pm;function d0(){if(pm)return dl;pm=1;var s=f0();return dl.createRoot=s.createRoot,dl.hydrateRoot=s.hydrateRoot,dl}var h0=d0();const p0=Rg(h0);/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var mm="popstate";function gm(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function m0(s={}){function e(r,a){var p;let l=(p=a.state)==null?void 0:p.masked,{pathname:c,search:f,hash:h}=l||r.location;return Tf("",{pathname:c,search:f,hash:h},a.state&&a.state.usr||null,a.state&&a.state.key||"default",l?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function t(r,a){return typeof a=="string"?a:Zo(a)}return v0(e,t,null,s)}function zt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function pi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function g0(){return Math.random().toString(36).substring(2,10)}function vm(s,e){return{usr:s.state,key:s.key,idx:e,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function Tf(s,e,t=null,r,a){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?to(e):e,state:t,key:e&&e.key||r||g0(),unstable_mask:a}}function Zo({pathname:s="/",search:e="",hash:t=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(s+=t.charAt(0)==="#"?t:"#"+t),s}function to(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substring(t),s=s.substring(0,t));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function v0(s,e,t,r={}){let{window:a=document.defaultView,v5Compat:l=!1}=r,c=a.history,f="POP",h=null,p=g();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function g(){return(c.state||{idx:null}).idx}function _(){f="POP";let y=g(),v=y==null?null:y-p;p=y,h&&h({action:f,location:E.location,delta:v})}function x(y,v){f="PUSH";let L=gm(y)?y:Tf(E.location,y,v);p=g()+1;let b=vm(L,p),C=E.createHref(L.unstable_mask||L);try{c.pushState(b,"",C)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;a.location.assign(C)}l&&h&&h({action:f,location:E.location,delta:1})}function S(y,v){f="REPLACE";let L=gm(y)?y:Tf(E.location,y,v);p=g();let b=vm(L,p),C=E.createHref(L.unstable_mask||L);c.replaceState(b,"",C),l&&h&&h({action:f,location:E.location,delta:0})}function M(y){return _0(y)}let E={get action(){return f},get location(){return s(a,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(mm,_),h=y,()=>{a.removeEventListener(mm,_),h=null}},createHref(y){return e(a,y)},createURL:M,encodeLocation(y){let v=M(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:S,go(y){return c.go(y)}};return E}function _0(s,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),zt(t,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Zo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=t+r),new URL(r,t)}function Cg(s,e,t="/"){return x0(s,e,t,!1)}function x0(s,e,t,r){let a=typeof e=="string"?to(e):e,l=qi(a.pathname||"/",t);if(l==null)return null;let c=Pg(s);y0(c);let f=null;for(let h=0;f==null&&h<c.length;++h){let p=L0(l);f=P0(c[h],p,r)}return f}function Pg(s,e=[],t=[],r="",a=!1){let l=(c,f,h=a,p)=>{let g={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&h)return;zt(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let _=Ti([r,g.relativePath]),x=t.concat(g);c.children&&c.children.length>0&&(zt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Pg(c.children,e,x,_,h)),!(c.path==null&&!c.index)&&e.push({path:_,score:R0(_,c.index),routesMeta:x})};return s.forEach((c,f)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))l(c,f);else for(let p of bg(c.path))l(c,f,!0,p)}),e}function bg(s){let e=s.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let c=bg(r.join("/")),f=[];return f.push(...c.map(h=>h===""?l:[l,h].join("/"))),a&&f.push(...c),f.map(h=>s.startsWith("/")&&h===""?"/":h)}function y0(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:C0(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var S0=/^:[\w-]+$/,M0=3,E0=2,w0=1,T0=10,A0=-2,_m=s=>s==="*";function R0(s,e){let t=s.split("/"),r=t.length;return t.some(_m)&&(r+=A0),e&&(r+=E0),t.filter(a=>!_m(a)).reduce((a,l)=>a+(S0.test(l)?M0:l===""?w0:T0),r)}function C0(s,e){return s.length===e.length&&s.slice(0,-1).every((r,a)=>r===e[a])?s[s.length-1]-e[e.length-1]:0}function P0(s,e,t=!1){let{routesMeta:r}=s,a={},l="/",c=[];for(let f=0;f<r.length;++f){let h=r[f],p=f===r.length-1,g=l==="/"?e:e.slice(l.length)||"/",_=jl({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},g),x=h.route;if(!_&&p&&t&&!r[r.length-1].route.index&&(_=jl({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!_)return null;Object.assign(a,_.params),c.push({params:a,pathname:Ti([l,_.pathname]),pathnameBase:N0(Ti([l,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(l=Ti([l,_.pathnameBase]))}return c}function jl(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,r]=b0(s.path,s.caseSensitive,s.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:_},x)=>{if(g==="*"){let M=f[x]||"";c=l.slice(0,l.length-M.length).replace(/(.)\/+$/,"$1")}const S=f[x];return _&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:s}}function b0(s,e=!1,t=!0){pi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],a="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h,p,g)=>{if(r.push({paramName:f,isOptional:h!=null}),h){let _=g.charAt(p+c.length);return _&&_!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),a+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":s!==""&&s!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function L0(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return pi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function qi(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=s.charAt(t);return r&&r!=="/"?null:s.slice(t)||"/"}var D0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function I0(s,e="/"){let{pathname:t,search:r="",hash:a=""}=typeof s=="string"?to(s):s,l;return t?(t=t.replace(/\/\/+/g,"/"),t.startsWith("/")?l=xm(t.substring(1),"/"):l=xm(t,e)):l=e,{pathname:l,search:F0(r),hash:O0(a)}}function xm(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Hc(s,e,t,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function U0(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Lg(s){let e=U0(s);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function gd(s,e,t,r=!1){let a;typeof s=="string"?a=to(s):(a={...s},zt(!a.pathname||!a.pathname.includes("?"),Hc("?","pathname","search",a)),zt(!a.pathname||!a.pathname.includes("#"),Hc("#","pathname","hash",a)),zt(!a.search||!a.search.includes("#"),Hc("#","search","hash",a)));let l=s===""||a.pathname==="",c=l?"/":a.pathname,f;if(c==null)f=t;else{let _=e.length-1;if(!r&&c.startsWith("..")){let x=c.split("/");for(;x[0]==="..";)x.shift(),_-=1;a.pathname=x.join("/")}f=_>=0?e[_]:"/"}let h=I0(a,f),p=c&&c!=="/"&&c.endsWith("/"),g=(l||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}var Ti=s=>s.join("/").replace(/\/\/+/g,"/"),N0=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),F0=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,O0=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,k0=class{constructor(s,e,t,r=!1){this.status=s,this.statusText=e||"",this.internal=r,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function B0(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function z0(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Dg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ig(s,e){let t=s;if(typeof t!="string"||!D0.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let r=t,a=!1;if(Dg)try{let l=new URL(window.location.href),c=t.startsWith("//")?new URL(l.protocol+t):new URL(t),f=qi(c.pathname,e);c.origin===l.origin&&f!=null?t=f+c.search+c.hash:a=!0}catch{pi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:a,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ug=["POST","PUT","PATCH","DELETE"];new Set(Ug);var H0=["GET",...Ug];new Set(H0);var no=Q.createContext(null);no.displayName="DataRouter";var Ql=Q.createContext(null);Ql.displayName="DataRouterState";var V0=Q.createContext(!1),Ng=Q.createContext({isTransitioning:!1});Ng.displayName="ViewTransition";var G0=Q.createContext(new Map);G0.displayName="Fetchers";var W0=Q.createContext(null);W0.displayName="Await";var Qn=Q.createContext(null);Qn.displayName="Navigation";var ea=Q.createContext(null);ea.displayName="Location";var mi=Q.createContext({outlet:null,matches:[],isDataRoute:!1});mi.displayName="Route";var vd=Q.createContext(null);vd.displayName="RouteError";var Fg="REACT_ROUTER_ERROR",X0="REDIRECT",j0="ROUTE_ERROR_RESPONSE";function $0(s){if(s.startsWith(`${Fg}:${X0}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Y0(s){if(s.startsWith(`${Fg}:${j0}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new k0(e.status,e.statusText,e.data)}catch{}}function q0(s,{relative:e}={}){zt(ta(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=Q.useContext(Qn),{hash:a,pathname:l,search:c}=na(s,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Ti([t,l])),r.createHref({pathname:f,search:c,hash:a})}function ta(){return Q.useContext(ea)!=null}function Ci(){return zt(ta(),"useLocation() may be used only in the context of a <Router> component."),Q.useContext(ea).location}var Og="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function kg(s){Q.useContext(Qn).static||Q.useLayoutEffect(s)}function _d(){let{isDataRoute:s}=Q.useContext(mi);return s?fx():K0()}function K0(){zt(ta(),"useNavigate() may be used only in the context of a <Router> component.");let s=Q.useContext(no),{basename:e,navigator:t}=Q.useContext(Qn),{matches:r}=Q.useContext(mi),{pathname:a}=Ci(),l=JSON.stringify(Lg(r)),c=Q.useRef(!1);return kg(()=>{c.current=!0}),Q.useCallback((h,p={})=>{if(pi(c.current,Og),!c.current)return;if(typeof h=="number"){t.go(h);return}let g=gd(h,JSON.parse(l),a,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Ti([e,g.pathname])),(p.replace?t.replace:t.push)(g,p.state,p)},[e,t,l,a,s])}var Z0=Q.createContext(null);function Q0(s){let e=Q.useContext(mi).outlet;return Q.useMemo(()=>e&&Q.createElement(Z0.Provider,{value:s},e),[e,s])}function J0(){let{matches:s}=Q.useContext(mi),e=s[s.length-1];return e?e.params:{}}function na(s,{relative:e}={}){let{matches:t}=Q.useContext(mi),{pathname:r}=Ci(),a=JSON.stringify(Lg(t));return Q.useMemo(()=>gd(s,JSON.parse(a),r,e==="path"),[s,a,r,e])}function ex(s,e){return Bg(s,e)}function Bg(s,e,t){var y;zt(ta(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=Q.useContext(Qn),{matches:a}=Q.useContext(mi),l=a[a.length-1],c=l?l.params:{},f=l?l.pathname:"/",h=l?l.pathnameBase:"/",p=l&&l.route;{let v=p&&p.path||"";Hg(f,!p||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let g=Ci(),_;if(e){let v=typeof e=="string"?to(e):e;zt(h==="/"||((y=v.pathname)==null?void 0:y.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${v.pathname}" was given in the \`location\` prop.`),_=v}else _=g;let x=_.pathname||"/",S=x;if(h!=="/"){let v=h.replace(/^\//,"").split("/");S="/"+x.replace(/^\//,"").split("/").slice(v.length).join("/")}let M=Cg(s,{pathname:S});pi(p||M!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),pi(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=sx(M&&M.map(v=>Object.assign({},v,{params:Object.assign({},c,v.params),pathname:Ti([h,r.encodeLocation?r.encodeLocation(v.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?h:Ti([h,r.encodeLocation?r.encodeLocation(v.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathnameBase])})),a,t);return e&&E?Q.createElement(ea.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,..._},navigationType:"POP"}},E):E}function tx(){let s=cx(),e=B0(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},c=null;return console.error("Error handled by React Router default ErrorBoundary:",s),c=Q.createElement(Q.Fragment,null,Q.createElement("p",null,"💿 Hey developer 👋"),Q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Q.createElement("code",{style:l},"ErrorBoundary")," or"," ",Q.createElement("code",{style:l},"errorElement")," prop on your route.")),Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),t?Q.createElement("pre",{style:a},t):null,c)}var nx=Q.createElement(tx,null),zg=class extends Q.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const t=Y0(s.digest);t&&(s=t)}let e=s!==void 0?Q.createElement(mi.Provider,{value:this.props.routeContext},Q.createElement(vd.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?Q.createElement(ix,{error:s},e):e}};zg.contextType=V0;var Vc=new WeakMap;function ix({children:s,error:e}){let{basename:t}=Q.useContext(Qn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=$0(e.digest);if(r){let a=Vc.get(e);if(a)throw a;let l=Ig(r.location,t);if(Dg&&!Vc.get(e))if(l.isExternal||r.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:r.replace}));throw Vc.set(e,c),c}return Q.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return s}function rx({routeContext:s,match:e,children:t}){let r=Q.useContext(no);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),Q.createElement(mi.Provider,{value:s},t)}function sx(s,e=[],t){let r=t==null?void 0:t.state;if(s==null){if(!r)return null;if(r.errors)s=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let a=s,l=r==null?void 0:r.errors;if(l!=null){let g=a.findIndex(_=>_.route.id&&(l==null?void 0:l[_.route.id])!==void 0);zt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,g+1))}let c=!1,f=-1;if(t&&r){c=r.renderFallback;for(let g=0;g<a.length;g++){let _=a[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(f=g),_.route.id){let{loaderData:x,errors:S}=r,M=_.route.loader&&!x.hasOwnProperty(_.route.id)&&(!S||S[_.route.id]===void 0);if(_.route.lazy||M){t.isStatic&&(c=!0),f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}}let h=t==null?void 0:t.onError,p=r&&h?(g,_)=>{var x,S;h(g,{location:r.location,params:((S=(x=r.matches)==null?void 0:x[0])==null?void 0:S.params)??{},unstable_pattern:z0(r.matches),errorInfo:_})}:void 0;return a.reduceRight((g,_,x)=>{let S,M=!1,E=null,y=null;r&&(S=l&&_.route.id?l[_.route.id]:void 0,E=_.route.errorElement||nx,c&&(f<0&&x===0?(Hg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,y=null):f===x&&(M=!0,y=_.route.hydrateFallbackElement||null)));let v=e.concat(a.slice(0,x+1)),L=()=>{let b;return S?b=E:M?b=y:_.route.Component?b=Q.createElement(_.route.Component,null):_.route.element?b=_.route.element:b=g,Q.createElement(rx,{match:_,routeContext:{outlet:g,matches:v,isDataRoute:r!=null},children:b})};return r&&(_.route.ErrorBoundary||_.route.errorElement||x===0)?Q.createElement(zg,{location:r.location,revalidation:r.revalidation,component:E,error:S,children:L(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:p}):L()},null)}function xd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ox(s){let e=Q.useContext(no);return zt(e,xd(s)),e}function ax(s){let e=Q.useContext(Ql);return zt(e,xd(s)),e}function lx(s){let e=Q.useContext(mi);return zt(e,xd(s)),e}function yd(s){let e=lx(s),t=e.matches[e.matches.length-1];return zt(t.route.id,`${s} can only be used on routes that contain a unique "id"`),t.route.id}function ux(){return yd("useRouteId")}function cx(){var r;let s=Q.useContext(vd),e=ax("useRouteError"),t=yd("useRouteError");return s!==void 0?s:(r=e.errors)==null?void 0:r[t]}function fx(){let{router:s}=ox("useNavigate"),e=yd("useNavigate"),t=Q.useRef(!1);return kg(()=>{t.current=!0}),Q.useCallback(async(a,l={})=>{pi(t.current,Og),t.current&&(typeof a=="number"?await s.navigate(a):await s.navigate(a,{fromRouteId:e,...l}))},[s,e])}var ym={};function Hg(s,e,t){!e&&!ym[s]&&(ym[s]=!0,pi(!1,t))}Q.memo(dx);function dx({routes:s,future:e,state:t,isStatic:r,onError:a}){return Bg(s,void 0,{state:t,isStatic:r,onError:a})}function hx(s){return Q0(s.context)}function wr(s){zt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function px({basename:s="/",children:e=null,location:t,navigationType:r="POP",navigator:a,static:l=!1,unstable_useTransitions:c}){zt(!ta(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),h=Q.useMemo(()=>({basename:f,navigator:a,static:l,unstable_useTransitions:c,future:{}}),[f,a,l,c]);typeof t=="string"&&(t=to(t));let{pathname:p="/",search:g="",hash:_="",state:x=null,key:S="default",unstable_mask:M}=t,E=Q.useMemo(()=>{let y=qi(p,f);return y==null?null:{location:{pathname:y,search:g,hash:_,state:x,key:S,unstable_mask:M},navigationType:r}},[f,p,g,_,x,S,r,M]);return pi(E!=null,`<Router basename="${f}"> is not able to match the URL "${p}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:Q.createElement(Qn.Provider,{value:h},Q.createElement(ea.Provider,{children:e,value:E}))}function mx({children:s,location:e}){return ex(Af(s),e)}function Af(s,e=[]){let t=[];return Q.Children.forEach(s,(r,a)=>{if(!Q.isValidElement(r))return;let l=[...e,a];if(r.type===Q.Fragment){t.push.apply(t,Af(r.props.children,l));return}zt(r.type===wr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),zt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=Af(r.props.children,l)),t.push(c)}),t}var kl="get",Bl="application/x-www-form-urlencoded";function Jl(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function gx(s){return Jl(s)&&s.tagName.toLowerCase()==="button"}function vx(s){return Jl(s)&&s.tagName.toLowerCase()==="form"}function _x(s){return Jl(s)&&s.tagName.toLowerCase()==="input"}function xx(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function yx(s,e){return s.button===0&&(!e||e==="_self")&&!xx(s)}function Rf(s=""){return new URLSearchParams(typeof s=="string"||Array.isArray(s)||s instanceof URLSearchParams?s:Object.keys(s).reduce((e,t)=>{let r=s[t];return e.concat(Array.isArray(r)?r.map(a=>[t,a]):[[t,r]])},[]))}function Sx(s,e){let t=Rf(s);return e&&e.forEach((r,a)=>{t.has(a)||e.getAll(a).forEach(l=>{t.append(a,l)})}),t}var hl=null;function Mx(){if(hl===null)try{new FormData(document.createElement("form"),0),hl=!1}catch{hl=!0}return hl}var Ex=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gc(s){return s!=null&&!Ex.has(s)?(pi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bl}"`),null):s}function wx(s,e){let t,r,a,l,c;if(vx(s)){let f=s.getAttribute("action");r=f?qi(f,e):null,t=s.getAttribute("method")||kl,a=Gc(s.getAttribute("enctype"))||Bl,l=new FormData(s)}else if(gx(s)||_x(s)&&(s.type==="submit"||s.type==="image")){let f=s.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=s.getAttribute("formaction")||f.getAttribute("action");if(r=h?qi(h,e):null,t=s.getAttribute("formmethod")||f.getAttribute("method")||kl,a=Gc(s.getAttribute("formenctype"))||Gc(f.getAttribute("enctype"))||Bl,l=new FormData(f,s),!Mx()){let{name:p,type:g,value:_}=s;if(g==="image"){let x=p?`${p}.`:"";l.append(`${x}x`,"0"),l.append(`${x}y`,"0")}else p&&l.append(p,_)}}else{if(Jl(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=kl,r=null,a=Bl,c=s}return l&&a==="text/plain"&&(c=l,l=void 0),{action:r,method:t.toLowerCase(),encType:a,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sd(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Tx(s,e,t,r){let a=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return t?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${r}`:a.pathname=`${a.pathname}.${r}`:a.pathname==="/"?a.pathname=`_root.${r}`:e&&qi(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${r}`,a}async function Ax(s,e){if(s.id in e)return e[s.id];try{let t=await import(s.module);return e[s.id]=t,t}catch(t){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Rx(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Cx(s,e,t){let r=await Promise.all(s.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await Ax(l,t);return c.links?c.links():[]}return[]}));return Dx(r.flat(1).filter(Rx).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Sm(s,e,t,r,a,l){let c=(h,p)=>t[p]?h.route.id!==t[p].route.id:!0,f=(h,p)=>{var g;return t[p].pathname!==h.pathname||((g=t[p].route.path)==null?void 0:g.endsWith("*"))&&t[p].params["*"]!==h.params["*"]};return l==="assets"?e.filter((h,p)=>c(h,p)||f(h,p)):l==="data"?e.filter((h,p)=>{var _;let g=r.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(c(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((_=t[0])==null?void 0:_.params)||{},nextUrl:new URL(s,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Px(s,e,{includeHydrateFallback:t}={}){return bx(s.map(r=>{let a=e.routes[r.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function bx(s){return[...new Set(s)]}function Lx(s){let e={},t=Object.keys(s).sort();for(let r of t)e[r]=s[r];return e}function Dx(s,e){let t=new Set;return new Set(e),s.reduce((r,a)=>{let l=JSON.stringify(Lx(a));return t.has(l)||(t.add(l),r.push({key:l,link:a})),r},[])}function Vg(){let s=Q.useContext(no);return Sd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Ix(){let s=Q.useContext(Ql);return Sd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Md=Q.createContext(void 0);Md.displayName="FrameworkContext";function Gg(){let s=Q.useContext(Md);return Sd(s,"You must render this element inside a <HydratedRouter> element"),s}function Ux(s,e){let t=Q.useContext(Md),[r,a]=Q.useState(!1),[l,c]=Q.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:g,onTouchStart:_}=e,x=Q.useRef(null);Q.useEffect(()=>{if(s==="render"&&c(!0),s==="viewport"){let E=v=>{v.forEach(L=>{c(L.isIntersecting)})},y=new IntersectionObserver(E,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[s]),Q.useEffect(()=>{if(r){let E=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(E)}}},[r]);let S=()=>{a(!0)},M=()=>{a(!1),c(!1)};return t?s!=="intent"?[l,x,{}]:[l,x,{onFocus:Ho(f,S),onBlur:Ho(h,M),onMouseEnter:Ho(p,S),onMouseLeave:Ho(g,M),onTouchStart:Ho(_,S)}]:[!1,x,{}]}function Ho(s,e){return t=>{s&&s(t),t.defaultPrevented||e(t)}}function Nx({page:s,...e}){let{router:t}=Vg(),r=Q.useMemo(()=>Cg(t.routes,s,t.basename),[t.routes,s,t.basename]);return r?Q.createElement(Ox,{page:s,matches:r,...e}):null}function Fx(s){let{manifest:e,routeModules:t}=Gg(),[r,a]=Q.useState([]);return Q.useEffect(()=>{let l=!1;return Cx(s,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[s,e,t]),r}function Ox({page:s,matches:e,...t}){let r=Ci(),{future:a,manifest:l,routeModules:c}=Gg(),{basename:f}=Vg(),{loaderData:h,matches:p}=Ix(),g=Q.useMemo(()=>Sm(s,e,p,l,r,"data"),[s,e,p,l,r]),_=Q.useMemo(()=>Sm(s,e,p,l,r,"assets"),[s,e,p,l,r]),x=Q.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,y=!1;if(e.forEach(L=>{var C;let b=l.routes[L.route.id];!b||!b.hasLoader||(!g.some(W=>W.route.id===L.route.id)&&L.route.id in h&&((C=c[L.route.id])!=null&&C.shouldRevalidate)||b.hasClientLoader?y=!0:E.add(L.route.id))}),E.size===0)return[];let v=Tx(s,f,a.unstable_trailingSlashAwareDataRequests,"data");return y&&E.size>0&&v.searchParams.set("_routes",e.filter(L=>E.has(L.route.id)).map(L=>L.route.id).join(",")),[v.pathname+v.search]},[f,a.unstable_trailingSlashAwareDataRequests,h,r,l,g,e,s,c]),S=Q.useMemo(()=>Px(_,l),[_,l]),M=Fx(_);return Q.createElement(Q.Fragment,null,x.map(E=>Q.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...t})),S.map(E=>Q.createElement("link",{key:E,rel:"modulepreload",href:E,...t})),M.map(({key:E,link:y})=>Q.createElement("link",{key:E,nonce:t.nonce,...y,crossOrigin:y.crossOrigin??t.crossOrigin})))}function kx(...s){return e=>{s.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Bx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Bx&&(window.__reactRouterVersion="7.13.1")}catch{}function zx({basename:s,children:e,unstable_useTransitions:t,window:r}){let a=Q.useRef();a.current==null&&(a.current=m0({window:r,v5Compat:!0}));let l=a.current,[c,f]=Q.useState({action:l.action,location:l.location}),h=Q.useCallback(p=>{t===!1?f(p):Q.startTransition(()=>f(p))},[t]);return Q.useLayoutEffect(()=>l.listen(h),[l,h]),Q.createElement(px,{basename:s,children:e,location:c.location,navigationType:c.action,navigator:l,unstable_useTransitions:t})}var Wg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xg=Q.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:a,reloadDocument:l,replace:c,unstable_mask:f,state:h,target:p,to:g,preventScrollReset:_,viewTransition:x,unstable_defaultShouldRevalidate:S,...M},E){let{basename:y,navigator:v,unstable_useTransitions:L}=Q.useContext(Qn),b=typeof g=="string"&&Wg.test(g),C=Ig(g,y);g=C.to;let W=q0(g,{relative:a}),F=Ci(),U=null;if(f){let ce=gd(f,[],F.unstable_mask?F.unstable_mask.pathname:"/",!0);y!=="/"&&(ce.pathname=ce.pathname==="/"?y:Ti([y,ce.pathname])),U=v.createHref(ce)}let[V,P,A]=Ux(r,M),k=Wx(g,{replace:c,unstable_mask:f,state:h,target:p,preventScrollReset:_,relative:a,viewTransition:x,unstable_defaultShouldRevalidate:S,unstable_useTransitions:L});function ie(ce){e&&e(ce),ce.defaultPrevented||k(ce)}let q=!(C.isExternal||l),ue=Q.createElement("a",{...M,...A,href:(q?U:void 0)||C.absoluteURL||W,onClick:q?ie:e,ref:kx(E,P),target:p,"data-discover":!b&&t==="render"?"true":void 0});return V&&!b?Q.createElement(Q.Fragment,null,ue,Q.createElement(Nx,{page:W})):ue});Xg.displayName="Link";var Hx=Q.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:a=!1,style:l,to:c,viewTransition:f,children:h,...p},g){let _=na(c,{relative:p.relative}),x=Ci(),S=Q.useContext(Ql),{navigator:M,basename:E}=Q.useContext(Qn),y=S!=null&&Kx(_)&&f===!0,v=M.encodeLocation?M.encodeLocation(_).pathname:_.pathname,L=x.pathname,b=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(L=L.toLowerCase(),b=b?b.toLowerCase():null,v=v.toLowerCase()),b&&E&&(b=qi(b,E)||b);const C=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let W=L===v||!a&&L.startsWith(v)&&L.charAt(C)==="/",F=b!=null&&(b===v||!a&&b.startsWith(v)&&b.charAt(v.length)==="/"),U={isActive:W,isPending:F,isTransitioning:y},V=W?e:void 0,P;typeof r=="function"?P=r(U):P=[r,W?"active":null,F?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let A=typeof l=="function"?l(U):l;return Q.createElement(Xg,{...p,"aria-current":V,className:P,ref:g,style:A,to:c,viewTransition:f},typeof h=="function"?h(U):h)});Hx.displayName="NavLink";var Vx=Q.forwardRef(({discover:s="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:a,state:l,method:c=kl,action:f,onSubmit:h,relative:p,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:x,...S},M)=>{let{unstable_useTransitions:E}=Q.useContext(Qn),y=Yx(),v=qx(f,{relative:p}),L=c.toLowerCase()==="get"?"get":"post",b=typeof f=="string"&&Wg.test(f),C=W=>{if(h&&h(W),W.defaultPrevented)return;W.preventDefault();let F=W.nativeEvent.submitter,U=(F==null?void 0:F.getAttribute("formmethod"))||c,V=()=>y(F||W.currentTarget,{fetcherKey:e,method:U,navigate:t,replace:a,state:l,relative:p,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:x});E&&t!==!1?Q.startTransition(()=>V()):V()};return Q.createElement("form",{ref:M,method:L,action:v,onSubmit:r?h:C,...S,"data-discover":!b&&s==="render"?"true":void 0})});Vx.displayName="Form";function Gx(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jg(s){let e=Q.useContext(no);return zt(e,Gx(s)),e}function Wx(s,{target:e,replace:t,unstable_mask:r,state:a,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:p}={}){let g=_d(),_=Ci(),x=na(s,{relative:c});return Q.useCallback(S=>{if(yx(S,e)){S.preventDefault();let M=t!==void 0?t:Zo(_)===Zo(x),E=()=>g(s,{replace:M,unstable_mask:r,state:a,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h});p?Q.startTransition(()=>E()):E()}},[_,g,x,t,r,a,e,s,l,c,f,h,p])}function Xx(s){pi(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let e=Q.useRef(Rf(s)),t=Q.useRef(!1),r=Ci(),a=Q.useMemo(()=>Sx(r.search,t.current?null:e.current),[r.search]),l=_d(),c=Q.useCallback((f,h)=>{const p=Rf(typeof f=="function"?f(new URLSearchParams(a)):f);t.current=!0,l("?"+p,h)},[l,a]);return[a,c]}var jx=0,$x=()=>`__${String(++jx)}__`;function Yx(){let{router:s}=jg("useSubmit"),{basename:e}=Q.useContext(Qn),t=ux(),r=s.fetch,a=s.navigate;return Q.useCallback(async(l,c={})=>{let{action:f,method:h,encType:p,formData:g,body:_}=wx(l,e);if(c.navigate===!1){let x=c.fetcherKey||$x();await r(x,t,c.action||f,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:g,body:_,formMethod:c.method||h,formEncType:c.encType||p,flushSync:c.flushSync})}else await a(c.action||f,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:g,body:_,formMethod:c.method||h,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[r,a,e,t])}function qx(s,{relative:e}={}){let{basename:t}=Q.useContext(Qn),r=Q.useContext(mi);zt(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),l={...na(s||".",{relative:e})},c=Ci();if(s==null){l.search=c.search;let f=new URLSearchParams(l.search),h=f.getAll("index");if(h.some(g=>g==="")){f.delete("index"),h.filter(_=>_).forEach(_=>f.append("index",_));let g=f.toString();l.search=g?`?${g}`:""}}return(!s||s===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Ti([t,l.pathname])),Zo(l)}function Kx(s,{relative:e}={}){let t=Q.useContext(Ng);zt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=jg("useViewTransitionState"),a=na(s,{relative:e});if(!t.isTransitioning)return!1;let l=qi(t.currentLocation.pathname,r)||t.currentLocation.pathname,c=qi(t.nextLocation.pathname,r)||t.nextLocation.pathname;return jl(a.pathname,c)!=null||jl(a.pathname,l)!=null}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ed="170",Zx=0,Mm=1,Qx=2,$g=1,Yg=2,Xi=3,br=0,In=1,Ei=2,Cr=0,js=1,Em=2,wm=3,Tm=4,Jx=5,es=100,ey=101,ty=102,ny=103,iy=104,ry=200,sy=201,oy=202,ay=203,Cf=204,Pf=205,ly=206,uy=207,cy=208,fy=209,dy=210,hy=211,py=212,my=213,gy=214,bf=0,Lf=1,Df=2,qs=3,If=4,Uf=5,Nf=6,Ff=7,wd=0,vy=1,_y=2,Pr=0,xy=1,yy=2,Sy=3,My=4,Ey=5,wy=6,Ty=7,qg=300,Ks=301,Zs=302,Of=303,kf=304,eu=306,Bf=1e3,ns=1001,zf=1002,hi=1003,Ay=1004,pl=1005,wi=1006,Wc=1007,is=1008,Ki=1009,Kg=1010,Zg=1011,Qo=1012,Td=1013,ss=1014,ji=1015,ia=1016,Ad=1017,Rd=1018,Qs=1020,Qg=35902,Jg=1021,ev=1022,di=1023,tv=1024,nv=1025,$s=1026,Js=1027,iv=1028,Cd=1029,rv=1030,Pd=1031,bd=1033,zl=33776,Hl=33777,Vl=33778,Gl=33779,Hf=35840,Vf=35841,Gf=35842,Wf=35843,Xf=36196,jf=37492,$f=37496,Yf=37808,qf=37809,Kf=37810,Zf=37811,Qf=37812,Jf=37813,ed=37814,td=37815,nd=37816,id=37817,rd=37818,sd=37819,od=37820,ad=37821,Wl=36492,ld=36494,ud=36495,sv=36283,cd=36284,fd=36285,dd=36286,Ry=3200,Cy=3201,ov=0,Py=1,Ar="",Hn="srgb",io="srgb-linear",tu="linear",bt="srgb",Ls=7680,Am=519,by=512,Ly=513,Dy=514,av=515,Iy=516,Uy=517,Ny=518,Fy=519,Rm=35044,Cm="300 es",$i=2e3,$l=2001;class ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=Math.PI/180,hd=180/Math.PI;function ra(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function Dn(s,e,t){return Math.max(e,Math.min(t,s))}function Oy(s,e){return(s%e+e)%e}function jc(s,e,t){return(1-t)*s+t*e}function Vo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(e=0,t=0){Mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Dn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,r,a,l,c,f,h,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,p)}set(e,t,r,a,l,c,f,h,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],p=r[1],g=r[4],_=r[7],x=r[2],S=r[5],M=r[8],E=a[0],y=a[3],v=a[6],L=a[1],b=a[4],C=a[7],W=a[2],F=a[5],U=a[8];return l[0]=c*E+f*L+h*W,l[3]=c*y+f*b+h*F,l[6]=c*v+f*C+h*U,l[1]=p*E+g*L+_*W,l[4]=p*y+g*b+_*F,l[7]=p*v+g*C+_*U,l[2]=x*E+S*L+M*W,l[5]=x*y+S*b+M*F,l[8]=x*v+S*C+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8];return t*c*g-t*f*p-r*l*g+r*f*h+a*l*p-a*c*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],_=g*c-f*p,x=f*h-g*l,S=p*l-c*h,M=t*_+r*x+a*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=_*E,e[1]=(a*p-g*r)*E,e[2]=(f*r-a*c)*E,e[3]=x*E,e[4]=(g*t-a*h)*E,e[5]=(a*l-f*t)*E,e[6]=S*E,e[7]=(r*h-p*t)*E,e[8]=(c*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*f)+c+e,-a*p,a*h,-a*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply($c.makeScale(e,t)),this}rotate(e){return this.premultiply($c.makeRotation(-e)),this}translate(e,t){return this.premultiply($c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $c=new ut;function lv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Yl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ky(){const s=Yl("canvas");return s.style.display="block",s}const Pm={};function Yo(s){s in Pm||(Pm[s]=!0,console.warn(s))}function By(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function zy(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hy(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:io,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===bt&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===bt&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ar?tu:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const bm=[.64,.33,.3,.6,.15,.06],Lm=[.2126,.7152,.0722],Dm=[.3127,.329],Im=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Um=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[io]:{primaries:bm,whitePoint:Dm,transfer:tu,toXYZ:Im,fromXYZ:Um,luminanceCoefficients:Lm,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:bm,whitePoint:Dm,transfer:bt,toXYZ:Im,fromXYZ:Um,luminanceCoefficients:Lm,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}});let Ds;class Vy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ds===void 0&&(Ds=Yl("canvas")),Ds.width=e.width,Ds.height=e.height;const r=Ds.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Yi(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Yi(t[r]/255)*255):t[r]=Yi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gy=0;class uv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=ra(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Yc(a[c].image)):l.push(Yc(a[c]))}else l=Yc(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Yc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wy=0;class Un extends ro{constructor(e=Un.DEFAULT_IMAGE,t=Un.DEFAULT_MAPPING,r=ns,a=ns,l=wi,c=is,f=di,h=Ki,p=Un.DEFAULT_ANISOTROPY,g=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=ra(),this.name="",this.source=new uv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bf:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case zf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bf:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case zf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=qg;Un.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],g=h[4],_=h[8],x=h[1],S=h[5],M=h[9],E=h[2],y=h[6],v=h[10];if(Math.abs(g-x)<.01&&Math.abs(_-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+E)<.1&&Math.abs(M+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(p+1)/2,C=(S+1)/2,W=(v+1)/2,F=(g+x)/4,U=(_+E)/4,V=(M+y)/4;return b>C&&b>W?b<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(b),a=F/r,l=U/r):C>W?C<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),r=F/a,l=V/a):W<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(W),r=U/l,a=V/l),this.set(r,a,l,t),this}let L=Math.sqrt((y-M)*(y-M)+(_-E)*(_-E)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(y-M)/L,this.y=(_-E)/L,this.z=(x-g)/L,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xy extends ro{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Un(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new uv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends Xy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class cv extends Un{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=hi,this.minFilter=hi,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jy extends Un{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=hi,this.minFilter=hi,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sa{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,f){let h=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];const x=l[c+0],S=l[c+1],M=l[c+2],E=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f===1){e[t+0]=x,e[t+1]=S,e[t+2]=M,e[t+3]=E;return}if(_!==E||h!==x||p!==S||g!==M){let y=1-f;const v=h*x+p*S+g*M+_*E,L=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const W=Math.sqrt(b),F=Math.atan2(W,v*L);y=Math.sin(y*F)/W,f=Math.sin(f*F)/W}const C=f*L;if(h=h*y+x*C,p=p*y+S*C,g=g*y+M*C,_=_*y+E*C,y===1-f){const W=1/Math.sqrt(h*h+p*p+g*g+_*_);h*=W,p*=W,g*=W,_*=W}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,c){const f=r[a],h=r[a+1],p=r[a+2],g=r[a+3],_=l[c],x=l[c+1],S=l[c+2],M=l[c+3];return e[t]=f*M+g*_+h*S-p*x,e[t+1]=h*M+g*x+p*_-f*S,e[t+2]=p*M+g*S+f*x-h*_,e[t+3]=g*M-f*_-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(r/2),g=f(a/2),_=f(l/2),x=h(r/2),S=h(a/2),M=h(l/2);switch(c){case"XYZ":this._x=x*g*_+p*S*M,this._y=p*S*_-x*g*M,this._z=p*g*M+x*S*_,this._w=p*g*_-x*S*M;break;case"YXZ":this._x=x*g*_+p*S*M,this._y=p*S*_-x*g*M,this._z=p*g*M-x*S*_,this._w=p*g*_+x*S*M;break;case"ZXY":this._x=x*g*_-p*S*M,this._y=p*S*_+x*g*M,this._z=p*g*M+x*S*_,this._w=p*g*_-x*S*M;break;case"ZYX":this._x=x*g*_-p*S*M,this._y=p*S*_+x*g*M,this._z=p*g*M-x*S*_,this._w=p*g*_+x*S*M;break;case"YZX":this._x=x*g*_+p*S*M,this._y=p*S*_+x*g*M,this._z=p*g*M-x*S*_,this._w=p*g*_-x*S*M;break;case"XZY":this._x=x*g*_-p*S*M,this._y=p*S*_-x*g*M,this._z=p*g*M+x*S*_,this._w=p*g*_+x*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],g=t[6],_=t[10],x=r+f+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(g-h)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,g=t._w;return this._x=r*g+c*f+a*p-l*h,this._y=a*g+c*h+l*f-r*p,this._z=l*g+c*p+r*h-a*f,this._w=c*g-r*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,f),_=Math.sin((1-t)*g)/p,x=Math.sin(t*g)/p;return this._w=c*_+this._w*x,this._x=r*_+this._x*x,this._y=a*_+this._y*x,this._z=l*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,r=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*a-f*r),g=2*(f*t-l*a),_=2*(l*r-c*t);return this.x=t+h*p+c*_-f*g,this.y=r+h*g+f*p-l*_,this.z=a+h*_+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-r*h,this.z=r*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qc.copy(this).projectOnVector(e),this.sub(qc)}reflect(e){return this.sub(qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Dn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qc=new J,Nm=new sa;class oa{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ai):ai.fromBufferAttribute(l,c),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ml.copy(r.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),gl.subVectors(this.max,Go),Is.subVectors(e.a,Go),Us.subVectors(e.b,Go),Ns.subVectors(e.c,Go),_r.subVectors(Us,Is),xr.subVectors(Ns,Us),jr.subVectors(Is,Ns);let t=[0,-_r.z,_r.y,0,-xr.z,xr.y,0,-jr.z,jr.y,_r.z,0,-_r.x,xr.z,0,-xr.x,jr.z,0,-jr.x,-_r.y,_r.x,0,-xr.y,xr.x,0,-jr.y,jr.x,0];return!Kc(t,Is,Us,Ns,gl)||(t=[1,0,0,0,1,0,0,0,1],!Kc(t,Is,Us,Ns,gl))?!1:(vl.crossVectors(_r,xr),t=[vl.x,vl.y,vl.z],Kc(t,Is,Us,Ns,gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zi=[new J,new J,new J,new J,new J,new J,new J,new J],ai=new J,ml=new oa,Is=new J,Us=new J,Ns=new J,_r=new J,xr=new J,jr=new J,Go=new J,gl=new J,vl=new J,$r=new J;function Kc(s,e,t,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){$r.fromArray(s,l);const f=a.x*Math.abs($r.x)+a.y*Math.abs($r.y)+a.z*Math.abs($r.z),h=e.dot($r),p=t.dot($r),g=r.dot($r);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>f)return!1}return!0}const $y=new oa,Wo=new J,Zc=new J;class nu{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):$y.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const t=Wo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Wo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Zc)),this.expandByPoint(Wo.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new J,Qc=new J,_l=new J,yr=new J,Jc=new J,xl=new J,ef=new J;class fv{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Qc.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(Qc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(_l),f=yr.dot(this.direction),h=-yr.dot(_l),p=yr.lengthSq(),g=Math.abs(1-c*c);let _,x,S,M;if(g>0)if(_=c*h-f,x=c*f-h,M=l*g,_>=0)if(x>=-M)if(x<=M){const E=1/g;_*=E,x*=E,S=_*(_+c*x+2*f)+x*(c*_+x+2*h)+p}else x=l,_=Math.max(0,-(c*x+f)),S=-_*_+x*(x+2*h)+p;else x=-l,_=Math.max(0,-(c*x+f)),S=-_*_+x*(x+2*h)+p;else x<=-M?(_=Math.max(0,-(-c*l+f)),x=_>0?-l:Math.min(Math.max(-l,-h),l),S=-_*_+x*(x+2*h)+p):x<=M?(_=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+p):(_=Math.max(0,-(c*l+f)),x=_>0?l:Math.min(Math.max(-l,-h),l),S=-_*_+x*(x+2*h)+p);else x=c>0?-l:l,_=Math.max(0,-(c*x+f)),S=-_*_+x*(x+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Qc).addScaledVector(_l,x),S}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const r=Hi.dot(this.direction),a=Hi.dot(Hi)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,f,h;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),g>=0?(l=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),_>=0?(f=(e.min.z-x.z)*_,h=(e.max.z-x.z)*_):(f=(e.max.z-x.z)*_,h=(e.min.z-x.z)*_),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,r,a,l){Jc.subVectors(t,e),xl.subVectors(r,e),ef.crossVectors(Jc,xl);let c=this.direction.dot(ef),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;yr.subVectors(this.origin,e);const h=f*this.direction.dot(xl.crossVectors(yr,xl));if(h<0)return null;const p=f*this.direction.dot(Jc.cross(yr));if(p<0||h+p>c)return null;const g=-f*yr.dot(ef);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,r,a,l,c,f,h,p,g,_,x,S,M,E,y){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,p,g,_,x,S,M,E,y)}set(e,t,r,a,l,c,f,h,p,g,_,x,S,M,E,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=a,v[1]=l,v[5]=c,v[9]=f,v[13]=h,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=S,v[7]=M,v[11]=E,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Fs.setFromMatrixColumn(e,0).length(),l=1/Fs.setFromMatrixColumn(e,1).length(),c=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(a),p=Math.sin(a),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const x=c*g,S=c*_,M=f*g,E=f*_;t[0]=h*g,t[4]=-h*_,t[8]=p,t[1]=S+M*p,t[5]=x-E*p,t[9]=-f*h,t[2]=E-x*p,t[6]=M+S*p,t[10]=c*h}else if(e.order==="YXZ"){const x=h*g,S=h*_,M=p*g,E=p*_;t[0]=x+E*f,t[4]=M*f-S,t[8]=c*p,t[1]=c*_,t[5]=c*g,t[9]=-f,t[2]=S*f-M,t[6]=E+x*f,t[10]=c*h}else if(e.order==="ZXY"){const x=h*g,S=h*_,M=p*g,E=p*_;t[0]=x-E*f,t[4]=-c*_,t[8]=M+S*f,t[1]=S+M*f,t[5]=c*g,t[9]=E-x*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const x=c*g,S=c*_,M=f*g,E=f*_;t[0]=h*g,t[4]=M*p-S,t[8]=x*p+E,t[1]=h*_,t[5]=E*p+x,t[9]=S*p-M,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,S=c*p,M=f*h,E=f*p;t[0]=h*g,t[4]=E-x*_,t[8]=M*_+S,t[1]=_,t[5]=c*g,t[9]=-f*g,t[2]=-p*g,t[6]=S*_+M,t[10]=x-E*_}else if(e.order==="XZY"){const x=c*h,S=c*p,M=f*h,E=f*p;t[0]=h*g,t[4]=-_,t[8]=p*g,t[1]=x*_+E,t[5]=c*g,t[9]=S*_-M,t[2]=M*_-S,t[6]=f*g,t[10]=E*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yy,e,qy)}lookAt(e,t,r){const a=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Sr.crossVectors(r,Bn),Sr.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Sr.crossVectors(r,Bn)),Sr.normalize(),yl.crossVectors(Bn,Sr),a[0]=Sr.x,a[4]=yl.x,a[8]=Bn.x,a[1]=Sr.y,a[5]=yl.y,a[9]=Bn.y,a[2]=Sr.z,a[6]=yl.z,a[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],p=r[12],g=r[1],_=r[5],x=r[9],S=r[13],M=r[2],E=r[6],y=r[10],v=r[14],L=r[3],b=r[7],C=r[11],W=r[15],F=a[0],U=a[4],V=a[8],P=a[12],A=a[1],k=a[5],ie=a[9],q=a[13],ue=a[2],ce=a[6],oe=a[10],de=a[14],B=a[3],fe=a[7],le=a[11],N=a[15];return l[0]=c*F+f*A+h*ue+p*B,l[4]=c*U+f*k+h*ce+p*fe,l[8]=c*V+f*ie+h*oe+p*le,l[12]=c*P+f*q+h*de+p*N,l[1]=g*F+_*A+x*ue+S*B,l[5]=g*U+_*k+x*ce+S*fe,l[9]=g*V+_*ie+x*oe+S*le,l[13]=g*P+_*q+x*de+S*N,l[2]=M*F+E*A+y*ue+v*B,l[6]=M*U+E*k+y*ce+v*fe,l[10]=M*V+E*ie+y*oe+v*le,l[14]=M*P+E*q+y*de+v*N,l[3]=L*F+b*A+C*ue+W*B,l[7]=L*U+b*k+C*ce+W*fe,l[11]=L*V+b*ie+C*oe+W*le,l[15]=L*P+b*q+C*de+W*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],g=e[2],_=e[6],x=e[10],S=e[14],M=e[3],E=e[7],y=e[11],v=e[15];return M*(+l*h*_-a*p*_-l*f*x+r*p*x+a*f*S-r*h*S)+E*(+t*h*S-t*p*x+l*c*x-a*c*S+a*p*g-l*h*g)+y*(+t*p*_-t*f*S-l*c*_+r*c*S+l*f*g-r*p*g)+v*(-a*f*g-t*h*_+t*f*x+a*c*_-r*c*x+r*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],_=e[9],x=e[10],S=e[11],M=e[12],E=e[13],y=e[14],v=e[15],L=_*y*p-E*x*p+E*h*S-f*y*S-_*h*v+f*x*v,b=M*x*p-g*y*p-M*h*S+c*y*S+g*h*v-c*x*v,C=g*E*p-M*_*p+M*f*S-c*E*S-g*f*v+c*_*v,W=M*_*h-g*E*h-M*f*x+c*E*x+g*f*y-c*_*y,F=t*L+r*b+a*C+l*W;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=L*U,e[1]=(E*x*l-_*y*l-E*a*S+r*y*S+_*a*v-r*x*v)*U,e[2]=(f*y*l-E*h*l+E*a*p-r*y*p-f*a*v+r*h*v)*U,e[3]=(_*h*l-f*x*l-_*a*p+r*x*p+f*a*S-r*h*S)*U,e[4]=b*U,e[5]=(g*y*l-M*x*l+M*a*S-t*y*S-g*a*v+t*x*v)*U,e[6]=(M*h*l-c*y*l-M*a*p+t*y*p+c*a*v-t*h*v)*U,e[7]=(c*x*l-g*h*l+g*a*p-t*x*p-c*a*S+t*h*S)*U,e[8]=C*U,e[9]=(M*_*l-g*E*l-M*r*S+t*E*S+g*r*v-t*_*v)*U,e[10]=(c*E*l-M*f*l+M*r*p-t*E*p-c*r*v+t*f*v)*U,e[11]=(g*f*l-c*_*l-g*r*p+t*_*p+c*r*S-t*f*S)*U,e[12]=W*U,e[13]=(g*E*a-M*_*a+M*r*x-t*E*x-g*r*y+t*_*y)*U,e[14]=(M*f*a-c*E*a-M*r*h+t*E*h+c*r*y-t*f*y)*U,e[15]=(c*_*a-g*f*a+g*r*h-t*_*h-c*r*x+t*f*x)*U,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,p=l*c,g=l*f;return this.set(p*c+r,p*f-a*h,p*h+a*f,0,p*f+a*h,g*f+r,g*h-a*c,0,p*h-a*f,g*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,g=c+c,_=f+f,x=l*p,S=l*g,M=l*_,E=c*g,y=c*_,v=f*_,L=h*p,b=h*g,C=h*_,W=r.x,F=r.y,U=r.z;return a[0]=(1-(E+v))*W,a[1]=(S+C)*W,a[2]=(M-b)*W,a[3]=0,a[4]=(S-C)*F,a[5]=(1-(x+v))*F,a[6]=(y+L)*F,a[7]=0,a[8]=(M+b)*U,a[9]=(y-L)*U,a[10]=(1-(x+E))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Fs.set(a[0],a[1],a[2]).length();const c=Fs.set(a[4],a[5],a[6]).length(),f=Fs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],li.copy(this);const p=1/l,g=1/c,_=1/f;return li.elements[0]*=p,li.elements[1]*=p,li.elements[2]*=p,li.elements[4]*=g,li.elements[5]*=g,li.elements[6]*=g,li.elements[8]*=_,li.elements[9]*=_,li.elements[10]*=_,t.setFromRotationMatrix(li),r.x=l,r.y=c,r.z=f,this}makePerspective(e,t,r,a,l,c,f=$i){const h=this.elements,p=2*l/(t-e),g=2*l/(r-a),_=(t+e)/(t-e),x=(r+a)/(r-a);let S,M;if(f===$i)S=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===$l)S=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,c,f=$i){const h=this.elements,p=1/(t-e),g=1/(r-a),_=1/(c-l),x=(t+e)*p,S=(r+a)*g;let M,E;if(f===$i)M=(c+l)*_,E=-2*_;else if(f===$l)M=l*_,E=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=E,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Fs=new J,li=new Ht,Yy=new J(0,0,0),qy=new J(1,1,1),Sr=new J,yl=new J,Bn=new J,Fm=new Ht,Om=new sa;class Ri{constructor(e=0,t=0,r=0,a=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],p=a[5],g=a[9],_=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Dn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Om.setFromEuler(this),this.setFromQuaternion(Om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class dv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ky=0;const km=new J,Os=new sa,Vi=new Ht,Sl=new J,Xo=new J,Zy=new J,Qy=new sa,Bm=new J(1,0,0),zm=new J(0,1,0),Hm=new J(0,0,1),Vm={type:"added"},Jy={type:"removed"},ks={type:"childadded",child:null},tf={type:"childremoved",child:null};class on extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new J,t=new Ri,r=new sa,a=new J(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ut}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Bm,e)}rotateY(e){return this.rotateOnAxis(zm,e)}rotateZ(e){return this.rotateOnAxis(Hm,e)}translateOnAxis(e,t){return km.copy(e).applyQuaternion(this.quaternion),this.position.add(km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bm,e)}translateY(e){return this.translateOnAxis(zm,e)}translateZ(e){return this.translateOnAxis(Hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Sl.copy(e):Sl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Xo,Sl,this.up):Vi.lookAt(Sl,Xo,this.up),this.quaternion.setFromRotationMatrix(Vi),a&&(Vi.extractRotation(a.matrixWorld),Os.setFromRotationMatrix(Vi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vm),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jy),tf.child=e,this.dispatchEvent(tf),tf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vm),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,Zy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,Qy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),g=c(e.images),_=c(e.shapes),x=c(e.skeletons),S=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=a,r;function c(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}on.DEFAULT_UP=new J(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new J,Gi=new J,nf=new J,Wi=new J,Bs=new J,zs=new J,Gm=new J,rf=new J,sf=new J,of=new J,af=new Wt,lf=new Wt,uf=new Wt;class fi{constructor(e=new J,t=new J,r=new J){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),ui.subVectors(e,t),a.cross(ui);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){ui.subVectors(a,t),Gi.subVectors(r,t),nf.subVectors(e,t);const c=ui.dot(ui),f=ui.dot(Gi),h=ui.dot(nf),p=Gi.dot(Gi),g=Gi.dot(nf),_=c*p-f*f;if(_===0)return l.set(0,0,0),null;const x=1/_,S=(p*h-f*g)*x,M=(c*g-f*h)*x;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,r,a,l,c,f,h){return this.getBarycoord(e,t,r,a,Wi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Wi.x),h.addScaledVector(c,Wi.y),h.addScaledVector(f,Wi.z),h)}static getInterpolatedAttribute(e,t,r,a,l,c){return af.setScalar(0),lf.setScalar(0),uf.setScalar(0),af.fromBufferAttribute(e,t),lf.fromBufferAttribute(e,r),uf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(af,l.x),c.addScaledVector(lf,l.y),c.addScaledVector(uf,l.z),c}static isFrontFacing(e,t,r,a){return ui.subVectors(r,t),Gi.subVectors(e,t),ui.cross(Gi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),ui.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return fi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,f;Bs.subVectors(a,r),zs.subVectors(l,r),rf.subVectors(e,r);const h=Bs.dot(rf),p=zs.dot(rf);if(h<=0&&p<=0)return t.copy(r);sf.subVectors(e,a);const g=Bs.dot(sf),_=zs.dot(sf);if(g>=0&&_<=g)return t.copy(a);const x=h*_-g*p;if(x<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(r).addScaledVector(Bs,c);of.subVectors(e,l);const S=Bs.dot(of),M=zs.dot(of);if(M>=0&&S<=M)return t.copy(l);const E=S*p-h*M;if(E<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(r).addScaledVector(zs,f);const y=g*M-S*_;if(y<=0&&_-g>=0&&S-M>=0)return Gm.subVectors(l,a),f=(_-g)/(_-g+(S-M)),t.copy(a).addScaledVector(Gm,f);const v=1/(y+E+x);return c=E*v,f=x*v,t.copy(r).addScaledVector(Bs,c).addScaledVector(zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function cf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class mt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=St.workingColorSpace){return this.r=e,this.g=t,this.b=r,St.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=St.workingColorSpace){if(e=Oy(e,1),t=Dn(t,0,1),r=Dn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=cf(c,l,e+1/3),this.g=cf(c,l,e),this.b=cf(c,l,e-1/3)}return St.toWorkingColorSpace(this,a),this}setStyle(e,t=Hn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hn){const r=hv[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return St.fromWorkingColorSpace(gn.copy(this),e),Math.round(Dn(gn.r*255,0,255))*65536+Math.round(Dn(gn.g*255,0,255))*256+Math.round(Dn(gn.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(gn.copy(this),t);const r=gn.r,a=gn.g,l=gn.b,c=Math.max(r,a,l),f=Math.min(r,a,l);let h,p;const g=(f+c)/2;if(f===c)h=0,p=0;else{const _=c-f;switch(p=g<=.5?_/(c+f):_/(2-c-f),c){case r:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-r)/_+2;break;case l:h=(r-a)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Hn){St.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,r=gn.g,a=gn.b;return e!==Hn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(Ml);const r=jc(Mr.h,Ml.h,t),a=jc(Mr.s,Ml.s,t),l=jc(Mr.l,Ml.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new mt;mt.NAMES=hv;let eS=0;class so extends ro{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=ra(),this.name="",this.blending=js,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cf,this.blendDst=Pf,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==br&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Cf&&(r.blendSrc=this.blendSrc),this.blendDst!==Pf&&(r.blendDst=this.blendDst),this.blendEquation!==es&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Am&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ql extends so{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new J,El=new Mt;class Ai{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Rm,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)El.fromBufferAttribute(this,t),El.applyMatrix3(e),this.setXY(t,El.x,El.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Vo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ln(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array),a=Ln(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array),a=Ln(a,this.array),l=Ln(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rm&&(e.usage=this.usage),e}}class pv extends Ai{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class mv extends Ai{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Vt extends Ai{constructor(e,t,r){super(new Float32Array(e),t,r)}}let tS=0;const Zn=new Ht,ff=new on,Hs=new J,zn=new oa,jo=new oa,sn=new J;class Vn extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lv(e)?mv:pv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ut().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,r){return Zn.makeTranslation(e,t,r),this.applyMatrix4(Zn),this}scale(e,t,r){return Zn.makeScale(e,t,r),this.applyMatrix4(Zn),this}lookAt(e){return ff.lookAt(e),ff.updateMatrix(),this.applyMatrix4(ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Vt(r,3))}else{for(let r=0,a=t.count;r<a;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];zn.setFromBufferAttribute(l),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];jo.setFromBufferAttribute(f),this.morphTargetsRelative?(sn.addVectors(zn.min,jo.min),zn.expandByPoint(sn),sn.addVectors(zn.max,jo.max),zn.expandByPoint(sn)):(zn.expandByPoint(jo.min),zn.expandByPoint(jo.max))}zn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)sn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(sn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)sn.fromBufferAttribute(f,p),h&&(Hs.fromBufferAttribute(e,p),sn.add(Hs)),a=Math.max(a,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let V=0;V<r.count;V++)f[V]=new J,h[V]=new J;const p=new J,g=new J,_=new J,x=new Mt,S=new Mt,M=new Mt,E=new J,y=new J;function v(V,P,A){p.fromBufferAttribute(r,V),g.fromBufferAttribute(r,P),_.fromBufferAttribute(r,A),x.fromBufferAttribute(l,V),S.fromBufferAttribute(l,P),M.fromBufferAttribute(l,A),g.sub(p),_.sub(p),S.sub(x),M.sub(x);const k=1/(S.x*M.y-M.x*S.y);isFinite(k)&&(E.copy(g).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(k),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(k),f[V].add(E),f[P].add(E),f[A].add(E),h[V].add(y),h[P].add(y),h[A].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let V=0,P=L.length;V<P;++V){const A=L[V],k=A.start,ie=A.count;for(let q=k,ue=k+ie;q<ue;q+=3)v(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const b=new J,C=new J,W=new J,F=new J;function U(V){W.fromBufferAttribute(a,V),F.copy(W);const P=f[V];b.copy(P),b.sub(W.multiplyScalar(W.dot(P))).normalize(),C.crossVectors(F,P);const k=C.dot(h[V])<0?-1:1;c.setXYZW(V,b.x,b.y,b.z,k)}for(let V=0,P=L.length;V<P;++V){const A=L[V],k=A.start,ie=A.count;for(let q=k,ue=k+ie;q<ue;q+=3)U(e.getX(q+0)),U(e.getX(q+1)),U(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new J,l=new J,c=new J,f=new J,h=new J,p=new J,g=new J,_=new J;if(e)for(let x=0,S=e.count;x<S;x+=3){const M=e.getX(x+0),E=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),c.fromBufferAttribute(t,y),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,y),f.add(g),h.add(g),p.add(g),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(f,h){const p=f.array,g=f.itemSize,_=f.normalized,x=new p.constructor(h.length*g);let S=0,M=0;for(let E=0,y=h.length;E<y;E++){f.isInterleavedBufferAttribute?S=h[E]*f.data.stride+f.offset:S=h[E]*g;for(let v=0;v<g;v++)x[M++]=p[S++]}return new Ai(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vn,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let g=0,_=p.length;g<_;g++){const x=p[g],S=e(x,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let _=0,x=p.length;_<x;_++){const S=p[_];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],_=l[p];for(let x=0,S=_.length;x<S;x++)g.push(_[x].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const _=c[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wm=new Ht,Yr=new fv,wl=new nu,Xm=new J,Tl=new J,Al=new J,Rl=new J,df=new J,Cl=new J,jm=new J,Pl=new J;class It extends on{constructor(e=new Vn,t=new ql){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Cl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=f[h],_=l[h];g!==0&&(df.fromBufferAttribute(_,e),c?Cl.addScaledVector(df,g):Cl.addScaledVector(df.sub(t),g))}t.add(Cl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wl.copy(r.boundingSphere),wl.applyMatrix4(l),Yr.copy(e.ray).recast(e.near),!(wl.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(wl,Xm)===null||Yr.origin.distanceToSquared(Xm)>(e.far-e.near)**2))&&(Wm.copy(l).invert(),Yr.copy(e.ray).applyMatrix4(Wm),!(r.boundingBox!==null&&Yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,x=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,E=x.length;M<E;M++){const y=x[M],v=c[y.materialIndex],L=Math.max(y.start,S.start),b=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,W=b;C<W;C+=3){const F=f.getX(C),U=f.getX(C+1),V=f.getX(C+2);a=bl(this,v,e,r,p,g,_,F,U,V),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),E=Math.min(f.count,S.start+S.count);for(let y=M,v=E;y<v;y+=3){const L=f.getX(y),b=f.getX(y+1),C=f.getX(y+2);a=bl(this,c,e,r,p,g,_,L,b,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,E=x.length;M<E;M++){const y=x[M],v=c[y.materialIndex],L=Math.max(y.start,S.start),b=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,W=b;C<W;C+=3){const F=C,U=C+1,V=C+2;a=bl(this,v,e,r,p,g,_,F,U,V),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),E=Math.min(h.count,S.start+S.count);for(let y=M,v=E;y<v;y+=3){const L=y,b=y+1,C=y+2;a=bl(this,c,e,r,p,g,_,L,b,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function nS(s,e,t,r,a,l,c,f){let h;if(e.side===In?h=r.intersectTriangle(c,l,a,!0,f):h=r.intersectTriangle(a,l,c,e.side===br,f),h===null)return null;Pl.copy(f),Pl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Pl);return p<t.near||p>t.far?null:{distance:p,point:Pl.clone(),object:s}}function bl(s,e,t,r,a,l,c,f,h,p){s.getVertexPosition(f,Tl),s.getVertexPosition(h,Al),s.getVertexPosition(p,Rl);const g=nS(s,e,t,r,Tl,Al,Rl,jm);if(g){const _=new J;fi.getBarycoord(jm,Tl,Al,Rl,_),a&&(g.uv=fi.getInterpolatedAttribute(a,f,h,p,_,new Mt)),l&&(g.uv1=fi.getInterpolatedAttribute(l,f,h,p,_,new Mt)),c&&(g.normal=fi.getInterpolatedAttribute(c,f,h,p,_,new J),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new J,materialIndex:0};fi.getNormal(Tl,Al,Rl,x.normal),g.face=x,g.barycoord=_}return g}class oo extends Vn{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],g=[],_=[];let x=0,S=0;M("z","y","x",-1,-1,r,t,e,c,l,0),M("z","y","x",1,-1,r,t,-e,c,l,1),M("x","z","y",1,1,e,r,t,a,c,2),M("x","z","y",1,-1,e,r,-t,a,c,3),M("x","y","z",1,-1,e,t,r,a,l,4),M("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(g,3)),this.setAttribute("uv",new Vt(_,2));function M(E,y,v,L,b,C,W,F,U,V,P){const A=C/U,k=W/V,ie=C/2,q=W/2,ue=F/2,ce=U+1,oe=V+1;let de=0,B=0;const fe=new J;for(let le=0;le<oe;le++){const N=le*k-q;for(let re=0;re<ce;re++){const Ne=re*A-ie;fe[E]=Ne*L,fe[y]=N*b,fe[v]=ue,p.push(fe.x,fe.y,fe.z),fe[E]=0,fe[y]=0,fe[v]=F>0?1:-1,g.push(fe.x,fe.y,fe.z),_.push(re/U),_.push(1-le/V),de+=1}}for(let le=0;le<V;le++)for(let N=0;N<U;N++){const re=x+N+ce*le,Ne=x+N+ce*(le+1),z=x+(N+1)+ce*(le+1),ee=x+(N+1)+ce*le;h.push(re,Ne,ee),h.push(Ne,z,ee),B+=6}f.addGroup(S,B,P),S+=B,x+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Mn(s){const e={};for(let t=0;t<s.length;t++){const r=eo(s[t]);for(const a in r)e[a]=r[a]}return e}function iS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function gv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const rS={clone:eo,merge:Mn};var sS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lr extends so{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sS,this.fragmentShader=oS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=iS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class vv extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new J,$m=new Mt,Ym=new Mt;class ci extends vv{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hd*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,$m,Ym),t.subVectors(Ym,$m)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*r/p,a*=c.width/h,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vs=-90,Gs=1;class aS extends on{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ci(Vs,Gs,e,t);a.layers=this.layers,this.add(a);const l=new ci(Vs,Gs,e,t);l.layers=this.layers,this.add(l);const c=new ci(Vs,Gs,e,t);c.layers=this.layers,this.add(c);const f=new ci(Vs,Gs,e,t);f.layers=this.layers,this.add(f);const h=new ci(Vs,Gs,e,t);h.layers=this.layers,this.add(h);const p=new ci(Vs,Gs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===$i)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===$l)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,c),e.setRenderTarget(r,2,a),e.render(t,f),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,a),e.render(t,g),e.setRenderTarget(_,x,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class _v extends Un{constructor(e,t,r,a,l,c,f,h,p,g){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,r,a,l,c,f,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lS extends os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new _v(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new oo(5,5,5),l=new Lr({name:"CubemapFromEquirect",uniforms:eo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Cr});l.uniforms.tEquirect.value=t;const c=new It(a,l),f=t.minFilter;return t.minFilter===is&&(t.minFilter=wi),new aS(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}const hf=new J,uS=new J,cS=new ut;class Qr{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=hf.subVectors(r,t).cross(uS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(hf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||cS.getNormalMatrix(e),a=this.coplanarPoint(hf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new nu,Ll=new J;class Ld{constructor(e=new Qr,t=new Qr,r=new Qr,a=new Qr,l=new Qr,c=new Qr){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=$i){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],p=a[4],g=a[5],_=a[6],x=a[7],S=a[8],M=a[9],E=a[10],y=a[11],v=a[12],L=a[13],b=a[14],C=a[15];if(r[0].setComponents(h-l,x-p,y-S,C-v).normalize(),r[1].setComponents(h+l,x+p,y+S,C+v).normalize(),r[2].setComponents(h+c,x+g,y+M,C+L).normalize(),r[3].setComponents(h-c,x-g,y-M,C-L).normalize(),r[4].setComponents(h-f,x-_,y-E,C-b).normalize(),t===$i)r[5].setComponents(h+f,x+_,y+E,C+b).normalize();else if(t===$l)r[5].setComponents(f,_,E,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Ll.x=a.normal.x>0?e.max.x:e.min.x,Ll.y=a.normal.y>0?e.max.y:e.min.y,Ll.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xv(){let s=null,e=!1,t=null,r=null;function a(l,c){t(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function fS(s){const e=new WeakMap;function t(f,h){const p=f.array,g=f.usage,_=p.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,h,p){const g=h.array,_=h.updateRanges;if(s.bindBuffer(p,f),_.length===0)s.bufferSubData(p,0,g);else{_.sort((S,M)=>S.start-M.start);let x=0;for(let S=1;S<_.length;S++){const M=_[x],E=_[S];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++x,_[x]=E)}_.length=x+1;for(let S=0,M=_.length;S<M;S++){const E=_[S];s.bufferSubData(p,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:c}}class rs extends Vn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(a),p=f+1,g=h+1,_=e/f,x=t/h,S=[],M=[],E=[],y=[];for(let v=0;v<g;v++){const L=v*x-c;for(let b=0;b<p;b++){const C=b*_-l;M.push(C,-L,0),E.push(0,0,1),y.push(b/f),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let L=0;L<f;L++){const b=L+p*v,C=L+p*(v+1),W=L+1+p*(v+1),F=L+1+p*v;S.push(b,C,F),S.push(C,W,F)}this.setIndex(S),this.setAttribute("position",new Vt(M,3)),this.setAttribute("normal",new Vt(E,3)),this.setAttribute("uv",new Vt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}var dS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_S=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,SS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ES=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,AS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,US=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,NS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,FS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VS="gl_FragColor = linearToOutputTexel( gl_FragColor );",GS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$S=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_M=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,CM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,NM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_E=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ME=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,FE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,GE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:dS,alphahash_pars_fragment:hS,alphamap_fragment:pS,alphamap_pars_fragment:mS,alphatest_fragment:gS,alphatest_pars_fragment:vS,aomap_fragment:_S,aomap_pars_fragment:xS,batching_pars_vertex:yS,batching_vertex:SS,begin_vertex:MS,beginnormal_vertex:ES,bsdfs:wS,iridescence_fragment:TS,bumpmap_pars_fragment:AS,clipping_planes_fragment:RS,clipping_planes_pars_fragment:CS,clipping_planes_pars_vertex:PS,clipping_planes_vertex:bS,color_fragment:LS,color_pars_fragment:DS,color_pars_vertex:IS,color_vertex:US,common:NS,cube_uv_reflection_fragment:FS,defaultnormal_vertex:OS,displacementmap_pars_vertex:kS,displacementmap_vertex:BS,emissivemap_fragment:zS,emissivemap_pars_fragment:HS,colorspace_fragment:VS,colorspace_pars_fragment:GS,envmap_fragment:WS,envmap_common_pars_fragment:XS,envmap_pars_fragment:jS,envmap_pars_vertex:$S,envmap_physical_pars_fragment:rM,envmap_vertex:YS,fog_vertex:qS,fog_pars_vertex:KS,fog_fragment:ZS,fog_pars_fragment:QS,gradientmap_pars_fragment:JS,lightmap_pars_fragment:eM,lights_lambert_fragment:tM,lights_lambert_pars_fragment:nM,lights_pars_begin:iM,lights_toon_fragment:sM,lights_toon_pars_fragment:oM,lights_phong_fragment:aM,lights_phong_pars_fragment:lM,lights_physical_fragment:uM,lights_physical_pars_fragment:cM,lights_fragment_begin:fM,lights_fragment_maps:dM,lights_fragment_end:hM,logdepthbuf_fragment:pM,logdepthbuf_pars_fragment:mM,logdepthbuf_pars_vertex:gM,logdepthbuf_vertex:vM,map_fragment:_M,map_pars_fragment:xM,map_particle_fragment:yM,map_particle_pars_fragment:SM,metalnessmap_fragment:MM,metalnessmap_pars_fragment:EM,morphinstance_vertex:wM,morphcolor_vertex:TM,morphnormal_vertex:AM,morphtarget_pars_vertex:RM,morphtarget_vertex:CM,normal_fragment_begin:PM,normal_fragment_maps:bM,normal_pars_fragment:LM,normal_pars_vertex:DM,normal_vertex:IM,normalmap_pars_fragment:UM,clearcoat_normal_fragment_begin:NM,clearcoat_normal_fragment_maps:FM,clearcoat_pars_fragment:OM,iridescence_pars_fragment:kM,opaque_fragment:BM,packing:zM,premultiplied_alpha_fragment:HM,project_vertex:VM,dithering_fragment:GM,dithering_pars_fragment:WM,roughnessmap_fragment:XM,roughnessmap_pars_fragment:jM,shadowmap_pars_fragment:$M,shadowmap_pars_vertex:YM,shadowmap_vertex:qM,shadowmask_pars_fragment:KM,skinbase_vertex:ZM,skinning_pars_vertex:QM,skinning_vertex:JM,skinnormal_vertex:eE,specularmap_fragment:tE,specularmap_pars_fragment:nE,tonemapping_fragment:iE,tonemapping_pars_fragment:rE,transmission_fragment:sE,transmission_pars_fragment:oE,uv_pars_fragment:aE,uv_pars_vertex:lE,uv_vertex:uE,worldpos_vertex:cE,background_vert:fE,background_frag:dE,backgroundCube_vert:hE,backgroundCube_frag:pE,cube_vert:mE,cube_frag:gE,depth_vert:vE,depth_frag:_E,distanceRGBA_vert:xE,distanceRGBA_frag:yE,equirect_vert:SE,equirect_frag:ME,linedashed_vert:EE,linedashed_frag:wE,meshbasic_vert:TE,meshbasic_frag:AE,meshlambert_vert:RE,meshlambert_frag:CE,meshmatcap_vert:PE,meshmatcap_frag:bE,meshnormal_vert:LE,meshnormal_frag:DE,meshphong_vert:IE,meshphong_frag:UE,meshphysical_vert:NE,meshphysical_frag:FE,meshtoon_vert:OE,meshtoon_frag:kE,points_vert:BE,points_frag:zE,shadow_vert:HE,shadow_frag:VE,sprite_vert:GE,sprite_frag:WE},De={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Mi={basic:{uniforms:Mn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Mn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new mt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Mn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Mn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Mn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new mt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Mn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Mn([De.points,De.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Mn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Mn([De.common,De.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Mn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Mn([De.sprite,De.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Mn([De.common,De.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Mn([De.lights,De.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Mi.physical={uniforms:Mn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Dl={r:0,b:0,g:0},Kr=new Ri,XE=new Ht;function jE(s,e,t,r,a,l,c){const f=new mt(0);let h=l===!0?0:1,p,g,_=null,x=0,S=null;function M(L){let b=L.isScene===!0?L.background:null;return b&&b.isTexture&&(b=(L.backgroundBlurriness>0?t:e).get(b)),b}function E(L){let b=!1;const C=M(L);C===null?v(f,h):C&&C.isColor&&(v(C,1),b=!0);const W=s.xr.getEnvironmentBlendMode();W==="additive"?r.buffers.color.setClear(0,0,0,1,c):W==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,b){const C=M(b);C&&(C.isCubeTexture||C.mapping===eu)?(g===void 0&&(g=new It(new oo(1,1,1),new Lr({name:"BackgroundCubeMaterial",uniforms:eo(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(W,F,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Kr.copy(b.backgroundRotation),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),g.material.uniforms.envMap.value=C,g.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(XE.makeRotationFromEuler(Kr)),g.material.toneMapped=St.getTransfer(C.colorSpace)!==bt,(_!==C||x!==C.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=C,x=C.version,S=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new It(new rs(2,2),new Lr({name:"BackgroundMaterial",uniforms:eo(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.toneMapped=St.getTransfer(C.colorSpace)!==bt,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||x!==C.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,_=C,x=C.version,S=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,b){L.getRGB(Dl,gv(s)),r.buffers.color.setClear(Dl.r,Dl.g,Dl.b,b,c)}return{getClearColor:function(){return f},setClearColor:function(L,b=1){f.set(L),h=b,v(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,v(f,h)},render:E,addToRenderList:y}}function $E(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,c=!1;function f(A,k,ie,q,ue){let ce=!1;const oe=_(q,ie,k);l!==oe&&(l=oe,p(l.object)),ce=S(A,q,ie,ue),ce&&M(A,q,ie,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,C(A,k,ie,q),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function h(){return s.createVertexArray()}function p(A){return s.bindVertexArray(A)}function g(A){return s.deleteVertexArray(A)}function _(A,k,ie){const q=ie.wireframe===!0;let ue=r[A.id];ue===void 0&&(ue={},r[A.id]=ue);let ce=ue[k.id];ce===void 0&&(ce={},ue[k.id]=ce);let oe=ce[q];return oe===void 0&&(oe=x(h()),ce[q]=oe),oe}function x(A){const k=[],ie=[],q=[];for(let ue=0;ue<t;ue++)k[ue]=0,ie[ue]=0,q[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ie,attributeDivisors:q,object:A,attributes:{},index:null}}function S(A,k,ie,q){const ue=l.attributes,ce=k.attributes;let oe=0;const de=ie.getAttributes();for(const B in de)if(de[B].location>=0){const le=ue[B];let N=ce[B];if(N===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(N=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(N=A.instanceColor)),le===void 0||le.attribute!==N||N&&le.data!==N.data)return!0;oe++}return l.attributesNum!==oe||l.index!==q}function M(A,k,ie,q){const ue={},ce=k.attributes;let oe=0;const de=ie.getAttributes();for(const B in de)if(de[B].location>=0){let le=ce[B];le===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(le=A.instanceColor));const N={};N.attribute=le,le&&le.data&&(N.data=le.data),ue[B]=N,oe++}l.attributes=ue,l.attributesNum=oe,l.index=q}function E(){const A=l.newAttributes;for(let k=0,ie=A.length;k<ie;k++)A[k]=0}function y(A){v(A,0)}function v(A,k){const ie=l.newAttributes,q=l.enabledAttributes,ue=l.attributeDivisors;ie[A]=1,q[A]===0&&(s.enableVertexAttribArray(A),q[A]=1),ue[A]!==k&&(s.vertexAttribDivisor(A,k),ue[A]=k)}function L(){const A=l.newAttributes,k=l.enabledAttributes;for(let ie=0,q=k.length;ie<q;ie++)k[ie]!==A[ie]&&(s.disableVertexAttribArray(ie),k[ie]=0)}function b(A,k,ie,q,ue,ce,oe){oe===!0?s.vertexAttribIPointer(A,k,ie,ue,ce):s.vertexAttribPointer(A,k,ie,q,ue,ce)}function C(A,k,ie,q){E();const ue=q.attributes,ce=ie.getAttributes(),oe=k.defaultAttributeValues;for(const de in ce){const B=ce[de];if(B.location>=0){let fe=ue[de];if(fe===void 0&&(de==="instanceMatrix"&&A.instanceMatrix&&(fe=A.instanceMatrix),de==="instanceColor"&&A.instanceColor&&(fe=A.instanceColor)),fe!==void 0){const le=fe.normalized,N=fe.itemSize,re=e.get(fe);if(re===void 0)continue;const Ne=re.buffer,z=re.type,ee=re.bytesPerElement,ge=z===s.INT||z===s.UNSIGNED_INT||fe.gpuType===Td;if(fe.isInterleavedBufferAttribute){const he=fe.data,Re=he.stride,Pe=fe.offset;if(he.isInstancedInterleavedBuffer){for(let Ce=0;Ce<B.locationSize;Ce++)v(B.location+Ce,he.meshPerAttribute);A.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ce=0;Ce<B.locationSize;Ce++)y(B.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Ce=0;Ce<B.locationSize;Ce++)b(B.location+Ce,N/B.locationSize,z,le,Re*ee,(Pe+N/B.locationSize*Ce)*ee,ge)}else{if(fe.isInstancedBufferAttribute){for(let he=0;he<B.locationSize;he++)v(B.location+he,fe.meshPerAttribute);A.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let he=0;he<B.locationSize;he++)y(B.location+he);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let he=0;he<B.locationSize;he++)b(B.location+he,N/B.locationSize,z,le,N*ee,N/B.locationSize*he*ee,ge)}}else if(oe!==void 0){const le=oe[de];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(B.location,le);break;case 3:s.vertexAttrib3fv(B.location,le);break;case 4:s.vertexAttrib4fv(B.location,le);break;default:s.vertexAttrib1fv(B.location,le)}}}}L()}function W(){V();for(const A in r){const k=r[A];for(const ie in k){const q=k[ie];for(const ue in q)g(q[ue].object),delete q[ue];delete k[ie]}delete r[A]}}function F(A){if(r[A.id]===void 0)return;const k=r[A.id];for(const ie in k){const q=k[ie];for(const ue in q)g(q[ue].object),delete q[ue];delete k[ie]}delete r[A.id]}function U(A){for(const k in r){const ie=r[k];if(ie[A.id]===void 0)continue;const q=ie[A.id];for(const ue in q)g(q[ue].object),delete q[ue];delete ie[A.id]}}function V(){P(),c=!0,l!==a&&(l=a,p(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:V,resetDefaultState:P,dispose:W,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:y,disableUnusedAttributes:L}}function YE(s,e,t){let r;function a(p){r=p}function l(p,g){s.drawArrays(r,p,g),t.update(g,r,1)}function c(p,g,_){_!==0&&(s.drawArraysInstanced(r,p,g,_),t.update(g,r,_))}function f(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let S=0;for(let M=0;M<_;M++)S+=g[M];t.update(S,r,1)}function h(p,g,_,x){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)c(p[M],g[M],x[M]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E]*x[E];t.update(M,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function qE(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(U){return!(U!==di&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const V=U===ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Ki&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==ji&&!V)}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),W=M>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:L,maxVaryings:b,maxFragmentUniforms:C,vertexTextures:W,maxSamples:F}}function KE(s){const e=this;let t=null,r=0,a=!1,l=!1;const c=new Qr,f=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||r!==0||a;return a=x,r=_.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,x){t=g(_,x,0)},this.setState=function(_,x,S){const M=_.clippingPlanes,E=_.clipIntersection,y=_.clipShadows,v=s.get(_);if(!a||M===null||M.length===0||l&&!y)l?g(null):p();else{const L=l?0:r,b=L*4;let C=v.clippingState||null;h.value=C,C=g(M,x,b,S);for(let W=0;W!==b;++W)C[W]=t[W];v.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,x,S,M){const E=_!==null?_.length:0;let y=null;if(E!==0){if(y=h.value,M!==!0||y===null){const v=S+E*4,L=x.matrixWorldInverse;f.getNormalMatrix(L),(y===null||y.length<v)&&(y=new Float32Array(v));for(let b=0,C=S;b!==E;++b,C+=4)c.copy(_[b]).applyMatrix4(L,f),c.normal.toArray(y,C),y[C+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function ZE(s){let e=new WeakMap;function t(c,f){return f===Of?c.mapping=Ks:f===kf&&(c.mapping=Zs),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===Of||f===kf)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new lS(h.height);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class Dd extends vv{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xs=4,qm=[.125,.215,.35,.446,.526,.582],ts=20,pf=new Dd,Km=new mt;let mf=null,gf=0,vf=0,_f=!1;const Jr=(1+Math.sqrt(5))/2,Ws=1/Jr,Zm=[new J(-Jr,Ws,0),new J(Jr,Ws,0),new J(-Ws,0,Jr),new J(Ws,0,Jr),new J(0,Jr,-Ws),new J(0,Jr,Ws),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class Qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mf,gf,vf),this._renderer.xr.enabled=_f,e.scissorTest=!1,Il(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:ia,format:di,colorSpace:io,depthBuffer:!1},a=Jm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QE(l)),this._blurMaterial=JE(l,e,t)}return a}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,pf)}_sceneToCubeUV(e,t,r,a){const f=new ci(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,x=g.toneMapping;g.getClearColor(Km),g.toneMapping=Pr,g.autoClear=!1;const S=new ql({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),M=new It(new oo,S);let E=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,E=!0):(S.color.copy(Km),E=!0);for(let v=0;v<6;v++){const L=v%3;L===0?(f.up.set(0,h[v],0),f.lookAt(p[v],0,0)):L===1?(f.up.set(0,0,h[v]),f.lookAt(0,p[v],0)):(f.up.set(0,h[v],0),f.lookAt(0,0,p[v]));const b=this._cubeSize;Il(a,L*b,v>2?b:0,b,b),g.setRenderTarget(a),E&&g.render(M,f),g.render(e,f)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=_,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Ks||e.mapping===Zs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new It(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Il(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,pf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Zm[(a-l-1)%Zm.length];this._blur(e,l-1,l,c,f)}t.autoClear=r}_blur(e,t,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new It(this._lodPlanes[a],p),x=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ts-1),E=l/M,y=isFinite(l)?1+Math.floor(g*E):ts;y>ts&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ts}`);const v=[];let L=0;for(let U=0;U<ts;++U){const V=U/E,P=Math.exp(-V*V/2);v.push(P),U===0?L+=P:U<y&&(L+=2*P)}for(let U=0;U<v.length;U++)v[U]=v[U]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:b}=this;x.dTheta.value=M,x.mipInt.value=b-r;const C=this._sizeLods[a],W=3*C*(a>b-Xs?a-b+Xs:0),F=4*(this._cubeSize-C);Il(t,W,F,3*C,2*C),h.setRenderTarget(t),h.render(_,pf)}}function QE(s){const e=[],t=[],r=[];let a=s;const l=s-Xs+1+qm.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let h=1/f;c>s-Xs?h=qm[c-s+Xs-1]:c===0&&(h=0),r.push(h);const p=1/(f-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,M=6,E=3,y=2,v=1,L=new Float32Array(E*M*S),b=new Float32Array(y*M*S),C=new Float32Array(v*M*S);for(let F=0;F<S;F++){const U=F%3*2/3-1,V=F>2?0:-1,P=[U,V,0,U+2/3,V,0,U+2/3,V+1,0,U,V,0,U+2/3,V+1,0,U,V+1,0];L.set(P,E*M*F),b.set(x,y*M*F);const A=[F,F,F,F,F,F];C.set(A,v*M*F)}const W=new Vn;W.setAttribute("position",new Ai(L,E)),W.setAttribute("uv",new Ai(b,y)),W.setAttribute("faceIndex",new Ai(C,v)),e.push(W),a>Xs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Jm(s,e,t){const r=new os(s,e,t);return r.texture.mapping=eu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Il(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function JE(s,e,t){const r=new Float32Array(ts),a=new J(0,1,0);return new Lr({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function eg(){return new Lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function tg(){return new Lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Id(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ew(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,p=h===Of||h===kf,g=h===Ks||h===Zs;if(p||g){let _=e.get(f);const x=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new Qm(s)),_=p?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&a(S)?(t===null&&(t=new Qm(s)),_=p?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function a(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function tw(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Yo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function nw(s,e,t,r){const a={},l=new WeakMap;function c(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);for(const M in x.morphAttributes){const E=x.morphAttributes[M];for(let y=0,v=E.length;y<v;y++)e.remove(E[y])}x.removeEventListener("dispose",c),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(_,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,t.memory.geometries++),x}function h(_){const x=_.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER);const S=_.morphAttributes;for(const M in S){const E=S[M];for(let y=0,v=E.length;y<v;y++)e.update(E[y],s.ARRAY_BUFFER)}}function p(_){const x=[],S=_.index,M=_.attributes.position;let E=0;if(S!==null){const L=S.array;E=S.version;for(let b=0,C=L.length;b<C;b+=3){const W=L[b+0],F=L[b+1],U=L[b+2];x.push(W,F,F,U,U,W)}}else if(M!==void 0){const L=M.array;E=M.version;for(let b=0,C=L.length/3-1;b<C;b+=3){const W=b+0,F=b+1,U=b+2;x.push(W,F,F,U,U,W)}}else return;const y=new(lv(x)?mv:pv)(x,1);y.version=E;const v=l.get(_);v&&e.remove(v),l.set(_,y)}function g(_){const x=l.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:g}}function iw(s,e,t){let r;function a(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,S){s.drawElements(r,S,l,x*c),t.update(S,r,1)}function p(x,S,M){M!==0&&(s.drawElementsInstanced(r,S,l,x*c,M),t.update(S,r,M))}function g(x,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,M);let y=0;for(let v=0;v<M;v++)y+=S[v];t.update(y,r,1)}function _(x,S,M,E){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/c,S[v],E[v]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,E,0,M);let v=0;for(let L=0;L<M;L++)v+=S[L]*E[L];t.update(v,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function rw(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function sw(s,e,t){const r=new WeakMap,a=new Wt;function l(c,f,h){const p=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(f);if(x===void 0||x.count!==_){let A=function(){V.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var S=A;x!==void 0&&x.texture.dispose();const M=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let C=0;M===!0&&(C=1),E===!0&&(C=2),y===!0&&(C=3);let W=f.attributes.position.count*C,F=1;W>e.maxTextureSize&&(F=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const U=new Float32Array(W*F*4*_),V=new cv(U,W,F,_);V.type=ji,V.needsUpdate=!0;const P=C*4;for(let k=0;k<_;k++){const ie=v[k],q=L[k],ue=b[k],ce=W*F*4*k;for(let oe=0;oe<ie.count;oe++){const de=oe*P;M===!0&&(a.fromBufferAttribute(ie,oe),U[ce+de+0]=a.x,U[ce+de+1]=a.y,U[ce+de+2]=a.z,U[ce+de+3]=0),E===!0&&(a.fromBufferAttribute(q,oe),U[ce+de+4]=a.x,U[ce+de+5]=a.y,U[ce+de+6]=a.z,U[ce+de+7]=0),y===!0&&(a.fromBufferAttribute(ue,oe),U[ce+de+8]=a.x,U[ce+de+9]=a.y,U[ce+de+10]=a.z,U[ce+de+11]=ue.itemSize===4?a.w:1)}}x={count:_,texture:V,size:new Mt(W,F)},r.set(f,x),f.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const E=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",E),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function ow(s,e,t,r){let a=new WeakMap;function l(h){const p=r.render.frame,g=h.geometry,_=e.get(h,g);if(a.get(_)!==p&&(e.update(_),a.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return _}function c(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}class yv extends Un{constructor(e,t,r,a,l,c,f,h,p,g=$s){if(g!==$s&&g!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===$s&&(r=ss),r===void 0&&g===Js&&(r=Qs),super(null,a,l,c,f,h,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:hi,this.minFilter=h!==void 0?h:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Sv=new Un,ng=new yv(1,1),Mv=new cv,Ev=new jy,wv=new _v,ig=[],rg=[],sg=new Float32Array(16),og=new Float32Array(9),ag=new Float32Array(4);function ao(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=ig[a];if(l===void 0&&(l=new Float32Array(a),ig[a]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function Qt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Jt(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function iu(s,e){let t=rg[e];t===void 0&&(t=new Int32Array(e),rg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function aw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function lw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2fv(this.addr,e),Jt(t,e)}}function uw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;s.uniform3fv(this.addr,e),Jt(t,e)}}function cw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4fv(this.addr,e),Jt(t,e)}}function fw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,r))return;ag.set(r),s.uniformMatrix2fv(this.addr,!1,ag),Jt(t,r)}}function dw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,r))return;og.set(r),s.uniformMatrix3fv(this.addr,!1,og),Jt(t,r)}}function hw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,r))return;sg.set(r),s.uniformMatrix4fv(this.addr,!1,sg),Jt(t,r)}}function pw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function mw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2iv(this.addr,e),Jt(t,e)}}function gw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3iv(this.addr,e),Jt(t,e)}}function vw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4iv(this.addr,e),Jt(t,e)}}function _w(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function xw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2uiv(this.addr,e),Jt(t,e)}}function yw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3uiv(this.addr,e),Jt(t,e)}}function Sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4uiv(this.addr,e),Jt(t,e)}}function Mw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(ng.compareFunction=av,l=ng):l=Sv,t.setTexture2D(e||l,a)}function Ew(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Ev,a)}function ww(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||wv,a)}function Tw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Mv,a)}function Aw(s){switch(s){case 5126:return aw;case 35664:return lw;case 35665:return uw;case 35666:return cw;case 35674:return fw;case 35675:return dw;case 35676:return hw;case 5124:case 35670:return pw;case 35667:case 35671:return mw;case 35668:case 35672:return gw;case 35669:case 35673:return vw;case 5125:return _w;case 36294:return xw;case 36295:return yw;case 36296:return Sw;case 35678:case 36198:case 36298:case 36306:case 35682:return Mw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return Tw}}function Rw(s,e){s.uniform1fv(this.addr,e)}function Cw(s,e){const t=ao(e,this.size,2);s.uniform2fv(this.addr,t)}function Pw(s,e){const t=ao(e,this.size,3);s.uniform3fv(this.addr,t)}function bw(s,e){const t=ao(e,this.size,4);s.uniform4fv(this.addr,t)}function Lw(s,e){const t=ao(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Dw(s,e){const t=ao(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Iw(s,e){const t=ao(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Uw(s,e){s.uniform1iv(this.addr,e)}function Nw(s,e){s.uniform2iv(this.addr,e)}function Fw(s,e){s.uniform3iv(this.addr,e)}function Ow(s,e){s.uniform4iv(this.addr,e)}function kw(s,e){s.uniform1uiv(this.addr,e)}function Bw(s,e){s.uniform2uiv(this.addr,e)}function zw(s,e){s.uniform3uiv(this.addr,e)}function Hw(s,e){s.uniform4uiv(this.addr,e)}function Vw(s,e,t){const r=this.cache,a=e.length,l=iu(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),Jt(r,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||Sv,l[c])}function Gw(s,e,t){const r=this.cache,a=e.length,l=iu(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),Jt(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Ev,l[c])}function Ww(s,e,t){const r=this.cache,a=e.length,l=iu(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),Jt(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||wv,l[c])}function Xw(s,e,t){const r=this.cache,a=e.length,l=iu(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),Jt(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Mv,l[c])}function jw(s){switch(s){case 5126:return Rw;case 35664:return Cw;case 35665:return Pw;case 35666:return bw;case 35674:return Lw;case 35675:return Dw;case 35676:return Iw;case 5124:case 35670:return Uw;case 35667:case 35671:return Nw;case 35668:case 35672:return Fw;case 35669:case 35673:return Ow;case 5125:return kw;case 36294:return Bw;case 36295:return zw;case 36296:return Hw;case 35678:case 36198:case 36298:case 36306:case 35682:return Vw;case 35679:case 36299:case 36307:return Gw;case 35680:case 36300:case 36308:case 36293:return Ww;case 36289:case 36303:case 36311:case 36292:return Xw}}class $w{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Aw(t.type)}}class Yw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jw(t.type)}}class qw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const xf=/(\w+)(\])?(\[|\.)?/g;function lg(s,e){s.seq.push(e),s.map[e.id]=e}function Kw(s,e,t){const r=s.name,a=r.length;for(xf.lastIndex=0;;){const l=xf.exec(r),c=xf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===a){lg(t,p===void 0?new $w(f,s,e):new Yw(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new qw(f),lg(t,_)),t=_}}}class Xl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);Kw(l,c,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function ug(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Zw=37297;let Qw=0;function Jw(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const cg=new ut;function eT(s){St._getMatrix(cg,St.workingColorSpace,s);const e=`mat3( ${cg.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(s)){case tu:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function fg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+Jw(s.getShaderSource(e),c)}else return a}function tT(s,e){const t=eT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nT(s,e){let t;switch(e){case xy:t="Linear";break;case yy:t="Reinhard";break;case Sy:t="Cineon";break;case My:t="ACESFilmic";break;case wy:t="AgX";break;case Ty:t="Neutral";break;case Ey:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ul=new J;function iT(){St.getLuminanceCoefficients(Ul);const s=Ul.x.toFixed(4),e=Ul.y.toFixed(4),t=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function sT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function oT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function qo(s){return s!==""}function dg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aT=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(s){return s.replace(aT,uT)}const lT=new Map;function uT(s,e){let t=ft[e];if(t===void 0){const r=lT.get(e);if(r!==void 0)t=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return pd(t)}const cT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pg(s){return s.replace(cT,fT)}function fT(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function mg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===$g?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Yg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function hT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function mT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wd:e="ENVMAP_BLENDING_MULTIPLY";break;case vy:e="ENVMAP_BLENDING_MIX";break;case _y:e="ENVMAP_BLENDING_ADD";break}return e}function gT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function vT(s,e,t,r){const a=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=dT(t),p=hT(t),g=pT(t),_=mT(t),x=gT(t),S=rT(t),M=sT(l),E=a.createProgram();let y,v,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(qo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(qo).join(`
`),v.length>0&&(v+=`
`)):(y=[mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),v=[mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pr?"#define TONE_MAPPING":"",t.toneMapping!==Pr?ft.tonemapping_pars_fragment:"",t.toneMapping!==Pr?nT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,tT("linearToOutputTexel",t.outputColorSpace),iT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qo).join(`
`)),c=pd(c),c=dg(c,t),c=hg(c,t),f=pd(f),f=dg(f,t),f=hg(f,t),c=pg(c),f=pg(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=L+y+c,C=L+v+f,W=ug(a,a.VERTEX_SHADER,b),F=ug(a,a.FRAGMENT_SHADER,C);a.attachShader(E,W),a.attachShader(E,F),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function U(k){if(s.debug.checkShaderErrors){const ie=a.getProgramInfoLog(E).trim(),q=a.getShaderInfoLog(W).trim(),ue=a.getShaderInfoLog(F).trim();let ce=!0,oe=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(ce=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,E,W,F);else{const de=fg(a,W,"vertex"),B=fg(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ie+`
`+de+`
`+B)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(q===""||ue==="")&&(oe=!1);oe&&(k.diagnostics={runnable:ce,programLog:ie,vertexShader:{log:q,prefix:y},fragmentShader:{log:ue,prefix:v}})}a.deleteShader(W),a.deleteShader(F),V=new Xl(a,E),P=oT(a,E)}let V;this.getUniforms=function(){return V===void 0&&U(this),V};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(E,Zw)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=W,this.fragmentShader=F,this}let _T=0;class xT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new yT(e),t.set(e,r)),r}}class yT{constructor(e){this.id=_T++,this.code=e,this.usedTimes=0}}function ST(s,e,t,r,a,l,c){const f=new dv,h=new xT,p=new Set,g=[],_=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return p.add(P),P===0?"uv":`uv${P}`}function y(P,A,k,ie,q){const ue=ie.fog,ce=q.geometry,oe=P.isMeshStandardMaterial?ie.environment:null,de=(P.isMeshStandardMaterial?t:e).get(P.envMap||oe),B=de&&de.mapping===eu?de.image.height:null,fe=M[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const le=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,N=le!==void 0?le.length:0;let re=0;ce.morphAttributes.position!==void 0&&(re=1),ce.morphAttributes.normal!==void 0&&(re=2),ce.morphAttributes.color!==void 0&&(re=3);let Ne,z,ee,ge;if(fe){const xt=Mi[fe];Ne=xt.vertexShader,z=xt.fragmentShader}else Ne=P.vertexShader,z=P.fragmentShader,h.update(P),ee=h.getVertexShaderID(P),ge=h.getFragmentShaderID(P);const he=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),Pe=q.isInstancedMesh===!0,Ce=q.isBatchedMesh===!0,_t=!!P.map,at=!!P.matcap,At=!!de,X=!!P.aoMap,en=!!P.lightMap,ct=!!P.bumpMap,lt=!!P.normalMap,Ke=!!P.displacementMap,Et=!!P.emissiveMap,Ye=!!P.metalnessMap,D=!!P.roughnessMap,T=P.anisotropy>0,Z=P.clearcoat>0,ve=P.dispersion>0,xe=P.iridescence>0,pe=P.sheen>0,We=P.transmission>0,be=T&&!!P.anisotropyMap,Oe=Z&&!!P.clearcoatMap,dt=Z&&!!P.clearcoatNormalMap,Ee=Z&&!!P.clearcoatRoughnessMap,Be=xe&&!!P.iridescenceMap,Je=xe&&!!P.iridescenceThicknessMap,et=pe&&!!P.sheenColorMap,ze=pe&&!!P.sheenRoughnessMap,ht=!!P.specularMap,rt=!!P.specularColorMap,Ct=!!P.specularIntensityMap,G=We&&!!P.transmissionMap,Le=We&&!!P.thicknessMap,ae=!!P.gradientMap,me=!!P.alphaMap,Ue=P.alphaTest>0,Ie=!!P.alphaHash,st=!!P.extensions;let Ut=Pr;P.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const Yt={shaderID:fe,shaderType:P.type,shaderName:P.name,vertexShader:Ne,fragmentShader:z,defines:P.defines,customVertexShaderID:ee,customFragmentShaderID:ge,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ce,batchingColor:Ce&&q._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&q.instanceColor!==null,instancingMorph:Pe&&q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:io,alphaToCoverage:!!P.alphaToCoverage,map:_t,matcap:at,envMap:At,envMapMode:At&&de.mapping,envMapCubeUVHeight:B,aoMap:X,lightMap:en,bumpMap:ct,normalMap:lt,displacementMap:x&&Ke,emissiveMap:Et,normalMapObjectSpace:lt&&P.normalMapType===Py,normalMapTangentSpace:lt&&P.normalMapType===ov,metalnessMap:Ye,roughnessMap:D,anisotropy:T,anisotropyMap:be,clearcoat:Z,clearcoatMap:Oe,clearcoatNormalMap:dt,clearcoatRoughnessMap:Ee,dispersion:ve,iridescence:xe,iridescenceMap:Be,iridescenceThicknessMap:Je,sheen:pe,sheenColorMap:et,sheenRoughnessMap:ze,specularMap:ht,specularColorMap:rt,specularIntensityMap:Ct,transmission:We,transmissionMap:G,thicknessMap:Le,gradientMap:ae,opaque:P.transparent===!1&&P.blending===js&&P.alphaToCoverage===!1,alphaMap:me,alphaTest:Ue,alphaHash:Ie,combine:P.combine,mapUv:_t&&E(P.map.channel),aoMapUv:X&&E(P.aoMap.channel),lightMapUv:en&&E(P.lightMap.channel),bumpMapUv:ct&&E(P.bumpMap.channel),normalMapUv:lt&&E(P.normalMap.channel),displacementMapUv:Ke&&E(P.displacementMap.channel),emissiveMapUv:Et&&E(P.emissiveMap.channel),metalnessMapUv:Ye&&E(P.metalnessMap.channel),roughnessMapUv:D&&E(P.roughnessMap.channel),anisotropyMapUv:be&&E(P.anisotropyMap.channel),clearcoatMapUv:Oe&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:dt&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:et&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:ze&&E(P.sheenRoughnessMap.channel),specularMapUv:ht&&E(P.specularMap.channel),specularColorMapUv:rt&&E(P.specularColorMap.channel),specularIntensityMapUv:Ct&&E(P.specularIntensityMap.channel),transmissionMapUv:G&&E(P.transmissionMap.channel),thicknessMapUv:Le&&E(P.thicknessMap.channel),alphaMapUv:me&&E(P.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(lt||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ce.attributes.uv&&(_t||me),fog:!!ue,useFog:P.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Re,skinning:q.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:re,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:_t&&P.map.isVideoTexture===!0&&St.getTransfer(P.map.colorSpace)===bt,decodeVideoTextureEmissive:Et&&P.emissiveMap.isVideoTexture===!0&&St.getTransfer(P.emissiveMap.colorSpace)===bt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ei,flipSided:P.side===In,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:st&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&P.extensions.multiDraw===!0||Ce)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Yt.vertexUv1s=p.has(1),Yt.vertexUv2s=p.has(2),Yt.vertexUv3s=p.has(3),p.clear(),Yt}function v(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)A.push(k),A.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(L(A,P),b(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function L(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function b(P,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),P.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),P.push(f.mask)}function C(P){const A=M[P.type];let k;if(A){const ie=Mi[A];k=rS.clone(ie.uniforms)}else k=P.uniforms;return k}function W(P,A){let k;for(let ie=0,q=g.length;ie<q;ie++){const ue=g[ie];if(ue.cacheKey===A){k=ue,++k.usedTimes;break}}return k===void 0&&(k=new vT(s,A,P,l),g.push(k)),k}function F(P){if(--P.usedTimes===0){const A=g.indexOf(P);g[A]=g[g.length-1],g.pop(),P.destroy()}}function U(P){h.remove(P)}function V(){h.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:C,acquireProgram:W,releaseProgram:F,releaseShaderCache:U,programs:g,dispose:V}}function MT(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function a(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function ET(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function gg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function vg(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(_,x,S,M,E,y){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:M,renderOrder:_.renderOrder,z:E,group:y},s[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=M,v.renderOrder=_.renderOrder,v.z=E,v.group=y),e++,v}function f(_,x,S,M,E,y){const v=c(_,x,S,M,E,y);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):t.push(v)}function h(_,x,S,M,E,y){const v=c(_,x,S,M,E,y);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):t.unshift(v)}function p(_,x){t.length>1&&t.sort(_||ET),r.length>1&&r.sort(x||gg),a.length>1&&a.sort(x||gg)}function g(){for(let _=e,x=s.length;_<x;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:h,finish:g,sort:p}}function wT(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new vg,s.set(r,[c])):a>=l.length?(c=new vg,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function TT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new mt};break;case"SpotLight":t={position:new J,direction:new J,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=t,t}}}function AT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let RT=0;function CT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function PT(s){const e=new TT,t=AT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new J);const a=new J,l=new Ht,c=new Ht;function f(p){let g=0,_=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,M=0,E=0,y=0,v=0,L=0,b=0,C=0,W=0,F=0,U=0;p.sort(CT);for(let P=0,A=p.length;P<A;P++){const k=p[P],ie=k.color,q=k.intensity,ue=k.distance,ce=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=ie.r*q,_+=ie.g*q,x+=ie.b*q;else if(k.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(k.sh.coefficients[oe],q);U++}else if(k.isDirectionalLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const de=k.shadow,B=t.get(k);B.shadowIntensity=de.intensity,B.shadowBias=de.bias,B.shadowNormalBias=de.normalBias,B.shadowRadius=de.radius,B.shadowMapSize=de.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=ce,r.directionalShadowMatrix[S]=k.shadow.matrix,L++}r.directional[S]=oe,S++}else if(k.isSpotLight){const oe=e.get(k);oe.position.setFromMatrixPosition(k.matrixWorld),oe.color.copy(ie).multiplyScalar(q),oe.distance=ue,oe.coneCos=Math.cos(k.angle),oe.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),oe.decay=k.decay,r.spot[E]=oe;const de=k.shadow;if(k.map&&(r.spotLightMap[W]=k.map,W++,de.updateMatrices(k),k.castShadow&&F++),r.spotLightMatrix[E]=de.matrix,k.castShadow){const B=t.get(k);B.shadowIntensity=de.intensity,B.shadowBias=de.bias,B.shadowNormalBias=de.normalBias,B.shadowRadius=de.radius,B.shadowMapSize=de.mapSize,r.spotShadow[E]=B,r.spotShadowMap[E]=ce,C++}E++}else if(k.isRectAreaLight){const oe=e.get(k);oe.color.copy(ie).multiplyScalar(q),oe.halfWidth.set(k.width*.5,0,0),oe.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=oe,y++}else if(k.isPointLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),oe.distance=k.distance,oe.decay=k.decay,k.castShadow){const de=k.shadow,B=t.get(k);B.shadowIntensity=de.intensity,B.shadowBias=de.bias,B.shadowNormalBias=de.normalBias,B.shadowRadius=de.radius,B.shadowMapSize=de.mapSize,B.shadowCameraNear=de.camera.near,B.shadowCameraFar=de.camera.far,r.pointShadow[M]=B,r.pointShadowMap[M]=ce,r.pointShadowMatrix[M]=k.shadow.matrix,b++}r.point[M]=oe,M++}else if(k.isHemisphereLight){const oe=e.get(k);oe.skyColor.copy(k.color).multiplyScalar(q),oe.groundColor.copy(k.groundColor).multiplyScalar(q),r.hemi[v]=oe,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const V=r.hash;(V.directionalLength!==S||V.pointLength!==M||V.spotLength!==E||V.rectAreaLength!==y||V.hemiLength!==v||V.numDirectionalShadows!==L||V.numPointShadows!==b||V.numSpotShadows!==C||V.numSpotMaps!==W||V.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=E,r.rectArea.length=y,r.point.length=M,r.hemi.length=v,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+W-F,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=U,V.directionalLength=S,V.pointLength=M,V.spotLength=E,V.rectAreaLength=y,V.hemiLength=v,V.numDirectionalShadows=L,V.numPointShadows=b,V.numSpotShadows=C,V.numSpotMaps=W,V.numLightProbes=U,r.version=RT++)}function h(p,g){let _=0,x=0,S=0,M=0,E=0;const y=g.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const b=p[v];if(b.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),_++}else if(b.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(b.isRectAreaLight){const C=r.rectArea[M];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(b.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),M++}else if(b.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),x++}else if(b.isHemisphereLight){const C=r.hemi[E];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(y),E++}}}return{setup:f,setupView:h,state:r}}function _g(s){const e=new PT(s),t=[],r=[];function a(g){p.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function c(g){r.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function bT(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new _g(s),e.set(a,[f])):l>=c.length?(f=new _g(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}class LT extends so{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DT extends so{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const IT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NT(s,e,t){let r=new Ld;const a=new Mt,l=new Mt,c=new Wt,f=new LT({depthPacking:Cy}),h=new DT,p={},g=t.maxTextureSize,_={[br]:In,[In]:br,[Ei]:Ei},x=new Lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:IT,fragmentShader:UT}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const M=new Vn;M.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new It(M,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$g;let v=this.type;this.render=function(F,U,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(Cr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const q=v!==Xi&&this.type===Xi,ue=v===Xi&&this.type!==Xi;for(let ce=0,oe=F.length;ce<oe;ce++){const de=F[ce],B=de.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const fe=B.getFrameExtents();if(a.multiply(fe),l.copy(B.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/fe.x),a.x=l.x*fe.x,B.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/fe.y),a.y=l.y*fe.y,B.mapSize.y=l.y)),B.map===null||q===!0||ue===!0){const N=this.type!==Xi?{minFilter:hi,magFilter:hi}:{};B.map!==null&&B.map.dispose(),B.map=new os(a.x,a.y,N),B.map.texture.name=de.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const le=B.getViewportCount();for(let N=0;N<le;N++){const re=B.getViewport(N);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),ie.viewport(c),B.updateMatrices(de,N),r=B.getFrustum(),C(U,V,B.camera,de,this.type)}B.isPointLightShadow!==!0&&this.type===Xi&&L(B,V),B.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(P,A,k)};function L(F,U){const V=e.update(E);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new os(a.x,a.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(U,null,V,x,E,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(U,null,V,S,E,null)}function b(F,U,V,P){let A=null;const k=V.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)A=k;else if(A=V.isPointLight===!0?h:f,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ie=A.uuid,q=U.uuid;let ue=p[ie];ue===void 0&&(ue={},p[ie]=ue);let ce=ue[q];ce===void 0&&(ce=A.clone(),ue[q]=ce,U.addEventListener("dispose",W)),A=ce}if(A.visible=U.visible,A.wireframe=U.wireframe,P===Xi?A.side=U.shadowSide!==null?U.shadowSide:U.side:A.side=U.shadowSide!==null?U.shadowSide:_[U.side],A.alphaMap=U.alphaMap,A.alphaTest=U.alphaTest,A.map=U.map,A.clipShadows=U.clipShadows,A.clippingPlanes=U.clippingPlanes,A.clipIntersection=U.clipIntersection,A.displacementMap=U.displacementMap,A.displacementScale=U.displacementScale,A.displacementBias=U.displacementBias,A.wireframeLinewidth=U.wireframeLinewidth,A.linewidth=U.linewidth,V.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ie=s.properties.get(A);ie.light=V}return A}function C(F,U,V,P,A){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===Xi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,F.matrixWorld);const q=e.update(F),ue=F.material;if(Array.isArray(ue)){const ce=q.groups;for(let oe=0,de=ce.length;oe<de;oe++){const B=ce[oe],fe=ue[B.materialIndex];if(fe&&fe.visible){const le=b(F,fe,P,A);F.onBeforeShadow(s,F,U,V,q,le,B),s.renderBufferDirect(V,null,q,le,F,B),F.onAfterShadow(s,F,U,V,q,le,B)}}}else if(ue.visible){const ce=b(F,ue,P,A);F.onBeforeShadow(s,F,U,V,q,ce,null),s.renderBufferDirect(V,null,q,ce,F,null),F.onAfterShadow(s,F,U,V,q,ce,null)}}const ie=F.children;for(let q=0,ue=ie.length;q<ue;q++)C(ie[q],U,V,P,A)}function W(F){F.target.removeEventListener("dispose",W);for(const V in p){const P=p[V],A=F.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const FT={[bf]:Lf,[Df]:Nf,[If]:Ff,[qs]:Uf,[Lf]:bf,[Nf]:Df,[Ff]:If,[Uf]:qs};function OT(s,e){function t(){let G=!1;const Le=new Wt;let ae=null;const me=new Wt(0,0,0,0);return{setMask:function(Ue){ae!==Ue&&!G&&(s.colorMask(Ue,Ue,Ue,Ue),ae=Ue)},setLocked:function(Ue){G=Ue},setClear:function(Ue,Ie,st,Ut,Yt){Yt===!0&&(Ue*=Ut,Ie*=Ut,st*=Ut),Le.set(Ue,Ie,st,Ut),me.equals(Le)===!1&&(s.clearColor(Ue,Ie,st,Ut),me.copy(Le))},reset:function(){G=!1,ae=null,me.set(-1,0,0,0)}}}function r(){let G=!1,Le=!1,ae=null,me=null,Ue=null;return{setReversed:function(Ie){if(Le!==Ie){const st=e.get("EXT_clip_control");Le?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Ue;Ue=null,this.setClear(Ut)}Le=Ie},getReversed:function(){return Le},setTest:function(Ie){Ie?he(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(Ie){ae!==Ie&&!G&&(s.depthMask(Ie),ae=Ie)},setFunc:function(Ie){if(Le&&(Ie=FT[Ie]),me!==Ie){switch(Ie){case bf:s.depthFunc(s.NEVER);break;case Lf:s.depthFunc(s.ALWAYS);break;case Df:s.depthFunc(s.LESS);break;case qs:s.depthFunc(s.LEQUAL);break;case If:s.depthFunc(s.EQUAL);break;case Uf:s.depthFunc(s.GEQUAL);break;case Nf:s.depthFunc(s.GREATER);break;case Ff:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Ie}},setLocked:function(Ie){G=Ie},setClear:function(Ie){Ue!==Ie&&(Le&&(Ie=1-Ie),s.clearDepth(Ie),Ue=Ie)},reset:function(){G=!1,ae=null,me=null,Ue=null,Le=!1}}}function a(){let G=!1,Le=null,ae=null,me=null,Ue=null,Ie=null,st=null,Ut=null,Yt=null;return{setTest:function(xt){G||(xt?he(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(xt){Le!==xt&&!G&&(s.stencilMask(xt),Le=xt)},setFunc:function(xt,En,vn){(ae!==xt||me!==En||Ue!==vn)&&(s.stencilFunc(xt,En,vn),ae=xt,me=En,Ue=vn)},setOp:function(xt,En,vn){(Ie!==xt||st!==En||Ut!==vn)&&(s.stencilOp(xt,En,vn),Ie=xt,st=En,Ut=vn)},setLocked:function(xt){G=xt},setClear:function(xt){Yt!==xt&&(s.clearStencil(xt),Yt=xt)},reset:function(){G=!1,Le=null,ae=null,me=null,Ue=null,Ie=null,st=null,Ut=null,Yt=null}}}const l=new t,c=new r,f=new a,h=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,S=[],M=null,E=!1,y=null,v=null,L=null,b=null,C=null,W=null,F=null,U=new mt(0,0,0),V=0,P=!1,A=null,k=null,ie=null,q=null,ue=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,de=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(B)[1]),oe=de>=1):B.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),oe=de>=2);let fe=null,le={};const N=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Ne=new Wt().fromArray(N),z=new Wt().fromArray(re);function ee(G,Le,ae,me){const Ue=new Uint8Array(4),Ie=s.createTexture();s.bindTexture(G,Ie),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<ae;st++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(Le+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return Ie}const ge={};ge[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),he(s.DEPTH_TEST),c.setFunc(qs),ct(!1),lt(Mm),he(s.CULL_FACE),X(Cr);function he(G){g[G]!==!0&&(s.enable(G),g[G]=!0)}function Re(G){g[G]!==!1&&(s.disable(G),g[G]=!1)}function Pe(G,Le){return _[G]!==Le?(s.bindFramebuffer(G,Le),_[G]=Le,G===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Le),G===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ce(G,Le){let ae=S,me=!1;if(G){ae=x.get(Le),ae===void 0&&(ae=[],x.set(Le,ae));const Ue=G.textures;if(ae.length!==Ue.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Ie=0,st=Ue.length;Ie<st;Ie++)ae[Ie]=s.COLOR_ATTACHMENT0+Ie;ae.length=Ue.length,me=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,me=!0);me&&s.drawBuffers(ae)}function _t(G){return M!==G?(s.useProgram(G),M=G,!0):!1}const at={[es]:s.FUNC_ADD,[ey]:s.FUNC_SUBTRACT,[ty]:s.FUNC_REVERSE_SUBTRACT};at[ny]=s.MIN,at[iy]=s.MAX;const At={[ry]:s.ZERO,[sy]:s.ONE,[oy]:s.SRC_COLOR,[Cf]:s.SRC_ALPHA,[dy]:s.SRC_ALPHA_SATURATE,[cy]:s.DST_COLOR,[ly]:s.DST_ALPHA,[ay]:s.ONE_MINUS_SRC_COLOR,[Pf]:s.ONE_MINUS_SRC_ALPHA,[fy]:s.ONE_MINUS_DST_COLOR,[uy]:s.ONE_MINUS_DST_ALPHA,[hy]:s.CONSTANT_COLOR,[py]:s.ONE_MINUS_CONSTANT_COLOR,[my]:s.CONSTANT_ALPHA,[gy]:s.ONE_MINUS_CONSTANT_ALPHA};function X(G,Le,ae,me,Ue,Ie,st,Ut,Yt,xt){if(G===Cr){E===!0&&(Re(s.BLEND),E=!1);return}if(E===!1&&(he(s.BLEND),E=!0),G!==Jx){if(G!==y||xt!==P){if((v!==es||C!==es)&&(s.blendEquation(s.FUNC_ADD),v=es,C=es),xt)switch(G){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Em:s.blendFunc(s.ONE,s.ONE);break;case wm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Em:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}L=null,b=null,W=null,F=null,U.set(0,0,0),V=0,y=G,P=xt}return}Ue=Ue||Le,Ie=Ie||ae,st=st||me,(Le!==v||Ue!==C)&&(s.blendEquationSeparate(at[Le],at[Ue]),v=Le,C=Ue),(ae!==L||me!==b||Ie!==W||st!==F)&&(s.blendFuncSeparate(At[ae],At[me],At[Ie],At[st]),L=ae,b=me,W=Ie,F=st),(Ut.equals(U)===!1||Yt!==V)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Yt),U.copy(Ut),V=Yt),y=G,P=!1}function en(G,Le){G.side===Ei?Re(s.CULL_FACE):he(s.CULL_FACE);let ae=G.side===In;Le&&(ae=!ae),ct(ae),G.blending===js&&G.transparent===!1?X(Cr):X(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),l.setMask(G.colorWrite);const me=G.stencilWrite;f.setTest(me),me&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Et(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(G){A!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),A=G)}function lt(G){G!==Zx?(he(s.CULL_FACE),G!==k&&(G===Mm?s.cullFace(s.BACK):G===Qx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),k=G}function Ke(G){G!==ie&&(oe&&s.lineWidth(G),ie=G)}function Et(G,Le,ae){G?(he(s.POLYGON_OFFSET_FILL),(q!==Le||ue!==ae)&&(s.polygonOffset(Le,ae),q=Le,ue=ae)):Re(s.POLYGON_OFFSET_FILL)}function Ye(G){G?he(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function D(G){G===void 0&&(G=s.TEXTURE0+ce-1),fe!==G&&(s.activeTexture(G),fe=G)}function T(G,Le,ae){ae===void 0&&(fe===null?ae=s.TEXTURE0+ce-1:ae=fe);let me=le[ae];me===void 0&&(me={type:void 0,texture:void 0},le[ae]=me),(me.type!==G||me.texture!==Le)&&(fe!==ae&&(s.activeTexture(ae),fe=ae),s.bindTexture(G,Le||ge[G]),me.type=G,me.texture=Le)}function Z(){const G=le[fe];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ve(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(G){Ne.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ne.copy(G))}function ze(G){z.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),z.copy(G))}function ht(G,Le){let ae=p.get(Le);ae===void 0&&(ae=new WeakMap,p.set(Le,ae));let me=ae.get(G);me===void 0&&(me=s.getUniformBlockIndex(Le,G.name),ae.set(G,me))}function rt(G,Le){const me=p.get(Le).get(G);h.get(Le)!==me&&(s.uniformBlockBinding(Le,me,G.__bindingPointIndex),h.set(Le,me))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},fe=null,le={},_={},x=new WeakMap,S=[],M=null,E=!1,y=null,v=null,L=null,b=null,C=null,W=null,F=null,U=new mt(0,0,0),V=0,P=!1,A=null,k=null,ie=null,q=null,ue=null,Ne.set(0,0,s.canvas.width,s.canvas.height),z.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:he,disable:Re,bindFramebuffer:Pe,drawBuffers:Ce,useProgram:_t,setBlending:X,setMaterial:en,setFlipSided:ct,setCullFace:lt,setLineWidth:Ke,setPolygonOffset:Et,setScissorTest:Ye,activeTexture:D,bindTexture:T,unbindTexture:Z,compressedTexImage2D:ve,compressedTexImage3D:xe,texImage2D:Be,texImage3D:Je,updateUBOMapping:ht,uniformBlockBinding:rt,texStorage2D:dt,texStorage3D:Ee,texSubImage2D:pe,texSubImage3D:We,compressedTexSubImage2D:be,compressedTexSubImage3D:Oe,scissor:et,viewport:ze,reset:Ct}}function xg(s,e,t,r){const a=kT(r);switch(t){case Jg:return s*e;case tv:return s*e;case nv:return s*e*2;case iv:return s*e/a.components*a.byteLength;case Cd:return s*e/a.components*a.byteLength;case rv:return s*e*2/a.components*a.byteLength;case Pd:return s*e*2/a.components*a.byteLength;case ev:return s*e*3/a.components*a.byteLength;case di:return s*e*4/a.components*a.byteLength;case bd:return s*e*4/a.components*a.byteLength;case zl:case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vf:case Wf:return Math.max(s,16)*Math.max(e,8)/4;case Hf:case Gf:return Math.max(s,8)*Math.max(e,8)/2;case Xf:case jf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $f:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Kf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ed:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case td:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case nd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case id:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case rd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case sd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case od:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ad:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Wl:case ld:case ud:return Math.ceil(s/4)*Math.ceil(e/4)*16;case sv:case cd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case fd:case dd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kT(s){switch(s){case Ki:case Kg:return{byteLength:1,components:1};case Qo:case Zg:case ia:return{byteLength:2,components:1};case Ad:case Rd:return{byteLength:2,components:4};case ss:case Td:case ji:return{byteLength:4,components:1};case Qg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function BT(s,e,t,r,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Mt,g=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,T){return S?new OffscreenCanvas(D,T):Yl("canvas")}function E(D,T,Z){let ve=1;const xe=Ye(D);if((xe.width>Z||xe.height>Z)&&(ve=Z/Math.max(xe.width,xe.height)),ve<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const pe=Math.floor(ve*xe.width),We=Math.floor(ve*xe.height);_===void 0&&(_=M(pe,We));const be=T?M(pe,We):_;return be.width=pe,be.height=We,be.getContext("2d").drawImage(D,0,0,pe,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+pe+"x"+We+")."),be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function y(D){return D.generateMipmaps}function v(D){s.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(D,T,Z,ve,xe=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pe=T;if(T===s.RED&&(Z===s.FLOAT&&(pe=s.R32F),Z===s.HALF_FLOAT&&(pe=s.R16F),Z===s.UNSIGNED_BYTE&&(pe=s.R8)),T===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.R8UI),Z===s.UNSIGNED_SHORT&&(pe=s.R16UI),Z===s.UNSIGNED_INT&&(pe=s.R32UI),Z===s.BYTE&&(pe=s.R8I),Z===s.SHORT&&(pe=s.R16I),Z===s.INT&&(pe=s.R32I)),T===s.RG&&(Z===s.FLOAT&&(pe=s.RG32F),Z===s.HALF_FLOAT&&(pe=s.RG16F),Z===s.UNSIGNED_BYTE&&(pe=s.RG8)),T===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.RG8UI),Z===s.UNSIGNED_SHORT&&(pe=s.RG16UI),Z===s.UNSIGNED_INT&&(pe=s.RG32UI),Z===s.BYTE&&(pe=s.RG8I),Z===s.SHORT&&(pe=s.RG16I),Z===s.INT&&(pe=s.RG32I)),T===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),Z===s.UNSIGNED_INT&&(pe=s.RGB32UI),Z===s.BYTE&&(pe=s.RGB8I),Z===s.SHORT&&(pe=s.RGB16I),Z===s.INT&&(pe=s.RGB32I)),T===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),Z===s.UNSIGNED_INT&&(pe=s.RGBA32UI),Z===s.BYTE&&(pe=s.RGBA8I),Z===s.SHORT&&(pe=s.RGBA16I),Z===s.INT&&(pe=s.RGBA32I)),T===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),T===s.RGBA){const We=xe?tu:St.getTransfer(ve);Z===s.FLOAT&&(pe=s.RGBA32F),Z===s.HALF_FLOAT&&(pe=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(pe=We===bt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function C(D,T){let Z;return D?T===null||T===ss||T===Qs?Z=s.DEPTH24_STENCIL8:T===ji?Z=s.DEPTH32F_STENCIL8:T===Qo&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ss||T===Qs?Z=s.DEPTH_COMPONENT24:T===ji?Z=s.DEPTH_COMPONENT32F:T===Qo&&(Z=s.DEPTH_COMPONENT16),Z}function W(D,T){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==hi&&D.minFilter!==wi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function F(D){const T=D.target;T.removeEventListener("dispose",F),V(T),T.isVideoTexture&&g.delete(T)}function U(D){const T=D.target;T.removeEventListener("dispose",U),A(T)}function V(D){const T=r.get(D);if(T.__webglInit===void 0)return;const Z=D.source,ve=x.get(Z);if(ve){const xe=ve[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&P(D),Object.keys(ve).length===0&&x.delete(Z)}r.remove(D)}function P(D){const T=r.get(D);s.deleteTexture(T.__webglTexture);const Z=D.source,ve=x.get(Z);delete ve[T.__cacheKey],c.memory.textures--}function A(D){const T=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(T.__webglFramebuffer[ve]))for(let xe=0;xe<T.__webglFramebuffer[ve].length;xe++)s.deleteFramebuffer(T.__webglFramebuffer[ve][xe]);else s.deleteFramebuffer(T.__webglFramebuffer[ve]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ve])}else{if(Array.isArray(T.__webglFramebuffer))for(let ve=0;ve<T.__webglFramebuffer.length;ve++)s.deleteFramebuffer(T.__webglFramebuffer[ve]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ve=0;ve<T.__webglColorRenderbuffer.length;ve++)T.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ve]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=D.textures;for(let ve=0,xe=Z.length;ve<xe;ve++){const pe=r.get(Z[ve]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),c.memory.textures--),r.remove(Z[ve])}r.remove(D)}let k=0;function ie(){k=0}function q(){const D=k;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),k+=1,D}function ue(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function ce(D,T){const Z=r.get(D);if(D.isVideoTexture&&Ke(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){const ve=D.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(Z,D,T);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+T)}function oe(D,T){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){z(Z,D,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+T)}function de(D,T){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){z(Z,D,T);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+T)}function B(D,T){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){ee(Z,D,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+T)}const fe={[Bf]:s.REPEAT,[ns]:s.CLAMP_TO_EDGE,[zf]:s.MIRRORED_REPEAT},le={[hi]:s.NEAREST,[Ay]:s.NEAREST_MIPMAP_NEAREST,[pl]:s.NEAREST_MIPMAP_LINEAR,[wi]:s.LINEAR,[Wc]:s.LINEAR_MIPMAP_NEAREST,[is]:s.LINEAR_MIPMAP_LINEAR},N={[by]:s.NEVER,[Fy]:s.ALWAYS,[Ly]:s.LESS,[av]:s.LEQUAL,[Dy]:s.EQUAL,[Ny]:s.GEQUAL,[Iy]:s.GREATER,[Uy]:s.NOTEQUAL};function re(D,T){if(T.type===ji&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===wi||T.magFilter===Wc||T.magFilter===pl||T.magFilter===is||T.minFilter===wi||T.minFilter===Wc||T.minFilter===pl||T.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,fe[T.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,fe[T.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,fe[T.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,le[T.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,le[T.minFilter]),T.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hi||T.minFilter!==pl&&T.minFilter!==is||T.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ne(D,T){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",F));const ve=T.source;let xe=x.get(ve);xe===void 0&&(xe={},x.set(ve,xe));const pe=ue(T);if(pe!==D.__cacheKey){xe[pe]===void 0&&(xe[pe]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),xe[pe].usedTimes++;const We=xe[D.__cacheKey];We!==void 0&&(xe[D.__cacheKey].usedTimes--,We.usedTimes===0&&P(T)),D.__cacheKey=pe,D.__webglTexture=xe[pe].texture}return Z}function z(D,T,Z){let ve=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ve=s.TEXTURE_3D);const xe=Ne(D,T),pe=T.source;t.bindTexture(ve,D.__webglTexture,s.TEXTURE0+Z);const We=r.get(pe);if(pe.version!==We.__version||xe===!0){t.activeTexture(s.TEXTURE0+Z);const be=St.getPrimaries(St.workingColorSpace),Oe=T.colorSpace===Ar?null:St.getPrimaries(T.colorSpace),dt=T.colorSpace===Ar||be===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Ee=E(T.image,!1,a.maxTextureSize);Ee=Et(T,Ee);const Be=l.convert(T.format,T.colorSpace),Je=l.convert(T.type);let et=b(T.internalFormat,Be,Je,T.colorSpace,T.isVideoTexture);re(ve,T);let ze;const ht=T.mipmaps,rt=T.isVideoTexture!==!0,Ct=We.__version===void 0||xe===!0,G=pe.dataReady,Le=W(T,Ee);if(T.isDepthTexture)et=C(T.format===Js,T.type),Ct&&(rt?t.texStorage2D(s.TEXTURE_2D,1,et,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,Be,Je,null));else if(T.isDataTexture)if(ht.length>0){rt&&Ct&&t.texStorage2D(s.TEXTURE_2D,Le,et,ht[0].width,ht[0].height);for(let ae=0,me=ht.length;ae<me;ae++)ze=ht[ae],rt?G&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,ze.width,ze.height,Be,Je,ze.data):t.texImage2D(s.TEXTURE_2D,ae,et,ze.width,ze.height,0,Be,Je,ze.data);T.generateMipmaps=!1}else rt?(Ct&&t.texStorage2D(s.TEXTURE_2D,Le,et,Ee.width,Ee.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Be,Je,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,Be,Je,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,et,ht[0].width,ht[0].height,Ee.depth);for(let ae=0,me=ht.length;ae<me;ae++)if(ze=ht[ae],T.format!==di)if(Be!==null)if(rt){if(G)if(T.layerUpdates.size>0){const Ue=xg(ze.width,ze.height,T.format,T.type);for(const Ie of T.layerUpdates){const st=ze.data.subarray(Ie*Ue/ze.data.BYTES_PER_ELEMENT,(Ie+1)*Ue/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Ie,ze.width,ze.height,1,Be,st)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,ze.width,ze.height,Ee.depth,Be,ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,et,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,ze.width,ze.height,Ee.depth,Be,Je,ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,et,ze.width,ze.height,Ee.depth,0,Be,Je,ze.data)}else{rt&&Ct&&t.texStorage2D(s.TEXTURE_2D,Le,et,ht[0].width,ht[0].height);for(let ae=0,me=ht.length;ae<me;ae++)ze=ht[ae],T.format!==di?Be!==null?rt?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,ze.width,ze.height,Be,ze.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,et,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?G&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,ze.width,ze.height,Be,Je,ze.data):t.texImage2D(s.TEXTURE_2D,ae,et,ze.width,ze.height,0,Be,Je,ze.data)}else if(T.isDataArrayTexture)if(rt){if(Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,et,Ee.width,Ee.height,Ee.depth),G)if(T.layerUpdates.size>0){const ae=xg(Ee.width,Ee.height,T.format,T.type);for(const me of T.layerUpdates){const Ue=Ee.data.subarray(me*ae/Ee.data.BYTES_PER_ELEMENT,(me+1)*ae/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Ee.width,Ee.height,1,Be,Je,Ue)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,Je,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Ee.width,Ee.height,Ee.depth,0,Be,Je,Ee.data);else if(T.isData3DTexture)rt?(Ct&&t.texStorage3D(s.TEXTURE_3D,Le,et,Ee.width,Ee.height,Ee.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,Je,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,et,Ee.width,Ee.height,Ee.depth,0,Be,Je,Ee.data);else if(T.isFramebufferTexture){if(Ct)if(rt)t.texStorage2D(s.TEXTURE_2D,Le,et,Ee.width,Ee.height);else{let ae=Ee.width,me=Ee.height;for(let Ue=0;Ue<Le;Ue++)t.texImage2D(s.TEXTURE_2D,Ue,et,ae,me,0,Be,Je,null),ae>>=1,me>>=1}}else if(ht.length>0){if(rt&&Ct){const ae=Ye(ht[0]);t.texStorage2D(s.TEXTURE_2D,Le,et,ae.width,ae.height)}for(let ae=0,me=ht.length;ae<me;ae++)ze=ht[ae],rt?G&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Be,Je,ze):t.texImage2D(s.TEXTURE_2D,ae,et,Be,Je,ze);T.generateMipmaps=!1}else if(rt){if(Ct){const ae=Ye(Ee);t.texStorage2D(s.TEXTURE_2D,Le,et,ae.width,ae.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,Je,Ee)}else t.texImage2D(s.TEXTURE_2D,0,et,Be,Je,Ee);y(T)&&v(ve),We.__version=pe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ee(D,T,Z){if(T.image.length!==6)return;const ve=Ne(D,T),xe=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+Z);const pe=r.get(xe);if(xe.version!==pe.__version||ve===!0){t.activeTexture(s.TEXTURE0+Z);const We=St.getPrimaries(St.workingColorSpace),be=T.colorSpace===Ar?null:St.getPrimaries(T.colorSpace),Oe=T.colorSpace===Ar||We===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const dt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,Be=[];for(let me=0;me<6;me++)!dt&&!Ee?Be[me]=E(T.image[me],!0,a.maxCubemapSize):Be[me]=Ee?T.image[me].image:T.image[me],Be[me]=Et(T,Be[me]);const Je=Be[0],et=l.convert(T.format,T.colorSpace),ze=l.convert(T.type),ht=b(T.internalFormat,et,ze,T.colorSpace),rt=T.isVideoTexture!==!0,Ct=pe.__version===void 0||ve===!0,G=xe.dataReady;let Le=W(T,Je);re(s.TEXTURE_CUBE_MAP,T);let ae;if(dt){rt&&Ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ht,Je.width,Je.height);for(let me=0;me<6;me++){ae=Be[me].mipmaps;for(let Ue=0;Ue<ae.length;Ue++){const Ie=ae[Ue];T.format!==di?et!==null?rt?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,Ie.width,Ie.height,et,Ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,ht,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,Ie.width,Ie.height,et,ze,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,ht,Ie.width,Ie.height,0,et,ze,Ie.data)}}}else{if(ae=T.mipmaps,rt&&Ct){ae.length>0&&Le++;const me=Ye(Be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ht,me.width,me.height)}for(let me=0;me<6;me++)if(Ee){rt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Be[me].width,Be[me].height,et,ze,Be[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ht,Be[me].width,Be[me].height,0,et,ze,Be[me].data);for(let Ue=0;Ue<ae.length;Ue++){const st=ae[Ue].image[me].image;rt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,st.width,st.height,et,ze,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,ht,st.width,st.height,0,et,ze,st.data)}}else{rt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,et,ze,Be[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ht,et,ze,Be[me]);for(let Ue=0;Ue<ae.length;Ue++){const Ie=ae[Ue];rt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,et,ze,Ie.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,ht,et,ze,Ie.image[me])}}}y(T)&&v(s.TEXTURE_CUBE_MAP),pe.__version=xe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ge(D,T,Z,ve,xe,pe){const We=l.convert(Z.format,Z.colorSpace),be=l.convert(Z.type),Oe=b(Z.internalFormat,We,be,Z.colorSpace),dt=r.get(T),Ee=r.get(Z);if(Ee.__renderTarget=T,!dt.__hasExternalTextures){const Be=Math.max(1,T.width>>pe),Je=Math.max(1,T.height>>pe);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?t.texImage3D(xe,pe,Oe,Be,Je,T.depth,0,We,be,null):t.texImage2D(xe,pe,Oe,Be,Je,0,We,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),lt(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,xe,Ee.__webglTexture,0,ct(T)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,xe,Ee.__webglTexture,pe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function he(D,T,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,D),T.depthBuffer){const ve=T.depthTexture,xe=ve&&ve.isDepthTexture?ve.type:null,pe=C(T.stencilBuffer,xe),We=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=ct(T);lt(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,pe,T.width,T.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,pe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,pe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,D)}else{const ve=T.textures;for(let xe=0;xe<ve.length;xe++){const pe=ve[xe],We=l.convert(pe.format,pe.colorSpace),be=l.convert(pe.type),Oe=b(pe.internalFormat,We,be,pe.colorSpace),dt=ct(T);Z&&lt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Oe,T.width,T.height):lt(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,Oe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Oe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(T.depthTexture);ve.__renderTarget=T,(!ve.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ce(T.depthTexture,0);const xe=ve.__webglTexture,pe=ct(T);if(T.depthTexture.format===$s)lt(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(T.depthTexture.format===Js)lt(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Pe(D){const T=r.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const ve=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ve){const xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ve.removeEventListener("dispose",xe)};ve.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=ve}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Re(T.__webglFramebuffer,D)}else if(Z){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]===void 0)T.__webglDepthbuffer[ve]=s.createRenderbuffer(),he(T.__webglDepthbuffer[ve],D,!1);else{const xe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer[ve];s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,pe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),he(T.__webglDepthbuffer,D,!1);else{const ve=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,xe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(D,T,Z){const ve=r.get(D);T!==void 0&&ge(ve.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Pe(D)}function _t(D){const T=D.texture,Z=r.get(D),ve=r.get(T);D.addEventListener("dispose",U);const xe=D.textures,pe=D.isWebGLCubeRenderTarget===!0,We=xe.length>1;if(We||(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=T.version,c.memory.textures++),pe){Z.__webglFramebuffer=[];for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[be]=[];for(let Oe=0;Oe<T.mipmaps.length;Oe++)Z.__webglFramebuffer[be][Oe]=s.createFramebuffer()}else Z.__webglFramebuffer[be]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let be=0;be<T.mipmaps.length;be++)Z.__webglFramebuffer[be]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(We)for(let be=0,Oe=xe.length;be<Oe;be++){const dt=r.get(xe[be]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),c.memory.textures++)}if(D.samples>0&&lt(D)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let be=0;be<xe.length;be++){const Oe=xe[be];Z.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[be]);const dt=l.convert(Oe.format,Oe.colorSpace),Ee=l.convert(Oe.type),Be=b(Oe.internalFormat,dt,Ee,Oe.colorSpace,D.isXRRenderTarget===!0),Je=ct(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,Be,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Z.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),he(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){t.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),re(s.TEXTURE_CUBE_MAP,T);for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0)for(let Oe=0;Oe<T.mipmaps.length;Oe++)ge(Z.__webglFramebuffer[be][Oe],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe);else ge(Z.__webglFramebuffer[be],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(T)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let be=0,Oe=xe.length;be<Oe;be++){const dt=xe[be],Ee=r.get(dt);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),re(s.TEXTURE_2D,dt),ge(Z.__webglFramebuffer,D,dt,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),y(dt)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,ve.__webglTexture),re(be,T),T.mipmaps&&T.mipmaps.length>0)for(let Oe=0;Oe<T.mipmaps.length;Oe++)ge(Z.__webglFramebuffer[Oe],D,T,s.COLOR_ATTACHMENT0,be,Oe);else ge(Z.__webglFramebuffer,D,T,s.COLOR_ATTACHMENT0,be,0);y(T)&&v(be),t.unbindTexture()}D.depthBuffer&&Pe(D)}function at(D){const T=D.textures;for(let Z=0,ve=T.length;Z<ve;Z++){const xe=T[Z];if(y(xe)){const pe=L(D),We=r.get(xe).__webglTexture;t.bindTexture(pe,We),v(pe),t.unbindTexture()}}}const At=[],X=[];function en(D){if(D.samples>0){if(lt(D)===!1){const T=D.textures,Z=D.width,ve=D.height;let xe=s.COLOR_BUFFER_BIT;const pe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(D),be=T.length>1;if(be)for(let Oe=0;Oe<T.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Oe=0;Oe<T.length;Oe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Oe]);const dt=r.get(T[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,Z,ve,0,0,Z,ve,xe,s.NEAREST),h===!0&&(At.length=0,X.length=0,At.push(s.COLOR_ATTACHMENT0+Oe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(At.push(pe),X.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,X)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,At))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Oe=0;Oe<T.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,We.__webglColorRenderbuffer[Oe]);const dt=r.get(T[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,dt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const T=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ct(D){return Math.min(a.maxSamples,D.samples)}function lt(D){const T=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(D){const T=c.render.frame;g.get(D)!==T&&(g.set(D,T),D.update())}function Et(D,T){const Z=D.colorSpace,ve=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==io&&Z!==Ar&&(St.getTransfer(Z)===bt?(ve!==di||xe!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=q,this.resetTextureUnits=ie,this.setTexture2D=ce,this.setTexture2DArray=oe,this.setTexture3D=de,this.setTextureCube=B,this.rebindTextures=Ce,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=lt}function zT(s,e){function t(r,a=Ar){let l;const c=St.getTransfer(a);if(r===Ki)return s.UNSIGNED_BYTE;if(r===Ad)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Rd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Qg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Kg)return s.BYTE;if(r===Zg)return s.SHORT;if(r===Qo)return s.UNSIGNED_SHORT;if(r===Td)return s.INT;if(r===ss)return s.UNSIGNED_INT;if(r===ji)return s.FLOAT;if(r===ia)return s.HALF_FLOAT;if(r===Jg)return s.ALPHA;if(r===ev)return s.RGB;if(r===di)return s.RGBA;if(r===tv)return s.LUMINANCE;if(r===nv)return s.LUMINANCE_ALPHA;if(r===$s)return s.DEPTH_COMPONENT;if(r===Js)return s.DEPTH_STENCIL;if(r===iv)return s.RED;if(r===Cd)return s.RED_INTEGER;if(r===rv)return s.RG;if(r===Pd)return s.RG_INTEGER;if(r===bd)return s.RGBA_INTEGER;if(r===zl||r===Hl||r===Vl||r===Gl)if(c===bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===zl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===zl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hf||r===Vf||r===Gf||r===Wf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Hf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xf||r===jf||r===$f)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Xf||r===jf)return c===bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===$f)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yf||r===qf||r===Kf||r===Zf||r===Qf||r===Jf||r===ed||r===td||r===nd||r===id||r===rd||r===sd||r===od||r===ad)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Yf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ed)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===td)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===id)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===od)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ad)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wl||r===ld||r===ud)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Wl)return c===bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ld)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ud)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sv||r===cd||r===fd||r===dd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Wl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===cd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===dd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class HT extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rr extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VT={type:"move"};class yf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,r),v=this._getHandJoint(p,E);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),S=.02,M=.005;p.inputState.pinching&&x>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(VT)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Rr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const GT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new Un,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Lr({vertexShader:GT,fragmentShader:WT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new rs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jT extends ro{constructor(e,t){super();const r=this;let a=null,l=1,c=null,f="local-floor",h=1,p=null,g=null,_=null,x=null,S=null,M=null;const E=new XT,y=t.getContextAttributes();let v=null,L=null;const b=[],C=[],W=new Mt;let F=null;const U=new ci;U.viewport=new Wt;const V=new ci;V.viewport=new Wt;const P=[U,V],A=new HT;let k=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let ee=b[z];return ee===void 0&&(ee=new yf,b[z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(z){let ee=b[z];return ee===void 0&&(ee=new yf,b[z]=ee),ee.getGripSpace()},this.getHand=function(z){let ee=b[z];return ee===void 0&&(ee=new yf,b[z]=ee),ee.getHandSpace()};function q(z){const ee=C.indexOf(z.inputSource);if(ee===-1)return;const ge=b[ee];ge!==void 0&&(ge.update(z.inputSource,z.frame,p||c),ge.dispatchEvent({type:z.type,data:z.inputSource}))}function ue(){a.removeEventListener("select",q),a.removeEventListener("selectstart",q),a.removeEventListener("selectend",q),a.removeEventListener("squeeze",q),a.removeEventListener("squeezestart",q),a.removeEventListener("squeezeend",q),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",ce);for(let z=0;z<b.length;z++){const ee=C[z];ee!==null&&(C[z]=null,b[z].disconnect(ee))}k=null,ie=null,E.reset(),e.setRenderTarget(v),S=null,x=null,_=null,a=null,L=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){l=z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){f=z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(z){p=z},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(z){if(a=z,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",q),a.addEventListener("selectstart",q),a.addEventListener("selectend",q),a.addEventListener("squeeze",q),a.addEventListener("squeezestart",q),a.addEventListener("squeezeend",q),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",ce),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(W),a.renderState.layers===void 0){const ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,ee),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new os(S.framebufferWidth,S.framebufferHeight,{format:di,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ee=null,ge=null,he=null;y.depth&&(he=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=y.stencil?Js:$s,ge=y.stencil?Qs:ss);const Re={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:l};_=new XRWebGLBinding(a,t),x=_.createProjectionLayer(Re),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new os(x.textureWidth,x.textureHeight,{format:di,type:Ki,depthTexture:new yv(x.textureWidth,x.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(f),Ne.setContext(a),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ce(z){for(let ee=0;ee<z.removed.length;ee++){const ge=z.removed[ee],he=C.indexOf(ge);he>=0&&(C[he]=null,b[he].disconnect(ge))}for(let ee=0;ee<z.added.length;ee++){const ge=z.added[ee];let he=C.indexOf(ge);if(he===-1){for(let Pe=0;Pe<b.length;Pe++)if(Pe>=C.length){C.push(ge),he=Pe;break}else if(C[Pe]===null){C[Pe]=ge,he=Pe;break}if(he===-1)break}const Re=b[he];Re&&Re.connect(ge)}}const oe=new J,de=new J;function B(z,ee,ge){oe.setFromMatrixPosition(ee.matrixWorld),de.setFromMatrixPosition(ge.matrixWorld);const he=oe.distanceTo(de),Re=ee.projectionMatrix.elements,Pe=ge.projectionMatrix.elements,Ce=Re[14]/(Re[10]-1),_t=Re[14]/(Re[10]+1),at=(Re[9]+1)/Re[5],At=(Re[9]-1)/Re[5],X=(Re[8]-1)/Re[0],en=(Pe[8]+1)/Pe[0],ct=Ce*X,lt=Ce*en,Ke=he/(-X+en),Et=Ke*-X;if(ee.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Et),z.translateZ(Ke),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),Re[10]===-1)z.projectionMatrix.copy(ee.projectionMatrix),z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Ye=Ce+Ke,D=_t+Ke,T=ct-Et,Z=lt+(he-Et),ve=at*_t/D*Ye,xe=At*_t/D*Ye;z.projectionMatrix.makePerspective(T,Z,ve,xe,Ye,D),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function fe(z,ee){ee===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(ee.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(a===null)return;let ee=z.near,ge=z.far;E.texture!==null&&(E.depthNear>0&&(ee=E.depthNear),E.depthFar>0&&(ge=E.depthFar)),A.near=V.near=U.near=ee,A.far=V.far=U.far=ge,(k!==A.near||ie!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,ie=A.far),U.layers.mask=z.layers.mask|2,V.layers.mask=z.layers.mask|4,A.layers.mask=U.layers.mask|V.layers.mask;const he=z.parent,Re=A.cameras;fe(A,he);for(let Pe=0;Pe<Re.length;Pe++)fe(Re[Pe],he);Re.length===2?B(A,U,V):A.projectionMatrix.copy(U.projectionMatrix),le(z,A,he)};function le(z,ee,ge){ge===null?z.matrix.copy(ee.matrixWorld):(z.matrix.copy(ge.matrixWorld),z.matrix.invert(),z.matrix.multiply(ee.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(ee.projectionMatrix),z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=hd*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(z){h=z,x!==null&&(x.fixedFoveation=z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=z)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(A)};let N=null;function re(z,ee){if(g=ee.getViewerPose(p||c),M=ee,g!==null){const ge=g.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let he=!1;ge.length!==A.cameras.length&&(A.cameras.length=0,he=!0);for(let Pe=0;Pe<ge.length;Pe++){const Ce=ge[Pe];let _t=null;if(S!==null)_t=S.getViewport(Ce);else{const At=_.getViewSubImage(x,Ce);_t=At.viewport,Pe===0&&(e.setRenderTargetTextures(L,At.colorTexture,x.ignoreDepthValues?void 0:At.depthStencilTexture),e.setRenderTarget(L))}let at=P[Pe];at===void 0&&(at=new ci,at.layers.enable(Pe),at.viewport=new Wt,P[Pe]=at),at.matrix.fromArray(Ce.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Ce.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(_t.x,_t.y,_t.width,_t.height),Pe===0&&(A.matrix.copy(at.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),he===!0&&A.cameras.push(at)}const Re=a.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Pe=_.getDepthInformation(ge[0]);Pe&&Pe.isValid&&Pe.texture&&E.init(e,Pe,a.renderState)}}for(let ge=0;ge<b.length;ge++){const he=C[ge],Re=b[ge];he!==null&&Re!==void 0&&Re.update(he,ee,p||c)}N&&N(z,ee),ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ee}),M=null}const Ne=new xv;Ne.setAnimationLoop(re),this.setAnimationLoop=function(z){N=z},this.dispose=function(){}}}const Zr=new Ri,$T=new Ht;function YT(s,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,gv(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,L,b,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),_(y,v)):v.isMeshPhongMaterial?(l(y,v),g(y,v)):v.isMeshStandardMaterial?(l(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,C)):v.isMeshMatcapMaterial?(l(y,v),M(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),E(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(c(y,v),v.isLineDashedMaterial&&f(y,v)):v.isPointsMaterial?h(y,v,L,b):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===In&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===In&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const L=e.get(v),b=L.envMap,C=L.envMapRotation;b&&(y.envMap.value=b,Zr.copy(C),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),y.envMapRotation.value.setFromMatrix4($T.makeRotationFromEuler(Zr)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function c(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function f(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,L,b){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*L,y.scale.value=b*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,L){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===In&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,v){v.matcap&&(y.matcap.value=v.matcap)}function E(y,v){const L=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function qT(s,e,t,r){let a={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,b){const C=b.program;r.uniformBlockBinding(L,C)}function p(L,b){let C=a[L.id];C===void 0&&(M(L),C=g(L),a[L.id]=C,L.addEventListener("dispose",y));const W=b.program;r.updateUBOMapping(L,W);const F=e.render.frame;l[L.id]!==F&&(x(L),l[L.id]=F)}function g(L){const b=_();L.__bindingPointIndex=b;const C=s.createBuffer(),W=L.__size,F=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,W,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,C),C}function _(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const b=a[L.id],C=L.uniforms,W=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let F=0,U=C.length;F<U;F++){const V=Array.isArray(C[F])?C[F]:[C[F]];for(let P=0,A=V.length;P<A;P++){const k=V[P];if(S(k,F,P,W)===!0){const ie=k.__offset,q=Array.isArray(k.value)?k.value:[k.value];let ue=0;for(let ce=0;ce<q.length;ce++){const oe=q[ce],de=E(oe);typeof oe=="number"||typeof oe=="boolean"?(k.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,ie+ue,k.__data)):oe.isMatrix3?(k.__data[0]=oe.elements[0],k.__data[1]=oe.elements[1],k.__data[2]=oe.elements[2],k.__data[3]=0,k.__data[4]=oe.elements[3],k.__data[5]=oe.elements[4],k.__data[6]=oe.elements[5],k.__data[7]=0,k.__data[8]=oe.elements[6],k.__data[9]=oe.elements[7],k.__data[10]=oe.elements[8],k.__data[11]=0):(oe.toArray(k.__data,ue),ue+=de.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ie,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(L,b,C,W){const F=L.value,U=b+"_"+C;if(W[U]===void 0)return typeof F=="number"||typeof F=="boolean"?W[U]=F:W[U]=F.clone(),!0;{const V=W[U];if(typeof F=="number"||typeof F=="boolean"){if(V!==F)return W[U]=F,!0}else if(V.equals(F)===!1)return V.copy(F),!0}return!1}function M(L){const b=L.uniforms;let C=0;const W=16;for(let U=0,V=b.length;U<V;U++){const P=Array.isArray(b[U])?b[U]:[b[U]];for(let A=0,k=P.length;A<k;A++){const ie=P[A],q=Array.isArray(ie.value)?ie.value:[ie.value];for(let ue=0,ce=q.length;ue<ce;ue++){const oe=q[ue],de=E(oe),B=C%W,fe=B%de.boundary,le=B+fe;C+=fe,le!==0&&W-le<de.storage&&(C+=W-le),ie.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=C,C+=de.storage}}}const F=C%W;return F>0&&(C+=W-F),L.__size=C,L.__cache={},this}function E(L){const b={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(b.boundary=4,b.storage=4):L.isVector2?(b.boundary=8,b.storage=8):L.isVector3||L.isColor?(b.boundary=16,b.storage=12):L.isVector4?(b.boundary=16,b.storage=16):L.isMatrix3?(b.boundary=48,b.storage=48):L.isMatrix4?(b.boundary=64,b.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),b}function y(L){const b=L.target;b.removeEventListener("dispose",y);const C=c.indexOf(b.__bindingPointIndex);c.splice(C,1),s.deleteBuffer(a[b.id]),delete a[b.id],delete l[b.id]}function v(){for(const L in a)s.deleteBuffer(a[L]);c=[],a={},l={}}return{bind:h,update:p,dispose:v}}class KT{constructor(e={}){const{canvas:t=ky(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const M=new Uint32Array(4),E=new Int32Array(4);let y=null,v=null;const L=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=Pr,this.toneMappingExposure=1;const C=this;let W=!1,F=0,U=0,V=null,P=-1,A=null;const k=new Wt,ie=new Wt;let q=null;const ue=new mt(0);let ce=0,oe=t.width,de=t.height,B=1,fe=null,le=null;const N=new Wt(0,0,oe,de),re=new Wt(0,0,oe,de);let Ne=!1;const z=new Ld;let ee=!1,ge=!1;const he=new Ht,Re=new Ht,Pe=new J,Ce=new Wt,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function At(){return V===null?B:1}let X=r;function en(R,j){return t.getContext(R,j)}try{const R={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ed}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),X===null){const j="webgl2";if(X=en(j,R),X===null)throw en(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ct,lt,Ke,Et,Ye,D,T,Z,ve,xe,pe,We,be,Oe,dt,Ee,Be,Je,et,ze,ht,rt,Ct,G;function Le(){ct=new tw(X),ct.init(),rt=new zT(X,ct),lt=new qE(X,ct,e,rt),Ke=new OT(X,ct),lt.reverseDepthBuffer&&x&&Ke.buffers.depth.setReversed(!0),Et=new rw(X),Ye=new MT,D=new BT(X,ct,Ke,Ye,lt,rt,Et),T=new ZE(C),Z=new ew(C),ve=new fS(X),Ct=new $E(X,ve),xe=new nw(X,ve,Et,Ct),pe=new ow(X,xe,ve,Et),et=new sw(X,lt,D),Ee=new KE(Ye),We=new ST(C,T,Z,ct,lt,Ct,Ee),be=new YT(C,Ye),Oe=new wT,dt=new bT(ct),Je=new jE(C,T,Z,Ke,pe,S,h),Be=new NT(C,pe,lt),G=new qT(X,Et,lt,Ke),ze=new YE(X,ct,Et),ht=new iw(X,ct,Et),Et.programs=We.programs,C.capabilities=lt,C.extensions=ct,C.properties=Ye,C.renderLists=Oe,C.shadowMap=Be,C.state=Ke,C.info=Et}Le();const ae=new jT(C,X);this.xr=ae,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(oe,de,!1))},this.getSize=function(R){return R.set(oe,de)},this.setSize=function(R,j,ne=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=R,de=j,t.width=Math.floor(R*B),t.height=Math.floor(j*B),ne===!0&&(t.style.width=R+"px",t.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(oe*B,de*B).floor()},this.setDrawingBufferSize=function(R,j,ne){oe=R,de=j,B=ne,t.width=Math.floor(R*ne),t.height=Math.floor(j*ne),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,j,ne,se){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,j,ne,se),Ke.viewport(k.copy(N).multiplyScalar(B).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,j,ne,se){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,j,ne,se),Ke.scissor(ie.copy(re).multiplyScalar(B).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(R){Ke.setScissorTest(Ne=R)},this.setOpaqueSort=function(R){fe=R},this.setTransparentSort=function(R){le=R},this.getClearColor=function(R){return R.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(R=!0,j=!0,ne=!0){let se=0;if(R){let $=!1;if(V!==null){const Ae=V.texture.format;$=Ae===bd||Ae===Pd||Ae===Cd}if($){const Ae=V.texture.type,we=Ae===Ki||Ae===ss||Ae===Qo||Ae===Qs||Ae===Ad||Ae===Rd,Xe=Je.getClearColor(),Ve=Je.getClearAlpha(),tt=Xe.r,it=Xe.g,je=Xe.b;we?(M[0]=tt,M[1]=it,M[2]=je,M[3]=Ve,X.clearBufferuiv(X.COLOR,0,M)):(E[0]=tt,E[1]=it,E[2]=je,E[3]=Ve,X.clearBufferiv(X.COLOR,0,E))}else se|=X.COLOR_BUFFER_BIT}j&&(se|=X.DEPTH_BUFFER_BIT),ne&&(se|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),Oe.dispose(),dt.dispose(),Ye.dispose(),T.dispose(),Z.dispose(),pe.dispose(),Ct.dispose(),G.dispose(),We.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",as),ae.removeEventListener("sessionend",Zi),Pi.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const R=Et.autoReset,j=Be.enabled,ne=Be.autoUpdate,se=Be.needsUpdate,$=Be.type;Le(),Et.autoReset=R,Be.enabled=j,Be.autoUpdate=ne,Be.needsUpdate=se,Be.type=$}function Ie(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function st(R){const j=R.target;j.removeEventListener("dispose",st),Ut(j)}function Ut(R){Yt(R),Ye.remove(R)}function Yt(R){const j=Ye.get(R).programs;j!==void 0&&(j.forEach(function(ne){We.releaseProgram(ne)}),R.isShaderMaterial&&We.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ne,se,$,Ae){j===null&&(j=_t);const we=$.isMesh&&$.matrixWorld.determinant()<0,Xe=ua(R,j,ne,se,$);Ke.setMaterial(se,we);let Ve=ne.index,tt=1;if(se.wireframe===!0){if(Ve=xe.getWireframeAttribute(ne),Ve===void 0)return;tt=2}const it=ne.drawRange,je=ne.attributes.position;let vt=it.start*tt,Rt=(it.start+it.count)*tt;Ae!==null&&(vt=Math.max(vt,Ae.start*tt),Rt=Math.min(Rt,(Ae.start+Ae.count)*tt)),Ve!==null?(vt=Math.max(vt,0),Rt=Math.min(Rt,Ve.count)):je!=null&&(vt=Math.max(vt,0),Rt=Math.min(Rt,je.count));const gt=Rt-vt;if(gt<0||gt===1/0)return;Ct.setup($,se,Xe,ne,Ve);let un,ot=ze;if(Ve!==null&&(un=ve.get(Ve),ot=ht,ot.setIndex(un)),$.isMesh)se.wireframe===!0?(Ke.setLineWidth(se.wireframeLinewidth*At()),ot.setMode(X.LINES)):ot.setMode(X.TRIANGLES);else if($.isLine){let qe=se.linewidth;qe===void 0&&(qe=1),Ke.setLineWidth(qe*At()),$.isLineSegments?ot.setMode(X.LINES):$.isLineLoop?ot.setMode(X.LINE_LOOP):ot.setMode(X.LINE_STRIP)}else $.isPoints?ot.setMode(X.POINTS):$.isSprite&&ot.setMode(X.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ot.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))ot.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const qe=$._multiDrawStarts,Jn=$._multiDrawCounts,wt=$._multiDrawCount,cn=Ve?ve.get(Ve).bytesPerElement:1,ei=Ye.get(se).currentProgram.getUniforms();for(let qt=0;qt<wt;qt++)ei.setValue(X,"_gl_DrawID",qt),ot.render(qe[qt]/cn,Jn[qt])}else if($.isInstancedMesh)ot.renderInstances(vt,gt,$.count);else if(ne.isInstancedBufferGeometry){const qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Jn=Math.min(ne.instanceCount,qe);ot.renderInstances(vt,gt,Jn)}else ot.render(vt,gt)};function xt(R,j,ne){R.transparent===!0&&R.side===Ei&&R.forceSinglePass===!1?(R.side=In,R.needsUpdate=!0,ls(R,j,ne),R.side=br,R.needsUpdate=!0,ls(R,j,ne),R.side=Ei):ls(R,j,ne)}this.compile=function(R,j,ne=null){ne===null&&(ne=R),v=dt.get(ne),v.init(j),b.push(v),ne.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),R!==ne&&R.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),v.setupLights();const se=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ae=$.material;if(Ae)if(Array.isArray(Ae))for(let we=0;we<Ae.length;we++){const Xe=Ae[we];xt(Xe,ne,$),se.add(Xe)}else xt(Ae,ne,$),se.add(Ae)}),b.pop(),v=null,se},this.compileAsync=function(R,j,ne=null){const se=this.compile(R,j,ne);return new Promise($=>{function Ae(){if(se.forEach(function(we){Ye.get(we).currentProgram.isReady()&&se.delete(we)}),se.size===0){$(R);return}setTimeout(Ae,10)}ct.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let En=null;function vn(R){En&&En(R)}function as(){Pi.stop()}function Zi(){Pi.start()}const Pi=new xv;Pi.setAnimationLoop(vn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(R){En=R,ae.setAnimationLoop(R),R===null?Pi.stop():Pi.start()},ae.addEventListener("sessionstart",as),ae.addEventListener("sessionend",Zi),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(j),j=ae.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,j,V),v=dt.get(R,b.length),v.init(j),b.push(v),Re.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z.setFromProjectionMatrix(Re),ge=this.localClippingEnabled,ee=Ee.init(this.clippingPlanes,ge),y=Oe.get(R,L.length),y.init(),L.push(y),ae.enabled===!0&&ae.isPresenting===!0){const Ae=C.xr.getDepthSensingMesh();Ae!==null&&bi(Ae,j,-1/0,C.sortObjects)}bi(R,j,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(fe,le),at=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,at&&Je.addToRenderList(y,R),this.info.render.frame++,ee===!0&&Ee.beginShadows();const ne=v.state.shadowsArray;Be.render(ne,R,j),ee===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=y.opaque,$=y.transmissive;if(v.setupLights(),j.isArrayCamera){const Ae=j.cameras;if($.length>0)for(let we=0,Xe=Ae.length;we<Xe;we++){const Ve=Ae[we];Ir(se,$,R,Ve)}at&&Je.render(R);for(let we=0,Xe=Ae.length;we<Xe;we++){const Ve=Ae[we];Dr(y,R,Ve,Ve.viewport)}}else $.length>0&&Ir(se,$,R,j),at&&Je.render(R),Dr(y,R,j);V!==null&&(D.updateMultisampleRenderTarget(V),D.updateRenderTargetMipmap(V)),R.isScene===!0&&R.onAfterRender(C,R,j),Ct.resetDefaultState(),P=-1,A=null,b.pop(),b.length>0?(v=b[b.length-1],ee===!0&&Ee.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function bi(R,j,ne,se){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||z.intersectsSprite(R)){se&&Ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Re);const we=pe.update(R),Xe=R.material;Xe.visible&&y.push(R,we,Xe,ne,Ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||z.intersectsObject(R))){const we=pe.update(R),Xe=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ce.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ce.copy(we.boundingSphere.center)),Ce.applyMatrix4(R.matrixWorld).applyMatrix4(Re)),Array.isArray(Xe)){const Ve=we.groups;for(let tt=0,it=Ve.length;tt<it;tt++){const je=Ve[tt],vt=Xe[je.materialIndex];vt&&vt.visible&&y.push(R,we,vt,ne,Ce.z,je)}}else Xe.visible&&y.push(R,we,Xe,ne,Ce.z,null)}}const Ae=R.children;for(let we=0,Xe=Ae.length;we<Xe;we++)bi(Ae[we],j,ne,se)}function Dr(R,j,ne,se){const $=R.opaque,Ae=R.transmissive,we=R.transparent;v.setupLightsView(ne),ee===!0&&Ee.setGlobalState(C.clippingPlanes,ne),se&&Ke.viewport(k.copy(se)),$.length>0&&Qi($,j,ne),Ae.length>0&&Qi(Ae,j,ne),we.length>0&&Qi(we,j,ne),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Ir(R,j,ne,se){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[se.id]===void 0&&(v.state.transmissionRenderTarget[se.id]=new os(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?ia:Ki,minFilter:is,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const Ae=v.state.transmissionRenderTarget[se.id],we=se.viewport||k;Ae.setSize(we.z,we.w);const Xe=C.getRenderTarget();C.setRenderTarget(Ae),C.getClearColor(ue),ce=C.getClearAlpha(),ce<1&&C.setClearColor(16777215,.5),C.clear(),at&&Je.render(ne);const Ve=C.toneMapping;C.toneMapping=Pr;const tt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),v.setupLightsView(se),ee===!0&&Ee.setGlobalState(C.clippingPlanes,se),Qi(R,ne,se),D.updateMultisampleRenderTarget(Ae),D.updateRenderTargetMipmap(Ae),ct.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let je=0,vt=j.length;je<vt;je++){const Rt=j[je],gt=Rt.object,un=Rt.geometry,ot=Rt.material,qe=Rt.group;if(ot.side===Ei&&gt.layers.test(se.layers)){const Jn=ot.side;ot.side=In,ot.needsUpdate=!0,aa(gt,ne,se,un,ot,qe),ot.side=Jn,ot.needsUpdate=!0,it=!0}}it===!0&&(D.updateMultisampleRenderTarget(Ae),D.updateRenderTargetMipmap(Ae))}C.setRenderTarget(Xe),C.setClearColor(ue,ce),tt!==void 0&&(se.viewport=tt),C.toneMapping=Ve}function Qi(R,j,ne){const se=j.isScene===!0?j.overrideMaterial:null;for(let $=0,Ae=R.length;$<Ae;$++){const we=R[$],Xe=we.object,Ve=we.geometry,tt=se===null?we.material:se,it=we.group;Xe.layers.test(ne.layers)&&aa(Xe,j,ne,Ve,tt,it)}}function aa(R,j,ne,se,$,Ae){R.onBeforeRender(C,j,ne,se,$,Ae),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(C,j,ne,se,R,Ae),$.transparent===!0&&$.side===Ei&&$.forceSinglePass===!1?($.side=In,$.needsUpdate=!0,C.renderBufferDirect(ne,j,se,$,R,Ae),$.side=br,$.needsUpdate=!0,C.renderBufferDirect(ne,j,se,$,R,Ae),$.side=Ei):C.renderBufferDirect(ne,j,se,$,R,Ae),R.onAfterRender(C,j,ne,se,$,Ae)}function ls(R,j,ne){j.isScene!==!0&&(j=_t);const se=Ye.get(R),$=v.state.lights,Ae=v.state.shadowsArray,we=$.state.version,Xe=We.getParameters(R,$.state,Ae,j,ne),Ve=We.getProgramCacheKey(Xe);let tt=se.programs;se.environment=R.isMeshStandardMaterial?j.environment:null,se.fog=j.fog,se.envMap=(R.isMeshStandardMaterial?Z:T).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",st),tt=new Map,se.programs=tt);let it=tt.get(Ve);if(it!==void 0){if(se.currentProgram===it&&se.lightsStateVersion===we)return gi(R,Xe),it}else Xe.uniforms=We.getUniforms(R),R.onBeforeCompile(Xe,C),it=We.acquireProgram(Xe,Ve),tt.set(Ve,it),se.uniforms=Xe.uniforms;const je=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=Ee.uniform),gi(R,Xe),se.needsLights=ru(R),se.lightsStateVersion=we,se.needsLights&&(je.ambientLightColor.value=$.state.ambient,je.lightProbe.value=$.state.probe,je.directionalLights.value=$.state.directional,je.directionalLightShadows.value=$.state.directionalShadow,je.spotLights.value=$.state.spot,je.spotLightShadows.value=$.state.spotShadow,je.rectAreaLights.value=$.state.rectArea,je.ltc_1.value=$.state.rectAreaLTC1,je.ltc_2.value=$.state.rectAreaLTC2,je.pointLights.value=$.state.point,je.pointLightShadows.value=$.state.pointShadow,je.hemisphereLights.value=$.state.hemi,je.directionalShadowMap.value=$.state.directionalShadowMap,je.directionalShadowMatrix.value=$.state.directionalShadowMatrix,je.spotShadowMap.value=$.state.spotShadowMap,je.spotLightMatrix.value=$.state.spotLightMatrix,je.spotLightMap.value=$.state.spotLightMap,je.pointShadowMap.value=$.state.pointShadowMap,je.pointShadowMatrix.value=$.state.pointShadowMatrix),se.currentProgram=it,se.uniformsList=null,it}function la(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Xl.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function gi(R,j){const ne=Ye.get(R);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.batchingColor=j.batchingColor,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.instancingMorph=j.instancingMorph,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function ua(R,j,ne,se,$){j.isScene!==!0&&(j=_t),D.resetTextureUnits();const Ae=j.fog,we=se.isMeshStandardMaterial?j.environment:null,Xe=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:io,Ve=(se.isMeshStandardMaterial?Z:T).get(se.envMap||we),tt=se.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,it=!!ne.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),je=!!ne.morphAttributes.position,vt=!!ne.morphAttributes.normal,Rt=!!ne.morphAttributes.color;let gt=Pr;se.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(gt=C.toneMapping);const un=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ot=un!==void 0?un.length:0,qe=Ye.get(se),Jn=v.state.lights;if(ee===!0&&(ge===!0||R!==A)){const _n=R===A&&se.id===P;Ee.setState(se,R,_n)}let wt=!1;se.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Jn.state.version||qe.outputColorSpace!==Xe||$.isBatchedMesh&&qe.batching===!1||!$.isBatchedMesh&&qe.batching===!0||$.isBatchedMesh&&qe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&qe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&qe.instancing===!1||!$.isInstancedMesh&&qe.instancing===!0||$.isSkinnedMesh&&qe.skinning===!1||!$.isSkinnedMesh&&qe.skinning===!0||$.isInstancedMesh&&qe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&qe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&qe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&qe.instancingMorph===!1&&$.morphTexture!==null||qe.envMap!==Ve||se.fog===!0&&qe.fog!==Ae||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ee.numPlanes||qe.numIntersection!==Ee.numIntersection)||qe.vertexAlphas!==tt||qe.vertexTangents!==it||qe.morphTargets!==je||qe.morphNormals!==vt||qe.morphColors!==Rt||qe.toneMapping!==gt||qe.morphTargetsCount!==ot)&&(wt=!0):(wt=!0,qe.__version=se.version);let cn=qe.currentProgram;wt===!0&&(cn=ls(se,j,$));let ei=!1,qt=!1,vi=!1;const Lt=cn.getUniforms(),Gn=qe.uniforms;if(Ke.useProgram(cn.program)&&(ei=!0,qt=!0,vi=!0),se.id!==P&&(P=se.id,qt=!0),ei||A!==R){Ke.buffers.depth.getReversed()?(he.copy(R.projectionMatrix),zy(he),Hy(he),Lt.setValue(X,"projectionMatrix",he)):Lt.setValue(X,"projectionMatrix",R.projectionMatrix),Lt.setValue(X,"viewMatrix",R.matrixWorldInverse);const Wn=Lt.map.cameraPosition;Wn!==void 0&&Wn.setValue(X,Pe.setFromMatrixPosition(R.matrixWorld)),lt.logarithmicDepthBuffer&&Lt.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Lt.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,qt=!0,vi=!0)}if($.isSkinnedMesh){Lt.setOptional(X,$,"bindMatrix"),Lt.setOptional(X,$,"bindMatrixInverse");const _n=$.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Lt.setValue(X,"boneTexture",_n.boneTexture,D))}$.isBatchedMesh&&(Lt.setOptional(X,$,"batchingTexture"),Lt.setValue(X,"batchingTexture",$._matricesTexture,D),Lt.setOptional(X,$,"batchingIdTexture"),Lt.setValue(X,"batchingIdTexture",$._indirectTexture,D),Lt.setOptional(X,$,"batchingColorTexture"),$._colorsTexture!==null&&Lt.setValue(X,"batchingColorTexture",$._colorsTexture,D));const Li=ne.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&et.update($,ne,cn),(qt||qe.receiveShadow!==$.receiveShadow)&&(qe.receiveShadow=$.receiveShadow,Lt.setValue(X,"receiveShadow",$.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Gn.envMap.value=Ve,Gn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&j.environment!==null&&(Gn.envMapIntensity.value=j.environmentIntensity),qt&&(Lt.setValue(X,"toneMappingExposure",C.toneMappingExposure),qe.needsLights&&ca(Gn,vi),Ae&&se.fog===!0&&be.refreshFogUniforms(Gn,Ae),be.refreshMaterialUniforms(Gn,se,B,de,v.state.transmissionRenderTarget[R.id]),Xl.upload(X,la(qe),Gn,D)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Xl.upload(X,la(qe),Gn,D),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Lt.setValue(X,"center",$.center),Lt.setValue(X,"modelViewMatrix",$.modelViewMatrix),Lt.setValue(X,"normalMatrix",$.normalMatrix),Lt.setValue(X,"modelMatrix",$.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const _n=se.uniformsGroups;for(let Wn=0,wn=_n.length;Wn<wn;Wn++){const fa=_n[Wn];G.update(fa,cn),G.bind(fa,cn)}}return cn}function ca(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function ru(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,j,ne){Ye.get(R.texture).__webglTexture=j,Ye.get(R.depthTexture).__webglTexture=ne;const se=Ye.get(R);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ne===void 0,se.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,j){const ne=Ye.get(R);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,ne=0){V=R,F=j,U=ne;let se=!0,$=null,Ae=!1,we=!1;if(R){const Ve=Ye.get(R);if(Ve.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(X.FRAMEBUFFER,null),se=!1;else if(Ve.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Ve.__hasExternalTextures)D.rebindTextures(R,Ye.get(R.texture).__webglTexture,Ye.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const je=R.depthTexture;if(Ve.__boundDepthTexture!==je){if(je!==null&&Ye.has(je)&&(R.width!==je.image.width||R.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(we=!0);const it=Ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[j])?$=it[j][ne]:$=it[j],Ae=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?$=Ye.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?$=it[ne]:$=it,k.copy(R.viewport),ie.copy(R.scissor),q=R.scissorTest}else k.copy(N).multiplyScalar(B).floor(),ie.copy(re).multiplyScalar(B).floor(),q=Ne;if(Ke.bindFramebuffer(X.FRAMEBUFFER,$)&&se&&Ke.drawBuffers(R,$),Ke.viewport(k),Ke.scissor(ie),Ke.setScissorTest(q),Ae){const Ve=Ye.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ve.__webglTexture,ne)}else if(we){const Ve=Ye.get(R.texture),tt=j||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ve.__webglTexture,ne||0,tt)}P=-1},this.readRenderTargetPixels=function(R,j,ne,se,$,Ae,we){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Xe=Xe[we]),Xe){Ke.bindFramebuffer(X.FRAMEBUFFER,Xe);try{const Ve=R.texture,tt=Ve.format,it=Ve.type;if(!lt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-se&&ne>=0&&ne<=R.height-$&&X.readPixels(j,ne,se,$,rt.convert(tt),rt.convert(it),Ae)}finally{const Ve=V!==null?Ye.get(V).__webglFramebuffer:null;Ke.bindFramebuffer(X.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(R,j,ne,se,$,Ae,we){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Xe=Xe[we]),Xe){const Ve=R.texture,tt=Ve.format,it=Ve.type;if(!lt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=R.width-se&&ne>=0&&ne<=R.height-$){Ke.bindFramebuffer(X.FRAMEBUFFER,Xe);const je=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,je),X.bufferData(X.PIXEL_PACK_BUFFER,Ae.byteLength,X.STREAM_READ),X.readPixels(j,ne,se,$,rt.convert(tt),rt.convert(it),0);const vt=V!==null?Ye.get(V).__webglFramebuffer:null;Ke.bindFramebuffer(X.FRAMEBUFFER,vt);const Rt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await By(X,Rt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,je),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ae),X.deleteBuffer(je),X.deleteSync(Rt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,j=null,ne=0){R.isTexture!==!0&&(Yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1]);const se=Math.pow(2,-ne),$=Math.floor(R.image.width*se),Ae=Math.floor(R.image.height*se),we=j!==null?j.x:0,Xe=j!==null?j.y:0;D.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,ne,0,0,we,Xe,$,Ae),Ke.unbindTexture()},this.copyTextureToTexture=function(R,j,ne=null,se=null,$=0){R.isTexture!==!0&&(Yo("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,R=arguments[1],j=arguments[2],$=arguments[3]||0,ne=null);let Ae,we,Xe,Ve,tt,it,je,vt,Rt;const gt=R.isCompressedTexture?R.mipmaps[$]:R.image;ne!==null?(Ae=ne.max.x-ne.min.x,we=ne.max.y-ne.min.y,Xe=ne.isBox3?ne.max.z-ne.min.z:1,Ve=ne.min.x,tt=ne.min.y,it=ne.isBox3?ne.min.z:0):(Ae=gt.width,we=gt.height,Xe=gt.depth||1,Ve=0,tt=0,it=0),se!==null?(je=se.x,vt=se.y,Rt=se.z):(je=0,vt=0,Rt=0);const un=rt.convert(j.format),ot=rt.convert(j.type);let qe;j.isData3DTexture?(D.setTexture3D(j,0),qe=X.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(D.setTexture2DArray(j,0),qe=X.TEXTURE_2D_ARRAY):(D.setTexture2D(j,0),qe=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,j.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,j.unpackAlignment);const Jn=X.getParameter(X.UNPACK_ROW_LENGTH),wt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),cn=X.getParameter(X.UNPACK_SKIP_PIXELS),ei=X.getParameter(X.UNPACK_SKIP_ROWS),qt=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,gt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,gt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ve),X.pixelStorei(X.UNPACK_SKIP_ROWS,tt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,it);const vi=R.isDataArrayTexture||R.isData3DTexture,Lt=j.isDataArrayTexture||j.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Gn=Ye.get(R),Li=Ye.get(j),_n=Ye.get(Gn.__renderTarget),Wn=Ye.get(Li.__renderTarget);Ke.bindFramebuffer(X.READ_FRAMEBUFFER,_n.__webglFramebuffer),Ke.bindFramebuffer(X.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let wn=0;wn<Xe;wn++)vi&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ye.get(R).__webglTexture,$,it+wn),R.isDepthTexture?(Lt&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ye.get(j).__webglTexture,$,Rt+wn),X.blitFramebuffer(Ve,tt,Ae,we,je,vt,Ae,we,X.DEPTH_BUFFER_BIT,X.NEAREST)):Lt?X.copyTexSubImage3D(qe,$,je,vt,Rt+wn,Ve,tt,Ae,we):X.copyTexSubImage2D(qe,$,je,vt,Rt+wn,Ve,tt,Ae,we);Ke.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Lt?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(qe,$,je,vt,Rt,Ae,we,Xe,un,ot,gt.data):j.isCompressedArrayTexture?X.compressedTexSubImage3D(qe,$,je,vt,Rt,Ae,we,Xe,un,gt.data):X.texSubImage3D(qe,$,je,vt,Rt,Ae,we,Xe,un,ot,gt):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,$,je,vt,Ae,we,un,ot,gt.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,$,je,vt,gt.width,gt.height,un,gt.data):X.texSubImage2D(X.TEXTURE_2D,$,je,vt,Ae,we,un,ot,gt);X.pixelStorei(X.UNPACK_ROW_LENGTH,Jn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,wt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,cn),X.pixelStorei(X.UNPACK_SKIP_ROWS,ei),X.pixelStorei(X.UNPACK_SKIP_IMAGES,qt),$===0&&j.generateMipmaps&&X.generateMipmap(qe),Ke.unbindTexture()},this.copyTextureToTexture3D=function(R,j,ne=null,se=null,$=0){return R.isTexture!==!0&&(Yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,se=arguments[1]||null,R=arguments[2],j=arguments[3],$=arguments[4]||0),Yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,ne,se,$)},this.initRenderTarget=function(R){Ye.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Ke.unbindTexture()},this.resetState=function(){F=0,U=0,V=null,Ke.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class Ud{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new mt(e),this.density=t}clone(){return new Ud(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ZT extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Tv extends so{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kl=new J,Zl=new J,yg=new Ht,$o=new fv,Nl=new nu,Sf=new J,Sg=new J;class QT extends on{constructor(e=new Vn,t=new Tv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)Kl.fromBufferAttribute(t,a-1),Zl.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=Kl.distanceTo(Zl);e.setAttribute("lineDistance",new Vt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Nl.copy(r.boundingSphere),Nl.applyMatrix4(a),Nl.radius+=l,e.ray.intersectsSphere(Nl)===!1)return;yg.copy(a).invert(),$o.copy(e.ray).applyMatrix4(yg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,g=r.index,x=r.attributes.position;if(g!==null){const S=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let E=S,y=M-1;E<y;E+=p){const v=g.getX(E),L=g.getX(E+1),b=Fl(this,e,$o,h,v,L);b&&t.push(b)}if(this.isLineLoop){const E=g.getX(M-1),y=g.getX(S),v=Fl(this,e,$o,h,E,y);v&&t.push(v)}}else{const S=Math.max(0,c.start),M=Math.min(x.count,c.start+c.count);for(let E=S,y=M-1;E<y;E+=p){const v=Fl(this,e,$o,h,E,E+1);v&&t.push(v)}if(this.isLineLoop){const E=Fl(this,e,$o,h,M-1,S);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Fl(s,e,t,r,a,l){const c=s.geometry.attributes.position;if(Kl.fromBufferAttribute(c,a),Zl.fromBufferAttribute(c,l),t.distanceSqToSegment(Kl,Zl,Sf,Sg)>r)return;Sf.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Sf);if(!(h<e.near||h>e.far))return{distance:h,point:Sg.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Mg=new J,Eg=new J;class JT extends QT{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)Mg.fromBufferAttribute(t,a),Eg.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Mg.distanceTo(Eg);e.setAttribute("lineDistance",new Vt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nd extends Vn{constructor(e=1,t=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:a},t=Math.max(3,t);const l=[],c=[],f=[],h=[],p=new J,g=new Mt;c.push(0,0,0),f.push(0,0,1),h.push(.5,.5);for(let _=0,x=3;_<=t;_++,x+=3){const S=r+_/t*a;p.x=e*Math.cos(S),p.y=e*Math.sin(S),c.push(p.x,p.y,p.z),f.push(0,0,1),g.x=(c[x]/e+1)/2,g.y=(c[x+1]/e+1)/2,h.push(g.x,g.y)}for(let _=1;_<=t;_++)l.push(_,_+1,0);this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Jo extends Vn{constructor(e=1,t=1,r=1,a=32,l=1,c=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const g=[],_=[],x=[],S=[];let M=0;const E=[],y=r/2;let v=0;L(),c===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(g),this.setAttribute("position",new Vt(_,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(S,2));function L(){const C=new J,W=new J;let F=0;const U=(t-e)/r;for(let V=0;V<=l;V++){const P=[],A=V/l,k=A*(t-e)+e;for(let ie=0;ie<=a;ie++){const q=ie/a,ue=q*h+f,ce=Math.sin(ue),oe=Math.cos(ue);W.x=k*ce,W.y=-A*r+y,W.z=k*oe,_.push(W.x,W.y,W.z),C.set(ce,U,oe).normalize(),x.push(C.x,C.y,C.z),S.push(q,1-A),P.push(M++)}E.push(P)}for(let V=0;V<a;V++)for(let P=0;P<l;P++){const A=E[P][V],k=E[P+1][V],ie=E[P+1][V+1],q=E[P][V+1];(e>0||P!==0)&&(g.push(A,k,q),F+=3),(t>0||P!==l-1)&&(g.push(k,ie,q),F+=3)}p.addGroup(v,F,0),v+=F}function b(C){const W=M,F=new Mt,U=new J;let V=0;const P=C===!0?e:t,A=C===!0?1:-1;for(let ie=1;ie<=a;ie++)_.push(0,y*A,0),x.push(0,A,0),S.push(.5,.5),M++;const k=M;for(let ie=0;ie<=a;ie++){const ue=ie/a*h+f,ce=Math.cos(ue),oe=Math.sin(ue);U.x=P*oe,U.y=y*A,U.z=P*ce,_.push(U.x,U.y,U.z),x.push(0,A,0),F.x=ce*.5+.5,F.y=oe*.5*A+.5,S.push(F.x,F.y),M++}for(let ie=0;ie<a;ie++){const q=W+ie,ue=k+ie;C===!0?g.push(ue,ue+1,q):g.push(ue+1,ue,q),V+=3}p.addGroup(v,V,C===!0?1:2),v+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ko extends Jo{constructor(e=1,t=1,r=32,a=1,l=!1,c=0,f=Math.PI*2){super(0,e,t,r,a,l,c,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:c,thetaLength:f}}static fromJSON(e){return new Ko(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fd extends Vn{constructor(e=.5,t=1,r=32,a=1,l=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:a,thetaStart:l,thetaLength:c},r=Math.max(3,r),a=Math.max(1,a);const f=[],h=[],p=[],g=[];let _=e;const x=(t-e)/a,S=new J,M=new Mt;for(let E=0;E<=a;E++){for(let y=0;y<=r;y++){const v=l+y/r*c;S.x=_*Math.cos(v),S.y=_*Math.sin(v),h.push(S.x,S.y,S.z),p.push(0,0,1),M.x=(S.x/t+1)/2,M.y=(S.y/t+1)/2,g.push(M.x,M.y)}_+=x}for(let E=0;E<a;E++){const y=E*(r+1);for(let v=0;v<r;v++){const L=v+y,b=L,C=L+r+1,W=L+r+2,F=L+1;f.push(b,C,F),f.push(C,W,F)}}this.setIndex(f),this.setAttribute("position",new Vt(h,3)),this.setAttribute("normal",new Vt(p,3)),this.setAttribute("uv",new Vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Tr extends Vn{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(c+f,Math.PI);let p=0;const g=[],_=new J,x=new J,S=[],M=[],E=[],y=[];for(let v=0;v<=r;v++){const L=[],b=v/r;let C=0;v===0&&c===0?C=.5/t:v===r&&h===Math.PI&&(C=-.5/t);for(let W=0;W<=t;W++){const F=W/t;_.x=-e*Math.cos(a+F*l)*Math.sin(c+b*f),_.y=e*Math.cos(c+b*f),_.z=e*Math.sin(a+F*l)*Math.sin(c+b*f),M.push(_.x,_.y,_.z),x.copy(_).normalize(),E.push(x.x,x.y,x.z),y.push(F+C,1-b),L.push(p++)}g.push(L)}for(let v=0;v<r;v++)for(let L=0;L<t;L++){const b=g[v][L+1],C=g[v][L],W=g[v+1][L],F=g[v+1][L+1];(v!==0||c>0)&&S.push(b,C,F),(v!==r-1||h<Math.PI)&&S.push(C,W,F)}this.setIndex(S),this.setAttribute("position",new Vt(M,3)),this.setAttribute("normal",new Vt(E,3)),this.setAttribute("uv",new Vt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sn extends so{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ov,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Od extends on{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class e1 extends Od{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Mf=new Ht,wg=new J,Tg=new J;class t1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ld,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;wg.setFromMatrixPosition(e.matrixWorld),t.position.copy(wg),Tg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tg),t.updateMatrixWorld(),Mf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class n1 extends t1{constructor(){super(new Dd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class i1 extends Od{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new n1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class r1 extends Od{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class s1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ag(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ag();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ag(){return performance.now()}class o1 extends JT{constructor(e=10,t=10,r=4473924,a=8947848){r=new mt(r),a=new mt(a);const l=t/2,c=e/t,f=e/2,h=[],p=[];for(let x=0,S=0,M=-f;x<=t;x++,M+=c){h.push(-f,0,M,f,0,M),h.push(M,0,-f,M,0,f);const E=x===l?r:a;E.toArray(p,S),S+=3,E.toArray(p,S),S+=3,E.toArray(p,S),S+=3,E.toArray(p,S),S+=3}const g=new Vn;g.setAttribute("position",new Vt(h,3)),g.setAttribute("color",new Vt(p,3));const _=new Tv({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ed}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ed);class a1{constructor(e){this.canvas=e,this.objects=[],this.highlighted=null,this.init()}init(){this.scene=new ZT,this.scene.background=new mt(8900331),this.scene.fog=new Ud(8900331,.012),this.renderer=new KT({canvas:this.canvas,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Yg,this.renderer.outputColorSpace=Hn;const e=window.innerWidth/window.innerHeight;this.frustumSize=18,this.camera=new Dd(-this.frustumSize*e,this.frustumSize*e,this.frustumSize,-this.frustumSize,.1,1e3),this.camera.position.set(25,25,25),this.camera.lookAt(0,0,0);const t=new r1(16774630,.55);this.scene.add(t);const r=new e1(8900331,9498256,.35);this.scene.add(r),this.sunLight=new i1(16775920,.9),this.sunLight.position.set(15,30,15),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera.left=-30,this.sunLight.shadow.camera.right=30,this.sunLight.shadow.camera.top=30,this.sunLight.shadow.camera.bottom=-30,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=100,this.sunLight.shadow.bias=-.001,this.scene.add(this.sunLight),this.createGround(),this.createStarterObjects(),window.addEventListener("resize",this.onResize.bind(this)),this.clock=new s1,this.animate()}createGround(){const e=new rs(60,60),t=new Sn({color:8308816}),r=new It(e,t);r.rotation.x=-Math.PI/2,r.receiveShadow=!0,this.scene.add(r);const a=new o1(60,30,5942581,5942581);a.material.opacity=.15,a.material.transparent=!0,a.position.y=.01,this.scene.add(a);for(let l=0;l<40;l++){const c=new Nd(.25+Math.random()*.3,6),f=new Sn({color:new mt().setHSL(.28,.5+Math.random()*.3,.45+Math.random()*.15)}),h=new It(c,f);h.rotation.x=-Math.PI/2,h.position.set((Math.random()-.5)*50,.02,(Math.random()-.5)*50),this.scene.add(h)}}createStarterObjects(){this.addTree(-3,-2),this.addTree(5,3),this.addTree(-6,5),this.addFlower(1,-1),this.addFlower(2,1),this.addFlower(-1,3),this.addFlower(4,-3),this.addHouse(8,-5),this.addAnimal(0,4)}addTree(e,t){const r=new Rr;r.userData={type:"tree",id:`tree_${Date.now()}_${Math.random()}`};const a=new Jo(.15,.22,1.4,8),l=new Sn({color:9133628}),c=new It(a,l);c.position.y=.7,c.castShadow=!0,r.add(c);const f=[2984526,3841374,4763752];for(let h=0;h<3;h++){const p=new Ko(.9-h*.15,.9,8),g=new Sn({color:f[h]}),_=new It(p,g);_.position.y=1.6+h*.55,_.castShadow=!0,r.add(_)}return r.position.set(e,0,t),this.scene.add(r),this.objects.push(r),r}addFlower(e,t){const r=new Rr;r.userData={type:"flower",id:`flower_${Date.now()}_${Math.random()}`};const a=new Jo(.03,.03,.5,6),l=new Sn({color:4890175}),c=new It(a,l);c.position.y=.25,r.add(c);const f=[16744115,16757575,10980346,16739179,4906624],h=f[Math.floor(Math.random()*f.length)];for(let x=0;x<5;x++){const S=new Tr(.12,8,8),M=new Sn({color:h}),E=new It(S,M),y=x/5*Math.PI*2;E.position.set(Math.cos(y)*.15,.55,Math.sin(y)*.15),E.scale.set(1,.5,1),r.add(E)}const p=new Tr(.08,8,8),g=new Sn({color:16766720}),_=new It(p,g);return _.position.y=.55,r.add(_),r.position.set(e,0,t),this.scene.add(r),this.objects.push(r),r}addHouse(e,t){const r=new Rr;r.userData={type:"house",id:`house_${Date.now()}_${Math.random()}`};const a=new oo(2,1.5,1.8),l=new Sn({color:16774630}),c=new It(a,l);c.position.y=.75,c.castShadow=!0,c.receiveShadow=!0,r.add(c);const f=new Ko(1.6,1,4),h=new Sn({color:13919050}),p=new It(f,h);p.position.y=2,p.rotation.y=Math.PI/4,p.castShadow=!0,r.add(p);const g=new rs(.4,.7),_=new Sn({color:9133628}),x=new It(g,_);x.position.set(0,.35,.91),r.add(x);const S=new rs(.35,.35),M=new Sn({color:8900331}),E=new It(S,M);return E.position.set(.6,1,.91),r.add(E),r.position.set(e,0,t),this.scene.add(r),this.objects.push(r),r}addAnimal(e,t){const r=new Rr;r.userData={type:"animal",id:`animal_${Date.now()}_${Math.random()}`,state:"sleeping"};const a=new Tr(.4,12,8),l=new Sn({color:15259063}),c=new It(a,l);c.scale.set(1.3,.8,1),c.position.y=.3,c.castShadow=!0,r.add(c);const f=new Tr(.25,12,8),h=new Sn({color:15259063}),p=new It(f,h);p.position.set(.45,.4,0),p.castShadow=!0,r.add(p);for(let y of[-1,1]){const v=new Ko(.08,.2,6),L=new Sn({color:16107168}),b=new It(v,L);b.position.set(.45,.65,y*.15),r.add(b)}const g=new Tr(.04,8,8),_=new Sn({color:3355443}),x=new It(g,_);x.position.set(.65,.45,.1),x.scale.y=.2,r.add(x);const S=new Tr(.06,6,6),M=new ql({color:10980346,transparent:!0,opacity:.7}),E=new It(S,M);return E.position.set(.6,.9,0),E.name="sleepIndicator",r.add(E),r.position.set(e,0,t),this.scene.add(r),this.objects.push(r),r}highlightObject(e){if(this.clearHighlight(),!e)return;const t=new It(new Fd(.6,.8,24),new ql({color:16766720,side:Ei,transparent:!0,opacity:.6}));t.rotation.x=-Math.PI/2,t.position.y=.02,t.name="__highlight__",e.add(t),this.highlighted=e}clearHighlight(){if(this.highlighted){const e=this.highlighted.getObjectByName("__highlight__");e&&this.highlighted.remove(e),this.highlighted=null}}wakeAnimal(e){if(!e||e.userData.type!=="animal")return;e.userData.state="awake";const t=e.getObjectByName("sleepIndicator");t&&e.remove(t),e.children.forEach(r=>{var a;((a=r.geometry)==null?void 0:a.type)==="SphereGeometry"&&r.scale.y<.5&&(r.scale.y=1)})}growSeed(e,t){const r=this.addTree(e,t);return r.scale.set(.01,.01,.01),r.userData.growing=!0,r.userData.growTarget=1,r}animate(){requestAnimationFrame(this.animate.bind(this));const e=this.clock.getElapsedTime();if(this.objects.forEach(t=>{if(t.userData.growing){const r=t.scale.x,a=t.userData.growTarget||1;r<a-.01?t.scale.setScalar(r+(a-r)*.03):(t.scale.setScalar(a),t.userData.growing=!1)}if(t.userData.type==="flower"&&(t.rotation.z=Math.sin(e*1.5+t.position.x)*.05),t.userData.type==="animal"&&t.userData.state==="sleeping"){const r=t.getObjectByName("sleepIndicator");r&&(r.position.y=.9+Math.sin(e*2)*.15,r.material.opacity=.4+Math.sin(e*3)*.3)}}),this.highlighted){const t=this.highlighted.getObjectByName("__highlight__");t&&(t.material.opacity=.4+Math.sin(e*4)*.25,t.scale.setScalar(1+Math.sin(e*3)*.08))}this.renderer.render(this.scene,this.camera)}onResize(){const e=window.innerWidth/window.innerHeight;this.camera.left=-this.frustumSize*e,this.camera.right=this.frustumSize*e,this.camera.top=this.frustumSize,this.camera.bottom=-this.frustumSize,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}dispose(){window.removeEventListener("resize",this.onResize.bind(this)),this.renderer.dispose()}}const l1=1200;class u1{constructor(){this.listeners=[],this._lastGaze={x:0,y:0,time:0},this._dwellFired=!1,this.voiceReady=!1,this.eyeReady=!1,this.gestureReady=!1,this.tapReady=!1,this._tapSocket=null}onAction(e){this.listeners.push(e)}_emit(e,t,r={}){this.listeners.forEach(a=>a({action:e,source:t,data:r}))}initVoice(){const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e){console.warn("[Input] Speech Recognition not available in this browser.");return}this.recognition=new e,this.recognition.continuous=!0,this.recognition.interimResults=!1,this.recognition.lang="en-US",this.recognition.onresult=t=>{const r=t.results[t.results.length-1][0].transcript.trim().toLowerCase();console.log(`[Voice] "${r}"`),this._matchVoiceCommand(r)},this.recognition.onerror=t=>{console.warn("[Voice] error",t.error),t.error!=="aborted"&&setTimeout(()=>this.recognition.start(),500)},this.recognition.onend=()=>{try{this.recognition.start()}catch{}};try{this.recognition.start(),this.voiceReady=!0,console.log("[Input] ✅ Voice recognition started")}catch{console.warn("[Input] Could not start voice recognition")}}_matchVoiceCommand(e){const t=[{keywords:["grow","plant","seed","tree"],action:"grow"},{keywords:["wake","hello animal","hey"],action:"wake"},{keywords:["catch","light","orb"],action:"catch"},{keywords:["move","drag"],action:"move"},{keywords:["sun","day"],action:"sun"},{keywords:["moon","night"],action:"moon"},{keywords:["hello","hi"],action:"chat_hello"},{keywords:["good job","nice","great"],action:"chat_goodjob"},{keywords:["help"],action:"chat_help"},{keywords:["build","house"],action:"build"}];for(const r of t)if(r.keywords.some(a=>e.includes(a))){this._emit(r.action,"voice",{transcript:e});return}this._emit("unknown","voice",{transcript:e})}initEyeTracking(){if(typeof window.webgazer>"u"){console.warn("[Input] WebGazer.js not loaded. Include it via <script> in index.html.");return}window.webgazer.setGazeListener(e=>{e&&this._processGaze(e.x,e.y)}).begin(),window.webgazer.showVideo(!1),window.webgazer.showPredictionPoints(!1),window.webgazer.showFaceOverlay(!1),window.webgazer.showFaceFeedbackBox(!1),this.eyeReady=!0,console.log("[Input] ✅ Eye tracking started (WebGazer)")}_processGaze(e,t){const r=Math.abs(e-this._lastGaze.x),a=Math.abs(t-this._lastGaze.y),l=Date.now();if(r>60||a>60){this._lastGaze={x:e,y:t,time:l},this._dwellFired=!1,this._emit("gaze_move","eye",{x:e,y:t});return}!this._dwellFired&&l-this._lastGaze.time>=l1&&(this._dwellFired=!0,this._emit("gaze_select","eye",{x:this._lastGaze.x,y:this._lastGaze.y}),console.log(`[Eye] Dwell select at (${Math.round(e)}, ${Math.round(t)})`))}initGestures(){console.log("[Input] ✅ Gesture system ready (call processHandLandmarks when MediaPipe data arrives)"),this.gestureReady=!0}processHandLandmarks(e){if(!e||e.length===0)return;const t=this._classifyGesture(e);t&&this._emit(t,"gesture",{landmarks:e})}_classifyGesture(e){const t=e[4],r=e[8],a=e[12],l=e[16],c=e[20],f=e[6],h=e[10],p=e[14],g=e[18],_=[r.y<f.y,a.y<h.y,l.y<p.y,c.y<g.y],x=_.filter(Boolean).length;return x===4?"open_palm":x===1&&_[0]?"point":Math.hypot(t.x-r.x,t.y-r.y)<.05?"pinch":x===0?"fist":null}initTapSensor(e="ws://localhost:8765"){const t=()=>{const r=new WebSocket(e);this._tapSocket=r,r.onopen=()=>{this.tapReady=!0,console.log("[Input] ✅ Physical tap sensor connected via WebSocket")},r.onmessage=a=>{let l;try{l=JSON.parse(a.data)}catch{return}const{event:c}=l;c==="LEFT_TAP"?(console.log("[Tap] LEFT_TAP received"),this._emit("tap_left","tap_sensor",{raw:l}),this._emit("grow","tap_sensor",{raw:l})):c==="RIGHT_TAP"&&(console.log("[Tap] RIGHT_TAP received"),this._emit("tap_right","tap_sensor",{raw:l}),this._emit("wake","tap_sensor",{raw:l}))},r.onerror=a=>{console.warn("[Tap] WebSocket error — is main.py running?",a)},r.onclose=()=>{this.tapReady=!1,console.log("[Tap] Disconnected. Retrying in 3s…"),this._tapDisposed||setTimeout(()=>t(),3e3)}};this._tapDisposed=!1,t()}say(e){if(!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(e);t.pitch=1.25,t.rate=.85,t.volume=.9,speechSynthesis.speak(t)}initAll(){this.initVoice(),this.initEyeTracking(),this.initGestures()}dispose(){if(this.recognition)try{this.recognition.stop()}catch{}if(typeof window.webgazer<"u")try{window.webgazer.end()}catch{}if(this._tapSocket){this._tapDisposed=!0;try{this._tapSocket.close()}catch{}this._tapSocket=null}}}function c1({onStart:s}){return Se.jsxs("div",{className:"welcome-screen",role:"dialog","aria-label":"Welcome",children:[Se.jsx("div",{className:"sparkles",children:"🌳✨🦋"}),Se.jsx("h1",{children:"Magic World Builder"}),Se.jsxs("p",{children:["Welcome to our magical world! 🌸",Se.jsx("br",{}),"Look, wave, tap, or speak — and watch the world come alive."]}),Se.jsx("button",{className:"start-btn",onClick:s,"aria-label":"Start playing",autoFocus:!0,children:"🎮 Let's Play!"})]})}const f1=[{emoji:"👋",text:"Hello!"},{emoji:"👀",text:"Look here!"},{emoji:"🚶",text:"Follow me!"},{emoji:"🆘",text:"Help me!"},{emoji:"🏗️",text:"Let's build!"},{emoji:"🎉",text:"Good job!"},{emoji:"🙏",text:"Thank you!"},{emoji:"🤩",text:"Wow, beautiful!"}];function d1({onSend:s}){const[e,t]=Q.useState(!1),r=a=>{s(a),t(!1)};return Se.jsxs("div",{className:"quick-chat",children:[e&&Se.jsx("div",{className:"chat-messages-grid",role:"menu","aria-label":"Quick chat messages",children:f1.map((a,l)=>Se.jsxs("button",{className:"chat-msg-btn",onClick:()=>r(a),role:"menuitem","aria-label":a.text,children:[Se.jsx("span",{children:a.emoji})," ",a.text]},l))}),Se.jsx("button",{className:"chat-toggle-btn",onClick:()=>t(!e),"aria-label":e?"Close chat":"Open quick chat",title:"Quick Chat",children:"💬"})]})}const h1=[{id:"eye",icon:"👁️",label:"Eye Tracking",desc:"Look at objects to select them"},{id:"voice",icon:"🎤",label:"Voice Tracking",desc:"Speak commands to play"},{id:"gesture",icon:"✋",label:"Gesture Tracking",desc:"Wave or point with your hands"},{id:"tap",icon:"👆",label:"Tap & Drag",desc:"Touch or click to interact"}];function p1({onConfirm:s}){const[e,t]=Q.useState("tap"),r=a=>{t(a)};return Se.jsx("div",{className:"selection-screen",children:Se.jsxs("div",{className:"selection-card",children:[Se.jsx("h1",{children:"🎮 Choose Your Input"}),Se.jsx("p",{children:"Pick how you'd like to play. You can choose more than one!"}),Se.jsx("div",{className:"input-grid",children:h1.map(a=>Se.jsxs("button",{className:`input-card ${e===a.id?"selected":""}`,onClick:()=>r(a.id),"aria-pressed":e===a.id,"aria-label":`${a.label}: ${a.desc}`,children:[Se.jsx("span",{className:"input-card-icon",children:a.icon}),Se.jsx("span",{className:"input-card-label",children:a.label}),Se.jsx("span",{className:"input-card-desc",children:a.desc}),e===a.id&&Se.jsx("span",{className:"check-mark",children:"✓"})]},a.id))}),Se.jsx("button",{className:"confirm-btn",onClick:()=>s(e),disabled:!e,children:"✨ Continue"})]})})}const m1=[{id:"cognitive",icon:"🧠",label:"Cognitive",color:"#7c5cbf",desc:"Memory, patterns, problem solving"},{id:"fine-motor",icon:"✋",label:"Fine Motor",color:"#e8734a",desc:"Precise hand movements & control"},{id:"gross-motor",icon:"🏃",label:"Gross Motor",color:"#4aa8e8",desc:"Larger body movements & balance"},{id:"social-emotional",icon:"💛",label:"Social Emotion",color:"#e84a88",desc:"Feelings, sharing & teamwork"}];function g1({onConfirm:s}){return Se.jsx("div",{className:"selection-screen",children:Se.jsxs("div",{className:"selection-card",children:[Se.jsx("h1",{children:"🌟 Choose Your Skill"}),Se.jsx("p",{children:"What would you like to practice today?"}),Se.jsx("div",{className:"skill-grid",children:m1.map(e=>Se.jsxs("button",{className:"skill-card",style:{"--skill-color":e.color},onClick:()=>s(e.id),"aria-label":`${e.label}: ${e.desc}`,children:[Se.jsx("span",{className:"skill-card-icon",children:e.icon}),Se.jsx("span",{className:"skill-card-label",children:e.label}),Se.jsx("span",{className:"skill-card-desc",children:e.desc})]},e.id))})]})})}function v1({items:s,onPlace:e}){return Se.jsxs("div",{className:"island-sidebar",role:"navigation","aria-label":"Island items",children:[Se.jsx("div",{className:"sidebar-title",children:"🏝️ Island"}),s.map((t,r)=>Se.jsxs("button",{className:`sidebar-item ${t.unlocked?"unlocked":"locked"}`,onClick:()=>e(t),disabled:!t.unlocked,"aria-label":`${t.unlocked?"Place":"Locked"}: ${t.name}${t.cost?` (${t.cost} coins)`:""}`,title:t.unlocked?`Place ${t.name}`:`Unlock at ${t.cost} 🪙`,children:[Se.jsx("span",{className:"sidebar-item-icon",children:t.icon}),!t.unlocked&&Se.jsxs("span",{className:"sidebar-lock",children:["🔒 ",t.cost]})]},r))]})}const _1=[{id:"grow",emoji:"🌱",title:"Grow the Garden",description:"Nurture seeds into beautiful trees and flowers!",reward:{coins:20,xp:15},skill:"cognitive"},{id:"wake",emoji:"🐰",title:"Wake the Animal",description:"Gently wake sleeping forest friends!",reward:{coins:18,xp:12},skill:"social-emotional"},{id:"catch",emoji:"✨",title:"Catch the Light",description:"Collect glowing orbs drifting through the sky!",reward:{coins:22,xp:18},skill:"fine-motor"},{id:"sun",emoji:"🌅",title:"Move the Sun",description:"Change the sky from day to night and back!",reward:{coins:15,xp:10},skill:"gross-motor"},{id:"color",emoji:"🎨",title:"Color the World",description:"Paint the flowers and trees with magical colors!",reward:{coins:25,xp:20},skill:"cognitive"},{id:"music",emoji:"🎵",title:"Forest Melody",description:"Tap the mushrooms to play a gentle song!",reward:{coins:20,xp:15},skill:"fine-motor"}];function x1({onSelectGame:s,onBack:e,selectedSkill:t}){const[r,a]=Q.useState(null),l=c=>{if(!t)return!0;const f=t.toLowerCase();return c.skill.includes(f)||f.includes("cognitive")&&c.skill==="cognitive"||f.includes("motor")&&c.skill.includes("motor")||f.includes("social")&&c.skill==="social-emotional"};return Se.jsx("div",{className:"game-selector-screen",children:Se.jsxs("div",{className:"game-selector-card",children:[Se.jsx("button",{className:"back-btn",onClick:e,"aria-label":"Go back",children:"← Back"}),Se.jsx("h1",{children:"🎮 Choose a Mini-Game"}),Se.jsx("p",{children:"Pick a game to play and earn coins & XP!"}),Se.jsx("div",{className:"game-grid",children:_1.map(c=>Se.jsxs("button",{className:`game-tile ${l(c)?"relevant":"dim"} ${r===c.id?"hovered":""}`,onClick:()=>s(c),onMouseEnter:()=>a(c.id),onMouseLeave:()=>a(null),"aria-label":`${c.title}: ${c.description}. Rewards: ${c.reward.coins} coins, ${c.reward.xp} XP`,children:[Se.jsx("span",{className:"game-tile-emoji",children:c.emoji}),Se.jsx("span",{className:"game-tile-title",children:c.title}),Se.jsx("span",{className:"game-tile-desc",children:c.description}),Se.jsxs("span",{className:"game-tile-reward",children:["🪙 ",c.reward.coins,"   ⭐ ",c.reward.xp," XP"]})]},c.id))})]})})}const Ef=[{coins:0,add:"tree"},{coins:20,add:"flower"},{coins:40,add:"flower"},{coins:60,add:"tree"},{coins:80,add:"animal"},{coins:100,add:"tree"},{coins:120,add:"flower"},{coins:150,add:"house"},{coins:180,add:"tree"},{coins:200,add:"animal"},{coins:230,add:"flower"},{coins:260,add:"tree"},{coins:300,add:"house"},{coins:350,add:"tree"},{coins:400,add:"animal"},{coins:450,add:"flower"},{coins:500,add:"house"}],wf=["Meadow","Forest","Village","Castle","Fantasy Land"],Ol=80,y1=5;function S1({canvasRef:s,worldRef:e}){const{inputType:t}=J0();return Q.useEffect(()=>{if(!s.current||e.current)return;const r=new a1(s.current);return e.current=r,()=>{r.dispose(),e.current=null}},[t]),Se.jsx(hx,{})}function M1(){const s=_d(),e=Ci(),[t]=Xx(),r=Q.useRef(null),a=Q.useRef(null),l=Q.useRef(null),c=Q.useRef(0),f=Q.useRef(null),[h,p]=Q.useState(0),[g,_]=Q.useState(0),[x,S]=Q.useState(1),[M,E]=Q.useState(null),[y,v]=Q.useState(0),[L,b]=Q.useState(null),[C,W]=Q.useState(null),[F,U]=Q.useState(null),[V,P]=Q.useState([{name:"Grass Patch",icon:"🌿",unlocked:!0},{name:"Small Tree",icon:"🌱",unlocked:!0},{name:"Flower Bed",icon:"🌸",unlocked:!1,cost:30},{name:"Stone Path",icon:"🪨",unlocked:!1,cost:60},{name:"Little House",icon:"🏠",unlocked:!1,cost:100},{name:"Castle Tower",icon:"🏰",unlocked:!1,cost:200},{name:"Magic Bridge",icon:"🌉",unlocked:!1,cost:300},{name:"Dragon Friend",icon:"🐉",unlocked:!1,cost:500}]),A=Q.useCallback(z=>{var ee;b(z),(ee=l.current)==null||ee.say(z),setTimeout(()=>b(null),3e3)},[]),k=Q.useCallback(z=>{W(z),setTimeout(()=>W(null),2500)},[]),ie=Q.useCallback(z=>A(`${z.emoji} ${z.text}`),[A]),q=Q.useCallback(z=>{U(z),setTimeout(()=>U(null),1500)},[]),ue=Q.useCallback(z=>{p(ee=>ee+z)},[]),ce=Q.useRef({});ce.current={showSpeechBubble:A,handleTapDetected:q,handleCoinEarned:ue},Q.useEffect(()=>{let z=null,ee=!1;function ge(){ee||(z=new WebSocket("ws://localhost:8765"),z.onopen=()=>{console.log("[Tap] ✅ WebSocket connected to Python tap sensor")},z.onmessage=Re=>{var en,ct,lt,Ke,Et,Ye,D,T,Z;let Pe;try{Pe=JSON.parse(Re.data)}catch{return}console.log("[Tap] Received:",Pe.event);const Ce=ce.current;if(Pe.event==="LEFT_TAP"?((en=Ce.handleTapDetected)==null||en.call(Ce,"⬅️ LEFT TAP"),(ct=Ce.showSpeechBubble)==null||ct.call(Ce,"Left tap detected!")):Pe.event==="RIGHT_TAP"&&((lt=Ce.handleTapDetected)==null||lt.call(Ce,"➡️ RIGHT TAP"),(Ke=Ce.showSpeechBubble)==null||Ke.call(Ce,"Right tap detected!")),f.current){f.current();return}const _t=a.current;if(!_t)return;const at=(Math.random()-.5)*18,At=(Math.random()-.5)*18,X=Math.random();X<.45?(_t.growSeed(at,At),(Et=Ce.showSpeechBubble)==null||Et.call(Ce,"🌱 A new tree sprouts!")):X<.75?(_t.addFlower(at,At),(Ye=Ce.showSpeechBubble)==null||Ye.call(Ce,"🌸 A flower bloomed!")):X<.9?(_t.addAnimal(at,At),(D=Ce.showSpeechBubble)==null||D.call(Ce,"🐰 An animal appeared!")):(_t.addHouse(at,At),(T=Ce.showSpeechBubble)==null||T.call(Ce,"🏠 A little house appeared!")),(Z=Ce.handleCoinEarned)==null||Z.call(Ce,1)},z.onerror=()=>{console.warn("[Tap] WebSocket error — is main.py running?")},z.onclose=()=>{console.log("[Tap] Disconnected. Retrying in 3s…"),ee||setTimeout(ge,3e3)})}ge();const he=new u1;return l.current=he,()=>{if(ee=!0,z)try{z.close()}catch{}he.dispose()}},[]),Q.useEffect(()=>{const z=a.current;if(!z)return;let ee=c.current;for(let ge=ee;ge<Ef.length&&h>=Ef[ge].coins;ge++){const{add:he}=Ef[ge],Re=(Math.random()-.5)*18,Pe=(Math.random()-.5)*18;he==="tree"&&z.growSeed(Re,Pe),he==="flower"&&z.addFlower(Re,Pe),he==="animal"&&z.addAnimal(Re,Pe),he==="house"&&z.addHouse(Re,Pe),ee=ge+1}c.current=ee},[h]),Q.useEffect(()=>{g>=Ol*x&&x<y1&&(S(z=>z+1),k(`🎉 Level Up! Welcome to ${wf[Math.min(x,wf.length-1)]}!`))},[g,x]),Q.useEffect(()=>{P(z=>z.map(ee=>!ee.unlocked&&ee.cost&&h>=ee.cost?{...ee,unlocked:!0}:ee))},[h]);const oe=Q.useCallback(()=>{M&&v(z=>{const ee=Math.min(z+20+Math.floor(Math.random()*10),100);if(ee>=100){const{reward:ge}=M;p(he=>he+ge.coins),_(he=>he+ge.xp),k(`${M.emoji} Complete! +${ge.coins} 🪙  +${ge.xp} ⭐`),A(`Great job! You finished ${M.title}!`),setTimeout(()=>{E(null),v(0);const he=e.pathname.replace("/active","");s(`${he}?${t.toString()}`)},1500)}return ee})},[M,k,A,s,e.pathname,t]);Q.useEffect(()=>{f.current=M?oe:null},[M,oe]);const de=z=>{const ee=a.current;if(!ee||!z.unlocked)return;const ge=(Math.random()-.5)*14,he=(Math.random()-.5)*14;z.name.includes("Tree")||z.name.includes("Grass")?ee.growSeed(ge,he):z.name.includes("Flower")?ee.addFlower(ge,he):["House","Castle","Bridge"].some(Re=>z.name.includes(Re))?ee.addHouse(ge,he):z.name.includes("Dragon")?ee.addAnimal(ge,he):ee.addFlower(ge,he),A(`${z.icon} ${z.name} placed!`)},B=g-Ol*(x-1),fe=Math.min(B/Ol*100,100),le=e.pathname.split("/"),N=e.pathname.startsWith("/play/"),re=N?le[2]:null,Ne=t.get("skill")||"";return Se.jsxs(Se.Fragment,{children:[Se.jsx("canvas",{ref:r,id:"game-canvas"}),Se.jsxs("div",{className:"overlay",children:[N&&Se.jsxs(Se.Fragment,{children:[Se.jsxs("div",{className:"hud",children:[Se.jsxs("div",{className:"hud-badge coin-badge",children:["🪙 ",h]}),Se.jsxs("div",{className:"hud-badge level-badge",children:["⭐ Lv.",x," — ",wf[Math.min(x-1,4)]]}),Ne&&Se.jsxs("div",{className:"hud-badge skill-badge",children:["🧠 ",Ne]})]}),Se.jsxs("div",{className:"progress-bar-container",children:[Se.jsx("div",{className:"progress-bar-fill",style:{width:`${fe}%`}}),Se.jsxs("span",{className:"progress-bar-text",children:["XP: ",B,"/",Ol]})]})]}),F&&Se.jsx("div",{className:"tap-dialog",role:"alert",children:Se.jsx("span",{className:"tap-dialog-text",children:F})}),L&&Se.jsx("div",{className:"speech-bubble",role:"status","aria-live":"polite",children:L}),C&&Se.jsx("div",{className:"success-toast",role:"alert",children:C}),Se.jsxs(mx,{children:[Se.jsx(wr,{path:"/",element:Se.jsx(c1,{onStart:()=>s("/pick-input")})}),Se.jsx(wr,{path:"/pick-input",element:Se.jsx(p1,{onConfirm:z=>s(`/pick-skill/${z}`)})}),Se.jsx(wr,{path:"/pick-skill/:inputType",element:Se.jsx(g1,{onConfirm:z=>{const ee=e.pathname.split("/")[2]||"tap";s(`/play/${ee}?skill=${z}`)}})}),Se.jsxs(wr,{path:"/play/:inputType",element:Se.jsx(S1,{canvasRef:r,worldRef:a}),children:[Se.jsx(wr,{index:!0,element:Se.jsxs(Se.Fragment,{children:[Se.jsx(v1,{items:V,onPlace:de}),Se.jsxs("div",{className:"start-game-area",children:[Se.jsx("button",{className:"start-game-btn",onClick:()=>s(`/play/${re}/games?${t.toString()}`),children:"🎮 Start Game"}),Se.jsx("p",{className:"start-game-hint",children:"Tap your device or click to grow your island!"})]}),Se.jsx(d1,{onSend:ie})]})}),Se.jsx(wr,{path:"games",element:Se.jsx(x1,{selectedSkill:Ne,onSelectGame:z=>{E(z),v(0),s(`/play/${re}/active?${t.toString()}`)},onBack:()=>s(`/play/${re}?${t.toString()}`)})}),Se.jsx(wr,{path:"active",element:M&&Se.jsx("div",{className:"active-game-overlay",children:Se.jsxs("div",{className:"active-game-card",children:[Se.jsx("button",{className:"back-btn small",onClick:()=>s(`/play/${re}?${t.toString()}`),children:"← Back"}),Se.jsx("span",{className:"active-game-emoji",children:M.emoji}),Se.jsx("h2",{children:M.title}),Se.jsx("p",{children:M.description}),Se.jsx("div",{className:"game-progress-bar",children:Se.jsx("div",{className:"game-progress-fill",style:{width:`${y}%`}})}),Se.jsxs("span",{className:"game-progress-label",children:[y,"% complete"]}),y<100?Se.jsxs("button",{className:"game-action-btn",onClick:oe,children:[M.emoji," Tap / Look / Wave to Play!"]}):Se.jsx("div",{className:"game-complete-msg",children:"✅ Complete!"}),Se.jsxs("div",{className:"game-reward-preview",children:["Reward: 🪙 ",M.reward.coins,"   ⭐ ",M.reward.xp," XP"]})]})})})]})]})]})]})}p0.createRoot(document.getElementById("root")).render(Se.jsx(a0.StrictMode,{children:Se.jsx(zx,{children:Se.jsx(M1,{})})}));
