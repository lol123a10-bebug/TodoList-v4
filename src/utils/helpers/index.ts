export const deepClone = <Type>(item: Type) => {
  //@ts-ignore
  if (!item) return item;
  // null, undefined values check

  const types = [Number, String, Boolean];

  let result: any;

  // normalizing primitives if someone did new String('aaa'), or new Number('444');
  types.forEach((type) => {
    if (item instanceof type) result = type(item);
  });

  if (typeof result == "undefined") {
    if (Object.prototype.toString.call(item) === "[object Array]") {
      result = [];
      //@ts-ignore
      item.forEach((child: any, index: number) => {
        result[index] = deepClone(child);
      });
    } else if (typeof item == "object") {
      // testing that this is DOM
      //@ts-ignore
      if (item.nodeType && typeof item.cloneNode == "function") {
        //@ts-ignore
        result = item.cloneNode(true);
        //@ts-ignore
      } else if (!item.prototype) {
        // check that this is a literal
        if (item instanceof Date) {
          result = new Date(item);
        } else {
          // it is an object literal
          result = {};
          for (var i in item) {
            result[i] = deepClone(item[i]);
          }
        }
      } else {
        result = item;
      }
    } else {
      result = item;
    }
  }

  return result as Type;
};
