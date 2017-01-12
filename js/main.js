"use strict";
(function () {
    $(document).ready(function () {
        $('#scrool-to-top').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 700);
        });
    });
})(jQuery);