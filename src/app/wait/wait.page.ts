import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-wait',
  templateUrl: './wait.page.html',
  styleUrls: ['./wait.page.scss'],
})
export class WaitPage implements OnInit {

  constructor(private nav: NavController) {
    
   }

  ngOnInit() {
  }
  waitClick(){
    this.nav.navigateForward("/detail-bike");
  }
}
