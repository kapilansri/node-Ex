var fs = require('fs');

fs.appendFile('demo.txt', ' This is a joint initiative by Yarl IT Hub and SERVE Foundation. Yarl IT Hub has been functioning for the last five years as a not for profit social enterprise focusing on technology entrepreneurship in northern Sri Lanka and SERVE Foundation is a four year old foundation focusing on using technology to uplift secondary education standards in rural schools in northern Sri Lanka. ',
function (err) {
  if (err) throw err;
  console.log('Updated!');
});
