import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  providers: [LoggingService],
})
export class CountriesComponent implements OnInit {
  inputTerm: string = "";
  
  readonly ROOT_URL = "https://restcountries.com/v2/";
  // Countries now space api - https://countriesnow.space/api/v0.1/countries/iso
  countries: any;

  constructor(private http: HttpClient, private logger: LoggingService) { }

  logIt(){
    this.logger.log();
  }

  ngOnInit(): void {
    this.countries = this.http.get(this.ROOT_URL+"all?fields=name");
    this.logIt();
  }

}
