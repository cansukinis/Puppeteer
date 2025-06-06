const puppeteer = require('puppeteer');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const fs = require('fs');

async function initPage(url) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    try {
    await page.click('#sp-cc-accept', { timeout: 3000 });
    } catch {}
    return { browser, page };
}

module.exports = { initPage };