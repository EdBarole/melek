import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items: Array<any>;

  constructor(public navCtrl: NavController) {

    this.items = [
      { title: "Blue Chips", amount_invested: 100, price: 103.99 },
      { title: "Delicious Dividends", amount_invested: 50, price: 51.89 },
      { title: "Roll with Buffet", amount_invested: 45, price: 51.53 },
      { title: "Water the World", amount_invested: 30, price: 33.32 },
      { title: "Aggressive Mix", amount_invested: 25, price: 25.52 },
      { title: "Defending America", amount_invested: 25, price: 28.59 },
      { title: "Moderate Mix", amount_invested: 25, price: 25.40 },
      { title: "Robots Rising", amount_invested: 25, price: 29.35 }
    ];

  }

  itemSelected(item) {
    console.log('Click on..');
    console.log(item);
  }

}
