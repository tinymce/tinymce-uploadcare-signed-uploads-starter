import "dotenv/config";

// Replace this with your TinyMCE API key from https://www.tiny.cloud/my-account/integrate/
const apiKey = process.env.TINYMCE_API_KEY;

// Replace this with your Uploadcare PUBLIC key from https://app.uploadcare.com/
const uploadcarePublicKey = process.env.UPLOADCARE_PUBLIC_KEY;

// Replace this with your Uploadcare SECRET key from https://app.uploadcare.com/
const uploadcareSecretKey = process.env.UPLOADCARE_SECRET_KEY;

// Replace this with your session secret (not necessary for testing purposes)
const sessionSecret = process.env.SESSION_SECRET;

// This is the fake database that the login authenticates against
const users = [
    { username: "johndoe", password: "password", fullname: "John Doe" },
    { username: "janedoe", password: "password", fullname: "Jane Doe" },
];

export default {
    apiKey,
    uploadcarePublicKey,
    uploadcareSecretKey,
    sessionSecret,
    users,
};
