import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {
  private licenseUrl = 'http://localhost:50266/api/licenses/list';

  constructor(private http: HttpClient) {}

  getLicenses(): Observable<any[]>{
    return this.http.get<any[]>(this.licenseUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occured: ${err.error.message}`;
    } else {
        errorMessage = `Server returned code ${err.status}, error message is: ${err.message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
