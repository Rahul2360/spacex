import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    protected http: HttpClient,
  ) { }

  private _get_all_launches_url = `https://api.spacexdata.com/v3/launches`;
  get_all_launches(payload: any) {
    const params = this._get_all_launches_url + '?' + this.object_to_query_param(payload);
    return this.http.get<any>(params);
  }

  private _get_upcoming_launches_url = `https://api.spacexdata.com/v3/launches/upcoming`;
  get_upcoming_launches(payload: any) {
    const params = this._get_upcoming_launches_url + '?' + this.object_to_query_param(payload);
    return this.http.get<any>(params);
  }

  object_to_query_param(obj: any) {
    let query_param = "";
    for (let key in obj) {
      query_param += key + "=" + obj[key] + '&'
    }
    return query_param.slice(0, -1)
  }

}
