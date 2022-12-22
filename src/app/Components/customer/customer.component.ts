import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[]=[];
  filterText="";
  
  constructor(private customerService:CustomerService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(response=>{
      this.customers = response.data;
      console.log(response.data)
    })
  }

  delete(id:string){
    this.customerService.delete(id).subscribe(response=>{
      console.log(response)
      this.getCustomers();
    })
  }

}
