import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "shermorri123@gmail.com",
    pass: "rlsebmvvzaybkfcb",
  },
});

// async..await is not allowed in global scope, must use a wrapper
const sendMail = async(address) => {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Minh pro 👻" <shermorri123@gmail.com>', // sender address
    to: address, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Congratulations! Your registered has successfully", // plain text body
    html: "<b>Welcome to our website. From here, you can do everything you want!</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

export default sendMail