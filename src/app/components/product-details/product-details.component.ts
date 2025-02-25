// src/app/components/product-details/product-details.component.ts
import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product.models';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  imports: [CommonModule]
})
export class ProductDetailsComponent {
  @Input() product!: Product;
}