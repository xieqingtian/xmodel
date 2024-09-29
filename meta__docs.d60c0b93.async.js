"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1904],{7692:function(M,a,e){e.r(a),e.d(a,{demos:function(){return v}});var p=e(67294),m=e(59993),v={}},50623:function(M,a,e){e.r(a),e.d(a,{demos:function(){return v}});var p=e(67294),m=e(45299),v={}},51183:function(M,a,e){e.r(a),e.d(a,{demos:function(){return Ce}});var p={};e.r(p),e.d(p,{EditorEvent:function(){return _.e},XModel:function(){return c.T},XModelEditor:function(){return O.u},apply:function(){return S.nn},isEdge:function(){return S.un},isNode:function(){return S.UG},useEditorEvent:function(){return h.x},useEditorInstance:function(){return r.M},useEditorStore:function(){return L.E},useHistory:function(){return N.k}});var m={};e.r(m),e.d(m,{Loader:function(){return he},Viewer:function(){return de.A},createGLTFLoader:function(){return ne},formatNumber:function(){return w}});var v=e(15009),E=e.n(v),x=e(99289),g=e.n(x),I=e(67294),y=e.t(I,2),i=e(37771),d=e(67256),u=e(39772),b=e(10060),c=e(20218),O=e(60338),r=e(90399),h=e(75783),N=e(65867),L=e(81058),S=e(55035),_=e(96631),de=e(13400),J=e(19632),D=e.n(J),R=e(12444),j=e.n(R),U=e(72004),Y=e.n(U),re=e(9783),z=e.n(re),ce=e(99477);function w(se){return new Intl.NumberFormat("en-us",{useGrouping:!0}).format(se)}function ne(se){return ie.apply(this,arguments)}function ie(){return ie=g()(E()().mark(function se(Z){var ue,Ee,fe,ve,ae,te,Q,G;return E()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,Promise.resolve().then(e.bind(e,77836));case 2:return ue=k.sent,Ee=ue.GLTFLoader,k.next=6,e.e(2854).then(e.bind(e,82854));case 6:return fe=k.sent,ve=fe.DRACOLoader,k.next=10,e.e(4917).then(e.bind(e,54917));case 10:return ae=k.sent,te=ae.MeshoptDecoder,Q=new ve,Q.setDecoderPath("/draco/"),G=new Ee(Z),G.setDRACOLoader(Q),G.setMeshoptDecoder(te),k.abrupt("return",G);case 18:case"end":return k.stop()}},se)})),ie.apply(this,arguments)}var he=function(){function se(Z){j()(this,se),z()(this,"viewer",void 0),this.viewer=Z}return Y()(se,[{key:"loadFile",value:function(ue,Ee){var fe=this,ve=ue.name,ae=ve.split(".").pop().toLowerCase(),te=new FileReader;switch(te.addEventListener("progress",function(Q){var G="(".concat(w(Math.floor(Q.total/1e3))," KB)"),me="".concat(Math.floor(Q.loaded/Q.total*100),"%");console.log("Loading",ve,G,me)}),ae){case"glb":{te.addEventListener("load",function(){var Q=g()(E()().mark(function G(me){var k,oe;return E()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return k=me.target.result,X.next=3,ne();case 3:oe=X.sent,oe.parse(k,"",function(ge){var q,pe=ge.scene;pe.name=ve,(q=pe.animations).push.apply(q,D()(ge.animations)),fe.viewer.scene.add(pe),oe.dracoLoader.dispose()});case 5:case"end":return X.stop()}},G)}));return function(G){return Q.apply(this,arguments)}}(),!1),te.readAsArrayBuffer(ue);break}case"gltf":{te.addEventListener("load",function(){var Q=g()(E()().mark(function G(me){var k,oe;return E()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return k=me.target.result,X.next=3,ne(Ee);case 3:oe=X.sent,oe.parse(k,"",function(ge){var q,pe=ge.scene;pe.name=ve,(q=pe.animations).push.apply(q,D()(ge.animations)),fe.viewer.scene.add(pe),oe.dracoLoader.dispose()});case 5:case"end":return X.stop()}},G)}));return function(G){return Q.apply(this,arguments)}}(),!1),te.readAsArrayBuffer(ue);break}case"obj":{te.addEventListener("load",function(){var Q=g()(E()().mark(function G(me){var k,oe,Ie,X;return E()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return k=me.target.result,q.next=3,e.e(7011).then(e.bind(e,87011));case 3:oe=q.sent,Ie=oe.OBJLoader,X=new Ie().parse(k),X.name=ve,fe.viewer.scene.add(X);case 8:case"end":return q.stop()}},G)}));return function(G){return Q.apply(this,arguments)}}(),!1),te.readAsText(ue);break}case"stl":{te.addEventListener("load",function(){var Q=g()(E()().mark(function G(me){var k,oe,Ie,X,ge,q;return E()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return k=me.target.result,xe.next=3,e.e(8476).then(e.bind(e,48476));case 3:oe=xe.sent,Ie=oe.STLLoader,X=new Ie().parse(k),ge=new ce.Wid,q=new ce.Kj0(X,ge),q.name=ve,fe.viewer.scene.add(q);case 10:case"end":return xe.stop()}},G)}));return function(G){return Q.apply(this,arguments)}}(),!1),te.readAsBinaryString!==void 0?te.readAsBinaryString(ue):te.readAsArrayBuffer(ue);break}default:console.error("Unsupported file format (".concat(ae,")."));break}}}]),se}(),W=e(77836),n=e(15552),t=e(71633),s=e(98315),o=e(63852),l=e(39281),f=e(49e3),C=e(73016),P=e(89449),T=e(39113),B=e(66951),K=e(79832),V=e(67417),le=e(65680),$=e(56793),ee=e(41972),ye=e(90512),F=e(98388),A=e(85344),H=e(57383),Ce={"docs-examples-main-readme-demo-main":{component:I.memo(I.lazy(function(){return e.e(2433).then(e.bind(e,98700))})),asset:{type:"BLOCK",id:"docs-examples-main-readme-demo-main",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(73983).Z},react:{type:"NPM",value:"18.3.1"},"react-json-view-lite":{type:"NPM",value:"1.5.0"},"@ant-design/pro-editor":{type:"NPM",value:"1.3.0"},antd:{type:"NPM",value:"5.21.1"},"@infore/xmodel":{type:"NPM",value:"0.0.1"},"@infore/xviewer":{type:"NPM",value:"0.0.1"},three:{type:"NPM",value:"0.169.0"},"./RightPannel.tsx":{type:"FILE",value:e(71184).Z},"./Header.tsx":{type:"FILE",value:e(97593).Z},"./LeftPannel.tsx":{type:"FILE",value:e(84141).Z},"@ant-design/icons":{type:"NPM",value:"5.5.1"},"lodash-es":{type:"NPM",value:"4.17.21"},"./NodeView.tsx":{type:"FILE",value:e(77379).Z},"./EdgeView.tsx":{type:"FILE",value:e(86761).Z},"./ListView.tsx":{type:"FILE",value:e(14600).Z},"./fields.ts":{type:"FILE",value:e(53900).Z},"./Select.tsx":{type:"FILE",value:e(39306).Z},"./Input.tsx":{type:"FILE",value:e(56634).Z},"./index.less":{type:"FILE",value:e(87132).Z},"./VirtualList.tsx":{type:"FILE",value:e(943).Z},"./utils.ts":{type:"FILE",value:e(51741).Z},clsx:{type:"NPM",value:"2.1.1"},"tailwind-merge":{type:"NPM",value:"2.5.2"},"rc-virtual-list":{type:"NPM",value:"3.14.8"},"@infore/hooks":{type:"NPM",value:"1.5.4"}},entry:"index.tsx"},context:{"./RightPannel.tsx":n,"./Header.tsx":t,"./LeftPannel.tsx":s,"./NodeView.tsx":C,"./EdgeView.tsx":P,"./ListView.tsx":T,"./fields.ts":B,"./Select.tsx":K,"./Input.tsx":V,"./index.less":le,"./VirtualList.tsx":$,"./utils.ts":ee,react:y,"react-json-view-lite/dist/index.css":d,"@ant-design/pro-editor":u,antd:b,"@infore/xmodel":p,"@infore/xviewer":m,"three/examples/jsm/loaders/GLTFLoader.js":W,"C:/Workspace/libs/infore-xmodel/docs/examples/main/RightPannel.tsx":n,"C:/Workspace/libs/infore-xmodel/docs/examples/main/Header.tsx":t,"C:/Workspace/libs/infore-xmodel/docs/examples/main/LeftPannel.tsx":s,"react-json-view-lite":o,"@ant-design/icons":l,"lodash-es":f,"C:/Workspace/libs/infore-xmodel/docs/examples/main/NodeView.tsx":C,"C:/Workspace/libs/infore-xmodel/docs/examples/main/EdgeView.tsx":P,"C:/Workspace/libs/infore-xmodel/docs/examples/main/ListView.tsx":T,"C:/Workspace/libs/infore-xmodel/docs/examples/main/fields/index.ts":B,"C:/Workspace/libs/infore-xmodel/docs/examples/main/fields/Select.tsx":K,"C:/Workspace/libs/infore-xmodel/docs/examples/main/fields/Input.tsx":V,"C:/Workspace/libs/infore-xmodel/docs/examples/main/fields/index.less":le,"C:/Workspace/libs/infore-xmodel/docs/examples/main/VirtualList.tsx":$,"C:/Workspace/libs/infore-xmodel/docs/examples/main/utils.ts":ee,clsx:ye,"tailwind-merge":F,"rc-virtual-list":A,"@infore/hooks":H},renderOpts:{compile:function(){var se=g()(E()().mark(function ue(){var Ee,fe=arguments;return E()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return ae.next=2,e.e(4019).then(e.bind(e,4019));case 2:return ae.abrupt("return",(Ee=ae.sent).default.apply(Ee,fe));case 3:case"end":return ae.stop()}},ue)}));function Z(){return se.apply(this,arguments)}return Z}()}}}},36826:function(M,a,e){e.r(a),e.d(a,{demos:function(){return v}});var p=e(67294),m=e(18493),v={}},22791:function(M,a,e){e.r(a),e.d(a,{demos:function(){return v}});var p=e(67294),m=e(7037),v={}},44238:function(M,a,e){e.r(a),e.d(a,{demos:function(){return v}});var p=e(67294),m=e(50712),v={}},93020:function(M,a,e){e.r(a),e.d(a,{demos:function(){return v}});var p=e(67294),m=e(23755),v={}},11171:function(M,a,e){e.r(a),e.d(a,{demos:function(){return v}});var p=e(67294),m=e(68537),v={}},89449:function(M,a,e){e.r(a),e.d(a,{EdgeView:function(){return y}});var p=e(42119),m=e(42075),v=e(7825),E=e(81058),x=e(66951),g=e(73016),I=e(85893);function y(i){var d=i.edge,u=(0,E.E)(),b=u.nodes,c=u.updateEdge,O=b.find(function(h){return h.id===d.source}),r=b.find(function(h){return h.id===d.target});return(0,I.jsxs)(p.Z,{progressDot:!0,current:3,direction:"vertical",children:[O&&(0,I.jsx)(p.Z.Step,{title:"\u8D77\u70B9",description:(0,I.jsx)(g.NodeView,{node:O})}),(0,I.jsx)(p.Z.Step,{title:"\u8DEF\u5F84",description:(0,I.jsxs)(m.Z,{direction:"vertical",size:"large",className:"flex",children:[(0,I.jsxs)(v.Z.Text,{children:[(0,I.jsx)("span",{className:"mr-[8px]",children:"\u7F16\u53F7"}),"#",d.id]}),(0,I.jsx)(x.InputFiled,{label:"\u540D\u79F0",value:d.name,onChange:function(N){c(d.id,{name:N})}}),(0,I.jsx)(x.SelectField,{label:"\u65B9\u5411",value:d.direction,options:[{label:"\u6B63\u5411",value:"forward"},{label:"\u9006\u5411",value:"backward"},{label:"\u53CC\u5411",value:"both"}],onChange:function(N){c(d.id,{direction:N})}})]})}),r&&(0,I.jsx)(p.Z.Step,{title:"\u7EC8\u70B9",description:(0,I.jsx)(g.NodeView,{node:r})})]})}},71633:function(M,a,e){e.r(a),e.d(a,{Header:function(){return N}});var p=e(10149),m=e(87740),v=e(48689),E=e(45350),x=e(43749),g=e(70801),I=e(54406),y=e(45360),i=e(65867),d=e(81058),u=e(90399),b=e(55035),c=e(50576),O=e(3695),r=e(85893),h={color:"rgba(0,0,0,0.88)",background:"rgba(0,0,0,0.06)"};function N(){var L=(0,i.k)(),S=L.canRedo,_=L.canUndo,de=L.undo,J=L.redo,D=(0,d.E)(),R=D.removeNode,j=D.removeEdge,U=D.selectedCell,Y=D.wireframe,re=D.toggleWireframe,z=D.toggleRotateControlsEnabled,ce=D.rotateControlsEnabled,w=D.nodes,ne=D.edges,ie=(0,u.M)(),he=function(){if(ie){var t=(0,c.Z)(ie.toJSON(),{nodes:(0,O.Z)(w,["id"]),edges:(0,O.Z)(ne,["id"])});t?y.ZP.success("\u6570\u636E\u4E00\u81F4"):y.ZP.error("\u6570\u636E\u4E0D\u4E00\u81F4")}},W=[{disabled:!_,icon:(0,r.jsx)(p.Z,{}),title:"\u64A4\u9500",onClick:function(){_&&de()}},{disabled:!S,icon:(0,r.jsx)(m.Z,{}),title:"\u91CD\u505A",onClick:function(){S&&J()}},{disabled:!U,icon:(0,r.jsx)(v.Z,{}),title:"\u5220\u9664",onClick:function(){U&&((0,b.UG)(U)&&R(U.id),(0,b.un)(U)&&j(U.id))}},{icon:(0,r.jsx)(E.Z,{}),title:"\u5207\u6362\u7EBF\u6846\u663E\u793A",onClick:function(){re()},style:Y?h:void 0},{icon:(0,r.jsx)(x.Z,{}),title:"\u5207\u6362\u65CB\u8F6C\u63A7\u5236",onClick:function(){z()},style:ce?h:void 0},{icon:(0,r.jsx)(g.Z,{}),title:"\u6570\u636E\u68C0\u67E5",onClick:function(){he()}}];return(0,r.jsx)(I.W,{type:"ghost",items:W})}},98315:function(M,a,e){e.r(a),e.d(a,{LeftPannel:function(){return x}});var p=e(63852),m=e(81058),v=e(3695),E=e(85893);function x(){var g=(0,m.E)(),I=g.nodes,y=g.edges,i=g.selectedCell,d={nodes:(0,v.Z)(I,["id"]),edges:(0,v.Z)(y,["id"]),selectedCell:i};return(0,E.jsx)(p.JsonView,{data:d,shouldExpandNode:p.allExpanded,style:p.defaultStyles})}},39113:function(M,a,e){e.r(a),e.d(a,{ListView:function(){return N}});var p=e(5574),m=e.n(p),v=e(67294),E=e(6171),x=e(90814),g=e(7825),I=e(92398),y=e(4393),i=e(84567),d=e(81058),u=e(55035),b=e(41972),c=e(56793),O=e(3695),r=e(85893);function h(L){var S=L.id;return(0,r.jsxs)("span",{className:"flex w-[40px] flex-col items-center justify-center",children:[(0,r.jsx)("span",{className:"relative size-4 rounded-full bg-[#3944f0] text-center"}),(0,r.jsxs)(g.Z.Text,{className:"text-center",children:["#",S]})]})}function N(){var L=(0,v.useState)("nodes"),S=m()(L,2),_=S[0],de=S[1],J=(0,d.E)(),D=J.edges,R=J.nodes,j=J.selectedCell,U=J.selectNode,Y=J.selectEdge,re=J.unselectEdge,z=J.unselectNode;return(0,r.jsx)(I.Z,{activeKey:_,onChange:function(w){return de(w)},centered:!0,destroyInactiveTabPane:!0,items:[{label:"\u70B9\u4F4D",key:"nodes",children:(0,r.jsx)(c.default,{data:(0,O.Z)(R,["id"]),children:function(w){return(0,r.jsx)(y.Z,{bordered:!1,size:"small",children:(0,r.jsxs)("div",{className:"flex w-full items-center",children:[(0,r.jsx)(i.Z,{onChange:function(ie){ie.target.checked?U(w.id):z(w.id)},checked:j&&(0,u.UG)(j)&&j.id===w.id}),(0,r.jsx)(h,{id:w.id}),(0,r.jsx)(g.Z.Text,{className:"flex-1 truncate",children:w.name})]})})}})},{label:"\u8DEF\u5F84",key:"edges",children:(0,r.jsx)(c.default,{data:(0,O.Z)(D,["id"]),children:function(w){var ne=R.find(function(he){return he.id===w.source}),ie=R.find(function(he){return he.id===w.target});return(0,r.jsx)(y.Z,{bordered:!1,size:"small",children:(0,r.jsxs)("div",{className:"flex w-full items-center",children:[(0,r.jsx)(i.Z,{onChange:function(W){W.target.checked?Y(w.id):re(w.id)},checked:j&&"isEdge"in j&&j.id===w.id}),(0,r.jsx)(h,{id:ne.id}),(0,r.jsx)(E.Z,{className:(0,b.cn)("mr-[10px]",w.direction==="forward"?"invisible":"visible")}),(0,r.jsx)(g.Z.Text,{className:"flex-1 truncate text-center",children:w.name}),(0,r.jsx)(x.Z,{className:(0,b.cn)("ml-[10px]",w.direction==="backward"?"invisible":"visible")}),(0,r.jsx)(h,{id:ie.id})]})})}})}]})}},73016:function(M,a,e){e.r(a),e.d(a,{NodeView:function(){return g}});var p=e(42075),m=e(7825),v=e(81058),E=e(66951),x=e(85893);function g(I){var y=I.node,i=(0,v.E)(),d=i.updateNode;return(0,x.jsxs)(p.Z,{direction:"vertical",size:"large",className:"flex",children:[(0,x.jsxs)(m.Z.Text,{children:[(0,x.jsx)("span",{className:"mr-[8px]",children:"\u7F16\u53F7"}),"#",y.id]}),(0,x.jsx)(E.InputFiled,{onChange:function(b){return d(y.id,{name:b})},label:"\u540D\u79F0",value:y.name}),(0,x.jsx)(E.InputNumberFiled,{disabled:!0,label:"X",value:y.position[0]}),(0,x.jsx)(E.InputNumberFiled,{disabled:!0,label:"Y",value:y.position[1]}),(0,x.jsx)(E.InputNumberFiled,{disabled:!0,label:"Z",value:y.position[2]}),(0,x.jsx)(E.InputNumberFiled,{disabled:!0,label:"W",value:y.rotation[0]}),(0,x.jsx)(E.InputNumberFiled,{disabled:!0,label:"P",value:y.rotation[1]}),(0,x.jsx)(E.InputNumberFiled,{disabled:!0,label:"R",value:y.rotation[2]})]})}},15552:function(M,a,e){e.r(a),e.d(a,{RightPannel:function(){return O}});var p=e(5574),m=e.n(p),v=e(67294),E=e(16664),x=e(86548),g=e(92398),I=e(4393),y=e(81058),i=e(55035),d=e(89449),u=e(39113),b=e(73016),c=e(85893);function O(){var r=(0,v.useState)("list"),h=m()(r,2),N=h[0],L=h[1],S=(0,y.E)(),_=S.selectedCell;return(0,v.useEffect)(function(){L(_?"cell":"list")},[_]),(0,c.jsx)(g.Z,{centered:!0,destroyInactiveTabPane:!0,activeKey:N,onChange:L,items:[{label:"\u5143\u7D20\u5217\u8868",key:"list",children:(0,c.jsx)(u.ListView,{}),icon:(0,c.jsx)(E.Z,{})},{label:"\u5C5E\u6027\u7F16\u8F91",key:"cell",disabled:!_,children:(0,c.jsxs)(I.Z,{bordered:!1,size:"small",children:[(0,i.UG)(_)&&(0,c.jsx)(b.NodeView,{node:_}),(0,i.un)(_)&&(0,c.jsx)(d.EdgeView,{edge:_})]}),icon:(0,c.jsx)(x.Z,{})}]})}},56793:function(M,a,e){e.r(a);var p=e(97857),m=e.n(p),v=e(13769),E=e.n(v),x=e(67294),g=e(32983),I=e(85344),y=e(82052),i=e(85893),d=["children"];function u(b){var c=b.children,O=E()(b,d),r=(0,x.useRef)(null),h=(0,y.Z)(r),N=O.containerClass||"h-[calc(100vh-360px)]",L=O.data.length===0;return(0,i.jsxs)("div",{ref:r,className:N,children:[L&&(0,i.jsx)(g.Z,{className:"absolute inset-x-0 top-0"}),h!=null&&h.height?(0,i.jsx)(I.default,m()(m()({},O),{},{itemKey:"id",itemHeight:60,height:h.height,children:c})):null]})}a.default=u},67417:function(M,a,e){e.r(a),e.d(a,{InputFiled:function(){return y},InputNumberFiled:function(){return i}});var p=e(97857),m=e.n(p),v=e(4944),E=e(81169),x=e(7825),g=e(85893),I={height:24},y=function(u){var b=u.label,c=b===void 0?"\u6807\u7B7E":b;return(0,g.jsxs)("div",{className:"group",children:[(0,g.jsx)(x.Z.Text,{className:"mr-[8px] break-keep",children:c}),(0,g.jsx)(v.I,m()(m()({},u),{},{style:I}))]})},i=function(u){var b=u.label,c=b===void 0?"\u6807\u7B7E":b;return(0,g.jsxs)("div",{className:"group",children:[(0,g.jsx)(x.Z.Text,{className:"mr-[8px] break-keep",children:c}),(0,g.jsx)(E.R,m()(m()({},u),{},{style:m()(m()({},I),{},{width:"100%"})}))]})}},79832:function(M,a,e){e.r(a),e.d(a,{SelectField:function(){return I}});var p=e(97857),m=e.n(p),v=e(67294),E=e(59042),x=e(7825),g=e(85893),I=function(i){var d=i.label,u=d===void 0?"\u7BAD\u5934":d;return(0,g.jsxs)("div",{className:"group",children:[(0,g.jsx)(x.Z.Text,{className:"mr-[8px] break-keep",children:u}),(0,g.jsx)(E.P,m()({style:{width:"100%",height:24}},i))]})}},66951:function(M,a,e){e.r(a),e.d(a,{InputFiled:function(){return m.InputFiled},InputNumberFiled:function(){return m.InputNumberFiled},SelectField:function(){return v.SelectField}});var p=e(65680),m=e(67417),v=e(79832)},41972:function(M,a,e){e.r(a),e.d(a,{cn:function(){return v}});var p=e(90512),m=e(98388);function v(){for(var E=arguments.length,x=new Array(E),g=0;g<E;g++)x[g]=arguments[g];return(0,m.twMerge)((0,p.clsx)(x))}},96631:function(M,a,e){e.d(a,{d:function(){return p},e:function(){return m}});var p="__inner__",m=function(v){return v.onNodeAdded="node:added",v.onNodeRemoved="node:removed",v.onNodeChanged="node:changed",v.onNodeSelected="node:selected",v.onNodeUnselected="node:unselected",v.onEdgeAdded="edge:added",v.onEdgeRemoved="edge:removed",v.onEdgeChanged="edge:changed",v.onEdgeSelected="edge:selected",v.onEdgeUnselected="edge:unselected",v.onHistoryChanged="history:changed",v.onSelectionChanged="selection:changed",v.onWireframeChanged="wireframe:changed",v.onRotateControlsEnableChanged="rotateControlsEnable:changed",v}({})},60338:function(M,a,e){e.d(a,{u:function(){return he}});var p=e(67294),m=e(19632),v=e.n(m),E=e(12444),x=e.n(E),g=e(72004),I=e.n(g),y=e(9783),i=e.n(y),d=e(96631),u=e(99477),b={node:{radius:5e-4,color:new u.Ilk(3753200),highlightColor:new u.Ilk(1609983),selectedColor:new u.Ilk(1609983)},edge:{color:new u.Ilk(14277081),highlightColor:new u.Ilk(1609983),selectedColor:new u.Ilk(1609983)},arrow:{color:new u.Ilk(3264710),direction:"forward"}},c=new u.nls({color:b.edge.color}),O=new u.nls({color:b.edge.highlightColor}),r=function(){function W(n){x()(this,W),i()(this,"geometry",void 0),i()(this,"line",void 0),i()(this,"source",void 0),i()(this,"target",void 0),i()(this,"id",void 0),i()(this,"selected",!1),i()(this,"visible",!0),i()(this,"name",void 0),i()(this,"isDisposed",!1),i()(this,"vForward",new u.Pa4),i()(this,"vBackward",new u.Pa4),i()(this,"direction",void 0),i()(this,"sourceArrow",void 0),i()(this,"targetArrow",void 0);var t=n.id,s=n.source,o=n.target,l=n.name,f=[s.getPosition().clone(),o.getPosition().clone()];this.source=s,this.target=o,this.id=t,this.direction=n.direction||b.arrow.direction,this.name=l||"\u8DEF\u5F84-".concat(t),this.geometry=new u.u9r().setFromPoints(f),this.line=new u.x12(this.geometry,c),this.sourceArrow=this.createArrow("backward"),this.targetArrow=this.createArrow("forward"),this.setDirection(this.direction)}return I()(W,[{key:"setName",value:function(t){this.name=t}},{key:"getName",value:function(){return this.name}},{key:"getDirection",value:function(){return this.direction}},{key:"setDirection",value:function(t){switch(this.direction=t,t){case"forward":this.targetArrow.visible=!0,this.sourceArrow.visible=!1;break;case"backward":this.targetArrow.visible=!1,this.sourceArrow.visible=!0;break;case"both":this.targetArrow.visible=!0,this.sourceArrow.visible=!0;break;default:this.targetArrow.visible=!0,this.sourceArrow.visible=!1;break}}},{key:"createArrow",value:function(t){var s=this.getArrowParams(t),o=s.direction,l=s.position,f=s.radius,C=new u.tGC(o,l,0,b.arrow.color,f,f/2);return C.visible=!1,C}},{key:"getArrowParams",value:function(t){var s=t==="forward",o=this.source.getPosition(),l=this.target.getPosition(),f=s?[o,l]:[l,o],C=this.target.getMesh().geometry.parameters.radius,P=s?this.vForward:this.vBackward,T=P.subVectors(f[1],f[0]).normalize(),B=f[1].clone().add(T.clone().multiplyScalar(-C));return{direction:T,position:B,radius:C}}},{key:"getLine",value:function(){return this.line}},{key:"getSourceNode",value:function(){return this.source}},{key:"getTargetNode",value:function(){return this.target}},{key:"highlight",value:function(){this.selected||(this.line.material=O)}},{key:"resetHighlight",value:function(){this.selected||(this.line.material=c)}},{key:"select",value:function(){this.selected=!0,this.line.material=O}},{key:"unselect",value:function(){this.selected=!1,this.line.material=c}},{key:"isSelected",value:function(){return this.selected}},{key:"contains",value:function(){for(var t=this,s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];return o.every(function(f){return f===t.source||f===t.target})}},{key:"toJSON",value:function(){return{id:this.id,source:this.source.id,target:this.target.id,name:this.name,direction:this.direction,isEdge:!0}}},{key:"show",value:function(){this.visible||(this.line.visible=!0,this.setDirection(this.direction),this.visible=!0)}},{key:"hide",value:function(){this.visible&&(this.line.visible=!1,this.sourceArrow.visible=!1,this.targetArrow.visible=!1,this.visible=!1)}},{key:"update",value:function(){var t=this.source.getPosition(),s=this.target.getPosition(),o=[t,s],l=this.getArrowParams("forward"),f=this.getArrowParams("backward");this.line.geometry.setFromPoints(o),this.line.geometry.computeBoundingBox(),this.line.geometry.computeBoundingSphere(),this.targetArrow.position.copy(l.position),this.targetArrow.setDirection(l.direction),this.sourceArrow.position.copy(f.position),this.sourceArrow.setDirection(f.direction)}},{key:"addObject3D",value:function(t){t.add(this.line,this.sourceArrow,this.targetArrow)}},{key:"removeObject3D",value:function(){var t;(t=this.line.parent)===null||t===void 0||t.remove(this.line,this.sourceArrow,this.targetArrow)}},{key:"dispose",value:function(){this.isDisposed||(this.line.geometry.dispose(),this.sourceArrow.dispose(),this.targetArrow.dispose(),c.dispose(),O.dispose(),this.isDisposed=!0)}}]),W}();function h(W,n,t){var s=new u.Pa4().subVectors(t,n),o=new u.Pa4().subVectors(W,n),l=s.lengthSq(),f=Math.max(0,Math.min(1,o.dot(s)/l)),C=new u.Pa4().addVectors(n,s.multiplyScalar(f));return W.distanceTo(C)}var N=function(){function W(n){x()(this,W),i()(this,"axesHelper",void 0),i()(this,"connectHelper",void 0),i()(this,"lineHelper",void 0),i()(this,"faceHelper",void 0),i()(this,"lineGeometry",new u.u9r),i()(this,"faceGeometry",new u.u9r),i()(this,"highlightColor",3710477),i()(this,"lineMaterial",new u.nls({color:this.highlightColor})),i()(this,"faceMaterial",new u.nls({color:this.highlightColor,transparent:!0,opacity:.25})),i()(this,"mouse",new u.FM8),i()(this,"_magnetThreshold",.001),i()(this,"raycaster",new u.iMs),i()(this,"vA",new u.Pa4),i()(this,"vB",new u.Pa4),i()(this,"vC",new u.Pa4),i()(this,"vDir",new u.Pa4),this.editor=n,this.axesHelper=this.createAxesHelper(),this.connectHelper=this.createConnectHelper(),this.lineHelper=this.createLineHelper(),this.faceHelper=this.createFaceHelper(),this.onMouseMove=this.onMouseMove.bind(this),this.editor.canvas.addEventListener("mousemove",this.onMouseMove,!1)}return I()(W,[{key:"magnetThreshold",get:function(){return this._magnetThreshold},set:function(t){this._magnetThreshold=t}},{key:"setMousePosition",value:function(t){var s=this.editor.canvas.getBoundingClientRect();return this.mouse.x=(t.clientX-s.left)/s.width*2-1,this.mouse.y=-((t.clientY-s.top)/s.height)*2+1,s}},{key:"createAxesHelper",value:function(){var t=new u.y8_(5);return t.visible=!1,this.editor.mesh.add(t),t}},{key:"showAxesHelper",value:function(){this.axesHelper.visible=!0}},{key:"hideAxesHelper",value:function(){this.axesHelper.visible=!1}},{key:"createConnectHelper",value:function(){var t=new u.tGC(new u.Pa4(0,0,1),new u.Pa4,1,14277081);return t.visible=!1,this.editor.mesh.add(t),t}},{key:"updateConnectHelper",value:function(t,s){var o=this.vDir.subVectors(s,t).normalize(),l=t.distanceTo(s);this.connectHelper.setDirection(o),this.connectHelper.position.copy(t),this.connectHelper.setLength(l,.1*l,.05*l),this.isConnecting()||this.showConnectHelper()}},{key:"showConnectHelper",value:function(){this.connectHelper.visible=!0}},{key:"hideConnectHelper",value:function(){this.connectHelper.visible=!1}},{key:"isConnecting",value:function(){return this.connectHelper.visible}},{key:"createLineHelper",value:function(){this.lineGeometry.setFromPoints([new u.Pa4,new u.Pa4]);var t=new u.x12(this.lineGeometry,this.lineMaterial);return t.visible=!1,this.editor.mesh.add(t),t}},{key:"showLineHelper",value:function(){this.lineHelper.visible=!0}},{key:"hideLineHelper",value:function(){this.lineHelper.visible=!1}},{key:"updateLineHelper",value:function(t,s){var o=[t,s];this.lineGeometry.setFromPoints(o),this.lineGeometry.computeBoundingBox(),this.lineGeometry.computeBoundingSphere(),this.lineHelper.visible||this.showLineHelper()}},{key:"createFaceHelper",value:function(){this.faceGeometry.setFromPoints([this.vA,this.vB,this.vC]);var t=new u.blk(this.faceGeometry,this.faceMaterial);return t.visible=!1,this.editor.mesh.add(t),t}},{key:"showFaceHelper",value:function(){this.faceHelper.visible=!0}},{key:"hideFaceHelper",value:function(){this.faceHelper.visible=!1}},{key:"updateFaceHelper",value:function(){this.faceGeometry.setFromPoints([this.vA,this.vB,this.vC]),this.faceGeometry.computeBoundingBox(),this.faceGeometry.computeBoundingSphere(),this.faceHelper.visible||this.showFaceHelper()}},{key:"hideHelpers",value:function(){this.hideConnectHelper(),this.hideLineHelper(),this.hideFaceHelper()}},{key:"onMouseMove",value:function(t){var s=this;this.setMousePosition(t),this.raycaster.setFromCamera(this.mouse,this.editor.camera);var o=this.raycaster.intersectObject(this.editor.mesh);if(o.length>0){var l=o.find(function(V){return V.object===s.editor.mesh});if(l){var f=l.face,C=this.editor.mesh.geometry;if(f){var P=C.attributes.position;this.vA.set(P.getX(f.a),P.getY(f.a),P.getZ(f.a)),this.vB.set(P.getX(f.b),P.getY(f.b),P.getZ(f.b)),this.vC.set(P.getX(f.c),P.getY(f.c),P.getZ(f.c));var T=l.point.clone();this.editor.mesh.worldToLocal(T);var B=[{distance:h(T,this.vA,this.vB),vertices:[this.vA,this.vB]},{distance:h(T,this.vB,this.vC),vertices:[this.vB,this.vC]},{distance:h(T,this.vC,this.vA),vertices:[this.vC,this.vA]}],K=B.filter(function(V){return V.distance<=s.magnetThreshold});K.length>0?(K.sort(function(V,le){return V.distance-le.distance}),this.updateLineHelper(K[0].vertices[0],K[0].vertices[1])):this.hideLineHelper(),this.updateFaceHelper()}}else this.hideHelpers()}else this.hideHelpers()}},{key:"dispose",value:function(){this.editor.canvas.removeEventListener("mousemove",this.onMouseMove,!1),this.faceGeometry.dispose(),this.lineGeometry.dispose(),this.faceMaterial.dispose(),this.lineMaterial.dispose(),this.axesHelper.dispose(),this.connectHelper.dispose()}}]),W}(),L=new u.vBJ({color:b.node.color}),S=new u.vBJ({color:b.node.highlightColor}),_=function(){function W(n){x()(this,W),i()(this,"geometry",void 0),i()(this,"mesh",void 0),i()(this,"id",void 0),i()(this,"selected",!1),i()(this,"visible",!0),i()(this,"name",void 0),i()(this,"isDisposed",!1);var t=n.id,s=n.name,o=n.position,l=n.rotation;this.id=t,this.name=s||"\u8DEF\u5F84\u70B9-".concat(t),this.geometry=new u.xo$(b.node.radius),this.mesh=new u.Kj0(this.geometry,L),this.mesh.position.copy(new u.Pa4().fromArray(o)),l&&this.mesh.rotation.copy(new u.USm().fromArray(l))}return I()(W,[{key:"getMesh",value:function(){return this.mesh}},{key:"highlight",value:function(){this.selected||(this.mesh.material=S)}},{key:"resetHighlight",value:function(){this.selected||(this.mesh.material=L)}},{key:"setPosition",value:function(t){this.mesh.position.copy(t instanceof u.Pa4?t:new u.Pa4().fromArray(t))}},{key:"getPosition",value:function(){return this.mesh.position}},{key:"setRotation",value:function(t){this.mesh.rotation.copy(t instanceof u.USm?t:new u.USm().fromArray(t))}},{key:"getRotation",value:function(){return this.mesh.rotation}},{key:"setName",value:function(t){this.name=t}},{key:"getName",value:function(){return this.name}},{key:"select",value:function(){this.selected=!0,this.mesh.material=S}},{key:"unselect",value:function(){this.selected=!1,this.mesh.material=L}},{key:"isSelected",value:function(){return this.selected}},{key:"toJSON",value:function(){return{id:this.id,name:this.name,position:[this.mesh.position.x,this.mesh.position.y,this.mesh.position.z],rotation:[this.mesh.rotation.x,this.mesh.rotation.y,this.mesh.rotation.z],isNode:!0}}},{key:"show",value:function(){this.visible||(this.mesh.visible=!0,this.visible=!0)}},{key:"hide",value:function(){this.visible&&(this.mesh.visible=!1,this.visible=!1)}},{key:"addObject3D",value:function(t){t.add(this.mesh)}},{key:"removeObject3D",value:function(){var t;(t=this.mesh.parent)===null||t===void 0||t.remove(this.mesh)}},{key:"dispose",value:function(){this.isDisposed||(this.mesh.geometry.dispose(),L.dispose(),S.dispose(),this.isDisposed=!0)}}]),W}(),de=e(92327),J=function(){function W(n){var t=this;x()(this,W),i()(this,"invisible",new u.u9r),i()(this,"controls",void 0),this.editor=n,this.controls=new de.Ys(this.editor.camera,this.editor.canvas),this.controls.setMode("rotate"),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onRotate=this.onRotate.bind(this),this.controls.addEventListener("mouseDown",this.onMouseDown),this.controls.addEventListener("mouseUp",this.onMouseUp),this.controls.addEventListener("objectChange",this.onRotate);var s=this.controls._gizmo.gizmo.rotate;s.children.forEach(function(o){o.name==="E"&&(o.geometry=t.invisible)}),this.editor.scene.add(this.controls.getHelper())}return I()(W,[{key:"onMouseDown",value:function(){this.editor.controls.enabled=!1}},{key:"onMouseUp",value:function(){this.editor.controls.enabled=!0}},{key:"onRotate",value:function(){var t=this.editor.selectedNode;t&&this.editor.emitter.emit(d.e.onNodeChanged,{node:t})}},{key:"detach",value:function(){this.controls.detach()}},{key:"attach",value:function(t){this.controls.attach(t)}},{key:"hasAttached",value:function(){return!!this.controls.object}},{key:"dispose",value:function(){this.controls.removeEventListener("mouseDown",this.onMouseDown),this.controls.removeEventListener("mouseUp",this.onMouseUp),this.controls.removeEventListener("objectChange",this.onRotate),this.editor.scene.remove(this.controls.getHelper()),this.invisible.dispose(),this.controls.dispose()}}]),W}(),D=e(3695),R=e(59391),j=function(){function W(n){var t=this;x()(this,W),i()(this,"scene",void 0),i()(this,"controls",void 0),i()(this,"mesh",void 0),i()(this,"raycaster",void 0),i()(this,"rotateControls",void 0),i()(this,"mouse",void 0),i()(this,"nodes",[]),i()(this,"edges",[]),i()(this,"highlightedNode",null),i()(this,"highlightedEdge",null),i()(this,"startNode",null),i()(this,"helperManager",void 0),i()(this,"nodeId",1),i()(this,"edgeId",1),i()(this,"selectedNode",null),i()(this,"selectedEdge",null),i()(this,"isMouseMoved",!1),i()(this,"isCanvasFocused",!1),i()(this,"isDragging",!1),i()(this,"rotateControlsEnabled",!1),i()(this,"dragStartPosition",null),i()(this,"canvas",void 0),i()(this,"camera",void 0),i()(this,"emitter",void 0),i()(this,"undoStack",[]),i()(this,"redoStack",[]),i()(this,"onMouseDown",function(s){if(t.isMouseMoved=!1,s.button===0){t.canvas.focus();var o=t.getIntersects(t.mesh),l=t.getIntersectedNode(o);l&&(t.controls.enabled=!1,t.startNode=l,t.dragStartPosition=l.getPosition().clone())}}),i()(this,"onMouseUp",function(s){if(s.button===0){var o=t.getIntersects(t.mesh),l=t.getIntersectedNode(o);if(t.startNode&&l&&l===t.startNode&&t.dragStartPosition&&!t.dragStartPosition.equals(l.getPosition())){var f=t.dragStartPosition.clone(),C=l.getPosition().clone(),P=t.startNode,T={execute:function(){t.updateNode(P,{position:C.toArray()})},undo:function(){t.updateNode(P,{position:f.toArray()})}};t.executeCommand(T)}if(t.startNode&&l&&l!==t.startNode&&!t.hasEdge(t.startNode,l)&&t.helperManager.isConnecting()){t.addEdge({source:t.startNode,target:l}),t.resetStartNode();return}if(t.isMouseMoved){t.resetStartNode();return}if(l&&l!==t.selectedNode&&t.selectNode(l),l){t.resetStartNode();return}var B=t.getIntersectedEdge(o);if(B&&t.selectedEdge!==B&&t.selectEdge(B),B){t.resetStartNode();return}t.clearSelection()}}),i()(this,"onKeyDown",function(s){t.isCanvasFocused&&s.key==="Delete"&&(t.selectedNode?t.removeNode(t.selectedNode):t.selectedEdge&&t.removeEdge(t.selectedEdge))}),this.scene=n.scene,this.camera=n.camera,this.mesh=n.mesh,this.controls=n.controls,this.canvas=n.domElement,this.canvas.tabIndex=1,this.emitter=(0,R.Z)(),this.mouse=new u.FM8,this.raycaster=new u.iMs,this.helperManager=new N(this),this.rotateControls=new J(this),this.onRightClick=this.onRightClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),this.canvas.addEventListener("contextmenu",this.onRightClick),this.canvas.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("mousedown",this.onMouseDown),this.canvas.addEventListener("mouseup",this.onMouseUp),this.canvas.addEventListener("focus",this.onFocus),this.canvas.addEventListener("blur",this.onBlur),window.addEventListener("keydown",this.onKeyDown)}return I()(W,[{key:"executeCommand",value:function(t){t.execute(),this.undoStack.push(t),this.redoStack=[],this.emitter.emit(d.e.onHistoryChanged)}},{key:"canUndo",value:function(){return this.undoStack.length>0}},{key:"canRedo",value:function(){return this.redoStack.length>0}},{key:"undo",value:function(){var t=this.undoStack.pop();t&&(t.undo(),this.redoStack.push(t),this.emitter.emit(d.e.onHistoryChanged))}},{key:"redo",value:function(){var t=this.redoStack.pop();t&&(t.execute(!0),this.undoStack.push(t),this.emitter.emit(d.e.onHistoryChanged))}},{key:"on",value:function(t,s){this.emitter.on(t,s)}},{key:"off",value:function(t,s){this.emitter.off(t,s)}},{key:"onFocus",value:function(){this.isCanvasFocused=!0}},{key:"onBlur",value:function(){this.isCanvasFocused=!1}},{key:"getMesh",value:function(){return this.mesh}},{key:"setWireframe",value:function(t){this.mesh.material.wireframe=t}},{key:"toggleWireframe",value:function(t,s){if(typeof t=="undefined"){var o=!this.mesh.material.wireframe;this.setWireframe(o),this.emitter.emit(d.e.onWireframeChanged,{enabled:o,options:s});return}this.setWireframe(t),this.emitter.emit(d.e.onWireframeChanged,{enabled:t,options:s})}},{key:"setRotateControlsAttach",value:function(t){this.selectedNode&&(t?this.rotateControls.attach(this.selectedNode.getMesh()):this.rotateControls.detach())}},{key:"toggleRotateControlsEnabled",value:function(t,s){if(typeof t=="undefined"){var o=!this.rotateControlsEnabled;this.rotateControlsEnabled=o,this.setRotateControlsAttach(o),this.emitter.emit(d.e.onRotateControlsEnableChanged,{enabled:o,options:s});return}this.rotateControlsEnabled=t,this.setRotateControlsAttach(t),this.emitter.emit(d.e.onRotateControlsEnableChanged,{enabled:t,options:s})}},{key:"updateNode",value:function(t,s,o){var l=s.position,f=s.rotation,C=s.name,P=typeof t=="number"?this.getNodeById(t):t;if(!P){console.warn("node not found");return}l&&(P.setPosition(l),this.updateConnectedEdges(P)),f&&P.setRotation(f),C&&P.setName(C),this.emitter.emit(d.e.onNodeChanged,{node:P,options:o})}},{key:"updateEdge",value:function(t,s,o){var l=s.name,f=s.direction,C=typeof t=="number"?this.getEdgeById(t):t;if(!C){console.warn("edge not found");return}l&&C.setName(l),f&&C.setDirection(f),this.emitter.emit(d.e.onEdgeChanged,{edge:C,options:o})}},{key:"addNode",value:function(t,s){var o=this;if(t.id&&this.getNodeById(t.id)){console.warn("node id already exists");return}if(!t.position){console.warn("node position is required");return}var l=t.id||this.nodeId++,f=new _({id:l,name:t.name,position:t.position,rotation:t.rotation});console.log("Current NodeId is: ".concat(l)),t.id&&(this.nodeId=Math.max(this.nodeId,t.id)+1);var C={execute:function(T){o.nodes.push(f),f.addObject3D(o.mesh),o.emitter.emit(d.e.onNodeAdded,{node:f,options:T?void 0:s})},undo:function(){var T=o.nodes.indexOf(f);T!==-1&&(o.nodes.splice(T,1),f.removeObject3D(),o.emitter.emit(d.e.onNodeRemoved,{node:f}))},nodes:[f]};this.executeCommand(C)}},{key:"addEdge",value:function(t,s){var o=this;if(t.id&&this.getEdgeById(t.id)){console.warn("edge id already exists");return}var l=t.source instanceof _?t.source:this.getNodeById(t.source),f=t.target instanceof _?t.target:this.getNodeById(t.target);if(!l||!f){console.warn("edge source or target not found");return}if(l===f){console.warn("source and target cannot be the same node");return}var C=t.id||this.edgeId++,P=new r({id:C,name:t.name,direction:t.direction,source:l,target:f});console.log("Current EdgeId is: ".concat(C)),t.id&&(this.edgeId=Math.max(this.edgeId,t.id)+1);var T={execute:function(K){o.edges.push(P),P.addObject3D(o.mesh),o.emitter.emit(d.e.onEdgeAdded,{edge:P,options:K?void 0:s})},undo:function(){var K=o.edges.indexOf(P);K!==-1&&(o.edges.splice(K,1),P.removeObject3D(),o.emitter.emit(d.e.onEdgeRemoved,{edge:P}))},edges:[P]};this.executeCommand(T)}},{key:"removeEdge",value:function(t,s){var o=this,l=typeof t=="number"?this.getEdgeById(t):t;if(!l){console.warn("edge not found");return}var f=this.edges.indexOf(l);if(f!==-1){var C={execute:function(T){o.unselectEdge(l,s),o.edges.splice(f,1),l.removeObject3D(),o.emitter.emit(d.e.onEdgeRemoved,{edge:l,options:T?void 0:s})},undo:function(){o.edges.splice(f,0,l),l.addObject3D(o.mesh),o.emitter.emit(d.e.onEdgeAdded,{edge:l})},edges:[l]};this.executeCommand(C)}}},{key:"removeNode",value:function(t,s){var o=this,l=typeof t=="number"?this.getNodeById(t):t;if(!l){console.warn("node not found");return}var f=this.nodes.indexOf(l);if(f!==-1){var C=this.edges.filter(function(T){return T.getSourceNode()===l||T.getTargetNode()===l}),P={execute:function(B){o.unselectNode(l,s),C.forEach(function(K){var V=o.edges.indexOf(K);V!==-1&&(o.unselectEdge(K,s),o.edges.splice(V,1),K.removeObject3D(),o.emitter.emit(d.e.onEdgeRemoved,{edge:K,options:B?void 0:s}))}),o.nodes.splice(f,1),l.removeObject3D(),o.emitter.emit(d.e.onNodeRemoved,{node:l,options:B?void 0:s})},undo:function(){l.addObject3D(o.mesh),C.forEach(function(B){return B.addObject3D(o.mesh)}),o.nodes.splice(f,0,l),C.forEach(function(B){return o.edges.push(B)}),o.emitter.emit(d.e.onNodeAdded,{node:l}),C.forEach(function(B){return o.emitter.emit(d.e.onEdgeAdded,{edge:B})})},nodes:[l],edges:C};this.executeCommand(P)}}},{key:"unselectNode",value:function(t,s){var o=typeof t=="undefined"?this.selectedNode:typeof t=="number"?this.getNodeById(t):t;o&&o===this.selectedNode&&(o.unselect(),this.rotateControlsEnabled&&this.setRotateControlsAttach(!1),this.selectedNode=null,this.emitter.emit(d.e.onNodeUnselected,{node:o,options:s}),this.emitter.emit(d.e.onSelectionChanged,{cell:null,options:s}))}},{key:"unselectEdge",value:function(t,s){var o=typeof t=="undefined"?this.selectedEdge:typeof t=="number"?this.getEdgeById(t):t;o&&o===this.selectedEdge&&(o.unselect(),this.selectedEdge=null,this.emitter.emit(d.e.onEdgeUnselected,{edge:o,options:s}),this.emitter.emit(d.e.onSelectionChanged,{cell:null,options:s}))}},{key:"selectNode",value:function(t,s){var o=typeof t=="number"?this.getNodeById(t):t;if(!o){console.warn("node not found");return}o!==this.selectedNode&&(this.clearSelection(s),o.select(),this.selectedNode=o,this.rotateControlsEnabled&&this.setRotateControlsAttach(!0),this.emitter.emit(d.e.onNodeSelected,{node:o,options:s}),this.emitter.emit(d.e.onSelectionChanged,{cell:o,options:s}))}},{key:"selectEdge",value:function(t,s){var o=typeof t=="number"?this.getEdgeById(t):t;if(!o){console.warn("edge not found");return}o!==this.selectedEdge&&(this.clearSelection(s),o.select(),this.selectedEdge=o,this.emitter.emit(d.e.onEdgeSelected,{edge:o,options:s}),this.emitter.emit(d.e.onSelectionChanged,{cell:o,options:s}))}},{key:"clearSelection",value:function(t){this.unselectNode(void 0,t),this.unselectEdge(void 0,t)}},{key:"setMousePosition",value:function(t){var s=this.canvas.getBoundingClientRect();return this.mouse.x=(t.clientX-s.left)/s.width*2-1,this.mouse.y=-((t.clientY-s.top)/s.height)*2+1,s}},{key:"getIntersects",value:function(t){return this.raycaster.setFromCamera(this.mouse,this.camera),this.raycaster.intersectObject(t)}},{key:"setLineThreshold",value:function(t){var s=this.camera.position.distanceTo(this.mesh.position),o=this.camera.fov*(Math.PI/180),l=t.height,f=2*s*Math.tan(o/2)/l;this.raycaster.params.Line.threshold=f*2}},{key:"onRightClick",value:function(t){var s,o=this;if(t.preventDefault(),!(this.isMouseMoved||this.isDragging)){this.setMousePosition(t);var l=this.getIntersects(this.mesh),f=(s=l.find(function(C){return C.object===o.mesh}))===null||s===void 0?void 0:s.point;f&&this.addNode({position:this.mesh.worldToLocal(f.clone()).toArray()})}}},{key:"onMouseMove",value:function(t){var s=this;this.isMouseMoved=!0,this.setLineThreshold(this.setMousePosition(t));var o=this.getIntersects(this.mesh),l=o.find(function($){return s.nodes.find(function(ee){return ee.getMesh()===$.object})});if(l){var f=this.nodes.find(function($){return $.getMesh()===l.object});f&&this.highlightedNode!==f&&!this.isDragging&&(this.highlightedNode&&this.highlightedNode.resetHighlight(),f.highlight(),this.highlightedNode=f,this.highlightedEdge&&(this.highlightedEdge.resetHighlight(),this.highlightedEdge=null))}else this.highlightedNode&&(this.highlightedNode.resetHighlight(),this.highlightedNode=null);var C=o.find(function($){return s.edges.find(function(ee){return ee.getLine()===$.object})});if(C){var P=this.edges.find(function($){return $.getLine()===C.object});P&&this.highlightedEdge!==P&&!this.highlightedNode&&!this.isDragging&&(this.highlightedEdge&&this.highlightedEdge.resetHighlight(),P.highlight(),this.highlightedEdge=P)}else this.highlightedEdge&&(this.highlightedEdge.resetHighlight(),this.highlightedEdge=null);if(this.startNode){var T,B=(T=o.find(function($){return $.object===s.mesh}))===null||T===void 0?void 0:T.point;if(B){if(this.selectedNode===this.startNode&&this.rotateControls.hasAttached())return;var K=this.startNode.getPosition(),V=this.mesh.worldToLocal(B.clone());if(t.ctrlKey&&!this.helperManager.isConnecting()){this.isDragging=!0;var le=this.startNode;this.updateNode(le,{position:V.toArray()})}else this.isDragging=!1,this.helperManager.updateConnectHelper(K,V)}}}},{key:"getIntersectedNode",value:function(t){var s=this,o=t.find(function(f){return s.nodes.find(function(C){return C.getMesh()===f.object})}),l;return o&&(l=this.nodes.find(function(f){return f.getMesh()===o.object})),l}},{key:"getIntersectedEdge",value:function(t){var s=this,o=t.find(function(f){return s.edges.find(function(C){return C.getLine()===f.object})}),l;return o&&(l=this.edges.find(function(f){return f.getLine()===o.object})),l}},{key:"resetStartNode",value:function(){this.isDragging=!1,this.startNode=null,this.dragStartPosition=null,this.helperManager.hideConnectHelper(),this.controls.enabled=!0}},{key:"hasEdge",value:function(t,s){return this.edges.some(function(o){return o.contains(t,s)})}},{key:"updateConnectedEdges",value:function(t){this.edges.forEach(function(s){(s.getSourceNode()===t||s.getTargetNode()===t)&&s.update()})}},{key:"disposeCommandStack",value:function(t){t.forEach(function(s){s.nodes&&s.nodes.forEach(function(o){return o.dispose()}),s.edges&&s.edges.forEach(function(o){return o.dispose()})})}},{key:"getNodeById",value:function(t){return this.nodes.find(function(s){return s.id===t})}},{key:"getEdgeById",value:function(t){return this.edges.find(function(s){return s.id===t})}},{key:"clear",value:function(){this.clearSelection(),this.resetStartNode(),this.highlightedEdge=null,this.highlightedNode=null,this.nodes.forEach(function(t){t.removeObject3D(),t.dispose()}),this.edges.forEach(function(t){t.removeObject3D(),t.dispose()}),this.disposeCommandStack(this.undoStack),this.disposeCommandStack(this.redoStack),this.nodes=[],this.edges=[],this.undoStack=[],this.redoStack=[],this.nodeId=1,this.edgeId=1}},{key:"toJSON",value:function(){return{nodes:(0,D.Z)(this.nodes.map(function(t){return t.toJSON()}),["id"]),edges:(0,D.Z)(this.edges.map(function(t){return t.toJSON()}),["id"])}}},{key:"fromJSON",value:function(t,s){var o=this;if(t){this.clear();var l=t.nodes.map(function(C){var P=C.id,T=C.name,B=C.position,K=C.rotation,V=new _({id:P,name:T,position:B,rotation:K});return o.nodes.push(V),V.addObject3D(o.mesh),o.emitter.emit(d.e.onNodeAdded,{node:V,options:s}),P});l.length>0&&(this.nodeId=Math.max.apply(Math,v()(l))+1);var f=t.edges.map(function(C){var P=C.id,T=C.source,B=C.target,K=C.name,V=C.direction,le=o.getNodeById(T),$=o.getNodeById(B);if(le&&$){var ee=new r({id:P,name:K,direction:V,source:le,target:$});o.edges.push(ee),ee.addObject3D(o.mesh),o.emitter.emit(d.e.onEdgeAdded,{edge:ee,options:s})}return P});f.length>0&&(this.edgeId=Math.max.apply(Math,v()(f))+1)}}},{key:"dispose",value:function(){this.nodes.forEach(function(t){return t.dispose()}),this.edges.forEach(function(t){return t.dispose()}),this.disposeCommandStack(this.undoStack),this.disposeCommandStack(this.redoStack),this.undoStack=[],this.redoStack=[],this.canvas.removeEventListener("mousedown",this.onMouseDown),this.canvas.removeEventListener("mouseup",this.onMouseUp),this.canvas.removeEventListener("contextmenu",this.onRightClick),this.canvas.removeEventListener("mousemove",this.onMouseMove),this.canvas.removeEventListener("focus",this.onFocus),this.canvas.removeEventListener("blur",this.onBlur),window.removeEventListener("keydown",this.onKeyDown),this.emitter.all.clear(),this.helperManager.dispose()}}]),W}(),U=e(48429),Y=e(90399),re=e(81058),z=e(75783),ce=e(53434),w=function(){var n=(0,Y.M)(),t=(0,re.E)(),s=t.addNode,o=t.addEdge,l=t.removeNode,f=t.removeEdge,C=t.updateNode,P=t.updateEdge,T=t.selectNode,B=t.selectEdge,K=t.clearSelection,V=t.clearChangeList,le=t.toggleWireframe,$=t.toggleRotateControlsEnabled,ee=t.changeList,ye=function(A,H){H.forEach(function(Ce){var se=Ce.command,Z=Ce.data;switch(se){case"init":A.fromJSON(Z,i()({},d.d,!0));break;case"addNode":A.addNode(Z,i()({},d.d,!0));break;case"removeNode":A.removeNode(Z,i()({},d.d,!0));break;case"updateNode":A.updateNode(Z.id,Z.data,i()({},d.d,!0));break;case"addEdge":A.addEdge(Z,i()({},d.d,!0));break;case"removeEdge":A.removeEdge(Z,i()({},d.d,!0));break;case"updateEdge":A.updateEdge(Z.id,Z.data,i()({},d.d,!0));break;case"selectNode":A.selectNode(Z,i()({},d.d,!0));break;case"selectEdge":A.selectEdge(Z,i()({},d.d,!0));break;case"clearSelection":A.clearSelection(i()({},d.d,!0));break;case"unselectNode":A.unselectNode(Z,i()({},d.d,!0));break;case"unselectEdge":A.unselectEdge(Z,i()({},d.d,!0));break;case"toggleWireframe":A.toggleWireframe(Z,i()({},d.d,!0));break;case"toggleRotateControlsEnabled":A.toggleRotateControlsEnabled(Z,i()({},d.d,!0));break;default:break}}),setTimeout(function(){V()})};return(0,p.useEffect)(function(){n&&ee.length&&ye(n,ee)},[ee.length,n]),(0,z.x)(d.e.onNodeAdded,function(F){var A=F.node,H=F.options;H!=null&&H[d.d]||s(A.toJSON(),{silent:!0})}),(0,z.x)(d.e.onNodeRemoved,function(F){var A=F.node;l(A.id,{silent:!0})}),(0,z.x)(d.e.onNodeChanged,(0,ce.Z)(function(F){var A=F.node,H=F.options;H!=null&&H[d.d]||C(A.id,A.toJSON(),{silent:!0})},100,{leading:!0})),(0,z.x)(d.e.onEdgeAdded,function(F){var A=F.edge,H=F.options;H!=null&&H[d.d]||o(A.toJSON(),{silent:!0})}),(0,z.x)(d.e.onEdgeRemoved,function(F){var A=F.edge;f(A.id,{silent:!0})}),(0,z.x)(d.e.onEdgeChanged,(0,ce.Z)(function(F){var A=F.edge,H=F.options;H!=null&&H[d.d]||P(A.id,A.toJSON(),{silent:!0})},100,{leading:!0})),(0,z.x)(d.e.onSelectionChanged,function(F){var A=F.cell;A===null&&K({silent:!0}),A instanceof _&&T(A.id,{silent:!0}),A instanceof r&&B(A.id,{silent:!0})}),(0,z.x)(d.e.onWireframeChanged,function(F){var A=F.enabled,H=F.options;H!=null&&H[d.d]||le(A,{silent:!0})}),(0,z.x)(d.e.onRotateControlsEnableChanged,function(F){var A=F.enabled,H=F.options;H!=null&&H[d.d]||$(A,{silent:!0})}),null},ne=e(85893),ie=function(n){var t=n.children,s=(0,Y.M)();return s?(0,ne.jsx)(ne.Fragment,{children:t}):null},he=function(n){var t=(0,p.useContext)(U.r),s=t.setEditor;return(0,p.useEffect)(function(){var o=new j(n);return s(o),function(){o&&(o.dispose(),s(null))}},[]),(0,ne.jsx)(ie,{children:(0,ne.jsx)(w,{})})}},20218:function(M,a,e){e.d(a,{T:function(){return E}});var p=e(58444),m=e(48429),v=e(85893),E=function(g){var I=g.children;return(0,v.jsx)(p.g,{children:(0,v.jsx)(m.K,{children:I})})}},48429:function(M,a,e){e.d(a,{K:function(){return g},r:function(){return x}});var p=e(5574),m=e.n(p),v=e(67294),E=e(85893),x=(0,v.createContext)({editor:null,setEditor:function(){}}),g=function(y){var i=y.children,d=(0,v.useState)(null),u=m()(d,2),b=u[0],c=u[1];return(0,E.jsx)(x.Provider,{value:{editor:b,setEditor:c},children:i})}},58444:function(M,a,e){e.d(a,{x:function(){return d},g:function(){return u}});var p=e(67294),m=e(97857),v=e.n(m),E=e(19632),x=e.n(E),g=e(55035),I=e(22979),y=function(){var c=(0,I.sj)({rotateControlsEnabled:!1,wireframe:!1,nodes:[],edges:[],changeList:[],nodeId:1,edgeId:1,selectedEdgeId:void 0,selectedNodeId:void 0,get selectedCell(){var O=c,r=O.nodes.find(function(h){return h.id===O.selectedNodeId})||O.edges.find(function(h){return h.id===O.selectedEdgeId});return r},initData:function(r,h){c.nodes=r.nodes,c.edges=r.edges;var N=c.nodes.map(function(S){return S.id});N.length>0&&(c.nodeId=Math.max.apply(Math,x()(N))+1);var L=c.edges.map(function(S){return S.id});L.length>0&&(c.edgeId=Math.max.apply(Math,x()(L))+1),h!=null&&h.silent||c.changeList.push({command:"init",data:r})},addNode:function(r,h){if(!r.position){console.warn("node position is required");return}var N=r.rotation||[0,0,0],L=r.id||c.nodeId++,S=r.name||"\u8DEF\u5F84\u70B9-".concat(L),_={id:L,name:S,rotation:N,position:r.position,isNode:!0};r.id&&(c.nodeId=Math.max(c.nodeId,r.id)+1),c.nodes.push(_),h!=null&&h.silent||c.changeList.push({command:"addNode",data:_})},removeNode:function(r,h){c.nodes=c.nodes.filter(function(N){return N.id!==r}),h!=null&&h.silent||c.changeList.push({command:"removeNode",data:r})},updateNode:function(r,h,N){var L=c.nodes.find(function(S){return S.id===r});L&&((0,g.nn)(L,h),N!=null&&N.silent||c.changeList.push({command:"updateNode",data:{id:r,data:h}}))},selectNode:function(r,h){var N=c.nodes.find(function(L){return L.id===r});N&&(c.selectedEdgeId=void 0,c.selectedNodeId=r,h!=null&&h.silent||c.changeList.push({command:"selectNode",data:r}))},unselectNode:function(r,h){r===c.selectedNodeId&&(c.selectedNodeId=void 0,h!=null&&h.silent||c.changeList.push({command:"unselectNode",data:r}))},addEdge:function(r,h){var N=r.id||c.edgeId++,L=r.direction||"forward",S=r.name||"\u8DEF\u5F84-".concat(N),_=v()(v()({},r),{},{id:N,direction:L,name:S,isEdge:!0});r.id&&(c.edgeId=Math.max(c.edgeId,r.id)+1),c.edges.push(_),h!=null&&h.silent||c.changeList.push({command:"addEdge",data:_})},removeEdge:function(r,h){c.edges=c.edges.filter(function(N){return N.id!==r}),h!=null&&h.silent||c.changeList.push({command:"removeEdge",data:r})},updateEdge:function(r,h,N){var L=c.edges.find(function(S){return S.id===r});L&&((0,g.nn)(L,h),N!=null&&N.silent||c.changeList.push({command:"updateEdge",data:{id:r,data:h}}))},selectEdge:function(r,h){var N=c.edges.find(function(L){return L.id===r});N&&(c.selectedNodeId=void 0,c.selectedEdgeId=r,h!=null&&h.silent||c.changeList.push({command:"selectEdge",data:r}))},unselectEdge:function(r,h){r===c.selectedEdgeId&&(c.selectedEdgeId=void 0,h!=null&&h.silent||c.changeList.push({command:"unselectEdge",data:r}))},clearSelection:function(r){c.selectedEdgeId=void 0,c.selectedNodeId=void 0,r!=null&&r.silent||c.changeList.push({command:"clearSelection",data:null})},toggleWireframe:function(r,h){typeof r=="undefined"?c.wireframe=!c.wireframe:c.wireframe=r,h!=null&&h.silent||c.changeList.push({command:"toggleWireframe",data:r})},toggleRotateControlsEnabled:function(r,h){typeof r=="undefined"?c.rotateControlsEnabled=!c.rotateControlsEnabled:c.rotateControlsEnabled=r,h!=null&&h.silent||c.changeList.push({command:"toggleRotateControlsEnabled",data:r})},clearChangeList:function(){c.changeList=[]}});return c},i=e(85893),d=(0,p.createContext)(null),u=function(c){var O=c.children,r=(0,p.useRef)();return r.current||(r.current=y()),(0,i.jsx)(d.Provider,{value:r.current,children:O})}},75783:function(M,a,e){e.d(a,{x:function(){return E}});var p=e(67294),m=e(90399);function v(x){var g=(0,p.useRef)(x);return g.current=x,g}var E=function(g,I){var y=v(I),i=(0,m.M)();(0,p.useEffect)(function(){return i&&(y.current=I,i.on(g,y.current)),function(){i&&y.current&&i.off(g,y.current)}},[i])}},90399:function(M,a,e){e.d(a,{M:function(){return v}});var p=e(67294),m=e(48429),v=function(){var x=(0,p.useContext)(m.r),g=x.editor;return g}},81058:function(M,a,e){e.d(a,{E:function(){return E}});var p=e(67294),m=e(58444),v=e(17625),E=function(){var g=(0,p.useContext)(m.x);if(!g)throw new Error("can only be get inside the xmodel component.");return(0,v.R)(g)}},65867:function(M,a,e){e.d(a,{k:function(){return y}});var p=e(5574),m=e.n(p),v=e(67294),E=e(96631),x=e(75783),g=e(90399),I=function(){var d=(0,g.M)(),u=(0,v.useCallback)(function(){return d?!0:(console.warn("editor can only be get inside the xmodel component."),!1)},[d]);return{isLoaded:u}},y=function(){var d=(0,g.M)(),u=I(),b=u.isLoaded,c=(0,v.useState)(!1),O=m()(c,2),r=O[0],h=O[1],N=(0,v.useState)(!1),L=m()(N,2),S=L[0],_=L[1],de=(0,v.useCallback)(function(){return b()&&d?d.undo():null},[d,b]),J=(0,v.useCallback)(function(){return b()&&d?d.redo():null},[d,b]);return(0,x.x)(E.e.onHistoryChanged,function(){d&&(h(d.canUndo()),_(d.canRedo()))}),{undo:de,redo:J,canUndo:r,canRedo:S}}},55035:function(M,a,e){e.d(a,{UG:function(){return g},nn:function(){return x},un:function(){return I}});var p=e(97857),m=e.n(p),v=e(52677),E=e.n(v);function x(y,i){if(E()(i)!=="object"||Array.isArray(i)||!i)return JSON.parse(JSON.stringify(i));if(E()(i)==="object"&&i.toJSON!==void 0&&typeof i.toJSON=="function")return i.toJSON();var d=y;return E()(y)!=="object"&&(d=m()({},i)),Object.keys(i).forEach(function(u){Object.prototype.hasOwnProperty.call(d,u)||(d[u]=i[u]),i[u]===null||i[u]===void 0?delete d[u]:d[u]!==null&&d[u]!==void 0&&(d[u]=x(d[u],i[u]))}),d}function g(y){return!!y&&E()(y)==="object"&&"isNode"in y}function I(y){return!!y&&E()(y)==="object"&&"isEdge"in y}},13400:function(M,a,e){e.d(a,{A:function(){return J}});var p=e(12444),m=e.n(p),v=e(72004),E=e.n(v),x=e(9783),g=e.n(x),I=e(99477);function y(D){var R=new I.cPb(75,D,.001,1e3);return R.up=new I.Pa4(0,0,1),R.position.set(.04,-.11,.02),R.lookAt(0,0,0),R}var i=e(69365);function d(D,R){var j=new i.z(D,R);return j.tick=function(){return j.update()},j.update(),j}function u(){var D=new THREE.AxesHelper(5);return D.position.set(0,0,.001),D}function b(){var D=new I.VLJ(10,10);return D.rotateX(Math.PI/2),D}function c(){var D=new I.Ox3(16777215,1);D.position.set(10,10,10);var R=new I.Mig(16777215,1);return{directionalLight:D,ambientLight:R}}var O=e(64599),r=e.n(O),h=new I.SUY,N=function(){function D(R,j,U){m()(this,D),g()(this,"camera",void 0),g()(this,"scene",void 0),g()(this,"renderer",void 0),g()(this,"updatables",void 0),this.camera=R,this.scene=j,this.renderer=U,this.updatables=[]}return E()(D,[{key:"start",value:function(){var j=this;this.renderer.setAnimationLoop(function(){j.tick(),j.renderer.render(j.scene,j.camera)})}},{key:"stop",value:function(){this.renderer.setAnimationLoop(null)}},{key:"tick",value:function(){var j=h.getDelta(),U=r()(this.updatables),Y;try{for(U.s();!(Y=U.n()).done;){var re=Y.value;re.tick(j)}}catch(z){U.e(z)}finally{U.f()}}}]),D}();function L(){var D=new I.CP7({antialias:!0});return D}var S=function(R,j,U){j.aspect=R.clientWidth/R.clientHeight,j.updateProjectionMatrix(),U.setSize(R.clientWidth,R.clientHeight),U.setPixelRatio(window.devicePixelRatio)},_=function(){function D(R,j,U){var Y=this;m()(this,D),S(R,j,U),window.addEventListener("resize",function(){S(R,j,U),Y.onResize()})}return E()(D,[{key:"onResize",value:function(){}}]),D}();function de(){var D=new I.xsS;return D.background=new I.Ilk(3289650),D}var J=function(){function D(R){var j=this;m()(this,D),g()(this,"camera",void 0),g()(this,"scene",void 0),g()(this,"renderer",void 0),g()(this,"controls",void 0),g()(this,"loop",void 0),this.camera=y(R.clientWidth/R.clientHeight),this.scene=de(),this.renderer=L(),this.loop=new N(this.camera,this.scene,this.renderer),this.controls=d(this.camera,this.renderer.domElement);var U=c(),Y=U.ambientLight,re=U.directionalLight;R.append(this.renderer.domElement),this.loop.updatables.push(this.controls),this.scene.add(Y,re,b());var z=new _(R,this.camera,this.renderer);z.onResize=function(){j.render()}}return E()(D,[{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"start",value:function(){this.loop.start()}},{key:"stop",value:function(){this.loop.stop()}}]),D}()},65680:function(M,a,e){e.r(a)},66836:function(M,a,e){e.r(a),e.d(a,{texts:function(){return m}});var p=e(59993);const m=[{value:"<XModelEditor />",paraId:0},{value:" \u7EC4\u4EF6\u53EA\u80FD\u5728 ",paraId:0},{value:"<XModel />",paraId:0},{value:" \u7EC4\u4EF6\u4E4B\u5185\u65B9\u53EF\u6B63\u5E38\u4F7F\u7528",paraId:0},{value:"\u5728 ",paraId:1},{value:"<XModel />",paraId:1},{value:" \u4E0B\u5F15\u5165 ",paraId:1},{value:"<XModelEditor />",paraId:1},{value:" \u540E, \u5176\u7EC4\u4EF6\u5185\u90E8\u4F1A\u5C06\u7F16\u8F91\u5668\u7684\u5B9E\u4F8B\u4FDD\u5B58\u5230 ",paraId:1},{value:"<XModel />",paraId:1},{value:" \u7684 context \u4E2D\uFF0C\u4EE5\u4F9B ",paraId:1},{value:"<XModel />",paraId:1},{value:" \u7684 children \u4F7F\u7528, \u53EF\u4EE5\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528 ",paraId:1},{value:"useEditorInstance",paraId:2},{value:" Hook \u5FEB\u901F\u83B7\u53D6\u7F16\u8F91\u5668\u5B9E\u4F8B",paraId:1},{value:`<XModel>
 ...
 <XModelEditor />
<XModel>
`,paraId:3},{value:"\u53C2\u6570\u540D",paraId:4,tocIndex:3},{value:"\u63CF\u8FF0",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"mesh",paraId:4,tocIndex:3},{value:"\u7F16\u8F91\u7684\u5BF9\u8C61\uFF0C\u8282\u70B9\u4E0E\u8FB9\u90FD\u5C06\u6DFB\u52A0\u81F3\u6B64\u7F51\u683C\u4E2D",paraId:4,tocIndex:3},{value:"THREE.Mesh",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"domElement",paraId:4,tocIndex:3},{value:"threejs \u6E32\u67D3\u7684\u753B\u5E03",paraId:4,tocIndex:3},{value:"HTMLCanvasElement",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"camera",paraId:4,tocIndex:3},{value:"\u900F\u89C6\u76F8\u673A",paraId:4,tocIndex:3},{value:"THREE.PerspectiveCamera",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"controls",paraId:4,tocIndex:3},{value:"\u8F68\u9053\u63A7\u5236\u5668",paraId:4,tocIndex:3},{value:"OrbitControls",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"scene",paraId:4,tocIndex:3},{value:"threejs \u573A\u666F",paraId:4,tocIndex:3},{value:"THREE.Scene",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3}]},3394:function(M,a,e){e.r(a),e.d(a,{texts:function(){return m}});var p=e(45299);const m=[{value:"XModel",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\u7684 context \u4F1A\u4FDD\u5B58\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u56E0\u6B64\u6240\u6709\u4E0E\u7F16\u8F91\u5668\u5B9E\u4F8B\u4EA4\u4E92\u7684\u7EC4\u4EF6\u90FD\u9700\u8981\u4FDD\u8BC1\u662F\u4F5C\u4E3A ",paraId:0,tocIndex:0},{value:"XModel",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\u7684\u5B50\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u57FA\u7840\u7684\u4F7F\u7528\u65B9\u6CD5\u53EF\u80FD\u5982\u4E0B\u9762\u7684\u4EE3\u7801\u6240\u793A\uFF1A",paraId:0,tocIndex:0},{value:`import { useEffect, useRef, useState } from 'react';

import { type EditorOptions, XModel, XModelEditor } from '@infore/xmodel';

import { Viewer } from './Viewer';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function ModelEdit() {
  const container = useRef<HTMLDivElement>(null);
  const [prepare, setPrepare] = useState<EditorOptions | null>(null);

  async function init() {
    const viewer = new Viewer(container.current!);
    const result = await new GLTFLoader().loadAsync('/workpiece.glb');
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
`,paraId:1,tocIndex:0}]},94343:function(M,a,e){e.r(a),e.d(a,{texts:function(){return m}});var p=e(37771);const m=[{value:"\u4F7F\u7528 ",paraId:0},{value:"XModel",paraId:0},{value:" \u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684\u6A21\u578B\u8DEF\u5F84\u7F16\u8F91\u5668\uFF0C\u4E0B\u9762\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u7F16\u8F91\u5668\u5B9E\u73B0\u7684\u793A\u4F8B\uFF0C\u57FA\u672C\u64CD\u4F5C\u5982\u4E0B\uFF1A",paraId:0},{value:"\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u6A21\u578B\u6DFB\u52A0\u8282\u70B9",paraId:1},{value:"\u6309\u4F4F\u8282\u70B9\u62D6\u62FD\u9F20\u6807\u81F3\u53E6\u4E00\u8282\u70B9\u5373\u53EF\u6DFB\u52A0\u4E00\u6761\u8FB9",paraId:2},{value:"\u9F20\u6807\u70B9\u51FB\u8282\u70B9\u6216\u8FB9\u8FDB\u884C\u9009\u4E2D",paraId:3},{value:"\u6309\u4E0B Delete \u952E\u5220\u9664\u9009\u4E2D\u7684\u8282\u70B9\u6216\u8FB9",paraId:4},{value:"\u6309\u4E0B Ctrl \u952E\u53EF\u7528\u9F20\u6807\u62D6\u62FD\u8282\u70B9\u79FB\u52A8",paraId:5}]},55629:function(M,a,e){e.r(a),e.d(a,{texts:function(){return m}});var p=e(18493);const m=[{value:"\u7F16\u8F91\u5668\u4E8B\u4EF6\u76D1\u542C\u7684 Hook",paraId:0,tocIndex:0},{value:`import { EditorEvent } from '@infore/xmodel';

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
`,paraId:4,tocIndex:4}]},76236:function(M,a,e){e.r(a),e.d(a,{texts:function(){return m}});var p=e(7037);const m=[{value:"\u7528\u4E8E\u83B7\u53D6\u7F16\u8F91\u5668\u5B9E\u4F8B\u7684 Hook",paraId:0,tocIndex:0},{value:`const editor = useEditorInstance();
`,paraId:1,tocIndex:1},{value:`const editor: Editor = useEditorInstance();
`,paraId:2,tocIndex:2},{value:"\u53C2\u6570",paraId:3,tocIndex:3},{value:"\u63CF\u8FF0",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"editor",paraId:3,tocIndex:3},{value:"\u7F16\u8F91\u5668\u5B9E\u4F8B",paraId:3,tocIndex:3},{value:"Editor",paraId:3,tocIndex:3},{value:"null",paraId:3,tocIndex:3},{value:"\u65E0",paraId:4,tocIndex:4}]},26768:function(M,a,e){e.r(a),e.d(a,{texts:function(){return m}});var p=e(50712);const m=[{value:"XModel",paraId:0,tocIndex:0},{value:" \u5BF9\u7F16\u8F91\u5668\u7684\u6570\u636E\u8FDB\u884C\u4E86\u7EDF\u4E00\u7684\u7BA1\u7406\uFF0C\u6574\u4E2A\u7F16\u8F91\u5668\u7684\u6570\u636E\u5B58\u5728\u4E00\u4E2A ",paraId:0,tocIndex:0},{value:"store",paraId:0,tocIndex:0},{value:" \u4E2D\uFF0C\u8FD9\u8BA9\u5F00\u53D1\u53D8\u5F97\u975E\u5E38\u5BB9\u6613\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:0,tocIndex:0},{value:"useEditorStore",paraId:0,tocIndex:0},{value:" \u65B9\u4FBF\u5FEB\u6377\u7684\u64CD\u4F5C ",paraId:0,tocIndex:0},{value:"store",paraId:0,tocIndex:0},{value:" , \u4ECE\u800C\u66F4\u65B0\u7F16\u8F91\u5668\u6570\u636E, \u5B9E\u73B0\u66F4\u65B0\u7F16\u8F91\u5668",paraId:0,tocIndex:0},{value:`const { nodes, edges, addNode, removeNode, ... } = useEditorStore();
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
`,paraId:2,tocIndex:2},{value:"\u53C2\u6570",paraId:3,tocIndex:2},{value:"\u63CF\u8FF0",paraId:3,tocIndex:2},{value:"\u7C7B\u578B",paraId:3,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:2},{value:"nodes",paraId:3,tocIndex:2},{value:"\u7F16\u8F91\u5668\u6240\u6709\u8282\u70B9",paraId:3,tocIndex:2},{value:'EditorData["nodes"]',paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"edges",paraId:3,tocIndex:2},{value:"\u7F16\u8F91\u5668\u6240\u6709\u8FB9",paraId:3,tocIndex:2},{value:'EditorData["edges"]',paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"initData",paraId:3,tocIndex:2},{value:"\u521D\u59CB\u5316\u6570\u636E",paraId:3,tocIndex:2},{value:"(data: EditorData, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"addNode",paraId:3,tocIndex:2},{value:"\u6DFB\u52A0\u8282\u70B9",paraId:3,tocIndex:2},{value:"(node: NodeOptions, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"removeNode",paraId:3,tocIndex:2},{value:"\u79FB\u9664\u8282\u70B9",paraId:3,tocIndex:2},{value:"(id: number, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"selectNode",paraId:3,tocIndex:2},{value:"\u9009\u4E2D\u8282\u70B9",paraId:3,tocIndex:2},{value:"(id: number, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"unselectNode",paraId:3,tocIndex:2},{value:"\u53D6\u6D88\u9009\u4E2D\u8282\u70B9",paraId:3,tocIndex:2},{value:"(id: number, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"updateNode",paraId:3,tocIndex:2},{value:"\u66F4\u65B0\u8282\u70B9",paraId:3,tocIndex:2},{value:"(id: number, data: Omit<NodeOptions, 'id'>, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"addEdge",paraId:3,tocIndex:2},{value:"\u6DFB\u52A0\u8FB9",paraId:3,tocIndex:2},{value:"(edge: EdgeOptions, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"removeEdge",paraId:3,tocIndex:2},{value:"\u79FB\u9664\u8FB9",paraId:3,tocIndex:2},{value:"(id: number, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"selectEdge",paraId:3,tocIndex:2},{value:"\u9009\u4E2D\u8FB9",paraId:3,tocIndex:2},{value:"(id: number, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"unselectEdge",paraId:3,tocIndex:2},{value:"\u53D6\u6D88\u9009\u4E2D\u8FB9",paraId:3,tocIndex:2},{value:"(id: number, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"updateEdge",paraId:3,tocIndex:2},{value:"\u66F4\u65B0\u8FB9",paraId:3,tocIndex:2},{value:"(id: number, data: Omit<EdgeOptions, 'source' | 'target' | 'id'>, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"clearSelection",paraId:3,tocIndex:2},{value:"\u6E05\u7A7A\u6240\u6709\u9009\u4E2D\u5BF9\u8C61",paraId:3,tocIndex:2},{value:"(options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"toggleWireframe",paraId:3,tocIndex:2},{value:"\u5207\u6362\u7EBF\u6846\u663E\u793A",paraId:3,tocIndex:2},{value:"(enabled?: boolean, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"toggleRotateControlsEnabled",paraId:3,tocIndex:2},{value:"\u5207\u6362\u542F\u7528\u8282\u70B9\u7684\u65CB\u8F6C\u63A7\u5236\u5668",paraId:3,tocIndex:2},{value:"(enabled?: boolean, options?: ActionOptions) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2}]},75826:function(M,a,e){e.r(a),e.d(a,{texts:function(){return m}});var p=e(23755);const m=[{value:"\u7528\u4E8E\u5B9E\u73B0\u7F16\u8F91\u5668\u5386\u53F2\u8BB0\u5F55\u7684 Hook",paraId:0,tocIndex:0},{value:`const { undo, redo, canUndo, canRedo } = useHistory();
`,paraId:1,tocIndex:1},{value:`
const {
  undo: () => void | null,
  redo: () => void | null,
  canUndo: boolean,
  canRedo: boolean
} = useHistory();

`,paraId:2,tocIndex:2},{value:"\u53C2\u6570",paraId:3,tocIndex:3},{value:"\u63CF\u8FF0",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"undo",paraId:3,tocIndex:3},{value:"\u64A4\u9500",paraId:3,tocIndex:3},{value:"() => void",paraId:3,tocIndex:3},{value:" | ",paraId:3,tocIndex:3},{value:"null",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"redo",paraId:3,tocIndex:3},{value:"\u91CD\u505A",paraId:3,tocIndex:3},{value:"() => void",paraId:3,tocIndex:3},{value:" | ",paraId:3,tocIndex:3},{value:"null",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"canUndo",paraId:3,tocIndex:3},{value:"\u662F\u5426\u53EF\u4EE5\u64A4\u9500",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"false",paraId:3,tocIndex:3},{value:"canRedo",paraId:3,tocIndex:3},{value:"\u662F\u5426\u53EF\u4EE5\u91CD\u505A",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"false",paraId:3,tocIndex:3},{value:"\u65E0",paraId:4,tocIndex:4}]},51446:function(M,a,e){e.r(a),e.d(a,{texts:function(){return m}});var p=e(68537);const m=[]},86761:function(M,a){a.Z=`import { Space, Steps, Typography } from 'antd';

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
`},97593:function(M,a){a.Z=`import {
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
`},84141:function(M,a){a.Z=`import {
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
`},14600:function(M,a){a.Z=`import { useState } from 'react';

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
`},77379:function(M,a){a.Z=`import { Space, Typography } from 'antd';

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
`},71184:function(M,a){a.Z=`import { useEffect, useState } from 'react';

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
`},943:function(M,a){a.Z=`import { type ComponentProps, useRef } from 'react';

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
`},56634:function(M,a){a.Z=`import type { CSSProperties, ReactNode } from 'react';

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
`},39306:function(M,a){a.Z=`import React from 'react';

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
`},87132:function(M,a){a.Z=`.group {
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
`},53900:function(M,a){a.Z=`import './index.less';

export * from './Input';
export * from './Select';
`},73983:function(M,a){a.Z=`import React, { useEffect, useRef, useState } from 'react';
import 'react-json-view-lite/dist/index.css';

import { EditorLayout } from '@ant-design/pro-editor';
import { Button, Space } from 'antd';

import { type EditorOptions, XModel, XModelEditor } from '@infore/xmodel';
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
      {prepare && <XModelEditor {...prepare} />}
    </XModel>
  );
}
`},51741:function(M,a){a.Z=`import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`}}]);
