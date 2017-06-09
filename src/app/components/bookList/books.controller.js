export default class BooksCtrl {
  constructor(booksService, $scope) {
    this.booksService = booksService;
    this.bookList = this.booksService.books;
    this.filterValue = '';
    this.uppercase = false;
    this.$scope = $scope;
     this.$scope.$watch('bookList', function(){console.log('haha')})
  }


}

BooksCtrl.$inject = ['booksService' , "$scope"];  