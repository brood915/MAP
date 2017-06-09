export default class BooksCtrl {
  constructor(booksService) {
    this.booksService = booksService;
    this.bookList = this.booksService.books;
    this.filterValue = '';
    this.uppercase = false;
  }

  sorting (index) {
    this.bookList.slice(index,1);
  }
}

BooksCtrl.$inject = ['booksService'];  