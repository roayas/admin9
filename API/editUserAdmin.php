<?php
include_once "./connection.php";

$id = $_REQUEST['id']; 
$username=$_REQUEST["username"];
$email=$_REQUEST["email"];
$password=$_REQUEST["password"];
$address=$_REQUEST["address"];
$phone=$_REQUEST["phone"];

$sql="UPDATE users SET username = '$username', email= '$email', password = '$password', phone = '$phone', address = '$address'  WHERE user_id='$id';";


mysqli_query($con,$sql);

?>