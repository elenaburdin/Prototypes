// Constructor
function Book(title, author, year) {
    this.title = title,
        this.author = author,
        this.year = year;

    // this.getSummary = function () {
    //     return `${this.title} was written by ${this.author} in ${this.year};`
    // }
}

// Get Summary prototype
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year};`
}

// second prototype
// getAge
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

// When we manipulate the data
// Revise / Change the year
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}


// Instatiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');
const book3 = new Book('Book Three', 'John Smith', '2022');

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());

// In proto will be getSummary
// console.log(book2);


// console.log(book2.getAge());
// console.log(book2);
// book2.revise('2023');
// console.log(book2);




