import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ends } from '../service/end_point';

 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  user: string;
  products: object;
  url: string;
  
  
  listProduct(): void{
    this.products = {data:'', error: true};
    this.ServiceService.getProduct().subscribe(response => {
      this.products = response;
    });
  };

  constructor(private ServiceService:ServiceService) {
    this.url = this.ServiceService.endReal();
    console.log(this.ServiceService.endReal());
  }


  getData() {
    console.log("This is the  best form");
  }
  ngOnInit() {
    this.user = this.ServiceService.getUser(2);
    this.listProduct();
  }

}
