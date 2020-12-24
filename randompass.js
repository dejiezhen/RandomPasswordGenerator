function ascii(){
    let container = document.getElementById('container');
    let password = [];
    for(let i = 32; i<=126; i++){
        password.push(String.fromCharCode(i))
    }
    console.log(password)
 
    container.innerHTML = password.join("");
}


// function printDiv(divName) {
//     var printContents = document.getElementById(divName).innerHTML;
//     var originalContents = document.body.innerHTML;

//     document.body.innerHTML = printContents;

//     window.print();

//     document.body.innerHTML = originalContents;
// }