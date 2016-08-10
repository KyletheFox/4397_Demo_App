
<div style="max-width: 400px;">
	<h1>Log In:</h1>
	<form action="index.php?id=3" method="post">
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
			}
		?>
	</form>
</div>