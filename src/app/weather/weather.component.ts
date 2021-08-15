import { Component, OnInit,} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  icon: string = "";
  public hourLocal: string;
  color: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group
    (
      {location: ['']}
    );
  }
  sendToAPIXU(formValues) {
    this.apixuService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
      this.displayIcons();
      //this.apixuService.getWeather(watchId)
    });
  }

  displayIcons()
  {
let description = this.weatherData.current.weather_descriptions[0].toLowerCase();
let precip = this.weatherData.current.precipitation;

if (description.includes("clear") || (description.includes("sunny")))
{
  return this.icon = 'https://tinyurl.com/yauk7ub6'//'https://svgshare.com/i/ZJ8.svg'
}
else if (description.includes("partly") && (description.includes("cloudy")) || (this.weatherData.current.precipitation >= .2))
{
  return this.icon = 'https://tinyurl.com/y3h4xcff' //'https://svgshare.com/i/ZHb.svg'
}
else if (description.includes("thunderstorm") || (description.includes("thunder")))
{
  return this.icon = 'https://tinyurl.com/rcjsrkye'
}
else if (description.includes("rain") || (description.includes("drizzle")) || (description.includes("overcast")))
{
  return this.icon = 'https://tinyurl.com/3jjtr9tc'
}
else if (description.includes("snow"))
{
  return this.icon = 'https://tinyurl.com/k7zcbt7u'
}
else if (description.includes("mist") || (description.includes("haze")) || (description.includes("fog")))
{
  return this.icon = 'https://tinyurl.com/2va9wy82'
}
else if (description.includes("dust") || (description.includes("sandstorm")))
{
  return this.icon = 'https://tinyurl.com/y27mbbrv'
}

let previousPosition = {
    latitude: 40.023,
    longitude: 23.203
};
function watchGeolocation(position) {
  //position.coords.latitude, position.coords.longitude
      if (position.coords.latitude != previousPosition.latitude ||
          position.coords.longitude != previousPosition.longitude)
      {

          position.coords.latitude, position.coords.longitude
      }
}

// Request repeated updates.
let watchId = navigator.geolocation.watchPosition(watchGeolocation);

//clear watching the geolocation
navigator.geolocation.clearWatch(watchId);
/*
if ('geolocation' in navigator) {
      console.log('geolocatoin avaliable');
      navigator.geolocation.getCurrentPosition(position => {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
      });
}*/
}

 }
