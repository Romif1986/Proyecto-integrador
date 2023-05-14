import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { RegistroComponent } from './registro/registro.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './educacion/new-educacion.component';
import { EditEducacionComponent } from './educacion/edit-educacion.component';
import { EditPresentacionComponent } from './presentacion/edit-presentacion.component';
import { NewPresentacionComponent } from './presentacion/new-presentacion.component';
import { NewPersonaComponent } from './persona/new-persona.component';
import { EditPersonaComponent } from './persona/edit-persona.component';
import { NewHabilidadComponent } from './habilidad/new-habilidad.component';
import { EditHabilidadComponent } from './habilidad/edit-habilidad.component';







const routes: Routes = [
{path: '' , component : IndexComponent },
{ path: 'login' , component : LoginComponent },
{ path: 'registro' , component : RegistroComponent},
{ path: 'panel' , component : PanelComponent}, 
{ path: 'nuevaexp', component: NewExperienciaComponent},
{ path: 'editexp/:id', component: EditExperienciaComponent},
{ path: 'nuevaedu', component: NeweducacionComponent},
{ path: 'editedu/:id', component : EditEducacionComponent},
{ path: 'nuevapre', component : NewPresentacionComponent},
{ path: 'editpre/:id', component : EditPresentacionComponent},
{ path: 'newperso', component : NewPersonaComponent},
{ path: 'editperso/:id', component : EditPersonaComponent},
{ path: 'newhab', component : NewHabilidadComponent},
{ path: 'edithab/:id', component: EditHabilidadComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
