import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  user = localStorage.getItem("user")

  getCategory(){
    const token = this.user ? JSON.parse(this.user).token : ""
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.get<any>(`${baseUrl}/category`, httpOptions);
  }

  createCategory(data: any) {
    const token = this.user ? JSON.parse(this.user).token : ""
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.post<any>(`${baseUrl}/category`, data, httpOptions);
  }

  deleteCategory(id: string) {
    const token = this.user ? JSON.parse(this.user).token : ""
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.delete<any>(`${baseUrl}/category/${id}`, httpOptions);
  }
}
