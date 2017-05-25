import { Component, ViewChild} from '@angular/core';
import {BookService} from './book.service';
import {BookListModel} from './book-list.model'
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


@Component({
    selector: 'book-add',
    template: `
    <button class="btn btn-success" (click)="modal.open()"><span class="glyphicon glyphicon-plus"></span></button>

    <modal #modal>
    <form #modalForm="ngForm">
        <modal-header>
            <h4 class="modal-title">Create !</h4>
        </modal-header>
        <modal-body>
            <div class="form-group">
                <label>FirstName:</label>
                <input autofocus type="text" class="form-control" [(ngModel)] ="bookListModel.firstName" name="firstName" required>
                <label>LastName:</label>
                <input type="text" class="form-control" [(ngModel)] ="bookListModel.lastName" name="lastName" required>
            </div>

            <div class="form-group">
              <label>Comment:</label>
              <textarea class="form-control" rows="5" [(ngModel)] ="bookListModel.comment" name="comment" required></textarea>
            </div>
        </modal-body>
        <modal-footer>
            <button type="button" class="btn btn-default" data-dismiss="modal" (click)="modal.dismiss()">Cancel</button>
            <button type="button" class="btn btn-primary" [disabled]="!modalForm.valid" (click)="submit()">Ok</button>
        </modal-footer>
        </form>
    </modal>
    `
})

export  class BookAddComponent{
  constructor(private bookService:BookService){}

  private bookListModel = new BookListModel('','','','');

  @ViewChild('modal')
  modal: ModalComponent;

  submit(){
    if(this.bookListModel){
      this.bookService.addBook(this.bookListModel);
      this.modal.close();
    }
  }
}
