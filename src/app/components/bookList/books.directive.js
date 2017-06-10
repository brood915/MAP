
import controller from './books.controller';

export default function booksDirective () {
  return {
    template: require('./books.html'),
    controller,
    controllerAs: 'books',
    replace:true,
    scope: {}
  }
};


