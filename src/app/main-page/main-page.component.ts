import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  // providers: [DataService]
})
export class MainPageComponent {
  private key: string;
  private server_url: string;

  constructor(private dataService: DataService) {}

  save() {
    // console.log(this.key, this.server_url);
    this.dataService.setKey(this.key);
    this.dataService.setServerUrl(this.server_url);
  }

}
