// console.log("hk")

let library = [
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        numOfPages: 104,
        isRead: true,
        uniqueID: 123
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        numOfPages: 108,
        isRead: true,
        uniqueID: 124
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        numOfPages: 108,
        isRead: true,
        uniqueID: 125
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        isRead: false,
        uniqueID: 126
    }
];


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

})