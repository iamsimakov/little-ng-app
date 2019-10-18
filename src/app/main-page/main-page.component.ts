import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  // providers: [DataService]
})
export class MainPageComponent implements OnInit {
  key: string;
  serverUrl: string;

  savedOk: boolean;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.key = this.dataService.getKey();
    this.serverUrl = this.dataService.getServerUrl();
  }

  save() {
    // console.log(this.key, this.serverUrl);
    this.dataService.setKey(this.key);
    this.dataService.setServerUrl(this.serverUrl);
    this.dataService.saveLocalStorage();

    this.savedOk = true;
    setTimeout(() => this.savedOk = false, 3000);
  }

}
