const puppeteer = require('puppeteer')

puppeteer.launch({headless:false}).then(async browser => {

   const page = await browser.newPage()

   const m = puppeteer.devices['iPhone X']

   await page.emulate(m)

   await page.goto('https://www.amazon.com.tr')
   
   try {
    await page.click('#sp-cc-accept', { timeout: 3000 });
    } catch {}
    
   await page.screenshot({ path: 'iPhoneDevice.png'})

   await browser.close()
})