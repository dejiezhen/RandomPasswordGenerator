`use strict`;

let asciiCharLower = [];
let asciiCharUpper = [];
let numbers = [];
let symbols = []

const getUpper = document.getElementById('uppercase');
const getLower = document.getElementById('lowercase');
const lengthPass = document.getElementById('length');
const getNumbers = document.getElementById('numbers');
const getSymbols = document.getElementById('symbols');
const passResult = document.getElementById('password-result');
const generatePass = document.getElementById('generate');


function addAllCharToArr(){
    for(let lowerCount = 97; lowerCount < 123; lowerCount++){
        asciiCharLower.push(String.fromCharCode(lowerCount));
    }
    for(let upperCount = 65; upperCount < 91; upperCount++){
        asciiCharUpper.push(String.fromCharCode(upperCount));
    }
    for(let numberCount = 48; numberCount < 58; numberCount++){
        numbers.push(String.fromCharCode(numberCount));
    }
    for(let symbolCount = 33; symbolCount < 48; symbolCount++){
        symbols.push(String.fromCharCode(symbolCount));
    }
}


const lowerFunc = function getRandLower(){
    return asciiCharLower[Math.trunc(Math.random() * asciiCharLower.length)];
}
const upperFunc = function getRandUpper(){
    return asciiCharUpper[Math.trunc(Math.random() * asciiCharUpper.length)];
}
const numberFunc = function getRandNumber(){
    return numbers[Math.trunc(Math.random() * numbers.length)];
}
const symbolFunc = function getRandSymbol(){
    return symbols[Math.trunc(Math.random() * symbols.length)];
}

function generatePassword(num){
    const checkedBoxed= [getUpper, getLower, getNumbers, getSymbols];
    const charFunctions = [];
   
    //Push functions into arr if the box is checked
    if (getUpper.checked) charFunctions.push(upperFunc);
    if (getLower.checked) charFunctions.push(lowerFunc);
    if (getNumbers.checked) charFunctions.push(numberFunc);
    if (getSymbols.checked) charFunctions.push(symbolFunc);
    return charFunctions[Math.trunc(Math.random() * charFunctions.length)]();


}

generatePass.addEventListener('click', function(){
    addAllCharToArr();
    newPass= '';
    if(lengthPass.value) {
        for(let i = 0; i < lengthPass.value; i++){
            newPass += generatePassword();
        }
    }
    passResult.textContent = newPass;
})

passResult.addEventListener('click', function(){
    if(passResult.textContent !== ''){
        //Create a text area tag
        const copyTextArea = document.createElement('textarea');
        const password = passResult.innerText;
        copyTextArea.value = password;

        //Add the text area tag to our HTML, and select it
        document.body.appendChild(copyTextArea);
        copyTextArea.select();
        copyTextArea.setSelectionRange(0, 99999);

        //Copy the items in the text area then remove the textarea so it does not show up
        document.execCommand('copy');
        copyTextArea.remove();

        alert('You have copied your new password!');
    }
    
})












