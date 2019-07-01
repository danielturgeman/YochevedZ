import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { IntroSlidePages } from '../pages/slides/intro';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = IntroSlidePages;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });
  }
}
