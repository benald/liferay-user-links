import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Link } from '../shared/link';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // HttpClient API get() method => Fetch link
  getLink(id): Observable<Link> {
    return this.http.get<Link>(this.apiURL + '/user-links/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getLinks(): Observable<Link> {
    return this.http.get<Link>(this.apiURL + '/user-links')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  updateLink(id, link): Observable<Link> {
    return this.http.put<Link>(this.apiURL + '/user-links/' + id, JSON.stringify(link), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  deleteLink(id) {
    return this.http.delete<Link>(this.apiURL + '/user-links/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  createLink(link): Observable<Link> {
    return this.http.post<Link>(this.apiURL + '/user-links', JSON.stringify(link), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
