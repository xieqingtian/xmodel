"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1904],{23306:function(M,s,e){e.r(s),e.d(s,{demos:function(){return v}});var p=e(67294),h=e(9926),v={}},7692:function(M,s,e){e.r(s),e.d(s,{demos:function(){return v}});var p=e(67294),h=e(59993),v={}},50623:function(M,s,e){e.r(s),e.d(s,{demos:function(){return v}});var p=e(67294),h=e(45299),v={}},51183:function(M,s,e){e.r(s),e.d(s,{demos:function(){return Y}});var p={};e.r(p),e.d(p,{EditorEvent:function(){return T.e},Snapline:function(){return l.H},XModel:function(){return u.T},XModelEditor:function(){return O.u},apply:function(){return E.nn},isEdge:function(){return E.un},isNode:function(){return E.UG},useEditorEvent:function(){return L.x},useEditorInstance:function(){return f.M},useEditorStore:function(){return R.E},useHistory:function(){return S.k}});var h={};e.r(h),e.d(h,{Loader:function(){return a},Viewer:function(){return B.A},createGLTFLoader:function(){return ae},formatNumber:function(){return re}});var v=e(15009),I=e.n(v),y=e(99289),m=e.n(y),x=e(67294),C=e.t(x,2),i=e(37771),c=e(67256),N=e(39772),r=e(10060),u=e(20218),O=e(91792),l=e(60763),f=e(90399),L=e(75783),S=e(65867),R=e(81058),E=e(55035),T=e(96631),B=e(13400),P=e(19632),b=e.n(P),A=e(12444),U=e.n(A),k=e(72004),Z=e.n(k),te=e(9783),ie=e.n(te),K=e(99477);function re(ue){return new Intl.NumberFormat("en-us",{useGrouping:!0}).format(ue)}function ae(ue){return _.apply(this,arguments)}function _(){return _=m()(I()().mark(function ue(Ie){var le,pe,fe,ce,de,oe,q,G;return I()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,Promise.resolve().then(e.bind(e,77836));case 2:return le=z.sent,pe=le.GLTFLoader,z.next=6,e.e(2854).then(e.bind(e,82854));case 6:return fe=z.sent,ce=fe.DRACOLoader,z.next=10,e.e(4917).then(e.bind(e,54917));case 10:return de=z.sent,oe=de.MeshoptDecoder,q=new ce,q.setDecoderPath("/draco/"),G=new pe(Ie),G.setDRACOLoader(q),G.setMeshoptDecoder(oe),z.abrupt("return",G);case 18:case"end":return z.stop()}},ue)})),_.apply(this,arguments)}var a=function(){function ue(Ie){U()(this,ue),ie()(this,"viewer",void 0),this.viewer=Ie}return Z()(ue,[{key:"loadFile",value:function(le,pe){var fe=this,ce=le.name,de=ce.split(".").pop().toLowerCase(),oe=new FileReader;switch(oe.addEventListener("progress",function(q){var G="(".concat(re(Math.floor(q.total/1e3))," KB)"),he="".concat(Math.floor(q.loaded/q.total*100),"%");console.log("Loading",ce,G,he)}),de){case"glb":{oe.addEventListener("load",function(){var q=m()(I()().mark(function G(he){var z,se;return I()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return z=he.target.result,J.next=3,ae();case 3:se=J.sent,se.parse(z,"",function(me){var ee,ge=me.scene;ge.name=ce,(ee=ge.animations).push.apply(ee,b()(me.animations)),fe.viewer.scene.add(ge),se.dracoLoader.dispose()});case 5:case"end":return J.stop()}},G)}));return function(G){return q.apply(this,arguments)}}(),!1),oe.readAsArrayBuffer(le);break}case"gltf":{oe.addEventListener("load",function(){var q=m()(I()().mark(function G(he){var z,se;return I()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return z=he.target.result,J.next=3,ae(pe);case 3:se=J.sent,se.parse(z,"",function(me){var ee,ge=me.scene;ge.name=ce,(ee=ge.animations).push.apply(ee,b()(me.animations)),fe.viewer.scene.add(ge),se.dracoLoader.dispose()});case 5:case"end":return J.stop()}},G)}));return function(G){return q.apply(this,arguments)}}(),!1),oe.readAsArrayBuffer(le);break}case"obj":{oe.addEventListener("load",function(){var q=m()(I()().mark(function G(he){var z,se,Ee,J;return I()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return z=he.target.result,ee.next=3,e.e(7011).then(e.bind(e,87011));case 3:se=ee.sent,Ee=se.OBJLoader,J=new Ee().parse(z),J.name=ce,fe.viewer.scene.add(J);case 8:case"end":return ee.stop()}},G)}));return function(G){return q.apply(this,arguments)}}(),!1),oe.readAsText(le);break}case"stl":{oe.addEventListener("load",function(){var q=m()(I()().mark(function G(he){var z,se,Ee,J,me,ee;return I()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return z=he.target.result,xe.next=3,e.e(8476).then(e.bind(e,48476));case 3:se=xe.sent,Ee=se.STLLoader,J=new Ee().parse(z),me=new K.Wid,ee=new K.Kj0(J,me),ee.name=ce,fe.viewer.scene.add(ee);case 10:case"end":return xe.stop()}},G)}));return function(G){return q.apply(this,arguments)}}(),!1),oe.readAsBinaryString!==void 0?oe.readAsBinaryString(le):oe.readAsArrayBuffer(le);break}default:console.error("Unsupported file format (".concat(de,")."));break}}}]),ue}(),t=e(77836),o=e(15552),n=e(71633),d=e(98315),g=e(63852),D=e(39281),W=e(49e3),H=e(73016),F=e(89449),X=e(39113),Q=e(66951),ve=e(79832),$=e(65680),ne=e(67417),ye=e(56793),w=e(41972),j=e(90512),V=e(98388),Ce=e(85344),Me=e(57383),Y={"docs-examples-main-readme-demo-main":{component:x.memo(x.lazy(function(){return e.e(2433).then(e.bind(e,98700))})),asset:{type:"BLOCK",id:"docs-examples-main-readme-demo-main",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(73983).Z},react:{type:"NPM",value:"18.3.1"},"react-json-view-lite":{type:"NPM",value:"1.5.0"},"@ant-design/pro-editor":{type:"NPM",value:"1.3.0"},antd:{type:"NPM",value:"5.21.1"},"@infore/xmodel":{type:"NPM",value:"0.0.2"},"@infore/xviewer":{type:"NPM",value:"0.0.2"},three:{type:"NPM",value:"0.169.0"},"./RightPannel.tsx":{type:"FILE",value:e(71184).Z},"./Header.tsx":{type:"FILE",value:e(97593).Z},"./LeftPannel.tsx":{type:"FILE",value:e(84141).Z},"@ant-design/icons":{type:"NPM",value:"5.5.1"},"lodash-es":{type:"NPM",value:"4.17.21"},"./NodeView.tsx":{type:"FILE",value:e(77379).Z},"./EdgeView.tsx":{type:"FILE",value:e(86761).Z},"./ListView.tsx":{type:"FILE",value:e(14600).Z},"./fields.ts":{type:"FILE",value:e(53900).Z},"./Select.tsx":{type:"FILE",value:e(39306).Z},"./index.less":{type:"FILE",value:e(87132).Z},"./Input.tsx":{type:"FILE",value:e(56634).Z},"./VirtualList.tsx":{type:"FILE",value:e(943).Z},"./utils.ts":{type:"FILE",value:e(51741).Z},clsx:{type:"NPM",value:"2.1.1"},"tailwind-merge":{type:"NPM",value:"2.5.2"},"rc-virtual-list":{type:"NPM",value:"3.14.8"},"@infore/hooks":{type:"NPM",value:"1.5.4"}},entry:"index.tsx"},context:{"./RightPannel.tsx":o,"./Header.tsx":n,"./LeftPannel.tsx":d,"./NodeView.tsx":H,"./EdgeView.tsx":F,"./ListView.tsx":X,"./fields.ts":Q,"./Select.tsx":ve,"./index.less":$,"./Input.tsx":ne,"./VirtualList.tsx":ye,"./utils.ts":w,react:C,"react-json-view-lite/dist/index.css":c,"@ant-design/pro-editor":N,antd:r,"@infore/xmodel":p,"@infore/xviewer":h,"three/examples/jsm/loaders/GLTFLoader.js":t,"C:/Workspace/libs/infore-xmodel/docs/examples/main/RightPannel.tsx":o,"C:/Workspace/libs/infore-xmodel/docs/examples/main/Header.tsx":n,"C:/Workspace/libs/infore-xmodel/docs/examples/main/LeftPannel.tsx":d,"react-json-view-lite":g,"@ant-design/icons":D,"lodash-es":W,"C:/Workspace/libs/infore-xmodel/docs/examples/main/NodeView.tsx":H,"C:/Workspace/libs/infore-xmodel/docs/examples/main/EdgeView.tsx":F,"C:/Workspace/libs/infore-xmodel/docs/examples/main/ListView.tsx":X,"C:/Workspace/libs/infore-xmodel/docs/examples/main/fields/index.ts":Q,"C:/Workspace/libs/infore-xmodel/docs/examples/main/fields/Select.tsx":ve,"C:/Workspace/libs/infore-xmodel/docs/examples/main/fields/index.less":$,"C:/Workspace/libs/infore-xmodel/docs/examples/main/fields/Input.tsx":ne,"C:/Workspace/libs/infore-xmodel/docs/examples/main/VirtualList.tsx":ye,"C:/Workspace/libs/infore-xmodel/docs/examples/main/utils.ts":w,clsx:j,"tailwind-merge":V,"rc-virtual-list":Ce,"@infore/hooks":Me},renderOpts:{compile:function(){var ue=m()(I()().mark(function le(){var pe,fe=arguments;return I()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return de.next=2,e.e(4019).then(e.bind(e,4019));case 2:return de.abrupt("return",(pe=de.sent).default.apply(pe,fe));case 3:case"end":return de.stop()}},le)}));function Ie(){return ue.apply(this,arguments)}return Ie}()}}}},36826:function(M,s,e){e.r(s),e.d(s,{demos:function(){return v}});var p=e(67294),h=e(18493),v={}},22791:function(M,s,e){e.r(s),e.d(s,{demos:function(){return v}});var p=e(67294),h=e(7037),v={}},44238:function(M,s,e){e.r(s),e.d(s,{demos:function(){return v}});var p=e(67294),h=e(50712),v={}},93020:function(M,s,e){e.r(s),e.d(s,{demos:function(){return v}});var p=e(67294),h=e(23755),v={}},11171:function(M,s,e){e.r(s),e.d(s,{demos:function(){return v}});var p=e(67294),h=e(68537),v={}},89449:function(M,s,e){e.r(s),e.d(s,{EdgeView:function(){return C}});var p=e(42119),h=e(42075),v=e(7825),I=e(81058),y=e(66951),m=e(73016),x=e(85893);function C(i){var c=i.edge,N=(0,I.E)(),r=N.nodes,u=N.updateEdge,O=r.find(function(f){return f.id===c.source}),l=r.find(function(f){return f.id===c.target});return(0,x.jsxs)(p.Z,{progressDot:!0,current:3,direction:"vertical",children:[O&&(0,x.jsx)(p.Z.Step,{title:"\u8D77\u70B9",description:(0,x.jsx)(m.NodeView,{node:O})}),(0,x.jsx)(p.Z.Step,{title:"\u8DEF\u5F84",description:(0,x.jsxs)(h.Z,{direction:"vertical",size:"large",className:"flex",children:[(0,x.jsxs)(v.Z.Text,{children:[(0,x.jsx)("span",{className:"mr-[8px]",children:"\u7F16\u53F7"}),"#",c.id]}),(0,x.jsx)(y.InputFiled,{label:"\u540D\u79F0",value:c.name,onChange:function(L){u(c.id,{name:L})}}),(0,x.jsx)(y.SelectField,{label:"\u65B9\u5411",value:c.direction,options:[{label:"\u6B63\u5411",value:"forward"},{label:"\u9006\u5411",value:"backward"},{label:"\u53CC\u5411",value:"both"}],onChange:function(L){u(c.id,{direction:L})}})]})}),l&&(0,x.jsx)(p.Z.Step,{title:"\u7EC8\u70B9",description:(0,x.jsx)(m.NodeView,{node:l})})]})}},71633:function(M,s,e){e.r(s),e.d(s,{Header:function(){return L}});var p=e(10149),h=e(87740),v=e(48689),I=e(45350),y=e(43749),m=e(70801),x=e(54406),C=e(45360),i=e(65867),c=e(81058),N=e(90399),r=e(55035),u=e(50576),O=e(3695),l=e(85893),f={color:"rgba(0,0,0,0.88)",background:"rgba(0,0,0,0.06)"};function L(){var S=(0,i.k)(),R=S.canRedo,E=S.canUndo,T=S.undo,B=S.redo,P=(0,c.E)(),b=P.removeNode,A=P.removeEdge,U=P.selectedCell,k=P.wireframe,Z=P.toggleWireframe,te=P.toggleRotateControlsEnabled,ie=P.rotateControlsEnabled,K=P.nodes,re=P.edges,ae=(0,N.M)(),_=function(){if(ae){var o=(0,u.Z)(ae.toJSON(),{nodes:(0,O.Z)(K,["id"]),edges:(0,O.Z)(re,["id"])});o?C.ZP.success("\u6570\u636E\u4E00\u81F4"):C.ZP.error("\u6570\u636E\u4E0D\u4E00\u81F4")}},a=[{disabled:!E,icon:(0,l.jsx)(p.Z,{}),title:"\u64A4\u9500",onClick:function(){E&&T()}},{disabled:!R,icon:(0,l.jsx)(h.Z,{}),title:"\u91CD\u505A",onClick:function(){R&&B()}},{disabled:!U,icon:(0,l.jsx)(v.Z,{}),title:"\u5220\u9664",onClick:function(){U&&((0,r.UG)(U)&&b(U.id),(0,r.un)(U)&&A(U.id))}},{icon:(0,l.jsx)(I.Z,{}),title:"\u5207\u6362\u7EBF\u6846\u663E\u793A",onClick:function(){Z()},style:k?f:void 0},{icon:(0,l.jsx)(y.Z,{}),title:"\u5207\u6362\u65CB\u8F6C\u63A7\u5236",onClick:function(){te()},style:ie?f:void 0},{icon:(0,l.jsx)(m.Z,{}),title:"\u6570\u636E\u68C0\u67E5",onClick:function(){_()}}];return(0,l.jsx)(x.W,{type:"ghost",items:a})}},98315:function(M,s,e){e.r(s),e.d(s,{LeftPannel:function(){return y}});var p=e(63852),h=e(81058),v=e(3695),I=e(85893);function y(){var m=(0,h.E)(),x=m.nodes,C=m.edges,i=m.selectedCell,c={nodes:(0,v.Z)(x,["id"]),edges:(0,v.Z)(C,["id"]),selectedCell:i};return(0,I.jsx)(p.JsonView,{data:c,shouldExpandNode:p.allExpanded,style:p.defaultStyles})}},39113:function(M,s,e){e.r(s),e.d(s,{ListView:function(){return L}});var p=e(5574),h=e.n(p),v=e(67294),I=e(6171),y=e(90814),m=e(7825),x=e(92398),C=e(4393),i=e(84567),c=e(81058),N=e(55035),r=e(41972),u=e(56793),O=e(3695),l=e(85893);function f(S){var R=S.id;return(0,l.jsxs)("span",{className:"flex w-[40px] flex-col items-center justify-center",children:[(0,l.jsx)("span",{className:"relative size-4 rounded-full bg-[#3944f0] text-center"}),(0,l.jsxs)(m.Z.Text,{className:"text-center",children:["#",R]})]})}function L(){var S=(0,v.useState)("nodes"),R=h()(S,2),E=R[0],T=R[1],B=(0,c.E)(),P=B.edges,b=B.nodes,A=B.selectedCell,U=B.selectNode,k=B.selectEdge,Z=B.unselectEdge,te=B.unselectNode;return(0,l.jsx)(x.Z,{activeKey:E,onChange:function(K){return T(K)},centered:!0,destroyInactiveTabPane:!0,items:[{label:"\u70B9\u4F4D",key:"nodes",children:(0,l.jsx)(u.default,{data:(0,O.Z)(b,["id"]),children:function(K){return(0,l.jsx)(C.Z,{bordered:!1,size:"small",children:(0,l.jsxs)("div",{className:"flex w-full items-center",children:[(0,l.jsx)(i.Z,{onChange:function(ae){ae.target.checked?U(K.id):te(K.id)},checked:A&&(0,N.UG)(A)&&A.id===K.id}),(0,l.jsx)(f,{id:K.id}),(0,l.jsx)(m.Z.Text,{className:"flex-1 truncate",children:K.name})]})})}})},{label:"\u8DEF\u5F84",key:"edges",children:(0,l.jsx)(u.default,{data:(0,O.Z)(P,["id"]),children:function(K){var re=b.find(function(_){return _.id===K.source}),ae=b.find(function(_){return _.id===K.target});return(0,l.jsx)(C.Z,{bordered:!1,size:"small",children:(0,l.jsxs)("div",{className:"flex w-full items-center",children:[(0,l.jsx)(i.Z,{onChange:function(a){a.target.checked?k(K.id):Z(K.id)},checked:A&&"isEdge"in A&&A.id===K.id}),(0,l.jsx)(f,{id:re.id}),(0,l.jsx)(I.Z,{className:(0,r.cn)("mr-[10px]",K.direction==="forward"?"invisible":"visible")}),(0,l.jsx)(m.Z.Text,{className:"flex-1 truncate text-center",children:K.name}),(0,l.jsx)(y.Z,{className:(0,r.cn)("ml-[10px]",K.direction==="backward"?"invisible":"visible")}),(0,l.jsx)(f,{id:ae.id})]})})}})}]})}},73016:function(M,s,e){e.r(s),e.d(s,{NodeView:function(){return m}});var p=e(42075),h=e(7825),v=e(81058),I=e(66951),y=e(85893);function m(x){var C=x.node,i=(0,v.E)(),c=i.updateNode;return(0,y.jsxs)(p.Z,{direction:"vertical",size:"large",className:"flex",children:[(0,y.jsxs)(h.Z.Text,{children:[(0,y.jsx)("span",{className:"mr-[8px]",children:"\u7F16\u53F7"}),"#",C.id]}),(0,y.jsx)(I.InputFiled,{onChange:function(r){return c(C.id,{name:r})},label:"\u540D\u79F0",value:C.name}),(0,y.jsx)(I.InputNumberFiled,{disabled:!0,label:"X",value:C.position[0]}),(0,y.jsx)(I.InputNumberFiled,{disabled:!0,label:"Y",value:C.position[1]}),(0,y.jsx)(I.InputNumberFiled,{disabled:!0,label:"Z",value:C.position[2]}),(0,y.jsx)(I.InputNumberFiled,{disabled:!0,label:"W",value:C.rotation[0]}),(0,y.jsx)(I.InputNumberFiled,{disabled:!0,label:"P",value:C.rotation[1]}),(0,y.jsx)(I.InputNumberFiled,{disabled:!0,label:"R",value:C.rotation[2]})]})}},15552:function(M,s,e){e.r(s),e.d(s,{RightPannel:function(){return O}});var p=e(5574),h=e.n(p),v=e(67294),I=e(16664),y=e(86548),m=e(92398),x=e(4393),C=e(81058),i=e(55035),c=e(89449),N=e(39113),r=e(73016),u=e(85893);function O(){var l=(0,v.useState)("list"),f=h()(l,2),L=f[0],S=f[1],R=(0,C.E)(),E=R.selectedCell;return(0,v.useEffect)(function(){S(E?"cell":"list")},[E]),(0,u.jsx)(m.Z,{centered:!0,destroyInactiveTabPane:!0,activeKey:L,onChange:S,items:[{label:"\u5143\u7D20\u5217\u8868",key:"list",children:(0,u.jsx)(N.ListView,{}),icon:(0,u.jsx)(I.Z,{})},{label:"\u5C5E\u6027\u7F16\u8F91",key:"cell",disabled:!E,children:(0,u.jsxs)(x.Z,{bordered:!1,size:"small",children:[(0,i.UG)(E)&&(0,u.jsx)(r.NodeView,{node:E}),(0,i.un)(E)&&(0,u.jsx)(c.EdgeView,{edge:E})]}),icon:(0,u.jsx)(y.Z,{})}]})}},56793:function(M,s,e){e.r(s);var p=e(97857),h=e.n(p),v=e(13769),I=e.n(v),y=e(67294),m=e(32983),x=e(85344),C=e(82052),i=e(85893),c=["children"];function N(r){var u=r.children,O=I()(r,c),l=(0,y.useRef)(null),f=(0,C.Z)(l),L=O.containerClass||"h-[calc(100vh-360px)]",S=O.data.length===0;return(0,i.jsxs)("div",{ref:l,className:L,children:[S&&(0,i.jsx)(m.Z,{className:"absolute inset-x-0 top-0"}),f!=null&&f.height?(0,i.jsx)(x.default,h()(h()({},O),{},{itemKey:"id",itemHeight:60,height:f.height,children:u})):null]})}s.default=N},67417:function(M,s,e){e.r(s),e.d(s,{InputFiled:function(){return C},InputNumberFiled:function(){return i}});var p=e(97857),h=e.n(p),v=e(4944),I=e(81169),y=e(7825),m=e(85893),x={height:24},C=function(N){var r=N.label,u=r===void 0?"\u6807\u7B7E":r;return(0,m.jsxs)("div",{className:"group",children:[(0,m.jsx)(y.Z.Text,{className:"mr-[8px] break-keep",children:u}),(0,m.jsx)(v.I,h()(h()({},N),{},{style:x}))]})},i=function(N){var r=N.label,u=r===void 0?"\u6807\u7B7E":r;return(0,m.jsxs)("div",{className:"group",children:[(0,m.jsx)(y.Z.Text,{className:"mr-[8px] break-keep",children:u}),(0,m.jsx)(I.R,h()(h()({},N),{},{style:h()(h()({},x),{},{width:"100%"})}))]})}},79832:function(M,s,e){e.r(s),e.d(s,{SelectField:function(){return x}});var p=e(97857),h=e.n(p),v=e(67294),I=e(59042),y=e(7825),m=e(85893),x=function(i){var c=i.label,N=c===void 0?"\u7BAD\u5934":c;return(0,m.jsxs)("div",{className:"group",children:[(0,m.jsx)(y.Z.Text,{className:"mr-[8px] break-keep",children:N}),(0,m.jsx)(I.P,h()({style:{width:"100%",height:24}},i))]})}},66951:function(M,s,e){e.r(s),e.d(s,{InputFiled:function(){return h.InputFiled},InputNumberFiled:function(){return h.InputNumberFiled},SelectField:function(){return v.SelectField}});var p=e(65680),h=e(67417),v=e(79832)},41972:function(M,s,e){e.r(s),e.d(s,{cn:function(){return v}});var p=e(90512),h=e(98388);function v(){for(var I=arguments.length,y=new Array(I),m=0;m<I;m++)y[m]=arguments[m];return(0,h.twMerge)((0,p.clsx)(y))}},96631:function(M,s,e){e.d(s,{d:function(){return p},e:function(){return h}});var p="__inner__",h=function(v){return v.onNodeAdded="node:added",v.onNodeRemoved="node:removed",v.onNodeChanged="node:changed",v.onNodeSelected="node:selected",v.onNodeUnselected="node:unselected",v.onEdgeAdded="edge:added",v.onEdgeRemoved="edge:removed",v.onEdgeChanged="edge:changed",v.onEdgeSelected="edge:selected",v.onEdgeUnselected="edge:unselected",v.onHistoryChanged="history:changed",v.onSelectionChanged="selection:changed",v.onWireframeChanged="wireframe:changed",v.onRotateControlsEnableChanged="rotateControlsEnable:changed",v}({})},91792:function(M,s,e){e.d(s,{u:function(){return ae}});var p=e(67294),h=e(19632),v=e.n(h),I=e(12444),y=e.n(I),m=e(72004),x=e.n(m),C=e(9783),i=e.n(C),c=e(99477),N=function(){function _(a){y()(this,_),i()(this,"helper",void 0),i()(this,"vDir",new c.Pa4),this.editor=a,this.helper=this.createConnectHelper()}return x()(_,[{key:"createConnectHelper",value:function(){var t=new c.tGC(new c.Pa4(0,0,1),new c.Pa4,1,14277081);return t.visible=!1,this.editor.mesh.add(t),t}},{key:"updateConnectHelper",value:function(t,o){var n=this.vDir.subVectors(o,t).normalize(),d=t.distanceTo(o);this.helper.setDirection(n),this.helper.position.copy(t),this.helper.setLength(d,.1*d,.05*d),this.isConnecting()||this.showConnectHelper()}},{key:"showConnectHelper",value:function(){this.helper.visible=!0}},{key:"hideConnectHelper",value:function(){this.helper.visible=!1}},{key:"isConnecting",value:function(){return this.helper.visible}},{key:"dispose",value:function(){this.helper.dispose()}}]),_}(),r=e(96631),u={node:{radius:5e-4,color:new c.Ilk(3753200),highlightColor:new c.Ilk(1609983),selectedColor:new c.Ilk(1609983)},edge:{color:new c.Ilk(14277081),highlightColor:new c.Ilk(1609983),selectedColor:new c.Ilk(1609983)},arrow:{color:new c.Ilk(3264710),direction:"forward"}},O=new c.nls({color:u.edge.color}),l=new c.nls({color:u.edge.highlightColor}),f=function(){function _(a){y()(this,_),i()(this,"geometry",void 0),i()(this,"line",void 0),i()(this,"source",void 0),i()(this,"target",void 0),i()(this,"id",void 0),i()(this,"selected",!1),i()(this,"visible",!0),i()(this,"name",void 0),i()(this,"isDisposed",!1),i()(this,"vForward",new c.Pa4),i()(this,"vBackward",new c.Pa4),i()(this,"direction",void 0),i()(this,"sourceArrow",void 0),i()(this,"targetArrow",void 0);var t=a.id,o=a.source,n=a.target,d=a.name,g=[o.getPosition().clone(),n.getPosition().clone()];this.source=o,this.target=n,this.id=t,this.direction=a.direction||u.arrow.direction,this.name=d||"\u8DEF\u5F84-".concat(t),this.geometry=new c.u9r().setFromPoints(g),this.line=new c.x12(this.geometry,O),this.sourceArrow=this.createArrow("backward"),this.targetArrow=this.createArrow("forward"),this.setDirection(this.direction)}return x()(_,[{key:"setName",value:function(t){this.name=t}},{key:"getName",value:function(){return this.name}},{key:"getDirection",value:function(){return this.direction}},{key:"setDirection",value:function(t){switch(this.direction=t,t){case"forward":this.targetArrow.visible=!0,this.sourceArrow.visible=!1;break;case"backward":this.targetArrow.visible=!1,this.sourceArrow.visible=!0;break;case"both":this.targetArrow.visible=!0,this.sourceArrow.visible=!0;break;default:this.targetArrow.visible=!0,this.sourceArrow.visible=!1;break}}},{key:"createArrow",value:function(t){var o=this.getArrowParams(t),n=o.direction,d=o.position,g=o.radius,D=new c.tGC(n,d,0,u.arrow.color,g,g/2);return D.visible=!1,D}},{key:"getArrowParams",value:function(t){var o=t==="forward",n=this.source.getPosition(),d=this.target.getPosition(),g=o?[n,d]:[d,n],D=this.target.getMesh().geometry.parameters.radius,W=o?this.vForward:this.vBackward,H=W.subVectors(g[1],g[0]).normalize(),F=g[1].clone().add(H.clone().multiplyScalar(-D));return{direction:H,position:F,radius:D}}},{key:"getLine",value:function(){return this.line}},{key:"getSourceNode",value:function(){return this.source}},{key:"getTargetNode",value:function(){return this.target}},{key:"highlight",value:function(){this.selected||(this.line.material=l)}},{key:"resetHighlight",value:function(){this.selected||(this.line.material=O)}},{key:"select",value:function(){this.selected=!0,this.line.material=l}},{key:"unselect",value:function(){this.selected=!1,this.line.material=O}},{key:"isSelected",value:function(){return this.selected}},{key:"contains",value:function(){for(var t=this,o=arguments.length,n=new Array(o),d=0;d<o;d++)n[d]=arguments[d];return n.every(function(g){return g===t.source||g===t.target})}},{key:"toJSON",value:function(){return{id:this.id,source:this.source.id,target:this.target.id,name:this.name,direction:this.direction,isEdge:!0}}},{key:"show",value:function(){this.visible||(this.line.visible=!0,this.setDirection(this.direction),this.visible=!0)}},{key:"hide",value:function(){this.visible&&(this.line.visible=!1,this.sourceArrow.visible=!1,this.targetArrow.visible=!1,this.visible=!1)}},{key:"update",value:function(){var t=this.source.getPosition(),o=this.target.getPosition(),n=[t,o],d=this.getArrowParams("forward"),g=this.getArrowParams("backward");this.line.geometry.setFromPoints(n),this.line.geometry.computeBoundingBox(),this.line.geometry.computeBoundingSphere(),this.targetArrow.position.copy(d.position),this.targetArrow.setDirection(d.direction),this.sourceArrow.position.copy(g.position),this.sourceArrow.setDirection(g.direction)}},{key:"addObject3D",value:function(t){t.add(this.line,this.sourceArrow,this.targetArrow)}},{key:"removeObject3D",value:function(){var t;(t=this.line.parent)===null||t===void 0||t.remove(this.line,this.sourceArrow,this.targetArrow)}},{key:"dispose",value:function(){this.isDisposed||(this.line.geometry.dispose(),this.sourceArrow.dispose(),this.targetArrow.dispose(),O.dispose(),l.dispose(),this.isDisposed=!0)}}]),_}(),L=new c.vBJ({color:u.node.color}),S=new c.vBJ({color:u.node.highlightColor}),R=function(){function _(a){y()(this,_),i()(this,"geometry",void 0),i()(this,"mesh",void 0),i()(this,"id",void 0),i()(this,"selected",!1),i()(this,"visible",!0),i()(this,"name",void 0),i()(this,"isDisposed",!1);var t=a.id,o=a.name,n=a.position,d=a.rotation;this.id=t,this.name=o||"\u8DEF\u5F84\u70B9-".concat(t),this.geometry=new c.xo$(u.node.radius),this.mesh=new c.Kj0(this.geometry,L),this.mesh.position.copy(new c.Pa4().fromArray(n)),d&&this.mesh.rotation.copy(new c.USm().fromArray(d))}return x()(_,[{key:"getMesh",value:function(){return this.mesh}},{key:"highlight",value:function(){this.selected||(this.mesh.material=S)}},{key:"resetHighlight",value:function(){this.selected||(this.mesh.material=L)}},{key:"setPosition",value:function(t){this.mesh.position.copy(t instanceof c.Pa4?t:new c.Pa4().fromArray(t))}},{key:"getPosition",value:function(){return this.mesh.position}},{key:"setRotation",value:function(t){this.mesh.rotation.copy(t instanceof c.USm?t:new c.USm().fromArray(t))}},{key:"getRotation",value:function(){return this.mesh.rotation}},{key:"setName",value:function(t){this.name=t}},{key:"getName",value:function(){return this.name}},{key:"select",value:function(){this.selected=!0,this.mesh.material=S}},{key:"unselect",value:function(){this.selected=!1,this.mesh.material=L}},{key:"isSelected",value:function(){return this.selected}},{key:"toJSON",value:function(){return{id:this.id,name:this.name,position:[this.mesh.position.x,this.mesh.position.y,this.mesh.position.z],rotation:[this.mesh.rotation.x,this.mesh.rotation.y,this.mesh.rotation.z],isNode:!0}}},{key:"show",value:function(){this.visible||(this.mesh.visible=!0,this.visible=!0)}},{key:"hide",value:function(){this.visible&&(this.mesh.visible=!1,this.visible=!1)}},{key:"addObject3D",value:function(t){t.add(this.mesh)}},{key:"removeObject3D",value:function(){var t;(t=this.mesh.parent)===null||t===void 0||t.remove(this.mesh)}},{key:"dispose",value:function(){this.isDisposed||(this.mesh.geometry.dispose(),L.dispose(),S.dispose(),this.isDisposed=!0)}}]),_}(),E=e(92327),T=function(){function _(a){var t=this;y()(this,_),i()(this,"invisible",new c.u9r),i()(this,"controls",void 0),this.editor=a,this.controls=new E.Ys(this.editor.camera,this.editor.canvas),this.controls.setMode("rotate"),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onRotate=this.onRotate.bind(this),this.controls.addEventListener("mouseDown",this.onMouseDown),this.controls.addEventListener("mouseUp",this.onMouseUp),this.controls.addEventListener("objectChange",this.onRotate);var o=this.controls._gizmo.gizmo.rotate;o.children.forEach(function(n){n.name==="E"&&(n.geometry=t.invisible)}),this.editor.scene.add(this.controls.getHelper())}return x()(_,[{key:"onMouseDown",value:function(){this.editor.controls.enabled=!1}},{key:"onMouseUp",value:function(){this.editor.controls.enabled=!0}},{key:"onRotate",value:function(){var t=this.editor.selectedNode;t&&this.editor.emitter.emit(r.e.onNodeChanged,{node:t})}},{key:"detach",value:function(){this.controls.detach()}},{key:"attach",value:function(t){this.controls.attach(t)}},{key:"hasAttached",value:function(){return!!this.controls.object}},{key:"dispose",value:function(){this.controls.removeEventListener("mouseDown",this.onMouseDown),this.controls.removeEventListener("mouseUp",this.onMouseUp),this.controls.removeEventListener("objectChange",this.onRotate),this.editor.scene.remove(this.controls.getHelper()),this.invisible.dispose(),this.controls.dispose()}}]),_}(),B=e(3695),P=e(59391),b=function(){function _(a){var t=this;y()(this,_),i()(this,"installedPlugins",new Set),i()(this,"scene",void 0),i()(this,"controls",void 0),i()(this,"mesh",void 0),i()(this,"raycaster",void 0),i()(this,"rotateControls",void 0),i()(this,"mouse",void 0),i()(this,"nodes",[]),i()(this,"edges",[]),i()(this,"highlightedNode",null),i()(this,"highlightedEdge",null),i()(this,"startNode",null),i()(this,"connectHelper",void 0),i()(this,"nodeId",1),i()(this,"edgeId",1),i()(this,"selectedNode",null),i()(this,"selectedEdge",null),i()(this,"isMouseMoved",!1),i()(this,"isCanvasFocused",!1),i()(this,"isDragging",!1),i()(this,"rotateControlsEnabled",!1),i()(this,"dragStartPosition",null),i()(this,"canvas",void 0),i()(this,"camera",void 0),i()(this,"emitter",void 0),i()(this,"undoStack",[]),i()(this,"redoStack",[]),i()(this,"onMouseDown",function(o){if(t.isMouseMoved=!1,o.button===0){t.canvas.focus();var n=t.getIntersects(t.mesh),d=t.getIntersectedNode(n);d&&(t.controls.enabled=!1,t.startNode=d,t.dragStartPosition=d.getPosition().clone())}}),i()(this,"onMouseUp",function(o){if(o.button===0){var n=t.getIntersects(t.mesh),d=t.getIntersectedNode(n);if(t.startNode&&d&&d===t.startNode&&t.dragStartPosition&&!t.dragStartPosition.equals(d.getPosition())){var g=t.dragStartPosition.clone(),D=d.getPosition().clone(),W=t.startNode,H={execute:function(){t.updateNode(W,{position:D.toArray()})},undo:function(){t.updateNode(W,{position:g.toArray()})}};t.executeCommand(H)}if(t.startNode&&d&&d!==t.startNode&&!t.hasEdge(t.startNode,d)&&t.connectHelper.isConnecting()){t.addEdge({source:t.startNode,target:d}),t.resetStartNode();return}if(t.isMouseMoved){t.resetStartNode();return}if(d&&d!==t.selectedNode&&t.selectNode(d),d){t.resetStartNode();return}var F=t.getIntersectedEdge(n);if(F&&t.selectedEdge!==F&&t.selectEdge(F),F){t.resetStartNode();return}t.clearSelection()}}),i()(this,"onKeyDown",function(o){t.isCanvasFocused&&o.key==="Delete"&&(t.selectedNode?t.removeNode(t.selectedNode):t.selectedEdge&&t.removeEdge(t.selectedEdge))}),this.scene=a.scene,this.camera=a.camera,this.mesh=a.mesh,this.controls=a.controls,this.canvas=a.domElement,this.canvas.tabIndex=1,this.emitter=(0,P.Z)(),this.mouse=new c.FM8,this.raycaster=new c.iMs,this.connectHelper=new N(this),this.rotateControls=new T(this),this.onRightClick=this.onRightClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),this.canvas.addEventListener("contextmenu",this.onRightClick),this.canvas.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("mousedown",this.onMouseDown),this.canvas.addEventListener("mouseup",this.onMouseUp),this.canvas.addEventListener("focus",this.onFocus),this.canvas.addEventListener("blur",this.onBlur),window.addEventListener("keydown",this.onKeyDown)}return x()(_,[{key:"executeCommand",value:function(t){t.execute(),this.undoStack.push(t),this.redoStack=[],this.emitter.emit(r.e.onHistoryChanged)}},{key:"canUndo",value:function(){return this.undoStack.length>0}},{key:"canRedo",value:function(){return this.redoStack.length>0}},{key:"undo",value:function(){var t=this.undoStack.pop();t&&(t.undo(),this.redoStack.push(t),this.emitter.emit(r.e.onHistoryChanged))}},{key:"redo",value:function(){var t=this.redoStack.pop();t&&(t.execute(!0),this.undoStack.push(t),this.emitter.emit(r.e.onHistoryChanged))}},{key:"on",value:function(t,o){this.emitter.on(t,o)}},{key:"off",value:function(t,o){this.emitter.off(t,o)}},{key:"onFocus",value:function(){this.isCanvasFocused=!0}},{key:"onBlur",value:function(){this.isCanvasFocused=!1}},{key:"getMesh",value:function(){return this.mesh}},{key:"setWireframe",value:function(t){this.mesh.material.wireframe=t}},{key:"toggleWireframe",value:function(t,o){if(typeof t=="undefined"){var n=!this.mesh.material.wireframe;this.setWireframe(n),this.emitter.emit(r.e.onWireframeChanged,{enabled:n,options:o});return}this.setWireframe(t),this.emitter.emit(r.e.onWireframeChanged,{enabled:t,options:o})}},{key:"setRotateControlsAttach",value:function(t){this.selectedNode&&(t?this.rotateControls.attach(this.selectedNode.getMesh()):this.rotateControls.detach())}},{key:"toggleRotateControlsEnabled",value:function(t,o){if(typeof t=="undefined"){var n=!this.rotateControlsEnabled;this.rotateControlsEnabled=n,this.setRotateControlsAttach(n),this.emitter.emit(r.e.onRotateControlsEnableChanged,{enabled:n,options:o});return}this.rotateControlsEnabled=t,this.setRotateControlsAttach(t),this.emitter.emit(r.e.onRotateControlsEnableChanged,{enabled:t,options:o})}},{key:"updateNode",value:function(t,o,n){var d=o.position,g=o.rotation,D=o.name,W=typeof t=="number"?this.getNodeById(t):t;if(!W){console.warn("node not found");return}d&&(W.setPosition(d),this.updateConnectedEdges(W)),g&&W.setRotation(g),D&&W.setName(D),this.emitter.emit(r.e.onNodeChanged,{node:W,options:n})}},{key:"updateEdge",value:function(t,o,n){var d=o.name,g=o.direction,D=typeof t=="number"?this.getEdgeById(t):t;if(!D){console.warn("edge not found");return}d&&D.setName(d),g&&D.setDirection(g),this.emitter.emit(r.e.onEdgeChanged,{edge:D,options:n})}},{key:"addNode",value:function(t,o){var n=this;if(t.id&&this.getNodeById(t.id)){console.warn("node id already exists");return}if(!t.position){console.warn("node position is required");return}var d=t.id||this.nodeId++,g=new R({id:d,name:t.name,position:t.position,rotation:t.rotation});console.log("Current NodeId is: ".concat(d)),t.id&&(this.nodeId=Math.max(this.nodeId,t.id)+1);var D={execute:function(H){n.nodes.push(g),g.addObject3D(n.mesh),n.emitter.emit(r.e.onNodeAdded,{node:g,options:H?void 0:o})},undo:function(){var H=n.nodes.indexOf(g);H!==-1&&(n.nodes.splice(H,1),g.removeObject3D(),n.emitter.emit(r.e.onNodeRemoved,{node:g}))},nodes:[g]};this.executeCommand(D)}},{key:"addEdge",value:function(t,o){var n=this;if(t.id&&this.getEdgeById(t.id)){console.warn("edge id already exists");return}var d=t.source instanceof R?t.source:this.getNodeById(t.source),g=t.target instanceof R?t.target:this.getNodeById(t.target);if(!d||!g){console.warn("edge source or target not found");return}if(d===g){console.warn("source and target cannot be the same node");return}var D=t.id||this.edgeId++,W=new f({id:D,name:t.name,direction:t.direction,source:d,target:g});console.log("Current EdgeId is: ".concat(D)),t.id&&(this.edgeId=Math.max(this.edgeId,t.id)+1);var H={execute:function(X){n.edges.push(W),W.addObject3D(n.mesh),n.emitter.emit(r.e.onEdgeAdded,{edge:W,options:X?void 0:o})},undo:function(){var X=n.edges.indexOf(W);X!==-1&&(n.edges.splice(X,1),W.removeObject3D(),n.emitter.emit(r.e.onEdgeRemoved,{edge:W}))},edges:[W]};this.executeCommand(H)}},{key:"removeEdge",value:function(t,o){var n=this,d=typeof t=="number"?this.getEdgeById(t):t;if(!d){console.warn("edge not found");return}var g=this.edges.indexOf(d);if(g!==-1){var D={execute:function(H){n.unselectEdge(d,o),n.edges.splice(g,1),d.removeObject3D(),n.emitter.emit(r.e.onEdgeRemoved,{edge:d,options:H?void 0:o})},undo:function(){n.edges.splice(g,0,d),d.addObject3D(n.mesh),n.emitter.emit(r.e.onEdgeAdded,{edge:d})},edges:[d]};this.executeCommand(D)}}},{key:"removeNode",value:function(t,o){var n=this,d=typeof t=="number"?this.getNodeById(t):t;if(!d){console.warn("node not found");return}var g=this.nodes.indexOf(d);if(g!==-1){var D=this.edges.filter(function(H){return H.getSourceNode()===d||H.getTargetNode()===d}),W={execute:function(F){n.unselectNode(d,o),D.forEach(function(X){var Q=n.edges.indexOf(X);Q!==-1&&(n.unselectEdge(X,o),n.edges.splice(Q,1),X.removeObject3D(),n.emitter.emit(r.e.onEdgeRemoved,{edge:X,options:F?void 0:o}))}),n.nodes.splice(g,1),d.removeObject3D(),n.emitter.emit(r.e.onNodeRemoved,{node:d,options:F?void 0:o})},undo:function(){d.addObject3D(n.mesh),D.forEach(function(F){return F.addObject3D(n.mesh)}),n.nodes.splice(g,0,d),D.forEach(function(F){return n.edges.push(F)}),n.emitter.emit(r.e.onNodeAdded,{node:d}),D.forEach(function(F){return n.emitter.emit(r.e.onEdgeAdded,{edge:F})})},nodes:[d],edges:D};this.executeCommand(W)}}},{key:"unselectNode",value:function(t,o){var n=typeof t=="undefined"?this.selectedNode:typeof t=="number"?this.getNodeById(t):t;n&&n===this.selectedNode&&(n.unselect(),this.rotateControlsEnabled&&this.setRotateControlsAttach(!1),this.selectedNode=null,this.emitter.emit(r.e.onNodeUnselected,{node:n,options:o}),this.emitter.emit(r.e.onSelectionChanged,{cell:null,options:o}))}},{key:"unselectEdge",value:function(t,o){var n=typeof t=="undefined"?this.selectedEdge:typeof t=="number"?this.getEdgeById(t):t;n&&n===this.selectedEdge&&(n.unselect(),this.selectedEdge=null,this.emitter.emit(r.e.onEdgeUnselected,{edge:n,options:o}),this.emitter.emit(r.e.onSelectionChanged,{cell:null,options:o}))}},{key:"selectNode",value:function(t,o){var n=typeof t=="number"?this.getNodeById(t):t;if(!n){console.warn("node not found");return}n!==this.selectedNode&&(this.clearSelection(o),n.select(),this.selectedNode=n,this.rotateControlsEnabled&&this.setRotateControlsAttach(!0),this.emitter.emit(r.e.onNodeSelected,{node:n,options:o}),this.emitter.emit(r.e.onSelectionChanged,{cell:n,options:o}))}},{key:"selectEdge",value:function(t,o){var n=typeof t=="number"?this.getEdgeById(t):t;if(!n){console.warn("edge not found");return}n!==this.selectedEdge&&(this.clearSelection(o),n.select(),this.selectedEdge=n,this.emitter.emit(r.e.onEdgeSelected,{edge:n,options:o}),this.emitter.emit(r.e.onSelectionChanged,{cell:n,options:o}))}},{key:"clearSelection",value:function(t){this.unselectNode(void 0,t),this.unselectEdge(void 0,t)}},{key:"setMousePosition",value:function(t){var o=this.canvas.getBoundingClientRect();return this.mouse.x=(t.clientX-o.left)/o.width*2-1,this.mouse.y=-((t.clientY-o.top)/o.height)*2+1,o}},{key:"getIntersects",value:function(t){return this.raycaster.setFromCamera(this.mouse,this.camera),this.raycaster.intersectObject(t)}},{key:"setLineThreshold",value:function(t){var o=this.camera.position.distanceTo(this.mesh.position),n=this.camera.fov*(Math.PI/180),d=t.height,g=2*o*Math.tan(n/2)/d;this.raycaster.params.Line.threshold=g*2}},{key:"onRightClick",value:function(t){var o,n=this;if(t.preventDefault(),!(this.isMouseMoved||this.isDragging)){this.setMousePosition(t);var d=this.getIntersects(this.mesh),g=(o=d.find(function(D){return D.object===n.mesh}))===null||o===void 0?void 0:o.point;g&&this.addNode({position:this.mesh.worldToLocal(g.clone()).toArray()})}}},{key:"onMouseMove",value:function(t){var o=this;this.isMouseMoved=!0,this.setLineThreshold(this.setMousePosition(t));var n=this.getIntersects(this.mesh),d=n.find(function($){return o.nodes.find(function(ne){return ne.getMesh()===$.object})});if(d){var g=this.nodes.find(function($){return $.getMesh()===d.object});g&&this.highlightedNode!==g&&!this.isDragging&&(this.highlightedNode&&this.highlightedNode.resetHighlight(),g.highlight(),this.highlightedNode=g,this.highlightedEdge&&(this.highlightedEdge.resetHighlight(),this.highlightedEdge=null))}else this.highlightedNode&&(this.highlightedNode.resetHighlight(),this.highlightedNode=null);var D=n.find(function($){return o.edges.find(function(ne){return ne.getLine()===$.object})});if(D){var W=this.edges.find(function($){return $.getLine()===D.object});W&&this.highlightedEdge!==W&&!this.highlightedNode&&!this.isDragging&&(this.highlightedEdge&&this.highlightedEdge.resetHighlight(),W.highlight(),this.highlightedEdge=W)}else this.highlightedEdge&&(this.highlightedEdge.resetHighlight(),this.highlightedEdge=null);if(this.startNode){var H,F=(H=n.find(function($){return $.object===o.mesh}))===null||H===void 0?void 0:H.point;if(F){if(this.selectedNode===this.startNode&&this.rotateControls.hasAttached())return;var X=this.startNode.getPosition(),Q=this.mesh.worldToLocal(F.clone());if(t.ctrlKey&&!this.connectHelper.isConnecting()){this.isDragging=!0;var ve=this.startNode;this.updateNode(ve,{position:Q.toArray()})}else this.isDragging=!1,this.connectHelper.updateConnectHelper(X,Q)}}}},{key:"getIntersectedNode",value:function(t){var o=this,n=t.find(function(g){return o.nodes.find(function(D){return D.getMesh()===g.object})}),d;return n&&(d=this.nodes.find(function(g){return g.getMesh()===n.object})),d}},{key:"getIntersectedEdge",value:function(t){var o=this,n=t.find(function(g){return o.edges.find(function(D){return D.getLine()===g.object})}),d;return n&&(d=this.edges.find(function(g){return g.getLine()===n.object})),d}},{key:"resetStartNode",value:function(){this.isDragging=!1,this.startNode=null,this.dragStartPosition=null,this.connectHelper.hideConnectHelper(),this.controls.enabled=!0}},{key:"hasEdge",value:function(t,o){return this.edges.some(function(n){return n.contains(t,o)})}},{key:"updateConnectedEdges",value:function(t){this.edges.forEach(function(o){(o.getSourceNode()===t||o.getTargetNode()===t)&&o.update()})}},{key:"disposeCommandStack",value:function(t){t.forEach(function(o){o.nodes&&o.nodes.forEach(function(n){return n.dispose()}),o.edges&&o.edges.forEach(function(n){return n.dispose()})})}},{key:"getNodeById",value:function(t){return this.nodes.find(function(o){return o.id===t})}},{key:"getEdgeById",value:function(t){return this.edges.find(function(o){return o.id===t})}},{key:"clear",value:function(){this.clearSelection(),this.resetStartNode(),this.highlightedEdge=null,this.highlightedNode=null,this.nodes.forEach(function(t){t.removeObject3D(),t.dispose()}),this.edges.forEach(function(t){t.removeObject3D(),t.dispose()}),this.disposeCommandStack(this.undoStack),this.disposeCommandStack(this.redoStack),this.nodes=[],this.edges=[],this.undoStack=[],this.redoStack=[],this.nodeId=1,this.edgeId=1}},{key:"toJSON",value:function(){return{nodes:(0,B.Z)(this.nodes.map(function(t){return t.toJSON()}),["id"]),edges:(0,B.Z)(this.edges.map(function(t){return t.toJSON()}),["id"])}}},{key:"fromJSON",value:function(t,o){var n=this;if(t){this.clear();var d=t.nodes.map(function(D){var W=D.id,H=D.name,F=D.position,X=D.rotation,Q=new R({id:W,name:H,position:F,rotation:X});return n.nodes.push(Q),Q.addObject3D(n.mesh),n.emitter.emit(r.e.onNodeAdded,{node:Q,options:o}),W});d.length>0&&(this.nodeId=Math.max.apply(Math,v()(d))+1);var g=t.edges.map(function(D){var W=D.id,H=D.source,F=D.target,X=D.name,Q=D.direction,ve=n.getNodeById(H),$=n.getNodeById(F);if(ve&&$){var ne=new f({id:W,name:X,direction:Q,source:ve,target:$});n.edges.push(ne),ne.addObject3D(n.mesh),n.emitter.emit(r.e.onEdgeAdded,{edge:ne,options:o})}return W});g.length>0&&(this.edgeId=Math.max.apply(Math,v()(g))+1)}}},{key:"use",value:function(t){if(!this.installedPlugins.has(t)){this.installedPlugins.add(t);for(var o=arguments.length,n=new Array(o>1?o-1:0),d=1;d<o;d++)n[d-1]=arguments[d];t.init.apply(t,[this].concat(n))}return this}},{key:"getPlugin",value:function(t){return Array.from(this.installedPlugins).find(function(o){return o.name===t})}},{key:"getPlugins",value:function(t){return Array.from(this.installedPlugins).filter(function(o){return t.includes(o.name)})}},{key:"enablePlugins",value:function(t){var o=t;Array.isArray(o)||(o=[o]);var n=this.getPlugins(o);return n==null||n.forEach(function(d){var g;d==null||(g=d.enable)===null||g===void 0||g.call(d)}),this}},{key:"disablePlugins",value:function(t){var o=t;Array.isArray(o)||(o=[o]);var n=this.getPlugins(o);return n==null||n.forEach(function(d){var g;d==null||(g=d.disable)===null||g===void 0||g.call(d)}),this}},{key:"isPluginEnabled",value:function(t){var o,n=this.getPlugin(t);return n==null||(o=n.isEnabled)===null||o===void 0?void 0:o.call(n)}},{key:"disposePlugins",value:function(t){var o=this,n=t;Array.isArray(n)||(n=[n]);var d=this.getPlugins(n);return d==null||d.forEach(function(g){g.dispose(),o.installedPlugins.delete(g)}),this}},{key:"dispose",value:function(){this.nodes.forEach(function(t){return t.dispose()}),this.edges.forEach(function(t){return t.dispose()}),this.disposeCommandStack(this.undoStack),this.disposeCommandStack(this.redoStack),this.undoStack=[],this.redoStack=[],this.canvas.removeEventListener("mousedown",this.onMouseDown),this.canvas.removeEventListener("mouseup",this.onMouseUp),this.canvas.removeEventListener("contextmenu",this.onRightClick),this.canvas.removeEventListener("mousemove",this.onMouseMove),this.canvas.removeEventListener("focus",this.onFocus),this.canvas.removeEventListener("blur",this.onBlur),window.removeEventListener("keydown",this.onKeyDown),this.emitter.all.clear(),this.connectHelper.dispose(),this.installedPlugins.forEach(function(t){t.dispose()})}}]),_}(),A=e(48429),U=e(90399),k=e(81058),Z=e(75783),te=e(53434),ie=function(){var a=(0,U.M)(),t=(0,k.E)(),o=t.addNode,n=t.addEdge,d=t.removeNode,g=t.removeEdge,D=t.updateNode,W=t.updateEdge,H=t.selectNode,F=t.selectEdge,X=t.clearSelection,Q=t.clearChangeList,ve=t.toggleWireframe,$=t.toggleRotateControlsEnabled,ne=t.changeList,ye=function(j,V){V.forEach(function(Ce){var Me=Ce.command,Y=Ce.data;switch(Me){case"init":j.fromJSON(Y,i()({},r.d,!0));break;case"addNode":j.addNode(Y,i()({},r.d,!0));break;case"removeNode":j.removeNode(Y,i()({},r.d,!0));break;case"updateNode":j.updateNode(Y.id,Y.data,i()({},r.d,!0));break;case"addEdge":j.addEdge(Y,i()({},r.d,!0));break;case"removeEdge":j.removeEdge(Y,i()({},r.d,!0));break;case"updateEdge":j.updateEdge(Y.id,Y.data,i()({},r.d,!0));break;case"selectNode":j.selectNode(Y,i()({},r.d,!0));break;case"selectEdge":j.selectEdge(Y,i()({},r.d,!0));break;case"clearSelection":j.clearSelection(i()({},r.d,!0));break;case"unselectNode":j.unselectNode(Y,i()({},r.d,!0));break;case"unselectEdge":j.unselectEdge(Y,i()({},r.d,!0));break;case"toggleWireframe":j.toggleWireframe(Y,i()({},r.d,!0));break;case"toggleRotateControlsEnabled":j.toggleRotateControlsEnabled(Y,i()({},r.d,!0));break;default:break}}),setTimeout(function(){Q()})};return(0,p.useEffect)(function(){a&&ne.length&&ye(a,ne)},[ne.length,a]),(0,Z.x)(r.e.onNodeAdded,function(w){var j=w.node,V=w.options;V!=null&&V[r.d]||o(j.toJSON(),{silent:!0})}),(0,Z.x)(r.e.onNodeRemoved,function(w){var j=w.node;d(j.id,{silent:!0})}),(0,Z.x)(r.e.onNodeChanged,(0,te.Z)(function(w){var j=w.node,V=w.options;V!=null&&V[r.d]||D(j.id,j.toJSON(),{silent:!0})},100,{leading:!0})),(0,Z.x)(r.e.onEdgeAdded,function(w){var j=w.edge,V=w.options;V!=null&&V[r.d]||n(j.toJSON(),{silent:!0})}),(0,Z.x)(r.e.onEdgeRemoved,function(w){var j=w.edge;g(j.id,{silent:!0})}),(0,Z.x)(r.e.onEdgeChanged,(0,te.Z)(function(w){var j=w.edge,V=w.options;V!=null&&V[r.d]||W(j.id,j.toJSON(),{silent:!0})},100,{leading:!0})),(0,Z.x)(r.e.onSelectionChanged,function(w){var j=w.cell;j===null&&X({silent:!0}),j instanceof R&&H(j.id,{silent:!0}),j instanceof f&&F(j.id,{silent:!0})}),(0,Z.x)(r.e.onWireframeChanged,function(w){var j=w.enabled,V=w.options;V!=null&&V[r.d]||ve(j,{silent:!0})}),(0,Z.x)(r.e.onRotateControlsEnableChanged,function(w){var j=w.enabled,V=w.options;V!=null&&V[r.d]||$(j,{silent:!0})}),null},K=e(85893),re=function(a){var t=a.children,o=(0,U.M)();return o?(0,K.jsx)(K.Fragment,{children:t}):null},ae=function(a){var t=(0,p.useContext)(A.r),o=t.setEditor;return(0,p.useEffect)(function(){var n=new b(a);return o(n),function(){n&&(n.dispose(),o(null))}},[]),(0,K.jsx)(re,{children:(0,K.jsx)(ie,{})})}},60763:function(M,s,e){e.d(s,{H:function(){return S}});var p=e(97857),h=e.n(p),v=e(67294),I=e(12444),y=e.n(I),m=e(72004),x=e.n(m),C=e(9783),i=e.n(C),c=e(13769),N=e.n(c),r=e(99477);function u(R,E,T){var B=new r.Pa4().subVectors(T,E),P=new r.Pa4().subVectors(R,E),b=B.lengthSq(),A=Math.max(0,Math.min(1,P.dot(B)/b)),U=new r.Pa4().addVectors(E,B.multiplyScalar(A));return R.distanceTo(U)}var O=["editor"],l=function(){function R(E){y()(this,R),i()(this,"options",void 0),i()(this,"editor",void 0),i()(this,"lineHelper",void 0),i()(this,"faceHelper",void 0),i()(this,"lineGeometry",new r.u9r),i()(this,"faceGeometry",new r.u9r),i()(this,"highlightColor",3710477),i()(this,"lineMaterial",new r.nls({color:this.highlightColor})),i()(this,"faceMaterial",new r.nls({color:this.highlightColor,transparent:!0,opacity:.25})),i()(this,"mouse",new r.FM8),i()(this,"raycaster",new r.iMs),i()(this,"vA",new r.Pa4),i()(this,"vB",new r.Pa4),i()(this,"vC",new r.Pa4);var T=E.editor,B=N()(E,O);this.editor=T,this.options=B,this.lineHelper=this.createLineHelper(),this.faceHelper=this.createFaceHelper(),this.onMouseMove=this.onMouseMove.bind(this),this.disabled||this.startListening()}return x()(R,[{key:"magnetThreshold",get:function(){return this.options.magnetThreshold}},{key:"disabled",get:function(){return this.options.enabled!==!0}},{key:"enable",value:function(){this.disabled&&(this.options.enabled=!0,this.startListening())}},{key:"disable",value:function(){this.disabled||(this.options.enabled=!1,this.stopListening())}},{key:"setMagnetThreshold",value:function(T){this.options.magnetThreshold=T}},{key:"startListening",value:function(){this.stopListening(),this.editor.canvas.addEventListener("mousemove",this.onMouseMove,!1)}},{key:"stopListening",value:function(){this.editor.canvas.removeEventListener("mousemove",this.onMouseMove,!1)}},{key:"setMousePosition",value:function(T){var B=this.editor.canvas.getBoundingClientRect();return this.mouse.x=(T.clientX-B.left)/B.width*2-1,this.mouse.y=-((T.clientY-B.top)/B.height)*2+1,B}},{key:"createLineHelper",value:function(){this.lineGeometry.setFromPoints([new r.Pa4,new r.Pa4]);var T=new r.x12(this.lineGeometry,this.lineMaterial);return T.visible=!1,this.editor.mesh.add(T),T}},{key:"showLineHelper",value:function(){this.lineHelper.visible=!0}},{key:"hideLineHelper",value:function(){this.lineHelper.visible=!1}},{key:"updateLineHelper",value:function(T,B){var P=[T,B];this.lineGeometry.setFromPoints(P),this.lineGeometry.computeBoundingBox(),this.lineGeometry.computeBoundingSphere(),this.lineHelper.visible||this.showLineHelper()}},{key:"createFaceHelper",value:function(){this.faceGeometry.setFromPoints([this.vA,this.vB,this.vC]);var T=new r.blk(this.faceGeometry,this.faceMaterial);return T.visible=!1,this.editor.mesh.add(T),T}},{key:"showFaceHelper",value:function(){this.faceHelper.visible=!0}},{key:"hideFaceHelper",value:function(){this.faceHelper.visible=!1}},{key:"updateFaceHelper",value:function(){this.faceGeometry.setFromPoints([this.vA,this.vB,this.vC]),this.faceGeometry.computeBoundingBox(),this.faceGeometry.computeBoundingSphere(),this.faceHelper.visible||this.showFaceHelper()}},{key:"hide",value:function(){this.hideLineHelper(),this.hideFaceHelper()}},{key:"show",value:function(){this.showLineHelper(),this.showFaceHelper()}},{key:"onMouseMove",value:function(T){var B=this;this.setMousePosition(T),this.raycaster.setFromCamera(this.mouse,this.editor.camera);var P=this.raycaster.intersectObject(this.editor.mesh);if(P.length>0){var b=P.find(function(K){return K.object===B.editor.mesh});if(b){var A=b.face,U=this.editor.mesh.geometry;if(A){var k=U.attributes.position;this.vA.set(k.getX(A.a),k.getY(A.a),k.getZ(A.a)),this.vB.set(k.getX(A.b),k.getY(A.b),k.getZ(A.b)),this.vC.set(k.getX(A.c),k.getY(A.c),k.getZ(A.c));var Z=b.point.clone();this.editor.mesh.worldToLocal(Z);var te=[{distance:u(Z,this.vA,this.vB),vertices:[this.vA,this.vB]},{distance:u(Z,this.vB,this.vC),vertices:[this.vB,this.vC]},{distance:u(Z,this.vC,this.vA),vertices:[this.vC,this.vA]}],ie=te.filter(function(K){return K.distance<=(B.options.magnetThreshold||.001)});ie.length>0?(ie.sort(function(K,re){return K.distance-re.distance}),this.updateLineHelper(ie[0].vertices[0],ie[0].vertices[1])):this.hideLineHelper(),this.updateFaceHelper()}}else this.hide()}else this.hide()}},{key:"dispose",value:function(){this.editor.canvas.removeEventListener("mousemove",this.onMouseMove,!1),this.faceGeometry.dispose(),this.lineGeometry.dispose(),this.faceMaterial.dispose(),this.lineMaterial.dispose()}}]),R}(),f=function(){function R(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};y()(this,R),i()(this,"name","snapline"),i()(this,"options",void 0),i()(this,"snaplineImpl",void 0),this.options=h()({enabled:!0,magnetThreshold:.001},E)}return x()(R,[{key:"init",value:function(T){this.snaplineImpl=new l(h()(h()({},this.options),{},{editor:T}))}},{key:"isEnabled",value:function(){return!this.snaplineImpl.disabled}},{key:"enable",value:function(){this.snaplineImpl.enable()}},{key:"disable",value:function(){this.snaplineImpl.disable()}},{key:"toggleEnabled",value:function(T){T!=null?T!==this.isEnabled()&&(T?this.enable():this.disable()):this.isEnabled()?this.disable():this.enable()}},{key:"hide",value:function(){return this.snaplineImpl.hide(),this}},{key:"setMagnetThreshold",value:function(T){return this.snaplineImpl.setMagnetThreshold(T),this}},{key:"getMagnetThreshold",value:function(){return this.snaplineImpl.magnetThreshold}},{key:"dispose",value:function(){this.snaplineImpl.dispose()}}]),R}(),L=e(90399),S=function(E){var T=(0,L.M)();return(0,v.useEffect)(function(){T&&(T.getPlugin("snapline")&&T.disposePlugins("snapline"),T.use(new f(h()({enabled:!0},E))))},[T,E]),null}},20218:function(M,s,e){e.d(s,{T:function(){return I}});var p=e(58444),h=e(48429),v=e(85893),I=function(m){var x=m.children;return(0,v.jsx)(p.g,{children:(0,v.jsx)(h.K,{children:x})})}},48429:function(M,s,e){e.d(s,{K:function(){return m},r:function(){return y}});var p=e(5574),h=e.n(p),v=e(67294),I=e(85893),y=(0,v.createContext)({editor:null,setEditor:function(){}}),m=function(C){var i=C.children,c=(0,v.useState)(null),N=h()(c,2),r=N[0],u=N[1];return(0,I.jsx)(y.Provider,{value:{editor:r,setEditor:u},children:i})}},58444:function(M,s,e){e.d(s,{x:function(){return c},g:function(){return N}});var p=e(67294),h=e(97857),v=e.n(h),I=e(19632),y=e.n(I),m=e(55035),x=e(22979),C=function(){var u=(0,x.sj)({rotateControlsEnabled:!1,wireframe:!1,nodes:[],edges:[],changeList:[],nodeId:1,edgeId:1,selectedEdgeId:void 0,selectedNodeId:void 0,get selectedCell(){var O=u,l=O.nodes.find(function(f){return f.id===O.selectedNodeId})||O.edges.find(function(f){return f.id===O.selectedEdgeId});return l},initData:function(l,f){u.nodes=l.nodes,u.edges=l.edges;var L=u.nodes.map(function(R){return R.id});L.length>0&&(u.nodeId=Math.max.apply(Math,y()(L))+1);var S=u.edges.map(function(R){return R.id});S.length>0&&(u.edgeId=Math.max.apply(Math,y()(S))+1),f!=null&&f.silent||u.changeList.push({command:"init",data:l})},addNode:function(l,f){if(!l.position){console.warn("node position is required");return}var L=l.rotation||[0,0,0],S=l.id||u.nodeId++,R=l.name||"\u8DEF\u5F84\u70B9-".concat(S),E={id:S,name:R,rotation:L,position:l.position,isNode:!0};l.id&&(u.nodeId=Math.max(u.nodeId,l.id)+1),u.nodes.push(E),f!=null&&f.silent||u.changeList.push({command:"addNode",data:E})},removeNode:function(l,f){u.nodes=u.nodes.filter(function(L){return L.id!==l}),f!=null&&f.silent||u.changeList.push({command:"removeNode",data:l})},updateNode:function(l,f,L){var S=u.nodes.find(function(R){return R.id===l});S&&((0,m.nn)(S,f),L!=null&&L.silent||u.changeList.push({command:"updateNode",data:{id:l,data:f}}))},selectNode:function(l,f){var L=u.nodes.find(function(S){return S.id===l});L&&(u.selectedEdgeId=void 0,u.selectedNodeId=l,f!=null&&f.silent||u.changeList.push({command:"selectNode",data:l}))},unselectNode:function(l,f){l===u.selectedNodeId&&(u.selectedNodeId=void 0,f!=null&&f.silent||u.changeList.push({command:"unselectNode",data:l}))},addEdge:function(l,f){var L=l.id||u.edgeId++,S=l.direction||"forward",R=l.name||"\u8DEF\u5F84-".concat(L),E=v()(v()({},l),{},{id:L,direction:S,name:R,isEdge:!0});l.id&&(u.edgeId=Math.max(u.edgeId,l.id)+1),u.edges.push(E),f!=null&&f.silent||u.changeList.push({command:"addEdge",data:E})},removeEdge:function(l,f){u.edges=u.edges.filter(function(L){return L.id!==l}),f!=null&&f.silent||u.changeList.push({command:"removeEdge",data:l})},updateEdge:function(l,f,L){var S=u.edges.find(function(R){return R.id===l});S&&((0,m.nn)(S,f),L!=null&&L.silent||u.changeList.push({command:"updateEdge",data:{id:l,data:f}}))},selectEdge:function(l,f){var L=u.edges.find(function(S){return S.id===l});L&&(u.selectedNodeId=void 0,u.selectedEdgeId=l,f!=null&&f.silent||u.changeList.push({command:"selectEdge",data:l}))},unselectEdge:function(l,f){l===u.selectedEdgeId&&(u.selectedEdgeId=void 0,f!=null&&f.silent||u.changeList.push({command:"unselectEdge",data:l}))},clearSelection:function(l){u.selectedEdgeId=void 0,u.selectedNodeId=void 0,l!=null&&l.silent||u.changeList.push({command:"clearSelection",data:null})},toggleWireframe:function(l,f){typeof l=="undefined"?u.wireframe=!u.wireframe:u.wireframe=l,f!=null&&f.silent||u.changeList.push({command:"toggleWireframe",data:l})},toggleRotateControlsEnabled:function(l,f){typeof l=="undefined"?u.rotateControlsEnabled=!u.rotateControlsEnabled:u.rotateControlsEnabled=l,f!=null&&f.silent||u.changeList.push({command:"toggleRotateControlsEnabled",data:l})},clearChangeList:function(){u.changeList=[]}});return u},i=e(85893),c=(0,p.createContext)(null),N=function(u){var O=u.children,l=(0,p.useRef)();return l.current||(l.current=C()),(0,i.jsx)(c.Provider,{value:l.current,children:O})}},75783:function(M,s,e){e.d(s,{x:function(){return I}});var p=e(67294),h=e(90399);function v(y){var m=(0,p.useRef)(y);return m.current=y,m}var I=function(m,x){var C=v(x),i=(0,h.M)();(0,p.useEffect)(function(){return i&&(C.current=x,i.on(m,C.current)),function(){i&&C.current&&i.off(m,C.current)}},[i])}},90399:function(M,s,e){e.d(s,{M:function(){return v}});var p=e(67294),h=e(48429),v=function(){var y=(0,p.useContext)(h.r),m=y.editor;return m}},81058:function(M,s,e){e.d(s,{E:function(){return I}});var p=e(67294),h=e(58444),v=e(17625),I=function(){var m=(0,p.useContext)(h.x);if(!m)throw new Error("can only be get inside the xmodel component.");return(0,v.R)(m)}},65867:function(M,s,e){e.d(s,{k:function(){return C}});var p=e(5574),h=e.n(p),v=e(67294),I=e(96631),y=e(75783),m=e(90399),x=function(){var c=(0,m.M)(),N=(0,v.useCallback)(function(){return c?!0:(console.warn("editor can only be get inside the xmodel component."),!1)},[c]);return{isLoaded:N}},C=function(){var c=(0,m.M)(),N=x(),r=N.isLoaded,u=(0,v.useState)(!1),O=h()(u,2),l=O[0],f=O[1],L=(0,v.useState)(!1),S=h()(L,2),R=S[0],E=S[1],T=(0,v.useCallback)(function(){return r()&&c?c.undo():null},[c,r]),B=(0,v.useCallback)(function(){return r()&&c?c.redo():null},[c,r]);return(0,y.x)(I.e.onHistoryChanged,function(){c&&(f(c.canUndo()),E(c.canRedo()))}),{undo:T,redo:B,canUndo:l,canRedo:R}}},55035:function(M,s,e){e.d(s,{UG:function(){return m},nn:function(){return y},un:function(){return x}});var p=e(97857),h=e.n(p),v=e(52677),I=e.n(v);function y(C,i){if(I()(i)!=="object"||Array.isArray(i)||!i)return JSON.parse(JSON.stringify(i));if(I()(i)==="object"&&i.toJSON!==void 0&&typeof i.toJSON=="function")return i.toJSON();var c=C;return I()(C)!=="object"&&(c=h()({},i)),Object.keys(i).forEach(function(N){Object.prototype.hasOwnProperty.call(c,N)||(c[N]=i[N]),i[N]===null||i[N]===void 0?delete c[N]:c[N]!==null&&c[N]!==void 0&&(c[N]=y(c[N],i[N]))}),c}function m(C){return!!C&&I()(C)==="object"&&"isNode"in C}function x(C){return!!C&&I()(C)==="object"&&"isEdge"in C}},13400:function(M,s,e){e.d(s,{A:function(){return B}});var p=e(12444),h=e.n(p),v=e(72004),I=e.n(v),y=e(9783),m=e.n(y),x=e(99477);function C(P){var b=new x.cPb(75,P,.001,1e3);return b.up=new x.Pa4(0,0,1),b.position.set(.04,-.11,.02),b.lookAt(0,0,0),b}var i=e(69365);function c(P,b){var A=new i.z(P,b);return A.tick=function(){return A.update()},A.update(),A}function N(){var P=new THREE.AxesHelper(5);return P.position.set(0,0,.001),P}function r(){var P=new x.VLJ(10,10);return P.rotateX(Math.PI/2),P}function u(){var P=new x.Ox3(16777215,1);P.position.set(10,10,10);var b=new x.Mig(16777215,1);return{directionalLight:P,ambientLight:b}}var O=e(64599),l=e.n(O),f=new x.SUY,L=function(){function P(b,A,U){h()(this,P),m()(this,"camera",void 0),m()(this,"scene",void 0),m()(this,"renderer",void 0),m()(this,"updatables",void 0),this.camera=b,this.scene=A,this.renderer=U,this.updatables=[]}return I()(P,[{key:"start",value:function(){var A=this;this.renderer.setAnimationLoop(function(){A.tick(),A.renderer.render(A.scene,A.camera)})}},{key:"stop",value:function(){this.renderer.setAnimationLoop(null)}},{key:"tick",value:function(){var A=f.getDelta(),U=l()(this.updatables),k;try{for(U.s();!(k=U.n()).done;){var Z=k.value;Z.tick(A)}}catch(te){U.e(te)}finally{U.f()}}}]),P}();function S(){var P=new x.CP7({antialias:!0});return P}var R=function(b,A,U){A.aspect=b.clientWidth/b.clientHeight,A.updateProjectionMatrix(),U.setSize(b.clientWidth,b.clientHeight),U.setPixelRatio(window.devicePixelRatio)},E=function(){function P(b,A,U){var k=this;h()(this,P),R(b,A,U),window.addEventListener("resize",function(){R(b,A,U),k.onResize()})}return I()(P,[{key:"onResize",value:function(){}}]),P}();function T(){var P=new x.xsS;return P.background=new x.Ilk(3289650),P}var B=function(){function P(b){var A=this;h()(this,P),m()(this,"camera",void 0),m()(this,"scene",void 0),m()(this,"renderer",void 0),m()(this,"controls",void 0),m()(this,"loop",void 0),this.camera=C(b.clientWidth/b.clientHeight),this.scene=T(),this.renderer=S(),this.loop=new L(this.camera,this.scene,this.renderer),this.controls=c(this.camera,this.renderer.domElement);var U=u(),k=U.ambientLight,Z=U.directionalLight;b.append(this.renderer.domElement),this.loop.updatables.push(this.controls),this.scene.add(k,Z,r());var te=new E(b,this.camera,this.renderer);te.onResize=function(){A.render()}}return I()(P,[{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"start",value:function(){this.loop.start()}},{key:"stop",value:function(){this.loop.stop()}}]),P}()},65680:function(M,s,e){e.r(s)},40753:function(M,s,e){e.r(s),e.d(s,{texts:function(){return h}});var p=e(9926);const h=[{value:"\u9762\u611F\u5E94\u7EBF, \u6DFB\u52A0\u8282\u70B9\u7684\u8F85\u52A9\u5DE5\u5177\uFF0C\u9F20\u6807\u79FB\u52A8\u81F3\u6A21\u578B\u8868\u9762\u65F6\u4F1A\u5C06\u5F53\u524D\u4F4D\u7F6E\u6240\u5728\u7684\u4E09\u89D2\u5F62\u8F6E\u5ED3\u7ED8\u5236\u51FA\u6765\uFF0C\u5E76\u9AD8\u4EAE\u8DDD\u79BB\u6700\u8FD1\u7684\u4E00\u6761\u4E09\u89D2\u5F62\u8FB9",paraId:0,tocIndex:0},{value:"<Snapline />",paraId:1},{value:" \u7EC4\u4EF6\u53EA\u80FD\u5728 ",paraId:1},{value:"<XModel />",paraId:1},{value:" \u7EC4\u4EF6\u4E4B\u5185\u65B9\u53EF\u6B63\u5E38\u4F7F\u7528",paraId:1},{value:"\u5F15\u5165 ",paraId:2},{value:"<Snapline />",paraId:2},{value:" \u540E, \u5373\u53EF\u5F00\u542F\u9762\u611F\u5E94\u7EBF",paraId:2},{value:`<XModel>
  ...
  <Snapline />
</XModel>
`,paraId:3},{value:"\u53C2\u6570\u540D",paraId:4,tocIndex:3},{value:"\u63CF\u8FF0",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"magnetThreshold",paraId:4,tocIndex:3},{value:"\u9AD8\u4EAE\u6700\u8FD1\u8FB9\u7684\u9608\u503C\uFF0C\u5355\u4F4D\u4E3A\u7C73",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"0.001",paraId:4,tocIndex:3}]},66836:function(M,s,e){e.r(s),e.d(s,{texts:function(){return h}});var p=e(59993);const h=[{value:"<XModelEditor />",paraId:0},{value:" \u7EC4\u4EF6\u53EA\u80FD\u5728 ",paraId:0},{value:"<XModel />",paraId:0},{value:" \u7EC4\u4EF6\u4E4B\u5185\u65B9\u53EF\u6B63\u5E38\u4F7F\u7528",paraId:0},{value:"\u5728 ",paraId:1},{value:"<XModel />",paraId:1},{value:" \u4E0B\u5F15\u5165 ",paraId:1},{value:"<XModelEditor />",paraId:1},{value:" \u540E, \u5176\u7EC4\u4EF6\u5185\u90E8\u4F1A\u5C06\u7F16\u8F91\u5668\u7684\u5B9E\u4F8B\u4FDD\u5B58\u5230 ",paraId:1},{value:"<XModel />",paraId:1},{value:" \u7684 context \u4E2D\uFF0C\u4EE5\u4F9B ",paraId:1},{value:"<XModel />",paraId:1},{value:" \u7684 children \u4F7F\u7528, \u53EF\u4EE5\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528 ",paraId:1},{value:"useEditorInstance",paraId:2},{value:" Hook \u5FEB\u901F\u83B7\u53D6\u7F16\u8F91\u5668\u5B9E\u4F8B",paraId:1},{value:`<XModel>
 ...
 <XModelEditor />
<XModel>
`,paraId:3},{value:"\u53C2\u6570\u540D",paraId:4,tocIndex:3},{value:"\u63CF\u8FF0",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"mesh",paraId:4,tocIndex:3},{value:"\u7F16\u8F91\u7684\u5BF9\u8C61\uFF0C\u8282\u70B9\u4E0E\u8FB9\u90FD\u5C06\u6DFB\u52A0\u81F3\u6B64\u7F51\u683C\u4E2D",paraId:4,tocIndex:3},{value:"THREE.Mesh",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"domElement",paraId:4,tocIndex:3},{value:"threejs \u6E32\u67D3\u7684\u753B\u5E03",paraId:4,tocIndex:3},{value:"HTMLCanvasElement",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"camera",paraId:4,tocIndex:3},{value:"\u900F\u89C6\u76F8\u673A",paraId:4,tocIndex:3},{value:"THREE.PerspectiveCamera",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"controls",paraId:4,tocIndex:3},{value:"\u8F68\u9053\u63A7\u5236\u5668",paraId:4,tocIndex:3},{value:"OrbitControls",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"scene",paraId:4,tocIndex:3},{value:"threejs \u573A\u666F",paraId:4,tocIndex:3},{value:"THREE.Scene",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3}]},3394:function(M,s,e){e.r(s),e.d(s,{texts:function(){return h}});var p=e(45299);const h=[{value:"XModel",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\u7684 context \u4F1A\u4FDD\u5B58\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u56E0\u6B64\u6240\u6709\u4E0E\u7F16\u8F91\u5668\u5B9E\u4F8B\u4EA4\u4E92\u7684\u7EC4\u4EF6\u90FD\u9700\u8981\u4FDD\u8BC1\u662F\u4F5C\u4E3A ",paraId:0,tocIndex:0},{value:"XModel",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\u7684\u5B50\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u57FA\u7840\u7684\u4F7F\u7528\u65B9\u6CD5\u53EF\u80FD\u5982\u4E0B\u9762\u7684\u4EE3\u7801\u6240\u793A\uFF1A",paraId:0,tocIndex:0},{value:`import { useEffect, useRef, useState } from 'react';

import { type EditorOptions, XModel, XModelEditor } from '@infore/xmodel';

import { Viewer } from './Viewer';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function ModelEdit() {
  const container = useRef<HTMLDivElement>(null);
  const [prepare, setPrepare] = useState<EditorOptions | null>(null);

  async function init() {
    const viewer = new Viewer(container.current!);
    const result = await new GLTFLoader().loadAsync('/xmodel/workpiece.glb');
    const mesh = result.scene.children[0] as THREE.Mesh;
    viewer.scene.add(mesh);
    viewer.start();
    setPrepare({
      mesh,
      scene: viewer.scene,
      camera: viewer.camera,
      controls: viewer.controls,
      domElement: viewer.renderer.domElement,
    });
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div ref={container} />
      <XModel>{prepare && <XModelEditor {...prepare} />}</XModel>
    </>
  );
}
`,paraId:1,tocIndex:0}]},94343:function(M,s,e){e.r(s),e.d(s,{texts:function(){return h}});var p=e(37771);const h=[{value:"\u4F7F\u7528 ",paraId:0},{value:"XModel",paraId:0},{value:" \u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684\u6A21\u578B\u8DEF\u5F84\u7F16\u8F91\u5668\uFF0C\u4E0B\u9762\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u7F16\u8F91\u5668\u5B9E\u73B0\u7684\u793A\u4F8B\uFF0C\u57FA\u672C\u64CD\u4F5C\u5982\u4E0B\uFF1A",paraId:0},{value:"\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u6A21\u578B\u6DFB\u52A0\u8282\u70B9",paraId:1},{value:"\u6309\u4F4F\u8282\u70B9\u62D6\u62FD\u9F20\u6807\u81F3\u53E6\u4E00\u8282\u70B9\u5373\u53EF\u6DFB\u52A0\u4E00\u6761\u8FB9",paraId:2},{value:"\u9F20\u6807\u70B9\u51FB\u8282\u70B9\u6216\u8FB9\u8FDB\u884C\u9009\u4E2D",paraId:3},{value:"\u6309\u4E0B Delete \u952E\u5220\u9664\u9009\u4E2D\u7684\u8282\u70B9\u6216\u8FB9",paraId:4},{value:"\u6309\u4E0B Ctrl \u952E\u53EF\u7528\u9F20\u6807\u62D6\u62FD\u8282\u70B9\u79FB\u52A8",paraId:5}]},55629:function(M,s,e){e.r(s),e.d(s,{texts:function(){return h}});var p=e(18493);const h=[{value:"\u7F16\u8F91\u5668\u4E8B\u4EF6\u76D1\u542C\u7684 Hook",paraId:0,tocIndex:0},{value:`import { EditorEvent } from '@infore/xmodel';

useEditorEvent(EditorEvent.onNodeAdded, () => { ... });
`,paraId:1,tocIndex:1},{value:` useEditorEvent<T extends keyof EventArgs>(
  name:T,
  callback: (args: EventArgs[T]) => void
);
`,paraId:2,tocIndex:2},{value:"\u65E0",paraId:3,tocIndex:3},{value:`export enum EditorEvent {
  /** \u65B0\u589E\u8282\u70B9 */
  onNodeAdded = 'node:added',
  /** \u5220\u9664\u8282\u70B9 */
  onNodeRemoved = 'node:removed',
  /** \u8282\u70B9\u53D1\u751F\u53D8\u5316 */
  onNodeChanged = 'node:changed',
  /** \u8282\u70B9\u88AB\u9009\u4E2D */
  onNodeSelected = 'node:selected',
  /** \u8282\u70B9\u53D6\u6D88\u9009\u4E2D */
  onNodeUnselected = 'node:unselected',
  /** \u65B0\u589E\u8FB9 */
  onEdgeAdded = 'edge:added',
  /** \u5220\u9664\u8FB9 */
  onEdgeRemoved = 'edge:removed',
  /** \u8FB9\u53D1\u751F\u53D8\u5316 */
  onEdgeChanged = 'edge:changed',
  /** \u8FB9\u88AB\u9009\u4E2D */
  onEdgeSelected = 'edge:selected',
  /** \u8FB9\u53D6\u6D88\u9009\u4E2D */
  onEdgeUnselected = 'edge:unselected',
  /** \u5386\u53F2\u8BB0\u5F55\u53D1\u751F\u53D8\u5316 */
  onHistoryChanged = 'history:changed',
  /** \u9009\u62E9\u53D1\u751F\u53D8\u5316 */
  onSelectionChanged = 'selection:changed',
  /** \u7EBF\u6846\u53D1\u751F\u53D8\u5316 */
  onWireframeChanged = 'wireframe:changed',
  /** \u65CB\u8F6C\u63A7\u4EF6\u5F00\u542F\u72B6\u6001\u53D1\u751F\u53D8\u5316 */
  onRotateControlsEnableChanged = 'rotateControlsEnable:changed',
}
`,paraId:4,tocIndex:4}]},76236:function(M,s,e){e.r(s),e.d(s,{texts:function(){return h}});var p=e(7037);const h=[{value:"\u7528\u4E8E\u83B7\u53D6\u7F16\u8F91\u5668\u5B9E\u4F8B\u7684 Hook",paraId:0,tocIndex:0},{value:`const editor = useEditorInstance();
`,paraId:1,tocIndex:1},{value:`const editor: Editor = useEditorInstance();
`,paraId:2,tocIndex:2},{value:"\u53C2\u6570",paraId:3,tocIndex:3},{value:"\u63CF\u8FF0",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"editor",paraId:3,tocIndex:3},{value:"\u7F16\u8F91\u5668\u5B9E\u4F8B",paraId:3,tocIndex:3},{value:"Editor",paraId:3,tocIndex:3},{value:"null",paraId:3,tocIndex:3},{value:"\u65E0",paraId:4,tocIndex:4}]},26768:function(M,s,e){e.r(s),e.d(s,{texts:function(){return h}});var p=e(50712);const h=[{value:"XModel",paraId:0,tocIndex:0},{value:" \u5BF9\u7F16\u8F91\u5668\u7684\u6570\u636E\u8FDB\u884C\u4E86\u7EDF\u4E00\u7684\u7BA1\u7406\uFF0C\u6574\u4E2A\u7F16\u8F91\u5668\u7684\u6570\u636E\u5B58\u5728\u4E00\u4E2A ",paraId:0,tocIndex:0},{value:"store",paraId:0,tocIndex:0},{value:" \u4E2D\uFF0C\u8FD9\u8BA9\u5F00\u53D1\u53D8\u5F97\u975E\u5E38\u5BB9\u6613\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:0,tocIndex:0},{value:"useEditorStore",paraId:0,tocIndex:0},{value:" \u65B9\u4FBF\u5FEB\u6377\u7684\u64CD\u4F5C ",paraId:0,tocIndex:0},{value:"store",paraId:0,tocIndex:0},{value:" , \u4ECE\u800C\u66F4\u65B0\u7F16\u8F91\u5668\u6570\u636E, \u5B9E\u73B0\u66F4\u65B0\u7F16\u8F91\u5668",paraId:0,tocIndex:0},{value:`const { nodes, edges, addNode, removeNode, ... } = useEditorStore();
`,paraId:1,tocIndex:1},{value:`type NodeOptions = {
  id?: number;
  name?: string;
  position?: number[];
  rotation?: number[];
};

type EditorData = {
  nodes: ReturnType<Node['toJSON']>[];
  edges: ReturnType<Edge['toJSON']>[];
};

type ActionOptions = {
  silent?: boolean;
};
`,paraId:2,tocIndex:2},{value:"\u53C2\u6570",paraId:3,tocIndex:2},{value:"\u63CF\u8FF0",paraId:3,tocIndex:2},{value:"\u7C7B\u578B",paraId:3,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:2},{value:"nodes",paraId:3,tocIndex:2},{value:"\u7F16\u8F91\u5668\u6240\u6709\u8282\u70B9",paraId:3,tocIndex:2},{value:'EditorData["nodes"]',paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"edges",paraId:3,tocIndex:2},{value:"\u7F16\u8F91\u5668\u6240\u6709\u8FB9",paraId:3,tocIndex:2},{value:'EditorData["edges"]',paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"initData",paraId:3,tocIndex:2},{value:"\u521D\u59CB\u5316\u6570\u636E",paraId:3,tocIndex:2},{value:"(data: EditorData, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"addNode",paraId:3,tocIndex:2},{value:"\u6DFB\u52A0\u8282\u70B9",paraId:3,tocIndex:2},{value:"(node: NodeOptions, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"removeNode",paraId:3,tocIndex:2},{value:"\u79FB\u9664\u8282\u70B9",paraId:3,tocIndex:2},{value:"(id: number, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"selectNode",paraId:3,tocIndex:2},{value:"\u9009\u4E2D\u8282\u70B9",paraId:3,tocIndex:2},{value:"(id: number, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"unselectNode",paraId:3,tocIndex:2},{value:"\u53D6\u6D88\u9009\u4E2D\u8282\u70B9",paraId:3,tocIndex:2},{value:"(id: number, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"updateNode",paraId:3,tocIndex:2},{value:"\u66F4\u65B0\u8282\u70B9",paraId:3,tocIndex:2},{value:"(id: number, data: Omit<NodeOptions, 'id'>, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"addEdge",paraId:3,tocIndex:2},{value:"\u6DFB\u52A0\u8FB9",paraId:3,tocIndex:2},{value:"(edge: EdgeOptions, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"removeEdge",paraId:3,tocIndex:2},{value:"\u79FB\u9664\u8FB9",paraId:3,tocIndex:2},{value:"(id: number, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"selectEdge",paraId:3,tocIndex:2},{value:"\u9009\u4E2D\u8FB9",paraId:3,tocIndex:2},{value:"(id: number, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"unselectEdge",paraId:3,tocIndex:2},{value:"\u53D6\u6D88\u9009\u4E2D\u8FB9",paraId:3,tocIndex:2},{value:"(id: number, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"updateEdge",paraId:3,tocIndex:2},{value:"\u66F4\u65B0\u8FB9",paraId:3,tocIndex:2},{value:"(id: number, data: Omit<EdgeOptions, 'source' | 'target' | 'id'>, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"clearSelection",paraId:3,tocIndex:2},{value:"\u6E05\u7A7A\u6240\u6709\u9009\u4E2D\u5BF9\u8C61",paraId:3,tocIndex:2},{value:"(options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"toggleWireframe",paraId:3,tocIndex:2},{value:"\u5207\u6362\u7EBF\u6846\u663E\u793A",paraId:3,tocIndex:2},{value:"(enabled?: boolean, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"toggleRotateControlsEnabled",paraId:3,tocIndex:2},{value:"\u5207\u6362\u542F\u7528\u8282\u70B9\u7684\u65CB\u8F6C\u63A7\u5236\u5668",paraId:3,tocIndex:2},{value:"(enabled?: boolean, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2}]},75826:function(M,s,e){e.r(s),e.d(s,{texts:function(){return h}});var p=e(23755);const h=[{value:"\u7528\u4E8E\u5B9E\u73B0\u7F16\u8F91\u5668\u5386\u53F2\u8BB0\u5F55\u7684 Hook",paraId:0,tocIndex:0},{value:`const { undo, redo, canUndo, canRedo } = useHistory();
`,paraId:1,tocIndex:1},{value:`
const {
  undo: () => void | null,
  redo: () => void | null,
  canUndo: boolean,
  canRedo: boolean
} = useHistory();

`,paraId:2,tocIndex:2},{value:"\u53C2\u6570",paraId:3,tocIndex:3},{value:"\u63CF\u8FF0",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"undo",paraId:3,tocIndex:3},{value:"\u64A4\u9500",paraId:3,tocIndex:3},{value:"() => void",paraId:3,tocIndex:3},{value:" | ",paraId:3,tocIndex:3},{value:"null",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"redo",paraId:3,tocIndex:3},{value:"\u91CD\u505A",paraId:3,tocIndex:3},{value:"() => void",paraId:3,tocIndex:3},{value:" | ",paraId:3,tocIndex:3},{value:"null",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"canUndo",paraId:3,tocIndex:3},{value:"\u662F\u5426\u53EF\u4EE5\u64A4\u9500",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"false",paraId:3,tocIndex:3},{value:"canRedo",paraId:3,tocIndex:3},{value:"\u662F\u5426\u53EF\u4EE5\u91CD\u505A",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"false",paraId:3,tocIndex:3},{value:"\u65E0",paraId:4,tocIndex:4}]},51446:function(M,s,e){e.r(s),e.d(s,{texts:function(){return h}});var p=e(68537);const h=[]},86761:function(M,s){s.Z=`import { Space, Steps, Typography } from 'antd';

import { type EditorData, useEditorStore } from '@infore/xmodel';

import { InputFiled, SelectField } from './fields';
import { NodeView } from './NodeView';
import { DeepReadonly } from './types';

export type EdgeViewProps = {
  edge: DeepReadonly<EditorData['edges'][number]>;
};

export function EdgeView({ edge }: EdgeViewProps) {
  const { nodes, updateEdge } = useEditorStore();
  const source = nodes.find((node) => node.id === edge.source);
  const target = nodes.find((node) => node.id === edge.target);

  return (
    <Steps progressDot current={3} direction="vertical">
      {source && <Steps.Step title="\u8D77\u70B9" description={<NodeView node={source} />} />}
      <Steps.Step
        title="\u8DEF\u5F84"
        description={
          <Space direction="vertical" size="large" className="flex">
            <Typography.Text>
              <span className="mr-[8px]">\u7F16\u53F7</span>#{edge.id}
            </Typography.Text>
            <InputFiled
              label="\u540D\u79F0"
              value={edge.name}
              onChange={(value) => {
                updateEdge(edge.id, { name: value });
              }}
            />
            <SelectField
              label="\u65B9\u5411"
              value={edge.direction}
              options={[
                {
                  label: '\u6B63\u5411',
                  value: 'forward',
                },
                {
                  label: '\u9006\u5411',
                  value: 'backward',
                },
                {
                  label: '\u53CC\u5411',
                  value: 'both',
                },
              ]}
              onChange={(value) => {
                updateEdge(edge.id, { direction: value });
              }}
            />
          </Space>
        }
      />
      {target && <Steps.Step title="\u7EC8\u70B9" description={<NodeView node={target} />} />}
    </Steps>
  );
}
`},97593:function(M,s){s.Z=`import {
  CheckSquareOutlined,
  CodepenOutlined,
  DeleteOutlined,
  RedoOutlined,
  RotateLeftOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { ActionGroup } from '@ant-design/pro-editor';
import { message } from 'antd';

import { isEdge, isNode, useEditorInstance, useEditorStore, useHistory } from '@infore/xmodel';

import { isEqual, orderBy } from 'lodash-es';

const enabledStyle = {
  color: 'rgba(0,0,0,0.88)',
  background: 'rgba(0,0,0,0.06)',
};

export function Header() {
  const { canRedo, canUndo, undo, redo } = useHistory();
  const {
    removeNode,
    removeEdge,
    selectedCell,
    wireframe,
    toggleWireframe,
    toggleRotateControlsEnabled,
    rotateControlsEnabled,
    nodes,
    edges,
  } = useEditorStore();

  const editor = useEditorInstance();

  const checkData = () => {
    if (!editor) return;
    const dataIsEqual = isEqual(editor.toJSON(), {
      nodes: orderBy(nodes, ['id']),
      edges: orderBy(edges, ['id']),
    });

    if (dataIsEqual) {
      message.success('\u6570\u636E\u4E00\u81F4');
    } else {
      message.error('\u6570\u636E\u4E0D\u4E00\u81F4');
    }
  };

  const items = [
    {
      disabled: !canUndo,
      icon: <UndoOutlined />,
      title: '\u64A4\u9500',
      onClick: () => {
        if (canUndo) {
          undo();
        }
      },
    },
    {
      disabled: !canRedo,
      icon: <RedoOutlined />,
      title: '\u91CD\u505A',
      onClick: () => {
        if (canRedo) {
          redo();
        }
      },
    },
    {
      disabled: !selectedCell,
      icon: <DeleteOutlined />,
      title: '\u5220\u9664',
      onClick: () => {
        if (selectedCell) {
          if (isNode(selectedCell)) {
            removeNode(selectedCell.id);
          }

          if (isEdge(selectedCell)) {
            removeEdge(selectedCell.id);
          }
        }
      },
    },
    {
      icon: <CodepenOutlined />,
      title: '\u5207\u6362\u7EBF\u6846\u663E\u793A',
      onClick: () => {
        toggleWireframe();
      },
      style: wireframe ? enabledStyle : undefined,
    },
    {
      icon: <RotateLeftOutlined />,
      title: '\u5207\u6362\u65CB\u8F6C\u63A7\u5236',
      onClick: () => {
        toggleRotateControlsEnabled();
      },
      style: rotateControlsEnabled ? enabledStyle : undefined,
    },
    {
      icon: <CheckSquareOutlined />,
      title: '\u6570\u636E\u68C0\u67E5',
      onClick: () => {
        checkData();
      },
    },
  ];

  return <ActionGroup type="ghost" items={items} />;
}
`},84141:function(M,s){s.Z=`import {
  allExpanded, // collapseAllNested,
  defaultStyles,
  JsonView,
} from 'react-json-view-lite';

import { useEditorStore } from '@infore/xmodel';

import { orderBy } from 'lodash-es';

export function LeftPannel() {
  const { nodes, edges, selectedCell } = useEditorStore();
  const json = {
    nodes: orderBy(nodes, ['id']),
    edges: orderBy(edges, ['id']),
    selectedCell,
  };

  return <JsonView data={json} shouldExpandNode={allExpanded} style={defaultStyles} />;
}
`},14600:function(M,s){s.Z=`import { useState } from 'react';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Card, Checkbox, Tabs, Typography } from 'antd';

import { isNode, useEditorStore } from '@infore/xmodel';

import { cn } from './utils';
import VirtualList from './VirtualList';
import { orderBy } from 'lodash-es';

function OutsideRenderNode({ id }: { id: number }) {
  return (
    <span className="flex w-[40px] flex-col items-center justify-center">
      <span className="relative size-4 rounded-full bg-[#3944f0] text-center" />
      <Typography.Text className="text-center">#{id}</Typography.Text>
    </span>
  );
}

export function ListView() {
  const [selectTab, setSelectTab] = useState('nodes');
  const { edges, nodes, selectedCell, selectNode, selectEdge, unselectEdge, unselectNode } =
    useEditorStore();

  return (
    <Tabs
      activeKey={selectTab}
      onChange={(v) => setSelectTab(v)}
      centered
      destroyInactiveTabPane
      items={[
        {
          label: '\u70B9\u4F4D',
          key: 'nodes',
          children: (
            <VirtualList data={orderBy(nodes, ['id'])}>
              {(cell) => {
                return (
                  <Card bordered={false} size="small">
                    <div className="flex w-full items-center">
                      <Checkbox
                        onChange={(e) => {
                          if (e.target.checked) {
                            selectNode(cell.id);
                          } else {
                            unselectNode(cell.id);
                          }
                        }}
                        checked={
                          selectedCell && isNode(selectedCell) && selectedCell.id === cell.id
                        }
                      />
                      <OutsideRenderNode id={cell.id} />
                      <Typography.Text className="flex-1 truncate">{cell.name}</Typography.Text>
                    </div>
                  </Card>
                );
              }}
            </VirtualList>
          ),
        },
        {
          label: '\u8DEF\u5F84',
          key: 'edges',
          children: (
            <VirtualList data={orderBy(edges, ['id'])}>
              {(cell) => {
                const source = nodes.find((n) => n.id === cell.source)!;
                const target = nodes.find((n) => n.id === cell.target)!;

                return (
                  <Card bordered={false} size="small">
                    <div className="flex w-full items-center">
                      <Checkbox
                        onChange={(e) => {
                          if (e.target.checked) {
                            selectEdge(cell.id);
                          } else {
                            unselectEdge(cell.id);
                          }
                        }}
                        checked={
                          selectedCell && 'isEdge' in selectedCell && selectedCell.id === cell.id
                        }
                      />
                      <OutsideRenderNode id={source.id} />
                      <LeftOutlined
                        className={cn(
                          'mr-[10px]',
                          cell.direction === 'forward' ? 'invisible' : 'visible',
                        )}
                      />
                      <Typography.Text className="flex-1 truncate text-center">
                        {cell.name}
                      </Typography.Text>
                      <RightOutlined
                        className={cn(
                          'ml-[10px]',
                          cell.direction === 'backward' ? 'invisible' : 'visible',
                        )}
                      />
                      <OutsideRenderNode id={target.id} />
                    </div>
                  </Card>
                );
              }}
            </VirtualList>
          ),
        },
      ]}
    />
  );
}
`},77379:function(M,s){s.Z=`import { Space, Typography } from 'antd';

import { type EditorData, useEditorStore } from '@infore/xmodel';

import { InputFiled, InputNumberFiled } from './fields';
import { type DeepReadonly } from './types';

export type NodeViewProps = {
  node: DeepReadonly<EditorData['nodes'][number]>;
};

export function NodeView({ node }: NodeViewProps) {
  const { updateNode } = useEditorStore();

  return (
    <Space direction="vertical" size="large" className="flex">
      <Typography.Text>
        <span className="mr-[8px]">\u7F16\u53F7</span>#{node.id}
      </Typography.Text>
      <InputFiled
        onChange={(value) => updateNode(node.id, { name: value })}
        label="\u540D\u79F0"
        value={node.name}
      />
      <InputNumberFiled disabled label="X" value={node.position[0]} />
      <InputNumberFiled disabled label="Y" value={node.position[1]} />
      <InputNumberFiled disabled label="Z" value={node.position[2]} />
      <InputNumberFiled disabled label="W" value={node.rotation[0]} />
      <InputNumberFiled disabled label="P" value={node.rotation[1]} />
      <InputNumberFiled disabled label="R" value={node.rotation[2]} />
    </Space>
  );
}
`},71184:function(M,s){s.Z=`import { useEffect, useState } from 'react';

import { EditOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Card, Tabs } from 'antd';

import { isEdge, isNode, useEditorStore } from '@infore/xmodel';

import { EdgeView } from './EdgeView';
import { ListView } from './ListView';
import { NodeView } from './NodeView';

export function RightPannel() {
  const [type, setType] = useState('list');
  const { selectedCell } = useEditorStore();

  useEffect(() => {
    setType(selectedCell ? 'cell' : 'list');
  }, [selectedCell]);

  return (
    <Tabs
      centered
      destroyInactiveTabPane
      activeKey={type}
      onChange={setType}
      items={[
        {
          label: '\u5143\u7D20\u5217\u8868',
          key: 'list',
          children: <ListView />,
          icon: <UnorderedListOutlined />,
        },
        {
          label: '\u5C5E\u6027\u7F16\u8F91',
          key: 'cell',
          disabled: !selectedCell,
          children: (
            <Card bordered={false} size="small">
              {isNode(selectedCell) && <NodeView node={selectedCell} />}
              {isEdge(selectedCell) && <EdgeView edge={selectedCell} />}
            </Card>
          ),
          icon: <EditOutlined />,
        },
      ]}
    />
  );
}
`},943:function(M,s){s.Z=`import { type ComponentProps, useRef } from 'react';

import { Empty } from 'antd';
import List from 'rc-virtual-list';

import { useSize } from '@infore/hooks';

type VirtualListProps<T> = Omit<
  ComponentProps<typeof List<T>>,
  'height' | 'itemHeight' | 'itemKey'
> & {
  containerClass?: string;
};

function VirtualList<T = unknown>({ children, ...rest }: VirtualListProps<T>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const size = useSize(ref);
  const containerClass = rest.containerClass || 'h-[calc(100vh-360px)]';
  const showEmpty = rest.data.length === 0;

  return (
    <div ref={ref} className={containerClass}>
      {showEmpty && <Empty className="absolute inset-x-0 top-0" />}
      {size?.height ? (
        <List {...rest} itemKey="id" itemHeight={60} height={size.height}>
          {children}
        </List>
      ) : null}
    </div>
  );
}

export default VirtualList;
`},56634:function(M,s){s.Z=`import type { CSSProperties, ReactNode } from 'react';

import { Input, InputNumber, type InputNumberProps, type InputProps } from '@ant-design/pro-editor';
import { Typography } from 'antd';

const inputStyle: CSSProperties = {
  height: 24,
};

export const InputFiled = (props: InputProps & { label?: ReactNode }) => {
  const { label = '\u6807\u7B7E' } = props;
  return (
    <div className="group">
      <Typography.Text className="mr-[8px] break-keep">{label}</Typography.Text>
      <Input {...props} style={inputStyle} />
    </div>
  );
};

export const InputNumberFiled = (props: InputNumberProps & { label?: ReactNode }) => {
  const { label = '\u6807\u7B7E' } = props;
  return (
    <div className="group">
      <Typography.Text className="mr-[8px] break-keep">{label}</Typography.Text>
      <InputNumber {...props} style={{ ...inputStyle, width: '100%' }} />
    </div>
  );
};
`},39306:function(M,s){s.Z=`import React from 'react';

import { Select, type SelectProps } from '@ant-design/pro-editor';
import { Typography } from 'antd';

export const SelectField = (props: SelectProps & { label?: string }) => {
  const { label = '\u7BAD\u5934' } = props;
  return (
    <div className="group">
      <Typography.Text className="mr-[8px] break-keep">{label}</Typography.Text>
      <Select
        style={{
          width: '100%',
          height: 24,
        }}
        {...props}
      />
    </div>
  );
};
`},87132:function(M,s){s.Z=`.group {
  display: flex;
  flex-direction: row;
  align-items: center;

  input,
  select {
    height: 24px;
    line-height: 1;
  }
}

.split {
  display: flex;
  grid-gap: 8px;
}
`},53900:function(M,s){s.Z=`import './index.less';

export * from './Input';
export * from './Select';
`},73983:function(M,s){s.Z=`import React, { useEffect, useRef, useState } from 'react';
import 'react-json-view-lite/dist/index.css';

import { EditorLayout } from '@ant-design/pro-editor';
import { Button, Space } from 'antd';

import { type EditorOptions, Snapline, XModel, XModelEditor } from '@infore/xmodel';
import { Viewer } from '@infore/xviewer';

import { Header } from './Header';
import { LeftPannel } from './LeftPannel';
import { RightPannel } from './RightPannel';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function ModelEdit() {
  const container = useRef<HTMLDivElement>(null);
  const [prepare, setPrepare] = useState<EditorOptions | null>(null);

  async function init() {
    const viewer = new Viewer(container.current!);
    const result = await new GLTFLoader().loadAsync('/xmodel/workpiece.glb');
    const mesh = result.scene.children[0] as THREE.Mesh;
    viewer.scene.add(mesh);
    viewer.start();
    setPrepare({
      mesh,
      scene: viewer.scene,
      camera: viewer.camera,
      controls: viewer.controls,
      domElement: viewer.renderer.domElement,
    });
  }

  useEffect(() => {
    setTimeout(init, 200);
  }, []);

  return (
    <XModel>
      <EditorLayout
        style={{
          maxWidth: '100%',
          height: '800px',
        }}
        themeType="ghost"
        bottomPannel={false}
        header={{
          children: <Header />,
          themeType: 'ghost',
          extra: (
            <Space>
              <Button type="primary">\u4FDD\u5B58</Button>
              <Button type="dashed">\u5BFC\u51FA</Button>
            </Space>
          ),
        }}
        footer={false}
        centerPannel={{
          className: 'size-full',
          children: <div ref={container} className="size-full" />,
        }}
        leftPannel={{
          className: 'w-[300px] !h-[calc(100vh-249px)]',
          children: (
            <div className="scrollbar h-full overflow-y-auto">
              <LeftPannel />
            </div>
          ),
        }}
        rightPannel={{
          className: 'w-[300px] !h-[calc(100vh-249px)]',
          children: (
            <div className="h-full overflow-y-auto">
              <RightPannel />
            </div>
          ),
        }}
      />
      {prepare && (
        <>
          <XModelEditor {...prepare} />
          <Snapline magnetThreshold={0.001} />
        </>
      )}
    </XModel>
  );
}
`},51741:function(M,s){s.Z=`import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`}}]);
