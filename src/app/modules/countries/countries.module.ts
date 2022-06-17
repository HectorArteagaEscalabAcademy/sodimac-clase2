import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewCountriesComponent } from './components/view-countries/view-countries.component';

@NgModule({
  declarations: [
    CountriesComponent,
    ViewCountriesComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }
