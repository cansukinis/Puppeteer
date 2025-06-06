const puppeteer = require('puppeteer');

(async()=>{
    const browser = await puppeteer.launch({
        headless:false,
        defaultViewport:{width:1920, height:1080},
        slowMo:500
    });
    const page = await browser.newPage();

    await page.goto('https://google.com');
    
    await page.screenshot({path:'test.png'});

    await browser.close();
})();