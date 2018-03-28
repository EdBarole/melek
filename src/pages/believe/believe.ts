/**
 * Component behaves as middleware for the page being rendered.
 * 
 * @author Sebastian Njose <s3bastian06@gmail.com>
 * @license http://www.github.com/sebastiannjose
 */

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductService } from '../../providers/product';

import { IProduct } from '../../interfaces/product';

import { BrandPage } from '../../pages/brand/brand'

@Component({ selector: 'page-believe', templateUrl: 'believe.html' })

export class BelievePage implements OnInit {

  public products: IProduct[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public client: ProductService
  ) { }

  // Perform a call to fetch on init of component
  // assigning products as the endpoint parameter
  // the fetch method returns an observable
  public ngOnInit() {
    this.client.fetch().subscribe((products: IProduct[]) => {
      // console.log(products);
      this.products = products;
    });
  }

  /**
   * Gets product using the id parameter.
   * 
   * @param id number
   * @return IProduct
   */
  public productById(id: number) {
    console.log('Show loading... ');
    this.client.fetchById(id).subscribe((product: IProduct) => {
      // console.log(product);
      this.navCtrl.push(BrandPage, { product: product });
    });
  }

}
