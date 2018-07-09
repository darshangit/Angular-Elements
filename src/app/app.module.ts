import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertComponentComponent } from './elements/alert-component.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [
    AlertComponentComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {
    const firstComponent = createCustomElement(AlertComponentComponent, { injector: this.injector });
    customElements.define('my-alert', firstComponent);
 }

 ngDoBootstrap() {}
}
