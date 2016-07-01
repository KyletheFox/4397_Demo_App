
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

	$("#giphy-button").click(function(){
		$.ajax({
			type : "GET",
			url : "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + $("#giphy-search").attr("value"),
			contentType : "application/json; charset=utf-8",
			success : function(response) {
				console.log("Response: " + JSON.stringify(response));
				var obj = $.parseJSON(JSON.stringify(response));
				console.log("object.data: " + obj.data.image_url);
				$("#the-gif").attr("src", obj.data.image_url);
			}
		});
	});
});

function signOut() {
	document.forms["sign_out"].submit();
}	