import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../model/persona.model';
import { SPersonaService } from '../service/s-persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {
  perso: Persona = null;

  constructor(private sPersona: SPersonaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data =>{
        this.perso = data;
      }, err =>{
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.update(id, this.perso).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar persona");
         this.router.navigate(['']);
      }
    )
  }

}