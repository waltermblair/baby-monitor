<?php
$mysqli = mysqli_connect('localhost', 'root', '', 'baby_monitor');
if ($mysqli->connect_errno) {
    echo "Error: Failed to make a MySQL connection, here is why: </br>";
    echo "Errno: " . $mysqli->connect_errno . "</br>";
    echo "Error: " . $mysqli->connect_error . "</br>";

    exit;
}
?>