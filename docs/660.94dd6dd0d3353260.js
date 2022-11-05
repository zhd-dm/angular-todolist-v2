"use strict";(self.webpackChunkangular_todolist_v2=self.webpackChunkangular_todolist_v2||[]).push([[660],{6660:(at,b,n)=>{n.r(b),n.d(b,{CategoryModule:()=>ot});var _=n(6895),r=n(4006),p=n(1635),t=n(4650),T=n(6308),l=n(7155),x=n(1135),Y=n(7579),u=n(5698),E=n(2722),g=n(7525),A=n(3985);const Z={id:"ID",categoryName:"Category name",color:"Color",settings:"Settings",empty:"No categories avaliable..."},R={createNewCategory:"Create new category",categoryName:"Category name",color:"Color",create:"Create",goToCategoriesList:"Go to categories list"},D={delete:"Delete",sure:"Are you sure?"},N={editCategory:"Edit category",categoryName:"Category name",color:"Color",update:"Update",goToCategoriesList:"Go to categories list"};var m=n(5412),C=n(4072),h=n(5039),v=n(5328),S=n(8273),f=n(9549),M=n(4144),y=n(4083);let O=(()=>{class o{constructor(e,a,s,c,d,L){this.router=e,this.dialogRef=a,this.categoryService=s,this.loadingService=c,this.notificationService=d,this.eventBusService=L,this.ROUTER_LINKS=A.Td,this.TEMPLATE_TEXT=R,this.form=new r.cw({name:new r.NI(null,[r.kI.required,r.kI.minLength(5)])})}createCategory(){this.loadingService.startLoad(),this.categoryService.createCategory(this.form.value).pipe((0,u.q)(1)).subscribe(e=>{this.loadingService.stopLoad(),this.notificationService.openSnackBar(e.message||""),e.status&&(this.goTo(this.ROUTER_LINKS.categoriesList),this.eventBusService.push({type:g.t.UPDATE_CATEGORY_LIST}))}),this.dialogRef.close()}goTo(e){this.router.navigate([e])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.F0),t.Y36(m.so),t.Y36(C.H),t.Y36(h.b),t.Y36(v.g),t.Y36(S.Y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["create-category-modal"]],decls:8,vars:6,consts:[[1,"form-group","form-group__modal","flex-column",3,"formGroup"],[1,"mat-title"],["color","accent","appearance","outline"],["type","text","matInput","","formControlName","name",3,"placeholder"],["type","submit",3,"disabled","label","buttonClick"]],template:function(e,a){1&e&&(t.TgZ(0,"form",0)(1,"div",1),t._uU(2),t.qZA(),t.TgZ(3,"mat-form-field",2)(4,"mat-label"),t._uU(5),t.qZA(),t._UZ(6,"input",3),t.qZA(),t.TgZ(7,"ui-button",4),t.NdJ("buttonClick",function(){return a.createCategory()}),t.qZA()()),2&e&&(t.Q6J("formGroup",a.form),t.xp6(2),t.Oqu(a.TEMPLATE_TEXT.createNewCategory),t.xp6(3),t.Oqu(a.TEMPLATE_TEXT.categoryName),t.xp6(1),t.Q6J("placeholder",a.TEMPLATE_TEXT.categoryName),t.xp6(1),t.Q6J("disabled",a.form.invalid)("label",a.TEMPLATE_TEXT.create))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,f.KE,f.hX,M.Nt,y.L],encapsulation:2,changeDetection:0}),o})(),P=(()=>{class o{constructor(e,a,s,c,d){this.dialogRef=e,this.data=a,this.categoryService=s,this.loadingService=c,this.notificationService=d,this.TEMPLATE_TEXT=D}deleteCategory(){this.loadingService.startLoad(),this.categoryService.deleteCategory(this.data.id).pipe((0,u.q)(1)).subscribe({next:e=>{this.dialogRef.close(),this.notificationService.openSnackBar(e.message||"")},error:e=>{this.dialogRef.close(),console.error(e)}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.so),t.Y36(m.WI),t.Y36(C.H),t.Y36(h.b),t.Y36(v.g))},o.\u0275cmp=t.Xpm({type:o,selectors:[["delete-category-modal"]],decls:4,vars:2,consts:[[1,"mat-title"],["styleClasses","btn-warn",3,"label","buttonClick"]],template:function(e,a){1&e&&(t.TgZ(0,"div")(1,"div",0),t._uU(2),t.qZA(),t.TgZ(3,"ui-button",1),t.NdJ("buttonClick",function(){return a.deleteCategory()}),t.qZA()()),2&e&&(t.xp6(2),t.Oqu(a.TEMPLATE_TEXT.sure),t.xp6(1),t.Q6J("label",a.TEMPLATE_TEXT.delete))},dependencies:[y.L],encapsulation:2,changeDetection:0}),o})(),w=(()=>{class o{constructor(e,a,s,c,d,L){this.dialogRef=e,this.data=a,this.router=s,this.categoryService=c,this.loadingService=d,this.notificationService=L,this.ROUTER_LINKS=A.Td,this.TEMPLATE_TEXT=N,this.form=(o=>new r.cw({name:new r.NI({value:this.data?.name??null,disabled:!0})}))()}updateCategory(){const e={...this.data,...this.form.value};this.loadingService.startLoad(),this.categoryService.updateCategory(e).pipe((0,u.q)(1)).subscribe({next:a=>{this.dialogRef.close(),this.notificationService.openSnackBar(a.message||"")},error:a=>{this.dialogRef.close(),console.error(a)}}),this.dialogRef.close()}goTo(e){this.router.navigate([e])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.so),t.Y36(m.WI),t.Y36(p.F0),t.Y36(C.H),t.Y36(h.b),t.Y36(v.g))},o.\u0275cmp=t.Xpm({type:o,selectors:[["edit-category-modal"]],decls:8,vars:6,consts:[[1,"form-group","form-group__modal","flex-column",3,"formGroup"],[1,"mat-title"],["color","accent","appearance","outline"],["type","text","matInput","","formControlName","name",3,"placeholder"],["type","submit",3,"disabled","label","buttonClick"]],template:function(e,a){1&e&&(t.TgZ(0,"form",0)(1,"div",1),t._uU(2),t.qZA(),t.TgZ(3,"mat-form-field",2)(4,"mat-label"),t._uU(5),t.qZA(),t._UZ(6,"input",3),t.qZA(),t.TgZ(7,"ui-button",4),t.NdJ("buttonClick",function(){return a.updateCategory()}),t.qZA()()),2&e&&(t.Q6J("formGroup",a.form),t.xp6(2),t.Oqu(a.TEMPLATE_TEXT.editCategory),t.xp6(3),t.Oqu(a.TEMPLATE_TEXT.categoryName),t.xp6(1),t.Q6J("placeholder",a.TEMPLATE_TEXT.categoryName),t.xp6(1),t.Q6J("disabled",a.form.invalid)("label",a.TEMPLATE_TEXT.update))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,f.KE,f.hX,M.Nt,y.L],encapsulation:2,changeDetection:0}),o})();var J=n(3899);function B(o,i){if(1&o&&(t.TgZ(0,"th",12),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(e.TEMPLATE_TEXT.id)}}function G(o,i){if(1&o&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.id," ")}}function I(o,i){if(1&o&&(t.TgZ(0,"th",12),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(e.TEMPLATE_TEXT.categoryName)}}function Q(o,i){if(1&o&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function $(o,i){if(1&o&&(t.TgZ(0,"th",12),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(e.TEMPLATE_TEXT.color)}}function q(o,i){if(1&o&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.color," ")}}function F(o,i){if(1&o&&(t.TgZ(0,"th",14),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(e.TEMPLATE_TEXT.settings)}}function H(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"td",13)(1,"ui-button",15),t.NdJ("buttonClick",function(){const c=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.deleteCategory(c.id))}),t.qZA(),t.TgZ(2,"ui-button",16),t.NdJ("buttonClick",function(){const c=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.editCategory(c))}),t.qZA()()}}function j(o,i){1&o&&t._UZ(0,"tr",17)}function k(o,i){1&o&&t._UZ(0,"tr",18)}function K(o,i){if(1&o&&(t.TgZ(0,"tr",19)(1,"td",20),t._uU(2),t.qZA()()),2&o){const e=t.oxw();t.xp6(2),t.Oqu(e.TEMPLATE_TEXT.empty)}}const z=function(){return[]};let W=(()=>{class o{constructor(e,a,s,c,d){this.categoryService=e,this.loadingService=a,this.eventBusService=s,this.authService=c,this.dialog=d,this.TEMPLATE_TEXT=Z,this.data$=new x.X(new l.by),this.displayedColumns=["id","name","color","settings"],this.sort=new T.YE,this.destroy$=new Y.x}ngOnInit(){this.loadingService.startLoad(),this.getCategories(),this.eventBusSubscribe(),this.authService.currentUrl$.next(g.t.CATEGORY_URL)}ngOnDestroy(){this.destroy$.next(!1),this.destroy$.complete()}deleteCategory(e){this.dialog.open(P,{data:e}).afterClosed().pipe((0,u.q)(1)).subscribe(()=>this.getCategories())}editCategory(e){this.dialog.open(w,{data:e}).afterClosed().pipe((0,u.q)(1)).subscribe(()=>this.getCategories())}getCategories(){this.categoryService.getCategories().subscribe({next:e=>{this.data$.next(new l.by(e)),this.data$.value.sort=this.sort,this.loadingService.stopLoad()},error:e=>console.log(e)})}eventBusSubscribe(){this.eventBusService.on(g.t.CATEGORY_URL).pipe((0,E.R)(this.destroy$)).subscribe(()=>{this.dialog.open(O)}),this.eventBusService.on(g.t.UPDATE_CATEGORY_LIST).pipe((0,E.R)(this.destroy$)).subscribe(()=>{this.getCategories()}),this.eventBusService.on(g.t.LOGOUT).pipe((0,E.R)(this.destroy$)).subscribe(()=>{this.data$.next(new l.by)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(C.H),t.Y36(h.b),t.Y36(S.Y),t.Y36(J.e),t.Y36(m.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["categories-list"]],viewQuery:function(e,a){if(1&e&&t.Gf(T.YE,5),2&e){let s;t.iGM(s=t.CRH())&&(a.sort=s.first)}},decls:18,vars:7,consts:[[1,"justify-center"],["mat-table","","matSort","",1,"mat-elevation-z8","table-list",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","color"],["matColumnDef","settings"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["typeDir","mat-icon-button","styleClasses","btn-icon-warn","icon","delete icon",3,"buttonClick"],["typeDir","mat-icon-button","styleClasses","btn-icon-accent","icon","edit icon",3,"buttonClick"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","6",1,"mat-cell"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"table",1),t.ALo(2,"async"),t.ynx(3,2),t.YNc(4,B,2,1,"th",3),t.YNc(5,G,2,1,"td",4),t.BQk(),t.ynx(6,5),t.YNc(7,I,2,1,"th",3),t.YNc(8,Q,2,1,"td",4),t.BQk(),t.ynx(9,6),t.YNc(10,$,2,1,"th",3),t.YNc(11,q,2,1,"td",4),t.BQk(),t.ynx(12,7),t.YNc(13,F,2,1,"th",8),t.YNc(14,H,3,0,"td",4),t.BQk(),t.YNc(15,j,1,0,"tr",9),t.YNc(16,k,1,0,"tr",10),t.YNc(17,K,3,1,"tr",11),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("dataSource",t.lcZ(2,4,a.data$)||t.DdM(6,z)),t.xp6(14),t.Q6J("matHeaderRowDef",a.displayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns))},dependencies:[l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,l.Ee,T.YE,T.nU,y.L,_.Ov],encapsulation:2,changeDetection:0}),o})();const V=[{path:"",component:(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["categories-page"]],decls:1,vars:0,template:function(e,a){1&e&&t._UZ(0,"categories-list")},dependencies:[W],encapsulation:2,changeDetection:0}),o})()}];let tt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(V),p.Bz]}),o})();var et=n(5566);let ot=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[C.H],imports:[_.ez,r.UX,tt,et.m]}),o})()}}]);