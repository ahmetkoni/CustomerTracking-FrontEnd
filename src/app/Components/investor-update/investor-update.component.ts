import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InvestorService } from 'src/app/services/investor.service';
import { Investor } from 'src/app/models/investor';

@Component({
  selector: 'app-investor-update',
  templateUrl: './investor-update.component.html',
  styleUrls: ['./investor-update.component.css']
})
export class InvestorUpdateComponent implements OnInit {

  investorUpdateForm:any;
  isFormReady:boolean = false
  constructor(private activatedroute:ActivatedRoute, private formBuilder:FormBuilder,private investorService:InvestorService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params => {
      if (params["id"]) {
        this.getInvestor(params["id"])
      }
    
    })
  }
  InvestorUpdateForms(investor:Investor){
    this.investorUpdateForm=this.formBuilder.group({
      id:[investor.id],
      investorName:[investor.investorName],
      investorLastName:[investor.investorLastName],
      investorPhoneNumber:[investor.investorPhoneNumber],
      investorEMail:[investor.investorEMail],
      investorAddress:[investor.investorAddress],
      investorCompany:[investor.investorCompany],
      investorPosition:[investor.investorPosition],
      invest:[investor.invest],
      investorNote:[investor.investorNote],
      investorDateTime:[investor.investorDateTime],
    })
  }

  getInvestor(id:string){
    this.investorService.getById(id).subscribe(response => {
      if (response.success) {
        this.InvestorUpdateForms(response.data)
        this.isFormReady = true
      }else{
        this.toastrService.error("Hata")
      }
    })
    }

    update(investor:Investor){
      if(this.investorUpdateForm.valid) {
      var updateFormModel = Object.assign({},this.investorUpdateForm.value)
      this.investorService.update(updateFormModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Successed")
      },responseError=>{
        console.log(responseError.error)
        this.toastrService.error(responseError.error)
      }) 
    }
    }

}
