
// -------------------------------------------------------------------
// trips array
// ------------------------------------------------------------------


const arrTrips = [
    {
        name: "Venice",
        price: "R27000",
        description: "very fun",
        image: "card 1.png",
        destinationDuration: "all",
        origin: "Venice"
    },
    {
        name: "Croatia",
        price: "R31000",
        description: "very fun",
        image: "card 2.png",
        destinationDuration: "long",
        origin: "Croatia"
    },
    {
        name: "Bulgaria",
        price: "R37000",
        description: "very fun",
        image: "card 3.png",
        destinationDuration: "short",
        origin: "Bulgaria"
    },
    {
        name: "Venice",
        price: "R25000",
        description: "very fun",
        image: "card 4.png",
        destinationDuration: "single",
        origin: "Venice"

    },
    {
        name: "Russia",
        price: "R33000",
        description: "very fun",
        image: "card 5.png",
        destinationDuration: "multi",
        origin: "Russia"
    },
    {
        name: "Turkye",
        price: "R38000",
        description: "very fun",
        image: "card 6.png",
        destinationDuration: "round",
        origin: "Turkye"
    },


 ];


 let appliedFilter = "";





// -------------------------------------------------------------------
// when the document loads
// ------------------------------------------------------------------
$(document).ready(function(){



//--------------------------------------------------------------------
// trips page
// ------------------------------------------------------------------

loadTrips(arrTrips);


});


// --------------------------------------------------------------------------
// load trips
// -------------------------------------------------------------------------
function loadTrips(tripsToShow) {

    $("#tripsContainer").empty();

    

    for (let i = 0; i < tripsToShow.length; i++) {
        const trips = tripsToShow [i];


        $.ajax({
            type:"GET",
            url:"https://api.openweathermap.org/data/2.5/weather?q=" + trips.origin + "&appid=74d12cf5d5014d359a25eaa1e534a442",
            success: function(data){
    
                data = data
    
                console.log(data);
            }
        }).done(function(){
            

            $(currentChild).find("#newTemp").text("OriginTemp:" + Math.round(tempData.main.temp -273) + "C");

        })


        // 1 select trips container and add trips card
        $("#tripsContainer").append($("#tripsCardTemplate").html());

         //  create variable that contains recently added trips card 
         let currentChild = $("#tripsContainer").children().eq(i+1);

        // 3 set content for current trips card from trips array
        $(currentChild).find("#nameText").text(trips.name);
        $(currentChild).find("#priceText").text(trips.price);
        $(currentChild).find("#descriptionText").text(trips.description);
        $(currentChild).find(".card-img-top").attr('src','assets/' + trips.image);

        // hide description text from trips card
        $(currentChild).find("#descriptionText").hide();
        $(currentChild).find("#newTemp").hide();

     
    };



};

// --------------------------------------------------------------------------
// when filter is selected
// -------------------------------------------------------------------------
$("input[name='filterRadio']").click(function(){
    appliedFilter = $(this).attr('value');

    console.log(appliedFilter);
    filterSortTrips();

});

function filterSortTrips(){
  
    let filteredSortedArrTrips = [];

    // filtering trips
    if (appliedFilter){
        filteredSortedArrTrips = arrTrips.filter(trips => trips.longDuration == appliedFilter)
    } else {
        filteredSortedArrTrips = arrTrips;
    }

    console.log(filteredSortedArrTrips);

    loadTrips(filteredSortedArrTrips);
}





// --------------------------------------------------------------------------
// when a card is clicked
// -------------------------------------------------------------------------

$("#tripsContainer").on('click', '.card', function() {

// toggle price and description text
$(this).find("#priceText").toggle();

$(this).find("#descritionText").toggle();
$(this).find("#newTemp").toggle();

// resize image to fit original content
$(this).find("card-img-top").toggleClass("small");


});


$(document).ready(function(){

    $.ajax({
        type:"GET",
        url:"https://api.openweathermap.org/data/2.5/weather?q=Venice&appid=74d12cf5d5014d359a25eaa1e534a442",
        success: function(data){

            data = data

            console.log(data);
        }
    }).done(function(){
        $("#tempdata").html(tempData.main.temp)
    })
})



