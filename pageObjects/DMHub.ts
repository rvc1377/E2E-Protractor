import { ElementFinder,element,by } from "protractor";

export class DMHub
{

loginIcon:ElementFinder;
login:ElementFinder;
userName:ElementFinder;
password:ElementFinder;
submitButton:ElementFinder;
playMusic:ElementFinder;    //HomePage element
stopMusic:ElementFinder;    //HomePage element
aktionen:ElementFinder;
aktuelles:ElementFinder;
logOut:ElementFinder;
invalidParametersAlert:ElementFinder;
invalidUserName:ElementFinder;  //invalid username 
invalidPassword:ElementFinder;  //invalidPassword
actionPageHeader:ElementFinder;  // for attrubute and tagName
allStream:ElementFinder;  //click to expand all channels
blackChannel:ElementFinder;   //channel from list
//AGB
agb:ElementFinder;
agbValidation:ElementFinder;
iframe:ElementFinder;

//Impressum
impressum:ElementFinder;
impressumValidation:ElementFinder;

//Datenschutz
datenschutz:ElementFinder;
datenschutzValidation:ElementFinder;

//Kontakt
kontakt:ElementFinder;
kontaktValidation:ElementFinder;


mediaPromotionImg:ElementFinder;

constructor()
{

this.loginIcon=element(by.xpath("//div[@class='icon_click_container']"));
this.login=element(by.xpath("//a[contains(text(),'Login')]"));
this.userName=element(by.xpath("//input[@id='field-email']"));
this.password=element(by.xpath("//input[@id='field-password']"));
this.submitButton=element(by.xpath("//input[@class='c-button c-button--expanded c-button--bold c-button--primary']"));
this.playMusic=element(by.xpath("//div[@class='stage__player_btn play']"));
this.stopMusic=element(by.xpath("//div[@class='stage__player_btn stop']"));
this.aktionen=element(by.xpath("//div[@class='header__nav__wrapper']/a[1]"));
this.aktuelles=element(by.xpath("//div[@class='header__nav__wrapper']/a[2]"));
this.logOut=element(by.xpath("//a[contains(text(),'Abmelden')]"));
this.invalidParametersAlert=element(by.xpath("//div[@class='c-callout c-callout--alert']"));
this.invalidUserName=element(by.xpath("//input[@id='field-email']"));
this.invalidPassword=element(by.xpath("//input[@id='field-password']"));
this.actionPageHeader=element(by.xpath("//h2[@class='center']"));
this.allStream=element(by.xpath("//a[contains(text(),'Alle Streams anzeigen')]"));
this.blackChannel=element(by.xpath("//div[@class='mediaview']/div[2]/div[2]/app-media-promotion-list/div/div/div[1]"));

//AGB
this.agb=element(by.linkText("AGB"));
this.agbValidation=element(by.xpath("//h1[contains(text(),'AGB')]"));
this.iframe=element(by.tagName('iframe'));

//Impressum
this.impressum=element(by.linkText("Impressum"));
this.impressumValidation=element(by.xpath("//h1[contains(text(),'Impressum')]"));

//Datenschutz
this.datenschutz=element(by.linkText("Datenschutz"));
this.datenschutzValidation=element(by.xpath("//h1[contains(text(),'Datenschutz')]"));


//Kontakte
this.kontakt=element(by.linkText("Kontakt"));
this.kontaktValidation=element(by.xpath("//h1[contains(text(),'Kontakt')]"));

this.mediaPromotionImg=element(by.xpath("//div[@class='media__promotion__stage__bg']")); 


} 






}