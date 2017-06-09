import angular from 'angular';
import booksDirective from './books.directive';
import '../../../assets/style/bookList.scss';
import booksService from './books.service';
import dragAndDrop from './dnD/dnD.module';


export default angular.module('booksModule', [dragAndDrop])
    .directive('books', booksDirective)
    .service('booksService', booksService)
    .name;





