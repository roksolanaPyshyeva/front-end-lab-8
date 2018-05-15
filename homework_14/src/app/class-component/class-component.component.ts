import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-class-component',
  templateUrl: './class-component.component.html',
  styleUrls: ['./class-component.component.css']
})
export class ClassComponentComponent implements OnInit {
  @Input() lecture: {
    id: number,
    topic: string,
    date: string,
    lecturer: string
  };
  public newlecture =  {
    id: 0,
    topic: '',
    date: '',
    lecturer: ''};
  public edit: boolean = false;
  public Edit(lecture: {
    id: number,
    topic: string,
    date: string,
    lecturer: string
  }) {
    this.edit = true;
    this.newlecture.id = lecture.id;
    this.newlecture.topic = lecture.topic;
    this.newlecture.date = lecture.date;
    this.newlecture.lecturer = lecture.lecturer;
  }
  public Cancel(): void {
    this.lecture = this.newlecture;
    this.lecture.id = this.newlecture.id;
    this.lecture.topic = this.newlecture.topic;
    this.lecture.date = this.newlecture.date;
    this.lecture.lecturer = this.newlecture.lecturer;
    this.edit = false;
  }

  public Save( newlecture: {
    id: number,
    topic: string,
    date: string,
    lecturer: string
  } ): void {
    this.lecture.id = newlecture.id;
    this.lecture.topic = newlecture.topic;
    this.lecture.date = newlecture.date;
    this.lecture.lecturer = newlecture.lecturer;
    this.edit = false;
  }

  public Delete(): void {
    this.lecture = null;
  }
  constructor() { }

  ngOnInit() {
  }

}
