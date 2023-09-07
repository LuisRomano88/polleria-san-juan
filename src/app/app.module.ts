import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LocalesComponent } from './locales/locales.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'registro', component: FormRegistroComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'locales', component: LocalesComponent},
  {path: 'quienesSomos', component: QuienesSomosComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FormRegistroComponent,
    FooterComponent,
    HomeComponent,
    LocalesComponent,
    QuienesSomosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
