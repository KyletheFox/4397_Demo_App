<?php 
	if ($_SESSION["submit"]==1) {
		echo "i love pie";
	}
 ?>
<form action="index.php?id=4" method="post">
		Username: <input type="text" name="username" value="" /><br />
		Password: <input type="password" name="password" value="" /><br />
		<br />
		<input type="submit" name="submit" value="Submit" />
		<?php // name attributed needed for it to be inclded with POST Request ?>
</form>