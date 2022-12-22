import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CuriousCustomer } from 'src/app/models/curiousCustomer';
import { CuriousCustomerService } from 'src/app/services/curious.customer.service';

@Component({
  selector: 'app-curious-customer',
  templateUrl: './curious-customer.component.html',
  styleUrls: ['./curious-customer.component.css']
})
export class CuriousCustomerComponent implements OnInit {

  curiousCustomers:CuriousCustomer[]=[];
  filterText="";
  constructor(private curiousCustomerService:CuriousCustomerService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCuriousCustomers();
    this.toastrService.info("wqefdvsd")
  }

  getCuriousCustomers(){
    this.curiousCustomerService.getCuriousCustomers().subscribe(response=>{
      this.curiousCustomers = response.data;
      console.log(response.data)
    })
  }

  delete(id:string){
    this.curiousCustomerService.delete(id).subscribe(response=>{
      console.log(response)
      this.getCuriousCustomers();
    })
  }
}
