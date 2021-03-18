import { Given, When, Then } from "cucumber";
import { calculator } from "../pageObjects/calculator";
import {browser, Key,} from "protractor";
import { angularHomePage } from "../pageObjects/angularHomePage";
import chai from "chai";
import { DMHub } from "../pageObjects/DMHub";
import { DMHform } from "../pageObjects/DMHform";
import { protractor } from "protractor/built/ptor";

let calc=new calculator();
let ah=new angularHomePage();
let dmh=new DMHub();
let dmhForm=new DMHform();
var expect = chai.expect;
browser.waitForAngularEnabled(false);    
Given('I will navigate to Calc site', async ()=> {
    // Write code here that turns the phrase above into concrete actions
   await browser.get('http://juliemr.github.io/protractor-demo/');
  });
  
  Given('I will navigate to {string} page', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
    if(string=="*************************")
{
    await browser.get('http://juliemr.github.io/protractor-demo/');
}
else if(string=="**************************")
{
    await browser.get("https://angularjs.org/");
}
else if(string=="DMH")
{
    await browser.get("https:demo:DMHDemo1@audio.dmhub.de/");
}

  });
  When('I add two numbers {string} and {string}', async (string, string2)=> {
    // Write code here that turns the phrase above into concrete actions
    await browser.sleep(3000);
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
  });
  When('I clicked on header link', async ()=> {
    // Write code here that turns the phrase above into concrete actions
    await ah.angularLink.click();
  });
  When('you will navigate to angular page', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("navigate to new page");
  });
  When('I clicked on the loginIcon Button', async ()=> {
    // Write code here that turns the phrase above into concrete actions
    await browser.sleep(3000);
    await dmh.loginIcon.click();
  });

  When('I click the button login', async ()=> {
    // Write code here that turns the phrase above into concrete actions
    await browser.sleep(3000);
    await dmh.login.click();
  });

  When('you will navigate to Quantyoo page', async ()=> {
    // Write code here that turns the phrase above into concrete actions
    console.log("navigate to quantyoo")
  });

  When('you will enter {string} and  {string} in input field', async (string, string2,)=> {
    // Write code here that turns the phrase above into concrete actions
    await browser.sleep(3000);
    await dmh.userName.sendKeys(string);
    await dmh.password.sendKeys(string2);
  });

  When('you will enter {string} in search box', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
    await browser.sleep(3000);
await ah.search.sendKeys(string);
  });

  When('I click on the submit button', async ()=> {
    // Write code here that turns the phrase above into concrete actions
    
    await browser.waitForAngularEnabled(false);
    await dmh.submitButton.click();
    await browser.sleep(4000);
  });


  When('I click the Btn playMusic', async ()=> {
    // Write code here that turns the phrase above into concrete actions
    browser.ignoreSynchronization = true;
    await dmh.playMusic.click();
  });

  When('I wait for some time', async ()=> {
           // Write code here that turns the phrase above into concrete actions
           await browser.sleep(7000);
         });


         When ('I click stop Button to pause music', async ()=> {
          // Write code here that turns the phrase above into concrete actions
          browser.sleep(3000);
          browser.ignoreSynchronization = true;
          await dmh.stopMusic.click();
        });

// Header Button Checking
        When('I check for available elements on header {string}', async (string)=> {
          // Write code here that turns the phrase above into concrete actions
          browser.sleep(3000);
          await dmh.aktionen.getText().then(function(text)
          {
            expect(text).to.equal(string)
          })
        });
       
        When('I check fontsize', async ()=> {
          // Write code here that turns the phrase above into concrete actions***************************************************fontsize
           await dmh.aktionen.click();
           browser.sleep(3000);   
          await dmh.actionPageHeader.getAttribute('class').then(function(text){
            expect(text).to.equal('center');
            console.log("value of class attribute is " + text);
            
           })   


           await dmh.actionPageHeader.getTagName().then(function(text){
            //expect(text).to.equal('h2');
            console.log("Tag name for that attribute is " + text);
            
           })   

        });
        
        When ('I logout', async ()=> {
          // Write code here that turns the phrase above into concrete actions
          browser.sleep(3000);
          await dmh.loginIcon.click();
          await dmh.logOut.click();
          
        });

//Verify invalid username and password

       When('you will entering {string} and  {string} in input field', async (string, string2)=> {
          // Write code here that turns the phrase above into concrete actions
         await browser.sleep(3000);
         await dmh.invalidUserName.sendKeys(string);
         await dmh.invalidPassword.sendKeys(string2);
         console.log("Successfully entering invalid username and password")

       });

//Impressum:

//When('I verfiy that {string} is availble at footer', async (string)=> {
  // Write code here that turns the phrase above into concrete actions
  //await dmh.impressum.getText().then(function(text)
    //      {
      //      expect(text).to.equal(string)
        //  })
          //browser.sleep(3000);
//});

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%new try%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
When('I click on {string} from footer', async (string)=> {
  // Write code here that turns the phrase above into concrete actions
  
if (string==="AGB")                                        //AGB click
{
   browser.ignoreSynchronization = true;
  
  await browser.actions().mouseMove(dmh.agb).perform();
  await browser.sleep(10000);
  await dmh.agb.click();
}
else if (string==="Datenschutz"){                        //Datenschutz click
  browser.ignoreSynchronization = true;
  await browser.actions().mouseMove(dmh.datenschutz).perform();
  await browser.sleep(10000);
  await dmh.datenschutz.click();
}  

else if (string==="Impressum"){                            //Impressum click
  browser.ignoreSynchronization = true;
  
  await browser.actions().mouseMove(dmh.impressum).perform();
  await browser.sleep(8000);
  await dmh.impressum.click();
  
}

else if (string==="Kontakt"){                             //Kontakt click
  browser.ignoreSynchronization = true;
  
  await browser.actions().mouseMove(dmh.kontakt).perform();
  await browser.sleep(10000);
  await dmh.kontakt.click();
}  


});
//**********************************************Validators****************
When('I verify to navigate {string} footer', async  (string)=>  {               //AGB
  if (string==="AGB")
  {
    browser.sleep(9000);
    await dmh.agbValidation.getText().then(function(text){
      expect(text).to.equal('AGB');
      console.log("Navigated page heading is " + text);
    });
  }
  else if (string==="Datenschutz")                                              //Datenschutz
  {
    browser.sleep(9000);
    await dmh.datenschutzValidation.getText().then(function(text){
    expect(text).to.equal('Datenschutz');
    console.log("Navigated page heading is " + text);
    
     })   
  }
  else if (string==="Impressum")                                                 //Impressum
  {
    browser.sleep(9000);
    await dmh.impressumValidation.getText().then(function(text){
    expect(text).to.equal('Impressum');
    console.log("Navigated page heading is " + text);
    
     })   
  }
  else if (string==="Kontakt")                                                   //kontakt
  {
    browser.sleep(9000);
    await dmh.kontaktValidation.getText().then(function(text){
    expect(text).to.equal('Kontakt');
    console.log("Navigated page heading is " + text);
    
     })   
  }
 
});


//When('I click on it', async ()=> {
  // Write code here that turns the phrase above into concrete actions ######################################################
 //browser.ignoreSynchronization = true;
  
 //await browser.actions().mouseMove(dmh.agb).perform();
 //await browser.sleep(10000);
 //await dmh.agb.click();


  //##########################################################Impressum######################################################
  //browser.ignoreSynchronization = true;
  
  //await browser.actions().mouseMove(dmh.impressum).perform();
  //await browser.sleep(10000);
  //await dmh.impressum.click();
  
//});

//When('I verify to navigate on page', async ()=> {                             //AGB validation
  // Write code here that turns the phrase above into concrete actions
 // browser.sleep(9000);
  //await dmh.agbValidation.getText().then(function(text){
   // expect(text).to.equal('AGB');
   // console.log("Navigated page heading is " + text);
  //})
  // browser.sleep(9000);
  //await dmh.impressumValidation.getText().then(function(text){               //Impressum validation
  //expect(text).to.equal('Impressum');
  //console.log("Navigated page heading is " + text);
  
   //})   


//});



//  Verification different paramneters of Forms from the home page ############################################


When ('I click {string}', async (string) => {
  // Write code here that turns the phrase above into concrete actions
  await browser.sleep(3000);
  if(string=="Aktuelles")
  {
    await dmh.aktuelles.click();
  }
});
When ('I verfiy visibility of text {string}', async (string) => {
  // Write code here that turns the phrase above into concrete actions
 
  // Waits for the element with id 'abc' to be visible on the dom.
  if(string=="10 Fragen in 60 Sekunden - Das große 100.000 Euro-Quiz"){
    browser.sleep(9000);
    browser.ignoreSynchronization = true;
    await browser.waitForAngularEnabled(false);
            await dmhForm.textValidator.getText().then(function(text)
            {
              expect(text).to.equal("10 Fragen in 60 Sekunden - Das große 100.000 Euro-Quiz");

            })
  }
});
When('I select salutation {string} from list', async (string) =>  {
  // Write code here that turns the phrase above into concrete actions                         salutation
  if(string==="Frau"){
    browser.sleep(10000);
    await dmhForm.salutationFrau.click();
  }else if(string==="Herr"){
    browser.sleep(3000);
    await dmhForm.salutationHerr.click();
  } 
});

When ('I enter valid first-name as {string} and last-name {string}', async  (string, string2) => {
  // Write code here that turns the phrase above into concrete actions

  
  await browser.sleep(3000);
  await dmhForm.firstName.sendKeys(string);
  browser.sleep(4000);
  await dmhForm.lastName.sendKeys(string2);
 
  console.log("successfully entering input parameters");

});
When('I enter valid email as {string}', async (string) =>  {
  // Write code here that turns the phrase above into concrete actions
  await dmhForm.formEmail.sendKeys(string);
});
When('I enter Valid DOB as {string}', async (string) =>  {
  // Write code here that turns the phrase above into concrete actions
  await dmhForm.dateOfBirth.sendKeys(string);
});
When('I tick the acceptance checkbox', async ()=> {
  // Write code here that turns the phrase above into concrete actions***************************************************tick box

  
   await browser.actions().mouseMove(dmhForm.acceptanceCheckbox).perform();
   await browser.sleep(3000);
   await dmhForm.acceptanceCheckbox.click();
  
  });


When('I check for mandatory field', async ()=> {
  // Write code here that turns the phrase above into concrete actions***************************************************fontsize
   await dmhForm.firstName.sendKeys(protractor.Key.ENTER);
   await dmhForm.emptyParameterForm.getText().then(function(text){
    expect(text).to.equal('Bitte geben Sie Ihren Vornamen an');
  
   })  
  });


//Media Promotion View ****************************************************************************************************
When('I Verify for Media_promotion Image', async ()=> {
  
  /*
  browser.sleep(5000);
  await dmh.mediaPromotionImg.getCssValue("background-image:").then(function(text){
   console.log("Media Promotion is " + text);
  
  })
  */
 browser.sleep(3000);   
 await dmh.mediaPromotionImg.getAttribute('style').then(function(text){
   //expect(text).to.equal('background-image:');
   console.log("value of style attribute is- " + text);
  })
  
});






// validators

  Then('the output displayed should be {string}', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
        //await calc.go.click();
       // await calc.getResult.getText().then(function(text)
       //     {
      //  expect(text).to.equal(string);
       //     });
// invalid username and password validation
        //browser.sleep(3000);
        await browser.waitForAngularEnabled(false);
         await dmh.invalidParametersAlert.getText().then(function(text){
          expect(text).to.equal(string);
          
         })   
           
        








  });