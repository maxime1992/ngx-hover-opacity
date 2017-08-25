function isString(value: any) {
  return typeof value === 'string';
}

function camelCaseToDash(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function slugify(str: string): string {
  return isString(str)
    ? camelCaseToDash(str)
        .toLowerCase()
        .trim()
        .replace(/[^\w\-]+/g, ' ')
        .replace(/\s+/g, '-')
    : str;
}
