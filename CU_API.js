const client = require('cheerio-httpcli');

const barcodeNo = '1';

const searchUrl = `https://www.cu-pon.co.kr/help/usagecheck/${encodeURIComponent(barcodeNo)}`;

client.fetch(searchUrl, {}, (err, $) => {
    if (err) {
      console.error('Error:', err);
      return;
    }
  
    $('.used-search-list').each(function () {
      const elementText = $(this).text();
      console.log(elementText);
    });
  });