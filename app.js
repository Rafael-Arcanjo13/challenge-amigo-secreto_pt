const input = document.querySelector('.input-name');
const btn = document.querySelector('.button-add');
const nameList = document.querySelector('.name-list');
const ress = document.querySelector('result-list');

btn.addEventListener('click', () => {
    const li = document.createElement('li');
    const buttonClear = document.createElement('button')
    nameList.appendChild(li);
    nameList.appendChild(buttonClear);


    li.innerHTML += input.value;
});