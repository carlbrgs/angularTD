import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getData(){
    return this.http.get<{users: any[]}>("https://dummyjson.com/users").pipe(
      map(response => response.users.map(user => ({name: user.firstName, surname: user.lastName})))
    );
  }

  public postData(){
    return 0;
  }
}
