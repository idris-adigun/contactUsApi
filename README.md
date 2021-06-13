# NODE REST API
A NODE.JS endpoint for Contact Us messages


# Functionalities
- Send Contact Us messages to a configured email address

# Download
`git clone https://github.com/idris-adigun/contactUsApi` 
## Install dependencies
```bash
npm install
```

## Configuration
create a file called .env and place it in the root directly. This file would contain your database url, token secret and your email service credentials, Copy, paste and fill the settings below to the .env file. you can change the two token expiration duration to any length you want
```.env
Email = 'YOUR_GMAIL_EMAIL'
Password = 'YOUR_PASSWORD'
```
## Start server
```bash
npm start
```
