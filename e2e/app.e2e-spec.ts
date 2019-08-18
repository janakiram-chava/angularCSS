import { AngularCSSPage } from './app.po';

describe('angular-css App', function() {
  let page: AngularCSSPage;

  beforeEach(() => {
    page = new AngularCSSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
