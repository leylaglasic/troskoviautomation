const {test, expect} = require('@playwright/test');

test('User Can Add New Korisnik with Valid Values', async ({page}) => {

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

    await page.waitForTimeout(1000);

    page.click('.nav-link[href="korisnici.php"]');

    await page.waitForTimeout(1000);

    await page.waitForSelector('.btn.btn-primary.btn-sm');
    await page.click('.btn.btn-primary.btn-sm');

    const elementId = 'rola';
    await page.waitForSelector(`#${elementId}`, { state: 'attached' });
    await page.waitForTimeout(1000);


    const optionValueToSelect = 'administrator';
    const dropdownSelector = `#${elementId}`;

    await page.focus(dropdownSelector);
    await page.selectOption(dropdownSelector, optionValueToSelect);

    await page.fill('#ime', 'Lejla');
    await page.fill('#prezime', 'Glasić');

    await page.fill('#email', 'korisnik123@gmail.com');
    await page.fill('#password', '123456');

    const potvrdiButtonSelector = '.btn.btn-success'; 
    await page.waitForSelector(potvrdiButtonSelector);
    await page.click(potvrdiButtonSelector);

    
    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);


});

test('User Can Successfully Exit Modal For Adding New Korisnik', async ({page}) => {

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

    await page.waitForTimeout(1000);

    page.click('.nav-link[href="korisnici.php"]');

    await page.waitForTimeout(1000);

    await page.waitForSelector('.btn.btn-primary.btn-sm');
    await page.click('.btn.btn-primary.btn-sm');

    const zatvoriButtonSelector = '.btn.btn-secondary'; 
    await page.waitForSelector(zatvoriButtonSelector);
    await page.click(zatvoriButtonSelector);

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);



});

test('User Cannot Add New Korisnik with Invalid Values 1', async ({page}) => {

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

    await page.waitForTimeout(1000);

    page.click('.nav-link[href="korisnici.php"]');

    await page.waitForTimeout(1000);

    await page.waitForSelector('.btn.btn-primary.btn-sm');
    await page.click('.btn.btn-primary.btn-sm');

    const elementId = 'rola';
    await page.waitForSelector(`#${elementId}`, { state: 'attached' });
    await page.waitForTimeout(1000);


    const optionValueToSelect = 'Odaberi Rolu';
    const dropdownSelector = `#${elementId}`;

    await page.focus(dropdownSelector);
    await page.selectOption(dropdownSelector, optionValueToSelect);

    await page.fill('#ime', 'Lejla');
    await page.fill('#prezime', 'Glasić');

    await page.fill('#email', 'korisnik123@gmail.com');
    await page.fill('#password', '123456');

    const potvrdiButtonSelector = '.btn.btn-success'; 
    await page.waitForSelector(potvrdiButtonSelector);
    await page.click(potvrdiButtonSelector);

    
    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);


});

test('User Get Error Message for Invalid Email Format While Adding New Korisnik', async ({page}) => {

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

    await page.waitForTimeout(1000);

    page.click('.nav-link[href="korisnici.php"]');

    await page.waitForTimeout(1000);

    await page.waitForSelector('.btn.btn-primary.btn-sm');
    await page.click('.btn.btn-primary.btn-sm');

    const elementId = 'rola';
    await page.waitForSelector(`#${elementId}`, { state: 'attached' });
    await page.waitForTimeout(1000);


    const optionValueToSelect = 'administrator';
    const dropdownSelector = `#${elementId}`;

    await page.focus(dropdownSelector);
    await page.selectOption(dropdownSelector, optionValueToSelect);

    await page.fill('#ime', 'Lejla');
    await page.fill('#prezime', 'Glasić');

    await page.fill('#email', 'korisnik123gmail.com');
    await page.fill('#password', '123456');

    const potvrdiButtonSelector = '.btn.btn-success'; 
    await page.waitForSelector(potvrdiButtonSelector);
    await page.click(potvrdiButtonSelector);

    await page.waitForTimeout(1000);
   
    page.on('dialog', async dialog => {
        console.log('Poruka u alert boxu:', dialog.message());
        
    });
    
    await page.waitForTimeout(1000);
   

    const zatvoriButtonSelector = '.btn.btn-secondary'; 
    await page.waitForSelector(zatvoriButtonSelector);
    await page.click(zatvoriButtonSelector);
    

    
    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);


});

test('User Cannot Add New Korisnik with Invalid Values 2', async ({page}) => {

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

    await page.waitForTimeout(1000);

    page.click('.nav-link[href="korisnici.php"]');

    await page.waitForTimeout(1000);

    await page.waitForSelector('.btn.btn-primary.btn-sm');
    await page.click('.btn.btn-primary.btn-sm');

    const elementId = 'rola';
    await page.waitForSelector(`#${elementId}`, { state: 'attached' });
    await page.waitForTimeout(1000);


    const optionValueToSelect = 'administrator';
    const dropdownSelector = `#${elementId}`;

    await page.focus(dropdownSelector);
    await page.selectOption(dropdownSelector, optionValueToSelect);

    await page.fill('#ime', '');
    await page.fill('#prezime', '');

    await page.fill('#email', 'korisnik123@gmail.com');
    await page.fill('#password', '123456');

    const potvrdiButtonSelector = '.btn.btn-success'; 
    await page.waitForSelector(potvrdiButtonSelector);
    await page.click(potvrdiButtonSelector);

    
    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);


});

test('User Can Edit  Korisnik with Valid Values', async ({page}) => {

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

    await page.waitForTimeout(1000);

    page.click('.nav-link[href="korisnici.php"]');

    await page.waitForTimeout(1000);

    await page.waitForSelector('.btn.btn-outline-warning.btn-sm.uredi');
    await page.click('.btn.btn-outline-warning.btn-sm.uredi');

    const elementId = 'rola';
    await page.waitForSelector(`#${elementId}`, { state: 'attached' });
    await page.waitForTimeout(1000);


    const optionValueToSelect = 'administrator';
    const dropdownSelector = `#${elementId}`;

    await page.focus(dropdownSelector);
    await page.selectOption(dropdownSelector, optionValueToSelect);

    await page.fill('#ime', 'Amila');
    await page.fill('#prezime', 'Glasić');

    await page.fill('#email', 'korisnik123@gmail.com');
    await page.fill('#password', '123456');

    const potvrdiButtonSelector = '.btn.btn-success'; 
    await page.waitForSelector(potvrdiButtonSelector);
    await page.click(potvrdiButtonSelector);

    
    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);


});

test('User Can Successfully Exit Modal For Editing Korisnik', async ({page}) => {

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

    await page.waitForTimeout(1000);

    page.click('.nav-link[href="korisnici.php"]');

    await page.waitForTimeout(1000);

    await page.waitForSelector('.btn.btn-outline-warning.btn-sm.uredi');
    await page.click('.btn.btn-outline-warning.btn-sm.uredi');

    const zatvoriButtonSelector = '.btn.btn-secondary'; 
    await page.waitForSelector(zatvoriButtonSelector);
    await page.click(zatvoriButtonSelector);

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);



});

test('User Cannot Change Existing Korisnik with Invalid Values 1', async ({page}) => {

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

    await page.waitForTimeout(1000);

    page.click('.nav-link[href="korisnici.php"]');

    await page.waitForTimeout(1000);

    await page.waitForSelector('.btn.btn-outline-warning.btn-sm.uredi');
    await page.click('.btn.btn-outline-warning.btn-sm.uredi');

    const elementId = 'rola';
    await page.waitForSelector(`#${elementId}`, { state: 'attached' });
    await page.waitForTimeout(1000);


    const optionValueToSelect = 'Odaberi Rolu';
    const dropdownSelector = `#${elementId}`;

    await page.focus(dropdownSelector);
    await page.selectOption(dropdownSelector, optionValueToSelect);

    await page.fill('#ime', 'Lejla');
    await page.fill('#prezime', 'Glasić');

    await page.fill('#email', 'korisnik123@gmail.com');
    await page.fill('#password', '123456');

    const potvrdiButtonSelector = '.btn.btn-success'; 
    await page.waitForSelector(potvrdiButtonSelector);
    await page.click(potvrdiButtonSelector);

    
    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);


});

test('User Get Error Message for Invalid Email Format While Editing New Korisnik', async ({page}) => {

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

    await page.waitForTimeout(1000);

    page.click('.nav-link[href="korisnici.php"]');

    await page.waitForTimeout(1000);

    await page.waitForSelector('.btn.btn-outline-warning.btn-sm.uredi');
    await page.click('.btn.btn-outline-warning.btn-sm.uredi');

    const elementId = 'rola';
    await page.waitForSelector(`#${elementId}`, { state: 'attached' });
    await page.waitForTimeout(1000);


    const optionValueToSelect = 'administrator';
    const dropdownSelector = `#${elementId}`;

    await page.focus(dropdownSelector);
    await page.selectOption(dropdownSelector, optionValueToSelect);

    await page.fill('#ime', 'Lejla');
    await page.fill('#prezime', 'Glasić');

    await page.fill('#email', 'korisnik123gmail.com');
    await page.fill('#password', '123456');

    const potvrdiButtonSelector = '.btn.btn-success'; 
    await page.waitForSelector(potvrdiButtonSelector);
    await page.click(potvrdiButtonSelector);

    await page.waitForTimeout(1000);
   
    page.on('dialog', async dialog => {
        console.log('Poruka u alert boxu:', dialog.message());
        
    });
    
    await page.waitForTimeout(1000);
   

    const zatvoriButtonSelector = '.btn.btn-secondary'; 
    await page.waitForSelector(zatvoriButtonSelector);
    await page.click(zatvoriButtonSelector);
    

    
    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);


});

test('User Cannot Change Existing Korisnik with Invalid Values 2', async ({page}) => {

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

    await page.waitForTimeout(1000);

    page.click('.nav-link[href="korisnici.php"]');

    await page.waitForTimeout(1000);

    await page.waitForSelector('.btn.btn-outline-warning.btn-sm.uredi');
    await page.click('.btn.btn-outline-warning.btn-sm.uredi');

    const elementId = 'rola';
    await page.waitForSelector(`#${elementId}`, { state: 'attached' });
    await page.waitForTimeout(1000);


    const optionValueToSelect = 'administrator';
    const dropdownSelector = `#${elementId}`;

    await page.focus(dropdownSelector);
    await page.selectOption(dropdownSelector, optionValueToSelect);

    await page.fill('#ime', '');
    await page.fill('#prezime', '');

    await page.fill('#email', 'korisnik123@gmail.com');
    await page.fill('#password', '123456');

    const potvrdiButtonSelector = '.btn.btn-success'; 
    await page.waitForSelector(potvrdiButtonSelector);
    await page.click(potvrdiButtonSelector);

    
    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);


});

test('User Can Successfully Delete Korisnik', async ({ page }) => {

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

    await page.waitForTimeout(1000);

    page.click('.nav-link[href="korisnici.php"]');
    
    await page.waitForTimeout(1000);

    await page.waitForSelector('.btn.btn-outline-danger.btn-sm.brisi');
    
   
    page.on('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
       
        await dialog.accept();
    });

    await page.click('.btn.btn-outline-danger.btn-sm.brisi');

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);

});

test.only('User Can Successfully Cancel Deleting Korisnik', async ({ page }) => {

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

    await page.waitForTimeout(1000);

    page.click('.nav-link[href="korisnici.php"]');
    
    await page.waitForTimeout(1000);

    await page.waitForSelector('.btn.btn-outline-danger.btn-sm.brisi');
    
    
    page.on('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        
        await dialog.dismiss();
    });

    
    await page.click('.btn.btn-outline-danger.btn-sm.brisi');
    
    await page.keyboard.press('Escape');

    await page.waitForTimeout(1000);
   
    const priliviCountAfterCancel = await page.$$eval('.btn.btn-outline-danger.btn-sm.brisi', (buttons) => buttons.length);
    expect(priliviCountAfterCancel).toBeGreaterThan(0);

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);

});

