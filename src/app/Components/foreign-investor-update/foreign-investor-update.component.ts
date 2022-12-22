import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForeignInvestorService } from 'src/app/services/foreign.investor.service';
import { ToastrService } from 'ngx-toastr';
import { ForeignInvestor } from 'src/app/models/foreignInvestor';

@Component({
  selector: 'app-foreign-investor-update',
  templateUrl: './foreign-investor-update.component.html',
  styleUrls: ['./foreign-investor-update.component.css']
})
export class ForeignInvestorUpdateComponent implements OnInit {

  foreignInvestorUpdateForm:any;
  isFormReady:boolean = false
  constructor(private activatedroute:ActivatedRoute, private formBuilder:FormBuilder,private foreignInvestorService:ForeignInvestorService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params => {
      if (params["id"]) {
        this.getForeignInvestor(params["id"])
      }
    
    })
  }

  ForeignInvestorUpdateForms(foreignInevstor:ForeignInvestor){
    this.foreignInvestorUpdateForm=this.formBuilder.group({
      id:[foreignInevstor.id],
      foreignInvestorName:[foreignInevstor.foreignInvestorName],
      foreignInvestorLastName:[foreignInevstor.foreignInvestorLastName],
      foreignInvestorPhoneNumber:[foreignInevstor.foreignInvestorPhoneNumber],
      foreignInvestorEMail:[foreignInevstor.foreignInvestorEMail],
      foreignInvestorAddress:[foreignInevstor.foreignInvestorAddress],
      foreignInvestorCompany:[foreignInevstor.foreignInvestorCompany],
      foreignInvestorPosition:[foreignInevstor.foreignInvestorPosition],
      invest:[foreignInevstor.invest],
      foreignInvestorNote:[foreignInevstor.foreignInvestorNote],
      foreignInvestorCountry:[foreignInevstor.foreignInvestorCountry],
      foreignInvestorDateTime:[foreignInevstor.foreignInvestorDateTime]
    })
  }

  getForeignInvestor(id:string){
    this.foreignInvestorService.getById(id).subscribe(response => {
      if (response.success) {
        this.ForeignInvestorUpdateForms(response.data)
        this.isFormReady = true
      }else{
        this.toastrService.error("Hata")
      }
    })
    }

    update(foreignInvestor:ForeignInvestor){
      if(this.foreignInvestorUpdateForm.valid) {
      var updateFormModel = Object.assign({},this.foreignInvestorUpdateForm.value)
      this.foreignInvestorService.update(updateFormModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Successed")
      },responseError=>{
        console.log(responseError.error)
        this.toastrService.error(responseError.error)
      }) 
    }
    }

}
