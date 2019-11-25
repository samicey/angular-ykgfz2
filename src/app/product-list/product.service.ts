import {Injectable} from '@angular/core';
import {IProduct} from './iproduct';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import{Observable,throwError} from 'rxjs';
import {catchError,tap} from 'rxjs/operators'

@Injectable({
providedIn: 'root'
})

export class ProductService{
  private productUrl = 'https://raw.githubusercontent.com/samicey/angular-ykgfz2/master/src/api/products/products.json';
  constructor(private _http: HttpClient){

  }
getProducts():Observable<IProduct[]>{

  return this._http.get<IProduct[]>(this.productUrl).pipe(
        tap(data=>console.log('All:'+JSON.stringify(data))),
        catchError(this.handleError)
  );
}

private handleError(err: HttpErrorResponse){
  // in a real world app we may send the error to some remote logging infrastructure 
  // instead of just logging to the console
  let errorMessage = '';
  if(err.error instanceof ErrorEvent){
    // Client-side or network error occured, handle it accordingly
    errorMessage = `An error occurred: ${err.error.message}`;
  } else{
    // The backend returned an unsuccessful HttpErrorResponse
    // THe response body may contain a clue to what went wrong
    errorMessage = `Server returned error status ${err.status}, error is: ${err.message}`
  }
  console.log(errorMessage);
  return throwError(errorMessage)
}
}