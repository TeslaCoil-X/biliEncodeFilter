(function(t){function e(e){for(var a,s,c=e[0],d=e[1],o=e[2],l=0,u=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&u.push(n[s][0]),n[s]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);p&&p(e);while(u.length)u.shift()();return i.push.apply(i,o||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,c=1;c<r.length;c++){var d=r[c];0!==n[d]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},i=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var p=d;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:""}},[r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("span",[t._v("哔哩哔哩2019DASH直传压制方案筛选工具web版V1.0")])]),r("v-spacer")],1),r("v-content",[r("Cards")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"pa-2",attrs:{fluid:""}},[r("v-row",[r("v-col",[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[r("v-card-title",[t._v("哔哩哔哩2019DASH直传压制方案筛选工具web版V1.0")]),r("v-card-text",[r("div",{staticClass:"text--primary"})])],1)],1)],1),r("v-row",[r("v-col",[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[r("v-card-text",[r("div",{staticClass:"text--primary"},[t._v(t._s(t.cardtext))])]),r("v-card-text",{style:t.cardindp},[r("v-text-field",{attrs:{label:t.cardlabel},on:{keyup:function(e){return t.keyup()}},model:{value:t.cardinput,callback:function(e){t.cardinput=e},expression:"cardinput"}})],1),r("v-card-actions",[r("v-btn",{style:t.cardbtndp,attrs:{text:""},on:{click:function(e){return t.onbtn(1)}}},[t._v(t._s(t.cardbtn))]),r("v-btn",{style:t.cardbtndp2,attrs:{text:""},on:{click:function(e){return t.onbtn(2)}}},[t._v(t._s(t.cardbtn2))])],1)],1)],1)],1)],1)},c=[],d={data:()=>({cardtext:"点击开始运行压制方案",cardinput:"",cardbtn:"Next",cardbtn2:"",cardlabel:"",cardindp:"display:none",cardbtndp:"display:block",cardbtndp2:"display:none",texts:[],step:0,res:[0,0],product:0,interlace:0,fps:0,hfps:0}),methods:{keyup:function(){13==event.keyCode&&this.onbtn(1)},setcard:function(t,e,r){this.cardtext=t,this.switchbtn(e),this.step=r},switchbtn:function(t){1==t?(this.cardbtn="Next",this.cardbtndp="display:block",this.cardbtndp2="display:none",this.cardindp="display:block"):2==t?(this.cardbtn="是",this.cardbtn2="否",this.cardbtndp="display:block",this.cardbtndp2="display:block",this.cardindp="display:none"):3==t&&(this.cardbtn="重新运行",this.cardbtndp="display:block",this.cardbtndp2="display:none",this.cardindp="display:none")},onbtn:function(t){var e,r,a,n=this.cardinput;switch(this.cardinput="",this.step){case 1e4:case 9999:case 0:this.setcard("输入分辨率(宽x高 例如1920x1080)",1,1);break;case 1:if(e=n.split("x"),e[0]=parseInt(e[0]),e[1]=parseInt(e[1]),e[0]<=144||e[1]<=144)return void this.setcard("分辨率过小",3,9999);if(e[0]%2!=0||e[1]%2!=0)return void this.setcard("分辨率不合法，必须为偶数",3,9999);this.res=e,this.product=e[0]*e[1],this.setcard("请问您的视频是否为交错（隔行扫描）视频？",2,2);break;case 2:if(this.interlace=1==t?1:0,!(this.product<=921600)){if(this.product>2073600){if(e=this.res,r=0,a=e[0]/e[1],e[0]%4!=0)e[0]=e[0]-2;else{while(r<=2073600)e[0]=e[0]+4,e[1]=Math.round(e[0]/a),r=e[0]*e[1];e[1]%4!=0&&(e[1]=e[1]-e[1]%4)}return 1==this.interlace?void this.setcard("请输入宽度"+e[0]+"和高度"+e[1]+"，并按照码率B来处理，并按照手册文末问答2执行反交错操作",3,1e4):void this.setcard("请输入宽度"+e[0]+"和高度"+e[1]+"，并按照码率B来处理",3,1e4)}return 1==this.interlace?void this.setcard("请勾选保持原分辨率，按照码率B处理，并按照手册文末问答2执行反交错操作",3,1e4):void this.setcard("请勾选保持原分辨率，并按照码率B处理",3,1e4)}this.setcard("输入视频帧率",1,21);break;case 21:if(this.fps=parseInt(n),this.fps>60)return void this.setcard("帧率过高，请使用Handbrake（用法见问6附）或非编软件缩小至60FPS",3,9999);if(this.fps>=48?this.hfps=1:this.hfps=0,0==this.hfps&&0==this.interlace){if(e=this.res,r=0,a=e[0]/e[1],e[0]%4!=0)e[0]=e[0]+2;else{while(r>921600)e[0]=e[0]+4,e[1]=Math.round(e[0]/a),r=e[0]*e[1];e[1]%4!=0&&(e[1]=e[1]+(4-e[1]%4))}return void this.setcard("请输入宽度"+e[0]+"和高度"+e[1]+"，并按照码率B来处理",3,1e4)}if(this.product<=409920){if(e=this.res,r=0,a=e[0]/e[1],e[0]%4!=0)e[0]=e[0]+2;else{while(r>409920)e[0]=e[0]+4,e[1]=Math.round(e[0]/a),r=e[0]*e[1];e[1]%4!=0&&(e[1]=e[1]+(4-e[1]%4))}return 1==this.interlace?void this.setcard("请输入宽度"+e[0]+"和高度"+e[1]+"，并按照码率A来处理，并按照手册文末问答2执行反交错操作",3,1e4):void this.setcard("请输入宽度"+e[0]+"和高度"+e[1]+"，并按照码率A来处理",3,1e4)}return 1==this.interlace?void this.setcard("请勾选保持原分辨率，按照码率A处理，并按照手册文末问答2执行反交错操作",3,1e4):void this.setcard("请勾选保持原分辨率，并按照码率A处理",3,1e4)}}}},o=d,p=r("2877"),l=r("6544"),u=r.n(l),h=r("8336"),f=r("b0af"),b=r("99d9"),v=r("62ad"),y=r("a523"),x=r("0fd9"),w=r("8654"),k=Object(p["a"])(o,s,c,!1,null,null,null),m=k.exports;u()(k,{VBtn:h["a"],VCard:f["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VCol:v["a"],VContainer:y["a"],VRow:x["a"],VTextField:w["a"]});var _={name:"App",components:{Cards:m},data:()=>({})},C=_,V=r("7496"),O=r("40dc"),g=r("a75b"),j=r("2fa4"),A=r("2a7f"),S=Object(p["a"])(C,n,i,!1,null,null,null),P=S.exports;u()(S,{VApp:V["a"],VAppBar:O["a"],VContent:g["a"],VSpacer:j["a"],VToolbarTitle:A["a"]});var T=r("f309");a["a"].use(T["a"]);var B=new T["a"]({icons:{iconfont:"mdi"}});a["a"].config.productionTip=!1,new a["a"]({vuetify:B,render:t=>t(P)}).$mount("#app")}});
//# sourceMappingURL=app.ce1a033b.js.map