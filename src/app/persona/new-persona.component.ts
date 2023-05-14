import { Component, OnInit } from '@angular/core';
import { SPersonaService } from '../service/s-persona.service';
import { Router } from '@angular/router';
import { Persona } from '../model/persona.model';

@Component({
  selector: 'app-new-persona',
  templateUrl: './new-persona.component.html',
  styleUrls: ['./new-persona.component.css']
})
export class NewPersonaComponent implements OnInit {
  titulo: string = '';
  nombre: string = '';
  descripcion: string = '';

  constructor(private sPersona: SPersonaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const perso = new Persona(this.titulo, this.nombre, this.descripcion);
    this.sPersona.save(perso).subscribe(
      data => {
        alert("Persona añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }


}
