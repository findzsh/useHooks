export const isObject = (value: unknown) =>
  value !== null && typeof value === 'object' && !Array.isArray(value);
export const isArray = (value: unknown) => Array.isArray(value);
export const isFunction = (value: unknown) => typeof value === 'function';
export const isString = (value: unknown) => typeof value === 'string';
export const isBoolean = (value: unknown) => typeof value === 'boolean';
export const isNumber = (value: unknown) => typeof value === 'number';
export const isUndef = (value: unknown) => typeof value === 'undefined';

export function isTypeSame(param1: unknown, param2: unknown) {
  let same = false;
  switch (true) {
    case isObject(param1):
      same = isObject(param2);
      break;
    case isArray(param1):
      same = isArray(param2);
      break;
    case isFunction(param1):
      same = isFunction(param2);
      break;
    case isString(param1):
      same = isString(param2);
      break;
    case isBoolean(param1):
      same = isBoolean(param2);
      break;
    case isNumber(param1):
      same = isNumber(param2);
      break;
    case isUndef(param1):
      same = isUndef(param2);
      break;
  }
  return same;
}

export const getType = (value: unknown) => {
  if (isObject(value)) {
    return 'object';
  } else if (isArray(value)) {
    return 'array';
  } else {
    return typeof value;
  }
};
