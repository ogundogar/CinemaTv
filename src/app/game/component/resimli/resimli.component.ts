import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resimli',
  templateUrl: './resimli.component.html',
  styleUrls: ['./resimli.component.css']
})
export class ResimliComponent {
	resimler =[
		{
			ad:"Yıldızlararası",
			url:"https://tr.web.img2.acsta.net/pictures/14/10/09/15/52/150664.jpg"
		},
		{
			ad:"Dövüş Kulübü",
			url:"https://i.pinimg.com/564x/66/cc/6e/66cc6efef84514f5e683d71a55d6a096.jpg"
		},
		{
			ad:"Yüzüklerin Efendisi Yüzük Kardeşliği",
			url:"https://www.arthipo.com/image/cache/catalog/poster/movie/1-758/pfilm49-49-film-lord-of-the-rings-fellow-2-500x500h.webp"
		},
		{
			ad:"Matrix",
			url:"https://tr.web.img2.acsta.net/r_1280_720/img/1b/42/1b427ba68cb9e9086246256c1db4f719.jpg"
		},
		{
			ad:"GodFather",
			url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_77FsAlS9g9D9Wb0Cb2DvlUvrvyQtYjBuAw&usqp=CAU"
		},
		{
			ad:"GodFather2",
			url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETCNVw8bttXonn5P1gyfl5D8-5TLAXANuQA&usqp=CAU"
		}
	]
	randomNum = Math.floor(Math.random() * (this.resimler.length - 0)) + 0;
	film=this.resimler[this.randomNum];
	resim=this.film.url;
	tahmin="???";
	devam=false;
	kaybettin=false;
	cerceveRengi:string="white";
	yanlisSayisi:number=0;
	frm:FormGroup;
	dizi:string[]=[];

	constructor(private formBuilder:FormBuilder) {
		this.frm=formBuilder.group({ tahmin:[""] });
	}

	oyunaBasla(){
		this.devam=false;
		this.kaybettin=false;
		this.yanlisSayisi=0;
		this.randomNum = Math.floor(Math.random() * (this.resimler.length - 0)) + 0;
		this.film=this.resimler[this.randomNum];
		this.resim=this.film.url;
		this.tahmin="???";
		
		const cerceve = document.getElementById("cerceve");
		const imgResim = document.getElementById("imgResim");
		const yazi = document.getElementById("yazi");
		const can=document.getElementById("can");
		const btn=document.getElementById("btn");

		if(cerceve){
			cerceve.style.border = "1px solid white";
			cerceve.style.boxShadow ="0px 0px 10px white";
		}
		if(imgResim){
			imgResim.style.filter="blur(6px)"
		}
		if(yazi){
			yazi.style.color="white"
		}
		if(btn){
			btn.innerHTML="Tamam";
		}
		if(can){
			can.innerHTML="❤️❤️❤️❤️❤️";
		}
	}
	oyunaDevamEt(){
		this.devam=false;
		this.randomNum = Math.floor(Math.random() * (this.resimler.length - 0)) + 0;
		this.film=this.resimler[this.randomNum];
		this.resim=this.film.url;
		this.tahmin="???";
		
		this.dizi.length=0;

		const cerceve = document.getElementById("cerceve");
		const imgResim = document.getElementById("imgResim");
		const yazi = document.getElementById("yazi");

		if(cerceve){
			cerceve.style.border = "1px solid white";
			cerceve.style.boxShadow ="0px 0px 10px white";
		}
		if(imgResim){
			imgResim.style.filter="blur(6px)"
		}
		if(yazi){
			yazi.style.color="white";
		}
	}
	onSubmit(){
		//li leri silmek için
		const li=document.querySelectorAll("li");
		li.forEach((item)=>{
		item.remove();
		})

		const cerceve = document.getElementById("cerceve");
		const imgResim = document.getElementById("imgResim");
		const yazi = document.getElementById("yazi");
		const can=document.getElementById("can");
		const textTahmin=document.getElementById("textTahmin") as HTMLInputElement;
		
		let cevap=textTahmin.value.toLowerCase();

		if(cevap==this.film.ad.toLowerCase()){
			this.tahmin=this.film.ad;
			this.devam=true;
			if(cerceve){
				cerceve.style.border = "1px solid green";
				cerceve.style.boxShadow ="0px 0px 10px green";
			}
			if(imgResim){
				imgResim.style.filter="blur(0px)"
			}
			if(yazi){
				yazi.style.color="green"
			}
			if(textTahmin){
				textTahmin.value ="";
			}
		}
		else{
			this.yanlisSayisi=this.yanlisSayisi+1;
			if(this.yanlisSayisi==1){
				if(can){
					can.innerHTML="❤️❤️❤️❤️💔";
				}
			}
			else if(this.yanlisSayisi==2){
				if(can){
					can.innerHTML="❤️❤️❤️💔💔";
				}
			}
			else if(this.yanlisSayisi==3){
				if(can){
					can.innerHTML="❤️❤️💔💔💔";
				}
			}
			else if(this.yanlisSayisi==4){
				if(can){
					can.innerHTML="❤️💔💔💔💔";
				}
			}
			else if(this.yanlisSayisi==5){
				if(can){
					can.innerHTML="💔💔💔💔💔";
				}
			this.tahmin=this.film.ad;
			this.kaybettin=true;
			if(cerceve){
				cerceve.style.border = "1px solid red";
				cerceve.style.boxShadow = "0px 0px 10px red";
			}
			if(imgResim){
				imgResim.style.filter="blur(0px)"
				}
			if(yazi){
					yazi.style.color="red"
			}
			}
			
		}
	}
	arama(){
		const aramaListesi = document.getElementById("arama-list");
		const textTahmin=document.getElementById("textTahmin") as HTMLInputElement;

		if(aramaListesi)
		aramaListesi.innerHTML = "";
		this.dizi.length=0;
		if(this.frm.value.tahmin!==""){
		this.resimler.forEach(element => {
			if(element.ad.substring(0,this.frm.value.tahmin.length).toLowerCase()==this.frm.value.tahmin.toLowerCase()){
				this.dizi.push(element.ad);
				}
			});
		}
		for(let i=0;i<this.dizi.length;i++){
			const liste = document.createElement("li");
			liste.textContent = this.dizi[i];
			liste.id=`${"li"+i}`
			liste.style.listStyleType="none";
			// Mouse üzerine gelindiğinde
			liste.addEventListener("mouseover", function() {
				liste.style.backgroundColor="blue";
			});

			// Mouse üzerinden çekildiğinde
			liste.addEventListener("mouseout", function() {
				liste.style.backgroundColor="white"; 
			});
			// Mouse tıklama
			if(liste){liste.addEventListener("click", function() {
				const li=document.querySelectorAll("li");
				li.forEach((item)=>{
				item.remove();
				if(textTahmin){
					textTahmin.value=String(liste.textContent);
					console.log(liste.textContent);
				}
				
				})
			});}
			if(aramaListesi)
			aramaListesi.appendChild(liste);
		}
	}
}
