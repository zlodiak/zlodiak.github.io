webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_vote_vote_component__ = __webpack_require__("../../../../../src/app/components/vote/vote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_results_results_component__ = __webpack_require__("../../../../../src/app/components/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: '/vote',
        pathMatch: 'full'
    },
    {
        path: 'vote',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_2__components_vote_vote_component__["a" /* VoteComponent */]
    },
    {
        path: 'results',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_3__components_results_results_component__["a" /* ResultsComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"side-nav-container\">\n  <mat-sidenav #sidenav class=\"left-sidenav\" mode=\"side\">\n  \t<div class=\"header\">\n\t    <button class=\"btn btn-common\" type=\"button\" mat-button (click)=\"sidenav.close()\">\n\t\t\t\t<i class=\"icon material-icons\">close</i>\n\t      <div class=\"label\">Закрыть меню</div>\n\t    </button>\n  \t</div>\n\n\t\t<nav class=\"nav\">\n\t\t  <a class=\"link\" [routerLink]=\"['/vote']\" routerLinkActive=\"active\">\n\t\t    <span class=\"title\">Голосование</span>\n\t\t  </a> \n\n\t\t  <a class=\"link\" [routerLink]=\"['/results']\" routerLinkActive=\"active\">\n\t\t    <span class=\"title\">Результаты</span>\n\t\t  </a>      \n\t\t</nav>\n\n    <div class=\"copyrights\">\n      <div class=\"author\">© Sergey Kalinin</div>\n      <div class=\"created-date\">2017</div>\n    </div>\t\t\n\n    <div class=\"sources\">\n    <a href=\"https://github.com/zlodiak/ng4_votes\">GitHub</a>\n    </div>\n  </mat-sidenav>\n\n  <div class=\"sidenav-content-out\">\n  \t<div class=\"header\">\n\t    <button class=\"btn btn-common\" type=\"button\" mat-button (click)=\"sidenav.open()\" *ngIf=\"!stateSidenav.opened\">\n\t\t\t\t<i class=\"icon material-icons\">menu</i>\n\t      <div class=\"label\">Открыть меню</div>\n\t    </button>\n    </div>\n\n\t  <div class=\"sidenav-content\">\n\t    <router-outlet></router-outlet>\n\t  </div>\n  </div>\n</mat-sidenav-container>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-drawer-container {\n  background: #fff !important; }\n\n.mat-sidenav-content {\n  overflow: hidden; }\n\n.side-nav-container {\n  width: 100%;\n  height: 100%; }\n  .side-nav-container .left-sidenav {\n    min-width: 200px; }\n    .side-nav-container .left-sidenav .header {\n      padding-top: 10px; }\n    .side-nav-container .left-sidenav .nav {\n      overflow: hidden;\n      padding-right: 8px;\n      padding-top: 23px; }\n      .side-nav-container .left-sidenav .nav .link {\n        padding: 20px 0;\n        color: #2b8d00;\n        display: block;\n        width: 100%;\n        text-decoration: none;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        .side-nav-container .left-sidenav .nav .link.active {\n          background: #dce5ff; }\n        .side-nav-container .left-sidenav .nav .link .icon {\n          color: blue; }\n        .side-nav-container .left-sidenav .nav .link .title {\n          margin-left: 10px;\n          margin-bottom: 0px !important; }\n    .side-nav-container .left-sidenav .copyrights {\n      position: absolute;\n      bottom: 40px;\n      left: 0;\n      height: 20px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      .side-nav-container .left-sidenav .copyrights > div {\n        margin-right: 6px;\n        font-size: 0.8em;\n        font-weight: bold; }\n    .side-nav-container .left-sidenav .sources {\n      position: absolute;\n      bottom: 20px;\n      left: 0;\n      width: 100%;\n      height: 20px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      .side-nav-container .left-sidenav .sources a {\n        color: #000;\n        font-size: 0.8em;\n        margin-left: 13px; }\n  .side-nav-container .sidenav-content-out {\n    height: calc(100% - 10px);\n    overflow: auto; }\n    .side-nav-container .sidenav-content-out .header {\n      height: 60px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .side-nav-container .sidenav-content-out .sidenav-content {\n      height: calc(100% - 60px);\n      overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AppComponent.prototype, "stateSidenav", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_vote_service__ = __webpack_require__("../../../../../src/app/services/vote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_results_service__ = __webpack_require__("../../../../../src/app/services/results.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_vote_vote_component__ = __webpack_require__("../../../../../src/app/components/vote/vote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_results_results_component__ = __webpack_require__("../../../../../src/app/components/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_formatted_answer_pipe__ = __webpack_require__("../../../../../src/app/pipes/formatted-answer.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dialogs_info_dialog_info_dialog_component__ = __webpack_require__("../../../../../src/app/dialogs/info-dialog/info-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_vote_vote_component__["a" /* VoteComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_results_results_component__["a" /* ResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_formatted_answer_pipe__["a" /* FormattedAnswerPipe */],
                __WEBPACK_IMPORTED_MODULE_14__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_15__dialogs_info_dialog_info_dialog_component__["a" /* InfoDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_order_pipe__["OrderModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_results_service__["a" /* ResultsService */],
                __WEBPACK_IMPORTED_MODULE_9__services_vote_service__["a" /* VoteService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__dialogs_info_dialog_info_dialog_component__["a" /* InfoDialogComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"result-table\" cellpadding=\"0\" celspacing=\"0\" *ngIf=\"results.length\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th *ngFor=\"let head of results[0]; let answer_i = index;\">\n\t\t\t\t{{ head.title }}\n\t\t\t</th>\n\t\t</tr>\n\t</thead>\n\n\t<tbody>\n\t\t<tr class=\"result\" *ngFor=\"let user of results; let user_i = index;\">\n\t\t\t<td class=\"result\" *ngFor=\"let answer of user; let answer_i = index;\">\n\t\t\t\t<div *ngIf=\"answer.answer\">\n\t\t\t\t\t<span>{{ answer.answer | formattedAnswer }}</span>\t\t\t\t\n\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t</td>\n\t\t</tr>\t\n\t</tbody>\n</table>\n\n<div class=\"no-results\" *ngIf=\"!results.length\">\n\tНикто пока не проголосовал\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/results/results.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".result-table {\n  min-width: 100%;\n  border: 1px solid #ccc;\n  padding: 0; }\n  .result-table th {\n    font-size: 0.7em;\n    text-align: left;\n    vertical-align: bottom; }\n  .result-table td {\n    font-size: 0.7em;\n    border: 1px solid #ccc;\n    padding: 10px;\n    vertical-align: top; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_results_service__ = __webpack_require__("../../../../../src/app/services/results.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsComponent = (function () {
    function ResultsComponent(resultsService) {
        this.resultsService = resultsService;
        this.results = [];
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this.getResults();
    };
    ResultsComponent.prototype.getResults = function () {
        var resultsObj = this.resultsService.getResults();
        var resultsArr = [];
        for (var prop in resultsObj) {
            if (!resultsObj.hasOwnProperty(prop))
                continue;
            resultsArr.push(resultsObj[prop]);
        }
        this.results = resultsArr;
        console.log(this.results);
    };
    ;
    ResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-results',
            template: __webpack_require__("../../../../../src/app/components/results/results.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/results/results.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_results_service__["a" /* ResultsService */]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/vote/vote.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-inner\">\n\t<div class=\"form\" *ngIf=\"!isVoted\">\n\t\t<div class=\"intro-area\">\n\t\t\t<div class=\"intro\">\n\t\t\t\tСпасибо за ваши отзывы. Они для нас очень важны.\n\t\t\t</div>\n\t\t</div>\n\n\t\t<mat-card class=\"line\" \n\t\t\t\t\t\t\t*ngFor=\"let v of votes | orderBy: 'order': false; let i = index\" \n\t\t\t\t\t\t\tid=\"card_{{ v.id }}\" \n\t\t\t\t\t\t\t[ngClass]=\"{colored: noValidIdsArr.indexOf(v.id) != -1}\">\n\t\t\t<div class=\"title\">{{ v.title }} <span class=\"mandatory\" *ngIf=\"v.mandatory != 0\">*</span></div>\n\n\t\t\t<div class=\"cb-area\" *ngIf=\"v.answers_type == 0\">\n\t\t\t\t<mat-checkbox class=\"cb\"\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let answer of v.answers\"\n\t\t\t\t\t\t\t\t\t\t\t[checked]=\"form[v.id].answer_cb.indexOf(answer) > -1\"\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleCB(v.id, answer)\">{{ answer }}\n\t\t\t\t</mat-checkbox>\n\t\t\t</div>\n\n\t\t\t<div class=\"rb-area\" *ngIf=\"v.answers_type == 1\">\n\t\t\t\t<mat-radio-group class=\"radio-group\" [(ngModel)]=\"form[v.id]['answer_rb']\">\n\t\t\t\t  <mat-radio-button class=\"radio-button\" \n\t\t\t\t  \t\t\t\t\t\t\t\t\t*ngFor=\"let answer of v.answers\" \n\t\t\t\t  \t\t\t\t\t\t\t\t\t[value]=\"answer\">{{ answer }}\n\t\t\t\t  </mat-radio-button>\n\t\t\t\t</mat-radio-group>\n\t\t\t</div>\t\n\n\t\t\t<div class=\"select-area\" *ngIf=\"v.answers_type == 2\">\n\t\t\t\t<mat-select placeholder=\"Выберите значение\" [(ngModel)]=\"form[v.id]['answer_select']\">\n\t\t\t\t  <mat-option class=\"select\" *ngFor=\"let answer of v.answers\" [value]=\"answer\">\n\t\t\t\t    {{ answer }}\n\t\t\t\t  </mat-option>\n\t\t\t\t</mat-select>\n\t\t\t</div>\t\t\t \n\n\t\t\t<textarea class=\"textarea\" *ngIf=\"v.answers_type == 3\" [(ngModel)]=\"form[v.id].answer_textarea\"></textarea> \n\n\t\t\t<mat-slider class=\"slider\" \n\t\t\t\t\t\t\t\t\tmin=\"1\" \n\t\t\t\t\t\t\t\t\tmax=\"10\" \n\t\t\t\t\t\t\t\t\tstep=\"1\" \n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"form[v.id].answer_slider\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"v.answers_type == 4\"></mat-slider>\n\t\t</mat-card>\n\n\t\t<div class=\"submit-area\">\n\t\t\t<button class=\"btn btn-common\" mat-button (click)=\"sendAnswers(form)\">Отправить</button>\n\t\t</div>\t\t\n\t</div>\n\n\t<div class=\"thanks\" *ngIf=\"isVoted\">\n\t\t<span>Вы уже проголосовали. Спасибо.</span>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/vote/vote.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-inner .intro-area {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .page-inner .intro-area .intro {\n    font-weight: bold;\n    font-size: 1.2 em;\n    padding-bottom: 20px; }\n\n.page-inner .line {\n  max-width: 400px;\n  margin: 0 auto 10px; }\n  .page-inner .line.colored {\n    box-shadow: 0 3px 1px -2px #f00, 0 2px 2px 0 #f00, 0 1px 5px 0 #f00; }\n  .page-inner .line .title {\n    padding-bottom: 20px; }\n    .page-inner .line .title .mandatory {\n      color: red;\n      font-weight: bold;\n      font-weight: 150%; }\n  .page-inner .line .rb-area .radio-group {\n    display: block;\n    width: 100%; }\n    .page-inner .line .rb-area .radio-group .radio-button {\n      width: 20%; }\n  .page-inner .line .textarea {\n    width: calc(100% - 10px);\n    display: block;\n    padding: 4px;\n    border: 1px solid #2b8d00;\n    min-height: 50px;\n    border-radius: 5px;\n    outline: none; }\n  .page-inner .line .slider {\n    width: 100%; }\n  .page-inner .line .cb {\n    width: 100%;\n    display: block; }\n\n.page-inner .submit-area {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .page-inner .submit-area .btn {\n    margin: 20px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/vote/vote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogs_info_dialog_info_dialog_component__ = __webpack_require__("../../../../../src/app/dialogs/info-dialog/info-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_vote_service__ = __webpack_require__("../../../../../src/app/services/vote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_results_service__ = __webpack_require__("../../../../../src/app/services/results.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VoteComponent = (function () {
    function VoteComponent(voteService, resultsService, matDialog) {
        this.voteService = voteService;
        this.resultsService = resultsService;
        this.matDialog = matDialog;
        this.votes = [];
        this.answer = {};
        this.answers = {};
        this.form = {};
        this.isVoted = localStorage.isVoted ? true : false;
        this.noValidIdsArr = [];
    }
    VoteComponent.prototype.ngOnInit = function () {
        this.getVotes();
    };
    VoteComponent.prototype.getVotes = function () {
        var _this = this;
        this.voteService.getVotes().subscribe(function (data) {
            //console.log(data);  
            var voteRaw = JSON.parse(data._body);
            var votes = [];
            for (var prop in voteRaw) {
                if (!voteRaw.hasOwnProperty(prop))
                    continue;
                voteRaw[prop].id = prop;
                voteRaw[prop].order = +voteRaw[prop].order;
                voteRaw[prop].answers_type = +voteRaw[prop].answers_type;
                voteRaw[prop].mandatory = +voteRaw[prop].mandatory;
                votes.push(voteRaw[prop]);
                _this.form[prop] = {
                    question_id: prop,
                    question_title: voteRaw[prop].title,
                    question_mandatory: voteRaw[prop].mandatory,
                    question_type: voteRaw[prop].answers_type,
                    answer_cb: [],
                    answer_rb: '',
                    answer_select: '',
                    answer_textarea: '',
                    answer_slider: ''
                };
            }
            _this.votes = votes;
            //console.log(this.votes); 
        }, function (err) {
            console.log('err');
        });
    };
    ;
    VoteComponent.prototype.sendAnswers = function (form) {
        var _this = this;
        var sendArr = [];
        var line = {};
        var lineObj = {};
        var lineId = Date.now() + '_' + performance.now();
        for (var prop in form) {
            if (!form.hasOwnProperty(prop))
                continue;
            lineObj = {
                id: form[prop].question_id,
                title: form[prop].question_title,
                mandatory: form[prop].question_mandatory
            };
            if (form[prop].question_type == 0) {
                lineObj['answer'] = form[prop].answer_cb;
            }
            else if (form[prop].question_type == 1) {
                lineObj['answer'] = form[prop].answer_rb;
            }
            else if (form[prop].question_type == 2) {
                lineObj['answer'] = form[prop].answer_select;
            }
            else if (form[prop].question_type == 3) {
                lineObj['answer'] = form[prop].answer_textarea;
            }
            else if (form[prop].question_type == 4) {
                lineObj['answer'] = '' + form[prop].answer_slider;
            }
            ;
            sendArr.push(lineObj);
            line[lineId] = sendArr;
        }
        this.checkValidForm(lineId, line);
        if (this.noValidIdsArr.length) {
            // validation false
            this.matDialog.open(__WEBPACK_IMPORTED_MODULE_2__dialogs_info_dialog_info_dialog_component__["a" /* InfoDialogComponent */], {
                width: '300px',
                hasBackdrop: true,
                data: { title: 'Ошибка!', message: 'Не все обязательные поля заполнены.' }
            });
        }
        else {
            // validation ok
            this.resultsService.addResult(lineId, line[lineId]);
            this.isVoted = true;
            localStorage.isVoted = 'true';
            setTimeout(function () {
                _this.matDialog.open(__WEBPACK_IMPORTED_MODULE_2__dialogs_info_dialog_info_dialog_component__["a" /* InfoDialogComponent */], {
                    width: '300px',
                    hasBackdrop: true,
                    data: { title: 'Спасибо!', message: 'Ваши данные отправлены.' }
                });
            }, 0);
        }
    };
    ;
    VoteComponent.prototype.checkValidForm = function (lineId, line) {
        var _this = this;
        this.noValidIdsArr = [];
        line[lineId].forEach(function (question) {
            if ((typeof question.answer == 'object' && !question.answer.length) ||
                (typeof question.answer == 'string' && !question.answer.length) ||
                (typeof question.answer == 'number' && !question.answer)) {
                if (question.mandatory != 0) {
                    _this.noValidIdsArr.push(question.id);
                }
            }
        });
    };
    ;
    VoteComponent.prototype.toggleCB = function (v_id, answer) {
        var pos = this.form[v_id].answer_cb.indexOf(answer.trim());
        if (pos == -1) {
            this.form[v_id].answer_cb.push(answer.trim());
        }
        else {
            this.form[v_id].answer_cb.splice(pos, 1);
        }
    };
    ;
    VoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vote',
            template: __webpack_require__("../../../../../src/app/components/vote/vote.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/vote/vote.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_vote_service__["a" /* VoteService */],
            __WEBPACK_IMPORTED_MODULE_4__services_results_service__["a" /* ResultsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]])
    ], VoteComponent);
    return VoteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dialogs/info-dialog/info-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">{{ data.title }}</div>\n\n<div class=\"message\">{{ data.message }}</div>\n\n<div class=\"footer\">\n\t<button class=\"btn btn-common\" mat-button (click)=\"matDialogRef.close()\">\n\t  OK\n\t</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dialogs/info-dialog/info-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  font-weight: bold;\n  padding-bottom: 20px; }\n\n.message {\n  padding-bottom: 20px; }\n\n.footer {\n  overflow: hidden; }\n  .footer .btn {\n    float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/info-dialog/info-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var InfoDialogComponent = (function () {
    function InfoDialogComponent(matDialogRef, data) {
        this.matDialogRef = matDialogRef;
        this.data = data;
    }
    InfoDialogComponent.prototype.ngOnInit = function () {
    };
    InfoDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-info-dialog',
            template: __webpack_require__("../../../../../src/app/dialogs/info-dialog/info-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialogs/info-dialog/info-dialog.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object])
    ], InfoDialogComponent);
    return InfoDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Страницы не существует. 404 error\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/formatted-answer.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormattedAnswerPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormattedAnswerPipe = (function () {
    function FormattedAnswerPipe() {
    }
    FormattedAnswerPipe.prototype.transform = function (value, args) {
        if (typeof value === 'object') {
            return value.join(', ');
        }
        else {
            return value;
        }
    };
    FormattedAnswerPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'formattedAnswer'
        })
    ], FormattedAnswerPipe);
    return FormattedAnswerPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/results.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultsService = (function () {
    function ResultsService() {
    }
    ResultsService.prototype.getResults = function () {
        return localStorage.results ? JSON.parse(localStorage.results) : {};
    };
    ;
    ResultsService.prototype.addResult = function (lineId, result) {
        var results = this.getResults();
        results[lineId] = result;
        localStorage.results = JSON.stringify(results);
    };
    ;
    ResultsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ResultsService);
    return ResultsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/vote.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VoteService = (function () {
    function VoteService(http) {
        this.http = http;
    }
    ;
    VoteService.prototype.getVotes = function () {
        return this.http.get('../assets/json/feedback_0.json');
    };
    ;
    VoteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], VoteService);
    return VoteService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map