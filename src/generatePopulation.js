var rural = Countries[country].rural;
var urban = Countries[country].urban;
var all = rural + urban;
var noble = all * 0.051;
var priest = all * 0.011;
var merchant = rural * 0.01 + urban * 0.15;
var peasant = rural * 0.84;
var worker = urban * 0.71 + rural * 0.1;
var urb = Math.floor((urban / all) * 10000) / 100;
var gos = Math.floor(((noble + merchant) / 3 / all) * urb * 10000) / 100;
var poorTax = Math.floor(peasant / 100) / 100;
var middleTax = Math.floor((worker + merchant) / 100) / 100;
var richTax = Math.floor((priest + noble) / 100) / 100;
document.getElementById('pep').innerHTML = Math.floor(all / 1000);
document.getElementById('gos').innerHTML = gos;
document.getElementById('urb').innerHTML = urb;
document.getElementById('urbpep').innerHTML = Math.floor(urban / 10) / 100;
document.getElementById('rurpep').innerHTML = Math.floor(rural / 10) / 100;
document.getElementById('male').innerHTML = Math.floor((all * 0.52) / 10) / 100;
document.getElementById('female').innerHTML =
  Math.floor((all * 0.48) / 10) / 100;
var p = document.getElementById('poor');
var pt = document.getElementById('poorTaxPercent');
var m = document.getElementById('middle');
var mt = document.getElementById('middleTaxPercent');
var r = document.getElementById('rich');
var rt = document.getElementById('richTaxPercent');
p.innerHTML = poorTax * 1.1;
m.innerHTML = middleTax * 1.1;
r.innerHTML = richTax * 1.1;
pt.innerHTML = 10;
mt.innerHTML = 10;
rt.innerHTML = 10;
var ptf = document.getElementById('ptf');
function poorTaxFix() {
  var val = ptf.value;
  pt.innerHTML = val;
  var end = poorTax + (poorTax * val) / 100;
  p.innerHTML = Math.floor(end * 100) / 100;
}
function middleTaxFix() {
  var val = mtf.value;
  mt.innerHTML = val;
  var end = middleTax + (middleTax * val) / 100;
  m.innerHTML = Math.floor(end * 100) / 100;
}
function richTaxFix() {
  var val = rtf.value;
  rt.innerHTML = val;
  var end = richTax + (richTax * val) / 100;
  r.innerHTML = Math.floor(end * 100) / 100;
}
