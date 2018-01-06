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

/***/ "../../../../../src/app/add.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Lisää säähavainto</h1>\r\n<form novalidate (ngSubmit)=\"post(myForm)\" [formGroup]=\"myform\">\r\n  <fieldset formGroupName=\"add\">\r\n    <div class=\"form-group\">\r\n      <label for=\"citySelect\">Valitse havaintoasema</label>\r\n      <select class=\"form-control\" formControlName=\"station\" id=\"citySelect\">\r\n        <option disabled selected>Valitse</option>\r\n        <option value=\"Tokio\">Tokio</option>\r\n        <option value=\"Helsinki\">Helsinki</option>\r\n        <option value=\"New York\">New York</option>\r\n        <option value=\"Amsterdam\">Amsterdam</option>\r\n        <option value=\"Dubai\">Dubai</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"scaleSelect\">Valitse yksikkö</label>\r\n      <select class=\"form-control\" formControlName=\"unit\" ng-model=\"unit\" id=\"scaleSelect\">\r\n        <option value=\"Celsius\" selected>Celsius</option>\r\n        <option value=\"Fahrenheit\">Fahrenheit</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"temperature\">Lämpötilahavainto</label>\r\n      <input class=\"form-control\" formControlName=\"temperature\" required placeholder=\"Lämpötila\" type=\"text\">\r\n      <p *ngIf=\"error\" class=\"alert alert-danger\">\r\n        <strong>Error:</strong> Error message\r\n      </p>\r\n      <pre>{{myform.value | json}}</pre>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n  </fieldset>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            template: "\n    <nav></nav>\n    <div id=\"container\">\n      <router-outlet></router-outlet>\n    </div>\n  ",
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nav_component__ = __webpack_require__("../../../../../src/app/components/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_add_component__ = __webpack_require__("../../../../../src/app/components/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__web_service_web_service__ = __webpack_require__("../../../../../src/app/web-service/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_city_component__ = __webpack_require__("../../../../../src/app/components/city.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_component__ = __webpack_require__("../../../../../src/app/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_observation_component__ = __webpack_require__("../../../../../src/app/components/observation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_citydata_component__ = __webpack_require__("../../../../../src/app/components/citydata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_reverse_pipe__ = __webpack_require__("../../../../../src/app/pipes/reverse.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_max_pipe__ = __webpack_require__("../../../../../src/app/pipes/max.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_min_pipe__ = __webpack_require__("../../../../../src/app/pipes/min.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_add_component__["a" /* AddObservationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_city_component__["a" /* CityComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_observation_component__["a" /* ObservationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_citydata_component__["a" /* CityDataComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_reverse_pipe__["a" /* ReversePipe */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_max_pipe__["a" /* MaxPipe */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_min_pipe__["a" /* MinPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBhyAhyZWZPBCs115U05_hzvRECKEZJzs8'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__web_service_web_service__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6_ngx_cookie_service__["a" /* CookieService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_add_component__ = __webpack_require__("../../../../../src/app/components/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_city_component__ = __webpack_require__("../../../../../src/app/components/city.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_component__ = __webpack_require__("../../../../../src/app/components/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__components_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'add',
        component: __WEBPACK_IMPORTED_MODULE_2__components_add_component__["a" /* AddObservationComponent */]
    },
    {
        path: ':city',
        component: __WEBPACK_IMPORTED_MODULE_3__components_city_component__["a" /* CityComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule(route) {
        this.route = route;
    }
    AppRoutingModule.prototype.ngOnInit = function () {
        var name = this.route.snapshot.params['city'];
    };
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddObservationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_service_web_service__ = __webpack_require__("../../../../../src/app/web-service/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddObservationComponent = /** @class */ (function () {
    function AddObservationComponent(webService) {
        this.webService = webService;
        this.unit = "Celcius";
        this.formData = {
            station: "dummy",
            temperature: 0
        };
    }
    AddObservationComponent.prototype.post = function (myform) {
        console.log(this.formData);
        //    myform.preventDefault();
        //  this.formData.temperature = this.unit == 'Celsius' ? this.formData.temperature : this.formData.temperature * 9 / 5 + 32;
        this.webService.postObservation(this.myform);
    };
    AddObservationComponent.prototype.ngOnInit = function () {
        this.myform = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            add: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
                station: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('Valitse', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
                unit: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('Celsius', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
                temperature: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern("/[\d]*,?[\d]*/")
                ])
            })
        });
    };
    AddObservationComponent.errorMessages = {
        'required': function () { return 'This field is required'; }
    };
    AddObservationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'addnew',
            template: __webpack_require__("../../../../../src/app/add.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__web_service_web_service__["a" /* WebService */]])
    ], AddObservationComponent);
    return AddObservationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/city.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CityComponent = /** @class */ (function () {
    function CityComponent(route) {
        this.route = route;
    }
    CityComponent.prototype.ngOnInit = function () {
    };
    CityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'city',
            template: "\n    <citydata></citydata>\n    ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], CityComponent);
    return CityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/citydata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_service_web_service__ = __webpack_require__("../../../../../src/app/web-service/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CityDataComponent = /** @class */ (function () {
    function CityDataComponent(cookieService, webService, route) {
        this.cookieService = cookieService;
        this.webService = webService;
        this.route = route;
        this.cookieValue = '';
        this.lat = 60.1697530;
        this.lon = 24.9490830;
    }
    CityDataComponent.prototype.ngOnInit = function () {
        this.webService.getCityData(this.route.snapshot.params.city);
        this.cookieValue = this.cookieService.get('unit');
    };
    CityDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'citydata',
            template: "\n        <div>\n            <h1> {{ (webService.citydata | async)?.name }} </h1>\n            <div id=\"locationdiv\" class=\"card border-info mb-3\">\n            <div class=\"card-header\">{{ (webService.citydata | async)?.name }}</div>\n            \n            <div class=\"card-body\">\n               <agm-map \n                    [latitude]=\"lat\" \n                    [longitude]=\"lon\">\n                </agm-map>\n            </div>\n            </div>\n            <div id=\"datadiv\">\n                <div *ngFor=\"let temp_data of (webService.citydata | async)?.temp_data | reverse\" class=\"card border-dark mb-3\">\n                   <div class=\"card-header\">\n                       <p> {{ temp_data.timestamp | date:\"HH:mm dd.MM.yyyy\" }} </p>\n                   </div>\n                   <div class=\"card-body\">\n                       <p> {{ this.cookieValue == '\u00B0C' ? temp_data.value : temp_data.value * 9 / 5 + 32 }}{{ this.cookieValue }} </p>\n                   </div>\n                </div>\n            </div>\n        </div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_1__web_service_web_service__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], CityDataComponent);
    return CityDataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home',
            template: "\n    <h1>Vuorokauden s\u00E4\u00E4</h1>\n    <observation></observation>\n    ",
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(cookieService, route) {
        this.cookieService = cookieService;
        this.route = route;
        this.cookieValue = '';
    }
    NavComponent.prototype.changeUnit = function (e) {
        if (this.cookieService.get('unit') == '°C') {
            this.cookieService.set('unit', '°F');
        }
        else {
            this.cookieService.set('unit', '°C');
        }
        this.cookieValue = this.cookieService.get('unit');
    };
    NavComponent.prototype.ngOnInit = function () {
        if (this.cookieService.get('unit') == '') {
            this.cookieService.set('unit', '°C');
        }
        this.cookieValue = this.cookieService.get('unit');
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'nav',
            styles: [__webpack_require__("../../../../../src/app/nav.component.css")],
            template: "\n    <ul class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n      <li class=\"left\"><a href=\"/\">S\u00E4\u00E4havainnot</a></li>\n      <li class=\"left\"><a href=\"/add\">Lis\u00E4\u00E4 havainto</a></li>\n      <li class=\"city\"><a href=\"/tokio\">Tokio</a></li>\n      <li class=\"city\"><a href=\"/helsinki\">Helsinki</a></li>\n      <li class=\"city\"><a href=\"/new york\">New York</a></li>\n      <li class=\"city\"><a href=\"/amsterdam\">Amsterdam</a></li>\n      <li class=\"city\"><a href=\"/dubai\">Dubai</a></li>\n      <li class=\"city\"><a href=\"/\" (click)=\"changeUnit($event)\"> {{ this.cookieValue }} </a></li>\n    </ul>\n    ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/observation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_service_web_service__ = __webpack_require__("../../../../../src/app/web-service/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ObservationComponent = /** @class */ (function () {
    function ObservationComponent(cookieService, webService) {
        this.cookieService = cookieService;
        this.webService = webService;
        this.cookieValue = '';
    }
    ObservationComponent.prototype.ngOnInit = function () {
        this.webService.getObservations();
        this.cookieValue = this.cookieService.get('unit');
    };
    ObservationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'observation',
            template: "\n        <div class=\"card border-dark mb-3 frontpageCard\" *ngFor=\"let observation of webService.observations | async; let i = index;\">\n            <div class=\"card-header\"> {{observation.city}} </div>\n            <div class=\"card-body\">\n\n            <div *ngIf=\"observation.temp_data[observation.temp_data.length -1]; then tempBlock; else elseBlock\">this is ignored</div>\n\n            <ng-template #tempBlock> \n                <p>Viimeisin l\u00E4mp\u00F6tila:<br /> {{ this.cookieValue == '\u00B0C' ? observation.temp_data[observation.temp_data.length -1].value : observation.temp_data[observation.temp_data.length -1].value * 9 / 5 + 32 }}{{ this.cookieValue }}</p>\n                <p>Havaintoaika:<br /> {{observation.temp_data[observation.temp_data.length -1].timestamp | date:\"HH:mm dd.MM.yyyy\" }}</p>\n                <p>Vuorokauden korkein: {{ this.cookieValue == '\u00B0C' ? (observation.temp_data | max: 'value') : (observation.temp_data | max: 'value') * 9 / 5 + 32 }}{{ this.cookieValue }}</p>\n                <p>Vuorokauden matalin: {{ this.cookieValue == '\u00B0C' ? (observation.temp_data | min: 'value') : (observation.temp_data | min: 'value') * 9 / 5 + 32 }}{{ this.cookieValue }}</p>\n            </ng-template>\n            <ng-template #elseBlock>Ei dataa viimeisen <br/> vuorokauden ajalta</ng-template>\n        </div>\n        </div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_1__web_service_web_service__["a" /* WebService */]])
    ], ObservationComponent);
    return ObservationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\r\n    width: 80%;\r\n    margin: auto;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\nli {\r\n    border-right:1px solid #bbb;\r\n}\r\n\r\nli:last-child {\r\n    border-right: none;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\nli a:hover {\r\n    color: black;\r\n}\r\n\r\n.left {\r\n    -webkit-box-flex: 2;\r\n        -ms-flex: 2 0 0px;\r\n            flex: 2 0 0;\r\n}\r\n\r\n.city {\r\n    -webkit-box-align: right;\r\n        -ms-flex-align: right;\r\n            align-items: right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pipes/max.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaxPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MaxPipe = /** @class */ (function () {
    function MaxPipe() {
    }
    MaxPipe.prototype.transform = function (value, prop) {
        if (!Array.isArray(value) || value.length === 0 || !prop) {
            return value;
        }
        value.sort(function (a, b) { return b[prop] - a[prop]; });
        return value[0][prop];
    };
    MaxPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'max'
        })
    ], MaxPipe);
    return MaxPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/min.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MinPipe = /** @class */ (function () {
    function MinPipe() {
    }
    MinPipe.prototype.transform = function (value, prop) {
        if (!Array.isArray(value) || value.length === 0 || !prop) {
            return value;
        }
        value.sort(function (a, b) { return a[prop] - b[prop]; });
        return value[0][prop];
    };
    MinPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'min'
        })
    ], MinPipe);
    return MinPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/reverse.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value) {
        if (!value)
            return;
        return value.reverse();
    };
    ReversePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'reverse'
        })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "../../../../../src/app/web-service/web.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebService = /** @class */ (function () {
    function WebService(http) {
        this.http = http;
        this.BASE_URL = 'https://polar-river-59836.herokuapp.com/api';
        this.result = [];
        this.resultAll = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Subject */]();
        this.resultCity = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Subject */]();
        this.observations = this.resultAll.asObservable();
        this.citydata = this.resultCity.asObservable();
    }
    WebService.prototype.getObservations = function () {
        var _this = this;
        this.http.get(this.BASE_URL).subscribe(function (res) {
            _this.result = res.json();
            _this.resultAll.next(_this.result[0]);
        }, function (error) {
            console.error(error);
        });
    };
    ;
    WebService.prototype.getCityData = function (city) {
        var _this = this;
        this.http.get(this.BASE_URL + "/" + city).subscribe(function (res) {
            _this.result = res.json();
            _this.resultCity.next(_this.result);
        }, function (error) {
            console.error(error);
        });
    };
    ;
    WebService.prototype.postObservation = function (postData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(postData);
        //    console.log(body);
        //    return this.http.post(this.BASE_URL, body, options ).map((res: Response) => res.json());
    };
    WebService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], WebService);
    return WebService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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