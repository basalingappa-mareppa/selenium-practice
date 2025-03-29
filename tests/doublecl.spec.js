import { test,expect } from "@playwright/test"
test('double click',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
const btn=page.locator("//button[contains(text(),'Copy Text')]");
await btn.dblclick();
const f2=page.locator('#field2')
await expect(f2).toHaveValue('Hello World!');
})