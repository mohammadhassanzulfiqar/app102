import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{
  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/item`);
  }
  
}
