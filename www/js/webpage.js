
$(document).ready(function() {

	$('.icon-bar').colorCycle({
		colors: ['#111', '#444', '#888', '#BBB', '#DDD']
	});

	// $('.btn').colorCycle({
	// 	colors: ['#888', '#BBB', '#DDD']
	// });

	// $('#content-box').colorCycle({
	// 	colors: ['#111', '#444', '#888', '#BBB', '#DDD']
	// });

	// $('#the-gif-cont').colorCycle({
	// 	colors: ['#111', '#444', '#888', '#BBB', '#DDD', '#FFF' ]
	// });

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
		console.log("url: http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + $("#giphy-search").val().replace(/ /g, "%20"));
		$.ajax({
			type : "GET",
			url : "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + $("#giphy-search").val().replace(/ /g, "%20"),
			contentType : "application/json; charset=utf-8",
			success : function(response) {
				
				var obj = $.parseJSON(JSON.stringify(response));
				$("#the-gif").attr("src", htmlEscape(obj.data.image_url));

				// Debuging
				console.log("Response: " + JSON.stringify(response));
				console.log("object.data: " + htmlEscape(obj.data.image_url));
			}
		});
	});

	// Get random gif to start playing
	$.ajax({
			type : "GET",
			url : "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=",
			success : function(response) {
				
				var obj = $.parseJSON(JSON.stringify(response));
				$("#the-gif").attr("src", htmlEscape(obj.data.image_url));

				// Debuging
				// console.log("Response: " + JSON.stringify(response));
				// console.log("object.data: " + htmlEscape(obj.data.image_url));
			}
		});
});

function signOut() {
      $.ajax({
           type: "POST",
           url: 'php/logOut.php',
           data:{action:'signOut'},
           success:function(html) {
             alert(html);
           }

      });
}	

function htmlEscape(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}