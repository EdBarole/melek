/**
 * Component behaves as middleware for the page being rendered.
 * 
 * @author Sebastian Njose <s3bastian06@gmail.com>
 * @license http://www.github.com/sebastiannjose
 */

import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({ selector: 'page-home', templateUrl: 'home.html' })

export class HomePage implements OnInit {

  public currentPage: string;

  constructor(public navCtrl: NavController) { }

  public ngOnInit() {
    this.currentPage = 'portfolio';
  }

  public openPage(slug: string) {
    // console.log(slug);
    if (slug) this.currentPage = slug;
  }

}
