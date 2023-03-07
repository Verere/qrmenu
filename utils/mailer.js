const nodemailer = require('nodemailer')

const  sendConfirmationEmail =  ({toUser, hash}) =>{
    return new Promise((res, rej)=>{
 const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth:{
         user: process.env.GOOGLE_USEER,
         pass: process.env.GOOGLE_PASSWORD
     }
 })
 const message = {
     from: process.env.GOOGLE_USEER,
     to: touser.email,
     //to: process.env.GOOGLE_USEER,
     subject: 'Your Account Activated',
     html:`
     <p>Thank your for signing up with qrglobalmenu</p>
     `
 }
  transporter.sendMail(message, function(err, info){
     if(err){
         rej(err)
     }else{
         res(info)
     }
 })
    })
}

export default sendConfirmationEmail