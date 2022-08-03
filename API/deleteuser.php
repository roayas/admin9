<?php
include_once "./connection.php";

$id=$_REQUEST["id"];

$sql = "DELETE FROM users where user_id='$id'"; 

mysqli_query($con, $sql);

$con=null;
?>