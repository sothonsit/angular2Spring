import {Component,Input} from '@angular/core';
import {Headers,Http} from '@angular/http';
import {BookService} from './book.service';
import {BookSearchModel} from './book-search.model'

@Component({
    selector: 'book-search',
    template: `

    <book-add></book-add>
    <div class="form-group">
        <div class="row">
          <div class="col-6 col-md-4">
            <label>FirstName:</label>
            <input type="text" class="form-control" [(ngModel)] ="bookSearchModel.firstName" name="firstName" required>
          </div>
          <div class="col-6 col-md-4">
            <label>LastName:</label>
            <input type="text" class="form-control" [(ngModel)] ="bookSearchModel.lastName" name="lastName" required>
          </div>
          <div class="col-6 col-md-4" style="margin-top:20px">
            <button class="btn btn-primary" (click)="search()">Search</button>
          </div>
        </div>
    </div>
    <book-list></book-list>
    `
})

export  class BookSearchComponent{
  constructor(private http:Http, private bookService:BookService){}

  private bookSearchModel = new BookSearchModel('','',);

  search(){
    this.bookService.searchBook(this.bookSearchModel);
  }
}
