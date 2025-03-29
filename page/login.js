exports.Loginpage=
class Loginpage
{
constructor(page)
{
    this.page=page;
    this.logilink='#login2';
    this.username='#loginusername';
    this.password='#loginpassword';
    this.loginbutton="button[onclick='logIn()']";
}
async gotologinpage()
{
    await this.page.goto('https://www.demoblaze.com/index.html')
}

async login(username,password)
{
    await this.page.locator(this.logilink).click();
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password);
    await this.page.locator(this.loginbutton).click();

}
}
