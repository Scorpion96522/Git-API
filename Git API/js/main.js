const mainEl = document.querySelector('.main');

const formEl =document.createElement('form');
formEl.classList.add('search');
formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputsValue = Object.fromEntries( new FormData(e.target));
    const response = await fetch(`
    https://api.github.com/users/${inputsValue.name}
    `);

    console.log(response)
})

const inputEl = document.createElement('input');
inputEl.classList.add('search-input');
inputEl.setAttribute('name', 'name');

const searchButtonEl = document.createElement('button');
searchButtonEl.classList.add('search-button');
searchButtonEl.setAttribute('type', 'submit');
searchButtonEl.innerHTML = "Поиск";

formEl.appendChild(inputEl);
formEl.appendChild(searchButtonEl);
mainEl.appendChild(formEl);

