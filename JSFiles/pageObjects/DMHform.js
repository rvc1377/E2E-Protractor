"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class DMHform {
    constructor() {
        this.firstName = protractor_1.element(protractor_1.by.xpath("//input[@id='firstname']"));
        this.lastName = protractor_1.element(protractor_1.by.xpath("//input[@id='lastname']"));
        this.textValidator = protractor_1.element(protractor_1.by.xpath("//h1[@class='title']"));
        this.emptyParameterForm = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Bitte geben Sie Ihren Vornamen an')]"));
        this.formEmail = protractor_1.element(protractor_1.by.xpath("//input[@id='email']"));
        this.dateOfBirth = protractor_1.element(protractor_1.by.xpath("//input[@id='dateofbirth']"));
        this.salutationFrau = protractor_1.element(protractor_1.by.xpath("//div[@class='form__select arrow']")).$('[value="Frau"]');
        this.salutationHerr = protractor_1.element(protractor_1.by.xpath("//div[@class='form__select arrow']")).$('[value="Herr"]');
        this.acceptanceCheckbox = protractor_1.element(protractor_1.by.xpath("//label[contains(text(),'Ja - ich bin mit den Teilnahmebedingungen einverst')]"));
        this.acceptanceCheckboxVlidator = protractor_1.element(protractor_1.by.xpath("//label[contains(text(),'Teilnahmebedingungen')]"));
    }
}
exports.DMHform = DMHform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRE1IZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL0RNSGZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBc0Q7QUFFdEQsTUFBYSxPQUFPO0lBY3BCO1FBRUEsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsYUFBYSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGtCQUFrQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4REFBOEQsQ0FBQyxDQUFDLENBQUM7UUFDMUcsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsY0FBYyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLGNBQWMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxrQkFBa0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0ZBQWdGLENBQUMsQ0FBQyxDQUFDO1FBQzVILElBQUksQ0FBQywwQkFBMEIsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQyxDQUFDO0lBRXRHLENBQUM7Q0FFQTtBQTdCRCwwQkE2QkMifQ==