import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrlString = 'https://localhost:7224';

  constructor(private myHttpClient: HttpClient) 
  { 

  }

  apiUrl(){
    return this.apiUrlString;
  }
  
}
