import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ForeignInvestorService } from 'src/app/services/foreign.investor.service';

@Component({
  selector: 'app-foreign-investor-add',
  templateUrl: './foreign-investor-add.component.html',
  styleUrls: ['./foreign-investor-add.component.css']
})
export class ForeignInvestorAddComponent implements OnInit {

  foreignInvestorAddForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private foreignInvestorService:ForeignInvestorService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createForeignInvestorAddForm();
  }

  createForeignInvestorAddForm(){
    this.foreignInvestorAddForm = this.formBuilder.group({
      foreignInvestorName:["",Validators.required],
      foreignInvestorLastName:["",Validators.required],
      foreignInvestorPhoneNumber:["",Validators.required],
      foreignInvestorEMail:["",Validators.required],
      foreignInvestorAddress:["",Validators.required],
      foreignInvestorCompany:["",Validators.required],
      foreignInvestorPosition:["",Validators.required],
      invest:["",Validators.required],
      foreignInvestorNote:["",Validators.required],
      foreignInvestorCountry:["",Validators.required],
      foreignInvestorDateTime:["",Validators.required],
    })
  }

  add(){
    if(this.foreignInvestorAddForm.valid){
      let foreignInvestorModel = Object.assign({},this.foreignInvestorAddForm.value)
      this.foreignInvestorService.add(foreignInvestorModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Successed")
      },responseError=>{
        console.log(responseError.error)
        this.toastrService.error(responseError.error)
      }) 
      
    }else{
      this.toastrService.error("Foreign Investor Eksik","Dikkat")
    }
    
  }
}
