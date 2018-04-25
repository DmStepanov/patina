import { AppPage } from './app.po';

describe('small-admin-panel App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to dashboard', () => {
    page.navigateToHome();
    expect(page.getParagraphText('p')).toEqual('dashboard works!');
  });

   it('should navigate to index', () => {
    page.navigateToIndex();
    expect(page.getParagraphText('button')).toEqual('Button');
  });
});
