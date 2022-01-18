import { ForecastService } from './../forecast.service';
import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs/operators';


@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.forecastService.getWeatherForecast().pipe(
      pluck('list')
    )
    .subscribe(data=>{
      this.futureForecast(data)
    })
  }

  futureForecast(data:any){
    for(let i = 0; i< data.length; i = i + 8 ){
    }
  }

}
