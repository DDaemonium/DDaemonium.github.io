(this.webpackJsonpvkfl=this.webpackJsonpvkfl||[]).push([[0],{119:function(e,t,r){"use strict";r.r(t);var n=r(35),i=(r(105),r(1)),c=r(2),s=r(123),o=r(124),a=r(122),l=r(125),d=r(26),u=r.n(d),h=r(17),j=r.n(h),p=r(25),b="https://ubackstore.herokuapp.com/",m="https://ufoback.herokuapp.com/";function x(e){return O.apply(this,arguments)}function O(){return(O=Object(p.a)(j.a.mark((function e(t){var r,n,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 1500,r=new AbortController,n=setTimeout((function(){return r.abort()}),1500),e.next=5,fetch(b+t,{signal:r.signal}).catch(function(){var e=Object(p.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+t,{signal:r.signal});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:return i=e.sent,clearTimeout(n),e.next=9,i.json();case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("main/GetPartners");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("main/GetCategories?parentId="+(t||"null"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("main/GetCategoriesByIds?ids="+(t||"null"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(p.a)(j.a.mark((function e(t,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("main/GetProduct?article="+(t||"7409903")+"&name="+r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t,r,n){return k.apply(this,arguments)}function k(){return(k=Object(p.a)(j.a.mark((function e(t,r,n,i){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("main?query="+(t||"")+"&p="+r+"&tid="+(n||"")+"&pid="+(i||""));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=r(20),P=r(21),S=r(24),A=r(23),I=r(22),D=r(0),B=function(e){Object(A.a)(r,e);var t=Object(I.a)(r);function r(e){var n,i,c;return Object(C.a)(this,r),c=t.call(this,e),window.history.pushState("","Partner Shop - \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u044b","/partners"),null===(n=document.querySelector("link[rel='canonical']"))||void 0===n||n.setAttribute("href",window.location.protocol+"//"+window.location.host+"/partners"),document.title="Partner Shop - \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u044b",null===(i=document.querySelector('meta[name="description"]'))||void 0===i||i.setAttribute("content","Partner Shop - \u043e\u0433\u0440\u043e\u043c\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440 \u0442\u043e\u0432\u0430\u0440\u043e\u0432, \u043f\u0440\u0438\u044f\u0442\u043d\u044b\u0435 \u0446\u0435\u043d\u044b \u0438 \u0432\u044b\u0433\u043e\u0434\u043d\u044b\u0439 cashback! \u041c\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u0441 \u043f\u0440\u043e\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c\u0438 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0430\u043c\u0438."),c.state={partners:[]},c.openPartners=c.openPartners.bind(Object(S.a)(c)),c.openPartners(),c}return Object(P.a)(r,[{key:"openPartners",value:function(){var e=this;(function(){return g.apply(this,arguments)})().then((function(t){return e.setState({partners:t.map((function(e){return Object(D.jsx)(c.e,{mode:"shadow",children:Object(D.jsx)(c.t,{children:Object(D.jsx)(c.o,{header:"\u0422\u043e\u0432\u0430\u0440\u043e\u0432 \u043d\u0430\u0439\u0434\u0435\u043d\u043e: "+e.productsCount,children:e.name})})},e._id)}))})}))}},{key:"render",value:function(){return Object(D.jsxs)(c.l,{children:[(!this.state.partners||this.state.partners.length<=0)&&Object(D.jsx)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:Object(D.jsx)(c.u,{size:"large",style:{margin:"20px 0"}})}),Object(D.jsx)(c.f,{size:this.props.isDesktop?"s":"l",children:this.state.partners})]})}}]),r}(i.Component),T=function(e){Object(A.a)(r,e);var t=Object(I.a)(r);function r(e){var n;Object(C.a)(this,r),n=t.call(this,e),document.title="Partner Shop - \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0442\u043e\u0432\u0430\u0440\u043e\u0432";var i=window.location.pathname.split("/");return(i.length<1||"categories"!=i[1])&&(i=[]),n.state={categories:[],currentId:i.length>2?i[2]:null,parentId:null},n.loadCategories=n.loadCategories.bind(Object(S.a)(n)),n.loadCategories(n.state.currentId),n}return Object(P.a)(r,[{key:"loadCategories",value:function(e){var t=this;(function(e){return f.apply(this,arguments)})(e).then((function(r){var n;if(0!=r.length){window.history.pushState("",document.title,"/categories/"+(e&&"null"!=e?e:"")),null===(n=document.querySelector("link[rel='canonical']"))||void 0===n||n.setAttribute("href",window.location.protocol+"//"+window.location.host+"/categories/"+(e&&"null"!=e?e:""));var i=r[0].parentId;i&&"null"!=i?function(e){return y.apply(this,arguments)}(i).then((function(e){return t.setState({parentId:e[0].parentId})})):t.setState({parentId:null}),t.setState({categories:r.map((function(e){return Object(D.jsx)(c.e,{mode:"shadow",onClick:function(r){return t.loadCategories(e.id)},children:Object(D.jsx)(c.t,{children:Object(D.jsx)(c.o,{header:"\u041f\u043e\u0434\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",children:e.name})})},e.id)}))})}}))}},{key:"render",value:function(){var e=this;return Object(D.jsxs)(c.l,{children:[Object(D.jsxs)(c.x,{children:[Object(D.jsx)(c.y,{selected:!1,size:"m",onClick:function(t){return e.loadCategories(null)},children:"\u0412\u0441\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(D.jsx)(c.y,{selected:!1,size:"m",onClick:function(t){return e.loadCategories(e.state.parentId)},children:"\u041d\u0430\u0437\u0430\u0434"})]}),Object(D.jsx)(c.f,{size:this.props.isDesktop?"s":"l",children:this.state.categories})]})}}]),r}(i.Component),z=r(120),q=r(121),R=function(e){Object(A.a)(r,e);var t=Object(I.a)(r);function r(e){var n;Object(C.a)(this,r),n=t.call(this,e);var i=new URL(document.location.href).searchParams,c=0,s=i.get("p");s&&(c=isNaN(parseInt(s,10))?0:parseInt(s,10));var o=window.location.pathname.split("/");return(o.length<1||"products"!=o[1])&&(o=[]),n.state={products:[],q:o.length>2?decodeURI(o[2]):"",p:c,tid:i.get("tid"),pid:i.get("pid"),productsFound:""},n.onChange=n.onChange.bind(Object(S.a)(n)),n.searchEnter=n.searchEnter.bind(Object(S.a)(n)),n.goToProduct=n.goToProduct.bind(Object(S.a)(n)),n.search(n.state.q,n.state.p,n.state.tid,n.state.pid),n}return Object(P.a)(r,[{key:"searchEnter",value:function(e){13===e.keyCode&&this.search(this.state.q,0,null,null)}},{key:"goToPageURI",value:function(e){return window.location.protocol+"//"+window.location.host+"/products/"+(this.state.q?this.state.q.replaceAll("/"," "):"")+"?p="+e+"&tid="+(this.state.tid?this.state.tid:"")+"&pid="+(this.state.pid?this.state.pid:"")}},{key:"goToSimilarURI",value:function(e,t){return window.location.protocol+"//"+window.location.host+"/products/"+(e?e.replaceAll("/"," "):"")+"?p="+this.state.p+"&tid="+(t||"")+"&pid="+(this.state.pid?this.state.pid:"")}},{key:"goToProductURI",value:function(e,t){return window.location.protocol+"//"+window.location.host+"/preview/"+e+"/"+(t?t.replaceAll("/"," "):"")}},{key:"goToProduct",value:function(e,t){window.history.pushState("",document.title,"/preview/"+e+"/"+(t?t.replaceAll(" / "," "):"")),this.props.openProductView()}},{key:"getSimilar",value:function(e,t){this.setState({q:e,tid:t,pid:null,p:1}),this.search(e,1,t,null)}},{key:"buyProduct",value:function(e){var t;null===(t=window.open(e,"_blank"))||void 0===t||t.focus()}},{key:"search",value:function(e,t,r,n){var i,s,o=this;window.scrollTo(0,0),document.title="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430 \u041a\u0443\u043f\u0438\u0442\u044c: "+(e||""),window.history.pushState("",document.title,"/products/"+(e?e.replaceAll("/"," "):"")+"?p="+t+"&tid="+(r||"")+"&pid="+(n||"")),null===(i=document.querySelector("link[rel='canonical']"))||void 0===i||i.setAttribute("href",window.location.protocol+"//"+window.location.host+"/products/"+(e?e.replaceAll("/"," "):"")+"?p="+t+"&tid="+(r||"")+"&pid="+(n||"")),null===(s=document.querySelector('meta[name="description"]'))||void 0===s||s.setAttribute("content",document.title+" Partner Shop - \u043e\u0433\u0440\u043e\u043c\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440 \u0442\u043e\u0432\u0430\u0440\u043e\u0432, \u043f\u0440\u0438\u044f\u0442\u043d\u044b\u0435 \u0446\u0435\u043d\u044b \u0438 \u0432\u044b\u0433\u043e\u0434\u043d\u044b\u0439 cashback!"),v(e,t,r,n).then((function(e){return o.setState({productsFound:e.foundCount,products:e.products.map((function(e,t){return Object(D.jsxs)(c.e,{mode:"shadow",children:[Object(D.jsx)("div",{style:{padding:1,alignItems:"center",justifyContent:"center",textAlign:"center"},children:Object(D.jsx)("img",{loading:"lazy",style:{maxWidth:o.props.isDesktop?210:"100%",width:o.props.isDesktop?210:"100%",maxHeight:o.props.isDesktop?210:"100%",height:o.props.isDesktop?210:"100%",objectFit:"scale-down",position:"relative"},src:e.imgUrl,alt:e.name})}),Object(D.jsxs)(c.i,{children:[Object(D.jsx)(c.n,{weight:"regular",style:{marginBottom:16},children:e.name}),e.isAvailable&&Object(D.jsxs)(c.B,{weight:"medium",style:{marginBottom:16,color:"#28a745!important"},children:[e.price,"\u20bd"]}),e.isAvailable&&e.charge&&"0"!=e.charge&&Object(D.jsxs)(c.B,{weight:"medium",style:{marginBottom:16,color:"#dc3545!important"},children:["\u0412\u0435\u0440\u043d\u0451\u043c: ",e.charge,"\u20bd"]}),!e.isAvailable&&Object(D.jsx)(c.B,{weight:"medium",style:{marginBottom:16},children:"\u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 :("}),e.model&&Object(D.jsxs)(c.B,{weight:"regular",children:["\u041c\u043e\u0434\u0435\u043b\u044c: ",e.model]}),e.vendor&&Object(D.jsxs)(c.B,{weight:"regular",children:["\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: ",e.vendor]})]}),Object(D.jsxs)(c.i,{style:{display:"flex"},children:[Object(D.jsx)("a",{style:{textDecoration:"none"},onClick:function(e){return e.preventDefault()},href:o.goToProductURI(e.article,e.name),children:Object(D.jsx)(c.d,{onClick:function(t){return o.goToProduct(e.article,e.name)},size:"m",stretched:!0,style:{marginRight:8},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})}),Object(D.jsx)(c.d,{onClick:function(t){return o.buyProduct(e.referalLink)},before:Object(D.jsx)(z.a,{}),size:"m",stretched:!0,mode:"commerce",children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]}),Object(D.jsx)(c.i,{children:Object(D.jsx)("a",{style:{textDecoration:"none"},onClick:function(e){return e.preventDefault()},href:o.goToSimilarURI(e.name,e.categoryId),children:Object(D.jsx)(c.d,{onClick:function(){return o.getSimilar(e.name,e.categoryId)},before:Object(D.jsx)(q.a,{}),size:"m",stretched:!0,mode:"secondary",children:"\u041f\u043e\u0445\u043e\u0436\u0435\u0435"})})})]},t)}))})}))}},{key:"goToPage",value:function(e){e=e>=0?e:0,this.setState({p:e}),this.search(this.state.q,e,this.state.tid,this.state.pid)}},{key:"onChange",value:function(e){this.setState({q:e.target.value})}},{key:"render",value:function(){var e=this;return Object(D.jsxs)(c.l,{children:[Object(D.jsx)(c.r,{value:this.state.q,onChange:this.onChange,onKeyUp:this.searchEnter}),Object(D.jsxs)(c.m,{mode:"primary",children:["\u0422\u043e\u0432\u0430\u0440\u043e\u0432 \u043d\u0430\u0439\u0434\u0435\u043d\u043e: ",this.state.productsFound]}),(!this.state.products||this.state.products.length<=0)&&Object(D.jsx)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:Object(D.jsx)(c.u,{size:"large",style:{margin:"20px 0"}})}),Object(D.jsx)(c.f,{size:this.props.isDesktop?"s":"l",children:this.state.products}),Object(D.jsxs)(c.i,{style:{margin:0,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:[Object(D.jsx)("a",{onClick:function(e){return e.preventDefault()},href:this.goToPageURI(0),children:Object(D.jsx)(c.d,{onClick:function(){return e.goToPage(0)},size:"m",style:{marginRight:8},children:"\u041d\u0430\u0447\u0430\u043b\u043e"})}),Object(D.jsx)("a",{onClick:function(e){return e.preventDefault()},href:this.goToPageURI(this.state.p-1),children:Object(D.jsx)(c.d,{onClick:function(){return e.goToPage(e.state.p-1)},size:"m",style:{marginRight:8},children:"\u041d\u0430\u0437\u0430\u0434"})}),Object(D.jsx)("a",{onClick:function(e){return e.preventDefault()},href:this.goToPageURI(this.state.p+1),children:Object(D.jsx)(c.d,{onClick:function(){return e.goToPage(e.state.p+1)},size:"m",children:"\u0414\u0430\u043b\u0435\u0435"})})]})]})}}]),r}(i.Component),U=function(e){Object(A.a)(r,e);var t=Object(I.a)(r);function r(e){var n;Object(C.a)(this,r),(n=t.call(this,e)).state={name:"",article:"",imgUrl:"",description:"",vendor:"",partnerName:"",referalLink:"",price:"",charge:"",isAvailable:"",categoryName:"",model:"",products:[]};var i=window.location.pathname.split("/");(i.length<1||"preview"!=i[1])&&(i=[]);var c="7409903";i.length>2&&(c=i[2]);var s="";return i.length>3&&(s=i[3]),n.getProduct(c,s),n}return Object(P.a)(r,[{key:"getProduct",value:function(e,t){var r=this;(function(e,t){return w.apply(this,arguments)})(e,t).then((function(e){var t,n;window.scrollTo(0,0),document.title="\u041a\u0443\u043f\u0438\u0442\u044c: "+e.name,window.history.pushState("",document.title,"/preview/"+e.article+"/"+(e.name?e.name.replaceAll(" / "," "):"")),null===(t=document.querySelector("link[rel='canonical']"))||void 0===t||t.setAttribute("href",window.location.protocol+"//"+window.location.host+"/preview/"+e.article+"/"+(e.name?e.name.replaceAll(" / "," "):"")),null===(n=document.querySelector('meta[name="description"]'))||void 0===n||n.setAttribute("content",e.description?e.description:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043b \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0442\u043e\u0432\u0430\u0440\u0430. \u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430, \u043d\u0430\u0436\u0430\u0432 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 (\u041a\u0443\u043f\u0438\u0442\u044c), \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f."),r.setState({name:e.name,article:e.article,imgUrl:e.imgUrl,description:e.description?e.description:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043b \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0442\u043e\u0432\u0430\u0440\u0430. \u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430, \u043d\u0430\u0436\u0430\u0432 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 (\u041a\u0443\u043f\u0438\u0442\u044c), \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f.",vendor:e.vendor,partnerName:e.partnerName,referalLink:e.referalLink,price:e.price,charge:e.charge,isAvailable:e.isAvailable,categoryName:e.categoryName,model:e.model}),r.search(e.name.replaceAll(" / "," "),0,e.categoryId,e.partnerId)}))}},{key:"goToSimilarURI",value:function(e,t){return window.location.protocol+"//"+window.location.host+"/products/"+(e?e.replaceAll("/"," "):"")+"?p=0&tid="+(t||"")+"&pid="}},{key:"goToProductURI",value:function(e,t){return window.location.protocol+"//"+window.location.host+"/preview/"+e+"/"+(t?t.replaceAll("/"," "):"")}},{key:"goToProduct",value:function(e,t){this.getProduct(e,t)}},{key:"getSimilar",value:function(e,t){window.history.pushState("","","/products/"+(e?e.replaceAll("/"," "):"")+"?p=0&tid="+(t||"")+"&pid="),this.props.openSearch()}},{key:"search",value:function(e,t,r,n){var i=this;v(e,t,r,n).then((function(e){return i.setState({products:e.products.slice(0,21).map((function(e,t){return Object(D.jsxs)(c.e,{mode:"shadow",children:[Object(D.jsx)("div",{style:{padding:1,alignItems:"center",justifyContent:"center",textAlign:"center"},children:Object(D.jsx)("img",{loading:"lazy",style:{maxWidth:i.props.isDesktop?210:"100%",width:i.props.isDesktop?210:"100%",maxHeight:i.props.isDesktop?210:"100%",height:i.props.isDesktop?210:"100%",objectFit:"scale-down",position:"relative"},src:e.imgUrl,alt:e.name})}),Object(D.jsxs)(c.i,{children:[Object(D.jsx)(c.n,{weight:"regular",style:{marginBottom:16},children:e.name}),e.isAvailable&&Object(D.jsxs)(c.B,{weight:"medium",style:{marginBottom:16,color:"#28a745!important"},children:[e.price,"\u20bd"]}),e.isAvailable&&e.charge&&"0"!=e.charge&&Object(D.jsxs)(c.B,{weight:"medium",style:{marginBottom:16,color:"#dc3545!important"},children:["\u0412\u0435\u0440\u043d\u0451\u043c: ",e.charge,"\u20bd"]}),!e.isAvailable&&Object(D.jsx)(c.B,{weight:"medium",style:{marginBottom:16},children:"\u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 :("}),e.model&&Object(D.jsxs)(c.B,{weight:"regular",children:["\u041c\u043e\u0434\u0435\u043b\u044c: ",e.model]}),e.vendor&&Object(D.jsxs)(c.B,{weight:"regular",children:["\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: ",e.vendor]})]}),Object(D.jsxs)(c.i,{style:{display:"flex"},children:[Object(D.jsx)("a",{style:{textDecoration:"none"},onClick:function(e){return e.preventDefault()},href:i.goToProductURI(e.article,e.name),children:Object(D.jsx)(c.d,{onClick:function(t){return i.goToProduct(e.article,e.name)},size:"m",stretched:!0,style:{marginRight:8},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})}),Object(D.jsx)(c.d,{onClick:function(t){return i.buyProduct(e.referalLink)},before:Object(D.jsx)(z.a,{}),size:"m",stretched:!0,mode:"commerce",children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]}),Object(D.jsx)(c.i,{children:Object(D.jsx)("a",{style:{textDecoration:"none"},onClick:function(e){return e.preventDefault()},href:i.goToSimilarURI(e.name,e.categoryId),children:Object(D.jsx)(c.d,{onClick:function(){return i.getSimilar(e.name,e.categoryId)},before:Object(D.jsx)(q.a,{}),size:"m",stretched:!0,mode:"secondary",children:"\u041f\u043e\u0445\u043e\u0436\u0435\u0435"})})})]},t)}))})}))}},{key:"buyProduct",value:function(e){var t;null===(t=window.open(e,"_blank"))||void 0===t||t.focus()}},{key:"render",value:function(){var e=this;return Object(D.jsxs)(c.l,{children:[Object(D.jsxs)(c.f,{size:this.props.isDesktop?"m":"l",children:[Object(D.jsxs)(c.e,{mode:"shadow",children:[Object(D.jsx)(c.i,{children:Object(D.jsx)("h1",{children:this.state.name})}),Object(D.jsx)("div",{style:{padding:1},children:Object(D.jsx)("img",{style:{maxWidth:this.props.isDesktop?"90%":"100%",width:this.props.isDesktop?"90%":"100%",objectFit:"scale-down",position:"relative"},src:this.state.imgUrl,alt:this.state.name})}),Object(D.jsx)(c.i,{children:Object(D.jsxs)(c.d,{onClick:function(t){return e.buyProduct(e.state.referalLink)},before:Object(D.jsx)(a.a,{}),size:"l",stretched:!0,mode:"commerce",children:["\u041a\u0443\u043f\u0438\u0442\u044c \u043d\u0430 ",this.state.partnerName]})})]}),Object(D.jsxs)(c.e,{mode:"shadow",children:[Object(D.jsx)(c.m,{mode:"secondary",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0442\u043e\u0432\u0430\u0440\u0435"}),Object(D.jsx)(c.t,{multiline:!0,children:Object(D.jsx)(c.o,{header:"\u0426\u0435\u043d\u0430",children:this.state.isAvailable?this.state.price+"\u20bd":"\u0422\u043e\u0432\u0430\u0440\u0430 \u043d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"})}),Object(D.jsx)(c.t,{multiline:!0,children:Object(D.jsx)(c.o,{header:"CashBack",children:this.state.isAvailable?this.state.charge+"\u20bd":"\u0422\u043e\u0432\u0430\u0440\u0430 \u043d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"})}),Object(D.jsx)(c.t,{multiline:!0,children:Object(D.jsx)(c.o,{header:"\u041c\u043e\u0434\u0435\u043b\u044c",children:this.state.model?this.state.model:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430"})}),Object(D.jsx)(c.t,{children:Object(D.jsx)(c.o,{header:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c",children:this.state.vendor?this.state.vendor:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"})}),Object(D.jsx)(c.t,{children:Object(D.jsx)(c.o,{header:"\u0410\u0440\u0442\u0438\u043a\u0443\u043b",children:this.state.article})}),Object(D.jsx)(c.t,{children:Object(D.jsx)(c.o,{header:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",children:this.state.categoryName})}),Object(D.jsx)(c.t,{children:Object(D.jsx)(c.o,{header:"\u041f\u0440\u043e\u0434\u0430\u0432\u0435\u0446",children:this.state.partnerName})})]})]}),Object(D.jsx)(c.f,{size:"l",children:Object(D.jsxs)(c.e,{mode:"shadow",children:[Object(D.jsx)(c.m,{mode:"secondary",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(D.jsx)(c.i,{children:Object(D.jsx)(c.B,{weight:"regular",dangerouslySetInnerHTML:{__html:this.state.description}})})]})}),Object(D.jsxs)(c.m,{mode:"primary",children:["\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u044b \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430 ",this.state.partnerName]}),Object(D.jsx)(c.f,{size:this.props.isDesktop?"s":"l",children:this.state.products})]})}}]),r}(i.Component),_=function(e){Object(A.a)(r,e);var t=Object(I.a)(r);function r(e){var n,i,c;return Object(C.a)(this,r),c=t.call(this,e),window.history.pushState("","Partner Shop - \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f","/about"),null===(n=document.querySelector("link[rel='canonical']"))||void 0===n||n.setAttribute("href",window.location.protocol+"//"+window.location.host+"/about"),document.title="Partner Shop - \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",null===(i=document.querySelector('meta[name="description"]'))||void 0===i||i.setAttribute("content","Partner Shop - \u043a\u0440\u0443\u043f\u043d\u044b\u0439 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0441\u043a\u0438\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d. \u0423 \u043d\u0430\u0441 \u0441\u0432\u044b\u0448\u0435 100 000 000 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0432 \u0431\u0430\u0437\u0435, \u041e\u0413\u0420\u041e\u041c\u041d\u041e\u0415 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0430\u0442\u043d\u0451\u0440\u043e\u0432 \u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439, \u0432\u044b\u0433\u043e\u0434\u043d\u044b\u0439 \u043a\u0435\u0448\u0431\u0435\u043a \u0438 \u0432\u043e\u0437\u043c\u043e\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u041a\u041e\u0421\u041c\u0418\u0427\u0415\u0421\u041a\u0418\u0415 \u0441\u043a\u0438\u0434\u043a\u0438. \u041c\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0412\u044b \u043d\u0430\u0439\u0434\u0451\u0442\u0435 \u0442\u043e, \u0447\u0442\u043e \u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0443 \u043d\u0430\u0441 :). \u041d\u0430\u0448\u0430 \u0446\u0435\u043b\u044c - \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u0438\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432, \u0431\u0435\u0437 \u043b\u0438\u0448\u043d\u0435\u0433\u043e. \u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0438 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u0430 - \u0437\u0430\u043b\u043e\u0433 \u0443\u0441\u043f\u0435\u0445\u0430!"),c}return Object(P.a)(r,[{key:"render",value:function(){return Object(D.jsxs)(c.l,{children:[Object(D.jsxs)(c.k,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:32},children:[Object(D.jsx)(c.c,{src:"/avatar.png",size:96}),Object(D.jsx)(c.C,{style:{marginBottom:8,marginTop:20},level:"2",weight:"medium",children:"Partner Shop"})]}),Object(D.jsxs)(c.l,{mode:"plain",children:[Object(D.jsx)(c.f,{size:"l",children:Object(D.jsxs)(c.e,{mode:"shadow",children:[Object(D.jsx)(c.m,{mode:"secondary",children:"\u041e \u043d\u0430\u0441"}),Object(D.jsxs)(c.i,{children:[Object(D.jsx)(c.B,{weight:"regular",children:"Partner Shop - \u043a\u0440\u0443\u043f\u043d\u044b\u0439 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0441\u043a\u0438\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d. \u0423 \u043d\u0430\u0441 \u0441\u0432\u044b\u0448\u0435 100 000 000 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0432 \u0431\u0430\u0437\u0435, \u041e\u0413\u0420\u041e\u041c\u041d\u041e\u0415 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0430\u0442\u043d\u0451\u0440\u043e\u0432 \u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439, \u0432\u044b\u0433\u043e\u0434\u043d\u044b\u0439 \u043a\u0435\u0448\u0431\u0435\u043a \u0438 \u0432\u043e\u0437\u043c\u043e\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u041a\u041e\u0421\u041c\u0418\u0427\u0415\u0421\u041a\u0418\u0415 \u0441\u043a\u0438\u0434\u043a\u0438. \u041c\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0412\u044b \u043d\u0430\u0439\u0434\u0451\u0442\u0435 \u0442\u043e, \u0447\u0442\u043e \u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0443 \u043d\u0430\u0441 :). \u041d\u0430\u0448\u0430 \u0446\u0435\u043b\u044c - \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u0438\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432, \u0431\u0435\u0437 \u043b\u0438\u0448\u043d\u0435\u0433\u043e. \u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0438 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u0430 - \u0437\u0430\u043b\u043e\u0433 \u0443\u0441\u043f\u0435\u0445\u0430!"}),Object(D.jsxs)(c.B,{weight:"regular",children:["\u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043d\u0430\u0448 ",Object(D.jsx)("a",{href:"https://vk.com/vkcombestshop",children:"\u043f\u0430\u0431\u043b\u0438\u043a \u0432 \u0412\u041a"}),", \u0442\u0430\u043c \u043c\u044b \u043f\u0443\u0431\u043b\u0438\u043a\u0443\u0435\u043c \u0432\u0441\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0430\u0448\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430.",Object(D.jsx)("br",{}),"\u0415\u0441\u0442\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u044b? \u041f\u0438\u0448\u0438 \u043d\u0430\u043c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432 \u0433\u0440\u0443\u043f\u043f\u0443 \u0412\u041a \u0438\u043b\u0438 \u043d\u0430 \u043d\u0430\u0448\u0443 \u043f\u043e\u0447\u0442\u0443 ",Object(D.jsx)("a",{href:"mailto:jj0hn8lack@yandex.ru",children:" jj0hn8lack@yandex.ru"}),"!"]}),Object(D.jsx)(c.B,{weight:"regular"})]})]})}),Object(D.jsx)(c.f,{size:"l",children:Object(D.jsxs)(c.e,{mode:"shadow",children:[Object(D.jsx)(c.m,{mode:"secondary",children:"Cookies"}),Object(D.jsx)(c.i,{children:Object(D.jsxs)(c.B,{weight:"regular",children:["\u041c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c cookie \u0434\u043b\u044f \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043d\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430, \u0430 \u0438\u043c\u0435\u043d\u043d\u043e \u043f\u043b\u0430\u0433\u0438\u043d\u044b ",Object(D.jsx)("a",{href:"https://www.google.ru/intl/ru/policies/privacy/",children:"Google Analytics"})," ",Object(D.jsx)("a",{href:"https://yandex.ru/legal/confidential/",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0430"}),". \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043d\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441 - \u0412\u044b \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u0442\u0435 \u043d\u0430\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c cookie \u0434\u043b\u044f \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u0430."]})})]})}),Object(D.jsx)(c.f,{size:"l",children:Object(D.jsxs)(c.e,{mode:"shadow",children:[Object(D.jsx)(c.m,{mode:"secondary",children:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 CashBack?"}),Object(D.jsx)(c.i,{children:Object(D.jsx)(c.B,{weight:"regular",children:"\u042d\u0442\u043e \u0431\u0435\u0437\u0443\u043c\u043d\u043e \u043f\u0440\u0438\u044f\u0442\u043d\u044b\u0439 \u0431\u043e\u043d\u0443\u0441, \u043f\u043e\u0447\u0442\u0438 \u043a\u0430\u043a \u0441\u043a\u0438\u0434\u043a\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u0440\u0443\u0447\u0435! \u041f\u043e\u043a\u0443\u043f\u0430\u044f \u0422\u041e\u041b\u042c\u041a\u041e \u0427\u0415\u0420\u0415\u0417 \u041d\u0410\u0428 \u0421\u0415\u0420\u0412\u0418\u0421, \u0432\u0430\u043c \u0432\u0440\u043d\u0451\u0442\u0441\u044f \u0447\u0430\u0441\u0442\u044c \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u0442\u043e\u0432\u0430\u0440\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0443 \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043f\u0440\u043e \u0441\u0443\u043c\u043c\u0443 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0443 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0442\u043e\u0432\u0430\u0440\u0430. \u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u043b\u0430\u0442\u044b \u0442\u043e\u0432\u0430\u0440\u0430 \u0438 \u0435\u0433\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438."})})]})}),Object(D.jsx)(c.f,{size:"l",children:Object(D.jsxs)(c.e,{mode:"shadow",children:[Object(D.jsx)(c.m,{mode:"secondary",children:"\u041c\u044b \u043f\u0440\u043e\u0434\u0430\u0451\u043c \u0442\u043e\u0432\u0430\u0440\u044b?"}),Object(D.jsx)(c.i,{children:Object(D.jsx)(c.B,{weight:"regular",children:"\u041d\u0435\u0442, \u043c\u044b \u043d\u0435 \u043f\u0440\u043e\u0434\u0430\u0451\u043c \u0442\u043e\u0432\u0430\u0440\u044b, \u043c\u044b \u043b\u0438\u0448\u044c \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u0432\u0430\u0441 \u0434\u043b\u044f \u043f\u043e\u043a\u0443\u043f\u043a\u0438 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u043d\u0430 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0430\u0439\u0442\u0430\u0445 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u043e\u0432. \u0412\u0430\u043c \u0443\u0434\u043e\u0431\u043d\u0435\u0435 \u0438\u0441\u043a\u0430\u0442\u044c \u0442\u043e\u0432\u0430\u0440\u044b \u0441\u0440\u0435\u0434\u0438 \u043c\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u041f\u0420\u041e\u0412\u0415\u0420\u0415\u041d\u041d\u042b\u0425 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u043e\u0432-\u043f\u0430\u0440\u0442\u043d\u0451\u0440\u043e\u0432, \u0430 \u0435\u0449\u0451 \u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u0447\u0430\u0441\u0442\u0438 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u0442\u043e\u0432\u0430\u0440\u0430. \u0423\u0434\u043e\u0431\u043d\u043e, \u043f\u0440\u0430\u0432\u0434\u0430?"})})]})})]})]})}}]),r}(i.Component),N=Object(c.H)((function(e){var t=e.viewWidth,r=Object(c.G)(),d=function(){var e=window.location.pathname;return 1==e.indexOf("partners")?"partners":1==e.indexOf("products")?"products":1==e.indexOf("categories")?"categories":1==e.indexOf("preview")?"productView":1==e.indexOf("about")?"profile":"products"}(),u=i.useState(d),h=Object(n.a)(u,2),j=h[0],p=h[1],b=function(e){return p(e.currentTarget.dataset.story)},m=t>=c.F.SMALL_TABLET,x=r!==c.D;return Object(D.jsxs)(c.w,{header:x&&Object(D.jsx)(c.q,{separator:!1}),style:{justifyContent:"center"},children:[m&&Object(D.jsx)(c.v,{fixed:!0,width:"280px",maxWidth:"280px",children:Object(D.jsxs)(c.p,{children:[x&&Object(D.jsx)(c.q,{}),Object(D.jsxs)(c.l,{children:[Object(D.jsx)(c.g,{disabled:"partners"===j,style:"partners"===j?{backgroundColor:"var(--button_secondary_background)",borderRadius:8}:{},"data-story":"partners",onClick:b,before:Object(D.jsx)(s.a,{}),children:"\u041f\u0430\u0440\u0442\u043d\u0451\u0440\u044b"}),Object(D.jsx)(c.g,{disabled:"categories"===j,style:"categories"===j?{backgroundColor:"var(--button_secondary_background)",borderRadius:8}:{},"data-story":"categories",onClick:b,before:Object(D.jsx)(o.a,{}),children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(D.jsx)(c.g,{disabled:"products"===j,style:"products"===j?{backgroundColor:"var(--button_secondary_background)",borderRadius:8}:{},"data-story":"products",onClick:b,before:Object(D.jsx)(a.a,{}),children:"\u0422\u043e\u0432\u0430\u0440\u044b"}),Object(D.jsx)(c.g,{disabled:"profile"===j,style:"profile"===j?{backgroundColor:"var(--button_secondary_background)",borderRadius:8}:{},"data-story":"profile",onClick:b,before:Object(D.jsx)(l.a,{}),children:"\u041e \u043d\u0430\u0441"})]})]})}),Object(D.jsx)(c.v,{animate:!m,spaced:m,width:m?"800px":"100%",maxWidth:m?"800px":"100%",children:Object(D.jsxs)(c.j,{activeStory:j,tabbar:!m&&Object(D.jsxs)(c.z,{children:[Object(D.jsx)(c.A,{onClick:b,selected:"partners"===j,"data-story":"partners",text:"\u041f\u0430\u0440\u0442\u043d\u0451\u0440\u044b",children:Object(D.jsx)(s.a,{})}),Object(D.jsx)(c.A,{onClick:b,selected:"categories"===j,"data-story":"categories",text:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",children:Object(D.jsx)(o.a,{})}),Object(D.jsx)(c.A,{onClick:b,selected:"products"===j,"data-story":"products",text:"\u0422\u043e\u0432\u0430\u0440\u044b",children:Object(D.jsx)(a.a,{})}),Object(D.jsx)(c.A,{onClick:b,selected:"profile"===j,"data-story":"profile",text:"\u041e \u043d\u0430\u0441",children:Object(D.jsx)(l.a,{})})]}),children:[Object(D.jsx)(c.E,{id:"partners",activePanel:"partners",children:Object(D.jsxs)(c.p,{id:"partners",children:[Object(D.jsx)(c.q,{children:"\u041f\u0430\u0440\u0442\u043d\u0451\u0440\u044b"}),Object(D.jsx)(B,{isDesktop:m})]})}),Object(D.jsx)(c.E,{id:"categories",activePanel:"categories",children:Object(D.jsxs)(c.p,{id:"categories",children:[Object(D.jsx)(c.q,{children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(D.jsx)(T,{isDesktop:m})]})}),Object(D.jsx)(c.E,{id:"products",activePanel:"products",children:Object(D.jsxs)(c.p,{id:"products",children:[Object(D.jsx)(c.q,{children:"\u0422\u043e\u0432\u0430\u0440\u044b"}),Object(D.jsx)(R,{isDesktop:m,openProductView:function(){return p("productView")}})]})}),Object(D.jsx)(c.E,{id:"profile",activePanel:"profile",children:Object(D.jsxs)(c.p,{id:"profile",children:[Object(D.jsx)(c.q,{children:"\u041e \u043d\u0430\u0441"}),Object(D.jsx)(_,{})]})}),Object(D.jsx)(c.E,{id:"productView",activePanel:"productView",children:Object(D.jsxs)(c.p,{id:"productView",children:[Object(D.jsx)(c.q,{children:"\u041a\u0443\u043f\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440"}),Object(D.jsx)(U,{openSearch:function(){return p("products")},isDesktop:m})]})})]})})]})}),{viewWidth:!0});function E(){return Object(D.jsx)(c.h,{children:Object(D.jsx)(c.a,{children:Object(D.jsx)(c.b,{children:Object(D.jsx)(N,{viewWidth:!0})})})})}u.a.render(Object(D.jsx)(E,{}),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.0a115510.chunk.js.map