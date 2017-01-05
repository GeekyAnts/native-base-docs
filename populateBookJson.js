const https = require('https');
const fs = require('fs');
const spawnSync = require('child_process').spawnSync;

var options = {
  hostname: 'api.github.com',
  port: 443,
  path: '/repos/GeekyAnts/native-base-v2-docs/branches',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla /5.0 (Compatible MSIE 9.0;Windows NT 6.1;WOW64; Trident/5.0)',
    'Accept': 'application/vnd.github.v3+json'
  }
};

var populateBookJson = (branches) => {

  spawnSync('git', ['checkout', 'master'], {stdio: 'inherit'});

  const bookJsonContents = require('./book.json');
  console.log('bookJsonContents', bookJsonContents);

  bookJsonContents.options = [{
      "value": "http://nativebase.io/docs-v2/",
      "text": "latest"
  }];

  for(let i=0; i<=branches.length; i++) {
    if(branches[i] !== 'master') {
      bookJsonContents.options.push({
          value: 'http://rawgit.com/GeekyAnts/native-base-v2-docs/' + branches[i] + '/_book/index.html',
          text: branches[i]
      });
    }
  }

  fs.writeFileSync(__dirname + '/book.json', JSON.stringify(bookJsonContents), {encoding: 'utf8'});
}

var req = https.request(options, (res) => {

  var responseData = '';

  res.setEncoding('utf8');

  res.on('data', (chunk) => {
    responseData += chunk;
  });

  res.on('end', function () {
    try {
      populateBookJson(JSON.parse(responseData));
    } catch(err) {
      console.log('error: ', err);
    }
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();
