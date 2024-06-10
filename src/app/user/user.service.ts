import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IUserCredentials } from './user.model';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: BehaviorSubject<IUserCredentials | null>; //????
  
  constructor(private http: HttpClient, private apiServicio: ApiService) {
    this.user = new BehaviorSubject<IUserCredentials | null>(null);
  }
  
  apiUrl = this.apiServicio.apiUrlString;
  
  getUser(): Observable<IUserCredentials | null>{
    return this.user;
  }


  signIn(credentials: IUserCredentials): Observable<IUser>{
    return this.http.post<IUser>(`${this.apiUrl}/User/ValidateSignInUser`, credentials)  
    .pipe(map((user: IUser) => {
      this.user.next(user);
      return user;
    }))
  }

  signOut(){
    this.user.next(null);
  }

  registerNewUser(credentials: IUser): Observable<IUser>{
    return this.http.post<IUser>(`${this.apiUrl}/User/PostNewUser`, credentials)  
    .pipe(map((user: IUser) => {
      this.user.next(user);
      return user;
    }))
  }
}
