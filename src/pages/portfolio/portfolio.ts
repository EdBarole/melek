import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Component behaves as middleware for the page being rendered.
 * 
 * @author Sebastian Njose <s3bastian06&quot;gmail.com>
 * @license http://www.github.com/sebastiannjose
 */

@Component({ selector: 'page-portfolio', templateUrl: 'portfolio.html' })

export class PortfolioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad - Portfolio');
  }

}
