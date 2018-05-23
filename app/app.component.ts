import { Component } from "@angular/core";

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
}
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    <h3>Airline Passengers - [class]</h3>
    <ul>
      <li *ngFor="let psgr of passengers; let i = index">
      <span 
        class="status"
        [class.checked-in]="psgr.checkedIn">
      </span>
        {{ i }} - {{ psgr.fullname }}
      </li>
    </ul>
    <!-- -->
    <hr>
    <h3>Airline Passengers - [ngClass]</h3>    
    <ul>
      <li *ngFor="let psgr of passengers; let i = index">
      <span 
        class="status"
        [ngClass]="{
          'checked-in': psgr.checkedIn,
          'checked-out': !psgr.checkedIn
        }">
      </span>
        {{ i }} - {{ psgr.fullname }}
      </li>
    </ul>
    <!-- -->
    <hr>
    <h3>Airline Passengers - [style]</h3>    
    <ul>
      <li *ngFor="let psgr of passengers; let i = index">
      <span 
        class="status"
        [style.backgroundColor]="(psgr.checkedIn ? '#2ecc71': '#c0392b')">
      </span>
        {{ i }} - {{ psgr.fullname }}
      </li>
    </ul>
    <!-- -->
    <hr>
    <h3>Airline Passengers - [ngStyle]</h3>    
    <ul>
      <li *ngFor="let psgr of passengers; let i = index">
      <span 
        class="status"
        [ngStyle]="{
          backgroundColor: (psgr.checkedIn ? '#2ecc71': '#c0392b')
        }">
      </span>
        {{ i }} - {{ psgr.fullname }}
      </li>
    </ul>


  </div>
  `
})

export class AppComponent {
  
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false
  }];
}
