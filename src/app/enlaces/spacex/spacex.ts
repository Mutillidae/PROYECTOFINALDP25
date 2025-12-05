import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-spacex',
  imports: [],
  templateUrl: './spacex.html',
  styleUrl: './spacex.scss',
})
export class Spacex {

  public dataFirebase: any;
  private httpClient = inject(HttpClient);
  constructor() {}

  ngOnInit() {
    this.getFirebaseData();
  }

  getFirebaseData() {
    this.httpClient.get('https://examenfinal25dp-default-rtdb.firebaseio.com/properties.json').subscribe((data) => {
      this.dataFirebase = data;
      console.log(data);
    });
  }


  
}