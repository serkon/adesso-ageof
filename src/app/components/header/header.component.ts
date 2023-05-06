import { Component } from '@angular/core';

export interface Link {
  path: string;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  links: Link[] = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/units',
      name: 'Units',
    },
  ];
}
