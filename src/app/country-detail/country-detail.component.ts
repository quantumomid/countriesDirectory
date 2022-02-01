import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  country: string;
  data: any;
  readonly ROOT_URL = "https://restcountries.com/v2/name/";

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.country = route.snapshot.params["countryName"];
  }

  ngOnInit(): void {
    this.data = this.http.get(this.ROOT_URL+this.country);
  }

}
