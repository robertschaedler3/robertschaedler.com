import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'guardType'
})
export class GuardTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
