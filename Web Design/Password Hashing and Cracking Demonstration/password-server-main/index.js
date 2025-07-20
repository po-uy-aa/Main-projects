const express = require('express');
const crypto = require('node:crypto');

const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// global data will store user records {username, password, salt}
const data = {
    users: [],
};

// Configure which hash method to use (set to true to use SHA-256 instead of PBKDF2)
const USE_SHA256 = false;

// function to create a password hash using PBKDF2
const hashPassword = (password, salt) => {
    console.log(`Hashing password with salt: ${salt} using PBKDF2`);
    const startTime = Date.now();
    const key = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512');
    const endTime = Date.now();
    console.log(`Hashing took ${endTime - startTime}ms`);
    return key.toString('hex');
}

// an alternate version using SHA256 which is much faster and so less secure
const sha256Hash = (password, salt) => {
    console.log(`Hashing password with salt: ${salt} using SHA-256`);
    const startTime = Date.now();
    const hash = crypto.createHash('sha256');
    hash.update(password + salt);
    const result = hash.digest('hex');
    const endTime = Date.now();
    console.log(`Hashing took ${endTime - startTime}ms`);
    return result;
};

// Choose which hash method to use based on configuration
const createHash = (password, salt) => {
    if (USE_SHA256) {
        return sha256Hash(password, salt);
    } else {
        return hashPassword(password, salt);
    }
};

app.get('/users', (req, res) => {
    console.log('GET /users - returning all users');
    res.send(data.users);
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    console.log(`Login attempt for username: ${username}`);
    const user = data.users.find(user => user.username === username);
    if (!user) {
        console.log(`User ${username} not found`);
        res.status(401).send({success: false, error: 'Invalid Username or Password'});
        return;
    }
    console.log(`User ${username} found, verifying password`);
    const hashedPassword = createHash(password, user.salt);
    if (user.password !== hashedPassword) {
        console.log(`Password verification failed for ${username}`);
        res.status(401).send({success: false, error: 'Invalid Username or Password'});
        return;
    }
    console.log(`Login successful for ${username}`);
    res.send({success: true, username: user.username});
});


app.post('/register', (req, res) => {
    const {username, password, repeat} = req.body;
    console.log(`Registration attempt for username: ${username}`);
    if (password !== repeat) {
        console.log(`Password mismatch for ${username}`);
        res.status(400).send({success: false, error: 'Passwords do not match'});
    } else {
        const salt = crypto.randomBytes(16).toString('hex');
        console.log(`Generated salt for ${username}: ${salt}`);
        const hashedPassword = createHash(password, salt);
        console.log(`Generated password hash for ${username}: ${hashedPassword.substring(0, 20)}...`);
        console.log(`Using hashing algorithm: ${USE_SHA256 ? 'SHA-256' : 'PBKDF2'}`);
        data.users.push({
            username,
            password: hashedPassword,
            salt,
        });
        console.log(`User ${username} successfully registered`);
        res.send({success: true, username: username});
    }
});


const port = 3144;
console.log(`Server running at http://localhost:${port}`);
console.log(`Server using ${USE_SHA256 ? 'SHA-256 (INSECURE)' : 'PBKDF2 (SECURE)'} hashing algorithm`);
app.listen(port);

