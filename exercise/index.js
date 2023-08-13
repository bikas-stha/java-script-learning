// // // Generate QR Code for  the url on the terminal using package qrcode.
// // const QRCode = require('qrcode');
// // // const data= "https:www.youtube.com"
// // const http = require('http')

// // // QRCode.toString(data,{type:'terminal'}, function (err, url) {
// // //     console.log(url)
// // // })


// //   http.createServer(async (req, res)=>{
// //     res.writeHead(200, {'Content-Type': 'text/html'});
// //     const data = "https://github.com/rakimsth"
// //     const qrData = await QRCode.toDataURL(data);
// //     const htmlData = `<img src=${qrData} />`
// //     res.write(htmlData);
// //     res.end();
// //   }).listen(8000)

// //   console.log("server running on port 8000")

// // const CC = require('currency-converter-lt')
// // const currencyConverter = new CC({from:"USD", to:"NPR", amount:1})
// // currencyConverter.convert(1).then((response) => {
// //   console.log(response) 
// // })  




// // const PDFDocument = require('pdfkit');
// // const doc = new PDFDocument();
// // doc.pipe(fs.createWriteStream('output.pdf'));
// // doc
// //   .font('fonts/PalatinoBold.ttf')
// //   .fontSize(25)
// //   .text('Some text with an embedded font!', 100, 100);

// //   doc.image('path/to/image.png', {
// //     fit: [250, 300],
// //     align: 'center',
// //     valign: 'center'
// //   });





// // const axios = require('axios');
// // async function getUser() {
// //   try {
// //     const {data} = await axios.get(url);
// //     const {daily}=data;
// //    return { sunrise: daily.sunrise, sunset: daily.sunset};

// //   } catch (error) {
// //     console.error(error);
// //   }
// // }

// // const url="https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
// // getUser(url);


// // async function solve() {
// //   const sunrise = await getUser(url);
// //   console.log({sunrise});
// // }
// // solve();

// const axios = require('axios');

// // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
// // const apiKey = 'YOUR_API_KEY';
// // const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;

// // Replace 'CITY_NAME' with the desired city name and 'COUNTRY_CODE' with the country code
// const city = 'kathmandu';
// const countryCode = '+977';

// // Construct the API URL
// const fullUrl = `https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto`;

// // Fetch weather data using Axios
// axios.get(fullUrl)
//   .then(response => {
//     const weatherData = response.data;
//     console.log('Weather Data:', weatherData);
    
//     // Now you can access various weather parameters like weatherData.main.temp, weatherData.weather[0].description, etc.
//   })
//   .catch(error => {
//     console.error('Error fetching weather data:', error);
//   });





