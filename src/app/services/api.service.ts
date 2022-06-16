import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http : HttpClient) { }

  user = localStorage.getItem("user")

  

  postTour(data: any) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     Authorization: this.user.token
    //   })
    // };
    return this.http.post<any>(`${baseUrl}/tour`, data);
  }
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
}
