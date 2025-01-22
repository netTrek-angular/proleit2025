import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {

  transform(value: string, prefix?: string ): string {
    if ( prefix )
      return `${prefix}: ${value}`;

    return value;
  }

}
