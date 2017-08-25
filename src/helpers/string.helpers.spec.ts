import { slugify } from './string.helpers';

describe(`Slugify`, () => {
  it(`should return the same value if not a string`, () => {
    expect(slugify(<any>1)).toEqual(<any>1);
    expect(slugify(<any>{})).toEqual(<any>{});
    expect(slugify(<any>true)).toEqual(<any>true);
  });

  it(`should transform camel case to dash string`, () => {
    expect(slugify('hello')).toBe('hello');
    expect(slugify('helloWorld')).toBe('hello-world');
  });

  it(`should transform upper case to lower case`, () => {
    expect(slugify('HELLOWORLD')).toBe('helloworld');
  });

  it(`should trim string`, () => {
    expect(slugify('  hello  ')).toBe('hello');
  });
});
