import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MainModule } from './main/module/main.module';
import { GameModule } from './game/module/game.module';
import { LoginModule } from './login/module/login.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
	MatCardModule,
	MainModule,
	GameModule,
	LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
