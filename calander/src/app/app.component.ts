import { Component } from '@angular/core';
import { View } from '@syncfusion/ej2-schedule';

@Component({
  selector: 'app-root',
  template: `<ejs-schedule height="850" width="1250" [currentView]="setView"></ejs-schedule>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calendar';
  public setView: View = 'Month';
}