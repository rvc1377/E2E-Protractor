
import {browser} from "protractor";
import {element,by} from "protractor";
import { calculator } from "./pageObjects/calculator";
import { angularHomePage } from "./pageObjects/angularHomePage";


describe('Chain locators demo',()=> {  
	
	
	it('Open Angular js website',async()=> {
		
let calc=new calculator();
		
		await browser.get('http://juliemr.github.io/protractor-demo/');
		//repeater,  chain locators, And css for identical tags
		await calc.firstEditBox.sendKeys("3");
		await calc.secondEditBox.sendKeys("5");
			
	    await calc.go.click();
	    await calc.getResult.getText().then(function(text)
			{
		console.log(text);
			})
			
			
		//	element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
	
		
	})
    
    

    it('Angular home page title validation',async()=>{

        let ah=new angularHomePage();
await browser.get("https://angularjs.org/");
await ah.angularLink.click();
browser.sleep(3000);
await ah.search.sendKeys("hello");

    })


})
