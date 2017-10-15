import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-8',
  templateUrl: './question-8.component.html',
  styleUrls: ['./question-8.component.css']
})
export class Question8Component implements OnInit {

  answerSelected = false;

  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    this.answerSelected = true;
  }

}
