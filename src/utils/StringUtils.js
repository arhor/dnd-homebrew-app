/**
 * Replaces line endings with <br/> element to display correctly in html.
 *
 * @param {string} text
 */
export function processLinebreaks(text) {
  return String(text || '').replace(/(\n)|(\r\n)/g, '<br/>');
}

/**
 * Stub function to prevent eslint ebat' mne mozgi with 'default export'.
 */
export function stub() {

}
