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