(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner-inner></app-banner-inner>\n<div class=\"container padded\" fxLayout=\"column\" fxLayout.sm=\"column\" fxLayout.xs=\"column\"\n    fxLayoutAlign.gt-md=\"space-around center\" fxLayoutGap=\"30px\">\n\n  <div fxFlex>\n    <h2 fxLayout=\"column\">Our History</h2>\n    <div class=\"history\" fxLayout=\"column\" fxLayout.gt-sm=\"row\">        \n      <div fxFlex=\"30\">\n        <img src=\"assets/images/sweetshop.jpg\">\n      </div>\n      <div fxFlex=\"60\">\n        <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  </p>\n        <p>Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>\n        <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>\n      </div>\n    </div>\n  </div>\n  \n  <div fxFlex>\n    <h2>Corporate Leadership</h2>\n    <div class=\"container padded\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\"\n    fxLayoutAlign.gt-md=\"space-around center\" fxLayoutGap=\"50px\">\n      <div *ngFor=\"let leader of leaders\" class=\"leader\" fxFlex>\n        <img src=\"{{leader.image}}\">\n        <div class=\"label\">\n          <label>{{leader.abbr | uppercase}}</label>\n          <p>{{leader.name}} </p>\n        </div>\n      </div>\n\n\n    <div class=\"loading\" [hidden]=\"leaders\">\n        <img src=\"assets/images/load.gif\"> <p>Loading . . . Please Wait</p>\n    </div> \n    </div>    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padded {\n  padding: 20px 80px 30px 80px; }\n  .padded .padded {\n    padding: 20px 0; }\n  .padded h2 {\n    text-align: center;\n    text-transform: uppercase;\n    margin-bottom: 50px;\n    margin-top: 50px; }\n  .padded .history {\n    place-content: center space-around;\n    align-items: center; }\n  .padded img {\n    width: calc(100% + 20px);\n    margin: 0 -24px -5px -24px; }\n  .padded .leader img {\n    width: calc(100% + 20px);\n    margin: 0 -24px -5px -24px; }\n  .padded .leader .label {\n    background: #deddaf;\n    width: calc(100% + 20px);\n    margin: 0 -24px -5px -24px;\n    text-align: center;\n    padding: 10px 0; }\n  .padded .leader .label label {\n      font-weight: bold;\n      letter-spacing: 0; }\n  .padded .leader .label p {\n      margin: 0;\n      letter-spacing: 0; }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_leader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/leader.service */ "./src/app/services/leader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(leaderService) {
        this.leaderService = leaderService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderService.getLeaders().subscribe(function (leaders) { return _this.leaders = leaders; });
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_leader_service__WEBPACK_IMPORTED_MODULE_1__["LeaderService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _dish_detail_dish_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dish-detail/dish-detail.component */ "./src/app/dish-detail/dish-detail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");





var routes = [
    { path: 'dish-detail/:id', component: _dish_detail_dish_detail_component__WEBPACK_IMPORTED_MODULE_1__["DishDetailComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__["MenuComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n "

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _dish_detail_dish_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dish-detail/dish-detail.component */ "./src/app/dish-detail/dish-detail.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/dish.service */ "./src/app/services/dish.service.ts");
/* harmony import */ var _services_promotion_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/promotion.service */ "./src/app/services/promotion.service.ts");
/* harmony import */ var _services_leader_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/leader.service */ "./src/app/services/leader.service.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _banner_inner_banner_inner_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./banner-inner/banner-inner.component */ "./src/app/banner-inner/banner-inner.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                _dish_detail_dish_detail_component__WEBPACK_IMPORTED_MODULE_12__["DishDetailComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_32__["BannerComponent"],
                _banner_inner_banner_inner_component__WEBPACK_IMPORTED_MODULE_33__["BannerInnerComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_34__["MapComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ReactiveFormsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__["MatSlideToggleModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__["MatSliderModule"]
            ],
            providers: [_services_dish_service__WEBPACK_IMPORTED_MODULE_18__["DishService"], _services_promotion_service__WEBPACK_IMPORTED_MODULE_19__["PromotionService"], _services_leader_service__WEBPACK_IMPORTED_MODULE_20__["LeaderService"]],
            entryComponents: [_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/banner-inner/banner-inner.component.html":
/*!**********************************************************!*\
  !*** ./src/app/banner-inner/banner-inner.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container bannerInner\"\nfxLayout=\"row\"\nfxLayout.sm=\"column\" \nfxLayout.xs=\"column\" \nfxLayoutAlign.xs=\"start center\"\nfxLayoutAlign.sm=\"start center\" \nfxLayoutAlign.gt-sm=\"center center\" \nfxLayoutGap=\"10px\">\n    <div fxFlex fxFlex.gt-sm=\"50%\">\n        <h1>Ristorante Lord of the Fries</h1>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/banner-inner/banner-inner.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/banner-inner/banner-inner.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bannerInner {\n  background-image: url(\"assets/images/fall-holiday-table-decoration-party-setting-for-PNUGK5R.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 0 25%;\n  margin: 0px auto;\n  padding: 30px 30px;\n  color: floralwhite;\n  min-height: 150px; }\n  .bannerInner div {\n    text-align: center; }\n  .bannerInner div h1 {\n      font-size: 42px;\n      text-shadow: 0px 3px 4px #000;\n      margin-top: 60px;\n      margin-bottom: -10px; }\n  .bannerInner div p {\n      font-size: 18px;\n      font-style: italic;\n      text-shadow: 0px 2px 2px #000;\n      color: #fff !important; }\n"

/***/ }),

/***/ "./src/app/banner-inner/banner-inner.component.ts":
/*!********************************************************!*\
  !*** ./src/app/banner-inner/banner-inner.component.ts ***!
  \********************************************************/
/*! exports provided: BannerInnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerInnerComponent", function() { return BannerInnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerInnerComponent = /** @class */ (function () {
    function BannerInnerComponent() {
    }
    BannerInnerComponent.prototype.ngOnInit = function () {
    };
    BannerInnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner-inner',
            template: __webpack_require__(/*! ./banner-inner.component.html */ "./src/app/banner-inner/banner-inner.component.html"),
            styles: [__webpack_require__(/*! ./banner-inner.component.scss */ "./src/app/banner-inner/banner-inner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerInnerComponent);
    return BannerInnerComponent;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.html":
/*!**********************************************!*\
  !*** ./src/app/banner/banner.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container jumbotron\"\nfxLayout=\"row\"\nfxLayout.sm=\"column\" \nfxLayout.xs=\"column\" \nfxLayoutAlign.xs=\"start center\"\nfxLayoutAlign.sm=\"start center\" \nfxLayoutAlign.gt-sm=\"center center\" \nfxLayoutGap=\"10px\">\n    <div fxFlex fxFlex.gt-sm=\"50%\">\n        <h1>Ristorante Lord of the Fries</h1>\n        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creationswill tickle your culinary senses!</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/banner/banner.component.scss":
/*!**********************************************!*\
  !*** ./src/app/banner/banner.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-image: url(\"assets/images/fall-holiday-table-decoration-party-setting-for-PNUGK5R.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 0 25%;\n  margin: 0px auto;\n  padding: 120px 30px;\n  color: floralwhite;\n  min-height: 150px; }\n  .jumbotron div {\n    text-align: center; }\n  .jumbotron div h1 {\n      font-size: 42px;\n      text-shadow: 0px 3px 4px #000; }\n  .jumbotron div p {\n      font-size: 18px;\n      font-style: italic;\n      text-shadow: 0px 2px 2px #000;\n      color: #fff !important; }\n"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.scss */ "./src/app/banner/banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner-inner></app-banner-inner>\n<div class=\"container padded\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\"\n    fxLayoutAlign.gt-md=\"space-around center\" >\n\n    <div class=\"divi\" fxFlex=\"30\">\n        <h2>Address</h2>\n        <mat-card>\n            <p>\n                110 William St,<br>\n                Perth WA 6000,<br>  \n                Australia.\n            </p>\n            <p>\n                <i class=\"fa fa-phone\"></i>: +1300 667 552\n            </p>\n            <p>\n                <i class=\"fa fa-fax\"></i>: +1300 667 552\n            </p>\n            <p>\n                <i class=\"fa fa-envelope\"></i>: \n                <a href=\"mailto:confusion@food.net\">info@lotf.net</a>\n            </p>\n            <div class=\"contactBtn\">\n                <a mat-raised-button href=\"\"><i class=\"fa fa-phone\"></i> Call</a>\n                <a mat-raised-button><i class=\"fa fa-skype\"></i> Skype</a>\n                <a mat-raised-button href=\"\"><i class=\"fa fa-envelope-o\"></i> Email</a>\n            </div>\n        </mat-card>\n    </div>\n    <div class=\"divi\" fxFlex=\"50\">\n        <h2>Feedback</h2>\n        <form novalidate [formGroup]=\"feedbackForm\" #fform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n            <p>\n                <mat-form-field class=\"full-width\">\n                    <input matInput formControlName=\"firstname\" placeholder=\"First Name\" type=\"text\" required>\n                    <mat-error *ngIf=\"formErrors.firstname\">{{formErrors.firstname}}</mat-error>\n                </mat-form-field>\n                <mat-form-field class=\"full-width\">\n                    <input matInput formControlName=\"lastname\" placeholder=\"Last Name\" type=\"text\" required>\n                    <mat-error *ngIf=\"formErrors.lastname\">{{formErrors.lastname}}</mat-error>\n                </mat-form-field>\n            </p>\n            <p>\n                <mat-form-field class=\"full-width\">\n                    <input matInput formControlName=\"telnum\" placeholder=\"Tel. Number\" type=\"tel\" required pattern=\"[0-9]*\">\n                    <mat-error *ngIf=\"formErrors.telnum\">{{formErrors.telnum}}</mat-error>\n                </mat-form-field>\n                <mat-form-field class=\"full-width\">\n                    <input matInput formControlName=\"email\" placeholder=\"Email\" type=\"email\" required email>\n                    <mat-error *ngIf=\"formErrors.email\">{{formErrors.email}}</mat-error>\n                </mat-form-field>\n            </p>\n\n            <table class=\"form-size\">\n                <td>\n                    <mat-slide-toggle formControlName=\"agree\">May we contact you?</mat-slide-toggle>\n                </td>\n                <td>\n                    <mat-select placeholder=\"How?\" formControlName=\"contacttype\">\n                        <mat-option *ngFor=\"let ctype of contactType\" [value]=\"ctype\">\n                        {{ ctype }}\n                        </mat-option>\n                    </mat-select>\n                </td>\n            </table>\n\n            <p>\n                <mat-form-field class=\"full-width\">\n                    <textarea matInput formControlName=\"message\" placeholder=\"Your Feedback\" rows=3></textarea>\n                </mat-form-field>\n            </p>\n            <button [disabled]=\"feedbackForm.invalid\" type=\"submit\" mat-button class=\"background-primary text-floral-white\">Submit</button>\n        </form>\n    </div>\n</div>\n\n<app-map></app-map>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 95%; }\n\n.half-width {\n  width: 45%; }\n\n.form-size {\n  width: 75%; }\n\n.divi {\n  align-self: flex-start; }\n\n.divi mat-card {\n    line-height: 20px;\n    font-size: 14px;\n    opacity: 0.8; }\n\n.divi .contactBtn {\n    text-align: center; }\n\n.divi .contactBtn a, .divi .contactBtn a:link, .divi .contactBtn a:active, .divi .contactBtn a:visited, .divi .contactBtn a:hover {\n      margin: 20px 10px 0 10px;\n      color: #acaa6d; }\n\n.divi .ng-valid .mat-button {\n    background: #acaa6d;\n    font-weight: bold;\n    color: #000; }\n\n.divi .ng-invalid .mat-button {\n    background: #e8e7b9;\n    font-weight: bold;\n    color: #c3c286; }\n\n.divi form table td:first-child {\n    width: 84%; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/feedback */ "./src/app/shared/feedback.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb) {
        this.fb = fb;
        this.contactType = _shared_feedback__WEBPACK_IMPORTED_MODULE_2__["ContactType"];
        this.formErrors = {
            'firstname': '',
            'lastname': '',
            'telnum': '',
            'email': ''
        };
        this.validationMessages = {
            'firstname': {
                'required': 'First Name is required.',
                'minlength': 'First Name must be at least 2 characters long.',
                'maxlength': 'FirstName cannot be more than 25 characters long.'
            },
            'lastname': {
                'required': 'Last Name is required.',
                'minlength': 'Last Name must be at least 2 characters long.',
                'maxlength': 'Last Name cannot be more than 25 characters long.'
            },
            'telnum': {
                'required': 'Tel. number is required.',
                'pattern': 'Tel. number must contain only numbers.'
            },
            'email': {
                'required': 'Email is required.',
                'email': 'Email not in valid format.'
            },
        };
        this.createForm();
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.createForm = function () {
        var _this = this;
        this.feedbackForm = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25)]],
            telnum: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            agree: false,
            contacttype: 'None',
            message: ''
        });
        //observable provided by angular when changes detected in forms
        // subscribe to detect which feild had changed value
        this.feedbackForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        // (re)set validation messages
        this.onValueChanged();
    };
    // ? coz it is optional to have params .. this.onValueChanged();  &&  this.onValueChanged(data)
    ContactComponent.prototype.onValueChanged = function (data) {
        //if feedbackform hasn't been created return without anything
        if (!this.feedbackForm) {
            return;
        }
        var form = this.feedbackForm;
        for (var field in this.formErrors) {
            //clear previously attached msgs
            this.formErrors[field] = '';
            //get control to that specific field
            var control = form.get(field);
            //if control not null nor dirty
            if (control && control.dirty && !control.valid) {
                //check what kind of error has been added
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ContactComponent.prototype.onSubmit = function () {
        this.feedback = this.feedbackForm.value;
        //reset takes object as parameter
        this.feedbackForm.reset({
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contacttype: 'None',
            message: ''
        });
        // on reset removes warn styling
        this.feedbackFormDirective.resetForm();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fform'),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "feedbackFormDirective", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/dish-detail/dish-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/dish-detail/dish-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner-inner></app-banner-inner>\n<div class=\"container padded\" fxLayout=\"column\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutAlign.gt-md=\"space-around center\" fxLayoutGap=\"30px\">\n\n    <div fxFlex  *ngIf=\"dish\">\n        <h2 fxLayout=\"column\">{{dish.name | uppercase}}</h2>\n        <div class=\"dish\" fxLayout=\"column\" fxLayout.gt-sm=\"row\">        \n            <div fxFlex=\"45\">\n                <div class=\"menuImg\">\n                    <img src=\"../{{dish.image}}\" alt={{dish.name}}>\n                </div>\n                <div class=\"info\">\n                    <p>{{dish.name}}</p>\n                    <label></label>\n                    <span>{{dish.price}}</span>\n                </div>  \n                <div class=\"actions\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutAlign.gt-md=\"space-around center\" fxLayoutGap=\"-60px\">\n                    <button fxFlex=\"20\" mat-button (click)=\"goBack()\">BACK</button>\n                    <button fxFlex=\"20\" mat-button [routerLink]=\"['/dish-detail', prev]\"><span class=\"fa fa-chevron-left fa-lg\"></span></button>\n                    <button fxFlex=\"20\" mat-button [routerLink]=\"['/dish-detail', next]\"><span class=\"fa fa-chevron-right fa-lg\"></span></button>\n                </div>              \n            </div>\n            <div class=\"details\" fxFlex=\"45\">\n                <p>{{dish.description}}</p>\n                <h3>Comments</h3>\n                <mat-list style=\"clear: both\">\n                    <mat-list-item *ngFor=\"let comment of dish.comments\">\n                        <p matLine class=\"commentHead\">\n                            <span> {{comment.author}} </span> \n                            <span> {{comment.rating}} Stars</span>\n                        </p>\n                        <p matLine class=\"commentBody\">\n                            <span> {{comment.comment}} </span>\n                            <span> {{comment.date | date}} </span> \n                        </p>\n                    </mat-list-item>\n                    <mat-list-item *ngIf=\"commentForm.valid\">\n                        <p matLine class=\"commentHead\">\n                            <span> {{ commentForm.get('author').value}} </span>\n                            <span> {{ commentForm.get('rating').value}} Stars</span>\n                        </p>\n                        <p matLine class=\"commentBody newComment\">\n                            <span> {{ commentForm.get('comment').value}} </span>\n                        </p>\n                    </mat-list-item>\n                </mat-list>\n\n                <h3>Add a Comment</h3>\n                <form novalidate [formGroup]=\"commentForm\" #myForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                    <p>\n                        <mat-form-field class=\"full-width\">\n                            <input matInput formControlName=\"author\" placeholder=\"Name\" type=\"text\" required>\n                            <mat-error *ngIf=\"formErrors.author\">{{formErrors.author}}</mat-error>\n                        </mat-form-field>\n                    </p>\n                    <p>\n                        <mat-slider  max=\"5\" min=\"1\" step=\"1\" tickInterval=\"1\" thumbLabel value=\"5\" formControlName = \"rating\" >\n                        </mat-slider>\n                    </p>\n                    <p>\n                        <mat-form-field class=\"full-width\">\n                            <textarea matInput formControlName=\"comment\" placeholder=\"Your Comment\" rows=4 required=\"\"></textarea>\n                            <mat-error *ngIf=\"formErrors.comment\">{{formErrors.comment}}</mat-error>\n                        </mat-form-field>\n                    </p>\n                    <button [disabled]=\"commentForm.invalid\" type=\"submit\" mat-button class=\"background-primary text-floral-white\">Submit</button>\n                  \n                </form>\n            </div>\n        </div>\n    </div> \n\n    <div class=\"loading\" [hidden]=\"dish\">\n        <img src=\"assets/images/load.gif\"> <p>Loading . . . Please Wait</p>\n    </div>\n</div>\n<!--\n<div class=\"container\"\n    fxLayout=\"row\"\n    fxLayout.sm=\"column\"\n    fxLayout.xs=\"column\"\n    fxLayoutAlign.gt-md=\"space-around center\"\n    fxLayoutGap=\"10px\" \n    fxLayoutGap.xs=\"0\" *ngIf=\"dish\">\n\n  <div fxFlex=\"40\" *ngIf=\"dish\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>\n          <h3>{{dish.name | uppercase}}</h3>\n        </mat-card-title>\n      </mat-card-header>\n      <img mat-card-image src=\"../{{dish.image}}\" alt={{dish.name}}>\n      <mat-card-content>\n        <p>{{dish.description}}</p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button (click)=\"goBack()\">BACK</button>\n        <button mat-button [routerLink]=\"['/dish-detail', prev]\"><span class=\"fa fa-chevron-left fa-lg\"></span></button>\n        <span class=\"flex-spacer\"></span>\n        <button mat-button [routerLink]=\"['/dish-detail', next]\"><span class=\"fa fa-chevron-right fa-lg\"></span></button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n\n  <div fxFlex=\"40\" *ngIf=\"dish\">\n    <h2>Comments</h2>\n    \n\n    <h2>Add a Comment</h2>\n\n    <form novalidate [formGroup]=\"commentForm\" #myForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n      <p>\n        <mat-form-field class=\"full-width\">\n          <input matInput formControlName=\"author\" placeholder=\"Name\" type=\"text\" required>\n          <mat-error *ngIf=\"formErrors.author\">{{formErrors.author}}</mat-error>\n        </mat-form-field>\n      </p>\n      <p>\n        <mat-slider\n          max=\"5\"\n          min=\"1\"\n          step=\"1\"\n          tickInterval=\"1\"\n          thumbLabel\n          value=\"5\"\n          formControlName = \"rating\"\n        >\n    </mat-slider>\n      </p>\n      <p>\n        <mat-form-field class=\"full-width\">\n          <textarea matInput formControlName=\"comment\" placeholder=\"Your Comment\" rows=4 required=\"\"></textarea>\n          <mat-error *ngIf=\"formErrors.comment\">{{formErrors.comment}}</mat-error>\n        </mat-form-field>\n      </p>\n      <button type=\"submit\" mat-button class=\"background-primary text-floral-white\">Submit</button>\n      \n    </form>\n  </div>\n</div>\n-->\n\n"

/***/ }),

/***/ "./src/app/dish-detail/dish-detail.component.scss":
/*!********************************************************!*\
  !*** ./src/app/dish-detail/dish-detail.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 95%; }\n\n.form-size {\n  width: 75%; }\n\nmat-slider {\n  width: 300px; }\n\n.padded {\n  padding: 20px 80px 30px 80px; }\n\n.padded .padded {\n    padding: 20px 0; }\n\n.padded h2 {\n    text-align: center;\n    text-transform: uppercase;\n    margin-bottom: 50px;\n    margin-top: 25px; }\n\n.padded .dish {\n    place-content: center space-around;\n    align-items: flex-start; }\n\n.padded .dish .menuImg img {\n      width: 100%; }\n\n.padded .dish .info {\n      display: flex; }\n\n.padded .dish .info span {\n        color: #acaa6d;\n        margin-top: 13px;\n        font-family: 'Poppins', sans-serif;\n        font-size: 18px; }\n\n.padded .dish .info label {\n        border-bottom: 1px dashed #acaa6d;\n        margin-left: 10px;\n        flex: 2;\n        height: 33px;\n        margin-right: 15px;\n        opacity: 0.3; }\n\n.padded .dish .actions {\n      margin-top: 25px; }\n\n.padded .dish .actions .mat-button {\n        background: #e8e7b9;\n        font-weight: bold;\n        color: #c3c286; }\n\n.padded .dish .actions .mat-button:hover {\n          background: #acaa6d;\n          color: #000; }\n\n.padded .dish .details .mat-list mat-list-item {\n      height: auto;\n      margin-bottom: 20px; }\n\n.padded .dish .details p {\n      margin-top: 0; }\n\n.padded .dish .details .commentBody {\n      background: #e8e7b9;\n      padding: 20px;\n      border-radius: 4px;\n      color: #777644; }\n\n.padded .dish .details .commentBody span:last-child {\n        display: block;\n        text-align: right;\n        font-size: 11px;\n        font-weight: bold;\n        margin-bottom: -10px; }\n\n.padded .dish .details .commentHead span:last-child {\n      float: right;\n      font-size: 12px; }\n\n.padded .dish .details .newComment span:last-child {\n      text-align: left;\n      font-size: inherit;\n      font-weight: normal;\n      margin-bottom: 0; }\n\n.padded .ng-valid .mat-button {\n    background: #acaa6d;\n    font-weight: bold;\n    color: #000; }\n\n.padded .ng-invalid .mat-button {\n    background: #e8e7b9;\n    font-weight: bold;\n    color: #c3c286; }\n"

/***/ }),

/***/ "./src/app/dish-detail/dish-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dish-detail/dish-detail.component.ts ***!
  \******************************************************/
/*! exports provided: DishDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishDetailComponent", function() { return DishDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dish.service */ "./src/app/services/dish.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DishDetailComponent = /** @class */ (function () {
    function DishDetailComponent(dishservice, location, route, fb) {
        this.dishservice = dishservice;
        this.location = location;
        this.route = route;
        this.fb = fb;
        this.formErrors = {
            'author': '',
            'comment': ''
        };
        this.validationMessages = {
            'author': {
                'required': 'Author name is required.',
                'minlength': 'Author name must be at least 2 characters long.',
                'maxlength': 'Author name cannot be more than 25 characters long.'
            },
            'comment': {
                'required': 'Message is required.',
                'minlength': 'Message must be at least 2 characters long.'
            },
        };
        this.createForm();
    }
    // ///////////////////Dish details stuff//////////////////// //
    //when dish component is initialized
    DishDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getDishIds().subscribe(function (dishIds) { return _this.dishIds = dishIds; });
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) { return _this.dishservice.getDish(+params['id']); }))
            .subscribe(function (dish) {
            _this.dish = dish;
            _this.setPrevNext(dish.id);
        });
    };
    DishDetailComponent.prototype.setPrevNext = function (dishId) {
        var index = this.dishIds.indexOf(dishId);
        // % to wrap around when get to last or first
        this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
        this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    };
    DishDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    // ///////////////////Comment stuff//////////////////// //
    DishDetailComponent.prototype.createForm = function () {
        var _this = this;
        this.commentForm = this.fb.group({
            author: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(25)]],
            rating: 5,
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(25)]]
        });
        //observable provided by angular when changes detected in forms
        // subscribe to detect which feild had changed value
        this.commentForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        // (re)set validation messages
        this.onValueChanged();
    };
    // ? coz it is optional to have params .. this.onValueChanged();  &&  this.onValueChanged(data)
    DishDetailComponent.prototype.onValueChanged = function (data) {
        //if commentForm hasn't been created return without anything
        if (!this.commentForm) {
            return;
        }
        var form = this.commentForm;
        for (var field in this.formErrors) {
            //clear previously attached msgs
            this.formErrors[field] = '';
            //get control to that specific field
            var control = form.get(field);
            //if control not null nor dirty
            if (control && control.dirty && !control.valid) {
                //check what kind of error has been added
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    DishDetailComponent.prototype.onSubmit = function () {
        this.comment = this.commentForm.value;
        this.commentForm.reset({
            author: '',
            rating: 5,
            comment: ''
        });
        // on reset removes warn styling
        this.commentFormDirective.resetForm();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myForm'),
        __metadata("design:type", Object)
    ], DishDetailComponent.prototype, "commentFormDirective", void 0);
    DishDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dish-detail',
            template: __webpack_require__(/*! ./dish-detail.component.html */ "./src/app/dish-detail/dish-detail.component.html"),
            styles: [__webpack_require__(/*! ./dish-detail.component.scss */ "./src/app/dish-detail/dish-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_dish_service__WEBPACK_IMPORTED_MODULE_1__["DishService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], DishDetailComponent);
    return DishDetailComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container footer\">\n\n  <div class=\"sec footerLogo\">\n    <img src=\"assets/images/logo.png\">\n  </div>\n  <div class=\"sec open\">\n    <p>\n      <label>Open: </label>\n      <span>10:00 am - 11:00 pm</span>\n    </p>\n  </div>\n  <div class=\"links\">\n    <ul>\n      <li> <a routerLink=\"/home\" >Home</a></li>\n      <li><a routerLink=\"/about\">About</a></li>\n      <li><a routerLink=\"/menu\">Menu</a></li>\n      <li><a routerLink=\"/contact\">Contact</a></li>\n    </ul>\n  </div>\n  <div class=\"social\">\n    <ul>\n      <li><a href=\"\"><i class=\"fa fa-facebook-f\"></i></a></li>\n      <li><a href=\"\"><i class=\"fa fa-twitter\"></i></a></li>\n      <li><a href=\"\"><i class=\"fa fa-instagram\"></i></a></li>\n    </ul>\n  </div>\n  <div>\n      <p>© Copyright 2018 Ristorante Lord of the Fries</p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: #121618;\n  margin: 0px auto;\n  padding: 20px 0px;\n  color: #fff;\n  display: block;\n  text-align: center;\n  z-index: 11;\n  position: relative; }\n  .footer div {\n    margin: 50px 0; }\n  .footer div p {\n      opacity: 0.5;\n      font-size: 14px;\n      margin-bottom: -20px; }\n  .footer .footerLogo {\n    text-align: center;\n    opacity: 0.5;\n    margin: 25px 0; }\n  .footer .footerLogo img {\n      width: 15%; }\n  .footer ul {\n    padding: 0; }\n  .footer ul li {\n      display: inline-block;\n      margin: 0 25px; }\n  .footer ul li a {\n        color: #fff;\n        text-decoration: none;\n        text-transform: uppercase;\n        font-weight: bold;\n        font-size: 12px; }\n  .footer .social {\n    margin: -20px 0; }\n  .footer .social ul li {\n      margin: 0 15px; }\n  .footer .social ul li a {\n        font-size: 16px; }\n  .btn-facebook {\n  color: #fff !important;\n  background-color: #3b5998 !important; }\n  .btn-google-plus {\n  color: #fff !important;\n  background-color: #dd4b39 !important; }\n  .btn-youtube {\n  color: #fff !important;\n  background-color: #ff4b39 !important; }\n  .btn-linkedin {\n  color: #fff !important;\n  background-color: #007bb6 !important; }\n  .btn-twitter {\n  color: #fff !important;\n  background-color: #55acee !important; }\n  .btn-mail {\n  color: #fff !important;\n  background-color: #512DA8 !important; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <mat-toolbar fxLayout=\"row\" color=\"\" fxShow=”true” fxHide.lt-md=”true” fxLayoutGap=\"10px\">\n        <span class=\"logo\" fxFlex><img src=\"assets/images/logo.png\"></span>\n        <div class=\"hNav\" fxFlex>\n            <a mat-button routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n            <a mat-button routerLink=\"/about\" routerLinkActive=\"active\">About</a>\n            <a mat-button routerLink=\"/menu\" routerLinkActive=\"active\">Menu</a>\n            <a mat-button routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a>\n            <span class=\"flex-spacer\"></span>\n        </div>\n         <a class=\"login\" mat-button (click)=\"openLoginForm()\">Login</a>\n    </mat-toolbar>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header mat-toolbar {\n  background: none;\n  display: flex;\n  background-image: url(\"assets/images/pattarn.png\");\n  background-repeat: repeat;\n  color: #fff;\n  height: 75px;\n  box-shadow: 1px 1px 17px 0px #000;\n  position: fixed;\n  z-index: 10;\n  transition: all ease-out .5s; }\n  header mat-toolbar .logo img {\n    width: 46%;\n    margin-top: 5px; }\n  header mat-toolbar .hNav {\n    flex: 2 !important; }\n  header mat-toolbar .hNav .mat-button, header mat-toolbar .hNav .mat-flat-button, header mat-toolbar .hNav .mat-icon-button, header mat-toolbar .hNav .mat-stroked-button {\n      color: #fff;\n      margin-left: 30px;\n      border-radius: 4px;\n      background-image: url(\"assets/images/btn.png\");\n      background-repeat: repeat; }\n  header mat-toolbar .hNav .active {\n      background: #acaa6d;\n      font-weight: bold;\n      color: #000; }\n  header .login {\n  background-image: url(\"assets/images/btn.png\");\n  background-repeat: repeat;\n  border-radius: 4px; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dialog) {
        this.dialog = dialog;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openLoginForm = function () {
        //dialog service provides open method where i instruct it to open dialog component
        this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], { panelClass: 'dialogOverride' });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>\n<div class=\"divi who\">\n    <div class=\"container\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\"\n    fxLayoutAlign.gt-md=\"space-around center\" fxLayoutGap=\"50px\">\n        <div fxFlex>\n            <i class=\"fa fa-question\"></i>\n            <h3>Who We Are</h3>\n            <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>\n            <p class=\"quote\"><span>\"</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry.<span>\"</span></p>\n        </div>\n\n        <div fxFlex>\n            <i class=\"fa fa-truck\"></i>\n            <h3>Fastest Delivery</h3>\n            <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>\n            <p class=\"quote\"><span>\"</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry.<span>\"</span></p>\n        </div>\n\n        <div fxFlex>\n            <i class=\"fa fa-globe\"></i>\n            <h3>Original Recipes</h3>\n            <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>\n            <p class=\"quote\"><span>\"</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry.<span>\"</span></p>\n        </div>\n\n\n    </div>\n</div>\n\n\n<div class=\"divi\">\n    <div class=\"parallax featured\"><h2>Featured</h2></div>\n    <div class=\"container padded\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\"\n    fxLayoutAlign.gt-md=\"space-around center\" fxLayoutGap=\"50px\">\n\n        <div *ngIf=\"dish\" fxFlex>\n            <mat-card>\n                <img mat-card-image src={{dish.image}} alt={{dish.name}}>\n                <mat-card-content>\n                <h4>{{dish.name | uppercase}}</h4>\n                    <p>{{dish.description}}</p>\n                </mat-card-content>\n            </mat-card>\n        </div>\n        <div class=\"loading\" [hidden]=\"dish\">\n            <img src=\"assets/images/load.gif\"> <p>Loading . . . Please Wait</p>\n        </div>\n\n        <div *ngIf=\"promotion\" fxFlex>\n            <mat-card>\n                <img mat-card-image src={{promotion.image}} alt={{promotion.name}}>\n                <mat-card-content>\n                    <h4>{{promotion.name | uppercase}}</h4>\n                    <p>{{promotion.description}}</p>\n                </mat-card-content>\n            </mat-card>\n        </div>\n        <div class=\"loading\" [hidden]=\"promotion\">\n            <img src=\"assets/images/load.gif\"> <p>Loading . . . Please Wait</p>\n        </div>\n\n        <div *ngIf=\"leader\" fxFlex>\n            <mat-card>\n                <img mat-card-image src={{leader.image}} alt={{leader.name}}>\n                <mat-card-content>\n                    <h4>{{leader.name | uppercase}}</h4>\n                    <p>{{leader.designation}}. {{leader.description}}</p>\n                </mat-card-content>\n            </mat-card>\n        </div>\n        <div class=\"loading\" [hidden]=\"leader\">\n            <img src=\"assets/images/load.gif\"> <p>Loading . . . Please Wait</p>\n        </div>\n\n    </div>\n\n</div>\n\n\n<div class=\"divi menuPart\">\n    <div class=\"parallax menu\"><h2>Menu</h2></div>\n    <div class=\"container padded\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\"\n    fxLayoutAlign.gt-md=\"space-around center\" fxLayoutGap=\"50px\" *ngIf=\"dishes\">\n        <div class=\"menuDiv\" fxFlex *ngFor=\"let dish of dishes | slice:1:3\">\n            <div class=\"menuImg\">\n                <img src={{dish.image}} alt={{dish.name}}>\n            </div>\n            <div class=\"info\">\n                <p>{{dish.name}}</p>\n                <label></label>\n                <span>{{dish.price}}</span>\n            </div>\n        </div>\n    </div>\n    <a routerLink=\"/menu\">view all menu items <i>&rarr;</i></a>\n    <div class=\"loading\" [hidden]=\"dish\">\n        <img src=\"assets/images/load.gif\"> <p>Loading . . . Please Wait</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divi .padded {\n  padding: 50px 50px 70px 50px; }\n\n.divi .parallax {\n  min-height: 350px;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.divi .parallax.featured {\n    background-image: url(\"assets/images/slider1.jpg\"); }\n\n.divi .parallax.menu {\n    background-image: url(\"assets/images/slider2.jpg\"); }\n\n.divi .parallax h2 {\n    text-align: center;\n    text-transform: uppercase;\n    margin-bottom: 50px;\n    line-height: 350px;\n    color: #fff;\n    background: url(assets/images/pattarn2.png);\n    background-repeat: repeat; }\n\n.divi h2 {\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 60px;\n  font-size: 34px; }\n\n.divi mat-card {\n  border-radius: 4px; }\n\n.divi mat-card img {\n    height: 250px;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px; }\n\n.divi mat-card p {\n    height: 80px;\n    overflow: hidden; }\n\n.divi.who {\n  width: 75%;\n  margin: 0 auto;\n  padding: 50px 0;\n  text-align: center; }\n\n.divi.who i {\n    font-size: 70px;\n    opacity: 0.1; }\n\n.divi.who .quote {\n    opacity: 0.5;\n    font-style: italic;\n    font-size: 14px; }\n\n.divi.who .quote span {\n      font-size: 18px;\n      font-weight: bolder; }\n\n.divi.menuPart .menuDiv .menuImg {\n  overflow: hidden;\n  height: 200px; }\n\n.divi.menuPart .menuDiv .menuImg img {\n    width: 100%; }\n\n.divi.menuPart .menuDiv .info {\n  display: flex; }\n\n.divi.menuPart .menuDiv .info span {\n    color: #acaa6d;\n    margin-top: 13px;\n    font-family: 'Poppins', sans-serif;\n    font-size: 18px; }\n\n.divi.menuPart .menuDiv .info label {\n    border-bottom: 1px dashed #acaa6d;\n    margin-left: 10px;\n    flex: 2;\n    height: 33px;\n    margin-right: 15px;\n    opacity: 0.3; }\n\n.divi.menuPart a,\n.divi.menuPart a:link,\n.divi.menuPart a:active,\n.divi.menuPart a:visited,\n.divi.menuPart a:hover {\n  float: right;\n  margin: -50px 214px 20px 0;\n  text-decoration: none;\n  font-size: 14px;\n  letter-spacing: 0;\n  font-style: italic; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dish.service */ "./src/app/services/dish.service.ts");
/* harmony import */ var _services_promotion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/promotion.service */ "./src/app/services/promotion.service.ts");
/* harmony import */ var _services_leader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/leader.service */ "./src/app/services/leader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    // inject 2 services
    function HomeComponent(dishService, promotionService, leaderService) {
        this.dishService = dishService;
        this.promotionService = promotionService;
        this.leaderService = leaderService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService.getFeaturedDish().subscribe(function (dish) { return _this.dish = dish; });
        this.promotionService.getFeaturedPromotion().subscribe(function (promotion) { return _this.promotion = promotion; });
        this.leaderService.getFeaturedLeader().subscribe(function (leader) { return _this.leader = leader; });
        this.dishService.getDishes().subscribe(function (dishes) { return _this.dishes = dishes; });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_dish_service__WEBPACK_IMPORTED_MODULE_1__["DishService"],
            _services_promotion_service__WEBPACK_IMPORTED_MODULE_2__["PromotionService"],
            _services_leader_service__WEBPACK_IMPORTED_MODULE_3__["LeaderService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar md-dialog-title color=\"primary\">\n\t<span class=\"flex-spacer\"></span>\n\t<button mat-dialog-close>X</button>\n</mat-toolbar>\n\n<form novalidate #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\t<mat-dialog-content>\n\t\t<p>\n\t\t\t<mat-form-field>\n\t\t\t\t<input matInput placeholder=\"Username\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" #username=\"ngModel\" required>\n\t\t\t\t<mat-error *ngIf=\"username.errors?.required\">Username is required</mat-error>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t\t\t<input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" #password=\"ngModel\" required=\"\">\n\t\t\t\t<mat-error *ngIf=\"password.errors?.required\">Password is required</mat-error>\n\t\t\t</mat-form-field>\n\t\t\t<mat-checkbox [(ngModel)]=\"user.remember\" name=\"remember\">Remember Me</mat-checkbox>\n\t\t</p>\n\t</mat-dialog-content>\n\t<mat-dialog-actions>\n\t\t<span class=\"flex-spacer\"></span>\n\t\t<button mat-button mat-dialog-close>Cancel</button>\n\t\t<button type=\"submit\" mat-button class=\"background-primary text-floral-white\" [disabled]=\"loginForm.form.invalid\">Login</button>\n\t</mat-dialog-actions>\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-dialog-content {\n  margin: 0; }\n  mat-dialog-content .mat-form-field {\n    display: block; }\n  mat-dialog-content .mat-form-field .mat-form-field-label {\n      color: #fff; }\n  .mat-dialog-actions {\n  padding: 12px; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.user = { username: '', password: '', remember: false };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        //console.log('User: ', this.user);
        this.dialogRef.close();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container map\" \n    fxLayout=\"row wrap\" \n    fxLayout.lt-md=\"column\" \n    fxLayoutAlign=\"center center\">\n\n  <div class=\"mapouter\"><div class=\"gmap_canvas\"><iframe width=\"100%\" height=\"350\" id=\"gmap_canvas\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5054.315158156011!2d138.59054020342865!3d-34.92217697060352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3adedd930e7909c2!2sLord+of+the+Fries!5e1!3m2!1sen!2seg!4v1541514433747\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe></div><style>.mapouter{text-align:right;height:350px;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:350px;width:100%;}</style></div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container.map {\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner-inner></app-banner-inner>\n<div class=\"container btns\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n\t<button fxFlex=\"10\" mat-button routerLinkActive=\"active\" type=\"button\" (click)=\"onClick($event)\">All</button>\n\t<button fxFlex=\"10\" mat-button type=\"button\" datafilter=\"Mains\" (click)=\"onClick($event)\">Mains</button>\n\t<button fxFlex=\"10\" mat-button type=\"button\" datafilter=\"Appetizer\" (click)=\"onClick($event)\">Appetizer</button>\n\t<button fxFlex=\"10\" mat-button type=\"button\" datafilter=\"Dessert\" (click)=\"onClick($event)\">Dessert</button>\n</div>\n\n<div class=\"container padded\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\"\n    fxLayoutAlign.gt-md=\"space-around center\" fxLayoutGap=\"50px\" *ngIf=\"dishes\">\n    <div class=\"menuDiv mix {{dish.category | titlecase}}\" *ngFor=\"let dish of dishes\" [routerLink]=\"['/dish-detail', dish.id]\" fxFlex=\"45\">\n        <div class=\"menuImg\">\n            <img src={{dish.image}} alt={{dish.name}}>\n        </div>\n        <div class=\"info\">\n            <p>{{dish.name}}</p>\n            <label></label>\n            <span>${{dish.price}}</span>\n            <p>{{dish.description}}</p>\n        </div>\n    </div>\n</div>\n<div class=\"loading\" [hidden]=\"dishes\">\n    <img src=\"assets/images/load.gif\"> <p>Loading . . . Please Wait</p>\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btns {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 35px; }\n  .btns button {\n    flex: 1;\n    background-color: #e1dfab;\n    color: #868451; }\n  .padded {\n  padding: 50px 50px 70px 50px;\n  text-align: center;\n  flex-wrap: wrap; }\n  .padded .menuDiv {\n    cursor: pointer;\n    align-self: flex-start;\n    margin-bottom: 40px;\n    outline: none;\n    margin-right: 50px; }\n  .padded .menuDiv .menuImg {\n      overflow: hidden;\n      max-height: 250px; }\n  .padded .menuDiv .menuImg img {\n        width: 100%; }\n  .padded .menuDiv .info {\n      display: flex;\n      flex-wrap: wrap;\n      text-align: left; }\n  .padded .menuDiv .info span {\n        color: #acaa6d;\n        margin-top: 13px;\n        font-family: 'Poppins', sans-serif;\n        font-size: 18px; }\n  .padded .menuDiv .info label {\n        border-bottom: 1px dashed #acaa6d;\n        margin-left: 10px;\n        flex: 2;\n        height: 33px;\n        margin-right: 15px;\n        opacity: 0.3; }\n  .padded .menuDiv .info p:last-child {\n        margin-top: 0;\n        font-size: 14px;\n        opacity: 0.6; }\n  .padded .menuDiv.hide {\n      display: none;\n      opacity: 0;\n      transition: opacity 1s;\n      width: 0;\n      margin: 0; }\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dish.service */ "./src/app/services/dish.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(dishService) {
        this.dishService = dishService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to the observable returned from the service
        this.dishService.getDishes().subscribe(function (dishes) { return _this.dishes = dishes; });
    };
    //Mix It Up
    MenuComponent.prototype.onClick = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.innerText;
        var mix = document.getElementsByClassName("mix");
        if (idAttr == "Mains") {
            for (var i = 0; i < mix.length; i++) {
                if (!mix[i].classList.contains("Mains"))
                    mix[i].classList.add("hide");
                else
                    mix[i].classList.remove("hide");
            }
        }
        else if (idAttr == "Appetizer") {
            for (var i = 0; i < mix.length; i++) {
                if (!mix[i].classList.contains("Appetizer"))
                    mix[i].classList.add("hide");
                else
                    mix[i].classList.remove("hide");
            }
        }
        else if (idAttr == "Dessert") {
            for (var i = 0; i < mix.length; i++) {
                if (!mix[i].classList.contains("Dessert"))
                    mix[i].classList.add("hide");
                else
                    mix[i].classList.remove("hide");
            }
        }
        else if (idAttr == "All") {
            for (var i = 0; i < mix.length; i++) {
                mix[i].classList.remove("hide");
            }
        }
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_dish_service__WEBPACK_IMPORTED_MODULE_1__["DishService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/services/dish.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/dish.service.ts ***!
  \******************************************/
/*! exports provided: DishService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishService", function() { return DishService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_dishes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dishes */ "./src/app/shared/dishes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DishService = /** @class */ (function () {
    function DishService() {
    }
    // getDishes() method returns a promise instead of an array of dishes
    DishService.prototype.getDishes = function () {
        //pipe -> observables
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_shared_dishes__WEBPACK_IMPORTED_MODULE_3__["DISHES"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(2000));
    };
    DishService.prototype.getDish = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_shared_dishes__WEBPACK_IMPORTED_MODULE_3__["DISHES"].filter(function (dish) { return (dish.id === id); })[0]);
    };
    DishService.prototype.getFeaturedDish = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_shared_dishes__WEBPACK_IMPORTED_MODULE_3__["DISHES"].filter(function (dish) { return dish.featured; })[0]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(2000));
    };
    DishService.prototype.getDishIds = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_shared_dishes__WEBPACK_IMPORTED_MODULE_3__["DISHES"].map(function (dish) { return dish.id; }));
    };
    DishService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DishService);
    return DishService;
}());



/***/ }),

/***/ "./src/app/services/leader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/leader.service.ts ***!
  \********************************************/
/*! exports provided: LeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderService", function() { return LeaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_leaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/leaders */ "./src/app/shared/leaders.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeaderService = /** @class */ (function () {
    function LeaderService() {
    }
    LeaderService.prototype.getLeaders = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_shared_leaders__WEBPACK_IMPORTED_MODULE_3__["LEADERS"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(2000));
    };
    LeaderService.prototype.getLeader = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_shared_leaders__WEBPACK_IMPORTED_MODULE_3__["LEADERS"].filter(function (leader) { return (leader.id === id); })[0]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(2000));
    };
    LeaderService.prototype.getFeaturedLeader = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_shared_leaders__WEBPACK_IMPORTED_MODULE_3__["LEADERS"].filter(function (leader) { return leader.featured; })[0]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(2000));
    };
    LeaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LeaderService);
    return LeaderService;
}());



/***/ }),

/***/ "./src/app/services/promotion.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/promotion.service.ts ***!
  \***********************************************/
/*! exports provided: PromotionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionService", function() { return PromotionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_promotions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/promotions */ "./src/app/shared/promotions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PromotionService = /** @class */ (function () {
    function PromotionService() {
    }
    PromotionService.prototype.getPromotions = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_shared_promotions__WEBPACK_IMPORTED_MODULE_3__["PROMOTIONS"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(2000));
    };
    PromotionService.prototype.getPromotion = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_shared_promotions__WEBPACK_IMPORTED_MODULE_3__["PROMOTIONS"].filter(function (promo) { return (promo.id === id); })[0]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(2000));
    };
    PromotionService.prototype.getFeaturedPromotion = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_shared_promotions__WEBPACK_IMPORTED_MODULE_3__["PROMOTIONS"].filter(function (promo) { return promo.featured; })[0]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(2000));
    };
    PromotionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PromotionService);
    return PromotionService;
}());



/***/ }),

/***/ "./src/app/shared/dishes.ts":
/*!**********************************!*\
  !*** ./src/app/shared/dishes.ts ***!
  \**********************************/
/*! exports provided: DISHES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISHES", function() { return DISHES; });
var DISHES = [
    {
        id: 0,
        name: 'Uthappizza',
        image: 'assets/images/uthappizza.jpg',
        category: 'mains',
        label: 'Hot',
        price: '4.99',
        featured: true,
        // tslint:disable-next-line:max-line-length
        description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
        comments: [
            {
                rating: 5,
                comment: 'Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It\'s your birthday, we\'re gonna party!',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: 1,
        name: 'Zucchipakoda',
        image: 'assets/images/zucchipakoda.jpg',
        category: 'appetizer',
        label: '',
        price: '1.99',
        featured: false,
        description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
        comments: [
            {
                rating: 5,
                comment: 'dfgdfgd!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It\'s your birthday, we\'re gonna party!',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: 2,
        name: 'Vadonut',
        image: 'assets/images/vadonut.jpg',
        category: 'appetizer',
        label: 'New',
        price: '1.99',
        featured: false,
        description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
        comments: [
            {
                rating: 5,
                comment: 'rtuytjuyjuhnFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It\'s your birthday, we\'re gonna party!',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: 3,
        name: 'ElaiCheese Cake',
        image: 'assets/images/elaicheesecake.jpg',
        category: 'dessert',
        label: '',
        price: '2.99',
        featured: false,
        description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
        comments: [
            {
                rating: 5,
                comment: 'Imagine akl;kjkjkg in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It\'s your birthday, we\'re gonna party!',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/feedback.ts":
/*!************************************!*\
  !*** ./src/app/shared/feedback.ts ***!
  \************************************/
/*! exports provided: Feedback, ContactType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feedback", function() { return Feedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactType", function() { return ContactType; });
var Feedback = /** @class */ (function () {
    function Feedback() {
    }
    return Feedback;
}());

;
var ContactType = ['None', 'Tel', 'Email'];


/***/ }),

/***/ "./src/app/shared/leaders.ts":
/*!***********************************!*\
  !*** ./src/app/shared/leaders.ts ***!
  \***********************************/
/*! exports provided: LEADERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEADERS", function() { return LEADERS; });
var LEADERS = [
    {
        id: 0,
        name: 'Peter Pan',
        image: 'assets/images/alberto.jpg',
        designation: 'Chief Epicurious Officer',
        abbr: 'CEO',
        featured: false,
        // tslint:disable-next-line:max-line-length
        description: 'Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother\'s wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections.'
    },
    {
        id: 1,
        name: 'Dhanasekaran Witherspoon',
        image: 'assets/images/alberto.jpg',
        designation: 'Chief Food Officer',
        abbr: 'CFO',
        featured: false,
        // tslint:disable-next-line:max-line-length
        description: 'Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!'
    },
    {
        id: 2,
        name: 'Agumbe Tang',
        image: 'assets/images/alberto.jpg',
        designation: 'Chief Taste Officer',
        abbr: 'CTO',
        featured: false,
        // tslint:disable-next-line:max-line-length
        description: 'Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick.'
    },
    {
        id: 3,
        name: 'Alberto Somayya',
        image: 'assets/images/alberto.jpg',
        designation: 'Executive Chef',
        abbr: 'EC',
        featured: true,
        // tslint:disable-next-line:max-line-length
        description: 'Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!'
    }
];


/***/ }),

/***/ "./src/app/shared/promotions.ts":
/*!**************************************!*\
  !*** ./src/app/shared/promotions.ts ***!
  \**************************************/
/*! exports provided: PROMOTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROMOTIONS", function() { return PROMOTIONS; });
var PROMOTIONS = [
    {
        id: 0,
        name: 'Weekend Grand Buffet',
        image: 'assets/images/buffet.jpg',
        label: 'New',
        price: '19.99',
        featured: true,
        // tslint:disable-next-line:max-line-length
        description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person'
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Work\CV\Samples\LordOfTheFries\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map