import { Locator, Page } from "@playwright/test";


export class OrangeHrmLoginSuccess {

  readonly page:Page;
  readonly usernameEnter:Locator;
  readonly passwordEnter:Locator;
  readonly loginButton:Locator;
  readonly timeatwork:Locator;

  constructor(page:Page){

      this.page=page;
      this.usernameEnter = page.getByPlaceholder('Username');
      this.passwordEnter = page.getByPlaceholder('Password');
      this.loginButton = page.getByRole('button', { name: 'Login' });
      this.timeatwork = page.getByText("Time at Work");
  }


 async usernameMethod() {
    
   await this.usernameEnter.fill("Admin");

}

async passwordMethod() {
    
   await this.passwordEnter.fill("admin123");

}

async loginMethod() {
    
 await this.loginButton.click();

}

async homepage(): Promise<boolean>{
 
  return await this.timeatwork.isVisible();
}

}