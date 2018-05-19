import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-component',
  template: `
    <div> This is an Alert {{message}}</div>
  `,
  styles: [`
  div {
      border: 1px solid black;
      background: salmon;
      padding: 10px;
      fomt-family: sans-serif;
  }
    `]
})
export class AlertComponentComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
