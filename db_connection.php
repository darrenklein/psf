<?php

$honey = $_POST['honey'];
$honey = (string)$honey;
$honeyLength = strlen($honey);
    	
if($honeyLength > 0){
     header("Location:confirmation.html");
}

else{

    require '../credentials.php';
    $servername = "localhost";
    $dbname = "Project_Safe_Flight";
    $target_dir = "uploads/";

    $conn = new mysqli($servername, $username, $password, $dbname);

    $sql = '';

    //SURVEY INFO
    $name = $city = $conn->real_escape_string($_POST['name']);
    $date = $conn->real_escape_string($_POST['date']);
    $hour = $conn->real_escape_string($_POST['hour']);
    $minute = $conn->real_escape_string($_POST['minute']);
    $ampm = $conn->real_escape_string($_POST['ampm']);
    $startTime = $hour.":".$minute.$ampm;
    $duration = $conn->real_escape_string($_POST['duration']);
    $weather = $conn->real_escape_string($_POST['weather']);
    $route = $conn->real_escape_string($_POST['route']);

    //SITE INFO
    $site_array = $_POST['site'];

    foreach($site_array as $siteNumber => $value){
        
        $siteNumber = $conn->real_escape_string($siteNumber);

        if(isset($_POST['nonenotes'.$siteNumber.''])){
            $noneNotes = $conn->real_escape_string($_POST['nonenotes'.$siteNumber.'']);
            $siteImage = $conn->real_escape_string($_FILES['siteimage'.$siteNumber.'']['name']);

            if(empty($noneNotes)){
                $noneNotes = "NULL";
            }
            
            if(empty($siteImage)){
                $image_url = "NULL";   
            }
            else{
                $target_file = ($target_dir . rand(1, 9999999) . strtolower(basename($siteImage)));
                $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
                $uploadOk = 1;
                
                if($imageFileType != "jpg" && $imageFileType != "jpeg" && $imageFileType != "png" && $imageFileType != "gif" && $imageFileType != "tif" && $imageFileType != "tiff") {
                    echo "Sorry, only JPG, JPEG, PNG, GIF, TIF, & TIFF files are allowed. Please return to the form and try again.";
                    $uploadOk = 0;
                };
                
                if($uploadOk == 0){
                    $conn->close();
                    echo "Sorry, there was a problem.";
                }
                else{
                    if(move_uploaded_file($_FILES['siteimage'.$siteNumber.'']['tmp_name'], $target_file)){
                        $image_url = $target_file;
                    };
                };
            };

            /*if(isset($siteImage)){
                $target_file = ($target_dir . rand(1, 9999999) . strtolower(basename($siteImage)));

                if(move_uploaded_file($siteImage, $target_file)){
                    $image_url = $target_file;
                }
                else{
                    $image_url = "NULL";
                };
            }*/

            $sql .= "INSERT INTO PSFIST (volunteer, date, start_time, duration, weather, route, site, species, deadinjured, sex, age, action, notes, image_url)
            VALUES ('$name', '$date', '$startTime','$duration', '$weather','$route', '$siteNumber', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', '$noneNotes' ,'$image_url');";
        }
        else{
            $species_array[$siteNumber] = $_POST['species'.$siteNumber.''];
            $deadinjured_array[$siteNumber] = $_POST['deadinjured'.$siteNumber.''];
            $sex_array[$siteNumber] = $_POST['sex'.$siteNumber.''];
            $age_array[$siteNumber] = $_POST['age'.$siteNumber.''];
            $action_array[$siteNumber] = $_POST['action'.$siteNumber.''];
            $notes_array[$siteNumber] = $_POST['notes'.$siteNumber.''];
            $image_array[$siteNumber] = $_FILES['image'.$siteNumber.'']['name'];

            foreach($species_array[$siteNumber] as $key => $species){

                $deadinjured = $conn->real_escape_string($deadinjured_array[$siteNumber][$key]);
                $sex = $conn->real_escape_string($sex_array[$siteNumber][$key]);
                $age = $conn->real_escape_string($age_array[$siteNumber][$key]);
                $action = $conn->real_escape_string($action_array[$siteNumber][$key]);
                $notes = $conn->real_escape_string($notes_array[$siteNumber][$key]);

                if($image_array[$siteNumber][$key]){
                    $target_file = ($target_dir . rand(1, 9999999) . strtolower(basename($image_array[$siteNumber][$key])));

                    if(move_uploaded_file($_FILES['image'.$siteNumber.'']['tmp_name'][$key], $target_file)){
                        $image_url = $conn->real_escape_string($target_file);
                    }
                }
                else{
                    $image_url = "NULL";
                };

                $sql .= "INSERT INTO PSFIST (volunteer, date, start_time, duration, weather, route, site, species, deadinjured, sex, age, action, notes, image_url)
                VALUES ('$name', '$date','$startTime', '$duration', '$weather','$route', '$siteNumber', '$species', '$deadinjured', '$sex', '$age', '$action', '$notes', '$image_url');";

            };
        };
    };



    if ($conn->multi_query($sql) === TRUE) {
        $conn->close();
        header("Location:confirmation.html");
    };
    
};

?>