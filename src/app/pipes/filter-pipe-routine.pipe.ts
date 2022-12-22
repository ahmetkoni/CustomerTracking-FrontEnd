import { Pipe, PipeTransform } from '@angular/core';
import { RoutineService } from '../models/routineService';

@Pipe({
  name: 'filterPipeRoutine'
})
export class RoutinePipe implements PipeTransform {

  transform(value: RoutineService[], filterText: string): RoutineService[] {
    filterText = filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((r:RoutineService)=>r.customerName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
