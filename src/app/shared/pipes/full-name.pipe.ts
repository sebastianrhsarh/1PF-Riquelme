import { Pipe, PipeTransform } from '@angular/core';
import { formatStudent } from 'src/app/interface/students';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: formatStudent, ...args: unknown[]): unknown {
    const { name, lastName } = value;
    const fullName = `${name} ${lastName}`
    return fullName;
  }

}
