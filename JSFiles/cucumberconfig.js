"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
const protractor_1 = require("protractor");
// An example configuration file
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    //restartBrowserBetweenTests: true,
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
       browserName: 'chrome'
        //browserName: 'firefox'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/DmhLogin.feature',
       // '../features/DmhHomePage.feature',
       // '../features/PlayMusic.feature',
       // '../features/font.feature',
       // '../features/impressum.feature',
       // '../features/Forms.feature',
        //'../features/MediaPromotion.feature',
    ],
    cucumberOpts: {
        // require step definitions
        //tags: "@MediaPromotion",
        format: 'json:./cucumberreport.json',
        require: [
            './stepDefinations/*.js',
        ]
    },
    onPrepare: () => {
        //browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize();
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberreport.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "LIVE",
                "Browser": "Chrome",
                "Platform": "macOS",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxpRUFBbUQ7QUFDbkQsMkNBQW1DO0FBRW5DLGdDQUFnQztBQUNyQixRQUFBLE1BQU0sR0FBVztJQUN4Qiw0Q0FBNEM7SUFDNUMsa0RBQWtEO0lBQ3BELGFBQWEsRUFBQyxJQUFJO0lBQ2xCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLG1DQUFtQztJQUNuQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUk3RCx1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFFRCx1RUFBdUU7SUFDdkUsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQyxLQUFLLEVBQUUsQ0FBSyw4QkFBOEI7UUFDOUIsaUNBQWlDO1FBQ2pDLCtCQUErQjtRQUMvQiwwQkFBMEI7UUFDMUIsK0JBQStCO1FBQy9CLDJCQUEyQjtRQUMzQixvQ0FBb0M7S0FFakQ7SUFDQyxZQUFZLEVBQUU7UUFDViwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLE1BQU0sRUFBQyw0QkFBNEI7UUFDbkMsT0FBTyxFQUFFO1lBQ0wsd0JBQXdCO1NBQ3pCO0tBRUY7SUFLRCxTQUFTLEVBQUUsR0FBRyxFQUFFO1FBQ2QsdUNBQXVDO1FBQ3ZDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFekMsQ0FBQztJQUlDLFVBQVUsRUFBRSxHQUFFLEVBQUU7UUFFWixJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsTUFBTSxFQUFFLHdCQUF3QjtZQUNoQyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFO2dCQUNOLGFBQWEsRUFBQyxPQUFPO2dCQUNyQixrQkFBa0IsRUFBRSxNQUFNO2dCQUMxQixTQUFTLEVBQUUsUUFBUTtnQkFDbkIsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNKLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBR2pDLENBQUM7Q0FJSixDQUFDIn0=