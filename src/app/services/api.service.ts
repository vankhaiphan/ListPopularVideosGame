import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getPopularGames(): Observable<any>{
    let fullUrl = environment.url + "/api/games?key=" + environment.keyAPI + "&dates=2020-01-01,2020-12-31&page=1";
    return this.http.get<any>(
      fullUrl,
      {withCredentials: true}
    )
  }

  getDetailGame(id: string): Observable<any>{
    let fullUrl = environment.url + "/api/games/" + id + "?key=" + environment.keyAPI;
    return this.http.get<any>(
      fullUrl,
      {withCredentials: true}
    )
  }
}
