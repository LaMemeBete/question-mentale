import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-3',
  templateUrl: './question-3.component.html',
  styleUrls: ['./question-3.component.css']
})
export class Question3Component implements OnInit {

  answerSelected = false;

  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    this.answerSelected = true;
  }

}
