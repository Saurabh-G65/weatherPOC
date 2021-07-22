import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather(location) {
    return this.http.get(
      //API key not able to purchase
      "https://api.apixu.com/v1/current.json?key=4e1f5287dcd0fb74ca2c50133dd5721f&q=" +
        location
    );
  }
}
