import { ForcastService } from './../forcast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  constructor(private forcastService: ForcastService) { }

  ngOnInit(): void {
    this.forcastService.getWeatherForcast().subscribe(d=>{
      console.log(d);
    })
  }

}
