import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username', pure: false
})
export class UsernamePipe implements PipeTransform {

  transform(value: any): string {
    let name = '';

    if(value == null || value == ''){
      name = 'not assigned';
    }else{
      name = value;
    }

    return name;
  }

}
