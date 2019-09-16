import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})

export class AppComponent {
  title = 'little-ng-app';
  items: string[] = [];
  name: string = '';

  sample_text = '';

  constructor(private dataService: DataService){}

  addItem(){
    this.dataService.addData(this.name);
  }

  ngOnInit(){
    this.items = this.dataService.getData();
  }
}
