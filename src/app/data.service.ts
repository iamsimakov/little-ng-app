import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private key: string;
  private server_url: string;

  getKey() {
    return this.key;
  }

  setKey(key: string) {
    this.key = key;
  }

  getServerUrl() {
    return this.server_url;
  }

  setServerUrl(server_url: string) {
    this.server_url = server_url;
  }
}
