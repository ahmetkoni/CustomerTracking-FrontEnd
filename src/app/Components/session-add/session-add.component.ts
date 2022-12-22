import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session-add',
  templateUrl: './session-add.component.html',
  styleUrls: ['./session-add.component.css']
})
export class SessionAddComponent implements OnInit {

  sessionAddForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private sessionService:SessionService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createSessionAddForm();
  }

  createSessionAddForm(){
    this.sessionAddForm = this.formBuilder.group({
      customerInfo:["",Validators.required],
      participant:["",Validators.required],
      sessionSubject:["",Validators.required],
      sessionResult:["",Validators.required],
      sessionTitle:["",Validators.required],
    })
  }

  add(){
    if(this.sessionAddForm.valid){
      let sessionModel = Object.assign({},this.sessionAddForm.value)
      this.sessionService.add(sessionModel).subscribe(response=>{
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
