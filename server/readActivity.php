<?php
include 'dbconnect.php';

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata, TRUE);
    $activityId = mysqli_real_escape_string($mysqli, $_REQUEST["activityId"]);

    $sql = "SELECT * FROM activities WHERE id='$activityId'";

    if ($result = $mysqli->query($sql)) {
        $arr = [];
        while($row = $result->fetch_assoc()) {
            $arr[]=$row;
        }
        echo json_encode($arr[0]);
    } else {
        echo "Errno: " . $mysqli->errno . "</br>";
            echo "Error: " . $mysqli->error . "</br>";

            exit;
    }

    $mysqli->close();
?>