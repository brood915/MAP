import books from "./bookList.json";


export default class BooksCtrl {
  constructor($scope) {
    this.$scope = $scope;
    this.bookList = books;
    this.filterValue = '';

  }

 
  
  
}

BooksCtrl.$inject = ['$scope'];  