import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";  
import { PassengerDashboardService } from './../../passenger-dashboard.service';

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

    constructor(private passengerService: PassengerDashboardService) {}

    ngOnInit() {
        this.passengers = this.passengerService.getPassengers();
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
        this.passengers = this.passengers.filter((psgr:Passenger) => psgr.id != evt.id);
    }

}