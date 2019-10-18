import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

import { Upload } from '../shared/upload';

@Component({
  selector: 'app-uploads-page',
  templateUrl: './uploads-page.component.html',
  styleUrls: ['./uploads-page.component.scss'],
  // providers: [DataService]
})
export class UploadsPageComponent implements OnInit {
  private key: string;
  private serverUrl: string;

  readyConnect: boolean = false;

  uploads: Array<Upload> = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.key = this.dataService.getKey();
    this.serverUrl = this.dataService.getServerUrl();
    // console.log(this.key, this.serverUrl);

    if (this.key && this.serverUrl) {
      this.readyConnect = true;
      this.fillUploads();
    } else {
      setTimeout(() => this.router.navigate(['/']), 3000);
    }
  }

  fillUploads() {
    this.dataService.getUploads().subscribe(data => {
      this.uploads = data;
    });
  }

}
