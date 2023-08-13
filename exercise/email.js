// plan of action 
// 1. send email to user saying hello world 
// 2. send email to multiple users by creating email function 
// 3. email template (designed template )


const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'bik36245@gmail.com',
    pass: 'passwrod'
  }
});

async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Bikash Shrestha 👻" <bik36245@gmail.com>', // sender address
      to: receivers.toString(), // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
   
}
const receivers = ["bik36245@gmail.com","scorpioman830@gmail.com"];
main().catch(console.error);