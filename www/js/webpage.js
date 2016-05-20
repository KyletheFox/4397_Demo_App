
$(document).ready(function() {

	$('.icon-bar').colorCycle({
		colors: ['#111', '#444', '#888', '#BBB', '#DDD', '#FFF' ]
	});

	$('.btn').colorCycle({
		colors: ['#888', '#BBB', '#DDD', '#FFF' ]
	});

	$('#content-box').colorCycle({
		colors: ['#111', '#444', '#888', '#BBB', '#DDD', '#FFF' ]
	});

	$('#nameLink').click(function() {
		$('#nameLink').css("color", "#fff");
	});

	$('.navbar-toggle').click(function() {
		$('.navbar-toggle').css("background-color", "#000");
		
	});

	if($(window).width() <= 767) {
		$('#navbar-link').remove();
	}
	

});