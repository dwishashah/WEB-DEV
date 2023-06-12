const fs = require('fs');
const filename = 'data.txt';

// Read data from file
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } 
  else {
    console.log('Data:');
    console.log(data);
    console.log('....');
    
    // Write new data to file
    const newData = 'This is some new data.';
    fs.appendFile(filename, newData, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('New data written to file!');
        console.log(data)
      }
    });
  }
});