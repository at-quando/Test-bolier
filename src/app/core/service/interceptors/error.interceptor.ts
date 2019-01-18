
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError(error => {
          return this.errorHandler(error);
        })
      );
  }

  /**
   * Handle the error on the observable
   * @method errorHandler
   * @param  {any}        err Error information from failed request
   */
  errorHandler(err: any) {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 401) {
        // remove current token
        // update logger
        // and redirect to the login route
        // basically what logout does
        this.auth.logout();
      }
    }

    // Always give back the error for subscriber.
    return observableThrowError(err);
  }
}
