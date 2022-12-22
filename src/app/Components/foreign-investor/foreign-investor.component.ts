import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForeignInvestor } from 'src/app/models/foreignInvestor';
import { ForeignInvestorService } from 'src/app/services/foreign.investor.service';

@Component({
  selector: 'app-foreign-investor',
  templateUrl: './foreign-investor.component.html',
  styleUrls: ['./foreign-investor.component.css']
})
export class ForeignInvestorComponent implements OnInit {

foreignInvestors:ForeignInvestor[]=[];
filterText="";

  constructor(private foreignInvestorService:ForeignInvestorService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getForeignInvestors();
  }

  getForeignInvestors(){
    this.foreignInvestorService.getForeignInvestors().subscribe(response=>{
      this.foreignInvestors = response.data;
      console.log(response.data)
    })
  }

  delete(id:string){
    this.foreignInvestorService.delete(id).subscribe(response=>{
      console.log(response)
      this.getForeignInvestors();
    })
  }

}
