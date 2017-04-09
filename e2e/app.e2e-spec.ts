import { SmstFrontendPage } from './app.po';

describe('smst-frontend App', () => {
  let page: SmstFrontendPage;

  beforeEach(() => {
    page = new SmstFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
