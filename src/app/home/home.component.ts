import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _http : HttpService) { }
  ala : any ; 
  ngOnInit(): void {
    this._http.getdata().subscribe((data)=>{
      this.ala = data
  })
  }
}