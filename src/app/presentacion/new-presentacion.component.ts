import { Component } from '@angular/core';
import { Presentacion } from '../model/presentacion';
import { Router } from '@angular/router';
import { SPresentacionService } from '../service/s-presentacion.service';

@Component({
  selector: 'app-new-presentacion',
  templateUrl: './new-presentacion.component.html',
  styleUrls: ['./new-presentacion.component.css']
})
export class NewPresentacionComponent {
  descripcion: string;

  constructor(private router: Router, private sPresentacion: SPresentacionService ) { }
  
  
    ngOnInit(): void {
    }
  
    onCreate(): void{
      const presentacion = new Presentacion(this.descripcion);
      this.sPresentacion.save(presentacion).subscribe(
        data =>{
          alert("Presentacion añadida correctamente");
          this.router.navigate(['']);
        }, err =>{
          alert("falló");
          this.router.navigate(['']);
        }
      )
    }
  
  
}
