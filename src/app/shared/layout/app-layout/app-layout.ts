import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { AppTopbar } from '../app-topbar/app-topbar';
import { AppSidebar } from '../app-sidebar/app-sidebar';
import { RouterModule } from '@angular/router';
import { AppFooter } from '../app-footer/app-footer';
import { Sidebar } from "../../components/sidebar/sidebar";
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-app-layout',
  imports: [CommonModule, AppTopbar, AppSidebar, RouterModule, AppFooter, AppSidebar],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.css',
})
export class AppLayout {
  layoutService = inject(LayoutService);

  constructor() {
    effect(() => {
      const state = this.layoutService.layoutState();
      if (state.mobileMenuActive) {
        document.body.classList.add('blocked-scroll');
      } else {
        document.body.classList.remove('blocked-scroll');
      }
    });
  }

  containerClass = computed(() => {
    const config = this.layoutService.layoutConfig();
    const state = this.layoutService.layoutState();
    return {
      'layout-overlay': config.menuMode === 'overlay',
      'layout-static': config.menuMode === 'static',
      'layout-static-inactive': state.staticMenuDesktopInactive && config.menuMode === 'static',
      'layout-overlay-active': state.overlayMenuActive,
      'layout-mobile-active': state.mobileMenuActive
    };
  })
}
