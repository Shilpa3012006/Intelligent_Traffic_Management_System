function predictTraffic() {
  const loc = document.getElementById("tp-location").value.trim();
  const time = document.getElementById("tp-time").value;
  const resultBox = document.getElementById("tp-result");
  const output = document.getElementById("tp-output");

  if (!loc) {
    alert("Please enter a location.");
    return;
  }

  // Dummy logic for now (replace with API call later)
  let status = "Moderate 🚘";
  if (time === "morning") status = "Heavy 🚦";
  else if (time === "afternoon") status = "Light 🚗";
  else if (time === "evening") status = "Very Heavy 🚨";
  else if (time === "night") status = "Smooth 🛣️";

  output.textContent = status;
  resultBox.hidden = false;

  // Example future integration:
  // fetch("http://127.0.0.1:8000/api/predict/", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ location: loc, time })
  // }).then(r => r.json()).then(data => {
  //   output.textContent = data.prediction;
  //   resultBox.hidden = false;
  // }).catch(() => alert("Server not available"));
}
