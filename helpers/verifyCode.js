const verifyCode = () => {
  const code = (Math.random() * 1000000).toFixed(0);
  if (code.length !== 6) {
    const filledCode = code.padEnd(6, '0');
    return filledCode;
  }
  return code;
};

module.exports = verifyCode;