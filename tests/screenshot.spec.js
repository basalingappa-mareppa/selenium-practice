import {test,expect} from '@playwright/test'
test('screenshot',async({page})=>{
    await page.goto('https://room.chingari.io/live/explore')
    await page.locator("//span[contains(text(),'Wallet')]").click();
});