import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameLength'
})
export class NameLengthPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}