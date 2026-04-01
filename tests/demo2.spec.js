const { test, chromium } = require('@playwright/test');
test("video TC", async ({ page }) => {
    // const browser = await chromium.launch({headless:false});
    // const page = await browser.newPage()
    await page.goto("https://demoqa.com/automation-practice-form");
    // await page.waitForTimeout(3000);
    await page.locator("//input[@id='firstName']").fill("Pooja");
    // await page.waitForTimeout(3000);
    await page.locator("//input[@id='lastName']").fill("Patil");
    // await page.waitForTimeout(3000);
    await page.locator("//input[@id='userEmail']").fill("pooja@gmail.com");
    // await page.waitForTimeout(3000);
    await page.locator("//label[text()='Female']").click();
    // await page.waitForTimeout(3000);
    await page.locator("//input[@id='userNumber']").fill("1234567890");
    // await page.waitForTimeout(3000);
    await page.locator("//div[@class='subjects-auto-complete__input-container css-19bb58m']").click();
    // await page.waitForTimeout(3000);
    await page.locator("//div[@class='subjects-auto-complete__input-container css-19bb58m']").click();
    // await page.waitForTimeout(3000);
    await page.locator("//label[text()='Sports']").click();
    // await page.waitForTimeout(3000);
    await page.locator("//label[text()='Reading']").click();
    // await page.waitForTimeout(3000);
    await page.locator("//label[text()='Music']").click();


    // await page.waitForTimeout(3000);
    await page.locator("//input[@id='uploadPicture']").setInputFiles("/Users/akash_bhosale/Downloads/1.png");
    await page.screenshot({ path: "screenshot/demo2.png" });



})