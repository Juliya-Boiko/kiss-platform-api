const mailFormatter = (data) => {    
  return `<div style="background-color:#2c2c2c;">
      <h3 style="color:#ffffff;text-align:center">
        VERIFICATION CODE
      </h3>
      <p style="color:#ffffff;text-align:center">
        Please verify your email address to get access to change password. 
      </p>
      <h1 style="color:#ffffff;text-align:center">${data}</h1>
    </div>`;
};

module.exports = mailFormatter;