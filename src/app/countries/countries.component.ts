import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  readonly ROOT_URL = "https://restcountries.com/v2/";
  countries: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.countries = this.http.get(this.ROOT_URL+"all?fields=name");
  }

}
