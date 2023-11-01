import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplikComponent } from '../component/replik/replik.component';
import { ResimliComponent } from '../component/resimli/resimli.component';
import { GameComponent } from '../game.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
	ReplikComponent,
	ResimliComponent,
	GameComponent
  ],
  imports: [
    CommonModule,
	ReactiveFormsModule
  ],
  exports:[
	GameComponent
  ]
})
export class GameModule { }
