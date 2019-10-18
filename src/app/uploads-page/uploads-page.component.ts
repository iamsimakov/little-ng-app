import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-uploads-page',
  templateUrl: './uploads-page.component.html',
  styleUrls: ['./uploads-page.component.scss'],
  // providers: [DataService]
})
export class UploadsPageComponent implements OnInit {
  private key: string;
  private server_url: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.key = this.dataService.getKey();
    this.server_url = this.dataService.getServerUrl();
    console.log(this.key, this.server_url);
  }
}
