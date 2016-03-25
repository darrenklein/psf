<?php

require '../credentials.php';
$servername = "localhost";
$dbname = "Project_Safe_Flight";

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = '';


$name = $_POST['name'];
$route = $_POST['route'];

$site_array = $_POST['site'];

foreach($site_array as $siteNumber => $value){
    
    $species_array[$siteNumber] = $_POST['species'.$siteNumber.''];
    $deadinjured_array[$siteNumber] = $_POST['deadinjured'.$siteNumber.''];
    
    foreach($species_array[$siteNumber] as $key => $species){
        
        $deadinjured = $deadinjured_array[$siteNumber][$key];
        
        $sql .= "INSERT INTO PSFIST (volunteer, route, site, species, deadinjured)
        VALUES ('$name', '$route', '$siteNumber', '$species', '$deadinjured');";
    };
};

if ($conn->multi_query($sql) === TRUE) {
    echo "MySQL thanks you";
    $conn->close();
};


?>