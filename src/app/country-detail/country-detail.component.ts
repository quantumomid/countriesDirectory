import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  country: string;
  data: any;

  constructor(private route: ActivatedRoute, private countries: CountriesService) {
    this.country = route.snapshot.params["countryName"];
  }

  ngOnInit(): void {
    this.data = this.countries.getCountryDetail(this.country);
  }

}
