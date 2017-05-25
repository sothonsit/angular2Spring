import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/book-list.component';
import {BookAddComponent} from './book/book-add.component';
import {BookBoxComponent} from './book/book-box.component';
import {BookSearchComponent} from './book/book-search.component';

import {BookService} from './book/book.service';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';


@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    BookAddComponent,
    BookBoxComponent,
    BookSearchComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2Bs3ModalModule,
    BootstrapModalModule
  ],
  providers: [BookService],
  bootstrap: [BookComponent]
})
export class AppModule { }
