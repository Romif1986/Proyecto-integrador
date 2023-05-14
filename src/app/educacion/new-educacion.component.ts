import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Educacion } from "../model/educacion";
import { SEducacionService } from 'src/app/service/s-educacion.service';




@Component({
  selector: 'app-neweducacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;

constructor(private sEducacion: SEducacionService, private router: Router) { }


  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.sEducacion.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}