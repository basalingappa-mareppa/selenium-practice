import {test,expect} from '@playwright/test'
import { assert } from 'console'
test('login',async({page})=>{
    await page.goto('https://room.chingari.io/live/explore')
    await page.locator("//img[@alt='user']").click()
    //await page.waitForSelector('selector', { timeout: 50000 }); 
})

test('select',async({page})=>{
    await page.goto('https://www.redbus.in/')
    await expect(page).toHaveTitle("India's No. 1 Online Bus Ticket Booking Site");
    
})