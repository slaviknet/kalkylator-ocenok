function pochet() {
let dvenad = parseInt(document.getElementById('dvenad').value) || 0
let odinnad = parseInt(document.getElementById('odinnad').value) || 0
let decyatki = parseInt(document.getElementById('decyatki').value) || 0
let devyatki = parseInt(document.getElementById('devyatki').value) || 0
let vosmerki = parseInt(document.getElementById('vosmorki').value) || 0    
let semerki = parseInt(document.getElementById('semerki').value) || 0
let shestorki = parseInt(document.getElementById('shestorki').value) || 0    
let pyatorki = parseInt(document.getElementById('pyatorki').value) || 0
let chectvorki = parseInt(document.getElementById('chetvorki').value) || 0
let troiki = parseInt(document.getElementById('troiki').value) || 0
let dvoiki = parseInt(document.getElementById('dvoiki').value) || 0
let delitel = dvenad + odinnad + decyatki + devyatki + vosmerki + semerki + shestorki + pyatorki + chectvorki + troiki + dvoiki
let vse = (dvenad * 12) + (odinnad * 11) + (decyatki * 10) + (devyatki * 9) + (vosmerki * 8) + (semerki * 7) + (shestorki * 6) + (pyatorki * 5) + (chectvorki * 4) + (troiki * 3) + (dvoiki * 2)
let itog = vse / delitel 
itog = itog.toFixed(2)
document.getElementById('itog').innerHTML = itog
}
function switchball() {
    window.location.href = 'proekthtml.html'   
}