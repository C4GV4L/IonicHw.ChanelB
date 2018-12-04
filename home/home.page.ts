import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(){}

    catPower(){ 
      let video = document.getElementById("skatcatVid")
        if(video.style.display= "none"){ 
            video.style.display= "block"
        }

    }


}
