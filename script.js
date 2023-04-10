const centimeter = document.querySelector("#cm"),
inch = document.querySelector("#in");

window.addEventListener("load", () => centimeter.focus());

centimeter.addEventListener("input", () =>{
    inch.value = (centimeter.value * 0.3937).toFixed(4);
    if(!centimeter.value) inch.value ="";
});
inch.addEventListener("input", () =>{
    centimeter.value = (inch.value * 2.54).toFixed(2);
    if(!inch.value) centimeter.value ="";
});

const USD = document.querySelector("#us"),
THB = document.querySelector("#th");

window.addEventListener("load", () => centimeter.focus());

USD.addEventListener("input", () =>{
    THB.value = (USD.value * 34.37).toFixed(2);
    if(!USD.value) THB.value ="";
});
THB.addEventListener("input", () =>{
    USD.value = (THB.value * 0.029).toFixed(2);
    if(!THB.value) USD.value ="";
});