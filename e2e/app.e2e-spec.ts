import { RestAppDemoPage } from './app.po';

describe('rest-app-demo App', () => {
  let page: RestAppDemoPage;

  beforeEach(() => {
    page = new RestAppDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
