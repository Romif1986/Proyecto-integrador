import { Component } from '@angular/core';
import { Presentacion } from '../model/presentacion';
import { ActivatedRoute, Router } from '@angular/router';
import { SPresentacionService } from '../service/s-presentacion.service';

@Component({
  selector: 'app-edit-presentacion',
  templateUrl: './edit-presentacion.component.html',
  styleUrls: ['./edit-presentacion.component.css']
})
export class EditPresentacionComponent {
  pre: Presentacion = null;

  constructor(private sPresentacion: SPresentacionService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPresentacion.detail(id).subscribe(
      data =>{
        this.pre = data;
      }, err =>{
        alert("Error al modificar la presentacion");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPresentacion.update(id, this.pre).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar la presentacion");
         this.router.navigate(['']);
      }
    )
  }


}
