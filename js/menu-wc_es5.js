'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">@megrulad-ge/backend-service documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/ActivityModule.html\" data-type=\"entity-link\" >ActivityModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-ActivityModule-3117f37bdeb4435305b4a7dbd5ae87c333c322bbcc6e7bd93ae8a7c8fef873472eac4ea7a2aa016b1a041601c33ee277ca58e34a830699d4dac2cb10d5954e96"' : 'data-bs-target="#xs-injectables-links-module-ActivityModule-3117f37bdeb4435305b4a7dbd5ae87c333c322bbcc6e7bd93ae8a7c8fef873472eac4ea7a2aa016b1a041601c33ee277ca58e34a830699d4dac2cb10d5954e96"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-ActivityModule-3117f37bdeb4435305b4a7dbd5ae87c333c322bbcc6e7bd93ae8a7c8fef873472eac4ea7a2aa016b1a041601c33ee277ca58e34a830699d4dac2cb10d5954e96"' : 'id="xs-injectables-links-module-ActivityModule-3117f37bdeb4435305b4a7dbd5ae87c333c322bbcc6e7bd93ae8a7c8fef873472eac4ea7a2aa016b1a041601c33ee277ca58e34a830699d4dac2cb10d5954e96"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/ActivityService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ActivityService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ConfigModule.html\" data-type=\"entity-link\" >ConfigModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DatabaseModule.html\" data-type=\"entity-link\" >DatabaseModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DictionaryModule.html\" data-type=\"entity-link\" >DictionaryModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-DictionaryModule-8ea547202fcb9c5ef9818b3d2b601df904b6a106e1977c2775092025d83c95f5af6154208033982ef1a840d2a26b872514619b29f5401352cc109448e7d6c112"' : 'data-bs-target="#xs-controllers-links-module-DictionaryModule-8ea547202fcb9c5ef9818b3d2b601df904b6a106e1977c2775092025d83c95f5af6154208033982ef1a840d2a26b872514619b29f5401352cc109448e7d6c112"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-DictionaryModule-8ea547202fcb9c5ef9818b3d2b601df904b6a106e1977c2775092025d83c95f5af6154208033982ef1a840d2a26b872514619b29f5401352cc109448e7d6c112"' : 'id="xs-controllers-links-module-DictionaryModule-8ea547202fcb9c5ef9818b3d2b601df904b6a106e1977c2775092025d83c95f5af6154208033982ef1a840d2a26b872514619b29f5401352cc109448e7d6c112"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/DictionaryController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DictionaryController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-DictionaryModule-8ea547202fcb9c5ef9818b3d2b601df904b6a106e1977c2775092025d83c95f5af6154208033982ef1a840d2a26b872514619b29f5401352cc109448e7d6c112"' : 'data-bs-target="#xs-injectables-links-module-DictionaryModule-8ea547202fcb9c5ef9818b3d2b601df904b6a106e1977c2775092025d83c95f5af6154208033982ef1a840d2a26b872514619b29f5401352cc109448e7d6c112"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-DictionaryModule-8ea547202fcb9c5ef9818b3d2b601df904b6a106e1977c2775092025d83c95f5af6154208033982ef1a840d2a26b872514619b29f5401352cc109448e7d6c112"' : 'id="xs-injectables-links-module-DictionaryModule-8ea547202fcb9c5ef9818b3d2b601df904b6a106e1977c2775092025d83c95f5af6154208033982ef1a840d2a26b872514619b29f5401352cc109448e7d6c112"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/DictionaryService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DictionaryService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HealthModule.html\" data-type=\"entity-link\" >HealthModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-HealthModule-2572c50d23ab05ceabc5336a7cacad813c192e71c5663cf9a255c58a86ea3e97e929f22bce17d5a18d34713719da671fb20b0edcddfe7b0eda96cca404eaf084"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-2572c50d23ab05ceabc5336a7cacad813c192e71c5663cf9a255c58a86ea3e97e929f22bce17d5a18d34713719da671fb20b0edcddfe7b0eda96cca404eaf084"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-HealthModule-2572c50d23ab05ceabc5336a7cacad813c192e71c5663cf9a255c58a86ea3e97e929f22bce17d5a18d34713719da671fb20b0edcddfe7b0eda96cca404eaf084"' : 'id="xs-controllers-links-module-HealthModule-2572c50d23ab05ceabc5336a7cacad813c192e71c5663cf9a255c58a86ea3e97e929f22bce17d5a18d34713719da671fb20b0edcddfe7b0eda96cca404eaf084"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/HealthController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HealthController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/RequestModule.html\" data-type=\"entity-link\" >RequestModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SearchModule.html\" data-type=\"entity-link\" >SearchModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-SearchModule-209c7cc46e27a3adb7eca7810811c26f3bcf85f281f2773a7eb61a28682d0ff269e8ce3294a9d316899ad7ce08c8d00ec943d12524583dd92c3e591c5f976a66"' : 'data-bs-target="#xs-controllers-links-module-SearchModule-209c7cc46e27a3adb7eca7810811c26f3bcf85f281f2773a7eb61a28682d0ff269e8ce3294a9d316899ad7ce08c8d00ec943d12524583dd92c3e591c5f976a66"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-SearchModule-209c7cc46e27a3adb7eca7810811c26f3bcf85f281f2773a7eb61a28682d0ff269e8ce3294a9d316899ad7ce08c8d00ec943d12524583dd92c3e591c5f976a66"' : 'id="xs-controllers-links-module-SearchModule-209c7cc46e27a3adb7eca7810811c26f3bcf85f281f2773a7eb61a28682d0ff269e8ce3294a9d316899ad7ce08c8d00ec943d12524583dd92c3e591c5f976a66"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/SearchController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SearchController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SeederModule.html\" data-type=\"entity-link\" >SeederModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-SeederModule-123e08eaf7c497418279699d36c87fccc24df2232aa13599899bbe208a718687c4384d4f751e3db5e68bc9cf250f46c2152716f54d77b73eb1ee0a09635bfd9f"' : 'data-bs-target="#xs-injectables-links-module-SeederModule-123e08eaf7c497418279699d36c87fccc24df2232aa13599899bbe208a718687c4384d4f751e3db5e68bc9cf250f46c2152716f54d77b73eb1ee0a09635bfd9f"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-SeederModule-123e08eaf7c497418279699d36c87fccc24df2232aa13599899bbe208a718687c4384d4f751e3db5e68bc9cf250f46c2152716f54d77b73eb1ee0a09635bfd9f"' : 'id="xs-injectables-links-module-SeederModule-123e08eaf7c497418279699d36c87fccc24df2232aa13599899bbe208a718687c4384d4f751e3db5e68bc9cf250f46c2152716f54d77b73eb1ee0a09635bfd9f"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AddDefaultValuesForDevelopment.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AddDefaultValuesForDevelopment</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/SeederService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SeederService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SetupModule.html\" data-type=\"entity-link\" >SetupModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/TranslationModule.html\" data-type=\"entity-link\" >TranslationModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-TranslationModule-333df44625dc765f7c544483f6527538d5534087ed1712e92a3595746cab2d9364cd6e2aa547628e39a51d5362b22c6552cf5d495917f83ac55433b5edc8e18e"' : 'data-bs-target="#xs-controllers-links-module-TranslationModule-333df44625dc765f7c544483f6527538d5534087ed1712e92a3595746cab2d9364cd6e2aa547628e39a51d5362b22c6552cf5d495917f83ac55433b5edc8e18e"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-TranslationModule-333df44625dc765f7c544483f6527538d5534087ed1712e92a3595746cab2d9364cd6e2aa547628e39a51d5362b22c6552cf5d495917f83ac55433b5edc8e18e"' : 'id="xs-controllers-links-module-TranslationModule-333df44625dc765f7c544483f6527538d5534087ed1712e92a3595746cab2d9364cd6e2aa547628e39a51d5362b22c6552cf5d495917f83ac55433b5edc8e18e"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/TranslationController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TranslationController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-TranslationModule-333df44625dc765f7c544483f6527538d5534087ed1712e92a3595746cab2d9364cd6e2aa547628e39a51d5362b22c6552cf5d495917f83ac55433b5edc8e18e"' : 'data-bs-target="#xs-injectables-links-module-TranslationModule-333df44625dc765f7c544483f6527538d5534087ed1712e92a3595746cab2d9364cd6e2aa547628e39a51d5362b22c6552cf5d495917f83ac55433b5edc8e18e"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-TranslationModule-333df44625dc765f7c544483f6527538d5534087ed1712e92a3595746cab2d9364cd6e2aa547628e39a51d5362b22c6552cf5d495917f83ac55433b5edc8e18e"' : 'id="xs-injectables-links-module-TranslationModule-333df44625dc765f7c544483f6527538d5534087ed1712e92a3595746cab2d9364cd6e2aa547628e39a51d5362b22c6552cf5d495917f83ac55433b5edc8e18e"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/TranslationService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TranslationService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#entities-links"' : 'data-bs-target="#xs-entities-links"', ">\n                                <span class=\"icon ion-ios-apps\"></span>\n                                <span>Entities</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"entities/Activity.html\" data-type=\"entity-link\" >Activity</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/Dictionary.html\" data-type=\"entity-link\" >Dictionary</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/Seed.html\" data-type=\"entity-link\" >Seed</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/Translation.html\" data-type=\"entity-link\" >Translation</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#classes-links"' : 'data-bs-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/CorsException.html\" data-type=\"entity-link\" >CorsException</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateDictionaryRequest.html\" data-type=\"entity-link\" >CreateDictionaryRequest</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateDictionaryResponse.html\" data-type=\"entity-link\" >CreateDictionaryResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateTranslationRequest.html\" data-type=\"entity-link\" >CreateTranslationRequest</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateTranslationRequestParam.html\" data-type=\"entity-link\" >CreateTranslationRequestParam</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateTranslationResponse.html\" data-type=\"entity-link\" >CreateTranslationResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DeleteDictionaryRequestParam.html\" data-type=\"entity-link\" >DeleteDictionaryRequestParam</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DeleteTranslationRequestParam.html\" data-type=\"entity-link\" >DeleteTranslationRequestParam</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Dictionary.html\" data-type=\"entity-link\" >Dictionary</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/EntityException.html\" data-type=\"entity-link\" >EntityException</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Env.html\" data-type=\"entity-link\" >Env</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ErrorResponse.html\" data-type=\"entity-link\" >ErrorResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/FetchDictionaryRequestParam.html\" data-type=\"entity-link\" >FetchDictionaryRequestParam</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/FetchDictionaryResponse.html\" data-type=\"entity-link\" >FetchDictionaryResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/FetchTranslationResponse.html\" data-type=\"entity-link\" >FetchTranslationResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/HttpExceptionsFilter.html\" data-type=\"entity-link\" >HttpExceptionsFilter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/SearchDictionaryRequestParam.html\" data-type=\"entity-link\" >SearchDictionaryRequestParam</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TimestampsEntity.html\" data-type=\"entity-link\" >TimestampsEntity</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Translation.html\" data-type=\"entity-link\" >Translation</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TranslationProperty.html\" data-type=\"entity-link\" >TranslationProperty</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateDictionaryRequest.html\" data-type=\"entity-link\" >UpdateDictionaryRequest</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateDictionaryRequestParam.html\" data-type=\"entity-link\" >UpdateDictionaryRequestParam</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateTranslationRequest.html\" data-type=\"entity-link\" >UpdateTranslationRequest</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateTranslationRequestParam.html\" data-type=\"entity-link\" >UpdateTranslationRequestParam</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links"' : 'data-bs-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/ExceptionInterceptor.html\" data-type=\"entity-link\" >ExceptionInterceptor</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/RequestInterceptor.html\" data-type=\"entity-link\" >RequestInterceptor</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/RequestService.html\" data-type=\"entity-link\" >RequestService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/Seeds.html\" data-type=\"entity-link\" >Seeds</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interfaces-links"' : 'data-bs-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/DictionaryCreated.html\" data-type=\"entity-link\" >DictionaryCreated</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DictionaryDeleted.html\" data-type=\"entity-link\" >DictionaryDeleted</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DictionaryUpdated.html\" data-type=\"entity-link\" >DictionaryUpdated</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/TimestampsInterface.html\" data-type=\"entity-link\" >TimestampsInterface</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#miscellaneous-links"' : 'data-bs-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));