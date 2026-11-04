import { Locator , Page} from "@playwright/test";

export class OrangehrmAdmin{

  readonly page:Page;  
  readonly adminoption: Locator;
  readonly userName: Locator;
  readonly userRole: Locator;
  readonly userroleoption: Locator;
  readonly employeeName: Locator;
  readonly status: Locator;
  readonly statusoption: Locator;
  readonly search: Locator;


 constructor (page:Page){
   
    this.page=page;
    this.adminoption = page.locator("//span[text()='Admin']");
    this.userName = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]");
    this.userRole= page.locator("(//div[@class='oxd-select-text-input'])[1]");
    this.userroleoption = page.getByRole('listbox').getByText('Admin', { exact: true });
    this.employeeName = page.getByPlaceholder('Type for hints...');
    this.status= page.locator("(//div[@class='oxd-select-text-input'])[2]");
    this.statusoption = page.locator('.oxd-select-option').filter({ hasText: 'Enabled' });
    this.search = page.getByRole("button", {name: ' Search '});
 }


 async adminOptionClick(){

    await this.adminoption.click();
 }

async usernameselect(){

    await this.userName.fill("prashant");
 }

 async userrolesselect(){

    await this.userRole.click();
    await this. userroleoption.click();
    
 }

async employeenameselect(){

    await this.employeeName.fill("prashant kashid");
    
 }

 async statusselect(){

    await this.status.click();
    await this.statusoption.click()

 }

 async searchclick(){

    await this.search.click();
 }




}