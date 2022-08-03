
<?php
include_once "./connection.php";

if(isset($_POST['name'])){
    $files=$_FILES['picture'];
    // $owner_id=mysqli_real_escape_string($conn,$_POST['owner_id']);
   
    $filename=$files['name'];
    $templocation=$files['tmp_name'];
    $uploaderrors=$files['error'];

    $splitedname = explode('.',$filename);
    $fileextension = strtolower(end($splitedname)) ;

    $allowed_extentions=['png','jpg','jpeg',];
    
    if(in_array($fileextension,$allowed_extentions)){

        if($uploaderrors===0){

    $new_file_name=uniqid().'.'.$fileextension;

// ==================================================================================
        $file_destination='../public/img/'.$new_file_name;
// ==================================================================================
            if(move_uploaded_file($templocation,$file_destination)){
                $connection="INSERT INTO products (img )VALUES('$new_file_name')";
                if(mysqli_query($conn,$connection)){
                    echo ' success';
                }else{
                    echo 'not success';
                }
            }else{
                echo 'coule not upload the image';
            }
        }else{
            echo 'There was an error in upload ';
        }

    }else{
        echo'Files with this extension not allowed ';
        
    }


}


if(isset($_POST['fetch'])){
    echo 'posted';
$query='SELECT * FROM project9';
$resuslt = mysqli_query($conn,$query);
$perfumes= mysqli_fetch_all($resuslt, MYSQLI_ASSOC);
echo json_encode($perfumes);

}





?>