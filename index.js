let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl =document.getElementById("volume-el")
let weightEl =document.getElementById("weight-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function () {
    let baseValue =  inputEl.value;
    let getFeet= baseValue*meterToFeet;
    let getMeters= baseValue/meterToFeet;
    lengthEl.textContent = `${baseValue} meters = ${getFeet.toFixed(3)} feet | ${baseValue} feet = ${getMeters.toFixed(3)} meters`
})

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value;
    let getGallons= baseValue*literToGallon;
    let getLitters= baseValue/literToGallon;
    volumeEl.textContent = `${baseValue} liters = ${getGallons.toFixed(3)} gallons | ${baseValue} gallons = ${getLitters.toFixed(3)} liters` 
})

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    let getPounds= baseValue*kiloToPound;
    let getKilos= baseValue/kiloToPound;
    weightEl.textContent = `${baseValue} kilos = ${getPounds.toFixed(3)} pounds| ${baseValue} pounds = ${getKilos.toFixed(3)} kilos` 
})
