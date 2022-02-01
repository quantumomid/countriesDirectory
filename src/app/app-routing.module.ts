import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "explore", component: CountriesComponent },
  { path: "countries/:countryName", component: CountryDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
