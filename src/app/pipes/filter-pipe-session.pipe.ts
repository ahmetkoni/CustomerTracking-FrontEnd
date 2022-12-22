import { Pipe, PipeTransform } from '@angular/core';
import { Session } from '../models/session';

@Pipe({
  name: 'filterPipeSession'
})
export class FilterPipeSessionPipe implements PipeTransform {

  transform(value: Session[], filterText: string): Session[] {
    filterText = filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((s:Session)=>s.sessionSubject.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
