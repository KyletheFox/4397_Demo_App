<!DOCTYPE html>
<html lang="en">
<head>
	<title>International Bank Account Checker</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
	<link href='https://fonts.googleapis.com/css?family=Rosario' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="../css/style.css">
	<link rel="stylesheet" type="text/css" href="bank.css">

</head>

<body class="bank_app">

 <!--Bootstrap Fixed Navbar -->
   <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      
      <div class="navbar-header">
        
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="icon-bar"></span>     
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>     
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>     
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                         
        </button>
        <a class="navbar-brand" href="../index.php">Kyle O'Neill</a>


      </div>

      <div id="navbar" class="navbar-collapse collapse" aria-expanded="false">
  
    <ul class="nav navbar-nav navbar-text navbar-right">
          <li><a href="#">Sign In</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-text navbar-left">
          <li><a href="../resume.pdf">Resume</a></li>
        </ul>

      </div>

    </div>
  </nav>

<div class="container-fluid bank_app bank_app_container">

	<div class="row">
		
		<div class="col-xs-0 col-lg-3"></div>

		<div class="col-xs-12 col-lg-6 content">
			
			<h1>Currency Converter</h1>
			<h3>Converts USD to any other country's currency. These conversions are update
      every hour on the hour thanks to <a href="http://openexchangerates.org">openexchangerates.org</a>'s API.</h3>

			<div class="input-group">
      			<input type="text" class="form-control input bank_app_input" placeholder="Balance">
      			<span class="input-group-btn">
       				<button class="btn btn-default go bank_app_button" type="button">Go!</button>
      			</span>
    		</div><!-- /input-group -->			

			<div class="dropdown country">
  				<button class="btn btn-default dropdown-toggle bank_app_button" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
   					 Currency
    				<span class="caret"></span>
  				</button>

 				<ul class="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenu1">
 				<!-- List Created by bank.js -->
  				</ul>
			</div>

			

    		<h1 class="output"></h1>

		</div>

		<div class="col-xs-0 col-lg-3"></div>

	</div>

</div>

</body>

<!-- jQuery -->
<script src="http://code.jquery.com/jquery-2.0.0.js"></script>

<!-- Bootstrap -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
<script type="text/javascript" src="bank.js"></script>


</html>