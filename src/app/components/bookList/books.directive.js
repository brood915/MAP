import angular from 'angular';
import controller from './books.controller';

export default function books_directive () {
  return {
    template: require('./books.html'),
    controller,
    controllerAs: 'books'
  }
};


