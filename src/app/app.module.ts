/**
 * Module bootstraps the mobile application.
 * 
 * @author Sebastian Njose <s3bastian06@gmail.com>
 * @license http://www.github.com/sebastiannjose
 */

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';

import { ProductService } from '../providers/product';

import { AccountPage } from '../pages/account/account';
import { BalancePage } from '../pages/balance/balance';
import { BrandPage } from '../pages/brand/brand';
import { ContactPage } from '../pages/contact/contact';
import { DiscoverPage } from '../pages/discover/discover';
import { HomePage } from '../pages/home/home';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { PotentialPage } from '../pages/potential/potential';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    BalancePage,
    BrandPage,
    ContactPage,
    DiscoverPage,
    HomePage,
    PortfolioPage,
    PotentialPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    BalancePage,
    BrandPage,
    ContactPage,
    DiscoverPage,
    HomePage,
    PortfolioPage,
    PotentialPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductService
  ]
})
export class AppModule {}
