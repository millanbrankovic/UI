// Scripts

(function () {

    openDropDowns($(".main-nav"));

    function openDropDowns(ddMenus) {
        ddMenus.children(".toogle-menu").on("click", function(e) {

            e.stopPropagation();

            var thisTrigger = $(this),
                thisMenu = thisTrigger.parent(),
                thisDDMenu = thisTrigger.next();

            if (thisMenu.hasClass("expand")) {

                thisMenu.removeClass("expand");

                $(document).off("click");

            } else {
                ddMenus.removeClass("expand");

                thisMenu.addClass("expand");

                $(document).on("click", function() {
                    ddMenus.removeClass("expand");
                });
            }
        });
    }



    $(".has-drop-down").on('click', function(e) {
        e.preventDefault()
        e.stopPropagation();

        $(this).toggleClass("open");
    });

    $(document).on('click', function() {
        $(".has-drop-down").removeClass("open");
    });



    $(window).on('scroll touchmove', function () {
        $(".header").toggleClass("sticky", $(document).scrollTop() > 356);
    });

    $(".close").on('click', function() {
        $(this).parent().fadeOut(400);
    })

})();

