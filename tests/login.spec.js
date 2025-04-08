import {test,expect} from '@playwright/test'
import { assert } from 'console'
test('login',async({page,browser})=>{
    const context=browser.newContext();
    const page1= (await context).newPage();
    await page.goto('https://room.chingari.io/live/explore')
    await page.locator("//img[@alt='user']").click()
    //await page.waitForSelector('selector', { timeout: 50000 }); 
})

test('select',async({page})=>{
    await page.goto('https://www.redbus.in/')
    await expect(page).toHaveTitle("Bus Ticket Booking Online at Cheapest Price with Top Bus Operators- redBus");
    
})

test('dropdowntest',async({page})=>{
    await page.goto('https://www.google.com/')
    //await page.click("//span[text()='Date']");
})

test('login the aplication',async({page})=>{
    await page.goto('https://www.flipkart.com/');
    await page.fill("//input[@name='q'],'laptops'").click();
})