@Test
public void testGoogleSearch() {
  
  System.setProperty("webdriver.chrome.driver", "/C/Users/MInedMinds/Documents");

  WebDriver driver = new ChromeDriver_do ();
  driver.get("http://www.google.com/xhtml");
  Thread.sleep(5000);  
  WebElement searchBox = driver.findElement(By.name("q"));
  searchBox.sendKeys("ChromeDriver");
  searchBox.submit();
  Thread.sleep(5000);
  driver.quit();
}