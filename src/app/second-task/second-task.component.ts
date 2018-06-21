import { Location } from './../models/location';
import { CountriesService } from './../services/countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.css']
})
export class SecondTaskComponent implements OnInit {
  locations = [];

  constructor(private countriesService: CountriesService) {
  }

  getAllCountries(): any {
    this.countriesService.get().subscribe(input => {
      /*
      In an actual project this code should be extracted to an external function to be reusable, testable, and maintainable.
      I highly suspect there is a more performant way to implement this logic, but within the timeframe I focused on keeping it concise and readable.
      */
      const result = input.reduce((accum: Location[], current: { country: string, city: string }, index) => {
        //occurs once: accum starts as {}
        if (!(accum instanceof Array)) {
          accum = [{ country: current.country, cities: [current.city] }];
        }
        //checks for duplicate on the country property of accum array
        if (!(accum.find((location) => location.country == input[index].country))) {
          accum.push({ country: current.country, cities: [current.city] });
        } else {
          const country = accum.find((location) => location.country == input[index].country)
          //checks for duplicate on the cities array of current country
          if (!country.cities.includes(current.city)) {
            const i = accum.indexOf(country);
            accum[i].cities.push(current.city);
          }
        } return accum;
      });
      this.locations = result;

    });
  }

  ngOnInit() {
    this.getAllCountries();
  }


}
