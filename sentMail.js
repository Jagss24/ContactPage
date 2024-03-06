import nodemailer from "nodemailer";
import app from "express";

const router = app.Router();
// Used nodemailer library to sentMail
router.post("/sentMail", async (req, res) => {
  const { name, phone, emailId, message } = req.body;
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "userhak80@gmail.com",
      // This is app password for my account
      pass: process.env.GMAIL,
    },
  });

  // This is the context that the mail will consist of
  let mailOptions = {
    from: '"Jagannath Samantra" userhak80@gmail.com',
    to: emailId,
    subject: "Your Response",
    text: `
    Hello ${name}, Thanks for contacting me!!!
    Soon I'll get in touch with you..

    YOUR RESPONSE INCLUDED THE FOLLOWING: 

    Name: ${name}
    Phone: ${phone},
    Message: ${message}

    Regards,
    Jagannath Samantra
    `,
  };

  // Sending mail with try-ctach block error-handling
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      if (error.code === "EENVELOPE" && error.responseCode === 553) {
        return res.status(200).json({ message: "Wrong Email Address" });
      } else {
        return res
          .status(200)
          .json({ message: "There's some error in sending mail" });
      }
    } else {
      console.log("Email sent: " + info.response);
      return res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

export default router;
