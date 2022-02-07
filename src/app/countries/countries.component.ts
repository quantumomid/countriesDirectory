import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  providers: [CountriesService],
})
export class CountriesComponent implements OnInit {
  inputTerm: string = "";
  countriesData: any;

  constructor(private countries: CountriesService) { }

  ngOnInit(): void {
    this.countriesData = this.countries.getAllCountries();
  }

}
