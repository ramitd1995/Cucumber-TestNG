package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class AppleStepDefinitions {

	WebDriver driver;
	
	@Before  // Before Hook
	public void setUp()
	 { 
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Lenovo-I7\\Desktop\\chromedriver.exe"); 
		driver = new ChromeDriver();
	   } 

	@Given("^user is already on apple website$")
	public void user_is_already_on_apple_website()
	{
		driver.get("https://www.apple.com/");	
	}
	
	
	@Then("^direct to ipad$")
	public void direct_to_ipad()
	{
		WebElement ipad = driver.findElement(By.xpath("//*[@id=\'ac-globalnav\']/div/ul[2]/li[3]"));
		ipad.click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	@When("^title is iPad - Apple$")
	public void title_is_iPad_Apple()
	{
		 String title = driver.getTitle();
		 System.out.println("iPad Page title ::"+ title);
		 Assert.assertEquals("iPad - Apple", title);
	}
	
	@Then("^direct to ipad air$")
	public void direct_to_ipad_air()
	{
		WebElement ipadAir= driver.findElement(By.cssSelector("#chapternav > div > ul > li.chapternav-item.chapternav-item-ipad-air > a"));
		ipadAir.click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);		
	}
	
	@Then("^search for \"([^\"]*)\"$")
	public void search_for_airpods_by_keyword(String airpodsKeyword) throws InterruptedException
	{
		WebElement search = driver.findElement(By.id("ac-gn-link-search"));
		search.click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);	
		
		driver.findElement(By.id("ac-gn-searchform-input")).sendKeys(airpodsKeyword);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Thread.sleep(2000);
		
		driver.findElement(By.xpath("//*[@id=\"quicklinks\"]/li[1]/a")).click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		// throw new PendingException();
	}
	
	@When("^title is AirPods - Apple$")
	public void title_is_AirPods_Apple()
	{
		 String title = driver.getTitle();
		 System.out.println("Airpods Page title ::"+ title);
		 Assert.assertEquals("AirPods - Apple", title);
	}
	
	@Then("^print welcome to the airpods official webpage$") 
	public void print_message()
	{
		System.out.println("Welcome to airpod official web page");
	}
	
	 @After // After Hook
	 public void cleanUp()
	 { 
		 driver.quit(); 
	   } 
	

}
