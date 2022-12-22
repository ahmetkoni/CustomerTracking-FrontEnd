import { Pipe, PipeTransform } from '@angular/core';
import { Investor } from '../models/investor';

@Pipe({
  name: 'filterPipeInvestor'
})
export class FilterPipeInvestorPipe implements PipeTransform {

  transform(value: Investor[], filterText: string): Investor[] {
    filterText = filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((i:Investor)=>i.investorCompany.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
