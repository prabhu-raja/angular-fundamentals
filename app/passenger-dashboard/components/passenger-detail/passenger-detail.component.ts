import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from "@angular/core";
import { Passenger } from './../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
    <div>
        <span 
            class="status"
            [class.checked-in]="detail.checkedIn">
        </span>
        <div *ngIf="isEditing">
            <input 
                #psgrName
                type="text" 
                [value]="detail.fullname" 
                (input)="onNameChange(psgrName.value)">
        </div>
        <div *ngIf="!isEditing">
            {{ detail.fullname }}
        </div>
        <div class="date">
            Check in date 📅: {{detail.checkInDate ? (detail.checkInDate | date:'yMMMMd') : 'Not Checked in'}}
        </div>
        <div class="children">
            Children 👶: {{detail.children?.length || 0}}
        </div>
        <button (click)="toggleEdit()">
            {{isEditing ? 'Done' : 'Edit'}}
        </button>
        <button (click)="onRemove()">
            Remove
        </button>
    </div>
    <br>
    `
})
export class PassengerDetailComponent implements OnChanges, OnInit {
    isEditing: boolean =  false;

    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    ngOnChanges(changes) {
        if(changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
        console.log('🧐', 'frm ngOnChanges', changes);
    }

    ngOnInit() {
        console.log('💁‍♂️', 'frm ngOnInit');
    }

    onNameChange(val: string) {
        this.detail.fullname = val;
    }
    
    toggleEdit() {
        if(this.isEditing) {
            this.edit.emit(this.detail);
        }
        this.isEditing = !this.isEditing;
    }

    onRemove() {
        this.remove.emit(this.detail);
    }
}