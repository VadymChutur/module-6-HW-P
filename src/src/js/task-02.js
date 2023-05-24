const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = document.querySelector('#ingredients');

function makeIngedientsList(element) {
  const itemRef = document.createElement('li');
  itemRef.classList.add('item');
  itemRef.textContent = element;

  return itemRef;
}

const elements = ingredients.map(makeIngedientsList);

refs.append(...elements);
