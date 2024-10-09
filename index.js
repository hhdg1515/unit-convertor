let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl =document.getElementById("volume-el")
let weightEl =document.getElementById("weight-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function () {
    let baseValue =  Number(inputEl.value);
    if (isNaN(baseValue)) {
      alert("Please enter a valid number.");    
  }
    let convertedFeet= baseValue*meterToFeet;
    let convertedMeters= baseValue/meterToFeet;
    lengthEl.textContent = `${baseValue} meters = ${convertedFeet.toFixed(3)} feet | ${baseValue} feet = ${convertedMeters.toFixed(3)} meters`
})

convertBtn.addEventListener("click", function() {
    let baseValue = Number(inputEl.value);
    let convertedGallons= baseValue*literToGallon;
    let convertedLitters= baseValue/literToGallon;
    volumeEl.textContent = `${baseValue} liters = ${convertedGallons.toFixed(3)} gallons | ${baseValue} gallons = ${convertedLitters.toFixed(3)} liters` 
})

convertBtn.addEventListener("click", function() {
    let baseValue = Number(inputEl.value);
    let convertedPounds= baseValue*kiloToPound;
    let convertedKilos= baseValue/kiloToPound;
    weightEl.textContent = `${baseValue} kilos = ${convertedPounds.toFixed(3)} pounds| ${baseValue} pounds = ${convertedKilos.toFixed(3)} kilos` 
})
