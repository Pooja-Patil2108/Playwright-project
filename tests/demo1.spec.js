const { test, chromium } = require('@playwright/test');
test("TC1", async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(3000);
    await page.locator("//textarea[@class='gLFyf']").fill("playwright");
    await page.waitForTimeout(3000);
    await page.locator("//input[@class='gNO89b']").first().click();;
    await page.waitForTimeout(3000);
})