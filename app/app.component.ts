import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
  <div>
    {{title}}
  </div>
  `
})

export class AppComponent {
  title: string;
  constructor() {
    this.title = 'Ulti Ang';
  }
}















// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   styleUrls: ['app.component.scss'],
//   template: `
//     <div class="app">
//       Hello!
//     </div>
//   `
// })
// export class AppComponent {

// }
