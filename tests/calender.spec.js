const { test, chromium } = require('@playwright/test');
test("calender", async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.redbus.in/");
    await page.locator("//div[@class='dateInputWrapper___3d9973 dateHighlight___dc6e87']").click();
    while (true) {
        const displayedMonthYear = await page.locator("//p[@class='monthYear___1967d0']").textContent();
        if (displayedMonthYear == "December 2026") {
            break;
        }
        else {
            await page.locator("//i[@class='icon icon-arrow arrow___0339f5 right___5fb30b ']").click();
        }
    }
    await page.locator("div.date___bb4ad0.available___ae3578 span").filter({ hasText: "25" }).click();
    await page.waitForTimeout(3000);
})