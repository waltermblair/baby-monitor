<?php
include 'dbconnect.php';

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata, TRUE);
    $description = mysqli_real_escape_string($mysqli, $request["description"]);
    $time = mysqli_real_escape_string($mysqli, $request["time"]);
    echo "</br>";

    $sql = "INSERT INTO activities (description, time)
        VALUES ('$description', '$time')";

    if(!empty($request) && $mysqli->query($sql) === TRUE) {
        echo "New record created successfully</br>";
        echo "SQL: " . $sql . "</br>";
    } else {
        echo "Error: " . $sql . "</br>" . $mysqli->error;
    };

    $mysqli->close();
?>