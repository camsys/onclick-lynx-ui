import { OneclickLynxUiPage } from './app.po';

describe('oneclick-lynx-ui App', () => {
  let page: OneclickLynxUiPage;

  beforeEach(() => {
    page = new OneclickLynxUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
