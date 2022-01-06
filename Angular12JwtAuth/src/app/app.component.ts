import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

import { TokenStorageService } from './_services/token-storage.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private titleService: Title, private tokenStorageService: TokenStorageService,  router: Router) {
    // router.subscribe(event => {      
    //   console.log("works !!!");
      // if(event instanceof NavigationStart) {
      //   const node = document.createElement('script');
      //   node.src = "assets/js/custom.js";
      //   node.type = 'text/javascript';
      //   document.getElementsByTagName('head')[0].appendChild(node);
      // }
    // });
  }
  
  // this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
  // });

  // this.router
  // .events.subscribe(event => {
    // console.log("works !!!");
    // if(event instanceof NavigationStart) {
    //   const node = document.createElement('script');
    //   node.src = "assets/js/custom.js";
    //   node.type = 'text/javascript';
    //   document.getElementsByTagName('head')[0].appendChild(node);
    // }
  // });

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.isLoggedIn = true;
   
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  public setTitle(newTitle: string){
    this.titleService.setTitle(newTitle);
  }

  logout(): void {
    this.tokenStorageService.signOut();    
    window.location.reload();
  }
}
