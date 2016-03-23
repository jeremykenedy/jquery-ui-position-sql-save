<?php require 'php/config.php'; ?>

<!doctype html>
<html lang="en">
	<head>

	    <meta charset="utf-8">
	    <title>jQuery UI Save to SQL Demo</title>
	    <link rel="stylesheet" href="css/style.min.css">
		<script type="text/javascript" src="js/js-combined.min.js"></script>

	</head>
	<body>

		<?php

	        //Create a query to fetch our values from the database
	        $get_coords = mysqli_query($link, "SELECT * FROM coords");

	        //Set variables from the * array that is fetched from the database
	        while($row = mysqli_fetch_array($get_coords)) {

	            $x = $row['x_pos'];
	            $y = $row['y_pos'];

		        echo '<div id="draggable_box" style="left:'.$x.'px; top:'.$y.'px;">';
			        echo '<p>';
			        	echo 'Drag me around';
			        echo '</p>';
			        echo '<p></p>';
		        echo '</div>';
	        }
		?>

		<div id="response"></div>

	</body>
</html