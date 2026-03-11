/**
 * Clean a phone number by stripping non-digit characters.
 * If the phone starts with +, the + is removed but digits are kept as-is.
 * If countryCode is provided and phone doesn't start with +, it's prepended.
 */
function cleanPhone(phone, countryCode) {
    const startsWithPlus = phone.trimStart().startsWith('+');
    const digits = phone.replace(/\D/g, '');
    if (!digits)
        return '';
    if (startsWithPlus) {
        return digits;
    }
    if (countryCode) {
        const ccDigits = countryCode.replace(/\D/g, '');
        return ccDigits + digits;
    }
    return digits;
}
/**
 * Generate a WhatsApp click-to-chat link (wa.me URL).
 *
 * @example
 * waLink({ phone: '+971501234567', message: 'Hello!' })
 * // → 'https://wa.me/971501234567?text=Hello!'
 *
 * @example
 * waLink({ phone: '(555) 123-4567', countryCode: '1', message: 'Hi' })
 * // → 'https://wa.me/15551234567?text=Hi'
 */
function waLink(options) {
    const { phone, countryCode, message } = options;
    const cleaned = cleanPhone(phone, countryCode);
    if (!cleaned) {
        throw new Error('Invalid phone number: no digits found');
    }
    let url = `https://wa.me/${cleaned}`;
    if (message && message.trim()) {
        url += `?text=${encodeURIComponent(message.trim())}`;
    }
    return url;
}
/**
 * Validate whether a phone string contains a plausible phone number.
 * Checks that there are between 7 and 15 digits (ITU-T E.164 range).
 */
waLink.validate = function validate(phone) {
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 7 && digits.length <= 15;
};
export { waLink };
