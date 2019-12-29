import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'status', pure:false
})
export class StatusPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  transform(value: any): SafeHtml {
      let html='';

      switch (value) {
        case '1':
            html="<ion-badge color='primary'>open</ion-badge>";
            break;
        case '2':
            html="<ion-badge color='warning'>in progress</ion-badge>";
            break;
        case '3':
            html="<ion-badge color='success'>complete</ion-badge>";
            break;
        case '4':
            html="<ion-badge color='medium'>filed</ion-badge>";
            break;
        default:
            html="<ion-badge color='primary'>open</ion-badge>";
            break;
    }

    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
