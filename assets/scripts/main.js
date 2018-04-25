if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

if (typeof Object.assign != 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) { // .length of function is 2
        'use strict';
        if (target == null) { // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object');
        }
  
        var to = Object(target);
  
        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];
  
          if (nextSource != null) { // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }
(function(window){

    var APP = {

        onScroll: [],
        activeProject: 0,
        headlineTrack: document.getElementById("headline-track"),
        headlines: [],
        projects: [
            {
                title: '<span class="faded">Hi, I create</span><br/> systems &amp; interfaces<br/><span class="faded">for the web.</span>',
                fill: '#f3f5f7',
            },
            { 
                title: 'Orpheus Chamber Orchestra',
                description: 'Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.',
                url: 'http://orpheusnyc.org/',
                url_text: 'orpheusnyc.org',
                meta: {
                    role: 'Primary Developer',
                    platform: 'Wordpress'
                },
                color: '#C63714',
                fill: '#F8E7E3'
            },
            { 
                title: 'TransitCenter',
                description: 'Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.',
                url: 'http://transitcenter.org/',
                url_text: 'transitcenter.org',
                meta: {
                    role: 'Primary Developer',
                    platform: 'Wordpress'
                },
                color: '#5E28B2',
                fill: '#EFE9F7'
            },
            {
                title: 'Let\'s Chat',
                fill: '#f3f5f7',
            },
        ]
    
    };

    window.APP = APP;

})(this);
(function(window){

    var scrollTop = -1,
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
		APP.onScroll.forEach(function (fn) {
			if (typeof fn == "function") {
				fn(scrollTop);
			}
		});

		// run loop again
		requestFrame(loop);

	}

	// initialize loop()
    loop();
    
})(this);
(function (window) {


	// Setup canvas area
	// ----------------------------------------------------------

	var winW = window.innerWidth - 15,
		winH = window.innerHeight,
		stage = new createjs.Stage('canvas');

	stage.canvas.width = winW;
	stage.canvas.height = winH;
	stage.regX = winW / -2;
	stage.regY = winH / -2;


	// Setup content for each section
	// ----------------------------------------------------------

	APP.projects.forEach(function (project, i) {

		var width = stage.canvas.width,
			height = stage.canvas.height;

		// build canvas shapes
		
		project.shape = new createjs.Shape();
		if (i === 0) {
			project.shape.regX = 25;
			project.shape.regY = 2;
			project.shape.graphics.beginFill(project.fill).drawRect(0, 0, 50, 4);
		} else {
			project.shape.regX = width / 2;
			project.shape.regY = height / 2;
			project.shape.graphics.beginFill(project.fill).drawRect(0, height * i, width, height);
		}
		stage.addChild(project.shape);

		// populate headlines

		var headline = document.createElement('div');
		headline.className = 'headline-item animate ' + ( i === 0 ? 'active' : '' );
		headline.innerHTML = '<div class="headline-text">' + project.title + '</div>';
		APP.headlineTrack.appendChild(headline);
		APP.headlines.push(headline);

	});

	


	// Intro animation
	// ----------------------------------------------------------

	createjs.Tween.get(APP.projects[0].shape)
		.to({ rotation: 1080 }, 3000, createjs.Ease.getPowOut(4))
		.to({ scaleX: stage.canvas.width / 50 }, 600, createjs.Ease.getPowOut(4))
		.call(function () {
			document.body.classList.add('initialized');
		})
		.to({ scaleY: stage.canvas.height / 4 }, 700, createjs.Ease.getPowOut(4));

	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", stage);


	// Scroll behavior between sections
	// ----------------------------------------------------------

	var sections = document.querySelectorAll('.section');

	sections.forEach(function (section, i) {	

		APP.onScroll.push(function (scrollTop) {
			var height = stage.canvas.height,
				top = section.offsetTop - height / 2;
				bottom = (section.offsetHeight + section.offsetTop) - height / 2;

			if (scrollTop >= top && scrollTop < bottom) {

				if ( ! section.classList.contains('active')) {
				
					section.classList.add('active');

					createjs.Tween.get(stage)
						.to({
							y: -height * i
						}, 1000, createjs.Ease.getPowOut(4));
				
					APP.activeProject = i;
					document.body.setAttribute('data-project', i);
					updateMask(APP.projects[i]);
			
				}

			} else {

				section.classList.remove('active');

			}
		});
		
	});

	function updateMask(data) {
		APP.headlines.forEach(function(headline, i){
			if ( i === APP.activeProject ) {
				headline.classList.add('active');
			} else {
				headline.classList.remove('active');
			}
		});

		APP.headlineTrack.style.transform = 'translate3d(0,' + (APP.activeProject * -10) + 'vw,0)';
		APP.headlineTrack.style.webkitTransform = 'translate3d(0,' + (APP.activeProject * -10) + 'vw,0)';
		APP.headlineTrack.style.mozTransform = 'translate3d(0,' + (APP.activeProject * -10) + 'vw,0)';
		APP.headlineTrack.style.msTransform = 'translate3d(0,' + (APP.activeProject * -10) + 'vw,0)';
		APP.headlineTrack.style.oTransform = 'translate3d(0,' + (APP.activeProject * -10) + 'vw,0)';
	}



	// Browser resizing
	// ----------------------------------------------------------

	window.addEventListener("resize", resize);

	function resize(){
		
		var width = window.innerWidth - 15,
			height = window.innerHeight;

		stage.canvas.width = width;
		stage.canvas.height = height;
		stage.setBounds(0,0,width,height);
		stage.regX = width / -2;
		stage.regY = height / -2;
		
		rects.forEach(function (rect, i) {
			var newGraphics = new createjs.Graphics().beginFill(rect.fill).drawRect(0, height * i, width, height);
			rect.shape.regX = width / 2;
			rect.shape.regY = height / 2;
			rect.shape.set({ graphics: newGraphics });
		});
		
	}

})(this);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fcG9seWZpbGxzLmpzIiwiX2NvbmZpZy5qcyIsIl9zY3JvbGxMb29wLmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKHdpbmRvdy5Ob2RlTGlzdCAmJiAhTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgICAgICB0aGlzQXJnID0gdGhpc0FyZyB8fCB3aW5kb3c7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzW2ldLCBpLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gTXVzdCBiZSB3cml0YWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QsIFwiYXNzaWduXCIsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCB2YXJBcmdzKSB7IC8vIC5sZW5ndGggb2YgZnVuY3Rpb24gaXMgMlxuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkgeyAvLyBUeXBlRXJyb3IgaWYgdW5kZWZpbmVkIG9yIG51bGxcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gIFxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcbiAgXG4gICAgICAgICAgaWYgKG5leHRTb3VyY2UgIT0gbnVsbCkgeyAvLyBTa2lwIG92ZXIgaWYgdW5kZWZpbmVkIG9yIG51bGxcbiAgICAgICAgICAgIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dFNvdXJjZSkge1xuICAgICAgICAgICAgICAvLyBBdm9pZCBidWdzIHdoZW4gaGFzT3duUHJvcGVydHkgaXMgc2hhZG93ZWRcbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0U291cmNlLCBuZXh0S2V5KSkge1xuICAgICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG87XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfSIsIihmdW5jdGlvbih3aW5kb3cpe1xuXG4gICAgdmFyIEFQUCA9IHtcblxuICAgICAgICBvblNjcm9sbDogW10sXG4gICAgICAgIGFjdGl2ZVByb2plY3Q6IDAsXG4gICAgICAgIGhlYWRsaW5lVHJhY2s6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGxpbmUtdHJhY2tcIiksXG4gICAgICAgIGhlYWRsaW5lczogW10sXG4gICAgICAgIHByb2plY3RzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICc8c3BhbiBjbGFzcz1cImZhZGVkXCI+SGksIEkgY3JlYXRlPC9zcGFuPjxici8+IHN5c3RlbXMgJmFtcDsgaW50ZXJmYWNlczxici8+PHNwYW4gY2xhc3M9XCJmYWRlZFwiPmZvciB0aGUgd2ViLjwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgIGZpbGw6ICcjZjNmNWY3JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnT3JwaGV1cyBDaGFtYmVyIE9yY2hlc3RyYScsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQZWxsZW50ZXNxdWUgaW4gaXBzdW0gaWQgb3JjaSBwb3J0YSBkYXBpYnVzLiBOdWxsYSBxdWlzIGxvcmVtIHV0IGxpYmVybyBtYWxlc3VhZGEgZmV1Z2lhdC4gRG9uZWMgc29sbGljaXR1ZGluIG1vbGVzdGllIG1hbGVzdWFkYS4nLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9vcnBoZXVzbnljLm9yZy8nLFxuICAgICAgICAgICAgICAgIHVybF90ZXh0OiAnb3JwaGV1c255Yy5vcmcnLFxuICAgICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogJ1ByaW1hcnkgRGV2ZWxvcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm06ICdXb3JkcHJlc3MnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNDNjM3MTQnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICcjRjhFN0UzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUcmFuc2l0Q2VudGVyJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BlbGxlbnRlc3F1ZSBpbiBpcHN1bSBpZCBvcmNpIHBvcnRhIGRhcGlidXMuIE51bGxhIHF1aXMgbG9yZW0gdXQgbGliZXJvIG1hbGVzdWFkYSBmZXVnaWF0LiBEb25lYyBzb2xsaWNpdHVkaW4gbW9sZXN0aWUgbWFsZXN1YWRhLicsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3RyYW5zaXRjZW50ZXIub3JnLycsXG4gICAgICAgICAgICAgICAgdXJsX3RleHQ6ICd0cmFuc2l0Y2VudGVyLm9yZycsXG4gICAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgICAgICByb2xlOiAnUHJpbWFyeSBEZXZlbG9wZXInLFxuICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybTogJ1dvcmRwcmVzcydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzVFMjhCMicsXG4gICAgICAgICAgICAgICAgZmlsbDogJyNFRkU5RjcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTGV0XFwncyBDaGF0JyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnI2YzZjVmNycsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgXG4gICAgfTtcblxuICAgIHdpbmRvdy5BUFAgPSBBUFA7XG5cbn0pKHRoaXMpOyIsIihmdW5jdGlvbih3aW5kb3cpe1xuXG4gICAgdmFyIHNjcm9sbFRvcCA9IC0xLFxuXHRcdHJlcXVlc3RGcmFtZSA9ICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJRSBGYWxsYmFjaywgeW91IGNhbiBldmVuIGZhbGxiYWNrIHRvIG9uc2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cblx0ZnVuY3Rpb24gbG9vcCgpIHtcblxuXHRcdC8vIGlmIHNjcm9sbFRvcCBhbmQgd2luZG93J3Mgc2Nyb2xsIHBvc2l0aW9uIGFyZSBlcXVhbCwgcmV0dXJuIGFuZCB0cnkgYWdhaW4uXG5cdFx0aWYgKHNjcm9sbFRvcCA9PSB3aW5kb3cucGFnZVlPZmZzZXQpIHtcblx0XHRcdHJlcXVlc3RGcmFtZShsb29wKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBzZXQgc2Nyb2xsVG9wIHRvIHdpbmRvdydzIHNjcm9sbCBwb3NpdGlvbi5cblx0XHRzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cblx0XHQvLyBkbyB5b3VyIG1hZ2ljXG5cdFx0QVBQLm9uU2Nyb2xsLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG5cdFx0XHRpZiAodHlwZW9mIGZuID09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRmbihzY3JvbGxUb3ApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gcnVuIGxvb3AgYWdhaW5cblx0XHRyZXF1ZXN0RnJhbWUobG9vcCk7XG5cblx0fVxuXG5cdC8vIGluaXRpYWxpemUgbG9vcCgpXG4gICAgbG9vcCgpO1xuICAgIFxufSkodGhpcyk7IiwiKGZ1bmN0aW9uICh3aW5kb3cpIHtcblxuXG5cdC8vIFNldHVwIGNhbnZhcyBhcmVhXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHR2YXIgd2luVyA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMTUsXG5cdFx0d2luSCA9IHdpbmRvdy5pbm5lckhlaWdodCxcblx0XHRzdGFnZSA9IG5ldyBjcmVhdGVqcy5TdGFnZSgnY2FudmFzJyk7XG5cblx0c3RhZ2UuY2FudmFzLndpZHRoID0gd2luVztcblx0c3RhZ2UuY2FudmFzLmhlaWdodCA9IHdpbkg7XG5cdHN0YWdlLnJlZ1ggPSB3aW5XIC8gLTI7XG5cdHN0YWdlLnJlZ1kgPSB3aW5IIC8gLTI7XG5cblxuXHQvLyBTZXR1cCBjb250ZW50IGZvciBlYWNoIHNlY3Rpb25cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdEFQUC5wcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9qZWN0LCBpKSB7XG5cblx0XHR2YXIgd2lkdGggPSBzdGFnZS5jYW52YXMud2lkdGgsXG5cdFx0XHRoZWlnaHQgPSBzdGFnZS5jYW52YXMuaGVpZ2h0O1xuXG5cdFx0Ly8gYnVpbGQgY2FudmFzIHNoYXBlc1xuXHRcdFxuXHRcdHByb2plY3Quc2hhcGUgPSBuZXcgY3JlYXRlanMuU2hhcGUoKTtcblx0XHRpZiAoaSA9PT0gMCkge1xuXHRcdFx0cHJvamVjdC5zaGFwZS5yZWdYID0gMjU7XG5cdFx0XHRwcm9qZWN0LnNoYXBlLnJlZ1kgPSAyO1xuXHRcdFx0cHJvamVjdC5zaGFwZS5ncmFwaGljcy5iZWdpbkZpbGwocHJvamVjdC5maWxsKS5kcmF3UmVjdCgwLCAwLCA1MCwgNCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHByb2plY3Quc2hhcGUucmVnWCA9IHdpZHRoIC8gMjtcblx0XHRcdHByb2plY3Quc2hhcGUucmVnWSA9IGhlaWdodCAvIDI7XG5cdFx0XHRwcm9qZWN0LnNoYXBlLmdyYXBoaWNzLmJlZ2luRmlsbChwcm9qZWN0LmZpbGwpLmRyYXdSZWN0KDAsIGhlaWdodCAqIGksIHdpZHRoLCBoZWlnaHQpO1xuXHRcdH1cblx0XHRzdGFnZS5hZGRDaGlsZChwcm9qZWN0LnNoYXBlKTtcblxuXHRcdC8vIHBvcHVsYXRlIGhlYWRsaW5lc1xuXG5cdFx0dmFyIGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0aGVhZGxpbmUuY2xhc3NOYW1lID0gJ2hlYWRsaW5lLWl0ZW0gYW5pbWF0ZSAnICsgKCBpID09PSAwID8gJ2FjdGl2ZScgOiAnJyApO1xuXHRcdGhlYWRsaW5lLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiaGVhZGxpbmUtdGV4dFwiPicgKyBwcm9qZWN0LnRpdGxlICsgJzwvZGl2Pic7XG5cdFx0QVBQLmhlYWRsaW5lVHJhY2suYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXHRcdEFQUC5oZWFkbGluZXMucHVzaChoZWFkbGluZSk7XG5cblx0fSk7XG5cblx0XG5cblxuXHQvLyBJbnRybyBhbmltYXRpb25cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdGNyZWF0ZWpzLlR3ZWVuLmdldChBUFAucHJvamVjdHNbMF0uc2hhcGUpXG5cdFx0LnRvKHsgcm90YXRpb246IDEwODAgfSwgMzAwMCwgY3JlYXRlanMuRWFzZS5nZXRQb3dPdXQoNCkpXG5cdFx0LnRvKHsgc2NhbGVYOiBzdGFnZS5jYW52YXMud2lkdGggLyA1MCB9LCA2MDAsIGNyZWF0ZWpzLkVhc2UuZ2V0UG93T3V0KDQpKVxuXHRcdC5jYWxsKGZ1bmN0aW9uICgpIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaW5pdGlhbGl6ZWQnKTtcblx0XHR9KVxuXHRcdC50byh7IHNjYWxlWTogc3RhZ2UuY2FudmFzLmhlaWdodCAvIDQgfSwgNzAwLCBjcmVhdGVqcy5FYXNlLmdldFBvd091dCg0KSk7XG5cblx0Y3JlYXRlanMuVGlja2VyLnNldEZQUyg2MCk7XG5cdGNyZWF0ZWpzLlRpY2tlci5hZGRFdmVudExpc3RlbmVyKFwidGlja1wiLCBzdGFnZSk7XG5cblxuXHQvLyBTY3JvbGwgYmVoYXZpb3IgYmV0d2VlbiBzZWN0aW9uc1xuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0dmFyIHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24nKTtcblxuXHRzZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzZWN0aW9uLCBpKSB7XHRcblxuXHRcdEFQUC5vblNjcm9sbC5wdXNoKGZ1bmN0aW9uIChzY3JvbGxUb3ApIHtcblx0XHRcdHZhciBoZWlnaHQgPSBzdGFnZS5jYW52YXMuaGVpZ2h0LFxuXHRcdFx0XHR0b3AgPSBzZWN0aW9uLm9mZnNldFRvcCAtIGhlaWdodCAvIDI7XG5cdFx0XHRcdGJvdHRvbSA9IChzZWN0aW9uLm9mZnNldEhlaWdodCArIHNlY3Rpb24ub2Zmc2V0VG9wKSAtIGhlaWdodCAvIDI7XG5cblx0XHRcdGlmIChzY3JvbGxUb3AgPj0gdG9wICYmIHNjcm9sbFRvcCA8IGJvdHRvbSkge1xuXG5cdFx0XHRcdGlmICggISBzZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcblx0XHRcdFx0XG5cdFx0XHRcdFx0c2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuXHRcdFx0XHRcdGNyZWF0ZWpzLlR3ZWVuLmdldChzdGFnZSlcblx0XHRcdFx0XHRcdC50byh7XG5cdFx0XHRcdFx0XHRcdHk6IC1oZWlnaHQgKiBpXG5cdFx0XHRcdFx0XHR9LCAxMDAwLCBjcmVhdGVqcy5FYXNlLmdldFBvd091dCg0KSk7XG5cdFx0XHRcdFxuXHRcdFx0XHRcdEFQUC5hY3RpdmVQcm9qZWN0ID0gaTtcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgaSk7XG5cdFx0XHRcdFx0dXBkYXRlTWFzayhBUFAucHJvamVjdHNbaV0pO1xuXHRcdFx0XG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZU1hc2soZGF0YSkge1xuXHRcdEFQUC5oZWFkbGluZXMuZm9yRWFjaChmdW5jdGlvbihoZWFkbGluZSwgaSl7XG5cdFx0XHRpZiAoIGkgPT09IEFQUC5hY3RpdmVQcm9qZWN0ICkge1xuXHRcdFx0XHRoZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhlYWRsaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0QVBQLmhlYWRsaW5lVHJhY2suc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsJyArIChBUFAuYWN0aXZlUHJvamVjdCAqIC0xMCkgKyAndncsMCknO1xuXHRcdEFQUC5oZWFkbGluZVRyYWNrLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLCcgKyAoQVBQLmFjdGl2ZVByb2plY3QgKiAtMTApICsgJ3Z3LDApJztcblx0XHRBUFAuaGVhZGxpbmVUcmFjay5zdHlsZS5tb3pUcmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwnICsgKEFQUC5hY3RpdmVQcm9qZWN0ICogLTEwKSArICd2dywwKSc7XG5cdFx0QVBQLmhlYWRsaW5lVHJhY2suc3R5bGUubXNUcmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwnICsgKEFQUC5hY3RpdmVQcm9qZWN0ICogLTEwKSArICd2dywwKSc7XG5cdFx0QVBQLmhlYWRsaW5lVHJhY2suc3R5bGUub1RyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLCcgKyAoQVBQLmFjdGl2ZVByb2plY3QgKiAtMTApICsgJ3Z3LDApJztcblx0fVxuXG5cblxuXHQvLyBCcm93c2VyIHJlc2l6aW5nXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemUpO1xuXG5cdGZ1bmN0aW9uIHJlc2l6ZSgpe1xuXHRcdFxuXHRcdHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMTUsXG5cdFx0XHRoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cblx0XHRzdGFnZS5jYW52YXMud2lkdGggPSB3aWR0aDtcblx0XHRzdGFnZS5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdHN0YWdlLnNldEJvdW5kcygwLDAsd2lkdGgsaGVpZ2h0KTtcblx0XHRzdGFnZS5yZWdYID0gd2lkdGggLyAtMjtcblx0XHRzdGFnZS5yZWdZID0gaGVpZ2h0IC8gLTI7XG5cdFx0XG5cdFx0cmVjdHMuZm9yRWFjaChmdW5jdGlvbiAocmVjdCwgaSkge1xuXHRcdFx0dmFyIG5ld0dyYXBoaWNzID0gbmV3IGNyZWF0ZWpzLkdyYXBoaWNzKCkuYmVnaW5GaWxsKHJlY3QuZmlsbCkuZHJhd1JlY3QoMCwgaGVpZ2h0ICogaSwgd2lkdGgsIGhlaWdodCk7XG5cdFx0XHRyZWN0LnNoYXBlLnJlZ1ggPSB3aWR0aCAvIDI7XG5cdFx0XHRyZWN0LnNoYXBlLnJlZ1kgPSBoZWlnaHQgLyAyO1xuXHRcdFx0cmVjdC5zaGFwZS5zZXQoeyBncmFwaGljczogbmV3R3JhcGhpY3MgfSk7XG5cdFx0fSk7XG5cdFx0XG5cdH1cblxufSkodGhpcyk7Il19
