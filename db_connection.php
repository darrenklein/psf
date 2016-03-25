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
    
    $species[$siteNumber] = $_POST['species'.$siteNumber.''];
    
    foreach($species[$siteNumber] as $key => $value){
        $sql .= "INSERT INTO PSFIST (volunteer, route, site, species)
        VALUES ('$name', '$route', '$siteNumber', '$value');";
    };
};

if ($conn->multi_query($sql) === TRUE) {
    echo "MySQL thanks you";
    $conn->close();
};


?>