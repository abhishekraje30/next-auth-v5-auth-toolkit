import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.BASE_URL}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: process.env.EMAIL_FROM ?? "onboarding@resend.dev",
    to: email,
    subject: "Verify your email address",
    text: `Click this link to verify your email address: ${confirmLink}`,
    html: `<a href="${confirmLink}">Verify your email address</a>`,
  });
};
