import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.css']
})
export class FirstTaskComponent implements OnInit {
  tasks;
  constructor(private _http: HttpClient) { }

  ngOnInit() {

    this.getJSONDataAsync("../assets/home_assignment.json").then(data => {
      //using seperate function b/c "this" is out of scope.
      this.setTasks(data)
    })
  };
  //async get json files from 'path'
  //does not assume file location; can return json files from remote or local path
  getJSONDataAsync(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.get(path, { responseType: 'json' }).subscribe(
        res => {
          resolve(res);
        }
      )
    })
  }
  //returns image for current ngfor index
  //hard coded to go to search carousel folder and search for an image between 0-4 based on the amount of tasks.
  getImage(i) {
    return `../../assets/carousel/${i}.jpeg`
  }
  setTasks(data) {
    this.tasks = data;
  }

}
