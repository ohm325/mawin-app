import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.page.html',
  styleUrls: ['./directions.page.scss'],
})
export class DirectionsPage implements OnInit {

  constructor(private nav : NavController) { }

  ngOnInit() {
  }

  goFinish(){

    this.nav.navigateForward('./finish');

  }

}
