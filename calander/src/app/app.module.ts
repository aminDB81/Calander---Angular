import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScheduleModule, RecurrenceEditorModule
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
