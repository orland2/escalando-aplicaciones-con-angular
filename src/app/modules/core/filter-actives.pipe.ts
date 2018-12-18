import { Pipe, PipeTransform } from '@angular/core';
import { groupBy } from 'rxjs/operators';

@Pipe({
  name: 'filterActives'
})
export class FilterActivesPipe implements PipeTransform {

  // transform(groups: Group[]): Group[] {
  //   return groups.filter((group: Group) => {
  //     return group.active === true;
  //   });
  // }
  transform(groups: Group[]): Group[] {
    return groups.filter(group => group.active).sort((groupA, groupB) => {
      if (groupA.id === groupB.id) {
        return 0;
      }
      if (groupA.id > groupB.id) {
        return 1;
      }
      return -1;
    });
  }
}

interface Group {
  id: string;
  value: string;
  active: boolean;
}
