import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  readonly ROOT_URL = "https://restcountries.com/v2/";
  countries: any;

  constructor(private http: HttpClient) { }

  getAllCountries(){
    this.countries = this.http.get(this.ROOT_URL+"all?fields=name");
    return this.countries;
  }

  getCountryDetail(country: string){
    return this.http.get(this.ROOT_URL + "/name/" + country);
  }
}
