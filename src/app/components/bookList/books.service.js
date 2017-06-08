import angular from 'angular';
import books from "./bookList.json";


export default class BooksService {
  constructor() {
    this.books = books;
  }
}
