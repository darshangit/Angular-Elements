const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/elements/runtime.js',
        './dist/elements/polyfills.js',
        './dist/elements/scripts.js',
        './dist/elements/main.js',
    ]
    await fs.ensureDir('external-build')
    await concat(files, 'external-build/impulse-ticket.js');
    await fs.copyFile('./dist/elements/styles.css', 'external-build/styles.css')
    await fs.copy('./dist/elements/assets/', 'external-build/assets/' )
})()