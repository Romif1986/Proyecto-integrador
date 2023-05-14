import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Presentacion } from '../model/presentacion';

@Injectable({
  providedIn: 'root'
})
export class SPresentacionService {

  //expURL = 'http://localhost:8080/presentacion/'
  expURL = 'https://backend-yoprogramo-du10.onrender.com/presentacion/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Presentacion[]>{
    return this.httpClient.get<Presentacion[]>(this.expURL + 'lista');
  }
  
  public detail(id: number): Observable<Presentacion>{
    return this.httpClient.get<Presentacion>(this.expURL + "detail"  + "/"  + id);
  } 
  
  public save(presentacion: Presentacion): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', Presentacion);
  }
  
  public update(id: number, presentacion: Presentacion): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, presentacion);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}