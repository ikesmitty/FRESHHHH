(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(21)},18:function(e,a,t){},20:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);t(11),t(3),t(12),t(13);var n=t(0),c=t.n(n),r=t(6),l=t.n(r),o=(t(18),t(2)),s=t.n(o),i=t(7),m=t(9);t(20),t(5);var u=function(e){return c.a.createElement("div",{className:"FreshPost col-12"},c.a.createElement("a",{href:e.url},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"thumbnail col-3"},c.a.createElement("img",{className:"col-12",src:e.img,alt:""})),c.a.createElement("div",{className:"content col-8"},c.a.createElement("h2",null,e.title)))))},d=t(8),p=t.n(d);var v=function(e){return c.a.createElement("div",{className:"FreshCard row-12 mb-4"},c.a.createElement(u,{title:e.postInfo.title,url:e.postInfo.url,img:null!=e.postInfo.media?e.postInfo.media.oembed.thumbnail_url:p.a}))};var f=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)(function(){function e(){return(e=Object(i.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://www.reddit.com/r/hiphopheads/hot.json?limit=100").then(function(e){return e.json()}).then(function(e){r(e.data.children)}).catch(function(e){return console.error("Error Grabbing FRESH Music:",e)});case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),c.a.createElement("div",{className:"App"},c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-4"},c.a.createElement("ul",{className:"navbar-nav mr-auto ml-3"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement("h2",null,c.a.createElement("b",null,"FRESH HipHopHeads Posts")))),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav mr-auto"}))),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"}),c.a.createElement("div",{className:"col-7-lg col-12-sm mx-sm-1"},t.map(function(e,a){return"FRESH"===e.data.title.substring(1,6)?c.a.createElement(v,{key:a,postInfo:e.data}):""})),c.a.createElement("div",{className:"col"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,a,t){},8:function(e,a,t){e.exports=t.p+"static/media/defaultThumbnail.a2c9a67e.png"}},[[10,1,2]]]);
//# sourceMappingURL=main.2582d007.chunk.js.map