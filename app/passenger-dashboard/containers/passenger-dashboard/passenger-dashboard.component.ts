import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";  

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
    <div>
        <passenger-count 
            [items]="passengers">
        </passenger-count>
        <div *ngFor="let psngr of passengers">
            {{psngr.fullname}}
        </div>
        <hr>
        <h5>Detail 🤩 Component</h5>
        <passenger-detail 
            *ngFor="let psgr of passengers" 
            [detail]="psgr" 
            (edit)="handleEdit($event)"
            (remove)="handleRemove($event)">
        </passenger-detail>
        <hr>
    </div>
    `
})
export class PassengerDashboardComponent implements OnInit {

    passengers: Passenger[];

    ngOnInit() {
        this.passengers = [
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
            }, 
            {
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

    handleEdit(evt: Passenger) {
        console.log('📟', this.passengers);   
        this.passengers = this.passengers.map((psgr: Passenger) => {
            if(psgr.id === evt.id) {
                psgr = Object.assign({}, psgr, evt);
            }
            return psgr;
        }) 
            
        console.log('🆕', this.passengers); 
    }

    handleRemove(evt: Passenger) {
        console.log('⚡️🙅‍♂️', evt);
        this.passengers = this.passengers.filter((psgr:Passenger) => psgr.id != evt.id)
    }

}