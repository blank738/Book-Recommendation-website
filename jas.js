var pop = document.getElementById("pop");
var mepo = document.getElementById("mes");
var but1 = document.getElementById("add");
var cancelp = document.getElementById("can");
var add = document.getElementById("ad");
var title = document.querySelector(".title");
var author = document.querySelector(".author");
var discription = document.querySelector(".dis");
var cont = document.querySelector(".book-container");

function showp() {
    pop.style.display = "block";
    mepo.style.display = "block";
}

cancelp.addEventListener("click", function(event) {
    event.preventDefault();
});

add.addEventListener("click", function(event) {
    event.preventDefault();
});

function canc() {
    pop.style.display = "none";
    mepo.style.display = "none";
}

// Inputs
var tiin = document.getElementById("bt");
var auin = document.getElementById("an");
var disin = document.getElementById("di");

var cont = document.querySelector(".container"); // parent container

add.addEventListener("click", function() {
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2>${tiin.value}</h2>
        <h4>${auin.value}</h4>
        <p>${disin.value}</p>
        <b><button class="dele">delete</button></b>
    `;
    cont.append(div);

    // ✅ delete button works
    div.querySelector(".dele").addEventListener("click", function() {
        div.remove();
    });

    // ✅ clear inputs + close popup after adding
    tiin.value = "";
    auin.value = "";
    disin.value = "";
    canc();
});
function dl(button){
    button.parentElement.remove();
}