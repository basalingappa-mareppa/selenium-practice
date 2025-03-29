exports.Homepage=class Homepage
{
    constructor(page)
    {
         this.page=page;
         this.productlist="//div[@id='tbodyid']/div/div/div/h4/a";
         this.addtocart="//div[@id='tbodyid']/div/div/div/h4/a";
         this.cartpage="#cartur";
    }
    async allproducts(productName) {
        const plist = await this.page.$$(this.productlist);
        for (const pro of plist) 
        {
            if (productName === await pro.textContent()) 
            {
                await pro.click();
                break;  // Exit the loop after the first match is clicked.
            }
        }
    
        await this.page.on('dialog', async dialog => {
            if (dialog.message().includes('added')) {
                await dialog.accept();
            }
        });
        await this.page.addtocart().click();
    }
    async gotocart()
    {
        await this.page.locator(this.page.cartpage).click();
    }
    
}