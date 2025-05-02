export const pipe =
  <T>(...fns: readonly Function[]): Function =>
  (arg: T): T => {
    return fns.reduce((value, func) => func(value), arg);
  };

export const rest = (list: ArrayLike<any>, num?: number) => {
  return Array.prototype.slice.call(list, num || 1);
};

export function go<T>(initialValue: T, ..._fns: Function[]): T {
  const fns = rest(arguments, 1) as Function[];
  return pipe<T>(...fns)(initialValue);
}
