$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SearchFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Make sure User can search the respective searched product",
  "description": "",
  "id": "make-sure-user-can-search-the-respective-searched-product",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validate the search results are displayed",
  "description": "",
  "id": "make-sure-user-can-search-the-respective-searched-product;validate-the-search-results-are-displayed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I launch the amazon application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search the \"laptop\" in the search box",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the first search result",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I display the price of the first laptop",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchResultsStepDef.iLaunchTheAmazonApplication()"
});
formatter.result({
  "duration": 271278897,
  "error_message": "com.google.inject.ConfigurationException: Guice configuration errors:\r\n\r\n1) No implementation for org.openqa.selenium.WebDriver was bound.\r\n  while locating org.openqa.selenium.WebDriver\r\n    for field at com.app.pages.BasePage.driver(BasePage.java:13)\r\n  while locating com.app.pages.SearchResultsPage\r\n    for field at com.app.steps.SearchSteps.searchResultsPage(SearchSteps.java:11)\r\n  while locating com.app.steps.SearchSteps\r\n    for field at com.app.tests.SearchResultsStepDef.searchSteps(SearchResultsStepDef.java:14)\r\n  while locating com.app.tests.SearchResultsStepDef\r\n\r\n2) No implementation for org.openqa.selenium.WebDriver was bound.\r\n  while locating org.openqa.selenium.WebDriver\r\n    for field at com.app.pages.BasePage.driver(BasePage.java:13)\r\n  while locating com.app.pages.HomePage\r\n    for field at com.app.steps.ApplicationSteps.homePage(ApplicationSteps.java:11)\r\n  while locating com.app.steps.ApplicationSteps\r\n    for field at com.app.tests.SearchResultsStepDef.appSteps(SearchResultsStepDef.java:14)\r\n  while locating com.app.tests.SearchResultsStepDef\r\n\r\n3) No implementation for java.lang.Integer annotated with @com.google.inject.name.Named(value\u003dtest.element.wait.seconds) was bound.\r\n  while locating java.lang.Integer annotated with @com.google.inject.name.Named(value\u003dtest.element.wait.seconds)\r\n    for field at com.app.pages.BasePage.elementWait(BasePage.java:13)\r\n  while locating com.app.pages.SearchResultsPage\r\n    for field at com.app.steps.SearchSteps.searchResultsPage(SearchSteps.java:11)\r\n  while locating com.app.steps.SearchSteps\r\n    for field at com.app.tests.SearchResultsStepDef.searchSteps(SearchResultsStepDef.java:14)\r\n  while locating com.app.tests.SearchResultsStepDef\r\n\r\n4) No implementation for java.lang.Integer annotated with @com.google.inject.name.Named(value\u003dtest.element.wait.seconds) was bound.\r\n  while locating java.lang.Integer annotated with @com.google.inject.name.Named(value\u003dtest.element.wait.seconds)\r\n    for field at com.app.pages.BasePage.elementWait(BasePage.java:13)\r\n  while locating com.app.pages.HomePage\r\n    for field at com.app.steps.ApplicationSteps.homePage(ApplicationSteps.java:11)\r\n  while locating com.app.steps.ApplicationSteps\r\n    for field at com.app.tests.SearchResultsStepDef.appSteps(SearchResultsStepDef.java:14)\r\n  while locating com.app.tests.SearchResultsStepDef\r\n\r\n5) No implementation for java.lang.String annotated with @com.google.inject.name.Named(value\u003dapp.url) was bound.\r\n  while locating java.lang.String annotated with @com.google.inject.name.Named(value\u003dapp.url)\r\n    for field at com.app.pages.HomePage.applicationUrl(HomePage.java:12)\r\n  while locating com.app.pages.HomePage\r\n    for field at com.app.steps.ApplicationSteps.homePage(ApplicationSteps.java:11)\r\n  while locating com.app.steps.ApplicationSteps\r\n    for field at com.app.tests.SearchResultsStepDef.appSteps(SearchResultsStepDef.java:14)\r\n  while locating com.app.tests.SearchResultsStepDef\r\n\r\n6) No implementation for org.openqa.selenium.WebDriver was bound.\r\n  while locating org.openqa.selenium.WebDriver\r\n    for field at com.app.pages.HomePage.driver(HomePage.java:12)\r\n  while locating com.app.pages.HomePage\r\n    for field at com.app.steps.ApplicationSteps.homePage(ApplicationSteps.java:11)\r\n  while locating com.app.steps.ApplicationSteps\r\n    for field at com.app.tests.SearchResultsStepDef.appSteps(SearchResultsStepDef.java:14)\r\n  while locating com.app.tests.SearchResultsStepDef\r\n\r\n6 errors\r\n\tat com.google.inject.internal.InjectorImpl.getProvider(InjectorImpl.java:1045)\r\n\tat com.google.inject.internal.InjectorImpl.getProvider(InjectorImpl.java:1004)\r\n\tat com.google.inject.internal.InjectorImpl.getInstance(InjectorImpl.java:1054)\r\n\tat cucumber.runtime.java.guice.impl.GuiceFactory.getInstance(GuiceFactory.java:42)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:483)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n\tat ✽.Given I launch the amazon application(features/SearchFeature.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "laptop",
      "offset": 14
    }
  ],
  "location": "SearchResultsStepDef.iSearchTheInTheSearchBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultsStepDef.iClickTheFirstSearchResult()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchResultsStepDef.iDisplayThePriceOfTheFirstLaptop()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 777852,
  "error_message": "com.google.inject.ConfigurationException: Guice configuration errors:\r\n\r\n1) No implementation for org.openqa.selenium.WebDriver was bound.\r\n  while locating org.openqa.selenium.WebDriver\r\n    for field at com.app.tests.CucumberHooks.driver(CucumberHooks.java:12)\r\n  while locating com.app.tests.CucumberHooks\r\n\r\n1 error\r\n\tat com.google.inject.internal.InjectorImpl.getProvider(InjectorImpl.java:1045)\r\n\tat com.google.inject.internal.InjectorImpl.getProvider(InjectorImpl.java:1004)\r\n\tat com.google.inject.internal.InjectorImpl.getInstance(InjectorImpl.java:1054)\r\n\tat cucumber.runtime.java.guice.impl.GuiceFactory.getInstance(GuiceFactory.java:42)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:483)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
});