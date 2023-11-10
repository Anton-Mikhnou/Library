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
    // updateDomLibrary();
    update(myLibrary)
    dialog.close();
    form.reset();
    console.log('1',myLibrary)    //====================================
    console.log(workPlace)        //====================================
})

let card;

function deleteCard() {
    workPlace.removeChild(card);
}

function deletBookFromLibrary() {
    console.log(myLibrary.indexOf());
}

function addCard() {
    let remove;
    card = document.createElement('div');
    card.classList.add('item');
    
    remove = document.createElement('button')
    remove.classList.add('remove');
    const authorValue = document.createElement('div');
    const titleValue = document.createElement('div');
    const pagesValue = document.createElement('div');

    function value(array) {
        for(let i =0; i < array.length; i++){
            console.log('value:', arr[i].author)
        }
    }

    authorValue.textContent = myLibrary[Book[author.value]];
    titleValue.textContent = myLibrary[Book[title.value]];
    pagesValue.textContent = myLibrary[Book[pages.value]];
    remove.innerText = 'Remove'
    
    card.appendChild(authorValue);
    card.appendChild(titleValue);
    card.appendChild(pagesValue);
    card.appendChild(remove);

    workPlace.appendChild(card);
    remove.addEventListener('click', () => {
        // deleteCard();
        // deletBookFromLibrary();
        // console.log('1',myLibrary) //=======================

    })
}



// let arrSlice = myLibrary.slice();
// function updateDomLibrary() {
//     let arrStart = myLibrary;
//     if (arrStart.length !== arrSlice.length){
//         // workPlace.innerHTML = '';
//         console.log('fir',myLibrary);
//         console.log('sl', myLibrary.slice());
//         addCard();
//     } 
//     return
// }

function update(arr) {
    workPlace.innerHTML = '';
    for (let i = 0; i < arr.length; ++i){
        if (arr.length === 0) {
            return
        } else{
            addCard(arr[i]);
        }
    }
}

// update(myLibrary);

