import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploads-page',
  templateUrl: './uploads-page.component.html',
  styleUrls: ['./uploads-page.component.scss'],
  // providers: [DataService]
})
export class UploadsPageComponent implements OnInit {
  private key: string;
  private serverUrl: string;

  private readyConnect: boolean = false;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.key = this.dataService.getKey();
    this.serverUrl = this.dataService.getServerUrl();
    console.log(this.key, this.serverUrl);

    if (this.key && this.serverUrl) {
      this.readyConnect = true;
    } else {
      setTimeout(() => this.router.navigate(['/']), 3000);
    }
  }
}
