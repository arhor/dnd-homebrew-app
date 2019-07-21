

function match(arg) {
  return (...matchers) => {
    let result;
    for (let i = 0; i < matchers.length; i += 1) {
      const matcher = matchers[i];
      const target = matcher[0];
      const resolve = matcher[1];
      if (arg === target) {
        if (resolve instanceof Function) {
          result = resolve(arg);
        } else {
          result = resolve;
        }
        break;
      } else if (i === matchers.length - 1 && result === undefined) {
        // if last element is a function - it considedred as default resolver
        // TODO: default resolver can be placed in any place, but it MUST be
        //       present only once.
        if (matcher instanceof Function) {
          result = matcher(arg);
        }
      }
    }
    return result;
  };
}

// const result = match(5)(
//   [1, x => `${x}`],
//   [5, x => `result is ${x}`],
//   () => 'sdsd',
// );

// console.log(result);
module.exports = match;
