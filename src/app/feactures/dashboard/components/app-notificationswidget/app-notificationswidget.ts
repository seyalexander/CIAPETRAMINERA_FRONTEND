import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-app-notificationswidget',
  imports: [ButtonModule, MenuModule],
  templateUrl: './app-notificationswidget.html',
  styleUrl: './app-notificationswidget.css',
})
export class AppNotificationswidget {
  items = [
    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
    { label: 'Remove', icon: 'pi pi-fw pi-trash' }
  ];
}
