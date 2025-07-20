/*
 Demonstration of password cracking using a brute-force attack.

 Given a captured password hash and matching salt value, we try to
 crack it by generating a password hash for each possible password.

 We assume that the password is 'password' + i, where i is a number.

 We show the time taken to find the given password.

 Usage:
   node crack.js [hash] [salt] [iterations] [use_sha256]

   - hash: The password hash to crack (required if salt is provided)
   - salt: The salt used for the hash (required if hash is provided)
   - iterations: Number of password attempts (default: 1000)
   - use_sha256: If set to "sha256", uses SHA256 instead of PBKDF2 (default: pbkdf2)
*/

const crypto = require('node:crypto');

// function to create a password hash using PBKDF2
const hashPassword = (password, salt) => {
    const key = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512');
    return key.toString('hex');
}

// an alternate version of the above using SHA256 which is much
// faster and so less secure
const sha256Hash = (password, salt) => {
    const hash = crypto.createHash('sha256');
    hash.update(password + salt);
    return hash.digest('hex');
};

const generatePassword = (i) => {
    return 'password' + i;
};

const bruteForce = (iterations, hash, salt, useShortcut = false) => {
    console.log(`Attempting to crack hash with ${iterations} iterations...`);
    console.log(`Using algorithm: ${useShortcut ? 'SHA256 (fast)' : 'PBKDF2 (secure)'}`);

    for(let i=0; i<iterations; i++) {
        if (i % 10 === 0 && i > 0) {
            process.stdout.write('.');  // Show progress without cluttering console
        }

        const password = generatePassword(i);
        const hashedPassword = useShortcut ? sha256Hash(password, salt) : hashPassword(password, salt);

        if (hashedPassword === hash) {
            process.stdout.write('\n'); // New line after dots
            console.log(`\n✓ Password found: ${password}`);
            return password;
        }
    }

    process.stdout.write('\n'); // New line after dots
    console.log("❌ Password not found within the given iterations");
    return null;
}

// Parse command line arguments
const args = process.argv.slice(2);
let hash = args[0] || "";
let salt = args[1] || "";
let iterations = parseInt(args[2]) || 1000;
let useShortcut = args[3] === "sha256";

if (!hash && !salt) {
    console.log("No hash or salt provided. Using default values for demo.");
    // Default values for testing - these would come from your registration table
    hash = "";
    salt = "";
} else if (!hash || !salt) {
    console.log("Error: Both hash and salt must be provided.");
    console.log("Usage: node crack.js [hash] [salt] [iterations] [use_sha256]");
    process.exit(1);
}

console.log("-------------------------------------------------------");
console.log("🔒 Password Cracking Tool 🔓");
console.log("-------------------------------------------------------");
console.log(`Hash: ${hash.substring(0, 20)}...`);
console.log(`Salt: ${salt.substring(0, 20)}...`);
console.log(`Iterations: ${iterations}`);
console.log("-------------------------------------------------------");

console.time('Cracking time');
bruteForce(iterations, hash, salt, useShortcut);
console.timeEnd('Cracking time');
