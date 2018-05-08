(function(window){

	var SCROLL_LOOP = [],
		scrollTop = -1,
		requestFrame =  window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.msRequestAnimationFrame ||
                        window.oRequestAnimationFrame ||
                        // IE Fallback, you can even fallback to onscroll
                        function (callback) {
                            window.setTimeout(callback, 1000 / 60);
                        };

	function loop() {

		// if scrollTop and window's scroll position are equal, return and try again.
		if (scrollTop == window.pageYOffset) {
			requestFrame(loop);
			return false;
		}

		// set scrollTop to window's scroll position.
		scrollTop = window.pageYOffset;

		// do your magic
		SCROLL_LOOP.forEach(function (fn) {
			if (typeof fn == "function") {
				fn(scrollTop);
			}
		});

		// run loop again
		requestFrame(loop);

	}

	// initialize loop()
	loop();
	
	window.SCROLL_LOOP = SCROLL_LOOP;
    
})(this);