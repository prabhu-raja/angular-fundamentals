import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    <button (click)="handleClick()">
      Change Name
    </button>
    <input 
      type="text" 
      [value]="name"
      (input)="handleInput($event)"
      (blur)="handleBlur($event)"
    >
    <div>{{name}}</div> 
  </div>
  `
})

export class AppComponent {
  
  name: string = 'PradeeP';

  handleBlur(evt: any) {
    this.name = evt.target.value;
    console.log(evt);
  }

  handleInput(evt: any) {
    this.name = evt.target.value;    
  }

  handleClick() {
    this.name = 'Raja Prabhu';
  }
}
