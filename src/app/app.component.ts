import { Component, Injector } from '@angular/core';
import { AlertComponentComponent } from './elements/alert-component.component';
import { createCustomElement } from '@angular/elements';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content = null;

  constructor(injector: Injector, domSanitizer: DomSanitizer) {
    const alertElement = createCustomElement(AlertComponentComponent, {injector: injector});
    customElements.define('my-alert', alertElement);
    // this.content = domSanitizer.bypassSecurityTrustHtml('<my-alert message="redendered dynamically"></my-alert>');

    // setTimeout(() => {
    //   this.content = domSanitizer.bypassSecurityTrustHtml('<my-alert message="redendered dynamically"></my-alert>');
    // }, 1000);
  }
}
