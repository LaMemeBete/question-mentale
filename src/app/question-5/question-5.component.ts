import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-5',
  templateUrl: './question-5.component.html',
  styleUrls: ['./question-5.component.css']
})
export class Question5Component implements OnInit {

  answerSelected = false;

  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    this.answerSelected = true;
  }

}
