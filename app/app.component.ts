import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div>
    <h1 [innerHTML]="title"></h1>
    <img [src]="logo">
    <input type="text" [value]="name">
    <div>{{name}}</div> 
  </div>
  `
})

export class AppComponent {
  title: string;
  logo: string;
  name: string;

  constructor() {
    this.title = 'Ulti Ang';
    this.logo = 'img/logo.svg';
    this.name = 'PradeeP';
  }
}
