const input = document.querySelector('.input-name');
const btn = document.querySelector('.button-add');
const nameList = document.querySelector('.name-list');
const ress = document.querySelector('.result-list');
const btnClear = document.querySelectorAll('.btn-clear')

let names = [];

btn.addEventListener('click', () => {
    const li = document.createElement('li');
    const buttonClear = document.createElement('button');
    const iconClear = document.createElement('i');

    li.classList.add('li-name')
    iconClear.classList.add('fa-solid', 'fa-trash', 'icon-clear');
    buttonClear.setAttribute('class', 'btn-clear');
    
    buttonClear.appendChild(iconClear);
    li.appendChild(buttonClear);
    nameList.appendChild(li);
    
    li.innerHTML += input.value;
    names.push(input.value);
    input.value = "";
    input.focus();
});

document.addEventListener('click', (e) => {
    const el = e.target;
    
    if(el.classList.contains('icon-clear')) {
        const btnAtual = el.parentElement;
        btnAtual.parentElement.remove();
        const contentList = btnAtual.parentElement.textContent;
        const indice = names.indexOf(contentList);
        names.splice(indice, 1);
        console.log(names);
    }
})



function sortearAmigo() {
    console.log(names)
}