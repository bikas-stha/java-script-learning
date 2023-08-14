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