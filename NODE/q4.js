const fs = require('fs')
const filename = 'data.txt'

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } 
    else {
      console.log('Data:');
      console.log(data);
      console.log('....');

      // Delete file
    fs.unlink(filename, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`File deleted!`);
        }
      });
    }
})