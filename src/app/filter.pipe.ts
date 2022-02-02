import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // the first parameter is what the pipe is being actually applied to - i.e. 
  // when we use actual pipe therefore no need to actually pass the first parameter
  transform(countries: any, inputTerm: any): any {
    // check if search term is undefined
    if (inputTerm === undefined) return countries;

    return countries.filter((country: any) => country.name.toLowerCase().includes(inputTerm.toLowerCase()));
  }

}
