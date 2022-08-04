import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ciudad } from '../entity/ciudad.entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadCrudService {

  private url: string = 'http://127.0.0.1:8080/api/v1/ciudad'

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Ciudad[]> {
    return this.httpClient.get<Ciudad[]>(this.url);
  }

  public findById(id: number): Observable<Ciudad> {
    const myUrl = `${this.url}?id=${id}`;
    return this.httpClient.get<Ciudad>(myUrl);
  }

  public create(ciudad: Ciudad) {
    return this.httpClient.post(this.url, ciudad)
      .subscribe((data: any) => console.log(data));
  }

  public update(ciudad: Ciudad) {
    return this.httpClient.put(this.url, ciudad)
      .subscribe( (data: any) => console.log(data));
  }

  public delete(id: number){
    const myUrl = `${this.url}?id=${id}`;
    this.httpClient.delete(myUrl)
      .subscribe( (data: any) => console.log(data));
  }
}
