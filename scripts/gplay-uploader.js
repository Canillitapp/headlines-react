const authJSON = require('./gplay_key.json');
const publisher = require('playup')(authJSON);

const files = process.argv.slice(2);

publisher
  .upload(files)
  .then(
    data => {
      console.log(
        ' > %s version %d is up!',
        data.packageName,
        data.versionCode
      );
    },
    error => {
      console.error('Google Play Error: ', error);
    }
  );
