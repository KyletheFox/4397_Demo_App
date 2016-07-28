<!-- <h2>Volunteer Work</h2>
<ul>
	<li>Contributed to the open source project: http://sciencetap.us</li>
</ul> -->

<form action="index.php?id=4" method="post">
	<div class="form-group">
		<label>Username</label>
		<input type="email" name="username" class="form-group" value=""/>
	</div>
	<div class="form-group">
		<label>Password</label>
		<input type="password" name="password" class="form-group" value="" /><br />
	</div>
	<input type="submit" class="btn btn-default" name="submit" value="Submit" />
	<input type="submit" class="btn btn-default" name="register" value="Register" />
	<input type="submit" class="btn btn-default" name="pass_reset_button" value="Forgot Password" />
	<?php 
		if (!empty($_POST['submit']) && $_SESSION['logged_in'] == 0) {
			echo "Unsuccessful Login - Please Try Again";
		} else if (!empty($_SESSION['success_insert'])) {
			echo "You are now registered - Please Login";
			$_SESSION['success_insert'] = null;
		} elseif (!empty($_SESSION['pass_reset_good'])) {
			echo "Password Successfully Reset - Please Login";
			$_SESSION['pass_reset_good'] = null;
		}	
	?>
</form>