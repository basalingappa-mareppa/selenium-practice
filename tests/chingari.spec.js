 const {test,expect} = require('@playwright/test');
 test('tiltle_check',async({page})=>{
    await page.goto('https://room.chingari.io/live/explore')
    const pagetitle=await page.title
    console.log(pagetitle);
    await expect(page).toHaveTitle('Chingari')
    await expect(page).toHaveURL('https://room.chingari.io/live/explore')
 });