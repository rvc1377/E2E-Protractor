
import {Before,After, Status} from "cucumber";
import { browser } from "protractor";



Before(function () {
  // This hook will be executed before scenarios tagged with @foo
  //browser.manage().window().maximize();
 
  browser.manage().window().maximize();
});



//After(function () {
  // This hook will be executed After scenarios tagged with @foo and @bar
 //browser.manage().deleteAllCookies();
  
  //console.log("Test is completed");
//});

Before({tags: "@angularTesting"}, function () {
  // This hook will be executed before scenarios tagged with @foo and @bar
  browser.manage().window().maximize();
  console.log("need to execute first");
});
After(async function (scenario) {
    // This hook will be executed After scenarios tagged with @foo and @bar
    console.log("Test is completed");
    browser.manage().deleteAllCookies();
    if(scenario.result.status===Status.FAILED)
    {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot,"image/png");
    }
  });