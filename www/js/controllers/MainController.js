app.controller('MainController', ['$scope', function($scope) {
	$(document).ready(function() {
		var picClass = '.pic-';
		for (var i = 1; i <= 20; ++i) {
			// var imgIndex = Math.floor(Math.random()*imageSources.length);
			// //console.log($(picClass + i));
			// $(picClass + i).attr('src', imageSources[imgIndex]);
			startAnimation(picClass + i);
		}
		
	});

	function startAnimation(id) {
		// console.log(id);
		var time = (Math.random() * 15000) + 4000;
		animation(time, id);
	}

	function animation(time, id) {
		var anime = setInterval(function() {
				var imgIndex = Math.floor(Math.random()*imageSources.length);
				$(id).fadeOut(2000, function() {
					$(id).attr("src",imageSources[imgIndex]);
					$(id).fadeIn(2000);
					clearInterval(this);
				});
				
		}, time);
	}

	var imageSources = [
		"img/autism-walk.jpg",
		"img/hawaii-pic.jpg",
		"img/paintball-pic.jpg",
		"img/wedding.jpg",
		"img/new-york.jpg",
		"img/camping-woods.jpg",
		"img/hawaii-tree.jpg"
	]
}]);