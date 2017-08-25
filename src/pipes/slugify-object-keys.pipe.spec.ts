import { SlugifyObjectKeysPipe } from './slugify-object-keys.pipe';
import * as stringHelper from '../helpers/string.helpers';

describe(`SlugifyObjectKeysPipe`, () => {
  let transform: (obj: Object) => Object;

  beforeEach(() => {
    const slugifyObjectKeysPipe = new SlugifyObjectKeysPipe();
    transform = slugifyObjectKeysPipe.transform;
  });

  // unit test
  it(`should replace obj keys by the result of slugify function`, () => {
    spyOn(stringHelper, 'slugify').and.returnValues('some-key-1', 'some-key-2');

    const obj = {
      someKey1: 1,
      someKey2: 2,
    };

    expect(transform(obj)).toEqual({
      'some-key-1': 1,
      'some-key-2': 2,
    });
  });

  // integration test
  it(`should slugify object keys`, () => {
    expect(
      transform({
        helloWorld: 1,
        helloworld: 2,
        HELLOWORLD: 3,
      })
    ).toEqual({
      'hello-world': 1,
      helloworld: 3,
    });
  });
});
