"use strict";(self.webpackChunkangular_todolist_v2=self.webpackChunkangular_todolist_v2||[]).push([[592],{4072:(_,c,t)=>{t.d(c,{H:()=>i});var e=t(3121),o=t(4650),a=t(4761);let i=(()=>{class n{constructor(r){this.apiService=r}getCategories(){return this.apiService.sendRequest(e.V7.get,`${e.B4}${e.nn.get}`)}createCategory(r){return this.apiService.sendRequest(e.V7.post,`${e.B4}${e.nn.create}`,r)}updateCategory(r){return this.apiService.sendRequest(e.V7.put,`${e.B4}${e.nn.update}`,r)}deleteCategory(r){return this.apiService.sendRequest(e.V7.delete,`${e.B4}${e.nn.delete}`,r)}}return n.\u0275fac=function(r){return new(r||n)(o.LFG(a.s))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac}),n})()},6146:(_,c,t)=>{t.d(c,{Z:()=>a});var e=t(4650),o=t(1572);let a=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["ui-spinner"]],decls:3,vars:0,consts:[[1,"spinner-container","justify-center","align-center","wh-100"],[1,"spinner__background","wh-100"]],template:function(s,r){1&s&&(e.TgZ(0,"div",0),e._UZ(1,"div",1)(2,"mat-spinner"),e.qZA())},dependencies:[o.Ou],styles:["[_nghost-%COMP%]   .spinner-container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:1000}[_nghost-%COMP%]   .spinner-container[_ngcontent-%COMP%]   .spinner__background[_ngcontent-%COMP%]{position:absolute;background-color:var(--color-black);opacity:.3}"],changeDetection:0}),i})()},8885:(_,c,t)=>{t.d(c,{T:()=>o});var e=t(4650);let o=(()=>{class a{constructor(n,s){this.templateRef=n,this.viewContainer=s}set loader(n){n?this.viewContainer.createEmbeddedView(this.templateRef):n||this.viewContainer.clear()}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(e.Rgc),e.Y36(e.s_b))},a.\u0275dir=e.lG2({type:a,selectors:[["","loader",""]],inputs:{loader:"loader"}}),a})()}}]);