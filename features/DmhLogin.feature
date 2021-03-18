Feature: DMH login

@login   
Scenario Outline: Verify DMH login with valid parameters

Given I will navigate to "DMH" page
When I clicked on the loginIcon Button
And I click the button login
And you will navigate to Quantyoo page
And you will enter "<userName>" and  "<password>" in input field
And  I click on the submit button
Then I logout


Examples:
| userName            | password      |
| dmhubberlin@gmx.de  | BerlinBerlin1 |


@invalidParameter
Scenario Outline: Unable to login with inValid parameters

Given I will navigate to "DMH" page
When I clicked on the loginIcon Button
And I click the button login
And you will navigate to Quantyoo page
And you will entering "<invalidUserName>" and  "<invalidPassword>" in input field
And  I click on the submit button
Then the output displayed should be "E-Mail oder Passwort sind falsch."


Examples:
| invalidUserName            | invalidPassword  |
| dmhuberlin@gfgtxde          | BerlinBer       |