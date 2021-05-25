"use strict"
function renderCoffee(oneCoffee) {
    let container = document.getElementById("coffee-types");
    // let containerDiv = document.createElement("div");
    //     containerDiv.setAttribute("class","coffee");
    let coffeeId = document.createElement("div");
        coffeeId.setAttribute("class", "col-4");
    coffeeId.innerText = oneCoffee.id;
    let coffeeName = document.createElement("div");
        coffeeName.setAttribute("class", "col-4");
    coffeeName.innerText = oneCoffee.name;
    let coffeeRoast = document.createElement("div");
        coffeeRoast.setAttribute("class", "col-4");
    coffeeRoast.innerText = oneCoffee.roast;
    container.appendChild(coffeeId);
    container.appendChild(coffeeName);
    container.appendChild(coffeeRoast);
    return container.innerHTML;
}

// function renderCoffee(coffee) {
//     console.log(coffee)
//     var container = document.getElementById("coffee-types");
//
//     var coffeeId = document.createElement("div")
//     coffeeId.setAttribute("class", "col-4 my-1")
//     coffeeId.innerText = coffee.id;
//
//     var coffeeName = document.createElement("div")
//     coffeeName.setAttribute("class", "col-4 my-1")
//     coffeeName.innerText = coffee.name;
//
//     var coffeeRoast = document.createElement("div")
//     coffeeRoast.setAttribute("class", "col-4 my-1")
//     coffeeRoast.innerText = coffee.roast;





function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i--) {
        html = renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    tbody.innerHTML = "";
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffeesArr.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    console.log(filteredCoffees);
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffeesArr = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
var tbody = document.querySelector('#coffee-types');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffeesArr);

submitButton.addEventListener('click', updateCoffees);
