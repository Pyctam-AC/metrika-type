let kmRef = document.getElementById("km");
let mlRef = document.getElementById("mile");
let nlRef = document.getElementById("naut_mile");

let convertFromKm = () => {
  let km = kmRef.value;
  //toFixed(2) limits the decimals to 2 digits.
  mlRef.value = (km * 1.60934).toFixed(2);
  nlRef.value = (km * 1.852).toFixed(2);
};

let convertFromLb = () => {
  let lb = mlRef.value;
  kmRef.value = (lb * 1.60934).toFixed(2);
  nlRef.value = (lb / 1.15078).toFixed(2);
};

let convertFromOz = () => {
  let oz = nlRef.value;
  kmRef.value = (oz * 1.852).toFixed(2);
  mlRef.value = (oz * 1.15078).toFixed(2);
};

kmRef.addEventListener("input", convertFromKm);
mlRef.addEventListener("input", convertFromLb);
nlRef.addEventListener("input", convertFromOz);
window.addEventListener("load", convertFromKm);
