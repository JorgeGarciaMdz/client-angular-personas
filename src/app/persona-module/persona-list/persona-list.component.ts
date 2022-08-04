import { Component, OnInit } from '@angular/core';
import { Persona } from '../entity/Persona';
import { PersonaCrudService } from '../service/persona-crud.service';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {

  personas: Persona[] | undefined;

  constructor(private personaCrudService: PersonaCrudService) { }

  ngOnInit(): void {
    this.getAll()
  }

  private getAll(): void {
    this.personaCrudService.getAll().subscribe( (data: Persona[]) => {
      this.personas = data;
    });
  }

  delete(id: any): void{
    this.personaCrudService.delete(id);
    this.personas?.forEach((p, i) => {
      if(p.id == id)
        this.personas?.splice(i, 1);
    });
  }

}
