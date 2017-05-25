import {Component, Input} from '@angular/core';
import {BookService} from './book.service';
import {BookListModel} from './book-list.model'
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'book-box',
    template: `
      <div class="panel panel-default">
          <div class="panel-heading">{{book.firstName}} {{book.lastName}}</div>
          <div class="panel-body">
              {{book.comment}}
          </div>
          <div class="panel-footer">
              <button class="btn btn-info" (click)="modal.open()"><span class="glyphicon glyphicon-edit"></span></button>
              <button class="btn btn-danger" (click)="deleteComment(book.id)"><span class="glyphicon glyphicon-remove"></span></button>
          </div>
      </div>

      <modal #modal>
          <modal-header>
              <h4 class="modal-title">Create !</h4>
          </modal-header>
          <modal-body>
              <div class="form-group">
                  <label>FirstName:</label>
                  <input autofocus type="text" class="form-control" [(ngModel)] ="BookListModel.firstName" name="firstName" required>
                  <label>LastName:</label>
                  <input type="text" class="form-control" [(ngModel)] ="BookListModel.lastName" name="lastName" required>
              </div>

              <div class="form-group">
                <label>Comment:</label>
                <textarea class="form-control" rows="5" [(ngModel)] ="BookListModel.comment"></textarea>
              </div>
          </modal-body>
          <modal-footer>
              <button type="button" class="btn btn-default" data-dismiss="modal" (click)="modal.dismiss()">Cancel</button>
              <button type="button" class="btn btn-primary" (click)="submit(book.id)">Ok</button>
          </modal-footer>
      </modal>
    `
})

export class BookBoxComponent{
  constructor(private bookService:BookService){
  }

 @Input() book: BookListModel;
 private BookListModel = new BookListModel('','','','');

  submit(id:string){
    this.BookListModel.id = id;
    this.bookService.editBook(this.BookListModel);
   }

  deleteComment(id:number) {
    this.bookService.deleteBook(id);
  }

}
