const puppeteer = require('puppeteer');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const fs = require('fs');


(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();

  //pageerror sayfa içindeki js hataları
  page.on('pageerror', error => {
    console.error('[JS HATASI]:', error.message);
  });

  //console, konsola yazılan loglar (console.log, console.error vs.)
  page.on('console', msg => {
    const type = msg.type().toUpperCase();
    console.log(`[KONSOL ${type}]:`, msg.text());
  });

  //response, HTTP istek cevapları (404, 500 vb.)
  page.on('response', response => {
    const status = response.status();
    if (status >= 400) {
      console.warn(`[HTTP HATASI] ${status} - ${response.url()}`);
    }
  });

  //requestfailed, Request hataları
  page.on('requestfailed', request => {
    console.error('[İSTEK BAŞARISIZ]:', request.url(), request.failure().errorText);
  });

  

  
  await page.goto('https://httpstat.us/404', {
    waitUntil: 'domcontentloaded',
    timeout: 30000
  });

  
  await browser.close();
})();