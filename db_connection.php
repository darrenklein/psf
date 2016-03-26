<?php

require '../credentials.php';
$servername = "localhost";
$dbname = "Project_Safe_Flight";
$target_dir = "uploads/";

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = '';

//SURVEY INFO
$name = $_POST['name'];
$route = $_POST['route'];

//SITE INFO
$site_array = $_POST['site'];

foreach($site_array as $siteNumber => $value){
    
    $species_array[$siteNumber] = $_POST['species'.$siteNumber.''];
    $deadinjured_array[$siteNumber] = $_POST['deadinjured'.$siteNumber.''];
    $image_array[$siteNumber] = $_FILES['image'.$siteNumber.'']['tmp_name'];
    
    
    
    foreach($species_array[$siteNumber] as $key => $species){
        
        if($image_array[$siteNumber][$key]){
            $target_file = ($target_dir . rand(1, 9999999) . strtolower(basename($image_array[$siteNumber][$key])));
            
            if(move_uploaded_file($image_array[$siteNumber][$key], $target_file)){
                $image_url = $target_file;
            }
            
        };        

       
        $deadinjured = $deadinjured_array[$siteNumber][$key];
        
        $sql .= "INSERT INTO PSFIST (volunteer, route, site, species, deadinjured, image_url)
        VALUES ('$name', '$route', '$siteNumber', '$species', '$deadinjured', '$image_url');";
        
        
    };
};



if ($conn->multi_query($sql) === TRUE) {
    echo "MySQL thanks you";
    $conn->close();
};


?>