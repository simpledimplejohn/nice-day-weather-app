import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from "./apixu.service";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { ErrorComponent } from './error/error.component';
import { FindweatherComponent } from './findweather/findweather.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { TodayComponent } from './today/today.component';
import { FutureComponent } from './future/future.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavComponent,
    ErrorComponent,
    FindweatherComponent,
    FavoritesComponent,
    TodayComponent,
    FutureComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
