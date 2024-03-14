const { test, expect } = require('@playwright/test');


test('User Can View Izvjestaj With Valid Dates', async ({ page }) => {

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
    
    page.click('.nav-link[href="izvjestaj.php"]');
   

    await page.type('#od_datum', '09/20/2023');

    
    await page.type('#do_datum', '01/15/2024');



    await page.waitForSelector('#od_datum:enabled');
    await page.waitForSelector('#do_datum:enabled');
     



    await page.click('.btn.btn-success');
    
    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);







});



test('User Cannot View Izvjestaj with Invalid Dates 1', async ({page}) => {

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
    
    page.click('.nav-link[href="izvjestaj.php"]');
   

    await page.type('#od_datum', '09/20/2023');

    
    await page.type('#do_datum', '01/01/2008');



    await page.waitForSelector('#od_datum:enabled');
    await page.waitForSelector('#do_datum:enabled');



    await page.click('.btn.btn-success');

    const errorMessage = ('//text()[contains(., "Izvjestaj nije moguce prikazati!")]');
    

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);










});


test('User Cannot View Izvjestaj with Invalid Dates 2', async ({page}) => {

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
    
    page.click('.nav-link[href="izvjestaj.php"]');
   

    await page.type('#od_datum', '01/01/2028');

    
    await page.type('#do_datum', '01/15/2024');



    await page.waitForSelector('#od_datum:enabled');
    await page.waitForSelector('#do_datum:enabled');



    await page.click('.btn.btn-success');

    const errorMessageSelector = '//*[contains(text(), "Izvjestaj nije moguce prikazati")]';
    await page.waitForSelector(errorMessageSelector);

    const errorVisible = await page.$eval(errorMessageSelector, el => el.offsetHeight > 0);
    expect(errorVisible).toBe(true);
    
    

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);










});



test.only('User Cannot View Izvjestaj with Invalid Dates 3', async ({page}) => {

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
    
    page.click('.nav-link[href="izvjestaj.php"]');
   

    await page.type('#od_datum', '01/01/2028');

    
    await page.type('#do_datum', '01/01/2028');



    await page.waitForSelector('#od_datum:enabled');
    await page.waitForSelector('#do_datum:enabled');



    await page.click('.btn.btn-success');

    const errorMessageSelector = '//*[contains(text(), "Izvjestaj nije moguce prikazati")]';
    await page.waitForSelector(errorMessageSelector);

    const errorVisible = await page.$eval(errorMessageSelector, el => el.offsetHeight > 0);
    expect(errorVisible).toBe(true);
    
    

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);


});
