import { Given,When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { expect } from "@playwright/test";
import { OrangeHrmLoginSuccess } from "../pages/orangehrmloginsuccess";

let Orangehrmloginsuccess:OrangeHrmLoginSuccess;


When("I enter the valid username", async function (this: CustomWorld) {
    Orangehrmloginsuccess = new OrangeHrmLoginSuccess(this.page);
    await Orangehrmloginsuccess.usernameMethod();
});

When("I enter the valid password", async function (this: CustomWorld) {
    await Orangehrmloginsuccess.passwordMethod();
});

When("I click on login button", async function (this: CustomWorld) {
    await Orangehrmloginsuccess.loginMethod();
});

Then("I can see the homepage", async function (this: CustomWorld) {
    const homepagetext = await Orangehrmloginsuccess.homepage();
    console.log("Home is visible? - " + homepagetext);
    
});


