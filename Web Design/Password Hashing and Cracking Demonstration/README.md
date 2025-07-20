# COMP2110 Week 12 - Password Security

This week I worked with a Node.js password server to explore password security concepts, including:

## Password Hashing and Authentication

- Explored password hashing using PBKDF2 and SHA-256 algorithms
- Added extensive logging to the server to observe the internal processes of registration and login
- Observed how salt values create different hashes for identical passwords
- Experimented with different hash algorithms and their security implications

## Enhanced Server Features

- Modified the server code to support both PBKDF2 (secure) and SHA-256 (less secure) hash algorithms via a feature flag
- Added detailed logging to visualize hashing performance, including execution time
- Observed how PBKDF2 intentionally uses computational resources to slow down password verification

## Password Cracking Experiments

- Used a brute-force password cracking script to simulate attacking password hashes
- Enhanced the crack.js script to accept command line arguments and provide better feedback
- Conducted comparison tests between PBKDF2 and SHA-256 performance for cracking passwords
- Observed the significant time difference between cracking passwords with a secure algorithm (PBKDF2) versus a fast algorithm (SHA-256)

## Key Security Insights

- Salting prevents attackers from using precomputed rainbow tables
- PBKDF2's slow computation is a security feature, not a performance issue
- Modern password storage requires specialized algorithms (PBKDF2, Bcrypt, Argon2) rather than general-purpose hash functions like SHA-256
- Computational cost is a critical aspect of password security
