// Test for `sandbox` attribute in iframes.
//
// Spec: https://www.whatwg.org/specs/web-apps/current-work/multipage/the-iframe-element.html#attr-iframe-sandbox

Modernizr.addTest('sandbox', 'sandbox' in document.createElement('iframe'));
