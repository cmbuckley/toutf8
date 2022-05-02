const fs = require('fs');
const pkg = require(__dirname + '/../package');
const readmeToManPage = require('readme-to-man-page');

fs.readFile(process.argv[2], 'utf8', (err, doc) => {
    if (err) {
        return console.log(err);
    }

	console.log(readmeToManPage(doc, {
        version:     pkg.version,
        description: pkg.description,
        section:     1,
    }));
});
