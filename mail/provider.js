import mailchimp_transactional from '@mailchimp/mailchimp_transactional'

const MAIL_API_KEY = process.env.MAIL_API_KEY
export const mailchimp = mailchimp_transactional(MAIL_API_KEY)
  