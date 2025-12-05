import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio1',
  imports: [],
  templateUrl: './inicio1.html',
  styleUrl: './inicio1.scss',
})
export class Inicio1 {
  darkmode: boolean = false;

  toggleDarkMode() {
    this.darkmode = !this.darkmode;
  }
}
