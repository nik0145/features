// задачка.
//перепишите нативный метод bind чтобы появилась возможность перепривязывать контекст выполнения функции множество раз
const func = function () {
  return this.prop;
};
Function.prototype.bind = function (ctx) {
  const f = this;
  const args = Array.prototype.slice.call(arguments,1);
  const func= function () {
    return f.apply(ctx,args.concat(Array.prototype.slice.call(arguments)));
  };
  return func;
};
let obj1 = { prop: 1 },
  obj2 = { prop: 2 };
func1 = func.bind(obj1);
console.log(func1());
func2 = func1.bind(obj2);
console.log(func2());
