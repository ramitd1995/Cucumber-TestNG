package testRunner;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;



@CucumberOptions(
	features = "src/test/java/FeatureFile",
	glue = {"stepDefinitions"},
	tags = {"@SmokeTest"},  // Two types of tag: custom and default, https://www.toolsqa.com/cucumber/cucumber-tags/
	format = {
	                "pretty",
	                "html:target/cucumber-reports/cucumber-pretty",
	                "json:target/cucumber-reports/CucumberTestReport.json",
	                "rerun:target/cucumber-reports/rerun.txt"
	        },plugin = "json:target/cucumber-reports/CucumberTestReport.json")


public class Runner {
	
	//public static WebDriver driver;
	private TestNGCucumberRunner testNGCucumberRunner;
	
	@BeforeClass
	public void setUp() throws Exception
	{
		testNGCucumberRunner = new TestNGCucumberRunner(Runner.class);
	}
	
	
	@Test(dataProvider="features")
	  public void my_test(CucumberFeatureWrapper cucumberFeature) // CucumberFeatureWrapper is an interface for making TestNG report more descriptive
	{
		testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	}
	
	
	@DataProvider
    public Object[][] features()
	{
		return testNGCucumberRunner.provideFeatures();		
	}
	
	
	@AfterClass
    public void tearDown()
	{
		testNGCucumberRunner.finish();	
	}
	
		


}
