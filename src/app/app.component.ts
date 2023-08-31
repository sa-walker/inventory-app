import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];
  title = 'inventory-management-system';
  constructor(private router: Router) { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Warehouses',
        icon: 'pi pi-fw pi-building',
        routerLink: '/warehouses'
      },
      {
        label: 'Items',
        icon: 'pi pi-fw pi-gift',
        routerLink: '/items'
      }
    ];
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}