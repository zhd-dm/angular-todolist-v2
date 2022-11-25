"use strict";(self.webpackChunkangular_todolist_v2=self.webpackChunkangular_todolist_v2||[]).push([[660],{6660:(rt,A,n)=>{n.r(A),n.d(A,{CategoryModule:()=>nt});var E=n(6895),r=n(4006),T=n(1635),t=n(4650),u=n(5039),Z=n(8885),Y=n(6146),h=n(6308),l=n(7155),x=n(1135),R=n(7579),g=n(5698),v=n(2722),C=n(7525),_=n(3985);const D={id:"ID",categoryName:"Category name",color:"Color",settings:"Settings",empty:"No categories avaliable..."},N={createNewCategory:"Create new category",categoryName:"Category name",color:"Color",create:"Create",goToCategoriesList:"Go to categories list"},X={delete:"Delete",sure:"Are you sure?"},O={editCategory:"Edit category",categoryName:"Category name",color:"Color",update:"Update",goToCategoriesList:"Go to categories list"};var m=n(5412),p=n(4072),L=n(5328),S=n(8273),f=n(9549),M=n(4144),y=n(4083);let w=(()=>{class o{constructor(e,i,s,c,d,b){this.router=e,this.dialogRef=i,this.categoryService=s,this.loadingService=c,this.notificationService=d,this.eventBusService=b,this.ROUTER_LINKS=_.Td,this.TEMPLATE_TEXT=N,this.form=new r.cw({name:new r.NI(null,[r.kI.required,r.kI.minLength(5)])})}createCategory(){this.loadingService.startLoad(),this.categoryService.createCategory(this.form.value).pipe((0,g.q)(1)).subscribe(e=>{this.notificationService.openSnackBar(e.message||""),e.status&&(this.goTo(this.ROUTER_LINKS.categoriesList),this.eventBusService.push({type:C.t.UPDATE_CATEGORY_LIST}))}),this.dialogRef.close()}goTo(e){this.router.navigate([e])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T.F0),t.Y36(m.so),t.Y36(p.H),t.Y36(u.b),t.Y36(L.g),t.Y36(S.Y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["create-category-modal"]],decls:8,vars:6,consts:[[1,"form-group","form-group__modal","flex-column",3,"formGroup"],[1,"mat-title"],["color","accent","appearance","outline"],["type","text","matInput","","formControlName","name",3,"placeholder"],["type","submit",3,"disabled","label","buttonClick"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0)(1,"div",1),t._uU(2),t.qZA(),t.TgZ(3,"mat-form-field",2)(4,"mat-label"),t._uU(5),t.qZA(),t._UZ(6,"input",3),t.qZA(),t.TgZ(7,"ui-button",4),t.NdJ("buttonClick",function(){return i.createCategory()}),t.qZA()()),2&e&&(t.Q6J("formGroup",i.form),t.xp6(2),t.Oqu(i.TEMPLATE_TEXT.createNewCategory),t.xp6(3),t.Oqu(i.TEMPLATE_TEXT.categoryName),t.xp6(1),t.Q6J("placeholder",i.TEMPLATE_TEXT.categoryName),t.xp6(1),t.Q6J("disabled",i.form.invalid)("label",i.TEMPLATE_TEXT.create))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,f.KE,f.hX,M.Nt,y.L],encapsulation:2,changeDetection:0}),o})(),J=(()=>{class o{constructor(e,i,s,c,d){this.dialogRef=e,this.data=i,this.categoryService=s,this.loadingService=c,this.notificationService=d,this.TEMPLATE_TEXT=X}deleteCategory(){this.loadingService.startLoad(),this.categoryService.deleteCategory(this.data.id).pipe((0,g.q)(1)).subscribe({next:e=>{this.dialogRef.close(),this.notificationService.openSnackBar(e.message||"")},error:e=>{this.dialogRef.close(),console.error(e)}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.so),t.Y36(m.WI),t.Y36(p.H),t.Y36(u.b),t.Y36(L.g))},o.\u0275cmp=t.Xpm({type:o,selectors:[["delete-category-modal"]],decls:4,vars:2,consts:[[1,"mat-title"],["styleClasses","btn-warn",3,"label","buttonClick"]],template:function(e,i){1&e&&(t.TgZ(0,"div")(1,"div",0),t._uU(2),t.qZA(),t.TgZ(3,"ui-button",1),t.NdJ("buttonClick",function(){return i.deleteCategory()}),t.qZA()()),2&e&&(t.xp6(2),t.Oqu(i.TEMPLATE_TEXT.sure),t.xp6(1),t.Q6J("label",i.TEMPLATE_TEXT.delete))},dependencies:[y.L],encapsulation:2,changeDetection:0}),o})(),B=(()=>{class o{constructor(e,i,s,c,d,b){this.dialogRef=e,this.data=i,this.router=s,this.categoryService=c,this.loadingService=d,this.notificationService=b,this.ROUTER_LINKS=_.Td,this.TEMPLATE_TEXT=O,this.form=(o=>new r.cw({name:new r.NI({value:this.data?.name??null,disabled:!0})}))()}updateCategory(){const e={...this.data,...this.form.value};this.loadingService.startLoad(),this.categoryService.updateCategory(e).pipe((0,g.q)(1)).subscribe({next:i=>{this.dialogRef.close(),this.notificationService.openSnackBar(i.message||"")},error:i=>{this.dialogRef.close(),console.error(i)}}),this.dialogRef.close()}goTo(e){this.router.navigate([e])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.so),t.Y36(m.WI),t.Y36(T.F0),t.Y36(p.H),t.Y36(u.b),t.Y36(L.g))},o.\u0275cmp=t.Xpm({type:o,selectors:[["edit-category-modal"]],decls:8,vars:6,consts:[[1,"form-group","form-group__modal","flex-column",3,"formGroup"],[1,"mat-title"],["color","accent","appearance","outline"],["type","text","matInput","","formControlName","name",3,"placeholder"],["type","submit",3,"disabled","label","buttonClick"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0)(1,"div",1),t._uU(2),t.qZA(),t.TgZ(3,"mat-form-field",2)(4,"mat-label"),t._uU(5),t.qZA(),t._UZ(6,"input",3),t.qZA(),t.TgZ(7,"ui-button",4),t.NdJ("buttonClick",function(){return i.updateCategory()}),t.qZA()()),2&e&&(t.Q6J("formGroup",i.form),t.xp6(2),t.Oqu(i.TEMPLATE_TEXT.editCategory),t.xp6(3),t.Oqu(i.TEMPLATE_TEXT.categoryName),t.xp6(1),t.Q6J("placeholder",i.TEMPLATE_TEXT.categoryName),t.xp6(1),t.Q6J("disabled",i.form.invalid)("label",i.TEMPLATE_TEXT.update))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,f.KE,f.hX,M.Nt,y.L],encapsulation:2,changeDetection:0}),o})();var G=n(629);function $(o,a){if(1&o&&(t.TgZ(0,"th",12),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(e.TEMPLATE_TEXT.id)}}function I(o,a){if(1&o&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.id," ")}}function Q(o,a){if(1&o&&(t.TgZ(0,"th",12),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(e.TEMPLATE_TEXT.categoryName)}}function F(o,a){if(1&o&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function H(o,a){if(1&o&&(t.TgZ(0,"th",12),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(e.TEMPLATE_TEXT.color)}}function q(o,a){if(1&o&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.color," ")}}function j(o,a){if(1&o&&(t.TgZ(0,"th",14),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(e.TEMPLATE_TEXT.settings)}}function k(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"td",13)(1,"ui-button",15),t.NdJ("buttonClick",function(){const c=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.deleteCategory(c.id))}),t.qZA(),t.TgZ(2,"ui-button",16),t.NdJ("buttonClick",function(){const c=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.editCategory(c))}),t.qZA()()}}function K(o,a){1&o&&t._UZ(0,"tr",17)}function z(o,a){1&o&&t._UZ(0,"tr",18)}function W(o,a){if(1&o&&(t.TgZ(0,"tr",19)(1,"td",20),t._uU(2),t.qZA()()),2&o){const e=t.oxw();t.xp6(2),t.Oqu(e.TEMPLATE_TEXT.empty)}}const V=function(){return[]};let tt=(()=>{class o{constructor(e,i,s,c,d){this.categoryService=e,this.loadingService=i,this.eventBusService=s,this.authService=c,this.dialog=d,this.TEMPLATE_TEXT=D,this.data$=new x.X(new l.by),this.displayedColumns=["id","name","color","settings"],this.sort=new h.YE,this.destroy$=new R.x}ngOnInit(){this.getCategories(),this.eventBusSubscribe(),this.authService.currentUrl$.next(C.t.CATEGORY_URL)}ngOnDestroy(){this.destroy$.next(!1),this.destroy$.complete()}deleteCategory(e){this.dialog.open(J,{data:e}).afterClosed().pipe((0,g.q)(1)).subscribe(()=>this.getCategories())}editCategory(e){this.dialog.open(B,{data:e}).afterClosed().pipe((0,g.q)(1)).subscribe(()=>this.getCategories())}getCategories(){this.loadingService.startLoad(),this.categoryService.getCategories().subscribe({next:e=>{this.data$.next(new l.by(e)),this.data$.value.sort=this.sort,this.loadingService.stopLoad()},error:e=>{console.log(e),this.loadingService.stopLoad()}})}eventBusSubscribe(){this.eventBusService.on(C.t.CATEGORY_URL).pipe((0,v.R)(this.destroy$)).subscribe(()=>{this.dialog.open(w)}),this.eventBusService.on(C.t.UPDATE_CATEGORY_LIST).pipe((0,v.R)(this.destroy$)).subscribe(()=>{this.getCategories()}),this.eventBusService.on(C.t.LOGOUT).pipe((0,v.R)(this.destroy$)).subscribe(()=>{this.data$.next(new l.by)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.H),t.Y36(u.b),t.Y36(S.Y),t.Y36(G.e),t.Y36(m.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["categories-list"]],viewQuery:function(e,i){if(1&e&&t.Gf(h.YE,5),2&e){let s;t.iGM(s=t.CRH())&&(i.sort=s.first)}},decls:18,vars:7,consts:[[1,"justify-center"],["mat-table","","matSort","",1,"mat-elevation-z8","table-list",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","color"],["matColumnDef","settings"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["typeDir","mat-icon-button","styleClasses","btn-icon-warn","icon","delete icon",3,"buttonClick"],["typeDir","mat-icon-button","styleClasses","btn-icon-accent","icon","edit icon",3,"buttonClick"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","6",1,"mat-cell"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"table",1),t.ALo(2,"async"),t.ynx(3,2),t.YNc(4,$,2,1,"th",3),t.YNc(5,I,2,1,"td",4),t.BQk(),t.ynx(6,5),t.YNc(7,Q,2,1,"th",3),t.YNc(8,F,2,1,"td",4),t.BQk(),t.ynx(9,6),t.YNc(10,H,2,1,"th",3),t.YNc(11,q,2,1,"td",4),t.BQk(),t.ynx(12,7),t.YNc(13,j,2,1,"th",8),t.YNc(14,k,3,0,"td",4),t.BQk(),t.YNc(15,K,1,0,"tr",9),t.YNc(16,z,1,0,"tr",10),t.YNc(17,W,3,1,"tr",11),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("dataSource",t.lcZ(2,4,i.data$)||t.DdM(6,V)),t.xp6(14),t.Q6J("matHeaderRowDef",i.displayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns))},dependencies:[l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,l.Ee,h.YE,h.nU,y.L,E.Ov],encapsulation:2,changeDetection:0}),o})();function et(o,a){1&o&&t._UZ(0,"ui-spinner")}const ot=[{path:"",component:(()=>{class o{constructor(e){this.loadingService=e,this.loading$=this.loadingService.loading$}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.b))},o.\u0275cmp=t.Xpm({type:o,selectors:[["categories-page"]],decls:3,vars:3,consts:[[4,"loader"]],template:function(e,i){1&e&&(t._UZ(0,"categories-list"),t.YNc(1,et,1,0,"ui-spinner",0),t.ALo(2,"async")),2&e&&(t.xp6(1),t.Q6J("loader",t.lcZ(2,1,i.loading$)||!1))},dependencies:[Z.T,Y.Z,tt,E.Ov],styles:["[_nghost-%COMP%]{position:relative}"],changeDetection:0}),o})()}];let it=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[T.Bz.forChild(ot),T.Bz]}),o})();var at=n(5566);let nt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[p.H],imports:[E.ez,r.UX,it,at.m]}),o})()}}]);