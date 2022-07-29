import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { countriesAll } from '../interfaces/countries.interface';

@Injectable()

export class CountriesService {

  constructor(private http:HttpClient) { }

  public getCountriesAllSubscribe():Observable<countriesAll[]> {
    const all: string = `all`;
    return this.http.get<countriesAll[]>(all);
  }

  public getCountriesAllObservable():Observable<countriesAll[]> {
    const all: string = `all`;
    return this.http.get<countriesAll[]>(all);
  }
}
