import {Config} from 'protractor';
import * as reporter from 'cucumber-html-reporter';
import {browser} from "protractor";

// An example configuration file
export let config: Config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect:true,
  framework: 'custom',
  //restartBrowserBetweenTests: true,
  frameworkPath: require.resolve('protractor-cucumber-framework'),



    // Capabilities to be passed to the webdriver instance.
    capabilities: {
     browserName: 'chrome'
      //
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: [    '../features/DmhLogin.feature',
                '../features/DmhHomePage.feature',
                '../features/PlayMusic.feature',
                '../features/font.feature',
                '../features/impressum.feature',
                '../features/Forms.feature',
                '../features/MediaPromotion.feature',
            
  ],
    cucumberOpts: {
        // require step definitions
        //tags: "@MediaPromotion",
        format:'json:./cucumberreport.json',
        require: [
            './stepDefinations/*.js', // accepts a glob
          ]
        
        },




        onPrepare: () => {                                            //extra added this for trial
          //browser.ignoreSynchronization = true;
          browser.manage().window().maximize();
         
      },



        onComplete: ()=>{

            var options = {
                theme: 'bootstrap',
                jsonFile: './cucumberreport.json',
                output: './cucumber_report.html',
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version":"0.3.2",
                    "Test Environment": "LIVE",
                    "Browser": "Chrome",
                    "Platform": "macOS",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };
         
            reporter.generate(options);

       
      },  //extra
  
    // Options to be passed to Jasmine-node.
    
  };