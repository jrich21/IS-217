// define several functions

function firstFunction() {
    secondFunction();

}

function secondFunction() {
    thirdFunction();

}

function thirdFunction() {
    fourthFunction();

}

function fourthFunction() {
    headline.innerHTML = "You clicked the headline!";

}



// grab the headline element

var headline = document.getElementById("mainHeading");

// add a click event handler

headline.onclick = function() {

    //alert("just about to call first function");
    firstFunction();

    //alert("I've called first function");
};





