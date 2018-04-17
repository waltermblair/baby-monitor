<?php
include 'dbconnect.php';

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");

    $sql = "SELECT * FROM activities";

    if ($result = $mysqli->query($sql)) {
        $arr = [];
        while($row = $result->fetch_assoc()) {
            $arr[]=$row;
        }
        echo json_encode($arr);
    } else {
        echo "Errno: " . $mysqli->errno . "</br>";
            echo "Error: " . $mysqli->error . "</br>";

            exit;
    }

    $mysqli->close();
?>