function calculateBloodPressure() {
    const systolicPressure = document.getElementById("systolic-pressure").value;
    const diastolicPressure = document.getElementById("diastolic-pressure").value;
    const meanArterialPressure = (2/3 * diastolicPressure) + (1/3 * systolicPressure);
    let result = "";
    let color = "";
    
    if (meanArterialPressure < 60) {
      result = "Low Blood Pressure";
      color = "blue";
    } else if (meanArterialPressure >= 60 && meanArterialPressure < 80) {
      result = "Healthy Blood Pressure";
      color = "green";
    } else if (meanArterialPressure >= 80 && meanArterialPressure < 90) {
      result = "Prehypertension";
      color = "orange";
    } else if (meanArterialPressure >= 90 && meanArterialPressure < 100) {
      result = "Hypertension Stage 1";
      color = "red";
    } else {
      result = "Hypertension Stage 2";
      color = "darkred";
    }
    
    document.getElementById("result").innerHTML = `<p style="color: ${color};">${result}</p>`;
  }