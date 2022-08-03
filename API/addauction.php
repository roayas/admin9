<?php
include_once "./connection.php";

$name=$_REQUEST["name"];
$des=$_REQUEST["des"];
$img=$_REQUEST["img"];
$price=$_REQUEST["price"];
$start=$_REQUEST["start"];
$end=$_REQUEST["end"];

$sql="INSERT INTO products (name, description, img, min_price, start_date, end_date) VALUES ('$name','$des','$img','$price','$start','$end')";

mysqli_query($con,$sql);
?>