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
                title: '<span class="faded">Hi, I create</span><br/> things <span class="faded">for<br/>the web.</span>',
            },
            { 
                title: 'Hester Street Collaborative',
                description: 'Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.',
                url: 'http://hesterstreet.org/',
                url_text: 'hesterstreet.org',
                meta: {
                    role: 'Primary Developer',
                    platform: 'Wordpress'
                },
                color: '#3266CC',
                fill: '#DFE6F1'
            },
            { 
                title: 'Gibney',
                description: 'Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.',
                url: 'http://gibneydance.org/',
                url_text: 'gibneydance.org',
                meta: {
                    role: 'Primary Developer',
                    platform: 'Wordpress'
                },
                color: '#000000',
                fill: '#E8E8E8'
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
                title: 'Orpheus Chamber Orchestra',
                description: 'Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.',
                url: 'http://orpheusnyc.org/',
                url_text: 'orpheusnyc.org',
                meta: {
                    role: 'Primary Developer',
                    platform: 'Wordpress'
                },
                color: '#C48014',
                fill: '#EEE9DF'
            },
            { 
                title: 'Claremont Graduate University',
                description: 'Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.',
                url: 'http://cgu.edu/',
                url_text: 'cgu.edu',
                meta: {
                    role: 'Primary Developer',
                    platform: 'Wordpress'
                },
                color: '#AF1E27',
                fill: '#ECDFE1'
            },
            {
                title: 'Let\'s Chat'
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

	// var winW = window.innerWidth - 15,
	// 	winH = window.innerHeight,
	// 	stage = new createjs.Stage('canvas');

	// stage.canvas.width = winW;
	// stage.canvas.height = winH;
	// stage.regX = winW / -2;
	// stage.regY = winH / -2;

	// Setup content for each section
	// ----------------------------------------------------------

	APP.projects.forEach(function (project, i) {

		// var width = stage.canvas.width,
		// 	height = stage.canvas.height;

		// // build canvas shapes
		
		// project.shape = new createjs.Shape();
		// if (i === 0) {
		// 	project.shape.regX = 25;
		// 	project.shape.regY = 2;
		// 	project.shape.graphics.beginFill(project.fill).drawRect(0, 0, 50, 4);
		// } else {
		// 	project.shape.regX = width / 2;
		// 	project.shape.regY = height / 2;
		// 	project.shape.graphics.beginFill(project.fill).drawRect(0, height * i, width, height);
		// }
		// stage.addChild(project.shape);

		// populate headlines

		var headline = document.createElement('div');
		headline.className = 'headline-item animate ' + ( i === 0 ? 'active' : '' );
		headline.innerHTML = '<div class="headline-text">' + project.title + '</div>';
		APP.headlineTrack.appendChild(headline);
		APP.headlines.push(headline);

	});

	


	// Intro animation
	// ----------------------------------------------------------

	// createjs.Tween.get(APP.projects[0].shape)
	// 	.to({ rotation: 1080 }, 3000, createjs.Ease.getPowOut(4))
	// 	.to({ scaleX: stage.canvas.width / 50 }, 600, createjs.Ease.getPowOut(4))
	// 	.call(function () {
	// 		document.body.classList.add('initialized');
	// 	})
	// 	.to({ scaleY: stage.canvas.height / 4 }, 700, createjs.Ease.getPowOut(4));

	// createjs.Ticker.setFPS(60);
	// createjs.Ticker.addEventListener("tick", stage);

	document.body.classList.add('initialized');


	// Scroll behavior between sections
	// ----------------------------------------------------------

	var sections = document.querySelectorAll('.section');

	sections.forEach(function (section, i) {

		var project = APP.projects[i],
			color = project.color ? project.color : '#222',
			fill = project.fill ? project.fill : '#f3f5f7';

		APP.onScroll.push(function (scrollTop) {
			var top = section.offsetTop - window.innerHeight / 2,
				//height = stage.canvas.height,
				bottom = (section.offsetHeight + section.offsetTop) - window.innerHeight / 2;

			if (scrollTop >= top && scrollTop < bottom) {

				if ( ! section.classList.contains('active')) {
				
					section.classList.add('active');

					// createjs.Tween.get(stage)
					// 	.to({
					// 		y: -height * i
					// 	}, 1000, createjs.Ease.getPowOut(4));
				
					APP.activeProject = i;
					document.body.setAttribute('data-project', i);
					document.body.style.color = color;
					updateMask(project);
			
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

	// window.addEventListener("resize", resize);

	// function resize(){
		
	// 	var width = window.innerWidth - 15,
	// 		height = window.innerHeight;

	// 	stage.canvas.width = width;
	// 	stage.canvas.height = height;
	// 	stage.setBounds(0,0,width,height);
	// 	stage.regX = width / -2;
	// 	stage.regY = height / -2;
		
	// 	APP.projects.forEach(function (project, i) {
	// 		var newGraphics = new createjs.Graphics().beginFill(project.fill).drawRect(0, height * i, width, height);
	// 		project.shape.regX = width / 2;
	// 		project.shape.regY = height / 2;
	// 		project.shape.set({ graphics: newGraphics });
	// 	});
		
	// }

})(this);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fcG9seWZpbGxzLmpzIiwiX2NvbmZpZy5qcyIsIl9zY3JvbGxMb29wLmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAod2luZG93Lk5vZGVMaXN0ICYmICFOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCkge1xuICAgIE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgICAgIHRoaXNBcmcgPSB0aGlzQXJnIHx8IHdpbmRvdztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXNbaV0sIGksIHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9ICdmdW5jdGlvbicpIHtcbiAgICAvLyBNdXN0IGJlIHdyaXRhYmxlOiB0cnVlLCBlbnVtZXJhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdCwgXCJhc3NpZ25cIiwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHZhckFyZ3MpIHsgLy8gLmxlbmd0aCBvZiBmdW5jdGlvbiBpcyAyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7IC8vIFR5cGVFcnJvciBpZiB1bmRlZmluZWQgb3IgbnVsbFxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgICB9XG4gIFxuICAgICAgICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcbiAgXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgdmFyIG5leHRTb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdO1xuICBcbiAgICAgICAgICBpZiAobmV4dFNvdXJjZSAhPSBudWxsKSB7IC8vIFNraXAgb3ZlciBpZiB1bmRlZmluZWQgb3IgbnVsbFxuICAgICAgICAgICAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0U291cmNlKSB7XG4gICAgICAgICAgICAgIC8vIEF2b2lkIGJ1Z3Mgd2hlbiBoYXNPd25Qcm9wZXJ0eSBpcyBzaGFkb3dlZFxuICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5leHRTb3VyY2UsIG5leHRLZXkpKSB7XG4gICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0bztcbiAgICAgIH0sXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IiwiKGZ1bmN0aW9uKHdpbmRvdyl7XG5cbiAgICB2YXIgQVBQID0ge1xuXG4gICAgICAgIG9uU2Nyb2xsOiBbXSxcbiAgICAgICAgYWN0aXZlUHJvamVjdDogMCxcbiAgICAgICAgaGVhZGxpbmVUcmFjazogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkbGluZS10cmFja1wiKSxcbiAgICAgICAgaGVhZGxpbmVzOiBbXSxcbiAgICAgICAgcHJvamVjdHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJzxzcGFuIGNsYXNzPVwiZmFkZWRcIj5IaSwgSSBjcmVhdGU8L3NwYW4+PGJyLz4gdGhpbmdzIDxzcGFuIGNsYXNzPVwiZmFkZWRcIj5mb3I8YnIvPnRoZSB3ZWIuPC9zcGFuPicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0hlc3RlciBTdHJlZXQgQ29sbGFib3JhdGl2ZScsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQZWxsZW50ZXNxdWUgaW4gaXBzdW0gaWQgb3JjaSBwb3J0YSBkYXBpYnVzLiBOdWxsYSBxdWlzIGxvcmVtIHV0IGxpYmVybyBtYWxlc3VhZGEgZmV1Z2lhdC4gRG9uZWMgc29sbGljaXR1ZGluIG1vbGVzdGllIG1hbGVzdWFkYS4nLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9oZXN0ZXJzdHJlZXQub3JnLycsXG4gICAgICAgICAgICAgICAgdXJsX3RleHQ6ICdoZXN0ZXJzdHJlZXQub3JnJyxcbiAgICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGU6ICdQcmltYXJ5IERldmVsb3BlcicsXG4gICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtOiAnV29yZHByZXNzJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMzI2NkNDJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnI0RGRTZGMSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnR2libmV5JyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BlbGxlbnRlc3F1ZSBpbiBpcHN1bSBpZCBvcmNpIHBvcnRhIGRhcGlidXMuIE51bGxhIHF1aXMgbG9yZW0gdXQgbGliZXJvIG1hbGVzdWFkYSBmZXVnaWF0LiBEb25lYyBzb2xsaWNpdHVkaW4gbW9sZXN0aWUgbWFsZXN1YWRhLicsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL2dpYm5leWRhbmNlLm9yZy8nLFxuICAgICAgICAgICAgICAgIHVybF90ZXh0OiAnZ2libmV5ZGFuY2Uub3JnJyxcbiAgICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGU6ICdQcmltYXJ5IERldmVsb3BlcicsXG4gICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtOiAnV29yZHByZXNzJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnI0U4RThFOCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVHJhbnNpdENlbnRlcicsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQZWxsZW50ZXNxdWUgaW4gaXBzdW0gaWQgb3JjaSBwb3J0YSBkYXBpYnVzLiBOdWxsYSBxdWlzIGxvcmVtIHV0IGxpYmVybyBtYWxlc3VhZGEgZmV1Z2lhdC4gRG9uZWMgc29sbGljaXR1ZGluIG1vbGVzdGllIG1hbGVzdWFkYS4nLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly90cmFuc2l0Y2VudGVyLm9yZy8nLFxuICAgICAgICAgICAgICAgIHVybF90ZXh0OiAndHJhbnNpdGNlbnRlci5vcmcnLFxuICAgICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogJ1ByaW1hcnkgRGV2ZWxvcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm06ICdXb3JkcHJlc3MnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyM1RTI4QjInLFxuICAgICAgICAgICAgICAgIGZpbGw6ICcjRUZFOUY3J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdPcnBoZXVzIENoYW1iZXIgT3JjaGVzdHJhJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BlbGxlbnRlc3F1ZSBpbiBpcHN1bSBpZCBvcmNpIHBvcnRhIGRhcGlidXMuIE51bGxhIHF1aXMgbG9yZW0gdXQgbGliZXJvIG1hbGVzdWFkYSBmZXVnaWF0LiBEb25lYyBzb2xsaWNpdHVkaW4gbW9sZXN0aWUgbWFsZXN1YWRhLicsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL29ycGhldXNueWMub3JnLycsXG4gICAgICAgICAgICAgICAgdXJsX3RleHQ6ICdvcnBoZXVzbnljLm9yZycsXG4gICAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgICAgICByb2xlOiAnUHJpbWFyeSBEZXZlbG9wZXInLFxuICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybTogJ1dvcmRwcmVzcydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI0M0ODAxNCcsXG4gICAgICAgICAgICAgICAgZmlsbDogJyNFRUU5REYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NsYXJlbW9udCBHcmFkdWF0ZSBVbml2ZXJzaXR5JyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BlbGxlbnRlc3F1ZSBpbiBpcHN1bSBpZCBvcmNpIHBvcnRhIGRhcGlidXMuIE51bGxhIHF1aXMgbG9yZW0gdXQgbGliZXJvIG1hbGVzdWFkYSBmZXVnaWF0LiBEb25lYyBzb2xsaWNpdHVkaW4gbW9sZXN0aWUgbWFsZXN1YWRhLicsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL2NndS5lZHUvJyxcbiAgICAgICAgICAgICAgICB1cmxfdGV4dDogJ2NndS5lZHUnLFxuICAgICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogJ1ByaW1hcnkgRGV2ZWxvcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm06ICdXb3JkcHJlc3MnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNBRjFFMjcnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICcjRUNERkUxJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xldFxcJ3MgQ2hhdCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICBcbiAgICB9O1xuXG4gICAgd2luZG93LkFQUCA9IEFQUDtcblxufSkodGhpcyk7IiwiKGZ1bmN0aW9uKHdpbmRvdyl7XG5cbiAgICB2YXIgc2Nyb2xsVG9wID0gLTEsXG5cdFx0cmVxdWVzdEZyYW1lID0gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElFIEZhbGxiYWNrLCB5b3UgY2FuIGV2ZW4gZmFsbGJhY2sgdG8gb25zY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuXHRmdW5jdGlvbiBsb29wKCkge1xuXG5cdFx0Ly8gaWYgc2Nyb2xsVG9wIGFuZCB3aW5kb3cncyBzY3JvbGwgcG9zaXRpb24gYXJlIGVxdWFsLCByZXR1cm4gYW5kIHRyeSBhZ2Fpbi5cblx0XHRpZiAoc2Nyb2xsVG9wID09IHdpbmRvdy5wYWdlWU9mZnNldCkge1xuXHRcdFx0cmVxdWVzdEZyYW1lKGxvb3ApO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIHNldCBzY3JvbGxUb3AgdG8gd2luZG93J3Mgc2Nyb2xsIHBvc2l0aW9uLlxuXHRcdHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuXHRcdC8vIGRvIHlvdXIgbWFnaWNcblx0XHRBUFAub25TY3JvbGwuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcblx0XHRcdGlmICh0eXBlb2YgZm4gPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdGZuKHNjcm9sbFRvcCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBydW4gbG9vcCBhZ2FpblxuXHRcdHJlcXVlc3RGcmFtZShsb29wKTtcblxuXHR9XG5cblx0Ly8gaW5pdGlhbGl6ZSBsb29wKClcbiAgICBsb29wKCk7XG4gICAgXG59KSh0aGlzKTsiLCIoZnVuY3Rpb24gKHdpbmRvdykge1xuXG5cblx0Ly8gU2V0dXAgY2FudmFzIGFyZWFcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdC8vIHZhciB3aW5XID0gd2luZG93LmlubmVyV2lkdGggLSAxNSxcblx0Ly8gXHR3aW5IID0gd2luZG93LmlubmVySGVpZ2h0LFxuXHQvLyBcdHN0YWdlID0gbmV3IGNyZWF0ZWpzLlN0YWdlKCdjYW52YXMnKTtcblxuXHQvLyBzdGFnZS5jYW52YXMud2lkdGggPSB3aW5XO1xuXHQvLyBzdGFnZS5jYW52YXMuaGVpZ2h0ID0gd2luSDtcblx0Ly8gc3RhZ2UucmVnWCA9IHdpblcgLyAtMjtcblx0Ly8gc3RhZ2UucmVnWSA9IHdpbkggLyAtMjtcblxuXHQvLyBTZXR1cCBjb250ZW50IGZvciBlYWNoIHNlY3Rpb25cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdEFQUC5wcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9qZWN0LCBpKSB7XG5cblx0XHQvLyB2YXIgd2lkdGggPSBzdGFnZS5jYW52YXMud2lkdGgsXG5cdFx0Ly8gXHRoZWlnaHQgPSBzdGFnZS5jYW52YXMuaGVpZ2h0O1xuXG5cdFx0Ly8gLy8gYnVpbGQgY2FudmFzIHNoYXBlc1xuXHRcdFxuXHRcdC8vIHByb2plY3Quc2hhcGUgPSBuZXcgY3JlYXRlanMuU2hhcGUoKTtcblx0XHQvLyBpZiAoaSA9PT0gMCkge1xuXHRcdC8vIFx0cHJvamVjdC5zaGFwZS5yZWdYID0gMjU7XG5cdFx0Ly8gXHRwcm9qZWN0LnNoYXBlLnJlZ1kgPSAyO1xuXHRcdC8vIFx0cHJvamVjdC5zaGFwZS5ncmFwaGljcy5iZWdpbkZpbGwocHJvamVjdC5maWxsKS5kcmF3UmVjdCgwLCAwLCA1MCwgNCk7XG5cdFx0Ly8gfSBlbHNlIHtcblx0XHQvLyBcdHByb2plY3Quc2hhcGUucmVnWCA9IHdpZHRoIC8gMjtcblx0XHQvLyBcdHByb2plY3Quc2hhcGUucmVnWSA9IGhlaWdodCAvIDI7XG5cdFx0Ly8gXHRwcm9qZWN0LnNoYXBlLmdyYXBoaWNzLmJlZ2luRmlsbChwcm9qZWN0LmZpbGwpLmRyYXdSZWN0KDAsIGhlaWdodCAqIGksIHdpZHRoLCBoZWlnaHQpO1xuXHRcdC8vIH1cblx0XHQvLyBzdGFnZS5hZGRDaGlsZChwcm9qZWN0LnNoYXBlKTtcblxuXHRcdC8vIHBvcHVsYXRlIGhlYWRsaW5lc1xuXG5cdFx0dmFyIGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0aGVhZGxpbmUuY2xhc3NOYW1lID0gJ2hlYWRsaW5lLWl0ZW0gYW5pbWF0ZSAnICsgKCBpID09PSAwID8gJ2FjdGl2ZScgOiAnJyApO1xuXHRcdGhlYWRsaW5lLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiaGVhZGxpbmUtdGV4dFwiPicgKyBwcm9qZWN0LnRpdGxlICsgJzwvZGl2Pic7XG5cdFx0QVBQLmhlYWRsaW5lVHJhY2suYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXHRcdEFQUC5oZWFkbGluZXMucHVzaChoZWFkbGluZSk7XG5cblx0fSk7XG5cblx0XG5cblxuXHQvLyBJbnRybyBhbmltYXRpb25cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdC8vIGNyZWF0ZWpzLlR3ZWVuLmdldChBUFAucHJvamVjdHNbMF0uc2hhcGUpXG5cdC8vIFx0LnRvKHsgcm90YXRpb246IDEwODAgfSwgMzAwMCwgY3JlYXRlanMuRWFzZS5nZXRQb3dPdXQoNCkpXG5cdC8vIFx0LnRvKHsgc2NhbGVYOiBzdGFnZS5jYW52YXMud2lkdGggLyA1MCB9LCA2MDAsIGNyZWF0ZWpzLkVhc2UuZ2V0UG93T3V0KDQpKVxuXHQvLyBcdC5jYWxsKGZ1bmN0aW9uICgpIHtcblx0Ly8gXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaW5pdGlhbGl6ZWQnKTtcblx0Ly8gXHR9KVxuXHQvLyBcdC50byh7IHNjYWxlWTogc3RhZ2UuY2FudmFzLmhlaWdodCAvIDQgfSwgNzAwLCBjcmVhdGVqcy5FYXNlLmdldFBvd091dCg0KSk7XG5cblx0Ly8gY3JlYXRlanMuVGlja2VyLnNldEZQUyg2MCk7XG5cdC8vIGNyZWF0ZWpzLlRpY2tlci5hZGRFdmVudExpc3RlbmVyKFwidGlja1wiLCBzdGFnZSk7XG5cblx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdpbml0aWFsaXplZCcpO1xuXG5cblx0Ly8gU2Nyb2xsIGJlaGF2aW9yIGJldHdlZW4gc2VjdGlvbnNcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdHZhciBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uJyk7XG5cblx0c2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc2VjdGlvbiwgaSkge1xuXG5cdFx0dmFyIHByb2plY3QgPSBBUFAucHJvamVjdHNbaV0sXG5cdFx0XHRjb2xvciA9IHByb2plY3QuY29sb3IgPyBwcm9qZWN0LmNvbG9yIDogJyMyMjInLFxuXHRcdFx0ZmlsbCA9IHByb2plY3QuZmlsbCA/IHByb2plY3QuZmlsbCA6ICcjZjNmNWY3JztcblxuXHRcdEFQUC5vblNjcm9sbC5wdXNoKGZ1bmN0aW9uIChzY3JvbGxUb3ApIHtcblx0XHRcdHZhciB0b3AgPSBzZWN0aW9uLm9mZnNldFRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCAvIDIsXG5cdFx0XHRcdC8vaGVpZ2h0ID0gc3RhZ2UuY2FudmFzLmhlaWdodCxcblx0XHRcdFx0Ym90dG9tID0gKHNlY3Rpb24ub2Zmc2V0SGVpZ2h0ICsgc2VjdGlvbi5vZmZzZXRUb3ApIC0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcblxuXHRcdFx0aWYgKHNjcm9sbFRvcCA+PSB0b3AgJiYgc2Nyb2xsVG9wIDwgYm90dG9tKSB7XG5cblx0XHRcdFx0aWYgKCAhIHNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuXHRcdFx0XHRcblx0XHRcdFx0XHRzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG5cdFx0XHRcdFx0Ly8gY3JlYXRlanMuVHdlZW4uZ2V0KHN0YWdlKVxuXHRcdFx0XHRcdC8vIFx0LnRvKHtcblx0XHRcdFx0XHQvLyBcdFx0eTogLWhlaWdodCAqIGlcblx0XHRcdFx0XHQvLyBcdH0sIDEwMDAsIGNyZWF0ZWpzLkVhc2UuZ2V0UG93T3V0KDQpKTtcblx0XHRcdFx0XG5cdFx0XHRcdFx0QVBQLmFjdGl2ZVByb2plY3QgPSBpO1xuXHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBpKTtcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLmNvbG9yID0gY29sb3I7XG5cdFx0XHRcdFx0dXBkYXRlTWFzayhwcm9qZWN0KTtcblx0XHRcdFxuXHRcdFx0XHR9XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0c2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdFxuXHR9KTtcblxuXHRmdW5jdGlvbiB1cGRhdGVNYXNrKGRhdGEpIHtcblx0XHRBUFAuaGVhZGxpbmVzLmZvckVhY2goZnVuY3Rpb24oaGVhZGxpbmUsIGkpe1xuXHRcdFx0aWYgKCBpID09PSBBUFAuYWN0aXZlUHJvamVjdCApIHtcblx0XHRcdFx0aGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoZWFkbGluZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdEFQUC5oZWFkbGluZVRyYWNrLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLCcgKyAoQVBQLmFjdGl2ZVByb2plY3QgKiAtMTApICsgJ3Z3LDApJztcblx0XHRBUFAuaGVhZGxpbmVUcmFjay5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwnICsgKEFQUC5hY3RpdmVQcm9qZWN0ICogLTEwKSArICd2dywwKSc7XG5cdFx0QVBQLmhlYWRsaW5lVHJhY2suc3R5bGUubW96VHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsJyArIChBUFAuYWN0aXZlUHJvamVjdCAqIC0xMCkgKyAndncsMCknO1xuXHRcdEFQUC5oZWFkbGluZVRyYWNrLnN0eWxlLm1zVHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsJyArIChBUFAuYWN0aXZlUHJvamVjdCAqIC0xMCkgKyAndncsMCknO1xuXHRcdEFQUC5oZWFkbGluZVRyYWNrLnN0eWxlLm9UcmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwnICsgKEFQUC5hY3RpdmVQcm9qZWN0ICogLTEwKSArICd2dywwKSc7XG5cdH1cblxuXG5cblx0Ly8gQnJvd3NlciByZXNpemluZ1xuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplKTtcblxuXHQvLyBmdW5jdGlvbiByZXNpemUoKXtcblx0XHRcblx0Ly8gXHR2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDE1LFxuXHQvLyBcdFx0aGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG5cdC8vIFx0c3RhZ2UuY2FudmFzLndpZHRoID0gd2lkdGg7XG5cdC8vIFx0c3RhZ2UuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcblx0Ly8gXHRzdGFnZS5zZXRCb3VuZHMoMCwwLHdpZHRoLGhlaWdodCk7XG5cdC8vIFx0c3RhZ2UucmVnWCA9IHdpZHRoIC8gLTI7XG5cdC8vIFx0c3RhZ2UucmVnWSA9IGhlaWdodCAvIC0yO1xuXHRcdFxuXHQvLyBcdEFQUC5wcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9qZWN0LCBpKSB7XG5cdC8vIFx0XHR2YXIgbmV3R3JhcGhpY3MgPSBuZXcgY3JlYXRlanMuR3JhcGhpY3MoKS5iZWdpbkZpbGwocHJvamVjdC5maWxsKS5kcmF3UmVjdCgwLCBoZWlnaHQgKiBpLCB3aWR0aCwgaGVpZ2h0KTtcblx0Ly8gXHRcdHByb2plY3Quc2hhcGUucmVnWCA9IHdpZHRoIC8gMjtcblx0Ly8gXHRcdHByb2plY3Quc2hhcGUucmVnWSA9IGhlaWdodCAvIDI7XG5cdC8vIFx0XHRwcm9qZWN0LnNoYXBlLnNldCh7IGdyYXBoaWNzOiBuZXdHcmFwaGljcyB9KTtcblx0Ly8gXHR9KTtcblx0XHRcblx0Ly8gfVxuXG59KSh0aGlzKTsiXX0=
