// console.log("hk")

let library = [];


// Book constructor
function Book(title, author, numOfPages, isRead, uniqueID) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isRead;
    this.uniqueID = uniqueID;
}

function addBookToLibrary(title, author, numOfPages, isRead) {

    const newUniqueID = crypto.randomUUID();
    const newBook = new Book(title, author, numOfPages, isRead, newUniqueID);

    library.push(newBook);
}

const tempBook = new Book("temp potter", "jk lol", 104, true)
console.log(tempBook)

const addBookButton = document.querySelector("#add-book-btn")
const dialog = document.querySelector('dialog')
const closeDialogButton = document.querySelector("#close-dialog-btn")
const submitButton = document.querySelector("button[type='submit']")
const bookDisplay = document.querySelector("main")

addBookButton.addEventListener("click", () => {
    dialog.showModal()
})

closeDialogButton.addEventListener("click", () => {
    dialog.close()
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    const bookTitleInput = document.querySelector("#book-title-input")
    const bookAuthorInput = document.querySelector("#book-author-input")
    const bookPagesInput = document.querySelector("#book-pages-input")
    const isBookRead = document.querySelector("#book-is-read-input")

    addBookToLibrary(
        bookTitleInput.value,
        bookAuthorInput.value,
        bookPagesInput.value,
        isBookRead.checked
    )

    bookTitleInput.value = ""
    bookAuthorInput.value = ""
    bookPagesInput.value = ""
    isBookRead.checked = false

    dialog.close()

    console.log(library)
    renderNewBook(library[library.length - 1])

})

function renderNewBook(book) {
    const newBook = document.createElement('div')
    newBook.className = "book"
    newBook.innerHTML = `
        <div class="book-info">
            <div class="book-title">${book.title}</div>
            <div class="book-author">${book.author}</div>
            <div class="book-pages">${book.numOfPages}</div>
        </div> 
        <div class="buttons">
            <button class="book-buttons read-btn ${book.isRead ? "read" : "not-read"}">read</button>
            <button class="delete-btn book-buttons ">remove</button>
        </div>
    `
    bookDisplay.appendChild(newBook)
}