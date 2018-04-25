import { browser, by, element } from 'protractor';

export class AppPage {

  navigateToHome() {
    return browser.get('/');
  }

  navigateToIndex() {
    return browser.get('/index');
  }

  getParagraphText(selector) {
    return element(by.css(selector)).getText();
  }
}
