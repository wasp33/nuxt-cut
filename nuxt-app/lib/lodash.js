import {
  isArray as isArrayFunc,
  camelCase as camelCaseFunc,
  isObject as isObjectFunc,
  transform as transformFunc,
} from "lodash-es";

export const isArray = isArrayFunc;
export const camelCase = camelCaseFunc;
export const isObject = isObjectFunc;
export const transform = transformFunc;
export {
  cloneDeep,
  isEqual,
  debounce,
  throttle,
  isEmpty,
  isFunction,
  findKey,
  set,
  get,
  merge,
  mergeWith,
  isRegExp,
  flatten,
  range,
  kebabCase,
  unionBy,
  pick,
  uniqBy,
  pickBy,
  intersection,
} from "lodash-es";

export const asyncDebounce = (func, delay) => {
  let timeout;
  let cancel;
  return function () {
    if (timeout && cancel) {
      clearTimeout(timeout);
      cancel();
      timeout = null;
      cancel = null;
    }
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    return new Promise((resolve) => {
      cancel = resolve;
      timeout = setTimeout(() => {
        resolve(func.apply(context, args));
      }, delay);
    });
  };
};

export const camelize = (data) =>
  transformFunc(data, (acc, value, key, target) => {
    const camelKey = isArrayFunc(target) ? key : camelCaseFunc(key);

    acc[camelKey] = isObjectFunc(value) ? camelize(value) : value;
  });
