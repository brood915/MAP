import books from "./bookList.json";


export default class BooksCtrl {
  constructor(booksService) {
    this.booksService = booksService;
    this.bookList = this.booksService.books;
    this.filterValue = '';
    this.uppercase = false;
  }
}

BooksCtrl.$inject = ['booksService'];  