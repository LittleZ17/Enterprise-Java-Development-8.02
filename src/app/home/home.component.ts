import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  projects:any[]=[
    {
      name: "Arnika Gallery",
      img: '../../assets/gallery.png',
      info: "Project for the main image of a minimalist style art gallery."
    },{
      name: "Beauty Blooms",
      img: '../../assets/beauty.png',
      info: "Radiant elegance, pure care: Our project with BLOOM"
    },{
      name: "Campie",
      img: '../../assets/camping.png',
      info:"Wild adventures. Exceptional refuges. Explore and relax in style."
    },{
      name: "SoftDrinks Color",
      img:'../../assets/drinks.png',
      info: "Project with Softdrinks for their summer edition 2022"
    },{
      name: "Winder Ibank",
      img: '../../assets/ibank.png',
      info:"Modern security. Fast and reliable transactions. Solid financial connection"
    },{
      name: "Ros BeStylish",
      img: '../../assets/fashion.png',
      info: "Urban style. Sporty attitude. Dress with confidence and comfort."
    },{
      name: "Ovido",
      img: '../../assets/video.png',
      info:"A vibrant logo that lights up your television senses."
    },{
      name: "Doradas Security",
      img: '../../assets/security.png',
      info: "Impenetrable protection. A logo that provides peace of mind and confidence."
    },{
      name: "Ultra24 Channel",
      img: '../../assets/chanel.png',
      info:"Design and emblem of a serious and international communication channel."
    }
  ]
  

}
