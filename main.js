"use strict"
// addButtonEvent();


function renderCoffee(oneCoffee) {
    let container = document.getElementById("coffee-types");
    let coffeeId = document.createElement("div");
        coffeeId.setAttribute("class", "col-4 my-1");
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
    for(var i = 0; i <= coffees.length - 1; i++) {
        tbody.innerHTML = renderCoffee(coffees[i]);
    }
    return tbody.innerHTML;
}

function updateCoffees(e) {
    tbody.innerHTML = "";
    if(e.length){
        tbody.innerHTML = renderCoffees(e);
    } else {
        e.preventDefault(); // don't submit the form, we just want to update the data

        var selectedRoast = roastSelection.value;
        var filteredCoffees = [];
        coffeesArr.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
                console.log(coffee.name.includes(searchBar.value));
            }
        });
        console.log(filteredCoffees);
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
}

function newCoffee(e) {
    e.preventDefault();
      var newCoffeeUser =
         {
        id: coffeesArr.length +1,
        name: newName.value,
        roast: newRoast.value,
         };
      coffeesArr.push(newCoffeeUser)
    tbody.innerHTML= renderCoffee(newCoffeeUser);
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
var searchBar = document.querySelector('#coffee-select');

var newName = document.querySelector('#new-name');
var newRoast = document.querySelector('#new-roast');
var newSubmit = document.querySelector('#new-submit');

tbody.innerHTML = renderCoffees(coffeesArr);

submitButton.addEventListener('click', updateCoffees);
newSubmit.addEventListener('click', newCoffee);
// newSubmit.addEventListener('',updateCoffees);
// searchBar.addEventListener('input', updateCoffees);
roastSelection.addEventListener('change', updateCoffees)

// submitButton.addEventListener('click', updateCoffees);

searchBar.addEventListener("keyup", function (e){
    let searchValue = e.target.value;
    let filteredCoffees = coffeesArr.filter(coffee =>{
        return coffee.name.toLowerCase().includes(searchValue.toLowerCase());
        });
    updateCoffees(filteredCoffees);
})



function addButtonEvent() {
    document.getElementById("submitBtn")
        .addEventListener("click", addPost)
}

function addPost() {
    var blogPost = document.getElementById("blog-container");
    var newPara = document.createElement("p");
    newPara.setAttribute("class", "");
    var loc = document.getElementById("user-input");
    // var today = new Date();
    //
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    blogPost.appendChild(newPara);
    newPara.innerText = loc.value;
    loc.value = '';
}
