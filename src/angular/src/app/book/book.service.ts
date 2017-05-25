import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import {BookListModel} from './book-list.model'
import {BookSearchModel} from './book-search.model'

@Injectable()
export class BookService{
  books : BookListModel[];
  private bookSearch = new BookSearchModel('','');

  constructor(private http:Http){
  /*  this.getBooksList()
        .subscribe(response => this.books = response,
            err => {
                console.log(err);
            }); */

      this.searchBook(this.bookSearch);
  }

  /*  getBooksList(): Observable<BookModel[]> {
        return this.http.get('/get_book')
             .map((res:Response) => res.json() || {})
             .catch((error:any) => Observable.throw(error.json().error || 'Get error'));

    } */

  searchBook(model: BookSearchModel){
    let bodyString = JSON.stringify(model);
    let headers    = new Headers({ 'Content-Type': 'application/json' });
    let options    = new RequestOptions({ headers: headers });

    this.http.post('/search_book',bodyString,options)
      .toPromise()
      .then(response => this.books = response.json())
      .catch(() => console.log('Error Search'));
  }

   addBook(model : BookListModel){
     let bodyString = JSON.stringify(model);
     let headers    = new Headers({ 'Content-Type': 'application/json' });
     let options    = new RequestOptions({ headers: headers });

    this.http.post('/post_book',bodyString,options)
         .toPromise()
         .then(() => this.searchBook(this.bookSearch))
         .catch(() => console.log('Add Error'));

   }

   editBook(model : BookListModel){

     let bodyString = JSON.stringify(model);
     let headers    = new Headers({ 'Content-Type': 'application/json' });
     let options    = new RequestOptions({ headers: headers });

     this.http.put('/put_book/'+`${model.id}`,bodyString,options)
         .toPromise()
         .then(() => this.searchBook(this.bookSearch))
         .catch(() => console.log('Edit Error'));

   }

   deleteBook(id : number){
     let headers    = new Headers({ 'Content-Type': 'application/json' });
     let options    = new RequestOptions({ headers: headers });

     this.http.delete('/del_book/'+`${id}`,options)
        .toPromise()
        .then(() => this.searchBook(this.bookSearch))
        .catch(() => console.log('Delete Error'));

   }
}
