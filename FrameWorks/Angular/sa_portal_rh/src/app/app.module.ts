import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FootersComponent } from './template/footers/footers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './view/inicio/inicio.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { HttpClientModule } from '@angular/common/http';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { FormsModule } from '@angular/forms';
import { CurriculosComponent } from './view/curriculos/curriculos.component';         
import { PainelCurriculosComponent } from './view/painel-curriculos/painel-curriculos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootersComponent,
    InicioComponent,
    VagasComponent,
    PainelVagasComponent,
    CurriculosComponent,
    PainelCurriculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
