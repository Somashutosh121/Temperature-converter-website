function convertTemperature() {
  var inputTemp = document.getElementById("inputTemp").value;
  var selectUnit = document.getElementById("selectUnit").value;
  var result = document.getElementById("result");

  if (selectUnit === "celsius") {
      var convertedTemp = (inputTemp * 9 / 5) + 32;
      result.textContent = inputTemp + "°C = " + convertedTemp + "°F";
  } else {
      var convertedTemp = (inputTemp - 32) * 5 / 9;
      result.textContent = inputTemp + "°F = " + convertedTemp + "°C";
  }
}
