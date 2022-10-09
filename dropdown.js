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
