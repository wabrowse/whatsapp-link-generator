export interface WaLinkOptions {
    /** Phone number (can include +, spaces, dashes, parentheses, dots) */
    phone: string;
    /** Country code without + (e.g. "1", "971"). Prepended if phone doesn't start with + */
    countryCode?: string;
    /** Pre-filled message text (will be URL-encoded) */
    message?: string;
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
declare function waLink(options: WaLinkOptions): string;
declare namespace waLink {
    var validate: (phone: string) => boolean;
}
export { waLink };
