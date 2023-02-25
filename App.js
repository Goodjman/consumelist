//accamulate duration of time

//import Modal from "./src/script/Modal.js";
const aFilms = [
  'The Lord of the Rings',
  'Pulp Fiction',
  'Inception',
  'Fight Club',
  'Forrest Gump',
  'Star Wars',
  'The Green Mile',
];
const aFilmsLater = [
  'Liar Liar',
  'Yes man',
  'Django Unchained',
  'Army of Thieves',
  'Scarface',
];
const aSerials = [
  'Breakin Bad',
  'Better Call Soul',
  'Wednesday',
  'The Walking Dead',
  'Flash',
  'Green Arrow',
];
const aSerialsLater = [
  'Rings of Power',
  'Boba Fett',
  'The Sandman',
  'Brooklyn nine-nine',
  'Peaky Blinders',
];
const aAnime = [
  'Demon Slayer',
  'Code Geass',
  'Death Note',
  'RE:Zero',
  'HunterxHunter',
  'Stein Gate',
  'Lookism',
];
const aAnimeLater = [
  'The Ancient Magus Bride',
  'Land of the Lustrous',
  'We Never Learn: Bokuben',
  'Monthly Girls Nozaki-kun',
  'SWORDGAI',
  'Life Lessons with Uramichi-Oniisan',
];
const aBooks = [
  'The Hobbit',
  'The Picture of Dorian Gray',
  'The Importance of Being Earnest',
  'The Happy Prince',
  'The Witcher',
  'Salome',
];
const aBooksLater = [
  'Филипп Перри - Как не сойти с ума',
  'Келли Макгонигал - Сила воли',
  'Грег МакКеон - Эссенциализм',
  'Филипп Зимбардо - Как побороть застенчивость',
  'Джек Шафер - Включаем обаяние',
  'Максим Ильяхов - Ясно Понятно ',
  'Максим Ильяхов - Пиши, сокращай',
  'Роберт Энтони - Главные секреты абсолютной уверенности в себе',
];
const aManhua = [
  'Martial pick',
  'Solo levelling',
  'Omniscient Reader',
  'The Beginning After The End',
  'The World After The End',
  'I got a mythical class item',
  'A Player who can`t level up',
];
const aManhuaLater = [
  'Boku no Hero Academia',
  'Tokyo Revengers',
  'Yao Shen Ji',
]; //queryselector best ui!!!
const itemlist = document.getElementById('item'); //leftcolumn
const wishlist = document.getElementById('wish'); //rightcolumn
const select = document.getElementsByClassName('titles')[0]; //selectlist

const App = () => {
  const modal = document.getElementById('myModal');
  const btn = document.getElementById('addInstance');
  const wbtn = document.getElementById('addWishInstance');
  const span = document.getElementsByClassName('close')[0];
  let list = new Array(); // = aFilms;
  let laterlist = new Array(); //aFilmsLater;
  let seen = true; // if true to left column
  window.addEventListener('load', () => showSelectedList(list, laterlist));
  select.addEventListener('change', () => showSelectedList(list, laterlist));
  btn.onclick = function () {
    modal.style.display = 'block';
    seen = true;
  };
  wbtn.onclick = function () {
    modal.style.display = 'block';
    seen = false;
  };
  span.onclick = function () {
    modal.style.display = 'none';
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }; ///delete function

  // When the user submits the form, get the input value and do something with it (in this example, we're just alerting it)
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    [list, laterlist] = updateSelectedLists(list, laterlist);
    console.log(list, laterlist);
    if (seen) {
      list.push(name);
    } else laterlist.push(name);
    console.log(list, laterlist);
    showSelectedList(list, laterlist);
    modal.style.display = 'none';
  });
};
function updateSelectedLists(list, laterlist) {
  document.querySelector('#itemtitle').innerHTML = ' Consumed ' + select.value;
  document.querySelector('#wishtitle').innerHTML =
    select.value + '  to consume later';
  switch (select.value) {
    case 'Films':
      list = aFilms;
      laterlist = aFilmsLater;
      break;
    case 'Serials':
      list = aSerials;
      laterlist = aSerialsLater;
      break;
    case 'Anime':
      list = aAnime;
      laterlist = aAnimeLater;
      break;
    case 'Books':
      list = aBooks;
      laterlist = aBooksLater;
      break;
    case 'Manhua':
      list = aManhua;
      laterlist = aManhuaLater;
      break;
  }
  return [list, laterlist];
}
function showSelectedList(list, laterlist) {
  [list, laterlist] = updateSelectedLists(list, laterlist);
  renderList(list, itemlist);
  renderList(laterlist, wishlist);
}
function renderList(list, target) {
  let stringOfItems = '';
  list.forEach((el) => {
    stringOfItems += `<li>${el}</li>`;
  });
  target.innerHTML = stringOfItems;
}
App();
/*const selection = document.getElementById('titles');
selection.addEventListener('onselect', ()=>{
  console.log('Selected');
  App();
});

const selectListFunc = (selected)=>{
  switch("a" + selected) {
    case 'aFilms':
      return aFilms;
      case 'aSerilas':
        return aSerials;
        case 'aAnime':
          return aAnime;
          case 'aBooks':
            return aBooks;
            case 'aManhua':
              return aManhua;
    default:
      return 'Smth went wrong, Cant get name of list'
  }
}

const App= ()=>{
  const selected = selection.value;
  const itemlist = document.getElementById("item");
  itemlist.innerText = selected;
  selectedlist=selectListFunc(selected);
    for (let i = 0; i < selectedlist.length; i++) {
    const el = document.createElement("li");
    el.textContent = selectedlist[i];
    itemlist.appendChild(el);
  }

}

App();
*/

/* 
const itemlist = document.getElementById("itemlist");
  console.dir(item+'item-div');
  console.dir(itemlist);

  */
