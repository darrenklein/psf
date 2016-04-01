/*
$(document).ready(function(){
    
    $("#date").datepicker({maxDate: "+0D", dateFormat: "yy-mm-dd"});
    
    
    var hourList = '<option disabled selected>Hour</option>';
    for (h = 1; h <= 12; h++){
        if (h < 10){
            h = "0" + h
        };
        hourList += '<option value='+h+'>'+h+'</option>';
    };
    $('#hour').append(hourList);
    
    var minuteList = '<option disabled selected>Min</option>';
    for (m = 0; m <= 59; m++){
        if (m < 10){
            m = "0" + m
        };
        minuteList += '<option value='+m+'>'+m+'</option>';
    };
    $('#minute').append(minuteList);
    
    
    var durationList = '<option disabled selected>Select duration</option>';
    for (d = 5; d <= 120; d+=5){
        durationList += '<option value='+d+'>'+d+'</option>';
    };
    $('#duration').append(durationList);
    
    
    var birdCounter = '<option value="0">None</option>';
    for (x = 1; x <= 20; x++){
        birdCounter += '<option value='+x+'>'+x+'</option>';
    };
    
    
    var speciesList = "<option value='unchanged' disabled selected>Select species</option><option value='unknown'>unknown</option><option value='other'>other (describe in 'Notes')</option><option value='bat sp.'>bat sp.</option><option value='flycatcher sp.'>flycatcher sp.</option><option value='gull sp.'>gull sp.</option><option value='kinglet sp.'>kinglet sp.</option><option value='owl sp.'>owl sp.</option><option value='sparrow sp.'>sparrow sp.</option><option value='thrush sp.'>thrush sp.</option><option value='warbler sp.'>warbler sp.</option><option value='woodpecker sp.'>woodpecker sp.</option><option value='wren sp.'>wren sp.</option><option value='Alder Flycatcher'>Alder Flycatcher</option><option value='American Black Duck'>American Black Duck</option><option value='American Coot'>American Coot</option><option value='American Goldfinch'>American Goldfinch</option><option value='American Kestrel'>American Kestrel</option><option value='American Redstart'>American Redstart</option><option value='American Robin'>American Robin</option><option value='American Woodcock'>American Woodcock</option><option value='Baltimore Oriole'>Baltimore Oriole</option><option value='Barn Swallow'>Barn Swallow</option><option value='Bay-Breasted Warbler'>Bay-Breasted Warbler</option><option value='Belted Kingfisher'>Belted Kingfisher</option><option value='Black-and-white Warbler'>Black-and-white Warbler</option><option value='Black-billed Cuckoo'>Black-billed Cuckoo</option><option value='Black-capped Chickadee'>Black-capped Chickadee</option><option value='Blackpoll Warbler'>Blackpoll Warbler</option><option value='Black-throated Blue Warbler'>Black-throated Blue Warbler</option><option value='Black-throated Green Warbler'>Black-throated Green Warbler</option><option value='Blue Jay'>Blue Jay</option><option value='Blue-headed Vireo'>Blue-headed Vireo</option><option value='Blue-winged Warbler'>Blue-winged Warbler</option><option value='Brown Creeper'>Brown Creeper</option><option value='Brown Thrasher'>Brown Thrasher</option><option value='Brown-headed Cowbird'>Brown-headed Cowbird</option><option value='Canada Warbler'>Canada Warbler</option><option value='Cape May Warbler'>Cape May Warbler</option><option value='Cedar Waxwing'>Cedar Waxwing</option><option value='Chestnut-sided Warbler'>Chestnut-sided Warbler</option><option value='Chipping Sparrow'>Chipping Sparrow</option><option value='Chuck-wills-widow'>Chuck-will's-widow</option><option value='Clapper Rail'>Clapper Rail</option><option value='Common Grackle'>Common Grackle</option><option value='Common Yellowthroat'>Common Yellowthroat</option><option value='Connecticut Warbler'>Connecticut Warbler</option><option value='Dark-eyed Junco'>Dark-eyed Junco</option><option value='Downy Woodpecker'>Downy Woodpecker</option><option value='Eastern Bluebird'>Eastern Bluebird</option><option value='Eastern Kingbird'>Eastern Kingbird</option><option value='Eastern Phoebe'>Eastern Phoebe</option><option value='Eastern Towhee'>Eastern Towhee</option><option value='Eastern Wood-pewee'>Eastern Wood-pewee</option><option value='European Starling'>European Starling</option><option value='Field Sparrow'>Field Sparrow</option><option value='Fox Sparrow'>Fox Sparrow</option><option value='Golden-crowned Kinglet'>Golden-crowned Kinglet</option><option value='Gray Catbird'>Gray Catbird</option><option value='Gray-cheeked Thrush'>Gray-cheeked Thrush</option><option value='Great Crested Flycatcher'>Great Crested Flycatcher</option><option value='Hermit Thrush'>Hermit Thrush</option><option value='Hooded Warbler'>Hooded Warbler</option><option value='House Finch'>House Finch</option><option value='House Sparrow'>House Sparrow</option><option value='House Wren'>House Wren</option><option value='Indigo Bunting'>Indigo Bunting</option><option value='Kentucky Warbler'>Kentucky Warbler</option><option value='Lazuli Bunting'>Lazuli Bunting</option><option value='Least Flycatcher'>Least Flycatcher</option><option value='Lincolns Sparrow'>Lincoln's Sparrow</option><option value='Louisiana Waterthrush'>Louisiana Waterthrush</option><option value='Magnolia Warbler'>Magnolia Warbler</option><option value='Marsh Wren'>Marsh Wren</option><option value='Mourning Dove'>Mourning Dove</option><option value='Mourning Warbler'>Mourning Warbler</option><option value='Northern Cardinal'>Northern Cardinal</option><option value='Northern Flicker'>Northern Flicker</option><option value='Northern Mockingbird'>Northern Mockingbird</option><option value='Northern Parula'>Northern Parula</option><option value='Northern Waterthrush'>Northern Waterthrush</option><option value='Olive-sided Flycatcher'>Olive-sided Flycatcher</option><option value='Orchard Oriole'>Orchard Oriole</option><option value='Osprey'>Osprey</option><option value='Ovenbird'>Ovenbird</option><option value='Palm Warbler'>Palm Warbler</option><option value='Peregrine Falcon'>Peregrine Falcon</option><option value='Pine Warbler'>Pine Warbler</option><option value='Prairie Warbler'>Prairie Warbler</option><option value='Prothonotary Warbler'>Prothonotary Warbler</option><option value='Purple Finch'>Purple Finch</option><option value='Red-headed Woodpecker'>Red-headed Woodpecker</option><option value='Red-bellied Woodpecker'>Red-bellied Woodpecker</option><option value='Red-breasted Nuthatch'>Red-breasted Nuthatch</option><option value='Red-eyed Vireo'>Red-eyed Vireo</option><option value='Red-tailed Hawk'>Red-tailed Hawk</option><option value='Rock Pigeon'>Rock Pigeon</option><option value='Rose-breasted Grosbeak'>Rose-breasted Grosbeak</option><option value='Ruby-crowned Kinglet'>Ruby-crowned Kinglet</option><option value='Ruby-throated Hummingbird'>Ruby-throated Hummingbird</option><option value='Savannah Sparrow'>Savannah Sparrow</option><option value='Scarlet Tanager'>Scarlet Tanager</option><option value='Seaside Sparrow'>Seaside Sparrow</option><option value='Song Sparrow'>Song Sparrow</option><option value='Sora'>Sora</option><option value='Swainsons Thrush'>Swainson's Thrush</option><option value='Swamp Sparrow'>Swamp Sparrow</option><option value='Tennessee Warbler'>Tennessee Warbler</option><option value='Tufted Titmouse'>Tufted Titmouse</option><option value='Veery'>Veery</option><option value='Virginia Rail'>Virginia Rail</option><option value='White-breasted Nuthatch'>White-breasted Nuthatch</option><option value='White-crowned Sparrow'>White-crowned Sparrow</option><option value='White-eyed Vireo'>White-eyed Vireo</option><option value='White-throated Sparrow'>White-throated Sparrow</option><option value='Willow Flycatcher'>Willow Flycatcher</option><option value='Wilsons Warbler'>Wilson's Warbler</option><option value='Winter Wren'>Winter Wren</option><option value='Wood Thrush'>Wood Thrush</option><option value='Worm-eating Warbler'>Worm-eating Warbler</option><option value='Yellow Warbler'>Yellow Warbler</option><option value='Yellow-bellied Flycatcher'>Yellow-bellied Flycatcher</option><option value='Yellow-bellied Sapsucker'>Yellow-bellied Sapsucker</option><option value='Yellow-billed Cuckoo'>Yellow-billed Cuckoo</option><option value='Yellow-breasted Chat'>Yellow-breasted Chat</option><option value='Yellow-rumped Warbler'>Yellow-rumped Warbler</option><option value='Yellow-throated Vireo'>Yellow-throated Vireo</option>";


    
    
    
    
    
    

    
    
    $("#route_select").change(function(){
        $("#site_info_container").empty();
        
        siteCount = $(this.options[this.selectedIndex]).attr('data-sites');
        
        for(i = 1; i <= siteCount; i++){
            $("#site_info_container").append("<div class='individual_site_container' id='site"+i+"' data-site_number='"+i+"'><select class='number_select' name='site["+i+"]'>"+birdCounter+"</select><div id='nonecontainer"+i+"'><label for='nonenotes"+i+"'>Notes</label><input type='text' id='nonenotes"+i+"' name='nonenotes"+i+"' /><label for='siteimage"+i+"'>Attach an image</label><input type='file' id='siteimage"+i+"' name='siteimage"+i+"' /></div></div>");
        };
        
        

        var siteNumber;
        this['initiated' + siteNumber];
        this['inputArray' + siteNumber];
        this['arrayLength' + siteNumber];
        
    
        $(".number_select").change(function(){
            
            numberFound = $(this).val();
            siteNumber = $(this).parent().attr('data-site_number');
            
            
            if(numberFound === "0"){
                $("#site"+siteNumber+"").append("<div id='nonecontainer"+siteNumber+"'><label for='nonenotes"+siteNumber+"'>Notes</label><input type='text' id='nonenotes"+siteNumber+"' name='nonenotes"+siteNumber+"' /><label for='siteimage"+siteNumber+"'>Attach an image</label><input type='file' id='siteimage"+siteNumber+"' name='siteimage"+siteNumber+"' /></div>");
            };
            

            if(this['initiated' + siteNumber]){                
                if(this['arrayLength' + siteNumber] > numberFound){
                    for(z = this['arrayLength' + siteNumber]; z > numberFound; z--){
                        $("#birdcontainer"+siteNumber+""+z+"").remove();
                        this['inputArray' + siteNumber].pop();
                    };
                    this['arrayLength' + siteNumber] = this['inputArray' + siteNumber].length;
                }
                else{
                    $("#nonecontainer"+siteNumber+"").remove();
                    
                    elementsAdd = numberFound - this['arrayLength' + siteNumber];
                    
                    for(y = 1; y <= elementsAdd; y++){
                        x = this['arrayLength' + siteNumber] + y;
                        
                        newInput = ("<div id='birdcontainer"+siteNumber+""+x+"'><select name='species"+siteNumber+"["+x+"]'>"+speciesList+"</select><label for='dead"+siteNumber+""+x+"'>Dead</label><input type='radio' id='dead"+siteNumber+""+x+"' name='deadinjured"+siteNumber+"["+x+"]' value='dead' checked></input><label for='injured"+siteNumber+""+x+"'>Injured</label><input type='radio' id='injured"+siteNumber+""+x+"' name='deadinjured"+siteNumber+"["+x+"]' value='injured'><input type='text' name='notes"+siteNumber+"["+x+"]' /></input><label for='image"+siteNumber+""+x+"'>Attach an image</label><input type='file' id='image"+siteNumber+""+x+"' name='image"+siteNumber+"["+x+"]' /></div>");
                        
                        $(this).parent().append(newInput);
                        this['inputArray' + siteNumber].push(newInput);   
                    };
                    
                    this['arrayLength' + siteNumber] = this['inputArray' + siteNumber].length;
                };
            }
            else{
                
                $("#nonecontainer"+siteNumber+"").remove();
                
                this['initiated' + siteNumber] = true;
                this['inputArray' + siteNumber] = [];
            
                for(x = 1; x <= numberFound; x++){
                    this['inputArray' + siteNumber].push("<div id='birdcontainer"+siteNumber+""+x+"'><select name='species"+siteNumber+"["+x+"]'>"+speciesList+"</select><label for='dead"+siteNumber+""+x+"'>Dead</label><input type='radio' id='dead"+siteNumber+""+x+"' name='deadinjured"+siteNumber+"["+x+"]' value='dead' checked></input><label for='injured"+siteNumber+""+x+"'>Injured</label><input type='radio' id='injured"+siteNumber+""+x+"' name='deadinjured"+siteNumber+"["+x+"]' value='injured'><input type='text' name='notes"+siteNumber+"["+x+"]' /></input><label for='image"+siteNumber+""+x+"'>Attach an image</label><input type='file' id='image"+siteNumber+""+x+"' name='image"+siteNumber+"["+x+"]' /></div>");
                };
                
                this['arrayLength' + siteNumber] = this['inputArray' + siteNumber].length;
                $(this).parent().append(this['inputArray' + siteNumber]);
            };

        });

    });
 
});
*/













$(document).ready(function(){
    
    $("#date").datepicker({maxDate: "+0D", dateFormat: "yy-mm-dd"});
    
    //TIMEPICKER HOURS
    var hourList = '<option disabled selected>Hour</option>';
    for (h = 1; h <= 12; h++){
        if (h < 10){
            h = "0" + h
        };
        hourList += '<option value='+h+'>'+h+'</option>';
    };
    $('#hour').append(hourList);
    
    //TIMEPICKER MINUTES
    var minuteList = '<option disabled selected>Min</option>';
    for (m = 0; m <= 59; m++){
        if (m < 10){
            m = "0" + m
        };
        minuteList += '<option value='+m+'>'+m+'</option>';
    };
    $('#minute').append(minuteList);
    
    
    //FILLS DURATION SELECT
    var durationList = '<option disabled selected>Select duration</option>';
    for (d = 5; d <= 120; d+=5){
        durationList += '<option value='+d+'>'+d+'</option>';
    };
    $('#duration').append(durationList);
    
    
    //FILLS THE COUNTERS FOR EACH SITE
    var birdCounter = '<option value="0">None</option>';
    for (x = 1; x <= 20; x++){
        birdCounter += '<option value='+x+'>'+x+'</option>';
    };
    
    
    //SPECIES LIST
    var speciesList = "<option value='unchanged' disabled selected>Select species</option><option value='unknown'>unknown</option><option value='other'>other (describe in 'Notes')</option><option value='bat sp.'>bat sp.</option><option value='flycatcher sp.'>flycatcher sp.</option><option value='gull sp.'>gull sp.</option><option value='kinglet sp.'>kinglet sp.</option><option value='owl sp.'>owl sp.</option><option value='sparrow sp.'>sparrow sp.</option><option value='thrush sp.'>thrush sp.</option><option value='warbler sp.'>warbler sp.</option><option value='woodpecker sp.'>woodpecker sp.</option><option value='wren sp.'>wren sp.</option><option value='Alder Flycatcher'>Alder Flycatcher</option><option value='American Black Duck'>American Black Duck</option><option value='American Coot'>American Coot</option><option value='American Goldfinch'>American Goldfinch</option><option value='American Kestrel'>American Kestrel</option><option value='American Redstart'>American Redstart</option><option value='American Robin'>American Robin</option><option value='American Woodcock'>American Woodcock</option><option value='Baltimore Oriole'>Baltimore Oriole</option><option value='Barn Swallow'>Barn Swallow</option><option value='Bay-Breasted Warbler'>Bay-Breasted Warbler</option><option value='Belted Kingfisher'>Belted Kingfisher</option><option value='Black-and-white Warbler'>Black-and-white Warbler</option><option value='Black-billed Cuckoo'>Black-billed Cuckoo</option><option value='Black-capped Chickadee'>Black-capped Chickadee</option><option value='Blackpoll Warbler'>Blackpoll Warbler</option><option value='Black-throated Blue Warbler'>Black-throated Blue Warbler</option><option value='Black-throated Green Warbler'>Black-throated Green Warbler</option><option value='Blue Jay'>Blue Jay</option><option value='Blue-headed Vireo'>Blue-headed Vireo</option><option value='Blue-winged Warbler'>Blue-winged Warbler</option><option value='Brown Creeper'>Brown Creeper</option><option value='Brown Thrasher'>Brown Thrasher</option><option value='Brown-headed Cowbird'>Brown-headed Cowbird</option><option value='Canada Warbler'>Canada Warbler</option><option value='Cape May Warbler'>Cape May Warbler</option><option value='Cedar Waxwing'>Cedar Waxwing</option><option value='Chestnut-sided Warbler'>Chestnut-sided Warbler</option><option value='Chipping Sparrow'>Chipping Sparrow</option><option value='Chuck-wills-widow'>Chuck-will's-widow</option><option value='Clapper Rail'>Clapper Rail</option><option value='Common Grackle'>Common Grackle</option><option value='Common Yellowthroat'>Common Yellowthroat</option><option value='Connecticut Warbler'>Connecticut Warbler</option><option value='Dark-eyed Junco'>Dark-eyed Junco</option><option value='Downy Woodpecker'>Downy Woodpecker</option><option value='Eastern Bluebird'>Eastern Bluebird</option><option value='Eastern Kingbird'>Eastern Kingbird</option><option value='Eastern Phoebe'>Eastern Phoebe</option><option value='Eastern Towhee'>Eastern Towhee</option><option value='Eastern Wood-pewee'>Eastern Wood-pewee</option><option value='European Starling'>European Starling</option><option value='Field Sparrow'>Field Sparrow</option><option value='Fox Sparrow'>Fox Sparrow</option><option value='Golden-crowned Kinglet'>Golden-crowned Kinglet</option><option value='Gray Catbird'>Gray Catbird</option><option value='Gray-cheeked Thrush'>Gray-cheeked Thrush</option><option value='Great Crested Flycatcher'>Great Crested Flycatcher</option><option value='Hermit Thrush'>Hermit Thrush</option><option value='Hooded Warbler'>Hooded Warbler</option><option value='House Finch'>House Finch</option><option value='House Sparrow'>House Sparrow</option><option value='House Wren'>House Wren</option><option value='Indigo Bunting'>Indigo Bunting</option><option value='Kentucky Warbler'>Kentucky Warbler</option><option value='Lazuli Bunting'>Lazuli Bunting</option><option value='Least Flycatcher'>Least Flycatcher</option><option value='Lincolns Sparrow'>Lincoln's Sparrow</option><option value='Louisiana Waterthrush'>Louisiana Waterthrush</option><option value='Magnolia Warbler'>Magnolia Warbler</option><option value='Marsh Wren'>Marsh Wren</option><option value='Mourning Dove'>Mourning Dove</option><option value='Mourning Warbler'>Mourning Warbler</option><option value='Northern Cardinal'>Northern Cardinal</option><option value='Northern Flicker'>Northern Flicker</option><option value='Northern Mockingbird'>Northern Mockingbird</option><option value='Northern Parula'>Northern Parula</option><option value='Northern Waterthrush'>Northern Waterthrush</option><option value='Olive-sided Flycatcher'>Olive-sided Flycatcher</option><option value='Orchard Oriole'>Orchard Oriole</option><option value='Osprey'>Osprey</option><option value='Ovenbird'>Ovenbird</option><option value='Palm Warbler'>Palm Warbler</option><option value='Peregrine Falcon'>Peregrine Falcon</option><option value='Pine Warbler'>Pine Warbler</option><option value='Prairie Warbler'>Prairie Warbler</option><option value='Prothonotary Warbler'>Prothonotary Warbler</option><option value='Purple Finch'>Purple Finch</option><option value='Red-headed Woodpecker'>Red-headed Woodpecker</option><option value='Red-bellied Woodpecker'>Red-bellied Woodpecker</option><option value='Red-breasted Nuthatch'>Red-breasted Nuthatch</option><option value='Red-eyed Vireo'>Red-eyed Vireo</option><option value='Red-tailed Hawk'>Red-tailed Hawk</option><option value='Rock Pigeon'>Rock Pigeon</option><option value='Rose-breasted Grosbeak'>Rose-breasted Grosbeak</option><option value='Ruby-crowned Kinglet'>Ruby-crowned Kinglet</option><option value='Ruby-throated Hummingbird'>Ruby-throated Hummingbird</option><option value='Savannah Sparrow'>Savannah Sparrow</option><option value='Scarlet Tanager'>Scarlet Tanager</option><option value='Seaside Sparrow'>Seaside Sparrow</option><option value='Song Sparrow'>Song Sparrow</option><option value='Sora'>Sora</option><option value='Swainsons Thrush'>Swainson's Thrush</option><option value='Swamp Sparrow'>Swamp Sparrow</option><option value='Tennessee Warbler'>Tennessee Warbler</option><option value='Tufted Titmouse'>Tufted Titmouse</option><option value='Veery'>Veery</option><option value='Virginia Rail'>Virginia Rail</option><option value='White-breasted Nuthatch'>White-breasted Nuthatch</option><option value='White-crowned Sparrow'>White-crowned Sparrow</option><option value='White-eyed Vireo'>White-eyed Vireo</option><option value='White-throated Sparrow'>White-throated Sparrow</option><option value='Willow Flycatcher'>Willow Flycatcher</option><option value='Wilsons Warbler'>Wilson's Warbler</option><option value='Winter Wren'>Winter Wren</option><option value='Wood Thrush'>Wood Thrush</option><option value='Worm-eating Warbler'>Worm-eating Warbler</option><option value='Yellow Warbler'>Yellow Warbler</option><option value='Yellow-bellied Flycatcher'>Yellow-bellied Flycatcher</option><option value='Yellow-bellied Sapsucker'>Yellow-bellied Sapsucker</option><option value='Yellow-billed Cuckoo'>Yellow-billed Cuckoo</option><option value='Yellow-breasted Chat'>Yellow-breasted Chat</option><option value='Yellow-rumped Warbler'>Yellow-rumped Warbler</option><option value='Yellow-throated Vireo'>Yellow-throated Vireo</option>";
    
    var actionList = "<option disabled selected>Select action</option><option value='collected'>Collected</option><option value='no_change'>No change</option><option value='captured_and_released'>Captured and released</option><option value='transported_to_rehabber'>Transported to rehabber</option><option value='other'>Other (Describe in 'Notes')</option>";

    
    //CREATES THE BASIC SITE FIELDS - NO BIRDS FOUND AT SITE
    function noneContainer(siteNumber){
        return ("<div id='nonecontainer"+siteNumber+"'><div class='entry_field'><label for='nonenotes"+siteNumber+"'>Notes</label><input type='text' id='nonenotes"+siteNumber+"' name='nonenotes"+siteNumber+"' /></div><div class='entry_field'><label for='siteimage"+siteNumber+"'>Attach an image</label><input type='file' id='siteimage"+siteNumber+"' name='siteimage"+siteNumber+"' /></div></div>");  
    };
    
    
    
    
    //CREATE INPUT FIELDS FOR BIRDS FOUND
    function speciesInput(siteNumber, x){
        
       /* return ("<div id='birdcontainer"+siteNumber+""+x+"'><div class='entry_field'><label for='species"+siteNumber+""+x+"'>Select species</label><select id='species"+siteNumber+""+x+"' name='species"+siteNumber+"["+x+"]'>"+speciesList+"</select></div><div class='entry_field'><label for='dead"+siteNumber+""+x+"'>Dead</label><input type='radio' id='dead"+siteNumber+""+x+"' name='deadinjured"+siteNumber+"["+x+"]' value='dead' checked></input><label for='injured"+siteNumber+""+x+"'>Injured</label><input type='radio' id='injured"+siteNumber+""+x+"' name='deadinjured"+siteNumber+"["+x+"]' value='injured'></div><div class='entry_field'><label for='male"+siteNumber+""+x+"'>Male</label><input type='radio' id='male"+siteNumber+""+x+"' name='sex"+siteNumber+"["+x+"]' value='male'></input><label for='female"+siteNumber+""+x+"'>Female</label><input type='radio' id='female"+siteNumber+""+x+"' name='sex"+siteNumber+"["+x+"]' value='female'></input><label for='unknownSex"+siteNumber+""+x+"'>Unknown</label><input type='radio' id='unknownSex"+siteNumber+""+x+"' name='sex"+siteNumber+"["+x+"]' value='unknown' checked></input></div><div class='entry_field'><label for='adult"+siteNumber+""+x+"'>Adult</label><input type='radio' id='adult"+siteNumber+""+x+"' name='age"+siteNumber+"["+x+"]' value='adult'></input><label for='juvenile"+siteNumber+""+x+"'>Juvenile</label><input type='radio' id='juvenile"+siteNumber+""+x+"' name='age"+siteNumber+"["+x+"]' value='juvenile'></input><label for='unknownAge"+siteNumber+""+x+"'>Unknown</label><input type='radio' id='unknownAge"+siteNumber+""+x+"' name='age"+siteNumber+"["+x+"]' value='unknown' checked></input></div><div class='entry_field'><label for='action"+siteNumber+""+x+"'>Action</label><select id='action"+siteNumber+""+x+"' name='action"+siteNumber+"["+x+"]'><option disabled selected>Select action</option><option value='collected'>Collected</option><option value='no_change'>No change</option><option value='captured_and_released'>Captured and released</option><option value='transported_to_rehabber'>Transported to rehabber</option><option value='other'>Other (Describe in 'Notes')</option></select></div><div class='entry_field'><label for='notes"+siteNumber+""+x+"'>Notes</label><input type='text' id='notes"+siteNumber+""+x+"' name='notes"+siteNumber+"["+x+"]' /></input></div><div class='entry_field'><label for='image"+siteNumber+""+x+"'>Attach an image</label><input type='file' id='image"+siteNumber+""+x+"' name='image"+siteNumber+"["+x+"]' /><div id='clear"+siteNumber+""+x+"'>Remove image</div></div></div>");*/
        
        
        birdContainer = $("<div/>", {
                        id: 'birdcontainer'+siteNumber+''+x+''
                        });
        
        inputContainer = $("<div/>", {
                        class: 'entry_field'
                        });
        
        
            speciesContainer = inputContainer;
        
                speciesSelect = $("<select/>", {
                                text: 'Select',
                                id: 'species'+siteNumber+''+x+'',
                                name: 'species'+siteNumber+'['+x+']'
                                }).append(speciesList);
            
                speciesContainer.append(speciesSelect);
        
        
            deadInjuredContainer = inputContainer;

                dead = $("<input/>", {
                        type: 'radio',
                        id: 'dead'+siteNumber+''+x+'',
                        name: 'deadinjured'+siteNumber+'['+x+']',
                        value: 'dead',
                        checked: true
                        });

                injured = $("<input/>", {
                        type: 'radio',
                        id: 'injured'+siteNumber+''+x+'',
                        name: 'deadinjured'+siteNumber+'['+x+']',
                        value: 'injured'
                        });
        
                deadInjuredContainer.append(dead);
                deadInjuredContainer.append(injured);
        
        
            sexContainer = inputContainer;

                male = $("<input/>", {
                        type: 'radio',
                        id: 'male'+siteNumber+''+x+'',
                        name: 'sex'+siteNumber+'['+x+']',
                        value: 'male'
                        });

                female = $("<input/>", {
                        type: 'radio',
                        id: 'female'+siteNumber+''+x+'',
                        name: 'sex'+siteNumber+'['+x+']',
                        value: 'female'
                        });

                sexUnknown = $("<input/>", {
                        type: 'radio',
                        id: 'sexUnknown'+siteNumber+''+x+'',
                        name: 'sex'+siteNumber+'['+x+']',
                        value: 'unknown',
                        checked: true
                        });
        
                sexContainer.append(male);
                sexContainer.append(female);
                sexContainer.append(sexUnknown);
        
        
            ageContainer = inputContainer;

                adult = $("<input/>", {
                        type: 'radio',
                        id: 'adult'+siteNumber+''+x+'',
                        name: 'age'+siteNumber+'['+x+']',
                        value: 'adult'
                        });

                juvenile = $("<input/>", {
                        type: 'radio',
                        id: 'juvenile'+siteNumber+''+x+'',
                        name: 'age'+siteNumber+'['+x+']',
                        value: 'juvenile'
                        });

                ageUnknown = $("<input/>", {
                        type: 'radio',
                        id: 'ageUnknown'+siteNumber+''+x+'',
                        name: 'age'+siteNumber+'['+x+']',
                        value: 'unknown',
                        checked: true
                        });
        
                ageContainer.append(adult);
                ageContainer.append(juvenile);
                ageContainer.append(ageUnknown);
        
            
            actionContainer = inputContainer;

                actionSelect = $("<select/>", {
                                id: 'action'+siteNumber+''+x+'',
                                name: 'action'+siteNumber+'['+x+']'
                                }).append(actionList);

                actionContainer.append(actionSelect);
        

            notesContainer = inputContainer;
        
                notes = $("<input/>", {
                        type: 'text',
                        id: 'notes'+siteNumber+''+x+'',
                        name: 'notes'+siteNumber+'['+x+']'
                        });

                notesContainer.append(notes);
        
        
            imageContainer = inputContainer;

                image = $("<input/>", {
                        type: 'file',
                        id: 'image'+siteNumber+''+x+'',
                        name: 'image'+siteNumber+'['+x+']'
                        });

                clear = $("<div/>", {
                        html: 'Remove image',
                        id: 'clear'+siteNumber+''+x+'',
                        on: {
                                click: function(){
                                    file = $('#image'+siteNumber+''+x+'');
                                    file.replaceWith(file = file.clone(true));
                                }  
                            }
                        });
        
                imageContainer.append(image);
                imageContainer.append(clear);
        
        return birdContainer.append(speciesContainer).append(deadInjuredContainer).append(sexContainer).append(ageContainer).append(actionContainer).append(notesContainer).append(imageContainer);
        
    };
    
    

    
    
 
    
    //THE MAIN FUNCTION
    $(document).on("change", "#route_select", function(){
        $("#site_info_container").empty();
        
        siteCount = $(this.options[this.selectedIndex]).attr('data-sites');
        
        for(i = 1; i <= siteCount; i++){
            $("#site_info_container").append("<div class='individual_site_container' id='site"+i+"' data-site_number='"+i+"'><select class='number_select' name='site["+i+"]'>"+birdCounter+"</select></div>");
            $("#site"+i+"").append(noneContainer(i));
        };
        
        var siteNumber;
        this['initiated' + siteNumber];
        this['inputArray' + siteNumber];
        this['arrayLength' + siteNumber];
        
        $(document).on("change", ".number_select", function(){
            
            numberFound = $(this).val();
            siteNumber = $(this).parent().attr('data-site_number');
            
            if(numberFound === "0"){
                $("#site"+siteNumber+"").append(noneContainer(siteNumber));
            };
            
            if(this['initiated' + siteNumber]){                
                if(this['arrayLength' + siteNumber] > numberFound){
                    for(z = this['arrayLength' + siteNumber]; z > numberFound; z--){
                        $("#birdcontainer"+siteNumber+""+z+"").remove();
                        this['inputArray' + siteNumber].pop();
                    };
                    this['arrayLength' + siteNumber] = this['inputArray' + siteNumber].length;
                }
                else{
                    $("#nonecontainer"+siteNumber+"").remove();
                    
                    elementsAdd = numberFound - this['arrayLength' + siteNumber];
                    
                    for(y = 1; y <= elementsAdd; y++){
                        x = this['arrayLength' + siteNumber] + y;
                        
                        newInput = speciesInput(siteNumber, x);
                        
                        $(this).parent().append(newInput);
                        this['inputArray' + siteNumber].push(newInput);   
                    };
                    
                    this['arrayLength' + siteNumber] = this['inputArray' + siteNumber].length;
                };
            }
            else{
                
                $("#nonecontainer"+siteNumber+"").remove();
                
                this['initiated' + siteNumber] = true;
                this['inputArray' + siteNumber] = [];
            
                for(x = 1; x <= numberFound; x++){
                    this['inputArray' + siteNumber].push(speciesInput(siteNumber, x));
                };
                
                this['arrayLength' + siteNumber] = this['inputArray' + siteNumber].length;
                $(this).parent().append(this['inputArray' + siteNumber]);
            };
        });
    });
    
});