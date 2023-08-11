// // use "upper-case" package and create a function to convert user input to upper case
// const uc = require("upper-case")
// const u=(string)=>{

//     const v =uc.upperCase(string);
//     console.log(v);


// }
const qrcode = require('qrcode');
const fs = require('fs');

const url = 'https://www.example.com';
const outputFilePath = 'qr_code.png';

qrcode.toFile(outputFilePath, url, {
  color: {
    dark: '#000000', // Black color for QR code
    light: '#ffffff' // White color for background
  }
}, (err) => {
  if (err) throw err;
  console.log(`QR code saved as ${outputFilePath}`);
});
