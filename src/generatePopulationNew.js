var rural = Countries.tsunzhou.rural;
var urban = Countries.tsunzhou.urban;
var control = Countries.tsunzhou.control;
var production =
  Countries.tsunzhou.bladedWeapon * Goods.produced.bladedWeapon +
  Countries.tsunzhou.production.polearms * Goods.produced.polearms +
  Countries.tsunzhou.production.rangedWeapons * Goods.produced.rangedWeapons +
  Countries.tsunzhou.production.cheapClothes * Goods.produced.cheapClothes +
  Countries.tsunzhou.production.expensiveClothes *
    Goods.produced.expensiveClothes +
  Countries.tsunzhou.production.jewelry * Goods.produced.jewelry +
  Countries.tsunzhou.production.beer * Goods.produced.beer +
  Countries.tsunzhou.production.wine * Goods.produced.wine +
  Countries.tsunzhou.production.writingMaterials *
    Goods.produced.writingMaterials +
  Countries.tsunzhou.production.pottery * Goods.produced.pottery +
  Countries.tsunzhou.production.shipTackle * Goods.produced.shipTackle +
  Countries.tsunzhou.production.finishedWood * Goods.produced.finishedWood +
  Countries.tsunzhou.production.steel * Goods.produced.finishedWood +
  Countries.tsunzhou.production.heavyArmor * Goods.produced.heavyArmor +
  Countries.tsunzhou.production.mediumArmor * Goods.produced.mediumArmor +
  Countries.tsunzhou.production.lightArmor * Goods.produced.lightArmor;
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
document.getElementById('control').innerHTML = control;
document.getElementById('production').innerHTML = production / 10000;
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
var prod = document.getElementById('production');
var finalProfit = document.getElementById('profit');
var ctlFull = document.getElementById('controlFull');
p.innerHTML = poorTax * 1.1;
m.innerHTML = middleTax * 1.1;
r.innerHTML = richTax * 1.1;
pt.innerHTML = 10;
mt.innerHTML = 10;
rt.innerHTML = 10;
var ptf = document.getElementById('ptf');
var finalTax = (poorTax + middleTax + richTax) * 1.1;
ctlFull.innerHTML = finalTax + Math.floor(production) / 12000;
finalProfit.innerHTML =
  Math.floor((finalTax + Math.floor(production) / 12000) * control * 100) / 100;
var poorTaxFinal = poorTax,
  middleTaxFinal = middleTax,
  richTaxFinal = richTax;
function finalProf() {
  var final =
    poorTaxFinal +
    middleTaxFinal +
    richTaxFinal +
    Math.floor(production) / 12000;
  ctlFull.innerHTML = Math.floor(final * 100) / 100;
  final *= control;
  finalProfit.innerHTML = Math.floor(final * 100) / 100;
}
function poorTaxFix() {
  var val = ptf.value;
  pt.innerHTML = val;
  var end = poorTax + (poorTax * val) / 100;
  poorTaxFinal = end;
  p.innerHTML = Math.floor(end * 100) / 100;
  finalProf();
}
function middleTaxFix() {
  var val = mtf.value;
  mt.innerHTML = val;
  var end = middleTax + (middleTax * val) / 100;
  middleTaxFinal = end;
  m.innerHTML = Math.floor(end * 100) / 100;
  finalProf();
}
function richTaxFix() {
  var val = rtf.value;
  rt.innerHTML = val;
  var end = richTax + (richTax * val) / 100;
  richTaxFinal = end;
  r.innerHTML = Math.floor(end * 100) / 100;
  finalProf();
}
