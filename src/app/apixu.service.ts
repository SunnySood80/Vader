import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  constructor(private http: HttpClient) {}


  getWeather(location) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=2044e3ef665718f351d2a89204b2a224&query=' +
        location + '&units=f' + '&forecast_days=4'+ '&hourly=1'
    );

  }
}
