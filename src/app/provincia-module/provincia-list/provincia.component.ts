import { Component, OnInit } from '@angular/core';
import { Provincia } from '../entity/Provincia';
import { ProvinciaCrudService } from '../service/provincia.crud.service';


@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css']
})
export class ProvinciaComponent implements OnInit {

  constructor(private provinciaCrudService:ProvinciaCrudService) { }

  provincias:Provincia[] | undefined
  pp: Provincia[] = [
    {id: 1, name: "adss"}
  ]

  ngOnInit(): void {
    this.getListProvincia();
  }

  getListProvincia(): void {
    this.provinciaCrudService.getAll().subscribe((p: Provincia[]) => {
      this.provincias = p
    },
      ( error: any) => console.log(error));
  }

  delete(id: any): void{
    this.provinciaCrudService.delete(id); 
    this.provincias?.forEach((p, i) => {
      if(p.id == id)
        this.provincias?.splice(i, 1);
    });
  }
}
