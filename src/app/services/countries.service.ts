import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  url: string = 'http://northwind.servicestack.net/customers.json';
  constructor(private http: HttpClient) { }
  get() {
    let list: object[];
    let cities: string[];
    return this.http.get(this.url).pipe(map(response => {
      //returning only cities and countries for comfort and readability, although it is possibly inferior performance-wise
      return response['Customers'].map(customer => {
        return { city: customer.City, country: customer.Country }
      })
    })
    );
  }
}
