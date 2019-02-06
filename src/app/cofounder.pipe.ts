import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cofounder'
})
export class CofounderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let res = ""
    switch (value.nbCofounder) {
      case 1 :
        res = "Unique";
        break;
      case 2 :
        res = "Couple";
        break;
      default : 
        res = "Groupe";
    }
    return res;
  }
}
