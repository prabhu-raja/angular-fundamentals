import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-count',
    template: `
    <div>
        <h5>Count 😎 Cmpt</h5>
        <h3>Airline ✈️ Passengers - [class]</h3>
        <div>
            Total Checked in ✅: {{ checkedInCount() }} / {{ items.length }}
        </div>
        <hr>
    </div>
    `
})
export class PassengerCountComponent {
    @Input()
    items: Passenger[];

    checkedInCount(): number {
        if(!this.items) return;
        // return this.items.filter((psgr:Passenger) => {
        //     return psgr.checkedIn;
        // }).length;
        return this.items.filter((psgr:Passenger) => psgr.checkedIn).length;
    }
}