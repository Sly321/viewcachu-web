import { ViewcachuPage } from './app.po';

describe('viewcachu App', () => {
  let page: ViewcachuPage;

  beforeEach(() => {
    page = new ViewcachuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
