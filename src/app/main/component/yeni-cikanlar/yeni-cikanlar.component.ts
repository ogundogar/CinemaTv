import { Component } from '@angular/core';

@Component({
  selector: 'app-yeni-cikanlar',
  templateUrl: './yeni-cikanlar.component.html',
  styleUrls: ['./yeni-cikanlar.component.css']
})
export class YeniCikanlarComponent {
	yeniGelenler=[
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
	ngOnInit(){
		const yeniKutu=document.getElementById("yeniKutu");
		const div=document.createElement("div");
		if(yeniKutu){
			yeniKutu.className="mb-2 p-2";
			yeniKutu.style.overflowX="scroll";
			yeniKutu.style.whiteSpace="nowrap";
			yeniKutu.style.height="380px";
		}

		this.yeniGelenler.forEach(element => {
		const yeni=document.createElement("span");
		const baslik=document.createElement("h2");
		const imgResim=document.createElement("img");

		div.className="row";
		yeni.className="m-2";
		imgResim.className="col-12";
		baslik.className="col-12";
		
		yeni.style.border="1px solid #000";
		yeni.style.boxShadow="5px 5px 10px rgba(0, 0, 0, 0.5)";
		yeni.style.textAlign="center";
		yeni.style.margin="auto";
		yeni.style.width="250px";

		baslik.style.textDecoration="none";
		baslik.style.color="black";
		baslik.style.fontSize="15px";
		baslik.style.whiteSpace="nowrap";
		baslik.style.maxHeight="2em";
		baslik.style.textOverflow="ellipsis";
		baslik.style.overflow="hidden";
		baslik.style.fontWeight="bold"

		imgResim.style.height="90%";
		imgResim.style.width="90%";

		baslik.textContent=element.ad;
		imgResim.src=element.url

		yeniKutu?.appendChild(div);
		div.appendChild(yeni);
		yeni.appendChild(imgResim);
		yeni.appendChild(baslik);
		});
	}
}
