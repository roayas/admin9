<?php
include_once "./connection.php";

$id=$_REQUEST["id"];

$sql = "DELETE FROM comments where id='$id'"; 

mysqli_query($con, $sql);

$con=null;
?>