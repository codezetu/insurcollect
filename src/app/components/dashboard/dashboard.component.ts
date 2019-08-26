import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'services/auth.service';
import { User } from 'models/auth.model';
import { Config, Menu } from 'components/shared/accordion/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public user: User;

  public options: Config = { multi: false };

  public menus: Menu[] = [
    {
      name: 'My Account',
      active: true,
      submenu: [
        { name: 'View or Pay Open Invoices', url: '#' },
        { name: 'View paid or Closed Invoice', url: '#' },
        { name: 'Schedule Payments', url: '#' },
        { name: 'View Schedule Payments', url: '#' },
      ],
    },
    {
      name: 'My Profile',
      active: false,
      submenu: [
        { name: 'My Bank Account', url: '#' },
        { name: 'My Credit Cards', url: '#' },
        { name: 'Udpate Personal Info', url: '#' },
        { name: 'AutoPlay', url: '#' },
        { name: 'Paperless Options', url: '#' },
        { name: 'Change Password', url: '#' },
      ],
    },
    {
      name: 'Logout',
      active: false,
      clickAction: (e: Event) => this.logout(e),
    },
  ];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.user = this.authService.user;
  }

  logout(e: Event) {
    e.preventDefault();
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
