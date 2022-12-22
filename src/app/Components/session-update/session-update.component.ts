import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Session } from 'src/app/models/session';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session-update',
  templateUrl: './session-update.component.html',
  styleUrls: ['./session-update.component.css']
})
export class SessionUpdateComponent implements OnInit {

  sessionUpdateForm:any;
  isFormReady:boolean = false
  constructor(private activatedroute:ActivatedRoute, private formBuilder:FormBuilder,private sessionService:SessionService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params => {
      if (params["id"]) {
        this.getSession(params["id"])
      }
    
    })
  }

  SessionUpdateForms(session:Session){
    this.sessionUpdateForm = this.formBuilder.group({
      id:[session.id],
      customerInfo:[session.customerInfo],
      participant:[session.participant],
      sessionSubject:[session.sessionSubject],
      sessionResult:[session.sessionResult],
      sessionTitle:[session.sessionTitle],
    })
  }

  getSession(id:string){
    this.sessionService.getById(id).subscribe(response => {
      if (response.success) {
        this.SessionUpdateForms(response.data)
        this.isFormReady = true
      }else{
        this.toastrService.error("Hata")
      }
    })
    }

    update(session:Session){
      if(this.sessionUpdateForm.valid) {
      var updateFormModel = Object.assign({},this.sessionUpdateForm.value)
      this.sessionService.update(updateFormModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Successed")
      },responseError=>{
        console.log(responseError.error)
        this.toastrService.error(responseError.error)
      }) 
    }
    }

}
