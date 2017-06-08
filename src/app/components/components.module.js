import angular from 'angular';
import booksModule from './bookList/books.module';

export default angular.module('componentsModule', [booksModule])
    .name;