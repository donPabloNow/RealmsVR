(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{0:function(e,t,n){n("55Il"),n("p2bk"),e.exports=n("7RL8")},1:function(e,t){},"7RL8":function(e,t,n){"use strict";n.r(t);var r=n("YHGo"),i=n("q1tI"),c=n.n(i),o=n("i8i4"),a=n("ANjH"),u=n("Igns"),s=n("/MKj"),l=n("gyEF"),f=n.n(l),p=n("aJ4A"),h=n("sINF"),y=n("N2Rb"),d="REALM/FETCH_FULFILLED",m="REALM/UPDATE_GEOMETRY",b="REALM/UPDATE_VOXELS",v="REALM/RESET",g="USER/REFRESH_SESSION_FULFILLED",w="USER/REFRESH_SESSION_REJECTED",O="USER/SIGNOUT";function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseURL="https://projects.gatunes.com/realmsvr/"}var t,n,r;return t=e,(n=[{key:"fetch",value:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(e){var t=e.body,n=e.endpoint,r=e.headers,o=void 0===r?{}:r,i=e.method,a=void 0===i?"GET":i,c=this.authorization,u=this.baseURL;return c&&(o.Authorization=c),!t||t instanceof FormData||(t=JSON.stringify(t),o["Content-Type"]="application/json"),fetch("".concat(u).concat(n),{body:t,headers:o,method:a}).then(function(e){var t=e.headers,n=e.status;if(n<200||400<=n)throw new Error(n);switch((t.get("Content-Type")||"").split(";")[0]){case"text/plain":return e.arrayBuffer();case"application/json":return e.json();default:return e}})})},{key:"setAuthorization",value:function(e){e?this.authorization="Bearer ".concat(e):delete this.authorization,this.token=e}}])&&E(t.prototype,n),r&&E(t,r),e}());function _(e){return e?{type:g,payload:e}:function(e){return e({type:"USER/REFRESH_SESSION",payload:S.fetch({endpoint:"user"})}).catch(function(){})}}n("bo1M");var j=n("wcCE");var x={en:{NotFound:{description:"This is not the web page you're looking for.",goBack:"Take me back home"},User:{signIn:"Sign-In",signOut:"Sign-Out"}},es:{NotFound:{description:"Esta no es la página que estás buscando.",goBack:"Volver al inicio"},User:{signIn:"Iniciar sesión",signOut:"Cerrar sesión"}}},R=Object.keys(x),k="en",P={};R.forEach(function(e){P[e]=Object(j.recursive)(!0,x.en,x[e])});var A=Object(a.c)({realms:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length?arguments[1]:void 0;switch(t.type){case"LOBBY/FETCH_REALMS_FULFILLED":return t.payload;default:return e}}}),M=Object(a.c)({geometry:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0;switch(t.type){case m:return t.payload.geometry;case v:return{};default:return e}},id:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length?arguments[1]:void 0;switch(t.type){case d:return t.payload._id;case v:return"";default:return e}},name:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length?arguments[1]:void 0;switch(t.type){case d:return t.payload.name;case v:return"";default:return e}},size:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=1<arguments.length?arguments[1]:void 0;switch(t.type){case d:return t.payload.size;case v:return 0;default:return e}},voxels:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:new Uint32Array,t=1<arguments.length?arguments[1]:void 0;switch(t.type){case d:case b:return t.payload.voxels;case v:return new Uint32Array;default:return e}}}),C="REALMSVR::SESSION",T=JSON.parse(localStorage.getItem(C)||"false");T&&S.setAuthorization(T.token);var D=Object(a.c)({isAuth:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:!!T;switch((1<arguments.length?arguments[1]:void 0).type){case g:return!0;case w:case O:return!1;default:return e}},profile:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:T?T.profile:{},t=1<arguments.length?arguments[1]:void 0;switch(t.type){case g:return t.payload.profile;case w:case O:return{};default:return e}},token:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:T?T.token:{},t=1<arguments.length?arguments[1]:void 0;switch(t.type){case g:return S.setAuthorization(t.payload.token),localStorage.setItem(C,JSON.stringify(t.payload)),t.payload.token;case w:case O:return S.setAuthorization(!1),localStorage.removeItem(C),"";default:return e}}}),L=Object(a.c)({i18n:y.i18nReducer,loadingBar:l.loadingBarReducer,lobby:A,realm:M,user:D}),U=n("2INN"),I=n("mf+E"),z=n("jKe7"),F=n("17x9"),N=n.n(F),W=n("vOnD"),q=W.a.div.withConfig({displayName:"layout__Route",componentId:"d2i6t1-0"})(["display:flex;height:100vh;"]),G={backgroundColor:"#393",zIndex:1},B=function(e){var t=e.children;return c.a.createElement("div",null,c.a.createElement(f.a,{style:G}),c.a.createElement(q,null,t))};B.propTypes={children:N.a.node.isRequired};var V=B;var H=n("Womt");function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Q=function(e){function i(){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),i.mesh&&i.pointerMesh||i.setup(),n=X(this,K(i).call(this));for(var r=i.mesh,o=i.pointerMesh,e=function(e){var t=r.clone();t.buttons={menu:!1,menuDown:!1,menuUp:!1,grip:!1,gripDown:!1,gripUp:!1,pad:!1,padDown:!1,padUp:!1,trigger:!1,triggerDown:!1,triggerUp:!1},t.pointer=o.clone(),t.pointer.visible=!1,t.add(t.pointer),t.matrixAutoUpdate=!1,t.setupRaycaster=function(e){return i.setupRaycaster({hand:t,raycaster:e})},t.visible=!1,n.add(t)},t=0;t<2;t+=1)e();return n}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(i,H["m"]),t=i,r=[{key:"setupRaycaster",value:function(e){var t=e.hand,n=e.raycaster;t.auxMatrix||(t.auxMatrix=new H.j);var r=t.auxMatrix,o=t.matrixWorld;r.identity().extractRotation(o),n.ray.origin.setFromMatrixPosition(o),n.ray.direction.set(0,0,-1).applyMatrix4(r),n.ray.origin.addScaledVector(n.ray.direction,-.175)}},{key:"setup",value:function(){if(!i.geometry){var e=new H.a(1,1,1);e.scale(.05,.03,.2),e.translate(0,0,.075),e.faces.forEach(function(e,t){e.color.set(7829367),10<=t&&t<=11&&e.color.offsetHSL(0,0,-.1)}),i.geometry=(new H.c).fromGeometry(e)}i.material||(i.material=new H.l({color:16769213})),i.mesh||(i.mesh=new H.k(i.geometry,i.material)),i.pointerGeometry||(i.pointerGeometry=(new H.c).setFromPoints([new H.t(0,0,0),new H.t(0,0,-1)])),i.pointerMaterial||(i.pointerMaterial=new H.i({color:16769213})),i.pointerMesh||(i.pointerMesh=new H.h(i.pointerGeometry,i.pointerMaterial))}}],(n=[{key:"update",value:function(){var e=this.children,t="getGamepads"in navigator?navigator.getGamepads():[];e.forEach(function(e){e.visible=!1});for(var n=0,r=0;r<t.length;r+=1){var o=t[r];if(o&&("OpenVR Gamepad"===o.id||o.id.startsWith("Oculus Touch")||o.id.startsWith("Spatial Controller"))&&(o.pose&&this.updateHand({hand:e[n],buttons:o.buttons,pose:o.pose}),1<(n+=1)))break}}},{key:"updateHand",value:function(e){var t=e.hand,n=e.buttons,r=e.pose,o=this.standingMatrix;null!==r.position&&t.position.fromArray(r.position),null!==r.orientation&&t.quaternion.fromArray(r.orientation),t.matrix.compose(t.position,t.quaternion,t.scale),t.matrix.premultiply(o),t.matrixWorldNeedsUpdate=!0,t.visible=!0;var i=n[3]&&n[3].pressed;t.buttons.menuDown=i&&t.buttons.menu!==i,t.buttons.menuUp=!i&&t.buttons.menu!==i,t.buttons.menu=i;var a=n[2]&&n[2].pressed;t.buttons.gripDown=a&&t.buttons.grip!==a,t.buttons.gripUp=!a&&t.buttons.grip!==a,t.buttons.grip=a;var c=n[0]&&n[0].pressed;t.buttons.padDown=c&&t.buttons.pad!==c,t.buttons.padUp=!c&&t.buttons.pad!==c,t.buttons.pad=c;var u=n[1]&&n[1].pressed;t.buttons.triggerDown=u&&t.buttons.trigger!==u,t.buttons.triggerUp=!u&&t.buttons.trigger!==u,t.buttons.trigger=u}}])&&Y(t.prototype,n),r&&Y(t,r),i}();function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function re(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e,t){return(oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ie=function(e){function o(e){var t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),n=this,(t=!(r=ne(o).call(this,e))||"object"!==$(r)&&"function"!=typeof r?re(n):r).canvas=c.a.createRef(),t.camera=new H.n(90,1,.1,1024),t.camera.position.set(0,1.6,0),t.clock=new H.e,t.raycaster=new H.q,t.raycaster.far=32,t.room=new H.m,t.room.add(t.camera),t.hands=new Q,t.room.add(t.hands),t.head={offset:new H.t,position:new H.t,rotation:new H.p,scale:new H.t},t.scene=new H.r,t.scene.add(t.room),t.scene.fog=new H.g(0,.015),t.scene.fog.color.setRGB(0,0,.1),t.onAnimationTick=t.onAnimationTick.bind(re(t)),t.onResize=t.onResize.bind(re(t)),t}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&oe(e,t)}(o,i["Component"]),t=o,(n=[{key:"componentDidMount",value:function(){var e=this.canvas.current,t=new H.v({antialias:!0,canvas:e,powerPreference:"high-performance",stencil:!1});t.setPixelRatio(window.devicePixelRatio||1),t.setClearColor(this.scene.fog.color),this.renderer=t,this.onResize(),this.setupVR(),window.addEventListener("resize",this.onResize,!1),t.setAnimationLoop(this.onAnimationTick)}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentWillUnmount",value:function(){var e=this.renderer;e.setAnimationLoop(null),e.dispose(),e.forceContextLoss(),window.removeEventListener("resize",this.onResize)}},{key:"onAnimationTick",value:function(){var e=this.camera,t=this.clock,n=this.hands,r=this.renderer,o=this.scene;r.animation={delta:t.getDelta(),time:t.oldTime/1e3},n.update(),r.render(o,e)}},{key:"onBeforeRender",value:function(e,t,n){var r=this.head,o=this.room;n.matrixWorld.decompose(r.position,r.rotation,r.scale),r.offset.copy(r.position).sub(o.position)}},{key:"onResize",value:function(){var e=this.canvas.current,t=this.camera,n=this.renderer,r=e.parentNode.getBoundingClientRect(),o=r.width,i=r.height;n.vr.isPresenting()||n.setSize(o,i),t.aspect=o/i,t.updateProjectionMatrix()}},{key:"setupVR",value:function(){var e=this.hands,n=this.renderer,t="xr"in navigator,r="getVRDisplays"in navigator;if(t){var o=function(){if(!n.vr.isPresenting()){var e=n.vr.getDevice();e?e.requestSession({immersive:!0,exclusive:!0}).then(function(e){n.vr.setSession(e,{frameOfReferenceType:"stage"})}):navigator.xr.requestDevice().then(function(e){n.vr.enabled=!0,n.vr.setDevice(e)})}};window.addEventListener("mousedown",o,!1),o()}else if(r){var i=function(){if(!n.vr.isPresenting()){var e=n.vr.getDevice();e?e.requestPresent([{source:n.domElement}]):navigator.getVRDisplays().then(function(e){if(e.length){var t=ee(e,1)[0];n.vr.enabled=!0,n.vr.setDevice(t)}})}};window.addEventListener("mousedown",i,!1),window.addEventListener("vrdisplayactivate",i,!1),i()}e.standingMatrix=n.vr.getStandingMatrix()}},{key:"render",value:function(){var e=this.canvas;return c.a.createElement("canvas",{ref:e})}}])&&te(t.prototype,n),r&&te(t,r),o}();H.s.fog_pars_vertex=H.s.fog_pars_vertex.replace("varying float fogDepth;","varying vec4 fogDepth;"),H.s.fog_vertex=H.s.fog_vertex.replace("fogDepth = -mvPosition.z;","fogDepth = mvPosition;"),H.s.fog_pars_fragment=H.s.fog_pars_fragment.replace("varying float fogDepth;","varying vec4 fogDepth;"),H.s.fog_fragment=H.s.fog_fragment.replace("float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );",["float fogDist = length(fogDepth);","float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDist * fogDist * LOG2 ) );"].join("\n")).replace("float fogFactor = smoothstep( fogNear, fogFar, fogDepth );","float fogFactor = smoothstep( fogNear, fogFar, length(fogDepth) );");var ae=ie;function ce(e){return(ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ue(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function se(e,t){return!t||"object"!==ce(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function le(e,t,n){return(le="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=fe(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function fe(e){return(fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var he=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),se(this,fe(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(t,ae),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props.fetchRealms;le(fe(t.prototype),"componentDidMount",this).call(this),e({page:0})}}])&&ue(n.prototype,r),o&&ue(n,o),t}();he.propTypes={realms:N.a.arrayOf(N.a.shape({name:N.a.string.isRequired,geometry:N.a.shape({index:N.a.instanceOf(Uint32Array),position:N.a.instanceOf(Float32Array),color:N.a.instanceOf(Float32Array),normal:N.a.instanceOf(Float32Array)}).isRequired})).isRequired,fetchRealms:N.a.func.isRequired};var ye=Object(s.connect)(function(e){return{realms:e.lobby.realms}},{fetchRealms:function(e){var t=e.page,n=void 0===t?0:t;return{type:"LOBBY/FETCH_REALMS",payload:S.fetch({endpoint:"realms/".concat(n)})}}})(he),de=n("O1PE");function me(e){return(me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ve(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function be(e){return(be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ge(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function we(e,t){return(we=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Oe=W.a.div.withConfig({displayName:"session__Wrapper",componentId:"cxd9mo-0"})(["position:fixed;top:0;right:0;> button{display:flex;align-items:center;outline:0;font-family:inherit;font-size:1.2rem;font-weight:700;width:150px;padding:0.5rem 1rem;> svg{margin-right:0.5rem;}}"]),Ee=function(e){function o(e){var t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),n=this,(t=!(r=be(o).call(this,e))||"object"!==me(r)&&"function"!=typeof r?ge(n):r).loginWithGoogle=t.loginWithGoogle.bind(ge(t)),t.onMessage=t.onMessage.bind(ge(t)),t}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&we(e,t)}(o,i["PureComponent"]),t=o,(n=[{key:"componentWillUnmount",value:function(){var e=this.popupWatcher;e&&(window.removeEventListener("message",this.onMessage),clearInterval(e),delete this.popupWatcher)}},{key:"onMessage",value:function(e){var t=e.origin,n=e.data.session,r=this.popupWatcher,o=this.props.refreshSession;0===S.baseURL.indexOf(t)&&(window.removeEventListener("message",this.onMessage),clearInterval(r),delete this.popupWatcher,n&&o(n))}},{key:"loginWithGoogle",value:function(e){var t=this,n=e.screenX,r=e.screenY,o=(n||window.screen.width/2)-512,i=r||window.screen.height/2,a=window.open("".concat(S.baseURL,"user/google"),"loginWithGoogle","width=".concat(512,",height=").concat(512,",top=").concat(i,",left=").concat(o));this.popupWatcher&&(window.removeEventListener("message",this.onMessage),clearInterval(this.popupWatcher)),this.popupWatcher=setInterval(function(){if(!a.window)return clearInterval(t.popupWatcher),void delete t.popupWatcher;a.postMessage(!0,S.baseURL)},100),window.addEventListener("message",this.onMessage,!1)}},{key:"render",value:function(){var e=this.props,t=e.isAuth,n=e.signout;return c.a.createElement(Oe,null,t?c.a.createElement("button",{type:"button",onClick:n},c.a.createElement(de.TiEject,null),c.a.createElement(y.Translate,{value:"User.signOut"})):c.a.createElement("button",{type:"button",onClick:this.loginWithGoogle},c.a.createElement(de.TiSocialGooglePlus,null),c.a.createElement(y.Translate,{value:"User.signIn"})))}}])&&ve(t.prototype,n),r&&ve(t,r),o}();Ee.propTypes={isAuth:N.a.bool.isRequired,refreshSession:N.a.func.isRequired,signout:N.a.func.isRequired};var Se=Object(s.connect)(function(e){return{isAuth:e.user.isAuth}},{refreshSession:_,signout:function(){return{type:O}}})(Ee),_e=W.a.div.withConfig({displayName:"lobby__Wrapper",componentId:"sc-1phwihh-0"})(["width:100vw;height:100vh;"]),je=function(){return c.a.createElement(_e,null,c.a.createElement(ye,null),c.a.createElement(Se,null))},xe=n("wIs1");function Re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ke(e){return(ke="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ae(e,t){return!t||"object"!==ke(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function Me(e){return(Me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ce(e,t){return(Ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Te=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ae(this,Me(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ce(e,t)}(t,i["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.match.params.slug;(0,e.fetch)(t)}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentWillUnmount",value:function(){(0,this.props.reset)()}},{key:"render",value:function(){return null}}])&&Pe(n.prototype,r),o&&Pe(n,o),t}();Te.propTypes={match:N.a.shape({params:N.a.shape({slug:N.a.string.isRequired}).isRequired}).isRequired,fetch:N.a.func.isRequired,reset:N.a.func.isRequired};var De=Object(xe.a)(Object(s.connect)(function(){return{}},{fetch:function(e){return{type:"REALM/FETCH",payload:S.fetch({endpoint:"realm/".concat(e)}).then(function(t){return S.fetch({endpoint:"realm/".concat(t._id,"/voxels")}).then(function(e){return function(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},t=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),t.forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return o}({},t,{voxels:new Uint32Array(e)})})})}},reset:function(){return{type:v}}})(Te)),Le=n("f7Ve"),Ue=n.n(Le);function Ie(e){return(Ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ze(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Fe(e){return(Fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function We(e,t){return(We=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var qe=function(e){function o(e){var t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),n=this,(t=!(r=Fe(o).call(this,e))||"object"!==Ie(r)&&"function"!=typeof r?Ne(n):r).onMessage=t.onMessage.bind(Ne(t)),t}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&We(e,t)}(o,i["Component"]),t=o,(n=[{key:"componentDidMount",value:function(){var e=new Ue.a;e.onmessage=this.onMessage,this.worker=e}},{key:"componentWillReceiveProps",value:function(e){var t=e.size,n=e.voxels,r=this.worker;n!==this.props.voxels&&r.postMessage({size:t,voxels:n})}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentWillUnmount",value:function(){this.worker.destroy()}},{key:"onMessage",value:function(e){var t=e.data.geometry;(0,this.props.updateGeometry)(t)}},{key:"render",value:function(){return null}}])&&ze(t.prototype,n),r&&ze(t,r),o}();qe.propTypes={size:N.a.number.isRequired,voxels:N.a.instanceOf(Uint32Array).isRequired,updateGeometry:N.a.func.isRequired};var Ge=Object(s.connect)(function(e){var t=e.realm;return{size:t.size,voxels:t.voxels}},{updateGeometry:function(e){return{type:m,payload:{geometry:e}}}})(qe);function Be(e){return(Be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ve(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function He(e,t){return!t||"object"!==Be(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function Je(e){return(Je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ye(e,t){return(Ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Xe=function(e){function o(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var t=document.createElement("canvas");t.width=512,t.height=512;var n=new H.d(t);e=He(this,Je(o).call(this,new H.o(1,1),new H.l({map:n})));var r=new H.k(new H.o(1,1),new H.l({color:1118481}));return r.geometry.rotateY(Math.PI),e.add(r),e.position.set(-.15,.15,.075),e.rotation.set(0,.5*Math.PI,.1*Math.PI,"ZYX"),e.scale.set(.3,.3,1),e.block={x:.05*t.width,y:.05*t.height,width:.75*t.width,height:.75*t.height},e.strip={x:.85*t.width,y:.05*t.height,width:.1*t.width,height:.75*t.height},e.blockColor=new H.f,e.color=new H.f,e.blockColor.setRGB(1,0,0),e.color.copy(e.blockColor),e.context=t.getContext("2d"),e.pointer=new H.t,e.renderer=t,e.texture=n,e.draw(),e}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ye(e,t)}(o,H["k"]),t=o,(n=[{key:"draw",value:function(){var e=this.block,t=this.blockColor,n=this.color,r=this.context,o=this.renderer,i=this.strip,a=this.texture;r.fillStyle="#111",r.fillRect(0,0,o.width,o.height);var c=e.x,u=e.y,s=e.width,l=e.height;r.save(),r.translate(c,u),r.fillStyle="#".concat(t.getHexString()),r.fillRect(0,0,s,l);var f=r.createLinearGradient(0,0,s,0);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=f,r.fillRect(0,0,s,l);var p=r.createLinearGradient(0,0,0,l);p.addColorStop(0,"rgba(0,0,0,0)"),p.addColorStop(1,"rgba(0,0,0,1)"),r.fillStyle=p,r.fillRect(0,0,s,l),r.restore();var h=i.x,y=i.y,d=i.width,m=i.height;r.save(),r.translate(h,y);var v=r.createLinearGradient(0,0,0,m);v.addColorStop(0,"rgba(255, 0, 0, 1)"),v.addColorStop(.17,"rgba(255, 255, 0, 1)"),v.addColorStop(.34,"rgba(0, 255, 0, 1)"),v.addColorStop(.51,"rgba(0, 255, 255, 1)"),v.addColorStop(.68,"rgba(0, 0, 255, 1)"),v.addColorStop(.85,"rgba(255, 0, 255, 1)"),v.addColorStop(1,"rgba(255, 0, 0, 1)"),r.fillStyle=v,r.fillRect(0,0,d,m),r.restore(),r.save();var b=.3*o.width,g=.1*o.width;r.translate(.35*o.width,.85*o.height),r.rect(0,0,b,g),r.fillStyle="#".concat(n.getHexString()),r.fillRect(0,0,b,g),r.restore(),a.needsUpdate=!0}},{key:"onPointer",value:function(e){var u=this,t=this.block,s=this.blockColor,l=this.color,f=this.context,n=this.pointer,r=this.renderer,o=this.strip;this.worldToLocal(n.copy(e));var p=(n.x+.5)*r.width,h=(1-(n.y+.5))*r.height;[t,o].forEach(function(e,t){var n=e.x,r=e.y,o=e.width,i=e.height;if(!(p<n||n+o<p||h<r||r+i<h)){var a=1===t,c=f.getImageData(p,h,1,1).data;a&&s.setRGB(c[0]/255,c[1]/255,c[2]/255),l.setRGB(c[0]/255,c[1]/255,c[2]/255),u.draw()}})}}])&&Ve(t.prototype,n),r&&Ve(t,r),o}();function Ke(e){return(Ke="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ze(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Qe(e,t){return!t||"object"!==Ke(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function $e(e){return($e=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function et(e,t){return(et=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var tt=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=Qe(this,$e(t).call(this))).geometry=new H.c,e.material=new H.l({vertexColors:H.u}),e.visible=!1,e}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&et(e,t)}(t,H["m"]),n=t,(r=[{key:"resize",value:function(e){for(var t=this.children,n=this.geometry,r=this.material;t.length;)this.remove(t[0]);for(var o=-8;o<=8;o+=1)for(var i=-8;i<=8;i+=1)for(var a=-8;a<=8;a+=1){var c=new H.k(n,r);c.matrixAutoUpdate=!1,c.position.set(a*e,i*e,o*e),c.updateMatrix(),this.add(c)}}},{key:"update",value:function(e){var t=e.index,n=e.position,r=e.color,o=e.normal,i=this.geometry;i.attributes.position?(i.attributes.position.setArray(n),i.attributes.position.needsUpdate=!0):i.addAttribute("position",new H.b(n,3)),i.attributes.color?(i.attributes.color.setArray(r),i.attributes.color.needsUpdate=!0):i.addAttribute("color",new H.b(r,3)),i.attributes.normal?(i.attributes.normal.setArray(o),i.attributes.normal.needsUpdate=!0):i.addAttribute("normal",new H.b(o,3)),i.index?(i.index.setArray(t),i.index.needsUpdate=!0):i.setIndex(new H.b(t,1)),i.computeBoundingSphere(),this.visible=!0}}])&&Ze(n.prototype,r),o&&Ze(n,o),t}();function nt(e){return(nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function rt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ot(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function it(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function at(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ct(e,t,n){return(ct="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ut(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function ut(e){return(ut=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function st(e,t){return(st=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var lt=function(e){function c(e){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),n=this;var o=at(t=!(r=ut(c).call(this,e))||"object"!==nt(r)&&"function"!=typeof r?at(n):r),i=o.hands,a=o.scene;return a.onBeforeRender=t.onBeforeRender.bind(at(t)),t.picker=new Xe,i.children[1].add(t.picker),t.intersects=[t.picker],t.voxels=new tt,a.add(t.voxels),t}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&st(e,t)}(c,ae),t=c,(n=[{key:"componentWillReceiveProps",value:function(e){var t=e.geometry,n=e.size,r=this.picker,o=this.room,i=this.voxels,a=this.props,c=a.geometry;n!==a.size&&(o.position.set(.5*n,.5*n,.5*n),i.resize(n),this.intersects=[r].concat(ot(i.children))),t!==c&&i.update(t)}},{key:"onBeforeRender",value:function(e,t,n){ct(ut(c.prototype),"onBeforeRender",this).call(this,e,t,n);var r=this.props,h=r.size,y=r.updateVoxels,o=this.hands,d=this.head,m=this.intersects,v=this.picker,b=this.raycaster,g=this.room;o.children.forEach(function(e){var t=e.buttons,n=e.pointer;e.setupRaycaster(b);var r=b.intersectObjects(m)[0]||!1;if(r){var o=r.distance,i=r.face.normal,a=r.object,c=r.point;if(n.scale.z=o-.175,n.visible=!0,a!==v){if(t.padDown&&0===i.x&&1===i.y&&0===i.z){var u={x:-d.offset.x,y:0,z:-d.offset.z},s=rt(["x","y","z"].map(function(e){for(var t=Math.floor(c[e]-u[e]);t<0;)t+=h;for(;h<=t;)t-=h;return t}),3),l=s[0],f=s[1],p=s[2];g.position.set(l,f,p)}(t.triggerDown||t.gripDown)&&y({color:v.color,point:c,normal:i,remove:t.gripDown})}else t.triggerDown&&v.onPointer(c)}else n.visible=!1})}}])&&it(t.prototype,n),r&&it(t,r),c}();lt.propTypes={geometry:N.a.shape({index:N.a.instanceOf(Uint32Array),position:N.a.instanceOf(Float32Array),color:N.a.instanceOf(Float32Array),normal:N.a.instanceOf(Float32Array)}).isRequired,size:N.a.number,updateVoxels:N.a.func.isRequired};var ft=Object(s.connect)(function(e){var t=e.realm;return{geometry:t.geometry,size:t.size}},{updateVoxels:function(e){var y=e.color,d=e.normal,m=e.point,v=e.remove;return function(e,t){var n=t().realm,r=n.size,o=n.voxels,i=Re(["x","y","z"].map(function(e){for(var t=Math.floor(m[e]+.5*d[e]*(v?-1:1));t<0;)t+=r;for(;r<=t;)t-=r;return t}),3),a=i[0],c=i[1],u=i[2],s=Math.min(Math.max(Math.round(255*y.r+8*Math.random()-4),0),255),l=Math.min(Math.max(Math.round(255*y.g+8*Math.random()-4),0),255),f=Math.min(Math.max(Math.round(255*y.b+8*Math.random()-4),0),255),p=v?0:1<<24|s<<16|l<<8|f,h=new Uint32Array(o);return h[u*r*r+c*r+a]=p,e({type:b,payload:{voxels:h}})}}})(lt),pt=W.a.div.withConfig({displayName:"realm__Wrapper",componentId:"sc-1bdzkyg-0"})(["width:100vw;height:100vh;"]),ht=function(){return c.a.createElement(pt,null,c.a.createElement(De,null),c.a.createElement(Ge,null),c.a.createElement(ft,null))},yt=n("2iEm"),dt=W.a.div.withConfig({displayName:"sc-404__Wrapper",componentId:"g6uuyh-0"})(["display:flex;width:100%;flex-direction:column;align-items:center;justify-content:center;"]),mt=W.a.div.withConfig({displayName:"sc-404__Status",componentId:"g6uuyh-1"})(["font-size:6em;line-height:0.8em;color:#656565;margin-bottom:2rem;"]),vt=W.a.div.withConfig({displayName:"sc-404__Description",componentId:"g6uuyh-2"})(["font-size:1.5em;"]),bt=W.a.div.withConfig({displayName:"sc-404__Alternative",componentId:"g6uuyh-3"})(["margin:2rem 0 4rem;> a{display:flex;align-items:center;text-decoration:none;font-size:1.2em;color:inherit;> svg{margin-right:0.5rem;}}"]),gt=function(){return c.a.createElement(dt,null,c.a.createElement(mt,null,"404"),c.a.createElement(vt,null,c.a.createElement(y.Translate,{value:"NotFound.description"})),c.a.createElement(bt,null,c.a.createElement(yt.a,{to:{pathname:"/"}},c.a.createElement(de.TiArrowBack,null),c.a.createElement(y.Translate,{value:"NotFound.goBack"}))))};function wt(){return(wt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ot(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],0<=t.indexOf(n)||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Et,St,_t,jt,xt=Object(s.connect)(function(e){return{isAuth:e.user.isAuth}})(function(e){var t=e.component,n=e.isAuth,r=e.requiresAuth,o=e.requiresNoAuth,i=Ot(e,["component","isAuth","requiresAuth","requiresNoAuth"]),a=r&&!n||o&&n;return c.a.createElement(U.a,wt({},i,{render:function(e){return a?c.a.createElement(I.a,{to:"/"}):c.a.createElement(t,e)}}))}),Rt=function(){return c.a.createElement(V,null,c.a.createElement(z.a,null,c.a.createElement(xt,{exact:!0,path:"/",component:je}),c.a.createElement(xt,{exact:!0,path:"/404",component:gt}),c.a.createElement(xt,{exact:!0,path:"/:slug",component:ht}),c.a.createElement(xt,{path:"*",component:gt})))},kt=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,a.d),Pt=Object(a.e)(L,{},kt(Object(a.a)(h.a,u.a,Object(l.loadingBarMiddleware)())));Et=Pt,St=localStorage.getItem("REALMSVR::LOCALE"),_t=((window.navigator.languages?window.navigator.languages[0]:null)||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage||k).substr(0,2).toLowerCase(),jt=k,~R.indexOf(St)?jt=St:~R.indexOf(_t)&&(jt=_t),Object(y.syncTranslationWithStore)(Et),Et.dispatch(Object(y.loadTranslations)(P)),Et.dispatch(Object(y.setLocale)(jt)),Pt.getState().user.isAuth&&Pt.dispatch(_());var At=Object(r.a)({basename:"/"});window.location.hash&&At.replace("/".concat(window.location.hash.substr(2))),window.addEventListener("contextmenu",function(e){return e.preventDefault()},!1);var Mt=document.getElementById("mount");Object(o.render)(c.a.createElement(s.Provider,{store:Pt},c.a.createElement(p.a,{history:At},c.a.createElement(Rt,null))),Mt)},f7Ve:function(e,t,n){e.exports=function(){return new Worker(n.p+"code/mesher.worker.197743694d6b7b6d94d4.js")}},p2bk:function(e,t,n){}},[[0,1,2]]]);
//# sourceMappingURL=main.ba29ca34a69afa012c921b2fc2a28a25.js.map