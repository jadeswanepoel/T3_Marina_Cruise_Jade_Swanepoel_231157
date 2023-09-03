
// -------------------------------------------------------------------
// trips array
// ------------------------------------------------------------------


const arrTrips = [
    {
        name: "Caribbean Escape",
        price: "$1,299 per person",
        date:"Duration: 7 nights",
        description: "Venice",
        code:"Code: CRB_001",
        image: "card 1.png",
        destinationDuration: "all",
        origin: "Venice"
    },
    {
        name: "Mediterranean Magic",
        price: "$1,799 per person",
        date:"Duration: 10 nights",
        description: "Croatia",
        code:"Code: MED_002",
        image: "card 2.png",
        destinationDuration: "long",
        origin: "Croatia"
    },
    {
        name: "Scandinavian Serenity",
        price: "$1,899 per person",
        date:"Duration: 8 nights",
        description: "Bulgaria",
        code:"Code: SCN-005",
        image: "card 3.png",
        destinationDuration: "short",
        origin: "Bulgaria"
    },
    {
        name: "Pacific Paradise",
        price: "$1,699 per person",
        date:"Duration: 9 nights",
        description: "Austria",
        code:"Code: PAC-007",
        image: "card 4.png",
        destinationDuration: "single",
        origin: "Venice"

    },
    {
        name: "European Elegance",
        price: "$2,099 per person",
        date:"Duration: 11 nights",
        description: "Russia",
        code:"Code: EUR-008",
        image: "card 5.png",
        destinationDuration: "multi",
        origin: "Russia"
    },
    {
        name: "South American Splendors",
        price: "$2,299 per person",
        date:"Duration: 12 nights",
        description: "Turkye",
        code:"Code: SAM-006",
        image: "card 6.png",
        destinationDuration: "round",
        origin: "Turkye"
    },
    {
        name: "Ariving Paradise",
        price: "$1,299 per person",
        date:"Duration: 4 nights",
        description: "Unknown",
        code:"Code: UKN-009",
        image: "card 6.png",
        destinationDuration: "row",
        origin: "Uknown"
    },



 ];


 let appliedFilter = "";





// -------------------------------------------------------------------
// when the document loads
// ------------------------------------------------------------------
$(document).ready(function(){
    console.log("hello");



//--------------------------------------------------------------------
// trips page
// ------------------------------------------------------------------

filterSortTrips();


});


// --------------------------------------------------------------------------
// load trips
// -------------------------------------------------------------------------
function loadTrips(tripsToShow) {

    $("#tripsContainer").empty();

    

    for (let i = 0; i < tripsToShow.length; i++) {
        const trips = tripsToShow [i];

        console.log(trips.name);


        // 1 select trips container and add trips card
        $("#tripsContainer").append($("#tripsCardTemplate").html());

         //  create variable that contains recently added trips card 
         let currentChild = $("#tripsContainer").children().eq(i);

        // 3 set content for current trips card from trips array
        $(currentChild).find("#nameText").text(trips.name);
        $(currentChild).find("#priceText").text(trips.price);
        $(currentChild).find("#dateText").text(trips.date);
        $(currentChild).find("#descriptionText").text(trips.description);
        $(currentChild).find("#codeText").text(trips.code);
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
        filteredSortedArrTrips = arrTrips.filter(trips => trips.destinationDuration == appliedFilter)
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
$(this).find("#dateText").toggle();
$(this).find("#codeText").toggle();

$(this).find("#descriptionText").toggle();
$(this).find("#newTemp").toggle();

// resize image to fit original content
$(this).find("card-img-top").toggleClass("small");


});



     // Add your API key here
     const apiKey = '74d12cf5d5014d359a25eaa1e534a442';
     // Replace 'YOUR_CITY' with the desired city or coordinates (e.g., 'New York, US' or '40.7128,-74.0060')
     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Venice&appid=74d12cf5d5014d359a25eaa1e534a442`;

     // Function to fetch weather data and update the widget
     async function fetchWeather() {
         try {
             const response = await fetch(apiUrl);
             const data = await response.json();

             document.getElementById('location').textContent = data.name;
             document.getElementById('temperature').textContent = data.main.temp;
             document.getElementById('weather').textContent = data.weather[0].description;
         } catch (error) {
             console.error('Error fetching weather data:', error);
         }
     }

     // Call the fetchWeather function when the page loads
     window.addEventListener('load', fetchWeather);

     
  $(document).ready(function() {
    $(".remove-button").click(function() {
      $(this).closest("tr").remove();
    });
  });