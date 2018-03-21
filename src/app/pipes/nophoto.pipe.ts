import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nophoto'
})
export class NophotoPipe implements PipeTransform {

  transform(images: any[]): any {
    if (!images || images.length == 0) {
      return 'assets/img/noimage.png';
    }
    return images[1].url;
  }

}
