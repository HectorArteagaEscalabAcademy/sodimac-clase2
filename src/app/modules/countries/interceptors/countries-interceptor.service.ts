import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesInterceptorService implements HttpInterceptor {

  private readonly token:string = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfZG9taW5vIjoiT21hciBMb3phbm8vRElOTy9ESVZDRU0iLCJjb2Rfc2FwIjoiMDEwMTEwNTkiLCJpZF91c3VhcmlvIjo3MiwiaXNfYXByb2JhZG9yX2RhdGFzZW5zaWJsZSI6Ik4iLCJlamVjdXRpdm8iOnsiaWRfZWplY3V0aXZvIjoiODIiLCJub21icmVfZWplY3V0aXZvIjoiT01BUiBGRUxJUEUgTE9aQU5PIEFMVkFSRVoiLCJhY3Rpdm9fZWplY3V0aXZvIjoiMSIsImlkX3N1cGVydmlzb3JfY29tZXJjaWFsIjoiMTYiLCJjb2RfdGlwb19lamVjdXRpdm8iOjIsIm5vbV90aXBvX2VqZWN1dGl2byI6IkFzZXNvciBUw6ljbmljbyBDb21lcmNpYWwiLCJjb2RfdGlwb19lamVjdXRpdm9fY2F0ZWdvcmlhIjoxfSwic3VwZXJ2aXNvciI6bnVsbCwiamVmZV9jb21lcmNpYWwiOm51bGwsImdlcmVudGVfY29tZXJjaWFsIjpudWxsLCJyb2xlIjp7InJvbGVfaWQiOjIsInJvbGVfZGVzY3JpcHRpb24iOiJFSkVDVVRJVk8gQVRDIn0sInBlcm1pc3Npb24iOlsiKiJdfSwiaWF0IjoxNjU4ODQ2MzA1LCJleHAiOjE2NTk0NTExMDV9.IxuYANaUvmaMUQ1y4m0thSMUHFmxxDl4m7dIvRY4iml83g8i8ibXP9kIYL1nGZebXwISDRMlYk16QuUV1lA61I-8CVs6bMqAoAFh9R3TTeVqsIkpi8FOflHhLAxZTX15VsYozMiAA8Zxm-l1ycCBvStrut8kC4w7TdVMdn0Talgi1GmJ8byGAqitdKLvLK-riaDpIup9VP0IwyOGWZlsqlC9aVtmBQZQTCuITRxImx0aJUdLV-Xf_HZf079uUs_ZNrXKBbUSAFYoFZhtOl9NRhyNNUqzQ224ReEBwGyzsmttRI9uCbgkVqFBd-bxzfmdfFO544K0yYPqkCyxF-ByELkUxu4OB6O42oUQcOiHV83PomVnbbfvUUkRr2mhmLJ8_AwAaeL63on3aLUHPtukulwMD9FvytJDmCaQpOWYTeNFkKNcyrbWZRj973orULfPUyX9nkeqp9rVwOdkk5cKiwo__CJYErCTS0X4yLL1soR8ye7gmo0smsEP3TckfMEKYa5O5kskmMebdE23_SpcIOpW4VPu1DE4rXA0tXlSBJlLqtAGcbM8bbXwHp6C-fQXUgcZmC39q_adC5w7zusYQhU3CNnEdXYqIrEUPlTJV6-QRztHsNhNEwOhF-xHqwVOCa71DFJTzkEzCPcmSsFZ3tp1L3dAc__riP10oJSI9t4';
  private readonly ulrApi:string = environment.apiRestCountries;
  private readonly urlExlude:string = 'assets/data/menu.json';

  constructor() { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let request = req;

    if(this.token && req.url.search(this.urlExlude) === -1){
        request = req.clone({
          url: `${this.ulrApi}${req.url}`,
          setHeaders:{
            authorization : `Bearer ${this.token}`
          }
        })
    }
    
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  }

  private handleError(err: HttpErrorResponse){

    if(err.status === 0){
      console.log("error de interceptor");
    }

    return throwError(() => err);
  }
  
}

export const CountriesInterceptorServiceProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: CountriesInterceptorService, multi: true }
]
