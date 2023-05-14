import { Component, OnInit } from "@angular/core";
import { Presentacion } from "../model/presentacion";
import { SPresentacionService } from "../service/s-presentacion.service";
import { TokenService } from "../service/token.service";


@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  pre: Presentacion[] = [];

  isLogged = false; 

  constructor(private sPresentacion: SPresentacionService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarPresentacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPresentacion(): void {
    this.sPresentacion.lista().subscribe(data => { this.pre = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sPresentacion.delete(id).subscribe(
        data => {
          this.cargarPresentacion();
        }, err => {
          alert("No se pudo borrar la presentacion");
        }
      )
    }
  }
}