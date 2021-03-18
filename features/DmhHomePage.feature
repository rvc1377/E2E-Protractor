


Feature: Verify header options

@HeaderOptions  
Scenario Outline: DMH header options from homePage

Given I will navigate to "DMH" page
When I clicked on the loginIcon Button
And I click the button login
And you will navigate to Quantyoo page
And you will enter "<userName>" and  "<password>" in input field
And I click on the submit button
And I check for available elements on header "Aktionen"
Then I logout 



Examples:
| userName            | password      |
| dmhubberlin@gmx.de  | BerlinBerlin1 |



