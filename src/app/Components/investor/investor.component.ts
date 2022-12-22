import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Investor } from 'src/app/models/investor';
import { InvestorService } from 'src/app/services/investor.service';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.css']
})
export class InvestorComponent implements OnInit {

  investors:Investor[]=[];
  filterText="";

  constructor(private investorService:InvestorService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getInvestors();
  }

  getInvestors(){
    this.investorService.getInvestors().subscribe(response=>{
      this.investors = response.data;
      console.log(response.data)
    })
  }

  delete(id:string){
    this.investorService.delete(id).subscribe(response=>{
      console.log(response)
      this.getInvestors();
    })
  }

}
