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
		"img/beach-race.jpeg",
		"img/camping-woods.jpg",
		"img/car1.jpeg",
		"img/car2.jpeg",
		"img/car3.jpeg",
		"img/car4.jpeg",
		"img/car5.jpeg",
		"img/car6.jpeg",
		"img/car7.jpeg",
		"img/car8.jpeg",
		"img/car9.jpeg",
		"img/car10.jpeg",
		"img/car11.jpeg",
		"img/car12.jpeg",
		"img/car13.jpeg",
		"img/car14.jpeg",
		"img/car15.jpeg",
		"img/car16.jpeg",
		"img/car17.jpeg",
		"img/car18.jpeg",
		"img/car19.jpeg",
		"img/car20.jpeg",
		"img/car21.jpeg",
		"img/car22.jpeg",
		"img/car23.jpeg",
		"img/car24.jpeg",
		"img/car25.jpeg",
		"img/dad-baseball.jpeg",
		"img/hawaii-pic.jpg",
		"img/hawaii-street.jpeg",
		"img/hawaii-tree.jpg",
		"img/hawaii-zoo.jpeg",
		"img/horse.jpeg",
		"img/horse-farm.jpeg",
		"img/lake.jpeg",
		"img/lego-car.jpeg",
		"img/me-silly.jpeg",
		"img/new-york.jpg",
		"img/newyork-db.jpeg",
		"img/newyork-sign.jpeg",
		"img/newyork-street.jpeg",
		"img/newyork-truck.jpeg",
		"img/motorcycle.jpeg",
		"img/paintball-pic.jpg",
		"img/phillies-game.jpeg",
		"img/qvc.jpeg",
		"img/selfie.jpeg",
		"img/snow.jpeg",
		"img/sunset.jpeg",
		"img/temple.jpeg",
		"img/tig.jpeg",
		"img/us-silly.jpeg",
		"img/us-snowboard.jpeg",
		"img/us-snowboard2.jpeg",
		"img/us-soccer.jpeg",
		"img/us-xmas.jpeg",
		"img/wedding.jpg",
		"img/wedding-bride.jpg",
		"img/wildwood.jpeg",
		"img/wind.jpeg"
	]
}]);