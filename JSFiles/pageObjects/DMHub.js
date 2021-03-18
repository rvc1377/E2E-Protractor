"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class DMHub {
    constructor() {
        this.loginIcon = protractor_1.element(protractor_1.by.xpath("//div[@class='icon_click_container']"));
        this.login = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Login')]"));
        this.userName = protractor_1.element(protractor_1.by.xpath("//input[@id='field-email']"));
        this.password = protractor_1.element(protractor_1.by.xpath("//input[@id='field-password']"));
        this.submitButton = protractor_1.element(protractor_1.by.xpath("//input[@class='c-button c-button--expanded c-button--bold c-button--primary']"));
        this.playMusic = protractor_1.element(protractor_1.by.xpath("//div[@class='stage__player_btn play']"));
        this.stopMusic = protractor_1.element(protractor_1.by.xpath("//div[@class='stage__player_btn stop']"));
        this.aktionen = protractor_1.element(protractor_1.by.xpath("//div[@class='header__nav__wrapper']/a[1]"));
        this.aktuelles = protractor_1.element(protractor_1.by.xpath("//div[@class='header__nav__wrapper']/a[2]"));
        this.logOut = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Abmelden')]"));
        this.invalidParametersAlert = protractor_1.element(protractor_1.by.xpath("//div[@class='c-callout c-callout--alert']"));
        this.invalidUserName = protractor_1.element(protractor_1.by.xpath("//input[@id='field-email']"));
        this.invalidPassword = protractor_1.element(protractor_1.by.xpath("//input[@id='field-password']"));
        this.actionPageHeader = protractor_1.element(protractor_1.by.xpath("//h2[@class='center']"));
        this.allStream = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Alle Streams anzeigen')]"));
        this.blackChannel = protractor_1.element(protractor_1.by.xpath("//div[@class='mediaview']/div[2]/div[2]/app-media-promotion-list/div/div/div[1]"));
        //AGB
        this.agb = protractor_1.element(protractor_1.by.linkText("AGB"));
        this.agbValidation = protractor_1.element(protractor_1.by.xpath("//h1[contains(text(),'AGB')]"));
        this.iframe = protractor_1.element(protractor_1.by.tagName('iframe'));
        //Impressum
        this.impressum = protractor_1.element(protractor_1.by.linkText("Impressum"));
        this.impressumValidation = protractor_1.element(protractor_1.by.xpath("//h1[contains(text(),'Impressum')]"));
        //Datenschutz
        this.datenschutz = protractor_1.element(protractor_1.by.linkText("Datenschutz"));
        this.datenschutzValidation = protractor_1.element(protractor_1.by.xpath("//h1[contains(text(),'Datenschutz')]"));
        //Kontakte
        this.kontakt = protractor_1.element(protractor_1.by.linkText("Kontakt"));
        this.kontaktValidation = protractor_1.element(protractor_1.by.xpath("//h1[contains(text(),'Kontakt')]"));
        this.mediaPromotionImg = protractor_1.element(protractor_1.by.xpath("//div[@class='media__promotion__stage__bg']"));
    }
}
exports.DMHub = DMHub;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRE1IdWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9ETUh1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFzRDtBQUV0RCxNQUFhLEtBQUs7SUF1Q2xCO1FBR0EsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxLQUFLLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdGQUFnRixDQUFDLENBQUMsQ0FBQztRQUN0SCxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLE1BQU0sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxzQkFBc0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxlQUFlLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsZUFBZSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGdCQUFnQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlGQUFpRixDQUFDLENBQUMsQ0FBQztRQUV2SCxLQUFLO1FBQ0wsSUFBSSxDQUFDLEdBQUcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLE1BQU0sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUUxQyxXQUFXO1FBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsbUJBQW1CLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQztRQUVqRixhQUFhO1FBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMscUJBQXFCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztRQUdyRixVQUFVO1FBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsaUJBQWlCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsaUJBQWlCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUMsQ0FBQztJQUd4RixDQUFDO0NBT0E7QUF2RkQsc0JBdUZDIn0=