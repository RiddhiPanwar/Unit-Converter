/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet` 
})







let convertMtn = document.getElementById("convert-mtn")
let outputEl = document.getElementById("output")
let volumeEl = document.getElementById("volume-el")


convertMtn.addEventListener("click", function() {
    let baseValue = outputEl.value
    
    volumeEl.textContent = `${baseValue} liter = ${baseValue * meterToFeet} gallons` 
})








let convertPtn = document.getElementById("convert-ptn")
let errorEl = document.getElementById("error")
let massEl = document.getElementById("mass-el")


convertPtn.addEventListener("click", function() {
    let baseValue = errorEl.value
    
    massEl.textContent = `${baseValue} kilograms = ${baseValue * meterToFeet} pounds` 
})

