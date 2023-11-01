import { Component } from '@angular/core';

@Component({
  selector: 'app-haberler',
  templateUrl: './haberler.component.html',
  styleUrls: ['./haberler.component.css'],
})

export class HaberlerComponent {

haberler=[
	{
		ad:"Yıldızlararası",
		url:"https://tr.web.img2.acsta.net/pictures/14/10/09/15/52/150664.jpg",
		metin:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
		possimus ut expedita, voluptas nostrum enim magni, repudiandae ratione
		ipsa suscipit consequatur. Tenetur, officia. Illo ipsam consequuntur
		molestiae quo, aliquam officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
		possimus ut expedita, voluptas nostrum enim magni, repudiandae ratione
		ipsa suscipit consequatur. Tenetur, officia. Illo ipsam consequuntur
		molestiae quo, aliquam officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
		possimus ut expedita, voluptas nostrum enim magni, repudiandae ratione
		ipsa suscipit consequatur. Tenetur, officia. Illo ipsam consequuntur
		molestiae quo, aliquam officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
		possimus ut expedita, voluptas nostrum enim magni, repudiandae ratione
		ipsa suscipit consequatur. Tenetur, officia. Illo ipsam consequuntur
		molestiae quo, aliquam officia.`
	},
	{
		ad:"Dövüş Kulübü",
		url:"https://i.pinimg.com/564x/66/cc/6e/66cc6efef84514f5e683d71a55d6a096.jpg",
		metin:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
		possimus ut expedita, voluptas nostrum enim magni, repudiandae ratione
		ipsa suscipit consequatur. Tenetur, officia. Illo ipsam consequuntur
		molestiae quo, aliquam officia.`
	},
	{
		ad:"Yüzüklerin Efendisi Yüzük Kardeşliği",
		url:"https://www.arthipo.com/image/cache/catalog/poster/movie/1-758/pfilm49-49-film-lord-of-the-rings-fellow-2-500x500h.webp",
		metin:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
		possimus ut expedita, voluptas nostrum enim magni, repudiandae ratione
		ipsa suscipit consequatur. Tenetur, officia. Illo ipsam consequuntur
		molestiae quo, aliquam officia.`
	},
	{
		ad:"Matrix",
		url:"https://tr.web.img2.acsta.net/r_1280_720/img/1b/42/1b427ba68cb9e9086246256c1db4f719.jpg",
		metin:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
		possimus ut expedita, voluptas nostrum enim magni, repudiandae ratione
		ipsa suscipit consequatur. Tenetur, officia. Illo ipsam consequuntur
		molestiae quo, aliquam officia.`
	},
	{
		ad:"GodFather",
		url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_77FsAlS9g9D9Wb0Cb2DvlUvrvyQtYjBuAw&usqp=CAU",
		metin:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
		possimus ut expedita, voluptas nostrum enim magni, repudiandae ratione
		ipsa suscipit consequatur. Tenetur, officia. Illo ipsam consequuntur
		molestiae quo, aliquam officia.`
	},
	{
		ad:"GodFather2",
		url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETCNVw8bttXonn5P1gyfl5D8-5TLAXANuQA&usqp=CAU",
		metin:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
		possimus ut expedita, voluptas nostrum enim magni, repudiandae ratione
		ipsa suscipit consequatur. Tenetur, officia. Illo ipsam consequuntur
		molestiae quo, aliquam officia.`
	},
]
constructor(){
}

ngOnInit(){
	const haberlerKutusu=document.getElementById("haberlerKutusu");
	if(haberlerKutusu)
	haberlerKutusu.className="container";

	this.haberler.forEach(element => {
		
	const haber=document.createElement("div");
	const spanBaslik=document.createElement("span");
	const h3Baslik=document.createElement("h3");
	const metinP=document.createElement("p");
	const devamA=document.createElement("a");
	const spanResim=document.createElement("span");
	const img=document.createElement("img");

	haber.className="row mb-3 bg-warning";
	spanBaslik.className="col-8";
	devamA.style.position="absolute";
	devamA.style.right="0";
	spanResim.className="col-4";
	img.className="d-block w-100";
	h3Baslik.style.fontWeight="bold"

	h3Baslik.textContent =element.ad;
	metinP.textContent =element.metin;
	img.src=element.url;
	devamA.textContent =">>>";
	devamA.href="";
	
	haber.style.border="1px solid #000";
	haber.style.boxShadow="5px 5px 10px rgba(0, 0, 0, 0.5)";
	haber.style.height="250px";

	img.style.width="260px";
	img.style.height="220px";

	metinP.style.maxHeight="9em";
	metinP.style.overflow="hidden";
	
	if(haberlerKutusu){
	haberlerKutusu.style.height="540px";
	haberlerKutusu.style.overflow="auto";
	}
	

	haber.appendChild(spanBaslik);
	spanBaslik.appendChild(h3Baslik);
	spanBaslik.appendChild(metinP);
	spanBaslik.appendChild(devamA);
	haber.appendChild(spanResim);
	spanResim.appendChild(img);
	haberlerKutusu?.appendChild(haber);
		
	});
	
}

}
