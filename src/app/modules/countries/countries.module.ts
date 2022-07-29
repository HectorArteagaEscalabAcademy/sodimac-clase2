import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewCountriesComponent } from './components/view-countries/view-countries.component';
import { CountriesService } from './services/countries.service';
import { CountriesInterceptorServiceProviders } from './interceptors/countries-interceptor.service';

@NgModule({
  declarations: [
    CountriesComponent,
    ViewCountriesComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers:[
    CountriesService,
    CountriesInterceptorServiceProviders
  ]
})
export class CountriesModule { }
