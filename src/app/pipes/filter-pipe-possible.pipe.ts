import { Pipe, PipeTransform } from '@angular/core';
import { PossibleCustomer } from '../models/possibleCustomer';

@Pipe({
  name: 'filterPipePossible'
})
export class FilterPipePossiblePipe implements PipeTransform {

  transform(value: PossibleCustomer[], filterText: string): PossibleCustomer[] {
    filterText = filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((p:PossibleCustomer)=>p.possibleCustomerCompany.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
}
