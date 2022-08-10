import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudad } from 'src/app/ciudad-module/entity/ciudad.entity';
import { CiudadCrudService } from 'src/app/ciudad-module/service/ciudad.crud.service';
import { Persona } from '../entity/Persona';
import { PersonaCrudService } from '../service/persona-crud.service';

@Component({
  selector: 'app-persona-create',
  templateUrl: './persona-create.component.html',
  styleUrls: ['./persona-create.component.css']
})
export class PersonaCreateComponent implements OnInit {

  persona: Persona | undefined;

  ciudades: Ciudad[] | undefined;

  personaFormBuilder: FormGroup;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private ciudadCrudService: CiudadCrudService,
    private personaCrudService: PersonaCrudService, private router: Router) {
    
    this.personaFormBuilder = fb.group({
      id: [this.activatedRoute.snapshot.params['id']],
      dni: ['', [Validators.required, Validators.min(1000), Validators.max(99999999)]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
      birthday: ['', [Validators.required]],
      ciudadId: ['',[Validators.required]]
    });

    ciudadCrudService.getAll().subscribe( (data: Ciudad[]) => {
      this.ciudades = data
    });

    if(this.activatedRoute.snapshot.params['id'])
      this.findById(this.activatedRoute.snapshot.params['id']);
  }

  get dni(){ return this.personaFormBuilder.get('dni') }
  get name(){ return this.personaFormBuilder.get('name') }
  get lastname(){ return this.personaFormBuilder.get('lastname') }
  get birthday(){ return this.personaFormBuilder.get('birthday') }
  get ciudadId(){ return this.personaFormBuilder.get('ciudadId') }

  ngOnInit(): void {
  }

  onSubmitPersona(e: Event){
    console.log(this.personaFormBuilder.valid)
    console.log(this.personaFormBuilder.value)
    if(this.personaFormBuilder.valid){
      this.personaCrudService.create(this.personaFormBuilder.value);
      this.router.navigateByUrl('/persona');
    }
  }

  findById(id: Number){
    this.personaCrudService.findById(id).subscribe( (persona: Persona) => {
      this.personaFormBuilder.setValue({
        id: persona.id,
        dni: persona.dni,
        name: persona.name,
        lastname: persona.lastname,
        birthday: persona.birthday?.substring(0,10),
        ciudadId: persona.ciudadId
      });
      this.persona = persona;
    })
  }

}
