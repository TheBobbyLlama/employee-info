// Copied and modified from Week 9 lessons.
const fs = require('fs');

const writeFile = fileContent => {
	return new Promise((resolve, reject) => {
		fs.writeFile('./dist/index.html', fileContent, err => {
			if (err) {
				reject(err);
				return;
			}
	
			resolve({
				ok: true,
				message: 'Page created!'
			});
		});
	});
};

const copyFile = () => {
	return new Promise((resolve, reject) => {
		fs.copyFile('./src/style.css', './dist/style.css', err => {
			if (err) {
			  reject(err);
			  return;
			}
			
			resolve({
				ok: true,
			});
		  });
	});
}

module.exports = { writeFile, copyFile };