import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { AutoStashPage } from '../../pages/auto-stash/auto-stash';

/**
 * Component behaves as middleware for the page being rendered.
 * 
 * @author Sebastian Njose <s3bastian06@gmail.com>
 * @license http://www.github.com/sebastiannjose
 */

@Component({ selector: 'page-potential', templateUrl: 'potential.html' })

export class PotentialPage implements OnInit {

  public brightness: number = 20;

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  public ngOnInit() { }

  presentModal() {
    let modal = this.modalCtrl.create(AutoStashPage);
    modal.present();
  }

}
