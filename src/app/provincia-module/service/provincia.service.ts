import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provincia} from 'src/app/provincia-module/entity/Provincia';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {
  private url:string = 'http://127.0.0.1:8080/api/v1/provincia'
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Provincia[]>{
    return this.httpClient.get<Provincia[]>(this.url);
  }
}
