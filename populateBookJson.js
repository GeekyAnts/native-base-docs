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

  bookJsonContents.pluginsConfig.versions.options = [];

  for(let i=0; i<branches.length; i++) {
    if(branches[i].name === 'master') {
      bookJsonContents.pluginsConfig.versions.options.push({
          value: 'http://rawgit.com/GeekyAnts/native-base-v2-docs/latest/_book/index.html',
          text: branches[i].name
      });
    } else {
      bookJsonContents.pluginsConfig.versions.options.push({
          value: 'http://rawgit.com/GeekyAnts/native-base-v2-docs/' + branches[i].name + '/_book/index.html',
          text: branches[i].name
      });
    }
  }

  bookJsonContents.pluginsConfig.versions.options.push({
    value: 'http://rawgit.com/GeekyAnts/native-base-v2-docs/master/_book/index.html',
    text: '-- select version --',
    selected: false
  });

  fs.writeFileSync(__dirname + '/book.json', JSON.stringify(bookJsonContents, null, 4), {encoding: 'utf8'});

  spawnSync('gitbook', ['build'], {stdio: 'inherit'});
  spawnSync('git', ['add', 'book.json'], {stdio: 'inherit'});
  spawnSync('git', ['add', '_book'], {stdio: 'inherit'});
  spawnSync('git', ['commit', '-m', 'rebuild book with all versions'], {stdio: 'inherit'});
  spawnSync('git', ['push', 'origin', 'master'], {stdio: 'inherit'});
}

var req = https.request(options, (res) => {

  var responseData = '';

  res.setEncoding('utf8');

  res.on('data', (chunk) => {
    responseData += chunk;
  });

  res.on('end', function () {
    try {
      console.log('responseData', responseData);
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
