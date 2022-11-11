// Шаблон для контейнера
const container = document.createElement('div');
container.classList.add('container', 'container--main');
document.body.append(container);

const chartContainer = document.createElement('div');
chartContainer.classList.add('container__chart');
chartContainer.id = 'chartContainer';

const h1 = document.createElement('h1');
h1.innerHTML = 'Население Ламорана';

container.append(h1, chartContainer);
