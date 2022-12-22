import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RoutineServiceService } from 'src/app/services/routine.service.service';
import { RoutineService } from 'src/app/models/routineService';

@Component({
  selector: 'app-routine-service-update',
  templateUrl: './routine-service-update.component.html',
  styleUrls: ['./routine-service-update.component.css']
})
export class RoutineServiceUpdateComponent implements OnInit {

  routineServiceUpdateForm:any;
  isFormReady:boolean = false
  constructor(private activatedroute:ActivatedRoute, private formBuilder:FormBuilder,private routineServiceService:RoutineServiceService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params => {
      if (params["id"]) {
        this.getRoutineService(params["id"])
      }
    
    })
  }

  RoutineServiceUpdateForms(routineService:RoutineService){
      this.routineServiceUpdateForm=this.formBuilder.group({
        id:[routineService.id],
        productName:[routineService.productName],
        productId:[routineService.productId],
        customerName:[routineService.customerName],
        customerId:[routineService.customerId],
        routineServiceDescription:[routineService.routineServiceDescription],
        date:[routineService.date],
        time:[routineService.time],
        employee:[routineService.employee],
      })
  }

  getRoutineService(id:string){
    this.routineServiceService.getById(id).subscribe(response => {
      if (response.success) {
        this.RoutineServiceUpdateForms(response.data)
        this.isFormReady = true
      }else{
        this.toastrService.error("Hata")
      }
    })
    }

    update(routineService:RoutineService){
      if(this.routineServiceUpdateForm.valid) {
      var updateFormModel = Object.assign({},this.routineServiceUpdateForm.value)
      this.routineServiceService.update(updateFormModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Successed")
      },responseError=>{
        console.log(responseError.error)
        this.toastrService.error(responseError.error)
      }) 
    }
    }

}
