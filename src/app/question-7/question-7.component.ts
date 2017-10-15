import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-7',
  templateUrl: './question-7.component.html',
  styleUrls: ['./question-7.component.css']
})
export class Question7Component implements OnInit {

  answerSelected = false;

  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    this.answerSelected = true;
  }

}
