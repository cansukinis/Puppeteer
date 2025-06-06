const puppeteer = require('puppeteer');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const fs = require('fs');


(async()=>{
    const browser = await puppeteer.launch({
        headless:false,
        defaultViewport:{width:1920, height:1080}
    });
    const page = await browser.newPage();
    await delay(3000);
    await page.goto('https://www.amazon.com.tr');

    /*try {
    await page.click('#sp-cc-accept', { timeout: 3000 });
    } catch {} */

    await page.waitForSelector('#nav-hamburger-menu');
    await page.click('#nav-hamburger-menu');
    await delay(3000);

    await page.waitForSelector("a.hmenu-item[data-menu-id='5']");
    await page.evaluate(() => {
    const item = Array.from(document.querySelectorAll('.hmenu-item'))
      .find(el => el.innerText.includes('Bilgisayar'));
    item?.click();
    });
    await delay(3000);

    await page.evaluate(() => {
        const item = Array.from(document.querySelectorAll('.hmenu-item'))
            .find(el => el.innerText.toLowerCase().includes('dizüstü bilgisayar'));
        item?.click();
    });
    await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
    
    const buttons = await page.$x("//a[contains(., 'Daha fazla gör')]");
    if (buttons.length > 0) {
        await buttons[0].click();
    }
    await page.waitForNavigation({ waitUntil: 'domcontentloaded' });

    await page.waitForSelector('.zg-grid-general-faceout');
    const products = await page.$$('.zg-grid-general-faceout');
    try {
    await page.click('#sp-cc-accept', { timeout: 3000 });
    } catch {}

    const productTitles = [];

    for (let i = 0; i < Math.min(products.length, 6); i++) {
        const product = products[i];

    
        await product.screenshot({ path: `urun_${i + 1}.png` });

    
        const titleHandle = await product.$('.p13n-sc-truncated, .p13n-sc-uncoverable-faceout, .a-link-normal aok block');
        const title = titleHandle
        ? await page.evaluate(el => el.innerText.trim(), titleHandle)
        : `Ürün ${i + 1} (başlık alınamadı)`;

        productTitles.push(`${i + 1}. ${title}`);
    }


  fs.writeFileSync('urun_basliklari.txt', productTitles.join('\n'), 'utf-8');

  console.log('İşlem tamamlandı. Ekran görüntüleri ve başlıklar kaydedildi.');

  await browser.close();

})();