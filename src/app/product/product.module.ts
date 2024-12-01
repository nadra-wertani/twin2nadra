import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import correct du RouterModule
import { ProductsComponent } from './products/products.component'; // Import correct du composant

@NgModule({
  declarations: [ProductsComponent], // Déclare le composant ProductsComponent
  imports: [
    CommonModule,
    RouterModule.forChild([ // Définit les routes spécifiques à ce module
      { path: '', component: ProductsComponent } // Route pour ProductsComponent
    ])
  ]
})
export class ProductModule { }

// src/app/product/product.model.ts
export class Product {
  id!: number;
  name!: string;
  image!: string;
  categoryId!: number;
  description!: string;
  price!: number;
  brand!: string;
  promotion!: number;
}
