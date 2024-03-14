const { test, expect } = require('@playwright/test');

test('User can successfully login and logout', async ({ page }) => {
 
  await page.goto('http://localhost/troskovi-sistem/index.php/');
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

test('User Cannot Login With Invalid Credentials', async ({page}) => {

  await page.goto('http://localhost/troskovi-sistem/index.php');
  await page.evaluate(() => { localStorage.clear(); });

  await page.fill('#email', 'admin@adminn.com');
  await page.fill('#password', '1234');
  await page.click('.btn.btn-primary.w-100.py-2');

  const errorMessageSelector = '.alert.alert-info';
  await page.waitForSelector(errorMessageSelector);

  const errorMessage = await page.textContent(errorMessageSelector);
  expect(errorMessage).toContain('Informacije nisu tacne. Pokusajte ponovo.');
  const currentUrl = page.url();

  const desiredUrl = 'http://localhost/troskovi-sistem/index.php'; 
  expect(currentUrl).toBe(desiredUrl);




});

test('User Cannot Login With Valid Email And Invalid Password', async ({page}) => {

  await page.goto('http://localhost/troskovi-sistem/index.php');
  await page.evaluate(() => { localStorage.clear(); });

  await page.fill('#email', 'admin@admin.com');
  await page.fill('#password', '1234');
  await page.click('.btn.btn-primary.w-100.py-2');

  const errorMessageSelector = '.alert.alert-info';
  await page.waitForSelector(errorMessageSelector);

  const errorMessage = await page.textContent(errorMessageSelector);
  expect(errorMessage).toContain('Informacije nisu tacne. Pokusajte ponovo.');
  const currentUrl = page.url();

  const desiredUrl = 'http://localhost/troskovi-sistem/index.php'; 
  expect(currentUrl).toBe(desiredUrl);


});


test('User Cannot Login With Invalid Email And Valid Password', async ({page}) => {

  await page.goto('http://localhost/troskovi-sistem/index.php');
  await page.evaluate(() => { localStorage.clear(); });

  await page.fill('#email', 'admin@adminn.com');
  await page.fill('#password', '123');
  await page.click('.btn.btn-primary.w-100.py-2');

  const errorMessageSelector = '.alert.alert-info';
  await page.waitForSelector(errorMessageSelector);

  const errorMessage = await page.textContent(errorMessageSelector);
  expect(errorMessage).toContain('Informacije nisu tacne. Pokusajte ponovo.');
  const currentUrl = page.url();

  const desiredUrl = 'http://localhost/troskovi-sistem/index.php'; 
  expect(currentUrl).toBe(desiredUrl);


});


