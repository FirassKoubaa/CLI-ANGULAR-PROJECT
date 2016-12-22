import { FirasCLIPage } from './app.po';

describe('firas-cli App', function() {
  let page: FirasCLIPage;

  beforeEach(() => {
    page = new FirasCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
