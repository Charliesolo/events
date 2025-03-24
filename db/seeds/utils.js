const bcrypt = require("bcrypt")

const SALT_ROUNDS = 10;

async function generateSalt() {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    return salt
  }
  
  async function hashPassword(password, salt) {
    const hashedPassword = await bcrypt.hash(password, salt);
  
    return { salt, hashedPassword };
  }

module.exports = {generateSalt, hashPassword}