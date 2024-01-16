// // Selecting elements
// var inputField = document.getElementById("inputField");
// var prevElement = document.getElementById("prev");
// var equalButton = document.getElementById("equal");
// var addButton = document.getElementById("add");
// var subButton = document.getElementById("sub");
// var mulButton = document.getElementById("mul");
// var divButton = document.getElementById("div");
// var resetButton = document.getElementById("reset");
// var backButton = document.getElementById("back");

// // Variable to store the previous calculation
// var prevCalculation = "";

// // Function to update the input field
// function updateInput(value) {
//     inputField.textContent += value;
// }

// // Function to clear the input field
// function clearInput() {
//     inputField.textContent = "";
// }

// // Function to delete the last character in the input field
// function deleteLastCharacter() {
//     var currentInput = inputField.textContent;
//     inputField.textContent = currentInput.substring(0, currentInput.length - 1);
// }

// // Function to perform the calculation
// function performCalculation() {
//     try {
//         prevCalculation = inputField.textContent;
//         inputField.textContent = eval(prevCalculation);
//         prevElement.textContent = prevCalculation;
//     } catch (error) {
//         inputField.textContent = "Error";
//         prevElement.textContent = "";
//     }
// }

// // Event listeners for number buttons
// document.getElementById("one").addEventListener("click", function() { updateInput("1"); });
// document.getElementById("two").addEventListener("click", function() { updateInput("2"); });
// document.getElementById("three").addEventListener("click", function() { updateInput("3"); });
// document.getElementById("four").addEventListener("click", function() { updateInput("4"); });
// document.getElementById("five").addEventListener("click", function() { updateInput("5"); });
// document.getElementById("six").addEventListener("click", function() { updateInput("6"); });
// document.getElementById("seven").addEventListener("click", function() { updateInput("7"); });
// document.getElementById("eight").addEventListener("click", function() { updateInput("8"); });
// document.getElementById("nine").addEventListener("click", function() { updateInput("9"); });
// document.getElementById("zero").addEventListener("click", function() { updateInput("0"); });

// // Event listener for arithmetic operations
// addButton.addEventListener("click", function() { updateInput("+"); });
// subButton.addEventListener("click", function() { updateInput("-"); });
// mulButton.addEventListener("click", function() { updateInput("*"); });
// divButton.addEventListener("click", function() { updateInput("/"); });

// // Event listener for equal button
// equalButton.addEventListener("click", performCalculation);

// // Event listeners for reset and back buttons
// resetButton.addEventListener("click", clearInput);
// backButton.addEventListener("click", deleteLastCharacter);




let inputField = document.querySelector("#input");


let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
// arithmetic operator
let div = document.querySelector("#div");
let mul = document.querySelector("#mul");
let sub = document.querySelector("#sub");
let add = document.querySelector("#add");
// equal button
let equal = document.querySelector("#equal");
let reset = document.querySelector("#reset");
let back = document.querySelector("#back");
let previous_input = document.querySelector("#previous-input");
let again = false;
let storedExpression;

// event listnes for every number will update number
// in string format into input field
one.addEventListener("click", function(){
    if(again == true){
        again = false;
        clear();
    }
   updateInputField("1");
    
});
two.addEventListener("click", function(){
    if(again == true){
        again = false;
        clear();
    }
   updateInputField("2");
    
});
three.addEventListener("click", function(){
    if(again == true){
        again = false;
        clear();
    }
   updateInputField("3");
    
});
four.addEventListener("click", function(){
    if(again == true){
        again = false;
        clear();
    }
   updateInputField("4");
    
});
five.addEventListener("click", function(){
    if(again == true){
        again = false;
        clear();
    }
   updateInputField("5");
    
});
six.addEventListener("click", function(){
    if(again == true){
        again = false;
        clear();
    }
   updateInputField("6");
    
});
seven.addEventListener("click", function(){
    if(again == true){
        again = false;
        clear();
    }
   updateInputField("7");
    
});
eight.addEventListener("click", function(){
    if(again == true){
        again = false;
        clear();
    }
   updateInputField("8");
    
});
nine.addEventListener("click", function(){
    if(again == true){
        again = false;
        clear();
    }
   updateInputField("9");
    
});
zero.addEventListener("click", function(){
    if(again == true){
        again = false;
        clear();
    }
   updateInputField("0");
    
});
// event listnes for every number arithmetic
// in string format into input field
div.addEventListener("click", function(){
    if(again == true){
        again = false;
        clear();
    }
    updateInputField(" ÷ ");
});
mul.addEventListener("click", function(){
    if(again == true){
        again = false;
        clear();
    }
    updateInputField(" x ");
});
sub.addEventListener("click", function(){
    if(again == true){
        again = false;
        clear();
    }
    updateInputField(" - ");
});
add.addEventListener("click", function(){
    if(again == true){
        again = false;
        clear();
    }
    updateInputField(" + ");
});
// function to update input field
function updateInputField(value){
    input.innerHTML += value;
}

equal.addEventListener("click", function () {
    calculateResult();
    previous_input.innerHTML = storedExpression;
    
});

reset.addEventListener("click", function(){
    inputField.innerHTML = "";
    previous_input.innerHTML = "";
});

back.addEventListener("click", deleteLastCharacter);



function calculateResult() {
    let expression = inputField.innerHTML;
    let result;
    
    try {
        result = eval(expression.replace(/÷/g, '/').replace(/x/g, '*'));
        
        // Round the result to 2 decimal places
        let roundedResult = `= ${parseFloat(result.toFixed(2))}`;
        // when should you clear input field
        again = true;
        
        // Display the rounded result in the input field
        inputField.innerHTML = roundedResult;
        
        // Update stored expression with the rounded result
        storedExpression = expression;
    } catch (error) {
        inputField.innerHTML = "Error";
        
    }
}


    


function deleteLastCharacter() {
        var currentInput = inputField.innerHTML;
        inputField.innerHTML = currentInput.substring(0, currentInput.length - 1);
    }
// clear input field
function clear(){
    inputField.innerHTML = "";
    previous_input.innerHTML = "";
}

