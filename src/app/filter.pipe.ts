import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, phrase:string): any {
    if (!phrase) return value;

    return value.filter((ertek:any)=>{
      if (ertek.megnevezes.toLowerCase().indexOf(phrase.toLowerCase()) !=-1)
        return true;
      return false;
    })
  }

}
