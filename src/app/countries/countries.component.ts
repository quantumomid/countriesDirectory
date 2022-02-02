import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  inputTerm: string = "";
  
  readonly ROOT_URL = "https://restcountries.com/v2/";
  // Countries now space api - https://countriesnow.space/api/v0.1/countries/iso
  countries: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.countries = this.http.get(this.ROOT_URL+"all?fields=name");
  }

}
