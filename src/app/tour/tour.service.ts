import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class TourService {

  constructor(private http : HttpClient) { }

  user = localStorage.getItem("user")

  getTour(){
    const token = this.user ? JSON.parse(this.user).token : ""
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.get<any>(`${baseUrl}/tour`, httpOptions);
  }

  getTourDetail(id: string){
    const token = this.user ? JSON.parse(this.user).token : ""
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.get<any>(`${baseUrl}/tour/${id}`, httpOptions);
  }

  createTour(data: any) {
    const token = this.user ? JSON.parse(this.user).token : ""
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.post<any>(`${baseUrl}/tour`, data, httpOptions);
  }
  
  deleteTour(id: string) {
    const token = this.user ? JSON.parse(this.user).token : ""
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.delete<any>(`${baseUrl}/tour/${id}`, httpOptions);
  }

  createSubTour(data: any) {
    const token = this.user ? JSON.parse(this.user).token : ""
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.post<any>(`${baseUrl}/subTour`, data, httpOptions);
  }

  createTran(data: any) {
    const token = this.user ? JSON.parse(this.user).token : ""
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.post<any>(`${baseUrl}/transportation`, data, httpOptions);
  }
}
