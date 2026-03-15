import { registerAs } from "@nestjs/config";

export default registerAs('mail', ()=>({
    service : process.env.MAIL_SERVICE || 'gmail',
    fromEmail : process.env.MAIL_FORM_EMAIL,
    host : process.env.MAIL_HOST,
    port : parseInt(process.env.MAIL_PORT || '587', 10),

    username : process.env.MAIL_USERNAME,
    password : process.env.MAIL_PASSWORD,
    verificationBaseUrl : process.env.MAIL_VERIFICATION_BASE_URL || 'http://localhost::3000'

}))