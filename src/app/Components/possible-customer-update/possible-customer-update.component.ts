import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PossibleCustomerService } from 'src/app/services/possible.customer.service';
import { PossibleCustomer } from 'src/app/models/possibleCustomer';

@Component({
  selector: 'app-possible-customer-update',
  templateUrl: './possible-customer-update.component.html',
  styleUrls: ['./possible-customer-update.component.css']
})
export class PossibleCustomerUpdateComponent implements OnInit {

  possibleCustomerUpdateForm:any;
  isFormReady:boolean = false
  constructor(private activatedroute:ActivatedRoute, private formBuilder:FormBuilder,private possibleCustomerService:PossibleCustomerService,private toastrService:ToastrService) { }


  ngOnInit(): void {
    this.activatedroute.params.subscribe(params => {
      if (params["id"]) {
        this.getPossibleCustomer(params["id"])
      }
    
    })
  }

PossibleCustomerUpdateForms(possibleCustomer:PossibleCustomer){
  this.possibleCustomerUpdateForm = this.formBuilder.group({
    id:[possibleCustomer.id],
    productId:[possibleCustomer.productId],
    possibleCustomerName:[possibleCustomer.possibleCustomerName],
    possibleCustomerLastName:[possibleCustomer.possibleCustomerLastName],
    possibleCustomerPhone:[possibleCustomer.possibleCustomerPhone],
    possibleCustomerEMail:[possibleCustomer.possibleCustomerEMail],
    possibleCustomerAddress:[possibleCustomer.possibleCustomerAddress],
    possibleCustomerCompany:[possibleCustomer.possibleCustomerCompany],
    possibleCustomerPosition:[possibleCustomer.possibleCustomerPosition],
    possibleCustomerNote:[possibleCustomer.possibleCustomerNote],
    customerDateTime:[possibleCustomer.customerDateTime],
  })
}

getPossibleCustomer(id:string){
  this.possibleCustomerService.getById(id).subscribe(response => {
    if (response.success) {
      this.PossibleCustomerUpdateForms(response.data)
      this.isFormReady = true
    }else{
      this.toastrService.error("Hata")
    }
  })
  }

  update(possibleCustomer:PossibleCustomer){
    if(this.possibleCustomerUpdateForm.valid) {
    var updateFormModel = Object.assign({},this.possibleCustomerUpdateForm.value)
    this.possibleCustomerService.update(updateFormModel).subscribe(response=>{
      console.log(response)
      this.toastrService.success(response.message,"Successed")
    },responseError=>{
      console.log(responseError.error)
      this.toastrService.error(responseError.error)
    }) 
  }
  }

}
