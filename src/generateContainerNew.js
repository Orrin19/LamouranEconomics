// Шаблон для контейнера
const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);
const country = document.body.dataset.country;

const flag = document.createElement('div');
flag.classList.add('header__flag');
flag.innerHTML = `<img src="/flags/${country}.png" width="100px">`;

const h1 = document.createElement('h1');
h1.innerHTML = document.title;

const chartContainer = document.createElement('div');
chartContainer.classList.add('container__chart');
chartContainer.id = 'chartContainer';

const table = document.createElement('table');
table.classList.add('container__table');
table.innerHTML = `<colgroup>
<col class="grey" />
<col class="green" />
<col class="blue" />
<col class="blue" />
</colgroup>
<tr>
<td>
    Население
</td>
<td>
    <p id="pep" style="display: inline;"></p>K
</td>
<td>
    <p id="male" style="display: inline;"></p> тыс. муж
</td>
<td>
    <p id="female" style="display: inline;"></p> тыс. жен
</td>
</tr>
<tr>
<td>
    Уровнь урбанизации
</td>
<td>
    <p id="urb" style="display: inline;"></p>%
</td>
<td>
    <p id="urbpep" style="display: inline;"></p> тыс. горожан
</td>
<td>
    <p id="rurpep" style="display: inline;"></p> тыс. селчан
</td>
</tr>
<tr>
<td>
    Эффективность госаппарата (Max 80%)
</td>
<td>
    <p id="gos" style="display: inline;"></p>%
</td>
<td>
    Ползунок &darr;
</td>
<td>
    Налогая ставка &darr;
</td>
</tr>
<tr>
<td>
    Налоги с бедного населения
</td>
<td>
    <p id="poor" style="display: inline;"></p>K$
</td>
<td>
    <input type="range" min="10" max="50" step="1" id="ptf" oninput="poorTaxFix()" value="10"></p>
</td>
<td>
    <p id="poorTaxPercent" style="display: inline;"></p>%
</td>
</tr>
<tr>
<td>
    Налоги со среднего класса
</td>
<td>
    <p id="middle" style="display: inline;"></p>K$
</td>
<td>
    <input type="range" min="10" max="50" step="1" id="mtf" oninput="middleTaxFix()" value="10"></p>
</td>
<td>
    <p id="middleTaxPercent" style="display: inline;"></p>%
</td>
</tr>

<tr>
<td>
    Налоги с богатого класса
</td>
<td>
    <p id="rich" style="display: inline;"></p>K$
</td>
<td>
    <input type="range" min="10" max="50" step="1" id="rtf" oninput="richTaxFix()" value="10"></p>
</td>
<td>
    <p id="richTaxPercent" style="display: inline;"></p> %
</td>
</tr>
<tr>
<td>
    Доходы от производства
</td>
<td>
    <p id="production" style="display: inline;"></p>K$
</td>
</tr>
<tr>
<td>
    Контроль (автономия)
</td>
<td>
    <p id="control" style="display: inline;"></p>
</td>
<td>
    При 100% контроле
</td>
<td>
    <p id="controlFull" style="display: inline;"></p>K$
</td>
</tr>
<tr>
<td>
    Итоговый доход
</td>
<td>
    <p id="profit" style="display: inline;"></p>K$
</td>
</tr>`;

header.lastChild.append(flag);
container.append(h1);
container.append(chartContainer);
container.append(table);
