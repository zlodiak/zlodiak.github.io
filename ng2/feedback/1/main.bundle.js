webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/agree/agree.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-inner\">\n\t<div class=\"agree-text\">\n\t\t<h4 class=\"head\">СОГЛАШЕНИЕ ОБ ОБРАБОТКЕ ПЕРСОНАЛЬНЫХ ДАННЫХ</h4>\n\n\t\t<p>Данное соглашение об обработке персональных данных разработано в соответствии с законодательством Российской Федерации.</p>\n\n\t\t<p>Присоединяясь к настоящему Соглашению и оставляя свои данные на Сайте https://www.econ.msu.ru (далее – Сайт), путем заполнения полей онлайн-заявки (регистрации) Пользователь выражает Согласие на согласие на обработку персональных данных и их передачу оператору обработки персональных данных – Экономическому факультету Московского государственного университета имени М.В. Ломоносова (Адрес местонахождения: Российская Федерация, 119991, г.Москва, Ленинские горы, дом 1, строение 46) (далее – Оператор), которому принадлежит Сайт, на следующих условиях.</p>\n\n\t\t<p>Пользователь:</p>\n\n\t\t<p>\n\t\tподтверждает, что все указанные им данные принадлежат лично ему,\n\n\t\tподтверждает и признает, что им внимательно в полном объеме прочитано Соглашение и условия обработки его персональных данных, указываемых им в полях он-лайн заявки (регистрации), текст Соглашения и условия обработки персональных данных ему понятны;\n\n\t\tвыражает Согласие на обработку персональных данных без оговорок и ограничений (далее – Согласие). Моментом принятия Согласия является маркировка соответствующего поля в Форме и нажатие на кнопку отправки Формы на любой странице Сайта;\n\n\t\tподтверждает, что, давая Согласие, он действует свободно, своей волей и в своем интересе;\n\n\t\tДанное Согласие дается на обработку персональных данных как без использования средств автоматизации, так и с их использованием.\n\t\t</p>\n\n\t\t<p>Согласие дается на обработку следующих персональных данных Пользователя, указанных Пользователем в формах или в файлах, прикрепленных к формам:</p>\n\n\t\t<ul>\n\t\t\t<li>Фамилия, имя, отчество;\n\t\t\t<li>Должность, организация;\n\t\t\t<li>Телефон;\n\t\t\t<li>Страна;\n\t\t\t<li>Город;\n\t\t\t<li>Сферы интересов, услуг и направлений;\n\t\t\t<li>Адрес электронной почты;\n\t\t\t<li>Иных персональных данных, указанных Пользователем в формах или файлах, прикрепленных к формам.\n\t\t</ul>\n\n\n\t\t<p>Целью обработки персональных данных является их хранение и использование, в том числе:</p>\n\n\t\t<ul>\n\t\t\t<li>Ответы на запросы Пользователей;\n\t\t\t<li>Обеспечение работы Пользователя с Сайтом Оператора;\n\t\t\t<li>Направление Пользователям аналитических материалов и информирование Пользователей о предстоящих мероприятиях, организуемых Оператором, а также регистрация Пользователей для участия в таких мероприятиях;\n\t\t\t<li>Заключение с Пользователем договора.\n\t\t</ul>\n\n\t\t<p>Пользователь, принимая условия настоящего Соглашения, выражает свою заинтересованность и дает полное согласие, что обработка его персональных данных включает в себя следующие действия: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (предоставление доступа), обезличивание, блокирование, удаление, уничтожение персональных данных.</p>\n\n\t\t<p><strong>Согласие Пользователя на обработку персональных данных является конкретным, информированным и сознательным.</strong></p>\n\t</div>\n\n\t<div class=\"agree-footer\">\n\t\t<mat-checkbox [(ngModel)]=\"isAgreeOk\">Подтверждаю</mat-checkbox>\n\t\t<button class=\"btn btn-common\" mat-button (click)=\"setAgreeState()\" [disabled]=\"!isAgreeOk\">Далее</button>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/agree/agree.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".agree-text {\n  font-size: 1em; }\n  .agree-text .head {\n    margin-top: 0; }\n  .agree-text p {\n    margin-top: 0; }\n  .agree-text ul {\n    padding-left: 20px; }\n\n.agree-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .agree-footer .btn[disabled] {\n    background: #ccc !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/agree/agree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_vars_service__ = __webpack_require__("../../../../../src/app/services/global-vars.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgreeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgreeComponent = (function () {
    function AgreeComponent(globalVarsService, router) {
        this.globalVarsService = globalVarsService;
        this.router = router;
    }
    AgreeComponent.prototype.ngOnInit = function () {
        this.getAgreeState();
    };
    AgreeComponent.prototype.getAgreeState = function () {
        var _this = this;
        this.globalVarsService.getAgreeState().subscribe(function (data) { return setTimeout(function () {
            //console.log('subscribe', data);
            _this.isAgreeOk = data;
        }); });
    };
    ;
    AgreeComponent.prototype.setAgreeState = function () {
        if (this.isAgreeOk) {
            this.globalVarsService.setAgreeState(true);
            this.router.navigate(['/main']);
        }
    };
    ;
    return AgreeComponent;
}());
AgreeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-agree',
        template: __webpack_require__("../../../../../src/app/agree/agree.component.html"),
        styles: [__webpack_require__("../../../../../src/app/agree/agree.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_global_vars_service__["a" /* GlobalVarsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_global_vars_service__["a" /* GlobalVarsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AgreeComponent);

var _a, _b;
//# sourceMappingURL=agree.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agree_agree_component__ = __webpack_require__("../../../../../src/app/agree/agree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedback_feedback_component__ = __webpack_require__("../../../../../src/app/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_question_component__ = __webpack_require__("../../../../../src/app/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_6__main_main_component__["a" /* MainComponent */]
    },
    {
        path: 'agree',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_2__agree_agree_component__["a" /* AgreeComponent */]
    },
    {
        path: 'feedback',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_3__feedback_feedback_component__["a" /* FeedbackComponent */]
    },
    {
        path: 'question',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_4__question_question_component__["a" /* QuestionComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"side-nav-container\">\n  <mat-sidenav #sidenav class=\"left-sidenav\">\n\t\t<div class=\"nav\">\n      <a class=\"link\" [routerLink]=\"['/main']\" routerLinkActive=\"active\">\n        <i class=\"material-icons\">change_history</i>\n        <span class=\"title\">Начало</span>\n      </a> \n\n\t\t  <a class=\"link\" [routerLink]=\"['/feedback']\" routerLinkActive=\"active\">\n\t\t    <i class=\"material-icons icon\">feedback</i>\n\t\t    <span class=\"title\">Feedback</span>\n\t\t  </a>\n\n      <a class=\"link\" [routerLink]=\"['/question']\" routerLinkActive=\"active\">\n        <i class=\"material-icons icon\">question_answer</i>\n        <span class=\"title\">Question</span>\n      </a>     \n\t\t</div>\n  </mat-sidenav>\n\n  <div class=\"header\">\n  \t<div class=\"in left\" (click)=\"sidenav.open()\">\n  \t\t<i class=\"material-icons\">menu</i>\n  \t</div>\n\n  \t<div class=\"in center\">\n  \t\t<div class=\"title\">Header</div>\n  \t</div>\n\n  \t<div class=\"in right\"></div>\n  </div>\n\n  <div class=\"sidenav-content\">\n    <router-outlet></router-outlet>\n  </div>\n</mat-sidenav-container>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-nav-container {\n  width: 100%;\n  height: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.5); }\n  .side-nav-container .mat-sidenav-content {\n    overflow: hidden; }\n  .side-nav-container .header {\n    height: 60px;\n    background: blue;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .side-nav-container .header .in {\n      height: 60px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #fff; }\n      .side-nav-container .header .in.left {\n        width: 60px; }\n      .side-nav-container .header .in.center {\n        width: calc(100% - 120px);\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start;\n        color: #fff; }\n        .side-nav-container .header .in.center .title {\n          padding: 10px 0;\n          overflow: hidden; }\n      .side-nav-container .header .in.right {\n        width: 60px; }\n  .side-nav-container .sidenav-content {\n    height: calc(100% - 60px);\n    overflow: hidden;\n    overflow-y: auto; }\n  .side-nav-container .left-sidenav {\n    min-width: 200px; }\n    .side-nav-container .left-sidenav .nav {\n      overflow: hidden; }\n      .side-nav-container .left-sidenav .nav .link {\n        padding: 20px;\n        border-bottom: 1px solid #ccc;\n        color: blue;\n        display: block;\n        width: 100%;\n        text-decoration: none;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        .side-nav-container .left-sidenav .nav .link.active {\n          background: #ccc; }\n        .side-nav-container .left-sidenav .nav .link .icon {\n          color: blue; }\n        .side-nav-container .left-sidenav .nav .link .title {\n          margin-left: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global_vars_service__ = __webpack_require__("../../../../../src/app/services/global-vars.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(globalVarsService) {
        this.globalVarsService = globalVarsService;
    }
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_global_vars_service__["a" /* GlobalVarsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_global_vars_service__["a" /* GlobalVarsService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agree_agree_component__ = __webpack_require__("../../../../../src/app/agree/agree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__feedback_feedback_component__ = __webpack_require__("../../../../../src/app/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__question_question_component__ = __webpack_require__("../../../../../src/app/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_global_vars_service__ = __webpack_require__("../../../../../src/app/services/global-vars.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__agree_agree_component__["a" /* AgreeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__feedback_feedback_component__["a" /* FeedbackComponent */],
            __WEBPACK_IMPORTED_MODULE_9__question_question_component__["a" /* QuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_11__main_main_component__["a" /* MainComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__services_global_vars_service__["a" /* GlobalVarsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/feedback/feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-inner\">\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\t<p>\n\t  feedback works!\n\t</p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/feedback/feedback.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feedback/feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_vars_service__ = __webpack_require__("../../../../../src/app/services/global-vars.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackComponent = (function () {
    function FeedbackComponent(globalVarsService, router) {
        this.globalVarsService = globalVarsService;
        this.router = router;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.checkAgreeState();
    };
    FeedbackComponent.prototype.checkAgreeState = function () {
        var _this = this;
        this.globalVarsService.getAgreeState().subscribe(function (state) { return setTimeout(function () {
            console.log('subscribe', state);
            if (!state) {
                _this.router.navigate(['/agree']);
            }
        }); });
    };
    ;
    return FeedbackComponent;
}());
FeedbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-feedback',
        template: __webpack_require__("../../../../../src/app/feedback/feedback.component.html"),
        styles: [__webpack_require__("../../../../../src/app/feedback/feedback.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_global_vars_service__["a" /* GlobalVarsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_global_vars_service__["a" /* GlobalVarsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], FeedbackComponent);

var _a, _b;
//# sourceMappingURL=feedback.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-inner\">\n\t<div class=\"nav\">\n\t  <button class=\"btn btn-common\" [routerLink]=\"['/feedback']\" routerLinkActive=\"active\" mat-button>\n\t    feedback\n\t  </button>\n\n\t  <button class=\"btn btn-common\" [routerLink]=\"['/question']\" routerLinkActive=\"active\" mat-button>\n\t    question\n\t  </button>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_vars_service__ = __webpack_require__("../../../../../src/app/services/global-vars.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent(globalVarsService, router) {
        this.globalVarsService = globalVarsService;
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.checkAgreeState();
    };
    MainComponent.prototype.checkAgreeState = function () {
        var _this = this;
        this.globalVarsService.getAgreeState().subscribe(function (state) { return setTimeout(function () {
            console.log('subscribe', state);
            if (!state) {
                _this.router.navigate(['/agree']);
            }
        }); });
    };
    ;
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_global_vars_service__["a" /* GlobalVarsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_global_vars_service__["a" /* GlobalVarsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MainComponent);

var _a, _b;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-inner\">\n\t<p>\n\t  page-not-found works!\n\t</p>\n</div>\n\n\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_vars_service__ = __webpack_require__("../../../../../src/app/services/global-vars.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
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
    function PageNotFoundComponent(globalVarsService, router) {
        this.globalVarsService = globalVarsService;
        this.router = router;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        this.checkAgreeState();
    };
    PageNotFoundComponent.prototype.checkAgreeState = function () {
        var _this = this;
        this.globalVarsService.getAgreeState().subscribe(function (state) { return setTimeout(function () {
            console.log('subscribe', state);
            if (!state) {
                _this.router.navigate(['/agree']);
            }
        }); });
    };
    ;
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_global_vars_service__["a" /* GlobalVarsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_global_vars_service__["a" /* GlobalVarsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PageNotFoundComponent);

var _a, _b;
//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-inner\">\n\t<p>\n\t  question works!\n\t</p>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/question/question.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_vars_service__ = __webpack_require__("../../../../../src/app/services/global-vars.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionComponent = (function () {
    function QuestionComponent(globalVarsService, router) {
        this.globalVarsService = globalVarsService;
        this.router = router;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        this.checkAgreeState();
    };
    QuestionComponent.prototype.checkAgreeState = function () {
        var _this = this;
        this.globalVarsService.getAgreeState().subscribe(function (state) { return setTimeout(function () {
            console.log('subscribe', state);
            if (!state) {
                _this.router.navigate(['/agree']);
            }
        }); });
    };
    ;
    return QuestionComponent;
}());
QuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-question',
        template: __webpack_require__("../../../../../src/app/question/question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question/question.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_global_vars_service__["a" /* GlobalVarsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_global_vars_service__["a" /* GlobalVarsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], QuestionComponent);

var _a, _b;
//# sourceMappingURL=question.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/global-vars.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVarsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalVarsService = (function () {
    function GlobalVarsService() {
        this.isAgreeOk = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    ;
    GlobalVarsService.prototype.getAgreeState = function () {
        //console.log('this.isAgreeOk', this.isAgreeOk);
        return this.isAgreeOk;
    };
    ;
    GlobalVarsService.prototype.setAgreeState = function (state) {
        //console.log('set isAgreeOk', state);
        this.isAgreeOk.next(state);
    };
    ;
    return GlobalVarsService;
}());
GlobalVarsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GlobalVarsService);

//# sourceMappingURL=global-vars.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map