export interface ISendMailData {
  to: string
  subject: string
  variables: object
  path: string
}

export interface IMailAdapter {
  sendMail: (data: ISendMailData) => Promise<void>
}
