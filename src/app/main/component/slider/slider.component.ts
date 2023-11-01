import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
	public resim:string[]=[
		"https://www.wsupercars.com/wallpapers-regular/Formula-1/Scuderia-Ferrari/2023-Formula1-Ferrari-SF-23-001-1080.jpg",
		"https://www.wsupercars.com/wallpapers-regular/Formula-1/Scuderia-Ferrari/2023-Formula1-Ferrari-SF-23-002-1080.jpg",
		"https://www.wsupercars.com/wallpapers-regular/Formula-1/Scuderia-Ferrari/2023-Formula1-Ferrari-SF-23-003-1080.jpg",];
		constructor(){
			
		}
	solTik:boolean=false;
	sagTik:boolean=false;
	i:number=0;

	sol_tik(){
		this.solTik = !this.solTik;
		if(this.i-1<0){
			this.i=this.resim.length-1;
		}
		else
		this.i=this.i-1;
	}
	
	sag_tik(){
		this.sagTik = !this.sagTik;
		if(this.i+1>this.resim.length-1){
			this.i=0;
		}
		else
		this.i=this.i+1;
	}
}
