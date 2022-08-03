<?php
include_once "./connection.php";

$id = $_REQUEST['id'];    // whrer id 
$first = $_REQUEST["firstname"];
$last = $_REQUEST["lastname"];
$email= $_REQUEST["email"];
$phone= $_REQUEST["phone"];
$address= $_REQUEST["address"];
$password= $_REQUEST["password"];


$sql="UPDATE users SET firstname='$first', lastname='$last', email='$email', phone='$phone', address='$address', password='$password'  WHERE user_id='$id';";

mysqli_query($con,$sql);
?>
