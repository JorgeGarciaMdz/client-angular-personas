import { Component, OnInit } from '@angular/core';
import { Provincia } from '../entity/Provincia';
import { ProvinciaService } from '../service/provincia.service';


@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css']
})
export class ProvinciaComponent implements OnInit {

  constructor(private provinciaService:ProvinciaService) { }

  provincias:Provincia[] | undefined
  pp: Provincia[] = [
    {id: 1, name: "adss"}
  ]

  ngOnInit(): void {
    this.getListProvincia();
  }

  getListProvincia(): void {
    this.provinciaService.getAll().subscribe((p: Provincia[]) => {
      this.provincias = p
    },
      ( error: any) => console.log(error));
  }
}
