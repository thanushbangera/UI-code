import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  public getUserList(): Observable<any> {
    return this.http.get<any>(`${environment.path}user/list`);
  }

  public getUser(userId): Observable<any> {
    return this.http.get<any>(`${environment.path}contact/user/${userId}`);
  }
}
