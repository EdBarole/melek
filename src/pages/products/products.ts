import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Product } from '../../models/product';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  private products : Product[] = [];

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {

    this.restProvider.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });

  }

  onCreateProduct(product){
    this.restProvider
      .createProduct(product)
      .subscribe(
        (newProduct) => {
          this.products = this.products.concat(newProduct);
        }
      );
  }

  onUpdateProduct(product) {
    this.restProvider
      .updateProduct(product)
      .subscribe(
        (updateProduct) => {
          /* You can assign back the updated product to the model holding the form's product */
        }
      );
  }

  onRemoveProduct(product) {
    this.restProvider
      .deleteProductById(product.id)
      .subscribe(
        () => {
          this.products = this.products.filter((e) => e.id !== product.id);
        }
      );
  }

}
