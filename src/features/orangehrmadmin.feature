
@orangehrmadmin
Feature: We need to check the admin tab functionality

Scenario: orange hrm check the admin tab functionality 

Given When I am on the Orange hrm login page 
When  I enter the valid username
When I enter the valid password
When I click on login button 
Then I can see the homepage
Then I can click on the admin tab 
Then user can enter the username in the search box 
Then can select the user role from the dropdown as a admin
Then user can select the employee name 
Then can select the status from the dropdown
Then can click on the search button
