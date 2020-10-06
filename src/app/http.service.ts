import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})


export class HttpService {
  pathBase = 'http://localhost:3000/getp'
  constructor(private http : HttpClient) { }
    getdata(){
      return this.http.get(this.pathBase)
    }
}
