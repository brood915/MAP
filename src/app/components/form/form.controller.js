import angular from 'angular';

export default class FormCtrl {
  constructor(booksService, $timeout, $scope) {
    this.booksService = booksService;
    this.newBook = {};
    this.$timeout = $timeout;
    this.$scope = $scope;
  }
  handleClick() {
    let newBook = angular.copy(this.newBook); //deep copy to remove model-view binding
    this.booksService.books.push(newBook);

    this.$timeout(() => { //to reset the form to remove warning msgs + empty the inputs
      this.newBook = {};
      this.$scope.myForm.$setPristine(); 
    }); 
  }
}

 FormCtrl.$inject = ['booksService', '$timeout' ,'$scope']; 