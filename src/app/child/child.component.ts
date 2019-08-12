import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  name : String = 'Tom';
  count = 0;
  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.count++;
  }

}
