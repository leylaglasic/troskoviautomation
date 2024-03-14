const { test, expect } = require('@playwright/test');


test('User Can Add New Trosak With Valid Values', async ({ page }) => {

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

    await page.waitForSelector('.btn.btn-primary.btn-sm');
    await page.click('.btn.btn-primary.btn-sm');

    const elementId = 'vrsta_troska_id';
    await page.waitForSelector(`#${elementId}`);
    await page.selectOption(`#${elementId}`, '1');

    const optionValueToSelect = 'stanarina';
    const dropdownOptionSelector = `#${elementId} option:is([label="${optionValueToSelect}"])`;
   

    const iznosFieldSelector = '#iznos';
    await page.waitForSelector(iznosFieldSelector);
    await page.click(iznosFieldSelector);
    const iznosValue = '500';
    await page.fill(iznosFieldSelector, iznosValue);

    const datumInputSelector = '#datum';
    await page.waitForSelector(datumInputSelector);

    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const todayFormatted = `${year}-${month}-${day}`;

    await page.fill(datumInputSelector, todayFormatted);

    const potvrdiButtonSelector = '.btn.btn-success'; 
    await page.waitForSelector(potvrdiButtonSelector);
    await page.click(potvrdiButtonSelector);

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);

});


test('User Can Successfully Exit Modal For Adding New Trosak', async ({page}) => {

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

    await page.waitForSelector('.btn.btn-primary.btn-sm');
    await page.click('.btn.btn-primary.btn-sm');

    const zatvoriButtonSelector = '.btn.btn-secondary'; 
    await page.waitForSelector(zatvoriButtonSelector);
    await page.click(zatvoriButtonSelector);

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);



});

test('User Cannot Add New Trosak With Invalid Values 1', async ({page}) => {

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

    await page.waitForSelector('.btn.btn-primary.btn-sm');
    await page.click('.btn.btn-primary.btn-sm');

    const elementId = 'vrsta_troska_id';
    await page.waitForSelector(`#${elementId}`);
    await page.selectOption(`#${elementId}`, '1');

    const optionValueToSelect = 'stanarina';
    const dropdownOptionSelector = `#${elementId} option:is([label="${optionValueToSelect}"])`;


    const datumInputSelector = '#datum';
    await page.waitForSelector(datumInputSelector);

    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const todayFormatted = `${year}-${month}-${day}`;

    await page.fill(datumInputSelector, todayFormatted);

    const potvrdiButtonSelector = '.btn.btn-success'; 
    await page.waitForSelector(potvrdiButtonSelector);
    await page.click(potvrdiButtonSelector);

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);

});


test('User Cannot Add New Trosak With Invalid Values 2', async ({page}) => {

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

   await page.waitForSelector('.btn.btn-primary.btn-sm');
   await page.click('.btn.btn-primary.btn-sm');

    const iznosFieldSelector = '#iznos';
    await page.waitForSelector(iznosFieldSelector);
    await page.click(iznosFieldSelector);
    const iznosValue = '500';
    await page.fill(iznosFieldSelector, iznosValue);

    const datumInputSelector = '#datum';
    await page.waitForSelector(datumInputSelector);

    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const todayFormatted = `${year}-${month}-${day}`;

    await page.fill(datumInputSelector, todayFormatted);

    const potvrdiButtonSelector = '.btn.btn-success'; 
    await page.waitForSelector(potvrdiButtonSelector);
    await page.click(potvrdiButtonSelector);

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);




});


test('User Cannot Add New Trosak With Invalid Values 3', async ({page}) => {
 
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

    await page.waitForSelector('.btn.btn-primary.btn-sm');
    await page.click('.btn.btn-primary.btn-sm');

    const elementId = 'vrsta_troska_id';
    await page.waitForSelector(`#${elementId}`);
    await page.selectOption(`#${elementId}`, '2');

    const optionValueToSelect = 'kupovina';
    const dropdownOptionSelector = `#${elementId} option:is([label="${optionValueToSelect}"])`;
   

    const iznosFieldSelector = '#iznos';
    await page.waitForSelector(iznosFieldSelector);
    await page.click(iznosFieldSelector);
    const iznosValue = '500';
    await page.fill(iznosFieldSelector, iznosValue);


    const potvrdiButtonSelector = '.btn.btn-success'; 
    await page.waitForSelector(potvrdiButtonSelector);
    await page.click(potvrdiButtonSelector);

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);



});


test('User Can Edit Trosak With Valid Values', async ({page}) => {

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

    await page.waitForSelector('.btn.btn-outline-warning.btn-sm.uredi');
    await page.click('.btn.btn-outline-warning.btn-sm.uredi');

    const elementId = 'vrsta_troska_id';
    await page.waitForSelector(`#${elementId}`);
    await page.selectOption(`#${elementId}`, '1');

    const optionValueToSelect = 'stanarina';
    const dropdownOptionSelector = `#${elementId} option:is([label="${optionValueToSelect}"])`;
   

    const iznosFieldSelector = '#iznos';
    await page.waitForSelector(iznosFieldSelector);
    await page.click(iznosFieldSelector);
    const iznosValue = '500';
    await page.fill(iznosFieldSelector, iznosValue);

    const datumInputSelector = '#datum';
    await page.waitForSelector(datumInputSelector);

    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const todayFormatted = `${year}-${month}-${day}`;

    await page.fill(datumInputSelector, todayFormatted);

    const potvrdiButtonSelector = '.btn.btn-success'; 
    await page.waitForSelector(potvrdiButtonSelector);
    await page.click(potvrdiButtonSelector);

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);




});

test('User Can Successfully Exit Modal For Editing Trosak', async ({page}) => {

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

    await page.waitForSelector('.btn.btn-outline-warning.btn-sm.uredi');
    await page.click('.btn.btn-outline-warning.btn-sm.uredi');

    const zatvoriButtonSelector = '.btn.btn-secondary'; 
    await page.waitForSelector(zatvoriButtonSelector);
    await page.click(zatvoriButtonSelector);

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);



});

test('User Cannot Change Existing Trosak With Invalid Values 1', async ({page}) => {

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

    await page.waitForSelector('.btn.btn-outline-warning.btn-sm.uredi');
    await page.click('.btn.btn-outline-warning.btn-sm.uredi');

    const elementId = 'vrsta_troska_id';
    await page.waitForSelector(`#${elementId}`);
    await page.selectOption(`#${elementId}`, '1');

    const optionValueToSelect = 'stanarina';
    const dropdownOptionSelector = `#${elementId} option:is([label="${optionValueToSelect}"])`;

    const iznosFieldSelector = '#iznos';
    await page.waitForSelector(iznosFieldSelector);
    await page.click(iznosFieldSelector);
    const iznosValue = '0';
    await page.fill(iznosFieldSelector, iznosValue);


    const datumInputSelector = '#datum';
    await page.waitForSelector(datumInputSelector);

    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const todayFormatted = `${year}-${month}-${day}`;

    await page.fill(datumInputSelector, todayFormatted);

    const potvrdiButtonSelector = '.btn.btn-success'; 
    await page.waitForSelector(potvrdiButtonSelector);
    await page.click(potvrdiButtonSelector);

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);




});

test('User Cannot Change Existing Trosak With Invalid Values 2', async ({page}) => {

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

   await page.waitForSelector('.btn.btn-outline-warning.btn-sm.uredi');
   await page.click('.btn.btn-outline-warning.btn-sm.uredi');

   const elementId = 'vrsta_troska_id';
   await page.waitForSelector(`#${elementId}`);
  

   const optionValueToSelect = 'Odaberi Vrstu Troska';
   const dropdownOptionSelector = `#${elementId} option:is([label="${optionValueToSelect}"])`;


    const iznosFieldSelector = '#iznos';
    await page.waitForSelector(iznosFieldSelector);
    await page.click(iznosFieldSelector);
    const iznosValue = '500';
    await page.fill(iznosFieldSelector, iznosValue);

    const datumInputSelector = '#datum';
    await page.waitForSelector(datumInputSelector);

    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const todayFormatted = `${year}-${month}-${day}`;

    await page.fill(datumInputSelector, todayFormatted);

    const potvrdiButtonSelector = '.btn.btn-success'; 
    await page.waitForSelector(potvrdiButtonSelector);
    await page.click(potvrdiButtonSelector);

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);



});

test('User Cannot Change Existing Trosak With Invalid Values 3', async ({page}) => {

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

   await page.waitForSelector('.btn.btn-outline-warning.btn-sm.uredi');
   await page.click('.btn.btn-outline-warning.btn-sm.uredi');

   const elementId = 'vrsta_troska_id';
   await page.waitForSelector(`#${elementId}`);
   await page.selectOption(`#${elementId}`, '1');

   const optionValueToSelect = 'stanarina';
   const dropdownOptionSelector = `#${elementId} option:is([label="${optionValueToSelect}"])`;


    const iznosFieldSelector = '#iznos';
    await page.waitForSelector(iznosFieldSelector);
    await page.click(iznosFieldSelector);
    const iznosValue = '500';
    await page.fill(iznosFieldSelector, iznosValue);

    const datumInputSelector = '#datum';
    await page.waitForSelector(datumInputSelector);
    await page.fill(datumInputSelector, '');  

    const potvrdiButtonSelector = '.btn.btn-success'; 
    await page.waitForSelector(potvrdiButtonSelector);
    await page.click(potvrdiButtonSelector);

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);



});

test('User Can Successfully Delete Trosak', async ({ page }) => {

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


    await page.waitForSelector('.btn.btn-outline-danger.btn-sm.brisi');
    
   
    page.on('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
       
        await dialog.accept();
    });

    await page.click('.btn.btn-outline-danger.btn-sm.brisi');

    await page.click('.btn.btn-primary');
    await page.waitForTimeout(2000);
});


test('User Can Successfully Cancel Deleting Trosak', async ({ page }) => {

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
















