export default class BooksCtrl {
  constructor(booksService) {
    this.booksService = booksService;
    this.bookList = this.booksService.books;
    this.filterValue = '';
    this.filterSelected = '';
    this.uppercase = false;
    this.selectOptions = ['title', 'author', 'date'];
  }
}

BooksCtrl.$inject = ['booksService'];  