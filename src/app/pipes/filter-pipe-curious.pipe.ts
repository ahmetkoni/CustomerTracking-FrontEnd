import { Pipe, PipeTransform } from '@angular/core';
import { CuriousCustomer } from '../models/curiousCustomer';

@Pipe({
  name: 'filterPipeCurious'
})
export class FilterPipeCuriousPipe implements PipeTransform {

  transform(value: CuriousCustomer[], filterText: string): CuriousCustomer[] {
    filterText = filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((c:CuriousCustomer)=>c.curiousCustomerCompany.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
