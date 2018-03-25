/**
 * Component behaves as middleware for the page being rendered.
 * 
 * @author Sebastian Njose <s3bastian06@gmail.com>
 * @license http://www.github.com/sebastiannjose
 */

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({ selector: 'page-potential', templateUrl: 'potential.html' })

export class PotentialPage {

  public brightness: number = 20;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('Potential Page ... ready.');
  }

}
