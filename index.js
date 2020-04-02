const fs = require('fs'),
      ced = require('ced'),
      Iconv = require('iconv').Iconv;

const file = fs.readFileSync(0),
      iconv = new Iconv(ced(file), 'utf8');

// convert file contents to UTF-8
process.stdout.write(iconv.convert(file));
