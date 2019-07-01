import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class GitHubRepositoriesService{
  constructor(private http: Http){
  }

  getRepositoriesByUsername(username) {
    let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
    return repos;
  }

  getRepositoryDetails(repo) {
    let headers = new Headers();
    headers.append('Accept','application/vnd.github.VERSION.html');

    return this.http.get(`${repo.url}/readme`, { headers: headers });
  }
}
