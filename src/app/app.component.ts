import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public users = [
    { name: 'luis', city: 'New York' },
    { name: 'coder', city: '' },
    { name: 'programador', city: 'Mexico' },
  ];

  title = 'primero';
  ngOnInit(): void {}
}
