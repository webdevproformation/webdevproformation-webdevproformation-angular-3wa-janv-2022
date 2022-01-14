import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lasuite'
})
export class LasuitePipe implements PipeTransform {

  transform(value: string ,max:number = 10): string {
    // console.log()
    return value.split(" ").slice(0, max).join(" ") ;
  }

}
