<?php

	/*
		Database Setting
	s*/

	$db_host 	= "localhost"; 		//this will likely stay the same
	$db_name 	= "ui"; 			//name of the database we will be using
	$db_usr 	= "homestead"; 		//db username
	$db_pass 	= "secret"; 		//db password

	//Connect to the database
	$link = mysqli_connect($db_host, $db_usr, $db_pass) or die("MySQL Error: " . mysqli_error());

	//Select our database
	mysqli_select_db($link, $db_name) or die("MySQL Error: " . mysqli_error());

?>