(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[884],{1884:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var i=s(5155),a=s(2115),r=s(1772),l=s(9476);s(6419),s(5139);let o=(0,a.memo)(e=>{let{data:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"cloud gradient",children:(0,i.jsx)("div",{children:t.icon||(0,i.jsx)("div",{className:"w-4 h-4 bg-indigo-500 rounded-full"})})}),(0,i.jsx)("div",{className:"wrapper gradient",children:(0,i.jsxs)("div",{className:"inner",children:[(0,i.jsx)("div",{className:"body",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"title",children:t.title}),t.subtitle&&(0,i.jsx)("div",{className:"subtitle",children:t.subtitle})]})}),(0,i.jsx)(r.h7,{type:"target",position:l.yX.Left}),(0,i.jsx)(r.h7,{type:"source",position:l.yX.Right})]})})]})});o.displayName="PipelineNode";let d=(0,a.memo)(e=>{let{data:t}=e;return(0,i.jsx)("div",{className:"output-node gradient",children:(0,i.jsxs)("div",{className:"inner",children:[(0,i.jsx)("div",{className:"title",children:t.title}),t.subtitle&&(0,i.jsx)("div",{className:"subtitle",children:t.subtitle}),(0,i.jsx)(r.h7,{type:"target",position:l.yX.Left})]})})});d.displayName="OutputNode";let n=(0,a.memo)(e=>{let{data:t}=e;return(0,i.jsx)("div",{className:"model-node gradient",children:(0,i.jsxs)("div",{className:"inner",children:[(0,i.jsx)("div",{className:"title",children:t.title}),t.subtitle&&(0,i.jsx)("div",{className:"subtitle",children:t.subtitle}),(0,i.jsx)(r.h7,{type:"target",position:l.yX.Left})]})})});n.displayName="ModelNode";let p=()=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 text-white",viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z",clipRule:"evenodd"})}),c=[{id:"1",position:{x:70,y:50},data:{icon:(0,i.jsx)(()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 text-white",viewBox:"0 0 20 20",fill:"currentColor",children:[(0,i.jsx)("path",{d:"M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"}),(0,i.jsx)("path",{d:"M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"}),(0,i.jsx)("path",{d:"M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"})]}),{}),title:"extract-consumption-data",subtitle:"python:3.10"},type:"pipeline"},{id:"2",position:{x:70,y:150},data:{icon:(0,i.jsx)(p,{}),title:"map-teams-to-features",subtitle:"python:3.10"},type:"pipeline"},{id:"3",position:{x:70,y:250},data:{icon:(0,i.jsx)(p,{}),title:"clean-streaming-consumption",subtitle:"python:3.10"},type:"pipeline"},{id:"4",position:{x:70,y:350},data:{icon:(0,i.jsx)(p,{}),title:"create-consumption-features",subtitle:"python:3.11"},type:"pipeline"},{id:"5",position:{x:70,y:450},data:{icon:(0,i.jsx)(p,{}),title:"create-composite-features",subtitle:"python:3.11"},type:"pipeline"},{id:"6",position:{x:70,y:550},data:{icon:(0,i.jsx)(()=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 text-white",viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.jsx)("path",{d:"M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"})}),{}),title:"clustering-component",subtitle:"python:3.11"},type:"pipeline"},{id:"10",position:{x:430,y:340},data:{title:"optimal_k_metrics",subtitle:"type: system.Dataset"},type:"output"},{id:"7",position:{x:430,y:450},data:{title:"cluster_profiles",subtitle:"type: system.Dataset"},type:"output"},{id:"8",position:{x:430,y:550},data:{title:"clustered_data",subtitle:"type: system.Dataset"},type:"output"},{id:"9",position:{x:430,y:650},data:{title:"kmeans_model",subtitle:"type: system.Artifact"},type:"model"}],h=[{id:"e1-2",source:"1",target:"2",type:"pipeline",style:{strokeDasharray:"5 5",strokeWidth:1.5,stroke:"#9333ea"}},{id:"e2-3",source:"2",target:"3",type:"pipeline",style:{strokeDasharray:"5 5",strokeWidth:1.5,stroke:"#9333ea"}},{id:"e3-4",source:"3",target:"4",type:"pipeline",style:{strokeDasharray:"5 5",strokeWidth:1.5,stroke:"#9333ea"}},{id:"e4-5",source:"4",target:"5",type:"pipeline",style:{strokeDasharray:"5 5",strokeWidth:1.5,stroke:"#9333ea"}},{id:"e5-6",source:"5",target:"6",type:"pipeline",style:{strokeDasharray:"5 5",strokeWidth:1.5,stroke:"#9333ea"}},{id:"e6-10",source:"6",target:"10",type:"pipeline",style:{strokeDasharray:"5 5",strokeWidth:1.5,stroke:"#9333ea"}},{id:"e6-7",source:"6",target:"7",type:"pipeline",style:{strokeDasharray:"5 5",strokeWidth:1.5,stroke:"#9333ea"}},{id:"e6-8",source:"6",target:"8",type:"pipeline",style:{strokeDasharray:"5 5",strokeWidth:1.5,stroke:"#9333ea"}},{id:"e6-9",source:"6",target:"9",type:"pipeline",style:{strokeDasharray:"5 5",strokeWidth:1.5,stroke:"#9333ea"}}],y={pipeline:o,output:d,model:n},u={pipeline:function(e){let{id:t,sourceX:s,sourceY:a,targetX:r,targetY:o,sourcePosition:d,targetPosition:n,style:p={},markerEnd:c}=e,[h]=(0,l.Fp)({sourceX:s,sourceY:a,sourcePosition:d,targetX:r,targetY:o,targetPosition:n});return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("path",{id:t,style:p,className:"react-flow__edge-path",d:h,markerEnd:c})})}},x={animated:!0,markerEnd:"edge-circle",type:"smoothstep"},m=()=>{let[e,t,s]=(0,r.ck)(c),[o,d,n]=(0,r.fM)(h),p=(0,a.useCallback)(e=>d(t=>(0,l.rN)(e,t)),[]);return(0,i.jsx)("div",{style:{height:700,width:"100%"},children:(0,i.jsxs)(r.Gc,{nodes:e,edges:o,onNodesChange:s,onEdgesChange:n,onConnect:p,fitView:!0,nodeTypes:y,edgeTypes:u,defaultEdgeOptions:x,nodesDraggable:!1,zoomOnScroll:!1,panOnScroll:!1,attributionPosition:"bottom-right",children:[(0,i.jsx)(r.H2,{showInteractive:!1}),(0,i.jsx)(r.VS,{color:"#f1f1f1",gap:16}),(0,i.jsx)("svg",{children:(0,i.jsxs)("defs",{children:[(0,i.jsxs)("linearGradient",{id:"edge-gradient",children:[(0,i.jsx)("stop",{offset:"0%",stopColor:"#4F46E5"}),(0,i.jsx)("stop",{offset:"50%",stopColor:"#8B5CF6"}),(0,i.jsx)("stop",{offset:"100%",stopColor:"#EC4899"})]}),(0,i.jsx)("marker",{id:"edge-circle",viewBox:"-5 -5 10 10",refX:"0",refY:"0",markerUnits:"strokeWidth",markerWidth:"10",markerHeight:"10",orient:"auto",children:(0,i.jsx)("circle",{stroke:"#8B5CF6",strokeOpacity:"0.75",r:"2",cx:"0",cy:"0",fill:"white"})})]})})]})})}},5139:()=>{}}]);