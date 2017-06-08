import angular from 'angular';

export default class FormCtrl {
  constructor(booksService) {
    this.booksService = booksService;
    this.newBook = {};
  }
  handleClick() {
    let newBook = angular.copy(this.newBook); //deep copy to remove model-view binding
    this.booksService.books.push(newBook);
    this.newBook = {};
  }
}

 FormCtrl.$inject = ['booksService']; 