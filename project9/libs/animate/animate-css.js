//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp", "zoomOutDown");
/*(function($) {
		$.fn.animated = function(inEffect, outEffect) {
				$(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
						if (dir === "down") {
								$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
						} else {
								$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
						};
				}, {
						offset: "80%"
				}).waypoint(function(dir) {
						if (dir === "down") {
								$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
						} else {
								$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
						};
				}, {
						offset: -$(window).height()
				});
		};
})(jQuery);*/

//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp");
(function($) {
    $.fn.animated = function(inEffect) {
        $(this).each(function() {
            var ths = $(this);
            ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
                if (dir === "down") {
                    ths.addClass(inEffect).css("opacity", "1");
                };
            }, {
                offset: "80%"
            });

        });
    };
})(jQuery);