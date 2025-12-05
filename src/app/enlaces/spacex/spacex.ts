import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-spacex',
  imports: [],
  templateUrl: './spacex.html',
  styleUrl: './spacex.scss',
})
export class Spacex {

  private httpClient = inject(HttpClient);
  constructor() {}

  ngOnInit() {}

  getData() {
    return this.httpClient.get('https://examenfinal25dp-default-rtdb.firebaseio.com/properties');
  }
}
