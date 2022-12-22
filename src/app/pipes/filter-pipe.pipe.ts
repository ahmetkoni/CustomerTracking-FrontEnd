import { Pipe, PipeTransform } from '@angular/core'
import { Customer } from '../models/customer';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Customer[], filterText: string): Customer[] {
    filterText = filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((c:Customer)=>c.companyName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
