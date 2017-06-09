import angular from 'angular';
import booksModule from './bookList/books.module';
import formModule from './form/form.module';
import trashModule from "./trash/trash.module";

export default angular.module('componentsModule', [booksModule, formModule, trashModule])
    .name;