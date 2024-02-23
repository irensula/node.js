// npm init -y
// npm i bcrypt

const bcrypt = require('bcrypt');

// const hashPassword = async(pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash);
// }

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log('Logged you in! Successful match!');
    } else {
        console.log('Incorrect.');
    }
}

// hashPassword('monkey');
login('monkey', '$2b$12$84p8hTdEYUNxUqvW0GyBaudqOhMKefMiz2pkvy7tIv7SxnNirtuD.')