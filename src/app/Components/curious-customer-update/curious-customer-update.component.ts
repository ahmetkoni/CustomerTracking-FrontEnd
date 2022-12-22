import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuriousCustomerService } from 'src/app/services/curious.customer.service';
import { CuriousCustomer } from 'src/app/models/curiousCustomer';

@Component({
  selector: 'app-curious-customer-update',
  templateUrl: './curious-customer-update.component.html',
  styleUrls: ['./curious-customer-update.component.css']
})
export class CuriousCustomerUpdateComponent implements OnInit {

  curiousCustomerUpdateForm:any;
  isFormReady:boolean = false
  constructor(private activatedroute:ActivatedRoute, private formBuilder:FormBuilder,private curiousCustomerService:CuriousCustomerService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params => {
      if (params["id"]) {
        this.getCuriousCustomer(params["id"])
      }
    
    })
  }


  CuriousCustomerUpdateForms(curiousCustomer:CuriousCustomer){
    this.curiousCustomerUpdateForm=this.formBuilder.group({
      id:[curiousCustomer.id],
      productId:[curiousCustomer.productId],
      curiousCustomerName:[curiousCustomer.curiousCustomerName],
      curiousCustomerLastName:[curiousCustomer.curiousCustomerLastName],
      curiousCustomerPhoneNumber:[curiousCustomer.curiousCustomerPhoneNumber],
      curiousCustomerEMail:[curiousCustomer.curiousCustomerEMail],
      curiousCustomerAddress:[curiousCustomer.curiousCustomerAddress],
      curiousCustomerCompany:[curiousCustomer.curiousCustomerCompany],
      curiousCustomerPosition:[curiousCustomer.curiousCustomerPosition],
      curiousCustomerNote:[curiousCustomer.curiousCustomerNote],
    })
  }


  getCuriousCustomer(id:string){
    this.curiousCustomerService.getById(id).subscribe(response => {
      if (response.success) {
        this.CuriousCustomerUpdateForms(response.data)
        this.isFormReady = true
      }else{
        this.toastrService.error("Hata")
      }
    })
    }

    update(curiousCustomer:CuriousCustomer){
      if(this.curiousCustomerUpdateForm.valid) {
      var updateFormModel = Object.assign({},this.curiousCustomerUpdateForm.value)
      this.curiousCustomerService.update(updateFormModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Successed")
      },responseError=>{
        console.log(responseError.error)
        this.toastrService.error(responseError.error)
      }) 
    }
    }
}
