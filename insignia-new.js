
let scrapeDownloadLinks = require('./lib/scrape-download-links');

let pdpUrl = 'https://www.insigniaproducts.com/pdp/NS-32DR310NA17/4822001';//'https://www.insigniaproducts.com/pdp/NS-GN3DSSP101/3511368';

scrapeDownloadLinks(pdpUrl, './products/4822001.json');
