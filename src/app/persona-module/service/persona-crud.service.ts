import { Injectable } from '@angular/core';
import { Persona } from '../entity/Persona';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaCrudService {
  private url:string = 'http://127.0.0.1:8080/api/v1/persona'
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.url);
  }

  public findById(id: Number):Observable<Persona> {
    const myUrl = `${this.url}?id=${id}`;
    return this.httpClient.get<Persona>(myUrl);
  }

  public create(persona: Persona){
    return this.httpClient.post(this.url, persona)
    .subscribe( (data: any) => { console.log(data)});
  }

  public update(persona: Persona){
    return this.httpClient.post(this.url, persona)
    .subscribe( (data: any) => { console.log(data)});
  }

  public delete(id: Number){
    const myUrl = `${this.url}?id=${id}`;
    this.httpClient.delete(myUrl)
    .subscribe( (data: any) => { console.log(data)});
  }
}
