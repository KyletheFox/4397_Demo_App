<div class="container-fluid" id="gif-page">
		
	<!-- Title Row -->
	<div class="row">

		<div class="col-xs-0 col-lg-3">
			<!-- empty row -->
		</div>

		<div class="col-xs-12 col-lg-6">
			<h1 id="gif-gen-label">Gif Generator</h1>
			<h6>
				Please type in a word/phrase and a random gif will appear below based on your input. Its a good way to kill an hour.</h6>
		</div>

		<div class="col-xs-0 col-lg-3">
			<!-- empty row -->
		</div>
							
	</div>

	<!-- app -->
	<div class="row">
		<input type="text" name="giphy-search" id="giphy-search">
		<button type="button" class="btn btn-default" id="giphy-button">Click me</button>
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