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
    update(myLibrary);
    dialog.close();
    form.reset();
    console.log('1',myLibrary)    //====================================
    console.log(workPlace)        //====================================
})


function deleteCard() {
    workPlace.removeChild(card);
}

function deletBookFromLibrary() {
    console.log(myLibrary.indexOf());
}

// function addCard() {
    
//     let card;
//     let remove;
//     card = document.createElement('div');
//     card.classList.add('item');
    
//     remove = document.createElement('button')
//     remove.classList.add('remove');
//     for(let i = 0; i < myLibrary.length; i++){
//         const authorValue = document.createElement('div');
//         const titleValue = document.createElement('div');
//         const pagesValue = document.createElement('div');

//         authorValue.textContent = myLibrary[i].author;
//         titleValue.textContent = myLibrary[i].title;
//         pagesValue.textContent = myLibrary[i].pages;
//     //
        
        
//     //
//         remove.innerText = 'Remove'
        
//         card.appendChild(authorValue);
//         card.appendChild(titleValue);
//         card.appendChild(pagesValue);
//         card.appendChild(remove);
    
//         remove.addEventListener('click', () => {
//             // deleteCard();
//             // deletBookFromLibrary();
//             // console.log('1',myLibrary) //=======================
//         })
//         workPlace.appendChild(card);
//     }
// }

function addCard(arr) {

    let card = document.createElement('div');
    card.classList.add('item');
    
    let remove = document.createElement('button');
    remove.classList.add('remove');

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
        workPlace.removeChild(card);
        deletBookFromLibrary();
        
        console.log('1', myLibrary);
    });

    workPlace.appendChild(card);
}

function update(arr) {
    workPlace.innerHTML = '';
    for (let i = 0; i < arr.length; i++){
        addCard(arr[i]);
    }
}

// update(myLibrary);



// if(arr.author === author && arr.title === title && arr.pages === pages){
//     let arr1 = arr.splice()
//     let arr2 = arr.splice()

// }