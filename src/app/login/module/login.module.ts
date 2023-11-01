import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login.component';
import { GirisEkraniComponent } from '../giris-ekrani/giris-ekrani.component';
import { KayitEkraniComponent } from '../kayit-ekrani/kayit-ekrani.component';


@NgModule({
  declarations: [
	LoginComponent,
	GirisEkraniComponent,
	KayitEkraniComponent
  ],
  imports: [
    CommonModule,
	ReactiveFormsModule
  ],
  exports:[
	LoginComponent
  ],
})
export class LoginModule { }
