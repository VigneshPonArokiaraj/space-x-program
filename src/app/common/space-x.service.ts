import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  readonly baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getLaunchData(params: any) {
    const queryParams = new HttpParams({ fromObject: params });
    return this.http.get(this.baseUrl + '?limit=100', { params: queryParams });
  }
}
