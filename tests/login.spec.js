import {test,expect} from '@playwright/test'
test('login',async({page})=>{
    await page.goto('https://room.chingari.io/live/explore')
    await page.locator("//img[@alt='user']").click()
    //await page.waitForSelector('selector', { timeout: 50000 }); 
})