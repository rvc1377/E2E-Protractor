"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageObjects/calculator");
const protractor_1 = require("protractor");
const angularHomePage_1 = require("../pageObjects/angularHomePage");
const chai_1 = __importDefault(require("chai"));
const DMHub_1 = require("../pageObjects/DMHub");
const DMHform_1 = require("../pageObjects/DMHform");
const ptor_1 = require("protractor/built/ptor");
let calc = new calculator_1.calculator();
let ah = new angularHomePage_1.angularHomePage();
let dmh = new DMHub_1.DMHub();
let dmhForm = new DMHform_1.DMHform();
var expect = chai_1.default.expect;
protractor_1.browser.waitForAngularEnabled(false);
cucumber_1.Given('I will navigate to Calc site', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.Given('I will navigate to {string} page', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == "*************************") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "**************************") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
    else if (string == "DMH") {
        yield protractor_1.browser.get("https:demo:DMHDemo1@audio.dmhub.de/");
    }
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
}));
cucumber_1.When('I clicked on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield ah.angularLink.click();
}));
cucumber_1.When('you will navigate to angular page', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("navigate to new page");
});
cucumber_1.When('I clicked on the loginIcon Button', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
    yield dmh.loginIcon.click();
}));
cucumber_1.When('I click the button login', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
    yield dmh.login.click();
}));
cucumber_1.When('you will navigate to Quantyoo page', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    console.log("navigate to quantyoo");
}));
cucumber_1.When('you will enter {string} and  {string} in input field', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
    yield dmh.userName.sendKeys(string);
    yield dmh.password.sendKeys(string2);
}));
cucumber_1.When('you will enter {string} in search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
    yield ah.search.sendKeys(string);
}));
cucumber_1.When('I click on the submit button', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield dmh.submitButton.click();
    yield protractor_1.browser.sleep(4000);
}));
cucumber_1.When('I click the Btn playMusic', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    protractor_1.browser.ignoreSynchronization = true;
    yield dmh.playMusic.click();
}));
cucumber_1.When('I wait for some time', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(7000);
}));
cucumber_1.When('I click stop Button to pause music', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    protractor_1.browser.sleep(3000);
    protractor_1.browser.ignoreSynchronization = true;
    yield dmh.stopMusic.click();
}));
// Header Button Checking
cucumber_1.When('I check for available elements on header {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    protractor_1.browser.sleep(3000);
    yield dmh.aktionen.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
cucumber_1.When('I check fontsize', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions***************************************************fontsize
    yield dmh.aktionen.click();
    protractor_1.browser.sleep(3000);
    yield dmh.actionPageHeader.getAttribute('class').then(function (text) {
        expect(text).to.equal('center');
        console.log("value of class attribute is " + text);
    });
    yield dmh.actionPageHeader.getTagName().then(function (text) {
        //expect(text).to.equal('h2');
        console.log("Tag name for that attribute is " + text);
    });
}));
cucumber_1.When('I logout', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    protractor_1.browser.sleep(3000);
    yield dmh.loginIcon.click();
    yield dmh.logOut.click();
}));
//Verify invalid username and password
cucumber_1.When('you will entering {string} and  {string} in input field', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
    yield dmh.invalidUserName.sendKeys(string);
    yield dmh.invalidPassword.sendKeys(string2);
    console.log("Successfully entering invalid username and password");
}));
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
cucumber_1.When('I click on {string} from footer', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string === "AGB") //AGB click
     {
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.actions().mouseMove(dmh.agb).perform();
        yield protractor_1.browser.sleep(10000);
        yield dmh.agb.click();
    }
    else if (string === "Datenschutz") { //Datenschutz click
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.actions().mouseMove(dmh.datenschutz).perform();
        yield protractor_1.browser.sleep(10000);
        yield dmh.datenschutz.click();
    }
    else if (string === "Impressum") { //Impressum click
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.actions().mouseMove(dmh.impressum).perform();
        yield protractor_1.browser.sleep(8000);
        yield dmh.impressum.click();
    }
    else if (string === "Kontakt") { //Kontakt click
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.actions().mouseMove(dmh.kontakt).perform();
        yield protractor_1.browser.sleep(10000);
        yield dmh.kontakt.click();
    }
}));
//**********************************************Validators****************
cucumber_1.When('I verify to navigate {string} footer', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string === "AGB") {
        protractor_1.browser.sleep(9000);
        yield dmh.agbValidation.getText().then(function (text) {
            expect(text).to.equal('AGB');
            console.log("Navigated page heading is " + text);
        });
    }
    else if (string === "Datenschutz") //Datenschutz
     {
        protractor_1.browser.sleep(9000);
        yield dmh.datenschutzValidation.getText().then(function (text) {
            expect(text).to.equal('Datenschutz');
            console.log("Navigated page heading is " + text);
        });
    }
    else if (string === "Impressum") //Impressum
     {
        protractor_1.browser.sleep(9000);
        yield dmh.impressumValidation.getText().then(function (text) {
            expect(text).to.equal('Impressum');
            console.log("Navigated page heading is " + text);
        });
    }
    else if (string === "Kontakt") //kontakt
     {
        protractor_1.browser.sleep(9000);
        yield dmh.kontaktValidation.getText().then(function (text) {
            expect(text).to.equal('Kontakt');
            console.log("Navigated page heading is " + text);
        });
    }
}));
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
cucumber_1.When('I click {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
    if (string == "Aktuelles") {
        yield dmh.aktuelles.click();
    }
}));
cucumber_1.When('I verfiy visibility of text {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    // Waits for the element with id 'abc' to be visible on the dom.
    if (string == "10 Fragen in 60 Sekunden - Das große 100.000 Euro-Quiz") {
        protractor_1.browser.sleep(9000);
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield dmhForm.textValidator.getText().then(function (text) {
            expect(text).to.equal("10 Fragen in 60 Sekunden - Das große 100.000 Euro-Quiz");
        });
    }
}));
cucumber_1.When('I select salutation {string} from list', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions                         salutation
    if (string === "Frau") {
        protractor_1.browser.sleep(10000);
        yield dmhForm.salutationFrau.click();
    }
    else if (string === "Herr") {
        protractor_1.browser.sleep(3000);
        yield dmhForm.salutationHerr.click();
    }
}));
cucumber_1.When('I enter valid first-name as {string} and last-name {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
    yield dmhForm.firstName.sendKeys(string);
    protractor_1.browser.sleep(4000);
    yield dmhForm.lastName.sendKeys(string2);
    console.log("successfully entering input parameters");
}));
cucumber_1.When('I enter valid email as {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield dmhForm.formEmail.sendKeys(string);
}));
cucumber_1.When('I enter Valid DOB as {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield dmhForm.dateOfBirth.sendKeys(string);
}));
cucumber_1.When('I tick the acceptance checkbox', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions***************************************************tick box
    yield protractor_1.browser.actions().mouseMove(dmhForm.acceptanceCheckbox).perform();
    yield protractor_1.browser.sleep(3000);
    yield dmhForm.acceptanceCheckbox.click();
}));
cucumber_1.When('I check for mandatory field', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions***************************************************fontsize
    yield dmhForm.firstName.sendKeys(ptor_1.protractor.Key.ENTER);
    yield dmhForm.emptyParameterForm.getText().then(function (text) {
        expect(text).to.equal('Bitte geben Sie Ihren Vornamen an');
    });
}));
//Media Promotion View ****************************************************************************************************
cucumber_1.When('I Verify for Media_promotion Image', () => __awaiter(void 0, void 0, void 0, function* () {
    /*
    browser.sleep(5000);
    await dmh.mediaPromotionImg.getCssValue("background-image:").then(function(text){
     console.log("Media Promotion is " + text);
    
    })
    */
    protractor_1.browser.sleep(3000);
    yield dmh.mediaPromotionImg.getAttribute('style').then(function (text) {
        //expect(text).to.equal('background-image:');
        console.log("value of style attribute is- " + text);
    });
}));
// validators
cucumber_1.Then('the output displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    //await calc.go.click();
    // await calc.getResult.getText().then(function(text)
    //     {
    //  expect(text).to.equal(string);
    //     });
    // invalid username and password validation
    //browser.sleep(3000);
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield dmh.invalidParametersAlert.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMERBQXVEO0FBQ3ZELDJDQUF5QztBQUN6QyxvRUFBaUU7QUFDakUsZ0RBQXdCO0FBQ3hCLGdEQUE2QztBQUM3QyxvREFBaUQ7QUFDakQsZ0RBQW1EO0FBRW5ELElBQUksSUFBSSxHQUFDLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzFCLElBQUksRUFBRSxHQUFDLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQzdCLElBQUksR0FBRyxHQUFDLElBQUksYUFBSyxFQUFFLENBQUM7QUFDcEIsSUFBSSxPQUFPLEdBQUMsSUFBSSxpQkFBTyxFQUFFLENBQUM7QUFDMUIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JDLGdCQUFLLENBQUMsOEJBQThCLEVBQUUsR0FBUSxFQUFFO0lBQzVDLG9FQUFvRTtJQUNyRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFDaEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsa0NBQWtDLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUN4RCxvRUFBb0U7SUFDcEUsSUFBRyxNQUFNLElBQUUsMkJBQTJCLEVBQzFDO1FBQ0ksTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0tBQ2xFO1NBQ0ksSUFBRyxNQUFNLElBQUUsNEJBQTRCLEVBQzVDO1FBQ0ksTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0tBQy9DO1NBQ0ksSUFBRyxNQUFNLElBQUUsS0FBSyxFQUNyQjtRQUNJLE1BQU0sb0JBQU8sQ0FBQyxH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