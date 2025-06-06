const { initPage } = require('../config/setup');

(async () => {
    const { browser, page } = await initPage('https://www.amazon.com.tr');

    try {
        await page.waitForSelector('div.nav-right', { timeout: 5000 });
        console.log('Arama butonu bulundu.');
    } catch (error) {
        console.error('Arama butonu bulunamadı!');
    }

    await browser.close();
})();