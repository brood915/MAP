import angular from 'angular';
import booksDirective from './books.directive';
import '../../../assets/style/bookList.scss';


export default angular.module('booksModule', [])
    .directive('books', booksDirective)
    .name;