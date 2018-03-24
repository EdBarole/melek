/**
 * Component behaves as middleware for the page being rendered
 * 
 * @author Sebastian Njose <s3bastian06@gmail.com>
 * @license http://www.github.com/sebastiannjose
 */

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IProduct } from '../../interfaces/product';

@Component({ selector: 'page-brand', templateUrl: 'brand.html' })

export class BrandPage implements OnInit {

  public product: IProduct;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public ngOnInit() {
    this.product = this.navParams.get('product');
    //
    console.log(this.product);
  }

}
