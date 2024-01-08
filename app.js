const dialog = document.querySelector('dialog');
const plus = document.querySelector('.plus');
const close = document.querySelector('.close');

plus.addEventListener('click', () => {
    dialog.showModal();
});

close.addEventListener('click', () => {
    dialog.close();
});

const workPlace = document.querySelector('.workPlace');
const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');
const pagesInput = document.getElementById('pages');
const readRadio = document.getElementById('read');
const notReadYetRadio = document.getElementById('not_read_yet');

const form = document.getElementById('form');

// save instance 'Book'
let myLibrary = [];

// create 'Book'
class Book {
    constructor (author, title, pages, status) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.status = status;
    }
}

// create instance 'Book'
function addBookToLibrary() {
    let status = readRadio.checked ? 'read' : 'not_read_yet';
    myLibrary.push(new Book(authorInput.value, titleInput.value, pagesInput.value, status));
}

function findElemInArray(arr, indexEl) {
    return arr.filter((elem, i) => i !== parseInt(indexEl.id));
}

let remove

function addCard(arr) {
    let card = document.createElement('div');
    card.classList.add('item');

    let lighthouseContainer = document.createElement('div');
    lighthouseContainer.classList.add('lighthouseContainer');

    let lighthouse = document.createElement('div');
    lighthouse.classList.add('lighthouseNoRead');

    if (arr.status === 'read') {
        lighthouse.classList.remove('lighthouseNoRead');
        lighthouse.classList.add('lighthouseRead');
    }

    lighthouseContainer.appendChild(lighthouse);

    remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerText = 'Remove';
    
    let readBtn = document.createElement('button');
    readBtn.classList.add('readBtn');
    readBtn.innerText = arr.status === 'read' ? 'No Read' : 'Read';

    readBtn.addEventListener('click', () => {
        if (lighthouse.classList.contains('lighthouseNoRead')) {
            lighthouse.classList.remove('lighthouseNoRead');
            lighthouse.classList.add('lighthouseRead');
            readBtn.innerText = 'Do Not Read';
        } else {
            lighthouse.classList.remove('lighthouseRead');
            lighthouse.classList.add('lighthouseNoRead');
            readBtn.innerText = 'Read';
        }
    });

    let index = remove;

    let authorValue = document.createElement('div');
    let titleValue = document.createElement('div');
    let pagesValue = document.createElement('div');

    authorValue.textContent = arr.author;
    titleValue.textContent = arr.title;
    pagesValue.textContent = arr.pages;

    card.appendChild(lighthouseContainer);
    card.appendChild(authorValue);
    card.appendChild(titleValue);
    card.appendChild(pagesValue);
    card.appendChild(readBtn);
    card.appendChild(remove);

    remove.addEventListener('click', () => {
        myLibrary = findElemInArray(myLibrary, index);
        update(myLibrary);
    });

    workPlace.appendChild(card);
}

function update(arr) {
    workPlace.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        addCard(arr[i]);
        if (remove) {
            remove.id = `${[i]}`;
        }
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    update(myLibrary);
    dialog.close();
    form.reset();
});
