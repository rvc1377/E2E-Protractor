import { ElementFinder,element,by } from "protractor";

export class DMHform
{


firstName:ElementFinder;
lastName:ElementFinder;
textValidator:ElementFinder;
emptyParameterForm:ElementFinder;
formEmail:ElementFinder;
dateOfBirth:ElementFinder;
salutationFrau:ElementFinder;
salutationHerr:ElementFinder;
acceptanceCheckbox:ElementFinder;
acceptanceCheckboxVlidator:ElementFinder;
constructor()
{
this.firstName=element(by.xpath("//input[@id='firstname']"));
this.lastName=element(by.xpath("//input[@id='lastname']"));
this.textValidator=element(by.xpath("//h1[@class='title']"));
this.emptyParameterForm=element(by.xpath("//span[contains(text(),'Bitte geben Sie Ihren Vornamen an')]"));
this.formEmail=element(by.xpath("//input[@id='email']"));
this.dateOfBirth=element(by.xpath("//input[@id='dateofbirth']"));
this.salutationFrau=element(by.xpath("//div[@class='form__select arrow']")).$('[value="Frau"]');
this.salutationHerr=element(by.xpath("//div[@class='form__select arrow']")).$('[value="Herr"]');
this.acceptanceCheckbox=element(by.xpath("//label[contains(text(),'Ja - ich bin mit den Teilnahmebedingungen einverst')]"));
this.acceptanceCheckboxVlidator=element(by.xpath("//label[contains(text(),'Teilnahmebedingungen')]"));

}

}