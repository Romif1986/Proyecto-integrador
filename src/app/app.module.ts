import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { PersonaComponent } from './persona/persona.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { IndexComponent } from './index/index.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './educacion/new-educacion.component';
import { EditEducacionComponent } from './educacion/edit-educacion.component';
import { EditPresentacionComponent } from './presentacion/edit-presentacion.component';
import { NewPresentacionComponent } from './presentacion/new-presentacion.component';
import { NewPersonaComponent } from './persona/new-persona.component';
import { EditPersonaComponent } from './persona/edit-persona.component';
import { HabilidadComponent } from './habilidad/habilidad.component';
import { NewHabilidadComponent } from './habilidad/new-habilidad.component';
import { EditHabilidadComponent } from './habilidad/edit-habilidad.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';

















@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    PersonaComponent,

    PresentacionComponent,
    ProyectosComponent,
    IndexComponent,
    CertificadosComponent,
    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NeweducacionComponent,
    EditEducacionComponent,
    NewPresentacionComponent,
    EditPresentacionComponent,
    NewPersonaComponent,
    EditPersonaComponent,
    HabilidadComponent,
    NewHabilidadComponent,
    EditHabilidadComponent,
    ContactoComponent,
    
    
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,





  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

