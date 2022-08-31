 let selectors = document.querySelector(".custom-select");

 let selector = document.createElement('div')
 selector.classList.add('select-selected');

 selectors.appendChild(selector)

 let selectItems =  document.createElement('div');
selectItems.classList.add('select-items', 'select-hide');

const prodPrice = document.querySelector('.product__price');
const prodPriceSave =document.querySelector('.product__price-save');
const prodCent = document.querySelector('.product__price-cent');
const prodCentSave = document.querySelector('.product__price-save-cent');

selectors.appendChild(selectItems)

let selOpt = selectors.parentNode.getElementsByTagName("select")[0]
for(el of selOpt.options) {
  let selOptDiv = document.createElement('div');
  if(selector.innerHTML == '') {
    selector.innerHTML = el.innerHTML;
  }
  else {
    selOptDiv.innerHTML = el.innerHTML;
    console.log(selOptDiv)
    selectItems.appendChild(selOptDiv)
  }

}
selectors.addEventListener('click', () => {
  selectItems.classList.toggle('select-hide')
  selector.classList.toggle("select-arrow-active")
})
selectItems.addEventListener('click', (e) => {
  
  selector.innerHTML = e.target.innerHTML;
  let oldActive = document.getElementsByClassName("same-as-selected");
  for (let i = 0; i < oldActive.length; i++) {
    oldActive[i].classList.remove("same-as-selected");
  }
    e.target.classList.add('same-as-selected')
    prodPrice.innerHTML =  `${selector.innerHTML.split(' ')[4].split('.')[0]} <span class="product__price-cent">.99</span>`;
    prodPriceSave.innerHTML = `${selector.innerHTML.split(' £')[1].split('.')[0]-1} <span class="product__price-save-cent">.99</span>`;
})


