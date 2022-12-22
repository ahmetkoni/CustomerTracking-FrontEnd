import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customerUpdateForm:any;
  isFormReady:boolean = false
  constructor(private activatedroute:ActivatedRoute, private formBuilder:FormBuilder,private customerService:CustomerService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params => {
      if (params["id"]) {
        this.getCustomer(params["id"])
      }
    
    })
  }

CustomerUpdateForms(customer:Customer){
  this.customerUpdateForm=this.formBuilder.group({
    id:[customer.id],
    companyName:[customer.companyName],
    companyAddress:[customer.companyAddress],
    companyWebAddress:[customer.companyWebAddress],
    managerName:[customer.managerName],
    managerPhone:[customer.managerPhone],
    managerEMail:[customer.managerEMail],
    companyWorkSpace:[customer.companyWorkSpace],
    productId:[customer.productId],
    buyProductDate:[customer.buyProductDate],
    licenseTime:[customer.licenseTime],
    endProductDate:[customer.endProductDate],
    price:[customer.price],
    note:[customer.note],
    version:[customer.version],
 
})

}
getCustomer(id:string){
this.customerService.getById(id).subscribe(response => {
  if (response.success) {
    this.CustomerUpdateForms(response.data)
    this.isFormReady = true
  }else{
    this.toastrService.error("Hata")
  }
})
}
update(customer:Customer){
  if(this.customerUpdateForm.valid) {
  var updateFormModel = Object.assign({},this.customerUpdateForm.value)
  this.customerService.update(updateFormModel).subscribe(response=>{
    console.log(response)
    this.toastrService.success(response.message,"Successed")
  },responseError=>{
    console.log(responseError.error)
    this.toastrService.error(responseError.error)
  }) 
}
}

}
