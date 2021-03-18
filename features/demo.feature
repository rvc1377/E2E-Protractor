Feature: I am going to validate calculator app

@calculatorTesting
Scenario: calculator app functionality testing

Given I will navigate to Calc site
When I add two numbers "3" and "5"
Then the output displayed should be "7"

@calculatorTesting
Scenario: calculator app functionality testing

Given I will navigate to "Calc" page
When I add two numbers "2" and "7"
Then the output displayed should be "9"


@angularTesting
Scenario Outline: Angular validation

Given I will navigate to "Angularjs" page
When I clicked on header link
And you will navigate to angular page
Then you will enter "<key>" in search box

Examples:
| key | 
| hello  |
| testHello | 

Scenario Outline: DMH validation

Given I will navigate to "DMH" page
When I clicked on the loginIcon Button
And I click the button login
And you will navigate to Quantyoo page
And you will enter "<userName>" and  "<password>" in input field
Then I click on the submit button


Examples:
| userName            | password      |
| dmhubberlin@gmx.de  | BerlinBerlin1 |

Scenario Outline: DMH header options from homePage

Given I will navigate to "DMH" page
When I clicked on the loginIcon Button
And I click the button login
And you will navigate to Quantyoo page
And you will enter "<userName>" and  "<password>" in input field
And I click on the submit button
Then I check for available elements on header "Aktionen"



Examples:
| userName            | password      |
| dmhubberlin@gmx.de  | BerlinBerlin1 |