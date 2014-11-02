_ki = {
    init: function (self$1468, ns_name$1469) {
        if (_ki.namespaces[ns_name$1469] === undefined) {
            _ki.namespaces[ns_name$1469] = { vars: {} };
        }
        self$1468._ki_ns_name = ns_name$1469;
        self$1468._ki_ns_ctx = self$1468;
        _ki.intern.bind(self$1468)(_ki.modules.core);
        _ki.intern.bind(self$1468)(_ki.modules.mori);
        _ki.intern.bind(self$1468)(_ki.modules);
        _ki.intern.bind(self$1468)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$1470) {
        for (var e$1471 in obj$1470) {
            this[e$1471] = obj$1470[e$1471];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$1472) {
                return x$1472 === false || x$1472 == null ? false : true;
            },
            falsey: function (x$1473) {
                return !truthy(x$1473);
            },
            not: function (x$1474) {
                return !truthy(x$1474);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$1475 = 0;
                for (var i$1476 = 0; i$1476 < arguments.length; i$1476++) {
                    res$1475 += arguments[i$1476];
                }
                return res$1475;
            },
            sub: function () {
                var res$1477 = arguments[0];
                for (var i$1478 = 1; i$1478 < arguments.length; i$1478++) {
                    res$1477 -= arguments[i$1478];
                }
                return res$1477;
            },
            mul: function () {
                var res$1479 = 1;
                for (var i$1480 = 0; i$1480 < arguments.length; i$1480++) {
                    res$1479 *= arguments[i$1480];
                }
                return res$1479;
            },
            div: function () {
                var res$1481 = arguments[0];
                for (var i$1482 = 1; i$1482 < arguments.length; i$1482++) {
                    res$1481 /= arguments[i$1482];
                }
                return res$1481;
            },
            mod: function (a$1483, b$1484) {
                return a$1483 % b$1484;
            },
            lt: function () {
                var res$1485 = true;
                for (var i$1486 = 0; i$1486 < arguments.length - 1; i$1486++) {
                    res$1485 = res$1485 && arguments[i$1486] < arguments[i$1486 + 1];
                    if (!res$1485)
                        break;
                }
                return res$1485;
            },
            gt: function () {
                var res$1487 = true;
                for (var i$1488 = 0; i$1488 < arguments.length - 1; i$1488++) {
                    res$1487 = res$1487 && arguments[i$1488] > arguments[i$1488 + 1];
                    if (!res$1487)
                        break;
                }
                return res$1487;
            },
            leq: function () {
                var res$1489 = true;
                for (var i$1490 = 0; i$1490 < arguments.length - 1; i$1490++) {
                    res$1489 = res$1489 && arguments[i$1490] <= arguments[i$1490 + 1];
                    if (!res$1489)
                        break;
                }
                return res$1489;
            },
            geq: function () {
                var res$1491 = true;
                for (var i$1492 = 0; i$1492 < arguments.length - 1; i$1492++) {
                    res$1491 = res$1491 && arguments[i$1492] >= arguments[i$1492 + 1];
                }
                return res$1491;
            },
            prn: function () {
                console.log.apply(console, arguments);
            },
            str: function () {
                return String.prototype.concat.apply('', arguments);
            }
        },
        mori: function () {
            try {
                return require('ki/node_modules/mori');
            } catch (e$1493) {
                try {
                    return require('mori');
                } catch (e$1494) {
                    return mori;
                }
            }
        }()
    }
};
(function () {
    _ki.init(this, '_ki');
    return console.log('Hello from ki!');
}());