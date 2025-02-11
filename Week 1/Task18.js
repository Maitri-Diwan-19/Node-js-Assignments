//Create an object called book with properties title, author, and pages.
// Add a method called displayInfo to the object, which logs a message using the properties to display information
//  about the book. Instantiate the object with sample values and call the displayInfo method.

const book = {
  title: "",
  author: "",
  pages: 0,

  displayInfo: function () {
    console.log(
      `The book ${this.title} is authored by ${this.author} and has ${this.pages} pages`
    );
  },
};

book.title = "Harry Potter";
book.author = "J.K.Rowling";
book.pages = 500;

book.displayInfo();
