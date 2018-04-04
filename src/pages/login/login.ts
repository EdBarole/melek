/**
 * Component behaves as middleware for the page being rendered.
 * 
 * @author Sebastian Njose <s3bastian06@gmail.com>
 * @license http://www.github.com/sebastiannjose
 */

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs';

@Component({ selector: 'page-login', templateUrl: 'login.html' })

export class LoginPage {

  constructor(public navCtrl: NavController, public storage: Storage) { }

  // Set a key/value
  // this.storage.set('name', 'Max');

  // // Or to get a key/value pair
  // this.storage.get('age').then((val) => {
  //   console.log('Your age is ', val);
  // });

  public signIn() {
    this.navCtrl.push(TabsPage);
  }

}
