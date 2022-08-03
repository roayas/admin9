<?php
include_once "./connection.php";

$username=$_REQUEST["username"];

$email=$_REQUEST["email"];
$phone=$_REQUEST["phone"];
$password=$_REQUEST["password"];
$address=$_REQUEST["address"];


$sql="INSERT INTO users (username,  email, phone, password, address) 
                   VALUES ('$username','$email','$phone','$password','$address')";

mysqli_query($con,$sql);
?>