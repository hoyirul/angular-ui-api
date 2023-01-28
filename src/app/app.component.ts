import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }
  
  ngOnInit(): void {

  }

  isAuthRoute(){
    return this.router.url === 'auth/signin' && 'auth/signup';
  }

  title = 'angular-ui-api';
}
