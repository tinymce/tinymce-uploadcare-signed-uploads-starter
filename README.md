# Image Optimizer Signed Uploads Starter Project

A starter project for integrating the [TinyMCE Image Optimizer plugin](https://www.tiny.cloud/docs/tinymce/latest/uploadcare/) with [Uploadcare signed uploads](https://uploadcare.com/docs/security/secure-uploads/).

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Uploadcare account with signed uploads enabled](https://app.uploadcare.com/accounts/signup/)

## Configuration

1. Copy the `.env.example` file to `.env` and update the `UPLOADCARE_SECRET_KEY` with your Uploadcare secret key:

```bash
UPLOADCARE_SECRET_KEY=<your-secret-key>
```

2. Update the `uploadcare_public_key` in `index.html` with your Uploadcare public key:

```js
uploadcare_public_key: '<your-public-key>',
```

3. Replace the `your-api-key` placeholder in the TinyMCE script tag with your TinyMCE API key:

```html
<script src="https://cdn.tiny.cloud/1/your-api-key/tinymce/7/tinymce.min.js"></script>
```

## Installation

```bash
npm install
```

## Usage

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Fiddle

You can also try the demo on Fiddle if you don't have access to the TinyMCE Image Optimizer plugin: [Fiddle - Image Optimizer Signed Uploads Starter Project](https://fiddle.tiny.cloud/S0RUbb1NCa/2). Just replace the `UPLOADCARE_PUBLIC_KEY` placeholder with your Uploadcare public key. Note that you still require the Express server running with your Uploadcare secret key to sign the uploads.