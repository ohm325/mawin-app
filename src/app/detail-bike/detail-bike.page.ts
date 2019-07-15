import { Component, OnInit } from '@angular/core';
import { BikeContractService } from '../service/bike-contract.service';

@Component({
  selector: 'app-detail-bike',
  templateUrl: './detail-bike.page.html',
  styleUrls: ['./detail-bike.page.scss'],
})
export class DetailBikePage implements OnInit {

  constructor(private BikeontractService:BikeContractService) { }

  bike_detail = [
  {name:'ตะวัน สุวรรณหงษ์',phone:'11111-11111',email:'ton@mail.com',image:'/assets/02.jpg',plate:'142กทม',bike:'CBR 650F'}
  ];

  ngOnInit() {
    
    //let bikecontract = this.BikeontractService.selectbikecontract;
      console.log(this.bike_detail);


  }

}
