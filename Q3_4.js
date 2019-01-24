var fs = require('fs');

fs.rename('demo.txt', 'demotextfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
