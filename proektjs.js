function pochet() {
let pyatorki = parseInt(document.getElementById('pyatorki').value) || 0
let chectvorki = parseInt(document.getElementById('chetvorki').value) || 0
let troiki = parseInt(document.getElementById('troiki').value) || 0
let dvoiki = parseInt(document.getElementById('dvoiki').value) || 0
let delitel = pyatorki + chectvorki + troiki + dvoiki
let vse = (pyatorki * 5) + (chectvorki * 4) + (troiki * 3) + (dvoiki * 2)
let itog = vse / delitel 
itog = itog.toFixed(2)
document.getElementById('itog').innerHTML = itog
}
function switchball() {
    
    window.location.href = 'testhtml2.html'
    
}