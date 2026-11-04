import { Given,When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { expect } from "@playwright/test";
import { OrangeHrmLogin } from "../pages/orangehrmloginpage";

let Orangehrmlogin:OrangeHrmLogin;

Given("When I am on the Orange hrm login page" , async function (this:CustomWorld){
  
Orangehrmlogin=new OrangeHrmLogin(this.page);
await Orangehrmlogin.gotoorangehrm();
console.log("URL of the page:- " + this.page.url() );


})

When("I can see the orange HRM logo" , async function (this:CustomWorld){

const hrmlogo = await Orangehrmlogin.getorangehrmlogo();
console.log("HRM logo visibility:", hrmlogo);

})

When("I can see the login text" , async function (this:CustomWorld){

    const stoorelogintext = await Orangehrmlogin.getlogintext();
    console.log("Login text visibility:", stoorelogintext);
    
})

When("I can see the username lable" , async function (this:CustomWorld){

    const usernameinput  = await Orangehrmlogin.getusernamelable();
    console.log("username text visibility:", usernameinput);

})

When("I can see the password lable" , async function (this:CustomWorld){

  const passwordinput = await Orangehrmlogin.getpasswordlable();
  console.log("password text visibility:", passwordinput);

})


