import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GitHubRepositoriesService } from '../../services/github_repositories';

@Component({
    selector: 'page-details',
    templateUrl: 'details.html',
    providers: [GitHubRepositoriesService]
})
export class DetailsPage{
  public readme = "";
  public repo;

  constructor(private github: GitHubRepositoriesService,
                private nav: NavController,
                private navParams: NavParams) {

      this.repo = navParams.get('repo');

      this.github.getRepositoryDetails(this.repo).subscribe(
        data => this.readme = data.text(),
            err => {
                if (err.status == 404) {
                    this.readme = 'This repo does not have a README. :(';
                } else {
                    console.error(err);
                }
            },
            () => console.log('getDetails completed')
        );
    }
}
