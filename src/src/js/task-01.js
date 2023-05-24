const refs = document.querySelectorAll('#categories > .item');

function numberOfCategories(refs) {
  return console.log(`Number of categories: ${refs.length}`);
}

function titleAndCountOfCategory(refs) {
  return refs.forEach((element) => {
    const titleRef = element.firstElementChild.textContent;
    const numberItemRef = element.lastElementChild.childElementCount;
    console.log(`Category: ${titleRef}`);
    console.log(`Elements: ${numberItemRef}`);
  });
}

numberOfCategories(refs);
titleAndCountOfCategory(refs);
