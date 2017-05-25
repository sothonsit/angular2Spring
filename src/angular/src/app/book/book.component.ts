import {Component, OnInit} from '@angular/core';
import {BookService} from './book.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h1>{{appName}}</h1>
        </div>
        <div class="panel-body">
          <book-search></book-search>
        </div>
      </div>
    </div>
  </div>
  <p>

  `
})

export class BookComponent {
  appName = 'Books List';
  constructor(private bookService: BookService){}
}
