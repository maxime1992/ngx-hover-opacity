import { Pipe, PipeTransform } from '@angular/core';

import { slugify } from '../helpers/string.helpers';

@Pipe({ name: 'slugifyObjectKeys' })
export class SlugifyObjectKeysPipe implements PipeTransform {
  transform(obj: Object): Object {
    return Object.keys(obj).reduce(
      (acc, currKey) => ({
        ...acc,
        [slugify(currKey)]: obj[currKey],
      }),
      {}
    );
  }
}
