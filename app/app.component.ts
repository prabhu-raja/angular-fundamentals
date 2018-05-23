import { Component } from "@angular/core";

interface Passenger {
  id         : number,
  fullname   : string,
  checkedIn  : boolean,
  checkInDate: number | null,
  children   : Child[] | null
}

interface Child {
  name: string,
  age : number
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

        <!--<p>{{psgr | json}}</p>-->

        <div class="date">
          Check in date: {{psgr.checkInDate ? (psgr.checkInDate | date:'yMMMMd') : 'Not Checked in'}}
        </div>

        <div class="children">
          Children: {{psgr.children?.length || 0}}
        </div>

      </li>
    </ul>
  </div>
  `
})

export class AppComponent {
  
  passengers: Passenger[] = [
    {
      id         : 1,
      fullname   : 'Stephen',
      checkedIn  : true,
      checkInDate: 1490742000000,
      children   : null
    }, 
    {
      id         : 2,
      fullname   : 'Rose',
      checkedIn  : false,
      checkInDate: null,
      children   : [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 }
      ]
    }, {
      id         : 3,
      fullname   : 'James',
      checkedIn  : true,
      checkInDate: 1491606000000,
      children   : null
    }, 
    {
      id         : 4,
      fullname   : 'Louise',
      checkedIn  : true,
      checkInDate: 1488412800000,
      children   : [{ name: 'Jessica', age: 1 }]
    }, 
    {
      id         : 5,
      fullname   : 'Tina',
      checkedIn  : false,
      checkInDate: null,
      children   : null
    }
  ];
}
