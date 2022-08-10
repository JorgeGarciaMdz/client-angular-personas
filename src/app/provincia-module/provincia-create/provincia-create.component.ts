import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Provincia } from '../entity/Provincia';
import { ProvinciaCrudService } from '../service/provincia.crud.service';

@Component({
  selector: 'app-provincia-create',
  templateUrl: './provincia-create.component.html',
  styleUrls: ['./provincia-create.component.css']
})
export class ProvinciaCreateComponent implements OnInit {

  id: Number | undefined;

  provinciaFormBuilder: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute,
    private provinciaCrudService: ProvinciaCrudService) {

    if (this.activatedRoute.snapshot.params['id'])
      this.findById(this.activatedRoute.snapshot.params['id']);

    this.provinciaFormBuilder = this.fb.group({
      id: [this.activatedRoute.snapshot.params['id']],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]]
    })
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  public get name() {
    return this.provinciaFormBuilder.get('name');
  }

  private findById(id: Number): void {
    this.provinciaCrudService.findById(id).subscribe(
      (data: Provincia) => {
        this.provinciaFormBuilder.setValue({id: this.id, name: data.name})
      }
    )
  }

  public onSubmitProvincia(event: Event): boolean {
    event.preventDefault;
    if (this.provinciaFormBuilder.invalid)
      return false;
    this.provinciaCrudService.create(this.provinciaFormBuilder.value);
    this.router.navigateByUrl('/provincia');
    return false;
  }
}
