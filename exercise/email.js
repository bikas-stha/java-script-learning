// // // plan of action 
// // // 1. send email to user saying hello world 
// // // 2. send email to multiple users by creating email function 
// // // 3. email template (designed template )


// // const nodemailer = require("nodemailer");
// // const hbs = require('nodemailer-express-handlebars');

// // const transporter = nodemailer.createTransport({
// //   host: "smtp.gmail.com",
// //   port: 465,
// //   secure: true,
// //   auth: {
// //     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
// //     user: 'bik36245@gmail.com',
// //     pass: 'enaaghkfscoajbvt'
// //   }
// // });

// // async function main() {
// //     // send mail with defined transport object
// //     const info = await transporter.sendMail({
// //       from: '"Bikash Shrestha 👻" <bik36245@gmail.com>', // sender address
// //       to: receivers.toString(), // list of receivers
// //       subject: "Hello ✔", // Subject line
// //       text: "Hello world?", // plain text body
// //       html: "<b>Hello world?</b>", // html body
// //     });
  
// //     console.log("Message sent: %s", info.messageId);
   
// // }
// // const receivers = ["bik36245@gmail.com","scorpioman830@gmail.com"];
// // main().catch(console.error);


// "use strict";
// const nodemailer = require("nodemailer");
// const handlebars = require("handlebars");
// const fs = require("fs");
// const { promisify } = require("util");
// const readFile = promisify(fs.readFile);

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//     user: 'bik36245@gmail.com',
//     pass: 'vvicznojyucpbckh'
//   }
// });

// // async..await is not allowed in global scope, must use a wrapper
// async function main(sender,data,htmlFile) {
//     const html = await readFile(htmlFile,"utf8");
//   // send mail with defined transport object
//   const template = handlebars.compile(html);
  

// const htmlToSend = template(data);

//  const info = await transporter.sendMail({
//     from: '"Bikash Shrestha 👻" <bik36245@gmail.com>',
//     to: sender.toString(),
//     subject: "hello",
//     html: htmlToSend,
//  });
//   console.log("message sent: %s", info.messageId);

// //email  f
  
// }

// const data={
//     name: "Raktim Stha",
//     p_name: "google",
//     link: "https://accounts.google.com/signin/v2/recoveryidentifier?flowName=GlifWebSignIn&flowEntry=AccountRecovery",
//     hi: "hello welcome",

// };

// const htmlFile = "template.html"
// const sender = ["scorpioman830@gmail.com"];
// main(sender, data,htmlFile).catch(console.error);



"use strict";
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'bik36245@gmail.com',
    pass: 'wvszkzchlcoiqfbq'
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function main(receivers,data,htmlFile) {
    const html = await readFile(htmlFile,"utf8");
  // send mail with defined transport object
  const template = handlebars.compile(html);
  

const htmlToSend = template(data);

 const info = await transporter.sendMail({
    from: '"Bikash Shrestha" <bik36245@gmail.com>',
    to: receivers.toString(),
    subject: "hello",
    html: htmlToSend,
 });
  console.log("message sent: %s", info.messageId);

//email  f
  
}

const data={
    name: "Rajak Putuwar",
    p_name: "google",
    link: "www.google.com",
    hi: "hello welcome",

};

const htmlFile = "email.html"
const receivers = ["rajakputuwar07@gmail.com"];
main(receivers, data,htmlFile).catch(console.error);