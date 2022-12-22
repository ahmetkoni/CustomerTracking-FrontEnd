import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PossibleCustomer } from 'src/app/models/possibleCustomer';
import { PossibleCustomerService } from 'src/app/services/possible.customer.service';

@Component({
  selector: 'app-possible-customer',
  templateUrl: './possible-customer.component.html',
  styleUrls: ['./possible-customer.component.css']
})
export class PossibleCustomerComponent implements OnInit {

  possibleCustomers:PossibleCustomer[]=[];
  filterText="";


  constructor(private possibleCustomerService:PossibleCustomerService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getPossibleCustomers();
  }

  getPossibleCustomers(){
    this.possibleCustomerService.getPossibleCustomers().subscribe(response=>{
      this.possibleCustomers = response.data;
      console.log(response.data)
    })
  }

  delete(id:string){
    this.possibleCustomerService.delete(id).subscribe(response=>{
      console.log(response)
      this.getPossibleCustomers();
    })
  }
}
