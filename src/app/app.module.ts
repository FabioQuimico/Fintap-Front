import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeExtratoComponent } from './views/pages/home-extrato/home-extrato.component';
import { ExtratoComponent } from './views/pages/extrato/extrato.component';
import { CompraComponent } from './views/pages/compra/compra.component';
import { LoginComponent } from './views/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeExtratoComponent,
    ExtratoComponent,
    CompraComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
