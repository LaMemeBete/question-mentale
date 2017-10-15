import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router:Router) { }
  getClass(num:number)
  {
    let currentUrl = this.router.url;
    let currentQuestion = parseInt(currentUrl.split("-")[1]);
    if(num <= currentQuestion)
    {
      return {'k-state-selected':true};
    }
  }
  ngOnInit() {
  }
}
