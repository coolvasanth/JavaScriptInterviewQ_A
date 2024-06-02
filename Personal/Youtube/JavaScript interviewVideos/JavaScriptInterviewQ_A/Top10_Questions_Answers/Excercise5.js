function createIncrement() {
    let count = 0;
    function increment() {
      count++;
    }
    let message = `Count is ${count}`;
    function log() {
      console.log(count);
    }
    return [increment, log];
  }
  
  const [increment, log] = createIncrement();
  increment();
  increment();
  increment();
  log();
  
  
  