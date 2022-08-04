import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Provincia } from 'src/app/provincia-module/entity/Provincia';
import { ProvinciaCrudService } from 'src/app/provincia-module/service/provincia.crud.service';
import { Ciudad } from '../entity/ciudad.entity';
import { CiudadCrudService } from '../service/ciudad.crud.service';

@Component({
  selector: 'app-ciudad-create',
  templateUrl: './ciudad-create.component.html',
  styleUrls: ['./ciudad-create.component.css']
})
export class CiudadCreateComponent implements OnInit {

  id: number | undefined;
  provincias: Provincia[] | undefined;
  ciudad: Ciudad | undefined;

  ciudadFormBuilder: FormGroup;
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private provinciaCrudService: ProvinciaCrudService,
    private ciudadCrudService: CiudadCrudService, private router: Router) {
    
    this.provinciaCrudService.getAll().subscribe( (data: Provincia[]) => {
      this.provincias = data;
    });

    if(this.activatedRoute.snapshot.params['id'])
      this.findById(this.activatedRoute.snapshot.params['id']);
    
    this.ciudadFormBuilder = fb.group({
      id: [this.activatedRoute.snapshot.params['id']],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
      provinciaId: ['',[Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  get name() {
    return this.ciudadFormBuilder.get('name');
  }

  get provinciaId() {
    return this.ciudadFormBuilder.get('provinciaId');
  }

  onSubmitCiudad(e: Event){
    if (this.ciudadFormBuilder.valid) {
      this.ciudadCrudService.create(this.ciudadFormBuilder.value);
      this.router.navigateByUrl('/ciudad');
    }
  }

  findById(id: number){
    this.ciudadCrudService.findById(id).
    subscribe( (c: Ciudad) => {
      this.ciudad = c;
      this.ciudadFormBuilder.setValue({id: c.id, name: c.name, provinciaId: c.provinciaId});
    });
  }
}
