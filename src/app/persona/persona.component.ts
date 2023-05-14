import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona.model';
import { TokenService } from '../service/token.service';
import { SPersonaService } from '../service/s-persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  persona: Persona[] = [];

  constructor(private sPersona: SPersonaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void {
    this.sPersona.lista().subscribe(data => { this.persona = data; }) 
  }

  delete(id?: number){
    if(id != undefined){
      this.sPersona.delete(id).subscribe(
        data => {
          this.cargarPersona();
        }, err => {
          alert("No se pudo borrar la persona");
        }
      )
    }
  }
}
