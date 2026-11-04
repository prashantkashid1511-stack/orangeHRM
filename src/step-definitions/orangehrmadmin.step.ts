import { Given,When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { expect } from "@playwright/test";
import { OrangehrmAdmin} from "../pages/orangehrmadminpage"

let orangehrmadmin:OrangehrmAdmin;

Then('I can click on the admin tab', async function (this:CustomWorld) {
    orangehrmadmin = new OrangehrmAdmin(this.page);
    await orangehrmadmin.adminOptionClick();
});

Then('user can enter the username in the search box', async function (this:CustomWorld) {
   await orangehrmadmin.usernameselect();
});

Then('can select the user role from the dropdown as a admin', async function (this:CustomWorld) {
  await orangehrmadmin.userrolesselect();
});

Then('user can select the employee name', async function (this:CustomWorld) {
  await orangehrmadmin.employeenameselect();
});


Then('can select the status from the dropdown', async function (this:CustomWorld) {
  
    await orangehrmadmin.statusselect();
});

Then('can click on the search button', async function (this:CustomWorld) {
  
    await orangehrmadmin.searchclick();
});