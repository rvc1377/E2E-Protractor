Feature: Verify different parameters from Form

@Form  
Scenario Outline: Verify for input parameters from form

Given I will navigate to "DMH" page   
And I click "<Btn>"
And I verfiy visibility of text "<TEXT>"
And I select salutation "<SALUTATION>" from list
And I enter valid first-name as "<firstName>" and last-name "<lastName>"
And I enter valid email as "<Email-Adress>"
And I enter Valid DOB as "<DOB>"
Then I tick the acceptance checkbox


Examples:
| Btn       | TEXT | SALUTATION | firstName | lastName |  Email-Adress | DOB | 
| Aktuelles | 10 Fragen in 60 Sekunden - Das große 100.000 Euro-Quiz | Frau  | Hello | Test |  dmh@gmx.de | 31.12.2012 | 


@EmptyForm  
Scenario Outline: Verify for empty parameters in form

Given I will navigate to "DMH" page
And I click "<Btn>"
And I verfiy visibility of text "<TEXT>"
Then I check for mandatory field




Examples:
| Btn       |  TEXT |
| Aktuelles |  10 Fragen in 60 Sekunden - Das große 100.000 Euro-Quiz |