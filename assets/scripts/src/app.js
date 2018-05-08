(function (window) {


	var APP = function(FRAMES) {

		this.activeFrame = 0;
		this.headlineTrack = document.getElementById('headline-track');
		this.headlines = [];
		this.framesWrap = document.getElementById('frames');
		this.frames = FRAMES;
		this.canvas = document.getElementById('canvas');
		this.frameEls = [];
		this.next = document.getElementById('next');
		this.previous = document.getElementById('previous');
		this.introText = document.getElementById('js-intro-text');

		this.init();
	};

	APP.prototype.init = function() {

		this.buildContent();
		this.addEventListeners();
		this.animateIntroText();
		this.monitorFrames();
		
		document.body.classList.add('initialized');

	};
	
	APP.prototype.animateIntroText = function() {

		

	};

	APP.prototype.buildContent = function() {

		var THAT = this,
			templates = {
				project: document.getElementById('template-project').innerHTML,
				intro: document.getElementById('template-intro').innerHTML,
				outro: document.getElementById('template-outro').innerHTML
			};
		
		this.frames.forEach(function (frame, i) {

			// populate headlines
			var headline = document.createElement('div');
			headline.className = 'headline-item animate ' + ( i === 0 ? 'active' : '' );
			headline.innerHTML = '<div class="headline-text">' + frame.headline + '</div>';
			THAT.headlineTrack.appendChild(headline);
			THAT.headlines.push(headline);

			// populate frames
			var frameData = Object.assign( frame, { i: i } ),
				template = frame.template ? templates[frame.template] : templates.project,
				frameHTML = Mustache.render( template, frameData );

			THAT.framesWrap.innerHTML += frameHTML;

		});

		this.frameEls = document.querySelectorAll('.frame');
		
	};

	APP.prototype.addEventListeners = function() {

		var THAT = this;

		document.addEventListener("keydown",function(event){
			
			var DOWN = 40, UP = 38,
				frame;

			if ( event.keyCode !== DOWN && event.keyCode !== UP ) {
				return;
			}

			event.preventDefault();

			switch(event.keyCode) {
				case DOWN:
					frame = THAT.activeFrame + 1;
					break;
				case UP:
					frame = THAT.activeFrame - 1;
					break;
			}

			var id = THAT.frames[frame].id,
				el = document.getElementById(id);

			window.scrollTo(0,el.offsetTop);

		});

	};

	APP.prototype.monitorFrames = function() {

		var THAT = this;

		this.frameEls.forEach(function (frameEl, i) {

			var frame = THAT.frames[i],
				color = frame.color ? frame.color : '#222',
				fill = frame.fill ? frame.fill : '#e8e8e8',
				video = document.getElementById('video-' + i);

			updateFrame(window.pageYOffset);

			SCROLL_LOOP.push(updateFrame);
			
			function updateFrame(scrollTop) {
				var top = frameEl.offsetTop - window.innerHeight / 2,
					bottom = (frameEl.offsetHeight + frameEl.offsetTop) - window.innerHeight / 2;
	
				if (scrollTop >= top && scrollTop < bottom) {
	
					if ( ! frameEl.classList.contains('active')) {
					
						frameEl.classList.add('active');
	
						THAT.activeFrame = i;
						THAT.canvas.style.backgroundColor = fill;
						THAT.updateMask(frame, i);
						document.body.style.color = color;
						// history.pushState({},'',frame.id);
	
						if ( video ) {
							video.play();
						}
					
					}
	
				} else {
	
					frameEl.classList.remove('active');
					if ( video ) {
						video.pause();
					}
	
				}
			}
		});
	};

	APP.prototype.updateMask = function(frame, index) {

		var THAT = this,
			next = THAT.next,
			prev = THAT.previous;
			
		// Change headline
		THAT.headlines.forEach(function(headline, i){
			if ( i === index ) {
				headline.classList.add('active');
			} else {
				headline.classList.remove('active');
			}
		});
		THAT.headlineTrack.style.transform = 'translate3d(0,' + (index * -10) + 'vw,0)';
		THAT.headlineTrack.style.webkitTransform = 'translate3d(0,' + (index * -10) + 'vw,0)';
		THAT.headlineTrack.style.mozTransform = 'translate3d(0,' + (index * -10) + 'vw,0)';
		THAT.headlineTrack.style.msTransform = 'translate3d(0,' + (index * -10) + 'vw,0)';
		THAT.headlineTrack.style.oTransform = 'translate3d(0,' + (index * -10) + 'vw,0)';

		// Change arrow links
		switch(index) {
			case 0:
				prev.classList.remove('active');
				next.classList.add('active');
				next.setAttribute('href', '#' + THAT.frames[index + 1].id);
				break;
			case (THAT.frames.length - 1):
				prev.classList.add('active');
				prev.setAttribute('href', '#' + THAT.frames[index - 1].id);
				next.classList.remove('active');
				break;
			default:
				prev.classList.add('active');
				prev.setAttribute('href', '#' + THAT.frames[index - 1].id);
				next.classList.add('active');
				next.setAttribute('href', '#' + THAT.frames[index + 1].id);
		}

	};

	document_ready( new APP(APP_FRAMES) );

})(this);