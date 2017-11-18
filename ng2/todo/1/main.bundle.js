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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"wrap\">\n  <div class=\"header\">\n    <div class=\"all-checked\">\n      <mat-checkbox [(ngModel)]=\"isAllChecked\" \n                    *ngIf=\"todos.length > 0\"\n                    (change)=\"toggleAllChecked()\"></mat-checkbox>\n    </div>\n\n    <mat-form-field class=\"todo-input-outer\">\n      <input  class=\"todo-input\" \n              matInput placeholder=\"New task\" \n              (blur)=\"createTodo()\"\n              (keyup.enter)=\"createTodo()\"\n              [(ngModel)]=\"newTodo\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"todos-list\">\n    <div  class=\"inner item\" \n          id=\"todo_{{ todo.id }}\"\n          *ngFor=\"let todo of todos\" \n          (mouseenter)=\"changeRemoveIcon(todo.id, 'enter')\" \n          (mouseleave)=\"changeRemoveIcon(todo.id, 'leave')\">\n      <div class=\"checkbox-area\">\n        <mat-checkbox [(ngModel)]=\"checkboxes[todo.id]\" \n                      (change)=\"toggleTodoState(todo.id, checkboxes[todo.id])\"></mat-checkbox>\n      </div>\n\n      <div class=\"inner title-area\" [ngClass]=\"{checked: checkboxes[todo.id]}\">{{ todo.title }}</div>\n\n      <div class=\"inner remove-area\">\n        <div class=\"icon\">\n          <i class=\"material-icons\" (click)=\"removeTodo(todo.id)\">close</i>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"actions\">\n    <div class=\"inner cnt\">{{ (todos | todos).length }} items left</div>\n\n    <div class=\"inner visibility\">\n      <button class=\"btn btn-common\" \n              id=\"All\" type=\"button\" \n              mat-button \n              [ngClass]=\"{active: activeBtn == 'All'}\" \n              (click)=\"setActiveBtn('All')\">All</button>\n\n      <button class=\"btn btn-common\" \n              id=\"Active\" type=\"button\" \n              mat-button \n              [ngClass]=\"{active: activeBtn == 'Active'}\" \n              (click)=\"setActiveBtn('Active')\">Active</button>\n\n      <button class=\"btn btn-common\" \n              id=\"Completed\" \n              type=\"button\" \n              mat-button \n              [ngClass]=\"{active: activeBtn == 'Completed'}\" \n              (click)=\"setActiveBtn('Completed')\">Completed</button>\n    </div>\n\n    <div class=\"inner clear\">\n      <button class=\"btn btn-common\" \n                    id=\"clearCompleted\" \n                    type=\"button\" \n                    mat-button \n                    (click)=\"clearCompleted()\">Clear completed</button>\n    </div>\n  </div>\n</mat-card>\n\n<div class=\"author\">\n  <div class=\"copyright\">© Sergey Kalinin 2017</div>\n  <a class=\"github\" href=\"https://zlodiak.github.io/ng2/todo/0/\">https://zlodiak.github.io/ng2/todo/1/</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap .header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n  .wrap .header .all-checked {\n    width: 50px; }\n  .wrap .header .todo-input-outer {\n    width: calc(100% - 50px); }\n\n.wrap .todos-list {\n  padding-bottom: 20px; }\n  .wrap .todos-list .inner {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    padding-bottom: 10px; }\n    .wrap .todos-list .inner .checkbox-area {\n      width: 50px; }\n    .wrap .todos-list .inner .title-area {\n      width: calc(100% - 100px); }\n      .wrap .todos-list .inner .title-area.checked {\n        text-decoration: line-through;\n        color: #ccc; }\n    .wrap .todos-list .inner .remove-area {\n      width: 50px; }\n      .wrap .todos-list .inner .remove-area .icon {\n        display: none;\n        cursor: pointer; }\n      .wrap .todos-list .inner .remove-area .material-icons {\n        color: red;\n        font-size: 14px; }\n    .wrap .todos-list .inner.hovered .remove-area .icon {\n      display: block; }\n\n.wrap .actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n  .wrap .actions .inner.cnt {\n    width: 20%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n  .wrap .actions .inner.visibility {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    width: 60%; }\n    .wrap .actions .inner.visibility .btn {\n      margin: 0 5px; }\n  .wrap .actions .inner.clear {\n    width: 20%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n\n.author {\n  padding-top: 30px;\n  text-align: center;\n  font-family: Helvetica; }\n  .author .copyright {\n    padding-bottom: 10px;\n    display: inine-block; }\n  .author .github {\n    color: #000;\n    font-size: 70%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_todos_service__ = __webpack_require__("../../../../../src/app/services/todos.service.ts");
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
    function AppComponent(todosService) {
        this.todosService = todosService;
        this.newTodo = '';
        this.todos = [];
        this.checkboxes = {};
        this.activeBtn = 'All';
        this.isAllChecked = false;
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        this.setActiveBtn(this.activeBtn);
    };
    ;
    AppComponent.prototype.toggleAllChecked = function () {
        var _this = this;
        var todos = this.todosService.getTodos();
        var newTodos = [];
        todos.forEach(function (todo) {
            _this.checkboxes[todo.id] = _this.isAllChecked;
            todo.isChecked = _this.isAllChecked;
            newTodos.push(todo);
        });
        this.todosService.rewriteTodos(newTodos);
        this.isAllChecked = false;
    };
    ;
    AppComponent.prototype.clearCompleted = function () {
        var _this = this;
        var todos = this.todosService.getTodos();
        todos.forEach(function (todo) {
            if (todo.isChecked === true) {
                _this.todosService.removeTodo(todo.id);
            }
        });
        this.ngOnInit();
    };
    ;
    AppComponent.prototype.removeTodo = function (id) {
        this.todosService.removeTodo(id);
        this.ngOnInit();
    };
    ;
    AppComponent.prototype.setActiveBtn = function (btn) {
        var _this = this;
        this.activeBtn = btn;
        this.todos = this.todosService.getTodos();
        this.todos.forEach(function (todo) {
            _this.checkboxes[todo.id] = todo.isChecked;
        });
        if (this.activeBtn == 'All') {
            return;
        }
        var allTodos = this.todos;
        this.todos = [];
        allTodos.forEach(function (todo) {
            if (_this.activeBtn == 'Active' && todo.isChecked === false) {
                _this.todos.push(todo);
            }
            else if (_this.activeBtn == 'Completed' && todo.isChecked === true) {
                _this.todos.push(todo);
            }
        });
    };
    AppComponent.prototype.changeRemoveIcon = function (id, state) {
        var todoId = 'todo_' + id;
        var el = document.getElementById(todoId);
        if (state == 'enter') {
            el.classList.add('hovered');
        }
        else if (state == 'leave') {
            el.classList.remove('hovered');
        }
    };
    ;
    AppComponent.prototype.toggleTodoState = function (id, state) {
        var _this = this;
        var todos = this.todosService.getTodos();
        todos.forEach(function (todo) {
            if (todo.id === id) {
                todo.isChecked = state;
                _this.todosService.rewriteTodos(todos);
                return;
            }
        });
        this.setActiveBtn(this.activeBtn);
    };
    ;
    AppComponent.prototype.renderTodo = function (todo) {
        this.todos.push(todo);
    };
    ;
    AppComponent.prototype.createTodo = function () {
        if (!this.newTodo.trim().length) {
            return;
        }
        var newTodoObj = {
            id: Date.now() + '_' + performance.now(),
            title: this.newTodo.trim(),
            isChecked: false,
            dateUnix: Date.now()
        };
        this.todosService.addTodo(newTodoObj);
        this.renderTodo(newTodoObj);
        this.newTodo = '';
        this.ngOnInit();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_todos_service__["a" /* TodosService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_todos_service__ = __webpack_require__("../../../../../src/app/services/todos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_todos_pipe__ = __webpack_require__("../../../../../src/app/pipes/todos.pipe.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pipes_todos_pipe__["a" /* TodosPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_todos_service__["a" /* TodosService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/todos.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_todos_service__ = __webpack_require__("../../../../../src/app/services/todos.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodosPipe = (function () {
    function TodosPipe(todosService) {
        this.todosService = todosService;
    }
    ;
    TodosPipe.prototype.transform = function (value, btnName) {
        var todosFitered = [];
        var todos = this.todosService.getTodos();
        todos.forEach(function (todo) {
            if (todo.isChecked == false) {
                todosFitered.push(todo);
            }
        });
        return todosFitered;
    };
    TodosPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Pipe */])({
            name: 'todos'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_todos_service__["a" /* TodosService */]])
    ], TodosPipe);
    return TodosPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/todos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosService; });
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

var TodosService = (function () {
    function TodosService() {
    }
    TodosService.prototype.rewriteTodos = function (todos) {
        localStorage.todos = JSON.stringify(todos);
    };
    TodosService.prototype.getTodos = function () {
        return localStorage.todos ? JSON.parse(localStorage.todos) : [];
    };
    ;
    TodosService.prototype.removeTodo = function (id) {
        var todos = this.getTodos();
        var newTodos = [];
        todos.forEach(function (todo) {
            if (todo.id != id) {
                newTodos.push(todo);
            }
        });
        localStorage.todos = JSON.stringify(newTodos);
    };
    ;
    TodosService.prototype.addTodo = function (todo) {
        var todos = this.getTodos();
        todos.push(todo);
        localStorage.todos = JSON.stringify(todos);
    };
    ;
    TodosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TodosService);
    return TodosService;
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




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map