<?php

require '../credentials.php';
$servername = "localhost";
$dbname = "Project_Safe_Flight";
$target_dir = "uploads/";

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = '';

//SURVEY INFO
$name = $_POST['name'];
$date = $_POST['date'];
$duration = $_POST['duration'];
$weather = $_POST['weather'];
$route = $_POST['route'];

//SITE INFO
$site_array = $_POST['site'];

foreach($site_array as $siteNumber => $value){
    
    if(isset($_POST['nonenotes'.$siteNumber.''])){
        $noneNotes = $_POST['nonenotes'.$siteNumber.''];
        $siteImage = $_FILES['siteimage'.$siteNumber.'']['tmp_name'];
        
        if($noneNotes == ''){
            $noneNotes = "NULL";
        }
        
        if(isset($siteImage)){
            $target_file = ($target_dir . rand(1, 9999999) . strtolower(basename($siteImage)));

            if(move_uploaded_file($siteImage, $target_file)){
                $image_url = $target_file;
            }
            else{
                $image_url = "NULL";
            };
        }
        
        $sql .= "INSERT INTO PSFIST (volunteer, date, duration, weather, route, site, species, deadinjured, notes, image_url)
        VALUES ('$name', '$date','$duration', '$weather','$route', '$siteNumber', 'NULL', 'NULL', '$noneNotes' ,'$image_url');";
    }
    else{
        $species_array[$siteNumber] = $_POST['species'.$siteNumber.''];
        $deadinjured_array[$siteNumber] = $_POST['deadinjured'.$siteNumber.''];
        $notes_array[$siteNumber] = $_POST['notes'.$siteNumber.''];
        $image_array[$siteNumber] = $_FILES['image'.$siteNumber.'']['tmp_name'];

        foreach($species_array[$siteNumber] as $key => $species){

            $deadinjured = $deadinjured_array[$siteNumber][$key];
            $notes = $notes_array[$siteNumber][$key];

            if($image_array[$siteNumber][$key]){
                $target_file = ($target_dir . rand(1, 9999999) . strtolower(basename($image_array[$siteNumber][$key])));

                if(move_uploaded_file($image_array[$siteNumber][$key], $target_file)){
                    $image_url = $target_file;
                }
            }
            else{
                $image_url = "NULL";
            };

            $sql .= "INSERT INTO PSFIST (volunteer, date, duration, weather, route, site, species, deadinjured, notes, image_url)
            VALUES ('$name', '$date','$duration', '$weather','$route', '$siteNumber', '$species', '$deadinjured', '$notes' ,'$image_url');";

        };
    };
};



if ($conn->multi_query($sql) === TRUE) {
    echo "MySQL thanks you";
    $conn->close();
};


?>