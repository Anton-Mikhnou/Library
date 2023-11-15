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
function Book (author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    // this.status = status;
}

// create instance 'Book'
function addBookToLibrary () {
    
    myLibrary.push(new Book(author.value, title.value, pages.value, read.value))
}

function deleteCard () {
    workPlace.removeChild(card);
}

function findElemInArray (arr, indexEl) {
    return arr.filter((elem, i) => i !== parseInt(indexEl.id));
}

function checkButton() {
    let radio = document.querySelectorAll('.stus');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value; // возвращаем значение выбранной радиокнопки
        }
    }
}

let remove;

function addCard (arr) {
    
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
    let readR;
    readR = document.createElement('button');
    readR.classList.add('readR'); 
    readR.innerText = 'Read'    

    readR.addEventListener('click', () => {
        if (lighthouse.classList.contains('lighthouseNoRead')) {
            lighthouse.classList.remove('lighthouseNoRead');
            lighthouse.classList.add('lighthouseRead');
            readR.innerText = 'No Read';
        } else {
            lighthouse.classList.remove('lighthouseRead');
            lighthouse.classList.add('lighthouseNoRead');
            readR.innerText = 'Read';
        }
    })
    
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
    card.appendChild(readR);
    card.appendChild(remove);
    remove.addEventListener('click', () => {
        myLibrary = findElemInArray(myLibrary, index);
        update(myLibrary);
    });
    workPlace.appendChild(card);
}



function update (arr) {
    workPlace.innerHTML = '';
    for (let i = 0; i < arr.length; i++){
        addCard (arr[i]);
        remove.id = `${[i]}`;
    }
}

form.addEventListener ('submit', (e) => {
    e.preventDefault();
    const status = checkButton(); // получаем текущий статус
    addBookToLibrary(status)
    // addBookToLibrary();
    // checkButton()
    update(myLibrary);
    dialog.close();
    form.reset();
    console.log(myLibrary)
})