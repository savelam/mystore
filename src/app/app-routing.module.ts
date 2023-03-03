import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductItemDetailComponent } from "./components/product-item-detail/product-item-detail.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { CartComponent } from "./components/cart/cart.component";
import { ConfirmationComponent } from "./components/confirmation/confirmation.component";
import { HomepageComponent } from "./components/homepage/homepage.component";

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "products", component: ProductListComponent },
  { path: "products/:id", component: ProductItemDetailComponent },
  { path: "confirmation", component: ConfirmationComponent },
  { path: "cart", component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
