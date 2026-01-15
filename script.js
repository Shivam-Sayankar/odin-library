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

function addBookToLibrary(title, author, numOfPages, isRead, newUniqueID) {
    const newBook = new Book(title, author, numOfPages, isRead, newUniqueID);
    library.push(newBook);
}


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
    const newUniqueID = crypto.randomUUID();

    addBookToLibrary(
        bookTitleInput.value,
        bookAuthorInput.value,
        bookPagesInput.value,
        isBookRead.checked,
        newUniqueID
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
    newBook.dataset.id = book.uniqueID
    newBook.className = "book"
    newBook.innerHTML = `
        <div class="book-info">
            <div class="book-title">${book.title}</div>
            <div class="book-author">${book.author}</div>
            <div class="book-pages">${book.numOfPages}</div>
        </div> 
        <div class="buttons">
            <button class="book-buttons read-btn ${book.isRead ? "book-is-read" : ""}">read</button>
            <button class="delete-btn book-buttons">remove</button>
        </div>
    `
    bookDisplay.appendChild(newBook)
}

//removing using delegation - event bubbling
bookDisplay.addEventListener('click', (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const currentBook = e.target.parentElement.parentElement
        const bookUniequeID = currentBook.dataset.id
        currentBook.remove()
        library = library.filter(book => book.uniqueID !== bookUniequeID)
    }
})

// toggling read-status
bookDisplay.addEventListener('click', (e) => {
    if (e.target.classList.contains("read-btn")) {
        const bookUniequeID = e.target.parentElement.parentElement.dataset.id

        for (let i = 0; i < library.length; i++) {
            const currentBook = library[i]
            if (currentBook.uniqueID === bookUniequeID) {
                currentBook.toggleReadStatus()
                console.log(currentBook)
                e.target.classList.toggle("book-is-read")
                break
            }
        }

    }
})

Book.prototype.toggleReadStatus = function () {
    this.isRead = !this.isRead
}