import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isLow'
})
export class IsLowPipe implements PipeTransform {

  transform(value: string, suffix: string): any {
    return value.toLowerCase() + suffix;
  }

}
