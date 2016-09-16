import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [` 
    .pipes{margin: 32px; padding: 32px;}
    h4{color:blueviolet;}
    h2{color:blue;}
    h1{color:firebrick;}
    span{font-style: italic;}
  `]
})
export class AppComponent {
  myValue = 'lowercase';
  myDate = new Date(2016,5,24);
  values = ['Milk', 'Bread', 'Beans'];
  asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data arrives here after three seconds!'), 3000);
  });

  a: number = 0.259;
  b: number = 1.3495;
  c: number = 0.259;
  d: number = 1.3495;
  pi: number = 3.141;
  e: number = 2.718281828459045;
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  gender: string = 'other';
  inviteMap: any = {
    'male': 'Invite him.',
    'female': 'Invite her.',
    'other': 'Invite it.'
  }


}

