import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
    apiKey: process.env.MAILGUN_API_KEY || "",
    domain: "sandboxb9637c1fd697462b83db2263b17daea5.mailgun.org"
});