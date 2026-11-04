
Feature: We need to check the valid login

Scenario: orange hrm login with valid details 

Given When I am on the Orange hrm login page 
When  I enter the valid username
When I enter the valid password
When I click on login button 
Then I can see the homepage
