import { Product } from 'src/models/ProductModel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'product',
})
export class ProductPipe implements PipeTransform {
  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : null;
    return filterText
      ? value.filter(
          (p: Product) => p.name.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
