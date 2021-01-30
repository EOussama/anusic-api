(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(2),i=n.n(s),c=n(17),o=n.n(c),r=(n(23),n(3)),l=n(4),d=n(7),h=n(6),m=n(5),u=n.n(m),j=(n(42),n(43),n(44),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={mode:0,anime:{},targetTheme:null,loading:!1},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),u.a.get("".concat(this.props.endPoint,"/anime/").concat(this.props.animeId)).then((function(t){var n=t.data;e.setState({loading:!1}),n.hasError||e.setState({anime:n.data})})).catch((function(){e.setState({loading:!1}),e.props.onAnimeClosed()}))}},{key:"render",value:function(){var e=this,t=[],n=[],i=null;if(this.state.anime&&this.state.anime.collections){t=this.state.anime.collections.filter((function(t){return e.collectionHasThemes(t,e.state.mode)})).map((function(t,n){return Object(a.jsxs)("details",{open:0===n,children:[Object(a.jsx)("summary",{children:Object(a.jsxs)("h6",{children:[Object(a.jsx)("span",{class:"badge badge-light",children:e.getThemesCount(t,e.state.mode)})," ",t.name]})}),Object(a.jsx)("ul",{className:"list-group mb-2",children:t.themes.filter((function(t){return t.type===e.state.mode})).map((function(t,n){return Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{className:"badge badge-primary mr-1",children:[0===e.state.mode?"OP":"ED"," ",t.order]}),Object(a.jsxs)("span",{className:"badge badge-secondary mr-1",children:["V",t.version]}),Object(a.jsx)("b",{children:t.name}),!0===t.isNSFW?Object(a.jsx)("span",{className:"badge badge-danger ml-1 float-right",children:"NSFW"}):"",!0===t.hasSpoilers?Object(a.jsx)("span",{className:"badge badge-danger ml-1 float-right",children:"SPOILERS"}):""]}),Object(a.jsx)("ul",{className:"list-group mt-2",children:t.sources.map((function(t,n){return Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("a",{href:"#",onClick:function(){return e.playTheme(t.link)},children:"Play audio"}),Object(a.jsx)("a",{target:"_blank",class:"ml-4",href:t.link,children:"Open video"})]},n+300*(e.state.mode+1))}))})]},n+200*(e.state.mode+1))}))})]},n+100*(e.state.mode+1))}));var c=this.state.anime.collections.reduce((function(t,n){return t+e.getThemesCount(n,0)}),0),o=this.state.anime.collections.reduce((function(t,n){return t+e.getThemesCount(n,1)}),0);this.state.anime.collections.filter((function(t){return e.collectionHasThemes(t,0)})).length>0?n.push(Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)("a",{className:"nav-link "+(0===this.state.mode?"active":""),onClick:function(){return e.onModeToggle(0)},children:[Object(a.jsx)("span",{class:"badge badge-secondary",children:c})," Opening(s)"]})})):0!==this.state.mode||this.state.loading||this.setState({mode:1}),this.state.anime.collections.filter((function(t){return e.collectionHasThemes(t,1)})).length>0&&n.push(Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)("a",{className:"nav-link "+(1===this.state.mode?"active":""),onClick:function(){return e.onModeToggle(1)},children:[Object(a.jsx)("span",{class:"badge badge-secondary",children:o})," Ending(s)"]})}))}return this.state.targetTheme&&(i=Object(a.jsx)("audio",{controls:!0,id:"player",children:Object(a.jsx)("source",{src:this.state.targetTheme,type:"audio/ogg"})})),Object(a.jsx)(s.Fragment,{children:Object(a.jsx)("div",{className:"modal",children:this.state.loading?Object(a.jsx)("div",{className:"spinner spinner-border text-light float-right",role:"status",children:Object(a.jsx)("span",{className:"visually-hidden"})}):Object(a.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-dialog-scrollable",role:"document",children:Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsxs)("div",{className:"modal-header",children:[Object(a.jsxs)("h5",{className:"modal-title",children:[Object(a.jsxs)("div",{className:"title",children:[this.state.anime.name,this.state.anime.year?Object(a.jsx)("span",{className:"badge badge-secondary float-right",children:this.state.anime.year}):""]}),Object(a.jsx)("p",{className:"alt",children:this.state.anime.altNames?this.state.anime.altNames.join(","):""})]}),Object(a.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:function(){return e.props.onAnimeClosed()},children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(a.jsxs)("div",{className:"modal-body",children:[Object(a.jsx)("ul",{className:"nav nav-tabs",children:n}),Object(a.jsx)("div",{className:"tab",children:t})]}),Object(a.jsxs)("div",{className:"modal-footer",children:[i,Object(a.jsx)("a",{type:"button",className:"btn btn-primary",target:"_blank",href:"https://myanimelist.net/anime/".concat(this.state.anime.id),children:"Visit MAL Page"})]})]})})})})}},{key:"onModeToggle",value:function(e){this.setState({mode:e})}},{key:"collectionHasThemes",value:function(e,t){return e.themes.some((function(e){return e.type===t}))}},{key:"getThemesCount",value:function(e,t){return e.themes.filter((function(e){return e.type===t&&1===e.version})).length}},{key:"playTheme",value:function(e){this.setState({targetTheme:e}),setTimeout((function(){document.getElementById("player").load(),document.getElementById("player").play()}),0)}}]),n}(s.Component)),b=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={animeList:[],list:[],animeId:-1,infoShown:!1,loading:!1},e.endPoint="https://anusic-api.herokuapp.com/api/v1",e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),u.a.get("".concat(this.endPoint,"/anime")).then((function(t){var n=t.data;e.setState({loading:!1}),n.hasError||e.setState({animeList:n.data,list:n.data})})).catch((function(){return e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this,t=null;return this.state.infoShown&&(t=Object(a.jsx)(j,{endPoint:this.endPoint,animeId:this.state.animeId,onAnimeClosed:this.onAnimeClosed.bind(this)})),Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsxs)("nav",{className:"navbar sticky-top navbar-light bg-light px-5",children:[Object(a.jsx)("a",{href:"/#",className:"navbar-brand",children:"Anusic React"}),Object(a.jsx)("div",{className:"form-inline",children:Object(a.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(t){t.target.value.length>0?e.setState({list:e.state.animeList.filter((function(e){return e.name.toLowerCase().concat((e.altNames||[]).join(" ").toLowerCase()).concat((e.year||0).toString()).includes(t.target.value.toLowerCase().trim())}))}):e.setState({list:e.state.animeList})}})})]}),Object(a.jsxs)("main",{className:"p-5",children:[Object(a.jsxs)("div",{className:"alert alert-dark",role:"alert",children:[Object(a.jsx)("b",{children:this.state.list.length})," Anime fetched!",this.state.loading?Object(a.jsx)("div",{className:"spinner spinner-border float-right",role:"status",children:Object(a.jsx)("span",{className:"visually-hidden"})}):""]}),Object(a.jsx)("ul",{className:"list-group",children:this.state.list.map((function(t,n){return Object(a.jsxs)("a",{className:"list-group-item list-group-item-action",onClick:function(){return e.onAnimeClicked(t)},children:[Object(a.jsx)("span",{className:"name",children:t.name}),t.year?Object(a.jsx)("span",{className:"badge badge-secondary float-right",children:t.year}):"",t.altNames&&t.altNames.length>0?Object(a.jsx)("p",{className:"alt",children:t.altNames.join(",")}):""]},n)}))})]}),t]})}},{key:"onAnimeClicked",value:function(e){this.setState({infoShown:!0,animeId:e.id})}},{key:"onAnimeClosed",value:function(){this.setState({infoShown:!1})}}]),n}(s.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");g?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):p(t,e)}))}}(),f()}},[[45,1,2]]]);
//# sourceMappingURL=main.b94039ec.chunk.js.map