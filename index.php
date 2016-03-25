<?php
    session_start();
?>

<!DOCTYPE html>
<html>

<head>

    <title>Project Safe Flight</title>
    <script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
    <script type="text/javascript" src="PSFIST.js"></script>
    <link rel="stylesheet" href="stylesheet.css" />

</head>
    
<body>
    
    <form action="db_connection.php" method="post">
    
        
        
        <div id="survey_info" class="form_page">
            Survey info
            
            <fieldset id="survey_info_container">
                <label for="name">Volunteer Name</label>
                <input type="text" id="name" name="name" class="form_field" autofocus />

                <label for="route_select">Route</label>
                <select id="route_select" name="route" class="form_field">
                    <option class="route" value="unchanged" disabled selected>Select route</option>
                    <option class="route" value="brooklyn_public_library_and_richard_meier_building" data-sites="2">Brooklyn Public Library &amp; Richard Meier Building</option>
                    <option class="route" value="bryant_park" data-sites="4">Bryant Park</option>
                    <option class="route" value="columbia_university" data-sites="2">Columbia University</option>
                    <option class="route" value="exxon" data-sites="4">Exxon - 1251 6th Avenue</option>
                    <option class="route" value="ford_foundation_building" data-sites="3">Ford Foundation Building</option>
                    <option class="route" value="javits" data-sites="8">Javits</option>
                    <option class="route" value="lic_court_square" data-sites="7">LIC - Court Square</option>
                    <option class="route" value="metropolitan_museum_of_art" data-sites="7">Metropolitan Museum of Art</option>
                    <option class="route" value="freedom_tower" data-sites="4">Freedom Tower</option>
                    <option class="route" value="goldman_sachs" data-sites="3">Goldman Sachs - 200 West Street</option>
                    <option class="route" value="wfc_brookfield_place" data-sites="18">WFC - Brookfield Place</option>
                </select>
            </fieldset>
        </div>
        
        
        <div id="site_info" class="form_page">
            Site info
            
            <fieldset id="site_info_container"></fieldset>
            
        </div>
    
        <div id="summary" class="form_page">
            Summary
            
            <input type="submit" value="Submit" />
        </div>
    
    </form>
    

    <div id="credit">Created for NYC Audubon by Darren Klein, 2015/2016</div>
</body>
    
</html>