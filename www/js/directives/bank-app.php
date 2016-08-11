<div class="container-fluid bank_app bank_app_container">

	<div class="row">
		
		<div class="col-xs-0 col-md-2">
      <!-- Empty Row   -->
    </div>

		<div class="col-xs-12 col-md-8 content">
			
			<h1 id="bank-title">Currency Converter</h1>
			<h4 id="bank-desc">Converts USD to any other country's currency. These conversions are update
      every hour on the hour thanks to <a href="http://openexchangerates.org">openexchangerates.org</a>'s API.</h4>

			<div class="input-group" id="bank-input">
      	<input type="text" class="form-control input" placeholder="Balance"> 
      	<span class="input-group-btn">
      		<button class="btn btn-default go" type="button">Go!</button>
          <button class="btn btn-default dropdown-toggle bank_app_button" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
             Currency
            <span class="caret"></span>
          </button>

          <ul class="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenu1" role="menu">
            <!-- List Created by bank.js -->
          </ul>
      	</span>
    
    	</div><!-- /input-group -->			

      <h1 class="output" id="bank-desc"></h1>

		</div>

		<div class="col-xs-0 col-md-2">
     <!-- Empty Row   -->
    </div>

	</div>

</div>