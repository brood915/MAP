import angular from 'angular';
import booksDirective from './books.directive';
import '../../../assets/style/bookList.scss';
import booksService from './books.service';


export default angular.module('booksModule', [])
    .directive('books', booksDirective)
    .service('booksService', booksService)
    .name;