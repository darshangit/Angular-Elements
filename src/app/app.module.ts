import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertComponentComponent } from './elements/alert-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponentComponent
  ]
})
export class AppModule { }
