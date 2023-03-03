import { Component } from "@angular/core";
import { CartItem } from "src/app/models/CartItem";
import { Product } from "src/app/models/Product";
import { CartService } from "src/app/services/cart.service";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  products: Product[] = [];
  routeParams: any;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => (this.products = res));
    this.routeParams = "products";
  }

  addToCart(item: CartItem) {
    this.cartService.addToCart(item);
  }
}
