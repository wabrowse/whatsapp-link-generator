# 💬 WhatsApp Link Generator

Generate `wa.me` click-to-chat links and QR codes — free, private, no tracking. Just open `index.html`.

![Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)
![Privacy](https://img.shields.io/badge/privacy-no_tracking-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## What It Does

Enter a phone number and an optional pre-filled message. Get:
- A `wa.me` click-to-chat link (copy with one click)
- A QR code (download as PNG)
- A live preview of the chat card

No data is sent anywhere. Everything runs in your browser. Works offline.

## Use Cases

- **E-commerce:** Add a "Chat with us" button to your product pages
- **Customer support:** Create QR codes for support desks and packaging
- **Landing pages:** Pre-fill a message like "Hi, I'm interested in [Product Name]"
- **Print materials:** Put QR codes on business cards, flyers, and banners
- **Events:** Let attendees message you without sharing your number
- **Real estate:** Quick contact links for property listings

## How to Use

1. Open `index.html` in your browser
2. Select the country code and enter the phone number
3. (Optional) Write a pre-filled message
4. Copy the generated link or download the QR code

## URL Format

WhatsApp click-to-chat links follow this format:

```
https://wa.me/COUNTRYCODENUMBER
https://wa.me/COUNTRYCODENUMBER?text=Hello%20there
```

Examples:
```
https://wa.me/14155551234              → US number, no message
https://wa.me/14155551234?text=Hi!     → US number with "Hi!" pre-filled
https://wa.me/971501234567?text=Hello  → UAE number with "Hello" pre-filled
```

The country code is included without the `+` sign. The phone number has no spaces, dashes, or parentheses.

## Supported Countries

30 countries included: US, UK, India, UAE, Saudi Arabia, Turkey, Germany, France, Brazil, Pakistan, Indonesia, Nigeria, Mexico, Philippines, Egypt, South Africa, Australia, Italy, Spain, Netherlands, Belgium, Singapore, Malaysia, Thailand, Japan, South Korea, Russia, Colombia, Argentina.

## Privacy

- **No tracking** — zero analytics, cookies, or external requests
- **No data collection** — your phone numbers and messages never leave your browser
- **No server** — everything is client-side JavaScript
- **Works offline** — download and use without internet

## Browse WhatsApp Without Saving Contacts

This tool is built by [wabrowse.com](https://wabrowse.com) — browse and message WhatsApp contacts without saving them to your phone.

## License

MIT
