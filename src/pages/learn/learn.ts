/**
 * Component behaves as middleware for the page being rendered.
 * 
 * @author Sebastian Njose <s3bastian06@gmail.com>
 * @license http://www.github.com/sebastiannjose
 */

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PostService } from '../../providers/post';

import { IPost } from '../../interfaces/post';

import { BlogPage } from '../../pages/blog/blog';

@Component({ selector: 'page-learn', templateUrl: 'learn.html' })

export class LearnPage implements OnInit {

  public posts: IPost[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public client: PostService
  ) { }

  public ngOnInit() {
    this.client.fetch().subscribe((posts: IPost[]) => {
      // console.log(posts);
      this.posts = posts;
    });
  }

  /**
   * Gets post using the id parameter.
   * 
   * @param id number
   * @return IPost
   */
  public postById(id: number) {
    console.log('Show loading... ');
    this.client.fetchById(id).subscribe((post: IPost) => {
      // console.log(post);
      this.navCtrl.push(BlogPage, { post: post });
    });
  }

}
