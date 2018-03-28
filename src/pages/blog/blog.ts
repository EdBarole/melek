/**
 * Component behaves as middleware for the page being rendered
 * 
 * @author Sebastian Njose <s3bastian06@gmail.com>
 * @license http://www.github.com/sebastiannjose
 */

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IPost } from '../../interfaces/post';

@Component({ selector: 'page-blog', templateUrl: 'blog.html' })

export class BlogPage implements OnInit {

  public post: IPost;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public ngOnInit() {
    this.post = this.navParams.get('post');
    //
    console.log(this.post);
  }

}
