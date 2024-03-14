const { test, expect } = require('@playwright/test');

test('User is Successfully Loged Out', async ({ page }) => {

    await page.goto('http://localhost/troskovi-sistem/index.php');
    await page.evaluate(() => { localStorage.clear(); });

    await page.fill('#email', 'admin@admin.com');
    await page.fill('#password', '123');
    await page.click('.btn.btn-primary.w-100.py-2');

    const desiredUrl = 'http://localhost/troskovi-sistem/troskovi.php';
    await page.goto(desiredUrl);

    const currentUrl = page.url();
    expect(currentUrl).toBe(desiredUrl);
  
    const isRedirected = currentUrl === desiredUrl;
    expect(isRedirected).toBe(true);

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);




});