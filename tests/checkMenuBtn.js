const { initPage } = require('../config/setup');

(async () => {
    const { browser, page } = await initPage('https://www.amazon.com.tr');

    try {
        await page.waitForSelector('#nav-hamburger-menu', { timeout: 5000 });
        console.log('Menü butonu bulundu.');
    } catch (error) {
        console.error('Menü butonu bulunamadı!');
    }

    await browser.close();
})();