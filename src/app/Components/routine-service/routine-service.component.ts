import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutineService } from 'src/app/models/routineService';
import { RoutineServiceService } from 'src/app/services/routine.service.service';

@Component({
  selector: 'app-routine-service',
  templateUrl: './routine-service.component.html',
  styleUrls: ['./routine-service.component.css']
})
export class RoutineServiceComponent implements OnInit {

  routineServices:RoutineService[]=[];
  filterText="";


  constructor(private routineServiceService:RoutineServiceService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getRoutineServices();
  }

  getRoutineServices(){
    this.routineServiceService.getRoutineServices().subscribe(response=>{
      this.routineServices = response.data;
      console.log(response.data)
    })
  }

  delete(id:string){
    this.routineServiceService.delete(id).subscribe(response=>{
      console.log(response)
      this.getRoutineServices();
    })
  }
}
