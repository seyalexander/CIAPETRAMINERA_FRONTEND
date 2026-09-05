import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-app-recentsaleswidget',
  imports: [CommonModule, TableModule, ButtonModule, RippleModule],
  templateUrl: './app-recentsaleswidget.html',
  styleUrl: './app-recentsaleswidget.css',
})
export class AppRecentsaleswidget {
  products = signal<any[]>([]);

  // productService = inject(ProductService);

  ngOnInit() {
    // this.productService.getProductsSmall().then((data) => (this.products.set(data)));
  }
}
