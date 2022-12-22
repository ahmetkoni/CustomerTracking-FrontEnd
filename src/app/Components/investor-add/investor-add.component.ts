import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InvestorService } from 'src/app/services/investor.service';

@Component({
  selector: 'app-investor-add',
  templateUrl: './investor-add.component.html',
  styleUrls: ['./investor-add.component.css']
})
export class InvestorAddComponent implements OnInit {

  investorAddForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private investorService:InvestorService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createInvestorAddForm();
  }

  createInvestorAddForm(){
    this.investorAddForm = this.formBuilder.group({
      investorName:["",Validators.required],
      investorLastName:["",Validators.required],
      investorPhoneNumber:["",Validators.required],
      investorEMail:["",Validators.required],
      investorAddress:["",Validators.required],
      investorCompany:["",Validators.required],
      investorPosition:["",Validators.required],
      invest:["",Validators.required],
      investorNote:["",Validators.required],
      investorDateTime:["",Validators.required],
    })
  }

  add(){
    if(this.investorAddForm.valid){
      let investorModel = Object.assign({},this.investorAddForm.value)
      this.investorService.add(investorModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Successed")
      },responseError=>{
        console.log(responseError.error)
        this.toastrService.error(responseError.error)
      }) 
      
    }else{
      this.toastrService.error("Investor Eksik","Dikkat")
    }
    
  }

}
