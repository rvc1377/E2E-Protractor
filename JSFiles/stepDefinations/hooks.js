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
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before(function () {
    // This hook will be executed before scenarios tagged with @foo
    //browser.manage().window().maximize();
    protractor_1.browser.manage().window().maximize();
});
//After(function () {
// This hook will be executed After scenarios tagged with @foo and @bar
//browser.manage().deleteAllCookies();
//console.log("Test is completed");
//});
cucumber_1.Before({ tags: "@angularTesting" }, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
    protractor_1.browser.manage().window().maximize();
    console.log("need to execute first");
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed After scenarios tagged with @foo and @bar
        console.log("Test is completed");
        protractor_1.browser.manage().deleteAllCookies();
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBOEM7QUFDOUMsMkNBQXFDO0FBSXJDLGlCQUFNLENBQUM7SUFDTCwrREFBK0Q7SUFDL0QsdUNBQXVDO0lBRXZDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFJSCxxQkFBcUI7QUFDbkIsdUVBQXVFO0FBQ3hFLHNDQUFzQztBQUVyQyxtQ0FBbUM7QUFDckMsS0FBSztBQUVMLGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUMsRUFBRTtJQUNoQyx3RUFBd0U7SUFDeEUsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFDSCxnQkFBSyxDQUFDLFVBQWdCLFFBQVE7O1FBQzFCLHVFQUF1RTtRQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3BDLElBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUcsaUJBQU0sQ0FBQyxNQUFNLEVBQ3pDO1lBQ0ksTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9