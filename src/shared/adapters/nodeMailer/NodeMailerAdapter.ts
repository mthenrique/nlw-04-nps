import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer from 'nodemailer';

import { IMailAdapter, ISendMailData } from '../IMailAdapter.ts';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '169e004f4f83a4',
    pass: 'be55345b199bad',
  },
});

export class NodeMailerAdapter implements IMailAdapter {
  async sendMail({
    to, subject, variables, path,
  }: ISendMailData) {
    const templateFileContent = fs.readFileSync(path).toString('utf8');
    const mailTemplateParse = handlebars.compile(templateFileContent);
    const html = mailTemplateParse(variables);

    await transport.sendMail({
      from: 'NPS <noreply@nps.com.br>',
      to,
      subject,
      html,
    });
  }
}
