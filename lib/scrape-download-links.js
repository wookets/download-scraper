
let fs = require('fs');
let Xray = require('x-ray');
let xray = new Xray();

function scrapeDownloadLinks (url, fileToSave) {
	xray(url,
		{
			title: 'title',
			sku: 'main@data-sku-id',
			model: '.product .model',
			files: xray('#support .product-documentation', [
				{
					title: '.manual-title',
					variations: xray('.manual-link', [
						{
							link: '@href',
							label: ''
						}
					])
				}
			])
		}
	)(function (err, obj) {

		// flatten the files dom structure
		let files = [];
		for (let file of obj.files) {
			for (let variation of file.variations) {
				files.push({
					title: file.title,
					link: variation.link,
					label: variation.label
				});
			}
		}
		obj.files = files;

		// write to a safe place
		fs.writeFile(fileToSave, JSON.stringify(obj, null, '\t'));
	});
}

module.exports = scrapeDownloadLinks;