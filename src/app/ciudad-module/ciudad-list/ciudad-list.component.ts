import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../entity/ciudad.entity';
import { CiudadCrudService } from '../service/ciudad.crud.service';

@Component({
  selector: 'app-ciudad-list',
  templateUrl: './ciudad-list.component.html',
  styleUrls: ['./ciudad-list.component.css']
})
export class CiudadListComponent implements OnInit {

  ciudades: Ciudad[] | undefined;

  constructor(private ciudadCrudService: CiudadCrudService) { }

  ngOnInit(): void {
    this.getAll()
  }

  private getAll(): void{
    this.ciudadCrudService.getAll().subscribe( (c: Ciudad[]) => {
      this.ciudades = c;
    },
      (error: any) => console.log(error)
    );
  }

  public delete(id: any): void {
    this.ciudadCrudService.delete(id);
    this.ciudades?.forEach((c, i) => {
      if(c.id == id)
        this.ciudades?.splice(i, 1);
    });
  }
}
