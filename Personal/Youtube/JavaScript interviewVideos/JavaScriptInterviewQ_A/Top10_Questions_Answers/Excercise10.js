async function asyncFunc() {
    return await Promise.resolve('Hello');
}

asyncFunc().then(result => console.log(result));
console.log('World');