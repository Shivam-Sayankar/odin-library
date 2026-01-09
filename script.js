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