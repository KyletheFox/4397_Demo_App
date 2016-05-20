$(document).ready(function() {

	$.getJSON("https://openexchangerates.org/api/currencies.json?app_id=cefa48bbb66245afa07f59948dad85a1", function(result){
		
		var element, temp, i, j, k;
		var outCurency;
		var exRate;
		var usBalance;
		var abv = [];

		j = 0;
		k = 0;

		$.each(result, function(i, obj) {
			element = document.createElement('li');
			element.innerHTML = '<a href="#" id="' + j + '">' + obj + '</a>'
			$('.dropdown-menu').append(element);
			abv[j] = i;
			j++;
		});

  		$(".dropdown-menu li a").click(function(){
    		$(".dropdown-toggle").text($(this).text());
    		outCurency = $(this).text();
    		console.log(outCurency);

    		while ($('#'+k).text() != outCurency && k < j) {
    			k++;
    		}

    		/*
    		console.log($('#'+k).text());
    		console.log('k: ' + k);
    		console.log(abv[k]);
			*/

    		$.getJSON("https://openexchangerates.org/api/latest.json?app_id=cefa48bbb66245afa07f59948dad85a1", function(current){
    			$.each(current.rates, function(ii, objj) {
    				if (ii === abv[k]) {
    					exRate = objj;
    					console.log('ii: ' + ii);
    					console.log(exRate);
    				};
    			});	// End .each

    			$(".go").click(function() {
    				usBalance = $(".input").val();
    				$(".output").text('$' + Math.round(usBalance*exRate*100)/100);
    			});	// End Click Go 



    		}); // End Second JSON

    	}); //End click Menu

    }); // End First JSON


});	// End doucment.ready()