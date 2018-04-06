import { Component, OnInit, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage implements OnInit {

  @Input() tabAccount: string = 'account';

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit() {
    // console.log('AccountPage');
  }

}
