import { Pipe, PipeTransform } from '@angular/core';
import { ForeignInvestor } from '../models/foreignInvestor';

@Pipe({
  name: 'filterPipeForeign'
})
export class FilterPipeForeignPipe implements PipeTransform {

  transform(value: ForeignInvestor[], filterText: string): ForeignInvestor[] {
    filterText = filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((c:ForeignInvestor)=>c.foreignInvestorCompany.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
