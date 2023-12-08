import { mailchimp } from "../mail/provider.js";

export const sendMessage = async () => {
  const message = {
    from_email: 'from0@gmail.com',
    subject: 'Hello world',
    text: 'Welcome to Mailchimp Transactional!',
    to: [
      {
        email: 'to@example.com',
        type: 'to',
      },
    ],
  };

  const response = await mailchimp.messages.send({
    message,
  });
  console.log(response);

  return response
};
