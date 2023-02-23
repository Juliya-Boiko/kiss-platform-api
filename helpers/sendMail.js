const sgMail = require('@sendgrid/mail');
require('dotenv').config();

// export const mockMail = (data) => {    
//   return `<div style="background-color:#2c2c2c;">
//       <h1 style="color:#ffffff;text-align:center">
//         CONTACTS APP
//       </h1>
//       <p style="color:#ffffff;text-align:center">
//         Please verify your email address to get access. Thank you!
//       </p>
//       <a style="display:block;text-align:center;color:yellow;font-size:40px;"
//         href="http://localhost:3000/api/users/verify/${data}" 
//         target="_blank">
//           CLICK TO CONFIRM
//       </a>
//     </div>`;
// };

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (data) => {
  try {
    const email = { ...data, from: "BoikoJuliya2707@gmail.com" };
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw new Error;
  }
};

module.exports = sendMail;