<?php
    if(!$_POST["data"]){
        echo "Nothing Sent";
        exit;
    }

    include ('config.php');

    //decode JSON data received from AJAX POST request
    $data = json_decode($_POST["data"]);
    //$data = json_decode(stripcslashes($_POST['data']));

    foreach($data->coords as $item) {
        //Extract X number for panel
        $coord_X = preg_replace('/[^\d\s]/', '', $item->coordTop);
        //Extract Y number for panel
        $coord_Y = preg_replace('/[^\d\s]/', '', $item->coordLeft);
        //escape our values - as good practice
        $x_coord = mysqli_real_escape_string($link, $coord_X);
        $y_coord = mysqli_real_escape_string($link, $coord_Y);

        //Setup our Query
        $sql = "UPDATE coords SET x_pos = '$x_coord', y_pos = '$y_coord'";

        //Execute our Query
        mysqli_query($link, $sql) or die("Error updating Coords :".mysqli_error());
    }

    //Return Success
    echo "success";

?>