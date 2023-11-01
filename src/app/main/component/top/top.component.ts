import { Component } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {
	top=[
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
	
	const topKutusu=document.getElementById("topKutusu");
	if(topKutusu)
	topKutusu.className="mb-2 p-2";
	
	this.top.forEach((element,index) => {
	const top=document.createElement("div");
	const sira=document.createElement("h1");
	const imgResim=document.createElement("img");
	const baslik=document.createElement("p");

	top.className="row mb-2";
	sira.className="col-1";
	imgResim.className="col-3";
	baslik.className="col-7";

	top.style.border="1px solid #000";
	top.style.boxShadow="5px 5px 10px rgba(0, 0, 0, 0.5)";
	top.style.textAlign="center";
	top.style.margin="auto";
	top.style.padding="5px"

	sira.style.fontSize="25px";
	sira.style.fontWeight="bold"

	baslik.style.textDecoration="none";
	baslik.style.color="black";
	baslik.style.fontSize="25px";
	baslik.style.whiteSpace="nowrap";
	baslik.style.maxHeight="2em";
	baslik.style.textOverflow="ellipsis";
	baslik.style.overflow="hidden";

	imgResim.style.height="100px";
	imgResim.style.width="100px";

	if(topKutusu){
		topKutusu.style.height="540px";
		topKutusu.style.overflow="auto";
		}

	sira.textContent=String(`${index+1}`);
	baslik.textContent=element.ad;
	imgResim.src=element.url

	topKutusu?.appendChild(top);
	top.appendChild(sira);
	top.appendChild(imgResim);
	top.appendChild(baslik);
	});
	}
}
