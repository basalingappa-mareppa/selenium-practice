import{test,expect} from '@playwright/test'
import {Loginpage} from '../page/login';
import {Homepage} from '../page/home';
test('pob',async({page})=>{
    const ref=new Loginpage(page);
    await ref.gotologinpage();
    await ref.login('pavanl','test@123');
    await page.waitForTimeout(5000);

    const ref1=new Homepage(page)
    await ref1.allproducts('Nexus 6');
    ref1.gotocart();
})

