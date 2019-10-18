import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Upload } from './shared/upload';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private key: string;
  private serverUrl: string;

  constructor(private httpClient: HttpClient) {
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

  getUploads(){
    return this.httpClient.get<Array<Upload>>(`${this.serverUrl}?secret=${this.key}`);
  }
}
