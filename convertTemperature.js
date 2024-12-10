function convertTemperature() {
    //Get temperature input from user
    let temp = Number(document.getElementById('tempInput').value);
    //select scale (celsius or fahrenheit)
    let scale = document.getElementById('Select').value;
    let convertedTemp;

    //check the selected scale and perform the conversion
    if (scale === "C") {
        convertedTemp = (temp * 9 / 5) + 32; // Celsius to Fahrenheit
    } else if (scale === "F") {
        convertedTemp = (temp - 32) * 5 / 9; // Fahrenheit to Celsius
    }

    document.getElementById('convertTemperatureOutput').innerText = convertedTemp;
}
