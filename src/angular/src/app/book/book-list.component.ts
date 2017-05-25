import {Component,Input} from '@angular/core';
import {BookService} from './book.service';

@Component({
    selector: 'book-list',
    template: `
      <book-box
          *ngFor="let book of bookService.books"
          [book]="book">
      </book-box>
    `
})

export  class BookListComponent{
  constructor(private bookService:BookService){}
}
