import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-compoenent',
  templateUrl: './schedule-compoenent.component.html',
  styleUrls: ['./schedule-compoenent.component.css']
})
export class ScheduleCompoenentComponent implements OnInit {
  lectures: Array<object> = [
    { id: 1,
      topic: 'css',
      date: '13/03/2018',
      lecturer: 'John Doe'
    }
  ];
  public clickAdd() {
    let newLecture = {id: this.lectures.length + 1,
      topic: '',
      date: '',
      lecturer: ''};
    this.lectures.push(newLecture);
  }
  constructor() { }

  ngOnInit() {
  }
}
