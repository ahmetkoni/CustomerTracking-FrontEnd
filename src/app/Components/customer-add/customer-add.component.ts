import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerAddForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private customerService:CustomerService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCustomerAddForm();
  }

 
  createCustomerAddForm(){
    this.customerAddForm = this.formBuilder.group({
      companyName:["",Validators.required],
      companyAddress:["",Validators.required],
      companyWebAddress:["",Validators.required],
      managerName:["",Validators.required],
      managerPhone:["",Validators.required],
      managerEMail:["",Validators.required],
      companyWorkSpace:["",Validators.required],
      productId:["",Validators.required],
      buyProductDate:["",Validators.required],
      licenseTime:["",Validators.required],
      endProductDate:["",Validators.required],
      price:["",Validators.required],
      note:["",Validators.required],
      version:["",Validators.required],
    })
  }

  add(){
    if(this.customerAddForm.valid){
      let customerModel = Object.assign({},this.customerAddForm.value)
      this.customerService.add(customerModel).subscribe(response=>{
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
