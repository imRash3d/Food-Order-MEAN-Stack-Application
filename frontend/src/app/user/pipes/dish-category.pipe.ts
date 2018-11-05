import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dishCategory'
})
export class DishCategoryPipe implements PipeTransform {

  transform(value: any): any {
    return null;
  }

}
