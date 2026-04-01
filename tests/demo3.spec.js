const { test, chromium } = require('@playwright/test');
test("dropdown", async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.locator("#state").click();
    await page.locator("//div[text()='Haryana']").click();
    await page.waitForTimeout(2000);
    await page.locator("#city").click();
    await page.locator("//div[text()='Panipat']").click();
    await page.waitForTimeout(2000);

})