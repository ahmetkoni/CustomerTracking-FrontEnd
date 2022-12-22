import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RoutineServiceService } from 'src/app/services/routine.service.service';

@Component({
  selector: 'app-routine-service-add',
  templateUrl: './routine-service-add.component.html',
  styleUrls: ['./routine-service-add.component.css']
})
export class RoutineServiceAddComponent implements OnInit {

  routineServiceAddForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private routineServiceService:RoutineServiceService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.creaateRoutineServiceAddForm();
  }

  creaateRoutineServiceAddForm(){
    this.routineServiceAddForm = this.formBuilder.group({
      productName:["",Validators.required],
      productId:["",Validators.required],
      customerName:["",Validators.required],
      customerId:["",Validators.required],
      routineServiceDescription:["",Validators.required],
      date:["",Validators.required],
      time:["",Validators.required],
      employee:["",Validators.required],
    })
  }

  add(){
    if(this.routineServiceAddForm.valid){
      let routineServiceModel = Object.assign({},this.routineServiceAddForm.value)
      this.routineServiceService.add(routineServiceModel).subscribe(response=>{
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
