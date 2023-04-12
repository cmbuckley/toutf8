#!/usr/bin/env node

const fs = require('fs'),
      ced = require('ced'),
      {Iconv} = require('iconv');

let files = process.argv.slice(2);

(files.length ? files : [0]).forEach(function (file) {
    let data;

    try {
        data = fs.readFileSync(file);
    } catch (err) {
        if (err.code == 'ENOENT') {
            return console.error(err.message);
        }

        throw err;
    }

    try {
        // convert file contents to UTF-8
        const iconv = new Iconv(ced(data), 'utf8');
        process.stdout.write(iconv.convert(data));
    } catch (err) {
        console.error('Error:', err.message);
    }
});
