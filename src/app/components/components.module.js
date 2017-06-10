import angular from 'angular';
import booksModule from './bookList/books.module';
import formModule from './form/form.module';

export default angular
    .module('componentsModule', [booksModule, formModule])
    .name;