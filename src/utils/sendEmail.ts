import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
    apiKey: process.env.MAILGUN_API_KEY || "",
    domain: "sandboxb9637c1fd697462b83db2263b17daea5.mailgun.org"
});

const sendEmail = ( subject:string, html: string ) => {
    const emailData = {
        from: "captain_kbg@naver.com",
        to: "captain_kbg@naver.com",
        subject,
        html
    };
    return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName:string, key:string) => {
    const emailSubjecgt = `Hello ${fullName}, please verify your email`;
    const emailBody = `Verifiy your email by clicking <a href="http://nuber.com/verification/${key}/">here</a>`;
    return sendEmail(emailSubjecgt, emailBody);
};
