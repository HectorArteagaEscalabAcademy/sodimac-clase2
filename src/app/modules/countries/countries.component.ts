import { Component, OnInit } from '@angular/core';
import { countriesAll } from './interfaces/countries.interface';
import { CountriesService } from './services/countries.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  //public countriesALL:countriesAll[] = [];
  public countriesAllSubscribe!:countriesAll[];
  public countriesAllObservable$!:Observable<countriesAll[]>;

  constructor(private countriesService:CountriesService) { }

  ngOnInit(): void {
    this.getCountriesAllSubscribe();
    this.getCountriesAllObservable();
  }

  private getCountriesAllSubscribe(){
    //this.countriesService.getCountriesAll().subscribe(request => this.countriesALL = request);

    this.countriesService.getCountriesAllSubscribe().subscribe(request => {
      this.countriesAllSubscribe = request;
    });

  }

  private getCountriesAllObservable(){
   this.countriesAllObservable$ = this.countriesService.getCountriesAllObservable();
  }

}
