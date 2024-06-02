// const { a: x, b: y } = { a: 1, b: 2, c: 3 };
// console.log(x, y);

const { a: x = 10, b: y = 20, c: z = 30 } = { a: 1, b: undefined, d: 4 };
console.log(x, y, z);