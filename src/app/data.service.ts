import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:3000/admin";

   postData (formData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/addpost', formData);
  }
  delData(id:any): Observable<any> {
    return this.http.delete<any>(this.baseUrl+'/DeleteAssignment/'+id);
  }
  downlData(id:any): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/ViewAssignment/'+id);
  }
}
