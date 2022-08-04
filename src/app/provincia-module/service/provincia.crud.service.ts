import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provincia} from 'src/app/provincia-module/entity/Provincia';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaCrudService {
  private url:string = 'http://127.0.0.1:8080/api/v1/provincia'
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Provincia[]>{
    return this.httpClient.get<Provincia[]>(this.url);
  }

  public findById(id: Number):Observable<Provincia> {
    return this.httpClient.get<Provincia>(this.url + '?id=' + id);
  }

  public create(provincia: Provincia){
    return this.httpClient.post(this.url, provincia)
    .subscribe( (data: any) => { console.log(data)});
  }

  public update(provincia: Provincia){
    return this.httpClient.post(this.url, provincia)
    .subscribe( (data: any) => { console.log(data)});
  }

  public delete(id: Number){
    const myUrl = `${this.url}?id=${id}`;
    this.httpClient.delete(myUrl)
    .subscribe( (data: any) => { console.log(data)});
  }
}
