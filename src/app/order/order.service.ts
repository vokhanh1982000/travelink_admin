import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }

  user = localStorage.getItem("user")

  getOrder(){
    const token = this.user ? JSON.parse(this.user).token : ""
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.get<any>(`${baseUrl}/order`, httpOptions);
  }
}
