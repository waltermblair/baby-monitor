<?php
include 'dbconnect.php';

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata, TRUE);
    $activityId = mysqli_real_escape_string($mysqli, $request["activityId"]);
    $description = mysqli_real_escape_string($mysqli, $request["description"]);
    $notes = mysqli_real_escape_string($mysqli, $request["notes"]);

    $sql = "UPDATE activities SET ";
    $sql .= "description = '" . $description ."'," ;
    $sql .= "notes = '" . $notes ."' WHERE id = '" . $activityId . "'" ;

    if(!empty($request) && $mysqli->query($sql) === TRUE) {
        echo "Record updated successfully</br>";
        echo "SQL: " . $sql . "</br>";
    } else {
        echo "Error: " . $sql . "</br>" . $mysqli->error;
    };

    $mysqli->close();
?>