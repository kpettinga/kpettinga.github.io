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