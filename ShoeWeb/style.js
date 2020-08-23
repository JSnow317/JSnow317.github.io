
// Check to make sure username has proper input
// Dont start user name with special characters

function properSyntax() {


    var userInput = document.getElementsByTagName('input');
    var temp = /[A-Za-z0-9]/g;
    userInput = userInput[0];
    newInput = userInput.value;
    var result = newInput.match(temp);
    // var checkValue = /[^A-Za-z0-9]/;
    for (var i = 0; i < newInput.length; i++) {


        if (result[i] == newInput[i]) {
            var newP = document.querySelector('#placeHere');
            var newElement = document.createElement('p');
            newElement.style.fontWeight = 'bold';
            newElement.style.fontSize = '26px';
            newElement.textContent = "Welcome to the Family! An email will be sent for confirmation";
            newP.appendChild(newElement);
            console.log("Successful login");
            console.log("This is the successful input:", newInput);
            break;
        } else {
            alert('Dont start username with a  Special character, please input proper syntax')
            console.log("This is the user input: ", newInput);
            break;



        }
    }
}

function showPass(){
    let pass = document.getElementById('myInput');
    if(pass.type === 'password'){
        pass.type = 'text';
    } else{
        pass.type = 'password';
    }
}

document.getElementById('eventClick').onclick = function () {
    properSyntax();
}

var firstItem = document.querySelector('h1');
firstItem.style.color = 'crimson';

var secItem = document.querySelector('h2');
secItem.style.color = 'crimson';



/*Iterating through a collection of classes*/
var items = document.getElementsByClassName('list-items');

for (let i = 0; i < items.length; i++) {
    items[i].style.color = 'crimson';
}

