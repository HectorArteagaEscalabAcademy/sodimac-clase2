import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries.component';
import { ViewCountriesComponent } from './components/view-countries/view-countries.component';
import { PageNotFoundComponent } from 'src/app/shared/components/page-no-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', component: CountriesComponent,
    children: [
      { path: '', component: ViewCountriesComponent },
      { path: '404', component: PageNotFoundComponent },
      { path: '**', redirectTo: '404'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
