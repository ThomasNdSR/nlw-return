import nodemailer from "nodemailer"
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f0ed0b6e5cca13",
    pass: "23a1be741999bf",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {

    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to:'Thomas Rodrigues <thomasnicola@outlook.com>',
    subject: subject,
    html: body,
  })
  }
}
