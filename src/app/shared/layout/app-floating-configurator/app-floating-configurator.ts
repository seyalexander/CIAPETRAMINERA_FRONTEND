import { Component, computed, inject, input } from '@angular/core';
import { AppConfigurator } from "../app-configurator/app-configurator";
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-app-floating-configurator',
  imports: [CommonModule, ButtonModule, StyleClassModule, AppConfigurator],
  templateUrl: './app-floating-configurator.html',
  styleUrl: './app-floating-configurator.css',
})
export class AppFloatingConfigurator {
  LayoutService = inject(LayoutService);

  float = input<boolean>(true);

  isDarkTheme = computed(() => this.LayoutService.layoutConfig().darkTheme);

  toggleDarkMode() {
    this.LayoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
  }
}
