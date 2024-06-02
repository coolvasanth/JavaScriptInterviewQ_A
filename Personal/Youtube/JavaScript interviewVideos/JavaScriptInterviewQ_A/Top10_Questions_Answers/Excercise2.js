function fetchData(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: 'Data retrieved' };
        resolve(data);
      }, 1000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const processedData = data.message.toUpperCase();
        resolve(processedData);
      }, 500);
    });
  }
  
  fetchData('https://api.example.com/data')
    .then(processData)
    .then(processedData => console.log(processedData)) 
    .catch(error => console.error(error));
  