import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-app-bestsellingwidget',
  imports: [CommonModule, ButtonModule, MenuModule],
  templateUrl: './app-bestsellingwidget.html',
  styleUrl: './app-bestsellingwidget.css',
})
export class AppBestsellingwidget {
  menu = null;

  items = [
    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
    { label: 'Remove', icon: 'pi pi-fw pi-trash' }
  ];
}
