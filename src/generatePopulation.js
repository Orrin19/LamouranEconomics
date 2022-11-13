const rural = Countries[country].rural;
const urban = Countries[country].urban;
const all = rural + urban;
const noble = all * 0.051;
const priest = all * 0.011;
const merchant = rural * 0.01 + urban * 0.15;
const peasant = rural * 0.84;
const worker = urban * 0.71 + rural * 0.1;
const urb = Math.floor((urban / all) * 10000) / 100;
const gos = Math.floor(((noble + merchant) / 3 / all) * urb * 10000) / 100;
const poorTax = Math.floor(peasant / 100) / 100;
const middleTax = Math.floor((worker + merchant) / 100) / 100;
const richTax = Math.floor((priest + noble) / 100) / 100;
document.getElementById('pep').innerHTML = Math.floor(all / 1000);
document.getElementById('gos').innerHTML = gos;
document.getElementById('urb').innerHTML = urb;
document.getElementById('urbpep').innerHTML = Math.floor(urban / 10) / 100;
document.getElementById('rurpep').innerHTML = Math.floor(rural / 10) / 100;
document.getElementById('male').innerHTML = Math.floor((all * 0.52) / 10) / 100;
document.getElementById('female').innerHTML =
  Math.floor((all * 0.48) / 10) / 100;
const p = document.getElementById('poor');
const pt = document.getElementById('poorTaxPercent');
const m = document.getElementById('middle');
const mt = document.getElementById('middleTaxPercent');
const r = document.getElementById('rich');
const rt = document.getElementById('richTaxPercent');
p.innerHTML = (poorTax * 1.1).toFixed(2);
m.innerHTML = (middleTax * 1.1).toFixed(2);
r.innerHTML = (richTax * 1.1).toFixed(2);
pt.innerHTML = 10;
mt.innerHTML = 10;
rt.innerHTML = 10;
const ptf = document.getElementById('ptf');
function poorTaxFix() {
  const val = ptf.value;
  pt.innerHTML = val;
  const end = poorTax + (poorTax * val) / 100;
  p.innerHTML = end.toFixed(2);
}
function middleTaxFix() {
  const val = mtf.value;
  mt.innerHTML = val;
  const end = middleTax + (middleTax * val) / 100;
  m.innerHTML = end.toFixed(2);
}
function richTaxFix() {
  const val = rtf.value;
  rt.innerHTML = val;
  const end = richTax + (richTax * val) / 100;
  r.innerHTML = end.toFixed(2);
}
