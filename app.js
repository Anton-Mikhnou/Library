const dialog = document.querySelector('dialog');
const plus = document.querySelector('.plus');
const close = document.querySelector('.close');

plus.addEventListener('click', () => {
    dialog.showModal();
})

close.addEventListener('click', () => {
    dialog.close();
})

const workPlace = document.querySelector('.workPlace');
const author = document.getElementById('author');
const bookTitle = document.getElementById('title');
const pages = document.getElementById('pages');

const form = document.getElementById('form');

// save instance 'Book'
let myLibrary = [];

// create 'Book'
function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

// create instance 'Book'
function addBookToLibrary() {
    myLibrary.push(new Book(author.value, title.value, pages.value))
}

function deleteCard() {
    workPlace.removeChild(card);
}

function findElemInArray(arr, indexEl) {
    return arr.filter((elem, i) => i !== parseInt(indexEl.id));
}

let remove;

function addCard(arr) {
    
    let card = document.createElement('div');
    card.classList.add('item');
    remove = document.createElement('button');
    remove.classList.add('remove');
    
    let index = remove;
    
    let authorValue = document.createElement('div');
    let titleValue = document.createElement('div');
    let pagesValue = document.createElement('div');
    
    authorValue.textContent = arr.author;
    titleValue.textContent = arr.title;
    pagesValue.textContent = arr.pages;
    
    remove.innerText = 'Remove';
    
    card.appendChild(authorValue);
    card.appendChild(titleValue);
    card.appendChild(pagesValue);
    card.appendChild(remove);
    
    remove.addEventListener('click', () => {
        myLibrary = findElemInArray(myLibrary, index);
        update(myLibrary);
    });
    workPlace.appendChild(card);
}

function update(arr) {
    workPlace.innerHTML = '';
    for (let i = 0; i < arr.length; i++){
        addCard(arr[i]);
        remove.id = `${[i]}`;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    update(myLibrary);
    dialog.close();
    form.reset();
})