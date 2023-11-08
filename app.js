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

function addCard() {
    const card = document.createElement('div');
    card.textContent = author.value;
    card.classList.add('item');
    workPlace.appendChild(card);
}

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addCard();
    dialog.close();
    addBookToLibrary()
    console.log('1',myLibrary)
    form.reset();
})

const myLibrary = [];

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

function addBookToLibrary() {
    myLibrary.push(new Book(author.value, title. value, pages.value))
}
