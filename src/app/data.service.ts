import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private key: string;
  private serverUrl: string;

  constructor() {
    this.key = localStorage.getItem('key');
    this.serverUrl = localStorage.getItem('serverUrl');
  }

  getKey() {
    return this.key;
  }

  setKey(key: string) {
    this.key = key;
  }

  getServerUrl() {
    return this.serverUrl;
  }

  setServerUrl(serverUrl: string) {
    this.serverUrl = serverUrl;
  }

  saveLocalStorage() {
    localStorage.setItem('key', this.key);
    localStorage.setItem('serverUrl', this.serverUrl);
  }
}
