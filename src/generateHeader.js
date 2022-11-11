// Шаблон для хедера
const header = document.createElement('header');
header.classList.add('header');
header.innerHTML = `<div class="header-left"><div class="header__logo">
<a href="/">
  <img src="/src/logo.png" />
</a>
</div>
<ul class="header__nav">
<li>
  <div class="dropdown">
    <button class="dropdown__button">Хоатрия</button>
    <div class="dropdown__content">
      <a href="/countries/festehus.html">Фёстехус</a>
      <a href="/countries/barvaria.html">Барвария</a>
      <a href="/countries/brabermain.html">Брабермейн</a>
      <a href="/countries/faen.html">Фаен</a>
      <a href="/countries/gobania.html">Гобания</a>
      <a href="/countries/syrantur.html">Сырантур</a>
    </div>
  </div>
</li>
<li>
  <div class="dropdown">
    <button class="dropdown__button">Западный Ламоран</button>
    <div class="dropdown__content">
      <a href="/countries/duliGou.html">Дули Гоу</a>
      <a href="/countries/igtanGou.html">Игтянь Гоу</a>
      <a href="/countries/tsunzhou.html">Цуньжоу</a>
      <a href="/countries/suidal.html">Суидал</a>
      <a href="/countries/turchiny.html">Турчиния</a>
      <a href="/countries/yamoto.html">Ямотания</a>
      <a href="/countries/sardary.html">Сардары</a>
      <a href="/countries/celtania.html">Кельтания</a>
    </div>
  </div>
</li>
<li>
  <div class="dropdown">
    <button class="dropdown__button">Восточный Ламоран</button>
    <div class="dropdown__content">
      <a href="/countries/lodogia.html">Лодогия</a>
      <a href="/countries/velmisia.html">Вельмиссия</a>
      <a href="/countries/vochia.html">Вочия</a>
      <a href="/countries/belorabia.html">Белорабия</a>
      <a href="/countries/edildor.html">Эдильдор</a>
    </div>
  </div>
</li>
<li>
  <div class="dropdown">
    <button class="dropdown__button">Южный Ламоран</button>
    <div class="dropdown__content">
      <a href="/countries/kehia.html">Кехия</a>
      <a href="/countries/kanakia.html">Канакия</a>
    </div>
  </div>
</li>
<li>
  <div class="dropdown">
    <button class="dropdown__button">Тиграния</button>
    <div class="dropdown__content">
      <a href="/countries/shushia.html">Шушия</a>
      <a href="/countries/eshar.html">Ешар</a>
      <a href="/countries/threeCityUnion.html">Союз трех городов</a>
    </div>
  </div>
</li>
<li>
  <div class="dropdown">
    <button class="dropdown__button">Раби</button>
    <div class="dropdown__content">
      <a href="/countries/scorpio.html">Скорпионы</a>
      <a href="/countries/nurkenia.html">Нуркения</a>
      <a href="/countries/scorobey.html">Скоробеи</a>
      <a href="/countries/samat.html">Самат</a>
      <a href="/countries/doszhan.html">Досжан</a>
    </div>
  </div>
</li>
<li>
<div class="dropdown"><a href="trade.html">Торговая карта</a></div>
</li>
</ul></div><div class="header-right"></div>`;
document.body.prepend(header);

// Выкидывание дропдауна при наведении
document.querySelectorAll('.dropdown').forEach((dropdown) => {
  dropdown.addEventListener('mouseenter', (event) => {
    event.target.lastElementChild.style.display = 'block';
    event.target.firstElementChild.classList.add('dropdown--selected__button');
  });
  dropdown.addEventListener('mouseleave', (event) => {
    event.target.lastElementChild.style.display = 'none';
    event.target.firstElementChild.classList.remove(
      'dropdown--selected__button'
    );
  });
});
