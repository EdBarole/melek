/**
 * Component behaves as middleware for the page being rendered
 * 
 * @author Sebastian Njose <s3bastian06@gmail.com>
 * @license http://www.github.com/sebastiannjose
 */

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { IProduct } from '../../interfaces/product';

@Component({ selector: 'page-brand', templateUrl: 'brand.html' })

export class BrandPage implements OnInit {

  public product: IProduct;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform
  ) { }

  public ngOnInit() {
    this.product = this.navParams.get('product');
    //
    console.log(this.product);
  }

  public openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Buy/Sell',
      cssClass: 'action-sheet-brand-page',
      buttons: [
        {
          text: 'Buy',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Update Auto-Stash',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Sell',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Sell clicked');
          }
        },
        {
          text: 'Sell All',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Sell All clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
