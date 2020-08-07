const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "seuemail@gmail.com",
    pass: "suasenha",
  },
});

transporter.sendMail({
    from: "Seu Nome <seuemail@gmail.com>",
    to: "destino@gmail.com",
    subject: "TITULO DO E-MAIL",
    text: "CORPO DO E-MAIL",
    // html:"" Da para criar as tags de texto dentro das aspas
  })
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
