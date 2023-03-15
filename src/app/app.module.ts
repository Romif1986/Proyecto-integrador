import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { RegistroComponent } from './registro/registro.component';
import { BannerComponent } from './banner/banner.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { PanelComponent } from './panel/panel.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';
import { IndexComponent } from './index/index.component';
import { CertificadosComponent } from './certificados/certificados.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,

    RedesComponent,
    RegistroComponent,
    BannerComponent,   
    EducacionComponent,   
    ExperienciaComponent,
    PanelComponent, 
    PresentacionComponent,
    ProyectosComponent,
    SkillsComponent,
    IndexComponent,
    CertificadosComponent,

   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
