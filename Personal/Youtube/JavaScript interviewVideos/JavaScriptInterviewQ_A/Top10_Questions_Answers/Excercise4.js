function mystery(x) {
  if (typeof x === "number") {
    return x.toString();
  } else if (typeof x === "string") {
    return parseInt(x);
  } else {
    return "unknown";
  }
}

console.log(mystery(true));
console.log(mystery([1, 2, 3]));
console.log(mystery(null));