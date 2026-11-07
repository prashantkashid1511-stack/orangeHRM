import { Locator, Page } from "@playwright/test";


export class OrangeHrmLogin {

  readonly page:Page;
  readonly orangeHrmlogo:Locator;
  readonly loginText:Locator;
  readonly usernameLable:Locator;
  readonly passwordLable:Locator;

  constructor(page:Page){

      this.page=page;
      this.orangeHrmlogo = page.getByRole('img', { name: 'company-branding' }); 
      this.loginText = page.getByRole('heading', { name: 'Login' });
      this.usernameLable = page.getByPlaceholder('Username');
      this.passwordLable = page.getByPlaceholder('Password');

  }


  async gotoorangehrm(){
    
   await this.page.goto( process.env.BASE_URL!,{waitUntil:"domcontentloaded" , timeout: 60000});

}

 async getorangehrmlogo(): Promise<boolean> {
    
   return await this.orangeHrmlogo.isVisible();

}

async getlogintext(): Promise<boolean> {
    
   return await this.loginText.isVisible();

}

async getusernamelable(): Promise<boolean> {
    
   return await this.usernameLable.isVisible();

}

async getpasswordlable(): Promise<boolean> {
    
   return await this.passwordLable.isVisible();

}

}