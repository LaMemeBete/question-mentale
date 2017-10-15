import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-4',
  templateUrl: './question-4.component.html',
  styleUrls: ['./question-4.component.css']
})
export class Question4Component implements OnInit {

  answerSelected = false;

  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    this.answerSelected = true;
  }

}
