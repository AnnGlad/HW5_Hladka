// function getProductData() {
//   let imgSrc = document.querySelectorAll(".product-img img");
//   let productName = document.querySelectorAll(".product-title a");
//   let ingr = document.getElementsByClassName("product-description");
//   let price = document.getElementsByClassName("price");
//   let arr = [];

//   for (let i = 0; i < imgSrc.length; i++) {
//     let src = imgSrc[i].src;
//     let obj = new Object();
//     obj.src = src;
//     let name = productName[i].innerText;
//     console.log(name);
//     obj.name = name;

//     let ingredients = ingr[i].innerText;
//     console.log(ingredients);
//     obj.ingredients = ingredients;
//     let prodPrice = price[i].innerText;
//     console.log(prodPrice);
//     obj.price = prodPrice;
//     arr.push(obj);
//   }
//   return arr;
// }

let pizzaArr = [

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/picca-ohotnichya-xxl_1542267870257.jpeg",
    name: "Пицца Охотничья XXL",
    ingredients: "Охотничьи колбаски, молочные колбаски, сыр моцарелла, вешенки, шампиньоны, сладкий лук, перец болгарский, соус BBQ, соус маринара, петрушка",
    price: "289 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/picca-ohotnichya_1542267892836.jpeg",
    name: "Пицца Охотничья",
    ingredients: "Охотничьи колбаски, молочные колбаски, сыр моцарелла, вешенки, шампиньоны, сладкий лук, перец болгарский, соус BBQ, соус маринара, петрушка",
    price: "129 грн"
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/karbonara-metrovaya_1566297127558.jpeg",
    name: "Карбонара метровая",
    ingredients: "Сыр моцарелла, ветчина, грудинка, шампиньоны, пармезан, помидоры черри",
    price: "299 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/amerikano-metrovaya_1566296641461.jpeg",
    name: "Американо метровая",
    ingredients: "Соус BBQ, соус маринара, сыр моцарелла, горчица, филе куриное sous-vide, колбаски охотничьи, пепперони, лук конфитюр, кукуруза, перец болгарский",
    price: "339 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/margarita_156706066239.jpeg",
    name: "Маргарита",
    ingredients: "Соус маринара, помидоры, сыр моцарелла, соус песто",
    price: "89 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/karbonara_1567060589165.jpeg",
    name: "Карбонара",
    ingredients: "Сыр моцарелла, ветчина, грудинка, шампиньоны, пармезан, помидоры черри",
    price: "165 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/pollo_1567060914824.jpeg",
    name: "Поло",
    ingredients: "Сыр моцарелла, соус маринара, соус ВВQ, чеснок, ананас, филе куриное sous-vide, перец болгарский",
    price: "135 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/gurmeo_1567060279780.jpeg",
    name: "Гурмео",
    ingredients: "Соус BBQ, филе куриное sous-vide, ветчина, колбаски охотничьи, пеперони, сыр моцарелла, шампиньоны, лук репчатый, петрушка",
    price: "165 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/chetyre-syra_1567059967719.jpeg",
    name: "Четыре сыра",
    ingredients: "Сливочный соус, сыр моцарелла, сыр дор-блю, сыр чеддер, груша, сыр пармезан, орех грецкий",
    price: "149 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/amerikano_1567060058936.jpeg",
    name: "Американо",
    ingredients: "Соус BBQ, соус маринара, сыр моцарелла, горчица, филе куриное sous-vide, колбаски охотничьи, пепперони, конфитюр из лука, кукуруза, перец болгарский",
    price: "149 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/kalcone_1567060522194.jpeg",
    name: "Кальцоне",
    ingredients: "Соус маринара, сыр моцарелла, шампиньоны, сыр дор-блю, помидоры, ветчина, соус песто",
    price: "119 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/bavarskaya_1567060134436.jpeg",
    name: "Баварская",
    ingredients: "Сыр моцарелла, соус маринара, колбаски мюнхенские, колбаски охотничьи, огурец соленый, горчица, лук репчатый, лук зеленый",
    price: "145 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/diablo_1567060435236.jpeg",
    name: "Диабло",
    ingredients: "Сыр моцарелла, пепперони, перец чили, перец болгарский, лук репчатый, соус ВВQ,соус чили, петрушка",
    price: "159 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/ovoshchnaya_1567060751874.jpeg",
    name: "Овощная",
    ingredients: "Баклажан, вешенки, перец болгарский, помидоры, соус песто, соус маринара",
    price: "95 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/bavarskaya-metrovaya_156629673225.jpeg",
    name: "Баварская метровая",
    ingredients: "Сыр моцарелла, соус маринара, колбаски мюнхенские, колбаски охотничьи, огурец соленый, горчица, лук репчатый, лук зеленый",
    price: "319 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/berluskoni-metrovaya_1566296807287.jpeg",
    name: "Берлускони метровая",
    ingredients: "Сливочный соус из белых грибов, сыр моцарелла, сыр дор-блю, пармезан, шампиньоны, вешенки, соус чесночный, масло трюфельное, петрушка",
    price: "299 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/gurmeo-metrovaya_1566296981221.jpeg",
    name: "Гурмео метровая",
    ingredients: "Соус BBQ, филе куриное sous-vide, ветчина, колбаски охотничьи, пепперони, сыр моцарелла, шампиньоны, лук репчатый, петрушка",
    price: "329 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/diablo-metrovaya_1566297055552.jpeg",
    name: "Диабло метровая",
    ingredients: "Сыр моцарелла, пепперони, перец чили, перец болгарский, лук репчатый, соус ВВQ, соус шрирачи, петрушка",
    price: "319 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/polo-metrovaya_1566297194328.jpeg",
    name: "Поло метровая",
    ingredients: "Сыр моцарелла, соус маринара, соус BBQ, чеснок, ананас, филе куриное sous-vide, перец болгарский",
    price: "289 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/berluskoni_1567060209678.jpeg",
    name: "Берлускони",
    ingredients: "Сливочный соус из белых грибов, сыр моцарелла, сыр дор-блю, пармезан, шампиньоны, вешенки, соус чесночный, масло трюфельное, петрушка",
    price: "149 грн",
  },

  {
    src: "https://mafia.ua/storage/editor/fotos/480x0/picca-ot-shefa_1567060849842.jpeg",
    name: "Пицца от шефа",
    ingredients: "Говядина sous-vide, черный камамбер, шампиньоны, томат, болгарский перец, руккола, пармезан, сыр моцарелла, каперсы, и соус маринара",
    price: "159 грн",
  },
]

let gridView = false;
let listView = false;
let filterClicked = false;

function fixIngridients() {
  for (let i = 0; i < pizzaArr.length; i++) {
    let ingrs = pizzaArr[i].ingredients.split(",");
    for (let j = 0; j < ingrs.length; j++) {
      ingrs[j] = ingrs[j].trim();
    }
    pizzaArr[i].ingredients = ingrs;
  }
}
fixIngridients();

function addRandomCalories() {
  for (let i = 0; i < pizzaArr.length; i++) {
    let calories = 900 + Math.floor(Math.random() * 400);
    if (pizzaArr[i].ingredients.includes("колбаски") || pizzaArr[i].ingredients.includes("ветчина")) {
      calories += Math.floor(Math.random() * 300);
    }
    if (pizzaArr[i].name.includes("метровая") || pizzaArr[i].name.includes("XXL")) {
      calories += 800 + Math.floor(Math.random() * 300);
    }
    pizzaArr[i].calories = calories;
  }
}
addRandomCalories();

let pizzaArrCopy = [];
for (let i = 0; i < pizzaArr.length; i++) {
  let copy = Object.assign({}, pizzaArr[i]);
  pizzaArrCopy.push(copy);
}
// console.log(pizzaArrCopy);


// Modal logic
let modal = document.getElementById("modal-window");
function askContView() {
  modal.classList.add("active");
  let close = modal.querySelector(".modal-close");
  close.addEventListener("click", function () {
    modal.classList.remove("active");
  });
}
function checkModalAnswer() {
  let grid = document.getElementById("gridRadio");
  let list = document.getElementById("listRadio");
  if (grid.checked) {
    gridView = true;
    listView = false;
    console.log("gridView: " + gridView + " , listView: " + listView);
    modal.classList.remove("active");
    generateMainContent();
    // checkIfRendered();

  }
  else if (list.checked) {
    listView = true;
    gridView = false;
    console.log("gridView: " + gridView + " , listView: " + listView);
    modal.classList.remove("active");
    generateMainContent();
    // checkIfRendered();
  } else {
    let form = modal.querySelector("form");
    if (form.querySelector(".err-msg") === null) {
      let p = document.createElement("p");
      p.classList.add("err-msg");
      p.innerText = "Выберете один из вариантов";
      form.appendChild(p);
    }
  }

}

let okBtn = modal.querySelector("#subm");
okBtn.addEventListener("click", function () {
  checkModalAnswer();
});
window.addEventListener("load", askContView);



//Grid
let isContentRendered = false;
let mainCont = document.querySelector(".main-content");
let container = createteElWithClass("div", "container");
let prodView = createteElWithClass("div", "product-view");

function generateMainContent() {

  // let mainCont = document.querySelector(".main-content");
  // let container = createteElWithClass("div", "container");
  let prodViewSwitch = createteElWithClass("div", "product-view-swtcher");
  let btnGrid = createteElWithClass("button", "btn");
  btnGrid.setAttribute("id", "btnGrid");
  btnGrid.innerText = "Grid view";

  let btnList = createteElWithClass("button", "btn");
  btnList.setAttribute("id", "btnList");
  btnList.innerText = "List view";

  prodViewSwitch.append(btnGrid, btnList);
  // let prodView = createteElWithClass("div", "product-view");
  container.appendChild(prodViewSwitch);
  console.log(gridView);



  generateView(pizzaArr);
  if (isContentRendered) {
    if (gridView) {
      filterListeners();
    }
    if (listView) {
      sortingListeners();
    }
  }



}
function createteElWithClass(el, cls) {
  let elem = document.createElement(el);
  elem.classList.add(cls);
  return elem;
}

let elsForFiltering = ["ветчина", "помидоры", "шампиньоны"];
/*Переписать вот эту штуцю: */
function generateView(arr) {

  if (gridView) {
    let ViewRow = createteElWithClass("div", "row");
    prodView.classList.add("product-grid");
    ViewRow.append(generateFilterBlock(), generateGridGoods(pizzaArr));
    prodView.append(ViewRow);
  }

  if (listView) {
    prodView.classList.add("product-list");
    generateSelectSort();
    prodView.appendChild(generateListGoods(pizzaArr));
  }

  container.appendChild(prodView);
  mainCont.appendChild(container);
  isContentRendered = true;

}

function generateFilterBlock() {
  let filterCol = createteElWithClass("div", "col-2");
  let filter = createteElWithClass("div", "prod-filter");
  let filterP = document.createElement("p");
  filterP.innerText = "Фильтр";
  let filterForm = createteElWithClass("form", "filter-form");
  for (i = 0; i < elsForFiltering.length; i++) {
    let legend = document.createElement("legend");
    let label = document.createElement("label");
    let input = document.createElement("input");
    label.setAttribute("for", "ingr" + (i + 1));
    label.innerText = elsForFiltering[i];
    input.id = "ingr" + (i + 1);
    input.setAttribute("type", "checkbox");
    input.setAttribute("value", elsForFiltering[i]);
    legend.append(label, input);
    filterForm.appendChild(legend);
  }
  let btnClear = createteElWithClass("button", "btn");
  btnClear.setAttribute("type", "button");
  btnClear.id = "btnClear";
  btnClear.innerText = "Очистить";
  let btnApply = createteElWithClass("button", "btn");
  btnApply.setAttribute("type", "button");
  btnApply.id = "btnApply";
  btnApply.innerText = "Применить";
  filterForm.append(btnClear, btnApply);
  filter.append(filterP, filterForm);
  filterCol.appendChild(filter);
  return filterCol;
}
function generateGridGoods(arr) {
  let ViewCol = createteElWithClass("div", "col-10");
  ViewCol.id = "prod-view"
  let row = createteElWithClass("div", "row");
  ViewCol.appendChild(row);
  for (let i = 0; i < arr.length; i++) {
    let col = createteElWithClass("div", "col-3");

    if (i % 4 === 0) {
      row = createteElWithClass("div", "row");

      ViewCol.appendChild(row);
    }

    let prodHolder = createteElWithClass("div", "prod-holder");
    let prodImg = createteElWithClass("div", "prod-img");
    let imgA = document.createElement("a");
    imgA.setAttribute("href", "#");
    let img = document.createElement("img");
    img.src = arr[i].src;
    imgA.appendChild(img);
    prodImg.appendChild(imgA);
    let prodProp = createteElWithClass("div", "prod-prop");
    let prodName = createteElWithClass("div", "prod-name");
    let prodNameA = document.createElement("a");
    prodNameA.setAttribute("href", "#");
    prodNameA.textContent = arr[i].name;
    prodName.appendChild(prodNameA);
    let prodKkal = createteElWithClass("div", "prod-kkal");
    prodKkal.textContent = arr[i].calories + " кал.";

    let prodDescr = createteElWithClass("div", "prod-descr");
    for (let j = 0; j < arr[i].ingredients.length; j++) {
      prodDescr.innerHTML += arr[i].ingredients[j] + ", ";
      if (j === arr[i].ingredients.length - 1) {
        prodDescr.innerHTML += arr[i].ingredients[j];
      }
    }

    let prodPrice = createteElWithClass("div", "prod-price");
    prodPrice.innerText = arr[i].price;
    prodProp.append(prodName, prodDescr, prodKkal, prodPrice);
    prodHolder.append(prodImg, prodProp);
    col.appendChild(prodHolder);
    row.appendChild(col);
  }
  return ViewCol;
}

function generateSelectSort() {
  let selectWrap = createteElWithClass("div", "select-wrap");
  let selectHolder = createteElWithClass("div", "select-holder");
  let select = document.createElement("select");
  select.id = "sorting";
  let optDef = document.createElement("option");
  optDef.setAttribute("value", "default");
  optDef.innerText = "По умолчанию";
  optDef.selected = true;
  let optPriceFromLow = document.createElement("option");
  optPriceFromLow.setAttribute("value", "priceFromLow");
  optPriceFromLow.innerText = "По возрастанию цены";
  let optPriceFromHigh = document.createElement("option");
  optPriceFromHigh.setAttribute("value", "priceFromHigh");
  optPriceFromHigh.innerText = "По уменьшению цены";
  let optNameAlphabet = document.createElement("option");
  optNameAlphabet.setAttribute("value", "nameAlphabet");
  optNameAlphabet.innerText = "По алфавиту";
  select.append(optDef, optPriceFromLow, optPriceFromHigh, optNameAlphabet);
  selectHolder.appendChild(select);
  selectWrap.appendChild(selectHolder);
  container.append(selectWrap);
}
function generateListGoods(arr) {
  let prodViewHolder = document.createElement("div");
  prodViewHolder.id = "prod-view";
  for (let i = 0; i < arr.length; i++) {
    let prodHolder = createteElWithClass("div", "prod-holder");
    let prodImg = createteElWithClass("div", "prod-img");
    let img = document.createElement("img");
    img.src = "img/pizza-ic.png";
    prodImg.appendChild(img);
    let prodProp = createteElWithClass("div", "prod-prop");
    let prodName = createteElWithClass("div", "prod-name");
    let prodNameA = document.createElement("a");
    prodNameA.setAttribute("href", "#");
    prodNameA.textContent = arr[i].name;
    prodName.appendChild(prodNameA);
    let prodPrice = createteElWithClass("div", "prod-price");
    prodPrice.innerText = arr[i].price;
    prodProp.append(prodName, prodPrice)
    prodHolder.append(prodImg, prodProp);
    prodViewHolder.appendChild(prodHolder);
  }
  return prodViewHolder;
}

let filteredArr;
function filterListeners() {
  let btnApply = document.getElementById("btnApply");
  let btnClear = document.getElementById("btnClear");
  let filterForm = document.querySelector(".filter-form");
  let inputs = filterForm.getElementsByTagName("input");
  let checkedInputs = [];

  function findCheckedInputs() {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        let checkedInput = inputs[i].value;
        checkedInputs.push(checkedInput);
      }
    }
    if (checkedInputs.length == 0) {
      alert("Выберете хотя бы одно из значений");
    }
    // console.log(checkedInputs);
  }


  function filterArr(arr) {
    filteredArr = arr.filter(function (pizza) {
      let result;
      for (i = 0; i < checkedInputs.length; i++) {
        let findEl = checkedInputs[i];
        for (k = 0; k < pizza.ingredients.length; k++) {
          let pizzaIngr = pizza.ingredients[k];
          result = (findEl === pizzaIngr);
          if (result) {
            break;
          }
        }
        return result;
      }


    });
    console.log(filteredArr);

  }

  btnApply.addEventListener("click", function () {
    findCheckedInputs();

    if (checkedInputs.length != 0) {
      filterArr(pizzaArr);
      let prodView = document.getElementById("prod-view");
      prodView.remove();
      let targetRow = document.querySelector(".product-grid > .row");
      targetRow.appendChild(generateGridGoods(filteredArr));
      filterClicked = true;
      checkedInputs = [];
      filteredArr = [];
    }

  });
  btnClear.addEventListener("click", function () {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        inputs[i].checked = false;
      }
    }
    filterClicked = false;
    checkedInputs = [];
    filteredArr = [];
    let prodView = document.getElementById("prod-view");
    prodView.remove();
    let targetRow = document.querySelector(".product-grid > .row");
    targetRow.appendChild(generateGridGoods(pizzaArr));
  });

}


function comparePriceFromLow(a, b) {
  a = parseInt(a.price);
  b = parseInt(b.price);
  return a - b;
}
function comparePriceFromHigh(a, b) {
  a = parseInt(a.price);
  b = parseInt(b.price);
  return b - a;
}
function compareName(a, b) {
  a = a.name;
  b = b.name;
  if (a < b) { return -1; }
  if (a > b) { return 1; }
  return 0;
}

function sortingListeners() {
  let select = document.getElementById("sorting");
  select.addEventListener("change", function () {
    let prodView = document.getElementById("prod-view");
    let targetRow = document.querySelector(".product-list");

    switch (this.value) {
      case "priceFromLow":
        prodView.remove();
        pizzaArr.sort(comparePriceFromLow);
        targetRow.appendChild(generateListGoods(pizzaArr));
        break;

      case "priceFromHigh":
        prodView.remove();
        pizzaArr.sort(comparePriceFromHigh);
        targetRow.appendChild(generateListGoods(pizzaArr));
        break;

      case "nameAlphabet":
        prodView.remove();
        pizzaArr.sort(compareName);
        targetRow.appendChild(generateListGoods(pizzaArr));
        break;

      case "default":
        prodView.remove();
        targetRow.appendChild(generateListGoods(pizzaArrCopy));
        break;
    }
  });
}



