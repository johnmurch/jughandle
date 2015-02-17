var jughandle = function() {
    var config = {
            cookie: "jh_cookie",
            param: "jhid"
        },
        utils = {
            getCookie: function(cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1);
                    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
                }
                return "";
            },
            setCookie: function(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = cname + "=" + cvalue + "; " + expires;
            },
            getParameterByName: function(name) {
                name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                    results = regex.exec(location.search);
                return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
            },
            addOrUpdateUrlParam: function(name, value) {
                var href = window.location.href;
                var regex = new RegExp("[&\\?]" + name + "=");
                if (regex.test(href)) {
                    regex = new RegExp("([&\\?])" + name + "=\\d+");
                    window.location.href = href.replace(regex, "$1" + name + "=" + value);
                } else {
                    if (href.indexOf("?") > -1) window.location.href = href + "&" + name + "=" + value;
                    else window.location.href = href + "?" + name + "=" + value;
                }
            }
        };
    return {
        config: config,
        utils: utils,
        param: function(param) {
            config.param = param;
        },
        cookie: function(cookie) {
            config.cookie = cookie;
        },
        run: function() {
            var paramId = utils.getParameterByName(config.param);
            if (paramId) {
                var oneyear = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365);
                utils.setCookie(config.cookie, paramId, oneyear.toGMTString());
                if (typeof(Storage) !== "undefined") {
                    localStorage.setItem(config.cookie, paramId);
                }
            } else {
                var tId = utils.getCookie(config.cookie);
                if (tId) {
                    utils.addOrUpdateUrlParam(config.param, tId);
                } else {
                    var ltId = localStorage.getItem(config.cookie);
                    if (ltId) {
                        var oneyear = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365);
                        setCookie(config.cookie, ltId, oneyear.toGMTString());
                        if (typeof(Storage) !== "undefined") {
                            localStorage.setItem(config.cookie, ltId);
                        }
                        addOrUpdateUrlParam(config.param, ltId);
                    }
                }
            }
        }
    }
}();
