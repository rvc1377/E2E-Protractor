Feature: Play and paused music

   

@PlayMusic
Scenario Outline: verify to play and pause music player

Given I will navigate to "DMH" page
When I clicked on the loginIcon Button
And I click the button login
And you will navigate to Quantyoo page
And you will enter "<userName>" and  "<password>" in input field
And I click on the submit button
And I click the Btn playMusic
And I wait for some time
And I click stop Button to pause music
Then I logout


Examples:
| userName            | password      |
| dmhubberlin@gmx.de  | BerlinBerlin1 |