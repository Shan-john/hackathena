(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function Hm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var gu={exports:{}},Lo={},_u={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function J_(){if(Cp)return ft;Cp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(N,re,Ie){this.props=N,this.context=re,this.refs=w,this.updater=Ie||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,re){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,re,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function g(){}g.prototype=y.prototype;function I(N,re,Ie){this.props=N,this.context=re,this.refs=w,this.updater=Ie||S}var L=I.prototype=new g;L.constructor=I,E(L,y.prototype),L.isPureReactComponent=!0;var R=Array.isArray,Y=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function V(N,re,Ie){var J,$={},de=null,he=null;if(re!=null)for(J in re.ref!==void 0&&(he=re.ref),re.key!==void 0&&(de=""+re.key),re)Y.call(re,J)&&!U.hasOwnProperty(J)&&($[J]=re[J]);var we=arguments.length-2;if(we===1)$.children=Ie;else if(1<we){for(var Le=Array(we),Ye=0;Ye<we;Ye++)Le[Ye]=arguments[Ye+2];$.children=Le}if(N&&N.defaultProps)for(J in we=N.defaultProps,we)$[J]===void 0&&($[J]=we[J]);return{$$typeof:s,type:N,key:de,ref:he,props:$,_owner:F.current}}function P(N,re){return{$$typeof:s,type:N.type,key:re,ref:N.ref,props:N.props,_owner:N._owner}}function C(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function k(N){var re={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ie){return re[Ie]})}var ee=/\/+/g;function q(N,re){return typeof N=="object"&&N!==null&&N.key!=null?k(""+N.key):re.toString(36)}function le(N,re,Ie,J,$){var de=typeof N;(de==="undefined"||de==="boolean")&&(N=null);var he=!1;if(N===null)he=!0;else switch(de){case"string":case"number":he=!0;break;case"object":switch(N.$$typeof){case s:case e:he=!0}}if(he)return he=N,$=$(he),N=J===""?"."+q(he,0):J,R($)?(Ie="",N!=null&&(Ie=N.replace(ee,"$&/")+"/"),le($,re,Ie,"",function(Ye){return Ye})):$!=null&&(C($)&&($=P($,Ie+(!$.key||he&&he.key===$.key?"":(""+$.key).replace(ee,"$&/")+"/")+N)),re.push($)),1;if(he=0,J=J===""?".":J+":",R(N))for(var we=0;we<N.length;we++){de=N[we];var Le=J+q(de,we);he+=le(de,re,Ie,Le,$)}else if(Le=v(N),typeof Le=="function")for(N=Le.call(N),we=0;!(de=N.next()).done;)de=de.value,Le=J+q(de,we++),he+=le(de,re,Ie,Le,$);else if(de==="object")throw re=String(N),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return he}function fe(N,re,Ie){if(N==null)return N;var J=[],$=0;return le(N,J,"","",function(de){return re.call(Ie,de,$++)}),J}function ae(N){if(N._status===-1){var re=N._result;re=re(),re.then(function(Ie){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ie)},function(Ie){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ie)}),N._status===-1&&(N._status=0,N._result=re)}if(N._status===1)return N._result.default;throw N._result}var ue={current:null},z={transition:null},ce={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:z,ReactCurrentOwner:F};function se(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:fe,forEach:function(N,re,Ie){fe(N,function(){re.apply(this,arguments)},Ie)},count:function(N){var re=0;return fe(N,function(){re++}),re},toArray:function(N){return fe(N,function(re){return re})||[]},only:function(N){if(!C(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ft.Component=y,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=I,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,ft.act=se,ft.cloneElement=function(N,re,Ie){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var J=E({},N.props),$=N.key,de=N.ref,he=N._owner;if(re!=null){if(re.ref!==void 0&&(de=re.ref,he=F.current),re.key!==void 0&&($=""+re.key),N.type&&N.type.defaultProps)var we=N.type.defaultProps;for(Le in re)Y.call(re,Le)&&!U.hasOwnProperty(Le)&&(J[Le]=re[Le]===void 0&&we!==void 0?we[Le]:re[Le])}var Le=arguments.length-2;if(Le===1)J.children=Ie;else if(1<Le){we=Array(Le);for(var Ye=0;Ye<Le;Ye++)we[Ye]=arguments[Ye+2];J.children=we}return{$$typeof:s,type:N.type,key:$,ref:de,props:J,_owner:he}},ft.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:c,_context:N},N.Consumer=N},ft.createElement=V,ft.createFactory=function(N){var re=V.bind(null,N);return re.type=N,re},ft.createRef=function(){return{current:null}},ft.forwardRef=function(N){return{$$typeof:d,render:N}},ft.isValidElement=C,ft.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:ae}},ft.memo=function(N,re){return{$$typeof:m,type:N,compare:re===void 0?null:re}},ft.startTransition=function(N){var re=z.transition;z.transition={};try{N()}finally{z.transition=re}},ft.unstable_act=se,ft.useCallback=function(N,re){return ue.current.useCallback(N,re)},ft.useContext=function(N){return ue.current.useContext(N)},ft.useDebugValue=function(){},ft.useDeferredValue=function(N){return ue.current.useDeferredValue(N)},ft.useEffect=function(N,re){return ue.current.useEffect(N,re)},ft.useId=function(){return ue.current.useId()},ft.useImperativeHandle=function(N,re,Ie){return ue.current.useImperativeHandle(N,re,Ie)},ft.useInsertionEffect=function(N,re){return ue.current.useInsertionEffect(N,re)},ft.useLayoutEffect=function(N,re){return ue.current.useLayoutEffect(N,re)},ft.useMemo=function(N,re){return ue.current.useMemo(N,re)},ft.useReducer=function(N,re,Ie){return ue.current.useReducer(N,re,Ie)},ft.useRef=function(N){return ue.current.useRef(N)},ft.useState=function(N){return ue.current.useState(N)},ft.useSyncExternalStore=function(N,re,Ie){return ue.current.useSyncExternalStore(N,re,Ie)},ft.useTransition=function(){return ue.current.useTransition()},ft.version="18.3.1",ft}var Rp;function Gf(){return Rp||(Rp=1,_u.exports=J_()),_u.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function ev(){if(Pp)return Lo;Pp=1;var s=Gf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var _,x={},v=null,S=null;m!==void 0&&(v=""+m),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!c.hasOwnProperty(_)&&(x[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)x[_]===void 0&&(x[_]=p[_]);return{$$typeof:e,type:d,key:v,ref:S,props:x,_owner:a.current}}return Lo.Fragment=n,Lo.jsx=u,Lo.jsxs=u,Lo}var bp;function tv(){return bp||(bp=1,gu.exports=ev()),gu.exports}var Ee=tv(),Rt=Gf();const nv=Hm(Rt);var Qa={},vu={exports:{}},bn={},xu={exports:{}},yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function iv(){return Lp||(Lp=1,(function(s){function e(z,ce){var se=z.length;z.push(ce);e:for(;0<se;){var N=se-1>>>1,re=z[N];if(0<a(re,ce))z[N]=ce,z[se]=re,se=N;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var ce=z[0],se=z.pop();if(se!==ce){z[0]=se;e:for(var N=0,re=z.length,Ie=re>>>1;N<Ie;){var J=2*(N+1)-1,$=z[J],de=J+1,he=z[de];if(0>a($,se))de<re&&0>a(he,$)?(z[N]=he,z[de]=se,N=de):(z[N]=$,z[J]=se,N=J);else if(de<re&&0>a(he,se))z[N]=he,z[de]=se,N=de;else break e}}return ce}function a(z,ce){var se=z.sortIndex-ce.sortIndex;return se!==0?se:z.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],_=1,x=null,v=3,S=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(z){for(var ce=n(m);ce!==null;){if(ce.callback===null)r(m);else if(ce.startTime<=z)r(m),ce.sortIndex=ce.expirationTime,e(p,ce);else break;ce=n(m)}}function R(z){if(w=!1,L(z),!E)if(n(p)!==null)E=!0,ae(Y);else{var ce=n(m);ce!==null&&ue(R,ce.startTime-z)}}function Y(z,ce){E=!1,w&&(w=!1,g(V),V=-1),S=!0;var se=v;try{for(L(ce),x=n(p);x!==null&&(!(x.expirationTime>ce)||z&&!k());){var N=x.callback;if(typeof N=="function"){x.callback=null,v=x.priorityLevel;var re=N(x.expirationTime<=ce);ce=s.unstable_now(),typeof re=="function"?x.callback=re:x===n(p)&&r(p),L(ce)}else r(p);x=n(p)}if(x!==null)var Ie=!0;else{var J=n(m);J!==null&&ue(R,J.startTime-ce),Ie=!1}return Ie}finally{x=null,v=se,S=!1}}var F=!1,U=null,V=-1,P=5,C=-1;function k(){return!(s.unstable_now()-C<P)}function ee(){if(U!==null){var z=s.unstable_now();C=z;var ce=!0;try{ce=U(!0,z)}finally{ce?q():(F=!1,U=null)}}else F=!1}var q;if(typeof I=="function")q=function(){I(ee)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,fe=le.port2;le.port1.onmessage=ee,q=function(){fe.postMessage(null)}}else q=function(){y(ee,0)};function ae(z){U=z,F||(F=!0,q())}function ue(z,ce){V=y(function(){z(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ae(Y))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(z){switch(v){case 1:case 2:case 3:var ce=3;break;default:ce=v}var se=v;v=ce;try{return z()}finally{v=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,ce){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var se=v;v=z;try{return ce()}finally{v=se}},s.unstable_scheduleCallback=function(z,ce,se){var N=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?N+se:N):se=N,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=se+re,z={id:_++,callback:ce,priorityLevel:z,startTime:se,expirationTime:re,sortIndex:-1},se>N?(z.sortIndex=se,e(m,z),n(p)===null&&z===n(m)&&(w?(g(V),V=-1):w=!0,ue(R,se-N))):(z.sortIndex=re,e(p,z),E||S||(E=!0,ae(Y))),z},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(z){var ce=v;return function(){var se=v;v=ce;try{return z.apply(this,arguments)}finally{v=se}}}})(yu)),yu}var Dp;function rv(){return Dp||(Dp=1,xu.exports=iv()),xu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function sv(){if(Ip)return bn;Ip=1;var s=Gf(),e=rv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function v(t){return p.call(x,t)?!0:p.call(_,t)?!1:m.test(t)?x[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,o,l,f,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,I);y[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,I);y[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,I);y[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,l){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,l)&&(o=null),l||f===null?v(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,l=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),k=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),z=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,N;function re(t){if(N===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+t}var Ie=!1;function J(t,i){if(!t||Ie)return"";Ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){l=te}t.call(i.prototype)}else{try{throw Error()}catch(te){l=te}t()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var f=te.stack.split(`
`),h=l.stack.split(`
`),M=f.length-1,D=h.length-1;1<=M&&0<=D&&f[M]!==h[D];)D--;for(;1<=M&&0<=D;M--,D--)if(f[M]!==h[D]){if(M!==1||D!==1)do if(M--,D--,0>D||f[M]!==h[D]){var O=`
`+f[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=D);break}}}finally{Ie=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?re(t):""}function $(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=J(t.type,!1),t;case 11:return t=J(t.type.render,!1),t;case 1:return t=J(t.type,!0),t;default:return""}}function de(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case F:return"Portal";case P:return"Profiler";case V:return"StrictMode";case q:return"Suspense";case le:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case ee:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fe:return i=t.displayName||null,i!==null?i:de(t.type)||"Memo";case ae:i=t._payload,t=t._init;try{return de(t(i))}catch{}}return null}function he(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Le(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(t){var i=Le(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ct(t){t._valueTracker||(t._valueTracker=Ye(t))}function pt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Le(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function X(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function gn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function ct(t,i){ht(t,i);var o=we(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Tt(t,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function $e(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Tt(t,i,o){(i!=="number"||Lt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var qe=Array.isArray;function b(t,i,o,l){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&l&&(t[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Z(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(qe(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:we(o)}}function ge(t,i){var o=we(i.value),l=we(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ve(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function pe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?pe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ce,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function lt(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Se[i]=Se[t]})});function Qe(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Se.hasOwnProperty(t)&&Se[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,f=Qe(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,f):t[o]=f}}var ke=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wt=null;function H(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,oe=null,me=null;function De(t){if(t=go(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ha(i),Re(t.stateNode,t.type,i))}}function be(t){oe?me?me.push(t):me=[t]:oe=t}function rt(){if(oe){var t=oe,i=me;if(me=oe=null,De(t),i)for(t=0;t<i.length;t++)De(i[t])}}function Nt(t,i){return t(i)}function Yt(){}var _t=!1;function En(t,i,o){if(_t)return t(i,o);_t=!0;try{return Nt(t,i,o)}finally{_t=!1,(oe!==null||me!==null)&&(Yt(),rt())}}function _n(t,i){var o=t.stateNode;if(o===null)return null;var l=ha(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var es=!1;if(d)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){es=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{es=!1}function wi(t,i,o,l,f,h,M,D,O){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(xe){this.onError(xe)}}var Ti=!1,Tr=null,Ar=!1,ji=null,Yo={onError:function(t){Ti=!0,Tr=t}};function ts(t,i,o,l,f,h,M,D,O){Ti=!1,Tr=null,wi.apply(Yo,arguments)}function qo(t,i,o,l,f,h,M,D,O){if(ts.apply(this,arguments),Ti){if(Ti){var te=Tr;Ti=!1,Tr=null}else throw Error(n(198));Ar||(Ar=!0,ji=te)}}function hi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function $o(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ko(t){if(hi(t)!==t)throw Error(n(188))}function kl(t){var i=t.alternate;if(!i){if(i=hi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var f=o.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===o)return Ko(f),t;if(h===l)return Ko(f),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=f,l=h;else{for(var M=!1,D=f.child;D;){if(D===o){M=!0,o=f,l=h;break}if(D===l){M=!0,l=f,o=h;break}D=D.sibling}if(!M){for(D=h.child;D;){if(D===o){M=!0,o=h,l=f;break}if(D===l){M=!0,l=h,o=f;break}D=D.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function A(t){return t=kl(t),t!==null?G(t):null}function G(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=G(t);if(i!==null)return i;t=t.sibling}return null}var ne=e.unstable_scheduleCallback,ie=e.unstable_cancelCallback,W=e.unstable_shouldYield,Ae=e.unstable_requestPaint,Me=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,Be=e.unstable_ImmediatePriority,et=e.unstable_UserBlockingPriority,nt=e.unstable_NormalPriority,We=e.unstable_LowPriority,gt=e.unstable_IdlePriority,Et=null,mt=null;function ln(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Et,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:St,je=Math.log,Qn=Math.LN2;function St(t){return t>>>=0,t===0?32:31-(je(t)/Qn|0)|0}var cn=64,Jn=4194304;function qt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pi(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var D=M&~f;D!==0?l=qt(D):(h&=M,h!==0&&(l=qt(h)))}else M=o&~f,M!==0?l=qt(M):h!==0&&(l=qt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-st(i),f=1<<o,l|=t[o],i&=~f;return l}function bt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-st(h),D=1<<M,O=f[M];O===-1?((D&o)===0||(D&l)!==0)&&(f[M]=bt(D,i)):O<=i&&(t.expiredLanes|=D),h&=~D}}function Ai(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vn(){var t=cn;return cn<<=1,(cn&4194240)===0&&(cn=64),t}function Wn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function wn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-st(i),t[i]=o}function Zo(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-st(o),h=1<<f;i[f]=0,l[f]=-1,t[f]=-1,o&=~h}}function zl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-st(o),f=1<<l;f&i|t[l]&i&&(t[l]|=i),o&=~f}}var At=0;function sd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var od,Bl,ad,ld,cd,Hl=!1,Qo=[],Yi=null,qi=null,$i=null,Js=new Map,eo=new Map,Ki=[],Sg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ud(t,i){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Js.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(i.pointerId)}}function to(t,i,o,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=go(i),i!==null&&Bl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Mg(t,i,o,l,f){switch(i){case"focusin":return Yi=to(Yi,t,i,o,l,f),!0;case"dragenter":return qi=to(qi,t,i,o,l,f),!0;case"mouseover":return $i=to($i,t,i,o,l,f),!0;case"pointerover":var h=f.pointerId;return Js.set(h,to(Js.get(h)||null,t,i,o,l,f)),!0;case"gotpointercapture":return h=f.pointerId,eo.set(h,to(eo.get(h)||null,t,i,o,l,f)),!0}return!1}function fd(t){var i=Cr(t.target);if(i!==null){var o=hi(i);if(o!==null){if(i=o.tag,i===13){if(i=$o(o),i!==null){t.blockedOn=i,cd(t.priority,function(){ad(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Gl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);wt=l,o.target.dispatchEvent(l),wt=null}else return i=go(o),i!==null&&Bl(i),t.blockedOn=o,!1;i.shift()}return!0}function dd(t,i,o){Jo(t)&&o.delete(i)}function Eg(){Hl=!1,Yi!==null&&Jo(Yi)&&(Yi=null),qi!==null&&Jo(qi)&&(qi=null),$i!==null&&Jo($i)&&($i=null),Js.forEach(dd),eo.forEach(dd)}function no(t,i){t.blockedOn===i&&(t.blockedOn=null,Hl||(Hl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Eg)))}function io(t){function i(f){return no(f,t)}if(0<Qo.length){no(Qo[0],t);for(var o=1;o<Qo.length;o++){var l=Qo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Yi!==null&&no(Yi,t),qi!==null&&no(qi,t),$i!==null&&no($i,t),Js.forEach(i),eo.forEach(i),o=0;o<Ki.length;o++)l=Ki[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Ki.length&&(o=Ki[0],o.blockedOn===null);)fd(o),o.blockedOn===null&&Ki.shift()}var ns=R.ReactCurrentBatchConfig,ea=!0;function wg(t,i,o,l){var f=At,h=ns.transition;ns.transition=null;try{At=1,Vl(t,i,o,l)}finally{At=f,ns.transition=h}}function Tg(t,i,o,l){var f=At,h=ns.transition;ns.transition=null;try{At=4,Vl(t,i,o,l)}finally{At=f,ns.transition=h}}function Vl(t,i,o,l){if(ea){var f=Gl(t,i,o,l);if(f===null)oc(t,i,l,ta,o),ud(t,l);else if(Mg(f,t,i,o,l))l.stopPropagation();else if(ud(t,l),i&4&&-1<Sg.indexOf(t)){for(;f!==null;){var h=go(f);if(h!==null&&od(h),h=Gl(t,i,o,l),h===null&&oc(t,i,l,ta,o),h===f)break;f=h}f!==null&&l.stopPropagation()}else oc(t,i,l,null,o)}}var ta=null;function Gl(t,i,o,l){if(ta=null,t=H(l),t=Cr(t),t!==null)if(i=hi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=$o(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ta=t,null}function hd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case Be:return 1;case et:return 4;case nt:case We:return 16;case gt:return 536870912;default:return 16}default:return 16}}var Zi=null,Wl=null,na=null;function pd(){if(na)return na;var t,i=Wl,o=i.length,l,f="value"in Zi?Zi.value:Zi.textContent,h=f.length;for(t=0;t<o&&i[t]===f[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===f[h-l];l++);return na=f.slice(t,1<l?1-l:void 0)}function ia(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ra(){return!0}function md(){return!1}function Un(t){function i(o,l,f,h,M){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ra:md,this.isPropagationStopped=md,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ra)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ra)},persist:function(){},isPersistent:ra}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Un(is),ro=se({},is,{view:0,detail:0}),Ag=Un(ro),jl,Yl,so,sa=se({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(jl=t.screenX-so.screenX,Yl=t.screenY-so.screenY):Yl=jl=0,so=t),jl)},movementY:function(t){return"movementY"in t?t.movementY:Yl}}),gd=Un(sa),Cg=se({},sa,{dataTransfer:0}),Rg=Un(Cg),Pg=se({},ro,{relatedTarget:0}),ql=Un(Pg),bg=se({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Lg=Un(bg),Dg=se({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ig=Un(Dg),Ng=se({},is,{data:0}),_d=Un(Ng),Ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Og={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Og[t])?!!i[t]:!1}function $l(){return kg}var zg=se({},ro,{key:function(t){if(t.key){var i=Ug[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(t){return t.type==="keypress"?ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bg=Un(zg),Hg=se({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vd=Un(Hg),Vg=se({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),Gg=Un(Vg),Wg=se({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xg=Un(Wg),jg=se({},sa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yg=Un(jg),qg=[9,13,27,32],Kl=d&&"CompositionEvent"in window,oo=null;d&&"documentMode"in document&&(oo=document.documentMode);var $g=d&&"TextEvent"in window&&!oo,xd=d&&(!Kl||oo&&8<oo&&11>=oo),yd=" ",Sd=!1;function Md(t,i){switch(t){case"keyup":return qg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ed(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function Kg(t,i){switch(t){case"compositionend":return Ed(i);case"keypress":return i.which!==32?null:(Sd=!0,yd);case"textInput":return t=i.data,t===yd&&Sd?null:t;default:return null}}function Zg(t,i){if(rs)return t==="compositionend"||!Kl&&Md(t,i)?(t=pd(),na=Wl=Zi=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return xd&&i.locale!=="ko"?null:i.data;default:return null}}var Qg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Qg[t.type]:i==="textarea"}function Td(t,i,o,l){be(l),i=ua(i,"onChange"),0<i.length&&(o=new Xl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var ao=null,lo=null;function Jg(t){Gd(t,0)}function oa(t){var i=cs(t);if(pt(i))return t}function e_(t,i){if(t==="change")return i}var Ad=!1;if(d){var Zl;if(d){var Ql="oninput"in document;if(!Ql){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),Ql=typeof Cd.oninput=="function"}Zl=Ql}else Zl=!1;Ad=Zl&&(!document.documentMode||9<document.documentMode)}function Rd(){ao&&(ao.detachEvent("onpropertychange",Pd),lo=ao=null)}function Pd(t){if(t.propertyName==="value"&&oa(lo)){var i=[];Td(i,lo,t,H(t)),En(Jg,i)}}function t_(t,i,o){t==="focusin"?(Rd(),ao=i,lo=o,ao.attachEvent("onpropertychange",Pd)):t==="focusout"&&Rd()}function n_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oa(lo)}function i_(t,i){if(t==="click")return oa(i)}function r_(t,i){if(t==="input"||t==="change")return oa(i)}function s_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:s_;function co(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!p.call(i,f)||!ei(t[f],i[f]))return!1}return!0}function bd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ld(t,i){var o=bd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=bd(o)}}function Dd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Dd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Id(){for(var t=window,i=Lt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Lt(t.document)}return i}function Jl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function o_(t){var i=Id(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Dd(o.ownerDocument.documentElement,o)){if(l!==null&&Jl(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=Ld(o,h);var M=Ld(o,l);f&&M&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var a_=d&&"documentMode"in document&&11>=document.documentMode,ss=null,ec=null,uo=null,tc=!1;function Nd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;tc||ss==null||ss!==Lt(l)||(l=ss,"selectionStart"in l&&Jl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),uo&&co(uo,l)||(uo=l,l=ua(ec,"onSelect"),0<l.length&&(i=new Xl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=ss)))}function aa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var os={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},nc={},Ud={};d&&(Ud=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function la(t){if(nc[t])return nc[t];if(!os[t])return t;var i=os[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ud)return nc[t]=i[o];return t}var Fd=la("animationend"),Od=la("animationiteration"),kd=la("animationstart"),zd=la("transitionend"),Bd=new Map,Hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){Bd.set(t,i),c(i,[t])}for(var ic=0;ic<Hd.length;ic++){var rc=Hd[ic],l_=rc.toLowerCase(),c_=rc[0].toUpperCase()+rc.slice(1);Qi(l_,"on"+c_)}Qi(Fd,"onAnimationEnd"),Qi(Od,"onAnimationIteration"),Qi(kd,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(zd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u_=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function Vd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,qo(l,i,void 0,t),t.currentTarget=null}function Gd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],O=D.instance,te=D.currentTarget;if(D=D.listener,O!==h&&f.isPropagationStopped())break e;Vd(f,D,te),h=O}else for(M=0;M<l.length;M++){if(D=l[M],O=D.instance,te=D.currentTarget,D=D.listener,O!==h&&f.isPropagationStopped())break e;Vd(f,D,te),h=O}}}if(Ar)throw t=ji,Ar=!1,ji=null,t}function Ut(t,i){var o=i[dc];o===void 0&&(o=i[dc]=new Set);var l=t+"__bubble";o.has(l)||(Wd(i,t,2,!1),o.add(l))}function sc(t,i,o){var l=0;i&&(l|=4),Wd(o,t,l,i)}var ca="_reactListening"+Math.random().toString(36).slice(2);function ho(t){if(!t[ca]){t[ca]=!0,r.forEach(function(o){o!=="selectionchange"&&(u_.has(o)||sc(o,!1,t),sc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ca]||(i[ca]=!0,sc("selectionchange",!1,i))}}function Wd(t,i,o,l){switch(hd(i)){case 1:var f=wg;break;case 4:f=Tg;break;default:f=Vl}o=f.bind(null,i,o,t),f=void 0,!es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function oc(t,i,o,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===f||D.nodeType===8&&D.parentNode===f)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===f||O.nodeType===8&&O.parentNode===f))return;M=M.return}for(;D!==null;){if(M=Cr(D),M===null)return;if(O=M.tag,O===5||O===6){l=h=M;continue e}D=D.parentNode}}l=l.return}En(function(){var te=h,xe=H(o),ye=[];e:{var _e=Bd.get(t);if(_e!==void 0){var Ne=Xl,ze=t;switch(t){case"keypress":if(ia(o)===0)break e;case"keydown":case"keyup":Ne=Bg;break;case"focusin":ze="focus",Ne=ql;break;case"focusout":ze="blur",Ne=ql;break;case"beforeblur":case"afterblur":Ne=ql;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=Rg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=Gg;break;case Fd:case Od:case kd:Ne=Lg;break;case zd:Ne=Xg;break;case"scroll":Ne=Ag;break;case"wheel":Ne=Yg;break;case"copy":case"cut":case"paste":Ne=Ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=vd}var He=(i&4)!==0,Wt=!He&&t==="scroll",j=He?_e!==null?_e+"Capture":null:_e;He=[];for(var B=te,K;B!==null;){K=B;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,j!==null&&(Te=_n(B,j),Te!=null&&He.push(po(B,Te,K)))),Wt)break;B=B.return}0<He.length&&(_e=new Ne(_e,ze,null,o,xe),ye.push({event:_e,listeners:He}))}}if((i&7)===0){e:{if(_e=t==="mouseover"||t==="pointerover",Ne=t==="mouseout"||t==="pointerout",_e&&o!==wt&&(ze=o.relatedTarget||o.fromElement)&&(Cr(ze)||ze[Ci]))break e;if((Ne||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ne?(ze=o.relatedTarget||o.toElement,Ne=te,ze=ze?Cr(ze):null,ze!==null&&(Wt=hi(ze),ze!==Wt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ne=null,ze=te),Ne!==ze)){if(He=gd,Te="onMouseLeave",j="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(He=vd,Te="onPointerLeave",j="onPointerEnter",B="pointer"),Wt=Ne==null?_e:cs(Ne),K=ze==null?_e:cs(ze),_e=new He(Te,B+"leave",Ne,o,xe),_e.target=Wt,_e.relatedTarget=K,Te=null,Cr(xe)===te&&(He=new He(j,B+"enter",ze,o,xe),He.target=K,He.relatedTarget=Wt,Te=He),Wt=Te,Ne&&ze)t:{for(He=Ne,j=ze,B=0,K=He;K;K=as(K))B++;for(K=0,Te=j;Te;Te=as(Te))K++;for(;0<B-K;)He=as(He),B--;for(;0<K-B;)j=as(j),K--;for(;B--;){if(He===j||j!==null&&He===j.alternate)break t;He=as(He),j=as(j)}He=null}else He=null;Ne!==null&&Xd(ye,_e,Ne,He,!1),ze!==null&&Wt!==null&&Xd(ye,Wt,ze,He,!0)}}e:{if(_e=te?cs(te):window,Ne=_e.nodeName&&_e.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&_e.type==="file")var Xe=e_;else if(wd(_e))if(Ad)Xe=r_;else{Xe=n_;var Ke=t_}else(Ne=_e.nodeName)&&Ne.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Xe=i_);if(Xe&&(Xe=Xe(t,te))){Td(ye,Xe,o,xe);break e}Ke&&Ke(t,_e,te),t==="focusout"&&(Ke=_e._wrapperState)&&Ke.controlled&&_e.type==="number"&&Tt(_e,"number",_e.value)}switch(Ke=te?cs(te):window,t){case"focusin":(wd(Ke)||Ke.contentEditable==="true")&&(ss=Ke,ec=te,uo=null);break;case"focusout":uo=ec=ss=null;break;case"mousedown":tc=!0;break;case"contextmenu":case"mouseup":case"dragend":tc=!1,Nd(ye,o,xe);break;case"selectionchange":if(a_)break;case"keydown":case"keyup":Nd(ye,o,xe)}var Ze;if(Kl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else rs?Md(t,o)&&(tt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(tt="onCompositionStart");tt&&(xd&&o.locale!=="ko"&&(rs||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&rs&&(Ze=pd()):(Zi=xe,Wl="value"in Zi?Zi.value:Zi.textContent,rs=!0)),Ke=ua(te,tt),0<Ke.length&&(tt=new _d(tt,t,null,o,xe),ye.push({event:tt,listeners:Ke}),Ze?tt.data=Ze:(Ze=Ed(o),Ze!==null&&(tt.data=Ze)))),(Ze=$g?Kg(t,o):Zg(t,o))&&(te=ua(te,"onBeforeInput"),0<te.length&&(xe=new _d("onBeforeInput","beforeinput",null,o,xe),ye.push({event:xe,listeners:te}),xe.data=Ze))}Gd(ye,i)})}function po(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ua(t,i){for(var o=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=_n(t,o),h!=null&&l.unshift(po(t,h,f)),h=_n(t,i),h!=null&&l.push(po(t,h,f))),t=t.return}return l}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xd(t,i,o,l,f){for(var h=i._reactName,M=[];o!==null&&o!==l;){var D=o,O=D.alternate,te=D.stateNode;if(O!==null&&O===l)break;D.tag===5&&te!==null&&(D=te,f?(O=_n(o,h),O!=null&&M.unshift(po(o,O,D))):f||(O=_n(o,h),O!=null&&M.push(po(o,O,D)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var f_=/\r\n?/g,d_=/\u0000|\uFFFD/g;function jd(t){return(typeof t=="string"?t:""+t).replace(f_,`
`).replace(d_,"")}function fa(t,i,o){if(i=jd(i),jd(t)!==i&&o)throw Error(n(425))}function da(){}var ac=null,lc=null;function cc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var uc=typeof setTimeout=="function"?setTimeout:void 0,h_=typeof clearTimeout=="function"?clearTimeout:void 0,Yd=typeof Promise=="function"?Promise:void 0,p_=typeof queueMicrotask=="function"?queueMicrotask:typeof Yd<"u"?function(t){return Yd.resolve(null).then(t).catch(m_)}:uc;function m_(t){setTimeout(function(){throw t})}function fc(t,i){var o=i,l=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(l===0){t.removeChild(f),io(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=f}while(o);io(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function qd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),mi="__reactFiber$"+ls,mo="__reactProps$"+ls,Ci="__reactContainer$"+ls,dc="__reactEvents$"+ls,g_="__reactListeners$"+ls,__="__reactHandles$"+ls;function Cr(t){var i=t[mi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ci]||o[mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=qd(t);t!==null;){if(o=t[mi])return o;t=qd(t)}return i}t=o,o=t.parentNode}return null}function go(t){return t=t[mi]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ha(t){return t[mo]||null}var hc=[],us=-1;function er(t){return{current:t}}function Ft(t){0>us||(t.current=hc[us],hc[us]=null,us--)}function Dt(t,i){us++,hc[us]=t.current,t.current=i}var tr={},un=er(tr),Tn=er(!1),Rr=tr;function fs(t,i){var o=t.type.contextTypes;if(!o)return tr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in o)f[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function An(t){return t=t.childContextTypes,t!=null}function pa(){Ft(Tn),Ft(un)}function $d(t,i,o){if(un.current!==tr)throw Error(n(168));Dt(un,i),Dt(Tn,o)}function Kd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,he(t)||"Unknown",f));return se({},o,l)}function ma(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Rr=un.current,Dt(un,t),Dt(Tn,Tn.current),!0}function Zd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Kd(t,i,Rr),l.__reactInternalMemoizedMergedChildContext=t,Ft(Tn),Ft(un),Dt(un,t)):Ft(Tn),Dt(Tn,o)}var Ri=null,ga=!1,pc=!1;function Qd(t){Ri===null?Ri=[t]:Ri.push(t)}function v_(t){ga=!0,Qd(t)}function nr(){if(!pc&&Ri!==null){pc=!0;var t=0,i=At;try{var o=Ri;for(At=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ri=null,ga=!1}catch(f){throw Ri!==null&&(Ri=Ri.slice(t+1)),ne(Be,nr),f}finally{At=i,pc=!1}}return null}var ds=[],hs=0,_a=null,va=0,Xn=[],jn=0,Pr=null,Pi=1,bi="";function br(t,i){ds[hs++]=va,ds[hs++]=_a,_a=t,va=i}function Jd(t,i,o){Xn[jn++]=Pi,Xn[jn++]=bi,Xn[jn++]=Pr,Pr=t;var l=Pi;t=bi;var f=32-st(l)-1;l&=~(1<<f),o+=1;var h=32-st(i)+f;if(30<h){var M=f-f%5;h=(l&(1<<M)-1).toString(32),l>>=M,f-=M,Pi=1<<32-st(i)+f|o<<f|l,bi=h+t}else Pi=1<<h|o<<f|l,bi=t}function mc(t){t.return!==null&&(br(t,1),Jd(t,1,0))}function gc(t){for(;t===_a;)_a=ds[--hs],ds[hs]=null,va=ds[--hs],ds[hs]=null;for(;t===Pr;)Pr=Xn[--jn],Xn[jn]=null,bi=Xn[--jn],Xn[jn]=null,Pi=Xn[--jn],Xn[jn]=null}var Fn=null,On=null,Ot=!1,ti=null;function eh(t,i){var o=Kn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function th(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Fn=t,On=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Fn=t,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Pr!==null?{id:Pi,overflow:bi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Kn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Fn=t,On=null,!0):!1;default:return!1}}function _c(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vc(t){if(Ot){var i=On;if(i){var o=i;if(!th(t,i)){if(_c(t))throw Error(n(418));i=Ji(o.nextSibling);var l=Fn;i&&th(t,i)?eh(l,o):(t.flags=t.flags&-4097|2,Ot=!1,Fn=t)}}else{if(_c(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,Fn=t}}}function nh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function xa(t){if(t!==Fn)return!1;if(!Ot)return nh(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!cc(t.type,t.memoizedProps)),i&&(i=On)){if(_c(t))throw ih(),Error(n(418));for(;i;)eh(t,i),i=Ji(i.nextSibling)}if(nh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){On=Ji(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}On=null}}else On=Fn?Ji(t.stateNode.nextSibling):null;return!0}function ih(){for(var t=On;t;)t=Ji(t.nextSibling)}function ps(){On=Fn=null,Ot=!1}function xc(t){ti===null?ti=[t]:ti.push(t)}var x_=R.ReactCurrentBatchConfig;function _o(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var f=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var D=f.refs;M===null?delete D[h]:D[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ya(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function rh(t){var i=t._init;return i(t._payload)}function sh(t){function i(j,B){if(t){var K=j.deletions;K===null?(j.deletions=[B],j.flags|=16):K.push(B)}}function o(j,B){if(!t)return null;for(;B!==null;)i(j,B),B=B.sibling;return null}function l(j,B){for(j=new Map;B!==null;)B.key!==null?j.set(B.key,B):j.set(B.index,B),B=B.sibling;return j}function f(j,B){return j=ur(j,B),j.index=0,j.sibling=null,j}function h(j,B,K){return j.index=K,t?(K=j.alternate,K!==null?(K=K.index,K<B?(j.flags|=2,B):K):(j.flags|=2,B)):(j.flags|=1048576,B)}function M(j){return t&&j.alternate===null&&(j.flags|=2),j}function D(j,B,K,Te){return B===null||B.tag!==6?(B=uu(K,j.mode,Te),B.return=j,B):(B=f(B,K),B.return=j,B)}function O(j,B,K,Te){var Xe=K.type;return Xe===U?xe(j,B,K.props.children,Te,K.key):B!==null&&(B.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&rh(Xe)===B.type)?(Te=f(B,K.props),Te.ref=_o(j,B,K),Te.return=j,Te):(Te=Wa(K.type,K.key,K.props,null,j.mode,Te),Te.ref=_o(j,B,K),Te.return=j,Te)}function te(j,B,K,Te){return B===null||B.tag!==4||B.stateNode.containerInfo!==K.containerInfo||B.stateNode.implementation!==K.implementation?(B=fu(K,j.mode,Te),B.return=j,B):(B=f(B,K.children||[]),B.return=j,B)}function xe(j,B,K,Te,Xe){return B===null||B.tag!==7?(B=kr(K,j.mode,Te,Xe),B.return=j,B):(B=f(B,K),B.return=j,B)}function ye(j,B,K){if(typeof B=="string"&&B!==""||typeof B=="number")return B=uu(""+B,j.mode,K),B.return=j,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Y:return K=Wa(B.type,B.key,B.props,null,j.mode,K),K.ref=_o(j,null,B),K.return=j,K;case F:return B=fu(B,j.mode,K),B.return=j,B;case ae:var Te=B._init;return ye(j,Te(B._payload),K)}if(qe(B)||ce(B))return B=kr(B,j.mode,K,null),B.return=j,B;ya(j,B)}return null}function _e(j,B,K,Te){var Xe=B!==null?B.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Xe!==null?null:D(j,B,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case Y:return K.key===Xe?O(j,B,K,Te):null;case F:return K.key===Xe?te(j,B,K,Te):null;case ae:return Xe=K._init,_e(j,B,Xe(K._payload),Te)}if(qe(K)||ce(K))return Xe!==null?null:xe(j,B,K,Te,null);ya(j,K)}return null}function Ne(j,B,K,Te,Xe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return j=j.get(K)||null,D(B,j,""+Te,Xe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case Y:return j=j.get(Te.key===null?K:Te.key)||null,O(B,j,Te,Xe);case F:return j=j.get(Te.key===null?K:Te.key)||null,te(B,j,Te,Xe);case ae:var Ke=Te._init;return Ne(j,B,K,Ke(Te._payload),Xe)}if(qe(Te)||ce(Te))return j=j.get(K)||null,xe(B,j,Te,Xe,null);ya(B,Te)}return null}function ze(j,B,K,Te){for(var Xe=null,Ke=null,Ze=B,tt=B=0,tn=null;Ze!==null&&tt<K.length;tt++){Ze.index>tt?(tn=Ze,Ze=null):tn=Ze.sibling;var Mt=_e(j,Ze,K[tt],Te);if(Mt===null){Ze===null&&(Ze=tn);break}t&&Ze&&Mt.alternate===null&&i(j,Ze),B=h(Mt,B,tt),Ke===null?Xe=Mt:Ke.sibling=Mt,Ke=Mt,Ze=tn}if(tt===K.length)return o(j,Ze),Ot&&br(j,tt),Xe;if(Ze===null){for(;tt<K.length;tt++)Ze=ye(j,K[tt],Te),Ze!==null&&(B=h(Ze,B,tt),Ke===null?Xe=Ze:Ke.sibling=Ze,Ke=Ze);return Ot&&br(j,tt),Xe}for(Ze=l(j,Ze);tt<K.length;tt++)tn=Ne(Ze,j,tt,K[tt],Te),tn!==null&&(t&&tn.alternate!==null&&Ze.delete(tn.key===null?tt:tn.key),B=h(tn,B,tt),Ke===null?Xe=tn:Ke.sibling=tn,Ke=tn);return t&&Ze.forEach(function(fr){return i(j,fr)}),Ot&&br(j,tt),Xe}function He(j,B,K,Te){var Xe=ce(K);if(typeof Xe!="function")throw Error(n(150));if(K=Xe.call(K),K==null)throw Error(n(151));for(var Ke=Xe=null,Ze=B,tt=B=0,tn=null,Mt=K.next();Ze!==null&&!Mt.done;tt++,Mt=K.next()){Ze.index>tt?(tn=Ze,Ze=null):tn=Ze.sibling;var fr=_e(j,Ze,Mt.value,Te);if(fr===null){Ze===null&&(Ze=tn);break}t&&Ze&&fr.alternate===null&&i(j,Ze),B=h(fr,B,tt),Ke===null?Xe=fr:Ke.sibling=fr,Ke=fr,Ze=tn}if(Mt.done)return o(j,Ze),Ot&&br(j,tt),Xe;if(Ze===null){for(;!Mt.done;tt++,Mt=K.next())Mt=ye(j,Mt.value,Te),Mt!==null&&(B=h(Mt,B,tt),Ke===null?Xe=Mt:Ke.sibling=Mt,Ke=Mt);return Ot&&br(j,tt),Xe}for(Ze=l(j,Ze);!Mt.done;tt++,Mt=K.next())Mt=Ne(Ze,j,tt,Mt.value,Te),Mt!==null&&(t&&Mt.alternate!==null&&Ze.delete(Mt.key===null?tt:Mt.key),B=h(Mt,B,tt),Ke===null?Xe=Mt:Ke.sibling=Mt,Ke=Mt);return t&&Ze.forEach(function(Q_){return i(j,Q_)}),Ot&&br(j,tt),Xe}function Wt(j,B,K,Te){if(typeof K=="object"&&K!==null&&K.type===U&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case Y:e:{for(var Xe=K.key,Ke=B;Ke!==null;){if(Ke.key===Xe){if(Xe=K.type,Xe===U){if(Ke.tag===7){o(j,Ke.sibling),B=f(Ke,K.props.children),B.return=j,j=B;break e}}else if(Ke.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&rh(Xe)===Ke.type){o(j,Ke.sibling),B=f(Ke,K.props),B.ref=_o(j,Ke,K),B.return=j,j=B;break e}o(j,Ke);break}else i(j,Ke);Ke=Ke.sibling}K.type===U?(B=kr(K.props.children,j.mode,Te,K.key),B.return=j,j=B):(Te=Wa(K.type,K.key,K.props,null,j.mode,Te),Te.ref=_o(j,B,K),Te.return=j,j=Te)}return M(j);case F:e:{for(Ke=K.key;B!==null;){if(B.key===Ke)if(B.tag===4&&B.stateNode.containerInfo===K.containerInfo&&B.stateNode.implementation===K.implementation){o(j,B.sibling),B=f(B,K.children||[]),B.return=j,j=B;break e}else{o(j,B);break}else i(j,B);B=B.sibling}B=fu(K,j.mode,Te),B.return=j,j=B}return M(j);case ae:return Ke=K._init,Wt(j,B,Ke(K._payload),Te)}if(qe(K))return ze(j,B,K,Te);if(ce(K))return He(j,B,K,Te);ya(j,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,B!==null&&B.tag===6?(o(j,B.sibling),B=f(B,K),B.return=j,j=B):(o(j,B),B=uu(K,j.mode,Te),B.return=j,j=B),M(j)):o(j,B)}return Wt}var ms=sh(!0),oh=sh(!1),Sa=er(null),Ma=null,gs=null,yc=null;function Sc(){yc=gs=Ma=null}function Mc(t){var i=Sa.current;Ft(Sa),t._currentValue=i}function Ec(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function _s(t,i){Ma=t,yc=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Cn=!0),t.firstContext=null)}function Yn(t){var i=t._currentValue;if(yc!==t)if(t={context:t,memoizedValue:i,next:null},gs===null){if(Ma===null)throw Error(n(308));gs=t,Ma.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return i}var Lr=null;function wc(t){Lr===null?Lr=[t]:Lr.push(t)}function ah(t,i,o,l){var f=i.interleaved;return f===null?(o.next=o,wc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Li(t,l)}function Li(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var ir=!1;function Tc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Di(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(vt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Li(t,o)}return f=l.interleaved,f===null?(i.next=i,wc(l)):(i.next=f.next,f.next=i),l.interleaved=i,Li(t,o)}function Ea(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,zl(t,o)}}function ch(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?f=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?f=h=i:h=h.next=i}else f=h=i;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function wa(t,i,o,l){var f=t.updateQueue;ir=!1;var h=f.firstBaseUpdate,M=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var O=D,te=O.next;O.next=null,M===null?h=te:M.next=te,M=O;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,D=xe.lastBaseUpdate,D!==M&&(D===null?xe.firstBaseUpdate=te:D.next=te,xe.lastBaseUpdate=O))}if(h!==null){var ye=f.baseState;M=0,xe=te=O=null,D=h;do{var _e=D.lane,Ne=D.eventTime;if((l&_e)===_e){xe!==null&&(xe=xe.next={eventTime:Ne,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ze=t,He=D;switch(_e=i,Ne=o,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){ye=ze.call(Ne,ye,_e);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,_e=typeof ze=="function"?ze.call(Ne,ye,_e):ze,_e==null)break e;ye=se({},ye,_e);break e;case 2:ir=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,_e=f.effects,_e===null?f.effects=[D]:_e.push(D))}else Ne={eventTime:Ne,lane:_e,tag:D.tag,payload:D.payload,callback:D.callback,next:null},xe===null?(te=xe=Ne,O=ye):xe=xe.next=Ne,M|=_e;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;_e=D,D=_e.next,_e.next=null,f.lastBaseUpdate=_e,f.shared.pending=null}}while(!0);if(xe===null&&(O=ye),f.baseState=O,f.firstBaseUpdate=te,f.lastBaseUpdate=xe,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);Nr|=M,t.lanes=M,t.memoizedState=ye}}function uh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=o,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var vo={},gi=er(vo),xo=er(vo),yo=er(vo);function Dr(t){if(t===vo)throw Error(n(174));return t}function Ac(t,i){switch(Dt(yo,i),Dt(xo,t),Dt(gi,vo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ve(i,t)}Ft(gi),Dt(gi,i)}function vs(){Ft(gi),Ft(xo),Ft(yo)}function fh(t){Dr(yo.current);var i=Dr(gi.current),o=Ve(i,t.type);i!==o&&(Dt(xo,t),Dt(gi,o))}function Cc(t){xo.current===t&&(Ft(gi),Ft(xo))}var kt=er(0);function Ta(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Rc=[];function Pc(){for(var t=0;t<Rc.length;t++)Rc[t]._workInProgressVersionPrimary=null;Rc.length=0}var Aa=R.ReactCurrentDispatcher,bc=R.ReactCurrentBatchConfig,Ir=0,zt=null,$t=null,Jt=null,Ca=!1,So=!1,Mo=0,y_=0;function fn(){throw Error(n(321))}function Lc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ei(t[o],i[o]))return!1;return!0}function Dc(t,i,o,l,f,h){if(Ir=h,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Aa.current=t===null||t.memoizedState===null?w_:T_,t=o(l,f),So){h=0;do{if(So=!1,Mo=0,25<=h)throw Error(n(301));h+=1,Jt=$t=null,i.updateQueue=null,Aa.current=A_,t=o(l,f)}while(So)}if(Aa.current=ba,i=$t!==null&&$t.next!==null,Ir=0,Jt=$t=zt=null,Ca=!1,i)throw Error(n(300));return t}function Ic(){var t=Mo!==0;return Mo=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?zt.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function qn(){if($t===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=Jt===null?zt.memoizedState:Jt.next;if(i!==null)Jt=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Jt===null?zt.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function Eo(t,i){return typeof i=="function"?i(t):i}function Nc(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=$t,f=l.baseQueue,h=o.pending;if(h!==null){if(f!==null){var M=f.next;f.next=h.next,h.next=M}l.baseQueue=f=h,o.pending=null}if(f!==null){h=f.next,l=l.baseState;var D=M=null,O=null,te=h;do{var xe=te.lane;if((Ir&xe)===xe)O!==null&&(O=O.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:t(l,te.action);else{var ye={lane:xe,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};O===null?(D=O=ye,M=l):O=O.next=ye,zt.lanes|=xe,Nr|=xe}te=te.next}while(te!==null&&te!==h);O===null?M=l:O.next=D,ei(l,i.memoizedState)||(Cn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=O,o.lastRenderedState=l}if(t=o.interleaved,t!==null){f=t;do h=f.lane,zt.lanes|=h,Nr|=h,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Uc(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,f=o.pending,h=i.memoizedState;if(f!==null){o.pending=null;var M=f=f.next;do h=t(h,M.action),M=M.next;while(M!==f);ei(h,i.memoizedState)||(Cn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function dh(){}function hh(t,i){var o=zt,l=qn(),f=i(),h=!ei(l.memoizedState,f);if(h&&(l.memoizedState=f,Cn=!0),l=l.queue,Fc(gh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Jt!==null&&Jt.memoizedState.tag&1){if(o.flags|=2048,wo(9,mh.bind(null,o,l,f,i),void 0,null),en===null)throw Error(n(349));(Ir&30)!==0||ph(o,i,f)}return f}function ph(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function mh(t,i,o,l){i.value=o,i.getSnapshot=l,_h(i)&&vh(t)}function gh(t,i,o){return o(function(){_h(i)&&vh(t)})}function _h(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ei(t,o)}catch{return!0}}function vh(t){var i=Li(t,1);i!==null&&si(i,t,1,-1)}function xh(t){var i=_i();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:t},i.queue=t,t=t.dispatch=E_.bind(null,zt,t),[i.memoizedState,t]}function wo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function yh(){return qn().memoizedState}function Ra(t,i,o,l){var f=_i();zt.flags|=t,f.memoizedState=wo(1|i,o,void 0,l===void 0?null:l)}function Pa(t,i,o,l){var f=qn();l=l===void 0?null:l;var h=void 0;if($t!==null){var M=$t.memoizedState;if(h=M.destroy,l!==null&&Lc(l,M.deps)){f.memoizedState=wo(i,o,h,l);return}}zt.flags|=t,f.memoizedState=wo(1|i,o,h,l)}function Sh(t,i){return Ra(8390656,8,t,i)}function Fc(t,i){return Pa(2048,8,t,i)}function Mh(t,i){return Pa(4,2,t,i)}function Eh(t,i){return Pa(4,4,t,i)}function wh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Th(t,i,o){return o=o!=null?o.concat([t]):null,Pa(4,4,wh.bind(null,i,t),o)}function Oc(){}function Ah(t,i){var o=qn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Lc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Ch(t,i){var o=qn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Lc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Rh(t,i,o){return(Ir&21)===0?(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=o):(ei(o,i)||(o=vn(),zt.lanes|=o,Nr|=o,t.baseState=!0),i)}function S_(t,i){var o=At;At=o!==0&&4>o?o:4,t(!0);var l=bc.transition;bc.transition={};try{t(!1),i()}finally{At=o,bc.transition=l}}function Ph(){return qn().memoizedState}function M_(t,i,o){var l=lr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},bh(t))Lh(i,o);else if(o=ah(t,i,o,l),o!==null){var f=yn();si(o,t,l,f),Dh(o,i,l)}}function E_(t,i,o){var l=lr(t),f={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(bh(t))Lh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,D=h(M,o);if(f.hasEagerState=!0,f.eagerState=D,ei(D,M)){var O=i.interleaved;O===null?(f.next=f,wc(i)):(f.next=O.next,O.next=f),i.interleaved=f;return}}catch{}finally{}o=ah(t,i,f,l),o!==null&&(f=yn(),si(o,t,l,f),Dh(o,i,l))}}function bh(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function Lh(t,i){So=Ca=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Dh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,zl(t,o)}}var ba={readContext:Yn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},w_={readContext:Yn,useCallback:function(t,i){return _i().memoizedState=[t,i===void 0?null:i],t},useContext:Yn,useEffect:Sh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ra(4194308,4,wh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ra(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ra(4,2,t,i)},useMemo:function(t,i){var o=_i();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=_i();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=M_.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=_i();return t={current:t},i.memoizedState=t},useState:xh,useDebugValue:Oc,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=xh(!1),i=t[0];return t=S_.bind(null,t[1]),_i().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=zt,f=_i();if(Ot){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),en===null)throw Error(n(349));(Ir&30)!==0||ph(l,i,o)}f.memoizedState=o;var h={value:o,getSnapshot:i};return f.queue=h,Sh(gh.bind(null,l,h,t),[t]),l.flags|=2048,wo(9,mh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=_i(),i=en.identifierPrefix;if(Ot){var o=bi,l=Pi;o=(l&~(1<<32-st(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Mo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=y_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},T_={readContext:Yn,useCallback:Ah,useContext:Yn,useEffect:Fc,useImperativeHandle:Th,useInsertionEffect:Mh,useLayoutEffect:Eh,useMemo:Ch,useReducer:Nc,useRef:yh,useState:function(){return Nc(Eo)},useDebugValue:Oc,useDeferredValue:function(t){var i=qn();return Rh(i,$t.memoizedState,t)},useTransition:function(){var t=Nc(Eo)[0],i=qn().memoizedState;return[t,i]},useMutableSource:dh,useSyncExternalStore:hh,useId:Ph,unstable_isNewReconciler:!1},A_={readContext:Yn,useCallback:Ah,useContext:Yn,useEffect:Fc,useImperativeHandle:Th,useInsertionEffect:Mh,useLayoutEffect:Eh,useMemo:Ch,useReducer:Uc,useRef:yh,useState:function(){return Uc(Eo)},useDebugValue:Oc,useDeferredValue:function(t){var i=qn();return $t===null?i.memoizedState=t:Rh(i,$t.memoizedState,t)},useTransition:function(){var t=Uc(Eo)[0],i=qn().memoizedState;return[t,i]},useMutableSource:dh,useSyncExternalStore:hh,useId:Ph,unstable_isNewReconciler:!1};function ni(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function kc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var La={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=yn(),f=lr(t),h=Di(l,f);h.payload=i,o!=null&&(h.callback=o),i=rr(t,h,f),i!==null&&(si(i,t,f,l),Ea(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=yn(),f=lr(t),h=Di(l,f);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=rr(t,h,f),i!==null&&(si(i,t,f,l),Ea(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=yn(),l=lr(t),f=Di(o,l);f.tag=2,i!=null&&(f.callback=i),i=rr(t,f,l),i!==null&&(si(i,t,l,o),Ea(i,t,l))}};function Ih(t,i,o,l,f,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!co(o,l)||!co(f,h):!0}function Nh(t,i,o){var l=!1,f=tr,h=i.contextType;return typeof h=="object"&&h!==null?h=Yn(h):(f=An(i)?Rr:un.current,l=i.contextTypes,h=(l=l!=null)?fs(t,f):tr),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=La,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function Uh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&La.enqueueReplaceState(i,i.state,null)}function zc(t,i,o,l){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Tc(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=Yn(h):(h=An(i)?Rr:un.current,f.context=fs(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(kc(t,i,h,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&La.enqueueReplaceState(f,f.state,null),wa(t,o,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,i){try{var o="",l=i;do o+=$(l),l=l.return;while(l);var f=o}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function Bc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Hc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var C_=typeof WeakMap=="function"?WeakMap:Map;function Fh(t,i,o){o=Di(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){ka||(ka=!0,nu=l),Hc(t,i)},o}function Oh(t,i,o){o=Di(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;o.payload=function(){return l(f)},o.callback=function(){Hc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Hc(t,i),typeof l!="function"&&(or===null?or=new Set([this]):or.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function kh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new C_;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(o)||(f.add(o),t=H_.bind(null,t,i,o),i.then(t,t))}function zh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Bh(t,i,o,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Di(-1,1),i.tag=2,rr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var R_=R.ReactCurrentOwner,Cn=!1;function xn(t,i,o,l){i.child=t===null?oh(i,null,o,l):ms(i,t.child,o,l)}function Hh(t,i,o,l,f){o=o.render;var h=i.ref;return _s(i,f),l=Dc(t,i,o,l,h,f),o=Ic(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ii(t,i,f)):(Ot&&o&&mc(i),i.flags|=1,xn(t,i,l,f),i.child)}function Vh(t,i,o,l,f){if(t===null){var h=o.type;return typeof h=="function"&&!cu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Gh(t,i,h,l,f)):(t=Wa(o.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:co,o(M,l)&&t.ref===i.ref)return Ii(t,i,f)}return i.flags|=1,t=ur(h,l),t.ref=i.ref,t.return=i,i.child=t}function Gh(t,i,o,l,f){if(t!==null){var h=t.memoizedProps;if(co(h,l)&&t.ref===i.ref)if(Cn=!1,i.pendingProps=l=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Cn=!0);else return i.lanes=t.lanes,Ii(t,i,f)}return Vc(t,i,o,l,f)}function Wh(t,i,o){var l=i.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Ss,kn),kn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(Ss,kn),kn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Dt(Ss,kn),kn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Dt(Ss,kn),kn|=l;return xn(t,i,f,o),i.child}function Xh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Vc(t,i,o,l,f){var h=An(o)?Rr:un.current;return h=fs(i,h),_s(i,f),o=Dc(t,i,o,l,h,f),l=Ic(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ii(t,i,f)):(Ot&&l&&mc(i),i.flags|=1,xn(t,i,o,f),i.child)}function jh(t,i,o,l,f){if(An(o)){var h=!0;ma(i)}else h=!1;if(_s(i,f),i.stateNode===null)Ia(t,i),Nh(i,o,l),zc(i,o,l,f),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var O=M.context,te=o.contextType;typeof te=="object"&&te!==null?te=Yn(te):(te=An(o)?Rr:un.current,te=fs(i,te));var xe=o.getDerivedStateFromProps,ye=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||O!==te)&&Uh(i,M,l,te),ir=!1;var _e=i.memoizedState;M.state=_e,wa(i,l,M,f),O=i.memoizedState,D!==l||_e!==O||Tn.current||ir?(typeof xe=="function"&&(kc(i,o,xe,l),O=i.memoizedState),(D=ir||Ih(i,o,D,l,_e,O,te))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),M.props=l,M.state=O,M.context=te,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,lh(t,i),D=i.memoizedProps,te=i.type===i.elementType?D:ni(i.type,D),M.props=te,ye=i.pendingProps,_e=M.context,O=o.contextType,typeof O=="object"&&O!==null?O=Yn(O):(O=An(o)?Rr:un.current,O=fs(i,O));var Ne=o.getDerivedStateFromProps;(xe=typeof Ne=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==ye||_e!==O)&&Uh(i,M,l,O),ir=!1,_e=i.memoizedState,M.state=_e,wa(i,l,M,f);var ze=i.memoizedState;D!==ye||_e!==ze||Tn.current||ir?(typeof Ne=="function"&&(kc(i,o,Ne,l),ze=i.memoizedState),(te=ir||Ih(i,o,te,l,_e,ze,O)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ze,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ze,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),M.props=l,M.state=ze,M.context=O,l=te):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),l=!1)}return Gc(t,i,o,l,h,f)}function Gc(t,i,o,l,f,h){Xh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return f&&Zd(i,o,!1),Ii(t,i,h);l=i.stateNode,R_.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=ms(i,t.child,null,h),i.child=ms(i,null,D,h)):xn(t,i,D,h),i.memoizedState=l.state,f&&Zd(i,o,!0),i.child}function Yh(t){var i=t.stateNode;i.pendingContext?$d(t,i.pendingContext,i.pendingContext!==i.context):i.context&&$d(t,i.context,!1),Ac(t,i.containerInfo)}function qh(t,i,o,l,f){return ps(),xc(f),i.flags|=256,xn(t,i,o,l),i.child}var Wc={dehydrated:null,treeContext:null,retryLane:0};function Xc(t){return{baseLanes:t,cachePool:null,transitions:null}}function $h(t,i,o){var l=i.pendingProps,f=kt.current,h=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(f&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Dt(kt,f&1),t===null)return vc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Xa(M,l,0,null),t=kr(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Xc(o),i.memoizedState=Wc,t):jc(i,M));if(f=t.memoizedState,f!==null&&(D=f.dehydrated,D!==null))return P_(t,i,M,l,D,f,o);if(h){h=l.fallback,M=i.mode,f=t.child,D=f.sibling;var O={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=ur(f,O),l.subtreeFlags=f.subtreeFlags&14680064),D!==null?h=ur(D,h):(h=kr(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Xc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Wc,l}return h=t.child,t=h.sibling,l=ur(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function jc(t,i){return i=Xa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Da(t,i,o,l){return l!==null&&xc(l),ms(i,t.child,null,o),t=jc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function P_(t,i,o,l,f,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Bc(Error(n(422))),Da(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=Xa({mode:"visible",children:l.children},f,0,null),h=kr(h,f,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ms(i,t.child,null,M),i.child.memoizedState=Xc(M),i.memoizedState=Wc,h);if((i.mode&1)===0)return Da(t,i,M,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=Bc(h,l,void 0),Da(t,i,M,l)}if(D=(M&t.childLanes)!==0,Cn||D){if(l=en,l!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|M))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Li(t,f),si(l,t,f,-1))}return lu(),l=Bc(Error(n(421))),Da(t,i,M,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=V_.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,On=Ji(f.nextSibling),Fn=i,Ot=!0,ti=null,t!==null&&(Xn[jn++]=Pi,Xn[jn++]=bi,Xn[jn++]=Pr,Pi=t.id,bi=t.overflow,Pr=i),i=jc(i,l.children),i.flags|=4096,i)}function Kh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Ec(t.return,i,o)}function Yc(t,i,o,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=f)}function Zh(t,i,o){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(xn(t,i,l.children,o),l=kt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kh(t,o,i);else if(t.tag===19)Kh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(kt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Ta(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Yc(i,!1,f,o,h);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Ta(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Yc(i,!0,o,null,h);break;case"together":Yc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ia(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ii(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Nr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ur(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ur(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function b_(t,i,o){switch(i.tag){case 3:Yh(i),ps();break;case 5:fh(i);break;case 1:An(i.type)&&ma(i);break;case 4:Ac(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Dt(Sa,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(kt,kt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?$h(t,i,o):(Dt(kt,kt.current&1),t=Ii(t,i,o),t!==null?t.sibling:null);Dt(kt,kt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Zh(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Dt(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,Wh(t,i,o)}return Ii(t,i,o)}var Qh,qc,Jh,ep;Qh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},qc=function(){},Jh=function(t,i,o,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Dr(gi.current);var h=null;switch(o){case"input":f=X(t,f),l=X(t,l),h=[];break;case"select":f=se({},f,{value:void 0}),l=se({},l,{value:void 0}),h=[];break;case"textarea":f=T(t,f),l=T(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=da)}ut(o,l);var M;o=null;for(te in f)if(!l.hasOwnProperty(te)&&f.hasOwnProperty(te)&&f[te]!=null)if(te==="style"){var D=f[te];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?h||(h=[]):(h=h||[]).push(te,null));for(te in l){var O=l[te];if(D=f!=null?f[te]:void 0,l.hasOwnProperty(te)&&O!==D&&(O!=null||D!=null))if(te==="style")if(D){for(M in D)!D.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in O)O.hasOwnProperty(M)&&D[M]!==O[M]&&(o||(o={}),o[M]=O[M])}else o||(h||(h=[]),h.push(te,o)),o=O;else te==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,D=D?D.__html:void 0,O!=null&&D!==O&&(h=h||[]).push(te,O)):te==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(te,""+O):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(O!=null&&te==="onScroll"&&Ut("scroll",t),h||D===O||(h=[])):(h=h||[]).push(te,O))}o&&(h=h||[]).push("style",o);var te=h;(i.updateQueue=te)&&(i.flags|=4)}},ep=function(t,i,o,l){o!==l&&(i.flags|=4)};function To(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function L_(t,i,o){var l=i.pendingProps;switch(gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return An(i.type)&&pa(),dn(i),null;case 3:return l=i.stateNode,vs(),Ft(Tn),Ft(un),Pc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(xa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ti!==null&&(su(ti),ti=null))),qc(t,i),dn(i),null;case 5:Cc(i);var f=Dr(yo.current);if(o=i.type,t!==null&&i.stateNode!=null)Jh(t,i,o,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=Dr(gi.current),xa(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[mi]=i,l[mo]=h,t=(i.mode&1)!==0,o){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(f=0;f<fo.length;f++)Ut(fo[f],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":gn(l,h),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",l);break;case"textarea":Z(l,h),Ut("invalid",l)}ut(o,h),f=null;for(var M in h)if(h.hasOwnProperty(M)){var D=h[M];M==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&fa(l.textContent,D,t),f=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&fa(l.textContent,D,t),f=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Ut("scroll",l)}switch(o){case"input":Ct(l),$e(l,h,!0);break;case"textarea":Ct(l),ve(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=da)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pe(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[mi]=i,t[mo]=l,Qh(t,i,!1,!1),i.stateNode=t;e:{switch(M=it(o,l),o){case"dialog":Ut("cancel",t),Ut("close",t),f=l;break;case"iframe":case"object":case"embed":Ut("load",t),f=l;break;case"video":case"audio":for(f=0;f<fo.length;f++)Ut(fo[f],t);f=l;break;case"source":Ut("error",t),f=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),f=l;break;case"details":Ut("toggle",t),f=l;break;case"input":gn(t,l),f=X(t,l),Ut("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=se({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":Z(t,l),f=T(t,l),Ut("invalid",t);break;default:f=l}ut(o,f),D=f;for(h in D)if(D.hasOwnProperty(h)){var O=D[h];h==="style"?Je(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ue(t,O)):h==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&lt(t,O):typeof O=="number"&&lt(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Ut("scroll",t):O!=null&&L(t,h,O,M))}switch(o){case"input":Ct(t),$e(t,l,!1);break;case"textarea":Ct(t),ve(t);break;case"option":l.value!=null&&t.setAttribute("value",""+we(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?b(t,!!l.multiple,h,!1):l.defaultValue!=null&&b(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=da)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)ep(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Dr(yo.current),Dr(gi.current),xa(i)){if(l=i.stateNode,o=i.memoizedProps,l[mi]=i,(h=l.nodeValue!==o)&&(t=Fn,t!==null))switch(t.tag){case 3:fa(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fa(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[mi]=i,i.stateNode=l}return dn(i),null;case 13:if(Ft(kt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&On!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ih(),ps(),i.flags|=98560,h=!1;else if(h=xa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[mi]=i}else ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),h=!1}else ti!==null&&(su(ti),ti=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(kt.current&1)!==0?Kt===0&&(Kt=3):lu())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return vs(),qc(t,i),t===null&&ho(i.stateNode.containerInfo),dn(i),null;case 10:return Mc(i.type._context),dn(i),null;case 17:return An(i.type)&&pa(),dn(i),null;case 19:if(Ft(kt),h=i.memoizedState,h===null)return dn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)To(h,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ta(t),M!==null){for(i.flags|=128,To(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Dt(kt,kt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Me()>Ms&&(i.flags|=128,l=!0,To(h,!1),i.lanes=4194304)}else{if(!l)if(t=Ta(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),To(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ot)return dn(i),null}else 2*Me()-h.renderingStartTime>Ms&&o!==1073741824&&(i.flags|=128,l=!0,To(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Me(),i.sibling=null,o=kt.current,Dt(kt,l?o&1|2:o&1),i):(dn(i),null);case 22:case 23:return au(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(kn&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function D_(t,i){switch(gc(i),i.tag){case 1:return An(i.type)&&pa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return vs(),Ft(Tn),Ft(un),Pc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Cc(i),null;case 13:if(Ft(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ps()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ft(kt),null;case 4:return vs(),null;case 10:return Mc(i.type._context),null;case 22:case 23:return au(),null;case 24:return null;default:return null}}var Na=!1,hn=!1,I_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function ys(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Vt(t,i,l)}else o.current=null}function $c(t,i,o){try{o()}catch(l){Vt(t,i,l)}}var tp=!1;function N_(t,i){if(ac=ea,t=Id(),Jl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,D=-1,O=-1,te=0,xe=0,ye=t,_e=null;t:for(;;){for(var Ne;ye!==o||f!==0&&ye.nodeType!==3||(D=M+f),ye!==h||l!==0&&ye.nodeType!==3||(O=M+l),ye.nodeType===3&&(M+=ye.nodeValue.length),(Ne=ye.firstChild)!==null;)_e=ye,ye=Ne;for(;;){if(ye===t)break t;if(_e===o&&++te===f&&(D=M),_e===h&&++xe===l&&(O=M),(Ne=ye.nextSibling)!==null)break;ye=_e,_e=ye.parentNode}ye=Ne}o=D===-1||O===-1?null:{start:D,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(lc={focusedElem:t,selectionRange:o},ea=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,Wt=ze.memoizedState,j=i.stateNode,B=j.getSnapshotBeforeUpdate(i.elementType===i.type?He:ni(i.type,He),Wt);j.__reactInternalSnapshotBeforeUpdate=B}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Vt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return ze=tp,tp=!1,ze}function Ao(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&$c(i,o,h)}f=f.next}while(f!==l)}}function Ua(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Kc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function np(t){var i=t.alternate;i!==null&&(t.alternate=null,np(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[mi],delete i[mo],delete i[dc],delete i[g_],delete i[__])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ip(t){return t.tag===5||t.tag===3||t.tag===4}function rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ip(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=da));else if(l!==4&&(t=t.child,t!==null))for(Zc(t,i,o),t=t.sibling;t!==null;)Zc(t,i,o),t=t.sibling}function Qc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Qc(t,i,o),t=t.sibling;t!==null;)Qc(t,i,o),t=t.sibling}var sn=null,ii=!1;function sr(t,i,o){for(o=o.child;o!==null;)sp(t,i,o),o=o.sibling}function sp(t,i,o){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Et,o)}catch{}switch(o.tag){case 5:hn||ys(o,i);case 6:var l=sn,f=ii;sn=null,sr(t,i,o),sn=l,ii=f,sn!==null&&(ii?(t=sn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):sn.removeChild(o.stateNode));break;case 18:sn!==null&&(ii?(t=sn,o=o.stateNode,t.nodeType===8?fc(t.parentNode,o):t.nodeType===1&&fc(t,o),io(t)):fc(sn,o.stateNode));break;case 4:l=sn,f=ii,sn=o.stateNode.containerInfo,ii=!0,sr(t,i,o),sn=l,ii=f;break;case 0:case 11:case 14:case 15:if(!hn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&$c(o,i,M),f=f.next}while(f!==l)}sr(t,i,o);break;case 1:if(!hn&&(ys(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(D){Vt(o,i,D)}sr(t,i,o);break;case 21:sr(t,i,o);break;case 22:o.mode&1?(hn=(l=hn)||o.memoizedState!==null,sr(t,i,o),hn=l):sr(t,i,o);break;default:sr(t,i,o)}}function op(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new I_),i.forEach(function(l){var f=G_.bind(null,t,l);o.has(l)||(o.add(l),l.then(f,f))})}}function ri(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l];try{var h=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:sn=D.stateNode,ii=!1;break e;case 3:sn=D.stateNode.containerInfo,ii=!0;break e;case 4:sn=D.stateNode.containerInfo,ii=!0;break e}D=D.return}if(sn===null)throw Error(n(160));sp(h,M,f),sn=null,ii=!1;var O=f.alternate;O!==null&&(O.return=null),f.return=null}catch(te){Vt(f,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ap(i,t),i=i.sibling}function ap(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ri(i,t),vi(t),l&4){try{Ao(3,t,t.return),Ua(3,t)}catch(He){Vt(t,t.return,He)}try{Ao(5,t,t.return)}catch(He){Vt(t,t.return,He)}}break;case 1:ri(i,t),vi(t),l&512&&o!==null&&ys(o,o.return);break;case 5:if(ri(i,t),vi(t),l&512&&o!==null&&ys(o,o.return),t.flags&32){var f=t.stateNode;try{lt(f,"")}catch(He){Vt(t,t.return,He)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,D=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&ht(f,h),it(D,M);var te=it(D,h);for(M=0;M<O.length;M+=2){var xe=O[M],ye=O[M+1];xe==="style"?Je(f,ye):xe==="dangerouslySetInnerHTML"?Ue(f,ye):xe==="children"?lt(f,ye):L(f,xe,ye,te)}switch(D){case"input":ct(f,h);break;case"textarea":ge(f,h);break;case"select":var _e=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Ne=h.value;Ne!=null?b(f,!!h.multiple,Ne,!1):_e!==!!h.multiple&&(h.defaultValue!=null?b(f,!!h.multiple,h.defaultValue,!0):b(f,!!h.multiple,h.multiple?[]:"",!1))}f[mo]=h}catch(He){Vt(t,t.return,He)}}break;case 6:if(ri(i,t),vi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(He){Vt(t,t.return,He)}}break;case 3:if(ri(i,t),vi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{io(i.containerInfo)}catch(He){Vt(t,t.return,He)}break;case 4:ri(i,t),vi(t);break;case 13:ri(i,t),vi(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(tu=Me())),l&4&&op(t);break;case 22:if(xe=o!==null&&o.memoizedState!==null,t.mode&1?(hn=(te=hn)||xe,ri(i,t),hn=te):ri(i,t),vi(t),l&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!xe&&(t.mode&1)!==0)for(Fe=t,xe=t.child;xe!==null;){for(ye=Fe=xe;Fe!==null;){switch(_e=Fe,Ne=_e.child,_e.tag){case 0:case 11:case 14:case 15:Ao(4,_e,_e.return);break;case 1:ys(_e,_e.return);var ze=_e.stateNode;if(typeof ze.componentWillUnmount=="function"){l=_e,o=_e.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(He){Vt(l,o,He)}}break;case 5:ys(_e,_e.return);break;case 22:if(_e.memoizedState!==null){up(ye);continue}}Ne!==null?(Ne.return=_e,Fe=Ne):up(ye)}xe=xe.sibling}e:for(xe=null,ye=t;;){if(ye.tag===5){if(xe===null){xe=ye;try{f=ye.stateNode,te?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=ye.stateNode,O=ye.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,D.style.display=Qe("display",M))}catch(He){Vt(t,t.return,He)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=te?"":ye.memoizedProps}catch(He){Vt(t,t.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ri(i,t),vi(t),l&4&&op(t);break;case 21:break;default:ri(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(ip(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(lt(f,""),l.flags&=-33);var h=rp(t);Qc(t,h,f);break;case 3:case 4:var M=l.stateNode.containerInfo,D=rp(t);Zc(t,D,M);break;default:throw Error(n(161))}}catch(O){Vt(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function U_(t,i,o){Fe=t,lp(t)}function lp(t,i,o){for(var l=(t.mode&1)!==0;Fe!==null;){var f=Fe,h=f.child;if(f.tag===22&&l){var M=f.memoizedState!==null||Na;if(!M){var D=f.alternate,O=D!==null&&D.memoizedState!==null||hn;D=Na;var te=hn;if(Na=M,(hn=O)&&!te)for(Fe=f;Fe!==null;)M=Fe,O=M.child,M.tag===22&&M.memoizedState!==null?fp(f):O!==null?(O.return=M,Fe=O):fp(f);for(;h!==null;)Fe=h,lp(h),h=h.sibling;Fe=f,Na=D,hn=te}cp(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Fe=h):cp(t)}}function cp(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||Ua(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!hn)if(o===null)l.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ni(i.type,o.memoizedProps);l.componentDidUpdate(f,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&uh(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}uh(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var xe=te.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&io(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&Kc(i)}catch(_e){Vt(i,i.return,_e)}}if(i===t){Fe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function up(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function fp(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ua(4,i)}catch(O){Vt(i,o,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(O){Vt(i,f,O)}}var h=i.return;try{Kc(i)}catch(O){Vt(i,h,O)}break;case 5:var M=i.return;try{Kc(i)}catch(O){Vt(i,M,O)}}}catch(O){Vt(i,i.return,O)}if(i===t){Fe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Fe=D;break}Fe=i.return}}var F_=Math.ceil,Fa=R.ReactCurrentDispatcher,Jc=R.ReactCurrentOwner,$n=R.ReactCurrentBatchConfig,vt=0,en=null,Xt=null,on=0,kn=0,Ss=er(0),Kt=0,Co=null,Nr=0,Oa=0,eu=0,Ro=null,Rn=null,tu=0,Ms=1/0,Ni=null,ka=!1,nu=null,or=null,za=!1,ar=null,Ba=0,Po=0,iu=null,Ha=-1,Va=0;function yn(){return(vt&6)!==0?Me():Ha!==-1?Ha:Ha=Me()}function lr(t){return(t.mode&1)===0?1:(vt&2)!==0&&on!==0?on&-on:x_.transition!==null?(Va===0&&(Va=vn()),Va):(t=At,t!==0||(t=window.event,t=t===void 0?16:hd(t.type)),t)}function si(t,i,o,l){if(50<Po)throw Po=0,iu=null,Error(n(185));wn(t,o,l),((vt&2)===0||t!==en)&&(t===en&&((vt&2)===0&&(Oa|=o),Kt===4&&cr(t,on)),Pn(t,l),o===1&&vt===0&&(i.mode&1)===0&&(Ms=Me()+500,ga&&nr()))}function Pn(t,i){var o=t.callbackNode;Gn(t,i);var l=pi(t,t===en?on:0);if(l===0)o!==null&&ie(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&ie(o),i===1)t.tag===0?v_(hp.bind(null,t)):Qd(hp.bind(null,t)),p_(function(){(vt&6)===0&&nr()}),o=null;else{switch(sd(l)){case 1:o=Be;break;case 4:o=et;break;case 16:o=nt;break;case 536870912:o=gt;break;default:o=nt}o=Sp(o,dp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function dp(t,i){if(Ha=-1,Va=0,(vt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Es()&&t.callbackNode!==o)return null;var l=pi(t,t===en?on:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ga(t,l);else{i=l;var f=vt;vt|=2;var h=mp();(en!==t||on!==i)&&(Ni=null,Ms=Me()+500,Fr(t,i));do try{z_();break}catch(D){pp(t,D)}while(!0);Sc(),Fa.current=h,vt=f,Xt!==null?i=0:(en=null,on=0,i=Kt)}if(i!==0){if(i===2&&(f=Ai(t),f!==0&&(l=f,i=ru(t,f))),i===1)throw o=Co,Fr(t,0),cr(t,l),Pn(t,Me()),o;if(i===6)cr(t,l);else{if(f=t.current.alternate,(l&30)===0&&!O_(f)&&(i=Ga(t,l),i===2&&(h=Ai(t),h!==0&&(l=h,i=ru(t,h))),i===1))throw o=Co,Fr(t,0),cr(t,l),Pn(t,Me()),o;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Or(t,Rn,Ni);break;case 3:if(cr(t,l),(l&130023424)===l&&(i=tu+500-Me(),10<i)){if(pi(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){yn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=uc(Or.bind(null,t,Rn,Ni),i);break}Or(t,Rn,Ni);break;case 4:if(cr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var M=31-st(l);h=1<<M,M=i[M],M>f&&(f=M),l&=~h}if(l=f,l=Me()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*F_(l/1960))-l,10<l){t.timeoutHandle=uc(Or.bind(null,t,Rn,Ni),l);break}Or(t,Rn,Ni);break;case 5:Or(t,Rn,Ni);break;default:throw Error(n(329))}}}return Pn(t,Me()),t.callbackNode===o?dp.bind(null,t):null}function ru(t,i){var o=Ro;return t.current.memoizedState.isDehydrated&&(Fr(t,i).flags|=256),t=Ga(t,i),t!==2&&(i=Rn,Rn=o,i!==null&&su(i)),t}function su(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function O_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var f=o[l],h=f.getSnapshot;f=f.value;try{if(!ei(h(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i){for(i&=~eu,i&=~Oa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-st(i),l=1<<o;t[o]=-1,i&=~l}}function hp(t){if((vt&6)!==0)throw Error(n(327));Es();var i=pi(t,0);if((i&1)===0)return Pn(t,Me()),null;var o=Ga(t,i);if(t.tag!==0&&o===2){var l=Ai(t);l!==0&&(i=l,o=ru(t,l))}if(o===1)throw o=Co,Fr(t,0),cr(t,i),Pn(t,Me()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Or(t,Rn,Ni),Pn(t,Me()),null}function ou(t,i){var o=vt;vt|=1;try{return t(i)}finally{vt=o,vt===0&&(Ms=Me()+500,ga&&nr())}}function Ur(t){ar!==null&&ar.tag===0&&(vt&6)===0&&Es();var i=vt;vt|=1;var o=$n.transition,l=At;try{if($n.transition=null,At=1,t)return t()}finally{At=l,$n.transition=o,vt=i,(vt&6)===0&&nr()}}function au(){kn=Ss.current,Ft(Ss)}function Fr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,h_(o)),Xt!==null)for(o=Xt.return;o!==null;){var l=o;switch(gc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&pa();break;case 3:vs(),Ft(Tn),Ft(un),Pc();break;case 5:Cc(l);break;case 4:vs();break;case 13:Ft(kt);break;case 19:Ft(kt);break;case 10:Mc(l.type._context);break;case 22:case 23:au()}o=o.return}if(en=t,Xt=t=ur(t.current,null),on=kn=i,Kt=0,Co=null,eu=Oa=Nr=0,Rn=Ro=null,Lr!==null){for(i=0;i<Lr.length;i++)if(o=Lr[i],l=o.interleaved,l!==null){o.interleaved=null;var f=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=f,l.next=M}o.pending=l}Lr=null}return t}function pp(t,i){do{var o=Xt;try{if(Sc(),Aa.current=ba,Ca){for(var l=zt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Ca=!1}if(Ir=0,Jt=$t=zt=null,So=!1,Mo=0,Jc.current=null,o===null||o.return===null){Kt=1,Co=i,Xt=null;break}e:{var h=t,M=o.return,D=o,O=i;if(i=on,D.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var te=O,xe=D,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ne=zh(M);if(Ne!==null){Ne.flags&=-257,Bh(Ne,M,D,h,i),Ne.mode&1&&kh(h,te,i),i=Ne,O=te;var ze=i.updateQueue;if(ze===null){var He=new Set;He.add(O),i.updateQueue=He}else ze.add(O);break e}else{if((i&1)===0){kh(h,te,i),lu();break e}O=Error(n(426))}}else if(Ot&&D.mode&1){var Wt=zh(M);if(Wt!==null){(Wt.flags&65536)===0&&(Wt.flags|=256),Bh(Wt,M,D,h,i),xc(xs(O,D));break e}}h=O=xs(O,D),Kt!==4&&(Kt=2),Ro===null?Ro=[h]:Ro.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var j=Fh(h,O,i);ch(h,j);break e;case 1:D=O;var B=h.type,K=h.stateNode;if((h.flags&128)===0&&(typeof B.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(or===null||!or.has(K)))){h.flags|=65536,i&=-i,h.lanes|=i;var Te=Oh(h,D,i);ch(h,Te);break e}}h=h.return}while(h!==null)}_p(o)}catch(Xe){i=Xe,Xt===o&&o!==null&&(Xt=o=o.return);continue}break}while(!0)}function mp(){var t=Fa.current;return Fa.current=ba,t===null?ba:t}function lu(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),en===null||(Nr&268435455)===0&&(Oa&268435455)===0||cr(en,on)}function Ga(t,i){var o=vt;vt|=2;var l=mp();(en!==t||on!==i)&&(Ni=null,Fr(t,i));do try{k_();break}catch(f){pp(t,f)}while(!0);if(Sc(),vt=o,Fa.current=l,Xt!==null)throw Error(n(261));return en=null,on=0,Kt}function k_(){for(;Xt!==null;)gp(Xt)}function z_(){for(;Xt!==null&&!W();)gp(Xt)}function gp(t){var i=yp(t.alternate,t,kn);t.memoizedProps=t.pendingProps,i===null?_p(t):Xt=i,Jc.current=null}function _p(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=L_(o,i,kn),o!==null){Xt=o;return}}else{if(o=D_(o,i),o!==null){o.flags&=32767,Xt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,Xt=null;return}}if(i=i.sibling,i!==null){Xt=i;return}Xt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Or(t,i,o){var l=At,f=$n.transition;try{$n.transition=null,At=1,B_(t,i,o,l)}finally{$n.transition=f,At=l}return null}function B_(t,i,o,l){do Es();while(ar!==null);if((vt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Zo(t,h),t===en&&(Xt=en=null,on=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||za||(za=!0,Sp(nt,function(){return Es(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=$n.transition,$n.transition=null;var M=At;At=1;var D=vt;vt|=4,Jc.current=null,N_(t,o),ap(o,t),o_(lc),ea=!!ac,lc=ac=null,t.current=o,U_(o),Ae(),vt=D,At=M,$n.transition=h}else t.current=o;if(za&&(za=!1,ar=t,Ba=f),h=t.pendingLanes,h===0&&(or=null),ln(o.stateNode),Pn(t,Me()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],l(f.value,{componentStack:f.stack,digest:f.digest});if(ka)throw ka=!1,t=nu,nu=null,t;return(Ba&1)!==0&&t.tag!==0&&Es(),h=t.pendingLanes,(h&1)!==0?t===iu?Po++:(Po=0,iu=t):Po=0,nr(),null}function Es(){if(ar!==null){var t=sd(Ba),i=$n.transition,o=At;try{if($n.transition=null,At=16>t?16:t,ar===null)var l=!1;else{if(t=ar,ar=null,Ba=0,(vt&6)!==0)throw Error(n(331));var f=vt;for(vt|=4,Fe=t.current;Fe!==null;){var h=Fe,M=h.child;if((Fe.flags&16)!==0){var D=h.deletions;if(D!==null){for(var O=0;O<D.length;O++){var te=D[O];for(Fe=te;Fe!==null;){var xe=Fe;switch(xe.tag){case 0:case 11:case 15:Ao(8,xe,h)}var ye=xe.child;if(ye!==null)ye.return=xe,Fe=ye;else for(;Fe!==null;){xe=Fe;var _e=xe.sibling,Ne=xe.return;if(np(xe),xe===te){Fe=null;break}if(_e!==null){_e.return=Ne,Fe=_e;break}Fe=Ne}}}var ze=h.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var Wt=He.sibling;He.sibling=null,He=Wt}while(He!==null)}}Fe=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Fe=M;else e:for(;Fe!==null;){if(h=Fe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ao(9,h,h.return)}var j=h.sibling;if(j!==null){j.return=h.return,Fe=j;break e}Fe=h.return}}var B=t.current;for(Fe=B;Fe!==null;){M=Fe;var K=M.child;if((M.subtreeFlags&2064)!==0&&K!==null)K.return=M,Fe=K;else e:for(M=B;Fe!==null;){if(D=Fe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Ua(9,D)}}catch(Xe){Vt(D,D.return,Xe)}if(D===M){Fe=null;break e}var Te=D.sibling;if(Te!==null){Te.return=D.return,Fe=Te;break e}Fe=D.return}}if(vt=f,nr(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Et,t)}catch{}l=!0}return l}finally{At=o,$n.transition=i}}return!1}function vp(t,i,o){i=xs(o,i),i=Fh(t,i,1),t=rr(t,i,1),i=yn(),t!==null&&(wn(t,1,i),Pn(t,i))}function Vt(t,i,o){if(t.tag===3)vp(t,t,o);else for(;i!==null;){if(i.tag===3){vp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(or===null||!or.has(l))){t=xs(o,t),t=Oh(i,t,1),i=rr(i,t,1),t=yn(),i!==null&&(wn(i,1,t),Pn(i,t));break}}i=i.return}}function H_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=yn(),t.pingedLanes|=t.suspendedLanes&o,en===t&&(on&o)===o&&(Kt===4||Kt===3&&(on&130023424)===on&&500>Me()-tu?Fr(t,0):eu|=o),Pn(t,i)}function xp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Jn,Jn<<=1,(Jn&130023424)===0&&(Jn=4194304)));var o=yn();t=Li(t,i),t!==null&&(wn(t,i,o),Pn(t,o))}function V_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),xp(t,o)}function G_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),xp(t,o)}var yp;yp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Tn.current)Cn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Cn=!1,b_(t,i,o);Cn=(t.flags&131072)!==0}else Cn=!1,Ot&&(i.flags&1048576)!==0&&Jd(i,va,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ia(t,i),t=i.pendingProps;var f=fs(i,un.current);_s(i,o),f=Dc(null,i,l,t,f,o);var h=Ic();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(l)?(h=!0,ma(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Tc(i),f.updater=La,i.stateNode=f,f._reactInternals=i,zc(i,l,t,o),i=Gc(null,i,l,!0,h,o)):(i.tag=0,Ot&&h&&mc(i),xn(null,i,f,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Ia(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=X_(l),t=ni(l,t),f){case 0:i=Vc(null,i,l,t,o);break e;case 1:i=jh(null,i,l,t,o);break e;case 11:i=Hh(null,i,l,t,o);break e;case 14:i=Vh(null,i,l,ni(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ni(l,f),Vc(t,i,l,f,o);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ni(l,f),jh(t,i,l,f,o);case 3:e:{if(Yh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,f=h.element,lh(t,i),wa(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=xs(Error(n(423)),i),i=qh(t,i,l,o,f);break e}else if(l!==f){f=xs(Error(n(424)),i),i=qh(t,i,l,o,f);break e}else for(On=Ji(i.stateNode.containerInfo.firstChild),Fn=i,Ot=!0,ti=null,o=oh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ps(),l===f){i=Ii(t,i,o);break e}xn(t,i,l,o)}i=i.child}return i;case 5:return fh(i),t===null&&vc(i),l=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,M=f.children,cc(l,f)?M=null:h!==null&&cc(l,h)&&(i.flags|=32),Xh(t,i),xn(t,i,M,o),i.child;case 6:return t===null&&vc(i),null;case 13:return $h(t,i,o);case 4:return Ac(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ms(i,null,l,o):xn(t,i,l,o),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ni(l,f),Hh(t,i,l,f,o);case 7:return xn(t,i,i.pendingProps,o),i.child;case 8:return xn(t,i,i.pendingProps.children,o),i.child;case 12:return xn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,M=f.value,Dt(Sa,l._currentValue),l._currentValue=M,h!==null)if(ei(h.value,M)){if(h.children===f.children&&!Tn.current){i=Ii(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){M=h.child;for(var O=D.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Di(-1,o&-o),O.tag=2;var te=h.updateQueue;if(te!==null){te=te.shared;var xe=te.pending;xe===null?O.next=O:(O.next=xe.next,xe.next=O),te.pending=O}}h.lanes|=o,O=h.alternate,O!==null&&(O.lanes|=o),Ec(h.return,o,i),D.lanes|=o;break}O=O.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),Ec(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}xn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,_s(i,o),f=Yn(f),l=l(f),i.flags|=1,xn(t,i,l,o),i.child;case 14:return l=i.type,f=ni(l,i.pendingProps),f=ni(l.type,f),Vh(t,i,l,f,o);case 15:return Gh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ni(l,f),Ia(t,i),i.tag=1,An(l)?(t=!0,ma(i)):t=!1,_s(i,o),Nh(i,l,f),zc(i,l,f,o),Gc(null,i,l,!0,t,o);case 19:return Zh(t,i,o);case 22:return Wh(t,i,o)}throw Error(n(156,i.tag))};function Sp(t,i){return ne(t,i)}function W_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,o,l){return new W_(t,i,o,l)}function cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function X_(t){if(typeof t=="function")return cu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ee)return 11;if(t===fe)return 14}return 2}function ur(t,i){var o=t.alternate;return o===null?(o=Kn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Wa(t,i,o,l,f,h){var M=2;if(l=t,typeof t=="function")cu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case U:return kr(o.children,f,h,i);case V:M=8,f|=8;break;case P:return t=Kn(12,o,i,f|2),t.elementType=P,t.lanes=h,t;case q:return t=Kn(13,o,i,f),t.elementType=q,t.lanes=h,t;case le:return t=Kn(19,o,i,f),t.elementType=le,t.lanes=h,t;case ue:return Xa(o,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:M=10;break e;case k:M=9;break e;case ee:M=11;break e;case fe:M=14;break e;case ae:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(M,o,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function kr(t,i,o,l){return t=Kn(7,t,l,i),t.lanes=o,t}function Xa(t,i,o,l){return t=Kn(22,t,l,i),t.elementType=ue,t.lanes=o,t.stateNode={isHidden:!1},t}function uu(t,i,o){return t=Kn(6,t,null,i),t.lanes=o,t}function fu(t,i,o){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function j_(t,i,o,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wn(0),this.expirationTimes=Wn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function du(t,i,o,l,f,h,M,D,O){return t=new j_(t,i,o,D,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Kn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tc(h),t}function Y_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Mp(t){if(!t)return tr;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(An(o))return Kd(t,o,i)}return i}function Ep(t,i,o,l,f,h,M,D,O){return t=du(o,l,!0,t,f,h,M,D,O),t.context=Mp(null),o=t.current,l=yn(),f=lr(o),h=Di(l,f),h.callback=i??null,rr(o,h,f),t.current.lanes=f,wn(t,f,l),Pn(t,l),t}function ja(t,i,o,l){var f=i.current,h=yn(),M=lr(f);return o=Mp(o),i.context===null?i.context=o:i.pendingContext=o,i=Di(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=rr(f,i,M),t!==null&&(si(t,f,M,h),Ea(t,f,M)),M}function Ya(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function hu(t,i){wp(t,i),(t=t.alternate)&&wp(t,i)}function q_(){return null}var Tp=typeof reportError=="function"?reportError:function(t){console.error(t)};function pu(t){this._internalRoot=t}qa.prototype.render=pu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ja(t,i,null,null)},qa.prototype.unmount=pu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ur(function(){ja(null,t,null,null)}),i[Ci]=null}};function qa(t){this._internalRoot=t}qa.prototype.unstable_scheduleHydration=function(t){if(t){var i=ld();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Ki.length&&i!==0&&i<Ki[o].priority;o++);Ki.splice(o,0,t),o===0&&fd(t)}};function mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $a(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ap(){}function $_(t,i,o,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var te=Ya(M);h.call(te)}}var M=Ep(i,l,t,0,null,!1,!1,"",Ap);return t._reactRootContainer=M,t[Ci]=M.current,ho(t.nodeType===8?t.parentNode:t),Ur(),M}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var D=l;l=function(){var te=Ya(O);D.call(te)}}var O=du(t,0,!1,null,null,!1,!1,"",Ap);return t._reactRootContainer=O,t[Ci]=O.current,ho(t.nodeType===8?t.parentNode:t),Ur(function(){ja(i,O,o,l)}),O}function Ka(t,i,o,l,f){var h=o._reactRootContainer;if(h){var M=h;if(typeof f=="function"){var D=f;f=function(){var O=Ya(M);D.call(O)}}ja(i,M,t,f)}else M=$_(o,i,t,f,l);return Ya(M)}od=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=qt(i.pendingLanes);o!==0&&(zl(i,o|1),Pn(i,Me()),(vt&6)===0&&(Ms=Me()+500,nr()))}break;case 13:Ur(function(){var l=Li(t,1);if(l!==null){var f=yn();si(l,t,1,f)}}),hu(t,1)}},Bl=function(t){if(t.tag===13){var i=Li(t,134217728);if(i!==null){var o=yn();si(i,t,134217728,o)}hu(t,134217728)}},ad=function(t){if(t.tag===13){var i=lr(t),o=Li(t,i);if(o!==null){var l=yn();si(o,t,i,l)}hu(t,i)}},ld=function(){return At},cd=function(t,i){var o=At;try{return At=t,i()}finally{At=o}},Re=function(t,i,o){switch(i){case"input":if(ct(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var f=ha(l);if(!f)throw Error(n(90));pt(l),ct(l,f)}}}break;case"textarea":ge(t,o);break;case"select":i=o.value,i!=null&&b(t,!!o.multiple,i,!1)}},Nt=ou,Yt=Ur;var K_={usingClientEntryPoint:!1,Events:[go,cs,ha,be,rt,ou]},bo={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z_={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A(t),t===null?null:t.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||q_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{Et=Za.inject(Z_),mt=Za}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K_,bn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(i))throw Error(n(200));return Y_(t,i,null,o)},bn.createRoot=function(t,i){if(!mu(t))throw Error(n(299));var o=!1,l="",f=Tp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=du(t,1,!1,null,null,o,!1,l,f),t[Ci]=i.current,ho(t.nodeType===8?t.parentNode:t),new pu(i)},bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=A(i),t=t===null?null:t.stateNode,t},bn.flushSync=function(t){return Ur(t)},bn.hydrate=function(t,i,o){if(!$a(i))throw Error(n(200));return Ka(null,t,i,!0,o)},bn.hydrateRoot=function(t,i,o){if(!mu(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,f=!1,h="",M=Tp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Ep(i,null,t,1,o??null,f,!1,h,M),t[Ci]=i.current,ho(t),l)for(t=0;t<l.length;t++)o=l[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new qa(i)},bn.render=function(t,i,o){if(!$a(i))throw Error(n(200));return Ka(null,t,i,!1,o)},bn.unmountComponentAtNode=function(t){if(!$a(t))throw Error(n(40));return t._reactRootContainer?(Ur(function(){Ka(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1},bn.unstable_batchedUpdates=ou,bn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!$a(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ka(t,i,o,!1,l)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var Np;function ov(){if(Np)return vu.exports;Np=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),vu.exports=sv(),vu.exports}var Up;function av(){if(Up)return Qa;Up=1;var s=ov();return Qa.createRoot=s.createRoot,Qa.hydrateRoot=s.hydrateRoot,Qa}var lv=av();const cv=Hm(lv);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wf="170",uv=0,Fp=1,fv=2,Vm=1,Gm=2,Bi=3,Er=0,In=1,yi=2,Sr=0,zs=1,Op=2,kp=3,zp=4,dv=5,Yr=100,hv=101,pv=102,mv=103,gv=104,_v=200,vv=201,xv=202,yv=203,tf=204,nf=205,Sv=206,Mv=207,Ev=208,wv=209,Tv=210,Av=211,Cv=212,Rv=213,Pv=214,rf=0,sf=1,of=2,Vs=3,af=4,lf=5,cf=6,uf=7,Xf=0,bv=1,Lv=2,Mr=0,Dv=1,Iv=2,Nv=3,Uv=4,Fv=5,Ov=6,kv=7,Wm=300,Gs=301,Ws=302,ff=303,df=304,Nl=306,hf=1e3,$r=1001,pf=1002,di=1003,zv=1004,Ja=1005,Si=1006,Su=1007,Kr=1008,Wi=1009,Xm=1010,jm=1011,Ho=1012,jf=1013,Qr=1014,Hi=1015,Go=1016,Yf=1017,qf=1018,Xs=1020,Ym=35902,qm=1021,$m=1022,fi=1023,Km=1024,Zm=1025,Bs=1026,js=1027,Qm=1028,$f=1029,Jm=1030,Kf=1031,Zf=1033,El=33776,wl=33777,Tl=33778,Al=33779,mf=35840,gf=35841,_f=35842,vf=35843,xf=36196,yf=37492,Sf=37496,Mf=37808,Ef=37809,wf=37810,Tf=37811,Af=37812,Cf=37813,Rf=37814,Pf=37815,bf=37816,Lf=37817,Df=37818,If=37819,Nf=37820,Uf=37821,Cl=36492,Ff=36494,Of=36495,eg=36283,kf=36284,zf=36285,Bf=36286,Bv=3200,Hv=3201,tg=0,Vv=1,xr="",Hn="srgb",qs="srgb-linear",Ul="linear",Pt="srgb",ws=7680,Bp=519,Gv=512,Wv=513,Xv=514,ng=515,jv=516,Yv=517,qv=518,$v=519,Hp=35044,Vp="300 es",Vi=2e3,Pl=2001;class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,u=a.length;c<u;c++)a[c].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mu=Math.PI/180,Hf=180/Math.PI;function Wo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function Dn(s,e,n){return Math.max(e,Math.min(n,s))}function Kv(s,e){return(s%e+e)%e}function Eu(s,e,n){return(1-n)*s+n*e}function Do(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,n=0){yt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Dn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*a+e.x,this.y=c*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,c,u,d,p,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,d,p,m)}set(e,n,r,a,c,u,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=c,_[5]=p,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],_=r[4],x=r[7],v=r[2],S=r[5],E=r[8],w=a[0],y=a[3],g=a[6],I=a[1],L=a[4],R=a[7],Y=a[2],F=a[5],U=a[8];return c[0]=u*w+d*I+p*Y,c[3]=u*y+d*L+p*F,c[6]=u*g+d*R+p*U,c[1]=m*w+_*I+x*Y,c[4]=m*y+_*L+x*F,c[7]=m*g+_*R+x*U,c[2]=v*w+S*I+E*Y,c[5]=v*y+S*L+E*F,c[8]=v*g+S*R+E*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*u*_-n*d*m-r*c*_+r*d*p+a*c*m-a*u*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],_=e[8],x=_*u-d*m,v=d*p-_*c,S=m*c-u*p,E=n*x+r*v+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=x*w,e[1]=(a*m-_*r)*w,e[2]=(d*r-a*u)*w,e[3]=v*w,e[4]=(_*n-a*p)*w,e[5]=(a*c-d*n)*w,e[6]=S*w,e[7]=(r*p-m*n)*w,e[8]=(u*n-r*c)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,u,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-a*m,a*p,-a*(-m*u+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(wu.makeScale(e,n)),this}rotate(e){return this.premultiply(wu.makeRotation(-e)),this}translate(e,n){return this.premultiply(wu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wu=new ot;function ig(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function bl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zv(){const s=bl("canvas");return s.style.display="block",s}const Gp={};function ko(s){s in Gp||(Gp[s]=!0,console.warn(s))}function Qv(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function Jv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function e0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xt={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Pt&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Pt&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xr?Ul:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Wp=[.64,.33,.3,.6,.15,.06],Xp=[.2126,.7152,.0722],jp=[.3127,.329],Yp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xt.define({[qs]:{primaries:Wp,whitePoint:jp,transfer:Ul,toXYZ:Yp,fromXYZ:qp,luminanceCoefficients:Xp,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:Wp,whitePoint:jp,transfer:Pt,toXYZ:Yp,fromXYZ:qp,luminanceCoefficients:Xp,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}});let Ts;class t0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=bl("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let u=0;u<c.length;u++)c[u]=Gi(c[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Gi(n[r]/255)*255):n[r]=Gi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let n0=0;class rg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?c.push(Tu(a[u].image)):c.push(Tu(a[u]))}else c=Tu(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Tu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?t0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let i0=0;class Nn extends $s{constructor(e=Nn.DEFAULT_IMAGE,n=Nn.DEFAULT_MAPPING,r=$r,a=$r,c=Si,u=Kr,d=fi,p=Wi,m=Nn.DEFAULT_ANISOTROPY,_=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Wo(),this.name="",this.source=new rg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hf:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hf:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Wm;Nn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,r=0,a=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const p=e.elements,m=p[0],_=p[4],x=p[8],v=p[1],S=p[5],E=p[9],w=p[2],y=p[6],g=p[10];if(Math.abs(_-v)<.01&&Math.abs(x-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(x+w)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,R=(S+1)/2,Y=(g+1)/2,F=(_+v)/4,U=(x+w)/4,V=(E+y)/4;return L>R&&L>Y?L<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(L),a=F/r,c=U/r):R>Y?R<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(R),r=F/a,c=V/a):Y<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(Y),r=U/c,a=V/c),this.set(r,a,c,n),this}let I=Math.sqrt((y-E)*(y-E)+(x-w)*(x-w)+(v-_)*(v-_));return Math.abs(I)<.001&&(I=1),this.x=(y-E)/I,this.y=(x-w)/I,this.z=(v-_)/I,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class r0 extends $s{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Nn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new rg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends r0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class sg extends Nn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=di,this.minFilter=di,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class s0 extends Nn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=di,this.minFilter=di,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,u,d){let p=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];const v=c[u+0],S=c[u+1],E=c[u+2],w=c[u+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(d===1){e[n+0]=v,e[n+1]=S,e[n+2]=E,e[n+3]=w;return}if(x!==w||p!==v||m!==S||_!==E){let y=1-d;const g=p*v+m*S+_*E+x*w,I=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const Y=Math.sqrt(L),F=Math.atan2(Y,g*I);y=Math.sin(y*F)/Y,d=Math.sin(d*F)/Y}const R=d*I;if(p=p*y+v*R,m=m*y+S*R,_=_*y+E*R,x=x*y+w*R,y===1-d){const Y=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=Y,m*=Y,_*=Y,x*=Y}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,c,u){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],x=c[u],v=c[u+1],S=c[u+2],E=c[u+3];return e[n]=d*E+_*x+p*S-m*v,e[n+1]=p*E+_*v+m*x-d*S,e[n+2]=m*E+_*S+d*v-p*x,e[n+3]=_*E-d*x-p*v-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),x=d(c/2),v=p(r/2),S=p(a/2),E=p(c/2);switch(u){case"XYZ":this._x=v*_*x+m*S*E,this._y=m*S*x-v*_*E,this._z=m*_*E+v*S*x,this._w=m*_*x-v*S*E;break;case"YXZ":this._x=v*_*x+m*S*E,this._y=m*S*x-v*_*E,this._z=m*_*E-v*S*x,this._w=m*_*x+v*S*E;break;case"ZXY":this._x=v*_*x-m*S*E,this._y=m*S*x+v*_*E,this._z=m*_*E+v*S*x,this._w=m*_*x-v*S*E;break;case"ZYX":this._x=v*_*x-m*S*E,this._y=m*S*x+v*_*E,this._z=m*_*E-v*S*x,this._w=m*_*x+v*S*E;break;case"YZX":this._x=v*_*x+m*S*E,this._y=m*S*x+v*_*E,this._z=m*_*E-v*S*x,this._w=m*_*x-v*S*E;break;case"XZY":this._x=v*_*x-m*S*E,this._y=m*S*x-v*_*E,this._z=m*_*E+v*S*x,this._w=m*_*x+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],u=n[1],d=n[5],p=n[9],m=n[2],_=n[6],x=n[10],v=r+d+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(u-a)*S}else if(r>d&&r>x){const S=2*Math.sqrt(1+r-d-x);this._w=(_-p)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(c+m)/S}else if(d>x){const S=2*Math.sqrt(1+d-r-x);this._w=(c-m)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+x-r-d);this._w=(u-a)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,u=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+u*d+a*m-c*p,this._y=a*_+u*p+c*d-r*m,this._z=c*_+u*m+r*p-a*d,this._w=u*_-r*d-a*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,u=this._w;let d=u*e._w+r*e._x+a*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=a,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),x=Math.sin((1-n)*_)/m,v=Math.sin(n*_)/m;return this._w=u*x+this._w*v,this._x=r*x+this._x*v,this._y=a*x+this._y*v,this._z=c*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($p.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*a-d*r),_=2*(d*n-c*a),x=2*(c*r-u*n);return this.x=n+p*m+u*x-d*_,this.y=r+p*_+d*m-c*x,this.z=a+p*x+c*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,u=n.x,d=n.y,p=n.z;return this.x=a*p-c*d,this.y=c*u-r*p,this.z=r*d-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Dn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Au=new Q,$p=new Xo;class jo{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,oi):oi.fromBufferAttribute(c,u),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),el.copy(r.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}const a=e.children;for(let c=0,u=a.length;c<u;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),tl.subVectors(this.max,Io),As.subVectors(e.a,Io),Cs.subVectors(e.b,Io),Rs.subVectors(e.c,Io),dr.subVectors(Cs,As),hr.subVectors(Rs,Cs),zr.subVectors(As,Rs);let n=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-zr.z,zr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,zr.z,0,-zr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-zr.y,zr.x,0];return!Cu(n,As,Cs,Rs,tl)||(n=[1,0,0,0,1,0,0,0,1],!Cu(n,As,Cs,Rs,tl))?!1:(nl.crossVectors(dr,hr),n=[nl.x,nl.y,nl.z],Cu(n,As,Cs,Rs,tl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],oi=new Q,el=new jo,As=new Q,Cs=new Q,Rs=new Q,dr=new Q,hr=new Q,zr=new Q,Io=new Q,tl=new Q,nl=new Q,Br=new Q;function Cu(s,e,n,r,a){for(let c=0,u=s.length-3;c<=u;c+=3){Br.fromArray(s,c);const d=a.x*Math.abs(Br.x)+a.y*Math.abs(Br.y)+a.z*Math.abs(Br.z),p=e.dot(Br),m=n.dot(Br),_=r.dot(Br);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const o0=new jo,No=new Q,Ru=new Q;class Fl{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):o0.setFromPoints(e).getCenter(r);let a=0;for(let c=0,u=e.length;c<u;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const n=No.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(No,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(Ru)),this.expandByPoint(No.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new Q,Pu=new Q,il=new Q,pr=new Q,bu=new Q,rl=new Q,Lu=new Q;class og{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,n),Fi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Pu.copy(e).add(n).multiplyScalar(.5),il.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(Pu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(il),d=pr.dot(this.direction),p=-pr.dot(il),m=pr.lengthSq(),_=Math.abs(1-u*u);let x,v,S,E;if(_>0)if(x=u*p-d,v=u*d-p,E=c*_,x>=0)if(v>=-E)if(v<=E){const w=1/_;x*=w,v*=w,S=x*(x+u*v+2*d)+v*(u*x+v+2*p)+m}else v=c,x=Math.max(0,-(u*v+d)),S=-x*x+v*(v+2*p)+m;else v=-c,x=Math.max(0,-(u*v+d)),S=-x*x+v*(v+2*p)+m;else v<=-E?(x=Math.max(0,-(-u*c+d)),v=x>0?-c:Math.min(Math.max(-c,-p),c),S=-x*x+v*(v+2*p)+m):v<=E?(x=0,v=Math.min(Math.max(-c,-p),c),S=v*(v+2*p)+m):(x=Math.max(0,-(u*c+d)),v=x>0?c:Math.min(Math.max(-c,-p),c),S=-x*x+v*(v+2*p)+m);else v=u>0?-c:c,x=Math.max(0,-(u*v+d)),S=-x*x+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Pu).addScaledVector(il,v),S}intersectSphere(e,n){Fi.subVectors(e.center,this.origin);const r=Fi.dot(this.direction),a=Fi.dot(Fi)-r*r,c=e.radius*e.radius;if(a>c)return null;const u=Math.sqrt(c-a),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,u,d,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,a=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,a=(e.min.x-v.x)*m),_>=0?(c=(e.min.y-v.y)*_,u=(e.max.y-v.y)*_):(c=(e.max.y-v.y)*_,u=(e.min.y-v.y)*_),r>u||c>a||((c>r||isNaN(r))&&(r=c),(u<a||isNaN(a))&&(a=u),x>=0?(d=(e.min.z-v.z)*x,p=(e.max.z-v.z)*x):(d=(e.max.z-v.z)*x,p=(e.min.z-v.z)*x),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,n,r,a,c){bu.subVectors(n,e),rl.subVectors(r,e),Lu.crossVectors(bu,rl);let u=this.direction.dot(Lu),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;pr.subVectors(this.origin,e);const p=d*this.direction.dot(rl.crossVectors(pr,rl));if(p<0)return null;const m=d*this.direction.dot(bu.cross(pr));if(m<0||p+m>u)return null;const _=-d*pr.dot(Lu);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,a,c,u,d,p,m,_,x,v,S,E,w,y){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,d,p,m,_,x,v,S,E,w,y)}set(e,n,r,a,c,u,d,p,m,_,x,v,S,E,w,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=c,g[5]=u,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=x,g[14]=v,g[3]=S,g[7]=E,g[11]=w,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ps.setFromMatrixColumn(e,0).length(),c=1/Ps.setFromMatrixColumn(e,1).length(),u=1/Ps.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const v=u*_,S=u*x,E=d*_,w=d*x;n[0]=p*_,n[4]=-p*x,n[8]=m,n[1]=S+E*m,n[5]=v-w*m,n[9]=-d*p,n[2]=w-v*m,n[6]=E+S*m,n[10]=u*p}else if(e.order==="YXZ"){const v=p*_,S=p*x,E=m*_,w=m*x;n[0]=v+w*d,n[4]=E*d-S,n[8]=u*m,n[1]=u*x,n[5]=u*_,n[9]=-d,n[2]=S*d-E,n[6]=w+v*d,n[10]=u*p}else if(e.order==="ZXY"){const v=p*_,S=p*x,E=m*_,w=m*x;n[0]=v-w*d,n[4]=-u*x,n[8]=E+S*d,n[1]=S+E*d,n[5]=u*_,n[9]=w-v*d,n[2]=-u*m,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const v=u*_,S=u*x,E=d*_,w=d*x;n[0]=p*_,n[4]=E*m-S,n[8]=v*m+w,n[1]=p*x,n[5]=w*m+v,n[9]=S*m-E,n[2]=-m,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const v=u*p,S=u*m,E=d*p,w=d*m;n[0]=p*_,n[4]=w-v*x,n[8]=E*x+S,n[1]=x,n[5]=u*_,n[9]=-d*_,n[2]=-m*_,n[6]=S*x+E,n[10]=v-w*x}else if(e.order==="XZY"){const v=u*p,S=u*m,E=d*p,w=d*m;n[0]=p*_,n[4]=-x,n[8]=m*_,n[1]=v*x+w,n[5]=u*_,n[9]=S*x-E,n[2]=E*x-S,n[6]=d*_,n[10]=w*x+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a0,e,l0)}lookAt(e,n,r){const a=this.elements;return zn.subVectors(e,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),mr.crossVectors(r,zn),mr.lengthSq()===0&&(Math.abs(r.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),mr.crossVectors(r,zn)),mr.normalize(),sl.crossVectors(zn,mr),a[0]=mr.x,a[4]=sl.x,a[8]=zn.x,a[1]=mr.y,a[5]=sl.y,a[9]=zn.y,a[2]=mr.z,a[6]=sl.z,a[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],_=r[1],x=r[5],v=r[9],S=r[13],E=r[2],w=r[6],y=r[10],g=r[14],I=r[3],L=r[7],R=r[11],Y=r[15],F=a[0],U=a[4],V=a[8],P=a[12],C=a[1],k=a[5],ee=a[9],q=a[13],le=a[2],fe=a[6],ae=a[10],ue=a[14],z=a[3],ce=a[7],se=a[11],N=a[15];return c[0]=u*F+d*C+p*le+m*z,c[4]=u*U+d*k+p*fe+m*ce,c[8]=u*V+d*ee+p*ae+m*se,c[12]=u*P+d*q+p*ue+m*N,c[1]=_*F+x*C+v*le+S*z,c[5]=_*U+x*k+v*fe+S*ce,c[9]=_*V+x*ee+v*ae+S*se,c[13]=_*P+x*q+v*ue+S*N,c[2]=E*F+w*C+y*le+g*z,c[6]=E*U+w*k+y*fe+g*ce,c[10]=E*V+w*ee+y*ae+g*se,c[14]=E*P+w*q+y*ue+g*N,c[3]=I*F+L*C+R*le+Y*z,c[7]=I*U+L*k+R*fe+Y*ce,c[11]=I*V+L*ee+R*ae+Y*se,c[15]=I*P+L*q+R*ue+Y*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],u=e[1],d=e[5],p=e[9],m=e[13],_=e[2],x=e[6],v=e[10],S=e[14],E=e[3],w=e[7],y=e[11],g=e[15];return E*(+c*p*x-a*m*x-c*d*v+r*m*v+a*d*S-r*p*S)+w*(+n*p*S-n*m*v+c*u*v-a*u*S+a*m*_-c*p*_)+y*(+n*m*x-n*d*S-c*u*x+r*u*S+c*d*_-r*m*_)+g*(-a*d*_-n*p*x+n*d*v+a*u*x-r*u*v+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],_=e[8],x=e[9],v=e[10],S=e[11],E=e[12],w=e[13],y=e[14],g=e[15],I=x*y*m-w*v*m+w*p*S-d*y*S-x*p*g+d*v*g,L=E*v*m-_*y*m-E*p*S+u*y*S+_*p*g-u*v*g,R=_*w*m-E*x*m+E*d*S-u*w*S-_*d*g+u*x*g,Y=E*x*p-_*w*p-E*d*v+u*w*v+_*d*y-u*x*y,F=n*I+r*L+a*R+c*Y;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=I*U,e[1]=(w*v*c-x*y*c-w*a*S+r*y*S+x*a*g-r*v*g)*U,e[2]=(d*y*c-w*p*c+w*a*m-r*y*m-d*a*g+r*p*g)*U,e[3]=(x*p*c-d*v*c-x*a*m+r*v*m+d*a*S-r*p*S)*U,e[4]=L*U,e[5]=(_*y*c-E*v*c+E*a*S-n*y*S-_*a*g+n*v*g)*U,e[6]=(E*p*c-u*y*c-E*a*m+n*y*m+u*a*g-n*p*g)*U,e[7]=(u*v*c-_*p*c+_*a*m-n*v*m-u*a*S+n*p*S)*U,e[8]=R*U,e[9]=(E*x*c-_*w*c-E*r*S+n*w*S+_*r*g-n*x*g)*U,e[10]=(u*w*c-E*d*c+E*r*m-n*w*m-u*r*g+n*d*g)*U,e[11]=(_*d*c-u*x*c-_*r*m+n*x*m+u*r*S-n*d*S)*U,e[12]=Y*U,e[13]=(_*w*a-E*x*a+E*r*v-n*w*v-_*r*y+n*x*y)*U,e[14]=(E*d*a-u*w*a-E*r*p+n*w*p+u*r*y-n*d*y)*U,e[15]=(u*x*a-_*d*a+_*r*p-n*x*p-u*r*v+n*d*v)*U,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,u=e.x,d=e.y,p=e.z,m=c*u,_=c*d;return this.set(m*u+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*u,0,m*p-a*d,_*p+a*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,u){return this.set(1,r,c,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,u=n._y,d=n._z,p=n._w,m=c+c,_=u+u,x=d+d,v=c*m,S=c*_,E=c*x,w=u*_,y=u*x,g=d*x,I=p*m,L=p*_,R=p*x,Y=r.x,F=r.y,U=r.z;return a[0]=(1-(w+g))*Y,a[1]=(S+R)*Y,a[2]=(E-L)*Y,a[3]=0,a[4]=(S-R)*F,a[5]=(1-(v+g))*F,a[6]=(y+I)*F,a[7]=0,a[8]=(E+L)*U,a[9]=(y-I)*U,a[10]=(1-(v+w))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=Ps.set(a[0],a[1],a[2]).length();const u=Ps.set(a[4],a[5],a[6]).length(),d=Ps.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],ai.copy(this);const m=1/c,_=1/u,x=1/d;return ai.elements[0]*=m,ai.elements[1]*=m,ai.elements[2]*=m,ai.elements[4]*=_,ai.elements[5]*=_,ai.elements[6]*=_,ai.elements[8]*=x,ai.elements[9]*=x,ai.elements[10]*=x,n.setFromRotationMatrix(ai),r.x=c,r.y=u,r.z=d,this}makePerspective(e,n,r,a,c,u,d=Vi){const p=this.elements,m=2*c/(n-e),_=2*c/(r-a),x=(n+e)/(n-e),v=(r+a)/(r-a);let S,E;if(d===Vi)S=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(d===Pl)S=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,c,u,d=Vi){const p=this.elements,m=1/(n-e),_=1/(r-a),x=1/(u-c),v=(n+e)*m,S=(r+a)*_;let E,w;if(d===Vi)E=(u+c)*x,w=-2*x;else if(d===Pl)E=c*x,w=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=w,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ps=new Q,ai=new Bt,a0=new Q(0,0,0),l0=new Q(1,1,1),mr=new Q,sl=new Q,zn=new Q,Kp=new Bt,Zp=new Xo;class Ei{constructor(e=0,n=0,r=0,a=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],u=a[4],d=a[8],p=a[1],m=a[5],_=a[9],x=a[2],v=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Dn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Dn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zp.setFromEuler(this),this.setFromQuaternion(Zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class ag{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let c0=0;const Qp=new Q,bs=new Xo,Oi=new Bt,ol=new Q,Uo=new Q,u0=new Q,f0=new Xo,Jp=new Q(1,0,0),em=new Q(0,1,0),tm=new Q(0,0,1),nm={type:"added"},d0={type:"removed"},Ls={type:"childadded",child:null},Du={type:"childremoved",child:null};class rn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new Q,n=new Ei,r=new Xo,a=new Q(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ot}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ag,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Jp,e)}rotateY(e){return this.rotateOnAxis(em,e)}rotateZ(e){return this.rotateOnAxis(tm,e)}translateOnAxis(e,n){return Qp.copy(e).applyQuaternion(this.quaternion),this.position.add(Qp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jp,e)}translateY(e){return this.translateOnAxis(em,e)}translateZ(e){return this.translateOnAxis(tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ol.copy(e):ol.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Uo,ol,this.up):Oi.lookAt(ol,Uo,this.up),this.quaternion.setFromRotationMatrix(Oi),a&&(Oi.extractRotation(a.matrixWorld),bs.setFromRotationMatrix(Oi),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nm),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(d0),Du.child=e,this.dispatchEvent(Du),Du.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nm),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,u0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,f0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];c(e.shapes,x)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));a.material=d}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(c(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),_=u(e.images),x=u(e.shapes),v=u(e.skeletons),S=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function u(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}rn.DEFAULT_UP=new Q(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new Q,ki=new Q,Iu=new Q,zi=new Q,Ds=new Q,Is=new Q,im=new Q,Nu=new Q,Uu=new Q,Fu=new Q,Ou=new Gt,ku=new Gt,zu=new Gt;class ui{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),li.subVectors(e,n),a.cross(li);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){li.subVectors(a,n),ki.subVectors(r,n),Iu.subVectors(e,n);const u=li.dot(li),d=li.dot(ki),p=li.dot(Iu),m=ki.dot(ki),_=ki.dot(Iu),x=u*m-d*d;if(x===0)return c.set(0,0,0),null;const v=1/x,S=(m*p-d*_)*v,E=(u*_-d*p)*v;return c.set(1-S-E,E,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,n,r,a,c,u,d,p){return this.getBarycoord(e,n,r,a,zi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,zi.x),p.addScaledVector(u,zi.y),p.addScaledVector(d,zi.z),p)}static getInterpolatedAttribute(e,n,r,a,c,u){return Ou.setScalar(0),ku.setScalar(0),zu.setScalar(0),Ou.fromBufferAttribute(e,n),ku.fromBufferAttribute(e,r),zu.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Ou,c.x),u.addScaledVector(ku,c.y),u.addScaledVector(zu,c.z),u}static isFrontFacing(e,n,r,a){return li.subVectors(r,n),ki.subVectors(e,n),li.cross(ki).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),li.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return ui.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let u,d;Ds.subVectors(a,r),Is.subVectors(c,r),Nu.subVectors(e,r);const p=Ds.dot(Nu),m=Is.dot(Nu);if(p<=0&&m<=0)return n.copy(r);Uu.subVectors(e,a);const _=Ds.dot(Uu),x=Is.dot(Uu);if(_>=0&&x<=_)return n.copy(a);const v=p*x-_*m;if(v<=0&&p>=0&&_<=0)return u=p/(p-_),n.copy(r).addScaledVector(Ds,u);Fu.subVectors(e,c);const S=Ds.dot(Fu),E=Is.dot(Fu);if(E>=0&&S<=E)return n.copy(c);const w=S*m-p*E;if(w<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(r).addScaledVector(Is,d);const y=_*E-S*x;if(y<=0&&x-_>=0&&S-E>=0)return im.subVectors(c,a),d=(x-_)/(x-_+(S-E)),n.copy(a).addScaledVector(im,d);const g=1/(y+w+v);return u=w*g,d=v*g,n.copy(r).addScaledVector(Ds,u).addScaledVector(Is,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},al={h:0,s:0,l:0};function Bu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class dt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=xt.workingColorSpace){return this.r=e,this.g=n,this.b=r,xt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=xt.workingColorSpace){if(e=Kv(e,1),n=Dn(n,0,1),r=Dn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Bu(u,c,e+1/3),this.g=Bu(u,c,e),this.b=Bu(u,c,e-1/3)}return xt.toWorkingColorSpace(this,a),this}setStyle(e,n=Hn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const r=lg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return xt.fromWorkingColorSpace(mn.copy(this),e),Math.round(Dn(mn.r*255,0,255))*65536+Math.round(Dn(mn.g*255,0,255))*256+Math.round(Dn(mn.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=xt.workingColorSpace){xt.fromWorkingColorSpace(mn.copy(this),n);const r=mn.r,a=mn.g,c=mn.b,u=Math.max(r,a,c),d=Math.min(r,a,c);let p,m;const _=(d+u)/2;if(d===u)p=0,m=0;else{const x=u-d;switch(m=_<=.5?x/(u+d):x/(2-u-d),u){case r:p=(a-c)/x+(a<c?6:0);break;case a:p=(c-r)/x+2;break;case c:p=(r-a)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=xt.workingColorSpace){return xt.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Hn){xt.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,a=mn.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(al);const r=Eu(gr.h,al.h,n),a=Eu(gr.s,al.s,n),c=Eu(gr.l,al.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new dt;dt.NAMES=lg;let h0=0;class Ks extends $s{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Wo(),this.name="",this.blending=zs,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tf,this.blendDst=nf,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(r.blending=this.blending),this.side!==Er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==tf&&(r.blendSrc=this.blendSrc),this.blendDst!==nf&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(n){const c=a(e.textures),u=a(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ll extends Ks{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new Q,ll=new yt;class Mi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Hp,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ll.fromBufferAttribute(this,n),ll.applyMatrix3(e),this.setXY(n,ll.x,ll.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix3(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Do(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Ln(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Do(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Do(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Do(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Do(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array),a=Ln(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array),a=Ln(a,this.array),c=Ln(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hp&&(e.usage=this.usage),e}}class cg extends Mi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class ug extends Mi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Ht extends Mi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let p0=0;const Zn=new Bt,Hu=new rn,Ns=new Q,Bn=new jo,Fo=new jo,nn=new Q;class Vn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ig(e)?ug:cg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ot().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,r){return Zn.makeTranslation(e,n,r),this.applyMatrix4(Zn),this}scale(e,n,r){return Zn.makeScale(e,n,r),this.applyMatrix4(Zn),this}lookAt(e){return Hu.lookAt(e),Hu.updateMatrix(),this.applyMatrix4(Hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,c=e.length;a<c;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ht(r,3))}else{for(let r=0,a=n.count;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];Bn.setFromBufferAttribute(c),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Fo.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(Bn.min,Fo.min),Bn.expandByPoint(nn),nn.addVectors(Bn.max,Fo.max),Bn.expandByPoint(nn)):(Bn.expandByPoint(Fo.min),Bn.expandByPoint(Fo.max))}Bn.getCenter(r);let a=0;for(let c=0,u=e.count;c<u;c++)nn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(nn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)nn.fromBufferAttribute(d,m),p&&(Ns.fromBufferAttribute(e,m),nn.add(Ns)),a=Math.max(a,r.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let V=0;V<r.count;V++)d[V]=new Q,p[V]=new Q;const m=new Q,_=new Q,x=new Q,v=new yt,S=new yt,E=new yt,w=new Q,y=new Q;function g(V,P,C){m.fromBufferAttribute(r,V),_.fromBufferAttribute(r,P),x.fromBufferAttribute(r,C),v.fromBufferAttribute(c,V),S.fromBufferAttribute(c,P),E.fromBufferAttribute(c,C),_.sub(m),x.sub(m),S.sub(v),E.sub(v);const k=1/(S.x*E.y-E.x*S.y);isFinite(k)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(k),y.copy(x).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(k),d[V].add(w),d[P].add(w),d[C].add(w),p[V].add(y),p[P].add(y),p[C].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let V=0,P=I.length;V<P;++V){const C=I[V],k=C.start,ee=C.count;for(let q=k,le=k+ee;q<le;q+=3)g(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const L=new Q,R=new Q,Y=new Q,F=new Q;function U(V){Y.fromBufferAttribute(a,V),F.copy(Y);const P=d[V];L.copy(P),L.sub(Y.multiplyScalar(Y.dot(P))).normalize(),R.crossVectors(F,P);const k=R.dot(p[V])<0?-1:1;u.setXYZW(V,L.x,L.y,L.z,k)}for(let V=0,P=I.length;V<P;++V){const C=I[V],k=C.start,ee=C.count;for(let q=k,le=k+ee;q<le;q+=3)U(e.getX(q+0)),U(e.getX(q+1)),U(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const a=new Q,c=new Q,u=new Q,d=new Q,p=new Q,m=new Q,_=new Q,x=new Q;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),w=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(n,E),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,y),_.subVectors(u,c),x.subVectors(a,c),_.cross(x),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,y),d.add(_),p.add(_),m.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,S=n.count;v<S;v+=3)a.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),_.subVectors(u,c),x.subVectors(a,c),_.cross(x),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,x=d.normalized,v=new m.constructor(p.length*_);let S=0,E=0;for(let w=0,y=p.length;w<y;w++){d.isInterleavedBufferAttribute?S=p[w]*d.data.stride+d.offset:S=p[w]*_;for(let g=0;g<_;g++)v[E++]=m[S++]}return new Mi(v,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vn,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,x=m.length;_<x;_++){const v=m[_],S=e(v,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,v=m.length;x<v;x++){const S=m[x];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const c=e.morphAttributes;for(const m in c){const _=[],x=c[m];for(let v=0,S=x.length;v<S;v++)_.push(x[v].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const x=u[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rm=new Bt,Hr=new og,cl=new Fl,sm=new Q,ul=new Q,fl=new Q,dl=new Q,Vu=new Q,hl=new Q,om=new Q,pl=new Q;class It extends rn{constructor(e=new Vn,n=new Ll){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(c&&d){hl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],x=c[p];_!==0&&(Vu.fromBufferAttribute(x,e),u?hl.addScaledVector(Vu,_):hl.addScaledVector(Vu.sub(n),_))}n.add(hl)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cl.copy(r.boundingSphere),cl.applyMatrix4(c),Hr.copy(e.ray).recast(e.near),!(cl.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(cl,sm)===null||Hr.origin.distanceToSquared(sm)>(e.far-e.near)**2))&&(rm.copy(c).invert(),Hr.copy(e.ray).applyMatrix4(rm),!(r.boundingBox!==null&&Hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Hr)))}_computeIntersections(e,n,r){let a;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,v=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,w=v.length;E<w;E++){const y=v[E],g=u[y.materialIndex],I=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let R=I,Y=L;R<Y;R+=3){const F=d.getX(R),U=d.getX(R+1),V=d.getX(R+2);a=ml(this,g,e,r,m,_,x,F,U,V),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let y=E,g=w;y<g;y+=3){const I=d.getX(y),L=d.getX(y+1),R=d.getX(y+2);a=ml(this,u,e,r,m,_,x,I,L,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,w=v.length;E<w;E++){const y=v[E],g=u[y.materialIndex],I=Math.max(y.start,S.start),L=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let R=I,Y=L;R<Y;R+=3){const F=R,U=R+1,V=R+2;a=ml(this,g,e,r,m,_,x,F,U,V),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(p.count,S.start+S.count);for(let y=E,g=w;y<g;y+=3){const I=y,L=y+1,R=y+2;a=ml(this,u,e,r,m,_,x,I,L,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function m0(s,e,n,r,a,c,u,d){let p;if(e.side===In?p=r.intersectTriangle(u,c,a,!0,d):p=r.intersectTriangle(a,c,u,e.side===Er,d),p===null)return null;pl.copy(d),pl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(pl);return m<n.near||m>n.far?null:{distance:m,point:pl.clone(),object:s}}function ml(s,e,n,r,a,c,u,d,p,m){s.getVertexPosition(d,ul),s.getVertexPosition(p,fl),s.getVertexPosition(m,dl);const _=m0(s,e,n,r,ul,fl,dl,om);if(_){const x=new Q;ui.getBarycoord(om,ul,fl,dl,x),a&&(_.uv=ui.getInterpolatedAttribute(a,d,p,m,x,new yt)),c&&(_.uv1=ui.getInterpolatedAttribute(c,d,p,m,x,new yt)),u&&(_.normal=ui.getInterpolatedAttribute(u,d,p,m,x,new Q),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new Q,materialIndex:0};ui.getNormal(ul,fl,dl,v.normal),_.face=v,_.barycoord=x}return _}class Zs extends Vn{constructor(e=1,n=1,r=1,a=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:u};const d=this;a=Math.floor(a),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],_=[],x=[];let v=0,S=0;E("z","y","x",-1,-1,r,n,e,u,c,0),E("z","y","x",1,-1,r,n,-e,u,c,1),E("x","z","y",1,1,e,r,n,a,u,2),E("x","z","y",1,-1,e,r,-n,a,u,3),E("x","y","z",1,-1,e,n,r,a,c,4),E("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(p),this.setAttribute("position",new Ht(m,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(x,2));function E(w,y,g,I,L,R,Y,F,U,V,P){const C=R/U,k=Y/V,ee=R/2,q=Y/2,le=F/2,fe=U+1,ae=V+1;let ue=0,z=0;const ce=new Q;for(let se=0;se<ae;se++){const N=se*k-q;for(let re=0;re<fe;re++){const Ie=re*C-ee;ce[w]=Ie*I,ce[y]=N*L,ce[g]=le,m.push(ce.x,ce.y,ce.z),ce[w]=0,ce[y]=0,ce[g]=F>0?1:-1,_.push(ce.x,ce.y,ce.z),x.push(re/U),x.push(1-se/V),ue+=1}}for(let se=0;se<V;se++)for(let N=0;N<U;N++){const re=v+N+fe*se,Ie=v+N+fe*(se+1),J=v+(N+1)+fe*(se+1),$=v+(N+1)+fe*se;p.push(re,Ie,$),p.push(Ie,J,$),z+=6}d.addGroup(S,z,P),S+=z,v+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Mn(s){const e={};for(let n=0;n<s.length;n++){const r=Ys(s[n]);for(const a in r)e[a]=r[a]}return e}function g0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function fg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const _0={clone:Ys,merge:Mn};var v0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends Ks{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v0,this.fragmentShader=x0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=g0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class dg extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new Q,am=new yt,lm=new yt;class ci extends dg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Hf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hf*2*Math.atan(Math.tan(Mu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,am,lm),n.subVectors(lm,am)}setViewOffset(e,n,r,a,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Mu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*a/p,n-=u.offsetY*r/m,a*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,Fs=1;class y0 extends rn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ci(Us,Fs,e,n);a.layers=this.layers,this.add(a);const c=new ci(Us,Fs,e,n);c.layers=this.layers,this.add(c);const u=new ci(Us,Fs,e,n);u.layers=this.layers,this.add(u);const d=new ci(Us,Fs,e,n);d.layers=this.layers,this.add(d);const p=new ci(Us,Fs,e,n);p.layers=this.layers,this.add(p);const m=new ci(Us,Fs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,u,d,p]=n;for(const m of n)this.remove(m);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Pl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,m,_]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,u),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(x,v,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class hg extends Nn{constructor(e,n,r,a,c,u,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,r,a,c,u,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class S0 extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new hg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Zs(5,5,5),c=new wr({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Sr});c.uniforms.tEquirect.value=n;const u=new It(a,c),d=n.minFilter;return n.minFilter===Kr&&(n.minFilter=Si),new y0(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(c)}}const Gu=new Q,M0=new Q,E0=new ot;class Xr{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Gu.subVectors(r,n).cross(M0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Gu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||E0.getNormalMatrix(e),a=this.coplanarPoint(Gu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new Fl,gl=new Q;class Qf{constructor(e=new Xr,n=new Xr,r=new Xr,a=new Xr,c=new Xr,u=new Xr){this.planes=[e,n,r,a,c,u]}set(e,n,r,a,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Vi){const r=this.planes,a=e.elements,c=a[0],u=a[1],d=a[2],p=a[3],m=a[4],_=a[5],x=a[6],v=a[7],S=a[8],E=a[9],w=a[10],y=a[11],g=a[12],I=a[13],L=a[14],R=a[15];if(r[0].setComponents(p-c,v-m,y-S,R-g).normalize(),r[1].setComponents(p+c,v+m,y+S,R+g).normalize(),r[2].setComponents(p+u,v+_,y+E,R+I).normalize(),r[3].setComponents(p-u,v-_,y-E,R-I).normalize(),r[4].setComponents(p-d,v-x,y-w,R-L).normalize(),n===Vi)r[5].setComponents(p+d,v+x,y+w,R+L).normalize();else if(n===Pl)r[5].setComponents(d,x,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(gl.x=a.normal.x>0?e.max.x:e.min.x,gl.y=a.normal.y>0?e.max.y:e.min.y,gl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pg(){let s=null,e=!1,n=null,r=null;function a(c,u){n(c,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function w0(s){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,x=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,p,m){const _=p.array,x=p.updateRanges;if(s.bindBuffer(m,d),x.length===0)s.bufferSubData(m,0,_);else{x.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<x.length;S++){const E=x[v],w=x[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++v,x[v]=w)}x.length=v+1;for(let S=0,E=x.length;S<E;S++){const w=x[S];s.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:c,update:u}}class Zr extends Vn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,u=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,x=e/d,v=n/p,S=[],E=[],w=[],y=[];for(let g=0;g<_;g++){const I=g*v-u;for(let L=0;L<m;L++){const R=L*x-c;E.push(R,-I,0),w.push(0,0,1),y.push(L/d),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let I=0;I<d;I++){const L=I+m*g,R=I+m*(g+1),Y=I+1+m*(g+1),F=I+1+m*g;S.push(L,R,F),S.push(R,Y,F)}this.setIndex(S),this.setAttribute("position",new Ht(E,3)),this.setAttribute("normal",new Ht(w,3)),this.setAttribute("uv",new Ht(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.width,e.height,e.widthSegments,e.heightSegments)}}var T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A0=`#ifdef USE_ALPHAHASH
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
#endif`,C0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L0=`#ifdef USE_AOMAP
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
#endif`,D0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I0=`#ifdef USE_BATCHING
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
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k0=`#ifdef USE_IRIDESCENCE
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
#endif`,z0=`#ifdef USE_BUMPMAP
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
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,q0=`#define PI 3.141592653589793
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
} // validated`,$0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,K0=`vec3 transformedNormal = objectNormal;
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
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",nx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ix=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ax=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dx=`#ifdef USE_GRADIENTMAP
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
}`,hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,px=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gx=`uniform bool receiveShadow;
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
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,vx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mx=`PhysicalMaterial material;
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
#endif`,Ex=`struct PhysicalMaterial {
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
}`,wx=`
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
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nx=`#if defined( USE_POINTS_UV )
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
#endif`,Ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ox=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`#ifdef USE_MORPHTARGETS
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
#endif`,Hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yx=`#ifdef USE_NORMALMAP
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
#endif`,qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ey=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ry=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ay=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ly=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cy=`float getShadowMask() {
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
}`,uy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fy=`#ifdef USE_SKINNING
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
#endif`,dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hy=`#ifdef USE_SKINNING
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
#endif`,py=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,my=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_y=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vy=`#ifdef USE_TRANSMISSION
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
#endif`,xy=`#ifdef USE_TRANSMISSION
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
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ey=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ty=`uniform sampler2D t2D;
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
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`#include <common>
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
}`,Ly=`#if DEPTH_PACKING == 3200
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
}`,Dy=`#define DISTANCE
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
}`,Iy=`#define DISTANCE
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`uniform float scale;
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
}`,Oy=`uniform vec3 diffuse;
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
}`,ky=`#include <common>
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
}`,zy=`uniform vec3 diffuse;
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
}`,By=`#define LAMBERT
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
}`,Hy=`#define LAMBERT
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
}`,Vy=`#define MATCAP
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
}`,Gy=`#define MATCAP
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
}`,Wy=`#define NORMAL
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
}`,Xy=`#define NORMAL
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
}`,jy=`#define PHONG
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
}`,Yy=`#define PHONG
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
}`,qy=`#define STANDARD
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
}`,$y=`#define STANDARD
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
}`,Ky=`#define TOON
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
}`,Zy=`#define TOON
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
}`,Qy=`uniform float size;
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
}`,Jy=`uniform vec3 diffuse;
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
}`,eS=`#include <common>
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
}`,tS=`uniform vec3 color;
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
}`,nS=`uniform float rotation;
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
}`,iS=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:T0,alphahash_pars_fragment:A0,alphamap_fragment:C0,alphamap_pars_fragment:R0,alphatest_fragment:P0,alphatest_pars_fragment:b0,aomap_fragment:L0,aomap_pars_fragment:D0,batching_pars_vertex:I0,batching_vertex:N0,begin_vertex:U0,beginnormal_vertex:F0,bsdfs:O0,iridescence_fragment:k0,bumpmap_pars_fragment:z0,clipping_planes_fragment:B0,clipping_planes_pars_fragment:H0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:G0,color_fragment:W0,color_pars_fragment:X0,color_pars_vertex:j0,color_vertex:Y0,common:q0,cube_uv_reflection_fragment:$0,defaultnormal_vertex:K0,displacementmap_pars_vertex:Z0,displacementmap_vertex:Q0,emissivemap_fragment:J0,emissivemap_pars_fragment:ex,colorspace_fragment:tx,colorspace_pars_fragment:nx,envmap_fragment:ix,envmap_common_pars_fragment:rx,envmap_pars_fragment:sx,envmap_pars_vertex:ox,envmap_physical_pars_fragment:_x,envmap_vertex:ax,fog_vertex:lx,fog_pars_vertex:cx,fog_fragment:ux,fog_pars_fragment:fx,gradientmap_pars_fragment:dx,lightmap_pars_fragment:hx,lights_lambert_fragment:px,lights_lambert_pars_fragment:mx,lights_pars_begin:gx,lights_toon_fragment:vx,lights_toon_pars_fragment:xx,lights_phong_fragment:yx,lights_phong_pars_fragment:Sx,lights_physical_fragment:Mx,lights_physical_pars_fragment:Ex,lights_fragment_begin:wx,lights_fragment_maps:Tx,lights_fragment_end:Ax,logdepthbuf_fragment:Cx,logdepthbuf_pars_fragment:Rx,logdepthbuf_pars_vertex:Px,logdepthbuf_vertex:bx,map_fragment:Lx,map_pars_fragment:Dx,map_particle_fragment:Ix,map_particle_pars_fragment:Nx,metalnessmap_fragment:Ux,metalnessmap_pars_fragment:Fx,morphinstance_vertex:Ox,morphcolor_vertex:kx,morphnormal_vertex:zx,morphtarget_pars_vertex:Bx,morphtarget_vertex:Hx,normal_fragment_begin:Vx,normal_fragment_maps:Gx,normal_pars_fragment:Wx,normal_pars_vertex:Xx,normal_vertex:jx,normalmap_pars_fragment:Yx,clearcoat_normal_fragment_begin:qx,clearcoat_normal_fragment_maps:$x,clearcoat_pars_fragment:Kx,iridescence_pars_fragment:Zx,opaque_fragment:Qx,packing:Jx,premultiplied_alpha_fragment:ey,project_vertex:ty,dithering_fragment:ny,dithering_pars_fragment:iy,roughnessmap_fragment:ry,roughnessmap_pars_fragment:sy,shadowmap_pars_fragment:oy,shadowmap_pars_vertex:ay,shadowmap_vertex:ly,shadowmask_pars_fragment:cy,skinbase_vertex:uy,skinning_pars_vertex:fy,skinning_vertex:dy,skinnormal_vertex:hy,specularmap_fragment:py,specularmap_pars_fragment:my,tonemapping_fragment:gy,tonemapping_pars_fragment:_y,transmission_fragment:vy,transmission_pars_fragment:xy,uv_pars_fragment:yy,uv_pars_vertex:Sy,uv_vertex:My,worldpos_vertex:Ey,background_vert:wy,background_frag:Ty,backgroundCube_vert:Ay,backgroundCube_frag:Cy,cube_vert:Ry,cube_frag:Py,depth_vert:by,depth_frag:Ly,distanceRGBA_vert:Dy,distanceRGBA_frag:Iy,equirect_vert:Ny,equirect_frag:Uy,linedashed_vert:Fy,linedashed_frag:Oy,meshbasic_vert:ky,meshbasic_frag:zy,meshlambert_vert:By,meshlambert_frag:Hy,meshmatcap_vert:Vy,meshmatcap_frag:Gy,meshnormal_vert:Wy,meshnormal_frag:Xy,meshphong_vert:jy,meshphong_frag:Yy,meshphysical_vert:qy,meshphysical_frag:$y,meshtoon_vert:Ky,meshtoon_frag:Zy,points_vert:Qy,points_frag:Jy,shadow_vert:eS,shadow_frag:tS,sprite_vert:nS,sprite_frag:iS},Pe={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},xi={basic:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new dt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Mn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Mn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new dt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Mn([Pe.points,Pe.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Mn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Mn([Pe.common,Pe.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Mn([Pe.sprite,Pe.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Mn([Pe.common,Pe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Mn([Pe.lights,Pe.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};xi.physical={uniforms:Mn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const _l={r:0,b:0,g:0},Gr=new Ei,rS=new Bt;function sS(s,e,n,r,a,c,u){const d=new dt(0);let p=c===!0?0:1,m,_,x=null,v=0,S=null;function E(I){let L=I.isScene===!0?I.background:null;return L&&L.isTexture&&(L=(I.backgroundBlurriness>0?n:e).get(L)),L}function w(I){let L=!1;const R=E(I);R===null?g(d,p):R&&R.isColor&&(g(R,1),L=!0);const Y=s.xr.getEnvironmentBlendMode();Y==="additive"?r.buffers.color.setClear(0,0,0,1,u):Y==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(I,L){const R=E(L);R&&(R.isCubeTexture||R.mapping===Nl)?(_===void 0&&(_=new It(new Zs(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:Ys(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(Y,F,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Gr.copy(L.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(rS.makeRotationFromEuler(Gr)),_.material.toneMapped=xt.getTransfer(R.colorSpace)!==Pt,(x!==R||v!==R.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,x=R,v=R.version,S=s.toneMapping),_.layers.enableAll(),I.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new It(new Zr(2,2),new wr({name:"BackgroundMaterial",uniforms:Ys(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=xt.getTransfer(R.colorSpace)!==Pt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(x!==R||v!==R.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,x=R,v=R.version,S=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function g(I,L){I.getRGB(_l,fg(s)),r.buffers.color.setClear(_l.r,_l.g,_l.b,L,u)}return{getClearColor:function(){return d},setClearColor:function(I,L=1){d.set(I),p=L,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,g(d,p)},render:w,addToRenderList:y}}function oS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=v(null);let c=a,u=!1;function d(C,k,ee,q,le){let fe=!1;const ae=x(q,ee,k);c!==ae&&(c=ae,m(c.object)),fe=S(C,q,ee,le),fe&&E(C,q,ee,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,R(C,k,ee,q),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function _(C){return s.deleteVertexArray(C)}function x(C,k,ee){const q=ee.wireframe===!0;let le=r[C.id];le===void 0&&(le={},r[C.id]=le);let fe=le[k.id];fe===void 0&&(fe={},le[k.id]=fe);let ae=fe[q];return ae===void 0&&(ae=v(p()),fe[q]=ae),ae}function v(C){const k=[],ee=[],q=[];for(let le=0;le<n;le++)k[le]=0,ee[le]=0,q[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ee,attributeDivisors:q,object:C,attributes:{},index:null}}function S(C,k,ee,q){const le=c.attributes,fe=k.attributes;let ae=0;const ue=ee.getAttributes();for(const z in ue)if(ue[z].location>=0){const se=le[z];let N=fe[z];if(N===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),se===void 0||se.attribute!==N||N&&se.data!==N.data)return!0;ae++}return c.attributesNum!==ae||c.index!==q}function E(C,k,ee,q){const le={},fe=k.attributes;let ae=0;const ue=ee.getAttributes();for(const z in ue)if(ue[z].location>=0){let se=fe[z];se===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const N={};N.attribute=se,se&&se.data&&(N.data=se.data),le[z]=N,ae++}c.attributes=le,c.attributesNum=ae,c.index=q}function w(){const C=c.newAttributes;for(let k=0,ee=C.length;k<ee;k++)C[k]=0}function y(C){g(C,0)}function g(C,k){const ee=c.newAttributes,q=c.enabledAttributes,le=c.attributeDivisors;ee[C]=1,q[C]===0&&(s.enableVertexAttribArray(C),q[C]=1),le[C]!==k&&(s.vertexAttribDivisor(C,k),le[C]=k)}function I(){const C=c.newAttributes,k=c.enabledAttributes;for(let ee=0,q=k.length;ee<q;ee++)k[ee]!==C[ee]&&(s.disableVertexAttribArray(ee),k[ee]=0)}function L(C,k,ee,q,le,fe,ae){ae===!0?s.vertexAttribIPointer(C,k,ee,le,fe):s.vertexAttribPointer(C,k,ee,q,le,fe)}function R(C,k,ee,q){w();const le=q.attributes,fe=ee.getAttributes(),ae=k.defaultAttributeValues;for(const ue in fe){const z=fe[ue];if(z.location>=0){let ce=le[ue];if(ce===void 0&&(ue==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),ue==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),ce!==void 0){const se=ce.normalized,N=ce.itemSize,re=e.get(ce);if(re===void 0)continue;const Ie=re.buffer,J=re.type,$=re.bytesPerElement,de=J===s.INT||J===s.UNSIGNED_INT||ce.gpuType===jf;if(ce.isInterleavedBufferAttribute){const he=ce.data,we=he.stride,Le=ce.offset;if(he.isInstancedInterleavedBuffer){for(let Ye=0;Ye<z.locationSize;Ye++)g(z.location+Ye,he.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ye=0;Ye<z.locationSize;Ye++)y(z.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Ye=0;Ye<z.locationSize;Ye++)L(z.location+Ye,N/z.locationSize,J,se,we*$,(Le+N/z.locationSize*Ye)*$,de)}else{if(ce.isInstancedBufferAttribute){for(let he=0;he<z.locationSize;he++)g(z.location+he,ce.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let he=0;he<z.locationSize;he++)y(z.location+he);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let he=0;he<z.locationSize;he++)L(z.location+he,N/z.locationSize,J,se,N*$,N/z.locationSize*he*$,de)}}else if(ae!==void 0){const se=ae[ue];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(z.location,se);break;case 3:s.vertexAttrib3fv(z.location,se);break;case 4:s.vertexAttrib4fv(z.location,se);break;default:s.vertexAttrib1fv(z.location,se)}}}}I()}function Y(){V();for(const C in r){const k=r[C];for(const ee in k){const q=k[ee];for(const le in q)_(q[le].object),delete q[le];delete k[ee]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const k=r[C.id];for(const ee in k){const q=k[ee];for(const le in q)_(q[le].object),delete q[le];delete k[ee]}delete r[C.id]}function U(C){for(const k in r){const ee=r[k];if(ee[C.id]===void 0)continue;const q=ee[C.id];for(const le in q)_(q[le].object),delete q[le];delete ee[C.id]}}function V(){P(),u=!0,c!==a&&(c=a,m(c.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:V,resetDefaultState:P,dispose:Y,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:y,disableUnusedAttributes:I}}function aS(s,e,n){let r;function a(m){r=m}function c(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function u(m,_,x){x!==0&&(s.drawArraysInstanced(r,m,_,x),n.update(_,r,x))}function d(m,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,x);let S=0;for(let E=0;E<x;E++)S+=_[E];n.update(S,r,1)}function p(m,_,x,v){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)u(m[E],_[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,v,0,x);let E=0;for(let w=0;w<x;w++)E+=_[w]*v[w];n.update(E,r,1)}}this.setMode=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function lS(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(U){return!(U!==fi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const V=U===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Wi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Hi&&!V)}function p(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),Y=E>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:Y,maxSamples:F}}function cS(s){const e=this;let n=null,r=0,a=!1,c=!1;const u=new Xr,d=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||r!==0||a;return a=v,r=x.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,v){n=_(x,v,0)},this.setState=function(x,v,S){const E=x.clippingPlanes,w=x.clipIntersection,y=x.clipShadows,g=s.get(x);if(!a||E===null||E.length===0||c&&!y)c?_(null):m();else{const I=c?0:r,L=I*4;let R=g.clippingState||null;p.value=R,R=_(E,v,L,S);for(let Y=0;Y!==L;++Y)R[Y]=n[Y];g.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,v,S,E){const w=x!==null?x.length:0;let y=null;if(w!==0){if(y=p.value,E!==!0||y===null){const g=S+w*4,I=v.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,R=S;L!==w;++L,R+=4)u.copy(x[L]).applyMatrix4(I,d),u.normal.toArray(y,R),y[R+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function uS(s){let e=new WeakMap;function n(u,d){return d===ff?u.mapping=Gs:d===df&&(u.mapping=Ws),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===ff||d===df)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new S0(p.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",a),n(m.texture,u.mapping)}else return null}}return u}function a(u){const d=u.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class Jf extends dg{constructor(e=-1,n=1,r=1,a=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ks=4,cm=[.125,.215,.35,.446,.526,.582],qr=20,Wu=new Jf,um=new dt;let Xu=null,ju=0,Yu=0,qu=!1;const jr=(1+Math.sqrt(5))/2,Os=1/jr,fm=[new Q(-jr,Os,0),new Q(jr,Os,0),new Q(-Os,0,jr),new Q(Os,0,jr),new Q(0,jr,-Os),new Q(0,jr,Os),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Xu=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xu,ju,Yu),this._renderer.xr.enabled=qu,e.scissorTest=!1,vl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xu=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Go,format:fi,colorSpace:qs,depthBuffer:!1},a=hm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fS(c)),this._blurMaterial=dS(c,e,n)}return a}_compileMaterial(e){const n=new It(this._lodPlanes[0],e);this._renderer.compile(n,Wu)}_sceneToCubeUV(e,n,r,a){const d=new ci(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,v=_.toneMapping;_.getClearColor(um),_.toneMapping=Mr,_.autoClear=!1;const S=new Ll({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),E=new It(new Zs,S);let w=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,w=!0):(S.color.copy(um),w=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):I===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const L=this._cubeSize;vl(a,I*L,g>2?L:0,L,L),_.setRenderTarget(a),w&&_.render(E,d),_.render(e,d)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=v,_.autoClear=x,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Gs||e.mapping===Ws;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const c=a?this._cubemapMaterial:this._equirectMaterial,u=new It(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;vl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,Wu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=fm[(a-c-1)%fm.length];this._blur(e,c-1,c,u,d)}n.autoClear=r}_blur(e,n,r,a,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",c),this._halfBlur(u,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new It(this._lodPlanes[a],m),v=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*qr-1),w=c/E,y=isFinite(c)?1+Math.floor(_*w):qr;y>qr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${qr}`);const g=[];let I=0;for(let U=0;U<qr;++U){const V=U/w,P=Math.exp(-V*V/2);g.push(P),U===0?I+=P:U<y&&(I+=2*P)}for(let U=0;U<g.length;U++)g[U]=g[U]/I;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=g,v.latitudinal.value=u==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-r;const R=this._sizeLods[a],Y=3*R*(a>L-ks?a-L+ks:0),F=4*(this._cubeSize-R);vl(n,Y,F,3*R,2*R),p.setRenderTarget(n),p.render(x,Wu)}}function fS(s){const e=[],n=[],r=[];let a=s;const c=s-ks+1+cm.length;for(let u=0;u<c;u++){const d=Math.pow(2,a);n.push(d);let p=1/d;u>s-ks?p=cm[u-s+ks-1]:u===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,x=1+m,v=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,E=6,w=3,y=2,g=1,I=new Float32Array(w*E*S),L=new Float32Array(y*E*S),R=new Float32Array(g*E*S);for(let F=0;F<S;F++){const U=F%3*2/3-1,V=F>2?0:-1,P=[U,V,0,U+2/3,V,0,U+2/3,V+1,0,U,V,0,U+2/3,V+1,0,U,V+1,0];I.set(P,w*E*F),L.set(v,y*E*F);const C=[F,F,F,F,F,F];R.set(C,g*E*F)}const Y=new Vn;Y.setAttribute("position",new Mi(I,w)),Y.setAttribute("uv",new Mi(L,y)),Y.setAttribute("faceIndex",new Mi(R,g)),e.push(Y),a>ks&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function hm(s,e,n){const r=new Jr(s,e,n);return r.texture.mapping=Nl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function dS(s,e,n){const r=new Float32Array(qr),a=new Q(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ed(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function pm(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ed(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function mm(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function ed(){return`

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
	`}function hS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===ff||p===df,_=p===Gs||p===Ws;if(m||_){let x=e.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return n===null&&(n=new dm(s)),x=m?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new dm(s)),x=m?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function pS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&ko("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function mS(s,e,n,r){const a={},c=new WeakMap;function u(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);for(const E in v.morphAttributes){const w=v.morphAttributes[E];for(let y=0,g=w.length;y<g;y++)e.remove(w[y])}v.removeEventListener("dispose",u),delete a[v.id];const S=c.get(v);S&&(e.remove(S),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function d(x,v){return a[v.id]===!0||(v.addEventListener("dispose",u),a[v.id]=!0,n.memory.geometries++),v}function p(x){const v=x.attributes;for(const E in v)e.update(v[E],s.ARRAY_BUFFER);const S=x.morphAttributes;for(const E in S){const w=S[E];for(let y=0,g=w.length;y<g;y++)e.update(w[y],s.ARRAY_BUFFER)}}function m(x){const v=[],S=x.index,E=x.attributes.position;let w=0;if(S!==null){const I=S.array;w=S.version;for(let L=0,R=I.length;L<R;L+=3){const Y=I[L+0],F=I[L+1],U=I[L+2];v.push(Y,F,F,U,U,Y)}}else if(E!==void 0){const I=E.array;w=E.version;for(let L=0,R=I.length/3-1;L<R;L+=3){const Y=L+0,F=L+1,U=L+2;v.push(Y,F,F,U,U,Y)}}else return;const y=new(ig(v)?ug:cg)(v,1);y.version=w;const g=c.get(x);g&&e.remove(g),c.set(x,y)}function _(x){const v=c.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&m(x)}else m(x);return c.get(x)}return{get:d,update:p,getWireframeAttribute:_}}function gS(s,e,n){let r;function a(v){r=v}let c,u;function d(v){c=v.type,u=v.bytesPerElement}function p(v,S){s.drawElements(r,S,c,v*u),n.update(S,r,1)}function m(v,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,v*u,E),n.update(S,r,E))}function _(v,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,v,0,E);let y=0;for(let g=0;g<E;g++)y+=S[g];n.update(y,r,1)}function x(v,S,E,w){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<v.length;g++)m(v[g]/u,S[g],w[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,v,0,w,0,E);let g=0;for(let I=0;I<E;I++)g+=S[I]*w[I];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function _S(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(c/3);break;case s.LINES:n.lines+=d*(c/2);break;case s.LINE_STRIP:n.lines+=d*(c-1);break;case s.LINE_LOOP:n.lines+=d*c;break;case s.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function vS(s,e,n){const r=new WeakMap,a=new Gt;function c(u,d,p){const m=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let C=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),w===!0&&(R=2),y===!0&&(R=3);let Y=d.attributes.position.count*R,F=1;Y>e.maxTextureSize&&(F=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const U=new Float32Array(Y*F*4*x),V=new sg(U,Y,F,x);V.type=Hi,V.needsUpdate=!0;const P=R*4;for(let k=0;k<x;k++){const ee=g[k],q=I[k],le=L[k],fe=Y*F*4*k;for(let ae=0;ae<ee.count;ae++){const ue=ae*P;E===!0&&(a.fromBufferAttribute(ee,ae),U[fe+ue+0]=a.x,U[fe+ue+1]=a.y,U[fe+ue+2]=a.z,U[fe+ue+3]=0),w===!0&&(a.fromBufferAttribute(q,ae),U[fe+ue+4]=a.x,U[fe+ue+5]=a.y,U[fe+ue+6]=a.z,U[fe+ue+7]=0),y===!0&&(a.fromBufferAttribute(le,ae),U[fe+ue+8]=a.x,U[fe+ue+9]=a.y,U[fe+ue+10]=a.z,U[fe+ue+11]=le.itemSize===4?a.w:1)}}v={count:x,texture:V,size:new yt(Y,F)},r.set(d,v),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const w=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",w),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function xS(s,e,n,r){let a=new WeakMap;function c(p){const m=r.render.frame,_=p.geometry,x=e.get(p,_);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;a.get(v)!==m&&(v.update(),a.set(v,m))}return x}function u(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}class mg extends Nn{constructor(e,n,r,a,c,u,d,p,m,_=Bs){if(_!==Bs&&_!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Bs&&(r=Qr),r===void 0&&_===js&&(r=Xs),super(null,a,c,u,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:di,this.minFilter=p!==void 0?p:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const gg=new Nn,gm=new mg(1,1),_g=new sg,vg=new s0,xg=new hg,_m=[],vm=[],xm=new Float32Array(16),ym=new Float32Array(9),Sm=new Float32Array(4);function Qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=_m[a];if(c===void 0&&(c=new Float32Array(a),_m[a]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(c,d)}return c}function Zt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Ol(s,e){let n=vm[e];n===void 0&&(n=new Int32Array(e),vm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function yS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function SS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2fv(this.addr,e),Qt(n,e)}}function MS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;s.uniform3fv(this.addr,e),Qt(n,e)}}function ES(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4fv(this.addr,e),Qt(n,e)}}function wS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Sm.set(r),s.uniformMatrix2fv(this.addr,!1,Sm),Qt(n,r)}}function TS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;ym.set(r),s.uniformMatrix3fv(this.addr,!1,ym),Qt(n,r)}}function AS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;xm.set(r),s.uniformMatrix4fv(this.addr,!1,xm),Qt(n,r)}}function CS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function RS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2iv(this.addr,e),Qt(n,e)}}function PS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3iv(this.addr,e),Qt(n,e)}}function bS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4iv(this.addr,e),Qt(n,e)}}function LS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function DS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2uiv(this.addr,e),Qt(n,e)}}function IS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3uiv(this.addr,e),Qt(n,e)}}function NS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4uiv(this.addr,e),Qt(n,e)}}function US(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(gm.compareFunction=ng,c=gm):c=gg,n.setTexture2D(e||c,a)}function FS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||vg,a)}function OS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||xg,a)}function kS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||_g,a)}function zS(s){switch(s){case 5126:return yS;case 35664:return SS;case 35665:return MS;case 35666:return ES;case 35674:return wS;case 35675:return TS;case 35676:return AS;case 5124:case 35670:return CS;case 35667:case 35671:return RS;case 35668:case 35672:return PS;case 35669:case 35673:return bS;case 5125:return LS;case 36294:return DS;case 36295:return IS;case 36296:return NS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return FS;case 35680:case 36300:case 36308:case 36293:return OS;case 36289:case 36303:case 36311:case 36292:return kS}}function BS(s,e){s.uniform1fv(this.addr,e)}function HS(s,e){const n=Qs(e,this.size,2);s.uniform2fv(this.addr,n)}function VS(s,e){const n=Qs(e,this.size,3);s.uniform3fv(this.addr,n)}function GS(s,e){const n=Qs(e,this.size,4);s.uniform4fv(this.addr,n)}function WS(s,e){const n=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function XS(s,e){const n=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function jS(s,e){const n=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function YS(s,e){s.uniform1iv(this.addr,e)}function qS(s,e){s.uniform2iv(this.addr,e)}function $S(s,e){s.uniform3iv(this.addr,e)}function KS(s,e){s.uniform4iv(this.addr,e)}function ZS(s,e){s.uniform1uiv(this.addr,e)}function QS(s,e){s.uniform2uiv(this.addr,e)}function JS(s,e){s.uniform3uiv(this.addr,e)}function eM(s,e){s.uniform4uiv(this.addr,e)}function tM(s,e,n){const r=this.cache,a=e.length,c=Ol(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||gg,c[u])}function nM(s,e,n){const r=this.cache,a=e.length,c=Ol(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||vg,c[u])}function iM(s,e,n){const r=this.cache,a=e.length,c=Ol(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||xg,c[u])}function rM(s,e,n){const r=this.cache,a=e.length,c=Ol(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||_g,c[u])}function sM(s){switch(s){case 5126:return BS;case 35664:return HS;case 35665:return VS;case 35666:return GS;case 35674:return WS;case 35675:return XS;case 35676:return jS;case 5124:case 35670:return YS;case 35667:case 35671:return qS;case 35668:case 35672:return $S;case 35669:case 35673:return KS;case 5125:return ZS;case 36294:return QS;case 36295:return JS;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return tM;case 35679:case 36299:case 36307:return nM;case 35680:case 36300:case 36308:case 36293:return iM;case 36289:case 36303:case 36311:case 36292:return rM}}class oM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=zS(n.type)}}class aM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sM(n.type)}}class lM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,u=a.length;c!==u;++c){const d=a[c];d.setValue(e,n[d.id],r)}}}const $u=/(\w+)(\])?(\[|\.)?/g;function Mm(s,e){s.seq.push(e),s.map[e.id]=e}function cM(s,e,n){const r=s.name,a=r.length;for($u.lastIndex=0;;){const c=$u.exec(r),u=$u.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===a){Mm(n,m===void 0?new oM(d,s,e):new aM(d,s,e));break}else{let x=n.map[d];x===void 0&&(x=new lM(d),Mm(n,x)),n=x}}}class Rl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),u=e.getUniformLocation(n,c.name);cM(c,u,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,u=n.length;c!==u;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function Em(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const uM=37297;let fM=0;function dM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=a;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const wm=new ot;function hM(s){xt._getMatrix(wm,xt.workingColorSpace,s);const e=`mat3( ${wm.elements.map(n=>n.toFixed(4))} )`;switch(xt.getTransfer(s)){case Ul:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Tm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+dM(s.getShaderSource(e),u)}else return a}function pM(s,e){const n=hM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function mM(s,e){let n;switch(e){case Dv:n="Linear";break;case Iv:n="Reinhard";break;case Nv:n="Cineon";break;case Uv:n="ACESFilmic";break;case Ov:n="AgX";break;case kv:n="Neutral";break;case Fv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const xl=new Q;function gM(){xt.getLuminanceCoefficients(xl);const s=xl.x.toFixed(4),e=xl.y.toFixed(4),n=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _M(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function vM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function xM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),u=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function zo(s){return s!==""}function Am(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vf(s){return s.replace(yM,MM)}const SM=new Map;function MM(s,e){let n=at[e];if(n===void 0){const r=SM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Vf(n)}const EM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rm(s){return s.replace(EM,wM)}function wM(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function Pm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function TM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function AM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function RM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xf:e="ENVMAP_BLENDING_MULTIPLY";break;case bv:e="ENVMAP_BLENDING_MIX";break;case Lv:e="ENVMAP_BLENDING_ADD";break}return e}function PM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function bM(s,e,n,r){const a=s.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=TM(n),m=AM(n),_=CM(n),x=RM(n),v=PM(n),S=_M(n),E=vM(c),w=a.createProgram();let y,g,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(zo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(zo).join(`
`),g.length>0&&(g+=`
`)):(y=[Pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),g=[Pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?at.tonemapping_pars_fragment:"",n.toneMapping!==Mr?mM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,pM("linearToOutputTexel",n.outputColorSpace),gM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zo).join(`
`)),u=Vf(u),u=Am(u,n),u=Cm(u,n),d=Vf(d),d=Am(d,n),d=Cm(d,n),u=Rm(u),d=Rm(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Vp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=I+y+u,R=I+g+d,Y=Em(a,a.VERTEX_SHADER,L),F=Em(a,a.FRAGMENT_SHADER,R);a.attachShader(w,Y),a.attachShader(w,F),n.index0AttributeName!==void 0?a.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function U(k){if(s.debug.checkShaderErrors){const ee=a.getProgramInfoLog(w).trim(),q=a.getShaderInfoLog(Y).trim(),le=a.getShaderInfoLog(F).trim();let fe=!0,ae=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(fe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,Y,F);else{const ue=Tm(a,Y,"vertex"),z=Tm(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ee+`
`+ue+`
`+z)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(q===""||le==="")&&(ae=!1);ae&&(k.diagnostics={runnable:fe,programLog:ee,vertexShader:{log:q,prefix:y},fragmentShader:{log:le,prefix:g}})}a.deleteShader(Y),a.deleteShader(F),V=new Rl(a,w),P=xM(a,w)}let V;this.getUniforms=function(){return V===void 0&&U(this),V};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(w,uM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=Y,this.fragmentShader=F,this}let LM=0;class DM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new IM(e),n.set(e,r)),r}}class IM{constructor(e){this.id=LM++,this.code=e,this.usedTimes=0}}function NM(s,e,n,r,a,c,u){const d=new ag,p=new DM,m=new Set,_=[],x=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,C,k,ee,q){const le=ee.fog,fe=q.geometry,ae=P.isMeshStandardMaterial?ee.environment:null,ue=(P.isMeshStandardMaterial?n:e).get(P.envMap||ae),z=ue&&ue.mapping===Nl?ue.image.height:null,ce=E[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const se=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,N=se!==void 0?se.length:0;let re=0;fe.morphAttributes.position!==void 0&&(re=1),fe.morphAttributes.normal!==void 0&&(re=2),fe.morphAttributes.color!==void 0&&(re=3);let Ie,J,$,de;if(ce){const _t=xi[ce];Ie=_t.vertexShader,J=_t.fragmentShader}else Ie=P.vertexShader,J=P.fragmentShader,p.update(P),$=p.getVertexShaderID(P),de=p.getFragmentShaderID(P);const he=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Le=q.isInstancedMesh===!0,Ye=q.isBatchedMesh===!0,Ct=!!P.map,pt=!!P.matcap,Lt=!!ue,X=!!P.aoMap,gn=!!P.lightMap,ht=!!P.bumpMap,ct=!!P.normalMap,$e=!!P.displacementMap,Tt=!!P.emissiveMap,qe=!!P.metalnessMap,b=!!P.roughnessMap,T=P.anisotropy>0,Z=P.clearcoat>0,ge=P.dispersion>0,ve=P.iridescence>0,pe=P.sheen>0,Ve=P.transmission>0,Ce=T&&!!P.anisotropyMap,Ue=Z&&!!P.clearcoatMap,lt=Z&&!!P.clearcoatNormalMap,Se=Z&&!!P.clearcoatRoughnessMap,Oe=ve&&!!P.iridescenceMap,Qe=ve&&!!P.iridescenceThicknessMap,Je=pe&&!!P.sheenColorMap,ke=pe&&!!P.sheenRoughnessMap,ut=!!P.specularMap,it=!!P.specularColorMap,wt=!!P.specularIntensityMap,H=Ve&&!!P.transmissionMap,Re=Ve&&!!P.thicknessMap,oe=!!P.gradientMap,me=!!P.alphaMap,De=P.alphaTest>0,be=!!P.alphaHash,rt=!!P.extensions;let Nt=Mr;P.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Nt=s.toneMapping);const Yt={shaderID:ce,shaderType:P.type,shaderName:P.name,vertexShader:Ie,fragmentShader:J,defines:P.defines,customVertexShaderID:$,customFragmentShaderID:de,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ye,batchingColor:Ye&&q._colorsTexture!==null,instancing:Le,instancingColor:Le&&q.instanceColor!==null,instancingMorph:Le&&q.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:qs,alphaToCoverage:!!P.alphaToCoverage,map:Ct,matcap:pt,envMap:Lt,envMapMode:Lt&&ue.mapping,envMapCubeUVHeight:z,aoMap:X,lightMap:gn,bumpMap:ht,normalMap:ct,displacementMap:v&&$e,emissiveMap:Tt,normalMapObjectSpace:ct&&P.normalMapType===Vv,normalMapTangentSpace:ct&&P.normalMapType===tg,metalnessMap:qe,roughnessMap:b,anisotropy:T,anisotropyMap:Ce,clearcoat:Z,clearcoatMap:Ue,clearcoatNormalMap:lt,clearcoatRoughnessMap:Se,dispersion:ge,iridescence:ve,iridescenceMap:Oe,iridescenceThicknessMap:Qe,sheen:pe,sheenColorMap:Je,sheenRoughnessMap:ke,specularMap:ut,specularColorMap:it,specularIntensityMap:wt,transmission:Ve,transmissionMap:H,thicknessMap:Re,gradientMap:oe,opaque:P.transparent===!1&&P.blending===zs&&P.alphaToCoverage===!1,alphaMap:me,alphaTest:De,alphaHash:be,combine:P.combine,mapUv:Ct&&w(P.map.channel),aoMapUv:X&&w(P.aoMap.channel),lightMapUv:gn&&w(P.lightMap.channel),bumpMapUv:ht&&w(P.bumpMap.channel),normalMapUv:ct&&w(P.normalMap.channel),displacementMapUv:$e&&w(P.displacementMap.channel),emissiveMapUv:Tt&&w(P.emissiveMap.channel),metalnessMapUv:qe&&w(P.metalnessMap.channel),roughnessMapUv:b&&w(P.roughnessMap.channel),anisotropyMapUv:Ce&&w(P.anisotropyMap.channel),clearcoatMapUv:Ue&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:lt&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:ke&&w(P.sheenRoughnessMap.channel),specularMapUv:ut&&w(P.specularMap.channel),specularColorMapUv:it&&w(P.specularColorMap.channel),specularIntensityMapUv:wt&&w(P.specularIntensityMap.channel),transmissionMapUv:H&&w(P.transmissionMap.channel),thicknessMapUv:Re&&w(P.thicknessMap.channel),alphaMapUv:me&&w(P.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(ct||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!fe.attributes.uv&&(Ct||me),fog:!!le,useFog:P.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:we,skinning:q.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Ct&&P.map.isVideoTexture===!0&&xt.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:Tt&&P.emissiveMap.isVideoTexture===!0&&xt.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===yi,flipSided:P.side===In,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:rt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&P.extensions.multiDraw===!0||Ye)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Yt.vertexUv1s=m.has(1),Yt.vertexUv2s=m.has(2),Yt.vertexUv3s=m.has(3),m.clear(),Yt}function g(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)C.push(k),C.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(I(C,P),L(C,P),C.push(s.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function I(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function L(P,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),P.push(d.mask)}function R(P){const C=E[P.type];let k;if(C){const ee=xi[C];k=_0.clone(ee.uniforms)}else k=P.uniforms;return k}function Y(P,C){let k;for(let ee=0,q=_.length;ee<q;ee++){const le=_[ee];if(le.cacheKey===C){k=le,++k.usedTimes;break}}return k===void 0&&(k=new bM(s,C,P,c),_.push(k)),k}function F(P){if(--P.usedTimes===0){const C=_.indexOf(P);_[C]=_[_.length-1],_.pop(),P.destroy()}}function U(P){p.remove(P)}function V(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:R,acquireProgram:Y,releaseProgram:F,releaseShaderCache:U,programs:_,dispose:V}}function UM(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function a(u,d,p){s.get(u)[d]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function FM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function bm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Lm(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function u(x,v,S,E,w,y){let g=s[e];return g===void 0?(g={id:x.id,object:x,geometry:v,material:S,groupOrder:E,renderOrder:x.renderOrder,z:w,group:y},s[e]=g):(g.id=x.id,g.object=x,g.geometry=v,g.material=S,g.groupOrder=E,g.renderOrder=x.renderOrder,g.z=w,g.group=y),e++,g}function d(x,v,S,E,w,y){const g=u(x,v,S,E,w,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(x,v,S,E,w,y){const g=u(x,v,S,E,w,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(x,v){n.length>1&&n.sort(x||FM),r.length>1&&r.sort(v||bm),a.length>1&&a.sort(v||bm)}function _(){for(let x=e,v=s.length;x<v;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:d,unshift:p,finish:_,sort:m}}function OM(){let s=new WeakMap;function e(r,a){const c=s.get(r);let u;return c===void 0?(u=new Lm,s.set(r,[u])):a>=c.length?(u=new Lm,c.push(u)):u=c[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function kM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new dt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":n={color:new dt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=n,n}}}function zM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let BM=0;function HM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function VM(s){const e=new kM,n=zM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const a=new Q,c=new Bt,u=new Bt;function d(m){let _=0,x=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,E=0,w=0,y=0,g=0,I=0,L=0,R=0,Y=0,F=0,U=0;m.sort(HM);for(let P=0,C=m.length;P<C;P++){const k=m[P],ee=k.color,q=k.intensity,le=k.distance,fe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=ee.r*q,x+=ee.g*q,v+=ee.b*q;else if(k.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(k.sh.coefficients[ae],q);U++}else if(k.isDirectionalLight){const ae=e.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ue=k.shadow,z=n.get(k);z.shadowIntensity=ue.intensity,z.shadowBias=ue.bias,z.shadowNormalBias=ue.normalBias,z.shadowRadius=ue.radius,z.shadowMapSize=ue.mapSize,r.directionalShadow[S]=z,r.directionalShadowMap[S]=fe,r.directionalShadowMatrix[S]=k.shadow.matrix,I++}r.directional[S]=ae,S++}else if(k.isSpotLight){const ae=e.get(k);ae.position.setFromMatrixPosition(k.matrixWorld),ae.color.copy(ee).multiplyScalar(q),ae.distance=le,ae.coneCos=Math.cos(k.angle),ae.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ae.decay=k.decay,r.spot[w]=ae;const ue=k.shadow;if(k.map&&(r.spotLightMap[Y]=k.map,Y++,ue.updateMatrices(k),k.castShadow&&F++),r.spotLightMatrix[w]=ue.matrix,k.castShadow){const z=n.get(k);z.shadowIntensity=ue.intensity,z.shadowBias=ue.bias,z.shadowNormalBias=ue.normalBias,z.shadowRadius=ue.radius,z.shadowMapSize=ue.mapSize,r.spotShadow[w]=z,r.spotShadowMap[w]=fe,R++}w++}else if(k.isRectAreaLight){const ae=e.get(k);ae.color.copy(ee).multiplyScalar(q),ae.halfWidth.set(k.width*.5,0,0),ae.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=ae,y++}else if(k.isPointLight){const ae=e.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity),ae.distance=k.distance,ae.decay=k.decay,k.castShadow){const ue=k.shadow,z=n.get(k);z.shadowIntensity=ue.intensity,z.shadowBias=ue.bias,z.shadowNormalBias=ue.normalBias,z.shadowRadius=ue.radius,z.shadowMapSize=ue.mapSize,z.shadowCameraNear=ue.camera.near,z.shadowCameraFar=ue.camera.far,r.pointShadow[E]=z,r.pointShadowMap[E]=fe,r.pointShadowMatrix[E]=k.shadow.matrix,L++}r.point[E]=ae,E++}else if(k.isHemisphereLight){const ae=e.get(k);ae.skyColor.copy(k.color).multiplyScalar(q),ae.groundColor.copy(k.groundColor).multiplyScalar(q),r.hemi[g]=ae,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=v;const V=r.hash;(V.directionalLength!==S||V.pointLength!==E||V.spotLength!==w||V.rectAreaLength!==y||V.hemiLength!==g||V.numDirectionalShadows!==I||V.numPointShadows!==L||V.numSpotShadows!==R||V.numSpotMaps!==Y||V.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=y,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+Y-F,r.spotLightMap.length=Y,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=U,V.directionalLength=S,V.pointLength=E,V.spotLength=w,V.rectAreaLength=y,V.hemiLength=g,V.numDirectionalShadows=I,V.numPointShadows=L,V.numSpotShadows=R,V.numSpotMaps=Y,V.numLightProbes=U,r.version=BM++)}function p(m,_){let x=0,v=0,S=0,E=0,w=0;const y=_.matrixWorldInverse;for(let g=0,I=m.length;g<I;g++){const L=m[g];if(L.isDirectionalLight){const R=r.directional[x];R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),x++}else if(L.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),u.identity(),c.copy(L.matrixWorld),c.premultiply(y),u.extractRotation(c),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const R=r.point[v];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),v++}else if(L.isHemisphereLight){const R=r.hemi[w];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(y),w++}}}return{setup:d,setupView:p,state:r}}function Dm(s){const e=new VM(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function c(_){n.push(_)}function u(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:u}}function GM(s){let e=new WeakMap;function n(a,c=0){const u=e.get(a);let d;return u===void 0?(d=new Dm(s),e.set(a,[d])):c>=u.length?(d=new Dm(s),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class WM extends Ks{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XM extends Ks{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YM=`uniform sampler2D shadow_pass;
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
}`;function qM(s,e,n){let r=new Qf;const a=new yt,c=new yt,u=new Gt,d=new WM({depthPacking:Hv}),p=new XM,m={},_=n.maxTextureSize,x={[Er]:In,[In]:Er,[yi]:yi},v=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:jM,fragmentShader:YM}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new Vn;E.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new It(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vm;let g=this.type;this.render=function(F,U,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const P=s.getRenderTarget(),C=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(Sr),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const q=g!==Bi&&this.type===Bi,le=g===Bi&&this.type!==Bi;for(let fe=0,ae=F.length;fe<ae;fe++){const ue=F[fe],z=ue.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const ce=z.getFrameExtents();if(a.multiply(ce),c.copy(z.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(c.x=Math.floor(_/ce.x),a.x=c.x*ce.x,z.mapSize.x=c.x),a.y>_&&(c.y=Math.floor(_/ce.y),a.y=c.y*ce.y,z.mapSize.y=c.y)),z.map===null||q===!0||le===!0){const N=this.type!==Bi?{minFilter:di,magFilter:di}:{};z.map!==null&&z.map.dispose(),z.map=new Jr(a.x,a.y,N),z.map.texture.name=ue.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const se=z.getViewportCount();for(let N=0;N<se;N++){const re=z.getViewport(N);u.set(c.x*re.x,c.y*re.y,c.x*re.z,c.y*re.w),ee.viewport(u),z.updateMatrices(ue,N),r=z.getFrustum(),R(U,V,z.camera,ue,this.type)}z.isPointLightShadow!==!0&&this.type===Bi&&I(z,V),z.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(P,C,k)};function I(F,U){const V=e.update(w);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Jr(a.x,a.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(U,null,V,v,w,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(U,null,V,S,w,null)}function L(F,U,V,P){let C=null;const k=V.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)C=k;else if(C=V.isPointLight===!0?p:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ee=C.uuid,q=U.uuid;let le=m[ee];le===void 0&&(le={},m[ee]=le);let fe=le[q];fe===void 0&&(fe=C.clone(),le[q]=fe,U.addEventListener("dispose",Y)),C=fe}if(C.visible=U.visible,C.wireframe=U.wireframe,P===Bi?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:x[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,V.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ee=s.properties.get(C);ee.light=V}return C}function R(F,U,V,P,C){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===Bi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,F.matrixWorld);const q=e.update(F),le=F.material;if(Array.isArray(le)){const fe=q.groups;for(let ae=0,ue=fe.length;ae<ue;ae++){const z=fe[ae],ce=le[z.materialIndex];if(ce&&ce.visible){const se=L(F,ce,P,C);F.onBeforeShadow(s,F,U,V,q,se,z),s.renderBufferDirect(V,null,q,se,F,z),F.onAfterShadow(s,F,U,V,q,se,z)}}}else if(le.visible){const fe=L(F,le,P,C);F.onBeforeShadow(s,F,U,V,q,fe,null),s.renderBufferDirect(V,null,q,fe,F,null),F.onAfterShadow(s,F,U,V,q,fe,null)}}const ee=F.children;for(let q=0,le=ee.length;q<le;q++)R(ee[q],U,V,P,C)}function Y(F){F.target.removeEventListener("dispose",Y);for(const V in m){const P=m[V],C=F.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const $M={[rf]:sf,[of]:cf,[af]:uf,[Vs]:lf,[sf]:rf,[cf]:of,[uf]:af,[lf]:Vs};function KM(s,e){function n(){let H=!1;const Re=new Gt;let oe=null;const me=new Gt(0,0,0,0);return{setMask:function(De){oe!==De&&!H&&(s.colorMask(De,De,De,De),oe=De)},setLocked:function(De){H=De},setClear:function(De,be,rt,Nt,Yt){Yt===!0&&(De*=Nt,be*=Nt,rt*=Nt),Re.set(De,be,rt,Nt),me.equals(Re)===!1&&(s.clearColor(De,be,rt,Nt),me.copy(Re))},reset:function(){H=!1,oe=null,me.set(-1,0,0,0)}}}function r(){let H=!1,Re=!1,oe=null,me=null,De=null;return{setReversed:function(be){if(Re!==be){const rt=e.get("EXT_clip_control");Re?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Nt=De;De=null,this.setClear(Nt)}Re=be},getReversed:function(){return Re},setTest:function(be){be?he(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(be){oe!==be&&!H&&(s.depthMask(be),oe=be)},setFunc:function(be){if(Re&&(be=$M[be]),me!==be){switch(be){case rf:s.depthFunc(s.NEVER);break;case sf:s.depthFunc(s.ALWAYS);break;case of:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case af:s.depthFunc(s.EQUAL);break;case lf:s.depthFunc(s.GEQUAL);break;case cf:s.depthFunc(s.GREATER);break;case uf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=be}},setLocked:function(be){H=be},setClear:function(be){De!==be&&(Re&&(be=1-be),s.clearDepth(be),De=be)},reset:function(){H=!1,oe=null,me=null,De=null,Re=!1}}}function a(){let H=!1,Re=null,oe=null,me=null,De=null,be=null,rt=null,Nt=null,Yt=null;return{setTest:function(_t){H||(_t?he(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(_t){Re!==_t&&!H&&(s.stencilMask(_t),Re=_t)},setFunc:function(_t,En,_n){(oe!==_t||me!==En||De!==_n)&&(s.stencilFunc(_t,En,_n),oe=_t,me=En,De=_n)},setOp:function(_t,En,_n){(be!==_t||rt!==En||Nt!==_n)&&(s.stencilOp(_t,En,_n),be=_t,rt=En,Nt=_n)},setLocked:function(_t){H=_t},setClear:function(_t){Yt!==_t&&(s.clearStencil(_t),Yt=_t)},reset:function(){H=!1,Re=null,oe=null,me=null,De=null,be=null,rt=null,Nt=null,Yt=null}}}const c=new n,u=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},x={},v=new WeakMap,S=[],E=null,w=!1,y=null,g=null,I=null,L=null,R=null,Y=null,F=null,U=new dt(0,0,0),V=0,P=!1,C=null,k=null,ee=null,q=null,le=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ue=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(z)[1]),ae=ue>=1):z.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ae=ue>=2);let ce=null,se={};const N=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Ie=new Gt().fromArray(N),J=new Gt().fromArray(re);function $(H,Re,oe,me){const De=new Uint8Array(4),be=s.createTexture();s.bindTexture(H,be),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<oe;rt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Re+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return be}const de={};de[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),de[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),de[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),he(s.DEPTH_TEST),u.setFunc(Vs),ht(!1),ct(Fp),he(s.CULL_FACE),X(Sr);function he(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function we(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function Le(H,Re){return x[H]!==Re?(s.bindFramebuffer(H,Re),x[H]=Re,H===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Re),H===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ye(H,Re){let oe=S,me=!1;if(H){oe=v.get(Re),oe===void 0&&(oe=[],v.set(Re,oe));const De=H.textures;if(oe.length!==De.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let be=0,rt=De.length;be<rt;be++)oe[be]=s.COLOR_ATTACHMENT0+be;oe.length=De.length,me=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,me=!0);me&&s.drawBuffers(oe)}function Ct(H){return E!==H?(s.useProgram(H),E=H,!0):!1}const pt={[Yr]:s.FUNC_ADD,[hv]:s.FUNC_SUBTRACT,[pv]:s.FUNC_REVERSE_SUBTRACT};pt[mv]=s.MIN,pt[gv]=s.MAX;const Lt={[_v]:s.ZERO,[vv]:s.ONE,[xv]:s.SRC_COLOR,[tf]:s.SRC_ALPHA,[Tv]:s.SRC_ALPHA_SATURATE,[Ev]:s.DST_COLOR,[Sv]:s.DST_ALPHA,[yv]:s.ONE_MINUS_SRC_COLOR,[nf]:s.ONE_MINUS_SRC_ALPHA,[wv]:s.ONE_MINUS_DST_COLOR,[Mv]:s.ONE_MINUS_DST_ALPHA,[Av]:s.CONSTANT_COLOR,[Cv]:s.ONE_MINUS_CONSTANT_COLOR,[Rv]:s.CONSTANT_ALPHA,[Pv]:s.ONE_MINUS_CONSTANT_ALPHA};function X(H,Re,oe,me,De,be,rt,Nt,Yt,_t){if(H===Sr){w===!0&&(we(s.BLEND),w=!1);return}if(w===!1&&(he(s.BLEND),w=!0),H!==dv){if(H!==y||_t!==P){if((g!==Yr||R!==Yr)&&(s.blendEquation(s.FUNC_ADD),g=Yr,R=Yr),_t)switch(H){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Op:s.blendFunc(s.ONE,s.ONE);break;case kp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Op:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case kp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}I=null,L=null,Y=null,F=null,U.set(0,0,0),V=0,y=H,P=_t}return}De=De||Re,be=be||oe,rt=rt||me,(Re!==g||De!==R)&&(s.blendEquationSeparate(pt[Re],pt[De]),g=Re,R=De),(oe!==I||me!==L||be!==Y||rt!==F)&&(s.blendFuncSeparate(Lt[oe],Lt[me],Lt[be],Lt[rt]),I=oe,L=me,Y=be,F=rt),(Nt.equals(U)===!1||Yt!==V)&&(s.blendColor(Nt.r,Nt.g,Nt.b,Yt),U.copy(Nt),V=Yt),y=H,P=!1}function gn(H,Re){H.side===yi?we(s.CULL_FACE):he(s.CULL_FACE);let oe=H.side===In;Re&&(oe=!oe),ht(oe),H.blending===zs&&H.transparent===!1?X(Sr):X(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),c.setMask(H.colorWrite);const me=H.stencilWrite;d.setTest(me),me&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Tt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(H){C!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),C=H)}function ct(H){H!==uv?(he(s.CULL_FACE),H!==k&&(H===Fp?s.cullFace(s.BACK):H===fv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),k=H}function $e(H){H!==ee&&(ae&&s.lineWidth(H),ee=H)}function Tt(H,Re,oe){H?(he(s.POLYGON_OFFSET_FILL),(q!==Re||le!==oe)&&(s.polygonOffset(Re,oe),q=Re,le=oe)):we(s.POLYGON_OFFSET_FILL)}function qe(H){H?he(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function b(H){H===void 0&&(H=s.TEXTURE0+fe-1),ce!==H&&(s.activeTexture(H),ce=H)}function T(H,Re,oe){oe===void 0&&(ce===null?oe=s.TEXTURE0+fe-1:oe=ce);let me=se[oe];me===void 0&&(me={type:void 0,texture:void 0},se[oe]=me),(me.type!==H||me.texture!==Re)&&(ce!==oe&&(s.activeTexture(oe),ce=oe),s.bindTexture(H,Re||de[H]),me.type=H,me.texture=Re)}function Z(){const H=se[ce];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ge(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(H){Ie.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ie.copy(H))}function ke(H){J.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),J.copy(H))}function ut(H,Re){let oe=m.get(Re);oe===void 0&&(oe=new WeakMap,m.set(Re,oe));let me=oe.get(H);me===void 0&&(me=s.getUniformBlockIndex(Re,H.name),oe.set(H,me))}function it(H,Re){const me=m.get(Re).get(H);p.get(Re)!==me&&(s.uniformBlockBinding(Re,me,H.__bindingPointIndex),p.set(Re,me))}function wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ce=null,se={},x={},v=new WeakMap,S=[],E=null,w=!1,y=null,g=null,I=null,L=null,R=null,Y=null,F=null,U=new dt(0,0,0),V=0,P=!1,C=null,k=null,ee=null,q=null,le=null,Ie.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:he,disable:we,bindFramebuffer:Le,drawBuffers:Ye,useProgram:Ct,setBlending:X,setMaterial:gn,setFlipSided:ht,setCullFace:ct,setLineWidth:$e,setPolygonOffset:Tt,setScissorTest:qe,activeTexture:b,bindTexture:T,unbindTexture:Z,compressedTexImage2D:ge,compressedTexImage3D:ve,texImage2D:Oe,texImage3D:Qe,updateUBOMapping:ut,uniformBlockBinding:it,texStorage2D:lt,texStorage3D:Se,texSubImage2D:pe,texSubImage3D:Ve,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ue,scissor:Je,viewport:ke,reset:wt}}function Im(s,e,n,r){const a=ZM(r);switch(n){case qm:return s*e;case Km:return s*e;case Zm:return s*e*2;case Qm:return s*e/a.components*a.byteLength;case $f:return s*e/a.components*a.byteLength;case Jm:return s*e*2/a.components*a.byteLength;case Kf:return s*e*2/a.components*a.byteLength;case $m:return s*e*3/a.components*a.byteLength;case fi:return s*e*4/a.components*a.byteLength;case Zf:return s*e*4/a.components*a.byteLength;case El:case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Tl:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gf:case vf:return Math.max(s,16)*Math.max(e,8)/4;case mf:case _f:return Math.max(s,8)*Math.max(e,8)/2;case xf:case yf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case wf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Af:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case bf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Df:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case If:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Nf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cl:case Ff:case Of:return Math.ceil(s/4)*Math.ceil(e/4)*16;case eg:case kf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case zf:case Bf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ZM(s){switch(s){case Wi:case Xm:return{byteLength:1,components:1};case Ho:case jm:case Go:return{byteLength:2,components:1};case Yf:case qf:return{byteLength:2,components:4};case Qr:case jf:case Hi:return{byteLength:4,components:1};case Ym:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function QM(s,e,n,r,a,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new yt,_=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(b,T){return S?new OffscreenCanvas(b,T):bl("canvas")}function w(b,T,Z){let ge=1;const ve=qe(b);if((ve.width>Z||ve.height>Z)&&(ge=Z/Math.max(ve.width,ve.height)),ge<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const pe=Math.floor(ge*ve.width),Ve=Math.floor(ge*ve.height);x===void 0&&(x=E(pe,Ve));const Ce=T?E(pe,Ve):x;return Ce.width=pe,Ce.height=Ve,Ce.getContext("2d").drawImage(b,0,0,pe,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+pe+"x"+Ve+")."),Ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),b;return b}function y(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function I(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(b,T,Z,ge,ve=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let pe=T;if(T===s.RED&&(Z===s.FLOAT&&(pe=s.R32F),Z===s.HALF_FLOAT&&(pe=s.R16F),Z===s.UNSIGNED_BYTE&&(pe=s.R8)),T===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.R8UI),Z===s.UNSIGNED_SHORT&&(pe=s.R16UI),Z===s.UNSIGNED_INT&&(pe=s.R32UI),Z===s.BYTE&&(pe=s.R8I),Z===s.SHORT&&(pe=s.R16I),Z===s.INT&&(pe=s.R32I)),T===s.RG&&(Z===s.FLOAT&&(pe=s.RG32F),Z===s.HALF_FLOAT&&(pe=s.RG16F),Z===s.UNSIGNED_BYTE&&(pe=s.RG8)),T===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.RG8UI),Z===s.UNSIGNED_SHORT&&(pe=s.RG16UI),Z===s.UNSIGNED_INT&&(pe=s.RG32UI),Z===s.BYTE&&(pe=s.RG8I),Z===s.SHORT&&(pe=s.RG16I),Z===s.INT&&(pe=s.RG32I)),T===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),Z===s.UNSIGNED_INT&&(pe=s.RGB32UI),Z===s.BYTE&&(pe=s.RGB8I),Z===s.SHORT&&(pe=s.RGB16I),Z===s.INT&&(pe=s.RGB32I)),T===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),Z===s.UNSIGNED_INT&&(pe=s.RGBA32UI),Z===s.BYTE&&(pe=s.RGBA8I),Z===s.SHORT&&(pe=s.RGBA16I),Z===s.INT&&(pe=s.RGBA32I)),T===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),T===s.RGBA){const Ve=ve?Ul:xt.getTransfer(ge);Z===s.FLOAT&&(pe=s.RGBA32F),Z===s.HALF_FLOAT&&(pe=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(pe=Ve===Pt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function R(b,T){let Z;return b?T===null||T===Qr||T===Xs?Z=s.DEPTH24_STENCIL8:T===Hi?Z=s.DEPTH32F_STENCIL8:T===Ho&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qr||T===Xs?Z=s.DEPTH_COMPONENT24:T===Hi?Z=s.DEPTH_COMPONENT32F:T===Ho&&(Z=s.DEPTH_COMPONENT16),Z}function Y(b,T){return y(b)===!0||b.isFramebufferTexture&&b.minFilter!==di&&b.minFilter!==Si?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function F(b){const T=b.target;T.removeEventListener("dispose",F),V(T),T.isVideoTexture&&_.delete(T)}function U(b){const T=b.target;T.removeEventListener("dispose",U),C(T)}function V(b){const T=r.get(b);if(T.__webglInit===void 0)return;const Z=b.source,ge=v.get(Z);if(ge){const ve=ge[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(b),Object.keys(ge).length===0&&v.delete(Z)}r.remove(b)}function P(b){const T=r.get(b);s.deleteTexture(T.__webglTexture);const Z=b.source,ge=v.get(Z);delete ge[T.__cacheKey],u.memory.textures--}function C(b){const T=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(T.__webglFramebuffer[ge]))for(let ve=0;ve<T.__webglFramebuffer[ge].length;ve++)s.deleteFramebuffer(T.__webglFramebuffer[ge][ve]);else s.deleteFramebuffer(T.__webglFramebuffer[ge]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ge])}else{if(Array.isArray(T.__webglFramebuffer))for(let ge=0;ge<T.__webglFramebuffer.length;ge++)s.deleteFramebuffer(T.__webglFramebuffer[ge]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ge=0;ge<T.__webglColorRenderbuffer.length;ge++)T.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ge]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=b.textures;for(let ge=0,ve=Z.length;ge<ve;ge++){const pe=r.get(Z[ge]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),u.memory.textures--),r.remove(Z[ge])}r.remove(b)}let k=0;function ee(){k=0}function q(){const b=k;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),k+=1,b}function le(b){const T=[];return T.push(b.wrapS),T.push(b.wrapT),T.push(b.wrapR||0),T.push(b.magFilter),T.push(b.minFilter),T.push(b.anisotropy),T.push(b.internalFormat),T.push(b.format),T.push(b.type),T.push(b.generateMipmaps),T.push(b.premultiplyAlpha),T.push(b.flipY),T.push(b.unpackAlignment),T.push(b.colorSpace),T.join()}function fe(b,T){const Z=r.get(b);if(b.isVideoTexture&&$e(b),b.isRenderTargetTexture===!1&&b.version>0&&Z.__version!==b.version){const ge=b.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Z,b,T);return}}n.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+T)}function ae(b,T){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){J(Z,b,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+T)}function ue(b,T){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){J(Z,b,T);return}n.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+T)}function z(b,T){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){$(Z,b,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+T)}const ce={[hf]:s.REPEAT,[$r]:s.CLAMP_TO_EDGE,[pf]:s.MIRRORED_REPEAT},se={[di]:s.NEAREST,[zv]:s.NEAREST_MIPMAP_NEAREST,[Ja]:s.NEAREST_MIPMAP_LINEAR,[Si]:s.LINEAR,[Su]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},N={[Gv]:s.NEVER,[$v]:s.ALWAYS,[Wv]:s.LESS,[ng]:s.LEQUAL,[Xv]:s.EQUAL,[qv]:s.GEQUAL,[jv]:s.GREATER,[Yv]:s.NOTEQUAL};function re(b,T){if(T.type===Hi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Si||T.magFilter===Su||T.magFilter===Ja||T.magFilter===Kr||T.minFilter===Si||T.minFilter===Su||T.minFilter===Ja||T.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ce[T.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ce[T.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ce[T.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,se[T.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,se[T.minFilter]),T.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===di||T.minFilter!==Ja&&T.minFilter!==Kr||T.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ie(b,T){let Z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",F));const ge=T.source;let ve=v.get(ge);ve===void 0&&(ve={},v.set(ge,ve));const pe=le(T);if(pe!==b.__cacheKey){ve[pe]===void 0&&(ve[pe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),ve[pe].usedTimes++;const Ve=ve[b.__cacheKey];Ve!==void 0&&(ve[b.__cacheKey].usedTimes--,Ve.usedTimes===0&&P(T)),b.__cacheKey=pe,b.__webglTexture=ve[pe].texture}return Z}function J(b,T,Z){let ge=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ge=s.TEXTURE_3D);const ve=Ie(b,T),pe=T.source;n.bindTexture(ge,b.__webglTexture,s.TEXTURE0+Z);const Ve=r.get(pe);if(pe.version!==Ve.__version||ve===!0){n.activeTexture(s.TEXTURE0+Z);const Ce=xt.getPrimaries(xt.workingColorSpace),Ue=T.colorSpace===xr?null:xt.getPrimaries(T.colorSpace),lt=T.colorSpace===xr||Ce===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Se=w(T.image,!1,a.maxTextureSize);Se=Tt(T,Se);const Oe=c.convert(T.format,T.colorSpace),Qe=c.convert(T.type);let Je=L(T.internalFormat,Oe,Qe,T.colorSpace,T.isVideoTexture);re(ge,T);let ke;const ut=T.mipmaps,it=T.isVideoTexture!==!0,wt=Ve.__version===void 0||ve===!0,H=pe.dataReady,Re=Y(T,Se);if(T.isDepthTexture)Je=R(T.format===js,T.type),wt&&(it?n.texStorage2D(s.TEXTURE_2D,1,Je,Se.width,Se.height):n.texImage2D(s.TEXTURE_2D,0,Je,Se.width,Se.height,0,Oe,Qe,null));else if(T.isDataTexture)if(ut.length>0){it&&wt&&n.texStorage2D(s.TEXTURE_2D,Re,Je,ut[0].width,ut[0].height);for(let oe=0,me=ut.length;oe<me;oe++)ke=ut[oe],it?H&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,ke.width,ke.height,Oe,Qe,ke.data):n.texImage2D(s.TEXTURE_2D,oe,Je,ke.width,ke.height,0,Oe,Qe,ke.data);T.generateMipmaps=!1}else it?(wt&&n.texStorage2D(s.TEXTURE_2D,Re,Je,Se.width,Se.height),H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,Oe,Qe,Se.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Se.width,Se.height,0,Oe,Qe,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&wt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Je,ut[0].width,ut[0].height,Se.depth);for(let oe=0,me=ut.length;oe<me;oe++)if(ke=ut[oe],T.format!==fi)if(Oe!==null)if(it){if(H)if(T.layerUpdates.size>0){const De=Im(ke.width,ke.height,T.format,T.type);for(const be of T.layerUpdates){const rt=ke.data.subarray(be*De/ke.data.BYTES_PER_ELEMENT,(be+1)*De/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,be,ke.width,ke.height,1,Oe,rt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ke.width,ke.height,Se.depth,Oe,ke.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,Je,ke.width,ke.height,Se.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?H&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ke.width,ke.height,Se.depth,Oe,Qe,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,oe,Je,ke.width,ke.height,Se.depth,0,Oe,Qe,ke.data)}else{it&&wt&&n.texStorage2D(s.TEXTURE_2D,Re,Je,ut[0].width,ut[0].height);for(let oe=0,me=ut.length;oe<me;oe++)ke=ut[oe],T.format!==fi?Oe!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,oe,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?H&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,ke.width,ke.height,Oe,Qe,ke.data):n.texImage2D(s.TEXTURE_2D,oe,Je,ke.width,ke.height,0,Oe,Qe,ke.data)}else if(T.isDataArrayTexture)if(it){if(wt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Je,Se.width,Se.height,Se.depth),H)if(T.layerUpdates.size>0){const oe=Im(Se.width,Se.height,T.format,T.type);for(const me of T.layerUpdates){const De=Se.data.subarray(me*oe/Se.data.BYTES_PER_ELEMENT,(me+1)*oe/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Se.width,Se.height,1,Oe,Qe,De)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Oe,Qe,Se.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Se.width,Se.height,Se.depth,0,Oe,Qe,Se.data);else if(T.isData3DTexture)it?(wt&&n.texStorage3D(s.TEXTURE_3D,Re,Je,Se.width,Se.height,Se.depth),H&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Oe,Qe,Se.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Se.width,Se.height,Se.depth,0,Oe,Qe,Se.data);else if(T.isFramebufferTexture){if(wt)if(it)n.texStorage2D(s.TEXTURE_2D,Re,Je,Se.width,Se.height);else{let oe=Se.width,me=Se.height;for(let De=0;De<Re;De++)n.texImage2D(s.TEXTURE_2D,De,Je,oe,me,0,Oe,Qe,null),oe>>=1,me>>=1}}else if(ut.length>0){if(it&&wt){const oe=qe(ut[0]);n.texStorage2D(s.TEXTURE_2D,Re,Je,oe.width,oe.height)}for(let oe=0,me=ut.length;oe<me;oe++)ke=ut[oe],it?H&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,Oe,Qe,ke):n.texImage2D(s.TEXTURE_2D,oe,Je,Oe,Qe,ke);T.generateMipmaps=!1}else if(it){if(wt){const oe=qe(Se);n.texStorage2D(s.TEXTURE_2D,Re,Je,oe.width,oe.height)}H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Qe,Se)}else n.texImage2D(s.TEXTURE_2D,0,Je,Oe,Qe,Se);y(T)&&g(ge),Ve.__version=pe.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function $(b,T,Z){if(T.image.length!==6)return;const ge=Ie(b,T),ve=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+Z);const pe=r.get(ve);if(ve.version!==pe.__version||ge===!0){n.activeTexture(s.TEXTURE0+Z);const Ve=xt.getPrimaries(xt.workingColorSpace),Ce=T.colorSpace===xr?null:xt.getPrimaries(T.colorSpace),Ue=T.colorSpace===xr||Ve===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const lt=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let me=0;me<6;me++)!lt&&!Se?Oe[me]=w(T.image[me],!0,a.maxCubemapSize):Oe[me]=Se?T.image[me].image:T.image[me],Oe[me]=Tt(T,Oe[me]);const Qe=Oe[0],Je=c.convert(T.format,T.colorSpace),ke=c.convert(T.type),ut=L(T.internalFormat,Je,ke,T.colorSpace),it=T.isVideoTexture!==!0,wt=pe.__version===void 0||ge===!0,H=ve.dataReady;let Re=Y(T,Qe);re(s.TEXTURE_CUBE_MAP,T);let oe;if(lt){it&&wt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ut,Qe.width,Qe.height);for(let me=0;me<6;me++){oe=Oe[me].mipmaps;for(let De=0;De<oe.length;De++){const be=oe[De];T.format!==fi?Je!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,be.width,be.height,Je,be.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,ut,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,be.width,be.height,Je,ke,be.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,ut,be.width,be.height,0,Je,ke,be.data)}}}else{if(oe=T.mipmaps,it&&wt){oe.length>0&&Re++;const me=qe(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ut,me.width,me.height)}for(let me=0;me<6;me++)if(Se){it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Oe[me].width,Oe[me].height,Je,ke,Oe[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,Oe[me].width,Oe[me].height,0,Je,ke,Oe[me].data);for(let De=0;De<oe.length;De++){const rt=oe[De].image[me].image;it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,rt.width,rt.height,Je,ke,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,ut,rt.width,rt.height,0,Je,ke,rt.data)}}else{it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Je,ke,Oe[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,Je,ke,Oe[me]);for(let De=0;De<oe.length;De++){const be=oe[De];it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,Je,ke,be.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,ut,Je,ke,be.image[me])}}}y(T)&&g(s.TEXTURE_CUBE_MAP),pe.__version=ve.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function de(b,T,Z,ge,ve,pe){const Ve=c.convert(Z.format,Z.colorSpace),Ce=c.convert(Z.type),Ue=L(Z.internalFormat,Ve,Ce,Z.colorSpace),lt=r.get(T),Se=r.get(Z);if(Se.__renderTarget=T,!lt.__hasExternalTextures){const Oe=Math.max(1,T.width>>pe),Qe=Math.max(1,T.height>>pe);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?n.texImage3D(ve,pe,Ue,Oe,Qe,T.depth,0,Ve,Ce,null):n.texImage2D(ve,pe,Ue,Oe,Qe,0,Ve,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),ct(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,ve,Se.__webglTexture,0,ht(T)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,ve,Se.__webglTexture,pe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function he(b,T,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,b),T.depthBuffer){const ge=T.depthTexture,ve=ge&&ge.isDepthTexture?ge.type:null,pe=R(T.stencilBuffer,ve),Ve=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=ht(T);ct(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,pe,T.width,T.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,pe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,pe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,b)}else{const ge=T.textures;for(let ve=0;ve<ge.length;ve++){const pe=ge[ve],Ve=c.convert(pe.format,pe.colorSpace),Ce=c.convert(pe.type),Ue=L(pe.internalFormat,Ve,Ce,pe.colorSpace),lt=ht(T);Z&&ct(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Ue,T.width,T.height):ct(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Ue,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(b,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(T.depthTexture);ge.__renderTarget=T,(!ge.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),fe(T.depthTexture,0);const ve=ge.__webglTexture,pe=ht(T);if(T.depthTexture.format===Bs)ct(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(T.depthTexture.format===js)ct(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Le(b){const T=r.get(b),Z=b.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==b.depthTexture){const ge=b.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ge){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ge.removeEventListener("dispose",ve)};ge.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=ge}if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");we(T.__webglFramebuffer,b)}else if(Z){T.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ge]),T.__webglDepthbuffer[ge]===void 0)T.__webglDepthbuffer[ge]=s.createRenderbuffer(),he(T.__webglDepthbuffer[ge],b,!1);else{const ve=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer[ge];s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,pe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),he(T.__webglDepthbuffer,b,!1);else{const ge=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ve)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(b,T,Z){const ge=r.get(b);T!==void 0&&de(ge.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Le(b)}function Ct(b){const T=b.texture,Z=r.get(b),ge=r.get(T);b.addEventListener("dispose",U);const ve=b.textures,pe=b.isWebGLCubeRenderTarget===!0,Ve=ve.length>1;if(Ve||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=T.version,u.memory.textures++),pe){Z.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[Ce]=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)Z.__webglFramebuffer[Ce][Ue]=s.createFramebuffer()}else Z.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)Z.__webglFramebuffer[Ce]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Ce=0,Ue=ve.length;Ce<Ue;Ce++){const lt=r.get(ve[Ce]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),u.memory.textures++)}if(b.samples>0&&ct(b)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const Ue=ve[Ce];Z.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce]);const lt=c.convert(Ue.format,Ue.colorSpace),Se=c.convert(Ue.type),Oe=L(Ue.internalFormat,lt,Se,Ue.colorSpace,b.isXRRenderTarget===!0),Qe=ht(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Oe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),he(Z.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){n.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),re(s.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)de(Z.__webglFramebuffer[Ce][Ue],b,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue);else de(Z.__webglFramebuffer[Ce],b,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(T)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let Ce=0,Ue=ve.length;Ce<Ue;Ce++){const lt=ve[Ce],Se=r.get(lt);n.bindTexture(s.TEXTURE_2D,Se.__webglTexture),re(s.TEXTURE_2D,lt),de(Z.__webglFramebuffer,b,lt,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),y(lt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ce=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,ge.__webglTexture),re(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)de(Z.__webglFramebuffer[Ue],b,T,s.COLOR_ATTACHMENT0,Ce,Ue);else de(Z.__webglFramebuffer,b,T,s.COLOR_ATTACHMENT0,Ce,0);y(T)&&g(Ce),n.unbindTexture()}b.depthBuffer&&Le(b)}function pt(b){const T=b.textures;for(let Z=0,ge=T.length;Z<ge;Z++){const ve=T[Z];if(y(ve)){const pe=I(b),Ve=r.get(ve).__webglTexture;n.bindTexture(pe,Ve),g(pe),n.unbindTexture()}}}const Lt=[],X=[];function gn(b){if(b.samples>0){if(ct(b)===!1){const T=b.textures,Z=b.width,ge=b.height;let ve=s.COLOR_BUFFER_BIT;const pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(b),Ce=T.length>1;if(Ce)for(let Ue=0;Ue<T.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const lt=r.get(T[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,Z,ge,0,0,Z,ge,ve,s.NEAREST),p===!0&&(Lt.length=0,X.length=0,Lt.push(s.COLOR_ATTACHMENT0+Ue),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Lt.push(pe),X.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,X)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Ue=0;Ue<T.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const lt=r.get(T[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,lt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const T=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ht(b){return Math.min(a.maxSamples,b.samples)}function ct(b){const T=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $e(b){const T=u.render.frame;_.get(b)!==T&&(_.set(b,T),b.update())}function Tt(b,T){const Z=b.colorSpace,ge=b.format,ve=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||Z!==qs&&Z!==xr&&(xt.getTransfer(Z)===Pt?(ge!==fi||ve!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function qe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=q,this.resetTextureUnits=ee,this.setTexture2D=fe,this.setTexture2DArray=ae,this.setTexture3D=ue,this.setTextureCube=z,this.rebindTextures=Ye,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ct}function JM(s,e){function n(r,a=xr){let c;const u=xt.getTransfer(a);if(r===Wi)return s.UNSIGNED_BYTE;if(r===Yf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===qf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ym)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Xm)return s.BYTE;if(r===jm)return s.SHORT;if(r===Ho)return s.UNSIGNED_SHORT;if(r===jf)return s.INT;if(r===Qr)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===Go)return s.HALF_FLOAT;if(r===qm)return s.ALPHA;if(r===$m)return s.RGB;if(r===fi)return s.RGBA;if(r===Km)return s.LUMINANCE;if(r===Zm)return s.LUMINANCE_ALPHA;if(r===Bs)return s.DEPTH_COMPONENT;if(r===js)return s.DEPTH_STENCIL;if(r===Qm)return s.RED;if(r===$f)return s.RED_INTEGER;if(r===Jm)return s.RG;if(r===Kf)return s.RG_INTEGER;if(r===Zf)return s.RGBA_INTEGER;if(r===El||r===wl||r===Tl||r===Al)if(u===Pt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===El)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Al)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===El)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Al)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===mf||r===gf||r===_f||r===vf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===mf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===gf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_f)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===vf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xf||r===yf||r===Sf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===xf||r===yf)return u===Pt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Sf)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Mf||r===Ef||r===wf||r===Tf||r===Af||r===Cf||r===Rf||r===Pf||r===bf||r===Lf||r===Df||r===If||r===Nf||r===Uf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Mf)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ef)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wf)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tf)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Af)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Cf)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rf)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Pf)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bf)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lf)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Df)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===If)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nf)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Uf)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cl||r===Ff||r===Of)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Cl)return u===Pt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ff)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Of)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===eg||r===kf||r===zf||r===Bf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Cl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===kf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class eE extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yr extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tE={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const w of e.hand.values()){const y=n.getJointPose(w,r),g=this._getHandJoint(m,w);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=_.position.distanceTo(x.position),S=.02,E=.005;m.inputState.pinching&&v>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(tE)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new yr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const nE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iE=`
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

}`;class rE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Nn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new wr({vertexShader:nE,fragmentShader:iE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new It(new Zr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sE extends $s{constructor(e,n){super();const r=this;let a=null,c=1,u=null,d="local-floor",p=1,m=null,_=null,x=null,v=null,S=null,E=null;const w=new rE,y=n.getContextAttributes();let g=null,I=null;const L=[],R=[],Y=new yt;let F=null;const U=new ci;U.viewport=new Gt;const V=new ci;V.viewport=new Gt;const P=[U,V],C=new eE;let k=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let $=L[J];return $===void 0&&($=new Ku,L[J]=$),$.getTargetRaySpace()},this.getControllerGrip=function(J){let $=L[J];return $===void 0&&($=new Ku,L[J]=$),$.getGripSpace()},this.getHand=function(J){let $=L[J];return $===void 0&&($=new Ku,L[J]=$),$.getHandSpace()};function q(J){const $=R.indexOf(J.inputSource);if($===-1)return;const de=L[$];de!==void 0&&(de.update(J.inputSource,J.frame,m||u),de.dispatchEvent({type:J.type,data:J.inputSource}))}function le(){a.removeEventListener("select",q),a.removeEventListener("selectstart",q),a.removeEventListener("selectend",q),a.removeEventListener("squeeze",q),a.removeEventListener("squeezestart",q),a.removeEventListener("squeezeend",q),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",fe);for(let J=0;J<L.length;J++){const $=R[J];$!==null&&(R[J]=null,L[J].disconnect($))}k=null,ee=null,w.reset(),e.setRenderTarget(g),S=null,v=null,x=null,a=null,I=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(Y.width,Y.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",q),a.addEventListener("selectstart",q),a.addEventListener("selectend",q),a.addEventListener("squeeze",q),a.addEventListener("squeezestart",q),a.addEventListener("squeezeend",q),a.addEventListener("end",le),a.addEventListener("inputsourceschange",fe),y.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(Y),a.renderState.layers===void 0){const $={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(a,n,$),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new Jr(S.framebufferWidth,S.framebufferHeight,{format:fi,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let $=null,de=null,he=null;y.depth&&(he=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=y.stencil?js:Bs,de=y.stencil?Xs:Qr);const we={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:c};x=new XRWebGLBinding(a,n),v=x.createProjectionLayer(we),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),I=new Jr(v.textureWidth,v.textureHeight,{format:fi,type:Wi,depthTexture:new mg(v.textureWidth,v.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await a.requestReferenceSpace(d),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function fe(J){for(let $=0;$<J.removed.length;$++){const de=J.removed[$],he=R.indexOf(de);he>=0&&(R[he]=null,L[he].disconnect(de))}for(let $=0;$<J.added.length;$++){const de=J.added[$];let he=R.indexOf(de);if(he===-1){for(let Le=0;Le<L.length;Le++)if(Le>=R.length){R.push(de),he=Le;break}else if(R[Le]===null){R[Le]=de,he=Le;break}if(he===-1)break}const we=L[he];we&&we.connect(de)}}const ae=new Q,ue=new Q;function z(J,$,de){ae.setFromMatrixPosition($.matrixWorld),ue.setFromMatrixPosition(de.matrixWorld);const he=ae.distanceTo(ue),we=$.projectionMatrix.elements,Le=de.projectionMatrix.elements,Ye=we[14]/(we[10]-1),Ct=we[14]/(we[10]+1),pt=(we[9]+1)/we[5],Lt=(we[9]-1)/we[5],X=(we[8]-1)/we[0],gn=(Le[8]+1)/Le[0],ht=Ye*X,ct=Ye*gn,$e=he/(-X+gn),Tt=$e*-X;if($.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Tt),J.translateZ($e),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),we[10]===-1)J.projectionMatrix.copy($.projectionMatrix),J.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const qe=Ye+$e,b=Ct+$e,T=ht-Tt,Z=ct+(he-Tt),ge=pt*Ct/b*qe,ve=Lt*Ct/b*qe;J.projectionMatrix.makePerspective(T,Z,ge,ve,qe,b),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ce(J,$){$===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices($.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let $=J.near,de=J.far;w.texture!==null&&(w.depthNear>0&&($=w.depthNear),w.depthFar>0&&(de=w.depthFar)),C.near=V.near=U.near=$,C.far=V.far=U.far=de,(k!==C.near||ee!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,ee=C.far),U.layers.mask=J.layers.mask|2,V.layers.mask=J.layers.mask|4,C.layers.mask=U.layers.mask|V.layers.mask;const he=J.parent,we=C.cameras;ce(C,he);for(let Le=0;Le<we.length;Le++)ce(we[Le],he);we.length===2?z(C,U,V):C.projectionMatrix.copy(U.projectionMatrix),se(J,C,he)};function se(J,$,de){de===null?J.matrix.copy($.matrixWorld):(J.matrix.copy(de.matrixWorld),J.matrix.invert(),J.matrix.multiply($.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy($.projectionMatrix),J.projectionMatrixInverse.copy($.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Hf*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(J){p=J,v!==null&&(v.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let N=null;function re(J,$){if(_=$.getViewerPose(m||u),E=$,_!==null){const de=_.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let he=!1;de.length!==C.cameras.length&&(C.cameras.length=0,he=!0);for(let Le=0;Le<de.length;Le++){const Ye=de[Le];let Ct=null;if(S!==null)Ct=S.getViewport(Ye);else{const Lt=x.getViewSubImage(v,Ye);Ct=Lt.viewport,Le===0&&(e.setRenderTargetTextures(I,Lt.colorTexture,v.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(I))}let pt=P[Le];pt===void 0&&(pt=new ci,pt.layers.enable(Le),pt.viewport=new Gt,P[Le]=pt),pt.matrix.fromArray(Ye.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Ye.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Le===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),he===!0&&C.cameras.push(pt)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")){const Le=x.getDepthInformation(de[0]);Le&&Le.isValid&&Le.texture&&w.init(e,Le,a.renderState)}}for(let de=0;de<L.length;de++){const he=R[de],we=L[de];he!==null&&we!==void 0&&we.update(he,$,m||u)}N&&N(J,$),$.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:$}),E=null}const Ie=new pg;Ie.setAnimationLoop(re),this.setAnimationLoop=function(J){N=J},this.dispose=function(){}}}const Wr=new Ei,oE=new Bt;function aE(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,fg(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,I,L,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),x(y,g)):g.isMeshPhongMaterial?(c(y,g),_(y,g)):g.isMeshStandardMaterial?(c(y,g),v(y,g),g.isMeshPhysicalMaterial&&S(y,g,R)):g.isMeshMatcapMaterial?(c(y,g),E(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),w(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(u(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?p(y,g,I,L):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===In&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===In&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const I=e.get(g),L=I.envMap,R=I.envMapRotation;L&&(y.envMap.value=L,Wr.copy(R),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),y.envMapRotation.value.setFromMatrix4(oE.makeRotationFromEuler(Wr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function u(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,I,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*I,y.scale.value=L*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function x(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function v(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,I){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===In&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function w(y,g){const I=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function lE(s,e,n,r){let a={},c={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,L){const R=L.program;r.uniformBlockBinding(I,R)}function m(I,L){let R=a[I.id];R===void 0&&(E(I),R=_(I),a[I.id]=R,I.addEventListener("dispose",y));const Y=L.program;r.updateUBOMapping(I,Y);const F=e.render.frame;c[I.id]!==F&&(v(I),c[I.id]=F)}function _(I){const L=x();I.__bindingPointIndex=L;const R=s.createBuffer(),Y=I.__size,F=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,Y,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,R),R}function x(){for(let I=0;I<d;I++)if(u.indexOf(I)===-1)return u.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const L=a[I.id],R=I.uniforms,Y=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let F=0,U=R.length;F<U;F++){const V=Array.isArray(R[F])?R[F]:[R[F]];for(let P=0,C=V.length;P<C;P++){const k=V[P];if(S(k,F,P,Y)===!0){const ee=k.__offset,q=Array.isArray(k.value)?k.value:[k.value];let le=0;for(let fe=0;fe<q.length;fe++){const ae=q[fe],ue=w(ae);typeof ae=="number"||typeof ae=="boolean"?(k.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,ee+le,k.__data)):ae.isMatrix3?(k.__data[0]=ae.elements[0],k.__data[1]=ae.elements[1],k.__data[2]=ae.elements[2],k.__data[3]=0,k.__data[4]=ae.elements[3],k.__data[5]=ae.elements[4],k.__data[6]=ae.elements[5],k.__data[7]=0,k.__data[8]=ae.elements[6],k.__data[9]=ae.elements[7],k.__data[10]=ae.elements[8],k.__data[11]=0):(ae.toArray(k.__data,le),le+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ee,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,L,R,Y){const F=I.value,U=L+"_"+R;if(Y[U]===void 0)return typeof F=="number"||typeof F=="boolean"?Y[U]=F:Y[U]=F.clone(),!0;{const V=Y[U];if(typeof F=="number"||typeof F=="boolean"){if(V!==F)return Y[U]=F,!0}else if(V.equals(F)===!1)return V.copy(F),!0}return!1}function E(I){const L=I.uniforms;let R=0;const Y=16;for(let U=0,V=L.length;U<V;U++){const P=Array.isArray(L[U])?L[U]:[L[U]];for(let C=0,k=P.length;C<k;C++){const ee=P[C],q=Array.isArray(ee.value)?ee.value:[ee.value];for(let le=0,fe=q.length;le<fe;le++){const ae=q[le],ue=w(ae),z=R%Y,ce=z%ue.boundary,se=z+ce;R+=ce,se!==0&&Y-se<ue.storage&&(R+=Y-se),ee.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=R,R+=ue.storage}}}const F=R%Y;return F>0&&(R+=Y-F),I.__size=R,I.__cache={},this}function w(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function y(I){const L=I.target;L.removeEventListener("dispose",y);const R=u.indexOf(L.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete c[L.id]}function g(){for(const I in a)s.deleteBuffer(a[I]);u=[],a={},c={}}return{bind:p,update:m,dispose:g}}class cE{constructor(e={}){const{canvas:n=Zv(),context:r=null,depth:a=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,g=null;const I=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=Mr,this.toneMappingExposure=1;const R=this;let Y=!1,F=0,U=0,V=null,P=-1,C=null;const k=new Gt,ee=new Gt;let q=null;const le=new dt(0);let fe=0,ae=n.width,ue=n.height,z=1,ce=null,se=null;const N=new Gt(0,0,ae,ue),re=new Gt(0,0,ae,ue);let Ie=!1;const J=new Qf;let $=!1,de=!1;const he=new Bt,we=new Bt,Le=new Q,Ye=new Gt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Lt(){return V===null?z:1}let X=r;function gn(A,G){return n.getContext(A,G)}try{const A={alpha:!0,depth:a,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wf}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",be,!1),X===null){const G="webgl2";if(X=gn(G,A),X===null)throw gn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ht,ct,$e,Tt,qe,b,T,Z,ge,ve,pe,Ve,Ce,Ue,lt,Se,Oe,Qe,Je,ke,ut,it,wt,H;function Re(){ht=new pS(X),ht.init(),it=new JM(X,ht),ct=new lS(X,ht,e,it),$e=new KM(X,ht),ct.reverseDepthBuffer&&v&&$e.buffers.depth.setReversed(!0),Tt=new _S(X),qe=new UM,b=new QM(X,ht,$e,qe,ct,it,Tt),T=new uS(R),Z=new hS(R),ge=new w0(X),wt=new oS(X,ge),ve=new mS(X,ge,Tt,wt),pe=new xS(X,ve,ge,Tt),Je=new vS(X,ct,b),Se=new cS(qe),Ve=new NM(R,T,Z,ht,ct,wt,Se),Ce=new aE(R,qe),Ue=new OM,lt=new GM(ht),Qe=new sS(R,T,Z,$e,pe,S,p),Oe=new qM(R,pe,ct),H=new lE(X,Tt,ct,$e),ke=new aS(X,ht,Tt),ut=new gS(X,ht,Tt),Tt.programs=Ve.programs,R.capabilities=ct,R.extensions=ht,R.properties=qe,R.renderLists=Ue,R.shadowMap=Oe,R.state=$e,R.info=Tt}Re();const oe=new sE(R,X);this.xr=oe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(ae,ue,!1))},this.getSize=function(A){return A.set(ae,ue)},this.setSize=function(A,G,ne=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,ue=G,n.width=Math.floor(A*z),n.height=Math.floor(G*z),ne===!0&&(n.style.width=A+"px",n.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(ae*z,ue*z).floor()},this.setDrawingBufferSize=function(A,G,ne){ae=A,ue=G,z=ne,n.width=Math.floor(A*ne),n.height=Math.floor(G*ne),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,G,ne,ie){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,G,ne,ie),$e.viewport(k.copy(N).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,G,ne,ie){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,G,ne,ie),$e.scissor(ee.copy(re).multiplyScalar(z).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(A){$e.setScissorTest(Ie=A)},this.setOpaqueSort=function(A){ce=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(A=!0,G=!0,ne=!0){let ie=0;if(A){let W=!1;if(V!==null){const Ae=V.texture.format;W=Ae===Zf||Ae===Kf||Ae===$f}if(W){const Ae=V.texture.type,Me=Ae===Wi||Ae===Qr||Ae===Ho||Ae===Xs||Ae===Yf||Ae===qf,Ge=Qe.getClearColor(),Be=Qe.getClearAlpha(),et=Ge.r,nt=Ge.g,We=Ge.b;Me?(E[0]=et,E[1]=nt,E[2]=We,E[3]=Be,X.clearBufferuiv(X.COLOR,0,E)):(w[0]=et,w[1]=nt,w[2]=We,w[3]=Be,X.clearBufferiv(X.COLOR,0,w))}else ie|=X.COLOR_BUFFER_BIT}G&&(ie|=X.DEPTH_BUFFER_BIT),ne&&(ie|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",be,!1),Ue.dispose(),lt.dispose(),qe.dispose(),T.dispose(),Z.dispose(),pe.dispose(),wt.dispose(),H.dispose(),Ve.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",es),oe.removeEventListener("sessionend",Xi),wi.stop()};function me(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const A=Tt.autoReset,G=Oe.enabled,ne=Oe.autoUpdate,ie=Oe.needsUpdate,W=Oe.type;Re(),Tt.autoReset=A,Oe.enabled=G,Oe.autoUpdate=ne,Oe.needsUpdate=ie,Oe.type=W}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){const G=A.target;G.removeEventListener("dispose",rt),Nt(G)}function Nt(A){Yt(A),qe.remove(A)}function Yt(A){const G=qe.get(A).programs;G!==void 0&&(G.forEach(function(ne){Ve.releaseProgram(ne)}),A.isShaderMaterial&&Ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,ne,ie,W,Ae){G===null&&(G=Ct);const Me=W.isMesh&&W.matrixWorld.determinant()<0,Ge=$o(A,G,ne,ie,W);$e.setMaterial(ie,Me);let Be=ne.index,et=1;if(ie.wireframe===!0){if(Be=ve.getWireframeAttribute(ne),Be===void 0)return;et=2}const nt=ne.drawRange,We=ne.attributes.position;let gt=nt.start*et,Et=(nt.start+nt.count)*et;Ae!==null&&(gt=Math.max(gt,Ae.start*et),Et=Math.min(Et,(Ae.start+Ae.count)*et)),Be!==null?(gt=Math.max(gt,0),Et=Math.min(Et,Be.count)):We!=null&&(gt=Math.max(gt,0),Et=Math.min(Et,We.count));const mt=Et-gt;if(mt<0||mt===1/0)return;wt.setup(W,ie,Ge,ne,Be);let ln,st=ke;if(Be!==null&&(ln=ge.get(Be),st=ut,st.setIndex(ln)),W.isMesh)ie.wireframe===!0?($e.setLineWidth(ie.wireframeLinewidth*Lt()),st.setMode(X.LINES)):st.setMode(X.TRIANGLES);else if(W.isLine){let je=ie.linewidth;je===void 0&&(je=1),$e.setLineWidth(je*Lt()),W.isLineSegments?st.setMode(X.LINES):W.isLineLoop?st.setMode(X.LINE_LOOP):st.setMode(X.LINE_STRIP)}else W.isPoints?st.setMode(X.POINTS):W.isSprite&&st.setMode(X.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)st.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))st.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const je=W._multiDrawStarts,Qn=W._multiDrawCounts,St=W._multiDrawCount,cn=Be?ge.get(Be).bytesPerElement:1,Jn=qe.get(ie).currentProgram.getUniforms();for(let qt=0;qt<St;qt++)Jn.setValue(X,"_gl_DrawID",qt),st.render(je[qt]/cn,Qn[qt])}else if(W.isInstancedMesh)st.renderInstances(gt,mt,W.count);else if(ne.isInstancedBufferGeometry){const je=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Qn=Math.min(ne.instanceCount,je);st.renderInstances(gt,mt,Qn)}else st.render(gt,mt)};function _t(A,G,ne){A.transparent===!0&&A.side===yi&&A.forceSinglePass===!1?(A.side=In,A.needsUpdate=!0,ts(A,G,ne),A.side=Er,A.needsUpdate=!0,ts(A,G,ne),A.side=yi):ts(A,G,ne)}this.compile=function(A,G,ne=null){ne===null&&(ne=A),g=lt.get(ne),g.init(G),L.push(g),ne.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),A!==ne&&A.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const ie=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ae=W.material;if(Ae)if(Array.isArray(Ae))for(let Me=0;Me<Ae.length;Me++){const Ge=Ae[Me];_t(Ge,ne,W),ie.add(Ge)}else _t(Ae,ne,W),ie.add(Ae)}),L.pop(),g=null,ie},this.compileAsync=function(A,G,ne=null){const ie=this.compile(A,G,ne);return new Promise(W=>{function Ae(){if(ie.forEach(function(Me){qe.get(Me).currentProgram.isReady()&&ie.delete(Me)}),ie.size===0){W(A);return}setTimeout(Ae,10)}ht.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let En=null;function _n(A){En&&En(A)}function es(){wi.stop()}function Xi(){wi.start()}const wi=new pg;wi.setAnimationLoop(_n),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(A){En=A,oe.setAnimationLoop(A),A===null?wi.stop():wi.start()},oe.addEventListener("sessionstart",es),oe.addEventListener("sessionend",Xi),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(G),G=oe.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,G,V),g=lt.get(A,L.length),g.init(G),L.push(g),we.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),J.setFromProjectionMatrix(we),de=this.localClippingEnabled,$=Se.init(this.clippingPlanes,de),y=Ue.get(A,I.length),y.init(),I.push(y),oe.enabled===!0&&oe.isPresenting===!0){const Ae=R.xr.getDepthSensingMesh();Ae!==null&&Ti(Ae,G,-1/0,R.sortObjects)}Ti(A,G,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(ce,se),pt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,pt&&Qe.addToRenderList(y,A),this.info.render.frame++,$===!0&&Se.beginShadows();const ne=g.state.shadowsArray;Oe.render(ne,A,G),$===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=y.opaque,W=y.transmissive;if(g.setupLights(),G.isArrayCamera){const Ae=G.cameras;if(W.length>0)for(let Me=0,Ge=Ae.length;Me<Ge;Me++){const Be=Ae[Me];Ar(ie,W,A,Be)}pt&&Qe.render(A);for(let Me=0,Ge=Ae.length;Me<Ge;Me++){const Be=Ae[Me];Tr(y,A,Be,Be.viewport)}}else W.length>0&&Ar(ie,W,A,G),pt&&Qe.render(A),Tr(y,A,G);V!==null&&(b.updateMultisampleRenderTarget(V),b.updateRenderTargetMipmap(V)),A.isScene===!0&&A.onAfterRender(R,A,G),wt.resetDefaultState(),P=-1,C=null,L.pop(),L.length>0?(g=L[L.length-1],$===!0&&Se.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Ti(A,G,ne,ie){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){ie&&Ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Me=pe.update(A),Ge=A.material;Ge.visible&&y.push(A,Me,Ge,ne,Ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){const Me=pe.update(A),Ge=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ye.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ye.copy(Me.boundingSphere.center)),Ye.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Ge)){const Be=Me.groups;for(let et=0,nt=Be.length;et<nt;et++){const We=Be[et],gt=Ge[We.materialIndex];gt&&gt.visible&&y.push(A,Me,gt,ne,Ye.z,We)}}else Ge.visible&&y.push(A,Me,Ge,ne,Ye.z,null)}}const Ae=A.children;for(let Me=0,Ge=Ae.length;Me<Ge;Me++)Ti(Ae[Me],G,ne,ie)}function Tr(A,G,ne,ie){const W=A.opaque,Ae=A.transmissive,Me=A.transparent;g.setupLightsView(ne),$===!0&&Se.setGlobalState(R.clippingPlanes,ne),ie&&$e.viewport(k.copy(ie)),W.length>0&&ji(W,G,ne),Ae.length>0&&ji(Ae,G,ne),Me.length>0&&ji(Me,G,ne),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Ar(A,G,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ie.id]===void 0&&(g.state.transmissionRenderTarget[ie.id]=new Jr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Go:Wi,minFilter:Kr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const Ae=g.state.transmissionRenderTarget[ie.id],Me=ie.viewport||k;Ae.setSize(Me.z,Me.w);const Ge=R.getRenderTarget();R.setRenderTarget(Ae),R.getClearColor(le),fe=R.getClearAlpha(),fe<1&&R.setClearColor(16777215,.5),R.clear(),pt&&Qe.render(ne);const Be=R.toneMapping;R.toneMapping=Mr;const et=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),g.setupLightsView(ie),$===!0&&Se.setGlobalState(R.clippingPlanes,ie),ji(A,ne,ie),b.updateMultisampleRenderTarget(Ae),b.updateRenderTargetMipmap(Ae),ht.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let We=0,gt=G.length;We<gt;We++){const Et=G[We],mt=Et.object,ln=Et.geometry,st=Et.material,je=Et.group;if(st.side===yi&&mt.layers.test(ie.layers)){const Qn=st.side;st.side=In,st.needsUpdate=!0,Yo(mt,ne,ie,ln,st,je),st.side=Qn,st.needsUpdate=!0,nt=!0}}nt===!0&&(b.updateMultisampleRenderTarget(Ae),b.updateRenderTargetMipmap(Ae))}R.setRenderTarget(Ge),R.setClearColor(le,fe),et!==void 0&&(ie.viewport=et),R.toneMapping=Be}function ji(A,G,ne){const ie=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Ae=A.length;W<Ae;W++){const Me=A[W],Ge=Me.object,Be=Me.geometry,et=ie===null?Me.material:ie,nt=Me.group;Ge.layers.test(ne.layers)&&Yo(Ge,G,ne,Be,et,nt)}}function Yo(A,G,ne,ie,W,Ae){A.onBeforeRender(R,G,ne,ie,W,Ae),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(R,G,ne,ie,A,Ae),W.transparent===!0&&W.side===yi&&W.forceSinglePass===!1?(W.side=In,W.needsUpdate=!0,R.renderBufferDirect(ne,G,ie,W,A,Ae),W.side=Er,W.needsUpdate=!0,R.renderBufferDirect(ne,G,ie,W,A,Ae),W.side=yi):R.renderBufferDirect(ne,G,ie,W,A,Ae),A.onAfterRender(R,G,ne,ie,W,Ae)}function ts(A,G,ne){G.isScene!==!0&&(G=Ct);const ie=qe.get(A),W=g.state.lights,Ae=g.state.shadowsArray,Me=W.state.version,Ge=Ve.getParameters(A,W.state,Ae,G,ne),Be=Ve.getProgramCacheKey(Ge);let et=ie.programs;ie.environment=A.isMeshStandardMaterial?G.environment:null,ie.fog=G.fog,ie.envMap=(A.isMeshStandardMaterial?Z:T).get(A.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",rt),et=new Map,ie.programs=et);let nt=et.get(Be);if(nt!==void 0){if(ie.currentProgram===nt&&ie.lightsStateVersion===Me)return hi(A,Ge),nt}else Ge.uniforms=Ve.getUniforms(A),A.onBeforeCompile(Ge,R),nt=Ve.acquireProgram(Ge,Be),et.set(Be,nt),ie.uniforms=Ge.uniforms;const We=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=Se.uniform),hi(A,Ge),ie.needsLights=kl(A),ie.lightsStateVersion=Me,ie.needsLights&&(We.ambientLightColor.value=W.state.ambient,We.lightProbe.value=W.state.probe,We.directionalLights.value=W.state.directional,We.directionalLightShadows.value=W.state.directionalShadow,We.spotLights.value=W.state.spot,We.spotLightShadows.value=W.state.spotShadow,We.rectAreaLights.value=W.state.rectArea,We.ltc_1.value=W.state.rectAreaLTC1,We.ltc_2.value=W.state.rectAreaLTC2,We.pointLights.value=W.state.point,We.pointLightShadows.value=W.state.pointShadow,We.hemisphereLights.value=W.state.hemi,We.directionalShadowMap.value=W.state.directionalShadowMap,We.directionalShadowMatrix.value=W.state.directionalShadowMatrix,We.spotShadowMap.value=W.state.spotShadowMap,We.spotLightMatrix.value=W.state.spotLightMatrix,We.spotLightMap.value=W.state.spotLightMap,We.pointShadowMap.value=W.state.pointShadowMap,We.pointShadowMatrix.value=W.state.pointShadowMatrix),ie.currentProgram=nt,ie.uniformsList=null,nt}function qo(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Rl.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function hi(A,G){const ne=qe.get(A);ne.outputColorSpace=G.outputColorSpace,ne.batching=G.batching,ne.batchingColor=G.batchingColor,ne.instancing=G.instancing,ne.instancingColor=G.instancingColor,ne.instancingMorph=G.instancingMorph,ne.skinning=G.skinning,ne.morphTargets=G.morphTargets,ne.morphNormals=G.morphNormals,ne.morphColors=G.morphColors,ne.morphTargetsCount=G.morphTargetsCount,ne.numClippingPlanes=G.numClippingPlanes,ne.numIntersection=G.numClipIntersection,ne.vertexAlphas=G.vertexAlphas,ne.vertexTangents=G.vertexTangents,ne.toneMapping=G.toneMapping}function $o(A,G,ne,ie,W){G.isScene!==!0&&(G=Ct),b.resetTextureUnits();const Ae=G.fog,Me=ie.isMeshStandardMaterial?G.environment:null,Ge=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:qs,Be=(ie.isMeshStandardMaterial?Z:T).get(ie.envMap||Me),et=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,nt=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),We=!!ne.morphAttributes.position,gt=!!ne.morphAttributes.normal,Et=!!ne.morphAttributes.color;let mt=Mr;ie.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(mt=R.toneMapping);const ln=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,st=ln!==void 0?ln.length:0,je=qe.get(ie),Qn=g.state.lights;if($===!0&&(de===!0||A!==C)){const vn=A===C&&ie.id===P;Se.setState(ie,A,vn)}let St=!1;ie.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Qn.state.version||je.outputColorSpace!==Ge||W.isBatchedMesh&&je.batching===!1||!W.isBatchedMesh&&je.batching===!0||W.isBatchedMesh&&je.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&je.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&je.instancing===!1||!W.isInstancedMesh&&je.instancing===!0||W.isSkinnedMesh&&je.skinning===!1||!W.isSkinnedMesh&&je.skinning===!0||W.isInstancedMesh&&je.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&je.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&je.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&je.instancingMorph===!1&&W.morphTexture!==null||je.envMap!==Be||ie.fog===!0&&je.fog!==Ae||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Se.numPlanes||je.numIntersection!==Se.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==nt||je.morphTargets!==We||je.morphNormals!==gt||je.morphColors!==Et||je.toneMapping!==mt||je.morphTargetsCount!==st)&&(St=!0):(St=!0,je.__version=ie.version);let cn=je.currentProgram;St===!0&&(cn=ts(ie,G,W));let Jn=!1,qt=!1,pi=!1;const bt=cn.getUniforms(),Gn=je.uniforms;if($e.useProgram(cn.program)&&(Jn=!0,qt=!0,pi=!0),ie.id!==P&&(P=ie.id,qt=!0),Jn||C!==A){$e.buffers.depth.getReversed()?(he.copy(A.projectionMatrix),Jv(he),e0(he),bt.setValue(X,"projectionMatrix",he)):bt.setValue(X,"projectionMatrix",A.projectionMatrix),bt.setValue(X,"viewMatrix",A.matrixWorldInverse);const Wn=bt.map.cameraPosition;Wn!==void 0&&Wn.setValue(X,Le.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&bt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&bt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,qt=!0,pi=!0)}if(W.isSkinnedMesh){bt.setOptional(X,W,"bindMatrix"),bt.setOptional(X,W,"bindMatrixInverse");const vn=W.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),bt.setValue(X,"boneTexture",vn.boneTexture,b))}W.isBatchedMesh&&(bt.setOptional(X,W,"batchingTexture"),bt.setValue(X,"batchingTexture",W._matricesTexture,b),bt.setOptional(X,W,"batchingIdTexture"),bt.setValue(X,"batchingIdTexture",W._indirectTexture,b),bt.setOptional(X,W,"batchingColorTexture"),W._colorsTexture!==null&&bt.setValue(X,"batchingColorTexture",W._colorsTexture,b));const Ai=ne.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&Je.update(W,ne,cn),(qt||je.receiveShadow!==W.receiveShadow)&&(je.receiveShadow=W.receiveShadow,bt.setValue(X,"receiveShadow",W.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Gn.envMap.value=Be,Gn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&G.environment!==null&&(Gn.envMapIntensity.value=G.environmentIntensity),qt&&(bt.setValue(X,"toneMappingExposure",R.toneMappingExposure),je.needsLights&&Ko(Gn,pi),Ae&&ie.fog===!0&&Ce.refreshFogUniforms(Gn,Ae),Ce.refreshMaterialUniforms(Gn,ie,z,ue,g.state.transmissionRenderTarget[A.id]),Rl.upload(X,qo(je),Gn,b)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Rl.upload(X,qo(je),Gn,b),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&bt.setValue(X,"center",W.center),bt.setValue(X,"modelViewMatrix",W.modelViewMatrix),bt.setValue(X,"normalMatrix",W.normalMatrix),bt.setValue(X,"modelMatrix",W.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const vn=ie.uniformsGroups;for(let Wn=0,wn=vn.length;Wn<wn;Wn++){const Zo=vn[Wn];H.update(Zo,cn),H.bind(Zo,cn)}}return cn}function Ko(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function kl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,G,ne){qe.get(A.texture).__webglTexture=G,qe.get(A.depthTexture).__webglTexture=ne;const ie=qe.get(A);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){const ne=qe.get(A);ne.__webglFramebuffer=G,ne.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,ne=0){V=A,F=G,U=ne;let ie=!0,W=null,Ae=!1,Me=!1;if(A){const Be=qe.get(A);if(Be.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(X.FRAMEBUFFER,null),ie=!1;else if(Be.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Be.__hasExternalTextures)b.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(Be.__boundDepthTexture!==We){if(We!==null&&qe.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Me=!0);const nt=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[G])?W=nt[G][ne]:W=nt[G],Ae=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?W=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?W=nt[ne]:W=nt,k.copy(A.viewport),ee.copy(A.scissor),q=A.scissorTest}else k.copy(N).multiplyScalar(z).floor(),ee.copy(re).multiplyScalar(z).floor(),q=Ie;if($e.bindFramebuffer(X.FRAMEBUFFER,W)&&ie&&$e.drawBuffers(A,W),$e.viewport(k),$e.scissor(ee),$e.setScissorTest(q),Ae){const Be=qe.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,Be.__webglTexture,ne)}else if(Me){const Be=qe.get(A.texture),et=G||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Be.__webglTexture,ne||0,et)}P=-1},this.readRenderTargetPixels=function(A,G,ne,ie,W,Ae,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ge=Ge[Me]),Ge){$e.bindFramebuffer(X.FRAMEBUFFER,Ge);try{const Be=A.texture,et=Be.format,nt=Be.type;if(!ct.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-ie&&ne>=0&&ne<=A.height-W&&X.readPixels(G,ne,ie,W,it.convert(et),it.convert(nt),Ae)}finally{const Be=V!==null?qe.get(V).__webglFramebuffer:null;$e.bindFramebuffer(X.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,G,ne,ie,W,Ae,Me){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ge=Ge[Me]),Ge){const Be=A.texture,et=Be.format,nt=Be.type;if(!ct.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=A.width-ie&&ne>=0&&ne<=A.height-W){$e.bindFramebuffer(X.FRAMEBUFFER,Ge);const We=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.bufferData(X.PIXEL_PACK_BUFFER,Ae.byteLength,X.STREAM_READ),X.readPixels(G,ne,ie,W,it.convert(et),it.convert(nt),0);const gt=V!==null?qe.get(V).__webglFramebuffer:null;$e.bindFramebuffer(X.FRAMEBUFFER,gt);const Et=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Qv(X,Et,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ae),X.deleteBuffer(We),X.deleteSync(Et),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,G=null,ne=0){A.isTexture!==!0&&(ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1]);const ie=Math.pow(2,-ne),W=Math.floor(A.image.width*ie),Ae=Math.floor(A.image.height*ie),Me=G!==null?G.x:0,Ge=G!==null?G.y:0;b.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,ne,0,0,Me,Ge,W,Ae),$e.unbindTexture()},this.copyTextureToTexture=function(A,G,ne=null,ie=null,W=0){A.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,A=arguments[1],G=arguments[2],W=arguments[3]||0,ne=null);let Ae,Me,Ge,Be,et,nt,We,gt,Et;const mt=A.isCompressedTexture?A.mipmaps[W]:A.image;ne!==null?(Ae=ne.max.x-ne.min.x,Me=ne.max.y-ne.min.y,Ge=ne.isBox3?ne.max.z-ne.min.z:1,Be=ne.min.x,et=ne.min.y,nt=ne.isBox3?ne.min.z:0):(Ae=mt.width,Me=mt.height,Ge=mt.depth||1,Be=0,et=0,nt=0),ie!==null?(We=ie.x,gt=ie.y,Et=ie.z):(We=0,gt=0,Et=0);const ln=it.convert(G.format),st=it.convert(G.type);let je;G.isData3DTexture?(b.setTexture3D(G,0),je=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(b.setTexture2DArray(G,0),je=X.TEXTURE_2D_ARRAY):(b.setTexture2D(G,0),je=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);const Qn=X.getParameter(X.UNPACK_ROW_LENGTH),St=X.getParameter(X.UNPACK_IMAGE_HEIGHT),cn=X.getParameter(X.UNPACK_SKIP_PIXELS),Jn=X.getParameter(X.UNPACK_SKIP_ROWS),qt=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,mt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,mt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Be),X.pixelStorei(X.UNPACK_SKIP_ROWS,et),X.pixelStorei(X.UNPACK_SKIP_IMAGES,nt);const pi=A.isDataArrayTexture||A.isData3DTexture,bt=G.isDataArrayTexture||G.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Gn=qe.get(A),Ai=qe.get(G),vn=qe.get(Gn.__renderTarget),Wn=qe.get(Ai.__renderTarget);$e.bindFramebuffer(X.READ_FRAMEBUFFER,vn.__webglFramebuffer),$e.bindFramebuffer(X.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let wn=0;wn<Ge;wn++)pi&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(A).__webglTexture,W,nt+wn),A.isDepthTexture?(bt&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(G).__webglTexture,W,Et+wn),X.blitFramebuffer(Be,et,Ae,Me,We,gt,Ae,Me,X.DEPTH_BUFFER_BIT,X.NEAREST)):bt?X.copyTexSubImage3D(je,W,We,gt,Et+wn,Be,et,Ae,Me):X.copyTexSubImage2D(je,W,We,gt,Et+wn,Be,et,Ae,Me);$e.bindFramebuffer(X.READ_FRAMEBUFFER,null),$e.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else bt?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(je,W,We,gt,Et,Ae,Me,Ge,ln,st,mt.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(je,W,We,gt,Et,Ae,Me,Ge,ln,mt.data):X.texSubImage3D(je,W,We,gt,Et,Ae,Me,Ge,ln,st,mt):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,W,We,gt,Ae,Me,ln,st,mt.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,W,We,gt,mt.width,mt.height,ln,mt.data):X.texSubImage2D(X.TEXTURE_2D,W,We,gt,Ae,Me,ln,st,mt);X.pixelStorei(X.UNPACK_ROW_LENGTH,Qn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,St),X.pixelStorei(X.UNPACK_SKIP_PIXELS,cn),X.pixelStorei(X.UNPACK_SKIP_ROWS,Jn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,qt),W===0&&G.generateMipmaps&&X.generateMipmap(je),$e.unbindTexture()},this.copyTextureToTexture3D=function(A,G,ne=null,ie=null,W=0){return A.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,A=arguments[2],G=arguments[3],W=arguments[4]||0),ko('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,ne,ie,W)},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),$e.unbindTexture()},this.resetState=function(){F=0,U=0,V=null,$e.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),n.unpackColorSpace=xt._getUnpackColorSpace()}}class td{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new dt(e),this.density=n}clone(){return new td(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uE extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class yg extends Ks{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dl=new Q,Il=new Q,Nm=new Bt,Oo=new og,yl=new Fl,Zu=new Q,Um=new Q;class fE extends rn{constructor(e=new Vn,n=new yg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,c=n.count;a<c;a++)Dl.fromBufferAttribute(n,a-1),Il.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Dl.distanceTo(Il);e.setAttribute("lineDistance",new Ht(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(a),yl.radius+=c,e.ray.intersectsSphere(yl)===!1)return;Nm.copy(a).invert(),Oo.copy(e.ray).applyMatrix4(Nm);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=r.index,v=r.attributes.position;if(_!==null){const S=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let w=S,y=E-1;w<y;w+=m){const g=_.getX(w),I=_.getX(w+1),L=Sl(this,e,Oo,p,g,I);L&&n.push(L)}if(this.isLineLoop){const w=_.getX(E-1),y=_.getX(S),g=Sl(this,e,Oo,p,w,y);g&&n.push(g)}}else{const S=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let w=S,y=E-1;w<y;w+=m){const g=Sl(this,e,Oo,p,w,w+1);g&&n.push(g)}if(this.isLineLoop){const w=Sl(this,e,Oo,p,E-1,S);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Sl(s,e,n,r,a,c){const u=s.geometry.attributes.position;if(Dl.fromBufferAttribute(u,a),Il.fromBufferAttribute(u,c),n.distanceSqToSegment(Dl,Il,Zu,Um)>r)return;Zu.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Zu);if(!(p<e.near||p>e.far))return{distance:p,point:Um.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Fm=new Q,Om=new Q;class dE extends fE{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,c=n.count;a<c;a+=2)Fm.fromBufferAttribute(n,a),Om.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Fm.distanceTo(Om);e.setAttribute("lineDistance",new Ht(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nd extends Vn{constructor(e=1,n=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:a},n=Math.max(3,n);const c=[],u=[],d=[],p=[],m=new Q,_=new yt;u.push(0,0,0),d.push(0,0,1),p.push(.5,.5);for(let x=0,v=3;x<=n;x++,v+=3){const S=r+x/n*a;m.x=e*Math.cos(S),m.y=e*Math.sin(S),u.push(m.x,m.y,m.z),d.push(0,0,1),_.x=(u[v]/e+1)/2,_.y=(u[v+1]/e+1)/2,p.push(_.x,_.y)}for(let x=1;x<=n;x++)c.push(x,x+1,0);this.setIndex(c),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Vo extends Vn{constructor(e=1,n=1,r=1,a=32,c=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:c,openEnded:u,thetaStart:d,thetaLength:p};const m=this;a=Math.floor(a),c=Math.floor(c);const _=[],x=[],v=[],S=[];let E=0;const w=[],y=r/2;let g=0;I(),u===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new Ht(x,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(S,2));function I(){const R=new Q,Y=new Q;let F=0;const U=(n-e)/r;for(let V=0;V<=c;V++){const P=[],C=V/c,k=C*(n-e)+e;for(let ee=0;ee<=a;ee++){const q=ee/a,le=q*p+d,fe=Math.sin(le),ae=Math.cos(le);Y.x=k*fe,Y.y=-C*r+y,Y.z=k*ae,x.push(Y.x,Y.y,Y.z),R.set(fe,U,ae).normalize(),v.push(R.x,R.y,R.z),S.push(q,1-C),P.push(E++)}w.push(P)}for(let V=0;V<a;V++)for(let P=0;P<c;P++){const C=w[P][V],k=w[P+1][V],ee=w[P+1][V+1],q=w[P][V+1];(e>0||P!==0)&&(_.push(C,k,q),F+=3),(n>0||P!==c-1)&&(_.push(k,ee,q),F+=3)}m.addGroup(g,F,0),g+=F}function L(R){const Y=E,F=new yt,U=new Q;let V=0;const P=R===!0?e:n,C=R===!0?1:-1;for(let ee=1;ee<=a;ee++)x.push(0,y*C,0),v.push(0,C,0),S.push(.5,.5),E++;const k=E;for(let ee=0;ee<=a;ee++){const le=ee/a*p+d,fe=Math.cos(le),ae=Math.sin(le);U.x=P*ae,U.y=y*C,U.z=P*fe,x.push(U.x,U.y,U.z),v.push(0,C,0),F.x=fe*.5+.5,F.y=ae*.5*C+.5,S.push(F.x,F.y),E++}for(let ee=0;ee<a;ee++){const q=Y+ee,le=k+ee;R===!0?_.push(le,le+1,q):_.push(le+1,le,q),V+=3}m.addGroup(g,V,R===!0?1:2),g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bo extends Vo{constructor(e=1,n=1,r=32,a=1,c=!1,u=0,d=Math.PI*2){super(0,e,n,r,a,c,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:d}}static fromJSON(e){return new Bo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class id extends Vn{constructor(e=.5,n=1,r=32,a=1,c=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:a,thetaStart:c,thetaLength:u},r=Math.max(3,r),a=Math.max(1,a);const d=[],p=[],m=[],_=[];let x=e;const v=(n-e)/a,S=new Q,E=new yt;for(let w=0;w<=a;w++){for(let y=0;y<=r;y++){const g=c+y/r*u;S.x=x*Math.cos(g),S.y=x*Math.sin(g),p.push(S.x,S.y,S.z),m.push(0,0,1),E.x=(S.x/n+1)/2,E.y=(S.y/n+1)/2,_.push(E.x,E.y)}x+=v}for(let w=0;w<a;w++){const y=w*(r+1);for(let g=0;g<r;g++){const I=g+y,L=I,R=I+r+1,Y=I+r+2,F=I+1;d.push(L,R,F),d.push(R,Y,F)}}this.setIndex(d),this.setAttribute("position",new Ht(p,3)),this.setAttribute("normal",new Ht(m,3)),this.setAttribute("uv",new Ht(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new id(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vr extends Vn{constructor(e=1,n=32,r=16,a=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:c,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let m=0;const _=[],x=new Q,v=new Q,S=[],E=[],w=[],y=[];for(let g=0;g<=r;g++){const I=[],L=g/r;let R=0;g===0&&u===0?R=.5/n:g===r&&p===Math.PI&&(R=-.5/n);for(let Y=0;Y<=n;Y++){const F=Y/n;x.x=-e*Math.cos(a+F*c)*Math.sin(u+L*d),x.y=e*Math.cos(u+L*d),x.z=e*Math.sin(a+F*c)*Math.sin(u+L*d),E.push(x.x,x.y,x.z),v.copy(x).normalize(),w.push(v.x,v.y,v.z),y.push(F+R,1-L),I.push(m++)}_.push(I)}for(let g=0;g<r;g++)for(let I=0;I<n;I++){const L=_[g][I+1],R=_[g][I],Y=_[g+1][I],F=_[g+1][I+1];(g!==0||u>0)&&S.push(L,R,F),(g!==r-1||p<Math.PI)&&S.push(R,Y,F)}this.setIndex(S),this.setAttribute("position",new Ht(E,3)),this.setAttribute("normal",new Ht(w,3)),this.setAttribute("uv",new Ht(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sn extends Ks{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tg,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rd extends rn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class hE extends rd{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Qu=new Bt,km=new Q,zm=new Q;class pE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qf,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;km.setFromMatrixPosition(e.matrixWorld),n.position.copy(km),zm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(zm),n.updateMatrixWorld(),Qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mE extends pE{constructor(){super(new Jf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gE extends rd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new mE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _E extends rd{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class vE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Bm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Bm(){return performance.now()}class xE extends dE{constructor(e=10,n=10,r=4473924,a=8947848){r=new dt(r),a=new dt(a);const c=n/2,u=e/n,d=e/2,p=[],m=[];for(let v=0,S=0,E=-d;v<=n;v++,E+=u){p.push(-d,0,E,d,0,E),p.push(E,0,-d,E,0,d);const w=v===c?r:a;w.toArray(m,S),S+=3,w.toArray(m,S),S+=3,w.toArray(m,S),S+=3,w.toArray(m,S),S+=3}const _=new Vn;_.setAttribute("position",new Ht(p,3)),_.setAttribute("color",new Ht(m,3));const x=new yg({vertexColors:!0,toneMapped:!1});super(_,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wf);class yE{constructor(e){this.canvas=e,this.objects=[],this.highlighted=null,this.init()}init(){this.scene=new uE,this.scene.background=new dt(8900331),this.scene.fog=new td(8900331,.012),this.renderer=new cE({canvas:this.canvas,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Gm,this.renderer.outputColorSpace=Hn;const e=window.innerWidth/window.innerHeight;this.frustumSize=18,this.camera=new Jf(-this.frustumSize*e,this.frustumSize*e,this.frustumSize,-this.frustumSize,.1,1e3),this.camera.position.set(25,25,25),this.camera.lookAt(0,0,0);const n=new _E(16774630,.55);this.scene.add(n);const r=new hE(8900331,9498256,.35);this.scene.add(r),this.sunLight=new gE(16775920,.9),this.sunLight.position.set(15,30,15),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera.left=-30,this.sunLight.shadow.camera.right=30,this.sunLight.shadow.camera.top=30,this.sunLight.shadow.camera.bottom=-30,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=100,this.sunLight.shadow.bias=-.001,this.scene.add(this.sunLight),this.createGround(),this.createStarterObjects(),window.addEventListener("resize",this.onResize.bind(this)),this.clock=new vE,this.animate()}createGround(){const e=new Zr(60,60),n=new Sn({color:8308816}),r=new It(e,n);r.rotation.x=-Math.PI/2,r.receiveShadow=!0,this.scene.add(r);const a=new xE(60,30,5942581,5942581);a.material.opacity=.15,a.material.transparent=!0,a.position.y=.01,this.scene.add(a);for(let c=0;c<40;c++){const u=new nd(.25+Math.random()*.3,6),d=new Sn({color:new dt().setHSL(.28,.5+Math.random()*.3,.45+Math.random()*.15)}),p=new It(u,d);p.rotation.x=-Math.PI/2,p.position.set((Math.random()-.5)*50,.02,(Math.random()-.5)*50),this.scene.add(p)}}createStarterObjects(){this.addTree(-3,-2),this.addTree(5,3),this.addTree(-6,5),this.addFlower(1,-1),this.addFlower(2,1),this.addFlower(-1,3),this.addFlower(4,-3),this.addHouse(8,-5),this.addAnimal(0,4)}addTree(e,n){const r=new yr;r.userData={type:"tree",id:`tree_${Date.now()}_${Math.random()}`};const a=new Vo(.15,.22,1.4,8),c=new Sn({color:9133628}),u=new It(a,c);u.position.y=.7,u.castShadow=!0,r.add(u);const d=[2984526,3841374,4763752];for(let p=0;p<3;p++){const m=new Bo(.9-p*.15,.9,8),_=new Sn({color:d[p]}),x=new It(m,_);x.position.y=1.6+p*.55,x.castShadow=!0,r.add(x)}return r.position.set(e,0,n),this.scene.add(r),this.objects.push(r),r}addFlower(e,n){const r=new yr;r.userData={type:"flower",id:`flower_${Date.now()}_${Math.random()}`};const a=new Vo(.03,.03,.5,6),c=new Sn({color:4890175}),u=new It(a,c);u.position.y=.25,r.add(u);const d=[16744115,16757575,10980346,16739179,4906624],p=d[Math.floor(Math.random()*d.length)];for(let v=0;v<5;v++){const S=new vr(.12,8,8),E=new Sn({color:p}),w=new It(S,E),y=v/5*Math.PI*2;w.position.set(Math.cos(y)*.15,.55,Math.sin(y)*.15),w.scale.set(1,.5,1),r.add(w)}const m=new vr(.08,8,8),_=new Sn({color:16766720}),x=new It(m,_);return x.position.y=.55,r.add(x),r.position.set(e,0,n),this.scene.add(r),this.objects.push(r),r}addHouse(e,n){const r=new yr;r.userData={type:"house",id:`house_${Date.now()}_${Math.random()}`};const a=new Zs(2,1.5,1.8),c=new Sn({color:16774630}),u=new It(a,c);u.position.y=.75,u.castShadow=!0,u.receiveShadow=!0,r.add(u);const d=new Bo(1.6,1,4),p=new Sn({color:13919050}),m=new It(d,p);m.position.y=2,m.rotation.y=Math.PI/4,m.castShadow=!0,r.add(m);const _=new Zr(.4,.7),x=new Sn({color:9133628}),v=new It(_,x);v.position.set(0,.35,.91),r.add(v);const S=new Zr(.35,.35),E=new Sn({color:8900331}),w=new It(S,E);return w.position.set(.6,1,.91),r.add(w),r.position.set(e,0,n),this.scene.add(r),this.objects.push(r),r}addAnimal(e,n){const r=new yr;r.userData={type:"animal",id:`animal_${Date.now()}_${Math.random()}`,state:"sleeping"};const a=new vr(.4,12,8),c=new Sn({color:15259063}),u=new It(a,c);u.scale.set(1.3,.8,1),u.position.y=.3,u.castShadow=!0,r.add(u);const d=new vr(.25,12,8),p=new Sn({color:15259063}),m=new It(d,p);m.position.set(.45,.4,0),m.castShadow=!0,r.add(m);for(let y of[-1,1]){const g=new Bo(.08,.2,6),I=new Sn({color:16107168}),L=new It(g,I);L.position.set(.45,.65,y*.15),r.add(L)}const _=new vr(.04,8,8),x=new Sn({color:3355443}),v=new It(_,x);v.position.set(.65,.45,.1),v.scale.y=.2,r.add(v);const S=new vr(.06,6,6),E=new Ll({color:10980346,transparent:!0,opacity:.7}),w=new It(S,E);return w.position.set(.6,.9,0),w.name="sleepIndicator",r.add(w),r.position.set(e,0,n),this.scene.add(r),this.objects.push(r),r}highlightObject(e){if(this.clearHighlight(),!e)return;const n=new It(new id(.6,.8,24),new Ll({color:16766720,side:yi,transparent:!0,opacity:.6}));n.rotation.x=-Math.PI/2,n.position.y=.02,n.name="__highlight__",e.add(n),this.highlighted=e}clearHighlight(){if(this.highlighted){const e=this.highlighted.getObjectByName("__highlight__");e&&this.highlighted.remove(e),this.highlighted=null}}wakeAnimal(e){if(!e||e.userData.type!=="animal")return;e.userData.state="awake";const n=e.getObjectByName("sleepIndicator");n&&e.remove(n),e.children.forEach(r=>{var a;((a=r.geometry)==null?void 0:a.type)==="SphereGeometry"&&r.scale.y<.5&&(r.scale.y=1)})}growSeed(e,n){const r=this.addTree(e,n);return r.scale.set(.01,.01,.01),r.userData.growing=!0,r.userData.growTarget=1,r}animate(){requestAnimationFrame(this.animate.bind(this));const e=this.clock.getElapsedTime();if(this.objects.forEach(n=>{if(n.userData.growing){const r=n.scale.x,a=n.userData.growTarget||1;r<a-.01?n.scale.setScalar(r+(a-r)*.03):(n.scale.setScalar(a),n.userData.growing=!1)}if(n.userData.type==="flower"&&(n.rotation.z=Math.sin(e*1.5+n.position.x)*.05),n.userData.type==="animal"&&n.userData.state==="sleeping"){const r=n.getObjectByName("sleepIndicator");r&&(r.position.y=.9+Math.sin(e*2)*.15,r.material.opacity=.4+Math.sin(e*3)*.3)}}),this.highlighted){const n=this.highlighted.getObjectByName("__highlight__");n&&(n.material.opacity=.4+Math.sin(e*4)*.25,n.scale.setScalar(1+Math.sin(e*3)*.08))}this.renderer.render(this.scene,this.camera)}onResize(){const e=window.innerWidth/window.innerHeight;this.camera.left=-this.frustumSize*e,this.camera.right=this.frustumSize*e,this.camera.top=this.frustumSize,this.camera.bottom=-this.frustumSize,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}dispose(){window.removeEventListener("resize",this.onResize.bind(this)),this.renderer.dispose()}}const SE=1200;class ME{constructor(){this.listeners=[],this._lastGaze={x:0,y:0,time:0},this._dwellFired=!1,this.voiceReady=!1,this.eyeReady=!1,this.gestureReady=!1}onAction(e){this.listeners.push(e)}_emit(e,n,r={}){this.listeners.forEach(a=>a({action:e,source:n,data:r}))}initVoice(){const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e){console.warn("[Input] Speech Recognition not available in this browser.");return}this.recognition=new e,this.recognition.continuous=!0,this.recognition.interimResults=!1,this.recognition.lang="en-US",this.recognition.onresult=n=>{const r=n.results[n.results.length-1][0].transcript.trim().toLowerCase();console.log(`[Voice] "${r}"`),this._matchVoiceCommand(r)},this.recognition.onerror=n=>{console.warn("[Voice] error",n.error),n.error!=="aborted"&&setTimeout(()=>this.recognition.start(),500)},this.recognition.onend=()=>{try{this.recognition.start()}catch{}};try{this.recognition.start(),this.voiceReady=!0,console.log("[Input] ✅ Voice recognition started")}catch{console.warn("[Input] Could not start voice recognition")}}_matchVoiceCommand(e){const n=[{keywords:["grow","plant","seed","tree"],action:"grow"},{keywords:["wake","hello animal","hey"],action:"wake"},{keywords:["catch","light","orb"],action:"catch"},{keywords:["move","drag"],action:"move"},{keywords:["sun","day"],action:"sun"},{keywords:["moon","night"],action:"moon"},{keywords:["hello","hi"],action:"chat_hello"},{keywords:["good job","nice","great"],action:"chat_goodjob"},{keywords:["help"],action:"chat_help"},{keywords:["build","house"],action:"build"}];for(const r of n)if(r.keywords.some(a=>e.includes(a))){this._emit(r.action,"voice",{transcript:e});return}this._emit("unknown","voice",{transcript:e})}initEyeTracking(){if(typeof window.webgazer>"u"){console.warn("[Input] WebGazer.js not loaded. Include it via <script> in index.html.");return}window.webgazer.setGazeListener(e=>{e&&this._processGaze(e.x,e.y)}).begin(),window.webgazer.showVideo(!1),window.webgazer.showPredictionPoints(!1),window.webgazer.showFaceOverlay(!1),window.webgazer.showFaceFeedbackBox(!1),this.eyeReady=!0,console.log("[Input] ✅ Eye tracking started (WebGazer)")}_processGaze(e,n){const r=Math.abs(e-this._lastGaze.x),a=Math.abs(n-this._lastGaze.y),c=Date.now();if(r>60||a>60){this._lastGaze={x:e,y:n,time:c},this._dwellFired=!1,this._emit("gaze_move","eye",{x:e,y:n});return}!this._dwellFired&&c-this._lastGaze.time>=SE&&(this._dwellFired=!0,this._emit("gaze_select","eye",{x:this._lastGaze.x,y:this._lastGaze.y}),console.log(`[Eye] Dwell select at (${Math.round(e)}, ${Math.round(n)})`))}initGestures(){console.log("[Input] ✅ Gesture system ready (call processHandLandmarks when MediaPipe data arrives)"),this.gestureReady=!0}processHandLandmarks(e){if(!e||e.length===0)return;const n=this._classifyGesture(e);n&&this._emit(n,"gesture",{landmarks:e})}_classifyGesture(e){const n=e[4],r=e[8],a=e[12],c=e[16],u=e[20],d=e[6],p=e[10],m=e[14],_=e[18],x=[r.y<d.y,a.y<p.y,c.y<m.y,u.y<_.y],v=x.filter(Boolean).length;return v===4?"open_palm":v===1&&x[0]?"point":Math.hypot(n.x-r.x,n.y-r.y)<.05?"pinch":v===0?"fist":null}say(e){if(!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const n=new SpeechSynthesisUtterance(e);n.pitch=1.25,n.rate=.85,n.volume=.9,speechSynthesis.speak(n)}initAll(){this.initVoice(),this.initEyeTracking(),this.initGestures()}dispose(){if(this.recognition)try{this.recognition.stop()}catch{}if(typeof window.webgazer<"u")try{window.webgazer.end()}catch{}}}function EE({onStart:s}){return Ee.jsxs("div",{className:"welcome-screen",role:"dialog","aria-label":"Welcome",children:[Ee.jsx("div",{className:"sparkles",children:"🌳✨🦋"}),Ee.jsx("h1",{children:"Magic World Builder"}),Ee.jsxs("p",{children:["Welcome to our magical world! 🌸",Ee.jsx("br",{}),"Look, wave, tap, or speak — and watch the world come alive."]}),Ee.jsx("button",{className:"start-btn",onClick:s,"aria-label":"Start playing",autoFocus:!0,children:"🎮 Let's Play!"})]})}const wE=[{emoji:"👋",text:"Hello!"},{emoji:"👀",text:"Look here!"},{emoji:"🚶",text:"Follow me!"},{emoji:"🆘",text:"Help me!"},{emoji:"🏗️",text:"Let's build!"},{emoji:"🎉",text:"Good job!"},{emoji:"🙏",text:"Thank you!"},{emoji:"🤩",text:"Wow, beautiful!"}];function TE({onSend:s}){const[e,n]=Rt.useState(!1),r=a=>{s(a),n(!1)};return Ee.jsxs("div",{className:"quick-chat",children:[e&&Ee.jsx("div",{className:"chat-messages-grid",role:"menu","aria-label":"Quick chat messages",children:wE.map((a,c)=>Ee.jsxs("button",{className:"chat-msg-btn",onClick:()=>r(a),role:"menuitem","aria-label":a.text,children:[Ee.jsx("span",{children:a.emoji})," ",a.text]},c))}),Ee.jsx("button",{className:"chat-toggle-btn",onClick:()=>n(!e),"aria-label":e?"Close chat":"Open quick chat",title:"Quick Chat",children:"💬"})]})}const AE=[{id:"eye",icon:"👁️",label:"Eye Tracking",desc:"Look at objects to select them"},{id:"voice",icon:"🎤",label:"Voice Tracking",desc:"Speak commands to play"},{id:"gesture",icon:"✋",label:"Gesture Tracking",desc:"Wave or point with your hands"},{id:"tap",icon:"👆",label:"Tap & Drag",desc:"Touch or click to interact"}];function CE({onConfirm:s}){const[e,n]=Rt.useState(["tap"]),r=a=>{n(c=>c.includes(a)?c.filter(u=>u!==a):[...c,a])};return Ee.jsx("div",{className:"selection-screen",children:Ee.jsxs("div",{className:"selection-card",children:[Ee.jsx("h1",{children:"🎮 Choose Your Input"}),Ee.jsx("p",{children:"Pick how you'd like to play. You can choose more than one!"}),Ee.jsx("div",{className:"input-grid",children:AE.map(a=>Ee.jsxs("button",{className:`input-card ${e.includes(a.id)?"selected":""}`,onClick:()=>r(a.id),"aria-pressed":e.includes(a.id),"aria-label":`${a.label}: ${a.desc}`,children:[Ee.jsx("span",{className:"input-card-icon",children:a.icon}),Ee.jsx("span",{className:"input-card-label",children:a.label}),Ee.jsx("span",{className:"input-card-desc",children:a.desc}),e.includes(a.id)&&Ee.jsx("span",{className:"check-mark",children:"✓"})]},a.id))}),Ee.jsx("button",{className:"confirm-btn",onClick:()=>s(e),disabled:e.length===0,children:"✨ Continue"})]})})}const RE=[{id:"cognitive",icon:"🧠",label:"Cognitive",color:"#7c5cbf",desc:"Memory, patterns, problem solving"},{id:"fine-motor",icon:"✋",label:"Fine Motor",color:"#e8734a",desc:"Precise hand movements & control"},{id:"gross-motor",icon:"🏃",label:"Gross Motor",color:"#4aa8e8",desc:"Larger body movements & balance"},{id:"social-emotional",icon:"💛",label:"Social Emotion",color:"#e84a88",desc:"Feelings, sharing & teamwork"}];function PE({onConfirm:s}){return Ee.jsx("div",{className:"selection-screen",children:Ee.jsxs("div",{className:"selection-card",children:[Ee.jsx("h1",{children:"🌟 Choose Your Skill"}),Ee.jsx("p",{children:"What would you like to practice today?"}),Ee.jsx("div",{className:"skill-grid",children:RE.map(e=>Ee.jsxs("button",{className:"skill-card",style:{"--skill-color":e.color},onClick:()=>s(e.label),"aria-label":`${e.label}: ${e.desc}`,children:[Ee.jsx("span",{className:"skill-card-icon",children:e.icon}),Ee.jsx("span",{className:"skill-card-label",children:e.label}),Ee.jsx("span",{className:"skill-card-desc",children:e.desc})]},e.id))})]})})}function bE({items:s,onPlace:e}){return Ee.jsxs("div",{className:"island-sidebar",role:"navigation","aria-label":"Island items",children:[Ee.jsx("div",{className:"sidebar-title",children:"🏝️ Island"}),s.map((n,r)=>Ee.jsxs("button",{className:`sidebar-item ${n.unlocked?"unlocked":"locked"}`,onClick:()=>e(n),disabled:!n.unlocked,"aria-label":`${n.unlocked?"Place":"Locked"}: ${n.name}${n.cost?` (${n.cost} coins)`:""}`,title:n.unlocked?`Place ${n.name}`:`Unlock at ${n.cost} 🪙`,children:[Ee.jsx("span",{className:"sidebar-item-icon",children:n.icon}),!n.unlocked&&Ee.jsxs("span",{className:"sidebar-lock",children:["🔒 ",n.cost]})]},r))]})}const LE=[{id:"grow",emoji:"🌱",title:"Grow the Garden",description:"Nurture seeds into beautiful trees and flowers!",reward:{coins:20,xp:15},skill:"cognitive"},{id:"wake",emoji:"🐰",title:"Wake the Animal",description:"Gently wake sleeping forest friends!",reward:{coins:18,xp:12},skill:"social-emotional"},{id:"catch",emoji:"✨",title:"Catch the Light",description:"Collect glowing orbs drifting through the sky!",reward:{coins:22,xp:18},skill:"fine-motor"},{id:"sun",emoji:"🌅",title:"Move the Sun",description:"Change the sky from day to night and back!",reward:{coins:15,xp:10},skill:"gross-motor"},{id:"color",emoji:"🎨",title:"Color the World",description:"Paint the flowers and trees with magical colors!",reward:{coins:25,xp:20},skill:"cognitive"},{id:"music",emoji:"🎵",title:"Forest Melody",description:"Tap the mushrooms to play a gentle song!",reward:{coins:20,xp:15},skill:"fine-motor"}];function DE({onSelectGame:s,onBack:e,selectedSkill:n}){const[r,a]=Rt.useState(null),c=u=>{if(!n)return!0;const d=n.toLowerCase();return u.skill.includes(d)||d.includes("cognitive")&&u.skill==="cognitive"||d.includes("motor")&&u.skill.includes("motor")||d.includes("social")&&u.skill==="social-emotional"};return Ee.jsx("div",{className:"game-selector-screen",children:Ee.jsxs("div",{className:"game-selector-card",children:[Ee.jsx("button",{className:"back-btn",onClick:e,"aria-label":"Go back",children:"← Back"}),Ee.jsx("h1",{children:"🎮 Choose a Mini-Game"}),Ee.jsx("p",{children:"Pick a game to play and earn coins & XP!"}),Ee.jsx("div",{className:"game-grid",children:LE.map(u=>Ee.jsxs("button",{className:`game-tile ${c(u)?"relevant":"dim"} ${r===u.id?"hovered":""}`,onClick:()=>s(u),onMouseEnter:()=>a(u.id),onMouseLeave:()=>a(null),"aria-label":`${u.title}: ${u.description}. Rewards: ${u.reward.coins} coins, ${u.reward.xp} XP`,children:[Ee.jsx("span",{className:"game-tile-emoji",children:u.emoji}),Ee.jsx("span",{className:"game-tile-title",children:u.title}),Ee.jsx("span",{className:"game-tile-desc",children:u.description}),Ee.jsxs("span",{className:"game-tile-reward",children:["🪙 ",u.reward.coins,"   ⭐ ",u.reward.xp," XP"]})]},u.id))})]})})}const an={WELCOME:"welcome",INPUT_SELECT:"input_select",SKILL_SELECT:"skill_select",ISLAND_VIEW:"island_view",GAME_SELECT:"game_select",PLAYING_GAME:"playing_game"},Ju=[{coins:0,add:"tree"},{coins:20,add:"flower"},{coins:40,add:"flower"},{coins:60,add:"tree"},{coins:80,add:"animal"},{coins:100,add:"tree"},{coins:120,add:"flower"},{coins:150,add:"house"},{coins:180,add:"tree"},{coins:200,add:"animal"},{coins:230,add:"flower"},{coins:260,add:"tree"},{coins:300,add:"house"},{coins:350,add:"tree"},{coins:400,add:"animal"},{coins:450,add:"flower"},{coins:500,add:"house"}],ef=["Meadow","Forest","Village","Castle","Fantasy Land"],Ml=80,IE=5;function NE(){const s=Rt.useRef(null),e=Rt.useRef(null),n=Rt.useRef(null),r=Rt.useRef(0),[a,c]=Rt.useState(an.WELCOME),[u,d]=Rt.useState(0),[p,m]=Rt.useState(0),[_,x]=Rt.useState(1),[v,S]=Rt.useState([]),[E,w]=Rt.useState(null),[y,g]=Rt.useState(null),[I,L]=Rt.useState(0),[R,Y]=Rt.useState(null),[F,U]=Rt.useState(null),[V,P]=Rt.useState(!1),[C,k]=Rt.useState([{name:"Grass Patch",icon:"🌿",unlocked:!0},{name:"Small Tree",icon:"🌱",unlocked:!0},{name:"Flower Bed",icon:"🌸",unlocked:!1,cost:30},{name:"Stone Path",icon:"🪨",unlocked:!1,cost:60},{name:"Little House",icon:"🏠",unlocked:!1,cost:100},{name:"Castle Tower",icon:"🏰",unlocked:!1,cost:200},{name:"Magic Bridge",icon:"🌉",unlocked:!1,cost:300},{name:"Dragon Friend",icon:"🐉",unlocked:!1,cost:500}]);Rt.useEffect(()=>{if(a!==an.ISLAND_VIEW&&a!==an.GAME_SELECT&&a!==an.PLAYING_GAME||!s.current||e.current)return;const $=new yE(s.current);e.current=$;const de=new ME;return n.current=de,v.includes("voice")&&de.initVoice(),v.includes("eye")&&de.initEyeTracking(),v.includes("gesture")&&de.initGestures(),de.onAction(({action:he,source:we})=>{console.log(`[Game] Action: ${he} from ${we}`)}),P(!0),()=>{$.dispose(),de.dispose(),e.current=null}},[a,v]),Rt.useEffect(()=>{const $=e.current;if(!$)return;let de=r.current;for(let he=de;he<Ju.length&&u>=Ju[he].coins;he++){const we=Ju[he],Le=(Math.random()-.5)*18,Ye=(Math.random()-.5)*18;switch(we.add){case"tree":$.growSeed(Le,Ye);break;case"flower":$.addFlower(Le,Ye);break;case"animal":$.addAnimal(Le,Ye);break;case"house":$.addHouse(Le,Ye);break}de=he+1}r.current=de},[u]),Rt.useEffect(()=>{p>=Ml*_&&_<IE&&(x($=>$+1),q(`🎉 Level Up! Welcome to ${ef[Math.min(_,ef.length-1)]}!`))},[p]),Rt.useEffect(()=>{k($=>$.map(de=>!de.unlocked&&de.cost&&u>=de.cost?{...de,unlocked:!0}:de))},[u]);const ee=Rt.useCallback($=>{Y($),n.current&&n.current.say($),setTimeout(()=>Y(null),3e3)},[]),q=Rt.useCallback($=>{U($),setTimeout(()=>U(null),2500)},[]),le=Rt.useCallback(()=>{y&&L($=>{const de=Math.min($+20+Math.floor(Math.random()*10),100);if(de>=100){const he=y.reward;d(we=>we+he.coins),m(we=>we+he.xp),q(`${y.emoji} Complete! +${he.coins} 🪙  +${he.xp} ⭐`),ee(`Great job! You finished ${y.title}!`),setTimeout(()=>{g(null),L(0),c(an.ISLAND_VIEW)},1500)}return de})},[y,q,ee]),fe=()=>c(an.INPUT_SELECT),ae=$=>{S($),c(an.SKILL_SELECT)},ue=$=>{w($),c(an.ISLAND_VIEW),setTimeout(()=>{n.current&&n.current.say("Welcome to your magical island!")},800)},z=()=>c(an.GAME_SELECT),ce=$=>{g($),L(0),c(an.PLAYING_GAME)},se=()=>{g(null),L(0),c(an.ISLAND_VIEW)},N=Rt.useCallback($=>{ee(`${$.emoji} ${$.text}`)},[ee]),re=V&&!v.includes("tap")?{}:{},Ie=p-Ml*(_-1),J=Math.min(Ie/Ml*100,100);return Ee.jsxs(Ee.Fragment,{children:[Ee.jsx("canvas",{ref:s,id:"game-canvas"}),Ee.jsxs("div",{className:"overlay",style:re,children:[a===an.WELCOME&&Ee.jsx(EE,{onStart:fe}),a===an.INPUT_SELECT&&Ee.jsx(CE,{onConfirm:ae}),a===an.SKILL_SELECT&&Ee.jsx(PE,{onConfirm:ue}),a===an.ISLAND_VIEW&&Ee.jsxs(Ee.Fragment,{children:[Ee.jsxs("div",{className:"hud",children:[Ee.jsxs("div",{className:"hud-badge coin-badge",children:["🪙 ",u]}),Ee.jsxs("div",{className:"hud-badge level-badge",children:["⭐ Lv.",_," — ",ef[_-1]]}),Ee.jsxs("div",{className:"hud-badge skill-badge",children:["🧠 ",E]})]}),Ee.jsxs("div",{className:"progress-bar-container",children:[Ee.jsx("div",{className:"progress-bar-fill",style:{width:`${J}%`}}),Ee.jsxs("span",{className:"progress-bar-text",children:["XP: ",Ie,"/",Ml]})]}),Ee.jsx(bE,{items:C,onPlace:$=>{const de=e.current;if(!de||!$.unlocked)return;const he=(Math.random()-.5)*14,we=(Math.random()-.5)*14;$.name.includes("Tree")||$.name.includes("Grass")?de.addTree(he,we):$.name.includes("Flower")?de.addFlower(he,we):$.name.includes("House")||$.name.includes("Castle")||$.name.includes("Bridge")?de.addHouse(he,we):$.name.includes("Dragon")?de.addAnimal(he,we):de.addFlower(he,we),ee(`${$.icon} ${$.name} placed!`)}}),Ee.jsxs("div",{className:"start-game-area",children:[Ee.jsx("button",{className:"start-game-btn",onClick:z,children:"🎮 Start Game"}),Ee.jsx("p",{className:"start-game-hint",children:"Play mini-games to earn coins & grow your island!"})]}),R&&Ee.jsx("div",{className:"speech-bubble",role:"status","aria-live":"polite",children:R}),F&&Ee.jsx("div",{className:"success-toast",role:"alert",children:F}),Ee.jsx(TE,{onSend:N})]}),a===an.GAME_SELECT&&Ee.jsx(DE,{onSelectGame:ce,onBack:se,selectedSkill:E}),a===an.PLAYING_GAME&&y&&Ee.jsxs(Ee.Fragment,{children:[Ee.jsxs("div",{className:"hud",children:[Ee.jsxs("div",{className:"hud-badge coin-badge",children:["🪙 ",u]}),Ee.jsxs("div",{className:"hud-badge level-badge",children:["⭐ Lv.",_]})]}),Ee.jsx("div",{className:"active-game-overlay",children:Ee.jsxs("div",{className:"active-game-card",children:[Ee.jsx("button",{className:"back-btn small",onClick:se,children:"← Back"}),Ee.jsx("span",{className:"active-game-emoji",children:y.emoji}),Ee.jsx("h2",{children:y.title}),Ee.jsx("p",{children:y.description}),Ee.jsx("div",{className:"game-progress-bar",children:Ee.jsx("div",{className:"game-progress-fill",style:{width:`${I}%`}})}),Ee.jsxs("span",{className:"game-progress-label",children:[I,"% complete"]}),I<100?Ee.jsxs("button",{className:"game-action-btn",onClick:le,children:[y.emoji," Tap / Look / Wave to Play!"]}):Ee.jsxs("div",{className:"game-complete-msg",children:["✅ Complete! +",y.reward.coins," 🪙 +",y.reward.xp," ⭐"]}),Ee.jsxs("div",{className:"game-reward-preview",children:["Reward: 🪙 ",y.reward.coins," coins   ⭐ ",y.reward.xp," XP"]})]})}),R&&Ee.jsx("div",{className:"speech-bubble",role:"status","aria-live":"polite",children:R}),F&&Ee.jsx("div",{className:"success-toast",role:"alert",children:F})]})]})]})}cv.createRoot(document.getElementById("root")).render(Ee.jsx(nv.StrictMode,{children:Ee.jsx(NE,{})}));
