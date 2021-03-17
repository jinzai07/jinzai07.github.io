(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Program Files\MAMP\htdocs\others\planetaryshinji-v2021\src\main.ts */"zUnb");


/***/ }),

/***/ "8ifR":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enums_section_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../enums/section.enum */ "THAY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NavbarComponent_img_18_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_img_18_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.scrollTo(ctx_r1.Section.TOP); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
    get Section() {
        return _enums_section_enum__WEBPACK_IMPORTED_MODULE_1__["Section"];
    }
    scrollTo(el) {
        document.querySelector(el).scrollIntoView({ behavior: 'smooth' });
    }
    onWindowScroll(e) {
        const navbar = document.querySelector('.sy-navbar');
        const ul = document.querySelector('.sy-navbar__links');
        const section = document.querySelector('.sy-navbar__navigations');
        if (window.pageYOffset > navbar.clientHeight) {
            ul.classList.add('sy-navbar__links--inverse');
            navbar.classList.add('sy-navbar--inverse');
            section.classList.add('col-md-10');
            this.isScrolledDown = true;
        }
        else {
            ul.classList.remove('sy-navbar__links--inverse');
            navbar.classList.remove('sy-navbar--inverse');
            section.classList.remove('col-md-10');
            this.isScrolledDown = false;
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 19, vars: 1, consts: [[1, "row", "sy-navbar"], [1, "col-xs-12", "col-md-8", "sy-navbar__navigations"], [1, "sy-navbar__links"], [1, "sy-navbar__link"], [3, "click"], ["src", "assets/icons/chevron-up.png", "class", "sy-navbar__top", 3, "click", 4, "ngIf"], ["src", "assets/icons/chevron-up.png", 1, "sy-navbar__top", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_4_listener() { return ctx.scrollTo(ctx.Section.TOP); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_7_listener() { return ctx.scrollTo(ctx.Section.EXPERIENCE); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_10_listener() { return ctx.scrollTo(ctx.Section.CERTIFICATION); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_13_listener() { return ctx.scrollTo(ctx.Section.SKILLS); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_16_listener() { return ctx.scrollTo(ctx.Section.ABOUT); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavbarComponent_img_18_Template, 1, 0, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isScrolledDown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".sy-navbar[_ngcontent-%COMP%] {\n  height: 8vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  transition: height 0.05s ease;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n}\n.sy-navbar__navigations[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n  padding: 0;\n  margin: 0 auto;\n}\n.sy-navbar__links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  transform: translateY(-50%);\n  transition: all 0.05s ease;\n  color: #495057;\n  font-weight: 300;\n  font-size: 18px;\n}\n.sy-navbar__links--inverse[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media screen and (min-width: 576px) {\n  .sy-navbar__links[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.sy-navbar--inverse[_ngcontent-%COMP%] {\n  height: 5vh;\n  background-color: #F0F0F0;\n  opacity: 0.85;\n  box-shadow: 0px 2px 5px 1px rgba(73, 80, 87, 0.7);\n}\n.sy-navbar__link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.sy-navbar__top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 35px;\n  right: 20px;\n}\n.sy-navbar__top[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n@media screen and (min-width: 576px) {\n  .sy-navbar__top[_ngcontent-%COMP%] {\n    right: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFx0aGVtZS1jb25maWcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFGRjtBQUlFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFGSjtBQUtFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQzVCVztFRDZCWCxnQkFBQTtFQUNBLGVBQUE7QUFISjtBQUtJO0VBQ0UsZUFBQTtBQUhOO0FBTUk7RUFoQkY7SUFpQkksZUFBQTtFQUhKO0FBQ0Y7QUFNRTtFQUNFLFdBQUE7RUFDQSx5QkN6Q1M7RUQwQ1QsYUFBQTtFQUdBLGlEQUFBO0FBSko7QUFRSTtFQUNFLGVBQUE7QUFOTjtBQVVFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUko7QUFVSTtFQUNFLGVBQUE7QUFSTjtBQVdJO0VBVEY7SUFVSSxXQUFBO0VBUko7QUFDRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9hc3NldHMvc2Nzcy9jb25maWdcIjtcclxuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3Njc3MvdGhlbWUtY29uZmlnXCI7XHJcblxyXG4uI3sgJHN0eWxlLXByZWZpeCB9LW5hdmJhciB7XHJcbiAgaGVpZ2h0OiA4dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4wNXMgZWFzZTtcclxuICB6LWluZGV4OiAxMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAmX19uYXZpZ2F0aW9ucyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAmX19saW5rcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMDVzIGVhc2U7XHJcbiAgICBjb2xvcjogJGZvbnQtcHJpbWFyeTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG4gICAgJi0taW52ZXJzZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLS1pbnZlcnNlIHtcclxuICAgIGhlaWdodDogNXZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLXByaW1hcnk7XHJcbiAgICBvcGFjaXR5OiAuODU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggNXB4IDFweCByZ2JhKDczLDgwLDg3LDAuNyk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggNXB4IDFweCByZ2JhKDczLDgwLDg3LDAuNyk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAxcHggcmdiYSg3Myw4MCw4NywwLjcpO1xyXG4gIH1cclxuXHJcbiAgJl9fbGluayB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fdG9wIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMzVweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgcmlnaHQ6IDM1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiJGZvbnQtcHJpbWFyeTogIzQ5NTA1NztcclxuXHJcbiRiZy1wcmltYXJ5OiAjRjBGMEYwO1xyXG5cclxuJHByaW1hcnk6ICMzNmU0OWE7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-mzd-timeline */ "VKMx");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "aF9I");






class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_2__["MzdTimelineModule"],
        ], ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_2__["MzdTimelineModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_2__["MzdTimelineModule"]], exports: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_2__["MzdTimelineModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_2__["MzdTimelineModule"],
                ],
                exports: [
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                    ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_2__["MzdTimelineModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_enums_links_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/enums/links.enum */ "duUz");
/* harmony import */ var _shared_enums_section_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/enums/section.enum */ "THAY");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mzd-timeline */ "VKMx");







class AppComponent {
    constructor() {
        this.title = 'planetaryshinji-v2021';
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1__["init"]();
        this.runTypeWriter();
    }
    get Section() {
        return _shared_enums_section_enum__WEBPACK_IMPORTED_MODULE_3__["Section"];
    }
    get Link() {
        return _shared_enums_links_enum__WEBPACK_IMPORTED_MODULE_2__["Link"];
    }
    get currentYear() {
        return new Date().getFullYear();
    }
    scrollTo(el) {
        document.querySelector(el).scrollIntoView({ behavior: 'smooth' });
    }
    navigateTo(link) {
        window.open(link, "_blank");
    }
    runTypeWriter() {
        let i = 0;
        const text = 'Hi, I\'m Shinji.';
        const speed = 120;
        const typeWriter = () => {
            const introDiv = document.querySelector(".sy-main__content--header");
            if (i < text.length) {
                introDiv.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
            else {
                setTimeout(() => {
                    introDiv.innerHTML = '';
                    i = 0;
                    typeWriter();
                }, 2500);
            }
        };
        typeWriter();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 225, vars: 1, consts: [[1, "sy-main"], ["id", "top", 1, "sy-main__ellipse"], [1, "sy-main__content"], [1, "sy-main__content--header"], ["data-aos", "fade-up", "data-aos-anchor-placement", "top-center", "data-aos-duration", "2000", 1, "sy-main__content--desc"], ["src", "assets/icons/chevron-down.png", 1, "sy-main__chevron", "animate__bounce", "animate__animated", "animate__infinite", "animate__slow", 3, "click"], ["id", "experience", 1, "sy-main__section"], [1, "sy-main__section--container"], [1, "sy-main__content--title", "mb-4"], ["data-aos", "fade-up", "data-aos-anchor-placement", "bottom-bottom", "data-aos-duration", "800"], ["src", "assets/icons/uni.png", 1, "sy-main__icon"], ["href", "https://www.pup.edu.ph/", "target", "_blank"], ["href", "https://ffuf.de/manila", "target", "_blank"], ["src", "assets/icons/briefcase.png", 1, "sy-main__icon"], ["href", "https://ffuf.de/manila/", "target", "_blank"], ["id", "certifications", 1, "sy-main__section", "sy-main__cert--bg"], [1, "row"], ["data-aos", "zoom-in-down", 1, "col-xs-12", "col-md-6", "sy-main__cert--container"], [1, "sy-main__cert--title"], ["href", "https://www.freecodecamp.org/", "target", "_blank", 1, "sy-main__cert--link"], ["href", "https://www.freecodecamp.org/certification/fccca438d0e-6b18-4b43-b8e5-2f167f99a91c/responsive-web-design", "target", "_blank", 1, "sy-text__size--sm", "sy-main__cert--link"], [1, "sy-main__cert--hr", "sy-main__hr"], ["href", "https://www.udemy.com/", "target", "_blank", 1, "sy-main__cert--link"], ["href", "https://www.udemy.com/certificate/UC-baa82ef9-6ea1-4a05-913e-533a4a68f6d9/", "target", "_blank", 1, "sy-text__size--sm", "sy-main__cert--link"], ["href", "https://www.udemy.com/certificate/UC-1359dfee-61d2-4d8a-a640-7ae91048a92a/", "target", "_blank", 1, "sy-text__size--sm", "sy-main__cert--link"], ["href", "https://azure.microsoft.com/en-us/", "target", "_blank", 1, "sy-main__cert--link"], [1, "sy-text__size--sm"], ["href", "https://amigoscode.com/", "target", "_blank", 1, "sy-main__cert--link"], ["id", "skills", 1, "sy-main__section"], [1, "col-xs-12", "col-md-6", "sy-main__card--container"], ["data-aos", "zoom-in", 1, "sy-main__card"], [1, "sy-main__card--title"], [1, "sy-main__card--content"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "95%"], ["role", "progressbar", "aria-valuenow", "90", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "90%"], ["role", "progressbar", "aria-valuenow", "80", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "80%"], ["role", "progressbar", "aria-valuenow", "85", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "85%"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "75%"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "65", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "65%"], ["id", "about", 1, "sy-main__section"], [1, "sy-main__about--container"], ["href", "assets/files/shinji-yumikura-resume-2021.pdf", "download", "", 1, "sy-main__resume"], [1, "sy-main__hr"], [1, "sy-main__social"], ["src", "assets/icons/linkedin-logo.png", "alt", "linkedin", 1, "sy-main__social--icon", 3, "click"], ["src", "assets/icons/github-logo.png", "alt", "github", 1, "sy-main__social--icon", 3, "click"], ["src", "assets/icons/instagram-logo.png", "alt", "instagram", 1, "sy-main__social--icon", 3, "click"], [1, "sy-main__footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " I'm a Web developer, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " and I make awesome applications! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_img_click_9_listener() { return ctx.scrollTo(ctx.Section.EXPERIENCE); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mzd-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mzd-timeline-content", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mzd-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Bachelor of Science in Electronics Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Polytechnic University of the Philippines - Manila / 2014 - 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "I acquired my bachelor's degree at Polytechnic University of the Philippines - Manila. From then on, I studied & learned different technologies I am interested with and I know will be helpful to start my professional career. Gotta start that fire!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mzd-timeline-content", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Junior Quality Assurance Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "FFUFM Inc. / 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "My first job in the Software world! I worked as a Software QA and was exposed in Agile Software development cycle. I mostly handled Manual/Automated QA related tasks for Web and Mobile platform.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mzd-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mzd-timeline-content", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Junior Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "FFUFM Inc. / 2019 - present");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "As I keep on studying interesting & nerdy things, I got to experience and develop the real stuff! I developed applications mainly for Web platform and from there keeps on improving and learning latest standards in the tech industry, gotta keep that fire burning!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mzd-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Responsive Web Design Certification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "freeCodeCamp - December 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Responsive Web Design Certification, developer certification, representing approximately 300 hours of coursework.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Link to certificate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "hr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "JavaScript Modern ES6 - 2020 - The Complete Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Udemy - June 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "This course was about JavaScript basics to advance concepts. It also tackled the general idea of Web development and how can JavaScript can greatly help in giving life to modern applications.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Link to certificate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "hr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "RxJS 101");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Udemy - June 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "This course is about deep dive in Reactive Programming and the use of Observables in modern applications.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Link to certificate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "hr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Microsoft Certified: Azure Fundamentals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Microsoft - December 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Passed Microsoft Certified: Azure Fundamentals examination issued by Microsoft which was about basic DevOps and Cloud computing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Certificate available upon request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "hr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Getting started with Spring Boot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "amigoscode - March 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Getting started with Spring boot framework basics with Java. Learning Spring Boot annotations, MVC, Dependency injection etc., PostgreSQL and how Spring Boot works as a backend in general");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Certificate available upon request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "hr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "JavaScript/TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "RxJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Object-oriented Programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Front-end Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "CSS/SCSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "BEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Back-end Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "NodeJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "ExpressJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "NoSQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Software Architecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Model-View-Container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Reactive Architecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Service Oriented");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Hi my name is Shinji,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "I have a degree in Electronics Engineering from Polytechnic University of the Philippines - Manila, where I got first exposed in latest technologies and trends used in the industry. It helped me mold my interests overtime and now, ended up with the fast emerging world of Softwares!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Currently, I work as a full-time Junior Web Developer at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "FFUF Manila Inc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, ". Where I help solve problems and develop web applications for our clients. I mainly use Angular framework for front-end applications, while also applying the best coding practices and architecture which also helps me deepen and improve my knowledge in Computer Science in general.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "For the most of the time, aside from watching or reading tutorials in tech, I try develop small applications just to enchance my skills in development, having the goal in mind of trying to improve and be the best in everything that I do!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Download my Resume!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "hr", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_img_click_219_listener() { return ctx.navigateTo(ctx.Link.LINKEDIN); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_img_click_220_listener() { return ctx.navigateTo(ctx.Link.GITHUB); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_img_click_221_listener() { return ctx.navigateTo(ctx.Link.INSTAGRAM); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "footer", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.currentYear, " Shinji Yumikura");
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_5__["MzdTimelineComponent"], ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_5__["MzdTimelineContentComponent"], ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_5__["MzdIconComponent"]], styles: [".sy-main[_ngcontent-%COMP%] {\n  background-color: #F0F0F0;\n  color: #495057;\n}\n.sy-main__ellipse[_ngcontent-%COMP%] {\n  position: relative;\n  -webkit-clip-path: ellipse(130% 70% at 50% 10%);\n          clip-path: ellipse(130% 70% at 50% 10%);\n  height: 100vh;\n  background: #3bde9d;\n  background: linear-gradient(0deg, #38e49f 16%, #1dc674 53%, #00afa1 100%);\n}\n@media screen and (min-width: 576px) {\n  .sy-main__ellipse[_ngcontent-%COMP%] {\n    -webkit-clip-path: ellipse(90% 70% at 50% 10%);\n            clip-path: ellipse(90% 70% at 50% 10%);\n  }\n}\n.sy-main__chevron[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 44%;\n  bottom: 22%;\n}\n.sy-main__chevron[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n@media screen and (min-width: 576px) {\n  .sy-main__chevron[_ngcontent-%COMP%] {\n    left: 48%;\n  }\n}\n.sy-main__content[_ngcontent-%COMP%] {\n  padding: 11rem 3rem;\n}\n.sy-main__content--desc[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 35px;\n  font-size: 22px;\n}\n.sy-main__content--header[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n@media screen and (min-width: 576px) {\n  .sy-main__content--header[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\n.sy-main__content--title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 300;\n}\n@media screen and (min-width: 576px) {\n  .sy-main__content[_ngcontent-%COMP%] {\n    padding: 16rem 10rem;\n  }\n}\n.sy-main__section[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n}\n.sy-main__section--container[_ngcontent-%COMP%] {\n  height: calc(100% - 5vh);\n  width: 100%;\n  padding: 3rem 1rem;\n}\n@media screen and (min-width: 576px) {\n  .sy-main__section--container[_ngcontent-%COMP%] {\n    padding: 5rem 3rem;\n  }\n}\n.sy-main__icon[_ngcontent-%COMP%] {\n  width: 24px;\n  position: absolute;\n  left: -5px;\n  top: -3px;\n}\n.sy-main__card[_ngcontent-%COMP%] {\n  border-radius: 15px 50px 30px;\n  box-shadow: 0px 2px 5px 1px rgba(73, 80, 87, 0.7);\n  height: 100%;\n  padding: 16px;\n}\n.sy-main__card--container[_ngcontent-%COMP%] {\n  min-height: 350px;\n  padding: 20px;\n}\n.sy-main__card--title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.sy-main__cert--bg[_ngcontent-%COMP%] {\n  background: #3bde9d;\n  background: linear-gradient(180deg, #38e49f 16%, #1dc674 53%, #00afa1 100%);\n}\n.sy-main__cert--container[_ngcontent-%COMP%] {\n  padding: 20px;\n  position: relative;\n  min-height: 300px;\n}\n.sy-main__cert--title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.sy-main__cert--hr[_ngcontent-%COMP%] {\n  border-top: 2px solid rgba(0, 0, 0, 0.2);\n  position: absolute;\n  bottom: -10px;\n  width: 90%;\n}\n.sy-main__cert--link[_ngcontent-%COMP%]:hover {\n  color: #F0F0F0;\n}\n.sy-main__about--container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  width: 90%;\n}\n@media screen and (min-width: 576px) {\n  .sy-main__about--container[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n.sy-main__social[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 60px;\n}\n.sy-main__social--icon[_ngcontent-%COMP%] {\n  width: 42px;\n  transition: all 300ms ease;\n}\n.sy-main__social--icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transform: scale(1.2);\n}\n@media screen and (min-width: 576px) {\n  .sy-main__social[_ngcontent-%COMP%] {\n    margin-top: 150px;\n  }\n}\n.sy-main__hr[_ngcontent-%COMP%] {\n  border-top: 2px solid rgba(0, 0, 0, 0.2);\n}\n.sy-main__footer[_ngcontent-%COMP%] {\n  min-height: 8vh;\n  background-color: #495057;\n  color: #F0F0F0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sy-main__resume[_ngcontent-%COMP%] {\n  color: #36e49a;\n  text-align: center;\n  margin-top: 40px;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFx0aGVtZS1jb25maWcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHlCQ0ZXO0VER1gsY0NMYTtBREdmO0FBSUU7RUFDRSxrQkFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5RUFBQTtBQUZKO0FBS0k7RUFSRjtJQVNJLDhDQUFBO1lBQUEsc0NBQUE7RUFGSjtBQUNGO0FBS0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBSEo7QUFLSTtFQUNFLGVBQUE7QUFITjtBQU1JO0VBVEY7SUFVSSxTQUFBO0VBSEo7QUFDRjtBQU1FO0VBQ0UsbUJBQUE7QUFKSjtBQU1JO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUpOO0FBT0k7RUFDRSxpQkFBQTtBQUxOO0FBT007RUFIRjtJQUlJLGVBQUE7RUFKTjtBQUNGO0FBT0k7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBTE47QUFRSTtFQXRCRjtJQXVCSSxvQkFBQTtFQUxKO0FBQ0Y7QUFRRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTko7QUFRSTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBTk47QUFRTTtFQUxGO0lBTUksa0JBQUE7RUFMTjtBQUNGO0FBU0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQVBKO0FBVUU7RUFDRSw2QkFBQTtFQUdBLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFSSjtBQVVJO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FBUk47QUFXSTtFQUNFLGtCQUFBO0FBVE47QUFjSTtFQUNFLG1CQUFBO0VBQ0EsMkVBQUE7QUFaTjtBQWVJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFiTjtBQWdCSTtFQUNFLG1CQUFBO0FBZE47QUFpQkk7RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFmTjtBQW1CTTtFQUNFLGNDN0hLO0FENEdiO0FBdUJJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFyQk47QUF1Qk07RUFORjtJQU9JLFVBQUE7RUFwQk47QUFDRjtBQXdCRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBdEJKO0FBd0JJO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0FBdEJOO0FBd0JNO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FBdEJSO0FBMEJJO0VBZkY7SUFnQkksaUJBQUE7RUF2Qko7QUFDRjtBQTBCRTtFQUNFLHdDQUFBO0FBeEJKO0FBMkJFO0VBQ0UsZUFBQTtFQUNBLHlCQzNLVztFRDRLWCxjQzFLUztFRDJLVCxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXpCSjtBQTRCRTtFQUNFLGNDL0tNO0VEZ0xOLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQTFCSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9hc3NldHMvc2Nzcy9jb25maWdcIjtcclxuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3Njc3MvdGhlbWUtY29uZmlnXCI7XHJcblxyXG4uI3sgJHN0eWxlLXByZWZpeCB9LW1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1wcmltYXJ5O1xyXG4gIGNvbG9yOiAkZm9udC1wcmltYXJ5O1xyXG5cclxuICAmX19lbGxpcHNlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNsaXAtcGF0aDogZWxsaXBzZSgxMzAlIDcwJSBhdCA1MCUgMTAlKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTksMjIyLDE1Nyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg1NiwyMjgsMTU5LDEpIDE2JSwgcmdiYSgyOSwxOTgsMTE2LDEpIDUzJSwgcmdiYSgwLDE3NSwxNjEsMSkgMTAwJSk7XHJcblxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSg5MCUgNzAlIGF0IDUwJSAxMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY2hldnJvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0NCU7XHJcbiAgICBib3R0b206IDIyJTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgIGxlZnQ6IDQ4JTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTFyZW0gM3JlbTtcclxuXHJcbiAgICAmLS1kZXNjIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuXHJcbiAgICAmLS1oZWFkZXIge1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi0tdGl0bGUge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgcGFkZGluZzogMTZyZW0gMTByZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19zZWN0aW9uIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgJi0tY29udGFpbmVyIHtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1dmgpO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogM3JlbSAxcmVtO1xyXG5cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICBwYWRkaW5nOiA1cmVtIDNyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2ljb24ge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtNXB4O1xyXG4gICAgdG9wOiAtM3B4O1xyXG4gIH1cclxuXHJcbiAgJl9fY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDUwcHggMzBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCA1cHggMXB4IHJnYmEoNzMsODAsODcsMC43KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCA1cHggMXB4IHJnYmEoNzMsODAsODcsMC43KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDFweCByZ2JhKDczLDgwLDg3LDAuNyk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICAgICYtLWNvbnRhaW5lciB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtLXRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY2VydCB7XHJcbiAgICAmLS1iZyB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYig1OSwyMjIsMTU3KTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg1NiwyMjgsMTU5LDEpIDE2JSwgcmdiYSgyOSwxOTgsMTE2LDEpIDUzJSwgcmdiYSgwLDE3NSwxNjEsMSkgMTAwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgJi0tY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLS10aXRsZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi0taHIge1xyXG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcblxyXG4gICAgJi0tbGluayB7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYmctcHJpbWFyeTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fYWJvdXQge1xyXG4gICAgJi0tY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3NvY2lhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG5cclxuICAgICYtLWljb24ge1xyXG4gICAgICB3aWR0aDogNDJweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19ociB7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgJl9fZm9vdGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDh2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRmb250LXByaW1hcnk7XHJcbiAgICBjb2xvcjogJGJnLXByaW1hcnk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fcmVzdW1lIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG59IiwiJGZvbnQtcHJpbWFyeTogIzQ5NTA1NztcclxuXHJcbiRiZy1wcmltYXJ5OiAjRjBGMEYwO1xyXG5cclxuJHByaW1hcnk6ICMzNmU0OWE7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "THAY":
/*!**********************************************!*\
  !*** ./src/app/shared/enums/section.enum.ts ***!
  \**********************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
var Section;
(function (Section) {
    Section["EXPERIENCE"] = "#experience";
    Section["TOP"] = "#top";
    Section["SKILLS"] = "#skills";
    Section["CERTIFICATION"] = "#certifications";
    Section["ABOUT"] = "#about";
})(Section || (Section = {}));


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aF9I":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "duUz":
/*!********************************************!*\
  !*** ./src/app/shared/enums/links.enum.ts ***!
  \********************************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
var Link;
(function (Link) {
    Link["LINKEDIN"] = "https://www.linkedin.com/in/shinji-yumikura-682097163/";
    Link["INSTAGRAM"] = "https://www.instagram.com/planetaryshinji/";
    Link["GITHUB"] = "https://github.com/jinzai07";
})(Link || (Link = {}));


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map