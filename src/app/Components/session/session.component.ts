import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/models/session';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  sessions:Session[]=[];
  filterText="";

  constructor(private sessionService:SessionService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getSessions();
  }

  getSessions(){
    this.sessionService.getSessions().subscribe(response=>{
      this.sessions = response.data;
      console.log(response.data)
    })
  }

  delete(id:string){
    this.sessionService.delete(id).subscribe(response=>{
      console.log(response)
      this.getSessions();
    })
  }
}
