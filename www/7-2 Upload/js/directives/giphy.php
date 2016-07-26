<div class="container-fluid">
	
	<!-- Title Row -->
	<div class="row">

		<div class="col-xs-0 col-lg-3">
			<!-- empty row -->
		</div>

		<div class="col-xs-12 col-lg-6">
			<h1>Welcome to my Giphy App</h1>
			<h2>Please type in a word/phrase and a random gif will appear
				below based on your input</h2>
		</div>

		<div class="col-xs-0 col-lg-3">
			<!-- empty row -->
		</div>
	
	</div>

	<!-- app -->
	<div class="row">
		<div class="col-xs-0 col-lg-3">
			<!-- empty row -->
		</div>

		<div class="col-xs-12 col-lg-6">
			<input type="text" name="giphy-search" id="giphy-search">
			<br>
			<button type="button" id="giphy-button">Click me</button>
			<br>
			<img src="#" id="the-gif">
		</div>

		<div class="col-xs-0 col-lg-3">
			<!-- empty row -->
		</div>
	
	</div>

	<script type="text/javascript">
	$(document).ready( function() {
		$("#giphy-button").click(function(){
			console.log("clicked giphy-button");
			$.ajax({
				type : "GET",
				url : "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + ("#giphy-search").text(),
				contentType : "application/json; charset=utf-8",
				success : function(response) {
					console.log("Response: " + response);
					var obj = jQuery.parseJSON(response);
					("#the-gif").attr("href", obj.image_url);
				}
			});
		});
	});
	</script>

</div>