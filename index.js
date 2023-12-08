import {} from 'dotenv/config';
import { mailchimp } from './mail/provider.js';
import { sendMessage } from './service/mail.service.js';

async function ping() {
  const response = await mailchimp.users.ping();
  console.log(response);
}

// sendMessage()

ping();
