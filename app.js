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
const title = document.getElementById('title');
const pages = document.getElementById('pages');

const form = document.getElementById('form');

// save instance 'Book'
const myLibrary = [];

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

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    updateDomLibrary();
    dialog.close();
    form.reset();
    // console.log('1',myLibrary)    //====================================
})

let card;

function addCard() {
    card = document.createElement('div');
    card.classList.add('item');

    const authorValue = document.createElement('div');
    const titleValue = document.createElement('div');
    const pagesValue = document.createElement('div'); 

    authorValue.textContent = author.value;
    titleValue.textContent = title.value;
    pagesValue.textContent = pages.value;

    card.appendChild(authorValue);
    card.appendChild(titleValue);
    card.appendChild(pagesValue);
    workPlace.appendChild(card);
}

function deleteCard() {
    workPlace.removeChild(card);
}

let arrSlice = myLibrary.slice();
function updateDomLibrary() {
    let arrStart = myLibrary;
    if (arrStart.length !== arrSlice.length){
        // workPlace.innerHTML = '';
        console.log('fir',myLibrary);
        console.log('sl', myLibrary.slice());
        addCard();
    } 
    return
}

