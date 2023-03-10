let ltrRef = document.getElementById("ltr");
let galRef = document.getElementById("gal");
let pntRef = document.getElementById("pnt");

let convertFromltr = () => {
  let ltr = ltrRef.value;
  //toFixed(2) limits the decimals to 2 digits.
  galRef.value = (ltr / 3.785).toFixed(2);
  pntRef.value = (ltr / 0.568).toFixed(2);
};

let convertFromgal = () => {
  let gal = galRef.value;
  ltrRef.value = (gal * 3.785).toFixed(2);
  pntRef.value = (gal * 6.67).toFixed(2);
};

let convertFrompnt = () => {
  let pnt = pntRef.value;
  ltrRef.value = (pnt * 1.76).toFixed(2);
  galRef.value = (pnt * 6.67).toFixed(2);
};

ltrRef.addEventListener("input", convertFromltr);
galRef.addEventListener("input", convertFromgal);
pntRef.addEventListener("input", convertFrompnt);
window.addEventListener("load", convertFromltr);
