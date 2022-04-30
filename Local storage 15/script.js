//we take the inf from local storage 
const list = localStorage.getItem('list') ? localStorage.getItem('list').split(',') : [];
//we use this to add all the checkboxes from the local storage of the html 
const listItems = () => {
  let listHTML = document.querySelector('.plates');

  listHTML.innerHTML = '';

  list.forEach((element, index) => {
    listHTML.innerHTML += `
      <li>
        <input id="${element + index.toString()}" type="checkbox" />
        <label for="${element + index.toString()}">${element}</label>
      </li>`
  });
};
//we attach the event to the form and we call the listItems
const init = () => {
  const addItemForm = document.querySelector('.add-items');

  listItems();

  addItemForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = document.querySelector('.text-input').value;

    list.push(text);

    localStorage.setItem('list', list);

    listItems();
  });
};

init();