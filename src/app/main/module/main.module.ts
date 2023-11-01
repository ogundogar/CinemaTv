import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YeniCikanlarComponent } from '../component/yeni-cikanlar/yeni-cikanlar.component';
import { SliderComponent } from '../component/slider/slider.component';
import { HaberlerComponent } from '../component/haberler/haberler.component';
import { TopComponent } from '../component/top/top.component';
import { MainComponent } from '../main.component';




@NgModule({
  declarations: [
    SliderComponent,
    HaberlerComponent,
    YeniCikanlarComponent,
    TopComponent,
	MainComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
	MainComponent
  ]
})
export class MainModule { }
