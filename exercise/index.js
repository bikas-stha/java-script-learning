// // Generate QR Code for  the url on the terminal using package qrcode.
// const QRCode = require('qrcode');
// // const data= "https:www.youtube.com"
// const http = require('http')

// // QRCode.toString(data,{type:'terminal'}, function (err, url) {
// //     console.log(url)
// // })


//   http.createServer(async (req, res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     const data = "https://github.com/rakimsth"
//     const qrData = await QRCode.toDataURL(data);
//     const htmlData = `<img src=${qrData} />`
//     res.write(htmlData);
//     res.end();
//   }).listen(8000)

//   console.log("server running on port 8000")

// const CC = require('currency-converter-lt')
// const currencyConverter = new CC({from:"USD", to:"NPR", amount:1})
// currencyConverter.convert(1).then((response) => {
//   console.log(response) 
// })  




const PDFDocument = require('pdfkit');
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('output.pdf'));
doc
  .font('fonts/PalatinoBold.ttf')
  .fontSize(25)
  .text('Some text with an embedded font!', 100, 100);

  doc.image('path/to/image.png', {
    fit: [250, 300],
    align: 'center',
    valign: 'center'
  });

