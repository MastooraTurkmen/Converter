/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let btnEl = document.getElementById("btn-el")
let inputBtn = document.getElementById("input-type")
let firstPara = document.getElementById("first-para")
let secondPara = document.getElementById("second-para")
let thirdPara = document.getElementById("third-para")


const MeterAndFeet = 3.281
const FeetAndMeter = 0.304

const literAndGallon = 0.264
const gallonAndLiter = 3.785

const kilogramAndPound = 2.204
const PoundAndKilogram = 0.4535



btnEl.addEventListener("click", function(){
    let firstParaValue = inputBtn.value
    firstPara.textContent = `
    ${firstParaValue} meters = ${(firstParaValue * MeterAndFeet).toFixed(3)} feet | 
    ${firstParaValue} feet = ${(firstParaValue * FeetAndMeter).toFixed(3)} meters`
    
    secondPara.textContent = `
    ${firstParaValue} liters = ${(firstParaValue * literAndGallon).toFixed(3)} gallons | 
    ${firstParaValue} gallons = ${(firstParaValue * gallonAndLiter).toFixed(3)} liters`
    
    thirdPara.textContent = `
    ${firstParaValue} kilos = ${(firstParaValue * kilogramAndPound).toFixed(3)} pounds | 
    ${firstParaValue} pounds = ${(firstParaValue * PoundAndKilogram).toFixed(3)} kilos`
    
    
     
})