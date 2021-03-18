Feature: Footer validation

@AGB  
Scenario Outline: Scenario Outline name: Verify for AGB from homePage footer

Given I will navigate to "DMH" page
When I clicked on the loginIcon Button
And I click the button login
And you will navigate to Quantyoo page
And you will enter "<userName>" and  "<password>" in input field
And I click on the submit button
And I click on "AGB" from footer
And I verify to navigate "<footer>" footer
Then I logout

Examples:
| userName            | password      | footer |
| dmhubberlin@gmx.de  | BerlinBerlin1 |  AGB   |

@Datenschutz
Scenario Outline: Scenario Outline name: Verify for Datenschutz from homePage footer

Given I will navigate to "DMH" page
When I clicked on the loginIcon Button
And I click the button login
And you will navigate to Quantyoo page
And you will enter "<userName>" and  "<password>" in input field
And I click on the submit button
And I click on "Datenschutz" from footer
And I verify to navigate "<footer>" footer
Then I logout

Examples:
| userName            | password      | footer      |
| dmhubberlin@gmx.de  | BerlinBerlin1 | Datenschutz |

@Impressum  
Scenario Outline: Scenario Outline name: Verify for Impressum from homePage footer

Given I will navigate to "DMH" page
When I clicked on the loginIcon Button
And I click the button login
And you will navigate to Quantyoo page
And you will enter "<userName>" and  "<password>" in input field
And I click on the submit button
And I click on "Impressum" from footer
And I verify to navigate "<footer>" footer
Then I logout

Examples:
| userName            | password      | footer    |
| dmhubberlin@gmx.de  | BerlinBerlin1 | Impressum |

@Kontakt
Scenario Outline: Scenario Outline name: Verify for Kontakt from homePage footer

Given I will navigate to "DMH" page
When I clicked on the loginIcon Button
And I click the button login
And you will navigate to Quantyoo page
And you will enter "<userName>" and  "<password>" in input field
And I click on the submit button
And I click on "Kontakt" from footer
And I verify to navigate "<footer>" footer
Then I logout

Examples:
| userName            | password      | footer     |
| dmhubberlin@gmx.de  | BerlinBerlin1 | Kontakt    |