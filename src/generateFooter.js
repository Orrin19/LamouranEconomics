// Шаблон для футера
const footer = document.createElement('footer');
footer.classList.add('footer');
footer.innerHTML = `<ul class="footer__nav">
<li>
    <a href="/index.html">Домой</a>
</li>
<li>
    <a href="https://lamoraun.fandom.com/ru/wiki/">Вики</a>
</li>
<li>
    <a href="https://discordserver.info/664491015914258452/invite">Дискорд</a>
</li>
</ul>
<p class="footer__text">© 2022 РВПИ Ламоран</p>`;
document.body.append(footer);

if (document.body.clientHeight <= window.innerHeight) {
  footer.style.bottom = '0';
  footer.style.position = 'absolute';
}
