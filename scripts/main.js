
// -------------------------------------------------------------------
// trips array
// ------------------------------------------------------------------
const arrTrips = [
    {
        name: "Venice",
        price: "R27000",
        description: "very fun",
        image: "card 1.png"
    },
    {
        name: "Croatia",
        price: "R31000",
        description: "very fun",
        image: "card 2.png"
    },
    {
        name: "Bulagaria",
        price: "R37000",
        description: "very fun",
        image: "card 3.png"
    },
    {
        name: "Venice",
        price: "R25000",
        description: "very fun",
        image: "card 4.png"
    },
    {
        name: "Russia",
        price: "R33000",
        description: "very fun",
        image: "card 5.png"
    },
    {
        name: "Turkye",
        price: "R38000",
        description: "very fun",
        image: "card 6.png"
    },


 ];




// -------------------------------------------------------------------
// when the document loads
// ------------------------------------------------------------------
$(document).ready(function(){



//--------------------------------------------------------------------
// trips page
// ------------------------------------------------------------------

loadTrips();


});


// --------------------------------------------------------------------------
// load all trips
// -------------------------------------------------------------------------
function loadTrips() {

    console.log(arrTrips);

    for (let i = 0; i < arrTrips.length; i++) {
        const trips = arrTrips [i];

        console.log(trips.name);


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

     
    };



};



// --------------------------------------------------------------------------
// when a card is clicked
// -------------------------------------------------------------------------

$("#tripsContainer").on('click', '.card', function() {

// toggle price and description text
$(this).find("#priceText").toggle();

$(this).find("#descritionText").toggle();

// resize image to fit original content
$(this).find("card-img-top").toggleClass("small");

})



