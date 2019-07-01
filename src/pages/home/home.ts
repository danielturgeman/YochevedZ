import { Component } from '@angular/core';
import { GitHubRepositoriesService } from '../../services/github_repositories';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { Storage } from '@ionic/storage';
import { IntroSlidePages } from '../slides/intro';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GitHubRepositoriesService]
})
export class HomePage {
  public foundRepos;
  public reposCount;
  public username;
  public error;

  constructor(private github: GitHubRepositoriesService, private nav: NavController, private storage: Storage) {
  }

  getUserRepos(){
    this.github.getRepositoriesByUsername(this.username).subscribe(
      data => {
        this.error = null;
        this.foundRepos = data.json();
        this.reposCount = this.foundRepos.length;
      },
      err => {
        this.error = {status: err.status, statusText: err.statusText}
        this.foundRepos = null;
      },
      () => console.log('getGitHubRepos completed')
    );
  }

  goToRepoDetailsPage(repo){
    this.nav.push(DetailsPage, { repo: repo });
  }

  clearUserRepos(){
    this.foundRepos = null;
  }

  //For adding intro sliders to app, use storage module to check for intro-done key
  ionViewDidLoad() {
    this.storage.get('intro-done').then(done => {
      if (!done) {
        this.storage.set('intro-done', true);
        this.nav.setRoot(HomePage);
      }
    });
  }

}
