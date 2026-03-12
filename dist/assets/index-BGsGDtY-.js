(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Cg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Oc={exports:{}},zo={},kc={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function s0(){if(am)return gt;am=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function y(U,re,Ue){this.props=U,this.context=re,this.refs=M,this.updater=Ue||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,re){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,re,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function b(U,re,Ue){this.props=U,this.context=re,this.refs=M,this.updater=Ue||S}var L=b.prototype=new _;L.constructor=b,E(L,y.prototype),L.isPureReactComponent=!0;var C=Array.isArray,W=Object.prototype.hasOwnProperty,F={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function V(U,re,Ue){var J,he={},Te=null,xe=null;if(re!=null)for(J in re.ref!==void 0&&(xe=re.ref),re.key!==void 0&&(Te=""+re.key),re)W.call(re,J)&&!N.hasOwnProperty(J)&&(he[J]=re[J]);var fe=arguments.length-2;if(fe===1)he.children=Ue;else if(1<fe){for(var Me=Array(fe),Fe=0;Fe<fe;Fe++)Me[Fe]=arguments[Fe+2];he.children=Me}if(U&&U.defaultProps)for(J in fe=U.defaultProps,fe)he[J]===void 0&&(he[J]=fe[J]);return{$$typeof:s,type:U,key:Te,ref:xe,props:he,_owner:F.current}}function P(U,re){return{$$typeof:s,type:U.type,key:re,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function B(U){var re={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ue){return re[Ue]})}var ee=/\/+/g;function q(U,re){return typeof U=="object"&&U!==null&&U.key!=null?B(""+U.key):re.toString(36)}function le(U,re,Ue,J,he){var Te=typeof U;(Te==="undefined"||Te==="boolean")&&(U=null);var xe=!1;if(U===null)xe=!0;else switch(Te){case"string":case"number":xe=!0;break;case"object":switch(U.$$typeof){case s:case e:xe=!0}}if(xe)return xe=U,he=he(xe),U=J===""?"."+q(xe,0):J,C(he)?(Ue="",U!=null&&(Ue=U.replace(ee,"$&/")+"/"),le(he,re,Ue,"",function(Fe){return Fe})):he!=null&&(A(he)&&(he=P(he,Ue+(!he.key||xe&&xe.key===he.key?"":(""+he.key).replace(ee,"$&/")+"/")+U)),re.push(he)),1;if(xe=0,J=J===""?".":J+":",C(U))for(var fe=0;fe<U.length;fe++){Te=U[fe];var Me=J+q(Te,fe);xe+=le(Te,re,Ue,Me,he)}else if(Me=x(U),typeof Me=="function")for(U=Me.call(U),fe=0;!(Te=U.next()).done;)Te=Te.value,Me=J+q(Te,fe++),xe+=le(Te,re,Ue,Me,he);else if(Te==="object")throw re=String(U),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return xe}function ue(U,re,Ue){if(U==null)return U;var J=[],he=0;return le(U,J,"","",function(Te){return re.call(Ue,Te,he++)}),J}function ae(U){if(U._status===-1){var re=U._result;re=re(),re.then(function(Ue){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ue)},function(Ue){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ue)}),U._status===-1&&(U._status=0,U._result=re)}if(U._status===1)return U._result.default;throw U._result}var ce={current:null},z={transition:null},de={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:z,ReactCurrentOwner:F};function oe(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:ue,forEach:function(U,re,Ue){ue(U,function(){re.apply(this,arguments)},Ue)},count:function(U){var re=0;return ue(U,function(){re++}),re},toArray:function(U){return ue(U,function(re){return re})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},gt.Component=y,gt.Fragment=t,gt.Profiler=a,gt.PureComponent=b,gt.StrictMode=r,gt.Suspense=h,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,gt.act=oe,gt.cloneElement=function(U,re,Ue){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var J=E({},U.props),he=U.key,Te=U.ref,xe=U._owner;if(re!=null){if(re.ref!==void 0&&(Te=re.ref,xe=F.current),re.key!==void 0&&(he=""+re.key),U.type&&U.type.defaultProps)var fe=U.type.defaultProps;for(Me in re)W.call(re,Me)&&!N.hasOwnProperty(Me)&&(J[Me]=re[Me]===void 0&&fe!==void 0?fe[Me]:re[Me])}var Me=arguments.length-2;if(Me===1)J.children=Ue;else if(1<Me){fe=Array(Me);for(var Fe=0;Fe<Me;Fe++)fe[Fe]=arguments[Fe+2];J.children=fe}return{$$typeof:s,type:U.type,key:he,ref:Te,props:J,_owner:xe}},gt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},gt.createElement=V,gt.createFactory=function(U){var re=V.bind(null,U);return re.type=U,re},gt.createRef=function(){return{current:null}},gt.forwardRef=function(U){return{$$typeof:f,render:U}},gt.isValidElement=A,gt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:ae}},gt.memo=function(U,re){return{$$typeof:p,type:U,compare:re===void 0?null:re}},gt.startTransition=function(U){var re=z.transition;z.transition={};try{U()}finally{z.transition=re}},gt.unstable_act=oe,gt.useCallback=function(U,re){return ce.current.useCallback(U,re)},gt.useContext=function(U){return ce.current.useContext(U)},gt.useDebugValue=function(){},gt.useDeferredValue=function(U){return ce.current.useDeferredValue(U)},gt.useEffect=function(U,re){return ce.current.useEffect(U,re)},gt.useId=function(){return ce.current.useId()},gt.useImperativeHandle=function(U,re,Ue){return ce.current.useImperativeHandle(U,re,Ue)},gt.useInsertionEffect=function(U,re){return ce.current.useInsertionEffect(U,re)},gt.useLayoutEffect=function(U,re){return ce.current.useLayoutEffect(U,re)},gt.useMemo=function(U,re){return ce.current.useMemo(U,re)},gt.useReducer=function(U,re,Ue){return ce.current.useReducer(U,re,Ue)},gt.useRef=function(U){return ce.current.useRef(U)},gt.useState=function(U){return ce.current.useState(U)},gt.useSyncExternalStore=function(U,re,Ue){return ce.current.useSyncExternalStore(U,re,Ue)},gt.useTransition=function(){return ce.current.useTransition()},gt.version="18.3.1",gt}var lm;function gd(){return lm||(lm=1,kc.exports=s0()),kc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function o0(){if(um)return zo;um=1;var s=gd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var g,v={},x=null,S=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:f,key:x,ref:S,props:v,_owner:a.current}}return zo.Fragment=t,zo.jsx=c,zo.jsxs=c,zo}var cm;function a0(){return cm||(cm=1,Oc.exports=o0()),Oc.exports}var Se=a0(),Y=gd();const l0=Cg(Y);var dl={},Bc={exports:{}},bn={},zc={exports:{}},Hc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function u0(){return fm||(fm=1,(function(s){function e(z,de){var oe=z.length;z.push(de);e:for(;0<oe;){var U=oe-1>>>1,re=z[U];if(0<a(re,de))z[U]=de,z[oe]=re,oe=U;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var de=z[0],oe=z.pop();if(oe!==de){z[0]=oe;e:for(var U=0,re=z.length,Ue=re>>>1;U<Ue;){var J=2*(U+1)-1,he=z[J],Te=J+1,xe=z[Te];if(0>a(he,oe))Te<re&&0>a(xe,he)?(z[U]=xe,z[Te]=oe,U=Te):(z[U]=he,z[J]=oe,U=J);else if(Te<re&&0>a(xe,oe))z[U]=xe,z[Te]=oe,U=Te;else break e}}return de}function a(z,de){var oe=z.sortIndex-de.sortIndex;return oe!==0?oe:z.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,v=null,x=3,S=!1,E=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(z){for(var de=t(p);de!==null;){if(de.callback===null)r(p);else if(de.startTime<=z)r(p),de.sortIndex=de.expirationTime,e(h,de);else break;de=t(p)}}function C(z){if(M=!1,L(z),!E)if(t(h)!==null)E=!0,ae(W);else{var de=t(p);de!==null&&ce(C,de.startTime-z)}}function W(z,de){E=!1,M&&(M=!1,_(V),V=-1),S=!0;var oe=x;try{for(L(de),v=t(h);v!==null&&(!(v.expirationTime>de)||z&&!B());){var U=v.callback;if(typeof U=="function"){v.callback=null,x=v.priorityLevel;var re=U(v.expirationTime<=de);de=s.unstable_now(),typeof re=="function"?v.callback=re:v===t(h)&&r(h),L(de)}else r(h);v=t(h)}if(v!==null)var Ue=!0;else{var J=t(p);J!==null&&ce(C,J.startTime-de),Ue=!1}return Ue}finally{v=null,x=oe,S=!1}}var F=!1,N=null,V=-1,P=5,A=-1;function B(){return!(s.unstable_now()-A<P)}function ee(){if(N!==null){var z=s.unstable_now();A=z;var de=!0;try{de=N(!0,z)}finally{de?q():(F=!1,N=null)}}else F=!1}var q;if(typeof b=="function")q=function(){b(ee)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ue=le.port2;le.port1.onmessage=ee,q=function(){ue.postMessage(null)}}else q=function(){y(ee,0)};function ae(z){N=z,F||(F=!0,q())}function ce(z,de){V=y(function(){z(s.unstable_now())},de)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ae(W))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(z){switch(x){case 1:case 2:case 3:var de=3;break;default:de=x}var oe=x;x=de;try{return z()}finally{x=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,de){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var oe=x;x=z;try{return de()}finally{x=oe}},s.unstable_scheduleCallback=function(z,de,oe){var U=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?U+oe:U):oe=U,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=oe+re,z={id:g++,callback:de,priorityLevel:z,startTime:oe,expirationTime:re,sortIndex:-1},oe>U?(z.sortIndex=oe,e(p,z),t(h)===null&&z===t(p)&&(M?(_(V),V=-1):M=!0,ce(C,oe-U))):(z.sortIndex=re,e(h,z),E||S||(E=!0,ae(W))),z},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(z){var de=x;return function(){var oe=x;x=de;try{return z.apply(this,arguments)}finally{x=oe}}}})(Hc)),Hc}var dm;function c0(){return dm||(dm=1,zc.exports=u0()),zc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function f0(){if(hm)return bn;hm=1;var s=gd(),e=c0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function x(n){return h.call(v,n)?!0:h.call(g,n)?!1:p.test(n)?v[n]=!0:(g[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(n,i,o,u,d,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new M(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,b);y[i]=new M(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,b);y[i]=new M(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,b);y[i]=new M(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,u)&&(o=null),u||d===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),F=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),B=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),z=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,U;function re(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ue=!1;function J(n,i){if(!n||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var u=te}Reflect.construct(n,[],i)}else{try{i.call()}catch(te){u=te}n.call(i.prototype)}else{try{throw Error()}catch(te){u=te}n()}}catch(te){if(te&&u&&typeof te.stack=="string"){for(var d=te.stack.split(`
`),m=u.stack.split(`
`),w=d.length-1,I=m.length-1;1<=w&&0<=I&&d[w]!==m[I];)I--;for(;1<=w&&0<=I;w--,I--)if(d[w]!==m[I]){if(w!==1||I!==1)do if(w--,I--,0>I||d[w]!==m[I]){var k=`
`+d[w].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=w&&0<=I);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?re(n):""}function he(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function Te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case F:return"Portal";case P:return"Profiler";case V:return"StrictMode";case q:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case ee:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ue:return i=n.displayName||null,i!==null?i:Te(n.type)||"Memo";case ae:i=n._payload,n=n._init;try{return Te(n(i))}catch{}}return null}function xe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Me(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Fe(n){var i=Me(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){u=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function tt(n){n._valueTracker||(n._valueTracker=Fe(n))}function ot(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Me(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function et(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function O(n,i){var o=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function en(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=fe(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function at(n,i){ct(n,i);var o=fe(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?yt(n,i.type,o):i.hasOwnProperty("defaultValue")&&yt(n,i.type,fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ke(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function yt(n,i,o){(i!=="number"||et(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ye=Array.isArray;function D(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+fe(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ye(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:fe(o)}}function ge(n,i){var o=fe(i.value),u=fe(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var be,Oe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ft(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(n){Pe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),we[i]=we[n]})});function Ze(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||we.hasOwnProperty(n)&&we[n]?(""+i).trim():i+"px"}function nt(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Ze(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var ze=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mt(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function lt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Le=null,se=null,me=null;function Ne(n){if(n=To(n)){if(typeof Le!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ra(i),Le(n.stateNode,n.type,i))}}function Ie(n){se?me?me.push(n):me=[n]:se=n}function ut(){if(se){var n=se,i=me;if(me=se=null,Ne(n),i)for(n=0;n<i.length;n++)Ne(i[n])}}function Nt(n,i){return n(i)}function Yt(){}var St=!1;function En(n,i,o){if(St)return n(i,o);St=!0;try{return Nt(n,i,o)}finally{St=!1,(se!==null||me!==null)&&(Yt(),ut())}}function vn(n,i){var o=n.stateNode;if(o===null)return null;var u=Ra(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var as=!1;if(f)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){as=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{as=!1}function Pi(n,i,o,u,d,m,w,I,k){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(ye){this.onError(ye)}}var bi=!1,Dr=null,Ir=!1,Qi=null,aa={onError:function(n){bi=!0,Dr=n}};function ls(n,i,o,u,d,m,w,I,k){bi=!1,Dr=null,Pi.apply(aa,arguments)}function la(n,i,o,u,d,m,w,I,k){if(ls.apply(this,arguments),bi){if(bi){var te=Dr;bi=!1,Dr=null}else throw Error(t(198));Ir||(Ir=!0,Qi=te)}}function gi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ua(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ca(n){if(gi(n)!==n)throw Error(t(188))}function su(n){var i=n.alternate;if(!i){if(i=gi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return ca(d),n;if(m===u)return ca(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var w=!1,I=d.child;I;){if(I===o){w=!0,o=d,u=m;break}if(I===u){w=!0,u=d,o=m;break}I=I.sibling}if(!w){for(I=m.child;I;){if(I===o){w=!0,o=m,u=d;break}if(I===u){w=!0,u=m,o=d;break}I=I.sibling}if(!w)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function R(n){return n=su(n),n!==null?X(n):null}function X(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=X(n);if(i!==null)return i;n=n.sibling}return null}var ne=e.unstable_scheduleCallback,ie=e.unstable_cancelCallback,j=e.unstable_shouldYield,Ce=e.unstable_requestPaint,Ae=e.unstable_now,Xe=e.unstable_getCurrentPriorityLevel,Ge=e.unstable_ImmediatePriority,it=e.unstable_UserBlockingPriority,st=e.unstable_NormalPriority,je=e.unstable_LowPriority,xt=e.unstable_IdlePriority,Rt=null,_t=null;function un(n){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Tt,qe=Math.log,Jn=Math.LN2;function Tt(n){return n>>>=0,n===0?32:31-(qe(n)/Jn|0)|0}var cn=64,ei=4194304;function qt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vi(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,w=o&268435455;if(w!==0){var I=w&~d;I!==0?u=qt(I):(m&=w,m!==0&&(u=qt(m)))}else w=o&~d,w!==0?u=qt(w):m!==0&&(u=qt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-dt(i),d=1<<o,u|=n[o],i&=~d;return u}function Lt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gn(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-dt(m),I=1<<w,k=d[w];k===-1?((I&o)===0||(I&u)!==0)&&(d[w]=Lt(I,i)):k<=i&&(n.expiredLanes|=I),m&=~I}}function Li(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function _n(){var n=cn;return cn<<=1,(cn&4194240)===0&&(cn=64),n}function Wn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function wn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-dt(i),n[i]=o}function fa(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-dt(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function ou(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-dt(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var Pt=0;function Bd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var zd,au,Hd,Vd,Gd,lu=!1,da=[],Ji=null,er=null,tr=null,lo=new Map,uo=new Map,nr=[],Rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wd(n,i){switch(n){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":lo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(i.pointerId)}}function co(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=To(i),i!==null&&au(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Cv(n,i,o,u,d){switch(i){case"focusin":return Ji=co(Ji,n,i,o,u,d),!0;case"dragenter":return er=co(er,n,i,o,u,d),!0;case"mouseover":return tr=co(tr,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return lo.set(m,co(lo.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,uo.set(m,co(uo.get(m)||null,n,i,o,u,d)),!0}return!1}function Xd(n){var i=Nr(n.target);if(i!==null){var o=gi(i);if(o!==null){if(i=o.tag,i===13){if(i=ua(o),i!==null){n.blockedOn=i,Gd(n.priority,function(){Hd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ha(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=cu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Ct=u,o.target.dispatchEvent(u),Ct=null}else return i=To(o),i!==null&&au(i),n.blockedOn=o,!1;i.shift()}return!0}function jd(n,i,o){ha(n)&&o.delete(i)}function Pv(){lu=!1,Ji!==null&&ha(Ji)&&(Ji=null),er!==null&&ha(er)&&(er=null),tr!==null&&ha(tr)&&(tr=null),lo.forEach(jd),uo.forEach(jd)}function fo(n,i){n.blockedOn===i&&(n.blockedOn=null,lu||(lu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Pv)))}function ho(n){function i(d){return fo(d,n)}if(0<da.length){fo(da[0],n);for(var o=1;o<da.length;o++){var u=da[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Ji!==null&&fo(Ji,n),er!==null&&fo(er,n),tr!==null&&fo(tr,n),lo.forEach(i),uo.forEach(i),o=0;o<nr.length;o++)u=nr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<nr.length&&(o=nr[0],o.blockedOn===null);)Xd(o),o.blockedOn===null&&nr.shift()}var us=C.ReactCurrentBatchConfig,pa=!0;function bv(n,i,o,u){var d=Pt,m=us.transition;us.transition=null;try{Pt=1,uu(n,i,o,u)}finally{Pt=d,us.transition=m}}function Lv(n,i,o,u){var d=Pt,m=us.transition;us.transition=null;try{Pt=4,uu(n,i,o,u)}finally{Pt=d,us.transition=m}}function uu(n,i,o,u){if(pa){var d=cu(n,i,o,u);if(d===null)Ru(n,i,u,ma,o),Wd(n,u);else if(Cv(d,n,i,o,u))u.stopPropagation();else if(Wd(n,u),i&4&&-1<Rv.indexOf(n)){for(;d!==null;){var m=To(d);if(m!==null&&zd(m),m=cu(n,i,o,u),m===null&&Ru(n,i,u,ma,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else Ru(n,i,u,null,o)}}var ma=null;function cu(n,i,o,u){if(ma=null,n=G(u),n=Nr(n),n!==null)if(i=gi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ua(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ma=n,null}function $d(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Ge:return 1;case it:return 4;case st:case je:return 16;case xt:return 536870912;default:return 16}default:return 16}}var ir=null,fu=null,ga=null;function Yd(){if(ga)return ga;var n,i=fu,o=i.length,u,d="value"in ir?ir.value:ir.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var w=o-n;for(u=1;u<=w&&i[o-u]===d[m-u];u++);return ga=d.slice(n,1<u?1-u:void 0)}function va(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function _a(){return!0}function qd(){return!1}function Un(n){function i(o,u,d,m,w){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(o=n[I],this[I]=o?o(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?_a:qd,this.isPropagationStopped=qd,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),i}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},du=Un(cs),po=oe({},cs,{view:0,detail:0}),Dv=Un(po),hu,pu,mo,xa=oe({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==mo&&(mo&&n.type==="mousemove"?(hu=n.screenX-mo.screenX,pu=n.screenY-mo.screenY):pu=hu=0,mo=n),hu)},movementY:function(n){return"movementY"in n?n.movementY:pu}}),Kd=Un(xa),Iv=oe({},xa,{dataTransfer:0}),Nv=Un(Iv),Uv=oe({},po,{relatedTarget:0}),mu=Un(Uv),Fv=oe({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ov=Un(Fv),kv=oe({},cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Bv=Un(kv),zv=oe({},cs,{data:0}),Zd=Un(zv),Hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Gv[n])?!!i[n]:!1}function gu(){return Wv}var Xv=oe({},po,{key:function(n){if(n.key){var i=Hv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=va(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Vv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(n){return n.type==="keypress"?va(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?va(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),jv=Un(Xv),$v=oe({},xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=Un($v),Yv=oe({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),qv=Un(Yv),Kv=oe({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zv=Un(Kv),Qv=oe({},xa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Jv=Un(Qv),e_=[9,13,27,32],vu=f&&"CompositionEvent"in window,go=null;f&&"documentMode"in document&&(go=document.documentMode);var t_=f&&"TextEvent"in window&&!go,Jd=f&&(!vu||go&&8<go&&11>=go),eh=" ",th=!1;function nh(n,i){switch(n){case"keyup":return e_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ih(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fs=!1;function n_(n,i){switch(n){case"compositionend":return ih(i);case"keypress":return i.which!==32?null:(th=!0,eh);case"textInput":return n=i.data,n===eh&&th?null:n;default:return null}}function i_(n,i){if(fs)return n==="compositionend"||!vu&&nh(n,i)?(n=Yd(),ga=fu=ir=null,fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Jd&&i.locale!=="ko"?null:i.data;default:return null}}var r_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!r_[n.type]:i==="textarea"}function sh(n,i,o,u){Ie(u),i=wa(i,"onChange"),0<i.length&&(o=new du("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var vo=null,_o=null;function s_(n){Eh(n,0)}function ya(n){var i=gs(n);if(ot(i))return n}function o_(n,i){if(n==="change")return i}var oh=!1;if(f){var _u;if(f){var xu="oninput"in document;if(!xu){var ah=document.createElement("div");ah.setAttribute("oninput","return;"),xu=typeof ah.oninput=="function"}_u=xu}else _u=!1;oh=_u&&(!document.documentMode||9<document.documentMode)}function lh(){vo&&(vo.detachEvent("onpropertychange",uh),_o=vo=null)}function uh(n){if(n.propertyName==="value"&&ya(_o)){var i=[];sh(i,_o,n,G(n)),En(s_,i)}}function a_(n,i,o){n==="focusin"?(lh(),vo=i,_o=o,vo.attachEvent("onpropertychange",uh)):n==="focusout"&&lh()}function l_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ya(_o)}function u_(n,i){if(n==="click")return ya(i)}function c_(n,i){if(n==="input"||n==="change")return ya(i)}function f_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ti=typeof Object.is=="function"?Object.is:f_;function xo(n,i){if(ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!ti(n[d],i[d]))return!1}return!0}function ch(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function fh(n,i){var o=ch(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ch(o)}}function dh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?dh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function hh(){for(var n=window,i=et();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=et(n.document)}return i}function yu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function d_(n){var i=hh(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&dh(o.ownerDocument.documentElement,o)){if(u!==null&&yu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=fh(o,m);var w=fh(o,u);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var h_=f&&"documentMode"in document&&11>=document.documentMode,ds=null,Su=null,yo=null,Mu=!1;function ph(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Mu||ds==null||ds!==et(u)||(u=ds,"selectionStart"in u&&yu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),yo&&xo(yo,u)||(yo=u,u=wa(Su,"onSelect"),0<u.length&&(i=new du("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=ds)))}function Sa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var hs={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Eu={},mh={};f&&(mh=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Ma(n){if(Eu[n])return Eu[n];if(!hs[n])return n;var i=hs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in mh)return Eu[n]=i[o];return n}var gh=Ma("animationend"),vh=Ma("animationiteration"),_h=Ma("animationstart"),xh=Ma("transitionend"),yh=new Map,Sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(n,i){yh.set(n,i),l(i,[n])}for(var wu=0;wu<Sh.length;wu++){var Tu=Sh[wu],p_=Tu.toLowerCase(),m_=Tu[0].toUpperCase()+Tu.slice(1);rr(p_,"on"+m_)}rr(gh,"onAnimationEnd"),rr(vh,"onAnimationIteration"),rr(_h,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(xh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g_=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function Mh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,la(u,i,void 0,n),n.currentTarget=null}function Eh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var w=u.length-1;0<=w;w--){var I=u[w],k=I.instance,te=I.currentTarget;if(I=I.listener,k!==m&&d.isPropagationStopped())break e;Mh(d,I,te),m=k}else for(w=0;w<u.length;w++){if(I=u[w],k=I.instance,te=I.currentTarget,I=I.listener,k!==m&&d.isPropagationStopped())break e;Mh(d,I,te),m=k}}}if(Ir)throw n=Qi,Ir=!1,Qi=null,n}function Ut(n,i){var o=i[Iu];o===void 0&&(o=i[Iu]=new Set);var u=n+"__bubble";o.has(u)||(wh(i,n,2,!1),o.add(u))}function Au(n,i,o){var u=0;i&&(u|=4),wh(o,n,u,i)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function Mo(n){if(!n[Ea]){n[Ea]=!0,r.forEach(function(o){o!=="selectionchange"&&(g_.has(o)||Au(o,!1,n),Au(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ea]||(i[Ea]=!0,Au("selectionchange",!1,i))}}function wh(n,i,o,u){switch($d(i)){case 1:var d=bv;break;case 4:d=Lv;break;default:d=uu}o=d.bind(null,i,o,n),d=void 0,!as||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Ru(n,i,o,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var I=u.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(w===4)for(w=u.return;w!==null;){var k=w.tag;if((k===3||k===4)&&(k=w.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;w=w.return}for(;I!==null;){if(w=Nr(I),w===null)return;if(k=w.tag,k===5||k===6){u=m=w;continue e}I=I.parentNode}}u=u.return}En(function(){var te=m,ye=G(o),Ee=[];e:{var _e=yh.get(n);if(_e!==void 0){var ke=du,He=n;switch(n){case"keypress":if(va(o)===0)break e;case"keydown":case"keyup":ke=jv;break;case"focusin":He="focus",ke=mu;break;case"focusout":He="blur",ke=mu;break;case"beforeblur":case"afterblur":ke=mu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=Nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=qv;break;case gh:case vh:case _h:ke=Ov;break;case xh:ke=Zv;break;case"scroll":ke=Dv;break;case"wheel":ke=Jv;break;case"copy":case"cut":case"paste":ke=Bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Qd}var We=(i&4)!==0,Xt=!We&&n==="scroll",$=We?_e!==null?_e+"Capture":null:_e;We=[];for(var H=te,K;H!==null;){K=H;var Re=K.stateNode;if(K.tag===5&&Re!==null&&(K=Re,$!==null&&(Re=vn(H,$),Re!=null&&We.push(Eo(H,Re,K)))),Xt)break;H=H.return}0<We.length&&(_e=new ke(_e,He,null,o,ye),Ee.push({event:_e,listeners:We}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",ke=n==="mouseout"||n==="pointerout",_e&&o!==Ct&&(He=o.relatedTarget||o.fromElement)&&(Nr(He)||He[Di]))break e;if((ke||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,ke?(He=o.relatedTarget||o.toElement,ke=te,He=He?Nr(He):null,He!==null&&(Xt=gi(He),He!==Xt||He.tag!==5&&He.tag!==6)&&(He=null)):(ke=null,He=te),ke!==He)){if(We=Kd,Re="onMouseLeave",$="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(We=Qd,Re="onPointerLeave",$="onPointerEnter",H="pointer"),Xt=ke==null?_e:gs(ke),K=He==null?_e:gs(He),_e=new We(Re,H+"leave",ke,o,ye),_e.target=Xt,_e.relatedTarget=K,Re=null,Nr(ye)===te&&(We=new We($,H+"enter",He,o,ye),We.target=K,We.relatedTarget=Xt,Re=We),Xt=Re,ke&&He)t:{for(We=ke,$=He,H=0,K=We;K;K=ps(K))H++;for(K=0,Re=$;Re;Re=ps(Re))K++;for(;0<H-K;)We=ps(We),H--;for(;0<K-H;)$=ps($),K--;for(;H--;){if(We===$||$!==null&&We===$.alternate)break t;We=ps(We),$=ps($)}We=null}else We=null;ke!==null&&Th(Ee,_e,ke,We,!1),He!==null&&Xt!==null&&Th(Ee,Xt,He,We,!0)}}e:{if(_e=te?gs(te):window,ke=_e.nodeName&&_e.nodeName.toLowerCase(),ke==="select"||ke==="input"&&_e.type==="file")var $e=o_;else if(rh(_e))if(oh)$e=c_;else{$e=l_;var Qe=a_}else(ke=_e.nodeName)&&ke.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&($e=u_);if($e&&($e=$e(n,te))){sh(Ee,$e,o,ye);break e}Qe&&Qe(n,_e,te),n==="focusout"&&(Qe=_e._wrapperState)&&Qe.controlled&&_e.type==="number"&&yt(_e,"number",_e.value)}switch(Qe=te?gs(te):window,n){case"focusin":(rh(Qe)||Qe.contentEditable==="true")&&(ds=Qe,Su=te,yo=null);break;case"focusout":yo=Su=ds=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,ph(Ee,o,ye);break;case"selectionchange":if(h_)break;case"keydown":case"keyup":ph(Ee,o,ye)}var Je;if(vu)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else fs?nh(n,o)&&(rt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(rt="onCompositionStart");rt&&(Jd&&o.locale!=="ko"&&(fs||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&fs&&(Je=Yd()):(ir=ye,fu="value"in ir?ir.value:ir.textContent,fs=!0)),Qe=wa(te,rt),0<Qe.length&&(rt=new Zd(rt,n,null,o,ye),Ee.push({event:rt,listeners:Qe}),Je?rt.data=Je:(Je=ih(o),Je!==null&&(rt.data=Je)))),(Je=t_?n_(n,o):i_(n,o))&&(te=wa(te,"onBeforeInput"),0<te.length&&(ye=new Zd("onBeforeInput","beforeinput",null,o,ye),Ee.push({event:ye,listeners:te}),ye.data=Je))}Eh(Ee,i)})}function Eo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function wa(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=vn(n,o),m!=null&&u.unshift(Eo(n,m,d)),m=vn(n,i),m!=null&&u.push(Eo(n,m,d))),n=n.return}return u}function ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Th(n,i,o,u,d){for(var m=i._reactName,w=[];o!==null&&o!==u;){var I=o,k=I.alternate,te=I.stateNode;if(k!==null&&k===u)break;I.tag===5&&te!==null&&(I=te,d?(k=vn(o,m),k!=null&&w.unshift(Eo(o,k,I))):d||(k=vn(o,m),k!=null&&w.push(Eo(o,k,I)))),o=o.return}w.length!==0&&n.push({event:i,listeners:w})}var v_=/\r\n?/g,__=/\u0000|\uFFFD/g;function Ah(n){return(typeof n=="string"?n:""+n).replace(v_,`
`).replace(__,"")}function Ta(n,i,o){if(i=Ah(i),Ah(n)!==i&&o)throw Error(t(425))}function Aa(){}var Cu=null,Pu=null;function bu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Lu=typeof setTimeout=="function"?setTimeout:void 0,x_=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,y_=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(n){return Rh.resolve(null).then(n).catch(S_)}:Lu;function S_(n){setTimeout(function(){throw n})}function Du(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),ho(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);ho(i)}function sr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ch(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ms=Math.random().toString(36).slice(2),_i="__reactFiber$"+ms,wo="__reactProps$"+ms,Di="__reactContainer$"+ms,Iu="__reactEvents$"+ms,M_="__reactListeners$"+ms,E_="__reactHandles$"+ms;function Nr(n){var i=n[_i];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Di]||o[_i]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Ch(n);n!==null;){if(o=n[_i])return o;n=Ch(n)}return i}n=o,o=n.parentNode}return null}function To(n){return n=n[_i]||n[Di],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ra(n){return n[wo]||null}var Nu=[],vs=-1;function or(n){return{current:n}}function Ft(n){0>vs||(n.current=Nu[vs],Nu[vs]=null,vs--)}function Dt(n,i){vs++,Nu[vs]=n.current,n.current=i}var ar={},fn=or(ar),Tn=or(!1),Ur=ar;function _s(n,i){var o=n.type.contextTypes;if(!o)return ar;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function An(n){return n=n.childContextTypes,n!=null}function Ca(){Ft(Tn),Ft(fn)}function Ph(n,i,o){if(fn.current!==ar)throw Error(t(168));Dt(fn,i),Dt(Tn,o)}function bh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,xe(n)||"Unknown",d));return oe({},o,u)}function Pa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ar,Ur=fn.current,Dt(fn,n),Dt(Tn,Tn.current),!0}function Lh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=bh(n,i,Ur),u.__reactInternalMemoizedMergedChildContext=n,Ft(Tn),Ft(fn),Dt(fn,n)):Ft(Tn),Dt(Tn,o)}var Ii=null,ba=!1,Uu=!1;function Dh(n){Ii===null?Ii=[n]:Ii.push(n)}function w_(n){ba=!0,Dh(n)}function lr(){if(!Uu&&Ii!==null){Uu=!0;var n=0,i=Pt;try{var o=Ii;for(Pt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ii=null,ba=!1}catch(d){throw Ii!==null&&(Ii=Ii.slice(n+1)),ne(Ge,lr),d}finally{Pt=i,Uu=!1}}return null}var xs=[],ys=0,La=null,Da=0,Xn=[],jn=0,Fr=null,Ni=1,Ui="";function Or(n,i){xs[ys++]=Da,xs[ys++]=La,La=n,Da=i}function Ih(n,i,o){Xn[jn++]=Ni,Xn[jn++]=Ui,Xn[jn++]=Fr,Fr=n;var u=Ni;n=Ui;var d=32-dt(u)-1;u&=~(1<<d),o+=1;var m=32-dt(i)+d;if(30<m){var w=d-d%5;m=(u&(1<<w)-1).toString(32),u>>=w,d-=w,Ni=1<<32-dt(i)+d|o<<d|u,Ui=m+n}else Ni=1<<m|o<<d|u,Ui=n}function Fu(n){n.return!==null&&(Or(n,1),Ih(n,1,0))}function Ou(n){for(;n===La;)La=xs[--ys],xs[ys]=null,Da=xs[--ys],xs[ys]=null;for(;n===Fr;)Fr=Xn[--jn],Xn[jn]=null,Ui=Xn[--jn],Xn[jn]=null,Ni=Xn[--jn],Xn[jn]=null}var Fn=null,On=null,Ot=!1,ni=null;function Nh(n,i){var o=Kn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Uh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Fn=n,On=sr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Fn=n,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Fr!==null?{id:Ni,overflow:Ui}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Kn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Fn=n,On=null,!0):!1;default:return!1}}function ku(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Bu(n){if(Ot){var i=On;if(i){var o=i;if(!Uh(n,i)){if(ku(n))throw Error(t(418));i=sr(o.nextSibling);var u=Fn;i&&Uh(n,i)?Nh(u,o):(n.flags=n.flags&-4097|2,Ot=!1,Fn=n)}}else{if(ku(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ot=!1,Fn=n}}}function Fh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Fn=n}function Ia(n){if(n!==Fn)return!1;if(!Ot)return Fh(n),Ot=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!bu(n.type,n.memoizedProps)),i&&(i=On)){if(ku(n))throw Oh(),Error(t(418));for(;i;)Nh(n,i),i=sr(i.nextSibling)}if(Fh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){On=sr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}On=null}}else On=Fn?sr(n.stateNode.nextSibling):null;return!0}function Oh(){for(var n=On;n;)n=sr(n.nextSibling)}function Ss(){On=Fn=null,Ot=!1}function zu(n){ni===null?ni=[n]:ni.push(n)}var T_=C.ReactCurrentBatchConfig;function Ao(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var I=d.refs;w===null?delete I[m]:I[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Na(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function kh(n){var i=n._init;return i(n._payload)}function Bh(n){function i($,H){if(n){var K=$.deletions;K===null?($.deletions=[H],$.flags|=16):K.push(H)}}function o($,H){if(!n)return null;for(;H!==null;)i($,H),H=H.sibling;return null}function u($,H){for($=new Map;H!==null;)H.key!==null?$.set(H.key,H):$.set(H.index,H),H=H.sibling;return $}function d($,H){return $=gr($,H),$.index=0,$.sibling=null,$}function m($,H,K){return $.index=K,n?(K=$.alternate,K!==null?(K=K.index,K<H?($.flags|=2,H):K):($.flags|=2,H)):($.flags|=1048576,H)}function w($){return n&&$.alternate===null&&($.flags|=2),$}function I($,H,K,Re){return H===null||H.tag!==6?(H=Lc(K,$.mode,Re),H.return=$,H):(H=d(H,K),H.return=$,H)}function k($,H,K,Re){var $e=K.type;return $e===N?ye($,H,K.props.children,Re,K.key):H!==null&&(H.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ae&&kh($e)===H.type)?(Re=d(H,K.props),Re.ref=Ao($,H,K),Re.return=$,Re):(Re=rl(K.type,K.key,K.props,null,$.mode,Re),Re.ref=Ao($,H,K),Re.return=$,Re)}function te($,H,K,Re){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=Dc(K,$.mode,Re),H.return=$,H):(H=d(H,K.children||[]),H.return=$,H)}function ye($,H,K,Re,$e){return H===null||H.tag!==7?(H=Xr(K,$.mode,Re,$e),H.return=$,H):(H=d(H,K),H.return=$,H)}function Ee($,H,K){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Lc(""+H,$.mode,K),H.return=$,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case W:return K=rl(H.type,H.key,H.props,null,$.mode,K),K.ref=Ao($,null,H),K.return=$,K;case F:return H=Dc(H,$.mode,K),H.return=$,H;case ae:var Re=H._init;return Ee($,Re(H._payload),K)}if(Ye(H)||de(H))return H=Xr(H,$.mode,K,null),H.return=$,H;Na($,H)}return null}function _e($,H,K,Re){var $e=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return $e!==null?null:I($,H,""+K,Re);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case W:return K.key===$e?k($,H,K,Re):null;case F:return K.key===$e?te($,H,K,Re):null;case ae:return $e=K._init,_e($,H,$e(K._payload),Re)}if(Ye(K)||de(K))return $e!==null?null:ye($,H,K,Re,null);Na($,K)}return null}function ke($,H,K,Re,$e){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return $=$.get(K)||null,I(H,$,""+Re,$e);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case W:return $=$.get(Re.key===null?K:Re.key)||null,k(H,$,Re,$e);case F:return $=$.get(Re.key===null?K:Re.key)||null,te(H,$,Re,$e);case ae:var Qe=Re._init;return ke($,H,K,Qe(Re._payload),$e)}if(Ye(Re)||de(Re))return $=$.get(K)||null,ye(H,$,Re,$e,null);Na(H,Re)}return null}function He($,H,K,Re){for(var $e=null,Qe=null,Je=H,rt=H=0,rn=null;Je!==null&&rt<K.length;rt++){Je.index>rt?(rn=Je,Je=null):rn=Je.sibling;var At=_e($,Je,K[rt],Re);if(At===null){Je===null&&(Je=rn);break}n&&Je&&At.alternate===null&&i($,Je),H=m(At,H,rt),Qe===null?$e=At:Qe.sibling=At,Qe=At,Je=rn}if(rt===K.length)return o($,Je),Ot&&Or($,rt),$e;if(Je===null){for(;rt<K.length;rt++)Je=Ee($,K[rt],Re),Je!==null&&(H=m(Je,H,rt),Qe===null?$e=Je:Qe.sibling=Je,Qe=Je);return Ot&&Or($,rt),$e}for(Je=u($,Je);rt<K.length;rt++)rn=ke(Je,$,rt,K[rt],Re),rn!==null&&(n&&rn.alternate!==null&&Je.delete(rn.key===null?rt:rn.key),H=m(rn,H,rt),Qe===null?$e=rn:Qe.sibling=rn,Qe=rn);return n&&Je.forEach(function(vr){return i($,vr)}),Ot&&Or($,rt),$e}function We($,H,K,Re){var $e=de(K);if(typeof $e!="function")throw Error(t(150));if(K=$e.call(K),K==null)throw Error(t(151));for(var Qe=$e=null,Je=H,rt=H=0,rn=null,At=K.next();Je!==null&&!At.done;rt++,At=K.next()){Je.index>rt?(rn=Je,Je=null):rn=Je.sibling;var vr=_e($,Je,At.value,Re);if(vr===null){Je===null&&(Je=rn);break}n&&Je&&vr.alternate===null&&i($,Je),H=m(vr,H,rt),Qe===null?$e=vr:Qe.sibling=vr,Qe=vr,Je=rn}if(At.done)return o($,Je),Ot&&Or($,rt),$e;if(Je===null){for(;!At.done;rt++,At=K.next())At=Ee($,At.value,Re),At!==null&&(H=m(At,H,rt),Qe===null?$e=At:Qe.sibling=At,Qe=At);return Ot&&Or($,rt),$e}for(Je=u($,Je);!At.done;rt++,At=K.next())At=ke(Je,$,rt,At.value,Re),At!==null&&(n&&At.alternate!==null&&Je.delete(At.key===null?rt:At.key),H=m(At,H,rt),Qe===null?$e=At:Qe.sibling=At,Qe=At);return n&&Je.forEach(function(r0){return i($,r0)}),Ot&&Or($,rt),$e}function Xt($,H,K,Re){if(typeof K=="object"&&K!==null&&K.type===N&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case W:e:{for(var $e=K.key,Qe=H;Qe!==null;){if(Qe.key===$e){if($e=K.type,$e===N){if(Qe.tag===7){o($,Qe.sibling),H=d(Qe,K.props.children),H.return=$,$=H;break e}}else if(Qe.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ae&&kh($e)===Qe.type){o($,Qe.sibling),H=d(Qe,K.props),H.ref=Ao($,Qe,K),H.return=$,$=H;break e}o($,Qe);break}else i($,Qe);Qe=Qe.sibling}K.type===N?(H=Xr(K.props.children,$.mode,Re,K.key),H.return=$,$=H):(Re=rl(K.type,K.key,K.props,null,$.mode,Re),Re.ref=Ao($,H,K),Re.return=$,$=Re)}return w($);case F:e:{for(Qe=K.key;H!==null;){if(H.key===Qe)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){o($,H.sibling),H=d(H,K.children||[]),H.return=$,$=H;break e}else{o($,H);break}else i($,H);H=H.sibling}H=Dc(K,$.mode,Re),H.return=$,$=H}return w($);case ae:return Qe=K._init,Xt($,H,Qe(K._payload),Re)}if(Ye(K))return He($,H,K,Re);if(de(K))return We($,H,K,Re);Na($,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,H!==null&&H.tag===6?(o($,H.sibling),H=d(H,K),H.return=$,$=H):(o($,H),H=Lc(K,$.mode,Re),H.return=$,$=H),w($)):o($,H)}return Xt}var Ms=Bh(!0),zh=Bh(!1),Ua=or(null),Fa=null,Es=null,Hu=null;function Vu(){Hu=Es=Fa=null}function Gu(n){var i=Ua.current;Ft(Ua),n._currentValue=i}function Wu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function ws(n,i){Fa=n,Hu=Es=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Rn=!0),n.firstContext=null)}function $n(n){var i=n._currentValue;if(Hu!==n)if(n={context:n,memoizedValue:i,next:null},Es===null){if(Fa===null)throw Error(t(308));Es=n,Fa.dependencies={lanes:0,firstContext:n}}else Es=Es.next=n;return i}var kr=null;function Xu(n){kr===null?kr=[n]:kr.push(n)}function Hh(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Xu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Fi(n,u)}function Fi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ur=!1;function ju(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Oi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function cr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Mt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Fi(n,o)}return d=u.interleaved,d===null?(i.next=i,Xu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Fi(n,o)}function Oa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,ou(n,o)}}function Gh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=w:m=m.next=w,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function ka(n,i,o,u){var d=n.updateQueue;ur=!1;var m=d.firstBaseUpdate,w=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var k=I,te=k.next;k.next=null,w===null?m=te:w.next=te,w=k;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,I=ye.lastBaseUpdate,I!==w&&(I===null?ye.firstBaseUpdate=te:I.next=te,ye.lastBaseUpdate=k))}if(m!==null){var Ee=d.baseState;w=0,ye=te=k=null,I=m;do{var _e=I.lane,ke=I.eventTime;if((u&_e)===_e){ye!==null&&(ye=ye.next={eventTime:ke,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var He=n,We=I;switch(_e=i,ke=o,We.tag){case 1:if(He=We.payload,typeof He=="function"){Ee=He.call(ke,Ee,_e);break e}Ee=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=We.payload,_e=typeof He=="function"?He.call(ke,Ee,_e):He,_e==null)break e;Ee=oe({},Ee,_e);break e;case 2:ur=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,_e=d.effects,_e===null?d.effects=[I]:_e.push(I))}else ke={eventTime:ke,lane:_e,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ye===null?(te=ye=ke,k=Ee):ye=ye.next=ke,w|=_e;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;_e=I,I=_e.next,_e.next=null,d.lastBaseUpdate=_e,d.shared.pending=null}}while(!0);if(ye===null&&(k=Ee),d.baseState=k,d.firstBaseUpdate=te,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Hr|=w,n.lanes=w,n.memoizedState=Ee}}function Wh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Ro={},xi=or(Ro),Co=or(Ro),Po=or(Ro);function Br(n){if(n===Ro)throw Error(t(174));return n}function $u(n,i){switch(Dt(Po,i),Dt(Co,n),Dt(xi,Ro),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ve(i,n)}Ft(xi),Dt(xi,i)}function Ts(){Ft(xi),Ft(Co),Ft(Po)}function Xh(n){Br(Po.current);var i=Br(xi.current),o=Ve(i,n.type);i!==o&&(Dt(Co,n),Dt(xi,o))}function Yu(n){Co.current===n&&(Ft(xi),Ft(Co))}var kt=or(0);function Ba(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var qu=[];function Ku(){for(var n=0;n<qu.length;n++)qu[n]._workInProgressVersionPrimary=null;qu.length=0}var za=C.ReactCurrentDispatcher,Zu=C.ReactCurrentBatchConfig,zr=0,Bt=null,Kt=null,tn=null,Ha=!1,bo=!1,Lo=0,A_=0;function dn(){throw Error(t(321))}function Qu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ti(n[o],i[o]))return!1;return!0}function Ju(n,i,o,u,d,m){if(zr=m,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,za.current=n===null||n.memoizedState===null?b_:L_,n=o(u,d),bo){m=0;do{if(bo=!1,Lo=0,25<=m)throw Error(t(301));m+=1,tn=Kt=null,i.updateQueue=null,za.current=D_,n=o(u,d)}while(bo)}if(za.current=Wa,i=Kt!==null&&Kt.next!==null,zr=0,tn=Kt=Bt=null,Ha=!1,i)throw Error(t(300));return n}function ec(){var n=Lo!==0;return Lo=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Bt.memoizedState=tn=n:tn=tn.next=n,tn}function Yn(){if(Kt===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=Kt.next;var i=tn===null?Bt.memoizedState:tn.next;if(i!==null)tn=i,Kt=n;else{if(n===null)throw Error(t(310));Kt=n,n={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},tn===null?Bt.memoizedState=tn=n:tn=tn.next=n}return tn}function Do(n,i){return typeof i=="function"?i(n):i}function tc(n){var i=Yn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Kt,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var w=d.next;d.next=m.next,m.next=w}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var I=w=null,k=null,te=m;do{var ye=te.lane;if((zr&ye)===ye)k!==null&&(k=k.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),u=te.hasEagerState?te.eagerState:n(u,te.action);else{var Ee={lane:ye,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};k===null?(I=k=Ee,w=u):k=k.next=Ee,Bt.lanes|=ye,Hr|=ye}te=te.next}while(te!==null&&te!==m);k===null?w=u:k.next=I,ti(u,i.memoizedState)||(Rn=!0),i.memoizedState=u,i.baseState=w,i.baseQueue=k,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Bt.lanes|=m,Hr|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function nc(n){var i=Yn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var w=d=d.next;do m=n(m,w.action),w=w.next;while(w!==d);ti(m,i.memoizedState)||(Rn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function jh(){}function $h(n,i){var o=Bt,u=Yn(),d=i(),m=!ti(u.memoizedState,d);if(m&&(u.memoizedState=d,Rn=!0),u=u.queue,ic(Kh.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,Io(9,qh.bind(null,o,u,d,i),void 0,null),nn===null)throw Error(t(349));(zr&30)!==0||Yh(o,i,d)}return d}function Yh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function qh(n,i,o,u){i.value=o,i.getSnapshot=u,Zh(i)&&Qh(n)}function Kh(n,i,o){return o(function(){Zh(i)&&Qh(n)})}function Zh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ti(n,o)}catch{return!0}}function Qh(n){var i=Fi(n,1);i!==null&&oi(i,n,1,-1)}function Jh(n){var i=yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:n},i.queue=n,n=n.dispatch=P_.bind(null,Bt,n),[i.memoizedState,n]}function Io(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function ep(){return Yn().memoizedState}function Va(n,i,o,u){var d=yi();Bt.flags|=n,d.memoizedState=Io(1|i,o,void 0,u===void 0?null:u)}function Ga(n,i,o,u){var d=Yn();u=u===void 0?null:u;var m=void 0;if(Kt!==null){var w=Kt.memoizedState;if(m=w.destroy,u!==null&&Qu(u,w.deps)){d.memoizedState=Io(i,o,m,u);return}}Bt.flags|=n,d.memoizedState=Io(1|i,o,m,u)}function tp(n,i){return Va(8390656,8,n,i)}function ic(n,i){return Ga(2048,8,n,i)}function np(n,i){return Ga(4,2,n,i)}function ip(n,i){return Ga(4,4,n,i)}function rp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function sp(n,i,o){return o=o!=null?o.concat([n]):null,Ga(4,4,rp.bind(null,i,n),o)}function rc(){}function op(n,i){var o=Yn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Qu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function ap(n,i){var o=Yn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Qu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function lp(n,i,o){return(zr&21)===0?(n.baseState&&(n.baseState=!1,Rn=!0),n.memoizedState=o):(ti(o,i)||(o=_n(),Bt.lanes|=o,Hr|=o,n.baseState=!0),i)}function R_(n,i){var o=Pt;Pt=o!==0&&4>o?o:4,n(!0);var u=Zu.transition;Zu.transition={};try{n(!1),i()}finally{Pt=o,Zu.transition=u}}function up(){return Yn().memoizedState}function C_(n,i,o){var u=pr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},cp(n))fp(i,o);else if(o=Hh(n,i,o,u),o!==null){var d=yn();oi(o,n,u,d),dp(o,i,u)}}function P_(n,i,o){var u=pr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(cp(n))fp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,I=m(w,o);if(d.hasEagerState=!0,d.eagerState=I,ti(I,w)){var k=i.interleaved;k===null?(d.next=d,Xu(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}o=Hh(n,i,d,u),o!==null&&(d=yn(),oi(o,n,u,d),dp(o,i,u))}}function cp(n){var i=n.alternate;return n===Bt||i!==null&&i===Bt}function fp(n,i){bo=Ha=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function dp(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,ou(n,o)}}var Wa={readContext:$n,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},b_={readContext:$n,useCallback:function(n,i){return yi().memoizedState=[n,i===void 0?null:i],n},useContext:$n,useEffect:tp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Va(4194308,4,rp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Va(4194308,4,n,i)},useInsertionEffect:function(n,i){return Va(4,2,n,i)},useMemo:function(n,i){var o=yi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=yi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=C_.bind(null,Bt,n),[u.memoizedState,n]},useRef:function(n){var i=yi();return n={current:n},i.memoizedState=n},useState:Jh,useDebugValue:rc,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=Jh(!1),i=n[0];return n=R_.bind(null,n[1]),yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Bt,d=yi();if(Ot){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),nn===null)throw Error(t(349));(zr&30)!==0||Yh(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,tp(Kh.bind(null,u,m,n),[n]),u.flags|=2048,Io(9,qh.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=yi(),i=nn.identifierPrefix;if(Ot){var o=Ui,u=Ni;o=(u&~(1<<32-dt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Lo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=A_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},L_={readContext:$n,useCallback:op,useContext:$n,useEffect:ic,useImperativeHandle:sp,useInsertionEffect:np,useLayoutEffect:ip,useMemo:ap,useReducer:tc,useRef:ep,useState:function(){return tc(Do)},useDebugValue:rc,useDeferredValue:function(n){var i=Yn();return lp(i,Kt.memoizedState,n)},useTransition:function(){var n=tc(Do)[0],i=Yn().memoizedState;return[n,i]},useMutableSource:jh,useSyncExternalStore:$h,useId:up,unstable_isNewReconciler:!1},D_={readContext:$n,useCallback:op,useContext:$n,useEffect:ic,useImperativeHandle:sp,useInsertionEffect:np,useLayoutEffect:ip,useMemo:ap,useReducer:nc,useRef:ep,useState:function(){return nc(Do)},useDebugValue:rc,useDeferredValue:function(n){var i=Yn();return Kt===null?i.memoizedState=n:lp(i,Kt.memoizedState,n)},useTransition:function(){var n=nc(Do)[0],i=Yn().memoizedState;return[n,i]},useMutableSource:jh,useSyncExternalStore:$h,useId:up,unstable_isNewReconciler:!1};function ii(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function sc(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:oe({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Xa={isMounted:function(n){return(n=n._reactInternals)?gi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=yn(),d=pr(n),m=Oi(u,d);m.payload=i,o!=null&&(m.callback=o),i=cr(n,m,d),i!==null&&(oi(i,n,d,u),Oa(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=yn(),d=pr(n),m=Oi(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=cr(n,m,d),i!==null&&(oi(i,n,d,u),Oa(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=yn(),u=pr(n),d=Oi(o,u);d.tag=2,i!=null&&(d.callback=i),i=cr(n,d,u),i!==null&&(oi(i,n,u,o),Oa(i,n,u))}};function hp(n,i,o,u,d,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,w):i.prototype&&i.prototype.isPureReactComponent?!xo(o,u)||!xo(d,m):!0}function pp(n,i,o){var u=!1,d=ar,m=i.contextType;return typeof m=="object"&&m!==null?m=$n(m):(d=An(i)?Ur:fn.current,u=i.contextTypes,m=(u=u!=null)?_s(n,d):ar),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xa,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function mp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Xa.enqueueReplaceState(i,i.state,null)}function oc(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},ju(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=$n(m):(m=An(i)?Ur:fn.current,d.context=_s(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(sc(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Xa.enqueueReplaceState(d,d.state,null),ka(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function As(n,i){try{var o="",u=i;do o+=he(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function ac(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function lc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var I_=typeof WeakMap=="function"?WeakMap:Map;function gp(n,i,o){o=Oi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Qa||(Qa=!0,Ec=u),lc(n,i)},o}function vp(n,i,o){o=Oi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){lc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){lc(n,i),typeof u!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),o}function _p(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new I_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=$_.bind(null,n,i,o),i.then(n,n))}function xp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function yp(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Oi(-1,1),i.tag=2,cr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var N_=C.ReactCurrentOwner,Rn=!1;function xn(n,i,o,u){i.child=n===null?zh(i,null,o,u):Ms(i,n.child,o,u)}function Sp(n,i,o,u,d){o=o.render;var m=i.ref;return ws(i,d),u=Ju(n,i,o,u,m,d),o=ec(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ki(n,i,d)):(Ot&&o&&Fu(i),i.flags|=1,xn(n,i,u,d),i.child)}function Mp(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!bc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,Ep(n,i,m,u,d)):(n=rl(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var w=m.memoizedProps;if(o=o.compare,o=o!==null?o:xo,o(w,u)&&n.ref===i.ref)return ki(n,i,d)}return i.flags|=1,n=gr(m,u),n.ref=i.ref,n.return=i,i.child=n}function Ep(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(xo(m,u)&&n.ref===i.ref)if(Rn=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Rn=!0);else return i.lanes=n.lanes,ki(n,i,d)}return uc(n,i,o,u,d)}function wp(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Cs,kn),kn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Dt(Cs,kn),kn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Dt(Cs,kn),kn|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,Dt(Cs,kn),kn|=u;return xn(n,i,d,o),i.child}function Tp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function uc(n,i,o,u,d){var m=An(o)?Ur:fn.current;return m=_s(i,m),ws(i,d),o=Ju(n,i,o,u,m,d),u=ec(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ki(n,i,d)):(Ot&&u&&Fu(i),i.flags|=1,xn(n,i,o,d),i.child)}function Ap(n,i,o,u,d){if(An(o)){var m=!0;Pa(i)}else m=!1;if(ws(i,d),i.stateNode===null)$a(n,i),pp(i,o,u),oc(i,o,u,d),u=!0;else if(n===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var k=w.context,te=o.contextType;typeof te=="object"&&te!==null?te=$n(te):(te=An(o)?Ur:fn.current,te=_s(i,te));var ye=o.getDerivedStateFromProps,Ee=typeof ye=="function"||typeof w.getSnapshotBeforeUpdate=="function";Ee||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==u||k!==te)&&mp(i,w,u,te),ur=!1;var _e=i.memoizedState;w.state=_e,ka(i,u,w,d),k=i.memoizedState,I!==u||_e!==k||Tn.current||ur?(typeof ye=="function"&&(sc(i,o,ye,u),k=i.memoizedState),(I=ur||hp(i,o,I,u,_e,k,te))?(Ee||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),w.props=u,w.state=k,w.context=te,u=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{w=i.stateNode,Vh(n,i),I=i.memoizedProps,te=i.type===i.elementType?I:ii(i.type,I),w.props=te,Ee=i.pendingProps,_e=w.context,k=o.contextType,typeof k=="object"&&k!==null?k=$n(k):(k=An(o)?Ur:fn.current,k=_s(i,k));var ke=o.getDerivedStateFromProps;(ye=typeof ke=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==Ee||_e!==k)&&mp(i,w,u,k),ur=!1,_e=i.memoizedState,w.state=_e,ka(i,u,w,d);var He=i.memoizedState;I!==Ee||_e!==He||Tn.current||ur?(typeof ke=="function"&&(sc(i,o,ke,u),He=i.memoizedState),(te=ur||hp(i,o,te,u,_e,He,k)||!1)?(ye||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,He,k),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,He,k)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=He),w.props=u,w.state=He,w.context=k,u=te):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),u=!1)}return cc(n,i,o,u,m,d)}function cc(n,i,o,u,d,m){Tp(n,i);var w=(i.flags&128)!==0;if(!u&&!w)return d&&Lh(i,o,!1),ki(n,i,m);u=i.stateNode,N_.current=i;var I=w&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&w?(i.child=Ms(i,n.child,null,m),i.child=Ms(i,null,I,m)):xn(n,i,I,m),i.memoizedState=u.state,d&&Lh(i,o,!0),i.child}function Rp(n){var i=n.stateNode;i.pendingContext?Ph(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ph(n,i.context,!1),$u(n,i.containerInfo)}function Cp(n,i,o,u,d){return Ss(),zu(d),i.flags|=256,xn(n,i,o,u),i.child}var fc={dehydrated:null,treeContext:null,retryLane:0};function dc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Pp(n,i,o){var u=i.pendingProps,d=kt.current,m=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Dt(kt,d&1),n===null)return Bu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=u.children,n=u.fallback,m?(u=i.mode,m=i.child,w={mode:"hidden",children:w},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=sl(w,u,0,null),n=Xr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=dc(o),i.memoizedState=fc,n):hc(i,w));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return U_(n,i,w,u,I,d,o);if(m){m=u.fallback,w=i.mode,d=n.child,I=d.sibling;var k={mode:"hidden",children:u.children};return(w&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=gr(d,k),u.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=gr(I,m):(m=Xr(m,w,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,w=n.child.memoizedState,w=w===null?dc(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~o,i.memoizedState=fc,u}return m=n.child,n=m.sibling,u=gr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function hc(n,i){return i=sl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ja(n,i,o,u){return u!==null&&zu(u),Ms(i,n.child,null,o),n=hc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function U_(n,i,o,u,d,m,w){if(o)return i.flags&256?(i.flags&=-257,u=ac(Error(t(422))),ja(n,i,w,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=sl({mode:"visible",children:u.children},d,0,null),m=Xr(m,d,w,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&Ms(i,n.child,null,w),i.child.memoizedState=dc(w),i.memoizedState=fc,m);if((i.mode&1)===0)return ja(n,i,w,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var I=u.dgst;return u=I,m=Error(t(419)),u=ac(m,u,void 0),ja(n,i,w,u)}if(I=(w&n.childLanes)!==0,Rn||I){if(u=nn,u!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|w))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Fi(n,d),oi(u,n,d,-1))}return Pc(),u=ac(Error(t(421))),ja(n,i,w,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Y_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,On=sr(d.nextSibling),Fn=i,Ot=!0,ni=null,n!==null&&(Xn[jn++]=Ni,Xn[jn++]=Ui,Xn[jn++]=Fr,Ni=n.id,Ui=n.overflow,Fr=i),i=hc(i,u.children),i.flags|=4096,i)}function bp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Wu(n.return,i,o)}function pc(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function Lp(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(xn(n,i,u.children,o),u=kt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&bp(n,o,i);else if(n.tag===19)bp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Dt(kt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Ba(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),pc(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Ba(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}pc(i,!0,o,null,m);break;case"together":pc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $a(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ki(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Hr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=gr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=gr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function F_(n,i,o){switch(i.tag){case 3:Rp(i),Ss();break;case 5:Xh(i);break;case 1:An(i.type)&&Pa(i);break;case 4:$u(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Dt(Ua,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Dt(kt,kt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Pp(n,i,o):(Dt(kt,kt.current&1),n=ki(n,i,o),n!==null?n.sibling:null);Dt(kt,kt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Lp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Dt(kt,kt.current),u)break;return null;case 22:case 23:return i.lanes=0,wp(n,i,o)}return ki(n,i,o)}var Dp,mc,Ip,Np;Dp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},mc=function(){},Ip=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Br(xi.current);var m=null;switch(o){case"input":d=O(n,d),u=O(n,u),m=[];break;case"select":d=oe({},d,{value:void 0}),u=oe({},u,{value:void 0}),m=[];break;case"textarea":d=T(n,d),u=T(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Aa)}mt(o,u);var w;o=null;for(te in d)if(!u.hasOwnProperty(te)&&d.hasOwnProperty(te)&&d[te]!=null)if(te==="style"){var I=d[te];for(w in I)I.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?m||(m=[]):(m=m||[]).push(te,null));for(te in u){var k=u[te];if(I=d!=null?d[te]:void 0,u.hasOwnProperty(te)&&k!==I&&(k!=null||I!=null))if(te==="style")if(I){for(w in I)!I.hasOwnProperty(w)||k&&k.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in k)k.hasOwnProperty(w)&&I[w]!==k[w]&&(o||(o={}),o[w]=k[w])}else o||(m||(m=[]),m.push(te,o)),o=k;else te==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(m=m||[]).push(te,k)):te==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(te,""+k):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(k!=null&&te==="onScroll"&&Ut("scroll",n),m||I===k||(m=[])):(m=m||[]).push(te,k))}o&&(m=m||[]).push("style",o);var te=m;(i.updateQueue=te)&&(i.flags|=4)}},Np=function(n,i,o,u){o!==u&&(i.flags|=4)};function No(n,i){if(!Ot)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function hn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function O_(n,i,o){var u=i.pendingProps;switch(Ou(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(i),null;case 1:return An(i.type)&&Ca(),hn(i),null;case 3:return u=i.stateNode,Ts(),Ft(Tn),Ft(fn),Ku(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ia(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ni!==null&&(Ac(ni),ni=null))),mc(n,i),hn(i),null;case 5:Yu(i);var d=Br(Po.current);if(o=i.type,n!==null&&i.stateNode!=null)Ip(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return hn(i),null}if(n=Br(xi.current),Ia(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[_i]=i,u[wo]=m,n=(i.mode&1)!==0,o){case"dialog":Ut("cancel",u),Ut("close",u);break;case"iframe":case"object":case"embed":Ut("load",u);break;case"video":case"audio":for(d=0;d<So.length;d++)Ut(So[d],u);break;case"source":Ut("error",u);break;case"img":case"image":case"link":Ut("error",u),Ut("load",u);break;case"details":Ut("toggle",u);break;case"input":en(u,m),Ut("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Ut("invalid",u);break;case"textarea":Z(u,m),Ut("invalid",u)}mt(o,m),d=null;for(var w in m)if(m.hasOwnProperty(w)){var I=m[w];w==="children"?typeof I=="string"?u.textContent!==I&&(m.suppressHydrationWarning!==!0&&Ta(u.textContent,I,n),d=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Ta(u.textContent,I,n),d=["children",""+I]):a.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Ut("scroll",u)}switch(o){case"input":tt(u),Ke(u,m,!0);break;case"textarea":tt(u),ve(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Aa)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(o,{is:u.is}):(n=w.createElement(o),o==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,o),n[_i]=i,n[wo]=u,Dp(n,i,!1,!1),i.stateNode=n;e:{switch(w=lt(o,u),o){case"dialog":Ut("cancel",n),Ut("close",n),d=u;break;case"iframe":case"object":case"embed":Ut("load",n),d=u;break;case"video":case"audio":for(d=0;d<So.length;d++)Ut(So[d],n);d=u;break;case"source":Ut("error",n),d=u;break;case"img":case"image":case"link":Ut("error",n),Ut("load",n),d=u;break;case"details":Ut("toggle",n),d=u;break;case"input":en(n,u),d=O(n,u),Ut("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=oe({},u,{value:void 0}),Ut("invalid",n);break;case"textarea":Z(n,u),d=T(n,u),Ut("invalid",n);break;default:d=u}mt(o,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var k=I[m];m==="style"?nt(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Oe(n,k)):m==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&ft(n,k):typeof k=="number"&&ft(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Ut("scroll",n):k!=null&&L(n,m,k,w))}switch(o){case"input":tt(n),Ke(n,u,!1);break;case"textarea":tt(n),ve(n);break;case"option":u.value!=null&&n.setAttribute("value",""+fe(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?D(n,!!u.multiple,m,!1):u.defaultValue!=null&&D(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Aa)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return hn(i),null;case 6:if(n&&i.stateNode!=null)Np(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Br(Po.current),Br(xi.current),Ia(i)){if(u=i.stateNode,o=i.memoizedProps,u[_i]=i,(m=u.nodeValue!==o)&&(n=Fn,n!==null))switch(n.tag){case 3:Ta(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ta(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[_i]=i,i.stateNode=u}return hn(i),null;case 13:if(Ft(kt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ot&&On!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Oh(),Ss(),i.flags|=98560,m=!1;else if(m=Ia(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[_i]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;hn(i),m=!1}else ni!==null&&(Ac(ni),ni=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(kt.current&1)!==0?Zt===0&&(Zt=3):Pc())),i.updateQueue!==null&&(i.flags|=4),hn(i),null);case 4:return Ts(),mc(n,i),n===null&&Mo(i.stateNode.containerInfo),hn(i),null;case 10:return Gu(i.type._context),hn(i),null;case 17:return An(i.type)&&Ca(),hn(i),null;case 19:if(Ft(kt),m=i.memoizedState,m===null)return hn(i),null;if(u=(i.flags&128)!==0,w=m.rendering,w===null)if(u)No(m,!1);else{if(Zt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Ba(n),w!==null){for(i.flags|=128,No(m,!1),u=w.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Dt(kt,kt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Ae()>Ps&&(i.flags|=128,u=!0,No(m,!1),i.lanes=4194304)}else{if(!u)if(n=Ba(w),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),No(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Ot)return hn(i),null}else 2*Ae()-m.renderingStartTime>Ps&&o!==1073741824&&(i.flags|=128,u=!0,No(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(o=m.last,o!==null?o.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Ae(),i.sibling=null,o=kt.current,Dt(kt,u?o&1|2:o&1),i):(hn(i),null);case 22:case 23:return Cc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(kn&1073741824)!==0&&(hn(i),i.subtreeFlags&6&&(i.flags|=8192)):hn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function k_(n,i){switch(Ou(i),i.tag){case 1:return An(i.type)&&Ca(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ts(),Ft(Tn),Ft(fn),Ku(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Yu(i),null;case 13:if(Ft(kt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ss()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ft(kt),null;case 4:return Ts(),null;case 10:return Gu(i.type._context),null;case 22:case 23:return Cc(),null;case 24:return null;default:return null}}var Ya=!1,pn=!1,B_=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Rs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Gt(n,i,u)}else o.current=null}function gc(n,i,o){try{o()}catch(u){Gt(n,i,u)}}var Up=!1;function z_(n,i){if(Cu=pa,n=hh(),yu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var w=0,I=-1,k=-1,te=0,ye=0,Ee=n,_e=null;t:for(;;){for(var ke;Ee!==o||d!==0&&Ee.nodeType!==3||(I=w+d),Ee!==m||u!==0&&Ee.nodeType!==3||(k=w+u),Ee.nodeType===3&&(w+=Ee.nodeValue.length),(ke=Ee.firstChild)!==null;)_e=Ee,Ee=ke;for(;;){if(Ee===n)break t;if(_e===o&&++te===d&&(I=w),_e===m&&++ye===u&&(k=w),(ke=Ee.nextSibling)!==null)break;Ee=_e,_e=Ee.parentNode}Ee=ke}o=I===-1||k===-1?null:{start:I,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Pu={focusedElem:n,selectionRange:o},pa=!1,Be=i;Be!==null;)if(i=Be,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Be=n;else for(;Be!==null;){i=Be;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var We=He.memoizedProps,Xt=He.memoizedState,$=i.stateNode,H=$.getSnapshotBeforeUpdate(i.elementType===i.type?We:ii(i.type,We),Xt);$.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){Gt(i,i.return,Re)}if(n=i.sibling,n!==null){n.return=i.return,Be=n;break}Be=i.return}return He=Up,Up=!1,He}function Uo(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&gc(i,o,m)}d=d.next}while(d!==u)}}function qa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function vc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Fp(n){var i=n.alternate;i!==null&&(n.alternate=null,Fp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[_i],delete i[wo],delete i[Iu],delete i[M_],delete i[E_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Op(n){return n.tag===5||n.tag===3||n.tag===4}function kp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Op(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _c(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Aa));else if(u!==4&&(n=n.child,n!==null))for(_c(n,i,o),n=n.sibling;n!==null;)_c(n,i,o),n=n.sibling}function xc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(xc(n,i,o),n=n.sibling;n!==null;)xc(n,i,o),n=n.sibling}var an=null,ri=!1;function fr(n,i,o){for(o=o.child;o!==null;)Bp(n,i,o),o=o.sibling}function Bp(n,i,o){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Rt,o)}catch{}switch(o.tag){case 5:pn||Rs(o,i);case 6:var u=an,d=ri;an=null,fr(n,i,o),an=u,ri=d,an!==null&&(ri?(n=an,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(ri?(n=an,o=o.stateNode,n.nodeType===8?Du(n.parentNode,o):n.nodeType===1&&Du(n,o),ho(n)):Du(an,o.stateNode));break;case 4:u=an,d=ri,an=o.stateNode.containerInfo,ri=!0,fr(n,i,o),an=u,ri=d;break;case 0:case 11:case 14:case 15:if(!pn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&gc(o,i,w),d=d.next}while(d!==u)}fr(n,i,o);break;case 1:if(!pn&&(Rs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(I){Gt(o,i,I)}fr(n,i,o);break;case 21:fr(n,i,o);break;case 22:o.mode&1?(pn=(u=pn)||o.memoizedState!==null,fr(n,i,o),pn=u):fr(n,i,o);break;default:fr(n,i,o)}}function zp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new B_),i.forEach(function(u){var d=q_.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function si(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:an=I.stateNode,ri=!1;break e;case 3:an=I.stateNode.containerInfo,ri=!0;break e;case 4:an=I.stateNode.containerInfo,ri=!0;break e}I=I.return}if(an===null)throw Error(t(160));Bp(m,w,d),an=null,ri=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(te){Gt(d,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Hp(i,n),i=i.sibling}function Hp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(si(i,n),Si(n),u&4){try{Uo(3,n,n.return),qa(3,n)}catch(We){Gt(n,n.return,We)}try{Uo(5,n,n.return)}catch(We){Gt(n,n.return,We)}}break;case 1:si(i,n),Si(n),u&512&&o!==null&&Rs(o,o.return);break;case 5:if(si(i,n),Si(n),u&512&&o!==null&&Rs(o,o.return),n.flags&32){var d=n.stateNode;try{ft(d,"")}catch(We){Gt(n,n.return,We)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,w=o!==null?o.memoizedProps:m,I=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&ct(d,m),lt(I,w);var te=lt(I,m);for(w=0;w<k.length;w+=2){var ye=k[w],Ee=k[w+1];ye==="style"?nt(d,Ee):ye==="dangerouslySetInnerHTML"?Oe(d,Ee):ye==="children"?ft(d,Ee):L(d,ye,Ee,te)}switch(I){case"input":at(d,m);break;case"textarea":ge(d,m);break;case"select":var _e=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ke=m.value;ke!=null?D(d,!!m.multiple,ke,!1):_e!==!!m.multiple&&(m.defaultValue!=null?D(d,!!m.multiple,m.defaultValue,!0):D(d,!!m.multiple,m.multiple?[]:"",!1))}d[wo]=m}catch(We){Gt(n,n.return,We)}}break;case 6:if(si(i,n),Si(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(We){Gt(n,n.return,We)}}break;case 3:if(si(i,n),Si(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ho(i.containerInfo)}catch(We){Gt(n,n.return,We)}break;case 4:si(i,n),Si(n);break;case 13:si(i,n),Si(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Mc=Ae())),u&4&&zp(n);break;case 22:if(ye=o!==null&&o.memoizedState!==null,n.mode&1?(pn=(te=pn)||ye,si(i,n),pn=te):si(i,n),Si(n),u&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!ye&&(n.mode&1)!==0)for(Be=n,ye=n.child;ye!==null;){for(Ee=Be=ye;Be!==null;){switch(_e=Be,ke=_e.child,_e.tag){case 0:case 11:case 14:case 15:Uo(4,_e,_e.return);break;case 1:Rs(_e,_e.return);var He=_e.stateNode;if(typeof He.componentWillUnmount=="function"){u=_e,o=_e.return;try{i=u,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(We){Gt(u,o,We)}}break;case 5:Rs(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Wp(Ee);continue}}ke!==null?(ke.return=_e,Be=ke):Wp(Ee)}ye=ye.sibling}e:for(ye=null,Ee=n;;){if(Ee.tag===5){if(ye===null){ye=Ee;try{d=Ee.stateNode,te?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Ee.stateNode,k=Ee.memoizedProps.style,w=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=Ze("display",w))}catch(We){Gt(n,n.return,We)}}}else if(Ee.tag===6){if(ye===null)try{Ee.stateNode.nodeValue=te?"":Ee.memoizedProps}catch(We){Gt(n,n.return,We)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;ye===Ee&&(ye=null),Ee=Ee.return}ye===Ee&&(ye=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:si(i,n),Si(n),u&4&&zp(n);break;case 21:break;default:si(i,n),Si(n)}}function Si(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Op(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ft(d,""),u.flags&=-33);var m=kp(n);xc(n,m,d);break;case 3:case 4:var w=u.stateNode.containerInfo,I=kp(n);_c(n,I,w);break;default:throw Error(t(161))}}catch(k){Gt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function H_(n,i,o){Be=n,Vp(n)}function Vp(n,i,o){for(var u=(n.mode&1)!==0;Be!==null;){var d=Be,m=d.child;if(d.tag===22&&u){var w=d.memoizedState!==null||Ya;if(!w){var I=d.alternate,k=I!==null&&I.memoizedState!==null||pn;I=Ya;var te=pn;if(Ya=w,(pn=k)&&!te)for(Be=d;Be!==null;)w=Be,k=w.child,w.tag===22&&w.memoizedState!==null?Xp(d):k!==null?(k.return=w,Be=k):Xp(d);for(;m!==null;)Be=m,Vp(m),m=m.sibling;Be=d,Ya=I,pn=te}Gp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Be=m):Gp(n)}}function Gp(n){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:pn||qa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!pn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ii(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Wh(i,m,u);break;case 3:var w=i.updateQueue;if(w!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Wh(i,w,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var ye=te.memoizedState;if(ye!==null){var Ee=ye.dehydrated;Ee!==null&&ho(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}pn||i.flags&512&&vc(i)}catch(_e){Gt(i,i.return,_e)}}if(i===n){Be=null;break}if(o=i.sibling,o!==null){o.return=i.return,Be=o;break}Be=i.return}}function Wp(n){for(;Be!==null;){var i=Be;if(i===n){Be=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Be=o;break}Be=i.return}}function Xp(n){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{qa(4,i)}catch(k){Gt(i,o,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(k){Gt(i,d,k)}}var m=i.return;try{vc(i)}catch(k){Gt(i,m,k)}break;case 5:var w=i.return;try{vc(i)}catch(k){Gt(i,w,k)}}}catch(k){Gt(i,i.return,k)}if(i===n){Be=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Be=I;break}Be=i.return}}var V_=Math.ceil,Ka=C.ReactCurrentDispatcher,yc=C.ReactCurrentOwner,qn=C.ReactCurrentBatchConfig,Mt=0,nn=null,jt=null,ln=0,kn=0,Cs=or(0),Zt=0,Fo=null,Hr=0,Za=0,Sc=0,Oo=null,Cn=null,Mc=0,Ps=1/0,Bi=null,Qa=!1,Ec=null,dr=null,Ja=!1,hr=null,el=0,ko=0,wc=null,tl=-1,nl=0;function yn(){return(Mt&6)!==0?Ae():tl!==-1?tl:tl=Ae()}function pr(n){return(n.mode&1)===0?1:(Mt&2)!==0&&ln!==0?ln&-ln:T_.transition!==null?(nl===0&&(nl=_n()),nl):(n=Pt,n!==0||(n=window.event,n=n===void 0?16:$d(n.type)),n)}function oi(n,i,o,u){if(50<ko)throw ko=0,wc=null,Error(t(185));wn(n,o,u),((Mt&2)===0||n!==nn)&&(n===nn&&((Mt&2)===0&&(Za|=o),Zt===4&&mr(n,ln)),Pn(n,u),o===1&&Mt===0&&(i.mode&1)===0&&(Ps=Ae()+500,ba&&lr()))}function Pn(n,i){var o=n.callbackNode;Gn(n,i);var u=vi(n,n===nn?ln:0);if(u===0)o!==null&&ie(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&ie(o),i===1)n.tag===0?w_($p.bind(null,n)):Dh($p.bind(null,n)),y_(function(){(Mt&6)===0&&lr()}),o=null;else{switch(Bd(u)){case 1:o=Ge;break;case 4:o=it;break;case 16:o=st;break;case 536870912:o=xt;break;default:o=st}o=tm(o,jp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function jp(n,i){if(tl=-1,nl=0,(Mt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(bs()&&n.callbackNode!==o)return null;var u=vi(n,n===nn?ln:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=il(n,u);else{i=u;var d=Mt;Mt|=2;var m=qp();(nn!==n||ln!==i)&&(Bi=null,Ps=Ae()+500,Gr(n,i));do try{X_();break}catch(I){Yp(n,I)}while(!0);Vu(),Ka.current=m,Mt=d,jt!==null?i=0:(nn=null,ln=0,i=Zt)}if(i!==0){if(i===2&&(d=Li(n),d!==0&&(u=d,i=Tc(n,d))),i===1)throw o=Fo,Gr(n,0),mr(n,u),Pn(n,Ae()),o;if(i===6)mr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!G_(d)&&(i=il(n,u),i===2&&(m=Li(n),m!==0&&(u=m,i=Tc(n,m))),i===1))throw o=Fo,Gr(n,0),mr(n,u),Pn(n,Ae()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Wr(n,Cn,Bi);break;case 3:if(mr(n,u),(u&130023424)===u&&(i=Mc+500-Ae(),10<i)){if(vi(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){yn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Lu(Wr.bind(null,n,Cn,Bi),i);break}Wr(n,Cn,Bi);break;case 4:if(mr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var w=31-dt(u);m=1<<w,w=i[w],w>d&&(d=w),u&=~m}if(u=d,u=Ae()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*V_(u/1960))-u,10<u){n.timeoutHandle=Lu(Wr.bind(null,n,Cn,Bi),u);break}Wr(n,Cn,Bi);break;case 5:Wr(n,Cn,Bi);break;default:throw Error(t(329))}}}return Pn(n,Ae()),n.callbackNode===o?jp.bind(null,n):null}function Tc(n,i){var o=Oo;return n.current.memoizedState.isDehydrated&&(Gr(n,i).flags|=256),n=il(n,i),n!==2&&(i=Cn,Cn=o,i!==null&&Ac(i)),n}function Ac(n){Cn===null?Cn=n:Cn.push.apply(Cn,n)}function G_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!ti(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function mr(n,i){for(i&=~Sc,i&=~Za,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-dt(i),u=1<<o;n[o]=-1,i&=~u}}function $p(n){if((Mt&6)!==0)throw Error(t(327));bs();var i=vi(n,0);if((i&1)===0)return Pn(n,Ae()),null;var o=il(n,i);if(n.tag!==0&&o===2){var u=Li(n);u!==0&&(i=u,o=Tc(n,u))}if(o===1)throw o=Fo,Gr(n,0),mr(n,i),Pn(n,Ae()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Wr(n,Cn,Bi),Pn(n,Ae()),null}function Rc(n,i){var o=Mt;Mt|=1;try{return n(i)}finally{Mt=o,Mt===0&&(Ps=Ae()+500,ba&&lr())}}function Vr(n){hr!==null&&hr.tag===0&&(Mt&6)===0&&bs();var i=Mt;Mt|=1;var o=qn.transition,u=Pt;try{if(qn.transition=null,Pt=1,n)return n()}finally{Pt=u,qn.transition=o,Mt=i,(Mt&6)===0&&lr()}}function Cc(){kn=Cs.current,Ft(Cs)}function Gr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,x_(o)),jt!==null)for(o=jt.return;o!==null;){var u=o;switch(Ou(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ca();break;case 3:Ts(),Ft(Tn),Ft(fn),Ku();break;case 5:Yu(u);break;case 4:Ts();break;case 13:Ft(kt);break;case 19:Ft(kt);break;case 10:Gu(u.type._context);break;case 22:case 23:Cc()}o=o.return}if(nn=n,jt=n=gr(n.current,null),ln=kn=i,Zt=0,Fo=null,Sc=Za=Hr=0,Cn=Oo=null,kr!==null){for(i=0;i<kr.length;i++)if(o=kr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var w=m.next;m.next=d,u.next=w}o.pending=u}kr=null}return n}function Yp(n,i){do{var o=jt;try{if(Vu(),za.current=Wa,Ha){for(var u=Bt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ha=!1}if(zr=0,tn=Kt=Bt=null,bo=!1,Lo=0,yc.current=null,o===null||o.return===null){Zt=1,Fo=i,jt=null;break}e:{var m=n,w=o.return,I=o,k=i;if(i=ln,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var te=k,ye=I,Ee=ye.tag;if((ye.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var ke=xp(w);if(ke!==null){ke.flags&=-257,yp(ke,w,I,m,i),ke.mode&1&&_p(m,te,i),i=ke,k=te;var He=i.updateQueue;if(He===null){var We=new Set;We.add(k),i.updateQueue=We}else He.add(k);break e}else{if((i&1)===0){_p(m,te,i),Pc();break e}k=Error(t(426))}}else if(Ot&&I.mode&1){var Xt=xp(w);if(Xt!==null){(Xt.flags&65536)===0&&(Xt.flags|=256),yp(Xt,w,I,m,i),zu(As(k,I));break e}}m=k=As(k,I),Zt!==4&&(Zt=2),Oo===null?Oo=[m]:Oo.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var $=gp(m,k,i);Gh(m,$);break e;case 1:I=k;var H=m.type,K=m.stateNode;if((m.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(dr===null||!dr.has(K)))){m.flags|=65536,i&=-i,m.lanes|=i;var Re=vp(m,I,i);Gh(m,Re);break e}}m=m.return}while(m!==null)}Zp(o)}catch($e){i=$e,jt===o&&o!==null&&(jt=o=o.return);continue}break}while(!0)}function qp(){var n=Ka.current;return Ka.current=Wa,n===null?Wa:n}function Pc(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),nn===null||(Hr&268435455)===0&&(Za&268435455)===0||mr(nn,ln)}function il(n,i){var o=Mt;Mt|=2;var u=qp();(nn!==n||ln!==i)&&(Bi=null,Gr(n,i));do try{W_();break}catch(d){Yp(n,d)}while(!0);if(Vu(),Mt=o,Ka.current=u,jt!==null)throw Error(t(261));return nn=null,ln=0,Zt}function W_(){for(;jt!==null;)Kp(jt)}function X_(){for(;jt!==null&&!j();)Kp(jt)}function Kp(n){var i=em(n.alternate,n,kn);n.memoizedProps=n.pendingProps,i===null?Zp(n):jt=i,yc.current=null}function Zp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=O_(o,i,kn),o!==null){jt=o;return}}else{if(o=k_(o,i),o!==null){o.flags&=32767,jt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Zt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=n}while(i!==null);Zt===0&&(Zt=5)}function Wr(n,i,o){var u=Pt,d=qn.transition;try{qn.transition=null,Pt=1,j_(n,i,o,u)}finally{qn.transition=d,Pt=u}return null}function j_(n,i,o,u){do bs();while(hr!==null);if((Mt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(fa(n,m),n===nn&&(jt=nn=null,ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ja||(Ja=!0,tm(st,function(){return bs(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=qn.transition,qn.transition=null;var w=Pt;Pt=1;var I=Mt;Mt|=4,yc.current=null,z_(n,o),Hp(o,n),d_(Pu),pa=!!Cu,Pu=Cu=null,n.current=o,H_(o),Ce(),Mt=I,Pt=w,qn.transition=m}else n.current=o;if(Ja&&(Ja=!1,hr=n,el=d),m=n.pendingLanes,m===0&&(dr=null),un(o.stateNode),Pn(n,Ae()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Qa)throw Qa=!1,n=Ec,Ec=null,n;return(el&1)!==0&&n.tag!==0&&bs(),m=n.pendingLanes,(m&1)!==0?n===wc?ko++:(ko=0,wc=n):ko=0,lr(),null}function bs(){if(hr!==null){var n=Bd(el),i=qn.transition,o=Pt;try{if(qn.transition=null,Pt=16>n?16:n,hr===null)var u=!1;else{if(n=hr,hr=null,el=0,(Mt&6)!==0)throw Error(t(331));var d=Mt;for(Mt|=4,Be=n.current;Be!==null;){var m=Be,w=m.child;if((Be.flags&16)!==0){var I=m.deletions;if(I!==null){for(var k=0;k<I.length;k++){var te=I[k];for(Be=te;Be!==null;){var ye=Be;switch(ye.tag){case 0:case 11:case 15:Uo(8,ye,m)}var Ee=ye.child;if(Ee!==null)Ee.return=ye,Be=Ee;else for(;Be!==null;){ye=Be;var _e=ye.sibling,ke=ye.return;if(Fp(ye),ye===te){Be=null;break}if(_e!==null){_e.return=ke,Be=_e;break}Be=ke}}}var He=m.alternate;if(He!==null){var We=He.child;if(We!==null){He.child=null;do{var Xt=We.sibling;We.sibling=null,We=Xt}while(We!==null)}}Be=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,Be=w;else e:for(;Be!==null;){if(m=Be,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Uo(9,m,m.return)}var $=m.sibling;if($!==null){$.return=m.return,Be=$;break e}Be=m.return}}var H=n.current;for(Be=H;Be!==null;){w=Be;var K=w.child;if((w.subtreeFlags&2064)!==0&&K!==null)K.return=w,Be=K;else e:for(w=H;Be!==null;){if(I=Be,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:qa(9,I)}}catch($e){Gt(I,I.return,$e)}if(I===w){Be=null;break e}var Re=I.sibling;if(Re!==null){Re.return=I.return,Be=Re;break e}Be=I.return}}if(Mt=d,lr(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Rt,n)}catch{}u=!0}return u}finally{Pt=o,qn.transition=i}}return!1}function Qp(n,i,o){i=As(o,i),i=gp(n,i,1),n=cr(n,i,1),i=yn(),n!==null&&(wn(n,1,i),Pn(n,i))}function Gt(n,i,o){if(n.tag===3)Qp(n,n,o);else for(;i!==null;){if(i.tag===3){Qp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(dr===null||!dr.has(u))){n=As(o,n),n=vp(i,n,1),i=cr(i,n,1),n=yn(),i!==null&&(wn(i,1,n),Pn(i,n));break}}i=i.return}}function $_(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=yn(),n.pingedLanes|=n.suspendedLanes&o,nn===n&&(ln&o)===o&&(Zt===4||Zt===3&&(ln&130023424)===ln&&500>Ae()-Mc?Gr(n,0):Sc|=o),Pn(n,i)}function Jp(n,i){i===0&&((n.mode&1)===0?i=1:(i=ei,ei<<=1,(ei&130023424)===0&&(ei=4194304)));var o=yn();n=Fi(n,i),n!==null&&(wn(n,i,o),Pn(n,o))}function Y_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Jp(n,o)}function q_(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Jp(n,o)}var em;em=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Tn.current)Rn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Rn=!1,F_(n,i,o);Rn=(n.flags&131072)!==0}else Rn=!1,Ot&&(i.flags&1048576)!==0&&Ih(i,Da,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;$a(n,i),n=i.pendingProps;var d=_s(i,fn.current);ws(i,o),d=Ju(null,i,u,n,d,o);var m=ec();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(u)?(m=!0,Pa(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ju(i),d.updater=Xa,i.stateNode=d,d._reactInternals=i,oc(i,u,n,o),i=cc(null,i,u,!0,m,o)):(i.tag=0,Ot&&m&&Fu(i),xn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch($a(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Z_(u),n=ii(u,n),d){case 0:i=uc(null,i,u,n,o);break e;case 1:i=Ap(null,i,u,n,o);break e;case 11:i=Sp(null,i,u,n,o);break e;case 14:i=Mp(null,i,u,ii(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),uc(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),Ap(n,i,u,d,o);case 3:e:{if(Rp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,Vh(n,i),ka(i,u,null,o);var w=i.memoizedState;if(u=w.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=As(Error(t(423)),i),i=Cp(n,i,u,o,d);break e}else if(u!==d){d=As(Error(t(424)),i),i=Cp(n,i,u,o,d);break e}else for(On=sr(i.stateNode.containerInfo.firstChild),Fn=i,Ot=!0,ni=null,o=zh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ss(),u===d){i=ki(n,i,o);break e}xn(n,i,u,o)}i=i.child}return i;case 5:return Xh(i),n===null&&Bu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,w=d.children,bu(u,d)?w=null:m!==null&&bu(u,m)&&(i.flags|=32),Tp(n,i),xn(n,i,w,o),i.child;case 6:return n===null&&Bu(i),null;case 13:return Pp(n,i,o);case 4:return $u(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ms(i,null,u,o):xn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),Sp(n,i,u,d,o);case 7:return xn(n,i,i.pendingProps,o),i.child;case 8:return xn(n,i,i.pendingProps.children,o),i.child;case 12:return xn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,w=d.value,Dt(Ua,u._currentValue),u._currentValue=w,m!==null)if(ti(m.value,w)){if(m.children===d.children&&!Tn.current){i=ki(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){w=m.child;for(var k=I.firstContext;k!==null;){if(k.context===u){if(m.tag===1){k=Oi(-1,o&-o),k.tag=2;var te=m.updateQueue;if(te!==null){te=te.shared;var ye=te.pending;ye===null?k.next=k:(k.next=ye.next,ye.next=k),te.pending=k}}m.lanes|=o,k=m.alternate,k!==null&&(k.lanes|=o),Wu(m.return,o,i),I.lanes|=o;break}k=k.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=o,I=w.alternate,I!==null&&(I.lanes|=o),Wu(w,o,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}xn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,ws(i,o),d=$n(d),u=u(d),i.flags|=1,xn(n,i,u,o),i.child;case 14:return u=i.type,d=ii(u,i.pendingProps),d=ii(u.type,d),Mp(n,i,u,d,o);case 15:return Ep(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),$a(n,i),i.tag=1,An(u)?(n=!0,Pa(i)):n=!1,ws(i,o),pp(i,u,d),oc(i,u,d,o),cc(null,i,u,!0,n,o);case 19:return Lp(n,i,o);case 22:return wp(n,i,o)}throw Error(t(156,i.tag))};function tm(n,i){return ne(n,i)}function K_(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(n,i,o,u){return new K_(n,i,o,u)}function bc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Z_(n){if(typeof n=="function")return bc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===ue)return 14}return 2}function gr(n,i){var o=n.alternate;return o===null?(o=Kn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function rl(n,i,o,u,d,m){var w=2;if(u=n,typeof n=="function")bc(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case N:return Xr(o.children,d,m,i);case V:w=8,d|=8;break;case P:return n=Kn(12,o,i,d|2),n.elementType=P,n.lanes=m,n;case q:return n=Kn(13,o,i,d),n.elementType=q,n.lanes=m,n;case le:return n=Kn(19,o,i,d),n.elementType=le,n.lanes=m,n;case ce:return sl(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:w=10;break e;case B:w=9;break e;case ee:w=11;break e;case ue:w=14;break e;case ae:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Kn(w,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Xr(n,i,o,u){return n=Kn(7,n,u,i),n.lanes=o,n}function sl(n,i,o,u){return n=Kn(22,n,u,i),n.elementType=ce,n.lanes=o,n.stateNode={isHidden:!1},n}function Lc(n,i,o){return n=Kn(6,n,null,i),n.lanes=o,n}function Dc(n,i,o){return i=Kn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Q_(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wn(0),this.expirationTimes=Wn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ic(n,i,o,u,d,m,w,I,k){return n=new Q_(n,i,o,I,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Kn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},ju(m),n}function J_(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function nm(n){if(!n)return ar;n=n._reactInternals;e:{if(gi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(An(o))return bh(n,o,i)}return i}function im(n,i,o,u,d,m,w,I,k){return n=Ic(o,u,!0,n,d,m,w,I,k),n.context=nm(null),o=n.current,u=yn(),d=pr(o),m=Oi(u,d),m.callback=i??null,cr(o,m,d),n.current.lanes=d,wn(n,d,u),Pn(n,u),n}function ol(n,i,o,u){var d=i.current,m=yn(),w=pr(d);return o=nm(o),i.context===null?i.context=o:i.pendingContext=o,i=Oi(m,w),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=cr(d,i,w),n!==null&&(oi(n,d,w,m),Oa(n,d,w)),w}function al(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function rm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Nc(n,i){rm(n,i),(n=n.alternate)&&rm(n,i)}function e0(){return null}var sm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uc(n){this._internalRoot=n}ll.prototype.render=Uc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ol(n,i,null,null)},ll.prototype.unmount=Uc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Vr(function(){ol(null,n,null,null)}),i[Di]=null}};function ll(n){this._internalRoot=n}ll.prototype.unstable_scheduleHydration=function(n){if(n){var i=Vd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<nr.length&&i!==0&&i<nr[o].priority;o++);nr.splice(o,0,n),o===0&&Xd(n)}};function Fc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ul(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function om(){}function t0(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var te=al(w);m.call(te)}}var w=im(i,u,n,0,null,!1,!1,"",om);return n._reactRootContainer=w,n[Di]=w.current,Mo(n.nodeType===8?n.parentNode:n),Vr(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var I=u;u=function(){var te=al(k);I.call(te)}}var k=Ic(n,0,!1,null,null,!1,!1,"",om);return n._reactRootContainer=k,n[Di]=k.current,Mo(n.nodeType===8?n.parentNode:n),Vr(function(){ol(i,k,o,u)}),k}function cl(n,i,o,u,d){var m=o._reactRootContainer;if(m){var w=m;if(typeof d=="function"){var I=d;d=function(){var k=al(w);I.call(k)}}ol(i,w,n,d)}else w=t0(o,i,n,d,u);return al(w)}zd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=qt(i.pendingLanes);o!==0&&(ou(i,o|1),Pn(i,Ae()),(Mt&6)===0&&(Ps=Ae()+500,lr()))}break;case 13:Vr(function(){var u=Fi(n,1);if(u!==null){var d=yn();oi(u,n,1,d)}}),Nc(n,1)}},au=function(n){if(n.tag===13){var i=Fi(n,134217728);if(i!==null){var o=yn();oi(i,n,134217728,o)}Nc(n,134217728)}},Hd=function(n){if(n.tag===13){var i=pr(n),o=Fi(n,i);if(o!==null){var u=yn();oi(o,n,i,u)}Nc(n,i)}},Vd=function(){return Pt},Gd=function(n,i){var o=Pt;try{return Pt=n,i()}finally{Pt=o}},Le=function(n,i,o){switch(i){case"input":if(at(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Ra(u);if(!d)throw Error(t(90));ot(u),at(u,d)}}}break;case"textarea":ge(n,o);break;case"select":i=o.value,i!=null&&D(n,!!o.multiple,i,!1)}},Nt=Rc,Yt=Vr;var n0={usingClientEntryPoint:!1,Events:[To,gs,Ra,Ie,ut,Rc]},Bo={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},i0={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=R(n),n===null?null:n.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||e0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Rt=fl.inject(i0),_t=fl}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n0,bn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fc(i))throw Error(t(200));return J_(n,i,null,o)},bn.createRoot=function(n,i){if(!Fc(n))throw Error(t(299));var o=!1,u="",d=sm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Ic(n,1,!1,null,null,o,!1,u,d),n[Di]=i.current,Mo(n.nodeType===8?n.parentNode:n),new Uc(i)},bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=R(i),n=n===null?null:n.stateNode,n},bn.flushSync=function(n){return Vr(n)},bn.hydrate=function(n,i,o){if(!ul(i))throw Error(t(200));return cl(null,n,i,!0,o)},bn.hydrateRoot=function(n,i,o){if(!Fc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",w=sm;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),i=im(i,null,n,1,o??null,d,!1,m,w),n[Di]=i.current,Mo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ll(i)},bn.render=function(n,i,o){if(!ul(i))throw Error(t(200));return cl(null,n,i,!1,o)},bn.unmountComponentAtNode=function(n){if(!ul(n))throw Error(t(40));return n._reactRootContainer?(Vr(function(){cl(null,null,n,!1,function(){n._reactRootContainer=null,n[Di]=null})}),!0):!1},bn.unstable_batchedUpdates=Rc,bn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!ul(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return cl(n,i,o,!1,u)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var pm;function d0(){if(pm)return Bc.exports;pm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Bc.exports=f0(),Bc.exports}var mm;function h0(){if(mm)return dl;mm=1;var s=d0();return dl.createRoot=s.createRoot,dl.hydrateRoot=s.hydrateRoot,dl}var p0=h0();const m0=Cg(p0);/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var gm="popstate";function vm(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function g0(s={}){function e(r,a){var p;let l=(p=a.state)==null?void 0:p.masked,{pathname:c,search:f,hash:h}=l||r.location;return Af("",{pathname:c,search:f,hash:h},a.state&&a.state.usr||null,a.state&&a.state.key||"default",l?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function t(r,a){return typeof a=="string"?a:Zo(a)}return _0(e,t,null,s)}function zt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function pi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function v0(){return Math.random().toString(36).substring(2,10)}function _m(s,e){return{usr:s.state,key:s.key,idx:e,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function Af(s,e,t=null,r,a){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?to(e):e,state:t,key:e&&e.key||r||v0(),unstable_mask:a}}function Zo({pathname:s="/",search:e="",hash:t=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(s+=t.charAt(0)==="#"?t:"#"+t),s}function to(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substring(t),s=s.substring(0,t));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function _0(s,e,t,r={}){let{window:a=document.defaultView,v5Compat:l=!1}=r,c=a.history,f="POP",h=null,p=g();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function g(){return(c.state||{idx:null}).idx}function v(){f="POP";let y=g(),_=y==null?null:y-p;p=y,h&&h({action:f,location:M.location,delta:_})}function x(y,_){f="PUSH";let b=vm(y)?y:Af(M.location,y,_);p=g()+1;let L=_m(b,p),C=M.createHref(b.unstable_mask||b);try{c.pushState(L,"",C)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;a.location.assign(C)}l&&h&&h({action:f,location:M.location,delta:1})}function S(y,_){f="REPLACE";let b=vm(y)?y:Af(M.location,y,_);p=g();let L=_m(b,p),C=M.createHref(b.unstable_mask||b);c.replaceState(L,"",C),l&&h&&h({action:f,location:M.location,delta:0})}function E(y){return x0(y)}let M={get action(){return f},get location(){return s(a,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(gm,v),h=y,()=>{a.removeEventListener(gm,v),h=null}},createHref(y){return e(a,y)},createURL:E,encodeLocation(y){let _=E(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:S,go(y){return c.go(y)}};return M}function x0(s,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),zt(t,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Zo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=t+r),new URL(r,t)}function Pg(s,e,t="/"){return y0(s,e,t,!1)}function y0(s,e,t,r){let a=typeof e=="string"?to(e):e,l=qi(a.pathname||"/",t);if(l==null)return null;let c=bg(s);S0(c);let f=null;for(let h=0;f==null&&h<c.length;++h){let p=D0(l);f=b0(c[h],p,r)}return f}function bg(s,e=[],t=[],r="",a=!1){let l=(c,f,h=a,p)=>{let g={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&h)return;zt(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let v=Ti([r,g.relativePath]),x=t.concat(g);c.children&&c.children.length>0&&(zt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),bg(c.children,e,x,v,h)),!(c.path==null&&!c.index)&&e.push({path:v,score:C0(v,c.index),routesMeta:x})};return s.forEach((c,f)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))l(c,f);else for(let p of Lg(c.path))l(c,f,!0,p)}),e}function Lg(s){let e=s.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let c=Lg(r.join("/")),f=[];return f.push(...c.map(h=>h===""?l:[l,h].join("/"))),a&&f.push(...c),f.map(h=>s.startsWith("/")&&h===""?"/":h)}function S0(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:P0(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var M0=/^:[\w-]+$/,E0=3,w0=2,T0=1,A0=10,R0=-2,xm=s=>s==="*";function C0(s,e){let t=s.split("/"),r=t.length;return t.some(xm)&&(r+=R0),e&&(r+=w0),t.filter(a=>!xm(a)).reduce((a,l)=>a+(M0.test(l)?E0:l===""?T0:A0),r)}function P0(s,e){return s.length===e.length&&s.slice(0,-1).every((r,a)=>r===e[a])?s[s.length-1]-e[e.length-1]:0}function b0(s,e,t=!1){let{routesMeta:r}=s,a={},l="/",c=[];for(let f=0;f<r.length;++f){let h=r[f],p=f===r.length-1,g=l==="/"?e:e.slice(l.length)||"/",v=$l({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},g),x=h.route;if(!v&&p&&t&&!r[r.length-1].route.index&&(v=$l({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!v)return null;Object.assign(a,v.params),c.push({params:a,pathname:Ti([l,v.pathname]),pathnameBase:F0(Ti([l,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(l=Ti([l,v.pathnameBase]))}return c}function $l(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,r]=L0(s.path,s.caseSensitive,s.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:v},x)=>{if(g==="*"){let E=f[x]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[x];return v&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:s}}function L0(s,e=!1,t=!0){pi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],a="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h,p,g)=>{if(r.push({paramName:f,isOptional:h!=null}),h){let v=g.charAt(p+c.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),a+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":s!==""&&s!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function D0(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return pi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function qi(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=s.charAt(t);return r&&r!=="/"?null:s.slice(t)||"/"}var I0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function N0(s,e="/"){let{pathname:t,search:r="",hash:a=""}=typeof s=="string"?to(s):s,l;return t?(t=t.replace(/\/\/+/g,"/"),t.startsWith("/")?l=ym(t.substring(1),"/"):l=ym(t,e)):l=e,{pathname:l,search:O0(r),hash:k0(a)}}function ym(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Vc(s,e,t,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function U0(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Dg(s){let e=U0(s);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function vd(s,e,t,r=!1){let a;typeof s=="string"?a=to(s):(a={...s},zt(!a.pathname||!a.pathname.includes("?"),Vc("?","pathname","search",a)),zt(!a.pathname||!a.pathname.includes("#"),Vc("#","pathname","hash",a)),zt(!a.search||!a.search.includes("#"),Vc("#","search","hash",a)));let l=s===""||a.pathname==="",c=l?"/":a.pathname,f;if(c==null)f=t;else{let v=e.length-1;if(!r&&c.startsWith("..")){let x=c.split("/");for(;x[0]==="..";)x.shift(),v-=1;a.pathname=x.join("/")}f=v>=0?e[v]:"/"}let h=N0(a,f),p=c&&c!=="/"&&c.endsWith("/"),g=(l||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}var Ti=s=>s.join("/").replace(/\/\/+/g,"/"),F0=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),O0=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,k0=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,B0=class{constructor(s,e,t,r=!1){this.status=s,this.statusText=e||"",this.internal=r,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function z0(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function H0(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Ig=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ng(s,e){let t=s;if(typeof t!="string"||!I0.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let r=t,a=!1;if(Ig)try{let l=new URL(window.location.href),c=t.startsWith("//")?new URL(l.protocol+t):new URL(t),f=qi(c.pathname,e);c.origin===l.origin&&f!=null?t=f+c.search+c.hash:a=!0}catch{pi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:a,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ug=["POST","PUT","PATCH","DELETE"];new Set(Ug);var V0=["GET",...Ug];new Set(V0);var no=Y.createContext(null);no.displayName="DataRouter";var Jl=Y.createContext(null);Jl.displayName="DataRouterState";var G0=Y.createContext(!1),Fg=Y.createContext({isTransitioning:!1});Fg.displayName="ViewTransition";var W0=Y.createContext(new Map);W0.displayName="Fetchers";var X0=Y.createContext(null);X0.displayName="Await";var Qn=Y.createContext(null);Qn.displayName="Navigation";var ea=Y.createContext(null);ea.displayName="Location";var mi=Y.createContext({outlet:null,matches:[],isDataRoute:!1});mi.displayName="Route";var _d=Y.createContext(null);_d.displayName="RouteError";var Og="REACT_ROUTER_ERROR",j0="REDIRECT",$0="ROUTE_ERROR_RESPONSE";function Y0(s){if(s.startsWith(`${Og}:${j0}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function q0(s){if(s.startsWith(`${Og}:${$0}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new B0(e.status,e.statusText,e.data)}catch{}}function K0(s,{relative:e}={}){zt(ta(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=Y.useContext(Qn),{hash:a,pathname:l,search:c}=na(s,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Ti([t,l])),r.createHref({pathname:f,search:c,hash:a})}function ta(){return Y.useContext(ea)!=null}function Ci(){return zt(ta(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(ea).location}var kg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Bg(s){Y.useContext(Qn).static||Y.useLayoutEffect(s)}function xd(){let{isDataRoute:s}=Y.useContext(mi);return s?dx():Z0()}function Z0(){zt(ta(),"useNavigate() may be used only in the context of a <Router> component.");let s=Y.useContext(no),{basename:e,navigator:t}=Y.useContext(Qn),{matches:r}=Y.useContext(mi),{pathname:a}=Ci(),l=JSON.stringify(Dg(r)),c=Y.useRef(!1);return Bg(()=>{c.current=!0}),Y.useCallback((h,p={})=>{if(pi(c.current,kg),!c.current)return;if(typeof h=="number"){t.go(h);return}let g=vd(h,JSON.parse(l),a,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Ti([e,g.pathname])),(p.replace?t.replace:t.push)(g,p.state,p)},[e,t,l,a,s])}var Q0=Y.createContext(null);function J0(s){let e=Y.useContext(mi).outlet;return Y.useMemo(()=>e&&Y.createElement(Q0.Provider,{value:s},e),[e,s])}function ex(){let{matches:s}=Y.useContext(mi),e=s[s.length-1];return e?e.params:{}}function na(s,{relative:e}={}){let{matches:t}=Y.useContext(mi),{pathname:r}=Ci(),a=JSON.stringify(Dg(t));return Y.useMemo(()=>vd(s,JSON.parse(a),r,e==="path"),[s,a,r,e])}function tx(s,e){return zg(s,e)}function zg(s,e,t){var y;zt(ta(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=Y.useContext(Qn),{matches:a}=Y.useContext(mi),l=a[a.length-1],c=l?l.params:{},f=l?l.pathname:"/",h=l?l.pathnameBase:"/",p=l&&l.route;{let _=p&&p.path||"";Vg(f,!p||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let g=Ci(),v;if(e){let _=typeof e=="string"?to(e):e;zt(h==="/"||((y=_.pathname)==null?void 0:y.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${_.pathname}" was given in the \`location\` prop.`),v=_}else v=g;let x=v.pathname||"/",S=x;if(h!=="/"){let _=h.replace(/^\//,"").split("/");S="/"+x.replace(/^\//,"").split("/").slice(_.length).join("/")}let E=Pg(s,{pathname:S});pi(p||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),pi(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=ox(E&&E.map(_=>Object.assign({},_,{params:Object.assign({},c,_.params),pathname:Ti([h,r.encodeLocation?r.encodeLocation(_.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?h:Ti([h,r.encodeLocation?r.encodeLocation(_.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),a,t);return e&&M?Y.createElement(ea.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},M):M}function nx(){let s=fx(),e=z0(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},c=null;return console.error("Error handled by React Router default ErrorBoundary:",s),c=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:l},"ErrorBoundary")," or"," ",Y.createElement("code",{style:l},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),t?Y.createElement("pre",{style:a},t):null,c)}var ix=Y.createElement(nx,null),Hg=class extends Y.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const t=q0(s.digest);t&&(s=t)}let e=s!==void 0?Y.createElement(mi.Provider,{value:this.props.routeContext},Y.createElement(_d.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?Y.createElement(rx,{error:s},e):e}};Hg.contextType=G0;var Gc=new WeakMap;function rx({children:s,error:e}){let{basename:t}=Y.useContext(Qn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=Y0(e.digest);if(r){let a=Gc.get(e);if(a)throw a;let l=Ng(r.location,t);if(Ig&&!Gc.get(e))if(l.isExternal||r.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:r.replace}));throw Gc.set(e,c),c}return Y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return s}function sx({routeContext:s,match:e,children:t}){let r=Y.useContext(no);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),Y.createElement(mi.Provider,{value:s},t)}function ox(s,e=[],t){let r=t==null?void 0:t.state;if(s==null){if(!r)return null;if(r.errors)s=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let a=s,l=r==null?void 0:r.errors;if(l!=null){let g=a.findIndex(v=>v.route.id&&(l==null?void 0:l[v.route.id])!==void 0);zt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,g+1))}let c=!1,f=-1;if(t&&r){c=r.renderFallback;for(let g=0;g<a.length;g++){let v=a[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(f=g),v.route.id){let{loaderData:x,errors:S}=r,E=v.route.loader&&!x.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||E){t.isStatic&&(c=!0),f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}}let h=t==null?void 0:t.onError,p=r&&h?(g,v)=>{var x,S;h(g,{location:r.location,params:((S=(x=r.matches)==null?void 0:x[0])==null?void 0:S.params)??{},unstable_pattern:H0(r.matches),errorInfo:v})}:void 0;return a.reduceRight((g,v,x)=>{let S,E=!1,M=null,y=null;r&&(S=l&&v.route.id?l[v.route.id]:void 0,M=v.route.errorElement||ix,c&&(f<0&&x===0?(Vg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):f===x&&(E=!0,y=v.route.hydrateFallbackElement||null)));let _=e.concat(a.slice(0,x+1)),b=()=>{let L;return S?L=M:E?L=y:v.route.Component?L=Y.createElement(v.route.Component,null):v.route.element?L=v.route.element:L=g,Y.createElement(sx,{match:v,routeContext:{outlet:g,matches:_,isDataRoute:r!=null},children:L})};return r&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?Y.createElement(Hg,{location:r.location,revalidation:r.revalidation,component:M,error:S,children:b(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):b()},null)}function yd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ax(s){let e=Y.useContext(no);return zt(e,yd(s)),e}function lx(s){let e=Y.useContext(Jl);return zt(e,yd(s)),e}function ux(s){let e=Y.useContext(mi);return zt(e,yd(s)),e}function Sd(s){let e=ux(s),t=e.matches[e.matches.length-1];return zt(t.route.id,`${s} can only be used on routes that contain a unique "id"`),t.route.id}function cx(){return Sd("useRouteId")}function fx(){var r;let s=Y.useContext(_d),e=lx("useRouteError"),t=Sd("useRouteError");return s!==void 0?s:(r=e.errors)==null?void 0:r[t]}function dx(){let{router:s}=ax("useNavigate"),e=Sd("useNavigate"),t=Y.useRef(!1);return Bg(()=>{t.current=!0}),Y.useCallback(async(a,l={})=>{pi(t.current,kg),t.current&&(typeof a=="number"?await s.navigate(a):await s.navigate(a,{fromRouteId:e,...l}))},[s,e])}var Sm={};function Vg(s,e,t){!e&&!Sm[s]&&(Sm[s]=!0,pi(!1,t))}Y.memo(hx);function hx({routes:s,future:e,state:t,isStatic:r,onError:a}){return zg(s,void 0,{state:t,isStatic:r,onError:a})}function px(s){return J0(s.context)}function wr(s){zt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function mx({basename:s="/",children:e=null,location:t,navigationType:r="POP",navigator:a,static:l=!1,unstable_useTransitions:c}){zt(!ta(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),h=Y.useMemo(()=>({basename:f,navigator:a,static:l,unstable_useTransitions:c,future:{}}),[f,a,l,c]);typeof t=="string"&&(t=to(t));let{pathname:p="/",search:g="",hash:v="",state:x=null,key:S="default",unstable_mask:E}=t,M=Y.useMemo(()=>{let y=qi(p,f);return y==null?null:{location:{pathname:y,search:g,hash:v,state:x,key:S,unstable_mask:E},navigationType:r}},[f,p,g,v,x,S,r,E]);return pi(M!=null,`<Router basename="${f}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:Y.createElement(Qn.Provider,{value:h},Y.createElement(ea.Provider,{children:e,value:M}))}function gx({children:s,location:e}){return tx(Rf(s),e)}function Rf(s,e=[]){let t=[];return Y.Children.forEach(s,(r,a)=>{if(!Y.isValidElement(r))return;let l=[...e,a];if(r.type===Y.Fragment){t.push.apply(t,Rf(r.props.children,l));return}zt(r.type===wr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),zt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=Rf(r.props.children,l)),t.push(c)}),t}var Bl="get",zl="application/x-www-form-urlencoded";function eu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function vx(s){return eu(s)&&s.tagName.toLowerCase()==="button"}function _x(s){return eu(s)&&s.tagName.toLowerCase()==="form"}function xx(s){return eu(s)&&s.tagName.toLowerCase()==="input"}function yx(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Sx(s,e){return s.button===0&&(!e||e==="_self")&&!yx(s)}function Cf(s=""){return new URLSearchParams(typeof s=="string"||Array.isArray(s)||s instanceof URLSearchParams?s:Object.keys(s).reduce((e,t)=>{let r=s[t];return e.concat(Array.isArray(r)?r.map(a=>[t,a]):[[t,r]])},[]))}function Mx(s,e){let t=Cf(s);return e&&e.forEach((r,a)=>{t.has(a)||e.getAll(a).forEach(l=>{t.append(a,l)})}),t}var hl=null;function Ex(){if(hl===null)try{new FormData(document.createElement("form"),0),hl=!1}catch{hl=!0}return hl}var wx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Wc(s){return s!=null&&!wx.has(s)?(pi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zl}"`),null):s}function Tx(s,e){let t,r,a,l,c;if(_x(s)){let f=s.getAttribute("action");r=f?qi(f,e):null,t=s.getAttribute("method")||Bl,a=Wc(s.getAttribute("enctype"))||zl,l=new FormData(s)}else if(vx(s)||xx(s)&&(s.type==="submit"||s.type==="image")){let f=s.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=s.getAttribute("formaction")||f.getAttribute("action");if(r=h?qi(h,e):null,t=s.getAttribute("formmethod")||f.getAttribute("method")||Bl,a=Wc(s.getAttribute("formenctype"))||Wc(f.getAttribute("enctype"))||zl,l=new FormData(f,s),!Ex()){let{name:p,type:g,value:v}=s;if(g==="image"){let x=p?`${p}.`:"";l.append(`${x}x`,"0"),l.append(`${x}y`,"0")}else p&&l.append(p,v)}}else{if(eu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Bl,r=null,a=zl,c=s}return l&&a==="text/plain"&&(c=l,l=void 0),{action:r,method:t.toLowerCase(),encType:a,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Md(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ax(s,e,t,r){let a=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return t?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${r}`:a.pathname=`${a.pathname}.${r}`:a.pathname==="/"?a.pathname=`_root.${r}`:e&&qi(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${r}`,a}async function Rx(s,e){if(s.id in e)return e[s.id];try{let t=await import(s.module);return e[s.id]=t,t}catch(t){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Cx(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Px(s,e,t){let r=await Promise.all(s.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await Rx(l,t);return c.links?c.links():[]}return[]}));return Ix(r.flat(1).filter(Cx).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Mm(s,e,t,r,a,l){let c=(h,p)=>t[p]?h.route.id!==t[p].route.id:!0,f=(h,p)=>{var g;return t[p].pathname!==h.pathname||((g=t[p].route.path)==null?void 0:g.endsWith("*"))&&t[p].params["*"]!==h.params["*"]};return l==="assets"?e.filter((h,p)=>c(h,p)||f(h,p)):l==="data"?e.filter((h,p)=>{var v;let g=r.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(c(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(s,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function bx(s,e,{includeHydrateFallback:t}={}){return Lx(s.map(r=>{let a=e.routes[r.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function Lx(s){return[...new Set(s)]}function Dx(s){let e={},t=Object.keys(s).sort();for(let r of t)e[r]=s[r];return e}function Ix(s,e){let t=new Set;return new Set(e),s.reduce((r,a)=>{let l=JSON.stringify(Dx(a));return t.has(l)||(t.add(l),r.push({key:l,link:a})),r},[])}function Gg(){let s=Y.useContext(no);return Md(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Nx(){let s=Y.useContext(Jl);return Md(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Ed=Y.createContext(void 0);Ed.displayName="FrameworkContext";function Wg(){let s=Y.useContext(Ed);return Md(s,"You must render this element inside a <HydratedRouter> element"),s}function Ux(s,e){let t=Y.useContext(Ed),[r,a]=Y.useState(!1),[l,c]=Y.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=e,x=Y.useRef(null);Y.useEffect(()=>{if(s==="render"&&c(!0),s==="viewport"){let M=_=>{_.forEach(b=>{c(b.isIntersecting)})},y=new IntersectionObserver(M,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[s]),Y.useEffect(()=>{if(r){let M=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(M)}}},[r]);let S=()=>{a(!0)},E=()=>{a(!1),c(!1)};return t?s!=="intent"?[l,x,{}]:[l,x,{onFocus:Ho(f,S),onBlur:Ho(h,E),onMouseEnter:Ho(p,S),onMouseLeave:Ho(g,E),onTouchStart:Ho(v,S)}]:[!1,x,{}]}function Ho(s,e){return t=>{s&&s(t),t.defaultPrevented||e(t)}}function Fx({page:s,...e}){let{router:t}=Gg(),r=Y.useMemo(()=>Pg(t.routes,s,t.basename),[t.routes,s,t.basename]);return r?Y.createElement(kx,{page:s,matches:r,...e}):null}function Ox(s){let{manifest:e,routeModules:t}=Wg(),[r,a]=Y.useState([]);return Y.useEffect(()=>{let l=!1;return Px(s,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[s,e,t]),r}function kx({page:s,matches:e,...t}){let r=Ci(),{future:a,manifest:l,routeModules:c}=Wg(),{basename:f}=Gg(),{loaderData:h,matches:p}=Nx(),g=Y.useMemo(()=>Mm(s,e,p,l,r,"data"),[s,e,p,l,r]),v=Y.useMemo(()=>Mm(s,e,p,l,r,"assets"),[s,e,p,l,r]),x=Y.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let M=new Set,y=!1;if(e.forEach(b=>{var C;let L=l.routes[b.route.id];!L||!L.hasLoader||(!g.some(W=>W.route.id===b.route.id)&&b.route.id in h&&((C=c[b.route.id])!=null&&C.shouldRevalidate)||L.hasClientLoader?y=!0:M.add(b.route.id))}),M.size===0)return[];let _=Ax(s,f,a.unstable_trailingSlashAwareDataRequests,"data");return y&&M.size>0&&_.searchParams.set("_routes",e.filter(b=>M.has(b.route.id)).map(b=>b.route.id).join(",")),[_.pathname+_.search]},[f,a.unstable_trailingSlashAwareDataRequests,h,r,l,g,e,s,c]),S=Y.useMemo(()=>bx(v,l),[v,l]),E=Ox(v);return Y.createElement(Y.Fragment,null,x.map(M=>Y.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...t})),S.map(M=>Y.createElement("link",{key:M,rel:"modulepreload",href:M,...t})),E.map(({key:M,link:y})=>Y.createElement("link",{key:M,nonce:t.nonce,...y,crossOrigin:y.crossOrigin??t.crossOrigin})))}function Bx(...s){return e=>{s.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var zx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zx&&(window.__reactRouterVersion="7.13.1")}catch{}function Hx({basename:s,children:e,unstable_useTransitions:t,window:r}){let a=Y.useRef();a.current==null&&(a.current=g0({window:r,v5Compat:!0}));let l=a.current,[c,f]=Y.useState({action:l.action,location:l.location}),h=Y.useCallback(p=>{t===!1?f(p):Y.startTransition(()=>f(p))},[t]);return Y.useLayoutEffect(()=>l.listen(h),[l,h]),Y.createElement(mx,{basename:s,children:e,location:c.location,navigationType:c.action,navigator:l,unstable_useTransitions:t})}var Xg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jg=Y.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:a,reloadDocument:l,replace:c,unstable_mask:f,state:h,target:p,to:g,preventScrollReset:v,viewTransition:x,unstable_defaultShouldRevalidate:S,...E},M){let{basename:y,navigator:_,unstable_useTransitions:b}=Y.useContext(Qn),L=typeof g=="string"&&Xg.test(g),C=Ng(g,y);g=C.to;let W=K0(g,{relative:a}),F=Ci(),N=null;if(f){let ue=vd(f,[],F.unstable_mask?F.unstable_mask.pathname:"/",!0);y!=="/"&&(ue.pathname=ue.pathname==="/"?y:Ti([y,ue.pathname])),N=_.createHref(ue)}let[V,P,A]=Ux(r,E),B=Xx(g,{replace:c,unstable_mask:f,state:h,target:p,preventScrollReset:v,relative:a,viewTransition:x,unstable_defaultShouldRevalidate:S,unstable_useTransitions:b});function ee(ue){e&&e(ue),ue.defaultPrevented||B(ue)}let q=!(C.isExternal||l),le=Y.createElement("a",{...E,...A,href:(q?N:void 0)||C.absoluteURL||W,onClick:q?ee:e,ref:Bx(M,P),target:p,"data-discover":!L&&t==="render"?"true":void 0});return V&&!L?Y.createElement(Y.Fragment,null,le,Y.createElement(Fx,{page:W})):le});jg.displayName="Link";var Vx=Y.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:a=!1,style:l,to:c,viewTransition:f,children:h,...p},g){let v=na(c,{relative:p.relative}),x=Ci(),S=Y.useContext(Jl),{navigator:E,basename:M}=Y.useContext(Qn),y=S!=null&&Zx(v)&&f===!0,_=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,b=x.pathname,L=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(b=b.toLowerCase(),L=L?L.toLowerCase():null,_=_.toLowerCase()),L&&M&&(L=qi(L,M)||L);const C=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let W=b===_||!a&&b.startsWith(_)&&b.charAt(C)==="/",F=L!=null&&(L===_||!a&&L.startsWith(_)&&L.charAt(_.length)==="/"),N={isActive:W,isPending:F,isTransitioning:y},V=W?e:void 0,P;typeof r=="function"?P=r(N):P=[r,W?"active":null,F?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let A=typeof l=="function"?l(N):l;return Y.createElement(jg,{...p,"aria-current":V,className:P,ref:g,style:A,to:c,viewTransition:f},typeof h=="function"?h(N):h)});Vx.displayName="NavLink";var Gx=Y.forwardRef(({discover:s="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:a,state:l,method:c=Bl,action:f,onSubmit:h,relative:p,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:x,...S},E)=>{let{unstable_useTransitions:M}=Y.useContext(Qn),y=qx(),_=Kx(f,{relative:p}),b=c.toLowerCase()==="get"?"get":"post",L=typeof f=="string"&&Xg.test(f),C=W=>{if(h&&h(W),W.defaultPrevented)return;W.preventDefault();let F=W.nativeEvent.submitter,N=(F==null?void 0:F.getAttribute("formmethod"))||c,V=()=>y(F||W.currentTarget,{fetcherKey:e,method:N,navigate:t,replace:a,state:l,relative:p,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:x});M&&t!==!1?Y.startTransition(()=>V()):V()};return Y.createElement("form",{ref:E,method:b,action:_,onSubmit:r?h:C,...S,"data-discover":!L&&s==="render"?"true":void 0})});Gx.displayName="Form";function Wx(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $g(s){let e=Y.useContext(no);return zt(e,Wx(s)),e}function Xx(s,{target:e,replace:t,unstable_mask:r,state:a,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:p}={}){let g=xd(),v=Ci(),x=na(s,{relative:c});return Y.useCallback(S=>{if(Sx(S,e)){S.preventDefault();let E=t!==void 0?t:Zo(v)===Zo(x),M=()=>g(s,{replace:E,unstable_mask:r,state:a,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h});p?Y.startTransition(()=>M()):M()}},[v,g,x,t,r,a,e,s,l,c,f,h,p])}function jx(s){pi(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let e=Y.useRef(Cf(s)),t=Y.useRef(!1),r=Ci(),a=Y.useMemo(()=>Mx(r.search,t.current?null:e.current),[r.search]),l=xd(),c=Y.useCallback((f,h)=>{const p=Cf(typeof f=="function"?f(new URLSearchParams(a)):f);t.current=!0,l("?"+p,h)},[l,a]);return[a,c]}var $x=0,Yx=()=>`__${String(++$x)}__`;function qx(){let{router:s}=$g("useSubmit"),{basename:e}=Y.useContext(Qn),t=cx(),r=s.fetch,a=s.navigate;return Y.useCallback(async(l,c={})=>{let{action:f,method:h,encType:p,formData:g,body:v}=Tx(l,e);if(c.navigate===!1){let x=c.fetcherKey||Yx();await r(x,t,c.action||f,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:g,body:v,formMethod:c.method||h,formEncType:c.encType||p,flushSync:c.flushSync})}else await a(c.action||f,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:g,body:v,formMethod:c.method||h,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[r,a,e,t])}function Kx(s,{relative:e}={}){let{basename:t}=Y.useContext(Qn),r=Y.useContext(mi);zt(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),l={...na(s||".",{relative:e})},c=Ci();if(s==null){l.search=c.search;let f=new URLSearchParams(l.search),h=f.getAll("index");if(h.some(g=>g==="")){f.delete("index"),h.filter(v=>v).forEach(v=>f.append("index",v));let g=f.toString();l.search=g?`?${g}`:""}}return(!s||s===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Ti([t,l.pathname])),Zo(l)}function Zx(s,{relative:e}={}){let t=Y.useContext(Fg);zt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=$g("useViewTransitionState"),a=na(s,{relative:e});if(!t.isTransitioning)return!1;let l=qi(t.currentLocation.pathname,r)||t.currentLocation.pathname,c=qi(t.nextLocation.pathname,r)||t.nextLocation.pathname;return $l(a.pathname,c)!=null||$l(a.pathname,l)!=null}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="170",Qx=0,Em=1,Jx=2,Yg=1,qg=2,Xi=3,br=0,In=1,Ei=2,Cr=0,js=1,wm=2,Tm=3,Am=4,ey=5,es=100,ty=101,ny=102,iy=103,ry=104,sy=200,oy=201,ay=202,ly=203,Pf=204,bf=205,uy=206,cy=207,fy=208,dy=209,hy=210,py=211,my=212,gy=213,vy=214,Lf=0,Df=1,If=2,qs=3,Nf=4,Uf=5,Ff=6,Of=7,Td=0,_y=1,xy=2,Pr=0,yy=1,Sy=2,My=3,Ey=4,wy=5,Ty=6,Ay=7,Kg=300,Ks=301,Zs=302,kf=303,Bf=304,tu=306,zf=1e3,ns=1001,Hf=1002,hi=1003,Ry=1004,pl=1005,wi=1006,Xc=1007,is=1008,Ki=1009,Zg=1010,Qg=1011,Qo=1012,Ad=1013,ss=1014,ji=1015,ia=1016,Rd=1017,Cd=1018,Qs=1020,Jg=35902,ev=1021,tv=1022,di=1023,nv=1024,iv=1025,$s=1026,Js=1027,rv=1028,Pd=1029,sv=1030,bd=1031,Ld=1033,Hl=33776,Vl=33777,Gl=33778,Wl=33779,Vf=35840,Gf=35841,Wf=35842,Xf=35843,jf=36196,$f=37492,Yf=37496,qf=37808,Kf=37809,Zf=37810,Qf=37811,Jf=37812,ed=37813,td=37814,nd=37815,id=37816,rd=37817,sd=37818,od=37819,ad=37820,ld=37821,Xl=36492,ud=36494,cd=36495,ov=36283,fd=36284,dd=36285,hd=36286,Cy=3200,Py=3201,av=0,by=1,Ar="",Hn="srgb",io="srgb-linear",nu="linear",bt="srgb",Ls=7680,Rm=519,Ly=512,Dy=513,Iy=514,lv=515,Ny=516,Uy=517,Fy=518,Oy=519,Cm=35044,Pm="300 es",$i=2e3,Yl=2001;class ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jc=Math.PI/180,pd=180/Math.PI;function ra(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function Dn(s,e,t){return Math.max(e,Math.min(t,s))}function ky(s,e){return(s%e+e)%e}function $c(s,e,t){return(1-t)*s+t*e}function Vo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,t=0){wt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Dn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,r,a,l,c,f,h,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,p)}set(e,t,r,a,l,c,f,h,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],p=r[1],g=r[4],v=r[7],x=r[2],S=r[5],E=r[8],M=a[0],y=a[3],_=a[6],b=a[1],L=a[4],C=a[7],W=a[2],F=a[5],N=a[8];return l[0]=c*M+f*b+h*W,l[3]=c*y+f*L+h*F,l[6]=c*_+f*C+h*N,l[1]=p*M+g*b+v*W,l[4]=p*y+g*L+v*F,l[7]=p*_+g*C+v*N,l[2]=x*M+S*b+E*W,l[5]=x*y+S*L+E*F,l[8]=x*_+S*C+E*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8];return t*c*g-t*f*p-r*l*g+r*f*h+a*l*p-a*c*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],v=g*c-f*p,x=f*h-g*l,S=p*l-c*h,E=t*v+r*x+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=v*M,e[1]=(a*p-g*r)*M,e[2]=(f*r-a*c)*M,e[3]=x*M,e[4]=(g*t-a*h)*M,e[5]=(a*l-f*t)*M,e[6]=S*M,e[7]=(r*h-p*t)*M,e[8]=(c*t-r*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*f)+c+e,-a*p,a*h,-a*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Yc.makeScale(e,t)),this}rotate(e){return this.premultiply(Yc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yc=new ht;function uv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ql(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function By(){const s=ql("canvas");return s.style.display="block",s}const bm={};function Yo(s){s in bm||(bm[s]=!0,console.warn(s))}function zy(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function Hy(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Vy(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Et={enabled:!0,workingColorSpace:io,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===bt&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===bt&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ar?nu:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Lm=[.64,.33,.3,.6,.15,.06],Dm=[.2126,.7152,.0722],Im=[.3127,.329],Nm=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Um=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Et.define({[io]:{primaries:Lm,whitePoint:Im,transfer:nu,toXYZ:Nm,fromXYZ:Um,luminanceCoefficients:Dm,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:Lm,whitePoint:Im,transfer:bt,toXYZ:Nm,fromXYZ:Um,luminanceCoefficients:Dm,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}});let Ds;class Gy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ds===void 0&&(Ds=ql("canvas")),Ds.width=e.width,Ds.height=e.height;const r=Ds.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ql("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Yi(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Yi(t[r]/255)*255):t[r]=Yi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wy=0;class cv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=ra(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(qc(a[c].image)):l.push(qc(a[c]))}else l=qc(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function qc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Gy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xy=0;class Nn extends ro{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,r=ns,a=ns,l=wi,c=is,f=di,h=Ki,p=Nn.DEFAULT_ANISOTROPY,g=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=ra(),this.name="",this.source=new cv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zf:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case Hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zf:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case Hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Kg;Nn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],g=h[4],v=h[8],x=h[1],S=h[5],E=h[9],M=h[2],y=h[6],_=h[10];if(Math.abs(g-x)<.01&&Math.abs(v-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+M)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,C=(S+1)/2,W=(_+1)/2,F=(g+x)/4,N=(v+M)/4,V=(E+y)/4;return L>C&&L>W?L<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(L),a=F/r,l=N/r):C>W?C<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),r=F/a,l=V/a):W<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(W),r=N/l,a=V/l),this.set(r,a,l,t),this}let b=Math.sqrt((y-E)*(y-E)+(v-M)*(v-M)+(x-g)*(x-g));return Math.abs(b)<.001&&(b=1),this.x=(y-E)/b,this.y=(v-M)/b,this.z=(x-g)/b,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jy extends ro{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Nn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends jy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class fv extends Nn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=hi,this.minFilter=hi,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $y extends Nn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=hi,this.minFilter=hi,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sa{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,f){let h=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];const x=l[c+0],S=l[c+1],E=l[c+2],M=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f===1){e[t+0]=x,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(v!==M||h!==x||p!==S||g!==E){let y=1-f;const _=h*x+p*S+g*E+v*M,b=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const W=Math.sqrt(L),F=Math.atan2(W,_*b);y=Math.sin(y*F)/W,f=Math.sin(f*F)/W}const C=f*b;if(h=h*y+x*C,p=p*y+S*C,g=g*y+E*C,v=v*y+M*C,y===1-f){const W=1/Math.sqrt(h*h+p*p+g*g+v*v);h*=W,p*=W,g*=W,v*=W}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,a,l,c){const f=r[a],h=r[a+1],p=r[a+2],g=r[a+3],v=l[c],x=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+g*v+h*S-p*x,e[t+1]=h*E+g*x+p*v-f*S,e[t+2]=p*E+g*S+f*x-h*v,e[t+3]=g*E-f*v-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(r/2),g=f(a/2),v=f(l/2),x=h(r/2),S=h(a/2),E=h(l/2);switch(c){case"XYZ":this._x=x*g*v+p*S*E,this._y=p*S*v-x*g*E,this._z=p*g*E+x*S*v,this._w=p*g*v-x*S*E;break;case"YXZ":this._x=x*g*v+p*S*E,this._y=p*S*v-x*g*E,this._z=p*g*E-x*S*v,this._w=p*g*v+x*S*E;break;case"ZXY":this._x=x*g*v-p*S*E,this._y=p*S*v+x*g*E,this._z=p*g*E+x*S*v,this._w=p*g*v-x*S*E;break;case"ZYX":this._x=x*g*v-p*S*E,this._y=p*S*v+x*g*E,this._z=p*g*E-x*S*v,this._w=p*g*v+x*S*E;break;case"YZX":this._x=x*g*v+p*S*E,this._y=p*S*v+x*g*E,this._z=p*g*E-x*S*v,this._w=p*g*v-x*S*E;break;case"XZY":this._x=x*g*v-p*S*E,this._y=p*S*v-x*g*E,this._z=p*g*E+x*S*v,this._w=p*g*v+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],g=t[6],v=t[10],x=r+f+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(g-h)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,g=t._w;return this._x=r*g+c*f+a*p-l*h,this._y=a*g+c*h+l*f-r*p,this._z=l*g+c*p+r*h-a*f,this._w=c*g-r*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,f),v=Math.sin((1-t)*g)/p,x=Math.sin(t*g)/p;return this._w=c*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*a-f*r),g=2*(f*t-l*a),v=2*(l*r-c*t);return this.x=t+h*p+c*v-f*g,this.y=r+h*g+f*p-l*v,this.z=a+h*v+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-r*h,this.z=r*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Dn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kc=new Q,Fm=new sa;class oa{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ai):ai.fromBufferAttribute(l,c),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ml.copy(r.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),gl.subVectors(this.max,Go),Is.subVectors(e.a,Go),Ns.subVectors(e.b,Go),Us.subVectors(e.c,Go),_r.subVectors(Ns,Is),xr.subVectors(Us,Ns),jr.subVectors(Is,Us);let t=[0,-_r.z,_r.y,0,-xr.z,xr.y,0,-jr.z,jr.y,_r.z,0,-_r.x,xr.z,0,-xr.x,jr.z,0,-jr.x,-_r.y,_r.x,0,-xr.y,xr.x,0,-jr.y,jr.x,0];return!Zc(t,Is,Ns,Us,gl)||(t=[1,0,0,0,1,0,0,0,1],!Zc(t,Is,Ns,Us,gl))?!1:(vl.crossVectors(_r,xr),t=[vl.x,vl.y,vl.z],Zc(t,Is,Ns,Us,gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ai=new Q,ml=new oa,Is=new Q,Ns=new Q,Us=new Q,_r=new Q,xr=new Q,jr=new Q,Go=new Q,gl=new Q,vl=new Q,$r=new Q;function Zc(s,e,t,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){$r.fromArray(s,l);const f=a.x*Math.abs($r.x)+a.y*Math.abs($r.y)+a.z*Math.abs($r.z),h=e.dot($r),p=t.dot($r),g=r.dot($r);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>f)return!1}return!0}const Yy=new oa,Wo=new Q,Qc=new Q;class iu{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Yy.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const t=Wo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Wo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Qc)),this.expandByPoint(Wo.copy(e.center).sub(Qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new Q,Jc=new Q,_l=new Q,yr=new Q,ef=new Q,xl=new Q,tf=new Q;class dv{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Jc.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(Jc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(_l),f=yr.dot(this.direction),h=-yr.dot(_l),p=yr.lengthSq(),g=Math.abs(1-c*c);let v,x,S,E;if(g>0)if(v=c*h-f,x=c*f-h,E=l*g,v>=0)if(x>=-E)if(x<=E){const M=1/g;v*=M,x*=M,S=v*(v+c*x+2*f)+x*(c*v+x+2*h)+p}else x=l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*h)+p;else x=-l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*h)+p;else x<=-E?(v=Math.max(0,-(-c*l+f)),x=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+p):x<=E?(v=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+p):(v=Math.max(0,-(c*l+f)),x=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+p);else x=c>0?-l:l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Jc).addScaledVector(_l,x),S}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const r=Hi.dot(this.direction),a=Hi.dot(Hi)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,f,h;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),g>=0?(l=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),v>=0?(f=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(f=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,r,a,l){ef.subVectors(t,e),xl.subVectors(r,e),tf.crossVectors(ef,xl);let c=this.direction.dot(tf),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;yr.subVectors(this.origin,e);const h=f*this.direction.dot(xl.crossVectors(yr,xl));if(h<0)return null;const p=f*this.direction.dot(ef.cross(yr));if(p<0||h+p>c)return null;const g=-f*yr.dot(tf);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,r,a,l,c,f,h,p,g,v,x,S,E,M,y){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,p,g,v,x,S,E,M,y)}set(e,t,r,a,l,c,f,h,p,g,v,x,S,E,M,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=a,_[1]=l,_[5]=c,_[9]=f,_[13]=h,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=S,_[7]=E,_[11]=M,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Fs.setFromMatrixColumn(e,0).length(),l=1/Fs.setFromMatrixColumn(e,1).length(),c=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(a),p=Math.sin(a),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=c*g,S=c*v,E=f*g,M=f*v;t[0]=h*g,t[4]=-h*v,t[8]=p,t[1]=S+E*p,t[5]=x-M*p,t[9]=-f*h,t[2]=M-x*p,t[6]=E+S*p,t[10]=c*h}else if(e.order==="YXZ"){const x=h*g,S=h*v,E=p*g,M=p*v;t[0]=x+M*f,t[4]=E*f-S,t[8]=c*p,t[1]=c*v,t[5]=c*g,t[9]=-f,t[2]=S*f-E,t[6]=M+x*f,t[10]=c*h}else if(e.order==="ZXY"){const x=h*g,S=h*v,E=p*g,M=p*v;t[0]=x-M*f,t[4]=-c*v,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*g,t[9]=M-x*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const x=c*g,S=c*v,E=f*g,M=f*v;t[0]=h*g,t[4]=E*p-S,t[8]=x*p+M,t[1]=h*v,t[5]=M*p+x,t[9]=S*p-E,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,S=c*p,E=f*h,M=f*p;t[0]=h*g,t[4]=M-x*v,t[8]=E*v+S,t[1]=v,t[5]=c*g,t[9]=-f*g,t[2]=-p*g,t[6]=S*v+E,t[10]=x-M*v}else if(e.order==="XZY"){const x=c*h,S=c*p,E=f*h,M=f*p;t[0]=h*g,t[4]=-v,t[8]=p*g,t[1]=x*v+M,t[5]=c*g,t[9]=S*v-E,t[2]=E*v-S,t[6]=f*g,t[10]=M*v+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qy,e,Ky)}lookAt(e,t,r){const a=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Sr.crossVectors(r,Bn),Sr.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Sr.crossVectors(r,Bn)),Sr.normalize(),yl.crossVectors(Bn,Sr),a[0]=Sr.x,a[4]=yl.x,a[8]=Bn.x,a[1]=Sr.y,a[5]=yl.y,a[9]=Bn.y,a[2]=Sr.z,a[6]=yl.z,a[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],p=r[12],g=r[1],v=r[5],x=r[9],S=r[13],E=r[2],M=r[6],y=r[10],_=r[14],b=r[3],L=r[7],C=r[11],W=r[15],F=a[0],N=a[4],V=a[8],P=a[12],A=a[1],B=a[5],ee=a[9],q=a[13],le=a[2],ue=a[6],ae=a[10],ce=a[14],z=a[3],de=a[7],oe=a[11],U=a[15];return l[0]=c*F+f*A+h*le+p*z,l[4]=c*N+f*B+h*ue+p*de,l[8]=c*V+f*ee+h*ae+p*oe,l[12]=c*P+f*q+h*ce+p*U,l[1]=g*F+v*A+x*le+S*z,l[5]=g*N+v*B+x*ue+S*de,l[9]=g*V+v*ee+x*ae+S*oe,l[13]=g*P+v*q+x*ce+S*U,l[2]=E*F+M*A+y*le+_*z,l[6]=E*N+M*B+y*ue+_*de,l[10]=E*V+M*ee+y*ae+_*oe,l[14]=E*P+M*q+y*ce+_*U,l[3]=b*F+L*A+C*le+W*z,l[7]=b*N+L*B+C*ue+W*de,l[11]=b*V+L*ee+C*ae+W*oe,l[15]=b*P+L*q+C*ce+W*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],g=e[2],v=e[6],x=e[10],S=e[14],E=e[3],M=e[7],y=e[11],_=e[15];return E*(+l*h*v-a*p*v-l*f*x+r*p*x+a*f*S-r*h*S)+M*(+t*h*S-t*p*x+l*c*x-a*c*S+a*p*g-l*h*g)+y*(+t*p*v-t*f*S-l*c*v+r*c*S+l*f*g-r*p*g)+_*(-a*f*g-t*h*v+t*f*x+a*c*v-r*c*x+r*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],v=e[9],x=e[10],S=e[11],E=e[12],M=e[13],y=e[14],_=e[15],b=v*y*p-M*x*p+M*h*S-f*y*S-v*h*_+f*x*_,L=E*x*p-g*y*p-E*h*S+c*y*S+g*h*_-c*x*_,C=g*M*p-E*v*p+E*f*S-c*M*S-g*f*_+c*v*_,W=E*v*h-g*M*h-E*f*x+c*M*x+g*f*y-c*v*y,F=t*b+r*L+a*C+l*W;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return e[0]=b*N,e[1]=(M*x*l-v*y*l-M*a*S+r*y*S+v*a*_-r*x*_)*N,e[2]=(f*y*l-M*h*l+M*a*p-r*y*p-f*a*_+r*h*_)*N,e[3]=(v*h*l-f*x*l-v*a*p+r*x*p+f*a*S-r*h*S)*N,e[4]=L*N,e[5]=(g*y*l-E*x*l+E*a*S-t*y*S-g*a*_+t*x*_)*N,e[6]=(E*h*l-c*y*l-E*a*p+t*y*p+c*a*_-t*h*_)*N,e[7]=(c*x*l-g*h*l+g*a*p-t*x*p-c*a*S+t*h*S)*N,e[8]=C*N,e[9]=(E*v*l-g*M*l-E*r*S+t*M*S+g*r*_-t*v*_)*N,e[10]=(c*M*l-E*f*l+E*r*p-t*M*p-c*r*_+t*f*_)*N,e[11]=(g*f*l-c*v*l-g*r*p+t*v*p+c*r*S-t*f*S)*N,e[12]=W*N,e[13]=(g*M*a-E*v*a+E*r*x-t*M*x-g*r*y+t*v*y)*N,e[14]=(E*f*a-c*M*a-E*r*h+t*M*h+c*r*y-t*f*y)*N,e[15]=(c*v*a-g*f*a+g*r*h-t*v*h-c*r*x+t*f*x)*N,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,p=l*c,g=l*f;return this.set(p*c+r,p*f-a*h,p*h+a*f,0,p*f+a*h,g*f+r,g*h-a*c,0,p*h-a*f,g*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,g=c+c,v=f+f,x=l*p,S=l*g,E=l*v,M=c*g,y=c*v,_=f*v,b=h*p,L=h*g,C=h*v,W=r.x,F=r.y,N=r.z;return a[0]=(1-(M+_))*W,a[1]=(S+C)*W,a[2]=(E-L)*W,a[3]=0,a[4]=(S-C)*F,a[5]=(1-(x+_))*F,a[6]=(y+b)*F,a[7]=0,a[8]=(E+L)*N,a[9]=(y-b)*N,a[10]=(1-(x+M))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Fs.set(a[0],a[1],a[2]).length();const c=Fs.set(a[4],a[5],a[6]).length(),f=Fs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],li.copy(this);const p=1/l,g=1/c,v=1/f;return li.elements[0]*=p,li.elements[1]*=p,li.elements[2]*=p,li.elements[4]*=g,li.elements[5]*=g,li.elements[6]*=g,li.elements[8]*=v,li.elements[9]*=v,li.elements[10]*=v,t.setFromRotationMatrix(li),r.x=l,r.y=c,r.z=f,this}makePerspective(e,t,r,a,l,c,f=$i){const h=this.elements,p=2*l/(t-e),g=2*l/(r-a),v=(t+e)/(t-e),x=(r+a)/(r-a);let S,E;if(f===$i)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===Yl)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,c,f=$i){const h=this.elements,p=1/(t-e),g=1/(r-a),v=1/(c-l),x=(t+e)*p,S=(r+a)*g;let E,M;if(f===$i)E=(c+l)*v,M=-2*v;else if(f===Yl)E=l*v,M=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=M,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Fs=new Q,li=new Ht,qy=new Q(0,0,0),Ky=new Q(1,1,1),Sr=new Q,yl=new Q,Bn=new Q,Om=new Ht,km=new sa;class Ri{constructor(e=0,t=0,r=0,a=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],p=a[5],g=a[9],v=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Dn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Om,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return km.setFromEuler(this),this.setFromQuaternion(km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class hv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zy=0;const Bm=new Q,Os=new sa,Vi=new Ht,Sl=new Q,Xo=new Q,Qy=new Q,Jy=new sa,zm=new Q(1,0,0),Hm=new Q(0,1,0),Vm=new Q(0,0,1),Gm={type:"added"},eS={type:"removed"},ks={type:"childadded",child:null},nf={type:"childremoved",child:null};class on extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new Q,t=new Ri,r=new sa,a=new Q(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ht}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(zm,e)}rotateY(e){return this.rotateOnAxis(Hm,e)}rotateZ(e){return this.rotateOnAxis(Vm,e)}translateOnAxis(e,t){return Bm.copy(e).applyQuaternion(this.quaternion),this.position.add(Bm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zm,e)}translateY(e){return this.translateOnAxis(Hm,e)}translateZ(e){return this.translateOnAxis(Vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Sl.copy(e):Sl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Xo,Sl,this.up):Vi.lookAt(Sl,Xo,this.up),this.quaternion.setFromRotationMatrix(Vi),a&&(Vi.extractRotation(a.matrixWorld),Os.setFromRotationMatrix(Vi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gm),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eS),nf.child=e,this.dispatchEvent(nf),nf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gm),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,Qy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,Jy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const v=h[p];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),g=c(e.images),v=c(e.shapes),x=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}on.DEFAULT_UP=new Q(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new Q,Gi=new Q,rf=new Q,Wi=new Q,Bs=new Q,zs=new Q,Wm=new Q,sf=new Q,of=new Q,af=new Q,lf=new Wt,uf=new Wt,cf=new Wt;class fi{constructor(e=new Q,t=new Q,r=new Q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),ui.subVectors(e,t),a.cross(ui);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){ui.subVectors(a,t),Gi.subVectors(r,t),rf.subVectors(e,t);const c=ui.dot(ui),f=ui.dot(Gi),h=ui.dot(rf),p=Gi.dot(Gi),g=Gi.dot(rf),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const x=1/v,S=(p*h-f*g)*x,E=(c*g-f*h)*x;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,r,a,l,c,f,h){return this.getBarycoord(e,t,r,a,Wi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Wi.x),h.addScaledVector(c,Wi.y),h.addScaledVector(f,Wi.z),h)}static getInterpolatedAttribute(e,t,r,a,l,c){return lf.setScalar(0),uf.setScalar(0),cf.setScalar(0),lf.fromBufferAttribute(e,t),uf.fromBufferAttribute(e,r),cf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(lf,l.x),c.addScaledVector(uf,l.y),c.addScaledVector(cf,l.z),c}static isFrontFacing(e,t,r,a){return ui.subVectors(r,t),Gi.subVectors(e,t),ui.cross(Gi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),ui.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return fi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,f;Bs.subVectors(a,r),zs.subVectors(l,r),sf.subVectors(e,r);const h=Bs.dot(sf),p=zs.dot(sf);if(h<=0&&p<=0)return t.copy(r);of.subVectors(e,a);const g=Bs.dot(of),v=zs.dot(of);if(g>=0&&v<=g)return t.copy(a);const x=h*v-g*p;if(x<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(r).addScaledVector(Bs,c);af.subVectors(e,l);const S=Bs.dot(af),E=zs.dot(af);if(E>=0&&S<=E)return t.copy(l);const M=S*p-h*E;if(M<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(r).addScaledVector(zs,f);const y=g*E-S*v;if(y<=0&&v-g>=0&&S-E>=0)return Wm.subVectors(l,a),f=(v-g)/(v-g+(S-E)),t.copy(a).addScaledVector(Wm,f);const _=1/(y+M+x);return c=M*_,f=x*_,t.copy(r).addScaledVector(Bs,c).addScaledVector(zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function ff(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class vt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=Et.workingColorSpace){return this.r=e,this.g=t,this.b=r,Et.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=Et.workingColorSpace){if(e=ky(e,1),t=Dn(t,0,1),r=Dn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=ff(c,l,e+1/3),this.g=ff(c,l,e),this.b=ff(c,l,e-1/3)}return Et.toWorkingColorSpace(this,a),this}setStyle(e,t=Hn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hn){const r=pv[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Et.fromWorkingColorSpace(gn.copy(this),e),Math.round(Dn(gn.r*255,0,255))*65536+Math.round(Dn(gn.g*255,0,255))*256+Math.round(Dn(gn.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(gn.copy(this),t);const r=gn.r,a=gn.g,l=gn.b,c=Math.max(r,a,l),f=Math.min(r,a,l);let h,p;const g=(f+c)/2;if(f===c)h=0,p=0;else{const v=c-f;switch(p=g<=.5?v/(c+f):v/(2-c-f),c){case r:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-r)/v+2;break;case l:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Hn){Et.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,r=gn.g,a=gn.b;return e!==Hn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(Ml);const r=$c(Mr.h,Ml.h,t),a=$c(Mr.s,Ml.s,t),l=$c(Mr.l,Ml.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new vt;vt.NAMES=pv;let tS=0;class so extends ro{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=ra(),this.name="",this.blending=js,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pf,this.blendDst=bf,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==br&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Pf&&(r.blendSrc=this.blendSrc),this.blendDst!==bf&&(r.blendDst=this.blendDst),this.blendEquation!==es&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kl extends so{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new Q,El=new wt;class Ai{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Cm,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)El.fromBufferAttribute(this,t),El.applyMatrix3(e),this.setXY(t,El.x,El.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Vo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ln(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array),a=Ln(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array),a=Ln(a,this.array),l=Ln(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cm&&(e.usage=this.usage),e}}class mv extends Ai{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class gv extends Ai{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Vt extends Ai{constructor(e,t,r){super(new Float32Array(e),t,r)}}let nS=0;const Zn=new Ht,df=new on,Hs=new Q,zn=new oa,jo=new oa,sn=new Q;class Vn extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uv(e)?gv:mv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ht().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,r){return Zn.makeTranslation(e,t,r),this.applyMatrix4(Zn),this}scale(e,t,r){return Zn.makeScale(e,t,r),this.applyMatrix4(Zn),this}lookAt(e){return df.lookAt(e),df.updateMatrix(),this.applyMatrix4(df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Vt(r,3))}else{for(let r=0,a=t.count;r<a;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];zn.setFromBufferAttribute(l),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new iu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];jo.setFromBufferAttribute(f),this.morphTargetsRelative?(sn.addVectors(zn.min,jo.min),zn.expandByPoint(sn),sn.addVectors(zn.max,jo.max),zn.expandByPoint(sn)):(zn.expandByPoint(jo.min),zn.expandByPoint(jo.max))}zn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)sn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(sn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)sn.fromBufferAttribute(f,p),h&&(Hs.fromBufferAttribute(e,p),sn.add(Hs)),a=Math.max(a,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let V=0;V<r.count;V++)f[V]=new Q,h[V]=new Q;const p=new Q,g=new Q,v=new Q,x=new wt,S=new wt,E=new wt,M=new Q,y=new Q;function _(V,P,A){p.fromBufferAttribute(r,V),g.fromBufferAttribute(r,P),v.fromBufferAttribute(r,A),x.fromBufferAttribute(l,V),S.fromBufferAttribute(l,P),E.fromBufferAttribute(l,A),g.sub(p),v.sub(p),S.sub(x),E.sub(x);const B=1/(S.x*E.y-E.x*S.y);isFinite(B)&&(M.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(B),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(B),f[V].add(M),f[P].add(M),f[A].add(M),h[V].add(y),h[P].add(y),h[A].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let V=0,P=b.length;V<P;++V){const A=b[V],B=A.start,ee=A.count;for(let q=B,le=B+ee;q<le;q+=3)_(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const L=new Q,C=new Q,W=new Q,F=new Q;function N(V){W.fromBufferAttribute(a,V),F.copy(W);const P=f[V];L.copy(P),L.sub(W.multiplyScalar(W.dot(P))).normalize(),C.crossVectors(F,P);const B=C.dot(h[V])<0?-1:1;c.setXYZW(V,L.x,L.y,L.z,B)}for(let V=0,P=b.length;V<P;++V){const A=b[V],B=A.start,ee=A.count;for(let q=B,le=B+ee;q<le;q+=3)N(e.getX(q+0)),N(e.getX(q+1)),N(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new Q,l=new Q,c=new Q,f=new Q,h=new Q,p=new Q,g=new Q,v=new Q;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),M=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),c.fromBufferAttribute(t,y),g.subVectors(c,l),v.subVectors(a,l),g.cross(v),f.fromBufferAttribute(r,E),h.fromBufferAttribute(r,M),p.fromBufferAttribute(r,y),f.add(g),h.add(g),p.add(g),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),g.subVectors(c,l),v.subVectors(a,l),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(f,h){const p=f.array,g=f.itemSize,v=f.normalized,x=new p.constructor(h.length*g);let S=0,E=0;for(let M=0,y=h.length;M<y;M++){f.isInterleavedBufferAttribute?S=h[M]*f.data.stride+f.offset:S=h[M]*g;for(let _=0;_<g;_++)x[E++]=p[S++]}return new Ai(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vn,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let g=0,v=p.length;g<v;g++){const x=p[g],S=e(x,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let v=0,x=p.length;v<x;v++){const S=p[v];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],v=l[p];for(let x=0,S=v.length;x<S;x++)g.push(v[x].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xm=new Ht,Yr=new dv,wl=new iu,jm=new Q,Tl=new Q,Al=new Q,Rl=new Q,hf=new Q,Cl=new Q,$m=new Q,Pl=new Q;class It extends on{constructor(e=new Vn,t=new Kl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Cl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=f[h],v=l[h];g!==0&&(hf.fromBufferAttribute(v,e),c?Cl.addScaledVector(hf,g):Cl.addScaledVector(hf.sub(t),g))}t.add(Cl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wl.copy(r.boundingSphere),wl.applyMatrix4(l),Yr.copy(e.ray).recast(e.near),!(wl.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(wl,jm)===null||Yr.origin.distanceToSquared(jm)>(e.far-e.near)**2))&&(Xm.copy(l).invert(),Yr.copy(e.ray).applyMatrix4(Xm),!(r.boundingBox!==null&&Yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,x=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=x.length;E<M;E++){const y=x[E],_=c[y.materialIndex],b=Math.max(y.start,S.start),L=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=b,W=L;C<W;C+=3){const F=f.getX(C),N=f.getX(C+1),V=f.getX(C+2);a=bl(this,_,e,r,p,g,v,F,N,V),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let y=E,_=M;y<_;y+=3){const b=f.getX(y),L=f.getX(y+1),C=f.getX(y+2);a=bl(this,c,e,r,p,g,v,b,L,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,M=x.length;E<M;E++){const y=x[E],_=c[y.materialIndex],b=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=b,W=L;C<W;C+=3){const F=C,N=C+1,V=C+2;a=bl(this,_,e,r,p,g,v,F,N,V),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),M=Math.min(h.count,S.start+S.count);for(let y=E,_=M;y<_;y+=3){const b=y,L=y+1,C=y+2;a=bl(this,c,e,r,p,g,v,b,L,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function iS(s,e,t,r,a,l,c,f){let h;if(e.side===In?h=r.intersectTriangle(c,l,a,!0,f):h=r.intersectTriangle(a,l,c,e.side===br,f),h===null)return null;Pl.copy(f),Pl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Pl);return p<t.near||p>t.far?null:{distance:p,point:Pl.clone(),object:s}}function bl(s,e,t,r,a,l,c,f,h,p){s.getVertexPosition(f,Tl),s.getVertexPosition(h,Al),s.getVertexPosition(p,Rl);const g=iS(s,e,t,r,Tl,Al,Rl,$m);if(g){const v=new Q;fi.getBarycoord($m,Tl,Al,Rl,v),a&&(g.uv=fi.getInterpolatedAttribute(a,f,h,p,v,new wt)),l&&(g.uv1=fi.getInterpolatedAttribute(l,f,h,p,v,new wt)),c&&(g.normal=fi.getInterpolatedAttribute(c,f,h,p,v,new Q),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new Q,materialIndex:0};fi.getNormal(Tl,Al,Rl,x.normal),g.face=x,g.barycoord=v}return g}class oo extends Vn{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],g=[],v=[];let x=0,S=0;E("z","y","x",-1,-1,r,t,e,c,l,0),E("z","y","x",1,-1,r,t,-e,c,l,1),E("x","z","y",1,1,e,r,t,a,c,2),E("x","z","y",1,-1,e,r,-t,a,c,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(g,3)),this.setAttribute("uv",new Vt(v,2));function E(M,y,_,b,L,C,W,F,N,V,P){const A=C/N,B=W/V,ee=C/2,q=W/2,le=F/2,ue=N+1,ae=V+1;let ce=0,z=0;const de=new Q;for(let oe=0;oe<ae;oe++){const U=oe*B-q;for(let re=0;re<ue;re++){const Ue=re*A-ee;de[M]=Ue*b,de[y]=U*L,de[_]=le,p.push(de.x,de.y,de.z),de[M]=0,de[y]=0,de[_]=F>0?1:-1,g.push(de.x,de.y,de.z),v.push(re/N),v.push(1-oe/V),ce+=1}}for(let oe=0;oe<V;oe++)for(let U=0;U<N;U++){const re=x+U+ue*oe,Ue=x+U+ue*(oe+1),J=x+(U+1)+ue*(oe+1),he=x+(U+1)+ue*oe;h.push(re,Ue,he),h.push(Ue,J,he),z+=6}f.addGroup(S,z,P),S+=z,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Mn(s){const e={};for(let t=0;t<s.length;t++){const r=eo(s[t]);for(const a in r)e[a]=r[a]}return e}function rS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function vv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const sS={clone:eo,merge:Mn};var oS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lr extends so{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oS,this.fragmentShader=aS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=rS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class _v extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new Q,Ym=new wt,qm=new wt;class ci extends _v{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pd*2*Math.atan(Math.tan(jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,Ym,qm),t.subVectors(qm,Ym)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*r/p,a*=c.width/h,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vs=-90,Gs=1;class lS extends on{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ci(Vs,Gs,e,t);a.layers=this.layers,this.add(a);const l=new ci(Vs,Gs,e,t);l.layers=this.layers,this.add(l);const c=new ci(Vs,Gs,e,t);c.layers=this.layers,this.add(c);const f=new ci(Vs,Gs,e,t);f.layers=this.layers,this.add(f);const h=new ci(Vs,Gs,e,t);h.layers=this.layers,this.add(h);const p=new ci(Vs,Gs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===$i)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Yl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,c),e.setRenderTarget(r,2,a),e.render(t,f),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=M,e.setRenderTarget(r,5,a),e.render(t,g),e.setRenderTarget(v,x,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class xv extends Nn{constructor(e,t,r,a,l,c,f,h,p,g){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,r,a,l,c,f,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uS extends os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new xv(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new oo(5,5,5),l=new Lr({name:"CubemapFromEquirect",uniforms:eo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Cr});l.uniforms.tEquirect.value=t;const c=new It(a,l),f=t.minFilter;return t.minFilter===is&&(t.minFilter=wi),new lS(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}const pf=new Q,cS=new Q,fS=new ht;class Qr{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=pf.subVectors(r,t).cross(cS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(pf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||fS.getNormalMatrix(e),a=this.coplanarPoint(pf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new iu,Ll=new Q;class Dd{constructor(e=new Qr,t=new Qr,r=new Qr,a=new Qr,l=new Qr,c=new Qr){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=$i){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],p=a[4],g=a[5],v=a[6],x=a[7],S=a[8],E=a[9],M=a[10],y=a[11],_=a[12],b=a[13],L=a[14],C=a[15];if(r[0].setComponents(h-l,x-p,y-S,C-_).normalize(),r[1].setComponents(h+l,x+p,y+S,C+_).normalize(),r[2].setComponents(h+c,x+g,y+E,C+b).normalize(),r[3].setComponents(h-c,x-g,y-E,C-b).normalize(),r[4].setComponents(h-f,x-v,y-M,C-L).normalize(),t===$i)r[5].setComponents(h+f,x+v,y+M,C+L).normalize();else if(t===Yl)r[5].setComponents(f,v,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Ll.x=a.normal.x>0?e.max.x:e.min.x,Ll.y=a.normal.y>0?e.max.y:e.min.y,Ll.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yv(){let s=null,e=!1,t=null,r=null;function a(l,c){t(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function dS(s){const e=new WeakMap;function t(f,h){const p=f.array,g=f.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,h,p){const g=h.array,v=h.updateRanges;if(s.bindBuffer(p,f),v.length===0)s.bufferSubData(p,0,g);else{v.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<v.length;S++){const E=v[x],M=v[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++x,v[x]=M)}v.length=x+1;for(let S=0,E=v.length;S<E;S++){const M=v[S];s.bufferSubData(p,M.start*g.BYTES_PER_ELEMENT,g,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:c}}class rs extends Vn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(a),p=f+1,g=h+1,v=e/f,x=t/h,S=[],E=[],M=[],y=[];for(let _=0;_<g;_++){const b=_*x-c;for(let L=0;L<p;L++){const C=L*v-l;E.push(C,-b,0),M.push(0,0,1),y.push(L/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let b=0;b<f;b++){const L=b+p*_,C=b+p*(_+1),W=b+1+p*(_+1),F=b+1+p*_;S.push(L,C,F),S.push(C,W,F)}this.setIndex(S),this.setAttribute("position",new Vt(E,3)),this.setAttribute("normal",new Vt(M,3)),this.setAttribute("uv",new Vt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}var hS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pS=`#ifdef USE_ALPHAHASH
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
#endif`,mS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_S=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xS=`#ifdef USE_AOMAP
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
#endif`,yS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SS=`#ifdef USE_BATCHING
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
#endif`,MS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ES=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AS=`#ifdef USE_IRIDESCENCE
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
#endif`,RS=`#ifdef USE_BUMPMAP
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
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,FS=`#define PI 3.141592653589793
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
} // validated`,OS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kS=`vec3 transformedNormal = objectNormal;
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
#endif`,BS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GS="gl_FragColor = linearToOutputTexel( gl_FragColor );",WS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XS=`#ifdef USE_ENVMAP
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
#endif`,jS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$S=`#ifdef USE_ENVMAP
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
#endif`,YS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qS=`#ifdef USE_ENVMAP
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
#endif`,KS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eM=`#ifdef USE_GRADIENTMAP
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
}`,tM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rM=`uniform bool receiveShadow;
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
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,oM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cM=`PhysicalMaterial material;
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
#endif`,fM=`struct PhysicalMaterial {
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
}`,dM=`
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
#endif`,hM=`#if defined( RE_IndirectDiffuse )
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
#endif`,pM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_M=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MM=`#if defined( USE_POINTS_UV )
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
#endif`,EM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CM=`#ifdef USE_MORPHTARGETS
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
#endif`,PM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
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
#endif`,FM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$M=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZM=`float getShadowMask() {
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
}`,QM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JM=`#ifdef USE_SKINNING
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
#endif`,eE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tE=`#ifdef USE_SKINNING
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
#endif`,nE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oE=`#ifdef USE_TRANSMISSION
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
#endif`,aE=`#ifdef USE_TRANSMISSION
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
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hE=`uniform sampler2D t2D;
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
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`#include <common>
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
}`,xE=`#if DEPTH_PACKING == 3200
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
}`,yE=`#define DISTANCE
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
}`,SE=`#define DISTANCE
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`uniform float scale;
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
}`,TE=`uniform vec3 diffuse;
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
}`,AE=`#include <common>
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
}`,RE=`uniform vec3 diffuse;
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
}`,CE=`#define LAMBERT
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
}`,PE=`#define LAMBERT
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
}`,bE=`#define MATCAP
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
}`,LE=`#define MATCAP
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
}`,DE=`#define NORMAL
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
}`,IE=`#define NORMAL
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
}`,NE=`#define PHONG
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
}`,FE=`#define STANDARD
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
}`,OE=`#define STANDARD
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
}`,kE=`#define TOON
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
}`,BE=`#define TOON
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
}`,zE=`uniform float size;
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
}`,HE=`uniform vec3 diffuse;
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
}`,VE=`#include <common>
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
}`,GE=`uniform vec3 color;
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
}`,WE=`uniform float rotation;
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
}`,XE=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:hS,alphahash_pars_fragment:pS,alphamap_fragment:mS,alphamap_pars_fragment:gS,alphatest_fragment:vS,alphatest_pars_fragment:_S,aomap_fragment:xS,aomap_pars_fragment:yS,batching_pars_vertex:SS,batching_vertex:MS,begin_vertex:ES,beginnormal_vertex:wS,bsdfs:TS,iridescence_fragment:AS,bumpmap_pars_fragment:RS,clipping_planes_fragment:CS,clipping_planes_pars_fragment:PS,clipping_planes_pars_vertex:bS,clipping_planes_vertex:LS,color_fragment:DS,color_pars_fragment:IS,color_pars_vertex:NS,color_vertex:US,common:FS,cube_uv_reflection_fragment:OS,defaultnormal_vertex:kS,displacementmap_pars_vertex:BS,displacementmap_vertex:zS,emissivemap_fragment:HS,emissivemap_pars_fragment:VS,colorspace_fragment:GS,colorspace_pars_fragment:WS,envmap_fragment:XS,envmap_common_pars_fragment:jS,envmap_pars_fragment:$S,envmap_pars_vertex:YS,envmap_physical_pars_fragment:sM,envmap_vertex:qS,fog_vertex:KS,fog_pars_vertex:ZS,fog_fragment:QS,fog_pars_fragment:JS,gradientmap_pars_fragment:eM,lightmap_pars_fragment:tM,lights_lambert_fragment:nM,lights_lambert_pars_fragment:iM,lights_pars_begin:rM,lights_toon_fragment:oM,lights_toon_pars_fragment:aM,lights_phong_fragment:lM,lights_phong_pars_fragment:uM,lights_physical_fragment:cM,lights_physical_pars_fragment:fM,lights_fragment_begin:dM,lights_fragment_maps:hM,lights_fragment_end:pM,logdepthbuf_fragment:mM,logdepthbuf_pars_fragment:gM,logdepthbuf_pars_vertex:vM,logdepthbuf_vertex:_M,map_fragment:xM,map_pars_fragment:yM,map_particle_fragment:SM,map_particle_pars_fragment:MM,metalnessmap_fragment:EM,metalnessmap_pars_fragment:wM,morphinstance_vertex:TM,morphcolor_vertex:AM,morphnormal_vertex:RM,morphtarget_pars_vertex:CM,morphtarget_vertex:PM,normal_fragment_begin:bM,normal_fragment_maps:LM,normal_pars_fragment:DM,normal_pars_vertex:IM,normal_vertex:NM,normalmap_pars_fragment:UM,clearcoat_normal_fragment_begin:FM,clearcoat_normal_fragment_maps:OM,clearcoat_pars_fragment:kM,iridescence_pars_fragment:BM,opaque_fragment:zM,packing:HM,premultiplied_alpha_fragment:VM,project_vertex:GM,dithering_fragment:WM,dithering_pars_fragment:XM,roughnessmap_fragment:jM,roughnessmap_pars_fragment:$M,shadowmap_pars_fragment:YM,shadowmap_pars_vertex:qM,shadowmap_vertex:KM,shadowmask_pars_fragment:ZM,skinbase_vertex:QM,skinning_pars_vertex:JM,skinning_vertex:eE,skinnormal_vertex:tE,specularmap_fragment:nE,specularmap_pars_fragment:iE,tonemapping_fragment:rE,tonemapping_pars_fragment:sE,transmission_fragment:oE,transmission_pars_fragment:aE,uv_pars_fragment:lE,uv_pars_vertex:uE,uv_vertex:cE,worldpos_vertex:fE,background_vert:dE,background_frag:hE,backgroundCube_vert:pE,backgroundCube_frag:mE,cube_vert:gE,cube_frag:vE,depth_vert:_E,depth_frag:xE,distanceRGBA_vert:yE,distanceRGBA_frag:SE,equirect_vert:ME,equirect_frag:EE,linedashed_vert:wE,linedashed_frag:TE,meshbasic_vert:AE,meshbasic_frag:RE,meshlambert_vert:CE,meshlambert_frag:PE,meshmatcap_vert:bE,meshmatcap_frag:LE,meshnormal_vert:DE,meshnormal_frag:IE,meshphong_vert:NE,meshphong_frag:UE,meshphysical_vert:FE,meshphysical_frag:OE,meshtoon_vert:kE,meshtoon_frag:BE,points_vert:zE,points_frag:HE,shadow_vert:VE,shadow_frag:GE,sprite_vert:WE,sprite_frag:XE},De={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Mi={basic:{uniforms:Mn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Mn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new vt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Mn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Mn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Mn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new vt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Mn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Mn([De.points,De.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Mn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Mn([De.common,De.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Mn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Mn([De.sprite,De.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Mn([De.common,De.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Mn([De.lights,De.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Mi.physical={uniforms:Mn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Dl={r:0,b:0,g:0},Kr=new Ri,jE=new Ht;function $E(s,e,t,r,a,l,c){const f=new vt(0);let h=l===!0?0:1,p,g,v=null,x=0,S=null;function E(b){let L=b.isScene===!0?b.background:null;return L&&L.isTexture&&(L=(b.backgroundBlurriness>0?t:e).get(L)),L}function M(b){let L=!1;const C=E(b);C===null?_(f,h):C&&C.isColor&&(_(C,1),L=!0);const W=s.xr.getEnvironmentBlendMode();W==="additive"?r.buffers.color.setClear(0,0,0,1,c):W==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(b,L){const C=E(L);C&&(C.isCubeTexture||C.mapping===tu)?(g===void 0&&(g=new It(new oo(1,1,1),new Lr({name:"BackgroundCubeMaterial",uniforms:eo(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(W,F,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Kr.copy(L.backgroundRotation),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),g.material.uniforms.envMap.value=C,g.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(jE.makeRotationFromEuler(Kr)),g.material.toneMapped=Et.getTransfer(C.colorSpace)!==bt,(v!==C||x!==C.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=C,x=C.version,S=s.toneMapping),g.layers.enableAll(),b.unshift(g,g.geometry,g.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new It(new rs(2,2),new Lr({name:"BackgroundMaterial",uniforms:eo(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Et.getTransfer(C.colorSpace)!==bt,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||x!==C.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,v=C,x=C.version,S=s.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function _(b,L){b.getRGB(Dl,vv(s)),r.buffers.color.setClear(Dl.r,Dl.g,Dl.b,L,c)}return{getClearColor:function(){return f},setClearColor:function(b,L=1){f.set(b),h=L,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,_(f,h)},render:M,addToRenderList:y}}function YE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,c=!1;function f(A,B,ee,q,le){let ue=!1;const ae=v(q,ee,B);l!==ae&&(l=ae,p(l.object)),ue=S(A,q,ee,le),ue&&E(A,q,ee,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(ue||c)&&(c=!1,C(A,B,ee,q),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function h(){return s.createVertexArray()}function p(A){return s.bindVertexArray(A)}function g(A){return s.deleteVertexArray(A)}function v(A,B,ee){const q=ee.wireframe===!0;let le=r[A.id];le===void 0&&(le={},r[A.id]=le);let ue=le[B.id];ue===void 0&&(ue={},le[B.id]=ue);let ae=ue[q];return ae===void 0&&(ae=x(h()),ue[q]=ae),ae}function x(A){const B=[],ee=[],q=[];for(let le=0;le<t;le++)B[le]=0,ee[le]=0,q[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ee,attributeDivisors:q,object:A,attributes:{},index:null}}function S(A,B,ee,q){const le=l.attributes,ue=B.attributes;let ae=0;const ce=ee.getAttributes();for(const z in ce)if(ce[z].location>=0){const oe=le[z];let U=ue[z];if(U===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),oe===void 0||oe.attribute!==U||U&&oe.data!==U.data)return!0;ae++}return l.attributesNum!==ae||l.index!==q}function E(A,B,ee,q){const le={},ue=B.attributes;let ae=0;const ce=ee.getAttributes();for(const z in ce)if(ce[z].location>=0){let oe=ue[z];oe===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(oe=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(oe=A.instanceColor));const U={};U.attribute=oe,oe&&oe.data&&(U.data=oe.data),le[z]=U,ae++}l.attributes=le,l.attributesNum=ae,l.index=q}function M(){const A=l.newAttributes;for(let B=0,ee=A.length;B<ee;B++)A[B]=0}function y(A){_(A,0)}function _(A,B){const ee=l.newAttributes,q=l.enabledAttributes,le=l.attributeDivisors;ee[A]=1,q[A]===0&&(s.enableVertexAttribArray(A),q[A]=1),le[A]!==B&&(s.vertexAttribDivisor(A,B),le[A]=B)}function b(){const A=l.newAttributes,B=l.enabledAttributes;for(let ee=0,q=B.length;ee<q;ee++)B[ee]!==A[ee]&&(s.disableVertexAttribArray(ee),B[ee]=0)}function L(A,B,ee,q,le,ue,ae){ae===!0?s.vertexAttribIPointer(A,B,ee,le,ue):s.vertexAttribPointer(A,B,ee,q,le,ue)}function C(A,B,ee,q){M();const le=q.attributes,ue=ee.getAttributes(),ae=B.defaultAttributeValues;for(const ce in ue){const z=ue[ce];if(z.location>=0){let de=le[ce];if(de===void 0&&(ce==="instanceMatrix"&&A.instanceMatrix&&(de=A.instanceMatrix),ce==="instanceColor"&&A.instanceColor&&(de=A.instanceColor)),de!==void 0){const oe=de.normalized,U=de.itemSize,re=e.get(de);if(re===void 0)continue;const Ue=re.buffer,J=re.type,he=re.bytesPerElement,Te=J===s.INT||J===s.UNSIGNED_INT||de.gpuType===Ad;if(de.isInterleavedBufferAttribute){const xe=de.data,fe=xe.stride,Me=de.offset;if(xe.isInstancedInterleavedBuffer){for(let Fe=0;Fe<z.locationSize;Fe++)_(z.location+Fe,xe.meshPerAttribute);A.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Fe=0;Fe<z.locationSize;Fe++)y(z.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Fe=0;Fe<z.locationSize;Fe++)L(z.location+Fe,U/z.locationSize,J,oe,fe*he,(Me+U/z.locationSize*Fe)*he,Te)}else{if(de.isInstancedBufferAttribute){for(let xe=0;xe<z.locationSize;xe++)_(z.location+xe,de.meshPerAttribute);A.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let xe=0;xe<z.locationSize;xe++)y(z.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let xe=0;xe<z.locationSize;xe++)L(z.location+xe,U/z.locationSize,J,oe,U*he,U/z.locationSize*xe*he,Te)}}else if(ae!==void 0){const oe=ae[ce];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(z.location,oe);break;case 3:s.vertexAttrib3fv(z.location,oe);break;case 4:s.vertexAttrib4fv(z.location,oe);break;default:s.vertexAttrib1fv(z.location,oe)}}}}b()}function W(){V();for(const A in r){const B=r[A];for(const ee in B){const q=B[ee];for(const le in q)g(q[le].object),delete q[le];delete B[ee]}delete r[A]}}function F(A){if(r[A.id]===void 0)return;const B=r[A.id];for(const ee in B){const q=B[ee];for(const le in q)g(q[le].object),delete q[le];delete B[ee]}delete r[A.id]}function N(A){for(const B in r){const ee=r[B];if(ee[A.id]===void 0)continue;const q=ee[A.id];for(const le in q)g(q[le].object),delete q[le];delete ee[A.id]}}function V(){P(),c=!0,l!==a&&(l=a,p(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:V,resetDefaultState:P,dispose:W,releaseStatesOfGeometry:F,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:y,disableUnusedAttributes:b}}function qE(s,e,t){let r;function a(p){r=p}function l(p,g){s.drawArrays(r,p,g),t.update(g,r,1)}function c(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),t.update(g,r,v))}function f(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];t.update(S,r,1)}function h(p,g,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],g[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let E=0;for(let M=0;M<v;M++)E+=g[M]*x[M];t.update(E,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function KE(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(N){return!(N!==di&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(N){const V=N===ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Ki&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ji&&!V)}function h(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),W=E>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:W,maxSamples:F}}function ZE(s){const e=this;let t=null,r=0,a=!1,l=!1;const c=new Qr,f=new ht,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||a;return a=x,r=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){t=g(v,x,0)},this.setState=function(v,x,S){const E=v.clippingPlanes,M=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!a||E===null||E.length===0||l&&!y)l?g(null):p();else{const b=l?0:r,L=b*4;let C=_.clippingState||null;h.value=C,C=g(E,x,L,S);for(let W=0;W!==L;++W)C[W]=t[W];_.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,S,E){const M=v!==null?v.length:0;let y=null;if(M!==0){if(y=h.value,E!==!0||y===null){const _=S+M*4,b=x.matrixWorldInverse;f.getNormalMatrix(b),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,C=S;L!==M;++L,C+=4)c.copy(v[L]).applyMatrix4(b,f),c.normal.toArray(y,C),y[C+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function QE(s){let e=new WeakMap;function t(c,f){return f===kf?c.mapping=Ks:f===Bf&&(c.mapping=Zs),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===kf||f===Bf)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new uS(h.height);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class Id extends _v{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xs=4,Km=[.125,.215,.35,.446,.526,.582],ts=20,mf=new Id,Zm=new vt;let gf=null,vf=0,_f=0,xf=!1;const Jr=(1+Math.sqrt(5))/2,Ws=1/Jr,Qm=[new Q(-Jr,Ws,0),new Q(Jr,Ws,0),new Q(-Ws,0,Jr),new Q(Ws,0,Jr),new Q(0,Jr,-Ws),new Q(0,Jr,Ws),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class Jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){gf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gf,vf,_f),this._renderer.xr.enabled=xf,e.scissorTest=!1,Il(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:ia,format:di,colorSpace:io,depthBuffer:!1},a=eg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eg(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JE(l)),this._blurMaterial=ew(l,e,t)}return a}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,mf)}_sceneToCubeUV(e,t,r,a){const f=new ci(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(Zm),g.toneMapping=Pr,g.autoClear=!1;const S=new Kl({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),E=new It(new oo,S);let M=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,M=!0):(S.color.copy(Zm),M=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(f.up.set(0,h[_],0),f.lookAt(p[_],0,0)):b===1?(f.up.set(0,0,h[_]),f.lookAt(0,p[_],0)):(f.up.set(0,h[_],0),f.lookAt(0,0,p[_]));const L=this._cubeSize;Il(a,b*L,_>2?L:0,L,L),g.setRenderTarget(a),M&&g.render(E,f),g.render(e,f)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Ks||e.mapping===Zs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new It(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Il(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,mf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Qm[(a-l-1)%Qm.length];this._blur(e,l-1,l,c,f)}t.autoClear=r}_blur(e,t,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new It(this._lodPlanes[a],p),x=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ts-1),M=l/E,y=isFinite(l)?1+Math.floor(g*M):ts;y>ts&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ts}`);const _=[];let b=0;for(let N=0;N<ts;++N){const V=N/M,P=Math.exp(-V*V/2);_.push(P),N===0?b+=P:N<y&&(b+=2*P)}for(let N=0;N<_.length;N++)_[N]=_[N]/b;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-r;const C=this._sizeLods[a],W=3*C*(a>L-Xs?a-L+Xs:0),F=4*(this._cubeSize-C);Il(t,W,F,3*C,2*C),h.setRenderTarget(t),h.render(v,mf)}}function JE(s){const e=[],t=[],r=[];let a=s;const l=s-Xs+1+Km.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let h=1/f;c>s-Xs?h=Km[c-s+Xs-1]:c===0&&(h=0),r.push(h);const p=1/(f-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,M=3,y=2,_=1,b=new Float32Array(M*E*S),L=new Float32Array(y*E*S),C=new Float32Array(_*E*S);for(let F=0;F<S;F++){const N=F%3*2/3-1,V=F>2?0:-1,P=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];b.set(P,M*E*F),L.set(x,y*E*F);const A=[F,F,F,F,F,F];C.set(A,_*E*F)}const W=new Vn;W.setAttribute("position",new Ai(b,M)),W.setAttribute("uv",new Ai(L,y)),W.setAttribute("faceIndex",new Ai(C,_)),e.push(W),a>Xs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function eg(s,e,t){const r=new os(s,e,t);return r.texture.mapping=tu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Il(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function ew(s,e,t){const r=new Float32Array(ts),a=new Q(0,1,0);return new Lr({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function tg(){return new Lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function ng(){return new Lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Nd(){return`

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
	`}function tw(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,p=h===kf||h===Bf,g=h===Ks||h===Zs;if(p||g){let v=e.get(f);const x=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new Jm(s)),v=p?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&a(S)?(t===null&&(t=new Jm(s)),v=p?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function a(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function nw(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Yo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function iw(s,e,t,r){const a={},l=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const M=x.morphAttributes[E];for(let y=0,_=M.length;y<_;y++)e.remove(M[y])}x.removeEventListener("dispose",c),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(v,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,t.memory.geometries++),x}function h(v){const x=v.attributes;for(const E in x)e.update(x[E],s.ARRAY_BUFFER);const S=v.morphAttributes;for(const E in S){const M=S[E];for(let y=0,_=M.length;y<_;y++)e.update(M[y],s.ARRAY_BUFFER)}}function p(v){const x=[],S=v.index,E=v.attributes.position;let M=0;if(S!==null){const b=S.array;M=S.version;for(let L=0,C=b.length;L<C;L+=3){const W=b[L+0],F=b[L+1],N=b[L+2];x.push(W,F,F,N,N,W)}}else if(E!==void 0){const b=E.array;M=E.version;for(let L=0,C=b.length/3-1;L<C;L+=3){const W=L+0,F=L+1,N=L+2;x.push(W,F,F,N,N,W)}}else return;const y=new(uv(x)?gv:mv)(x,1);y.version=M;const _=l.get(v);_&&e.remove(_),l.set(v,y)}function g(v){const x=l.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:g}}function rw(s,e,t){let r;function a(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,S){s.drawElements(r,S,l,x*c),t.update(S,r,1)}function p(x,S,E){E!==0&&(s.drawElementsInstanced(r,S,l,x*c,E),t.update(S,r,E))}function g(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,E);let y=0;for(let _=0;_<E;_++)y+=S[_];t.update(y,r,1)}function v(x,S,E,M){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/c,S[_],M[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,M,0,E);let _=0;for(let b=0;b<E;b++)_+=S[b]*M[b];t.update(_,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function sw(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function ow(s,e,t){const r=new WeakMap,a=new Wt;function l(c,f,h){const p=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(f);if(x===void 0||x.count!==v){let A=function(){V.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var S=A;x!==void 0&&x.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let C=0;E===!0&&(C=1),M===!0&&(C=2),y===!0&&(C=3);let W=f.attributes.position.count*C,F=1;W>e.maxTextureSize&&(F=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const N=new Float32Array(W*F*4*v),V=new fv(N,W,F,v);V.type=ji,V.needsUpdate=!0;const P=C*4;for(let B=0;B<v;B++){const ee=_[B],q=b[B],le=L[B],ue=W*F*4*B;for(let ae=0;ae<ee.count;ae++){const ce=ae*P;E===!0&&(a.fromBufferAttribute(ee,ae),N[ue+ce+0]=a.x,N[ue+ce+1]=a.y,N[ue+ce+2]=a.z,N[ue+ce+3]=0),M===!0&&(a.fromBufferAttribute(q,ae),N[ue+ce+4]=a.x,N[ue+ce+5]=a.y,N[ue+ce+6]=a.z,N[ue+ce+7]=0),y===!0&&(a.fromBufferAttribute(le,ae),N[ue+ce+8]=a.x,N[ue+ce+9]=a.y,N[ue+ce+10]=a.z,N[ue+ce+11]=le.itemSize===4?a.w:1)}}x={count:v,texture:V,size:new wt(W,F)},r.set(f,x),f.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const M=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function aw(s,e,t,r){let a=new WeakMap;function l(h){const p=r.render.frame,g=h.geometry,v=e.get(h,g);if(a.get(v)!==p&&(e.update(v),a.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return v}function c(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}class Sv extends Nn{constructor(e,t,r,a,l,c,f,h,p,g=$s){if(g!==$s&&g!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===$s&&(r=ss),r===void 0&&g===Js&&(r=Qs),super(null,a,l,c,f,h,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:hi,this.minFilter=h!==void 0?h:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mv=new Nn,ig=new Sv(1,1),Ev=new fv,wv=new $y,Tv=new xv,rg=[],sg=[],og=new Float32Array(16),ag=new Float32Array(9),lg=new Float32Array(4);function ao(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=rg[a];if(l===void 0&&(l=new Float32Array(a),rg[a]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function Qt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Jt(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function ru(s,e){let t=sg[e];t===void 0&&(t=new Int32Array(e),sg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function lw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function uw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2fv(this.addr,e),Jt(t,e)}}function cw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;s.uniform3fv(this.addr,e),Jt(t,e)}}function fw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4fv(this.addr,e),Jt(t,e)}}function dw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,r))return;lg.set(r),s.uniformMatrix2fv(this.addr,!1,lg),Jt(t,r)}}function hw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,r))return;ag.set(r),s.uniformMatrix3fv(this.addr,!1,ag),Jt(t,r)}}function pw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,r))return;og.set(r),s.uniformMatrix4fv(this.addr,!1,og),Jt(t,r)}}function mw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function gw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2iv(this.addr,e),Jt(t,e)}}function vw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3iv(this.addr,e),Jt(t,e)}}function _w(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4iv(this.addr,e),Jt(t,e)}}function xw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function yw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2uiv(this.addr,e),Jt(t,e)}}function Sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3uiv(this.addr,e),Jt(t,e)}}function Mw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4uiv(this.addr,e),Jt(t,e)}}function Ew(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(ig.compareFunction=lv,l=ig):l=Mv,t.setTexture2D(e||l,a)}function ww(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||wv,a)}function Tw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Tv,a)}function Aw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Ev,a)}function Rw(s){switch(s){case 5126:return lw;case 35664:return uw;case 35665:return cw;case 35666:return fw;case 35674:return dw;case 35675:return hw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return gw;case 35668:case 35672:return vw;case 35669:case 35673:return _w;case 5125:return xw;case 36294:return yw;case 36295:return Sw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return ww;case 35680:case 36300:case 36308:case 36293:return Tw;case 36289:case 36303:case 36311:case 36292:return Aw}}function Cw(s,e){s.uniform1fv(this.addr,e)}function Pw(s,e){const t=ao(e,this.size,2);s.uniform2fv(this.addr,t)}function bw(s,e){const t=ao(e,this.size,3);s.uniform3fv(this.addr,t)}function Lw(s,e){const t=ao(e,this.size,4);s.uniform4fv(this.addr,t)}function Dw(s,e){const t=ao(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Iw(s,e){const t=ao(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Nw(s,e){const t=ao(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Uw(s,e){s.uniform1iv(this.addr,e)}function Fw(s,e){s.uniform2iv(this.addr,e)}function Ow(s,e){s.uniform3iv(this.addr,e)}function kw(s,e){s.uniform4iv(this.addr,e)}function Bw(s,e){s.uniform1uiv(this.addr,e)}function zw(s,e){s.uniform2uiv(this.addr,e)}function Hw(s,e){s.uniform3uiv(this.addr,e)}function Vw(s,e){s.uniform4uiv(this.addr,e)}function Gw(s,e,t){const r=this.cache,a=e.length,l=ru(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),Jt(r,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||Mv,l[c])}function Ww(s,e,t){const r=this.cache,a=e.length,l=ru(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),Jt(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||wv,l[c])}function Xw(s,e,t){const r=this.cache,a=e.length,l=ru(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),Jt(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Tv,l[c])}function jw(s,e,t){const r=this.cache,a=e.length,l=ru(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),Jt(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Ev,l[c])}function $w(s){switch(s){case 5126:return Cw;case 35664:return Pw;case 35665:return bw;case 35666:return Lw;case 35674:return Dw;case 35675:return Iw;case 35676:return Nw;case 5124:case 35670:return Uw;case 35667:case 35671:return Fw;case 35668:case 35672:return Ow;case 35669:case 35673:return kw;case 5125:return Bw;case 36294:return zw;case 36295:return Hw;case 36296:return Vw;case 35678:case 36198:case 36298:case 36306:case 35682:return Gw;case 35679:case 36299:case 36307:return Ww;case 35680:case 36300:case 36308:case 36293:return Xw;case 36289:case 36303:case 36311:case 36292:return jw}}class Yw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Rw(t.type)}}class qw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$w(t.type)}}class Kw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const yf=/(\w+)(\])?(\[|\.)?/g;function ug(s,e){s.seq.push(e),s.map[e.id]=e}function Zw(s,e,t){const r=s.name,a=r.length;for(yf.lastIndex=0;;){const l=yf.exec(r),c=yf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===a){ug(t,p===void 0?new Yw(f,s,e):new qw(f,s,e));break}else{let v=t.map[f];v===void 0&&(v=new Kw(f),ug(t,v)),t=v}}}class jl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);Zw(l,c,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function cg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Qw=37297;let Jw=0;function eT(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const fg=new ht;function tT(s){Et._getMatrix(fg,Et.workingColorSpace,s);const e=`mat3( ${fg.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(s)){case nu:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function dg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+eT(s.getShaderSource(e),c)}else return a}function nT(s,e){const t=tT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function iT(s,e){let t;switch(e){case yy:t="Linear";break;case Sy:t="Reinhard";break;case My:t="Cineon";break;case Ey:t="ACESFilmic";break;case Ty:t="AgX";break;case Ay:t="Neutral";break;case wy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nl=new Q;function rT(){Et.getLuminanceCoefficients(Nl);const s=Nl.x.toFixed(4),e=Nl.y.toFixed(4),t=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function oT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function aT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function qo(s){return s!==""}function hg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lT=/^[ \t]*#include +<([\w\d./]+)>/gm;function md(s){return s.replace(lT,cT)}const uT=new Map;function cT(s,e){let t=pt[e];if(t===void 0){const r=uT.get(e);if(r!==void 0)t=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return md(t)}const fT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mg(s){return s.replace(fT,dT)}function dT(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function gg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function hT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Yg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===qg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function pT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case tu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function gT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Td:e="ENVMAP_BLENDING_MULTIPLY";break;case _y:e="ENVMAP_BLENDING_MIX";break;case xy:e="ENVMAP_BLENDING_ADD";break}return e}function vT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function _T(s,e,t,r){const a=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=hT(t),p=pT(t),g=mT(t),v=gT(t),x=vT(t),S=sT(t),E=oT(l),M=a.createProgram();let y,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(qo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(qo).join(`
`),_.length>0&&(_+=`
`)):(y=[gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),_=[gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pr?"#define TONE_MAPPING":"",t.toneMapping!==Pr?pt.tonemapping_pars_fragment:"",t.toneMapping!==Pr?iT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,nT("linearToOutputTexel",t.outputColorSpace),rT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qo).join(`
`)),c=md(c),c=hg(c,t),c=pg(c,t),f=md(f),f=hg(f,t),f=pg(f,t),c=mg(c),f=mg(f),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===Pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=b+y+c,C=b+_+f,W=cg(a,a.VERTEX_SHADER,L),F=cg(a,a.FRAGMENT_SHADER,C);a.attachShader(M,W),a.attachShader(M,F),t.index0AttributeName!==void 0?a.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function N(B){if(s.debug.checkShaderErrors){const ee=a.getProgramInfoLog(M).trim(),q=a.getShaderInfoLog(W).trim(),le=a.getShaderInfoLog(F).trim();let ue=!0,ae=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(ue=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,M,W,F);else{const ce=dg(a,W,"vertex"),z=dg(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ee+`
`+ce+`
`+z)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(q===""||le==="")&&(ae=!1);ae&&(B.diagnostics={runnable:ue,programLog:ee,vertexShader:{log:q,prefix:y},fragmentShader:{log:le,prefix:_}})}a.deleteShader(W),a.deleteShader(F),V=new jl(a,M),P=aT(a,M)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(M,Qw)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jw++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=W,this.fragmentShader=F,this}let xT=0;class yT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new ST(e),t.set(e,r)),r}}class ST{constructor(e){this.id=xT++,this.code=e,this.usedTimes=0}}function MT(s,e,t,r,a,l,c){const f=new hv,h=new yT,p=new Set,g=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(P){return p.add(P),P===0?"uv":`uv${P}`}function y(P,A,B,ee,q){const le=ee.fog,ue=q.geometry,ae=P.isMeshStandardMaterial?ee.environment:null,ce=(P.isMeshStandardMaterial?t:e).get(P.envMap||ae),z=ce&&ce.mapping===tu?ce.image.height:null,de=E[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const oe=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,U=oe!==void 0?oe.length:0;let re=0;ue.morphAttributes.position!==void 0&&(re=1),ue.morphAttributes.normal!==void 0&&(re=2),ue.morphAttributes.color!==void 0&&(re=3);let Ue,J,he,Te;if(de){const St=Mi[de];Ue=St.vertexShader,J=St.fragmentShader}else Ue=P.vertexShader,J=P.fragmentShader,h.update(P),he=h.getVertexShaderID(P),Te=h.getFragmentShaderID(P);const xe=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),Me=q.isInstancedMesh===!0,Fe=q.isBatchedMesh===!0,tt=!!P.map,ot=!!P.matcap,et=!!ce,O=!!P.aoMap,en=!!P.lightMap,ct=!!P.bumpMap,at=!!P.normalMap,Ke=!!P.displacementMap,yt=!!P.emissiveMap,Ye=!!P.metalnessMap,D=!!P.roughnessMap,T=P.anisotropy>0,Z=P.clearcoat>0,ge=P.dispersion>0,ve=P.iridescence>0,pe=P.sheen>0,Ve=P.transmission>0,be=T&&!!P.anisotropyMap,Oe=Z&&!!P.clearcoatMap,ft=Z&&!!P.clearcoatNormalMap,we=Z&&!!P.clearcoatRoughnessMap,Pe=ve&&!!P.iridescenceMap,Ze=ve&&!!P.iridescenceThicknessMap,nt=pe&&!!P.sheenColorMap,ze=pe&&!!P.sheenRoughnessMap,mt=!!P.specularMap,lt=!!P.specularColorMap,Ct=!!P.specularIntensityMap,G=Ve&&!!P.transmissionMap,Le=Ve&&!!P.thicknessMap,se=!!P.gradientMap,me=!!P.alphaMap,Ne=P.alphaTest>0,Ie=!!P.alphaHash,ut=!!P.extensions;let Nt=Pr;P.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Nt=s.toneMapping);const Yt={shaderID:de,shaderType:P.type,shaderName:P.name,vertexShader:Ue,fragmentShader:J,defines:P.defines,customVertexShaderID:he,customFragmentShaderID:Te,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Fe,batchingColor:Fe&&q._colorsTexture!==null,instancing:Me,instancingColor:Me&&q.instanceColor!==null,instancingMorph:Me&&q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:io,alphaToCoverage:!!P.alphaToCoverage,map:tt,matcap:ot,envMap:et,envMapMode:et&&ce.mapping,envMapCubeUVHeight:z,aoMap:O,lightMap:en,bumpMap:ct,normalMap:at,displacementMap:x&&Ke,emissiveMap:yt,normalMapObjectSpace:at&&P.normalMapType===by,normalMapTangentSpace:at&&P.normalMapType===av,metalnessMap:Ye,roughnessMap:D,anisotropy:T,anisotropyMap:be,clearcoat:Z,clearcoatMap:Oe,clearcoatNormalMap:ft,clearcoatRoughnessMap:we,dispersion:ge,iridescence:ve,iridescenceMap:Pe,iridescenceThicknessMap:Ze,sheen:pe,sheenColorMap:nt,sheenRoughnessMap:ze,specularMap:mt,specularColorMap:lt,specularIntensityMap:Ct,transmission:Ve,transmissionMap:G,thicknessMap:Le,gradientMap:se,opaque:P.transparent===!1&&P.blending===js&&P.alphaToCoverage===!1,alphaMap:me,alphaTest:Ne,alphaHash:Ie,combine:P.combine,mapUv:tt&&M(P.map.channel),aoMapUv:O&&M(P.aoMap.channel),lightMapUv:en&&M(P.lightMap.channel),bumpMapUv:ct&&M(P.bumpMap.channel),normalMapUv:at&&M(P.normalMap.channel),displacementMapUv:Ke&&M(P.displacementMap.channel),emissiveMapUv:yt&&M(P.emissiveMap.channel),metalnessMapUv:Ye&&M(P.metalnessMap.channel),roughnessMapUv:D&&M(P.roughnessMap.channel),anisotropyMapUv:be&&M(P.anisotropyMap.channel),clearcoatMapUv:Oe&&M(P.clearcoatMap.channel),clearcoatNormalMapUv:ft&&M(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&M(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&M(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&M(P.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&M(P.sheenColorMap.channel),sheenRoughnessMapUv:ze&&M(P.sheenRoughnessMap.channel),specularMapUv:mt&&M(P.specularMap.channel),specularColorMapUv:lt&&M(P.specularColorMap.channel),specularIntensityMapUv:Ct&&M(P.specularIntensityMap.channel),transmissionMapUv:G&&M(P.transmissionMap.channel),thicknessMapUv:Le&&M(P.thicknessMap.channel),alphaMapUv:me&&M(P.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(at||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ue.attributes.uv&&(tt||me),fog:!!le,useFog:P.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:fe,skinning:q.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:re,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,decodeVideoTexture:tt&&P.map.isVideoTexture===!0&&Et.getTransfer(P.map.colorSpace)===bt,decodeVideoTextureEmissive:yt&&P.emissiveMap.isVideoTexture===!0&&Et.getTransfer(P.emissiveMap.colorSpace)===bt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ei,flipSided:P.side===In,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ut&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&P.extensions.multiDraw===!0||Fe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Yt.vertexUv1s=p.has(1),Yt.vertexUv2s=p.has(2),Yt.vertexUv3s=p.has(3),p.clear(),Yt}function _(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)A.push(B),A.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(b(A,P),L(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function b(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function L(P,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),P.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),P.push(f.mask)}function C(P){const A=E[P.type];let B;if(A){const ee=Mi[A];B=sS.clone(ee.uniforms)}else B=P.uniforms;return B}function W(P,A){let B;for(let ee=0,q=g.length;ee<q;ee++){const le=g[ee];if(le.cacheKey===A){B=le,++B.usedTimes;break}}return B===void 0&&(B=new _T(s,A,P,l),g.push(B)),B}function F(P){if(--P.usedTimes===0){const A=g.indexOf(P);g[A]=g[g.length-1],g.pop(),P.destroy()}}function N(P){h.remove(P)}function V(){h.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:C,acquireProgram:W,releaseProgram:F,releaseShaderCache:N,programs:g,dispose:V}}function ET(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function a(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function wT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _g(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(v,x,S,E,M,y){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:E,renderOrder:v.renderOrder,z:M,group:y},s[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=M,_.group=y),e++,_}function f(v,x,S,E,M,y){const _=c(v,x,S,E,M,y);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):t.push(_)}function h(v,x,S,E,M,y){const _=c(v,x,S,E,M,y);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function p(v,x){t.length>1&&t.sort(v||wT),r.length>1&&r.sort(x||vg),a.length>1&&a.sort(x||vg)}function g(){for(let v=e,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:h,finish:g,sort:p}}function TT(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new _g,s.set(r,[c])):a>=l.length?(c=new _g,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function AT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new vt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=t,t}}}function RT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let CT=0;function PT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function bT(s){const e=new AT,t=RT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Q);const a=new Q,l=new Ht,c=new Ht;function f(p){let g=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,E=0,M=0,y=0,_=0,b=0,L=0,C=0,W=0,F=0,N=0;p.sort(PT);for(let P=0,A=p.length;P<A;P++){const B=p[P],ee=B.color,q=B.intensity,le=B.distance,ue=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=ee.r*q,v+=ee.g*q,x+=ee.b*q;else if(B.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(B.sh.coefficients[ae],q);N++}else if(B.isDirectionalLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ce=B.shadow,z=t.get(B);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,r.directionalShadow[S]=z,r.directionalShadowMap[S]=ue,r.directionalShadowMatrix[S]=B.shadow.matrix,b++}r.directional[S]=ae,S++}else if(B.isSpotLight){const ae=e.get(B);ae.position.setFromMatrixPosition(B.matrixWorld),ae.color.copy(ee).multiplyScalar(q),ae.distance=le,ae.coneCos=Math.cos(B.angle),ae.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ae.decay=B.decay,r.spot[M]=ae;const ce=B.shadow;if(B.map&&(r.spotLightMap[W]=B.map,W++,ce.updateMatrices(B),B.castShadow&&F++),r.spotLightMatrix[M]=ce.matrix,B.castShadow){const z=t.get(B);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,r.spotShadow[M]=z,r.spotShadowMap[M]=ue,C++}M++}else if(B.isRectAreaLight){const ae=e.get(B);ae.color.copy(ee).multiplyScalar(q),ae.halfWidth.set(B.width*.5,0,0),ae.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=ae,y++}else if(B.isPointLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),ae.distance=B.distance,ae.decay=B.decay,B.castShadow){const ce=B.shadow,z=t.get(B);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,z.shadowCameraNear=ce.camera.near,z.shadowCameraFar=ce.camera.far,r.pointShadow[E]=z,r.pointShadowMap[E]=ue,r.pointShadowMatrix[E]=B.shadow.matrix,L++}r.point[E]=ae,E++}else if(B.isHemisphereLight){const ae=e.get(B);ae.skyColor.copy(B.color).multiplyScalar(q),ae.groundColor.copy(B.groundColor).multiplyScalar(q),r.hemi[_]=ae,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const V=r.hash;(V.directionalLength!==S||V.pointLength!==E||V.spotLength!==M||V.rectAreaLength!==y||V.hemiLength!==_||V.numDirectionalShadows!==b||V.numPointShadows!==L||V.numSpotShadows!==C||V.numSpotMaps!==W||V.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=M,r.rectArea.length=y,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+W-F,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=N,V.directionalLength=S,V.pointLength=E,V.spotLength=M,V.rectAreaLength=y,V.hemiLength=_,V.numDirectionalShadows=b,V.numPointShadows=L,V.numSpotShadows=C,V.numSpotMaps=W,V.numLightProbes=N,r.version=CT++)}function h(p,g){let v=0,x=0,S=0,E=0,M=0;const y=g.matrixWorldInverse;for(let _=0,b=p.length;_<b;_++){const L=p[_];if(L.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),v++}else if(L.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const C=r.hemi[M];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(y),M++}}}return{setup:f,setupView:h,state:r}}function xg(s){const e=new bT(s),t=[],r=[];function a(g){p.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function c(g){r.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function LT(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new xg(s),e.set(a,[f])):l>=c.length?(f=new xg(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}class DT extends so{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IT extends so{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const NT=`void main() {
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
}`;function FT(s,e,t){let r=new Dd;const a=new wt,l=new wt,c=new Wt,f=new DT({depthPacking:Py}),h=new IT,p={},g=t.maxTextureSize,v={[br]:In,[In]:br,[Ei]:Ei},x=new Lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:NT,fragmentShader:UT}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Vn;E.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new It(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yg;let _=this.type;this.render=function(F,N,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(Cr),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const q=_!==Xi&&this.type===Xi,le=_===Xi&&this.type!==Xi;for(let ue=0,ae=F.length;ue<ae;ue++){const ce=F[ue],z=ce.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const de=z.getFrameExtents();if(a.multiply(de),l.copy(z.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/de.x),a.x=l.x*de.x,z.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/de.y),a.y=l.y*de.y,z.mapSize.y=l.y)),z.map===null||q===!0||le===!0){const U=this.type!==Xi?{minFilter:hi,magFilter:hi}:{};z.map!==null&&z.map.dispose(),z.map=new os(a.x,a.y,U),z.map.texture.name=ce.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const oe=z.getViewportCount();for(let U=0;U<oe;U++){const re=z.getViewport(U);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),ee.viewport(c),z.updateMatrices(ce,U),r=z.getFrustum(),C(N,V,z.camera,ce,this.type)}z.isPointLightShadow!==!0&&this.type===Xi&&b(z,V),z.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(P,A,B)};function b(F,N){const V=e.update(M);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new os(a.x,a.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(N,null,V,x,M,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(N,null,V,S,M,null)}function L(F,N,V,P){let A=null;const B=V.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)A=B;else if(A=V.isPointLight===!0?h:f,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const ee=A.uuid,q=N.uuid;let le=p[ee];le===void 0&&(le={},p[ee]=le);let ue=le[q];ue===void 0&&(ue=A.clone(),le[q]=ue,N.addEventListener("dispose",W)),A=ue}if(A.visible=N.visible,A.wireframe=N.wireframe,P===Xi?A.side=N.shadowSide!==null?N.shadowSide:N.side:A.side=N.shadowSide!==null?N.shadowSide:v[N.side],A.alphaMap=N.alphaMap,A.alphaTest=N.alphaTest,A.map=N.map,A.clipShadows=N.clipShadows,A.clippingPlanes=N.clippingPlanes,A.clipIntersection=N.clipIntersection,A.displacementMap=N.displacementMap,A.displacementScale=N.displacementScale,A.displacementBias=N.displacementBias,A.wireframeLinewidth=N.wireframeLinewidth,A.linewidth=N.linewidth,V.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ee=s.properties.get(A);ee.light=V}return A}function C(F,N,V,P,A){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===Xi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,F.matrixWorld);const q=e.update(F),le=F.material;if(Array.isArray(le)){const ue=q.groups;for(let ae=0,ce=ue.length;ae<ce;ae++){const z=ue[ae],de=le[z.materialIndex];if(de&&de.visible){const oe=L(F,de,P,A);F.onBeforeShadow(s,F,N,V,q,oe,z),s.renderBufferDirect(V,null,q,oe,F,z),F.onAfterShadow(s,F,N,V,q,oe,z)}}}else if(le.visible){const ue=L(F,le,P,A);F.onBeforeShadow(s,F,N,V,q,ue,null),s.renderBufferDirect(V,null,q,ue,F,null),F.onAfterShadow(s,F,N,V,q,ue,null)}}const ee=F.children;for(let q=0,le=ee.length;q<le;q++)C(ee[q],N,V,P,A)}function W(F){F.target.removeEventListener("dispose",W);for(const V in p){const P=p[V],A=F.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const OT={[Lf]:Df,[If]:Ff,[Nf]:Of,[qs]:Uf,[Df]:Lf,[Ff]:If,[Of]:Nf,[Uf]:qs};function kT(s,e){function t(){let G=!1;const Le=new Wt;let se=null;const me=new Wt(0,0,0,0);return{setMask:function(Ne){se!==Ne&&!G&&(s.colorMask(Ne,Ne,Ne,Ne),se=Ne)},setLocked:function(Ne){G=Ne},setClear:function(Ne,Ie,ut,Nt,Yt){Yt===!0&&(Ne*=Nt,Ie*=Nt,ut*=Nt),Le.set(Ne,Ie,ut,Nt),me.equals(Le)===!1&&(s.clearColor(Ne,Ie,ut,Nt),me.copy(Le))},reset:function(){G=!1,se=null,me.set(-1,0,0,0)}}}function r(){let G=!1,Le=!1,se=null,me=null,Ne=null;return{setReversed:function(Ie){if(Le!==Ie){const ut=e.get("EXT_clip_control");Le?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT);const Nt=Ne;Ne=null,this.setClear(Nt)}Le=Ie},getReversed:function(){return Le},setTest:function(Ie){Ie?xe(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function(Ie){se!==Ie&&!G&&(s.depthMask(Ie),se=Ie)},setFunc:function(Ie){if(Le&&(Ie=OT[Ie]),me!==Ie){switch(Ie){case Lf:s.depthFunc(s.NEVER);break;case Df:s.depthFunc(s.ALWAYS);break;case If:s.depthFunc(s.LESS);break;case qs:s.depthFunc(s.LEQUAL);break;case Nf:s.depthFunc(s.EQUAL);break;case Uf:s.depthFunc(s.GEQUAL);break;case Ff:s.depthFunc(s.GREATER);break;case Of:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Ie}},setLocked:function(Ie){G=Ie},setClear:function(Ie){Ne!==Ie&&(Le&&(Ie=1-Ie),s.clearDepth(Ie),Ne=Ie)},reset:function(){G=!1,se=null,me=null,Ne=null,Le=!1}}}function a(){let G=!1,Le=null,se=null,me=null,Ne=null,Ie=null,ut=null,Nt=null,Yt=null;return{setTest:function(St){G||(St?xe(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(St){Le!==St&&!G&&(s.stencilMask(St),Le=St)},setFunc:function(St,En,vn){(se!==St||me!==En||Ne!==vn)&&(s.stencilFunc(St,En,vn),se=St,me=En,Ne=vn)},setOp:function(St,En,vn){(Ie!==St||ut!==En||Nt!==vn)&&(s.stencilOp(St,En,vn),Ie=St,ut=En,Nt=vn)},setLocked:function(St){G=St},setClear:function(St){Yt!==St&&(s.clearStencil(St),Yt=St)},reset:function(){G=!1,Le=null,se=null,me=null,Ne=null,Ie=null,ut=null,Nt=null,Yt=null}}}const l=new t,c=new r,f=new a,h=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,S=[],E=null,M=!1,y=null,_=null,b=null,L=null,C=null,W=null,F=null,N=new vt(0,0,0),V=0,P=!1,A=null,B=null,ee=null,q=null,le=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ce=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(z)[1]),ae=ce>=1):z.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ae=ce>=2);let de=null,oe={};const U=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Ue=new Wt().fromArray(U),J=new Wt().fromArray(re);function he(G,Le,se,me){const Ne=new Uint8Array(4),Ie=s.createTexture();s.bindTexture(G,Ie),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ut=0;ut<se;ut++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(Le+ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return Ie}const Te={};Te[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),xe(s.DEPTH_TEST),c.setFunc(qs),ct(!1),at(Em),xe(s.CULL_FACE),O(Cr);function xe(G){g[G]!==!0&&(s.enable(G),g[G]=!0)}function fe(G){g[G]!==!1&&(s.disable(G),g[G]=!1)}function Me(G,Le){return v[G]!==Le?(s.bindFramebuffer(G,Le),v[G]=Le,G===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Le),G===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Fe(G,Le){let se=S,me=!1;if(G){se=x.get(Le),se===void 0&&(se=[],x.set(Le,se));const Ne=G.textures;if(se.length!==Ne.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Ie=0,ut=Ne.length;Ie<ut;Ie++)se[Ie]=s.COLOR_ATTACHMENT0+Ie;se.length=Ne.length,me=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,me=!0);me&&s.drawBuffers(se)}function tt(G){return E!==G?(s.useProgram(G),E=G,!0):!1}const ot={[es]:s.FUNC_ADD,[ty]:s.FUNC_SUBTRACT,[ny]:s.FUNC_REVERSE_SUBTRACT};ot[iy]=s.MIN,ot[ry]=s.MAX;const et={[sy]:s.ZERO,[oy]:s.ONE,[ay]:s.SRC_COLOR,[Pf]:s.SRC_ALPHA,[hy]:s.SRC_ALPHA_SATURATE,[fy]:s.DST_COLOR,[uy]:s.DST_ALPHA,[ly]:s.ONE_MINUS_SRC_COLOR,[bf]:s.ONE_MINUS_SRC_ALPHA,[dy]:s.ONE_MINUS_DST_COLOR,[cy]:s.ONE_MINUS_DST_ALPHA,[py]:s.CONSTANT_COLOR,[my]:s.ONE_MINUS_CONSTANT_COLOR,[gy]:s.CONSTANT_ALPHA,[vy]:s.ONE_MINUS_CONSTANT_ALPHA};function O(G,Le,se,me,Ne,Ie,ut,Nt,Yt,St){if(G===Cr){M===!0&&(fe(s.BLEND),M=!1);return}if(M===!1&&(xe(s.BLEND),M=!0),G!==ey){if(G!==y||St!==P){if((_!==es||C!==es)&&(s.blendEquation(s.FUNC_ADD),_=es,C=es),St)switch(G){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wm:s.blendFunc(s.ONE,s.ONE);break;case Tm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Am:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Tm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Am:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}b=null,L=null,W=null,F=null,N.set(0,0,0),V=0,y=G,P=St}return}Ne=Ne||Le,Ie=Ie||se,ut=ut||me,(Le!==_||Ne!==C)&&(s.blendEquationSeparate(ot[Le],ot[Ne]),_=Le,C=Ne),(se!==b||me!==L||Ie!==W||ut!==F)&&(s.blendFuncSeparate(et[se],et[me],et[Ie],et[ut]),b=se,L=me,W=Ie,F=ut),(Nt.equals(N)===!1||Yt!==V)&&(s.blendColor(Nt.r,Nt.g,Nt.b,Yt),N.copy(Nt),V=Yt),y=G,P=!1}function en(G,Le){G.side===Ei?fe(s.CULL_FACE):xe(s.CULL_FACE);let se=G.side===In;Le&&(se=!se),ct(se),G.blending===js&&G.transparent===!1?O(Cr):O(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),l.setMask(G.colorWrite);const me=G.stencilWrite;f.setTest(me),me&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),yt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(G){A!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),A=G)}function at(G){G!==Qx?(xe(s.CULL_FACE),G!==B&&(G===Em?s.cullFace(s.BACK):G===Jx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),B=G}function Ke(G){G!==ee&&(ae&&s.lineWidth(G),ee=G)}function yt(G,Le,se){G?(xe(s.POLYGON_OFFSET_FILL),(q!==Le||le!==se)&&(s.polygonOffset(Le,se),q=Le,le=se)):fe(s.POLYGON_OFFSET_FILL)}function Ye(G){G?xe(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function D(G){G===void 0&&(G=s.TEXTURE0+ue-1),de!==G&&(s.activeTexture(G),de=G)}function T(G,Le,se){se===void 0&&(de===null?se=s.TEXTURE0+ue-1:se=de);let me=oe[se];me===void 0&&(me={type:void 0,texture:void 0},oe[se]=me),(me.type!==G||me.texture!==Le)&&(de!==se&&(s.activeTexture(se),de=se),s.bindTexture(G,Le||Te[G]),me.type=G,me.texture=Le)}function Z(){const G=oe[de];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ge(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ze(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(G){Ue.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ue.copy(G))}function ze(G){J.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),J.copy(G))}function mt(G,Le){let se=p.get(Le);se===void 0&&(se=new WeakMap,p.set(Le,se));let me=se.get(G);me===void 0&&(me=s.getUniformBlockIndex(Le,G.name),se.set(G,me))}function lt(G,Le){const me=p.get(Le).get(G);h.get(Le)!==me&&(s.uniformBlockBinding(Le,me,G.__bindingPointIndex),h.set(Le,me))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},de=null,oe={},v={},x=new WeakMap,S=[],E=null,M=!1,y=null,_=null,b=null,L=null,C=null,W=null,F=null,N=new vt(0,0,0),V=0,P=!1,A=null,B=null,ee=null,q=null,le=null,Ue.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:xe,disable:fe,bindFramebuffer:Me,drawBuffers:Fe,useProgram:tt,setBlending:O,setMaterial:en,setFlipSided:ct,setCullFace:at,setLineWidth:Ke,setPolygonOffset:yt,setScissorTest:Ye,activeTexture:D,bindTexture:T,unbindTexture:Z,compressedTexImage2D:ge,compressedTexImage3D:ve,texImage2D:Pe,texImage3D:Ze,updateUBOMapping:mt,uniformBlockBinding:lt,texStorage2D:ft,texStorage3D:we,texSubImage2D:pe,texSubImage3D:Ve,compressedTexSubImage2D:be,compressedTexSubImage3D:Oe,scissor:nt,viewport:ze,reset:Ct}}function yg(s,e,t,r){const a=BT(r);switch(t){case ev:return s*e;case nv:return s*e;case iv:return s*e*2;case rv:return s*e/a.components*a.byteLength;case Pd:return s*e/a.components*a.byteLength;case sv:return s*e*2/a.components*a.byteLength;case bd:return s*e*2/a.components*a.byteLength;case tv:return s*e*3/a.components*a.byteLength;case di:return s*e*4/a.components*a.byteLength;case Ld:return s*e*4/a.components*a.byteLength;case Hl:case Vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gf:case Xf:return Math.max(s,16)*Math.max(e,8)/4;case Vf:case Wf:return Math.max(s,8)*Math.max(e,8)/2;case jf:case $f:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ed:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case td:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case nd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case id:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case rd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case sd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case od:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ad:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ld:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Xl:case ud:case cd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ov:case fd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case dd:case hd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function BT(s){switch(s){case Ki:case Zg:return{byteLength:1,components:1};case Qo:case Qg:case ia:return{byteLength:2,components:1};case Rd:case Cd:return{byteLength:2,components:4};case ss:case Ad:case ji:return{byteLength:4,components:1};case Jg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function zT(s,e,t,r,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new wt,g=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,T){return S?new OffscreenCanvas(D,T):ql("canvas")}function M(D,T,Z){let ge=1;const ve=Ye(D);if((ve.width>Z||ve.height>Z)&&(ge=Z/Math.max(ve.width,ve.height)),ge<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const pe=Math.floor(ge*ve.width),Ve=Math.floor(ge*ve.height);v===void 0&&(v=E(pe,Ve));const be=T?E(pe,Ve):v;return be.width=pe,be.height=Ve,be.getContext("2d").drawImage(D,0,0,pe,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+pe+"x"+Ve+")."),be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function y(D){return D.generateMipmaps}function _(D){s.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(D,T,Z,ge,ve=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pe=T;if(T===s.RED&&(Z===s.FLOAT&&(pe=s.R32F),Z===s.HALF_FLOAT&&(pe=s.R16F),Z===s.UNSIGNED_BYTE&&(pe=s.R8)),T===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.R8UI),Z===s.UNSIGNED_SHORT&&(pe=s.R16UI),Z===s.UNSIGNED_INT&&(pe=s.R32UI),Z===s.BYTE&&(pe=s.R8I),Z===s.SHORT&&(pe=s.R16I),Z===s.INT&&(pe=s.R32I)),T===s.RG&&(Z===s.FLOAT&&(pe=s.RG32F),Z===s.HALF_FLOAT&&(pe=s.RG16F),Z===s.UNSIGNED_BYTE&&(pe=s.RG8)),T===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.RG8UI),Z===s.UNSIGNED_SHORT&&(pe=s.RG16UI),Z===s.UNSIGNED_INT&&(pe=s.RG32UI),Z===s.BYTE&&(pe=s.RG8I),Z===s.SHORT&&(pe=s.RG16I),Z===s.INT&&(pe=s.RG32I)),T===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),Z===s.UNSIGNED_INT&&(pe=s.RGB32UI),Z===s.BYTE&&(pe=s.RGB8I),Z===s.SHORT&&(pe=s.RGB16I),Z===s.INT&&(pe=s.RGB32I)),T===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),Z===s.UNSIGNED_INT&&(pe=s.RGBA32UI),Z===s.BYTE&&(pe=s.RGBA8I),Z===s.SHORT&&(pe=s.RGBA16I),Z===s.INT&&(pe=s.RGBA32I)),T===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),T===s.RGBA){const Ve=ve?nu:Et.getTransfer(ge);Z===s.FLOAT&&(pe=s.RGBA32F),Z===s.HALF_FLOAT&&(pe=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(pe=Ve===bt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function C(D,T){let Z;return D?T===null||T===ss||T===Qs?Z=s.DEPTH24_STENCIL8:T===ji?Z=s.DEPTH32F_STENCIL8:T===Qo&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ss||T===Qs?Z=s.DEPTH_COMPONENT24:T===ji?Z=s.DEPTH_COMPONENT32F:T===Qo&&(Z=s.DEPTH_COMPONENT16),Z}function W(D,T){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==hi&&D.minFilter!==wi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function F(D){const T=D.target;T.removeEventListener("dispose",F),V(T),T.isVideoTexture&&g.delete(T)}function N(D){const T=D.target;T.removeEventListener("dispose",N),A(T)}function V(D){const T=r.get(D);if(T.__webglInit===void 0)return;const Z=D.source,ge=x.get(Z);if(ge){const ve=ge[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(D),Object.keys(ge).length===0&&x.delete(Z)}r.remove(D)}function P(D){const T=r.get(D);s.deleteTexture(T.__webglTexture);const Z=D.source,ge=x.get(Z);delete ge[T.__cacheKey],c.memory.textures--}function A(D){const T=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(T.__webglFramebuffer[ge]))for(let ve=0;ve<T.__webglFramebuffer[ge].length;ve++)s.deleteFramebuffer(T.__webglFramebuffer[ge][ve]);else s.deleteFramebuffer(T.__webglFramebuffer[ge]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ge])}else{if(Array.isArray(T.__webglFramebuffer))for(let ge=0;ge<T.__webglFramebuffer.length;ge++)s.deleteFramebuffer(T.__webglFramebuffer[ge]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ge=0;ge<T.__webglColorRenderbuffer.length;ge++)T.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ge]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=D.textures;for(let ge=0,ve=Z.length;ge<ve;ge++){const pe=r.get(Z[ge]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),c.memory.textures--),r.remove(Z[ge])}r.remove(D)}let B=0;function ee(){B=0}function q(){const D=B;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),B+=1,D}function le(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function ue(D,T){const Z=r.get(D);if(D.isVideoTexture&&Ke(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){const ge=D.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Z,D,T);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+T)}function ae(D,T){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){J(Z,D,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+T)}function ce(D,T){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){J(Z,D,T);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+T)}function z(D,T){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){he(Z,D,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+T)}const de={[zf]:s.REPEAT,[ns]:s.CLAMP_TO_EDGE,[Hf]:s.MIRRORED_REPEAT},oe={[hi]:s.NEAREST,[Ry]:s.NEAREST_MIPMAP_NEAREST,[pl]:s.NEAREST_MIPMAP_LINEAR,[wi]:s.LINEAR,[Xc]:s.LINEAR_MIPMAP_NEAREST,[is]:s.LINEAR_MIPMAP_LINEAR},U={[Ly]:s.NEVER,[Oy]:s.ALWAYS,[Dy]:s.LESS,[lv]:s.LEQUAL,[Iy]:s.EQUAL,[Fy]:s.GEQUAL,[Ny]:s.GREATER,[Uy]:s.NOTEQUAL};function re(D,T){if(T.type===ji&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===wi||T.magFilter===Xc||T.magFilter===pl||T.magFilter===is||T.minFilter===wi||T.minFilter===Xc||T.minFilter===pl||T.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,de[T.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,de[T.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,de[T.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,oe[T.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,oe[T.minFilter]),T.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,U[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hi||T.minFilter!==pl&&T.minFilter!==is||T.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ue(D,T){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",F));const ge=T.source;let ve=x.get(ge);ve===void 0&&(ve={},x.set(ge,ve));const pe=le(T);if(pe!==D.__cacheKey){ve[pe]===void 0&&(ve[pe]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),ve[pe].usedTimes++;const Ve=ve[D.__cacheKey];Ve!==void 0&&(ve[D.__cacheKey].usedTimes--,Ve.usedTimes===0&&P(T)),D.__cacheKey=pe,D.__webglTexture=ve[pe].texture}return Z}function J(D,T,Z){let ge=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ge=s.TEXTURE_3D);const ve=Ue(D,T),pe=T.source;t.bindTexture(ge,D.__webglTexture,s.TEXTURE0+Z);const Ve=r.get(pe);if(pe.version!==Ve.__version||ve===!0){t.activeTexture(s.TEXTURE0+Z);const be=Et.getPrimaries(Et.workingColorSpace),Oe=T.colorSpace===Ar?null:Et.getPrimaries(T.colorSpace),ft=T.colorSpace===Ar||be===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let we=M(T.image,!1,a.maxTextureSize);we=yt(T,we);const Pe=l.convert(T.format,T.colorSpace),Ze=l.convert(T.type);let nt=L(T.internalFormat,Pe,Ze,T.colorSpace,T.isVideoTexture);re(ge,T);let ze;const mt=T.mipmaps,lt=T.isVideoTexture!==!0,Ct=Ve.__version===void 0||ve===!0,G=pe.dataReady,Le=W(T,we);if(T.isDepthTexture)nt=C(T.format===Js,T.type),Ct&&(lt?t.texStorage2D(s.TEXTURE_2D,1,nt,we.width,we.height):t.texImage2D(s.TEXTURE_2D,0,nt,we.width,we.height,0,Pe,Ze,null));else if(T.isDataTexture)if(mt.length>0){lt&&Ct&&t.texStorage2D(s.TEXTURE_2D,Le,nt,mt[0].width,mt[0].height);for(let se=0,me=mt.length;se<me;se++)ze=mt[se],lt?G&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,ze.width,ze.height,Pe,Ze,ze.data):t.texImage2D(s.TEXTURE_2D,se,nt,ze.width,ze.height,0,Pe,Ze,ze.data);T.generateMipmaps=!1}else lt?(Ct&&t.texStorage2D(s.TEXTURE_2D,Le,nt,we.width,we.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we.width,we.height,Pe,Ze,we.data)):t.texImage2D(s.TEXTURE_2D,0,nt,we.width,we.height,0,Pe,Ze,we.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){lt&&Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,nt,mt[0].width,mt[0].height,we.depth);for(let se=0,me=mt.length;se<me;se++)if(ze=mt[se],T.format!==di)if(Pe!==null)if(lt){if(G)if(T.layerUpdates.size>0){const Ne=yg(ze.width,ze.height,T.format,T.type);for(const Ie of T.layerUpdates){const ut=ze.data.subarray(Ie*Ne/ze.data.BYTES_PER_ELEMENT,(Ie+1)*Ne/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,Ie,ze.width,ze.height,1,Pe,ut)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ze.width,ze.height,we.depth,Pe,ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,nt,ze.width,ze.height,we.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ze.width,ze.height,we.depth,Pe,Ze,ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,nt,ze.width,ze.height,we.depth,0,Pe,Ze,ze.data)}else{lt&&Ct&&t.texStorage2D(s.TEXTURE_2D,Le,nt,mt[0].width,mt[0].height);for(let se=0,me=mt.length;se<me;se++)ze=mt[se],T.format!==di?Pe!==null?lt?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,ze.width,ze.height,Pe,ze.data):t.compressedTexImage2D(s.TEXTURE_2D,se,nt,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?G&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,ze.width,ze.height,Pe,Ze,ze.data):t.texImage2D(s.TEXTURE_2D,se,nt,ze.width,ze.height,0,Pe,Ze,ze.data)}else if(T.isDataArrayTexture)if(lt){if(Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,nt,we.width,we.height,we.depth),G)if(T.layerUpdates.size>0){const se=yg(we.width,we.height,T.format,T.type);for(const me of T.layerUpdates){const Ne=we.data.subarray(me*se/we.data.BYTES_PER_ELEMENT,(me+1)*se/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,we.width,we.height,1,Pe,Ze,Ne)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Pe,Ze,we.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,we.width,we.height,we.depth,0,Pe,Ze,we.data);else if(T.isData3DTexture)lt?(Ct&&t.texStorage3D(s.TEXTURE_3D,Le,nt,we.width,we.height,we.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Pe,Ze,we.data)):t.texImage3D(s.TEXTURE_3D,0,nt,we.width,we.height,we.depth,0,Pe,Ze,we.data);else if(T.isFramebufferTexture){if(Ct)if(lt)t.texStorage2D(s.TEXTURE_2D,Le,nt,we.width,we.height);else{let se=we.width,me=we.height;for(let Ne=0;Ne<Le;Ne++)t.texImage2D(s.TEXTURE_2D,Ne,nt,se,me,0,Pe,Ze,null),se>>=1,me>>=1}}else if(mt.length>0){if(lt&&Ct){const se=Ye(mt[0]);t.texStorage2D(s.TEXTURE_2D,Le,nt,se.width,se.height)}for(let se=0,me=mt.length;se<me;se++)ze=mt[se],lt?G&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Pe,Ze,ze):t.texImage2D(s.TEXTURE_2D,se,nt,Pe,Ze,ze);T.generateMipmaps=!1}else if(lt){if(Ct){const se=Ye(we);t.texStorage2D(s.TEXTURE_2D,Le,nt,se.width,se.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,Ze,we)}else t.texImage2D(s.TEXTURE_2D,0,nt,Pe,Ze,we);y(T)&&_(ge),Ve.__version=pe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function he(D,T,Z){if(T.image.length!==6)return;const ge=Ue(D,T),ve=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+Z);const pe=r.get(ve);if(ve.version!==pe.__version||ge===!0){t.activeTexture(s.TEXTURE0+Z);const Ve=Et.getPrimaries(Et.workingColorSpace),be=T.colorSpace===Ar?null:Et.getPrimaries(T.colorSpace),Oe=T.colorSpace===Ar||Ve===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ft=T.isCompressedTexture||T.image[0].isCompressedTexture,we=T.image[0]&&T.image[0].isDataTexture,Pe=[];for(let me=0;me<6;me++)!ft&&!we?Pe[me]=M(T.image[me],!0,a.maxCubemapSize):Pe[me]=we?T.image[me].image:T.image[me],Pe[me]=yt(T,Pe[me]);const Ze=Pe[0],nt=l.convert(T.format,T.colorSpace),ze=l.convert(T.type),mt=L(T.internalFormat,nt,ze,T.colorSpace),lt=T.isVideoTexture!==!0,Ct=pe.__version===void 0||ge===!0,G=ve.dataReady;let Le=W(T,Ze);re(s.TEXTURE_CUBE_MAP,T);let se;if(ft){lt&&Ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,mt,Ze.width,Ze.height);for(let me=0;me<6;me++){se=Pe[me].mipmaps;for(let Ne=0;Ne<se.length;Ne++){const Ie=se[Ne];T.format!==di?nt!==null?lt?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne,0,0,Ie.width,Ie.height,nt,Ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne,mt,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne,0,0,Ie.width,Ie.height,nt,ze,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne,mt,Ie.width,Ie.height,0,nt,ze,Ie.data)}}}else{if(se=T.mipmaps,lt&&Ct){se.length>0&&Le++;const me=Ye(Pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,mt,me.width,me.height)}for(let me=0;me<6;me++)if(we){lt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Pe[me].width,Pe[me].height,nt,ze,Pe[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,mt,Pe[me].width,Pe[me].height,0,nt,ze,Pe[me].data);for(let Ne=0;Ne<se.length;Ne++){const ut=se[Ne].image[me].image;lt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne+1,0,0,ut.width,ut.height,nt,ze,ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne+1,mt,ut.width,ut.height,0,nt,ze,ut.data)}}else{lt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,nt,ze,Pe[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,mt,nt,ze,Pe[me]);for(let Ne=0;Ne<se.length;Ne++){const Ie=se[Ne];lt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne+1,0,0,nt,ze,Ie.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne+1,mt,nt,ze,Ie.image[me])}}}y(T)&&_(s.TEXTURE_CUBE_MAP),pe.__version=ve.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Te(D,T,Z,ge,ve,pe){const Ve=l.convert(Z.format,Z.colorSpace),be=l.convert(Z.type),Oe=L(Z.internalFormat,Ve,be,Z.colorSpace),ft=r.get(T),we=r.get(Z);if(we.__renderTarget=T,!ft.__hasExternalTextures){const Pe=Math.max(1,T.width>>pe),Ze=Math.max(1,T.height>>pe);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?t.texImage3D(ve,pe,Oe,Pe,Ze,T.depth,0,Ve,be,null):t.texImage2D(ve,pe,Oe,Pe,Ze,0,Ve,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),at(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,ve,we.__webglTexture,0,ct(T)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,ve,we.__webglTexture,pe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(D,T,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,D),T.depthBuffer){const ge=T.depthTexture,ve=ge&&ge.isDepthTexture?ge.type:null,pe=C(T.stencilBuffer,ve),Ve=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=ct(T);at(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,pe,T.width,T.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,pe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,pe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,D)}else{const ge=T.textures;for(let ve=0;ve<ge.length;ve++){const pe=ge[ve],Ve=l.convert(pe.format,pe.colorSpace),be=l.convert(pe.type),Oe=L(pe.internalFormat,Ve,be,pe.colorSpace),ft=ct(T);Z&&at(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Oe,T.width,T.height):at(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Oe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Oe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function fe(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(T.depthTexture);ge.__renderTarget=T,(!ge.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ue(T.depthTexture,0);const ve=ge.__webglTexture,pe=ct(T);if(T.depthTexture.format===$s)at(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(T.depthTexture.format===Js)at(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Me(D){const T=r.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const ge=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ge){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ge.removeEventListener("dispose",ve)};ge.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=ge}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");fe(T.__webglFramebuffer,D)}else if(Z){T.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ge]),T.__webglDepthbuffer[ge]===void 0)T.__webglDepthbuffer[ge]=s.createRenderbuffer(),xe(T.__webglDepthbuffer[ge],D,!1);else{const ve=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer[ge];s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,pe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),xe(T.__webglDepthbuffer,D,!1);else{const ge=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ve)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(D,T,Z){const ge=r.get(D);T!==void 0&&Te(ge.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Me(D)}function tt(D){const T=D.texture,Z=r.get(D),ge=r.get(T);D.addEventListener("dispose",N);const ve=D.textures,pe=D.isWebGLCubeRenderTarget===!0,Ve=ve.length>1;if(Ve||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=T.version,c.memory.textures++),pe){Z.__webglFramebuffer=[];for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[be]=[];for(let Oe=0;Oe<T.mipmaps.length;Oe++)Z.__webglFramebuffer[be][Oe]=s.createFramebuffer()}else Z.__webglFramebuffer[be]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let be=0;be<T.mipmaps.length;be++)Z.__webglFramebuffer[be]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let be=0,Oe=ve.length;be<Oe;be++){const ft=r.get(ve[be]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),c.memory.textures++)}if(D.samples>0&&at(D)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let be=0;be<ve.length;be++){const Oe=ve[be];Z.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[be]);const ft=l.convert(Oe.format,Oe.colorSpace),we=l.convert(Oe.type),Pe=L(Oe.internalFormat,ft,we,Oe.colorSpace,D.isXRRenderTarget===!0),Ze=ct(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Pe,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Z.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),re(s.TEXTURE_CUBE_MAP,T);for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0)for(let Oe=0;Oe<T.mipmaps.length;Oe++)Te(Z.__webglFramebuffer[be][Oe],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe);else Te(Z.__webglFramebuffer[be],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(T)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let be=0,Oe=ve.length;be<Oe;be++){const ft=ve[be],we=r.get(ft);t.bindTexture(s.TEXTURE_2D,we.__webglTexture),re(s.TEXTURE_2D,ft),Te(Z.__webglFramebuffer,D,ft,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),y(ft)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,ge.__webglTexture),re(be,T),T.mipmaps&&T.mipmaps.length>0)for(let Oe=0;Oe<T.mipmaps.length;Oe++)Te(Z.__webglFramebuffer[Oe],D,T,s.COLOR_ATTACHMENT0,be,Oe);else Te(Z.__webglFramebuffer,D,T,s.COLOR_ATTACHMENT0,be,0);y(T)&&_(be),t.unbindTexture()}D.depthBuffer&&Me(D)}function ot(D){const T=D.textures;for(let Z=0,ge=T.length;Z<ge;Z++){const ve=T[Z];if(y(ve)){const pe=b(D),Ve=r.get(ve).__webglTexture;t.bindTexture(pe,Ve),_(pe),t.unbindTexture()}}}const et=[],O=[];function en(D){if(D.samples>0){if(at(D)===!1){const T=D.textures,Z=D.width,ge=D.height;let ve=s.COLOR_BUFFER_BIT;const pe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(D),be=T.length>1;if(be)for(let Oe=0;Oe<T.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Oe=0;Oe<T.length;Oe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Oe]);const ft=r.get(T[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,Z,ge,0,0,Z,ge,ve,s.NEAREST),h===!0&&(et.length=0,O.length=0,et.push(s.COLOR_ATTACHMENT0+Oe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(et.push(pe),O.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Oe=0;Oe<T.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Oe]);const ft=r.get(T[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,ft,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const T=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ct(D){return Math.min(a.maxSamples,D.samples)}function at(D){const T=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(D){const T=c.render.frame;g.get(D)!==T&&(g.set(D,T),D.update())}function yt(D,T){const Z=D.colorSpace,ge=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==io&&Z!==Ar&&(Et.getTransfer(Z)===bt?(ge!==di||ve!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=q,this.resetTextureUnits=ee,this.setTexture2D=ue,this.setTexture2DArray=ae,this.setTexture3D=ce,this.setTextureCube=z,this.rebindTextures=Fe,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=at}function HT(s,e){function t(r,a=Ar){let l;const c=Et.getTransfer(a);if(r===Ki)return s.UNSIGNED_BYTE;if(r===Rd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Cd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Jg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Zg)return s.BYTE;if(r===Qg)return s.SHORT;if(r===Qo)return s.UNSIGNED_SHORT;if(r===Ad)return s.INT;if(r===ss)return s.UNSIGNED_INT;if(r===ji)return s.FLOAT;if(r===ia)return s.HALF_FLOAT;if(r===ev)return s.ALPHA;if(r===tv)return s.RGB;if(r===di)return s.RGBA;if(r===nv)return s.LUMINANCE;if(r===iv)return s.LUMINANCE_ALPHA;if(r===$s)return s.DEPTH_COMPONENT;if(r===Js)return s.DEPTH_STENCIL;if(r===rv)return s.RED;if(r===Pd)return s.RED_INTEGER;if(r===sv)return s.RG;if(r===bd)return s.RG_INTEGER;if(r===Ld)return s.RGBA_INTEGER;if(r===Hl||r===Vl||r===Gl||r===Wl)if(c===bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Hl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Hl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vf||r===Gf||r===Wf||r===Xf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Vf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jf||r===$f||r===Yf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===jf||r===$f)return c===bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Yf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qf||r===Kf||r===Zf||r===Qf||r===Jf||r===ed||r===td||r===nd||r===id||r===rd||r===sd||r===od||r===ad||r===ld)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===qf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ed)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===td)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===id)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===od)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ad)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ld)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xl||r===ud||r===cd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Xl)return c===bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ud)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===cd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ov||r===fd||r===dd||r===hd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Xl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===fd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===dd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===hd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class VT extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rr extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GT={type:"move"};class Sf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,r),_=this._getHandJoint(p,M);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&x>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(GT)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Rr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const WT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XT=`
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

}`;class jT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new Nn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Lr({vertexShader:WT,fragmentShader:XT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new rs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $T extends ro{constructor(e,t){super();const r=this;let a=null,l=1,c=null,f="local-floor",h=1,p=null,g=null,v=null,x=null,S=null,E=null;const M=new jT,y=t.getContextAttributes();let _=null,b=null;const L=[],C=[],W=new wt;let F=null;const N=new ci;N.viewport=new Wt;const V=new ci;V.viewport=new Wt;const P=[N,V],A=new VT;let B=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let he=L[J];return he===void 0&&(he=new Sf,L[J]=he),he.getTargetRaySpace()},this.getControllerGrip=function(J){let he=L[J];return he===void 0&&(he=new Sf,L[J]=he),he.getGripSpace()},this.getHand=function(J){let he=L[J];return he===void 0&&(he=new Sf,L[J]=he),he.getHandSpace()};function q(J){const he=C.indexOf(J.inputSource);if(he===-1)return;const Te=L[he];Te!==void 0&&(Te.update(J.inputSource,J.frame,p||c),Te.dispatchEvent({type:J.type,data:J.inputSource}))}function le(){a.removeEventListener("select",q),a.removeEventListener("selectstart",q),a.removeEventListener("selectend",q),a.removeEventListener("squeeze",q),a.removeEventListener("squeezestart",q),a.removeEventListener("squeezeend",q),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",ue);for(let J=0;J<L.length;J++){const he=C[J];he!==null&&(C[J]=null,L[J].disconnect(he))}B=null,ee=null,M.reset(),e.setRenderTarget(_),S=null,x=null,v=null,a=null,b=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",q),a.addEventListener("selectstart",q),a.addEventListener("selectend",q),a.addEventListener("squeeze",q),a.addEventListener("squeezestart",q),a.addEventListener("squeezeend",q),a.addEventListener("end",le),a.addEventListener("inputsourceschange",ue),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(W),a.renderState.layers===void 0){const he={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,he),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new os(S.framebufferWidth,S.framebufferHeight,{format:di,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let he=null,Te=null,xe=null;y.depth&&(xe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=y.stencil?Js:$s,Te=y.stencil?Qs:ss);const fe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:l};v=new XRWebGLBinding(a,t),x=v.createProjectionLayer(fe),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),b=new os(x.textureWidth,x.textureHeight,{format:di,type:Ki,depthTexture:new Sv(x.textureWidth,x.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(f),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ue(J){for(let he=0;he<J.removed.length;he++){const Te=J.removed[he],xe=C.indexOf(Te);xe>=0&&(C[xe]=null,L[xe].disconnect(Te))}for(let he=0;he<J.added.length;he++){const Te=J.added[he];let xe=C.indexOf(Te);if(xe===-1){for(let Me=0;Me<L.length;Me++)if(Me>=C.length){C.push(Te),xe=Me;break}else if(C[Me]===null){C[Me]=Te,xe=Me;break}if(xe===-1)break}const fe=L[xe];fe&&fe.connect(Te)}}const ae=new Q,ce=new Q;function z(J,he,Te){ae.setFromMatrixPosition(he.matrixWorld),ce.setFromMatrixPosition(Te.matrixWorld);const xe=ae.distanceTo(ce),fe=he.projectionMatrix.elements,Me=Te.projectionMatrix.elements,Fe=fe[14]/(fe[10]-1),tt=fe[14]/(fe[10]+1),ot=(fe[9]+1)/fe[5],et=(fe[9]-1)/fe[5],O=(fe[8]-1)/fe[0],en=(Me[8]+1)/Me[0],ct=Fe*O,at=Fe*en,Ke=xe/(-O+en),yt=Ke*-O;if(he.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(yt),J.translateZ(Ke),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),fe[10]===-1)J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ye=Fe+Ke,D=tt+Ke,T=ct-yt,Z=at+(xe-yt),ge=ot*tt/D*Ye,ve=et*tt/D*Ye;J.projectionMatrix.makePerspective(T,Z,ge,ve,Ye,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function de(J,he){he===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(he.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let he=J.near,Te=J.far;M.texture!==null&&(M.depthNear>0&&(he=M.depthNear),M.depthFar>0&&(Te=M.depthFar)),A.near=V.near=N.near=he,A.far=V.far=N.far=Te,(B!==A.near||ee!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,ee=A.far),N.layers.mask=J.layers.mask|2,V.layers.mask=J.layers.mask|4,A.layers.mask=N.layers.mask|V.layers.mask;const xe=J.parent,fe=A.cameras;de(A,xe);for(let Me=0;Me<fe.length;Me++)de(fe[Me],xe);fe.length===2?z(A,N,V):A.projectionMatrix.copy(N.projectionMatrix),oe(J,A,xe)};function oe(J,he,Te){Te===null?J.matrix.copy(he.matrixWorld):(J.matrix.copy(Te.matrixWorld),J.matrix.invert(),J.matrix.multiply(he.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=pd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(J){h=J,x!==null&&(x.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(A)};let U=null;function re(J,he){if(g=he.getViewerPose(p||c),E=he,g!==null){const Te=g.views;S!==null&&(e.setRenderTargetFramebuffer(b,S.framebuffer),e.setRenderTarget(b));let xe=!1;Te.length!==A.cameras.length&&(A.cameras.length=0,xe=!0);for(let Me=0;Me<Te.length;Me++){const Fe=Te[Me];let tt=null;if(S!==null)tt=S.getViewport(Fe);else{const et=v.getViewSubImage(x,Fe);tt=et.viewport,Me===0&&(e.setRenderTargetTextures(b,et.colorTexture,x.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(b))}let ot=P[Me];ot===void 0&&(ot=new ci,ot.layers.enable(Me),ot.viewport=new Wt,P[Me]=ot),ot.matrix.fromArray(Fe.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Fe.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(tt.x,tt.y,tt.width,tt.height),Me===0&&(A.matrix.copy(ot.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),xe===!0&&A.cameras.push(ot)}const fe=a.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const Me=v.getDepthInformation(Te[0]);Me&&Me.isValid&&Me.texture&&M.init(e,Me,a.renderState)}}for(let Te=0;Te<L.length;Te++){const xe=C[Te],fe=L[Te];xe!==null&&fe!==void 0&&fe.update(xe,he,p||c)}U&&U(J,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),E=null}const Ue=new yv;Ue.setAnimationLoop(re),this.setAnimationLoop=function(J){U=J},this.dispose=function(){}}}const Zr=new Ri,YT=new Ht;function qT(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,vv(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,b,L,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),v(y,_)):_.isMeshPhongMaterial?(l(y,_),g(y,_)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,C)):_.isMeshMatcapMaterial?(l(y,_),E(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),M(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,b,L):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===In&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===In&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const b=e.get(_),L=b.envMap,C=b.envMapRotation;L&&(y.envMap.value=L,Zr.copy(C),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),y.envMapRotation.value.setFromMatrix4(YT.makeRotationFromEuler(Zr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,b,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*b,y.scale.value=L*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,b){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function M(y,_){const b=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function KT(s,e,t,r){let a={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,L){const C=L.program;r.uniformBlockBinding(b,C)}function p(b,L){let C=a[b.id];C===void 0&&(E(b),C=g(b),a[b.id]=C,b.addEventListener("dispose",y));const W=L.program;r.updateUBOMapping(b,W);const F=e.render.frame;l[b.id]!==F&&(x(b),l[b.id]=F)}function g(b){const L=v();b.__bindingPointIndex=L;const C=s.createBuffer(),W=b.__size,F=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,W,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,C),C}function v(){for(let b=0;b<f;b++)if(c.indexOf(b)===-1)return c.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(b){const L=a[b.id],C=b.uniforms,W=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let F=0,N=C.length;F<N;F++){const V=Array.isArray(C[F])?C[F]:[C[F]];for(let P=0,A=V.length;P<A;P++){const B=V[P];if(S(B,F,P,W)===!0){const ee=B.__offset,q=Array.isArray(B.value)?B.value:[B.value];let le=0;for(let ue=0;ue<q.length;ue++){const ae=q[ue],ce=M(ae);typeof ae=="number"||typeof ae=="boolean"?(B.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,ee+le,B.__data)):ae.isMatrix3?(B.__data[0]=ae.elements[0],B.__data[1]=ae.elements[1],B.__data[2]=ae.elements[2],B.__data[3]=0,B.__data[4]=ae.elements[3],B.__data[5]=ae.elements[4],B.__data[6]=ae.elements[5],B.__data[7]=0,B.__data[8]=ae.elements[6],B.__data[9]=ae.elements[7],B.__data[10]=ae.elements[8],B.__data[11]=0):(ae.toArray(B.__data,le),le+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ee,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(b,L,C,W){const F=b.value,N=L+"_"+C;if(W[N]===void 0)return typeof F=="number"||typeof F=="boolean"?W[N]=F:W[N]=F.clone(),!0;{const V=W[N];if(typeof F=="number"||typeof F=="boolean"){if(V!==F)return W[N]=F,!0}else if(V.equals(F)===!1)return V.copy(F),!0}return!1}function E(b){const L=b.uniforms;let C=0;const W=16;for(let N=0,V=L.length;N<V;N++){const P=Array.isArray(L[N])?L[N]:[L[N]];for(let A=0,B=P.length;A<B;A++){const ee=P[A],q=Array.isArray(ee.value)?ee.value:[ee.value];for(let le=0,ue=q.length;le<ue;le++){const ae=q[le],ce=M(ae),z=C%W,de=z%ce.boundary,oe=z+de;C+=de,oe!==0&&W-oe<ce.storage&&(C+=W-oe),ee.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=C,C+=ce.storage}}}const F=C%W;return F>0&&(C+=W-F),b.__size=C,b.__cache={},this}function M(b){const L={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(L.boundary=4,L.storage=4):b.isVector2?(L.boundary=8,L.storage=8):b.isVector3||b.isColor?(L.boundary=16,L.storage=12):b.isVector4?(L.boundary=16,L.storage=16):b.isMatrix3?(L.boundary=48,L.storage=48):b.isMatrix4?(L.boundary=64,L.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),L}function y(b){const L=b.target;L.removeEventListener("dispose",y);const C=c.indexOf(L.__bindingPointIndex);c.splice(C,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function _(){for(const b in a)s.deleteBuffer(a[b]);c=[],a={},l={}}return{bind:h,update:p,dispose:_}}class ZT{constructor(e={}){const{canvas:t=By(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),M=new Int32Array(4);let y=null,_=null;const b=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=Pr,this.toneMappingExposure=1;const C=this;let W=!1,F=0,N=0,V=null,P=-1,A=null;const B=new Wt,ee=new Wt;let q=null;const le=new vt(0);let ue=0,ae=t.width,ce=t.height,z=1,de=null,oe=null;const U=new Wt(0,0,ae,ce),re=new Wt(0,0,ae,ce);let Ue=!1;const J=new Dd;let he=!1,Te=!1;const xe=new Ht,fe=new Ht,Me=new Q,Fe=new Wt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function et(){return V===null?z:1}let O=r;function en(R,X){return t.getContext(R,X)}try{const R={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wd}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),O===null){const X="webgl2";if(O=en(X,R),O===null)throw en(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ct,at,Ke,yt,Ye,D,T,Z,ge,ve,pe,Ve,be,Oe,ft,we,Pe,Ze,nt,ze,mt,lt,Ct,G;function Le(){ct=new nw(O),ct.init(),lt=new HT(O,ct),at=new KE(O,ct,e,lt),Ke=new kT(O,ct),at.reverseDepthBuffer&&x&&Ke.buffers.depth.setReversed(!0),yt=new sw(O),Ye=new ET,D=new zT(O,ct,Ke,Ye,at,lt,yt),T=new QE(C),Z=new tw(C),ge=new dS(O),Ct=new YE(O,ge),ve=new iw(O,ge,yt,Ct),pe=new aw(O,ve,ge,yt),nt=new ow(O,at,D),we=new ZE(Ye),Ve=new MT(C,T,Z,ct,at,Ct,we),be=new qT(C,Ye),Oe=new TT,ft=new LT(ct),Ze=new $E(C,T,Z,Ke,pe,S,h),Pe=new FT(C,pe,at),G=new KT(O,yt,at,Ke),ze=new qE(O,ct,yt),mt=new rw(O,ct,yt),yt.programs=Ve.programs,C.capabilities=at,C.extensions=ct,C.properties=Ye,C.renderLists=Oe,C.shadowMap=Pe,C.state=Ke,C.info=yt}Le();const se=new $T(C,O);this.xr=se,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(ae,ce,!1))},this.getSize=function(R){return R.set(ae,ce)},this.setSize=function(R,X,ne=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=R,ce=X,t.width=Math.floor(R*z),t.height=Math.floor(X*z),ne===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(ae*z,ce*z).floor()},this.setDrawingBufferSize=function(R,X,ne){ae=R,ce=X,z=ne,t.width=Math.floor(R*ne),t.height=Math.floor(X*ne),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(U)},this.setViewport=function(R,X,ne,ie){R.isVector4?U.set(R.x,R.y,R.z,R.w):U.set(R,X,ne,ie),Ke.viewport(B.copy(U).multiplyScalar(z).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,X,ne,ie){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,X,ne,ie),Ke.scissor(ee.copy(re).multiplyScalar(z).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(R){Ke.setScissorTest(Ue=R)},this.setOpaqueSort=function(R){de=R},this.setTransparentSort=function(R){oe=R},this.getClearColor=function(R){return R.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(R=!0,X=!0,ne=!0){let ie=0;if(R){let j=!1;if(V!==null){const Ce=V.texture.format;j=Ce===Ld||Ce===bd||Ce===Pd}if(j){const Ce=V.texture.type,Ae=Ce===Ki||Ce===ss||Ce===Qo||Ce===Qs||Ce===Rd||Ce===Cd,Xe=Ze.getClearColor(),Ge=Ze.getClearAlpha(),it=Xe.r,st=Xe.g,je=Xe.b;Ae?(E[0]=it,E[1]=st,E[2]=je,E[3]=Ge,O.clearBufferuiv(O.COLOR,0,E)):(M[0]=it,M[1]=st,M[2]=je,M[3]=Ge,O.clearBufferiv(O.COLOR,0,M))}else ie|=O.COLOR_BUFFER_BIT}X&&(ie|=O.DEPTH_BUFFER_BIT),ne&&(ie|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),Oe.dispose(),ft.dispose(),Ye.dispose(),T.dispose(),Z.dispose(),pe.dispose(),Ct.dispose(),G.dispose(),Ve.dispose(),se.dispose(),se.removeEventListener("sessionstart",as),se.removeEventListener("sessionend",Zi),Pi.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const R=yt.autoReset,X=Pe.enabled,ne=Pe.autoUpdate,ie=Pe.needsUpdate,j=Pe.type;Le(),yt.autoReset=R,Pe.enabled=X,Pe.autoUpdate=ne,Pe.needsUpdate=ie,Pe.type=j}function Ie(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ut(R){const X=R.target;X.removeEventListener("dispose",ut),Nt(X)}function Nt(R){Yt(R),Ye.remove(R)}function Yt(R){const X=Ye.get(R).programs;X!==void 0&&(X.forEach(function(ne){Ve.releaseProgram(ne)}),R.isShaderMaterial&&Ve.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,ne,ie,j,Ce){X===null&&(X=tt);const Ae=j.isMesh&&j.matrixWorld.determinant()<0,Xe=ua(R,X,ne,ie,j);Ke.setMaterial(ie,Ae);let Ge=ne.index,it=1;if(ie.wireframe===!0){if(Ge=ve.getWireframeAttribute(ne),Ge===void 0)return;it=2}const st=ne.drawRange,je=ne.attributes.position;let xt=st.start*it,Rt=(st.start+st.count)*it;Ce!==null&&(xt=Math.max(xt,Ce.start*it),Rt=Math.min(Rt,(Ce.start+Ce.count)*it)),Ge!==null?(xt=Math.max(xt,0),Rt=Math.min(Rt,Ge.count)):je!=null&&(xt=Math.max(xt,0),Rt=Math.min(Rt,je.count));const _t=Rt-xt;if(_t<0||_t===1/0)return;Ct.setup(j,ie,Xe,ne,Ge);let un,dt=ze;if(Ge!==null&&(un=ge.get(Ge),dt=mt,dt.setIndex(un)),j.isMesh)ie.wireframe===!0?(Ke.setLineWidth(ie.wireframeLinewidth*et()),dt.setMode(O.LINES)):dt.setMode(O.TRIANGLES);else if(j.isLine){let qe=ie.linewidth;qe===void 0&&(qe=1),Ke.setLineWidth(qe*et()),j.isLineSegments?dt.setMode(O.LINES):j.isLineLoop?dt.setMode(O.LINE_LOOP):dt.setMode(O.LINE_STRIP)}else j.isPoints?dt.setMode(O.POINTS):j.isSprite&&dt.setMode(O.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)dt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))dt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qe=j._multiDrawStarts,Jn=j._multiDrawCounts,Tt=j._multiDrawCount,cn=Ge?ge.get(Ge).bytesPerElement:1,ei=Ye.get(ie).currentProgram.getUniforms();for(let qt=0;qt<Tt;qt++)ei.setValue(O,"_gl_DrawID",qt),dt.render(qe[qt]/cn,Jn[qt])}else if(j.isInstancedMesh)dt.renderInstances(xt,_t,j.count);else if(ne.isInstancedBufferGeometry){const qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Jn=Math.min(ne.instanceCount,qe);dt.renderInstances(xt,_t,Jn)}else dt.render(xt,_t)};function St(R,X,ne){R.transparent===!0&&R.side===Ei&&R.forceSinglePass===!1?(R.side=In,R.needsUpdate=!0,ls(R,X,ne),R.side=br,R.needsUpdate=!0,ls(R,X,ne),R.side=Ei):ls(R,X,ne)}this.compile=function(R,X,ne=null){ne===null&&(ne=R),_=ft.get(ne),_.init(X),L.push(_),ne.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),R!==ne&&R.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const ie=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ce=j.material;if(Ce)if(Array.isArray(Ce))for(let Ae=0;Ae<Ce.length;Ae++){const Xe=Ce[Ae];St(Xe,ne,j),ie.add(Xe)}else St(Ce,ne,j),ie.add(Ce)}),L.pop(),_=null,ie},this.compileAsync=function(R,X,ne=null){const ie=this.compile(R,X,ne);return new Promise(j=>{function Ce(){if(ie.forEach(function(Ae){Ye.get(Ae).currentProgram.isReady()&&ie.delete(Ae)}),ie.size===0){j(R);return}setTimeout(Ce,10)}ct.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let En=null;function vn(R){En&&En(R)}function as(){Pi.stop()}function Zi(){Pi.start()}const Pi=new yv;Pi.setAnimationLoop(vn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(R){En=R,se.setAnimationLoop(R),R===null?Pi.stop():Pi.start()},se.addEventListener("sessionstart",as),se.addEventListener("sessionend",Zi),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(X),X=se.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,X,V),_=ft.get(R,L.length),_.init(X),L.push(_),fe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),J.setFromProjectionMatrix(fe),Te=this.localClippingEnabled,he=we.init(this.clippingPlanes,Te),y=Oe.get(R,b.length),y.init(),b.push(y),se.enabled===!0&&se.isPresenting===!0){const Ce=C.xr.getDepthSensingMesh();Ce!==null&&bi(Ce,X,-1/0,C.sortObjects)}bi(R,X,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(de,oe),ot=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ot&&Ze.addToRenderList(y,R),this.info.render.frame++,he===!0&&we.beginShadows();const ne=_.state.shadowsArray;Pe.render(ne,R,X),he===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=y.opaque,j=y.transmissive;if(_.setupLights(),X.isArrayCamera){const Ce=X.cameras;if(j.length>0)for(let Ae=0,Xe=Ce.length;Ae<Xe;Ae++){const Ge=Ce[Ae];Ir(ie,j,R,Ge)}ot&&Ze.render(R);for(let Ae=0,Xe=Ce.length;Ae<Xe;Ae++){const Ge=Ce[Ae];Dr(y,R,Ge,Ge.viewport)}}else j.length>0&&Ir(ie,j,R,X),ot&&Ze.render(R),Dr(y,R,X);V!==null&&(D.updateMultisampleRenderTarget(V),D.updateRenderTargetMipmap(V)),R.isScene===!0&&R.onAfterRender(C,R,X),Ct.resetDefaultState(),P=-1,A=null,L.pop(),L.length>0?(_=L[L.length-1],he===!0&&we.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,b.pop(),b.length>0?y=b[b.length-1]:y=null};function bi(R,X,ne,ie){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){ie&&Fe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(fe);const Ae=pe.update(R),Xe=R.material;Xe.visible&&y.push(R,Ae,Xe,ne,Fe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Ae=pe.update(R),Xe=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Fe.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Fe.copy(Ae.boundingSphere.center)),Fe.applyMatrix4(R.matrixWorld).applyMatrix4(fe)),Array.isArray(Xe)){const Ge=Ae.groups;for(let it=0,st=Ge.length;it<st;it++){const je=Ge[it],xt=Xe[je.materialIndex];xt&&xt.visible&&y.push(R,Ae,xt,ne,Fe.z,je)}}else Xe.visible&&y.push(R,Ae,Xe,ne,Fe.z,null)}}const Ce=R.children;for(let Ae=0,Xe=Ce.length;Ae<Xe;Ae++)bi(Ce[Ae],X,ne,ie)}function Dr(R,X,ne,ie){const j=R.opaque,Ce=R.transmissive,Ae=R.transparent;_.setupLightsView(ne),he===!0&&we.setGlobalState(C.clippingPlanes,ne),ie&&Ke.viewport(B.copy(ie)),j.length>0&&Qi(j,X,ne),Ce.length>0&&Qi(Ce,X,ne),Ae.length>0&&Qi(Ae,X,ne),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Ir(R,X,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ie.id]===void 0&&(_.state.transmissionRenderTarget[ie.id]=new os(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?ia:Ki,minFilter:is,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Ce=_.state.transmissionRenderTarget[ie.id],Ae=ie.viewport||B;Ce.setSize(Ae.z,Ae.w);const Xe=C.getRenderTarget();C.setRenderTarget(Ce),C.getClearColor(le),ue=C.getClearAlpha(),ue<1&&C.setClearColor(16777215,.5),C.clear(),ot&&Ze.render(ne);const Ge=C.toneMapping;C.toneMapping=Pr;const it=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),_.setupLightsView(ie),he===!0&&we.setGlobalState(C.clippingPlanes,ie),Qi(R,ne,ie),D.updateMultisampleRenderTarget(Ce),D.updateRenderTargetMipmap(Ce),ct.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let je=0,xt=X.length;je<xt;je++){const Rt=X[je],_t=Rt.object,un=Rt.geometry,dt=Rt.material,qe=Rt.group;if(dt.side===Ei&&_t.layers.test(ie.layers)){const Jn=dt.side;dt.side=In,dt.needsUpdate=!0,aa(_t,ne,ie,un,dt,qe),dt.side=Jn,dt.needsUpdate=!0,st=!0}}st===!0&&(D.updateMultisampleRenderTarget(Ce),D.updateRenderTargetMipmap(Ce))}C.setRenderTarget(Xe),C.setClearColor(le,ue),it!==void 0&&(ie.viewport=it),C.toneMapping=Ge}function Qi(R,X,ne){const ie=X.isScene===!0?X.overrideMaterial:null;for(let j=0,Ce=R.length;j<Ce;j++){const Ae=R[j],Xe=Ae.object,Ge=Ae.geometry,it=ie===null?Ae.material:ie,st=Ae.group;Xe.layers.test(ne.layers)&&aa(Xe,X,ne,Ge,it,st)}}function aa(R,X,ne,ie,j,Ce){R.onBeforeRender(C,X,ne,ie,j,Ce),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(C,X,ne,ie,R,Ce),j.transparent===!0&&j.side===Ei&&j.forceSinglePass===!1?(j.side=In,j.needsUpdate=!0,C.renderBufferDirect(ne,X,ie,j,R,Ce),j.side=br,j.needsUpdate=!0,C.renderBufferDirect(ne,X,ie,j,R,Ce),j.side=Ei):C.renderBufferDirect(ne,X,ie,j,R,Ce),R.onAfterRender(C,X,ne,ie,j,Ce)}function ls(R,X,ne){X.isScene!==!0&&(X=tt);const ie=Ye.get(R),j=_.state.lights,Ce=_.state.shadowsArray,Ae=j.state.version,Xe=Ve.getParameters(R,j.state,Ce,X,ne),Ge=Ve.getProgramCacheKey(Xe);let it=ie.programs;ie.environment=R.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(R.isMeshStandardMaterial?Z:T).get(R.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,it===void 0&&(R.addEventListener("dispose",ut),it=new Map,ie.programs=it);let st=it.get(Ge);if(st!==void 0){if(ie.currentProgram===st&&ie.lightsStateVersion===Ae)return gi(R,Xe),st}else Xe.uniforms=Ve.getUniforms(R),R.onBeforeCompile(Xe,C),st=Ve.acquireProgram(Xe,Ge),it.set(Ge,st),ie.uniforms=Xe.uniforms;const je=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=we.uniform),gi(R,Xe),ie.needsLights=su(R),ie.lightsStateVersion=Ae,ie.needsLights&&(je.ambientLightColor.value=j.state.ambient,je.lightProbe.value=j.state.probe,je.directionalLights.value=j.state.directional,je.directionalLightShadows.value=j.state.directionalShadow,je.spotLights.value=j.state.spot,je.spotLightShadows.value=j.state.spotShadow,je.rectAreaLights.value=j.state.rectArea,je.ltc_1.value=j.state.rectAreaLTC1,je.ltc_2.value=j.state.rectAreaLTC2,je.pointLights.value=j.state.point,je.pointLightShadows.value=j.state.pointShadow,je.hemisphereLights.value=j.state.hemi,je.directionalShadowMap.value=j.state.directionalShadowMap,je.directionalShadowMatrix.value=j.state.directionalShadowMatrix,je.spotShadowMap.value=j.state.spotShadowMap,je.spotLightMatrix.value=j.state.spotLightMatrix,je.spotLightMap.value=j.state.spotLightMap,je.pointShadowMap.value=j.state.pointShadowMap,je.pointShadowMatrix.value=j.state.pointShadowMatrix),ie.currentProgram=st,ie.uniformsList=null,st}function la(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=jl.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function gi(R,X){const ne=Ye.get(R);ne.outputColorSpace=X.outputColorSpace,ne.batching=X.batching,ne.batchingColor=X.batchingColor,ne.instancing=X.instancing,ne.instancingColor=X.instancingColor,ne.instancingMorph=X.instancingMorph,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function ua(R,X,ne,ie,j){X.isScene!==!0&&(X=tt),D.resetTextureUnits();const Ce=X.fog,Ae=ie.isMeshStandardMaterial?X.environment:null,Xe=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:io,Ge=(ie.isMeshStandardMaterial?Z:T).get(ie.envMap||Ae),it=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,st=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),je=!!ne.morphAttributes.position,xt=!!ne.morphAttributes.normal,Rt=!!ne.morphAttributes.color;let _t=Pr;ie.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(_t=C.toneMapping);const un=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,dt=un!==void 0?un.length:0,qe=Ye.get(ie),Jn=_.state.lights;if(he===!0&&(Te===!0||R!==A)){const _n=R===A&&ie.id===P;we.setState(ie,R,_n)}let Tt=!1;ie.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Jn.state.version||qe.outputColorSpace!==Xe||j.isBatchedMesh&&qe.batching===!1||!j.isBatchedMesh&&qe.batching===!0||j.isBatchedMesh&&qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qe.instancing===!1||!j.isInstancedMesh&&qe.instancing===!0||j.isSkinnedMesh&&qe.skinning===!1||!j.isSkinnedMesh&&qe.skinning===!0||j.isInstancedMesh&&qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qe.instancingMorph===!1&&j.morphTexture!==null||qe.envMap!==Ge||ie.fog===!0&&qe.fog!==Ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==we.numPlanes||qe.numIntersection!==we.numIntersection)||qe.vertexAlphas!==it||qe.vertexTangents!==st||qe.morphTargets!==je||qe.morphNormals!==xt||qe.morphColors!==Rt||qe.toneMapping!==_t||qe.morphTargetsCount!==dt)&&(Tt=!0):(Tt=!0,qe.__version=ie.version);let cn=qe.currentProgram;Tt===!0&&(cn=ls(ie,X,j));let ei=!1,qt=!1,vi=!1;const Lt=cn.getUniforms(),Gn=qe.uniforms;if(Ke.useProgram(cn.program)&&(ei=!0,qt=!0,vi=!0),ie.id!==P&&(P=ie.id,qt=!0),ei||A!==R){Ke.buffers.depth.getReversed()?(xe.copy(R.projectionMatrix),Hy(xe),Vy(xe),Lt.setValue(O,"projectionMatrix",xe)):Lt.setValue(O,"projectionMatrix",R.projectionMatrix),Lt.setValue(O,"viewMatrix",R.matrixWorldInverse);const Wn=Lt.map.cameraPosition;Wn!==void 0&&Wn.setValue(O,Me.setFromMatrixPosition(R.matrixWorld)),at.logarithmicDepthBuffer&&Lt.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Lt.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,qt=!0,vi=!0)}if(j.isSkinnedMesh){Lt.setOptional(O,j,"bindMatrix"),Lt.setOptional(O,j,"bindMatrixInverse");const _n=j.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Lt.setValue(O,"boneTexture",_n.boneTexture,D))}j.isBatchedMesh&&(Lt.setOptional(O,j,"batchingTexture"),Lt.setValue(O,"batchingTexture",j._matricesTexture,D),Lt.setOptional(O,j,"batchingIdTexture"),Lt.setValue(O,"batchingIdTexture",j._indirectTexture,D),Lt.setOptional(O,j,"batchingColorTexture"),j._colorsTexture!==null&&Lt.setValue(O,"batchingColorTexture",j._colorsTexture,D));const Li=ne.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&nt.update(j,ne,cn),(qt||qe.receiveShadow!==j.receiveShadow)&&(qe.receiveShadow=j.receiveShadow,Lt.setValue(O,"receiveShadow",j.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Gn.envMap.value=Ge,Gn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&X.environment!==null&&(Gn.envMapIntensity.value=X.environmentIntensity),qt&&(Lt.setValue(O,"toneMappingExposure",C.toneMappingExposure),qe.needsLights&&ca(Gn,vi),Ce&&ie.fog===!0&&be.refreshFogUniforms(Gn,Ce),be.refreshMaterialUniforms(Gn,ie,z,ce,_.state.transmissionRenderTarget[R.id]),jl.upload(O,la(qe),Gn,D)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(jl.upload(O,la(qe),Gn,D),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Lt.setValue(O,"center",j.center),Lt.setValue(O,"modelViewMatrix",j.modelViewMatrix),Lt.setValue(O,"normalMatrix",j.normalMatrix),Lt.setValue(O,"modelMatrix",j.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const _n=ie.uniformsGroups;for(let Wn=0,wn=_n.length;Wn<wn;Wn++){const fa=_n[Wn];G.update(fa,cn),G.bind(fa,cn)}}return cn}function ca(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function su(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,X,ne){Ye.get(R.texture).__webglTexture=X,Ye.get(R.depthTexture).__webglTexture=ne;const ie=Ye.get(R);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const ne=Ye.get(R);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,ne=0){V=R,F=X,N=ne;let ie=!0,j=null,Ce=!1,Ae=!1;if(R){const Ge=Ye.get(R);if(Ge.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(O.FRAMEBUFFER,null),ie=!1;else if(Ge.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Ge.__hasExternalTextures)D.rebindTextures(R,Ye.get(R.texture).__webglTexture,Ye.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const je=R.depthTexture;if(Ge.__boundDepthTexture!==je){if(je!==null&&Ye.has(je)&&(R.width!==je.image.width||R.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const it=R.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ae=!0);const st=Ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(st[X])?j=st[X][ne]:j=st[X],Ce=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?j=Ye.get(R).__webglMultisampledFramebuffer:Array.isArray(st)?j=st[ne]:j=st,B.copy(R.viewport),ee.copy(R.scissor),q=R.scissorTest}else B.copy(U).multiplyScalar(z).floor(),ee.copy(re).multiplyScalar(z).floor(),q=Ue;if(Ke.bindFramebuffer(O.FRAMEBUFFER,j)&&ie&&Ke.drawBuffers(R,j),Ke.viewport(B),Ke.scissor(ee),Ke.setScissorTest(q),Ce){const Ge=Ye.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ge.__webglTexture,ne)}else if(Ae){const Ge=Ye.get(R.texture),it=X||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.__webglTexture,ne||0,it)}P=-1},this.readRenderTargetPixels=function(R,X,ne,ie,j,Ce,Ae){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Xe=Xe[Ae]),Xe){Ke.bindFramebuffer(O.FRAMEBUFFER,Xe);try{const Ge=R.texture,it=Ge.format,st=Ge.type;if(!at.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ie&&ne>=0&&ne<=R.height-j&&O.readPixels(X,ne,ie,j,lt.convert(it),lt.convert(st),Ce)}finally{const Ge=V!==null?Ye.get(V).__webglFramebuffer:null;Ke.bindFramebuffer(O.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(R,X,ne,ie,j,Ce,Ae){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Xe=Xe[Ae]),Xe){const Ge=R.texture,it=Ge.format,st=Ge.type;if(!at.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-ie&&ne>=0&&ne<=R.height-j){Ke.bindFramebuffer(O.FRAMEBUFFER,Xe);const je=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,je),O.bufferData(O.PIXEL_PACK_BUFFER,Ce.byteLength,O.STREAM_READ),O.readPixels(X,ne,ie,j,lt.convert(it),lt.convert(st),0);const xt=V!==null?Ye.get(V).__webglFramebuffer:null;Ke.bindFramebuffer(O.FRAMEBUFFER,xt);const Rt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await zy(O,Rt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,je),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ce),O.deleteBuffer(je),O.deleteSync(Rt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,ne=0){R.isTexture!==!0&&(Yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);const ie=Math.pow(2,-ne),j=Math.floor(R.image.width*ie),Ce=Math.floor(R.image.height*ie),Ae=X!==null?X.x:0,Xe=X!==null?X.y:0;D.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,ne,0,0,Ae,Xe,j,Ce),Ke.unbindTexture()},this.copyTextureToTexture=function(R,X,ne=null,ie=null,j=0){R.isTexture!==!0&&(Yo("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,R=arguments[1],X=arguments[2],j=arguments[3]||0,ne=null);let Ce,Ae,Xe,Ge,it,st,je,xt,Rt;const _t=R.isCompressedTexture?R.mipmaps[j]:R.image;ne!==null?(Ce=ne.max.x-ne.min.x,Ae=ne.max.y-ne.min.y,Xe=ne.isBox3?ne.max.z-ne.min.z:1,Ge=ne.min.x,it=ne.min.y,st=ne.isBox3?ne.min.z:0):(Ce=_t.width,Ae=_t.height,Xe=_t.depth||1,Ge=0,it=0,st=0),ie!==null?(je=ie.x,xt=ie.y,Rt=ie.z):(je=0,xt=0,Rt=0);const un=lt.convert(X.format),dt=lt.convert(X.type);let qe;X.isData3DTexture?(D.setTexture3D(X,0),qe=O.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),qe=O.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),qe=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const Jn=O.getParameter(O.UNPACK_ROW_LENGTH),Tt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),cn=O.getParameter(O.UNPACK_SKIP_PIXELS),ei=O.getParameter(O.UNPACK_SKIP_ROWS),qt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,_t.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ge),O.pixelStorei(O.UNPACK_SKIP_ROWS,it),O.pixelStorei(O.UNPACK_SKIP_IMAGES,st);const vi=R.isDataArrayTexture||R.isData3DTexture,Lt=X.isDataArrayTexture||X.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Gn=Ye.get(R),Li=Ye.get(X),_n=Ye.get(Gn.__renderTarget),Wn=Ye.get(Li.__renderTarget);Ke.bindFramebuffer(O.READ_FRAMEBUFFER,_n.__webglFramebuffer),Ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let wn=0;wn<Xe;wn++)vi&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ye.get(R).__webglTexture,j,st+wn),R.isDepthTexture?(Lt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ye.get(X).__webglTexture,j,Rt+wn),O.blitFramebuffer(Ge,it,Ce,Ae,je,xt,Ce,Ae,O.DEPTH_BUFFER_BIT,O.NEAREST)):Lt?O.copyTexSubImage3D(qe,j,je,xt,Rt+wn,Ge,it,Ce,Ae):O.copyTexSubImage2D(qe,j,je,xt,Rt+wn,Ge,it,Ce,Ae);Ke.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Lt?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(qe,j,je,xt,Rt,Ce,Ae,Xe,un,dt,_t.data):X.isCompressedArrayTexture?O.compressedTexSubImage3D(qe,j,je,xt,Rt,Ce,Ae,Xe,un,_t.data):O.texSubImage3D(qe,j,je,xt,Rt,Ce,Ae,Xe,un,dt,_t):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,j,je,xt,Ce,Ae,un,dt,_t.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,j,je,xt,_t.width,_t.height,un,_t.data):O.texSubImage2D(O.TEXTURE_2D,j,je,xt,Ce,Ae,un,dt,_t);O.pixelStorei(O.UNPACK_ROW_LENGTH,Jn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Tt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,cn),O.pixelStorei(O.UNPACK_SKIP_ROWS,ei),O.pixelStorei(O.UNPACK_SKIP_IMAGES,qt),j===0&&X.generateMipmaps&&O.generateMipmap(qe),Ke.unbindTexture()},this.copyTextureToTexture3D=function(R,X,ne=null,ie=null,j=0){return R.isTexture!==!0&&(Yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,R=arguments[2],X=arguments[3],j=arguments[4]||0),Yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,ne,ie,j)},this.initRenderTarget=function(R){Ye.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Ke.unbindTexture()},this.resetState=function(){F=0,N=0,V=null,Ke.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}class Ud{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new vt(e),this.density=t}clone(){return new Ud(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class QT extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Av extends so{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zl=new Q,Ql=new Q,Sg=new Ht,$o=new dv,Ul=new iu,Mf=new Q,Mg=new Q;class JT extends on{constructor(e=new Vn,t=new Av){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)Zl.fromBufferAttribute(t,a-1),Ql.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=Zl.distanceTo(Ql);e.setAttribute("lineDistance",new Vt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ul.copy(r.boundingSphere),Ul.applyMatrix4(a),Ul.radius+=l,e.ray.intersectsSphere(Ul)===!1)return;Sg.copy(a).invert(),$o.copy(e.ray).applyMatrix4(Sg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,g=r.index,x=r.attributes.position;if(g!==null){const S=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let M=S,y=E-1;M<y;M+=p){const _=g.getX(M),b=g.getX(M+1),L=Fl(this,e,$o,h,_,b);L&&t.push(L)}if(this.isLineLoop){const M=g.getX(E-1),y=g.getX(S),_=Fl(this,e,$o,h,M,y);_&&t.push(_)}}else{const S=Math.max(0,c.start),E=Math.min(x.count,c.start+c.count);for(let M=S,y=E-1;M<y;M+=p){const _=Fl(this,e,$o,h,M,M+1);_&&t.push(_)}if(this.isLineLoop){const M=Fl(this,e,$o,h,E-1,S);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Fl(s,e,t,r,a,l){const c=s.geometry.attributes.position;if(Zl.fromBufferAttribute(c,a),Ql.fromBufferAttribute(c,l),t.distanceSqToSegment(Zl,Ql,Mf,Mg)>r)return;Mf.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Mf);if(!(h<e.near||h>e.far))return{distance:h,point:Mg.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Eg=new Q,wg=new Q;class e1 extends JT{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)Eg.fromBufferAttribute(t,a),wg.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Eg.distanceTo(wg);e.setAttribute("lineDistance",new Vt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fd extends Vn{constructor(e=1,t=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:a},t=Math.max(3,t);const l=[],c=[],f=[],h=[],p=new Q,g=new wt;c.push(0,0,0),f.push(0,0,1),h.push(.5,.5);for(let v=0,x=3;v<=t;v++,x+=3){const S=r+v/t*a;p.x=e*Math.cos(S),p.y=e*Math.sin(S),c.push(p.x,p.y,p.z),f.push(0,0,1),g.x=(c[x]/e+1)/2,g.y=(c[x+1]/e+1)/2,h.push(g.x,g.y)}for(let v=1;v<=t;v++)l.push(v,v+1,0);this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Jo extends Vn{constructor(e=1,t=1,r=1,a=32,l=1,c=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const g=[],v=[],x=[],S=[];let E=0;const M=[],y=r/2;let _=0;b(),c===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new Vt(v,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(S,2));function b(){const C=new Q,W=new Q;let F=0;const N=(t-e)/r;for(let V=0;V<=l;V++){const P=[],A=V/l,B=A*(t-e)+e;for(let ee=0;ee<=a;ee++){const q=ee/a,le=q*h+f,ue=Math.sin(le),ae=Math.cos(le);W.x=B*ue,W.y=-A*r+y,W.z=B*ae,v.push(W.x,W.y,W.z),C.set(ue,N,ae).normalize(),x.push(C.x,C.y,C.z),S.push(q,1-A),P.push(E++)}M.push(P)}for(let V=0;V<a;V++)for(let P=0;P<l;P++){const A=M[P][V],B=M[P+1][V],ee=M[P+1][V+1],q=M[P][V+1];(e>0||P!==0)&&(g.push(A,B,q),F+=3),(t>0||P!==l-1)&&(g.push(B,ee,q),F+=3)}p.addGroup(_,F,0),_+=F}function L(C){const W=E,F=new wt,N=new Q;let V=0;const P=C===!0?e:t,A=C===!0?1:-1;for(let ee=1;ee<=a;ee++)v.push(0,y*A,0),x.push(0,A,0),S.push(.5,.5),E++;const B=E;for(let ee=0;ee<=a;ee++){const le=ee/a*h+f,ue=Math.cos(le),ae=Math.sin(le);N.x=P*ae,N.y=y*A,N.z=P*ue,v.push(N.x,N.y,N.z),x.push(0,A,0),F.x=ue*.5+.5,F.y=ae*.5*A+.5,S.push(F.x,F.y),E++}for(let ee=0;ee<a;ee++){const q=W+ee,le=B+ee;C===!0?g.push(le,le+1,q):g.push(le+1,le,q),V+=3}p.addGroup(_,V,C===!0?1:2),_+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ko extends Jo{constructor(e=1,t=1,r=32,a=1,l=!1,c=0,f=Math.PI*2){super(0,e,t,r,a,l,c,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:c,thetaLength:f}}static fromJSON(e){return new Ko(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Od extends Vn{constructor(e=.5,t=1,r=32,a=1,l=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:a,thetaStart:l,thetaLength:c},r=Math.max(3,r),a=Math.max(1,a);const f=[],h=[],p=[],g=[];let v=e;const x=(t-e)/a,S=new Q,E=new wt;for(let M=0;M<=a;M++){for(let y=0;y<=r;y++){const _=l+y/r*c;S.x=v*Math.cos(_),S.y=v*Math.sin(_),h.push(S.x,S.y,S.z),p.push(0,0,1),E.x=(S.x/t+1)/2,E.y=(S.y/t+1)/2,g.push(E.x,E.y)}v+=x}for(let M=0;M<a;M++){const y=M*(r+1);for(let _=0;_<r;_++){const b=_+y,L=b,C=b+r+1,W=b+r+2,F=b+1;f.push(L,C,F),f.push(C,W,F)}}this.setIndex(f),this.setAttribute("position",new Vt(h,3)),this.setAttribute("normal",new Vt(p,3)),this.setAttribute("uv",new Vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Od(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Tr extends Vn{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(c+f,Math.PI);let p=0;const g=[],v=new Q,x=new Q,S=[],E=[],M=[],y=[];for(let _=0;_<=r;_++){const b=[],L=_/r;let C=0;_===0&&c===0?C=.5/t:_===r&&h===Math.PI&&(C=-.5/t);for(let W=0;W<=t;W++){const F=W/t;v.x=-e*Math.cos(a+F*l)*Math.sin(c+L*f),v.y=e*Math.cos(c+L*f),v.z=e*Math.sin(a+F*l)*Math.sin(c+L*f),E.push(v.x,v.y,v.z),x.copy(v).normalize(),M.push(x.x,x.y,x.z),y.push(F+C,1-L),b.push(p++)}g.push(b)}for(let _=0;_<r;_++)for(let b=0;b<t;b++){const L=g[_][b+1],C=g[_][b],W=g[_+1][b],F=g[_+1][b+1];(_!==0||c>0)&&S.push(L,C,F),(_!==r-1||h<Math.PI)&&S.push(C,W,F)}this.setIndex(S),this.setAttribute("position",new Vt(E,3)),this.setAttribute("normal",new Vt(M,3)),this.setAttribute("uv",new Vt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sn extends so{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=av,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kd extends on{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class t1 extends kd{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ef=new Ht,Tg=new Q,Ag=new Q;class n1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dd,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Tg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tg),Ag.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ag),t.updateMatrixWorld(),Ef.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ef),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ef)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class i1 extends n1{constructor(){super(new Id(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class r1 extends kd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new i1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class s1 extends kd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class o1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Rg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Rg(){return performance.now()}class a1 extends e1{constructor(e=10,t=10,r=4473924,a=8947848){r=new vt(r),a=new vt(a);const l=t/2,c=e/t,f=e/2,h=[],p=[];for(let x=0,S=0,E=-f;x<=t;x++,E+=c){h.push(-f,0,E,f,0,E),h.push(E,0,-f,E,0,f);const M=x===l?r:a;M.toArray(p,S),S+=3,M.toArray(p,S),S+=3,M.toArray(p,S),S+=3,M.toArray(p,S),S+=3}const g=new Vn;g.setAttribute("position",new Vt(h,3)),g.setAttribute("color",new Vt(p,3));const v=new Av({vertexColors:!0,toneMapped:!1});super(g,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);class l1{constructor(e){this.canvas=e,this.objects=[],this.highlighted=null,this.init()}init(){this.scene=new QT,this.scene.background=new vt(8900331),this.scene.fog=new Ud(8900331,.012),this.renderer=new ZT({canvas:this.canvas,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qg,this.renderer.outputColorSpace=Hn;const e=window.innerWidth/window.innerHeight;this.frustumSize=18,this.camera=new Id(-this.frustumSize*e,this.frustumSize*e,this.frustumSize,-this.frustumSize,.1,1e3),this.camera.position.set(25,25,25),this.camera.lookAt(0,0,0);const t=new s1(16774630,.55);this.scene.add(t);const r=new t1(8900331,9498256,.35);this.scene.add(r),this.sunLight=new r1(16775920,.9),this.sunLight.position.set(15,30,15),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera.left=-30,this.sunLight.shadow.camera.right=30,this.sunLight.shadow.camera.top=30,this.sunLight.shadow.camera.bottom=-30,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=100,this.sunLight.shadow.bias=-.001,this.scene.add(this.sunLight),this.createGround(),this.createStarterObjects(),window.addEventListener("resize",this.onResize.bind(this)),this.clock=new o1,this.animate()}createGround(){const e=new rs(60,60),t=new Sn({color:8308816}),r=new It(e,t);r.rotation.x=-Math.PI/2,r.receiveShadow=!0,this.scene.add(r);const a=new a1(60,30,5942581,5942581);a.material.opacity=.15,a.material.transparent=!0,a.position.y=.01,this.scene.add(a);for(let l=0;l<40;l++){const c=new Fd(.25+Math.random()*.3,6),f=new Sn({color:new vt().setHSL(.28,.5+Math.random()*.3,.45+Math.random()*.15)}),h=new It(c,f);h.rotation.x=-Math.PI/2,h.position.set((Math.random()-.5)*50,.02,(Math.random()-.5)*50),this.scene.add(h)}}createStarterObjects(){this.addTree(-3,-2),this.addTree(5,3),this.addTree(-6,5),this.addFlower(1,-1),this.addFlower(2,1),this.addFlower(-1,3),this.addFlower(4,-3),this.addHouse(8,-5),this.addAnimal(0,4)}addTree(e,t){const r=new Rr;r.userData={type:"tree",id:`tree_${Date.now()}_${Math.random()}`};const a=new Jo(.15,.22,1.4,8),l=new Sn({color:9133628}),c=new It(a,l);c.position.y=.7,c.castShadow=!0,r.add(c);const f=[2984526,3841374,4763752];for(let h=0;h<3;h++){const p=new Ko(.9-h*.15,.9,8),g=new Sn({color:f[h]}),v=new It(p,g);v.position.y=1.6+h*.55,v.castShadow=!0,r.add(v)}return r.position.set(e,0,t),this.scene.add(r),this.objects.push(r),r}addFlower(e,t){const r=new Rr;r.userData={type:"flower",id:`flower_${Date.now()}_${Math.random()}`};const a=new Jo(.03,.03,.5,6),l=new Sn({color:4890175}),c=new It(a,l);c.position.y=.25,r.add(c);const f=[16744115,16757575,10980346,16739179,4906624],h=f[Math.floor(Math.random()*f.length)];for(let x=0;x<5;x++){const S=new Tr(.12,8,8),E=new Sn({color:h}),M=new It(S,E),y=x/5*Math.PI*2;M.position.set(Math.cos(y)*.15,.55,Math.sin(y)*.15),M.scale.set(1,.5,1),r.add(M)}const p=new Tr(.08,8,8),g=new Sn({color:16766720}),v=new It(p,g);return v.position.y=.55,r.add(v),r.position.set(e,0,t),this.scene.add(r),this.objects.push(r),r}addHouse(e,t){const r=new Rr;r.userData={type:"house",id:`house_${Date.now()}_${Math.random()}`};const a=new oo(2,1.5,1.8),l=new Sn({color:16774630}),c=new It(a,l);c.position.y=.75,c.castShadow=!0,c.receiveShadow=!0,r.add(c);const f=new Ko(1.6,1,4),h=new Sn({color:13919050}),p=new It(f,h);p.position.y=2,p.rotation.y=Math.PI/4,p.castShadow=!0,r.add(p);const g=new rs(.4,.7),v=new Sn({color:9133628}),x=new It(g,v);x.position.set(0,.35,.91),r.add(x);const S=new rs(.35,.35),E=new Sn({color:8900331}),M=new It(S,E);return M.position.set(.6,1,.91),r.add(M),r.position.set(e,0,t),this.scene.add(r),this.objects.push(r),r}addAnimal(e,t){const r=new Rr;r.userData={type:"animal",id:`animal_${Date.now()}_${Math.random()}`,state:"sleeping"};const a=new Tr(.4,12,8),l=new Sn({color:15259063}),c=new It(a,l);c.scale.set(1.3,.8,1),c.position.y=.3,c.castShadow=!0,r.add(c);const f=new Tr(.25,12,8),h=new Sn({color:15259063}),p=new It(f,h);p.position.set(.45,.4,0),p.castShadow=!0,r.add(p);for(let y of[-1,1]){const _=new Ko(.08,.2,6),b=new Sn({color:16107168}),L=new It(_,b);L.position.set(.45,.65,y*.15),r.add(L)}const g=new Tr(.04,8,8),v=new Sn({color:3355443}),x=new It(g,v);x.position.set(.65,.45,.1),x.scale.y=.2,r.add(x);const S=new Tr(.06,6,6),E=new Kl({color:10980346,transparent:!0,opacity:.7}),M=new It(S,E);return M.position.set(.6,.9,0),M.name="sleepIndicator",r.add(M),r.position.set(e,0,t),this.scene.add(r),this.objects.push(r),r}highlightObject(e){if(this.clearHighlight(),!e)return;const t=new It(new Od(.6,.8,24),new Kl({color:16766720,side:Ei,transparent:!0,opacity:.6}));t.rotation.x=-Math.PI/2,t.position.y=.02,t.name="__highlight__",e.add(t),this.highlighted=e}clearHighlight(){if(this.highlighted){const e=this.highlighted.getObjectByName("__highlight__");e&&this.highlighted.remove(e),this.highlighted=null}}wakeAnimal(e){if(!e||e.userData.type!=="animal")return;e.userData.state="awake";const t=e.getObjectByName("sleepIndicator");t&&e.remove(t),e.children.forEach(r=>{var a;((a=r.geometry)==null?void 0:a.type)==="SphereGeometry"&&r.scale.y<.5&&(r.scale.y=1)})}growSeed(e,t){const r=this.addTree(e,t);return r.scale.set(.01,.01,.01),r.userData.growing=!0,r.userData.growTarget=1,r}animate(){requestAnimationFrame(this.animate.bind(this));const e=this.clock.getElapsedTime();if(this.objects.forEach(t=>{if(t.userData.growing){const r=t.scale.x,a=t.userData.growTarget||1;r<a-.01?t.scale.setScalar(r+(a-r)*.03):(t.scale.setScalar(a),t.userData.growing=!1)}if(t.userData.type==="flower"&&(t.rotation.z=Math.sin(e*1.5+t.position.x)*.05),t.userData.type==="animal"&&t.userData.state==="sleeping"){const r=t.getObjectByName("sleepIndicator");r&&(r.position.y=.9+Math.sin(e*2)*.15,r.material.opacity=.4+Math.sin(e*3)*.3)}}),this.highlighted){const t=this.highlighted.getObjectByName("__highlight__");t&&(t.material.opacity=.4+Math.sin(e*4)*.25,t.scale.setScalar(1+Math.sin(e*3)*.08))}this.renderer.render(this.scene,this.camera)}onResize(){const e=window.innerWidth/window.innerHeight;this.camera.left=-this.frustumSize*e,this.camera.right=this.frustumSize*e,this.camera.top=this.frustumSize,this.camera.bottom=-this.frustumSize,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}dispose(){window.removeEventListener("resize",this.onResize.bind(this)),this.renderer.dispose()}}const u1=1200;class c1{constructor(){this.listeners=[],this._lastGaze={x:0,y:0,time:0},this._dwellFired=!1,this.voiceReady=!1,this.eyeReady=!1,this.gestureReady=!1,this.tapReady=!1,this._tapSocket=null}onAction(e){this.listeners.push(e)}_emit(e,t,r={}){this.listeners.forEach(a=>a({action:e,source:t,data:r}))}initVoice(){const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e){console.warn("[Input] Speech Recognition not available in this browser.");return}this.recognition=new e,this.recognition.continuous=!0,this.recognition.interimResults=!1,this.recognition.lang="en-US",this.recognition.onresult=t=>{const r=t.results[t.results.length-1][0].transcript.trim().toLowerCase();console.log(`[Voice] "${r}"`),this._matchVoiceCommand(r)},this.recognition.onerror=t=>{console.warn("[Voice] error",t.error),t.error!=="aborted"&&setTimeout(()=>this.recognition.start(),500)},this.recognition.onend=()=>{try{this.recognition.start()}catch{}};try{this.recognition.start(),this.voiceReady=!0,console.log("[Input] ✅ Voice recognition started")}catch{console.warn("[Input] Could not start voice recognition")}}_matchVoiceCommand(e){const t=[{keywords:["grow","plant","seed","tree"],action:"grow"},{keywords:["wake","hello animal","hey"],action:"wake"},{keywords:["catch","light","orb"],action:"catch"},{keywords:["move","drag"],action:"move"},{keywords:["sun","day"],action:"sun"},{keywords:["moon","night"],action:"moon"},{keywords:["hello","hi"],action:"chat_hello"},{keywords:["good job","nice","great"],action:"chat_goodjob"},{keywords:["help"],action:"chat_help"},{keywords:["build","house"],action:"build"}];for(const r of t)if(r.keywords.some(a=>e.includes(a))){this._emit(r.action,"voice",{transcript:e});return}this._emit("unknown","voice",{transcript:e})}initEyeTracking(){if(typeof window.webgazer>"u"){console.warn("[Input] WebGazer.js not loaded. Include it via <script> in index.html.");return}window.webgazer.setGazeListener(e=>{e&&this._processGaze(e.x,e.y)}).begin(),window.webgazer.showVideo(!1),window.webgazer.showPredictionPoints(!1),window.webgazer.showFaceOverlay(!1),window.webgazer.showFaceFeedbackBox(!1),this.eyeReady=!0,console.log("[Input] ✅ Eye tracking started (WebGazer)")}_processGaze(e,t){const r=Math.abs(e-this._lastGaze.x),a=Math.abs(t-this._lastGaze.y),l=Date.now();if(r>60||a>60){this._lastGaze={x:e,y:t,time:l},this._dwellFired=!1,this._emit("gaze_move","eye",{x:e,y:t});return}!this._dwellFired&&l-this._lastGaze.time>=u1&&(this._dwellFired=!0,this._emit("gaze_select","eye",{x:this._lastGaze.x,y:this._lastGaze.y}),console.log(`[Eye] Dwell select at (${Math.round(e)}, ${Math.round(t)})`))}initGestures(){console.log("[Input] ✅ Gesture system ready (call processHandLandmarks when MediaPipe data arrives)"),this.gestureReady=!0}processHandLandmarks(e){if(!e||e.length===0)return;const t=this._classifyGesture(e);t&&this._emit(t,"gesture",{landmarks:e})}_classifyGesture(e){const t=e[4],r=e[8],a=e[12],l=e[16],c=e[20],f=e[6],h=e[10],p=e[14],g=e[18],v=[r.y<f.y,a.y<h.y,l.y<p.y,c.y<g.y],x=v.filter(Boolean).length;return x===4?"open_palm":x===1&&v[0]?"point":Math.hypot(t.x-r.x,t.y-r.y)<.05?"pinch":x===0?"fist":null}initTapSensor(e="ws://localhost:8765"){const t=()=>{const r=new WebSocket(e);this._tapSocket=r,r.onopen=()=>{this.tapReady=!0,console.log("[Input] ✅ Physical tap sensor connected via WebSocket")},r.onmessage=a=>{let l;try{l=JSON.parse(a.data)}catch{return}const{event:c}=l;c==="LEFT_TAP"?(console.log("[Tap] LEFT_TAP received"),this._emit("tap_left","tap_sensor",{raw:l}),this._emit("grow","tap_sensor",{raw:l})):c==="RIGHT_TAP"&&(console.log("[Tap] RIGHT_TAP received"),this._emit("tap_right","tap_sensor",{raw:l}),this._emit("wake","tap_sensor",{raw:l}))},r.onerror=a=>{console.warn("[Tap] WebSocket error — is main.py running?",a)},r.onclose=()=>{this.tapReady=!1,console.log("[Tap] Disconnected. Retrying in 3s…"),this._tapDisposed||setTimeout(()=>t(),3e3)}};this._tapDisposed=!1,t()}say(e){if(!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(e);t.pitch=1.25,t.rate=.85,t.volume=.9,speechSynthesis.speak(t)}initAll(){this.initVoice(),this.initEyeTracking(),this.initGestures()}dispose(){if(this.recognition)try{this.recognition.stop()}catch{}if(typeof window.webgazer<"u")try{window.webgazer.end()}catch{}if(this._tapSocket){this._tapDisposed=!0;try{this._tapSocket.close()}catch{}this._tapSocket=null}}}function f1({onStart:s,menuActionRef:e}){return Y.useEffect(()=>{if(e)return e.current=t=>{(t==="LEFT_TAP"||t==="RIGHT_TAP")&&s()},()=>{e.current=null}},[s,e]),Se.jsxs("div",{className:"welcome-screen",role:"dialog","aria-label":"Welcome",children:[Se.jsx("div",{className:"sparkles",children:"🌳✨🦋"}),Se.jsx("h1",{children:"Magic World Builder"}),Se.jsxs("p",{children:["Welcome to our magical world! 🌸",Se.jsx("br",{}),"Look, wave, tap, or speak — and watch the world come alive."]}),Se.jsx("button",{className:"start-btn",onClick:s,"aria-label":"Start playing",autoFocus:!0,children:"🎮 Let's Play!"})]})}const d1=[{emoji:"👋",text:"Hello!"},{emoji:"👀",text:"Look here!"},{emoji:"🚶",text:"Follow me!"},{emoji:"🆘",text:"Help me!"},{emoji:"🏗️",text:"Let's build!"},{emoji:"🎉",text:"Good job!"},{emoji:"🙏",text:"Thank you!"},{emoji:"🤩",text:"Wow, beautiful!"}];function h1({onSend:s}){const[e,t]=Y.useState(!1),r=a=>{s(a),t(!1)};return Se.jsxs("div",{className:"quick-chat",children:[e&&Se.jsx("div",{className:"chat-messages-grid",role:"menu","aria-label":"Quick chat messages",children:d1.map((a,l)=>Se.jsxs("button",{className:"chat-msg-btn",onClick:()=>r(a),role:"menuitem","aria-label":a.text,children:[Se.jsx("span",{children:a.emoji})," ",a.text]},l))}),Se.jsx("button",{className:"chat-toggle-btn",onClick:()=>t(!e),"aria-label":e?"Close chat":"Open quick chat",title:"Quick Chat",children:"💬"})]})}const Ol=[{id:"eye",icon:"👁️",label:"Eye Tracking",desc:"Look at objects to select them"},{id:"voice",icon:"🎤",label:"Voice Tracking",desc:"Speak commands to play"},{id:"gesture",icon:"✋",label:"Gesture Tracking",desc:"Wave or point with your hands"},{id:"tap",icon:"👆",label:"Tap & Drag",desc:"Touch or click to interact"}];function p1({onConfirm:s,menuActionRef:e}){const[t,r]=Y.useState("tap");Y.useEffect(()=>{if(e)return e.current=l=>{l==="RIGHT_TAP"?r(c=>{const f=Ol.findIndex(h=>h.id===c);return Ol[(f+1)%Ol.length].id}):l==="LEFT_TAP"&&s(t)},()=>{e.current=null}},[t,s,e]);const a=l=>{r(l)};return Se.jsx("div",{className:"selection-screen",children:Se.jsxs("div",{className:"selection-card",children:[Se.jsx("h1",{children:"🎮 Choose Your Input"}),Se.jsx("p",{children:"Pick how you'd like to play. You can choose more than one!"}),Se.jsx("div",{className:"input-grid",children:Ol.map(l=>Se.jsxs("button",{className:`input-card ${t===l.id?"selected":""}`,onClick:()=>a(l.id),"aria-pressed":t===l.id,"aria-label":`${l.label}: ${l.desc}`,children:[Se.jsx("span",{className:"input-card-icon",children:l.icon}),Se.jsx("span",{className:"input-card-label",children:l.label}),Se.jsx("span",{className:"input-card-desc",children:l.desc}),t===l.id&&Se.jsx("span",{className:"check-mark",children:"✓"})]},l.id))}),Se.jsx("button",{className:"confirm-btn",onClick:()=>s(t),disabled:!t,children:"✨ Continue"})]})})}const m1=[{id:"cognitive",icon:"🧠",label:"Cognitive",color:"#7c5cbf",desc:"Memory, patterns, problem solving"},{id:"fine-motor",icon:"✋",label:"Fine Motor",color:"#e8734a",desc:"Precise hand movements & control"},{id:"gross-motor",icon:"🏃",label:"Gross Motor",color:"#4aa8e8",desc:"Larger body movements & balance"},{id:"social-emotional",icon:"💛",label:"Social Emotion",color:"#e84a88",desc:"Feelings, sharing & teamwork"}];function g1({onConfirm:s}){return Se.jsx("div",{className:"selection-screen",children:Se.jsxs("div",{className:"selection-card",children:[Se.jsx("h1",{children:"🌟 Choose Your Skill"}),Se.jsx("p",{children:"What would you like to practice today?"}),Se.jsx("div",{className:"skill-grid",children:m1.map(e=>Se.jsxs("button",{className:"skill-card",style:{"--skill-color":e.color},onClick:()=>s(e.id),"aria-label":`${e.label}: ${e.desc}`,children:[Se.jsx("span",{className:"skill-card-icon",children:e.icon}),Se.jsx("span",{className:"skill-card-label",children:e.label}),Se.jsx("span",{className:"skill-card-desc",children:e.desc})]},e.id))})]})})}function v1({items:s,onPlace:e}){return Se.jsxs("div",{className:"island-sidebar",role:"navigation","aria-label":"Island items",children:[Se.jsx("div",{className:"sidebar-title",children:"🏝️ Island"}),s.map((t,r)=>Se.jsxs("button",{className:`sidebar-item ${t.unlocked?"unlocked":"locked"}`,onClick:()=>e(t),disabled:!t.unlocked,"aria-label":`${t.unlocked?"Place":"Locked"}: ${t.name}${t.cost?` (${t.cost} coins)`:""}`,title:t.unlocked?`Place ${t.name}`:`Unlock at ${t.cost} 🪙`,children:[Se.jsx("span",{className:"sidebar-item-icon",children:t.icon}),!t.unlocked&&Se.jsxs("span",{className:"sidebar-lock",children:["🔒 ",t.cost]})]},r))]})}const _1=[{id:"grow",emoji:"🌱",title:"Grow the Garden",description:"Nurture seeds into beautiful trees and flowers!",reward:{coins:20,xp:15},skill:"cognitive"},{id:"wake",emoji:"🐰",title:"Wake the Animal",description:"Gently wake sleeping forest friends!",reward:{coins:18,xp:12},skill:"social-emotional"},{id:"catch",emoji:"✨",title:"Catch the Light",description:"Collect glowing orbs drifting through the sky!",reward:{coins:22,xp:18},skill:"fine-motor"},{id:"sun",emoji:"🌅",title:"Move the Sun",description:"Change the sky from day to night and back!",reward:{coins:15,xp:10},skill:"gross-motor"},{id:"color",emoji:"🎨",title:"Color the World",description:"Paint the flowers and trees with magical colors!",reward:{coins:25,xp:20},skill:"cognitive"},{id:"music",emoji:"🎵",title:"Forest Melody",description:"Tap the mushrooms to play a gentle song!",reward:{coins:20,xp:15},skill:"fine-motor"}];function x1({onSelectGame:s,onBack:e,selectedSkill:t}){const[r,a]=Y.useState(null),l=c=>{if(!t)return!0;const f=t.toLowerCase();return c.skill.includes(f)||f.includes("cognitive")&&c.skill==="cognitive"||f.includes("motor")&&c.skill.includes("motor")||f.includes("social")&&c.skill==="social-emotional"};return Se.jsx("div",{className:"game-selector-screen",children:Se.jsxs("div",{className:"game-selector-card",children:[Se.jsx("button",{className:"back-btn",onClick:e,"aria-label":"Go back",children:"← Back"}),Se.jsx("h1",{children:"🎮 Choose a Mini-Game"}),Se.jsx("p",{children:"Pick a game to play and earn coins & XP!"}),Se.jsx("div",{className:"game-grid",children:_1.map(c=>Se.jsxs("button",{className:`game-tile ${l(c)?"relevant":"dim"} ${r===c.id?"hovered":""}`,onClick:()=>s(c),onMouseEnter:()=>a(c.id),onMouseLeave:()=>a(null),"aria-label":`${c.title}: ${c.description}. Rewards: ${c.reward.coins} coins, ${c.reward.xp} XP`,children:[Se.jsx("span",{className:"game-tile-emoji",children:c.emoji}),Se.jsx("span",{className:"game-tile-title",children:c.title}),Se.jsx("span",{className:"game-tile-desc",children:c.description}),Se.jsxs("span",{className:"game-tile-reward",children:["🪙 ",c.reward.coins,"   ⭐ ",c.reward.xp," XP"]})]},c.id))})]})})}const wf=[{coins:0,add:"tree"},{coins:20,add:"flower"},{coins:40,add:"flower"},{coins:60,add:"tree"},{coins:80,add:"animal"},{coins:100,add:"tree"},{coins:120,add:"flower"},{coins:150,add:"house"},{coins:180,add:"tree"},{coins:200,add:"animal"},{coins:230,add:"flower"},{coins:260,add:"tree"},{coins:300,add:"house"},{coins:350,add:"tree"},{coins:400,add:"animal"},{coins:450,add:"flower"},{coins:500,add:"house"}],Tf=["Meadow","Forest","Village","Castle","Fantasy Land"],kl=80,y1=5;function S1({canvasRef:s,worldRef:e}){const{inputType:t}=ex();return Y.useEffect(()=>{if(!s.current||e.current)return;const r=new l1(s.current);return e.current=r,()=>{r.dispose(),e.current=null}},[t]),Se.jsx(px,{})}function M1(){const s=xd(),e=Ci(),[t]=jx(),r=e.pathname.split("/"),a=e.pathname.startsWith("/play/"),l=a?r[2]:null,c=Y.useRef(null),f=Y.useRef(null),h=Y.useRef(null),p=Y.useRef(0),g=Y.useRef(null),v=Y.useRef(null),[x,S]=Y.useState(0),[E,M]=Y.useState(0),[y,_]=Y.useState(1),[b,L]=Y.useState(null),[C,W]=Y.useState(0),[F,N]=Y.useState(null),[V,P]=Y.useState(null),[A,B]=Y.useState(null),[ee,q]=Y.useState(null),le=Y.useRef(null),[ue,ae]=Y.useState([{name:"Grass Patch",icon:"🌿",unlocked:!0},{name:"Small Tree",icon:"🌱",unlocked:!0},{name:"Flower Bed",icon:"🌸",unlocked:!1,cost:30},{name:"Stone Path",icon:"🪨",unlocked:!1,cost:60},{name:"Little House",icon:"🏠",unlocked:!1,cost:100},{name:"Castle Tower",icon:"🏰",unlocked:!1,cost:200},{name:"Magic Bridge",icon:"🌉",unlocked:!1,cost:300},{name:"Dragon Friend",icon:"🐉",unlocked:!1,cost:500}]),ce=Y.useCallback(fe=>{var Me;N(fe),(Me=h.current)==null||Me.say(fe),setTimeout(()=>N(null),3e3)},[]),z=Y.useCallback(fe=>{P(fe),setTimeout(()=>P(null),2500)},[]),de=Y.useCallback(fe=>ce(`${fe.emoji} ${fe.text}`),[ce]),oe=Y.useCallback(fe=>{B(fe),setTimeout(()=>B(null),1500)},[]),U=Y.useCallback(fe=>{S(Me=>Me+fe)},[]),re=Y.useRef({});re.current={showSpeechBubble:ce,handleTapDetected:oe,handleCoinEarned:U,currentInputType:l,inGame:a},Y.useEffect(()=>{let fe=null,Me=!1;function Fe(){Me||(fe=new WebSocket("ws://localhost:8765"),fe.onopen=()=>{console.log("[Tap] ✅ WebSocket connected to Python tap sensor")},fe.onmessage=ot=>{var D,T,Z,ge,ve,pe,Ve,be,Oe,ft,we;let et;try{et=JSON.parse(ot.data)}catch{return}console.log("[Tap] Received:",et.event);const O=re.current;if(et.event==="GAZE"){const Pe={x:et.x*window.innerWidth,y:et.y*window.innerHeight};q(Pe),le.current=Pe;return}const en=et.event==="BLINK"||et.event==="DOUBLE_BLINK",ct=et.event==="LEFT_TAP"||et.event==="RIGHT_TAP";if(et.event==="LEFT_TAP"?((D=O.handleTapDetected)==null||D.call(O,"⬅️ LEFT TAP"),(T=O.showSpeechBubble)==null||T.call(O,"Left tap detected!")):et.event==="RIGHT_TAP"?((Z=O.handleTapDetected)==null||Z.call(O,"➡️ RIGHT TAP"),(ge=O.showSpeechBubble)==null||ge.call(O,"Right tap detected!")):et.event==="BLINK"?(ve=O.handleTapDetected)==null||ve.call(O,"👁️ BLINK"):et.event==="DOUBLE_BLINK"&&((pe=O.handleTapDetected)==null||pe.call(O,"👀 DOUBLE BLINK")),en){const Pe=le.current;if(Pe){const Ze=document.elementFromPoint(Pe.x,Pe.y);Ze&&(et.event==="BLINK"?Ze.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,clientX:Pe.x,clientY:Pe.y})):(Ze.dispatchEvent(new MouseEvent("dblclick",{bubbles:!0,cancelable:!0,clientX:Pe.x,clientY:Pe.y})),Ze.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,clientX:Pe.x,clientY:Pe.y}))))}}if(v.current){et.event==="LEFT_TAP"||et.event==="BLINK"?v.current("LEFT_TAP"):(et.event==="RIGHT_TAP"||et.event==="DOUBLE_BLINK")&&v.current("RIGHT_TAP");return}if(O.currentInputType==="tap"&&!ct||O.currentInputType==="eye"&&!en||O.currentInputType!=="tap"&&O.currentInputType!=="eye")return;if(g.current){g.current();return}const at=f.current;if(!at||!O.inGame)return;const Ke=(Math.random()-.5)*18,yt=(Math.random()-.5)*18;let Ye=et.event;if(Ye==="BLINK"||Ye==="LEFT_TAP"){const Pe=Math.random();Pe<.45?(at.growSeed(Ke,yt),(Ve=O.showSpeechBubble)==null||Ve.call(O,ct?"🌱 Tap → tree!":"🌱 Blink → tree!")):Pe<.75?(at.addFlower(Ke,yt),(be=O.showSpeechBubble)==null||be.call(O,ct?"🌸 Tap → flower!":"🌸 Blink → flower!")):(at.addAnimal(Ke,yt),(Oe=O.showSpeechBubble)==null||Oe.call(O,ct?"🐰 Tap → animal!":"🐰 Blink → animal!"))}else at.addHouse(Ke,yt),(ft=O.showSpeechBubble)==null||ft.call(O,ct?"🏠 Double Tap → house!":"🏠 Double Blink → house!");(we=O.handleCoinEarned)==null||we.call(O,1)},fe.onerror=()=>{console.warn("[Tap] WebSocket error — is main.py running?")},fe.onclose=()=>{console.log("[Tap] Disconnected. Retrying in 3s…"),Me||setTimeout(Fe,3e3)})}Fe();const tt=new c1;return h.current=tt,()=>{if(Me=!0,fe)try{fe.close()}catch{}tt.dispose()}},[]),Y.useEffect(()=>{const fe=f.current;if(!fe)return;let Me=p.current;for(let Fe=Me;Fe<wf.length&&x>=wf[Fe].coins;Fe++){const{add:tt}=wf[Fe],ot=(Math.random()-.5)*18,et=(Math.random()-.5)*18;tt==="tree"&&fe.growSeed(ot,et),tt==="flower"&&fe.addFlower(ot,et),tt==="animal"&&fe.addAnimal(ot,et),tt==="house"&&fe.addHouse(ot,et),Me=Fe+1}p.current=Me},[x]),Y.useEffect(()=>{E>=kl*y&&y<y1&&(_(fe=>fe+1),z(`🎉 Level Up! Welcome to ${Tf[Math.min(y,Tf.length-1)]}!`))},[E,y]),Y.useEffect(()=>{ae(fe=>fe.map(Me=>!Me.unlocked&&Me.cost&&x>=Me.cost?{...Me,unlocked:!0}:Me))},[x]);const Ue=Y.useCallback(()=>{b&&W(fe=>{const Me=Math.min(fe+20+Math.floor(Math.random()*10),100);if(Me>=100){const{reward:Fe}=b;S(tt=>tt+Fe.coins),M(tt=>tt+Fe.xp),z(`${b.emoji} Complete! +${Fe.coins} 🪙  +${Fe.xp} ⭐`),ce(`Great job! You finished ${b.title}!`),setTimeout(()=>{L(null),W(0);const tt=e.pathname.replace("/active","");s(`${tt}?${t.toString()}`)},1500)}return Me})},[b,z,ce,s,e.pathname,t]);Y.useEffect(()=>{g.current=b?Ue:null},[b,Ue]);const J=fe=>{const Me=f.current;if(!Me||!fe.unlocked)return;const Fe=(Math.random()-.5)*14,tt=(Math.random()-.5)*14;fe.name.includes("Tree")||fe.name.includes("Grass")?Me.growSeed(Fe,tt):fe.name.includes("Flower")?Me.addFlower(Fe,tt):["House","Castle","Bridge"].some(ot=>fe.name.includes(ot))?Me.addHouse(Fe,tt):fe.name.includes("Dragon")?Me.addAnimal(Fe,tt):Me.addFlower(Fe,tt),ce(`${fe.icon} ${fe.name} placed!`)},he=E-kl*(y-1),Te=Math.min(he/kl*100,100),xe=t.get("skill")||"";return Se.jsxs(Se.Fragment,{children:[Se.jsx("canvas",{ref:c,id:"game-canvas"}),ee&&Se.jsx("div",{className:"gaze-cursor",style:{left:ee.x,top:ee.y}}),Se.jsxs("div",{className:"overlay",children:[a&&Se.jsxs(Se.Fragment,{children:[Se.jsxs("div",{className:"hud",children:[Se.jsxs("div",{className:"hud-badge coin-badge",children:["🪙 ",x]}),Se.jsxs("div",{className:"hud-badge level-badge",children:["⭐ Lv.",y," — ",Tf[Math.min(y-1,4)]]}),xe&&Se.jsxs("div",{className:"hud-badge skill-badge",children:["🧠 ",xe]})]}),Se.jsxs("div",{className:"progress-bar-container",children:[Se.jsx("div",{className:"progress-bar-fill",style:{width:`${Te}%`}}),Se.jsxs("span",{className:"progress-bar-text",children:["XP: ",he,"/",kl]})]})]}),A&&Se.jsx("div",{className:"tap-dialog",role:"alert",children:Se.jsx("span",{className:"tap-dialog-text",children:A})}),F&&Se.jsx("div",{className:"speech-bubble",role:"status","aria-live":"polite",children:F}),V&&Se.jsx("div",{className:"success-toast",role:"alert",children:V}),Se.jsxs(gx,{children:[Se.jsx(wr,{path:"/",element:Se.jsx(f1,{onStart:()=>s("/pick-input"),menuActionRef:v})}),Se.jsx(wr,{path:"/pick-input",element:Se.jsx(p1,{onConfirm:fe=>s(`/pick-skill/${fe}`),menuActionRef:v})}),Se.jsx(wr,{path:"/pick-skill/:inputType",element:Se.jsx(g1,{onConfirm:fe=>{const Me=e.pathname.split("/")[2]||"tap";s(`/play/${Me}?skill=${fe}`)},menuActionRef:v})}),Se.jsxs(wr,{path:"/play/:inputType",element:Se.jsx(S1,{canvasRef:c,worldRef:f}),children:[Se.jsx(wr,{index:!0,element:Se.jsxs(Se.Fragment,{children:[Se.jsx(v1,{items:ue,onPlace:J}),Se.jsxs("div",{className:"start-game-area",children:[Se.jsx("button",{className:"start-game-btn",onClick:()=>s(`/play/${l}/games?${t.toString()}`),children:"🎮 Start Game"}),Se.jsx("p",{className:"start-game-hint",children:"Tap your device or click to grow your island!"})]}),Se.jsx(h1,{onSend:de})]})}),Se.jsx(wr,{path:"games",element:Se.jsx(x1,{selectedSkill:xe,onSelectGame:fe=>{L(fe),W(0),s(`/play/${l}/active?${t.toString()}`)},onBack:()=>s(`/play/${l}?${t.toString()}`)})}),Se.jsx(wr,{path:"active",element:b&&Se.jsx("div",{className:"active-game-overlay",children:Se.jsxs("div",{className:"active-game-card",children:[Se.jsx("button",{className:"back-btn small",onClick:()=>s(`/play/${l}?${t.toString()}`),children:"← Back"}),Se.jsx("span",{className:"active-game-emoji",children:b.emoji}),Se.jsx("h2",{children:b.title}),Se.jsx("p",{children:b.description}),Se.jsx("div",{className:"game-progress-bar",children:Se.jsx("div",{className:"game-progress-fill",style:{width:`${C}%`}})}),Se.jsxs("span",{className:"game-progress-label",children:[C,"% complete"]}),C<100?Se.jsxs("button",{className:"game-action-btn",onClick:Ue,children:[b.emoji," Tap / Look / Wave to Play!"]}):Se.jsx("div",{className:"game-complete-msg",children:"✅ Complete!"}),Se.jsxs("div",{className:"game-reward-preview",children:["Reward: 🪙 ",b.reward.coins,"   ⭐ ",b.reward.xp," XP"]})]})})})]})]})]})]})}m0.createRoot(document.getElementById("root")).render(Se.jsx(l0.StrictMode,{children:Se.jsx(Hx,{children:Se.jsx(M1,{})})}));
