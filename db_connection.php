<?php

$honey = $_POST['honey'];
$honey = (string)$honey;
$honeyLength = strlen($honey);
    	
if($honeyLength > 0){
     header("Location:confirmation.html");
}

else{

    $servername = "localhost";
    $username = "***";
    $password = "***";
    $dbname = "***";
    $target_dir = "uploads/";
    
    $fileTypeErrorMessage = "One of your images is not in the correct format - only jpg, jpeg, png, gif, tif, & tiff files are allowed. ";
    $fileSizeErrorMessage = "Total attachments cannot exceed 48Mb. ";
    $returnErrorMessage = "Please return to the form and try again. ";

    $conn = new mysqli($servername, $username, $password, $dbname);

    $sql = '';

    //SURVEY INFO
    $name = $conn->real_escape_string($_POST['name']);
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
    
    $totalFileSize = 0;

    foreach($site_array as $siteNumber => $value){
        
        $siteNumber = $conn->real_escape_string($siteNumber);

        if(isset($_POST['nonenotes'.$siteNumber.''])){
            $noneNotes = $conn->real_escape_string($_POST['nonenotes'.$siteNumber.'']);
            $siteImage = $conn->real_escape_string($_FILES['siteimage'.$siteNumber.'']['name']);

            if(empty($noneNotes)){
                $noneNotes = NULL;
            }
            
            if(empty($siteImage)){
                $image_url = NULL;   
            }
            else{
                $target_file = ($target_dir . rand(1, 9999999) . strtolower(basename($siteImage)));
                $target_file = str_replace(" ", "", $target_file);
                $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
                $totalFileSize += filesize($_FILES['siteimage'.$siteNumber.'']['tmp_name']);
                $uploadOk = 1;
                
                if($imageFileType != "jpg" && $imageFileType != "jpeg" && $imageFileType != "png" && $imageFileType != "gif" && $imageFileType != "tif" && $imageFileType != "tiff") {
                    echo $fileTypeErrorMessage;
                    $uploadOk = 0;
                };
                
                if($totalFileSize > 48000000){
                    echo $fileSizeErrorMessage;
                    $uploadOk = 0;
                };
                
                if($uploadOk == 0){
                    echo $returnErrorMessage;
                    die();
                }
                else{
                    if(file_exists($target_file)){
                        $target_file = ($target_dir . rand(1, 9999999) . strtolower(basename($siteImage)));
                        $target_file = str_replace(" ", "", $target_file);
                    };
                    
                    if(move_uploaded_file($_FILES['siteimage'.$siteNumber.'']['tmp_name'], $target_file)){
                        $image_url = 'https://www.d-bird.org/psf/' . $target_file;
                    };
                };
            };

            $sql .= "INSERT INTO PSFIST (volunteer, date, start_time, duration, weather, route, site, species, deadinjured, sex, age, action, notes, image_url)
            VALUES ('$name', '$date', '$startTime','$duration', '$weather','$route', '$siteNumber', 'none', NULL, NULL, NULL, NULL, '$noneNotes' ,'$image_url');";
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
                
                if(empty($notes)){
                    $notes = NULL;
                }

                if($image_array[$siteNumber][$key]){
                    $target_file = ($target_dir . rand(1, 9999999) . strtolower(basename($image_array[$siteNumber][$key])));
                    $target_file = str_replace(" ", "", $target_file);
                    $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
                    $totalFileSize += filesize($_FILES['image'.$siteNumber.'']['tmp_name'][$key]);
                    $uploadOk = 1;
                    
                    if($imageFileType != "jpg" && $imageFileType != "jpeg" && $imageFileType != "png" && $imageFileType != "gif" && $imageFileType != "tif" && $imageFileType != "tiff"){
                        echo $fileTypeErrorMessage;
                        $uploadOk = 0;
                    };
                    
                    if($totalFileSize > 48000000){
                        echo $fileSizeErrorMessage;
                        $uploadOk = 0;
                    };
                
                    if($uploadOk == 0){
                        echo $returnErrorMessage;
                        die();
                    }
                    else{
                        if (file_exists($target_file)){
                            $target_file = ($target_dir . rand(1, 9999999) . strtolower(basename($image_array[$siteNumber][$key])));
                            $target_file = str_replace(" ", "", $target_file);
                        };
                        
                        if(move_uploaded_file($_FILES['image'.$siteNumber.'']['tmp_name'][$key], $target_file)){
                            $target_file = $conn->real_escape_string($target_file);
                            $image_url = 'https://www.d-bird.org/psf/' . $target_file;
                        };
                    };
                }
                else{
                    $image_url = NULL;
                };

                $sql .= "INSERT INTO PSFIST (volunteer, date, start_time, duration, weather, route, site, species, deadinjured, sex, age, action, notes, image_url)
                VALUES ('$name', '$date','$startTime', '$duration', '$weather','$route', '$siteNumber', '$species', '$deadinjured', '$sex', '$age', '$action', '$notes', '$image_url');";

            };
        };
    };



    if($conn->multi_query($sql) === TRUE) {
        $conn->close();
        header("Location:confirmation.html");
    }
    else{
        echo "There seems to have been an error - please contact the Project Safe Flight administrator."; 
        die();
    }
    
};

?>