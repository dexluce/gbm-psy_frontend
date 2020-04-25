import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundUp'
})
export class RoundUpPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return Math.ceil(value);
  }

}
