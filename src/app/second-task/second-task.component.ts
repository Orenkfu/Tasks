import { map } from 'rxjs/operators';
import { Location } from './../models/location';
import { CountriesService } from './../services/countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.css']
})
export class SecondTaskComponent implements OnInit {
  locations;
  constructor(private countriesService: CountriesService) {
  }

  getAllCountries(): any {
    this.countriesService.get().subscribe(resp => {
      var countries = {};
      for (const i in resp) {
        const elem = resp[i];
        const key = elem.country;
        let cities = countries[key];
        //initialize null cities
        if (cities == null) {
          cities = [];
          //and push the city
          cities.push(elem.city);
          countries[key] = cities; // Construct dynamic object
        }
        else {
          cities = countries[key];
          if (!cities.includes(elem.city))
            cities.push(elem.city);
        }
      }
      const cities = Object.values(countries);
      const countriesKeys = Object.keys(countries);
      console.log('values', cities);
      console.log('keys', countriesKeys);
      this.locations = [];
      for (let index = 0; index < countriesKeys.length; index++) {
        const country = countriesKeys[index];
        const city = cities[index];
        this.locations.push({ country: country, cities: city });
      }
      console.log('finalcountries', this.locations)

    })
  }
  log() {
    console.log(this.locations);
  }

  ngOnInit() {
    this.getAllCountries();
  }


}
