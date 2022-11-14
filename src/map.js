const regions = new Map()
  .set('nz', 'Нижние Земли')
  .set('sn', 'Снофельт')
  .set('vz', 'Верхние Земли')
  .set('nb', 'Нижний Бамбуг')
  .set('sr', 'Сырантур')
  .set('vb', 'Верхний Бамбуг')
  .set('vd', 'Вадэрд')
  .set('lz', 'Лодогийский залив')
  .set('vm', 'Вельмиссия')
  .set('bm', 'Буйное море')
  .set('rp', 'Рабийские пески')
  .set('ss', 'Старые степи')
  .set('nm', 'Новое море')
  .set('kn', 'Княжества')
  .set('tr', 'Тарк')
  .set('dc', 'Дочехия')
  .set('bv', 'Бават')
  .set('ab', 'Аберката')
  .set('gs', 'Гошар')
  .set('bs', 'Бушар')
  .set('ym', 'Ямотания')
  .set('an', 'Антаковия')
  .set('cz', 'Чжун-Ту')
  .set('kr', 'Корская равнина')
  .set('mp', 'Море призраков')
  .set('nl', 'Низовья Луриниса')
  .set('kl', 'Клиттам')
  .set('dz', 'Джуджух');

document.body.style.zoom = 0.3;
//document.body.style.overflow = 'hidden';
const regionName = document.querySelector('.map-container__region-name');
regions.forEach((name, id) => {
  const region = document.getElementById(id);

  region.addEventListener('mouseenter', () => {
    regionName.style.display = 'block';
    regionName.innerHTML = name;
  });

  region.addEventListener('click', () => {
    regionName.style.display = 'block';
    regionName.innerHTML = name;
  });

  region.addEventListener('mouseleave', () => {
    regionName.style.display = 'none';
  });
});
