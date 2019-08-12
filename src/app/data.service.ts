import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private data: string[] = [ "Apple iPhone XR", "Samsung Galaxy S9",  "Nokia 9"];
  
  getData(): string[] {
    return this.data;
  }

  addData(name: string){
    this.data.push(name);
  }
}
