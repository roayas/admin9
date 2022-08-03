<?php

include_once 'connection.php';

$sql="SELECT COUNT(*) FROM `products`;";
// $sql2="SELECT COUNT(*) FROM `users`;";
// $sql3="SELECT COUNT(*) FROM `comments`;";

$result=mysqli_query($con,$sql);
// $result2=mysqli_query($con,$sql2);
// $result3=mysqli_query($con,$sql2);

if(!$result){
    http_response_code(404);
    die(mysqli_error($con));
}
// mysqli_num_rows($result);
// mysqli_num_rows($result2);
// mysqli_num_rows($result3);
// echo $result;
echo "[";
for($i=0;$i<mysqli_num_rows($result);$i++){
  echo($i>0?',':'').json_encode(mysqli_fetch_object($result));
}
echo "]";


 ?>