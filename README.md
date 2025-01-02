# Image Optimizer Signed Uploads Starter Project

A starter project for integrating the [TinyMCE Image Optimizer plugin](https://www.tiny.cloud/docs/tinymce/latest/uploadcare/) with [Uploadcare signed uploads](https://uploadcare.com/docs/security/secure-uploads/).

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Uploadcare account with signed uploads enabled](https://app.uploadcare.com/accounts/signup/)

## Configuration

Copy the `.env.example` file to `.env` and fill in the required environment variables:

```bash
TINYMCE_API_KEY=your-api-key
UPLOADCARE_PUBLIC_KEY=your-public-key
UPLOADCARE_SECRET_KEY=your-secret-key
SESSION_SECRET=your-session-secret
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