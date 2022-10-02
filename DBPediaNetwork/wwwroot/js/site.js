﻿var app = {
    init: function () {
        app.removeSomeeAd();
    },
    preloader: function (action, ms = 500) {
        var display = $('.preloader').css('display');

        if (action == "on" && (display == "none" || display == undefined)) {
            $('.modal.preloader').modal('show');
        } else if (action == "off") {

            setTimeout(function () {
            $('.modal.preloader').modal('hide');
            }, ms);
        }
    },
    removeSomeeAd: () => {
        $("center").remove();

        window.removead = setInterval(function () {
            if ($("center")) {
                $("center").remove();
                clearInterval(window.removead);
            }
        }, 1);
    }
};

(function () {
    app.init();
})();
