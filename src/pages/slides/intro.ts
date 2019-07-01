import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroSlidePages {
  constructor(public nav: NavController) {}

  navHome() {
    this.nav.setRoot(HomePage);
  }
}
