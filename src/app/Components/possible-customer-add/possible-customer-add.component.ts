import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PossibleCustomerService } from 'src/app/services/possible.customer.service';

@Component({
  selector: 'app-possible-customer-add',
  templateUrl: './possible-customer-add.component.html',
  styleUrls: ['./possible-customer-add.component.css']
})
export class PossibleCustomerAddComponent implements OnInit {

  possibleCustomerAddForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private possibleCustomerService:PossibleCustomerService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createPossibleCustomerAddForm();
  }

  createPossibleCustomerAddForm(){
    this.possibleCustomerAddForm = this.formBuilder.group({
      productId:["",Validators.required],
      possibleCustomerName:["",Validators.required],
      possibleCustomerLastName:["",Validators.required],
      possibleCustomerPhone:["",Validators.required],
      possibleCustomerEMail:["",Validators.required],
      possibleCustomerAddress:["",Validators.required],
      possibleCustomerCompany:["",Validators.required],
      possibleCustomerPosition:["",Validators.required],
      possibleCustomerNote:["",Validators.required],
      customerDateTime:["",Validators.required],
    })
  }

  add(){
    if(this.possibleCustomerAddForm.valid){
      let possibleCustomerModel = Object.assign({},this.possibleCustomerAddForm.value)
      console.log(possibleCustomerModel)
      this.possibleCustomerService.add(possibleCustomerModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Successed")
      },responseError=>{
        console.log(responseError.error)
        this.toastrService.error(responseError.error)
      }) 
      
    }else{
      this.toastrService.error("Possible","Dikkat")
    }
    
  }

}
