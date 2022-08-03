<?php
include_once "./connection.php";

$id=$_REQUEST["id"];

$sql = "DELETE from products where id='$id'"; 

mysqli_query($con, $sql);

$con=null;
?>