"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 7);
}([function (e, t) {
  var n;

  n = function () {
    return this;
  }();

  try {
    n = n || new Function("return this")();
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }

  e.exports = n;
}, function (e, t, n) {}, function (e, t) {
  !function (t) {
    "use strict";

    var n,
        r = Object.prototype,
        o = r.hasOwnProperty,
        i = "function" == typeof Symbol ? Symbol : {},
        s = i.iterator || "@@iterator",
        a = i.asyncIterator || "@@asyncIterator",
        l = i.toStringTag || "@@toStringTag",
        c = "object" == _typeof(e),
        u = t.regeneratorRuntime;

    if (u) c && (e.exports = u);else {
      (u = t.regeneratorRuntime = c ? e.exports : {}).wrap = b;
      var h = "suspendedStart",
          d = "suspendedYield",
          p = "executing",
          f = "completed",
          m = {},
          y = {};

      y[s] = function () {
        return this;
      };

      var _ = Object.getPrototypeOf,
          v = _ && _(_(M([])));

      v && v !== r && o.call(v, s) && (y = v);
      var g = N.prototype = E.prototype = Object.create(y);
      S.prototype = g.constructor = N, N.constructor = S, N[l] = S.displayName = "GeneratorFunction", u.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === S || "GeneratorFunction" === (t.displayName || t.name));
      }, u.mark = function (e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, N) : (e.__proto__ = N, l in e || (e[l] = "GeneratorFunction")), e.prototype = Object.create(g), e;
      }, u.awrap = function (e) {
        return {
          __await: e
        };
      }, C(x.prototype), x.prototype[a] = function () {
        return this;
      }, u.AsyncIterator = x, u.async = function (e, t, n, r) {
        var o = new x(b(e, t, n, r));
        return u.isGeneratorFunction(t) ? o : o.next().then(function (e) {
          return e.done ? e.value : o.next();
        });
      }, C(g), g[l] = "Generator", g[s] = function () {
        return this;
      }, g.toString = function () {
        return "[object Generator]";
      }, u.keys = function (e) {
        var t = [];

        for (var n in e) {
          t.push(n);
        }

        return t.reverse(), function n() {
          for (; t.length;) {
            var r = t.pop();
            if (r in e) return n.value = r, n.done = !1, n;
          }

          return n.done = !0, n;
        };
      }, u.values = M, D.prototype = {
        constructor: D,
        reset: function reset(e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(P), !e) for (var t in this) {
            "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n);
          }
        },
        stop: function stop() {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(e) {
          if (this.done) throw e;
          var t = this;

          function r(r, o) {
            return a.type = "throw", a.arg = e, t.next = r, o && (t.method = "next", t.arg = n), !!o;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var s = this.tryEntries[i],
                a = s.completion;
            if ("root" === s.tryLoc) return r("end");

            if (s.tryLoc <= this.prev) {
              var l = o.call(s, "catchLoc"),
                  c = o.call(s, "finallyLoc");

              if (l && c) {
                if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                if (this.prev < s.finallyLoc) return r(s.finallyLoc);
              } else if (l) {
                if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
              } else {
                if (!c) throw new Error("try statement without catch or finally");
                if (this.prev < s.finallyLoc) return r(s.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n];

            if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
              var i = r;
              break;
            }
          }

          i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
          var s = i ? i.completion : {};
          return s.type = e, s.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, m) : this.complete(s);
        },
        complete: function complete(e, t) {
          if ("throw" === e.type) throw e.arg;
          return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), m;
        },
        finish: function finish(e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), P(n), m;
          }
        },
        "catch": function _catch(e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];

            if (n.tryLoc === e) {
              var r = n.completion;

              if ("throw" === r.type) {
                var o = r.arg;
                P(n);
              }

              return o;
            }
          }

          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e, t, r) {
          return this.delegate = {
            iterator: M(e),
            resultName: t,
            nextLoc: r
          }, "next" === this.method && (this.arg = n), m;
        }
      };
    }

    function b(e, t, n, r) {
      var o = t && _instanceof(t.prototype, E) ? t : E,
          i = Object.create(o.prototype),
          s = new D(r || []);
      return i._invoke = function (e, t, n) {
        var r = h;
        return function (o, i) {
          if (r === p) throw new Error("Generator is already running");

          if (r === f) {
            if ("throw" === o) throw i;
            return L();
          }

          for (n.method = o, n.arg = i;;) {
            var s = n.delegate;

            if (s) {
              var a = T(s, n);

              if (a) {
                if (a === m) continue;
                return a;
              }
            }

            if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
              if (r === h) throw r = f, n.arg;
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            r = p;
            var l = w(e, t, n);

            if ("normal" === l.type) {
              if (r = n.done ? f : d, l.arg === m) continue;
              return {
                value: l.arg,
                done: n.done
              };
            }

            "throw" === l.type && (r = f, n.method = "throw", n.arg = l.arg);
          }
        };
      }(e, n, s), i;
    }

    function w(e, t, n) {
      try {
        return {
          type: "normal",
          arg: e.call(t, n)
        };
      } catch (e) {
        return {
          type: "throw",
          arg: e
        };
      }
    }

    function E() {}

    function S() {}

    function N() {}

    function C(e) {
      ["next", "throw", "return"].forEach(function (t) {
        e[t] = function (e) {
          return this._invoke(t, e);
        };
      });
    }

    function x(e) {
      var t;

      this._invoke = function (n, r) {
        function i() {
          return new Promise(function (t, i) {
            !function t(n, r, i, s) {
              var a = w(e[n], e, r);

              if ("throw" !== a.type) {
                var l = a.arg,
                    c = l.value;
                return c && "object" == _typeof(c) && o.call(c, "__await") ? Promise.resolve(c.__await).then(function (e) {
                  t("next", e, i, s);
                }, function (e) {
                  t("throw", e, i, s);
                }) : Promise.resolve(c).then(function (e) {
                  l.value = e, i(l);
                }, s);
              }

              s(a.arg);
            }(n, r, t, i);
          });
        }

        return t = t ? t.then(i, i) : i();
      };
    }

    function T(e, t) {
      var r = e.iterator[t.method];

      if (r === n) {
        if (t.delegate = null, "throw" === t.method) {
          if (e.iterator["return"] && (t.method = "return", t.arg = n, T(e, t), "throw" === t.method)) return m;
          t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return m;
      }

      var o = w(r, e.iterator, t.arg);
      if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, m;
      var i = o.arg;
      return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, m) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, m);
    }

    function O(e) {
      var t = {
        tryLoc: e[0]
      };
      1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
    }

    function P(e) {
      var t = e.completion || {};
      t.type = "normal", delete t.arg, e.completion = t;
    }

    function D(e) {
      this.tryEntries = [{
        tryLoc: "root"
      }], e.forEach(O, this), this.reset(!0);
    }

    function M(e) {
      if (e) {
        var t = e[s];
        if (t) return t.call(e);
        if ("function" == typeof e.next) return e;

        if (!isNaN(e.length)) {
          var r = -1,
              i = function t() {
            for (; ++r < e.length;) {
              if (o.call(e, r)) return t.value = e[r], t.done = !1, t;
            }

            return t.value = n, t.done = !0, t;
          };

          return i.next = i;
        }
      }

      return {
        next: L
      };
    }

    function L() {
      return {
        value: n,
        done: !0
      };
    }
  }(function () {
    return this;
  }() || Function("return this")());
}, function (e, t, n) {
  (function (e, t) {
    /**
    @license @nocompile
    Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    (function () {
      "use strict";

      var n;

      function r(e) {
        var t = 0;
        return function () {
          return t < e.length ? {
            done: !1,
            value: e[t++]
          } : {
            done: !0
          };
        };
      }

      function o(e) {
        var t = "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
        return t ? t.call(e) : {
          next: r(e)
        };
      }

      function i(e) {
        for (var t, n = []; !(t = e.next()).done;) {
          n.push(t.value);
        }

        return n;
      }

      var s = "undefined" != typeof window && window === this ? this : void 0 !== e && null != e ? e : this,
          a = "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, t, n) {
        e != Array.prototype && e != Object.prototype && (e[t] = n.value);
      };

      function l() {
        l = function l() {}, s.Symbol || (s.Symbol = d);
      }

      function c(e, t) {
        this.a = e, a(this, "description", {
          configurable: !0,
          writable: !0,
          value: t
        });
      }

      c.prototype.toString = function () {
        return this.a;
      };

      var u,
          h,
          d = (u = 0, function e(t) {
        if (_instanceof(this, e)) throw new TypeError("Symbol is not a constructor");
        return new c("jscomp_symbol_" + (t || "") + "_" + u++, t);
      });

      function p() {
        l();
        var e = s.Symbol.iterator;
        e || (e = s.Symbol.iterator = s.Symbol("Symbol.iterator")), "function" != typeof Array.prototype[e] && a(Array.prototype, e, {
          configurable: !0,
          writable: !0,
          value: function value() {
            return function (e) {
              return p(), (e = {
                next: e
              })[s.Symbol.iterator] = function () {
                return this;
              }, e;
            }(r(this));
          }
        }), p = function p() {};
      }

      if ("function" == typeof Object.setPrototypeOf) h = Object.setPrototypeOf;else {
        var f;

        e: {
          var m = {};

          try {
            m.__proto__ = {
              Fa: !0
            }, f = m.Fa;
            break e;
          } catch (Ge) {}

          f = !1;
        }

        h = f ? function (e, t) {
          if (e.__proto__ = t, e.__proto__ !== t) throw new TypeError(e + " is not extensible");
          return e;
        } : null;
      }
      var y = h;

      function _() {
        this.f = !1, this.b = null, this.U = void 0, this.a = 1, this.F = 0, this.c = null;
      }

      function v(e) {
        if (e.f) throw new TypeError("Generator is already running");
        e.f = !0;
      }

      function g(e, t) {
        e.c = {
          Ia: t,
          Ma: !0
        }, e.a = e.F;
      }

      function b(e, t) {
        return e.a = 3, {
          value: t
        };
      }

      function w(e) {
        this.a = new _(), this.b = e;
      }

      function E(e, t, n, r) {
        try {
          var o = t.call(e.a.b, n);
          if (!_instanceof(o, Object)) throw new TypeError("Iterator result " + o + " is not an object");
          if (!o.done) return e.a.f = !1, o;
          var i = o.value;
        } catch (t) {
          return e.a.b = null, g(e.a, t), S(e);
        }

        return e.a.b = null, r.call(e.a, i), S(e);
      }

      function S(e) {
        for (; e.a.a;) {
          try {
            var t = e.b(e.a);
            if (t) return e.a.f = !1, {
              value: t.value,
              done: !1
            };
          } catch (t) {
            e.a.U = void 0, g(e.a, t);
          }
        }

        if (e.a.f = !1, e.a.c) {
          if (t = e.a.c, e.a.c = null, t.Ma) throw t.Ia;
          return {
            value: t["return"],
            done: !0
          };
        }

        return {
          value: void 0,
          done: !0
        };
      }

      function N(e) {
        this.next = function (t) {
          return v(e.a), e.a.b ? t = E(e, e.a.b.next, t, e.a.u) : (e.a.u(t), t = S(e)), t;
        }, this["throw"] = function (t) {
          return v(e.a), e.a.b ? t = E(e, e.a.b["throw"], t, e.a.u) : (g(e.a, t), t = S(e)), t;
        }, this["return"] = function (t) {
          return function (e, t) {
            v(e.a);
            var n = e.a.b;
            return n ? E(e, "return" in n ? n["return"] : function (e) {
              return {
                value: e,
                done: !0
              };
            }, t, e.a["return"]) : (e.a["return"](t), S(e));
          }(e, t);
        }, p(), this[Symbol.iterator] = function () {
          return this;
        };
      }

      function C(e, t) {
        return t = new N(new w(t)), y && y(t, e.prototype), t;
      }

      _.prototype.u = function (e) {
        this.U = e;
      }, _.prototype["return"] = function (e) {
        this.c = {
          "return": e
        }, this.a = this.F;
      }, Array.from || (Array.from = function (e) {
        return [].slice.call(e);
      }), Object.assign || (Object.assign = function (e) {
        for (var t, n = [].slice.call(arguments, 1), r = 0; r < n.length; r++) {
          if (t = n[r]) for (var o = e, i = t, s = Object.getOwnPropertyNames(i), a = 0; a < s.length; a++) {
            o[t = s[a]] = i[t];
          }
        }

        return e;
      }), function () {
        if ((t = document.createEvent("Event")).initEvent("foo", !0, !0), t.preventDefault(), !t.defaultPrevented) {
          var e = Event.prototype.preventDefault;

          Event.prototype.preventDefault = function () {
            this.cancelable && (e.call(this), Object.defineProperty(this, "defaultPrevented", {
              get: function get() {
                return !0;
              },
              configurable: !0
            }));
          };
        }

        var t,
            n = /Trident/.test(navigator.userAgent);

        if (!window.Event || n && "function" != typeof window.Event) {
          var r = window.Event;

          if (window.Event = function (e, t) {
            t = t || {};
            var n = document.createEvent("Event");
            return n.initEvent(e, !!t.bubbles, !!t.cancelable), n;
          }, r) {
            for (var o in r) {
              window.Event[o] = r[o];
            }

            window.Event.prototype = r.prototype;
          }
        }

        if ((!window.CustomEvent || n && "function" != typeof window.CustomEvent) && (window.CustomEvent = function (e, t) {
          t = t || {};
          var n = document.createEvent("CustomEvent");
          return n.initCustomEvent(e, !!t.bubbles, !!t.cancelable, t.detail), n;
        }, window.CustomEvent.prototype = window.Event.prototype), !window.MouseEvent || n && "function" != typeof window.MouseEvent) {
          if (n = window.MouseEvent, window.MouseEvent = function (e, t) {
            t = t || {};
            var n = document.createEvent("MouseEvent");
            return n.initMouseEvent(e, !!t.bubbles, !!t.cancelable, t.view || window, t.detail, t.screenX, t.screenY, t.clientX, t.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, t.button, t.relatedTarget), n;
          }, n) for (var i in n) {
            window.MouseEvent[i] = n[i];
          }
          window.MouseEvent.prototype = n.prototype;
        }
      }(), function () {
        function e() {}

        function t(e, t) {
          if (!e.childNodes.length) return [];

          switch (e.nodeType) {
            case Node.DOCUMENT_NODE:
              return m.call(e, t);

            case Node.DOCUMENT_FRAGMENT_NODE:
              return y.call(e, t);

            default:
              return f.call(e, t);
          }
        }

        var n = "undefined" == typeof HTMLTemplateElement,
            r = !_instanceof(document.createDocumentFragment().cloneNode(), DocumentFragment),
            o = !1;
        /Trident/.test(navigator.userAgent) && function () {
          function e(e, t) {
            if (_instanceof(e, DocumentFragment)) for (var r; r = e.firstChild;) {
              n.call(this, r, t);
            } else n.call(this, e, t);
            return e;
          }

          o = !0;
          var t = Node.prototype.cloneNode;
          Node.prototype.cloneNode = function (e) {
            return e = t.call(this, e), _instanceof(this, DocumentFragment) && (e.__proto__ = DocumentFragment.prototype), e;
          }, DocumentFragment.prototype.querySelectorAll = HTMLElement.prototype.querySelectorAll, DocumentFragment.prototype.querySelector = HTMLElement.prototype.querySelector, Object.defineProperties(DocumentFragment.prototype, {
            nodeType: {
              get: function get() {
                return Node.DOCUMENT_FRAGMENT_NODE;
              },
              configurable: !0
            },
            localName: {
              get: function get() {},
              configurable: !0
            },
            nodeName: {
              get: function get() {
                return "#document-fragment";
              },
              configurable: !0
            }
          });
          var n = Node.prototype.insertBefore;
          Node.prototype.insertBefore = e;
          var r = Node.prototype.appendChild;

          Node.prototype.appendChild = function (t) {
            return _instanceof(t, DocumentFragment) ? e.call(this, t, null) : r.call(this, t), t;
          };

          var i = Node.prototype.removeChild,
              s = Node.prototype.replaceChild;
          Node.prototype.replaceChild = function (t, n) {
            return _instanceof(t, DocumentFragment) ? (e.call(this, t, n), i.call(this, n)) : s.call(this, t, n), n;
          }, Document.prototype.createDocumentFragment = function () {
            var e = this.createElement("df");
            return e.__proto__ = DocumentFragment.prototype, e;
          };
          var a = Document.prototype.importNode;

          Document.prototype.importNode = function (e, t) {
            return t = a.call(this, e, t || !1), _instanceof(e, DocumentFragment) && (t.__proto__ = DocumentFragment.prototype), t;
          };
        }();

        var i = Node.prototype.cloneNode,
            s = Document.prototype.createElement,
            a = Document.prototype.importNode,
            l = Node.prototype.removeChild,
            c = Node.prototype.appendChild,
            u = Node.prototype.replaceChild,
            h = DOMParser.prototype.parseFromString,
            d = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML") || {
          get: function get() {
            return this.innerHTML;
          },
          set: function set(e) {
            this.innerHTML = e;
          }
        },
            p = Object.getOwnPropertyDescriptor(window.Node.prototype, "childNodes") || {
          get: function get() {
            return this.childNodes;
          }
        },
            f = Element.prototype.querySelectorAll,
            m = Document.prototype.querySelectorAll,
            y = DocumentFragment.prototype.querySelectorAll,
            _ = function () {
          if (!n) {
            var e = document.createElement("template"),
                t = document.createElement("template");
            return t.content.appendChild(document.createElement("div")), e.content.appendChild(t), 0 === (e = e.cloneNode(!0)).content.childNodes.length || 0 === e.content.firstChild.content.childNodes.length || r;
          }
        }();

        if (n) {
          var v = document.implementation.createHTMLDocument("template"),
              g = !0,
              b = document.createElement("style");
          b.textContent = "template{display:none;}";
          var w = document.head;
          w.insertBefore(b, w.firstElementChild), e.prototype = Object.create(HTMLElement.prototype);
          var E = !document.createElement("div").hasOwnProperty("innerHTML");

          e.S = function (t) {
            if (!t.content && t.namespaceURI === document.documentElement.namespaceURI) {
              t.content = v.createDocumentFragment();

              for (var n; n = t.firstChild;) {
                c.call(t.content, n);
              }

              if (E) t.__proto__ = e.prototype;else if (t.cloneNode = function (t) {
                return e.b(this, t);
              }, g) try {
                N(t), C(t);
              } catch (e) {
                g = !1;
              }
              e.a(t.content);
            }
          };

          var S = {
            option: ["select"],
            thead: ["table"],
            col: ["colgroup", "table"],
            tr: ["tbody", "table"],
            th: ["tr", "tbody", "table"],
            td: ["tr", "tbody", "table"]
          },
              N = function N(t) {
            Object.defineProperty(t, "innerHTML", {
              get: function get() {
                return M(this);
              },
              set: function set(t) {
                var n = S[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(t) || ["", ""])[1].toLowerCase()];
                if (n) for (var r = 0; r < n.length; r++) {
                  t = "<" + n[r] + ">" + t + "</" + n[r] + ">";
                }

                for (v.body.innerHTML = t, e.a(v); this.content.firstChild;) {
                  l.call(this.content, this.content.firstChild);
                }

                if (t = v.body, n) for (r = 0; r < n.length; r++) {
                  t = t.lastChild;
                }

                for (; t.firstChild;) {
                  c.call(this.content, t.firstChild);
                }
              },
              configurable: !0
            });
          },
              C = function C(e) {
            Object.defineProperty(e, "outerHTML", {
              get: function get() {
                return "<template>" + this.innerHTML + "</template>";
              },
              set: function set(e) {
                if (!this.parentNode) throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");

                for (v.body.innerHTML = e, e = this.ownerDocument.createDocumentFragment(); v.body.firstChild;) {
                  c.call(e, v.body.firstChild);
                }

                u.call(this.parentNode, e, this);
              },
              configurable: !0
            });
          };

          N(e.prototype), C(e.prototype), e.a = function (n) {
            for (var r, o = 0, i = (n = t(n, "template")).length; o < i && (r = n[o]); o++) {
              e.S(r);
            }
          }, document.addEventListener("DOMContentLoaded", function () {
            e.a(document);
          }), Document.prototype.createElement = function () {
            var t = s.apply(this, arguments);
            return "template" === t.localName && e.S(t), t;
          }, DOMParser.prototype.parseFromString = function () {
            var t = h.apply(this, arguments);
            return e.a(t), t;
          }, Object.defineProperty(HTMLElement.prototype, "innerHTML", {
            get: function get() {
              return M(this);
            },
            set: function set(t) {
              d.set.call(this, t), e.a(this);
            },
            configurable: !0,
            enumerable: !0
          });

          var x = /[&\u00A0"]/g,
              T = /[&\u00A0<>]/g,
              O = function O(e) {
            switch (e) {
              case "&":
                return "&amp;";

              case "<":
                return "&lt;";

              case ">":
                return "&gt;";

              case '"':
                return "&quot;";

              case " ":
                return "&nbsp;";
            }
          },
              P = (b = function b(e) {
            for (var t = {}, n = 0; n < e.length; n++) {
              t[e[n]] = !0;
            }

            return t;
          })("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
              D = b("style script xmp iframe noembed noframes plaintext noscript".split(" ")),
              M = function M(e, t) {
            "template" === e.localName && (e = e.content);

            for (var n, r = "", o = t ? t(e) : p.get.call(e), i = 0, s = o.length; i < s && (n = o[i]); i++) {
              e: {
                var a = n,
                    l = e,
                    c = t;

                switch (a.nodeType) {
                  case Node.ELEMENT_NODE:
                    for (var u = a.localName, h = "<" + u, d = a.attributes, f = 0; l = d[f]; f++) {
                      h += " " + l.name + '="' + l.value.replace(x, O) + '"';
                    }

                    h += ">", a = P[u] ? h : h + M(a, c) + "</" + u + ">";
                    break e;

                  case Node.TEXT_NODE:
                    a = a.data, a = l && D[l.localName] ? a : a.replace(T, O);
                    break e;

                  case Node.COMMENT_NODE:
                    a = "\x3c!--" + a.data + "--\x3e";
                    break e;

                  default:
                    throw window.console.error(a), Error("not implemented");
                }
              }

              r += a;
            }

            return r;
          };
        }

        if (n || _) {
          e.b = function (e, t) {
            var n = i.call(e, !1);
            return this.S && this.S(n), t && (c.call(n.content, i.call(e.content, !0)), L(n.content, e.content)), n;
          };

          var L = function L(n, r) {
            if (r.querySelectorAll && 0 !== (r = t(r, "template")).length) for (var o, i, s = 0, a = (n = t(n, "template")).length; s < a; s++) {
              i = r[s], o = n[s], e && e.S && e.S(i), u.call(o.parentNode, A.call(i, !0), o);
            }
          },
              A = Node.prototype.cloneNode = function (t) {
            if (!o && r && _instanceof(this, DocumentFragment)) {
              if (!t) return this.ownerDocument.createDocumentFragment();
              var n = k.call(this.ownerDocument, this, !0);
            } else n = this.nodeType === Node.ELEMENT_NODE && "template" === this.localName && this.namespaceURI == document.documentElement.namespaceURI ? e.b(this, t) : i.call(this, t);

            return t && L(n, this), n;
          },
              k = Document.prototype.importNode = function (n, r) {
            if (r = r || !1, "template" === n.localName) return e.b(n, r);
            var o = a.call(this, n, r);

            if (r) {
              L(o, n), n = t(o, 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');

              for (var i, l = 0; l < n.length; l++) {
                i = n[l], (r = s.call(document, "script")).textContent = i.textContent;

                for (var c, h = i.attributes, d = 0; d < h.length; d++) {
                  c = h[d], r.setAttribute(c.name, c.value);
                }

                u.call(i.parentNode, r, i);
              }
            }

            return o;
          };
        }

        n && (window.HTMLTemplateElement = e);
      }();
      var x = setTimeout;

      function T() {}

      function O(e) {
        if (!_instanceof(this, O)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this.K = 0, this.pa = !1, this.w = void 0, this.V = [], k(e, this);
      }

      function P(e, t) {
        for (; 3 === e.K;) {
          e = e.w;
        }

        0 === e.K ? e.V.push(t) : (e.pa = !0, j(function () {
          var n = 1 === e.K ? t.Oa : t.Pa;
          if (null === n) (1 === e.K ? D : M)(t.na, e.w);else {
            try {
              var r = n(e.w);
            } catch (e) {
              return void M(t.na, e);
            }

            D(t.na, r);
          }
        }));
      }

      function D(e, t) {
        try {
          if (t === e) throw new TypeError("A promise cannot be resolved with itself.");

          if (t && ("object" == _typeof(t) || "function" == typeof t)) {
            var n = t.then;
            if (_instanceof(t, O)) return e.K = 3, e.w = t, void L(e);
            if ("function" == typeof n) return void k(function (e, t) {
              return function () {
                e.apply(t, arguments);
              };
            }(n, t), e);
          }

          e.K = 1, e.w = t, L(e);
        } catch (t) {
          M(e, t);
        }
      }

      function M(e, t) {
        e.K = 2, e.w = t, L(e);
      }

      function L(e) {
        2 === e.K && 0 === e.V.length && j(function () {
          e.pa || "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e.w);
        });

        for (var t = 0, n = e.V.length; t < n; t++) {
          P(e, e.V[t]);
        }

        e.V = null;
      }

      function A(e, t, n) {
        this.Oa = "function" == typeof e ? e : null, this.Pa = "function" == typeof t ? t : null, this.na = n;
      }

      function k(e, t) {
        var n = !1;

        try {
          e(function (e) {
            n || (n = !0, D(t, e));
          }, function (e) {
            n || (n = !0, M(t, e));
          });
        } catch (e) {
          n || (n = !0, M(t, e));
        }
      }

      O.prototype["catch"] = function (e) {
        return this.then(null, e);
      }, O.prototype.then = function (e, t) {
        var n = new this.constructor(T);
        return P(this, new A(e, t, n)), n;
      }, O.prototype["finally"] = function (e) {
        var t = this.constructor;
        return this.then(function (n) {
          return t.resolve(e()).then(function () {
            return n;
          });
        }, function (n) {
          return t.resolve(e()).then(function () {
            return t.reject(n);
          });
        });
      };

      var j = "function" == typeof t && function (e) {
        t(e);
      } || function (e) {
        x(e, 0);
      };

      if (!window.Promise) {
        window.Promise = O, O.prototype.then = O.prototype.then, O.all = function (e) {
          return new O(function (t, n) {
            function r(e, s) {
              try {
                if (s && ("object" == _typeof(s) || "function" == typeof s)) {
                  var a = s.then;
                  if ("function" == typeof a) return void a.call(s, function (t) {
                    r(e, t);
                  }, n);
                }

                o[e] = s, 0 == --i && t(o);
              } catch (e) {
                n(e);
              }
            }

            if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
            var o = Array.prototype.slice.call(e);
            if (0 === o.length) return t([]);

            for (var i = o.length, s = 0; s < o.length; s++) {
              r(s, o[s]);
            }
          });
        }, O.race = function (e) {
          return new O(function (t, n) {
            for (var r = 0, o = e.length; r < o; r++) {
              e[r].then(t, n);
            }
          });
        }, O.resolve = function (e) {
          return e && "object" == _typeof(e) && e.constructor === O ? e : new O(function (t) {
            t(e);
          });
        }, O.reject = function (e) {
          return new O(function (t, n) {
            n(e);
          });
        };
        var R = document.createTextNode(""),
            I = [];
        new MutationObserver(function () {
          for (var e = I.length, t = 0; t < e; t++) {
            I[t]();
          }

          I.splice(0, e);
        }).observe(R, {
          characterData: !0
        }), j = function j(e) {
          I.push(e), R.textContent = 0 < R.textContent.length ? "" : "a";
        };
      }

      !function (t, n) {
        if (!(n in t)) {
          var r = _typeof(e) == _typeof(r) ? window : e,
              o = 0,
              i = "" + Math.random(),
              s = "__symbol@@" + i,
              a = t.getOwnPropertyNames,
              l = t.getOwnPropertyDescriptor,
              c = t.create,
              u = t.keys,
              h = t.freeze || t,
              d = t.defineProperty,
              p = t.defineProperties,
              f = l(t, "getOwnPropertyNames"),
              m = t.prototype,
              y = m.hasOwnProperty,
              _ = m.propertyIsEnumerable,
              v = m.toString,
              g = function g(e, t, n) {
            y.call(e, s) || d(e, s, {
              enumerable: !1,
              configurable: !1,
              writable: !1,
              value: {}
            }), e[s]["@@" + t] = n;
          },
              b = function b(e, t) {
            var n = c(e);
            return a(t).forEach(function (e) {
              N.call(t, e) && D(n, e, t[e]);
            }), n;
          },
              w = function w() {},
              E = function E(e) {
            return e != s && !y.call(T, e);
          },
              S = function S(e) {
            return e != s && y.call(T, e);
          },
              N = function N(e) {
            var t = "" + e;
            return S(t) ? y.call(this, t) && this[s]["@@" + t] : _.call(this, e);
          },
              C = function C(e) {
            return d(m, e, {
              enumerable: !1,
              configurable: !0,
              get: w,
              set: function set(t) {
                L(this, e, {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: t
                }), g(this, e, !0);
              }
            }), h(T[e] = d(t(e), "constructor", O));
          },
              x = function x(e) {
            if (this && this !== r) throw new TypeError("Symbol is not a constructor");
            return C("__symbol:".concat(e || "", i, ++o));
          },
              T = c(null),
              O = {
            value: x
          },
              P = function P(e) {
            return T[e];
          },
              D = function D(e, t, n) {
            var r = "" + t;

            if (S(r)) {
              if (t = L, n.enumerable) {
                var o = c(n);
                o.enumerable = !1;
              } else o = n;

              t(e, r, o), g(e, r, !!n.enumerable);
            } else d(e, t, n);

            return e;
          },
              M = function M(e) {
            return a(e).filter(S).map(P);
          };

          f.value = D, d(t, "defineProperty", f), f.value = M, d(t, n, f), f.value = function (e) {
            return a(e).filter(E);
          }, d(t, "getOwnPropertyNames", f), f.value = function (e, t) {
            var n = M(t);
            return n.length ? u(t).concat(n).forEach(function (n) {
              N.call(t, n) && D(e, n, t[n]);
            }) : p(e, t), e;
          }, d(t, "defineProperties", f), f.value = N, d(m, "propertyIsEnumerable", f), f.value = x, d(r, "Symbol", f), f.value = function (e) {
            return (e = "__symbol:".concat("__symbol:", e, i)) in m ? T[e] : C(e);
          }, d(x, "for", f), f.value = function (e) {
            if (E(e)) throw new TypeError(e + " is not a symbol");
            return y.call(T, e) ? e.slice(20, -i.length) : void 0;
          }, d(x, "keyFor", f), f.value = function (e, t) {
            var n = l(e, t);
            return n && S(t) && (n.enumerable = N.call(e, t)), n;
          }, d(t, "getOwnPropertyDescriptor", f), f.value = function (e, t) {
            return 1 === arguments.length ? c(e) : b(e, t);
          }, d(t, "create", f), f.value = function () {
            var e = v.call(this);
            return "[object String]" === e && S(this) ? "[object Symbol]" : e;
          }, d(m, "toString", f);

          try {
            var L = c(d({}, "__symbol:", {
              get: function get() {
                return d(this, "__symbol:", {
                  value: !1
                })["__symbol:"];
              }
            }))["__symbol:"] || d;
          } catch (e) {
            L = function L(e, t, n) {
              var r = l(m, t);
              delete m[t], d(e, t, n), d(m, t, r);
            };
          }
        }
      }(Object, "getOwnPropertySymbols"), function (e) {
        var t,
            n = e.defineProperty,
            r = e.prototype,
            o = r.toString;
        "iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function (i) {
          if (!(i in Symbol)) switch (n(Symbol, i, {
            value: Symbol(i)
          }), i) {
            case "toStringTag":
              (t = e.getOwnPropertyDescriptor(r, "toString")).value = function () {
                var e = o.call(this),
                    t = this[Symbol.toStringTag];
                return void 0 === t ? e : "[object " + t + "]";
              }, n(r, "toString", t);
          }
        });
      }(Object, Symbol), function (e, t, n) {
        function r() {
          return this;
        }

        t[e] || (t[e] = function () {
          var t = 0,
              n = this,
              o = {
            next: function next() {
              var e = n.length <= t;
              return e ? {
                done: e
              } : {
                done: e,
                value: n[t++]
              };
            }
          };
          return o[e] = r, o;
        }), n[e] || (n[e] = function () {
          var t = String.fromCodePoint,
              n = this,
              o = 0,
              i = n.length,
              s = {
            next: function next() {
              var e = i <= o,
                  r = e ? "" : t(n.codePointAt(o));
              return o += r.length, e ? {
                done: e
              } : {
                done: e,
                value: r
              };
            }
          };
          return s[e] = r, s;
        });
      }(Symbol.iterator, Array.prototype, String.prototype);
      var F = Object.prototype.toString;
      Object.prototype.toString = function () {
        return void 0 === this ? "[object Undefined]" : null === this ? "[object Null]" : F.call(this);
      }, Object.keys = function (e) {
        return Object.getOwnPropertyNames(e).filter(function (t) {
          return (t = Object.getOwnPropertyDescriptor(e, t)) && t.enumerable;
        });
      };
      var H = window.Symbol.iterator;
      String.prototype[H] && String.prototype.codePointAt || (String.prototype[H] = function e() {
        var t,
            n = this;
        return C(e, function (e) {
          if (1 == e.a && (t = 0), 3 != e.a) return t < n.length ? e = b(e, n[t]) : (e.a = 0, e = void 0), e;
          t++, e.a = 2;
        });
      }), Set.prototype[H] || (Set.prototype[H] = function e() {
        var t,
            n,
            r = this;
        return C(e, function (e) {
          if (1 == e.a && (t = [], r.forEach(function (e) {
            t.push(e);
          }), n = 0), 3 != e.a) return n < t.length ? e = b(e, t[n]) : (e.a = 0, e = void 0), e;
          n++, e.a = 2;
        });
      }), Map.prototype[H] || (Map.prototype[H] = function e() {
        var t,
            n,
            r = this;
        return C(e, function (e) {
          if (1 == e.a && (t = [], r.forEach(function (e, n) {
            t.push([n, e]);
          }), n = 0), 3 != e.a) return n < t.length ? e = b(e, t[n]) : (e.a = 0, e = void 0), e;
          n++, e.a = 2;
        });
      }), window.WebComponents = window.WebComponents || {
        flags: {}
      };
      var U = document.querySelector('script[src*="webcomponents-bundle"]'),
          B = /wc-(.+)/,
          V = {};

      if (!V.noOpts) {
        if (location.search.slice(1).split("&").forEach(function (e) {
          var t;
          (e = e.split("="))[0] && (t = e[0].match(B)) && (V[t[1]] = e[1] || !0);
        }), U) for (var q = 0, z = void 0; z = U.attributes[q]; q++) {
          "src" !== z.name && (V[z.name] = z.value || !0);
        }

        if (V.log && V.log.split) {
          var W = V.log.split(",");
          V.log = {}, W.forEach(function (e) {
            V.log[e] = !0;
          });
        } else V.log = {};
      }

      window.WebComponents.flags = V;
      var G = V.shadydom;

      if (G) {
        window.ShadyDOM = window.ShadyDOM || {}, window.ShadyDOM.force = G;
        var J = V.noPatch;
        window.ShadyDOM.noPatch = "true" === J || J;
      }

      var K = V.register || V.ce;

      function $() {}

      function X(e) {
        return e.__shady || (e.__shady = new $()), e.__shady;
      }

      function Y(e) {
        return e && e.__shady;
      }

      K && window.customElements && (window.customElements.forcePolyfill = K), $.prototype.toJSON = function () {
        return {};
      };
      var Z = window.ShadyDOM || {};
      Z.Ka = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
      var Q = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");

      function ee(e) {
        return (e = Y(e)) && void 0 !== e.firstChild;
      }

      function te(e) {
        return _instanceof(e, ShadowRoot);
      }

      function ne(e) {
        return (e = (e = Y(e)) && e.root) && Dn(e);
      }

      Z.D = !!(Q && Q.configurable && Q.get), Z.ia = Z.force || !Z.Ka, Z.G = Z.noPatch || !1, Z.ma = Z.preferPerformance, Z.la = "on-demand" === Z.G, Z.ya = navigator.userAgent.match("Trident");
      var re = Element.prototype,
          oe = re.matches || re.matchesSelector || re.mozMatchesSelector || re.msMatchesSelector || re.oMatchesSelector || re.webkitMatchesSelector,
          ie = document.createTextNode(""),
          se = 0,
          ae = [];

      function le(e) {
        ae.push(e), ie.textContent = se++;
      }

      new MutationObserver(function () {
        for (; ae.length;) {
          try {
            ae.shift()();
          } catch (e) {
            throw ie.textContent = se++, e;
          }
        }
      }).observe(ie, {
        characterData: !0
      });
      var ce = !!document.contains;

      function ue(e, t) {
        for (; t;) {
          if (t == e) return !0;
          t = t.__shady_parentNode;
        }

        return !1;
      }

      function he(e) {
        for (var t = e.length - 1; 0 <= t; t--) {
          var n = e[t],
              r = n.getAttribute("id") || n.getAttribute("name");
          r && "length" !== r && isNaN(r) && (e[r] = n);
        }

        return e.item = function (t) {
          return e[t];
        }, e.namedItem = function (t) {
          if ("length" !== t && isNaN(t) && e[t]) return e[t];

          for (var n = o(e), r = n.next(); !r.done; r = n.next()) {
            if (((r = r.value).getAttribute("id") || r.getAttribute("name")) == t) return r;
          }

          return null;
        }, e;
      }

      function de(e) {
        var t = [];

        for (e = e.__shady_native_firstChild; e; e = e.__shady_native_nextSibling) {
          t.push(e);
        }

        return t;
      }

      function pe(e) {
        var t = [];

        for (e = e.__shady_firstChild; e; e = e.__shady_nextSibling) {
          t.push(e);
        }

        return t;
      }

      function fe(e, t, n) {
        if (n.configurable = !0, n.value) e[t] = n.value;else try {
          Object.defineProperty(e, t, n);
        } catch (e) {}
      }

      function me(e, t, n, r) {
        for (var o in n = void 0 === n ? "" : n, t) {
          r && 0 <= r.indexOf(o) || fe(e, n + o, t[o]);
        }
      }

      function ye(e, t) {
        for (var n in t) {
          n in e && fe(e, n, t[n]);
        }
      }

      function _e(e) {
        var t = {};
        return Object.getOwnPropertyNames(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }), t;
      }

      var ve,
          ge = [];

      function be(e) {
        ve || (ve = !0, le(we)), ge.push(e);
      }

      function we() {
        ve = !1;

        for (var e = !!ge.length; ge.length;) {
          ge.shift()();
        }

        return e;
      }

      function Ee() {
        this.a = !1, this.addedNodes = [], this.removedNodes = [], this.ba = new Set();
      }

      we.list = ge, Ee.prototype.flush = function () {
        if (this.a) {
          this.a = !1;
          var e = this.takeRecords();
          e.length && this.ba.forEach(function (t) {
            t(e);
          });
        }
      }, Ee.prototype.takeRecords = function () {
        if (this.addedNodes.length || this.removedNodes.length) {
          var e = [{
            addedNodes: this.addedNodes,
            removedNodes: this.removedNodes
          }];
          return this.addedNodes = [], this.removedNodes = [], e;
        }

        return [];
      };
      var Se = /[&\u00A0"]/g,
          Ne = /[&\u00A0<>]/g;

      function Ce(e) {
        switch (e) {
          case "&":
            return "&amp;";

          case "<":
            return "&lt;";

          case ">":
            return "&gt;";

          case '"':
            return "&quot;";

          case " ":
            return "&nbsp;";
        }
      }

      function xe(e) {
        for (var t = {}, n = 0; n < e.length; n++) {
          t[e[n]] = !0;
        }

        return t;
      }

      var Te = xe("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
          Oe = xe("style script xmp iframe noembed noframes plaintext noscript".split(" "));

      function Pe(e, t) {
        "template" === e.localName && (e = e.content);

        for (var n = "", r = t ? t(e) : e.childNodes, o = 0, i = r.length, s = void 0; o < i && (s = r[o]); o++) {
          e: {
            var a = s,
                l = e,
                c = t;

            switch (a.nodeType) {
              case Node.ELEMENT_NODE:
                for (var u, h = "<" + (l = a.localName), d = a.attributes, p = 0; u = d[p]; p++) {
                  h += " " + u.name + '="' + u.value.replace(Se, Ce) + '"';
                }

                h += ">", a = Te[l] ? h : h + Pe(a, c) + "</" + l + ">";
                break e;

              case Node.TEXT_NODE:
                a = a.data, a = l && Oe[l.localName] ? a : a.replace(Ne, Ce);
                break e;

              case Node.COMMENT_NODE:
                a = "\x3c!--" + a.data + "--\x3e";
                break e;

              default:
                throw window.console.error(a), Error("not implemented");
            }
          }

          n += a;
        }

        return n;
      }

      var De = Z.D,
          Me = {
        querySelector: function querySelector(e) {
          return this.__shady_native_querySelector(e);
        },
        querySelectorAll: function querySelectorAll(e) {
          return this.__shady_native_querySelectorAll(e);
        }
      },
          Le = {};

      function Ae(e) {
        Le[e] = function (t) {
          return t["__shady_native_" + e];
        };
      }

      function ke(e, t) {
        for (var n in me(e, t, "__shady_native_"), t) {
          Ae(n);
        }
      }

      function je(e, t) {
        t = void 0 === t ? [] : t;

        for (var n = 0; n < t.length; n++) {
          var r = t[n],
              o = Object.getOwnPropertyDescriptor(e, r);
          o && (Object.defineProperty(e, "__shady_native_" + r, o), o.value ? Me[r] || (Me[r] = o.value) : Ae(r));
        }
      }

      var Re = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
          Ie = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
          Fe = document.implementation.createHTMLDocument("inert");

      function He(e) {
        for (var t; t = e.__shady_native_firstChild;) {
          e.__shady_native_removeChild(t);
        }
      }

      var Ue = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
          Be = ["querySelector", "querySelectorAll"];

      var Ve = _e({
        get childNodes() {
          return this.__shady_childNodes;
        },

        get firstChild() {
          return this.__shady_firstChild;
        },

        get lastChild() {
          return this.__shady_lastChild;
        },

        get childElementCount() {
          return this.__shady_childElementCount;
        },

        get children() {
          return this.__shady_children;
        },

        get firstElementChild() {
          return this.__shady_firstElementChild;
        },

        get lastElementChild() {
          return this.__shady_lastElementChild;
        },

        get shadowRoot() {
          return this.__shady_shadowRoot;
        }

      }),
          qe = _e({
        get textContent() {
          return this.__shady_textContent;
        },

        set textContent(e) {
          this.__shady_textContent = e;
        },

        get innerHTML() {
          return this.__shady_innerHTML;
        },

        set innerHTML(e) {
          return this.__shady_innerHTML = e;
        }

      }),
          ze = _e({
        get parentElement() {
          return this.__shady_parentElement;
        },

        get parentNode() {
          return this.__shady_parentNode;
        },

        get nextSibling() {
          return this.__shady_nextSibling;
        },

        get previousSibling() {
          return this.__shady_previousSibling;
        },

        get nextElementSibling() {
          return this.__shady_nextElementSibling;
        },

        get previousElementSibling() {
          return this.__shady_previousElementSibling;
        },

        get className() {
          return this.__shady_className;
        },

        set className(e) {
          return this.__shady_className = e;
        }

      });

      function We(e) {
        for (var t in e) {
          var n = e[t];
          n && (n.enumerable = !1);
        }
      }

      We(Ve), We(qe), We(ze);

      var Ge,
          Je = Z.D || !0 === Z.G,
          Ke = Je ? function () {} : function (e) {
        var t = X(e);
        t.Aa || (t.Aa = !0, ye(e, ze));
      },
          $e = Je ? function () {} : function (e) {
        var t = X(e);
        t.za || (t.za = !0, ye(e, Ve), window.customElements && !Z.G || ye(e, qe));
      },
          Xe = "__eventWrappers" + Date.now(),
          Ye = (Ge = Object.getOwnPropertyDescriptor(Event.prototype, "composed")) ? function (e) {
        return Ge.get.call(e);
      } : null,
          Ze = function () {
        function e() {}

        var t = !1,
            n = {
          get capture() {
            return t = !0, !1;
          }

        };
        return window.addEventListener("test", e, n), window.removeEventListener("test", e, n), t;
      }();

      function Qe(e) {
        if (e && "object" == _typeof(e)) var t = !!e.capture,
            n = !!e.once,
            r = !!e.passive,
            o = e.O;else t = !!e, r = n = !1;
        return {
          wa: o,
          capture: t,
          once: n,
          passive: r,
          ua: Ze ? e : t
        };
      }

      var et = {
        blur: !0,
        focus: !0,
        focusin: !0,
        focusout: !0,
        click: !0,
        dblclick: !0,
        mousedown: !0,
        mouseenter: !0,
        mouseleave: !0,
        mousemove: !0,
        mouseout: !0,
        mouseover: !0,
        mouseup: !0,
        wheel: !0,
        beforeinput: !0,
        input: !0,
        keydown: !0,
        keyup: !0,
        compositionstart: !0,
        compositionupdate: !0,
        compositionend: !0,
        touchstart: !0,
        touchend: !0,
        touchmove: !0,
        touchcancel: !0,
        pointerover: !0,
        pointerenter: !0,
        pointerdown: !0,
        pointermove: !0,
        pointerup: !0,
        pointercancel: !0,
        pointerout: !0,
        pointerleave: !0,
        gotpointercapture: !0,
        lostpointercapture: !0,
        dragstart: !0,
        drag: !0,
        dragenter: !0,
        dragleave: !0,
        dragover: !0,
        drop: !0,
        dragend: !0,
        DOMActivate: !0,
        DOMFocusIn: !0,
        DOMFocusOut: !0,
        keypress: !0
      },
          tt = {
        DOMAttrModified: !0,
        DOMAttributeNameChanged: !0,
        DOMCharacterDataModified: !0,
        DOMElementNameChanged: !0,
        DOMNodeInserted: !0,
        DOMNodeInsertedIntoDocument: !0,
        DOMNodeRemoved: !0,
        DOMNodeRemovedFromDocument: !0,
        DOMSubtreeModified: !0
      };

      function nt(e) {
        return _instanceof(e, Node) ? e.__shady_getRootNode() : e;
      }

      function rt(e, t) {
        var n = [],
            r = e;

        for (e = nt(e); r;) {
          n.push(r), r = r.__shady_assignedSlot ? r.__shady_assignedSlot : r.nodeType === Node.DOCUMENT_FRAGMENT_NODE && r.host && (t || r !== e) ? r.host : r.__shady_parentNode;
        }

        return n[n.length - 1] === document && n.push(window), n;
      }

      function ot(e, t) {
        if (!te) return e;
        e = rt(e, !0);

        for (var n, r, o = 0, i = void 0, s = void 0; o < t.length; o++) {
          if ((r = nt(n = t[o])) !== i && (s = e.indexOf(r), i = r), !te(r) || -1 < s) return n;
        }
      }

      function it(e) {
        function t(t, n) {
          return (t = new e(t, n)).__composed = n && !!n.composed, t;
        }

        return t.__proto__ = e, t.prototype = e.prototype, t;
      }

      var st = {
        focus: !0,
        blur: !0
      };

      function at(e) {
        return e.__target !== e.target || e.__relatedTarget !== e.relatedTarget;
      }

      function lt(e, t, n) {
        if (n = t.__handlers && t.__handlers[e.type] && t.__handlers[e.type][n]) for (var r, o = 0; (r = n[o]) && (!at(e) || e.target !== e.relatedTarget) && (r.call(t, e), !e.__immediatePropagationStopped); o++) {
          ;
        }
      }

      function ct(e) {
        var t,
            n = e.composedPath();
        Object.defineProperty(e, "currentTarget", {
          get: function get() {
            return o;
          },
          configurable: !0
        });

        for (var r = n.length - 1; 0 <= r; r--) {
          var o = n[r];
          if (lt(e, o, "capture"), e.ea) return;
        }

        for (Object.defineProperty(e, "eventPhase", {
          get: function get() {
            return Event.AT_TARGET;
          }
        }), r = 0; r < n.length; r++) {
          var i = Y(o = n[r]);
          if (i = i && i.root, (0 === r || i && i === t) && (lt(e, o, "bubble"), o !== window && (t = o.__shady_getRootNode()), e.ea)) break;
        }
      }

      function ut(e, t, n, r, o, i) {
        for (var s = 0; s < e.length; s++) {
          var a = e[s],
              l = a.type,
              c = a.capture,
              u = a.once,
              h = a.passive;
          if (t === a.node && n === l && r === c && o === u && i === h) return s;
        }

        return -1;
      }

      function ht(e) {
        return we(), this.__shady_native_dispatchEvent(e);
      }

      function dt(e, t, n) {
        var r = Qe(n),
            o = r.capture,
            i = r.once,
            s = r.passive,
            a = r.wa;

        if (r = r.ua, t) {
          var l = _typeof(t);

          if (("function" === l || "object" === l) && ("object" !== l || t.handleEvent && "function" == typeof t.handleEvent)) {
            if (tt[e]) return this.__shady_native_addEventListener(e, t, r);
            var c = a || this;

            if (a = t[Xe]) {
              if (-1 < ut(a, c, e, o, i, s)) return;
            } else t[Xe] = [];

            a = function a(r) {
              if (i && this.__shady_removeEventListener(e, t, n), r.__target || mt(r), c !== this) {
                var o = Object.getOwnPropertyDescriptor(r, "currentTarget");
                Object.defineProperty(r, "currentTarget", {
                  get: function get() {
                    return c;
                  },
                  configurable: !0
                });
              }

              if (r.__previousCurrentTarget = r.currentTarget, (!te(c) && "slot" !== c.localName || -1 != r.composedPath().indexOf(c)) && (r.composed || -1 < r.composedPath().indexOf(c))) if (at(r) && r.target === r.relatedTarget) r.eventPhase === Event.BUBBLING_PHASE && r.stopImmediatePropagation();else if (r.eventPhase === Event.CAPTURING_PHASE || r.bubbles || r.target === c || _instanceof(c, Window)) {
                var s = "function" === l ? t.call(c, r) : t.handleEvent && t.handleEvent(r);
                return c !== this && (o ? (Object.defineProperty(r, "currentTarget", o), o = null) : delete r.currentTarget), s;
              }
            }, t[Xe].push({
              node: c,
              type: e,
              capture: o,
              once: i,
              passive: s,
              $a: a
            }), st[e] ? (this.__handlers = this.__handlers || {}, this.__handlers[e] = this.__handlers[e] || {
              capture: [],
              bubble: []
            }, this.__handlers[e][o ? "capture" : "bubble"].push(a)) : this.__shady_native_addEventListener(e, a, r);
          }
        }
      }

      function pt(e, t, n) {
        if (t) {
          var r = Qe(n);
          n = r.capture;
          var o = r.once,
              i = r.passive,
              s = r.wa;
          if (r = r.ua, tt[e]) return this.__shady_native_removeEventListener(e, t, r);
          var a = s || this;
          s = void 0;
          var l = null;

          try {
            l = t[Xe];
          } catch (e) {}

          l && -1 < (o = ut(l, a, e, n, o, i)) && (s = l.splice(o, 1)[0].$a, l.length || (t[Xe] = void 0)), this.__shady_native_removeEventListener(e, s || t, r), s && st[e] && this.__handlers && this.__handlers[e] && -1 < (t = (e = this.__handlers[e][n ? "capture" : "bubble"]).indexOf(s)) && e.splice(t, 1);
        }
      }

      var ft = _e({
        get composed() {
          return void 0 === this.__composed && (Ye ? this.__composed = "focusin" === this.type || "focusout" === this.type || Ye(this) : !1 !== this.isTrusted && (this.__composed = et[this.type])), this.__composed || !1;
        },

        composedPath: function composedPath() {
          return this.__composedPath || (this.__composedPath = rt(this.__target, this.composed)), this.__composedPath;
        },

        get target() {
          return ot(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
        },

        get relatedTarget() {
          return this.__relatedTarget ? (this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = rt(this.__relatedTarget, !0)), ot(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath)) : null;
        },

        stopPropagation: function stopPropagation() {
          Event.prototype.stopPropagation.call(this), this.ea = !0;
        },
        stopImmediatePropagation: function stopImmediatePropagation() {
          Event.prototype.stopImmediatePropagation.call(this), this.ea = this.__immediatePropagationStopped = !0;
        }
      });

      function mt(e) {
        if (e.__target = e.target, e.__relatedTarget = e.relatedTarget, Z.D) {
          var t = Object.getPrototypeOf(e);

          if (!t.hasOwnProperty("__shady_patchedProto")) {
            var n = Object.create(t);
            n.__shady_sourceProto = t, me(n, ft), t.__shady_patchedProto = n;
          }

          e.__proto__ = t.__shady_patchedProto;
        } else me(e, ft);
      }

      var yt = it(Event),
          _t = it(CustomEvent),
          vt = it(MouseEvent);

      var gt = Object.getOwnPropertyNames(Document.prototype).filter(function (e) {
        return "on" === e.substring(0, 2);
      });

      function bt(e, t) {
        return {
          index: e,
          X: [],
          aa: t
        };
      }

      function wt(e, t, n, r) {
        var o = 0,
            i = 0,
            s = 0,
            a = 0,
            l = Math.min(t - o, r - i);
        if (0 == o && 0 == i) e: {
          for (s = 0; s < l; s++) {
            if (e[s] !== n[s]) break e;
          }

          s = l;
        }

        if (t == e.length && r == n.length) {
          a = e.length;

          for (var c = n.length, u = 0; u < l - s && Et(e[--a], n[--c]);) {
            u++;
          }

          a = u;
        }

        if (i += s, r -= a, 0 == (t -= a) - (o += s) && 0 == r - i) return [];

        if (o == t) {
          for (t = bt(o, 0); i < r;) {
            t.X.push(n[i++]);
          }

          return [t];
        }

        if (i == r) return [bt(o, t - o)];

        for (r = r - (s = i) + 1, a = t - (l = o) + 1, t = Array(r), c = 0; c < r; c++) {
          t[c] = Array(a), t[c][0] = c;
        }

        for (c = 0; c < a; c++) {
          t[0][c] = c;
        }

        for (c = 1; c < r; c++) {
          for (u = 1; u < a; u++) {
            if (e[l + u - 1] === n[s + c - 1]) t[c][u] = t[c - 1][u - 1];else {
              var h = t[c - 1][u] + 1,
                  d = t[c][u - 1] + 1;
              t[c][u] = h < d ? h : d;
            }
          }
        }

        for (l = t.length - 1, s = t[0].length - 1, r = t[l][s], e = []; 0 < l || 0 < s;) {
          0 == l ? (e.push(2), s--) : 0 == s ? (e.push(3), l--) : (a = t[l - 1][s - 1], (h = (c = t[l - 1][s]) < (u = t[l][s - 1]) ? c < a ? c : a : u < a ? u : a) == a ? (a == r ? e.push(0) : (e.push(1), r = a), l--, s--) : h == c ? (e.push(3), l--, r = c) : (e.push(2), s--, r = u));
        }

        for (e.reverse(), t = void 0, l = [], s = 0; s < e.length; s++) {
          switch (e[s]) {
            case 0:
              t && (l.push(t), t = void 0), o++, i++;
              break;

            case 1:
              t || (t = bt(o, 0)), t.aa++, o++, t.X.push(n[i]), i++;
              break;

            case 2:
              t || (t = bt(o, 0)), t.aa++, o++;
              break;

            case 3:
              t || (t = bt(o, 0)), t.X.push(n[i]), i++;
          }
        }

        return t && l.push(t), l;
      }

      function Et(e, t) {
        return e === t;
      }

      var St = _e({
        dispatchEvent: ht,
        addEventListener: dt,
        removeEventListener: pt
      }),
          Nt = null;

      function Ct() {
        return Nt || (Nt = window.ShadyCSS && window.ShadyCSS.ScopingShim), Nt || null;
      }

      function xt(e, t, n) {
        var r = Ct();
        return !(!r || "class" !== t) && (r.setElementClass(e, n), !0);
      }

      function Tt(e, t) {
        var n = Ct();
        n && n.unscopeNode(e, t);
      }

      function Ot(e) {
        if (e.nodeType !== Node.ELEMENT_NODE) return "";
        var t = Ct();
        return t ? t.currentScopeForNode(e) : "";
      }

      function Pt(e, t) {
        if (e) for (e.nodeType === Node.ELEMENT_NODE && t(e), e = e.__shady_firstChild; e; e = e.__shady_nextSibling) {
          e.nodeType === Node.ELEMENT_NODE && Pt(e, t);
        }
      }

      var Dt = window.document,
          Mt = Z.ma,
          Lt = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
          At = Lt && Lt.get;

      function kt(e) {
        for (var t; t = e.__shady_firstChild;) {
          e.__shady_removeChild(t);
        }
      }

      function jt(e, t, n) {
        if (e = (e = Y(e)) && e.W) {
          if (t) if (t.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (var r = 0, o = t.childNodes.length; r < o; r++) {
            e.addedNodes.push(t.childNodes[r]);
          } else e.addedNodes.push(t);
          n && e.removedNodes.push(n), function (e) {
            e.a || (e.a = !0, le(function () {
              e.flush();
            }));
          }(e);
        }
      }

      var Rt = _e({
        get parentNode() {
          var e = Y(this);
          return void 0 !== (e = e && e.parentNode) ? e : this.__shady_native_parentNode;
        },

        get firstChild() {
          var e = Y(this);
          return void 0 !== (e = e && e.firstChild) ? e : this.__shady_native_firstChild;
        },

        get lastChild() {
          var e = Y(this);
          return void 0 !== (e = e && e.lastChild) ? e : this.__shady_native_lastChild;
        },

        get nextSibling() {
          var e = Y(this);
          return void 0 !== (e = e && e.nextSibling) ? e : this.__shady_native_nextSibling;
        },

        get previousSibling() {
          var e = Y(this);
          return void 0 !== (e = e && e.previousSibling) ? e : this.__shady_native_previousSibling;
        },

        get childNodes() {
          if (ee(this)) {
            var e = Y(this);

            if (!e.childNodes) {
              e.childNodes = [];

              for (var t = this.__shady_firstChild; t; t = t.__shady_nextSibling) {
                e.childNodes.push(t);
              }
            }

            var n = e.childNodes;
          } else n = this.__shady_native_childNodes;

          return n.item = function (e) {
            return n[e];
          }, n;
        },

        get parentElement() {
          var e = Y(this);
          return (e = e && e.parentNode) && e.nodeType !== Node.ELEMENT_NODE && (e = null), void 0 !== e ? e : this.__shady_native_parentElement;
        },

        get isConnected() {
          if (At && At.call(this)) return !0;
          if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
          var e = this.ownerDocument;

          if (ce) {
            if (e.__shady_native_contains(this)) return !0;
          } else if (e.documentElement && e.documentElement.__shady_native_contains(this)) return !0;

          for (e = this; e && !_instanceof(e, Document);) {
            e = e.__shady_parentNode || (te(e) ? e.host : void 0);
          }

          return !!(e && _instanceof(e, Document));
        },

        get textContent() {
          if (ee(this)) {
            for (var e = [], t = this.__shady_firstChild; t; t = t.__shady_nextSibling) {
              t.nodeType !== Node.COMMENT_NODE && e.push(t.__shady_textContent);
            }

            return e.join("");
          }

          return this.__shady_native_textContent;
        },

        set textContent(e) {
          switch (null == e && (e = ""), this.nodeType) {
            case Node.ELEMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
              if (!ee(this) && Z.D) {
                var t = this.__shady_firstChild;
                (t != this.__shady_lastChild || t && t.nodeType != Node.TEXT_NODE) && kt(this), this.__shady_native_textContent = e;
              } else kt(this), (0 < e.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(e));

              break;

            default:
              this.nodeValue = e;
          }
        },

        insertBefore: function insertBefore(e, t) {
          if (this.ownerDocument !== Dt && e.ownerDocument !== Dt) return this.__shady_native_insertBefore(e, t), e;
          if (e === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");

          if (t) {
            var n = Y(t);
            if (void 0 !== (n = n && n.parentNode) && n !== this || void 0 === n && t.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
          }

          if (t === e) return e;
          jt(this, e);
          var r = [],
              s = (n = kn(this)) ? n.host.localName : Ot(this),
              a = e.__shady_parentNode;

          if (a) {
            var l = Ot(e),
                c = !!n || !kn(e) || Mt && void 0 !== this.__noInsertionPoint;

            a.__shady_removeChild(e, c);
          }

          a = !0;
          var u = (!Mt || void 0 === e.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !function e(t, n) {
            var r = Ct();
            if (!r) return !0;

            if (t.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              for (r = !0, t = t.__shady_firstChild; t; t = t.__shady_nextSibling) {
                r = r && e(t, n);
              }

              return r;
            }

            return t.nodeType !== Node.ELEMENT_NODE || r.currentScopeForNode(t) === n;
          }(e, s),
              h = n && !e.__noInsertionPoint && (!Mt || e.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
          return (h || u) && (u && (l = l || Ot(e)), Pt(e, function (e) {
            if (h && "slot" === e.localName && r.push(e), u) {
              var t = l;
              Ct() && (t && Tt(e, t), (t = Ct()) && t.scopeNode(e, s));
            }
          })), r.length && (xn(n), n.c.push.apply(n.c, _instanceof(r, Array) ? r : i(o(r))), wn(n)), ee(this) && (function (e, t, n) {
            un(t, 2);
            var r = X(t);
            if (void 0 !== r.firstChild && (r.childNodes = null), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (e = e.__shady_native_firstChild; e; e = e.__shady_native_nextSibling) {
              hn(e, t, r, n);
            } else hn(e, t, r, n);
          }(e, this, t), n = Y(this), ne(this) ? (wn(n.root), a = !1) : n.root && (a = !1)), a ? (n = te(this) ? this.host : this, t ? (t = function e(t) {
            var n = t;
            return t && "slot" === t.localName && (n = (n = (n = Y(t)) && n.T) && n.length ? n[0] : e(t.__shady_nextSibling)), n;
          }(t), n.__shady_native_insertBefore(e, t)) : n.__shady_native_appendChild(e)) : e.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(e), e;
        },
        appendChild: function appendChild(e) {
          if (this != e || !te(e)) return this.__shady_insertBefore(e);
        },
        removeChild: function removeChild(e, t) {
          if (t = void 0 !== t && t, this.ownerDocument !== Dt) return this.__shady_native_removeChild(e);
          if (e.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + e);
          jt(this, null, e);

          var n = kn(e),
              r = n && function (e, t) {
            if (e.a) {
              Tn(e);
              var n,
                  r = e.b;

              for (n in r) {
                for (var o = r[n], i = 0; i < o.length; i++) {
                  var s = o[i];

                  if (ue(t, s)) {
                    o.splice(i, 1);
                    var a = e.a.indexOf(s);
                    if (0 <= a && (e.a.splice(a, 1), (a = Y(s.__shady_parentNode)) && a.Z && a.Z--), i--, s = Y(s), a = s.T) for (var l = 0; l < a.length; l++) {
                      var c = a[l],
                          u = c.__shady_native_parentNode;
                      u && u.__shady_native_removeChild(c);
                    }
                    s.T = [], s.assignedNodes = [], a = !0;
                  }
                }
              }

              return a;
            }
          }(n, e),
              o = Y(this);

          if (ee(this) && (function (e, t) {
            var n = X(e);
            t = X(t), e === t.firstChild && (t.firstChild = n.nextSibling), e === t.lastChild && (t.lastChild = n.previousSibling), e = n.previousSibling;
            var r = n.nextSibling;
            e && (X(e).nextSibling = r), r && (X(r).previousSibling = e), n.parentNode = n.previousSibling = n.nextSibling = void 0, void 0 !== t.childNodes && (t.childNodes = null);
          }(e, this), ne(this))) {
            wn(o.root);
            var i = !0;
          }

          if (Ct() && !t && n && e.nodeType !== Node.TEXT_NODE) {
            var s = Ot(e);
            Pt(e, function (e) {
              Tt(e, s);
            });
          }

          return function e(t) {
            var n = Y(t);
            if (n && void 0 !== n.da) for (n = t.__shady_firstChild; n; n = n.__shady_nextSibling) {
              e(n);
            }
            (t = Y(t)) && (t.da = void 0);
          }(e), n && ((t = this && "slot" === this.localName) && (i = !0), (r || t) && wn(n)), i || (i = te(this) ? this.host : this, (!o.root && "slot" !== e.localName || i === e.__shady_native_parentNode) && i.__shady_native_removeChild(e)), e;
        },
        replaceChild: function replaceChild(e, t) {
          return this.__shady_insertBefore(e, t), this.__shady_removeChild(t), e;
        },
        cloneNode: function cloneNode(e) {
          if ("template" == this.localName) return this.__shady_native_cloneNode(e);

          var t = this.__shady_native_cloneNode(!1);

          if (e && t.nodeType !== Node.ATTRIBUTE_NODE) {
            e = this.__shady_firstChild;

            for (var n; e; e = e.__shady_nextSibling) {
              n = e.__shady_cloneNode(!0), t.__shady_appendChild(n);
            }
          }

          return t;
        },
        getRootNode: function getRootNode(e) {
          if (this && this.nodeType) {
            var t = X(this),
                n = t.da;
            return void 0 === n && (te(this) ? (n = this, t.da = n) : (n = (n = this.__shady_parentNode) ? n.__shady_getRootNode(e) : this, document.documentElement.__shady_native_contains(this) && (t.da = n))), n;
          }
        },
        contains: function contains(e) {
          return ue(this, e);
        }
      }),
          It = _e({
        get assignedSlot() {
          var e = this.__shady_parentNode;
          return (e = e && e.__shady_shadowRoot) && En(e), (e = Y(this)) && e.assignedSlot || null;
        }

      });

      function Ft(e, t, n) {
        var r = [];
        return function e(t, n, r, o) {
          for (t = t.__shady_firstChild; t; t = t.__shady_nextSibling) {
            var i;

            if (i = t.nodeType === Node.ELEMENT_NODE) {
              var s = n,
                  a = r,
                  l = o,
                  c = s(i = t);
              c && l.push(i), a && a(c) ? i = c : (e(i, s, a, l), i = void 0);
            }

            if (i) break;
          }
        }(e, t, n, r), r;
      }

      var Ht = _e({
        get firstElementChild() {
          var e = Y(this);

          if (e && void 0 !== e.firstChild) {
            for (e = this.__shady_firstChild; e && e.nodeType !== Node.ELEMENT_NODE;) {
              e = e.__shady_nextSibling;
            }

            return e;
          }

          return this.__shady_native_firstElementChild;
        },

        get lastElementChild() {
          var e = Y(this);

          if (e && void 0 !== e.lastChild) {
            for (e = this.__shady_lastChild; e && e.nodeType !== Node.ELEMENT_NODE;) {
              e = e.__shady_previousSibling;
            }

            return e;
          }

          return this.__shady_native_lastElementChild;
        },

        get children() {
          return ee(this) ? he(Array.prototype.filter.call(pe(this), function (e) {
            return e.nodeType === Node.ELEMENT_NODE;
          })) : this.__shady_native_children;
        },

        get childElementCount() {
          var e = this.__shady_children;
          return e ? e.length : 0;
        }

      }),
          Ut = _e({
        querySelector: function querySelector(e) {
          return Ft(this, function (t) {
            return oe.call(t, e);
          }, function (e) {
            return !!e;
          })[0] || null;
        },
        querySelectorAll: function querySelectorAll(e, t) {
          if (t) {
            t = Array.prototype.slice.call(this.__shady_native_querySelectorAll(e));

            var n = this.__shady_getRootNode();

            return he(t.filter(function (e) {
              return e.__shady_getRootNode() == n;
            }));
          }

          return he(Ft(this, function (t) {
            return oe.call(t, e);
          }));
        }
      }),
          Bt = Z.ma && !Z.G ? Object.assign({}, Ht) : Ht;

      Object.assign(Ht, Ut);
      var Vt = window.document;

      function qt(e, t) {
        if ("slot" === t) ne(e = e.__shady_parentNode) && wn(Y(e).root);else if ("slot" === e.localName && "name" === t && (t = kn(e))) {
          if (t.a) {
            Tn(t);
            var n = e.Ba,
                r = On(e);

            if (r !== n) {
              var o = (n = t.b[n]).indexOf(e);
              0 <= o && n.splice(o, 1), (n = t.b[r] || (t.b[r] = [])).push(e), 1 < n.length && (t.b[r] = Pn(n));
            }
          }

          wn(t);
        }
      }

      var zt = _e({
        get previousElementSibling() {
          var e = Y(this);

          if (e && void 0 !== e.previousSibling) {
            for (e = this.__shady_previousSibling; e && e.nodeType !== Node.ELEMENT_NODE;) {
              e = e.__shady_previousSibling;
            }

            return e;
          }

          return this.__shady_native_previousElementSibling;
        },

        get nextElementSibling() {
          var e = Y(this);

          if (e && void 0 !== e.nextSibling) {
            for (e = this.__shady_nextSibling; e && e.nodeType !== Node.ELEMENT_NODE;) {
              e = e.__shady_nextSibling;
            }

            return e;
          }

          return this.__shady_native_nextElementSibling;
        },

        get slot() {
          return this.getAttribute("slot");
        },

        set slot(e) {
          this.__shady_setAttribute("slot", e);
        },

        get className() {
          return this.getAttribute("class") || "";
        },

        set className(e) {
          this.__shady_setAttribute("class", e);
        },

        setAttribute: function setAttribute(e, t) {
          this.ownerDocument !== Vt ? this.__shady_native_setAttribute(e, t) : xt(this, e, t) || (this.__shady_native_setAttribute(e, t), qt(this, e));
        },
        removeAttribute: function removeAttribute(e) {
          this.ownerDocument !== Vt ? this.__shady_native_removeAttribute(e) : xt(this, e, "") ? "" === this.getAttribute(e) && this.__shady_native_removeAttribute(e) : (this.__shady_native_removeAttribute(e), qt(this, e));
        }
      }),
          Wt = _e({
        attachShadow: function attachShadow(e) {
          if (!this) throw Error("Must provide a host.");
          if (!e) throw Error("Not enough arguments.");

          if (e.shadyUpgradeFragment && !Z.ya) {
            var t = e.shadyUpgradeFragment;

            if (t.__proto__ = ShadowRoot.prototype, bn(t, this, e), dn(t, t), e = t.__noInsertionPoint ? null : t.querySelectorAll("slot"), t.__noInsertionPoint = void 0, e && e.length) {
              var n = t;
              xn(n), n.c.push.apply(n.c, _instanceof(e, Array) ? e : i(o(e))), wn(t);
            }

            t.host.__shady_native_appendChild(t);
          } else t = new gn(yn, this, e);

          return this.__CE_shadowRoot = t;
        },

        get shadowRoot() {
          var e = Y(this);
          return e && e.Sa || null;
        }

      });

      Object.assign(zt, Wt);

      var Gt = document.implementation.createHTMLDocument("inert"),
          Jt = _e({
        get innerHTML() {
          return ee(this) ? Pe("template" === this.localName ? this.content : this, pe) : this.__shady_native_innerHTML;
        },

        set innerHTML(e) {
          if ("template" === this.localName) this.__shady_native_innerHTML = e;else {
            kt(this);
            var t = this.localName || "div";

            for (t = this.namespaceURI && this.namespaceURI !== Gt.namespaceURI ? Gt.createElementNS(this.namespaceURI, t) : Gt.createElement(t), Z.D ? t.__shady_native_innerHTML = e : t.innerHTML = e; e = t.__shady_firstChild;) {
              this.__shady_insertBefore(e);
            }
          }
        }

      }),
          Kt = _e({
        blur: function blur() {
          var e = Y(this);
          (e = (e = e && e.root) && e.activeElement) ? e.__shady_blur() : this.__shady_native_blur();
        }
      });

      Z.ma || gt.forEach(function (e) {
        Kt[e] = {
          set: function set(t) {
            var n = X(this),
                r = e.substring(2);
            n.N || (n.N = {}), n.N[e] && this.removeEventListener(r, n.N[e]), this.__shady_addEventListener(r, t), n.N[e] = t;
          },
          get: function get() {
            var t = Y(this);
            return t && t.N && t.N[e];
          },
          configurable: !0
        };
      });

      var $t = _e({
        assignedNodes: function assignedNodes(e) {
          if ("slot" === this.localName) {
            var t = this.__shady_getRootNode();

            return t && te(t) && En(t), (t = Y(this)) && (e && e.flatten ? t.T : t.assignedNodes) || [];
          }
        },
        addEventListener: function addEventListener(e, t, n) {
          if ("slot" !== this.localName || "slotchange" === e) dt.call(this, e, t, n);else {
            "object" != _typeof(n) && (n = {
              capture: !!n
            });
            var r = this.__shady_parentNode;
            if (!r) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
            n.O = this, r.__shady_addEventListener(e, t, n);
          }
        },
        removeEventListener: function removeEventListener(e, t, n) {
          if ("slot" !== this.localName || "slotchange" === e) pt.call(this, e, t, n);else {
            "object" != _typeof(n) && (n = {
              capture: !!n
            });
            var r = this.__shady_parentNode;
            if (!r) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
            n.O = this, r.__shady_removeEventListener(e, t, n);
          }
        }
      }),
          Xt = _e({
        getElementById: function getElementById(e) {
          return "" === e ? null : Ft(this, function (t) {
            return t.id == e;
          }, function (e) {
            return !!e;
          })[0] || null;
        }
      }),
          Yt = _e({
        get activeElement() {
          var e = Z.D ? document.__shady_native_activeElement : document.activeElement;
          if (!e || !e.nodeType) return null;
          var t = !!te(this);
          if (!(this === document || t && this.host !== e && this.host.__shady_native_contains(e))) return null;

          for (t = kn(e); t && t !== this;) {
            t = kn(e = t.host);
          }

          return this === document ? t ? null : e : t === this ? e : null;
        }

      }),
          Zt = window.document,
          Qt = _e({
        importNode: function importNode(e, t) {
          if (e.ownerDocument !== Zt || "template" === e.localName) return this.__shady_native_importNode(e, t);

          var n = this.__shady_native_importNode(e, !1);

          if (t) for (e = e.__shady_firstChild; e; e = e.__shady_nextSibling) {
            t = this.__shady_importNode(e, !0), n.__shady_appendChild(t);
          }
          return n;
        }
      }),
          en = _e({
        dispatchEvent: ht,
        addEventListener: dt.bind(window),
        removeEventListener: pt.bind(window)
      }),
          tn = {};

      Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (tn.parentElement = Rt.parentElement), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (tn.contains = Rt.contains), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (tn.children = Ht.children), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (tn.innerHTML = Jt.innerHTML), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (tn.className = zt.className);
      var nn = {
        EventTarget: [St],
        Node: [Rt, window.EventTarget ? null : St],
        Text: [It],
        Comment: [It],
        CDATASection: [It],
        ProcessingInstruction: [It],
        Element: [zt, Ht, It, !Z.D || "innerHTML" in Element.prototype ? Jt : null, window.HTMLSlotElement ? null : $t],
        HTMLElement: [Kt, tn],
        HTMLSlotElement: [$t],
        DocumentFragment: [Bt, Xt],
        Document: [Qt, Bt, Xt, Yt],
        Window: [en]
      },
          rn = Z.D ? null : ["innerHTML", "textContent"];

      function on(e, t, n, r) {
        t.forEach(function (t) {
          return e && t && me(e, t, n, r);
        });
      }

      function sn(e) {
        var t,
            n = e ? null : rn;

        for (t in nn) {
          on(window[t] && window[t].prototype, nn[t], e, n);
        }
      }

      function an(e) {
        return e.__shady_protoIsPatched = !0, on(e, nn.EventTarget), on(e, nn.Node), on(e, nn.Element), on(e, nn.HTMLElement), on(e, nn.HTMLSlotElement), e;
      }

      ["Text", "Comment", "CDATASection", "ProcessingInstruction"].forEach(function (e) {
        var t = window[e],
            n = Object.create(t.prototype);
        n.__shady_protoIsPatched = !0, on(n, nn.EventTarget), on(n, nn.Node), nn[e] && on(n, nn[e]), t.prototype.__shady_patchedProto = n;
      });
      var ln = Z.la,
          cn = Z.D;

      function un(e, t) {
        if (ln && !e.__shady_protoIsPatched && !te(e)) {
          var n = Object.getPrototypeOf(e),
              r = n.hasOwnProperty("__shady_patchedProto") && n.__shady_patchedProto;

          r || (an(r = Object.create(n)), n.__shady_patchedProto = r), Object.setPrototypeOf(e, r);
        }

        cn || (1 === t ? Ke(e) : 2 === t && $e(e));
      }

      function hn(e, t, n, r) {
        un(e, 1), r = r || null;
        var o = X(e),
            i = r ? X(r) : null;
        o.previousSibling = r ? i.previousSibling : t.__shady_lastChild, (i = Y(o.previousSibling)) && (i.nextSibling = e), (i = Y(o.nextSibling = r)) && (i.previousSibling = e), o.parentNode = t, r ? r === n.firstChild && (n.firstChild = e) : (n.lastChild = e, n.firstChild || (n.firstChild = e)), n.childNodes = null;
      }

      function dn(e, t) {
        var n = X(e);

        if (t || void 0 === n.firstChild) {
          n.childNodes = null;
          var r = n.firstChild = e.__shady_native_firstChild;

          for (n.lastChild = e.__shady_native_lastChild, un(e, 2), n = r, r = void 0; n; n = n.__shady_native_nextSibling) {
            var o = X(n);
            o.parentNode = t || e, o.nextSibling = n.__shady_native_nextSibling, o.previousSibling = r || null, r = n, un(n, 1);
          }
        }
      }

      var pn = _e({
        addEventListener: function addEventListener(e, t, n) {
          "object" != _typeof(n) && (n = {
            capture: !!n
          }), n.O = n.O || this, this.host.__shady_addEventListener(e, t, n);
        },
        removeEventListener: function removeEventListener(e, t, n) {
          "object" != _typeof(n) && (n = {
            capture: !!n
          }), n.O = n.O || this, this.host.__shady_removeEventListener(e, t, n);
        }
      });

      function fn(e, t) {
        me(e, pn, t), me(e, Yt, t), me(e, Jt, t), me(e, Ht, t), Z.G && !t ? (me(e, Rt, t), me(e, Xt, t)) : Z.D || (me(e, ze), me(e, Ve), me(e, qe));
      }

      var mn,
          yn = {},
          _n = Z.deferConnectionCallbacks && "loading" === document.readyState;

      function vn(e) {
        var t = [];

        do {
          t.unshift(e);
        } while (e = e.__shady_parentNode);

        return t;
      }

      function gn(e, t, n) {
        if (e !== yn) throw new TypeError("Illegal constructor");
        this.a = null, bn(this, t, n);
      }

      function bn(e, t, n) {
        if (e.host = t, e.mode = n && n.mode, dn(e.host), (t = X(e.host)).root = e, t.Sa = "closed" !== e.mode ? e : null, (t = X(e)).firstChild = t.lastChild = t.parentNode = t.nextSibling = t.previousSibling = null, Z.preferPerformance) for (; t = e.host.__shady_native_firstChild;) {
          e.host.__shady_native_removeChild(t);
        } else wn(e);
      }

      function wn(e) {
        e.R || (e.R = !0, be(function () {
          return En(e);
        }));
      }

      function En(e) {
        var t;

        if (t = e.R) {
          for (var n; e;) {
            e.R && (n = e), te(e = (t = e).host.__shady_getRootNode()) && (t = Y(t.host)) && 0 < t.Z || (e = void 0);
          }

          t = n;
        }

        (n = t) && n._renderSelf();
      }

      function Sn(e, t, n) {
        var r = X(t),
            o = r.fa;
        r.fa = null, n || (n = (e = e.b[t.__shady_slot || "__catchall"]) && e[0]), n ? (X(n).assignedNodes.push(t), r.assignedSlot = n) : r.assignedSlot = void 0, o !== r.assignedSlot && r.assignedSlot && (X(r.assignedSlot).ha = !0);
      }

      function Nn(e, t, n) {
        for (var r = 0, o = void 0; r < n.length && (o = n[r]); r++) {
          if ("slot" == o.localName) {
            var i = Y(o).assignedNodes;
            i && i.length && Nn(e, t, i);
          } else t.push(n[r]);
        }
      }

      function Cn(e, t) {
        t.__shady_native_dispatchEvent(new Event("slotchange")), (t = Y(t)).assignedSlot && Cn(e, t.assignedSlot);
      }

      function xn(e) {
        e.c = e.c || [], e.a = e.a || [], e.b = e.b || {};
      }

      function Tn(e) {
        if (e.c && e.c.length) {
          for (var t, n = e.c, r = 0; r < n.length; r++) {
            var o = n[r];
            dn(o);
            var i = o.__shady_parentNode;
            dn(i), (i = Y(i)).Z = (i.Z || 0) + 1, i = On(o), e.b[i] ? ((t = t || {})[i] = !0, e.b[i].push(o)) : e.b[i] = [o], e.a.push(o);
          }

          if (t) for (var s in t) {
            e.b[s] = Pn(e.b[s]);
          }
          e.c = [];
        }
      }

      function On(e) {
        var t = e.name || e.getAttribute("name") || "__catchall";
        return e.Ba = t;
      }

      function Pn(e) {
        return e.sort(function (e, t) {
          e = vn(e);

          for (var n = vn(t), r = 0; r < e.length; r++) {
            t = e[r];
            var o = n[r];
            if (t !== o) return (e = pe(t.__shady_parentNode)).indexOf(t) - e.indexOf(o);
          }
        });
      }

      function Dn(e) {
        return Tn(e), !(!e.a || !e.a.length);
      }

      if (gn.prototype._renderSelf = function () {
        var e = _n;

        if (_n = !0, this.R = !1, this.a) {
          Tn(this);

          for (var t, n = 0; n < this.a.length; n++) {
            var r = Y(t = this.a[n]),
                o = r.assignedNodes;
            if (r.assignedNodes = [], r.T = [], r.ra = o) for (r = 0; r < o.length; r++) {
              var i = Y(o[r]);
              i.fa = i.assignedSlot, i.assignedSlot === t && (i.assignedSlot = null);
            }
          }

          for (n = this.host.__shady_firstChild; n; n = n.__shady_nextSibling) {
            Sn(this, n);
          }

          for (n = 0; n < this.a.length; n++) {
            if (!(o = Y(t = this.a[n])).assignedNodes.length) for (r = t.__shady_firstChild; r; r = r.__shady_nextSibling) {
              Sn(this, r, t);
            }

            if ((r = (r = Y(t.__shady_parentNode)) && r.root) && (Dn(r) || r.R) && r._renderSelf(), Nn(this, o.T, o.assignedNodes), r = o.ra) {
              for (i = 0; i < r.length; i++) {
                Y(r[i]).fa = null;
              }

              o.ra = null, r.length > o.assignedNodes.length && (o.ha = !0);
            }

            o.ha && (o.ha = !1, Cn(this, t));
          }

          for (t = this.a, n = [], o = 0; o < t.length; o++) {
            (i = Y(r = t[o].__shady_parentNode)) && i.root || !(0 > n.indexOf(r)) || n.push(r);
          }

          for (t = 0; t < n.length; t++) {
            for (o = (i = n[t]) === this ? this.host : i, r = [], i = i.__shady_firstChild; i; i = i.__shady_nextSibling) {
              if ("slot" == i.localName) for (var s = Y(i).T, a = 0; a < s.length; a++) {
                r.push(s[a]);
              } else r.push(i);
            }

            i = de(o), s = wt(r, r.length, i, i.length);

            for (var l = a = 0, c = void 0; a < s.length && (c = s[a]); a++) {
              for (var u = 0, h = void 0; u < c.X.length && (h = c.X[u]); u++) {
                h.__shady_native_parentNode === o && o.__shady_native_removeChild(h), i.splice(c.index + l, 1);
              }

              l -= c.aa;
            }

            for (l = 0, c = void 0; l < s.length && (c = s[l]); l++) {
              for (a = i[c.index], u = c.index; u < c.index + c.aa; u++) {
                h = r[u], o.__shady_native_insertBefore(h, a), i.splice(u, 0, h);
              }
            }
          }
        }

        if (!Z.preferPerformance && !this.qa) for (n = this.host.__shady_firstChild; n; n = n.__shady_nextSibling) {
          t = Y(n), n.__shady_native_parentNode !== this.host || "slot" !== n.localName && t.assignedSlot || this.host.__shady_native_removeChild(n);
        }
        this.qa = !0, _n = e, mn && mn();
      }, function (e) {
        e.__proto__ = DocumentFragment.prototype, fn(e, "__shady_"), fn(e), Object.defineProperties(e, {
          nodeType: {
            value: Node.DOCUMENT_FRAGMENT_NODE,
            configurable: !0
          },
          nodeName: {
            value: "#document-fragment",
            configurable: !0
          },
          nodeValue: {
            value: null,
            configurable: !0
          }
        }), ["localName", "namespaceURI", "prefix"].forEach(function (t) {
          Object.defineProperty(e, t, {
            value: void 0,
            configurable: !0
          });
        }), ["ownerDocument", "baseURI", "isConnected"].forEach(function (t) {
          Object.defineProperty(e, t, {
            get: function get() {
              return this.host[t];
            },
            configurable: !0
          });
        });
      }(gn.prototype), window.customElements && Z.ia && !Z.preferPerformance) {
        var Mn = new Map();
        mn = function mn() {
          var e = [];
          Mn.forEach(function (t, n) {
            e.push([n, t]);
          }), Mn.clear();

          for (var t = 0; t < e.length; t++) {
            var n = e[t][0];
            e[t][1] ? n.__shadydom_connectedCallback() : n.__shadydom_disconnectedCallback();
          }
        }, _n && document.addEventListener("readystatechange", function () {
          _n = !1, mn();
        }, {
          once: !0
        });

        var Ln = window.customElements.define,
            An = function An(e, t) {
          var n = t.prototype.connectedCallback,
              r = t.prototype.disconnectedCallback;
          Ln.call(window.customElements, e, function (e, t, n) {
            var r = 0,
                o = "__isConnected" + r++;
            return (t || n) && (e.prototype.connectedCallback = e.prototype.__shadydom_connectedCallback = function () {
              _n ? Mn.set(this, !0) : this[o] || (this[o] = !0, t && t.call(this));
            }, e.prototype.disconnectedCallback = e.prototype.__shadydom_disconnectedCallback = function () {
              _n ? this.isConnected || Mn.set(this, !1) : this[o] && (this[o] = !1, n && n.call(this));
            }), e;
          }(t, n, r)), t.prototype.connectedCallback = n, t.prototype.disconnectedCallback = r;
        };

        window.customElements.define = An, Object.defineProperty(window.CustomElementRegistry.prototype, "define", {
          value: An,
          configurable: !0
        });
      }

      function kn(e) {
        if (te(e = e.__shady_getRootNode())) return e;
      }

      function jn(e) {
        this.node = e;
      }

      (n = jn.prototype).addEventListener = function (e, t, n) {
        return this.node.__shady_addEventListener(e, t, n);
      }, n.removeEventListener = function (e, t, n) {
        return this.node.__shady_removeEventListener(e, t, n);
      }, n.appendChild = function (e) {
        return this.node.__shady_appendChild(e);
      }, n.insertBefore = function (e, t) {
        return this.node.__shady_insertBefore(e, t);
      }, n.removeChild = function (e) {
        return this.node.__shady_removeChild(e);
      }, n.replaceChild = function (e, t) {
        return this.node.__shady_replaceChild(e, t);
      }, n.cloneNode = function (e) {
        return this.node.__shady_cloneNode(e);
      }, n.getRootNode = function (e) {
        return this.node.__shady_getRootNode(e);
      }, n.contains = function (e) {
        return this.node.__shady_contains(e);
      }, n.dispatchEvent = function (e) {
        return this.node.__shady_dispatchEvent(e);
      }, n.setAttribute = function (e, t) {
        this.node.__shady_setAttribute(e, t);
      }, n.getAttribute = function (e) {
        return this.node.__shady_native_getAttribute(e);
      }, n.hasAttribute = function (e) {
        return this.node.__shady_native_hasAttribute(e);
      }, n.removeAttribute = function (e) {
        this.node.__shady_removeAttribute(e);
      }, n.attachShadow = function (e) {
        return this.node.__shady_attachShadow(e);
      }, n.focus = function () {
        this.node.__shady_native_focus();
      }, n.blur = function () {
        this.node.__shady_blur();
      }, n.importNode = function (e, t) {
        if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(e, t);
      }, n.getElementById = function (e) {
        if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(e);
      }, n.querySelector = function (e) {
        return this.node.__shady_querySelector(e);
      }, n.querySelectorAll = function (e, t) {
        return this.node.__shady_querySelectorAll(e, t);
      }, n.assignedNodes = function (e) {
        if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(e);
      }, s.Object.defineProperties(jn.prototype, {
        activeElement: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            if (te(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement;
          }
        },
        _activeElement: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.activeElement;
          }
        },
        host: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            if (te(this.node)) return this.node.host;
          }
        },
        parentNode: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_parentNode;
          }
        },
        firstChild: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_firstChild;
          }
        },
        lastChild: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_lastChild;
          }
        },
        nextSibling: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_nextSibling;
          }
        },
        previousSibling: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_previousSibling;
          }
        },
        childNodes: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_childNodes;
          }
        },
        parentElement: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_parentElement;
          }
        },
        firstElementChild: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_firstElementChild;
          }
        },
        lastElementChild: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_lastElementChild;
          }
        },
        nextElementSibling: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_nextElementSibling;
          }
        },
        previousElementSibling: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_previousElementSibling;
          }
        },
        children: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_children;
          }
        },
        childElementCount: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_childElementCount;
          }
        },
        shadowRoot: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_shadowRoot;
          }
        },
        assignedSlot: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_assignedSlot;
          }
        },
        isConnected: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_isConnected;
          }
        },
        innerHTML: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_innerHTML;
          },
          set: function set(e) {
            this.node.__shady_innerHTML = e;
          }
        },
        textContent: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_textContent;
          },
          set: function set(e) {
            this.node.__shady_textContent = e;
          }
        },
        slot: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_slot;
          },
          set: function set(e) {
            this.node.__shady_slot = e;
          }
        },
        className: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this.node.__shady_className;
          },
          set: function set(e) {
            return this.node.__shady_className = e;
          }
        }
      }), gt.forEach(function (e) {
        Object.defineProperty(jn.prototype, e, {
          get: function get() {
            return this.node["__shady_" + e];
          },
          set: function set(t) {
            this.node["__shady_" + e] = t;
          },
          configurable: !0
        });
      });
      var Rn = new WeakMap();

      function In(e) {
        if (te(e) || _instanceof(e, jn)) return e;
        var t = Rn.get(e);
        return t || (t = new jn(e), Rn.set(e, t)), t;
      }

      if (Z.ia) {
        var Fn = Z.D ? function (e) {
          return e;
        } : function (e) {
          return $e(e), Ke(e), e;
        },
            Hn = {
          inUse: Z.ia,
          patch: Fn,
          isShadyRoot: te,
          enqueue: be,
          flush: we,
          flushInitial: function flushInitial(e) {
            !e.qa && e.R && En(e);
          },
          settings: Z,
          filterMutations: function filterMutations(e, t) {
            var n = t.getRootNode();
            return e.map(function (e) {
              var t = n === e.target.getRootNode();

              if (t && e.addedNodes) {
                if ((t = Array.from(e.addedNodes).filter(function (e) {
                  return n === e.getRootNode();
                })).length) return e = Object.create(e), Object.defineProperty(e, "addedNodes", {
                  value: t,
                  configurable: !0
                }), e;
              } else if (t) return e;
            }).filter(function (e) {
              return e;
            });
          },
          observeChildren: function observeChildren(e, t) {
            var n = X(e);
            n.W || (n.W = new Ee()), n.W.ba.add(t);
            var r = n.W;
            return {
              Ca: t,
              P: r,
              Da: e,
              takeRecords: function takeRecords() {
                return r.takeRecords();
              }
            };
          },
          unobserveChildren: function unobserveChildren(e) {
            var t = e && e.P;
            t && (t.ba["delete"](e.Ca), t.ba.size || (X(e.Da).W = null));
          },
          deferConnectionCallbacks: Z.deferConnectionCallbacks,
          preferPerformance: Z.preferPerformance,
          handlesDynamicScoping: !0,
          wrap: Z.G ? In : Fn,
          wrapIfNeeded: !0 === Z.G ? In : function (e) {
            return e;
          },
          Wrapper: jn,
          composedPath: function composedPath(e) {
            return e.__composedPath || (e.__composedPath = rt(e.target, !0)), e.__composedPath;
          },
          noPatch: Z.G,
          patchOnDemand: Z.la,
          nativeMethods: Me,
          nativeTree: Le,
          patchElementProto: an
        };
        window.ShadyDOM = Hn, function () {
          var e = ["dispatchEvent", "addEventListener", "removeEventListener"];
          window.EventTarget ? je(window.EventTarget.prototype, e) : (je(Node.prototype, e), je(Window.prototype, e)), De ? je(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : ke(Node.prototype, {
            parentNode: {
              get: function get() {
                return Re.currentNode = this, Re.parentNode();
              }
            },
            firstChild: {
              get: function get() {
                return Re.currentNode = this, Re.firstChild();
              }
            },
            lastChild: {
              get: function get() {
                return Re.currentNode = this, Re.lastChild();
              }
            },
            previousSibling: {
              get: function get() {
                return Re.currentNode = this, Re.previousSibling();
              }
            },
            nextSibling: {
              get: function get() {
                return Re.currentNode = this, Re.nextSibling();
              }
            },
            childNodes: {
              get: function get() {
                var e = [];
                Re.currentNode = this;

                for (var t = Re.firstChild(); t;) {
                  e.push(t), t = Re.nextSibling();
                }

                return e;
              }
            },
            parentElement: {
              get: function get() {
                return Ie.currentNode = this, Ie.parentNode();
              }
            },
            textContent: {
              get: function get() {
                switch (this.nodeType) {
                  case Node.ELEMENT_NODE:
                  case Node.DOCUMENT_FRAGMENT_NODE:
                    for (var e, t = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), n = ""; e = t.nextNode();) {
                      n += e.nodeValue;
                    }

                    return n;

                  default:
                    return this.nodeValue;
                }
              },
              set: function set(e) {
                switch (null == e && (e = ""), this.nodeType) {
                  case Node.ELEMENT_NODE:
                  case Node.DOCUMENT_FRAGMENT_NODE:
                    He(this), (0 < e.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(e), void 0);
                    break;

                  default:
                    this.nodeValue = e;
                }
              }
            }
          }), je(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" ")), je(HTMLElement.prototype, ["parentElement", "contains"]), e = {
            firstElementChild: {
              get: function get() {
                return Ie.currentNode = this, Ie.firstChild();
              }
            },
            lastElementChild: {
              get: function get() {
                return Ie.currentNode = this, Ie.lastChild();
              }
            },
            children: {
              get: function get() {
                var e = [];
                Ie.currentNode = this;

                for (var t = Ie.firstChild(); t;) {
                  e.push(t), t = Ie.nextSibling();
                }

                return he(e);
              }
            },
            childElementCount: {
              get: function get() {
                return this.children ? this.children.length : 0;
              }
            }
          }, De ? (je(Element.prototype, Ue), je(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML", "className"]), je(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (ke(Element.prototype, e), ke(Element.prototype, {
            previousElementSibling: {
              get: function get() {
                return Ie.currentNode = this, Ie.previousSibling();
              }
            },
            nextElementSibling: {
              get: function get() {
                return Ie.currentNode = this, Ie.nextSibling();
              }
            },
            innerHTML: {
              get: function get() {
                return Pe(this, de);
              },
              set: function set(e) {
                var t = "template" === this.localName ? this.content : this;
                He(t);
                var n = this.localName || "div";

                for ((n = this.namespaceURI && this.namespaceURI !== Fe.namespaceURI ? Fe.createElementNS(this.namespaceURI, n) : Fe.createElement(n)).innerHTML = e, e = "template" === this.localName ? n.content : n; n = e.__shady_native_firstChild;) {
                  t.__shady_native_insertBefore(n, void 0);
                }
              }
            },
            className: {
              get: function get() {
                return this.getAttribute("class") || "";
              },
              set: function set(e) {
                this.setAttribute("class", e);
              }
            }
          })), je(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" ")), je(Element.prototype, Be), je(HTMLElement.prototype, ["focus", "blur"]), window.HTMLTemplateElement && je(window.HTMLTemplateElement.prototype, ["innerHTML"]), De ? je(DocumentFragment.prototype, Ue) : ke(DocumentFragment.prototype, e), je(DocumentFragment.prototype, Be), De ? (je(Document.prototype, Ue), je(Document.prototype, ["activeElement"])) : ke(Document.prototype, e), je(Document.prototype, ["importNode", "getElementById"]), je(Document.prototype, Be);
        }(), sn("__shady_"), Object.defineProperty(document, "_activeElement", Yt.activeElement), me(Window.prototype, en, "__shady_"), Z.G ? Z.la && me(Element.prototype, Wt) : (sn(), function () {
          if (!Ye && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
            var e = function e() {
              var e = new MouseEvent("click", {
                bubbles: !0,
                cancelable: !0,
                composed: !0
              });

              this.__shady_dispatchEvent(e);
            };

            Element.prototype.click ? Element.prototype.click = e : HTMLElement.prototype.click && (HTMLElement.prototype.click = e);
          }
        }()), function () {
          for (var e in st) {
            window.__shady_native_addEventListener(e, function (e) {
              e.__target || (mt(e), ct(e));
            }, !0);
          }
        }(), window.Event = yt, window.CustomEvent = _t, window.MouseEvent = vt, window.ShadowRoot = gn;
      }

      var Un = window.Document.prototype.createElement,
          Bn = window.Document.prototype.createElementNS,
          Vn = window.Document.prototype.importNode,
          qn = window.Document.prototype.prepend,
          zn = window.Document.prototype.append,
          Wn = window.DocumentFragment.prototype.prepend,
          Gn = window.DocumentFragment.prototype.append,
          Jn = window.Node.prototype.cloneNode,
          Kn = window.Node.prototype.appendChild,
          $n = window.Node.prototype.insertBefore,
          Xn = window.Node.prototype.removeChild,
          Yn = window.Node.prototype.replaceChild,
          Zn = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
          Qn = window.Element.prototype.attachShadow,
          er = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
          tr = window.Element.prototype.getAttribute,
          nr = window.Element.prototype.setAttribute,
          rr = window.Element.prototype.removeAttribute,
          or = window.Element.prototype.getAttributeNS,
          ir = window.Element.prototype.setAttributeNS,
          sr = window.Element.prototype.removeAttributeNS,
          ar = window.Element.prototype.insertAdjacentElement,
          lr = window.Element.prototype.insertAdjacentHTML,
          cr = window.Element.prototype.prepend,
          ur = window.Element.prototype.append,
          hr = window.Element.prototype.before,
          dr = window.Element.prototype.after,
          pr = window.Element.prototype.replaceWith,
          fr = window.Element.prototype.remove,
          mr = window.HTMLElement,
          yr = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
          _r = window.HTMLElement.prototype.insertAdjacentElement,
          vr = window.HTMLElement.prototype.insertAdjacentHTML,
          gr = new Set();

      function br(e) {
        var t = gr.has(e);
        return e = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e), !t && e;
      }

      "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function (e) {
        return gr.add(e);
      });
      var wr = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);

      function Er(e) {
        var t = e.isConnected;
        if (void 0 !== t) return t;
        if (wr(e)) return !0;

        for (; e && !(e.__CE_isImportDocument || _instanceof(e, Document));) {
          e = e.parentNode || (window.ShadowRoot && _instanceof(e, ShadowRoot) ? e.host : void 0);
        }

        return !(!e || !(e.__CE_isImportDocument || _instanceof(e, Document)));
      }

      function Sr(e) {
        var t = e.children;
        if (t) return Array.prototype.slice.call(t);

        for (t = [], e = e.firstChild; e; e = e.nextSibling) {
          e.nodeType === Node.ELEMENT_NODE && t.push(e);
        }

        return t;
      }

      function Nr(e, t) {
        for (; t && t !== e && !t.nextSibling;) {
          t = t.parentNode;
        }

        return t && t !== e ? t.nextSibling : null;
      }

      function Cr(e, t, n) {
        e[t] = n;
      }

      function xr(e) {
        var t = document;
        this.b = e, this.a = t, this.P = void 0, Ur(this.b, this.a), "loading" === this.a.readyState && (this.P = new MutationObserver(this.c.bind(this)), this.P.observe(this.a, {
          childList: !0,
          subtree: !0
        }));
      }

      function Tr(e) {
        e.P && e.P.disconnect();
      }

      function Or() {
        var e = this;
        this.a = this.w = void 0, this.b = new Promise(function (t) {
          e.a = t, e.w && t(e.w);
        });
      }

      function Pr(e) {
        this.f = new Map(), this.u = new Map(), this.ta = new Map(), this.U = !1, this.b = e, this.ja = new Map(), this.c = function (e) {
          return e();
        }, this.a = !1, this.F = [], this.va = e.f ? new xr(e) : void 0;
      }

      function Dr(e, t) {
        if (!br(t)) throw new SyntaxError("The element name '" + t + "' is not valid.");
        if (Ar(e, t)) throw Error("A custom element with name '" + t + "' has already been defined.");
        if (e.U) throw Error("A custom element is already being defined.");
      }

      function Mr(e, t, n) {
        var r;
        e.U = !0;

        try {
          var o = function o(e) {
            var t = i[e];
            if (void 0 !== t && !_instanceof(t, Function)) throw Error("The '" + e + "' callback must be a function.");
            return t;
          },
              i = n.prototype;

          if (!_instanceof(i, Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
          var s = o("connectedCallback"),
              a = o("disconnectedCallback"),
              l = o("adoptedCallback"),
              c = (r = o("attributeChangedCallback")) && n.observedAttributes || [];
        } catch (e) {
          throw e;
        } finally {
          e.U = !1;
        }

        return n = {
          localName: t,
          constructorFunction: n,
          connectedCallback: s,
          disconnectedCallback: a,
          adoptedCallback: l,
          attributeChangedCallback: r,
          observedAttributes: c,
          constructionStack: []
        }, e.u.set(t, n), e.ta.set(n.constructorFunction, n), n;
      }

      function Lr(e) {
        if (!1 !== e.a) {
          e.a = !1;

          for (var t = [], n = e.F, r = new Map(), o = 0; o < n.length; o++) {
            r.set(n[o], []);
          }

          for (Ur(e.b, document, {
            upgrade: function upgrade(n) {
              if (void 0 === n.__CE_state) {
                var o = n.localName,
                    i = r.get(o);
                i ? i.push(n) : e.u.has(o) && t.push(n);
              }
            }
          }), o = 0; o < t.length; o++) {
            Br(e.b, t[o]);
          }

          for (o = 0; o < n.length; o++) {
            for (var i = n[o], s = r.get(i), a = 0; a < s.length; a++) {
              Br(e.b, s[a]);
            }

            (i = e.ja.get(i)) && i.resolve(void 0);
          }

          n.length = 0;
        }
      }

      function Ar(e, t) {
        var n = e.u.get(t);
        if (n) return n;

        if (n = e.f.get(t)) {
          e.f["delete"](t);

          try {
            return Mr(e, t, n());
          } catch (e) {
            qr(e);
          }
        }
      }

      function kr() {
        var e = Jr && Jr.noDocumentConstructionObserver,
            t = Jr && Jr.shadyDomFastWalk;
        this.b = [], this.c = [], this.a = !1, this.shadyDomFastWalk = t, this.f = !e;
      }

      function jr(e, t, n, r) {
        var o = window.ShadyDOM;

        if (e.shadyDomFastWalk && o && o.inUse) {
          if (t.nodeType === Node.ELEMENT_NODE && n(t), t.querySelectorAll) for (e = o.nativeMethods.querySelectorAll.call(t, "*"), t = 0; t < e.length; t++) {
            n(e[t]);
          }
        } else !function e(t, n, r) {
          for (var o = t; o;) {
            if (o.nodeType === Node.ELEMENT_NODE) {
              var i = o;
              n(i);
              var s = i.localName;

              if ("link" === s && "import" === i.getAttribute("rel")) {
                if (o = i["import"], void 0 === r && (r = new Set()), _instanceof(o, Node) && !r.has(o)) for (r.add(o), o = o.firstChild; o; o = o.nextSibling) {
                  e(o, n, r);
                }
                o = Nr(t, i);
                continue;
              }

              if ("template" === s) {
                o = Nr(t, i);
                continue;
              }

              if (i = i.__CE_shadowRoot) for (i = i.firstChild; i; i = i.nextSibling) {
                e(i, n, r);
              }
            }

            o = o.firstChild ? o.firstChild : Nr(t, o);
          }
        }(t, n, r);
      }

      function Rr(e, t) {
        e.a && jr(e, t, function (t) {
          return Ir(e, t);
        });
      }

      function Ir(e, t) {
        if (e.a && !t.__CE_patched) {
          t.__CE_patched = !0;

          for (var n = 0; n < e.b.length; n++) {
            e.b[n](t);
          }

          for (n = 0; n < e.c.length; n++) {
            e.c[n](t);
          }
        }
      }

      function Fr(e, t) {
        var n = [];

        for (jr(e, t, function (e) {
          return n.push(e);
        }), t = 0; t < n.length; t++) {
          var r = n[t];
          1 === r.__CE_state ? e.connectedCallback(r) : Br(e, r);
        }
      }

      function Hr(e, t) {
        var n = [];

        for (jr(e, t, function (e) {
          return n.push(e);
        }), t = 0; t < n.length; t++) {
          var r = n[t];
          1 === r.__CE_state && e.disconnectedCallback(r);
        }
      }

      function Ur(e, t, n) {
        var r = (n = void 0 === n ? {} : n).Za,
            o = n.upgrade || function (t) {
          return Br(e, t);
        },
            i = [];

        for (jr(e, t, function (t) {
          if (e.a && Ir(e, t), "link" === t.localName && "import" === t.getAttribute("rel")) {
            var n = t["import"];
            _instanceof(n, Node) && (n.__CE_isImportDocument = !0, n.__CE_registry = document.__CE_registry), n && "complete" === n.readyState ? n.__CE_documentLoadHandled = !0 : t.addEventListener("load", function () {
              var n = t["import"];

              if (!n.__CE_documentLoadHandled) {
                n.__CE_documentLoadHandled = !0;
                var i = new Set();
                r && (r.forEach(function (e) {
                  return i.add(e);
                }), i["delete"](n)), Ur(e, n, {
                  Za: i,
                  upgrade: o
                });
              }
            });
          } else i.push(t);
        }, r), t = 0; t < i.length; t++) {
          o(i[t]);
        }
      }

      function Br(e, t) {
        try {
          var n = t.ownerDocument,
              r = n.__CE_registry,
              o = r && (n.defaultView || n.__CE_isImportDocument) ? Ar(r, t.localName) : void 0;

          if (o && void 0 === t.__CE_state) {
            o.constructionStack.push(t);

            try {
              try {
                if (new o.constructorFunction() !== t) throw Error("The custom element constructor did not produce the element being upgraded.");
              } finally {
                o.constructionStack.pop();
              }
            } catch (e) {
              throw t.__CE_state = 2, e;
            }

            if (t.__CE_state = 1, t.__CE_definition = o, o.attributeChangedCallback && t.hasAttributes()) {
              var i = o.observedAttributes;

              for (o = 0; o < i.length; o++) {
                var s = i[o],
                    a = t.getAttribute(s);
                null !== a && e.attributeChangedCallback(t, s, null, a, null);
              }
            }

            Er(t) && e.connectedCallback(t);
          }
        } catch (e) {
          qr(e);
        }
      }

      function Vr(e, t, n, r) {
        var o = t.__CE_registry;
        if (o && (null === r || "http://www.w3.org/1999/xhtml" === r) && (o = Ar(o, n))) try {
          var i = new o.constructorFunction();
          if (void 0 === i.__CE_state || void 0 === i.__CE_definition) throw Error("Failed to construct '" + n + "': The returned value was not constructed with the HTMLElement constructor.");
          if ("http://www.w3.org/1999/xhtml" !== i.namespaceURI) throw Error("Failed to construct '" + n + "': The constructed element's namespace must be the HTML namespace.");
          if (i.hasAttributes()) throw Error("Failed to construct '" + n + "': The constructed element must not have any attributes.");
          if (null !== i.firstChild) throw Error("Failed to construct '" + n + "': The constructed element must not have any children.");
          if (null !== i.parentNode) throw Error("Failed to construct '" + n + "': The constructed element must not have a parent node.");
          if (i.ownerDocument !== t) throw Error("Failed to construct '" + n + "': The constructed element's owner document is incorrect.");
          if (i.localName !== n) throw Error("Failed to construct '" + n + "': The constructed element's local name is incorrect.");
          return i;
        } catch (o) {
          return qr(o), t = null === r ? Un.call(t, n) : Bn.call(t, r, n), Object.setPrototypeOf(t, HTMLUnknownElement.prototype), t.__CE_state = 2, t.__CE_definition = void 0, Ir(e, t), t;
        }
        return Ir(e, t = null === r ? Un.call(t, n) : Bn.call(t, r, n)), t;
      }

      function qr(e) {
        var t = e.message,
            n = e.sourceURL || e.fileName || "",
            r = e.line || e.lineNumber || 0,
            o = e.column || e.columnNumber || 0,
            i = void 0;
        void 0 === ErrorEvent.prototype.initErrorEvent ? i = new ErrorEvent("error", {
          cancelable: !0,
          message: t,
          filename: n,
          lineno: r,
          colno: o,
          error: e
        }) : ((i = document.createEvent("ErrorEvent")).initErrorEvent("error", !1, !0, t, n, r), i.preventDefault = function () {
          Object.defineProperty(this, "defaultPrevented", {
            configurable: !0,
            get: function get() {
              return !0;
            }
          });
        }), void 0 === i.error && Object.defineProperty(i, "error", {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return e;
          }
        }), window.dispatchEvent(i), i.defaultPrevented || console.error(e);
      }

      xr.prototype.c = function (e) {
        var t = this.a.readyState;

        for ("interactive" !== t && "complete" !== t || Tr(this), t = 0; t < e.length; t++) {
          for (var n = e[t].addedNodes, r = 0; r < n.length; r++) {
            Ur(this.b, n[r]);
          }
        }
      }, Or.prototype.resolve = function (e) {
        if (this.w) throw Error("Already resolved.");
        this.w = e, this.a && this.a(e);
      }, (n = Pr.prototype).Qa = function (e, t) {
        var n = this;
        if (!_instanceof(t, Function)) throw new TypeError("Custom element constructor getters must be functions.");
        Dr(this, e), this.f.set(e, t), this.F.push(e), this.a || (this.a = !0, this.c(function () {
          return Lr(n);
        }));
      }, n.define = function (e, t) {
        var n = this;
        if (!_instanceof(t, Function)) throw new TypeError("Custom element constructors must be functions.");
        Dr(this, e), Mr(this, e, t), this.F.push(e), this.a || (this.a = !0, this.c(function () {
          return Lr(n);
        }));
      }, n.upgrade = function (e) {
        Ur(this.b, e);
      }, n.get = function (e) {
        if (e = Ar(this, e)) return e.constructorFunction;
      }, n.whenDefined = function (e) {
        if (!br(e)) return Promise.reject(new SyntaxError("'" + e + "' is not a valid custom element name."));
        var t = this.ja.get(e);
        if (t) return t.b;
        t = new Or(), this.ja.set(e, t);
        var n = this.u.has(e) || this.f.has(e);
        return e = -1 === this.F.indexOf(e), n && e && t.resolve(void 0), t.b;
      }, n.polyfillWrapFlushCallback = function (e) {
        this.va && Tr(this.va);
        var t = this.c;

        this.c = function (n) {
          return e(function () {
            return t(n);
          });
        };
      }, window.CustomElementRegistry = Pr, Pr.prototype.define = Pr.prototype.define, Pr.prototype.upgrade = Pr.prototype.upgrade, Pr.prototype.get = Pr.prototype.get, Pr.prototype.whenDefined = Pr.prototype.whenDefined, Pr.prototype.polyfillDefineLazy = Pr.prototype.Qa, Pr.prototype.polyfillWrapFlushCallback = Pr.prototype.polyfillWrapFlushCallback, kr.prototype.connectedCallback = function (e) {
        var t = e.__CE_definition;
        if (t.connectedCallback) try {
          t.connectedCallback.call(e);
        } catch (e) {
          qr(e);
        }
      }, kr.prototype.disconnectedCallback = function (e) {
        var t = e.__CE_definition;
        if (t.disconnectedCallback) try {
          t.disconnectedCallback.call(e);
        } catch (e) {
          qr(e);
        }
      }, kr.prototype.attributeChangedCallback = function (e, t, n, r, o) {
        var i = e.__CE_definition;
        if (i.attributeChangedCallback && -1 < i.observedAttributes.indexOf(t)) try {
          i.attributeChangedCallback.call(e, t, n, r, o);
        } catch (e) {
          qr(e);
        }
      };
      var zr = new function () {}();

      function Wr(e, t, n) {
        function r(t) {
          return function (n) {
            for (var r = [], o = 0; o < arguments.length; ++o) {
              r[o] = arguments[o];
            }

            o = [];

            for (var i = [], s = 0; s < r.length; s++) {
              var a = r[s];
              if (_instanceof(a, Element) && Er(a) && i.push(a), _instanceof(a, DocumentFragment)) for (a = a.firstChild; a; a = a.nextSibling) {
                o.push(a);
              } else o.push(a);
            }

            for (t.apply(this, r), r = 0; r < i.length; r++) {
              Hr(e, i[r]);
            }

            if (Er(this)) for (r = 0; r < o.length; r++) {
              _instanceof(i = o[r], Element) && Fr(e, i);
            }
          };
        }

        void 0 !== n.prepend && Cr(t, "prepend", r(n.prepend)), void 0 !== n.append && Cr(t, "append", r(n.append));
      }

      function Gr(e) {
        function t(t, n) {
          Object.defineProperty(t, "innerHTML", {
            enumerable: n.enumerable,
            configurable: !0,
            get: n.get,
            set: function set(t) {
              var r = this,
                  o = void 0;
              if (Er(this) && (o = [], jr(e, this, function (e) {
                e !== r && o.push(e);
              })), n.set.call(this, t), o) for (var i = 0; i < o.length; i++) {
                var s = o[i];
                1 === s.__CE_state && e.disconnectedCallback(s);
              }
              return this.ownerDocument.__CE_registry ? Ur(e, this) : Rr(e, this), t;
            }
          });
        }

        function n(t, n) {
          Cr(t, "insertAdjacentElement", function (t, r) {
            var o = Er(r);
            return t = n.call(this, t, r), o && Hr(e, r), Er(t) && Fr(e, r), t;
          });
        }

        function r(t, n) {
          function r(t, n) {
            for (var r = []; t !== n; t = t.nextSibling) {
              r.push(t);
            }

            for (n = 0; n < r.length; n++) {
              Ur(e, r[n]);
            }
          }

          Cr(t, "insertAdjacentHTML", function (e, t) {
            if ("beforebegin" === (e = e.toLowerCase())) {
              var o = this.previousSibling;
              n.call(this, e, t), r(o || this.parentNode.firstChild, this);
            } else if ("afterbegin" === e) o = this.firstChild, n.call(this, e, t), r(this.firstChild, o);else if ("beforeend" === e) o = this.lastChild, n.call(this, e, t), r(o || this.firstChild, null);else {
              if ("afterend" !== e) throw new SyntaxError("The value provided (" + String(e) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
              o = this.nextSibling, n.call(this, e, t), r(this.nextSibling, o);
            }
          });
        }

        Qn && Cr(Element.prototype, "attachShadow", function (t) {
          if (t = Qn.call(this, t), e.a && !t.__CE_patched) {
            t.__CE_patched = !0;

            for (var n = 0; n < e.b.length; n++) {
              e.b[n](t);
            }
          }

          return this.__CE_shadowRoot = t;
        }), er && er.get ? t(Element.prototype, er) : yr && yr.get ? t(HTMLElement.prototype, yr) : function (e, t) {
          e.a = !0, e.c.push(t);
        }(e, function (e) {
          t(e, {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Jn.call(this, !0).innerHTML;
            },
            set: function set(e) {
              var t = "template" === this.localName,
                  n = t ? this.content : this,
                  r = Bn.call(document, this.namespaceURI, this.localName);

              for (r.innerHTML = e; 0 < n.childNodes.length;) {
                Xn.call(n, n.childNodes[0]);
              }

              for (e = t ? r.content : r; 0 < e.childNodes.length;) {
                Kn.call(n, e.childNodes[0]);
              }
            }
          });
        }), Cr(Element.prototype, "setAttribute", function (t, n) {
          if (1 !== this.__CE_state) return nr.call(this, t, n);
          var r = tr.call(this, t);
          nr.call(this, t, n), n = tr.call(this, t), e.attributeChangedCallback(this, t, r, n, null);
        }), Cr(Element.prototype, "setAttributeNS", function (t, n, r) {
          if (1 !== this.__CE_state) return ir.call(this, t, n, r);
          var o = or.call(this, t, n);
          ir.call(this, t, n, r), r = or.call(this, t, n), e.attributeChangedCallback(this, n, o, r, t);
        }), Cr(Element.prototype, "removeAttribute", function (t) {
          if (1 !== this.__CE_state) return rr.call(this, t);
          var n = tr.call(this, t);
          rr.call(this, t), null !== n && e.attributeChangedCallback(this, t, n, null, null);
        }), Cr(Element.prototype, "removeAttributeNS", function (t, n) {
          if (1 !== this.__CE_state) return sr.call(this, t, n);
          var r = or.call(this, t, n);
          sr.call(this, t, n);
          var o = or.call(this, t, n);
          r !== o && e.attributeChangedCallback(this, n, r, o, t);
        }), _r ? n(HTMLElement.prototype, _r) : ar && n(Element.prototype, ar), vr ? r(HTMLElement.prototype, vr) : lr && r(Element.prototype, lr), Wr(e, Element.prototype, {
          prepend: cr,
          append: ur
        }), function (e) {
          function t(t) {
            return function (n) {
              for (var r = [], o = 0; o < arguments.length; ++o) {
                r[o] = arguments[o];
              }

              o = [];

              for (var i = [], s = 0; s < r.length; s++) {
                var a = r[s];
                if (_instanceof(a, Element) && Er(a) && i.push(a), _instanceof(a, DocumentFragment)) for (a = a.firstChild; a; a = a.nextSibling) {
                  o.push(a);
                } else o.push(a);
              }

              for (t.apply(this, r), r = 0; r < i.length; r++) {
                Hr(e, i[r]);
              }

              if (Er(this)) for (r = 0; r < o.length; r++) {
                _instanceof(i = o[r], Element) && Fr(e, i);
              }
            };
          }

          var n = Element.prototype;
          void 0 !== hr && Cr(n, "before", t(hr)), void 0 !== dr && Cr(n, "after", t(dr)), void 0 !== pr && Cr(n, "replaceWith", function (t) {
            for (var n = [], r = 0; r < arguments.length; ++r) {
              n[r] = arguments[r];
            }

            r = [];

            for (var o = [], i = 0; i < n.length; i++) {
              var s = n[i];
              if (_instanceof(s, Element) && Er(s) && o.push(s), _instanceof(s, DocumentFragment)) for (s = s.firstChild; s; s = s.nextSibling) {
                r.push(s);
              } else r.push(s);
            }

            for (i = Er(this), pr.apply(this, n), n = 0; n < o.length; n++) {
              Hr(e, o[n]);
            }

            if (i) for (Hr(e, this), n = 0; n < r.length; n++) {
              _instanceof(o = r[n], Element) && Fr(e, o);
            }
          }), void 0 !== fr && Cr(n, "remove", function () {
            var t = Er(this);
            fr.call(this), t && Hr(e, this);
          });
        }(e);
      }

      var Jr = window.customElements;

      function Kr() {
        var e = new kr();
        !function (e) {
          window.HTMLElement = function () {
            function t() {
              var t = this.constructor,
                  n = document.__CE_registry.ta.get(t);

              if (!n) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
              var r = n.constructionStack;
              if (0 === r.length) return r = Un.call(document, n.localName), Object.setPrototypeOf(r, t.prototype), r.__CE_state = 1, r.__CE_definition = n, Ir(e, r), r;
              var o = r.length - 1,
                  i = r[o];
              if (i === zr) throw Error("Failed to construct '" + n.localName + "': This element was already constructed.");
              return r[o] = zr, Object.setPrototypeOf(i, t.prototype), Ir(e, i), i;
            }

            return t.prototype = mr.prototype, Object.defineProperty(t.prototype, "constructor", {
              writable: !0,
              configurable: !0,
              enumerable: !1,
              value: t
            }), t;
          }();
        }(e), function (e) {
          Cr(Document.prototype, "createElement", function (t) {
            return Vr(e, this, t, null);
          }), Cr(Document.prototype, "importNode", function (t, n) {
            return t = Vn.call(this, t, !!n), this.__CE_registry ? Ur(e, t) : Rr(e, t), t;
          }), Cr(Document.prototype, "createElementNS", function (t, n) {
            return Vr(e, this, n, t);
          }), Wr(e, Document.prototype, {
            prepend: qn,
            append: zn
          });
        }(e), Wr(e, DocumentFragment.prototype, {
          prepend: Wn,
          append: Gn
        }), function (e) {
          function t(t, n) {
            Object.defineProperty(t, "textContent", {
              enumerable: n.enumerable,
              configurable: !0,
              get: n.get,
              set: function set(t) {
                if (this.nodeType === Node.TEXT_NODE) n.set.call(this, t);else {
                  var r = void 0;

                  if (this.firstChild) {
                    var o = this.childNodes,
                        i = o.length;

                    if (0 < i && Er(this)) {
                      r = Array(i);

                      for (var s = 0; s < i; s++) {
                        r[s] = o[s];
                      }
                    }
                  }

                  if (n.set.call(this, t), r) for (t = 0; t < r.length; t++) {
                    Hr(e, r[t]);
                  }
                }
              }
            });
          }

          Cr(Node.prototype, "insertBefore", function (t, n) {
            if (_instanceof(t, DocumentFragment)) {
              var r = Sr(t);
              if (t = $n.call(this, t, n), Er(this)) for (n = 0; n < r.length; n++) {
                Fr(e, r[n]);
              }
              return t;
            }

            return r = _instanceof(t, Element) && Er(t), n = $n.call(this, t, n), r && Hr(e, t), Er(this) && Fr(e, t), n;
          }), Cr(Node.prototype, "appendChild", function (t) {
            if (_instanceof(t, DocumentFragment)) {
              var n = Sr(t);
              if (t = Kn.call(this, t), Er(this)) for (var r = 0; r < n.length; r++) {
                Fr(e, n[r]);
              }
              return t;
            }

            return n = _instanceof(t, Element) && Er(t), r = Kn.call(this, t), n && Hr(e, t), Er(this) && Fr(e, t), r;
          }), Cr(Node.prototype, "cloneNode", function (t) {
            return t = Jn.call(this, !!t), this.ownerDocument.__CE_registry ? Ur(e, t) : Rr(e, t), t;
          }), Cr(Node.prototype, "removeChild", function (t) {
            var n = _instanceof(t, Element) && Er(t),
                r = Xn.call(this, t);
            return n && Hr(e, t), r;
          }), Cr(Node.prototype, "replaceChild", function (t, n) {
            if (_instanceof(t, DocumentFragment)) {
              var r = Sr(t);
              if (t = Yn.call(this, t, n), Er(this)) for (Hr(e, n), n = 0; n < r.length; n++) {
                Fr(e, r[n]);
              }
              return t;
            }

            r = _instanceof(t, Element) && Er(t);
            var o = Yn.call(this, t, n),
                i = Er(this);
            return i && Hr(e, n), r && Hr(e, t), i && Fr(e, t), o;
          }), Zn && Zn.get ? t(Node.prototype, Zn) : function (e, t) {
            e.a = !0, e.b.push(t);
          }(e, function (e) {
            t(e, {
              enumerable: !0,
              configurable: !0,
              get: function get() {
                for (var e = [], t = this.firstChild; t; t = t.nextSibling) {
                  t.nodeType !== Node.COMMENT_NODE && e.push(t.textContent);
                }

                return e.join("");
              },
              set: function set(e) {
                for (; this.firstChild;) {
                  Xn.call(this, this.firstChild);
                }

                null != e && "" !== e && Kn.call(this, document.createTextNode(e));
              }
            });
          });
        }(e), Gr(e), e = new Pr(e), document.__CE_registry = e, Object.defineProperty(window, "customElements", {
          configurable: !0,
          enumerable: !0,
          value: e
        });
      }

      function $r() {
        this.end = this.start = 0, this.rules = this.parent = this.previous = null, this.cssText = this.parsedCssText = "", this.atRule = !1, this.type = 0, this.parsedSelector = this.selector = this.keyframesName = "";
      }

      function Xr(e) {
        var t = e = e.replace(ro, "").replace(oo, ""),
            n = new $r();
        n.start = 0, n.end = t.length;

        for (var r = n, o = 0, i = t.length; o < i; o++) {
          if ("{" === t[o]) {
            r.rules || (r.rules = []);
            var s = r,
                a = s.rules[s.rules.length - 1] || null;
            (r = new $r()).start = o + 1, r.parent = s, r.previous = a, s.rules.push(r);
          } else "}" === t[o] && (r.end = o + 1, r = r.parent || n);
        }

        return function e(t, n) {
          var r = n.substring(t.start, t.end - 1);
          if (t.parsedCssText = t.cssText = r.trim(), t.parent && (r = (r = (r = function (e) {
            return e.replace(/\\([0-9a-f]{1,6})\s/gi, function (e, t) {
              for (t = 6 - (e = t).length; t--;) {
                e = "0" + e;
              }

              return "\\" + e;
            });
          }(r = n.substring(t.previous ? t.previous.end : t.parent.start, t.start - 1))).replace(uo, " ")).substring(r.lastIndexOf(";") + 1), r = t.parsedSelector = t.selector = r.trim(), t.atRule = 0 === r.indexOf("@"), t.atRule ? 0 === r.indexOf("@media") ? t.type = to : r.match(co) && (t.type = eo, t.keyframesName = t.selector.split(uo).pop()) : t.type = 0 === r.indexOf("--") ? no : Qr), r = t.rules) for (var o = 0, i = r.length, s = void 0; o < i && (s = r[o]); o++) {
            e(s, n);
          }
          return t;
        }(n, e);
      }

      Jr && !Jr.forcePolyfill && "function" == typeof Jr.define && "function" == typeof Jr.get || Kr(), window.__CE_installPolyfill = Kr;
      var Yr,
          Zr,
          Qr = 1,
          eo = 7,
          to = 4,
          no = 1e3,
          ro = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
          oo = /@import[^;]*;/gim,
          io = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
          so = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
          ao = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
          lo = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
          co = /^@[^\s]*keyframes/,
          uo = /\s+/g,
          ho = !(window.ShadyDOM && window.ShadyDOM.inUse);

      function po(e) {
        Yr = (!e || !e.shimcssproperties) && (ho || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)")));
      }

      window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (Zr = window.ShadyCSS.cssBuild);
      var fo = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
      window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? Yr = window.ShadyCSS.nativeCss : window.ShadyCSS ? (po(window.ShadyCSS), window.ShadyCSS = void 0) : po(window.WebComponents && window.WebComponents.flags);
      var mo = Yr,
          yo = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
          _o = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
          vo = /(--[\w-]+)\s*([:,;)]|$)/gi,
          go = /(animation\s*:)|(animation-name\s*:)/,
          bo = /@media\s(.*)/,
          wo = /\{[^}]*\}/g,
          Eo = new Set();

      function So(e, t) {
        return e ? ("string" == typeof e && (e = Xr(e)), t && xo(e, t), function e(t, n, r) {
          r = void 0 === r ? "" : r;
          var o = "";

          if (t.cssText || t.rules) {
            var i,
                s = t.rules;

            if ((i = s) && (i = !((i = s[0]) && i.selector && 0 === i.selector.indexOf("--"))), i) {
              i = 0;

              for (var a = s.length, l = void 0; i < a && (l = s[i]); i++) {
                o = e(l, n, o);
              }
            } else n ? n = t.cssText : n = (n = (n = t.cssText).replace(io, "").replace(so, "")).replace(ao, "").replace(lo, ""), (o = n.trim()) && (o = "  " + o + "\n");
          }

          return o && (t.selector && (r += t.selector + " {\n"), r += o, t.selector && (r += "}\n\n")), r;
        }(e, mo)) : "";
      }

      function No(e) {
        return !e.__cssRules && e.textContent && (e.__cssRules = Xr(e.textContent)), e.__cssRules || null;
      }

      function Co(e) {
        return !!e.parent && e.parent.type === eo;
      }

      function xo(e, t, n, r) {
        if (e) {
          var o = !1,
              i = e.type;

          if (r && i === to) {
            var s = e.selector.match(bo);
            s && (window.matchMedia(s[1]).matches || (o = !0));
          }

          if (i === Qr ? t(e) : n && i === eo ? n(e) : i === no && (o = !0), (e = e.rules) && !o) for (o = 0, i = e.length, s = void 0; o < i && (s = e[o]); o++) {
            xo(s, t, n, r);
          }
        }
      }

      function To(e, t, n, r) {
        var o = document.createElement("style");
        return t && o.setAttribute("scope", t), o.textContent = e, Do(o, n, r), o;
      }

      var Oo = null;

      function Po(e) {
        e = document.createComment(" Shady DOM styles for " + e + " ");
        var t = document.head;
        return t.insertBefore(e, (Oo ? Oo.nextSibling : null) || t.firstChild), Oo = e;
      }

      function Do(e, t, n) {
        (t = t || document.head).insertBefore(e, n && n.nextSibling || t.firstChild), Oo ? e.compareDocumentPosition(Oo) === Node.DOCUMENT_POSITION_PRECEDING && (Oo = e) : Oo = e;
      }

      function Mo(e, t) {
        for (var n = 0, r = e.length; t < r; t++) {
          if ("(" === e[t]) n++;else if (")" === e[t] && 0 == --n) return t;
        }

        return -1;
      }

      function Lo(e, t) {
        ho ? e.setAttribute("class", t) : window.ShadyDOM.nativeMethods.setAttribute.call(e, "class", t);
      }

      var Ao = window.ShadyDOM && window.ShadyDOM.wrap || function (e) {
        return e;
      };

      function ko(e) {
        var t = e.localName,
            n = "";
        return t ? -1 < t.indexOf("-") || (n = t, t = e.getAttribute && e.getAttribute("is") || "") : (t = e.is, n = e["extends"]), {
          is: t,
          Y: n
        };
      }

      function jo(e) {
        for (var t = [], n = "", r = 0; 0 <= r && r < e.length; r++) {
          if ("(" === e[r]) {
            var o = Mo(e, r);
            n += e.slice(r, o + 1), r = o;
          } else "," === e[r] ? (t.push(n), n = "") : n += e[r];
        }

        return n && t.push(n), t;
      }

      function Ro(e) {
        if (void 0 !== Zr) return Zr;

        if (void 0 === e.__cssBuild) {
          var t = e.getAttribute("css-build");
          if (t) e.__cssBuild = t;else {
            if ("" !== (t = _instanceof(t = "template" === e.localName ? e.content.firstChild : e.firstChild, Comment) && "css-build" === (t = t.textContent.trim().split(":"))[0] ? t[1] : "")) {
              var n = "template" === e.localName ? e.content.firstChild : e.firstChild;
              n.parentNode.removeChild(n);
            }

            e.__cssBuild = t;
          }
        }

        return e.__cssBuild || "";
      }

      function Io(e) {
        return !("" === (e = void 0 === e ? "" : e) || !mo) && (ho ? "shadow" === e : "shady" === e);
      }

      function Fo() {}

      function Ho(e, t, n) {
        var r;
        if (t.nodeType === Node.ELEMENT_NODE && n(t), r = "template" === t.localName ? (t.content || t._content || t).childNodes : t.children || t.childNodes) for (t = 0; t < r.length; t++) {
          Ho(e, r[t], n);
        }
      }

      function Uo(e, t, n) {
        if (t) if (e.classList) n ? (e.classList.remove("style-scope"), e.classList.remove(t)) : (e.classList.add("style-scope"), e.classList.add(t));else if (e.getAttribute) {
          var r = e.getAttribute("class");
          n ? r && Lo(e, t = r.replace("style-scope", "").replace(t, "")) : Lo(e, (r ? r + " " : "") + "style-scope " + t);
        }
      }

      function Bo(e, t, n) {
        Ho(ri, e, function (e) {
          Uo(e, t, !0), Uo(e, n);
        });
      }

      function Vo(e, t) {
        Ho(ri, e, function (e) {
          Uo(e, t || "", !0);
        });
      }

      function qo(e, t, n, r, o) {
        var i = ri;
        return "" === (o = void 0 === o ? "" : o) && (ho || "shady" === (void 0 === r ? "" : r) ? o = So(t, n) : o = function (e, t, n, r, o) {
          var i = zo(n, r);
          return n = n ? "." + n : "", So(t, function (t) {
            t.c || (t.selector = t.B = Wo(e, t, e.b, n, i), t.c = !0), o && o(t, n, i);
          });
        }(i, t, (e = ko(e)).is, e.Y, n) + "\n\n"), o.trim();
      }

      function zo(e, t) {
        return t ? "[is=" + e + "]" : e;
      }

      function Wo(e, t, n, r, o) {
        var i = jo(t.selector);

        if (!Co(t)) {
          t = 0;

          for (var s = i.length, a = void 0; t < s && (a = i[t]); t++) {
            i[t] = n.call(e, a, r, o);
          }
        }

        return i.filter(function (e) {
          return !!e;
        }).join(",");
      }

      function Go(e) {
        return e.replace($o, function (e, t, n) {
          return -1 < n.indexOf("+") ? n = n.replace(/\+/g, "___") : -1 < n.indexOf("___") && (n = n.replace(/___/g, "+")), ":" + t + "(" + n + ")";
        });
      }

      function Jo(e, t) {
        e = e.split(/(\[.+?\])/);

        for (var n = [], r = 0; r < e.length; r++) {
          if (1 == r % 2) n.push(e[r]);else {
            var o = e[r];
            "" === o && r === e.length - 1 || ((o = o.split(":"))[0] += t, n.push(o.join(":")));
          }
        }

        return n.join("");
      }

      function Ko(e) {
        ":root" === e.selector && (e.selector = "html");
      }

      Fo.prototype.b = function (e, t, n) {
        var r = !1;
        e = e.trim();
        var o = $o.test(e);
        o && (e = Go(e = e.replace($o, function (e, t, n) {
          return ":" + t + "(" + n.replace(/\s/g, "") + ")";
        })));
        var i = ni.test(e);

        if (i) {
          var s = function (e) {
            for (var t, n = []; t = e.match(ni);) {
              var r = t.index,
                  o = Mo(e, r);
              if (-1 === o) throw Error(t.input + " selector missing ')'");
              t = e.slice(r, o + 1), e = e.replace(t, ""), n.push(t);
            }

            return {
              oa: e,
              matches: n
            };
          }(e);

          e = s.oa, s = s.matches;
        }

        return e = (e = e.replace(Zo, ":host $1")).replace(Xo, function (e, o, i) {
          return r || (e = function (e, t, n, r) {
            var o = e.indexOf("::slotted");

            if (0 <= e.indexOf(":host") ? e = function (e, t) {
              var n = e.match(Qo);
              return (n = n && n[2].trim() || "") ? n[0].match(Yo) ? e.replace(Qo, function (e, n, r) {
                return t + r;
              }) : n.split(Yo)[0] === t ? n : "should_not_match" : e.replace(":host", t);
            }(e, r) : 0 !== o && (e = n ? Jo(e, n) : e), n = !1, 0 <= o && (t = "", n = !0), n) {
              var i = !0;
              n && (e = e.replace(ei, function (e, t) {
                return " > " + t;
              }));
            }

            return {
              value: e,
              Ga: t,
              stop: i
            };
          }(i, o, t, n), r = r || e.stop, o = e.Ga, i = e.value), o + i;
        }), i && (e = function (e, t) {
          var n = e.split("");
          return t.reduce(function (e, t, r) {
            return e + t + n[r + 1];
          }, n[0]);
        }(e, s)), o && (e = Go(e)), e.replace(ti, function (e, t, n, r) {
          return '[dir="' + n + '"] ' + t + r + ", " + t + '[dir="' + n + '"]' + r;
        });
      }, Fo.prototype.c = function (e) {
        return e.match(":host") ? "" : e.match("::slotted") ? this.b(e, ":not(.style-scope)") : Jo(e.trim(), ":not(.style-scope)");
      }, s.Object.defineProperties(Fo.prototype, {
        a: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return "style-scope";
          }
        }
      });
      var $o = /:(nth[-\w]+)\(([^)]+)\)/,
          Xo = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
          Yo = /[[.:#*]/,
          Zo = /^(::slotted)/,
          Qo = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
          ei = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
          ti = /(.*):dir\((?:(ltr|rtl))\)(.*)/,
          ni = /:(?:matches|any|-(?:webkit|moz)-any)/,
          ri = new Fo();

      function oi(e, t, n, r, o) {
        this.J = e || null, this.b = t || null, this.ka = n || [], this.H = null, this.cssBuild = o || "", this.Y = r || "", this.a = this.I = this.M = null;
      }

      function ii(e) {
        return e ? e.__styleInfo : null;
      }

      function si(e, t) {
        return e.__styleInfo = t;
      }

      function ai(e) {
        var t = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;
        return t && t.call(this, e);
      }

      oi.prototype.c = function () {
        return this.J;
      }, oi.prototype._getStyleRules = oi.prototype.c;
      var li = /:host\s*>\s*/,
          ci = navigator.userAgent.match("Trident");

      function ui() {}

      function hi(e) {
        if (!e.A) {
          var t = {},
              n = {};
          di(e, n) && (t.L = n, e.rules = null), t.cssText = e.parsedCssText.replace(wo, "").replace(yo, ""), e.A = t;
        }
      }

      function di(e, t) {
        var n = e.A;

        if (!n) {
          n = e.parsedCssText;

          for (var r; e = yo.exec(n);) {
            "inherit" === (r = (e[2] || e[3]).trim()) && "unset" === r || (t[e[1].trim()] = r), r = !0;
          }

          return r;
        }

        if (n.L) return Object.assign(t, n.L), !0;
      }

      function pi(e, t, n) {
        return t && (t = 0 <= t.indexOf(";") ? fi(e, t, n) : function e(t, n) {
          var r = t.indexOf("var(");
          if (-1 === r) return n(t, "", "", "");
          var o = Mo(t, r + 3),
              i = t.substring(r + 4, o);
          return r = t.substring(0, r), t = e(t.substring(o + 1), n), -1 === (o = i.indexOf(",")) ? n(r, i.trim(), "", t) : n(r, i.substring(0, o).trim(), i.substring(o + 1).trim(), t);
        }(t, function (t, r, o, i) {
          return r ? ((r = pi(e, n[r], n)) && "initial" !== r ? "apply-shim-inherit" === r && (r = "inherit") : r = pi(e, n[o] || o, n) || o, t + (r || "") + i) : t + i;
        })), t && t.trim() || "";
      }

      function fi(e, t, n) {
        t = t.split(";");

        for (var r, o, i = 0; i < t.length; i++) {
          if (r = t[i]) {
            if (_o.lastIndex = 0, o = _o.exec(r)) r = pi(e, n[o[1]], n);else if (-1 !== (o = r.indexOf(":"))) {
              var s = r.substring(o);
              s = pi(e, s = s.trim(), n) || s, r = r.substring(0, o) + s;
            }
            t[i] = r && r.lastIndexOf(";") === r.length - 1 ? r.slice(0, -1) : r || "";
          }
        }

        return t.join(";");
      }

      function mi(e, t, n) {
        var r = {},
            o = {};
        return xo(t, function (t) {
          !function (e, t, n, r) {
            if (t.A || hi(t), t.A.L) {
              var o = ko(e);
              e = o.is, o = o.Y, o = e ? zo(e, o) : "html";
              var i = t.parsedSelector,
                  s = !!i.match(li) || "html" === o && -1 < i.indexOf("html"),
                  a = 0 === i.indexOf(":host") && !s;
              "shady" === n && (a = !(s = i === o + " > *." + o || -1 !== i.indexOf("html")) && 0 === i.indexOf(o)), (s || a) && (n = o, a && (t.B || (t.B = Wo(ri, t, ri.b, e ? "." + e : "", o)), n = t.B || o), s && "html" === o && (n = t.B || t.u), r({
                oa: n,
                Na: a,
                ab: s
              }));
            }
          }(e, t, n, function (n) {
            ai.call(e._element || e, n.oa) && (n.Na ? di(t, r) : di(t, o));
          });
        }, null, !0), {
          Ta: o,
          La: r
        };
      }

      function yi(e, t, n, r) {
        var o = ko(t),
            i = zo(o.is, o.Y),
            s = new RegExp("(?:^|[^.#[:])" + (t["extends"] ? "\\" + i.slice(0, -1) + "\\]" : i) + "($|[.:[\\s>+~])"),
            a = ii(t);
        o = a.J, a = a.cssBuild;

        var l = function (e, t) {
          e = e.b;
          var n = {};
          if (!ho && e) for (var r = 0, o = e[r]; r < e.length; o = e[++r]) {
            var i = o,
                s = t;
            i.f = new RegExp("\\b" + i.keyframesName + "(?!\\B|-)", "g"), i.a = i.keyframesName + "-" + s, i.B = i.B || i.selector, i.selector = i.B.replace(i.keyframesName, i.a), n[o.keyframesName] = _i(o);
          }
          return n;
        }(o, r);

        return qo(t, o, function (t) {
          var o = "";

          if (t.A || hi(t), t.A.cssText && (o = fi(e, t.A.cssText, n)), t.cssText = o, !ho && !Co(t) && t.cssText) {
            var a = o = t.cssText;
            if (null == t.sa && (t.sa = go.test(o)), t.sa) if (null == t.ca) for (var c in t.ca = [], l) {
              o !== (a = (a = l[c])(o)) && (o = a, t.ca.push(c));
            } else {
              for (c = 0; c < t.ca.length; ++c) {
                o = (a = l[t.ca[c]])(o);
              }

              a = o;
            }
            t.cssText = a, t.B = t.B || t.selector, o = "." + r, a = 0;

            for (var u = (c = jo(t.B)).length, h = void 0; a < u && (h = c[a]); a++) {
              c[a] = h.match(s) ? h.replace(i, o) : o + " " + h;
            }

            t.selector = c.join(",");
          }
        }, a);
      }

      function _i(e) {
        return function (t) {
          return t.replace(e.f, e.a);
        };
      }

      function vi(e, t) {
        var n = gi,
            r = No(e);
        e.textContent = So(r, function (e) {
          var r = e.cssText = e.parsedCssText;
          e.A && e.A.cssText && (r = r.replace(io, "").replace(so, ""), e.cssText = fi(n, r, t));
        });
      }

      s.Object.defineProperties(ui.prototype, {
        a: {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return "x-scope";
          }
        }
      });
      var gi = new ui(),
          bi = {},
          wi = window.customElements;

      if (wi && !ho && !fo) {
        var Ei = wi.define;

        wi.define = function (e, t, n) {
          bi[e] || (bi[e] = Po(e)), Ei.call(wi, e, t, n);
        };
      }

      function Si() {
        this.cache = {};
      }

      function Ni() {}

      Si.prototype.store = function (e, t, n, r) {
        var o = this.cache[e] || [];
        o.push({
          L: t,
          styleElement: n,
          I: r
        }), 100 < o.length && o.shift(), this.cache[e] = o;
      };

      var Ci = new RegExp(ri.a + "\\s*([^\\s]*)");

      function xi(e) {
        return (e = (e.classList && e.classList.value ? e.classList.value : e.getAttribute("class") || "").match(Ci)) ? e[1] : "";
      }

      function Ti(e) {
        var t = Ao(e).getRootNode();
        return t === e || t === e.ownerDocument ? "" : (e = t.host) ? ko(e).is : "";
      }

      function Oi(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          if (n.target !== document.documentElement && n.target !== document.head) for (var r = 0; r < n.addedNodes.length; r++) {
            var o = n.addedNodes[r];

            if (o.nodeType === Node.ELEMENT_NODE) {
              var i = o.getRootNode(),
                  s = xi(o);
              if (s && i === o.ownerDocument && ("style" !== o.localName && "template" !== o.localName || "" === Ro(o))) Vo(o, s);else if (_instanceof(i, ShadowRoot)) for ((i = Ti(o)) !== s && Bo(o, s, i), o = window.ShadyDOM.nativeMethods.querySelectorAll.call(o, ":not(." + ri.a + ")"), s = 0; s < o.length; s++) {
                var a = Ti(i = o[s]);
                a && Uo(i, a);
              }
            }
          }
        }
      }

      if (!(ho || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
        var Pi = new MutationObserver(Oi),
            Di = function Di(e) {
          Pi.observe(e, {
            childList: !0,
            subtree: !0
          });
        };

        if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Di(document);else {
          var Mi = function Mi() {
            Di(document.body);
          };

          window.HTMLImports ? window.HTMLImports.whenReady(Mi) : requestAnimationFrame(function () {
            if ("loading" === document.readyState) {
              var e = function e() {
                Mi(), document.removeEventListener("readystatechange", e);
              };

              document.addEventListener("readystatechange", e);
            } else Mi();
          });
        }

        Ni = function Ni() {
          Oi(Pi.takeRecords());
        };
      }

      var Li = {},
          Ai = Promise.resolve();

      function ki(e) {
        (e = Li[e]) && (e._applyShimCurrentVersion = e._applyShimCurrentVersion || 0, e._applyShimValidatingVersion = e._applyShimValidatingVersion || 0, e._applyShimNextVersion = (e._applyShimNextVersion || 0) + 1);
      }

      function ji(e) {
        return e._applyShimCurrentVersion === e._applyShimNextVersion;
      }

      var Ri = {},
          Ii = new Si();

      function Fi() {
        this.F = {}, this.c = document.documentElement;
        var e = new $r();
        e.rules = [], this.f = si(this.c, new oi(e)), this.u = !1, this.a = this.b = null;
      }

      function Hi(e) {
        var t = ko(e),
            n = t.is;
        t = t.Y;
        var r = bi[n] || null,
            o = Li[n];
        if (o) return si(e, t = new oi(n = o._styleAst, r, o.a, t, o = Ro(o))), t;
      }

      function Ui(e) {
        if (!e.b && window.ShadyCSS && window.ShadyCSS.ApplyShim) {
          e.b = window.ShadyCSS.ApplyShim, e.b.invalidCallback = ki;
          var t = !0;
        } else t = !1;

        return function (e) {
          !e.a && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (e.a = window.ShadyCSS.CustomStyleInterface, e.a.transformCallback = function (t) {
            e.xa(t);
          }, e.a.validateCallback = function () {
            requestAnimationFrame(function () {
              (e.a.enqueued || e.u) && e.flushCustomStyles();
            });
          });
        }(e), t;
      }

      function Bi(e, t, n) {
        var r = ko(t).is;

        if (n.H) {
          var o,
              i = n.H;

          for (o in i) {
            null === o ? t.style.removeProperty(o) : t.style.setProperty(o, i[o]);
          }
        }

        !(i = Li[r]) && t !== e.c || i && "" !== Ro(i) || !i || !i._style || ji(i) || ((ji(i) || i._applyShimValidatingVersion !== i._applyShimNextVersion) && (Ui(e), e.b && e.b.transformRules(i._styleAst, r), i._style.textContent = qo(t, n.J), function (e) {
          e._applyShimValidatingVersion = e._applyShimNextVersion, e._validating || (e._validating = !0, Ai.then(function () {
            e._applyShimCurrentVersion = e._applyShimNextVersion, e._validating = !1;
          }));
        }(i)), ho && (e = t.shadowRoot) && (e = e.querySelector("style")) && (e.textContent = qo(t, n.J)), n.J = i._styleAst);
      }

      function Vi(e, t) {
        return (t = Ao(t).getRootNode().host) ? ii(t) || Hi(t) ? t : Vi(e, t) : e.c;
      }

      function qi(e, t, n) {
        var r = Vi(e, t),
            o = ii(r),
            i = o.M;

        for (var s in r === e.c || i || (qi(e, r, o), i = o.M), e = Object.create(i || null), r = mi(t, n.J, n.cssBuild), t = function (e, t) {
          var n = {},
              r = [];
          return xo(e, function (e) {
            e.A || hi(e);
            var o = e.B || e.parsedSelector;
            t && e.A.L && o && ai.call(t, o) && (di(e, n), e = e.index, o = parseInt(e / 32, 10), r[o] = (r[o] || 0) | 1 << e % 32);
          }, null, !0), {
            L: n,
            key: r
          };
        }(o.J, t).L, Object.assign(e, r.La, t, r.Ta), t = n.H) {
          ((o = t[s]) || 0 === o) && (e[s] = o);
        }

        for (s = gi, t = Object.getOwnPropertyNames(e), o = 0; o < t.length; o++) {
          e[r = t[o]] = pi(s, e[r], e);
        }

        n.M = e;
      }

      (n = Fi.prototype).flush = function () {
        Ni();
      }, n.Ja = function (e) {
        return No(e);
      }, n.Xa = function (e) {
        return So(e);
      }, n.prepareTemplate = function (e, t, n) {
        this.prepareTemplateDom(e, t), this.prepareTemplateStyles(e, t, n);
      }, n.prepareTemplateStyles = function (e, t, n) {
        if (!e._prepared && !fo) {
          ho || bi[t] || (bi[t] = Po(t)), e._prepared = !0, e.name = t, e["extends"] = n, Li[t] = e;
          var r = Ro(e),
              o = Io(r);
          n = {
            is: t,
            "extends": n
          };

          for (var i = [], s = e.content.querySelectorAll("style"), a = 0; a < s.length; a++) {
            var l = s[a];

            if (l.hasAttribute("shady-unscoped")) {
              if (!ho) {
                var c = l.textContent;
                Eo.has(c) || (Eo.add(c), c = l.cloneNode(!0), document.head.appendChild(c)), l.parentNode.removeChild(l);
              }
            } else i.push(l.textContent), l.parentNode.removeChild(l);
          }

          i = i.join("").trim() + (Ri[t] || ""), Ui(this), o || ((s = !r) && (s = _o.test(i) || yo.test(i), _o.lastIndex = 0, yo.lastIndex = 0), a = Xr(i), s && mo && this.b && this.b.transformRules(a, t), e._styleAst = a), s = [], mo || (s = function (e) {
            var t = {},
                n = [],
                r = 0;

            for (var o in xo(e, function (e) {
              hi(e), e.index = r++, e = e.A.cssText;

              for (var n; n = vo.exec(e);) {
                var o = n[1];
                ":" !== n[2] && (t[o] = !0);
              }
            }, function (e) {
              n.push(e);
            }), e.b = n, e = [], t) {
              e.push(o);
            }

            return e;
          }(e._styleAst)), s.length && !mo || (a = ho ? e.content : null, t = bi[t] || null, r = (r = qo(n, e._styleAst, null, r, o ? i : "")).length ? To(r, n.is, a, t) : null, e._style = r), e.a = s;
        }
      }, n.Ra = function (e, t) {
        Ri[t] = e.join(" ");
      }, n.prepareTemplateDom = function (e, t) {
        if (!fo) {
          var n = Ro(e);
          ho || "shady" === n || e._domPrepared || (e._domPrepared = !0, function (e, t) {
            Ho(ri, e, function (e) {
              Uo(e, t || "");
            });
          }(e.content, t));
        }
      }, n.flushCustomStyles = function () {
        if (!fo) {
          var e = Ui(this);

          if (this.a) {
            var t = this.a.processStyles();

            if ((e || this.a.enqueued) && !Io(this.f.cssBuild)) {
              if (mo) {
                if (!this.f.cssBuild) for (e = 0; e < t.length; e++) {
                  var n = this.a.getStyleForCustomStyle(t[e]);

                  if (n && mo && this.b) {
                    var r = No(n);
                    Ui(this), this.b.transformRules(r), n.textContent = So(r);
                  }
                }
              } else {
                for (function (e, t) {
                  (t = t.map(function (t) {
                    return e.a.getStyleForCustomStyle(t);
                  }).filter(function (e) {
                    return !!e;
                  })).sort(function (e, t) {
                    return (e = t.compareDocumentPosition(e)) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : e & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0;
                  }), e.f.J.rules = t.map(function (e) {
                    return No(e);
                  });
                }(this, t), qi(this, this.c, this.f), e = 0; e < t.length; e++) {
                  (n = this.a.getStyleForCustomStyle(t[e])) && vi(n, this.f.M);
                }

                this.u && this.styleDocument();
              }

              this.a.enqueued = !1;
            }
          }
        }
      }, n.styleElement = function (e, t) {
        if (fo) {
          if (t) {
            ii(e) || si(e, new oi(null));
            var n = ii(e);
            n.H = n.H || {}, Object.assign(n.H, t), Bi(this, e, n);
          }
        } else if (n = ii(e) || Hi(e)) if (e !== this.c && (this.u = !0), t && (n.H = n.H || {}, Object.assign(n.H, t)), mo) Bi(this, e, n);else if (this.flush(), qi(this, e, n), n.ka && n.ka.length) {
          var r;
          t = ko(e).is;

          e: {
            if (r = Ii.cache[t]) for (var o = r.length - 1; 0 <= o; o--) {
              var i = r[o];

              t: {
                for (var s = n.ka, a = 0; a < s.length; a++) {
                  var l = s[a];

                  if (i.L[l] !== n.M[l]) {
                    s = !1;
                    break t;
                  }
                }

                s = !0;
              }

              if (s) {
                r = i;
                break e;
              }
            }
            r = void 0;
          }

          s = r ? r.styleElement : null, o = n.I, (i = r && r.I) || (i = t + "-" + (i = this.F[t] = (this.F[t] || 0) + 1)), n.I = i, i = n.I, a = gi, a = s ? s.textContent || "" : yi(a, e, n.M, i);
          var c = (l = ii(e)).a;
          c && !ho && c !== s && (c._useCount--, 0 >= c._useCount && c.parentNode && c.parentNode.removeChild(c)), ho ? l.a ? (l.a.textContent = a, s = l.a) : a && (s = To(a, i, e.shadowRoot, l.b)) : s ? s.parentNode || (ci && -1 < a.indexOf("@media") && (s.textContent = a), Do(s, null, l.b)) : a && (s = To(a, i, null, l.b)), s && (s._useCount = s._useCount || 0, l.a != s && s._useCount++, l.a = s), i = s, ho || (s = n.I, l = a = e.getAttribute("class") || "", o && (l = a.replace(new RegExp("\\s*x-scope\\s*" + o + "\\s*", "g"), " ")), a !== (l += (l ? " " : "") + "x-scope " + s) && Lo(e, l)), r || Ii.store(t, n.M, i, n.I);
        }
      }, n.styleDocument = function (e) {
        this.styleSubtree(this.c, e);
      }, n.styleSubtree = function (e, t) {
        var n = Ao(e),
            r = n.shadowRoot,
            o = e === this.c;
        if ((r || o) && this.styleElement(e, t), e = o ? n : r) for (e = Array.from(e.querySelectorAll("*")).filter(function (e) {
          return Ao(e).shadowRoot;
        }), t = 0; t < e.length; t++) {
          this.styleSubtree(e[t]);
        }
      }, n.xa = function (e) {
        var t = this,
            n = Ro(e);

        if (n !== this.f.cssBuild && (this.f.cssBuild = n), !Io(n)) {
          var r = No(e);
          xo(r, function (e) {
            if (ho) Ko(e);else {
              var r = ri;
              e.selector = e.parsedSelector, Ko(e), e.selector = e.B = Wo(r, e, r.c, void 0, void 0);
            }
            mo && "" === n && (Ui(t), t.b && t.b.transformRule(e));
          }), mo ? e.textContent = So(r) : this.f.J.rules.push(r);
        }
      }, n.getComputedStyleValue = function (e, t) {
        var n;
        return mo || (n = (ii(e) || ii(Vi(this, e))).M[t]), (n = n || window.getComputedStyle(e).getPropertyValue(t)) ? n.trim() : "";
      }, n.Wa = function (e, t) {
        var n,
            r = Ao(e).getRootNode();

        if (n = t ? ("string" == typeof t ? t : String(t)).split(/\s/) : [], !(t = r.host && r.host.localName) && (r = e.getAttribute("class"))) {
          r = r.split(/\s/);

          for (var o = 0; o < r.length; o++) {
            if (r[o] === ri.a) {
              t = r[o + 1];
              break;
            }
          }
        }

        t && n.push(ri.a, t), mo || (t = ii(e)) && t.I && n.push(gi.a, t.I), Lo(e, n.join(" "));
      }, n.Ea = function (e) {
        return ii(e);
      }, n.Va = function (e, t) {
        Uo(e, t);
      }, n.Ya = function (e, t) {
        Uo(e, t, !0);
      }, n.Ua = function (e) {
        return Ti(e);
      }, n.Ha = function (e) {
        return xi(e);
      }, Fi.prototype.flush = Fi.prototype.flush, Fi.prototype.prepareTemplate = Fi.prototype.prepareTemplate, Fi.prototype.styleElement = Fi.prototype.styleElement, Fi.prototype.styleDocument = Fi.prototype.styleDocument, Fi.prototype.styleSubtree = Fi.prototype.styleSubtree, Fi.prototype.getComputedStyleValue = Fi.prototype.getComputedStyleValue, Fi.prototype.setElementClass = Fi.prototype.Wa, Fi.prototype._styleInfoForNode = Fi.prototype.Ea, Fi.prototype.transformCustomStyleForDocument = Fi.prototype.xa, Fi.prototype.getStyleAst = Fi.prototype.Ja, Fi.prototype.styleAstToString = Fi.prototype.Xa, Fi.prototype.flushCustomStyles = Fi.prototype.flushCustomStyles, Fi.prototype.scopeNode = Fi.prototype.Va, Fi.prototype.unscopeNode = Fi.prototype.Ya, Fi.prototype.scopeForNode = Fi.prototype.Ua, Fi.prototype.currentScopeForNode = Fi.prototype.Ha, Fi.prototype.prepareAdoptedCssText = Fi.prototype.Ra, Object.defineProperties(Fi.prototype, {
        nativeShadow: {
          get: function get() {
            return ho;
          }
        },
        nativeCss: {
          get: function get() {
            return mo;
          }
        }
      });
      var zi,
          Wi,
          Gi = new Fi();
      window.ShadyCSS && (zi = window.ShadyCSS.ApplyShim, Wi = window.ShadyCSS.CustomStyleInterface), window.ShadyCSS = {
        ScopingShim: Gi,
        prepareTemplate: function prepareTemplate(e, t, n) {
          Gi.flushCustomStyles(), Gi.prepareTemplate(e, t, n);
        },
        prepareTemplateDom: function prepareTemplateDom(e, t) {
          Gi.prepareTemplateDom(e, t);
        },
        prepareTemplateStyles: function prepareTemplateStyles(e, t, n) {
          Gi.flushCustomStyles(), Gi.prepareTemplateStyles(e, t, n);
        },
        styleSubtree: function styleSubtree(e, t) {
          Gi.flushCustomStyles(), Gi.styleSubtree(e, t);
        },
        styleElement: function styleElement(e) {
          Gi.flushCustomStyles(), Gi.styleElement(e);
        },
        styleDocument: function styleDocument(e) {
          Gi.flushCustomStyles(), Gi.styleDocument(e);
        },
        flushCustomStyles: function flushCustomStyles() {
          Gi.flushCustomStyles();
        },
        getComputedStyleValue: function getComputedStyleValue(e, t) {
          return Gi.getComputedStyleValue(e, t);
        },
        nativeCss: mo,
        nativeShadow: ho,
        cssBuild: Zr,
        disableRuntime: fo
      }, zi && (window.ShadyCSS.ApplyShim = zi), Wi && (window.ShadyCSS.CustomStyleInterface = Wi), function (e) {
        function t(e) {
          return "" == e && (i.call(this), this.i = !0), e.toLowerCase();
        }

        function n(e) {
          var t = e.charCodeAt(0);
          return 32 < t && 127 > t && -1 == [34, 35, 60, 62, 63, 96].indexOf(t) ? e : encodeURIComponent(e);
        }

        function r(e) {
          var t = e.charCodeAt(0);
          return 32 < t && 127 > t && -1 == [34, 35, 60, 62, 96].indexOf(t) ? e : encodeURIComponent(e);
        }

        function o(e, o, s) {
          function a(e) {
            _.push(e);
          }

          var l = o || "scheme start",
              p = 0,
              f = "",
              m = !1,
              y = !1,
              _ = [];

          e: for (; (null != e[p - 1] || 0 == p) && !this.i;) {
            var v = e[p];

            switch (l) {
              case "scheme start":
                if (!v || !h.test(v)) {
                  if (o) {
                    a("Invalid scheme.");
                    break e;
                  }

                  f = "", l = "no scheme";
                  continue;
                }

                f += v.toLowerCase(), l = "scheme";
                break;

              case "scheme":
                if (v && d.test(v)) f += v.toLowerCase();else {
                  if (":" != v) {
                    if (o) {
                      null != v && a("Code point not allowed in scheme: " + v);
                      break e;
                    }

                    f = "", p = 0, l = "no scheme";
                    continue;
                  }

                  if (this.h = f, f = "", o) break e;
                  void 0 !== c[this.h] && (this.C = !0), l = "file" == this.h ? "relative" : this.C && s && s.h == this.h ? "relative or authority" : this.C ? "authority first slash" : "scheme data";
                }
                break;

              case "scheme data":
                "?" == v ? (this.o = "?", l = "query") : "#" == v ? (this.v = "#", l = "fragment") : null != v && "\t" != v && "\n" != v && "\r" != v && (this.ga += n(v));
                break;

              case "no scheme":
                if (s && void 0 !== c[s.h]) {
                  l = "relative";
                  continue;
                }

                a("Missing scheme."), i.call(this), this.i = !0;
                break;

              case "relative or authority":
                if ("/" != v || "/" != e[p + 1]) {
                  a("Expected /, got: " + v), l = "relative";
                  continue;
                }

                l = "authority ignore slashes";
                break;

              case "relative":
                if (this.C = !0, "file" != this.h && (this.h = s.h), null == v) {
                  this.j = s.j, this.m = s.m, this.l = s.l.slice(), this.o = s.o, this.s = s.s, this.g = s.g;
                  break e;
                }

                if ("/" == v || "\\" == v) "\\" == v && a("\\ is an invalid code point."), l = "relative slash";else if ("?" == v) this.j = s.j, this.m = s.m, this.l = s.l.slice(), this.o = "?", this.s = s.s, this.g = s.g, l = "query";else {
                  if ("#" != v) {
                    l = e[p + 1];
                    var g = e[p + 2];
                    ("file" != this.h || !h.test(v) || ":" != l && "|" != l || null != g && "/" != g && "\\" != g && "?" != g && "#" != g) && (this.j = s.j, this.m = s.m, this.s = s.s, this.g = s.g, this.l = s.l.slice(), this.l.pop()), l = "relative path";
                    continue;
                  }

                  this.j = s.j, this.m = s.m, this.l = s.l.slice(), this.o = s.o, this.v = "#", this.s = s.s, this.g = s.g, l = "fragment";
                }
                break;

              case "relative slash":
                if ("/" != v && "\\" != v) {
                  "file" != this.h && (this.j = s.j, this.m = s.m, this.s = s.s, this.g = s.g), l = "relative path";
                  continue;
                }

                "\\" == v && a("\\ is an invalid code point."), l = "file" == this.h ? "file host" : "authority ignore slashes";
                break;

              case "authority first slash":
                if ("/" != v) {
                  a("Expected '/', got: " + v), l = "authority ignore slashes";
                  continue;
                }

                l = "authority second slash";
                break;

              case "authority second slash":
                if (l = "authority ignore slashes", "/" != v) {
                  a("Expected '/', got: " + v);
                  continue;
                }

                break;

              case "authority ignore slashes":
                if ("/" != v && "\\" != v) {
                  l = "authority";
                  continue;
                }

                a("Expected authority, got: " + v);
                break;

              case "authority":
                if ("@" == v) {
                  for (m && (a("@ already seen."), f += "%40"), m = !0, v = 0; v < f.length; v++) {
                    "\t" == (g = f[v]) || "\n" == g || "\r" == g ? a("Invalid whitespace in authority.") : ":" == g && null === this.g ? this.g = "" : (g = n(g), null !== this.g ? this.g += g : this.s += g);
                  }

                  f = "";
                } else {
                  if (null == v || "/" == v || "\\" == v || "?" == v || "#" == v) {
                    p -= f.length, f = "", l = "host";
                    continue;
                  }

                  f += v;
                }

                break;

              case "file host":
                if (null == v || "/" == v || "\\" == v || "?" == v || "#" == v) {
                  2 != f.length || !h.test(f[0]) || ":" != f[1] && "|" != f[1] ? (0 != f.length && (this.j = t.call(this, f), f = ""), l = "relative path start") : l = "relative path";
                  continue;
                }

                "\t" == v || "\n" == v || "\r" == v ? a("Invalid whitespace in file host.") : f += v;
                break;

              case "host":
              case "hostname":
                if (":" != v || y) {
                  if (null == v || "/" == v || "\\" == v || "?" == v || "#" == v) {
                    if (this.j = t.call(this, f), f = "", l = "relative path start", o) break e;
                    continue;
                  }

                  "\t" != v && "\n" != v && "\r" != v ? ("[" == v ? y = !0 : "]" == v && (y = !1), f += v) : a("Invalid code point in host/hostname: " + v);
                } else if (this.j = t.call(this, f), f = "", l = "port", "hostname" == o) break e;

                break;

              case "port":
                if (/[0-9]/.test(v)) f += v;else {
                  if (null == v || "/" == v || "\\" == v || "?" == v || "#" == v || o) {
                    if ("" != f && ((f = parseInt(f, 10)) != c[this.h] && (this.m = f + ""), f = ""), o) break e;
                    l = "relative path start";
                    continue;
                  }

                  "\t" == v || "\n" == v || "\r" == v ? a("Invalid code point in port: " + v) : (i.call(this), this.i = !0);
                }
                break;

              case "relative path start":
                if ("\\" == v && a("'\\' not allowed in path."), l = "relative path", "/" != v && "\\" != v) continue;
                break;

              case "relative path":
                null != v && "/" != v && "\\" != v && (o || "?" != v && "#" != v) ? "\t" != v && "\n" != v && "\r" != v && (f += n(v)) : ("\\" == v && a("\\ not allowed in relative path."), (g = u[f.toLowerCase()]) && (f = g), ".." == f ? (this.l.pop(), "/" != v && "\\" != v && this.l.push("")) : "." == f && "/" != v && "\\" != v ? this.l.push("") : "." != f && ("file" == this.h && 0 == this.l.length && 2 == f.length && h.test(f[0]) && "|" == f[1] && (f = f[0] + ":"), this.l.push(f)), f = "", "?" == v ? (this.o = "?", l = "query") : "#" == v && (this.v = "#", l = "fragment"));
                break;

              case "query":
                o || "#" != v ? null != v && "\t" != v && "\n" != v && "\r" != v && (this.o += r(v)) : (this.v = "#", l = "fragment");
                break;

              case "fragment":
                null != v && "\t" != v && "\n" != v && "\r" != v && (this.v += v);
            }

            p++;
          }
        }

        function i() {
          this.s = this.ga = this.h = "", this.g = null, this.m = this.j = "", this.l = [], this.v = this.o = "", this.C = this.i = !1;
        }

        function s(e, t) {
          void 0 === t || _instanceof(t, s) || (t = new s(String(t))), this.a = e, i.call(this), o.call(this, this.a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, ""), null, t);
        }

        var a = !1;

        try {
          var l = new URL("b", "http://a");
          l.pathname = "c%20d", a = "http://a/c%20d" === l.href;
        } catch (e) {}

        if (!a) {
          var c = Object.create(null);
          c.ftp = 21, c.file = 0, c.gopher = 70, c.http = 80, c.https = 443, c.ws = 80, c.wss = 443;
          var u = Object.create(null);
          u["%2e"] = ".", u[".%2e"] = "..", u["%2e."] = "..", u["%2e%2e"] = "..";
          var h = /[a-zA-Z]/,
              d = /[a-zA-Z0-9\+\-\.]/;
          s.prototype = {
            toString: function toString() {
              return this.href;
            },

            get href() {
              if (this.i) return this.a;
              var e = "";
              return "" == this.s && null == this.g || (e = this.s + (null != this.g ? ":" + this.g : "") + "@"), this.protocol + (this.C ? "//" + e + this.host : "") + this.pathname + this.o + this.v;
            },

            set href(e) {
              i.call(this), o.call(this, e);
            },

            get protocol() {
              return this.h + ":";
            },

            set protocol(e) {
              this.i || o.call(this, e + ":", "scheme start");
            },

            get host() {
              return this.i ? "" : this.m ? this.j + ":" + this.m : this.j;
            },

            set host(e) {
              !this.i && this.C && o.call(this, e, "host");
            },

            get hostname() {
              return this.j;
            },

            set hostname(e) {
              !this.i && this.C && o.call(this, e, "hostname");
            },

            get port() {
              return this.m;
            },

            set port(e) {
              !this.i && this.C && o.call(this, e, "port");
            },

            get pathname() {
              return this.i ? "" : this.C ? "/" + this.l.join("/") : this.ga;
            },

            set pathname(e) {
              !this.i && this.C && (this.l = [], o.call(this, e, "relative path start"));
            },

            get search() {
              return this.i || !this.o || "?" == this.o ? "" : this.o;
            },

            set search(e) {
              !this.i && this.C && (this.o = "?", "?" == e[0] && (e = e.slice(1)), o.call(this, e, "query"));
            },

            get hash() {
              return this.i || !this.v || "#" == this.v ? "" : this.v;
            },

            set hash(e) {
              this.i || (e ? (this.v = "#", "#" == e[0] && (e = e.slice(1)), o.call(this, e, "fragment")) : this.v = "");
            },

            get origin() {
              var e;
              if (this.i || !this.h) return "";

              switch (this.h) {
                case "data":
                case "file":
                case "javascript":
                case "mailto":
                  return "null";
              }

              return (e = this.host) ? this.h + "://" + e : "";
            }

          };
          var p = e.URL;
          p && (s.createObjectURL = function (e) {
            return p.createObjectURL.apply(p, arguments);
          }, s.revokeObjectURL = function (e) {
            p.revokeObjectURL(e);
          }), e.URL = s;
        }
      }(window), Object.getOwnPropertyDescriptor(Node.prototype, "baseURI") || Object.defineProperty(Node.prototype, "baseURI", {
        get: function get() {
          var e = (this.ownerDocument || this).querySelector("base[href]");
          return e && e.href || window.location.href;
        },
        configurable: !0,
        enumerable: !0
      });
      var Ji = document.createElement("style");
      Ji.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
      var Ki = document.querySelector("head");
      Ki.insertBefore(Ji, Ki.firstChild);
      var $i = window.customElements,
          Xi = !1,
          Yi = null;

      function Zi() {
        window.HTMLTemplateElement.bootstrap && window.HTMLTemplateElement.bootstrap(window.document), Yi && Yi(), Xi = !0, window.WebComponents.ready = !0, document.dispatchEvent(new CustomEvent("WebComponentsReady", {
          bubbles: !0
        }));
      }

      $i.polyfillWrapFlushCallback && $i.polyfillWrapFlushCallback(function (e) {
        Yi = e, Xi && e();
      }), "complete" !== document.readyState ? (window.addEventListener("load", Zi), window.addEventListener("DOMContentLoaded", function () {
        window.removeEventListener("load", Zi), Zi();
      })) : Zi();
    }).call(this);
  }).call(this, n(0), n(4).setImmediate);
}, function (e, t, n) {
  (function (e) {
    var r = void 0 !== e && e || "undefined" != typeof self && self || window,
        o = Function.prototype.apply;

    function i(e, t) {
      this._id = e, this._clearFn = t;
    }

    t.setTimeout = function () {
      return new i(o.call(setTimeout, r, arguments), clearTimeout);
    }, t.setInterval = function () {
      return new i(o.call(setInterval, r, arguments), clearInterval);
    }, t.clearTimeout = t.clearInterval = function (e) {
      e && e.close();
    }, i.prototype.unref = i.prototype.ref = function () {}, i.prototype.close = function () {
      this._clearFn.call(r, this._id);
    }, t.enroll = function (e, t) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
    }, t.unenroll = function (e) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
    }, t._unrefActive = t.active = function (e) {
      clearTimeout(e._idleTimeoutId);
      var t = e._idleTimeout;
      t >= 0 && (e._idleTimeoutId = setTimeout(function () {
        e._onTimeout && e._onTimeout();
      }, t));
    }, n(5), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate;
  }).call(this, n(0));
}, function (e, t, n) {
  (function (e, t) {
    !function (e, n) {
      "use strict";

      if (!e.setImmediate) {
        var r,
            o,
            i,
            s,
            a,
            l = 1,
            c = {},
            u = !1,
            h = e.document,
            d = Object.getPrototypeOf && Object.getPrototypeOf(e);
        d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? r = function r(e) {
          t.nextTick(function () {
            f(e);
          });
        } : !function () {
          if (e.postMessage && !e.importScripts) {
            var t = !0,
                n = e.onmessage;
            return e.onmessage = function () {
              t = !1;
            }, e.postMessage("", "*"), e.onmessage = n, t;
          }
        }() ? e.MessageChannel ? ((i = new MessageChannel()).port1.onmessage = function (e) {
          f(e.data);
        }, r = function r(e) {
          i.port2.postMessage(e);
        }) : h && "onreadystatechange" in h.createElement("script") ? (o = h.documentElement, r = function r(e) {
          var t = h.createElement("script");
          t.onreadystatechange = function () {
            f(e), t.onreadystatechange = null, o.removeChild(t), t = null;
          }, o.appendChild(t);
        }) : r = function r(e) {
          setTimeout(f, 0, e);
        } : (s = "setImmediate$" + Math.random() + "$", a = function a(t) {
          t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(s) && f(+t.data.slice(s.length));
        }, e.addEventListener ? e.addEventListener("message", a, !1) : e.attachEvent("onmessage", a), r = function r(t) {
          e.postMessage(s + t, "*");
        }), d.setImmediate = function (e) {
          "function" != typeof e && (e = new Function("" + e));

          for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) {
            t[n] = arguments[n + 1];
          }

          var o = {
            callback: e,
            args: t
          };
          return c[l] = o, r(l), l++;
        }, d.clearImmediate = p;
      }

      function p(e) {
        delete c[e];
      }

      function f(e) {
        if (u) setTimeout(f, 0, e);else {
          var t = c[e];

          if (t) {
            u = !0;

            try {
              !function (e) {
                var t = e.callback,
                    r = e.args;

                switch (r.length) {
                  case 0:
                    t();
                    break;

                  case 1:
                    t(r[0]);
                    break;

                  case 2:
                    t(r[0], r[1]);
                    break;

                  case 3:
                    t(r[0], r[1], r[2]);
                    break;

                  default:
                    t.apply(n, r);
                }
              }(t);
            } finally {
              p(e), u = !1;
            }
          }
        }
      }
    }("undefined" == typeof self ? void 0 === e ? this : e : self);
  }).call(this, n(0), n(6));
}, function (e, t) {
  var n,
      r,
      o = e.exports = {};

  function i() {
    throw new Error("setTimeout has not been defined");
  }

  function s() {
    throw new Error("clearTimeout has not been defined");
  }

  function a(e) {
    if (n === setTimeout) return setTimeout(e, 0);
    if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);

    try {
      return n(e, 0);
    } catch (t) {
      try {
        return n.call(null, e, 0);
      } catch (t) {
        return n.call(this, e, 0);
      }
    }
  }

  !function () {
    try {
      n = "function" == typeof setTimeout ? setTimeout : i;
    } catch (e) {
      n = i;
    }

    try {
      r = "function" == typeof clearTimeout ? clearTimeout : s;
    } catch (e) {
      r = s;
    }
  }();
  var l,
      c = [],
      u = !1,
      h = -1;

  function d() {
    u && l && (u = !1, l.length ? c = l.concat(c) : h = -1, c.length && p());
  }

  function p() {
    if (!u) {
      var e = a(d);
      u = !0;

      for (var t = c.length; t;) {
        for (l = c, c = []; ++h < t;) {
          l && l[h].run();
        }

        h = -1, t = c.length;
      }

      l = null, u = !1, function (e) {
        if (r === clearTimeout) return clearTimeout(e);
        if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);

        try {
          r(e);
        } catch (t) {
          try {
            return r.call(null, e);
          } catch (t) {
            return r.call(this, e);
          }
        }
      }(e);
    }
  }

  function f(e, t) {
    this.fun = e, this.array = t;
  }

  function m() {}

  o.nextTick = function (e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }
    c.push(new f(e, t)), 1 !== c.length || u || a(p);
  }, f.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function (e) {
    return [];
  }, o.binding = function (e) {
    throw new Error("process.binding is not supported");
  }, o.cwd = function () {
    return "/";
  }, o.chdir = function (e) {
    throw new Error("process.chdir is not supported");
  }, o.umask = function () {
    return 0;
  };
}, function (e, t, n) {
  "use strict";

  n.r(t);
  n(1), n(2), n(3);
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  var r = new WeakMap(),
      o = function o(e) {
    return "function" == typeof e && r.has(e);
  },
      i = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
      s = function s(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    for (; t !== n;) {
      var _n2 = t.nextSibling;
      e.removeChild(t), t = _n2;
    }
  },
      a = {},
      l = {},
      c = "{{lit-".concat(String(Math.random()).slice(2), "}}"),
      u = "<!--".concat(c, "-->"),
      h = new RegExp("".concat(c, "|").concat(u)),
      d = "$lit$";

  var p = function p(e, t) {
    _classCallCheck(this, p);

    this.parts = [], this.element = t;
    var n = [],
        r = [],
        o = document.createTreeWalker(t.content, 133, null, !1);
    var i = 0,
        s = -1,
        a = 0;
    var l = e.strings,
        u = e.values.length;

    for (; a < u;) {
      var _e2 = o.nextNode();

      if (null !== _e2) {
        if (s++, 1 === _e2.nodeType) {
          if (_e2.hasAttributes()) {
            var _t2 = _e2.attributes,
                _n3 = _t2.length;
            var _r2 = 0;

            for (var _e3 = 0; _e3 < _n3; _e3++) {
              f(_t2[_e3].name, d) && _r2++;
            }

            for (; _r2-- > 0;) {
              var _t3 = l[a],
                  _n4 = _.exec(_t3)[2],
                  _r3 = _n4.toLowerCase() + d,
                  _o2 = _e2.getAttribute(_r3);

              _e2.removeAttribute(_r3);

              var _i2 = _o2.split(h);

              this.parts.push({
                type: "attribute",
                index: s,
                name: _n4,
                strings: _i2
              }), a += _i2.length - 1;
            }
          }

          "TEMPLATE" === _e2.tagName && (r.push(_e2), o.currentNode = _e2.content);
        } else if (3 === _e2.nodeType) {
          var _t4 = _e2.data;

          if (_t4.indexOf(c) >= 0) {
            var _r4 = _e2.parentNode,
                _o3 = _t4.split(h),
                _i3 = _o3.length - 1;

            for (var _t5 = 0; _t5 < _i3; _t5++) {
              var _n5 = void 0,
                  _i4 = _o3[_t5];

              if ("" === _i4) _n5 = y();else {
                var _e4 = _.exec(_i4);

                null !== _e4 && f(_e4[2], d) && (_i4 = _i4.slice(0, _e4.index) + _e4[1] + _e4[2].slice(0, -d.length) + _e4[3]), _n5 = document.createTextNode(_i4);
              }
              _r4.insertBefore(_n5, _e2), this.parts.push({
                type: "node",
                index: ++s
              });
            }

            "" === _o3[_i3] ? (_r4.insertBefore(y(), _e2), n.push(_e2)) : _e2.data = _o3[_i3], a += _i3;
          }
        } else if (8 === _e2.nodeType) if (_e2.data === c) {
          var _t6 = _e2.parentNode;
          null !== _e2.previousSibling && s !== i || (s++, _t6.insertBefore(y(), _e2)), i = s, this.parts.push({
            type: "node",
            index: s
          }), null === _e2.nextSibling ? _e2.data = "" : (n.push(_e2), s--), a++;
        } else {
          var _t7 = -1;

          for (; -1 !== (_t7 = _e2.data.indexOf(c, _t7 + 1));) {
            this.parts.push({
              type: "node",
              index: -1
            }), a++;
          }
        }
      } else o.currentNode = r.pop();
    }

    for (var _i5 = 0, _n6 = n; _i5 < _n6.length; _i5++) {
      var _e5 = _n6[_i5];

      _e5.parentNode.removeChild(_e5);
    }
  };

  var f = function f(e, t) {
    var n = e.length - t.length;
    return n >= 0 && e.slice(n) === t;
  },
      m = function m(e) {
    return -1 !== e.index;
  },
      y = function y() {
    return document.createComment("");
  },
      _ = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */


  var v =
  /*#__PURE__*/
  function () {
    function v(e, t, n) {
      _classCallCheck(this, v);

      this.__parts = [], this.template = e, this.processor = t, this.options = n;
    }

    _createClass(v, [{
      key: "update",
      value: function update(e) {
        var t = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.__parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _n7 = _step.value;
            void 0 !== _n7 && _n7.setValue(e[t]), t++;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.__parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _e6 = _step2.value;
            void 0 !== _e6 && _e6.commit();
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }, {
      key: "_clone",
      value: function _clone() {
        var e = i ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
            t = [],
            n = this.template.parts,
            r = document.createTreeWalker(e, 133, null, !1);
        var o,
            s = 0,
            a = 0,
            l = r.nextNode();

        for (; s < n.length;) {
          if (o = n[s], m(o)) {
            var _this$__parts;

            for (; a < o.index;) {
              a++, "TEMPLATE" === l.nodeName && (t.push(l), r.currentNode = l.content), null === (l = r.nextNode()) && (r.currentNode = t.pop(), l = r.nextNode());
            }

            if ("node" === o.type) {
              var _e7 = this.processor.handleTextExpression(this.options);

              _e7.insertAfterNode(l.previousSibling), this.__parts.push(_e7);
            } else (_this$__parts = this.__parts).push.apply(_this$__parts, _toConsumableArray(this.processor.handleAttributeExpressions(l, o.name, o.strings, this.options)));

            s++;
          } else this.__parts.push(void 0), s++;
        }

        return i && (document.adoptNode(e), customElements.upgrade(e)), e;
      }
    }]);

    return v;
  }();
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */


  var g = " ".concat(c, " ");

  var b =
  /*#__PURE__*/
  function () {
    function b(e, t, n, r) {
      _classCallCheck(this, b);

      this.strings = e, this.values = t, this.type = n, this.processor = r;
    }

    _createClass(b, [{
      key: "getHTML",
      value: function getHTML() {
        var e = this.strings.length - 1;
        var t = "",
            n = !1;

        for (var _r5 = 0; _r5 < e; _r5++) {
          var _e8 = this.strings[_r5],
              _o4 = _e8.lastIndexOf("\x3c!--");

          n = (_o4 > -1 || n) && -1 === _e8.indexOf("--\x3e", _o4 + 1);

          var _i6 = _.exec(_e8);

          t += null === _i6 ? _e8 + (n ? g : u) : _e8.substr(0, _i6.index) + _i6[1] + _i6[2] + d + _i6[3] + c;
        }

        return t += this.strings[e];
      }
    }, {
      key: "getTemplateElement",
      value: function getTemplateElement() {
        var e = document.createElement("template");
        return e.innerHTML = this.getHTML(), e;
      }
    }]);

    return b;
  }();
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */


  var w = function w(e) {
    return null === e || !("object" == _typeof(e) || "function" == typeof e);
  },
      E = function E(e) {
    return Array.isArray(e) || !(!e || !e[Symbol.iterator]);
  };

  var S =
  /*#__PURE__*/
  function () {
    function S(e, t, n) {
      _classCallCheck(this, S);

      this.dirty = !0, this.element = e, this.name = t, this.strings = n, this.parts = [];

      for (var _e9 = 0; _e9 < n.length - 1; _e9++) {
        this.parts[_e9] = this._createPart();
      }
    }

    _createClass(S, [{
      key: "_createPart",
      value: function _createPart() {
        return new N(this);
      }
    }, {
      key: "_getValue",
      value: function _getValue() {
        var e = this.strings,
            t = e.length - 1;
        var n = "";

        for (var _r6 = 0; _r6 < t; _r6++) {
          n += e[_r6];
          var _t8 = this.parts[_r6];

          if (void 0 !== _t8) {
            var _e10 = _t8.value;
            if (w(_e10) || !E(_e10)) n += "string" == typeof _e10 ? _e10 : String(_e10);else {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = _e10[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var _t9 = _step3.value;
                  n += "string" == typeof _t9 ? _t9 : String(_t9);
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                    _iterator3["return"]();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            }
          }
        }

        return n += e[t];
      }
    }, {
      key: "commit",
      value: function commit() {
        this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
      }
    }]);

    return S;
  }();

  var N =
  /*#__PURE__*/
  function () {
    function N(e) {
      _classCallCheck(this, N);

      this.value = void 0, this.committer = e;
    }

    _createClass(N, [{
      key: "setValue",
      value: function setValue(e) {
        e === a || w(e) && e === this.value || (this.value = e, o(e) || (this.committer.dirty = !0));
      }
    }, {
      key: "commit",
      value: function commit() {
        for (; o(this.value);) {
          var _e11 = this.value;
          this.value = a, _e11(this);
        }

        this.value !== a && this.committer.commit();
      }
    }]);

    return N;
  }();

  var C =
  /*#__PURE__*/
  function () {
    function C(e) {
      _classCallCheck(this, C);

      this.value = void 0, this.__pendingValue = void 0, this.options = e;
    }

    _createClass(C, [{
      key: "appendInto",
      value: function appendInto(e) {
        this.startNode = e.appendChild(y()), this.endNode = e.appendChild(y());
      }
    }, {
      key: "insertAfterNode",
      value: function insertAfterNode(e) {
        this.startNode = e, this.endNode = e.nextSibling;
      }
    }, {
      key: "appendIntoPart",
      value: function appendIntoPart(e) {
        e.__insert(this.startNode = y()), e.__insert(this.endNode = y());
      }
    }, {
      key: "insertAfterPart",
      value: function insertAfterPart(e) {
        e.__insert(this.startNode = y()), this.endNode = e.endNode, e.endNode = this.startNode;
      }
    }, {
      key: "setValue",
      value: function setValue(e) {
        this.__pendingValue = e;
      }
    }, {
      key: "commit",
      value: function commit() {
        for (; o(this.__pendingValue);) {
          var _e12 = this.__pendingValue;
          this.__pendingValue = a, _e12(this);
        }

        var e = this.__pendingValue;
        e !== a && (w(e) ? e !== this.value && this.__commitText(e) : _instanceof(e, b) ? this.__commitTemplateResult(e) : _instanceof(e, Node) ? this.__commitNode(e) : E(e) ? this.__commitIterable(e) : e === l ? (this.value = l, this.clear()) : this.__commitText(e));
      }
    }, {
      key: "__insert",
      value: function __insert(e) {
        this.endNode.parentNode.insertBefore(e, this.endNode);
      }
    }, {
      key: "__commitNode",
      value: function __commitNode(e) {
        this.value !== e && (this.clear(), this.__insert(e), this.value = e);
      }
    }, {
      key: "__commitText",
      value: function __commitText(e) {
        var t = this.startNode.nextSibling,
            n = "string" == typeof (e = null == e ? "" : e) ? e : String(e);
        t === this.endNode.previousSibling && 3 === t.nodeType ? t.data = n : this.__commitNode(document.createTextNode(n)), this.value = e;
      }
    }, {
      key: "__commitTemplateResult",
      value: function __commitTemplateResult(e) {
        var t = this.options.templateFactory(e);
        if (_instanceof(this.value, v) && this.value.template === t) this.value.update(e.values);else {
          var _n8 = new v(t, e.processor, this.options),
              _r7 = _n8._clone();

          _n8.update(e.values), this.__commitNode(_r7), this.value = _n8;
        }
      }
    }, {
      key: "__commitIterable",
      value: function __commitIterable(e) {
        Array.isArray(this.value) || (this.value = [], this.clear());
        var t = this.value;
        var n,
            r = 0;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = e[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _o5 = _step4.value;
            void 0 === (n = t[r]) && (n = new C(this.options), t.push(n), 0 === r ? n.appendIntoPart(this) : n.insertAfterPart(t[r - 1])), n.setValue(_o5), n.commit(), r++;
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
              _iterator4["return"]();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        r < t.length && (t.length = r, this.clear(n && n.endNode));
      }
    }, {
      key: "clear",
      value: function clear() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
        s(this.startNode.parentNode, e.nextSibling, this.endNode);
      }
    }]);

    return C;
  }();

  var x =
  /*#__PURE__*/
  function () {
    function x(e, t, n) {
      _classCallCheck(this, x);

      if (this.value = void 0, this.__pendingValue = void 0, 2 !== n.length || "" !== n[0] || "" !== n[1]) throw new Error("Boolean attributes can only contain a single expression");
      this.element = e, this.name = t, this.strings = n;
    }

    _createClass(x, [{
      key: "setValue",
      value: function setValue(e) {
        this.__pendingValue = e;
      }
    }, {
      key: "commit",
      value: function commit() {
        for (; o(this.__pendingValue);) {
          var _e13 = this.__pendingValue;
          this.__pendingValue = a, _e13(this);
        }

        if (this.__pendingValue === a) return;
        var e = !!this.__pendingValue;
        this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = a;
      }
    }]);

    return x;
  }();

  var T =
  /*#__PURE__*/
  function (_S) {
    _inherits(T, _S);

    function T(e, t, n) {
      var _this;

      _classCallCheck(this, T);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(T).call(this, e, t, n)), _this.single = 2 === n.length && "" === n[0] && "" === n[1];
      return _this;
    }

    _createClass(T, [{
      key: "_createPart",
      value: function _createPart() {
        return new O(this);
      }
    }, {
      key: "_getValue",
      value: function _getValue() {
        return this.single ? this.parts[0].value : _get(_getPrototypeOf(T.prototype), "_getValue", this).call(this);
      }
    }, {
      key: "commit",
      value: function commit() {
        this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
      }
    }]);

    return T;
  }(S);

  var O =
  /*#__PURE__*/
  function (_N) {
    _inherits(O, _N);

    function O() {
      _classCallCheck(this, O);

      return _possibleConstructorReturn(this, _getPrototypeOf(O).apply(this, arguments));
    }

    return O;
  }(N);

  var P = !1;

  try {
    var _e14 = {
      get capture() {
        return P = !0, !1;
      }

    };
    window.addEventListener("test", _e14, _e14), window.removeEventListener("test", _e14, _e14);
  } catch (e) {}

  var D =
  /*#__PURE__*/
  function () {
    function D(e, t, n) {
      var _this2 = this;

      _classCallCheck(this, D);

      this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = n, this.__boundHandleEvent = function (e) {
        return _this2.handleEvent(e);
      };
    }

    _createClass(D, [{
      key: "setValue",
      value: function setValue(e) {
        this.__pendingValue = e;
      }
    }, {
      key: "commit",
      value: function commit() {
        for (; o(this.__pendingValue);) {
          var _e15 = this.__pendingValue;
          this.__pendingValue = a, _e15(this);
        }

        if (this.__pendingValue === a) return;
        var e = this.__pendingValue,
            t = this.value,
            n = null == e || null != t && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive),
            r = null != e && (null == t || n);
        n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = M(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = a;
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(e) {
        "function" == typeof this.value ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
      }
    }]);

    return D;
  }();

  var M = function M(e) {
    return e && (P ? {
      capture: e.capture,
      passive: e.passive,
      once: e.once
    } : e.capture);
  };
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */


  var L = new (
  /*#__PURE__*/
  function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    _createClass(_class, [{
      key: "handleAttributeExpressions",
      value: function handleAttributeExpressions(e, t, n, r) {
        var o = t[0];

        if ("." === o) {
          return new T(e, t.slice(1), n).parts;
        }

        return "@" === o ? [new D(e, t.slice(1), r.eventContext)] : "?" === o ? [new x(e, t.slice(1), n)] : new S(e, t, n).parts;
      }
    }, {
      key: "handleTextExpression",
      value: function handleTextExpression(e) {
        return new C(e);
      }
    }]);

    return _class;
  }())();
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  function A(e) {
    var t = k.get(e.type);
    void 0 === t && (t = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    }, k.set(e.type, t));
    var n = t.stringsArray.get(e.strings);
    if (void 0 !== n) return n;
    var r = e.strings.join(c);
    return void 0 === (n = t.keyString.get(r)) && (n = new p(e, e.getTemplateElement()), t.keyString.set(r, n)), t.stringsArray.set(e.strings, n), n;
  }

  var k = new Map(),
      j = new WeakMap();
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.1.2");

  var R = function R(e) {
    for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      t[_key - 1] = arguments[_key];
    }

    return new b(e, t, "html", L);
  },
      I = 133;

  function F(e, t) {
    var n = e.element.content,
        r = e.parts,
        o = document.createTreeWalker(n, I, null, !1);
    var i = U(r),
        s = r[i],
        a = -1,
        l = 0;
    var c = [];
    var u = null;

    for (; o.nextNode();) {
      a++;
      var _e16 = o.currentNode;

      for (_e16.previousSibling === u && (u = null), t.has(_e16) && (c.push(_e16), null === u && (u = _e16)), null !== u && l++; void 0 !== s && s.index === a;) {
        s.index = null !== u ? -1 : s.index - l, s = r[i = U(r, i)];
      }
    }

    c.forEach(function (e) {
      return e.parentNode.removeChild(e);
    });
  }

  var H = function H(e) {
    var t = 11 === e.nodeType ? 0 : 1;
    var n = document.createTreeWalker(e, I, null, !1);

    for (; n.nextNode();) {
      t++;
    }

    return t;
  },
      U = function U(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    for (var _n9 = t + 1; _n9 < e.length; _n9++) {
      var _t10 = e[_n9];
      if (m(_t10)) return _n9;
    }

    return -1;
  };
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */


  var B = function B(e, t) {
    return "".concat(e, "--").concat(t);
  };

  var V = !0;
  void 0 === window.ShadyCSS ? V = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), V = !1);

  var q = function q(e) {
    return function (t) {
      var n = B(t.type, e);
      var r = k.get(n);
      void 0 === r && (r = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      }, k.set(n, r));
      var o = r.stringsArray.get(t.strings);
      if (void 0 !== o) return o;
      var i = t.strings.join(c);

      if (void 0 === (o = r.keyString.get(i))) {
        var _n10 = t.getTemplateElement();

        V && window.ShadyCSS.prepareTemplateDom(_n10, e), o = new p(t, _n10), r.keyString.set(i, o);
      }

      return r.stringsArray.set(t.strings, o), o;
    };
  },
      z = ["html", "svg"],
      W = new Set(),
      G = function G(e, t, n) {
    W.add(e);
    var r = n ? n.element : document.createElement("template"),
        o = t.querySelectorAll("style"),
        i = o.length;
    if (0 === i) return void window.ShadyCSS.prepareTemplateStyles(r, e);
    var s = document.createElement("style");

    for (var _e17 = 0; _e17 < i; _e17++) {
      var _t11 = o[_e17];
      _t11.parentNode.removeChild(_t11), s.textContent += _t11.textContent;
    }

    (function (e) {
      z.forEach(function (t) {
        var n = k.get(B(t, e));
        void 0 !== n && n.keyString.forEach(function (e) {
          var t = e.element.content,
              n = new Set();
          Array.from(t.querySelectorAll("style")).forEach(function (e) {
            n.add(e);
          }), F(e, n);
        });
      });
    })(e);

    var a = r.content;
    n ? function (e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var r = e.element.content,
          o = e.parts;
      if (null == n) return void r.appendChild(t);
      var i = document.createTreeWalker(r, I, null, !1);
      var s = U(o),
          a = 0,
          l = -1;

      for (; i.nextNode();) {
        for (l++, i.currentNode === n && (a = H(t), n.parentNode.insertBefore(t, n)); -1 !== s && o[s].index === l;) {
          if (a > 0) {
            for (; -1 !== s;) {
              o[s].index += a, s = U(o, s);
            }

            return;
          }

          s = U(o, s);
        }
      }
    }(n, s, a.firstChild) : a.insertBefore(s, a.firstChild), window.ShadyCSS.prepareTemplateStyles(r, e);
    var l = a.querySelector("style");
    if (window.ShadyCSS.nativeShadow && null !== l) t.insertBefore(l.cloneNode(!0), t.firstChild);else if (n) {
      a.insertBefore(s, a.firstChild);

      var _e18 = new Set();

      _e18.add(s), F(n, _e18);
    }
  };

  window.JSCompiler_renameProperty = function (e, t) {
    return e;
  };

  var J = {
    toAttribute: function toAttribute(e, t) {
      switch (t) {
        case Boolean:
          return e ? "" : null;

        case Object:
        case Array:
          return null == e ? e : JSON.stringify(e);
      }

      return e;
    },
    fromAttribute: function fromAttribute(e, t) {
      switch (t) {
        case Boolean:
          return null !== e;

        case Number:
          return null === e ? null : Number(e);

        case Object:
        case Array:
          return JSON.parse(e);
      }

      return e;
    }
  },
      K = function K(e, t) {
    return t !== e && (t == t || e == e);
  },
      $ = {
    attribute: !0,
    type: String,
    converter: J,
    reflect: !1,
    hasChanged: K
  },
      X = Promise.resolve(!0),
      Y = 1,
      Z = 4,
      Q = 8,
      ee = 16,
      te = 32,
      ne = "finalized";

  var re =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(re, _HTMLElement);

    function re() {
      var _this3;

      _classCallCheck(this, re);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(re).call(this)), _this3._updateState = 0, _this3._instanceProperties = void 0, _this3._updatePromise = X, _this3._hasConnectedResolver = void 0, _this3._changedProperties = new Map(), _this3._reflectingProperties = void 0, _this3.initialize();
      return _this3;
    }

    _createClass(re, [{
      key: "initialize",
      value: function initialize() {
        this._saveInstanceProperties(), this._requestUpdate();
      }
    }, {
      key: "_saveInstanceProperties",
      value: function _saveInstanceProperties() {
        var _this4 = this;

        this.constructor._classProperties.forEach(function (e, t) {
          if (_this4.hasOwnProperty(t)) {
            var _e19 = _this4[t];
            delete _this4[t], _this4._instanceProperties || (_this4._instanceProperties = new Map()), _this4._instanceProperties.set(t, _e19);
          }
        });
      }
    }, {
      key: "_applyInstanceProperties",
      value: function _applyInstanceProperties() {
        var _this5 = this;

        this._instanceProperties.forEach(function (e, t) {
          return _this5[t] = e;
        }), this._instanceProperties = void 0;
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this._updateState = this._updateState | te, this._hasConnectedResolver && (this._hasConnectedResolver(), this._hasConnectedResolver = void 0);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {}
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(e, t, n) {
        t !== n && this._attributeToProperty(e, n);
      }
    }, {
      key: "_propertyToAttribute",
      value: function _propertyToAttribute(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : $;

        var r = this.constructor,
            o = r._attributeNameForProperty(e, n);

        if (void 0 !== o) {
          var _e20 = r._propertyValueToAttribute(t, n);

          if (void 0 === _e20) return;
          this._updateState = this._updateState | Q, null == _e20 ? this.removeAttribute(o) : this.setAttribute(o, _e20), this._updateState = this._updateState & ~Q;
        }
      }
    }, {
      key: "_attributeToProperty",
      value: function _attributeToProperty(e, t) {
        if (this._updateState & Q) return;

        var n = this.constructor,
            r = n._attributeToPropertyMap.get(e);

        if (void 0 !== r) {
          var _e21 = n._classProperties.get(r) || $;

          this._updateState = this._updateState | ee, this[r] = n._propertyValueFromAttribute(t, _e21), this._updateState = this._updateState & ~ee;
        }
      }
    }, {
      key: "_requestUpdate",
      value: function _requestUpdate(e, t) {
        var n = !0;

        if (void 0 !== e) {
          var _r8 = this.constructor,
              _o6 = _r8._classProperties.get(e) || $;

          _r8._valueHasChanged(this[e], t, _o6.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== _o6.reflect || this._updateState & ee || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map()), this._reflectingProperties.set(e, _o6))) : n = !1;
        }

        !this._hasRequestedUpdate && n && this._enqueueUpdate();
      }
    }, {
      key: "requestUpdate",
      value: function requestUpdate(e, t) {
        return this._requestUpdate(e, t), this.updateComplete;
      }
    }, {
      key: "_enqueueUpdate",
      value: function () {
        var _enqueueUpdate2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var _this6 = this;

          var e, t, n, _e22;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this._updateState = this._updateState | Z;
                  n = this._updatePromise;
                  this._updatePromise = new Promise(function (n, r) {
                    e = n, t = r;
                  });
                  _context.prev = 3;
                  _context.next = 6;
                  return n;

                case 6:
                  _context.next = 10;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](3);

                case 10:
                  _context.t1 = this._hasConnected;

                  if (_context.t1) {
                    _context.next = 14;
                    break;
                  }

                  _context.next = 14;
                  return new Promise(function (e) {
                    return _this6._hasConnectedResolver = e;
                  });

                case 14:
                  _context.prev = 14;
                  _e22 = this.performUpdate();
                  _context.t2 = null != _e22;

                  if (!_context.t2) {
                    _context.next = 20;
                    break;
                  }

                  _context.next = 20;
                  return _e22;

                case 20:
                  _context.next = 25;
                  break;

                case 22:
                  _context.prev = 22;
                  _context.t3 = _context["catch"](14);
                  t(_context.t3);

                case 25:
                  e(!this._hasRequestedUpdate);

                case 26:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[3, 8], [14, 22]]);
        }));

        function _enqueueUpdate() {
          return _enqueueUpdate2.apply(this, arguments);
        }

        return _enqueueUpdate;
      }()
    }, {
      key: "performUpdate",
      value: function performUpdate() {
        this._instanceProperties && this._applyInstanceProperties();
        var e = !1;
        var t = this._changedProperties;

        try {
          (e = this.shouldUpdate(t)) && this.update(t);
        } catch (t) {
          throw e = !1, t;
        } finally {
          this._markUpdated();
        }

        e && (this._updateState & Y || (this._updateState = this._updateState | Y, this.firstUpdated(t)), this.updated(t));
      }
    }, {
      key: "_markUpdated",
      value: function _markUpdated() {
        this._changedProperties = new Map(), this._updateState = this._updateState & ~Z;
      }
    }, {
      key: "_getUpdateComplete",
      value: function _getUpdateComplete() {
        return this._updatePromise;
      }
    }, {
      key: "shouldUpdate",
      value: function shouldUpdate(e) {
        return !0;
      }
    }, {
      key: "update",
      value: function update(e) {
        var _this7 = this;

        void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(function (e, t) {
          return _this7._propertyToAttribute(t, _this7[t], e);
        }), this._reflectingProperties = void 0);
      }
    }, {
      key: "updated",
      value: function updated(e) {}
    }, {
      key: "firstUpdated",
      value: function firstUpdated(e) {}
    }, {
      key: "_hasConnected",
      get: function get() {
        return this._updateState & te;
      }
    }, {
      key: "_hasRequestedUpdate",
      get: function get() {
        return this._updateState & Z;
      }
    }, {
      key: "hasUpdated",
      get: function get() {
        return this._updateState & Y;
      }
    }, {
      key: "updateComplete",
      get: function get() {
        return this._getUpdateComplete();
      }
    }], [{
      key: "_ensureClassProperties",
      value: function _ensureClassProperties() {
        var _this8 = this;

        if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
          this._classProperties = new Map();

          var e = Object.getPrototypeOf(this)._classProperties;

          void 0 !== e && e.forEach(function (e, t) {
            return _this8._classProperties.set(t, e);
          });
        }
      }
    }, {
      key: "createProperty",
      value: function createProperty(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $;
        if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
        var n = "symbol" == _typeof(e) ? Symbol() : "__".concat(e);
        Object.defineProperty(this.prototype, e, {
          get: function get() {
            return this[n];
          },
          set: function set(t) {
            var r = this[e];
            this[n] = t, this._requestUpdate(e, r);
          },
          configurable: !0,
          enumerable: !0
        });
      }
    }, {
      key: "finalize",
      value: function finalize() {
        var e = Object.getPrototypeOf(this);

        if (e.hasOwnProperty(ne) || e.finalize(), this[ne] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
          var _e23 = this.properties,
              t = [].concat(_toConsumableArray(Object.getOwnPropertyNames(_e23)), _toConsumableArray("function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(_e23) : []));
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = t[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _n11 = _step5.value;
              this.createProperty(_n11, _e23[_n11]);
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                _iterator5["return"]();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      }
    }, {
      key: "_attributeNameForProperty",
      value: function _attributeNameForProperty(e, t) {
        var n = t.attribute;
        return !1 === n ? void 0 : "string" == typeof n ? n : "string" == typeof e ? e.toLowerCase() : void 0;
      }
    }, {
      key: "_valueHasChanged",
      value: function _valueHasChanged(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : K;
        return n(e, t);
      }
    }, {
      key: "_propertyValueFromAttribute",
      value: function _propertyValueFromAttribute(e, t) {
        var n = t.type,
            r = t.converter || J,
            o = "function" == typeof r ? r : r.fromAttribute;
        return o ? o(e, n) : e;
      }
    }, {
      key: "_propertyValueToAttribute",
      value: function _propertyValueToAttribute(e, t) {
        if (void 0 === t.reflect) return;
        var n = t.type,
            r = t.converter;
        return (r && r.toAttribute || J.toAttribute)(e, n);
      }
    }, {
      key: "observedAttributes",
      get: function get() {
        var _this9 = this;

        this.finalize();
        var e = [];
        return this._classProperties.forEach(function (t, n) {
          var r = _this9._attributeNameForProperty(n, t);

          void 0 !== r && (_this9._attributeToPropertyMap.set(r, n), e.push(r));
        }), e;
      }
    }]);

    return re;
  }(_wrapNativeSuper(HTMLElement));

  re[ne] = !0;
  var oe = "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  Symbol();
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  (window.litElementVersions || (window.litElementVersions = [])).push("2.2.1");

  var ie = function ie(e) {
    return e.flat ? e.flat(1 / 0) : function e(t) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      for (var _r9 = 0, _o7 = t.length; _r9 < _o7; _r9++) {
        var _o8 = t[_r9];
        Array.isArray(_o8) ? e(_o8, n) : n.push(_o8);
      }

      return n;
    }(e);
  };

  var se =
  /*#__PURE__*/
  function (_re) {
    _inherits(se, _re);

    function se() {
      _classCallCheck(this, se);

      return _possibleConstructorReturn(this, _getPrototypeOf(se).apply(this, arguments));
    }

    _createClass(se, [{
      key: "initialize",
      value: function initialize() {
        _get(_getPrototypeOf(se.prototype), "initialize", this).call(this), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && _instanceof(this.renderRoot, window.ShadowRoot) && this.adoptStyles();
      }
    }, {
      key: "createRenderRoot",
      value: function createRenderRoot() {
        return this.attachShadow({
          mode: "open"
        });
      }
    }, {
      key: "adoptStyles",
      value: function adoptStyles() {
        var e = this.constructor._styles;
        0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? oe ? this.renderRoot.adoptedStyleSheets = e.map(function (e) {
          return e.styleSheet;
        }) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(function (e) {
          return e.cssText;
        }), this.localName));
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(se.prototype), "connectedCallback", this).call(this), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this);
      }
    }, {
      key: "update",
      value: function update(e) {
        var _this10 = this;

        _get(_getPrototypeOf(se.prototype), "update", this).call(this, e);

        var t = this.render();
        _instanceof(t, b) && this.constructor.render(t, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this
        }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach(function (e) {
          var t = document.createElement("style");
          t.textContent = e.cssText, _this10.renderRoot.appendChild(t);
        }));
      }
    }, {
      key: "render",
      value: function render() {}
    }], [{
      key: "finalize",
      value: function finalize() {
        _get(_getPrototypeOf(se), "finalize", this).call(this), this._styles = this.hasOwnProperty(JSCompiler_renameProperty("styles", this)) ? this._getUniqueStyles() : this._styles || [];
      }
    }, {
      key: "_getUniqueStyles",
      value: function _getUniqueStyles() {
        var e = this.styles,
            t = [];

        if (Array.isArray(e)) {
          ie(e).reduceRight(function (e, t) {
            return e.add(t), e;
          }, new Set()).forEach(function (e) {
            return t.unshift(e);
          });
        } else e && t.push(e);

        return t;
      }
    }]);

    return se;
  }(re);

  function ae() {
    var e = function (e, t) {
      t || (t = e.slice(0));
      return Object.freeze(Object.defineProperties(e, {
        raw: {
          value: Object.freeze(t)
        }
      }));
    }(['\n      <style>\n      .field-wrapper{\n        padding-bottom: 20px;\n      }\n      </style>\n        <div class="field-wrapper">\n        <autocomplete-component\n            url="https://jsonplaceholder.typicode.com/users"\n            placeholder="Please select a client"\n            width="400"\n            @on-change="', '"\n           >\n\n        </autocomplete-component>\n    </div>  \n    <div class="field-wrapper">\n    <dropdown-search-component\n      url="', '"\n      placeholder="Please select a service"\n      width="400"\n      static="true"\n      searchable="false"\n      data=', '\n      multiple="false"\n      @on-change="', '">\n\n    </dropdown-search-component>\n</div>\n<div class="field-wrapper">\n<input-tags-component\n    url="', '"\n    placeholder="Please select a recipient"\n    width="400"\n    @on-change="', '">\n</input-tags-component>\n    </div>\n    ']);

    return ae = function ae() {
      return e;
    }, e;
  }

  se.finalized = !0, se.render = function (e, t, n) {
    if (!n || "object" != _typeof(n) || !n.scopeName) throw new Error("The `scopeName` option is required.");
    var r = n.scopeName,
        o = j.has(t),
        i = V && 11 === t.nodeType && !!t.host,
        a = i && !W.has(r),
        l = a ? document.createDocumentFragment() : t;

    if (function (e, t, n) {
      var r = j.get(t);
      void 0 === r && (s(t, t.firstChild), j.set(t, r = new C(Object.assign({
        templateFactory: A
      }, n))), r.appendInto(t)), r.setValue(e), r.commit();
    }(e, l, Object.assign({
      templateFactory: q(r)
    }, n)), a) {
      var _e24 = j.get(l);

      j["delete"](l);

      var _n12 = _instanceof(_e24.value, v) ? _e24.value.template : void 0;

      G(r, l, _n12), s(t, t.firstChild), t.appendChild(l), j.set(t, _e24);
    }

    !o && i && window.ShadyCSS.styleElement(t.host);
  };

  function le() {
    var e = pe(["<li @click=", ">", "</li>"]);
    return le = function le() {
      return e;
    }, e;
  }

  function ce() {
    var e = pe(['<div class="drop-down-box">\n         <ul>\n            ', "\n         </ul>\n       </div>"]);
    return ce = function ce() {
      return e;
    }, e;
  }

  function ue() {
    var e = pe(['<div id="close-icon" @click=', ' style="left: ', 'px;">\n        <i class="fa fa-times"></i>\n      </div>']);
    return ue = function ue() {
      return e;
    }, e;
  }

  function he() {
    var e = pe(['<div style="position: absolute;"><i class="fa fa-angle-down"></i></div>']);
    return he = function he() {
      return e;
    }, e;
  }

  function de() {
    var e = pe(["\n    <style>\n    autocomplete-component .autocom:focus{\n            outline: none;\n        }\n        autocomplete-component .autocom{\n             width: 100%;\n             height: 25px;\n             margin: 0;\n             border-top: 0;\n             border-left: 0;\n             border-right: 0;\n             border-bottom: 1px;\n             border-style: solid;\n             padding: 0;\n             font-size: 14px;\n             color: #4a4a4a;\n             line-height: 1.8px;\n             border-color: #4a4a4a;\n        }\n        autocomplete-component .autocom-container{\n          display: flex;\n          flex-direction: row-reverse;\n        }\n        autocomplete-component .autocom-container ul{\n            padding: 0px;\n        }\n        autocomplete-component .autocom-container ul li{\n            list-style: none;\n            padding: 15px;\n            cursor: pointer;\n        }\n        autocomplete-component .autocom-container ul li:hover{\n            background: #1a8099;\n            color: #ffffff;\n        }\n        autocomplete-component .drop-down-box{\n             box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n             max-height: 250px;\n             overflow: auto;\n             position: absolute;\n             background: #ffffff;\n             right: 0;\n             left: 0;\n             width: inherit;\n             margin-left: 10px;\n             margin-left: 8px;\n             margin-top: 25px;\n        }\n        autocomplete-component #close-icon {\n          color: #4a4a4a;\n          font-family: 'Helvetica', 'Arial', sans-serif;\n          text-align: right;\n          width: 20px;\n          height: 20px;\n          border-radius: 1px;\n          position: absolute;\n          cursor: pointer;\n      }\n     \n      </style>\n      <div class=\"autocom-container\" style=\"width: ", 'px">\n     \n      <input name="autocom" placeholder=', ' .value="', '" class="autocom" type="text" @keyup=', ">\n      ", "\n      ", "\n      ", "\n       </div>"]);
    return de = function de() {
      return e;
    }, e;
  }

  function pe(e, t) {
    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
      raw: {
        value: Object.freeze(t)
      }
    }));
  }

  customElements.define("todo-view",
  /*#__PURE__*/
  function (_se) {
    _inherits(_class2, _se);

    _createClass(_class2, [{
      key: "createRenderRoot",
      value: function createRenderRoot() {
        return this;
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          url: {
            type: String
          },
          data: {
            type: []
          },
          isStatic: {
            type: Boolean
          }
        };
      }
    }]);

    function _class2() {
      var _this11;

      _classCallCheck(this, _class2);

      _this11 = _possibleConstructorReturn(this, _getPrototypeOf(_class2).call(this)), _this11.isStatic = !1, _this11.data = [{
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      }, {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          suite: "Suite 879",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
          geo: {
            lat: "-43.9509",
            lng: "-34.4618"
          }
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
          name: "Deckow-Crist",
          catchPhrase: "Proactive didactic contingency",
          bs: "synergize scalable supply-chains"
        }
      }, {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
          street: "Douglas Extension",
          suite: "Suite 847",
          city: "McKenziehaven",
          zipcode: "59590-4157",
          geo: {
            lat: "-68.6102",
            lng: "-47.0653"
          }
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
          name: "Romaguera-Jacobson",
          catchPhrase: "Face to face bifurcated interface",
          bs: "e-enable strategic applications"
        }
      }, {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        address: {
          street: "Hoeger Mall",
          suite: "Apt. 692",
          city: "South Elvis",
          zipcode: "53919-4257",
          geo: {
            lat: "29.4572",
            lng: "-164.2990"
          }
        },
        phone: "493-170-9623 x156",
        website: "kale.biz",
        company: {
          name: "Robel-Corkery",
          catchPhrase: "Multi-tiered zero tolerance productivity",
          bs: "transition cutting-edge web services"
        }
      }, {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        address: {
          street: "Skiles Walks",
          suite: "Suite 351",
          city: "Roscoeview",
          zipcode: "33263",
          geo: {
            lat: "-31.8129",
            lng: "62.5342"
          }
        },
        phone: "(254)954-1289",
        website: "demarco.info",
        company: {
          name: "Keebler LLC",
          catchPhrase: "User-centric fault-tolerant solution",
          bs: "revolutionize end-to-end systems"
        }
      }, {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        address: {
          street: "Norberto Crossing",
          suite: "Apt. 950",
          city: "South Christy",
          zipcode: "23505-1337",
          geo: {
            lat: "-71.4197",
            lng: "71.7478"
          }
        },
        phone: "1-477-935-8478 x6430",
        website: "ola.org",
        company: {
          name: "Considine-Lockman",
          catchPhrase: "Synchronised bottom-line interface",
          bs: "e-enable innovative applications"
        }
      }, {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        address: {
          street: "Rex Trail",
          suite: "Suite 280",
          city: "Howemouth",
          zipcode: "58804-1099",
          geo: {
            lat: "24.8918",
            lng: "21.8984"
          }
        },
        phone: "210.067.6132",
        website: "elvis.io",
        company: {
          name: "Johns Group",
          catchPhrase: "Configurable multimedia task-force",
          bs: "generate enterprise e-tailers"
        }
      }, {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        address: {
          street: "Ellsworth Summit",
          suite: "Suite 729",
          city: "Aliyaview",
          zipcode: "45169",
          geo: {
            lat: "-14.3990",
            lng: "-120.7677"
          }
        },
        phone: "586.493.6943 x140",
        website: "jacynthe.com",
        company: {
          name: "Abernathy Group",
          catchPhrase: "Implemented secondary concept",
          bs: "e-enable extensible e-tailers"
        }
      }, {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        address: {
          street: "Dayna Park",
          suite: "Suite 449",
          city: "Bartholomebury",
          zipcode: "76495-3109",
          geo: {
            lat: "24.6463",
            lng: "-168.8889"
          }
        },
        phone: "(775)976-6794 x41206",
        website: "conrad.com",
        company: {
          name: "Yost and Sons",
          catchPhrase: "Switchable contextually-based project",
          bs: "aggregate real-time technologies"
        }
      }, {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        address: {
          street: "Kattie Turnpike",
          suite: "Suite 198",
          city: "Lebsackbury",
          zipcode: "31428-2261",
          geo: {
            lat: "-38.2386",
            lng: "57.2232"
          }
        },
        phone: "024-648-3804",
        website: "ambrose.net",
        company: {
          name: "Hoeger LLC",
          catchPhrase: "Centralized empowering task-force",
          bs: "target end-to-end models"
        }
      }];
      return _this11;
    }

    _createClass(_class2, [{
      key: "render",
      value: function render() {
        return R(ae(), this.onChanged, this.serviceUrl, JSON.stringify(this.data), this.onChangeService, this.serviceUrl, this.onChangeRecipient);
      }
    }, {
      key: "onChanged",
      value: function onChanged(e) {
        this.url = "https://jsonplaceholder.typicode.com/users?id=" + e.detail.address.city, this.recipientUrl = "https://jsonplaceholder.typicode.com/users", this.serviceUrl = "https://jsonplaceholder.typicode.com/users", this.isSelected = !0;
      }
    }, {
      key: "onChangeRecipient",
      value: function onChangeRecipient(e) {
        console.log("Changed", e);
      }
    }, {
      key: "onChangeService",
      value: function onChangeService(e) {
        console.log("Changed", e);
      }
    }]);

    return _class2;
  }(se));

  function fe() {
    var e = Ee(['<div class="btn-box"><span class="btn" @click=', ">Ok</span></div>"]);
    return fe = function fe() {
      return e;
    }, e;
  }

  function me() {
    var e = Ee([' <input type="checkbox" id=check', ">"]);
    return me = function me() {
      return e;
    }, e;
  }

  function ye() {
    var e = Ee(["\n            <li @click=", ">\n            ", "\n            ", "</li>"]);
    return ye = function ye() {
      return e;
    }, e;
  }

  function _e() {
    var e = Ee(['<div id="close-icon" @click=', ' style="left: ', 'px;">\n        <i class="fa fa-times"></i> </div>']);
    return _e = function _e() {
      return e;
    }, e;
  }

  function ve() {
    var e = Ee(['<div style="position: absolute;"><i class="fa fa-angle-down"></i></div>']);
    return ve = function ve() {
      return e;
    }, e;
  }

  function ge() {
    var e = Ee(['<input name="autocom" placeholder=', ' .value="', '" class="autocom" type="text" @click=', " @keyup=", ">"]);
    return ge = function ge() {
      return e;
    }, e;
  }

  function be() {
    var e = Ee(['\n      <input name="autocom" placeholder=', ' .value="', '" class="autocom" type="text" @click=', " @keyup=", " readonly>"]);
    return be = function be() {
      return e;
    }, e;
  }

  function we() {
    var e = Ee(["\n      <style>\n        dropdown-search-component .autocom-container-search .autocom:focus{\n            outline: none;\n        }\n        dropdown-search-component .autocom-container-search{\n            display: flex;\n            flex-direction: row-reverse;\n        }\n        dropdown-search-component .autocom-container-search .autocom{\n             width: 100%;\n             height: 25px;\n             margin: 0;\n             border-top: 0;\n             border-left: 0;\n             border-right: 0;\n             border-bottom: 1px;\n             border-style: solid;\n             padding: 0;\n             font-size: 14px;\n             color: #4a4a4a;\n             line-height: 1.8px;\n             border-color: #4a4a4a;\n        }\n        dropdown-search-component .autocom-container-search ul{\n            padding: 0px;\n        }\n        dropdown-search-component .autocom-container-search ul li{\n            list-style: none;\n            padding: 15px;\n            cursor: pointer;\n        }\n        dropdown-search-component .autocom-container-search ul li:hover{\n            background: #1a8099;\n            color: #ffffff;\n        }\n        dropdown-search-component .autocom-container-search .drop-down-box{\n            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n            max-height: 250px;\n            overflow: auto;\n            position: absolute;\n            background: #ffffff;\n            right: 0;\n            left: 0;\n            width: inherit;\n            margin-left: 10px;\n            margin-left: 8px;\n            margin-top: 25px;\n        }\n        dropdown-search-component #close-icon {\n          color: #4a4a4a;\n          font-family: 'Helvetica', 'Arial', sans-serif;\n          text-align: right;\n          width: 20px;\n          height: 20px;\n          border-radius: 1px;\n          position: absolute;\n          cursor: pointer;\n      }\n      dropdown-search-component .autocom-container-search #list-container-dropdown{\n        display: none;\n        margin-left: 10px;\n      }\n    \n      dropdown-search-component .btn{\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 1.2;\n        text-shadow: none;\n        text-transform: uppercase;\n        background-image: none;\n        border: 0;\n        border-radius: 65px;\n        box-shadow: none;\n        padding: 11px 17px 9px;\n        transform: translateZ(0);\n        white-space: normal;\n        word-wrap: break-word;\n        max-width: 100%;\n        background-color: #0f4958;\n        color: #ffffff;\n        cursor: pointer;\n      }\n      dropdown-search-component .btn-box{\n        float: right;\n        padding-right: 20px;\n        padding-bottom: 20px;\n      }\n     \n      </style>\n      <div class=\"autocom-container-search\" style=\"width: ", 'px">\n      \n      ', "\n      ", "\n      ", '\n      <div class="drop-down-box" id="list-container-dropdown">\n         <ul id="list">\n            ', "\n         </ul>\n         ", "\n       </div>\n       </div>"]);
    return we = function we() {
      return e;
    }, e;
  }

  function Ee(e, t) {
    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
      raw: {
        value: Object.freeze(t)
      }
    }));
  }

  customElements.define("autocomplete-component",
  /*#__PURE__*/
  function (_se2) {
    _inherits(_class3, _se2);

    function _class3() {
      var _this12;

      _classCallCheck(this, _class3);

      _this12 = _possibleConstructorReturn(this, _getPrototypeOf(_class3).call(this)), _this12.searchResult = [], _this12.selectedItem = "", _this12.isSelected = !1, _this12.width = 200, _this12.isSet = !1;
      return _this12;
    }

    _createClass(_class3, [{
      key: "createRenderRoot",
      value: function createRenderRoot() {
        return this;
      }
    }, {
      key: "render",
      value: function render() {
        var _this13 = this;

        return R(de(), this.width, this.placeholder, this.selectedItem, this.handleKeyEvent, this.isSet ? "" : R(he()), this.isSet ? R(ue(), this.clearField, this.width - 10) : "", 0 !== this.searchResult.length && this.isSelected ? R(ce(), this.searchResult.map(function (e) {
          return R(le(), _this13.selectItem.bind(_this13, e), e.name);
        })) : "");
      }
    }, {
      key: "handleKeyEvent",
      value: function handleKeyEvent(e) {
        var t = this,
            n = this.url,
            r = new XMLHttpRequest();
        r.open("GET", n, !0), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"), r.setRequestHeader("api-hostname-override", "fit2"), r.setRequestHeader("orgoid", "FFFFFFFFFFFFFFFF"), r.setRequestHeader("associateoid", "G3SV41CCKCT1KJXW"), r.setRequestHeader("sm_userdn", "uid=sbadigenchala2@adp,ou=Users,o=adp,ou=clients,o=adp.com"), r.setRequestHeader("isisessionid", "12347867675"), r.onreadystatechange = function () {
          4 === this.readyState && 200 === this.status && (t.searchResult = JSON.parse(this.response), t.isSelected = !0);
        }, e.target.value.length > 2 && r.send();
      }
    }, {
      key: "selectItem",
      value: function selectItem(e) {
        this.selectedItem = e.name, this.isSelected = !1, this.isSet = !0, this.dispatchEvent(new CustomEvent("on-change", {
          detail: e
        }));
      }
    }, {
      key: "clearField",
      value: function clearField(e) {
        this.selectedItem = "", this.isSet = !1;
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          searchResult: {
            type: []
          },
          selectedItem: {
            type: String
          },
          isSelected: {
            type: Boolean
          },
          isSet: {
            type: Boolean
          },
          url: {
            type: String
          },
          width: {
            type: Number
          },
          placeholder: {
            type: String
          }
        };
      }
    }]);

    return _class3;
  }(se));

  function Se() {
    var e = xe(["<li @click=", ">", "</li>"]);
    return Se = function Se() {
      return e;
    }, e;
  }

  function Ne() {
    var e = xe(['<div class="tag"><div>', '</div><div class="close" @click=', "></div><div>"]);
    return Ne = function Ne() {
      return e;
    }, e;
  }

  function Ce() {
    var e = xe(['\n      <style>\n      input-tags-component #tags {\n        max-width: 600px;\n        border-bottom: 1px solid #4a4a4a;\n        padding: 5px;\n        padding-left:0px;\n    }\n    input-tags-component #tags .tag {\n        display: flex;\n        float: left;\n        color: #FFFFFF;\n        background: gray;\n        padding: 4px 22px 6px 8px;\n        border-radius: 10px;\n        line-height: 12px;\n        transition: all 0.3s ease-in-out;\n        margin-right: 5px;\n        margin-top: 1px;\n    }\n    input-tags-component #tags .tag .close {\n        background: #1a8099;\n        cursor: pointer;\n        border-radius: 50%;\n        transition: background 0.3s;\n        margin-right: -15px;\n        margin-left: 5px;\n    }\n    input-tags-component #tags .tag .close:after {\n        content: "×";\n        font-weight: 900;\n        float: right;\n    }\n    input-tags-component #add_tag{\n      outline: none;\n      border: none;\n    }\n    input-tags-component .autocom-container-tags ul{\n      padding: 0px;\n  }\n  input-tags-component .autocom-container-tags ul li{\n      list-style: none;\n      padding: 15px;\n      cursor: pointer;\n  }\n  input-tags-component .autocom-container-tags ul li:hover{\n      background: #1a8099;\n      color: #ffffff;\n  }\n  input-tags-component #close-icon {\n          color: #4a4a4a;\n          font-family: \'Helvetica\', \'Arial\', sans-serif;\n          text-align: right;\n          width: 20px;\n          height: 20px;\n          border-radius: 1px;\n          position: absolute;\n          cursor: pointer;\n      }\n      input-tags-component .autocom-container-tags .drop-down-box{\n       box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n       max-height: 250px;\n       overflow: auto;\n       position: absolute;\n       background: #ffffff;\n       right: 0;\n       left: 0;\n       width: inherit;\n       display: none;\n        margin-left: 10px;\n        margin-top: 0; \n  }\n   \n      </style>\n      <div class="autocom-container-tags" style="width: ', 'px">\n      <div id="tags">\n        <div id="tag-wrapper">\n        ', '\n        </div>\n        <div id="input-wrapper">\n          <input type="text" id="add_tag" \n          placeholder=', ' .value="', '" @keyup=', '>\n        </div>\n      </div>\n      \n       <div class="drop-down-box" id="list-container-tags">\n         <ul id="list">\n            ', "\n         </ul>\n       </div></div>"]);
    return Ce = function Ce() {
      return e;
    }, e;
  }

  function xe(e, t) {
    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
      raw: {
        value: Object.freeze(t)
      }
    }));
  }

  customElements.define("dropdown-search-component",
  /*#__PURE__*/
  function (_se3) {
    _inherits(_class4, _se3);

    function _class4() {
      var _this14;

      _classCallCheck(this, _class4);

      _this14 = _possibleConstructorReturn(this, _getPrototypeOf(_class4).call(this)), _this14.searchable = "false", _this14.searchResult = [], _this14.selectedItem = "", _this14.isSelected = !1, _this14.width = 200, _this14.isSet = !1, _this14["static"] = "true", _this14.selectedList = [], _this14.selectedLabels = [], _this14.searchable = "false";
      return _this14;
    }

    _createClass(_class4, [{
      key: "createRenderRoot",
      value: function createRenderRoot() {
        return this;
      }
    }, {
      key: "render",
      value: function render() {
        var _this15 = this;

        return R(we(), this.width, "false" === this.searchable ? R(be(), this.placeholder, this.selectedItem, this.open, this.filter) : R(ge(), this.placeholder, this.selectedItem, this.open, this.filter), this.isSet ? "" : R(ve()), this.isSet ? R(_e(), this.clearField, this.width - 10) : "", this.searchResult.map(function (e, t) {
          return R(ye(), _this15.selectItem.bind(_this15, e, t), "true" === _this15.multiple ? R(me(), t) : "", e.name);
        }), "true" === this.multiple ? R(fe(), this.submit) : "");
      }
    }, {
      key: "submit",
      value: function submit(e) {
        document.getElementById("list-container-dropdown").style.display = "none", this.selectedItem = this.selectedLabels.join(","), this.isSet = !0, this.dispatchEvent(new CustomEvent("on-change", {
          detail: this.selectedList
        }));
      }
    }, {
      key: "open",
      value: function open(e) {
        document.getElementById("list-container-dropdown").style.display = "block";
      }
    }, {
      key: "selectItem",
      value: function selectItem(e, t) {
        if ("true" !== this.multiple) this.selectedItem = e.name, this.isSelected = !1, this.isSet = !0, document.getElementById("list-container-dropdown").style.display = "none", this.dispatchEvent(new CustomEvent("on-change", {
          detail: e
        }));else if (document.getElementById("check" + t).checked = !document.getElementById("check" + t).checked, document.getElementById("check" + t).checked) {
          -1 === this.selectedList.indexOf(e) && this.selectedList.push(e), this.selectedLabels.push(e.name);
        } else {
          var _t12 = this.selectedList.indexOf(e);

          this.selectedList.splice(_t12, 1), this.selectedLabels.splice(_t12, 1);
        }
      }
    }, {
      key: "clearField",
      value: function clearField(e) {
        this.selectedItem = "", this.isSet = !1;
      }
    }, {
      key: "updated",
      value: function updated(e) {
        var _this16 = this;

        e.forEach(function (e, t) {
          "false" === _this16["static"] ? "url" === t && void 0 !== _this16.url && "undefined" !== _this16.url && _this16.loadData(_this16.url) : "data" === t && (_this16.searchResult = JSON.parse(_this16.data));
        });
      }
    }, {
      key: "loadData",
      value: function loadData(e) {
        var t = this,
            n = new XMLHttpRequest();
        n.open("GET", e, !0), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"), n.onreadystatechange = function () {
          4 === this.readyState && 200 === this.status && (t.searchResult = JSON.parse(this.response));
        }, n.send();
      }
    }, {
      key: "filter",
      value: function filter(e) {
        this.isSelected = !0, document.getElementById("list-container-dropdown").style.display = "block", document.querySelectorAll("#list li").forEach(function (t, n) {
          t.textContent.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1 ? t.style.display = "block" : t.style.display = "none";
        });
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          searchResult: {
            type: []
          },
          selectedItem: {
            type: String
          },
          isSelected: {
            type: Boolean
          },
          isSet: {
            type: Boolean
          },
          url: {
            type: String
          },
          width: {
            type: Number
          },
          placeholder: {
            type: String
          },
          "static": {
            type: String
          },
          data: {
            type: []
          },
          multiple: {
            type: String
          },
          selectedList: {
            type: []
          },
          selectedLabels: {
            type: []
          },
          searchable: {
            type: String
          }
        };
      }
    }]);

    return _class4;
  }(se));
  customElements.define("input-tags-component",
  /*#__PURE__*/
  function (_se4) {
    _inherits(_class5, _se4);

    function _class5() {
      var _this17;

      _classCallCheck(this, _class5);

      _this17 = _possibleConstructorReturn(this, _getPrototypeOf(_class5).call(this)), _this17.searchResult = [], _this17.selectedItem = "", _this17.isSelected = !1, _this17.width = 200, _this17.isSet = !1, _this17.userList = [], _this17.url = void 0;
      return _this17;
    }

    _createClass(_class5, [{
      key: "createRenderRoot",
      value: function createRenderRoot() {
        return this;
      }
    }, {
      key: "render",
      value: function render() {
        var _this18 = this;

        return R(Ce(), this.width, this.userList.map(function (e) {
          return R(Ne(), e.name, _this18.removeUser.bind(_this18, e));
        }), this.placeholder, this.selectedItem, this.filter, this.searchResult.map(function (e) {
          return R(Se(), _this18.selectItem.bind(_this18, e), e.name);
        }));
      }
    }, {
      key: "selectItem",
      value: function selectItem(e) {
        this.selectedItem = null, this.isSelected = !1, this.isSet = !0, document.getElementById("list-container-tags").style.display = "none", -1 === this.userList.indexOf(e) && this.userList.push(e), this.dispatchEvent(new CustomEvent("on-change", {
          detail: this.userList
        }));
      }
    }, {
      key: "clearField",
      value: function clearField(e) {
        this.selectedItem = "", this.isSet = !1, this.userList = [], this.dispatchEvent(new CustomEvent("on-change", {
          detail: this.userList
        }));
      }
    }, {
      key: "updated",
      value: function updated(e) {
        var _this19 = this;

        e.forEach(function (e, t) {
          "url" === t && void 0 !== _this19.url && "undefined" !== _this19.url && _this19.loadData(_this19.url);
        });
      }
    }, {
      key: "loadData",
      value: function loadData(e) {
        var t = this,
            n = new XMLHttpRequest();
        n.open("GET", e, !0), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"), n.onreadystatechange = function () {
          4 === this.readyState && 200 === this.status && (t.searchResult = JSON.parse(this.response));
        }, n.send();
      }
    }, {
      key: "filter",
      value: function filter(e) {
        this.isSelected = !0, document.getElementById("list-container-tags").style.display = "block", document.querySelectorAll("#list li").forEach(function (t, n) {
          t.textContent.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1 ? t.style.display = "block" : t.style.display = "none";
        });
      }
    }, {
      key: "removeUser",
      value: function removeUser(e) {
        var t = this.userList.indexOf(e);
        this.userList = this.userList.filter(function (e, n) {
          return n !== t;
        }), this.dispatchEvent(new CustomEvent("on-change", {
          detail: this.userList
        }));
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          searchResult: {
            type: []
          },
          selectedItem: {
            type: String
          },
          isSelected: {
            type: Boolean
          },
          isSet: {
            type: Boolean
          },
          url: {
            type: String
          },
          width: {
            type: Number
          },
          placeholder: {
            type: String
          },
          userList: {
            type: []
          }
        };
      }
    }]);

    return _class5;
  }(se));
}]);
