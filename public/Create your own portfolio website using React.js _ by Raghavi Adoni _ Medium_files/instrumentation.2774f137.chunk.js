(self.webpackChunklite=self.webpackChunklite||[]).push([[118],{8538:(n,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>A});var t=r(94725),o=r(67294),i=r(12291),s=r(99264),a=r(57168),u=r(72351),c=r(52837),l=r(61250),f=r(31235),d=r(31117),v=r(27737),p=r(67616),g=r(29035),m=r(63038),h=r.n(m),_=r(59713),b=r.n(_),w=r(44059),E=r(14034);function T(){for(var n=new E.y,e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(0===r.length)return n;var o=r.map((function(){return[]}));return r.forEach((function(e,r){e.observe((function(e){o[r].push(e),o.every((function(n){return n.length>0}))&&n.set(o.map((function(n){return n.shift()})))}))})),n}var P=function(n){return function(e){return b()({},n,e)}};const A=function(){var n,e,r,m,_,b,E,A,M,S,y,C,k,L,O,F;return o.useEffect((function(){var n=T(p.sY,p.wZ,p.vY).map((function(n){var e=h()(n,3),r=e[0],t=e[1],o=e[2];return{responseEndToLCP:new p.jb(r.response.end,t.end),responseEndToFCP:new p.jb(r.response.end,o.end)}})),e=T(p.sY,p.qH.map(P("fid")),p.vY.map(P("fcp")),p.wZ.map(P("lcp")),n);p.cA.observe((function(n){n||e.observe((function(n){var e=n.reduce((function(n,e){return Object.assign(n,e)}),{}),r=Object.keys(e).reduce((function(n,r){var t=e[r].duration;return n[r]=t%1==0?t:Number(t.toFixed(1)),n}),{}),t=document.children[0],o={html:null==t?void 0:t.innerHTML.length,redux:JSON.stringify(window.__PRELOADED_STATE__).length,apollo:JSON.stringify(window.__APOLLO_STATE__).length};w.t.log("client hydrated",{perf:r,sizes:o})}))})),p.Df.observe((function(n){return w.t.log("client resource sizes",{resources:n})}))}),[]),n=(0,i.v9)((function(n){return n.tracing.tracer})),e=(0,i.v9)((function(n){return n.tracing.originalSpan})),r=(0,s.c)(),m=r.loading,_=r.isBot,b=(0,i.v9)((function(n){return n.client.routingEntity})),E=(0,i.v9)((function(n){return n.auroraPage.isAuroraPageEnabled})),A=(0,a.r)(),M=A.loading,S=A.viewerId,y=(0,i.v9)((function(n){return n.config.performanceTags})),C=(0,f.xg)(),k=(0,f.f$)(),L=(0,i.I0)(),O=(0,l.dh)(),F=(0,u.Av)(),o.useEffect((function(){var r;if(n&&F&&!m&&!_&&!M&&S){var o=O(window.location.pathname),i=null!==(r=null==o?void 0:o.route.metricName)&&void 0!==r?r:"unidentified",s=(0,v.j)(S),a=(0,g.ic)(navigator.userAgent),u=[];C?u.push("edge_cache_enabled"):k&&u.push("edge_cache_control");var l=u.join(","),f={"user.logged_in":s,"user.experiment":l,"device.mobile_or_tablet":a,"req.route_name":i,"req.route":i,"req.router":(null==b?void 0:b.type)||c.Cr.DEFAULT};y.forEach((function(n){return f["req.".concat(n)]=1}));var h={auroraPage:E,loggedIn:s,mobileOrTablet:a,experiment:l,route:i},w=function(n){return Math.round(1e3*n)},T=function(e,r,t,o){var i=t.start,s=t.end,a=n.startSpan("timing.".concat(r),{childOf:e,tags:f}).setBeginMicros(w(i)).setEndMicros(w(s));return null!=o&&o(a),a.finish(),a};p.sY.observe((function(r){var o,i,s,a;F.reportRender(h,r);var u=n.startSpan("timing.navigation",{references:e?[(0,t.followsFrom)(e)]:void 0,tags:f}).setBeginMicros(w(r.load.start)).setEndMicros(w(r.load.end)).log({redirect_count:null!==(o=null===(i=window)||void 0===i||null===(s=i.performance)||void 0===s||null===(a=s.navigation)||void 0===a?void 0:a.redirectCount)&&void 0!==o?o:0});T(u,"beforeDomainLookup",r.before_domain_lookup),T(u,"domainLookup",r.domain_lookup),T(u,"connect",r.connect),T(u,"request",r.request),T(u,"response",r.response),T(u,"processing",r.processing);var c=r.overall_fcp,l=r.client,v=r.render;null!=c&&T(u,"firstContentfulPaint",c),null!=l&&T(u,"client",l,(function(n){null!=v&&T(n,"render",v)})),u.finish(),L((0,d.YU)(u.generateTraceURL()))})),p.vY.observe((function(r){F.reportFirstContentfulPaint(h,r),n.startSpan("timing.firstContentfulPaint.v2",{references:e?[(0,t.followsFrom)(e)]:void 0,tags:f}).setBeginMicros(w(r.start)).setEndMicros(w(r.end)).finish()})),p.wZ.observe((function(r){F.reportLargestContentfulPaint(h,r),n.startSpan("timing.largestContentfulPaint",{references:e?[(0,t.followsFrom)(e)]:void 0,tags:f}).setBeginMicros(w(r.start)).setEndMicros(w(r.end)).finish()})),p.yI.observe((function(n){F.reportCumulativeLayoutShift(h,n)})),p.cA.observe((function(n){n&&F.reportUnsupportedPerfObserver(h)})),p.qH.observe((function(r){F.reportInput(h,r),n.startSpan("timing.input.first.delay",{references:e?[(0,t.followsFrom)(e)]:void 0,tags:f}).setBeginMicros(w(r.start)).setEndMicros(w(r.end)).finish()}))}}),[n,M,S,m,_]),null}},72864:(n,e,r)=>{"use strict";r.r(e),r.d(e,{init:()=>i,extractSpan:()=>s});var t=r(45573),o=r(94725),i=function(n){var e=n.name,r=n.host,i=n.token,s=n.appVersion,a=new t.Tracer({component_name:e,xhr_instrumentation:!1,access_token:i,collector_host:r,default_span_tags:{"component.version":s}});return(0,o.initGlobalTracer)(a),a},s=function(n,e){if(e)return n.extract(o.FORMAT_HTTP_HEADERS,e)}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/instrumentation.2774f137.chunk.js.map