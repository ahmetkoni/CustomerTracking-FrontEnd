import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CuriousCustomerService } from 'src/app/services/curious.customer.service';

@Component({
  selector: 'app-curious-customer-add',
  templateUrl: './curious-customer-add.component.html',
  styleUrls: ['./curious-customer-add.component.css']
})
export class CuriousCustomerAddComponent implements OnInit {

  curiousCustomerAddForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private curiousCustomerService:CuriousCustomerService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCuriousCustomerAddForm();
  }

  createCuriousCustomerAddForm(){
    this.curiousCustomerAddForm = this.formBuilder.group({
    productId:["",Validators.required],
    curiousCustomerName:["",Validators.required],
    curiousCustomerLastName:["",Validators.required],
    curiousCustomerPhoneNumber:["",Validators.required],
    curiousCustomerEMail:["",Validators.required],
    curiousCustomerAddress:["",Validators.required],
    curiousCustomerCompany:["",Validators.required],
    curiousCustomerPosition:["",Validators.required],
    curiousCustomerNote:["",Validators.required],
    })
    
  }

  add(){
    if(this.curiousCustomerAddForm.valid){
      let curiousCustomerModel = Object.assign({},this.curiousCustomerAddForm.value)
      this.curiousCustomerService.add(curiousCustomerModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Successed")
      },responseError=>{
        console.log(responseError.error)
        this.toastrService.error(responseError.error)
      }) 
      
    }else{
      this.toastrService.error("Customer Eksik","Dikkat")
    }
    
  }
}
