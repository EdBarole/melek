/**
 * Component behaves as middleware for the page being rendered.
 * 
 * @author Sebastian Njose <s3bastian06@gmail.com>
 * @license http://www.github.com/sebastiannjose
 */

import { Component, OnInit, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({ selector: 'page-home', templateUrl: 'home.html' })

export class HomePage implements OnInit {

  @Input() tabHome: string = 'portfolio';

  constructor(public navCtrl: NavController) { }

  public ngOnInit() {
    // console.log('Init', this.currentPage);
  }

}
