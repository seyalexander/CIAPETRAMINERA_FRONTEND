import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppMenuItem } from '../app-menu-item/app-menu-item';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { NavigationService } from '../../service/Navigation/navigation-service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-app-menu',
  imports: [CommonModule, AppMenuItem, RouterModule],
  templateUrl: './app-menu.html',
  styleUrl: './app-menu.css',
})
export class AppMenu implements OnInit, OnDestroy {
  model: MenuItem[] = [];
  private destroy$ = new Subject<void>();

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.getNavigationConfig()
      .pipe(takeUntil(this.destroy$))
      .subscribe(config => {
        this.model = config.items;
        console.log('AppMenu - Menú actualizado para sección:', config.section);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}