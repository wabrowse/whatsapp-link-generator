const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { waLink } = require('../dist/index.js');

describe('waLink', () => {
  it('generates a basic link with + prefix phone', () => {
    const result = waLink({ phone: '+971501234567' });
    assert.equal(result, 'https://wa.me/971501234567');
  });

  it('generates a link with message', () => {
    const result = waLink({ phone: '+971501234567', message: 'Hello!' });
    assert.equal(result, 'https://wa.me/971501234567?text=Hello!');
  });

  it('cleans phone number with spaces, dashes, parens', () => {
    const result = waLink({ phone: '(555) 123-4567', countryCode: '1', message: 'Hi' });
    assert.equal(result, 'https://wa.me/15551234567?text=Hi');
  });

  it('prepends country code when phone has no + prefix', () => {
    const result = waLink({ phone: '501234567', countryCode: '971' });
    assert.equal(result, 'https://wa.me/971501234567');
  });

  it('does not double-prepend country code when phone starts with +', () => {
    const result = waLink({ phone: '+905321234567', countryCode: '90' });
    assert.equal(result, 'https://wa.me/905321234567');
  });

  it('URL-encodes message with special characters', () => {
    const result = waLink({ phone: '+11234567890', message: 'Hello & goodbye!' });
    assert.equal(result, 'https://wa.me/11234567890?text=Hello%20%26%20goodbye!');
  });

  it('ignores empty/whitespace-only message', () => {
    const result = waLink({ phone: '+11234567890', message: '   ' });
    assert.equal(result, 'https://wa.me/11234567890');
  });

  it('throws on phone with no digits', () => {
    assert.throws(() => waLink({ phone: '---' }), /no digits found/);
  });

  it('strips dots from phone number', () => {
    const result = waLink({ phone: '555.123.4567', countryCode: '1' });
    assert.equal(result, 'https://wa.me/15551234567');
  });
});

describe('waLink.validate', () => {
  it('returns true for valid international number', () => {
    assert.equal(waLink.validate('+971501234567'), true);
  });

  it('returns true for valid US number with country code', () => {
    assert.equal(waLink.validate('+14155551234'), true);
  });

  it('returns false for too-short number', () => {
    assert.equal(waLink.validate('123'), false);
  });

  it('returns false for non-numeric input', () => {
    assert.equal(waLink.validate('abc'), false);
  });

  it('returns true for 7-digit number (minimum)', () => {
    assert.equal(waLink.validate('1234567'), true);
  });

  it('returns false for 16+ digit number', () => {
    assert.equal(waLink.validate('1234567890123456'), false);
  });
});
